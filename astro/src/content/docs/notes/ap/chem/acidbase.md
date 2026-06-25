---
title: "Unit 8: Acid-Base Equilibrium"
sidebar:
  order: 8
---

This unit applies the equilibrium ideas from [Unit 7](/notes/ap/chem/equilibrium/) to proton transfer in water and related solvents. You will classify acids and bases, use $$K_a$$, $$K_b$$, and $$K_w$$, compute pH for strong and weak species, interpret salt solutions, design and analyze buffers, and read titration curves. Nomenclature for common acids appears in [Unit 2](/notes/ap/chem/compounds/); reaction writing and neutralization stoichiometry build on [Unit 4](/notes/ap/chem/chemrxns/).

---

## Definitions of acids and bases

### Arrhenius Theory

An **Arrhenius acid** increases the concentration of $$\text{H}^+$$ (really $$\text{H}_3\text{O}^+$$ in water) in aqueous solution; an **Arrhenius base** increases $$[\text{OH}^-]$$. The model is useful for water-based chemistry but does not describe ammonia as a base in water without extra bookkeeping, and it does not address nonaqueous systems.

### Brønsted–Lowry Theory

A **Brønsted–Lowry acid** is a proton donor; a **Brønsted–Lowry base** is a proton acceptor. When an acid $$\text{HA}$$ donates a proton to water,

$$
\text{HA}(aq) + \text{H}_2\text{O}(l) \rightleftharpoons \text{H}_3\text{O}^+(aq) + \text{A}^-(aq),
$$

the species $$\text{A}^-$$ is the **conjugate base** of $$\text{HA}$$, and $$\text{H}_3\text{O}^+$$ is the **conjugate acid** of $$\text{H}_2\text{O}$$. Every Brønsted acid has a conjugate base, and every base has a conjugate acid, differing by one $$\text{H}^+$$ in the formula and one charge unit. For AP purposes, we will generally use this theory.

### Lewis Theory

A **Lewis acid** accepts an electron pair; a **Lewis base** donates an electron pair. This picture includes reactions without proton transfer (e.g. $$\text{BF}_3$$ with $$\text{NH}_3$$) and matches how metal ions bind ligands in [Unit 7](/notes/ap/chem/equilibrium/) complex-ion formation. This is usually not covered on the AP exam.

---

## Nomenclature (summary)

**Binary acids** (hydrogen + one other nonmetal): the anion name ending *-ide* becomes *hydro-…-ic acid* (e.g. $$\text{HCl}$$, hydrochloric acid). **Oxyacids** use the oxyanion stem: *-ate* → *-ic acid* ($$\text{NO}_3^-$$ → nitric acid), *-ite* → *-ous acid* ($$\text{NO}_2^-$$ → nitrous acid); prefixes such as *hypo-* and *per-* carry over.

Ionic hydroxides are named as cation + hydroxide. Molecular bases include ammonia ($$\text{NH}_3$$), amines (e.g. $$\text{CH}_3\text{NH}_2$$), and related nitrogen compounds that accept protons in water.

---

## Strength of acids and structural trends

Strong acids and strong bases are treated as complete ionization or dissociation in dilute aqueous solution for stoichiometry and pH estimates. Weak species reach equilibrium between the unionized form and ions.

For binary acids $$\text{HX}$$, bond polarity and bond strength both matter: across a period, polarity toward $$\text{X}$$ can strengthen the acid; down a group, longer/weaker $$\text{H–X}$$ often dominates and acidity increases ($$\text{HF}$$ is a weak acid in water; $$\text{HCl}$$, $$\text{HBr}$$, $$\text{HI}$$ are strong). For oxoacids with the same central atom, more electronegative atoms attached to that center or a higher oxidation state generally strengthens the acid. For carboxylic acids, electron-withdrawing groups stabilize the conjugate base and increase $$K_a$$.

Acid-base reactions favor formation of the **weaker acid** and **weaker base**. A quick way to predict direction is to compare acid strengths: the side with the larger $$K_a$$ acid tends to react toward the side with the smaller $$K_a$$ acid. In $$\text{p}K_a$$ language, reactions tend to go from lower $$\text{p}K_a$$ acid to higher $$\text{p}K_a$$ acid.

---

## Strong acids and strong bases

Common strong acids (memorize for AP): $$\text{HCl}$$, $$\text{HBr}$$, $$\text{HI}$$ (hydrohalic acids), $$\text{HNO}_3$$, $$\text{HClO}_4$$, $$\text{HClO}_3$$, and $$\text{H}_2\text{SO}_4$$ (oxoacids)for the first proton only (the second proton is weak in the dilute-solution sense: $$\text{HSO}_4^-$$ is a weak acid). A notable exception to hydrohalic trend is that $$\text{HF}$$ is weak.

Strong bases are the group 1 hydroxides ($$\text{LiOH}$$, $$\text{NaOH}$$, $$\text{KOH}$$, …) and the heavier group 2 hydroxides commonly used in lab ($$\text{Ca(OH)}_2$$, $$\text{Sr(OH)}_2$$, $$\text{Ba(OH)}_2$$). $$\text{Mg(OH)}_2$$ is only slightly soluble but what dissolves is essentially fully dissociated.

For a strong acid at moderate concentration, $$[\text{H}_3\text{O}^+] \approx$$ the analytical concentration of the acid (if one proton per formula unit). For a strong diprotic acid such as $$\text{H}_2\text{SO}_4$$, treat the first step as complete and the second with $$K_{a2}$$ if the problem requires it.

---

## Weak acids: $$K_a$$ and ICE tables

For a weak monoprotic acid $$\text{HA}$$,

$$
K_a = \frac{[\text{H}_3\text{O}^+][\text{A}^-]}{[\text{HA}]},
$$

with the usual equilibrium concentrations. The same logic as [Unit 7](/notes/ap/chem/equilibrium/) **ICE** tables applies: define $$x$$ as the amount of $$\text{HA}$$ that ionizes per liter, then solve $$K_a = x^2/(C - x)$$ (or the quadratic if $$x$$ is not negligible). When $$C \gg K_a$$ and $$x \ll C$$, the approximation $$K_a \approx x^2/C$$ is common; check with a percent-ionization or “5%” rule if your course uses it.

$$
\text{p}K_a = -\log K_a
$$

Smaller $$\text{p}K_a$$ means a stronger acid (larger $$K_a$$).

---

## Weak bases: $$K_b$$

For a weak base $$\text{B}$$ (e.g. $$\text{NH}_3$$),

$$
\text{B}(aq) + \text{H}_2\text{O}(l) \rightleftharpoons \text{BH}^+(aq) + \text{OH}^-(aq),
$$

$$
K_b = \frac{[\text{BH}^+][\text{OH}^-]}{[\text{B}]}, \qquad \text{p}K_b = -\log K_b.
$$

ICE setup parallels weak acids, but you solve for $$[\text{OH}^-]$$ and then find pH from $$K_w$$ and pOH.

---

## Conjugate $$K_a$$ and $$K_b$$; $$K_w$$

For a conjugate pair $$\text{HA}/\text{A}^-$$ in water at a given temperature,

$$
K_a \times K_b = K_w,
$$

where $$K_b$$ refers to $$\text{A}^-$$ acting as a base toward water. Similarly $$\text{p}K_a + \text{p}K_b = \text{p}K_w$$ (at $$25\,^\circ\text{C}$$, $$\text{p}K_w = 14.00$$ when $$K_w = 1.0 \times 10^{-14}$$).

**Autoionization** of water:

$$
2\,\text{H}_2\text{O}(l) \rightleftharpoons \text{H}_3\text{O}^+(aq) + \text{OH}^-(aq), \qquad K_w = [\text{H}_3\text{O}^+][\text{OH}^-].
$$

At $$25\,^\circ\text{C}$$, $$K_w = 1.0 \times 10^{-14}$$; $$K_w$$ depends on temperature, so $$\text{pH} + \text{pOH} = 14$$ is not universal outside standard conditions unless $$K_w$$ is updated.

---

## pH and pOH

$$
\text{pH} = -\log[\text{H}_3\text{O}^+], \qquad \text{pOH} = -\log[\text{OH}^-], \qquad \text{pH} + \text{pOH} = \text{p}K_w.
$$

Neutral water at $$25\,^\circ\text{C}$$ has $$\text{pH} = 7.00$$ because $$[\text{H}_3\text{O}^+] = [\text{OH}^-]$$. $$\text{pH} < 7$$ is acidic and $$\text{pH} > 7$$ is basic at that temperature; at other temperatures, neutral pH shifts slightly because $$K_w$$ changes.

Because pH is logarithmic, a change of $$1.00$$ pH unit means a tenfold change in $$[\text{H}_3\text{O}^+]$$. A solution with pH $$3$$ has $$100$$ times the hydronium concentration of a solution with pH $$5$$.

Use inverse logarithms to move back from pH or pOH to concentration:

$$
[\text{H}_3\text{O}^+] = 10^{-\text{pH}}, \qquad [\text{OH}^-] = 10^{-\text{pOH}}.
$$

### Choosing a pH calculation method

1. **Strong acid or strong base only**: use stoichiometric dissociation first, then pH/pOH.
2. **Weak acid or weak base only**: write $$K_a$$ or $$K_b$$ and use an ICE table.
3. **Mixture with strong acid/base reaction**: do limiting-reactant stoichiometry first; then decide what remains.
4. **Weak acid + conjugate base** or **weak base + conjugate acid**: use buffer logic.
5. **At a titration equivalence point**: identify the salt left behind and analyze its hydrolysis.

---

## Percent ionization

**Percent ionization** (or **percent dissociation** for a weak acid) is

$$
\%\ \text{ionization} = \frac{[\text{H}_3\text{O}^+]_{\text{eq}}}{[\text{HA}]_{\text{initial}}} \times 100\%,
$$

using the initial analytical concentration of $$\text{HA}$$ in the denominator. For a weak base, an analogous expression uses $$[\text{OH}^-]_{\text{eq}}/[\text{B}]_{\text{initial}}$$. Adding common-ion $$\text{A}^-$$ or $$\text{BH}^+$$ suppresses ionization (**Le Châtelier’s principle**), lowering percent ionization.

---

## Polyprotic acids

A **polyprotic acid** donates more than one proton. Successive $$K_a$$ values usually satisfy $$K_{a1} > K_{a2} > K_{a3}$$ because removing a positive proton from an increasingly negative anion is harder. Many calculations use only $$K_{a1}$$ if later steps are negligible contributors to $$[\text{H}_3\text{O}^+]$$; near the second equivalence point in a titration, the second dissociation matters.

---

## Oxides and acid–base character

Nonmetal oxides tend to be **acidic anhydrides** (react with water to give acids). Metal oxides, especially ionic ones, tend to be **basic anhydrides** (give hydroxide or raise pH in water). **Amphoteric** oxides/hydroxides (e.g. $$\text{Al}_2\text{O}_3$$, $$\text{Al(OH)}_3$$) react with both strong acid and strong base.

---

## Amphoteric species

An **amphoteric** substance can act as acid or base. Water is the usual example: it donates a proton to $$\text{NH}_3$$ and accepts one from $$\text{HCl}$$. Polyprotic anions such as $$\text{HCO}_3^-$$ and $$\text{HSO}_4^-$$ can donate or accept a proton depending on what they meet.

---

## Acid–base properties of salts

Salts dissociate into ions that may **hydrolyze** (react with water). A salt of strong acid + strong base (e.g. $$\text{NaCl}$$) gives neutral pH (neglecting tiny temperature effects). Weak acid + strong base (e.g. $$\text{CH}_3\text{COONa}$$) gives a basic solution because $$\text{A}^-$$ is a base. Strong acid + weak base (e.g. $$\text{NH}_4\text{Cl}$$) gives an acidic solution because $$\text{NH}_4^+$$ is an acid. Weak + weak salts require comparing $$K_a$$ of the cation acid and $$K_b$$ of the anion base.

Useful salt classification:

| Salt source | pH prediction | Reason |
| --- | --- | --- |
| Strong acid + strong base | Neutral | Neither ion hydrolyzes significantly |
| Weak acid + strong base | Basic | Conjugate base reacts with water to make $$\text{OH}^-$$ |
| Strong acid + weak base | Acidic | Conjugate acid reacts with water to make $$\text{H}_3\text{O}^+$$ |
| Weak acid + weak base | Compare $$K_a$$ and $$K_b$$ | Larger constant dominates |

For an anion from a weak acid,

$$
\text{A}^-(aq) + \text{H}_2\text{O}(l) \rightleftharpoons \text{HA}(aq) + \text{OH}^-(aq).
$$

For a cation from a weak base,

$$
\text{BH}^+(aq) + \text{H}_2\text{O}(l) \rightleftharpoons \text{B}(aq) + \text{H}_3\text{O}^+(aq).
$$

---

## Buffers

A **buffer** resists pH change when modest amounts of strong acid or strong base are added. It contains a weak acid and its conjugate base in comparable amounts (or a weak base + conjugate acid). The **Henderson–Hasselbalch equation** (same assumptions as the small-change approximation from equilibrium) is

$$
\text{pH} = \text{p}K_a + \log\left(\frac{[\text{A}^-]}{[\text{HA}]}\right),
$$

with concentrations evaluated after any same-volume mixing (or use moles in the ratio if volume is common to both). The equation is most reliable when both species are present and neither concentration is extremely small.

**Buffer capacity** increases with total concentration of buffer components. When $$[\text{HA}] = [\text{A}^-]$$, $$\text{pH} = \text{p}K_a$$ and the system can absorb equal challenge from added acid or base in a symmetric sense (maximum buffering range is often quoted near $$\text{p}K_a \pm 1$$).

### Buffer stoichiometry before equilibrium

When a strong acid or strong base is added to a buffer, do the neutralization reaction **before** using Henderson-Hasselbalch.

Added strong acid consumes conjugate base:

$$
\text{A}^- + \text{H}_3\text{O}^+ \longrightarrow \text{HA} + \text{H}_2\text{O}.
$$

Added strong base consumes weak acid:

$$
\text{HA} + \text{OH}^- \longrightarrow \text{A}^- + \text{H}_2\text{O}.
$$

After the stoichiometry step, use the new moles of $$\text{HA}$$ and $$\text{A}^-$$ in the Henderson-Hasselbalch ratio. If either buffer component is used up, the solution is no longer a buffer and the excess strong acid/base controls pH. Note that all pH-pKa pairs can be substituted for pOH-pKb pairs.

---

## Titrations

In a **titration**, a solution of known concentration (**titrant**) is added from a buret to the **analyte** until reaction is complete. For acid–base work, the **equivalence point** is the stoichiometric point: moles of $$\text{H}^+$$ supplied equal moles of $$\text{OH}^-$$ accepted (account for diprotic acids and stoichiometry).

Titration curve shape:

- Strong acid / strong base: equivalence near $$\text{pH} = 7$$ at $$25\,^\circ\text{C}$$, steep vertical jump.
- Weak acid / strong base: equivalence $$\text{pH} > 7$$ (conjugate base hydrolysis).
- Weak base / strong acid: equivalence $$\text{pH} < 7$$ (conjugate acid).

At the **half-equivalence point** of a weak acid titrated with strong base, $$[\text{HA}] \approx [\text{A}^-]$$ and $$\text{pH} \approx \text{p}K_a$$ (buffer maximum in that sense). Polyprotic acids show multiple equivalence steps and multiple near-plateau regions corresponding to each $$\text{p}K_a$$.

### Titration calculation stages

For a weak acid $$\text{HA}$$ titrated with strong base:

| Region | What controls pH? | Usual method |
| --- | --- | --- |
| Before base is added | Weak acid equilibrium | $$K_a$$ ICE table |
| Before equivalence | Buffer mixture of $$\text{HA}$$ and $$\text{A}^-$$ | Stoichiometry, then Henderson-Hasselbalch |
| Half-equivalence | $$[\text{HA}] = [\text{A}^-]$$ | $$\text{pH} = \text{p}K_a$$ |
| Equivalence | Conjugate base $$\text{A}^-$$ | $$K_b = K_w/K_a$$ ICE table |
| After equivalence | Excess strong base | Stoichiometry for leftover $$\text{OH}^-$$ |

For a weak base titrated with strong acid, swap the acid/base roles: the buffer contains $$\text{B}$$ and $$\text{BH}^+$$, the half-equivalence point gives $$\text{pOH} = \text{p}K_b$$ or $$\text{pH} = \text{p}K_a$$ for $$\text{BH}^+$$, and the equivalence point is acidic.

<img class="note-img note-img--w480" src="/assets/APs/AP%20Chem/acidbase/titrationcurve.gif" alt="Titration curves" loading="lazy" decoding="async" />

If an acid can dissociate more than once, it's titration curve follows a polyprotic titration curve:

<img class="note-img note-img--w480" src="/assets/APs/AP%20Chem/acidbase/polyprotictitration.jpg" alt="Polyprotic titration curve placeholder" loading="lazy" decoding="async" />

### pH Indicators

**Acid–base indicators** are weak acids or bases whose conjugate forms have different colors. The **endpoint** is where the color change is observed; it should lie near the **equivalence point** of a titration.

<img class="note-img note-img--w480" src="/assets/APs/AP%20Chem/acidbase/phindicator.png" alt="pH Indicators" loading="lazy" decoding="async" />

Choose an indicator whose transition range lies within the steep vertical region of the titration curve. A strong acid-strong base titration has a steep jump around pH $$7$$, so many indicators can work. A weak acid-strong base titration has an equivalence point above $$7$$, so phenolphthalein is often better than methyl orange. A weak base-strong acid titration has an equivalence point below $$7$$, so an acidic-range indicator is usually better.

---

## Common ion effect

The **common ion effect** is the suppression of ionization of a weak electrolyte when a solution already contains one of its ions (from a salt). It is the same Le Châtelier’s principle logic as in [Unit 7](/notes/ap/chem/equilibrium/): added $$\text{A}^-$$ shifts $$\text{HA}$$ ionization left, lowering $$[\text{H}_3\text{O}^+]$$.

---

## Working checklist

1. Identify strong vs weak; write the correct net ionic chemistry.
2. Use $$K_w$$, $$K_a$$, and $$K_b$$ at a consistent temperature; link conjugates with $$K_a K_b = K_w$$.
3. Use **ICE** tables for weak acids/bases; watch dilution and the **common ion effect**.
4. Buffers: **Henderson–Hasselbalch equation** or full equilibrium when assumptions fail.
5. Titrations: stoichiometry first, then equilibrium at the **equivalence point** or **half-equivalence point** for $$\text{p}K_a$$.

---

## Reference: common strong acids and bases

| Strong acids (typical list) | Strong bases (typical list) |
|----------------------------|-----------------------------|
| $$\text{HCl}$$, $$\text{HBr}$$, $$\text{HI}$$ | $$\text{LiOH}$$, $$\text{NaOH}$$, $$\text{KOH}$$, … |
| $$\text{HNO}_3$$, $$\text{HClO}_4$$, $$\text{HClO}_3$$ | $$\text{Ca(OH)}_2$$, $$\text{Sr(OH)}_2$$, $$\text{Ba(OH)}_2$$ |
| $$\text{H}_2\text{SO}_4$$ (first $$\text{H}^+$$ only) | |

$$\text{HF}$$ is weak; $$\text{HSO}_4^-$$ is a weak acid.

---

## Practice

### MCQ

::::problem
1. What is the $$\text{pH}$$ of a $$1.0\times10^{-3}\ M$$ solution of $$\text{HCl}$$ at $$25^\circ\text{C}$$?

   (A) $$1.00$$<br>
   (B) $$3.00$$<br>
   (C) $$7.00$$<br>
   (D) $$11.00$$

:::solution
$$\text{HCl}$$ is a strong acid, so

$$
[\text{H}_3\text{O}^+]=1.0\times10^{-3}\ M.
$$

Thus

$$
\text{pH}=-\log(1.0\times10^{-3})=3.00.
$$

$$
\boxed{\text{B}}
$$
:::
::::

::::problem
2. A buffer contains equal concentrations of $$\text{HF}$$ and $$\text{F}^-$$. If $$K_a$$ for $$\text{HF}$$ is $$6.8\times10^{-4}$$, what is the $$\text{pH}$$ of the buffer?

   (A) $$1.68$$<br>
   (B) $$3.17$$<br>
   (C) $$7.00$$<br>
   (D) $$10.83$$

:::solution
When $$[\text{HF}]=[\text{F}^-]$$, the Henderson-Hasselbalch equation gives

$$
\text{pH}=\text{p}K_a.
$$

$$
\text{p}K_a=-\log(6.8\times10^{-4})=3.17.
$$

$$
\boxed{\text{B}}
$$
:::
::::

::::problem
3. Which solution has the greatest $$\text{pH}$$?

   (A) $$0.10\ M\ \text{HCl}$$<br>
   (B) $$0.10\ M\ \text{HC}_2\text{H}_3\text{O}_2$$<br>
   (C) $$0.10\ M\ \text{NaCl}$$<br>
   (D) $$0.10\ M\ \text{NaOH}$$

:::solution
$$\text{NaOH}$$ is a strong base, so it produces the greatest $$[\text{OH}^-]$$ and therefore the greatest $$\text{pH}$$.

$$
\boxed{\text{D}}
$$
:::
::::

::::problem
4. At the half-equivalence point in a weak acid-strong base titration,

   (A) $$\text{pH}=\text{p}K_a$$.<br>
   (B) $$\text{pH}=7.00$$ for every weak acid.<br>
   (C) all weak acid has been converted to conjugate base.<br>
   (D) $$[\text{H}_3\text{O}^+]=[\text{OH}^-]$$.

:::solution
At the half-equivalence point, $$[\text{HA}]=[\text{A}^-]$$. Henderson-Hasselbalch becomes

$$
\text{pH}=\text{p}K_a+\log(1)=\text{p}K_a.
$$

$$
\boxed{\text{A}}
$$
:::
::::

::::problem
5. Which species is the conjugate base of $$\text{H}_2\text{PO}_4^-$$?

   (A) $$\text{H}_3\text{PO}_4$$<br>
   (B) $$\text{HPO}_4^{2-}$$<br>
   (C) $$\text{PO}_4^{3-}$$<br>
   (D) $$\text{OH}^-$$

:::solution
A conjugate base is formed by removing one proton. Removing $$\text{H}^+$$ from $$\text{H}_2\text{PO}_4^-$$ gives $$\text{HPO}_4^{2-}$$.

$$
\boxed{\text{B}}
$$
:::
::::

::::problem
6. Which mixture is a buffer?

   (A) $$\text{HCl}$$ and $$\text{NaCl}$$<br>
   (B) $$\text{NaOH}$$ and $$\text{NaCl}$$<br>
   (C) $$\text{HF}$$ and $$\text{NaF}$$<br>
   (D) $$\text{HNO}_3$$ and $$\text{NaNO}_3$$

:::solution
A buffer contains a weak acid and its conjugate base, or a weak base and its conjugate acid. $$\text{HF}$$ and $$\text{F}^-$$ form a buffer pair.

$$
\boxed{\text{C}}
$$
:::
::::

### FRQ

::::frq{id=chem-acidbase-1}
7. A $$0.100\ M$$ solution of acetic acid, $$\text{HC}_2\text{H}_3\text{O}_2$$, has $$K_a=1.8\times10^{-5}$$.

   $$(A)$$ Write the acid-ionization equation.

   $$(B)$$ Calculate $$[\text{H}_3\text{O}^+]$$ using the small-$$x$$ approximation.

   $$(C)$$ Calculate the $$\text{pH}$$.

   $$(D)$$ Explain what happens to the percent ionization if sodium acetate is added.

:::solution
$$(A)$$

$$
\text{HC}_2\text{H}_3\text{O}_2(aq)+\text{H}_2\text{O}(l)\rightleftharpoons \text{H}_3\text{O}^+(aq)+\text{C}_2\text{H}_3\text{O}_2^-(aq)
$$

Water is included in the chemical equation because it accepts the proton, but liquid water is omitted from the $$K_a$$ expression.

$$(B)$$ Let $$x=[\text{H}_3\text{O}^+]$$ at equilibrium. Then

$$
K_a=\frac{x^2}{0.100-x}.
$$

Using the small-$$x$$ approximation,

$$
1.8\times10^{-5}=\frac{x^2}{0.100}.
$$

Thus

$$
x=\sqrt{(1.8\times10^{-5})(0.100)}=1.34\times10^{-3}\ M.
$$

This value is small compared with $$0.100\ M$$, so the small-$$x$$ approximation is reasonable:

$$
\frac{1.34\times10^{-3}}{0.100}\times100\%=1.34\%.
$$

$$(C)$$

$$
\text{pH}=-\log(1.34\times10^{-3})=2.87.
$$

$$(D)$$ Sodium acetate adds the common ion $$\text{C}_2\text{H}_3\text{O}_2^-$$, shifting the acid ionization left. Since less acetic acid ionizes, $$[\text{H}_3\text{O}^+]$$ decreases and the percent ionization decreases. This is the common-ion effect.
:::
::::

::::frq{id=chem-acidbase-2}
8. The 2026 AP Chemistry exam included a nitrous acid titration and indicator question. (Adapted from College Board, [2026 AP Chemistry FRQ 3](https://apcentral.collegeboard.org/media/pdf/ap26-frq-chemistry.pdf).)

   $$(A)$$ Explain why the equivalence point of a weak acid-strong base titration has $$\text{pH}>7$$.

   $$(B)$$ A $$35.0\ \text{mL}$$ sample of $$\text{HNO}_2$$ is titrated to equivalence with $$21.0\ \text{mL}$$ of $$0.160\ M\ \text{NaOH}$$. Calculate the molarity of $$\text{HNO}_2$$.

   $$(C)$$ Explain why an indicator should change color near the steep part of the titration curve.

:::solution
$$(A)$$ At equivalence, the weak acid has been converted mostly into its conjugate base. The conjugate base reacts with water to produce $$\text{OH}^-$$:

$$
\text{NO}_2^-(aq)+\text{H}_2\text{O}(l)\rightleftharpoons\text{HNO}_2(aq)+\text{OH}^-(aq).
$$

Because $$\text{OH}^-$$ is produced, the solution is basic and the equivalence-point pH is greater than $$7$$.

$$(B)$$ At equivalence,

$$
n_{\text{HNO}_2}=n_{\text{NaOH}}.
$$

$$
n_{\text{NaOH}}=(0.0210\ \text{L})(0.160\ M)=0.00336\ \text{mol}.
$$

Thus

$$
M_{\text{HNO}_2}=\frac{0.00336\ \text{mol}}{0.0350\ \text{L}}=0.0960\ M.
$$

$$(C)$$ The steep part of the titration curve is where a tiny volume change causes a large pH change, so the color change most closely marks the equivalence point. If the indicator changes color far from that steep region, it will signal the endpoint too early or too late and create systematic error.

<div class="placeholder-box">

**Image placeholder:** Weak acid-strong base titration curve with equivalence point above $$\text{pH}=7$$ and an indicator transition range near the steep region.

</div>
:::
::::
