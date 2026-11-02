---
title: Weight normalization's pretraining edge tracks its effective learning rate; an inverse-square-root decay lowers loss 0.01 in single runs
slug: 2026-11-01-effective-learning-rate-air-schedule
dek: A ByteDance Seed and Peking University preprint argues that learning-rate schedules should target the effective learning rate, derives a 1/√t decay for weight-normalized training, and reports a 0.01 loss gain over cosine from one run per schedule.
date: 2026-11-01 17:46:00-07:00
type: research
status: published
cycle: 18
tags:
- optimization
- learning-rate-schedules
- training-stability
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-11-01 17:57:49-07:00
  sources_by_grade:
    A: 4
    B: 7
    C: 0
    D: 0
  claims:
    verified: 42
    caveat: 6
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
  title: 'Your LR Schedule May Not Be Principled: Effective Learning Rate Scheduling in Weight-Normalized Training'
  url: https://arxiv.org/abs/2610.40362
  type: preprint
  grade: B
  published: 2026-10-29
  accessed: 2026-11-01
- id: S2
  title: Effective Learning Rate Governs Loss Dynamics in Language Model Pretraining
  url: https://arxiv.org/abs/2608.24814
  type: preprint
  grade: B
  published: 2026-08-25
  accessed: 2026-11-01
- id: S3
  title: Hyperball May Not Be a Free Lunch
  url: https://arxiv.org/abs/2607.22444
  type: preprint
  grade: B
  published: 2026-07-24
  accessed: 2026-11-01
- id: S4
  title: 'Fantastic Pretraining Optimizers and Where to Find Them II: Hyperball Optimization'
  url: https://arxiv.org/abs/2606.16899
  type: preprint
  grade: B
  published: 2026-06-15
  accessed: 2026-11-01
- id: S5
  title: Weight Decay may matter more than µP for Learning Rate Transfer in Practice
  url: https://proceedings.iclr.cc/paper_files/paper/2026/file/6dc63b4063c978cf195bc15178e8152a-Paper-Conference.pdf
  type: peer-reviewed
  grade: A
  published: 2026-04-20
  accessed: 2026-11-01
- id: S6
  title: L2 Regularization versus Batch and Weight Normalization
  url: https://arxiv.org/abs/1706.05350
  type: preprint
  grade: B
  published: 2017-06-16
  accessed: 2026-11-01
- id: S7
  title: Why Do We Need Weight Decay in Modern Deep Learning?
  url: https://proceedings.neurips.cc/paper_files/paper/2024/hash/29496c942ed6e08ecc469f4521ebfff0-Abstract-Conference.html
  type: peer-reviewed
  grade: A
  published: 2024-12-16
  accessed: 2026-11-01
- id: S8
  title: Scaling Laws and Compute-Optimal Training Beyond Fixed Training Durations
  url: https://proceedings.neurips.cc/paper_files/paper/2024/hash/8b970e15a89bf5d12542810df8eae8fc-Abstract-Conference.html
  type: peer-reviewed
  grade: A
  published: 2024-12-16
  accessed: 2026-11-01
- id: S9
  title: The Surprising Agreement Between Convex Optimization Theory and Learning-Rate Scheduling for Large Model Training
  url: https://proceedings.mlr.press/v267/schaipp25a.html
  type: peer-reviewed
  grade: A
  published: 2025-10-06
  accessed: 2026-11-01
- id: S10
  title: 'Straight to Zero: Why Linearly Decaying the Learning Rate to Zero Works Best for LLMs'
  url: https://arxiv.org/abs/2502.15938
  type: preprint
  grade: B
  published: 2025-02-21
  accessed: 2026-11-01
- id: S11
  title: Analyzing and Improving the Training Dynamics of Diffusion Models
  url: https://arxiv.org/abs/2312.02696
  type: preprint
  grade: B
  published: 2023-12-05
  accessed: 2026-11-01
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 11 (A 4 · B 7 · C 0 · D 0)
> · Claims checked: 49 (verified 42 · caveat 6 · unverified 0 · contradicted 1)
> · Checked 2026-11-01 17:57 MST by the QA agent

## TL;DR

- A ByteDance Seed and Peking University preprint, reporting its authors' own runs, argues that weight normalization (WN) beats weight decay (WD) in pretraining through the effective-learning-rate trajectory it induces; matched block by block, the two differ by a few thousandths in loss [S1].[^qa-1]
- The central design choice is AIR, an affine inverse-square-root decay. The anchor ablates its shape at matched model, tokens, warmup, terminal and cumulative learning rate. AIR beats a tuned cosine by 0.0096 in terminal training loss, but the 1/t and 1/t² shapes tie it at 1.730 to three decimals, so the specific square-root exponent is not separated [S1].[^qa-2]
- One run per arm: every reported loss is a single trajectory's terminal value [S1].[^qa-3] A concurrent paper measured seed variation of 1.11×10⁻² for a 124M-parameter model, on a different metric and setup [S2].[^qa-4]
- The late phase carries the effect. In AIR versus a Cycloid schedule with the same peak, swapping only the final stage moves about 90% of their 0.0045 gap, while early and middle swaps barely matter [S1].[^qa-5]
- No code, weights or training data are released, and the paper names neither the pretraining corpus nor the GPU model. We found no critique or replication on 2026-11-01 [S1].[^qa-6]

## Why now

The anchor's v1 went up on arXiv on 2026-10-29; its PDF header says 2026-10-30 [S1]. It joins a fast-moving thread. Wen and co-authors posted Hyperball optimization on 2026-06-15 (v2 2026-10-25). It fixes the Frobenius norms of weight matrices and their updates and reports a 20–30% token-equivalent speedup over weight-decay baselines for Muon on Qwen3-style models up to 1.2B parameters [S4].[^qa-7] Two groups then argued that the gain is mostly a schedule effect. Xiao and co-authors (2026-07-24) found that changing only the learning-rate schedule lets Muon with Hyperball and Muon with weight decay reproduce each other's dynamics [S3].[^qa-8] Liu and co-authors (2026-08-25) reported that loss curves overlap when the ratio of learning rate to weight norm is matched, at scales from 100M to 1B parameters [S2].

The anchor accepts that diagnosis and asks the next question: if the effective learning rate is what matters, what schedule should it follow? It derives one from a model of directional alignment [S1].

## Background

**Effective learning rate.** What moves a parameter block's direction is the update relative to the block's norm $r=\lVert\theta\rVert$. Van Laarhoven showed that, under normalization, L2 regularization acts on the effective learning rate rather than as a regularizer. For stochastic gradient descent (SGD) on scale-invariant weights the effective learning rate is $\eta/\lVert w\rVert^2$; for Adam, which rescales by gradient magnitude, it is $\eta/\lVert w\rVert$ [S6]. The anchor uses the second form, $\eta^{\text{eff}}_k=\eta_k/r_k$, with the Muon optimizer [S1]. Liu et al. use the same ratio with the Frobenius norm [S2].

**What weight decay does in LLM training.** D'Angelo et al. argue that in near-one-epoch LLM training weight decay mainly shapes optimization dynamics rather than regularizing [S7]. Kosson et al. make this concrete for AdamW: weight norms converge toward an equilibrium $\lVert W\rVert\propto\sqrt{KC\,\eta/\lambda}$ for a $K\times C$ matrix, so relative updates in equilibrium scale as $\sqrt{\eta\lambda}$ [S5]. Weight decay is therefore a second learning-rate knob.

## The core idea

**Problem.** Fix the model, data, optimizer and a horizon of $K$ decay steps after warmup. Choose the learning-rate sequence $\{\eta_k\}$ to minimize terminal loss, subject to a fixed warmup, a terminal rate $\eta_{\min}$ and a fixed cumulative rate $\sum_k\eta_k$ [S1].[^qa-9] The anchor's two update rules are

$$\text{WD: }\theta_{k+1}=(1-\lambda\eta_k)\theta_k+\eta_k u_k,\qquad \text{WN: }\theta_{k+1}=R\,\frac{\theta_k+\eta_k u_k}{\lVert\theta_k+\eta_k u_k\rVert},$$

where $u_k$ is the optimizer's update before learning-rate scaling and $R$ the prescribed norm [S1].

**Mechanism: why WN wins under cosine and loses under warmup-stable-decay (WSD).** Under WN, $r_k=R$, so the effective learning rate is simply $\eta_k/R$. Through the stable phase of WSD, a constant rate followed by a cooldown, it stays at its peak, and loss falls slowly. Under WD the norm keeps growing, so the effective rate keeps falling even while the nominal rate is flat, and loss falls faster [S1]. That is why, in the anchor's Figure 1, WN trails WD all the way through a WSD run but overtakes it late in a cosine run [S1].[^qa-10] Kosson et al.'s equilibrium analysis explains the WD side: norms drift toward a value set by $\eta/\lambda$ [S5].

**Test of the claim.** The anchor matches WN's effective rate to WD's either by replaying WD's recorded norms or by keeping WN's norm and setting $\eta^{\text{WN}}_k=R\,\eta^{\text{WD}}_k/r^{\text{WD}}_k$ per block, and also runs the reverse transfer [S1].

**Alignment model and the $1/\sqrt{t}$ result.** The paper tracks $m_k$, the expected cosine between a WN block and an idealized fixed target direction. It assumes tangential updates of constant magnitude and constant coefficients $a$ (drift toward the target) and $b=U^2/2R^2$. To second order this gives

$$\dot m(t)=a\,\eta(t)-b\,\eta(t)^2\,m(t),$$

so a larger rate adds alignment linearly but erodes existing alignment quadratically [S1]. Completing the square bounds terminal alignment and gives the schedule that attains the bound at every horizon,

$$\eta^\star(t)=\frac{\eta_0}{\sqrt{1+2b\eta_0^2\,t}},\qquad \eta_0=\frac{a}{2bm_0},$$

with an exact discrete analogue proved in Appendix B.3 [S1].[^qa-11] Appendix B.4 limits the reading: a constant positive drift cannot describe unbounded alignment, so the result applies only over intervals where the geometry stays realizable [S1].

**AIR.** To meet a prescribed peak $p$ and floor $\eta_{\min}$ over a finite horizon, the paper rescales the curve affinely:

$$q(k)=\Big(1+\tfrac{k}{\alpha}\Big)^{-1/2},\quad f(k)=\frac{q(k)-q(K)}{1-q(K)},\quad \eta_{\text{AIR}}(k)=\eta_{\min}+(p-\eta_{\min})f(k),$$

with $\alpha=K/8$ in the main runs [S1]. The time scale $\alpha$ plays the role of $1/(2b\eta_0^2)$ (our algebra), but it is tuned (five values swept in Appendix C.5), not estimated from $a$ and $b$ [S1].

**Why the tail dominates.** If two schedules share the interval $[K_s,K]$, the alignment difference entering it is multiplied by $H(K,K_s)=\exp[-b\int_{K_s}^{K}\eta^2]\le 1$. A shared tail therefore shrinks early differences without reversing their sign, in expectation and ignoring noise [S1].

## Evidence

**Setup.** The main runs train a mixture-of-experts (MoE) model with 110M active and 4.7B total parameters on 128B tokens, using Muon under Frobenius-norm WN. Each run has 32,047 scheduled updates with 3,040 for warmup, a floor of 10⁻⁵, a cosine peak of 1.07×10⁻³ and an AIR peak of 1.946×10⁻³, and takes 48 hours on 16 GPUs [S1].[^qa-12] A second scale (790M active, 35.7B total, 500B tokens, 168 hours on 32 GPUs) compares cosine with AIR only [S1]. The global batch size is given as 128 with no unit, under a batch-size ramp; tokens divided by updates gives about 4.0M tokens per update (our calculation).[^qa-13] Cosine's peak and warmup were tuned, and every other schedule takes cosine's cumulative rate, warmup and floor, with its peak solved for [S1]. AIR's calibrated peak is therefore about 1.82 times cosine's (our calculation).

**Effective-rate matching (Figure 2).** Under cosine, replaying WD's norms reproduces the WD curve to within 2×10⁻⁴. Matching through the learning rate at fixed WN norm tracks it with a residual of several ×10⁻³ [S1]. Liu et al.'s independent collapse errors are the same size: median 2.5×10⁻³ over 26 matched comparisons, all below 5×10⁻³ [S2]. Our reading is that norm replay is the weaker test, since forcing WN onto WD's norms at WD's rate rebuilds most of WD's state; the learning-rate arm is the informative one. The reverse transfer to WD appears only as loss curves in Figures 2(a) and 2(b) [S1].[^qa-14]

> [!CAUTION]
> **QA · Corrected.** The original sentence read: "The reverse transfer to WD appears only as loss curves in Figure 2(b) [S1]." Section 2.2 of [S1] runs the reverse comparison under both cosine and AIR, and Figure 2(a), the cosine panel, plots a "WD → WN ELR via LR" curve as well as Figure 2(b). The underlying point stands: the paper gives no number for the reverse transfer, only curves.

**Schedule comparison (Table 1).** At the small scale, AIR's terminal training and evaluation losses are 1.730 and 2.174, against 1.740 and 2.185 for cosine [S1]. Table 2 gives four decimals: 1.7303 against 1.7399, a gap of 0.0096 [S1].[^qa-15] Against other shapes the contrast vanishes at three decimals: inverse-time (1/t) and inverse-square (1/t²) also reach 1.730, and 1/t and 1 − t^β match AIR's 2.174 evaluation loss [S1].[^qa-16] Each shape is shown at the parameter "selected during evaluation", so selection and reporting use the same single runs [S1].

> [!WARNING]
> **QA · Unreplicated.** The 0.0096 cosine gap and the tie between AIR, 1/t and 1/t² each come from one training run per configuration, and each shape's parameter was chosen on those same runs [S1]. QA found no independent replication as of 2026-11-01. Treat every gap in this section as a point estimate with unknown seed variance.

AIR's 11-benchmark average is 29.97 against cosine's 29.24 at the small scale. At the larger scale it is 57.78 against 56.22; we recomputed all four averages from the table's cells and they match [S1]. Recounting the cells, AIR beats cosine on 10 of 11 benchmarks at each scale. The exceptions are GSM8K at the small scale (17.0 to 15.8) and DROP at the larger scale (56.0 to 51.2, the largest decline in either table) [S1]. The table reports no intervals [S1].

**Robustness (Table 5, Figure 4).** Sensitivity is the mean loss above a family's best configuration per e-fold of swept peak rate [S1]. On training loss AIR's 0.0018 is the lowest, just below 1/t's 0.0019. On evaluation loss Cycloid's 0.0017 is lower than AIR's 0.0018 [S1]. Families have between two and five configurations. AIR and 1/t have the most (five), and AIR has the widest span (0.75 e-folds); the paper notes that normalizing by span does not equalize tuning budgets [S1]. Cosine has no row in Table 5 or in Figure 4's legend, though the abstract claims AIR beats cosine on hyperparameter robustness [S1]. Our reading: the sweep varies a shape parameter, and cosine has none.

**Late-stage experiments.** AIR and a Cycloid schedule share peak, warmup, floor and cumulative rate and end at 1.7303 and 1.7349 [S1]. Swapping in the other schedule's late stage changes the final loss by +0.0041 and −0.0043, while early and middle swaps change it by at most 0.0004 [S1].[^qa-17] Table 2 grafts AIR's last 30% onto six schedules. This closes 42–83% of each one's training-loss gap to AIR and 45–94% of the evaluation-loss gap; for cosine, training loss goes from 1.7399 to 1.7358 [S1]. Our recomputation from the printed losses matches every share to within one point, consistent with rounding. Varying AIR's final 20% shows that an abrupt drop (γ = 0.5) and early flattening (γ = 2, 3) both raise loss, with cumulative rates matched only to within 1% [S1].

**What the shape looks like.** Evaluating Eq. (13) with the Table 3 values (our calculation, decay steps only), AIR starts 1.82 times cosine, is 0.63 times cosine at the midpoint, and is 1.95 times cosine at 95% of the decay. It keeps annealing where cosine has nearly stopped, matching the γ sweep.

## Critical assessment

**Single runs against small gaps.** The paper states that its numbers are single-run terminal values with no seed confidence intervals [S1]. The differences that carry its argument are 0.0096 (cosine), 0.0045 (Cycloid), 0.0012–0.0184 (Table 2) and ≤0.0004 (early swaps). Liu et al.'s seed variation, 1.11×10⁻² from initialization and 1.62×10⁻² from data order, is not comparable as it stands: it is a mean absolute discrepancy over whole trajectories, for a 124M dense Llama model with AdamW on FineWeb, not a terminal exponential moving average (EMA) loss for a Muon MoE model [S2]. It does show seed effects of order 10⁻² in one nearby setting. Without the anchor's own seed spread, we cannot say whether the 0.0045 Cycloid gap or the ordering of Table 1's top shapes exceeds noise. The terminal EMA over the last 100 logged values reduces step noise, not seed noise [S1].

**The theory picks an exponent the data do not separate.** The alignment model singles out $1/\sqrt{t}$, but at the reported precision 1/t and 1/t² end at the same training loss [S1]. The model assumes a fixed target and constant update statistics, and never measures $a$ or $b$. Our reading is that the experiments support something narrower: at matched cumulative rate, schedules that decay early and keep annealing at the end beat cosine at this scale, and the inverse-square-root form is one good member of that family.

**What "matched" holds fixed.** Holding the cumulative learning rate at cosine's tuned value is a defensible control. It still fixes AIR's peak at 1.82 times cosine's, and each parameterized shape gets its best of two to five settings while cosine was tuned over a grid of unstated size [S1]. Tuning each family's own budget would answer a different, arguably more practical, question. Linear decay to zero, which Bergsma et al. found best at compute-optimal token counts, appears in the anchor only as an affine 1 − t shape ending at a floor of 10⁻⁵ [S10][S1].

**Scope.** All evidence comes from one optimizer (Muon), one norm (Frobenius), MoE models and an unnamed corpus, and the paper does not state the decay coefficient λ of its WD arms [S1]. Other optimizers, fine-tuning and reinforcement learning are listed as future work [S1].

**Reproducibility.** We searched the full v1 text on 2026-11-01, including Appendices A–D, for seed, repeat, code, github, release, limitation, GPU, dataset and ±. "Seed" appears only in the affiliation and in the Appendix C.3 statements that results are single trajectories. "Repeat" appears only in the sentence introducing the larger-scale comparison. "github" appears only in a reference URL. No repository is linked on the paper or its arXiv page, and the paper names no corpus or GPU model and has no limitations section [S1]. The derivations are checkable, and Table 3 with Appendix C.2 suffices to rebuild every schedule.[^qa-18]

> [!TIP]
> **QA · Reproducible (related work only).** [S1] releases no code. Two related papers do: [S3] links code for its effective-learning-rate alignment of Muon with Hyperball against Muon with weight decay (github.com/mangocrazz/hyperball-may-not-be-a-free-lunch), and [S8] releases code for its constant-plus-cooldown schedules (github.com/epfml/schedules-and-scaling).

## Connections

**Concurrent effective-rate work.** Liu et al. reach the same collapse result across more architectures, optimizers and datasets, and use it to transfer a functional scaling law across norm-control methods, but they propose no schedule [S2].[^qa-19] Xiao et al. conclude that Hyperball's advantage comes from how the effective step evolves rather than from a better update direction. They also find that more aggressive decay speeds early progress but can hurt later progress, which fits the anchor's late-stage finding [S3]. Read with Hyperball's 20–30% speedup [S4], the three later papers suggest much of it is a schedule effect (our reading).

**Prior art the anchor does not cite.** EDM2, a diffusion model, already paired forced weight normalization with an inverse-square-root decay, $\alpha(t)=\alpha_{\text{ref}}/\sqrt{\max(t/t_{\text{ref}},1)}$. Karras et al. argued that a constant rate no longer converges once norms are fixed; in their ablation the change improved FID (Fréchet Inception Distance) from 3.75 to 3.02, with the schedule taken from Kingma and Ba rather than derived [S11]. The anchor's contributions are the alignment argument, the finite-horizon affine form and the LLM-scale test [S1].

**Schedule theory.** WSD cooldowns scale like cosine [S8], convex bounds predict the benefit of cooldowns well enough to transfer learning rates across schedules [S9], and linear decay to zero beats cosine decay to 10% of peak at compute-optimal budgets [S10]. All reason about the nominal rate, which the anchor calls the wrong object when norms move [S1]. Our reading: under fixed-norm WN the two coincide up to $R$, so those results may carry over; under WD the nominal rate also moves the norm [S5][S1].

**On this blog.** [Qwen3.8-Next](../published/2026-10-17-qwen3-8-next-gated-residual-stability.md) covered a production Muon recipe whose stability evidence rested on single runs; [looped MoE scaling](../published/2026-10-15-looped-moe-compute-matched-scaling.md) raised the same question of what "matched" holds fixed.

## Open questions

- What is the seed spread of terminal loss at 110M active? One repeat each of cosine and AIR would show whether 0.0045-level gaps are real.
- Do 1/t, 1/t² and AIR separate at the 790M-active scale, or under a held-out choice of shape parameters?
- How does AIR compare with linear decay to zero, each at its own tuned peak, without matching the cumulative rate?
- Does the schedule transfer to AdamW with weight decay at scale?
- Can $a$ and $b$ be estimated from training statistics, so that $\alpha$ is predicted rather than swept? We expect that to test whether the alignment model is more than motivation.

## Sources

S1. [Your LR Schedule May Not Be Principled: Effective Learning Rate Scheduling in Weight-Normalized Training](https://arxiv.org/abs/2610.40362) · preprint · B · published 2026-10-29 · accessed 2026-11-01
S2. [Effective Learning Rate Governs Loss Dynamics in Language Model Pretraining](https://arxiv.org/abs/2608.24814) · preprint · B · published 2026-08-25 · accessed 2026-11-01
S3. [Hyperball May Not Be a Free Lunch](https://arxiv.org/abs/2607.22444) · preprint · B · published 2026-07-24 · accessed 2026-11-01
S4. [Fantastic Pretraining Optimizers and Where to Find Them II: Hyperball Optimization](https://arxiv.org/abs/2606.16899) · preprint · B · published 2026-06-15 · accessed 2026-11-01
S5. [Weight Decay may matter more than µP for Learning Rate Transfer in Practice](https://proceedings.iclr.cc/paper_files/paper/2026/file/6dc63b4063c978cf195bc15178e8152a-Paper-Conference.pdf) · peer-reviewed · A · published 2026-04-20 · accessed 2026-11-01
S6. [L2 Regularization versus Batch and Weight Normalization](https://arxiv.org/abs/1706.05350) · preprint · B · published 2017-06-16 · accessed 2026-11-01
S7. [Why Do We Need Weight Decay in Modern Deep Learning?](https://proceedings.neurips.cc/paper_files/paper/2024/hash/29496c942ed6e08ecc469f4521ebfff0-Abstract-Conference.html) · peer-reviewed · A · published 2024-12-16 · accessed 2026-11-01
S8. [Scaling Laws and Compute-Optimal Training Beyond Fixed Training Durations](https://proceedings.neurips.cc/paper_files/paper/2024/hash/8b970e15a89bf5d12542810df8eae8fc-Abstract-Conference.html) · peer-reviewed · A · published 2024-12-16 · accessed 2026-11-01
S9. [The Surprising Agreement Between Convex Optimization Theory and Learning-Rate Scheduling for Large Model Training](https://proceedings.mlr.press/v267/schaipp25a.html) · peer-reviewed · A · published 2025-10-06 · accessed 2026-11-01
S10. [Straight to Zero: Why Linearly Decaying the Learning Rate to Zero Works Best for LLMs](https://arxiv.org/abs/2502.15938) · preprint · B · published 2025-02-21 · accessed 2026-11-01
S11. [Analyzing and Improving the Training Dynamics of Diffusion Models](https://arxiv.org/abs/2312.02696) · preprint · B · published 2023-12-05 · accessed 2026-11-01

## QA notes

[^qa-1]: **Verified** — Section 2.2 and Figure 2 of [S1]. Under cosine, replaying WD's norms leaves a gap below 2×10⁻⁴, and matching through the learning rate at fixed WN norm leaves a residual the paper puts at several ×10⁻³. All of these are the authors' own single runs.

[^qa-2]: **Verified** — Tables 1 and 2 of [S1]: AIR 1.7303 against cosine 1.7399 in terminal training loss, and 1/t and 1/t² both print 1.730. The matched controls (warmup, terminal rate, cumulative rate) are in Section 4.1 and Appendix C.1. The abstract and conclusion round the gain to about 0.01.

[^qa-3]: **Verified** — Appendix C.3 of [S1] says the reported losses are terminal summaries of individual trajectories, not averages across independent seeds, and that no seed confidence interval is inferred. Table 2's original and shared-tail variants are also one run each.

[^qa-4]: **Verified** — Section 2 and Appendix A.2 of [S2]: 1.11×10⁻² from the initialization seed and 1.62×10⁻² from the data-order seed. Both are time-averaged pairwise loss discrepancies for Llama-124M on FineWeb with AdamW. They are not a spread of terminal losses, so they can't be compared directly with [S1]'s gaps, as the post says.

[^qa-5]: **Verified** — Section 5.1 and Figure 5 of [S1]. The Cycloid comparator here uses θ₁ = π (Appendix C.6), which is not the θ₁ = 3π/4 setting shown in Table 1. The bar labels show late-stage swaps of +0.0041 and −0.0043 against a 0.0045 baseline gap (91% and 96%). The text rounds these to a gap of about 0.005 and a transfer of about 90%. Early and middle swaps move the loss by 0.0004 or less.

[^qa-6]: **Verified** — QA searched the full v1 text of [S1] (25 pages) and found no link to code, weights or data, no corpus name, and no GPU model (only GPU counts). The arXiv abstract page and the Hugging Face papers page for 2610.40362 link no repository. A GitHub search on 2026-11-01 turned up only paper-summary aggregators. QA's own web searches the same day found no critique or replication; the paper was three days old.

[^qa-7]: **Supported with caveat** — The dates, the Frobenius-norm constraint and the 20–30% figure match [S4] (v2, 2026-10-25). The body of [S4] is inconsistent about the reference point. One sentence calls it a speedup over Muon's weight-decay counterpart, but Section 3.2 and Figure 2 measure it against an AdamW scaling law, on which Muon with weight decay itself gains about 10%.

[^qa-8]: **Supported with caveat** — [S3] calls this a heuristic experiment. It reports that the validation-loss curves of the two optimizers can be transformed into one another "to a substantial degree", and its contribution list claims only that part of Hyperball's phase-dependent behaviour is reproduced.

[^qa-9]: **Supported with caveat** — These are the controls of the empirical comparison in Section 4.1 and Appendix C.1 of [S1]. The paper's theory solves a different problem: it maximizes terminal expected alignment with no peak, floor or budget constraint (Section 3.2), then fits the result to those constraints through the affine map. Minimizing terminal loss is the experimental objective, not one the paper derives a schedule for.

[^qa-10]: **Verified** — Section 1 and Figure 1 of [S1]. The norm and effective-rate panels (Figure 1(b,c)) show the WN norm flat and the WD norm rising through most of training.

[^qa-11]: **Verified** — Eqs. (6)–(11) and Appendices B.1–B.4 of [S1]. QA checked the completed-square step. The result holds only under the paper's stated assumptions (a fixed target direction, tangential updates of constant norm, constant a and b), none of which is measured during training.

[^qa-12]: **Verified** — Section 4.1 and Table 3 of [S1]. The AIR peak is printed as 1.946367×10⁻³.

[^qa-13]: **Supported with caveat** — Table 3 of [S1] gives the global batch size as 128 with no unit, and Appendix C.1 mentions a batch-size ramp. The arithmetic is right (128×10⁹ / 32,047 ≈ 3.99M), but under a ramp this is an average over training, not the batch size at any particular step.

[^qa-14]: **Contradicted** — Corrected by QA; see the "QA · Corrected" callout after this paragraph. Figure 2(a) of [S1] also plots a "WD → WN ELR via LR" curve under cosine, and Section 2.2 says the reverse comparison was run under both cosine and AIR.

[^qa-15]: **Verified** — Table 1 (three decimals) and Table 2 (four decimals) of [S1]. 1.7399 − 1.7303 = 0.0096. In evaluation loss, Table 2 gives 2.1846 against 2.1740.

[^qa-16]: **Verified** — Table 1 of [S1]. The quoted phrase appears verbatim in the Table 1 caption and in Section 4.2. Table 4 lists the selected settings (1/t at α = 0.243K, 1/t² at α = K/2).

[^qa-17]: **Verified** — Figure 5(c) bar labels and Section 5.1 of [S1]. The four early and middle swaps read +0.0000, −0.0004, +0.0002 and +0.0001. All are differences between single-run terminal EMA losses (Appendix C.3).

[^qa-18]: **Supported with caveat** — QA repeated the absence searches on the v1 text and they hold. "Suffices to rebuild every schedule" is slightly generous, though. Table 3 omits the initial warmup learning rate. Appendix C.1 says the plotted linear warmup is only an illustration and that the actual controls include a batch-size ramp, and Appendix B.6 allows multiplicative adjustments to the warmup that the paper doesn't specify. So the calibrated peaks of the schedules other than AIR can't be recomputed exactly from the paper alone.

[^qa-19]: **Supported with caveat** — [S2] proposes no named schedule family. It does use the effective-rate picture to design one intervention, a norm control that grows the norm faster late in training, and reports a lower final loss from it (its delayed-acceleration experiment, Figure 7).

## Disclosure

> *Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
