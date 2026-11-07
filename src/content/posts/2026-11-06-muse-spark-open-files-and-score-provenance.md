---
title: 'Muse Spark Open from its files: where 816B and 42B come from, and who scored its benchmark table'
slug: 2026-11-06-muse-spark-open-files-and-score-provenance
dek: Meta's open-weight model stores 822.04B parameters; its public training configuration reproduces the card's 816B and 42B when embeddings and encoders are excluded, and its benchmark table mixes Meta runs with third-party scores.
date: 2026-11-06 17:19:00-07:00
type: research
status: published
cycle: 23
tags:
- open-weights
- mixture-of-experts
- evaluation
- benchmarks
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-11-06 17:34:25-07:00
  sources_by_grade:
    A: 1
    B: 17
    C: 1
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
    caution: 0
    tip: 1
sources:
- id: S1
  title: Muse Spark Open model card (meta-models/Muse-Spark-Open-816B-A42B, Hugging Face)
  url: https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B
  type: lab-post
  grade: B
  published: 2026-10-15
  accessed: 2026-11-06
- id: S2
  title: Muse Spark Open Evaluation Methodology (Meta PDF; header dated October 2026, day not seen; field set to the card's 2026-10-15 release date)
  url: https://research.meta.ai/static/muse-spark-open-evaluation-methodology
  type: technical-report
  grade: B
  published: 2026-10-15
  accessed: 2026-11-06
- id: S3
  title: Hugging Face Hub API record for meta-models/Muse-Spark-Open-816B-A42B (file list, shard sizes, header-derived parameter counts)
  url: https://huggingface.co/api/models/meta-models/Muse-Spark-Open-816B-A42B?blobs=true
  type: code
  grade: B
  published: 2026-10-15
  accessed: 2026-11-06
- id: S4
  title: Hugging Face Hub API record for meta-models/Muse-Spark-Open-816B-A42B-NVFP4 (file list, shard sizes, header-derived parameter counts)
  url: https://huggingface.co/api/models/meta-models/Muse-Spark-Open-816B-A42B-NVFP4?blobs=true
  type: code
  grade: B
  published: 2026-10-15
  accessed: 2026-11-06
- id: S5
  title: Muse Model License, version Muse Spark Open (LICENSE.md in the BF16 repository)
  url: https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B/resolve/main/LICENSE.md
  type: code
  grade: B
  published: 2026-10-15
  accessed: 2026-11-06
- id: S6
  title: Build with Muse Spark Open (Meta developer blog)
  url: https://dev.meta.ai/resources/blog/build-with-muse-spark-open
  type: lab-post
  grade: B
  published: 2026-10-15
  accessed: 2026-11-06
- id: S7
  title: Muse Spark Open NVFP4 model card (README.md in meta-models/Muse-Spark-Open-816B-A42B-NVFP4)
  url: https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B-NVFP4/resolve/main/README.md
  type: lab-post
  grade: B
  published: 2026-10-15
  accessed: 2026-11-06
- id: S8
  title: Muse Spark Open (Xhigh) on Artificial Analysis (model page; page date not seen; field set to the release date the page's FAQ gives)
  url: https://artificialanalysis.ai/models/muse-spark-open
  type: dataset
  grade: B
  published: 2026-10-15
  accessed: 2026-11-06
- id: S9
  title: Artificial Analysis Intelligence Benchmarking Methodology, with version history (page date not seen; field set to 2026-11-01 from the v5.0.1 entry, which reads November 2026 to current)
  url: https://artificialanalysis.ai/methodology/intelligence-benchmarking
  type: technical-report
  grade: B
  published: 2026-11-01
  accessed: 2026-11-06
- id: S10
  title: FORTRESS leaderboard, Scale Labs (page date not seen; field set to the access date)
  url: https://labs.scale.com/leaderboard/fortress
  type: dataset
  grade: B
  published: 2026-11-06
  accessed: 2026-11-06
- id: S11
  title: 'FORTRESS: Frontier Risk Evaluation for National Security and Public Safety (arXiv 2506.14922v2)'
  url: https://arxiv.org/abs/2506.14922
  type: preprint
  grade: B
  published: 2025-06-24
  accessed: 2026-11-06
- id: S12
  title: MCP-Atlas leaderboard, Scale Labs (page text reads Updated April 8, 2026, though it lists rows marked NEW)
  url: https://labs.scale.com/leaderboard/mcp_atlas
  type: dataset
  grade: B
  published: 2026-04-08
  accessed: 2026-11-06
- id: S13
  title: A StrongREJECT for Empty Jailbreaks (arXiv 2402.10260v2)
  url: https://arxiv.org/abs/2402.10260
  type: preprint
  grade: B
  published: 2024-08-27
  accessed: 2026-11-06
- id: S14
  title: Introducing NVFP4 for Efficient and Accurate Low-Precision Inference (NVIDIA Technical Blog)
  url: https://developer.nvidia.com/blog/introducing-nvfp4-for-efficient-and-accurate-low-precision-inference/
  type: lab-post
  grade: B
  published: 2025-06-24
  accessed: 2026-11-06
- id: S15
  title: Meta releases Wonder, opens Spark (The Batch, DeepLearning.AI)
  url: https://www.deeplearning.ai/the-batch/meta-releases-wonder-opens-spark/
  type: news
  grade: C
  published: 2026-10-23
  accessed: 2026-11-06
- id: S16
  title: torchtitan/models/muse_spark/flavors.py, pytorch/torchtitan main branch (Muse Spark 816B-A42B model configuration; commit date not seen; field set to the 2026-10-15 release date)
  url: https://raw.githubusercontent.com/pytorch/torchtitan/main/torchtitan/models/muse_spark/flavors.py
  type: code
  grade: B
  published: 2026-10-15
  accessed: 2026-11-06
- id: S17
  title: torchtitan_recipes/models/muse_spark.py, pytorch/torchtitan main branch (training recipes that load the released checkpoint; commit date not seen; field set to the 2026-10-15 release date)
  url: https://raw.githubusercontent.com/pytorch/torchtitan/main/torchtitan_recipes/models/muse_spark.py
  type: code
  grade: B
  published: 2026-10-15
  accessed: 2026-11-06
- id: S18
  title: Introducing Muse Spark Open, The Most Capable US Open-Weight Model to Date (Meta research blog)
  url: https://research.meta.ai/blog/muse-spark-open
  type: lab-post
  grade: B
  published: 2026-10-15
  accessed: 2026-11-06
- id: S19
  title: A StrongREJECT for Empty Jailbreaks (NeurIPS 2024 Datasets and Benchmarks Track, Advances in Neural Information Processing Systems 37; added by QA; Crossref gives the year 2024 only, so the field is set to the first day of that year)
  url: https://proceedings.neurips.cc/paper_files/paper/2024/hash/e2e06adf560b0706d3b1ddfca9f29756-Abstract.html
  type: peer-reviewed
  grade: A
  published: 2024-01-01
  accessed: 2026-11-06
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 19 (A 1 · B 17 · C 1 · D 0)
> · Claims checked: 51 (verified 47 · caveat 4 · unverified 0 · contradicted 0)
> · Checked 2026-11-06 17:34 MST by the QA agent

## TL;DR

- The card's 816B-total and 42B-active figures appear to count transformer blocks alone: Meta's public TorchTitan configuration reproduces both once embeddings, encoders and norms are left out, while the Hub stores more parameters in all (our calculation) [S1, S3, S16].[^qa-1]
- The central design choices (routing among 256 experts inside a compressed 4096-dimensional space, and interleaved sliding-window and global attention) come with no technical report and no ablation at matched data and compute, so we credit no score to them; the open-weights safety post-training is likewise asserted, not isolated [S1, S16, S18].[^qa-2]
- Repeats are sampling draws on one checkpoint, not training runs: OSWorld-Verified averages four attempts per task and two multimodal sets average five runs; the card states no seeds and Meta's table carries no confidence intervals [S1, S2].[^qa-3]
- On FORTRESS, an adversarial-misuse benchmark run by Scale AI, the card reports a risk score of 5.8 while the leaderboard showed 7.64 ± 1.15 when we checked; every comparator cell matches it to rounding [S1, S10].[^qa-4]
- The card's Artificial Analysis Intelligence Index of 39 was taken under an older index version; the current page, on a revised set of component evaluations, shows 25 [S2, S8, S9].[^qa-5]

## Why now

Meta released Muse Spark Open on 2026-10-15, the date in both the model card's overview table and the license header [S1, S5]. The BF16 and NVFP4 repositories were created on the Hub on 2026-09-15 and last modified on 2026-10-15 at 09:46 and 11:18 Mountain time respectively; access is gated with manual approval [S3, S4]. Meta's research blog calls it the most capable U.S. open-weight model to date and says a full evaluation report is coming [S18]. What exists now is the card, an eight-page evaluation methodology document, a developer post and integration code, including a model configuration in PyTorch's TorchTitan training library [S1, S2, S6, S16].

With no paper, this post asks three narrower questions: what the files and code show, which card numbers trace to a scorer outside Meta, and what can be recomputed.

## Background

A sparse mixture-of-experts (MoE) transformer replaces each feed-forward block with $E$ expert networks and a router that sends each token to the top $k$ of them, so the parameters touched per token (the "active" count) are a small fraction of the total. Muse Spark Open's card gives $E = 256$, $k = 8$, 62 layers, hidden size 8192, grouped-query attention with 128 query heads and 16 key-value heads of dimension 64, and untied input and output embeddings over a 202,048-token vocabulary [S1]. A separate 1.8B-parameter Perception Encoder handles vision [S1].

NVFP4 is NVIDIA's 4-bit floating-point format for Blackwell GPUs. Each value uses an E2M1 layout, each block of 16 values shares an FP8 (E4M3) scale, and each tensor carries a second FP32 scale; NVIDIA puts the cost at 4.5 bits per value [S14]. Meta's developer post says of its NVFP4 checkpoint: "Only the experts are quantized" [S6].

Model-card tables mix producers: the lab's own runs, independent harnesses such as Artificial Analysis or Scale AI's leaderboards, and other labs' self-reports. Meta's methodology document names the producer of each cell [S2].

## The core idea

Without a paper, the problem is verification, not method. Let the card make claims $C$ (parameter counts, scores), let the released files and code be $F$, and let third-party records be $T$. For each claim we ask whether it can be recomputed from $F$, cross-checked against $T$, or only taken on trust.

**The MoE block.** The TorchTitan configuration that loads the released checkpoint [S17] defines every one of the 62 layers as an MoE layer with an unusual shape [S16]. A sigmoid-scored router reads the full 8192-dimensional hidden state $x$; a `pooler` projects $x$ down to 4096 dimensions; each expert is a gated feed-forward network operating entirely at width 4096; and an `unpooler` maps the weighted sum back up.[^qa-6] Ignoring norms,

$$
\mathrm{MoE}(x) = U \sum_{i \in \mathcal{T}_8(x)} g_i(x)\, \mathrm{FFN}_i(P x), \qquad P \in \mathbb{R}^{4096 \times 8192},\; U \in \mathbb{R}^{8192 \times 4096},
$$

where $\mathcal{T}_8(x)$ is the top 8 of 256 router scores [S16]. Each expert then holds $3 \times 4096^2 \approx 50.3$M parameters (gate, up and down projections), half of what an expert reading the full 8192-dimensional state with the same hidden size would hold (our calculation from [S16]). We found nothing in the card, the developer post, the research blog or the code that explains or tests this compression against a full-width alternative.

**The attention layout.** Layers 1, 5, 9, …, 61, counting from 0 (16 of 62), use global attention without rotary position embeddings; the other 46 use rotary embeddings and a 2,048-token sliding window [S16].[^qa-7] A full key-value cache in BF16 would cost $2 \times 16 \times 64 \times 2 = 4{,}096$ bytes per token per layer. With only 16 layers caching every token, that is 65,536 bytes per token, about 66 GB per million tokens, plus a fixed 0.39 GB for the windowed layers, against about 254 GB if all 62 layers were global (our calculation from [S16]). This quantifies the developer post's claim that sliding windows keep long contexts cheap [S6].[^qa-8]

**The mechanism the card asserts.** The card attributes the open release's robustness to "additional safety post-training" [S1]. None of the released materials we read reports a comparison of the checkpoint before and after that step, so the safety numbers below describe the released checkpoint, not the effect of the training.[^qa-9]

## Evidence

**Stored parameters.** The Hub's record for the BF16 repository reports 821,906,490,368 BF16 and 130,039,296 FP32 parameters, 822,036,529,664 in total, derived from the safetensors shard headers [S3]. The 65 shards sum to 1,644,333,393,864 bytes, within 255,944 bytes (about 3.9 KB of header per shard) of two bytes per BF16 and four per FP32 parameter (our calculation from [S3]).[^qa-10]

**Where 816B and 42B come from.** From the configuration [S16]: routed experts total $62 \times 256 \times 50.3\text{M} = 798.86$B; attention (fused query-key-value, output and output-gate projections) adds 13.52B; pooler, unpooler and router add 4.29B. These transformer-block parameters sum to 816.68B. Counting only the 8 routed experts a token uses in each layer gives 42.78B active. Adding the two embedding matrices (3.31B) gives 819.99B, leaving 2.05B of the stored total for the vision and audio encoders, adapters and norms, consistent with the card's 1.8B vision encoder (all our calculation from [S1, S3, S16], with bias-free projections, as configured). Our reading is that the card's 816B and 42B count transformer blocks and truncate rather than round. The card does not define either figure [S1].[^qa-11]

**What the NVFP4 build quantizes.** The NVFP4 repository reports the same 822,036,529,664 total, split into 773,094,113,280 parameters under an unsigned 8-bit storage type, 48,812,377,088 in BF16 and 130,039,296 in FP32 [S4]. The quantized count equals the routed experts of exactly 60 layers ($60 \times 256 \times 3 \times 4096^2$), so the experts of two layers, which ones is not stated, stay in BF16 alongside attention and embeddings (our calculation from [S4, S16]). The 127 shards sum to 533,011,023,472 bytes, within 673,392 bytes of storing those 773.09B parameters at 4.5 bits and the rest at native precision (our calculation from [S4, S14]), and consistent with the developer post's figure of about 530 GB [S6].

**Who produced each score.** Per the methodology document, of the 22 Muse Spark Open cells in the card's table, 8 come from Artificial Analysis, 3 from Scale AI (MCP-Atlas, HLE-Diamond, FORTRESS), 2 from official benchmark services (JobBench's leaderboard, and Toolathlon's evaluation service queried through Meta's API) and 9 from Meta's internal runs (our count from [S2]).[^qa-12] The card bolds eight Muse Spark Open cells as best in their row; four (JobBench, MCP-Atlas, HLE-Diamond, AA-Omniscience) were scored outside Meta and four (ZeroBench, SimpleVQA, IntPhys 2, StrongREJECT v2) are Meta's own runs (our count from [S1, S2]).[^qa-13] Where the model trails, the cells are mostly Artificial Analysis numbers: the Intelligence Index (39 against 45 for GLM 5.3), GDPval-AA v2, Terminal-Bench 2.1, GPQA Diamond and both coding rows [S1, S2].[^qa-14]

**Units and repeats.** OSWorld-Verified uses a 361-task split without Google Drive tasks, and mean per-task reward averaged over four attempts per task; Meta ran it for its model and one comparator, while Kimi K3's 84.8 is self-reported [S2].[^qa-15] BabyVision (388 questions) and SimpleVQA (2,024 questions) are means of five runs; for BabyVision the document attributes the runs to Muse Spark and Inkling, omitting Open from the name [S2]. ZeroBench (100 questions) credits a question if any of five samples is judged correct [S2].[^qa-16] We searched the card and the methodology document on 2026-11-06 for seed, repeat, rerun, interval, bootstrap, ablation and variance: the hits are the repeats above, and neither reports confidence intervals or seeds [S1, S2].[^qa-17]

**Judges.** GPT-OSS-120B grades BabyVision, SimpleVQA, ZeroBench and WorldVQA against reference answers; MCP-Atlas uses an LLM judge on per-task claims; StrongREJECT v2 uses the StrongREJECT autograder [S2]. The methodology document, across its eight pages, reports no check of these judges against human labels for this evaluation [S2]. The StrongREJECT authors validated their autograder against human judgments [S13],[^qa-18] but on the original benchmark, not Meta's internal adaptation.

**Second contrasts.** FORTRESS pairs expert-written adversarial prompts, scored by rubrics of 4 to 7 binary questions, with benign twins that measure over-refusal [S11]. Meta says its cells come from Scale's leaderboard on the private split [S2]; the page itself describes public and private FORTRESS data plus a private prompt set [S10]. On 2026-11-06 that page listed Muse Spark Open second, with an average risk score of 7.64 ± 1.15; the card's 5.8 lies outside the interval [S1, S10].[^qa-19] The five comparator cells match the leaderboard within 0.05 (Kimi K3's max-effort row at 26.65 against the card's 26.7; Nemotron 3 Ultra's leaderboard row is its NVFP4 variant) [S1, S10].[^qa-20] The page shows no date, so 7.64 may come from a later run. On MCP-Atlas, five comparator cells match Scale's leaderboard exactly, with intervals of ±2.15 to ±3.00 points; the leaderboard had no Muse Spark Open row when we checked, so the card's 89.2 is not visible there [S1, S2, S12].[^qa-21]

> [!NOTE]
> **QA · Context.** Both Scale leaderboards also list other Meta models, which are easy to confuse with this one. On 2026-11-06 the FORTRESS page showed "Muse Spark 1.1" at 12.40 ± 1.48 and "Muse Spark" at 20.22 ± 2.76 beside the `muse-spark-open` row, and the MCP-Atlas page showed "Muse Spark 1.1" at 88.10 ± 1.95 and "Muse Spark" at 82.20 ± 2.30 [S10, S12]. Neither of these is the open-weight release, so neither confirms or contradicts the card's 89.2. Meta's methodology document [S2] says Scale produced the Muse Spark Open MCP-Atlas result with the leaderboard's harness, but that run is not posted.

The card's Intelligence Index of 39 was sourced on 2026-10-07 under index v4.3 [S2].[^qa-22] Artificial Analysis has since moved to v5.0.1, which dropped GDPval-AA, SciCode, AA-LCR and Humanity's Last Exam and added HLE-Diamond, Terminal-Bench-Science and FrontierCode 2.0 [S9].[^qa-23] Its page now shows Muse Spark Open at 25, 12th of 26, against a median of 23 for comparable models [S8].[^qa-24] The version history lists component changes but gives no conversion between versions [S9], so the drop is a change of yardstick, not evidence of a regression.

**A recompute.** StrongREJECT v2 is Meta's internal set of 202 disallowed behaviors, each attacked under five conditions; the reported number is the mean of two attack success rates, behaviors broken without developer prompts and behaviors broken with them [S2]. That mean equals $(a+b)/404$ for integer counts $a, b$. Every value in the row fits: 0.5 corresponds to $a + b = 2$, and the comparators' 86.4, 80.7, 65.6, 62.9 and 66.6 to 349, 326, 265, 254 and 269, each within 0.12 of an integer (our calculation from [S1, S2]). Muse Spark Open's cell thus reflects two breaks summed across the two unions, against 254 to 349 for the comparators.[^qa-25]

**Over-refusal.** The same FORTRESS row in the card shows the cost: an over-refusal score of 17.4, the highest of the six models listed, against 2.7 for Kimi K3 [S1].

**Efficiency.** The speed figures in Meta's developer post and research blog are relative: speculative decoding on AMD MI355X gives 3.7× throughput for one request and 2.9× at 16 concurrent requests, with no absolute rate or engine-only baseline [S6]. Helion kernels give 1.03× to 3.95× at the kernel level but 3% end to end on an AMD MI350 [S18]. Artificial Analysis reports 148 output tokens per second without naming the provider [S8].[^qa-26]

## Critical assessment

**No report, no ablation.** The training-data section is a paragraph of source categories with no token counts [S1]. Nothing in the released materials isolates the effect of the pooled expert width, the roughly three-to-one ratio of sliding-window to global layers, global layers without rotary embeddings, or the safety post-training. We found no NVFP4 accuracy figures: the NVFP4 card drops the benchmark table entirely, and the one quantized-accuracy statement in Meta's materials is that AMD's FP8 build matches BF16 on GSM8K [S6, S7]. NVIDIA's NVFP4 accuracy results are for DeepSeek-R1 and do not transfer [S14].

**Mixed producers within a row.** The coding rows use each provider's preferred agent harness (Muse Code, Kimi Code, mini-swe-agent, Open Code, Claude Code), so a gap there confounds model and scaffold [S2]. Beam's AA-Omniscience cell is on the public split while the others are Artificial Analysis's numbers [S2]. Absent a common source, Meta takes "the highest comparable primary-metric value available" from its runs or self-reports [S2]; a maximum over noisy estimates biases cells upward, and the candidate count is not given (our reading).

**Self-built safety benchmark.** StrongREJECT v2's behaviors and attack libraries were curated by Meta, the same organization that did the safety post-training [S2]. The near-zero cell may partly reflect training against similar attacks (our reading). The independent FORTRESS leaderboard still ranks the model second for low risk [S10], which supports the direction of the claim, at 7.64 rather than 5.8.

**License scope.** The license defines derivatives to include models trained or distilled using the software's outputs, and products built on derivatives must display "Built with Muse Spark Open" [S5]. The card lists synthetic data generation as a use case [S1], so a model trained on Muse Spark Open outputs carries that duty. The $20 million revenue threshold applies to Model-as-a-Service offerings and triggers notification and a separate agreement [S5]; The Batch's summary, which describes use as permitted up to $20 million of revenue, is broader than the text [S15].

**Reproducibility.** Weights: yes, gated behind a form asking for legal name and date of birth [S1]. The Hub's configuration files are gated too (`config.json`, `generation_config.json` and `processor_config.json` returned HTTP 401 to us on 2026-11-06) [S3], but the TorchTitan configuration is public, along with fine-tuning recipes that load the checkpoint [S16, S17]. We found no release of the training data or of the original training pipeline. We found no link to Meta's internal evaluation harnesses in the card, the methodology document or the developer post [S1, S2, S6].[^qa-27]

> [!TIP]
> **QA · Reproducible in part.** The arithmetic in this post can be rerun without gated access. The Hub API records [S3, S4] give the per-dtype parameter counts and every shard size, and the public TorchTitan flavor `816B-A42B` [S16] gives every layer shape. QA re-derived 816,677,126,144 block parameters, 42,777,706,496 active parameters and the 60-layer NVFP4 expert count from these files on 2026-11-06. The weights and `config.json` remain behind Meta's manual approval (`config.json`, `generation_config.json` and `processor_config.json` returned HTTP 401 to QA as well).

## Connections

This post follows our read of [Mistral Large 4 from its files](../published/2026-10-30-mistral-large-4-open-checkpoint-sparse-attention.md), which also relied on shard headers and Hub metadata in the absence of a report. The provenance question echoes [the MiniCPM5-2B post](../published/2026-10-31-minicpm5-2b-open-model-score-provenance.md), and the low-precision experts recall [Nemotron 3.5 Bolt](../published/2026-11-01-nemotron-3-5-bolt-24gb-two-bit-experts.md). Artificial Analysis replaced Terminal-Bench 2.1 with Terminal-Bench 4.0, the benchmark [our post on Epoch's review](../published/2026-10-18-epoch-benchmark-reviews-terminal-bench-4.md) examined, in index v4.3 [S9]; Meta's card still reports 2.1 [S1].

The alternative release practice is the one NVIDIA used when introducing NVFP4: publish the quantized model's accuracy beside the reference precision on named benchmarks, so readers see the format's cost [S14]. The NVFP4 card carries no such comparison [S7]. On architecture, the closest comparison is the conventional MoE layer whose experts run at full model width; our reading is that Muse Spark Open's pooled experts trade per-expert capacity for more experts per parameter, and we found no experiment that measures what that trade buys.

## Open questions

- Which two layers keep BF16 experts in the NVFP4 build, and why those?
- How much accuracy does the NVFP4 checkpoint lose on agentic tasks relative to BF16?
- Is the FORTRESS leaderboard's 7.64 a later run, a different checkpoint or a different aggregation from the card's 5.8? A dated leaderboard history would settle it.
- Will Scale or Artificial Analysis independently rerun the Meta-run rows, especially OSWorld-Verified and the multimodal sets? Searching Artificial Analysis, the two Scale leaderboards and general web results on 2026-11-06, we found no independent rerun of those rows.
- What will the promised evaluation report add [S18]? We expect over-refusal to cost most in agentic use, where one refused benign step can end a task; no card benchmark measures that.

## Sources

S1. [Muse Spark Open model card (meta-models/Muse-Spark-Open-816B-A42B, Hugging Face)](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B) · lab-post · B · published 2026-10-15 · accessed 2026-11-06
S2. [Muse Spark Open Evaluation Methodology (Meta PDF; header dated October 2026, day not seen; field set to the card's 2026-10-15 release date)](https://research.meta.ai/static/muse-spark-open-evaluation-methodology) · technical-report · B · published 2026-10-15 · accessed 2026-11-06
S3. [Hugging Face Hub API record for meta-models/Muse-Spark-Open-816B-A42B (file list, shard sizes, header-derived parameter counts)](https://huggingface.co/api/models/meta-models/Muse-Spark-Open-816B-A42B?blobs=true) · code · B · published 2026-10-15 · accessed 2026-11-06
S4. [Hugging Face Hub API record for meta-models/Muse-Spark-Open-816B-A42B-NVFP4 (file list, shard sizes, header-derived parameter counts)](https://huggingface.co/api/models/meta-models/Muse-Spark-Open-816B-A42B-NVFP4?blobs=true) · code · B · published 2026-10-15 · accessed 2026-11-06
S5. [Muse Model License, version Muse Spark Open (LICENSE.md in the BF16 repository)](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B/resolve/main/LICENSE.md) · code · B · published 2026-10-15 · accessed 2026-11-06
S6. [Build with Muse Spark Open (Meta developer blog)](https://dev.meta.ai/resources/blog/build-with-muse-spark-open) · lab-post · B · published 2026-10-15 · accessed 2026-11-06
S7. [Muse Spark Open NVFP4 model card (README.md in meta-models/Muse-Spark-Open-816B-A42B-NVFP4)](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B-NVFP4/resolve/main/README.md) · lab-post · B · published 2026-10-15 · accessed 2026-11-06
S8. [Muse Spark Open (Xhigh) on Artificial Analysis (model page; page date not seen; field set to the release date the page's FAQ gives)](https://artificialanalysis.ai/models/muse-spark-open) · dataset · B · published 2026-10-15 · accessed 2026-11-06
S9. [Artificial Analysis Intelligence Benchmarking Methodology, with version history (page date not seen; field set to 2026-11-01 from the v5.0.1 entry, which reads November 2026 to current)](https://artificialanalysis.ai/methodology/intelligence-benchmarking) · technical-report · B · published 2026-11-01 · accessed 2026-11-06
S10. [FORTRESS leaderboard, Scale Labs (page date not seen; field set to the access date)](https://labs.scale.com/leaderboard/fortress) · dataset · B · published 2026-11-06 · accessed 2026-11-06
S11. [FORTRESS: Frontier Risk Evaluation for National Security and Public Safety (arXiv 2506.14922v2)](https://arxiv.org/abs/2506.14922) · preprint · B · published 2025-06-24 · accessed 2026-11-06
S12. [MCP-Atlas leaderboard, Scale Labs (page text reads Updated April 8, 2026, though it lists rows marked NEW)](https://labs.scale.com/leaderboard/mcp_atlas) · dataset · B · published 2026-04-08 · accessed 2026-11-06
S13. [A StrongREJECT for Empty Jailbreaks (arXiv 2402.10260v2)](https://arxiv.org/abs/2402.10260) · preprint · B · published 2024-08-27 · accessed 2026-11-06
S14. [Introducing NVFP4 for Efficient and Accurate Low-Precision Inference (NVIDIA Technical Blog)](https://developer.nvidia.com/blog/introducing-nvfp4-for-efficient-and-accurate-low-precision-inference/) · lab-post · B · published 2025-06-24 · accessed 2026-11-06
S15. [Meta releases Wonder, opens Spark (The Batch, DeepLearning.AI)](https://www.deeplearning.ai/the-batch/meta-releases-wonder-opens-spark/) · news · C · published 2026-10-23 · accessed 2026-11-06
S16. [torchtitan/models/muse_spark/flavors.py, pytorch/torchtitan main branch (Muse Spark 816B-A42B model configuration; commit date not seen; field set to the 2026-10-15 release date)](https://raw.githubusercontent.com/pytorch/torchtitan/main/torchtitan/models/muse_spark/flavors.py) · code · B · published 2026-10-15 · accessed 2026-11-06
S17. [torchtitan_recipes/models/muse_spark.py, pytorch/torchtitan main branch (training recipes that load the released checkpoint; commit date not seen; field set to the 2026-10-15 release date)](https://raw.githubusercontent.com/pytorch/torchtitan/main/torchtitan_recipes/models/muse_spark.py) · code · B · published 2026-10-15 · accessed 2026-11-06
S18. [Introducing Muse Spark Open, The Most Capable US Open-Weight Model to Date (Meta research blog)](https://research.meta.ai/blog/muse-spark-open) · lab-post · B · published 2026-10-15 · accessed 2026-11-06
S19. [A StrongREJECT for Empty Jailbreaks (NeurIPS 2024 Datasets and Benchmarks Track, Advances in Neural Information Processing Systems 37; added by QA; Crossref gives the year 2024 only, so the field is set to the first day of that year)](https://proceedings.neurips.cc/paper_files/paper/2024/hash/e2e06adf560b0706d3b1ddfca9f29756-Abstract.html) · peer-reviewed · A · published 2024-01-01 · accessed 2026-11-06

## QA notes

[^qa-1]: **Verified** — On 2026-11-06 QA recomputed the counts from the public `816B-A42B` flavor in [S16]. Transformer blocks hold 816,677,126,144 parameters, and the 8 routed experts used per token plus attention, pooler, unpooler and router come to 42,777,706,496. Both truncate to the card's 816B and 42B [S1]. The Hub stores 822,036,529,664 [S3]. The card never says what its figures count, so "count transformer blocks alone" is an inference. It is a strong one: the NVFP4 build's quantized count equals exactly 60 layers of experts with the shape in [S16] [S4].
[^qa-2]: **Verified** — The card links only to an evaluation-methodology document [S1], and the research blog says a full evaluation report is "available soon" [S18]. Neither document, nor the developer post or the TorchTitan code, contains an ablation of the pooled experts, the attention layout or the safety post-training [S6, S16]. One precision for readers: in [S16] the router scores the full 8192-dimensional state, and only the experts run in the compressed 4096-dimensional space.
[^qa-3]: **Verified** — [S2] gives four attempts per task for OSWorld-Verified and five runs each for BabyVision and SimpleVQA. A text search of [S1] and [S2] finds no seed, confidence interval, bootstrap or standard error.
[^qa-4]: **Verified** — On 2026-11-06 the FORTRESS leaderboard showed `muse-spark-open` second, at 7.64 ± 1.15 [S10]. The card's ARS is 5.8 [S1]. All five comparator ARS cells are within 0.05 of their leaderboard rows. The page carries no date, so QA could not establish when either number was produced.
[^qa-5]: **Verified** — [S2] states the 39 was sourced under v4.3 on 2026-10-07. The model page shows 25 under v5.0.1 [S8]. See qa-23 for which version changed the components.
[^qa-6]: **Verified** — In [S16], `_moe_config` gives every one of the 62 layers a router gate with `in_features=8192`, a sigmoid score function, top-8 of 256 experts, a bias-free 8192→4096 `pooler`, experts with input and hidden width 4096, and a 4096→8192 `unpooler`. The recipe file [S17] stages `meta-models/Muse-Spark-Open-816B-A42B` as its checkpoint.
[^qa-7]: **Verified** — [S16] sets `global_attention_layers=set(range(1, 62, 4))`, which is 16 layers. Those layers get `use_rope=False` and no window; the rest get `sliding_window_size=2048`.
[^qa-8]: **Supported with caveat** — The KV-cache arithmetic checks out: 4,096 bytes per token per layer, 65.5 GB per million tokens for 16 global layers, 0.39 GB for the windowed layers, and 254 GB if all 62 layers were global. But the developer-post line it "quantifies" is about the DSpark draft model, which "Stays cheap at long context by using the sliding-window attention in Muse Spark Open" [S6]. The post does not make that claim about the main model's own KV cache.
[^qa-9]: **Verified** — The card says this version "has additional safety post-training to make it more robust against misuse" [S1]. QA found no before-and-after comparison in [S1], [S2], [S6] or [S18].
[^qa-10]: **Verified** — From the Hub API record [S3], read 2026-11-06: BF16 821,906,490,368 and F32 130,039,296 parameters, totalling 822,036,529,664. The 65 shards sum to 1,644,333,393,864 bytes, which is 255,944 bytes (3,938 bytes per shard) above 2 bytes per BF16 parameter plus 4 per F32 parameter.
[^qa-11]: **Verified** — QA reproduced each figure from [S16]: experts 798.86B, attention 13.52B (fused QKV, output and output-gate projections, all bias-free), pooler, unpooler and router 4.29B, and embeddings 2 × 202,048 × 8192 = 3.31B. The embedding figure matches the card's "≈1.66B" each [S1]. That leaves 2.05B of the stored total for everything else.
[^qa-12]: **Verified** — QA counted the producers per benchmark in [S2]. Artificial Analysis: Intelligence Index, GDPval-AA v2, AA-Omniscience, SciCode, GPQA Diamond, DeepSWE, SWE-Atlas-QnA and Terminal-Bench 2.1 (8). Scale AI: MCP-Atlas, HLE-Diamond and FORTRESS (3). Official services: JobBench and Toolathlon (2). Internal runs: OSWorld, HLE with tools, ZeroBench, BabyVision, SimpleVQA, WorldVQA, IntPhys 2, Video-MME v2 and StrongREJECT v2 (9).
[^qa-13]: **Verified** — In the card's table [S1], the bolded Muse Spark Open cells are JobBench, MCP-Atlas, HLE-Diamond, AA Omniscience, ZeroBench, SimpleVQA, IntPhys2 and StrongREJECT v2.
[^qa-14]: **Supported with caveat** — Muse Spark Open trails the row's best value in 13 rows of [S1]. Artificial Analysis produced 7 of them: the Intelligence Index, GDPval-AA v2, SciCode, GPQA Diamond, DeepSWE, SWE-Atlas-QnA and Terminal-Bench 2.1 [S2]. The other 6 are Meta runs or official services. So "mostly" is a narrow majority. The card's Coding section has three rows, and "both coding rows" means the two preferred-harness rows, DeepSWE and SWE-Atlas-QnA. SciCode, which Artificial Analysis also scored, is not named.
[^qa-15]: **Verified** — [S2]: 361-task split excluding Google Drive tasks, mean per-task reward averaged over four attempts, Muse Spark Open and Inkling from Meta's own runs, and Kimi K3 self-reported.
[^qa-16]: **Verified** — [S2]: BabyVision 388 questions, run 5 times ("internal runs on Muse Spark and Inkling"); SimpleVQA 2,024 questions, average of 5 runs; ZeroBench 100 questions, scored correct if at least one of five samples is correct.
[^qa-17]: **Verified** — QA repeated the search on its own copies of [S1] and the [S2] PDF on 2026-11-06. There were no hits for seed, repeat, rerun, replicat, interval, bootstrap, ablat, confidence or standard error. The only hits for "variance" are the two "to reduce variance" repeat notes.
[^qa-18]: **Verified** — The abstract of [S13] reports "state-of-the-art agreement with human judgments of jailbreak effectiveness". The peer-reviewed version of the paper appeared in the NeurIPS 2024 Datasets and Benchmarks Track with the same claim [S19]. [S2] states no human check of the GPT-OSS-120B or MCP-Atlas judges.
[^qa-19]: **Verified** — [S10], read 2026-11-06: rank 2, `muse-spark-open` (marked NEW), 7.64 ± 1.15. The interval runs from 6.49 to 8.79, so the card's 5.8 [S1] lies outside it.
[^qa-20]: **Verified** — Leaderboard [S10] against card [S1]: qwen3p8 xhigh 21.60 against 21.6; inkling xhigh 24.99 against 25.0; nemotron-3-ultra-nvfp4 26.35 against 26.4; kimi-k3 max 26.65 against 26.7; glm-5p3 max 28.23 against 28.2.
[^qa-21]: **Verified** — On the MCP-Atlas leaderboard [S12] (headed "Updated April 8, 2026"), the five comparators match the card [S1] exactly: Inkling (xHigh) 76.00 ± 2.60, Nemotron 3 Ultra 63.10 ± 3.00, Qwen3.8 84.50 ± 2.25, GLM 5.3 84.20 ± 2.15 and kimi-k3 (max) 82.30 ± 2.35. No row is labelled Muse Spark Open.
[^qa-22]: **Verified** — [S2] says v4.3, sourced October 7, 2026. The Artificial Analysis version history [S9] also lists v4.3.1 and v4.3.2 (September to October 2026), which refit the GDPval-AA and AA-Briefcase scales. The exact sub-version behind the 39 is not stated.
[^qa-23]: **Supported with caveat** — According to [S9], the removals (GDPval-AA, SciCode, AA-LCR, Humanity's Last Exam) and additions (HLE-Diamond, Terminal-Bench-Science, FrontierCode 2.0) were made in v5.0 (October to November 2026). v5.0.1 changed no components; it only regraded CritPt v2. v5.0 also replaced CritPt with CritPt v2, upgraded AA-Omniscience to v1.1, cut GDP.pdf's weight and rebalanced the four categories. So the list in the post is accurate for v4.3 against v5.0.1, but it is not complete.
[^qa-24]: **Verified** — Model page [S8], read 2026-11-06: Muse Spark Open (Xhigh), Intelligence Index v5.0.1 score of 25, #12 of 26, median 23.
[^qa-25]: **Verified** — [S2] defines the metric as the mean of two attack success rates over 202 behaviors, which gives (a+b)/404. Multiplying each cell in [S1] by 4.04 gives 2.02, 349.06, 326.03, 265.02, 254.12 and 269.06, each within 0.12 of an integer. This assumes both rates use all 202 behaviors as the denominator, as [S2] describes.
[^qa-26]: **Supported with caveat** — [S8] gives 148 tokens per second. Its FAQ says time-based metrics are "the median across providers serving the model", so the figure is a cross-provider median, not one unnamed provider's number.
[^qa-27]: **Verified** — The gating form asks for full legal name and date of birth [S1]. On 2026-11-06 QA also got HTTP 401 for `config.json`, `generation_config.json` and `processor_config.json`, while [S16] and [S17] were public. QA found no training-data or harness link in [S1], [S2] or [S6], and a web search on 2026-11-06 found no independent rerun of the Meta-run rows.

## Disclosure

> *Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
