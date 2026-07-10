---
title: "Unit 3: Conductors and Capacitors"
sidebar:
  order: 3
---

---

This unit studies how conductors rearrange charge in electrostatic equilibrium and how capacitors store charge and energy. It builds directly on [electric fields](/notes/ap/ap-physics-c-em/electrostatics/) and [electric potential](/notes/ap/ap-physics-c-em/electricpot/): conductors are governed by field and potential constraints, and capacitors are devices designed to create controlled electric fields.

---

:::variables
- $$C$$ = capacitance (Units: farads, $$\text{F}=\text{C/V}$$)
- $$Q$$ = charge stored on one plate
- $$V$$ or $$\Delta V$$ = potential difference
- $$U$$ = energy stored in a capacitor
- $$\kappa$$ = dielectric constant
- $$A$$ = plate area
- $$d$$ = plate separation
- $$\varepsilon_0$$ = permittivity of free space
:::

---

## Conductors in electrostatic equilibrium

A conductor has mobile charges. In **electrostatic equilibrium**, the charges are no longer drifting, so the electric field inside the conducting material must be zero. If there were a nonzero internal field, free electrons would accelerate and the charge distribution would not be static.

- The electric field inside the conducting material is zero.
- If there are no charges trapped in cavities, any excess charge on an isolated conductor lives on its outer surface.
- The electric field just outside a conducting surface is perpendicular to that surface.
- Charge gathers more densely near sharp points, where the surface curvature is larger.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[fill=gray!20] (0,0) circle (1.4); \foreach \a in {20,70,130,200,250,310}{\draw[->, blue, thick] (\a:1.4) -- (\a:2.2);} \node at (0,0) {$E=0$ inside}; \node at (0,-2.5) {excess charge lives on the surface};
\end{tikzpicture}
```


<div class="theorem-box">

**Proof (Excess charge must be on the surface).** Imagine a Gaussian surface entirely inside the metal of a conductor, just below its actual surface, and assume there are no charges inside cavities. Since $$E=0$$ everywhere on that Gaussian surface,

$$
\oint \vec E\cdot d\vec A=0.
$$

Gauss's law gives $$Q_{\text{enc}}/\varepsilon_0=0$$, so $$Q_{\text{enc}}=0$$. Any net excess charge cannot remain in the conducting bulk; it must reside on the surface.

</div>

<div class="theorem-box">

**Proof (Field Just Outside a Conductor).** Use a tiny cylindrical Gaussian surface, often called a pillbox, crossing the conductor surface. Let the pillbox have area $$A$$ on each flat face.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (-3,0) -- (3,0) node[right] {conductor surface}; \draw[fill=blue!10] (-0.8,-0.3) rectangle (0.8,0.8); \draw[->, red, thick] (0,0.8) -- (0,1.8) node[above] {$E$}; \node at (0,-0.65) {$E=0$}; \node at (0,1.1) {Gaussian pillbox};
\end{tikzpicture}
```


Inside the conductor,

$$
\vec{E}=0.
$$

At the surface, the field has no tangential component in electrostatic equilibrium, so the only flux comes through the outer flat face:

$$
\Phi_E=EA.
$$

The enclosed charge is the surface charge on that patch:

$$
q_{\text{enc}}=\sigma A.
$$

Gauss's law gives

$$
EA=\frac{\sigma A}{\varepsilon_0}.
$$

Cancel $$A$$:

$$
E=\frac{\sigma}{\varepsilon_0}.
$$

</div>

---

## Charge Distribution on Conductors

Excess charge spreads out on the surface until the conductor reaches a single potential. On irregular conductors, surface charge density is larger where the radius of curvature is smaller. Sharp points can create large local electric fields, which is why discharge often begins near pointed conductors.

For a spherical conductor of radius $$R$$ carrying charge $$Q$$, the external field is the same as if all charge were concentrated at the center:

$$
E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}, \qquad r\ge R.
$$

The potential of the conducting sphere relative to infinity is

$$
V = \frac{1}{4\pi\varepsilon_0}\frac{Q}{R}.
$$

---

## Capacitance

Capacitance measures how much charge a device stores per unit potential difference:

$$
C=\frac{Q}{\Delta V}.
$$

The charge $$Q$$ means the magnitude of charge on either conductor. A capacitor with plates $$+Q$$ and $$-Q$$ stores charge separation, not net charge.

Capacitance depends on geometry and material, not on $$Q$$ or $$\Delta V$$ separately for an ideal linear capacitor.

---

## Parallel-Plate Capacitor

For two large parallel conducting plates of area $$A$$ separated by distance $$d$$ in vacuum or air,

$$
C = \frac{\varepsilon_0 A}{d}.
$$

The field between ideal large plates is approximately uniform:

$$
E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{\varepsilon_0 A}.
$$

Since $$\Delta V = Ed$$,

$$
C = \frac{Q}{\Delta V}=\frac{Q}{Ed}=\frac{\varepsilon_0 A}{d}.
$$

Edge effects are usually ignored in AP Physics C unless the problem explicitly metnions them.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[very thick] (-2,1) -- (2,1); \draw[very thick] (-2,-1) -- (2,-1); \node[right] at (2,1) {$+$}; \node[right] at (2,-1) {$-$};
\foreach \x in {-1.6,-0.8,0,0.8,1.6}{\draw[->, blue, thick] (\x,0.75) -- (\x,-0.75);} \node at (0,0) {uniform field};
\end{tikzpicture}
```


<div class="theorem-box">

**Proof (Parallel-Plate Capacitance).** For large plates with charge $$+Q$$ and $$-Q$$,

$$
\sigma=\frac{Q}{A}.
$$

The electric field between the plates is approximately

$$
E=\frac{\sigma}{\varepsilon_0}=\frac{Q}{\varepsilon_0 A}.
$$

The potential difference between plates separated by $$d$$ is

$$
\Delta V=Ed=\frac{Qd}{\varepsilon_0 A}.
$$

Using $$C=Q/\Delta V$$,

$$
C=\frac{Q}{Qd/(\varepsilon_0 A)}=\frac{\varepsilon_0 A}{d}.
$$

</div>

<div class="theorem-box">

**Example.** A parallel-plate capacitor has square plates of side $$10\ \text{cm}$$ (so $$A = 1.0\times10^{-2}\ \text{m}^2$$) separated by $$d = 1.0\ \text{mm}$$ of air. It is connected to a $$V = 50\ \text{V}$$ source. Find the capacitance, the charge stored, and the energy stored. Use $$\varepsilon_0 = 8.85\times10^{-12}\ \text{F/m}$$.

The capacitance is

$$
C = \frac{\varepsilon_0 A}{d} = \frac{(8.85\times10^{-12})(1.0\times10^{-2})}{1.0\times10^{-3}} = 8.85\times10^{-11}\ \text{F} \approx 88.5\ \text{pF}.
$$

The charge stored on each plate is

$$
Q = C\,V = (8.85\times10^{-11})(50) = 4.4\times10^{-9}\ \text{C} = 4.4\ \text{nC}.
$$

The stored energy is

$$
U = \tfrac{1}{2}C V^2 = \tfrac{1}{2}(8.85\times10^{-11})(50)^2 = \tfrac{1}{2}(8.85\times10^{-11})(2500) \approx 1.1\times10^{-7}\ \text{J}.
$$

The field between the plates is $$E = V/d = 50 / (1.0\times10^{-3}) = 5.0\times10^{4}\ \text{V/m}$$. As a cross-check on the energy via the field-energy density,

$$
U = \tfrac{1}{2}\varepsilon_0 E^2 (Ad) = \tfrac{1}{2}(8.85\times10^{-12})(5.0\times10^4)^2 (1.0\times10^{-2})(1.0\times10^{-3}) \approx 1.1\times10^{-7}\ \text{J},
$$

which agrees. Typical capacitances are tiny in SI units, which is why microfarads and picofarads are the practical units.

</div>

---

## Capacitors in Parallel and Series

For capacitors in parallel, the voltage across each capacitor is the same and charges add:

$$
C_{\text{eq}} = C_1+C_2+C_3+\cdots.
$$

For capacitors in series, each capacitor carries the same charge magnitude and voltages add:

$$
\frac{1}{C_{\text{eq}}}=\frac{1}{C_1}+\frac{1}{C_2}+\frac{1}{C_3}+\cdots.
$$

Series combinations have an equivalent capacitance smaller than any individual capacitor in the chain. Parallel combinations have an equivalent capacitance larger than any individual capacitor in the group.


```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (-4,1) to[C=$C_1$] (-2.5,1) to[C=$C_2$] (-1,1); \node at (-2.5,1.8) {series};
\draw[thick] (1,1)--(1.5,1)--(1.5,1.8) to[C=$C_1$] (3.5,1.8)--(3.5,1)--(4,1);
\draw[thick] (1.5,1)--(1.5,0.2) to[C=$C_2$] (3.5,0.2)--(3.5,1); \node at (2.5,-0.45) {parallel};
\end{tikzpicture}
```


<div class="theorem-box">

**Proof (Capacitors in Series and Parallel).** In parallel, every capacitor is connected across the same two nodes, so each has the same voltage $$\Delta V$$. The total charge supplied is

$$
Q_{\text{tot}}=Q_1+Q_2+\cdots=C_1\Delta V+C_2\Delta V+\cdots.
$$

Since $$Q_{\text{tot}}=C_{\text{eq}}\Delta V$$,

$$
C_{\text{eq}}=C_1+C_2+\cdots.
$$

In series, each capacitor carries the same charge magnitude $$Q$$ because charge cannot pile up indefinitely on the internal connecting plates. The total voltage is

$$
\Delta V_{\text{tot}}=\Delta V_1+\Delta V_2+\cdots
=\frac{Q}{C_1}+\frac{Q}{C_2}+\cdots.
$$

Since $$\Delta V_{\text{tot}}=Q/C_{\text{eq}}$$,

$$
\frac{Q}{C_{\text{eq}}}=Q\left(\frac{1}{C_1}+\frac{1}{C_2}+\cdots\right).
$$

Cancel $$Q$$:

$$
\frac{1}{C_{\text{eq}}}=\frac{1}{C_1}+\frac{1}{C_2}+\cdots.
$$

</div>

<div class="theorem-box">

**Example.** A $$12\ \text{V}$$ battery is connected to a network of three capacitors: $$C_1 = 2.0\ \mu\text{F}$$ in series with the parallel combination of $$C_2 = 3.0\ \mu\text{F}$$ and $$C_3 = 6.0\ \mu\text{F}$$. Find the equivalent capacitance, the total charge drawn from the battery, and the charge and voltage on each capacitor.

First collapse the parallel pair $$C_2 \parallel C_3$$:

$$
C_{23} = C_2 + C_3 = 3.0 + 6.0 = 9.0\ \mu\text{F}.
$$

Now $$C_1$$ is in series with $$C_{23}$$:

$$
\frac{1}{C_{\text{eq}}} = \frac{1}{C_1} + \frac{1}{C_{23}} = \frac{1}{2.0} + \frac{1}{9.0} = \frac{9 + 2}{18} = \frac{11}{18}\ \mu\text{F}^{-1},
$$

so

$$
C_{\text{eq}} = \frac{18}{11} \approx 1.64\ \mu\text{F}.
$$

The total charge drawn from the battery is

$$
Q_{\text{tot}} = C_{\text{eq}}\,\Delta V = (1.64\ \mu\text{F})(12\ \text{V}) \approx 19.6\ \mu\text{C}.
$$

Because $$C_1$$ and $$C_{23}$$ are in series, each carries this same charge: $$Q_1 = Q_{23} = 19.6\ \mu\text{C}$$. Their voltages are

$$
\Delta V_1 = \frac{Q_1}{C_1} = \frac{19.6}{2.0} \approx 9.8\ \text{V}, \qquad
\Delta V_{23} = \frac{Q_{23}}{C_{23}} = \frac{19.6}{9.0} \approx 2.2\ \text{V}.
$$

As a check, $$\Delta V_1 + \Delta V_{23} = 9.8 + 2.2 = 12\ \text{V}$$, matching the battery. The parallel pair shares the voltage $$\Delta V_{23} = 2.2\ \text{V}$$, so

$$
Q_2 = C_2\,\Delta V_{23} = (3.0)(2.2) \approx 6.5\ \mu\text{C}, \qquad
Q_3 = C_3\,\Delta V_{23} = (6.0)(2.2) \approx 13.1\ \mu\text{C}.
$$

These add to $$Q_2 + Q_3 \approx 19.6\ \mu\text{C} = Q_{23}$$, as they must. The smaller series capacitor takes the larger share of the voltage, while in the parallel branch the larger capacitor takes the larger share of the charge.

</div>

---

## Energy Stored in a Capacitor

Charging a capacitor requires work because later charge must be moved onto plates that already have a potential difference. The stored energy is

$$
U = \frac{1}{2}Q\Delta V.
$$

Using $$Q=C\Delta V$$, equivalent forms are

$$
U = \frac{Q^2}{2C}
$$

and

$$
U = \frac{1}{2}C(\Delta V)^2.
$$

The energy density in an electric field is

$$
u_E = \frac{1}{2}\varepsilon_0 E^2.
$$

For a parallel-plate capacitor, multiplying this density by the volume $$Ad$$ between the plates gives the same total energy.

<div class="theorem-box">

**Proof (Capacitor Energy).** When the capacitor already has charge $$q$$, its voltage is

$$
V=\frac{q}{C}.
$$

Bringing in a tiny additional charge $$dq$$ requires work

$$
dW=V\,dq=\frac{q}{C}\,dq.
$$

Integrate from $$0$$ to $$Q$$:

$$
U=\int_0^Q \frac{q}{C}\,dq=\frac{Q^2}{2C}.
$$

Using $$Q=C\Delta V$$ gives

$$
U=\frac{1}{2}Q\Delta V=\frac{1}{2}C(\Delta V)^2.
$$

For parallel plates,

$$
U=\frac{1}{2}C(\Delta V)^2
=\frac{1}{2}\left(\frac{\varepsilon_0 A}{d}\right)(Ed)^2
=\frac{1}{2}\varepsilon_0 E^2(Ad).
$$

Since $$Ad$$ is the volume of the field region,

$$
u_E=\frac{U}{Ad}=\frac{1}{2}\varepsilon_0 E^2.
$$

</div>

<div class="theorem-box">

**Proof (Attractive Force Between Capacitor Plates).** The two plates carry opposite charge, so they attract. A natural but wrong guess is $$F = QE$$, where $$E = \sigma/\varepsilon_0$$ is the field between the plates. The subtlety: a plate cannot exert a force on itself. The force on the positive plate comes only from the field produced by the *other* plate, which is half the total:

$$
E_{\text{single plate}} = \frac{\sigma}{2\varepsilon_0} = \frac{E}{2}.
$$

So the force on the plate of charge $$Q$$ is

$$
F = Q\,E_{\text{single plate}} = Q\cdot\frac{E}{2} = \tfrac{1}{2}QE.
$$

Writing $$E = \sigma/\varepsilon_0 = Q/(\varepsilon_0 A)$$,

$$
F = \tfrac{1}{2}Q\cdot\frac{Q}{\varepsilon_0 A} = \frac{Q^2}{2\varepsilon_0 A}.
$$

The same result follows from energy: at fixed charge, $$U = Q^2 d/(2\varepsilon_0 A)$$, and the attractive force is $$F = -\,dU/dd = Q^2/(2\varepsilon_0 A)$$ (the minus sign reflecting that the field pulls the plates together, decreasing $$d$$). Both routes confirm the factor of $$\tfrac12$$.

</div>

---

## Dielectrics

A **dielectric** is an insulating material placed between capacitor plates. It polarizes in an electric field, reducing the effective field for a given free charge. If the dielectric completely fills the gap, the capacitance becomes

$$
C = \kappa C_0,
$$

where $$C_0$$ is the vacuum capacitance and $$\kappa$$ is the dielectric constant.

For a parallel-plate capacitor filled with dielectric,

$$
C = \frac{\kappa\varepsilon_0 A}{d}.
$$

If a charged capacitor is disconnected from a battery, $$Q$$ stays constant when a dielectric is inserted, so $$\Delta V=Q/C$$ decreases. If it remains connected to a battery, $$\Delta V$$ stays constant and additional charge flows onto the plates.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[very thick] (-3,1.2)--(3,1.2); \draw[very thick] (-3,-1.2)--(3,-1.2); \draw[fill=yellow!20] (-1.2,-1.1) rectangle (1.2,1.1); \node at (0,0) {dielectric};
\foreach \x in {-0.8,0,0.8}{\draw[->, blue] (\x,0.6)--(\x,-0.6);} \node at (0,-1.7) {polarization reduces the internal field};
\end{tikzpicture}
```


<div class="theorem-box">

**Example.** A capacitor has vacuum capacitance $$C_0 = 4.0\ \mu\text{F}$$ and is charged using a $$V_0 = 100\ \text{V}$$ battery. A dielectric slab with $$\kappa = 2.5$$ is then inserted to fill the gap, raising the capacitance to $$C = \kappa C_0 = 10.0\ \mu\text{F}$$. Analyze two scenarios.

**(a) Battery disconnected before insertion ($$Q$$ fixed).** Initially

$$
Q = C_0 V_0 = (4.0\ \mu\text{F})(100\ \text{V}) = 400\ \mu\text{C}, \qquad
U_0 = \tfrac{1}{2}C_0 V_0^2 = \tfrac{1}{2}(4.0)(100)^2 = 2.0\times10^{4}\ \mu\text{J} = 0.020\ \text{J}.
$$

With the battery gone, $$Q$$ cannot change. The voltage drops:

$$
V = \frac{Q}{C} = \frac{400\ \mu\text{C}}{10.0\ \mu\text{F}} = 40\ \text{V},
$$

and the stored energy becomes

$$
U = \frac{Q^2}{2C} = \frac{U_0}{\kappa} = \frac{0.020}{2.5} = 8.0\times10^{-3}\ \text{J}.
$$

Energy *decreases* by $$0.012\ \text{J}$$. The dielectric is polarized and pulled into the gap, so the field does positive work on it as it slides in; that energy leaves the capacitor (the slab would have to be held back to keep it from accelerating in).

**(b) Battery left connected ($$V$$ fixed).** Now $$V = V_0 = 100\ \text{V}$$ stays clamped. The charge rises:

$$
Q' = C V = (10.0\ \mu\text{F})(100\ \text{V}) = 1000\ \mu\text{C} = \kappa Q,
$$

and the energy becomes

$$
U' = \tfrac{1}{2}C V^2 = \kappa U_0 = 2.5(0.020) = 0.050\ \text{J}.
$$

Energy *increases* by $$0.030\ \text{J}$$. The bookkeeping: the battery pushes additional charge $$\Delta Q = Q' - Q = 600\ \mu\text{C}$$ through the potential $$V$$, doing work

$$
W_{\text{batt}} = V\,\Delta Q = (100)(600\ \mu\text{C}) = 0.060\ \text{J}.
$$

Of this, $$0.030\ \text{J}$$ is stored in the capacitor and the remaining $$0.030\ \text{J}$$ goes into work done on/by the dielectric as it is drawn in (and dissipation). So whether energy goes up or down depends entirely on *what is held fixed*.

</div>

---

## Cylindrical and Spherical Capacitors

The parallel-plate result is one geometry, but the same method works for any capacitor with enough symmetry.

:::strategy{title="Capacitance from symmetry"}
1. Find the field between the conductors with Gauss's law.
2. Integrate the field to get the potential difference $$\Delta V$$.
3. Use $$C = Q/\Delta V$$.
:::

<div class="theorem-box">

**Proof (Cylindrical Capacitor).** Consider two coaxial conducting cylinders of length $$L$$, inner radius $$a$$ and outer radius $$b$$, with $$L \gg b$$ so end effects are negligible.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[fill=blue!10] (0,0) circle (0.7); \draw[thick] (0,0) circle (2.0); \draw[<->] (0,0)--(0.7,0) node[midway,below] {$a$}; \draw[<->] (0,0)--(2,0) node[midway,above] {$b$};
\foreach \a in {0,45,...,315}{\draw[->, red] (\a:0.8)--(\a:1.7);} \node at (0,-2.5) {coaxial cylindrical capacitor};
\end{tikzpicture}
```
 

Put charge $$+Q$$ on the inner cylinder and $$-Q$$ on the outer. By cylindrical symmetry, choose a coaxial Gaussian cylinder of radius $$r$$ (with $$a < r < b$$) and length $$L$$. Only the curved side has flux, so Gauss's law gives

$$
E(2\pi r L) = \frac{Q}{\varepsilon_0} \quad\Rightarrow\quad E = \frac{Q}{2\pi\varepsilon_0 L\,r},
$$

pointing radially outward. The potential difference (inner relative to outer) is

$$
\Delta V = -\int_{b}^{a} E\,dr = \int_{a}^{b} \frac{Q}{2\pi\varepsilon_0 L}\frac{dr}{r} = \frac{Q}{2\pi\varepsilon_0 L}\ln\!\frac{b}{a}.
$$

Therefore

$$
C = \frac{Q}{\Delta V} = \frac{2\pi\varepsilon_0 L}{\ln(b/a)}.
$$

The capacitance grows with length and shrinks as the radius ratio $$b/a$$ increases. This is the model for a coaxial cable.

</div>

<div class="theorem-box">

**Proof (Spherical Capacitor).** Consider two concentric conducting spheres of radii $$a < b$$, with $$+Q$$ on the inner sphere and $$-Q$$ on the outer shell.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[fill=blue!10] (0,0) circle (0.8); \draw[thick] (0,0) circle (2.0); \draw[<->] (0,0)--(0.8,0) node[midway,below] {$a$}; \draw[<->] (0,0)--(2,0) node[midway,above] {$b$}; \node at (0,-2.5) {concentric spherical capacitor};
\end{tikzpicture}
```
 

By spherical symmetry, a Gaussian sphere of radius $$r$$ (with $$a < r < b$$) gives

$$
E(4\pi r^2) = \frac{Q}{\varepsilon_0} \quad\Rightarrow\quad E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}.
$$

The potential difference is

$$
\Delta V = \int_{a}^{b} E\,dr = \frac{Q}{4\pi\varepsilon_0}\int_{a}^{b}\frac{dr}{r^2} = \frac{Q}{4\pi\varepsilon_0}\left(\frac{1}{a}-\frac{1}{b}\right) = \frac{Q}{4\pi\varepsilon_0}\frac{b-a}{ab}.
$$

Therefore

$$
C = \frac{Q}{\Delta V} = 4\pi\varepsilon_0\,\frac{ab}{b-a}.
$$

**Isolated-sphere limit.** Let the outer sphere recede to infinity, $$b\to\infty$$. Then $$ab/(b-a) = a/(1 - a/b) \to a$$, so

$$
C = 4\pi\varepsilon_0\,a.
$$

This is the self-capacitance of an isolated conducting sphere of radius $$a$$, consistent with $$V = Q/(4\pi\varepsilon_0 a)$$ and $$C = Q/V$$.

</div>

<div class="theorem-box">

**Example.** Two isolated conducting spheres, of radii $$a_1 = 3.0\ \text{cm}$$ and $$a_2 = 1.0\ \text{cm}$$, are far apart. The larger carries $$Q = 8.0\ \text{nC}$$ and the smaller is uncharged. They are then connected by a long thin wire. Find the final charge on each sphere and compare their surface fields.

Once connected, the spheres reach a common potential. Treating each as an isolated sphere (far apart, so each keeps its own $$V = Q/(4\pi\varepsilon_0 a)$$),

$$
\frac{q_1}{a_1} = \frac{q_2}{a_2} \quad\Rightarrow\quad \frac{q_1}{q_2} = \frac{a_1}{a_2} = 3.0,
$$

and charge is conserved, $$q_1 + q_2 = 8.0\ \text{nC}$$. Solving,

$$
q_1 = 6.0\ \text{nC}, \qquad q_2 = 2.0\ \text{nC}.
$$

So charge splits in proportion to radius. The surface field of each sphere is $$E = q/(4\pi\varepsilon_0 a^2) = V/a$$. Since both share the same $$V$$,

$$
\frac{E_2}{E_1} = \frac{a_1}{a_2} = 3.0,
$$

so the *smaller* sphere has the larger surface field, by the factor $$a_1/a_2$$. This is the quantitative version of "charge density is larger at sharp points": a small radius of curvature concentrates the field, which is why sharp tips ionize the surrounding air and discharge first (the principle behind lightning rods).

</div>

---

## Boundary Ideas

At a conductor surface in electrostatic equilibrium, the tangential component of electric field is zero. Otherwise charges would move along the surface. The normal component just outside the surface is set by surface charge density:

$$
E_{\perp,\text{outside}} - E_{\perp,\text{inside}} = \frac{\sigma}{\varepsilon_0}.
$$

Since $$E_{\perp,\text{inside}}=0$$ in the conductor,

$$
E_{\perp,\text{outside}}=\frac{\sigma}{\varepsilon_0}.
$$

---

:::equations
| Idea | Equation |
| --- | --- |
| Definition of capacitance | $$C = \dfrac{Q}{\Delta V}$$ |
| Parallel-plate capacitor | $$C = \dfrac{\varepsilon_0 A}{d}$$ |
| Cylindrical capacitor | $$C = \dfrac{2\pi\varepsilon_0 L}{\ln(b/a)}$$ |
| Spherical capacitor | $$C = 4\pi\varepsilon_0\dfrac{ab}{b-a}$$ |
| Isolated sphere | $$C = 4\pi\varepsilon_0 a$$ |
| Capacitors in parallel | $$C_{\text{eq}} = C_1 + C_2 + \cdots$$ |
| Capacitors in series | $$\dfrac{1}{C_{\text{eq}}} = \dfrac{1}{C_1} + \dfrac{1}{C_2} + \cdots$$ |
| Stored energy | $$U = \tfrac{1}{2}Q\Delta V = \dfrac{Q^2}{2C} = \tfrac{1}{2}C(\Delta V)^2$$ |
| Electric energy density | $$u_E = \tfrac{1}{2}\varepsilon_0 E^2$$ |
| Dielectric-filled capacitor | $$C = \kappa C_0$$ |
| Field at conductor surface | $$E = \dfrac{\sigma}{\varepsilon_0}$$ |
| Force between plates | $$F = \dfrac{Q^2}{2\varepsilon_0 A} = \tfrac{1}{2}QE$$ |
:::

## Practice

### FRQ

::::frq{id=ap-physics-c-em-condcap-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
