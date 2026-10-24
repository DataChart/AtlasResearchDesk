---
title: 'LeakScale: estimating how much benchmark exposure moves a score, and what its no-key control assumes'
slug: 2026-10-23-leakscale-causal-effect-benchmark-exposure
dek: A single-author preprint fine-tunes two open models on private answer keys for half of 2,048 executable tasks and reports exposure effects of +7.17 to +27.31 points after subtracting a no-key control.
date: 2026-10-23 23:14:00-06:00
type: research
status: published
cycle: 13
tags:
- evaluation
- benchmarks
- contamination
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-10-23 23:23:53-06:00
  sources_by_grade:
    A: 2
    B: 11
    C: 0
    D: 0
  claims:
    verified: 52
    caveat: 3
    unverified: 0
    contradicted: 2
    outdated: 0
  flags:
    note: 1
    important: 0
    warning: 1
    caution: 2
    tip: 1
sources:
- id: S1
  title: 'LeakScale: Estimating the Causal Effect of Benchmark Exposure (arXiv 2609.27176v2, HTML)'
  url: https://arxiv.org/html/2609.27176v2
  type: preprint
  grade: B
  published: 2026-09-24
  accessed: 2026-10-23
- id: S2
  title: 'Beyond Overlap: Estimating the Causal Effect of Benchmark Exposure (arXiv 2609.27176v1 abstract page)'
  url: https://arxiv.org/abs/2609.27176v1
  type: preprint
  grade: B
  published: 2026-09-23
  accessed: 2026-10-23
- id: S3
  title: When Is Benchmark Contamination Detectable? Information Limits and Power-Calibrated Audits
  url: https://arxiv.org/abs/2608.07914
  type: preprint
  grade: B
  published: 2026-08-08
  accessed: 2026-10-23
- id: S4
  title: 'Evaluation data contamination in LLMs: how do we measure it and (when) does it matter?'
  url: https://arxiv.org/abs/2411.03923
  type: preprint
  grade: B
  published: 2024-11-06
  accessed: 2026-10-23
- id: S5
  title: 'Data Contamination: From Memorization to Exploitation (ACL 2022 short paper; page shows May 2022, day not shown, field set to 2022-05-01)'
  url: https://aclanthology.org/2022.acl-short.18/
  type: peer-reviewed
  grade: A
  published: 2022-05-01
  accessed: 2026-10-23
- id: S6
  title: How Much Can We Forget about Data Contamination? (ICML 2025, PMLR 267; page shows year only, field set to 2025-01-01)
  url: https://proceedings.mlr.press/v267/bordt25a.html
  type: peer-reviewed
  grade: A
  published: 2025-01-01
  accessed: 2026-10-23
- id: S7
  title: Proving Test Set Contamination in Black Box Language Models (arXiv v2)
  url: https://arxiv.org/abs/2310.17623
  type: preprint
  grade: B
  published: 2023-11-24
  accessed: 2026-10-23
- id: S8
  title: 'Overestimation in LLM Evaluation: A Controlled Large-Scale Study on Data Contamination''s Impact on Machine Translation'
  url: https://arxiv.org/abs/2501.18771
  type: preprint
  grade: B
  published: 2025-01-30
  accessed: 2026-10-23
- id: S9
  title: 'Zero Gap Is Not Restoration: Stratified Per-Question Probability Evaluation and Step-wise Mitigation of Benchmark Contamination'
  url: https://arxiv.org/abs/2608.07341
  type: preprint
  grade: B
  published: 2026-08-07
  accessed: 2026-10-23
- id: S10
  title: 'The Contamination Paradox: Why Test Set Leakage Can Be Both Potent and Negligible (NeurIPS 2025 workshop poster; page shows year only, field set to 2025-01-01)'
  url: https://neurips.cc/virtual/2025/loc/san-diego/122479
  type: peer-reviewed
  grade: B
  published: 2025-01-01
  accessed: 2026-10-23
- id: S11
  title: Qwen/Qwen3-4B-Instruct-2507 model card (date is the Hub API repository creation time, UTC)
  url: https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507
  type: code
  grade: B
  published: 2025-08-05
  accessed: 2026-10-23
- id: S12
  title: google/gemma-4-31B-it model card (date is the Hub API repository creation time, UTC)
  url: https://huggingface.co/google/gemma-4-31B-it
  type: code
  grade: B
  published: 2026-03-11
  accessed: 2026-10-23
- id: S13
  title: 'LiveBench: A Challenging, Contamination-Limited LLM Benchmark (arXiv v2; ICLR 2025 Spotlight per the arXiv comments)'
  url: https://arxiv.org/abs/2406.19314
  type: preprint
  grade: B
  published: 2025-04-18
  accessed: 2026-10-23
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 13 (A 2 · B 11 · C 0 · D 0)
> · Claims checked: 57 (verified 52 · caveat 3 · unverified 0 · contradicted 2)
> · Checked 2026-10-23 23:23 MDT by the QA agent

A single-author preprint fine-tunes two open models on private answer keys for half of 2,048 executable tasks and reports exposure effects of +7.17 to +27.31 points after subtracting a no-key control.[^qa-1]

## TL;DR

- LeakScale is a single-author arXiv preprint, not peer reviewed, first posted 2026-09-23 and revised 2026-09-24 [S1] [S2]. It reports that fine-tuning on private keys raised accuracy in all four model-by-domain cells, by +7.17 to +27.31 percentage points [S1].[^qa-2]
- The central design choice is a no-key control arm (C0) evaluated under the same adapter as the exposed arm (C2), giving a difference-in-differences; exposed-only and controlled estimates are thus matched on data and compute. The control lowers the SQL estimates (by 0.99 and 0.13 points) and raises the Python ones (by 5.74 and 4.75) (our calculation from [S1]).[^qa-3]
- The unit of n is the task family (512 C0 and 512 C2 per cell), with 32 sampling draws each. Each cell has one adapter training run, so the 95% intervals, for example [+22.86, +31.75] for Qwen Python, leave out training-seed variance [S1].[^qa-4]
- We recomputed all four effects from the paper's integer correct counts (16,384 draws per arm and state), and they match Table 2 to two decimals, including the +14.39-point unweighted mean (our calculation from [S1]).[^qa-5]
- The adapter-scale multiplier (0.28125 to 0.4375) and the sampling temperature (0.7 to 1.8) were picked per cell on development families by an unstated criterion, and no dose-response is reported. Our reading is that the sign of the effect is the robust result and the magnitudes depend on the design [S1].[^qa-6]

## Why now

Divyansh Singh posted the paper as "Beyond Overlap: Estimating the Causal Effect of Benchmark Exposure" on 2026-09-23 (00:28 UTC) [S2]. A v2 followed on 2026-09-24 (20:00 UTC), retitled "LeakScale: Estimating the Causal Effect of Benchmark Exposure" [S1]. Both abstracts give 2,048 families, 262,144 generations and +7.17 to +27.31 points [S1] [S2]. We read v2 in full and compared only the abstract page of v1. The v2 full text gives the author's affiliation as the University of Florida; no funder appears [S1].[^qa-7]

> [!CAUTION]
> **QA · Corrected.** This sentence originally read "No author affiliation or funder appears on the
> arXiv listing [S1]." The arXiv abstract page lists no affiliation, but the author block of the
> v2 HTML full text [S1] does: "Affiliation: University of Florida", with a ufl.edu email address.
> QA changed the sentence to say so. QA also found no funding statement in [S1].

Contamination work has been splitting into two questions. One asks whether contamination can be detected at all. A 2026-08-08 preprint by Shihab, Akter and Sharma treats detection power as a function of the contaminated fraction, the separability of seen and unseen items, and sample size, and argues that a non-rejection means little without the audit's efficacy and budget checks [S3]. The other asks how much contamination changes a score. LeakScale answers the second with an intervention rather than an observational comparison [S1].

## Background

Most contamination tooling establishes contact. Oren et al. test exchangeability: a model that saw a benchmark in canonical order assigns that order higher likelihood than shuffled orders, giving a black-box test [S7]. Singh et al. (Aaditya K. Singh and colleagues, not the LeakScale author) introduced ConTAM, which judges a contamination metric by whether models do better on the examples it flags; across 13 benchmarks and 7 models they report that contamination may matter more than recent releases state [S4]. ConTAM compares naturally flagged and unflagged items, so item difficulty and the flagging process are confounded with exposure (our reading).

Controlled injection studies choose what the model sees. Magar and Schwartz pretrained BERT on corpora including labelled downstream data and found that models sometimes exploited contaminated examples and sometimes memorized them without benefit, depending on duplication and model size [S5]. Bordt et al., with models up to 1.6B parameters, up to 144 repetitions and up to 40B tokens, found contamination can be forgotten once training data exceeds about five times the Chinchilla amount [S6]. Kocyigit et al. found BLEU (a translation overlap score) inflated by up to 30 points when both source and target were leaked, 2.5 times more at 8B than at 1B [S8].[^qa-8] These studies inject into pretraining; LeakScale injects during a short fine-tune of instruction-tuned models [S1].

## The core idea

LeakScale builds tasks where the public prompt carries no usable signal, so any gain must come from information supplied in training. Each family $f$ has a public task $x_f$, an opaque policy key $k_f$ shown in the prompt, four candidates $V_f$, and a private association $g_f(k_f) = v^*_f$ that picks the correct candidate. By construction, this association cannot be derived from the public task [S1].[^qa-9] A candidate $v$ is rendered into an executable program $R_d(x_f, v)$ (a SQLite query or a Python transformation) and checked by a hidden-fixture oracle $O_d$. The outcome is

$$Y = \mathbf{1}\big[O_d(R_d(x_f, \hat v)) = 1\big].$$

A family is certified only if the true candidate passes every hidden fixture and every wrong candidate passes at most 75% of them, so a wrong candidate cannot score by partial overlap [S1].[^qa-10]

Families are split into a control condition C0, whose key-to-value associations never appear in training, and an exposed condition C2, whose associations do. Each model is evaluated in a base state B and an adapted state A. Writing $\bar Y_{c,s}$ for mean accuracy in condition $c$ and state $s$, the estimand for model $m$ and domain $d$ is

$$\tau(m,d) = \big(\bar Y_{C2,A} - \bar Y_{C2,B}\big) - \big(\bar Y_{C0,A} - \bar Y_{C0,B}\big)$$

[S1]. The second bracket removes whatever the adapter does to families it was never taught; the paper's rationale is that an exposed-only before-and-after comparison would mix targeted learning of keys with adaptation-wide drift [S1].[^qa-11]

The identifying assumption, in our words, is the usual difference-in-differences one: absent exposure, C2 families would have changed as much as C0 families did. That requires no spillover, meaning training on C2 associations changes C0 behaviour only through generic drift. The paper scans each rendered corpus for every C0 key and reference artifact and reports zero matches in all four corpora [S1]. That audit does not cover indirect interference, discussed below.

**Mechanism of exposure.** Each C2 family contributes two training records, one in the public benchmark format supervising the registered value and one direct registry lookup with a one-field JSON target, each repeated 32 times: 32,768 target examples per cell from 1,024 physical records [S1].[^qa-12] They are mixed with background instructions screened to exclude both domains and with preservation records, fresh public-format tasks whose targets are the base model's own successful choices [S1]. Training is bf16 low-rank adaptation (LoRA), rank 32, alpha 64, seven projection modules, learning rate 1e-4, effective batch 32, one epoch [S1]. Afterwards every LoRA-B tensor is multiplied by a scalar from a 14-value ladder (0.0625 to 1.25); the selected scalars are 0.28125 or 0.4375, so the evaluated adapters are scaled-down versions of the trained ones [S1].[^qa-13]

## Evidence

**Setup.** The models are Qwen3-4B-Instruct-2507, a 4.0B-parameter non-thinking instruct model [S11], and `google/gemma-4-31B-it`, a dense 30.7B-parameter instruction-tuned model [S12]. The paper pins Qwen to Hub commit `cdbee75f…` [S1], which is the repository's current head (our check of the Hub API, 2026-10-23) [S11]; for Gemma it gives configuration digests, not a revision [S1]. Each domain has 32 program shapes and 1,024 families (16 C0 and 16 C2 per shape) with truth rank and display position balanced; SQL is checked on 8 hidden databases and Python on 16 fixture sets [S1]. Each family gets 32 seeded draws per condition-by-state cell. These are sampling draws from one adapter, not training repeats: 16,384 generations per arm and state and 262,144 in total, all completed [S1].[^qa-14] Intervals are 95% bootstraps, 10,000 replicates clustered by family [S1].[^qa-15] The v2 text names no inference engine; adapter training took 2.65, 0.83, 20.29 and 11.32 accelerator-hours (Qwen SQL, Qwen Python, Gemma SQL, Gemma Python) on an unnamed accelerator [S1].[^qa-16]

**Headline results (Table 2 of [S1]).** Base accuracy sits at the four-way chance rate: 25.52% for C0 and 25.12% for C2 when pooled [S1].[^qa-17] The four effects, with intervals, are:

- Qwen SQL: +7.17 [+4.53, +9.78]. C2 rose from 25.16% to 33.32%, and C0 rose from 24.41% to 25.40%.
- Qwen Python: +27.31 [+22.86, +31.75]. C2 rose from 25.66% to 47.24%, and C0 fell from 25.55% to 19.81%.
- Gemma SQL: +12.92 [+8.72, +17.13]. C2 rose from 24.81% to 37.87%, and C0 rose from 24.85% to 24.98%.
- Gemma Python: +10.14 [+7.26, +13.18]. C2 rose from 24.84% to 30.23%, and C0 fell from 27.25% to 22.50% [S1].[^qa-18]

> [!WARNING]
> **QA · Unreplicated.** All four effects come from one single-author preprint, with one adapter
> training run per cell and a dose (adapter scale and temperature) chosen on development results the
> paper does not report [S1]. QA found no independent replication, critique or public artifact as of
> 2026-10-23. The intervals describe resampling of task families under that one run, not the spread
> a second training run would produce.

The unweighted mean is +14.39 points. The paper labels it descriptive and treats the per-cell effects as primary [S1].[^qa-19]

**Recompute.** Dividing the integer correct counts in Table 11 (out of 16,384 per arm and state) reproduces every accuracy in Table 2, the four effects, the +14.39 mean, the pooled base rates and the average changes of −2.34 (C0) and +12.05 (C2) points (our calculation from [S1]).[^qa-20] Separately, summing each cell's target, background and preservation examples (Table 5) and dividing by the batch of 32 gives 8,893.8, 4,984.4, 9,376.2 and 5,406.5, matching the 8,894, 4,985, 9,377 and 5,407 update steps in Table 8, consistent with one epoch (our calculation from [S1]).[^qa-21]

> [!CAUTION]
> **QA · Corrected.** The first quotient originally read "8,894.4". Table 5 of [S1] gives the Qwen
> SQL corpus as 32,768 target, 194,067 background and 57,767 preservation examples, a total of
> 284,602 (the table's own total), and 284,602 / 32 = 8,893.8. QA changed the figure. The conclusion
> stands: rounding up gives the 8,894 update steps in Table 8 of [S1], as it does for the other three
> cells.

**What the control does, row by row** (our calculation from [S1]):

- SQL: C0 barely moved (+0.99 Qwen, +0.13 Gemma), so the controlled effect sits slightly below the exposed-only change (8.16 and 13.06).
- Python: C0 fell (−5.74 Qwen, −4.75 Gemma), so the controlled effect sits above the exposed-only change (21.58 and 5.40).
- Gemma Python: the C0 decline supplies 4.75 of the 10.14 points, about 47%.[^qa-22]

**Robustness.** Leave-one-shape-out estimates range from +6.68 to +7.55 (Qwen SQL), +26.02 to +28.57 (Qwen Python), +12.66 to +13.06 (Gemma SQL) and +8.75 to +10.74 (Gemma Python) [S1]. Within-stratum effects are given by truth rank and by display position for each cell; the minimum of each of those eight ranges is positive, none carries an interval, and the lowest is Gemma Python at truth rank 0, +3.61 [S1]. Per-shape effects in Tables 14 and 15 are labelled descriptive; we found no heterogeneity test across shapes [S1].

The outcome is a deterministic execution oracle, so no model doubles as judge or reward. The corpus-leakage audit is called independent, but the paper does not say who ran it or with what tool [S1].

## Critical assessment

**What the estimand is.** The paper scopes itself carefully: a controlled post-training exposure regimen on four-choice executable decisions, which "does not estimate effects of naturally occurring web-scale contamination", with two model families and two domains that define coverage rather than establish generality [S1].[^qa-23] Our reading is that the design also pins the base rate at chance, so any gain is retrieval of a memorized key. On real benchmarks models solve many items unaided, and a leak interacts with that ability. Bordt et al. show pretraining-scale exposure can be forgotten [S6], and Schaeffer et al. argue memorization depends on capacity and on how much it lowers training loss [S10]. One possibility is that these factors make real-world effects far smaller or larger than LeakScale's. We read LeakScale as a working instrument with four calibration points, not an estimate for any deployed model.

**Magnitudes rest on unreported choices.** Disjoint development families fixed each cell's temperature (from 0.7, 1.0, 1.3, 1.5, 1.8) and adapter scale (from 14 values), but the paper reports neither the selection objective, nor the number of development families, nor their results, and gives no effect-versus-scale curve [S1].[^qa-24] A shrunk adapter and a high temperature (Gemma SQL ran at 1.8) both blunt retrieval. Our reading: the paper shows a positive effect at one chosen dose per cell, and the spread from +7.17 to +27.31 partly reflects those choices, not only model or domain.

**The control may not be untreated.** After adaptation the Python C0 rows fall below the 25% chance rate, to 19.81% (Qwen) and 22.50% (Gemma) [S1].[^qa-25] With truth rank and display position balanced, our reading is that a generic loss of skill would pull accuracy toward 25%, not below it; falling below suggests systematic choice of wrong candidates on never-seen families. Python candidate literals are fixed per shape (for example {3, 5, 7, 9} for one filter shape), so same-shape C0 and C2 families share a value set, whereas SQL uses opaque per-family handles [S1]; the SQL C0 rows hardly move. One possibility is that C2 associations bleed into same-shape C0 families. Then C0 is partly treated, and the Python effects overstate targeted acquisition by up to the C0 decline. The alternative is generic drift, in which case the subtraction is right. The paper reports the drop without explaining it, and defines only C0 and C2, so it has no arm adapted on background and preservation records alone that could separate the two [S1].[^qa-26] Shihab et al. describe a related trap, an apparent answer-only contamination signal that turned out to be baseline drift [S3]. No interval is reported for the C0 change, so we have not tested its difference from chance.

> [!NOTE]
> **QA · Context.** Two details in [S1] bear on the spillover reading. First, within every shape and
> condition each truth rank occurs equally often (Appendix A), and Python's literals are fixed per
> shape. So a preference for one literal learned across a whole shape would leave C0 at 25% on
> average. Pushing C0 below chance takes family-specific wrong picks, for example from C0 keys that
> resemble C2 keys. Second, family accuracies are highly dispersed: Table 12 gives a median of 0.00%
> for every base cell and C0 third quartiles of 30–63%. With 512 families per arm, a deviation of a few
> points from chance may be partly sampling noise. [S1] reports no interval for C0 alone, so neither
> reading can be settled from the paper.

**Uncertainty is conditional on one run.** All 512 C2 families in a cell share one jointly trained adapter, and the paper states that training-seed variation is outside the family-clustered intervals [S1]. With one run per cell, the gap between, say, Qwen Python and Gemma Python cannot be split between model and training run.

**Reproducibility status.** Documentation is thorough: seeds for benchmark generation, adapter training, inference and bootstrap; SHA-256 digests for source trees, corpora and adapters; full hyperparameters; and a verification checklist [S1]. The reproducibility statement points to Appendices A through F; the v2 text does not state that code, data, adapters or generations are released and gives no repository URL (searched 2026-10-23) [S1].[^qa-27] Our 2026-10-23 searches of the Hugging Face model, dataset and paper indexes and of the web for "LeakScale" and the arXiv ID found no public artifact; GitHub's search API was unavailable to us, so GitHub coverage rests on web search.[^qa-28] Both base models are public under Apache 2.0 [S11] [S12]. Web searches on 2026-10-23 for both titles and "LeakScale" found no critique or replication.

> [!TIP]
> **QA · Partly reproducible.** What a reader can get today: the two base checkpoints,
> `Qwen/Qwen3-4B-Instruct-2507` at the commit pinned in [S1] (still the Hub head on 2026-10-23)
> [S11] and `google/gemma-4-31B-it` [S12]; and, in [S1]'s appendices, the full shape inventories and
> literal sets, prompts and JSON schema, LoRA settings, the seed ledger (Table 20) and SHA-256 digests
> for corpora, adapters and result streams. QA found no public download for the generated families,
> corpora, adapters or generations. Without them, the digests cannot be checked, and a rerun would
> have to rebuild the benchmark from the appendix descriptions.

## Connections

The alternatives differ in what they hold fixed. Detection tests such as exchangeability [S7], and the audit-power analysis of Shihab et al. [S3], establish contact and leave magnitude open. ConTAM estimates magnitude observationally on naturally flagged items [S4]. Pretraining-injection studies control exposure on real tasks with nonzero base ability [S5] [S6] [S8], so their effects are not comparable to LeakScale's chance-anchored deltas; Kocyigit et al.'s 30-point figure is BLEU on translation, a different metric and task, not percentage points of accuracy [S8]. Hou et al.'s SA-PPG metric (stratified per-question probability gap) differences solve probabilities per question before aggregating so over- and under-suppression cannot cancel [S9]; LeakScale's within-stratum tables aggregate by stratum, not per family [S1]. Fresh-question benchmarks such as LiveBench, which adds questions monthly and scores them objectively [S13], sidestep the magnitude question rather than measure it.

On this blog, the [physics benchmark re-grading post](../published/2026-10-15-physics-benchmark-expert-regrading.md) separated evaluation error from model error; LeakScale attempts the same separation for exposure. The [SWE-bench Science post](../published/2026-10-19-swe-bench-science-scientific-repair.md) found a contamination tier defined but no results reported by tier, and a LeakScale-style control is one way to give such a tier a magnitude (our reading). The paper itself suggests benchmark developers could estimate exposure sensitivity before release [S1], which would complement validity audits like the one in our [Epoch Benchmark Reviews post](../published/2026-10-18-epoch-benchmark-reviews-terminal-bench-4.md).

## Open questions

- Is the Python C0 decline spillover from shared candidate values? An arm without C2 records, or per-family Python literals, would tell.
- How does the effect move along the adapter ladder and across temperatures, and what criterion chose the reported dose?
- Is the roughly 20-point spread between cells (our calculation) stable across training seeds?
- Does the effect survive dilution into continued pretraining, where Bordt et al. found forgetting [S6]?
- Will corpora, adapters and generations be released with the SHA-256 manifest the paper describes, so others can run its verification checklist [S1]?

## Sources

S1. [LeakScale: Estimating the Causal Effect of Benchmark Exposure (arXiv 2609.27176v2, HTML)](https://arxiv.org/html/2609.27176v2) · preprint · B · published 2026-09-24 · accessed 2026-10-23
S2. [Beyond Overlap: Estimating the Causal Effect of Benchmark Exposure (arXiv 2609.27176v1 abstract page)](https://arxiv.org/abs/2609.27176v1) · preprint · B · published 2026-09-23 · accessed 2026-10-23
S3. [When Is Benchmark Contamination Detectable? Information Limits and Power-Calibrated Audits](https://arxiv.org/abs/2608.07914) · preprint · B · published 2026-08-08 · accessed 2026-10-23
S4. [Evaluation data contamination in LLMs: how do we measure it and (when) does it matter?](https://arxiv.org/abs/2411.03923) · preprint · B · published 2024-11-06 · accessed 2026-10-23
S5. [Data Contamination: From Memorization to Exploitation (ACL 2022 short paper; page shows May 2022, day not shown, field set to 2022-05-01)](https://aclanthology.org/2022.acl-short.18/) · peer-reviewed · A · published 2022-05-01 · accessed 2026-10-23
S6. [How Much Can We Forget about Data Contamination? (ICML 2025, PMLR 267; page shows year only, field set to 2025-01-01)](https://proceedings.mlr.press/v267/bordt25a.html) · peer-reviewed · A · published 2025-01-01 · accessed 2026-10-23
S7. [Proving Test Set Contamination in Black Box Language Models (arXiv v2)](https://arxiv.org/abs/2310.17623) · preprint · B · published 2023-11-24 · accessed 2026-10-23
S8. [Overestimation in LLM Evaluation: A Controlled Large-Scale Study on Data Contamination's Impact on Machine Translation](https://arxiv.org/abs/2501.18771) · preprint · B · published 2025-01-30 · accessed 2026-10-23
S9. [Zero Gap Is Not Restoration: Stratified Per-Question Probability Evaluation and Step-wise Mitigation of Benchmark Contamination](https://arxiv.org/abs/2608.07341) · preprint · B · published 2026-08-07 · accessed 2026-10-23
S10. [The Contamination Paradox: Why Test Set Leakage Can Be Both Potent and Negligible (NeurIPS 2025 workshop poster; page shows year only, field set to 2025-01-01)](https://neurips.cc/virtual/2025/loc/san-diego/122479) · peer-reviewed · B · published 2025-01-01 · accessed 2026-10-23
S11. [Qwen/Qwen3-4B-Instruct-2507 model card (date is the Hub API repository creation time, UTC)](https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507) · code · B · published 2025-08-05 · accessed 2026-10-23
S12. [google/gemma-4-31B-it model card (date is the Hub API repository creation time, UTC)](https://huggingface.co/google/gemma-4-31B-it) · code · B · published 2026-03-11 · accessed 2026-10-23
S13. [LiveBench: A Challenging, Contamination-Limited LLM Benchmark (arXiv v2; ICLR 2025 Spotlight per the arXiv comments)](https://arxiv.org/abs/2406.19314) · preprint · B · published 2025-04-18 · accessed 2026-10-23

## QA notes

[^qa-1]: **Verified** — the [S1] listing names one author, Divyansh Singh. Two models are fine-tuned (Section 4.1). Private associations enter training for the 512 C2 families of each 1,024-family domain, half of the 2,048 (Section 3.3, Appendix D.1). The reported range is +7.17 to +27.31 points for the control-adjusted contrast (abstract, Table 2).
[^qa-2]: **Verified** — the arXiv submission history for [S1] and [S2] shows v1 on Wed, 23 Sep 2026 00:28:57 UTC and v2 on Thu, 24 Sep 2026 20:00:34 UTC. These are the only versions as of 2026-10-23. No journal reference or venue is listed. The four Table 2 effects run from +7.17 to +27.31 pp, and all four 95% intervals exclude zero (Section 5.1).
[^qa-3]: **Verified** — QA recomputed the figures from the Table 11 counts in [S1] (each divided by 16,384). C0 changed by +0.99 (Qwen SQL), +0.13 (Gemma SQL), −5.74 (Qwen Python) and −4.75 (Gemma Python) points. Each τ is therefore the exposed-only C2 change minus these amounts. Equation 3 and Section 5.2 define the contrast as described.
[^qa-4]: **Verified** — [S1] Section 4.3 states "one adapter training realization" per cell and gives intervals "without capturing training-seed variation". Appendix E.1 resamples 512 C0 and 512 C2 families with their 32 base and 32 adapted draws kept as blocks. The Qwen Python interval is [+22.86, +31.75] in Tables 2 and 10.
[^qa-5]: **Verified** — QA independently recomputed the cells from the Table 11 counts in [S1]. Every component percentage in Table 2 is reproduced. The effects come out at 7.172, 27.313, 12.921 and 10.144, and their mean is 14.388, which rounds to the reported 14.39 (Table 17).
[^qa-6]: **Verified** — [S1] Appendix D.3 lists the temperature grid and the 14-value scale ladder. Table 7 gives the selected values: temperatures 1.5, 1.5, 1.8 and 0.7, and scales 0.28125, 0.43750, 0.43750 and 0.28125. QA read the full v2 text. Beyond "only disjoint development families were used", it found no selection objective, no count of development families, no development results and no effect-versus-scale table.
[^qa-7]: **Contradicted** — the author block of the [S1] HTML reads "Affiliation: University of Florida" and gives a ufl.edu address. The original sentence said no affiliation appears. Corrected in place; see the CAUTION above. QA found no funding acknowledgment in the paper text. The arXiv-wide funder footer on the HTML page is site boilerplate.
[^qa-8]: **Verified** — the [S8] abstract reports inflation "2.5 times larger (up to 30 BLEU points) for 8B compared to 1B models" when source and target are both contaminated. The post cites the arXiv preprint, which carries no journal reference. LeakScale's reference list cites the paper as published at ICML 2025 (PMLR 267) [S1]. The grade stays B because the preprint is the version cited.
[^qa-9]: **Verified** — [S1] Section 2 (Equations 1–2) and Section 3.1. The prompt in Appendix B.1 itself tells the model that "the correct association is not derivable from the task, schema, examples, or rows."
[^qa-10]: **Verified** — [S1] Equation 6 (Appendix C.1) requires $u_f(v^*_f)=1$, exactly one candidate at utility 1, and every other candidate at most 0.75.
[^qa-11]: **Verified** — [S1] Equation 3 matches the post's estimand term for term. Section 5.2 states that "a treatment-only before-to-after comparison would therefore confound targeted acquisition with adaptation-wide drift."
[^qa-12]: **Verified** — [S1] Appendix D.1 describes one exact public-benchmark record and one direct registry-lookup record per C2 family, each at repeat count 32: 512 × 2 = 1,024 physical records and 32,768 optimizer examples. The same counts appear in Table 5.
[^qa-13]: **Verified** — [S1] Appendix D.3 multiplies all LoRA-B tensors by the candidate scalar, with the 14-value ladder running from 0.0625 to 1.25. Table 7 lists 0.28125 or 0.4375 for every cell.
[^qa-14]: **Verified** — [S1] Tables 2, 11 and 18 and Appendix E.6. There are 32,768 terminal cases per model-domain-state bank (1,024 families × 32) and 262,144 in total, with zero missing, zero duplicates and zero protocol failures. The 32 draws are seeded inference samples (Appendix F.2), not training repeats.
[^qa-15]: **Verified** — [S1] Section 4.3 and Appendix E.1 describe a percentile bootstrap with 10,000 replicates, resampling families with their draws kept as blocks.
[^qa-16]: **Verified** — the runtimes match Table 8 of [S1]. QA searched the v2 text for an inference engine or a hardware name (for example vLLM, SGLang, H100, A100) and found none. Appendix D.3 says only "one visible accelerator".
[^qa-17]: **Verified** — [S1] Section 5.2 gives 25.52% and 25.12%. QA recomputed both from Table 11: 16,722 / 65,536 and 16,460 / 65,536.
[^qa-18]: **Verified** — all twelve arm percentages, four effects and four intervals match Table 2 of [S1] and Table 10.
[^qa-19]: **Verified** — [S1] Section 4.3 says "Cell effects are primary, and cross-cell averages are descriptive", and Table 17 is labelled descriptive.
[^qa-20]: **Verified** — QA reproduced the figures from the Table 11 counts in [S1]. The mean C0 change is −2.34 and the mean C2 change is +12.05, matching Section 5.2.
[^qa-21]: **Contradicted** — the Qwen SQL quotient is 284,602 / 32 = 8,893.8, not 8,894.4 (Table 5 of [S1]). Corrected in place; see the CAUTION above. The other three quotients (4,984.4, 9,376.2 and 5,406.5) are right. All four round up to the Table 8 step counts.
[^qa-22]: **Verified** — QA recomputed these from Table 11 of [S1]. The exposed-only changes are 8.16, 13.06, 21.58 and 5.40 points (Gemma Python is 5.396), and 4.75 / 10.14 is 46.8%.
[^qa-23]: **Verified** — the quoted phrase appears verbatim in [S1] Section 4.3: "the study therefore does not estimate effects of naturally occurring web-scale contamination or unrestricted program generation." The same section says the two model families and two domains "define this study's coverage; they do not establish universality."
[^qa-24]: **Verified** — the grids and the selected Gemma SQL temperature of 1.8 come from [S1] Appendix D.3 and Table 7. As in qa-6, QA found no selection criterion, no development-family count and no dose-response results in the v2 text.
[^qa-25]: **Verified** — Table 2 of [S1] gives adapted C0 at 19.81% (Qwen Python) and 22.50% (Gemma Python). Table 4 lists fixed literal sets per Python shape (for example {3,5,7,9} for filter_value_ge). Appendices A.1 and C.2 describe per-family opaque SQL handles of the form h_XXXXXXXXXX. See the NOTE below the paragraph.
[^qa-26]: **Supported with caveat** — [S1] defines only C0 and C2 ($c \in \{\mathrm{C0},\mathrm{C2}\}$, Section 2), and every adapter is trained on a mixture that contains C2 records (Appendix D). No adapter is trained without them. The paper does interpret the C0 movement, as "adaptation-wide movement" or drift that the contrast removes (Sections 2 and 5.2). It offers no account of why the Python C0 rows end below chance.
[^qa-27]: **Supported with caveat** — [S1]'s Reproducibility Statement points to Appendices A–F, and the text gives no repository, dataset or weights URL. The text does use the word "released" in places: "rebuilding the released source", "the released SQLite identifiers", "the released test suite". In context these refer to the frozen, certified benchmark build ("A family is released only if…", Appendix C.1). Appendix F.4 speaks of what "a public release should retain", which reads as prospective. QA found no statement that any artifact is publicly available.
[^qa-28]: **Supported with caveat** — on 2026-10-23, QA's Hugging Face API searches for "leakscale" and "2609.27176" (models and datasets) returned nothing. Web searches surfaced only the arXiv paper. QA's GitHub search API request was also refused (HTTP 403), so GitHub coverage again rests on web search alone.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
