---
title: "Unit 5: Kinetics"
sidebar:
  order: 5
---

**Chemical kinetics** asks how fast a reaction proceeds and *why* that speed changes with conditions. It is distinct from [thermochemistry](/notes/ap/chem/thermochemistry/) (energy changes and a first look at spontaneity) and from [equilibrium](/notes/ap/chem/equilibrium/) (where a reversible process ends up). Balanced equations from [Unit 4](/notes/ap/chem/chemrxns/) supply stoichiometry; kinetics supplies rates, rate laws, and mechanisms.

---

## Collision theory and the molecular picture

**Collision theory** requires that molecules actually collide, that a collision carries at least the **activation energy** $$E_a$$, and that the partners meet with a geometry that allows the relevant bonds to rearrange. A compact way to think about rate is that it scales with three factors:

$$
\text{rate} \propto N \times f_E \times f_O.
$$

Here $$N$$ is roughly the number of collisions per unit time (collision frequency), $$f_E$$ is the fraction of collisions with enough energy to surmount the barrier, and $$f_O$$ is the fraction with favorable orientation (sometimes folded into a steric factor in $$A$$).

Raising temperature increases $$N$$ (faster motion, more frequent collisions) and sharply increases $$f_E$$ (the high-energy tail of the speed distribution grows). Increasing concentration in a fixed volume raises $$N$$ because more particles occupy the same space. A catalyst mainly increases $$f_E$$ for the catalyzed path by offering a lower activation energy; it does not change $$\Delta H$$ for the overall conversion. Changing physical state—for example, grinding a solid to increase surface area or improving mixing—raises effective collision frequency or exposes more reactive sites.

### The Maxwell–Boltzmann distribution

The reason temperature has such a strong effect on rate is captured by the **Maxwell–Boltzmann distribution**, a curve showing the fraction of particles (vertical axis) at each kinetic energy (horizontal axis). At any temperature, only the particles to the **right of $$E_a$$**—those in the high-energy tail—can react on collision. That tail area is exactly $$f_E$$.

Key features of the curve:

- The distribution starts at the origin, rises to a peak (the **most probable** kinetic energy), and trails off with a long tail toward high energy; the area under the whole curve is fixed (it represents all the particles).
- **Raising the temperature** broadens and flattens the curve and shifts the peak to higher energy. The peak height drops, but the tail beyond $$E_a$$ grows dramatically—so a small rise in $$T$$ can sharply increase the fraction of effective collisions.
- A **catalyst does not move the curve**; instead it lowers $$E_a$$ (shifts the threshold line left), which puts a larger fraction of the *same* distribution above the barrier.

<div class="placeholder-box">

**Image placeholder:** Maxwell–Boltzmann distribution with two temperature curves ($$T_1<T_2$$) on the same axes — the higher-$$T$$ curve flatter and shifted right — plus a vertical line at $$E_a$$ and a second, lower $$E_a$$ line for the catalyzed path, with the shaded "can react" tail areas highlighted.

</div>

**Homogeneous catalysis** places the catalyst in the same phase as the reactants (solution catalysis is common). **Heterogeneous catalysis** uses a different phase, often a solid surface where adsorption aligns molecules for reaction. **Acid–base catalysis** is a major special case: $$\text{H}^+$$, $$\text{OH}^-$$, or other acids and bases can protonate or deprotonate substrates, stabilizing transition states and speeding steps without being consumed in the net equation.

---

## Factors affecting rate (summary)

Concentration raises collision frequency $$N$$ and enters the rate law directly. Temperature raises the **number of collisions and the frequency of effective collisions**. Surface area and physical state (powder versus lump, mixing, phase contact) **increase the rate of collision**. Catalysts (homogeneous, heterogeneous, or acid–base) **increases the frequency of effective collisions**.

---

## Reaction rate

The **reaction rate** measures how quickly reactant concentrations fall or product concentrations rise. For a generic reaction

$$
a\text{A} + b\text{B} \longrightarrow c\text{C} + d\text{D},
$$

a common convention ties all species to one rate expression:

$$
\text{rate} = -\frac{1}{a}\frac{d[\text{A}]}{dt} = -\frac{1}{b}\frac{d[\text{B}]}{dt} = +\frac{1}{c}\frac{d[\text{C}]}{dt} = +\frac{1}{d}\frac{d[\text{D}]}{dt}.
$$

The negative sign on reactants makes rate a positive quantity as written. Note that $$d$$ represents the derivative, or the measure of the rate of change. If you watch one species by itself, the sign of $$d[\text{X}]/dt$$ tells you whether it is being used up (negative for a reactant whose concentration falls) or formed (positive for a product). The stoichiometric factors convert those individual slopes into a single rate for the whole reaction.

In lab data you often measure average rate over an interval (slope of a chord on a concentration–time graph). Instantaneous rate is the slope of the tangent at one time—the limit as $$\Delta t \to 0$$ and the quantity that appears in calculus-based rate laws.

---

## Rate laws and the rate constant

Experiment determines how rate depends on concentration. The differential rate law (or simply **rate law**) has the form

$$
\text{rate} = k[\text{A}]^m[\text{B}]^n[\text{C}]^p \cdots
$$

Here $$k$$ is the **rate constant** (units depend on overall order), and $$m, n, p, \ldots$$ are the orders with respect to each reactant. Those exponents are *not* taken from the balanced equation unless the reaction is a single **elementary step** (see mechanisms below). Overall reaction order is the sum $$m + n + p + \cdots$$.

Important distinction: at fixed temperature (and without changing catalyst), $$k$$ does not depend on concentrations or, for gases, on pressure as a separate knob—concentration enters only through the powers $$[\text{A}]^m$$ etc. Changing pressure in a gas-phase system often changes concentrations and therefore rate, but it does not change $$k$$ itself. Temperature and catalysts change $$k$$.

The **method of initial rates** compares initial rates while varying one reactant’s initial concentration at a time. Holding other concentrations fixed, if doubling $$[\text{A}]$$ multiplies the initial rate by $$2^m$$, $$m$$ is the order of $$A$$. More generally, for two trials where only $$[\text{A}]$$ changes,

$$
m = \frac{\ln(\text{rate}_1 / \text{rate}_2)}{\ln([\text{A}]_1 / [\text{A}]_2)},
$$

with nearest-integer order a common simplification on exams when data are clean. Repeat for each reactant, then substitute any one run’s data to solve for $$k$$.

Units of $$k$$ follow from $$\text{rate}$$ in $$\text{M/s}$$ (molarity per second) and the concentration powers. Examples for a single reactant $$\text{A}$$:

- Zeroth order ($$\text{rate} = k$$): $$k$$ in $$\text{M}\cdot\text{s}^{-1}$$
- First order ($$\text{rate} = k[\text{A}]$$): $$k$$ in $$\text{s}^{-1}$$
- Second order ($$\text{rate} = k[\text{A}]^2$$): $$k$$ in $$\text{M}^{-1}\cdot\text{s}^{-1}$$

Note that rate always has the units of $$\frac{M}{s}$$ and concentration always has the units of $$M$$.

---

## Integrated rate laws and graphs

Integrating the differential law links concentration to time. Let $$[\text{A}]_0$$ be the initial concentration of the species tracked in the simplified one-reactant forms below.

Zeroth order:

$$
[\text{A}] - [\text{A}]_0 = -kt
$$

Equivalently $$[\text{A}] = [\text{A}]_0 - kt$$. A plot of $$[\text{A}]$$ versus $$t$$ is linear with slope $$-k$$.

First order:

$$
\ln[\text{A}] - \ln[\text{A}]_0 = -kt \quad\text{or}\quad \ln\!\left(\frac{[\text{A}]}{[\text{A}]_0}\right) = -kt.
$$

A plot of $$\ln[\text{A}]$$ versus $$t$$ is linear with slope $$-k$$.

Second order:

$$
\frac{1}{[\text{A}]} - \frac{1}{[\text{A}]_0} = kt.
$$

A plot of $$1/[\text{A}]$$ versus $$t$$ is linear with slope $$k$$.

Which graph is linear is a standard way to infer order from concentration–time data. **Half-life** $$t_{1/2}$$ is the time for $$[\text{A}]$$ to drop to half its initial value:

$$
\text{zero:}\quad t_{1/2} = \frac{[\text{A}]_0}{2k}
$$

$$
\text{first:}\quad t_{1/2} = \frac{\ln 2}{k} \approx \frac{0.693}{k}
$$

$$
\text{second:}\quad t_{1/2} = \frac{1}{k[\text{A}]_0}
$$

For zero order, half-life **shrinks** as $$[\text{A}]_0$$ decreases. For first order (including many nuclear decay kinetics), $$t_{1/2}$$ is constant throughout the reaction—independent of $$[\text{A}]_0$$. For second order, half-life **grows** as $$[\text{A}]_0$$ decreases.

Putting it together, here is the standard comparison for a single reactant $$\text{A}$$. Identifying which plot is a straight line is the most reliable way to read the order off real concentration–time data:

| Order | Rate law | Integrated form | Linear plot | Slope | Units of $$k$$ | Half-life |
| --- | --- | --- | --- | --- | --- | --- |
| Zero | $$\text{rate}=k$$ | $$[\text{A}]=[\text{A}]_0-kt$$ | $$[\text{A}]$$ vs $$t$$ | $$-k$$ | $$\text{M}\cdot\text{s}^{-1}$$ | $$\dfrac{[\text{A}]_0}{2k}$$ |
| First | $$\text{rate}=k[\text{A}]$$ | $$\ln[\text{A}]=\ln[\text{A}]_0-kt$$ | $$\ln[\text{A}]$$ vs $$t$$ | $$-k$$ | $$\text{s}^{-1}$$ | $$\dfrac{0.693}{k}$$ |
| Second | $$\text{rate}=k[\text{A}]^2$$ | $$\dfrac{1}{[\text{A}]}=\dfrac{1}{[\text{A}]_0}+kt$$ | $$\dfrac{1}{[\text{A}]}$$ vs $$t$$ | $$+k$$ | $$\text{M}^{-1}\cdot\text{s}^{-1}$$ | $$\dfrac{1}{k[\text{A}]_0}$$ |

<div class="placeholder-box">

**Image placeholder:** Three side-by-side concentration–time graphs for zero-, first-, and second-order reactions, each showing which transformed axis ($$[\text{A}]$$, $$\ln[\text{A}]$$, or $$1/[\text{A}]$$) yields the straight line.

</div>

---

## Arrhenius equation

The **Arrhenius equation** relates the rate constant to temperature:

$$
k = A e^{-E_a/(RT)}.
$$

$$A$$ is the pre-exponential factor (collision frequency and orientation factors); $$R = 8.314 \text{ J/(mol}\cdot\text{K)}$$ when $$E_a$$ is in $$\text{J/mol}$$; $$T$$ is kelvin.

The logarithmic linear form is

$$
\ln k = -\frac{E_a}{R}\cdot\frac{1}{T} + \ln A.
$$

A plot of $$\ln k$$ versus $$1/T$$ has slope $$-E_a/R$$ and intercept $$\ln A$$. The two-point relation is

$$
\ln\frac{k_2}{k_1} = -\frac{E_a}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right).
$$

For the same reaction under the same conditions, a larger $$k$$ always goes with a higher temperature, because $$e^{-E_a/(RT)}$$ increases when $$T$$ increases. A modest rise in $$T$$ can change $$k$$ dramatically because it sits in an exponential.

---

## Reaction mechanisms

Many balanced equations are net processes built from simpler **elementary steps**. Each elementary step has a **molecularity**—the number of reactant particles that must collide in that step (unimolecular, bimolecular, termolecular in the rare cases textbooks treat). For an elementary step only, rate-law exponents match stoichiometric coefficients for that step.

A **reaction mechanism** proposes a sequence of such steps. Species produced in one step and consumed in another, never appearing in the net equation, are **intermediates**. A **catalyst** is regenerated after the cycle; an intermediate is made and then used up. **Transition states** (or **activated complexes**) are high-energy configurations at barrier maxima along the path; they are not stable intermediates you bottle.

The **rate-determining step** (RDS) is the slowest step; it has the highest activation energy in the sequence and usually controls the observed rate law. If the first step is slow, its elementary law often appears directly in the experimental rate law (exponents from that step’s stoichiometry). Steps after the RDS do not change the concentration dependence of the rate law (they only consume intermediates as they leak out of the bottleneck).

If the experimental rate law does not match the stoichiometry of the overall equation, you infer multiple steps and a slow step that controls rate.

---

## Pre-equilibrium and deriving rate laws

When the RDS is not the first step, a common pattern is a fast, reversible early step followed by a slow step. The early step sets up **pre-equilibrium**: forward and reverse rates of that step are large, so an equilibrium constant $$K$$ links intermediates to reactant concentrations. You write the rate law from the RDS (using its elementary exponents), then substitute for any intermediate using the equilibrium expression from the fast step so that only overall reactants (and catalysts if present) appear in the final law. A more general **steady-state approximation** treats $$d[\text{intermediate}]/dt \approx 0$$ when the intermediate is consumed as fast as it forms; AP problems often give setups where pre-equilibrium is enough.

Example mechanism:

1. $$\text{A} + \text{B} \rightleftharpoons \text{I}$$ fast
2. $$\text{I} + \text{C} \longrightarrow \text{D}$$ slow

The slow elementary step gives

$$
\text{rate} = k_2[\text{I}][\text{C}].
$$

Because the intermediate $$\text{I}$$ should not appear in the final experimental rate law, use the fast pre-equilibrium:

$$
K = \frac{[\text{I}]}{[\text{A}][\text{B}]}
\qquad\Rightarrow\qquad
[\text{I}] = K[\text{A}][\text{B}].
$$

Substitution gives

$$
\text{rate} = k_2K[\text{A}][\text{B}][\text{C}] = k_{\text{obs}}[\text{A}][\text{B}][\text{C}].
$$

### Catalytic cycles

A **catalytic cycle** is a mechanism where the catalyst is consumed in an early elementary step and regenerated in a later step. The catalyst cancels from the net equation, but it can still appear in the rate law because its concentration affects how much of the faster pathway is available.

Simple acid-catalyzed pattern:

1. $$\text{S} + \text{H}^+ \rightleftharpoons \text{SH}^+$$ fast
2. $$\text{SH}^+ \longrightarrow \text{P} + \text{H}^+$$ slow or product-forming

Adding the steps cancels $$\text{H}^+$$, so acid is not consumed overall. However, increasing $$[\text{H}^+]$$ can increase $$[\text{SH}^+]$$ and raise the observed rate.

For heterogeneous catalysts, the same cycle idea happens on a surface:

1. Reactants **adsorb** to active sites.
2. Bonds weaken or orient correctly on the surface.
3. Products form and **desorb**, freeing the active site.

Catalyst poisoning occurs when another species binds strongly to active sites and blocks the cycle. Finely divided catalysts usually work faster because they expose more surface area and therefore more active sites.

---

## Reaction coordinate diagrams

A **reaction coordinate** diagram plots energy versus progress from reactants to products. If reactants lie higher in energy than products, the net reaction is exothermic ($$\Delta H < 0$$ in the usual convention); if products lie higher, it is endothermic ($$\Delta H > 0$$). Forward and reverse activation energies $$E_{a,\text{fwd}}$$ and $$E_{a,\text{rev}}$$ are measured from each side up to the transition state. For a simple one-step profile,

$$
E_{a,\text{fwd}} - E_{a,\text{rev}} = \Delta H.
$$

A catalyst lowers $$E_{a,\text{fwd}}$$ and $$E_{a,\text{rev}}$$ by about the same amount (same pathway lowering for forward and reverse), so it speeds approach to equilibrium but does not change $$\Delta H$$ or the equilibrium constant at fixed $$T$$.

<div class="placeholder-box">

**Image placeholder:** Single-step reaction coordinate diagram (energy vs. reaction progress) with reactants, a transition-state peak, and products labeled; $$E_{a,\text{fwd}}$$, $$E_{a,\text{rev}}$$, and $$\Delta H$$ marked as vertical gaps, plus a dashed lower-barrier curve showing the catalyzed path.

</div>

### Multi-step profiles

A reaction coordinate diagram for a **multi-step** mechanism has one "hill" per elementary step, with a **valley** between hills for each **intermediate** (a real, if short-lived, species that sits in a local energy minimum). The number of peaks tells you the number of elementary steps; the number of valleys between reactants and products tells you the number of intermediates.

The **tallest peak** corresponds to the step with the largest activation energy—the **rate-determining step**. Reading these diagrams lets you connect the energy picture directly to the mechanism: a high first hill followed by a low second hill means the first step is rate-determining, and the observed rate law should reflect that step's stoichiometry.

<div class="placeholder-box">

**Image placeholder:** Two-step reaction coordinate diagram with two peaks (two transition states) and one intermediate valley between them; the taller peak labeled as the rate-determining step, and the intermediate clearly distinguished from the transition states.

</div>

---

## Transition state and catalysis (summary)

Along the reaction coordinate, the **transition state** (or **activated complex**) sits at an energy maximum separating reactants from products—the peak that must be crossed for the rearrangement to complete.

A **catalyst** provides an alternative pathway with lower activation energy. It is regenerated by the end of the cycle and does not appear in the net reaction. A catalyst increases $$k$$ (both forward and reverse for a reversible path) and speeds approach to equilibrium but does not change $$\Delta G^\circ$$ or the equilibrium constant for a given reaction at fixed $$T$$.

---

## Kinetics vs equilibrium (preview)

For a reversible elementary reaction, forward and reverse rates balance at equilibrium, linking rate constants to an equilibrium constant in simple cases. The full story belongs with [equilibrium](/notes/ap/chem/equilibrium/); here the essential point is that kinetics answers “how fast” while equilibrium answers “how far” under constant conditions.

---

## Practice

### MCQ

::::problem
1. For the reaction $$A+B\rightarrow C$$, the initial-rate data below are collected.

| Trial | $$[A]$$ | $$[B]$$ | Initial rate |
|-------|---------|---------|--------------|
| 1 | $$0.10\ M$$ | $$0.10\ M$$ | $$2.0\times10^{-3}\ M/s$$ |
| 2 | $$0.20\ M$$ | $$0.10\ M$$ | $$8.0\times10^{-3}\ M/s$$ |
| 3 | $$0.20\ M$$ | $$0.20\ M$$ | $$8.0\times10^{-3}\ M/s$$ |

What is the rate law?

   (A) $$\text{rate}=k[A][B]$$<br>
   (B) $$\text{rate}=k[A]^2$$<br>
   (C) $$\text{rate}=k[A]^2[B]$$<br>
   (D) $$\text{rate}=k[B]^2$$

:::solution
Compare trials 1 and 2. Doubling $$[A]$$ while holding $$[B]$$ constant makes the rate four times larger, so the reaction is second order in $$A$$.

Compare trials 2 and 3. Doubling $$[B]$$ while holding $$[A]$$ constant does not change the rate, so the reaction is zero order in $$B$$.

$$
\boxed{\text{rate}=k[A]^2}
$$

So the answer is

$$
\boxed{\text{B}}.
$$
:::
::::

::::problem
2. A catalyst increases the rate of a reaction by

   (A) increasing $$\Delta G^\circ$$<br>
   (B) lowering the activation energy<br>
   (C) increasing the equilibrium constant<br>
   (D) increasing the enthalpy change of the reaction

:::solution
A catalyst provides an alternate pathway with lower activation energy. It does not change $$\Delta G^\circ$$, $$\Delta H$$, or $$K$$.

$$
\boxed{\text{B}}
$$
:::
::::

::::problem
3. For a first-order reaction, which plot should be linear?

   (A) $$[A]$$ versus time<br>
   (B) $$\ln[A]$$ versus time<br>
   (C) $$1/[A]$$ versus time<br>
   (D) rate versus $$1/T$$

:::solution
For a first-order reaction,

$$
\ln[A]_t=-kt+\ln[A]_0,
$$

so $$\ln[A]$$ versus time is linear.

$$
\boxed{\text{B}}
$$
:::
::::

::::problem
4. If the rate law is $$\text{rate}=k[A]^2[B]$$, what happens to the rate when $$[A]$$ is doubled and $$[B]$$ is held constant?

   (A) It doubles.<br>
   (B) It triples.<br>
   (C) It quadruples.<br>
   (D) It stays the same.

:::solution
The rate depends on $$[A]^2$$. Doubling $$[A]$$ multiplies the rate by

$$
2^2=4.
$$

$$
\boxed{\text{C}}
$$
:::
::::

::::problem
5. A reaction has a rate law $$\text{rate}=k[A]$$. What are the units of $$k$$ if rate is measured in $$M/s$$?

   (A) $$M^{-1}s^{-1}$$<br>
   (B) $$s^{-1}$$<br>
   (C) $$M/s$$<br>
   (D) $$M^2/s$$

:::solution
For $$\text{rate}=k[A]$$,

$$
k=\frac{M/s}{M}=s^{-1}.
$$

$$
\boxed{\text{B}}
$$
:::
::::

::::problem
6. Increasing temperature usually increases reaction rate because

   (A) the activation energy becomes zero.<br>
   (B) more collisions have energy greater than or equal to $$E_a$$.<br>
   (C) the equilibrium constant must become larger.<br>
   (D) the reaction mechanism cannot change.

:::solution
At higher temperature, particles have greater kinetic energy on average, so a larger fraction of collisions can overcome the activation energy.

$$
\boxed{\text{B}}
$$
:::
::::

### FRQ

::::frq{id=chem-kinetics-1}
7. A first-order decomposition has rate constant $$k=0.0300\ \text{s}^{-1}$$.

   $$(A)$$ Calculate the half-life.

   $$(B)$$ If the initial concentration is $$0.800\ M$$, calculate the concentration after $$60.0\ \text{s}$$.

   $$(C)$$ Explain how the slope of a graph of $$\ln[A]$$ versus time is related to $$k$$.

:::solution
$$(A)$$ For a first-order reaction,

$$
t_{1/2}=\frac{0.693}{k}.
$$

Thus

$$
t_{1/2}=\frac{0.693}{0.0300}=23.1\ \text{s}.
$$

The units are seconds because the rate constant has units of $$\text{s}^{-1}$$ for a first-order reaction.

$$(B)$$ Use the integrated rate law:

$$
\ln[A]_t=\ln[A]_0-kt.
$$

Equivalently,

$$
[A]_t=[A]_0e^{-kt}=0.800e^{-(0.0300)(60.0)}.
$$

$$
[A]_t=0.132\ M.
$$

This is less than the initial $$0.800\ M$$, which is reasonable because the reactant is decomposing over time.

$$(C)$$ For a first-order reaction, a graph of $$\ln[A]$$ versus time is linear with slope

$$
\boxed{-k}.
$$

The negative slope shows that $$[A]$$ decreases as time increases. The magnitude of the slope gives the rate constant, so a steeper negative line means a faster first-order reaction.
:::
::::

::::frq{id=chem-kinetics-2}
8. The 2026 AP Chemistry exam included a kinetics question using concentration-time data and a graph of natural log of concentration. (Adapted from College Board, [2026 AP Chemistry FRQ 2](https://apcentral.collegeboard.org/media/pdf/ap26-frq-chemistry.pdf).)

   $$(A)$$ Explain how concentration-time data can support that a reaction is first order in a reactant.

   $$(B)$$ If a plot of $$\ln[A]$$ versus time has slope $$-0.0150\ \text{s}^{-1}$$, identify $$k$$.

   $$(C)$$ Calculate the half-life for the reaction.

:::solution
$$(A)$$ If a plot of $$\ln[A]$$ versus time is linear, the data support a first-order relationship in $$A$$. Equivalently, the concentration should decrease by the same fraction over equal time intervals. A plot of $$[A]$$ versus time or $$1/[A]$$ versus time would be used to test zero-order or second-order behavior, so the linear graph identifies the order.

$$(B)$$ For a first-order reaction, the slope is $$-k$$, so

$$
k=0.0150\ \text{s}^{-1}.
$$

The sign of $$k$$ is positive; the negative sign belongs to the slope because the concentration is decreasing.

$$(C)$$

$$
t_{1/2}=\frac{0.693}{k}=\frac{0.693}{0.0150}=46.2\ \text{s}.
$$

For a first-order reaction, this half-life is constant, meaning every $$46.2\ \text{s}$$ the concentration is cut in half regardless of the starting concentration.
:::
::::
