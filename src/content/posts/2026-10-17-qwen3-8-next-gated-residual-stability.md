---
title: 'Qwen3.8-Next''s architecture report: gated residuals, Muon and n-gram tables, and what its stability evidence supports'
slug: 2026-10-17-qwen3-8-next-gated-residual-stability
dek: Qwen's design report for a 6B-active open-weights model ablates each component in single token-matched runs and stress-tests training stability, but its headline parity with a 397B predecessor is not a controlled comparison.
date: 2026-10-17 18:40:00-06:00
type: research
status: published
cycle: 7
tags:
- architectures
- mixture-of-experts
- open-weights
- training-stability
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-10-17 18:28:54-06:00
  sources_by_grade:
    A: 1
    B: 16
    C: 0
    D: 1
  claims:
    verified: 43
    caveat: 4
    unverified: 0
    contradicted: 0
    outdated: 0
  flags:
    note: 1
    important: 0
    warning: 1
    caution: 1
    tip: 1
sources:
- id: S1
  title: 'On the Design of Qwen3.8-Next Architecture: Evaluation, Efficiency, and Training Stability'
  url: https://arxiv.org/abs/2608.30320
  type: preprint
  grade: B
  published: 2026-08-31
  accessed: 2026-10-17
- id: S2
  title: Qwen/Qwen3.8-Flash-Next (Hugging Face model card and repository)
  url: https://huggingface.co/Qwen/Qwen3.8-Flash-Next
  type: code
  grade: B
  published: 2026-08-24
  accessed: 2026-10-17
- id: S3
  title: Qwen3.8-Flash-Next config.json
  url: https://huggingface.co/Qwen/Qwen3.8-Flash-Next/blob/main/config.json
  type: code
  grade: B
  published: 2026-08-24
  accessed: 2026-10-17
- id: S4
  title: Qwen3.8-Flash-Next LICENSE (Qwen Community License 1.0)
  url: https://huggingface.co/Qwen/Qwen3.8-Flash-Next/blob/main/LICENSE
  type: code
  grade: B
  published: 2026-08-24
  accessed: 2026-10-17
- id: S5
  title: QwenLM/Qwen3.8-Flash-Next GitHub repository (README and tech_report.pdf)
  url: https://github.com/QwenLM/Qwen3.8-Flash-Next
  type: technical-report
  grade: B
  published: 2026-08-26
  accessed: 2026-10-17
- id: S6
  title: 'Qwen3.8-Flash-Next: A New Architecture, Towards Ultimate Cost-Efficiency (Alibaba Cloud Community)'
  url: https://www.alibabacloud.com/blog/qwen3-8-flash-next-a-new-architecture-towardsultimate-cost-efficiency_603501
  type: lab-post
  grade: B
  published: 2026-08-27
  accessed: 2026-10-17
- id: S7
  title: 'QwenLM/FlashQLA: TileLang linear-attention kernels'
  url: https://github.com/QwenLM/FlashQLA
  type: code
  grade: B
  published: 2026-07-01
  accessed: 2026-10-17
- id: S8
  title: 'Gated Delta Networks: Improving Mamba2 with Delta Rule'
  url: https://arxiv.org/abs/2412.06464
  type: preprint
  grade: B
  published: 2025-03-06
  accessed: 2026-10-17
- id: S9
  title: Hyper-Connections
  url: https://proceedings.iclr.cc/paper_files/paper/2025/hash/f1e8ff97057e0c3f6bcb7018c78d4df1-Abstract-Conference.html
  type: peer-reviewed
  grade: A
  published: 2025-04-24
  accessed: 2026-10-17
- id: S10
  title: 'mHC: Manifold-Constrained Hyper-Connections'
  url: https://arxiv.org/abs/2512.24880
  type: preprint
  grade: B
  published: 2026-01-05
  accessed: 2026-10-17
- id: S11
  title: 'Conditional Memory via Scalable Lookup: A New Axis of Sparsity for Large Language Models'
  url: https://arxiv.org/abs/2601.07372
  type: preprint
  grade: B
  published: 2026-07-12
  accessed: 2026-10-17
- id: S12
  title: Scaling Embeddings Outperforms Scaling Experts in Language Models
  url: https://arxiv.org/abs/2601.21204
  type: preprint
  grade: B
  published: 2026-02-11
  accessed: 2026-10-17
- id: S13
  title: Muon is Scalable for LLM Training
  url: https://arxiv.org/abs/2502.16982
  type: preprint
  grade: B
  published: 2025-02-24
  accessed: 2026-10-17
- id: S14
  title: Small-scale proxies for large-scale Transformer training instabilities
  url: https://arxiv.org/abs/2309.14322
  type: preprint
  grade: B
  published: 2023-10-16
  accessed: 2026-10-17
- id: S15
  title: 'DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models'
  url: https://arxiv.org/abs/2512.02556
  type: preprint
  grade: B
  published: 2025-12-02
  accessed: 2026-10-17
- id: S16
  title: Attention Residuals
  url: https://arxiv.org/abs/2603.15031
  type: preprint
  grade: B
  published: 2026-03-16
  accessed: 2026-10-17
- id: S17
  title: 'Qwen3.8-Flash-Next (Qwen 4 - Preview) vs 3.8 27B - Architecture Teardown (Hugging Face discussion #22)'
  url: https://huggingface.co/Qwen/Qwen3.8-Flash-Next/discussions/22
  type: social
  grade: D
  published: 2026-08-26
  accessed: 2026-10-17
- id: S18
  title: flash-qla release history (PyPI JSON API)
  url: https://pypi.org/pypi/flash-qla/json
  type: code
  grade: B
  published: 2026-07-01
  accessed: 2026-10-17
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 18 (A 1 · B 16 · C 0 · D 1)
> · Claims checked: 47 (verified 43 · caveat 4 · unverified 0 · contradicted 0)
> · Checked 2026-10-17 18:28 MDT by the QA agent

## TL;DR

- Qwen3.8-Flash-Next-Base leads its larger predecessor on 8 of 14 pre-training benchmarks, per the report [S1]. That comparison changes architecture, optimizer, size and training tokens at once, with one evaluation per model, so the result cannot be credited to any single component.[^qa-1]
- The central design choice, the Gated Residual (a widened residual stream read through an elementwise sigmoid gate), has its benchmark ablation only in single, token-matched runs at one mid scale: +3.75 average points over a standard pre-norm residual, but +0.19 over a dynamic hyper-connection variant (our calculation from Table 5) [S1].[^qa-2]
- In stress tests that hold the learning rate at four times its optimum, the AdamW baseline spikes 183 times per 10,000 steps and the Muon-plus-Gated-Residual run not at all [S1]. These are single runs at one size, and the figures label "optimal" inconsistently (our reading).[^qa-3]
- The efficiency evidence is kernel-level: the sparse attention module is 7.6× faster than dense attention in prefill at 1M tokens, on GPUs the report does not name [S1].[^qa-4] The announcement's 8.6× prefill-throughput figure against Qwen3.7-Plus does not appear in the report [S6].[^qa-5]
- Public: post-trained multimodal weights under a custom license with commercial conditions, and MIT-licensed kernels. Not public: the base checkpoint the report evaluates, training code, data and evaluation scripts. We found no independent replication as of 2026-10-17 [S2][S4][S7].[^qa-6]

## Why now

Qwen created the Hugging Face repository for Qwen3.8-Flash-Next on 2026-08-24 (Hub API `createdAt`, read 2026-10-17) [S2]. A technical report dated 2026-08-26 (the date printed in its header and PDF metadata) sits in Qwen's GitHub repository [S5], the announcement followed on 2026-08-27 [S6], and the arXiv version (v1, the only one as of 2026-10-17) was submitted on 2026-08-31 [S1]. Our text diff of the two found no changed table or figure number; v1 adds a benchmark-defining footnote, a sentence on n-gram hashing and citations [S1][S5].[^qa-7]

The model card calls the release an "experimental preview of the architecture that will underpin Qwen4" [S2].[^qa-8] On 2026-10-17 the Hub API page for `Qwen/Qwen3.8-Flash-Next` listed 2,457,201 downloads and 6,306 likes [S2]. Our reading: the report's published loss curves, negative results and stress tests make its evaluation method as interesting as the architecture.

## Background

**Linear-recurrent token mixing.** Gated DeltaNet (GDN) combines a decay gate, which erases memory quickly, with the delta rule, which edits one key-value association at a time. Its authors report gains over Mamba2 and DeltaNet, and further gains from hybrids [S8].[^qa-9]

**Widened residual streams.** Hyper-connections replace the single residual vector with several branches, plus learned read, write and mixing operators [S9]. mHC reports that unconstrained mixing destabilizes training. In a 27B model the composite signal gain across layers peaked near 3,000, and constraining the mixing matrix to doubly stochastic matrices (via Sinkhorn-Knopp) kept it near 1.6 [S10].

**Lookup memory.** Engram treats hashed n-gram embeddings as a second sparsity axis next to mixture-of-experts (MoE). It reports a U-shaped law for splitting parameters between the two, and notes that deterministic addressing allows prefetching from host memory [S11]. A related study reports regimes in which scaling embeddings beats scaling experts [S12].

**Optimization and stability.** Muon orthogonalizes momentum for matrix parameters. Liu et al. report about 2× compute efficiency over AdamW once weight decay and per-parameter update scaling are added [S13]. Wortsman et al. showed that large-scale instabilities reappear in small models at high learning rates [S14]; the stress tests here build on that.

## The core idea

The report's thesis is methodological: "Loss, benchmarks, efficiency and stability form one design problem" [S1].[^qa-10] In our formalization (not the paper's notation), a candidate architecture $a$ with optimizer $o$ and hyperparameters $h$ is accepted when

$$
\begin{aligned}
&\min_{a,o,h}\ \mathcal{E}_{\text{bench}}(a,o,h) \quad \text{subject to} \quad C_{\text{train}},\,C_{\text{prefill}},\,C_{\text{decode}} \le B,\\
&\text{spikes}\big(a,o,\kappa\,\eta^{*}_{a,o}\big) \le \text{spikes}\big(a_0,o_0,\kappa\,\eta^{*}_{a_0,o_0}\big),\quad \kappa \in \{2,4\},
\end{aligned}
$$

where $\eta^{*}$ is the fitted optimal learning rate and $(a_0,o_0)$ is the previous Qwen3.5 structure trained with AdamW. The paper states this last criterion in words [S1]. Loss is only a proxy for $\mathcal{E}_{\text{bench}}$, and the report lists cases where the two disagree [S1].

**Layout.** There are 48 layers in 12 blocks; each block has three GDN layers and one attention layer, and every layer is followed by an MoE with 512 experts, 10 routed plus 1 shared [S2][S3]. GDN keeps a per-head state updated as $S_t=\alpha_t(I-\beta_t k_t k_t^{\top})S_{t-1}+\beta_t k_t v_t^{\top}$. Qwen's variant swaps the original SiLU output gate for a sigmoid [S1].

**Qwen Sparse Attention (QSA).** During continued pre-training at 256K tokens, the attention layers are replaced by QSA [S1]. Its indexer average-pools keys into blocks of $r=4$ tokens, normalizes them, and gives each block one rotary position. It then scores block $b$ for query $i$ as $I_{ib}=\sum_h \mathrm{ReLU}(\langle q_{ih},\bar k_b\rangle)$ and keeps the top $\lceil K/r\rceil = 512$ complete blocks for a budget of $K=2048$ tokens, plus the trailing partial block [S1]. Indexer cost therefore falls from $O(n^2)$ to $O(n^2/r)$. DeepSeek Sparse Attention, by contrast, scores individual tokens and keeps an $O(L^2)$ indexer [S15]. The indexer is first distilled from dense attention with a KL loss for 1,000 steps (about 2B tokens), then trained jointly with the backbone for 8,000 steps (about 200B tokens) [S1].

**Gated Residual (GR).** The stream holds $n_r=4$ branches $R_i$. A block reads

$$
x=\frac{1}{n_r}\sum_{i=1}^{n_r} G_i\odot \hat R_i,\qquad \hat R_i=\mathrm{RMSNorm}(R_i;\gamma_i),\qquad G=\mathrm{unvec}\,\sigma\!\Big(W_u\,\mathrm{SiLU}\big(\tfrac{1}{n_r}W_d\,\mathrm{vec}(\hat R)\big)\Big),
$$

and writes $R_i' = R_i + s_i\,y$ with $s = 2\sigma(\tfrac{1}{n_r}W_w\,\mathrm{vec}(\hat R))$, using bottleneck rank $d/8$ [S1]. The released config's low-rank width of 320 equals $2560/8$, which matches (our check) [S3].[^qa-11] GR differs from mHC in two ways. The read gate is elementwise and data-dependent. The $n_r\times n_r$ branch-mixing matrix is dropped, which saves a full read of the residual state per block and removes the matrix that mHC needs a manifold constraint to stabilize [S1][S10].[^qa-12] The authors' explanation for the stability gain is that high learning rates require some rescaling mechanism. Without a gate, the network gets it by growing activation outliers, and the multiplicative gate supplies it directly [S1].

**N-gram embedding.** A single layer at depth 2 adds hashed bigram and trigram embeddings: 20,000,000 slots of width 2,560, with eight heads per n-gram in the config (the report describes multi-head hashing) [S1][S2][S3]. Our calculation: $2\times10^7\times2560 = 5.12\times10^{10}$, which matches the stated 51B. Placing the layer at depth 2 lets the host-memory prefetch overlap with layer 1 [S1].

**Optimizer partition.** Muon (8 Newton-Schulz steps) runs on linear-map matrices, with fused matrices such as qkv split per head before orthogonalization. Embeddings, output head, router, GR's low-rank projections and output gates stay on AdamW; the n-gram table uses Adam without weight decay [S1].

## Evidence

Every comparison below is one training run per configuration unless stated. The report never mentions random seeds (here, a seed means the initialization and data-order draw), and Table 10 says each run was evaluated once [S1].[^qa-13]

> [!WARNING]
> **QA · Unreplicated.** Every ablation and stress-test number in this section comes from the authors' own single runs. As of 2026-10-17 [S1] has only one arXiv version (v1), and QA's own searches found no independent reproduction or rebuttal. Small gaps, such as GR against dynamic mHC, can't be separated from run-to-run noise.

**Token mixing (Table 1).** Three 28-layer 25B-A3B (3B-active) models saw the same 400B + 80B tokens and evaluation pipeline. The nine-benchmark average is 49.87 for full attention, 51.15 for a sliding-window hybrid and 53.81 for the GDN hybrid [S1]. These runs match tokens, not FLOPs. The authors say the table motivates the hybrid without isolating causes [S1].

**Residual (Table 5).** At 25B-A3B on 560B tokens, average accuracy is 50.91 (pre-norm), 52.49 (static mHC), 54.47 (dynamic mHC) and 54.66 (GR); loss is 1.617, 1.596, 1.594 and 1.590 [S1]. Our calculation: GR leads dynamic mHC by 0.19 points and 0.004 in loss, a gap a single run cannot separate from noise (our reading). The report itself calls the two comparable [S1]. More distinctive, in our reading, is a loss–accuracy mismatch: static-to-dynamic operators cut loss by only 0.002 but add 1.98 points [S1].[^qa-14]

**Sparse attention (Tables 2–4).** After the same continued pre-training, QSA averages 76.8 against 75.9 for full attention on eight short-context benchmarks [S1]. On 8-needle MRCR it scores 40.53 against 30.66 at 512K, and 26.44 against 20.71 at 1M [S1]. At 35B-A3B, QSA matches the dense baseline on RULER at a relative indexer latency of 0.25. Cross-layer index sharing (IndexShare) stays below the baseline even at 0.5 [S1].

**N-gram tables (Tables 7–9).** With the n-gram table added on top of the base model, loss falls steadily from 1.585 (none) to 1.526 (200× the base vocabulary), but benchmarks saturate or fluctuate [S1]. When total parameters are held fixed by removing experts, loss is lowest at 10× and downstream benchmarks show no clear gain over the MoE-only baseline [S1]. The production table of 20M slots is about 80× the 248,320-token vocabulary (our calculation from [S3]); the report does not state that ratio.

**Hyperparameters (Figures 8–9, Table 10).** On a 10.8B-A0.89B model over 4T tokens, the newly fitted batch size of 25.2M gives a final loss of 1.5702, against 1.5774 for the previous recipe's 12.6M [S1]. Ramping up the batch size ends 2.5–3.5 × 10⁻⁴ worse and takes 18.8% more optimizer steps. The report says this is within run-to-run variance but gives no number for that variance [S1]. On a 156B-A7B model over 419B tokens, the predicted optimum averages 60.55 against 56.41 for the Qwen3.5 recipe [S1].

**Stress tests (Figures 10–12).** A 28-layer 25B-A3B model was trained at a constant learning rate, with clip threshold 0.5. A spike is a step more than 0.1 above its 201-step rolling median [S1]. At 2× the optimum, AdamW spikes 4.3 times per 10,000 steps and both Muon runs 0.2 times. At 4×, AdamW spikes 183 times per 10,000 steps and crosses the clip threshold on 213 of 19,932 steps; neither Muon run crosses it, and the GR run records zero spikes [S1]. In the one single-variable test of the gate (AdamW, 3× optimum), GatedNorm cuts spikes from 32.0 to 3.2 per 10,000 steps [S1].[^qa-15]

**Production run (Figure 13) and headline (Table 11).** Over the first 276B tokens at the shipped learning rate, GR lowers loss by 0.026 relative to Qwen3.5-with-Muon. The full recipe lowers it by a further 0.032 [S1]. The base model beats Qwen3.8-27B-Base on all 14 benchmarks and leads Qwen3.7-Plus-Base (397B, 17B active) on 8 [S1]. Its largest deficit is MultiPL-E, 79.09 against 81.68 [S1]. One of its leads is SWEBench-Pretrain, which the arXiv footnote defines as sequence similarity between generated and reference patches, not test execution [S1].[^qa-16]

## Critical assessment

**The headline is not a controlled comparison.** Table 11 differs from its baseline in architecture, optimizer, hyperparameters, size and token count. Neither model's absolute training token count or data appears anywhere in v1 (full-text search, 2026-10-17) [S1]. The 1/9 FLOPs figure therefore cannot be checked. Our calculation from the stated ratios is $(6/17)\times(1/3)\approx 0.118$, about 1/8.5. Some leads are small for single evaluations: GSM8K by 0.34, MMMLU by 0.33 (our calculation) [S1].[^qa-17]

**Selection on the reported suite.** The nine benchmarks used to select components (§2.1.1) reappear in Table 11, and the report names no held-out set [S1]. Comparing the lists (our reading), the model leads on 6 of those 9 and on 2 of the 5 benchmarks not used in ablations. With five items this is weak evidence, but it is the direction one would expect if selection inflated the overlap (our reading).

**Who gets credit for stability.** At 4×, the clip-crossing result is shared by Muon alone, and the report gives no spike count for Muon without GR at that rate [S1]. The gate's isolated effect is shown under AdamW, not under the shipped Muon recipe [S1]. The labels are also inconsistent (our reading). Figure 10 marks a constant 4 × 10⁻³ as 2× optimal for the 28-layer model, while Figure 12c marks the same value as 1× optimal for what the text calls the 28-layer model. The text does not say whether batch size or other settings differ [S1]. The production check is called 8× the stress-test scale, without the runs' sizes. The claim of a spike-free full run is backed only by Figure 13, the one production-run figure in v1, which covers the first 276B tokens [S1].[^qa-18]

**Efficiency is kernel-level and hardware-unnamed.** The 7.6× prefill and 4.9× decode speedups at 1M compare attention kernels against FlashInfer's paged attention, with prefill in 16K chunks at batch size 1 and decode at batch size 4 [S1]. No GPU model is named in v1, and there is no end-to-end serving latency [S1]. FlashQLA names H200 and GB200 only in benchmark file names [S7]. We found no table or figure in v1 that measures n-gram prefetch latency or host-memory bandwidth, despite the "negligible" latency claim [S1]. The announcement's 8.6× prefill throughput against Qwen3.7-Plus, at a 90% prefix-cache hit rate, is absent from the report and names no hardware [S6][S1].[^qa-19]

**Long context and post-training are thinly documented.** Continued pre-training used 256K sequences and the model card gives a native context of 262,144, extendable to 1M with YaRN [S1][S2]. The report evaluates RULER and MRCR at 1M without mentioning YaRN or any RoPE scaling (full-text search) [S1]. QSA's lead over dense attention at 512K–1M is unexplained; one speculative possibility is that selection limits attention dilution beyond the training length. The Organization paragraph promises results for the post-trained model, but §4 reports only base models [S1]. The rejected sparse-write and NoPE (no positional encoding) variants were judged on post-training behaviour that is described but not quantified [S1].

**Internal inconsistencies.** The introduction cites the Qwen3.5 announcement for the 397B-A17B predecessor, but Table 11 names it Qwen3.7-Plus-Base [S1]. The report never mentions the vision encoder or the 4B multi-token-prediction parameters that the released card lists [S2].[^qa-20]

> [!NOTE]
> **QA · Context.** The announcement [S6] also names Qwen3.7-Plus as the comparison for its "about 1/9" training-cost claim. That matches Table 11, not the introduction's citation of the Qwen3.5 announcement.

**Reproducibility.** Public: post-trained weights (131 BF16 shards; a separate FP8 repository is listed under Qwen's Hub account) and config [S2][S3], and the FlashQLA kernels under MIT [S7]. The weights use the Qwen Community License 1.0. Licensees whose products exceed 100M monthly users or US$20M monthly revenue must display the model name, and model-as-a-service or coding/office-assistant businesses need a separate license for commercial use, internal use excepted [S4]. Not public: the base checkpoint in Table 11 (none in a Hub API search of Qwen's models for "Qwen3.8", 2026-10-17), and training code, data and evaluation scripts, none of which the GitHub README mentions [S2][S5]. Replication search (two web searches and the Hub discussions, 2026-10-17) found none. A community teardown claims, from config arithmetic rather than runs, a large cut in per-token memory traffic at 262K context against Qwen3.8-27B [S17].[^qa-21]

> [!TIP]
> **QA · Reproducible (partly).** Weights: [S2] (BF16), plus a Qwen/Qwen3.8-Flash-Next-FP8 repository on the Hub. Architecture settings: [S3]. The GDN kernels and their benchmark scripts are in [S7] (MIT, installable from PyPI as `flash-qla` [S18]). No base checkpoint, training code, data or evaluation harness is public, so none of the tables in [S1] can be rerun.

## Connections

Like hyper-connections [S9] and mHC [S10], GR widens the stream, but spends the capacity on the read. In our reading, the report's comparison with Attention Residuals is its most informative alternative test [S16]. In Table 6, Full AttnRes with GatedNorm reaches loss 1.758, below GR's 1.762 (our reading of the table; the text calls them level) [S1]. Our reading is that GR's case rests on cost: it carries no attention over every earlier sublayer output.

Our reading: Engram's U-shaped allocation law [S11] and Table 8's finding of no downstream gain at fixed parameters are consistent only if the n-gram case is about accelerator memory and FLOPs rather than total parameters. Our earlier post on [DeepSeek-V4.1-Flash](../published/2026-10-17-deepseek-v4-1-flash-kv-cache-compression.md) covered a 196B Engram table with the same unanswered question. Our [looped MoE post](../published/2026-10-15-looped-moe-compute-matched-scaling.md) shows the matched-FLOPs comparison Table 11 lacks.

## Open questions

- Does GR's stability margin persist under Muon in a single-variable test, with several seeds?
- What token counts lie behind the 1/9 claim, and what would a matched-token comparison show?
- How long does the n-gram prefetch take on named hardware, and when does it stop overlapping with layer 1?
- How was 1M context reached in evaluation, and does QSA's lead over dense attention survive YaRN?
- Will Qwen release the base checkpoint?

## Sources

S1. [On the Design of Qwen3.8-Next Architecture: Evaluation, Efficiency, and Training Stability](https://arxiv.org/abs/2608.30320) · preprint · B · published 2026-08-31 · accessed 2026-10-17
S2. [Qwen/Qwen3.8-Flash-Next (Hugging Face model card and repository)](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) · code · B · published 2026-08-24 · accessed 2026-10-17
S3. [Qwen3.8-Flash-Next config.json](https://huggingface.co/Qwen/Qwen3.8-Flash-Next/blob/main/config.json) · code · B · published 2026-08-24 · accessed 2026-10-17
S4. [Qwen3.8-Flash-Next LICENSE (Qwen Community License 1.0)](https://huggingface.co/Qwen/Qwen3.8-Flash-Next/blob/main/LICENSE) · code · B · published 2026-08-24 · accessed 2026-10-17
S5. [QwenLM/Qwen3.8-Flash-Next GitHub repository (README and tech_report.pdf)](https://github.com/QwenLM/Qwen3.8-Flash-Next) · technical-report · B · published 2026-08-26 · accessed 2026-10-17
S6. [Qwen3.8-Flash-Next: A New Architecture, Towards Ultimate Cost-Efficiency (Alibaba Cloud Community)](https://www.alibabacloud.com/blog/qwen3-8-flash-next-a-new-architecture-towardsultimate-cost-efficiency_603501) · lab-post · B · published 2026-08-27 · accessed 2026-10-17
S7. [QwenLM/FlashQLA: TileLang linear-attention kernels](https://github.com/QwenLM/FlashQLA) · code · B · published 2026-07-01 · accessed 2026-10-17
S8. [Gated Delta Networks: Improving Mamba2 with Delta Rule](https://arxiv.org/abs/2412.06464) · preprint · B · published 2025-03-06 · accessed 2026-10-17
S9. [Hyper-Connections](https://proceedings.iclr.cc/paper_files/paper/2025/hash/f1e8ff97057e0c3f6bcb7018c78d4df1-Abstract-Conference.html) · peer-reviewed · A · published 2025-04-24 · accessed 2026-10-17
S10. [mHC: Manifold-Constrained Hyper-Connections](https://arxiv.org/abs/2512.24880) · preprint · B · published 2026-01-05 · accessed 2026-10-17
S11. [Conditional Memory via Scalable Lookup: A New Axis of Sparsity for Large Language Models](https://arxiv.org/abs/2601.07372) · preprint · B · published 2026-07-12 · accessed 2026-10-17
S12. [Scaling Embeddings Outperforms Scaling Experts in Language Models](https://arxiv.org/abs/2601.21204) · preprint · B · published 2026-02-11 · accessed 2026-10-17
S13. [Muon is Scalable for LLM Training](https://arxiv.org/abs/2502.16982) · preprint · B · published 2025-02-24 · accessed 2026-10-17
S14. [Small-scale proxies for large-scale Transformer training instabilities](https://arxiv.org/abs/2309.14322) · preprint · B · published 2023-10-16 · accessed 2026-10-17
S15. [DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models](https://arxiv.org/abs/2512.02556) · preprint · B · published 2025-12-02 · accessed 2026-10-17
S16. [Attention Residuals](https://arxiv.org/abs/2603.15031) · preprint · B · published 2026-03-16 · accessed 2026-10-17
S17. [Qwen3.8-Flash-Next (Qwen 4 - Preview) vs 3.8 27B - Architecture Teardown (Hugging Face discussion #22)](https://huggingface.co/Qwen/Qwen3.8-Flash-Next/discussions/22) · social · D · published 2026-08-26 · accessed 2026-10-17
S18. [flash-qla release history (PyPI JSON API)](https://pypi.org/pypi/flash-qla/json) · code · B · published 2026-07-01 · accessed 2026-10-17 · added by QA

> [!CAUTION]
> **QA · Corrected.** The S7 entry originally read "published 2026-08-31", a date inferred from the anchor report. The FlashQLA README [S7] dates its v0.1.1 release to June 2026, and the PyPI release history [S18] shows `flash-qla` 0.1.1 uploaded on 2026-07-01, so the repository already existed before the report. QA changed the date to 2026-07-01, the earliest exact release date it could confirm. The repository may be older still. No claim in the post depends on this date.

## QA notes

[^qa-1]: **Supported with caveat** — Table 11 of [S1]: the base model leads Qwen3.7-Plus-Base on MMLU-Pro, SuperGPQA, BBH, GSM8K, EvalPlus, SWEBench-Pretrain, MGSM and MMMLU (8 of 14). The abstract and §4 give the ratios of about 1/3 the activated parameters, 1/3 the tokens and 1/9 the FLOPs. Table 11 shows one score per model with no variance, but the report doesn't say how many evaluation runs are behind each score. Its explicit "single evaluation per run" statement concerns the Table 10 runs.
[^qa-2]: **Verified** — Table 5 of [S1] (25B-A3B, 560B tokens): average 54.66 for GR, 54.47 for dynamic mHC and 50.91 for pre-norm. QA recomputed the gaps of 3.75 and 0.19. Benchmarks are reported at this one scale only, and no seeds or repeats are given. Table 6 adds loss-only GR comparisons at 28 and 48 layers.
[^qa-3]: **Verified** — §3.3 of [S1]: at 4× the optimal rate the AdamW run spikes 183 times per 10k steps, and the GR configuration "records zero loss spikes". On the labels: Fig. 10a labels a constant 4×10⁻³ as 2× optimal. Fig. 12 labels 1.2×10⁻² as 3× optimal, which implies an optimum of 4×10⁻³, and its caption treats the 4×10⁻³ run as 1× optimal. The text describes both experiments as the 28-layer model.
[^qa-4]: **Verified** — §2.1.2 and Fig. 6 of [S1]: 7.6× in prefill and 4.9× in decode at 1M, measured at the kernel level against FlashInfer's paged GQA. A full-text search of v1 finds no GPU model name. The report says only "NVIDIA GPUs", in the FlashQLA paragraph.
[^qa-5]: **Verified** — [S6] gives 8.6× the prefill throughput of Qwen3.7-Plus at a 1M-token context and a 90% prefix-cache hit rate, and names no hardware. The figure 8.6 does not occur anywhere in [S1] (full-text search).
[^qa-6]: **Verified** — [S2]: 131 safetensors shards and pipeline tag image-text-to-text, with a vision configuration in [S3]. [S4] is the Qwen Community License 1.0 with the commercial conditions described under Reproducibility, and the [S7] README and LICENSE give MIT. A Hub search of Qwen's models for "Qwen3.8" (2026-10-17) lists Qwen3.8-27B, Qwen3.8-2.4T-A95B, Qwen3.8-Flash-Next and their FP8 versions, with no base checkpoint. QA's own web searches the same day found no independent replication.
[^qa-7]: **Supported with caveat** — QA downloaded tech_report.pdf from [S5] (header and PDF metadata dated 2026-08-26) and compared it with arXiv v1 of [S1]. Table and figure labels match, and the decimal numbers in the two texts are identical apart from one added arXiv citation ID. v1 adds the SWEBench-Pretrain footnote and two sentences in §2.3, not one: one on multi-head hashing and one on injecting the embeddings through contextual gating.
[^qa-8]: **Verified** — the quoted phrase appears verbatim in the [S2] model card. The Hub API returned the same download and like counts when QA queried it on 2026-10-17.
[^qa-9]: **Verified** — abstract of [S8]. The arXiv comment marks the cited v3 as the "ICLR 2025 camera ready". The ICLR proceedings version is the canonical citation and would be grade A.
[^qa-10]: **Verified** — the quoted sentence appears verbatim in the abstract of [S1]. The introduction uses the same words followed by a further clause.
[^qa-11]: **Verified** — Eqs. (30)–(34) of [S1] give this read and write, with bottleneck rank r = d/8. [S3] has `hidden_size` 2560, `hc_count` 4 and `hc_lowrank` 320.
[^qa-12]: **Supported with caveat** — [S1] says GR and dynamic mHC "differ mainly in the elementwise Hmix and the removal of Hres". Data dependence is not a difference from the dynamic mHC variant in Table 5, whose read and write are also predicted from the residual state. The real difference in the read is that GR gates per channel, where mHC uses one scalar per branch. The memory-traffic and stability reasons for dropping the mixing matrix are as [S1] states them, and [S10] confirms that mHC constrains that matrix to doubly stochastic matrices.
[^qa-13]: **Verified** — a full-text search of v1 of [S1] finds "seed" only in a citation (Seed, 2025). The "single evaluation per run" statement is in the paragraph that discusses Table 10, not in the table itself.
[^qa-14]: **Verified** — Table 5 and the "Data dependence" bullet of [S1]. QA recomputed the gaps. The report says GR and dynamic mHC "perform comparably" at this scale.
[^qa-15]: **Verified** — §3.3 and Figs. 10–12 of [S1]: clip threshold 0.5; a spike is a step more than 0.1 above a 201-step rolling median. At 2×: 4.3 against 0.2 spikes per 10k steps. At 4×: 183 per 10k steps for AdamW and 213 of 19,932 steps over the clip threshold. Under AdamW at 3×, GatedNorm cuts spikes from 32.0 to 3.2 per 10k steps.
[^qa-16]: **Verified** — §3.3 of [S1] (0.026 and 0.032 at 276B tokens), §4, Table 11 and the SWEBench-Pretrain footnote. QA checked all 14 rows of Table 11: the base model beats Qwen3.8-27B-Base on every one, and MultiPL-E (79.09 against 81.68, a 2.59-point gap) is its largest deficit against Qwen3.7-Plus-Base.
[^qa-17]: **Verified** — a full-text search of v1 of [S1] finds no total training-token count for any model in Table 11. The only trillion-token figure is the 4T-token batch-size experiment. QA recomputed (6/17)×(1/3) ≈ 0.118 and the GSM8K (+0.34) and MMMLU (+0.33) margins from Table 11.
[^qa-18]: **Verified** — §3.3 and Figs. 10, 12 and 13 of [S1]. At 4× the text gives spike counts only for AdamW (183 per 10k steps) and the GR run (zero). The gate-only pair in Fig. 12 uses AdamW. The production comparison says "8× the model scale" without giving sizes, and Fig. 13 covers the first 276B tokens. The two "optimal" labels are discussed in QA note 3 above.
[^qa-19]: **Verified** — Fig. 6 caption and §2.1.2 of [S1]: 16K-token prefill chunk at batch size 1, decode at batch size 4 with next_n = 4, and a FlashInfer paged-GQA baseline. v1 gives no GPU model, no end-to-end latency, and no figure or table on n-gram prefetch latency, while §1 calls the added latency "negligible". [S7] names H200 and GB200 only in benchmark result file names; elsewhere its README names the Hopper and Blackwell architectures.
[^qa-20]: **Supported with caveat** — [S1] cites "Qwen Team, 2026" (the Qwen3.5 announcement) for the 397B-A17B flagship and names Qwen3.7-Plus-Base in Table 11. The word "vision" occurs in [S1] only in reference titles. The report does describe an MTP module (QSA inside MTP, Table 4). What it leaves out is the 4B MTP parameter count that [S2] lists.
[^qa-21]: **Verified** — [S2] Hub file list (131 safetensors shards) and the Qwen/Qwen3.8-Flash-Next-FP8 repository under Qwen's account. [S4] clauses 1 and 2: 100,000,000 monthly active users or US$20,000,000 monthly revenue; Model-as-a-Service or AI Work Assistant businesses; internal-use exception. The [S5] README mentions no training code, data or evaluation scripts and points to the blog for evaluation results. The [S7] LICENSE is MIT. The [S17] post claims a fall in bf16 traffic from 66.4 GiB to 11.5 GiB per decoded token at 262K context, derived from config files, not measured.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
