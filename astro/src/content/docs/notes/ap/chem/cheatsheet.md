---
title: "AP Chemistry Cheat Sheet"
sidebar:
  order: 0
---

# AP Chemistry Cheat Sheet

---

## Constants and Common Values

- Avogadro's Number: $$N_A = 6.022 \times 10^{23}\ \text{mol}^{-1}$$
- Ideal Gas Constant: $$R = 0.08206\ \text{L·atm/(mol·K)} = 8.314\ \text{J/(mol·K)}$$
- Faraday's Constant: $$F = 96485\ \text{C/mol e}^-$$
- Specific heat of water: $$c_{\text{water}} \approx 4.18\ \text{J/(g·}^\circ\text{C)}$$
- Pressure conversions: $$1\ \text{atm} = 760\ \text{mmHg} = 760\ \text{torr} = 101.325\ \text{kPa}$$
- STP for AP Chem: $$273.15\ \text{K}$$ and $$1\ \text{atm}$$
- Molar volume of an ideal gas at STP: about $$22.4\ \text{L/mol}$$
- $$K_w = 1.0 \times 10^{-14}$$ at $$25^\circ\text{C}$$

---

## Unit 1: Atomic Structure and Properties

### Essential ideas

- **Mass number** = protons + neutrons
- **Atomic number** = protons
- **Average atomic mass** is a weighted average of isotopes
- **Moles** connect microscopic particles to measurable mass
- **Molarity**:

$$
M = \frac{\text{mol solute}}{\text{L solution}}
$$

### Electron configuration

- Aufbau order matters
- Pauli exclusion: max 2 electrons per orbital with opposite spin
- Hund's rule: fill equal-energy orbitals singly first

Common order:

$$
1s,\ 2s,\ 2p,\ 3s,\ 3p,\ 4s,\ 3d,\ 4p,\ 5s,\ 4d,\ 5p,\ 6s,\ 4f,\ 5d,\ 6p
$$

### Periodic trends

- **Atomic radius**: increases down, decreases across
- **Ionization energy**: decreases down, increases across
- **Electron affinity**: usually becomes more favorable across a period
- **Electronegativity**: decreases down, increases across
- More positive effective nuclear charge usually means electrons are held more tightly


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[step=0.55, gray!35] (0,0) grid (5.5,3.3);
\foreach \i/\lab in {0/1,1/2,2/3,3/4,4/5,5/6,6/7,7/8,8/9,9/10}{\node[font=\tiny] at (0.275+0.55*\i,3.05) {\lab};}
\draw[->, very thick, blue] (0.4,-0.45) -- (5.15,-0.45) node[midway, below] {atomic radius decreases};
\draw[->, very thick, blue] (5.95,0.3) -- (5.95,3.0) node[midway, right, align=center] {ionization energy\\and electronegativity\\increase};
\draw[->, very thick, red] (5.2,3.65) -- (0.45,3.65) node[midway, above] {atomic radius increases};
\draw[->, very thick, red] (-0.45,3.0) -- (-0.45,0.3) node[midway, left, align=center] {radius\\increases};
\end{tikzpicture}
```


### Photoelectron spectroscopy

- Lower binding energy means easier to remove electron (so elements with higher nuclear charge have charts that are shifted left)
- Higher peaks can mean more electrons in a subshell
- Peak position tells energy level; peak height/area tracks electron count


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[axis lines=left, width=10cm, height=5.5cm, xmin=0, xmax=10, ymin=0, ymax=6, xlabel={binding energy}, ylabel={relative electrons}, xtick=\empty, ytick=\empty, x dir=reverse, grid=both, grid style={gray!15}]
\addplot[ycomb, very thick, blue, mark=*] coordinates {(9,2) (6.2,2) (2.8,6) (1.1,1)};
\node[anchor=south] at (axis cs:9,2) {$1s$};
\node[anchor=south] at (axis cs:6.2,2) {$2s$};
\node[anchor=south] at (axis cs:2.8,6) {$2p$};
\node[anchor=south] at (axis cs:1.1,1) {$3s$};
\node[anchor=north east] at (axis cs:10,0) {core};
\node[anchor=north west] at (axis cs:0,0) {valence};
\end{axis}
\end{tikzpicture}
```


---

## Unit 2: Compound Structure and Properties

### Bond types

- **Ionic**: metal + nonmetal, electron transfer
- **Covalent**: nonmetal + nonmetal, electron sharing
- **Metallic**: metal cations in a sea of delocalized electrons

### Lewis structures checklist

1. Count valence electrons
2. Pick central atom
3. Connect atoms with single bonds
4. Complete octets on outer atoms
5. Place remaining electrons on central atom
6. Make multiple bonds if needed
7. Check formal charges

### Formal charge

$$
\text{FC} = \text{valence} - \text{nonbonding} - \frac{1}{2}(\text{bonding})
$$

### VSEPR / geometry

- 2 electron groups: linear
- 3: trigonal planar
- 4: tetrahedral
- 5: trigonal bipyramidal
- 6: octahedral

Molecular shape depends on lone pairs.


| Electron domains | Electron geometry | Common molecular shape | Example |
| ---: | --- | --- | --- |
| 2 | linear | linear | $$\mathrm{CO_2}$$ |
| 3 | trigonal planar | trigonal planar / bent | $$\mathrm{BF_3}$$ / $$\mathrm{SO_2}$$ |
| 4 | tetrahedral | tetrahedral / trigonal pyramidal / bent | $$\mathrm{CH_4}$$ / $$\mathrm{NH_3}$$ / $$\mathrm{H_2O}$$ |
| 5 | trigonal bipyramidal | seesaw / T-shaped / linear | $$\mathrm{SF_4}$$ |
| 6 | octahedral | square pyramidal / square planar | $$\mathrm{BrF_5}$$ / $$\mathrm{XeF_4}$$ |


### Hybridization

- 2 groups: $$sp$$
- 3 groups: $$sp^2$$
- 4 groups: $$sp^3$$
- 5 groups: $$sp^3d$$
- 6 groups: $$sp^3d^2$$

### Bond order and bond properties

- Higher bond order -> shorter, stronger bond
- Longer bonds are usually weaker

---

## Unit 3: Substances and Mixtures

### Intermolecular forces

Weakest to strongest, in common AP contexts:

1. London dispersion
2. Dipole-dipole
3. Hydrogen bonding
4. Ion-dipole

### "Like dissolves like"

- Polar dissolves polar
- Nonpolar dissolves nonpolar
- Ionic compounds usually dissolve best in polar solvents

### Gas laws

$$
PV = nRT
$$

$$
P_{\text{total}} = \sum P_i
$$

$$
P_i = x_i P_{\text{total}}
$$

### Kinetic theory

- Higher temperature -> higher average kinetic energy
- For ideal gases:

$$
KE_{\text{avg}} = \frac{3}{2}RT
$$

### Graham's law

$$
\frac{\text{rate}_1}{\text{rate}_2} = \sqrt{\frac{M_2}{M_1}}
$$

### Colligative properties

$$
\Delta T_b = iK_bm
$$

$$
\Delta T_f = iK_fm
$$

$$
\Pi = iMRT
$$

---

## Unit 4: Chemical Reactions

### Reaction types

- Synthesis
- Decomposition
- Single replacement
- Double replacement
- Combustion
- Acid-base
- Redox

### Net ionic equations

- Split strong electrolytes into ions
- Keep solids, liquids, gases, and weak electrolytes intact
- Cancel spectator ions

### Solubility rules to memorize

- Always soluble: Group 1, $$\text{NH}_4^+$$, $$\text{NO}_3^-$$, acetate, chlorate, perchlorate
- Usually soluble: halides except with $$\text{Ag}^+$$, $$\text{Pb}^{2+}$$, $$\text{Hg}_2^{2+}$$
- Usually soluble: sulfates except with $$\text{Ba}^{2+}$$, $$\text{Sr}^{2+}$$, $$\text{Pb}^{2+}$$, often $$\text{Ca}^{2+}$$
- Usually insoluble: carbonates, phosphates, chromates, sulfides, hydroxides except with Group 1 and $$\text{NH}_4^+$$


| Usually soluble | Important exceptions |
| --- | --- |
| Group 1 ions and $$\mathrm{NH_4^+}$$ | none commonly tested |
| Nitrates, acetates, perchlorates | none commonly tested |
| Chlorides, bromides, iodides | insoluble with $$\mathrm{Ag^+}$$, $$\mathrm{Pb^{2+}}$$, $$\mathrm{Hg_2^{2+}}$$ |
| Sulfates | insoluble/slightly soluble with $$\mathrm{Ba^{2+}}$$, $$\mathrm{Sr^{2+}}$$, $$\mathrm{Pb^{2+}}$$, $$\mathrm{Ca^{2+}}$$ |
| Usually insoluble | Important exceptions |
| Carbonates, phosphates, sulfides | soluble with Group 1 ions or $$\mathrm{NH_4^+}$$ |
| Hydroxides | soluble with Group 1; $$\mathrm{Ca^{2+}}$$, $$\mathrm{Sr^{2+}}$$, $$\mathrm{Ba^{2+}}$$ are more soluble |


### Oxidation number reminders

- Element alone: 0
- Monatomic ion: charge
- Oxygen: usually -2
- Hydrogen: usually +1 with nonmetals, -1 with metals
- Sum of oxidation numbers = overall charge

---

## Unit 5: Kinetics

### Core ideas

- Rate depends on concentration, temperature, orientation, and activation energy
- Catalyst lowers activation energy but does not change $$\Delta H$$ or $$K$$

### Rate law

$$
\text{rate} = k[A]^m[B]^n
$$

- Orders come from experiment, not from the balanced equation unless the step is elementary

### Integrated rate laws

Zeroth:

$$
[A] = [A]_0 - kt
$$

First:

$$
\ln[A] = \ln[A]_0 - kt
$$

Second:

$$
\frac{1}{[A]} = \frac{1}{[A]_0} + kt
$$

### Half-life

Zeroth:

$$
t_{1/2} = \frac{[A]_0}{2k}
$$

First:

$$
t_{1/2} = \frac{0.693}{k}
$$

Second:

$$
t_{1/2} = \frac{1}{k[A]_0}
$$

### Arrhenius equation

$$
k = Ae^{-E_a/(RT)}
$$

$$
\ln k = -\frac{E_a}{R}\frac{1}{T} + \ln A
$$

---

## Unit 6: Thermochemistry

### Heat and calorimetry

$$
q = mc\Delta T
$$

### First law

$$
\Delta U = q + w
$$

### Pressure-volume work

$$
w = -P_{\text{ext}}\Delta V
$$

### Enthalpy

At constant pressure:

$$
\Delta H = q_p
$$

### Hess's law

- Reverse reaction -> change sign of $$\Delta H$$
- Multiply equation -> multiply $$\Delta H$$
- Add equations -> add $$\Delta H$$

### Formation enthalpies

$$
\Delta H^\circ_{\text{rxn}} = \sum \nu \Delta H_f^\circ(\text{products}) - \sum \nu \Delta H_f^\circ(\text{reactants})
$$

### Bond enthalpy estimate

$$
\Delta H_{\text{rxn}} \approx \sum D(\text{broken}) - \sum D(\text{formed})
$$

---

## Unit 7: Equilibrium

### Core equilibrium idea

At equilibrium:

- forward rate = reverse rate
- concentrations are constant, not necessarily equal

### Equilibrium expression

For

$$
aA + bB \rightleftharpoons cC + dD
$$

$$
K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}
$$

Pure solids and liquids are omitted.

### Reaction quotient

- $$Q < K$$ -> shifts right
- $$Q > K$$ -> shifts left
- $$Q = K$$ -> already at equilibrium

### Gas-phase equilibrium

$$
K_p = K_c(RT)^{\Delta n_{\text{gas}}}
$$

### ICE table logic

Initial, Change, Equilibrium

- use stoichiometric multiples of $$x$$
- approximation may work if $$x$$ is very small compared with initial concentration

### Le Châtelier

- Add reactant -> shift right
- Add product -> shift left
- Increase pressure -> shift toward fewer moles gas
- Change temperature -> changes $$K$$
- Catalyst -> no change in $$K$$

### Solubility product

$$
K_{sp} = [\text{ions}]^{\text{coefficients}}
$$

### Thermodynamic connection

$$
\Delta G^\circ = -RT\ln K
$$

---

## Unit 8: Acid-Base Equilibrium

### Definitions

- Arrhenius: acids increase $$[H^+]$$, bases increase $$[OH^-]$$
- Brønsted-Lowry: acid donates proton, base accepts proton
- Lewis: acid accepts electron pair, base donates electron pair

### Strong acids to memorize

$$
\text{HCl},\ \text{HBr},\ \text{HI},\ \text{HNO}_3,\ \text{HClO}_4,\ \text{HClO}_3,\ \text{H}_2\text{SO}_4 \text{ (first proton)}
$$

### Strong bases to memorize

Group 1 hydroxides and heavier Group 2 hydroxides:

$$
\text{LiOH},\ \text{NaOH},\ \text{KOH},\ \text{Ca(OH)}_2,\ \text{Sr(OH)}_2,\ \text{Ba(OH)}_2
$$

### Weak acid/base equilibrium

$$
K_a = \frac{[H_3O^+][A^-]}{[HA]}
$$

$$
K_b = \frac{[BH^+][OH^-]}{[B]}
$$

$$
K_aK_b = K_w
$$

### pH / pOH

$$
\text{pH} = -\log[H_3O^+]
$$

$$
\text{pOH} = -\log[OH^-]
$$

$$
\text{pH} + \text{pOH} = 14
$$

at $$25^\circ\text{C}$$.

### Buffer equation

$$
\text{pH} = \text{p}K_a + \log\left(\frac{[A^-]}{[HA]}\right)
$$

### Titration checkpoints

- strong acid / strong base equivalence point near pH 7
- weak acid / strong base equivalence point above 7
- weak base / strong acid equivalence point below 7
- half-equivalence point for weak acid/base gives $$\text{pH} = \text{p}K_a$$ or $$\text{pOH} = \text{p}K_b$$


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[axis lines=left, width=9cm, height=5.5cm, xmin=0, xmax=50, ymin=0, ymax=14, xlabel={volume base added}, ylabel={pH}, xtick=\empty, ytick={0,7,14}, grid=both, grid style={gray!15}]
\addplot[blue, very thick, samples=200, domain=0:50] {3 + 8/(1+exp(-0.45*(x-25))) + 0.025*x};
\addplot[dashed] coordinates {(25,0) (25,14)};
\addplot[dashed] coordinates {(0,7) (50,7)};
\node[anchor=south west] at (axis cs:25,8.6) {equivalence point};
\node[anchor=south] at (axis cs:12.5,5.0) {buffer region};
\node[anchor=north] at (axis cs:12.5,4.7) {$pH=pK_a$};
\end{axis}
\end{tikzpicture}
```


---

## Unit 9: Thermodynamics and Electrochemistry

### Entropy and spontaneity

$$
\Delta S_{\text{universe}} = \Delta S_{\text{system}} + \Delta S_{\text{surroundings}}
$$

- spontaneous if $$\Delta S_{\text{universe}} > 0$$
- equilibrium if $$\Delta S_{\text{universe}} = 0$$

### Gibbs free energy

$$
\Delta G = \Delta H - T\Delta S
$$

- spontaneous if $$\Delta G < 0$$
- equilibrium if $$\Delta G = 0$$

### Standard free energy

$$
\Delta G^\circ = -RT\ln K
$$

### Electrochemistry

$$
\Delta G = -nFE_{\text{cell}}
$$

$$
E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}
$$

### Nernst equation

$$
E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{RT}{nF}\ln Q
$$

At $$25^\circ\text{C}$$:

$$
E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0592}{n}\log Q
$$

### Faraday's law

$$
q = It = nF
$$

$$
m = \frac{MIt}{nF}
$$

### Galvanic vs electrolytic

- galvanic: spontaneous, anode negative, cathode positive
- electrolytic: nonspontaneous, anode positive, cathode negative
- oxidation always at anode
- reduction always at cathode


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\node[draw, rounded corners] (g) at (0,2) {$\Delta G=-nFE$};
\node[draw, rounded corners, fill=green!8] (sp) at (-3,0.5) {$E>0$, $\Delta G<0$};
\node[draw, rounded corners, fill=red!8] (non) at (3,0.5) {$E<0$, $\Delta G>0$};
\node[draw, rounded corners] (galv) at (-3,-1) {galvanic};
\node[draw, rounded corners] (elec) at (3,-1) {electrolytic};
\draw[->, thick] (g) -- (sp); \draw[->, thick] (g) -- (non);
\draw[->, thick] (sp) -- (galv); \draw[->, thick] (non) -- (elec);
\node at (0,-2) {spontaneous cells produce voltage; nonspontaneous cells need voltage};
\end{tikzpicture}
```


---

## Most Common AP Chemistry Mistakes

1. Forgetting units or using Celsius instead of Kelvin in gas/equilibrium/thermo work
2. Including solids or liquids in equilibrium expressions
3. Pulling rate-law exponents from the balanced equation without justification
4. Forgetting stoichiometric coefficients in equilibrium, entropy, or formation-energy sums
5. Mixing up anode/cathode with sign in galvanic vs electrolytic cells
6. Forgetting to do stoichiometry first in titration and buffer problems
7. Treating a catalyst as something that changes $$K$$ or $$\Delta G^\circ$$
8. Confusing molecular polarity with bond polarity

---

## Fast Problem-Solving Checklist

1. Write the balanced equation first.
2. Identify what unit/topic the problem belongs to.
3. Decide whether the problem is stoichiometric, equilibrium-based, energetic, or statistical/rate-based.
4. Track units before plugging in numbers.
5. Check whether the answer sign and magnitude make chemical sense.
6. For FRQs, explain with both particle-level logic and equation-level support when possible.
