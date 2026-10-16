---
title: 'FLUX 3 Action: joint video-action flow matching for robot control, and what its RoboLab lead rests on'
slug: 2026-10-16-flux-3-action-world-action-model
dek: Black Forest Labs' open 7B world action model denoises robot actions together with future video and leads its open rivals on a simulated benchmark, but its settings were tuned on the same 120 tasks it reports.
date: 2026-10-16 14:43:00-06:00
type: research
status: published
cycle: 4
tags:
- robotics
- world-models
- diffusion
- distillation
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-10-16 15:03:12-06:00
  sources_by_grade:
    A: 4
    B: 11
    C: 4
    D: 1
  claims:
    verified: 42
    caveat: 8
    unverified: 0
    contradicted: 1
    outdated: 0
  flags:
    note: 1
    important: 0
    warning: 0
    caution: 1
    tip: 1
sources:
- id: S1
  title: FLUX 3 Action (technical report page)
  url: https://bfl.ai/models/flux-3-action
  type: technical-report
  grade: B
  published: 2026-09-22
  accessed: 2026-10-16
- id: S2
  title: FLUX 3 Action (Hugging Face blog announcement)
  url: https://huggingface.co/blog/black-forest-labs/flux-3-action
  type: lab-post
  grade: B
  published: 2026-09-23
  accessed: 2026-10-16
- id: S3
  title: black-forest-labs/flux-3-action-droid (model card and Hub metadata)
  url: https://huggingface.co/black-forest-labs/flux-3-action-droid
  type: code
  grade: B
  published: 2026-09-22
  accessed: 2026-10-16
- id: S4
  title: black-forest-labs/flux-action (README)
  url: https://github.com/black-forest-labs/flux-action
  type: code
  grade: B
  published: 2026-09-23
  accessed: 2026-10-16
- id: S5
  title: 'flux-action docs: DROID full fine-tuning'
  url: https://github.com/black-forest-labs/flux-action/blob/main/docs/droid-finetune.md
  type: code
  grade: B
  published: 2026-09-23
  accessed: 2026-10-16
- id: S6
  title: 'Question about releasing the distillation training recipe (flux-action issue #1)'
  url: https://github.com/black-forest-labs/flux-action/issues/1
  type: social
  grade: D
  published: 2026-09-24
  accessed: 2026-10-16
- id: S7
  title: 'RoboLab: A High-Fidelity Simulation Benchmark for Analysis of Task Generalist Policies (RSS 2026)'
  url: https://roboticsproceedings.org/rss22/p096.pdf
  type: peer-reviewed
  grade: A
  published: 2026-07-13
  accessed: 2026-10-16
- id: S8
  title: 'RoboLab: A High-Fidelity Simulation Benchmark for Analysis of Task Generalist Policies (arXiv v4)'
  url: https://arxiv.org/abs/2604.09860
  type: preprint
  grade: B
  published: 2026-08-14
  accessed: 2026-10-16
- id: S9
  title: RoboLab-120 leaderboard
  url: https://research.nvidia.com/labs/srl/projects/robolab/leaderboard.html
  type: dataset
  grade: B
  published: 2026-10-16
  accessed: 2026-10-16
- id: S10
  title: 'Cosmos 3: Omnimodal World Models for Physical AI (arXiv v4)'
  url: https://arxiv.org/abs/2606.02800
  type: preprint
  grade: B
  published: 2026-06-23
  accessed: 2026-10-16
- id: S11
  title: 'π0.5: a Vision-Language-Action Model with Open-World Generalization (CoRL 2025, PMLR 305)'
  url: https://proceedings.mlr.press/v305/black25a.html
  type: peer-reviewed
  grade: A
  published: 2025-10-07
  accessed: 2026-10-16
- id: S12
  title: World Action Models are Zero-shot Policies (DreamZero)
  url: https://arxiv.org/abs/2602.15922
  type: preprint
  grade: B
  published: 2026-02-17
  accessed: 2026-10-16
- id: S13
  title: 'Fast-WAM: Do World Action Models Need Test-time Future Imagination? (arXiv v2)'
  url: https://arxiv.org/abs/2603.16666
  type: preprint
  grade: B
  published: 2026-03-23
  accessed: 2026-10-16
- id: S14
  title: Self-Supervised Flow Matching for Scalable Multi-Modal Synthesis
  url: https://arxiv.org/abs/2603.06507
  type: preprint
  grade: B
  published: 2026-03-06
  accessed: 2026-10-16
- id: S15
  title: Analyzing and Improving the Training Dynamics of Diffusion Models (CVPR 2024)
  url: https://openaccess.thecvf.com/content/CVPR2024/html/Karras_Analyzing_and_Improving_the_Training_Dynamics_of_Diffusion_Models_CVPR_2024_paper.html
  type: peer-reviewed
  grade: A
  published: 2024-06-17
  accessed: 2026-10-16
- id: S16
  title: Scaling Rectified Flow Transformers for High-Resolution Image Synthesis (ICML 2024, PMLR 235)
  url: https://proceedings.mlr.press/v235/esser24a.html
  type: peer-reviewed
  grade: A
  published: 2024-07-08
  accessed: 2026-10-16
- id: S17
  title: Video Models Steer Robots (The Batch)
  url: https://www.deeplearning.ai/the-batch/video-models-steer-robots
  type: news
  grade: C
  published: 2026-10-09
  accessed: 2026-10-16
- id: S18
  title: GPT 6 Astra as an Embodied Policy (Su et al., code release README)
  url: https://github.com/anonymous-report-421/GPT-as-Policy
  type: code
  grade: C
  published: 2026-09-14
  accessed: 2026-10-16
- id: S19
  title: 'GPT 6 Astra as an Embodied Policy: RoboLab gallery and its data file'
  url: https://anonymous-report-421.github.io/public-website/robolab-gallery.html
  type: dataset
  grade: C
  published: 2026-09-14
  accessed: 2026-10-16
- id: S20
  title: Positronic Robotics (home page; blog index linked from it)
  url: https://positronic.ro/
  type: blog
  grade: C
  published: 2026-10-16
  accessed: 2026-10-16
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 20 (A 4 · B 11 · C 4 · D 1)
> · Claims checked: 51 (verified 42 · caveat 8 · unverified 0 · contradicted 1)
> · Checked 2026-10-16 15:03 MDT by the QA agent

# FLUX 3 Action: joint video-action flow matching for robot control, and what its RoboLab lead rests on

*Black Forest Labs' open 7B world action model denoises robot actions together with future video and leads its open rivals on a simulated benchmark, but its settings were tuned on the same 120 tasks it reports.*

## TL;DR

- FLUX 3 Action (F3A) is an open-weight 7B world action model: one flow-matching transformer denoises a chunk of robot actions together with future video frames, starting from a video-heavy multimodal backbone [S1][S3].[^qa-1]
- On RoboLab-120, a simulated tabletop benchmark, the guidance-distilled checkpoint averages 42.2% across seeds, against 36.8% from a single Cosmos3-Nano-Policy leaderboard run [S1][S9].[^qa-2]
- The 42.92% headline is one leaderboard run, and it equals the best of the base checkpoint's six seeds in the report's own table (our reading) [S1][S9].[^qa-3]
- Timestep distribution, guidance weights, weight averaging and checkpoint were all chosen by RoboLab success on the same tasks, with no held-out set, so part of the margin may be selection [S1].[^qa-4]
- Speed gains are in real-time factor: per call, the one-step model is no faster than π0.5 on a B200 GPU, but it predicts about twice as much motion [S1].[^qa-5] Weights and fine-tuning code are public; pretraining data, compute and the distillation recipe are not [S3][S4][S6].[^qa-6]

## Why now

Black Forest Labs (BFL) published the F3A report page (page metadata dated 2026-09-22) and announced the release on its Hugging Face blog on 2026-09-23 [S1][S2]. The DROID weights appeared on the Hub on 2026-09-22 and the code on GitHub on 2026-09-23 [S3][S4].

The release tests whether a generator trained mostly on video can stand in for scarce robot demonstrations by predicting video and actions jointly [S1].

As of 2026-10-16 the RoboLab leaderboard lists F3A second, at 515 of 1,200 episodes (42.9%), behind an entry called Lakeside evaluated on 3,000 episodes (51.0%) [S9].[^qa-7]

## Background

**Vision-language-action models versus world action models.** A vision-language-action (VLA) model maps camera images, robot state and an instruction directly to actions; BFL calls π0.5 the strongest open VLA [S1][S11]. A world action model (WAM) predicts future video jointly with actions. BFL credits the DreamZero paper with introducing the term [S1]; DreamZero's 14B autoregressive video diffusion model runs closed-loop at 7 Hz [S12]. NVIDIA's Cosmos3-Nano-Policy, the previous best open WAM on RoboLab, is a 16B Mixture-of-Transformers model built on a dense 8B transformer, with separate tower weights for autoregressive and diffusion tokens; it predicts 32 joint-position actions at 15 Hz and is served with 4 diffusion steps and classifier-free guidance split across two RTX Pro 6000 GPUs [S10].

**RoboLab-120.** The benchmark, published at Robotics: Science and Systems (RSS) 2026, contains 120 tabletop tasks for a simulated DROID Franka setup. Policies are fine-tuned on the real-robot DROID dataset, not on simulation, and each task runs 10 episodes [S7]. Its rankings matched the real-robot RoboArena benchmark (Spearman 1.00), but across only four policies [S7]. The appendix warns that with 10 trials a per-task 95% interval is about ±30 points near 50% success [S8].

**Flow matching details.** Flow models learn to reverse $z_t=(1-t)x_0+t\varepsilon$; how training timesteps are sampled matters, and Esser et al. biased sampling toward perceptually relevant noise levels [S16]. BFL averages weights with the power-function exponential moving average (EMA) of Karras et al., whose length can be set after training [S1][S15].

## The core idea

**Problem statement.** At control step $k$ the DROID policy receives three RGB images (wrist, left, right; each 360×640), an 8-dimensional state of seven joint angles plus gripper closure, and an instruction $\ell$ [S3]. It must output a chunk $A_k\in\mathbb{R}^{32\times 8}$ of absolute joint commands at 15 Hz, about 2.13 s of motion [S1][S3]. F3A models the joint conditional

$$p_\theta(V_k, A_k \mid o_k, \ell),$$

where $V_k$ is a latent of future video frames. Text, video and robot state are tokenized for the FLUX 3 backbone [S1]; an unmodified copy of Qwen3-VL-4B-Instruct serves as text encoder, and it and the video autoencoder are frozen and shared through the base repository [S3][S4]. In our notation, with $x_0=(V, sA)$ and the rectified-flow velocity target $u=\varepsilon-x_0$, training minimizes

$$\mathcal{L}(\theta)=\mathbb{E}_{t,\varepsilon}\big[\lambda_v\lVert \hat u^{\,v}_\theta(z_t,t,c)-u^{v}\rVert^2+\lambda_a\lVert \hat u^{\,a}_\theta(z_t,t,c)-u^{a}\rVert^2\big].$$

The report does not write out its loss; the released recipe states that video and action share one timestep, actions are scaled by $s=2$, and the loss weights are 1 for video and 50 for actions [S5].

**Mechanism 1: placing actions and video on the noise schedule.** From per-modality reconstruction losses across checkpoints, BFL found an S-shaped profile with a transition the report places at $\sigma(t)=3.3$, or $t\approx0.964$, and turned fitted sigmoids into logit-logistic proposal densities [S1]. Candidate distributions were shifted by $t\mapsto \alpha t/(1+(\alpha-1)t)$, which moves the mode to logit$(t)=\log\alpha$, with $\alpha\in\{24,33,42\}$ [S1]. The report argues that for $s\gg1$ a joint flow model approximates $p(\text{video}\mid\text{action})\,p(\text{action})$, because actions become signal while video is still mostly noise [S1]. Our calculation: for unit-variance data, signal-to-noise is $((1-t)/t)^2$, so $s=2$ multiplies it by 4 and shifts the action transition by $\log 2\approx0.69$ in logit$(t)$ toward the noise end. Our reading: $s=2$ is a mild version, committing the action slightly before the video sharpens. The selected setting was logit-logistic, scale 0.75, $\alpha=42$, $s=2$ [S1][S5]. By contrast, BFL's Self-Flow pretraining deliberately gives different tokens different noise levels [S14].

**Mechanism 2: split guidance, then distillation.** Writing classifier-free guidance per modality as $\hat u=\hat u_\varnothing+w(\hat u_c-\hat u_\varnothing)$ (our notation), F3A uses separate weights $w_v$ for video tokens and $w_a$ for action tokens [S1]. A grid search on all 120 tasks favoured high video and low action guidance, peaking at 42.00% for $w_v=4$, $w_a=1$ [S1].[^qa-8] With $w_a=1$ the action prediction stays at its conditional value, so our reading is that guidance acts through the jointly denoised video. Guidance doubles forward passes, so BFL distilled the guided teacher into an unguided student: a 1.8–2× speedup with a gain of 0.6 to 1.08 points [S1]. Step distillation then cut sampling from 4 steps to 1, for an expected 3.15–4× speedup at a cost of 3.51 to 4.32 points, still predicting video and actions jointly [S1].[^qa-9]

**Training pipeline.** Pretraining used image, video and audio, with video over 95% of tokens. Action midtraining (the 724K-step checkpoint initializes the policy) mixed 36.95% video with audio and 63.05% action-labelled video from games, egocentric hand-pose footage, handheld grippers and teleoperation across 14 embodiments; most pose data use a 50-dimensional two-end-effector space ("EE50") [S1]. DROID fine-tuning adds fresh action heads, freezes the trunk for 1,000 steps, and trains 30,000 steps at a global batch of 2,048 windows [S1][S5].

## Evidence

**Benchmark conditions.** A RoboLab-120 run is 1,200 episodes [S7][S9]. Table 5 gives F3A results as mean ± standard error of the mean (SEM) over six seeds per setting (eight for one), served in 16-bit bfloat (BF16) or 8-bit floating point (FP8) [S1]. In BF16, the base, guidance-distilled and one-step checkpoints average 41.60 ± 0.46, 42.19 ± 0.39 and 38.68 ± 0.29; in FP8, the latter two average 42.24 ± 0.36 and 37.92 ± 0.31 [S1].[^qa-10] The report does not define a seed; every per-seed value is a whole number of successes out of 1,200 (our calculation), which fits evaluation reruns of one checkpoint rather than separate training runs (our reading). The text's one-step figure, 38.3% ± 0.38, equals the mean of all 12 one-step seeds (our calculation) [S1].[^qa-11] Competitors are single leaderboard runs, so run counts are not matched: Cosmos3-Nano-Policy 441/1,200 (36.8%), π0.5 336 (28.0%), DreamZero 308 (25.7%) [S9].[^qa-12]

**Ablations, all scored on RoboLab.** With 10K fine-tuning steps, a randomly initialized model scores 0.75% and the 724K-step midtraining checkpoint 18.63%. BFL notes these runs used preliminary small-batch settings [S1]. At batch 2,048, absolute-joint fine-tuning with fresh heads reached 40.13% against 37.88% for reusing the EE50 head [S1]. Online power EMA ($\sigma_\text{rel}=0.10$) scored 42.00%, against 36.50% for raw weights, across 18 variants that are two-seed means where available [S1].

**Latency and real-time factor.** Table 4 of the report gives median end-to-end latency per predicted chunk on a B200 GPU [S1]. In FP8, the one-step F3A takes 32.29 ms, the 4-step unguided configuration used by the guidance-distilled model 101.71 ms, and Cosmos 3 Nano with 4 guided steps 320.40 ms. π0.5 with 10 steps takes 31.99 ms and was evaluated only in BF16 [S1].[^qa-13] Real-time factor (RTF) divides processing time by the duration of motion the chunk covers. F3A and Cosmos predict 2.13 s per chunk and π0.5 predicts 1.00 s, giving RTFs of 0.048 for guidance-distilled FP8 F3A, 0.150 for Cosmos and 0.032 for π0.5 [S1]. Our calculation: the one-step model's 2.1× RTF advantage over π0.5 on B200 comes entirely from the longer horizon. On an RTX 5090 the one-step model is 1.15× (FP8) to 2.42× (BF16) slower than π0.5 [S1].[^qa-14]

**Real robot.** Positronic Robotics ran four policies on a Franka arm: ten DROID tasks, three attempts each, a 240 s limit, an operator blind to the model, and every attempt recorded [S1]. F3A completed 28/30, Cosmos 3 Nano 27/30, DreamZero 20/30 and π0.5 13/30 [S1].[^qa-15]

**Hybrid control with a reasoning model.** BFL reproduced the setup of Su et al.: on ten RoboLab tasks, five episodes each, GPT 6 Astra reviews the fast policy's proposed chunk and executes part of it, modifies one to five actions, substitutes its own, or stops [S1]. F3A with Astra at low effort solved 45/50 at $8.77 and 8 min 08 s per success. Pure Astra at maximum ("xhigh") effort solved 50/50 at $13.47 and 16 min 23 s, and π0.5 with Astra at medium effort solved 43/50 at $12.28 [S1].[^qa-16] Su et al.'s published gallery data for the same ten tasks show π0.5+Astra 46/50, pure Astra 49/50 and π0.5 alone 18/50 (our tally) [S19]. These match the columns BFL labels Reported for π0.5+Astra and π0.5 [S1]; Su et al.'s headline experiment used another benchmark, RoboDojo [S18].

## Critical assessment

**Selection on the test tasks.** The timestep distribution was chosen on RoboLab's simple tasks, the guidance grid on all 120, and the EMA profile and final checkpoint (best of evaluations every 1K steps during cooldown) by RoboLab success [S1]. The seeds are fresh reruns on the same tasks; no held-out tasks are evaluated, and the sources do not say whether competitors were tuned on RoboLab.[^qa-17] Our reading: the 5.4-point guidance-distilled margin over Cosmos is large relative to Table 5's seed-to-seed spread of 0.7–1.1 points (our calculation), but not obviously larger than what tuning four design choices on 120 tasks could buy.[^qa-18]

**Headline accounting.** Table 1 lists 42.92% (515/1,200 on the leaderboard), while the text and Table 5 give 42.2% [S1][S9]. The model card reports 42.92% without naming a variant; its root package is the BF16 base policy [S3]. Our reading is that the headline is the best of the six base-BF16 seeds, which Table 5 lists as 42.92; the report does not say so.[^qa-19] The one-step model's claim to beat every open policy rests on 38.3% against one Cosmos run at 36.8% [S1]. With F3A's seed spread as a proxy for the unknown Cosmos spread, that 1.5-point gap is about 1.4 to 2.1 seed standard deviations (our calculation).[^qa-20] The RoboLab authors recommend at least 100 episodes per task to resolve differences under 10% between policies [S8].[^qa-21]

> [!NOTE]
> **QA · Context.** The leaderboard's data file [S9] attaches a 95% interval to each 1,200-episode run: 40.1–45.7% for F3A's 515 successes and 34.1–39.5% for Cosmos3-Nano-Policy's 441, so those two runs do not overlap. By the same Wilson method (QA calculation), a single run at the one-step model's 38.3% (about 460 of 1,200) would span roughly 35.6–41.1%, which overlaps the Cosmos interval.

**Size and speed are not like-for-like.** The 7B figure is the diffusion transformer; the frozen 4B text encoder and the video autoencoder are separate [S3]. Cosmos's 16B counts two towers' weights, and each token is routed through only one of them [S10]. NVIDIA serves Cosmos with guidance parallelized over two GPUs [S10]; BFL times it with guidance on and argues that parallelizing doubles hardware cost [S1]. The cost argument is fair, but the latency ratios do not reflect Cosmos's own deployment.

**Real-robot and hybrid evidence is thin.** On the real robot, 28/30 against 27/30 is a one-attempt difference (two-sided Fisher exact $p=1.0$, our calculation) on single-object tasks, and the report does not name the F3A checkpoint. Positronic offers blind policy evaluation as a service, and as of 2026-10-16 its blog index has no post on this evaluation, so the only record is BFL's [S20]. In the hybrid study, each configuration is one 50-episode run. F3A+Astra (low) at 45/50 against pure Astra (xhigh) at 50/50 gives $p\approx0.056$ (our calculation). The report does not state the Astra token price; dividing cost by tokens in its full-results table gives $1.26 to $1.42 per million tokens (our calculation). The "29% cheaper and 40% faster" claim compares against different rows for cost and for time, and the hybrid section does not name the F3A checkpoint [S1].[^qa-22]

**Ties to the benchmark owner.** BFL credits NVIDIA's Isaac Lab and RoboLab teams for the basis of most of its evaluations [S1], and The Batch notes that NVIDIA runs RoboLab and evaluates its own models on it [S17]. The leaderboard marks F3A, Cosmos3-Nano-Policy, π0.5 and DreamZero as cross-checked by the RoboLab organizers, and its data file lists F3A as an external submission from BFL and the other three as internal entries [S9].[^qa-23]

> [!CAUTION]
> **QA · Corrected.** This sentence originally read: "The leaderboard page does not say who ran each entry [S9]." The leaderboard [S9] as rendered in a browser contradicts that. Its script shows each entry's developer and adds a "Verified" marker to F3A, Cosmos3-Nano-Policy, π0.5 and DreamZero. The page defines the marker as "RoboLab organizers were able to independently run this policy and/or cross-check its reported results". The page's data file lists F3A as an external submission from Black Forest Labs (submitted 2026-09-15, added 2026-09-21) and the other three as internal entries. What the leaderboard still does not say is whether the organizers re-ran F3A or only cross-checked BFL's numbers.

**Internal inconsistencies.** Beyond 42.92 versus 42.2, the report's fine-tuning learning rates (2e-4 trunk, 1e-3 heads) differ from the released recipe's (1.92e-4, 9.6e-4), and the recipe's action-loss weight of 50 does not appear in the report, which describes only a $1/s^2$ reweighting in the scale ablation [S1][S5]. The repository says its standalone path omits the reference run's classic EMA and a zero-weight teacher forward pass [S5].

**Reproducibility.** Weights for base, DROID and SO-101 are on the Hub behind a contact-sharing agreement, under the FLUX Kommunity License v1.0 [S3]. The Batch reports that this license excludes companies with $5 million or more in annual revenue [S17].[^qa-24] Code is Apache-2.0 and covers inference, a RoboLab policy server, DROID full fine-tuning from the 724K midtraining base, and SO-101 low-rank adaptation [S4][S5]. Pretraining and midtraining data and code are not released (the README's guides, checked 2026-10-16, cover setup, DROID fine-tuning, SO-101 and custom embodiments) [S4]. Nor is the distillation recipe: a user asked for it on 2026-09-24, with no maintainer reply as of 2026-10-16 [S6]. The full report, read on 2026-10-16, gives data proportions, step counts and hardware type but no GPU-hours, FLOPs or total pretraining tokens, and shows its SO-101 out-of-distribution results only as videos [S1].

> [!TIP]
> **QA · Reproducible.** The DROID repository [S3] holds the BF16 base policy at its root and guidance-distilled, step-distilled and FP8 packages under `variants/`. All weights are gated behind a contact-sharing agreement. In the code repository [S4], `docs/setup.md` covers installation, a first prediction from a recorded observation, and serving the policy to RoboLab. The DROID guide [S5] gives the reference fine-tuning recipe, whose reference run selected step 26,000 with power EMA $\sigma_\text{rel}=0.10$.

## Connections

**Do world action models need to imagine at test time?** Fast-WAM trains with video but skips future-video prediction at inference; its authors report results competitive with imagine-then-act variants, a larger drop when video co-training is removed, and 190 ms latency [S13]. F3A keeps joint prediction and distils for speed; the report has no ablation dropping video at inference (full text checked 2026-10-16) [S1]. BFL's earlier flux-mimic study, a video-action model with a separate action decoder, is a third route the report mentions without numbers [S1].

**Earlier posts.** Our [Kandinsky 6.0 post](../published/2026-10-15-kandinsky-6-joint-audio-video-generation.md) covered two modalities synchronized by shared clocks in cross-modal attention; F3A instead uses one shared timestep and a rescaled action signal. Our [RRSI post](../published/2026-10-16-regularized-harness-self-improvement.md) discussed how selecting on the tasks that are scored biases the winner upward; the same mechanism applies here.

## Open questions

- Does F3A's lead hold on held-out tasks, or after competitors get the same per-benchmark tuning? RoboArena entries for the top RoboLab models would be the most direct real-world check [S7][S17].
- How much of the gain needs video prediction at inference? Outside groups can now run a Fast-WAM-style ablation on the released DROID recipe [S5][S13].
- Midtraining had not saturated at 724K steps [S1]; how success scales with action-labelled data is the central question.
- Will the distillation recipe be released, so that the one-step checkpoint can be reproduced [S6]?

## Sources

S1. [FLUX 3 Action (technical report page)](https://bfl.ai/models/flux-3-action) · technical-report · B · published 2026-09-22 · accessed 2026-10-16
S2. [FLUX 3 Action (Hugging Face blog announcement)](https://huggingface.co/blog/black-forest-labs/flux-3-action) · lab-post · B · published 2026-09-23 · accessed 2026-10-16
S3. [black-forest-labs/flux-3-action-droid (model card and Hub metadata)](https://huggingface.co/black-forest-labs/flux-3-action-droid) · code · B · published 2026-09-22 · accessed 2026-10-16
S4. [black-forest-labs/flux-action (README)](https://github.com/black-forest-labs/flux-action) · code · B · published 2026-09-23 · accessed 2026-10-16
S5. [flux-action docs: DROID full fine-tuning](https://github.com/black-forest-labs/flux-action/blob/main/docs/droid-finetune.md) · code · B · published 2026-09-23 · accessed 2026-10-16
S6. [Question about releasing the distillation training recipe (flux-action issue #1)](https://github.com/black-forest-labs/flux-action/issues/1) · social · D · published 2026-09-24 · accessed 2026-10-16
S7. [RoboLab: A High-Fidelity Simulation Benchmark for Analysis of Task Generalist Policies (RSS 2026)](https://roboticsproceedings.org/rss22/p096.pdf) · peer-reviewed · A · published 2026-07-13 · accessed 2026-10-16
S8. [RoboLab: A High-Fidelity Simulation Benchmark for Analysis of Task Generalist Policies (arXiv v4)](https://arxiv.org/abs/2604.09860) · preprint · B · published 2026-08-14 · accessed 2026-10-16
S9. [RoboLab-120 leaderboard](https://research.nvidia.com/labs/srl/projects/robolab/leaderboard.html) · dataset · B · published 2026-10-16 · accessed 2026-10-16
S10. [Cosmos 3: Omnimodal World Models for Physical AI (arXiv v4)](https://arxiv.org/abs/2606.02800) · preprint · B · published 2026-06-23 · accessed 2026-10-16
S11. [π0.5: a Vision-Language-Action Model with Open-World Generalization (CoRL 2025, PMLR 305)](https://proceedings.mlr.press/v305/black25a.html) · peer-reviewed · A · published 2025-10-07 · accessed 2026-10-16
S12. [World Action Models are Zero-shot Policies (DreamZero)](https://arxiv.org/abs/2602.15922) · preprint · B · published 2026-02-17 · accessed 2026-10-16
S13. [Fast-WAM: Do World Action Models Need Test-time Future Imagination? (arXiv v2)](https://arxiv.org/abs/2603.16666) · preprint · B · published 2026-03-23 · accessed 2026-10-16
S14. [Self-Supervised Flow Matching for Scalable Multi-Modal Synthesis](https://arxiv.org/abs/2603.06507) · preprint · B · published 2026-03-06 · accessed 2026-10-16
S15. [Analyzing and Improving the Training Dynamics of Diffusion Models (CVPR 2024)](https://openaccess.thecvf.com/content/CVPR2024/html/Karras_Analyzing_and_Improving_the_Training_Dynamics_of_Diffusion_Models_CVPR_2024_paper.html) · peer-reviewed · A · published 2024-06-17 · accessed 2026-10-16
S16. [Scaling Rectified Flow Transformers for High-Resolution Image Synthesis (ICML 2024, PMLR 235)](https://proceedings.mlr.press/v235/esser24a.html) · peer-reviewed · A · published 2024-07-08 · accessed 2026-10-16
S17. [Video Models Steer Robots (The Batch)](https://www.deeplearning.ai/the-batch/video-models-steer-robots) · news · C · published 2026-10-09 · accessed 2026-10-16
S18. [GPT 6 Astra as an Embodied Policy (Su et al., code release README)](https://github.com/anonymous-report-421/GPT-as-Policy) · code · C · published 2026-09-14 · accessed 2026-10-16
S19. [GPT 6 Astra as an Embodied Policy: RoboLab gallery and its data file](https://anonymous-report-421.github.io/public-website/robolab-gallery.html) · dataset · C · published 2026-09-14 · accessed 2026-10-16
S20. [Positronic Robotics (home page; blog index linked from it)](https://positronic.ro/) · blog · C · published 2026-10-16 · accessed 2026-10-16

## QA notes

[^qa-1]: **Verified** — [S1] presents F3A as an open-weight 7B world action model derived from the FLUX 3 backbone, pretrained on image, video and audio with video over 95% of training tokens, and predicting actions jointly with future video. The DROID model's Hub metadata [S3] lists 6.95B BF16 parameters.
[^qa-2]: **Verified** — In Table 5 of [S1], the guidance-distilled checkpoint averages 42.19 ± 0.39 (BF16) and 42.24 ± 0.36 (FP8) over six seeds each. The leaderboard [S9] lists one default run for Cosmos3-Nano-Policy: 441/1,200 (36.8%).
[^qa-3]: **Supported with caveat** — The leaderboard [S9] lists F3A at 515/1,200, and the fourth base-BF16 seed in Table 5 of [S1] is 42.92, which is exactly 515/1,200. Neither source says these are the same run. The leaderboard's data file lists the entry as an external submission from BFL, which fits this reading but does not confirm it.
[^qa-4]: **Supported with caveat** — According to [S1], the timestep distribution was chosen on RoboLab's simple-task subset (Figure 7), the guidance weights on all 120 tasks (Figure 11), and the EMA profile and checkpoint by RoboLab success (Figures 9 and 12). No held-out RoboLab tasks are reported. The only F3A results outside RoboLab-120 are the 30-attempt real-robot test and the SO-101 videos.
[^qa-5]: **Verified** — Table 4 of [S1] (B200) gives 32.29 ms (FP8) and 41.06 ms (BF16) per chunk for the one-step F3A, against 31.99 ms for π0.5 (BF16 only). Table 3 gives 2.13 s of motion per F3A chunk against 1.00 s for π0.5.
[^qa-6]: **Verified** — The weights are on the Hub behind a contact-sharing agreement [S3]. The code repository [S4] links guides for setup, DROID fine-tuning, SO-101 LoRA and custom embodiments, and has no pretraining, midtraining or distillation code. [S1] reports no GPU-hours, FLOPs or token totals. Issue #1 [S6], which asks for the distillation code, was open with no replies on 2026-10-16.
[^qa-7]: **Verified** — On 2026-10-16 the leaderboard [S9] listed Lakeside at 1,531/3,000 (51.0%) and F3A at 515/1,200 (42.9%). Lakeside's weights are not public, so F3A is the highest-scoring open-weight entry, which supports the dek.
[^qa-8]: **Verified** — From the split-guidance section and Figure 11 of [S1]: the grid was run on the full 120-task suite, and the best score was 42.00% at video guidance 4 and action guidance 1.
[^qa-9]: **Verified** — Inference Efficiency section of [S1]. The point ranges match differences between rows of Table 5: 42.19 − 41.60 and 42.24 − 41.16 for guidance distillation, 38.68 − 42.19 and 37.92 − 42.24 for step distillation.
[^qa-10]: **Verified** — Table 5 of [S1]. QA recomputed every mean and SEM from the per-seed values listed there.
[^qa-11]: **Verified** — QA confirmed that every Table 5 value equals k/1,200 for a whole number k, and that the 12 one-step seeds average 38.30. The ±0.38 that [S1] attaches to 38.3% is not the standard error of those 12 values (about 0.23), and the report does not say how it was computed.
[^qa-12]: **Verified** — The leaderboard [S9] lists one default-instruction run each: Cosmos3-Nano-Policy 441/1,200, π0.5 336/1,200 and DreamZero 308/1,200.
[^qa-13]: **Verified** — Table 4 of [S1]. The static table is the B200 view, the page's default GPU tab, and its numbers reproduce the real-time factors in the Figure 1 caption.
[^qa-14]: **Verified** — Figure 1 caption and Inference Efficiency section of [S1]. QA recomputed 31.99 / (32.29 / 2.133) ≈ 2.1.
[^qa-15]: **Verified** — Table 6 and the Real Robot Evals section of [S1]. This is BFL's account of the evaluation; Positronic's own site had published no record of it by 2026-10-16 [S20].
[^qa-16]: **Verified** — Tables 7 and 8 of [S1].
[^qa-17]: **Supported with caveat** — The selection protocol matches [S1]. That the seeds are reruns on the same tasks is the post's inference: BFL does not define a seed, although the whole-number success counts support the reading. "No held-out tasks" holds within RoboLab; outside it, the 30-attempt real-robot test is the only F3A evaluation.
[^qa-18]: **Verified** — 42.2 − 36.8 = 5.4. The seed standard deviations implied by Table 5 of [S1] range from 0.70 to 1.12 points (QA recomputation).
[^qa-19]: **Supported with caveat** — Table 1 and Table 5 of [S1], the model card [S3] and the leaderboard [S9] match the description. That the headline is the best of six seeds is the post's reading (see note qa-3).
[^qa-20]: **Supported with caveat** — With the Table 5 seed standard deviations (0.70–1.12 points), a 1.5-point gap is 1.3 to 2.1 SDs. With the unrounded gap (38.30 − 36.75 = 1.55) it is 1.4 to 2.2 SDs. The conclusion is unchanged.
[^qa-21]: **Supported with caveat** — Appendix A-A of [S8] makes this recommendation for per-task conclusions and for differences under 10% between policies. The same appendix notes that aggregate scores across all tasks are considerably tighter than per-task ones.
[^qa-22]: **Supported with caveat** — QA reproduced the statistics: two-sided Fisher exact p = 0.056 for 45/50 against 50/50, and the cost-to-token ratios in the full-results table of [S1] span $1.26–$1.42 per million tokens. The "29% cheaper" figure matches π0.5+Astra (medium) and the "40% faster" figure matches π0.5+Astra (low). The hybrid rows do not name an F3A checkpoint, but the same section names the FP8 step-distilled checkpoint for its F3A-only cost estimate.
[^qa-23]: **Contradicted** — QA corrected the original sentence; see the CAUTION callout under "Ties to the benchmark owner". The organizer marker and developer names come from the page's script, and the provenance fields come from the leaderboard's published data file (static/data/leaderboard.json on the [S9] site, generated 2026-10-02), which the page loads.
[^qa-24]: **Supported with caveat** — [S17] says the license limits commercial use to companies earning less than $5 million a year. It does not say that larger companies are barred from other uses.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
