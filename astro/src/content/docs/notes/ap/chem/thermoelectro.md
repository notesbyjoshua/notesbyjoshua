---
title: "Unit 9: Thermodynamics and Electrochemistry"
next: false
sidebar:
  order: 9
---

This unit connects the energy ideas from [Unit 6](/notes/ap/chem/thermochemistry/) and equilibrium ideas from [Unit 7](/notes/ap/chem/equilibrium/) to two big questions: whether a process is thermodynamically favored, and how redox reactions can produce or consume electrical work. You will use entropy, Gibbs free energy, cell potential, the Nernst equation, and Faraday's law to describe spontaneous reactions, galvanic cells, electrolytic cells, and electrochemical applications.

---

## Spontaneity and Thermodynamic favorability

A **spontaneous** process is one that occurs *without continuous external intervention* once the required conditions are present. Spontaneous does not mean fast. Iron rusting is thermodynamically favored under ordinary conditions, but it is slow because its pathway has kinetic barriers.

A process is **thermodynamically favored** when it is spontaneous under the stated conditions. A process can be thermodynamically favored but **kinetically controlled** if it happens slowly because the activation energy is high or the reaction mechanism is difficult.

---

## The Second law and Entropy

The **Second Law of Thermodynamics** says that for any spontaneous process, the entropy of the universe increases:

$$
\Delta S_{\text{universe}} > 0.
$$

- **Entropy** $$S$$ is a measure of *energy dispersal* and the number of possible microscopic arrangements available to a system. A common shorthand is "chaos," but the more precise AP idea is that higher entropy means more accessible **microstates**.
- **Microstates** are the *possible arrangements of particles and energy* that produce the same macroscopic state. More particles, more volume, more freedom of motion, and more possible energy distributions usually mean more microstates and therefore higher entropy.

The entropy change for the universe is

$$
\Delta S_{\text{universe}} = \Delta S_{\text{system}} + \Delta S_{\text{surroundings}}.
$$

Use this sign test:


| Condition                          | Meaning                                              |
| ---------------------------------- | ---------------------------------------------------- |
| $$\Delta S_{\text{universe}} > 0$$ | Spontaneous in the forward direction                 |
| $$\Delta S_{\text{universe}} = 0$$ | Equilibrium                                          |
| $$\Delta S_{\text{universe}} < 0$$ | Nonspontaneous forward; reverse direction is favored |


Heat leaving the system increases surrounding entropy; heat entering the system decreases surrounding entropy. At constant pressure and temperature, the surroundings contribution is often written as

$$
\Delta S_{\text{surroundings}} = -\frac{\Delta H_{\text{system}}}{T}.
$$

This equation explains why exothermic reactions often help spontaneity: if $$\Delta H_{\text{system}} < 0$$, then $$\Delta S_{\text{surroundings}} > 0$$.

---

## Predicting entropy changes

To predict whether $$\Delta S_{\text{system}}$$ is positive or negative, compare particle freedom and the number of particles before and after the process.

Entropy usually increases when:

1. A substance changes to a more disordered phase: solid $$\rightarrow$$ liquid $$\rightarrow$$ gas.
2. The number of gas particles increases.
3. A solid or liquid dissolves into many aqueous ions or particles.
4. Temperature increases, because more energy states become accessible.
5. A larger, more complex molecule has more ways to vibrate, rotate, and arrange energy.

Entropy usually decreases when:

1. Gases become liquids or solids.
2. The number of gas particles decreases.
3. Separate particles combine into one more ordered product.
4. Ions or molecules crystallize from solution.

For aqueous ionic compounds, remember the **van't Hoff factor** idea from solutions: one formula unit can produce multiple dissolved particles. For example, dissolving $$\text{CaCl}_2$$ can produce three ions per formula unit, so the number of independently moving particles increases.

Some reactions look counterintuitive if you only inspect the system. For example, building biological polymers from smaller units can decrease system entropy, but the overall process can still be favored if heat release or coupled reactions increase the entropy of the surroundings enough.

---

## Standard molar entropy

**Standard molar entropy** $$S^\circ$$ is the absolute entropy of one mole of a substance in its *standard state*, usually reported at $$298\ \text{K}$$ and $$1\ \text{bar}$$ or approximately $$1\ \text{atm}$$.

The **Third Law of Thermodynamics** says that a perfect crystal at $$0\ \text{K}$$ has entropy equal to zero:

$$
S = 0 \quad \text{for a perfect crystal at } 0\ \text{K}.
$$

Unlike standard enthalpies of formation, standard molar entropies are not usually zero for elements at $$298\ \text{K}$$. Real substances have motion and energy distributions above absolute zero, so they have positive entropy.

For a reaction,

$$
\Delta S^\circ_{\text{rxn}} = \sum n_p S^\circ_{\text{products}} - \sum n_r S^\circ_{\text{reactants}},
$$

where $$n_p$$ and $$n_r$$ are the stoichiometric coefficients of products and reactants. Entropy is commonly tabulated in $$\text{J}/(\text{mol}\cdot\text{K})$$, not $$\text{kJ}/(\text{mol}\cdot\text{K})$$, so unit conversion matters when combining entropy with enthalpy or Gibbs free energy.

---

## Gibbs free energy

**Gibbs free energy** $$G$$ is the thermodynamic quantity that predicts *maximum useful non-expansion work* at constant temperature and pressure. For a reaction,

$$
\Delta G = \Delta H - T\Delta S.
$$

Here $$T$$ must be in Kelvin. If $$\Delta H$$ is in $$\text{kJ/mol}$$, then $$T\Delta S$$ must also be in $$\text{kJ/mol}$$. Since $$\Delta S$$ is often given in joules, convert it:

$$
1\ \text{kJ} = 1000\ \text{J}.
$$



The sign of $$\Delta G$$ determines thermodynamic favorability:


| $$\Delta G$$     | Meaning                         |
| ---------------- | ------------------------------- |
| $$\Delta G < 0$$ | Spontaneous forward reaction    |
| $$\Delta G = 0$$ | Equilibrium                     |
| $$\Delta G > 0$$ | Nonspontaneous forward reaction |


### Enthalpy and entropy drivers

A reaction is **enthalpy-driven** when a large negative $$\Delta H$$ dominates the $$-T\Delta S$$ term. A reaction is **entropy-driven** when a large positive $$\Delta S$$ makes $$-T\Delta S$$ very negative, especially at high temperature.


| $$\Delta H$$ | $$\Delta S$$ | Spontaneity                        |
| ------------ | ------------ | ---------------------------------- |
| Negative     | Positive     | Spontaneous at all temperatures    |
| Positive     | Negative     | Nonspontaneous at all temperatures |
| Negative     | Negative     | Spontaneous at low temperature     |
| Positive     | Positive     | Spontaneous at high temperature    |


When $$\Delta G = 0$$, the threshold temperature is

$$
T = \frac{\Delta H}{\Delta S},
$$

as long as units match.

---

## Standard and nonstandard free energy

**Standard Gibbs free energy change** $$\Delta G^\circ$$ is the free energy change when all reactants and products are in their standard states.

You can calculate it from standard free energies of formation:

$$
\Delta G^\circ_{\text{rxn}} = \sum n_p \Delta G_f^\circ(\text{products}) - \sum n_r \Delta G_f^\circ(\text{reactants}).
$$

Elements in their standard states have $$\Delta G_f^\circ = 0$$.

Free energy also connects directly to equilibrium:

$$
\Delta G^\circ = -RT\ln K.
$$

Under nonstandard conditions,

$$
\Delta G = \Delta G^\circ + RT\ln Q.
$$

Combining the equations gives

$$
\Delta G = RT\ln\left(\frac{Q}{K}\right).
$$

If $$Q < K$$, then $$\Delta G < 0$$ and the reaction proceeds forward. If $$Q > K$$, then $$\Delta G > 0$$ and the reverse direction is favored. At equilibrium, $$Q = K$$ and $$\Delta G = 0$$.

---

## Coupled reactions

**Coupled reactions** combine a thermodynamically unfavorable process with a favorable process so the net $$\Delta G$$ is negative. The reactions usually share a common intermediate or occur through a linked mechanism.

Because $$G$$ is a state function, Gibbs free energy changes add like Hess's law:

$$
\Delta G_{\text{net}} = \Delta G_1 + \Delta G_2 + \cdots
$$

The coupled process is thermodynamically favored when

$$
\Delta G_{\text{net}} < 0.
$$

This is how many biological and industrial processes drive unfavorable steps: the system "pays" for them using a more favorable reaction.

---

## Electrochemistry overview

**Electrochemistry** studies *electron-transfer reactions* and the conversion between chemical energy and electrical work. Electrochemical cells are built from two half-reactions:

1. **Oxidation**: loss of electrons.
2. **Reduction**: gain of electrons.

Remember:

- **ANOX**: oxidation occurs at the anode.
- **REDCAT**: reduction occurs at the cathode.

Electrons flow through the external wire from anode to cathode. Ions move through the solution or salt bridge to maintain charge balance.

---

## Galvanic cells

A **galvanic cell** converts a *spontaneous redox reaction* into electrical work by separating oxidation and reduction into different compartments. A battery is one or more galvanic cells connected to provide power. A **fuel cell** is a galvanic cell where reactants are continuously supplied; unlike a sealed battery, it can keep operating as long as fuel and oxidant are replenished. All galvanic cells involve having two *separate* compartments, with the cathode (reduction site) in one compartment and the anode (oxidation site) in the other. The two are connected with a salt bridge, which maintains neutrality.

In a galvanic cell:


| Part            | Role                                                                 |
| --------------- | -------------------------------------------------------------------- |
| **Anode**       | Site of *oxidation*; produces electrons; negative in a galvanic cell |
| **Cathode**     | Site of *reduction*; consumes electrons; positive in a galvanic cell |
| **Salt bridge** | Allows ion flow to maintain charge neutrality                        |
| External wire   | Allows electron flow from anode to cathode                           |


The **salt bridge** is usually a U-shaped tube or porous barrier containing inert ions. Without it, charge buildup stops electron flow. Anions migrate toward the anode to balance newly produced cations, and cations migrate toward the cathode to replace cations being reduced.



---

## Cell potential and electrical work

**Cell potential** $$E_{\text{cell}}$$ is the *electrical potential difference* of a cell, measured in volts. It reflects the thermodynamic tendency for electrons to move through the external circuit. The ideal thermodynamic cell potential is measured for an open circuit, or with negligible current, so the cell is not being significantly drained while it is measured.

Charge is

$$
q = nF = It,
$$

where $$n$$ is moles of electrons, $$F = 96485\ \text{C/mol e}^-$$ is **Faraday's constant**, $$I$$ is current in amperes, and $$t$$ is time in seconds.

Electrical work and cell potential are related by

$$
w_{\text{max}} = -qE_{\text{cell}}.
$$

For a redox reaction,

$$
\Delta G = -nFE_{\text{cell}}.
$$

Important sign connection:


| Condition               | Meaning                                     |
| ----------------------- | ------------------------------------------- |
| $$E_{\text{cell}} > 0$$ | $$\Delta G < 0$$, spontaneous as written    |
| $$E_{\text{cell}} = 0$$ | $$\Delta G = 0$$, equilibrium               |
| $$E_{\text{cell}} < 0$$ | $$\Delta G > 0$$, nonspontaneous as written |


Cell potential is an **intensive property**, so it does not get multiplied by stoichiometric coefficients. If a half-reaction is doubled, $$\Delta G$$ doubles because $$n$$ doubles, but $$E^\circ$$ stays the same.

The percent efficiency of a cell can be estimated by

$$
\text{efficiency} = \frac{\text{actual work}}{\text{theoretical maximum work}} \times 100
$$

---

## Standard reduction potentials

**Standard reduction potential** $$E^\circ$$ is the *cell potential contribution for a half-reaction written as a reduction* under standard conditions. Tables list reductions by convention.

The standard hydrogen electrode is assigned

$$
2\text{H}^+(aq) + 2e^- \longrightarrow \text{H}_2(g), \qquad E^\circ = 0.00\ \text{V}.
$$

The more positive the standard reduction potential, the easier the species is to reduce and the stronger it is as an oxidizing agent. The more negative the value, the more the reverse oxidation is favored and the stronger the reduced species is as a reducing agent.

For a galvanic cell,

$$
E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}},
$$

where both values are read from a reduction potential table. The cathode usually has the more positive reduction potential.

Do not change the sign of the tabulated anode value before using the subtraction form. If instead you write

$$
E^\circ_{\text{cell}} = E^\circ_{\text{red}} + E^\circ_{\text{ox}},
$$

then you must reverse the anode half-reaction and change its sign.

Simply stated, you can think of a high cell potential as a river with a lot of electrons, where the more electrons you have the higher the river is. Thus, this river will flow from high to low, just like how electrons will flow from high reduction potential to a low cell potential.

---

## Line notation

**Line notation** is a compact way to represent an electrochemical cell. For a galvanic cell, the anode is written on the left and the cathode on the right:

$$
\text{anode} \mid \text{anode solution} \parallel \text{cathode solution} \mid \text{cathode}.
$$

Single vertical lines $$\mid$$ mark phase boundaries. The double vertical line $$\parallel$$ represents the salt bridge.

Example:

$$
\text{Zn}(s)\mid \text{Zn}^{2+}(aq)\parallel \text{Cu}^{2+}(aq)\mid \text{Cu}(s).
$$

This describes a cell where zinc is oxidized at the anode and copper ions are reduced at the cathode.

---

## The Nernst equation

The **Nernst equation** relates cell potential to *nonstandard concentrations or pressures*:

$$
E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{RT}{nF}\ln Q.
$$

At $$25^\circ\text{C}$$, this becomes

$$
E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0592}{n}\log Q.
$$

As a galvanic cell runs, reactants are consumed and products form, so $$Q$$ increases and $$E_{\text{cell}}$$ usually decreases. At equilibrium,

$$
E_{\text{cell}} = 0.
$$

Combining Nernst with equilibrium gives

$$
E^\circ_{\text{cell}} = \frac{RT}{nF}\ln K
$$

or at $$25^\circ\text{C}$$,

$$
E^\circ_{\text{cell}} = \frac{0.0592}{n}\log K.
$$

---

## Concentration cells and ion-selective electrodes

A **concentration cell** uses the same redox couple in both half-cells but at different concentrations. Because the electrodes and species are chemically the same, $$E^\circ_{\text{cell}} = 0$$, and the voltage comes entirely from the concentration difference.

The spontaneous direction reduces the concentration difference. Electrons flow from the dilute side to the concentrated side for a metal-ion concentration cell, so metal tends to oxidize on the dilute side and plate onto the concentrated side.

An **ion-selective electrode** is an electrode that responds selectively to a particular ion concentration. Its potential follows Nernst-type behavior, so it can be used to measure ion activity, such as $$\text{H}^+$$ in a pH electrode or $$\text{F}^-$$ in a fluoride electrode.

---

## Corrosion

**Corrosion** is an electrochemical process where different parts of a metal surface act as anodes and cathodes. At anodic sites, metal atoms oxidize:

$$
\text{M}(s) \longrightarrow \text{M}^{n+}(aq) + ne^-.
$$

Electrons travel through the metal to cathodic sites, where a reduction reaction occurs, often involving oxygen and water. Rusting of iron is a common example.

Corrosion can be slowed by:

1. Coating the metal to block water and oxygen.
2. Alloying to form a more resistant material.
3. Adding corrosion inhibitors.
4. Using **cathodic protection**.

In cathodic protection, a more easily oxidized metal acts as a **sacrificial anode**. It oxidizes instead of the protected metal, keeping the protected metal as the cathode.

---

## Electrolytic cells

An **electrolytic cell** uses *external electrical energy* to drive a nonspontaneous redox reaction. Electrolytic cells are used in electroplating, metal purification, and production of elements from molten salts or aqueous ions.

Oxidation still occurs at the anode and reduction still occurs at the cathode. The sign of the electrodes changes compared with galvanic cells:

| Cell type    | Anode    | Cathode  | Spontaneity                            |
| ------------ | -------- | -------- | -------------------------------------- |
| Galvanic     | Negative | Positive | Spontaneous                            |
| Electrolytic | Positive | Negative | Nonspontaneous; driven by power source |

If both electrodes are in the same compartment and an external battery is driving the reaction, the setup is usually electrolytic. The absence of a salt bridge can also suggest a simple electrolytic setup, though some galvanic cells use porous barriers instead of classic U-shaped bridges. Basically, electrolytics cells are like galvanic cells but reversed.

---

## Electrolysis of salts

### Electrolysis of molten salts

Often, we want to derive the individual solid metal components from a compound. One method that is used is the **electrolysis of molten salts**, when molten, liquid, *non-aqueous* ionic salts are electrolyzed into their elemental forms. The anions will react at the anode, while the cations will react at the cathode. For example, in the electrolysis of $$PbBr_2$$:

At the anode: $$2 Br^{-} (l) \longrightarrow Br_2 (l) + 2 e^{-}$$

At the cathode: $$Pb^{2+} (l) + 2 e^{-} \longrightarrow Pb(s)$$

Since no water is present, it can't react! The metals/liquids should then form onto an **inert electrode** (like platinum and graphite). However, the electrolysis of molten salts is not very practical because it takes hundreds and even thousands of degrees to get the salts into molten form!

### Electrolysis of aqueous solutions

More commonly, electrolysis is done on *aqueous solutions* to generate the elemental form of elements from compounds. It is similar to the molten salt electrolysis, expect water is present and could react at either, both, or neither electrode. Usually, the half-reaction with a *higher potential* (whether oxidation or reduction) will be favored at an electrode (with the exception of the comparison of $$Cl_2$$ and water).

At the anode: Compare the oxidation of anion vs. water ($$-1.23 V$$). If water was oxidized, gas is produced, and the solution should be acidic.

At the cathode: Compare the reduction of cation vs. water ($$-0.83 V$$). If water was reduced, gas is produced, and the solution should be basic.

Note that the reduction and oxidation of water have DIFFERENT magnitudes! They are two separate reactions and have different voltages!

Below are some common observations that would occur if certain elements formed:

| Element   | Observations        |
| ----------| ------------------- |
| $$Br_2$$ (l) | Yellow liquid, clear in starch |
| $$I_2$$ (l) | Yellow liquid, dark blue in starch|
| $$Cl_2$$ (g) | Gas that discolors green dye |
| $$Cu$$ (s) | Orange-colored solid forming on electrode |
| $$Co$$ (s) | Silver-colored solid forming on electrode |
| $$H_2$$ (g) | Bubbling gas with small, fast-rising bubbles |
| $$O_2$$ (g) | Bubbling gas with large, slow-rising bubbles |
| $$OH^{-}$$ (aq) | Blue in bromothymol blue, pink in phenolphthalein|
| $$H^{+}$$ (aq) | Yellow in bromothymol blue, clear in phenolphthalein |

---

## Electroplating and competing reactions

**Electroplating** deposits a thin layer of metal onto an object by reducing metal ions at the cathode:

$$
\text{M}^{n+}(aq) + ne^- \longrightarrow \text{M}(s).
$$

In aqueous electrolysis, water can compete with dissolved ions. Whether water or an ion is oxidized/reduced depends on reduction potentials, concentration, electrode material, and overpotential. AP problems often simplify this by giving the relevant half-reactions or asking you to compare standard potentials.

---

## Faraday's law

**Faraday's law** says that the amount of substance produced or consumed at an electrode is *directly proportional to the total charge passed through the cell*.

Use this unit pathway:

$$
\text{current} \times \text{time} \rightarrow \text{coulombs} \rightarrow \text{mol e}^- \rightarrow \text{mol substance} \rightarrow \text{mass}.
$$

Because $$q = It$$ and $$1\ \text{mol e}^- = F\ \text{C}$$,

$$
\text{mol e}^- = \frac{It}{F}.
$$

If $$n$$ electrons produce one formula unit or atom of the substance, then

$$
m = \frac{MIt}{nF},
$$

where $$m$$ is mass, $$M$$ is molar mass, $$I$$ is current, $$t$$ is time, $$n$$ is moles of electrons per mole of product, and $$F$$ is Faraday's constant.

For example, plating $$\text{Cu}(s)$$ from $$\text{Cu}^{2+}$$ requires two electrons per copper atom:

$$
\text{Cu}^{2+} + 2e^- \longrightarrow \text{Cu}(s).
$$

So $$n = 2$$ in the mass equation.

---

:::checklist
1. Decide whether the question is about thermodynamics, electrochemistry, or both.
2. For entropy, compare phases, gas moles, dissolved particles, and temperature.
3. For Gibbs free energy, keep units consistent: $$\Delta H$$ and $$T\Delta S$$ must match.
4. Use $$\Delta G < 0$$, $$E_{\text{cell}} > 0$$, and $$K > 1$$ as equivalent signs of a favored forward reaction under standard conditions.
5. In galvanic cells, anode is oxidation, cathode is reduction, and electrons flow anode $$\rightarrow$$ cathode.
6. Use reduction potential tables carefully: values are intensive, and tabulated half-reactions are written as reductions.
7. For nonstandard cells, write $$Q$$ correctly before using the Nernst equation.
8. For electrolysis, convert current and time into charge, then into moles of electrons.
:::

---

:::equations
| Idea                                       | Equation                                                                                                                 |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Entropy of universe                        | $$\Delta S_{\text{universe}} = \Delta S_{\text{system}} + \Delta S_{\text{surroundings}}$$                               |
| Surroundings entropy                       | $$\Delta S_{\text{surroundings}} = -\Delta H_{\text{system}}/T$$                                                         |
| Standard reaction entropy                  | $$\Delta S^\circ_{\text{rxn}} = \sum n_p S^\circ_{\text{products}} - \sum n_r S^\circ_{\text{reactants}}$$               |
| Gibbs free energy                          | $$\Delta G = \Delta H - T\Delta S$$                                                                                      |
| Standard free energy from formation values | $$\Delta G^\circ_{\text{rxn}} = \sum n_p\Delta G_f^\circ(\text{products}) - \sum n_r\Delta G_f^\circ(\text{reactants})$$ |
| Free energy and equilibrium                | $$\Delta G^\circ = -RT\ln K$$                                                                                            |
| Nonstandard free energy                    | $$\Delta G = \Delta G^\circ + RT\ln Q$$                                                                                  |
| Free energy and cell potential             | $$\Delta G = -nFE_{\text{cell}}$$                                                                                        |
| Standard cell potential                    | $$E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$$                                            |
| Nernst equation                            | $$E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{RT}{nF}\ln Q$$                                                         |
| Nernst at $$25^\circ\text{C}$$             | $$E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0592}{n}\log Q$$                                                     |
| Charge                                     | $$q = nF = It$$                                                                                                          |
| Faraday's law mass form                    | $$m = \frac{MIt}{nF}$$                                                                                                   |
:::

---

## Practice

### MCQ

::::problem
1. For a spontaneous galvanic cell under standard conditions, which statement is correct?

   (A) $$E^\circ_{\text{cell}}<0$$ and $$\Delta G^\circ<0$$<br>
   (B) $$E^\circ_{\text{cell}}>0$$ and $$\Delta G^\circ<0$$<br>
   (C) $$E^\circ_{\text{cell}}>0$$ and $$\Delta G^\circ>0$$<br>
   (D) $$E^\circ_{\text{cell}}=0$$ and $$\Delta G^\circ=0$$

:::solution
For a spontaneous galvanic cell,

$$
\Delta G^\circ=-nFE^\circ_{\text{cell}}.
$$

Spontaneous means $$\Delta G^\circ<0$$, which requires $$E^\circ_{\text{cell}}>0$$.

$$
\boxed{\text{B}}
$$
:::
::::

::::problem
2. Which change always increases the entropy of the system?

   (A) $$\text{H}_2\text{O}(g)\rightarrow\text{H}_2\text{O}(l)$$<br>
   (B) $$\text{NaCl}(aq)\rightarrow\text{NaCl}(s)$$<br>
   (C) $$\text{CO}_2(s)\rightarrow\text{CO}_2(g)$$<br>
   (D) $$2\text{NO}_2(g)\rightarrow\text{N}_2\text{O}_4(g)$$

:::solution
Sublimation changes a solid directly into a gas. Gas particles have many more accessible microstates than particles in a solid.

$$
\boxed{\text{C}}
$$
:::
::::

::::problem
3. A reaction has $$\Delta H^\circ>0$$ and $$\Delta S^\circ>0$$. The reaction is most likely thermodynamically favorable at

   (A) low temperatures only.<br>
   (B) high temperatures only.<br>
   (C) all temperatures.<br>
   (D) no temperatures.

:::solution
Use

$$
\Delta G^\circ=\Delta H^\circ-T\Delta S^\circ.
$$

When both $$\Delta H^\circ$$ and $$\Delta S^\circ$$ are positive, high temperature makes the $$-T\Delta S^\circ$$ term large and negative.

$$
\boxed{\text{B}}
$$
:::
::::

::::problem
4. In an electrolytic cell, oxidation occurs at the

   (A) anode.<br>
   (B) cathode.<br>
   (C) salt bridge.<br>
   (D) voltmeter.

:::solution
Oxidation always occurs at the anode, in both galvanic and electrolytic cells.

$$
\boxed{\text{A}}
$$
:::
::::

::::problem
5. If $$\Delta G^\circ<0$$ for a reaction under standard conditions, which statement is true?

   (A) $$K<1$$<br>
   (B) $$K=1$$<br>
   (C) $$K>1$$<br>
   (D) $$E^\circ_{\text{cell}}<0$$ for the corresponding galvanic cell

:::solution
Since

$$
\Delta G^\circ=-RT\ln K,
$$

a negative $$\Delta G^\circ$$ means $$\ln K>0$$, so $$K>1$$.

$$
\boxed{\text{C}}
$$
:::
::::

::::problem
6. What mass of Ag is plated by $$1.00\ \text{mol}$$ of electrons from $$\text{Ag}^+$$?

   (A) $$53.9\ \text{g}$$<br>
   (B) $$107.9\ \text{g}$$<br>
   (C) $$215.8\ \text{g}$$<br>
   (D) $$96500\ \text{g}$$

:::solution
For $$\text{Ag}^+ + e^- \rightarrow \text{Ag}(s)$$, $$1.00\ \text{mol}$$ of electrons plates $$1.00\ \text{mol}$$ of Ag.

$$
1.00\ \text{mol Ag}\times107.9\ \text{g/mol}=107.9\ \text{g}.
$$

$$
\boxed{\text{B}}
$$
:::
::::

### FRQ

::::frq{id=chem-thermoelectro-1}
7. A galvanic cell is based on the reaction

$$
\text{Zn}(s)+\text{Cu}^{2+}(aq)\rightarrow\text{Zn}^{2+}(aq)+\text{Cu}(s).
$$

Use $$E^\circ_{\text{red}}(\text{Cu}^{2+}/\text{Cu})=+0.34\ \text{V}$$ and $$E^\circ_{\text{red}}(\text{Zn}^{2+}/\text{Zn})=-0.76\ \text{V}$$.

   $$(A)$$ Identify the anode and cathode.

   $$(B)$$ Calculate $$E^\circ_{\text{cell}}$$.

   $$(C)$$ Calculate $$\Delta G^\circ$$ for the reaction.

   $$(D)$$ Explain the direction of electron flow in the external circuit.

:::solution
$$(A)$$ Zinc is oxidized:

$$
\text{Zn}(s)\rightarrow\text{Zn}^{2+}(aq)+2e^-,
$$

so zinc is the anode. Copper(II) is reduced at the cathode:

$$
\text{Cu}^{2+}(aq)+2e^-\rightarrow\text{Cu}(s).
$$

This follows the rule that oxidation occurs at the anode and reduction occurs at the cathode.

$$(B)$$

$$
E^\circ_{\text{cell}}=E^\circ_{\text{cathode}}-E^\circ_{\text{anode}}
$$

$$
E^\circ_{\text{cell}}=0.34-(-0.76)=1.10\ \text{V}.
$$

The positive cell potential is consistent with the reaction being spontaneous as a galvanic cell under standard conditions.

$$(C)$$ Here $$n=2$$.

$$
\Delta G^\circ=-nFE^\circ_{\text{cell}}
$$

$$
\Delta G^\circ=-(2)(96485)(1.10)=-2.12\times10^5\ \text{J/mol rxn}.
$$

So

$$
\boxed{\Delta G^\circ=-212\ \text{kJ/mol rxn}}.
$$

$$(D)$$ Electrons are produced at the zinc anode and consumed at the copper cathode, so electrons flow from Zn to Cu through the external circuit. Ions move through the salt bridge to maintain charge balance, but electrons do not travel through the salt bridge.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw (-4,-1.4) rectangle (-1,1.2); \draw (1,-1.4) rectangle (4,1.2);
\draw[fill=gray!20] (-3.2,-1.1) rectangle (-2.9,0.9); \node at (-3.05,1.45) {Zn anode};
\draw[fill=orange!30] (2.9,-1.1) rectangle (3.2,0.9); \node at (3.05,1.45) {Cu cathode};
\draw[thick] (-3.05,0.9) -- (-3.05,2.2) -- (3.05,2.2) -- (3.05,0.9);
\draw[->, very thick, blue] (-2.4,2.45) -- (2.4,2.45) node[midway, above] {electron flow};
\draw[rounded corners, fill=yellow!20] (-1.2,0.8) -- (-0.5,1.45) -- (0.5,1.45) -- (1.2,0.8) -- (0.8,0.65) -- (0.35,1.05) -- (-0.35,1.05) -- (-0.8,0.65) -- cycle;
\node at (0,1.75) {salt bridge};
\end{tikzpicture}
```

:::
::::

::::frq{id=chem-thermoelectro-2}
8. The 2024 AP Chemistry exam included electroplating and nonspontaneous electrochemistry in a sterling silver context. (Adapted from College Board, [2024 AP Chemistry FRQ 3](https://apcentral.collegeboard.org/media/pdf/ap24-frq-chemistry.pdf).)

   $$(A)$$ Explain why an electrolytic plating process requires an external power source.

   $$(B)$$ Calculate the time required to plate $$1.00\ \text{g}$$ of $$\text{Cu}(s)$$ from $$\text{Cu}^{2+}$$ using a current of $$2.00\ \text{A}$$.

   $$(C)$$ Identify whether reduction or oxidation occurs at the object being plated.

:::solution
$$(A)$$ Electroplating is nonspontaneous as written, so an external power source is needed to drive electron flow and force reduction of metal ions onto the object. In other words, electrical energy is used to make a thermodynamically unfavorable redox process occur.

$$(B)$$ Moles of copper plated:

$$
n_{\text{Cu}}=\frac{1.00\ \text{g}}{63.55\ \text{g/mol}}=0.0157\ \text{mol}.
$$

For $$\text{Cu}^{2+}+2e^-\rightarrow\text{Cu}(s)$$,

$$
n_{e^-}=2(0.0157)=0.0315\ \text{mol e}^-.
$$

Charge required:

$$
q=nF=(0.0315)(96485)=3.04\times10^3\ \text{C}.
$$

Since $$q=It$$,

$$
t=\frac{3.04\times10^3\ \text{C}}{2.00\ \text{C/s}}=1.52\times10^3\ \text{s}.
$$

This is about $$25.3\ \text{min}$$ if converted to minutes.

$$(C)$$ Metal ions gain electrons and become solid metal on the object, so reduction occurs at the object being plated. The object being plated acts as the cathode in the electrolytic cell.
:::
::::
