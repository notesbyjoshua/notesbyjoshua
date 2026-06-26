---
title: "Unit 6: Thermochemistry"
sidebar:
  order: 6
---

**Thermochemistry** studies heat flow associated with chemical reactions and physical changes (melting, vaporization, dissolving). It is the chemical face of the **first law of thermodynamics** and sets up **enthalpy** reasoning used again in [equilibrium](/notes/ap/chem/equilibrium/), [acid–base](/notes/ap/chem/acidbase/), and [thermodynamics / electrochemistry](/notes/ap/chem/thermoelectro/). Balanced equations and stoichiometry from [Unit 4](/notes/ap/chem/chemrxns/) carry mole ratios directly into thermochemical calculations.

---

## System, surroundings, and boundaries

In modeling, the universe is split into the **system** (what you study) and the **surroundings** (everything else that can exchange energy with the system). A **closed system** exchanges energy but not matter across its boundary. An **open system** can exchange both (an open beaker). An **isolated system** exchanges neither, and this can be approximated by good calorimeter insulation.

---

## Energy, heat, and work

### Heat and Calorimetry

Energy is the capacity to do work or transfer heat. The total energy of an isolated universe is conserved (First Law of Thermodynamics); it is not useful to set “$$E_{\text{universe}} = 0$$” unless you have chosen a specific reference for potential energy.

**Heat** $$q$$ is energy transferred because of a temperature difference. On the AP exam the usual sign convention is from the system’s perspective: $$q_{\text{sys}} > 0$$ when heat flows into the system, $$q_{\text{sys}} < 0$$ when heat flows out. Spontaneous heat transfer between two objects in thermal contact goes from hotter to colder until thermal equilibrium (related 0th Law of Thermodynamics).

For a pure substance with nearly constant **specific heat capacity** $$c$$,

$$
q = mc\Delta T,
$$

where $$m$$ is mass and $$\Delta T$$ is temperature change. For water near room temperature, $$c \approx 4.18 \text{ J/(g}\cdot^\circ\text{C)}$$ (often $$4.184$$ in tables). A coffee-cup calorimeter at constant pressure approximates $$q_{\text{reaction}} \approx -\left(m_{\text{solution}}c_{\text{solution}}\Delta T + C_{\text{cal}}\Delta T\right)$$ for the reaction inside, where $$C_{\text{cal}}$$ is the **calorimeter constant** (energy per kelvin for the apparatus), which is like a calibration/error term because calorimeters aren't perfect insulators. Matching system and surroundings gives

$$
q_{\text{sys}} = -q_{\text{surr}}
$$

when no other work or losses matter (Conservation of energy/matter).

The central move in any calorimetry problem is this sign relationship: the heat lost by one part of the setup equals the heat gained by the other. In a coffee-cup calorimeter, the reaction is the **system** and the solution is the **surroundings**, so $$q_{\text{rxn}}=-q_{\text{solution}}$$. If the solution warms up, $$q_{\text{solution}}>0$$, which forces $$q_{\text{rxn}}<0$$—an exothermic reaction.

### Two kinds of calorimeter

- A **coffee-cup (constant-pressure) calorimeter** is open to the atmosphere, so the heat it measures is $$q_p=\Delta H$$ directly. This is the standard AP setup for solution reactions, dissolving, and neutralization.
- A **bomb (constant-volume) calorimeter** seals the reaction in a rigid steel vessel, usually to burn a sample in excess oxygen. Because $$\Delta V=0$$, no $$PV$$ work is done and the measured heat is $$q_v=\Delta U$$, the internal-energy change, rather than $$\Delta H$$. Bomb calorimeters are the tool of choice for combustion and food-energy measurements.

In both, the apparatus itself absorbs some heat, accounted for by the **calorimeter constant** $$C_{\text{cal}}$$ (energy per kelvin), determined by a calibration run.

<div class="placeholder-box">

**Image placeholder:** Side-by-side cutaway diagrams of a coffee-cup calorimeter (nested foam cups, lid, thermometer, stirrer) labeled "constant pressure, measures $$\Delta H$$" and a bomb calorimeter (sealed steel bomb in a water bath) labeled "constant volume, measures $$\Delta U$$."

</div>

---

### Work and Potential Energy

Work in gas problems often means pressure–volume work (e.g. expansion of a piston). For expansion against constant external pressure,

$$
W = -P_{\text{ext}}\Delta V
$$

for work done on the system (AP-style). **Internal energy** change obeys the **First Law of Thermodynamics**:

$$
\Delta U = q + W.
$$

At constant volume (isochoric processes), $$\Delta V = 0$$ so $$W = 0$$ and $$\Delta U = q$$.

---

### Phase changes and heating curves

During melting or boiling at fixed pressure, temperature stays constant while latent heat is absorbed or released:

$$
q = n\Delta H_{\text{fus}}, \qquad q = n\Delta H_{\text{vap}},
$$

with molar enthalpies of fusion and vaporization. A heating curve (temperature vs heat added) shows slopes $$1/(mc)$$ and plateaus at phase changes.

A full heating curve alternates between **sloped segments** and **flat plateaus**:

- On a **sloped segment**, a single phase is being warmed, temperature rises, and you use $$q=mc\Delta T$$ with the specific heat *of that phase* (ice, liquid water, and steam all have different $$c$$ values, which is why the slopes differ).
- On a **plateau**, two phases coexist and temperature is constant while a phase change happens. All the added energy goes into overcoming intermolecular forces (raising potential energy, not kinetic energy), so you use $$q=n\Delta H_{\text{fus}}$$ or $$q=n\Delta H_{\text{vap}}$$.

The vaporization plateau is longer than the fusion plateau for most substances because $$\Delta H_{\text{vap}}>\Delta H_{\text{fus}}$$—separating molecules completely into a gas costs more energy than just loosening them from a fixed lattice into a liquid. To find the total energy to take a substance across several phase regions, add the $$q$$ for every segment and plateau in sequence.

<div class="placeholder-box">

**Image placeholder:** Heating curve for water (temperature vs. heat added) showing the solid-warming slope, the melting plateau at $$0^\circ\text{C}$$, the liquid-warming slope, the boiling plateau at $$100^\circ\text{C}$$, and the gas-warming slope, with each segment annotated with the relevant equation ($$mc\Delta T$$ or $$n\Delta H$$).

</div>

---

## Enthalpy

**Enthalpy** $$H$$ is defined as $$H = U + PV$$. It is a state function. For a process at constant pressure the change in enthalpy becomes:

$$
\Delta H = \Delta U + P\Delta V.
$$

However, you will usually see enthalpy in the context of heat for AP Chemistry problems, so

$$
\Delta H_{\text{rxn}} = \frac{q_{\text{sys}}}{n}.
$$

where $$n$$ is the number of moles, and enthalpy is from the perspective of the system. At constant pressure, $$\Delta H = q_p$$ for the system, so it has the same sign as $$q_{\text{sys}}$$. It has the opposite sign of the heat change measured for the surroundings in a coffee-cup calorimeter:

$$
q_{\text{rxn}} = q_{\text{sys}} = -q_{\text{surr}}.
$$

### Exothermic versus endothermic

In an **exothermic** reaction, the system evolves so that heat flows out to the surroundings: $$\Delta H < 0$$, $$q_{\text{sys}} < 0$$, and $$q_{\text{surr}} > 0$$.

In an **endothermic** reaction, the system draws heat in: $$\Delta H > 0$$, $$q_{\text{sys}} > 0$$, and $$q_{\text{surr}} < 0$$.

Always label whether $$q$$ refers to system or surroundings when you compare signs across textbooks.

### State functions and path

Enthalpy is a state function. **State functions** depend only on initial and final states, not the path: $$P$$, $$V$$, $$T$$, $$U$$, $$H$$, and (later) **entropy** $$S$$ and **Gibbs free energy** $$G$$. Heat $$q$$ and work $$W$$ are path-dependent; their sum $$\Delta U = q + W$$ is not.

---

## Standard enthalpies and formation

**Standard state** means specified reference conditions (For AP: $$1$$ atm for gases, $$1\text{ M}$$ for solutes in solution chemistry, pure substances in their stable form at $$25^\circ\text{C}$$ unless noted). The **standard enthalpy of formation** $$\Delta H_f^\circ$$ is $$\Delta H$$ for forming one mole of a compound from its elements in their standard states. Elements in their reference/naturally occuring forms have $$\Delta H_f^\circ = 0$$ by definition.

For any reaction,

$$
\Delta H_{\text{rxn}}^\circ = \sum \nu\,\Delta H_f^\circ(\text{products}) - \sum \nu\,\Delta H_f^\circ(\text{reactants}),
$$

where $$\nu$$ are stoichiometric coefficients. Thermochemical equations can be scaled; $$\Delta H$$ scales with the mole amounts written in the equation.

---

## Hess’s law

**Hess’s law** states that $$\Delta H$$ for an overall process is the sum of $$\Delta H$$ values for steps that add up to the same net reaction—because $$H$$ is a state function. Reverse a step → flip the sign of $$\Delta H$$. Multiply a step by a factor → multiply $$\Delta H$$ by the same factor.

Because $$H$$ is a state function, the enthalpy change depends only on the initial and final states, not on the route taken. That means you can build any target reaction out of known steps and the enthalpies add—just like the legs of a trip add to the same net displacement no matter which path you walk.

A reliable strategy for combining given equations:

:::strategy{title="Combining Hess's-law equations"}
1. Identify a species that appears in only **one** of the given equations and in the **target**; orient (and if needed, flip) that equation so the species lands on the correct side.
2. **Scale** each equation so its coefficients match the target, multiplying its $$\Delta H$$ by the same factor.
3. **Add** the manipulated equations; intermediates that appear on opposite sides should cancel, leaving the target equation.
4. **Sum** the manipulated $$\Delta H$$ values to get $$\Delta H_{\text{target}}$$.
:::

<div class="placeholder-box">

**Image placeholder:** Hess’s-law energy-level (enthalpy) diagram showing reactants at top or bottom, an alternative two-step path through an intermediate level, and the direct one-step path, illustrating that both routes sum to the same overall $$\Delta H$$.

</div>

---

## Bond enthalpies (estimates)

**Bond enthalpy** (or bond energy) is the energy required to break one mole of a bond in the gas phase (averaged over similar molecules for tabulated values). For gas-phase estimates,

$$
\Delta H_{\text{rxn}} \approx \sum D(\text{bonds broken}) - \sum D(\text{bonds formed}),
$$

using positive bond energies for each bond listed. This ignores liquids, solvents, and exact environments, so it is less accurate than calorimetry or formation cycles.

The conceptual core is a sign rule: **breaking bonds always absorbs energy** (endothermic) and **forming bonds always releases energy** (exothermic). A reaction is exothermic overall when the bonds formed in the products are collectively stronger (release more) than the bonds broken in the reactants. The formula above is just that comparison written out—broken minus formed. Note that this method only works when **every** species is in the gas phase, since tabulated bond energies assume isolated gas-phase molecules with no intermolecular forces to account for.

Bond strength also tracks bond order and length: in general a triple bond is stronger (and shorter) than a double bond, which is stronger than a single bond between the same atoms, so multiply-bonded molecules such as $$\text{N}_2$$ are very stable and costly to break.

---

## Solution formation (preview)

$$\Delta H_{\text{solution}}$$ combines lattice (endothermic breakup of solid) and hydration (exothermic ion–solvent interaction) terms. A slightly endothermic $$\Delta H_{\text{solution}}$$ can still occur if entropy favors mixing (full explanation in later units). A very endothermic process may give negligible solubility unless entropy dominates strongly.

Both of those terms ultimately trace back to **Coulomb's law**: the energy of an ionic interaction scales with the product of the charges over the distance between centers,

$$
E \propto \frac{q_1 q_2}{r}.
$$

This means **lattice energy** (and therefore how much energy it costs to pull the crystal apart) is largest for ions with **high charges** and **small radii**—for example, $$\text{MgO}$$ has a far larger lattice energy than $$\text{NaCl}$$ because both ions carry a $$\pm2$$ charge and are compact. The same Coulombic reasoning explains why those small, highly charged ions also release a lot of energy on hydration. Whether dissolving is net exothermic or endothermic depends on which of the two large opposing terms wins.

Dissolving as a three-step thermodynamic cycle:

1. Separate the solute particles (break the lattice) — endothermic, $$+\Delta H_{\text{lattice}}$$.
2. Separate the solvent particles to make room — endothermic.
3. Let solute and solvent particles attract one another (hydration/solvation) — exothermic.

---

## Vapor pressure and the Clausius–Clapeyron relation

The **Clausius–Clapeyron** equation relates vapor pressure to temperature for a liquid (using molar enthalpy of vaporization $$\Delta H_{\text{vap}}$$ as approximately constant over a modest range):

$$
\ln\left(\frac{P_2}{P_1}\right) = -\frac{\Delta H_{\text{vap}}}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right).
$$

Higher $$T$$ increases vapor pressure; stronger IMFs tend to lower vapor pressure at a given $$T$$ (see [Unit 3](/notes/ap/chem/submix/)). This formula will likely not appear on the AP test, but is good to know

---

## Practice

### MCQ

::::problem
1. A reaction has $$\Delta H=-85\ \text{kJ/mol}$$. Which statement is correct?

   (A) The reaction absorbs heat from the surroundings.<br>
   (B) The products have greater enthalpy than the reactants.<br>
   (C) The reaction is exothermic.<br>
   (D) The reaction must be spontaneous at all temperatures.

:::solution
A negative $$\Delta H$$ means heat is released by the system. The reaction is exothermic.

$$
\boxed{\text{C}}
$$
:::
::::

::::problem
2. A $$50.0\ \text{g}$$ sample of water is warmed from $$22.0^\circ\text{C}$$ to $$28.0^\circ\text{C}$$. Using $$c=4.184\ \text{J/(g}\cdot^\circ\text{C)}$$, how much heat is absorbed by the water?

   (A) $$1.26\times10^2\ \text{J}$$<br>
   (B) $$1.26\times10^3\ \text{J}$$<br>
   (C) $$5.02\times10^3\ \text{J}$$<br>
   (D) $$1.17\times10^4\ \text{J}$$

:::solution
Use

$$
q=mc\Delta T.
$$

Here $$\Delta T=6.0^\circ\text{C}$$, so

$$
q=(50.0)(4.184)(6.0)=1.26\times10^3\ \text{J}.
$$

$$
\boxed{\text{B}}
$$
:::
::::

::::problem
3. Which process is endothermic?

   (A) Freezing water<br>
   (B) Condensing steam<br>
   (C) Burning methane<br>
   (D) Vaporizing liquid water

:::solution
Vaporization requires energy to overcome intermolecular attractions in the liquid.

$$
\boxed{\text{D}}
$$
:::
::::

::::problem
4. In a coffee-cup calorimeter, the solution temperature increases. What is true about the reaction occurring in the solution?

   (A) The reaction releases heat to the solution.<br>
   (B) The reaction absorbs heat from the solution.<br>
   (C) The reaction has no enthalpy change.<br>
   (D) The reaction must have $$\Delta S<0$$.

:::solution
If the solution temperature increases, the solution absorbed heat. The reaction released that heat, so the reaction is exothermic.

$$
\boxed{\text{A}}
$$
:::
::::

::::problem
5. Which equation correctly represents Hess's law?

   (A) $$q=mc\Delta T$$<br>
   (B) $$\Delta H_{\text{rxn}}=\sum \Delta H_{\text{steps}}$$<br>
   (C) $$PV=nRT$$<br>
   (D) $$K=\frac{[\text{products}]}{[\text{reactants}]}$$

:::solution
Hess's law says enthalpy is a state function, so the enthalpy change for an overall reaction equals the sum of the enthalpy changes for the steps.

$$
\boxed{\text{B}}
$$
:::
::::

::::problem
6. If bonds broken require $$650\ \text{kJ}$$ and bonds formed release $$900\ \text{kJ}$$, what is the approximate $$\Delta H_{\text{rxn}}$$?

   (A) $$+250\ \text{kJ}$$<br>
   (B) $$-250\ \text{kJ}$$<br>
   (C) $$+1550\ \text{kJ}$$<br>
   (D) $$-1550\ \text{kJ}$$

:::solution
Use

$$
\Delta H_{\text{rxn}}\approx \sum D(\text{broken})-\sum D(\text{formed}).
$$

$$
\Delta H_{\text{rxn}}=650-900=-250\ \text{kJ}.
$$

$$
\boxed{\text{B}}
$$
:::
::::

### FRQ

::::frq{id=chem-thermochemistry-1}
7. A reaction is represented by

$$
2\text{H}_2(g)+\text{O}_2(g)\rightarrow2\text{H}_2\text{O}(l)
$$

with $$\Delta H^\circ_{\text{rxn}}=-572\ \text{kJ}$$ for the reaction as written.

   $$(A)$$ Calculate the enthalpy change for forming $$1.00\ \text{mol}$$ of $$\text{H}_2\text{O}(l)$$.

   $$(B)$$ Calculate the enthalpy change when $$4.00\ \text{mol}$$ of $$\text{H}_2(g)$$ reacts completely.

   $$(C)$$ Explain why breaking bonds is endothermic even when the overall reaction is exothermic.

:::solution
$$(A)$$ The reaction forms $$2$$ moles of water, so the enthalpy change must be divided by $$2$$ to find the value per mole of water:

$$
\frac{-572\ \text{kJ}}{2}=-286\ \text{kJ}.
$$

The negative sign means heat is released when water forms from hydrogen and oxygen.

$$(B)$$ The reaction as written consumes $$2$$ moles of $$\text{H}_2$$. Consuming $$4.00$$ moles doubles the reaction, so the enthalpy change also doubles:

$$
2(-572\ \text{kJ})=-1144\ \text{kJ}.
$$

$$(C)$$ Energy must be added to separate bonded atoms, so bond breaking is endothermic. The overall reaction is exothermic because forming the O-H bonds in water releases more energy than was required to break the H-H and O=O bonds. In bond-enthalpy language, $$\Delta H_{\text{rxn}}$$ is negative because the energy released by bonds formed is greater than the energy absorbed by bonds broken.
:::
::::

::::frq{id=chem-thermochemistry-2}
8. The 2026 AP Chemistry exam included a sodium oxide thermochemistry problem using formation enthalpy and limiting reactants. (Adapted from College Board, [2026 AP Chemistry FRQ 7](https://apcentral.collegeboard.org/media/pdf/ap26-frq-chemistry.pdf).)

   $$(A)$$ For $$4\text{Na}(s)+\text{O}_2(g)\rightarrow2\text{Na}_2\text{O}(s)$$ with $$\Delta H^\circ_{\text{rxn}}=-828\ \text{kJ}$$, calculate $$\Delta H_f^\circ$$ for $$\text{Na}_2\text{O}(s)$$.

   $$(B)$$ If $$2.00\ \text{mol}$$ Na reacts completely with excess oxygen, calculate the heat released.

   $$(C)$$ Explain why elements in their standard states have $$\Delta H_f^\circ=0$$.

:::solution
$$(A)$$ The reaction forms $$2$$ moles of $$\text{Na}_2\text{O}(s)$$ from elements in their standard states, so the reaction enthalpy is twice the molar enthalpy of formation:

$$
\Delta H_f^\circ=\frac{-828\ \text{kJ}}{2}=-414\ \text{kJ/mol}.
$$

$$(B)$$ The reaction releases $$828\ \text{kJ}$$ per $$4$$ moles Na.

$$
2.00\ \text{mol Na}\times\frac{-828\ \text{kJ}}{4.00\ \text{mol Na}}=-414\ \text{kJ}.
$$

So $$414\ \text{kJ}$$ of heat is released.

$$(C)$$ Formation enthalpy measures formation from elements in their standard states. An element already in its standard state requires no formation reaction, so its assigned value is zero. This is a reference convention that lets formation enthalpies be added and subtracted consistently in Hess's law calculations.
:::
::::
