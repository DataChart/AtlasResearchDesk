---
title: 'Kolibri-1, Aleph Alpha''s 78B-A3.46B English–German open model: hybrid attention, single-run ablations and a narrow lead'
slug: 2026-11-03-kolibri-1-hybrid-attention-bilingual-open-model
dek: Aleph Alpha's Apache-2.0 Kolibri-1 leads Qwen3.5-35B-A3B by 0.8 English and 1.0 German Overall points on its own harness; its hybrid attention is ablated in single proxy runs, and its card and report disagree on the German share.
date: 2026-11-03 17:20:00-07:00
type: research
status: published
cycle: 20
tags:
- open-weights
- architectures
- long-context
- multilingual
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-11-03 17:30:42-07:00
  sources_by_grade:
    A: 0
    B: 15
    C: 0
    D: 2
  claims:
    verified: 43
    caveat: 7
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
  title: 'Kolibri: A Sovereign European Model on the Pareto Frontier (Aleph Alpha technical report, 189 pp.)'
  url: https://aleph-alpha.com/downloads/tech-report.pdf
  type: technical-report
  grade: B
  published: 2026-10-03
  accessed: 2026-11-03
- id: S2
  title: Aleph-Alpha/Kolibri-1 (Hugging Face model card, README at commit 5bb7075)
  url: https://huggingface.co/Aleph-Alpha/Kolibri-1
  type: lab-post
  grade: B
  published: 2026-10-03
  accessed: 2026-11-03
- id: S3
  title: Aleph-Alpha/Kolibri-1 config.json
  url: https://huggingface.co/Aleph-Alpha/Kolibri-1/resolve/main/config.json
  type: code
  grade: B
  published: 2026-10-03
  accessed: 2026-11-03
- id: S4
  title: Aleph-Alpha/Kolibri-1 commit history on main (Hugging Face Hub API)
  url: https://huggingface.co/api/models/Aleph-Alpha/Kolibri-1/commits/main
  type: code
  grade: B
  published: 2026-10-20
  accessed: 2026-11-03
- id: S5
  title: Aleph-Alpha/Kolibri-1 LICENSE file
  url: https://huggingface.co/Aleph-Alpha/Kolibri-1/resolve/main/LICENSE
  type: code
  grade: B
  published: 2026-10-03
  accessed: 2026-11-03
- id: S6
  title: 'Aleph-Alpha/Kolibri-1 model metadata (Hugging Face Hub API: creation time, safetensors parameter counts by dtype)'
  url: https://huggingface.co/api/models/Aleph-Alpha/Kolibri-1
  type: code
  grade: B
  published: 2026-10-20
  accessed: 2026-11-03
- id: S7
  title: Aleph-Alpha/Kolibri-1 model.safetensors.index.json
  url: https://huggingface.co/Aleph-Alpha/Kolibri-1/resolve/main/model.safetensors.index.json
  type: code
  grade: B
  published: 2026-10-03
  accessed: 2026-11-03
- id: S8
  title: 'Kolibri 1: Public Summary of Training Content for General-Purpose AI Models (EU AI Act template, version 1.0)'
  url: https://aleph-alpha.com/downloads/data-summary.pdf
  type: technical-report
  grade: B
  published: 2026-10-03
  accessed: 2026-11-03
- id: S9
  title: 'Kolibri has landed: a sovereign open-weight model (Aleph Alpha blog)'
  url: https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/
  type: lab-post
  grade: B
  published: 2026-10-03
  accessed: 2026-11-03
- id: S10
  title: '[Evaluation Report] Kolibri-1 FP8 on one RTX PRO 6000 (96 GB): serving numbers, and BEAM 100K from its own 262K window vs a 7K-token memory page (Hugging Face discussion #10)'
  url: https://huggingface.co/Aleph-Alpha/Kolibri-1/discussions/10
  type: social
  grade: D
  published: 2026-10-08
  accessed: 2026-11-03
- id: S11
  title: 'tool-eval-bench results (Hugging Face discussion #4)'
  url: https://huggingface.co/Aleph-Alpha/Kolibri-1/discussions/4
  type: social
  grade: D
  published: 2026-10-04
  accessed: 2026-11-03
- id: S12
  title: 'Rope to Nope and Back Again: A New Hybrid Attention Strategy (arXiv 2501.18795v2)'
  url: https://arxiv.org/abs/2501.18795
  type: preprint
  grade: B
  published: 2025-10-22
  accessed: 2026-11-03
- id: S13
  title: Gemma 3 Technical Report (arXiv 2503.19786v1)
  url: https://arxiv.org/abs/2503.19786
  type: technical-report
  grade: B
  published: 2025-03-25
  accessed: 2026-11-03
- id: S14
  title: The Impact of Positional Encoding on Length Generalization in Transformers (arXiv 2305.19466v2; NeurIPS 2023)
  url: https://arxiv.org/abs/2305.19466
  type: preprint
  grade: B
  published: 2023-11-06
  accessed: 2026-11-03
- id: S15
  title: 'RULER: What''s the Real Context Size of Your Long-Context Language Models? (arXiv 2404.06654v3; COLM 2024)'
  url: https://arxiv.org/abs/2404.06654
  type: preprint
  grade: B
  published: 2024-08-06
  accessed: 2026-11-03
- id: S16
  title: 'Adding Error Bars to Evals: A Statistical Approach to Language Model Evaluations (arXiv 2411.00640v1)'
  url: https://arxiv.org/abs/2411.00640
  type: preprint
  grade: B
  published: 2024-11-01
  accessed: 2026-11-03
- id: S17
  title: Aleph-Alpha/Kolibri-1-BF16 (Hugging Face model card, config.json and LICENSE)
  url: https://huggingface.co/Aleph-Alpha/Kolibri-1-BF16
  type: lab-post
  grade: B
  published: 2026-10-02
  accessed: 2026-11-03
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 17 (A 0 · B 15 · C 0 · D 2)
> · Claims checked: 50 (verified 43 · caveat 7 · unverified 0 · contradicted 0)
> · Checked 2026-11-03 17:30 MST by the QA agent

## TL;DR

- **The central design choice is a hybrid attention stack, ablated only in part.** Most blocks use 512-token sliding-window attention with rotary position embeddings (RoPE); every fifth block uses full attention with no positional encoding (NoPE) [S1][S3].[^qa-1] The report's FLOP-matched test against full attention is one run per arm at a small proxy, and the arms also differ in training sequence length, so we credit no score to the window or to NoPE alone [S1].[^qa-2]
- **The aggregate lead over the nearest 3B-active model is under one point in English.** On Aleph Alpha's own harness the post-trained model averages 75.5 against 74.7 for Qwen3.5-35B-A3B, with no interval on either aggregate [S1].[^qa-3]
- **Long context: best at 1M tokens, behind at 128k.** Kolibri Base posts the best RULER score among the base models run at 1M tokens, but the lowest of the mixture-of-experts (MoE) base models scored at 128k [S1].[^qa-4]
- **One run per arm.** No architecture ablation in Section 2.1 or Appendix B reports repeated runs, and reinforcement learning (RL) is one run; repeated training runs appear only in a data-quality ablation and in 20 replicate fine-tuning runs behind an eval-noise model [S1].[^qa-5]
- **All primary evidence is Aleph Alpha's, and its documents disagree.** The report and blog give a 21.3% German pre-training share, the card and EU training-content summary 23.9%, and the only outside evaluations found are forum posts [S1][S2][S8][S9][S10][S11].[^qa-6]

## Why now

Aleph Alpha released Kolibri-1 on Hugging Face on 2026-10-03, per the card, the blog post and the EU AI Act training-content summary, alongside a 189-page technical report and an Apache 2.0 licence file [S1][S2][S5][S8][S9]. The Hub API records the FP8 (8-bit floating-point) repository's creation at 2026-10-01 23:54 MDT and a first commit titled "Release 2026-10-02" at 2026-10-03 00:13 MDT; the latest commit on main, a README update for Transformers 5.20, is from 2026-10-20 00:30 MDT [S4][S6]. A bfloat16 (BF16) sibling repository was created at 2026-10-02 02:07 MDT [S17]. The report has no printed date; its PDF metadata gives 2026-10-03 [S1].

The model has 78.1B total and 3.46B active parameters, was trained on about 24T tokens and is pitched at German-language and regulated deployments [S1].[^qa-7] Its report is detailed enough to check several claims against the released files.

## Background

**Hybrid local–global attention.** Sliding-window attention (SWA) lets each query see a fixed number of preceding keys, so its key–value (KV) cache stops growing with sequence length; a few full-attention layers keep global access. Gemma 3 interleaves five local layers per global layer with a 1,024-token window and RoPE bases of 10k (local) and 1M (global), and reports little perplexity change from the ratio [S13]. Yang et al. alternate three RoPE sliding-window layers with one NoPE full-attention layer and report higher RULER retrieval scores than a full-attention RoPE baseline at 128k and 256k tokens [S12].

**NoPE.** A causal decoder can infer order from its attention mask alone. Kazemnejad et al. found that decoder-only models without positional encoding generalized to longer inputs better than several explicit encodings on their reasoning and math tasks [S14].

**RULER.** A synthetic long-context suite that extends needle-in-a-haystack retrieval with multi-hop tracing and aggregation; its authors found that only about half of the models they tested, all claiming at least 32K tokens, held up at 32K [S15].

## The core idea

**Problem statement (our formalization).** Choose an architecture $A$ and data mixture $p$ to maximize bilingual quality under an active-compute budget and a serving-memory budget:

$$\max_{A,\,p}\; w\,Q_{\text{EN}}(A,p) + (1-w)\,Q_{\text{DE}}(A,p) \quad\text{s.t.}\quad N_{\text{act}}(A)\approx 3.4\text{B},\qquad \mathrm{KV}(A,L)\ \text{small for } L \ge 256\text{k}.$$

The report scores candidates on modelling quality, stability and training and decode efficiency, and its mid-training aggregate weights English and German 80/20 [S1].

**Attention pattern.** For blocks $\ell = 1,\dots,50$, block $\ell$ uses full causal attention if $\ell \equiv 0 \pmod 5$ and otherwise the mask

$$M_\ell(i,j) = \mathbb{1}[\,i-512 \le j \le i\,],$$

that is, the 512 preceding tokens plus the query token [S1]. That explains why the config sets `sliding_window: 513` while the report says 512 (our reading) [S3]. Attention is grouped-query with 48 query heads, 4 KV heads and head dimension 128; queries and keys are RMS-normalized per head, and RoPE with $\theta = 10{,}000$ is applied only in the 40 sliding-window blocks [S1][S3].

**Mechanism.** Position enters the network only as rotations of offsets between 0 and 512 inside the sliding-window blocks. Running at 1M tokens therefore creates no rotary angle the model never trained on; the ten full-attention blocks match on content, with only causal ordering. That is the basis for the card's statement that context extends "without any position scaling" beyond the 262,144-token training length [S2]. Untested is whether softmax attention over a million keys dilutes, which position handling cannot fix (our speculation).

The memory payoff follows from the config (our calculation) [S3]. One full-attention layer stores K and V for 4 heads of 128 dimensions, 1,024 values per token; ten such layers hold 10,240 values, or 10,240 bytes per token in the FP8 KV cache the card describes [S2]. At 1,048,576 tokens that is about 10.7 GB per sequence, plus a fixed 21 MB for the 40 windowed layers. The same heads with full attention in all 50 blocks would need five times as much, about 53.7 GB.

**Routing and tokenizer.** Each MoE layer routes a token to 6 of 384 experts plus a shared one and computes $y_t = f_{\text{shared}}(x_t) + \sum_{e\in I_t} \sigma(z_{t,e})\, f_e(x_t)$, where $I_t$ holds the top 6 experts under bias-adjusted logits and the sigmoid scores are not renormalized [S1][S3]. The UniBPE tokenizer runs bottom-up like byte-pair encoding (BPE) but applies the merge that most reduces the Unigram corpus loss $L = h(N) - \sum_t h(c_t)$, with $h(x) = x\log x$, rather than the most frequent pair; 119,744 UniBPE merges are followed by 7,900 plain BPE merges [S1].

**Recomputed size.** From the config, the weights come to 78,103,055,360 parameters; adding the 50 layers' 384-entry expert-bias vectors gives 78,103,074,560, exactly the safetensors total the Hub reports (705,058,560 BF16 plus 77,398,016,000 FP8) (our calculation) [S3][S6]; the shard index lists 78.8 GB of tensors [S7]. Active parameters excluding the embedding but including the output head come to 3,457,551,360, matching the stated 3.46B and 4.4% (our calculation) [S1][S3].[^qa-8] The BF16 sibling has the same config apart from quantization, an identical LICENSE file and the same total [S17].

## Evidence

**Hybrid versus full attention.** At proxy scale M (7.8B total, 0.6B active, 97.6B pre-training tokens), a hybrid with a 512-token window is compared with a full-attention model at matched FLOPs [S1]. The arms differ in more than attention: the full model uses 14 heads and 4k-token training sequences, the hybrid 16k; in the 5B-token long-context stage the full model trains at 64k with YaRN rescaling and the hybrid at 256k without RoPE extension [S1]. The report says the hybrid gains on long context without losing pre-training accuracy, with numbers only in Figure 7 [S1]. Section 2.1.3, Table 4 and Figures 7–8 report no repeated runs.[^qa-9]

> [!WARNING]
> **QA · Unreplicated.** The evidence for Kolibri's headline design choice is one proxy-scale comparison, reported only as a figure. Because the two arms differ in head count, sequence length and long-context recipe, the long-context gain cannot be attributed to the sliding window or to NoPE [S1]. QA found no outside replication.

**Window size.** Table 4 sweeps windows from 128 to 4,096 at scale M, approximately matching forward FLOPs, KV cache and total parameters by changing head and expert counts, so active parameters range from 0.6B to 1.2B across arms [S1]. Pre-training accuracy spans 34.9 to 35.8 (our reading of Table 4), with 256 best [S1]. At scale L (2.1B active, 327.6B tokens), windows of 128 and 512 score 48.0 and 47.8 on pre-training accuracy and 76.2 and 77.1 on the pooled long-context score; the gap is at most 3.1 points through 128k and 6.7 points at 256k, in favour of 512 [S1]. The 0.2-point accuracy cost is stated without a noise estimate.[^qa-10]

**Base model.** On Aleph Alpha's pre-training suite, sampled at temperature 0.6 with up to 1,024 output tokens, Kolibri Base averages 81.1 (English) and 81.5 (German), behind only Nemotron 3 Super Base at 83.1 and 85.0, which has 12B active parameters [S1]. Qwen3.5-35B-A3B Base scores 73.8 and 76.6 under the same protocol, which the report says is not a reproduction of published numbers [S1].[^qa-11]

**Long context.** On RULER, Kolibri Base scores 67.9 at 128k against 81.0 to 89.9 for Gemma 4 26B-A4B, Nemotron 3 Nano 30B-A3B and Qwen3.5-35B-A3B base models [S1]. Beyond its training length it degrades least: 63.2 at 1M against 58.5 for Nemotron 3 Nano, which supports 1M natively, and 57.5 for Qwen3.5 served with static YaRN at factor 4 [S1].[^qa-12]

**Post-trained model.** Tables 28–29 compare the released checkpoint at high reasoning effort with twelve open models under one protocol, using Aleph Alpha's eval-framework or, for agentic tasks, Harbor [S1]. Overall English is 75.5 against 74.7 for Qwen3.5-35B-A3B and 80.2 for the dense Qwen3.8 27B; Overall German is 70.8 against 69.8 and 79.9 [S1].[^qa-13] Recomputing both Overall rows from the category averages gives 75.475 and 70.825, which round to the published values (our calculation) [S1]. Where a benchmark is repeated, the repeats are sampling runs of one checkpoint (avg@3 to avg@16), and Section 3.3 gives no interval for any aggregate [S1].

> [!IMPORTANT]
> **QA · Unquantified margin.** The 0.8-point (English) and 1.0-point (German) leads come from the developer's own harness and carry no interval [S1]. The report itself says a single GPQA Diamond run leaves several points of sampling noise, which is why it averages eight samples on that benchmark (Table 27 of [S1]). Until an interval or an outside evaluation is available, readers should not treat the Kolibri-over-Qwen3.5-35B-A3B ordering as settled.

The German Overall averages four categories; two are retrieval categories whose tasks Kolibri's RL environments target or whose sets Aleph Alpha built in-house [S1]. Dropping Agentic Retrieval and Industry RAG (retrieval-augmented generation) from both languages leaves Kolibri ahead: 72.8 against 71.9 in English and 73.2 against 70.5 in German (our calculation from Tables 28–29) [S1].[^qa-14]

Against its own supervised fine-tuning (SFT) checkpoint, the RL stage adds 29.9 points on IFBench and 25.0 on τ³-Bench banking (Table 25); this is one RL run of 1,000 optimizer steps with 256 groups of 8 rollouts per batch [S1].

**Who measures what.** RL rewards in some environments come from a frozen Qwen3.5-122B-A10B judge, decoded greedily without reasoning [S1]. SFT data was generated mainly by GLM-5.2, GLM-5.3 and Qwen3.8-27B, so the strongest comparison model is also a teacher [S1]. MuSiQue and Honeypot are scored on test splits of Kolibri's own RL environments, which makes them in-distribution for Kolibri and not for the baselines (our reading) [S1].[^qa-15] The five Industry RAG sets are in-house and unpublished, each graded by its application's own judge; the judge is not named in Table 27, Section 3.3.1 or Appendix I.1.4, and two sets have 11 and 26 items [S1]. In Section 3.3 and Appendix I.1.4 we found no check of these judges against human labels.

**Efficiency.** Figure 1's quality–cost frontier uses vLLM on eight B200 GPUs in one node, FP8 weights and KV cache, the best parallel layout at concurrency near each model's KV limit, and contexts of 4k (base) or 16k (post-trained) [S1]. Throughput uses prompt-based bytes-per-token factors, and baselines are scored in BF16 but timed in FP8 [S1]. Appendix A reports no engine-only control row and does not say whether Kolibri ran with the `aleph-alpha-inference` vLLM plugin the card requires [S1][S2].

**Outside checks.** An independent researcher's account says that on nine abilities of the BEAM 100K tier (360 of 400 rows), Kolibri FP8 with thinking disabled scored 48.6 reading its own long window against 56.8 when given a 7K-token memory page, with Qwen3.8-27B at 71.1 on the same page; scoring used gemini-2.5-flash-lite over two draws, on one RTX PRO 6000 [S10].[^qa-16] Another account reports 86/100 on tool-eval-bench, with each of 69 scenarios run once [S11].[^qa-17]

> [!NOTE]
> **QA · Context.** QA's own searches on 2026-11-03 also found no evaluation of Kolibri-1 by Artificial Analysis, Epoch AI or LMArena. They turned up only secondary write-ups that repeat Aleph Alpha's numbers. Both outside accounts above are single-user forum posts.

## Critical assessment

**The design choice and its evidence are not separated.** Window and NoPE are bundled with sequence length, head count and the long-context recipe in the hybrid-versus-full comparison, and the window sweep moves active parameters with the window [S1]. The NoPE choice rests on one sentence about early experiments, with no figure or table [S1]. The nearest alternative, RoPE in the global layers with a large base as in Gemma 3 or with YaRN rescaling, has no arm in Section 2.1.3 or Appendix B.2, where the report's attention ablations sit [S1][S13]. The 1M comparison with Qwen3.5 contrasts two models, not two positional schemes (our reading).

**Base-model code scores are contaminated by the report's own account.** During pre-training 22% to 95% of HumanEval completions recite the reference solution, and the share is back at 48% in English by the end of mid-training [S1]. The report says "the HumanEval scores reflect this contamination"; the card prints the 86.7 English score without that caveat [S1][S2].[^qa-18]

**The documents disagree.** German share: 21.3% of pre-training tokens in the report and blog, 23.9% in the card and EU summary [S1][S2][S8][S9]. Tokenizer compression: 4.90 bytes per token in German and 4.58 in English in the report, 4.7 and 4.2 in the card [S1][S2]. Context: the card's summary table gives 1,048,576 tokens while its architecture table lists 262,144 as native and 1,048,576 as reached by extrapolation; the config sets `max_position_embeddings: 262144`, and serving beyond that needs a flag [S2][S3]. Comparing the card's tables with the report's row by row, AA-Omniscience cells differ for the three Qwen models (Qwen3.8's index is −5.8 in the card, −9.5 in the report), yet the card's Knowledge averages match the report's cells, not its own (our calculation) [S1][S2]. Industry RAG English averages differ by 0.1 in five cells, consistent with rounding of half-values; Kolibri Origin's long-context rows read "–" in the card and 0.0 in the report [S1][S2]. None of these changes the Overall ranking (our calculation).[^qa-19]

**Selection and noise.** The SFT soup was chosen on the benchmarks later reported, which the report itself calls optimistic [S1]. The aggregate leads of 0.8 and 1.0 points carry no interval, though Miller's methods, already behind the report's SFT intervals, cover two-model differences [S1][S16].[^qa-20]

**A self-reported problem.** The report notes that the first two MoE layers of the full run make almost no use of their routed experts, contrary to its proxy ablation [S1].

**Reproducibility.** FP8 weights, config and tokenizer are public; the LICENSE file is the unmodified Apache 2.0 text, but the card restricts the grant to the repository's weights and configuration files and excludes code, architecture and training methods [S2][S5]. The evaluation harness is public; for the training framework the card links a blog post rather than code, and neither the card nor the report links a release of the training data, Honeypot or the Industry RAG sets, which the report calls not publicly available [S1][S2]. The EU summary describes the data and names some public datasets [S8].[^qa-21]

> [!TIP]
> **QA · Partly reproducible.** Weights, config and tokenizer: [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) (FP8) and [Aleph-Alpha/Kolibri-1-BF16](https://huggingface.co/Aleph-Alpha/Kolibri-1-BF16) [S2][S17]. Serving with vLLM needs the [aleph-alpha-inference](https://github.com/Aleph-Alpha/aleph-alpha-inference) plugin, and contexts above 262,144 tokens need the `--hf-overrides` flag given in the card [S2]. The evaluation harness is [eval-framework](https://github.com/Aleph-Alpha-Research/eval-framework/) [S2]. The training code, the training data, Honeypot and the Industry RAG sets are not released [S1][S2].

## Connections

The Kolibri stack sits between two published hybrids: Gemma 3's 5:1 local–global pattern with RoPE in both layer types, and Yang et al.'s 3:1 RoPE-window and NoPE-global pattern [S12][S13]. Kolibri uses 4:1 and a 512-token window, smaller than either [S1][S12][S13]. Metrics, models and data differ across the three, so their RULER numbers are not comparable.

[Mistral Large 4 from its files](../published/2026-10-30-mistral-large-4-open-checkpoint-sparse-attention.md) examined another release that stretches a 512-token rotary window to 1M positions. [Checking MiniCPM5-2B's 53.9](../published/2026-10-31-minicpm5-2b-open-model-score-provenance.md) found a lead concentrated in rows scored in-house, the question we test here by dropping two categories. [Arkios](../published/2026-10-22-arkios-nepali-devanagari-tokenizer.md) also proposed a language-specific tokenizer change, and [Qwen3.8-Next's report](../published/2026-10-17-qwen3-8-next-gated-residual-stability.md) also trained with Muon.

## Open questions

- Does NoPE in the global layers matter at fixed sequence length and long-context recipe, or does the 256k training stage carry the 1M result?
- How large is run-to-run variance for the scale-L window comparison, where the decisive gap is one context length?
- Which figure, 21.3% or 23.9%, describes the German share, and over which token count?
- Does the forum account's finding, that a short memory page beats the model's own long window on conversational memory, replicate with other judges and hardware [S10]?

## Sources

S1. [Kolibri: A Sovereign European Model on the Pareto Frontier (Aleph Alpha technical report, 189 pp.)](https://aleph-alpha.com/downloads/tech-report.pdf) · technical-report · B · published 2026-10-03 · accessed 2026-11-03
S2. [Aleph-Alpha/Kolibri-1 (Hugging Face model card, README at commit 5bb7075)](https://huggingface.co/Aleph-Alpha/Kolibri-1) · lab-post · B · published 2026-10-03 · accessed 2026-11-03
S3. [Aleph-Alpha/Kolibri-1 config.json](https://huggingface.co/Aleph-Alpha/Kolibri-1/resolve/main/config.json) · code · B · published 2026-10-03 · accessed 2026-11-03
S4. [Aleph-Alpha/Kolibri-1 commit history on main (Hugging Face Hub API)](https://huggingface.co/api/models/Aleph-Alpha/Kolibri-1/commits/main) · code · B · published 2026-10-20 · accessed 2026-11-03
S5. [Aleph-Alpha/Kolibri-1 LICENSE file](https://huggingface.co/Aleph-Alpha/Kolibri-1/resolve/main/LICENSE) · code · B · published 2026-10-03 · accessed 2026-11-03
S6. [Aleph-Alpha/Kolibri-1 model metadata (Hugging Face Hub API: creation time, safetensors parameter counts by dtype)](https://huggingface.co/api/models/Aleph-Alpha/Kolibri-1) · code · B · published 2026-10-20 · accessed 2026-11-03
S7. [Aleph-Alpha/Kolibri-1 model.safetensors.index.json](https://huggingface.co/Aleph-Alpha/Kolibri-1/resolve/main/model.safetensors.index.json) · code · B · published 2026-10-03 · accessed 2026-11-03
S8. [Kolibri 1: Public Summary of Training Content for General-Purpose AI Models (EU AI Act template, version 1.0)](https://aleph-alpha.com/downloads/data-summary.pdf) · technical-report · B · published 2026-10-03 · accessed 2026-11-03
S9. [Kolibri has landed: a sovereign open-weight model (Aleph Alpha blog)](https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/) · lab-post · B · published 2026-10-03 · accessed 2026-11-03
S10. [[Evaluation Report] Kolibri-1 FP8 on one RTX PRO 6000 (96 GB): serving numbers, and BEAM 100K from its own 262K window vs a 7K-token memory page (Hugging Face discussion #10)](https://huggingface.co/Aleph-Alpha/Kolibri-1/discussions/10) · social · D · published 2026-10-08 · accessed 2026-11-03
S11. [tool-eval-bench results (Hugging Face discussion #4)](https://huggingface.co/Aleph-Alpha/Kolibri-1/discussions/4) · social · D · published 2026-10-04 · accessed 2026-11-03
S12. [Rope to Nope and Back Again: A New Hybrid Attention Strategy (arXiv 2501.18795v2)](https://arxiv.org/abs/2501.18795) · preprint · B · published 2025-10-22 · accessed 2026-11-03
S13. [Gemma 3 Technical Report (arXiv 2503.19786v1)](https://arxiv.org/abs/2503.19786) · technical-report · B · published 2025-03-25 · accessed 2026-11-03
S14. [The Impact of Positional Encoding on Length Generalization in Transformers (arXiv 2305.19466v2; NeurIPS 2023)](https://arxiv.org/abs/2305.19466) · preprint · B · published 2023-11-06 · accessed 2026-11-03
S15. [RULER: What's the Real Context Size of Your Long-Context Language Models? (arXiv 2404.06654v3; COLM 2024)](https://arxiv.org/abs/2404.06654) · preprint · B · published 2024-08-06 · accessed 2026-11-03
S16. [Adding Error Bars to Evals: A Statistical Approach to Language Model Evaluations (arXiv 2411.00640v1)](https://arxiv.org/abs/2411.00640) · preprint · B · published 2024-11-01 · accessed 2026-11-03
S17. [Aleph-Alpha/Kolibri-1-BF16 (Hugging Face model card, config.json and LICENSE)](https://huggingface.co/Aleph-Alpha/Kolibri-1-BF16) · lab-post · B · published 2026-10-02 · accessed 2026-11-03

## QA notes

[^qa-1]: **Verified** — Section 2.1 and Figure 4 of [S1] describe 40 sliding-window blocks over the 512 preceding tokens with RoPE (θ = 10,000) and 10 full-attention blocks without positional encoding. The `layer_types` list in [S3] places `full_attention` at every fifth position.
[^qa-2]: **Supported with caveat** — Figure 7 of [S1] confirms a FLOP-matched comparison at proxy scale M (0.6B active) and the 4k-versus-16k sequence-length difference. The report doesn't say how many runs back this comparison. It shows one curve per arm with no interval or repeat, so "one run per arm" is an inference from what the report omits, not something it states.
[^qa-3]: **Verified** — Overall (EN) row of Table 28 in [S1]: 75.5 for Kolibri, 74.7 for Qwen3.5 35B-A3B. No interval is given for the Overall rows in Tables 28–29 or Section 3.3. The card [S2] prints identical Overall rows.
[^qa-4]: **Verified** — Table 18 of [S1], also reproduced in [S2]. At 1M tokens Kolibri Base scores 63.2 against 58.5 and 57.5. At 128k it scores 67.9 against 87.8, 81.0 and 89.9 for the three other MoE base models scored there. Kolibri Origin and the 12B-active models have no 128k score.
[^qa-5]: **Verified** — QA searched the full text of [S1] for seed, single run, replicate, repeated and ±. Figure 51 (Appendix B.2) states that each QK-normalisation configuration is a single run from scratch, and Section 3.2 describes RL as a single training run. Repeated training runs appear only in the data-annotation ablation of Section 2.3 (1 to 5 seeds per arm) and in the 20 replicate SFTs behind the eval-noise model (Appendix D.2.2). The only other intervals in Appendix B are bootstraps over words in the tokeniser morphology table, not over training runs.
[^qa-6]: **Verified** — 21.3% "of the final pre-training tokens" appears in Section 2.3 of [S1] and in [S9]. About 23.9% (of the 20T pre-training tokens) appears in the card's training-data row [S2] and in [S8]. QA's web searches on 2026-11-03 for third-party evaluations found only secondary write-ups repeating vendor numbers, besides the two Hub threads [S10][S11].
[^qa-7]: **Verified** — 78.1B total and 3.46B active parameters (4.4%, embeddings excluded) and 24T training tokens appear in the abstract, Section 1 and Table 2 of [S1]. Section 1 names public administration, industry and aerospace as the target domains.
[^qa-8]: **Supported with caveat** — QA re-derived the count from [S3] and the tensor names in [S7]: four RMSNorms per block, per-head QK norms, untied embedding and output head. This gives 78,103,055,360 weights and 78,103,074,560 with expert biases, equal to the Hub safetensors total in [S6]. QA's active count also comes to 3,457,551,360. The card [S2] states an exact active count of 3,457,573,120, 21,760 higher, probably because it counts router or norm parameters differently. Both round to 3.46B.
[^qa-9]: **Verified** — The Figure 7 caption and Section 2.1.3 of [S1] give the setup: 14 heads, 4k versus 16k pre-training sequences, and a 5B-token long-context stage at 64k with YaRN versus 256k without RoPE extension. The text gives no numbers for this comparison. QA's search found no repeats or intervals in Section 2.1.3, Table 4 or Figures 7–8.
[^qa-10]: **Supported with caveat** — Section 2.1.3.1 of [S1] gives 48.0 and 47.8, 76.2 and 77.1, a largest absolute difference of 3.1 points through 128k, and w = 512 ahead by 6.7 points at 256k. The report doesn't say which window leads at the shorter lengths, so "in favour of 512" is confirmed only for the 256k gap. Table 4 values (34.9 to 35.8, 256 best; 0.6B to 1.2B active) match.
[^qa-11]: **Verified** — Table 17 and Section 2.4.2 of [S1] give Overall 81.1 and 81.5 for Kolibri Base, 83.1 and 85.0 for Nemotron 3 Super Base (12B active), and 73.8 and 76.6 for Qwen3.5 35B-A3B Base. Sampling is at temperature 0.6, top-p 0.6, up to 1,024 tokens, except Gemma 4, which uses its card's settings. The report describes the results as a comparison under one protocol rather than a reproduction.
[^qa-12]: **Verified** — Table 18 of [S1], with column labels confirmed in the card [S2]: Gemma 4 scores 87.8, Nemotron 3 Nano 81.0 and Qwen3.5 89.9 at 128k, and Nemotron 3 Nano 58.5 and Qwen3.5 57.5 at 1M. Section 2.4.3 states that Qwen3.5 is served with static YaRN at factor 4 and that Nemotron 3 Nano supports 1M tokens natively.
[^qa-13]: **Verified** — Tables 28–29 and Sections 3.3.1–3.3.2 of [S1] list twelve baselines, evaluated with eval-framework or Harbor and with Kolibri at reasoning effort high. Overall scores are 75.5 and 70.8 for Kolibri, 74.7 and 69.8 for Qwen3.5 35B-A3B, and 80.2 and 79.9 for Qwen3.8 27B. QA's recomputation from the category averages gives 75.475 and 70.825.
[^qa-14]: **Verified** — QA recomputed this from the category averages in Tables 28–29 of [S1]. Without the two retrieval categories, English is 72.8 against 71.9 and German 73.2 against 70.45, shown as 70.5. Because the table cells are already rounded, the German baseline figure could be 70.4 or 70.5. Section 3.3.3 says these benchmarks test the search that the retrieval environments train, and Table 27 lists the Industry RAG sets as in-house.
[^qa-15]: **Supported with caveat** — The Figure 44 caption of [S1] says MuSiQue and Honeypot are scored on the test splits of the two training environments. The report also says those test splits are excluded from SFT and RL training, and it decontaminates the training set against them (Table 27, Appendix I.1.4). "In-distribution" therefore refers to shared tasks and sources, not to leaked test items.
[^qa-16]: **Supported with caveat** — The thread [S10] reports 48.6, 56.8 and 71.1 on nine abilities (360 rows), scored by gemini-2.5-flash-lite averaged over two draws, with thinking disabled per request, on one RTX PRO 6000. Its author signs as an independent researcher. This is a D-grade forum post (unreviewed, one setup, not replicated), and its Qwen3.8-27B figure comes from the author's own preprint, which QA did not open.
[^qa-17]: **Supported with caveat** — The thread [S11] reports 86/100 over all 69 scenarios at temperature 0 with seed 42 and one result per scenario. The thread itself notes that a single trial is not a calibrated estimate. This is a D-grade forum post.
[^qa-18]: **Verified** — Section 2.3.3 of [S1] gives 22% to 95% recitation during pre-training and 48% (EN) and 47% (DE) at the end of mid-training, and the quoted sentence appears verbatim. The card's base-model table [S2] lists HumanEval (EN) 86.7, and QA's search of the card found no recitation or contamination note attached to it.
[^qa-19]: **Supported with caveat** — Each difference listed checks out: 21.3% versus 23.9% ([S1][S9] versus [S2][S8]), 4.90 and 4.58 versus 4.7 and 4.2 bytes per token, the card's 1,048,576 summary row against its 262,144-native architecture row, `max_position_embeddings: 262144` in [S3], and the `--hf-overrides` flag in [S2]. QA's cell-by-cell comparison also found differences the post doesn't list: Kolibri Origin's AA-Omniscience Index (−64.0 in the report, −64.2 in the card) and one German Industry RAG average (46.1 versus 46.2). The Overall rows are identical in both documents, so the ranking is unchanged. The card doesn't name the corpus behind its 4.7 and 4.2 figures.
[^qa-20]: **Verified** — Section 3.1.4.3 of [S1] says the C1+C2 soup was chosen on a 12-benchmark mean (including AIME, GPQA Diamond, IFBench and LiveCodeBench) that overlaps Tables 28–29. That soup became the released SFT checkpoint, and the report calls its scores optimistic. Section 2.3.3 and Appendix D.2.2 use Miller's standard errors, and [S16] gives formulas for differences between two models.
[^qa-21]: **Verified** — The repository file list in [S6] includes the weights, `config.json`, `tokenizer.json` and `tokenizer_config.json`. QA diffed the LICENSE [S5] against the canonical Apache 2.0 text and it matches. The card's "License and terms" section [S2] limits the grant to the repository's weights and configuration files. The card links eval-framework on GitHub, but its Savanna link goes to a blog post. Appendix I.1.4 of [S1] says the Industry RAG sets are not publicly available.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
