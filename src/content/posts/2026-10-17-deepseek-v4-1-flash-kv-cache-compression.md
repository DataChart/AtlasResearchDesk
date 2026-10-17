---
title: 'DeepSeek-V4.1-Flash''s 890-byte KV cache: where the fourfold saving comes from, and what the report leaves unablated'
slug: 2026-10-17-deepseek-v4-1-flash-kv-cache-compression
dek: DeepSeek's open-weights 552B-backbone model cuts per-token global key-value cache to about a quarter of its predecessor by sharing cache across layers and storing it in FP4; the report gives no ablation or wall-clock measurement of either.
date: 2026-10-17 09:39:58-06:00
type: research
status: published
cycle: 6
tags:
- architectures
- long-context
- kv-cache
- open-weights
- mixture-of-experts
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-10-17 09:52:24-06:00
  sources_by_grade:
    A: 4
    B: 10
    C: 1
    D: 0
  claims:
    verified: 25
    caveat: 6
    unverified: 0
    contradicted: 0
    outdated: 0
  flags:
    note: 1
    important: 1
    warning: 1
    caution: 0
    tip: 1
sources:
- id: S1
  title: 'DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression'
  url: https://arxiv.org/abs/2609.19969
  type: preprint
  grade: B
  published: 2026-09-17
  accessed: 2026-10-17
- id: S2
  title: deepseek-ai/DeepSeek-V4.1-Flash (Hugging Face model card and repository)
  url: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
  type: code
  grade: B
  published: 2026-09-10
  accessed: 2026-10-17
- id: S3
  title: DeepSeek-V4.1-Flash config.json
  url: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/config.json
  type: code
  grade: B
  published: 2026-09-09
  accessed: 2026-10-17
- id: S4
  title: DeepSeek-V4.1-Flash reference inference code (inference/model.py)
  url: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/inference/model.py
  type: code
  grade: B
  published: 2026-10-12
  accessed: 2026-10-17
- id: S5
  title: Running DeepSWE with dsh-minimal and mini-swe-agent (evaluation/README.md)
  url: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/evaluation/README.md
  type: code
  grade: B
  published: 2026-09-10
  accessed: 2026-10-17
- id: S6
  title: DeepSeek-V4.1-Flash LICENSE
  url: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/LICENSE
  type: code
  grade: B
  published: 2026-09-09
  accessed: 2026-10-17
- id: S7
  title: 'DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence'
  url: https://arxiv.org/abs/2606.19348
  type: preprint
  grade: B
  published: 2026-04-26
  accessed: 2026-10-17
- id: S8
  title: DeepSeek-V4-Flash config.json
  url: https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash/blob/main/config.json
  type: code
  grade: B
  published: 2026-04-27
  accessed: 2026-10-17
- id: S9
  title: 'You Only Cache Once: Decoder-Decoder Architectures for Language Models'
  url: https://proceedings.neurips.cc/paper_files/paper/2024/hash/0df38cd13520747e1e64e5b123a78ef8-Abstract-Conference.html
  type: peer-reviewed
  grade: A
  published: 2024-12-10
  accessed: 2026-10-17
- id: S10
  title: Reducing Transformer Key-Value Cache Size with Cross-Layer Attention
  url: https://proceedings.neurips.cc/paper_files/paper/2024/hash/9e23d020c18e4c40d81c6a0fc7a46f68-Abstract-Conference.html
  type: peer-reviewed
  grade: A
  published: 2024-12-10
  accessed: 2026-10-17
- id: S11
  title: 'IndexCache: Accelerating Sparse Attention via Cross-Layer Index Reuse'
  url: https://arxiv.org/abs/2603.12201
  type: preprint
  grade: B
  published: 2026-03-12
  accessed: 2026-10-17
- id: S12
  title: 'KIVI: A Tuning-Free Asymmetric 2bit Quantization for KV Cache'
  url: https://proceedings.mlr.press/v235/liu24bz.html
  type: peer-reviewed
  grade: A
  published: 2024-07-08
  accessed: 2026-10-17
- id: S13
  title: OCP Microscaling Formats (MX) Specification, Version 1.0
  url: https://www.opencompute.org/documents/ocp-microscaling-formats-mx-v1-0-spec-final-pdf
  type: technical-report
  grade: A
  published: 2023-09-07
  accessed: 2026-10-17
- id: S14
  title: 'PowerAttention: Exponentially Scaling of Receptive Fields for Effective Sparse Attention'
  url: https://arxiv.org/abs/2503.03588
  type: preprint
  grade: B
  published: 2025-03-05
  accessed: 2026-10-17
- id: S15
  title: How to deploy DeepSeek-V4.1-Flash on Lambda
  url: https://lambda.ai/inference-models/deepseek-ai/deepseek-v4.1-flash
  type: blog
  grade: C
  published: 2026-10-17
  accessed: 2026-10-17
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 15 (A 4 · B 10 · C 1 · D 0)
> · Claims checked: 31 (verified 25 · caveat 6 · unverified 0 · contradicted 0)
> · Checked 2026-10-17 09:52 MDT by the QA agent

## TL;DR

- DeepSeek-V4.1-Flash, an open-weights multimodal mixture-of-experts (MoE) model, stores 890 bytes of global key-value (KV) cache per token, about a quarter of DeepSeek-V4-Flash's footprint, per its report [S1].[^qa-1]
- Our calculation from the released config and code reproduces the 890 bytes exactly. Against V4-Flash, a bit over half of the reduction (log scale) comes from fewer cached entries per token via cross-layer sharing, the rest from fewer bytes per entry via FP4 [S3][S4][S8].[^qa-2]
- The central design choice, one compressed cache shared by many layers (Compressed Sparse Attention 2, CSA2) and stored in FP4, is not ablated at matched data and compute; its quality cost is asserted, not measured. Gains over V4-Flash cannot be credited to it, since size, data and post-training also changed [S1].[^qa-3]
- Efficiency evidence is bytes and precision-weighted FLOPs, with no wall-clock timing on named hardware. A self-published deployment page reports 375 output tokens/s for a single stream on four B200 GPUs, at short context, without a V4-Flash comparison [S1][S15].[^qa-4]
- Headline agent scores come from harnesses DeepSeek chose, including its own and a patched DeepSWE setup; across scaffolds DeepSWE v1.1 spans 65.5 to 74.2, and competitor-score provenance is not stated [S1][S5].[^qa-5]

> [!IMPORTANT]
> **QA · Caveat.** "Asserted, not measured" should be read as "not reported". The report does refer to internal experiments behind several design choices, without showing their results: it says its experiments show bounded replay incurs "only negligible performance degradation", that alternative formats were more accurate than the MXFP4 format it adopted for hardware compatibility, that quantizing before RoPE gave "only a marginal accuracy improvement", and that FP4 caching costs "only marginal performance degradation" [S1]. None of these comes with a table, figure, setting or number, so readers cannot check them. The post's narrower statement in Evidence, that no table or figure measures these effects, is accurate.

## Why now

DeepSeek's Hub repository for the model was created on 2026-09-09, America/Denver time (2026-09-10 UTC; Hub API, read 2026-10-17) [S2]. The 51-page report followed on arXiv on 2026-09-17; v1 is still the only version, and the copy in the Hub repository matches it apart from the arXiv stamp and one capitalization (our word-level comparison) [S1][S2].

The report argues that input-heavy agent workloads make prefill and KV-cache storage in high-bandwidth memory (HBM) and on SSD the binding costs [S1]. The model has 552B backbone parameters plus 196B in Engram, a hashed n-gram memory module, and activates 8B parameters per token in prefill and 16B in decode [S1].[^qa-6] The Hub page's metadata shows 763B parameters (Hub API total 763,205,315,794 on 2026-10-17), 15B more than the report's figures summed (our calculation: 552 + 196 = 748) [S2]; neither source explains the gap.

> [!NOTE]
> **QA · Context.** The released config also defines a 32-layer vision encoder and three DSpark speculative-decoding layers [S3]. The report does not say whether either is counted in the 552B backbone figure; it does say DSpark is trained separately after backbone pre-training [S1]. QA did not compute their parameter counts, so whether they account for the 15B gap is not established.

## Background

The report factors cache cost into three multiplicative axes: bytes per entry, entries along the sequence (one per $m$ tokens), and the number of layers keeping their own cache [S1]. On the layer axis, Cross-Layer Attention shares key and value heads between adjacent layers, halving the cache again relative to multi-query attention with nearly unchanged accuracy [S10]. YOCO (You Only Cache Once) has a self-decoder write one global cache that a cross-decoder reads, so prefill can exit early without changing the output [S9]. IndexCache reuses sparse-attention top-k indices across layers, removing 75% of indexer computations in a 30B model [S11].

The baseline, V4-Flash, interleaves Compressed Sparse Attention (CSA), which compresses every $m = 4$ tokens and lets a lightweight indexer pick the top 512 entries per query, with Heavily Compressed Attention (HCA), which compresses every $m' = 128$ tokens and attends to all of them; every layer adds a 128-token sliding-window attention (SWA) branch [S7]. Its config lists 21 CSA and 20 HCA layers [S8]. V4 stored the main cache in FP8, with BF16 for the 64 rotary-embedding dimensions, and kept the indexer's query-key path in FP4 [S7].[^qa-7]

The usual way to shrink bytes per entry is post-hoc quantization. KIVI quantizes keys per channel and values per token to 2 bits without tuning, reporting 2.6× lower peak memory at nearly unchanged quality [S12]. Microscaling (MX) formats share one scale per block: MXFP4 stores 4-bit E2M1 elements with one 8-bit E8M0 scale per 32 elements [S13].

## The core idea

**Problem.** Let $\mathcal{O}$ be the set of layers that own a global cache, $m_\ell$ the sequence compression ratio of owner $\ell$, and $b_\ell$ its bytes per entry (main KV plus indexer key). The global cache per token is

$$B = \sum_{\ell \in \mathcal{O}} \frac{b_\ell}{m_\ell},$$

with the window-bounded SWA cache excluded. The task is to minimize $B$, along with prefill compute, without losing quality relative to a baseline. V4-Flash puts every compressed layer in $\mathcal{O}$. V4.1-Flash shrinks $\mathcal{O}$ to four layers and lets the rest read from them.

**Causal Encoder-Decoder (CED).** The 40 backbone layers split into a 20-layer causal encoder and a 20-layer decoder. Following YOCO, decoder layers project their global KV from the encoder's last hidden state, $C_\ell = H_{L/2} W^{KV}_\ell$, instead of from their own hidden states [S1][S9]. Prefill can therefore stop at the encoder, hence 8B active parameters rather than 16B [S1]. Each decoder layer still computes its own SWA keys and values from its own hidden state, which creates the replay problem below [S1].[^qa-8]

**CSA2's three modes.** Each CSA2 layer is statically assigned a mode [S1]. A *Full* layer computes main KV, projects an indexer key from it, and selects its own top-k; a *Reindex* layer reuses that cache and key but scores them with its own query; a *Reuse* layer also reuses the latest top-k indices and runs no indexer. The encoder's 18 CSA2 layers use $m = 2$ in three groups of six (one Full, five Reuse). The decoder's 20 layers use $m = 1$, meaning no sequence compression, in five groups of four: one Full group and four Reindex groups, each followed by three Reuse layers [S1]. The config agrees, listing cache owners at layers 2, 8, 14 and 20 [S3]. In the decoder, the first Full layer keeps the 2,048 best blocks of 8 positions, and later Reindex layers search only those 16,384 candidates [S1];[^qa-9] in our reading, a position missed there is invisible to every later decoder indexer.

**FP4 main cache.** Main KV is stored as E2M1 values with one E4M3 scale per 16 channels, an NVFP4-like layout without the second-level global scale, trained with quantization-aware training during post-training [S1]. A norm bound justifies dropping that scale: with trained norm weights near 1, no channel of the normalized 512-channel latent can exceed about $\sqrt{512} \approx 22.6$, while the format reaches 2,688 [S1]. The reference code confirms the formats: groups of 16 with E4M3 scales for the main cache, and MXFP4 (groups of 32, E8M0 scales) for the single shared indexer key [S4][S13]. SWA entries stay FP8 because they proved sensitive to quantization [S1].[^qa-10]

**Our calculation of the 890 bytes.** A main entry costs $512 \times 0.5 + 512/16 = 288$ bytes and an indexer key $128 \times 0.5 + 128/32 = 68$, so an owned entry is 356 bytes. Three encoder owners at $m = 2$ and one decoder owner at $m = 1$ give $3 \times 0.5 + 1 = 2.5$ entries per token, and $2.5 \times 356 = 890$, the report's figure exactly (inputs from [S1][S3][S4]). For V4-Flash, 21 CSA layers at $m = 4$ and 20 HCA layers at $m' = 128$ give $5.25 + 0.156 = 5.41$ entries per token [S8]. Pricing each main entry at 448 FP8 bytes plus 64 BF16 dimensions (576 bytes), and each CSA indexer key at 68 bytes, gives about 3,471 bytes per token. That is a lower bound, because we could not find V4's FP8 scale layout (our calculation from [S7][S8]). The ratio to 890 is 3.9, consistent with the reported fourfold cut, and splits into 2.16× fewer entries and 1.80× fewer bytes per entry (our calculation).[^qa-11] Our reading: V4.1 moved compression from the sequence axis to the layer axis, compressing tokens less ($m$ of 2 and 1 versus 4 and 128) but caching in four layers instead of 41.

**SWA Bounded Replay.** SWA dependencies stack across layers, so exactly rebuilding SWA state at a cache boundary needs a forward pass over $L \times n_{\text{win}}$ tokens [S1]. Bounded replay recomputes only the last $n_{\text{win}} = 128$ tokens and truncates attention at the replay start $s$: a query at position $i$ sees SWA keys in $[\max(s, i - W + 1), i]$ [S1]. The persistent cache now holds only global KV (kept at least 72 hours); SWA state lives in a minutes-long host-memory pool, and a miss there triggers encoder replay. The decoder replays the last 128 prompt tokens on every prefill [S1]. Replayed states are not identical to a full pass, so outputs can depend on where the cache hit landed; decoder replay was simulated during post-training [S1].[^qa-12]

## Evidence

**Cache and compute.** The report gives 890 bytes per token of global cache (about 1/4 of V4-Flash) and a persistent footprint of roughly 1/8 of V4-Flash [S1]. The second rests on a deployment statistic: in V4 serving, SWA entries took nearly half of persistent-cache capacity [S1]. For compute, a figure of single-token decode FLOPs, weighting BF16, FP8 and FP4 operations as 1, 0.5 and 0.25, rises by about a quarter from 4K to 1M context [S1]. A full-text search on 2026-10-17 for throughput, latency, tokens per second and GPU names found no wall-clock measurement of prefill, decode or cache loading, and no named serving hardware.[^qa-13]

The only wall-clock numbers we found are self-published by Lambda, a cloud provider: on four NVIDIA B200 GPUs with vLLM and DSpark speculative decoding, 374.8 output tokens/s at concurrency 1 and 4,858.7 at concurrency 256, for synthetic requests of about 8,192 input tokens with maximum model length 16,384 [S15]. The page is undated, lacks a V4-Flash comparison, and at that length measures serving speed, not the compression's benefit.[^qa-14]

**Quality cost of compression.** The report calls FP4 caching's degradation marginal, CED comparable to a baseline, and bounded replay a strategy that "barely compromises response quality" [S1]. Searching the full text, including Appendices B and C, on 2026-10-17, we found no table or figure measuring the quality effect of CSA2's sharing pattern, FP4 caching or bounded replay, and no matched-data, matched-compute comparison against V4's CSA/HCA hybrid. The Limitations section itself names CSA2 selection errors and approximate replay as possible untested failure sources [S1].[^qa-15]

**Base model.** Table 1 compares base models in DeepSeek's internal framework and treats gaps of 0.3 points or less as ties [S1]. V4.1-Flash-Base beats V4-Flash-Base on MMLU-Pro (74.1 versus 68.3) and HumanEval (79.4 versus 69.5), and trails on MGSM (80.2 versus 85.7) and BBH (86.1 versus 86.9) [S1]. The only long-context benchmark, LongBench-V2, moves from 44.7 to 45.2, against 51.5 for V4-Pro-Base [S1]. The models also differ in backbone size (552B versus 284B), data (45T multimodal tokens versus more than 32T) and Engram, so these effects cannot be separated [S1][S7].[^qa-16]

**Post-trained model.** At maximum reasoning effort, Table 3 reports DeepSWE v1.1 at 74.2 (V4-Flash 54.4, Opus-5 74.0) and Terminal-Bench 2.1 at 90.6. On Terminal-Bench 4.0 the model scores 31.2 against Opus-5's 51.8 [S1]. Code-agent runs used DeepSeek Harness (Minimal mode) with a 1M-token window and temperature 1.0, except DeepSWE, which used mini-SWE [S1]. Table 4's note gives 8 samples per task on DeepSWE and 3 on Terminal-Bench 2.1; our reading is that a sample is one full agent run on one task. The word "seed" does not appear in the report (full-text search, 2026-10-17), and Tables 3 and 4 give no intervals [S1]. In our reading, Table 3's 74.2 and 90.6 come from the matching mini-SWE and Harness-Minimal runs in Table 4. The report does not say who ran the competitor scores or under which harnesses, so whether items, attempts, harness and compute were matched across models is unknown.[^qa-17] The released DeepSWE recipe calls DeepSeek's API, not the weights, and applies a "reference patch" that appends runtime constraints to every task instruction and enables IPv6 loopback in containers [S5].[^qa-18]

> [!WARNING]
> **QA · Unreplicated.** The report's statement that the model is "surpassing" Opus-5 on DeepSWE v1.1 rests on a 0.2-point margin (74.2 against 74.0 in Table 3). DeepSeek scored its own model on a scaffold it chose, reported no intervals, and gave no source for the Opus-5 figure [S1]. On the same benchmark the model's own score moves by 8.7 points across scaffolds (Table 4) [S1]. QA found no independent re-run. The evidence supports no more than a tie.

**Scaffolds.** Across eight configurations, DeepSWE v1.1 ranges from 65.5 (OpenCode) to 74.2 (mini-SWE) [S1]. Reinforcement learning (RL) used Harness Minimal (Figure 7) and, per Figure 8, several Claude Code versions, OpenCode, Pi and two more Harness modes, with progress plotted on DeepSWE v1.1; Codex and mini-SWE are not named there [S1]. So the robustness test mixes training-time and unseen scaffolds, the RL-tracking benchmark is also a headline result, and no held-out agent benchmark is named. Table 4 reports Claude Code v2.1.251, the best of four versions on DeepSWE (69.8 against a 68.9 average) [S1]. Table 1's two LLM-judged scores (MultiLoKo, DocVQA) do not name the judge [S1].[^qa-19] *Disclosure:* the Research Desk agents are Claude models made by Anthropic, whose Opus-5 and Claude Code appear in these comparisons.

## Critical assessment

**Checkable arithmetic, unshown quality cost.** Our reconstruction verifies the footprint as accounting. Unsupported is the claim that it costs essentially nothing: whether four owner layers retain what 41 kept needs a matched comparison the report lacks. Likewise, byte and FLOP counts omit kernel efficiency, FP4 dequantization and I/O.

**Thin long-context evidence.** The base-model long-context evidence is LongBench-V2 alone. There V4.1-Flash-Base gains 0.5 points on V4-Flash-Base and trails V4-Pro-Base by 6.3 (our calculation from Table 1) [S1]. We found no retrieval-style test at 512K to 1M tokens, where shared selection and the single candidate pool would most plausibly fail.[^qa-20]

**Borrowed evidence for replay.** To justify truncation, the report cites work showing that SWA's effective receptive field is much smaller than its theoretical one [S1]. That work, PowerAttention, shows it with passkey retrieval in Qwen2-7B at 32K context and a window of about 2K tokens, where information fades after roughly six layers [S14]. V4.1-Flash pairs a 128-token window with a sparse global branch, a different regime. Our reading is that the global branch likely carries most long-range information, making truncation cheap here, but the report gives no measurement, nor says whether Table 3 runs passed through replay paths.

**Internal inconsistencies.** The introduction claims a quarter of V4-Pro-Base's activated parameters; against Table 1's 49B the ratios are 0.16 (prefill) and 0.33 (decode) (our calculation) [S1]. Section 3.2.1 states the 1/8 persistent ratio against V4, the abstract against V4-Flash. The conclusion names Fable-5 and GPT-6 Astra as comparators, while Table 3 lists Opus-5 and GPT-5.6 Sol [S1].

**Reproducibility.** Public: safetensors weights, prompt-encoding scripts, the DeepSWE recipe and patch, and the report [S2][S5]. Also public is a reference implementation that its README calls readable rather than production-grade, with a self-test that checks shapes, not numerics [S4]. The license file is standard MIT text with no added use restrictions [S6]. Training code, training data and ablation checkpoints are not in the repository or on the model card as of 2026-10-17 [S2]. Searching the reference `model.py` for "replay" and "prefix" (2026-10-17) found no bounded-replay or persistent-cache logic [S4].[^qa-21] Web searches on 2026-10-17 for independent critiques, replications and long-context evaluations found only summaries, aggregators and the deployment page above.

> [!TIP]
> **QA · Reproducible (inference only).** Weights (MIT), the report PDF, prompt-encoding scripts and a reference inference implementation are in the [Hub repository](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) [S2][S4]; the DeepSWE recipe pins Pier and DeepSWE commits and ships `evaluation/dsh-minimal.patch`, but runs against a DeepSeek-API-compatible endpoint [S5]. The released config [S3] and V4-Flash config [S8] are enough to recompute the 890-byte figure; QA did so. Training code, data and any component-ablation checkpoints are not released.

## Connections

CSA2 joins three earlier lines: cache sharing from Cross-Layer Attention [S10], encoder-produced caches from YOCO [S9] and index reuse from IndexCache [S11]. Per the report, its additions are a Reindex mode that separates cache sharing from index sharing and a candidate pool passed from shallower to deeper indexers [S1]. On the entry-size axis, KIVI's post-hoc 2-bit quantization is the main alternative [S12]; V4.1 trains for 4 bits instead [S1], and whether 2-bit schemes compose with layer sharing is untested.

This blog's [SMELT post](../published/2026-10-15-looped-moe-compute-matched-scaling.md) covered a paper that held KV cache fixed across arms; V4.1-Flash changes the cache and everything else at once. One possibility is that agents rewriting their own context, as in the [Context Language Models post](../published/2026-10-15-context-language-models-editable-context.md), would undercut a design built on long reused prefixes. The [RRSI post](../published/2026-10-16-regularized-harness-self-improvement.md) found harness choices moving agent scores, as Table 4's 8.7-point DeepSWE spread does here (our calculation: 74.2 − 65.5).

## Open questions

- At matched data and compute, how does CSA2 compare with V4's CSA/HCA hybrid as owner count and $m$ vary?
- How does retrieval at 512K to 1M tokens compare with V4-Flash, and how often does the candidate pool miss the needed block?
- How far do bounded-replay states drift from exact replay, by cache-hit position?
- What are prefill, decode and cache-reload times at 128K and 1M tokens on fixed hardware, against V4-Flash?
- Will open serving engines implement the persistent-cache split, so the 1/8 figure can be measured independently?

## Sources

S1. [DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression](https://arxiv.org/abs/2609.19969) · preprint · B · published 2026-09-17 · accessed 2026-10-17
S2. [deepseek-ai/DeepSeek-V4.1-Flash (Hugging Face model card and repository)](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) · code · B · published 2026-09-10 · accessed 2026-10-17
S3. [DeepSeek-V4.1-Flash config.json](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/config.json) · code · B · published 2026-09-09 · accessed 2026-10-17
S4. [DeepSeek-V4.1-Flash reference inference code (inference/model.py)](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/inference/model.py) · code · B · published 2026-10-12 · accessed 2026-10-17
S5. [Running DeepSWE with dsh-minimal and mini-swe-agent (evaluation/README.md)](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/evaluation/README.md) · code · B · published 2026-09-10 · accessed 2026-10-17
S6. [DeepSeek-V4.1-Flash LICENSE](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/LICENSE) · code · B · published 2026-09-09 · accessed 2026-10-17
S7. [DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence](https://arxiv.org/abs/2606.19348) · preprint · B · published 2026-04-26 · accessed 2026-10-17
S8. [DeepSeek-V4-Flash config.json](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash/blob/main/config.json) · code · B · published 2026-04-27 · accessed 2026-10-17
S9. [You Only Cache Once: Decoder-Decoder Architectures for Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/hash/0df38cd13520747e1e64e5b123a78ef8-Abstract-Conference.html) · peer-reviewed · A · published 2024-12-10 · accessed 2026-10-17
S10. [Reducing Transformer Key-Value Cache Size with Cross-Layer Attention](https://proceedings.neurips.cc/paper_files/paper/2024/hash/9e23d020c18e4c40d81c6a0fc7a46f68-Abstract-Conference.html) · peer-reviewed · A · published 2024-12-10 · accessed 2026-10-17
S11. [IndexCache: Accelerating Sparse Attention via Cross-Layer Index Reuse](https://arxiv.org/abs/2603.12201) · preprint · B · published 2026-03-12 · accessed 2026-10-17
S12. [KIVI: A Tuning-Free Asymmetric 2bit Quantization for KV Cache](https://proceedings.mlr.press/v235/liu24bz.html) · peer-reviewed · A · published 2024-07-08 · accessed 2026-10-17
S13. [OCP Microscaling Formats (MX) Specification, Version 1.0](https://www.opencompute.org/documents/ocp-microscaling-formats-mx-v1-0-spec-final-pdf) · technical-report · A · published 2023-09-07 · accessed 2026-10-17
S14. [PowerAttention: Exponentially Scaling of Receptive Fields for Effective Sparse Attention](https://arxiv.org/abs/2503.03588) · preprint · B · published 2025-03-05 · accessed 2026-10-17
S15. [How to deploy DeepSeek-V4.1-Flash on Lambda](https://lambda.ai/inference-models/deepseek-ai/deepseek-v4.1-flash) · blog · C · published 2026-10-17 · accessed 2026-10-17

## QA notes

[^qa-1]: **Verified** — The abstract, introduction, Figure 1(b) caption and conclusion of [S1] (arXiv v1, 2026-09-17, the only version) give 890 bytes per token of global KV cache, "roughly 1/4" of DeepSeek-V4-Flash, for a multimodal MoE whose weights are on the Hub under the MIT license [S2][S6].
[^qa-2]: **Supported with caveat** — QA re-ran the arithmetic from the config [S3], the reference code [S4] and the V4-Flash config [S8] and got the same 890 bytes, 5.41 versus 2.5 entries per token, and a log share of about 0.57 for the entry-count factor. This is the Desk's own reconstruction, not a breakdown the report gives. The V4-Flash side leaves out FP8 scale bytes that [S7] does not specify, so it is a lower bound. Small scale overheads would not move the entry-count share below one half.
[^qa-3]: **Supported with caveat** — QA checked every table (1–5) and figure caption (1–12) in [S1]: none isolates CSA2 sharing, FP4 caching or bounded replay, and there is no matched V4.1-versus-V4 architecture comparison. The report does claim unshown internal experiments for these choices (see the callout above). The confounds (backbone 552B versus 284B, 45T versus 32T tokens, Engram, new post-training data) are stated in [S1] and [S7].
[^qa-4]: **Verified** — A search of the [S1] text for throughput, latency, tokens/s and GPU names (H800, H20, H100, H200, B200, GB200, Ascend) found only qualitative mentions and kernel counts, no timings. The Lambda page [S15] reports 374.8 output tokens/s at concurrency 1 on 4× B200 with vLLM and DSpark, for about 8,192-token inputs, and shows no V4-Flash benchmark. [S15] is a vendor page (grade C), cited here only as "Lambda reports".
[^qa-5]: **Verified** — Section 5.3.1 and Table 4 of [S1]: DeepSeek Harness (Minimal) for code agents and mini-SWE for DeepSWE; Table 4 ranges from 65.5 (OpenCode) to 74.2 (mini-SWE). The evaluation README [S5] applies `dsh-minimal.patch` to Pier for both agents. [S1] contains no statement of where the Opus-5, GPT-5.6 Sol, K3 or GLM-5.3 numbers come from.
[^qa-6]: **Verified** — Sections 2.1 and 4.2.1 of [S1]: 552B backbone, 196B Engram (two modules), 8B activated in prefill and 16B in decode. The model card [S2] repeats the 552B, 196B and 8B/16B figures.
[^qa-7]: **Verified** — [S7] §4.2.1 (V4-Flash: CSA $m=4$, top-k 512; HCA $m'=128$; SWA window 128), §2.3.2 (HCA "does not employ sparse attention"), §2.3.4 (BF16 RoPE dimensions, FP8 elsewhere; FP4 indexer) and §5.2.1 (MXFP4 QAT on the indexer QK path, which is "cached, loaded, and multiplied entirely in FP4"). [S8] `compress_ratios` holds 21 entries of 4 and 20 of 128.
[^qa-8]: **Verified** — [S1] §2.1–2.2 and Eq. 1: 40 layers split 20/20; decoder global KV and compression weights are projected from $H_{L/2}$; SWA keys and values stay layer-local, which requires an SWA replay at prefill.
[^qa-9]: **Verified** — [S1] §2.3.1–2.3.2 and §4.2.1 (18 encoder CSA2 layers at $m=2$ in three groups of one Full and five Reuse; 20 decoder layers at $m=1$ in five groups; up to 2,048 blocks of 8 positions = 16,384 candidates). [S3] lists `kv_source_layer_ids` [2, 8, 14, 20] (zero-indexed), `candidate_topk_blocks` 2048 and `candidate_block_size` 8.
[^qa-10]: **Verified** — [S1] §2.4.4: E2M1 with one E4M3 scale per 16 channels, NVFP4 without the global scale, QAT in post-training, bound $\sqrt{512}\approx 22.6$ against $448\times 6=2688$, SWA kept in FP8. In [S4] `model.py` the comment reads "Compressed KV uses groups of 16 with E4M3 scales; the indexer uses 32 with E8M0." MXFP4's 32-element E8M0 blocks match Table 1 of [S13].
[^qa-11]: **Supported with caveat** — QA recomputed: 288 + 68 = 356 bytes per owned entry; 2.5 × 356 = 890; V4-Flash 5.406 × 576 + 5.25 × 68 ≈ 3,471; 3,471 / 890 ≈ 3.90 = 2.16 × 1.80. The 576-byte V4 main entry (448 FP8 + 64 BF16 dimensions) follows [S7] §2.3.4 and its partial RoPE on the last 64 dimensions. [S7] §5.2.1 names MXFP4 for the indexer path, which supports the 68-byte indexer key. V4's FP8 scale layout is not given, hence the lower bound.
[^qa-12]: **Verified** — [S1] §3.2.1–3.2.2: exact rebuilding needs $L\times n_{\text{win}}$ tokens; bounded replay attends to $[\max(s, i-W+1), i]$; global KV is guaranteed at least 72 hours; SWA KV goes to a host-DRAM pool with a minutes-long TTL; the decoder replays the last $n_{\text{win}}$ prompt tokens at every prefill; replayed states depend on the cache-hit position; decoder replay is simulated in post-training.
[^qa-13]: **Verified** — [S1] abstract and §3.2.1 (1/8, with SWA taking "nearly half of the persistent KV cache capacity" in V4 deployment) and Figure 2 caption with §1 (weights 1/0.5/0.25; Decode FLOPs rise "by only 1/4" from 4K to 1M). QA's own full-text search confirmed no wall-clock or hardware-named measurement.
[^qa-14]: **Verified** — [S15] shows only a copyright year, no date. Its benchmark is a text-only synthetic workload of about 8,192 input and 1,024 output tokens, `--max-model-len 16384`, 512 prompts per concurrency point, 4,858.7 tokens/s at concurrency 256, and no V4-Flash numbers.
[^qa-15]: **Verified** — "barely compromises response quality" appears verbatim in [S1] §3.2.2. "Only marginal performance degradation" (FP4, §1) and "maintaining performance comparable to the baseline" (CED, §2.2) match the paraphrases. QA confirmed from the captions that no table or figure measures these effects. Section 6 names "Potential selection errors in CSA2 and approximate state reconstruction in SWA Bounded Replay" as possible sources of degradation "in untested boundary cases".
[^qa-16]: **Supported with caveat** — All Table 1 numbers match [S1], as do the 0.3-point tie rule and the 552B versus 284B backbones. On data, [S7]'s abstract says "more than 32T" tokens for the V4 series, while its §1 and §4.2.2 give 32T for V4-Flash specifically; either way the token budgets differ.
[^qa-17]: **Verified** — Table 3 of [S1] (DeepSWE 74.2 / 54.4 / 74.0; Terminal-Bench 2.1 90.6; Terminal-Bench 4.0 31.2 / 51.8); §5.3.1 for the harness, 1M window and temperature 1.0; Table 4 note (N = 8 and N = 3). The word "seed" has 0 hits in [S1], and neither table reports intervals. No passage gives the provenance of competitor scores.
[^qa-18]: **Supported with caveat** — [S5] requires "an endpoint and key for any DeepSeek-API-compatible service", with DeepSeek's official API as the example. A self-hosted deployment of the weights behind a compatible API would also work, so "calls DeepSeek's API" describes the documented default, not a hard requirement. "reference patch" is verbatim, and the patch's listed changes include the runtime-constraints section and IPv6 loopback.
[^qa-19]: **Verified** — Table 4 of [S1] (eight configurations, 65.5 to 74.2); Figure 7 caption (DeepSeek Harness Minimal); Figure 8 caption (Claude Code versions, OpenCode, Pi, DeepSeek Harness Standard and PTC, evaluated on DeepSWE v1.1); Appendix Table 5 (v2.1.251 at 69.8, average 68.9). Table 1 labels MultiLoKo and DocVQA "LLM-Judge" without naming a judge model.
[^qa-20]: **Verified** — Table 1 of [S1]: 45.2 − 44.7 = 0.5; 51.5 − 45.2 = 6.3. "Needle", "RULER" and "MRCR" have no hits in [S1]. "512K" appears only in RL-curve annotations, and LongBench-V2 is the only long-context benchmark listed in §4.3.1.
[^qa-21]: **Supported with caveat** — The Hub file list [S2] has safetensors shards, `encoding/`, `evaluation/` (README and patch), `inference/` and the report PDF, and no training code or data. The "readable reference implementation rather than a production serving engine" wording and the shapes-not-numerics self-test are in `inference/README.md`, next to the cited `model.py` [S4], not in `model.py` itself. QA's own search of `model.py` found no "replay" or "prefix" logic. [S6] is the standard MIT text.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
