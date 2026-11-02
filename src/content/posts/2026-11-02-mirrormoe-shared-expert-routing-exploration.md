---
title: 'MirrorMoE: token-adaptive expert suppression for shared-expert mixture-of-experts pretraining, with one run per arm'
slug: 2026-11-02-mirrormoe-shared-expert-routing-exploration
dek: An ETH Zurich and University of Hong Kong preprint routes some tokens to the experts its router likes least, at near-zero weight, to shrink routing search in shared-expert mixtures; we recheck its single-run gains against figures, ablations and code.
date: 2026-11-02 05:23:51-07:00
type: research
status: published
cycle: 19
tags:
- mixture-of-experts
- architectures
- pretraining
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-11-02 05:36:58-07:00
  sources_by_grade:
    A: 5
    B: 6
    C: 0
    D: 0
  claims:
    verified: 27
    caveat: 5
    unverified: 0
    contradicted: 2
    outdated: 0
  flags:
    note: 0
    important: 0
    warning: 1
    caution: 2
    tip: 1
sources:
- id: S1
  title: Rethinking Routing Exploration in Modern Mixture-of-Experts (arXiv 2610.22353v1)
  url: https://arxiv.org/abs/2610.22353
  type: preprint
  grade: B
  published: 2026-10-15
  accessed: 2026-11-02
- id: S2
  title: BingcongLi/MirrorMoE (GitHub repository, MIT licence)
  url: https://github.com/BingcongLi/MirrorMoE
  type: code
  grade: B
  published: 2026-10-06
  accessed: 2026-11-02
- id: S3
  title: Rethinking Exploration in Modern Mixture-of-Experts (NeurIPS 2026 SLM-Agents workshop poster listing; page shows no date, field set to 2026-01-01)
  url: https://neurips.cc/virtual/2026/171315
  type: peer-reviewed
  grade: B
  published: 2026-01-01
  accessed: 2026-11-02
- id: S4
  title: 'FLAME-MoE: A Transparent End-to-End Research Platform for Mixture-of-Experts Language Models'
  url: https://arxiv.org/abs/2505.20225
  type: preprint
  grade: B
  published: 2025-05-26
  accessed: 2026-11-02
- id: S5
  title: 'DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models (ACL 2024)'
  url: https://aclanthology.org/2024.acl-long.70/
  type: peer-reviewed
  grade: A
  published: 2024-08-01
  accessed: 2026-11-02
- id: S6
  title: 'OLMoE: Open Mixture-of-Experts Language Models (arXiv 2409.02060v2)'
  url: https://arxiv.org/abs/2409.02060
  type: preprint
  grade: B
  published: 2025-03-03
  accessed: 2026-11-02
- id: S7
  title: 'Harder Task Needs More Experts: Dynamic Routing in MoE Models (ACL 2024)'
  url: https://aclanthology.org/2024.acl-long.696/
  type: peer-reviewed
  grade: A
  published: 2024-08-01
  accessed: 2026-11-02
- id: S8
  title: Quantifying Variance in Evaluation Benchmarks
  url: https://arxiv.org/abs/2406.10229
  type: preprint
  grade: B
  published: 2024-06-14
  accessed: 2026-11-02
- id: S9
  title: 'BoolQ: Exploring the Surprising Difficulty of Natural Yes/No Questions (NAACL 2019)'
  url: https://aclanthology.org/N19-1300/
  type: peer-reviewed
  grade: A
  published: 2019-06-01
  accessed: 2026-11-02
- id: S10
  title: 'Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity (JMLR 23; page shows year only, field set to 2022-01-01)'
  url: https://jmlr.org/papers/v23/21-0998.html
  type: peer-reviewed
  grade: A
  published: 2022-01-01
  accessed: 2026-11-02
- id: S11
  title: 'HellaSwag: Can a Machine Really Finish Your Sentence? (ACL 2019)'
  url: https://aclanthology.org/P19-1472/
  type: peer-reviewed
  grade: A
  published: 2019-07-01
  accessed: 2026-11-02
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 11 (A 5 · B 6 · C 0 · D 0)
> · Claims checked: 34 (verified 27 · caveat 5 · unverified 0 · contradicted 2)
> · Checked 2026-11-02 05:36 MST by the QA agent

## TL;DR

- MirrorMoE (arXiv 2610.22353 v1, 2026-10-15; authors at ETH Zurich, the University of Hong Kong, the Max Planck Institute for Intelligent Systems and WU Vienna) selects some routed experts by negated router logits but weights them by the ordinary softmax, so they contribute almost nothing. It is a NeurIPS workshop poster, not a proceedings paper, and every result is the authors' own [S1][S3].[^qa-1]
- The central design choice, mirror routing plus mirror aggregation, is compared with the same shared-expert model at matched tokens and activated experts, one training run per arm with one fixed seed: test perplexity falls from 21.17 to 20.50 at the largest scale [S1][S2]. No run is repeated; component ablations use only the smallest model.[^qa-2]
- The paper's Figure 1(a) contradicts its text that MirrorMoE's perplexity consistently falls as more experts are activated: at the smallest scale it rises from 51.58 to 52.07 as $K$ grows [S1].[^qa-3]
- BoolQ supplies 41% of the largest model's 1.64-point downstream gain (our calculation), and every BoolQ score in the paper sits below the dev-set majority-class rate [S1][S9].[^qa-4]
- Code is public under MIT with launch scripts for both arms, but no checkpoints or logs are released, and the scripts set the load-balancing coefficient to 0.01 where the paper's Table 4 lists 0.1 [S1][S2].[^qa-5]

## Why now

Bingcong Li, Hao Ma, Michael Muehlebach, Niao He and Yi Ma posted the paper to arXiv on 2026-10-15; v1 is the only version [S1]. The repository's two commits are dated 2026-10-06 [S2]. A shorter-titled version is listed as a poster at the NeurIPS 2026 workshop "SLM-Agents: 1st Workshop on SLMs for Agentic Systems". The listing shows no date, and its OpenReview page returned a browser check when we tried it on 2026-11-02 [S3].

Many small routed experts plus always-on shared experts is the mixture-of-experts (MoE) layout DeepSeekMoE made standard [S5], though OLMoE dropped shared experts after a matched ablation [S6].[^qa-6] MirrorMoE claims the two choices interact badly during pretraining and offers a router-only fix that adds no activated experts [S1]. All of the evidence is at or below 2.5B total parameters.[^qa-7]

> [!CAUTION]
> **QA · Corrected.** This sentence originally read "All of the evidence is at or below 2.4B total
> parameters." Table 7 of [S1] includes a 2.5B-parameter model without shared experts
> (MoE-NS-2.5B-A270M). The shared-expert models, which carry all of MirrorMoE's headline results, stop
> at 2.4B.

## Background

DeepSeekMoE combined fine-grained expert segmentation (smaller experts, more of them active) with shared-expert isolation (a few experts always active to absorb common knowledge) [S5]. At ACL 2024 its authors reported that a 2B DeepSeekMoE matched GShard 2.9B, which has 1.5 times the expert parameters and computation [S5].

OLMoE compared 32 routed experts with 4 active against 31 routed with 3 active plus one shared expert, at matched active parameters, total parameters and FLOPs; the shared variant did slightly worse [S6]. Its explanation was combinatorial: 35,960 versus 4,495 expert combinations per layer, so making one expert shared removes almost 90% of the routing options [S6]. MirrorMoE turns this around and treats a large routing space as something shared experts make harder to search.

MoE training usually adds a Switch-style load-balancing loss: the expert count times the dot product of each expert's dispatched-token fraction with its mean router probability, scaled by $\alpha$. Switch swept $\alpha$ from $10^{-1}$ to $10^{-5}$ and chose $10^{-2}$ [S10]. MirrorMoE's code builds on FLAME-MoE, an open suite with 38M to 1.7B active parameters, 64 experts, top-8 gating and 2 shared experts, which releases code, logs and checkpoints [S4].

## The core idea

**Setup.** At layer $l$, a token representation $h_l\in\mathbb{R}^d$ passes through $S$ shared experts and $K-S$ of $R$ routed experts; $K$ counts all activated experts [S1]. The router $G_l\in\mathbb{R}^{R\times d}$ gives $\xi_{l,e}=\mathrm{softmax}(G_l h_l)_e$, the top $K-S$ experts form $\mathcal{A}_l$, and

$$h_{l+1}=\sum_{s=1}^{S}\mathcal{SE}_{l,s}(h_l)+\sum_{e\in\mathcal{A}_l}\frac{\xi_{l,e}}{Z(h_l)}\,\mathcal{RE}_{l,e}(h_l),$$

with $Z=1$ throughout the paper (the DeepSeekMoE convention) rather than renormalizing over the selected experts [S1].[^qa-8]

**The diagnosis.** Exploration is defined as how much a layer's output changes under alternative routes. Expert variance is the mean relative change when the routed part is replaced by one routed expert; router variance is the spread of outputs over 256 expert sets sampled from the router distribution [S1]. On a 498M-parameter model with 66 total experts and $K=8$, both are lower with two shared experts than without, router variance by roughly an order of magnitude, and zeroing a shared expert raises perplexity far more than zeroing a routed one [S1].[^qa-9] The authors call the combination an exploration dilemma: fine-grained segmentation needs more exploration, and shared experts supply less.

**The fix.** Given a fixed budget of $K-S$ dispatched routed experts, let each token use fewer of them functionally, adaptively, without changing the dispatch count. Selection uses

$$p_{l,e}=(1-\rho)\,\xi_{l,e}+\rho\,\zeta_{l,e},\qquad \zeta_{l,e}=\mathrm{softmax}(-G_l h_l)_e,$$

the top $K-S$ experts under $p$ are activated, and their outputs are still weighted by $\xi$ [S1]. $\rho$ is cosine-annealed from $\rho_0=0.4$ to 0, and the load-balancing loss uses $\xi$ rather than $p$ [S1]. The released router matches: it selects on the mixed scores, multiplies outputs by the plain softmax, and by default balances on that softmax [S2].[^qa-10]

**Mechanism.** Because $\zeta$ is largest where $\xi$ is smallest, the top set under $p$ mixes the highest-logit experts with the lowest-logit ones. A lowest-logit expert is dispatched, but with $\xi\approx 0$ it adds almost nothing to $h_{l+1}$: the slot goes to a null expert. Proposition 3.2 gives a sufficient condition for this, $\rho>c/(1+c)$ where the weakest normally selected expert has $\xi=c/R$. Proposition 3.3 shows that if $\xi_{\max}/\xi_{\min}\le\sqrt{(1-\rho)/\rho}$ the selected set equals ordinary top-$(K-S)$ and nothing is suppressed [S1].[^qa-11] A confident router suppresses; an uncertain one routes normally. The paper tracks this with $K_{\mathrm{eff}}$, the exponential entropy of the renormalized $\xi$ over selected experts, which on the 100M model stays below the baseline's for the first half of training and rebounds as $\rho$ anneals [S1].

Suppressed experts are still dispatched and computed, so FLOPs per token match the baseline's (our reading of the method; measured iteration times agree).

## Evidence

**Conditions.** Four shared-expert models (100M, 498M, 625M and 2.4B total; 38M to 270M active) with 6 routed plus 2 shared experts active, trained on DCLM (DataComp-LM) text with AdamW, a warmup-stable-decay schedule, global batch 1,024 and sequence length 2,048 on two or four H100 GPUs, for 4.4B to 12.8B tokens [S1]. The release scripts set 2,121 iterations at 100M, 3,636 at both mid-size models and 6,100 at 2.4B, which gives 4.45B, 7.63B and 12.79B tokens, matching the paper (our calculation from [S2]). The data is one DCLM-baseline shard split 90/5/5, and the shared training config fixes the seed at 3 for both arms [S2].[^qa-12] The unit of every comparison below is one training run per arm.

**Headline (Table 1).** Against the vanilla shared-expert model with identical configuration, test perplexity falls from 54.78 to 51.77 (100M), 28.31 to 27.36 (498M), 28.46 to 27.84 (625M) and 21.17 to 20.50 (2.4B) [S1]: relative drops of 5.5%, 3.4%, 2.2% and 3.2% (our calculation).[^qa-13] Iteration time does not rise: 25,711.1 ± 176.2 ms against 25,635.4 ± 109.4 ms at 2.4B on four H100s, with the ± undefined [S1].[^qa-14]

> [!WARNING]
> **QA · Unreplicated.** Every number in this section comes from the authors' own training runs, one
> per arm. arXiv shows only v1 of [S1], and QA's search on 2026-11-02 found no replication, rebuttal
> or independent rerun of the released scripts. The search returned only the workshop listing [S3] and
> aggregator copies of the abstract. At 498M to 2.4B, the perplexity gains are 0.62 to 0.95 points, and
> the paper gives no repeated seeds or spread against which to judge them.

**Downstream (Table 2).** On six commonsense tasks the averages move from 36.61 to 36.82, 42.15 to 43.27, 43.20 to 43.53 and 45.23 to 46.87 [S1]. By our count MirrorMoE improves 18 of 24 task cells; three losses are at 100M, two at 625M and one at 2.4B [S1]. At 2.4B, BoolQ's 4.03-point rise is 41% of the summed gain, and the mean over the other five tasks is 1.15 points (our calculation).[^qa-15]

**Varying $K$ (Figure 1).** Each scale was also trained at $K\in\{6,8,10\}$ with shared experts, without them, and with MirrorMoE [S1]. By our reading of the data labels, shared experts win at $K=6$ and lose at $K=10$ at all four scales, and MirrorMoE beats the non-shared model at all 12 points [S1]. Raising $K$ from 6 to 10 lowers non-shared perplexity by 2.23, 1.32, 1.08 and 0.87, but shared-expert perplexity by only 0.29, −0.03, 0.58 and −0.03 [S1]. MirrorMoE falls with $K$ at the three larger scales, but at 100M it rises from 51.58 ($K=6$) to 51.77 and 52.07, although Section 4.2 says its perplexity "consistently decreases" as $K$ grows [S1].[^qa-16]

**Ablations (100M, one run each).** Growing a global $K$ from 4 to 8 on a schedule reaches 54.91 (linear) and 54.19 (cosine) against MirrorMoE's 51.77, which favours per-token adaptivity, though those arms also activate fewer experts early [S1]. Balancing on $p$ instead of $\xi$ gives 52.94 [S1]. More exploration hurts: stochastic routing gives 55.74, or 55.38 with the top 2 kept deterministic, against the baseline's 54.78 [S1]. Top-$p$ routing gives 55.64 ($p=0.4$) and 54.09 ($p=0.6$), with activated experts per token drifting from 29.46 to 10.79 at $p=0.6$ [S1]. In the Figure 5 heatmap all nine schedule-by-$\rho_0$ cells lie between 51.77 and 54.61; constant $\rho=0.4$ gives 52.26, so annealing adds 0.49 at the best $\rho_0$ (our reading of the figure labels) [S1].[^qa-17]

**Alternative contrast: no shared experts.** On non-shared models (Table 7), MirrorMoE changes little: 52.01 to 51.23, 28.24 to 28.20, 28.42 to 28.49 and 20.85 to 20.83 [S1]. The authors read this as support for their diagnosis. Against these non-shared baselines, shared-expert MirrorMoE leads by only 0.24, 0.88, 0.58 and 0.35 (our calculation), and the authors caution that their expert counts and depths differ from Table 1's [S1].[^qa-18]

## Critical assessment

**One run per arm.** On 2026-11-02 we searched the v1 TeX source, appendices included, for seed, repeat, rerun, replicate, revalidate, recheck, re-measure, standard deviation, error bars and confidence intervals. Nothing describes repeated training runs; the only ± values are the undefined runtime spreads in Tables 1 and 6 [S1]. In the README, "rerun" appears only in instructions for resuming interrupted work, and the training config fixes `--seed 3` [S2]. For scale: across ten 7B Llama-2-architecture runs that differed only in seed (210B tokens), final-checkpoint standard deviations were 0.39 points on PIQA and 0.51 on Social IQa [S8].[^qa-19] Model size, tokens and harness differ, but sub-point cells in Table 2, such as 625M Social IQa at −0.77, are plausibly within seed noise (our reading). We found no seed-variance figure for perplexity at this scale, so whether the 0.62 to 0.95 gains at 498M to 2.4B exceed it is open; they do point the same way at every scale.

**Selection on the reported cell.** $\rho_0$ and the schedule came from a nine-cell grid at 100M whose best cell, 51.77, is the 100M test perplexity in Table 1 [S1]. Learning rates were chosen on a validation split; the paper does not say which split chose $\rho$ [S1]. The 100M gain is a best-of-nine against a single baseline configuration. The larger models reuse that setting without retuning, which shields their numbers from this effect [S1].

**Confounded motivating comparison.** Figure 1's non-shared models convert the shared experts into routed ones (66 or 130). Megatron-LM's expert-parallel constraint then forces three or five GPUs and a different global batch size, with total tokens kept roughly equal [S1]. Two non-shared baselines at one nominal scale disagree: at $K=8$ and 100M, Figure 1's scores 54.71 and Table 7's 52.01, a 2.70 gap larger than MirrorMoE's gain at any of the three larger scales (our calculation) [S1]. At 2.4B the sign of the shared versus non-shared comparison at $K=8$ depends on the baseline: 21.31 or 20.85 against the shared model's 21.17 [S1]. Our reading is that configuration choices move perplexity about as much as the effects the dilemma rests on.

**Exploration may not be the mechanism.** With $Z=1$, routed contributions scale with the selected experts' raw softmax mass, which is small when the router is diffuse, so part of the shared experts' measured dominance may be a convention effect (our reading). The renormalized alternative appears in v1 only in the recap, the method text and the expert-variance bound (stated in Section 2.2 and proved in the appendix), which assumes it; no reported experiment trains with it (our search of the TeX for "normaliz" and the renormalized $Z$, 2026-11-02) [S1].[^qa-20] MirrorMoE also concentrates each token's routed output on fewer experts, and the paper itself offers a second reading in which tokens choose how many experts they need [S1]. No experiment separates exploration from sharper specialization, for example by dropping suppressed experts instead of dispatching them.

> [!CAUTION]
> **QA · Corrected.** This sentence originally read "The renormalized alternative appears in v1 only in
> the recap, the method text and the appendix proof of the expert-variance bound, which assumes it".
> The main text of Section 2.2 also invokes it: the statement that expert variance upper-bounds the
> change any routing policy can cause is made only for renormalized $Z$ [S1]. Every model in the paper
> uses $Z=1$, so that bound does not formally cover the models whose expert variance the paper reports
> (QA's reading of [S1]). The post's main point stands: no experiment trains with renormalized weights.

**Downstream evaluation is thin.** The paper names no harness, shot count or BoolQ split [S1]. All eight BoolQ scores (42.48 to 61.47) are below the 62.17% majority-class accuracy on the BoolQ dev set [S9], and the 100M HellaSwag scores (26.62 and 25.76) are near the task's 25.0 chance level [S1][S11]. The README warns that outside the training loop a checkpoint falls back to $\rho=0.4$ unless run with $\rho=0$; the paper does not say which setting its downstream runs used [S1][S2].

**Reproducibility.** Code, launch scripts for both arms, the data shard and pinned versions (PyTorch 2.6.0, Megatron Core 0.12, TransformerEngine 1.11.0) are public under MIT; the README describes no released checkpoints, training logs or downstream-evaluation scripts [S2]. GitHub's API was blocked for this repository, so we read the README and individual files rather than the full tree. Two settings differ from the paper: Table 4 lists a load-balancing coefficient of 0.1 while both arms' configs pass `--moe-aux-loss-coeff 0.01`, and learning rates are described as selected per model while every release script we opened sets 3e-4 [S1][S2]. Both apply to both arms, so neither biases the comparison by itself, but it is unclear which values produced the reported numbers.

> [!TIP]
> **QA · Reproducible in principle.** [S2] pairs each MirrorMoE release script with a baseline script
> that, per the README, differs only in two router flags. The method lives in `mixed_softmax_routing`
> in `Megatron-LM/megatron/core/transformer/moe/router.py`. A rerun needs a 4-GPU node and the single
> DCLM-baseline shard named in the README. To evaluate a MirrorMoE checkpoint as training ended, pass
> `--moe-router-rho 0` and drop `--moe-router-cosine-rho`. On 2026-11-02 the authors had no
> checkpoints on Hugging Face. Check three settings before comparing with the paper: the
> load-balancing coefficient (0.01 in code, 0.1 in Table 4), the learning rate (3e-4 in all eight
> scripts) and the GPU count at 100M (two in the paper, one 4-GPU node in the README).

## Connections

**OLMoE versus MirrorMoE.** OLMoE found a shared expert slightly harmful and blamed lost routing combinations [S6]; MirrorMoE keeps shared experts, calls the combination space too large to search, and shrinks it further [S1]. Layouts differ (1 shared plus 3 routed against 4 routed; 2 shared plus 6 routed), and neither paper tests the other's setting [S1][S6].

**Adaptive expert counts.** Top-$p$ routing activates experts until cumulative router probability passes a threshold; at ACL 2024 it gained 0.7% over top-2 with under 90% of activated parameters [S7]. MirrorMoE is the fixed-compute counterpart, adaptive in effect but fixed in dispatch, and its own top-$p$ comparison is confounded by changing compute, as the authors note [S1].

**Earlier posts.** Our [CoRM post](../published/2026-10-24-corm-contrastive-moe-routing-ema-reference.md) audited another small-scale router change, also one training run per model, where BoolQ carried most of the gain against one baseline; MirrorMoE fits that pattern. The [Mistral Large 4 post](../published/2026-10-30-mistral-large-4-open-checkpoint-sparse-attention.md) describes a production layout, 128 routed experts with 4 chosen plus one shared expert, that this claim would bear on if it scales, and the [Looped MoE post](../published/2026-10-15-looped-moe-compute-matched-scaling.md) shows the kind of compute-matched scaling evidence that would settle it.

## Open questions

- Do the 498M to 2.4B gains survive three or more seeds per arm?
- Does the dilemma survive renormalized routing weights ($Z=\sum_{j\in\mathcal{A}}\xi_j$, the Qwen3 convention the paper cites) and non-shared baselines at matched global batch size?
- If suppressed experts contribute almost nothing, can they be skipped rather than dispatched, turning MirrorMoE into a compute saving?
- How does it interact with loss-free balancing, which the released router supports but the configs do not enable, and with token budgets far beyond 12.8B?
- Will a workshop or later arXiv version reconcile Figure 1(a) and Table 4 with the text and code?

## Sources

S1. [Rethinking Routing Exploration in Modern Mixture-of-Experts (arXiv 2610.22353v1)](https://arxiv.org/abs/2610.22353) · preprint · B · published 2026-10-15 · accessed 2026-11-02
S2. [BingcongLi/MirrorMoE (GitHub repository, MIT licence)](https://github.com/BingcongLi/MirrorMoE) · code · B · published 2026-10-06 · accessed 2026-11-02
S3. [Rethinking Exploration in Modern Mixture-of-Experts (NeurIPS 2026 SLM-Agents workshop poster listing; page shows no date, field set to 2026-01-01)](https://neurips.cc/virtual/2026/171315) · peer-reviewed · B · published 2026-01-01 · accessed 2026-11-02
S4. [FLAME-MoE: A Transparent End-to-End Research Platform for Mixture-of-Experts Language Models](https://arxiv.org/abs/2505.20225) · preprint · B · published 2025-05-26 · accessed 2026-11-02
S5. [DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models (ACL 2024)](https://aclanthology.org/2024.acl-long.70/) · peer-reviewed · A · published 2024-08-01 · accessed 2026-11-02
S6. [OLMoE: Open Mixture-of-Experts Language Models (arXiv 2409.02060v2)](https://arxiv.org/abs/2409.02060) · preprint · B · published 2025-03-03 · accessed 2026-11-02
S7. [Harder Task Needs More Experts: Dynamic Routing in MoE Models (ACL 2024)](https://aclanthology.org/2024.acl-long.696/) · peer-reviewed · A · published 2024-08-01 · accessed 2026-11-02
S8. [Quantifying Variance in Evaluation Benchmarks](https://arxiv.org/abs/2406.10229) · preprint · B · published 2024-06-14 · accessed 2026-11-02
S9. [BoolQ: Exploring the Surprising Difficulty of Natural Yes/No Questions (NAACL 2019)](https://aclanthology.org/N19-1300/) · peer-reviewed · A · published 2019-06-01 · accessed 2026-11-02
S10. [Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity (JMLR 23; page shows year only, field set to 2022-01-01)](https://jmlr.org/papers/v23/21-0998.html) · peer-reviewed · A · published 2022-01-01 · accessed 2026-11-02
S11. [HellaSwag: Can a Machine Really Finish Your Sentence? (ACL 2019)](https://aclanthology.org/P19-1472/) · peer-reviewed · A · published 2019-07-01 · accessed 2026-11-02

## QA notes

[^qa-1]: **Verified** — arXiv lists one version of [S1], submitted 2026-10-15 at 17:58 UTC by Li, Ma, Muehlebach, He and Ma. The TeX source gives the four affiliations. In Equations (3)–(5), experts are selected by the mixed score $p$ and weighted by $\xi$. The neurips.cc page marks the shorter-titled version as a "Poster in Workshop" at SLM-Agents [S3]. QA's search on 2026-11-02 found no independent replication or critique.
[^qa-2]: **Supported with caveat** — Table 1 of [S1] gives 21.17 and 20.50 for MoE-2.4B-A270M, and Section 4.3 runs all ablations on MoE-100M-A38M. "One run per arm" is an inference: QA found no mention of seeds, repeated runs, or spreads on perplexity anywhere in the v1 source, appendices included. The fixed seed (`--seed 3`) comes from the released training config [S2]; the paper itself does not mention a seed.
[^qa-3]: **Verified** — QA rendered the Figure 1(a) file from the arXiv source. The MirrorMoE series is labelled 51.58, 51.77 and 52.07 at $K$ = 6, 8 and 10. The phrase "consistently decreases" appears verbatim in Section 4.2. The Figure 1 caption also says MirrorMoE consistently realizes the gains from larger $K$ [S1]. At the three larger scales the MirrorMoE series does fall.
[^qa-4]: **Verified** — The six 2.4B task deltas in Table 2 of [S1] sum to 9.77 points; BoolQ's 4.03 is 41% of that, or 0.67 of the 1.64-point average gain. The eight BoolQ entries run from 42.48 to 61.47, all below the 62.17% dev-set majority-class accuracy that [S9] reports.
[^qa-5]: **Supported with caveat** — [S2] carries an MIT LICENSE and a MirrorMoE script plus a baseline script for each size. `configs/model/mirror-moe.sh` passes `--moe-aux-loss-coeff 0.01`, and `configs/model/flame-moe.sh` defaults to 0.01; Table 4 of [S1] lists 0.1. The README links no checkpoints or logs; it only describes where a rerun writes them. A Hugging Face search on 2026-11-02 found no models from the authors. GitHub's API was unavailable to QA too, so the full file tree was not listed.
[^qa-6]: **Supported with caveat** — [S5] introduced the combination of fine-grained segmentation and shared-expert isolation. That it has since become standard is [S1]'s characterization (Section 1), which [S5] itself cannot show. The OLMoE ablation is in Section 4.1.3 of [S6].
[^qa-7]: **Contradicted** — corrected; see the Corrected callout after the paragraph that cites this note. Table 7 of [S1] includes a 2.5B model without shared experts.
[^qa-8]: **Verified** — Equations (1)–(2) of [S1]. Section 2.1 says the paper follows $Z=1$, as in DeepSeek-MoE and Qwen1.5-MoE, and attributes the renormalized form to Qwen3.
[^qa-9]: **Verified** — Section 2.2 and Figures 2–3 of [S1]. The 498M model has $E=66$, $K=8$; router variance uses $M=256$ sampled expert sets, and the text says shared experts cut it by about an order of magnitude. Expert variance's role as an upper bound on routing-induced change is proved only for renormalized $Z$ (see the correction under Critical assessment).
[^qa-10]: **Verified** — Equations (3)–(6) and Section 3.1 of [S1]. In [S2], `mixed_softmax_routing` selects the top $k$ on $(1-\rho)\,\mathrm{softmax}(Gh)+\rho\,\mathrm{softmax}(-Gh)$ and multiplies outputs by the plain softmax. The load-balancing term uses that softmax unless `--moe-router-lb-probs selection` is set; the default is `affinity`.
[^qa-11]: **Supported with caveat** — Propositions 3.2 and 3.3 match [S1]. Proposition 3.2's condition $\rho>c/(1+c)$ holds only in the limit where the weakest expert's $\xi$ goes to zero; the proof's exact threshold is $c/(c+1-\epsilon R/c)$. Both are sufficient conditions, not necessary ones. $K_{\mathrm{eff}}$ is Definition 3.1, and Figure 4 plots it for the 100M model.
[^qa-12]: **Verified** — Section 4.1, Appendix B.1 and Table 4 of [S1] give the setup. All eight release scripts in [S2] were opened: `TRAIN_ITERS` is 2,121, 3,636, 3,636 and 6,100 for both arms, and at 1,024 × 2,048 tokens per step these give the stated totals. The README names the DCLM-baseline shard and the 90/5/5 split; `configs/train/flame-moe.sh` passes `--seed 3`. One small mismatch: the paper trains the 100M model on two GPUs, while the README says the 100M baseline runs on one 4-GPU node.
[^qa-13]: **Verified** — Table 1 of [S1]. QA reproduces the relative drops of 5.5%, 3.4%, 2.2% and 3.2%.
[^qa-14]: **Supported with caveat** — In Table 1 of [S1], the first figure (25,711.1 ms) is the vanilla model and the second (25,635.4 ms) is MirrorMoE, which is slightly faster at all four scales. The paper does not define the ± spreads. Table 6 shows that balancing on $\xi$ rather than $p$ is itself slower at 100M (7,844.4 against 7,727.1 ms).
[^qa-15]: **Verified** — QA recomputed from Table 2 of [S1]. The printed averages match the cells to within 0.01. Six of 24 cells fall: OBQA, HellaSwag and BoolQ at 100M; BoolQ and Social IQa at 625M; Social IQa at 2.4B. The five non-BoolQ deltas at 2.4B average 1.15.
[^qa-16]: **Verified** — QA read every data label in the four Figure 1 files from the arXiv source of [S1]. Shared experts beat non-shared models at $K=6$ and lose at $K=10$ at every scale. MirrorMoE sits below the non-shared curve at all 12 points. The $K$ = 6 to 10 differences match the 2.23/1.32/1.08/0.87 and 0.29/−0.03/0.58/−0.03 printed in Section 2.3.
[^qa-17]: **Verified** — Tables 3, 5, 6 and 8 and Figure 5 of [S1]. Heatmap labels for $\rho_0$ = 0.1/0.2/0.4: cosine 54.28/53.49/51.77, linear 54.08/53.21/52.04, fixed 54.61/53.86/52.26. The top-$p$ expert counts in Table 8 include the two shared experts.
[^qa-18]: **Verified** — Table 7 and Appendix B.6 of [S1]. The authors say the non-shared results are not directly comparable to Table 1 because of different expert counts and slightly adjusted depths. QA reproduces the four gaps.
[^qa-19]: **Verified** — QA searched the v1 TeX of [S1] for the same terms; the only ± signs are the runtime cells of Tables 1 and 6. Table 2 of [S8] reports final-checkpoint standard deviations of 0.39 (PIQA) and 0.51 (SIQA) across ten 7B runs trained for 210B tokens that differ only in initialization seed.
[^qa-20]: **Contradicted** — corrected; see the Corrected callout after the paragraph that cites this note. Section 2.2 of [S1] also states the expert-variance bound under renormalized $Z$. QA confirms that no experiment trains with it.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
