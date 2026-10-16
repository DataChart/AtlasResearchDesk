---
title: 'Kandinsky 6.0 Video: open dual-stream diffusion for joint audio and video, and what its evaluation supports'
slug: 2026-10-15-kandinsky-6-joint-audio-video-generation
dek: The Kandinsky team released 3B and 29B diffusion models that generate five-second clips with synchronized audio through bidirectional cross-attention between asymmetric streams; lip-sync gains are measured, but speech intelligibility and rater details remain unsettled.
date: 2026-10-15 23:49:55-06:00
type: research
status: published
cycle: 3
tags:
- multimodal
- generation
- diffusion
- evaluation
reading_time_min: 13
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-10-16 04:22:15-06:00
  sources_by_grade:
    A: 2
    B: 11
    C: 0
    D: 0
  claims:
    verified: 47
    caveat: 4
    unverified: 0
    contradicted: 0
    outdated: 0
  flags:
    note: 1
    important: 0
    warning: 0
    caution: 3
    tip: 1
sources:
- id: S1
  title: 'Kandinsky 6.0 Video: Foundation Models for Synchronized Video and Audio Generation'
  url: https://arxiv.org/abs/2610.05608
  type: preprint
  grade: B
  published: 2026-10-04
  accessed: 2026-10-16
- id: S2
  title: kandinskylab/kandinsky-6 (GitHub repository)
  url: https://github.com/kandinskylab/kandinsky-6
  type: code
  grade: B
  published: 2026-10-06
  accessed: 2026-10-16
- id: S3
  title: Kandinsky-6.0-Pro-5s-Diffusers (Hugging Face model card)
  url: https://huggingface.co/kandinskylab/Kandinsky-6.0-Pro-5s-Diffusers
  type: code
  grade: B
  published: 2026-10-04
  accessed: 2026-10-16
- id: S4
  title: kandinskylab Kandinsky-6.0 models (Hugging Face Hub model listing)
  url: https://huggingface.co/models?author=kandinskylab&search=Kandinsky-6.0
  type: code
  grade: B
  published: 2026-10-12
  accessed: 2026-10-16
- id: S5
  title: 'VABench: A Comprehensive Benchmark for Audio-Video Generation (CVPR 2026)'
  url: https://openaccess.thecvf.com/content/CVPR2026/html/Hua_VABench_A_Comprehensive_Benchmark_for_Audio-Video_Generation_CVPR_2026_paper.html
  type: peer-reviewed
  grade: A
  published: 2026-05-16
  accessed: 2026-10-16
- id: S6
  title: 'LTX-2: Efficient Joint Audio-Visual Foundation Model'
  url: https://arxiv.org/abs/2601.03233
  type: preprint
  grade: B
  published: 2026-01-06
  accessed: 2026-10-16
- id: S7
  title: 'Ovi: Twin Backbone Cross-Modal Fusion for Audio-Video Generation'
  url: https://arxiv.org/abs/2510.01284
  type: preprint
  grade: B
  published: 2025-09-30
  accessed: 2026-10-16
- id: S8
  title: 'OmniNFT: Modality-wise Omni Diffusion Reinforcement for Joint Audio-Video Generation'
  url: https://arxiv.org/abs/2605.12480
  type: preprint
  grade: B
  published: 2026-05-12
  accessed: 2026-10-16
- id: S9
  title: 'MMAudio: Taming Multimodal Joint Training for High-Quality Video-to-Audio Synthesis (CVPR 2025)'
  url: https://openaccess.thecvf.com/content/CVPR2025/html/Cheng_MMAudio_Taming_Multimodal_Joint_Training_for_High-Quality_Video-to-Audio_Synthesis_CVPR_2025_paper.html
  type: peer-reviewed
  grade: A
  published: 2025-06-02
  accessed: 2026-10-16
- id: S10
  title: 'Kandinsky 5.0: A Family of Foundation Models for Image and Video Generation'
  url: https://arxiv.org/abs/2511.14993
  type: preprint
  grade: B
  published: 2026-05-26
  accessed: 2026-10-16
- id: S11
  title: 'Prism: Dynamic Sparse Attention for Native 2K Joint Video-Audio Generation Model Training'
  url: https://arxiv.org/abs/2610.05416
  type: preprint
  grade: B
  published: 2026-10-04
  accessed: 2026-10-16
- id: S12
  title: FrancisRing/Prism (Hugging Face model card)
  url: https://huggingface.co/FrancisRing/Prism
  type: code
  grade: B
  published: 2026-10-04
  accessed: 2026-10-16
- id: S13
  title: Text to Video Leaderboard (With Audio), Artificial Analysis
  url: https://artificialanalysis.ai/video/leaderboard/text-to-video
  type: dataset
  grade: B
  published: 2026-10-15
  accessed: 2026-10-16
revision_notes:
- date: 2026-10-16
  summary: 'Checkpoint count and gating (CAUTION, qa-6, qa-7): re-checked the Pro card and Hub listing on 2026-10-16, kept QA''s corrected text, and repointed S4 to the full Hub model listing, which shows all eight repositories (the organization front page shows six). Speech-quality rubric (CAUTION, qa-17): kept QA''s corrected sentence and added two sentences reconciling the critique with it, since raters asked to weigh intelligibility preferred Pro while the outside ASR model favors LTX 2.5. Reproducibility and 30B figure (CAUTION, qa-22, qa-24): kept QA''s corrections, added the exact Hub API count and a labelled calculation showing the 30.1B files fit the report''s rounded 19B/5B/5B split. Caveats: TL;DR now says WER was scored separately on the VABench speech subset (qa-3); MMAudio described as 157M in its smallest configuration (qa-8); Artificial Analysis described as a third-party leaderboard with vetted evaluators, not a public arena (qa-9); the eleventh human-study question is noted
    as image-conditioned only (qa-11); the Kling 2.6 comparison is added (qa-12); the Harvard-sentence recognizer is stated as unnamed in the report (qa-18); the upscaling time is noted as including encoding (qa-15). Also corrected the Prism card description (two preview checkpoints plus code), removed the leaderboard-placement speculation and two training-step details for length, and re-opened all 13 sources on 2026-10-16.'
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 13 (A 2 · B 11 · C 0 · D 0)
> · Claims checked: 51 (verified 47 · caveat 4 · unverified 0 · contradicted 0)
> · Checked 2026-10-16 04:22 MDT by the QA agent

## TL;DR

- Kandinsky 6.0 Video is an open pair of flow-matching diffusion models, Lite (3B) and Pro (29B), that generate a short video clip and its audio together, with MIT-licensed weights and inference code [S1][S2].[^qa-1]
- A video stream initialized from Kandinsky 5.0 and an audio stream trained from scratch exchange information through bidirectional cross-attention in every block; in Pro those layers hold 5B parameters [S1].[^qa-2]
- On VABench, Pro beats the open LTX 2.5 on lip-sync and audio-video desynchronization; on the benchmark's speech subset, scored separately, it has the highest word error rate (WER) of the three systems compared, at mismatched resolutions [S1].[^qa-3]
- Reinforcement learning cuts Pro's WER by 47%, as measured by an automatic speech recognition (ASR) model that is also a reward model [S1].[^qa-4]
- The human side-by-side study reports about 200 comparisons per criterion, with no rater count and no intervals; we found no independent replication or arena entry [S1][S13].[^qa-5]

## Why now

The Kandinsky team posted the Kandinsky 6.0 Video report to arXiv on 2026-10-04; v1 is the only version [S1]. On 2026-10-06 the GitHub repository announced the open-source release and integrations in Diffusers and ComfyUI [S2]. Hugging Face lists eight checkpoints: pre-trained, distilled and non-distilled Lite and Pro, plus two super-resolution models [S3][S4].[^qa-6] The weights are MIT-licensed; only the non-distilled Pro repository is gated behind a contact-sharing form [S3][S4].[^qa-7]

> [!CAUTION]
> **QA · Corrected.** Two sentences in this paragraph originally read: "Hugging Face lists six checkpoints: distilled and non-distilled Lite and Pro, plus two super-resolution models [S4]." and "The weights are MIT-licensed but gated behind a contact-sharing form [S3]." The Pro model card [S3] names eight checkpoints, including pre-trained Lite and Pro, and all eight are public on the Hub [S4]. On 2026-10-16 the Hub showed only the non-distilled Pro repository as gated.

On 2026-10-04, the same day as the report, a Fudan University, Tencent Hunyuan and Zhejiang University team posted Prism, a sparse-attention method for training such models at native 2K, with a preview checkpoint [S11][S12]. LTX-2 (2026-01-06) and Ovi (2025-09-30) had already made dual-stream audio-video diffusion an open design [S6][S7]. Kandinsky 6.0 adds a 29B open model, a full post-training stack and a detailed report.

## Background

A cascade generates the video first and then runs a video-to-audio model. MMAudio (CVPR 2025) is a strong example: a flow-matching model, 157M parameters in its smallest configuration (larger ones have 621M and 1.03B), trained jointly on audio-visual and text-audio data, with a module that aligns video features and audio latents frame by frame [S9].[^qa-8] In a cascade the video cannot react to the audio, which matters most for speech, where lips must follow phonemes the video model never sees.

Joint generation denoises both modalities in one model, usually with dual-stream transformers. Ovi fuses two architecturally identical towers block by block with bidirectional cross-attention and scaled rotary position embeddings (RoPE) that share timing [S7]. LTX-2 makes the streams asymmetric (14B video, 5B audio), again joined by bidirectional cross-attention [S6]. Kandinsky 6.0 follows the asymmetric template. Its predecessor, Kandinsky 5.0, was video-only: a 2B Video Lite and a 19B Video Pro model for clips of up to 10 seconds (report v3, 2026-05-26) [S10].[^qa-26]

VABench (CVPR 2026) has 778 text-to-audio-video and 521 image-to-audio-video samples and 15 dimensions. Some are computed by specialist models (Synchformer for desynchronization, NISQAv2 for speech quality, a LatentSync-style confidence for lip-sync) and some are judged by a multimodal LLM on a 1–5 scale (alignment, expressiveness, realism) [S5]. Beyond such benchmarks, evaluation relies on pairwise human preference, run by authors or by third-party leaderboards such as Artificial Analysis, which converts blind pairwise votes from its own vetted evaluators into Elo ratings with 95% intervals [S13].[^qa-9]

## The core idea

**Problem statement.** Let $x_v$ be the video latent from a pretrained video autoencoder (the report uses the Hunyuan variational autoencoder), $x_a$ the audio latent from the MMAudio autoencoder at 44 kHz, and $c$ the text conditioning from Qwen2.5-VL-7B-Instruct and CLIP ViT-L/14 [S1]. The goal is to learn $p(x_v, x_a \mid c)$, optionally also conditioned on a first frame, so that samples are good in each modality and synchronized across them. Training uses flow matching with a mean-squared-error loss, and the diffusion time is sampled independently for video and audio [S1]. We write it in rectified-flow form; the interpolation convention is our assumption:

$$
x_m^{t_m} = (1-t_m)\,x_m + t_m\,\epsilon_m,\qquad t_v,\,t_a \stackrel{\text{iid}}{\sim} p(t),\quad m\in\{v,a\}
$$

$$
\mathcal{L}(\theta)=\mathbb{E}\Big[\lambda_v\big\|u^{v}_\theta - (\epsilon_v - x_v)\big\|^2 + \lambda_a\big\|u^{a}_\theta - (\epsilon_a - x_a)\big\|^2\Big],
$$

where both velocity heads $u^{v}_\theta, u^{a}_\theta$ see $(x_v^{t_v}, x_a^{t_a}, t_v, t_a, c)$. The report states modality weights only for the second fine-tuning stage (0.85 video, 0.15 audio, plus a face loss) [S1]. In our reading, independent times matter because they show the network pairs in which one modality is much cleaner than the other, which is what conditional behavior such as fitting lips to nearly finished speech requires.

**Mechanism.** Each paired block contains self-attention, text cross-attention, cross-modal attention and a feed-forward layer. In what the report calls V2A attention, video tokens supply queries and audio tokens supply keys and values; A2V reverses the roles, and timestep embeddings modulate every sub-layer through scale, shift and gate parameters [S1]. In the cross-modal layers, video uses 3D RoPE and audio 1D RoPE, and video frame indices are rescaled by $\text{fps}/24$, so clips recorded at 23–25 frames per second share one 24-frame clock [S1]. Our reading is that this plays the role of Ovi's scaled RoPE, giving cross-attention a shared clock across modalities [S7].

The streams share depth but not width: 60 blocks each in Pro (widths 4096 video, 2048 audio) and 32 in Lite (1792 and 896) [S1]. Pro's 29B parameters split into 19B video, 5B audio and 5B cross-attention; Lite's 3B split into 2B, 0.6B and 0.4B [S1]. Our calculation: fusion layers are about 17% of Pro's parameters and 13% of Lite's.

**Training recipe.** The video stream starts from a Kandinsky 5.0 Video checkpoint. The audio stream is randomly initialized and pre-trained on about 40 million audio tracks [S1]. Joint training uses 7 million audio-video segments, filtered to keep face clips with a lip-sync score of at least 3 out of 5 and desynchronization below 0.1 [S1]. Supervised fine-tuning trains one model per domain for 11 domains, first with the audio and fusion modules frozen, then with all modules, and averages the 11 checkpoints uniformly into a "soup" [S1].

Reinforcement learning adapts OmniNFT, a method developed on LTX-2. OmniNFT routes each reward's advantage to the modality it scores, blocks video gradients from shallow audio layers, and upweights loss in regions critical for synchronization [S8]. Kandinsky uses eight reward terms in three branches (video, audio, synchronization) and Group Relative Policy Optimization (GRPO) with 10 rollouts per prompt for Pro, training a 199M-parameter low-rank adapter (LoRA) on the frozen fine-tuned model [S1]. Two-stage distillation (π-Flow, then adversarial refinement) brings sampling to 10 function evaluations, and a separate super-resolution stage built on a 1.41B-parameter transformer upscales the output to Full HD [S1].

## Evidence

**Automatic metrics (VABench).** The report evaluates Pro and Lite after reinforcement learning, both at 512×768, against LTX 2.5 in its two-stage Full HD configuration [S1]. Pro has the best value on lip-sync (2.072 vs 1.567 for LTX 2.5), desynchronization (0.396 vs 0.521, lower is better), speech quality (1.496 vs 1.427) and visual realism (4.485 vs 4.366) [S1]. LTX 2.5 leads on the LLM-judged alignment (4.527 vs 4.329) and expressiveness (4.360 vs 4.312) scores [S1]. The report computes WER separately on the speech subset with Qwen3-ASR-1.7B: LTX 2.5 0.099, Lite 0.103, Pro 0.117 [S1].[^qa-10]

> [!NOTE]
> **QA · Context.** Table 11 in [S1] compares Pro with only two other systems. VABench's own text-to-audio-video table [S5] reports lip-sync of 3.294 for Veo3-fast and 3.671 for Wan2.5 Preview, and speech quality of 3.073 for Veo3-fast, from the benchmark authors' runs at 720p. The runs and settings differ, so these numbers are not a like-for-like comparison with Pro's 2.072 and 1.496. They do show that "best value" here means best of three.

**Human side-by-side.** Raters compare anonymized, randomized pairs on up to 11 questions (one applies only to image-conditioned comparisons), judging visuals with sound off before the audio questions, with "approximately 200 or more" pairwise comparisons per criterion aggregated by majority vote [S1].[^qa-11] The prose reports directions only; win, tie and loss shares appear as stacked bars in Figures 15–22 [S1]. Pro is preferred over Kandinsky 5.0 Pro on nearly all visual criteria, and over LTX 2.5 on visual criteria and, by a margin the report calls significant, on speech quality [S1]. It beats Seedance 2.0 on speech quality but loses on visuals; Veo 3.1 Fast leads in text-to-audio-video on prompt following, speech quality and synchronization, and MiniMax H3 is preferred on most criteria [S1].[^qa-12] Against Kling 2.6, speech quality is near parity, while Kling leads on visual quality, audio quality and synchronization [S1].[^qa-27]

**Reinforcement learning.** On a held-out speech set of 64 prompts with 3 seeds each, Pro's WER falls from 0.235 after fine-tuning to 0.124 after reinforcement learning (a 47% relative reduction, p < 0.001). Lite's falls from 0.179 to 0.127 [S1]. On 100 public Harvard sentences, Pro falls from 0.251 to 0.180 [S1]. The 64-prompt WERs are computed with Whisper-large-v3, which the report notes is also one of the reward models; it does not name the recognizer for the Harvard check [S1].[^qa-13]

**Distillation.** Comparing distilled and full Pro for image-to-audio-video, mean preference is 51% vs 49% for the distilled model, with no criterion significant at the 0.95 or 0.975 level [S1].[^qa-14]

**Speed.** With the full, non-distilled base model, a five-second standard-definition clip takes 239 s for Lite and 356 s for Pro on one H100. On an RTX 4090 the same clips take 437 s and 936 s [S1]. Timings exclude weight loading and encoding; Pro rows use MagCache, which evaluates 49 of 100 forward passes [S1]. Table 10 does not time the 10-step distilled models. Upscaling an 864×480 clip to 1920×1080 with the distilled two-step super-resolution model takes 39.6 s on an H100, including autoencoder encoding [S1].[^qa-15]

## Critical assessment

**The speech claim and the intelligibility numbers diverge.** The report presents Pro as competitive with leading audio-video models, especially on speech quality [S1]. Its own evidence qualifies this. On the VABench speech subset, the ASR model outside the reward (Qwen3-ASR-1.7B) gives Pro the highest WER of the three systems: 0.117, against 0.103 for Lite and 0.099 for LTX 2.5 [S1]. In the side-by-side study, Veo 3.1 Fast leads Pro on speech quality in text-to-audio-video, the one criterion in that set where its lead is not significant [S1].[^qa-16] Our reading is that "speech quality" here mixes perceived naturalness (NISQAv2) with rater judgments whose rubric covers intelligibility, naturalness and articulation together, and the summary claims do not separate the two.[^qa-17] That sharpens the divergence rather than resolving it: raters asked to weigh intelligibility preferred Pro over LTX 2.5, while the outside ASR model transcribes LTX 2.5 more accurately [S1]. Because one vote folds three properties together, the study cannot show which of them drove the preference.[^qa-28] The Whisper-measured 0.124 and the Qwen3-ASR 0.117 come from different ASR models and prompt sets, so they cannot be compared directly [S1].

> [!CAUTION]
> **QA · Corrected.** The sentence beginning "Our reading is that" originally read: "Our reading is that "speech quality" here means perceived naturalness (NISQAv2 and rater judgments), not intelligibility, and the summary claims do not separate the two." Section 7.2.2 of [S1] asks raters to judge intelligibility as part of speech quality, so the rater judgments are not naturalness-only. The divergence this paragraph describes still stands: raters preferred Pro over LTX 2.5 on speech quality, while the ASR model outside the reward gives LTX 2.5 the lower WER [S1].

**Reward and metric share a model.** The 47% WER reduction is measured with Whisper-large-v3, which is also in the reward [S1]. A policy optimized against one recognizer can become easier for it to transcribe without becoming clearer to people. The report discloses the overlap but gives no pre-reinforcement-learning WER under Qwen3-ASR, so the gain cannot be checked outside the reward. The Harvard-sentence check uses different prompts; the report does not name its recognizer, though the sentence introducing it follows directly from the Whisper result, so we assume Whisper again [S1].[^qa-18]

**The VABench comparison is not matched.** Kandinsky runs at 512×768 and LTX 2.5 in its two-stage Full HD configuration [S1]. One possibility is that resolution shifts face size, and with it the lip-sync and realism scores, in either direction. Section 7.1 and Table 11 give no prompt count, seeds or intervals, and some margins are small: visual realism is 4.485 for Pro and 4.459 for Lite on a 1–5 scale [S1].[^qa-19] VABench validated its scores against human preference with six professional evaluators rating three systems [S5]. In our reading, a correlation over three systems cannot show that LLM-judged scales resolve differences of hundredths of a point.

**The human study is under-specified.** We searched the full v1 HTML text, including Section 7.2.1 on methodology, on 2026-10-15. The report gives no rater count, rater qualifications, prompt set, named significance test or confidence intervals; it says "approximately 200 or more" comparisons per criterion and aggregates by majority vote [S1].[^qa-20] Our calculation: with 200 binary comparisons and a true preference of 50%, a 95% normal-approximation interval is about ±6.9 percentage points, and ties shrink the effective sample further. So the 51%/49% distillation result supports "no detectable difference at this sample size", not equivalence. With shares shown only as bars, no comparison can be recomputed.

**Compute is not reported for the main model.** In the v1 full text (searched 2026-10-15), the only training GPU counts are for super-resolution: 8 H100s for the transformer and 4 GPUs for the latent upscalers [S1].[^qa-21] With no GPU counts or hours for pre-training, fine-tuning or reinforcement learning, a compute-matched comparison with LTX-2 or Ovi is not possible.

**Reproducibility status.** Weights for eight checkpoints are released under MIT, with only the non-distilled Pro repository behind a contact-sharing gate, and inference code is public [S2][S3][S4].[^qa-22] As of 2026-10-16 the repository README covers setup, download and generation, and does not mention training code, training data, evaluation prompts or side-by-side records [S2].[^qa-23] The Hub metadata lists the Pro repository at 30B parameters against 29B in the card text and report [S3]; the Hub figure is the exact parameter count of the repository's transformer weights (about 30.1B), so the gap is not a rounding artifact of the Hub.[^qa-24] The Hub's API for the same repository gives 30,136,326,248 parameters [S3]. Our calculation: if the report's 19B, 5B and 5B components are each rounded to the nearest billion, their exact sum could lie anywhere from 27.5B to 30.5B, so the released files fit the component split even though the 29B headline understates them; the report does not say how it counted.[^qa-29]

> [!CAUTION]
> **QA · Corrected.** Two sentences in this paragraph originally read: "Weights for six checkpoints are released under MIT behind a contact-sharing gate, and inference code is public [S2][S3][S4]." and, after the [S3] citation, "we read this as rounding in the Hub's automatic count." The Pro card [S3] and the Hub [S4] show eight checkpoints, of which only the non-distilled Pro was gated on 2026-10-16. The Hub's parameter figure for [S3] is computed from the transformer weight files (30,136,326,248 parameters), which the page displays as 30B.

> [!TIP]
> **QA · Reproducible (inference only).** Lite, both distilled models, both pre-trained checkpoints and both super-resolution models download from the kandinskylab Hub organization without the contact form [S4]; the non-distilled Pro requires it [S3]. The README's quick start downloads the distilled Pro (`just download pro-distill`) [S2]. The README does not mention training code, training data or evaluation prompts [S2].

**Independent evidence.** Web searches on 2026-10-15 and 2026-10-16 for "Kandinsky 6.0" with leaderboard, replication and benchmark terms found only comparison blogs restating the report, and no independent replication. As loaded on 2026-10-15 (28 visible rows), the Artificial Analysis text-to-video leaderboard with audio had no Kandinsky entry, and it still had none on 2026-10-16 [S13].[^qa-25] For scale, that board rates MiniMax H3 (768p) at 1159 Elo, Dreamina Seedance 2.0 at 1136, Veo 3.1 Fast at 965 and LTX-2.5 Fast at 950 [S13]. Where Pro would land is speculation until it has an entry.

## Connections

**Cascades.** MMAudio, whose autoencoder Kandinsky 6.0 reuses for its audio latents, is the cascade alternative: models from 157M parameters that generate audio for a finished video [S9][S1]. A cascade cannot move lips to match speech it has not generated yet. No experiment in the report pairs its video model with a cascaded audio model, so that advantage is unmeasured here; its clearest gains over another joint model are on lip-sync and desynchronization [S1].

**Other dual-stream designs.** Ovi uses two identical towers with bidirectional cross-attention and scaled RoPE [S7]. LTX-2 uses asymmetric streams (14B video, 5B audio), bidirectional cross-attention and cross-modality timestep conditioning, and released weights and code [S6]. Kandinsky's design is closest to LTX-2's, but it gives the cross-modal layers a budget equal to its whole audio stream (5B in Pro) [S1]. Its reinforcement learning stage is a direct reuse of OmniNFT, which was built on LTX-2 [S8][S1].[^qa-30] The three reports differ in data, compute and evaluation, so their numbers are not comparable.

**A different bet on resolution.** Prism, posted the same day, attacks the cost of native high-resolution training instead of upscaling afterwards [S11]. It replaces the video self-attention of the MOVA diffusion transformer with dynamic block-sparse attention: tokens are grouped into spatiotemporal "macro-zones", each given a block shape chosen from local video variance and audio-to-video attention norms [S11]. Its Table 5 reports 10.6 minutes per training step against 26.5 for full attention at native 2K, about 2.5×, with training on 100k clips for 5 epochs on 160 H800 GPUs [S11]. On the authors' own 300-clip 2K benchmark Prism also scores above full attention [S11]. Its model card lists two preview checkpoints and says training and inference code are released [S12]. The two approaches differ in base model, data, resolution and benchmark, and no study compares Kandinsky's route (standard-definition base plus super-resolution) with Prism's (sparse attention at native 2K) directly.

**Earlier posts on this blog.** The [physics re-grading audit](../published/2026-10-15-physics-benchmark-expert-regrading.md) showed how far a measured score can move when the grader changes, a question VABench's LLM-judged scales also raise. The [reward-hacking probe study](../published/2026-10-13-reward-hacking-activation-probes.md) relied on an LLM as ground truth; when the measuring model is also the optimization target, as Whisper is here, the measurement needs an outside check.

## Open questions

- Does the reinforcement-learning WER gain survive under an ASR model outside the reward, such as Qwen3-ASR on the same 64 prompts, or under human transcription of a sample?
- How much of the lip-sync and desynchronization gain comes from the large cross-modal budget, and how much from the lip-sync and desynchronization filters on the 7 million training segments [S1]?
- Where does Pro land on a blind third-party leaderboard with confidence intervals, and does its speech advantage over LTX 2.5 hold there [S13]?
- Will training code, evaluation prompts and side-by-side records be released so the human study can be recomputed?
- The report lists five-second clips and standard-definition base generation as limitations [S1]; whether native-resolution training such as Prism's scales to 29B models is untested [S11].

## Sources

S1. [Kandinsky 6.0 Video: Foundation Models for Synchronized Video and Audio Generation](https://arxiv.org/abs/2610.05608) · preprint · B · published 2026-10-04 · accessed 2026-10-16
S2. [kandinskylab/kandinsky-6 (GitHub repository)](https://github.com/kandinskylab/kandinsky-6) · code · B · published 2026-10-06 · accessed 2026-10-16
S3. [Kandinsky-6.0-Pro-5s-Diffusers (Hugging Face model card)](https://huggingface.co/kandinskylab/Kandinsky-6.0-Pro-5s-Diffusers) · code · B · published 2026-10-04 · accessed 2026-10-16
S4. [kandinskylab Kandinsky-6.0 models (Hugging Face Hub model listing)](https://huggingface.co/models?author=kandinskylab&search=Kandinsky-6.0) · code · B · published 2026-10-12 · accessed 2026-10-16
S5. [VABench: A Comprehensive Benchmark for Audio-Video Generation (CVPR 2026)](https://openaccess.thecvf.com/content/CVPR2026/html/Hua_VABench_A_Comprehensive_Benchmark_for_Audio-Video_Generation_CVPR_2026_paper.html) · peer-reviewed · A · published 2026-05-16 · accessed 2026-10-16
S6. [LTX-2: Efficient Joint Audio-Visual Foundation Model](https://arxiv.org/abs/2601.03233) · preprint · B · published 2026-01-06 · accessed 2026-10-16
S7. [Ovi: Twin Backbone Cross-Modal Fusion for Audio-Video Generation](https://arxiv.org/abs/2510.01284) · preprint · B · published 2025-09-30 · accessed 2026-10-16
S8. [OmniNFT: Modality-wise Omni Diffusion Reinforcement for Joint Audio-Video Generation](https://arxiv.org/abs/2605.12480) · preprint · B · published 2026-05-12 · accessed 2026-10-16
S9. [MMAudio: Taming Multimodal Joint Training for High-Quality Video-to-Audio Synthesis (CVPR 2025)](https://openaccess.thecvf.com/content/CVPR2025/html/Cheng_MMAudio_Taming_Multimodal_Joint_Training_for_High-Quality_Video-to-Audio_Synthesis_CVPR_2025_paper.html) · peer-reviewed · A · published 2025-06-02 · accessed 2026-10-16
S10. [Kandinsky 5.0: A Family of Foundation Models for Image and Video Generation](https://arxiv.org/abs/2511.14993) · preprint · B · published 2026-05-26 · accessed 2026-10-16
S11. [Prism: Dynamic Sparse Attention for Native 2K Joint Video-Audio Generation Model Training](https://arxiv.org/abs/2610.05416) · preprint · B · published 2026-10-04 · accessed 2026-10-16
S12. [FrancisRing/Prism (Hugging Face model card)](https://huggingface.co/FrancisRing/Prism) · code · B · published 2026-10-04 · accessed 2026-10-16
S13. [Text to Video Leaderboard (With Audio), Artificial Analysis](https://artificialanalysis.ai/video/leaderboard/text-to-video) · dataset · B · published 2026-10-15 · accessed 2026-10-16

## QA notes

[^qa-1]: **Verified** — The abstract and §3.1 of [S1] describe Lite (3B) and Pro (29B), trained with flow matching, generating 5-second clips with 44 kHz audio. The [S2] repository carries an MIT license, and its README gives setup, download and generation commands. On the Hub's 30B figure, see the reproducibility notes below.
[^qa-2]: **Verified** — §3.2 and §4.2 of [S1]: the video stream is initialized from the Kandinsky 5.0 Video pre-training checkpoint, the audio stream from random weights, and the two are joined by blockwise bidirectional cross-attention. In Pro the cross-attention layers hold 5B of 29B parameters.
[^qa-3]: **Supported with caveat** — All values match Table 11 of [S1]: lip-sync 2.072 vs 1.567, desync 0.396 vs 0.521, WER 0.117 for Pro vs 0.103 (Lite) and 0.099 (LTX 2.5). Kandinsky ran at 512×768 and LTX 2.5 in its two-stage Full HD configuration. §7.1 notes that WER is not part of VABench; it was computed separately on the benchmark's speech subset with Qwen3-ASR-1.7B. The table comes from a single reported run, with no prompt count, seeds or intervals.
[^qa-4]: **Verified** — §4.4 of [S1]: Pro's WER fell from 0.235 to 0.124 (−47%, paired Wilcoxon test, p < 10⁻³), measured with Whisper-large-v3, which the report names as one of the reward models.
[^qa-5]: **Verified** — §7.2.1 of [S1] gives "approximately 200 or more" comparisons per criterion with majority-vote aggregation. QA searched the full v1 text again on 2026-10-16 and found no rater count, named test or intervals. QA's own web searches the same day found only release coverage, model-directory pages and vendor comparison blogs, and [S13] had no Kandinsky entry.
[^qa-6]: **Verified** — This sentence was corrected in QA's first pass (see the callout below it). On 2026-10-16 the Pro model card [S3] named eight checkpoints: non-distilled, distilled and "pretrain" versions of Lite and Pro, plus two super-resolution models. The Hub listing [S4] showed the same eight repositories.
[^qa-7]: **Verified** — This sentence was corrected in QA's first pass. On 2026-10-16 the Hub reported only the non-distilled Pro repository [S3] as gated, behind a contact-sharing agreement, and all eight repositories as MIT-licensed. The Lite and distilled-Pro files downloaded without signing in, while the non-distilled Pro files returned an authorization error [S4].
[^qa-8]: **Verified** — The [S9] abstract describes flow-matching training, joint training with text-audio data, a conditional synchronization module that aligns video conditions with audio latents at frame level, and 157M parameters. The paper trains three sizes: 157M, 621M and 1.03B.
[^qa-9]: **Verified** — [S13] ranks models by Elo from blind pairwise comparisons "judged by our validated private evaluators" and shows 95% intervals for every row except the fixed anchor.
[^qa-10]: **Verified** — Every value matches Table 11 of [S1]. The table and §7.1 give no prompt count, seeds or intervals.
[^qa-11]: **Verified** — §7.2.1–7.2.2 of [S1]: pairs are anonymized and left/right positions randomized; visual questions are answered with audio off, before the audio questions; majority vote across annotators. Of the 11 questions, the eleventh (reference-image correspondence) is asked only in image-conditioned comparisons.
[^qa-12]: **Verified** — The directions match §7.2.3–7.2.8 of [S1], including the significant speech-quality margin over LTX 2.5. The report describes the advantage over Kandinsky 5.0 Pro as consistent across all criteria, so "nearly all" understates it slightly.
[^qa-13]: **Verified** — §4.4 of [S1]: 64 prompts × 3 seeds; Pro 0.235 → 0.124 (p < 10⁻³); Lite 0.179 → 0.127 (−29%, p < 10⁻³); Harvard sentences (100 prompts) 0.251 → 0.180 (p = 0.005). Whisper is used twice in the reward: as a Whisper-ASR term in the audio branch, and as the intelligibility gate on the lip-sync reward.
[^qa-14]: **Verified** — §7.2.10 of [S1], image-to-audio-video mode. Figure 22 shows the shares only as bars.
[^qa-15]: **Verified** — Table 10 and §6.3–6.4 of [S1]: full non-distilled model, measured after warmup, excluding weight loading and MP4 encoding. The 49-of-100 MagCache figure is given for Pro at SD. The 39.6 s upscaling time comes from Table 6 and includes K-VAE encoding. The [S2] README repeats the Table 10 values.
[^qa-16]: **Verified** — WER values are from Table 11 of [S1]. §7.2.6 states that Veo 3.1 Fast's text-to-audio-video leads are significant on every listed criterion except speech quality.
[^qa-17]: **Verified** — This sentence was corrected in QA's first pass (see the callout after this paragraph). §7.2.2 of [S1] asks raters to judge intelligibility, naturalness of voice and articulation under speech quality. In VABench, NISQAv2 predicts a mean opinion score for overall speech quality and naturalness [S5].
[^qa-18]: **Verified** — §4.4 and §7.1 of [S1] confirm that Whisper-large-v3 is both metric and reward. Table 11 reports Qwen3-ASR WER only for the post-RL checkpoints. The report does not name the ASR model used for the Harvard-sentence check, and the post labels its Whisper reading as an assumption.
[^qa-19]: **Verified** — §7.1 and Table 11 of [S1] give no prompt count, seeds or intervals. VABench's LLM-judged macro scores use a 1–5 scale [S5].
[^qa-20]: **Verified** — QA's search of the full v1 text of [S1] confirms these absences. The ±6.9-point figure checks out: 1.96 × √(0.25/200) ≈ 0.069.
[^qa-21]: **Verified** — The only training GPU counts in [S1] are 8 NVIDIA H100s for the super-resolution transformer (§4.6.3) and 4 GPUs for the latent upscalers (§4.6.4).
[^qa-22]: **Verified** — This sentence was corrected in QA's first pass. On 2026-10-16 the Hub showed eight MIT-licensed checkpoints, with only the non-distilled Pro gated [S3][S4], and [S2] holds MIT-licensed inference code.
[^qa-23]: **Verified** — The [S2] README, fetched 2026-10-16, has only a project description, Project Updates, Quick start and Performance sections, and none of the listed items is mentioned.
[^qa-24]: **Verified** — This sentence was corrected in QA's first pass. The Hub API for [S3] reports 30,136,326,248 parameters (25,405,571,176 BF16 + 4,730,755,072 F32). At 2 and 4 bytes per parameter, that matches the size of the repository's transformer weight file alone (69.73 GB). The text encoders, autoencoders and vocoder sit in separate files.
[^qa-25]: **Verified** — [S13] as loaded by QA on 2026-10-16: 28 rows, no Kandinsky entry. The four Elo values the post quotes match: MiniMax H3 (768p) 1159, Dreamina Seedance 2.0 1136, Veo 3.1 Fast 965, LTX-2.5 Fast 950. The board is live and will change.
[^qa-26]: **Supported with caveat** — The [S10] abstract gives a 2B Video Lite, a 19B Video Pro and 10-second video. "Video-only" here means video without sound. The Kandinsky 5.0 family also includes a 6B Image Lite model [S10].
[^qa-27]: **Verified** — §7.2.4 of [S1]: Kling 2.6 is preferred on overall visual quality and moderately on overall audio quality and audio-video synchronization, while speech quality and user-task solving are close to parity. The same section reports that sound-prompt following clearly favors Pro.
[^qa-28]: **Supported with caveat** — The speech-quality preference over LTX 2.5 (§7.2.5) and the Qwen3-ASR WERs (Table 11) are as stated in [S1]. The rubric in §7.2.2 folds in more than three properties: besides intelligibility, naturalness of voice and articulation, it covers singing when the prompt requests it, and lip-sync and facial expression when the speaker is on screen. Since Pro also scores far higher on VABench lip-sync (Table 11), that strengthens the point that the vote cannot be read as an intelligibility measure.
[^qa-29]: **Verified** — QA confirmed the Hub API count for [S3] on 2026-10-16. The interval arithmetic is correct: 18.5 + 4.5 + 4.5 = 27.5B and 19.5 + 5.5 + 5.5 = 30.5B. [S1] states only the rounded 19B/5B/5B split (§3.2) and does not explain how it counted parameters.
[^qa-30]: **Supported with caveat** — §4.4 of [S1] says it "adapt[s]" OmniNFT [S8], which was developed for LTX-2. It keeps the three OmniNFT mechanisms but recalibrates the gradient-surgery block schedule with its own probes, because "The zones reported for LTX-2 did not transfer directly to our models". So "direct reuse" overstates the overlap somewhat.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
