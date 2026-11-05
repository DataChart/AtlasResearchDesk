---
title: 'Muon and the first mixture-of-experts layer: a doubled bias span, a shared router input, and a learning-rate caveat'
slug: 2026-11-04-muon-first-moe-layer-bias-span
dek: In 55M- and 108M-active-parameter mixture-of-experts models, Muon at rates tuned on shorter runs roughly doubled the first layer's bias span at every seed; at half that rate on the smaller model, which trained better, most of the rise disappeared.
date: 2026-11-04 17:50:00-07:00
type: research
status: published
cycle: 21
tags:
- mixture-of-experts
- optimization
- training-stability
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-11-04 18:03:08-07:00
  sources_by_grade:
    A: 4
    B: 10
    C: 1
    D: 0
  claims:
    verified: 43
    caveat: 5
    unverified: 0
    contradicted: 1
    outdated: 0
  flags:
    note: 0
    important: 0
    warning: 0
    caution: 1
    tip: 1
sources:
- id: S1
  title: Muon Makes the First Mixture-of-Experts Layer Harder to Balance (arXiv 2610.37914v1, technical report)
  url: https://arxiv.org/abs/2610.37914
  type: preprint
  grade: B
  published: 2026-10-27
  accessed: 2026-11-04
- id: S2
  title: marcoshernanz/muon-moe-routing (GitHub repository; date is the earliest commit shown)
  url: https://github.com/marcoshernanz/muon-moe-routing
  type: code
  grade: B
  published: 2026-10-18
  accessed: 2026-11-04
- id: S3
  title: marcoshernanz/tfg-runs (Hugging Face dataset of run logs and analyses; date is the Hub API lastModified)
  url: https://huggingface.co/datasets/marcoshernanz/tfg-runs
  type: dataset
  grade: B
  published: 2026-11-03
  accessed: 2026-11-04
- id: S4
  title: 'Muon: An optimizer for hidden layers in neural networks'
  url: https://kellerjordan.github.io/posts/muon/
  type: blog
  grade: C
  published: 2024-12-08
  accessed: 2026-11-04
- id: S5
  title: Muon is Scalable for LLM Training
  url: https://arxiv.org/abs/2502.16982
  type: preprint
  grade: B
  published: 2025-02-24
  accessed: 2026-11-04
- id: S6
  title: Auxiliary-Loss-Free Load Balancing Strategy for Mixture-of-Experts
  url: https://arxiv.org/abs/2408.15664
  type: preprint
  grade: B
  published: 2024-08-28
  accessed: 2026-11-04
- id: S7
  title: 'Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity (JMLR 23; PDF header says Published 4/22, field set to 2022-04-01)'
  url: https://jmlr.org/papers/v23/21-0998.html
  type: peer-reviewed
  grade: A
  published: 2022-04-01
  accessed: 2026-11-04
- id: S8
  title: 'The Myth of Expert Specialization in MoEs: Why Routing Reflects Geometry, Not Necessarily Domain Expertise'
  url: https://arxiv.org/abs/2604.09780
  type: preprint
  grade: B
  published: 2026-04-10
  accessed: 2026-11-04
- id: S9
  title: Depth scaling and Muon enable balanced expert usage in MoE training (ICML 2026 HiLD workshop poster listing; date not seen, field set to 2026-01-01)
  url: https://icml.cc/virtual/2026/72451
  type: peer-reviewed
  grade: B
  published: 2026-01-01
  accessed: 2026-11-04
- id: S10
  title: 'Symmetry-Compatible Principle for Optimizer Design: Embeddings, LM Heads, SwiGLU MLPs, and MoE Routers (arXiv 2605.18106v5; journal-ref NeurIPS 2026)'
  url: https://arxiv.org/abs/2605.18106
  type: preprint
  grade: B
  published: 2026-10-14
  accessed: 2026-11-04
- id: S11
  title: Scaling Optimal LR Across Token Horizons (ICLR 2025; page shows year only, field set to 2025-01-01)
  url: https://proceedings.iclr.cc/paper_files/paper/2025/hash/cffa22c56c0df3b3edb1df8a9ad67804-Abstract-Conference.html
  type: peer-reviewed
  grade: A
  published: 2025-01-01
  accessed: 2026-11-04
- id: S12
  title: 'On the Design of Qwen3.8-Next Architecture: Evaluation, Efficiency, and Training Stability (arXiv 2608.30320v1)'
  url: https://arxiv.org/abs/2608.30320
  type: technical-report
  grade: B
  published: 2026-08-31
  accessed: 2026-11-04
- id: S13
  title: 'All-but-the-Top: Simple and Effective Postprocessing for Word Representations (arXiv 1702.01417v2)'
  url: https://arxiv.org/abs/1702.01417
  type: preprint
  grade: B
  published: 2018-03-19
  accessed: 2026-11-04
- id: S14
  title: How Contextual are Contextualized Word Representations? Comparing the Geometry of BERT, ELMo, and GPT-2 Embeddings (EMNLP-IJCNLP 2019; page shows November 2019, field set to 2019-11-01)
  url: https://aclanthology.org/D19-1006/
  type: peer-reviewed
  grade: A
  published: 2019-11-01
  accessed: 2026-11-04
- id: S15
  title: 'The FineWeb Datasets: Decanting the Web for the Finest Text Data at Scale (NeurIPS 2024 Datasets and Benchmarks; page shows no date, field set to 2024-12-10)'
  url: https://proceedings.neurips.cc/paper_files/paper/2024/hash/370df50ccfdf8bde18f8f9c2d9151bda-Abstract-Datasets_and_Benchmarks_Track.html
  type: peer-reviewed
  grade: A
  published: 2024-12-10
  accessed: 2026-11-04
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 15 (A 4 · B 10 · C 1 · D 0)
> · Claims checked: 49 (verified 43 · caveat 5 · unverified 0 · contradicted 1)
> · Checked 2026-11-04 18:03 MST by the QA agent

## TL;DR

- In the smaller model, at learning rates tuned on shorter runs, Muon raised the bias span of the first mixture-of-experts (MoE) layer from 0.084 under AdamW to 0.194, paired by seed [S1].[^qa-1]
- The central design choice, which optimizer trains the router versus the rest of the network, is crossed two by two at matched data, tokens and seeds, each optimizer at its own tuned rate: the span follows the backbone (0.175 with the router on AdamW, 0.198 with it on Muon) [S1].[^qa-2]
- Under the alternative contrast the paper reports, Muon at half its tuned rate (equal to AdamW's rate) reached lower loss than the tuned rate at every seed, and its excess span fell to 0.024 from 0.103 [S1].[^qa-3]
- Centering the first router's input removed the early overload in 3,000-step probes, but two partial-backbone arms raised the span without the shared input direction, and what spreads the router's rows is untested [S1].[^qa-4]
- Provenance: a single-author technical report (short version of a bachelor's thesis), arXiv v1 only, not peer-reviewed. Repeats are separate training runs, three seeds per arm, with no multiple-comparison correction; code and per-run logs are public, and our recompute of the main and ablation table means from them matches [S1][S2][S3].[^qa-5]

## Why now

Marcos Hernanz posted the paper to arXiv on 2026-10-27 as a technical report from Universidad Autónoma de Madrid, the short version of a bachelor's thesis supervised by Daniel Hernández-Lobato; only v1 exists [S1]. Code and run logs are public [S2][S3].

The paper's Table 1 reads six recent open MoE recipes as split on whether Muon trains the router. For three, it infers a Muon router because the report does not exclude it, and says so; Qwen3.8-Flash-Next, MiMo-V2.6 and IQuest-Q1 keep it on AdamW or Adam [S1]. Of the six, only the Qwen3.8-Next report gives a reason: it states that Muon "exacerbates early-training fluctuations" in the router and gave no significant gain later [S12]. The paper says no report shows data comparing the options [S1].

## Background

**The bias balancer.** Auxiliary-loss-free balancing adds a per-expert bias to routing scores before top-k selection and adjusts it from recent load, so no balancing gradient interferes with the language-modelling loss [S6]. The Switch Transformer instead adds an auxiliary loss rewarding uniform routing, with coefficient $10^{-2}$ [S7].

**Muon.** Muon takes the momentum update of each hidden-layer weight matrix and replaces it with an approximately orthogonal matrix via five Newton–Schulz iterations, so all singular values of the step are near one [S4]. Its authors recommend AdamW for embeddings, output heads and scalar or vector parameters [S4]. Liu and co-authors added weight decay and a per-parameter update scale, and trained the Moonlight MoE model with Muon on 5.7T tokens [S5].

**Shared directions.** Contextual representations are not isotropic in any layer of the models Ethayarajh examined [S14]. Because routers are linear, Wang, Hayou and Nalisnick argue, hidden-state similarity explains expert-usage similarity [S8].

## The core idea

**Setup.** Each MoE layer has $E=32$ routed experts and one shared expert, and selects $k=4$ per token [S1]. For a normalized hidden state $\mathbf{x}$, expert $i$ scores $s_i=\sigma(\mathbf{w}_i^\top\mathbf{x})$, and selection uses $\mathrm{Top}_k\{s_i+b_i\}$; the bias decides which experts are chosen but does not enter the mixing weights [S1]. After every optimizer step, with load $\ell_i$ the fraction of the batch's $Nk$ selections that go to expert $i$:

$$b_i \leftarrow b_i + u\,\mathrm{sign}\!\left(\tfrac{1}{E}-\ell_i\right),\qquad u=0.001 .$$

The **span** is $\max_i b_i-\min_i b_i$ [S1]. Because scores lie in $(0,1)$, a bias gap of 1 makes one expert outrank another for every token, so the span cannot exceed $1+2u$ [S1].[^qa-6] It measures how hard the bias works, not the loads it equalizes.

**The question, formally.** Let a partition $\pi$ assign AdamW or Muon to each of five groups: router, routed experts, shared experts, attention, and the dense feed-forward network (FFN) of block 0. Embeddings, output head and normalization gains always use AdamW [S1]. The quantity of interest is the paired excess

$$\Delta(\pi)=\frac{1}{3}\sum_{s}\Big[S_{\text{first}}(\pi,s)-S_{\text{first}}(\text{AdamW},s)\Big],$$

over three seeds $s$, where same-seed runs share initial weights and batch order [S1]. Each optimizer runs at its own tuned rate.

**The prior and its failure.** Under Muon every expert matrix gets an update of roughly equal spectral norm whatever its load, while AdamW's normalization lets low-load experts move less [S1]. The author's stated prediction was: "We therefore expected Muon to weaken the feedback in which busy experts become busier, and to lower the span." [S1] The update–load correlation did fall, from 0.379 to 0.024, but the span rose [S1].

**Mechanism.** The logit splits as $\mathbf{w}_i^\top\mathbf{x}_n=\mathbf{w}_i^\top\mathbf{c}+\mathbf{w}_i^\top(\mathbf{x}_n-\mathbf{c})$, with $\mathbf{c}$ the batch-mean input; the first term is an offset that every token shares [S1]. The spread of offsets across experts is the product of two factors: the mean input's length relative to a single input, and the spread of the router rows along that mean [S1]. In probes over steps 501–3,000, the first factor was 0.63–0.67 with the backbone on Muon against 0.21 in the AdamW run at seed 3. The second was 3.0 times AdamW's at Muon's tuned rate and 1.4 times at half rate [S1]. A bias gap grows by at most $2u$ per step, so a span of 0.8 needs at least 400 steps; until then the favored experts are overloaded [S1].[^qa-7]

A second mechanism concerns the router's own optimizer. The common share $\kappa=\lVert\Delta\mathbf{W}_r\mathbf{e}\rVert/\lVert\Delta\mathbf{W}_r\rVert_F$ is the fraction of a router step along the shared direction $\mathbf{e}$; an update with $E$ equal singular values has $\kappa\le 1/\sqrt{E}\approx 0.18$, which Muon nearly obeys and AdamW need not [S1]. With the backbone on Muon, it was 0.497 for an AdamW router against 0.160 for a Muon one [S1]. The paper offers this only as a suggested reason an AdamW router shifts loads more; no experiment isolates it [S1].

## Evidence

**Conditions.** The decoder-only models have one dense block, then MoE blocks: 55M active of 303M total parameters (small) and 108M of 496M (large) [S1]. Training uses FineWeb-Edu sample-10BT [S1], an educational subset of FineWeb [S15], with batches of 65,536 tokens; small runs see 1B tokens and large runs 3B [S1]. Rates were tuned on the small model at 0.5B tokens with seed 0: AdamW $2\times10^{-3}$, Muon $4\times10^{-3}$ [S1]. The 145 counted runs took 252.6 GPU-hours on RTX 5090 GPUs with deterministic algorithms [S1]. The only quality measure is validation loss on 2.1M held-out tokens [S1].[^qa-8] Unless a sentence names runs or steps, every n below counts seeds, and each seed is a separate training run with its own initialization and data order [S1].

**Main comparison (Table 3, seeds 0–2).** Against AdamW, Muon lowered validation loss from 3.255 to 3.177. Its all-layer span rose from 0.105 to 0.137, and the first-layer span from 0.084 to 0.194, with paired differences ranging from +0.085 to +0.151 [S1]. The gap was largest early: over steps 501–1,000 the first-layer span was 0.74 under Muon and 0.19 under AdamW [S1].[^qa-9]

**Repeats across experiments (Table 5).** The same contrast, Muon minus AdamW in the first layer with the usual bias, was +0.110 at seeds 0–2, +0.103 at seeds 3–5 and +0.075 at seeds 6–8 [S1]. With a balance loss added at seeds 3–5 it was +0.081, and on the large model +0.152 [S1].[^qa-10] Our reading is that the small-model rise ranges from 0.075 to 0.110 over three disjoint seed sets. The AdamW baseline itself moved from 0.084 (seeds 0–2) to 0.095 (seeds 3–5) [S1].

**Router versus backbone (Table 4, seeds 3–5).** With the backbone on Muon, the first-layer span was 0.198 with the router on Muon and 0.175 with it on AdamW. With the backbone on AdamW it was 0.099 and 0.095 [S1]. The first router's input cosine (mean pairwise cosine of its inputs) was about 0.4 with the backbone on Muon and 0.07 on AdamW [S1]. Across the 27 ablation runs with the bias, the log score offset explained 93% of the variance in the log span, and the log input cosine 11% [S1].[^qa-11]

**Centering probe.** Repeating the first 3,000 steps with the first router's input mean-subtracted cut the early overload to 1.11–1.16 times the fair share, from 3.30–4.66 [S1]. The rise over steps 501–3,000 fell by 79%, and the loss at step 3,000 changed by −0.0012 to +0.0009 [S1].[^qa-12] Unchanged probes reproduce their full runs bit for bit, so each changed run differs only by the change [S1]. This is the one direct intervention on the shared direction.

**Learning rate (§5.4).** At half the tuned rate, Muon's first-layer excess was 0.024 against 0.103, and its loss was lower than at the tuned rate at every seed, by 0.008 to 0.012 [S1]. The 0.5B-token tuning had favored it by 0.003 [S1]. The shared direction persisted (input cosine 0.40), but the early overload fell from 4.06 to 1.73 [S1].[^qa-13]

**Other balancers and scale.** A bias four times faster halved the rise, from 0.075 to 0.040 [S1]. On the large model, the first layer's busiest expert took 2.2–2.8 times its fair share over the last 10,000 steps under both Muon partitions, against 1.07 under AdamW [S1].

**Router on AdamW (Table 6).** With the backbone on Muon, moving the router to AdamW raised warmup churn by 0.038 on both sizes and the loss by 0.001 to 0.004 at every seed [S1]. On the large model its runs had 2, 6 and 2 loss spikes at the three seeds; the other partitions had none [S1].

**Our recompute.** From the released endpoint tables [S3], the Table 3 validation losses are 3.2546 and 3.1769 (difference −0.0777), matching after rounding (our calculation). From the ablation endpoints, the Muon-minus-AdamW first-layer differences at seeds 3, 4 and 5 are +0.089, +0.174 and +0.045 (mean +0.103), and the half-rate ones +0.010, +0.025 and +0.037 (mean +0.024), matching Table 5 (our calculation from [S3]).[^qa-14] Per-seed values span +0.045 to +0.174.

## Critical assessment

**The headline contrast mixes optimizer and step size.** Muon's tuned rate came from one seed at 0.5B tokens, and at 1B tokens half that rate trained better at every seed [S1]. Longer training favors a smaller rate [S11], as the paper notes [S1]. The doubling is therefore measured at a Muon rate above the better of the two rates tested at 1B tokens, while AdamW was not retuned at 1B [S1].[^qa-15] Muon's $0.2\sqrt{\max(p,q)}$ factor is set so its update root mean square is close to a typical AdamW update [S1], so at the half rate, which equals AdamW's, step sizes are roughly comparable (our reading). There the excess is 25% of AdamW's span rather than 108%, a caveat the paper itself states [S1]. The large model was not trained with 3B tokens at a lower Muon rate, so we cannot tell whether its 112% excess has the same source [S1].[^qa-16]

> [!CAUTION]
> **QA · Corrected.** This sentence originally read "The large model was not trained at a lower Muon
> rate, so we cannot tell whether its 112% excess has the same source." Section 4.3 of [S1] tunes the
> large model at 1B tokens and seed 0, including two Muon rates below the one it selected. Section 5.1
> reports that in those tuning runs the first-layer span grew with Muon's rate, and that at a quarter of
> the selected Muon rate it was below AdamW's span at every AdamW rate tried. What [S1] lacks, as its
> Section 6.3 says, is a lower Muon rate in the 3B-token, three-seed large-model experiment. The
> one-seed tuning sweep points the same way as the small-model half-rate result, but it is not a
> paired, multi-seed test.

**The confirmatory story is partly post hoc.** The main comparison's planned prediction was a lower all-layer span, and it failed [S1]. The first-layer comparison was planned only for the later experiments, where it held at all nine seeds; the paper computes $2^{-9}\approx0.002$ for this under a null of arms that do not differ [S1]. That sign test treats each seed as an independent coin flip, and the paper applies no correction for the number of planned comparisons [S1]. Its intervals are three-seed ranges, which it says understate uncertainty [S1]. The public commit history begins on 2026-10-18 [S2], after the runs of 2026-09-23 to 2026-09-29 on the dataset card, which names code tags such as `frozen-2026-09-23` [S3]; the GitHub tags page showed none on 2026-11-04 [S2].[^qa-17] The plans' timing cannot be checked from public history (our reading).

**Mechanism is shown for overload, not for span.** Centering removes the overload [S1]. But with only the routed experts on Muon, the span reached 0.409 at an input cosine of 0.146; with attention and dense FFN on Muon, it reached 0.229 at 0.054 [S1]. A large span thus arises without the shared direction. The paper lists as untested what spreads the router rows, and why only the whole backbone on Muon produced the shared direction [S1]. No arm puts the shared experts alone on Muon [S1].

**Scope.** The models are 50 to 2,000 times smaller in active parameters than the motivating recipes and see at most 3B tokens, with one architecture, one dataset, a sigmoid router, no capacity limit and one batch size [S1]. Downstream benchmarks, throughput and expert-parallel runs are not reported in v1 (searched 2026-11-04).[^qa-18] The paper argues the overload would cost time or dropped tokens under capacity limits or expert parallelism, but measured no cost in its own models [S1].

**Reproducibility.** The MIT-licensed training and analysis code, with a lockfile, tests and a runbook, is public [S2]. Run settings, metrics, routing logs and analysis tables are on the Hub; checkpoints are not kept [S3]. Our recompute checks the tables against the logs, not the logs against new training.

> [!TIP]
> **QA · Reproducible in principle.** Every counted run's settings, metrics and routing logs are in
> [S3], and the training and analysis code, with `code/RUNBOOK.md`, is in [S2]. Appendix D of [S1]
> names the tokenized-data dataset and the scripts that build each table and figure from the runs.
> Appendix B says a run trained again with the same seed on the same GPU model reproduces its numbers bit
> for bit. The 145 counted runs took 252.6 GPU-hours on RTX 5090s. QA recomputed the Table 3–5 means
> from [S3] but did not retrain anything.

## Connections

**Earlier balance results under Muon.** Wang, Hayou and Nalisnick's ICML 2026 workshop poster argues that Muon better preserves expert balance during training [S9]. The anchor reconciles the two: without the bias, Muon kept usage more even than AdamW averaged over layers, as they found, but less even in the first layer [S1]. There the final usage perplexity was 6.5 under Muon and 9.6 under AdamW out of 32 [S1]. The same authors prove that a balance loss suppresses shared directions [S8];[^qa-19] the anchor reports that its balance loss lowered the score offset at every seed, as that analysis predicts, yet at its one weight the rise persisted (+0.081) [S1].

**Router-specific optimizers.** Lau and Su derive router updates from the router's permutation and shared-shift symmetries, and report lower validation loss and less load imbalance than AdamW [S10]. The anchor says those runs, without a balancing bias, also favor a Muon-style router [S1].[^qa-20] Qwen3.8-Next reached the opposite recipe from its own observations at 125B total and 6B active parameters [S12]. The anchor notes that the report shows no router data and that the released configuration lists a balance loss and no bias, so the two settings may differ in balancer as well as scale [S1]. We covered [that report's stress tests](../published/2026-10-17-qwen3-8-next-gated-residual-stability.md) earlier.

**Centering as a fix.** Subtracting the batch mean from the router input follows Mu, Bhat and Viswanath, who remove the common mean vector and a few dominant directions from word vectors [S13]. The anchor notes a deployable version would need a running mean, because batch-mean centering makes a token's route depend on its batch [S1].

**On this blog.** [MirrorMoE](../published/2026-11-02-mirrormoe-shared-expert-routing-exploration.md) and [CoRM](../published/2026-10-24-corm-contrastive-moe-routing-ema-reference.md) changed the routing rule; this paper changes only the optimizer partition. Our [effective-learning-rate post](../published/2026-11-01-effective-learning-rate-air-schedule.md) covered another Muon result that turned on step size.

## Open questions

- Does the rise survive when both optimizers are tuned at the training length actually used, with several seeds per rate?
- What spreads the router's rows along the shared direction? The paper suggests uneven loads but did not test it [S1].
- Does a running-mean version of centering keep the 3,000-step result over full runs and at larger scale [S1]?
- Under a capacity limit or expert parallelism, does the first-layer overload cost dropped tokens or step time? None of the anchor's models has a capacity limit [S1].
- We expect the router question to need a production-scale ablation with each recipe's own balancer; the anchor favors a Muon router only at its scale [S1].

## Sources

S1. [Muon Makes the First Mixture-of-Experts Layer Harder to Balance (arXiv 2610.37914v1, technical report)](https://arxiv.org/abs/2610.37914) · preprint · B · published 2026-10-27 · accessed 2026-11-04
S2. [marcoshernanz/muon-moe-routing (GitHub repository; date is the earliest commit shown)](https://github.com/marcoshernanz/muon-moe-routing) · code · B · published 2026-10-18 · accessed 2026-11-04
S3. [marcoshernanz/tfg-runs (Hugging Face dataset of run logs and analyses; date is the Hub API lastModified)](https://huggingface.co/datasets/marcoshernanz/tfg-runs) · dataset · B · published 2026-11-03 · accessed 2026-11-04
S4. [Muon: An optimizer for hidden layers in neural networks](https://kellerjordan.github.io/posts/muon/) · blog · C · published 2024-12-08 · accessed 2026-11-04
S5. [Muon is Scalable for LLM Training](https://arxiv.org/abs/2502.16982) · preprint · B · published 2025-02-24 · accessed 2026-11-04
S6. [Auxiliary-Loss-Free Load Balancing Strategy for Mixture-of-Experts](https://arxiv.org/abs/2408.15664) · preprint · B · published 2024-08-28 · accessed 2026-11-04
S7. [Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity (JMLR 23; PDF header says Published 4/22, field set to 2022-04-01)](https://jmlr.org/papers/v23/21-0998.html) · peer-reviewed · A · published 2022-04-01 · accessed 2026-11-04
S8. [The Myth of Expert Specialization in MoEs: Why Routing Reflects Geometry, Not Necessarily Domain Expertise](https://arxiv.org/abs/2604.09780) · preprint · B · published 2026-04-10 · accessed 2026-11-04
S9. [Depth scaling and Muon enable balanced expert usage in MoE training (ICML 2026 HiLD workshop poster listing; date not seen, field set to 2026-01-01)](https://icml.cc/virtual/2026/72451) · peer-reviewed · B · published 2026-01-01 · accessed 2026-11-04
S10. [Symmetry-Compatible Principle for Optimizer Design: Embeddings, LM Heads, SwiGLU MLPs, and MoE Routers (arXiv 2605.18106v5; journal-ref NeurIPS 2026)](https://arxiv.org/abs/2605.18106) · preprint · B · published 2026-10-14 · accessed 2026-11-04
S11. [Scaling Optimal LR Across Token Horizons (ICLR 2025; page shows year only, field set to 2025-01-01)](https://proceedings.iclr.cc/paper_files/paper/2025/hash/cffa22c56c0df3b3edb1df8a9ad67804-Abstract-Conference.html) · peer-reviewed · A · published 2025-01-01 · accessed 2026-11-04
S12. [On the Design of Qwen3.8-Next Architecture: Evaluation, Efficiency, and Training Stability (arXiv 2608.30320v1)](https://arxiv.org/abs/2608.30320) · technical-report · B · published 2026-08-31 · accessed 2026-11-04
S13. [All-but-the-Top: Simple and Effective Postprocessing for Word Representations (arXiv 1702.01417v2)](https://arxiv.org/abs/1702.01417) · preprint · B · published 2018-03-19 · accessed 2026-11-04
S14. [How Contextual are Contextualized Word Representations? Comparing the Geometry of BERT, ELMo, and GPT-2 Embeddings (EMNLP-IJCNLP 2019; page shows November 2019, field set to 2019-11-01)](https://aclanthology.org/D19-1006/) · peer-reviewed · A · published 2019-11-01 · accessed 2026-11-04
S15. [The FineWeb Datasets: Decanting the Web for the Finest Text Data at Scale (NeurIPS 2024 Datasets and Benchmarks; page shows no date, field set to 2024-12-10)](https://proceedings.neurips.cc/paper_files/paper/2024/hash/370df50ccfdf8bde18f8f9c2d9151bda-Abstract-Datasets_and_Benchmarks_Track.html) · peer-reviewed · A · published 2024-12-10 · accessed 2026-11-04

## QA notes

[^qa-1]: **Supported with caveat** — Table 3 of [S1] gives a first-layer span of 0.084 under AdamW and 0.194 under Muon (small model, 1B tokens, seeds 0–2), and the three paired differences run from +0.085 to +0.151. The dek's "roughly doubled … at every seed" should be read as the abstract of [S1] puts it: the span rose at every seed and roughly doubled on average. Per seed it was not always a doubling. In the ablation endpoints released in [S3], Muon's first-layer span was about 1.5 times AdamW's at seed 5 (0.137 against 0.092) and about 2.9 times at seed 4 (0.265 against 0.091).
[^qa-2]: **Verified** — Section 5.2 and Table 4 of [S1]. With the backbone on Muon, the first-layer span was 0.198 with the router on Muon and 0.175 with it on AdamW; with the backbone on AdamW it was 0.099 and 0.095 (seeds 3–5, each optimizer at its own tuned rate). QA recomputed all four means from the released endpoints in [S3].
[^qa-3]: **Verified** — the Table 4 caption of [S1] says the half rate "is the rate of AdamW". Table 5 gives an excess of +0.024 [+0.010, +0.037] at the half rate against +0.103 [+0.045, +0.174] at the tuned rate. In QA's recompute from [S3], the half rate's loss was lower at all three seeds, by 0.012, 0.010 and 0.008. This arm exists only for the small model.
[^qa-4]: **Verified** — Sections 5.3 and 6.1 of [S1]. With centering, the early overload was 1.11–1.16 against 3.30–4.66 without it. The arm with only the routed experts on Muon reached a span of 0.409 at an input cosine of 0.146, and the arm with only attention and the dense FFN on Muon reached 0.229 at 0.054, against about 0.4 for the whole backbone on Muon. Section 6.1 suggests uneven loads spread the router rows, "but we did not test this."
[^qa-5]: **Verified** — the arXiv listing of [S1] shows one author and a single version (v1, 2026-10-27). The title page says "Technical report" and calls the paper a short version of a bachelor's thesis at Universidad Autónoma de Madrid. Section 4.4 describes the three-seed pairing and states "We apply no correction for the number of planned comparisons". The code [S2] and per-run logs [S3] are public, and QA repeated the recompute from [S3] with the same results (see note 14). Section 6.3 adds that several probe results rest on one seed.
[^qa-6]: **Verified** — Sections 3.1, 3.2 and 4.1 of [S1]: 32 routed experts, 4 selected, one shared expert, sigmoid scores, and a bias that enters selection but not the mixing weights. The bias follows Eq. (2) with $u=0.001$ after every step. The span is the largest minus the smallest bias, and its ceiling is $1+2u$.
[^qa-7]: **Supported with caveat** — the numbers match Section 5.3 and Appendix C.3 of [S1]. They come from an exploratory probe that repeats only the first 3,000 steps. The AdamW reference is a single run at seed 3, and so are the row-spread ratios of 3.0 and 1.4. The two-factor split is an identity (Eq. 3), not a causal test, and the paper says it does not know what spreads the router rows (Section 6.1).
[^qa-8]: **Verified** — Sections 4.1 and 4.3, Table 7 and Appendix B of [S1]. The models have 55M of 303M and 108M of 496M parameters active, and train on FineWeb-Edu sample-10BT in batches of 64 sequences of 1,024 tokens, for 1B or 3B tokens. The rates (2×10⁻³ for AdamW, 4×10⁻³ for Muon) were tuned at 0.5B tokens with seed 0. The 252.6 GPU-hours on RTX 5090s cover the 145 counted runs and exclude the 30 exploratory runs and host setup. Section 6.3 confirms that validation loss is the only evaluation.
[^qa-9]: **Verified** — Table 3 and Section 5.1 of [S1]. QA recomputed the validation losses (3.2546 and 3.1769) and the all-layer spans (0.1047 and 0.1374) from the released main-comparison endpoints in [S3]. That table has no first-layer column, so QA checked 0.084 and 0.194 against the paper only.
[^qa-10]: **Verified** — the first-layer span column of Table 5 of [S1]: +0.110, +0.103 and +0.075 for the three seed sets, +0.081 with the balance loss and +0.152 on the large model. The AdamW baselines are 0.084 (Table 3) and 0.095 (Table 4).
[^qa-11]: **Verified** — Table 4 and Section 5.3 of [S1]. QA recomputed every arm's first-layer span and input cosine from [S3]: 0.071 for AdamW against 0.391 and 0.408 for the two Muon partitions. The 93% and 11% are the variance explained by single-variable fits on log scales across 27 runs (Figure 5); they are correlations, not causal estimates.
[^qa-12]: **Verified** — Sections 4.4 and 5.3 of [S1]. The small-model probe covers only steps 1–3,000 at seeds 3–5 and centers only the first router's input. Appendix C.4 reports the same removal of the early overload in a large-model probe.
[^qa-13]: **Verified** — Sections 4.3 and 5.4 and Table 4 of [S1]: input cosine 0.401 at the half rate, early overload 1.73 against 4.06, and a 0.003 loss gap between Muon at 2×10⁻³ and 4×10⁻³ in the 0.5B-token tuning.
[^qa-14]: **Verified** — QA repeated this recompute from the main-comparison and ablation endpoint tables in [S3]. The per-seed first-layer differences were +0.0886, +0.1744 and +0.0452 (mean +0.1027) at the tuned rate and +0.0098, +0.0251 and +0.0371 (mean +0.0240) at the half rate. The Table 4 arm means for loss, span, input cosine, score offset, early overload and common share also match.
[^qa-15]: **Supported with caveat** — Sections 4.3, 5.4 and 6.3 of [S1] say all of this about the small model. Section 6.3 states "We did not retune AdamW on the small model at 1B tokens", and the abstract of [S11] says "longer training necessitates smaller LR". The large model is different: both of its optimizers were tuned at 1B tokens and then scaled by 0.7 for 3B (Section 4.3), so the point about AdamW not being retuned applies to the small model only.
[^qa-16]: **Contradicted** — as originally written. Sections 4.3 and 5.1 of [S1] report a large-model tuning sweep at 1B tokens and seed 0 that trained Muon at rates below the one it selected. Section 6.3 confines the gap to the 3B-token experiment. The sentence has been corrected; see the CAUTION callout.
[^qa-17]: **Verified** — QA saw the same on 2026-11-04. The commit history of [S2] shows 24 commits from 2026-10-18 to 2026-10-30, and its tags page lists none. The dataset card of [S3] dates the runs 2026-09-23 to 2026-09-29 and names tags from `frozen-2026-09-23` to `frozen-2026-09-28`. The timing of the planned comparisons therefore rests on the paper's own account.
[^qa-18]: **Verified** — in QA's search of the v1 text, "downstream", "throughput" and "expert parallel" do not occur, and "benchmark" appears only in reference titles. The costs of overload under separate devices or a capacity limit appear only as an argument in Section 6.2 of [S1].
[^qa-19]: **Supported with caveat** — the abstract of [S8] says the authors "prove that load-balancing loss suppresses shared hidden state directions". As Section 5.5 of [S1] summarizes the result, it holds for a softmax router trained only to balance its loads, with small logits and a simplified balance loss, and the authors expect it to hold only in part when the loss is auxiliary.
[^qa-20]: **Supported with caveat** — Sections 2 and 6.2 of [S1] say so. Section 2 adds that Lau and Su's comparison has one run per configuration, with attention and experts on Muon, so it is a single-run result.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
