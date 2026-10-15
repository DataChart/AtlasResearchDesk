---
title: On-policy distillation transfers compositional skill but few new facts, and the KL direction is why
slug: 2026-10-14-on-policy-distillation-skills-not-knowledge
dek: A controlled study finds that standard reverse-KL on-policy distillation teaches a student to compose facts it already knows but transfers few new ones, that forward KL recovers much of the factual transfer, and that the evidence rests on single-seed LoRA runs with a thin real-world check.
date: 2026-10-14 18:16:00-06:00
type: research
status: published
cycle: 1
tags:
- post-training
- distillation
- knowledge-transfer
reading_time_min: 13
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-10-14 23:15:55-06:00
  sources_by_grade:
    A: 4
    B: 10
    C: 0
    D: 0
  claims:
    verified: 53
    caveat: 5
    unverified: 0
    contradicted: 0
    outdated: 0
  flags:
    note: 0
    important: 0
    warning: 1
    caution: 0
    tip: 0
sources:
- id: S1
  title: On-Policy Distillation Teaches New Skills but Not New Knowledge
  url: https://arxiv.org/abs/2610.09639
  type: preprint
  grade: B
  published: 2026-10-07
  accessed: 2026-10-14
- id: S2
  title: 'RL Starts before RL: On Policy Distillation for Better Reinforcement Learning'
  url: https://arxiv.org/abs/2609.28145
  type: preprint
  grade: B
  published: 2026-09-23
  accessed: 2026-10-14
- id: S3
  title: 'On-Policy Distillation of Language Models: Learning from Self-Generated Mistakes'
  url: https://arxiv.org/abs/2306.13649
  type: preprint
  grade: B
  published: 2023-06-23
  accessed: 2026-10-14
- id: S4
  title: 'MiniLLM: On-Policy Distillation of Large Language Models'
  url: https://arxiv.org/abs/2306.08543
  type: preprint
  grade: B
  published: 2023-06-14
  accessed: 2026-10-14
- id: S5
  title: On-Policy Distillation
  url: https://thinkingmachines.ai/blog/on-policy-distillation/
  type: lab-post
  grade: B
  published: 2025-10-27
  accessed: 2026-10-14
- id: S6
  title: Qwen3 Technical Report
  url: https://arxiv.org/abs/2505.09388
  type: technical-report
  grade: B
  published: 2025-05-14
  accessed: 2026-10-14
- id: S7
  title: Self-Distillation Enables Continual Learning (ICML 2026, PMLR 306)
  url: https://proceedings.mlr.press/v306/shenfeld26a.html
  type: peer-reviewed
  grade: A
  published: 2026-09-29
  accessed: 2026-10-14
- id: S8
  title: Entropy-Aware On-Policy Distillation of Language Models (ICML 2026, PMLR 306)
  url: https://proceedings.mlr.press/v306/jin26e.html
  type: peer-reviewed
  grade: A
  published: 2026-09-29
  accessed: 2026-10-14
- id: S9
  title: 'ToDi: Token-wise Distillation via Fine-Grained Divergence Control (EMNLP 2025)'
  url: https://aclanthology.org/2025.emnlp-main.409/
  type: peer-reviewed
  grade: A
  published: 2025-11-04
  accessed: 2026-10-14
- id: S10
  title: Does On-Policy Distillation Really Distill? From Noisy Teacher to Self-Improvement
  url: https://arxiv.org/abs/2608.31046
  type: preprint
  grade: B
  published: 2026-08-31
  accessed: 2026-10-14
- id: S11
  title: Towards Understanding On-Policy Distillation through the Lens of Test-Time Scaling
  url: https://arxiv.org/abs/2608.11829
  type: preprint
  grade: B
  published: 2026-08-12
  accessed: 2026-10-14
- id: S12
  title: Locating and Editing Factual Associations in GPT (NeurIPS 2022)
  url: https://proceedings.neurips.cc/paper_files/paper/2022/hash/6f1d43d5a82a37e89b0665b33bf3a182-Abstract-Conference.html
  type: peer-reviewed
  grade: A
  published: 2022-11-28
  accessed: 2026-10-14
- id: S13
  title: 'Rethinking On-Policy Distillation of Large Language Models: Phenomenology, Mechanism, and Recipe'
  url: https://arxiv.org/abs/2604.13016
  type: preprint
  grade: B
  published: 2026-04-14
  accessed: 2026-10-14
- id: S14
  title: Self-Distillation Enables Continual Learning (arXiv v2)
  url: https://arxiv.org/abs/2601.19897
  type: preprint
  grade: B
  published: 2026-01-27
  accessed: 2026-10-14
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 14 (A 4 · B 10 · C 0 · D 0)
> · Claims checked: 58 (verified 53 · caveat 5 · unverified 0 · contradicted 0 · outdated 0)
> · Checked 2026-10-14 23:15 MDT by the QA agent

# On-policy distillation transfers compositional skill but few new facts, and the KL direction is why

*A controlled study finds that standard reverse-KL on-policy distillation teaches a student to compose facts it already knows but transfers few new ones, that forward KL recovers much of the factual transfer, and that the evidence rests on single-seed LoRA runs with a thin real-world check.*

## TL;DR

- Tang and Yang build a synthetic world in which "facts" are random digit lookup tables and "skill" is evaluating seven-step expression trees, then distill from teachers that differ from the student only in extra facts, extra tree skill, or both [S1].[^qa-1]
- Averaged over four models (Qwen3-0.6B, Gemma-2-2B, Qwen3-4B, OLMo3-7B), standard on-policy distillation (OPD) with reverse Kullback–Leibler (KL) divergence lifts greedy accuracy on unseen tree structures to 79.10%, against 0.72% with a control teacher. Queries about held-out facts reach only 13.12% for single lookups and 0.54% for seven-step chains [S1].[^qa-2]
- In a two-by-two ablation on two models, swapping reverse KL for forward KL raises held-out single-lookup accuracy from 10.95% to 54.10% (Qwen3-4B) and from 32.95% to 94.10% (Gemma-2-2B) with either prefix source; student-generated prefixes mainly help compositional execution [S1].[^qa-3]
- A natural-language check on Qwen3-4B-Base points the same way: +6.47 points on 201 held-out competition math problems and no gain on 809 post-cutoff factual questions [S1]. That check uses reverse KL only, one model and one seed.[^qa-4]
- Every experiment uses a single seed and low-rank adapters, and no code is linked. Read the asymmetry as a well-designed first result, consistent with independent reports that favor forward KL in some settings [S2][S14], not as a settled law.[^qa-5]

## Why now

On-policy distillation lets a student sample its own completions while a teacher supplies next-token distributions on those prefixes, and it is now routine in post-training. The Qwen3 technical report describes an on-policy distillation stage for its smaller models. On Qwen3-8B it reports 74.4% on AIME'24 (American Invitational Mathematics Examination 2024) after on-policy distillation, against 67.6% after reinforcement learning (RL) from the same checkpoint, at 1,800 versus 17,920 GPU hours [S6]. A 2025-10-27 Thinking Machines Lab post popularized a sampled-token variant that drops into existing RL code [S5].

What the student actually takes from the teacher is still contested. Ding and Zhang (v1 2026-08-31, v2 2026-09-24) argue that OPD's gains come largely from suppressing low-probability student tokens, which needs no teacher [S10]. Ge et al. (v1 2026-08-12, v3 2026-09-28) show that OPD can lower pass@K at large sampling budgets even when it raises it at small ones [S11]. Li et al. (2026-04-14) argue that OPD succeeds only when, among other conditions, the teacher offers capabilities the student has not already seen [S13].

On 2026-10-07, Yixuan Tang and Yi Yang of the Hong Kong University of Science and Technology posted the anchor paper; v1 is the only version as of 2026-10-14 [S1].[^qa-6] Two weeks earlier (v1 2026-09-23, v2 2026-09-26), Dong et al. reported that OPD is a better starting point for RL than supervised fine-tuning (SFT), and that forward KL overtakes reverse KL once RL follows [S2]. Together they make the KL direction a design decision rather than a default.

## Background

Classical knowledge distillation trains a student $P_\theta$ to match a teacher $P_T$. Offline, or sequence-level, distillation trains on teacher-generated sequences, typically with forward KL, $D_{\mathrm{KL}}(P_T\,\|\,P_\theta)$. The student therefore never gets supervision on the states it reaches after its own mistakes, a mismatch usually called exposure bias [S1][S3]. Generalized Knowledge Distillation (GKD) trains on student-generated sequences scored by the teacher and allows divergences other than forward KL [S3]. MiniLLM argues that reverse KL, $D_{\mathrm{KL}}(P_\theta\,\|\,P_T)$, suits generative models better because it stops the student from overestimating the teacher's low-probability regions [S4]. "Standard OPD" in the anchor means student rollouts combined with reverse KL [S1].

Forward KL is mean-covering: it penalizes the student whenever it puts low probability on a token the teacher favors. Reverse KL is mode-seeking: it weights errors by the student's own probabilities [S1]. In ToDi's gradient analysis, forward KL raises underestimated tokens and reverse KL suppresses overestimated ones [S9].

One detail matters later: the anchor computes reverse KL exactly, summed over the full vocabulary at every position [S1]. The Thinking Machines recipe instead estimates it from the sampled token alone, using the negative per-token log-ratio as an advantage in an RL-style loss [S5]. The SDFT (self-distillation fine-tuning) paper notes that the full-vocabulary per-token form has lower variance than sample-based estimators but, like them, ignores how a token choice affects later states [S7].

## The core idea

**Facts.** The world has 25 lookup tables $\mathcal{T}_k:\{0,\dots,9\}^2\to\{0,\dots,9\}$ whose 100 entries are drawn independently and uniformly, so no entry can be inferred from the others. A fact query applies a table digit-wise to two four-digit numbers,

$$(a\circ_k b)_j=\mathcal{T}_k(a_j,b_j),\qquad j\in\{1,2,3,4\},$$

and each table is named by a new token `[OP_k]`. Twenty tables are "initial" and five are "held-out" [S1].[^qa-7]

**Skill.** A query chains seven operations over eight inputs, and the model writes out a step-by-step trace. In a chain, each step consumes the previous result. In a branching tree, the model must hold an intermediate result across intervening steps and combine it later. Of the 429 ordered full binary trees with seven internal nodes, 64 form a shared pool (used in teacher training and distillation), 64 a teacher-only pool and 128 an unseen pool [S1].

**Design.** The initial student $S_0$ is fine-tuned on initial facts as single steps and chains only. Three teachers start from $S_0$: $T_f$ adds held-out facts, $T_s$ adds trees over initial facts, and $T_{fs}$ adds both. $T_\varnothing=S_0$ serves as the control teacher [S1]. On Qwen3-4B the separation is clean. $T_f$ scores 100% on held-out single-step facts but 0.60% on unseen trees, while $T_s$ scores 100% on unseen trees and 0% on held-out facts [S1].[^qa-8] The question: when the teacher differs from the student by $\Delta F$, $\Delta S$ or both, which difference shows up in the student?

**Objective.** With rollouts $y\sim P_\theta(\cdot\mid x)$ held fixed during each update, standard OPD minimizes

$$\hat{\mathcal L}_{\mathrm{OPD}}(\theta;\mathcal B)=\frac{1}{Z_{\mathcal B}}\sum_{(x,y)\in\mathcal B}\sum_{t=1}^{|y|}D_{\mathrm{KL}}\big(P_\theta(\cdot\mid x,y_{<t})\,\|\,P_T(\cdot\mid x,y_{<t})\big),$$

where $Z_{\mathcal B}$ counts completion tokens and gradients flow only through $P_\theta$ [S1]. The decoupling experiment varies two factors independently: the prefix source (student rollouts versus teacher demonstrations $y^*$) and the divergence direction (swapping the KL arguments) [S1].

**Mechanism.** The authors explain the asymmetry this way: reverse KL measures discrepancy under the student's own distribution, so a student that gives negligible probability to the correct digit pays almost nothing for missing it, whereas forward KL measures it under the teacher's distribution [S1].[^qa-9] Standard softmax calculus makes this precise (our derivation).[^qa-10] At one position, with student logits $z$, $p=\mathrm{softmax}(z)$ and teacher distribution $q$,

$$\frac{\partial D_{\mathrm{KL}}(q\|p)}{\partial z_v}=p_v-q_v,\qquad \frac{\partial D_{\mathrm{KL}}(p\|q)}{\partial z_v}=p_v\Big(\log\frac{p_v}{q_v}-D_{\mathrm{KL}}(p\|q)\Big).$$

For the correct digit $v^{\star}$, where the teacher is confident, the forward-KL gradient on $z_{v^{\star}}$ is $p_{v^{\star}}-q_{v^{\star}}$, close to $-1$ while the student gives that digit little probability. The reverse-KL gradient is scaled by $p_{v^{\star}}$, so a student that has committed to a wrong digit gets almost no push toward the right one. Compositional errors look different. In the paper's Figure 4(b), a student distilled from $T_f$ with forward KL recalls every fact correctly but flattens a tree into a left-to-right sweep, picking the wrong next operand [S1]. Our reading is that this is a choice among continuations the student already ranks highly, which is where reverse KL's student-weighted gradient is strong.

The account has a gap (our calculation). If the student spread its mass evenly over the ten digits ($p_{v^{\star}}=0.1$) and the teacher put $10^{-4}$ on each wrong digit, the two gradients on $z_{v^{\star}}$ would be similar, about $-0.83$ (reverse) and $-0.90$ (forward).[^qa-11] A large gap needs a student that concentrates mass on wrong digits. Appendix C instead describes the student as spreading probability across candidates it cannot distinguish, and its training-dynamics figure reports rollout exact match and reverse KL, not the probability on the correct digit [S1]. The operative regime is not shown directly.

## Evidence

**Conditions.** All stages use low-rank adaptation (LoRA, rank 16) on attention and feed-forward projections. OPD runs three epochs over 20,000 prompts at learning rate $3\times10^{-6}$, with one rollout per prompt visit at temperature 1.0 (at most 256 new tokens); student initialization and teacher training use $10^{-4}$. Test sets have 2,000 queries, and every experiment uses seed 1 [S1].[^qa-12] We found no GPU type or GPU-hour figure anywhere in the paper.[^qa-13]

**Main result (Figure 2).** Averaged over the four models, students distilled from $T_s$ reach 80.96% greedy accuracy on teacher-only tree structures and 79.10% on unseen ones, against 0.72% on unseen structures under the matched $T_\varnothing$ control [S1]. Students distilled from $T_f$ reach a mean 13.12% on held-out single-step facts (control 0.03%) and 0.54% on held-out chains [S1].[^qa-14] Gemma-2-2B carries much of that mean at 32.95% [S1]; the other three models average about 6.5% (our calculation). At Pass@32 (any of 32 samples at temperature 1.0 correct), the gap persists: 88.11% on unseen trees against 15.74% and 2.58% on the two factual tests [S1].[^qa-15] The joint $T_{fs}$ teacher shows the same split [S1].

**Decoupling (Figure 3, Qwen3-4B and Gemma-2-2B).** With student prefixes, moving from reverse to forward KL raises held-out single-step accuracy from 10.95% to 54.10% (Qwen3-4B) and from 32.95% to 94.10% (Gemma-2-2B). With teacher prefixes and forward KL, accuracy is similar, at 54.05% and 93.00% [S1], so on-policy rollouts add nothing for learning facts.[^qa-16] For skill, student prefixes lower the negative log-likelihood (NLL) of reference tree completions under both objectives in both models; for Qwen3-4B, from 2.40 to 1.77 bits (reverse) and from 2.13 to 1.15 bits (forward) [S1].[^qa-17]

**Hybrid objectives (Table 4, Qwen3-4B, student prefixes).** Held-out fact and unseen-tree accuracies are: reverse KL 10.9% and 76.8%; forward KL 54.1% and 76.4%; GKD with Jensen–Shannon divergence ($\beta=0.5$) 9.1% and 70.6%; ToDi 64.3% and 86.4%; entropy-aware OPD (EOPD) 13.7% and 78.7% [S1]. ToDi is best on both axes.[^qa-18]

**Real-world check (Table 2).** $S_0$ is Qwen3-4B-Base fine-tuned on Tulu-3-SFT data. Knowledge-2026 has 809 questions that entered public discourse in 2026, from RealTimeQA, SealQA, FreshQA and Wikipedia edits extracted with the WikiBigEdit pipeline. On it, $S_0$ scores 11.25%, a teacher fine-tuned on all 809 pairs scores 84.55% on the same set, and the student distilled from that teacher on those same questions scores 9.64% [S1].[^qa-19] Math-2026 holds out 201 problems from a 1,000-problem pool drawn from MathArena and NuminaMath-CoT, and the other 799 are distillation prompts. A reasoning teacher scores 43.78%, and its distilled student rises from 17.41% to 23.88% [S1]. Neither run transfers across capabilities: 10.75% on knowledge for the math student, 19.40% on math for the knowledge student [S1].[^qa-20]

**Weight updates (Table 3).** The merged LoRA updates from $T_f$ and $T_s$ are nearly orthogonal (cosine 0.004–0.046 across models). Changing only the KL direction under $T_s$ keeps cosines of 0.64–0.82. In Qwen3-4B, factual updates peak at layer 35, while compositional updates peak at layers 3 and 11 [S1].[^qa-21]

## Critical assessment

**Single seed.** Appendix B.5 states that every experiment uses seed 1 [S1], so no comparison carries seed variance. With 2,000-query test sets, sampling noise is small (our reading), but close calls such as reverse 76.8% against forward 76.4% on unseen trees in Table 4 cannot be ranked without reruns.[^qa-22] The real-world samples are small: by our calculation, 17.41% and 23.88% of 201 problems are 35 and 48 problems, with Wilson 95% intervals of 12.8–23.3% and 18.5–30.2%.[^qa-23] Table 2 gives only aggregate accuracies, so a paired test is not possible from the paper.

**The real-world check tests only half the claim.** Section 5 reports reverse-KL OPD only [S1], so forward KL's factual advantage has no natural-language test. The knowledge teacher's 84.55% is measured on its own training questions [S1], which suits the question asked but is not a held-out score. Math-2026 also draws on NuminaMath-CoT, which the paper's reference list dates to 2024 [S1], so on our reading the math half is not post-cutoff.[^qa-24]

**New facts are keyed to never-trained tokens.** The tokenizer adds all 25 fact identifiers, and embedding updates are restricted to these new rows [S1]. Because $S_0$ never sees the held-out identifiers, our reading is that their embeddings are untrained when distillation starts. Their mean embedding drift reaches 0.0420 under the SFT-trained $T_f$ but at most 0.0071 in any distilled Qwen3-4B student (Table 6(c)) [S1].[^qa-25] The factual condition thus asks the student to learn a representation for an unfamiliar token as well as an association. For facts about entities the model already represents, the synthetic result may overstate the difficulty (our reading).

**Optimization budget.** The OPD learning rate is about 33 times lower than the SFT rate (our calculation from $10^{-4}$ and $3\times10^{-6}$), with rank-16 adapters [S1]. Both KL directions share these settings, so the comparison is internally fair, but absolute factual numbers may be budget-limited: even forward KL stops at 54.1% on Qwen3-4B. Appendix C reports that reverse KL plateaus above zero under $T_f$ [S1], which argues against simple undertraining but does not test full fine-tuning or longer runs.

**Estimator mismatch with practice.** The anchor uses exact full-vocabulary reverse KL [S1]; a widely used recipe uses a sampled-token estimate with a zero discount factor [S5]. By our derivation, that estimator's expected gradient equals the per-position reverse-KL gradient, so we expect the asymmetry to carry over, but its variance differs and the paper does not test it.[^qa-26]

**Depth localization is narrower than stated.** LoRA update norms show where updates landed, not where knowledge is stored. Causal tracing on natural-language facts in GPT models located factual associations in middle-layer feed-forward modules [S12]. The anchor's reading that late layers mediate factual associations [S1] should be confined to its digit-output tables.

**Replication and critique.** We found no replication or critique of the anchor as of 2026-10-14, a week after posting. The closest independent evidence is Dong et al.'s two-by-two design on a Qwen3-VL-8B student and Qwen3-VL-32B teacher over twenty benchmarks. Student prefixes beat teacher prefixes under both objectives, before and after RL; reverse KL led before RL (60.66 against 60.17) and forward KL led after it (64.87 against 63.02), with one seed per stage [S2].[^qa-27]

> [!WARNING]
> **QA · Unreplicated.** The post's central asymmetry rests on one preprint [S1], a week old at the
> time of checking, with a single seed, LoRA-only training and no released code or data. QA's own
> searches on 2026-10-14 also found no replication, critique or repository. [S2] is independent and
> agrees that the KL direction matters, but it measures downstream RL performance on vision-language
> benchmarks, not factual transfer, so it does not test the knowledge–skill split itself.

**Reproducibility status.** Neither the PDF nor the arXiv abstract page (v1) links code, data, checkpoints or the curated Knowledge-2026 and Math-2026 lists, and a web search on 2026-10-14 found no repository [S1].[^qa-28] The synthetic setup is described closely enough to re-implement: table construction, corpus budgets, tree pools and every hyperparameter are in Appendix B [S1].

## Connections

**Where facts come from in practice.** Thinking Machines' personalization experiment already splits the roles this way. Mid-training on documents lifts an internal question-answering score from 18% to 43%, and on-policy distillation on chat prompts then largely restores the instruction following that mid-training damaged [S5].[^qa-29]

**SDFT, the main apparent counterexample.** Self-distillation fine-tuning acquires facts about 2025 natural disasters on-policy, scoring 89% strict accuracy against 80% for SFT, and 98% against 80% out of distribution [S7].[^qa-30] But its teacher holds the facts in context, not in weights, and its arXiv v2 says that despite theory favoring reverse KL, "we found in practice that Forward KL yields the best performance" [S14]. We could not find that sentence in the ICML proceedings version, which presents the method as reverse-KL distillation [S7].[^qa-31] Which divergence produced the knowledge results is therefore unclear; if it was forward KL, they fit the anchor's account.

**Hybrid objectives.** EOPD adds forward KL only where teacher entropy is high and reports Pass@8 gains on six math benchmarks [S8]. At held-out-fact positions the teacher is confident, per Appendix C [S1], so on our reading EOPD's gate rarely fires there, consistent with its 13.7% factual score. ToDi weights the two directions per token by the teacher–student log-ratio [S9], shifting toward forward KL where the student underestimates the teacher's token. It gives the best factual result in Table 4 [S1].

**Sharpening versus transfer.** Ding and Zhang find that OPD's gains concentrate on low log-probability tokens and that a fixed negative advantage matches teacher-provided ones [S10]. In the anchor's setting, though, the control teacher ($T_\varnothing=S_0$) leaves unseen-tree accuracy at 0.72% [S1], so the tree skill needs the teacher. The anchor also refines Li et al.'s novelty condition [S13]: under reverse KL, novel skill transfers and novel facts mostly do not. Qwen3's pass@64 gain on AIME'24 after OPD (90.0 to 93.3) [S6] fits skill transfer; Ge et al. show that such gains need not hold at every sampling budget [S11].

**On this blog.** Our earlier post on [reward-hacking monitors](../published/2026-10-13-reward-hacking-activation-probes.md) concerned the RL stage that OPD increasingly precedes. We have not covered distillation before.

## Open questions

- Does the asymmetry survive multiple seeds, full fine-tuning and models larger than 7B parameters?
- Does it hold under the sampled-token estimator used in production recipes [S5]?
- Is forward-KL OPD just as effective for facts about entities the model already represents, and does it help on Knowledge-2026, which the paper did not test?
- Dong et al. favor forward KL before RL [S2].[^qa-32] Do facts transferred by forward-KL OPD survive the RL stage that follows?
- ToDi was best on both axes, but only on Qwen3-4B [S1]. Does a per-token hybrid remove the need to choose a direction?

## Sources

S1. [On-Policy Distillation Teaches New Skills but Not New Knowledge](https://arxiv.org/abs/2610.09639) · preprint · B · published 2026-10-07 · accessed 2026-10-14
S2. [RL Starts before RL: On Policy Distillation for Better Reinforcement Learning](https://arxiv.org/abs/2609.28145) · preprint · B · published 2026-09-23 · accessed 2026-10-14
S3. [On-Policy Distillation of Language Models: Learning from Self-Generated Mistakes](https://arxiv.org/abs/2306.13649) · preprint · B · published 2023-06-23 · accessed 2026-10-14
S4. [MiniLLM: On-Policy Distillation of Large Language Models](https://arxiv.org/abs/2306.08543) · preprint · B · published 2023-06-14 · accessed 2026-10-14
S5. [On-Policy Distillation](https://thinkingmachines.ai/blog/on-policy-distillation/) · lab-post · B · published 2025-10-27 · accessed 2026-10-14
S6. [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) · technical-report · B · published 2025-05-14 · accessed 2026-10-14
S7. [Self-Distillation Enables Continual Learning (ICML 2026, PMLR 306)](https://proceedings.mlr.press/v306/shenfeld26a.html) · peer-reviewed · A · published 2026-09-29 · accessed 2026-10-14
S8. [Entropy-Aware On-Policy Distillation of Language Models (ICML 2026, PMLR 306)](https://proceedings.mlr.press/v306/jin26e.html) · peer-reviewed · A · published 2026-09-29 · accessed 2026-10-14
S9. [ToDi: Token-wise Distillation via Fine-Grained Divergence Control (EMNLP 2025)](https://aclanthology.org/2025.emnlp-main.409/) · peer-reviewed · A · published 2025-11-04 · accessed 2026-10-14
S10. [Does On-Policy Distillation Really Distill? From Noisy Teacher to Self-Improvement](https://arxiv.org/abs/2608.31046) · preprint · B · published 2026-08-31 · accessed 2026-10-14
S11. [Towards Understanding On-Policy Distillation through the Lens of Test-Time Scaling](https://arxiv.org/abs/2608.11829) · preprint · B · published 2026-08-12 · accessed 2026-10-14
S12. [Locating and Editing Factual Associations in GPT (NeurIPS 2022)](https://proceedings.neurips.cc/paper_files/paper/2022/hash/6f1d43d5a82a37e89b0665b33bf3a182-Abstract-Conference.html) · peer-reviewed · A · published 2022-11-28 · accessed 2026-10-14
S13. [Rethinking On-Policy Distillation of Large Language Models: Phenomenology, Mechanism, and Recipe](https://arxiv.org/abs/2604.13016) · preprint · B · published 2026-04-14 · accessed 2026-10-14
S14. [Self-Distillation Enables Continual Learning (arXiv v2)](https://arxiv.org/abs/2601.19897) · preprint · B · published 2026-01-27 · accessed 2026-10-14

## QA notes

[^qa-1]: **Verified** — S1 §3.1 (Eq. 1; 25 uniformly random digit tables; queries of seven operations over eight inputs) and §3.2 with Table 1 (teachers $T_f$, $T_s$, $T_{fs}$ trained from $S_0$, plus the control $T_\varnothing=S_0$) [S1].
[^qa-2]: **Verified** — S1 §4.1 and Figure 2, which report unweighted means across Qwen3-0.6B, Gemma-2-2B, Qwen3-4B and OLMo3-7B: 79.10% greedy on unseen trees under $T_s$ against 0.72% under $T_\varnothing$, and 13.12% (single-step) and 0.54% (chains) on held-out facts under $T_f$ [S1].
[^qa-3]: **Supported with caveat** — The four "from/to" figures are S1's student-prefix numbers (§4.2) [S1]. With teacher prefixes, forward KL reaches 54.05% (Qwen3-4B) and 93.00% (Gemma-2-2B), and Figure 3 labels the reverse-KL teacher-prefix bars at 13.3% and 36.4%. So forward KL gives a large gain under either prefix source, but the exact starting values in this bullet apply to student prefixes only. The prefix effect on compositional skill is measured mainly through reference-completion NLL; greedy accuracy improves in three of the four comparisons.
[^qa-4]: **Verified** — S1 §5 and Table 2: Math-2026 rises from 17.41% to 23.88% (+6.47 points) on 201 held-out problems, and Knowledge-2026 goes from 11.25% to 9.64% on 809 questions [S1]. Qwen3-4B-Base is the only model, the abstract and introduction describe the check as reverse-KL OPD, and Appendix B.5 sets seed 1 for all experiments. "Post-cutoff" is S1's own description of Knowledge-2026; for Math-2026 see qa-24.
[^qa-5]: **Verified** — Appendix B.5 of S1 states that all experiments use seed 1 and that every training stage uses LoRA adapters [S1]. QA found no code, data or checkpoint link in the S1 PDF or on its arXiv page (v1), and QA's own web searches on 2026-10-14 found no repository. [S2] favours forward KL when OPD is followed by RL (abstract and Table 2), and [S14] v2 reports that forward KL worked best in practice for SDFT.
[^qa-6]: **Verified** — The arXiv page gives a submission date of 2026-10-07 and lists Yixuan Tang and Yi Yang; the PDF gives the HKUST affiliation [S1]. QA re-checked late on 2026-10-14 and there was still only v1.
[^qa-7]: **Verified** — S1 §3.1, Eq. (1), and Appendix B.1: 25 tables of 100 uniformly sampled entries, split into 20 initial and 5 held-out, with identifiers [OP_1]–[OP_25] [S1].
[^qa-8]: **Verified** — S1 §3.2 and Table 5. For Qwen3-4B, $T_f$ scores 100% on held-out single-step facts and 0.60% on unseen trees, and $T_s$ scores 0.00% and 100% [S1].
[^qa-9]: **Verified** — S1 §4.2, under "Factual Transfer Depends on the Divergence Objective" [S1]. This is the authors' explanation. S1 does not measure per-token gradients or the probability on the correct digit (see qa-11).
[^qa-10]: **Verified** — QA re-derived both logit gradients. For forward KL, $\partial/\partial z_v = p_v - q_v$. For reverse KL, $\partial/\partial z_v = p_v(\log(p_v/q_v) - D_{\mathrm{KL}}(p\|q))$. Both are standard results; the derivation is this post's, not S1's.
[^qa-11]: **Verified** — QA recomputed the example. With the student uniform at 0.1 and the teacher at $10^{-4}$ on each of nine wrong digits (0.9991 on the correct one), the gradient on the correct logit is −0.829 for reverse KL and −0.899 for forward KL. Appendix C and Figure 5 of S1 read as the post describes [S1].
[^qa-12]: **Verified** — S1 Appendix B.5 covers LoRA (rank 16, α = 32, attention and feed-forward projections), learning rates of $10^{-4}$ and $3\times10^{-6}$, three epochs, one rollout per prompt visit at temperature 1.0 with at most 256 new tokens, and seed 1. Appendix B.2 gives the 20,000 distillation prompts, and B.3 the 2,000-query test sets [S1].
[^qa-13]: **Verified** — QA searched the full S1 text for GPU, hour, A100, H100 and H800 and found no hardware or compute figure [S1].
[^qa-14]: **Verified** — S1 §4.1 and Figure 2 (unweighted four-model means) [S1].
[^qa-15]: **Verified** — S1 §4.1 and Figure 2, Pass@32 row; Appendix B.3 gives 32 samples at temperature 1.0 [S1].
[^qa-16]: **Verified** — S1 §4.2 and Figure 3 [S1]. S1 describes on-policy rollouts as giving no distinct advantage for facts. Under reverse KL, Figure 3 labels show student prefixes slightly below teacher prefixes (10.9% against 13.3% on Qwen3-4B; 33.0% against 36.4% on Gemma-2-2B).
[^qa-17]: **Verified** — S1 §4.2, under "Student Rollouts Strengthen Compositional Skill" [S1]. For Gemma-2-2B, NLL falls from 28.13 to 25.65 bits (reverse) and from 17.40 to 13.65 bits (forward). NLL is measured per reference completion.
[^qa-18]: **Verified** — S1 §6.3 and Table 4 [S1]. The table covers Qwen3-4B only, with student prefixes. Fact scores come from $T_f$ runs and tree scores from $T_s$ runs.
[^qa-19]: **Verified** — S1 §5, Table 2 and Appendix D [S1]. The student is distilled on the same 809 question prompts it is then tested on.
[^qa-20]: **Verified** — S1 §5 and Table 2 [S1].
[^qa-21]: **Supported with caveat** — S1 Table 3 matches: cosines of 0.004–0.046 between $T_f$ and $T_s$ updates, 0.64–0.82 between reverse and forward KL under $T_s$, and peaks at layer 35 and at layers 3 and 11 [S1]. The fuller Table 6(d) lists the $T_s$ peaks as layers 3, 11 and 34. The $T_f$-versus-$T_s$ cosines compare runs with matched prefix source and KL direction.
[^qa-22]: **Verified** — S1 Appendix B.5 (seed 1) and Table 4 (76.8% against 76.4%) [S1].
[^qa-23]: **Verified** — QA recomputed: 35/201 = 17.41% and 48/201 = 23.88%, with Wilson 95% intervals of 12.8–23.3% and 18.5–30.2%.
[^qa-24]: **Verified** — The S1 abstract and introduction describe the real-world check as reverse-KL OPD, and no forward-KL run is reported. §5 says the knowledge teacher's 84.55% is measured on its own 809 training pairs, and reference [18] (NuminaMath) is dated 2024 [S1]. S1 does not say how many Math-2026 problems come from MathArena and how many from NuminaMath-CoT.
[^qa-25]: **Supported with caveat** — S1 Appendix B.1 adds 28 tokens (the 25 fact identifiers, an identity marker and two answer delimiters), and B.5 restricts embedding updates to all newly added rows, not only the fact identifiers [S1]. Table 6(c) matches: held-out drift is 0.0420 under $T_f$ and at most 0.0071 for distilled Qwen3-4B students. That the held-out embeddings start distillation untrained is the post's inference; S1 does not state it.
[^qa-26]: **Verified** — S5 says it uses a discount factor of zero and sets each token's advantage to the negative of the sampled-token log-ratio between student and teacher [S5]. QA checked the post's argument: the student's score function has zero expectation, so the expected sampled-token gradient equals the per-position reverse-KL gradient. S1 does not test this estimator.
[^qa-27]: **Verified** — S2 v2 §3.1, Table 2 and Appendix A.3, whose Table 4 lists seed 42 for OPD and seed 1 for RL [S2]. The student is Qwen3-VL-8B and the teacher Qwen3-VL-32B, evaluated on twenty benchmarks. Reverse KL scores 60.66 against 60.17 for forward KL before RL, and 63.02 against 64.87 after. QA's own searches on 2026-10-14 found no replication or critique of S1.
[^qa-28]: **Verified** — See qa-5. S1 Appendices B.1–B.5 specify the table sampling, corpus budgets and mixtures, tree pools and all optimization settings [S1].
[^qa-29]: **Supported with caveat** — S5's personalization table has Qwen3-8B at 18% on internal QA. Mid-training on 100% documents reaches 43% but drops IF-eval from 85% to 45% [S5]. The run that S5 then distils starts from a 70% document mix (36% internal QA, 79% IF-eval) and ends at 41% and 83%. The 43% figure and the restored instruction following therefore come from different runs.
[^qa-30]: **Verified** — S7 Table 1 (Qwen2.5-7B-Instruct): 89 against 80 strict accuracy and 98 against 80 out-of-distribution accuracy. The corpus covers natural disasters from 2025 [S7]. [S14] reports the same numbers.
[^qa-31]: **Verified** — The quoted phrase appears verbatim in the "Practical Implementation" paragraph of [S14] v2 (2026-08-07). QA searched the PMLR PDF of S7 and found no mention of forward KL, and S7 describes training as minimizing reverse KL [S7].
[^qa-32]: **Supported with caveat** — [S2] favours forward KL for the OPD stage when RL follows it. Measured before RL, reverse KL scored slightly higher (60.66 against 60.17), so "before RL" here refers to the stage, not to pre-RL scores.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
