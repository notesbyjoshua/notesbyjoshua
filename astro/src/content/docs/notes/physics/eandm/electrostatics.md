---
title: "Electrostatics"
sidebar:
  order: 1
---

## Charges

All atoms that make up matter contains protons, electrons, and neutrons, and ordinary charging is mostly about moving electrons. A proton has charge $$+e$$, an electron has charge $$-e$$, and a neutron is neutral, where

$$
e=1.602\times 10^{-19}\text{ C}.
$$

This is known as an **elementary charge**. Macroscopic charge is usually a tiny imbalance of electrons compared with the total number of particles in an object. Charge is conserved: it can move from one object to another, but it is not created or destroyed in ordinary electrostatics. As you go to quantum levels (which is not needed for USAPhO), charged particles are created and annihilated in matter-antimatter pairs.

### Materials

Materials differ by how easily their electrons move.

- **Conductors** have mobile charges that can redistribute through the material.
- **Insulators** have charges that are locally bound, so charge does not freely flow through the object.
- **Semiconductors** are between the two: they have some mobile charge carriers, but far fewer than a good conductor.

Grounding connects an object to a large charge reservoir (usually the Earth). We will assume for practical purposes that Earth has basically infinite electrons and acts like a perfect ground.

### Charging, induction, and polarization

Charging by contact transfers charge directly. Charging by induction uses an external charged object to redistribute charges inside a conductor; if the conductor is grounded during the process, charge can leave or enter, and the conductor may be left with a net charge after the ground and external object are removed.

**Polarization** means that positive and negative charge separate slightly inside a neutral object. This is why a charged object can attract a neutral object: the closer side is induced to have the opposite sign, and the closer attraction beats the farther repulsion.

### Coulomb's law

<div class="theorem-box">

**Theorem (Coulomb's Law).** For point-like charges,

$$
\vec F = k\frac{q_1q_2}{r^2}\hat r,
\qquad
k=\frac{1}{4\pi\varepsilon_0}.
$$

</div>

The force is repulsive for like charges and attractive for opposite charges.

:::warning
In vector problems, do not only add magnitudes; use components or unit vectors and then apply superposition.
:::

### Electric field

The electric field is force per unit positive test charge:

$$
\vec E=\frac{\vec F}{q_0}.
$$

The field can be viewed as a vector function of position,

$$
\vec E(x,y,z)=E_x(x,y,z)\hat i+E_y(x,y,z)\hat j+E_z(x,y,z)\hat k.
$$

For many source charges, add the individual fields:

$$
\vec E_{\text{net}}=\sum_i \vec E_i.
$$

The field is a real physical entity, not just a calculational shorthand: the source charges create it throughout space whether or not a test charge is there, and any charge placed at a point then feels the local field. This also hides a subtlety: the field takes time to establish itself, propagating at the speed of light, which is why Coulomb's law strictly holds only for **static** charges. Once magnetic effects enter, electric and magnetic fields can even sustain and propagate each other with no charges present at all; that is light.

For continuous charge distributions, replace the sum by an integral:

$$
dE=k\frac{dq}{r^2},
$$

where

$$
dq=\lambda\,d\ell,\qquad dq=\sigma\,dA,\qquad dq=\rho\,dV.
$$

It is very important to choose useful coordinates (e.g. rectangular, polar, spherical, etc.), use symmetry to cancel components, project the remaining component, then integrate.

<div class="theorem-box">

**Example.** Find the electric field of a uniformly charged disk with radius $$R$$ at a point $$x$$ above the center.

A uniformly charged disk can be built from thin rings. If the disk has surface charge density $$\sigma$$, then a ring of radius $$r$$ and thickness $$dr$$ has

$$
dq=\sigma(2\pi r\,dr).
$$

Using the on-axis field of a thin ring — a ring of charge $$dq$$ at radius $$r$$ contributes an axial field $$k\,x\,dq/(x^2+r^2)^{3/2}$$ (this ring result is derived cheaply from the potential in the potential section below),

$$
dE_x=k\frac{x\,dq}{(x^2+r^2)^{3/2}}
=k\frac{x(2\pi\sigma r\,dr)}{(x^2+r^2)^{3/2}}.
$$

Integrating from $$r=0$$ to $$R$$ gives

$$
E_x=2\pi k\sigma\left(1-\frac{x}{\sqrt{x^2+R^2}}\right)
=\frac{\sigma}{2\varepsilon_0}\left(1-\frac{x}{\sqrt{x^2+R^2}}\right)
$$

for $$x>0$$.

</div>

<div class="theorem-box">

**Example.** Find the electric field at the center of a uniformly charged hemispherical shell of radius $$R$$ and surface charge density $$\sigma$$.

By symmetry the field at the center points along the axis of the hemisphere. Slice the shell into thin rings at polar angle $$\theta$$ from the axis. A ring at angle $$\theta$$ has radius $$R\sin\theta$$, circumference $$2\pi R\sin\theta$$, and width $$R\,d\theta$$, so

$$
dq=\sigma\,(2\pi R\sin\theta)(R\,d\theta)=2\pi\sigma R^2\sin\theta\,d\theta.
$$

Every element of the ring sits at distance $$R$$ from the center, and only the component along the axis survives, contributing a factor $$\cos\theta$$:

$$
dE=k\frac{dq}{R^2}\cos\theta=2\pi k\sigma\sin\theta\cos\theta\,d\theta.
$$

Integrating over the hemisphere ($$\theta:0\to\pi/2$$),

$$
E=2\pi k\sigma\int_0^{\pi/2}\sin\theta\cos\theta\,d\theta=2\pi k\sigma\cdot\tfrac12=\pi k\sigma=\frac{\sigma}{4\varepsilon_0}.
$$

The clean answer hides a useful cancellation: the $$1/R^2$$ from Coulomb's law exactly kills the $$R^2$$ in the ring's charge, so the radius drops out entirely.

</div>

### Electric field lines

Field lines are a visual tool:

- They begin on positive charge and end on negative charge.
- They point in the direction of $$\vec E$$.
- Their density represents field strength.
- They never cross, because the field at one point cannot have two directions.

Field lines are not the field itself. They are a way to visualize a vector field in space.

### Electric flux

Electric flux measures how much electric field passes through a surface:

$$
\Phi_E=\int \vec E\cdot d\vec A.
$$

The direction of $$d\vec A$$ is the local normal direction. For a closed surface, the outward normal is positive by convention.

For a uniform field through a flat area,

$$
\Phi_E=EA\cos\theta.
$$

### Gauss's law

<div class="theorem-box">

**Theorem (Gauss's Law).** The net electric flux through any closed surface equals the enclosed charge over $$\varepsilon_0$$,

$$
\oint \vec E\cdot d\vec A=\frac{Q_{\text{enc}}}{\varepsilon_0}.
$$

</div>

It is always true, but it is only easy to use when symmetry makes $$E$$ constant on the useful parts of a Gaussian surface.

<div class="theorem-box">

**Proof (Gauss's law).** First prove the result for one point charge $$q$$. By Coulomb's law, the electric field a distance $$r$$ from the charge is

$$
\vec E=k\frac{q}{r^2}\hat r
=\frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}\hat r.
$$

For a tiny area element $$dA$$ on any closed surface, only the component of $$\vec E$$ perpendicular to the surface contributes to flux:

$$
d\Phi_E=\vec E\cdot d\vec A
=\frac{q}{4\pi\varepsilon_0}\frac{\cos\theta\,dA}{r^2},
$$

where $$\theta$$ is the angle between $$\hat r$$ and the outward normal. The quantity

$$
d\Omega=\frac{\cos\theta\,dA}{r^2}
$$

is the **solid angle** subtended by the area element as seen from the charge. Therefore

$$
d\Phi_E=\frac{q}{4\pi\varepsilon_0}\,d\Omega.
$$

If the charge is inside the closed surface, the surface surrounds the charge once, so the total solid angle is $$4\pi$$ steradians (3D equivalent of radians). Hence

$$
\oint \vec E\cdot d\vec A
=\frac{q}{4\pi\varepsilon_0}\oint d\Omega
=\frac{q}{4\pi\varepsilon_0}(4\pi)
=\frac{q}{\varepsilon_0}.
$$

If the charge is outside the closed surface, field lines that enter the surface also leave it. Equivalently, the signed solid angles cancel, so the net flux is $$0$$.

For many point charges, electric fields add by superposition:

$$
\vec E=\sum_i \vec E_i.
$$

Flux is linear, so

$$
\oint \vec E\cdot d\vec A
=\sum_i\oint \vec E_i\cdot d\vec A.
$$

Each charge inside contributes $$q_i/\varepsilon_0$$, and each charge outside contributes $$0$$. Thus

$$
\oint \vec E\cdot d\vec A
=\frac{1}{\varepsilon_0}\sum_{\text{inside}}q_i
=\frac{Q_{\text{enc}}}{\varepsilon_0}.
$$

A continuous charge distribution is the same argument with the sum replaced by an integral over charge elements $$dq$$.

</div>

:::tip{title="Matching the Gaussian surface to the symmetry"}
Good Gaussian surfaces match the symmetry:

- sphere for spherical symmetry,
- cylinder for infinite line/cylindrical symmetry,
- pillbox for infinite plane symmetry.
:::

### Standard Gaussian results

For a thin spherical shell of radius $$R$$ and total charge $$Q$$,

$$
E(r)=
\begin{cases}
0, & r<R,\\
kQ/r^2, & r>R.
\end{cases}
$$

This is the electrostatic version of Newton's shell theorem.

For a uniformly charged solid sphere of radius $$R$$ and total charge $$Q$$,

$$
E(r)=
\begin{cases}
kQr/R^3, & r<R,\\
kQ/r^2, & r>R.
\end{cases}
$$

For an infinite line of charge,

$$
E=\frac{\lambda}{2\pi\varepsilon_0 r}.
$$

For an infinite cylindrical shell with charge per unit length $$\lambda$$,

$$
E=
\begin{cases}
0, & r<R,\\
\lambda/(2\pi\varepsilon_0 r), & r>R.
\end{cases}
$$

For an infinite nonconducting plane sheet,

$$
E=\frac{\sigma}{2\varepsilon_0}.
$$

The direction is perpendicular to the sheet, away from positive charge and toward negative charge.

Feel free to derive these yourself, although the procedures are pretty standard.

Two of these combine constantly. A **pair of parallel, oppositely charged sheets** $$\pm\sigma$$ superpose to give a uniform field between them and (ideally) zero field outside:

$$
E_{\text{between}}=\frac{\sigma}{\varepsilon_0},\qquad E_{\text{outside}}=0.
$$

This is the parallel-plate capacitor field — twice the single-sheet value, because in the gap both sheets push the same way while outside they cancel.

Superposition also cracks a classic that has no symmetry of its own:

<div class="theorem-box">

**Example.** A sphere of uniform charge density $$\rho$$ has a smaller spherical cavity hollowed out of it, the cavity's center displaced by $$\vec d$$ from the big sphere's center. Show that the field everywhere inside the cavity is uniform.

View the hollow object as a **superposition**: a complete solid sphere of density $$+\rho$$, plus a smaller sphere of density $$-\rho$$ filling the cavity. Inside a uniform sphere the field is $$\vec E=\dfrac{\rho}{3\varepsilon_0}\vec r$$ measured from that sphere's *own* center (this is the interior result $$E=kQr/R^3$$ rewritten with $$Q=\rho\cdot\tfrac{4}{3}\pi r^3$$). Let $$\vec r_1$$ and $$\vec r_2$$ be the position of a field point measured from the big-sphere and cavity centers, so $$\vec r_1=\vec r_2+\vec d$$. Adding the two contributions inside the cavity,

$$
\vec E=\frac{\rho}{3\varepsilon_0}\vec r_1-\frac{\rho}{3\varepsilon_0}\vec r_2=\frac{\rho}{3\varepsilon_0}(\vec r_1-\vec r_2)=\frac{\rho}{3\varepsilon_0}\vec d.
$$

The field point $$\vec r$$ cancels, leaving the same field everywhere in the cavity: a **uniform** field $$\dfrac{\rho}{3\varepsilon_0}\vec d$$ parallel to the displacement $$\vec d$$.

</div>

### Electrostatic equilibrium in conductors

In a conductor at electrostatic equilibrium, charges have stopped moving macroscopically. Therefore:

- $$\vec E=0$$ inside the conducting material.
- Excess charge lies on the conductor's surface.
- The electric field just outside the surface is perpendicular to the surface.
- Larger surface charge density means a stronger field just outside.

If a tangential electric field existed on the surface, free charge would slide along the conductor, so equilibrium would not hold.

For a conductor surface with local surface charge density $$\sigma$$,

$$
E_{\text{outside}}=\frac{\sigma}{\varepsilon_0}.
$$

This comes from a thin Gaussian pillbox crossing the surface: the inside face has zero flux because the field inside the conductor is zero, and the outer face contributes $$EA$$.

For advanced conductor problems, the outward electrostatic pressure on a charged conducting surface is

$$
P=\frac{\sigma^2}{2\varepsilon_0}.
$$

One way to remember this is that the surface charge feels the field from the rest of the conductor, not the full field including itself; that gives the factor of $$1/2$$.

Three more facts about conductors recur constantly:

- **Charge concentrates where the surface curves most.** On an isolated conductor, regions of higher curvature (sharper points) carry higher surface charge density and therefore stronger fields just outside. This is why charge "leaks" off sharp points and why lightning rods are pointed.
- **A conductor shields its interior.** The field inside the conducting material is zero, and the field inside an empty cavity within a conductor is also zero (provided no charge sits in the cavity). A closed conductor thus isolates its interior from outside fields — a **Faraday cage**.
- **Grounding fixes the potential, not the charge.** Connecting a conductor to ground sets $$V=0$$ (taking $$V_\infty=0$$), but the conductor can still carry induced surface charge; grounding just lets whatever charge is needed flow to or from the Earth to hold $$V=0$$.

### Conducting cavities

A cavity inside a conductor is a useful place to apply Gauss's law carefully. Draw a Gaussian surface lying entirely inside the conducting material and wrapped tightly around the cavity wall. Since $$\vec E=0$$ everywhere in the conducting material,

$$
\oint \vec E\cdot d\vec A=0
\quad\Longrightarrow\quad
Q_{\text{enc}}=0.
$$

Therefore, the total charge on the inner cavity surface plus any charge placed inside the cavity must add to zero. If a charge $$q$$ sits inside the cavity, the inner wall carries total charge $$-q$$. The outer surface then carries whatever charge is required by the conductor's total charge.

For an isolated neutral conductor with a cavity charge $$q$$:

$$
Q_{\text{inner}}=-q,\qquad Q_{\text{outer}}=+q.
$$

If the same conductor is grounded, charge can flow to Earth. The inner wall still carries $$-q$$, but the outside does not need to carry $$+q$$; for a fully shielding grounded conductor, the exterior field can be zero.

:::warning
Do not confuse "field inside the conducting material is zero" with "potential is zero." The conductor is one equipotential, but that constant is only zero if the conductor is grounded or chosen as the reference.
:::

## Electric potential and potential energy

The electrostatic force is conservative, which lets us replace vector field bookkeeping with scalar energy.

### Review: Conservative forces

A force is **conservative** if the work it does between two points is path-independent, i.e.

$$
W=\int_A^B \vec F\cdot d\vec\ell
$$

depends only on the endpoints $$A$$ and $$B$$. Equivalently,

$$
\oint \vec F\cdot d\vec\ell=0
\qquad\Longleftrightarrow\qquad
\vec F=-\nabla U
$$

for some scalar potential energy $$U$$. Defining $$\Delta U=U(B)-U(A)=-W$$ then guarantees mechanical energy conservation, $$\Delta E_k+\Delta U=0$$, since the work–energy theorem gives $$\Delta E_k=W$$. Only **differences** in $$U$$ are physical; you must fix a reference where $$U=0$$, and that choice is arbitrary.

<div class="theorem-box">

**Proof (Coulomb force is conservative).** Move a charge $$q$$ from $$A$$ to $$B$$ in the field of a fixed charge $$Q$$ at the origin. Since $$\hat r\cdot d\vec\ell=dr$$,

$$
W=\int_A^B k\frac{Qq}{r^2}\hat r\cdot d\vec\ell
=\int_{r_A}^{r_B} k\frac{Qq}{r^2}\,dr
=kQq\left(\frac{1}{r_A}-\frac{1}{r_B}\right),
$$

which depends only on the initial and final distances—not the path. For a system of source charges, superposition makes the total work the sum of pairwise works, each of which is path-independent, so the total is path-independent too.

</div>

### Potential energy and potential

For a charge $$q$$ in the field of a fixed $$Q$$ with the reference at infinity, $$U(r)=kQq/r$$. In a general field, pick a reference point $$O$$ with $$U_O=0$$:

$$
E_p(A)=-\int_O^A q\vec E\cdot d\vec\ell .
$$

The **electric potential** is energy per unit charge,

$$
V(A)=\frac{E_p}{q}=-\int_O^A \vec E\cdot d\vec\ell,
\qquad V=\frac{kQ}{r}\ \text{(point charge)} .
$$

Potential superposes by ordinary addition, and for continuous distributions it becomes an integral:

$$
V=k\sum_i\frac{q_i}{r_i},
\qquad
V=k\int\frac{dq}{r}.
$$

When the field is already known from symmetry, it is usually faster to integrate it: $$\Delta V=-\int \vec E\cdot d\vec\ell$$. A useful consistency fact: $$\vec E$$ may jump across a charged surface, but $$V$$ is always **continuous**, because it is the integral of a bounded field across zero thickness.

<div class="theorem-box">

**Example.** Find the field on the axis of a uniformly charged ring of radius $$R$$ and charge $$Q$$.

The field integral requires projecting every element onto the axis. The *potential* integral does not: every element of the ring is the same distance $$r=\sqrt{x^2+R^2}$$ from the axial point $$x$$, so the "constant $$r$$" shortcut gives the answer with no integration at all,

$$
V(x)=\frac{k}{r}\int dq=\frac{kQ}{\sqrt{x^2+R^2}} .
$$

On the axis, symmetry makes $$\vec E$$ point along $$x$$, so the single derivative recovers the full field:

$$
E_x=-\frac{dV}{dx}=\frac{kQx}{(x^2+R^2)^{3/2}} .
$$

This is the same result the vector field integral gives, with far less work. The lesson generalizes: if you only need $$\vec E$$ along a symmetry axis, compute the scalar $$V$$ first and differentiate. However, it is important to note that $$V$$ has to be a function in order for the derivative to work.

</div>

### Choosing the reference point

For real (finite) charge distributions, $$V(\infty)=0$$ is always valid. It fails for idealized **infinite** distributions (e.g. an infinite line or plane) because $$V=k\int dq/r$$ diverges: the source itself extends out to the reference point. There you must choose a finite reference, and only potential differences in the region of interest carry meaning. The divergence is an artifact of the idealization, not a real physical infinity.

### Potentials worth memorizing

- **Uniform field:** $$\Delta V=-\vec E\cdot \vec d$$.
- **Center of a uniformly charged hemispherical shell** (radius $$R$$, charge $$Q$$): every element sits at distance $$R$$, so $$V=\frac{k}{R}\int dq=\frac{kQ}{R}$$. The same "constant $$r$$" trick gives the full shell.
- **Spherical shell:** $$V=kQ/r$$ outside, $$V=kQ/R$$ (constant) inside.
- **Solid sphere** (radius $$R$$): outside $$kQ/r$$; inside, integrating the interior field $$E=kQr/R^3$$ gives $$V(r)=\dfrac{kQ}{2R}\left(3-\dfrac{r^2}{R^2}\right)$$.
- **Coaxial cylinders**, linear densities $$\pm\lambda$$, radii $$R_A<R_B$$: $$V_A-V_B=\dfrac{\lambda}{2\pi\varepsilon_0}\ln\dfrac{R_B}{R_A}$$.
- **Parallel planes** $$\pm\sigma$$ separated by $$d$$: $$\Delta V=\dfrac{\sigma d}{\varepsilon_0}$$.

If you want, it is a good exercise to derive these yourself!

### Equipotential surfaces and the gradient

Writing the potential's total differential and comparing it with $$dV=-\vec E\cdot d\vec\ell$$ recovers the field component by component:

$$
dV=\frac{\partial V}{\partial x}dx+\frac{\partial V}{\partial y}dy+\frac{\partial V}{\partial z}dz=-E_x\,dx-E_y\,dy-E_z\,dz,
$$

so $$E_x=-\partial V/\partial x$$ (and likewise for $$y,z$$), i.e. $$\vec E=-\nabla V$$. The field is the **negative gradient** of the potential: it points in the direction of steepest *decrease* of $$V$$, with magnitude equal to that steepest slope.

An **equipotential surface** is a surface of constant $$V$$ — the second standard way (besides field lines) to picture a field. Two properties make them useful:

- **Field lines cross equipotentials at right angles.** Moving a charge along an equipotential changes $$V$$ by zero, so $$\vec E\cdot d\vec\ell=0$$ for any step within the surface; the field has no tangential component and is therefore perpendicular to the surface. (Equivalently, no work is done moving a charge along an equipotential.)
- **Closely spaced equipotentials mean a strong field.** Since $$E$$ is the rate of change of $$V$$ with distance, tightly packed surfaces — a large $$\Delta V$$ over a small distance — signal a large gradient and a strong field.

The surface of a conductor in equilibrium is itself an equipotential, which is exactly why field lines always meet a conductor perpendicularly.

### Problem-solving tips

A few habits that save the most time on potential problems:

:::tip{title="Potential problem habits"}
- **Reach for the scalar first.** Potential adds without components, so $$V=k\int dq/r$$ is almost always easier than the field integral. If you ultimately need $$\vec E$$ on a symmetry axis, find $$V$$ and take $$-\nabla V$$ (as in the ring example above).
- **Look for "constant $$r$$."** If every charge element is equidistant from the field point (e.g. the center of a ring, shell, arc, or hemisphere) the integral collapses to $$V=kQ/r$$ with no work.
- **If you already have $$\vec E$$, integrate it, don't re-integrate $$dq$$.** Once Gauss's law has given $$\vec E$$, use $$\Delta V=-\int\vec E\cdot d\vec\ell$$ along the simplest path (usually radial, so $$\vec E\cdot d\vec\ell=E\,dr$$).
- **Choose the reference to kill terms.** Use $$V(\infty)=0$$ for localized charge; for an infinite line or plane pick a convenient finite point and track only differences.
- **Use continuity of $$V$$ as a free check.** When you stitch together piecewise regions (inside/outside a shell, across a boundary), the pieces must agree in value even where $$\vec E$$ jumps. A mismatch means an algebra error.
:::

<div class="theorem-box">

**Example.** Two thin concentric spherical shells carry charge $$Q_1$$ (radius $$a$$) and $$Q_2$$ (radius $$b>a$$). Find $$V(r)$$ everywhere, with $$V(\infty)=0$$.

*Step 1 — field by Gauss's law in each region.* Only enclosed charge matters:

$$
E(r)=
\begin{cases}
0, & r<a,\\[1mm]
kQ_1/r^2, & a<r<b,\\[1mm]
k(Q_1+Q_2)/r^2, & r>b.
\end{cases}
$$

*Step 2 — integrate inward from infinity.* For $$r>b$$,

$$
V(r)=\frac{k(Q_1+Q_2)}{r}.
$$

*Step 3 — fix the next constant by continuity at $$r=b$$.* In $$a<r<b$$, integrating $$E=kQ_1/r^2$$ gives $$V=kQ_1/r+C$$. Matching to the outer solution at $$r=b$$,

$$
\frac{kQ_1}{b}+C=\frac{k(Q_1+Q_2)}{b}
\quad\Longrightarrow\quad
C=\frac{kQ_2}{b},
\qquad
V(r)=\frac{kQ_1}{r}+\frac{kQ_2}{b}.
$$

*Step 4 — inside the inner shell.* Here $$E=0$$, so $$V$$ is **constant**, equal to its value at $$r=a$$:

$$
V(r<a)=\frac{kQ_1}{a}+\frac{kQ_2}{b}.
$$

Each integration constant was pinned down by demanding $$V$$ be continuous at a boundary—the free check from the tips list, now doing real work.

</div>

### Energy of a charge configuration

There are three equivalent ways to compute the total potential energy stored in a configuration; choose whichever matches the problem.

**1. Pairwise sum.** Add the interaction energy of every distinct pair,

$$
U=\frac{1}{4\pi\varepsilon_0}\sum_{i<j}\frac{q_iq_j}{r_{ij}} .
$$

This excludes the (infinite) self-energy of idealized point charges. The method works because due to the conservativeness of the Coulomb force it doesn't matter what order you bring in the charges. However, this method is not typically used because it gets messier quickly as the number of charges increases.

**2. Charge times potential, halved.** Writing $$\sum_i q_iV_i$$ counts each pair twice, so

$$
U=\frac{1}{2}\sum_i q_iV_i
\qquad\Longrightarrow\qquad
U=\frac{1}{2}\int V\,dq
$$

for a continuous distribution, where $$V$$ is the potential of the *whole* distribution. Unlike the pairwise sum, this form **includes** self-energy (energy required to assemble the system against electrostatic repulsion).

**3. Charge it up.** Assemble the charge from zero, tracking $$V$$ as a function of the accumulated charge, and integrate $$U=\int V\,dq$$. This is the cleanest method when symmetry keeps the object near one potential as it charges: for instance a conductor, or a sphere built up shell by shell.

**4. Field energy** The field-energy viewpoint, $$U=\int \tfrac12\varepsilon_0E^2\,dV$$, is itself a fourth way to compute configuration energy and is sometimes the only practical one when no symmetry helps with potentials.

<div class="theorem-box">

**Example.** What is the potential energy of a solid sphere with radius $$R$$ and total charge $$Q$$ (evenly distributed)?

Build the sphere up shell by shell at fixed density $$\rho$$. When the assembled charge is $$q$$ at radius $$r$$ (final radius $$R$$), $$q=Q(r/R)^3$$, and the next shell $$dq=Q\,\dfrac{3r^2}{R^3}dr$$ is brought from infinity to the surface, which sits at $$V=kq/r=kQr^2/R^3$$. Hence

$$
dU=V\,dq=\frac{kQr^2}{R^3}\cdot\frac{3Qr^2}{R^3}\,dr
=\frac{3kQ^2}{R^6}r^4\,dr,
$$

$$
U=\int_0^R \frac{3kQ^2}{R^6}r^4\,dr=\frac{3}{5}\frac{kQ^2}{R}.
$$

</div>

<div class="theorem-box">

**Example.** Find the potential energy of a disk of radius $$R$$ with uniform surface density $$\sigma=Q/\pi R^2$$.

*Sub-result — potential at the rim.* First find the potential at a point $$P$$ on the edge of a uniform disk of radius $$s$$. Put the origin at $$P$$ and use plane polar coordinates $$(\rho,\varphi)$$ measured from the line through the center. The far boundary of the disk is the circle of radius $$s$$ centered a distance $$s$$ away, which in these coordinates is $$\rho=2s\cos\varphi$$ for $$\varphi\in[-\tfrac\pi2,\tfrac\pi2]$$. Then

$$
V_{\text{rim}}(s)=k\sigma\!\int_{-\pi/2}^{\pi/2}\!\!\int_0^{2s\cos\varphi}\frac{1}{\rho}\,\rho\,d\rho\,d\varphi
=k\sigma\!\int_{-\pi/2}^{\pi/2}\!2s\cos\varphi\,d\varphi
=4k\sigma s .
$$

The $$1/\rho$$ from Coulomb cancels the $$\rho$$ in the area element—this cancellation is exactly why the rim point is tractable while a generic interior point gives an elliptic integral.

*Build the disk up from the edge.* Grow the disk at constant $$\sigma$$ by depositing successive rings at the current rim. When the disk has radius $$s$$, the new ring $$dq=\sigma(2\pi s)\,ds$$ lands at potential $$V_{\text{rim}}(s)$$, so

$$
dU=V_{\text{rim}}(s)\,dq=(4k\sigma s)(2\pi\sigma s\,ds)=8\pi k\sigma^2 s^2\,ds,
$$

$$
U=\int_0^R 8\pi k\sigma^2 s^2\,ds=\frac{8\pi k\sigma^2 R^3}{3}
=\frac{8}{3\pi}\,\frac{kQ^2}{R},
$$

after substituting $$\sigma=Q/\pi R^2$$. The coefficient $$8/3\pi\approx0.85$$ is larger than the solid sphere's $$3/5$$ and the conducting sphere's $$1/2$$: flattening the same charge into a disk packs it closer together, raising the stored energy. Note the assembly order does not affect the answer — the same $$U$$ comes from $$\tfrac12\int V\,dq$$ over the finished disk, but that route needs the much harder interior potential.

</div>

## Capacitance

A conductor at electrostatic equilibrium is an equipotential. If you put charge $$Q$$ on a fixed isolated conductor, its potential relative to infinity is proportional to $$Q$$, because electrostatics is linear. That motivates **capacitance**:

$$
C=\frac{Q}{\Delta V}.
$$

Capacitance measures how much charge a geometry can store per volt. It depends only on the geometry and the material between conductors, not on the particular value of $$Q$$ or $$\Delta V$$. The sign convention is usually: $$Q$$ means the positive charge on one conductor and $$\Delta V$$ means the potential of that positive conductor minus the other conductor, so $$C>0$$.

For a single isolated conducting sphere of radius $$R$$,

$$
V=\frac{kQ}{R}
\qquad\Longrightarrow\qquad
C=4\pi\varepsilon_0R.
$$

Most devices use two conductors carrying equal and opposite charges $$+Q$$ and $$-Q$$. The electric field is mostly trapped between them, which makes the stored energy useful and controllable.

### Parallel-plate capacitor

For two large parallel conducting plates of area $$A$$ separated by distance $$d$$, ignore edge fringing if $$d$$ is much smaller than the plate dimensions. The charges live mainly on the inner faces, and the field between the plates is approximately uniform:

$$
E=\frac{\sigma}{\varepsilon_0}=\frac{Q}{\varepsilon_0 A}.
$$

The potential difference is

$$
\Delta V=Ed=\frac{Qd}{\varepsilon_0 A},
$$

so the capacitance is

$$
C=\frac{Q}{\Delta V}=\frac{\varepsilon_0 A}{d}.
$$

The approximations are doing real work here: near the edges, the field bulges outward, so the exact capacitance is slightly larger than $$\varepsilon_0A/d$$.

<div class="theorem-box">

**Example.** A parallel-plate capacitor has plate area $$A=2.0\times10^{-3}\ \text{m}^2$$ and separation $$d=1.0\ \text{mm}$$. It is connected to a $$12\ \text{V}$$ battery. Find the capacitance, stored charge, and electric field between the plates.

The capacitance is

$$
C=\frac{\varepsilon_0A}{d}
=\frac{(8.85\times10^{-12})(2.0\times10^{-3})}{1.0\times10^{-3}}
=1.77\times10^{-11}\ \text{F}.
$$

The charge is

$$
Q=CV=(1.77\times10^{-11})(12)=2.1\times10^{-10}\ \text{C}.
$$

The field is

$$
E=\frac{V}{d}
=\frac{12}{1.0\times10^{-3}}
=1.2\times10^4\ \text{V/m}.
$$

The battery fixes $$\Delta V$$; the geometry then decides how much charge must move onto the plates.

</div>

### Cylindrical and spherical capacitors

For capacitors with symmetry, the standard procedure is:

1. Use Gauss's law to find $$E(r)$$ between the conductors.
2. Integrate $$\Delta V=-\int\vec E\cdot d\vec\ell$$.
3. Use $$C=Q/\Delta V$$.

For coaxial cylinders of length $$L$$, inner radius $$a$$, and outer radius $$b$$,

$$
E(r)=\frac{\lambda}{2\pi\varepsilon_0r},
\qquad
\Delta V=\frac{\lambda}{2\pi\varepsilon_0}\ln\frac{b}{a},
\qquad
C=\frac{2\pi\varepsilon_0L}{\ln(b/a)}.
$$

For concentric spherical conductors with inner radius $$a$$ and outer radius $$b$$,

$$
E(r)=\frac{kQ}{r^2},
\qquad
\Delta V=kQ\left(\frac{1}{a}-\frac{1}{b}\right),
\qquad
C=\frac{4\pi\varepsilon_0}{1/a-1/b}.
$$

Letting $$b\to\infty$$ recovers the isolated sphere result $$C=4\pi\varepsilon_0a$$.

<div class="theorem-box">

**Example.** A coaxial cable has inner conductor radius $$a$$, outer conductor inner radius $$b$$, and length $$L$$. It carries charge $$+\lambda L$$ on the inner conductor and $$-\lambda L$$ on the outer conductor. Find the capacitance per unit length.

Between the conductors, Gauss's law with a coaxial cylindrical surface gives

$$
E(2\pi rL)=\frac{\lambda L}{\varepsilon_0}
\quad\Longrightarrow\quad
E(r)=\frac{\lambda}{2\pi\varepsilon_0r}.
$$

The potential difference from inner to outer conductor is

$$
V_a-V_b=\int_a^b E(r)\,dr
=\frac{\lambda}{2\pi\varepsilon_0}\ln\frac{b}{a}.
$$

Thus

$$
\frac{C}{L}=\frac{\lambda}{V_a-V_b}
=\frac{2\pi\varepsilon_0}{\ln(b/a)}.
$$

The logarithm is the signature of cylindrical symmetry; if you see coaxial conductors, expect $$\ln(b/a)$$ to appear.

</div>

### Energy stored in a capacitor

To charge a capacitor slowly, each extra bit of charge $$dq$$ must be moved across the current potential difference $$V=q/C$$. Therefore

$$
U=\int_0^Q V\,dq
=\int_0^Q\frac{q}{C}\,dq
=\frac{Q^2}{2C}.
$$

The usual equivalent forms are

$$
U=\frac{1}{2}QV=\frac{Q^2}{2C}=\frac{1}{2}CV^2.
$$

For a parallel-plate capacitor, this energy can also be viewed as living in the electric field. Since $$C=\varepsilon_0A/d$$ and $$E=V/d$$,

$$
U=\frac{1}{2}CV^2
=\frac{1}{2}\varepsilon_0E^2(Ad).
$$

So the energy density of an electric field is

$$
u_E=\frac{1}{2}\varepsilon_0E^2.
$$

This field-energy formula is much more general than the parallel-plate derivation suggests.

:::warning
If a battery charges a capacitor from zero to $$V$$, the battery supplies $$QV$$ of energy, but the capacitor stores only $$\tfrac12 QV$$. The other half is dissipated in the circuit during charging, even if the resistance is tiny.
:::

### Capacitors in circuits

For capacitors in **parallel**, the plates share the same potential difference. Charges add:

$$
Q_{\text{tot}}=Q_1+Q_2+\cdots
\quad\Longrightarrow\quad
C_{\text{eq}}=C_1+C_2+\cdots.
$$

For capacitors in **series**, there is one path and the same charge magnitude appears on each capacitor. Potential differences add:

$$
V_{\text{tot}}=V_1+V_2+\cdots
=Q\left(\frac{1}{C_1}+\frac{1}{C_2}+\cdots\right),
$$

so

$$
\frac{1}{C_{\text{eq}}}
=\frac{1}{C_1}+\frac{1}{C_2}+\cdots.
$$

Two circuit facts are especially useful in electrostatics problems:

- Points connected by ideal wire are at the same potential.
- The total charge on an isolated connected conductor network is conserved.

<div class="theorem-box">

**Example.** Capacitors $$C_1=2.0\ \mu\text{F}$$ and $$C_2=6.0\ \mu\text{F}$$ are connected in series across a $$12\ \text{V}$$ battery. Find the equivalent capacitance, charge on each capacitor, and voltage across each capacitor.

For series capacitors,

$$
\frac{1}{C_{\text{eq}}}
=\frac{1}{2.0}+\frac{1}{6.0}
=\frac{2}{3}
\quad(\mu\text{F})^{-1},
$$

so

$$
C_{\text{eq}}=1.5\ \mu\text{F}.
$$

The same charge magnitude appears on both capacitors:

$$
Q=C_{\text{eq}}V=(1.5\ \mu\text{F})(12\ \text{V})=18\ \mu\text{C}.
$$

The voltage drops are

$$
V_1=\frac{Q}{C_1}=\frac{18}{2.0}=9.0\ \text{V},
\qquad
V_2=\frac{Q}{C_2}=\frac{18}{6.0}=3.0\ \text{V}.
$$

The smaller capacitor gets the larger voltage drop. That is the capacitor version of "same charge, different capacitance."

</div>

### Force between capacitor plates

The plates of a charged capacitor attract. For a parallel-plate capacitor with fixed charge $$Q$$ and area $$A$$, one plate feels the field from the *other* plate, not its own field:

$$
E_{\text{other}}=\frac{\sigma}{2\varepsilon_0}.
$$

Thus

$$
F=QE_{\text{other}}
=\frac{\sigma^2A}{2\varepsilon_0}
=\frac{Q^2}{2\varepsilon_0A}.
$$

Equivalently, the field pressure is

$$
P=\frac{F}{A}=\frac{1}{2}\varepsilon_0E^2=\frac{\sigma^2}{2\varepsilon_0}.
$$

This is the same pressure formula from charged conductor surfaces, now showing up as a plate force.

## Electric dipoles

An electric dipole is a pair of equal and opposite charges separated by a small displacement. Its dipole moment is

$$
\vec p=q\vec d,
$$

where $$\vec d$$ points from the negative charge to the positive charge. For a continuous charge distribution,

$$
\vec p=\int \vec r\,dq,
$$

with $$dq=\rho\,dV$$, $$\sigma\,dA$$, or $$\lambda\,d\ell$$ depending on the distribution. This definition assumes the total charge is zero; otherwise the dipole moment depends on the coordinate origin.

### Dipole in an external field

In a uniform electric field, the two forces on the charges cancel, so the net force is zero. But the forces usually form a torque:

$$
\vec\tau=\vec p\times\vec E.
$$

The potential energy is

$$
U=-\vec p\cdot\vec E=-pE\cos\theta.
$$

The lowest-energy orientation has $$\vec p$$ parallel to $$\vec E$$; the highest-energy orientation has it antiparallel. If the field is nonuniform, the forces on the two ends no longer cancel exactly, so the dipole can feel a net force. In one dimension, when $$\vec p$$ and $$\vec E$$ both point along $$x$$,

$$
F_x=p\frac{dE}{dx}.
$$

### Field and potential of a dipole

Put charges $$+q$$ and $$-q$$ on the $$z$$-axis, separated by distance $$d$$, and look far away where $$r\gg d$$. The potential is approximately

$$
V(r,\theta)=k\frac{p\cos\theta}{r^2}
=k\frac{\vec p\cdot\hat r}{r^2}.
$$

The important fact is the decay rate: a dipole potential falls like $$1/r^2$$, and its field falls like $$1/r^3$$, faster than a point charge because the total charge cancels at large distances.

Two special field values are worth knowing:

$$
E_{\text{axis}}=\frac{1}{4\pi\varepsilon_0}\frac{2p}{r^3}
\quad\text{along } \vec p,
$$

and

$$
E_{\text{equator}}=\frac{1}{4\pi\varepsilon_0}\frac{p}{r^3}
\quad\text{opposite } \vec p.
$$

The middle plane perpendicular to $$\vec p$$ has $$V=0$$, but the electric field there is not zero.

<div class="theorem-box">

**Example.** A dipole with moment $$p$$ is placed in a uniform electric field $$E$$ at angle $$\theta$$ from the field direction. Find the torque magnitude and the work an external agent must do to rotate it slowly from parallel to perpendicular.

The torque magnitude is

$$
\tau=pE\sin\theta.
$$

The potential energy is $$U=-pE\cos\theta$$. Parallel means $$\theta=0$$, so $$U_i=-pE$$. Perpendicular means $$\theta=\pi/2$$, so $$U_f=0$$. If the rotation is slow, the external work equals the change in potential energy:

$$
W_{\text{ext}}=\Delta U=0-(-pE)=pE.
$$

The field wants to align the dipole; an external agent must add energy to turn it away from alignment.

</div>

## Dielectrics and polarization

A dielectric is an insulating material whose charges are bound to atoms or molecules. It does not let charge flow freely the way a conductor does, but an applied electric field can slightly separate or align the positive and negative charge inside it. This creates **polarization**.

The polarization vector $$\vec P$$ is dipole moment per unit volume:

$$
\vec P=\frac{\Delta\vec p}{\Delta V}.
$$

For a simple homogeneous, isotropic, linear dielectric,

$$
\vec P=\chi_e\varepsilon_0\vec E,
$$

where $$\chi_e$$ is the electric susceptibility. Then

$$
\vec D=\varepsilon_0\vec E+\vec P
=\varepsilon_0(1+\chi_e)\vec E
=\varepsilon\vec E
=\kappa\varepsilon_0\vec E,
$$

where $$\kappa=1+\chi_e$$ is the dielectric constant and $$\varepsilon=\kappa\varepsilon_0$$ is the permittivity.

### Bound charge

Polarization creates bound charge: charge that appears because microscopic dipoles are shifted or aligned, but remains attached to the material. For a polarized surface,

$$
\sigma_b=\vec P\cdot\hat n.
$$

If $$\vec P$$ is uniform, volume bound charge cancels inside the material and only surface bound charge remains. If $$\vec P$$ changes from point to point, volume bound charge can appear too.

Gauss's law can be rewritten to separate free charge (charge placed on conductors, batteries, or external sources) from bound charge:

$$
\oint \vec D\cdot d\vec A=Q_{\text{free, enc}}.
$$

For linear dielectrics with constant $$\kappa$$, this often means "replace $$\varepsilon_0$$ by $$\kappa\varepsilon_0$$" in capacitor formulas. That shortcut works only when the dielectric fills the field region cleanly and the geometry stays symmetric.

### Dielectric-filled capacitors

If a parallel-plate capacitor is completely filled with a linear dielectric of constant $$\kappa$$,

$$
C=\kappa\frac{\varepsilon_0A}{d}.
$$

The dielectric increases capacitance because polarization reduces the electric field for a given free charge:

$$
E=\frac{\sigma_{\text{free}}}{\kappa\varepsilon_0}.
$$

For fixed free charge $$Q$$, inserting the dielectric lowers $$V$$ and lowers the stored energy $$U=Q^2/(2C)$$. For fixed voltage $$V$$, a connected battery supplies extra charge, so $$Q=CV$$ and $$U=\tfrac12CV^2$$ increase.

<div class="theorem-box">

**Example.** A parallel-plate capacitor of capacitance $$C_0$$ is charged to voltage $$V_0$$ and then disconnected from the battery. A dielectric with constant $$\kappa$$ is inserted so it fills the gap. Find the new capacitance, charge, voltage, and stored energy.

The capacitance becomes

$$
C=\kappa C_0.
$$

Because the capacitor is disconnected, no charge can enter or leave:

$$
Q=Q_0=C_0V_0.
$$

The new voltage is

$$
V=\frac{Q}{C}
=\frac{C_0V_0}{\kappa C_0}
=\frac{V_0}{\kappa}.
$$

The new energy is

$$
U=\frac{Q^2}{2C}
=\frac{Q_0^2}{2\kappa C_0}
=\frac{1}{\kappa}U_0.
$$

The energy decreases. The missing energy goes into mechanical work as the dielectric is pulled into the capacitor (and eventually heat if the motion is damped).

</div>

## Method of images

The **method of images** replaces certain conductor problems with fake charges placed outside the physical region. The key idea is that a grounded conductor has fixed potential $$V=0$$. If you can place imaginary charges so that the conductor surface is also at $$V=0$$, then the field in the real region matches the actual conductor problem.

This works because of the **uniqueness theorem**: if a region is bounded by surfaces of specified potential (conductors, or infinity) and the charge in the region's interior is specified, then the potential throughout the region is *unique*. So any candidate that (i) obeys Gauss's law and the loop law and (ii) matches every boundary condition must be *the* answer — there is no other. That licenses pure guesswork: if some arrangement of fictitious "image" charges reproduces the correct boundary potential, the field it gives in the real region is guaranteed correct.

<div class="theorem-box">

**Example.** A charge $$+q$$ is a distance $$a$$ above an infinite grounded conducting plane. Find the force induced on the charge.

Replace the plane by an image charge $$-q$$ a distance $$a$$ below the plane.

At every point on the plane, the distances to $$+q$$ and $$-q$$ are equal, so their potentials cancel:

$$
V=k\frac{q}{r}+k\frac{-q}{r}=0.
$$

Thus the image-charge setup satisfies the grounded-plane boundary condition. The force on the real charge equals the Coulomb attraction to the image charge:

$$
F=k\frac{q^2}{(2a)^2}
=\frac{kq^2}{4a^2},
$$

directed toward the conducting plane.

The image also gives the surface charge density on the real plane. Put the real charge at $$(0,0,a)$$ and the grounded plane at $$z=0$$. Just above the conductor, the normal field is the $$z$$-component of the field from the real charge plus image charge:

$$
E_z(\rho,0^+)
=-\frac{1}{4\pi\varepsilon_0}\frac{2qa}{(\rho^2+a^2)^{3/2}},
$$

so

$$
\sigma(\rho)=\varepsilon_0E_z
=-\frac{qa}{2\pi(\rho^2+a^2)^{3/2}}.
$$

Integrating this over the whole plane gives total induced charge $$-q$$, as expected for a grounded infinite plane. The potential energy of the real charge-conductor system is **not** simply $$kq(-q)/(2a)$$; that would double-count the conductor response. The correct energy is half the real-charge/image interaction:

$$
U=-\frac{kq^2}{4a}.
$$

</div>

<div class="theorem-box">

**Example.** A point charge $$q$$ sits a distance $$a$$ from the center of a grounded conducting sphere of radius $$R$$ (with $$a>R$$). Find the force induced on the charge.

A single mirror charge no longer works, but one cleverly placed image does: put

$$
q'=-\frac{R}{a}\,q
$$

on the line from the center to $$q$$, at distance

$$
b=\frac{R^2}{a}
$$

from the center (inside where the sphere sits). One can check that the surface $$r=R$$ is then exactly the $$V=0$$ surface of the pair $$\{q,q'\}$$: for every point on the sphere the distances to $$q$$ and $$q'$$ are in the constant ratio $$a/R$$, so $$kq/r_q+kq'/r_{q'}=0$$. By uniqueness, the field outside the sphere is just that of $$q$$ and its image. The charge is therefore attracted to the sphere with force

$$
F=\frac{kqq'}{(a-b)^2}=-\frac{kq^2 Ra}{(a^2-R^2)^2},
$$

and the total induced charge on the grounded sphere is exactly $$q'=-(R/a)q$$.

</div>

---

## Problem-solving strategy

A short decision tree for which tool to pull off the shelf:

:::strategy{title="Which electrostatics tool to use"}
1. **A handful of discrete point charges, want force or field:** Coulomb's law $$\vec F=k\dfrac{q_1q_2}{r^2}\hat r$$ with vector superposition $$\vec E_{\text{net}}=\sum_i\vec E_i$$. Resolve into components or use symmetry to kill a direction before adding — never sum magnitudes.
2. **The distribution has spherical, cylindrical, or planar symmetry:** Gauss's law $$\oint\vec E\cdot d\vec A=\dfrac{Q_{\text{enc}}}{\varepsilon_0}$$ with the matching Gaussian surface (sphere/cylinder/pillbox). Reach for the memorized shell, solid-sphere, line, and sheet ($$E=\sigma/2\varepsilon_0$$) results rather than re-deriving.
3. **A continuous blob with no useful symmetry:** Integrate. Set $$dq=\lambda\,d\ell$$, $$\sigma\,dA$$, or $$\rho\,dV$$, pick good coordinates, project the surviving component, then integrate $$dE=k\,dq/r^2$$. You may need to do double or even triple integrals.
4. **You only need a speed, closest approach, or escape condition:** Energy, not force. The Coulomb force is conservative, so $$\Delta K=-\Delta U$$ with $$U=kQq/r$$ (reference at infinity for localized charge) collapses the problem to its endpoints.
5. **You need $$\vec E$$ on a symmetry axis, or any field where the geometry is messy:** Compute the scalar $$V=k\int dq/r$$ first (it adds without components), then take $$\vec E=-\nabla V$$. Watch for the "constant $$r$$" shortcut (ring/shell/arc) that makes the integral trivial.
6. **A conductor is involved:** Inside, $$\vec E=0$$ and the surface is an equipotential; just outside, $$E=\sigma/\varepsilon_0$$ (perpendicular). For a charge near a grounded plane or sphere, replace the conductor with an image charge that pins the surface to $$V=0$$, then treat it as a point-charge problem.
7. **You need total stored energy:** Pick the form that matches the symmetry — pairwise sum $$\dfrac{1}{4\pi\varepsilon_0}\sum_{i<j}\dfrac{q_iq_j}{r_{ij}}$$ (excludes self-energy), $$\tfrac12\int V\,dq$$ or "charge it up" $$\int V\,dq$$ (includes it), or the field integral $$\int\tfrac12\varepsilon_0E^2\,dV$$ when no symmetry helps with potentials.
8. **A capacitor or dielectric is involved:** First decide what is fixed: charge, voltage, or geometry. Use $$C=Q/\Delta V$$, symmetry to derive $$C$$ when needed, and $$U=\tfrac12QV=Q^2/(2C)=\tfrac12CV^2$$ with the form matching the fixed quantity.
9. **A dipole is involved:** Use $$\vec p=q\vec d$$, $$\vec\tau=\vec p\times\vec E$$, and $$U=-\vec p\cdot\vec E$$ for external fields. Far from the dipole, remember the faster decay: $$V\sim1/r^2$$ and $$E\sim1/r^3$$.
:::
