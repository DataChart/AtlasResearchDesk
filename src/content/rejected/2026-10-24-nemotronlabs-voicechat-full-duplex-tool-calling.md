---
title: 'NemotronLabs VoiceChat: a parallel tool-call channel in an open full-duplex speech model, and what its evaluations support'
slug: 2026-10-24-nemotronlabs-voicechat-full-duplex-tool-calling
dek: NVIDIA's open 11B full-duplex speech model adds a separate function-call output stream; it leads several open-model turn-taking metrics, completes fewer Full-Duplex-Bench v3 tool tasks than any system that benchmark reports, and never ablates the stream.
date: 2026-10-24 04:45:00-06:00
type: research
status: rejected
cycle: 14
tags:
- audio
- speech
- open-weights
- agents
reading_time_min: 11
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: reject
  checked_at: 2026-10-24 04:36:11-06:00
  sources_by_grade:
    A: 1
    B: 13
    C: 1
    D: 0
  claims:
    verified: 41
    caveat: 10
    unverified: 0
    contradicted: 3
    outdated: 0
  flags:
    note: 2
    important: 1
    warning: 0
    caution: 3
    tip: 1
sources:
- id: S1
  title: 'NemotronLabs VoiceChat: An Open Full-duplex Speech-to-Speech Model with Tool Calling Capabilities (arXiv 2609.21967v2; v1 2026-09-18)'
  url: https://arxiv.org/abs/2609.21967v2
  type: preprint
  grade: B
  published: 2026-10-01
  accessed: 2026-10-24
- id: S2
  title: NVIDIA NemotronLabs VoiceChat 11B model card, LICENSE and file listing on Hugging Face
  url: https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B
  type: lab-post
  grade: B
  published: 2026-08-03
  accessed: 2026-10-24
- id: S3
  title: NVIDIA-NeMo/Speech, nemotron-labs-voicechat branch (README, configs, duplex_stt_model.py; latest commit date shown 2026-08-11)
  url: https://github.com/NVIDIA-NeMo/Speech/tree/nemotron-labs-voicechat
  type: code
  grade: B
  published: 2026-08-11
  accessed: 2026-10-24
- id: S4
  title: 'NeurIPS 2026 virtual site: NemotronLabs VoiceChat poster, Real-Time Multimodal Conversational AI workshop (page date not seen, field set to access date)'
  url: https://neurips.cc/virtual/2026/166988
  type: peer-reviewed
  grade: B
  published: 2026-10-24
  accessed: 2026-10-24
- id: S5
  title: 'Full-Duplex-Bench: A Benchmark to Evaluate Full-Duplex Spoken Dialogue Models on Turn-taking Capabilities (arXiv 2503.04721v3)'
  url: https://arxiv.org/abs/2503.04721v3
  type: preprint
  grade: B
  published: 2025-08-16
  accessed: 2026-10-24
- id: S6
  title: 'Full-Duplex-Bench v1.5: Evaluating Overlap Handling for Full-Duplex Speech Models (arXiv 2507.23159v4)'
  url: https://arxiv.org/abs/2507.23159v4
  type: preprint
  grade: B
  published: 2026-04-26
  accessed: 2026-10-24
- id: S7
  title: 'Full-Duplex-Bench-v3: Benchmarking Tool Use for Full-Duplex Voice Agents Under Real-World Disfluency (arXiv 2604.04847v1)'
  url: https://arxiv.org/abs/2604.04847v1
  type: preprint
  grade: B
  published: 2026-04-06
  accessed: 2026-10-24
- id: S8
  title: VoiceBench leaderboard (page date not seen, field set to access date)
  url: https://matthewcym.github.io/VoiceBench/
  type: dataset
  grade: B
  published: 2026-10-24
  accessed: 2026-10-24
- id: S9
  title: VoiceBench repository README (scoring instructions; date is the latest news entry)
  url: https://github.com/MatthewCYM/VoiceBench
  type: code
  grade: B
  published: 2026-04-20
  accessed: 2026-10-24
- id: S10
  title: nemotron-speech-streaming-en-0.6b model card (cache-aware FastConformer-RNNT)
  url: https://huggingface.co/nvidia/nemotron-speech-streaming-en-0.6b
  type: lab-post
  grade: B
  published: 2026-03-13
  accessed: 2026-10-24
- id: S11
  title: 'NVIDIA Nemotron Nano 2: An Accurate and Efficient Hybrid Mamba-Transformer Reasoning Model (arXiv 2508.14444v4)'
  url: https://arxiv.org/abs/2508.14444v4
  type: technical-report
  grade: B
  published: 2025-09-02
  accessed: 2026-10-24
- id: S12
  title: 'DuplexSLA: A Full-Duplex Spoken Language Model with Synchronized Speech, Language, and Action (arXiv 2605.20755v2)'
  url: https://arxiv.org/abs/2605.20755v2
  type: preprint
  grade: B
  published: 2026-06-11
  accessed: 2026-10-24
- id: S13
  title: 'Moshi: a speech-text foundation model for real-time dialogue (arXiv 2410.00037v2)'
  url: https://arxiv.org/abs/2410.00037v2
  type: technical-report
  grade: B
  published: 2024-10-02
  accessed: 2026-10-24
- id: S14
  title: 'Freeze-Omni: A Smart and Low Latency Speech-to-speech Dialogue Model with Frozen LLM (ICML 2025, PMLR 267)'
  url: https://proceedings.mlr.press/v267/wang25aw.html
  type: peer-reviewed
  grade: A
  published: 2025-10-06
  accessed: 2026-10-24
- id: S15
  title: 'NVIDIA Nemotron 3 VoiceChat: Leading the Open Weights Frontier of Conversational Dynamics vs. Speech Reasoning (Artificial Analysis)'
  url: https://artificialanalysis.ai/articles/nemotron-3-voicechat-leader-speech-pareto
  type: blog
  grade: C
  published: 2026-03-13
  accessed: 2026-10-24
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **reject** · Sources: 15 (A 1 · B 13 · C 1 · D 0)
> · Claims checked: 54 (verified 41 · caveat 10 · unverified 0 · contradicted 3)
> · Checked 2026-10-24 04:36 MDT by the QA agent

## TL;DR

- NVIDIA released NemotronLabs VoiceChat as open weights under OpenMDW-1.1.[^qa-1] Counting from the released safetensors header, we get 11,095,371,286 parameters, all but 262,181 of them stored as 32-bit floats; those 262,181 are 64-bit integer entries [S2].[^qa-2]
- The central design choice is a dedicated function-call output head that reads the same backbone state as the agent-text head. Recounting the paper's 7 tables, we find that none removes or replaces a component. So nothing tests the head at matched data and compute, and we credit no score to it [S1].[^qa-3]
- On Full-Duplex-Bench v3, a benchmark co-authored by two VoiceChat authors, the model completes 33.0% of 100 tasks in NVIDIA's own run. The lowest of the six systems in the benchmark paper completes 41.0% [S1][S7].[^qa-4]
- In NVIDIA's own runs it resumes speaking after 93% of 99 synthetic backchannels. The benchmark paper's Nova Sonic row, which the anchor omits, reaches 98% [S1][S6].[^qa-5]
- In NVIDIA's own run, its VoiceBench average of 55.1 ties Freeze-Omni's 55.2 below rounding precision. Recomputing from the paper's subset scores gives 55.0 [S1][S8].[^qa-6]

> [!CAUTION]
> **QA · Corrected.** The first bullet originally read "11,095,371,286 parameters, all stored as 32-bit floats". QA read the same safetensors header [S2]: of the 11,095,371,286 values counted, 11,095,109,105 are 32-bit floats and 262,181 are 64-bit integers, held in five small lookup tensors of the TTS model (for example `special_flags` and `is_continuation`). The Hugging Face file metadata for [S2] also lists an I64 share. The total is right; the claim that every value is a 32-bit float is not.

> [!IMPORTANT]
> **QA · Rejected.** This post failed QA. One TL;DR claim (the storage format above) was contradicted by its own source, and QA had to correct three factual statements in total (see the CAUTION callouts and notes qa-2, qa-8 and qa-11). Under this desk's rules, a contradicted central claim means rejection. QA checked the benchmark figures, the recomputations and the absence claims against the cited sources and found nothing wrong with them. The errors are in the storage-format detail, an author count and one sentence describing how the mechanism works.

## Why now

The Hugging Face repository was created on 2026-07-29 (UTC), and the card gives a release date of 2026-08-03 [S2]. GitHub's date headers show code commits from 2026-07-29 to 2026-08-11 [S3].[^qa-7] The weights predate this blog's 60-day window, so the anchor is the paper: v1 on 2026-09-18 and v2 on 2026-10-01 (arXiv dates, UTC) [S1]. Comparing every numeric token across the two PDFs, only the date stamps differ. v1 calls the model "V-Model" in 13 places [S1]. The NeurIPS 2026 site lists a workshop poster with 39 authors, against 54 on arXiv [S4];[^qa-8] the OpenReview forum could not be opened. A 12B predecessor, "Nemotron 3 VoiceChat (V1)", was described by Artificial Analysis on 2026-03-13 [S15].[^qa-9] The paper claims the 11B release is the first fully open full-duplex speech model with tool calling [S1].

> [!CAUTION]
> **QA · Corrected.** This paragraph originally said the NeurIPS poster lists "41 authors". The listing [S4], opened by QA on 2026-10-24, names 39 authors, from Jagadeesh Balam to Piotr Żelasko. The arXiv count of 54 is correct [S1].

## Background

A full-duplex speech model listens while it speaks. It must decide, every few tens of milliseconds, whether to take the floor, hold it, yield to an interruption, or ignore a backchannel such as "uh-huh". Half-duplex agents hand that decision to a voice-activity detector (VAD) [S1]. Moshi models user and system audio as parallel streams and predicts time-aligned text tokens before audio tokens, an approach it calls an "inner monologue" [S13]. Freeze-Omni keeps its text LLM frozen and adds duplex behaviour through multitask training [S14].

Tool use adds a second problem: a call is a structured string that must be emitted at the right moment and never spoken. DuplexSLA, the closest prior design, decodes assistant audio and a rate-limited textual action channel, which carries planning text and tool calls, on a shared 160 ms timeline [S12]. The paper notes that DuplexSLA's model had not been released at the time of writing [S1].

## The core idea

**Problem statement.** Time is split into 80 ms frames. At frame $t$ a causal encoder maps user audio $u_{\le t}$ to a state $h_t \in \mathbb{R}^{1024}$. The model emits an agent-text token $a_t \in \mathcal{V}\cup\{\texttt{pad},\texttt{BOS},\texttt{EOS}\}$ and a function-channel token $f_t \in \mathcal{V}\cup\{\texttt{pad},\langle\text{SOTC}\rangle,\langle\text{EOTC}\rangle,\langle\text{EOTR}\rangle\}$, with no access to future audio [S1]. The input to the backbone is a fixed weighted sum:

$$e_t = 1\cdot \mathrm{proj}(h_t) + 1\cdot E(a_{t-1}) + 2\cdot E(f_{t-1}), \qquad s_t = \mathrm{LM}(e_{1:t}),$$

$$a_t \sim \mathrm{softmax}(W_a s_t), \qquad f_t \sim \mathrm{softmax}(W_f s_t).$$

The fusion weights 1, 1 and 2 come from the paper [S1].[^qa-10] In the released code the function head starts as a deep copy of the language-model head and shares its input embeddings [S3]. In our header count it has 587,202,560 parameters, the same as the language-model head (131,072 × 4,480) [S2].

**What each token teaches.** BOS (beginning of sequence) marks when to start speaking, EOS (end of sequence) when to stop, and padding when to stay silent. A tool call runs from ⟨SOTC⟩ (start of tool call) to ⟨EOTC⟩ (end of tool call), followed by the tool response and ⟨EOTR⟩ (end of tool response) [S1]. Tool-response tokens are supplied as context but carry no loss. During a call the text channel is trained to emit padding and the user audio is replaced by silence [S1]. The supervised fine-tuning (SFT) loss is

$$\mathcal{L}_{\text{SFT}} = 0.5\,(\mathcal{L}_{\text{text}} + \mathcal{L}_{\text{FC}}) + 0.5\,\mathcal{L}_{\text{T2T}}, \qquad \mathcal{L}_c = -\tfrac{1}{N}\textstyle\sum_t m^{(c)}_t\, w_c(y_t)\log p_\theta(y_t\mid h_t),$$

where $\mathcal{L}_{\text{T2T}}$ is a text-only next-token loss. The function-channel token weights are 64 for call content, 6 for ⟨SOTC⟩ and ⟨EOTC⟩, 3 for ⟨EOTR⟩ and 0.3 for padding [S1]. Call content is therefore weighted about 213 times as heavily as padding (64 / 0.3, our calculation). Even so, the paper credits the padding loss with discouraging spurious calls [S1].

**Mechanism, in our reading.** The separation sits only at the output. Both heads read one hidden state $s_t$, so the benefit over serialising calls into the text stream is that a call never takes a text slot. Turn-taking does not continue while the function head writes the call: the training format holds the text channel at padding and replaces user audio with silence over the call span [S1].[^qa-11] At inference, an ⟨SOTC⟩ makes the runtime decode and execute the whole call asynchronously. A predefined acknowledgement message is spoken while the call runs, and the result is then inserted into the context [S1]. Incoming audio is not used to condition generation during that interval, so the user cannot interrupt while a tool runs [S1].

> [!CAUTION]
> **QA · Corrected.** This paragraph originally said that "turn-taking continues while the function head writes JSON". The anchor contradicts that [S1]. Section 2.2 says that during training the agent-text positions matching the inserted call and response are supervised as padding and user audio is replaced by silence. Appendix B says the runtime decodes the whole call in one pass and does not use incoming audio to condition generation until the tool returns. A call never takes a text slot, but turn-taking does not run alongside it.

**Other components.** The encoder is a 600M-parameter, 24-layer cache-aware FastConformer with 70 frames of left context and no right context. An auxiliary recurrent-neural-network transducer (RNN-T) branch is trained afterwards on the frozen encoder to produce user transcripts [S1]. The backbone is a Nemotron Nano 2 9B model [S1], a hybrid of Mamba and Transformer layers [S11]. A separately trained 977M-parameter streaming text-to-speech (TTS) decoder turns the text stream into 31-level residual vector-quantized codes at 12.5 Hz, with no gradients shared with the backbone [S1].

**Training.** Training has two stages, continued pretraining (CPT) and then SFT, both on 64 GPUs whose type is not named [S1]. CPT data is almost entirely text rendered into two-channel speech by TTS, and SFT renders text turns the same way rather than using recorded conversations.[^qa-12] The tool-calling data comes from a multi-agent generation pipeline with automatic speech recognition (ASR) round-trip filtering, and the models that drove that pipeline are not named [S1]. The SFT sampler weights sum to 1.175. Normalised, retention data is 46.8%, conversational 23.8%, tool calling 26.0% and safety 3.4%. We recomputed these shares and the per-bucket sums from the paper's data-mixture table, and they match [S1].

## Evidence

All benchmark numbers for VoiceChat come from NVIDIA's runs, each reported as one figure. We searched the full v2 text, appendices included, on 2026-10-24. For the four benchmark tables we found no seeds, repeats, intervals or decoding settings. The only ± values are in the TTS table, which does not say what they measure [S1].[^qa-13]

**Turn-taking, Full-Duplex-Bench 1.0.** The benchmark has 137 synthetic and 216 natural (CANDOR) pause items, 119 smooth-turn items and 200 interruption items [S5]. It defines takeover rate (TOR) as the fraction of items in which the model takes the floor [S5]. VoiceChat's pause TORs are 15.3% (synthetic) and 25.5% (CANDOR). The next-best open-weight rows are MoshiRAG at 32.0% and PersonaPlex at 43.1% respectively [S1].[^qa-14] From the item counts, these rates correspond to 21/137 and 55/216 (our reconstruction). A 95% Wilson interval for 21/137 is 10.2–22.3% (our calculation). On smooth turn-taking, PersonaPlex is ahead: 90.8% against 81.5%, with latency of 170 ms against 448 ms [S1]. Our intervals for those two rates, 84.2–94.8% and 73.6–87.5%, overlap slightly (our calculation). VoiceChat takes the floor after all 200 interruptions; Moshi also reaches 100.0%, but with a response-quality score of 0.77 against VoiceChat's 4.33 [S1]. Quality is scored 0–5 by GPT-4o [S5].

Among closed systems, VoiceChat beats Gemini Live 2.0 on all seven reported metrics (we recounted). GPT-Realtime has lower pause TORs (1.0% and 12.0%) and a 100% smooth-turn TOR [S1]. Baseline rows come from published Full-Duplex-Bench results or from the baselines' own authors; none was re-run alongside VoiceChat [S1]. The Moshi, Freeze-Omni and Gemini Live rows match the benchmark paper [S5]. PersonaPlex's numbers come from its own authors, and Rajarshi Roy is on both author lists [S1]. The hardware behind the 448 ms latency is not stated [S1].[^qa-15]

**Backchannels, Full-Duplex-Bench 1.5.** This test uses 99 synthesised backchannel utterances in one speaker voice. GPT-4o sorts each response into Respond, Resume, Uncertain or Unknown from ASR transcripts [S6]. VoiceChat's distribution is 1/93/2/4%, identical in all four cells to Gemini Live 2.0's, as the paper notes [S1]. With 99 items, 93% is most consistent with 92 resumes; the Wilson interval for that count is 86.1–96.5% (our calculation). The benchmark paper's table also has a Nova Sonic row with 98% Resume [S6], which the anchor's table omits [S1]. The repository's limitations list says the model "may not yet be able to systematically handle user backchannelling" [S3].

**General ability, VoiceBench.** VoiceBench uses gpt-4o-mini to score four of its nine subsets (AlpacaEval, CommonEval, WildVoice and SD-QA) [S9]. A judge model therefore produces four of the nine numbers in the average. We confirmed the leaderboard's normalisation by recomputing Freeze-Omni's 55.20 from its subset scores, with the 1–5 scores multiplied by 20 [S8]. The same arithmetic on the paper's VoiceChat row gives 55.0, against the stated 55.1. That difference is within the rounding of one-decimal subset scores, so the 0.1-point gap to Freeze-Omni cannot be resolved (our calculation) [S1]. By subset, VoiceChat is ahead of Freeze-Omni on four (OpenBookQA, MMSU, BBH and AdvBench) and behind on five (our count) [S1].

The card's claim of "#2" among open full-duplex models holds only within the table's rows labelled FD (full-duplex). Across all six rows of the table, VoiceChat ranks fourth (our count) [S1][S2]. The leaderboard's "Nemotron 3 VoiceChat (V1)" row scores 58.10 [S8]. That it is the 12B early-access predecessor is our inference from the shared "V1" label [S15].

**Tool calling, Full-Duplex-Bench v3.** The benchmark has 100 human recordings from 12 speakers across four domains. GPT-4o judges argument accuracy, and Pass@1 requires exactly the expected tools with fully correct arguments [S7]. VoiceChat scores 82.5% tool-selection F1, 42.2% argument accuracy and 33.0% Pass@1 [S1]. The anchor compares only against Gemini Live 2.5 (78.6 / 59.3 / 49.0) and Gemini Live 3.1 (81.7 / 58.8 / 54.0), whose figures match the benchmark paper [S1][S7]. That paper also reports GPT-Realtime (87.6 / 68.0 / 60.0), Grok, Ultravox, and a cascade at 45.0 Pass@1 [S7]. Ultravox is open-weight and sits at 41.0 Pass@1 [S7]. Our count across those seven systems places VoiceChat second on tool selection and last on argument accuracy and Pass@1.[^qa-16] Wilson intervals for 33/100 and 41/100 overlap: 24.6–42.7% against 31.9–50.8% (our calculation). The benchmark ran its baselines through LiveKit [S7]; the harness used for VoiceChat is not stated in the paper [S1]. The model card adds a spoken BFCL-v3 average of 56.1% from AU-Harness, which does not appear in the paper [S2].

**Transcription and efficiency.** The RNN-T branch averages 9.02% word error rate (WER) on the eight Open ASR Leaderboard sets at 80 ms chunks and 8.28% at 160 ms [S1]. The standalone streaming ASR model it is built from reports 8.43% and 7.67% at the same chunk sizes [S10]. So VoiceChat's branch is 0.59 and 0.61 points worse (our calculation). The standalone model is ahead on 7 of 8 sets at 80 ms, AMI being the exception, and on 6 of 8 at 160 ms (our count). The paper does not make this comparison [S1]. On one H100 PCIe GPU with four concurrent streams, p95 latency is 118 ms per 160 ms chunk, about 1.36× real time. No other concurrency is reported, and lower-precision variants were not evaluated [S1].

## Critical assessment

**The design choice is untested.** None of the paper's seven tables removes or replaces a component: four report benchmarks, one the data mixture, one TTS turns and one ASR chunk sizes (our count, full text searched 2026-10-24) [S1]. So no score can be attributed to the parallel channel rather than to the 9B backbone, the 268k synthetic tool conversations or the token weights. The contrast with DuplexSLA is also narrower than a parallel-versus-serialised framing suggests. DuplexSLA already places actions in a channel separate from assistant audio [S12]. The anchor's distinction is that VoiceChat additionally separates agent text from calls [S1].[^qa-17]

> [!NOTE]
> **QA · Context.** DuplexSLA's design is closer to VoiceChat's than this paragraph suggests. Its assistant channel already carries its own text-anchor token next to the audio tokens, and its action channel is described as a dedicated lane so that actions do not compete "for slots in the assistant text channel" [S12]. The difference the anchor actually states is different [S1]. DuplexSLA serialises heterogeneous action tokens (delayed transcript, planning text, control labels and tool calls) in one rate-limited channel and interleaves its channels into a single token stream per 160 ms chunk [S12]. VoiceChat instead decodes text and calls through two parallel heads [S1].

**The baselines are selected.** The anchor uses three benchmarks whose papers carry stronger rows than the ones it shows: GPT-Realtime and Ultravox on v3 [S7], and Nova Sonic on 1.5 [S6].[^qa-18] Ultravox is open-weight and completes more v3 tasks [S7]. So the paper's "first fully open" claim rests on the full-duplex qualifier, and the paper never discusses whether Ultravox meets it [S1].

**Measurement and affiliation.** GPT-4o is the quality judge in Full-Duplex-Bench 1.0 [S5], the behaviour classifier in 1.5 [S6] and the argument judge in v3 [S7], and gpt-4o-mini scores four VoiceBench subsets [S9]. The anchor reports no human check of any of these judges [S1]. Two of the four v3 authors, Chen Chen and Zhehuai Chen, are NVIDIA researchers on the VoiceChat author list [S1][S7]. Whether the RNN-T endpointing fallback, which injects BOS or EOS tokens heuristically, was active during the turn-taking benchmarks is not stated in the paper [S1].

**The documents disagree.** The paper names Nemotron-Nano-9B-v2-Base as the backbone [S1]. The card, the Hugging Face base-model tag and the released combine config name the post-trained NVIDIA-Nemotron-Nano-9B-v2 [S2][S3], and the Nano 2 report lists the two as separate checkpoints [S11].[^qa-19] The repository says the model was not explicitly trained for alignment [S3], yet the paper's SFT mixture devotes 3.4% to spoken safety [S1]. The paper's TTS conditions on a 3-second reference voice [S1], while the released checkpoint has one fixed voice and no cloning [S3].

> [!NOTE]
> **QA · Context.** The paper is not internally consistent on the backbone either. Section 2.1 names Nemotron-Nano-9B-v2-Base, but its Limitations section calls the backbone "NVIDIA-Nemotron-Nano-9B-v2", and its Appendix D template is adapted from the post-trained NVIDIA-Nemotron-Nano-9B-v2 release [S1]. The released combine config loads `nvidia/NVIDIA-Nemotron-Nano-9B-v2` [S3].

**Reproducibility.** Public: the weights, under an OpenMDW-1.1 LICENSE file whose text grants use without restriction beyond notice retention and a patent-litigation termination (we read it) [S2].[^qa-20] Also public: training and inference code under Apache-2.0 [S3], and an RNN-T tokenizer [S2]. The weights are a single 44.4 GB file [S2], and inference needs an 80 GB GPU [S3]. Recent commits are by the handles virajkarandikar and vtrinh-nvidia; that these are authors Viraj Karandikar and Viet Anh Trinh is our inference [S1][S3].

Not found in what we searched on 2026-10-24: training data, evaluation outputs, and the paper's CPT and SFT hyperparameters.[^qa-21] We opened all four files in the branch's configuration folder. One merges checkpoints and runs a single step; the other three are TinyLlama-based templates [S3]. We found no independent replication of the 11B model. The only outside numbers we found are Artificial Analysis's figures for the 12B predecessor, and the article does not say who ran the tests [S15].[^qa-22]

> [!TIP]
> **QA · Reproducible in part.** QA confirmed the following are public. The 44.4 GB `model.safetensors` checkpoint with an RNN-T tokenizer and an OpenMDW-1.1 LICENSE [S2]. Apache-2.0 code on the `nemotron-labs-voicechat` branch, including `duplex_stt_model.py`, the offline inference scripts and a combine config [S3]. The paper's optimizer settings in its Section 3.2 [S1]. The training data and per-item evaluation outputs are not released. The Full-Duplex-Bench v1.5 paper points to its own code and data, so the benchmark side can be re-run [S6].

## Connections

Moshi's inner monologue couples text and audio inside one model [S13]. VoiceChat goes further and gives speech to a separate TTS model that only follows the text timeline [S1], which makes speech quality a property of the decoder. Our [FireRedAudio post](../published/2026-10-16-fireredaudio-decoupled-audio-representations.md) examined separate pathways for audio understanding and generation. The [StepAudio 3 Gen post](../published/2026-10-23-stepaudio-3-gen-discrete-rvq-audio.md) raised the same caution about vendor-run evaluations, and the [mental-health judge-validation post](../published/2026-10-22-mental-health-benchmarks-judge-validation.md) dealt with unvalidated LLM judges.

Against cascades, the v3 benchmark's Whisper → GPT-4o → TTS pipeline scores 45.0 Pass@1 with 10.12 s latency [S7]. Freeze-Omni keeps its LLM frozen [S14], whereas VoiceChat trains its backbone. On VoiceBench, VoiceChat is ahead on the knowledge subsets and behind on the open-ended ones [S1]. Whether the training regime causes that difference is untested (our reading).

## Open questions

- Does the dedicated function head beat serialising calls into the text stream when data and compute are matched? A two-arm retrain from the released code would answer it [S3].
- Can argument grounding close the gap between selection (82.5%) and arguments (42.2%) without the tool-count limit of five per session that the paper recommends [S1]?
- How do the reported figures change with natural backchannels, decoding settings stated, and the endpointing fallback switched off [S1][S6]?
- Why does the 11B release score below the leaderboard's V1 entry on VoiceBench (55.1 against 58.10) [S1][S8]? In our view, an independent v3 run under LiveKit would be the most informative next check.

## Sources

S1. [NemotronLabs VoiceChat: An Open Full-duplex Speech-to-Speech Model with Tool Calling Capabilities (arXiv 2609.21967v2; v1 2026-09-18)](https://arxiv.org/abs/2609.21967v2) · preprint · B · published 2026-10-01 · accessed 2026-10-24
S2. [NVIDIA NemotronLabs VoiceChat 11B model card, LICENSE and file listing on Hugging Face](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) · lab-post · B · published 2026-08-03 · accessed 2026-10-24
S3. [NVIDIA-NeMo/Speech, nemotron-labs-voicechat branch (README, configs, duplex_stt_model.py; latest commit date shown 2026-08-11)](https://github.com/NVIDIA-NeMo/Speech/tree/nemotron-labs-voicechat) · code · B · published 2026-08-11 · accessed 2026-10-24
S4. [NeurIPS 2026 virtual site: NemotronLabs VoiceChat poster, Real-Time Multimodal Conversational AI workshop (page date not seen, field set to access date)](https://neurips.cc/virtual/2026/166988) · peer-reviewed · B · published 2026-10-24 · accessed 2026-10-24
S5. [Full-Duplex-Bench: A Benchmark to Evaluate Full-Duplex Spoken Dialogue Models on Turn-taking Capabilities (arXiv 2503.04721v3)](https://arxiv.org/abs/2503.04721v3) · preprint · B · published 2025-08-16 · accessed 2026-10-24
S6. [Full-Duplex-Bench v1.5: Evaluating Overlap Handling for Full-Duplex Speech Models (arXiv 2507.23159v4)](https://arxiv.org/abs/2507.23159v4) · preprint · B · published 2026-04-26 · accessed 2026-10-24
S7. [Full-Duplex-Bench-v3: Benchmarking Tool Use for Full-Duplex Voice Agents Under Real-World Disfluency (arXiv 2604.04847v1)](https://arxiv.org/abs/2604.04847v1) · preprint · B · published 2026-04-06 · accessed 2026-10-24
S8. [VoiceBench leaderboard (page date not seen, field set to access date)](https://matthewcym.github.io/VoiceBench/) · dataset · B · published 2026-10-24 · accessed 2026-10-24
S9. [VoiceBench repository README (scoring instructions; date is the latest news entry)](https://github.com/MatthewCYM/VoiceBench) · code · B · published 2026-04-20 · accessed 2026-10-24
S10. [nemotron-speech-streaming-en-0.6b model card (cache-aware FastConformer-RNNT)](https://huggingface.co/nvidia/nemotron-speech-streaming-en-0.6b) · lab-post · B · published 2026-03-13 · accessed 2026-10-24
S11. [NVIDIA Nemotron Nano 2: An Accurate and Efficient Hybrid Mamba-Transformer Reasoning Model (arXiv 2508.14444v4)](https://arxiv.org/abs/2508.14444v4) · technical-report · B · published 2025-09-02 · accessed 2026-10-24
S12. [DuplexSLA: A Full-Duplex Spoken Language Model with Synchronized Speech, Language, and Action (arXiv 2605.20755v2)](https://arxiv.org/abs/2605.20755v2) · preprint · B · published 2026-06-11 · accessed 2026-10-24
S13. [Moshi: a speech-text foundation model for real-time dialogue (arXiv 2410.00037v2)](https://arxiv.org/abs/2410.00037v2) · technical-report · B · published 2024-10-02 · accessed 2026-10-24
S14. [Freeze-Omni: A Smart and Low Latency Speech-to-speech Dialogue Model with Frozen LLM (ICML 2025, PMLR 267)](https://proceedings.mlr.press/v267/wang25aw.html) · peer-reviewed · A · published 2025-10-06 · accessed 2026-10-24
S15. [NVIDIA Nemotron 3 VoiceChat: Leading the Open Weights Frontier of Conversational Dynamics vs. Speech Reasoning (Artificial Analysis)](https://artificialanalysis.ai/articles/nemotron-3-voicechat-leader-speech-pareto) · blog · C · published 2026-03-13 · accessed 2026-10-24

## QA notes

[^qa-1]: **Verified** — the [S2] card's licence field and the LICENSE file both give OpenMDW-1.1, and the weights are downloadable from the repository.
[^qa-2]: **Contradicted** — [S2]'s safetensors header (1,632 tensors, read by QA) totals 11,095,371,286 values, as the post says. 262,181 of them are 64-bit integers, so they are not all 32-bit floats. The sentence has been corrected; see the CAUTION callout below the TL;DR.
[^qa-3]: **Verified** — [S1] v2 has seven tables: FDB 1.0, FDB 1.5, VoiceBench, FDB 3.0, data mixture, TTS turns and ASR chunk sizes. QA found no ablation; the word "ablat" does not appear in the text.
[^qa-4]: **Verified** — 33.0% Pass@1 is in Table 4 of [S1]. [S7] reports 100 recordings and six systems, with Ultravox lowest at 0.410 Pass@1. Chen Chen and Zhehuai Chen (NVIDIA) are two of the four [S7] authors and appear on [S1]'s list.
[^qa-5]: **Verified** — 93% Resume is in Table 2 of [S1]. [S6] describes 99 synthesised backchannels and lists Sonic at 0.98 Resume; [S1]'s Table 2 has no Sonic row.
[^qa-6]: **Verified** — 55.1 and 55.2 are in Table 3 of [S1]. QA recomputed the paper's VoiceChat subset scores, with 1–5 scores multiplied by 20, and got 55.0. Freeze-Omni's leaderboard subsets in [S8] give 55.20.
[^qa-7]: **Supported with caveat** — the first page of the branch's commit history [S3] runs from 2026-07-29 to 2026-08-11, with handles virajkarandikar and vtrinh-nvidia. The history has further pages, so 2026-07-29 is the oldest date QA saw, not necessarily the first VoiceChat commit.
[^qa-8]: **Contradicted** — the [S4] listing names 39 authors, not 41. The sentence has been corrected; see the CAUTION callout below this paragraph.
[^qa-9]: **Supported with caveat** — [S15] (2026-03-13) describes a 12B "Nemotron 3 VoiceChat (V1)" offered through early-access applications. The article does not call it a predecessor of the 11B release; that link is an inference.
[^qa-10]: **Verified** — [S1] Section 2.2 gives fusion weights 1, 1 and 2 and a separate function head; Appendix B says the backbone has two heads reading the fused input. Section 2.1 gives the 80 ms frame rate and 1,024-dimensional encoder states.
[^qa-11]: **Contradicted** — [S1] Section 2.2 says the call span is trained with text padding and silenced user audio. Appendix B says incoming audio does not condition generation during tool execution. The sentence has been corrected; see the CAUTION callout below this paragraph.
[^qa-12]: **Supported with caveat** — [S1] Appendix A.1 says SFT draws on text corpora rendered with TTS "rather than from natively recorded conversational speech". However, its Table 5 includes a "Natural voice conversations" bucket (sampler weight 0.08, about 4.2k h), and the [S2] card says training blends real audio datasets with synthetic speech. Not all SFT data is TTS-rendered text.
[^qa-13]: **Verified** — QA searched the [S1] v2 text. "seed", "variance", "confidence" and "greedy" do not appear, and "temperature" appears only in a tool-call example. All ± values are in Table 6 (TTS), and its caption does not define them.
[^qa-14]: **Verified** — Table 1 of [S1]: VoiceChat 15.3 / 25.5. Among the other open-weight rows, the lowest synthetic TOR is MoshiRAG's 32.0 and the lowest CANDOR TOR is PersonaPlex's 43.1. Item counts come from [S5] Table II, and QA reproduced the Wilson intervals.
[^qa-15]: **Supported with caveat** — no hardware is given next to Table 1 of [S1]. Appendix C.4 does say that "all inference measurements for the baseline system" ran on a single H100 PCIe 80 GB. Whether that sentence covers the FDB latency runs is not stated.
[^qa-16]: **Verified** — from [S7] Table 2 and [S1] Table 4. Tool selection: GPT-Realtime 0.876 > VoiceChat 0.825 > the rest. VoiceChat's argument accuracy (0.422) is below Ultravox's 0.513, and its Pass@1 (0.330) is below Ultravox's 0.410. QA reproduced the Wilson intervals 24.6–42.7% and 31.9–50.8%.
[^qa-17]: **Supported with caveat** — [S1] states the contrast as DuplexSLA serialising action tokens in a shared channel. As the NOTE below explains, DuplexSLA also keeps an assistant text anchor separate from its action lane [S12].
[^qa-18]: **Supported with caveat** — the stronger omitted rows on v3 [S7] and on 1.5 [S6] are confirmed. The sentence says "three benchmarks" but names only two. The only third case QA found is VoiceBench: the leaderboard [S8] lists the full-duplex "Nemotron 3 VoiceChat (V1)" row at 58.10, which [S1]'s Table 3 omits. Full-Duplex-Bench 1.0's paper has no stronger row than those [S1] shows.
[^qa-19]: **Supported with caveat** — [S1] Section 2.1 and reference [18] name the -Base model, while [S2] (base_model tag) and [S3] (combine config) name NVIDIA-Nemotron-Nano-9B-v2. [S11] lists both checkpoints. [S1]'s own Limitations section also uses the post-trained name; see the NOTE below this paragraph.
[^qa-20]: **Supported with caveat** — the OpenMDW-1.1 text in [S2] grants rights "without restriction", subject to notice retention on distribution. Its termination clause covers lawsuits alleging patent or copyright infringement, not patent suits alone.
[^qa-21]: **Supported with caveat** — this refers to the released files. The paper itself states its optimizer settings (AdamW, learning rate 5e-5, 2,500 warmup steps, clipping 2.0/5.0) in Section 3.2 [S1]. The released `nemotron-labs-voicechat.yaml` does not reproduce them: its learning rates are 4e-5 and 3e-4 and it sets `max_steps: 1` [S3]. The other three configs load TinyLlama [S3].
[^qa-22]: **Supported with caveat** — a web search on 2026-10-24 also found no independent replication. [S15] does not say who ran its Full-Duplex-Bench numbers, but it calls Big Bench Audio "our" benchmark, which suggests Artificial Analysis ran that test.

## Disclosure

> *Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
