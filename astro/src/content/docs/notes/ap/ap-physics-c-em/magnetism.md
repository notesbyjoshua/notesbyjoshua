---
title: "Unit 5: Magnetic Fields and Electromagnetism"
sidebar:
  order: 5
---

---

Magnetism describes forces on moving charges and currents. Unlike electric fields, magnetic fields do no work on a point charge because the magnetic force is always perpendicular to the charge's velocity. This unit focuses on Lorentz forces, fields produced by currents, and Ampere's law.

---

:::variables
- $$\vec{B}$$ = magnetic field (Units: tesla, $$\text{T}$$)
- $$q$$ = charge
- $$\vec{v}$$ = velocity
- $$I$$ = current
- $$L$$ = length of wire in a magnetic field
- $$\mu_0$$ = permeability of free space = $$4\pi\times10^{-7}\ \text{T}\cdot\text{m/A}$$
- $$\Phi_B$$ = magnetic flux
:::

---

## Magnetic Force on a Moving Charge

A charge moving through a magnetic field feels the magnetic part of the Lorentz force:

$$
\vec{F}_B = q\vec{v}\times\vec{B}.
$$

The magnitude is

$$
F_B = \lvert q \rvert vB\sin\theta.
$$

The force is perpendicular to both $$\vec{v}$$ and $$\vec{B}$$. For positive charges, use the right-hand rule for $$\vec{v}\times\vec{B}$$. For negative charges, reverse the direction.

The full electric and magnetic force is

$$
\vec{F}=q\vec{E}+q\vec{v}\times\vec{B}.
$$

Since $$\vec{F}_B$$ is always perpendicular to $$\vec{v}$$, it does no work: $$P = \vec{F}_B\cdot\vec{v} = q(\vec{v}\times\vec{B})\cdot\vec{v} = 0$$, since $$\vec{v}\times\vec{B}$$ is perpendicular to $$\vec{v}$$. A magnetic field can change a charge's *direction* but never its *speed*.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[->, very thick, blue] (0,0)--(2.5,0) node[right] {$\vec v$}; \draw[->, very thick, red] (0,0)--(0,2.2) node[above] {$\vec B$}; \draw[->, very thick, purple] (0,0)--(-1.6,-1.6) node[below left] {$\vec F=q\vec v\times\vec B$}; \node at (0,-2.3) {right-hand-rule vector triad};
\end{tikzpicture}
```


<div class="theorem-box">

**Example.** A proton ($$q = +1.6\times10^{-19}\ \text{C}$$) moves at $$v = 4.0\times10^5\ \text{m/s}$$ in the $$+x$$ direction through a uniform field $$\vec{B} = 0.50\ \text{T}$$ pointing in the $$+y$$ direction. Find the magnitude and direction of the magnetic force.

The velocity is perpendicular to the field ($$\theta = 90^\circ$$), so the magnitude is

$$
F_B = \lvert q\rvert vB\sin 90^\circ = (1.6\times10^{-19})(4.0\times10^5)(0.50) = 3.2\times10^{-14}\ \text{N}.
$$

For the direction, evaluate $$\vec{v}\times\vec{B} = (v\hat{x})\times(B\hat{y}) = vB\,(\hat{x}\times\hat{y}) = vB\,\hat{z}$$. Since the charge is positive, $$\vec{F}_B$$ points in $$+z$$ (out of the page if $$x$$ is right and $$y$$ is up). For an electron with the same velocity, the force would point in $$-z$$.

</div>

---

## Charged Particles in Uniform Magnetic Fields

If a charge moves perpendicular to a uniform magnetic field, the magnetic force provides centripetal force:

$$
\lvert q \rvert vB=\frac{mv^2}{r}.
$$

Thus

$$
r=\frac{mv}{\lvert q\rvert B}.
$$

The angular frequency is

$$
\omega=\frac{\lvert q \rvert B}{m},
$$

and the period is

$$
T=\frac{2\pi m}{\lvert q \rvert B}.
$$

If the velocity has a component parallel to $$\vec{B}$$, that component is unchanged and the path becomes a helix.

Notice that the period $$T = 2\pi m/(\lvert q\rvert B)$$ does not depend on the speed or the radius: a faster particle simply travels a proportionally larger circle in the same time. This speed-independence is the principle behind the cyclotron.

<div class="theorem-box">

**Example.** An electron ($$m = 9.11\times10^{-31}\ \text{kg}$$, $$\lvert q\rvert = 1.6\times10^{-19}\ \text{C}$$) moves at $$v = 2.0\times10^6\ \text{m/s}$$ perpendicular to a uniform field $$B = 1.5\times10^{-3}\ \text{T}$$. Find the radius of its circular path, the period, and the frequency.

The magnetic force supplies the centripetal force, $$\lvert q\rvert vB = mv^2/r$$, so

$$
r = \frac{mv}{\lvert q\rvert B} = \frac{(9.11\times10^{-31})(2.0\times10^6)}{(1.6\times10^{-19})(1.5\times10^{-3})} = \frac{1.82\times10^{-24}}{2.4\times10^{-22}} \approx 7.6\times10^{-3}\ \text{m}.
$$

The period is independent of $$v$$:

$$
T = \frac{2\pi m}{\lvert q\rvert B} = \frac{2\pi(9.11\times10^{-31})}{(1.6\times10^{-19})(1.5\times10^{-3})} = \frac{5.72\times10^{-30}}{2.4\times10^{-22}} \approx 2.4\times10^{-8}\ \text{s}.
$$

The frequency (the cyclotron frequency) is

$$
f = \frac{1}{T} = \frac{\lvert q\rvert B}{2\pi m} \approx 4.2\times10^{7}\ \text{Hz}.
$$

</div>

---

## Velocity Selectors and Mass Spectrometers

When electric and magnetic forces oppose each other,

$$
qE=qvB.
$$

Only particles with speed

$$
v=\frac{E}{B}
$$

pass through undeflected. This is the basic idea of a velocity selector.

After velocity selection, a magnetic field can separate particles by mass-to-charge ratio because

$$
r=\frac{mv}{\lvert q \rvert B}.
$$


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (-4,1.2)--(1,1.2); \draw[thick] (-4,-1.2)--(1,-1.2); \foreach \x in {-3,-2,-1,0}{\node at (\x,0) {$\times$};} \draw[->, blue, thick] (-4.2,0)--(1.2,0) node[right] {$v$}; \draw[->, red, thick] (-1,0)--(-1,0.9) node[above] {$F_E$}; \draw[->, purple, thick] (-1,0)--(-1,-0.9) node[below] {$F_B$}; \draw[blue, thick] (2,0) arc[start angle=180,end angle=-80,radius=1.2]; \node at (3,-1) {mass spectrometer};
\end{tikzpicture}
```


<div class="theorem-box">

**Example.** A velocity selector uses crossed fields $$E = 3.0\times10^4\ \text{V/m}$$ and $$B_1 = 0.10\ \text{T}$$. The selected beam (singly charged ions, $$q = 1.6\times10^{-19}\ \text{C}$$) then enters a mass-spectrometer region with field $$B_2 = 0.20\ \text{T}$$. Find the selected speed, and the radii of two isotopes of mass $$m_1 = 3.32\times10^{-26}\ \text{kg}$$ and $$m_2 = 3.65\times10^{-26}\ \text{kg}$$.

In the selector, the electric and magnetic forces balance, $$qE = qvB_1$$, so only ions with

$$
v = \frac{E}{B_1} = \frac{3.0\times10^4}{0.10} = 3.0\times10^5\ \text{m/s}
$$

pass straight through. In the spectrometer the path radius is $$r = mv/(qB_2)$$:

$$
r_1 = \frac{(3.32\times10^{-26})(3.0\times10^5)}{(1.6\times10^{-19})(0.20)} = \frac{9.96\times10^{-21}}{3.2\times10^{-20}} \approx 0.311\ \text{m},
$$

$$
r_2 = \frac{(3.65\times10^{-26})(3.0\times10^5)}{(1.6\times10^{-19})(0.20)} = \frac{1.095\times10^{-20}}{3.2\times10^{-20}} \approx 0.342\ \text{m}.
$$

The heavier isotope curves on the larger circle. The two beams land $$2(r_2 - r_1) \approx 6.2\ \text{cm}$$ apart on the detector, which is how a mass spectrometer resolves isotopes.

</div>

---

## Magnetic Force on a Current-Carrying Wire

A wire segment carrying current $$I$$ in a magnetic field feels

$$
\vec{F}=I\vec{L}\times\vec{B},
$$

where $$\vec{L}$$ points in the direction of conventional current and has magnitude equal to the length of wire in the field.

The magnitude is

$$
F=ILB\sin\theta.
$$

This force comes from the magnetic forces on the moving charges inside the wire: each carrier feels $$q\vec{v}_d\times\vec{B}$$, and summing over all carriers in a length $$L$$ (with $$I = nqv_d A_{\text{cross}}$$) gives $$\vec{F} = I\vec{L}\times\vec{B}$$.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[very thick] (-3,0)--(3,0); \draw[->, blue, thick] (-2,0.2)--(-1,0.2) node[above] {$I$}; \foreach \x in {-2,-1,0,1,2}{\node at (\x,-0.7) {$\times$};} \draw[->, red, thick] (0,0)--(0,1.5) node[above] {$\vec F=I\vec L\times\vec B$};
\end{tikzpicture}
```


<div class="theorem-box">

**Example.** A straight wire of length $$L = 0.40\ \text{m}$$ carries current $$I = 8.0\ \text{A}$$ in the $$+x$$ direction. It sits in a uniform field $$\vec{B} = 0.25\ \text{T}$$ pointing into the page ($$-z$$, with $$x$$ to the right and $$y$$ up). Find the magnitude and direction of the force.

The current direction ($$+x$$) is perpendicular to $$\vec{B}$$ ($$-z$$), so $$\theta = 90^\circ$$ and

$$
F = ILB\sin 90^\circ = (8.0)(0.40)(0.25) = 0.80\ \text{N}.
$$

For the direction, $$\vec{L}\times\vec{B} = (L\hat{x})\times(-B\hat{z}) = -LB\,(\hat{x}\times\hat{z}) = -LB(-\hat{y}) = +LB\,\hat{y}$$. So the force points in $$+y$$ (upward). Check with the right-hand rule: fingers point along the current ($$+x$$), curl toward $$\vec{B}$$ (into page), thumb points up. The force is $$0.80\ \text{N}$$ upward.

</div>

---

## Torque on a Current Loop

A current loop in a magnetic field experiences a torque. For a loop with $$N$$ turns, current $$I$$, area $$A$$, and magnetic moment

$$
\vec{\mu}=NI\vec{A},
$$

the torque is

$$
\vec{\tau}=\vec{\mu}\times\vec{B}.
$$

Its magnitude is

$$
\tau=NIAB\sin\theta.
$$

The potential energy of a magnetic dipole in a uniform magnetic field is

$$
U=-\vec{\mu}\cdot\vec{B} = -\mu B\cos\theta.
$$

Here $$\theta$$ is the angle between $$\vec{\mu}$$ (the loop's normal, by the right-hand rule) and $$\vec{B}$$. The energy is lowest when $$\vec{\mu}$$ is aligned with $$\vec{B}$$ ($$\theta = 0$$, $$U = -\mu B$$, stable) and highest when anti-aligned ($$\theta = 180^\circ$$, $$U = +\mu B$$, unstable). The torque always tries to rotate $$\vec{\mu}$$ into alignment with $$\vec{B}$$.

<div class="theorem-box">

**Example.** A rectangular coil with $$N = 50$$ turns, sides $$0.080\ \text{m}\times0.050\ \text{m}$$, carries $$I = 2.0\ \text{A}$$ in a uniform field $$B = 0.30\ \text{T}$$. (a) Find the magnetic moment and the maximum torque. (b) Find the dipole energy when $$\vec{\mu}$$ is aligned with $$\vec{B}$$ and when it is perpendicular to $$\vec{B}$$.

The loop area is $$A = (0.080)(0.050) = 4.0\times10^{-3}\ \text{m}^2$$, so the magnetic moment is

$$
\mu = NIA = (50)(2.0)(4.0\times10^{-3}) = 0.40\ \text{A}\cdot\text{m}^2.
$$

The torque $$\tau = NIAB\sin\theta = \mu B\sin\theta$$ is maximum at $$\theta = 90^\circ$$ (plane of the loop parallel to $$\vec{B}$$):

$$
\tau_{\max} = \mu B = (0.40)(0.30) = 0.12\ \text{N}\cdot\text{m}.
$$

For the energy $$U = -\mu B\cos\theta$$: when $$\vec{\mu}\parallel\vec{B}$$ ($$\theta = 0$$),

$$
U_{\parallel} = -\mu B = -(0.40)(0.30) = -0.12\ \text{J},
$$

and when $$\vec{\mu}\perp\vec{B}$$ ($$\theta = 90^\circ$$),

$$
U_{\perp} = -\mu B\cos 90^\circ = 0\ \text{J}.
$$

Rotating the dipole from aligned to perpendicular requires an external agent to supply $$\Delta U = 0 - (-0.12) = +0.12\ \text{J}$$.

</div>

---

## Magnetic Fields from Currents

The magnetic field around a long straight wire is

$$
B=\frac{\mu_0 I}{2\pi r}.
$$

The direction follows the right-hand rule: thumb in the direction of conventional current, curled fingers show the magnetic field direction.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\fill (0,0) circle (3pt); \node at (0.35,0.25) {$I$ out}; \foreach \r in {0.6,1.1,1.6}{\draw[->, blue] (\r,0) arc[start angle=0,end angle=300,radius=\r];} \node at (0,-2.1) {magnetic field circles the wire};
\end{tikzpicture}
```


At the center of a circular loop of radius $$R$$,

$$
B=\frac{\mu_0 I}{2R}.
$$

For $$N$$ identical turns,

$$
B=\frac{\mu_0 NI}{2R}.
$$

Inside a long ideal solenoid,

$$
B=\mu_0 nI,
$$

where $$n=N/L$$ is turns per unit length.

---

## Biot-Savart Law

For a current element, the magnetic field contribution is

$$
d\vec{B}=\frac{\mu_0}{4\pi}\frac{I\,d\vec{\ell}\times\hat{r}}{r^2}.
$$

Use Biot-Savart when symmetry is not enough for Ampere's law but the current geometry is integrable. The cross product means only the component of $$d\vec{\ell}$$ perpendicular to the line from source to field point contributes.

<div class="theorem-box">

**Proof (Field of an infinite straight wire from Biot–Savart).** Place the wire along the $$x$$-axis carrying current $$I$$, and find the field at a point $$P$$ a perpendicular distance $$r$$ from the wire. Let a current element $$I\,d\vec{\ell} = I\,dx\,\hat{x}$$ sit at position $$x$$; the vector from the element to $$P$$ has magnitude $$\sqrt{x^2 + r^2}$$.

The magnitude of $$d\vec{\ell}\times\hat{r}$$ is $$dx\sin\phi$$, where $$\phi$$ is the angle between the wire and the line to $$P$$. From the geometry, $$\sin\phi = r/\sqrt{x^2 + r^2}$$. Every element contributes field in the *same* direction (out of the page, by the right-hand rule), so the magnitudes add:

$$
dB = \frac{\mu_0 I}{4\pi}\frac{dx\sin\phi}{x^2 + r^2} = \frac{\mu_0 I}{4\pi}\frac{r\,dx}{(x^2 + r^2)^{3/2}}.
$$

Integrate over the whole wire, $$x$$ from $$-\infty$$ to $$+\infty$$:

$$
B = \frac{\mu_0 I r}{4\pi}\int_{-\infty}^{\infty}\frac{dx}{(x^2 + r^2)^{3/2}}.
$$

The standard integral is

$$
\int\frac{dx}{(x^2 + r^2)^{3/2}} = \frac{x}{r^2\sqrt{x^2 + r^2}},
$$

which you can verify by the substitution $$x = r\tan\phi$$, $$dx = r\sec^2\phi\,d\phi$$, giving $$\int \frac{r\sec^2\phi\,d\phi}{r^3\sec^3\phi} = \frac{1}{r^2}\int\cos\phi\,d\phi = \frac{\sin\phi}{r^2}$$. Evaluating from $$-\infty$$ to $$+\infty$$, the factor $$\dfrac{x}{\sqrt{x^2+r^2}}$$ runs from $$-1$$ to $$+1$$:

$$
\int_{-\infty}^{\infty}\frac{dx}{(x^2 + r^2)^{3/2}} = \frac{1}{r^2}\big[1 - (-1)\big] = \frac{2}{r^2}.
$$

Therefore

$$
B = \frac{\mu_0 I r}{4\pi}\cdot\frac{2}{r^2} = \frac{\mu_0 I}{2\pi r}.
$$

</div>

<div class="theorem-box">

**Proof (On-axis field of a circular loop from Biot–Savart).** A circular loop of radius $$R$$ carries current $$I$$. Find $$\vec{B}$$ at a point $$P$$ on the axis, a distance $$x$$ from the center. Each element $$I\,d\vec{\ell}$$ is perpendicular to the line of length $$s = \sqrt{x^2 + R^2}$$ joining it to $$P$$, so $$\lvert d\vec{\ell}\times\hat{r} \rvert = d\ell$$ and

$$
dB = \frac{\mu_0 I}{4\pi}\frac{d\ell}{x^2 + R^2}.
$$

By symmetry, the components of $$d\vec{B}$$ perpendicular to the axis cancel when summed around the loop; only the axial components survive. The axial component is $$dB_x = dB\cos\alpha$$, where $$\cos\alpha = R/\sqrt{x^2 + R^2}$$ (the angle between $$d\vec{B}$$ and the axis). Thus

$$
dB_x = \frac{\mu_0 I}{4\pi}\frac{d\ell}{x^2 + R^2}\cdot\frac{R}{\sqrt{x^2 + R^2}} = \frac{\mu_0 I R}{4\pi (x^2 + R^2)^{3/2}}\,d\ell.
$$

Everything in front of $$d\ell$$ is constant around the loop, so the integral just gives the circumference $$\oint d\ell = 2\pi R$$:

$$
B = \frac{\mu_0 I R}{4\pi (x^2 + R^2)^{3/2}}(2\pi R) = \frac{\mu_0 I R^2}{2(x^2 + R^2)^{3/2}}.
$$

At the center, $$x = 0$$:

$$
B = \frac{\mu_0 I R^2}{2(R^2)^{3/2}} = \frac{\mu_0 I R^2}{2R^3} = \frac{\mu_0 I}{2R},
$$

recovering the center-of-loop result.

</div>

---

## Ampere's Law

Ampere's law relates magnetic field circulation to enclosed current:

$$
\oint \vec{B}\cdot d\vec{\ell}=\mu_0 I_{\text{enc}}.
$$

It is most useful with high symmetry, such as long straight wires, solenoids, and toroids. Choose an Amperian loop so $$\vec{B}$$ is either constant and parallel to $$d\vec{\ell}$$ or perpendicular to it.

For a toroid with $$N$$ turns,

$$
B=\frac{\mu_0 NI}{2\pi r}
$$

inside the core, under the ideal toroid approximation.

<div class="theorem-box">

**Proof (Straight-wire field as an Ampère's-law check).** For an infinite straight wire, symmetry tells us $$\vec{B}$$ has constant magnitude on any circle of radius $$r$$ centered on the wire and points tangent to that circle (circular field lines). Choose such a circle as the Amperian loop. Then $$\vec{B}\parallel d\vec{\ell}$$ everywhere, and $$B$$ is constant, so

$$
\oint\vec{B}\cdot d\vec{\ell} = B\oint d\ell = B(2\pi r).
$$

The loop encloses the full current $$I$$, so Ampère's law gives

$$
B(2\pi r) = \mu_0 I \;\Rightarrow\; B = \frac{\mu_0 I}{2\pi r},
$$

matching the Biot–Savart result with far less work — symmetry did the integral for us.

</div>

<div class="theorem-box">

**Proof (Solenoid field from Ampère's law).** An ideal solenoid has $$n$$ turns per unit length carrying current $$I$$, with a uniform axial field inside and (ideally) zero field outside. Choose a rectangular Amperian loop with one side of length $$\ell$$ inside the solenoid parallel to the axis, the opposite side outside, and two short sides crossing the wall.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\foreach \x in {-3,-2.4,...,3}{\draw[blue] (\x,0) ellipse (0.28 and 0.9);} \draw[->, red, very thick] (-3.2,0)--(3.2,0) node[right] {$B$}; \draw[green!50!black, thick] (-1.5,-1.2) rectangle (1.5,1.2); \node at (0,1.55) {Amperian loop};
\end{tikzpicture}
```


Split $$\oint\vec{B}\cdot d\vec{\ell}$$ into the four legs:

- Inside leg (parallel to $$\vec{B}$$): contributes $$B\ell$$.
- Outside leg: $$\vec{B} = 0$$, contributes $$0$$.
- Two crossing legs: $$\vec{B}$$ is either zero (outside) or perpendicular to $$d\vec{\ell}$$ (inside), so each contributes $$0$$.

Therefore

$$
\oint\vec{B}\cdot d\vec{\ell} = B\ell.
$$

The current enclosed is the number of turns threading the loop, $$n\ell$$, each carrying $$I$$:

$$
I_{\text{enc}} = n\ell I.
$$

Ampère's law then gives

$$
B\ell = \mu_0 n\ell I \;\Rightarrow\; B = \mu_0 n I,
$$

independent of position inside — confirming the field is uniform.

</div>

<div class="theorem-box">

**Example.** A long cylindrical wire of radius $$a$$ carries a total current $$I$$ spread uniformly over its cross-section, so the current density is $$J = I/(\pi a^2)$$. Find $$B$$ at radius $$r < a$$ inside the conductor.

By symmetry the field is again circular, so for an Amperian circle of radius $$r < a$$, $$\oint\vec{B}\cdot d\vec{\ell} = B(2\pi r)$$. But this loop encloses only the fraction of current inside radius $$r$$:

$$
I_{\text{enc}} = J\,(\pi r^2) = \frac{I}{\pi a^2}\,\pi r^2 = I\frac{r^2}{a^2}.
$$

Ampère's law gives

$$
B(2\pi r) = \mu_0 I\frac{r^2}{a^2} \;\Rightarrow\; B = \frac{\mu_0 I r}{2\pi a^2}.
$$

So inside the conductor $$B\propto r$$ (rising linearly from zero on the axis), and at the surface $$r = a$$ this matches $$B = \mu_0 I/(2\pi a)$$, the external field, as it must.

</div>

---

## Magnetic Forces Between Parallel Wires

Two long parallel wires carrying currents $$I_1$$ and $$I_2$$ separated by distance $$d$$ exert forces on each other. The force per unit length is

$$
\frac{F}{L}=\frac{\mu_0 I_1I_2}{2\pi d}.
$$

Currents in the same direction attract. Currents in opposite directions repel.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[very thick] (-1.5,-2)--(-1.5,2); \draw[very thick] (1.5,-2)--(1.5,2); \draw[->, blue] (-1.8,-1.2)--(-1.8,1.2) node[above] {$I_1$}; \draw[->, blue] (1.8,-1.2)--(1.8,1.2) node[above] {$I_2$}; \draw[->, red, thick] (-1.5,0)--(-0.4,0); \draw[->, red, thick] (1.5,0)--(0.4,0); \node at (0,-2.4) {same-direction currents attract};
\end{tikzpicture}
```


<div class="theorem-box">

**Proof (Force per length between parallel wires).** Wire 1 carries $$I_1$$ and produces, at the location of wire 2 (distance $$d$$ away), a field of magnitude

$$
B_1 = \frac{\mu_0 I_1}{2\pi d}.
$$

This field is perpendicular to wire 2. The force on a length $$L$$ of wire 2 (carrying $$I_2$$) is $$\vec{F} = I_2\vec{L}\times\vec{B}_1$$, with magnitude (since $$\vec{L}\perp\vec{B}_1$$, $$\sin\theta = 1$$):

$$
F = I_2 L B_1 = I_2 L\frac{\mu_0 I_1}{2\pi d}.
$$

Dividing by $$L$$,

$$
\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}.
$$

The result is symmetric in $$I_1$$ and $$I_2$$, as Newton's third law requires. For the direction, apply the right-hand rule: if the currents are parallel (same direction), $$\vec{L}\times\vec{B}_1$$ points from wire 2 *toward* wire 1, so they **attract**; antiparallel currents **repel**.

</div>

<div class="theorem-box">

**Example.** Two parallel wires $$d = 0.020\ \text{m}$$ apart carry $$I_1 = 10\ \text{A}$$ and $$I_2 = 15\ \text{A}$$ in the same direction. Find the force per unit length and state whether it is attractive or repulsive.

$$
\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d} = \frac{(4\pi\times10^{-7})(10)(15)}{2\pi(0.020)} = \frac{(2\times10^{-7})(10)(15)}{0.020} = \frac{3.0\times10^{-5}}{0.020} = 1.5\times10^{-3}\ \text{N/m}.
$$

Here I used $$\dfrac{\mu_0}{2\pi} = \dfrac{4\pi\times10^{-7}}{2\pi} = 2\times10^{-7}\ \text{T}\cdot\text{m/A}$$. Since the currents run the same direction, the force is **attractive**: $$1.5\times10^{-3}\ \text{N}$$ per meter pulling the wires together.

</div>

---

## Magnetic Flux

Magnetic flux through a surface is

$$
\Phi_B=\int \vec{B}\cdot d\vec{A}.
$$

For a uniform field through a flat surface,

$$
\Phi_B=BA\cos\theta.
$$

Magnetic flux becomes central in [electromagnetic induction](/notes/ap/ap-physics-c-em/eminduction/).

---

:::equations
| Idea | Equation |
| --- | --- |
| Lorentz force | $$\vec{F} = q\vec{E} + q\vec{v}\times\vec{B}$$ |
| Magnetic force magnitude | $$F = \lvert q\rvert vB\sin\theta$$ |
| Radius in a $$B$$ field | $$r = \dfrac{mv}{\lvert q\rvert B}$$ |
| Period / cyclotron frequency | $$T = \dfrac{2\pi m}{\lvert q\rvert B}, \quad f = \dfrac{\lvert q\rvert B}{2\pi m}$$ |
| Velocity selector | $$v = \dfrac{E}{B}$$ |
| Force on a wire | $$\vec{F} = I\vec{L}\times\vec{B}, \quad F = ILB\sin\theta$$ |
| Magnetic moment | $$\vec{\mu} = NI\vec{A}$$ |
| Torque on a loop | $$\vec{\tau} = \vec{\mu}\times\vec{B}, \quad \tau = NIAB\sin\theta$$ |
| Dipole energy | $$U = -\vec{\mu}\cdot\vec{B} = -\mu B\cos\theta$$ |
| Field of straight wire | $$B = \dfrac{\mu_0 I}{2\pi r}$$ |
| Field on axis of loop | $$B = \dfrac{\mu_0 I R^2}{2(x^2 + R^2)^{3/2}}$$ |
| Field at center of loop | $$B = \dfrac{\mu_0 NI}{2R}$$ |
| Field inside solenoid | $$B = \mu_0 nI$$ |
| Field inside toroid | $$B = \dfrac{\mu_0 NI}{2\pi r}$$ |
| Biot–Savart law | $$d\vec{B} = \dfrac{\mu_0}{4\pi}\dfrac{I\,d\vec{\ell}\times\hat{r}}{r^2}$$ |
| Ampère's law | $$\oint\vec{B}\cdot d\vec{\ell} = \mu_0 I_{\text{enc}}$$ |
| Force between parallel wires | $$\dfrac{F}{L} = \dfrac{\mu_0 I_1 I_2}{2\pi d}$$ |
| Magnetic flux | $$\Phi_B = \int\vec{B}\cdot d\vec{A} = BA\cos\theta$$ |
:::

## Practice

### FRQ

::::frq{id=ap-physics-c-em-magnetism-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
