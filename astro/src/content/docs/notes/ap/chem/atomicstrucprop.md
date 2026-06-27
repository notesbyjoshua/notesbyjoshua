---
title: "Unit 1: Atomic Structure and Properties"
sidebar:
  order: 1
---

---

Unit 1 establishes the vocabulary and models used everywhere else in chemistry: how we count and report measurements, how the **periodic table** organizes the elements, how **electrons** occupy **orbitals**, and how atomic-scale structure shows up in macroscopic trends. It also sets up basic definition and rules that you will use for the rest of chemistry.

---

## Significant figures

**Significant figures** are the digits in a measurement that carry meaning—every digit we are entitled to report given how well we know the quantity. They matter whenever you round a calculated result so it does not pretend to be more precise than the data that produced it. On the AP exam they appear mainly in lab-style questions; in research they are non-negotiable.

- Nonzero digits are always significant.
- **Leading zeros** (as in $$0.0045$$) are not significant; they only locate the decimal point. **Captive zeros** between nonzero digits are significant (e.g. $$1.05$$ has three significant figures).
- **Trailing zeros** require care: if a decimal point is shown, trailing zeros are significant ($$12.0$$ has three); if there is no decimal, trailing zeros do not ocunt towards significant figures.
- **Exact numbers** (such as a counted dozen eggs or a defined conversion within a system) have effectively unlimited significant figures and do not limit your result.
- For addition and subtraction, round the result to the same number of *decimal places* as the term with the fewest. For multiplication and division, round to the same number of *significant figures* as the factor with the fewest.

---

## Matter and its classification

**Matter** is anything that has mass and occupies volume. Chemists classify it first by composition.

- **Elements** are made of one kind of atom
- **Compounds** contain two or more elements combined in definite proportion.
- A **pure substance** has fixed composition, meaning only one type of substance makes it up.
- A **mixture** combines substances without fixed proportion. A **homogeneous mixture** (solution) are uniform on a macroscopic scale, meaning you cannot tell the difference between molecules jsut by looking at it, while a **heterogeneous mixture** does not have this property.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\node[draw, rounded corners, fill=blue!7, minimum width=2.7cm, minimum height=0.8cm] (matter) at (0,3) {Matter};
\node[draw, rounded corners, fill=green!7] (pure) at (-3,1.6) {Pure substance};
\node[draw, rounded corners, fill=orange!8] (mix) at (3,1.6) {Mixture};
\node[draw, rounded corners] (el) at (-4.2,0.2) {Element};
\node[draw, rounded corners] (co) at (-1.8,0.2) {Compound};
\node[draw, rounded corners] (hom) at (1.8,0.2) {Homogeneous};
\node[draw, rounded corners] (het) at (4.2,0.2) {Heterogeneous};
\draw[->, thick] (matter) -- (pure); \draw[->, thick] (matter) -- (mix);
\draw[->, thick] (pure) -- (el); \draw[->, thick] (pure) -- (co);
\draw[->, thick] (mix) -- (hom); \draw[->, thick] (mix) -- (het);
\node[align=center] at (-4.2,-0.8) {one type\\of atom};
\node[align=center] at (-1.8,-0.8) {fixed ratio\\of elements};
\node[align=center] at (1.8,-0.8) {uniform\\throughout};
\node[align=center] at (4.2,-0.8) {nonuniform\\parts};
\end{tikzpicture}
```


---

## Reading the periodic table

The **periodic table** arranges elements by increasing **atomic number** $$Z$$. Horizontal rows are **periods**; vertical columns are **groups** (or families). Groups may be labeled $$1$$–$$18$$ or with Roman numerals and letters in older notation. Several families have traditional names that appear frequency:

- **Alkali metals** (group 1, excluding hydrogen)
- **Alkaline earth metals** (group 2)
- **Transition metals** (groups 3–12)
- **Pnictogens** (group 15)
- **Chalcogens** (group 16)
- **Halogens** (group 17)
- **Noble gases** (group 18)

Below the main block, the **lanthanides** and **actinides** are the **inner transition metals** (often called **rare-earth metals** in informal usage for the lanthanides).

For any entry, the atomic number $$Z$$ is the number of **protons** in the nucleus and defines the element. The **mass number** $$A$$ counts protons plus **neutrons** in a given **isotope**:

$$
A = Z + N
$$

where $$N$$ is the neutron count. Isotopes of the same element share $$Z$$ but differ in $$A$$ (and therefore in $$N$$).

---

## Ions

An **ion** is an atom or group of atoms with a net electric charge from gain or loss of electrons. A **cation** is positive (fewer electrons than protons); an **anion** is negative (more electrons than protons). A good way to remember this is that cats are always positive so CATions are positively charged! **Metals** tend to form cations and **nonmetals** tend to form anions. In addition, many **transition metals** exhibit variable charge in compounds because several oxidation states are comparably stable (mentioned later in more detail) due to the availability of their $$d$$ orbital (mentioned later as well).

### Polyatomic ions

**Polyatomic ions** are charged covalent units that behave as a single piece in **ionic compounds** due to their lower eneergy state compared to their individual atomic states: for example, nitrate ($$\text{NO}_3^-$$), sulfate ($$\text{SO}_4^{2-}$$), and ammonium ($$\text{NH}_4^+$$) are all good exmamples of polyatomic ions. These are the polyatomic ions you need to memorize for AP Chem:


| Polyatomic ion | Formula | Charge |
| --- | --- | ---: |
| Ammonium | $$\mathrm{NH_4^+}$$ | $$+1$$ |
| Acetate | $$\mathrm{C_2H_3O_2^-}$$ | $$-1$$ |
| Hydroxide | $$\mathrm{OH^-}$$ | $$-1$$ |
| Nitrate / nitrite | $$\mathrm{NO_3^-}$$ / $$\mathrm{NO_2^-}$$ | $$-1$$ |
| Chlorate / chlorite / hypochlorite | $$\mathrm{ClO_3^-}$$ / $$\mathrm{ClO_2^-}$$ / $$\mathrm{ClO^-}$$ | $$-1$$ |
| Perchlorate | $$\mathrm{ClO_4^-}$$ | $$-1$$ |
| Carbonate / bicarbonate | $$\mathrm{CO_3^{2-}}$$ / $$\mathrm{HCO_3^-}$$ | $$-2$$ / $$-1$$ |
| Sulfate / sulfite | $$\mathrm{SO_4^{2-}}$$ / $$\mathrm{SO_3^{2-}}$$ | $$-2$$ |
| Phosphate / hydrogen phosphate | $$\mathrm{PO_4^{3-}}$$ / $$\mathrm{HPO_4^{2-}}$$ | $$-3$$ / $$-2$$ |
| Chromate / dichromate | $$\mathrm{CrO_4^{2-}}$$ / $$\mathrm{Cr_2O_7^{2-}}$$ | $$-2$$ |
| Permanganate | $$\mathrm{MnO_4^-}$$ | $$-1$$ |


---

## Avogadro’s number, the mole, and molar mass

- The **mole** is the chemist’s unit of counting: one mole contains **Avogadro’s number** (sometimes denoted as $$N_A$$) of specified entities (atoms, molecules, ions, formula units, etc.):

$$
1 \text{ mol} = 6.022 \times 10^{23} \text{ entities}
$$

If you are ever confused by moles and molar conversions, just replace "moles" with "dozens" and think about it that way.

The **molar mass** of an element is the mass of one mole of its atoms, numerically equal (in $$\text{g/mol}$$) to the **average atomic mass** listed on the periodic table. For a **compound**, add the molar masses of all atoms in the formula to obtain the compound’s molar mass.

Lastly, the **mass percent** of an element in a compound compares the mass of that element in one mole of compound to the molar mass of the whole:

$$
\% \text{ element} = \frac{\text{mass of element in } 1 \text{ mol of compound}}{\text{molar mass of compound}} \times 100\%
$$

---

## Empirical and molecular formulas

The **molecular formula** gives the *actual numbers* of atoms of each element in one molecule of a molecular compound (or one formula unit of an ionic solid, where “molecule” is not literal). The **empirical formula** gives the *smallest whole-number ratio* of atoms in that substance. Ionic compounds are usually reported by their empirical formula anyway (e.g. $$\text{NaCl}$$, $$\text{CaF}_2$$) because the crystal is an extended lattice, not discrete $$\text{NaCl}$$ molecules.

For a molecular substance, the molecular formula is a *whole-number multiple* of the empirical formula:

$$
\text{molecular formula} = (\text{empirical formula})_n, \qquad n = 1,\,2,\,3,\,\ldots
$$

The **empirical formula mass** is the molar mass of the empirical formula as written. If you know the molar mass of the compound (from experiment, such as mass spectrometry, or from the problem), then

$$
n = \frac{M_{\text{compound}}}{M_{\text{empirical}}},
$$

and you round $$n$$ to the nearest integer when the data allows it (subject to measurement uncertainty).

### From mass percent to the empirical formula

When a problem gives **mass percentages** (or masses of elements in a sample), treat the sample as a sample of *$$100\ \text{g}$$* so each element’s mass in grams equals its *percent* numerically.

:::strategy{title="Mass percent to empirical formula"}

1. Convert each element’s mass to moles using its molar mass.

2. Divide *every* mole amount by the *smallest* mole amount among the elements.

3. If ratios are not whole numbers within reasonable rounding, multiply all subscripts by a small integer ($$2$$, $$3$$, $$\ldots$$) to clear fractions (e.g. $$1 : 1 : 1.33$$ $$\rightarrow$$ multiply by $$3$$). If you see a ratio that is very hard to convert to integers, you likely did something wrong.

:::

That yields the empirical formula. **Combustion analysis** problems follow the same logic: measured masses of $$\text{CO}_2$$ and $$\text{H}_2\text{O}$$ produced fix the carbon and hydrogen in the original sample; any oxygen is often obtained by difference from the original sample mass if the compound contains only C, H, and O.

---

## Mass spectrometry

**Mass spectrometry** separates ions by *mass-to-charge ratio* $$\frac{m}{z}$$. A typical spectrum plots *relative abundance* (or detector *intensity*) on the vertical axis against $$\frac{m}{z}$$ on the horizontal axis. For an element, the pattern of peaks reveals isotope masses and their approximate natural abundances; for molecules, *fragmentation* patterns can support structure assignment in advanced work. An example of a mass spectrometer chart is shown below:


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[axis lines=left, width=10cm, height=5.5cm, ymin=0, ymax=110, xmin=18, xmax=32, xlabel={mass-to-charge ratio}, ylabel={relative abundance}, ytick={0,50,100}, xtick={20,22,24,26,28,30}, grid=both, grid style={gray!15}]
\addplot[ybar, bar width=5pt, fill=blue!35, draw=blue!70!black] coordinates {(20,18) (21,6) (22,42) (24,100) (25,12) (26,35) (28,75) (30,20)};
\node[anchor=west] at (axis cs:24.3,96) {base peak};
\node[anchor=west] at (axis cs:28.3,72) {isotope peak};
\end{axis}
\end{tikzpicture}
```


---

## Percent yield, percent error, and efficiency

In laboratory work, **theoretical yield** is the amount of product predicted from stoichiometry assuming complete conversion. **Actual yield** is what you isolate. **Percent yield** measures how much of the theoretical amount you obtained:

$$
\% \text{ yield} = \frac{\text{actual yield}}{\text{theoretical yield}} \times 100\%
$$

**Percent error** compares a measured value to an accepted or theoretical value:

$$
\% \text{ error} = \left| \frac{\text{actual} - \text{theoretical}}{\text{theoretical}} \right| \times 100\%
$$

**Efficiency** in an energy context is the fraction of input energy that appears as useful output:

$$
\text{efficiency} = \frac{\text{useful energy output}}{\text{energy input}} \times 100\%
$$

Do not confuse percent yield (a mass or mole recovery for a reaction) with thermodynamic efficiency (an energy ratio). Use percent error when judging how far a measurement sits from a reference value.

---

## Molarity

**Molarity** ($$M$$) expresses concentration as moles of solute per liter of solution:

$$
M = \frac{\text{moles of solute}}{\text{liters of solution}} = \frac{\text{mol}}{L}
$$

Because volume changes with temperature, molarity is *temperature-dependent*. It depends on the amount of solute per volume of solution, not on the total mass of the solution by itself.

---

## Oxidation numbers

An **oxidation number** (oxidation state) is a formal bookkeeping charge assigned to an atom in a compound or ion, as if electrons in every bond belonged entirely to the more electronegative partner. It tracks how electron density shifts relative to the element in its standard state.

Useful conventions include:

- Any element in its elemental form (e.g. $$\text{O}_2$$, $$\text{Na}$$) has oxidation number $$0$$.
- A monatomic ion matches its charge (e.g. $$\text{Na}^+$$ is $$+1$$).
- Oxygen is usually $$-2$$ except in peroxides such as $$\text{H}_2\text{O}_2$$ ($$-1$$ for O) and in compounds with fluorine.
- Hydrogen is usually $$+1$$ except in metal hydrides (e.g. $$\text{NaH}$$), where it is $$-1$$.
- Fluorine is $$-1$$ in all compounds. Other halogens are $$-1$$ unless bonded to a more electronegative element (such as oxygen).

The rule of thumb is that you always assign the most electronegative atom first in terms of oxidation states.

---

## Electron configuration and quantum numbers

Each electron in an atom is described by four **quantum numbers** that arise from the *wave-mechanical* model.

The **principal quantum number** $$n$$ is a positive integer ($$n = 1, 2, 3, \ldots$$). It sets the shell and is the main contributor to orbital energy for hydrogen-like atoms.

The **azimuthal** (or **angular momentum**) quantum number $$l$$ runs from $$0$$ to $$n - 1$$ and labels subshell shape:

- $$l = 0$$ → s orbital
- $$l = 1$$ → p orbital
- $$l = 2$$ → d orbital
- $$l = 3$$ → f orbital

The **magnetic quantum number** $$m_l$$ takes integer values from $$-l$$ to $$+l$$ and distinguishes *orientations* of a subshell in space (e.g. $$p_x$$ and $$p_y$$)

The **spin quantum number** $$m_s$$ is $$+\frac{1}{2}$$ or $$-\frac{1}{2}$$ for the two **spin** states of a single electron.

The **Pauli exclusion principle** states that no two electrons in the same atom may share the same set of four quantum numbers, so at most two electrons occupy any one atomic orbital, and they must have *opposite spin*.

The **Aufbau principle** directs you to fill orbitals in order of increasing energy. The familiar $$n s$$, $$(n-1) d$$, $$(n-2) f$$ crossing is why the periodic table has its shape. Exceptions (e.g. chromium $$\text{Cr}$$, copper $$\text{Cu}$$, and several heavier transition metals) reflect especially stable $$d^5$$ or $$d^{10}$$ arrangements; those same stability patterns contribute to variable metal oxidation states in compounds.

**Hund’s rule** favors placing electrons singly in degenerate orbitals of a subshell before pairing, with *parallel spins* where possible, to reduce *electron–electron repulsion*.

**Heisenberg’s uncertainty principle** limits how sharply *position* and *momentum* can be known simultaneously for a quantum particle: a conceptual foundation for why we speak in terms of orbitals (probability distributions) rather than classical orbits. It states that:

$$
\Delta x \Delta p \ge \frac{h}{4\pi}
$$

This means that the uncertainty in position and momentum are always above some constant, implying that both cannot be known at a time. This is why we have electron clouds instead of set orbits.

**Abbreviated configurations** use the previous noble gas core in brackets, e.g.

$$
\text{Cs}:\; [\text{Xe}]\, 6s^1
$$

Two species are **isoelectronic** if they have the same electron configuration (e.g. $$\text{Br}^-$$ and $$\text{Se}^{2-}$$). Among isoelectronic ions, **ionic radius** decreases as **nuclear charge** increases because the same electron count is pulled closer by more protons (e.g. $$\text{Na}^+$$ is smaller than $$\text{F}^-$$).

---

## Energy, light, and quantization

For electromagnetic radiation (for AP Chemistry this is just light), **wavelength** $$\lambda$$ (distance between waves) and **frequency** $$\nu$$ (or $$f$$ (how many waves appear in a second) are related by

$$
c = \nu \lambda,
$$

where $$c \approx 3.00 \times 10^8 \text{ m/s}$$ is the *speed of light* in vacuum. Frequency is measured in hertz ($$\text{Hz}$$, or $$\text{s}^{-1}$$), and wavelength is usually given in $$nm$$, which requires conversions to $$m$$ to work.

Physicist Max Planck related photon energy to frequency through **Planck's constant**:

$$
E = h\nu = \frac{hc}{\lambda},
$$

with Planck’s constant $$h \approx 6.626 \times 10^{-34} \text{ J}\cdot\text{s}$$. Essentially, Max Planck discovered that energy came in packets called **quanta**. which explains **atomic spectra** and **line colors** in **flame tests** and discharge tubes: each transition corresponds to a specific $$\Delta E$$ and therefore a characteristic photon energy. The release of light is caused by an electron moving to a lower energy state, which the absorbance of light is  caused by an electron moving to a higher energy state.

Physicist Louis de Broglie associated a wavelength with any particle of momentum $$p$$:

$$
\lambda = \frac{h}{p} = \frac{h}{mv}
$$

for nonrelativistic speeds, demonstrating that any object has an intristic wavelength. However, at only quantum levels is this wavelength significant.

---

## Photoelectric effect and photoelectron spectroscopy

In the **photoelectric effect**, photons eject electrons from a metal surface only when the photon energy exceeds a threshold set by the material’s **work function** $$\Phi$$. Increasing frequency increases the maximum kinetic energy of emitted electrons according to

$$
K_{\max} = h\nu - \Phi,
$$

but for all purposes, memorizing this equation is not necessary for the AP Chemistry exam. It's just important to know that increasing *intensity* at fixed frequency increases the number of ejected electrons, not their maximum *kinetic energy*.

**Photoelectron spectroscopy** (**PES**) measures how much energy must be supplied to remove electrons from subshells in atoms or molecules. Peaks appear at **binding energies** characteristic of each orbital type; relative peak areas (after accounting for ionization cross sections) reflect electron counts in those subshells. An example problem is shown below, feel free to try it out!


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


An important thing to note is that a PES graph shifted to the right indicates less nuclear charge, since it takes less energy to take away those electrons.

---

## Electromagnetic spectrum

The **electromagnetic spectrum** orders all electromagnetic radiation by **photon energy** (equivalently frequency or wavelength). **Visible light** spans roughly

$$
380\text{ nm} \text{ to } 760\text{ nm},
$$

a narrow window between **ultraviolet** and **infrared**. Moving toward shorter wavelength corresponds to higher photon energy (**gamma rays** and **X-rays** at the extreme) and longer wavelength to lower energy (**microwave**, **radio**).


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[->, thick] (0,0) -- (10,0) node[right] {increasing frequency and energy};
\draw[<- , thick] (0,-0.45) -- (10,-0.45) node[right] {increasing wavelength};
\foreach \x/\lab/\col in {0.7/radio/red!20,2.0/microwave/orange!25,3.3/infrared/yellow!30,4.6/visible/green!25,5.9/UV/cyan!25,7.2/X-ray/blue!20,8.6/gamma/purple!20}{
  \fill[\col] (\x-0.55,0.25) rectangle (\x+0.55,1.1);
  \draw (\x-0.55,0.25) rectangle (\x+0.55,1.1);
  \node[rotate=35] at (\x,0.68) {\lab};
}
\node at (4.6,1.45) {visible light is a small band};
\end{tikzpicture}
```


---

## Orbitals, nodes, shielding, and penetration

An **atomic orbital** is a three-dimensional region where the probability of finding an electron exceeds some threshold. The total number of **nodes** for an orbital is $$n - 1$$, with $$l$$ **angular nodes** (planar/conical surfaces), and the rest being **spherical nodes** (spherical surfaces).

For a given $$n$$ in many-electron atoms, subshell energies usually follow

$$
E_{ns} < E_{np} < E_{nd} < E_{nf},
$$

because s orbitals *penetrate* closer to the nucleus and experience less **shielding** from inner electrons than p, d, or f orbitals at comparable $$n$$.

**Shielding** (screening) means inner and same-shell electrons reduce the **full nuclear charge** $$Z$$ felt by an electron of interest. More effective shielding lowers **effective nuclear charge** and stabilizes outer electrons less. Penetration explains why an $$ns$$ electron can be more tightly bound than an $$(n-1)d$$ electron despite the larger $$n$$ in the label, leading to the *aufbau* order you use when writing configurations.

---

## Effective nuclear charge

**Effective nuclear charge** $$Z_{\text{eff}}$$ is the net positive charge experienced by an electron in a many-electron atom after shielding. A simple textbook form is

$$
Z_{\text{eff}} = Z - S,
$$

where $$S$$ is a **shielding constant** summarizing electron–electron repulsion. **Slater’s rules** and more advanced models give numerical estimates; qualitatively, $$S$$ grows as you add *inner shells*, so going *down a group* increases shielding even though $$Z$$ increases. On the AP exam, this equation will not be tested in full but it is good to know that shielding decreases effective nuclear charge.

Penetration order among subshell types at comparable $$n$$ is often summarized as

$$
s > p > d > f,
$$

meaning s electrons “see” more of the nucleus and are stabilized relative to p, d, and f in the same shell.

---

## Periodic trends

**Ionization energy** is the energy required to remove an electron from a gaseous atom or ion (first, second, … ionization energies for successive removals). **Electron affinity** is the energy change when an electron is added; *more exothermic* addition corresponds to a *more favorable* affinity in the usual sign convention.

**Atomic radius** gauges the size of the **electron cloud** (often defined by metallic or covalent radii in different contexts). **Metallic character** is the tendency to lose electrons and behave as a metal (cations); **nonmetallic character** is the tendency to gain or share electrons with nonmetals (anions).

Broad patterns: **atomic radius** increases *down a group* (new shells, more shielding) and decreases *across a period* (rising $$Z_{\text{eff}}$$). **Ionization energy** and **electron affinity** (for representative elements) generally show opposite *horizontal* trends to radius. **Metallic character** decreases across a period and increases down a group. Exceptions, such as the **ionization energy** dip at boron or the **electron affinity** anomaly for nitrogen, appear when subshell structure or pairing changes the cost of removing or adding an electron.


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


---

## Electrostatics and Coulomb’s law

**Electrostatics** describes forces and *potential energies* between charges at rest. The **Coulomb force** between two point charges is

$$
F = k \frac{Q_1 Q_2}{r^2},
$$

where $$r$$ is their separation, $$Q_1$$ and $$Q_2$$ carry signs, and $$k \approx 8.99 \times 10^9 \,\text{N}\cdot\text{m}^2/\text{C}^2$$. Like charges repel; opposite charges attract.

The **electric potential energy** of the pair is

$$
U = k \frac{Q_1 Q_2}{r}.
$$

These expressions reappear when you interpret **lattice energy**, **bond** formation, and **ionic** attraction in [Unit 2](/notes/ap/chem/compounds/).

---

## Practice

### MCQ

::::problem
1. A neutral atom has the electron configuration $$1s^2 2s^2 2p^6 3s^2 3p^4$$. Which statement is correct?

   (A) The atom is in group 4 and forms $$4+$$ ions most often.<br>
   (B) The atom is in group 16 and has six valence electrons.<br>
   (C) The atom is a noble gas because the $$3p$$ subshell is occupied.<br>
   (D) The atom has four valence electrons because the last exponent is $$4$$.

:::solution
The highest principal energy level is $$n=3$$, and the atom has

$$
3s^2 3p^4
$$

as its valence-shell configuration. That is $$6$$ valence electrons, which places the atom in group $$16$$.

$$
\boxed{\text{B}}
$$
:::
::::

::::problem
2. Which set of particles is arranged in order of increasing radius?

   (A) $$\text{Cl}^- < \text{S}^{2-} < \text{K}^+$$<br>
   (B) $$\text{K}^+ < \text{Cl}^- < \text{S}^{2-}$$<br>
   (C) $$\text{S}^{2-} < \text{Cl}^- < \text{K}^+$$<br>
   (D) $$\text{Cl}^- < \text{K}^+ < \text{S}^{2-}$$

:::solution
The ions $$\text{K}^+$$, $$\text{Cl}^-$$, and $$\text{S}^{2-}$$ are isoelectronic, each with $$18$$ electrons. In an isoelectronic series, radius decreases as nuclear charge increases. Potassium has the most protons, so $$\text{K}^+$$ is smallest; sulfur has the fewest, so $$\text{S}^{2-}$$ is largest.

$$
\boxed{\text{K}^+ < \text{Cl}^- < \text{S}^{2-}}
$$

So the answer is

$$
\boxed{\text{B}}.
$$
:::
::::

::::problem
3. Which photon has the greatest energy?

   (A) A photon with wavelength $$700\ \text{nm}$$<br>
   (B) A photon with wavelength $$500\ \text{nm}$$<br>
   (C) A photon with wavelength $$300\ \text{nm}$$<br>
   (D) A photon with wavelength $$900\ \text{nm}$$

:::solution
Photon energy is

$$
E=\frac{hc}{\lambda}.
$$

Energy is inversely proportional to wavelength, so the shortest wavelength has the greatest energy.

$$
\boxed{\text{C}}
$$
:::
::::

::::problem
4. Which statement best explains why first ionization energy generally increases from left to right across a period?

   (A) Atomic radius increases, so electrons are easier to remove.<br>
   (B) Effective nuclear charge increases, so valence electrons are held more strongly.<br>
   (C) Shielding increases sharply, so valence electrons are held more weakly.<br>
   (D) The number of occupied principal energy levels increases.

:::solution
Across a period, protons are added to the nucleus while electrons are added to the same principal energy level. Shielding does not increase enough to cancel the increased nuclear attraction, so $$Z_{\text{eff}}$$ increases.

$$
\boxed{\text{B}}
$$
:::
::::

::::problem
5. Which element has the electron configuration $$[\text{Ne}]3s^2 3p^1$$?

   (A) Mg<br>
   (B) Al<br>
   (C) Si<br>
   (D) P

:::solution
After the neon core, $$3s^2 3p^1$$ gives three valence electrons in the third period. That is aluminum.

$$
\boxed{\text{B}}
$$
:::
::::

::::problem
6. Which set of quantum numbers is not allowed for an electron in an atom?

   (A) $$n=2,\ l=1,\ m_l=0,\ m_s=+\frac12$$<br>
   (B) $$n=3,\ l=2,\ m_l=-2,\ m_s=-\frac12$$<br>
   (C) $$n=3,\ l=3,\ m_l=0,\ m_s=+\frac12$$<br>
   (D) $$n=4,\ l=0,\ m_l=0,\ m_s=-\frac12$$

:::solution
For a given $$n$$, the value of $$l$$ must be an integer from $$0$$ to $$n-1$$. If $$n=3$$, then $$l=3$$ is not allowed.

$$
\boxed{\text{C}}
$$
:::
::::

### FRQ

::::frq{id=chem-atomicstrucprop-1}
7. A sample of chlorine contains $$75.78\%$$ $$^{35}\text{Cl}$$ atoms and $$24.22\%$$ $$^{37}\text{Cl}$$ atoms.

   $$(A)$$ Calculate the average atomic mass of chlorine.

   $$(B)$$ Explain why the average atomic mass is closer to $$35$$ than to $$37$$.

   $$(C)$$ A PES spectrum for chlorine shows peaks from core electrons and valence electrons. Explain why core-electron peaks appear at higher binding energy than valence-electron peaks.

:::solution
$$(A)$$ Use a weighted average:

$$
(0.7578)(35)+(0.2422)(37)=35.4844.
$$

The percentages must be written as decimals because each isotope contributes only its fractional abundance to the average.

The average atomic mass is

$$
\boxed{35.48\ \text{amu}}.
$$

$$(B)$$ The average is closer to $$35$$ because the $$^{35}\text{Cl}$$ isotope is much more abundant than $$^{37}\text{Cl}$$. In a weighted average, the more abundant isotope pulls the average closer to its mass. Since about three-fourths of the atoms are $$^{35}\text{Cl}$$, the average should sit much nearer $$35$$ than $$37$$, which matches the calculated value.

$$(C)$$ Core electrons are closer to the nucleus and experience a larger effective nuclear attraction than valence electrons. They are also less shielded by other electrons. Because the attraction between the nucleus and a core electron is stronger, more energy is required to remove a core electron from the atom. Therefore, core-electron peaks appear at higher binding energy on a PES spectrum than valence-electron peaks.
:::
::::

::::frq{id=chem-atomicstrucprop-2}
8. Sterling silver contains silver and copper. In a released AP Chemistry question, students compared atomic radii using Coulomb's law. (Adapted from College Board, [2024 AP Chemistry FRQ 3](https://apcentral.collegeboard.org/media/pdf/ap24-frq-chemistry.pdf).)

   $$(A)$$ Identify which atom has the larger atomic radius: $$\text{Ag}$$ or $$\text{Cu}$$.

   $$(B)$$ Use shell structure and Coulomb's law to justify your answer.

   $$(C)$$ Explain why comparing only nuclear charge is not enough to predict the radius in this case.

:::solution
$$(A)$$ $$\text{Ag}$$ has the larger atomic radius.

$$(B)$$ Silver's valence electrons occupy a higher principal energy level than copper's valence electrons. Copper is in period 4, while silver is in period 5, so the outer electrons in silver are farther from the nucleus. By Coulomb's law, attraction decreases as distance increases:

$$
F\propto \frac{q_1q_2}{r^2}.
$$

Silver also has more inner electrons, which increases shielding. The greater distance and shielding make the attraction between the nucleus and valence electrons weaker, so the atomic radius is larger.

$$(C)$$ Silver has more protons than copper, which by itself would increase attraction. But the valence electrons in silver are also farther from the nucleus and more shielded. Radius depends on the balance of nuclear charge, shielding, and distance, not nuclear charge alone. On the AP exam, a complete explanation should explicitly compare both the attractive force from the nucleus and the distance/shielding effect.
:::
::::
