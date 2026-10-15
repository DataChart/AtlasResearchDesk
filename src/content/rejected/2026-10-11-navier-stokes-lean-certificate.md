---
title: 'OpenAI''s forced Navier–Stokes blow-up: what the Lean certificate checks and what it leaves to referees'
slug: 2026-10-11-navier-stokes-lean-certificate
dek: OpenAI's 166-page construction of finite-time blow-up for the forced 3D Navier–Stokes equations comes with a machine-checked Lean certificate that pins the theorem statement down well, but it certifies neither the prose argument nor the process that produced it.
date: 2026-10-11 22:17:00-06:00
type: research
status: rejected
cycle: 1
tags:
- formal-verification
- reasoning
- ai-for-mathematics
reading_time_min: 13
anchor_source: S1
authors:
  research: research-agent (claude-opus-5-5)
  qa: qa-agent (claude-opus-5-5)
qa:
  verdict: reject
  checked_at: 2026-10-13 04:18:02-06:00
  sources_by_grade:
    A: 1
    B: 10
    C: 6
    D: 0
  claims:
    verified: 44
    caveat: 4
    unverified: 0
    contradicted: 3
    outdated: 0
  flags:
    note: 2
    important: 0
    warning: 1
    caution: 3
    tip: 1
sources:
- id: S1
  title: Finite time blowup for Navier–Stokes
  url: https://cdn.openai.com/pdf/32d9f210-8b73-45e0-91bc-82a30aef8a9a/navier-stokes.pdf
  type: technical-report
  grade: B
  published: 2026-09-08
  accessed: 2026-10-12
- id: S2
  title: 'openai/NavierStokesAndEuler: Lean certificates accompanying Navier-Stokes and Euler results'
  url: https://github.com/openai/NavierStokesAndEuler
  type: code
  grade: B
  published: 2026-09-08
  accessed: 2026-10-12
- id: S3
  title: leanprover/comparator (README)
  url: https://github.com/leanprover/comparator
  type: code
  grade: B
  published: 2026-10-06
  accessed: 2026-10-12
- id: S4
  title: 'Formal Conjectures: FormalConjectures/Millenium/NavierStokes.lean (commit 8bf45ed)'
  url: https://github.com/google-deepmind/formal-conjectures/blob/8bf45ed70d48b2b2a501de9c00b26bfa38c573ee/FormalConjectures/Millenium/NavierStokes.lean
  type: code
  grade: B
  published: 2026-07-27
  accessed: 2026-10-12
- id: S5
  title: Existence and Smoothness of the Navier–Stokes Equation (Clay Mathematics Institute official problem description)
  url: https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf
  type: technical-report
  grade: A
  published: 2006-08-04
  accessed: 2026-10-12
- id: S6
  title: 'Navier-Stokes lost in translation: Why Lean verification of AI autoformalisation does not guarantee correct natural language proofs'
  url: https://arxiv.org/abs/2610.08144
  type: preprint
  grade: B
  published: 2026-10-06
  accessed: 2026-10-12
- id: S7
  title: 'The Siren Call of Silicon Leviathan: Reflections on blowup and Aufklärungsdämmerung'
  url: https://arxiv.org/abs/2609.28591
  type: preprint
  grade: C
  published: 2026-09-23
  accessed: 2026-10-12
- id: S8
  title: An independent audit of the September 2026 fluid blowup claims, and a trade-off between force regularity and dissipation (v0.01)
  url: https://zenodo.org/records/22820521
  type: preprint
  grade: C
  published: 2026-09-17
  accessed: 2026-10-12
- id: S9
  title: How much dissipation can a multiscale layer cascade carry? (v0.08)
  url: https://zenodo.org/records/22835133
  type: preprint
  grade: C
  published: 2026-09-18
  accessed: 2026-10-12
- id: S10
  title: Statement by Tristan Buckmaster
  url: https://cims.nyu.edu/~tristanb/statement.pdf
  type: blog
  grade: C
  published: 2026-09-07
  accessed: 2026-10-12
- id: S11
  title: Extending the Córdoba-Martínez-Zoroa IPM Blow-Up to Uniformly Space-Time Smooth Forcing
  url: https://arxiv.org/abs/2609.16470
  type: preprint
  grade: B
  published: 2026-09-15
  accessed: 2026-10-12
- id: S12
  title: Blow-up for the incompressible 3D-Euler equations with uniform C^{1,1/2-ε} ∩ L^2 force
  url: https://arxiv.org/abs/2309.08495
  type: preprint
  grade: B
  published: 2023-09-15
  accessed: 2026-10-12
- id: S13
  title: Finite time blowup for an averaged three-dimensional Navier-Stokes equation
  url: https://arxiv.org/abs/1402.0290
  type: preprint
  grade: B
  published: 2014-02-03
  accessed: 2026-10-12
- id: S14
  title: Autoformalization with Large Language Models
  url: https://arxiv.org/abs/2205.12615
  type: preprint
  grade: B
  published: 2022-05-25
  accessed: 2026-10-12
- id: S15
  title: The mathematicians published machine-checkable proofs. OpenAI announced its result on a call with reporters.
  url: https://thenextweb.com/news/openai-navier-stokes-claim-verification-credit
  type: news
  grade: C
  published: 2026-09-08
  accessed: 2026-10-12
- id: S16
  title: Navier-Stokes Announcement (Clay Mathematics Institute)
  url: https://www.claymath.org/news/navier-stokes-announcement/
  type: lab-post
  grade: B
  published: 2026-09-11
  accessed: 2026-10-12
- id: S17
  title: 'creelie/Erodos-breakthroug: verification record of an independent build of OpenAI''s Navier–Stokes Lean proof (VERIFICATION.md, PR #1, release v1.0.0)'
  url: https://github.com/creelie/Erodos-breakthroug
  type: code
  grade: C
  published: 2026-10-10
  accessed: 2026-10-13
revision_notes:
- date: 2026-10-12
  summary: 'C3/qa-3 and the unreplicated WARNING: the TL;DR, Evidence and Reproducibility now present the rebuild as one self-published, unreviewed report [S8], scoped to what it does and does not check (no commit named, no Comparator or nanoda run reported), and state that we found no second replication we could open. CAUTION/qa-17: the corrected diff sentence is kept as QA wrote it. Provenance balance: OpenAI''s side (Chen, OpenAI''s statement and Bubeck via S15; Altman''s 2026-09-08 post as reproduced in S7 note 83; Alpöge''s view via S7) is now in the author text, framed as party statements that the artifacts cannot test, and the QA NOTE is kept. qa-23: the S6 complexity bullet now gives Theorem A.3 (Sigma^0_2-completeness) as the concrete result and SCI = infinity (Theorem A.4, Appendix A.2.1) as the abstract''s headline. qa-8: the process figures are now described as second-hand, via Mowshowitz''s reprint and Quanta. qa-24: the S8 inconsistency on mechanism is stated in the text, and
    the comparison now rests on S1''s own description, with the Open questions bullet adjusted to match. Optional canonical versions: Tao''s JAMS 29 (2016) version is noted via S1''s reference list (the AMS page returned 403). The NeurIPS 2022 page for Wu et al. opened but shows no day-level date, so S14 stays the arXiv version. All 16 sources were re-opened this run and their access dates updated. Prose was trimmed elsewhere to stay within 3,000 words, with no claims removed except duplicates, and reading_time_min was updated to 13.'
---

> [!NOTE]
> **QA report card** · Verdict: **reject** · Sources: 17 (A 1 · B 10 · C 6 · D 0)
> · Claims checked: 51 (verified 44 · caveat 4 · unverified 0 · contradicted 3)
> · Checked 2026-10-13 04:18 MDT by the QA agent

# OpenAI's forced Navier–Stokes blow-up: what the Lean certificate checks and what it leaves to referees

*OpenAI's 166-page construction of finite-time blow-up for the forced 3D Navier–Stokes equations comes with a machine-checked Lean certificate that pins the theorem statement down well, but it certifies neither the prose argument nor the process that produced it.*

## TL;DR

- On 2026-09-08 OpenAI released a 166-page paper. For every positive viscosity, it constructs a smooth, compactly supported force under which a 3D incompressible Navier–Stokes flow starting from rest develops unbounded velocity while its kinetic energy stays bounded [S1]. A Lean 4 development came with it [S2].[^qa-1]
- The statement is the strongest part. Comparator checks the two headline Lean theorems against statements of Clay's alternatives (C) and (D). Those statements were adapted from Google DeepMind's Formal Conjectures at a commit dated before the announcement [S2] [S3] [S4].[^qa-2] At least two third-party rebuilds have been reported, both self-published and unreviewed.[^qa-25] The one examined here is an audit that says the development builds and replays through the Lean kernel [S8].[^qa-3]
- The certificate does not validate the prose proof. Bastounis, Circelli and Hansen show intermediate Lean lemmas proving weaker or different bounds than the paper states [S6].[^qa-4] No source we opened reports a completed referee review.[^qa-5]
- This is the forced problem. Clay's (C) and (D) allow a smooth, decaying force [S5]. The unforced alternatives (A) and (B) are untouched.[^qa-6]
- The process (agents, compute, human input) cannot be audited from the released artifacts, and parts of it are disputed [S7] [S10].[^qa-7]

> [!CAUTION]
> **QA · Corrected.** The draft read: "Only one third-party rebuild has been reported, in a self-published, unreviewed audit, which says the development builds and replays through the Lean kernel [S8]. We found no second replication we could open." A second third-party record was published on 2026-10-10 in a personal GitHub repository [S17], before this post was drafted. It reports building OpenAI's unchanged sources at commit `f9e8bc5` on the pinned toolchain (9,371 jobs, no errors), finding only the three standard axioms behind (C) and (D), and matching both statements declaration by declaration to Formal Conjectures at `8bf45ed`. Like [S8], it is self-published and unreviewed. It reports no kernel replay, Comparator run or nanoda run, and QA did not repeat it.

> [!WARNING]
> **QA · Unreplicated.** The evidence that the development rebuilds cleanly comes from two self-published, unreviewed reports: a single-author Zenodo audit that also replays the kernel [S8] [S9], and a GitHub build record [S17]. QA did not rebuild the development. It found no peer-reviewed report of a rebuild, and no report it could open describes a full Comparator run with nanoda. The repository and its Comparator configuration are public [S2], so any reader with the toolchain can repeat the check.

## Why now

OpenAI announced the result on 2026-09-08 with the paper [S1] and the repository `openai/NavierStokesAndEuler`, which has two commits, dated 2026-09-08 and 2026-09-10 (`f9e8bc5`) [S2]. It also formalizes unforced Euler blow-up, which we do not assess [S2].

We could not open OpenAI's blog post (HTTP 403), so we do not cite it. Its process figures reach us through Alexander Gamburd's essay, which takes them from Zvi Mowshowitz's reprint of the post and from Quanta [S7]. Per Gamburd, OpenAI reports:

- some ten thousand agents produced the proof in 88 hours;
- a second model produced the formalization in 17 more hours;
- the run used 2.7 million messages and 130 billion output tokens;
- the proving model is described only as more capable than GPT-6 Astra [S7].[^qa-8]

These are OpenAI's unaudited numbers, second-hand. The repository metadata itself lists the formalization method as "agent", with GPT-6 Astra in Codex [S2].

Responses followed:

- **2026-09-07.** Tristan Buckmaster described LLM-assisted, Lean-verified forced blow-up results for Boussinesq and Euler, obtained with Levent Alpöge, and disputed OpenAI's account of how its run came about [S10].
- **2026-09-15.** Alpöge, Buckmaster and Coiculescu posted an LLM-assisted, Lean-formalized forced blow-up for incompressible porous media [S11].
- **2026-09-17.** Felipe Santibañez-Leal posted an audit reporting a rebuild of the certificate [S8].
- **2026-09-23.** Gamburd posted his essay (current version v3, 2026-10-01) [S7].
- **2026-10-06.** Bastounis, Circelli and Hansen posted a critique of the correspondence between the Lean code and the paper [S6].

## Background

**The prize statement.** Fefferman's official Clay description poses the 3D incompressible equations $\partial_t u + (u\cdot\nabla)u = \nu\Delta u - \nabla p + f$, $\nabla\cdot u = 0$, $u(\cdot,0)=u^\circ$, and asks for a proof of any one of four statements [S5]:

- (A) and (B): global smooth solutions exist for every smooth initial datum with $f \equiv 0$, on $\mathbb{R}^3$ and on the torus $\mathbb{R}^3/\mathbb{Z}^3$ respectively.
- (C) and (D): breakdown. There exist a smooth initial datum and a smooth force, rapidly decaying on $\mathbb{R}^3$ (C) or periodic and decaying in time (D), for which no smooth solution with bounded energy (C), or no smooth periodic solution (D), exists [S5].[^qa-9]

The breakdown alternatives therefore let the solver choose the force.

**Why forcing changes the problem.** For any incompressible pair $(u,p)$, one can define $f$ as the residual of the momentum equation, and the equation then holds by construction [S1]. The whole difficulty is making that residual smooth, with every derivative bounded through the singular time, while $u$ blows up [S1].

**Prior steps.** Tao built finite-time blow-up for an averaged nonlinearity that keeps the energy identity. He argued that a regularity proof must use finer structure than energy and harmonic-analysis estimates [S13].[^qa-10] We cite the arXiv record (latest version v3, 2015-04-01). The canonical version is in the *Journal of the American Mathematical Society* 29 (2016), per the references of [S1]. Córdoba and Martínez-Zoroa obtained blow-up for 3D Euler under a force of limited regularity, $C^{1,1/2-\epsilon}\cap L^2$, with solutions smooth except at the origin [S12]. Buckmaster credits their program as the route to the smooth-force alternatives, which he and Alpöge pushed further with LLM help [S10] [S11].

**Lean and autoformalization.** A Lean proof certificate is meaningful relative to three things: the stated theorem, the axioms the proof uses, and the kernel that checks it [S3]. Autoformalization, translating informal mathematics into such a system, has been studied with LLMs: Wu et al. found that models translated about 25.3% of a set of competition problems correctly into Isabelle/HOL [S14]. In that line of work, getting the formal statement right is itself the error-prone step.

## The core idea

### The mathematical claim

Theorem 1.1 of the paper states: for every $\nu>0$ there exist $f\in C_c^\infty(\mathbb{R}^3\times(0,\infty);\mathbb{R}^3)$, a compact $K\subset\mathbb{R}^3$, and smooth $u,p$ on $\mathbb{R}^3\times[0,1)$ with

$$
\partial_t u + (u\cdot\nabla)u - \nu\Delta u + \nabla p = f,\qquad \nabla\cdot u=0,\qquad u(\cdot,0)=0,
$$

$\operatorname{supp}u(\cdot,t)\cup\operatorname{supp}p(\cdot,t)\subset K$, $\sup_{0\le t<1}\|u(t)\|_{L^2}<\infty$ and $\limsup_{t\uparrow1}\|u(t)\|_{L^\infty}=\infty$ [S1].[^qa-11]

A uniqueness lemma (Lemma 10.5) shows that any smooth, bounded-energy solution with the same force and zero initial datum must coincide with $u$ before $t=1$. So no global smooth bounded-energy solution exists, which is alternative (C). Compact support transfers the construction to the torus, giving (D) through Corollary 10.6 [S1]. A spatial rescaling moves a viscosity-one construction to any $\nu>0$ without changing the singular time [S1].[^qa-12]

### Mechanism

The construction is a cancellation problem: build $(u,p)$ whose residual $R(u,p)=\partial_t u+(u\cdot\nabla)u-\Delta u+\nabla p$ extends smoothly through $t=1$, with every space-time derivative controlled [S1].[^qa-13] It proceeds in four steps.

1. **A collapsing vortex column.** The leading flow is axisymmetric and self-similar. With $\tau = 1-t$ and a fixed $0<h<1/100$, the core has radius $\ell_r \asymp \tau^{1/2}$ and height $\ell_z \asymp \tau^{1/2-h}$, an increasingly slender column. Its azimuthal and axial speeds scale as $\tau^{-1/2-h}$, while its kinetic energy scales as $\tau^{1/2-3h}\to 0$ [S1].
2. **A singular residual, cancelled by the fluid's own stress.** Joining the core to the exterior leaves a residual in an annulus that blows up as $t\uparrow1$, so it cannot be the smooth force [S1]. The paper writes it as the divergence of an annular stress $T$ and cancels it with divergence-free oscillatory pulses $w$, using the exact identity
   $$R(u_B+w,\,p_B+\pi)=R(u_B,p_B)+L_{u_B}(w,\pi)+\nabla\cdot(w\otimes w).$$
   The averaged quadratic flux $\langle w\otimes w\rangle$ supplies $T$ to leading order [S1]. Two families of pulses, with linearly independent flux directions, place $T$ inside the cone they span with positive weights [S1].
3. **Pulses that grow, then die.** An exponentially small force seeds each pulse. Background shear amplifies it, and the same shear also shortens its radial wavelength until viscous damping wins, so each pulse grows and then decays. Pulses are stacked on ever-finer scales as $\tau\to0$ [S1].
4. **Corrections and localization.** A correction cycle removes the remaining harmonics and defects. Outside the annulus, an exact purely azimuthal "heat exterior" needs no force, which lets the flow be cut off to compact support with a force that stays smooth through $t=1$ [S1].

The physical picture: the fluid's own Reynolds stress does the work that the external force is not allowed to do singularly.

### The verification problem

Comparator takes a trusted *challenge* module of theorem statements (with `sorry` proofs) and an untrusted *solution* module. It guarantees that each listed solution theorem (i) has the same statement as the challenge, (ii) uses only permitted axioms, and (iii) is accepted by the Lean kernel, optionally re-checked by an external kernel such as nanoda [S3]. It assumes a trusted challenge file and lakefile, a working sandbox, and at least one correct kernel [S3].[^qa-14]

OpenAI's configuration names exactly two theorems, `navier_stokes_breakdown_R3` and `navier_stokes_breakdown_periodic`. It permits `propext`, `Quot.sound` and `Classical.choice`, and enables nanoda [S2]. The repository metadata reports zero `sorry`s, labels its review status "self-assessed", and credits the challenge statements to Formal Conjectures [S2].[^qa-15]

## Evidence

**Statement fidelity.** We diffed OpenAI's challenge file [S2] against the upstream Formal Conjectures file at the pinned commit [S4] (our check). The solution structures, the smoothness and decay conditions, and the (C)/(D) statements are textually identical.[^qa-16] The only changes are the import line (Mathlib in place of the Formal Conjectures utility library, whose notation is inlined), one dropped `open` declaration, a namespace, local notation, removal of the project's `category`/`AMS` metadata attributes, documentation, and removal of the unforced (A)/(B) statements.[^qa-17] Upstream, all four were tagged as open research problems at that commit, and the file encodes Fefferman's conditions, including the errata on pressure periodicity [S4] [S5]. This design matters most: the definitions that decide whether the Lean theorem is the intended one were written by someone else before the claim existed.

> [!CAUTION]
> **QA · Corrected.** The draft read: "The only changes are a namespace, local notation, `simp` attributes, documentation, and removal of the unforced (A)/(B) statements." QA's own diff of the challenge file in [S2] against the pinned upstream file in [S4] shows that the `@[simp]` attributes are kept unchanged. What was removed is the Formal Conjectures `category`/`AMS` metadata attributes, and the list also left out the import change and one dropped `open` declaration. None of these touches a definition or a theorem statement, so the fidelity conclusion stands.

**Third-party rebuild (one report).** In a self-published, unreviewed preprint, Santibañez-Leal reports rebuilding the repository on an independent machine at its pinned toolchain [S8]. We did not rebuild it ourselves. He reports:

- The repository holds 2,659 files and 641,332 lines.
- The build ran 11,424 jobs and found no `sorryAx`.
- All four headline theorems depend only on the three standard axioms.
- Replaying every constant into an empty kernel environment succeeded in 2,972 s for the Navier–Stokes half and 1,588 s for the Euler half [S8].[^qa-18]

The later version reports a clause-by-clause match to (C) and (D), and notes that kernel replay detects environment manipulation but is not an external verifier [S9]. The audit is narrower than a Comparator run: the replay relies on the kernel checker bundled with the toolchain [S8], and neither version's text mentions Comparator, nanoda or a commit hash (our search). If accurate, it shows that the certificate rebuilds outside OpenAI, not that the mathematics is correct. It needs a second replication, which is cheap because the repository and its Comparator configuration are public [S2].[^qa-26]

**Paper–Lean correspondence.** Bastounis, Circelli and Hansen compared the paper with the Lean code at commit `f9e8bc5` [S6]. They give two worked examples:

- **Lemma 8.6.** The paper bounds $\|N^{-1}F\|_{C^m_y}$ by $C_m\|F\|_{C^{m+4}_y}$. The closest Lean declarations require $m+5$ derivatives, because they sum a different series, so the Lean estimate is strictly weaker [S6].[^qa-19] We confirmed that the paper's equation (8.19) and its proof state the $m+4$ version [S1].
- **Pressure-flux bound (10.19).** Inside the uniqueness lemma, the Lean proof establishes a different inequality by a different route [S6]:[^qa-20]
  - it uses Sobolev embedding and $L^2$ boundedness of Riesz transforms instead of their $L^{3/2}$ boundedness;
  - it applies Hölder's inequality with different exponents;
  - its bound depends on an extra localized gradient norm;
  - it upgrades "almost every $t$" to every $t$.

The authors make no claim about whether the prose proof is correct. From preliminary examination they predict mismatches in the Euler formalization too, but have not documented them [S6].

**Conditions of the result.** There are no seeds, baselines or ablations in the ML sense. Our text search of the paper for "Lean", "agent", "GPT" and "formali" found no matches: the paper is authored by "OpenAI" and does not describe how it was produced [S1].[^qa-21]

## Critical assessment

**What the certificate establishes.** Grant the trusted base: the Lean kernel or nanoda, Mathlib's definitions of smoothness and $L^p$, and the challenge file. Then for every $\nu>0$ there exist data and force satisfying the formal versions of Clay's (C) and (D) [S2] [S3].[^qa-22] That is a strong guarantee about a precise theorem, with two residual risks.

- **Encoding.** The third-party encoding could misstate Clay's conditions. The upstream file documents its choices: a one-sided time derivative at $t=0$, and a junk divergence value of zero where a field is not differentiable [S4]. Our reading is that the junk value is harmless, since the solution structures require $C^\infty$ smoothness, but the roughly 300 lines deserve an analyst's read [S4].
- **Procedure.** Comparator assumes the verifier controls the challenge file. OpenAI's instructions, however, run the challenge from OpenAI's own repository after fetching a Mathlib cache [S2] [S3]. A cautious checker should take the challenge from Formal Conjectures directly, or diff it as we did.

**What it does not establish.** It says nothing about whether the 166 pages are a correct proof. Bastounis et al. put it bluntly: "Lean acceptance (compilation) of translation does not imply semantic preservation." [S6] Their examples show the Lean development is not a line-by-line formalization of the paper [S6]. The scope of their critique matters:

- The top-level theorems are checked against independent statements, so a weaker intermediate lemma in Lean does not falsify (C) or (D). It falsifies the stronger reading that the Lean code formalizes the paper's argument.
- Their complexity results come in two strengths. The concrete one is a $\Sigma^0_2$-completeness theorem (Theorem A.3): deciding whether a definition in a constructed Diophantine family is well defined is beyond any algorithm, even one with a halting oracle [S6].[^qa-23] The abstract headlines a stronger claim. Generalizing the construction to every level puts ambiguity resolution arbitrarily high in the Solvability Complexity Index (SCI) and arithmetical hierarchies, written SCI $=\infty$ (Theorem A.4, Appendix A.2.1) [S6]. Both are worst-case statements about fully general faithful translation. Our reading is that they do not bear on whether this particular translation can be checked by careful humans.

**Is this the Millennium problem?** Alternatives (C) and (D) are prize statements as written [S5], but they allow a force, and here it is engineered so that the fluid's own stress absorbs the singular residual [S1]. The unforced questions remain open. Gamburd reports that OpenAI's post says it does not intend to claim the prize [S7]. No source we opened settles how Clay would treat the result.

> [!NOTE]
> **QA · Context.** On 2026-09-11 the Clay Mathematics Institute posted a short statement saying it shares the community's excitement as it considers an announcement that the problem has "apparently been settled". It describes its process as deliberately slow and promises updates [S16]. The statement does not name OpenAI, does not mention alternatives (C)/(D) or forcing, and does not say how the result will be judged, so it is consistent with the post's conclusion.

**Provenance.** The parties give conflicting accounts, and the released artifacts can test neither. Buckmaster says [S10]:

- he and Alpöge had Lean-verified forced Boussinesq and Euler results on 2026-08-22;
- the account of human input into OpenAI's run that he was given changed in the course of a call on 2026-09-06.

He also says he has not seen OpenAI's proof and makes no accusation [S10].

OpenAI's account reaches us only through secondary sources:

- The Next Web reports that OpenAI's Mark Chen denied that any person or AI system had searched user data to solve the problem. It also reports OpenAI's statement that neither its researchers nor its agents saw the Alpöge–Buckmaster work before it was public, and Sébastien Bubeck's statement that the model solved Euler by entirely different means [S15].
- Gamburd reproduces Sam Altman's post of 2026-09-08 in full. It says OpenAI first proposed a joint release, then offered to let the other team go first, and that now that their work is public, "the approaches appear to be different" [S7].

Gamburd records that whether OpenAI's run followed the Alpöge–Buckmaster extension is disputed: Buckmaster believes it did, while Alpöge reportedly said the proof resembles a different Euler blow-up proof of theirs [S7]. By our inspection, the repository's top-level listing holds Lean sources, a metadata file and Comparator configurations, not agent transcripts or prompts [S2].

> [!NOTE]
> **QA · Context.** Both sides' accounts in this section come to us relayed. Chen's and Bubeck's positions are The Next Web's paraphrases, not direct quotations [S15]. QA checked the Altman quotation against Gamburd's reproduction in note 83 of [S7], not against the original post. Both relaying sources are graded C, and neither side's account can be checked against the released artifacts.

**Reproducibility.**

- **Code.** Yes: Apache-2.0, Lean 4.34.0-rc2, with build and Comparator commands documented [S2]. One self-published audit reports a clean rebuild [S8]; a second self-published build record has since been reported, and neither is peer-reviewed.[^qa-27]
- **Model and weights.** No. The proving model is unreleased and unnamed beyond the comparison to GPT-6 Astra [S7].
- **Process logs.** Not in the repository listing.
- **Compute.** Only OpenAI's figures as relayed by Gamburd [S7].

> [!CAUTION]
> **QA · Corrected.** The draft read: "One self-published audit reports a clean rebuild [S8]; no second replication found." A second self-published build record, dated 2026-10-10, is public [S17]; see the correction under the TL;DR.

> [!TIP]
> **QA · Reproducible.** The repository [S2] pins `leanprover/lean4:v4.34.0-rc2` and documents `lake exe cache get` followed by `lake exe comparator ComparatorChallenges/NavierStokes.json`. Its `ComparatorChallenges/README.md` lists the external tools this needs (`landrun`, `lean4export`, `nanoda_bin`) [S2], and the Comparator README explains what each check guarantees [S3]. To avoid trusting OpenAI's copy of the challenge, diff `ComparatorChallenges/NavierStokes.lean` against the pinned Formal Conjectures file [S4] before running it, as QA did for this review.

**Compared with the alternative workflow.** Alpöge and Buckmaster used LLMs inside a human-led program and posted papers with Lean formalizations [S10] [S11]. Buckmaster argues that a readable argument should come before the certificate, while conceding that their own write-ups fell short [S10]. In our reading, OpenAI's package inverts that order: the certificate is the most trustworthy object and the prose the least checked. A pre-registered third-party statement plus Comparator is much stronger evidence than *Lean accepted the model's proof*, but it does not replace refereeing.

## Connections

This sits on a line of mathematics that made forced blow-up tractable: Tao's averaged-equation blow-up [S13], Córdoba and Martínez-Zoroa's rough-force Euler construction [S12], and the smooth-force extensions by Alpöge, Buckmaster and coauthors [S11]. OpenAI's paper cites Tao and Córdoba–Martínez-Zoroa, and describes its own mechanism as a different use of amplification, in which pulses supply a mean momentum flux to a collapsing vortex [S1]. Santibañez-Leal likewise reports that OpenAI used a mechanism different from the layer cascades [S8].[^qa-24] His abstract, however, says both groups extend the Córdoba–Martínez-Zoroa layer program [S8], so on this point we rely on OpenAI's own description [S1].

On the AI side, Wu et al. found most statement translations were not fully correct [S14]. Formal Conjectures sidesteps that step with human-written statements fixed in advance [S4], and Comparator makes *does this proof answer that question?* checkable [S3]. Bastounis et al. locate the remaining gap in proof translation, which compilation does not check [S6]. This is the blog's first post, so there are no earlier posts to link.

## Open questions

- **Refereeing.** Will analysts publicly check the 166 pages, especially the uniqueness lemma and the correction cycle? Until then, the theorem rests on the certificate alone.
- **The Euler half.** Will the mismatches Bastounis et al. predict for the Euler formalization appear, and do any reach the top-level statement [S6]?
- **Toward unforced blow-up.** Santibañez-Leal bounds how much dissipation layer-cascade constructions can carry [S9]. OpenAI describes its own mechanism as a different use of amplification [S1], so it is unclear whether those bounds apply to it. Our speculation is that the forced construction says little directly about (A) or (B).
- **Reporting standards.** Will labs release agent transcripts and prompts, so that provenance can be settled from artifacts? Will *third-party statement + Comparator + second kernel + refereed proof* become the expected package for AI-produced mathematics? We think it should.

## Sources

S1. [Finite time blowup for Navier–Stokes](https://cdn.openai.com/pdf/32d9f210-8b73-45e0-91bc-82a30aef8a9a/navier-stokes.pdf) · technical-report · B · published 2026-09-08 · accessed 2026-10-12
S2. [openai/NavierStokesAndEuler: Lean certificates accompanying Navier-Stokes and Euler results](https://github.com/openai/NavierStokesAndEuler) · code · B · published 2026-09-08 · accessed 2026-10-12
S3. [leanprover/comparator (README)](https://github.com/leanprover/comparator) · code · B · published 2026-10-06 · accessed 2026-10-12
S4. [Formal Conjectures: FormalConjectures/Millenium/NavierStokes.lean (commit 8bf45ed)](https://github.com/google-deepmind/formal-conjectures/blob/8bf45ed70d48b2b2a501de9c00b26bfa38c573ee/FormalConjectures/Millenium/NavierStokes.lean) · code · B · published 2026-07-27 · accessed 2026-10-12
S5. [Existence and Smoothness of the Navier–Stokes Equation (Clay Mathematics Institute official problem description)](https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf) · technical-report · A · published 2006-08-04 · accessed 2026-10-12
S6. [Navier-Stokes lost in translation: Why Lean verification of AI autoformalisation does not guarantee correct natural language proofs](https://arxiv.org/abs/2610.08144) · preprint · B · published 2026-10-06 · accessed 2026-10-12
S7. [The Siren Call of Silicon Leviathan: Reflections on blowup and Aufklärungsdämmerung](https://arxiv.org/abs/2609.28591) · preprint · C · published 2026-09-23 · accessed 2026-10-12
S8. [An independent audit of the September 2026 fluid blowup claims, and a trade-off between force regularity and dissipation (v0.01)](https://zenodo.org/records/22820521) · preprint · C · published 2026-09-17 · accessed 2026-10-12
S9. [How much dissipation can a multiscale layer cascade carry? (v0.08)](https://zenodo.org/records/22835133) · preprint · C · published 2026-09-18 · accessed 2026-10-12
S10. [Statement by Tristan Buckmaster](https://cims.nyu.edu/~tristanb/statement.pdf) · blog · C · published 2026-09-07 · accessed 2026-10-12
S11. [Extending the Córdoba-Martínez-Zoroa IPM Blow-Up to Uniformly Space-Time Smooth Forcing](https://arxiv.org/abs/2609.16470) · preprint · B · published 2026-09-15 · accessed 2026-10-12
S12. [Blow-up for the incompressible 3D-Euler equations with uniform C^{1,1/2-ε} ∩ L^2 force](https://arxiv.org/abs/2309.08495) · preprint · B · published 2023-09-15 · accessed 2026-10-12
S13. [Finite time blowup for an averaged three-dimensional Navier-Stokes equation](https://arxiv.org/abs/1402.0290) · preprint · B · published 2014-02-03 · accessed 2026-10-12
S14. [Autoformalization with Large Language Models](https://arxiv.org/abs/2205.12615) · preprint · B · published 2022-05-25 · accessed 2026-10-12
S15. [The mathematicians published machine-checkable proofs. OpenAI announced its result on a call with reporters.](https://thenextweb.com/news/openai-navier-stokes-claim-verification-credit) · news · C · published 2026-09-08 · accessed 2026-10-12 · added by QA
S16. [Navier-Stokes Announcement (Clay Mathematics Institute)](https://www.claymath.org/news/navier-stokes-announcement/) · lab-post · B · published 2026-09-11 · accessed 2026-10-12 · added by QA
S17. [creelie/Erodos-breakthroug: verification record of an independent build of OpenAI's Navier–Stokes Lean proof (VERIFICATION.md, PR #1, release v1.0.0)](https://github.com/creelie/Erodos-breakthroug) · code · C · published 2026-10-10 · accessed 2026-10-13 · added by QA

## QA notes

[^qa-1]: **Verified** — [S1] has 166 pages, its PDF was created 2026-09-08, and Theorem 1.1 and the abstract state exactly this construction. [S2]'s first commit is dated 2026-09-08. Early same-day press reports said the proof was not yet public [S15], so the PDF may have appeared some hours after the announcement, but the date holds.
[^qa-2]: **Verified** — [S2]'s `ComparatorChallenges/NavierStokes.json` names `navier_stokes_breakdown_R3` and `navier_stokes_breakdown_periodic`. The challenge file says it was copied from Formal Conjectures commit `8bf45ed`, and that commit is dated 2026-07-27 [S4], six weeks before the 2026-09-08 announcement. The upstream file itself dates from May 2026.
[^qa-3]: **Supported with caveat** — [S8] §2 reports a clean build on an independent machine and a kernel replay of both halves at the pinned toolchain, and the post now presents this as the audit's report rather than as fact. [S8] is a self-published Zenodo preprint (grade C) by one author and has not been peer-reviewed. QA did not repeat the build.
[^qa-4]: **Verified** — [S6] Examples 3.1 (Lemma 8.6) and 3.3 (pressure-flux bound (10.19)) compare the paper with the Lean code at commit `f9e8bc5`.
[^qa-5]: **Verified** — QA searched on 2026-10-12 and again on 2026-10-13 and found no referee report or journal acceptance. [S6] says the proof should get the same peer review as any other, and Clay describes its own process as deliberately slow [S16].
[^qa-6]: **Verified** — [S5] gives (A) and (B) with $f \equiv 0$, and (C) and (D) with a smooth force satisfying decay conditions (5) and (9) respectively.
[^qa-7]: **Verified** — The repository's top-level listing has no transcripts or prompts [S2]. Buckmaster's own statement [S10] is the primary record of his dispute, and OpenAI's counter-statements are in [S15]. QA regraded [S7] from B to C: it is a commentary essay, and its process figures reach it at second or third hand.
[^qa-8]: **Supported with caveat** — Gamburd's note 2 and the notes that follow [S7] give each figure as stated. He takes them from OpenAI's post of 2026-09-08 as reprinted by Zvi Mowshowitz and reported by Quanta, so they are OpenAI's own unaudited numbers at third hand. QA also could not open OpenAI's post (HTTP 403).
[^qa-9]: **Verified** — The equations (1)–(3) and alternatives (A)–(D) match the official statement [S5], including the errata adding pressure periodicity to (8).
[^qa-10]: **Verified** — This matches the abstract of [S13]. The canonical version is in the *Journal of the American Mathematical Society* 29 (2016), as listed in the reference list of [S1].
[^qa-11]: **Verified** — This matches Theorem 1.1 of [S1] (p. 1), including $u(\cdot,0)=0$, the compact set $K$ and both norm conditions.
[^qa-12]: **Verified** — [S1] Lemma 10.5 (uniqueness on every $[0,T]$, $T<1$, for bounded-energy smooth solutions), Corollary 10.6 (the torus) and the viscosity rescaling in §3 and (10.22).
[^qa-13]: **Verified** — The scalings ($\ell_r \asymp \tau^{1/2}$, $\ell_z \asymp \tau^{1/2-h}$, $0<h<1/100$, speeds $\tau^{-1/2-h}$, energy $\tau^{1/2-3h}$), the residual identity, the positive two-family cone representation, pulse growth followed by viscous decay, and the "heat exterior" all appear in §§2–3 of [S1].
[^qa-14]: **Verified** — This matches the Comparator README [S3]: the same statement, the permitted axioms, kernel acceptance and optional external kernels (nanoda). Its trust assumptions are a trustworthy challenge and lakefile, a working landrun sandbox and a correct kernel. It also assumes the solution files were not compiled before the check.
[^qa-15]: **Verified** — [S2]'s `formalization.yaml` gives `sorry_count: 0`, `review: status: "self-assessed"`, and a `builds-on` link to Formal Conjectures that "supplies the independent Comparator reference statements"; the JSON config gives the axioms and `enable_nanoda: true`.
[^qa-16]: **Verified** — QA diffed the two raw files independently (`ComparatorChallenges/NavierStokes.lean` in [S2] against the file at commit `8bf45ed` in [S4]). The two files differ only in the hunks listed in the corrected sentence. Every definition, structure and the (C)/(D) theorem bodies are byte-identical.
[^qa-17]: **Contradicted** — The draft's list of changes named `simp` attributes, which are in fact unchanged. It is corrected here; see the caution callout.
[^qa-18]: **Supported with caveat** — Every number matches §2 of [S8], which is a single self-published audit. Gamburd gives 616,000 lines and, in his note 52, takes it from a magazine audit that counts 616,274 lines of Lean in OpenAI's formalization [S7]. QA could not locate that article. [S17] counts about 429,000 lines in the `NavierStokes/` directory alone. The three figures cover different scopes.
[^qa-19]: **Verified** — [S6] (3.1)–(3.2) and Remark 3.2 compare $m+4$ with $m+5$, and QA confirmed that (8.19) of [S1] states $m+4$. [S6] footnote 5 adds that some related Lean results are not comparable with (8.19) at all, rather than weaker.
[^qa-20]: **Verified** — [S6] Example 3.3 and items (1)–(3) after (3.5) cover the $L^2$ Riesz transform with Sobolev embedding, the different Hölder exponents, and the time-continuity upgrade. The extra $A_R$ is a localized $L^2$ gradient norm (§3.2.1).
[^qa-21]: **Verified** — QA ran its own full-text search of [S1] for "Lean", "agent", "GPT", "formali" and "Codex" and found no matches. The author line reads "OPENAI".
[^qa-22]: **Verified** — This follows from [S3]'s guarantees applied to [S2]'s configuration, together with the statement fidelity checked in footnote 16. It rests on the trusted base the post names.
[^qa-23]: **Verified** — Theorem A.3 of [S6] shows that deciding well-definedness in the constructed family stays undecidable even with an oracle for the Halting problem, which is the $\Sigma^0_2$-completeness result described. Theorem A.4 and Appendix A.2.1 give the arbitrary-level, SCI $=\infty$ claim that the abstract headlines.
[^qa-24]: **Verified** — Section 1 of [S8] says OpenAI used "a different mechanism" for the viscous case. The post itself notes that the abstract of [S8] says both groups extend the Córdoba–Martínez-Zoroa layer program, and it rests the comparison on [S1] §1.1, which describes oscillatory pulses supplying a mean momentum flux.
[^qa-25]: **Contradicted** — A second third-party build record, dated 2026-10-10 and so earlier than this post, is public [S17]. Its pull request #1, `VERIFICATION.md` and release v1.0.0 report a build of OpenAI's unchanged sources at commit `f9e8bc5` (9,371 jobs), an axiom check, and a declaration-by-declaration statement comparison with Formal Conjectures. Corrected in place; see the caution callout.
[^qa-26]: **Supported with caveat** — A second build record now exists [S17], but like [S8] it is self-published, and it reports neither a kernel replay nor a Comparator run. No source QA could open reports an independent Comparator run with nanoda, so the check this sentence asks for is still outstanding.
[^qa-27]: **Contradicted** — [S17] is a second self-published build record (see footnote 25). Corrected in place; see the caution callout.

## Disclosure

*Researched and written by the Research Desk research agent (Claude); sources and claims checked by the QA agent (Claude). Human oversight: Caleb Hart. Corrections: [corrections page](https://datachart.github.io/AtlasResearchDesk/corrections/).*
