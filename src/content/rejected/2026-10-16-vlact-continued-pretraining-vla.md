---
title: 'VLAct: continued pre-training of a vision-language-action backbone on open robot data, and what its matched comparisons show'
slug: 2026-10-16-vlact-continued-pretraining-vla
dek: VLAct continues training Qwen3-VL-4B on open robot data with partial freezing, caption co-training and three action heads; it beats matched baselines on simulation benchmarks by 2.5 to 21.4 points, but single runs leave unclear which ingredient matters.
date: 2026-10-16 09:24:00-06:00
type: research
status: rejected
cycle: 4
tags:
- robotics
- multimodal
- pretraining
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: reject
  checked_at: 2026-10-16 09:36:10-06:00
  sources_by_grade:
    A: 1
    B: 12
    C: 0
    D: 2
  claims:
    verified: 38
    caveat: 3
    unverified: 0
    contradicted: 3
    outdated: 0
  flags:
    note: 0
    important: 0
    warning: 1
    caution: 3
    tip: 1
sources:
- id: S1
  title: 'Beyond Data Scaling: Representation-Centric Continued Pre-training for Vision-Language-Action Models (arXiv v2)'
  url: https://arxiv.org/abs/2608.27550
  type: preprint
  grade: B
  published: 2026-08-27
  accessed: 2026-10-16
- id: S2
  title: 'Beyond Data Scaling: Representation-Centric Continued Pre-training for Vision-Language-Action Models (arXiv v1, HTML)'
  url: https://arxiv.org/html/2608.27550v1
  type: preprint
  grade: B
  published: 2026-08-27
  accessed: 2026-10-16
- id: S3
  title: 'starVLA/VLAct: official code repository and README'
  url: https://github.com/starVLA/VLAct
  type: code
  grade: B
  published: 2026-08-27
  accessed: 2026-10-16
- id: S4
  title: 'StarVLA/VLAct_Qwen3_Pretrain: model card and checkpoint'
  url: https://huggingface.co/StarVLA/VLAct_Qwen3_Pretrain
  type: code
  grade: B
  published: 2026-08-27
  accessed: 2026-10-16
- id: S5
  title: 'VLAct issue #1: Does freeze VL pretrain conducted compare with pt with 3 heads'
  url: https://github.com/starVLA/VLAct/issues/1
  type: social
  grade: D
  published: 2026-08-29
  accessed: 2026-10-16
- id: S6
  title: VLAct GitHub issue list
  url: https://github.com/starVLA/VLAct/issues?q=is%3Aissue
  type: social
  grade: D
  published: 2026-10-13
  accessed: 2026-10-16
- id: S7
  title: RoboDojo simulation leaderboard
  url: https://robodojo-benchmark.com/leaderboard
  type: dataset
  grade: B
  published: 2026-07-06
  accessed: 2026-10-16
- id: S8
  title: 'RoboDojo: A Unified Sim-and-Real Benchmark for Comprehensive Evaluation of Generalist Robot Manipulation Policies'
  url: https://arxiv.org/abs/2607.04434
  type: preprint
  grade: B
  published: 2026-07-05
  accessed: 2026-10-16
- id: S9
  title: 'RoboTwin 2.0: A Scalable Data Generator and Benchmark with Strong Domain Randomization for Robust Bimanual Robotic Manipulation'
  url: https://arxiv.org/abs/2506.18088
  type: preprint
  grade: B
  published: 2025-06-22
  accessed: 2026-10-16
- id: S10
  title: 'LIBERO-Plus: In-depth Robustness Analysis of Vision-Language-Action Models'
  url: https://arxiv.org/abs/2510.13626
  type: preprint
  grade: B
  published: 2025-10-15
  accessed: 2026-10-16
- id: S11
  title: 'Knowledge Insulating Vision-Language-Action Models: Train Fast, Run Fast, Generalize Better (arXiv v1)'
  url: https://arxiv.org/abs/2505.23705
  type: preprint
  grade: B
  published: 2025-05-29
  accessed: 2026-10-16
- id: S12
  title: 'Knowledge Insulating Vision-Language-Action Models: Train Fast, Run Fast, Generalize Better (NeurIPS 2025 spotlight poster)'
  url: https://neurips.cc/virtual/2025/poster/117079
  type: peer-reviewed
  grade: A
  published: 2025-12-02
  accessed: 2026-10-16
- id: S13
  title: 'Fine-Tuning Vision-Language-Action Models: Optimizing Speed and Success'
  url: https://arxiv.org/abs/2502.19645
  type: preprint
  grade: B
  published: 2025-02-27
  accessed: 2026-10-16
- id: S14
  title: 'GR00T N1: An Open Foundation Model for Generalist Humanoid Robots'
  url: https://arxiv.org/abs/2503.14734
  type: preprint
  grade: B
  published: 2025-03-18
  accessed: 2026-10-16
- id: S15
  title: 'StarVLA: A Lego-like Codebase for Vision-Language-Action Model Developing'
  url: https://arxiv.org/abs/2604.05014
  type: preprint
  grade: B
  published: 2026-04-06
  accessed: 2026-10-16
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **reject** · Sources: 15 (A 1 · B 12 · C 0 · D 2)
> · Claims checked: 44 (verified 38 · caveat 3 · unverified 0 · contradicted 3)
> · Checked 2026-10-16 09:36 MDT by the QA agent

## TL;DR

- VLAct continues training the Qwen3-VL-4B vision-language model on open robot datasets plus image captions. It freezes the vision encoder and the lower half of the language model, supervises three continuous action heads at once, and discards those heads before downstream fine-tuning [S1].[^qa-1]
- Against the same backbone fine-tuned without continued pre-training, with head, data and budget held fixed, VLAct gains 7.6 points on LIBERO-Plus and 18.8 on RoboTwin 2.0's low-data setting [S1]. Each figure is a single run with no seeds or variance reported.[^qa-2]
- Each design choice is ablated one at a time and is worth a few points.[^qa-3] In the auxiliary-data ablation (Figure 8), 75.0 on LIBERO-Plus is the score with no continued pre-training; robot-only continued pre-training is plotted at 79.6 and caption co-training at 82.6, each from a single run [S1].[^qa-4]
- Compute is given only as a GPU count, 16 GPUs, with no GPU type or wall-clock time [S1]. The model card adds 100,000 steps; the repository and card disagree on the released checkpoint's GPU count [S3][S4].[^qa-5]
- Code, backbone weights and five downstream checkpoints are public, but the downstream checkpoints use different heads from the headline configurations and the released config uses a different caption-loss weight [S3][S4].[^qa-6]

> [!CAUTION]
> **QA · Corrected.** The draft read: "In the auxiliary-data ablation the robot-only model scores 75.0 on LIBERO-Plus, the same as no continued pre-training, so the paper does not separate the effect of robot data from that of captions [S1]." Figure 8 of [S1] (page 25 of the v2 PDF) contradicts this. It plots a "Baseline" bar at 75.0, which matches Table 1's Qwen3VL-OFT with no continued pre-training, and then a separate "+ Pretrain" bar at 79.6 (+4.6). The auxiliary-data bars run from 80.2 to 82.6 (captions), with all sources mixed at 82.5. The figure caption says every auxiliary source improves "over robot-only training", and every auxiliary bar sits above 79.6, so on the natural reading "+ Pretrain" is robot-only continued pre-training. In that reading, robot data accounts for about 4.6 of the 7.6-point LIBERO-Plus gain and captions for about 3.0 more, all from single runs. The paper's prose invites the misreading: right after "Relative to the robot-only baseline", it says captions improve "the baseline from 75.0 to 82.6". The figure is the paper's only direct evidence on this point, and it does separate the two.

## Why now

The preprint by Senqiao Yang, Chengyao Wang and 14 co-authors appeared on arXiv on 2026-08-27 and was revised on 2026-10-06 [S1]. By our comparison of the two HTML versions, version 2 changes only the RoboTwin 2.0 table and its discussion [S1][S2]. The repository README says the paper was accepted to NeurIPS 2026 [S3]; an OpenReview search by title on 2026-10-16 returned only the arXiv/DBLP record, so we cite the arXiv version. VLAct was added to the RoboDojo leaderboard on 2026-07-31, before the preprint [S7].[^qa-7]

Two reasons to read it closely. It is a recipe study on public robot data with code and weights released, where the authors note that frontier vision-language-action (VLA) systems often rely on closed data [S1][S3]. And it makes a specific claim: the action decoder used during pre-training can lock the backbone's features into a form only that decoder reads well [S1].

## Background

A VLA policy usually starts from a pretrained vision-language model (VLM) and adds an action head that maps hidden states to a chunk of future actions. The paper uses four head families [S1]: **FAST** tokenizes action chunks and decodes them autoregressively; **OFT**, from OpenVLA-OFT, regresses continuous actions in parallel from appended action-query tokens with an L1 loss [S1][S13]; **PI** is a flow-matching action expert in the style of the π models; **GR00T** is a flow-matching diffusion-transformer module from the dual-system design of GR00T N1 [S1][S14].

*Continued pre-training* here means a middle stage: start from a pretrained VLM, train on broad multi-embodiment robot trajectories, then fine-tune per task [S1]. The authors name three failure modes: full updates on narrow robot data erode vision-language features, a single head specializes the backbone to that head, and per-robot output spaces block sharing of equivalent actions such as gripper open and close [S1].

LIBERO-Plus perturbs LIBERO along seven axes, including camera viewpoint, robot initial state and language; its authors found models very sensitive to camera and initial-state changes and largely insensitive to language [S10]. RoboTwin 2.0 has 50 dual-arm tasks with domain randomization [S9]. RoboDojo has 42 simulation tasks and a public leaderboard [S8].

## The core idea

Let $f_\theta$ be the VLM backbone, with parameters split into the vision encoder $\theta_V$, the lower half of the language model $\theta_{\text{low}}$ and the upper half $\theta_{\text{up}}$, producing a latent $z = f_\theta(I,\ell)$ from images $I$ and instruction $\ell$. Each pre-training head $h \in \mathcal{H} = \{\text{OFT}, \text{PI}, \text{GR00T}\}$ has parameters $\phi_h$, reads the same $z$ and predicts the same action chunk $a$ [S1]. A sample from embodiment $e$ supervises only its active output dimensions, written here as a mask $m_e$. In our notation, continued pre-training solves

$$
\min_{\theta_{\text{up}},\,\{\phi_h\}}\;
\mathbb{E}_{(I,\ell,a,e)\sim\mathcal{D}_{\text{robot}}}
\sum_{h\in\mathcal{H}}\Big[\mathcal{L}^{(h)}_{\text{action}}(\phi_h; z, a, m_e)+\mathcal{L}^{(h)}_{\text{wrap}}\Big]
\;+\;\lambda\,\mathbb{E}_{(I,y)\sim\mathcal{D}_{\text{cap}}}\,\mathcal{L}_{\text{CE}}(\theta; I, y),
$$

with $\theta_V$ and $\theta_{\text{low}}$ fixed and $\lambda = 0.5$ in the paper; every minibatch mixes robot and caption samples [S1]. Downstream, the heads $\phi_h$ and the caption stream are discarded, a fresh task head $\psi$ is attached, and $(\theta,\psi)$ are fine-tuned with nothing frozen [S1].[^qa-8]

**Shared action layout.** Each continuous head emits a 20-dimensional action per step: twelve absolute joint angles for the two arms of an AgileX robot, six delta end-effector dimensions for a single Franka arm, and two gripper slots, the first shared by Franka's gripper and AgileX's left gripper [S1]. Only the gripper coordinate is truly shared; there is no adapter or routing module [S1].

**Wrap-aware loss.** Joint-angle targets are wrapped into $[-\pi,\pi]$, and the residual is wrapped too, $\delta = ((\hat a - a)+\pi) \bmod 2\pi - \pi$, with an L1 penalty $|\delta|$ added to each head's loss, applied to the final generated sample for the flow-matching heads [S1]. This removes the artifact where $179^\circ$ and $-179^\circ$ look $358^\circ$ apart [S1].

**Why several heads should help.** The gradient reaching $z$ is the sum of gradients through each head's decoder. With one head (say OFT, a small MLP on action-query tokens) the backbone only has to make action information readable by that decoder, and the paper argues the feature geometry collapses toward it [S1]. Summing losses from heads with different inductive biases (one-shot regression versus iterative flow matching) forces $z$ to stay decodable by all of them. Appendix E supplies the evidence for this failure, which the paper calls decoder lock-in: a backbone pre-trained with OFT alone and fine-tuned with a fresh PI head scores 55.1, below 60.5 with no continued pre-training, while OFT-plus-GR00T pre-training, still without PI, gives 63.1 [S1]. That table does not name its benchmark; its full-recipe 77.0 matches the RoboTwin 50-demonstration PI result in Table 2 (our reading) [S1].[^qa-9]

**Why freeze half the model.** Lower layers are argued to carry broad visual and spatial features that narrow robot data would overwrite [S1]. The released configuration freezes the vision encoder and language-model layers 0 to 17 [S4].

## Evidence

**Data and compute.** Pre-training uses DROID, MolmoAct, InternData-A1 and RoboCOIN (Franka single-arm and AgileX dual-arm) plus captions, without per-dataset trajectory counts [S1]. The only pre-training compute figure is a count of 16 GPUs; on 2026-10-16 we searched the full v2 text, appendices included, for GPU type, hours, steps, batch size and learning rate and found none for pre-training [S1]. The model card adds 100,000 steps, a per-GPU robot batch of 16, AdamW with 5,000 warmup steps and seed 42 [S4], which implies about 25.6 million robot samples (our calculation, assuming 16 GPUs). Real-robot fine-tuning used 50,000 steps on 8 H800 GPUs per model [S1]. We found no wall-clock or throughput figure in the paper, README or card, so the paper's modest-compute claim rests on GPU count alone.[^qa-10]

**Matched comparisons.** The cleanest evidence compares VLAct with Qwen3VL-OFT, the same backbone family fine-tuned directly, with head, initialization, data, optimizer and fine-tuning budget fixed [S1][S3]. VLAct scores 82.6 vs 75.0 on LIBERO-Plus, 54.8 vs 33.4 on VLA-Arena, 80.5 vs 61.7 on RoboTwin 2.0 with 50 clean demonstrations per task, 92.5 vs 88.2 (Clean) and 90.8 vs 88.3 (Random) on RoboTwin with 500 added randomized demonstrations per task, and 18.50 vs 10.86 success on DOMINO [S1].[^qa-11] Each RoboTwin regime evaluates 50 tasks × 100 episodes [S1]; at that size the binomial standard error of an 80% rate is about 0.6 points (our calculation), so rollout noise is small next to these gaps. Run-to-run variance is another matter: on 2026-10-16 we searched the v2 text for seed, standard deviation, variance, confidence and ± and found no seeds or intervals for any result [S1]. The v2 text also gives no LIBERO-Plus episode count.[^qa-12]

Comparisons with published systems are not matched: their numbers are copied from their papers, and the authors note that compute, schedules and checkpoint selection may differ [S1]. On RoboTwin Random with added data, VLAct's 90.8 is below HoloBrain-0 (92.3) and Fast-WAM (91.8) [S1].

**Ablations.** Each ablation removes one component from the final model and reports one run [S1]. Updating the full backbone gives 78.9 (LIBERO-Plus) and 77.1 (RoboTwin) against 82.6 and 80.5. Separate per-embodiment heads give 81.1 and 78.5. On RoboTwin, raw joint angles give 75.5, wrapped targets 78.6 and the wrap-aware loss 80.5. Head diversity adds 1.7 (OFT), 1.6 (PI) and 4.3 (GR00T) points over matched single-head pre-training. Adding 20,000 handheld-interface trajectories adds 1.1 on LIBERO-Plus [S1].[^qa-13]

> [!WARNING]
> **QA · Unreplicated.** Every ablation in [S1] (Tables 6, 8, 9, 10, 11, 12 and Figure 8) is a single run with no seed count or interval, and several of the gaps that justify the recipe are 1 to 2 points: head diversity +1.6 and +1.7, the unified head versus separate heads +0.3 to +1.0, UMI data +1.1. We found no independent replication on 2026-10-16. Treat the ordering of the smaller components as provisional.

**Auxiliary data.** Every auxiliary source beats a robot-only baseline on LIBERO-Plus. Captions do best, reaching 82.6 against 79.6 for robot-only continued pre-training and 75.0 with no continued pre-training, and mixing all sources gives 82.5; even text-only instruction data helps, which the authors read as representation preservation rather than task transfer [S1].[^qa-14]

> [!CAUTION]
> **QA · Corrected.** The draft read: "Captions do best, raising it from 75.0 to 82.6", where "it" is the robot-only baseline. In Figure 8 of [S1] the robot-only bar ("+ Pretrain") is 79.6. The 75.0 bar is the "Baseline" with no continued pre-training, the same value as Table 1's Qwen3VL-OFT. The paper's prose ("improving the baseline from 75.0 to 82.6") measures the caption gain from that no-pre-training baseline, not from robot-only training. Over robot-only training, captions add 3.0 points in this single run.

**Unseen embodiments.** GR-1 and ARX X5 are absent from pre-training [S1]. On RoboCasa-GR1, VLAct reaches 49.5 with 20% of downstream data and 54.0 with all of it. The full-data comparators are 48.8 for Qwen3VL-OFT, 47.6 for GR00T-N1.6 and 37.0 for π0.5, and only the Qwen3VL-OFT run is described as matched [S1]. The v2 text gives no episode count here, and Figure 5(d) is an image [S1]. On RoboDojo the paper reports a 10.66 score and 7.60% success in the 2026-08-24 snapshot, eighth of 35 by score and sixth by success [S1]. The live leaderboard page, read on 2026-10-16, shows 10.65 and 7.58% among 58 entries: 27th by score and 24th by success (our count) [S7].[^qa-15]

**Real robots.** One model was fine-tuned for all single-arm tasks and one for all dual-arm tasks on Franka Research 3 arms; each task was run 10 times from 10 fixed starting configurations shared by both models [S1]. Single-arm short-horizon success averages 92.5% against 77.5%, and dual-arm 72.0% against 44.0% [S1]. As counts that is 37/40 versus 31/40 (Fisher exact p ≈ 0.11) and 36/50 versus 22/50 (p ≈ 0.008), our calculation, treating rollouts as independent, which shared starting states only approximate.[^qa-16]

## Critical assessment

**What the matched baseline isolates.** The paper says the Qwen3VL-OFT comparison isolates the recipe [S1]. Our reading is narrower: it isolates continued pre-training (extra open robot data plus recipe) against none. Whether the recipe beats naive continued pre-training rests on one-at-a-time ablations; we found no row in Tables 6 to 12, or in the text on Figure 8, that switches all components off together [S1].[^qa-17]

**The caption ablation.** The text measures the caption gain from a baseline of 75.0 on LIBERO-Plus [S1], identical to Table 1's model with no continued pre-training [S1]. One possibility is that robot-only continued pre-training adds nothing on LIBERO-Plus in this configuration, and the whole 7.6-point gain appears only with captions; another is that Figure 8's baseline is the no-pre-training model under another label. The text does not settle it. If the first reading holds, the headline is mainly about vision-language co-training, which prior work already recommends [S11], rather than better use of robot trajectories.[^qa-18]

> [!CAUTION]
> **QA · Corrected.** The draft read: "The robot-only baseline there scores 75.0 on LIBERO-Plus [S1], identical to Table 1's model with no continued pre-training [S1]." The text does not settle the question, but Figure 8 of [S1] (page 25 of the v2 PDF) does, and it supports the second reading. The 75.0 bar is labelled "Baseline", and robot-only continued pre-training appears as a separate "+ Pretrain" bar at 79.6. So the first reading, that robot-only continued pre-training adds nothing and the whole gain comes from captions, is not what the paper shows. In this single run, robot data accounts for about 4.6 of the 7.6 points and captions for about 3.0. That only partly answers the first open question below: there is still no seeded run and no caption-only arm without robot data. One labelling issue remains: the figure has a "+ Code" bar, while the text describes the corresponding source as text-only instruction-following data and lists no code dataset.

**Internal inconsistencies.** Section 4.3 says VLAct was pre-trained only on single-arm data, while Section 4.4 and Appendix H list AgileX bimanual data [S1]. The introduction attributes "7.6–21.4 point gains" to the backbone alone, yet its matched comparisons include gains of 4.3 and 2.5 on RoboTwin with added data and 5.2 on full-data RoboCasa-GR1 (our calculation from [S1]). The abstract says all models are open-sourced while Section 4 says scripts and checkpoints will be released [S1]. The GR00T-N1.6 figure is cited to the GR00T N1 report of 2025-03-18, which predates N1.6 [S1][S14].[^qa-19]

**Version change.** Version 1 had a Random column for the 50-demonstration RoboTwin setting (VLAct-OFT 41.5, baseline 10.5) and a sentence claiming strong clean-to-random generalization [S2]. Version 2 drops both [S1]; we found no stated reason.

**Leaderboard drift.** VLAct's live RoboDojo values differ slightly from the snapshot (Gen.-Std. success 11.67 now versus 12.00 in the paper), and entries such as DM0.5 shifted similarly; one possibility is a leaderboard-wide recomputation, which the page's news log, read on 2026-10-16, does not mention [S1][S7]. The paper's comparison with StarVLA-α (6.40 score) also predates StarVLA-team entries added on 2026-09-09, including StarVLA-OFT at 8.18 and StarVLA-PI_v3 at 10.81, whose training the leaderboard data does not describe [S1][S7].

**Embodiment overlap.** Franka pre-training data and the Franka-based LIBERO evaluations share an embodiment, as do the AgileX data and RoboTwin [S1]. We expect, but cannot confirm, that same-embodiment gains partly reflect familiarity rather than general representation quality; on held-out GR-1 the full-data margin is 5.2 points (our calculation) [S1].

**Statistical support.** Several design choices rest on single-run gaps of 1 to 2 points [S1]; our reading is that a second seed could reverse some of them. A maintainer account wrote in the issue tracker that three heads are not essential and that partial unfreezing beat full freezing and full updating, without numbers [S5]. These are claims, not evidence.

**Reproducibility.** Code is MIT-licensed with pre-training, data-cleaning and downstream launchers [S3]. The backbone checkpoint is Apache-2.0 [S4]. The README model table, read 2026-10-16, lists downstream checkpoints for RoboDojo, RoboTwin 2.0, DOMINO, VLA-Arena and LIBERO-Plus, none for RoboCasa-GR1 or the real robots [S3]. The README warns that the RoboTwin checkpoint uses a GR00T head while the 92.5 result uses OFT, and the LIBERO-Plus and VLA-Arena checkpoints use PI while the tables report OFT [S3]. The released config records a caption-loss weight of 0.2 rather than 0.5, and single-arm and dual-arm loss weights of 8.0 and 1.0 that we did not find in the paper [S3][S4]. The README says the card records 4 nodes × 8 GPUs; the card we read says 16 GPUs [S3][S4]. Open issues ask which DROID source and which InternData-A1 and RoboCOIN subsets were used [S6]. The released backbone is therefore not exactly the model behind the tables.[^qa-20]

> [!TIP]
> **QA · Reproducible in part.** QA opened the MIT-licensed repository [S3] and the Apache-2.0 backbone card [S4] on 2026-10-16. The card ships the 100,000-step checkpoint with `config.yaml`, `dataset_statistics.json` and `training_config.original.yaml`. That config records `loss_scale.vlm: 0.2`, `single_arm_loss_weight: 8.0`, `dual_arm_loss_weight: 1.0`, `gradient_accumulation_steps: 1`, seed 42, and frozen vision encoder plus language-model layers 0 to 17. To compare against the paper's matched baseline, fine-tune the backbone with an OFT head rather than starting from the PI or GR00T checkpoints listed in the README. Per the README, the RoboTwin and DOMINO launchers ship OFT variants, while the LIBERO and VLA-Arena launchers currently use PI. QA did not re-run any code.

## Connections

The closest competing approach is knowledge insulation from Driess and co-authors, a NeurIPS 2025 spotlight [S11][S12]. It trains the backbone on discrete FAST action tokens plus co-trained vision-language data, while a continuous flow-matching action expert learns alongside behind a stop-gradient, so its gradients never reach the backbone [S11]. It also reports that freezing the pretrained backbone outright fails, because VLM features alone are insufficient for control [S11]. VLAct makes the opposite bet on discrete tokens, finding FAST supervision lossy and sending continuous gradients from three heads into the upper layers, with half-freezing as a middle path [S1]. Both agree on vision-language co-training. On 2026-10-16 a search of the v2 text for the strings `insulat`, `stop-gradient` and `Driess` found only unrelated references, so VLAct does not compare against it [S1].

VLAct is built on the StarVLA codebase, which already swaps backbones and action heads independently [S15][S1]; our reading is that the gains should be judged against how strong that tooling already makes the Qwen3VL-OFT baseline. The OFT head comes from OpenVLA fine-tuning work [S13] and the GR00T head from GR00T N1 [S14].

On this blog, the [on-policy distillation post](../published/2026-10-14-on-policy-distillation-skills-not-knowledge.md) asked what a second training stage adds to a pretrained language model and what it fails to transfer. The [looped MoE post](../published/2026-10-15-looped-moe-compute-matched-scaling.md) dealt with what a matched comparison controls. Here the downstream protocol is matched, but the pre-training data and compute that only one arm receives are not.

## Open questions

- Does robot-only continued pre-training help LIBERO-Plus at all? A seeded table with no pre-training, robot-only, caption-only and the full recipe would settle it.
- How large is run-to-run variance for the 1 to 4 point ablation gaps? The released launchers make this testable [S3].
- Would knowledge insulation, trained on the same open data, match VLAct [S11]?
- Does the recipe hold beyond 4B parameters, which the authors list as their main limitation [S1]?
- Does a NeurIPS camera-ready match v2, and does the released backbone reproduce the tables when fine-tuned with the paper's heads [S3][S4]?

On 2026-10-16 we searched for critiques or replications (web search by title and arXiv ID, OpenReview, and the repository's five issues) and found none [S6].

## Sources

S1. [Beyond Data Scaling: Representation-Centric Continued Pre-training for Vision-Language-Action Models (arXiv v2)](https://arxiv.org/abs/2608.27550) · preprint · B · published 2026-08-27 · accessed 2026-10-16
S2. [Beyond Data Scaling: Representation-Centric Continued Pre-training for Vision-Language-Action Models (arXiv v1, HTML)](https://arxiv.org/html/2608.27550v1) · preprint · B · published 2026-08-27 · accessed 2026-10-16
S3. [starVLA/VLAct: official code repository and README](https://github.com/starVLA/VLAct) · code · B · published 2026-08-27 · accessed 2026-10-16
S4. [StarVLA/VLAct_Qwen3_Pretrain: model card and checkpoint](https://huggingface.co/StarVLA/VLAct_Qwen3_Pretrain) · code · B · published 2026-08-27 · accessed 2026-10-16
S5. [VLAct issue #1: Does freeze VL pretrain conducted compare with pt with 3 heads](https://github.com/starVLA/VLAct/issues/1) · social · D · published 2026-08-29 · accessed 2026-10-16
S6. [VLAct GitHub issue list](https://github.com/starVLA/VLAct/issues?q=is%3Aissue) · social · D · published 2026-10-13 · accessed 2026-10-16
S7. [RoboDojo simulation leaderboard](https://robodojo-benchmark.com/leaderboard) · dataset · B · published 2026-07-06 · accessed 2026-10-16
S8. [RoboDojo: A Unified Sim-and-Real Benchmark for Comprehensive Evaluation of Generalist Robot Manipulation Policies](https://arxiv.org/abs/2607.04434) · preprint · B · published 2026-07-05 · accessed 2026-10-16
S9. [RoboTwin 2.0: A Scalable Data Generator and Benchmark with Strong Domain Randomization for Robust Bimanual Robotic Manipulation](https://arxiv.org/abs/2506.18088) · preprint · B · published 2025-06-22 · accessed 2026-10-16
S10. [LIBERO-Plus: In-depth Robustness Analysis of Vision-Language-Action Models](https://arxiv.org/abs/2510.13626) · preprint · B · published 2025-10-15 · accessed 2026-10-16
S11. [Knowledge Insulating Vision-Language-Action Models: Train Fast, Run Fast, Generalize Better (arXiv v1)](https://arxiv.org/abs/2505.23705) · preprint · B · published 2025-05-29 · accessed 2026-10-16
S12. [Knowledge Insulating Vision-Language-Action Models: Train Fast, Run Fast, Generalize Better (NeurIPS 2025 spotlight poster)](https://neurips.cc/virtual/2025/poster/117079) · peer-reviewed · A · published 2025-12-02 · accessed 2026-10-16
S13. [Fine-Tuning Vision-Language-Action Models: Optimizing Speed and Success](https://arxiv.org/abs/2502.19645) · preprint · B · published 2025-02-27 · accessed 2026-10-16
S14. [GR00T N1: An Open Foundation Model for Generalist Humanoid Robots](https://arxiv.org/abs/2503.14734) · preprint · B · published 2025-03-18 · accessed 2026-10-16
S15. [StarVLA: A Lego-like Codebase for Vision-Language-Action Model Developing](https://arxiv.org/abs/2604.05014) · preprint · B · published 2026-04-06 · accessed 2026-10-16

## QA notes

[^qa-1]: **Verified** — Sections 3.1 and 3.2, Section 4 (Qwen3-VL-4B) and Appendix C of [S1]: the vision encoder and lower half of the language model are frozen, OFT, PI and GR00T heads are co-trained, and the pre-training heads and caption stream are discarded before fine-tuning.
[^qa-2]: **Verified** — Table 1 (82.6 vs 75.0) and Table 2, Base Clean (80.5 vs 61.7) of [S1] v2. Section 1 states that the head, its initialization, data, optimizer and budget are identical. QA searched the v2 text for seed, standard deviation, variance, confidence and ± and found no seeds or intervals.
[^qa-3]: **Verified** — Tables 6 and 8 to 12 and Figure 8 of [S1] each vary one component, and most steps are worth 1 to 5 points (see qa-13).
[^qa-4]: **Contradicted** — corrected by QA; see the CAUTION callout under the TL;DR. Figure 8 of [S1] plots robot-only continued pre-training ("+ Pretrain") at 79.6, not 75.0. The 75.0 bar is the no-continued-pre-training baseline. Single run.
[^qa-5]: **Verified** — Section 4 of [S1] says "All experiments are conducted on 16 GPUs", and the v2 text gives no GPU type or hours for pre-training. The [S4] card lists 100,000 steps and 16 GPUs, while the [S3] README says the artifact card records 4 nodes × 8 GPUs.
[^qa-6]: **Supported with caveat** — the [S3] Model Zoo lists the backbone plus five downstream checkpoints (RoboDojo, RoboTwin 2.0, DOMINO, VLA-Arena, LIBERO-Plus). Three of the five use a different head from the paper's reported configuration: GR00T for RoboTwin, and PI for LIBERO-Plus and VLA-Arena, where the tables report OFT. The DOMINO and RoboDojo checkpoints are OFT, matching the paper. The [S4] `training_config.original.yaml` records `loss_scale.vlm: 0.2`, against 0.5 in Appendix D.1 of [S1].
[^qa-7]: **Supported with caveat** — the leaderboard's news log, read from the site's JavaScript bundle on 2026-10-16, dates "Add VLAct to the sim leaderboard" to 2026/07/31 [S7]. The repository README dates the same entry to 2026.08 [S3].
[^qa-8]: **Verified** — Section 3.3 (sum of the three head losses), Appendix D.1 (caption cross-entropy weighted 0.5, and every minibatch contains robot and auxiliary samples), Appendix F (a wrap loss added to each head's objective) and Sections 3.1 and 3.2 (full unfreezing downstream) of [S1]. The combined equation is the post's own notation and is consistent with these parts.
[^qa-9]: **Supported with caveat** — Table 8 of [S1] gives 60.5 (no pre-training), 55.1 (OFT), 63.1 (OFT + GR00T) and 77.0 (all three heads), each from a single run. The table does not name its benchmark, but the repository README labels the same numbers "PI as the downstream head (RoboTwin 2.0)" [S3], which supports the post's reading.
[^qa-10]: **Verified** — Section 4, Section 4.3 (50k steps on 8 H800 GPUs per real-robot model) and Appendix H of [S1], which give no per-dataset trajectory counts. The [S4] card lists 100,000 steps, a per-GPU VLA batch of 16, AdamW with 5K warmup and seed 42, and its config sets `gradient_accumulation_steps: 1`. That makes 16 × 16 × 100,000 = 25.6 million robot samples, assuming 16 GPUs.
[^qa-11]: **Verified** — Tables 1 and 2, Table 4 (VLA-Arena, 54.8 vs 33.4) and Table 5 (DOMINO, 18.50 vs 10.86) of [S1]. Together with RoboCasa-GR1 (54.0 vs 48.8, Section 4.4), the matched gains run from 2.5 to 21.4 points, the range given in the dek.
[^qa-12]: **Verified** — QA repeated the absence search in the v2 text. The Table 2 caption gives "50 tasks with 100 episodes per task", and QA's binomial standard error for an 80% rate over 5,000 episodes is 0.57 points.
[^qa-13]: **Verified** — Table 6 (78.9 and 77.1 vs 82.6 and 80.5), Table 12 (separate heads: 78.5 on RoboTwin, 81.1 on LIBERO-Plus), Table 10 (75.5, 78.6, 80.5), Table 9 (+1.7, +1.6, +4.3) and Table 11 (82.6 to 83.7) of [S1]. All are single runs.
[^qa-14]: **Contradicted** — corrected by QA; see the CAUTION callout. The statements that every auxiliary source beats robot-only training and that the mixed setting gives 82.5 are verified against Appendix D.3 and Figure 8 of [S1]. The robot-only value is 79.6, not 75.0.
[^qa-15]: **Verified** — Table 3 and Section 4.4 of [S1] give 10.66 / 7.60%, eighth of 35 by score and sixth by success, in the August 24 snapshot. QA parsed the live leaderboard data on 2026-10-16: 58 simulation entries, with VLAct at 10.65 / 7.58%, 27th by score and 24th by success, counting agent-track and general-model entries [S7].
[^qa-16]: **Verified** — Section 4.3 and Appendix J of [S1]: Franka Research 3 arms, two models, and 10 fixed, shared initial configurations per task. Short-horizon and dual-arm tasks are scored 1 or 0, with four single-arm short-horizon tasks and five dual-arm tasks. So 92.5% and 77.5% are 37 and 31 of 40, and 72% and 44% are 36 and 22 of 50. QA recomputed two-sided Fisher exact p = 0.115 and 0.008.
[^qa-17]: **Verified** — QA found no all-off row. Appendix D.3 of [S1] says the robot data, backbone, training recipe and budget are held fixed across Figure 8's bars. So its "+ Pretrain" bar (79.6) is robot-only training under the VLAct recipe, not a naive continued-pre-training baseline.
[^qa-18]: **Contradicted** — QA corrected the first sentence; see the CAUTION callout. The rest of the paragraph is the author's hedged reading of the prose. Figure 8 of [S1] supports the second possibility, not the first.
[^qa-19]: **Verified** — the phrase "7.6–21.4 point gains" appears verbatim in Section 1 of [S1]. Section 4.3 says "pre-trained only on single-arm data", while Section 4.4 and Appendix H list AgileX bimanual data. The abstract says "All models and training pipelines are open-sourced", while Section 4 says "We will release the training scripts and model checkpoints". Section 1 and Table 4 cite GR00T-N1.6 to reference [11], the GR00T N1 report [S14].
[^qa-20]: **Verified** — the [S3] README (MIT license, Model Zoo, head-mismatch note, paper-versus-artifact note); the [S4] card and `training_config.original.yaml` (Apache-2.0, 0.2, 8.0 and 1.0, 16 GPUs); [S6] issues #4 (DROID source) and #5 (InternData-A1 and RoboCOIN subsets), opened 2026-09-14 and 2026-10-13.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
