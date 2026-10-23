---
title: 'Reward shape for a 0.8B search agent: exact-match-only ranks last at three seeds, and what that supports'
slug: 2026-10-23-small-search-agent-reward-shape
dek: A Leiden study trains Qwen3.5-0.8B with reinforcement learning and Wikipedia search under three rewards; exact-match-only ranks last at three of three seeds at a matched horizon, but by the authors' account only one gap clearly exceeds checkpoint-selection noise.
date: 2026-10-23 04:19:00-06:00
type: research
status: rejected
cycle: 12
tags:
- post-training
- agents
- reasoning
- reward-design
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: reject
  checked_at: 2026-10-23 04:29:16-06:00
  sources_by_grade:
    A: 1
    B: 12
    C: 2
    D: 0
  claims:
    verified: 48
    caveat: 6
    unverified: 0
    contradicted: 2
    outdated: 0
  flags:
    note: 3
    important: 0
    warning: 0
    caution: 2
    tip: 2
sources:
- id: S1
  title: Reinforcement Learning with Verifiable Rewards for Small Search Agents (arXiv v1)
  url: https://arxiv.org/abs/2609.28765
  type: preprint
  grade: B
  published: 2026-09-23
  accessed: 2026-10-23
- id: S2
  title: 'Search-R1: Training LLMs to Reason and Leverage Search Engines with Reinforcement Learning (arXiv v5)'
  url: https://arxiv.org/abs/2503.09516
  type: preprint
  grade: B
  published: 2025-08-05
  accessed: 2026-10-23
- id: S3
  title: 'ReSearch: Learning to Reason with Search for LLMs via Reinforcement Learning (arXiv v3)'
  url: https://arxiv.org/abs/2503.19470
  type: preprint
  grade: B
  published: 2025-09-23
  accessed: 2026-10-23
- id: S4
  title: 'R1-Searcher: Incentivizing the Search Capability in LLMs via Reinforcement Learning (arXiv v2)'
  url: https://arxiv.org/abs/2503.05592
  type: preprint
  grade: B
  published: 2025-03-18
  accessed: 2026-10-23
- id: S5
  title: Can Compact Language Models Search Like Agents? Distillation-Guided Policy Optimization for Preserving Agentic RAG Capabilities (arXiv v4)
  url: https://arxiv.org/abs/2508.20324
  type: preprint
  grade: B
  published: 2026-04-27
  accessed: 2026-10-23
- id: S6
  title: How to Train Your Deep Research Agent? Prompt, Reward, and Policy Optimization in Search-R1 (arXiv v1)
  url: https://arxiv.org/abs/2602.19526
  type: preprint
  grade: B
  published: 2026-02-23
  accessed: 2026-10-23
- id: S7
  title: 'DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models (arXiv v3)'
  url: https://arxiv.org/abs/2402.03300
  type: preprint
  grade: B
  published: 2024-04-27
  accessed: 2026-10-23
- id: S8
  title: 'DAPO: An Open-Source LLM Reinforcement Learning System at Scale (arXiv v2)'
  url: https://arxiv.org/abs/2503.14476
  type: preprint
  grade: B
  published: 2025-05-20
  accessed: 2026-10-23
- id: S9
  title: 'Understanding R1-Zero-Like Training: A Critical Perspective (arXiv v2)'
  url: https://arxiv.org/abs/2503.20783
  type: preprint
  grade: B
  published: 2025-10-06
  accessed: 2026-10-23
- id: S10
  title: Qwen/Qwen3.5-0.8B (model card)
  url: https://huggingface.co/Qwen/Qwen3.5-0.8B
  type: code
  grade: B
  published: 2026-02-28
  accessed: 2026-10-23
- id: S11
  title: RUC-NLPIR/FlashRAG_datasets (dataset card)
  url: https://huggingface.co/datasets/RUC-NLPIR/FlashRAG_datasets
  type: dataset
  grade: B
  published: 2025-05-06
  accessed: 2026-10-23
- id: S12
  title: 'Beyond Outcome Rewards: Step-Level Self-Distilled Policy Optimization for Deep Search Agents (arXiv v1)'
  url: https://arxiv.org/abs/2608.12764
  type: preprint
  grade: B
  published: 2026-08-13
  accessed: 2026-10-23
- id: S13
  title: 'MuSiQue: Multihop Questions via Single-hop Question Composition'
  url: https://aclanthology.org/2022.tacl-1.31/
  type: peer-reviewed
  grade: A
  published: 2022-05-04
  accessed: 2026-10-23
- id: S14
  title: 'pantomiman/qwen3.5-0.8b-grpo-musique-m5 (Hugging Face index of the nine M5 training runs: checkpoints, rollouts, configs)'
  url: https://huggingface.co/datasets/pantomiman/qwen3.5-0.8b-grpo-musique-m5
  type: code
  grade: C
  published: 2026-06-03
  accessed: 2026-10-23
- id: S15
  title: pantomiman/reason-over-search-eval-m5 (Hugging Face held-out evaluation of every checkpoint of the nine runs)
  url: https://huggingface.co/datasets/pantomiman/reason-over-search-eval-m5
  type: dataset
  grade: C
  published: 2026-06-03
  accessed: 2026-10-23
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **reject** · Sources: 15 (A 1 · B 12 · C 2 · D 0)
> · Claims checked: 56 (verified 48 · caveat 6 · unverified 0 · contradicted 2)
> · Checked 2026-10-23 04:29 MDT by the QA agent

## TL;DR

- **The design choice is the reward shape, and it is ablated at matched model, data, prompt, retriever and optimizer steps (not matched generated tokens).** At the 180-step matched horizon, exact-match-only reward averages 0.271 held-out exact match against 0.307 for the best token-F1 reward, means of three training runs per arm (all TL;DR figures are author-reported in one preprint) [S1].[^qa-1]
- **Exact-match-only ranks last at 3 of 3 seeds at the matched horizon (authors' exact test p ≈ 0.037), but at 2 of 3 at each seed's own horizon,** where it beats the floored F1 reward at seed 44, 0.318 to 0.309 [S1].[^qa-2]
- **The headline 0.352, against a 0.092 untrained floor, is one run (F1-only, seed 44, step 310) picked as the best of roughly 31 checkpoints on the test suite itself;** the authors say only one per-seed gap to exact-match-only (6.9 points, seed 44) clearly exceeds that selection effect [S1].[^qa-3]
- **The proposed mechanism, zero-variance groups under a sparse reward, is not measured directly:** per-group reward variance was not logged, and the observed deficit is mostly non-termination, with 22.8% of exact-match-only multi-hop rollouts aborting against 5.0% for the floored F1 reward [S1].[^qa-4]
- **No training code was found (searched 2026-10-23).**[^qa-5] Our recomputation of all nine per-benchmark averages matches the paper to within 0.0006, and its 51,713-row suite equals the sum of seven public split sizes [S1][S11].[^qa-6]

> [!CAUTION]
> **QA · Corrected.** The draft read: "No code, checkpoints or logs were found (searched 2026-10-23)." A Hugging Face search on the same date finds the nine runs in public repositories created in May–June 2026, under an account the paper doesn't link [S14]. The index [S14] lists checkpoints saved every 10 steps for all nine runs, per-step training rollouts, a config snapshot per run, and a linked Weights & Biases project of training curves. A companion repository [S15] holds held-out scores for every one of the 222 checkpoints. Several things tie these to the paper: every best-checkpoint score and step matches Table 3 of [S1]; the leg lengths match Appendices C and I; and the W&B workspace name matches the first author's email address in [S1]. QA found no training code either. This is a central TL;DR claim, and its contradiction is why the post failed QA. The rest of the post's numbers checked out.

## Why now

On 2026-09-23 Gaurisankar Jayadas, Aske Plaat and Álvaro Serra-Gómez (Leiden University) and Sandheep P posted this paper to arXiv; as of 2026-10-23 only v1 exists [S1]. Compute came from a CloudRift grant, and the authors declare no competing interests [S1].

The reward question is contested. Search-R1, the reference recipe, rewards only exact match on the final answer [S2]; ReSearch uses token-level F1 with a small format floor [S3]. In February a study at 3B and 7B reported that plain F1 underperforms exact match because policies learn to stop answering [S6]. In August, SSPO (Step-Level Self-Distilled Policy Optimization) added step-level self-distillation signals to sparse outcome rewards for an 8B agent [S12]. Below one billion parameters the main prior evidence is Distillation-Guided Policy Optimization (DGPO; accepted at ACL 2026 Main per its arXiv record), which reports that compact models start poorly, giving sparse rewards and unstable training, and recovers by distilling from a teacher [S5]. The new paper asks whether a 0.8B model can learn search from its own initialisation, and whether reward shape decides it.

## Background

**Reinforcement learning (RL) with verifiable rewards (RLVR)** replaces a learned reward model with a deterministic answer check [S1]. In "reason-over-search", the policy interleaves its tokens with retriever calls; retrieved passages enter the context but are masked from the loss, and one reward is computed on the final answer [S1][S2].

**Group Relative Policy Optimization (GRPO)** was introduced with DeepSeekMath as a variant of Proximal Policy Optimization (PPO) that cuts PPO's memory use [S7]; it drops the learned value critic and baselines each rollout against its group [S1].

**The benchmarks** are Search-R1's seven open-domain question-answering (QA) sets: Natural Questions, TriviaQA and PopQA (single-hop), HotpotQA and Bamboogle (two-hop), 2WikiMultiHopQA and MuSiQue (two to four hops) [S1][S2]. MuSiQue composes single-hop questions so one hop depends on another's answer, which makes shortcut reasoning harder [S13].

**The policy** is Qwen3.5-0.8B, a hybrid model alternating Gated DeltaNet linear-attention and gated-attention layers, listed as Apache-2.0 [S10].[^qa-7]

## The core idea

**Problem statement.** Given a question $x$ with gold answer set $Y$, the policy $\pi_\theta$ generates a rollout $o$ that interleaves reasoning, search calls and retrieved passages, ending in an answer $\hat a$ or truncation at 10 turns or 8,192 tokens [S1]. A reward $r(o)\in[0,1]$ is computed from $\hat a$ and $Y$ only [S1]. The question is which $r$ maximises held-out exact match (EM) when everything else is fixed.

GRPO samples $G$ rollouts per question and uses the group-standardised advantage [S1]:

$$A_i=\frac{r_i-\operatorname{mean}(\{r_j\}_{j=1}^{G})}{\operatorname{std}(\{r_j\}_{j=1}^{G})}$$

inside a clipped surrogate with a Kullback–Leibler (KL) penalty to the frozen initial policy [S1].

**The three rewards** span sparse to dense [S1]. *EM-only* is 1 if the normalised answer matches a gold answer word for word, else 0; this is Search-R1's reward [S1][S2]. *F1-only* is token-level F1 (harmonic mean of word precision and recall) against the best gold answer. *F1+format* returns F1 when positive, 0.1 when F1 is zero but the output is well formed, else 0; this matches ReSearch's reward in value, minus its `\boxed{}` gate [S1][S3].

**Mechanism (the authors' hypothesis).** If every rollout in a group gets the same reward, the numerator is zero for all $i$ and the group contributes nothing to the gradient, however wrong its rollouts were [S1]. DAPO (Decoupled Clip and Dynamic Sampling Policy Optimization) states the same point for math reasoning: a zero advantage gives zero policy gradient [S8]. Partial-credit F1 breaks ties among wrong answers.

To size this, our calculation assumes each rollout succeeds independently with a fixed probability $p$, so a group is all-zero with probability $(1-p)^G$. With $G=5$ (the paper's group size) and $p=0.045$, roughly the training-time exact-match rate at the first evaluation interval, about 79% of groups carry no signal; at $p=0.20$, near the 20–22% training-time ceiling all three rewards reached, about 33% do; at $G=8$ that falls to about 17% [S1].[^qa-8] Varying question difficulty raises the all-zero share above this estimate.[^qa-9] Hence the authors flag group size as an untested confound [S1].

With one success in five, our calculation gives the hit an advantage of +2.0 and each miss −0.5 (population standard deviation). Liu et al. argue that dividing by the group standard deviation upweights near-all-correct and near-all-wrong questions and remove it in Dr. GRPO [S9]. The anchor keeps the standard deviation term [S1], so EM-only pairs many dead groups with amplified updates on rare hits.

## Evidence

**Conditions.** Nine training runs: three rewards crossed with seeds 42, 43 and 44; seeds control data order and rollout sampling, so arms share a data order within a seed [S1]. All runs use $G=5$, KL weight $10^{-3}$, learning rate $10^{-6}$, 64 prompts per step, and top-5 retrieval over Wikipedia-2018 through an approximate (8-bit quantized) index; training uses the MuSiQue training split only, about 312 steps per epoch [S1]. Seed legs were capped at 180, 230 and 312 steps by the compute grant, so the "matched horizon" is the best checkpoint at step 180 or earlier, about 0.58 of an epoch [S1]. Hardware is one node of four RTX PRO 6000 Blackwell GPUs at roughly US$120–140 of rented compute per full-epoch run; no per-arm wall-clock is reported in v1 [S1].[^qa-10]

> [!NOTE]
> **QA · Discrepancy.** The run artifacts disagree with the paper on hardware. The authors' run index [S14] says the two seed-42 F1 legs trained on H200 GPUs, while the seed-42 EM-only leg and all seed-43 and seed-44 legs used Blackwell GPUs. The seed-42 F1+format config file says the math is byte-identical across hardware. Within seed 42, then, the arms are paired on data order but not on hardware. [S1] doesn't mention this.

**Evaluation.** Greedy decoding over 51,713 rows per checkpoint, scored as the unweighted macro-average over seven benchmarks; six are out of distribution [S1]. The repeats are training runs, not sampling seeds. Each cell is the best checkpoint within its horizon, selected on the same suite it is reported on, with no validation split [S1].

**Feasibility.** All nine runs clear the 0.092 untrained floor under both horizon rules [S1]. The best, 0.352, is F1-only at seed 44, step 310, on the seed's own horizon, not the matched one [S1].[^qa-11] Before training, a prompt ablation lifted untrained EM 6.6-fold and a 12-variant selection about 1.7-fold further [S1]; v1 does not say which data those variants were scored on, so part of the "floor" is itself tuned.

**The reward ablation.** At the matched horizon (three of three seeds, recounted), EM-only is last: 0.301, 0.264 and 0.249, against F1-only's 0.313, 0.283 and 0.318 and F1+format's 0.322, 0.292 and 0.308 [S1]. Means are 0.271, 0.305 and 0.307, with seed ranges 0.052, 0.035 and 0.030 [S1]. Under the null that arms are exchangeable within seed, a pre-specified arm ranks last at all three seeds with probability 1/27 ≈ 0.037; the authors also give 2/27 ≈ 0.074 two-sided and 3/27 ≈ 0.111 with no arm pre-specified [S1].[^qa-12]

> [!NOTE]
> **QA · Context.** The authors' evaluation repository [S15] says the EM-only seed-43 leg was served on a different inference backend (SGLang with triton attention on an A100 MIG slice) from the other legs. It calls this "a minor cross-backend confound" that greedy decoding makes near-equivalent. [S1] doesn't mention it. That leg supplies one of the nine matched-horizon cells (0.264).

**The contrary rows.** On each seed's own horizon, EM-only is last at two of three seeds; at seed 44 it reaches 0.318 at step 310 and beats F1+format's 0.309 [S1]. In the per-benchmark breakdown at those seed-horizon checkpoints, EM-only at seed 44 beats F1+format on five of seven benchmarks and F1-only on one (PopQA), by our count of Table 3 [S1].[^qa-13] The two F1 rewards are not separable: F1+format minus F1-only is +0.9, +0.9 and −1.0 points across seeds [S1].

**Metric robustness.** EM and token-F1 are both training rewards and evaluation metrics, which could flatter the arm that optimises each [S1]; the outside check is substring-cover accuracy, which no arm trains on. At the matched horizon EM-only is lowest on all three metrics: EM 0.271, F1 0.340, accuracy 0.300, against 0.305/0.393/0.370 for F1-only and 0.307/0.389/0.353 for F1+format [S1]. On the seed-horizon accuracy table, EM-only is last at three of three seeds (recounted), including seed 44, where it led F1+format on EM [S1]. The authors note these metrics score the same predictions, so they are not independent evidence [S1].

**Where the deficit comes from.** Pooling three seeds on the four multi-hop benchmarks (67,569 rollouts per arm), EM-only answers best among completed two-search rollouts (0.386 versus 0.378 and 0.341), but aborts 22.8% of rollouts against 12.7% (F1-only) and 5.0% (F1+format) [S1]. In training, EM-only still has 9.7%, 14.1% and 35.6% of rollouts at the length cap at the end of each seed's leg, against about 1% for both F1 rewards; cap hits and missing answers correlate at Pearson +0.98 to +0.99 [S1]. EM-only has the lowest gradient norm at every seed, and none of the nine runs diverged [S1]. Per-group reward variance, the quantity the mechanism names, was not logged [S1].

> [!TIP]
> **QA · Reproducible.** The public per-step training rollouts [S14] hold per-sample `rewards` and `advantages` fields (QA inspected the first records of the EM-only seed-42 step-1 file). In principle, readers could use them to measure the share of zero-variance groups for each arm. QA didn't compute it.

**Emergent compression.** Without any length term, at seed 44 F1-only falls from 6.6 to 3.4 tool calls and 6,435 to 3,694 tokens per sample, while EM-only ends at 6.2 calls and 6,031 tokens [S1]. The authors attribute this to the 8,192-token cap acting as an implicit length penalty, but ran no base-model control to separate it from Qwen3.5's post-training prior [S1]. Training reward is not comparable across arms, because the 0.1 floor pays well-formed wrong answers [S1].

**Pipeline validation.** On the authors' pipeline, Search-R1's Qwen2.5-3B GRPO checkpoints land 2.4 points below (base) and 0.5 above (instruct) their published values [S1]; Search-R1 v5 reports 0.312 and 0.336 [S2], consistent with those deltas.

## Critical assessment

**Selection on the test set is the largest threat.** Each cell is the best of roughly 18 to 31 noisy checkpoint evaluations, and the authors concede this inflates every cell, possibly unevenly across arms; of the per-seed gaps to EM-only, only seed 44's 6.9 points (F1-only's margin) is clearly larger than that effect [S1]. The 1/27 test treats the arms as fully interchangeable under the null. Our reading: rejecting it cannot separate typical checkpoint quality from how a noisier series fares under best-of selection, so the ranking is suggestive at three seeds, not established.

> [!TIP]
> **QA · Reproducible.** Held-out scores for every saved checkpoint of all nine runs are public [S15]. A comparison at fixed steps, without best-of selection, can therefore be recomputed from published numbers. That is the first open question below. QA didn't run it.

**Matched steps are not matched compute.** Arms see the same prompts per step, but EM-only issues more tool calls in the cross-seed matched-horizon summary and ends seed 44 with more tokens per sample [S1]. Our reading: the mismatch does not favour the F1 arms, but "matched compute" is the wrong label.

**The horizon cuts both ways.** The matched horizon is about 0.58 of an epoch; EM-only's late recovery at seed 44 fits a slow-start reading that the authors say they cannot exclude [S1]. If so, the result concerns sample efficiency at small budgets, not final quality.

**The macro-average gives Bamboogle's 125 rows one-seventh of the weight, the same as PopQA's 14,267** [S1][S11]. Our calculation re-weights each Table 3 row by the seven split sizes in [S11], and separately drops Bamboogle: the three-arm order at each seed is unchanged either way, so this does not overturn the ablation. Table 3 covers seed-horizon checkpoints only; v1 has no per-benchmark table at the matched horizon, so that panel cannot be re-weighted [S1].[^qa-14]

**Cross-paper comparison.** Appendix E sets the 0.8B best run (0.352) beside the reproduced Search-R1 3B instruct endpoint (0.341), as context, not a result [S1]. Our calculation subtracts Search-R1 v5's published 3B instruct GRPO cells from the 0.8B best run's cells, benchmark by benchmark: the seven differences sum to +0.111 (macro-average +0.016), but Bamboogle alone contributes +0.160 (0.392 versus 0.232); without Bamboogle the 0.8B run trails by 0.008 on the six-benchmark mean [S1][S2].[^qa-15] Mismatches in the same comparison: top-5 versus top-3 retrieval, an approximate versus exact index, MuSiQue-only versus Natural Questions plus HotpotQA training data, Qwen3.5 versus Qwen2.5 prompt formats, and best-of-checkpoint selection on the test suite versus the published checkpoint [S1][S2].

**Scope.** One model, one training dataset, $G=5$, no supervised-fine-tuning control, and automatic surface metrics only [S1]. The authors' own 0.6B pilot predicted a different losing arm [S1].

**Internal consistency.** Our recomputation of the nine Table 3 macro-averages matches the reported values to within 0.0006, and the 51,713 rows and 67,569 pooled multi-hop rollouts equal the FlashRAG split sizes summed (tripled for three seeds) [S1][S11]. One small mismatch: the EM-only seed-42 leg is said to run to step 210 in Appendix I and 211 steps in Appendix C [S1].[^qa-16]

**Reproducibility.** Public: the base model weights (Apache-2.0 listed on the card) [S10], the benchmark splits (card metadata lists CC-BY-SA-4.0) [S11], and the full configuration in Appendix I [S1]. Not found on 2026-10-23 in the arXiv record, the paper text, a web search, or a GitHub repository search: training code or evaluation scripts [S1].[^qa-17] The training prompt is described but its text is not reproduced in the main text or Appendices A–J of v1 [S1].[^qa-18]

> [!CAUTION]
> **QA · Corrected.** The draft read: "…training code, evaluation scripts, the nine runs' checkpoints, or training logs [S1]." The checkpoints and logs are public. The run index [S14] lists checkpoints every 10 steps for all nine runs (222 in total), per-step training rollouts and a config snapshot per run. Two of the nine run repositories (both seed-42 F1 legs) also carry a training log file, and the index links a Weights & Biases project of training curves. The evaluation repository [S15] holds per-checkpoint held-out scores and the evaluation config for each cell. The paper doesn't link any of these. QA found no training code or evaluation scripts.

## Connections

**Against the opposite finding.** Xu et al. found plain F1 below EM at 3B (0.288 versus 0.297) and 7B (0.391 versus 0.422), traced the gap to "answer avoidance", and fixed it with a −0.1 penalty for missing searches or answers [S6]. Their reward ablation used PPO, which has a value critic, and they found GRPO the least stable of three optimisers [S6]; the anchor's reconciliation discusses scale and the format floor but not this optimiser difference [S1]. Our reading: both papers find the losing reward's deficit is mostly unanswered rollouts, and both winning variants (ReSearch's 0.1 floor, Xu et al.'s answer penalty) make a wrong answer worth more than no answer. Neither ablates that ordering directly.

**Earlier evidence.** R1-Searcher's ablation on Qwen-2.5-7B-Base found an F1 answer reward ahead of EM (average cover-exact-match 60.6 versus 39.7), with no repeats reported [S4].[^qa-19]

**Alternative fixes to sparse signal.** DAPO keeps a binary reward but over-samples and discards groups whose accuracy is 0 or 1 [S8]; Dr. GRPO removes the standard-deviation term [S9]; DGPO adds teacher guidance [S5]; SSPO adds step-level self-distilled advantages for an 8B agent [S12]. The anchor tests none of these [S1].

**On this blog.** The [on-policy distillation post](../published/2026-10-14-on-policy-distillation-skills-not-knowledge.md) covers the teacher-signal route DGPO takes; the [DSec post](../published/2026-10-17-dsec-agent-sandbox-infrastructure.md) covers reward hacking in agentic RL, a stronger form of the reward–metric gap the 0.1 floor opens; the [reasoning-efficiency post](../published/2026-10-18-reasoning-model-capability-efficiency-scaling.md) measured token efficiency across scale.

## Open questions

- Does EM-only's deficit survive checkpoint selection on a held-out validation split, or evaluation at fixed steps?
- Reward density or group size? An EM-only arm at $G=16$, or with DAPO-style filtering, would separate them.
- Is the decisive factor how a reward ranks "no answer" against "wrong answer"? An EM arm with a small answer bonus would test it.
- Do the rankings hold at 2B and above on the same generation, as the authors propose [S1]?
- Will code, checkpoints and logs appear with a v2?

> [!NOTE]
> **QA · Context.** Checkpoints, training rollouts and per-checkpoint evaluation scores for the nine runs are already public, though the paper doesn't link them [S14][S15]. QA didn't find training code.

## Sources

S1. [Reinforcement Learning with Verifiable Rewards for Small Search Agents (arXiv v1)](https://arxiv.org/abs/2609.28765) · preprint · B · published 2026-09-23 · accessed 2026-10-23
S2. [Search-R1: Training LLMs to Reason and Leverage Search Engines with Reinforcement Learning (arXiv v5)](https://arxiv.org/abs/2503.09516) · preprint · B · published 2025-08-05 · accessed 2026-10-23
S3. [ReSearch: Learning to Reason with Search for LLMs via Reinforcement Learning (arXiv v3)](https://arxiv.org/abs/2503.19470) · preprint · B · published 2025-09-23 · accessed 2026-10-23
S4. [R1-Searcher: Incentivizing the Search Capability in LLMs via Reinforcement Learning (arXiv v2)](https://arxiv.org/abs/2503.05592) · preprint · B · published 2025-03-18 · accessed 2026-10-23
S5. [Can Compact Language Models Search Like Agents? Distillation-Guided Policy Optimization for Preserving Agentic RAG Capabilities (arXiv v4)](https://arxiv.org/abs/2508.20324) · preprint · B · published 2026-04-27 · accessed 2026-10-23
S6. [How to Train Your Deep Research Agent? Prompt, Reward, and Policy Optimization in Search-R1 (arXiv v1)](https://arxiv.org/abs/2602.19526) · preprint · B · published 2026-02-23 · accessed 2026-10-23
S7. [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models (arXiv v3)](https://arxiv.org/abs/2402.03300) · preprint · B · published 2024-04-27 · accessed 2026-10-23
S8. [DAPO: An Open-Source LLM Reinforcement Learning System at Scale (arXiv v2)](https://arxiv.org/abs/2503.14476) · preprint · B · published 2025-05-20 · accessed 2026-10-23
S9. [Understanding R1-Zero-Like Training: A Critical Perspective (arXiv v2)](https://arxiv.org/abs/2503.20783) · preprint · B · published 2025-10-06 · accessed 2026-10-23
S10. [Qwen/Qwen3.5-0.8B (model card)](https://huggingface.co/Qwen/Qwen3.5-0.8B) · code · B · published 2026-02-28 · accessed 2026-10-23
S11. [RUC-NLPIR/FlashRAG_datasets (dataset card)](https://huggingface.co/datasets/RUC-NLPIR/FlashRAG_datasets) · dataset · B · published 2025-05-06 · accessed 2026-10-23
S12. [Beyond Outcome Rewards: Step-Level Self-Distilled Policy Optimization for Deep Search Agents (arXiv v1)](https://arxiv.org/abs/2608.12764) · preprint · B · published 2026-08-13 · accessed 2026-10-23
S13. [MuSiQue: Multihop Questions via Single-hop Question Composition](https://aclanthology.org/2022.tacl-1.31/) · peer-reviewed · A · published 2022-05-04 · accessed 2026-10-23
S14. [pantomiman/qwen3.5-0.8b-grpo-musique-m5 (Hugging Face index of the nine M5 training runs: checkpoints, rollouts, configs)](https://huggingface.co/datasets/pantomiman/qwen3.5-0.8b-grpo-musique-m5) · code · C · published 2026-06-03 · accessed 2026-10-23
S15. [pantomiman/reason-over-search-eval-m5 (Hugging Face held-out evaluation of every checkpoint of the nine runs)](https://huggingface.co/datasets/pantomiman/reason-over-search-eval-m5) · dataset · C · published 2026-06-03 · accessed 2026-10-23

## QA notes

[^qa-1]: **Verified** — Table 1 (matched-horizon panel) of [S1] gives means of 0.271 (EM-only), 0.305 (F1-only) and 0.307 (F1+format). Section 5 says model, training data, prompt, retriever and optimiser settings are identical across the nine runs. The match is in steps, not tokens: Table 2 and Section 6.4 of [S1] show different token budgets per arm.
[^qa-2]: **Verified** — Table 1 of [S1]. At the matched horizon EM-only is last at seeds 42, 43 and 44. In the seed-horizon panel EM-only scores 0.318 against F1+format's 0.309 at seed 44, where F1+format is last. The exact-test values 1/27, 2/27 and 3/27 are in Section 6.2.
[^qa-3]: **Verified** — Section 6.1 and Table 3 of [S1] give 0.352 at step 310 against a 0.092 floor. Section 7 says each cell is the best of roughly 18 to 31 checkpoint evaluations on the reported suite, and that only seed 44's 6.9-point gap is clearly larger than that effect. [S15] lists 31 evaluated checkpoints for each seed-44 run.
[^qa-4]: **Supported with caveat** — Section 6.3 and Appendix H of [S1] say variance was not logged and give abort rates of 22.8%, 12.7% and 5.0%. The abort figures cover only the four multi-hop benchmarks, pooled over seeds at each run's best-EM checkpoint, and the authors call them descriptive, not causal. "Mostly" follows the authors' Figure 13 caption, which calls aborts "the main source" of EM-only's lower score.
[^qa-5]: **Contradicted** — corrected from "No code, checkpoints or logs were found". Checkpoints, per-step training rollouts and per-checkpoint evaluation scores for all nine runs are on Hugging Face [S14][S15]; see the CAUTION callout below the TL;DR. QA's web and Hugging Face searches found no training code either.
[^qa-6]: **Verified** — QA recomputed the seven-benchmark mean of each Table 3 row in [S1]; the largest deviation from the reported average is 0.00057. The FlashRAG card [S11] lists NQ test 3,610, TriviaQA test 11,313, PopQA 14,267, HotpotQA dev 7,405, 2WikiMultiHopQA dev 12,576, MuSiQue dev 2,417 and Bamboogle 125. These sum to 51,713, and the four multi-hop splits sum to 22,523, which tripled is 67,569.
[^qa-7]: **Supported with caveat** — the model card [S10] lists Apache-2.0 and a 24-layer layout of 6 × (3 Gated DeltaNet blocks, then 1 Gated Attention block). The two layer types alternate in a 3:1 ratio, not one for one. The card also describes the model as a causal language model with a vision encoder.
[^qa-8]: **Verified** — QA recomputed: 0.955^5 ≈ 0.794, 0.8^5 ≈ 0.328 and 0.8^8 ≈ 0.168. The inputs match [S1]: G = 5, a first-cadence training exact-match rate of 4.5–4.8%, and a training-time ceiling of 20–22% (Section 6.5).
[^qa-9]: **Supported with caveat** — no source is cited, but the statement follows from convexity. For a fixed mean success rate, E[(1−p)^G] ≥ (1−E[p])^G by Jensen's inequality, so uneven question difficulty can't lower the all-zero share below the estimate.
[^qa-10]: **Supported with caveat** — matches Section 5.2 and Appendix I of [S1], but the authors' run index [S14] says the two seed-42 F1 legs ran on H200 GPUs (see the NOTE below this paragraph).
[^qa-11]: **Verified** — Section 6.1, the lower panel of Table 1, and Table 3 of [S1]. [S15] lists the same 0.352 at step 310.
[^qa-12]: **Verified** — Table 1 of [S1]. QA recomputed the means and ranges; the exact-test values are from Section 6.2.
[^qa-13]: **Verified** — QA recounted Table 3 of [S1]. At seed 44, EM-only beats F1+format on NQ, TriviaQA, PopQA, HotpotQA and 2WikiMultiHopQA, and beats F1-only only on PopQA (0.383 against 0.370). The F1+format minus F1-only gaps are from Section 6.2.
[^qa-14]: **Verified** — QA re-weighted each Table 3 row of [S1] by the [S11] split sizes, and separately dropped Bamboogle. At every seed the three-arm order is unchanged: F1+format, F1-only, EM-only at seeds 42 and 43, and F1-only, EM-only, F1+format at seed 44 (seed-horizon checkpoints).
[^qa-15]: **Verified** — QA recomputed from Table 3 of [S1] (F1-only, seed 44) and Table 3 of [S2] (Search-R1-instruct GRPO, Qwen2.5-3B). The per-benchmark differences are −0.034, −0.034, −0.021, +0.028, −0.025, +0.037 and +0.160, summing to +0.111, a mean of +0.016. The six-benchmark mean without Bamboogle is −0.008. [S2] uses top-3 retrieval and trains on NQ plus HotpotQA (Section 4.3).
[^qa-16]: **Supported with caveat** — both figures appear in [S1] as stated. The public EM-only seed-42 run [S14] has 211 per-step training rollouts and its last saved checkpoint at step 210. That reconciles the two: 211 training steps, with the last checkpoint at step 210.
[^qa-17]: **Contradicted** — corrected. The original list also named "the nine runs' checkpoints, or training logs", which are public [S14][S15] (see the CAUTION callout). The rest of the absence claim, training code and evaluation scripts, matches QA's own searches.
[^qa-18]: **Verified** — QA searched the v1 text. Figures 1 and 12 show the tool schema and an illustrative question, not the training prompt. The full rendered prompt does appear in the public training rollouts [S14].
[^qa-19]: **Supported with caveat** — Table 5 of [S4] gives average cover-exact-match over HotpotQA, 2WikiMultiHopQA and Bamboogle of 60.6 (F1) against 39.7 (EM) for Qwen-2.5-7B-Base, with no seeds or repeats reported. R1-Searcher's EM reward is +1/−1, not 0/1, and is added to a format reward, so its EM arm isn't the same reward as Search-R1's.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
