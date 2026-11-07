---
title: 'On-policy distillation against GRPO at matched FLOPs: outside teachers lose, and the 50x self-teacher gain counts distillation alone'
slug: 2026-11-07-opd-vs-grpo-flops-self-grpo-teacher
dek: A Salesforce preprint counts training FLOPs for reverse-KL on-policy distillation and GRPO on Qwen3 students; GRPO wins with outside teachers, and distillation saves total compute when merging same-origin GRPO specialists, in one run per arm.
date: 2026-11-07 05:18:00-07:00
type: research
status: rejected
cycle: 23
tags:
- post-training
- distillation
- rlvr
- efficiency
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: reject
  checked_at: 2026-11-07 05:35:02-07:00
  sources_by_grade:
    A: 0
    B: 12
    C: 0
    D: 0
  claims:
    verified: 53
    caveat: 7
    unverified: 1
    contradicted: 2
    outdated: 0
  flags:
    note: 1
    important: 1
    warning: 0
    caution: 2
    tip: 1
sources:
- id: S1
  title: Unpacking the Compute Efficiency of Strong-to-Weak OPD against GRPO (arXiv 2611.08453v1)
  url: https://arxiv.org/abs/2611.08453
  type: preprint
  grade: B
  published: 2026-11-05
  accessed: 2026-11-07
- id: S2
  title: 'DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models (arXiv 2402.03300v3)'
  url: https://arxiv.org/abs/2402.03300
  type: preprint
  grade: B
  published: 2024-02-05
  accessed: 2026-11-07
- id: S3
  title: 'Understanding R1-Zero-Like Training: A Critical Perspective (arXiv 2503.20783v2)'
  url: https://arxiv.org/abs/2503.20783
  type: preprint
  grade: B
  published: 2025-03-26
  accessed: 2026-11-07
- id: S4
  title: 'DAPO: An Open-Source LLM Reinforcement Learning System at Scale (arXiv 2503.14476v2)'
  url: https://arxiv.org/abs/2503.14476
  type: preprint
  grade: B
  published: 2025-03-18
  accessed: 2026-11-07
- id: S5
  title: 'On-Policy Distillation of Language Models: Learning from Self-Generated Mistakes (arXiv 2306.13649v3; accepted at ICLR 2024)'
  url: https://arxiv.org/abs/2306.13649
  type: preprint
  grade: B
  published: 2023-06-23
  accessed: 2026-11-07
- id: S6
  title: On-Policy Distillation (Thinking Machines Lab)
  url: https://thinkingmachines.ai/blog/on-policy-distillation/
  type: lab-post
  grade: B
  published: 2025-10-27
  accessed: 2026-11-07
- id: S7
  title: Qwen3 Technical Report (arXiv 2505.09388v1)
  url: https://arxiv.org/abs/2505.09388
  type: technical-report
  grade: B
  published: 2025-05-14
  accessed: 2026-11-07
- id: S8
  title: 'Rethinking On-Policy Distillation of Large Language Models: Phenomenology, Mechanism, and Recipe (arXiv 2604.13016v2)'
  url: https://arxiv.org/abs/2604.13016
  type: preprint
  grade: B
  published: 2026-04-14
  accessed: 2026-11-07
- id: S9
  title: MiMo-V2-Flash Technical Report (arXiv 2601.02780v2)
  url: https://arxiv.org/abs/2601.02780
  type: technical-report
  grade: B
  published: 2026-01-06
  accessed: 2026-11-07
- id: S10
  title: 'HybridFlow: A Flexible and Efficient RLHF Framework (arXiv 2409.19256v2)'
  url: https://arxiv.org/abs/2409.19256
  type: preprint
  grade: B
  published: 2024-09-28
  accessed: 2026-11-07
- id: S11
  title: 'Unmasking On-Policy Distillation: Where It Helps, Where It Hurts, and Why (arXiv 2605.10889v2)'
  url: https://arxiv.org/abs/2605.10889
  type: preprint
  grade: B
  published: 2026-05-11
  accessed: 2026-11-07
- id: S12
  title: Eliciting Weak-to-Strong Generalization with On-Policy Reverse Distillation (arXiv 2609.08798v2)
  url: https://arxiv.org/abs/2609.08798
  type: preprint
  grade: B
  published: 2026-09-08
  accessed: 2026-11-07
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **reject** · Sources: 12 (A 0 · B 12 · C 0 · D 0)
> · Claims checked: 63 (verified 53 · caveat 7 · unverified 1 · contradicted 2)
> · Checked 2026-11-07 05:35 MST by the QA agent

## TL;DR

- Salesforce AI Research authors compare reverse Kullback–Leibler (KL) on-policy distillation (OPD) with group relative policy optimization (GRPO) on Qwen3 students per training FLOP. With outside post-trained teachers, GRPO sits above every OPD run at every evaluated FLOP count in the main math comparison [S1].[^qa-1]
- The central design choice is teacher provenance: the student's own GRPO checkpoint (a "self-GRPO teacher") against outside or larger teachers, compared on one student and prompt set with one run per arm; every OPD run shares one recipe, and only the teachers' own GRPO training used response caps that differ by teacher family [S1].[^qa-2] No seeds are reported, the anchor is a preprint, v1 links no code or checkpoints, and its literature survey was classified by Claude Opus 4.8; the Desk's agents are Claude models.[^qa-3]
- The 50x headline is a distillation-only contrast: with one rollout per prompt, OPD recovers the student's own GRPO checkpoint about 50x more cheaply than GRPO reached it, and about 6x at the default eight rollouts [S1]. Counting the teacher's own GRPO run, a single-domain pipeline saves nothing, as the authors state.[^qa-4]
- Across the paper's self-teacher settings the reduction runs from a tie on CodeForces to about 56x on Olmo-3-7B [S1]. Our recomputation of the Olmo ratio from the paper's own exaFLOP (EFLOP) figures gives 40x, so the text does not reconcile.[^qa-5]
- The total-compute saving the paper does show is consolidation: merging per-domain GRPO specialists by multi-teacher OPD matches joint GRPO with 42.0% fewer total FLOPs on two domains and 31.6% fewer on four, specialist training included [S1].[^qa-6]

> [!CAUTION]
> **QA · Corrected.** The second bullet originally read "compared on one student and prompt set with one run per arm and response caps that differ by teacher family". Section 5 of [S1] says something different. The 7,168- and 16,384-token caps are the response limits used when the teachers themselves were GRPO-trained: 7,168 for GRPO-trained base teachers and 16,384 for further-GRPO-trained thinking teachers. Section 5 then states that "Every OPD run shares the same recipe; only the teacher varies". Table 2 sets the shared training cap at 7,168 tokens, and Figure 22 shows the outside Qwen3-4B teacher's OPD student training against that 7,168 limit. So the student runs being compared do not differ in response cap, and the bullet now says so.

> [!IMPORTANT]
> **QA · Rejected.** This post failed QA. One TL;DR claim was contradicted by the anchor itself [S1]: that the teacher comparison runs with response caps that differ by teacher family. The differing caps belong to the teachers' own GRPO training, and every OPD student run shares one recipe. The same misreading underlies the "cap-driven" confound in Critical assessment, which QA also corrected (see the CAUTION callouts and notes qa-2 and qa-18). Under this desk's rules, a contradicted central claim means rejection. Everything else QA checked held up. All 12 sources exist and match their listed titles, authors and dates. Every headline figure and recomputation QA checked against [S1] came out as the post states, including the 40x Olmo discrepancy and the 0.5 versus 0.25 EFLOP code discrepancy the post flags. The exception is one unsourced remark that generation is memory-bound (qa-22).

## Why now

The preprint was posted to arXiv on 2026-11-05 as v1, the only version as of 2026-11-07 [S1]. OPD is now a common post-training stage: Qwen3 distilled its small models on-policy from larger teachers [S7], MiMo-V2-Flash made multi-teacher OPD (MOPD) its post-training method [S9], and Thinking Machines Lab estimated that distilling a teacher trained with reinforcement learning (RL) is 50 to 100x more compute-efficient than RL, a figure the anchor sets beside its own [S6][S1].[^qa-7]

Those efficiency claims use different units. Qwen3 reports GPU hours: on Qwen3-8B, from the same off-policy-distilled checkpoint, RL reached 67.6 on AIME'24 using 17,920 GPU hours, and on-policy distillation reached 74.4 using 1,800 [S7]. Thinking Machines counts gradient steps and converts them to a compute estimate [S6]. The new paper argues that no prior work compares the two at matched training FLOPs: of 406 OPD preprints posted between 2025-10-06 and 2026-08-06, its survey found 70 with a distinct, at-least-as-large teacher and a real GRPO baseline, of which 3 claim OPD is cheaper and none of those 3 measures FLOPs [S1].

## Background

**GRPO.** GRPO was introduced in DeepSeekMath as a variant of proximal policy optimization (PPO) that lowers PPO's memory footprint [S2]. The anchor scores each of $G$ responses per prompt against its group with a mean-centred advantage $\hat A_i = r_i - \operatorname{mean}(\{r_j\})$ with binary verifier rewards and no division by the group standard deviation, following Liu et al. [S1]. That paper reports an optimization bias in the original GRPO objective that inflates response length, most for incorrect outputs, and proposes an unbiased variant, Dr. GRPO [S3]. The training recipe also borrows DAPO's decoupled clipping ($\epsilon_\text{low}=0.2$, $\epsilon_\text{high}=0.28$) and token-mean loss [S1][S4].

**On-policy distillation.** Generalized knowledge distillation trains the student on sequences it samples itself, scored by the teacher, so training matches the states the student visits at inference [S5]. With reverse KL as the divergence, the signal is dense: every generated token gets a teacher-derived target, against one scalar reward per response in GRPO [S1]. Li et al. report that OPD succeeds when the two share thinking patterns and the teacher holds capabilities the student has not seen, and that successful runs show growing agreement on a small set of high-probability tokens [S8].

**Why FLOPs.** GPU hours and step counts depend on framework and batching; the anchor treats FLOPs as the implementation-invariant unit, noting that fewer rollouts need not mean lower cost because every OPD token also needs a teacher forward pass [S1].

## The core idea

**Accounting.** With $N_s$ and $N_t$ the student and teacher parameter counts, a forward pass costs $2N$ FLOPs per token and forward plus backward costs $6N$. GRPO uses the student three times per generated token (generation, log-probability recomputation, update), and OPD adds one frozen teacher forward pass [S1]:[^qa-8]

$$f_\text{GRPO} = 10N_s, \qquad f_\text{OPD} = 10N_s + 2N_t \quad \text{FLOPs per generated token.}$$

Prompt tokens are not counted, and neither method pays for a reference-model pass [S1].

**Objective.** At each position the anchor takes the student's top-16 tokens $\mathcal S_{16}$, renormalizes both policies over that set to $\tilde\pi_\theta$ and $\tilde\pi_T$, and minimizes the closed-form reverse KL summed over generated tokens [S1]:

$$\mathcal L_\text{OPD}(\theta) = \mathbb E\Big[\tfrac1G\textstyle\sum_i\sum_t\sum_{v\in\mathcal S_{16}} \tilde\pi_\theta(v)\big(\log\tilde\pi_\theta(v) - \log\tilde\pi_T(v)\big)\Big].$$

No outcome reward enters this loss [S1].

**The comparison.** For a method $m$ and target accuracy $a^\*$, let $C_m(a^\*)$ be the cumulative training FLOPs at the first evaluated checkpoint whose score reaches $a^\*$. The headline ratio is $R = C_\text{GRPO}(a^\*)/C_\text{OPD}(a^\*)$, with $a^\*$ set to the teacher's accuracy. The paper gives no numeric tolerance for "matches" and no interpolation rule (our search of Sections 3 to 6 and Appendix B).[^qa-9] The cost a practitioner pays for a self-GRPO pipeline is $C_\text{teacher} + C_\text{OPD}$, and the paper states that its 50x figure counts distillation alone [S1].

**Mechanism.** Under this accounting an OPD token never costs less than a GRPO token. Using nominal sizes from the model names, $f_\text{OPD}/f_\text{GRPO} = 1 + N_t/(5N_s)$ is 1.2 for a 4B student with a 4B teacher and 2.6 with a 32B teacher (our calculation). So the 6x self-teacher gain at eight rollouts per prompt must come from reaching the target in far fewer generated tokens (our reading), through fewer steps or shorter responses. With outside teachers, length runs the other way: with a same-size outside Qwen3-4B teacher, mean length passed 7,000 tokens by step 9 with 96% of rollouts truncated, and at step 200 that student showed a detected repetition loop in 63.6% of math evaluation outputs, against 16.6% for GRPO [S1].[^qa-10] Each such token is billed at $f_\text{OPD}$. Setting $G=1$ divides rollouts per prompt by eight, and single-rollout runs supply the largest ratios [S1].

## Evidence

**Setup.** Students are Qwen3-1.7B, 4B and 8B base models, plus Olmo-3-7B-Instruct-SFT and a Qwen3.5-9B replication [S1]. Math training uses DAPO-Math-17K, 17K prompts with integer answers [S1][S4].[^qa-11] Math is an unweighted out-of-distribution (OOD) macro over AIME24 (30 prompts), AIME25 (30) and AMC23 (83); code is LiveCodeBench v6 (175 prompts); main scores are mean@16, the average of 16 sampling draws per prompt [S1]. The recipe is 200 steps, 64 prompts per batch, $G=8$, a 7,168-token cap and learning rate $2\times10^{-6}$, on eight H200 GPUs with verl and SGLang 0.5.2 [S1][S10]; the first outside-teacher figure (Figure 7) evaluates every 20 steps [S1]. The repeated training runs we found are the further-GRPO-trained thinking-teacher runs, rerun "to confirm the instability" [S1].

**Outside teachers.** With a Qwen3-1.7B-Base student and Qwen3-4B, 8B and 32B teachers on DAPO-Math-17K, GRPO is above every OPD run at every evaluated FLOP count, on validation and on the OOD macro [S1].[^qa-12] Across eight cells split by student and teacher solve rate, GRPO wins in-domain in all eight; on OOD math, OPD finishes above GRPO in three weak-teacher cells [S1]. On code with a Qwen3-4B-Base student, GRPO reaches 46.4% on LiveCodeBench v6 at 0.6 EFLOP, while OPD with a 32B teacher peaks at 28.7% at 68.7 EFLOP and with an 8B teacher at 36.7% at 45.7 EFLOP [S1]. Across five learning rates, the best GRPO run reaches 18.9% OOD at 7.8 EFLOP and the best OPD run 18.4% at 14.3 EFLOP [S1]. The ordering survives two verl versions and a 9B tinker replication, where OPD collapses to 0.013 on AIME24 mean@8 against GRPO's 0.542 at step 40 [S1].

Apart from those OOD cells and a cross-domain result in Appendix F (code-trained OPD beating code-trained GRPO on math), the one regime where an outside teacher beats GRPO per FLOP is single-domain math at $G=1$ with eight times the optimizer steps; the advantage disappears on code and on the two-domain mix [S1].

**Self-GRPO teachers.** With a Qwen3-4B-Base student, the same-size GRPO teacher's 33.9% OOD accuracy, which GRPO reaches at 10.1 EFLOP, is recovered by OPD at 1.62 EFLOP with $G=8$ and 0.2 EFLOP with $G=1$ [S1]. Our recomputation gives 6.2x and 50.5x, consistent with the stated 6x and Figure 1's 50.0x.[^qa-13] Per setting:

- Qwen3-8B-Base, math: the teacher's 40.1% within about 3 EFLOP ($G=8$) or 1 EFLOP ($G=1$), against 27.9 EFLOP for GRPO [S1]; roughly 9x and 28x (our calculation).
- Qwen3-4B-Base, code: 2.4x fewer FLOPs on LiveCodeBench v1–v5 and a tie with GRPO on strict CodeForces [S1].[^qa-14]
- Olmo-3-7B-Instruct-SFT, math: GRPO reaches 40% at 14.4 EFLOP; OPD from the step-200 GRPO checkpoint at $G=1$ reaches the teacher within about 0.36 EFLOP, stated as about 56x (44 to 69x per benchmark), and then peaks at 51.2% [S1].[^qa-15]

The 50x sits near the top of a range from parity to about 56x; the largest values use $G=1$.

**Multi-domain consolidation.** Here the teacher's cost is counted. On a math-plus-code mix, two GRPO specialists cost 10.7 EFLOP and routed multi-teacher OPD reaches their accuracy in a further 0.55 EFLOP; on four domains (adding IFBench and MMLU-Pro), the specialists cost 14.4 EFLOP and consolidation 1.15 EFLOP [S1]. Our recomputation: 5.1% (stated 5.2%) and 8.0% (matching).[^qa-16] Counting specialist training, the merged student matches joint GRPO with instance-level mixing using 42.0% fewer FLOPs on two domains and 31.6% fewer on four [S1]. The joint-GRPO FLOP figure is not printed in the text, only plotted in Figure 5, so we could not recompute 42.0%; the text says the batch-mix variant of joint GRPO also underperforms, without a percentage. On the two-domain mix, joint GRPO needs about 15 EFLOP to reach the math specialist and stays near 41% on code against the specialist's 46.4% [S1].

**Predicting success.** Following Li et al. [S8], the authors report that initial top-16 token overlap between student and teacher correlates with a smaller normalized teacher–student gap, give no coefficient or run count, and call it a side analysis for one fixed student [S1].

## Critical assessment

**One run per arm.** Apart from those reruns, every curve is a single training run; searching the full HTML text for seed, repeat, rerun, replicate, interval, bootstrap, standard deviation, variance and error bar returned no seed counts or run-to-run variance, and the "replications" are across frameworks, model sizes and families, not seeds (our search, 2026-11-07).[^qa-17] Crossings are read at evaluated checkpoints (every 20 steps in Figure 7; the Olmo crossing is at step 20), so an early crossing is resolved only to one evaluation interval, so ratios with small denominators, such as 0.2 EFLOP, carry uncertainty the paper does not quantify (our reading).

**The headline contrast.** The 50x and 56x ratios divide GRPO's FLOPs by distillation FLOPs, yet the teacher is that GRPO run. Our calculation for the 4B math case: GRPO to 33.9% plus distillation costs at least 10.1 + 0.2 = 10.3 EFLOP, about 2% more than GRPO alone, for a student that matches a checkpoint already in hand. The authors make the same point and redirect the argument to consolidation [S1]. The self-teacher was trained on the same DAPO prompts the student is distilled on, so the student retraces a policy already found on that data; students sometimes end above their teacher (35.8% against 33.9%; 51.2% against 40.0% for Olmo), and the authors leave the cause open [S1].

**Confounds in the teacher comparison.** In the Figure 3 teacher grid, the families differ in more than provenance: the GRPO-trained base teachers were themselves GRPO-trained with a 7,168-token response cap and the further-GRPO-trained thinking teachers with 16,384, while every OPD student run shares one recipe [S1].[^qa-18] A longer cap would let an inflating student spend more FLOPs per step, but the student's cap does not differ across that grid, so a student-side cap difference cannot explain the outside teachers' deficit [S1]. Appendix E.1 weakens this concern: an outside Qwen3-4B teacher at the 7,168 cap still drove a 4B student to the cap, while GRPO on the same student did not [S1].[^qa-19] Thinking mode is a second confound: in Appendix D.5 it costs OPD with a 4B teacher 8.2 points against 2.1 for GRPO [S1].[^qa-20]

> [!CAUTION]
> **QA · Corrected.** The first two sentences originally read: "GRPO-trained base teachers run with a 7,168-token response cap and outside thinking teachers with 16,384 [S1]. A longer cap lets an inflating student spend more FLOPs per step, so within that grid part of the outside teachers' deficit may be cap-driven (our reading)." In Section 5 of [S1], the 7,168 and 16,384 caps belong to the GRPO recipe that trained families (i) and (iii) of teachers. The off-the-shelf thinking teachers of family (ii) get no GRPO training and so have no such cap. The same section states that "Every OPD run shares the same recipe; only the teacher varies". Figure 22 shows that, in this setup, the outside Qwen3-4B teacher's OPD student trains against the 7,168-token limit. The cap-driven reading therefore has no basis in the student runs, and the sentences now say so.

**Asserted mechanisms.** Two explanations lack a separating experiment: outside teachers sit far from the base in weight space (a singular-value-shift score $\kappa_\text{spec}$ of 3,571 for outside Qwen3-4B against 2.81 for the 4B GRPO checkpoint), offered by the authors as plausible, not proven; and the overlap diagnostic, a correlation without a coefficient [S1].

**Internal inconsistencies.** Two numbers in v1 do not line up. The Olmo inputs (14.4 and 0.36 EFLOP) give 40x, not the stated 56x. On code, the Appendix I text says the self-GRPO teacher run reaches about 47% within about 0.5 EFLOP, while the Figure 28 caption gives 47.3% within 0.25 EFLOP [S1].[^qa-21] Neither changes a finding's direction.

**Unit of compute.** FLOPs exclude prompt tokens, which matter for five-shot MMLU-Pro prompts capped at 4,096 tokens [S1], and they ignore that generation tends to be memory-bound.[^qa-22] A separate paper measures, in its own setup, a 7.2% per-step wall-clock overhead for OPD over GRPO (4B teacher, 8B student, four B200 GPUs, responses fixed at 16,384 tokens), with rollout generation 61.6% of the GRPO step [S12]. It is a different unit and setup, not a check on the anchor. The anchor reports no wall-clock for its main runs and notes that $G=1$ runs take longer [S1].

**Literature claim.** The survey's labels come from two independent Claude Opus 4.8 passes with quotation-backed fields; the appendix describes no human audit [S1].[^qa-23] The Desk's agents are also Claude models; we do not assess the survey's accuracy.

**Reproducibility.** Hyperparameters, per-ablation overrides and prompt templates are documented, and the authors state that every model, dataset and framework used is public [S1]. The v1 HTML links no code repository and announces no release of trained checkpoints or logs (searched for "github", "release" and "huggingface", 2026-11-07). The anchor cites Dr. GRPO [S3], HybridFlow [S10] and generalized knowledge distillation [S5] in their peer-reviewed venues; those pages did not open for us (OpenReview challenge, ACM 403, ICLR proceedings 404), so we cite the arXiv versions.

> [!TIP]
> **QA · Reproducibility.** [S1] v1 releases no code, but it says its OPD objective follows Li et al. [S8] and that its training hyperparameters are close to theirs. The arXiv record of [S8] lists code at https://github.com/thunlp/OPD (QA opened the record, not the repository). The math training set, DAPO-Math-17K, is described in [S4]. Table 2 and Tables 3 to 5 of [S1] give the shared, GRPO-specific, OPD-specific and per-ablation settings.

## Connections

This blog's [2026-10-14 post](../published/2026-10-14-on-policy-distillation-skills-not-knowledge.md) found that reverse-KL OPD transfers compositional skill but few new facts; that post asked what OPD transfers, this one what it costs.

Li et al. argue OPD needs compatible thinking patterns plus capability the student lacks, and recommend an off-policy cold start and teacher-aligned prompts to rescue failing runs [S8]; a self-GRPO teacher meets the first condition by construction (our reading). Armandpour et al. offer an alternative diagnostic, a gradient-alignment score against an estimated ideal update, and report that the distillation signal is noisier on rollouts the student already gets right [S11].

Production reports already use the anchor's recommended pipeline: MOPD in MiMo-V2-Flash has domain-specialized teachers, some RL-trained, give dense token-level feedback [S9]. The anchor's Section 6 is a FLOP-counted, small-scale version of that recipe [S1]. The authors list hybrid outcome-reward objectives, alternative divergences and asynchronous rollouts as untested at matched FLOPs [S1]; reverse distillation from weaker teachers is a further variant [S12].

## Open questions

- Do the orderings hold across training seeds? A three-seed rerun of the Figure 3 teacher grid and the $G=1$ self-teacher run would settle how much of the 6x to 56x range is noise.
- How much of the outside-teacher deficit is length? Rerunning outside thinking teachers at the 7,168-token cap, or with a length penalty, would separate signal quality from token count.
- Will code follow? Without logs, the per-run FLOP counts that carry the argument cannot be checked.

> [!NOTE]
> **QA · Context.** On the second question: according to Section 5 and Table 2 of [S1], the outside-teacher OPD students in the Figure 3 grid already train at the 7,168-token cap, and Figure 22 shows the outside Qwen3-4B run at that limit. So the first rerun suggested here is, in effect, the paper's existing setup. QA found no length-penalty variant in [S1], so that half of the question is still open.

## Sources

S1. [Unpacking the Compute Efficiency of Strong-to-Weak OPD against GRPO (arXiv 2611.08453v1)](https://arxiv.org/abs/2611.08453) · preprint · B · published 2026-11-05 · accessed 2026-11-07
S2. [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models (arXiv 2402.03300v3)](https://arxiv.org/abs/2402.03300) · preprint · B · published 2024-02-05 · accessed 2026-11-07
S3. [Understanding R1-Zero-Like Training: A Critical Perspective (arXiv 2503.20783v2)](https://arxiv.org/abs/2503.20783) · preprint · B · published 2025-03-26 · accessed 2026-11-07
S4. [DAPO: An Open-Source LLM Reinforcement Learning System at Scale (arXiv 2503.14476v2)](https://arxiv.org/abs/2503.14476) · preprint · B · published 2025-03-18 · accessed 2026-11-07
S5. [On-Policy Distillation of Language Models: Learning from Self-Generated Mistakes (arXiv 2306.13649v3; accepted at ICLR 2024)](https://arxiv.org/abs/2306.13649) · preprint · B · published 2023-06-23 · accessed 2026-11-07
S6. [On-Policy Distillation (Thinking Machines Lab)](https://thinkingmachines.ai/blog/on-policy-distillation/) · lab-post · B · published 2025-10-27 · accessed 2026-11-07
S7. [Qwen3 Technical Report (arXiv 2505.09388v1)](https://arxiv.org/abs/2505.09388) · technical-report · B · published 2025-05-14 · accessed 2026-11-07
S8. [Rethinking On-Policy Distillation of Large Language Models: Phenomenology, Mechanism, and Recipe (arXiv 2604.13016v2)](https://arxiv.org/abs/2604.13016) · preprint · B · published 2026-04-14 · accessed 2026-11-07
S9. [MiMo-V2-Flash Technical Report (arXiv 2601.02780v2)](https://arxiv.org/abs/2601.02780) · technical-report · B · published 2026-01-06 · accessed 2026-11-07
S10. [HybridFlow: A Flexible and Efficient RLHF Framework (arXiv 2409.19256v2)](https://arxiv.org/abs/2409.19256) · preprint · B · published 2024-09-28 · accessed 2026-11-07
S11. [Unmasking On-Policy Distillation: Where It Helps, Where It Hurts, and Why (arXiv 2605.10889v2)](https://arxiv.org/abs/2605.10889) · preprint · B · published 2026-05-11 · accessed 2026-11-07
S12. [Eliciting Weak-to-Strong Generalization with On-Policy Reverse Distillation (arXiv 2609.08798v2)](https://arxiv.org/abs/2609.08798) · preprint · B · published 2026-09-08 · accessed 2026-11-07

## QA notes

[^qa-1]: **Verified** — [S1] lists ten authors, all at Salesforce AI Research (one also at UIUC). Section 4 and Figure 7 cover a Qwen3-1.7B-Base student and outside Qwen3-4B, 8B and 32B teachers on DAPO-Math-17K. There, GRPO "sits above every OPD run at every evaluated FLOP count" on both the validation split and the OOD macro, and the Figure 7 caption says the OPD runs spend 1.4–4.7x as much compute. The exceptions the paper reports (single-rollout runs on single-domain math, three OOD cells) are covered under Evidence.
[^qa-2]: **Contradicted** — Section 5 of [S1] places the 7,168- and 16,384-token caps in the GRPO recipe used to train teacher families (i) and (iii). It then states that "Every OPD run shares the same recipe; only the teacher varies". Table 2 gives 7,168 tokens as the shared training response maximum, and Figure 22 shows the outside Qwen3-4B teacher's student training against that limit. The bullet has been corrected; see the CAUTION callout below the TL;DR. The rest of the clause holds: the Figure 3 grid uses one student (Qwen3-4B-Base) and one prompt set (DAPO-Math-17K).
[^qa-3]: **Verified** — QA searched the v1 HTML text of [S1] on 2026-11-07. It found no occurrence of "seed" and no standard deviations, variances, error bars or confidence intervals. The only GitHub or Hugging Face links are arXiv page links and a DeepSeek-V4 model-release reference. The reproducibility statement documents recipes and hyperparameters and says all models and datasets used are public, but it announces no release of code or trained checkpoints. Appendix A says every surveyed paper was read by Claude Opus 4.8. The arXiv record lists v1 only (2026-11-05) and no journal reference.
[^qa-4]: **Verified** — Section 5.1 of [S1]: the same-size 4B GRPO teacher's 33.9%, which GRPO reaches at 10.1 EFLOP, is recovered by OPD at 1.62 EFLOP (about 6x), and at 0.2 EFLOP with one rollout per prompt (about 50x). The introduction states that the ratio "counts only distillation". The abstract says that on a single domain, distilling the GRPO checkpoint "adds to total compute".
[^qa-5]: **Verified** — Appendix G of [S1]. On code, the self-GRPO teacher reaches GRPO's LiveCodeBench v6 accuracy with 2.4x fewer FLOPs on LiveCodeBench v1–v5 and ties GRPO on strict CodeForces. On Olmo-3-7B-Instruct-SFT, GRPO reaches 40% at 14.4 EFLOP and OPD reaches the teacher within about 0.36 EFLOP (step 20); the text calls this about 56x, and the Figure 27 caption gives 56x (44–69x per benchmark). 14.4 / 0.36 = 40.0, as the post says. QA found no other FLOP figure in [S1] for either run that would give 56x.
[^qa-6]: **Supported with caveat** — Section 6 of [S1] gives 42.0% fewer FLOPs on two domains and 31.6% on four, against joint GRPO with instance-level mixing, "after accounting for the OPD and self-GRPO-teacher costs". Figure 5 starts the multi-teacher curves at the specialists' total FLOPs. Caveats: the joint-GRPO FLOP count at the matching point is only plotted, so neither percentage can be recomputed from the text. Each arm is a single run, and the distillation stage uses one rollout per prompt. The batch-mix variant of joint GRPO is only said to underperform. The specialists were tuned per domain (Table 11: code at 80 steps, batch 32 and a 16,384-token cap), while instance-mix joint GRPO uses one shared batch size of 64 and a 16K cap (Appendix J).
[^qa-7]: **Supported with caveat** — [S6] (Kevin Lu with Thinking Machines, 2025-10-27) says on-policy distillation learns the RL-trained policy in "approximately 7-10x fewer gradient steps, which corresponds to a compute efficiency of 50-100x". That setup is itself a self-teacher one: RL on Qwen3-8B-Base with LoRA rank 128, then distillation back into the same base. The 50–100x is derived from step counts plus shorter context lengths and smaller batches, not measured in FLOPs. Section 5.1 of [S1] says its own 50x matches "the efficiency gains reported in the OPD literature" and cites [S6].
[^qa-8]: **Verified** — Section 3 and Appendix B.1, Eq. (1) of [S1]: student generation (2N_s), log-probability recompute (2N_s) and update (6N_s) give 10N_s, and OPD adds 2N_t for the teacher. Only generated tokens are counted. Table 2 disables the reference-model KL term, so "neither method pays for a reference-policy forward pass".
[^qa-9]: **Verified** — QA searched the full [S1] text and found no interpolation rule, tolerance or numeric threshold for a match. Crossings are reported at evaluated checkpoints, for example "by the first evaluated checkpoint" in Section 5.1 and step 20 for Olmo in Appendix G.
[^qa-10]: **Supported with caveat** — Appendix E.1, Figure 22 and Table 8 of [S1] give these figures. The 7,000-token and 96% figures come from training rollouts against the 7,168-token training cap. The 63.6% and 16.6% come from a repetition probe that the paper calls naive and conservative. It was applied to the first 500 rollouts of the step-200 OOD math evaluation, which runs at a 30,720-token maximum.
[^qa-11]: **Supported with caveat** — DAPO-Math-17K is the default math training set in [S1], and [S4] describes it as 17K prompts, each paired with an integer answer. [S1] also trains on DeepMath-103k, in the Appendix D.8 ablation and the tinker replication (Appendix D.9).
[^qa-12]: **Verified** — Section 4 and the Figure 7 caption of [S1]: no-think mode, 200 steps, evaluations every 20 steps. GRPO finishes at about 15 EFLOP, and every OPD run stays below it.
[^qa-13]: **Verified** — Section 5.1 and the Figure 1(b) caption of [S1]. QA's arithmetic: 10.1 / 1.62 = 6.2 and 10.1 / 0.2 = 50.5. [S1] does not say which checkpoint of the GRPO run serves as the 33.9% teacher, and Section 5.1 also mentions a best GRPO accuracy of 38.8%. The post's "at least" wording in Critical assessment allows for this.
[^qa-14]: **Verified** — Appendix G of [S1], referring to the left column of Figure 19. Each arm is a single run.
[^qa-15]: **Verified** — Appendix G and the Figure 27 caption of [S1]: GRPO uses eight rollouts and 200 steps; OPD distills the step-200 checkpoint with one rollout per prompt for 80 steps. The caption gives the 51.2% peak; the text gives 51% at 1.25 EFLOP.
[^qa-16]: **Verified** — Section 6 of [S1]. 0.55 / 10.7 = 5.14% and 1.15 / 14.4 = 7.99%. The Figure 30 caption gives the 15 EFLOP and 41% figures for joint GRPO with instance-level mixing.
[^qa-17]: **Verified** — QA repeated the search on the v1 text and found no seeds, standard deviations, variances, error bars, confidence intervals or bootstrap. The only reported repeats are the further-GRPO-trained thinking-teacher runs ("we repeat each run to confirm the instability", Section 5.1). The replications in Appendices D.9 and G change the framework, student size or model family.
[^qa-18]: **Contradicted** — see the CAUTION callout below this paragraph. Section 5 of [S1] gives the 7,168- and 16,384-token caps as the response maxima of the GRPO recipe used to train teacher families (i) and (iii), and says "Every OPD run shares the same recipe". Table 2 sets the training cap at 7,168 tokens. The sentence and the one after it were corrected in place.
[^qa-19]: **Supported with caveat** — Figure 22 and Appendix E.1 of [S1] show this. That run uses the same setup as Figure 3: a Qwen3-4B-Base student, DAPO-Math-17K, thinking mode and the 7,168-token training limit. So it shows the cap used across the grid; it is not a separate control. The outside teacher's student reaches the limit by step 9, while GRPO and the self-GRPO teacher's student end at 3,813 and 3,741 tokens.
[^qa-20]: **Supported with caveat** — the numbers match Appendix D.5 and Figure 13 of [S1], but that experiment uses a Qwen3-1.7B-Base student after OpenThoughts-3 SFT. There, OPD with an 8B teacher loses the same 2.1 points as GRPO, and OPD with a 32B teacher loses 7.7. The authors add that the two panels "are not a controlled comparison with each other". Section 5 runs all its experiments in thinking mode, so thinking mode does not differ between the teacher families in the Figure 3 grid. It may still put OPD at a disadvantage against GRPO there.
[^qa-21]: **Verified** — Appendix I of [S1]: the text gives about 47% LiveCodeBench v6 accuracy within about 0.5 EFLOP, and the Figure 28 caption gives 47.3% within 0.25 EFLOP, above GRPO's 46.4%. The Figure 30 caption gives about 0.2 EFLOP for multi-teacher OPD to pass the code specialist.
[^qa-22]: **Unverified** — the post cites no source for this, and QA did not find it stated in [S1]. [S12] reports rollout generation as 61.6% of a GRPO step in its own setup, which shows generation dominates step time but does not show that it is memory-bound.
[^qa-23]: **Supported with caveat** — Appendix A of [S1]: every paper is read once by Claude Opus 4.8, with quotation-backed fields. Only papers that clear a coarse rule (a distinct teacher plus any GRPO mention) are re-read by a second, independent Claude Opus 4.8 pass, so not every label rests on two passes. QA found no description of a human audit. The ethics statement mentions humans only to say the work "involves no human subjects".

## Disclosure

> *Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
