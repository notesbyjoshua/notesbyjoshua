---
title: "Electric Fields and Forces"
sidebar:
  order: 1
---

# Electric Fields and Forces

---

This unit is the foundation of electricity: how charge produces forces, how we describe those forces with fields, and how symmetry lets us compute fields efficiently. The subject is often called electrostatics when charges are at rest and magnetic effects from motion are absent or treated separately.

---

:::variables
- $$q$$ = charge (Units: Coulombs (C))
- $$e$$ = the magnitude charge of an electron/proton = $$1.602 \times 10^{-19} \text{ C}$$
- $$k$$ = Coulomb's constant = $$8.99 \times 10^9 \text{ N}\cdot\text{m}^2/\text{C}^2$$
- $$\varepsilon_0$$ = permittivity of free space = $$8.85 \times 10^{-12} \text{ C}^2/(\text{N}\cdot\text{m}^2)$$ (Equivalently, the units could also be written as $$\frac{F}{m}$$, F = Farads)
- $$E$$ = electric field (Units: $$\frac{N}{C}$$)
- $$\lambda$$ = charge per unit length (Units: $$\frac{C}{m}$$)
- $$\sigma$$ = charge per unit area (Units: $$\frac{C}{m^2}$$)
- $$\rho$$ = charge per unit volume (Units: $$\frac{C}{m^3}$$)
- $$\Phi_E$$ = electric flux (Units: $$\frac{N \times m^2}{C}$$)
:::

---

## Electric charge

Charge is a fundamental property of matter. **Protons** carry a positive charge and **electrons** a negative charge of the same magnitude. The elementary charge has magnitude

$$
e = 1.602 \times 10^{-19} \text{ C}.
$$

By convention, the proton’s charge is $$+e$$ and the electron’s is $$-e$$. The SI unit of charge is the coulomb (C).

In ordinary matter, charge is transferred by **moving electrons**; ion cores (with protons) do not hop between objects in classroom electrostatics. A positively charged object has lost electrons; a negatively charged one has gained them.

### Quantization of charge

Experiments (notably Millikan’s oil-drop experiment) show that the charge on any isolated object occurs in discrete steps. **Quantization of charge** means the total charge $$q$$ on a body satisfies

$$
q = n e, \quad n \in \mathbb{Z}.
$$

There is no known stable macroscopic object with charge that is a fraction of an electrons since $$n$$ is an integer. (Quarks carry fractional charge, but they are confined (meaning they have to be in pairs/trios); net observable charge remains integer multiples of $$e$$.)

---

## Conservation of charge

**Conservation of charge** states that the total charge in an isolated system stays constant over time. Charge is not created or destroyed; it is redistributed. Together with conservation of energy and momentum, this principle constrains what reactions and contact processes are possible and underlies much of circuit and field reasoning later in the course.

---

## Electroscopes, grounding, and charging

An **electroscope** uses thin metal leaves (or a similar mechanical indicator) that repel when they receive the same sign of charge, giving a rough measure of whether charge is present and sometimes how much.

- **Grounding** connects a conductor to the Earth (or another large reservoir). The Earth supplies or accepts electrons until the conductor reaches a common potential with the ground; in practice, a grounded object is often treated as neutral after the process finishes.
- **Charging by conduction** means direct contact. If a charged rod touches a neutral electroscope, charge shares between them; by conservation of charge, both end up with net charge of the same sign (not necessarily equal magnitude unless capacitances match, but the sign is shared in the simple picture).
- **Charging by induction** needs no transfer of charge from the rod to the electroscope if the rod never touches the scope. A charged object is brought near, polarizing the conductor; while the influence is present, the electroscope is grounded so charge can leave or enter; the ground connection is broken first, then the inducing object is removed. The electroscope retains a net charge opposite in sign to the inducer, because electrons were driven by the external field and then trapped when the path to ground was removed.

---

## Polarization

**Polarization** is the separation of positive and negative charge within a neutral object when a charged object is brought nearby. A charged object can polarize a neutral insulator or conductor: internal charge shifts so that one side of the material presents a net excess closer to the inducer. For example, a negative balloon near a wall pushes electrons in the wall slightly away, so the nearer surface acts more positive. The balloon and wall can attract even though the wall’s net charge is still zero—attraction without net charge on the neutral object is the usual signature of polarization.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[fill=gray!20] (2,-1.5) rectangle (2.35,1.5); \node[right] at (2.35,1.2) {wall};
\draw[fill=red!20] (-1,0) circle (0.9); \node at (-1,0) {charged};
\foreach \y in {-0.8,-0.3,0.2,0.7}{\node[blue] at (1.5,\y) {$-$}; \node[red] at (2.1,\y) {$+$};}
\draw[->, thick] (-0.1,0) -- (1.3,0) node[midway,above] {attraction};
\end{tikzpicture}
```


---

## Coulomb’s law

The force between two point charges in vacuum (or air, approximately) is given by **Coulomb’s law**:

$$
\vec{F} = k \frac{q_1 q_2}{r^2} \hat{r},
$$

where $$\hat{r}$$ points from the charge exerting the force to the charge experiencing it (or from source to test, depending on textbook convention—always check the direction rule your problems use). The Coulomb constant is

$$
k = 8.99 \times 10^9 \text{ N}\cdot\text{m}^2/\text{C}^2.
$$

Like charges give a repulsive force along $$\hat{r}$$; opposite charges attract (force opposite to $$\hat{r}$$ if $$\hat{r}$$ is defined as above). The magnitude falls as $$1/r^2$$, the same inverse-square geometry as Newton’s law of gravitation, but charge can be positive or negative so the force can be attractive or repulsive.

<div class="theorem-box">

**Example.** Suppose $$q_1=+2.0\,\mu\text{C}$$ is at $$x=0$$ and $$q_2=-3.0\,\mu\text{C}$$ is at $$x=0.50\text{ m}$$. Find the force on $$q_1$$.

The magnitude is

$$
F=k\frac{\lvert q_1q_2 \rvert}{r^2}
=\left(8.99\times10^9\right)\frac{(2.0\times10^{-6})(3.0\times10^{-6})}{(0.50)^2}
=0.216\text{ N}.
$$

Because the charges are opposite, $$q_1$$ is attracted toward $$q_2$$, so the force on $$q_1$$ points in the $$+x$$ direction.

</div>

<div class="theorem-box">

**Example.** Two charges $$q_1 = +3.0\,\mu\text{C}$$ and $$q_2 = +3.0\,\mu\text{C}$$ sit at the base corners of an equilateral triangle of side $$d = 0.20\text{ m}$$. A third charge $$q_3 = +2.0\,\mu\text{C}$$ sits at the apex. Find the net force on $$q_3$$.

Each base charge is the same distance $$d$$ from the apex, so the two forces have equal magnitude

$$
F = k\frac{q_1 q_3}{d^2}
= \left(8.99\times10^9\right)\frac{(3.0\times10^{-6})(2.0\times10^{-6})}{(0.20)^2}
= 1.35\text{ N}.
$$

Both forces are repulsive, pushing $$q_3$$ directly away from each base charge. By the symmetry of the equilateral triangle, each force makes an angle of $$60^\circ$$ with the horizontal. Resolve into components, putting the apex above the midpoint of the base:

$$
F_{1x} = -F\cos 60^\circ, \qquad F_{2x} = +F\cos 60^\circ,
$$

so the horizontal components cancel, $$F_{\text{net},x} = 0$$. The vertical components both point up and add:

$$
F_{\text{net},y} = 2F\sin 60^\circ = 2(1.35)(0.866) = 2.34\text{ N}.
$$

The net force on $$q_3$$ is $$2.3\text{ N}$$ pointing straight up, away from the base. Whenever a problem has two or more sources, always resolve each force into $$x$$ and $$y$$ components, add the components separately, then recombine — never add magnitudes directly unless the forces are collinear.

</div>

<div class="theorem-box">

**Example.** A charge $$q_1 = +4.0\,\mu\text{C}$$ is at $$x = 0$$ and $$q_2 = +1.0\,\mu\text{C}$$ is at $$x = 0.30\text{ m}$$. Where on the line can a third charge be placed so it feels zero net force?

A test charge feels zero net force where the two fields (or forces) are equal in magnitude and opposite in direction. Between two *like* charges there is always such a point between them, because the two fields point in opposite directions there. Let the point be a distance $$x$$ from $$q_1$$, so it is $$0.30 - x$$ from $$q_2$$. Setting the magnitudes equal:

$$
k\frac{q_1}{x^2} = k\frac{q_2}{(0.30 - x)^2}.
$$

Cancel $$k$$ and cross-multiply:

$$
\frac{q_1}{q_2} = \frac{x^2}{(0.30-x)^2}
\quad\Rightarrow\quad
\sqrt{\frac{q_1}{q_2}} = \frac{x}{0.30 - x}.
$$

Since $$\sqrt{q_1/q_2} = \sqrt{4} = 2$$,

$$
x = 2(0.30 - x) \quad\Rightarrow\quad 3x = 0.60 \quad\Rightarrow\quad x = 0.20\text{ m}.
$$

The null point is $$0.20\text{ m}$$ from the larger charge — closer to the *smaller* charge, as expected, since you must move nearer the weaker source to balance it. (Taking the negative square root would place the point outside the segment, where the two fields point the same way and cannot cancel, so it is rejected.) For two charges of *opposite* sign, the null point lies outside the segment, on the side of the smaller-magnitude charge.

</div>

---

## Permittivity of free space

It is sometimes convenient to write

$$
k = \frac{1}{4\pi \varepsilon_0},
$$

so Coulomb’s law becomes $$\vec{F} = \frac{1}{4\pi \varepsilon_0} \frac{q_1 q_2}{r^2} \hat{r}$$. The constant $$\varepsilon_0$$ is the **permittivity of free space**,

$$
\varepsilon_0 = 8.85 \times 10^{-12} \text{ C}^2/(\text{N}\cdot\text{m}^2)
$$

(equivalently farads per meter, $$\text{F/m}$$). It sets how electric fields in vacuum relate to source charge.

---

## Superposition principle

The **superposition principle** for electrostatics says that the total force on a charge is the vector sum of the forces from every other charge, computed as if each pair were alone:

$$
\vec{F}_{\text{net}} = \sum_i \vec{F}_i.
$$

In practice: sketch each contribution, resolve into components if the geometry demands it, then add. The principle extends to fields once the field from each source is known.

---

## Electric field

The **electric field** $$\vec{E}$$ at a point is defined as the force per unit charge on a small positive test charge $$q_0$$:

$$
\vec{E} = \frac{\vec{F}}{q_0}, \qquad \text{units: N/C (or V/m)}.
$$

The field is attributed to source charges; conceptually it exists whether or not a test charge is present. By convention, $$\vec{E}$$ points in the direction of the force on a positive test charge, so a negative charge in the same field feels a force $$\vec{F} = q\vec{E}$$ opposite to $$\vec{E}$$.

For a single point charge $$Q$$,

$$
\vec{E} = \frac{1}{4\pi \varepsilon_0} \frac{Q}{r^2} \hat{r}.
$$

<div class="theorem-box">

**Example.** Two equal positive charges $$+Q$$ are placed at $$(0,a)$$ and $$(0,-a)$$. Find the electric field at $$(x,0)$$.

Each charge is a distance $$r=\sqrt{x^2+a^2}$$ from the point. The vertical components cancel by symmetry. The horizontal component from one charge is

$$
E_x=\frac{kQ}{r^2}\cos\theta
=\frac{kQ}{x^2+a^2}\cdot\frac{x}{\sqrt{x^2+a^2}}
=\frac{kQx}{(x^2+a^2)^{3/2}}.
$$

There are two equal horizontal components, so

$$
\vec E=\frac{2kQx}{(x^2+a^2)^{3/2}}\hat{\imath}.
$$

For $$x>0$$ this points right; for $$x<0$$ it points left.

</div>

<div class="theorem-box">

**Example.** A charge $$q_1 = +5.0\,\text{nC}$$ is at the origin and $$q_2 = -5.0\,\text{nC}$$ is at $$(0.40\text{ m}, 0)$$. Find the net electric field at the point $$P = (0.40\text{ m}, 0.30\text{ m})$$.

Treat each charge separately, then add the field vectors. The point $$P$$ is directly above $$q_2$$ at distance $$r_2 = 0.30\text{ m}$$, so the field from $$q_2$$ has magnitude

$$
E_2 = k\frac{\lvert q_2 \rvert}{r_2^2}
= (8.99\times10^9)\frac{5.0\times10^{-9}}{(0.30)^2}
= 499\ \text{N/C}.
$$

Since $$q_2$$ is negative, $$\vec E_2$$ points *toward* $$q_2$$, i.e. straight down: $$\vec E_2 = (0,\,-499)\ \text{N/C}$$.

The distance from $$q_1$$ to $$P$$ is $$r_1 = \sqrt{0.40^2 + 0.30^2} = 0.50\text{ m}$$, so

$$
E_1 = k\frac{q_1}{r_1^2}
= (8.99\times10^9)\frac{5.0\times10^{-9}}{(0.50)^2}
= 180\ \text{N/C}.
$$

$$\vec E_1$$ points *away* from the positive $$q_1$$, along the direction from the origin to $$P$$. The unit vector is $$(0.40, 0.30)/0.50 = (0.80, 0.60)$$, so

$$
\vec E_1 = 180\,(0.80,\,0.60) = (144,\,108)\ \text{N/C}.
$$

Add components:

$$
\vec E = \vec E_1 + \vec E_2 = (144,\ 108 - 499) = (144,\,-391)\ \text{N/C}.
$$

The magnitude is

$$
E = \sqrt{144^2 + 391^2} \approx 417\ \text{N/C},
$$

directed at $$\arctan(391/144) \approx 70^\circ$$ below the $$+x$$ axis. The whole calculation is just superposition: compute each field's magnitude from $$kq/r^2$$, assign its direction (away from positive, toward negative), break into components, and sum.

</div>

---

## Continuous charge distributions

When charge is spread through a line, surface, or volume, describe it with a density:

$$
\lambda = \frac{dq}{dL} \quad \text{(charge per unit length)},
$$

$$
\sigma = \frac{dq}{dA} \quad \text{(charge per unit area)},
$$

$$
\rho = \frac{dq}{dV} \quad \text{(charge per unit volume)}.
$$

The field obeys superposition in integral form:

$$
\vec{E} = \frac{1}{4\pi \varepsilon_0} \int \frac{dq}{r^2} \hat{r},
$$

or, for a scalar magnitude contribution along a chosen axis after symmetry,

$$
dE = \frac{1}{4\pi \varepsilon_0} \frac{dq}{r^2}
$$

with $$dq$$ replaced by $$\lambda\, dL$$, $$\sigma\, dA$$, or $$\rho\, dV$$ according to the geometry. Set up coordinates, exploit symmetry, and integrate. Some common techniques are to convert into polar form, or only calculate non-cancelling portions of the field.

<div class="theorem-box">

**Proof (on-axis field of a uniformly charged ring).** A ring of radius $$R$$ carries total charge $$Q$$ uniformly. Find the field a distance $$x$$ from the center along the ring's axis.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[blue, thick] (0,0) ellipse (1.7 and 0.6); \draw[->, thick] (0,0) -- (4,0) node[right] {$x$}; \fill (3,0) circle (2pt) node[below] {point};
\draw[->, red, thick] (0.9,0.5) -- (3,0); \draw[dashed] (0.9,0.5)--(0,0); \node at (1.8,0.65) {$r$}; \node at (1.7,-0.45) {transverse components cancel};
\end{tikzpicture}
```


Every charge element $$dq$$ is the same distance

$$
r=\sqrt{x^2+R^2}
$$

from the field point by the Pythagorean theorem. Each $$dq$$ produces a field $$dE = k\,dq/r^2$$ pointing from the element to the axis point. As we go around the ring, the components perpendicular to the axis cancel in pairs (the element on the opposite side cancels them), so only the axial component survives. If $$\theta$$ is the angle the field makes with the axis, then $$\cos\theta = x/r$$, and

$$
dE_x=dE\cos\theta
=k\frac{dq}{r^2}\cdot\frac{x}{r}
=k\frac{x\,dq}{(x^2+R^2)^{3/2}}.
$$

Because $$x$$ and $$R$$ are the same for every element, everything except $$dq$$ pulls out of the integral:

$$
E_x=k\frac{x}{(x^2+R^2)^{3/2}}\int dq
=\frac{1}{4\pi\varepsilon_0}\frac{Qx}{(x^2+R^2)^{3/2}}.
$$

Two checks: at the center ($$x=0$$) the field is zero, as symmetry demands; and far away ($$x\gg R$$) it reduces to $$E\approx kQ/x^2$$, the field of a point charge. The field is also maximized at $$x = R/\sqrt{2}$$ (set $$dE_x/dx = 0$$).

</div>

<div class="theorem-box">

**Proof (on-axis field of a uniformly charged disk).** A flat disk of radius $$R$$ carries uniform surface charge density $$\sigma$$. Find the field a distance $$x$$ along its axis.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[fill=blue!10] (0,0) ellipse (2.3 and 0.8); \draw[blue!60] (0,0) ellipse (0.5 and 0.18); \draw[blue!60] (0,0) ellipse (1.0 and 0.35); \draw[blue!60] (0,0) ellipse (1.5 and 0.52); \draw[blue!60] (0,0) ellipse (2.0 and 0.7); \node at (0,-1.4) {disk as a stack of charged rings};
\end{tikzpicture}
```


Treat the disk as a stack of concentric thin rings. A ring of radius $$s$$ and thickness $$ds$$ has area $$dA = 2\pi s\,ds$$, so it carries charge

$$
dq = \sigma\,dA = \sigma\,(2\pi s\,ds).
$$

Use the ring result above with $$R\to s$$ and $$Q \to dq$$:

$$
dE_x = \frac{1}{4\pi\varepsilon_0}\frac{x\,dq}{(x^2+s^2)^{3/2}}
= \frac{\sigma x}{4\pi\varepsilon_0}\frac{2\pi s\,ds}{(x^2+s^2)^{3/2}}
= \frac{\sigma x}{2\varepsilon_0}\frac{s\,ds}{(x^2+s^2)^{3/2}}.
$$

Integrate over all rings, from $$s=0$$ to $$s=R$$. The substitution $$u = x^2 + s^2$$, $$du = 2s\,ds$$ gives $$\int s(x^2+s^2)^{-3/2}\,ds = -(x^2+s^2)^{-1/2}$$:

$$
E_x = \frac{\sigma x}{2\varepsilon_0}\left[-\frac{1}{\sqrt{x^2+s^2}}\right]_0^R
= \frac{\sigma x}{2\varepsilon_0}\left(\frac{1}{x} - \frac{1}{\sqrt{x^2+R^2}}\right).
$$

Therefore

$$
E = \frac{\sigma}{2\varepsilon_0}\left(1 - \frac{x}{\sqrt{x^2+R^2}}\right).
$$

This single result contains two famous limits. **Infinite sheet** ($$R\to\infty$$, or equivalently $$x\ll R$$): the fraction $$x/\sqrt{x^2+R^2}\to 0$$, so

$$
E \to \frac{\sigma}{2\varepsilon_0},
$$

exactly the infinite-sheet field we will get from Gauss's law below — independent of distance. **Far away** ($$x\gg R$$): expanding $$x/\sqrt{x^2+R^2} \approx 1 - R^2/2x^2$$ gives $$E\approx \sigma R^2/(4\varepsilon_0 x^2) = kQ/x^2$$ with $$Q = \sigma\pi R^2$$, the point-charge field again. One integral, both limiting behaviors.

</div>

<div class="theorem-box">

**Example.** A rod of length $$2L$$ lies on the $$x$$-axis from $$-L$$ to $$L$$ with uniform charge density $$\lambda$$. Find the field at $$(0,a)$$.

For a small element $$dq=\lambda\,dx$$ at position $$x$$, the distance to the point is $$r=\sqrt{x^2+a^2}$$. Horizontal components cancel between $$+x$$ and $$-x$$, so keep only the vertical component:

$$
dE_y=k\frac{dq}{r^2}\frac{a}{r}
=k\lambda\frac{a\,dx}{(x^2+a^2)^{3/2}}.
$$

Therefore

$$
E_y=k\lambda a\int_{-L}^{L}\frac{dx}{(x^2+a^2)^{3/2}}
=\frac{2k\lambda L}{a\sqrt{L^2+a^2}}.
$$

The field points away from the rod if $$\lambda>0$$ and toward the rod if $$\lambda<0$$.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[very thick, blue] (-2,0)--(2,0); \fill (0,2) circle (2pt) node[above] {point}; \foreach \x in {-1.5,-0.5,0.5,1.5}{\draw[->, red] (\x,0)--(0,2);} \draw[dashed] (0,0)--(0,2); \node at (2.6,0) {charged rod};
\end{tikzpicture}
```


</div>

---

## Field lines

Field lines are a pictorial tool: they leave positive charge, terminate on negative charge, and their spacing indicates field strength (closer lines mean larger $$\lvert \vec{E} \rvert$$). Field lines never cross, because the field at a point has a single direction.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\fill[red] (-1.6,0) circle (3pt) node[below] {$+$}; \fill[blue] (1.6,0) circle (3pt) node[below] {$-$};
\foreach \a in {-60,-30,0,30,60}{\draw[->, red!80!black] (-1.45,0.15) .. controls (0,\a/45) .. (1.45,0.15);} \node at (0,-1.6) {field lines start on positive charge and end on negative charge};
\end{tikzpicture}
```


---

## Electric flux and Gauss’s law

**Electric flux** measures how much electric field passes through a surface. For a flat area $$\vec{A}$$ (magnitude equal to area, direction along the normal) and uniform $$\vec{E}$$,

$$
\Phi_E = \vec{E} \cdot \vec{A} = EA\cos\theta,
$$

where $$\theta$$ is the angle between $$\vec{E}$$ and the normal. When $$\vec{E}$$ is parallel to the surface, flux through that surface is zero; when perpendicular, $$\lvert \Phi_E \rvert$$ is maximal for fixed $$E$$ and $$A$$.

For a general surface,

$$
\Phi_E = \int \vec{E} \cdot d\vec{A}.
$$

**Gauss’s law** relates the flux through any closed surface to the charge enclosed:

$$
\oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}.
$$

The closed surface used in the integral is called a **Gaussian surface**; it is a mathematical construct, not a physical shell. The law is always true; it is computationally powerful when symmetry lets you pull $$\lvert \vec{E} \rvert$$ outside the integral because it is constant on the chosen surface.

Gauss’s law is especially efficient for:

- spherically symmetric charge (use a concentric sphere),
- infinite cylindrical symmetry (use a coaxial cylinder),
- infinite planar symmetry (use a pillbox, which is a very short cylinder).

Choose a surface on which $$E$$ is constant and parallel or perpendicular to $$d\vec{A}$$ on each piece, so the flux reduces to $$E$$ times an area.

<div class="theorem-box">

**Proof (Gauss's law for a point charge).** Put a point charge $$q$$ at the center of a sphere of radius $$r$$. On the sphere,

$$
E=\frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}
$$

and $$\vec E$$ is parallel to $$d\vec A$$ everywhere. Thus

$$
\oint \vec E\cdot d\vec A
=E(4\pi r^2)
=\frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}(4\pi r^2)
=\frac{q}{\varepsilon_0}.
$$

The important cancellation is geometric: the field weakens like $$1/r^2$$ while the sphere's area grows like $$r^2$$. A general proof of Gauss's Law will not be described here but feel free to try on your own!

</div>

<div class="theorem-box">

**Example.** A nonconducting sphere of radius $$R$$ has total charge $$Q$$ spread uniformly through its volume. Find $$E(r)$$.

For $$r\ge R$$, a spherical Gaussian surface encloses all the charge:

$$
E(4\pi r^2)=\frac{Q}{\varepsilon_0}
\quad\Rightarrow\quad
E=\frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}.
$$

For $$r<R$$, only the charge inside radius $$r$$ is enclosed. Since the volume fraction is $$r^3/R^3$$,

$$
Q_{\text{enc}}=Q\frac{r^3}{R^3}.
$$

Then

$$
E(4\pi r^2)=\frac{Qr^3}{\varepsilon_0R^3}
\quad\Rightarrow\quad
E=\frac{1}{4\pi\varepsilon_0}\frac{Qr}{R^3}.
$$

Inside the sphere, the field grows linearly with distance from the center.

</div>

<div class="theorem-box">

**Example.** A thin conducting (or uniformly charged) spherical shell of radius $$R$$ carries total charge $$Q$$. Find $$E$$ inside and outside.

**Outside** ($$r > R$$): a concentric Gaussian sphere encloses all of $$Q$$, exactly like the solid case,

$$
E(4\pi r^2) = \frac{Q}{\varepsilon_0}
\quad\Rightarrow\quad
E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}.
$$

From outside, any spherically symmetric charge looks like a point charge at the center.

**Inside** ($$r < R$$): a Gaussian sphere of radius $$r < R$$ encloses no charge, since all the charge is on the surface at radius $$R$$:

$$
E(4\pi r^2) = \frac{Q_{\text{enc}}}{\varepsilon_0} = 0
\quad\Rightarrow\quad
E = 0.
$$

The field is exactly zero everywhere inside the shell. The field jumps discontinuously at the surface, from $$0$$ to $$kQ/R^2$$.

</div>

<div class="theorem-box">

**Example.** A nonconducting sphere of radius $$R = 0.10\text{ m}$$ carries $$Q = 8.0\,\text{nC}$$ spread uniformly through its volume. Find $$E$$ at $$r = 0.050\text{ m}$$ (inside) and at $$r = 0.20\text{ m}$$ (outside).

**Inside**, use $$E = \dfrac{1}{4\pi\varepsilon_0}\dfrac{Qr}{R^3}$$ from the uniform-sphere result:

$$
E = (8.99\times10^9)\frac{(8.0\times10^{-9})(0.050)}{(0.10)^3}
= (8.99\times10^9)\frac{4.0\times10^{-10}}{1.0\times10^{-3}}
= 3.6\times10^3\ \text{N/C}.
$$

**Outside**, the sphere acts like a point charge:

$$
E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}
= (8.99\times10^9)\frac{8.0\times10^{-9}}{(0.20)^2}
= 1.8\times10^3\ \text{N/C}.
$$

At the surface ($$r = R = 0.10\text{ m}$$) both formulas agree: $$E = kQ/R^2 = 7.2\times10^3\ \text{N/C}$$, the field's maximum value. Inside, $$E$$ rises linearly from the center; outside, it falls off as $$1/r^2$$.

</div>

<div class="theorem-box">

**Example.** An infinite line has uniform charge density $$\lambda$$. Find the electric field of the line a distance $$r$$ away from the line.

The field is radial and constant on the curved side. The end caps have zero flux because $$\vec E$$ is parallel to the caps, not perpendicular to them. Therefore

$$
\oint \vec E\cdot d\vec A=E(2\pi rL).
$$

The enclosed charge is $$Q_{\text{enc}}=\lambda L$$, so

$$
E(2\pi rL)=\frac{\lambda L}{\varepsilon_0}
\quad\Rightarrow\quad
E=\frac{\lambda}{2\pi\varepsilon_0 r}.
$$


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[very thick, blue] (-3,0)--(3,0) node[right] {line charge}; \draw[fill=blue!5] (0,0) ellipse (1.1 and 0.35); \draw[fill=blue!5] (0,2.3) ellipse (1.1 and 0.35); \draw (-1.1,0)--(-1.1,2.3); \draw (1.1,0)--(1.1,2.3); \foreach \x in {-0.8,0,0.8}{\draw[->, red] (\x,1.15)--(\x,2.0);} \node at (2.2,1.1) {Gaussian cylinder};
\end{tikzpicture}
```


</div>

<div class="theorem-box">

**Example.** An infinite nonconducting sheet has surface charge density $$\sigma$$. Use a thin pillbox crossing the sheet.

The field points perpendicular to the sheet and has the same magnitude on both sides. The curved side of the pillbox contributes no flux, while the two flat faces contribute $$EA$$ each:

$$
\oint \vec E\cdot d\vec A=2EA.
$$

The enclosed charge is $$\sigma A$$, so

$$
2EA=\frac{\sigma A}{\varepsilon_0}
\quad\Rightarrow\quad
E=\frac{\sigma}{2\varepsilon_0}.
$$


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[very thick] (-3,0)--(3,0) node[right] {charged sheet}; \draw[fill=blue!8] (-0.8,-0.5) rectangle (0.8,0.5); \draw[->, red, thick] (0,0.5)--(0,1.4); \draw[->, red, thick] (0,-0.5)--(0,-1.4); \node at (0,1.75) {$E$ exits}; \node at (0,-1.75) {$E$ exits};
\end{tikzpicture}
```


</div>

These examples are very common throughout AP Physics C E&M, and are worth memorizing how to do.

---

## The electric dipole

An **electric dipole** is a pair of equal and opposite charges $$+q$$ and $$-q$$ separated by a small displacement $$\vec d$$ (pointing from the negative to the positive charge). It is described by its **dipole moment**

$$
\vec p = q\vec d,
$$

a vector pointing from the negative charge to the positive charge, with magnitude $$p = qd$$ (units $$\text{C}\cdot\text{m}$$). Many neutral molecules (like water) behave as dipoles, and the dipole is the simplest charge distribution with zero net charge but a nonzero field.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\fill[blue] (-1,0) circle (4pt) node[below] {$-q$}; \fill[red] (1,0) circle (4pt) node[below] {$+q$}; \draw[->, very thick] (-1,0.55)--(1,0.55) node[midway,above] {$\vec p$}; \draw[<->] (-1,-0.55)--(1,-0.55) node[midway,below] {$d$};
\end{tikzpicture}
```


<div class="theorem-box">

**Proof (far field on the dipole axis).** Place $$+q$$ at $$+d/2$$ and $$-q$$ at $$-d/2$$ on the $$x$$-axis. Find the field at a point on the axis a distance $$r$$ from the center, with $$r \gg d$$.

On the axis, both fields point along $$x$$, so we just subtract magnitudes. The near (positive) charge is at distance $$r - d/2$$ and the far (negative) charge at $$r + d/2$$:

$$
E = \frac{q}{4\pi\varepsilon_0}\left[\frac{1}{(r-d/2)^2} - \frac{1}{(r+d/2)^2}\right].
$$

Combine over a common denominator. The numerator is $$(r+d/2)^2 - (r-d/2)^2 = 2rd$$, and the denominator is $$\big(r^2 - d^2/4\big)^2 \approx r^4$$ when $$r \gg d$$:

$$
E = \frac{q}{4\pi\varepsilon_0}\cdot\frac{2rd}{(r^2 - d^2/4)^2}
\approx \frac{q}{4\pi\varepsilon_0}\cdot\frac{2rd}{r^4}
= \frac{1}{4\pi\varepsilon_0}\frac{2qd}{r^3}.
$$

With $$p = qd$$,

$$
E \approx \frac{1}{4\pi\varepsilon_0}\frac{2p}{r^3}.
$$

The key feature is that a dipole's field falls off as $$1/r^3$$, faster than a single charge's $$1/r^2$$, because the two opposite charges nearly cancel at large distance. The field points along $$\vec p$$ on the axis.

</div>

When a dipole sits in a *uniform* external field $$\vec E$$, the forces on $$+q$$ and $$-q$$ are equal and opposite, so the net force is zero — but they form a couple that produces a torque:

$$
\vec\tau = \vec p \times \vec E, \qquad \tau = pE\sin\phi,
$$

where $$\phi$$ is the angle between $$\vec p$$ and $$\vec E$$. The torque rotates the dipole toward alignment with the field ($$\phi \to 0$$), where the torque vanishes and the energy $$U = -\vec p\cdot\vec E$$ is minimized.

<div class="theorem-box">

**Example.** A dipole with moment $$p = 6.2\times10^{-30}\ \text{C}\cdot\text{m}$$ (about that of a water molecule) sits in a uniform field $$E = 3.0\times10^{5}\ \text{N/C}$$, oriented at $$\phi = 30^\circ$$ to the field. Find the torque on it.

$$
\tau = pE\sin\phi = (6.2\times10^{-30})(3.0\times10^{5})\sin 30^\circ
= (6.2\times10^{-30})(3.0\times10^{5})(0.5)
\approx 9.3\times10^{-25}\ \text{N}\cdot\text{m}.
$$

The torque is maximal when $$\vec p \perp \vec E$$ ($$\phi = 90^\circ$$) and zero when the dipole is aligned ($$\phi = 0$$) or anti-aligned ($$\phi = 180^\circ$$); only $$\phi = 0$$ is stable equilibrium.

</div>

---

## Charges moving in a uniform field

A charge in a field feels a force $$\vec F = q\vec E$$. In a *uniform* field (such as the region between two large parallel charged plates), the force is constant, so the charge undergoes constant acceleration

$$
\vec a = \frac{\vec F}{m} = \frac{q\vec E}{m},
$$

and the constant-acceleration kinematics from mechanics apply directly. This is the electrical analog of projectile motion under gravity.

<div class="theorem-box">

**Example.** An electron ($$q = -e$$, $$m = 9.11\times10^{-31}\ \text{kg}$$) is released from rest next to the negative plate in a uniform field of magnitude $$E = 2.0\times10^{4}\ \text{N/C}$$. The plates are separated by $$d = 1.0\text{ cm}$$. Find the electron's acceleration and its speed when it reaches the other plate.

The force magnitude is $$F = \lvert q \rvert E = eE$$, so

$$
a = \frac{eE}{m} = \frac{(1.602\times10^{-19})(2.0\times10^{4})}{9.11\times10^{-31}}
\approx 3.5\times10^{15}\ \text{m/s}^2.
$$

(The electron, being negative, accelerates *toward* the positive plate, opposite $$\vec E$$.) Treating this as 1-D motion from rest through $$d$$, use $$v^2 = v_0^2 + 2ad$$ with $$v_0 = 0$$:

$$
v = \sqrt{2ad} = \sqrt{2(3.5\times10^{15})(0.010)}
= \sqrt{7.0\times10^{13}}
\approx 8.4\times10^{6}\ \text{m/s}.
$$

Equivalently, work-energy gives the same answer: the field does work $$W = qEd = \tfrac{1}{2}mv^2$$. The huge acceleration comes from the electron's tiny mass; the same field would push a proton the other way with an acceleration about $$1800$$ times smaller.

</div>

---

:::equations
| Idea | Equation |
| --- | --- |
| Coulomb's law | $$\vec F = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1 q_2}{r^2}\hat r$$ |
| Coulomb constant | $$k = \dfrac{1}{4\pi\varepsilon_0} = 8.99\times10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$$ |
| Field of a point charge | $$\vec E = \dfrac{1}{4\pi\varepsilon_0}\dfrac{Q}{r^2}\hat r$$ |
| Force from a field | $$\vec F = q\vec E$$ |
| Superposition | $$\vec E_{\text{net}} = \sum_i \vec E_i$$ |
| Field of a continuous distribution | $$\vec E = \dfrac{1}{4\pi\varepsilon_0}\displaystyle\int \dfrac{dq}{r^2}\hat r$$ |
| On-axis field of a ring | $$E = \dfrac{1}{4\pi\varepsilon_0}\dfrac{Qx}{(x^2+R^2)^{3/2}}$$ |
| On-axis field of a disk | $$E = \dfrac{\sigma}{2\varepsilon_0}\left(1 - \dfrac{x}{\sqrt{x^2+R^2}}\right)$$ |
| Field of an infinite line | $$E = \dfrac{\lambda}{2\pi\varepsilon_0 r}$$ |
| Field of an infinite sheet | $$E = \dfrac{\sigma}{2\varepsilon_0}$$ |
| Electric flux | $$\Phi_E = \displaystyle\int \vec E\cdot d\vec A$$ |
| Gauss's law | $$\displaystyle\oint \vec E\cdot d\vec A = \dfrac{Q_{\text{enc}}}{\varepsilon_0}$$ |
| Dipole moment | $$\vec p = q\vec d$$ |
| Dipole far field (on axis) | $$E \approx \dfrac{1}{4\pi\varepsilon_0}\dfrac{2p}{r^3}$$ |
| Torque on a dipole | $$\vec\tau = \vec p \times \vec E,\quad \tau = pE\sin\phi$$ |
:::

## Practice

### FRQ

::::frq{id=ap-physics-c-em-electrostatics-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
