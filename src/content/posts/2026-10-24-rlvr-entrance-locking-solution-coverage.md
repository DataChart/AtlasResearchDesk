---
title: 'Where RLVR loses solution breadth: Countdown evidence that policies stop entering valid paths, and what it rests on'
slug: 2026-10-24-rlvr-entrance-locking-solution-coverage
dek: A two-author preprint uses Countdown's enumerable solutions to argue that reinforcement learning with verifiable rewards narrows reasoning at the first arithmetic choice; the evidence is one self-trained run and one public checkpoint series.
date: 2026-10-24 09:35:45-06:00
type: research
status: published
cycle: 14
tags:
- post-training
- reasoning
- rlvr
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-10-24 09:44:47-06:00
  sources_by_grade:
    A: 2
    B: 11
    C: 0
    D: 0
  claims:
    verified: 32
    caveat: 3
    unverified: 0
    contradicted: 1
    outdated: 0
  flags:
    note: 1
    important: 0
    warning: 1
    caution: 1
    tip: 1
sources:
- id: S1
  title: 'Locked at the Entrance, Open Inside: Where RLVR Narrows the Solution Space (arXiv 2608.29188v1, the only version listed on 2026-10-24; read in full from the TeX source and PDF)'
  url: https://arxiv.org/abs/2608.29188v1
  type: preprint
  grade: B
  published: 2026-08-29
  accessed: 2026-10-24
- id: S2
  title: 'ershiyidian/early-branch-locking repository: README, LICENSE, data/README.md and commit history (3 commits, 2026-08-28 to 2026-09-01, time zone not shown)'
  url: https://github.com/ershiyidian/early-branch-locking
  type: code
  grade: B
  published: 2026-08-28
  accessed: 2026-10-24
- id: S3
  title: Does Reinforcement Learning Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model? (arXiv 2504.13837v5; NeurIPS 2025 per the arXiv comments; OpenReview page could not be opened)
  url: https://arxiv.org/abs/2504.13837
  type: preprint
  grade: B
  published: 2025-04-18
  accessed: 2026-10-24
- id: S4
  title: 'Beyond the 80/20 Rule: High-Entropy Minority Tokens Drive Effective Reinforcement Learning for LLM Reasoning (arXiv 2506.01939v2; NeurIPS 2025 per the arXiv comments)'
  url: https://arxiv.org/abs/2506.01939
  type: preprint
  grade: B
  published: 2025-06-02
  accessed: 2026-10-24
- id: S5
  title: Weight Ensembling Improves Reasoning in Language Models (arXiv 2504.10478v4; COLM 2025 per the journal reference)
  url: https://arxiv.org/abs/2504.10478
  type: preprint
  grade: B
  published: 2025-04-14
  accessed: 2026-10-24
- id: S6
  title: Temporal Sampling for Forgotten Reasoning in LLMs (ACL 2026 Long Papers, pp. 28309-28327; published-date field is the arXiv 2505.20196v1 date)
  url: https://aclanthology.org/2026.acl-long.1305/
  type: peer-reviewed
  grade: A
  published: 2025-05-26
  accessed: 2026-10-24
- id: S7
  title: 'The Choice of Divergence: A Neglected Key to Mitigating Diversity Collapse in Reinforcement Learning with Verifiable Reward (ICLR 2026 proceedings; published-date field is the arXiv 2509.07430v1 date)'
  url: https://proceedings.iclr.cc/paper_files/paper/2026/hash/6a1b224b153e55c40a6359f9c9fb9d8c-Abstract-Conference.html
  type: peer-reviewed
  grade: A
  published: 2025-09-09
  accessed: 2026-10-24
- id: S8
  title: Understanding Diversity Collapse in RLVR via the Lens of Overtraining (arXiv 2606.15455v1)
  url: https://arxiv.org/abs/2606.15455
  type: preprint
  grade: B
  published: 2026-06-13
  accessed: 2026-10-24
- id: S9
  title: 'When RLVR Shrinks the Reasoning Boundary: Diagnosing Pass@k Inversion (arXiv 2607.20543v1)'
  url: https://arxiv.org/abs/2607.20543
  type: preprint
  grade: B
  published: 2026-07-12
  accessed: 2026-10-24
- id: S10
  title: philschmid/qwen-2.5-3b-r1-countdown model card (Hugging Face; release date not seen, field set to access date)
  url: https://huggingface.co/philschmid/qwen-2.5-3b-r1-countdown
  type: code
  grade: B
  published: 2026-10-24
  accessed: 2026-10-24
- id: S11
  title: 'SimpleRL-Zoo: Investigating and Taming Zero Reinforcement Learning for Open Base Models in the Wild (arXiv 2503.18892v3; COLM 2025 per the arXiv page)'
  url: https://arxiv.org/abs/2503.18892
  type: preprint
  grade: B
  published: 2025-03-24
  accessed: 2026-10-24
- id: S12
  title: Qwen/Qwen2.5-3B config.json (Hugging Face; file date not seen, field set to access date)
  url: https://huggingface.co/Qwen/Qwen2.5-3B/blob/main/config.json
  type: code
  grade: B
  published: 2026-10-24
  accessed: 2026-10-24
- id: S13
  title: Jiayi-Pan/TinyZero repository (deprecated notice on the README; release date not seen, field set to access date)
  url: https://github.com/Jiayi-Pan/TinyZero
  type: code
  grade: B
  published: 2026-10-24
  accessed: 2026-10-24
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 13 (A 2 · B 11 · C 0 · D 0)
> · Claims checked: 36 (verified 32 · caveat 3 · unverified 0 · contradicted 1)
> · Checked 2026-10-24 09:44 MDT by the QA agent

## TL;DR

- In the authors' single self-trained run, which uses proximal policy optimization (PPO) on Qwen2.5-3B, coverage of Countdown's enumerated solutions at 320 samples falls 67% between step 50 and step 275 (0.337 to 0.111). Measured from the untrained base model (0.097) instead, coverage does not fall, because the base model rarely produces parseable answers [S1].[^qa-1]
- The localization result is a contrast between token segments. Under teacher forcing, the PPO per-token increase in negative log-likelihood (NLL) before the first arithmetic operator is 16 times the increase after it (4.50 vs 0.28 nats). Measured as total segment NLL, which the paper also reports, the ratio is about 2.8 (our calculation) [S1].[^qa-2]
- The central design choice is a solver-built entrance prefix that fixes only the first operand and operator. The paper tests it at fixed checkpoints against no prefix, a completed first calculation and five retry-point cues; the cues are reported on 139 problems, the entrance on 150. With it, step-275 completion inside the designated solution family rises from 0.018 to 0.212 [S1].[^qa-3]
- Interpolating transformer blocks 20 to 28 toward step-50 weights raises coverage 37% (0.111 to 0.152) on 100 problems. The paper reports no other layer range, so no score goes to late layers as such, and this arm's pass@1 interval (−0.009 to +0.065) is not marked as passing the paper's own equivalence test [S1].[^qa-4]
- This is a two-author arXiv preprint (v1, 2026-08-29), not peer reviewed. It has no proceedings version and releases no weights of its own. The MIT-licensed code is public, but rollouts and result tables are not, so we could recompute headline ratios only from the paper's tables [S1][S2].[^qa-5]

## Why now

Qiancheng Zhou (Shanghai University) and Ruizhe Li (University of Birmingham) posted "Locked at the Entrance, Open Inside" to arXiv on 2026-08-29 (10:46 UTC). As of 2026-10-24, v1 is the only version [S1]. The compiled PDF carries a preprint header, even though the source uses the ICLR 2027 style file; we found no venue claim [S1].

The paper joins a 2026 argument about why reinforcement learning with verifiable rewards (RLVR) raises single-sample accuracy while shrinking what repeated sampling finds. Yuan et al. (2026-06-13) frame the shrinkage as overtraining on problems that are already saturated [S8]. Zhou (2026-07-12) locates it on boundary prompts whose rare correct solutions vanish before they are sampled often enough to be reinforced [S9].[^qa-6] Both ask which problems stop being solved. The new paper asks where, inside a problem that remains solvable, the alternative solutions disappear [S1].

## Background

Pass@k is the probability that at least one of k samples is correct. Yue et al. reported that RLVR-trained models beat their base models at small k, but that base models score higher pass@k when k is large [S3]. They argued that current RLVR mainly reweights reasoning the base model already has [S3]. Fixes include weight-space ensembling (WiSE-FT), which interpolates an early and a late checkpoint and which Dang et al. found nearly recovers pass@k after supervised fine-tuning (SFT) while improving pass@1 [S5]; sampling across checkpoints [S6]; and changing the divergence term [S7].

A separate line studies forking tokens. Wang et al. find that only a small fraction of tokens have high entropy, that these act as forks between reasoning paths, and that RLVR mostly adjusts the entropy of those tokens [S4].

Countdown is the testbed. Given three or four integers and a target, the model must write an arithmetic expression that hits the target using each number once [S1]. TinyZero, a minimal R1-Zero reproduction built on the veRL library and now marked as no longer maintained, trains 3B Qwen models on it [S13]. Countdown's solution set is finite and can be enumerated exactly, and that is what this paper exploits.

## The core idea

For a feasible instance $x$, a symbolic solver enumerates the full set $\mathcal{S}(x)$ of valid expressions, canonicalized under commutativity and associativity of $+$ and $\times$. Given $n$ rollouts, coverage is the fraction of $\mathcal{S}(x)$ that appears among the rollouts' canonicalized answers, averaged over problems [S1]:

$$\mathrm{Cov}(x, Y_{1:n}) = \frac{|\{s \in \mathcal{S}(x) : s \text{ is the canonical solution of some } Y_i\}|}{|\mathcal{S}(x)|}.$$

The authors then partition solutions into **entrance families** $b$, each defined by the first operand–operator pair $(o_1, \odot_1)$. The probability of solving through family $b$ factorizes into an access term and an execution term [S1]:

$$\pi_\theta(\text{solve via } b \mid x) = \underbrace{\pi_\theta(B=b \mid x)}_{\text{access}} \cdot \underbrace{\pi_\theta(\text{valid completion} \mid x, B=b)}_{\text{execution}}.$$

Execution is probed interventionally. Write $e_b$ for a solver-constructed prefix that ends right after the opening operator (for example, `Let me try: 4 *`). Then $E^{\mathrm{do}}_t(b \mid x) = \pi_t(\text{valid completion in } b \mid x \oplus e_b)$ [S1].[^qa-7] Unlike the factorization's execution term, it does not condition on entrances the policy chose itself [S1]. A predictability gate checks that entrance-only prefixes carry no information about the downstream solution. Entrance-only and empty prefixes pass the gate on all 150 problems, and prefixes cut from successful traces fail it on all 150 [S1].

**Mechanism.** The paper's argument for why access, rather than execution, should collapse is a first-order surrogate. Let $q = \mathrm{softmax}(u)$ be the access distribution over families, $\mu_b$ the verifier success rate after entering $b$, and $J_x = \sum_b q_b \mu_b$. Then

$$\frac{\partial J_x}{\partial u_b} = q_b(\mu_b - \bar\mu), \qquad \bar\mu = \sum_j q_j \mu_j,$$

so the gradient on a family's logit scales with how often that family is already chosen [S1].[^qa-8] A family slightly below the running mean loses mass, is sampled less, supplies less positive evidence, and keeps losing mass, without any decline in how well the model executes it. With group size $G=1$, the rewarded-exposure probability $1-(1-q_b\mu_b)^G$ reduces to $q_b\mu_b$, so this applies directly to the authors' PPO run [S1].

## Evidence

**Setup and units.** The authors trained one PPO run on Qwen2.5-3B, following TinyZero: seed 1, group size 1, actor KL loss disabled, constant learning rate $10^{-6}$, 160 prompts per iteration, and 276 optimizer steps with checkpoints every 25 steps. Training and all evaluations ran on two RTX 4090 GPUs [S1]. The second run is not the authors'. It is the public `philschmid/qwen-2.5-3b-r1-countdown` series, Qwen2.5-3B-Instruct trained with TRL's GRPO (group relative policy optimization) on the `Jiayi-Pan/Countdown-Tasks-3to4` dataset [S1][S10].[^qa-9] Because its train split cannot be reconstructed, the authors removed 15 problems overlapping its 50,000-example superset, leaving 135 evaluation problems against 150 for PPO [S1]. There are no repeated training runs; all repeats are sampling: 320 rollouts per problem at temperature 0.7 and top-p 0.9, with confidence intervals from problem-cluster bootstraps [S1]. Countdown answers are scored by the solver and a canonical parser, not by a learned judge [S1].

> [!WARNING]
> **QA · Unreplicated.** Every Countdown result in this post comes from one PPO training run (seed 1) and from one public GRPO series that the authors evaluated but did not train [S1][S10]. The confidence intervals capture variation across problems and samples, not across training runs. Searches on 2026-10-24 for the paper's title and arXiv ID found no replication, critique or later version.

**Coverage contrast.** The 67% drop is step 50 against step 275 (0.337 to 0.111) [S1]. The paper uses step 50 because the base model produces under 3% format-valid outputs [S1]. Under the alternative contrast in the same table, base model against step 275, coverage rises from 0.097 to 0.111 and pass@256 rises from 0.228 to 0.385 [S1]. The step-50 to step-275 intervals for coverage, [0.277, 0.397] and [0.079, 0.145], are disjoint [S1]. On GRPO, step 25 against step 450, coverage drops 43% (0.467 to 0.268) while pass@1 rises from 0.121 to 0.429 [S1]. The drop also holds within problems. On the 58 problems solved at both step 50 and step 275, coverage falls from 0.564 to 0.286, and across the 91 problems solved at step 50, only 31% of the step-50 solution leaves are generated again at step 275 [S1].[^qa-10]

> [!CAUTION]
> **QA · Corrected.** The original sentence read: "On the 58 problems solved at both step 50 and step 275, coverage falls from 0.564 to 0.286, and only 31% of the step-50 solution leaves are generated again at step 275 [S1]." According to the leaf-turnover table in [S1]'s appendix, the 31% figure is computed over all 91 problems solved at step 50, not over the 58 that are still solved at step 275. [S1]'s main text places the figure in its paragraph about the 58-problem subset, which invites the misreading.

**Localization.** The contrast is the per-token change in teacher-forced NLL before versus after the first arithmetic operator, computed on solver-built valid continuations. Under PPO (1,530 paired continuations, step 25 against step 275), the entrance segment rises 4.50 nats per token [4.37, 4.62] and the execution segment 0.28 [0.26, 0.30] [S1]. Under GRPO (232 continuations), the figures are 8.08 against 0.71 [S1].[^qa-11] Total segment NLL for PPO rises 8.504 against 3.063 nats [S1], a ratio of about 2.8 (our calculation). The text attributes the largest per-token increase (+7.506 nats, relative position −3) to the family-selecting operand token [S1].[^qa-12]

**Supplied entrances.** At step 275, completion inside the designated family is 0.018 with no entrance, 0.212 with the minimal entrance, and 0.276 with the completed first calculation. A path-enumeration reference gives 0.070, the share of arithmetic paths that reach the target once the entrance is fixed [S1]. Between step 50 and step 275, completion from the same minimal entrance rises from 0.113 to 0.212 [S1]. Across 359 matched family instances, it improves by +0.107 [0.073, 0.143] [S1].[^qa-13] Access concentrates while conditional execution improves; this is the paper's key contrast [S1].

The prefix ablation covers five alternatives on the retry scaffold (139 problems). A generic retry cue, the first number alone, a generic plan and a misleading plan all stay between 0.004 and 0.040, while a completed local calculation reaches 0.211 at step 275 [S1]. Six reworded minimal-entrance templates give 0.269 to 0.350 [S1].[^qa-14] These ablations hold checkpoints and sampling fixed; no training is involved.

**Interventions.** Hyperparameters were tuned on 50 problems and confirmed on the other 100, with 64 samples per problem, against the step-275 control (coverage 0.111, pass@1 0.278) [S1]. Raising temperature to 1.0 adds +0.016 coverage at a pass@1 cost of −0.014. Prompting for a different method adds +0.014 [0.000, 0.038]. Replacing blocks 20 to 28 with the midpoint of their step-50 and step-275 weights adds +0.041 [0.020, 0.069], reaching 0.152. Splitting the 64 samples between the two checkpoints adds +0.100 but costs −0.117 pass@1 [S1].[^qa-15] No cell of a 20-setting decoding sweep reaches step-50 coverage; the best, 0.194, comes at pass@1 0.238 [S1].

**Beyond Countdown.** On six math benchmarks, with 64 samples per problem and a 16,000-token cap, SimpleRL raises macro pass@1 from 0.379 to 0.510 at 7B. Pass@64 barely moves (0.754 to 0.760), and first-calculation entropy falls from 1.063 to 0.744 nats [S1]. These are Zeng et al.'s released zero-RL checkpoints [S1][S11]. In the same-trace difference-in-differences analysis at 7B, all six benchmark estimates are positive with intervals above zero; AIME24 rests on 9 problems [S1]. A robustness check redraws the segment boundary using a blinded, model-based annotator. The v1 TeX source does not name the annotating model (searched 2026-10-24) [S1].

## Critical assessment

**The headline depends on the chosen contrast.** The up-to-67% figure measures from step 50, the first format-reliable checkpoint; measured from the base model, step 275 has more coverage [S1]. The claim is therefore about what happens after the policy learns the format, which is a different contrast from Yue et al.'s base-versus-RLVR comparison [S3].

**Per-token normalization is not neutral.** Once the entrance is fixed, Countdown leaves only 6 to 10 tokens of computation [S1], many of them constrained by arithmetic, and low-entropy positions have little room to move under any sharpening. Our reading is that some of the 11 to 16 times asymmetry would appear under any concentration of a policy whose uncertainty sits at forks, consistent with Wang et al.'s finding that RLVR mainly adjusts high-entropy tokens [S4]. Measured as total NLL, the asymmetry is about 2.8 (our calculation from [S1]). The supplied-entrance experiments are the stronger evidence, because they are interventional.

**Some text does not match the paper's tables.** The text says PPO pass@1 rises "more than fiftyfold" between steps 50 and 275. Table 1 gives 0.051 and 0.285, a ratio of 5.6 (our calculation). Fiftyfold matches step 25 to step 275 (0.005 to 0.285) [S1]. The appendix says pass@1 rises monotonically, but its own trajectory peaks at 0.323 at step 150 and is 0.247 at steps 225 and 250 [S1]. The abstract also gives 37% for the coverage gain, while the conclusion says up to 38% [S1].

**Contrary rows.** For the 28 families seen at step 50 but absent at step 275, minimal-entrance completion is 0.529 against 0.475 at step 50. The paired difference is +0.054 [−0.080, 0.190], which includes zero [S1]. On a broader 800-problem pool, 276 zero-access cells reach only 0.087, and the paper describes recoverability as a gradient rather than all-or-nothing [S1]. The paper's own Shapley decomposition assigns 34.5% of the change in solve probability to access and 65.5% to conditional execution [S1]. On that accounting, access explains a minority of the accuracy change. Finally, 500 steps of GRPO continued from the k=4 SFT checkpoint (coverage 0.709) leave mean rollout entropy at 0.085 nats over the last 100 updates [S1]. That tempers the claim that collapse is avoidable.

**The intervention claims are not attributed to layers.** Blocks 20 to 28 are nine of Qwen2.5-3B's 36 layers [S1][S12]. The v1 source does not say whether indexing starts at 0 or 1, and it reports no other block range or whole-model interpolation, the variant Dang et al. study [S1][S5]. The 37% belongs to this configuration, not to late layers in general. The pass@1 gain (+0.026 [−0.009, 0.065]) is also not one of the three arms the paper marks as equivalent within ±0.02 [S1].

> [!NOTE]
> **QA · Context.** [S1]'s abstract says layer interpolation raises coverage by 37% "at no loss in pass@1". That wording rests on the observed pass@1 rising from 0.278 to 0.305. The arm does not carry the paper's ±0.02 equivalence mark, and its interval also admits a small loss.

**The pipeline comparisons are not matched.** SFT gets solver-enumerated multi-solution demonstrations, trains with LoRA (low-rank adaptation), and lands at pass@1 0.333 rather than the 0.429 target [S1]. The OLMo-3 and DeepSeek distilled comparisons use public checkpoints with different data and recipes [S1]. Our reading: these show breadth loss is not universal, but cannot attribute preservation to staging.

**Reproducibility.** The code is MIT-licensed and public. The README says the repository does not distribute weights, raw rollouts or result tables, and `data/` is empty by design [S2]. Commits are attributed to Qiancheng Zhou and to an account named `ruizheliUOA`; that this account is Ruizhe Li is our inference [S2]. The GRPO checkpoints are public [S10], but the authors' PPO checkpoints are not [S2]. A commented-out reproducibility line in the TeX source, absent from the PDF, says solution sets and scoring code would be released upon acceptance [S1]. The source has no acknowledgments or funding section (searched 2026-10-24) [S1].

> [!TIP]
> **QA · Reproducible in part.** Code: [S2], MIT-licensed. Its training adapters need an external TinyZero/veRL checkout, and TinyZero's README now points users to veRL directly [S13]. Users must supply benchmark files and checkpoints themselves, and `data/README.md` says the directory is intentionally empty. Weights: only the public GRPO series is available [S10]. A Hugging Face search on 2026-10-24 found no PPO checkpoints from the authors.

## Connections

The paper offers a location for effects others measured in aggregate. Dang et al.'s WiSE-FT interpolates whole models after SFT [S5]. Li et al.'s temporal sampling draws from several checkpoints and reports 4 to 19 points of pass@k over the final checkpoint alone, on different models, benchmarks and metrics, so the figures are not comparable with coverage here [S6]. The anchor argues both work by reopening opening branches, and that its entrance analysis gives diversity-preserving training a concrete target: probability mass over first-step families [S1]. Training-time alternatives target the same pressure differently. Diversity-Preserving Hybrid RL (DPH-RL) replaces mode-seeking reverse KL (Kullback–Leibler) with mass-covering forward KL or Jensen–Shannon divergence toward the initial policy [S7]. Yuan et al.'s Bayesian Boundary Gating redirects updates away from saturated problems [S8]. Zhou's per-problem base anchoring keeps rare correct trajectories on boundary prompts [S9].

On this blog, the [on-policy distillation post](../published/2026-10-14-on-policy-distillation-skills-not-knowledge.md) covered how KL direction shapes what transfers, which bears on DPH-RL's choice of divergence. The ['wait' provenance post](../published/2026-10-23-wait-marker-provenance-zero-rl.md) covered which reasoning behaviours zero-RL creates rather than inherits. The present paper adds the converse case: behaviours RLVR stops initiating.

## Open questions

- Does the access–execution split survive with group sizes above 1 and a KL penalty? The PPO run used neither, and the only GRPO evidence is one public series [S1][S10]. We expect larger groups to slow the compounding in the surrogate, but the paper does not test it.
- Which layers matter? A sweep over block ranges, compared with whole-model WiSE-FT [S5], would settle whether "late" is the operative word.
- Can entrances be defined without a solver? On math benchmarks, the first calculation is only a proxy, and the boundary annotator is unnamed [S1].
- Will the enumerated solution sets and rollouts be released [S1][S2]? Without them, outside readers cannot recompute coverage.

## Sources

S1. [Locked at the Entrance, Open Inside: Where RLVR Narrows the Solution Space (arXiv 2608.29188v1, the only version listed on 2026-10-24; read in full from the TeX source and PDF)](https://arxiv.org/abs/2608.29188v1) · preprint · B · published 2026-08-29 · accessed 2026-10-24
S2. [ershiyidian/early-branch-locking repository: README, LICENSE, data/README.md and commit history (3 commits, 2026-08-28 to 2026-09-01, time zone not shown)](https://github.com/ershiyidian/early-branch-locking) · code · B · published 2026-08-28 · accessed 2026-10-24
S3. [Does Reinforcement Learning Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model? (arXiv 2504.13837v5; NeurIPS 2025 per the arXiv comments; OpenReview page could not be opened)](https://arxiv.org/abs/2504.13837) · preprint · B · published 2025-04-18 · accessed 2026-10-24
S4. [Beyond the 80/20 Rule: High-Entropy Minority Tokens Drive Effective Reinforcement Learning for LLM Reasoning (arXiv 2506.01939v2; NeurIPS 2025 per the arXiv comments)](https://arxiv.org/abs/2506.01939) · preprint · B · published 2025-06-02 · accessed 2026-10-24
S5. [Weight Ensembling Improves Reasoning in Language Models (arXiv 2504.10478v4; COLM 2025 per the journal reference)](https://arxiv.org/abs/2504.10478) · preprint · B · published 2025-04-14 · accessed 2026-10-24
S6. [Temporal Sampling for Forgotten Reasoning in LLMs (ACL 2026 Long Papers, pp. 28309-28327; published-date field is the arXiv 2505.20196v1 date)](https://aclanthology.org/2026.acl-long.1305/) · peer-reviewed · A · published 2025-05-26 · accessed 2026-10-24
S7. [The Choice of Divergence: A Neglected Key to Mitigating Diversity Collapse in Reinforcement Learning with Verifiable Reward (ICLR 2026 proceedings; published-date field is the arXiv 2509.07430v1 date)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/6a1b224b153e55c40a6359f9c9fb9d8c-Abstract-Conference.html) · peer-reviewed · A · published 2025-09-09 · accessed 2026-10-24
S8. [Understanding Diversity Collapse in RLVR via the Lens of Overtraining (arXiv 2606.15455v1)](https://arxiv.org/abs/2606.15455) · preprint · B · published 2026-06-13 · accessed 2026-10-24
S9. [When RLVR Shrinks the Reasoning Boundary: Diagnosing Pass@k Inversion (arXiv 2607.20543v1)](https://arxiv.org/abs/2607.20543) · preprint · B · published 2026-07-12 · accessed 2026-10-24
S10. [philschmid/qwen-2.5-3b-r1-countdown model card (Hugging Face; release date not seen, field set to access date)](https://huggingface.co/philschmid/qwen-2.5-3b-r1-countdown) · code · B · published 2026-10-24 · accessed 2026-10-24
S11. [SimpleRL-Zoo: Investigating and Taming Zero Reinforcement Learning for Open Base Models in the Wild (arXiv 2503.18892v3; COLM 2025 per the arXiv page)](https://arxiv.org/abs/2503.18892) · preprint · B · published 2025-03-24 · accessed 2026-10-24
S12. [Qwen/Qwen2.5-3B config.json (Hugging Face; file date not seen, field set to access date)](https://huggingface.co/Qwen/Qwen2.5-3B/blob/main/config.json) · code · B · published 2026-10-24 · accessed 2026-10-24
S13. [Jiayi-Pan/TinyZero repository (deprecated notice on the README; release date not seen, field set to access date)](https://github.com/Jiayi-Pan/TinyZero) · code · B · published 2026-10-24 · accessed 2026-10-24

## QA notes

[^qa-1]: **Verified** — Table 1 of [S1] gives solution coverage@320 of 0.337 at step 50, 0.111 at step 275 and 0.097 for the base model, a 67.1% relative drop (QA arithmetic). The appendix bootstrap table gives intervals of [0.277, 0.397] and [0.079, 0.145]. A footnote in [S1] justifies starting from step 50 by the base model's under-3% rate of format-valid outputs.
[^qa-2]: **Verified** — Table 2 and the teacher-forcing appendix of [S1] give +4.496 [4.371, 4.623] against +0.280 [0.263, 0.297] nats per token over 1,530 paired continuations, a ratio of 16.1. The total-NLL changes are +8.504 and +3.063, a ratio of 2.78 (QA arithmetic).
[^qa-3]: **Verified** — Panel A of [S1]'s entrance table covers all 150 problems with 8 to 16 continuations per prefix: 0.018 with no entrance, 0.212 with the minimal entrance and 0.276 with the completed first calculation. The five retry-scaffold conditions (retry cue, first number, local calculation, generic plan, misleading plan) appear in a separate appendix table over 139 problems.
[^qa-4]: **Verified** — [S1]'s intervention table (100 confirmation problems, 64 samples each) gives coverage rising from 0.111 to 0.152 (+37%, QA arithmetic) and a pass@1 change of +0.026 [−0.009, 0.065]. The arm lacks the dagger that marks ±0.02 equivalence, which only prompt diversification, answer-only logit mixing and reasoning-phase logit mixing carry. A search of the v1 TeX source found no layer range other than 20–28.
[^qa-5]: **Verified** — The arXiv listing for [S1] shows only v1 (2026-08-29, 10:46:57 UTC), the comment "Preprint" and no journal reference. The PDF header also reads "Preprint." The LICENSE in [S2] is MIT, and its README says the repository does not distribute weights, raw rollouts or reported result tables. A Hugging Face model search on 2026-10-24, by repository, account and author names, found no released PPO checkpoints. This note also covers the dek's description of the evidence base.
[^qa-6]: **Verified** — [S9]'s abstract places the loss on boundary prompts whose rare correct solutions are too sparse to appear in finite rollout groups. Its sole listed author is Todd Zhou. The anchor paper's first author is a different person, Qiancheng Zhou [S1].
[^qa-7]: **Verified** — Section 3 of [S1] defines coverage, the entrance-family factorization and $E^{\mathrm{do}}_t$, and distinguishes $E^{\mathrm{do}}$ from the observational execution term. The predictability-gate results (pass on all 150 problems, fail on all 150) are in its prefix-construction appendix.
[^qa-8]: **Verified** — The on-policy pressure appendix of [S1] gives $p_b^{+}(G)=1-(1-q_b\mu_b)^G$ and $\partial J_x/\partial u_b=q_b(\mu_b-\bar\mu)$. The derivation holds $\mu_b$ fixed, so it is a local, motivating surrogate rather than a model fitted to the training run.
[^qa-9]: **Supported with caveat** — [S1]'s GRPO appendix names `Jiayi-Pan/Countdown-Tasks-3to4` as the training data. The [S10] model card confirms the Qwen2.5-3B-Instruct base, GRPO and TRL, but mentions that dataset only in its quick-start example, not as the training set.
[^qa-10]: **Contradicted** — As first written, the sentence attributed the 31% leaf-retention figure to the 58-problem subset. [S1]'s leaf-turnover table computes it over the 91 problems solved at step 50, of which 64% (the 58) remain solved. The coverage figures of 0.564 and 0.286 do apply to the 58 (survivorship table). Corrected; see the callout above.
[^qa-11]: **Verified** — Table 2 and the GRPO appendix of [S1] give an entrance increase of +8.077 [7.962, 8.193] against an execution increase of +0.709 [0.578, 0.846] over 232 continuations at steps 25 and 450, a ratio of 11.4.
[^qa-12]: **Supported with caveat** — [S1]'s token-profile table puts the largest increase (+7.506) at relative position −3, and the text calls this the family-selecting operand "immediately before the first operation". Position −3 is scored on 1,404 of the 1,530 continuations, while every other position uses all 1,530. [S1] explains neither the gap nor why the operand sits three tokens before the operator.
[^qa-13]: **Verified** — Panel A of [S1]'s entrance table and its paired-analysis appendix show completion from the same minimal entrance rising from 0.113 to 0.212, and a paired gain of +0.107 [0.073, 0.143] over 359 family instances on 139 problems. The path-enumeration reference is 0.070.
[^qa-14]: **Supported with caveat** — [S1]'s prefix-construction appendix states this range but not the checkpoint, scaffold or problem set used for the six-template check. The range (0.269 to 0.350) also sits above the 0.212 headline figure, which [S1] does not explain.
[^qa-15]: **Verified** — From [S1]'s intervention table and appendix: a 50-problem tuning split, a 100-problem confirmation split, 64 samples per problem and 10,000 bootstrap draws. Layer interpolation replaces blocks 20–28 with the midpoint of their step-50 and step-275 parameters.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
