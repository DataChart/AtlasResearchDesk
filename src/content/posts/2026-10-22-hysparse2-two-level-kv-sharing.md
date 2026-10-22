---
title: 'HySparse2''s two-level KV sharing: where Xiaomi''s prefill and cache savings come from, and what the ablations attribute'
slug: 2026-10-22-hysparse2-two-level-kv-sharing
dek: Xiaomi's HySparse2 builds an 80B-A3B model's prefill cache with half its layers and reports long-context retrieval gains, but the headline comparison also switches attention-head layout, which no ablation isolates.
date: 2026-10-22 09:16:00-06:00
type: research
status: published
cycle: 11
tags:
- architectures
- long-context
- kv-cache
- mixture-of-experts
reading_time_min: 13
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-10-22 09:26:34-06:00
  sources_by_grade:
    A: 4
    B: 9
    C: 1
    D: 0
  claims:
    verified: 48
    caveat: 7
    unverified: 0
    contradicted: 0
    outdated: 0
  flags:
    note: 0
    important: 0
    warning: 1
    caution: 0
    tip: 1
sources:
- id: S1
  title: 'HySparse2: Hybrid Sparse Attention with Two-Level KV Sharing'
  url: https://arxiv.org/abs/2609.26368
  type: preprint
  grade: B
  published: 2026-09-22
  accessed: 2026-10-22
- id: S2
  title: 'HySparse: A Hybrid Sparse Attention Architecture with Oracle Token Selection and KV Cache Sharing'
  url: https://arxiv.org/abs/2602.03560
  type: preprint
  grade: B
  published: 2026-02-03
  accessed: 2026-10-22
- id: S3
  title: 'You Only Cache Once: Decoder-Decoder Architectures for Language Models (NeurIPS 2024)'
  url: https://proceedings.neurips.cc/paper_files/paper/2024/hash/0df38cd13520747e1e64e5b123a78ef8-Abstract-Conference.html
  type: peer-reviewed
  grade: A
  published: 2024-12-10
  accessed: 2026-10-22
- id: S4
  title: MiMo-V2-Flash Technical Report (arXiv v2)
  url: https://arxiv.org/abs/2601.02780
  type: technical-report
  grade: B
  published: 2026-01-08
  accessed: 2026-10-22
- id: S5
  title: 'Hidden Decoding at Scale: Latent Computation Scaling for Large Language Models'
  url: https://arxiv.org/abs/2607.08186
  type: preprint
  grade: B
  published: 2026-07-09
  accessed: 2026-10-22
- id: S6
  title: Reducing Transformer Key-Value Cache Size with Cross-Layer Attention (NeurIPS 2024)
  url: https://proceedings.neurips.cc/paper_files/paper/2024/hash/9e23d020c18e4c40d81c6a0fc7a46f68-Abstract-Conference.html
  type: peer-reviewed
  grade: A
  published: 2024-12-10
  accessed: 2026-10-22
- id: S7
  title: 'GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints (EMNLP 2023)'
  url: https://aclanthology.org/2023.emnlp-main.298/
  type: peer-reviewed
  grade: A
  published: 2023-12-01
  accessed: 2026-10-22
- id: S8
  title: 'Fast Transformer Decoding: One Write-Head is All You Need'
  url: https://arxiv.org/abs/1911.02150
  type: preprint
  grade: B
  published: 2019-11-06
  accessed: 2026-10-22
- id: S9
  title: 'DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models'
  url: https://arxiv.org/abs/2512.02556
  type: technical-report
  grade: B
  published: 2025-12-02
  accessed: 2026-10-22
- id: S10
  title: 'Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention (ACL 2025)'
  url: https://aclanthology.org/2025.acl-long.1126/
  type: peer-reviewed
  grade: A
  published: 2025-07-01
  accessed: 2026-10-22
- id: S11
  title: What is Wrong with Perplexity for Long-context Language Modeling? (arXiv v5)
  url: https://arxiv.org/abs/2410.23771
  type: preprint
  grade: B
  published: 2025-07-27
  accessed: 2026-10-22
- id: S12
  title: 'Introducing Gemma 3n: The developer guide'
  url: https://developers.googleblog.com/en/introducing-gemma-3n-developer-guide/
  type: lab-post
  grade: B
  published: 2025-06-26
  accessed: 2026-10-22
- id: S13
  title: Xiaomi HySparse2 coverage (36Kr, English edition)
  url: https://eu.36kr.com/en/p/3996783462780800
  type: news
  grade: C
  published: 2026-09-24
  accessed: 2026-10-22
- id: S14
  title: XiaomiMiMo organization on Hugging Face (model, dataset and Space listing)
  url: https://huggingface.co/XiaomiMiMo
  type: code
  grade: B
  published: 2026-10-09
  accessed: 2026-10-22
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 14 (A 4 · B 9 · C 1 · D 0)
> · Claims checked: 55 (verified 48 · caveat 7 · unverified 0 · contradicted 0)
> · Checked 2026-10-22 09:26 MDT by the QA agent

## TL;DR

- HySparse2, from Xiaomi's LLM-Core team (arXiv v1, 2026-09-22), routes all cross-decoder key-value (KV) caches through self-decoder hidden states, so prefill runs only the first 25 of 49 layers [S1].[^qa-1]
- The central design choice is two-level KV sharing. It is ablated only in pretraining runs that share a backbone; the paper reports no compute or parameter matching, and its bridging ablation, at a larger separate scale, scores lower on 5 of 8 rows [S1].[^qa-2]
- After a light post-training stage, the authors report mean RULER-v2 19.81 points above HySparse; this is author-reported, with no repeats reported [S1].[^qa-3]
- Our calculation from the paper's own head configurations reproduces its KV-cache sizes, and attributes the drop from 6.72 GB to 2.69 GB to the switch to multi-query attention, not to KV sharing [S1].[^qa-4]
- No code, weights or evaluation data are public as of 2026-10-22; efficiency is reported only as FLOPs and bytes, with no wall-clock measurement [S1] [S14].[^qa-5]

## Why now

Xiaomi posted HySparse2 to arXiv on 2026-09-22; it is the only version as of 2026-10-22 [S1]. It follows HySparse (2026-02-03), from largely the same authors [S2]. 36Kr reported on 2026-09-24 that Xiaomi presents it as a component of a forthcoming MiMo-V3 model, naming no code or weights release [S13].[^qa-6] The figures in that coverage (2.69, 6.72 and 12.09 GB of KV cache; 58.45, 32.61 and 35.74 on RULER-v2 at 256k) match the paper [S13] [S1].

It is a controlled architecture comparison at scale: three 80-billion-parameter mixture-of-experts (MoE) models with 3 billion active parameters per token ("80B-A3B"), trained on the same data and schedule [S1].[^qa-7]

## Background

**Hybrid attention.** Interleaving sliding-window attention (SWA) layers with a few full-attention layers keeps most layers' KV cache constant in context length. Xiaomi's MiMo-V2-Flash, a 309B-total, 15B-active open-weights model, uses a 128-token window at a 5:1 hybrid ratio [S4]. The HySparse2 paper calls this baseline "Hybrid SWA" [S1].[^qa-8]

**HySparse.** HySparse replaces the SWA layers with sparse-attention layers that take their token selection and their KV cache from the preceding full-attention layer, which acts as an oracle selector; no separate learned indexer is trained [S2]. In its 80B MoE model, 5 of 49 layers use full attention, with top-1,024 tokens selected in 64-token blocks plus a 128-token window [S2].

**Cross-layer cache sharing.** You Only Cache Once (YOCO) splits a decoder into a self-decoder that produces global KV caches and a cross-decoder that reuses them through cross-attention, so prefill can exit early [S3].

**Head sharing within a layer.** Multi-query attention (MQA) uses one key-value head for all query heads [S8]; grouped-query attention (GQA) uses an intermediate number of key-value heads and is reported to recover quality close to multi-head attention [S7].

## The core idea

**Problem.** An agent loop alternates short generated actions with long tool observations. With context length $n$, each turn must prefill the new observation through the network before decoding resumes, and must hold a KV cache for later retrieval [S1]. The design goal is to minimize prefill FLOPs per token $C_{\text{pre}}(n)$ and decode-time KV memory

$$M(n) = n \, b \sum_{\ell \in \mathcal{F}} h^{\text{kv}}_{\ell}\,\bigl(d^{k}_{\ell} + d^{v}_{\ell}\bigr),$$

where $\mathcal{F}$ is the set of layers that keep a full-length cache, $h^{\text{kv}}$ the number of key-value heads, $d^k, d^v$ the key and value head dimensions and $b$ bytes per element, while keeping long-context retrieval close to a full-attention model. (Our notation; the paper states the goal in words [S1].)

**Outer level: KV Bridging.** The 49-layer model is split into a self-decoder (the first 25 layers), which interleaves SWA with full attention, and a cross-decoder (the remaining 24), which interleaves full attention with sparse attention [S1]. For a self-decoder full-attention layer $i$ paired with a cross-decoder full-attention layer $j$:

$$K^{\text{cross}}_j = \mathrm{Proj}^{K}_j\!\left(H^{\text{self}}_i\right),\quad V^{\text{cross}}_j = \mathrm{Proj}^{V}_j\!\left(H^{\text{self}}_i\right),\quad Q^{\text{cross}}_j = \mathrm{Proj}^{Q}_j\!\left(H^{\text{cross}}_j\right).$$

Each cross-decoder full-attention layer keeps its own key and value projections, so the caches are distinct; one self-decoder source can feed several cross-decoder layers [S1]. In the diagrammed model, the self-decoder contains one full-attention layer and the cross-decoder four, each followed by five sparse layers [S1].[^qa-9] Unlike YOCO, whose cross-decoder reuses the self-decoder's caches [S3], bridging shares a hidden-state source and re-projects it per layer.

**Inner level: KV Reuse, refined.** Within each cross-decoder block, the full-attention layer computes exact attention scores, selects tokens, and the following sparse layers attend only to the selected entries of that layer's cache [S1]. HySparse2 changes two things. First, selection is per token rather than per 64-token block. Second, the separate SWA branch inside sparse layers is removed; instead, the most recent $w = 128$ tokens are always selected, then the top $k = 1{,}024$ scoring tokens outside the window [S1].[^qa-10] In our notation, the index set at query position $t$ is

$$\mathcal{I}_t = \{t-w+1,\dots,t\} \;\cup\; \operatorname{TopK}_{k}\bigl(\{s_{t,u} : u \le t-w\}\bigr).$$

**Why the forced window matters for prefill.** A separate SWA branch in a cross-decoder layer would need keys and values computed from that layer's own input, which depends on earlier layers' outputs over an expanding suffix; the required suffix grows with depth, so prefill could not skip the cross-decoder, or would have to approximate those states [S1]. Reading the local window from the bridged full-attention cache removes that dependency: every cross-decoder cache is a function of self-decoder hidden states alone, and prefill ends after layer 25 [S1]. With prefill and decode on separate nodes, the prefill node hosts roughly half the weights [S1].[^qa-11]

## Evidence

**Setup.** All headline models have 49 layers and hidden size 2,048 [S1]. Pretraining uses about 500B tokens at 32k context; a light post-training stage adds about 100B tokens, introduces agentic data and extends context to 256k; the three models share data and schedule within each stage, trained with the Muon optimizer [S1]. They also differ in more than attention routing (Table 1): Hybrid SWA keeps 9 full-attention layers and HySparse and HySparse2 keep 5; the baselines use GQA with 64 query and 4 KV heads and 192/128 key/value dimensions, while HySparse2 uses MQA with 1 KV head and 256/256 dimensions [S1].[^qa-12] HySparse2 also uses no positional encoding in full and sparse layers and partial rotary embeddings in SWA layers; the paper does not state the baselines' positional scheme [S1]. The authors give Hybrid SWA more full-attention layers because fewer degraded accuracy [S1]; in our reading, that avoids the sharp RULER degradation HySparse's own paper reported for Hybrid SWA at a 1:11 ratio [S2].

No repeats, seeds, error bars or confidence intervals are reported in the paper; we searched its full text, which has no appendix, on 2026-10-22 [S1].[^qa-13]

**Pretraining (Table 2).** HySparse2 has the highest RULER (90.77) and NoLiMa (49.76) scores, 5.88 and 9.49 points above HySparse [S1]. On the other 15 rows (all but RULER, NoLiMa and Repo Code PPL), by our count, HySparse2 beats HySparse on 4 (C-Eval, BBH, MMLU-Pro, HellaSwag), ties on 1 (MBPP+) and trails on 10, including DROP by 4.79 points (our calculation: 63.78 − 58.99) [S1].[^qa-14] In our reading, the authors' description of general capability as broadly comparable holds on average, but contrary rows outnumber favourable ones.

**After post-training (Figure 3).** Relative to HySparse, mean MRCR-v2 rises 11.30 points and mean RULER-v2 19.81 points; relative to Hybrid SWA, 6.44 and 18.65 points [S1].[^qa-15] Means weight context lengths equally, and the text gives only differences [S1]. At 256k, RULER-v2 is 58.45 for HySparse2, 32.61 for HySparse and 35.74 for Hybrid SWA [S1].[^qa-16] HySparse2 also has lower AgentPPL and LongPPL at every plotted length [S1]. Units: AgentPPL is internal byte perplexity over 1,000 agent trajectories; LongPPL uses 349 examples; RULER-v2 has 12 subtasks; MRCR-v2 uses two, four or eight needles, item counts not reported [S1]. LongPPL scores only key tokens, which an evaluator model chooses by contrasting long- and short-context predictions [S11]; the HySparse2 paper does not name the evaluator it used [S1].[^qa-17] No agent benchmark with task success is reported; the agentic results are perplexity on trajectories plus retrieval benchmarks [S1].

> [!WARNING]
> **QA · Unreplicated.** Every post-training number in this section comes from one training run per
> architecture, scored partly on an internal benchmark (AgentPPL) whose data are not released [S1].
> No outside group had reproduced any of them as of 2026-10-22, and none of the paper's ablations covers
> the post-training stage, so these gains cannot yet be assigned to any single change in the design.

**Efficiency (Figure 4).** At 1M tokens with an FP8 cache, HySparse2's prefill FLOPs are 2.92x lower than HySparse's and 5.02x lower than Hybrid SWA's; the KV cache is 2.69 GB against 6.72 GB and 12.09 GB, with the three models using different head layouts and full-attention counts [S1].[^qa-18] These are analytic counts; no latency, throughput or hardware is reported [S1].

**Ablation 1, selection granularity (Table 3).** At the same 1,024-token budget with a separate 128-token window, token-level selection beats block-level by 6.57 points on RULER-v2, 8.14 on two-needle MRCR-v2 and 5.55 on GraphWalks, within the 32k training context [S1].[^qa-19] The contrary rows: token-level is 1.23 points lower on BBH and 1.84 lower on NoLiMa (our calculation from the table) [S1].

**Ablation 2, local window (Table 4).** Against a gated SWA branch, the forced window wins on 4 of 14 rows (BBH, RULER, RULER-v2, GraphWalks) and trails on 10, including GSM8K by 5.08 and MRCR-v2 by 4.99 points (our count) [S1].[^qa-20] The authors call this an "acceptable trade-off" for removing projection parameters and enabling early exit [S1]. Against having no local branch at all, the forced window is better on 8 of 14 rows but worse on 6, including MATH, DROP, GSM8K and NoLiMa (our count) [S1].

**Ablation 3, bridging (Table 5, Figure 5).** At 290B-A8B on about 1.8T tokens, the bridged model is better on 3 of 8 rows (MMLU, TriviaQA, LongPPL) and worse on 5, with DROP falling from 71.37 to 68.17 [S1].[^qa-21] Against KV Mirror, a U-shaped pairing of early and late layers, bridging ends pretraining at 87.65 RULER versus 81.28, a single metric [S1].[^qa-22] The cited source for KV Mirror describes it as the WeChat AI backbone design in which the last third of layers re-project the first third's hidden states [S5]; HySparse2 does not say how many layers its KV Mirror arm pairs [S1].

## Critical assessment

**The headline comparison bundles at least five changes.** HySparse2 versus HySparse changes bridging, selection granularity, the local window, the KV-head layout (MQA, 256-dimensional heads) and positional encoding at once; versus Hybrid SWA it also changes the number of full-attention layers [S1]. The ablations cover the first three. Nothing isolates MQA or the positional scheme, and the paper motivates MQA by cache size and kernel efficiency rather than quality [S1].[^qa-23] MQA's original paper reported minor quality degradation [S8]; here MQA comes paired with larger 256-dimensional heads, so in our reading its net effect on quality could go either way.

**Our KV-cache check.** Using Table 1 and assuming FP8 at one byte per element, "1M" as $2^{20}$ tokens, decimal gigabytes and only full-attention layers holding full-length caches, $M$ is $5 \times 1 \times 512 = 2{,}560$ bytes per token for HySparse2, $5 \times 4 \times 320 = 6{,}400$ for HySparse and $9 \times 4 \times 320 = 11{,}520$ for Hybrid SWA (our calculation). At $2^{20}$ tokens that gives 2.68, 6.71 and 12.08 GB, each within 0.01 GB of the reported 2.69, 6.72 and 12.09 GB [S1]; the residual is plausibly the 128-token windows. (With $10^6$ tokens the figures would be 2.56, 6.40 and 11.52 GB, which do not match.) The check also locates the saving: HySparse and HySparse2 both keep five full-length caches, because bridged layers still store their own projected keys and values [S1]. Under these assumptions, the 2.5x cache reduction relative to HySparse comes entirely from the per-layer head layout, which is the unablated change. Two-level sharing buys prefill compute and prefill-node memory, not decode-time cache relative to HySparse.[^qa-24]

**A rough prefill check.** If long-context prefill is dominated by full-attention layers, with cost proportional to layers executed times query heads times $(d^k + d^v)$, the attention-only ratios are $5 \times 64 \times 320 / (1 \times 64 \times 512) \approx 3.1$ against HySparse and about 5.6 against Hybrid SWA (our calculation from Table 1) [S1]. The reported 2.92x and 5.02x sit below these, as expected once non-attention FLOPs dilute the ratio. This is a consistency check, not a reproduction; it points to running one full-attention layer instead of five or nine as the main source of the prefill saving.[^qa-25]

**The ablations do not reconstruct the headline model.** The Table 3 block-level arm reports BBH 61.93, MMLU-Pro 35.74 and NoLiMa 40.27, identical to HySparse in Table 2 on all three shared rows; in our reading, that arm is the HySparse run, so the selection ablation sits in HySparse's GQA, unbridged configuration [S1]. The Table 4 forced-window arm shares bridging and a hybrid SWA self-decoder with HySparse2, yet differs from Table 2's HySparse2 on all 10 shared rows, for example NoLiMa 36.16 versus 49.76; the paper does not say what distinguishes them [S1]. The bridging ablation uses a different model size and token count from everything else [S1]. The three ablations therefore cannot be summed to explain the headline gap.[^qa-26]

**Pretraining-only ablations versus post-training headlines.** All ablations report pretraining results within 32k context; the largest claimed gains are after post-training at up to 256k [S1]. Whether the forced window's GSM8K and MRCR-v2 costs survive post-training is not reported in [S1]. Training-token counts are not restated for Ablations 1 and 2, and no ablation reports FLOPs or parameter counts, although the gated-window arm has extra projection parameters by the paper's own account [S1].[^qa-27]

**Noise and internal benchmarks.** With no repeats reported, small gaps such as Repo Code PPL 1.1570 versus 1.1578 cannot be separated from run-to-run noise [S1]. AgentPPL and Repo Code PPL are internal and unreleased [S1].

**Reproducibility.** On 2026-10-22 we checked the arXiv page (no code or data link), the paper text (no release statement) and Xiaomi's Hugging Face organization listing, which shows no HySparse model [S1] [S14]. The 36Kr report names open-sourced items only for MiMo-V2.6 [S13]. Public: the paper. Not public: inference code, weights, training code, data, evaluation scripts. Searches on 2026-10-22 for "HySparse2" found mirrors and news coverage but no replication or critique.[^qa-28]

> [!TIP]
> **QA · Reproducibility.** Nothing from HySparse2 or HySparse can be run today. The closest public
> artifact is the Hybrid SWA baseline family: MiMo-V2-Flash weights are open [S4] and listed on Xiaomi's
> Hugging Face organization [S14]. Anyone re-implementing HySparse2 must start from the attention
> configuration in Table 1 and Section 4.1 of [S1].

## Connections

The closest alternative to oracle selection is a learned indexer. DeepSeek-V3.2's sparse attention scores tokens with a lightweight "lightning indexer" and attends to the top 2,048 entries per query, trained first in a dense warm-up stage [S9]. HySparse2 instead keeps a few exact full-attention layers as selectors and says those could later be approximated by an indexer [S1]. Native Sparse Attention went the other way on both of HySparse2's refinements: it selects blocks for hardware efficiency and adds compressed and sliding-window branches through gating [S10]. HySparse2 argues that in agent trajectories, block selection spends budget on neighbours of relevant tokens [S1]; Table 3's retrieval rows support that, and its BBH and NoLiMa rows qualify it.

On cross-layer sharing, YOCO showed prefill early exit [S3]; Cross-Layer Attention shares key and value heads between adjacent layers for a further 2x cache reduction beyond MQA at near-equal accuracy in 1B and 3B models [S6]; Gemma 3n shares a middle layer's keys and values with all top layers and reports about 2x faster prefill than Gemma 3 4B [S12]. HySparse2's addition is to bridge only full-attention layers and remove the in-layer SWA branch that blocked a complete exit. The paper names DeepSeek-V4.1-Flash's bounded replay as the approximate alternative [S1]; our [DeepSeek-V4.1-Flash post](../published/2026-10-17-deepseek-v4-1-flash-kv-cache-compression.md) found that report gave no ablation of it. Our [AKV post](../published/2026-10-22-cache-engineering-agents-kv-drop.md) covered agents that drop cache entries at serving time; HySparse2 cuts cache in the architecture. Our [SMELT post](../published/2026-10-15-looped-moe-compute-matched-scaling.md) shows the contrasting method: arms matched on FLOPs, parameters and KV cache, which HySparse2's headline comparison is not.

## Open questions

- Does an MQA-only change to HySparse, at the same data, reproduce part of the long-context gain?
- Do the forced-window and bridging costs on GSM8K, DROP and MRCR-v2 persist, shrink or grow after long-context post-training?
- What are wall-clock prefill latency and decode throughput on named hardware?
- Does one self-decoder full-attention layer feeding all four cross-decoder caches become a bottleneck at longer contexts? Table 5 suggests not at 290B-A8B in pretraining [S1].[^qa-29]
- If MiMo-V3 ships with this architecture, as 36Kr reports is planned [S13], will weights allow outside checks of the retrieval and cache figures?

## Sources

S1. [HySparse2: Hybrid Sparse Attention with Two-Level KV Sharing](https://arxiv.org/abs/2609.26368) · preprint · B · published 2026-09-22 · accessed 2026-10-22
S2. [HySparse: A Hybrid Sparse Attention Architecture with Oracle Token Selection and KV Cache Sharing](https://arxiv.org/abs/2602.03560) · preprint · B · published 2026-02-03 · accessed 2026-10-22
S3. [You Only Cache Once: Decoder-Decoder Architectures for Language Models (NeurIPS 2024)](https://proceedings.neurips.cc/paper_files/paper/2024/hash/0df38cd13520747e1e64e5b123a78ef8-Abstract-Conference.html) · peer-reviewed · A · published 2024-12-10 · accessed 2026-10-22
S4. [MiMo-V2-Flash Technical Report (arXiv v2)](https://arxiv.org/abs/2601.02780) · technical-report · B · published 2026-01-08 · accessed 2026-10-22
S5. [Hidden Decoding at Scale: Latent Computation Scaling for Large Language Models](https://arxiv.org/abs/2607.08186) · preprint · B · published 2026-07-09 · accessed 2026-10-22
S6. [Reducing Transformer Key-Value Cache Size with Cross-Layer Attention (NeurIPS 2024)](https://proceedings.neurips.cc/paper_files/paper/2024/hash/9e23d020c18e4c40d81c6a0fc7a46f68-Abstract-Conference.html) · peer-reviewed · A · published 2024-12-10 · accessed 2026-10-22
S7. [GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints (EMNLP 2023)](https://aclanthology.org/2023.emnlp-main.298/) · peer-reviewed · A · published 2023-12-01 · accessed 2026-10-22
S8. [Fast Transformer Decoding: One Write-Head is All You Need](https://arxiv.org/abs/1911.02150) · preprint · B · published 2019-11-06 · accessed 2026-10-22
S9. [DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models](https://arxiv.org/abs/2512.02556) · technical-report · B · published 2025-12-02 · accessed 2026-10-22
S10. [Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention (ACL 2025)](https://aclanthology.org/2025.acl-long.1126/) · peer-reviewed · A · published 2025-07-01 · accessed 2026-10-22
S11. [What is Wrong with Perplexity for Long-context Language Modeling? (arXiv v5)](https://arxiv.org/abs/2410.23771) · preprint · B · published 2025-07-27 · accessed 2026-10-22
S12. [Introducing Gemma 3n: The developer guide](https://developers.googleblog.com/en/introducing-gemma-3n-developer-guide/) · lab-post · B · published 2025-06-26 · accessed 2026-10-22
S13. [Xiaomi HySparse2 coverage (36Kr, English edition)](https://eu.36kr.com/en/p/3996783462780800) · news · C · published 2026-09-24 · accessed 2026-10-22
S14. [XiaomiMiMo organization on Hugging Face (model, dataset and Space listing)](https://huggingface.co/XiaomiMiMo) · code · B · published 2026-10-09 · accessed 2026-10-22

## QA notes

[^qa-1]: **Verified** — [S1] (arXiv v1, 2026-09-22, the only version as of 2026-10-22) builds all cross-decoder KV caches from self-decoder hidden states so prefill can exit after the self-decoder; Section 3.5 says the prefill node deploys "only the first 25 layers" of the 49-layer model. This also supports the dek's "half its layers".
[^qa-2]: **Verified** — [S1] Section 4.1 reports only pretraining results for ablations, and the ablation arms share a backbone (Sections 4.3–4.5). QA found no FLOP or parameter counts for any arm. In Table 5 (290B-A8B, about 1.8T tokens) the bridged model is worse on BBH, DROP, GSM8K, RULER and Repo Code PPL (1.1353 vs 1.1351, lower is better) and better on MMLU, TriviaQA and LongPPL.
[^qa-3]: **Verified** — [S1] Section 4.2 gives the 19.81-point mean RULER-v2 gain over HySparse after the roughly 100B-token post-training stage. QA searched the full paper (16 pages, no appendix) and found no seeds, repeats or error bars.
[^qa-4]: **Supported with caveat** — this is the post's own derivation, not a statement in [S1]. QA repeated the arithmetic from [S1] Table 1 under the post's stated assumptions (FP8 at one byte, $2^{20}$ tokens, full-length caches only in the full-attention layers) and got the same 2.68, 6.71 and 12.08 GB. "Switch to multi-query attention" stands for the whole head-layout change: 4 KV heads of 192/128 dimensions become 1 KV head of 256/256, a net 2.5x per layer. The larger heads offset part of what MQA alone would save.
[^qa-5]: **Verified** — the arXiv page of [S1] has no code or data link and the paper has no release statement. On 2026-10-22 the Hugging Face API for Xiaomi's organization [S14] listed 30 models and 3 datasets, none related to HySparse, and a Hub model search for "hysparse" returned nothing. [S1] calls its efficiency numbers "our analysis" and reports no latency, throughput or hardware.
[^qa-6]: **Supported with caveat** — [S13] is a Zhidx article republished by 36Kr Europe on 2026-09-24 under the headline "MiMo-V2.6 Officially Released: Xiaomi's Luo Fuli Unveils New MiMo-V3 Architecture…"; the source list's title is a descriptive label, not that headline. The article calls HySparse2 the core component of the MiMo-V3 architecture and says nothing about HySparse2 code or weights. It is secondary coverage (grade C), and its numbers come from the paper.
[^qa-7]: **Verified** — [S1] Sections 1 and 4.1: the three 80B-A3B MoE models share the data mixture and training schedule within each stage.
[^qa-8]: **Supported with caveat** — [S4] (v2, 2026-01-08) gives 309B total and 15B active parameters, a 128-token window and a 5:1 SWA-to-global ratio, and [S1] calls its baseline the "Hybrid SWA used in MiMo-V2 Series". The 80B-A3B baseline in [S1] does not use the 5:1 ratio, though: Table 1 gives it 9 full-attention layers out of 49.
[^qa-9]: **Verified** — [S1] Section 3.2, Equation 1 and Figure 2 show a self-decoder made of one full-attention layer between two 12-layer SWA stacks, and a cross-decoder of four full-attention layers each followed by five sparse layers. Each cross-decoder layer has its own K/V projections.
[^qa-10]: **Verified** — [S1] Sections 3.3 and 4.1: token-level top-k selection with 128 forced local tokens plus 1,024 global tokens outside the window. HySparse used 64-token blocks and a separate, gated 128-token SWA branch.
[^qa-11]: **Verified** — [S1] Section 3.3 sets out the cascading SWA dependency, and Section 3.5 says prefill-node memory is cut "by nearly half". This is the paper's argument; no deployment measurement is reported.
[^qa-12]: **Verified** — [S1] Section 4.1 and Table 1: 49 layers, hidden size 2,048, about 500B pretraining tokens at 32k, about 100B post-training tokens extending to 256k, the Muon optimizer, and the head configurations as stated.
[^qa-13]: **Verified** — QA searched the full text of [S1] (16 pages including references, no appendix) for seeds, standard deviations, error bars, confidence intervals and repeated runs and found none.
[^qa-14]: **Verified** — QA recomputed every row of [S1] Table 2: RULER 90.77 vs 84.89 (+5.88) and NoLiMa 49.76 vs 40.27 (+9.49). On the other 15 rows HySparse2 beats HySparse on 4, ties on 1 (MBPP+ 52.65) and trails on 10, with DROP at 58.99 vs 63.78.
[^qa-15]: **Verified** — the four differences appear in the text of [S1] Section 4.2. The absolute means are not printed; per-length values appear only in the Figure 3 plots.
[^qa-16]: **Verified** — [S1] Section 4.2 text: 58.45, 32.61 and 35.74 at 256k.
[^qa-17]: **Verified** — benchmark sizes are in [S1] Section 4.1. [S11] (Section 3, Eq. 4) defines LongPPL with an evaluator model that selects key tokens by their long-short context difference. The arXiv v5 cited here carries an ICLR 2025 conference stamp, so a peer-reviewed version exists.
[^qa-18]: **Verified** — [S1] Section 4.2 and Figure 4: FP8 KV cache at 1M tokens, 2.92x and 5.02x lower prefill FLOPs, and caches of 2.69, 6.72 and 12.09 GB.
[^qa-19]: **Supported with caveat** — the 6.57 and 8.14 differences match [S1] Table 3. For GraphWalks the paper's text says 5.55, but Table 3's own values (34.92 − 29.38) give 5.54, a rounding inconsistency inside [S1]. The BBH (−1.23) and NoLiMa (−1.84) figures match the table.
[^qa-20]: **Verified** — QA recounted [S1] Table 4. Forced SWA beats Gated SWA on BBH, RULER, RULER-v2 and GraphWalks and trails on the other 10 rows (LongPPL counts as worse because it is higher). GSM8K −5.08 and MRCR-v2 −4.99 match the paper's text, and "acceptable trade-off" is verbatim. Against No SWA, Forced SWA is better on 8 rows and worse on 6, as stated.
[^qa-21]: **Verified** — [S1] Section 4.5 and Table 5.
[^qa-22]: **Verified** — [S1] Figure 5 and its text: 87.65 vs 81.28 RULER at the end of pretraining, on 80B-A3B models. No other metric is reported for this comparison.
[^qa-23]: **Verified** — [S1] Table 1 and Section 4.1 justify MQA by "a smaller KV cache and better token sparse attention kernel efficiency" and give HySparse2 NoPE in its full and sparse layers. QA confirmed that none of the three ablations varies the KV-head layout or the positional scheme.
[^qa-24]: **Supported with caveat** — QA reproduced the arithmetic: 2,560, 6,400 and 11,520 bytes per token give 2.684, 6.711 and 12.080 GB at $2^{20}$ tokens. [S1] gives no formula for its cache sizes, so the explanation of the 0.01 GB residual is plausible but unconfirmed. The conclusion that the saving over HySparse comes from the head layout depends on the stated assumption that only full-attention layers hold full-length caches; that assumption is consistent with [S1] Sections 3.2–3.3.
[^qa-25]: **Supported with caveat** — the arithmetic is correct (3.125 and 5.625), but this is the post's own rough model, not the paper's. It ignores SWA and sparse-layer attention and the bridging projections. [S1] does not publish its FLOP formula, so this check cannot confirm the 2.92x and 5.02x figures.
[^qa-26]: **Verified** — QA compared the tables of [S1]. Table 3's block arm matches Table 2's HySparse on BBH 61.93, MMLU-Pro 35.74 and NoLiMa 40.27. Table 4's Forced SWA arm differs from Table 2's HySparse2 on all 10 shared rows (BBH, MMLU-Pro, MATH, DROP, GSM8K, ARC-C, HellaSwag, WinoGrande, NoLiMa, RULER). That the block arm is the HySparse run is the post's inference; the paper does not say so.
[^qa-27]: **Verified** — [S1] Section 4.1 reports only pretraining results for ablations, and Sections 4.3–4.4 give no token counts. Section 3.3 notes the "substantial parameter overhead" of the gated baseline's separate projections.
[^qa-28]: **Verified** — checked by QA on 2026-10-22. The arXiv page of [S1] links no code or data, and Xiaomi's Hugging Face organization [S14] has no HySparse artifact. The article [S13] lists open-sourced items for the MiMo-V2.6 release (models, an RL environment, a framework and a technical report) but none for HySparse2. QA's own web searches found no replication, critique or code repository.
[^qa-29]: **Supported with caveat** — [S1] does not describe the 290B-A8B layout, so it is unknown whether that model also feeds all cross-decoder caches from a single self-decoder full-attention layer. Table 5 is also limited to 32k context.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
