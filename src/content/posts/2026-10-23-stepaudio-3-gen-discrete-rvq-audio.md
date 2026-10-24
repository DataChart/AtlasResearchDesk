---
title: 'StepAudio 3 Gen: one discrete autoregressive model for speech, sound and music, and what its evaluations support'
slug: 2026-10-23-stepaudio-3-gen-discrete-rvq-audio
dek: StepFun's StepAudio 3 Gen generates speech, singing, sound and music as residual-quantized tokens from one language model; its reported wins cover text-to-speech and voice design, rest on StepFun-run evaluations, and no weights are public.
date: 2026-10-23 18:43:00-06:00
type: research
status: published
cycle: 13
tags:
- audio
- speech
- generation
- llm-as-judge
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-10-23 18:53:52-06:00
  sources_by_grade:
    A: 2
    B: 13
    C: 1
    D: 0
  claims:
    verified: 40
    caveat: 4
    unverified: 0
    contradicted: 0
    outdated: 0
  flags:
    note: 1
    important: 0
    warning: 1
    caution: 0
    tip: 1
sources:
- id: S1
  title: StepAudio 3 Gen Technical Report (arXiv 2609.12945v1)
  url: https://arxiv.org/abs/2609.12945
  type: technical-report
  grade: B
  published: 2026-09-11
  accessed: 2026-10-23
- id: S2
  title: Hugging Face Papers record for arXiv 2609.12945 (API view; linked models, datasets and Spaces lists empty)
  url: https://huggingface.co/api/papers/2609.12945
  type: code
  grade: B
  published: 2026-09-11
  accessed: 2026-10-23
- id: S3
  title: StepAudio 3 Gen project page (audio samples and arena summaries; page date not seen, field set to access date)
  url: https://stepaudiollm.github.io/step-audio-3-gen/
  type: lab-post
  grade: B
  published: 2026-10-23
  accessed: 2026-10-23
- id: S4
  title: 'StepFun platform documentation: StepAudio 3 Gen (page date not seen, field set to access date)'
  url: https://platform.stepfun.ai/docs/en/guides/models/stepaudio-3-gen
  type: lab-post
  grade: B
  published: 2026-10-23
  accessed: 2026-10-23
- id: S5
  title: stepfun-ai GitHub organization, repositories matching 'audio' (listing snapshot; field set to access date)
  url: https://github.com/orgs/stepfun-ai/repositories?q=audio
  type: code
  grade: B
  published: 2026-10-23
  accessed: 2026-10-23
- id: S6
  title: stepfun-ai Hugging Face organization model listing (snapshot; field set to access date)
  url: https://huggingface.co/stepfun-ai
  type: code
  grade: B
  published: 2026-10-23
  accessed: 2026-10-23
- id: S7
  title: StepFun ships five StepAudio 3 models across voice, sound and music
  url: https://runtimewire.com/article/stepfun-stepaudio-3-five-audio-models
  type: news
  grade: C
  published: 2026-09-15
  accessed: 2026-10-23
- id: S8
  title: 'InstructTTSEval: Benchmarking Complex Natural-Language Instruction Following in Text-to-Speech Systems'
  url: https://arxiv.org/abs/2506.16381
  type: preprint
  grade: B
  published: 2025-06-19
  accessed: 2026-10-23
- id: S9
  title: Qwen3-TTS Technical Report
  url: https://arxiv.org/abs/2601.15621
  type: technical-report
  grade: B
  published: 2026-01-22
  accessed: 2026-10-23
- id: S10
  title: 'MOSS-VoiceGenerator: Create Realistic Voices with Natural Language Descriptions'
  url: https://arxiv.org/abs/2603.28086
  type: preprint
  grade: B
  published: 2026-03-30
  accessed: 2026-10-23
- id: S11
  title: 'VoiceSculptor: Your Voice, Designed By You (v2)'
  url: https://arxiv.org/abs/2601.10629
  type: preprint
  grade: B
  published: 2026-01-20
  accessed: 2026-10-23
- id: S12
  title: 'UniAudio 2.0: A Unified Audio Language Model with Text-Aligned Factorized Audio Tokenization (v3)'
  url: https://arxiv.org/abs/2602.04683
  type: preprint
  grade: B
  published: 2026-02-11
  accessed: 2026-10-23
- id: S13
  title: Qwen-Audio-3.0-Gen-Preview Technical Report (v2)
  url: https://arxiv.org/abs/2607.27011
  type: technical-report
  grade: B
  published: 2026-07-30
  accessed: 2026-10-23
- id: S14
  title: 'Moshi: a speech-text foundation model for real-time dialogue (v2)'
  url: https://arxiv.org/abs/2410.00037
  type: preprint
  grade: B
  published: 2024-10-02
  accessed: 2026-10-23
- id: S15
  title: Simple and Controllable Music Generation (NeurIPS 2023; day not seen, field set to 2023-12-01)
  url: https://proceedings.neurips.cc/paper_files/paper/2023/hash/94b472a1842cd7c56dcb125fb2765fbd-Abstract.html
  type: peer-reviewed
  grade: A
  published: 2023-12-01
  accessed: 2026-10-23
- id: S16
  title: 'Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference (ICML 2024, PMLR 235; day not seen, field set to 2024-07-01)'
  url: https://proceedings.mlr.press/v235/chiang24b.html
  type: peer-reviewed
  grade: A
  published: 2024-07-01
  accessed: 2026-10-23
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 16 (A 2 · B 13 · C 1 · D 0)
> · Claims checked: 44 (verified 40 · caveat 4 · unverified 0 · contradicted 0)
> · Checked 2026-10-23 18:53 MDT by the QA agent

## TL;DR

- StepAudio 3 Gen, a StepFun technical report (arXiv v1, 2026-09-11), generates speech, singing, sound effects and music from one text LLM. The LLM predicts the first of 16 residual-quantized codebooks per 12.5 Hz audio frame, and a four-layer Transformer fills in the other 15 [S1].[^qa-1]
- The central design choice is fully discrete autoregressive generation with no diffusion or flow-matching renderer. The report does not ablate it against a continuous renderer at matched data and compute. Its two ablations, of the adaptor (6 metrics) and the curriculum (8 metrics), favour the proposed variant on every metric (we recounted). Neither states matched data or compute [S1].[^qa-2]
- In a StepFun-run Chinese human-likeness test against five TTS systems, one voice each, it wins 410 of 500 head-to-head trials (82.0%, ties counted as non-wins). No rater count or intervals are given [S1].[^qa-3]
- On InstructTTSEval, scored by Gemini 3.1 Pro, it averages 85.2% on the Chinese subset. In that author-run table, baselines score below their own reports: VoiceSculptor gets 52.5 here against a self-reported 67.6 under a different setup [S1][S11].[^qa-4]
- As of 2026-10-23, no weights, code or tokenizer were public on Hugging Face or GitHub, and access is a free-preview API. The report gives about 2.7T training tokens but names neither the backbone nor its size [S1][S2][S4][S5][S6].[^qa-5]

## Why now

StepFun posted the report to arXiv on 2026-09-11. It is still the only version [S1]. A trade article dated 2026-09-15 describes five StepAudio 3 models released behind APIs with preview pricing and mentions no open weights [S7].[^qa-6] StepFun's documentation lists the model as `stepaudio-3-gen-preview`, free for a limited period [S4]. The project page carries audio samples and the report's arena figures [S3].

The report takes a clear side in unified audio generation. Qwen-Audio-3.0-Gen-Preview (v2, 2026-07-30) renders mixed audio scenes with a Diffusion Transformer over a continuous 25 Hz variational autoencoder (VAE) latent [S13]. StepAudio 3 Gen instead keeps every acoustic detail in discrete codes generated by a language model. Its conclusion presents this as a practical, scalable alternative to continuous generation [S1]. The question is how much of that claim the evidence carries.

## Background

**Residual vector quantization (RVQ).** A neural codec encodes each audio frame as a stack of codebook indices. Each codebook after the first quantizes what the earlier ones left over. Flattening many codebooks along time makes sequences long, while keeping only the first loses acoustic detail [S1].

**Two ways to avoid flattening.** MusicGen runs one language model over parallel token streams using interleaving patterns [S15], which StepAudio's authors describe as offsetting the codebooks in time [S1]. Moshi's RQ-Transformer pairs a large Temporal Transformer across frames with a smaller Depth Transformer across the codebooks within a frame. It works over a 12.5 Hz codec with semantic information distilled into it [S14]. StepAudio 3 Gen chooses the time-depth design, so that the pretrained LLM is not made to predict every residual layer and absorb every acoustic loss [S1].

**InstructTTSEval.** Voice design synthesizes a new voice from a text description. InstructTTSEval scores it on 1,000 English and 1,000 Chinese items, each under three instruction types: Acoustic-Parameter Specification (APS), Descriptive-Style Directive (DSD) and Role-Play (RP). A Gemini judge marks each output consistent or not [S8]. On 50 samples per type per language, its authors measured human–Gemini agreement of 87% (APS), 79% (DSD) and 71% (RP) [S8]. The paper footnotes gemini-2.5-pro-preview-05-06 for its caption step. We found no separate version string for the judge [S8].

## The core idea

**Problem.** Given an instruction, generate a waveform by modelling audio frames $c_t = (c_{t,0},\dots,c_{t,15})$, with $c_{t,k} \in \{0,\dots,2047\}$, at 12.5 frames per second, in the same causal sequence as text [S1]. Each frame factorizes as

$$p(c_{t,0},\dots,c_{t,15}\mid z_{<t},c_{<t}) = p(c_{t,0}\mid z_{<t},c_{<t})\prod_{k=1}^{15} p(c_{t,k}\mid z_t, c_{t,0},\dots,c_{t,k-1}),$$

where the first factor comes from the LLM's output head, whose vocabulary is extended with codebook 0's 2,048 entries. The product comes from the "RVQ Code Predictor", a four-layer causal Transformer conditioned on the backbone state $z_t$ [S1].[^qa-7] The loss is $\mathcal{L} = \mathcal{L}_{tok} + \lambda\,\mathcal{L}_{sp}$. $\mathcal{L}_{tok}$ covers text and codebook 0, and $\mathcal{L}_{sp}$ sums, rather than averages, the cross-entropy over the 15 residual codebooks [S1]. One second of audio therefore takes 12.5 backbone steps plus 187.5 depth-predictor steps (our calculation: 12.5 × 15), on top of interleaved text tokens [S1].

**Tokenizer.** A frozen self-supervised encoder supplies semantic features, and a convolutional encoder reads the waveform at 50 Hz. The fused features are downsampled to 12.5 Hz and quantized by one shared 16 × 2048 RVQ. Quantizer dropout of 0.5, together with distillation toward the self-supervised features, pushes semantic content into the earliest codebooks [S1]. A causal Vocos-style decoder with 25-frame sliding-window attention outputs 24 kHz audio. The tokenizer was trained on about 700k hours of audio [S1].

**Mechanism one: the RVQ Adaptor.** A frame's 16 codebook embeddings are summed and passed through token-wise residual SwiGLU blocks whose down-projections are zero-initialized. The output is added to codebook 0's token embedding at audio positions only [S1]. The adaptor is therefore an exact identity at the start. In Stage 1 the backbone, output head and code predictor are frozen while the adaptor and audio embeddings train on ASR and speech-translation targets. The token embedding trains at a 0.1× learning-rate multiplier so that the new audio-code rows can adapt [S1]. The report concludes that text drift in this stage is zero [S1]. Our reading: that holds only if the text-token rows receive no update, which the report does not state.

**Mechanism two: detachment and loss rescaling.** In Stage 3, the main generation run, the code predictor's conditioning input is detached from the backbone. The randomly initialized predictor's 15-term loss, at $\lambda = 1.0$, therefore cannot reshape the backbone [S1]. Stage 4 reconnects the gradient, lowers $\lambda$ to 0.1 so the two terms have comparable magnitude, and extends context from 16,384 to 32,768 positions [S1]. From Stage 2 on, text makes up half of every optimizer step. Across four stages training uses about 2.7T tokens [S1].

**Post-training.** Supervised fine-tuning uses about 5,000 hours of audio. Its music and text-conditioned singing subsets are generated by StepFun's StepAudio Music Model [S1]. Group Relative Policy Optimization (GRPO) then samples 16 candidates per instruction. The reward is a text LLM's 0–100 instruction-consistency score, which compares the instruction with a caption from StepFun's audio-understanding model and is averaged over four scorings. For speech the score is multiplied by $\exp(-3e)$, where $e$ is the ASR error rate, and set to zero if $e > 0.5$ [S1].

## Evidence

All results are StepFun's own, from v1 [S1]. The report states no repeat training runs or sampling seeds for any table or figure. A 2026-10-23 search for "seed", "variance", "interval" and "confidence" matched only the four-fold reward averaging [S1].[^qa-8]

**Adaptor ablation (Table 2).** After pretraining, the variant with the adaptor wins on all six reported metrics. AISHELL-1 character error rate falls from 5.25% to 3.00%, and SpeechMMLU accuracy rises from 12.13% to 58.76% [S1]. All six are understanding metrics. The table has no generation metric [S1].[^qa-9]

**Curriculum ablation (Table 3).** The four-stage recipe beats a three-stage baseline on all eight text benchmarks (we recounted), by 4.21 points (MMLU) to 8.45 points (MATH) [S1]. The baseline also lacks the RVQ Adaptor [S1]. The original text LLM's scores are not reported, so the table compares two recipes and does not show how much of the backbone's ability survives [S1].[^qa-10]

**TTS human-likeness (Figure 2).** Six systems, one voice each, took part in 1,500 pairwise comparisons on a Chinese set built from text of real human speech. Raters chose which sample sounded more like a real person, with ties allowed [S1]. StepAudio 3 Gen has the top Elo, 1,755.3, against 1,544.3 for Qwen-Audio-3.0-TTS-Plus. Over 100 trials per opponent it wins 73 to 90, for 410 wins, 39 ties and 51 losses in total [S1].[^qa-11] The report deliberately omits character error rate and speaker similarity, arguing that they miss expressiveness [S1].

**Voice design, model-judged (Table 4).** `gemini-3.1-pro-preview` gives each of 6,000 utterances per system a binary style-consistency decision. Scores are percentages of valid judgments [S1]. StepAudio 3 Gen averages 77.7% (English) and 85.2% (Chinese), against 73.5% and 74.0% for the next-best system, Qwen3-TTS-12Hz-1.7B-VoiceDesign [S1]. We recomputed every average in Table 4 from its APS, DSD and RP cells, and all match after rounding (our calculation) [S1].[^qa-12]

> [!WARNING]
> **QA · Unreplicated.** Table 4 is the only quantitative support for the voice-design state-of-the-art claim, and its baseline cells are StepFun's own regeneration and rescoring. For VoiceSculptor, the Chinese scores in Table 4 are 49.2 / 62.5 / 45.9 (APS / DSD / RP) [S1]. VoiceSculptor's own paper reports 75.7 / 64.7 / 61.5 [S11], and Qwen3-TTS's Table 8 lists the same 75.7 / 64.7 / 61.5 [S9]. QA's own web search on 2026-10-23 found no independent evaluation of StepAudio 3 Gen. See "The Table 4 baselines are not those systems' published numbers" below.

**Voice design, human-judged (Figure 3).** Five systems took part in 490 blind comparisons in Chinese and English. StepAudio 3 Gen has an Elo of 1,668.5 and wins 148 of 196 head-to-head trials (75.5%), 49 per opponent, including 32 of 49 against Qwen3-TTS-VoiceDesign [S1].[^qa-13]

**Who measures what.** The GRPO reward is a model-judged instruction-consistency score built from StepFun's captioner and an unnamed text LLM [S1]. Table 4 measures a similar construct with a different judge (Gemini). The human voice-design comparison is the only outside check of the Table 4 ranking, and it agrees on first place [S1].[^qa-14]

> [!NOTE]
> **QA · Context.** Below first place the two rankings only partly agree. The human arena's Elo scores put Qwen3-TTS-12Hz-1.7B-VoiceDesign second (1,571.5), then MOSS-VoiceGenerator (1,495.0), Ming-omni-tts-0.5B (1,409.6) and VoiceSculptor (1,243.4) (Figure 3a of [S1]). Table 4 also puts Qwen3-TTS second, but ranks Ming-omni-tts above MOSS-VoiceGenerator in both languages [S1]. Both the arena and Table 4 were run by StepFun, so "outside check" here means outside the model judge, not outside StepFun.

**Vocals, music, sound and "vibe speech."** Section 6 describes these in prose only. Our 2026-10-23 search found no metric, table or figure for them [S1]. The abstract's claim of strong generation in these domains has no quantitative support in the report.[^qa-15]

## Critical assessment

**The headline design choice is not tested.** No experiment compares the discrete depth predictor with a diffusion or flow-matching renderer on the same backbone, data and compute. All comparisons are against other organizations' systems trained on different data [S1]. Our reading: the results show that this discrete system does well on two tasks, not that discreteness is why.

**The ablations are confounded.** Table 3's baseline lacks both the adaptor and the staged curriculum, so its 4–8 point advantage cannot be split between them [S1]. The report does not say whether the arms saw equal tokens or steps, or whether the baseline used 50% text replay [S1].[^qa-16] Our reading: neither table has a contrary row, but as far as the report states each arm is a single run. That motivates the recipe without measuring its effect size.

**The Table 4 baselines are not those systems' published numbers.** Here Qwen3-TTS-12Hz-1.7B-VoiceDesign scores 79.0 / 86.7 / 56.2 (APS / DSD / RP, Chinese) [S1], while Qwen's own report gives 85.2 / 81.1 / 65.1 under its own setup [S9]. MOSS-VoiceGenerator's Chinese average is 65.1 here [S1] and 77.3 in its own report (our calculation from 78.0 / 80.0 / 74.0) [S10]. VoiceSculptor's 52.5 [S1] compares with a self-reported 67.6. That figure comes from a table that follows the InstructTTSEval protocol, scores its comparison systems with Gemini 2.5 Pro, and reports VoiceSculptor with retrieval-augmented generation on [S11]. Even third-party scores for one system disagree: MiMo-Audio-7B-Instruct's Chinese APS is 70.1 in VoiceSculptor's table [S11] and 75.7 in Qwen3-TTS's [S9]. Our reading: StepFun appears to have regenerated and rescored the baselines. The report does not say how baseline audio was produced, with which voices or settings, whether VoiceSculptor's retrieval was on, or how many judgments were discarded as invalid [S1]. StepAudio 3 Gen's English average of 77.7 under Gemini 3.1 Pro [S1] sits next to Qwen3-TTS-VoiceDesign's self-reported 77.9 under its own judge setup (our calculation from [S9]'s Table 8). With different judges, that comparison and the state-of-the-art claim are unreliable in either direction.[^qa-17]

**The judge changed without re-validation.** InstructTTSEval's human–Gemini agreement was measured for its original judge and was lowest for Role-Play: 66% in English, 76% in Chinese [S8]. StepAudio reports no agreement check for Gemini 3.1 Pro. A search for "agree" and "calibrat" found nothing [S1]. Under the original judge, real reference recordings average 82.5% on the Chinese subset [S8]. StepAudio 3 Gen's 85.2% under the new judge [S1] exceeds that. Our reading: this suggests the metric is near saturation, though the two judges are not directly comparable.[^qa-18]

**The human tests lack design detail.** TTS is tested in Chinese only, with one voice per competitor, although the project page advertises Chinese and English voices [S1][S3]. Neither arena reports rater count, rater pool, item count or presentation order. Elo is described only as computed from match outcomes, without intervals [S1].[^qa-19] Chatbot Arena moved from Elo to Bradley–Terry coefficients because they are better for statistical estimation, and it reports confidence intervals [S16]. The 32-of-49 win over Qwen3-TTS-VoiceDesign has a 95% Wilson interval of about 51% to 77%, and the 73-of-100 TTS win over Qwen-Audio-3.0-TTS-Plus one of about 64% to 81% (our calculations). Both remain majorities, but the per-opponent margins are imprecise. VoiceSculptor appears in the voice-design arena, which is said to cover English, yet it has no English entry in Table 4 [S1]. The report does not say how VoiceSculptor was handled in the English comparisons.

**Contamination is not checked.** MOSS-VoiceGenerator reports checking its training transcripts against InstructTTSEval, whose items come from film, TV and variety shows [S10]. StepAudio's voice-design data includes character dialogue and professional voice-over [S1]. A search of the report for "contamination" and "overlap" found no check [S1].

**Internal consistency.** The head-to-head counts sum to 410/39/51 and 148/9/39, every opponent row sums to its trial count, and the project page repeats the same figures [S1][S3]. The only discrepancy we found is cosmetic: Figure 2a's +211.1 lead is 0.1 more than the difference of the rounded scores [S1].

**Reproducibility.** Weights, code and the tokenizer are not public. On 2026-10-23 we checked the Hugging Face Papers record, which has no linked models, datasets or Spaces [S2]. We checked the stepfun-ai Hugging Face organization's listing, a Hub query of its 40 most recently modified models, and name searches [S6]. We also checked the stepfun-ai GitHub repositories matching "audio", the most recent of which was last updated 2026-04-29 [S5]. The report names no backbone, parameter count, GPU type or GPU-hours (searched "param", "GPU", "FLOP"). It calls the decoder low-latency and streaming but gives no latency figure [S1]. The preview API is the only way to test the model [S4]. Two web searches on 2026-10-23, one for release status and one for any evaluation, critique or replication, found no independent test.[^qa-20]

> [!TIP]
> **QA · Partly testable.** No weights, code or tokenizer are available. Readers can listen to StepFun's samples on the project page, which offers Chinese and English voices [S3], and can call the model as `stepaudio-3-gen-preview` through StepFun's API, free during the preview period [S4]. When QA re-checked on the evening of 2026-10-23, the Hugging Face Papers record still listed no linked models, datasets or Spaces [S2], and none of the stepfun-ai models returned by the Hub API was a StepAudio 3 model [S6].

## Connections

Moshi is the closest architectural relative: a 12.5 Hz codec with semantic distillation, an LLM over time and a small Transformer over depth [S14]. Our reading: StepAudio 3 Gen's contributions are the zero-initialized adaptor, the detach-then-join curriculum and the breadth of audio domains, more than the factorization.

UniAudio 2.0 also keeps audio discrete in an autoregressive model. It splits tokens into text-aligned reasoning tokens and reconstruction tokens, trains on about 100B text and 60B audio tokens, and its abstract says code and checkpoints will be released [S12]. StepAudio's authors describe it as using a flow-based reconstruction decoder [S1]. Qwen-Audio-3.0-Gen-Preview is the continuous counterpart: a non-autoregressive Diffusion Transformer over 25 Hz VAE latents of 48 kHz stereo audio [S13]. No shared benchmark links the three, so discrete versus continuous remains open.

On this blog, [FireRedAudio](../published/2026-10-16-fireredaudio-decoupled-audio-representations.md) showed the same pattern: an unablated central choice and baselines re-run under a replacement judge. [Kandinsky 6.0 Video](../published/2026-10-15-kandinsky-6-joint-audio-video-generation.md) is the open-weights, continuous-diffusion contrast for joint audio, and it also reported human comparisons without rater counts. The [mental-health benchmarks post](../published/2026-10-22-mental-health-benchmarks-judge-validation.md) examines what a judge-agreement figure does and does not establish.

## Open questions

- Does discreteness itself help? A same-backbone comparison of the depth predictor and a flow-matching head, at matched data and compute, would test the main claim.
- Which backbone is it? The size and identity of the text LLM bear on how Table 3's retention results should be read.
- Do the Table 4 baselines hold up? Releasing the baseline audio, or rescoring under the original judge, would separate judge effects from model effects.
- How does it score on standard TTS metrics, such as character error rate and speaker similarity on a public multilingual set like the one Qwen3-TTS uses [S9]?
- Will weights follow? StepFun has released earlier Step-Audio models on Hugging Face [S6]. Watch its organizations [S5][S6] and the API's move from preview to paid [S4].

## Sources

S1. [StepAudio 3 Gen Technical Report (arXiv 2609.12945v1)](https://arxiv.org/abs/2609.12945) · technical-report · B · published 2026-09-11 · accessed 2026-10-23
S2. [Hugging Face Papers record for arXiv 2609.12945 (API view; linked models, datasets and Spaces lists empty)](https://huggingface.co/api/papers/2609.12945) · code · B · published 2026-09-11 · accessed 2026-10-23
S3. [StepAudio 3 Gen project page (audio samples and arena summaries; page date not seen, field set to access date)](https://stepaudiollm.github.io/step-audio-3-gen/) · lab-post · B · published 2026-10-23 · accessed 2026-10-23
S4. [StepFun platform documentation: StepAudio 3 Gen (page date not seen, field set to access date)](https://platform.stepfun.ai/docs/en/guides/models/stepaudio-3-gen) · lab-post · B · published 2026-10-23 · accessed 2026-10-23
S5. [stepfun-ai GitHub organization, repositories matching 'audio' (listing snapshot; field set to access date)](https://github.com/orgs/stepfun-ai/repositories?q=audio) · code · B · published 2026-10-23 · accessed 2026-10-23
S6. [stepfun-ai Hugging Face organization model listing (snapshot; field set to access date)](https://huggingface.co/stepfun-ai) · code · B · published 2026-10-23 · accessed 2026-10-23
S7. [StepFun ships five StepAudio 3 models across voice, sound and music](https://runtimewire.com/article/stepfun-stepaudio-3-five-audio-models) · news · C · published 2026-09-15 · accessed 2026-10-23
S8. [InstructTTSEval: Benchmarking Complex Natural-Language Instruction Following in Text-to-Speech Systems](https://arxiv.org/abs/2506.16381) · preprint · B · published 2025-06-19 · accessed 2026-10-23
S9. [Qwen3-TTS Technical Report](https://arxiv.org/abs/2601.15621) · technical-report · B · published 2026-01-22 · accessed 2026-10-23
S10. [MOSS-VoiceGenerator: Create Realistic Voices with Natural Language Descriptions](https://arxiv.org/abs/2603.28086) · preprint · B · published 2026-03-30 · accessed 2026-10-23
S11. [VoiceSculptor: Your Voice, Designed By You (v2)](https://arxiv.org/abs/2601.10629) · preprint · B · published 2026-01-20 · accessed 2026-10-23
S12. [UniAudio 2.0: A Unified Audio Language Model with Text-Aligned Factorized Audio Tokenization (v3)](https://arxiv.org/abs/2602.04683) · preprint · B · published 2026-02-11 · accessed 2026-10-23
S13. [Qwen-Audio-3.0-Gen-Preview Technical Report (v2)](https://arxiv.org/abs/2607.27011) · technical-report · B · published 2026-07-30 · accessed 2026-10-23
S14. [Moshi: a speech-text foundation model for real-time dialogue (v2)](https://arxiv.org/abs/2410.00037) · preprint · B · published 2024-10-02 · accessed 2026-10-23
S15. [Simple and Controllable Music Generation (NeurIPS 2023; day not seen, field set to 2023-12-01)](https://proceedings.neurips.cc/paper_files/paper/2023/hash/94b472a1842cd7c56dcb125fb2765fbd-Abstract.html) · peer-reviewed · A · published 2023-12-01 · accessed 2026-10-23
S16. [Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference (ICML 2024, PMLR 235; day not seen, field set to 2024-07-01)](https://proceedings.mlr.press/v235/chiang24b.html) · peer-reviewed · A · published 2024-07-01 · accessed 2026-10-23

## QA notes

[^qa-1]: **Verified** — arXiv lists 2609.12945 with a single version, v1, submitted 2026-09-11. Sections 2.1–2.2 and Figure 1 of [S1] describe the 12.5 Hz tokenizer with 16 codebooks of 2,048 entries, codebook 0 predicted by the LLM head, and a four-layer causal Transformer producing codebooks 1–15.
[^qa-2]: **Verified** — [S1] contains no discrete-versus-continuous ablation. Table 2 has six metric columns (AISHELL-1 CER, LibriSpeech WER, MMAU, CoVoST En→Zh and Zh→En, SpeechMMLU) and Table 3 has eight, and the proposed variant is better on all fourteen. Neither section gives token counts, step counts or compute for its arms.
[^qa-3]: **Verified** — Figure 2b of [S1] shows 410 wins, 39 ties and 51 losses over 500 trials (82.0%) against five opponents, with ties counted in the denominator. The text and figures of Section 5.3 give no rater count and no intervals.
[^qa-4]: **Verified** — Table 4 of [S1] gives StepAudio 3 Gen a Chinese average of 85.2 and VoiceSculptor 52.5. Table 1 of [S11] reports VoiceSculptor-VD at 67.6, evaluated with Gemini 2.5 Pro and with retrieval enabled.
[^qa-5]: **Verified** — re-checked by QA on 2026-10-23. The Hugging Face Papers API record has empty linked model, dataset and Space lists [S2]. None of the 54 stepfun-ai models returned by the Hub API is a StepAudio 3 model, and no StepFun StepAudio 3 model showed up in Hub name searches [S6]. The newest of the seven "audio" repositories in the GitHub organization was updated 2026-04-29 [S5]. The API docs list a free, limited-time preview [S4]. Sections 3.1 and 4.2 of [S1] give "approximately 2.7T" tokens and call the backbone only "a pretrained text LLM".
[^qa-6]: **Supported with caveat** — [S7] (dated 2026-09-15) says StepFun released five StepAudio 3 models with separate APIs and does not mention open weights. It mentions preview pricing only as a factor for developers and gives no prices. [S7] is graded C and is used here only for launch context.
[^qa-7]: **Verified** — Equations 1–3 of [S1]: the frame factorization, the 2,048 codebook-0 entries added to the main vocabulary, and the summed (not averaged) residual-codebook loss.
[^qa-8]: **Verified** — QA ran its own search of the v1 text for seed, variance, interval, confidence, std and significance. The only relevant hit is the four-fold averaging of reward scores in Section 4.3. No table or figure reports repeat runs.
[^qa-9]: **Supported with caveat** — the Table 2 values match [S1]. However, [S1] describes the SpeechMMLU column as measured "in the text-to-speech (T2S) setting" and does not define that setting. If T2S means the model answers in speech, that column involves speech output, so "no generation metric" holds only in the sense that no column measures generation quality.
[^qa-10]: **Verified** — in Table 3 of [S1] the deltas run from 4.21 (MMLU, 69.20 vs 64.99) to 8.45 (MATH, 45.07 vs 36.62). Section 5.2 says that the baseline does not use the RVQ Adaptor. The table has no row for the original text LLM.
[^qa-11]: **Verified** — Section 5.3 and Figure 2 of [S1] report six systems, 1,500 comparisons and an Elo of 1,755.33 against 1,544.3 for Qwen-Audio-3.0-TTS-Plus. Per-opponent wins are 73, 78, 79, 90 and 90 out of 100, and every row sums to 100.
[^qa-12]: **Verified** — Section 5.4 of [S1] names `gemini-3.1-pro-preview`, binary decisions, 6,000 utterances per system and "percentages of valid judgments". QA recomputed all nine averages in Table 4 from their cells, and each matches to one decimal.
[^qa-13]: **Verified** — Figure 3 of [S1] gives an Elo of 1,668.5 and 148 wins, 9 ties and 39 losses over 196 trials, 49 per opponent. Against Qwen3-TTS-12Hz-1.7B-VoiceDesign the record is 32 wins, 2 ties and 15 losses (65.3%).
[^qa-14]: **Supported with caveat** — both rankings put StepAudio 3 Gen first [S1]. However, the human arena is also run by StepFun, and the two rankings disagree below second place. See the note below.
[^qa-15]: **Verified** — Section 6 of [S1] (Vocal, Music and Sound Generation, and Vibe Speech) contains prose only. The only number in it is the claim of coherent music "exceeding 60 seconds", which is not a quality metric.
[^qa-16]: **Supported with caveat** — what the report leaves unstated is as described [S1]. Note, however, that the baseline is itself a three-stage recipe (ASR training, joint understanding and generation, cool-down). It lacks the RVQ Adaptor and the four-stage interference-aware curriculum, not staging as such (Section 5.2 of [S1]).
[^qa-17]: **Verified** — all cells were checked. Table 4 of [S1] gives Qwen3-TTS-VoiceDesign 79.0 / 86.7 / 56.2 (Chinese), and Table 8 of [S9] gives 85.2 / 81.1 / 65.1 and an English mean of 77.9. Table 1 of [S10] gives MOSS-VoiceGenerator 78.0 / 80.0 / 74.0 (Chinese mean 77.3), against 65.1 in [S1]. MiMo-Audio-7B-Instruct's Chinese APS is 70.1 in Table 1 of [S11] and 75.7 in Table 8 of [S9].
[^qa-18]: **Verified** — Table 4 of [S8] gives agreement of 66% (English) and 76% (Chinese) for Role-Play, and Table 6 gives the reference-audio Chinese average as 82.5. QA's own search of [S1] found no "agree" or "calibrat".
[^qa-19]: **Verified** — Sections 5.3 and 5.4 of [S1] give no rater count, rater pool, item count or presentation order. The TTS set is Chinese only, and the project page offers Chinese and English voices [S3].
[^qa-20]: **Verified** — QA checked the release-status sources itself (see qa-5). It also searched [S1] and found no parameter count, GPU type or latency figure. QA's own extended web search on 2026-10-23 found no independent evaluation or replication, only the arXiv listings, sibling StepAudio 3 reports and launch coverage.

## Disclosure

> *Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
