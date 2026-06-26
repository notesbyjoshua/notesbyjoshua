---
title: "Electrostatics"
sidebar:
  order: 12
---

---

## Charges

All atoms that make up matter contains protons, electrons, and neutrons, and ordinary charging is mostly about moving electrons. A proton has charge $$+e$$, an electron has charge $$-e$$, and a neutron is neutral, where

$$
e=1.602\times 10^{-19}\text{ C}.
$$

This is known as an **elementary charge**. Macroscopic charge is usually a tiny imbalance of electrons compared with the total number of particles in an object. Charge is conserved: it can move from one object to another, but it is not created or destroyed in ordinary electrostatics. As you go to quantum levels (which is not needed for USAPhO), charged particles are created and annilhated in matter-antimatter pairs.

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

### Flux tricks (bypassing surface integrals)

The point of these tricks is to use enclosed charge and field-line geometry to avoid integrating over weird boundaries.

- **The "anchor" trick (1D sheets).** If a layered system is overall neutral—for example a P–N junction with $$\rho_p x_p=\rho_n x_n$$—the field completely outside it is exactly $$0$$. Anchor one end of a Gaussian pillbox in that zero-field region: the outside face then contributes no flux, so the flux equation collapses to "field on the inner face equals enclosed charge over $$\varepsilon_0$$." This turns a messy stack of sheets into a single application of Gauss's law.

- **Self-flux vs. other-flux.** A charge cannot exert a net force on itself, so to get the force on one face of a charged shape you want the field due to *everything except that face*. The clean way: find the total outward flux of the whole shape, then subtract the flat face's own "self-flux" to isolate the contribution from the rest of the object.

$$
\Phi_{\text{self}}=\frac{\sigma A}{2\varepsilon_0},
\qquad
F=\sigma\,\Phi_{\text{other}}.
$$

This is the same $$1/2$$ that appears in the electrostatic pressure $$P=\sigma^2/2\varepsilon_0$$ below: a surface charge feels the field of the *rest* of the distribution, not the full field including itself.

- **Flux tubes (conserved field lines).** Rotating a single field line about the axis through a point charge sweeps out a cone. Since field lines are neither created nor destroyed in empty space, the flux trapped in the "launch" cone must equal the flux entering the "landing" cone. For a point charge $$q$$ at the apex, the flux through a cone of half-angle $$\theta$$ is the solid-angle fraction of the total $$q/\varepsilon_0$$:

$$
\Phi=\frac{q}{\varepsilon_0}\left(\frac{1-\cos\theta}{2}\right).
$$

Equating the trapped flux at the two ends gives the conservation relation

$$
q_1\,(1-\cos\alpha)=q_2\,(1-\cos\beta),
$$

which lets you relate launch and landing angles of a field line between two charges without ever solving the field explicitly.

### Electrostatic equilibrium in conductors

In a conductor at electrostatic equilibrium, charges have stopped moving macroscopically. Therefore:

:::key{name="Conductor at electrostatic equilibrium"}
- $$\vec E=0$$ inside the conducting material.
- Excess charge lies on the conductor's surface.
- The electric field just outside the surface is perpendicular to the surface.
- Larger surface charge density means a stronger field just outside.
:::

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

This excludes the (infinite) self-energy of idealized point charges. The method works because due to the conservativeness of the Coulomb force it doesn't matter what order you bring in the charges. However, this method is not typically used bacuse it increases with complexity as you increase the amount of charges.

**2. Charge times potential, halved.** Writing $$\sum_i q_iV_i$$ counts each pair twice, so

$$
U=\frac{1}{2}\sum_i q_iV_i
\qquad\Longrightarrow\qquad
U=\frac{1}{2}\int V\,dq
$$

for a continuous distribution, where $$V$$ is the potential of the *whole* distribution. Unlike the pairwise sum, this form **includes** self-energy (energy required to assemble the system again electrostatic repulsion).

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
:::