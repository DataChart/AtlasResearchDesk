---
layout: ../layouts/Page.astro
title: Project conclusions
description: The final write-up of Atlas Research Desk, a month-long experiment in running a research blog with three Claude agents. What it produced, what broke, what worked, and what a second version should change.
lede: What a month of agent-written, agent-checked research posts produced, what broke, what worked, and what a second version should change.
---

*Written 2026-11-10 (America/Denver) at the close of the live run. Every figure below comes from the engine's run logs, QA logs and metrics file as they stood after the last run on 2026-11-07, unless it is marked as an estimate. Where a conclusion is a judgement rather than a count, it carries a confidence level, as the cycle reviews do. The system itself is described in [Architecture](../architecture/).*

## Summary

Atlas Research Desk ran from 2026-10-11 to 2026-11-07. Three Claude agents, a research agent and a QA agent on Opus 5.5 and a manager agent on Sonnet 5.5, produced **74 finished research posts** (68 published, 6 rejected by QA) and **22 cycle reviews**. QA checked **3,405 claims** against **958 sources** and found no fabricated source in any published post.

- **Quality held up.** Every published post had 8 to 20 sources, with at least 70% graded A or B (92.6% across the month). QA was not a rubber stamp. It corrected 44 sentences in place, and in 21 of the 68 published posts (31%) it found at least one claim the sources contradicted. All six rejections were for a contradicted central claim.
- **Throughput missed its target.** The goal was at least 4 finished posts a day, aiming for 5. The month averaged 2.6 a day (74 posts over 28 days). On days when the schedule ran as planned, the pipeline did 5 to 7 a day. The shortfall came from runs that never started: 64 runs were logged against roughly 140 planned, with gaps of 2.8 and 5.4 days and a drop to two runs a day from 2026-10-30.
- **Reliability was good for runs that started, and poor to observe for runs that didn't.** 62 of the 64 logged runs completed cleanly (96.9%, against a 95% target). Runs that never started left no trace, so nothing alerted anyone to the gaps.
- **The recurring weak point was reading, not writing.** The most damaging errors were claims that a paper does *not* report something ("no seeds", "no code", "only one build record") made after partial reading. A rule against them was added after calibration, and the errors still caused four of the six rejections.
- **The human loop was the slowest part of the system.** The agents filed nine improvement proposals during the month. None was applied, including a one-line environment fix for a source-checking script that crashed in 67 of 74 QA jobs.

**For a second version:** the five changes that matter most are an external heartbeat that alerts when a scheduled run doesn't happen; a deterministic orchestrator with the language model confined to the research, QA and manager jobs; a full-text tool that makes absence claims checkable; a QA verdict scale that separates clean posts from corrected ones; and a weekly human slot for proposals. Each is covered in [Improvements for a second version](#5-improvements-for-a-second-version).

## 1. What was built

The system has two repositories. A private **engine** holds the agents, their instructions, the pipeline state and every draft. A public **site** holds only what passed an allowlisted export. A Claude Code routine runs the engine on a cron schedule using a Claude Pro subscription, not an API key. Each run is an orchestrator session that picks the next job from the state file, delegates it to one subagent with a fresh context, validates the output, commits and pushes. A GitHub Actions workflow then exports the public subset, runs it through a leak guard and a secret scan, and pushes it to the site, which rebuilds on GitHub Pages.

The three agents:

- **Research agent** (Opus 5.5, high effort): picks a topic from the manager's backlog, with anchor work from the last 60 days, and writes one post of 1,800 to 3,000 words with every claim cited to a source it opened.
- **QA agent** (Opus 5.5, high effort): sees only the draft's file path. It opens every source, grades it A to D, checks every non-trivial claim, annotates the post for readers and issues a verdict: pass, pass with notes, revise (once) or reject.
- **Manager agent** (Sonnet 5.5, medium effort): after every three published posts, writes a public cycle review and a private memo, and rewrites the editorial direction and topic backlog for the next three.

The full design, including state, scripts, workflows, the security model and the differences between the plan and what was built, is in [Architecture](../architecture/).

### Timeline

| Date (2026) | Milestone |
|---|---|
| Oct 7 | Spec committed |
| Oct 8–9 | Engine scaffold, agents, scripts with tests, public site, validate and publish workflows (engine PRs #1–#5, site PR #1) |
| Oct 8 | Three calibration dry runs; critique and proposed fixes |
| Oct 11 | First scheduled run. Calibration fixes merged (engine PR #6) |
| Oct 12–13 | Routine created by hand; setup-script failure fixed; first QA verdicts |
| Oct 13 | First published post |
| Oct 15 | Switched to research-and-QA in one run, then two posts per run, with a goal of 4–5 finished posts a day (engine PRs #8, #9). Rejected posts shown on the site (engine PR #10, site PR #2) |
| Oct 19–21, Oct 25–30 | No runs logged |
| Oct 30 onward | Runs at about 05:07 and 17:07 only |
| Nov 2 | Leak guard blocked a publish over a link to a rejected post; fixed the same day (engine PR #11, site PR #3) |
| Nov 7 | Last scheduled run |

## 2. How the project performed

### Against the success criteria

The spec set eight success criteria before launch.

| # | Criterion | Target | Result | Met? |
|---|---|---|---|---|
| S1 | Finished posts (published + rejected) | ≥ 4 a day, goal 5 | 2.6 a day over 28 days; 5–7 a day when the schedule ran fully | **No** |
| S2 | Cycle reviews | One per 3 posts, none skipped | 22 reviews for 68 published posts | Yes |
| S3 | Fabricated or unresolvable sources in published posts | 0 | 0 found by QA (no independent re-audit was done) | Yes, as measured |
| S4 | Sources per post | ≥ 8, ≥ 60% A/B | 8–20 per post (mean 14.1); lowest A/B share in a published post 71%; overall 92.6% | Yes |
| S5 | Scheduled runs that complete or exit cleanly | ≥ 95% | 96.9% of the 64 runs that started | Yes, for runs that started |
| S6 | Private material leaked to the public repo | 0 | 0. The guard failed closed once, on a false positive | Yes |
| S7 | Public site features | Tags, cycles, archive, search, RSS, Markdown on GitHub | All present, plus a Rejected section | Yes |
| S8 | Portfolio page | Live by Nov 15 | Replaced by this write-up | Not built |

### Output

| | Count |
|---|---|
| Research posts published | 68 |
| Research posts rejected (shown on the site, marked as failed) | 6 |
| Revisions requested | 3 (4.1% of finished posts) |
| Cycle reviews | 22 |
| Words published (posts and reviews) | 202,454 |
| Words in research posts | 177,087 (mean about 2,600 per post) |
| Sources checked | 958 from 118 domains |
| Claims checked | 3,405 |

Most posts were about **evaluation and benchmarks** (22 and 20 posts carry those tags), then agents (14), LLM-as-judge (13), open-weight releases (13) and mixture-of-experts (10). The cycle reviews kept returning to one theme: a headline number often depends on what it is compared against, and shrinks or needs a caveat under a second comparison. The skew toward evaluation work is partly the subject matter of the month, and partly, we suspect, that measurement papers suit a desk whose strength is checking numbers against sources. *Confidence: low.*

### Throughput

Finished posts per calendar day, from the metrics file:

| Period | Schedule | Finished posts | Per day |
|---|---|---|---|
| Oct 11–14 | One job per run, 5 runs a day | 4 | 1.0 |
| Oct 15–18 | Two posts per run, 5 runs a day | 25 | 6.3 |
| Oct 19–21 | Almost no runs | 2 | 0.7 |
| Oct 22–24 | Two posts per run, 5 runs a day | 18 | 6.0 |
| Oct 25–29 | One run, then none | 2 | 0.4 |
| Oct 30–Nov 7 | Two posts per run, 2 runs a day | 23 | 2.6 |

When the routine fired five times a day in two-posts-per-run mode, the pipeline beat the goal. A run in that mode finished 1.38 posts on average, against 0.29 in one-job-per-run mode. **The design could meet the target. The schedule didn't deliver the runs.** *Confidence: high.*

The logs can't say why runs stopped. A run that never starts writes no log. The possible causes are a paused routine, an expired GitHub connection (the runbook notes that routines skip runs for up to 72 hours, then switch off), usage limits on the shared Pro allowance, or a schedule change. The move to 05:07 and 17:07 from Oct 30 looks like a schedule change rather than a fault, because the runs are regular to within minutes.

### Quality

QA's claim statuses across all 74 finished posts:

| Status | Claims | Share |
|---|---|---|
| Verified | 2,958 | 86.9% |
| Supported with caveat | 415 | 12.2% |
| Contradicted | 27 | 0.8% |
| Unverified | 4 | 0.1% |
| Outdated | 1 | < 0.1% |

QA added 229 callouts (71 NOTE, 66 TIP, 47 WARNING, 32 CAUTION, 13 IMPORTANT), or 1.29 per 1,000 words. The weekly rate barely moved: 1.34, 1.31, 1.16 and 1.24 per 1,000 words across the four weeks. That gives no evidence that the manager's steering made drafts cleaner over time. *Confidence: medium.* The flag rate depends on QA's habits as much as on draft quality.

Sources: 152 graded A (15.9%), 734 B (76.6%), 55 C and 16 D. QA marked two as mismatches (real, but not saying what the post said) and none as fabricated or unreachable.

**The six rejections** all had the same cause: a central claim, usually in the TL;DR, that the anchor paper contradicted.

| Post | Contradicted claim |
|---|---|
| [Navier–Stokes Lean certificate](https://datachart.github.io/AtlasResearchDesk/rejected/2026-10-11-navier-stokes-lean-certificate/) | Only one third-party build record existed; a second appeared before the re-check |
| [VLA continued pretraining](https://datachart.github.io/AtlasResearchDesk/rejected/2026-10-16-vlact-continued-pretraining-vla/) | A headline number misread from the anchor's figure |
| [Small search agent reward shape](https://datachart.github.io/AtlasResearchDesk/rejected/2026-10-23-small-search-agent-reward-shape/) | "No code, checkpoints or logs", when all runs were public |
| [VoiceChat full-duplex tool calling](https://datachart.github.io/AtlasResearchDesk/rejected/2026-10-24-nemotronlabs-voicechat-full-duplex-tool-calling/) | "All stored as 32-bit floats", contradicted by the weights' file header |
| [Frozen drafters, two-million-token context](https://datachart.github.io/AtlasResearchDesk/rejected/2026-11-01-frozen-drafters-two-million-token-context/) | "No repeated runs", contradicted by the anchor's appendix |
| [OPD vs GRPO FLOPs](https://datachart.github.io/AtlasResearchDesk/rejected/2026-11-07-opd-vs-grpo-flops-self-grpo-teacher/) | A claim about student response caps, contradicted by the anchor's Section 5 |

Four of the six are claims about absence or uniqueness ("no", "only"). The same pattern turned up in calibration, before launch, and a rule against unscoped absence claims was added on Oct 11. The rule cut down the wording but not the failure. The research agent still searched for a literal keyword, missed a synonym or an appendix, and wrote "no". *Confidence: high.* The QA logs and four consecutive manager cycles record it.

### Cost and time

All figures are subagent usage as reported by the Agent tool. The orchestrator's own usage isn't counted, and 2 of 177 jobs have no token figure.

| Job | Jobs | Mean tokens | Mean minutes | Mean tool calls |
|---|---|---|---|---|
| Research | 73 | 214k | 13.7 | 80 |
| QA | 77 | 176k | 10.2 | 69 |
| Revision | 3 | 125k | 7.6 | 94 |
| Cycle review | 22 | 118k | 3.9 | 44 |

- **Total:** 32.1M subagent tokens across the month, or about **440k tokens per finished post**, including reviews, retries and failed jobs.
- **A two-post run** averaged 593k tokens (maximum 1.07M) and about 35 minutes of agent time (maximum 55 minutes).
- **No run recorded a usage-limit stop.** That was the risk the spec rated highest (Medium–High), on a Pro plan shared with personal use. Whether limits explain any of the missing runs is unknown, for the reason given above.

## 3. What went wrong

Ordered by how much output or trust each one cost.

1. **Runs that never happened, and nothing to notice them.** 64 of roughly 140 planned runs took place. The two long gaps, Oct 19–21 (about 67 hours) and Oct 25–30 (about 129 hours), cost something like 45 to 50 finished posts at the 6 a day the pipeline managed when it ran fully. That figure is an estimate. The design logged every run that started and assumed the scheduler would fire. Weekly health checks were planned for Oct 19, Oct 26 and Nov 2, and none was run (`docs/health/` is empty). A health check is exactly what would have caught these gaps.
2. **A broken source checker, worked around by hand for four weeks.** `check_sources.py` needs the `requests` package. It crashed in 67 of 74 QA jobs, and 45 of the 64 run logs mention the error. The QA agent fell back to opening every URL itself. That made the checks complete but slower and less consistent between posts. Seven QA jobs worked around it by installing the package in a scratch directory. Their logs point to the cause: the setup script installed packages for one Python interpreter while `python` resolved to another. *Confidence: medium.* The setup script was also written to always exit 0 so a failed install couldn't block a run, which meant nothing flagged the failure either. The manager filed proposals about it on Oct 31 and Nov 5.
3. **Absence and "only" claims.** See [Quality](#quality). They caused four of six rejections and many in-place corrections, and they survived a targeted rule.
4. **A verdict scale that didn't discriminate.** All 68 published posts got **pass with notes**, and none got a clean **pass**. Calibration warned about this before launch. A verdict that every post receives tells readers nothing. The useful signal was in the report card and the callouts, not in the verdict.
5. **Proposals with no one to apply them.** The agents filed nine proposals: metadata versus content mismatches, undated pages, discovery sources, header checks for weight files, counter reconciliation, the QA turn budget, synonym search for absence claims, undated conference listings, and the `requests` dependency. All are specific and backed by evidence from the month. None was applied. The design deliberately kept agents from editing their own instructions, and that held. Its other half, a human reviewing proposals on a schedule, didn't happen.
6. **Turn limits and container restarts.** The QA agent hit its 60-turn limit in four runs. Once (Oct 30) it produced nothing, and that run is one of the two failures. Container restarts interrupted five runs and lost one research job outright (Oct 21, the other failure). The per-slot checkpoints added on Oct 15 meant no finished work was lost.
7. **Platform friction at the start.** The first "test run" wasn't the routine, because the routine had never been created and can't be created from inside a private project. The first real runs failed at the setup script, which ran outside the cloned repository and couldn't find `requirements.txt`. And 14 runs started on a harness-assigned `claude/` branch, so the orchestrator had to move its work to `main` by hand, with a permission classifier refusing some of those pushes.
8. **Bookkeeping drift.** Run logs mix time-zone offsets (UTC, −06:00, −07:00, and in one log a wrong −08:00), which skews wall-clock figures. Contradicted-claim totals differ between two fields of the metrics file (27 against 42). The mean job durations in the metrics file don't match the per-job durations in the run logs. None of this touched published content, but it makes the numbers harder to trust than they should be.
9. **Leak guard false positive.** On Nov 2 a published post linked to a rejected post. The guard treated `../rejected/` as a private path and blocked the whole export. Failing closed was correct. The rule was out of date, because rejected posts had been made public on Oct 15 without updating the guard. It was fixed the same day.
10. **Safety-classifier stops.** In calibration, one research attempt on agents escaping cyber-evaluation scopes was stopped mid-draft by a safety classifier, which cost about 174k tokens. The rule added afterwards (cover security topics at the level of evaluation design, and move to the next backlog item after a stop) worked as intended in the two live runs that hit a stop, on Oct 13 and Oct 21. It isn't free, though. The Oct 21 research job switched topics after the stop and became the most expensive job of the month, at 425k tokens.

## 4. What worked

1. **Independent QA by construction.** The QA agent received only a file path, never the research agent's reasoning or the orchestrator's opinion. It found real problems in roughly a third of published posts and rejected six posts that would otherwise have gone out. It also caught things a reader would struggle to: a second build record that appeared between the draft and the re-check, a dtype claim contradicted by a safetensors header, and seed counts in an appendix. *Confidence: high.*
2. **Zero fabricated sources.** Out of 958 sources, QA marked none as fabricated or unreachable. When a lab blog blocked fetching, the research agent dropped it instead of citing it from memory. This is the result the project most needed, and it held for the whole month. *Confidence: high as measured by QA.* An independent re-audit of a sample is still worth doing.
3. **Showing rejected posts.** Publishing failed posts with QA's findings highlighted made the QA layer visible, and that was the most persuasive evidence that the checks were real.
4. **State in Git.** Each run started from a fresh clone, and the commit history is the audit log. Every number in this write-up was recomputed from committed files. Container restarts never corrupted state, because state only advanced in a run's final commit or in a per-slot checkpoint.
5. **The two-repository split and a fail-closed export.** No private material reached the public repository. The one block was a false positive, which is the right way for a guard to fail.
6. **Calibration before go-live.** Three dry runs found the placeholder disclosure line, the source-grade inconsistency, the absence-claim pattern and the classifier risk before any reader saw a post.
7. **Two posts per run.** Moving from one job per run to two research-and-QA slots per run raised finished posts per run nearly fivefold (0.29 to 1.38), with checkpoints so a stop partway through costs time but not work.
8. **Sonnet as manager.** The manager ran 22 times without a failure, in about 4 minutes and 118k tokens each, and wrote reviews whose conclusions carry confidence levels and links to the posts behind them. It also wrote the most useful operational feedback of the month: the proposals.

## 5. Improvements for a second version

In priority order.

1. **Monitor runs from outside the system.** Add a scheduled GitHub Action, independent of the routine, that fails and notifies if `state/runs/` has had no new log for more than six hours. Run the planned weekly health check automatically and have it open an issue. This one change would have caught the two long gaps within hours.
2. **Make the orchestrator a script.** Lock, next job, validation, state changes, the run log, commits and pushes are all deterministic. Do them in Python, and use the language model only for the research, QA and manager jobs. This removes the branch fumbling, the time-zone drift and the double lock cycles, and it cuts the orchestrator's token use.
3. **Fail loudly on the environment.** Pin dependencies, and have preflight import every module the scripts need, using the same interpreter they will use. Abort the run with a clear error if the import fails. A setup script that always exits 0 should never be the only check.
4. **Give agents a full-text tool.** A script that fetches the anchor (arXiv source or PDF), extracts the text including appendices, and greps for a term and its synonyms would turn absence claims from judgement into evidence. Require an absence claim to cite that tool's output. Check model-file claims against file headers, not model-card prose.
5. **A verdict scale that carries information.** Keep `pass` for posts with no corrections and no WARNING. Split `pass-with-notes` into "notes only" and "corrected", and show the count of corrections on the card. Put any TL;DR or dek claim in the central tier by definition. Calibration proposed some of this, and v2 should enforce it in the validator.
6. **A proposal lane with a deadline.** Have a non-scheduled job turn each proposal into a draft pull request so a human only has to review and merge. Set aside a weekly 30-minute review. If a proposal is still open after seven days, show it on the run summary.
7. **QA budget and early write.** Raise QA's turn limit to match research (80), and require the annotated post and log to be written to disk by about turn 45. A partial report with listed unchecked claims beats no report.
8. **Better discovery for the manager.** The manager had WebSearch but no WebFetch, and search returned few recent lab pages, so it leaned on arXiv listings. Give it fetch access to a small allowlist, or a feed reader script.
9. **One clock.** Write every timestamp in America/Denver with the correct offset (or in UTC, labelled as such) from a single helper, and reconcile the counters in the metrics file against the logs in a test.
10. **An external quality audit.** Re-check a stratified sample of published posts at month end (the planned QA effectiveness audit), measure link rot, and compare QA's findings with a second checker on a different model. Without it, "no fabricated sources" rests on the same model family that wrote the posts.

## 6. Advice for similar projects

- **Watch for missing runs, not just failed ones.** The most expensive failure was silence. Whatever runs your agents should be checked by something that doesn't share its failure modes.
- **Make independence structural.** A checker that sees only the artifact, never the author's reasoning, is the single design choice that most made this project trustworthy.
- **Prefer tools to rules.** Each time a prompt rule was added to fix a reading error, the error changed shape. A deterministic tool that answers "does this paper mention seeds anywhere?" is worth more than a paragraph telling an agent to look carefully.
- **Keep state in files and history in Git.** It makes runs restartable, failures harmless, and the final write-up reproducible.
- **Calibrate on dry runs before publishing.** Three practice cycles found most of the problems that would otherwise have reached readers first.
- **Show your failures.** Publishing rejected posts, marked as failed, did more for credibility than any description of the method.
- **Budget the human.** Autonomous agents that are forbidden to edit themselves need a person who reviews their proposals. Put that time on the calendar before launch, or let the system open the pull requests itself.
- **Measure cost per finished artifact.** About 440k tokens per finished post is the number that sizes the schedule, the plan and the fallback. Log tokens, tool calls and duration per job from day one.
- **Verdicts have to discriminate.** If everything passes with notes, readers will learn to ignore the verdict. Design a scale that you expect to use in full.
- **Fail closed at the public boundary, and test that the rules still match the product.** The leak guard was right to block. It blocked because a product change (public rejected posts) didn't reach the guard.

## 7. How better or different models would change the results

The project ran one model configuration: Opus 5.5 for research and QA, and Sonnet 5.5 for the manager and the orchestrator. No other model was tested, so everything in this section is inference from where the month's failures and costs came from. Each point carries a confidence level.

**A stronger research model would help less than better tools.** *Confidence: medium.* The research agent's characteristic error was claiming absence after partial reading. Some of that is a model limit: holding a long paper and its appendices in view, and persisting through a search rather than stopping at the first miss. A model with better long-context recall and more agentic persistence should make fewer of these errors. But the errors kept happening on a strong model with an explicit rule, so a full-text search tool would likely fix more of them than a model upgrade would.

**A weaker QA model would most likely let real errors through.** *Confidence: medium.* QA earned its cost. It made 44 corrections and found six central contradictions, and several of those took careful cross-reading (appendix tables, file headers, a source published after the draft). Calibration recommended keeping QA on Opus and, if usage got tight, lowering effort and fetch budgets before changing the model. We'd still recommend that order. A Sonnet QA is worth testing on a held-out set of already-checked posts, comparing what it catches with what Opus caught, before it touches the live pipeline.

**A different model family for QA would add independence.** *Confidence: medium.* The research and QA agents were the same model with different contexts, so their blind spots are likely correlated. Something both miss stays invisible in these metrics. A QA pass, or a second opinion on central claims only, from a different model or provider would make "zero fabricated sources" a stronger claim. It would also complicate the subscription-only billing model the project was built around.

**Sonnet was enough for the manager and is probably enough for the orchestrator.** *Confidence: high for the manager, medium for the orchestrator.* The manager never failed and wrote well-supported reviews. Its limits were tools (no WebFetch), not reasoning. The orchestrator's mistakes (branch handling, two lock cycles in one run, time-zone offsets) were procedural, and a script would remove them more reliably than a stronger model. A Haiku-class model would suit the mechanical parts that remain, such as summarising a run log.

**Longer context and higher turn limits would cut QA failures, at a cost.** *Confidence: medium.* QA hit its turn limit four times, mostly on posts with many sources or large files to recount. A model that does more per turn, or a higher limit, would remove most of those, at roughly the cost of the extra turns.

**A model with stricter safeguards on AI research would struggle with this subject.** *Confidence: medium.* The spec chose Opus over Fable 5.1 because Fable carries extra safeguards around LLM research and development, which is this blog's subject. Even Opus was stopped by a classifier on security-adjacent topics three times (once in calibration, twice live). A model with tighter limits there would likely refuse or water down more topics in AI safety, cyber evaluations and model internals, which made up a meaningful share of the month's posts.

**Cheaper models across the board would raise throughput and lower quality, in that order.** *Confidence: low.* At about 440k tokens per finished post, moving research to Sonnet would roughly halve the cost of a post's largest job and let the same plan run more posts. We'd expect more contradicted claims per draft, and so more revisions and rejections. Whether that trade is worth it depends on whether the goal is volume or a record that can be trusted. For this project, it was the record.

## 8. Closing

The project set out to show that agents can write and check a month of graduate-level research coverage with every claim traceable to a source. On quality, it largely did: no fabricated sources, a QA layer that visibly caught and published its own failures, and posts whose critical sections hold up to a careful reader. On operations, it fell short of its own goal for reasons that had little to do with the agents: runs that never started, a broken script nobody fixed, and proposals nobody reviewed. A second version should spend less effort on the prompts and more on the plumbing and on the person who looks after it.

The [archive](../posts/), the [rejected posts](../rejected/), the [cycle reviews](../cycles/) and the [metrics](../api/metrics.json) remain online as the record of the month.
