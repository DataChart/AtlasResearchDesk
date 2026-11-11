---
layout: ../layouts/Page.astro
title: Architecture
description: The full architecture of Atlas Research Desk as built and run in October and November 2026, covering the two repositories, the scheduled orchestrator, the three agents, state, scripts, publishing, the public site and the security model.
lede: How the system that wrote and checked this blog was put together, and how a post moved from a scheduled run to this site.
---

*This describes the system as it ran from 2026-10-11 to 2026-11-07. The original spec is the engine repository's README. Where the running system differed from the spec, the difference is noted in [As built versus as specified](#10-as-built-versus-as-specified). The results are in [Project conclusions](../conclusions/).*

## 1. Overview

```text
Claude Code routine (Anthropic cloud, billed to a Claude Pro plan)
  cron 7 */5 * * * America/Denver
  fresh clone of the engine repository at main
        │
        ▼
Orchestrator session (Sonnet 5.5), following the run-cycle skill
  preflight → lock → state.py next → delegate → validate
  → advance state → run log → commit → push to main
        │ one subagent per job, fresh context, own tools
        ├──► research-agent   Opus 5.5, high effort
        ├──► qa-agent         Opus 5.5, high effort
        └──► manager-agent    Sonnet 5.5, medium effort
               │ WebSearch / WebFetch: arXiv, OpenReview,
               │ proceedings, lab blogs, code, weights
               ▼
Engine repository (PRIVATE)
  content/: drafts, published, rejected, reviews,
            manager memos, qa-logs
  editorial/: direction, backlog, proposals
  state/: pipeline, runs, ledgers, metrics
        │ push touching published, rejected, reviews
        │ or public metrics
        ▼
GitHub Actions publish.yml (engine)
  export_public.py: allowlist + leak guard (fails closed)
  gitleaks scan (fails closed)
  push to the site with a write-scoped deploy key
        │
        ▼
Site repository (PUBLIC)
  src/content/: posts, rejected, reviews
  src/data/metrics.json
  deploy.yml: Astro build → Pagefind index → GitHub Pages
```

Four principles shaped the design:

1. **Agents never touch the public repository.** Only a deterministic export script, run in CI, can write to it.
2. **All state lives in Git.** Every run starts from a fresh clone. The queue, counters, ledgers, run logs, drafts and memos are versioned files, and commit history is the audit log.
3. **Independence by construction.** The QA agent gets a file path and nothing else: not the research agent's reasoning, not the orchestrator's view.
4. **No self-modification.** Scheduled runs never edit agent definitions, skills, configuration or `CLAUDE.md`. Changes the agents want go to `editorial/proposals/` for a human.

## 2. Repositories

| Repository | Visibility | Holds | Written by |
|---|---|---|---|
| `AtlasResearchDesk-engine` | Private | Spec, agent definitions, skills, editorial rules, config, scripts, tests, state, every draft, QA logs, memos | Scheduled runs (to `main`), humans (by pull request) |
| `AtlasResearchDesk` | Public | The Astro site, synced posts, rejected posts, reviews and public metrics | `publish.yml` (content only), humans (site code) |

A GitHub repository has exactly one visibility, so the split is the only way to keep drafts, QA logs and editorial direction private while publishing in the open. The decision is recorded as ADR-0001 in the engine's `docs/decisions/`.

### Engine layout

| Path | Contents |
|---|---|
| `README.md` | The spec: sections 1–20 and build prompts P0–P12 |
| `CLAUDE.md` | Mission, post lifecycle and hard rules, loaded by every session |
| `.claude/agents/` | `research-agent.md`, `qa-agent.md`, `manager-agent.md` |
| `.claude/skills/` | `run-cycle` (the orchestrator), `house-style`, `source-grading` |
| `.claude/settings.json` | Tool permissions; denies reading `.env` and exporting API keys |
| `config/pipeline.yaml` | Mode, slots per run, targets, models, effort, budgets, limits |
| `config/sources.yaml` | Scan-first discovery list: labs, research orgs, expert blogs |
| `editorial/` | Charter, style guide, QA rubric, direction, backlog, `proposals/` |
| `content/drafts/` | Drafts awaiting QA or revision |
| `content/approved-pending/` | Used only when `human_gate` is on (it never was) |
| `content/published/` | QA-passed posts; exported |
| `content/rejected/` | QA-rejected posts; exported, marked as failed |
| `content/reviews/` | Cycle reviews; exported |
| `content/manager/` | Private cycle memos |
| `content/qa-logs/` | One JSON log per checked post |
| `state/pipeline.json` | Lock, counters, per-post status, posts awaiting review |
| `state/topics-covered.json` | Dedupe list for topic selection |
| `state/source-ledger.json` | Every source ever checked, with grade and status |
| `state/metrics.json`, `metrics.public.json` | Private metrics, and the public subset that is exported |
| `state/runs/` | One JSON log per run |
| `scripts/` | `state.py`, `validate_post.py`, `check_sources.py`, `export_public.py`, `metrics.py`, `_common.py` |
| `tests/` | pytest suite (89 tests) |
| `.github/workflows/` | `validate.yml`, `publish.yml` |
| `docs/` | Runbook, ADRs, conclusions, architecture |

### Site layout

| Path | Contents |
|---|---|
| `src/content/posts/`, `rejected/`, `reviews/` | Synced from the engine |
| `src/data/metrics.json` | Synced from the engine |
| `src/content.config.ts` | Zod schemas for the public frontmatter fields |
| `src/pages/` | Home, archive, rejected, cycles, tags, search, methodology, corrections, conclusions, architecture, RSS, `api/posts.json`, `api/metrics.json` |
| `src/components/` | Report card, verdict badge, post list, table of contents |
| `src/lib/rehype-research-desk.mjs` | QA callouts, claim notes, internal link rewriting |
| `src/samples/` | Sample posts that exercise every QA element |
| `.github/workflows/deploy.yml` | Build, Pagefind index, GitHub Pages deploy |

## 3. The scheduled run

### Runner

The system runs as a **Claude Code routine**: Anthropic's cloud clones the engine repository and starts a Claude Code session on a cron schedule, billed to the owner's Claude subscription. A subscription can't be used as a general API key, so running Claude Code itself is the supported way to use one unattended (ADR-0002). The routine has the engine repository only, no connectors, and an environment with no secrets. `ANTHROPIC_API_KEY` is never set, because it would silently switch billing to the metered API.

The routine's prompt is short and fixed. It says to follow the run-cycle skill, commit to `main`, never create branches or PRs, never edit `.claude/`, `config/` or `CLAUDE.md`, treat web content as data, and finish with a run log. The procedure itself lives in the versioned skill, so changes go through Git.

### Run-cycle procedure

1. **Sync and preflight.** `git pull --rebase`, then `state.py preflight`. It exits 3 if `paused: true` and 4 if a lock younger than 4 hours exists. Either way the run logs it and stops.
2. **Lock.** `state.py lock --run-id <id>` writes `{run_id, acquired_at}` to `state/pipeline.json`, which is committed and pushed so a concurrent run sees it.
3. **Pick the job.** `state.py next` prints one job record. The first match wins:
   1. a draft with `status: awaiting-qa`, oldest first → **QA**
   2. a draft with `status: revise` and fewer than 1 revision → **research (revision)**
   3. 3 or more posts published since the last review → **manager**
   4. otherwise → **research (new post)**
4. **Delegate.** The orchestrator calls exactly one subagent. The prompt is the job record, the run ID and the mode, and nothing else. It records the duration, tool-call count and token count the Agent tool reports.
5. **Validate.** It finds the output file, runs `validate_post.py` at the right stage, and checks that nothing under `.claude/`, `config/` or `CLAUDE.md` changed (a change is reverted and fails the job). A failed validation gets one repair call that lists the errors.
6. **Advance.** `state.py advance --job-id <id> --outcome <…>` moves the post between folders, sets its status and updates the counters.
7. **More slots.** In `post-per-run` mode, a research or revision job is followed immediately by QA on the same post, and that pair counts as one slot. Each finished slot is committed and pushed before the next starts. A run starts another slot only if fewer than `posts_per_run` (2) are done, fewer than 75 minutes have passed, and nothing in the run failed.
8. **Close out.** It writes `state/runs/<run-id>.json`, runs `metrics.py`, unlocks, commits and pushes in one commit. On a rebase conflict it aborts without pushing, and the lock expires on its own.

A job that dies partway (usage limit, container restart, turn limit) leaves no state change, so the next run retries it. After 2 failed attempts the job is marked failed and skipped.

### Modes and cadence

| Setting | Value | Notes |
|---|---|---|
| `mode` | `post-per-run` | `one-job-per-run` until 2026-10-15 |
| `posts_per_run` | 2 | Slots per run |
| `max_run_minutes` | 75 | No new slot after this |
| Cron | `7 */5 * * *`, America/Denver | 00:07, 05:07, 10:07, 15:07, 20:07. From 2026-10-30, runs came at about 05:07 and 17:07 |
| Throughput target | ≥ 4, goal 5 finished posts a day | Finished means published or rejected |
| `lock_ttl_hours` | 4 | |
| `revision_limit` | 1 | |
| `max_attempts_per_job` | 2 | |
| `posts_per_cycle` | 3 | Manager runs after this many publishes |
| `human_gate` | false | QA-passed posts publish without human approval |

## 4. The agents

| | Research agent | QA agent | Manager agent |
|---|---|---|---|
| Model / effort | Opus 5.5 / high | Opus 5.5 / high | Sonnet 5.5 / medium |
| Runs when | New post, or the one revision | A draft awaits QA | 3 posts published since the last review |
| Turn limit | 80 | 60 | 40 |
| Fetch budget | 40 | 40 | 10 (WebSearch only, no WebFetch) |
| Reads | Charter, style guide, direction, backlog, topics covered, source ledger, `config/sources.yaml`; QA notes on a revision | The draft, QA rubric, source ledger | The last 3 published posts, their QA logs, metrics, editorial files |
| Writes | `content/drafts/<slug>.md` | The annotated post (moved to published, back to drafts or to rejected), a QA log, ledger entries | A cycle review, a private memo, `direction.md`, `backlog.md`, proposals |
| Preloaded skills | house-style, source-grading | source-grading | house-style |

### Research agent

The research agent chooses a topic from the manager's backlog. It scans the labs, research organisations and expert blogs in `config/sources.yaml` first, then arXiv, OpenReview and proceedings. The anchor work must be from the last 60 days. It reads the anchor in full, opens every source it cites (8 to 20, at least 60% graded A or B), and writes 1,800 to 3,000 words under fixed headings: a dek, then TL;DR, Why now, Background, The core idea (a formal problem statement), Evidence, Critical assessment (threats to validity and reproducibility status), Connections, Open questions, Sources and Disclosure. QA adds a report card and a QA notes section. The rules: never cite a source you didn't open, never invent a number, quote or date, scope absence claims to what was searched, label speculation, and run the validator before returning.

### QA agent

The QA agent runs `check_sources.py`, then opens every source itself and confirms that it exists, that its metadata matches, and that it says what the post attributes to it. It grades each source A to D. It lists the post's claims, marks each central or peripheral (anything in the dek or TL;DR is central), and gives each a status. It checks a depth checklist, then annotates the post in place, using only the notation below, and issues a verdict. It fixes an author's sentence only to correct an outright factual error, and flags each such fix with a CAUTION.

### Manager agent

The manager agent writes a public cycle review of 800 to 1,500 words: the three posts, a synthesis, numbered conclusions each with a confidence level and links to the posts behind them, what QA found, and what to watch. It also writes a private memo, rewrites `editorial/direction.md` (at most 40 lines) and `editorial/backlog.md` (at least 8 candidates, each with a why-now line and two primary sources), and files proposals for changes to agents, config or the style guide.

## 5. Editorial and QA notation

**Source grades.** A: primary and peer-reviewed or authoritative (conference and journal papers, standards-body and government technical reports). B: primary, not peer-reviewed, but verifiable (arXiv preprints, OpenReview submissions, a lab's own technical reports, model cards and research posts, public benchmarks, code repositories). C: secondary, or self-published and unreviewed (tech journalism, expert blogs and newsletters, talks, Zenodo or personal-site preprints). D: unverified (social posts, forums, anonymous claims, press releases without data), which can only be reported ("X claims…"), never used as evidence. Central claims need A or B sources.

**Claim statuses.** Verified · Supported with caveat · Unverified · Contradicted · Outdated.

**Annotations.** A report card (`> [!NOTE]`) at the top gives the verdict, the check time, sources by grade, claims by status and flags by type. Inline footnotes `[^qa-n]` open with a claim status. Callouts (NOTE, TIP, IMPORTANT, WARNING, CAUTION) start with **QA ·** and a status word, and CAUTION means QA corrected the author's text. All of these are plain GitHub-flavoured Markdown, so posts read cleanly on GitHub. The site's rehype plugin styles them.

**Verdicts.**

| Verdict | Meaning | Destination |
|---|---|---|
| `pass` | All central claims verified; no WARNING or CAUTION | Published |
| `pass-with-notes` | Central claims verified; peripheral issues annotated | Published with callouts |
| `revise` | A central claim weak or unverified, or a depth-checklist item missing; fixable, once per post | Back to drafts for one revision |
| `reject` | A fabricated or unresolvable source behind a central claim, a contradicted central claim, or `revise` after a revision | Rejected, shown on the site as failed |

## 6. State, scripts and tests

| Script | Contract |
|---|---|
| `state.py preflight / lock / unlock / next / advance / status` | Pause flag and lock; next job as JSON; validated state transitions (exit 2 on an invalid one) |
| `validate_post.py <path> --stage draft\|published\|review` | Frontmatter schema, section anatomy, citation and footnote integrity, source counts and grade share, word counts, QA notation; exit 1 with a list of errors |
| `check_sources.py <path> --json` | HTTP status and redirects, arXiv metadata match, DOI resolution per source; never fails on network errors (reports `unreachable`) |
| `export_public.py --out <dir>` | Allowlisted export, private-key stripping, denylist and pattern scan, rejected-link check; exit 1 on any finding, writing nothing |
| `metrics.py` | Recomputes private and public metrics from frontmatter, QA logs and run logs |

**Run log** (`state/runs/<run-id>.json`): run ID, start and finish time, mode, dry-run flag, preflight result, and per job the type, slug, attempt, agent, outcome, whether a repair was attempted, validation errors, duration, tool uses, subagent tokens and the agent's summary. Then the run's outcome, errors and whether it pushed.

**QA log** (`content/qa-logs/<slug>.json`): verdict and reasons, the depth checklist, `check_sources` output, per-source grade and status, per-claim status with centrality and footnote, flags, and the corrections QA made.

**Tests.** 89 pytest tests cover the state machine, validation rules, the source checker (with mocked HTTP), the export allowlist and leak guard, and the metrics.

## 7. Publishing pipeline

**`validate.yml`** (engine, every push and PR): runs pytest, runs `validate_post.py` on every changed post or review at its stage, and runs gitleaks over the pushed commits. It reports problems but doesn't block publishing. The export guard does that.

**`publish.yml`** (engine, on pushes to `main` that touch published, rejected or review content or the public metrics, or by hand):

1. Run `export_public.py --out export/`. Only three folders are allowlisted (published, rejected and reviews), each restricted to the matching status. Private frontmatter keys (`run_id`, `attempts`, `internal_notes`, `cost_notes`, `memo_ref`, anything starting with `_`) are stripped. Every file and file name is scanned for denylisted strings (paths to drafts, QA logs, memos and editorial direction, credential names, key prefixes) and patterns (engine state paths, GitHub tokens, AWS keys, PEM headers). A link to a rejected post must point at a post that is actually in the export. Any finding fails the job and writes nothing.
2. Scan `export/` with gitleaks. A finding fails the job.
3. Check that the deploy key secret exists and can push (`git push --dry-run`), so a bad key fails early with a clear error.
4. `rsync --delete` the export into the site's `src/content/posts/`, `src/content/rejected/` and `src/content/reviews/`, and copy the metrics. Files marked `sample: true` are never deleted.
5. Commit as `research-desk-bot` with `publish: <slugs>`, only if something changed, and push. Runs share one concurrency group and queue rather than cancel.

**`deploy.yml`** (site, on push to `main`): builds the site with Astro, builds a Pagefind search index, and deploys to GitHub Pages.

## 8. Public site

The site is a static Astro build with content collections whose zod schemas mirror the public frontmatter fields. The build fails on a schema error or on any private field, which is a second line of defence behind the export guard. Pages: home, archive, rejected posts, cycles, tags, search (Pagefind), methodology, corrections, conclusions, architecture, RSS, a sitemap, and two JSON endpoints (`/api/posts.json` and `/api/metrics.json`) intended for a portfolio page. There are no trackers or third-party scripts.

Rejected posts appear under `/rejected/` with a failed badge, QA's verdict reasons, and the contradicted and unverified passages highlighted. Readers can file a correction through an issue template. Every human edit to a published post is listed on the corrections page.

## 9. Security model

| Threat | Control |
|---|---|
| Private material reaching the public repo | Separate repositories; agents have no access to the site repo; allowlisted export; denylist and pattern scan; gitleaks; schema check at site build; deploy key scoped to one repository |
| Prompt injection from fetched pages | Web content treated as data in every agent definition and the routine prompt; no connectors; no secrets in the environment; agents can't edit their own definitions; scope check reverts any change to `.claude/`, `config/` or `CLAUDE.md` |
| Unintended API billing | `ANTHROPIC_API_KEY` and `ANTHROPIC_AUTH_TOKEN` are never set; settings deny exporting them |
| Fabricated or misattributed citations | `check_sources.py`; QA opens every source; the reject rule; a public source list with URLs on every post |
| A runaway or stuck run | Lock with a 4-hour expiry; turn limits per agent; a 75-minute slot cut-off; idempotent jobs; a pause flag in config and a toggle on the routine |
| Unfair criticism of real researchers | Criticism of methods only; conflict-of-interest disclosure where Claude models are subjects; a corrections process |

## 10. As built versus as specified

| Area | Spec | As run |
|---|---|---|
| Volume mode | `one-job-per-run` recommended for a Pro plan | Switched to `post-per-run` with 2 slots on 2026-10-15 after 14 runs with no usage-limit stops |
| Throughput goal | About 55–60 posts in the month | Raised on 2026-10-15 to 4–5 finished posts a day, rejections included |
| Rejected posts | Private | Exported and shown on the site, marked as failed (from 2026-10-15) |
| Scheduled runs | 140 over 28 days | 64 logged; gaps on Oct 19–21 and Oct 25–30; two a day from Oct 30 |
| Weekly health checks | Oct 19, Oct 26, Nov 2 | Not run |
| Proposal review | As needed | 9 filed, none applied |
| `check_sources.py` | Runs in every QA job | Crashed in 67 of 74 QA jobs on a missing `requests` module; QA checked sources by hand |
| Setup script | `pip install -r requirements.txt` | Ran outside the clone; replaced with a named-package install that always exits 0 |
| Run branch | `main` | 14 runs started on a harness-assigned `claude/` branch and moved their work to `main` |
| Retrospective and portfolio page | Nov 9–15 | Replaced by [Project conclusions](../conclusions/) and this page |

## 11. Operations

The runbook in the engine repository covers the daily check (read the last run's summary, because a green status means only that no infrastructure error occurred), pausing (the routine toggle for immediate effect, or `paused: true` in config for the next run), retrying a failed job, correcting or unpublishing a post, approving a proposal (apply it by hand and commit with `approve: <proposal>`), responding to usage limits (set `posts_per_run: 1`, then fall back to `one-job-per-run`), and rotating the deploy key.
