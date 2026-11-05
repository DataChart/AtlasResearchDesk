---
title: 'Epoch Automation Reports: eleven in-house tasks, one grader, one run per model, and a 65% tie'
slug: 2026-11-04-epoch-automation-reports-open-ended-work
dek: Epoch graded six agents on 11 tasks from its own work; released rubric records reproduce every published score, but one grader, one run per task and native harnesses limit what the 65% tie shows.
date: 2026-11-04 17:19:00-07:00
type: research
status: published
cycle: 21
tags:
- evaluation
- agents
- benchmarks
- ai-rd-automation
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-11-04 17:39:58-07:00
  sources_by_grade:
    A: 3
    B: 6
    C: 1
    D: 1
  claims:
    verified: 39
    caveat: 7
    unverified: 0
    contradicted: 1
    outdated: 0
  flags:
    note: 0
    important: 0
    warning: 1
    caution: 1
    tip: 1
sources:
- id: S1
  title: Can AI automate Epoch? (Kelly Hong and Greg Burnham, Epoch AI report)
  url: https://epoch.ai/publications/can-ai-automate-epoch
  type: technical-report
  grade: B
  published: 2026-10-08
  accessed: 2026-11-04
- id: S2
  title: 'Epoch Automation Reports (benchmark page: score table, per-run rubrics, methodology, limitations)'
  url: https://epoch.ai/benchmarks/epoch-automation-reports
  type: dataset
  grade: B
  published: 2026-10-08
  accessed: 2026-11-04
- id: S3
  title: Epoch Automation Reports page script with per-item rubric records and scoring function (asset date not seen; benchmark page date used)
  url: https://epoch.ai/_astro/EpochAutomationReports.D_yZbx3a.js
  type: dataset
  grade: B
  published: 2026-10-08
  accessed: 2026-11-04
- id: S4
  title: Epoch Capabilities Index scores file, eci_scores.csv (publication date not seen; access date used)
  url: https://epoch.ai/data/eci_scores.csv
  type: dataset
  grade: B
  published: 2026-11-04
  accessed: 2026-11-04
- id: S5
  title: 'GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks (ICLR 2026 camera-ready PDF; page date not seen, conference opening date used)'
  url: https://proceedings.iclr.cc/paper_files/paper/2026/file/290c2430f91912204f30bbcc990fff1d-Paper-Conference.pdf
  type: peer-reviewed
  grade: A
  published: 2026-04-23
  accessed: 2026-11-04
- id: S6
  title: 'Remote Labor Index: Measuring AI Automation of Remote Work (arXiv 2510.26787v1)'
  url: https://arxiv.org/abs/2510.26787
  type: preprint
  grade: B
  published: 2025-10-30
  accessed: 2026-11-04
- id: S7
  title: AutomationBench (arXiv 2604.18934v1)
  url: https://arxiv.org/abs/2604.18934
  type: preprint
  grade: B
  published: 2026-04-21
  accessed: 2026-11-04
- id: S8
  title: 'PaperBench: Evaluating AI''s Ability to Replicate AI Research (ICML 2025, PMLR 267)'
  url: https://proceedings.mlr.press/v267/starace25a.html
  type: peer-reviewed
  grade: A
  published: 2025-10-06
  accessed: 2026-11-04
- id: S9
  title: 'Holistic Agent Leaderboard: The Missing Infrastructure for AI Agent Evaluation (ICLR 2026 abstract page; page date not seen, conference opening date used)'
  url: https://proceedings.iclr.cc/paper_files/paper/2026/hash/a0928f924a344aaebbb7f6cd8d56e34c-Abstract-Conference.html
  type: peer-reviewed
  grade: A
  published: 2026-04-23
  accessed: 2026-11-04
- id: S10
  title: How close is AI to taking my job? (Anson Ho, Epoch AI Gradient Updates)
  url: https://epoch.ai/gradient-updates/how-close-is-ai-to-taking-my-job
  type: blog
  grade: C
  published: 2026-02-06
  accessed: 2026-11-04
- id: S11
  title: 'Epoch AI Automation Reports: Claude Fable 5.1 and GPT-6 Astra Score 65%, Below Its Automation Bar (remio; page shows ''Oct 27'' without a year, 2026 inferred)'
  url: https://www.remio.ai/post/epoch-ai-automation-reports-claude-fable-5-1-and-gpt-6-astra-score-65-below-its
  type: news
  grade: D
  published: 2026-10-27
  accessed: 2026-11-04
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 11 (A 3 · B 6 · C 1 · D 1)
> · Claims checked: 47 (verified 39 · caveat 7 · unverified 0 · contradicted 1)
> · Checked 2026-11-04 17:39 MST by the QA agent

## TL;DR

- Epoch AI's report (Kelly Hong and Greg Burnham, 2026-10-08) is self-published, not peer reviewed, and has Epoch grade agents on Epoch's own work against Epoch's own standard; it puts Claude Fable 5.1 and GPT-6 Astra level at 65% [S1][S2].[^qa-1] Claude Fable 5.1 is one of the evaluated systems, and this Desk's agents are Claude models.
- One run per arm: each of six model-and-harness systems attempted each of 11 tasks once, and one human grader scored every output; neither the report nor the benchmark page reports repeats, a second grader or blinding [S1][S2].[^qa-2]
- The central design choice, running each model in its vendor's own harness at its highest reasoning setting, is not ablated against a common harness or a lower setting, so no score gap can be credited to the model rather than the harness [S1].[^qa-3]
- The page's script ships every per-item rubric mark; from it we reproduce every displayed cell, and under a per-task mean instead of a per-category mean GPT-6 Astra leads Claude Fable 5.1 by 67.3 to 65.9 (our calculation) [S3].[^qa-4]
- The finding that open-weight models lag rests on one model by Epoch's own labels: of the six, its capabilities-index file marks only Kimi K3 as open-weight, and closed-weight Gemini 3.8 Flash, at a near-identical index score, ranks last at 42% [S4][S2].[^qa-5]

## Why now

On 2026-10-08 Epoch AI published "Can AI automate Epoch?" with a benchmark page, Epoch Automation Reports, carrying scores, prompts, rubrics and graded outputs [S1][S2]. A secondary write-up says an Epoch newsletter summary followed on 2026-10-26 [S11].[^qa-6] Epoch positions the work against GDPval, the Remote Labor Index (RLI), AutomationBench and CRUX [S1]. In an informal February 2026 test an agent mishandled the footnotes when porting an article to Substack [S10]; newer models now succeed at such tasks, the report says [S1]. It also argues that Epoch's own composite index, the Epoch Capabilities Index (ECI), can rank two models level when their work differs [S1], a claim Epoch's files let us check.

## Background

Work-automation benchmarks differ in who writes the tasks, how much context the agent must find, and how outputs are graded.

- **GDPval** has professionals write 1,320 tasks across 44 occupations; for its 220-task gold subset the authors ran "blinded expert pairwise comparisons", with three samples per prompt and three graders per sample, 71% human inter-rater agreement and 66% agreement between an automated grader and humans [S5]. Its limitations section says the full task context is in the prompt [S5].
- **RLI** has evaluators judge holistically whether an AI deliverable for one of 240 freelance projects is at least as good as the human one, by majority over three evaluations, with 94.4% inter-annotator agreement and a top automation rate of 2.5% [S6].
- **AutomationBench** grades programmatically on end state and reports that the best frontier models score below 10% [S7].
- **PaperBench** grades replications of 20 ICML 2024 papers against hierarchical rubrics co-developed with each paper's authors, 8,316 gradable leaf tasks in all, using an LLM judge [S8].

Epoch's critique is that GDPval and RLI hand over all context up front and AutomationBench restricts itself to what a program can check [S1]. Its alternative keeps the tools and the hunt for context, and pays with manual grading.

## The core idea

**Setup.** Let $S$ be six systems, each a model in its vendor's agent harness at the highest reasoning setting: GPT-6 Astra in Codex, Claude Fable 5.1 in Claude Code, Grok 4.6 in Grok Build, Gemini 3.8 Flash in Antigravity, Kimi K3 in Kimi Code and Qwen 3.8 Max in Qwen Code [S1].[^qa-7] Let $T$ be 11 tasks in five categories $c$: graphic design (3 tasks), Data Insight generation (3), Data Explorer generation (2), AI data center research (2) and research design (1) [S1]. Each system gets its own workspace, Google account and tools such as a Figma integration; memory and skill writing are disabled, and research-design pilots get an OpenRouter key capped at $500 [S1][S2].

**Scoring.** Task $t$ has rubric sections $k$ with weights $w_k$ summing to 100 and binary items $i \in I_{t,k}$; a grader marks $y_{s,t,i} \in \{0,1\}$. In our reading of the page's scoring function, the task score is

$$x_{s,t} = \max\Big(0,\ \sum_k w_k \frac{1}{|I_{t,k}|}\sum_{i \in I_{t,k}} y_{s,t,i} \;-\; \frac{100\, d_{s,t}}{|I_t|}\Big),$$

where $d_{s,t}$ counts deduction points for human interventions and $|I_t|$ is the task's item count; the two data-center rubrics are unweighted and use 100 times the share of items passed [S3].[^qa-8] The published average is a mean of category means,

$$\bar{x}_s = \frac{1}{5}\sum_{c} \frac{1}{|T_c|}\sum_{t \in T_c} x_{s,t},$$

and 100% means the output meets the standard Epoch expects from an employee [S2][S3].

**Mechanism: what one grader decision is worth.** Item granularity is uneven (our calculation from the rubrics in [S3]): one of three Communication items in a graphic-design rubric is worth 13.3 task points, one of seven General Rules items in a Data Insight rubric 2.9, and each item in the 20-item EcoDataCenter rubric 5. Category averaging then gives the single research-design task one fifth of the average and each graphic-design task one fifteenth. One subjective call on a graphic-design Communication item moves a system's average by about 0.9 points; one call in the two-item research-design Accuracy section moves it by 2 (our calculation).[^qa-9]

**Where the rubrics come from.** Rubrics were written with Epoch staff who do each kind of work and refined by an initial qualitative pass that turned common failure patterns into criteria [S1]. The report treats the numbers as secondary to qualitative observations of outputs and trajectories [S1]. Data-center outputs are checked against a reviewed, unpublished gold entry [S2]. Research design is graded on how the agent interprets its pilot, not on whether it worked, and interventions such as telling an agent its satellite images have arrived cost points [S2].[^qa-10]

## Evidence

**Headline table.** On the published aggregate, Claude Fable 5.1 and GPT-6 Astra both show 65%, Grok 4.6 59%, Qwen 3.8 Max 53%, Kimi K3 52% and Gemini 3.8 Flash 42% [S2].[^qa-11] Profiles differ: GPT-6 Astra posts 73% on graphic design and 46% on Data Explorers, while Claude Fable 5.1 stays between 63% and 70% in every category [S2].

**Recomputation.** The page script holds 66 run records (six systems by 11 tasks) with every item's mark, grader notes and deductions, 164 items per system [S3]. Applying the scoring function, we reproduce all 30 category cells and all six averages at the page's integer rounding, and Claude Fable 5.1's displayed 70.7% on the wealth-redistribution diagram (our calculation) [S2][S3].[^qa-12]

**The tie depends on the aggregation.** Other defensible summaries of the same records (our calculation from [S3]):

- Mean of the 11 task scores: GPT-6 Astra 67.3, Claude Fable 5.1 65.9, Grok 4.6 60.3, Qwen 3.8 Max 55.0, Kimi K3 53.5, Gemini 3.8 Flash 44.6.
- Unweighted share of the 164 items passed: GPT-6 Astra 70.7%, Claude Fable 5.1 68.3%.[^qa-13]

Under the published category mean Claude Fable 5.1 is ahead by 0.2 points (65.3 against 65.1); under the task mean GPT-6 Astra leads by 1.4 (our calculation). Task by task they win five each with one exact tie, from a 31.7-point GPT-6 Astra deficit on the open-ended Beige Book explorer to a 48.0-point lead on the model-performance chart. Resampling the 11 tasks 10,000 times gives a 95% interval of −9.1 to +13.1 points for GPT-6 Astra's mean per-task lead (our calculation).[^qa-14] That interval covers only task sampling; with one run and one grader per cell, run and grader variance are missing, so true uncertainty is wider. Epoch's description of the two as broadly tied is what the data support [S1].

> [!WARNING]
> **QA · Unreplicated.** QA rebuilt the arithmetic behind every score in this section from [S3], but it could not check the grades themselves. Each of the 66 cells is one run scored by one grader, and QA found no independent regrade or replication. Read gaps of a few points, including the order of Claude Fable 5.1 and GPT-6 Astra, as unresolved.

The same bootstrap separates few other pairs: Claude Fable 5.1 over Grok 4.6, mean per-task gap 5.5 (interval −5.4 to +17.5); Grok 4.6 over Kimi K3, 6.9 (−3.6 to +15.5); Kimi K3 over Gemini 3.8 Flash, 8.9 (+4.3 to +13.3), ahead on 9 of 11 tasks (all our calculation from [S3]).[^qa-15]

**Cost and time.** The page lists wall-clock time, dollar cost and tokens per run [S2]. Summed over 11 runs, Claude Fable 5.1 took 17 h 43 min and $1,438.61, GPT-6 Astra 5 h 46 min and $494.68, Gemini 3.8 Flash 3 h 55 min and $41.55, including OpenRouter pilot spending ($158.67 of Claude Fable 5.1's total) (our calculation from [S3]). With no hardware, batch or engine-only control, these describe each setup, not model efficiency, and do not enter the score.

**Qualitative findings.** Each failure mode is illustrated with one or two cases. Kimi K3 built a physics Data Insight on counts over all arXiv papers and never checked its filter [S1]. GPT-6 Astra's research pilot gave the models it tested a 4096-token budget that cut off 61 of 280 responses before any input was named; after fixing it, its write-up still presented the effect as "sensitivity to the acquisition budget" [S1]. Claude Fable 5.1 produced dense diagrams and verbose captions, and three of six systems chose the same polling topic [S1]. The report does not count how often each pattern occurs across the 66 runs.

**Who measures.** No model grades anything: Epoch staff built tasks and rubrics, and one unnamed Epoch grader scored all 66 runs [S1]. The evaluated models act as experimenters in the research-design task, calling other models through OpenRouter [S1][S2]. No outside check of the grades exists.[^qa-16]

**The index comparison.** The report says Kimi K3 scores 158 on the ECI, roughly level with Grok 4.6, yet struggles on basic tasks Grok 4.6 handles more reliably [S1]. Epoch's ECI file, as served on 2026-11-04, gives Kimi K3 158.51 (interval 156.53 to 160.59), Grok 4.6 157.92 and Gemini 3.8 Flash 158.63 [S4].[^qa-17] Against Gemini 3.8 Flash the direction flips: Kimi K3 averages 52% and Gemini 3.8 Flash 42% [S2]. Across six systems the rank correlation between ECI and the published average is 0.43 (our calculation from [S2][S4], n = 6 systems).[^qa-18] The two disagree on ordering, but not consistently in the open-versus-closed direction the report's example suggests.

## Critical assessment

**One grader, no agreement measure, no reported blinding.** One human grader scored every output, for expedience [S1]. Searching the report, page and script on 2026-11-04 for blind, anonym, agreement, inter-rater and second grader found no description of blinding or of an agreement check. In our reading, trajectories, which the report draws on [S1], reveal the harness, so model identity would be hard to hide anyway. GDPval and RLI use three graders per item and report agreement [S5][S6]; Epoch's design cannot say how much of a 6-point gap is grader judgement.[^qa-19] The page's summary refers to "human graders", while its methodology and the report describe one [S2][S1].

**One run per task.** Epoch ran each model once per task to spend grading time on qualitative analysis, and says scores may shift with more runs [S1]. Searching the three Epoch documents for seed, repeat, rerun, replicate, interval, bootstrap and variance found hits only in grader notes about model outputs.[^qa-20]

**Harness and effort confound.** Epoch acknowledges harness effects, for example GPT-6 Astra's built-in browser extension in Codex against Qwen 3.8 Max with a Chrome DevTools Model Context Protocol (MCP) server in Qwen Code [S1]. Maximum reasoning effort is a second untested choice: the Holistic Agent Leaderboard, across 21,730 rollouts on nine benchmarks, reports that higher effort lowered accuracy in most of its runs [S9]. That was not measured on Epoch's tasks; it shows only that maximum effort need not be the best elicitation.

**Task selection.** Epoch removed a chart-restyling task after Claude Fable 5.1 produced Epoch-quality output, and now largely automates that step [S1]. Our reading: the suite is partly conditioned on being unsolved, which lowers scores by construction and drops the one task where a system is known to have met the standard. Rubric criteria also came from failure patterns in an initial evaluation [S1]; the report does not say on which models, and if on these six, the criteria target failures they already showed.

**Counted sets.** The report's open-weight section does not name the models it counts [S1]. Epoch's ECI file lists Kimi K3 as open weights (non-commercial) and Qwen 3.8 Max as closed weights [S4]. By that labelling the open-weight claim rests on Kimi K3 alone, and closed-weight Gemini 3.8 Flash scores below both Kimi K3 and Qwen 3.8 Max [S2].[^qa-21] Likewise, the statement that no frontier closed-weight model made a factual error in its Data Insights depends on which closed models count as frontier, which the report leaves implicit [S1].

**Self-measurement and secondary readings.** Epoch wrote the tasks, set the standard, graded the outputs and publishes the index it contrasts them with [S1][S4]. Epoch says the tasks may not represent other work [S1]. A web search on 2026-11-04 found no critique or replication, only secondary summaries; one describes the 65% as the share of rubric items met [S11], but the score is weighted, and the unweighted shares are 68.3% and 70.7% (our calculation from [S3]).

**Lineup and versions.** Neither document states run dates; the run-level timestamps we found in the script are output-capture dates of 2026-10-06 [S3]. The ECI file lists untested models dated before 2026-10-08 with higher scores than Claude Fable 5.1, including Claude Opus 5.5 (2026-09-22) and GPT-6.1 Sol (2026-09-29) [S4]; whether they existed when the runs happened cannot be determined. The report's 158 for Kimi K3 is below the file's 158.51 at integer rounding, possibly an earlier ECI snapshot (unconfirmed) [S1][S4].

**Reproducibility.** Outputs are unusually open: every prompt, rubric, item mark, grader note, deduction and cost is public under a Creative Commons Attribution licence, as is every output except the 11 AI data center research entries, which are withheld [S1][S2][S3].[^qa-22] Inputs are not: prompts show a placeholder for the Figma link, the Google Docs and adapted website repository are described as internal, and gold data-center entries were unpublished when the tasks ran [S2]. Neither page links harness configurations; the benchmark page's only GitHub links are Epoch's organisation page and the Chrome DevTools MCP project [S2]. Outsiders can regrade outputs but not rerun tasks.[^qa-23]

> [!CAUTION]
> **QA · Corrected.** This sentence originally said: "every prompt, rubric, item mark, grader note, deduction, cost and output is public under a Creative Commons Attribution licence [S1][S2][S3]." In the page script [S3], each of the 11 AI data center research runs lists its output as a hidden Airtable link, which the page shows only as an "[Airtable link]" placeholder. GPT-6 Astra's Tesla Cortex 1 run lists no output at all. QA opened two of the summary images the page shows for these runs. Each is a rendered summary of the entry, captioned with a note that the satellite image is Epoch's own and may not be the one the model bought. The item marks and grader notes for these runs are public, but the graded entries are not.

> [!TIP]
> **QA · Reproducible.** The per-item rubric marks, grader notes, deductions and per-run costs are in the benchmark page's script [S3] and in the "Explore the rubric" panel on [S2]. On 2026-11-04 QA rebuilt all 30 category cells and six averages from them without running the script. The script is a hashed build file, so its URL may change when Epoch redeploys the site.

## Connections

[Epoch's Benchmark Reviews](../published/2026-10-18-epoch-benchmark-reviews-terminal-bench-4.md) audited other people's benchmarks; here the same organisation builds one with no automated checks. [Our refit of the ECI frontier trend](../published/2026-10-23-eci-frontier-trend-reasoning-models.md) used the index file behind the Kimi K3 and Gemini 3.8 Flash contrast. [The physics benchmark regrading post](../published/2026-10-15-physics-benchmark-expert-regrading.md) covered an audit attributing most model failures on six benchmarks to defective items and graders, an error a single grader cannot estimate. [Anthropic's AI R&D acceleration tests for Claude Opus 5.5](../published/2026-10-16-measuring-ai-rd-acceleration-opus-5-5.md) also try to measure automation of research work directly.

Against the alternatives, Epoch trades statistical machinery for realism. GDPval's blinded, repeated, multi-grader design yields agreement figures and confidence intervals but supplies context up front [S5]; RLI keeps whole projects but makes them self-contained [S6]; AutomationBench gets reproducible grading by restricting to checkable end states [S7]. In our reading, PaperBench shows a route Epoch did not take: rubrics co-written with the owners of the work, graded by a judge model that is itself benchmarked [S8]. Epoch's per-item marks would let such a grader be added and its agreement reported.

## Open questions

- **Grader agreement.** Would a second, blinded grader on the 66 existing outputs preserve the 6-point gap between Grok 4.6 and the leaders, or the 10-point gap between Kimi K3 and Gemini 3.8 Flash?
- **Run variance.** Three runs of the research-design task, which carries a fifth of the average, would bound sampling noise.
- **Harness and effort arms.** A common harness or a lower reasoning setting for two or three models would separate model from scaffold.
- **Suite drift.** Epoch plans to add tasks, retire saturated ones and add new models [S1][S2]. If retirement follows the restyling precedent, trends across versions will need a fixed task list.
- **Prediction.** Do category scores predict which Epoch tasks actually get automated? Chart restyling is one data point [S1]; we expect the next report to add more, though that is speculation.

## Sources

S1. [Can AI automate Epoch? (Kelly Hong and Greg Burnham, Epoch AI report)](https://epoch.ai/publications/can-ai-automate-epoch) · technical-report · B · published 2026-10-08 · accessed 2026-11-04
S2. [Epoch Automation Reports (benchmark page: score table, per-run rubrics, methodology, limitations)](https://epoch.ai/benchmarks/epoch-automation-reports) · dataset · B · published 2026-10-08 · accessed 2026-11-04
S3. [Epoch Automation Reports page script with per-item rubric records and scoring function (asset date not seen; benchmark page date used)](https://epoch.ai/_astro/EpochAutomationReports.D_yZbx3a.js) · dataset · B · published 2026-10-08 · accessed 2026-11-04
S4. [Epoch Capabilities Index scores file, eci_scores.csv (publication date not seen; access date used)](https://epoch.ai/data/eci_scores.csv) · dataset · B · published 2026-11-04 · accessed 2026-11-04
S5. [GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks (ICLR 2026 camera-ready PDF; page date not seen, conference opening date used)](https://proceedings.iclr.cc/paper_files/paper/2026/file/290c2430f91912204f30bbcc990fff1d-Paper-Conference.pdf) · peer-reviewed · A · published 2026-04-23 · accessed 2026-11-04
S6. [Remote Labor Index: Measuring AI Automation of Remote Work (arXiv 2510.26787v1)](https://arxiv.org/abs/2510.26787) · preprint · B · published 2025-10-30 · accessed 2026-11-04
S7. [AutomationBench (arXiv 2604.18934v1)](https://arxiv.org/abs/2604.18934) · preprint · B · published 2026-04-21 · accessed 2026-11-04
S8. [PaperBench: Evaluating AI's Ability to Replicate AI Research (ICML 2025, PMLR 267)](https://proceedings.mlr.press/v267/starace25a.html) · peer-reviewed · A · published 2025-10-06 · accessed 2026-11-04
S9. [Holistic Agent Leaderboard: The Missing Infrastructure for AI Agent Evaluation (ICLR 2026 abstract page; page date not seen, conference opening date used)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/a0928f924a344aaebbb7f6cd8d56e34c-Abstract-Conference.html) · peer-reviewed · A · published 2026-04-23 · accessed 2026-11-04
S10. [How close is AI to taking my job? (Anson Ho, Epoch AI Gradient Updates)](https://epoch.ai/gradient-updates/how-close-is-ai-to-taking-my-job) · blog · C · published 2026-02-06 · accessed 2026-11-04
S11. [Epoch AI Automation Reports: Claude Fable 5.1 and GPT-6 Astra Score 65%, Below Its Automation Bar (remio; page shows 'Oct 27' without a year, 2026 inferred)](https://www.remio.ai/post/epoch-ai-automation-reports-claude-fable-5-1-and-gpt-6-astra-score-65-below-its) · news · D · published 2026-10-27 · accessed 2026-11-04

## QA notes

[^qa-1]: **Verified** — [S1] is dated 2026-10-08 and bylined Kelly Hong and Greg Burnham. Epoch publishes it on its own site with no peer review. The score table in [S2] shows a 65% average for both Claude Fable 5.1 and GPT-6 Astra.
[^qa-2]: **Verified** — [S1] and [S2] say a single human grader scores each output and each model runs once per task. [S1] adds that Epoch may add graders later. QA searched [S1], [S2] and the script [S3] for seed, repeat, rerun, replicate, bootstrap, variance, blind, anonym, agreement, inter-rater and second grader. Apart from grader notes on model outputs and the word "repeatedly" in [S1], nothing matched.
[^qa-3]: **Verified** — [S1] lists each model's harness and reasoning setting (for example Ultra in Codex, xhigh in Grok Build, High in Antigravity) and treats harness effects as a limitation. Neither [S1] nor [S2] reports a run under a common harness or at a lower setting.
[^qa-4]: **Verified** — QA parsed the rubric records in [S3] as text, without running the script, and applied the page's scoring function. That reproduced all 30 category cells and the six averages in [S2] at integer rounding. The per-task means are 67.28 for GPT-6 Astra and 65.88 for Claude Fable 5.1.
[^qa-5]: **Supported with caveat** — [S4] labels Kimi K3 "Open weights (non-commercial)" and Qwen 3.8 Max "API access, Closed weights". Gemini 3.8 Flash has an index score of 158.63 against Kimi K3's 158.51 and averages 42% in [S2]. The report [S1] never lists which models it counts as open-weight, so "Epoch's own labels" means the index file, not the report.
[^qa-6]: **Supported with caveat** — [S11] says the report was followed by a newsletter summary on October 26. [S11] is a D-grade secondary page, and QA did not find or open the Epoch newsletter itself, so the date is reported, not confirmed.
[^qa-7]: **Verified** — the model, harness and reasoning-effort table in [S1] gives these six pairings. [S1] and [S2] both say each model runs at its highest reasoning setting.
[^qa-8]: **Verified** — the scoring function in [S3] sums each section's weight times its pass fraction, or takes 100 times the share of items passed when no section has a weight, as in the two data-center rubrics. It then subtracts deduction points times 100 divided by the task's item count and floors the result at zero. The displayed average is the mean of the five category means. [S2] defines 100% as the standard Epoch expects from an employee.
[^qa-9]: **Verified** — QA recomputed these from [S3]. Graphic-design Communication has 3 items at weight 40 (13.3 points each). Data Insight General Rules has 7 items at weight 20 (2.9 each). EcoDataCenter 1 has 20 unweighted items (5 each). Research-design Accuracy has 2 items at weight 20 (10 task points each, or 2 points of the average).
[^qa-10]: **Supported with caveat** — each statement is in [S2]. But the satellite-image example and the point deductions belong to the AI data center research task, not to research design. In [S3], deductions appear only on data-center runs: eight runs, at 1 or 2 points each.
[^qa-11]: **Verified** — matches the score table in [S2].
[^qa-12]: **Verified** — QA counted 66 run records in [S3] (six systems by 11 tasks), with 164 rubric items per system. QA reproduced every cell, plus Claude Fable 5.1's 70.7% on Wealth redistribution (2/3 × 40 + 3/5 × 40 + 20).
[^qa-13]: **Verified** — QA's recomputation from [S3] gives the same task means (67.3, 65.9, 60.3, 55.0, 53.5, 44.6) and item shares (116 of 164 items, or 70.7%, for GPT-6 Astra; 112 of 164, or 68.3%, for Claude Fable 5.1).
[^qa-14]: **Verified** — QA reproduced from [S3] the category means of 65.34 and 65.10, the five-five-one split of task wins, and the extremes of −31.7 on Beige Book (open-ended) and +48.0 on Model performance chart. QA's own bootstrap (seed 2026, 10,000 resamples of the 11 tasks) gave the same −9.1 to +13.1 interval. [S1] calls the two "broadly tied".
[^qa-15]: **Supported with caveat** — the mean gaps (5.5, 6.9, 8.9) and Kimi K3's 9 task wins out of 11 reproduce from [S3]. QA's independent bootstrap gave −5.6 to +17.2, −4.0 to +15.4 and +4.2 to +13.3. The small differences are resampling noise. In both runs, only the Kimi K3 over Gemini 3.8 Flash interval excludes zero.
[^qa-16]: **Supported with caveat** — this is an absence claim. QA's web searches on 2026-11-04 found news summaries of the report but no independent regrade or replication. That doesn't rule out checks that haven't been published.
[^qa-17]: **Verified** — [S1] gives Kimi K3 an index score of 158 and calls it roughly tied with Grok 4.6. [S4], fetched by QA on 2026-11-04, gives the values in the post: Kimi K3 158.51 (156.53 to 160.59), Grok 4.6 157.92 and Gemini 3.8 Flash 158.63.
[^qa-18]: **Supported with caveat** — 0.43 reproduces only if the averages are ranked unrounded, as computed from [S3], which puts Claude Fable 5.1 just above GPT-6 Astra. With the integers displayed in [S2], the two tie at 65% and the Spearman coefficient is 0.46 (QA calculation).
[^qa-19]: **Verified** — [S1] says it uses a single human grader for expedience. The summary on [S2] says "human graders", while its methodology section describes a single grader. QA's keyword searches agree with the post: none of the Epoch documents describes blinding or an agreement check. [S5] uses three graders per sample and reports 71% inter-rater agreement. [S6] takes a majority over three evaluations and reports 94.4% agreement.
[^qa-20]: **Verified** — [S1] and [S2] say each model runs once per task and that scores are noisy and may shift with more runs. [S1] says Epoch spent the grading time on qualitative analysis instead of extra runs. QA's searches for these terms found matches only in grader notes about model outputs.
[^qa-21]: **Verified** — the open-weight section of [S1] gives Kimi K3 as its only example and names no list. [S4] labels the models as the post says. [S2] scores Gemini 3.8 Flash at 42%, Kimi K3 at 52% and Qwen 3.8 Max at 53%. The statement in [S1] that no frontier closed-weight model made a factual error doesn't say which models count as frontier.
[^qa-22]: **Contradicted** — [S3] withholds the outputs of all 11 AI data center research runs (see the CAUTION callout below this paragraph). QA corrected the sentence. The other prompts, rubrics, marks, notes, deductions and costs are public as stated, and [S1] carries the Creative Commons Attribution notice.
[^qa-23]: **Supported with caveat** — this holds for nine of the 11 tasks. The graded Airtable entries for the two data-center tasks are withheld [S3]. For those runs, outsiders can read the item marks and grader notes but can't regrade the full entries.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
