---
title: "Unit 2: Electric Potential"
description: "AP Physics C E&M notes on electric potential, potential energy, voltage, equipotentials, and relationships to electric fields."
sidebar:
  order: 2
---

---

:::variables
- $$V$$ = electric potential, or voltage (Units: volts, $$\text{V} = \text{J/C}$$)
- $$U$$ = electric potential energy (Units: joules, $$\text{J}$$)
- $$q$$ = a charge being moved, or a test charge (Units: coulombs, $$\text{C}$$)
- $$Q$$ = a source charge that creates the field/potential (Units: $$\text{C}$$)
- $$k$$ = Coulomb constant, $$k = \dfrac{1}{4\pi\varepsilon_0} \approx 8.99\times10^{9}\ \text{N}\,\text{m}^2/\text{C}^2$$
- $$\varepsilon_0$$ = vacuum permittivity, $$\varepsilon_0 \approx 8.85\times10^{-12}\ \text{C}^2/(\text{N}\,\text{m}^2)$$
- $$\vec{E}$$ = electric field (Units: $$\text{N/C} = \text{V/m}$$)
- $$d$$ = separation or displacement (Units: $$\text{m}$$)
- $$\text{eV}$$ = electron volt, an energy unit, $$1\ \text{eV} \approx 1.602\times10^{-19}\ \text{J}$$
- $$e$$ = elementary charge, $$e \approx 1.602\times10^{-19}\ \text{C}$$
:::

---

## Electric potential energy

For two point charges $$Q$$ and $$q$$ separated by distance $$r$$, with the usual choice that potential energy is zero when the charges are infinitely far apart, the **electric potential energy** of the pair is

$$
U = \frac{1}{4\pi \varepsilon_0} \frac{Qq}{r} = k \frac{Qq}{r}.
$$

If the separation changes from $$r_i$$ to $$r_f$$, the change in potential energy is

$$
\Delta U = kQq \left( \frac{1}{r_f} - \frac{1}{r_i} \right).
$$

This mirrors gravitation: the interaction energy depends on $$1/r$$, and you must fix a reference (here, $$U \to 0$$ as $$r \to \infty$$) before speaking of “the” energy at a finite separation. Unlike gravitation, however, the sign of $$U$$ can be positive (like charges, which repel) or negative (unlike charges, which attract).

---

## Potential energy of several charges

For more than two charges, the total potential energy is the sum over **distinct pairs**:

$$
U = k \sum_{i<j} \frac{q_i q_j}{r_{ij}}.
$$

The condition $$i<j$$ counts each pair exactly once. A clean way to see this is to assemble the configuration one charge at a time: bringing in the first charge takes no work (empty space), the second is brought in against the first charge’s field, the third against the field of the first two, and so on. The total work needed equals $$U$$, and because the electrostatic force is conservative, the answer does not depend on the order of assembly.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\coordinate (A) at (0,2.2); \coordinate (B) at (-2,0); \coordinate (C) at (2,0); \draw[thick] (A)--(B)--(C)--cycle; \fill[red] (A) circle (3pt) node[above] {$q_1$}; \fill[blue] (B) circle (3pt) node[left] {$q_2$}; \fill[green!60!black] (C) circle (3pt) node[right] {$q_3$}; \node at (0,-0.45) {sum pairwise potential energies};
\end{tikzpicture}
```


<div class="theorem-box">

**Example.** Three point charges are fixed at the corners of an equilateral triangle of side $$a = 0.20\ \text{m}$$: $$q_1 = +2.0\ \mu\text{C}$$, $$q_2 = -3.0\ \mu\text{C}$$, and $$q_3 = +4.0\ \mu\text{C}$$. How much total electric potential energy is stored in this configuration? Use $$k = 8.99\times10^{9}\ \text{N}\,\text{m}^2/\text{C}^2$$.

Every pair is separated by the same distance $$r_{ij} = a$$, so

$$
U = k\sum_{i<j}\frac{q_iq_j}{r_{ij}} = \frac{k}{a}\big(q_1q_2 + q_1q_3 + q_2q_3\big).
$$

Compute the products (in $$\text{C}^2$$), keeping the microcoulomb factor $$10^{-6}\times10^{-6} = 10^{-12}$$:

$$
q_1q_2 = (2.0)(-3.0)\times10^{-12} = -6.0\times10^{-12},
$$

$$
q_1q_3 = (2.0)(4.0)\times10^{-12} = +8.0\times10^{-12},
$$

$$
q_2q_3 = (-3.0)(4.0)\times10^{-12} = -12.0\times10^{-12}.
$$

The sum of products is $$(-6.0 + 8.0 - 12.0)\times10^{-12} = -10.0\times10^{-12}\ \text{C}^2$$. Therefore

$$
U = \frac{8.99\times10^{9}}{0.20}\,(-10.0\times10^{-12}) = (4.50\times10^{10})(-1.00\times10^{-11}) \approx -0.45\ \text{J}.
$$

The negative total means the attractive pairs dominate: net work is *released* in assembling this configuration, and an external agent would have to do $$+0.45\ \text{J}$$ of work to pull all three charges back out to infinity.

</div>

---

## Electric potential (voltage)

The **electric potential** $$V$$ at a point is potential energy per unit charge for a small positive test charge $$q_0$$ placed at that point:

$$
V = \frac{U}{q_0}.
$$

Units are volts (V), where $$1 \text{ V} = 1 \text{ J/C}$$. Colloquially, $$V$$ is often called voltage, especially when discussing **potential difference** $$\Delta V$$ between two points.

For a single source point charge $$Q$$, with $$V = 0$$ at infinity,

$$
V = \frac{1}{4\pi \varepsilon_0} \frac{Q}{r} = \frac{kQ}{r}.
$$

Potential is a scalar: many-source problems add $$V$$ by ordinary addition (no vector triangles), unlike electric field.

<div class="theorem-box">

**Proof (potential of a point charge).** Define potential as the work per unit charge to bring a test charge from infinity to the point, equivalently the negative line integral of the field from infinity to $$r$$:

$$
V(r) = -\int_\infty^r \vec{E}\cdot d\vec{r}.
$$

The field of a point charge $$Q$$ points radially, $$\vec{E} = \dfrac{kQ}{r'^2}\hat{r}$$. Integrating in along a radial path, $$d\vec{r} = dr'\,\hat{r}$$, so $$\vec{E}\cdot d\vec{r} = \dfrac{kQ}{r'^2}\,dr'$$:

$$
V(r) = -\int_\infty^r \frac{kQ}{r'^2}\,dr' = -kQ\left[-\frac{1}{r'}\right]_\infty^r = kQ\left(\frac{1}{r} - \frac{1}{\infty}\right) = \frac{kQ}{r}.
$$

The reference $$V(\infty) = 0$$ is exactly what makes the lower-limit term vanish. The radial path is allowed because the field is conservative (proved below), so any path from infinity gives the same answer.

</div>

<div class="theorem-box">

**Proof (the electrostatic field is conservative).** The field of a single point charge $$Q$$ is radial, $$\vec{E} = \dfrac{kQ}{r^2}\hat{r}$$. For *any* path between two points $$a$$ and $$b$$, write the displacement in spherical-like terms: only the radial component of $$d\vec{r}$$ survives the dot product with $$\hat{r}$$, and that radial component is just $$dr$$. Hence

$$
\int_a^b \vec{E}\cdot d\vec{r} = \int_{r_a}^{r_b}\frac{kQ}{r^2}\,dr = kQ\left(\frac{1}{r_a} - \frac{1}{r_b}\right),
$$

which depends only on the endpoints $$r_a,r_b$$, not on the route. Around a **closed loop** the start and end radii are equal, so

$$
\oint \vec{E}\cdot d\vec{r} = 0.
$$

By superposition, any electrostatic field is a sum of point-charge fields, and a sum of terms each integrating to zero around a loop also integrates to zero. Because the work around every closed loop vanishes, the work between two points is path-independent, and a single-valued potential $$V$$ can be defined. This is the electrostatic analog of gravity being conservative.

</div>

---

## Potential from many charges and distributions

Since potential is a scalar, the potential of several source charges is just the signed algebraic sum

$$
V = k \sum_i \frac{q_i}{r_i},
$$

where $$r_i$$ is the distance from source $$i$$ to the field point. For a continuous distribution, integrate over charge elements:

$$
V = k \int \frac{dq}{r},
\qquad dq = \lambda\, d\ell,\ \sigma\, dA,\ \text{or}\ \rho\, dV.
$$

There are no components to track, only distances, so potential integrals are usually easier than field integrals. When the field is already known from symmetry (Gauss's law), it is often faster to integrate the field instead:

$$
V_b - V_a = -\int_a^b \vec{E} \cdot d\vec{r}.
$$

<div class="theorem-box">

**Example.** Two point charges sit on the $$x$$-axis: $$q_1 = +5.0\ \text{nC}$$ at $$x = 0$$ and $$q_2 = -3.0\ \text{nC}$$ at $$x = 0.40\ \text{m}$$. Find the electric potential at the point $$P = (0.40\ \text{m},\ 0.30\ \text{m})$$, which lies directly above $$q_2$$.

Potential is a *scalar*, so just add the contributions with their signs—no vector components. The distances from each source to $$P$$ are

$$
r_1 = \sqrt{(0.40)^2 + (0.30)^2} = \sqrt{0.16 + 0.09} = \sqrt{0.25} = 0.50\ \text{m},
$$

$$
r_2 = 0.30\ \text{m} \quad (\text{straight down to } q_2).
$$

Then

$$
V_P = k\left(\frac{q_1}{r_1} + \frac{q_2}{r_2}\right)
= 8.99\times10^{9}\left(\frac{5.0\times10^{-9}}{0.50} + \frac{-3.0\times10^{-9}}{0.30}\right).
$$

Evaluate each term: $$\dfrac{5.0\times10^{-9}}{0.50} = 1.0\times10^{-8}$$ and $$\dfrac{-3.0\times10^{-9}}{0.30} = -1.0\times10^{-8}$$, which cancel:

$$
V_P = 8.99\times10^{9}\,(1.0\times10^{-8} - 1.0\times10^{-8}) = 0\ \text{V}.
$$

The potential at $$P$$ is exactly zero. Crucially, this does **not** mean the field is zero there: $$\vec{E}$$ is a vector sum of two nonzero, non-collinear contributions and is generally nonzero on the $$V=0$$ surface. Adding scalars (with sign) is far easier than adding the vector fields, which is the whole reason potential is convenient.

</div>

### Standard results

For a thin spherical shell of radius $$R$$ and total charge $$Q$$ (with $$V \to 0$$ at infinity),

$$
V(r) =
\begin{cases}
kQ/R, & r \le R,\\
kQ/r, & r \ge R.
\end{cases}
$$

Inside the shell the field is zero, so $$V$$ is **constant**, not zero—no field does not mean no potential. For a uniformly charged solid sphere of radius $$R$$,

$$
V(r) =
\begin{cases}
\dfrac{kQ}{2R}\left(3 - \dfrac{r^2}{R^2}\right), & r \le R,\\[2mm]
kQ/r, & r \ge R.
\end{cases}
$$

In both cases $$V$$ is continuous everywhere, even at a boundary where the field changes abruptly. 

<div class="theorem-box">

**Proof (on-axis potential of a uniformly charged ring).** A ring of radius $$R$$ carries total charge $$Q$$ spread uniformly. Find $$V$$ at a point on the axis a distance $$x$$ from the center.

Every charge element $$dq$$ on the ring lies at the *same* distance from the axial point,

$$
r = \sqrt{x^2 + R^2},
$$

by the Pythagorean theorem. Since potential is a scalar, $$dV = k\,dq/r$$ and the constant $$r$$ comes straight out of the integral:

$$
V = \int \frac{k\,dq}{r} = \frac{k}{\sqrt{x^2+R^2}}\int dq = \frac{kQ}{\sqrt{x^2+R^2}}.
$$

Notice how painless this is: the *field* calculation for the same ring requires resolving each $$d\vec{E}$$ into components and arguing that the radial parts cancel, leaving only the axial part with an extra $$\cos\theta = x/r$$ factor. The potential integral has no direction to worry about—just one distance—so the scalar nature of $$V$$ saves all that bookkeeping. At the center ($$x=0$$) this gives $$V = kQ/R$$; far away ($$x\gg R$$) it reduces to $$kQ/x$$, the point-charge result, as it must.

</div>

<div class="theorem-box">

**Proof (on-axis potential of a uniformly charged disk).** A flat disk of radius $$R$$ carries uniform surface charge density $$\sigma$$, so total charge $$Q = \sigma\pi R^2$$. Find $$V$$ on the axis at distance $$x$$ from the center.

Slice the disk into thin concentric rings of radius $$a$$ and width $$da$$. Each ring has area $$dA = 2\pi a\,da$$ and charge $$dq = \sigma\,2\pi a\,da$$. Every point of that ring is a distance $$\sqrt{x^2 + a^2}$$ from the axial point, so by the ring result its contribution to the potential is

$$
dV = \frac{k\,dq}{\sqrt{x^2 + a^2}} = \frac{k\,\sigma\,2\pi a\,da}{\sqrt{x^2 + a^2}}.
$$

Integrate over all rings from $$a = 0$$ to $$a = R$$:

$$
V = 2\pi k\sigma \int_0^R \frac{a\,da}{\sqrt{x^2 + a^2}}.
$$

The substitution $$u = x^2 + a^2$$, $$du = 2a\,da$$ turns the integral into $$\tfrac{1}{2}\int u^{-1/2}\,du = \sqrt{u}$$, giving

$$
V = 2\pi k\sigma \left[\sqrt{x^2 + a^2}\,\right]_0^R = 2\pi k\sigma\left(\sqrt{x^2 + R^2} - x\right).
$$

Finally use $$k = \dfrac{1}{4\pi\varepsilon_0}$$, so $$2\pi k = \dfrac{1}{2\varepsilon_0}$$:

$$
V = \frac{\sigma}{2\varepsilon_0}\left(\sqrt{x^2 + R^2} - x\right).
$$

We took $$x > 0$$; for a point on the other side replace $$x$$ with $$\lvert x\rvert$$. The disk's potential is built entirely from scalar ring potentials—no components ever appear.

</div>

---

## Work, potential difference, and the field

The electrostatic force is conservative. For a charge $$q$$ moving from an initial point $$a$$ to a final point $$b$$, the work done by the electric field relates to the change in potential energy:

$$
W_{\text{field}} = -\Delta U.
$$

Since $$U = qV$$ for a charge in a fixed external potential (treating $$q$$ as the object being moved),

$$
\Delta U = q \Delta V,
$$

so

$$
W_{\text{field}} = -q \left( V_b - V_a \right) = -q \Delta V.
$$

If an external agent moves the charge slowly against the field with no change in kinetic energy, the work that agent does is the negative of the field’s work:

$$
W_{\text{ext}} = -W_{\text{field}} = q \Delta V.
$$

:::warning
Signs matter: a positive charge moving toward lower potential loses potential energy; the field does positive work. Always state whether you mean work by the field or by an external agent.
:::

<div class="theorem-box">

**Example.** An electron (charge $$-e$$, mass $$m_e = 9.11\times10^{-31}\ \text{kg}$$) starts from rest and is accelerated through a potential difference of $$\Delta V = 500\ \text{V}$$, gaining energy. Find its final kinetic energy in both eV and joules, then its final speed.

Since the electron is negatively charged, it speeds up when moving toward *higher* potential. The magnitude of the energy gained equals the charge magnitude times the potential difference. By the work–energy theorem (only the electric force acts), all of that energy becomes kinetic:

$$
\tfrac{1}{2}m_e v^2 = e\,\Delta V.
$$

Working in electron volts is immediate: a charge of magnitude $$e$$ moving through $$500\ \text{V}$$ gains exactly

$$
K = 500\ \text{eV}.
$$

Converting to joules,

$$
K = (1.602\times10^{-19}\ \text{C})(500\ \text{V}) = 8.01\times10^{-17}\ \text{J}.
$$

Solve for the speed:

$$
v = \sqrt{\frac{2K}{m_e}} = \sqrt{\frac{2(8.01\times10^{-17})}{9.11\times10^{-31}}} = \sqrt{1.76\times10^{14}} \approx 1.33\times10^{7}\ \text{m/s}.
$$

That is about $$4\%$$ of the speed of light, so the nonrelativistic formula is still a fair approximation here. The electron volt is handy precisely because $$q\,\Delta V$$ with $$q = e$$ comes out as the voltage in volts, numerically equal to the energy in eV.

</div>

---

## Relating potential and electric field

Potential and field are linked by

$$
\vec{E} = -\nabla V
$$

in differential form ($$\nabla$$ is just a 3D differential operator, for most purposes, just remember that it is the derivative along an axis). Along a path, the line integral gives the potential difference:

$$
V_b - V_a = -\int_a^b \vec{E} \cdot d\vec{r}.
$$

For a uniform electric field of magnitude $$E$$ and a displacement $$\vec{d}$$,

$$
\Delta V = -\vec{E} \cdot \vec{d}.
$$

If $$\vec{d}$$ points in the direction of $$\vec{E}$$, potential decreases along that direction—consistent with electric field lines pointing from higher to lower potential (for the conventional positive-test-charge picture).

In one dimension the gradient is just an ordinary derivative, so the axial component of the field is recovered by differentiating the potential:

$$
E_x = -\frac{dV}{dx}.
$$


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[axis lines=middle,width=8cm,height=5cm,xmin=-3,xmax=3,ymin=-2,ymax=5,xlabel={$x$},ylabel={$V$},xtick=\empty,ytick=\empty]
\addplot[blue,very thick,domain=-2.5:2.5]{0.7*x^2+0.5};
\addplot[red,thick,domain=-1.5:1.5]{1.4*x+1.2};
\node at (axis cs:1.5,3.8) {$E_x=-dV/dx$};
\end{axis}
\end{tikzpicture}
```


<div class="theorem-box">

**Example.** Take the on-axis disk potential derived above,

$$
V(x) = \frac{\sigma}{2\varepsilon_0}\left(\sqrt{x^2 + R^2} - x\right),
$$

and recover the on-axis electric field by differentiation, confirming it agrees with the standard field-integral result.

Apply $$E_x = -dV/dx$$. Differentiate term by term, using $$\dfrac{d}{dx}\sqrt{x^2+R^2} = \dfrac{x}{\sqrt{x^2+R^2}}$$:

$$
\frac{dV}{dx} = \frac{\sigma}{2\varepsilon_0}\left(\frac{x}{\sqrt{x^2+R^2}} - 1\right).
$$

Therefore

$$
E_x = -\frac{dV}{dx} = \frac{\sigma}{2\varepsilon_0}\left(1 - \frac{x}{\sqrt{x^2+R^2}}\right).
$$

This is exactly the on-axis field of a uniformly charged disk obtained the hard way—by integrating the axial components $$dE_x$$ of every ring. Differentiating the scalar potential reproduces it in two lines. As a sanity check, for $$x \gg R$$ a binomial expansion gives $$1 - \dfrac{x}{\sqrt{x^2+R^2}} \approx \dfrac{R^2}{2x^2}$$, so $$E_x \to \dfrac{\sigma R^2}{4\varepsilon_0 x^2} = \dfrac{kQ}{x^2}$$ with $$Q = \sigma\pi R^2$$—the point-charge field, as expected far away.

</div>

---

## Equipotential surfaces

An **equipotential** is a surface (or curve in 2D diagrams) on which $$V$$ is constant. No work is required to move a charge along an equipotential, because $$\Delta V = 0$$. For that reason, $$\vec{E}$$ is everywhere perpendicular to equipotentials (except where $$\vec{E} = 0$$): a component of $$\vec{E}$$ tangent to the surface would do nonzero work over a small step along the surface, contradicting constant $$V$$.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\foreach \r in {0.7,1.2,1.8,2.5}{\draw[blue] (0,0) circle (\r);} \foreach \a in {0,45,...,315}{\draw[->, red] (\a:0.4)--(\a:2.8);} \fill (0,0) circle (2pt) node[below] {$+q$}; \node at (0,-3.1) {field lines are perpendicular to equipotentials};
\end{tikzpicture}
```


A clean special case is the **uniform field between two large parallel plates**. The plates themselves are equipotentials, and intermediate equipotentials are evenly spaced planes parallel to them. With the field magnitude $$E$$ and plate separation $$d$$, integrating $$\Delta V = -\int \vec{E}\cdot d\vec{r}$$ along the field direction gives the simple magnitude relation $$\lvert\Delta V\rvert = Ed$$.

<div class="theorem-box">

**Example.** Two large parallel plates are separated by $$d = 2.0\ \text{cm} = 0.020\ \text{m}$$ and connected to a battery so the potential difference between them is $$\Delta V = 120\ \text{V}$$. Find the magnitude of the uniform field between the plates, and the work the field does on a proton ($$q = +e$$) that travels from the high-potential plate to the low-potential plate.

Between large plates the field is uniform, so $$\lvert\Delta V\rvert = Ed$$ gives

$$
E = \frac{\lvert \Delta V \rvert}{d} = \frac{120\ \text{V}}{0.020\ \text{m}} = 6.0\times10^{3}\ \text{V/m}.
$$

For the proton moving from high to low potential, $$\Delta V = V_b - V_a = -120\ \text{V}$$ (potential drops). The work done by the field is

$$
W_{\text{field}} = -q\,\Delta V = -(1.602\times10^{-19})(-120) = +1.92\times10^{-17}\ \text{J}.
$$

The work is positive: a positive charge is pushed from high toward low potential by the field, gaining kinetic energy—consistent with $$1.92\times10^{-17}\ \text{J} = 120\ \text{eV}$$, again the tidy electron-volt bookkeeping. An electron, with the opposite sign of charge, would instead be pushed from the low-potential plate toward the high-potential plate.

</div>

---

## The electron volt

The **electron volt** (eV) is a unit of energy, not potential. One electron volt is the energy change of a particle with charge magnitude $$e$$ when it moves through a potential difference of magnitude $$1 \text{ V}$$:

$$
1 \text{ eV} = e \cdot (1 \text{ V}) \approx 1.602 \times 10^{-19} \text{ J}.
$$

Atomic and nuclear scales use multiples such as keV, MeV, and GeV ($$10^3$$, $$10^6$$, and $$10^9$$ eV). The joule remains the SI energy unit; the eV is a convenience because $$e$$ is the natural charge quantum at microscopic scales.

---

## Interior potential of a solid sphere

The standard result above quotes the interior potential of a uniformly charged solid sphere without derivation. Here is where it comes from.

<div class="theorem-box">

**Proof (interior potential of a uniformly charged solid sphere).** A solid sphere of radius $$R$$ carries total charge $$Q$$ at uniform volume density. By Gauss's law, the field is radial with magnitude

$$
E(r) =
\begin{cases}
\dfrac{kQ\,r}{R^3}, & r \le R \quad (\text{only the enclosed charge contributes}),\\[2mm]
\dfrac{kQ}{r^2}, & r \ge R.
\end{cases}
$$

Start at infinity where $$V = 0$$ and integrate the field inward. From infinity to the surface $$r = R$$, the exterior field is the point-charge field, giving the surface potential

$$
V(R) = \frac{kQ}{R}.
$$

To reach an interior radius $$r < R$$, continue integrating with the interior field:

$$
V(r) = V(R) - \int_R^r E\,dr' = \frac{kQ}{R} - \int_R^r \frac{kQ\,r'}{R^3}\,dr'.
$$

Evaluate the interior integral:

$$
\int_R^r \frac{kQ\,r'}{R^3}\,dr' = \frac{kQ}{R^3}\left[\frac{r'^2}{2}\right]_R^r = \frac{kQ}{2R^3}\left(r^2 - R^2\right).
$$

Substituting (note the double minus sign turns it into a plus),

$$
V(r) = \frac{kQ}{R} - \frac{kQ}{2R^3}\left(r^2 - R^2\right) = \frac{kQ}{R} + \frac{kQ}{2R} - \frac{kQ\,r^2}{2R^3}.
$$

Combining the constant terms $$\dfrac{kQ}{R} + \dfrac{kQ}{2R} = \dfrac{3kQ}{2R}$$:

$$
V(r) = \frac{kQ}{2R}\left(3 - \frac{r^2}{R^2}\right), \qquad r \le R.
$$

At the surface ($$r = R$$) this gives $$\dfrac{kQ}{2R}(3 - 1) = \dfrac{kQ}{R}$$, matching the exterior value—$$V$$ is continuous even though $$E$$ has a kink there. At the center ($$r = 0$$) the potential reaches its maximum $$\dfrac{3kQ}{2R}$$, $$1.5$$ times the surface value.

</div>

---

:::equations
| Idea | Equation |
| --- | --- |
| PE of two point charges | $$U = k\dfrac{Qq}{r}$$ |
| PE of a system of charges | $$U = k\displaystyle\sum_{i<j}\dfrac{q_iq_j}{r_{ij}}$$ |
| Potential of a point charge | $$V = \dfrac{kQ}{r}$$ |
| Potential, superposition | $$V = k\displaystyle\sum_i \dfrac{q_i}{r_i}$$ |
| Potential of a distribution | $$V = k\displaystyle\int \dfrac{dq}{r}$$ |
| Potential from the field | $$V_b - V_a = -\displaystyle\int_a^b \vec{E}\cdot d\vec{r}$$ |
| Field from the potential | $$\vec{E} = -\nabla V,\quad E_x = -\dfrac{dV}{dx}$$ |
| Uniform-field plates | $$\Delta V = -Ed$$ |
| Potential energy of a charge | $$U = qV$$ |
| Work done by the field | $$W = -q\,\Delta V$$ |
| Electron volt | $$1\ \text{eV} = e(1\ \text{V}) \approx 1.602\times10^{-19}\ \text{J}$$ |
:::

## Practice

### FRQ

::::frq{id=ap-physics-c-em-electricpot-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
