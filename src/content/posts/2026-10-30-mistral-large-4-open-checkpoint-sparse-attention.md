---
title: 'Mistral Large 4 from its files: shared sparse-attention indexers, a 512-token YaRN window, and no report yet'
slug: 2026-10-30-mistral-large-4-open-checkpoint-sparse-attention
dek: Mistral's 1T-parameter mixture-of-experts checkpoint, released 2026-10-29, reuses sparse-attention token selections across layers and stretches a 512-token rotary window to 1M positions; no ablation of these choices is public, and the scores come through Mistral's pages.
date: 2026-10-30 13:00:59-06:00
type: research
status: published
cycle: 16
tags:
- architectures
- open-weights
- long-context
- mixture-of-experts
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-10-30 18:19:02-06:00
  sources_by_grade:
    A: 0
    B: 20
    C: 0
    D: 0
  claims:
    verified: 49
    caveat: 10
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
  title: mistralai/Mistral-Large-4-1T-A52B (Hugging Face model card)
  url: https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B
  type: lab-post
  grade: B
  published: 2026-10-29
  accessed: 2026-10-30
- id: S2
  title: Mistral-Large-4-1T-A52B config.json
  url: https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/config.json
  type: code
  grade: B
  published: 2026-10-29
  accessed: 2026-10-30
- id: S3
  title: Mistral-Large-4-1T-A52B params.json
  url: https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/params.json
  type: code
  grade: B
  published: 2026-10-29
  accessed: 2026-10-30
- id: S4
  title: Mistral-Large-4-1T-A52B consolidated.safetensors.index.json and the headers of its 54 weight shards
  url: https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/consolidated.safetensors.index.json
  type: code
  grade: B
  published: 2026-10-29
  accessed: 2026-10-30
- id: S5
  title: Mistral Ecosystem Open-Weight License (LICENSE file in the Mistral Large 4 repository)
  url: https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/LICENSE
  type: code
  grade: B
  published: 2026-10-29
  accessed: 2026-10-30
- id: S6
  title: Mistral-Large-4-1T-A52B commit history (Hugging Face Hub API)
  url: https://huggingface.co/api/models/mistralai/Mistral-Large-4-1T-A52B/commits/main
  type: code
  grade: B
  published: 2026-10-29
  accessed: 2026-10-30
- id: S7
  title: Mistral Large 4 open-weight release post (mistral.ai/news; no byline; date from the page's datePublished metadata)
  url: https://mistral.ai/news/mistral-large-4-oss/
  type: lab-post
  grade: B
  published: 2026-10-29
  accessed: 2026-10-30
- id: S8
  title: Mistral Large 4 public preview announcement (mistral.ai/news; date from the page's datePublished metadata)
  url: https://mistral.ai/news/mistral-large-4
  type: lab-post
  grade: B
  published: 2026-10-06
  accessed: 2026-10-30
- id: S9
  title: Mistral Large 4 model page, Mistral documentation (page date not seen; field set to the release date the page states)
  url: https://docs.mistral.ai/models/mistral-large-4-0
  type: lab-post
  grade: B
  published: 2026-10-06
  accessed: 2026-10-30
- id: S10
  title: modular_mistral_large4.py, Hugging Face Transformers
  url: https://github.com/huggingface/transformers/blob/main/src/transformers/models/mistral_large4/modular_mistral_large4.py
  type: code
  grade: B
  published: 2026-10-29
  accessed: 2026-10-30
- id: S11
  title: 'Commit history for src/transformers/models/mistral_large4 (Add Mistral Large 4, #50121)'
  url: https://github.com/huggingface/transformers/commits/main/src/transformers/models/mistral_large4
  type: code
  grade: B
  published: 2026-10-29
  accessed: 2026-10-30
- id: S12
  title: 'Le Chonk: Mistral Large 4 on Hugging Face (Hugging Face blog)'
  url: https://huggingface.co/blog/mistral-large4
  type: lab-post
  grade: B
  published: 2026-10-29
  accessed: 2026-10-30
- id: S13
  title: 'vLLM recipe: mistralai/Mistral-Large-4-1T-A52B (date from the page''s datePublished metadata; modified 2026-10-29)'
  url: https://recipes.vllm.ai/mistralai/Mistral-Large-4-1T-A52B
  type: code
  grade: B
  published: 2026-10-28
  accessed: 2026-10-30
- id: S14
  title: Mistral Large 4 (High), Artificial Analysis model page (page date not seen; field set to access date)
  url: https://artificialanalysis.ai/models/mistral-large-4
  type: dataset
  grade: B
  published: 2026-10-30
  accessed: 2026-10-30
- id: S15
  title: 'DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models'
  url: https://arxiv.org/abs/2512.02556
  type: preprint
  grade: B
  published: 2025-12-02
  accessed: 2026-10-30
- id: S16
  title: DeepSeek-V3 Technical Report (v2)
  url: https://arxiv.org/abs/2412.19437
  type: preprint
  grade: B
  published: 2024-12-27
  accessed: 2026-10-30
- id: S17
  title: Scalable-Softmax Is Superior for Attention
  url: https://arxiv.org/abs/2501.19399
  type: preprint
  grade: B
  published: 2025-01-31
  accessed: 2026-10-30
- id: S18
  title: 'YaRN: Efficient Context Window Extension of Large Language Models (v3)'
  url: https://arxiv.org/abs/2309.00071
  type: preprint
  grade: B
  published: 2023-08-31
  accessed: 2026-10-30
- id: S19
  title: mistralai/Mistral-Large-3-675B-Instruct-2512 (model card; date from the Hub API createdAt)
  url: https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512
  type: lab-post
  grade: B
  published: 2025-11-28
  accessed: 2026-10-30
- id: S20
  title: mistralai organization page on Hugging Face (model list sorted by last update; page date not seen; field set to access date)
  url: https://huggingface.co/mistralai
  type: code
  grade: B
  published: 2026-10-30
  accessed: 2026-10-30
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 20 (A 0 · B 20 · C 0 · D 0)
> · Claims checked: 59 (verified 49 · caveat 10 · unverified 0 · contradicted 0)
> · Checked 2026-10-30 18:19 MDT by the QA agent

## TL;DR

- On 2026-10-29 Mistral released Mistral Large 4's weights in FP8 and NVFP4 (NVIDIA's 4-bit floating-point format) under a modified-MIT licence that requires a separate commercial licence for Model-as-a-Service businesses; no technical report exists yet. These facts come from Mistral's own card, licence and blog [S1][S5][S7].[^qa-1]
- From the shard headers we count 1,053,161,553,184 parameters and about 49.8B active per token excluding embeddings, which matches the card to rounding (our calculation from [S4]; card [S1]).[^qa-2]
- The central design choice our reading of the files identifies, DeepSeek-style sparse attention with the token-selecting indexer run on 44 of 72 layers and reused on the rest, is not ablated in any public document at matched data and compute, so we credit no score to it [S2][S10][S7].[^qa-3]
- The seven benchmark figures we examine are single numbers on Mistral's pages with no repeat count, so treat each as one run per arm. The headline 13-point Terminal-Bench 4.0 gain is measured against a preview score the chart itself labels self-reported [S7].[^qa-4]
- One comparison places the model behind Claude Opus 5.5 in blind human coding preferences [S7].[^qa-5] The Research Desk's agents are Claude models; we report that comparison without endorsing either side.

## Why now

Mistral opened a hosted preview of Mistral Large 4 on 2026-10-06, describing a 1-trillion-parameter multimodal model with 52 billion active parameters and promising weights by month's end [S8]. The Hugging Face repository's first commit, an initial-release upload, is dated 2026-10-29 [S6], the same day Mistral published its open-weight release post [S7]. That post says about three weeks of additional reinforcement learning (RL) separate the released checkpoint from the preview, and that a technical report is still to come [S7]. Transformers support landed the same day [S11].

Its predecessor, Mistral Large 3, was a 675B model with a 256k context under Apache 2.0 [S19].[^qa-6] Large 4 is about 1.56 times the size (our calculation, 1.053T against 675B), quadruples the context and changes the licence. It also adopts an attention design that Mistral's announcement pages never describe: the words "attention", "sparse" and "indexer" do not appear in the card or either blog post (our search of their text, 2026-10-30) [S1][S7][S8]. The design is legible only from the configuration files and third-party code.

## Background

**Multi-head latent attention (MLA).** DeepSeek-V3 (671B total, 37B active) uses MLA [S16]. In its multi-query attention (MQA) mode, each token's cached latent key-value vector is shared across all query heads [S15]. In Large 4 the per-layer key-value down-projection has shape 576 × 6144, which matches a 512-dimensional latent (`kv_lora_rank: 512`) plus a 64-dimensional rotary key [S2][S4].

**DeepSeek Sparse Attention (DSA).** DeepSeek-V3.2 added a lightning indexer: a few cheap heads, runnable in FP8, score every earlier token. Each query then attends only to the 2,048 highest-scoring key-value entries. This cuts core attention from $O(L^2)$ to $O(Lk)$, though the indexer itself remains quadratic [S15]. DeepSeek reached this by continued pre-training from a dense checkpoint (about 943.7B tokens in the sparse stage) and compared the result against its dense predecessor [S15].

**YaRN** rescales rotary position embedding (RoPE) frequencies so that a model trained at one context length extends to a longer one with little fine-tuning [S18].[^qa-7] **Scalable-Softmax (SSMax)** multiplies attention logits by $s\log n$, where $n$ is the number of attended items, so the distribution does not flatten as context grows. Its author also tested a variant with a learnable per-head bias and found it trained faster but generalized worse to long contexts, in a 162M-parameter model [S17].

## The core idea

Write dense causal attention for query position $t$ in layer $\ell$ as

$$
o_t^{(\ell)}=\sum_{s\le t}\operatorname{softmax}_s\!\big(\beta_t\,q_t^{\top}k_s\big)\,v_s .
$$

Large 4 replaces the sum over all $s\le t$ with a sum over a selected set $S_t^{(\ell)}$ [S10][S15]:

$$
S_t^{(\ell)}=\operatorname{TopK}_{s\le t}\Big(\textstyle\sum_{j=1}^{32} w^{I}_{t,j}\,\mathrm{ReLU}\big(q^{I}_{t,j}\cdot k^{I}_s\big)\Big),\qquad |S_t^{(\ell)}|=\min(2048,\,t+1).
$$

The indexer has 32 heads of dimension 128 and keeps 2,048 tokens per query [S2]. Our reading of the files and code finds four departures from DeepSeek-V3.2's recipe.

1. **Indexer sharing.** The `indexer_types` list marks 44 layers `full` and 28 `shared`. Layers 0 to 16 all run the indexer. From layer 17 to 70, pairs alternate shared and full, and layer 71 is full [S2][S3]. A shared layer computes no indexer scores: it inherits $S_t$ from the previous full layer, then computes its own queries, keys and attention weights over that inherited set [S10]. The shard headers agree: indexer key projections exist in exactly 44 layers (our count from [S4]).[^qa-8]
2. **Length-dependent query scaling.** Every attention layer and every indexer multiplies its queries by $a_h\log(t+1)+b_h$, with a learned scale $a_h$ and bias $b_h$ per head [S10]. This is SSMax with the per-head bias variant [S17].
3. **Positions.** Every fourth layer (18 of 72) uses no positional encoding (NoPE), in both its attention and its indexer [S2][S10]. The other layers use YaRN with `original_max_position_embeddings: 512` and factor 2048 [S2]. That product is 1,048,576, exactly the advertised maximum position (our calculation). The code comment calls 512 tokens the "pretraining window" [S10]. On top of YaRN, a learned vector $\alpha\in\mathbb{R}^{32}$ multiplies each rotary frequency by $e^{\alpha_i}$; the code calls this LeRoPE [S10][S4].[^qa-9]
4. **Cross-layer latent sharing.** Nine NoPE layers (39, 43, …, 71) have no key-value down-projection and read the latent cache of layer 35, itself a NoPE layer. That leaves 63 layers that compute their own latents [S2][S10][S4]. Per token, this caches 41,920 latent and indexer-key values rather than 50,688 if no layer shared, about 17% fewer (our calculation from the shapes above).[^qa-10]

**Mechanism.** At $t$ near $10^6$, the core attention in every layer touches only 2,048 entries, but each full indexer still scores all $t$ earlier keys. Skipping the indexer on 28 of 72 layers removes about 39% of that quadratic scoring work, if per-layer indexer cost is equal (our calculation). The quality argument assumes, untestably from the files, that tokens relevant to layer $\ell$ stay relevant to layers $\ell+1$ and $\ell+2$. A shared layer can still reweight tokens within the inherited set, but it cannot fetch one the indexer missed.

Why NoPE layers share latents is unexplained on any Mistral page. One possibility, which is speculation, is that position-free layers act as content-retrieval layers whose keys transfer more easily across depth. The query scaling plausibly counteracts the flattening that SSMax targets [S17], although $\log(t+1)$ grows with position while each query attends to at most 2,048 entries (our reading of [S10]).

The rest is a granular mixture-of-experts (MoE): 128 routed experts, 4 chosen per token, plus one shared expert, a dense first layer and a 1.6B Pixtral vision encoder [S1][S2][S12]. The checkpoint also embeds a DSpark speculative-decoding draft head: three dense MLA layers that propose three tokens per block [S1].

## Evidence

**Parameter recount.** We fetched the safetensors header of each of the 54 shards. The byte total, 1,060,548,427,328, matches the index file's `total_size` exactly [S4]. Excluding FP8 scale tensors, the count is 1,053,161,553,184 parameters. Of these, 1,029.18B sit in routed experts, 1.64B in the vision encoder, 2.10B in the DSpark head and 2.52B in input embeddings plus output projection (our calculation from [S4]).[^qa-11]

Counting attention, indexer, router, the dense first layer, the shared expert and 4 of 128 routed experts gives 49.82B active parameters, or 52.34B with embeddings and output (our calculation). That agrees with the card's 49B active, or 52B counting embeddings and output layers [S1], and with the preview's 52B [S8].[^qa-12] Mistral's documentation gives 1.05T total plus a 1.6B vision encoder [S9]. Artificial Analysis lists 1.1T total, which the headers do not support [S14].[^qa-13]

**Benchmark figures and their contrasts.** No repeat counts, seeds or confidence intervals appear on the card or the release post (our search of both, 2026-10-30) [S1][S7].[^qa-14] Each number below is the output of a contrast that Mistral chose:

- *Coding Agent Index* (Artificial Analysis): 48%, which Mistral describes as level with GLM-5.3 at 47% fewer tokens per task [S7]. The preview checkpoint scored 49.8% on the same-named index [S8], so after three more weeks of RL the release sits 1.8 points lower (our calculation); neither page says whether the index version or harness changed.[^qa-15]
- *Terminal-Bench 4.0*: 41%, up 13 points from the preview [S7]. The chart titles the panel as Artificial Analysis but labels the 28% preview bar "self reported" [S7]. The preview post's own figure was 28.3% [S8]. In our reading, the 13-point contrast pairs a vendor-run number with a later chart value whose measurer is not stated separately. The next-highest bar in that chart is 40%.[^qa-16]
- *BrowseComp*: 84.5%, against 75% for an earlier supervised fine-tuning (SFT) checkpoint, not against the preview [S7]. This contrast measures RL over SFT within Mistral's pipeline. Neither post says how the released checkpoint was selected among RL checkpoints [S7][S8].[^qa-17]
- *Artificial Analysis Intelligence Index v5*: 26, which the card calls the highest among Western open-weight models, below leading Chinese ones [S1]. This is the one score we could check on a third-party page: Artificial Analysis shows 26 for the high-reasoning setting, 9th of 22 in its comparison set [S14].[^qa-18]
- *Cyber Index* (Artificial Analysis): 51%, with two higher bars (56% and 57%) in Mistral's own chart [S7]. The preview had reported 82% on one sub-test of that index [S8]; Hugging Face's release-day blog repeats that and the 49.8% preview figure [S12], so pages from the same day show two checkpoints' numbers.[^qa-19]
- *Refusal of malicious cyber requests*: a 96.6% average over the cyber-related prompts of JailbreakBench, StrongREJECT and AgentHarm, measured by Mistral [S7]. The post gives no prompt count or refusal-scoring method (our search of its text, 2026-10-30).[^qa-20]
- *Surge Code blind pairwise preference*: preferred over GLM-5.3, Kimi K3 and DeepSeek V4.1 Flash, behind Claude Opus 5.5 [S7]. Read in order, the chart text gives win shares of 64%, 64%, 56% and 22%, the last against Claude Opus 5.5 (our reading). The post does not give prompt, grader or tie counts [S7].[^qa-21]

> [!WARNING]
> **QA · Unreplicated.** The 13-point Terminal-Bench 4.0 gain is the post's headline benchmark contrast, and no cited source confirms it independently. The baseline bar is labelled self-reported [S7], and the preview's 28.3% comes from Mistral's own post [S8]. Artificial Analysis's model page [S14] lists Terminal-Bench 4.0 as a component of its Intelligence Index, but QA found no separate Terminal-Bench 4.0 score for the model in the page text. The 41% appears only in Mistral's chart [S7], which does not say who ran it. Until an outside evaluator publishes a released-checkpoint score, read the gain as Mistral's figure.

**Who measures.** Mistral's RL pipeline uses reward models, unit tests, large language model (LLM) judges and static checks as verifiers [S8]; neither post says whether any benchmark scorer above also served as a training reward [S7][S8]. Artificial Analysis is the one outside measurer whose page we opened [S14]; a web search on 2026-10-30 found no independent post-release critique or replication.[^qa-22]

**Serving, wall-clock.** The vLLM recipe gives the fullest timing with hardware and concurrency stated; its numbers are for NVFP4 weights on eight GB300 GPUs with DSpark unless marked otherwise. On that setup with tensor parallelism 8, a single request (concurrency 1) decodes at 3.13 ms per output token, or 3.56 ms with FP8 weights. The draft acceptance length is about 2.9, and output throughput is 1.9 to 2.2 times that without speculation [S13]. A data-parallel configuration with expert parallelism reaches 209.8 output tokens/s per GPU at 8k input and concurrency 32 [S13].

Hugging Face reports about 65 tokens/s for one stream on eight H200 GPUs with FP8 weights [S12]. The card's DSpark claim, up to 1.9 times the throughput, has no hardware or batch attached [S1]. As a losslessness check, the recipe reports GSM8K (1,319 questions, 5-shot) at 0.909 without DSpark and 0.918 with it, a gap it attributes to noise [S13].[^qa-23]

**Long context.** The vLLM recipe validated serving only up to 256k of the 1,048,576 advertised positions, where perplexity matched Mistral's reference implementation [S13].[^qa-24] We found no long-context benchmark (RULER, needle-in-a-haystack, MRCR or LongBench by name) in the card or either Mistral post (our search, 2026-10-30) [S1][S7][S8].[^qa-25]

## Critical assessment

**The architecture is unablated.** Indexer sharing, the 512-token YaRN base, per-head SSMax bias, LeRoPE and NoPE latent sharing arrive together, in a model trained from scratch [S8] at a different size from Large 3 [S19]. Without the promised report [S7], no score can be credited to any of them. DeepSeek's DSA, by contrast, came with a dense-to-sparse continued-training run and a parity comparison against the dense model with shared post-training [S15]. That is a contrast Large 4 does not yet offer.

**One component has contrary small-scale evidence.** The SSMax paper found the learnable-bias variant generalized worse to long contexts at 162M parameters, trained on 1,024-token sequences [S17]. Large 4 uses a per-head bias [S10]. Whether that transfers to a sparse-attention model of this size is unknown.

**The 1M context is a positional capacity, not a measured capability.** The configuration supports 1,048,576 positions [S2]. Serving was validated to 256k [S13], and no long-context accuracy number appears on Mistral's pages (search above). The code's description of 512 tokens as the pretraining window [S10] invites a question the files cannot answer: what sequence lengths the model actually saw, and in what proportion. The release pages disclose no token counts or data composition beyond the preview's note that a significant share of training data was multilingual [S1][S7][S8].[^qa-26]

**Score provenance is mixed.** Within one release post, figures come from benchmarks run or owned by Artificial Analysis, Cognition, Surge and Lakera, alongside Mistral's own measurements [S7][S8].[^qa-27] At least one contrast mixes a self-reported baseline with a later number. The preview-to-release changes go in both directions: Terminal-Bench up 13 points, the Coding Agent Index down 1.8 [S7][S8]. Pages published the same day disagree on which checkpoint's numbers they show [S12].

**Licence.** The text grants MIT-style rights with one condition: a licensee or affiliate that operates a "Model as a Service" business needs a separate commercial licence for commercial use [S5]. That covers third-party inference or post-training access giving meaningful control over inputs, parameters or training data, and excludes embedded end-user features, request relaying, internal use and Mistral's own products [S5]. The file has no revenue threshold or derivative-naming rule (our reading of the full text) [S5]. It is narrower than Large 3's Apache 2.0 [S19], and where hosted fine-tuning services fall will be a matter of interpretation (our reading).

**Reproducibility status (checked 2026-10-30).**

- *Weights*: FP8 and NVFP4 instruct-and-reasoning checkpoints [S20][S1].
- *Inference code*: in Transformers, vLLM and SGLang [S1]. The Transformers implementation came in one commit (#50121) by two Hugging Face contributors, not Mistral [S11], both listed as authors of the Hugging Face blog [S12] (handle-to-name matching is our reading).[^qa-28]
- *Base checkpoint*: none appears among the organization's most recently updated repositories, where the two Large 4 repositories are the newest [S20].
- *Mistral's training code, training data and evaluation scripts*: neither the card nor the release post mentions any; the card points only to third-party fine-tuning libraries [S1][S7].

> [!TIP]
> **QA · Reproducible (inference only).** The FP8 weights, `config.json`, `params.json` and the 54-shard index are in the [Hub repository](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) [S1][S2][S3][S4]. The card links a separate NVFP4 repository [S1]. The architecture can be read in the Transformers [`modular_mistral_large4.py`](https://github.com/huggingface/transformers/blob/main/src/transformers/models/mistral_large4/modular_mistral_large4.py) [S10], and the vLLM recipe gives serve commands and timing conditions [S13]. QA re-derived the post's parameter counts from the safetensors headers of all 54 shards, fetched by HTTP range request: 1,053,161,553,184 parameters, a byte total equal to the index's `total_size`, and 49.82B active. QA also re-counted the layer patterns from `config.json`. As of 2026-10-30, the only models the Hub API returns for Mistral's Large 4 collection are the FP8 and NVFP4 repositories, and the organization's most recently updated models [S20] include no Large 4 base checkpoint. QA found no training code or training data either.

## Connections

Large 4 sits in the DeepSeek design line: its Transformers classes inherit from the GLM-MoE-DSA and DeepSeek-V3.2 indexer implementations [S10], and Hugging Face notes that GLM 5.3 also combines MLA with DSA [S12].[^qa-29] Neither reuse of selections across layers nor NoPE layers appears in DeepSeek's description of DSA (our reading of [S15]).

Among earlier Desk posts, [DeepSeek-V4.1-Flash](../published/2026-10-17-deepseek-v4-1-flash-kv-cache-compression.md) shares one compressed cache across many layers, and [HySparse2](../published/2026-10-22-hysparse2-two-level-kv-sharing.md) routes caches through earlier hidden states. As those posts reported, neither paper ablated the sharing itself at matched compute, and Large 4 has not either. Large 4 also shares token *selections*, a different bet: it reuses a selection decision, not only a representation.

Mistral's [Timestral](../published/2026-10-17-timestral-decoupled-horizon-forecasting.md) also shipped weights before a report, and our [post on Epoch's Terminal-Bench 4.0 review](../published/2026-10-18-epoch-benchmark-reviews-terminal-bench-4.md) covers why single Terminal-Bench 4.0 scores need care.

## Open questions

- Will the technical report ablate indexer sharing at matched compute? Overlap between full and shared layers' top-2,048 sets would be cheap evidence either way.
- What context lengths did pre-training and RL actually use, and how does accuracy degrade between 256k and 1M?
- Does the SSMax bias variant hurt length generalization at this scale, as it did at 162M [S17]?
- Will a base checkpoint follow, and how will the Model-as-a-Service clause be read for hosted fine-tunes [S5]?
- Will independent evaluations reproduce the coding and cyber-refusal figures with stated repeat counts [S14]?

## Sources

S1. [mistralai/Mistral-Large-4-1T-A52B (Hugging Face model card)](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) · lab-post · B · published 2026-10-29 · accessed 2026-10-30
S2. [Mistral-Large-4-1T-A52B config.json](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/config.json) · code · B · published 2026-10-29 · accessed 2026-10-30
S3. [Mistral-Large-4-1T-A52B params.json](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/params.json) · code · B · published 2026-10-29 · accessed 2026-10-30
S4. [Mistral-Large-4-1T-A52B consolidated.safetensors.index.json and the headers of its 54 weight shards](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/consolidated.safetensors.index.json) · code · B · published 2026-10-29 · accessed 2026-10-30
S5. [Mistral Ecosystem Open-Weight License (LICENSE file in the Mistral Large 4 repository)](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/LICENSE) · code · B · published 2026-10-29 · accessed 2026-10-30
S6. [Mistral-Large-4-1T-A52B commit history (Hugging Face Hub API)](https://huggingface.co/api/models/mistralai/Mistral-Large-4-1T-A52B/commits/main) · code · B · published 2026-10-29 · accessed 2026-10-30
S7. [Mistral Large 4 open-weight release post (mistral.ai/news; no byline; date from the page's datePublished metadata)](https://mistral.ai/news/mistral-large-4-oss/) · lab-post · B · published 2026-10-29 · accessed 2026-10-30
S8. [Mistral Large 4 public preview announcement (mistral.ai/news; date from the page's datePublished metadata)](https://mistral.ai/news/mistral-large-4) · lab-post · B · published 2026-10-06 · accessed 2026-10-30
S9. [Mistral Large 4 model page, Mistral documentation (page date not seen; field set to the release date the page states)](https://docs.mistral.ai/models/mistral-large-4-0) · lab-post · B · published 2026-10-06 · accessed 2026-10-30
S10. [modular_mistral_large4.py, Hugging Face Transformers](https://github.com/huggingface/transformers/blob/main/src/transformers/models/mistral_large4/modular_mistral_large4.py) · code · B · published 2026-10-29 · accessed 2026-10-30
S11. [Commit history for src/transformers/models/mistral_large4 (Add Mistral Large 4, #50121)](https://github.com/huggingface/transformers/commits/main/src/transformers/models/mistral_large4) · code · B · published 2026-10-29 · accessed 2026-10-30
S12. [Le Chonk: Mistral Large 4 on Hugging Face (Hugging Face blog)](https://huggingface.co/blog/mistral-large4) · lab-post · B · published 2026-10-29 · accessed 2026-10-30
S13. [vLLM recipe: mistralai/Mistral-Large-4-1T-A52B (date from the page's datePublished metadata; modified 2026-10-29)](https://recipes.vllm.ai/mistralai/Mistral-Large-4-1T-A52B) · code · B · published 2026-10-28 · accessed 2026-10-30
S14. [Mistral Large 4 (High), Artificial Analysis model page (page date not seen; field set to access date)](https://artificialanalysis.ai/models/mistral-large-4) · dataset · B · published 2026-10-30 · accessed 2026-10-30
S15. [DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models](https://arxiv.org/abs/2512.02556) · preprint · B · published 2025-12-02 · accessed 2026-10-30
S16. [DeepSeek-V3 Technical Report (v2)](https://arxiv.org/abs/2412.19437) · preprint · B · published 2024-12-27 · accessed 2026-10-30
S17. [Scalable-Softmax Is Superior for Attention](https://arxiv.org/abs/2501.19399) · preprint · B · published 2025-01-31 · accessed 2026-10-30
S18. [YaRN: Efficient Context Window Extension of Large Language Models (v3)](https://arxiv.org/abs/2309.00071) · preprint · B · published 2023-08-31 · accessed 2026-10-30
S19. [mistralai/Mistral-Large-3-675B-Instruct-2512 (model card; date from the Hub API createdAt)](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512) · lab-post · B · published 2025-11-28 · accessed 2026-10-30
S20. [mistralai organization page on Hugging Face (model list sorted by last update; page date not seen; field set to access date)](https://huggingface.co/mistralai) · code · B · published 2026-10-30 · accessed 2026-10-30

> [!NOTE]
> **QA · Metadata.** On the page itself, the Hugging Face blog cited as [S12] is titled "Welcome Le Chonk: Mistral Large 4 on Hugging Face"; the entry above drops the first word. QA confirmed the author's grades for all 20 sources and changed none.

## QA notes

[^qa-1]: **Verified** — The card [S1] carries an FP8 tag and links a separate NVFP4 checkpoint. The LICENSE [S5] describes itself as a modified MIT licence and requires a separate commercial licence from Mistral before a licensee running a Model-as-a-Service business uses the model commercially. The release post [S7] (page metadata dated 2026-10-29) says a full technical report is coming soon. The repository's first commit, "Initial release", is dated 2026-10-29 [S6].
[^qa-2]: **Verified** — QA fetched the safetensors headers of all 54 shards by HTTP range request and recounted them. Result: 1,053,161,553,184 parameters (excluding 63,844,608 FP8 scale elements) and 49.82B active excluding embeddings and output. The card [S1] gives 49 billion active per token, or 52 billion with embeddings and output layers.
[^qa-3]: **Verified** — `indexer_types` in [S2] has 44 `full` and 28 `shared` entries. [S10] passes the previous full layer's top-k indices to each shared layer. QA searched the card [S1], release post [S7] and preview post [S8]: none contains an ablation or uses the words attention, sparse or indexer. The technical report is not out [S7].
[^qa-4]: **Verified** — In the Terminal-Bench 4.0 chart of [S7], the panel title names the Artificial Analysis Coding Agent Index and the 28% bar is labelled as the self-reported preview. The chart's embedded data gives Mistral Large 4 41.4%. QA found no seeds, repeat counts or intervals in [S1] or [S7]. The warning in Evidence covers an independent Terminal-Bench 4.0 figure.
[^qa-5]: **Verified** — In [S7]'s text, Surge Code's blind pairwise evaluation places Mistral Large 4 behind only Claude Opus 5.5 among the models compared. The chart data gives a 22% win share against that model.
[^qa-6]: **Supported with caveat** — The introduction of the [S19] card says 675B total and 41B active parameters, but its Key Features list says 673B and 39B. The 256k context and Apache 2.0 licence match. The post's 1.56× ratio holds with either total.
[^qa-7]: **Verified** — Matches the abstract of [S18]: about 10× fewer tokens and 2.5× fewer training steps than earlier extension methods. The arXiv listing shows v3 as the latest version, as the post's source entry states.
[^qa-8]: **Verified** — QA recounted `indexer_types` in [S2] and the `dsa.sharing` string in [S3]. Layers 0–16 are full; shared pairs are 17–18, 21–22, …, 69–70; layer 71 is full. The indexer key weight `attention.indexer.wk` appears in exactly 44 layers of the shard headers [S4]. In [S10], a shared layer reuses the previous full layer's indices and raises an error if none exists.
[^qa-9]: **Verified** — In [S2], `no_rope_layers` is 0 at layers 3, 7, …, 71 (18 layers). The YaRN settings are `original_max_position_embeddings: 512` and `factor: 2048`, and `max_position_embeddings` is 1048576. The Transformers config code [S10] has the comment "YaRN over a 512-token pretraining window", and its rotary class multiplies the inverse frequencies by `alpha.exp()`. The headers [S4] contain one `lerope.alpha` tensor of shape [32]. The "pretraining window" wording comes from Hugging Face's code comment, not from any Mistral statement about training lengths.
[^qa-10]: **Supported with caveat** — The layer facts check out. `kv_source_layers` [S2] maps layers 39, 43, …, 71 to layer 35; those nine layers have no `wkv_a_with_mqa` tensor in [S4]; the projection shape is 576 × 6144. QA reproduces 41,920 (63 × 576 + 44 × 128) and 50,688 (72 × 576 + 72 × 128). That baseline also undoes indexer sharing, so the 17% combines both mechanisms. Latent sharing alone, with indexer keys still on 44 layers, saves 5,184 of 47,104 values per token, about 11% (QA calculation from the same shapes).
[^qa-11]: **Verified** — QA's recount from the 54 headers [S4] gives the same figures. The byte total is 1,060,548,427,328, equal to `total_size`. The breakdown is 1,029.18B in routed experts, 1.64B in `vision_encoder`, 2.10B in `mtp_dspark`, and 2.52B in input embeddings plus output projection.
[^qa-12]: **Verified** — QA reproduces 49.82B and 52.34B. The count takes every non-expert text-model tensor plus 4/128 of the routed experts, and excludes the vision encoder, vision adapter and DSpark tensors. [S1] gives 49B and 52B; [S8] gives 52B.
[^qa-13]: **Supported with caveat** — [S14] lists 1.1T total and [S9] lists 1.05T. The header count, 1.053T, rounds to 1.1T at one decimal place. The Artificial Analysis figure is therefore a coarser rounding of the same total, not evidence of a different parameter count.
[^qa-14]: **Verified** — QA searched the card source [S1] and the release-post text [S7] for seeds, confidence intervals, repeat counts and number of runs. Neither page gives any for the reported scores.
[^qa-15]: **Verified** — [S7] gives 48% and 47% fewer tokens per task. Its scatter chart places Mistral Large 4 (High) at 48 with 8.5M tokens per task, and GLM-5.3 at 49 with 15.9M. [S8] gives 49.8%. Neither page mentions an index or harness change.
[^qa-16]: **Verified** — The chart data in [S7] gives the self-reported preview 28, Mistral Large 4 41.4 and GLM-5.3 40 (the next highest). [S8] gives 28.3%. The gain is 13.4 points measured from 28, or 13.1 from 28.3.
[^qa-17]: **Verified** — [S7] says RL took BrowseComp to 84.5% from an SFT checkpoint that scored 75%. Neither post describes how the released checkpoint was chosen.
[^qa-18]: **Verified** — [S1] gives 26, calls it the highest among Western open-weight models, and notes that leading Chinese open-weight models score higher. [S14] shows Mistral Large 4 (High) at 26 on Intelligence Index v5, ranked 9 of 22.
[^qa-19]: **Verified** — The chart data in [S7] gives Mistral Large 4 50.9, MiMo-V2.6-Pro 56 and DeepSeek-V4.1-Flash 1017 57. [S8] reports 82% on the index's vulnerability-reproduction-and-patch test, and [S12] repeats both the 82% and the 49.8% preview figures.
[^qa-20]: **Verified** — [S7] gives a 96.6% average refusal rate, which it describes as the highest it has measured among open models. The chart caption names the three benchmarks. The post gives no prompt count or scoring method.
[^qa-21]: **Supported with caveat** — The chart's embedded data in [S7] pairs each value with an opponent label: GLM-5.3 64, Kimi K3 64, DeepSeek V4.1 Flash 56, Claude Opus 5.5 22. The pairing is therefore the source's own, not only an inference from text order. The same data sets a `tie` field to 0 for every opponent, and each pair of win shares sums to 100%. Ties were therefore either absent or excluded, and the page does not say which. Prompt and grader counts are not given.
[^qa-22]: **Supported with caveat** — Among the cited sources, Artificial Analysis [S14] is the only outside measurer. A QA search on 2026-10-30 also found no critique or replication of the architecture choices. It did find a third-party leaderboard listing benchmark scores for Mistral Large 4, but that page does not say which checkpoint it tested. QA did not add it as a source because this post is already at the 20-source limit. Treat "no independent check" as covering the released weights specifically.
[^qa-23]: **Supported with caveat** — [S13] reports 0.909 on the FP8 checkpoint and 0.918 with DSpark. It says the latter "sits at the base server's own noise floor". The post's paraphrase is a fair reading, though the recipe does not state the difference as a measured gap.
[^qa-24]: **Verified** — [S13] says serving was validated up to 256k, the `--max-model-len` it sets. It reports per-layer parity, and 256k long-context perplexity equal to Mistral's reference implementation.
[^qa-25]: **Verified** — QA searched the card [S1] and the text of [S7] and [S8] for RULER, needle, MRCR and LongBench and found none.
[^qa-26]: **Supported with caveat** — [S1], [S7] and [S8] give no pretraining token count or data mix. [S8] does give an RL throughput figure (roughly 33 billion tokens per day for one run on about 3,000 GPUs), but that is a rate, not a training total.
[^qa-27]: **Supported with caveat** — [S7] names Artificial Analysis, Cognition (FrontierCode 2.0) and Surge. It reports the B3 Agent Security Benchmark without naming its owner, and only the preview post [S8] attributes B3 to Lakera. The four owners therefore come from the two posts together, not from the release post alone.
[^qa-28]: **Supported with caveat** — [S11] shows one commit, Add Mistral Large 4 (#50121), dated 2026-10-29 and authored by GitHub users remi-or and Cyrilvallez. [S12] lists Rémi Ouazan Reboul (Hub handle ror) and Cyril Vallez (cyrilvallez) among its authors. The handle match is likely but unconfirmed, and neither page states the contributors' employer. The file header in [S10] reads as a HuggingFace Inc. team copyright.
[^qa-29]: **Supported with caveat** — The class inheritance from the GLM-MoE-DSA and DeepSeek-V3.2 indexer modules is confirmed by the imports in [S10]. On GLM 5.3, [S12] says only that MLA with a DSA indexer is "a direction in other models such as GLM 5.3", which is looser than "also combines".

## Disclosure

> *Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
