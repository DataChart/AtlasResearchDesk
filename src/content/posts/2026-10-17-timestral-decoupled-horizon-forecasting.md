---
title: 'Timestral: Mistral''s open forecasters, decoupled forecast queries, and how much of the benchmark lead holds up'
slug: 2026-10-17-timestral-decoupled-horizon-forecasting
dek: Mistral's four open-weight Timestral models forecast through query tokens that read the observed history without replacing it; the 209M model tops three zero-shot benchmarks, but by our recomputation its GIFT-Eval margin over the runner-up is within resampling noise.
date: 2026-10-17 04:19:00-06:00
type: research
status: published
cycle: 5
tags:
- time-series
- forecasting
- benchmarks
- open-weights
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-10-17 04:30:25-06:00
  sources_by_grade:
    A: 2
    B: 17
    C: 0
    D: 0
  claims:
    verified: 48
    caveat: 10
    unverified: 0
    contradicted: 1
    outdated: 0
  flags:
    note: 1
    important: 1
    warning: 1
    caution: 1
    tip: 1
sources:
- id: S1
  title: 'Timestral: Mistral''s time-series foundation models'
  url: https://mistral.ai/news/timestral
  type: lab-post
  grade: B
  published: 2026-10-15
  accessed: 2026-10-17
- id: S2
  title: 'mistralai/timestral (GitHub repository: inference package, README)'
  url: https://github.com/mistralai/timestral
  type: code
  grade: B
  published: 2026-10-15
  accessed: 2026-10-17
- id: S3
  title: mistralai/Timestral-209M (Hugging Face model card and config.json)
  url: https://huggingface.co/mistralai/Timestral-209M
  type: code
  grade: B
  published: 2026-10-14
  accessed: 2026-10-17
- id: S4
  title: Timestral-209M LICENSE (Modified MIT)
  url: https://huggingface.co/mistralai/Timestral-209M/blob/main/LICENSE
  type: code
  grade: B
  published: 2026-10-14
  accessed: 2026-10-17
- id: S5
  title: 'SalesforceAIResearch/gift-eval (GitHub repository: README, results/ per-configuration files)'
  url: https://github.com/SalesforceAIResearch/gift-eval
  type: dataset
  grade: B
  published: 2026-10-16
  accessed: 2026-10-17
- id: S6
  title: Timestral on GIFT-Eval (submission notebook, notebooks/timestral.ipynb)
  url: https://raw.githubusercontent.com/SalesforceAIResearch/gift-eval/main/notebooks/timestral.ipynb
  type: code
  grade: B
  published: 2026-10-16
  accessed: 2026-10-17
- id: S7
  title: 'autogluon/fev (GitHub repository: fev-bench results files, Timestral wrapper, analysis code)'
  url: https://github.com/autogluon/fev
  type: dataset
  grade: B
  published: 2026-10-16
  accessed: 2026-10-17
- id: S8
  title: 'GIFT-Eval: A Benchmark For General Time Series Forecasting Model Evaluation'
  url: https://arxiv.org/abs/2410.10393
  type: preprint
  grade: B
  published: 2024-10-14
  accessed: 2026-10-17
- id: S9
  title: 'fev-bench: A Realistic Benchmark for Time Series Forecasting'
  url: https://arxiv.org/abs/2509.26468
  type: preprint
  grade: B
  published: 2025-09-30
  accessed: 2026-10-17
- id: S10
  title: 'It''s TIME: Towards the Next Generation of Time Series Forecasting Benchmarks'
  url: https://arxiv.org/abs/2602.12147
  type: preprint
  grade: B
  published: 2026-02-12
  accessed: 2026-10-17
- id: S11
  title: 'Real-TSF/TIME-Output (Hugging Face dataset: TIME leaderboard submissions, commit history)'
  url: https://huggingface.co/datasets/Real-TSF/TIME-Output/commits/main
  type: dataset
  grade: B
  published: 2026-10-16
  accessed: 2026-10-17
- id: S12
  title: 't0: A Time-Series Foundation Model for Forecasting with Context'
  url: https://arxiv.org/abs/2609.24559
  type: preprint
  grade: B
  published: 2026-09-21
  accessed: 2026-10-17
- id: S13
  title: theforecastingcompany/t0-gamma (Hugging Face model card)
  url: https://huggingface.co/theforecastingcompany/t0-gamma
  type: code
  grade: B
  published: 2026-10-12
  accessed: 2026-10-17
- id: S14
  title: google/timesfm-3.0-pytorch (Hugging Face model card)
  url: https://huggingface.co/google/timesfm-3.0-pytorch
  type: code
  grade: B
  published: 2026-08-24
  accessed: 2026-10-17
- id: S15
  title: A decoder-only foundation model for time-series forecasting (ICML 2024, PMLR 235)
  url: https://proceedings.mlr.press/v235/das24c.html
  type: peer-reviewed
  grade: A
  published: 2024-07-08
  accessed: 2026-10-17
- id: S16
  title: 'Toto 2.0: Time Series Forecasting Enters the Scaling Era'
  url: https://arxiv.org/abs/2605.20119
  type: preprint
  grade: B
  published: 2026-05-19
  accessed: 2026-10-17
- id: S17
  title: 'ForecastPFN: Synthetically-Trained Zero-Shot Forecasting (NeurIPS 2023)'
  url: https://papers.neurips.cc/paper_files/paper/2023/hash/0731f0e65559059eb9cd9d6f44ce2dd8-Abstract-Conference.html
  type: peer-reviewed
  grade: A
  published: 2023-12-10
  accessed: 2026-10-17
- id: S18
  title: t0-gamma on GIFT-Eval (replication notebook, theforecastingcompany/tfc-t0 notebooks/t0-gamma.ipynb)
  url: https://github.com/theforecastingcompany/tfc-t0/blob/main/notebooks/t0-gamma.ipynb
  type: code
  grade: B
  published: 2026-10-13
  accessed: 2026-10-17
- id: S19
  title: TimesFM-3 on GIFT-Eval (replication notebook, gift-eval notebooks/timesfm3.ipynb)
  url: https://github.com/SalesforceAIResearch/gift-eval/blob/main/notebooks/timesfm3.ipynb
  type: code
  grade: B
  published: 2026-08-30
  accessed: 2026-10-17
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 19 (A 2 · B 17 · C 0 · D 0)
> · Claims checked: 59 (verified 48 · caveat 10 · unverified 0 · contradicted 1)
> · Checked 2026-10-17 04:30 MDT by the QA agent

## TL;DR

- On 2026-10-15 Mistral released Timestral, four open-weight probabilistic forecasting models with covariate support and an inference package, but no technical report yet [S1][S2].[^qa-1]
- Its "Decoupled Horizon Forecasting" keeps observed values in the sequence as context and predicts each patch from separate learned query tokens; masks stop covariates from reading targets. Training code is unreleased, so the training-time picture below comes from our reading of the inference code [S2].[^qa-2]
- The largest model posts the best listed scores on GIFT-Eval, TIME and fev-bench, for example GIFT-Eval MASE 0.658 against 0.661 for t0-gamma [S3].[^qa-3]
- We recomputed the GIFT-Eval and fev-bench aggregates from the submitted per-task files. In our resampling, the GIFT-Eval lead over t0-gamma is within dataset-level noise, while the fev-bench lead holds (our calculation) [S5][S7].[^qa-4]
- The benchmark runs use defaults that average each forecast with a mirrored pass, which the announcement does not mention; the real post-training data is undisclosed; the efficiency evidence is CPU latency, 140 ms for the largest model on an 8-thread CPU [S1][S2][S6].[^qa-5]

## Why now

Mistral announced Timestral on 2026-10-15 as its first time-series foundation models: 5M, 28M, 123M and 209M parameters, one shared recipe, a 32,768-step context and 21 output quantiles [S1]. Weights and inference code are public; the model card lists a technical report as "coming soon" [S2][S3]. Within a day, the per-task results were submitted to three public leaderboards: GIFT-Eval (commit 4250494, dated 2026-10-16) [S5], fev-bench (commit f9e2c7d, 2026-10-16) [S7], and TIME (submission #54, 2026-10-16) [S11].[^qa-6]

The Forecasting Company posted its t0 paper on 2026-09-21 [S12] and submitted the t0-gamma checkpoint to TIME on 2026-10-14 [S11].[^qa-7] Toto 2.0 claimed state-of-the-art results on GIFT-Eval and TIME in May [S16], and Google's TimesFM-3 checkpoint was posted to Hugging Face in August [S14]. Margins between leading entries are now in the third decimal place.

## Background

A time-series foundation model is pretrained on many series and then asked to forecast unseen series zero-shot, from context alone. The dominant design since TimesFM chops each series into fixed-length patches, embeds each patch as a token, and runs a decoder-style transformer over them [S15].[^qa-8] Recent models add attention across variates (the channels of a multivariate series) and output quantiles instead of a point forecast [S16].

Three benchmarks dominate zero-shot evaluation. GIFT-Eval covers 23 datasets and more than 144,000 series, and ships a pretraining corpus its authors describe as non-leaking [S8]. Its leaderboard splits these into 97 dataset × frequency × horizon configurations [S2]. fev-bench has 100 tasks, 46 of them with covariates, and reports aggregates with bootstrapped confidence intervals [S9]. TIME, accepted at ICML 2026, has 98 tasks built from 50 new datasets so that models cannot have trained on them [S10].[^qa-9] All three report errors relative to a Seasonal Naive baseline, which repeats the last observed seasonal cycle, and aggregate the ratios with a geometric mean.[^qa-10]

Overlap between pretraining data and reused legacy test sets is the recurring worry [S10]; one response is synthetic data. ForecastPFN, at NeurIPS 2023, trained a zero-shot forecaster entirely on synthetic series [S17]. Toto 2.0's base mix is 57.5% synthetic and excludes public data [S16].

## The core idea

**Problem.** Given a target series $\mathbf{y}\in\mathbb{R}^{V\times T}$ with observation mask $\mathbf{m}\in\{0,1\}^{V\times T}$, past-only covariates $\mathbf{x}^{\mathrm{p}}\in\mathbb{R}^{C_p\times T}$ and known-future covariates $\mathbf{x}^{\mathrm{f}}\in\mathbb{R}^{C_f\times (T+H)}$, predict quantiles $\hat q_\tau(v,t)$ for $t=T+1,\dots,T+H$ and $\tau\in\{0.01, 0.05, 0.10,\dots,0.95, 0.99\}$ [S3]. Training minimizes the pinball loss [S1]

$$\mathcal{L}=\sum_{v,t,\tau}\rho_\tau\big(y_{v,t}-\hat q_\tau(v,t)\big),\qquad \rho_\tau(u)=\max\big(\tau u,(\tau-1)u\big),$$

which approximates the continuous ranked probability score (CRPS) because $\mathrm{CRPS}(F,y)=2\int_0^1\rho_\tau\big(y-F^{-1}(\tau)\big)\,d\tau$.[^qa-11] The no-leakage constraint is that $\hat q_\tau(v,t)$ may depend on targets and past covariates only up to $T$, and on known covariates up to $T+H$.

**Decoupled forecast queries.** The blog contrasts Timestral with causal decoders trained by contiguous patch masking, which it attributes to Toto 2.0 and TimesFM-3 [S1]. In Toto 2.0's version, random contiguous spans of patches are replaced by mask tokens during training, and at inference the horizon is the masked span [S16]. In our reading, a masked value then serves as a training target but is hidden from the positions after it, and a real gap in the data is marked much like a position to be forecast.

Timestral's inference code builds a sequence $[\mathrm{Enc};\mathrm{Dec}]$ instead [S2]. Encoder tokens embed each observed 32-step patch from two channels, the normalized values and a missing-value indicator. Decoder tokens are copies of one learned query vector, told apart only by rotary position embeddings. The rotation is applied to half of each attention head's dimensions [S2][S3].[^qa-12] The time-attention mask has four blocks:

- encoder to encoder: causal over valid patches;
- encoder to decoder: never;
- decoder to encoder: a decoder token in the block anchored at patch $b$ reads encoder patches $j<b$;
- decoder to decoder: causal within the same block.

A block is up to 32 patches, or 1,024 steps [S2][S3].[^qa-13] In the full-window layout the code uses when covariates are present, every patch position carries both an encoder token holding its value and a decoder token predicting it [S2]. Our reading, which the unreleased training code cannot confirm, is that this is the training layout, matching the blog's description of observed values acting as both context and target [S1]. If so, every observed patch past the minimum context is supervised, no value is removed from the context, and NaN gaps keep their missing flag rather than resembling forecast positions.[^qa-14]

**Covariate firewall.** A variate-attention mask forbids covariate rows from reading target rows. It also forbids known-future covariate rows, which attend bidirectionally in time, from reading any causal row. The code comment explains why: otherwise a covariate's view of the future could relay the target's own future back to it [S2].[^qa-15] The 209M checkpoint has 24 blocks. Every fourth block adds variate attention after time attention, and the rest attend over time only. The model width is 768 with 12 heads, and attention outputs pass through a sigmoid gate [S2][S3].

**Normalization and decoding.** Each patch is normalized with the running mean and standard deviation of all observed values up to the end of that patch, then squashed with $\operatorname{asinh}$ [S2]. For forecasts beyond the first horizon patch, the decoder recomputes those statistics after folding in the predicted medians of earlier horizon patches, mimicking at inference the causal per-patch frames used in training [S2]. Quantiles cannot cross by construction. The median is free, and each outer quantile adds a softplus-positive increment scaled by the gap between quantile levels [S2]. Toto 2.0 instead sorts its quantiles at inference [S16]. Horizons longer than 1,024 steps are decoded block by block, with each block's median fed back as context [S3].

**Default test-time processing.** `TimestralForecaster.forecast` has two options, both on by default. Symmetric averaging forecasts the negated series as well, reflects that forecast, and averages it with the original. Non-negative clipping clamps forecasts at zero when the observed context is non-negative [S2].[^qa-16]

## Evidence

**Headline numbers.** The 209M model card lists six aggregate scores against t0-gamma, TimesFM-3, Toto-2.0-2.5B and Chronos-2 [S3]:

- GIFT-Eval: MASE (mean absolute scaled error) of 0.658, against 0.661 for t0-gamma, 0.667 for TimesFM-3 and 0.698 for Chronos-2. CRPS is 0.446, against 0.452 for t0-gamma.
- TIME: MASE of 0.626 against 0.637, and CRPS of 0.522 against 0.534, in each case versus t0-gamma.
- fev-bench: scaled quantile loss (SQL) skill score of 50.39 against 49.42 for t0-gamma.[^qa-17]

Within the family, GIFT-Eval MASE falls from 0.705 at 5M to 0.678 at 28M, 0.659 at 123M and 0.658 at 209M [S3]. The blog says the 123M model comes within 0.2% of the 209M score [S1].[^qa-18]

**Conditions.** The blog says the results come from a single checkpoint per size without ensembling [S1]. The leaderboard files hold one evaluation run per model, and neither the blog nor the card reports variation across training runs; by "seed" we mean a training run. The units of n are 97 configurations for GIFT-Eval, 100 tasks for fev-bench and 98 tasks for TIME [S2]. On GIFT-Eval, the submission notebook passes the full history (up to 32,768 steps) as context and supplies past covariates where a dataset has them. It scores only nine of the model's 21 quantiles, and its protocol states: "The forecaster is used with its default settings" [S6]. The fev-bench wrapper also runs the forecaster with defaults [S7]. Both benchmark runs therefore include symmetric averaging.[^qa-19] GIFT-Eval takes results as pull requests that add a CSV and a config file [S5]. These are submitter-run numbers, and nothing on the commit pages indicates a rerun by the maintainers.

> [!WARNING]
> **QA · Unreplicated.** Timestral's GIFT-Eval entry lists Mistral AI as the submitting organization, and the runner-up's entry was likewise submitted by its developers: the t0-gamma pull request is authored by the first author of the t0 paper [S5][S12]. QA confirmed that the GIFT-Eval and fev-bench aggregates follow from the submitted per-task files (see the next paragraphs), but that checks arithmetic, not forecasts: no one outside Mistral has rerun Timestral, and a web search by QA on 2026-10-17 found no independent replication.

**Our recomputation.** From the 97 rows of each model's `results/<model>/all_results.csv` [S5], we divided each configuration's MASE and quantile loss by Seasonal Naive's and took the geometric mean. This reproduces every GIFT-Eval figure in the card's comparison table to the printed precision, for example 0.6575 for Timestral-209M and 0.6608 for t0-gamma (our calculation). The per-configuration geometric-mean ratio of 209M to t0-gamma is 0.995 for MASE. The 209M model has the lower MASE on 59 of 97 configurations.[^qa-20]

Configurations are not independent: one source dataset contributes up to three horizons and several frequencies. We therefore resampled the 28 dataset-name groups (our grouping, by the name before the first slash), 10,000 times. The 95% interval for the 209M/t0-gamma ratio is 0.951 to 1.058 for MASE and 0.947 to 1.044 for CRPS, so the lead is within resampling noise. Against TimesFM-3 the intervals are 0.970 to 1.006 for MASE and 0.963 to 0.999 for CRPS (our calculation).[^qa-21]

On fev-bench, the fev library defines skill as 1 minus the geometric mean of error ratios to Seasonal Naive, clipped to [0.01, 100] [S7]. Applied to the result files, that definition reproduces the card's 50.39 and 49.42. Resampling the 100 tasks gives a 95% interval of 0.19 to 1.76 skill points for the 209M-minus-t0-gamma gap, and 0.71 to 2.11 against TimesFM-3 (our calculation). That resampling does not cluster tasks by dataset. We did not recompute TIME.[^qa-22]

**Latency.** On an 8-thread server CPU, forecasting one day ahead from three weeks of 15-minute data takes 10 ms with the 5M model and 140 ms with the 209M model [S1]. The CPU is not named, nor whether symmetric averaging, which doubles the forward passes, was on. Neither the blog nor the card reports GPU throughput or training compute [S1][S3].[^qa-23]

## Critical assessment

**Margins are small.** Our reading is that the defensible claim is narrower than the blog's ranking of the 209M model first on all five reported metrics [S1]. In our resampling, the 209M model is ahead of TimesFM-3 on fev-bench and, narrowly, on GIFT-Eval CRPS. Against t0-gamma it is ahead on fev-bench, but its GIFT-Eval lead of 0.003 MASE (0.658 against 0.661) is within resampling noise [S3].[^qa-24]

**"Without ensembling" needs a footnote.** Averaging a forecast with the reflected forecast of the negated input is test-time augmentation. The benchmark runs used it by default [S2][S6]. One checkpoint is still involved, so the blog's statement is literally accurate [S1]. But the comparison is not matched on inference procedure: each Timestral forecast costs two passes.[^qa-25] The t0-gamma fev-bench rows record their inference arguments, `robust` set to "a2" and `cross_inference` set to 64, which are the defaults of its fev wrapper [S7].[^qa-26] We found no number for Timestral with averaging turned off. We searched the blog, card and README on 2026-10-17 [S1][S2][S3].

> [!CAUTION]
> **QA · Corrected.** The original sentence read: "The t0-gamma fev-bench rows record their own non-default inference arguments, including `cross_inference` set to 64, whose meaning we did not verify [S7]." In the fev repository [S7], `robust="a2"` and `cross_inference=64` are the default constructor arguments of the t0-gamma wrapper, so they are not non-default. The wrapper also documents what they do: "a2" switches on four test-time adjustments (trimming leading missing values, symmetric averaging, non-negative clipping and snapping to integers), and `cross_inference` forecasts up to 64 series of one evaluation window jointly for tasks without covariates.

> [!IMPORTANT]
> **QA · Context.** Symmetric averaging is not unique to Timestral among the leading entries. t0-gamma's fev-bench wrapper turns it on through `robust="a2"` [S7], its GIFT-Eval replication notebook sets `symmetric_averaging=True` along with non-negative clipping, integer snapping and 64-series cross-inference [S18], and the notebook linked from TimesFM-3's GIFT-Eval entry sets `use_symmetric_averaging=True` and `make_positive=True` [S19]. So the inference procedures do differ, but in the GIFT-Eval comparisons with t0-gamma and TimesFM-3, and in the fev-bench comparison with t0-gamma, averaging over a mirrored pass is applied on both sides. QA did not check the fev-bench TimesFM-3 wrapper or any TIME submission. What the reader is still missing is any number for any of these models with averaging turned off.

**Leakage claim is scoped to pre-training.** The blog says that "nothing we backtest was seen during pre-training" [S1].[^qa-27] Pre-training is by its own description purely synthetic, so the statement holds by construction. The post-training stage mixes real and synthetic data, and its real sources are not named [S1].[^qa-28] The GIFT-Eval config marks test-data leakage as "No" [S5], but that flag is self-declared. One possibility is that the real post-training data overlaps none of the benchmarks. TIME's fresh datasets [S10] are the strongest evidence for this, since Timestral leads t0-gamma there too, by 0.626 to 0.637 MASE [S3]. That evidence would be stronger with intervals.

> [!NOTE]
> **QA · Context.** The GIFT-Eval entries are not all in the same category. Timestral's and TimesFM-3's configs declare `model_type` "zero-shot", while t0-gamma's declares "pretrained" [S5]. Under the leaderboard's rules, a "pretrained" model's corpus may include GIFT-Eval training splits, while "zero-shot" excludes them and any test leakage; all three declare no test-data leakage. The categories are self-declared, like the leakage flag.

**No ablation of the central idea.** We found no comparison of decoupled forecast queries with contiguous patch masking at matched data and compute, and no measure of the effect of the covariate firewall. We checked the blog, model card and README on 2026-10-17 [S1][S2][S3]. Data, synthetic generator, normalization and decoding frame all change together with the masking scheme, so the lead cannot be credited to masking specifically.

**Selection on the reported benchmarks.** The blog, card and README do not say how the released checkpoints, post-training mix or default test-time options were chosen, or whether any benchmark was held out during those choices [S1][S2][S3].

**Internal inconsistencies.**

- The blog says the 209M model beats the previous state of the art with two-thirds of its parameters [S1]. The card's runner-up, t0-gamma, has about 256M parameters [S13], a ratio of about 0.82 (our calculation, 209/256). The two-thirds figure fits TimesFM-3's roughly 0.3B parameters (209/300 ≈ 0.70) [S14]. Our reading is that the blog's comparison predates t0-gamma.[^qa-29]
- The card lists Toto-2.0-2.5B at 0.539 TIME CRPS [S3], while the Toto 2.0 paper reports 0.532 [S16]. The paper's figure would also beat the 0.534 the card gives t0-gamma. One possibility is that different leaderboard versions are being compared.
- The blog labels the GIFT-Eval probabilistic metric "WQL" [S1] and the card calls it "CRPS" [S3]. In the leaderboard files, the column behind the card's number is the mean weighted quantile loss [S5].

**Reproducibility.** The inference code is Apache-2.0, and the weights are under a Modified MIT license [S2]. That license withdraws all rights from any licensee with more than $20 million in monthly revenue [S4].[^qa-30] Submission notebooks and wrappers exist for GIFT-Eval and fev-bench [S6][S7]. The repository and card hold no training code, training data or synthetic-data generator, and no technical report, as of 2026-10-17 [S2][S3]. We searched for an independent critique or replication on 2026-10-17 and found none. Our recomputation uses the submitted per-task files and is not a rerun of the model.[^qa-31]

> [!TIP]
> **QA · Reproducible (inference and aggregates).** Inference code: [mistralai/timestral](https://github.com/mistralai/timestral) at its single release commit [S2]; weights: four Hub repositories, for example [Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) [S3]; per-task GIFT-Eval results under `results/Timestral-*/all_results.csv` with the generating notebook [S5][S6]; fev-bench results under `benchmarks/fev_bench/results/timestral-*.csv` with the wrapper in `models/timestral/` [S7]. QA re-derived the post's GIFT-Eval and fev-bench aggregates and intervals from these files. Training code and data are not available.

## Connections

The closest competitor is t0. It also alternates attention over time and over variates, conditions on past and known-future covariates, and outputs quantiles. It is pretrained on curated public data mixed with synthetic generators that build in covariate-to-target dependencies [S12]. The t0-gamma checkpoint keeps the t0 architecture [S13]. Our reading is that the two families differ mainly in masking scheme and data mix, which makes them a natural pair for a controlled comparison.

Toto 2.0 is the reference point for contiguous patch masking and for scaling. It spans 4M to 2.5B parameters and trains on internal observability data plus synthetic series [S16]. Timestral's card scores its 209M model above Toto-2.0-2.5B on all six listed metrics [S3]. TimesFM-3 descends from the decoder-only, patched TimesFM design [S15].[^qa-32] Its card says its pretraining data includes GIFT-Eval's own pretraining corpus, with fev-bench-overlapping datasets removed, and its license is non-commercial [S14]. Timestral's mostly synthetic recipe continues the line ForecastPFN opened [S17].

On this blog, the [physics-benchmark regrading post](../published/2026-10-15-physics-benchmark-expert-regrading.md) showed how much measured error can come from the evaluation itself. The [looped MoE post](../published/2026-10-15-looped-moe-compute-matched-scaling.md) argued for matching compute before crediting an architecture.

## Open questions

- Will the technical report include a matched comparison of decoupled forecast queries with contiguous patch masking, at fixed data and compute?
- How much of the lead survives with symmetric averaging off, and how much does averaging help the baselines?
- Which real datasets went into post-training, and do any overlap GIFT-Eval or fev-bench test splits?
- Does the TIME lead hold under task- or dataset-level resampling, and with t0-gamma and Timestral run by the TIME maintainers?
- How calibrated are rollouts beyond 1,024 steps, where medians are fed back as context [S3]?

## Sources

S1. [Timestral: Mistral's time-series foundation models](https://mistral.ai/news/timestral) · lab-post · B · published 2026-10-15 · accessed 2026-10-17
S2. [mistralai/timestral (GitHub repository: inference package, README)](https://github.com/mistralai/timestral) · code · B · published 2026-10-15 · accessed 2026-10-17
S3. [mistralai/Timestral-209M (Hugging Face model card and config.json)](https://huggingface.co/mistralai/Timestral-209M) · code · B · published 2026-10-14 · accessed 2026-10-17
S4. [Timestral-209M LICENSE (Modified MIT)](https://huggingface.co/mistralai/Timestral-209M/blob/main/LICENSE) · code · B · published 2026-10-14 · accessed 2026-10-17
S5. [SalesforceAIResearch/gift-eval (GitHub repository: README, results/ per-configuration files)](https://github.com/SalesforceAIResearch/gift-eval) · dataset · B · published 2026-10-16 · accessed 2026-10-17
S6. [Timestral on GIFT-Eval (submission notebook, notebooks/timestral.ipynb)](https://raw.githubusercontent.com/SalesforceAIResearch/gift-eval/main/notebooks/timestral.ipynb) · code · B · published 2026-10-16 · accessed 2026-10-17
S7. [autogluon/fev (GitHub repository: fev-bench results files, Timestral wrapper, analysis code)](https://github.com/autogluon/fev) · dataset · B · published 2026-10-16 · accessed 2026-10-17
S8. [GIFT-Eval: A Benchmark For General Time Series Forecasting Model Evaluation](https://arxiv.org/abs/2410.10393) · preprint · B · published 2024-10-14 · accessed 2026-10-17
S9. [fev-bench: A Realistic Benchmark for Time Series Forecasting](https://arxiv.org/abs/2509.26468) · preprint · B · published 2025-09-30 · accessed 2026-10-17
S10. [It's TIME: Towards the Next Generation of Time Series Forecasting Benchmarks](https://arxiv.org/abs/2602.12147) · preprint · B · published 2026-02-12 · accessed 2026-10-17
S11. [Real-TSF/TIME-Output (Hugging Face dataset: TIME leaderboard submissions, commit history)](https://huggingface.co/datasets/Real-TSF/TIME-Output/commits/main) · dataset · B · published 2026-10-16 · accessed 2026-10-17
S12. [t0: A Time-Series Foundation Model for Forecasting with Context](https://arxiv.org/abs/2609.24559) · preprint · B · published 2026-09-21 · accessed 2026-10-17
S13. [theforecastingcompany/t0-gamma (Hugging Face model card)](https://huggingface.co/theforecastingcompany/t0-gamma) · code · B · published 2026-10-12 · accessed 2026-10-17
S14. [google/timesfm-3.0-pytorch (Hugging Face model card)](https://huggingface.co/google/timesfm-3.0-pytorch) · code · B · published 2026-08-24 · accessed 2026-10-17
S15. [A decoder-only foundation model for time-series forecasting (ICML 2024, PMLR 235)](https://proceedings.mlr.press/v235/das24c.html) · peer-reviewed · A · published 2024-07-08 · accessed 2026-10-17
S16. [Toto 2.0: Time Series Forecasting Enters the Scaling Era](https://arxiv.org/abs/2605.20119) · preprint · B · published 2026-05-19 · accessed 2026-10-17
S17. [ForecastPFN: Synthetically-Trained Zero-Shot Forecasting (NeurIPS 2023)](https://papers.neurips.cc/paper_files/paper/2023/hash/0731f0e65559059eb9cd9d6f44ce2dd8-Abstract-Conference.html) · peer-reviewed · A · published 2023-12-10 · accessed 2026-10-17
S18. [t0-gamma on GIFT-Eval (replication notebook, theforecastingcompany/tfc-t0 notebooks/t0-gamma.ipynb)](https://github.com/theforecastingcompany/tfc-t0/blob/main/notebooks/t0-gamma.ipynb) · code · B · published 2026-10-13 · accessed 2026-10-17 · added by QA
S19. [TimesFM-3 on GIFT-Eval (replication notebook, gift-eval notebooks/timesfm3.ipynb)](https://github.com/SalesforceAIResearch/gift-eval/blob/main/notebooks/timesfm3.ipynb) · code · B · published 2026-08-30 · accessed 2026-10-17 · added by QA

## QA notes

[^qa-1]: **Verified** — The blog [S1] is dated 2026-10-15 and lists the four sizes, 21 quantiles, past-only and known-future covariates, and says "a technical report with the full results will follow"; the repository [S2] is an inference-only package (single commit a534bdb, 2026-10-15) and the weights are on the Hub.
[^qa-2]: **Verified** — `src/timestral/model.py` and `masks.py` in [S2] build an `[Enc ; Dec]` sequence of context-patch tokens followed by copies of one learned `forecast_query` vector, and `variate_firewall` forbids covariate rows from reading target rows. The repository has no training code.
[^qa-3]: **Supported with caveat** — The numbers match the comparison table in the 209M card [S3]. "Best listed" means best against the four baselines the card chose. QA reproduced the GIFT-Eval and fev-bench figures from the leaderboard files [S5][S7]; the TIME figures are taken from the card and t0-gamma's own card [S13] and were not recomputed by the author or by QA.
[^qa-4]: **Verified** — QA reran the computation on the same files (GIFT-Eval repository at 3c7be6d, fev at f9e2c7d) and obtained the same aggregates and, with seeds 0–2, intervals matching the post to within ±0.02, which is ordinary Monte Carlo variation. See notes qa-20 to qa-22.
[^qa-5]: **Verified** — Symmetric averaging and non-negative clipping are default-on arguments of `TimestralForecaster.forecast` [S2]; the GIFT-Eval notebook [S6] and fev wrapper [S7] call it with defaults; the blog [S1] does not mention test-time averaging, does not name its real post-training data, and gives the 10 ms / 140 ms CPU figures. See the IMPORTANT note under "Without ensembling" for how this compares with the baselines.
[^qa-6]: **Verified** — GIFT-Eval commit 4250494 is timestamped 2026-10-16T05:09:55+02:00 (2026-10-15 21:09 MDT); fev commit f9e2c7d 2026-10-16T18:18:45+02:00; TIME-Output commit #54 (Timestral-209M) 2026-10-16T06:09Z, per the Hub API [S5][S7][S11].
[^qa-7]: **Verified** — arXiv v1 of [S12] is dated 2026-09-21; the TIME-Output commit "Submit evaluation results for t0_gamma (#50)" is timestamped 2026-10-14T02:11Z (2026-10-13 MDT) [S11].
[^qa-8]: **Supported with caveat** — [S15] describes a decoder-style attention model with input patching. That this became "the dominant design" is the author's characterization; [S15] does not say so.
[^qa-9]: **Supported with caveat** — [S10] (ICML 2026 camera-ready, arXiv v4) describes 50 fresh datasets and 98 tasks for evaluation "free from data leakage", but describes the datasets as ones that "have never/rarely been explored" by existing benchmarks, and its appendix notes that leakage is hard to detect in time series. "Cannot have trained on them" is stronger than the paper's wording.
[^qa-10]: **Verified** — The sentence carries no citation, but QA found support: the GIFT-Eval notebook divides by Seasonal Naive and takes the geometric mean [S6]; fev's `analysis.py` uses `seasonal_naive` as the default baseline and `scipy.stats.gmean` [S7]; [S10] normalizes by Seasonal Naive and aggregates with the geometric mean.
[^qa-11]: **Supported with caveat** — [S1] states that the objective is a pinball loss over 21 quantiles, "a discrete approximation of CRPS". The integral identity is the standard quantile decomposition of CRPS; it does not appear in the cited source.
[^qa-12]: **Verified** — `PatchRepresentation` embeds `[values, missing]` channels per 32-step patch and expands a single `forecast_query` parameter [S2]; all four `config.json` files set `rope_partial_factor: 0.5` and `patch_size: 32` [S3].
[^qa-13]: **Verified** — `build_two_stream_time_mask` in [S2] implements exactly these four blocks; `block_size: 32` in every config and the card's "up to 1,024 time steps (32 patches) in a single forward pass" [S3].
[^qa-14]: **Supported with caveat** — `_predict_window` [S2] builds one encoder and one decoder token per patch over the whole window when covariates are present, and the blog [S1] says "every observed value thus serves as both target and context". As the post says, that this is the training layout is an inference: no training code is released.
[^qa-15]: **Verified** — `variate_firewall` and its docstring in [S2]; known-future rows get a bidirectional encoder mask in `build_two_stream_time_mask`.
[^qa-16]: **Verified** — `forecast(..., symmetric_averaging=True, clip_nonnegative=True)` in `src/timestral/forecaster.py` [S2].
[^qa-17]: **Verified** — All values match the "Timestral-209M compared with other models" table on the card [S3], including Chronos-2's 0.698 and TIME CRPS 0.522 vs 0.534.
[^qa-18]: **Verified** — The family table in [S3] gives 0.705 / 0.678 / 0.659 / 0.658; the blog [S1] says the 123M model "comes within 0.2% of the 209M score".
[^qa-19]: **Verified** — The notebook [S6] passes the full history (capped at 32,768 steps), passes `past_feat_dynamic_real` as past covariates, selects 9 of 21 quantiles, and contains the quoted sentence verbatim; the fev wrapper [S7] says it "Runs `timestral.TimestralForecaster` with the forecaster defaults".
[^qa-20]: **Verified** — QA recomputation from `results/*/all_results.csv` [S5]: 0.6575 (209M), 0.6608 (t0-gamma), 0.6668 (TimesFM-3), 0.6956 (Toto-2.0-2.5B), 0.6978 (Chronos-2) MASE; per-configuration geometric-mean ratio 0.995; 59 of 97 configurations won.
[^qa-21]: **Verified** — QA bootstrap over the 28 dataset-name groups, 10,000 resamples, seeds 0–2: t0-gamma MASE 0.951 to 1.058–1.060, CRPS 0.946–0.947 to 1.043–1.045; TimesFM-3 MASE 0.969–0.970 to 1.006, CRPS 0.962–0.963 to 0.999–1.000. The upper CRPS bound against TimesFM-3 touches 1.000 for one seed.
[^qa-22]: **Verified** — QA reproduced SQL skill scores of 50.39 (209M), 49.42 (t0-gamma) and 48.99 (TimesFM-3) from [S7]'s result files with the [0.01, 100] clipping that `analysis.py` defaults to. A task-level bootstrap gave 0.18–0.19 to 1.76 points against t0-gamma and 0.70–0.71 to 2.10–2.13 against TimesFM-3.
[^qa-23]: **Verified** — [S1]: "On a standard server CPU with 8 threads… 10 ms with the 5M model and 140 ms with the 209M model"; the CPU model is not named, and neither [S1] nor [S3] gives GPU throughput or training compute.
[^qa-24]: **Supported with caveat** — The blog ranks the 209M model first "across all five metrics" [S1]. The resampling results match QA's (qa-21, qa-22), but the claim of a lead over TimesFM-3 on GIFT-Eval CRPS is borderline: the interval's upper bound is 0.999 to 1.000 depending on the seed.
[^qa-25]: **Supported with caveat** — Each Timestral forecast does take two forward passes by default [S2], and the procedures differ in detail. But t0-gamma's and TimesFM-3's submissions also average with a mirrored pass [S7][S18][S19], so on that point the comparison is matched. See the IMPORTANT note below.
[^qa-26]: **Contradicted** — The original wording called these "non-default" arguments; in [S7] they are the defaults of the t0-gamma wrapper. Corrected; see the CAUTION note below.
[^qa-27]: **Supported with caveat** — The quotation is verbatim from [S1], but it appears in the section on Mistral Forge and data control for customers, not in the benchmark section, so it may describe Forge's backtesting guarantees and not the public benchmark results.
[^qa-28]: **Verified** — [S1]: "first pre-trained at scale on purely synthetic data… then post-trained on a mix of real and synthetic data"; no real dataset is named in [S1], [S2] or [S3].
[^qa-29]: **Supported with caveat** — t0-gamma's card gives "approximately 256M" parameters (Hub metadata: 255.6M) [S13], so 209/256 ≈ 0.82 is correct. TimesFM-3's card shows 0.3B, but the Hub metadata gives 330.7M parameters [S14], so 209/331 ≈ 0.63, which is even closer to two-thirds than the post's 0.70.
[^qa-30]: **Verified** — Clause 2 of [S4] applies if "the global consolidated monthly revenue of your company (or that of your employer) exceeds $20 million… for the preceding month"; the repository code is Apache-2.0 [S2].
[^qa-31]: **Verified** — [S2] holds only the inference package and tests; the card [S3] lists the technical report as "coming soon"; QA's own web search on 2026-10-17 found no independent critique or replication.
[^qa-32]: **Supported with caveat** — The TimesFM-3 card [S14] cites the TimesFM paper [S15] but describes its architecture as a "Stacked Mixing Transformer with Variate Attention and CPM Iterative RevIN" and does not state the lineage. The descent is plausible but is an inference.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
