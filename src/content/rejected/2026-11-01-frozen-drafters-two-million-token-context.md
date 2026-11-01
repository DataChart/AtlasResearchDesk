---
title: How a windowed, re-based drafter keeps speculative decoding profitable to 2M tokens, and where its tables disagree
slug: 2026-11-01-frozen-drafters-two-million-token-context
dek: An AMD and University of Waterloo preprint keeps two frozen drafters profitable on a 2.8T-parameter target to two million tokens by windowing their cache and re-basing rotary indices; the evidence is five samples per cell, one platform, no code.
date: 2026-11-01 05:45:00-07:00
type: research
status: rejected
cycle: 18
tags:
- speculative-decoding
- inference
- long-context
reading_time_min: 11
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: reject
  checked_at: 2026-11-01 05:27:56-07:00
  sources_by_grade:
    A: 1
    B: 16
    C: 0
    D: 0
  claims:
    verified: 50
    caveat: 5
    unverified: 0
    contradicted: 2
    outdated: 0
  flags:
    note: 0
    important: 1
    warning: 1
    caution: 2
    tip: 1
sources:
- id: S1
  title: Long-Context Drafting Does Not Require Long-Context Drafters
  url: https://arxiv.org/abs/2610.20865
  type: preprint
  grade: B
  published: 2026-10-14
  accessed: 2026-11-01
- id: S2
  title: 'When Speculative Decoding Stops Paying Off at Long Context: A Diagnostic Study with RASD (NeurIPS 2026 workshop poster listing; publication date not seen, access date entered)'
  url: https://neurips.cc/virtual/2026/173807
  type: preprint
  grade: B
  published: 2026-11-01
  accessed: 2026-11-01
- id: S3
  title: Fast Inference from Transformers via Speculative Decoding
  url: https://proceedings.mlr.press/v202/leviathan23a.html
  type: peer-reviewed
  grade: A
  published: 2023-07-03
  accessed: 2026-11-01
- id: S4
  title: 'EAGLE-3: Scaling up Inference Acceleration of Large Language Models via Training-Time Test'
  url: https://arxiv.org/abs/2503.01840
  type: preprint
  grade: B
  published: 2025-04-23
  accessed: 2026-11-01
- id: S5
  title: 'DSpark: Confidence-Scheduled Speculative Decoding with Semi-Autoregressive Generation'
  url: https://arxiv.org/abs/2607.05147
  type: preprint
  grade: B
  published: 2026-07-06
  accessed: 2026-11-01
- id: S6
  title: Inferact/Kimi-K3-DSpark (Hugging Face model card)
  url: https://huggingface.co/Inferact/Kimi-K3-DSpark
  type: lab-post
  grade: B
  published: 2026-07-29
  accessed: 2026-11-01
- id: S7
  title: Inferact/Kimi-K3-DSpark config.json
  url: https://huggingface.co/Inferact/Kimi-K3-DSpark/blob/main/config.json
  type: code
  grade: B
  published: 2026-07-29
  accessed: 2026-11-01
- id: S8
  title: RadixArk/Kimi-K3-DSpark (Hugging Face model card)
  url: https://huggingface.co/RadixArk/Kimi-K3-DSpark
  type: lab-post
  grade: B
  published: 2026-07-27
  accessed: 2026-11-01
- id: S9
  title: RadixArk/Kimi-K3-DSpark config.json
  url: https://huggingface.co/RadixArk/Kimi-K3-DSpark/blob/main/config.json
  type: code
  grade: B
  published: 2026-07-27
  accessed: 2026-11-01
- id: S10
  title: moonshotai/Kimi-K3 (Hugging Face model card)
  url: https://huggingface.co/moonshotai/Kimi-K3
  type: lab-post
  grade: B
  published: 2026-06-13
  accessed: 2026-11-01
- id: S11
  title: moonshotai/Kimi-K3 config.json
  url: https://huggingface.co/moonshotai/Kimi-K3/blob/main/config.json
  type: code
  grade: B
  published: 2026-06-13
  accessed: 2026-11-01
- id: S12
  title: 'MagicDec: Breaking the Latency-Throughput Tradeoff for Long Context Generation with Speculative Decoding'
  url: https://arxiv.org/abs/2408.11049
  type: preprint
  grade: B
  published: 2025-04-02
  accessed: 2026-11-01
- id: S13
  title: Efficient Streaming Language Models with Attention Sinks
  url: https://arxiv.org/abs/2309.17453
  type: preprint
  grade: B
  published: 2024-04-07
  accessed: 2026-11-01
- id: S14
  title: 'YaRN: Efficient Context Window Extension of Large Language Models'
  url: https://arxiv.org/abs/2309.00071
  type: preprint
  grade: B
  published: 2026-02-06
  accessed: 2026-11-01
- id: S15
  title: 'Windowed-MTP: Removing the Full-Context Draft-KV Tax at Million-Token Context'
  url: https://arxiv.org/abs/2607.21535
  type: preprint
  grade: B
  published: 2026-07-23
  accessed: 2026-11-01
- id: S16
  title: 'SpecPV: Improving Self-Speculative Decoding for Long-Context Generation via Partial Verification'
  url: https://arxiv.org/abs/2512.02337
  type: preprint
  grade: B
  published: 2026-08-29
  accessed: 2026-11-01
- id: S17
  title: 'Strong Drafts Need Compact Memories: Long-Context Speculative Decoding with Compressed KV Cache'
  url: https://arxiv.org/abs/2608.30252
  type: preprint
  grade: B
  published: 2026-08-31
  accessed: 2026-11-01
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **reject** · Sources: 17 (A 1 · B 16 · C 0 · D 0)
> · Claims checked: 57 (verified 50 · caveat 5 · unverified 0 · contradicted 2)
> · Checked 2026-11-01 05:27 MST by the QA agent

## TL;DR

- Jafari and co-authors (AMD, with one author at the University of Waterloo) keep two released Kimi-K3 drafters frozen and change only what each sees, a bounded attention window plus rotary indices re-based into the trained range; that pair is the central design choice, and each half is ablated on one engine build with identical prompts and hardware, with no training in any arm [S1].[^qa-1]
- Against the drafter run as shipped, the full method's speedup at two million tokens is 2.25x versus 0.56x for the Inferact drafter; the paper's own headline instead compares each arm with itself at 8k tokens [S1].[^qa-2]
- Each main-ladder cell is five samples, greedy, one engine run per arm; the anchor reports a three-repetition batched recheck and a revalidation of the Qwen ladder on a pinned engine build, and is not in proceedings [S1].[^qa-3]
- Two of its tables give 2.55x and 1.92x for what reads as the same 1M-token configuration, a gap the paper does not reconcile [S1].[^qa-4]
- The vLLM patch, prompt manifests and per-sample logs are promised to accompany the paper but are not linked from the arXiv page or the v1 text as of 2026-11-01 [S1].[^qa-5]

> [!CAUTION]
> **QA · Corrected.** The third bullet originally read "the anchor reports no repeated runs beyond one batched recheck and is not in proceedings". Appendix D of [S1] also reports a revalidation of the Qwen2.5-7B-Instruct-1M ladder on a pinned engine build. It re-measures four tiers and reproduces the original emitted lengths within one standard error, and the paper's reproducibility statement refers to that revalidation. The bullet now says so.

> [!IMPORTANT]
> **QA · Rejected.** This post failed QA. One TL;DR claim, about how many repeat runs the anchor reports, was contradicted by the anchor itself [S1]. QA also corrected a second sentence, about which 2M runs use forced continuation (see the CAUTION callouts and notes qa-3 and qa-15). Under this desk's rules, a contradicted central claim means rejection. Everything else QA checked held up. All 17 sources exist and match their listed titles and authors, and every Table 1, Table 6 and configuration figure QA recomputed came out as the post states.

## Why now

Aref Jafari, Vansh Bhatia, Matt Qin, Subhajit Dutta Chowdhury, Ben Lee, Vikram Appia, Ali Ghodsi and Mehdi Rezagholizadeh posted "Long-Context Drafting Does Not Require Long-Context Drafters" to arXiv on 2026-10-14; v1 is the only version [S1]. Ghodsi lists the University of Waterloo and the other authors list AMD [S1].

The opposite worry is also on record this month. A NeurIPS 2026 workshop poster by Aman Kesarwani, which we could read only as its listing page, reports in its abstract that on Llama-2-7B extended to 1M tokens the paired per-seed speedup against a matched target-only baseline falls from 1.76x at 256k to 0.94x at 512k [S2].[^qa-6] That study uses ring-attention sequence parallelism and a 4-bit NormalFloat (NF4) key-value (KV) cache on 8 A100 GPUs; the listing does not name the drafter, and code is promised on acceptance [S2]. With a different target and hardware from the anchor's [S1], its numbers cannot be set beside the anchor's; the two frame the same question from opposite ends.

## Background

Speculative decoding has a cheap drafter propose $K$ tokens that the target verifies in one parallel pass; with rejection sampling the target's output distribution is unchanged [S3]. The drafters here are target-conditioned. EAGLE-3 fuses features from several target layers [S4]. DSpark pairs a parallel drafting backbone with a lightweight sequential module [S5]. Both DSpark checkpoints tested read hidden states from five of Kimi-K3's 93 layers [S7][S9].

Rotary position embedding (RoPE) rotates query and key coordinate pairs by angles proportional to position, so scores depend only on relative offset in exact arithmetic [S1]. YaRN rescales RoPE frequencies to extend context [S14]. Inferact's config sets YaRN factor 32 on 32,768 original positions and RadixArk's factor 16 on 65,536 [S7][S9]. Our calculation confirms both give 1,048,576, the paper's stated $P_{\max}$ [S1].

Kimi-K3 is listed at 2.8T total and 104B active parameters, with 69 Kimi Delta Attention (KDA) layers and 24 gated multi-head latent attention (MLA) layers, and a 1,048,576-token context [S10]. Its config sets `mla_use_nope: true` with no rope keys [S11],[^qa-7] consistent with the paper's description of a no-positional-encoding (NoPE) target [S1].

## The core idea

Let $N$ be the context length, $q$ a frozen drafter with training length $L_{\text{train}}$ and rotary reach $P_{\max}$, and $p$ the target. Per-token acceptance, with $\mathrm{TV}$ the total variation distance, is

$$\alpha_t = 1 - \mathrm{TV}(p_t, q_t),$$

and under a geometric approximation the mean emitted length per round, bonus token included, is $\mathrm{MAL}(\alpha, K)=\sum_{j=0}^{K}\alpha^j$ [S1]. The problem: keep decode-phase speedup $S(N)$ over a target-only run roughly constant as $N$ grows far past $L_{\text{train}}$ and $P_{\max}$, without touching drafter weights [S1].

**Why unwindowed drafting fails on cost.** A $K$-token draft makes $K$ sequential reads of a size-$N$ cache, verification one parallel read [S1]. Our calculation from the configs makes this concrete. RadixArk's drafter caches about 10,240 key and value elements per token (5 layers, 16 KV heads of dimension 64) [S9]. Inferact's mirrors MLA's 576-element latent, about 2,880 over 5 layers [S6][S7]. The target's 24 MLA layers at the same 576 elements hold about 13,824 [S6][S10]. One draft step thus reads roughly 0.74 (RadixArk) or 0.21 (Inferact) of the target's full-attention cache, three times per round. This ignores weights, KDA state and kernels, so it is a reading of the mechanism, not a cost model. It fits the paper's diagnosis: unwindowed RadixArk fails on cost while still accepting (emitted length 1.97 at 1M, at 0.32x), whereas Inferact also loses acceptance from 128k [S1].

**Mechanism 1: windowing.** The drafter's visible cache holds only the latest $W \lesssim L_{\text{train}}$ tokens, with no attention sinks, while the target verifies against the full prefix [S1]. Because each drafter input already carries target features computed over the whole prefix, windowing bounds how many positions the drafter attends over, not what each position encodes [S1].

**Mechanism 2: rotary index re-basing.** Windowing bounds offsets, not indices; near two million tokens the drafter still evaluates rotations at indices of order $N$ [S1]. The tested implementation gathers rotary factors from a table of exactly $P_{\max}$ rows with no bounds check, so the predicted failure is a cliff at $P_{\max}$ [S1]. The fix assigns each key $\tilde m = m \bmod P_{\max}$ at cache entry. Since

$$\langle R(m)\mathbf q_m, R(n)\mathbf k_n\rangle = \mathbf q_m^\top R(n-m)\,\mathbf k_n,$$

a common shift within one band of $P_{\max}$ positions leaves every score unchanged, and keys are rotated once [S1]. Proposition 1 certifies exact equality only when a prediction's dependency graph stays inside one band; the paper bounds the uncertified share near 2% for these drafters, a bound on positions, not an observed error rate [S1].

**Acceptance decomposition.** $\mathrm{TV}(p_t,q_t) \le \mathrm{TV}(p_t,p^{\text{trunc}}_t) + \mathrm{TV}(p^{\text{trunc}}_t,q_t)$ splits rejection into a truncation gap, measurable without a drafter, and a drafter fidelity gap; Proposition 2 turns this into sharp bounds on mean acceptance [S1].

## Evidence

**Setup.** Kimi-K3 at tensor parallel 8 on one MI355X node in vLLM with the authors' patch; batch 1, greedy, $K=3$, $W=4096$; PG19 continuations, end-of-sequence ignored, 4,096 generated tokens; seven tiers from 8k to 2M; $n=5$ samples per cell [S1].[^qa-8] Speedup is decode-phase time from engine counters, prefill excluded, paired per sample with a target-only run on the same prompt, which is the engine-only control [S1]. The tables report ratios, with no absolute tokens-per-second figures for these runs, and per-cell standard deviations of 0.26–0.66 for profitable cells [S1].

**Main ladder (Table 1).** The arms are unwindowed (drafter as shipped), windowed only, and windowed plus re-based [S1]. The headline is retention, each arm's 2M speedup over its own 8k speedup: 0.90 (Inferact) and 1.19 (RadixArk) for the full method, against 0.28 and 0.08 unwindowed and 0.40 and 0.44 windowed only [S1].[^qa-9] Inferact goes from 2.51x to 2.25x and RadixArk from 1.75x to 2.08x; the authors attribute RadixArk's above-one figure to a weak 8k cell [S1]. Taking 16k as the reference instead (our calculation) gives 0.95 and 1.02. Against the shipped drafter at 2M, the full method is 2.25x versus 0.56x on Inferact and 2.08x versus 0.14x on RadixArk [S1].

The ratio $S/\mathrm{MAL}$ isolates cost. Our recomputation gives 0.763–0.793 in all 28 windowed cells, matching the paper's range of 0.76 to 0.79; unwindowed it falls to 0.52 and 0.10 at 2M [S1].[^qa-10] Below $P_{\max}$ the two windowed arms differ by at most 0.38x, within the spread, as expected of a map that is the identity there [S1]. At 2M, windowing alone collapses to emitted lengths of 1.13 and 1.11, essentially the bonus token only, at 0.88x and 0.87x [S1].

**Re-basing toggle (Table 6).** With one environment flag differing on one binary, re-basing takes Inferact at 2M from 0.68x to 2.05x and RadixArk from 0.71x to 1.68x; at the 1M controls emitted length is 2.92 against 2.95 and 2.50 against 2.50 [S1].[^qa-11] The toggle reproduces at 2M on LongBench and BEAM [S1].

**Other pairs and corpora.** Qwen2.5-7B-Instruct-1M with EAGLE-3 runs at 1.31–1.83x windowed versus 1.11–1.22x unwindowed from 2k to 512k [S1]. MiniMax-M3, whose block-sparse target loses only 26% of its decode rate from 4k to 1M, retains 1.11 windowed versus 0.74 unwindowed at 1M; its drafter's rotary reach exceeds the served context, so it cannot test re-basing [S1]. Across the four corpora reaching 1M, the full method retains 0.93–1.30 at 1M on both drafters [S1]. On RULER single-needle retrieval to 1M, target and windowed arm both answer 120 of 120 [S1].

**Gap measurements.** On Qwen2.5-7B-Instruct at 32k, the truncation gap falls from 0.2195 to 0.0444 as $W$ grows from 128 to 16,384, while the fidelity gap stays near 0.68, so acceptance is drafter-limited [S1]. This uses a reimplemented drafter on a different pair, and the authors do not claim the gaps explain the speedups [S1].

## Critical assessment

**Small cells, and a caption that undercounts.** With five samples and standard deviations up to 0.66x, many arm-to-arm differences are noise, as the authors say [S1]. The Table 1 caption counts five cells where another arm is nominally ahead of the full method; our recount finds seven, adding Inferact at 512k (2.60x against 2.46x) and RadixArk at 512k (1.95x against 1.91x) [S1].[^qa-12] Appendix E.2's own count agrees with our recount [S1].[^qa-13] The 2M contrasts are large relative to this spread.

**Two tables, one configuration.** Table 1 and Table 6 both report re-based Inferact on PG19 at 1M with $K=3$, $W=4096$ and forced 4,096-token generations: 2.55x at emitted length 3.28 versus 1.92x at 2.95 [S1].[^qa-14] The sink and window ablations at the same drafter, length, $s=0$ and $W=4096$ give 3.26 and 3.03 [S1]. At 2M, re-based Inferact reads 2.25x and 2.05x across the two tables, RadixArk 2.08x and 1.68x [S1]. Pairing Table 6's 2M cells with Table 1's 8k cells (our calculation) gives retention of 0.82 and 0.96, not 0.90 and 1.19. Appendix E.2 calls a 0.23x gap on one control run-to-run throughput variation, and we found no passage reconciling the two tables [S1]. Our reading: the retention ratios carry run-to-run uncertainty that the within-cell spreads do not capture.

**Re-basing is shown past the target's declared limit.** The cliff appears only at 2M, the first tier beyond the drafters' rotary reach [S1]. Kimi-K3's config and card declare that same 1,048,576-token maximum [S10][S11], and the paper says the NoPE target serves past it [S1]. The 2M PG19 and LongBench runs are forced continuation, the 2M BEAM runs are measured up to or stopped at end-of-sequence but not scored for answer quality, and RULER stops at 1M, so target output quality at 2M is not evaluated [S1].[^qa-15] That is a property of the target, not the drafter (our reading), but it narrows where re-basing is needed: contexts beyond a drafter's rotary reach. Below it, windowing alone is the method [S1].

> [!CAUTION]
> **QA · Corrected.** This paragraph originally said "The 2M runs are forced continuation and RULER stops at 1M". Table 7 and Appendix E.3 of [S1] show two BEAM corpora that reach 2M without forced continuation: one is measured up to the first end-of-sequence token and the other stops there. The post's own workload paragraph below cites the end-of-sequence-stopped BEAM v2 rerun at 2M. Neither BEAM run is scored for answer quality, so the conclusion that target output quality at 2M is not evaluated still holds.

**"Short-context" by whose label?** The paper says RadixArk's drafter was trained at 4,096 tokens [S1]. Its card lists a trained context of 65,536 tokens, calls it a long-context speculator supporting up to 1M tokens, and reports acceptance length 4.2553 on a 1M-token RULER configuration [S8]. That figure uses SGLang, 7 draft tokens and a different acceptance metric, so it cannot be compared with the paper's 1.97 unwindowed at 1M. Inferact's card states no training length [S6].[^qa-16] The rule $W \lesssim L_{\text{train}}$ holds under either figure.

> [!WARNING]
> **QA · Contested.** The anchor's description of the RadixArk drafter conflicts with its own model card [S8]. The card's commit history runs from 2026-07-27 to 2026-08-16, so the 65,536-token figure was on the card before the paper was posted on 2026-10-14 [S1]. If the card is right, a 4,096-token window sits well inside RadixArk's training length, and that drafter tests windowing as a cost bound rather than a short-context drafter running past its training length. Re-basing is still exercised at 2M either way, because both configs set a rotary reach of 1,048,576 [S7][S9].

**Output equivalence is not shown.** On the Kimi-K3 pair, greedy speculative output never matched target-only decoding token for token, diverging as early as the first token; the authors suspect batch-shape nondeterminism, call it unproven, and make no formal lossless claim [S1].

**Workload, batch and stack.** Forced PG19 continuation degenerates into repetition at many contexts; the end-of-sequence-stopped BEAM v2 rerun, retaining 0.96 and 0.88 at 2M, is the paper's answer [S1]. The batched spot check on one pair shows the windowed advantage decaying with batch size (1.67x to 1.14x at 4k from batch 1 to 8), and the unwindowed arm ahead at 4k in three of four batch sizes [S1]. A retracted MiniMax-M3 sweep, where a kernel backend stopped verification from amortizing, flipped the verdict [S1].

**Abstract versus body.** The abstract claims retention to two million tokens across three pairs and five corpora [S1]. Only the Kimi-K3 pair reaches 2M; Qwen stops at 512k, MiniMax-M3 at 1M, SPEED-Bench at 32k, and two of the five corpora are renderings of the same BEAM conversations [S1].

**Reproducibility.** The target and both main drafters are public on Hugging Face [S6][S8][S10]. The patch, prompts, logs and sweeps "will accompany the paper" [S1]. On 2026-11-01 the arXiv page had no repository link, and the only GitHub URL in the v1 text is a reference to prompt lookup decoding [S1]. The reproducibility statement mentions a pinned engine build, but searching v1 for "build", "commit" and "version" found no identifier, and "seed" does not occur [S1].[^qa-17]

> [!TIP]
> **QA · Partly reproducible.** The weights are public: [Inferact/Kimi-K3-DSpark](https://huggingface.co/Inferact/Kimi-K3-DSpark) ships a Kimi K3 License file [S6], [RadixArk/Kimi-K3-DSpark](https://huggingface.co/RadixArk/Kimi-K3-DSpark) has no licence file or licence metadata [S8], and [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) is the target [S10]. Inferact's card documents serving through vLLM's built-in `dspark` speculative method [S6] and RadixArk's through SGLang [S8]. Neither card mentions windowing or re-basing, so the paper's arms cannot be rerun until the vLLM patch is released.

## Connections

By the authors' account, the windowed-only arm is MagicDec's bounded draft cache carried to longer contexts [S1]. MagicDec showed sparse-KV drafters paying off at large batch for moderate-to-long sequences [S12]. StreamingLLM keeps attention sinks plus a recent window [S13]. The anchor contrasts its cache-relative positions, re-rotated each step, with re-basing's rotate-once indices, but does not run it [S1].

Windowed-MTP, the closest training-free method, windows a built-in multi-token-prediction head and reports 28–44% lower per-step draft cost at 1M [S15].[^qa-18] Such a head shares the target's positional regime and never meets the position problem [S1]. SpecPV instead verifies against partial KV states with periodic full verification, reporting up to 6x with minor degradation [S16], a departure from the exact verification the anchor keeps [S1]. Memory-augmented drafting adds a lightweight adaptor maintaining a compressed draft-side memory, reporting up to 3.33x on a Llama 3.1 70B target at prefixes to 32K [S17]. The anchor argues that target-conditioned drafters need no such module [S1].[^qa-19]

On this blog, [the Uno post](../published/2026-10-23-uno-diffusion-adapter-lossless-speedups.md) covered a diffusion drafter trained with low-rank adaptation (LoRA) on a frozen autoregressive model, and [the DeepSeek-V4.1-Flash post](../published/2026-10-17-deepseek-v4-1-flash-kv-cache-compression.md) covered compressing the target's own KV cache, the side of the round this paper leaves alone.

## Open questions

- Does the 2M result survive a rerun that reconciles Table 1 with Table 6, with more samples per cell and repeated engine boots?
- How does re-basing compare in wall-clock with cache-relative indexing, and what happens at band boundaries, where Proposition 1 certifies nothing [S1]?
- Would a drafter without a target-feature channel tolerate windowing? The paper does not test one [S1].
- We expect the batched-serving decay to matter more in production than the 2M tier [S1].
- Watch for the promised vLLM patch and logs, and for the RASD traces, which would allow a like-for-like diagnosis on a dense 7B target [S1][S2].

## Sources

S1. [Long-Context Drafting Does Not Require Long-Context Drafters](https://arxiv.org/abs/2610.20865) · preprint · B · published 2026-10-14 · accessed 2026-11-01
S2. [When Speculative Decoding Stops Paying Off at Long Context: A Diagnostic Study with RASD (NeurIPS 2026 workshop poster listing; publication date not seen, access date entered)](https://neurips.cc/virtual/2026/173807) · preprint · B · published 2026-11-01 · accessed 2026-11-01
S3. [Fast Inference from Transformers via Speculative Decoding](https://proceedings.mlr.press/v202/leviathan23a.html) · peer-reviewed · A · published 2023-07-03 · accessed 2026-11-01
S4. [EAGLE-3: Scaling up Inference Acceleration of Large Language Models via Training-Time Test](https://arxiv.org/abs/2503.01840) · preprint · B · published 2025-04-23 · accessed 2026-11-01
S5. [DSpark: Confidence-Scheduled Speculative Decoding with Semi-Autoregressive Generation](https://arxiv.org/abs/2607.05147) · preprint · B · published 2026-07-06 · accessed 2026-11-01
S6. [Inferact/Kimi-K3-DSpark (Hugging Face model card)](https://huggingface.co/Inferact/Kimi-K3-DSpark) · lab-post · B · published 2026-07-29 · accessed 2026-11-01
S7. [Inferact/Kimi-K3-DSpark config.json](https://huggingface.co/Inferact/Kimi-K3-DSpark/blob/main/config.json) · code · B · published 2026-07-29 · accessed 2026-11-01
S8. [RadixArk/Kimi-K3-DSpark (Hugging Face model card)](https://huggingface.co/RadixArk/Kimi-K3-DSpark) · lab-post · B · published 2026-07-27 · accessed 2026-11-01
S9. [RadixArk/Kimi-K3-DSpark config.json](https://huggingface.co/RadixArk/Kimi-K3-DSpark/blob/main/config.json) · code · B · published 2026-07-27 · accessed 2026-11-01
S10. [moonshotai/Kimi-K3 (Hugging Face model card)](https://huggingface.co/moonshotai/Kimi-K3) · lab-post · B · published 2026-06-13 · accessed 2026-11-01
S11. [moonshotai/Kimi-K3 config.json](https://huggingface.co/moonshotai/Kimi-K3/blob/main/config.json) · code · B · published 2026-06-13 · accessed 2026-11-01
S12. [MagicDec: Breaking the Latency-Throughput Tradeoff for Long Context Generation with Speculative Decoding](https://arxiv.org/abs/2408.11049) · preprint · B · published 2025-04-02 · accessed 2026-11-01
S13. [Efficient Streaming Language Models with Attention Sinks](https://arxiv.org/abs/2309.17453) · preprint · B · published 2024-04-07 · accessed 2026-11-01
S14. [YaRN: Efficient Context Window Extension of Large Language Models](https://arxiv.org/abs/2309.00071) · preprint · B · published 2026-02-06 · accessed 2026-11-01
S15. [Windowed-MTP: Removing the Full-Context Draft-KV Tax at Million-Token Context](https://arxiv.org/abs/2607.21535) · preprint · B · published 2026-07-23 · accessed 2026-11-01
S16. [SpecPV: Improving Self-Speculative Decoding for Long-Context Generation via Partial Verification](https://arxiv.org/abs/2512.02337) · preprint · B · published 2026-08-29 · accessed 2026-11-01
S17. [Strong Drafts Need Compact Memories: Long-Context Speculative Decoding with Compressed KV Cache](https://arxiv.org/abs/2608.30252) · preprint · B · published 2026-08-31 · accessed 2026-11-01

## QA notes

[^qa-1]: **Verified** — the arXiv v1 of [S1] (2026-10-14, the only version on 2026-11-01) lists seven AMD authors and Ali Ghodsi at the University of Waterloo. Sections 6 and 6.2 and Appendix E.2 say no weight is updated in any run, all three arms run on one engine build, and the two windowed arms differ by a single environment flag, with binary, hardware, prompts and drafter identical. This also covers the dek: the Limitations section gives one platform and five samples per cell, and on code see qa-5.
[^qa-2]: **Verified** — Table 1 of [S1]: windowed and re-based Inferact runs at 2.25x at 2M against 0.56x unwindowed. The retention row the paper calls its claim divides each arm's 2M speedup by that arm's own 8k speedup.
[^qa-3]: **Contradicted** — Appendix D of [S1] reports a revalidation of the Qwen2.5-7B-Instruct-1M ladder on a pinned engine build, with the target arm re-measured on the matched checkpoint. It gives MAL 1.659, 1.693, 1.610 and 1.609 at 2k, 8k, 32k and 128k, against 1.691, 1.766, 1.679 and 1.685 originally. The reproducibility statement also says "the length ladder was revalidated" on a pinned build. So the paper reports more than one batched recheck. The sentence has been corrected; see the CAUTION callout below the TL;DR. The rest of the bullet holds: five samples and greedy decoding are stated in Table 1 and section 6.1, and the arXiv record has no journal reference. The paper does not say "one engine run per arm" outright. It says each speedup is a ratio between two separately booted engine instances.
[^qa-4]: **Verified** — Table 1 of [S1] gives 2.55x (MAL 3.28) for re-based Inferact on PG19 at 1M. Table 6 gives 1.92x (MAL 2.95) for the same drafter and corpus, with K = 3, W = 4096 and forced 4,096-token generations. QA found no passage that reconciles the two. Appendix E.2 attributes a 0.23x gap on the RadixArk 1M control to run-to-run variation but does not mention the difference between Table 1 and Table 6.
[^qa-5]: **Verified** — the reproducibility statement of [S1] says the patch, prompt manifests, per-sample logs and sweeps "will accompany the paper". On 2026-11-01 QA found no repository link on the arXiv abstract page. The only GitHub URL in the v1 text is reference [26] (prompt lookup decoding), and a web search found no code release.
[^qa-6]: **Supported with caveat** — the NeurIPS 2026 listing [S2], a poster at the Third Workshop on Long-Context Foundation Models, gives these figures in its abstract with intervals: 1.76x [1.59, 1.93] at 256k and 0.94x [0.57, 1.30] at 512k. It adds 0.97x at 1M and calls the result "statistical parity". Ring attention, the NF4 KV cache, 8 A100 GPUs, the unnamed drafter and the promise of code on acceptance all match the listing. The listing shows no date, and its OpenReview page returned a 403 challenge to QA too. So "this month" is unverified, and the published date in the source list is the access date, as the source title says.
[^qa-7]: **Supported with caveat** — the text config in [S11] sets `mla_use_nope: true` and has no `rope_theta` or RoPE-scaling entry, consistent with [S1]'s description of a NoPE target. It does still carry `qk_rope_head_dim: 64`, so "no rope keys" holds only for frequency and scaling settings.
[^qa-8]: **Verified** — sections 6, 6.1 and 6.2 and the Table 1 caption of [S1] give every one of these settings: Kimi-K3 at tensor parallel 8 on one MI355X node, vLLM with the authors' patch, batch 1, greedy, K = 3, W = 4096, s = 0, PG19 with EOS ignored, 4,096 generated tokens, seven tiers from 8k to 2M, and n = 5. Speedup is decode-phase time from the engine's counters, paired per sample with a target-only run on the same prompt.
[^qa-9]: **Verified** — this is the retention row of Table 1 in [S1]. QA recomputed 2.25/2.51 = 0.896 and 2.08/1.75 = 1.189, and the unwindowed (0.28, 0.08) and windowed-only (0.40, 0.44) values from the same table. Section 6.2 attributes RadixArk's value above one to its weak 8k cell.
[^qa-10]: **Verified** — QA recomputed S/MAL from Table 1 of [S1] for all 28 windowed cells (two drafters, two windowed arms, seven tiers) and got 0.763 to 0.793. Unwindowed at 2M the values are 0.56/1.07 = 0.52 and 0.14/1.35 = 0.10.
[^qa-11]: **Verified** — Table 6 of [S1]: at 2M on PG19, Inferact rises from 0.68x to 2.05x and RadixArk from 0.71x to 1.68x. The 1M controls give MAL 2.92 against 2.95 and 2.50 against 2.50. The LongBench and BEAM rows at 2M show the same collapse without re-basing (MAL 1.12 to 1.18) and recovery with it.
[^qa-12]: **Verified** — QA's own count from Table 1 of [S1] also finds seven cells where another arm is nominally ahead of the full method: Inferact at 16k, 32k and 512k, and RadixArk at 8k, 128k, 512k and 1M. The caption lists five and leaves out the two 512k cells.
[^qa-13]: **Supported with caveat** — Appendix E.2 of [S1] counts a different comparison: re-basing against windowing alone over the twelve tiers through 1M. Re-basing is nominally ahead in seven of them and windowing alone in five. Those five (Inferact 512k; RadixArk 8k, 128k, 512k and 1M) include both 512k cells the caption omits. So E.2 is consistent with the recount of seven, but it does not count the same thing.
[^qa-14]: **Verified** — the Table 1 and Table 6 figures are as stated in [S1]. For Inferact at 1M, Table 10 (s = 0) gives MAL 3.26 and Table 11 (W = 4096) gives 3.03. QA's arithmetic reproduces 2.05/2.51 = 0.82 and 1.68/1.75 = 0.96. The reproducibility statement mentions a revalidation on a pinned build without saying which tables it produced, and QA found no passage that links either table to it.
[^qa-15]: **Contradicted** — Table 7 and Appendix E.3 of [S1] run two BEAM corpora to 2M without forced continuation. BEAM prefixes are scored on the span before the first end-of-sequence token, and BEAM v2 stops at the model's own end-of-sequence token. Table 6 also has BEAM rows at 2M. Only speed and acceptance are reported for these runs, not answer quality. The sentence has been corrected; see the CAUTION callout below that paragraph.
[^qa-16]: **Verified** — Table 1 and section 6.2 of [S1] say the RadixArk drafter was trained at 4096 tokens. Its card [S8] lists "Trained context: 65,536 tokens", support for up to 1 million tokens, and an acc_len of 4.2553 on RULER V2 at 1M. That figure is SGLang's request acceptance length with seven draft tokens. The Inferact card [S6] gives no training length.
[^qa-17]: **Verified** — the three checkpoints open on Hugging Face [S6][S8][S10], and the quoted phrase appears verbatim in the reproducibility statement of [S1]. Case-insensitive searches of the v1 text find "build" only in prose with no identifier, "commit" only in "committed token", and no "version" or "seed".
[^qa-18]: **Supported with caveat** — the "+28% to +44%" in [S15] (abstract and Table 1) is the ratio of native to windowed cost for the whole decode step at 1M, batch 1, on one B200 GPU, with the step counting draft forwards plus verification. For example, Qwen3.6-35B goes from 26.4 ms to 18.3 ms. Read as a cut in step time, that is about 22–31%. The draft phase alone shrinks by more, because verification cost is unchanged. The paper itself calls it a "+28% to +44% per-decode-step cost reduction".
[^qa-19]: **Supported with caveat** — [S1] does not cite or discuss [S17]. Its general argument is that target-conditioned drafters need no long-context training and no added module ("no weight updates, no new checkpoint, and no sinks"), because distant context reaches them through the target's hidden states. Applying that to [S17]'s adaptor is the post's reading. The abstract of [S17] also describes its drafter as a strong independent model, not a target-conditioned one.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
