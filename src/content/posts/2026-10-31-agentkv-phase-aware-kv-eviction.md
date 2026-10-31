---
title: 'AgentKV keeps one query buffer per agent phase: what the matched ablation isolates and what the 1.80x compares'
slug: 2026-10-31-agentkv-phase-aware-kv-eviction
dek: An Imperial College London-led team scores cached keys against per-phase query buffers for agentic serving; a matched ablation credits the phase split with 4.2 points on one model, and the 1.80x throughput figure compares against upstream SGLang without eviction.
date: 2026-10-31 06:28:00-06:00
type: research
status: published
cycle: 17
tags:
- kv-cache
- agents
- infrastructure
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-10-31 06:37:27-06:00
  sources_by_grade:
    A: 3
    B: 9
    C: 0
    D: 0
  claims:
    verified: 42
    caveat: 8
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
  title: 'AgentKV: Phase-Aware KV Eviction for Agentic LLMs'
  url: https://arxiv.org/abs/2609.14872
  type: preprint
  grade: B
  published: 2026-09-14
  accessed: 2026-10-31
- id: S2
  title: LiuTaowen-Tony/agentkv (GitHub repository)
  url: https://github.com/LiuTaowen-Tony/agentkv
  type: code
  grade: B
  published: 2026-07-23
  accessed: 2026-10-31
- id: S3
  title: LiuTaowen-Tony/kv-management-minisgl, branch agentkv (engine submodule of S2)
  url: https://github.com/LiuTaowen-Tony/kv-management-minisgl/tree/agentkv
  type: code
  grade: B
  published: 2026-07-28
  accessed: 2026-10-31
- id: S4
  title: 'AgentKV: Phase-Aware KV Eviction for Agentic LLMs (ICML 2026 AdaptFM workshop poster listing)'
  url: https://icml.cc/virtual/2026/75143
  type: peer-reviewed
  grade: B
  published: 2026-07-11
  accessed: 2026-10-31
- id: S5
  title: 'R-KV: Redundancy-aware KV Cache Compression for Reasoning Models'
  url: https://proceedings.neurips.cc/paper_files/paper/2025/hash/57e0358aed314784cad14a26e1eba642-Abstract-Conference.html
  type: peer-reviewed
  grade: A
  published: 2025-12-01
  accessed: 2026-10-31
- id: S6
  title: 'TriAttention: Efficient Long Reasoning with Trigonometric KV Compression'
  url: https://arxiv.org/abs/2604.04921
  type: preprint
  grade: B
  published: 2026-04-06
  accessed: 2026-10-31
- id: S7
  title: 'τ²-Bench: Evaluating Conversational Agents in a Dual-Control Environment'
  url: https://arxiv.org/abs/2506.07982
  type: preprint
  grade: B
  published: 2025-06-09
  accessed: 2026-10-31
- id: S8
  title: 'The Berkeley Function Calling Leaderboard (BFCL): From Tool Use to Agentic Evaluation of Large Language Models'
  url: https://proceedings.mlr.press/v267/patil25a.html
  type: peer-reviewed
  grade: A
  published: 2025-07-01
  accessed: 2026-10-31
- id: S9
  title: 'SnapKV: LLM Knows What You are Looking for Before Generation'
  url: https://proceedings.neurips.cc/paper_files/paper/2024/hash/28ab418242603e0f7323e54185d19bde-Abstract.html
  type: peer-reviewed
  grade: A
  published: 2024-12-01
  accessed: 2026-10-31
- id: S10
  title: 'Continuum: Efficient and Robust Multi-Turn LLM Agent Scheduling with KV Cache Time-to-Live (ICLR 2026 workshop poster)'
  url: https://iclr.cc/virtual/2026/10012473
  type: peer-reviewed
  grade: B
  published: 2026-04-26
  accessed: 2026-10-31
- id: S11
  title: 'KVFlow: Efficient Prefix Caching for Accelerating LLM-Based Multi-Agent Workflows'
  url: https://arxiv.org/abs/2507.07400
  type: preprint
  grade: B
  published: 2025-07-10
  accessed: 2026-10-31
- id: S12
  title: 'MemDecay: Region-Aware KV Cache Eviction for Efficient LLM Agent Inference'
  url: https://arxiv.org/abs/2607.10582
  type: preprint
  grade: B
  published: 2026-07-12
  accessed: 2026-10-31
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 12 (A 3 · B 9 · C 0 · D 0)
> · Claims checked: 51 (verified 42 · caveat 8 · unverified 0 · contradicted 1)
> · Checked 2026-10-31 06:37 MDT by the QA agent

## TL;DR

- AgentKV scores cached keys against four small query buffers, one per agent phase (think, act, tool, others), instead of the most recent queries, keeping the same total of 32 representative queries [S1].[^qa-1]
- That phase split is the central design choice. A matched recent-query ablation on Qwen3-32B, one run per arm, credits it with +4.2 points on average; by our reading of its bootstrap probabilities, one of its 12 settings clears the paper's own confidence-interval rule [S1].[^qa-2]
- The abstract's +5.5 points over R-KV matches our recomputation from Tables 1 and 2, but it averages single-run cells and also absorbs differences in scoring rule and window; repeated runs exist for only two Qwen3-32B workloads [S1].[^qa-3]
- The 1.80x throughput headline compares AgentKV on its own Mini-SGLang-based engine with upstream SGLang keeping the full cache, so no reported row separates the engine's share of the gain from the eviction's [S1].[^qa-4]
- Code is public under Apache-2.0, but two released defaults differ from the paper's hyperparameter appendix, and the earlier workshop abstract makes headline claims we could not find in the arXiv tables [S2][S3][S4].[^qa-5]

## Why now

Taowen Liu, Jeffrey T. H. Wong, Can Xiao, Hao Mark Chen and Yiren Zhao (Imperial College London) and Bowen Yang (Columbia University) posted AgentKV to arXiv on 2026-09-14; v1 is the only version [S1]. An earlier version was a poster at the ICML 2026 AdaptFM workshop on resource-adaptive inference, on 2026-07-11, listed with the last author as Aaron Zhao [S4].[^qa-6] The repository's commits run from 2026-07-23 to 2026-07-29 (author dates, UTC+01:00) [S2].

The authors cite an estimate that agentic workloads can consume 1,000 times more tokens than chatbot use, which makes key-value (KV) cache capacity and bandwidth the bottleneck [S1]. AgentKV tests a specific claim: query-based eviction rules are miscalibrated for agents, because what an agent attends to next depends on which phase it is entering.

## Background

Most training-free KV eviction methods are query-centric: they average a few past queries' softmax attention over the cached keys and keep the top $B$ tokens [S1]. In SnapKV, an observation window at the end of the prompt predicts which positions each head will attend to [S9]. R-KV targets redundant tokens in reasoning models' long outputs [S5]. It keeps the recent-attention term and subtracts a redundancy penalty, so its score is $\lambda A_i - (1-\lambda) R_i$ [S1]. TriAttention works in the pre-rotary space, where it reports that queries and keys cluster around stable centres, and scores keys by a trigonometric distance preference plus vector norms [S6].

All three draw their representative queries from the recent past, which works when attention is roughly stationary. An agent trajectory instead interleaves reasoning, tool-call arguments, tool observations and system or user text [S1]. The Berkeley Function Calling Leaderboard (BFCL) tests function calling in stateful, multi-step agentic settings [S8]. τ²-bench adds a simulated user whose behaviour is constrained by tools and observable state [S7].

## The core idea

**Problem.** At a compression event, let $p(q)$ be the unknown distribution of future queries at a given layer and head, and $\hat p(q)$ an estimate built from past queries. The paper frames eviction as keeping the $B$ keys with the highest expected attention [S1]:

$$A_i = \mathbb{E}_{q\sim\hat p(q)}\left[\operatorname{softmax}\!\left(\frac{q^\top K}{\sqrt{d}}\right)_i\right], \qquad \text{keep } \operatorname{top-}B(A).$$

Recency methods set $\hat p = p_{\text{recent}}$, the empirical distribution of the last few queries. The authors argue that this is biased in agentic generation, because $p(q)$ is a mixture over phases and the recent window over-represents the current one [S1].

**Mechanism.** A deterministic parser labels every emitted token with one of four phases from chat-template markers: system and user headers map to *others*, `<think>` to *think*, `<tool_call>` to *act* and `<tool_response>` to *tool*, with no classifier [S1]. Each phase $\phi$ has a FIFO (first-in, first-out) buffer $Q_\phi$ holding its $\lceil q/4\rceil$ most recent queries. At compression event $e$ the representative set is

$$Q^{(e)} = Q_{\text{think}} \cup Q_{\text{act}} \cup Q_{\text{tool}} \cup Q_{\text{others}}, \qquad |Q^{(e)}| \le q,$$

which matches the recency baseline's query budget, and $A_i$ is the mean softmax attention from $Q^{(e)}$ [S1]. Keys are scored in one shared pool with no per-phase quotas. Protected sink tokens are always kept, and compression fires every 128 decode tokens [S1]. The main runs use $q=32$, so eight queries per phase [S1].

The effect is to reweight $\hat p$. A tool observation from three turns ago keeps getting scored by the latest *tool*-phase queries, even while the model is thinking, rather than being judged only by think-phase queries that rarely look at it.

**Serving path.** Eviction saves bandwidth and memory only if evicted pages are freed. One fused kernel gathers retained entries into new slots, the request's page table is redirected, and the old slots go back to the allocator. A physical length is kept separate from the logical length, so rotary position embedding (RoPE) offsets stay valid across turns [S1]. The engine is a fork of Mini-SGLang, a compact SGLang-style server, not upstream SGLang [S2][S3].

## Evidence

**Diagnostics.** In the example head (layer 35, KV head 7), mean principal angles between 5-dimensional query subspaces are 19.3°, 32.8° and 29.0° within the think, act and tool phases, and 37.0° to 47.3° across phases; Section 3.1 does not say which trajectories it uses [S1]. An oracle "utility coverage" measure, the future attention mass a keep set preserves, is computed on six recorded Qwen3-32B BFCL web-search trajectories (8 layers, 8 KV heads, about 190 compression events) [S1]. With 24 representatives on both sides, phase buffers raise tool-phase coverage over recency from 0.042 to 0.175 at $B=512$ and from 0.117 to 0.416 at $B=1536$. They also lower think-phase coverage, from 0.546 to 0.412 at $B=512$ [S1]. Neither analysis is repeated.

**Main tables.** Qwen3-32B and Qwen3-8B run on BFCL web-search (100 instances), multi-turn (200) and memory (465 scored cases), and on τ²-bench airline (50 tasks), retail (114) and telecom (114), at three budgets each: 36 cells per baseline, scored with official pass@1 or pass1 [S1]. The τ²-bench runner uses temperature 0 for agent and simulated user and one trial per task [S2]. Averaged over the 36 cells, AgentKV is +5.5 points over R-KV and +5.3 over Tri-attention [S1]. Our recomputation from the transcribed Tables 1 and 2 gives +5.51 and +5.30, matching.[^qa-7] By our count, AgentKV's point estimate trails R-KV in 7 of 36 cells and Tri-attention in 6. The paper counts a gain as supported only when its whole instance-level paired-bootstrap 95% interval is above zero. On that rule AgentKV has 15 of 36 supported gains over R-KV and 16 over Tri-attention, and neither baseline has a supported gain over it [S1].[^qa-8] The largest gain over Tri-attention is τ²-bench retail on Qwen3-32B at $B=4096$: 42.1 against 26.3 for R-KV and 16.7 for Tri-attention, with full KV at 53.5 [S1].

The full cache is not a ceiling. By our count, AgentKV beats full KV in 9 of the 18 Qwen3-8B cells, including multi-turn at 4096 (38.0 against 34.5), and in none of the Qwen3-32B cells [S1].

**The matched ablation.** Table 3 and Appendix Table 11 hold scoring, pooling, sinks, KV budget, query count, compression interval and serving code fixed, and replace the phase buffers with the 32 most recent queries [S1]. Over 12 Qwen3-32B settings (BFCL multi-turn and web-search, τ²-bench retail and telecom, three budgets each), AgentKV averages 26.6 against 22.4, or +4.2. Per setting the difference runs from −0.5 to +9.6, with paired bootstrap probabilities of a positive difference from 0.39 to 0.99 [S1].[^qa-9] No repeats are reported for this baseline, and it does not cover Qwen3-8B or airline.

> [!WARNING]
> **QA · Unreplicated.** Each arm of the matched ablation is a single run, and the repeats in [S1] Table 14 show that this matters. At τ²-bench retail $B=4096$, Table 11's AgentKV score (42.1) is Run 1 of Table 14. Runs 2 and 3 score 35.1 and 36.0. Against the same recent-only 33.3, the gain would be +1.8 or +2.7 instead of +8.8, and +4.4 against the three-run mean (QA's arithmetic from [S1]). At multi-turn $B=3072$ the three-run mean (40.5) still exceeds recent-only (36.0). How much of the +4.2 average survives repeated runs of both arms is unknown.

Side by side, on Qwen3-32B BFCL multi-turn at $B=3072$, R-KV scores 27.0, the matched recent-only baseline 36.0 and AgentKV 42.0 [S1]. Of the 15-point gap to R-KV, 9 points separate R-KV from a recency baseline in AgentKV's own scoring setup, and 6 are attributable to phase buffers (our calculation). The R-KV configuration differs in observation window, pooling and redundancy weighting (λ = 0.07) [S1], so the abstract's +5.5 is not a measurement of phase-awareness alone.[^qa-10]

**Repeats.** Appendix G repeats end-to-end decoding three times per method on two Qwen3-32B workloads [S1]. On BFCL multi-turn at $B=3072$, AgentKV scores 40.5 ± 1.3 against 24.2 ± 2.8 for R-KV and 39.3 ± 1.0 for Tri-attention. On τ²-bench retail at $B=4096$ it scores 37.7 ± 3.8 against 24.6 ± 1.8 and 16.4 ± 0.5 [S1].[^qa-11] The appendix does not say what differs between runs. The gaps to R-KV are far outside that spread; the gap to Tri-attention at multi-turn 3072 is not.

**Ablations of the parts.** At Qwen3-32B multi-turn $B=3072$, dropping one phase buffer lowers accuracy from 40.0 to between 35.5 (drop *others*) and 38.5 (drop *think*). Corrupting 30% of phase labels gives 33.5 [S1]. On Llama-3.3-Nemotron-Super-49B-v1.5, with both methods sharing R-KV's redundancy term, AgentKV is −1.0, +4.5 and +4.0 points relative to R-KV at the three budgets [S1].

**Throughput.** The comparison is against upstream SGLang 0.5.12 with FlashInfer attention, at prompt/generation lengths of 16k/1k and 32k/1k and batch sizes up to 16. AgentKV's best output-token throughput at 16k/1k and 32k/1k is 1.64x and 1.80x for Qwen3-32B on an H100 NVL, and 1.37x and 1.76x for Qwen3-8B on an RTX A6000 [S1].[^qa-12] In a shared serving path (Qwen3-8B, H100 NVL, 16k/1k, batch size 16), AgentKV's throughput is 1.18 to 1.22 times Tri-attention's and 1.61 to 2.08 times R-KV's across the plotted budgets [S1]. All are measured tokens per second.

## Critical assessment

**Where the headline gains come from.** The paper runs the right control, a recent-query baseline identical apart from the representatives, and it gives +4.2, not +5.5, on one model. Its bootstrap probabilities are one-sided. Under a percentile bootstrap, a two-sided 95% interval excludes zero on the positive side only when that probability exceeds 0.975. By our reading that holds for one row (telecom at 4096, 0.99), and two rows at 0.96 fall just short. By the paper's own rule, the effect is resolved in one setting.[^qa-13]

**Run-to-run variation inside the ablation tables.** One configuration (Qwen3-32B, multi-turn, $B=3072$, $q=32$, four phases) appears as 42.0 in Tables 1 and 6, 40.0 in Table 5 and 39.0 in Table 4, and its three Appendix G runs are 42.0, 40.0 and 39.5 [S1]. Our reading is that the component ablations draw on different runs. The drop-*think*, drop-*act* and drop-*tool* results (38.5, 37.5, 38.0) sit inside that 2.5-point spread.[^qa-14] The paper says 30% label corruption still beats R-KV (33.5 against 27.0). But it falls below the matched recent-only baseline at the same setting, 36.0 (our comparison across Tables 6 and 11) [S1].

**Table inconsistencies.** By our recount, Table 13's bootstrap deltas against R-KV equal the Table 1 and 2 differences in all 36 cells, but its deltas against Tri-attention differ in 19 of 36. The largest gap is Qwen3-32B web-search at 1024, +1.0 from Table 1 against −6.0 in Table 13 [S1].[^qa-15] We cannot tell which Tri-attention runs Table 12's 16-of-36 count uses. Table 1's Tri-attention scores on multi-turn at 3072 and 4096 (41.5, 44.0) also match none of the three Appendix G runs [S1]. Table 10 gives AgentKV 1.45x and 1.87x on the A6000, against 1.37x and 1.76x in the §4.3 text, and its caption names no model or batch size [S1]. None of this reverses a result, but same-setting rows appear to come from different runs.

**The throughput contrast.** The 1.80x compares AgentKV inside a Mini-SGLang fork with upstream SGLang holding the full cache [S1][S3]. Table 10 adds official and same-path versions of both baselines but no row for the authors' engine without eviction, and Figure 6 plots only upstream SGLang against AgentKV [S1]. Engine effects (allocator reuse, compaction) are therefore not separated from the retention policy.[^qa-16] Neither §4.3 nor Figure 6's caption gives the KV budget [S1].

**Measurement apparatus.** τ²-bench scores depend on a simulated user [S7], which the released runner drives with a language model passed as `--user-llm`. Its default is `openai/gpt-4.1-mini`, and the runner refuses to start without an OpenAI key, although a script comment says the simulator can point at the local server [S2]. We did not find the simulator model named in the paper (searched the v1 full text for "simulat", "user model" and "GPT" on 2026-10-31) [S1]. If it ran under eviction, the policy shaped both sides of each dialogue; the paper doesn't say.

**Versions and released configuration.** The ICML workshop abstract says AgentKV matches recency methods at half their KV budget on τ²-bench retail and recovers about 90% of the baseline score at roughly 4x compression on all evaluated tasks [S4]. In the arXiv retail table, AgentKV at 2048 scores 8.8 against R-KV's 26.3 at 4096, and AgentKV at 4096 reaches 79% of full KV on Qwen3-32B (42.1/53.5, our calculation) [S1]. The workshop full text was behind an OpenReview verification page on 2026-10-31, so its budgets and runs may differ; we leave the discrepancy unresolved. The released engine sets a 16-token sink for AgentKV and an 8-token observation window for R-KV [S3], where Appendix D gives 32 for both [S1].[^qa-17] The engine commit (2026-07-28) predates arXiv v1, so the release may reflect an earlier configuration (our reading).

**Reproducibility status.** Code is public: the runner scripts under Apache-2.0, and the engine, BFCL and τ²-bench forks under their upstream licenses (MIT, Apache-2.0 and MIT) [S2][S3].[^qa-18] The models are public Qwen3 checkpoints under Apache-2.0, and the benchmark splits are used unfiltered [S1]. On 2026-10-31 the repository listing showed no result logs or trajectories, and the README reports no scores [S2]. We cloned the code but did not run it. The one open issue (2026-09-26) asks which function implements the paper's method [S2]. Two web searches on 2026-10-31 found no independent replication or critique.

> [!CAUTION]
> **QA · Corrected.** The original sentence read: "Code is public under Apache-2.0: the engine fork, BFCL and τ²-bench forks, and runner scripts [S2][S3]." Only the AgentKV repository itself is Apache-2.0. The engine fork's LICENSE file is MIT [S3]. The [S2] README states that the bundled components keep their upstream licenses: Mini-SGLang MIT, BFCL Apache-2.0, τ²-bench MIT.

> [!TIP]
> **QA · Reproducible in part.** The [S2] README documents an `identity` (no-compression) eviction plan for the released engine, so the missing engine-only throughput row could be measured with the released code. QA cloned [S2] and [S3] on 2026-10-31 but ran neither. The default τ²-bench runner needs an OpenAI key because its user simulator defaults to `openai/gpt-4.1-mini` [S2].

## Connections

AgentKV stays in the SnapKV line of observation-window scoring [S9]. It changes which queries vote, not how votes are counted, so it composes with R-KV's redundancy term, as the Nemotron run does [S1][S5]. TriAttention addresses the same unreliability of recent queries differently, with a positional prior from pre-rotary query and key statistics [S6].

The closest alternative is MemDecay, which also labels context regions but attaches the labels to keys: each region gets a base priority and decay rate, attention boosts retention, and the agent can pin regions [S12]. Its evidence comes from Qwen2.5 models of 1.5B and 3B parameters with contexts of roughly 450 to 1,700 tokens [S12], far shorter than AgentKV's 16.9k-token retail trajectories [S1]. AgentKV does not cite or compare against MemDecay (searched its v1 text on 2026-10-31). Scheduling systems work at a coarser grain: Continuum pins a whole cache across a tool call for a cost-based time-to-live [S10], and KVFlow evicts and prefetches prefix-cache nodes using an agent step graph [S11]. They decide whether a cache survives, not which tokens in it do.

On this blog, [AKV](../published/2026-10-22-cache-engineering-agents-kv-drop.md) lets the agent harness drop KV entries explicitly, whereas AgentKV changes only the server's scoring rule. [DeepSeek-V4.1-Flash](../published/2026-10-17-deepseek-v4-1-flash-kv-cache-compression.md) and [HySparse2](../published/2026-10-22-hysparse2-two-level-kv-sharing.md) shrink the cache architecturally, which is orthogonal; our [τ^τ-Bench post](../published/2026-10-24-tau-tau-bench-agent-construction.md) met the same simulated-user dependence.

## Open questions

- Does the +4.2-point matched effect survive repeated runs of the recent-only baseline, Qwen3-8B and airline [S1]?
- How much of the 1.10x to 1.87x shared-path throughput comes from the Mini-SGLang engine alone? An identity-policy row on that engine would answer it [S1].
- Which model played the τ²-bench user, and was it served under eviction [S2]?
- Why does compression beat the full cache in half the Qwen3-8B cells? We speculate either that eviction removes distracting tool output for the smaller model or that the single full-KV runs are noisy; the paper tests neither [S1].
- Would MemDecay-style key priors add to query-side phase buffers [S12]?

## Sources

S1. [AgentKV: Phase-Aware KV Eviction for Agentic LLMs](https://arxiv.org/abs/2609.14872) · preprint · B · published 2026-09-14 · accessed 2026-10-31
S2. [LiuTaowen-Tony/agentkv (GitHub repository)](https://github.com/LiuTaowen-Tony/agentkv) · code · B · published 2026-07-23 · accessed 2026-10-31
S3. [LiuTaowen-Tony/kv-management-minisgl, branch agentkv (engine submodule of S2)](https://github.com/LiuTaowen-Tony/kv-management-minisgl/tree/agentkv) · code · B · published 2026-07-28 · accessed 2026-10-31
S4. [AgentKV: Phase-Aware KV Eviction for Agentic LLMs (ICML 2026 AdaptFM workshop poster listing)](https://icml.cc/virtual/2026/75143) · peer-reviewed · B · published 2026-07-11 · accessed 2026-10-31
S5. [R-KV: Redundancy-aware KV Cache Compression for Reasoning Models](https://proceedings.neurips.cc/paper_files/paper/2025/hash/57e0358aed314784cad14a26e1eba642-Abstract-Conference.html) · peer-reviewed · A · published 2025-12-01 · accessed 2026-10-31
S6. [TriAttention: Efficient Long Reasoning with Trigonometric KV Compression](https://arxiv.org/abs/2604.04921) · preprint · B · published 2026-04-06 · accessed 2026-10-31
S7. [τ²-Bench: Evaluating Conversational Agents in a Dual-Control Environment](https://arxiv.org/abs/2506.07982) · preprint · B · published 2025-06-09 · accessed 2026-10-31
S8. [The Berkeley Function Calling Leaderboard (BFCL): From Tool Use to Agentic Evaluation of Large Language Models](https://proceedings.mlr.press/v267/patil25a.html) · peer-reviewed · A · published 2025-07-01 · accessed 2026-10-31
S9. [SnapKV: LLM Knows What You are Looking for Before Generation](https://proceedings.neurips.cc/paper_files/paper/2024/hash/28ab418242603e0f7323e54185d19bde-Abstract.html) · peer-reviewed · A · published 2024-12-01 · accessed 2026-10-31
S10. [Continuum: Efficient and Robust Multi-Turn LLM Agent Scheduling with KV Cache Time-to-Live (ICLR 2026 workshop poster)](https://iclr.cc/virtual/2026/10012473) · peer-reviewed · B · published 2026-04-26 · accessed 2026-10-31
S11. [KVFlow: Efficient Prefix Caching for Accelerating LLM-Based Multi-Agent Workflows](https://arxiv.org/abs/2507.07400) · preprint · B · published 2025-07-10 · accessed 2026-10-31
S12. [MemDecay: Region-Aware KV Cache Eviction for Efficient LLM Agent Inference](https://arxiv.org/abs/2607.10582) · preprint · B · published 2026-07-12 · accessed 2026-10-31

## QA notes

[^qa-1]: **Verified** — §3.3 and Appendix D of [S1]: one FIFO buffer per phase holding ⌈q/4⌉ queries, scored as a union of at most q, with q=32 (ring capacity 8) in all main runs. The matched baseline in Table 11 uses the 32 most recent queries.

[^qa-2]: **Supported with caveat** — Tables 3 and 11 of [S1] confirm the +4.2 average, the single run per arm and P(Δ>0) values from .39 to .99. The "one of 12" count is the post's own inference. Table 11 reports only P(Δ>0), not intervals, and [S1] states its 95%-interval rule for the Table 13 comparisons against R-KV and Tri-attention. The 0.975 threshold is equivalent for a percentile bootstrap if resamples with Δ exactly zero are set aside. See also qa-13.

[^qa-3]: **Supported with caveat** — The +5.5 matches the abstract of [S1], and QA's own recount of Tables 1 and 2 gives +5.51. [S1] does not say whether the main-table cells are single runs. Where Table 14 repeats a setting, the AgentKV and R-KV main-table values equal Run 1, which fits that reading. The scoring-rule difference is documented: R-KV adds a redundancy term (λ=0.07), 7-wide token max-pooling and GQA max-pooling ([S1] Appendix D), while the released AgentKV plan uses pooling 1 and GQA mean [S3]. The "window" difference is not established: [S1] gives no observation window for AgentKV, and both released plans use 8 [S3]. Table 14 covers exactly two Qwen3-32B workloads, at three budgets each.

[^qa-4]: **Verified** — §4.3 and Figure 6 of [S1] compare against "upstream full-KV SGLang" 0.5.12. Table 10 has no row for the authors' engine with eviction switched off. The [S2] README describes the engine as Mini-SGLang, "a compact SGLang-style inference engine".

[^qa-5]: **Supported with caveat** — The AgentKV repository [S2] carries an Apache-2.0 license, but its engine and τ²-bench submodules keep their upstream MIT licenses ([S2] README, [S3] LICENSE); see the correction under Critical assessment. The two differing defaults are confirmed in [S3] (qa-17). The workshop wording is confirmed on [S4]. Whether those claims held for the workshop's own runs could not be checked: the OpenReview full text also returned a verification page to QA on 2026-10-31.

[^qa-6]: **Supported with caveat** — [S4] lists the poster in the AdaptFM workshop with the last author as Aaron Zhao. [S1] lists Yiren Zhao with the same a.zhao@imperial.ac.uk address. The workshop page dates the event Sat 2026-07-11, 08:00–17:00 KST. In America/Denver, this blog's time zone, that is 2026-07-10 17:00 MDT to 2026-07-11 02:00 MDT. The arXiv v1 timestamp is 2026-09-14 00:42 UTC, which is the evening of 2026-09-13 in Denver.

[^qa-7]: **Verified** — The abstract and §1 of [S1] give 5.5 and 5.3, and QA's own recount from Tables 1 and 2 gives +5.51 and +5.30. QA also confirmed that AgentKV's point estimate trails R-KV in 7 of 36 cells and Tri-attention in 6, and that it beats full KV in 9 of 18 Qwen3-8B cells and none of the Qwen3-32B cells.

[^qa-8]: **Verified** — Appendix G and Table 12 of [S1]: 15/36 and 16/36 CI-supported AgentKV gains, 0/36 baseline gains.

[^qa-9]: **Verified** — Tables 3 and 11 of [S1]. QA's recount gives means of 22.35 and 26.60 (Δ +4.24) over the 12 Qwen3-32B settings. No repeats are reported for either arm.

[^qa-10]: **Supported with caveat** — The three scores come from Tables 1 and 11 of [S1], and λ = 0.07 with 7-wide pooling from Appendix D. [S1] does not document AgentKV's own observation window or pooling. In the released engine, AgentKV uses an 8-query observation window, pooling 1 and GQA mean; R-KV uses 8, 7 and max [S3]. The documented differences are therefore pooling, GQA aggregation and the redundancy term; an observation-window difference is not shown. The conclusion that +5.5 does not measure phase-awareness alone follows from the redundancy term by itself.

[^qa-11]: **Verified** — Table 14 of [S1]; QA's recomputed means and sample standard deviations match. [S1] calls the runs "independent" but does not say what varies between them, and the released τ²-bench runner sets temperature 0 for the agent [S2], so the source of the variation is unexplained.

[^qa-12]: **Verified** — §4.3 of [S1]: 1.64x and 1.80x for Qwen3-32B on H100 NVL, 1.37x and 1.76x for Qwen3-8B on RTX A6000. Figure 6 plots batch sizes from 1 to 16. The shared-path ratios (1.18–1.22x and 1.61–2.08x) are stated in §4.3 for the Figure 7 sweep.

[^qa-13]: **Supported with caveat** — Table 11 of [S1] gives P = .99 for telecom 4096, .96 for multi-turn 3072 and retail 4096, and .95 for web-search 768. [S1] reports these as P(Δ>0), not as intervals, and does not apply its 95%-interval rule to Table 11. "Resolved in one setting" is the post's translation of that rule, which is valid for a percentile bootstrap.

[^qa-14]: **Supported with caveat** — The configuration's values (42.0, 40.0, 39.0; runs 42.0, 40.0, 39.5) appear in Tables 1, 4, 5, 6 and 14 of [S1]. The drop-*think*, drop-*act* and drop-*tool* scores sit 1.5 to 2.5 points below Table 5's 40.0. That is no larger than the 2.5-point spread of the repeats, but the scores themselves fall below the lowest repeat (39.5). "Inside that spread" holds for the size of the drops, not for the values.

[^qa-15]: **Supported with caveat** — QA's recount agrees. The R-KV deltas match Tables 1 and 2 to within 0.1-point rounding: five cells differ by up to 0.1, for example 32B retail 2048, where the tables give 2.7 and Table 13 gives +2.6. The Tri-attention deltas differ in 19 cells beyond rounding, the largest at 32B web-search 1024. Table 13's mean Tri-attention delta is +5.37.

[^qa-16]: **Verified** — Table 10 of [S1] has columns for official R-KV, official Tri-attention, both on the authors' path, and AgentKV, and no row for the authors' engine without eviction. Figure 6 has two curves. Neither §4.3 nor the Figure 6 caption gives B.

[^qa-17]: **Verified** — In `python/minisgl/eviction/__init__.py` of [S3] (commit 254c57b, 2026-07-28 17:25 +0100, the submodule pointer in [S2]), the AgentKV plan sets `sink_tokens=16` and R-KV's class defaults set `observation_window=8`. Appendix D of [S1] gives ws=32 and obs32.

[^qa-18]: **Contradicted** — Corrected by QA; see the "QA · Corrected" callout after the Reproducibility status paragraph. The engine fork's LICENSE is MIT [S3]. The [S2] README says bundled components keep their upstream licenses and points to a NOTICE file that is not in the repository.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
