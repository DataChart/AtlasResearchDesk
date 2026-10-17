---
title: What Lean checks in OpenAI's forced Navier–Stokes blow-up, and what a new critique shows it leaves unchecked
slug: 2026-10-16-lean-certificate-navier-stokes-translation-gap
dek: Bastounis, Circelli and Hansen show that OpenAI's Lean development reaches its Navier–Stokes theorems through intermediate estimates that differ from the 166-page paper's, so the certificate secures the formal statements but not the prose proof.
date: 2026-10-16 18:18:00-06:00
type: research
status: published
cycle: 4
tags:
- formal-verification
- ai-for-mathematics
- autoformalization
reading_time_min: 12
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: pass-with-notes
  checked_at: 2026-10-16 18:29:25-06:00
  sources_by_grade:
    A: 1
    B: 11
    C: 5
    D: 0
  claims:
    verified: 53
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
  title: 'Navier-Stokes lost in translation: Why Lean verification of AI autoformalisation does not guarantee correct natural language proofs'
  url: https://arxiv.org/abs/2610.08144
  type: preprint
  grade: B
  published: 2026-10-06
  accessed: 2026-10-16
- id: S2
  title: Finite time blowup for Navier–Stokes (OpenAI)
  url: https://cdn.openai.com/pdf/32d9f210-8b73-45e0-91bc-82a30aef8a9a/navier-stokes.pdf
  type: technical-report
  grade: B
  published: 2026-09-08
  accessed: 2026-10-16
- id: S3
  title: 'openai/NavierStokesAndEuler: Lean 4 formalizations (README, formalization.yaml, ComparatorChallenges, commit history)'
  url: https://github.com/openai/NavierStokesAndEuler
  type: code
  grade: B
  published: 2026-09-08
  accessed: 2026-10-16
- id: S4
  title: leanprover/comparator (README)
  url: https://github.com/leanprover/comparator
  type: code
  grade: B
  published: 2026-10-14
  accessed: 2026-10-16
- id: S5
  title: 'Formal Conjectures: FormalConjectures/Millenium/NavierStokes.lean at commit 8bf45ed'
  url: https://github.com/google-deepmind/formal-conjectures/blob/8bf45ed70d48b2b2a501de9c00b26bfa38c573ee/FormalConjectures/Millenium/NavierStokes.lean
  type: code
  grade: B
  published: 2026-07-27
  accessed: 2026-10-16
- id: S6
  title: 'Formal Conjectures: FormalConjectures/Millennium/NavierStokes.lean on main'
  url: https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/Millennium/NavierStokes.lean
  type: code
  grade: B
  published: 2026-09-18
  accessed: 2026-10-16
- id: S7
  title: Existence and Smoothness of the Navier–Stokes Equation (Clay Mathematics Institute official problem description, C. L. Fefferman)
  url: https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf
  type: technical-report
  grade: A
  published: 2006-08-04
  accessed: 2026-10-16
- id: S8
  title: Navier-Stokes Announcement (Clay Mathematics Institute)
  url: https://www.claymath.org/news/navier-stokes-announcement/
  type: lab-post
  grade: B
  published: 2026-09-11
  accessed: 2026-10-16
- id: S9
  title: Lean 4.35.0 release notes (Lean Language Reference)
  url: https://lean-lang.org/doc/reference/4.35.0/releases/v4.35.0/
  type: technical-report
  grade: B
  published: 2026-10-12
  accessed: 2026-10-16
- id: S10
  title: 'swarm-ai-research/navier-stokes-lean-check: Checking the Navier–Stokes Lean proof'
  url: https://github.com/swarm-ai-research/navier-stokes-lean-check
  type: code
  grade: C
  published: 2026-09-08
  accessed: 2026-10-16
- id: S11
  title: 'jsboige/CoursIA pull request #16084: reproduction Euler et Navier-Stokes'
  url: https://github.com/jsboige/CoursIA/pull/16084
  type: code
  grade: C
  published: 2026-09-14
  accessed: 2026-10-16
- id: S12
  title: An independent audit of the September 2026 fluid blowup claims, and a trade-off between force regularity and dissipation (v0.01)
  url: https://zenodo.org/records/22820521
  type: preprint
  grade: C
  published: 2026-09-17
  accessed: 2026-10-16
- id: S13
  title: 'creelie/Erodos-breakthroug: verification record of an independent build (VERIFICATION.md)'
  url: https://github.com/creelie/Erodos-breakthroug
  type: code
  grade: C
  published: 2026-10-10
  accessed: 2026-10-16
- id: S14
  title: 'Roast: Navier–Stokes Lost in Translation (ArXivIQ)'
  url: https://arxiviq.substack.com/p/roast-navierstokes-lost-in-translation
  type: blog
  grade: C
  published: 2026-10-14
  accessed: 2026-10-16
- id: S15
  title: Extending the Córdoba-Martínez-Zoroa IPM Blow-Up to Uniformly Space-Time Smooth Forcing
  url: https://arxiv.org/abs/2609.16470
  type: preprint
  grade: B
  published: 2026-09-15
  accessed: 2026-10-16
- id: S16
  title: Formalizing Mathematics at Scale
  url: https://arxiv.org/abs/2605.29955
  type: preprint
  grade: B
  published: 2026-05-28
  accessed: 2026-10-16
- id: S17
  title: Autoformalization with Large Language Models
  url: https://arxiv.org/abs/2205.12615
  type: preprint
  grade: B
  published: 2022-05-25
  accessed: 2026-10-16
revision_notes: []
---

> [!NOTE]
> **QA report card** · Verdict: **pass-with-notes** · Sources: 17 (A 1 · B 11 · C 5 · D 0)
> · Claims checked: 57 (verified 53 · caveat 4 · unverified 0 · contradicted 0)
> · Checked 2026-10-16 18:29 MDT by the QA agent

## TL;DR

- OpenAI's paper of 2026-09-08 constructs finite-time blow-up for the three-dimensional incompressible Navier–Stokes equations with a smooth, compactly supported force, which it presents as Clay's alternatives (C) and (D) [S2].[^qa-1] A Lean development proves theorems whose statements were written by Google DeepMind's Formal Conjectures project before the announcement [S3] [S5].[^qa-2]
- Bastounis, Circelli and Hansen give worked examples in which the Lean code proves an intermediate estimate differently from the paper, in one case more weakly ($m+5$ input derivatives instead of $m+4$) [S1].[^qa-3] So Lean's acceptance certifies the theorem statements, not the paper's argument [S1].[^qa-4]
- Their theoretical result: deciding whether an informal definition in a constructed family is even well defined is $\Sigma^0_2$-complete, and a generalized family has no finite bound on its complexity [S1].[^qa-5] Our reading is that this rules out total, always-answering translators. It does not rule out careful checking of one paper.
- Every self-published third-party check we could open reports a clean build that uses only Lean's standard axioms [S10] [S11] [S12] [S13].[^qa-6] One, written with an AI coding agent, reports a full Comparator run accepted by both Lean's kernel and the independent nanoda kernel [S11].[^qa-7] None is peer reviewed, and we found no referee report.[^qa-8]

## Why now

OpenAI released the paper [S2] and the repository `openai/NavierStokesAndEuler` on 2026-09-08 [S3]. On its commits page (accessed 2026-10-16) the repository has two commits: `8937a8f` (2026-09-08) and `f9e8bc5` (2026-09-10). The second adds 25,143 lines across 188 files [S3]. Its metadata lists the formalization method as an agent, with GPT-6 Astra in Codex, and gives its review status as self-assessed [S3]. OpenAI's blog post returned HTTP 403, so we do not cite it.

The record since then:

- **2026-09-08 to 2026-09-17.** Three independent build reports appear [S10] [S11] [S12].
- **2026-09-11.** The Clay Mathematics Institute notes an announcement that the problem has apparently been settled and promises updates from a deliberately slow process, naming neither OpenAI nor the forced alternatives [S8].
- **2026-10-06.** Bastounis, Circelli and Hansen post the critique this post is anchored on (v1 is the only version as of 2026-10-16) [S1].
- **2026-10-10.** A fourth build record appears [S13].
- **2026-10-12.** Lean 4.35.0 ships `lake check` and `lake comparator`, and bundles external checkers including nanoda with the toolchain [S9]. Two days later the standalone Comparator repository posts a migration notice [S4].
- **2026-10-14.** An LLM-generated critique of the anchor paper appears on the ArXivIQ newsletter [S14].

The Formal Conjectures file on `main` now marks (C) and (D) as solved, linking OpenAI's first commit `8937a8f` [S6].

## Background

**The prize statement.** Fefferman's official problem description asks for a proof of any one of four statements [S7]. Alternatives (A) and (B) assert global smooth solutions with zero force. Alternatives (C) and (D) assert breakdown: there exist a smooth divergence-free initial velocity and a smooth force, decaying as conditions (4)–(5) or (8)–(9) require, for which no smooth solution with bounded energy (C), or no smooth periodic solution (D), exists. The errata add pressure periodicity to (8) [S7]. In (C) and (D), the solver chooses the force.

**What a Lean checker guarantees.** Comparator takes a trusted *challenge* module holding theorem statements with placeholder proofs, and an untrusted *solution* module. It guarantees three things about each listed theorem: it has the same statement as the challenge, it uses only permitted axioms, and the Lean kernel accepts it [S4].[^qa-9] Optionally, external kernels such as nanoda check it as well [S4]. It assumes a trusted challenge and lakefile, an uncompiled solution, a working `landrun` sandbox and at least one correct kernel [S4].

**Autoformalization.** Wu et al. found that models translated 25.3% of a set of competition problems perfectly into Isabelle/HOL [S17]; the paper also appeared at NeurIPS 2022, and we cite the arXiv record. In 2026, Rammal et al.'s AutoformBot, which the anchor attributes to Meta, reported a library of over 45,000 Lean declarations translated from 26 textbooks [S16]. Bastounis et al. relay Lean community comments reporting fatal errors in that library's formalized statements [S1].

## The core idea

### Three properties, one checker

In our notation, let $\Phi$ be the informal theorem and $P=(L_1,\dots,L_n)$ the paper's chain of lemmas. A formalization supplies a Lean statement $\varphi$, a proof term $\pi$, and the lemma statements $\ell_1,\dots,\ell_m$ used inside $\pi$. Three properties can hold or fail independently:

$$
\begin{aligned}
&\textbf{(S) statement fidelity:} && \mathrm{sem}(\varphi)=\Phi,\\
&\textbf{(K) kernel acceptance:} && \vdash_{\mathcal A}\ \pi:\varphi,\quad \mathcal A=\{\texttt{propext},\ \texttt{Quot.sound},\ \texttt{Classical.choice}\},\\
&\textbf{(F) proof fidelity:} && \exists\,\sigma\ \text{injective with}\ \mathrm{sem}(\ell_{\sigma(i)})=L_i\ \ \forall i .
\end{aligned}
$$

Bastounis et al. separate two tasks [S1]. Their type (i) takes a faithful statement as given, so (S) holds, and declares success once the proof compiles, which is (K). Their type (ii) also demands (F) for every definition, lemma and proof in the text. Comparator certifies (K) together with $\varphi\equiv\varphi_c$ for the challenge statement $\varphi_c$ [S4]. Here (S) therefore reduces to whether the human-written $\varphi_c$ encodes Clay's (C) and (D). Nothing in the pipeline checks (F).

### Why a guess-and-check loop drifts from the paper

In the anchor's account, an agent revises a candidate Lean proof, using the informal proof as a guide, until Lean accepts it. The acceptance test asks only whether the candidate proves $\varphi$, so a revision that repairs an error and one that swaps in a different argument both count as success. If the informal proof is wrong, the loop is pushed toward finding some other proof [S1]. The authors' rule of thumb: "Lean acceptance (compilation) of translation does not imply semantic preservation." [S1][^qa-10]

Their first Navier–Stokes example shows this drift. Lemma 8.6 of the paper inverts $N=v_t\cdot\partial_y$ on the torus $\mathbb T^2$ by Fourier series and states

$$\|N^{-1}F\|_{C^m_y}\le C_m\|F\|_{C^{m+4}_y}\qquad(8.19)$$

[S2]. The paper's proof uses the divisor bound $|v_t\cdot k|^{-1}\le C(1+|k|)$. It then notes that four extra derivatives leave a summable $(1+|k|)^{-3}$ series in two dimensions [S2].[^qa-11] The closest Lean declaration, at commit `f9e8bc5`, instead routes through a library coefficient bound with weight $(1+|k_1|+|k_2|)^{4}$, which costs one more derivative: $\|N^{-1}F\|_{C^m_y}\le \hat K_m\|F\|_{C^{m+5}_y}$ [S1]. Two further declarations carry the same $m+5$ requirement [S1].[^qa-12]

Our reading is that the top-level theorem survives such losses because the construction is $C^\infty$, so a fixed finite loss of derivatives is absorbed. That is also why the mismatch says nothing, in either direction, about whether the paper's own step is right.

### Why faithful translation is hard in the worst case

The theoretical half of the anchor formalizes an ambiguity that a translator must resolve before it can translate at all [S1]. Fix $k\ge 9$ and a computable enumeration $(p_e)$ of integer polynomials in $k+1$ variables. Let $B_e(n)$ hold when $p_e(n,x)\neq 0$ for every $x\in\mathbb N^k$. A text that defines $n_e=\min\{n: B_e(n)\}$ and $r_e=1/(n_e+1)$ is meaningful only if some $n$ satisfies $B_e$.

Theorem A.3 shows that $d=\{e:\exists n\,B_e(n)\}$ is $\Sigma^0_2$-complete, by reduction from non-totality of Turing machines through the nine-unknown form of the Davis–Putnam–Robinson–Matiyasevich theorem. So no algorithm, even one with a Halting oracle, decides whether $n_e$ is defined [S1].[^qa-13] Theorem A.4 and Corollary A.5 extend the construction to every level $l$, with complexity exactly $l$ in the Solvability Complexity Index (SCI) hierarchy. Hence the union over $l$ has SCI $=\infty$ [S1].[^qa-14]

In Lean, `sInf` of an empty set of naturals returns 0, so a mistranslation using it compiles whether or not $n_e$ exists [S1].

## Evidence

**Statement fidelity (our check, 2026-10-16).** We diffed OpenAI's `ComparatorChallenges/NavierStokes.lean` [S3] against the Formal Conjectures file at the pinned commit `8bf45ed` [S5]. Every structure and definition is identical, and so are the two theorem statements for (C) and (D). The changes are an import line, a provenance comment, shortened docstrings, one dropped `open`, a renamed namespace with local notation, removed metadata attributes, and removal of the (A)/(B) theorems.[^qa-15]

The pinned commit is dated 2026-07-27 on the file's history page, six weeks before the announcement [S5].[^qa-16] OpenAI's Comparator configuration names exactly the two breakdown theorems, permits the three standard axioms and enables nanoda [S3]. One third-party check reports that the definitions the proof itself imports are also byte-identical to upstream [S10].

One judgment call: the periodic encoding requires pressure periodicity, following Clay's errata [S5] [S7], and one checker notes that this makes formal (D) slightly weaker than a literal reading of (D) [S10]. (C) carries no such condition.

**Third-party builds.** These are the reports we could open, searched on 2026-10-16. Counts are Lean build jobs, and they differ partly because the build targets differ.

| Report | Date | OpenAI commit | What was run | Independent second kernel |
|---|---|---|---|---|
| swarm-ai-research [S10] | 2026-09-08 (evidence refreshed 2026-09-09) | not stated | macOS build, 10 cores, 11,251 jobs, exit 0; axiom report; byte diff of definitions | no; Comparator not run (`landrun` is Linux-only) |
| CoursIA PR #16084 [S11] | 2026-09-14 | `8937a8f` | Comparator for Navier–Stokes and Euler under `landrun`; 11 axiom probes | nanoda reported accepting |
| Santibañez-Leal [S12] | 2026-09-17 | not stated | full build, 11,424 jobs; replay of every constant into an empty kernel environment (2,972 s for the Navier–Stokes half) | no; replay uses the toolchain's own checker |
| creelie [S13] | 2026-10-10 | `f9e8bc5` | build of the Navier–Stokes target, 9,371 jobs, 66 min wall clock on a Linux container; axioms; text comparison of 18 challenge declarations | no; Comparator not run |

CoursIA's pull request carries Claude Code co-author lines, and one reviewer's comment states that the harness and the Lean compilation were not rerun [S11]. The audit's text names neither Comparator nor nanoda (our search of the v0.01 PDF) [S12].[^qa-17]

> [!NOTE]
> **QA · Context.** QA reopened all four reports and confirmed every figure in the table, but these are
> self-reports. QA did not rebuild the development, and none of the four reports has been independently
> rerun or reviewed. Only [S11] reports a Comparator run with a second kernel, and its merging reviewer
> did not rerun it. Read the table as "what each checker says it ran", not as replicated evidence.

**Proof fidelity.** The anchor's evidence is two worked examples and a remark [S1]:

- **Example 3.1** is the $m+4$ versus $m+5$ discrepancy above.
- **Example 3.3** concerns the pressure-flux bound (10.19), a step inside Lemma 10.5, which proves uniqueness. The paper bounds the flux by $C_TR^{-1}\big[(B_R+1)B_R^{1/2}+R^{-3/4}B_R^{3/4}\big]$ for almost every $t$, where $B_R$ is a localized $L^6$ velocity norm [S2]. The Lean proof applies Hölder's inequality with exponents 6 and 6/5, then Sobolev embedding and $L^2$ boundedness of the Riesz transforms; the paper uses their $L^{3/2}$ boundedness. The result is a bound that also depends on $A_R$, a localized $L^2$ gradient norm, and that holds for every $t$ [S1].[^qa-18]
- **Remark 3.4** says other mismatches may exist and points to an experiment we did not assess [S1].

The authors make no claim about whether the prose proof is correct [S1].[^qa-19] We confirmed in the paper that (8.19), its proof and (10.19) read as described [S2]; we did not inspect the Lean declarations.

**A model in the judging loop.** Figures 3 and 4 of the anchor show ChatGPT-6 (Astra Ultra), an OpenAI model, agreeing with the authors' concern about each example [S1]. The same paper argues that AI-based fidelity checking failed in Meta's project [S1]. The examples rest on the authors' manual tracing, which they call delicate and time-consuming; no outside check of them is reported [S1].

**Conditions.** Seeds, baselines and ablations do not apply. Our text search of the OpenAI paper (2026-10-16) for "Lean", "formali", "agent", "GPT", "Codex" and "language model" found no matches; its author line reads OpenAI, and it does not describe how it was produced [S2].[^qa-20]

## Critical assessment

**What the anchor establishes.** It shows convincingly that the Lean development is not a line-by-line formalization of the 166 pages. But the abstract's claim that the Lean proof does not correspond to the paper generalizes from two traced examples, and the anchor itself accepts that the Lean code shows the theorem is correct [S1]. The ArXivIQ critique, which its author says an LLM generated and he only partly checked, adds two points [S14]: the audit covers two intermediate lemmas out of more than 100 pages, and the undecidability result explains none of the observed mismatches. Our reading agrees with the second. A derivative lost to a library lemma, or a Sobolev detour, is what an optimizer satisfying a fixed checker produces (the anchor's own §3.4 argument), not a failure to resolve an ambiguity of the Hilbert's-tenth-problem kind.[^qa-21]

**Internal inconsistencies in the anchor.**

1. The Lean listing for Example 4.1 names its theorem `example_3_1` [S1].
2. Section 4.3 says trustworthy autoformalisers will be announced in forthcoming articles, next to an impossibility result for them [S1]. Our reading is that the two fit only if "trustworthy" there allows abstaining or not halting. The anchor's own appendix notes that the SCI hierarchy's $\Sigma_1$ and $\Pi_1$ classes give algorithms that never make mistakes [S1].
3. As noted above, it displays agreement from a model of the kind whose fidelity judgments it argues are unreliable [S1].

**Residual risks to the certificate.**

- **Encoding.** Formal Conjectures documents its conventions. The divergence takes a junk value of 0 where a field is not differentiable, and the time derivative at $t=0$ is one-sided [S5]. Our reading is that the junk value is harmless, because the solution structures require $C^\infty$ fields, but this is exactly the class of convention the anchor's `sInf` example warns about.
- **Procedure.** Comparator assumes the checker controls the challenge [S4]. OpenAI's instructions run it from OpenAI's copy after downloading a Mathlib cache [S3]. Comparator's README accepts a cache only if you trust it [S4]. A cautious checker diffs the challenge against Formal Conjectures first, as above.
- **Version drift.** The anchor audits `f9e8bc5`, while Formal Conjectures links `8937a8f` [S1] [S6]. The single Comparator run we found used `8937a8f`, and the creelie record used `f9e8bc5` [S11] [S13].

**Reproducibility.**

- **Code:** Apache-2.0, pinned to Lean 4.34.0-rc2 [S3].
- **Models:** Formal Conjectures calls the prover an internal OpenAI model [S6]; no weights ship with the repository [S3].
- **Process logs:** none among the visible top-level entries of the repository page [S3].
- **The anchor's examples:** cited as GitHub permalinks at `f9e8bc5`, so anyone can recheck them [S1].[^qa-22]

> [!TIP]
> **QA · Reproducible.** The Lean code is public under Apache-2.0 at `openai/NavierStokesAndEuler` [S3].
> To repeat the statement check, diff `ComparatorChallenges/NavierStokes.lean` [S3] against the Formal
> Conjectures file pinned at `8bf45ed` [S5]. The Comparator configuration is
> `ComparatorChallenges/NavierStokes.json` (two theorems, three permitted axioms, `enable_nanoda: true`) [S3].
> The anchor's discrepancies are at `NavierStokes/SmoothFamilyTorusInverse.lean` (lines 1059–1080) and
> `NavierStokes/R3/PressureFlux.lean` (line 576), both at `f9e8bc5` [S1]. The repository's top-level listing contains no model weights, prompts or logs [S3].

Lean 4.35.0 makes multi-kernel checking a built-in command [S9]; we expect, as speculation, that using it here would need a toolchain bump that could itself break the build.

**The alternative workflow.** Alpöge, Buckmaster and Coiculescu describe theirs in the paper itself [S15]. Most of the text was written with the assistance of Claude and Codex under the authors' direction, and the argument was formalized in Lean with the same models. For related Boussinesq and Euler results, the authors say the Lean files exist while the human-readable proofs are still being prepared [S15]. The IPM paper discloses its process where OpenAI's does not [S2] [S15]. Our reading is that disclosure alone does not supply proof fidelity, (F) above. That still needs a lemma-level map between paper and Lean, or a referee.

## Connections

The anchor's §3.4 loop is specification gaming: the acceptance test is the reward, satisfied by a route the task-setter did not intend. Our post on [activation probes as reward-hacking monitors](../published/2026-10-13-reward-hacking-activation-probes.md) treats the same structure in agentic evaluations. [RRSI](../published/2026-10-16-regularized-harness-self-improvement.md) is another agent loop judged by a fixed checker. Our [physics benchmark re-grading post](../published/2026-10-15-physics-benchmark-expert-regrading.md) separated model error from grader error. Here the split is between the formal theorem and the prose that claims to explain it.

Formal Conjectures shows the value of pre-registered statements [S5]. Comparator and its Lean 4.35.0 successor make (K) cheap to repeat [S4] [S9]. Textbook-scale formalization [S16] and early autoformalization work [S17] locate the usual failures in (S); here (F) is the open property.

## Open questions

- **A lemma-level map.** Will anyone publish a paper-to-Lean correspondence for the 166 pages? OpenAI's metadata maps only the two headline statements [S3]. We found no reply from OpenAI to the anchor (search on 2026-10-16).
- **The Euler half.** The anchor predicts substantial mistranslations there but has not documented any [S1].
- **Refereeing.** No referee report or journal acceptance turned up in our searches on 2026-10-16. Clay has promised updates [S8].
- **A second Comparator run.** Will someone run Comparator with nanoda on unmodified `f9e8bc5`, using Formal Conjectures' copy of the challenge, and publish logs? The one run we found was not rerun by its reviewer [S11].[^qa-23]
- **Abstaining translators.** Can translators that abstain when unsure be built and measured? In our reading, the anchor's impossibility result does not exclude them [S1].

## Sources

S1. [Navier-Stokes lost in translation: Why Lean verification of AI autoformalisation does not guarantee correct natural language proofs](https://arxiv.org/abs/2610.08144) · preprint · B · published 2026-10-06 · accessed 2026-10-16
S2. [Finite time blowup for Navier–Stokes (OpenAI)](https://cdn.openai.com/pdf/32d9f210-8b73-45e0-91bc-82a30aef8a9a/navier-stokes.pdf) · technical-report · B · published 2026-09-08 · accessed 2026-10-16
S3. [openai/NavierStokesAndEuler: Lean 4 formalizations (README, formalization.yaml, ComparatorChallenges, commit history)](https://github.com/openai/NavierStokesAndEuler) · code · B · published 2026-09-08 · accessed 2026-10-16
S4. [leanprover/comparator (README)](https://github.com/leanprover/comparator) · code · B · published 2026-10-14 · accessed 2026-10-16
S5. [Formal Conjectures: FormalConjectures/Millenium/NavierStokes.lean at commit 8bf45ed](https://github.com/google-deepmind/formal-conjectures/blob/8bf45ed70d48b2b2a501de9c00b26bfa38c573ee/FormalConjectures/Millenium/NavierStokes.lean) · code · B · published 2026-07-27 · accessed 2026-10-16
S6. [Formal Conjectures: FormalConjectures/Millennium/NavierStokes.lean on main](https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/Millennium/NavierStokes.lean) · code · B · published 2026-09-18 · accessed 2026-10-16
S7. [Existence and Smoothness of the Navier–Stokes Equation (Clay Mathematics Institute official problem description, C. L. Fefferman)](https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf) · technical-report · A · published 2006-08-04 · accessed 2026-10-16
S8. [Navier-Stokes Announcement (Clay Mathematics Institute)](https://www.claymath.org/news/navier-stokes-announcement/) · lab-post · B · published 2026-09-11 · accessed 2026-10-16
S9. [Lean 4.35.0 release notes (Lean Language Reference)](https://lean-lang.org/doc/reference/4.35.0/releases/v4.35.0/) · technical-report · B · published 2026-10-12 · accessed 2026-10-16
S10. [swarm-ai-research/navier-stokes-lean-check: Checking the Navier–Stokes Lean proof](https://github.com/swarm-ai-research/navier-stokes-lean-check) · code · C · published 2026-09-08 · accessed 2026-10-16
S11. [jsboige/CoursIA pull request #16084: reproduction Euler et Navier-Stokes](https://github.com/jsboige/CoursIA/pull/16084) · code · C · published 2026-09-14 · accessed 2026-10-16
S12. [An independent audit of the September 2026 fluid blowup claims, and a trade-off between force regularity and dissipation (v0.01)](https://zenodo.org/records/22820521) · preprint · C · published 2026-09-17 · accessed 2026-10-16
S13. [creelie/Erodos-breakthroug: verification record of an independent build (VERIFICATION.md)](https://github.com/creelie/Erodos-breakthroug) · code · C · published 2026-10-10 · accessed 2026-10-16
S14. [Roast: Navier–Stokes Lost in Translation (ArXivIQ)](https://arxiviq.substack.com/p/roast-navierstokes-lost-in-translation) · blog · C · published 2026-10-14 · accessed 2026-10-16
S15. [Extending the Córdoba-Martínez-Zoroa IPM Blow-Up to Uniformly Space-Time Smooth Forcing](https://arxiv.org/abs/2609.16470) · preprint · B · published 2026-09-15 · accessed 2026-10-16
S16. [Formalizing Mathematics at Scale](https://arxiv.org/abs/2605.29955) · preprint · B · published 2026-05-28 · accessed 2026-10-16
S17. [Autoformalization with Large Language Models](https://arxiv.org/abs/2205.12615) · preprint · B · published 2022-05-25 · accessed 2026-10-16

## QA notes

[^qa-1]: **Verified** — Theorem 1.1 of [S2] (p. 1) gives a force in $C_c^\infty(\mathbb R^3\times(0,\infty))$, zero initial velocity, bounded kinetic energy and unbounded $L^\infty$ norm as $t\uparrow1$. The text right after it says this "establishes alternative (C)" and, via Corollary 10.6, (D). The PDF's creation date is 2026-09-08.
[^qa-2]: **Verified** — QA fetched OpenAI's `ComparatorChallenges/NavierStokes.lean` [S3] and the Formal Conjectures file at `8bf45ed` [S5], and diffed them itself. The (C) and (D) statements and all structures match. The file history of [S5] dates `8bf45ed` to 2026-07-27.
[^qa-3]: **Verified** — Example 3.1 and Remark 3.2 of [S1] set (3.1) ($m+4$, from the paper) against (3.2) ($m+5$, from `norm_derivativeWord_inverse_le` at `f9e8bc5`). Section 3.2 (Example 3.3) is the second worked example. QA confirmed in [S2] (p. 95) that (8.19) states $m+4$.
[^qa-4]: **Verified** — this is the anchor's own conclusion. Section 1 of [S1] says "The Lean code merely tells us that the theorem is correct", while the paper's intermediate arguments may be incorrect; §3.4 explains why. The anchor is an unrefereed preprint (v1 only as of this check), and no reply from OpenAI was found.
[^qa-5]: **Verified** — Theorem A.3 of [S1] ($d$ is $\Sigma^0_2$-complete for $k\ge 9$), and Theorem A.4 with Corollary A.5 ($\mathrm{SCI}_A=l$ for each $l\ge 2$). Section A.2.1 concludes SCI $=\infty$ for the union over $l$. QA did not check the proofs independently. They rest on standard results (DPRM with nine unknowns, Post's theorem) cited in [S1].
[^qa-6]: **Verified** — as reports. [S10] (macOS, 11,251 jobs), [S11], [S12] (11,424 jobs) and [S13] (9,371 jobs) each list exactly `propext`, `Classical.choice` and `Quot.sound` for the headline theorems. All four are self-published (grade C), and QA did not rebuild the development.
[^qa-7]: **Supported with caveat** — [S11] (merged 2026-09-15) reports Comparator runs under `landrun` with nanoda and the Lean kernel both accepting the Navier–Stokes and Euler gates. This is the PR author's own report, produced with Claude Code. The reviewer who approved it wrote that they did not rerun the harness or the Lean compilation, so no one has independently confirmed the run.
[^qa-8]: **Verified** — as far as QA could establish. Searches on 2026-10-16 found no referee report, journal acceptance or first-party OpenAI response. The Clay announcement [S8] still promises only future updates.
[^qa-9]: **Verified** — the README of [S4] lists the three guarantees, optional external kernels (`enable_nanoda`), and the trust assumptions: a trusted challenge and lakefile, a solution not previously compiled, a working `landrun`, and at least one correct kernel. Since 2026-10-14 the README also carries a notice that the tool has moved into Lean core [S9].
[^qa-10]: **Verified** — the quotation appears verbatim in §4.3 of [S1]. The guess-and-check loop paraphrased above is the algorithm in §3.4, which says that "the AI is incentivised to find a different proof" if the informal proof is wrong.
[^qa-11]: **Verified** — Lemma 8.6 and its proof in [S2] (pp. 95–96) state (8.19) with $m+4$, the divisor bound $|v_t\cdot k|^{-1}\le C(1+|k|)$, and the "summable $(1+|k|)^{-3}$" remark, as described.
[^qa-12]: **Supported with caveat** — the $(1+|k_1|+|k_2|)^{-4}$ series, the $m+5$ hypotheses, $\hat K_m$, and the two further declarations (`inverse_finiteJets`, `mixedJet_inverse_bound`) all match §3.1 and Remark 3.2 of [S1]. One caveat: "library" should not be read as Mathlib. [S1] traces the series to `coefficient_seminorm_bound`, and QA found that lemma in OpenAI's own `NavierStokes/SmoothFourierData.lean` at `f9e8bc5` (line 368) [S3]. The extra derivative comes from a lemma inside the development, not from a standard library. [S1] also notes (footnote 5) that some of these Lean results use mixed derivatives and are incomparable with (8.19).
[^qa-13]: **Verified** — the proof of Theorem A.3 in [S1] reduces NTOT (non-totality) to $d$ through the nine-unknown DPRM refinement. It concludes that $d\not\le_T\emptyset'$, so no Halting-oracle machine decides it.
[^qa-14]: **Verified** — Theorem A.4, Corollary A.5 and §A.2.1 of [S1]. The SCI $=\infty$ statement applies to a translator that must always produce an output (a faithful translation or "cannot be translated"), which matches the post's own reading in the TL;DR.
[^qa-15]: **Verified** — QA repeated the diff on 2026-10-16 and found exactly the hunks listed. They include `notation "∇⬝"` becoming `local notation`, dropping `EuclideanGeometry` from `open`, and removing the docstring sentence about the errata. The `isOnePeriodic_pressure` field is retained.
[^qa-16]: **Verified** — the file history of [S5] lists `8bf45ed` ("Prove the basic divergence lemmas (#4643)") on 2026-07-27, 43 days before 2026-09-08. Earlier commits to the file date back to 2026-05-15.
[^qa-17]: **Verified** — QA opened each report. [S10]: four commits on 2026-09-08 and 2026-09-09, macOS, 10 cores, 11,251 jobs; Comparator and nanoda listed as "Not run". [S11]: pinned to `8937a8f`, 11 axiom probes, Claude Code co-author trailers, reviewer comment. [S12]: Zenodo v0.01 dated 2026-09-17; 11,424 jobs; replay 2,972 s for Navier–Stokes; the PDF text contains no match for "Comparator", "nanoda" or a commit hash. [S13]: `f9e8bc5`, 9,371 jobs, 66 minutes, 18 declarations compared.
[^qa-18]: **Verified** — (3.4)–(3.5) and the three listed reasons in §3.2 of [S1]: $L^{3/2}$ versus $L^2$ Riesz boundedness with Sobolev embedding, Hölder with 6 and 6/5, and an upgrade from almost-every $t$ to every $t$. QA confirmed (10.19), $A_R$, $B_R$ and the "almost every $t$" qualifier in Lemma 10.5 of [S2] (pp. 121–123).
[^qa-19]: **Verified** — the Disclaimer in §1 of [S1]: "We do not make claims about the correctness of OpenAI's NL proof."
[^qa-20]: **Verified** — QA repeated the search on its own copy of the 166-page PDF [S2] and found zero matches for each of the six terms.
[^qa-21]: **Supported with caveat** — the observation follows from §3.1–§3.4 of [S1] and the ArXivIQ critique [S14]. As in QA note 12, though, the lemma that costs the derivative belongs to OpenAI's own development, not to Mathlib.
[^qa-22]: **Verified** — [S3]: `LICENSE` is Apache-2.0, `lean-toolchain` pins `leanprover/lean4:v4.34.0-rc2`, the top-level listing has no weights, logs or prompts, and there are no releases. [S6] says "an internal OpenAI model" proved (C) and (D). [S1] gives file names and line numbers at `f9e8bc5`.
[^qa-23]: **Supported with caveat** — this is accurate for the reports the post could open. A repeat search by QA on 2026-10-16 turned up no other third-party Comparator report on OpenAI's unmodified artifact that QA could open. A report that exists but could not be loaded would not be counted here.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
