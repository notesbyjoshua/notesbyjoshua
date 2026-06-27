---
title: "Magnetism & Electrodynamics"
next: false
sidebar:
  order: 13
---

# Magnetism & Electrodynamics

---

## Magnetic force and the motion of charges

A magnetic field exerts a force on moving charge, and on nothing else: a charge at rest in a pure magnetic field feels nothing, no matter how strong the field. This single fact — that the force depends on velocity — is what makes magnetism feel so different from the electrostatics of [Electrostatics](/notes/physics/electro1/), and it is the source of nearly every device in this section, from mass spectrometers to cyclotrons.

### The Lorentz force

<div class="theorem-box">

**Theorem (Lorentz force).** The total electromagnetic force on a point charge $$q$$ moving with velocity $$\vec v$$ in fields $$\vec E$$ and $$\vec B$$ is

$$
\vec F=q\left(\vec E+\vec v\times\vec B\right).
$$

</div>

The electric part $$q\vec E$$ is the familiar push along the field. The magnetic part,

$$
\vec F_B=q\,\vec v\times\vec B,
$$

is new, and its cross-product structure controls everything. Three consequences are worth burning in immediately.

**It depends on velocity.** A stationary charge ($$\vec v=0$$) feels no magnetic force. Only motion couples to $$\vec B$$.

**It is perpendicular to both $$\vec v$$ and $$\vec B$$.** The direction is set by the right-hand rule: point the fingers along $$\vec v$$, curl toward $$\vec B$$, and the thumb gives $$\vec v\times\vec B$$ — then flip the result if $$q<0$$. The magnitude is

$$
F_B=\lvert q\rvert\,vB\sin\theta,
$$

where $$\theta$$ is the angle between $$\vec v$$ and $$\vec B$$; the force vanishes when the charge moves parallel to the field and is largest when it moves across it.

**It does no work.** Because $$\vec F_B\perp\vec v$$ always,

$$
P=\vec F_B\cdot\vec v=q(\vec v\times\vec B)\cdot\vec v=0,
$$

since $$\vec v\times\vec B$$ is orthogonal to $$\vec v$$. The magnetic force can bend a trajectory but can never change a particle's speed or kinetic energy. Whenever a charged particle in a static magnetic field speeds up, an electric field (perhaps an induced one) must be doing the work — never $$\vec B$$ alone. This is the single most useful check in the whole subject.

The SI unit of magnetic field is the **tesla**, $$1\ \text{T}=1\ \text{kg}/(\text{C}\cdot\text{s})=1\ \text{N}/(\text{A}\cdot\text{m})$$. A tesla is large: the Earth's field is around $$5\times10^{-5}\ \text{T}$$, a refrigerator magnet a few times $$10^{-2}\ \text{T}$$, and a strong lab electromagnet a few teslas. The older unit, the **gauss**, satisfies $$1\ \text{T}=10^4\ \text{G}$$.

### Force on a current-carrying wire

A current is just charge in motion, so a wire carrying current through a field feels the sum of the Lorentz forces on its carriers. Consider a straight segment of length $$L$$ carrying current $$I$$ in a uniform field $$\vec B$$. If the mobile carriers have density $$n$$, charge $$q$$, drift velocity $$\vec v_d$$, and the wire has cross-section $$A$$, the number of carriers in the segment is $$nAL$$ and each feels $$q\,\vec v_d\times\vec B$$. The total is

$$
\vec F=(nAL)\,q\,\vec v_d\times\vec B=(nAq v_d)\,L\,\hat v_d\times\vec B.
$$

But $$nAq v_d=I$$ is exactly the current, so defining $$\vec L$$ as a vector of length $$L$$ pointing along the conventional current,

$$
\vec F=I\,\vec L\times\vec B.
$$

For a wire that curves or sits in a nonuniform field, apply this to each infinitesimal piece $$d\vec\ell$$ (again pointing along the current):

$$
d\vec F=I\,d\vec\ell\times\vec B,
\qquad
\vec F=I\!\int d\vec\ell\times\vec B.
$$

<div class="theorem-box">

**Example.** A semicircular wire of radius $$R$$ carries current $$I$$ in a uniform field $$\vec B$$ pointing out of the plane of the semicircle. Find the net force on it.

Place the semicircle in the $$xy$$-plane with its diameter along the $$x$$-axis and $$\vec B=B\hat z$$. A piece at angle $$\phi$$ sits at $$(R\cos\phi,R\sin\phi)$$, and the current tangent is $$d\vec\ell=R\,d\phi\,(-\sin\phi,\cos\phi,0)$$. Then

$$
d\vec F=I\,d\vec\ell\times B\hat z
=IBR\,d\phi\,(-\sin\phi,\cos\phi,0)\times(0,0,1).
$$

Using $$(\hat x)\times\hat z=-\hat y$$ and $$(\hat y)\times\hat z=\hat x$$,

$$
d\vec F=IBR\,d\phi\,(\cos\phi\,\hat x+\sin\phi\,\hat y).
$$

Integrating $$\phi$$ from $$0$$ to $$\pi$$, the $$\hat x$$ part gives $$\int_0^\pi\cos\phi\,d\phi=0$$ and the $$\hat y$$ part gives $$\int_0^\pi\sin\phi\,d\phi=2$$, so

$$
\vec F=2IBR\,\hat y.
$$

This is exactly $$I\vec L\times\vec B$$ with $$\vec L$$ the straight chord of length $$2R$$ joining the endpoints — a general and very handy fact: **in a uniform field the force on any wire depends only on the straight vector from start to end**, because $$\int d\vec\ell$$ is that chord. A closed loop ($$\oint d\vec\ell=0$$) therefore feels zero *net* force in a uniform field, though it can feel a torque.

</div>

### Circular and helical motion in a uniform field

Send a charge into a uniform $$\vec B$$ with velocity perpendicular to the field. The force $$q\vec v\times\vec B$$ has constant magnitude $$\lvert q\rvert vB$$ (speed is constant, since $$\vec B$$ does no work) and always points perpendicular to the motion — exactly the condition for uniform circular motion. Setting the magnetic force equal to the centripetal requirement,

$$
\lvert q\rvert vB=\frac{mv^2}{r}
\quad\Longrightarrow\quad
r=\frac{mv}{\lvert q\rvert B}=\frac{p}{\lvert q\rvert B}.
$$

The radius grows with momentum and shrinks with field strength. The angular frequency of the orbit, the **cyclotron frequency**, is

$$
\omega_c=\frac{v}{r}=\frac{\lvert q\rvert B}{m},
\qquad
T=\frac{2\pi}{\omega_c}=\frac{2\pi m}{\lvert q\rvert B}.
$$

The remarkable feature is that $$\omega_c$$ and $$T$$ **do not depend on the speed or the radius** — a fast particle traces a big circle and a slow one a small circle, but both complete a revolution in the same time. This speed-independence is precisely what makes the cyclotron work.

If the velocity also has a component $$v_\parallel$$ along $$\vec B$$, the field exerts no force on that component ($$\vec v_\parallel\times\vec B=0$$), so it coasts unchanged while the perpendicular part $$v_\perp$$ circles. The superposition is a **helix**: a circle of radius $$r=mv_\perp/(\lvert q\rvert B)$$ drifting steadily along the field lines. The distance advanced per revolution, the **pitch**, is

$$
p_{\text{pitch}}=v_\parallel T=\frac{2\pi m\,v_\parallel}{\lvert q\rvert B}.
$$

This helical guiding of charges along field lines is why charged particles from the Sun spiral down Earth's field lines toward the poles, producing the aurorae.

<div class="theorem-box">

**Example.** A proton ($$m=1.67\times10^{-27}\ \text{kg}$$, $$q=1.60\times10^{-19}\ \text{C}$$) moves at $$v=3.0\times10^{6}\ \text{m/s}$$ perpendicular to a uniform field $$B=0.50\ \text{T}$$. Find the orbit radius, the cyclotron frequency, and the period.

The radius is

$$
r=\frac{mv}{qB}
=\frac{(1.67\times10^{-27})(3.0\times10^{6})}{(1.60\times10^{-19})(0.50)}
=6.3\times10^{-2}\ \text{m},
$$

about $$6.3\ \text{cm}$$. The cyclotron frequency is

$$
\omega_c=\frac{qB}{m}
=\frac{(1.60\times10^{-19})(0.50)}{1.67\times10^{-27}}
=4.8\times10^{7}\ \text{rad/s},
$$

independent of the speed, and the period is

$$
T=\frac{2\pi}{\omega_c}
=1.3\times10^{-7}\ \text{s}.
$$

Doubling the proton's speed would double the radius to $$12.6\ \text{cm}$$ but leave $$\omega_c$$ and $$T$$ completely unchanged.

</div>

### Crossed fields: the velocity selector and the $$\vec E\times\vec B$$ drift

When $$\vec E$$ and $$\vec B$$ are both present and perpendicular to each other, their forces can be made to fight. Suppose $$\vec B=B\hat z$$, $$\vec E=E\hat y$$, and a positive charge moves along $$\hat x$$ with speed $$v$$. The electric force is $$qE\,\hat y$$; the magnetic force is $$q\vec v\times\vec B=qvB\,(\hat x\times\hat z)=-qvB\,\hat y$$. These cancel when

$$
qE=qvB
\quad\Longrightarrow\quad
v=\frac{E}{B}.
$$

A charge at exactly this speed sails straight through undeflected, *regardless of its charge or mass*; faster or slower charges are bent aside. A slit downstream then transmits only particles of one chosen speed — this is a **velocity selector**, the standard front end of a mass spectrometer.

What happens to a charge that is *not* at the selecting speed? The motion is the superposition of cyclotron circling and a steady sideways drift. Work in the frame moving with velocity $$\vec v_d$$; if we can choose $$\vec v_d$$ so the electric force is exactly cancelled by the magnetic force in that frame, the charge merely circles there. The cancellation condition $$q\vec E+q\,\vec v_d\times\vec B=0$$ is solved by crossing with $$\vec B$$:

$$
\vec v_d=\frac{\vec E\times\vec B}{B^2}.
$$

This is the **$$\vec E\times\vec B$$ drift**. Its derivation deserves a careful look because the result is striking — the drift is independent of the charge, its sign, and its mass.

<div class="theorem-box">

**Derivation ($$\vec E\times\vec B$$ drift).** Take $$\vec B=B\hat z$$ and $$\vec E=E\hat y$$. The equations of motion $$m\dot{\vec v}=q(\vec E+\vec v\times\vec B)$$ have components

$$
m\dot v_x=q(v_y B),\qquad
m\dot v_y=q(E-v_x B),\qquad
m\dot v_z=0.
$$

Look for a steady solution by guessing a constant drift plus circular motion. Substitute $$v_x=u_x+\bar v_x$$, $$v_y=u_y+\bar v_y$$ where the bars are constants chosen to kill the inhomogeneous terms. We need

$$
0=q\bar v_y B,\qquad
0=q(E-\bar v_x B),
$$

so $$\bar v_y=0$$ and $$\bar v_x=E/B$$. The leftover $$(u_x,u_y)$$ then obey $$m\dot u_x=qBu_y$$, $$m\dot u_y=-qBu_x$$, the pure cyclotron circle. Thus the full motion is a circle of frequency $$\omega_c=qB/m$$ superimposed on a uniform drift

$$
\bar{\vec v}=\frac{E}{B}\,\hat x=\frac{\vec E\times\vec B}{B^2},
$$

since $$\vec E\times\vec B=(E\hat y)\times(B\hat z)=EB\,\hat x$$. Notice $$q$$ and $$m$$ have dropped out of the drift entirely: positive and negative charges, heavy and light, all drift the same way at the same speed. (Physically, a positive and a negative charge curve oppositely but also circulate oppositely, and the two reversals combine to push both the same direction.) The trajectory is a **cycloid** — the path traced by a point on a rolling wheel.

</div>

### Applications

**Mass spectrometer.** Send a beam through a velocity selector so every surviving particle has speed $$v=E/B$$. Let those particles enter a region of pure field $$B'$$ perpendicular to their motion. Each curves into a semicircle of radius $$r=mv/(qB')$$ and lands on a detector a distance $$2r$$ from the entrance slit. Measuring $$2r$$ pins down the mass directly.

<div class="theorem-box">

**Example.** Singly ionized atoms ($$q=e=1.60\times10^{-19}\ \text{C}$$) pass a velocity selector with $$E=3.0\times10^{4}\ \text{V/m}$$ and $$B=0.20\ \text{T}$$, then enter a deflecting field $$B'=0.40\ \text{T}$$. An ion strikes the detector $$2r=0.250\ \text{m}$$ from the slit. Find its mass.

The selected speed is

$$
v=\frac{E}{B}=\frac{3.0\times10^{4}}{0.20}=1.5\times10^{5}\ \text{m/s}.
$$

The deflection radius is $$r=0.125\ \text{m}$$, and $$r=mv/(qB')$$ gives

$$
m=\frac{qB'r}{v}
=\frac{(1.60\times10^{-19})(0.40)(0.125)}{1.5\times10^{5}}
=5.3\times10^{-26}\ \text{kg}.
$$

Dividing by the atomic mass unit $$1.66\times10^{-27}\ \text{kg}$$ gives about $$32\ \text{u}$$ — a sulfur ion (or $$\text{O}_2^+$$). Different isotopes, having different $$m$$ but the same charge and selected speed, land at different radii, which is how the device separates them.

</div>

**Cyclotron.** A cyclotron accelerates ions using the speed-independence of $$\omega_c$$. Two hollow D-shaped electrodes ("dees") sit in a uniform $$\vec B$$; the gap between them carries an oscillating voltage. Inside each dee there is no electric field, so an ion coasts in a semicircle at frequency $$\omega_c$$; each time it crosses the gap, the voltage — flipped in phase with $$\omega_c$$ — gives it a kick. Because $$\omega_c$$ is the same at every radius, a *single fixed* drive frequency stays in step as the ion spirals outward to ever-larger, faster orbits. This synchrony breaks down at high energy: once the ion's speed approaches $$c$$, its relativistic mass increase makes $$\omega_c=qB/(\gamma m)$$ drop, the ion falls behind the drive, and a plain cyclotron stops working — the fix is to ramp $$B$$ or sweep the frequency (synchrocyclotron), as treated under [Relativity](/notes/physics/relativity/).

**Hall effect.** Run a current through a conducting strip placed in a transverse magnetic field, and a voltage appears *across* the strip, perpendicular to both. The sign of that voltage reveals whether the moving carriers are positive or negative — a question no measurement of the current alone can answer.

<div class="theorem-box">

**Derivation (Hall voltage).** A flat conductor of width $$w$$ and thickness $$t$$ carries current $$I$$ in the $$\hat x$$ direction; a field $$\vec B=B\hat z$$ pierces it. Let the carriers have charge $$q$$, number density $$n$$, and drift velocity $$\vec v_d=v_d\hat x$$ (with $$v_d>0$$ if $$q>0$$ carries the current along $$\hat x$$). Each carrier feels a magnetic force

$$
\vec F_B=q\,\vec v_d\times\vec B=q v_d B\,(\hat x\times\hat z)=-q v_d B\,\hat y,
$$

pushing carriers toward one edge. They pile up there, building a transverse **Hall field** $$\vec E_H=E_H\hat y$$ until the electric force balances the magnetic one in steady state:

$$
qE_H=q v_d B
\quad\Longrightarrow\quad
E_H=v_d B.
$$

The **Hall voltage** across the width is $$V_H=E_H w=v_d B w$$. Now eliminate the drift speed using $$I=nqv_d A=nq v_d (wt)$$, so $$v_d=I/(nqwt)$$:

$$
V_H=\frac{IB}{nqt}.
$$

The sign of $$V_H$$ — which edge ends up positive — flips with the sign of $$q$$. So measuring the polarity of the Hall voltage directly reveals the **sign of the charge carriers**, the experiment's most famous payoff: it showed that conduction in some materials (e.g. many semiconductors) is carried by effectively *positive* charges (holes), not electrons. The magnitude also yields the carrier density $$n$$, making the Hall effect a workhorse probe of materials.

</div>

### Magnetism as the relativistic shadow of electrostatics

A final piece of intuition ties the whole subject to the previous page. Magnetism is not an independent fifth force; it is what electrostatics looks like once you account for special relativity. Consider a neutral current-carrying wire: in the lab frame the positive lattice and the conduction electrons have equal and opposite charge densities, so $$\vec E=0$$, yet the wire still deflects a nearby moving charge. Boost into the frame of that moving charge, and the relativistic length contraction of the two charge populations is *different* (because they move at different speeds), so the wire is no longer neutral in the new frame — there is now a genuine electric field, and the deflection is just ordinary Coulomb attraction. What one observer calls a magnetic force, another calls an electric force; the Lorentz force law is the frame-invariant statement that reconciles them. This is developed in full on the [Relativity](/notes/physics/relativity/) page, and it is why $$c$$ secretly appears throughout electrodynamics.

---

## Sources of the magnetic field

Electric charges at rest produce electric fields; charges in motion — currents — produce **magnetic fields**. This section is the magnetic analog of the field-finding machinery from [Electrostatics](/notes/physics/electro1/). There are two tools, and they parallel the electrostatic pair exactly: the **Biot–Savart law** is the magnetic version of "integrate $$d\vec E=k\,dq/r^2$$ over the distribution," and **Ampère's law** is the magnetic version of **Gauss's law** — always true, but only easy to use when symmetry makes the field constant on a clever loop. Keep that analogy in mind; it tells you which tool to reach for and why.

### The Biot–Savart law

<div class="theorem-box">

**Theorem (Biot–Savart law).** A current element — a length $$d\vec\ell$$ carrying current $$I$$, pointing in the direction of current flow — produces a tiny magnetic field

$$
d\vec B=\frac{\mu_0}{4\pi}\frac{I\,d\vec\ell\times\hat r}{r^2},
$$

</div>

where $$\hat r$$ points from the current element to the field point, $$r$$ is that distance, and

$$
\mu_0=4\pi\times10^{-7}\ \text{T·m/A}
$$

is the **permeability of free space**. The constant $$\mu_0/4\pi$$ plays the role that $$k=1/4\pi\varepsilon_0$$ plays in Coulomb's law. The total field is the superposition (integral) over the whole circuit,

$$
\vec B=\frac{\mu_0}{4\pi}\int\frac{I\,d\vec\ell\times\hat r}{r^2}.
$$

The crucial structural difference from $$d\vec E$$ is the **cross product**: $$d\vec B$$ is perpendicular to both the current and the line of sight $$\hat r$$. The field circulates *around* currents rather than pointing toward or away from them. Use the right-hand rule — thumb along $$I$$, fingers curl in the direction of $$\vec B$$. The magnitude of a single element is $$dB=\dfrac{\mu_0}{4\pi}\dfrac{I\,d\ell\sin\theta}{r^2}$$, where $$\theta$$ is the angle between $$d\vec\ell$$ and $$\hat r$$.

<div class="theorem-box">

**Derivation (infinite straight wire).** Find the field a perpendicular distance $$R$$ from a long straight wire carrying current $$I$$.

Put the wire along the $$x$$-axis and the field point at distance $$R$$ on the $$y$$-axis. A current element $$I\,dx$$ at position $$x$$ has $$d\vec\ell=dx\,\hat x$$, and $$\hat r$$ points from the element to the field point. Every element's $$d\vec B$$ points the same way (out of the page, by the right-hand rule), so the cross product never causes cancellation — we just add magnitudes. With $$\theta$$ the angle between the wire and $$\hat r$$,

$$
dB=\frac{\mu_0 I}{4\pi}\frac{\sin\theta\,dx}{r^2}.
$$

Parametrize by $$\theta$$. From the geometry, $$r=R/\sin\theta$$ and $$x=-R/\tan\theta=-R\cot\theta$$, so $$dx=R\csc^2\theta\,d\theta=\dfrac{R}{\sin^2\theta}\,d\theta$$. Then

$$
dB=\frac{\mu_0 I}{4\pi}\frac{\sin\theta}{(R/\sin\theta)^2}\cdot\frac{R}{\sin^2\theta}\,d\theta
=\frac{\mu_0 I}{4\pi R}\sin\theta\,d\theta.
$$

As $$x$$ runs from $$-\infty$$ to $$+\infty$$, $$\theta$$ runs from $$0$$ to $$\pi$$:

$$
B=\frac{\mu_0 I}{4\pi R}\int_0^\pi\sin\theta\,d\theta
=\frac{\mu_0 I}{4\pi R}\big[-\cos\theta\big]_0^\pi
=\frac{\mu_0 I}{2\pi R}.
$$

So

$$
B=\frac{\mu_0 I}{2\pi R},
$$

falling off as $$1/R$$ — the same $$1/R$$ as the field of an infinite *line of charge* in electrostatics, and for the same reason (a one-dimensional source). We will recover this in one line with Ampère's law below.

</div>

<div class="theorem-box">

**Derivation (finite straight segment).** The same integral, stopped at finite limits, is one of the most useful building blocks in magnetostatics. If the perpendicular distance is $$R$$ and the two ends of the segment subtend angles $$\theta_1$$ and $$\theta_2$$ (measured as above), then

$$
B=\frac{\mu_0 I}{4\pi R}\int_{\theta_1}^{\theta_2}\sin\theta\,d\theta
=\frac{\mu_0 I}{4\pi R}\big(\cos\theta_1-\cos\theta_2\big).
$$

A cleaner form uses the angles $$\alpha_1,\alpha_2$$ measured from the perpendicular foot to each end ($$\alpha=\tfrac\pi2-\theta$$):

$$
B=\frac{\mu_0 I}{4\pi R}\big(\sin\alpha_1+\sin\alpha_2\big).
$$

For the infinite wire both ends go to $$90^\circ$$, giving $$\sin90^\circ+\sin90^\circ=2$$ and recovering $$\mu_0 I/2\pi R$$. This segment formula lets you build the field of *any* polygon of straight wires by adding the contributions side by side.

</div>

<div class="theorem-box">

**Derivation (axis of a circular loop, and the center).** A circular loop of radius $$a$$ carries current $$I$$; find $$\vec B$$ on the axis at distance $$z$$ from the center.

Each element $$I\,d\vec\ell$$ on the ring is perpendicular to its own $$\hat r$$ (the element is tangent to the ring, $$\hat r$$ lies in the plane containing the axis), so $$\sin\theta=1$$ and

$$
dB=\frac{\mu_0 I}{4\pi}\frac{d\ell}{r^2},\qquad r=\sqrt{a^2+z^2}.
$$

By symmetry the components perpendicular to the axis cancel when integrated around the ring; only the axial component survives. The axial fraction is $$\cos\phi=a/\sqrt{a^2+z^2}$$ (the angle between $$d\vec B$$ and the axis). Thus

$$
B_z=\frac{\mu_0 I}{4\pi}\frac{1}{a^2+z^2}\cdot\frac{a}{\sqrt{a^2+z^2}}\oint d\ell
=\frac{\mu_0 I}{4\pi}\frac{a}{(a^2+z^2)^{3/2}}(2\pi a),
$$

so

$$
B_z=\frac{\mu_0 I a^2}{2(a^2+z^2)^{3/2}}.
$$

This is the magnetic twin of the on-axis field of a charged ring, $$E_z=kQz/(z^2+a^2)^{3/2}$$ — same geometry, different projection. Setting $$z=0$$ gives the **field at the center of a loop**:

$$
B_{\text{center}}=\frac{\mu_0 I}{2a}.
$$

Far away ($$z\gg a$$) the field collapses to $$B_z\approx\mu_0 I a^2/2z^3\propto1/z^3$$ — the **magnetic dipole** field, which we return to at the end.

</div>

### Ampère's law

<div class="theorem-box">

**Theorem (Ampère's law).** Just as Gauss's law packages Coulomb's $$1/r^2$$ law into a statement about flux through a closed *surface*, Ampère's law packages Biot–Savart into a statement about the circulation of $$\vec B$$ around a closed *loop*:

$$
\oint\vec B\cdot d\vec\ell=\mu_0 I_{\text{enc}}.
$$

</div>

Here $$I_{\text{enc}}$$ is the net current threading *any* surface bounded by the loop (the "Amperian loop"). The right-hand rule fixes signs: curl your right hand around the loop in the direction you integrate, and your thumb gives the positive current direction.

The analogy with Gauss's law is exact, including its limitation: **Ampère's law is always true, but it only gives $$B$$ cheaply when symmetry makes $$\vec B$$ constant (and parallel or perpendicular to $$d\vec\ell$$) along the loop.** When the geometry has high symmetry — an infinite wire, a long solenoid, a toroid, an infinite sheet — you can pull $$B$$ out of the integral and solve in one line. When it does not, $$\oint\vec B\cdot d\vec\ell=\mu_0 I_{\text{enc}}$$ is still a true identity but a useless one, and you must fall back on Biot–Savart, exactly as you fall back on $$\int dE$$ when Gauss's law has no good surface. The three symmetries worth memorizing are the magnetic counterparts of the sphere/cylinder/pillbox trio: a **circular loop** for a wire, a **rectangular loop** straddling a solenoid or sheet, and a **circular loop** inside a toroid.

<div class="theorem-box">

**Example.** Exploit the cylindrical symmetry: $$\vec B$$ circles the wire with constant magnitude on any circle of radius $$R$$ centered on it, and is everywhere parallel to $$d\vec\ell$$. So

$$
\oint\vec B\cdot d\vec\ell=B\,(2\pi R)=\mu_0 I_{\text{enc}}=\mu_0 I
\quad\Longrightarrow\quad
B=\frac{\mu_0 I}{2\pi R}.
$$

Compare the labor with the Biot–Savart integral above: symmetry did all the work, just as it does for the line of charge in Gauss's law.

</div>

<div class="theorem-box">

**Example.** A long solenoid has $$n$$ turns per unit length carrying current $$I$$. Find the field inside.

For an ideal (infinitely long) solenoid the field is uniform and axial inside and zero outside. Take a rectangular Amperian loop with one side of length $$L$$ inside the solenoid (parallel to the axis), the opposite side outside, and the two short sides perpendicular to the axis. The outside side contributes nothing ($$B=0$$ there); the two perpendicular sides contribute nothing because $$\vec B\perp d\vec\ell$$ there. Only the inside side contributes:

$$
\oint\vec B\cdot d\vec\ell=BL.
$$

The current enclosed is the number of turns crossing the loop, $$nL$$, each carrying $$I$$:

$$
BL=\mu_0(nL)I\quad\Longrightarrow\quad B=\mu_0 n I.
$$

Notice $$B$$ is independent of the loop's position inside — the field really is uniform, the magnetic analog of the uniform field between charged plates.

</div>

<div class="theorem-box">

**Example.** A toroid is a solenoid bent into a doughnut: $$N$$ total turns wound around a ring, carrying current $$I$$. Find the field a distance $$r$$ from the central axis, inside the windings.

Symmetry makes $$\vec B$$ circulate along circles concentric with the axis, constant on each such circle. Take an Amperian circle of radius $$r$$ inside the coils. It is threaded by all $$N$$ turns, each crossing once:

$$
\oint\vec B\cdot d\vec\ell=B(2\pi r)=\mu_0 N I
\quad\Longrightarrow\quad
B=\frac{\mu_0 N I}{2\pi r}.
$$

The field is *not* uniform — it falls as $$1/r$$ across the cross-section. A loop drawn entirely inside the hole or entirely outside the toroid encloses zero net current, so $$B=0$$ there: the toroid confines its field, which is why it leaks far less than a straight solenoid.

</div>

<div class="theorem-box">

**Example.** An infinite plane in the $$xz$$-plane carries a uniform surface current $$K$$ (current per unit width) flowing in the $$+\hat x$$ direction. Find $$\vec B$$.

By symmetry $$\vec B$$ is parallel to the sheet, perpendicular to the current ($$\pm\hat z$$), and points in opposite directions on the two sides (reversing as you cross the sheet). Take a rectangular loop of length $$\ell$$ straddling the sheet, with the two long sides parallel to $$\hat z$$ at equal distances above and below. Each long side contributes $$B\ell$$; the short sides are perpendicular to $$\vec B$$ and contribute nothing:

$$
\oint\vec B\cdot d\vec\ell=2B\ell=\mu_0 I_{\text{enc}}=\mu_0 K\ell
\quad\Longrightarrow\quad
B=\frac{\mu_0 K}{2}.
$$

The field is *uniform* and independent of distance from the sheet — exactly mirroring the electrostatic infinite sheet $$E=\sigma/2\varepsilon_0$$, and again the magnitude does not depend on how far away you stand. Two such sheets with opposite currents (a parallel-plate analog) add inside and cancel outside, the magnetic Helmholtz of the solenoid.

</div>

<div class="theorem-box">

**Example.** A coaxial cable has a solid inner conductor of radius $$a$$ carrying current $$I$$ (uniformly distributed) in the $$+\hat z$$ direction, and a thin outer shell of radius $$b$$ carrying the return current $$I$$ in $$-\hat z$$. Find $$B(r)$$ in all four regions.

Cylindrical symmetry makes $$\vec B$$ azimuthal and constant on each circle of radius $$r$$, so $$\oint\vec B\cdot d\vec\ell=B(2\pi r)=\mu_0 I_{\text{enc}}(r)$$ in every region; only $$I_{\text{enc}}$$ changes.

*Inside the inner conductor* ($$r<a$$): the enclosed current is the fraction of $$I$$ inside radius $$r$$, $$I_{\text{enc}}=I\,(r^2/a^2)$$, so

$$
B=\frac{\mu_0 I r}{2\pi a^2}\qquad(r<a),
$$

rising linearly from the axis — the same "interior" behavior as the uniformly charged solid sphere/cylinder in Gauss's law.

*Between the conductors* ($$a<r<b$$): all of $$I$$ is enclosed,

$$
B=\frac{\mu_0 I}{2\pi r}\qquad(a<r<b),
$$

identical to a bare wire.

*Outside the cable* ($$r>b$$): the enclosed current is $$I-I=0$$, so

$$
B=0\qquad(r>b).
$$

The cable is self-shielding: the return current cancels the field outside, which is the whole point of coaxial geometry. This region-by-region bookkeeping is the direct magnetic analog of the concentric-shell Gauss's-law example on the [Electrostatics](/notes/physics/electro1/) page.

</div>

### Force between two parallel wires

Each wire sits in the magnetic field of the other and feels the magnetic force $$\vec F=I\vec L\times\vec B$$. Wire 1 produces $$B_1=\mu_0 I_1/2\pi d$$ at the location of wire 2 a distance $$d$$ away. The force per unit length on wire 2 is

$$
\frac{F}{L}=I_2 B_1=\frac{\mu_0 I_1 I_2}{2\pi d}.
$$

Working out the directions with the right-hand rule shows: **parallel currents attract, antiparallel currents repel** — the opposite of the electrostatic rule for like charges, a sign flip students must commit to memory. (This force is, historically, what defined the ampere.)

<div class="theorem-box">

**Example.** Two long parallel wires $$d=2.0\ \text{cm}$$ apart carry $$I_1=10\ \text{A}$$ and $$I_2=15\ \text{A}$$ in the same direction. Find the force per unit length.

$$
\frac{F}{L}=\frac{\mu_0 I_1 I_2}{2\pi d}
=\frac{(4\pi\times10^{-7})(10)(15)}{2\pi(0.020)}
=\frac{(2\times10^{-7})(150)}{0.020}
=1.5\times10^{-3}\ \text{N/m},
$$

using $$\mu_0/2\pi=2\times10^{-7}\ \text{T·m/A}$$. The currents are parallel, so the force is attractive: the wires are pulled together with $$1.5\ \text{mN}$$ per meter of length.

</div>

### The magnetic dipole

A small current loop is the magnetic analog of the electric dipole, and is the elementary "atom" of all magnetism. A loop of current $$I$$ enclosing (vector) area $$\vec A$$ has **magnetic moment**

$$
\vec\mu=I\vec A,
$$

with direction given by the right-hand rule (curl fingers along $$I$$, thumb gives $$\vec\mu$$). In a uniform external field the net *force* on a current loop vanishes, but there is a **torque** that twists $$\vec\mu$$ toward alignment with $$\vec B$$:

$$
\vec\tau=\vec\mu\times\vec B,
$$

with associated orientation **energy**

$$
U=-\vec\mu\cdot\vec B.
$$

These are term-for-term the electric-dipole relations $$\vec\tau=\vec p\times\vec E$$, $$U=-\vec p\cdot\vec E$$ with $$\vec p\to\vec\mu$$ and $$\vec E\to\vec B$$. The energy is lowest when $$\vec\mu$$ is aligned with $$\vec B$$ (a compass needle pointing north) and highest when anti-aligned. The **far field** of the dipole is also structurally identical to the electric dipole: on the axis, at distance $$r\gg$$ (loop size),

$$
B_{\text{axis}}\approx\frac{\mu_0}{4\pi}\frac{2\mu}{r^3},
$$

the exact analog of the on-axis electric dipole field $$E_{\text{axis}}=\dfrac{1}{4\pi\varepsilon_0}\dfrac{2p}{r^3}$$ (we already saw this $$1/r^3$$ tail emerge from the loop-axis Biot–Savart result above, with $$\mu=I\pi a^2$$). In the equatorial plane the field is half as strong and reversed, $$B_{\text{eq}}\approx-\dfrac{\mu_0}{4\pi}\dfrac{\mu}{r^3}$$, again matching the electric case.

In a **nonuniform** field the two forces on the loop no longer cancel, and the dipole feels a net force pulling it toward stronger or weaker field depending on its orientation:

$$
\vec F=\nabla(\vec\mu\cdot\vec B).
$$

If $$\vec\mu$$ is held aligned with $$\vec B$$, this is $$F=\mu\,\dfrac{dB}{dx}$$ — the dipole is dragged toward stronger field, which is how a magnet picks up iron filings and the principle behind the Stern–Gerlach experiment.

<div class="theorem-box">

**Example.** A rectangular loop of sides $$a$$ and $$b$$ carries current $$I$$ in a uniform field $$\vec B$$, with its normal making angle $$\theta$$ with $$\vec B$$. Find the torque.

The forces on opposite sides are equal and opposite, so the net force is zero. The pair of forces on the sides of length $$a$$ form a couple: each has magnitude $$F=BIa$$, separated by a moment arm $$b\sin\theta$$. The torque is

$$
\tau=(BIa)(b\sin\theta)=I(ab)B\sin\theta=\mu B\sin\theta,
$$

with $$\mu=Iab$$, which is exactly the magnitude of $$\vec\mu\times\vec B$$. The torque vanishes when $$\theta=0$$ ($$\vec\mu\parallel\vec B$$, stable equilibrium) and is maximal when the loop's plane contains $$\vec B$$. This couple is the operating principle of every electric motor and analog galvanometer.

</div>

<div class="theorem-box">

**Example.** A magnetic dipole of moment $$\mu$$ and moment of inertia $$I$$ (about its pivot) sits in a uniform field $$B$$. Find the period of small oscillations about alignment.

This is the rotational version of the pendulum, with $$U=-\mu B\cos\theta$$ playing the role of the gravitational potential. The restoring torque is

$$
\tau=-\frac{dU}{d\theta}=-\mu B\sin\theta\approx-\mu B\,\theta
$$

for small $$\theta$$. Newton's rotational law $$I\ddot\theta=\tau$$ becomes

$$
I\ddot\theta=-\mu B\,\theta\quad\Longrightarrow\quad\ddot\theta=-\frac{\mu B}{I}\theta,
$$

simple harmonic motion with $$\omega^2=\mu B/I$$. Hence the period is

$$
T=2\pi\sqrt{\frac{I}{\mu B}}.
$$

(Here $$I$$ is the rotational inertia, not a current — context disambiguates.) This is the standard way to measure an unknown field $$B$$: hang a magnet of known $$\mu$$ and $$I$$, time its swings, and invert. The structure is identical to the small-oscillation results in the mechanics notes — locate the equilibrium, linearize the restoring torque, read off $$\omega$$.

</div>

### Magnetic materials

Real materials respond to an applied field by developing their own internal currents (from electron orbits and spins), captured by the **magnetization** $$\vec M$$ (dipole moment per unit volume). It is convenient to split the field into the part from free currents and the part from the material via the **auxiliary field** $$\vec H$$:

$$
\vec B=\mu_0(\vec H+\vec M).
$$

For linear materials $$\vec M=\chi_m\vec H$$, so $$\vec B=\mu_0(1+\chi_m)\vec H=\mu_0\mu_r\vec H$$, where $$\mu_r=1+\chi_m$$ is the **relative permeability**. Three behaviors are worth distinguishing qualitatively:

- **Diamagnetism** ($$\chi_m\lesssim0$$, tiny): all materials have it. An applied field induces opposing orbital currents (Lenz's law at the atomic scale), producing a weak *repulsion* from field. Present in everything but usually swamped by the others.
- **Paramagnetism** ($$\chi_m\gtrsim0$$, small): atoms with permanent moments partially align with the field, giving weak *attraction*. Alignment fights thermal randomization, so the effect weakens with temperature (Curie's law).
- **Ferromagnetism** ($$\mu_r$$ huge, up to thousands): in iron, cobalt, nickel, exchange coupling locks neighboring spins parallel within **domains**. An applied field grows the favorably-aligned domains, producing enormous magnetization that can *persist* after the field is removed.

That persistence shows up as **hysteresis**: plotting $$B$$ against $$H$$ for a ferromagnet traces a loop, not a single curve. The magnetization lags the field, leaving a **remanent** field at $$H=0$$ (permanent magnets) and requiring a reverse **coercive** field to demagnetize. The area enclosed by the loop is energy dissipated per cycle as heat — which is why transformer cores are made from "soft" (thin-loop, low-loss) ferromagnets while permanent magnets use "hard" (fat-loop) ones.

---

## Electromagnetic induction

So far the magnetic field has been a static stage on which charges move. The deep result of this section is that a *changing* magnetic field is itself a source of electric field — and that this new electric field is fundamentally different from the conservative electrostatic field of [Electrostatics](/notes/physics/electro1/). Induction is where electricity and magnetism stop being two separate subjects.

### Magnetic flux

Everything begins with **magnetic flux**, the magnetic analogue of the electric flux from Part 1. Through a surface $$S$$,

$$
\Phi_B=\int_S \vec B\cdot d\vec A,
$$

where $$d\vec A$$ is the local area element with direction along the surface normal. For a flat loop of area $$A$$ in a uniform field,

$$
\Phi_B=BA\cos\theta,
$$

with $$\theta$$ the angle between $$\vec B$$ and the normal. Flux is measured in webers ($$1\text{ Wb}=1\text{ T}\cdot\text{m}^2$$). Unlike electric flux, the flux of $$\vec B$$ through any *closed* surface is always zero,

$$
\oint \vec B\cdot d\vec A=0,
$$

because there are no magnetic monopoles — field lines never begin or end, they only close on themselves. This is one of Maxwell's equations and a useful consistency check: whatever flux enters a closed region must leave it.

The choice of normal direction is yours, but once chosen it fixes the sign convention for the induced EMF below through the right-hand rule (curl the fingers along the positive circulation direction of the loop, the thumb gives the positive normal).

### Faraday's law and Lenz's law

<div class="theorem-box">

**Theorem (Faraday's law).** The central experimental fact, discovered by Faraday, is that a changing flux through a circuit drives a current as if a battery had been inserted. The effective EMF is

$$
\varepsilon=-\frac{d\Phi_B}{dt}.
$$

</div>

If the loop has $$N$$ turns wound so the same flux threads each, the EMFs add and

$$
\varepsilon=-N\frac{d\Phi_B}{dt}.
$$

The minus sign is **Lenz's law**, and it is not a bookkeeping nuisance — it is a statement of energy conservation and causality. The induced current flows in whatever direction makes *its own* magnetic flux oppose the change in the external flux. If the external flux is increasing, the induced current opposes the increase; if decreasing, it tries to maintain it.

Why must it be opposition rather than reinforcement? Suppose, for contradiction, the induced current *reinforced* the change. Then a tiny initial increase in flux would drive a current that increased the flux further, driving a still larger current — a runaway producing unlimited electrical energy from nothing. The minus sign is exactly the sign that forbids this. Mechanically, this shows up as a force or torque that resists whatever motion is changing the flux: you must do positive work against the induced effects, and that work is precisely what appears as electrical (and ultimately thermal) energy. Lenz's law is "the magnetic version of Newton's third law for induction."

### Motional EMF

The most concrete way to change flux is to move a conductor. Consider a straight rod of length $$L$$ moving with velocity $$\vec v$$ perpendicular to a uniform field $$\vec B$$ (with $$\vec v\perp\vec B$$ and the rod perpendicular to both). Each charge $$q$$ in the rod feels the magnetic force $$\vec F=q\vec v\times\vec B$$, which pushes positive charge to one end. Charge piles up until the resulting electrostatic field cancels the magnetic push; in equilibrium the force per charge integrated along the rod is the **motional EMF**

$$
\varepsilon=\int (\vec v\times\vec B)\cdot d\vec\ell=BLv.
$$

You can also get this straight from Faraday's law: if the rod slides on rails separated by $$L$$, the enclosed area grows at rate $$L\,v$$, so $$d\Phi_B/dt=B L v$$, giving the same $$\varepsilon=BLv$$. The two pictures — "force on charges in a moving rod" and "changing flux through a circuit" — are guaranteed to agree.

<div class="theorem-box">

**Example.** A frictionless conducting rod of mass $$m$$ and length $$L$$ slides on two parallel horizontal rails separated by $$L$$, connected at one end by a resistor $$R$$. A uniform field $$B$$ points vertically (perpendicular to the plane of the rails). Find the induced current, the retarding force, verify the power balance, and find the terminal velocity (a) when the rod is given a push and left alone, and (b) when a constant external force $$F_0$$ is applied.

*Induced EMF and current.* At speed $$v$$ the flux through the circuit changes at $$BLv$$, so

$$
\varepsilon=BLv,\qquad I=\frac{\varepsilon}{R}=\frac{BLv}{R}.
$$

By Lenz's law the current opposes the increasing flux, so it circulates to create a field opposing $$B$$ inside the loop.

*Retarding force.* The current-carrying rod sits in the field, so it feels a force $$\vec F=I\vec L\times\vec B$$ of magnitude

$$
F=BIL=\frac{B^2L^2v}{R},
$$

directed *opposite* to $$\vec v$$ (again Lenz's law: the force fights the motion that is changing the flux).

*Power balance.* The mechanical power delivered against this force is

$$
P_{\text{mech}}=Fv=\frac{B^2L^2v^2}{R},
$$

while the electrical power dissipated in the resistor is

$$
P_{\text{diss}}=I^2R=\left(\frac{BLv}{R}\right)^2 R=\frac{B^2L^2v^2}{R}.
$$

These are equal: every joule of mechanical work goes straight into resistive heating. This is Lenz's law made quantitative — there is no free energy, only conversion.

*(a) Coasting rod — exponential decay.* With no applied force, Newton's law is

$$
m\frac{dv}{dt}=-\frac{B^2L^2}{R}\,v
\quad\Longrightarrow\quad
v(t)=v_0\,e^{-t/\tau},\qquad \tau=\frac{mR}{B^2L^2}.
$$

The rod slows exponentially and only stops asymptotically; its terminal velocity is $$0$$. The total heat dissipated equals the initial kinetic energy $$\tfrac12 m v_0^2$$, as it must.

*(b) Constant applied force — true terminal velocity.* Now

$$
m\frac{dv}{dt}=F_0-\frac{B^2L^2}{R}\,v.
$$

Terminal velocity is reached when $$dv/dt=0$$:

$$
v_{\text{term}}=\frac{F_0R}{B^2L^2}.
$$

At that speed the applied power $$F_0 v_{\text{term}}=F_0^2R/(B^2L^2)$$ exactly equals $$I^2R$$ with $$I=F_0/(BL)$$ — check: $$I^2R=(F_0/BL)^2R=F_0^2R/(B^2L^2)$$. Same number, so the books balance.

If instead the rails are vertical and gravity supplies the driving force, simply replace $$F_0\to mg$$:

$$
v_{\text{term}}=\frac{mgR}{B^2L^2}.
$$

This is the magnetic analogue of terminal velocity in a viscous fluid — the induced "drag" is linear in $$v$$.

</div>

### The induced (non-conservative) electric field

Motional EMF came from the magnetic force on charges in a *moving* conductor. But Faraday's law applies even to a *stationary* loop sitting in a *time-varying* field — and there the charges are not moving, so $$q\vec v\times\vec B$$ cannot be the cause. Something must push the charges around the loop. That something is a genuine electric field, induced by the changing $$\vec B$$:

$$
\oint \vec E\cdot d\vec\ell=-\frac{d\Phi_B}{dt}.
$$

This is Faraday's law in its fundamental, field form. The crucial point is the contrast with [Electrostatics](/notes/physics/electro1/): the electrostatic field is **conservative**, with $$\oint\vec E\cdot d\vec\ell=0$$ and a well-defined potential $$\vec E=-\nabla V$$. The induced field is **non-conservative** — its line integral around a closed loop is *not* zero whenever flux through the loop is changing. There is no single-valued potential for it. Field lines of the induced $$\vec E$$ do not begin and end on charges; they form closed loops encircling the region of changing flux, much as magnetic field lines encircle a current.

<div class="theorem-box">

**Example.** A long solenoid of radius $$a$$ carries a current that produces a uniform internal field $$B(t)$$ increasing at rate $$dB/dt$$, and zero field outside. Find the induced electric field at radius $$r$$ from the axis, both inside and outside.

By symmetry $$\vec E$$ is azimuthal (circles around the axis) and depends only on $$r$$. Apply $$\oint\vec E\cdot d\vec\ell=-d\Phi_B/dt$$ to a circle of radius $$r$$.

*Inside* ($$r<a$$): the enclosed flux is $$B(t)\,\pi r^2$$, so

$$
E\,(2\pi r)=-\pi r^2\frac{dB}{dt}
\quad\Longrightarrow\quad
E=-\frac{r}{2}\frac{dB}{dt}.
$$

The field grows linearly from the axis.

*Outside* ($$r>a$$): the enclosed flux is fixed at $$B(t)\,\pi a^2$$ (the field is zero beyond $$a$$), so

$$
E\,(2\pi r)=-\pi a^2\frac{dB}{dt}
\quad\Longrightarrow\quad
E=-\frac{a^2}{2r}\frac{dB}{dt}.
$$

Remarkably, there is an induced electric field *outside* the solenoid, in a region where $$\vec B=0$$ at all times. The field there is produced not locally but by the changing flux threaded *through* the loop — a hint of the nonlocal character that the vector potential makes precise. This is the principle behind the betatron, which accelerates electrons with exactly this circulating induced field.

</div>

### Eddy currents and magnetic braking

In the rod-on-rails problem the induced current flowed in a wire. But a *solid* conductor moving through a non-uniform field (or sitting in a changing one) develops swirling closed-loop currents throughout its bulk — **eddy currents**. By Lenz's law they oppose the change that creates them, so they exert a retarding force on a conductor moving relative to a field. This is **magnetic braking**: drop a magnet down a copper pipe and it falls slowly, because its motion induces eddy currents in the pipe whose field repels the approaching pole and attracts the receding one. It is used in train brakes, exercise machines, and the damped motion of sensitive balances.

The energy goes into Joule heating of the conductor — eddy braking converts kinetic energy to heat with no contact and no wear, which is its great practical virtue.

<div class="theorem-box">

**Example.** Estimate the terminal velocity of a magnet of pole strength giving field $$B$$ over a region of size $$\ell$$, falling through a metal pipe of wall conductivity $$\sigma$$, wall thickness $$t$$, and radius $$\sim\ell$$.

Treat the wall region near the magnet as a loop of effective resistance $$R\sim 1/(\sigma t)$$ (a strip of length $$\sim\ell$$, cross-section $$\sim\ell t$$, so $$R\sim \ell/(\sigma\,\ell t)=1/(\sigma t)$$). As the magnet moves at speed $$v$$, the flux through this band changes at a rate $$\sim B\ell v$$, inducing an EMF $$\varepsilon\sim B\ell v$$ and an eddy current $$I\sim\varepsilon/R\sim \sigma t B\ell v$$. The retarding force is

$$
F\sim BI\ell\sim \sigma t B^2\ell^2 v.
$$

At terminal velocity this balances gravity, $$mg\sim \sigma t B^2\ell^2 v_{\text{term}}$$, so

$$
v_{\text{term}}\sim\frac{mg}{\sigma t B^2\ell^2}.
$$

The structure $$F\propto \sigma B^2 v$$ is the same linear "magnetic drag" as the rail problem: a better conductor (larger $$\sigma$$) or stronger magnet (larger $$B$$) brakes harder. Plugging copper numbers and a small neodymium magnet gives terminal speeds of a few cm/s, matching the famously slow fall.

</div>

### Self-inductance

A circuit's own current produces flux through itself. When the current changes, that self-flux changes, inducing a back-EMF that opposes the change (Lenz again). The flux linkage is proportional to the current,

$$
N\Phi_B=L\,I,
$$

defining the **self-inductance** $$L$$, measured in henries ($$1\text{ H}=1\text{ Wb/A}$$). Differentiating and applying Faraday's law,

$$
\varepsilon=-L\frac{dI}{dt}.
$$

Inductance is to current what mass is to velocity: it resists *changes*. A large $$L$$ means the circuit strongly fights any attempt to alter its current, which is why an inductor behaves like a short circuit in steady state but like an open circuit at the instant a switch is thrown.

<div class="theorem-box">

**Derivation (solenoid self-inductance).** Find the inductance of a long solenoid with $$n$$ turns per unit length, cross-sectional area $$A$$, and length $$\ell$$, carrying current $$I$$.

Inside a long solenoid the field is uniform,

$$
B=\mu_0 n I.
$$

The flux through *one* turn is $$\Phi_B=BA=\mu_0 n I A$$. There are $$N=n\ell$$ turns, each linked by this flux, so the total flux linkage is

$$
N\Phi_B=(n\ell)(\mu_0 n I A)=\mu_0 n^2 (A\ell)\,I.
$$

Comparing with $$N\Phi_B=LI$$ and recognizing $$V=A\ell$$ as the solenoid's volume,

$$
L=\mu_0 n^2 A\ell=\mu_0 n^2 V.
$$

The inductance depends only on geometry and the turn density — never on the current. Doubling the turns per unit length quadruples $$L$$, because both the field *and* the number of linked turns scale with $$n$$.

</div>

**Mutual inductance.** If two circuits are nearby, the current in circuit 1 produces flux through circuit 2. The flux linkage in 2 is proportional to $$I_1$$,

$$
N_2\Phi_{2}=M\,I_1,\qquad \varepsilon_2=-M\frac{dI_1}{dt},
$$

defining the **mutual inductance** $$M$$. A non-obvious and very useful theorem is the **reciprocity** $$M_{12}=M_{21}\equiv M$$: the flux that circuit 1 sends through 2 per unit current equals the flux 2 sends through 1 per unit current, regardless of the shapes. This is the operating principle of the transformer, where a changing primary current induces a voltage in the secondary through their shared mutual inductance.

### Energy stored in an inductor and magnetic energy density

To build up the current in an inductor you must push charge against the back-EMF, and that work is stored in the magnetic field. The power delivered is $$P=\varepsilon I=LI\,dI/dt$$, so the energy to reach current $$I$$ is

$$
U=\int_0^I L I'\,dI'=\tfrac12 LI^2.
$$

This is the magnetic twin of the capacitor energy $$\tfrac12 CV^2$$. Where is this energy located? In the field itself. Using the solenoid as the cleanest case, substitute $$L=\mu_0 n^2 V$$ and $$I=B/(\mu_0 n)$$:

$$
U=\tfrac12 LI^2=\tfrac12 (\mu_0 n^2 V)\left(\frac{B}{\mu_0 n}\right)^2=\frac{B^2}{2\mu_0}\,V.
$$

Since the field fills the volume $$V$$ uniformly, the energy per unit volume is the **magnetic energy density**

$$
u=\frac{B^2}{2\mu_0}.
$$

This stands in exact parallel with the electric energy density $$u=\tfrac12\varepsilon_0 E^2$$ derived in [Electrostatics](/notes/physics/electro1/). Both say the energy lives in the field, with a density quadratic in the field strength; the two combine into the total electromagnetic energy density $$u=\tfrac12\varepsilon_0 E^2+B^2/2\mu_0$$ that flows in electromagnetic waves.

<div class="theorem-box">

**Example.** Verify that the field-energy density gives the same stored energy as $$\tfrac12 LI^2$$ for a solenoid.

*Circuit way.* From the inductance derivation, $$L=\mu_0 n^2 V$$, so

$$
U=\tfrac12 LI^2=\tfrac12\mu_0 n^2 V I^2.
$$

*Field way.* The field is $$B=\mu_0 n I$$, uniform over the volume $$V$$, with energy density $$u=B^2/2\mu_0$$. Hence

$$
U=uV=\frac{(\mu_0 n I)^2}{2\mu_0}V=\tfrac12\mu_0 n^2 I^2 V.
$$

The two expressions are identical, confirming that $$\tfrac12 LI^2$$ is nothing more than the field energy $$\int u\,dV$$ collected over the region where $$\vec B$$ lives. As with the electrostatic self-energy check in Part 1, the "circuit" and "field" accountings of the same energy must — and do — agree.

</div>

### The AC generator

The most important application of Faraday's law is the rotating loop, which turns mechanical rotation into alternating EMF. This is how essentially all grid electricity is produced.

<div class="theorem-box">

**Example.** A flat coil of $$N$$ turns and area $$A$$ rotates with constant angular velocity $$\omega$$ about an axis in its plane, in a uniform field $$B$$. Find the induced EMF.

Let $$\theta$$ be the angle between $$\vec B$$ and the coil's normal. If the coil spins at constant rate, $$\theta=\omega t$$ (taking $$\theta=0$$ at $$t=0$$). The flux through one turn is

$$
\Phi_B=BA\cos\theta=BA\cos\omega t.
$$

By Faraday's law for $$N$$ turns,

$$
\varepsilon=-N\frac{d\Phi_B}{dt}=-NBA\frac{d}{dt}\cos\omega t=NBA\,\omega\sin\omega t.
$$

So the EMF oscillates sinusoidally with peak value $$\varepsilon_0=NBA\omega$$:

$$
\varepsilon=NBA\omega\sin\omega t.
$$

The output is maximal when the coil's plane is *parallel* to $$\vec B$$ (flux is zero but changing fastest) and zero when the plane is *perpendicular* (flux is maximal but momentarily stationary). The amplitude scales with the number of turns, the field, the area, and the spin rate — every knob a generator designer has. Reversing the rotation, or letting it complete half a turn, flips the sign of $$\varepsilon$$, which is exactly why the current alternates.

</div>

### A loop entering and leaving a field region

A clean test of the whole framework is a loop crossing the sharp boundary of a field region — flux changes only while an edge is inside the boundary.

<div class="theorem-box">

**Example.** A square loop of side $$s$$, resistance $$R$$, is pulled at constant speed $$v$$ into a region of uniform field $$B$$ (out of the page), entering edge-first. Find the induced current and the force needed, while entering, while fully inside, and while leaving.

*Entering.* Only the leading edge is in the field while the trailing edge is still outside, so the area inside the field grows at rate $$sv$$ and

$$
\varepsilon=B\frac{dA}{dt}=Bsv,\qquad I=\frac{Bsv}{R}.
$$

By Lenz's law the current is counterclockwise (its flux opposes the increasing out-of-page flux). The leading edge carries current $$I$$ in field $$B$$, feeling a force $$F=BIs=B^2s^2v/R$$ directed *opposing the motion*; you must pull with this force, doing work that becomes $$I^2R$$ heat.

*Fully inside.* Once both edges are within the region, the flux is constant ($$\Phi_B=Bs^2$$ does not change as the loop translates), so $$d\Phi_B/dt=0$$, hence

$$
\varepsilon=0,\qquad I=0,\qquad F=0.
$$

No current, no force — uniform flux means no induction, no matter how fast the loop moves. This is the key subtlety: induction responds to *changing* flux, not to flux itself or to motion within a uniform field.

*Leaving.* Now the leading edge has exited and the trailing edge is still inside, so the area in the field *shrinks* at rate $$sv$$. The magnitude is the same, $$\varepsilon=Bsv$$ and $$I=Bsv/R$$, but the current now flows clockwise (opposing the *decreasing* flux), and the retarding force $$F=B^2s^2v/R$$ again opposes the motion. You must keep pulling.

The total work done dragging the loop all the way through equals the total heat dissipated during the entering and leaving phases; while fully inside, the loop coasts for free.

</div>

Induction is thus a single principle — flux that changes drives an EMF, and the induced effects always oppose the change — expressed in many guises: motional EMF in moving rods, circulating fields around changing flux, eddy-current brakes, self- and mutual inductance, and the generators and transformers that run the electrical world.

---

## Transient and AC circuits

Once an inductor or capacitor is in the loop, the current is no longer determined instantly by Ohm's law: the elements store energy, so the circuit has *memory* and the equations become differential. Every result in this section comes from writing Kirchhoff's voltage law as an ODE and recognizing one of the standard patterns from [Math Tricks](/notes/physics/mathtricks/) — exponential decay for a single storage element, simple harmonic motion when two trade energy, and the complex-exponential ("phasor") machinery once a sinusoidal source drives the loop.

### RL transients

An inductor obeys $$V_L=L\,dI/dt$$, so it opposes *changes* in current: the faster you try to change $$I$$, the larger the back-EMF that fights you. This is the magnetic analogue of inertia.

Connect a battery $$V$$, resistor $$R$$, and inductor $$L$$ in series and close the switch at $$t=0$$. Kirchhoff's voltage law gives

$$
V=IR+L\frac{dI}{dt}.
$$

This is a first-order linear ODE. Rearranging,

$$
\frac{dI}{dt}=\frac{V}{L}-\frac{R}{L}I=-\frac{R}{L}\left(I-\frac{V}{R}\right),
$$

which is the exponential-approach pattern $$\dot y=-ky$$ for the variable $$y=I-V/R$$. With $$I(0)=0$$,

$$
I(t)=\frac{V}{R}\left(1-e^{-t/\tau}\right),\qquad \tau=\frac{L}{R}.
$$

The current does not jump to $$V/R$$ instantly — the inductor forces it to ramp up over the **time constant** $$\tau=L/R$$. At $$t=0$$ the inductor looks like an open circuit ($$I=0$$); after many time constants it looks like a plain wire ($$I\to V/R$$).

If instead the battery is shorted out at $$t=0$$ while a current $$I_0$$ flows, KVL reads $$0=IR+L\,dI/dt$$, a pure decay:

$$
I(t)=I_0\,e^{-t/\tau}.
$$

The inductor sustains the current as it dies away, dumping its stored energy $$\tfrac12 LI_0^2$$ into the resistor.

<div class="theorem-box">

**Example.** A $$12\text{ V}$$ battery drives a series $$R=3\ \Omega$$, $$L=0.6\text{ H}$$ circuit, closed at $$t=0$$. How long until the current reaches $$90\%$$ of its final value?

The final current is $$I_\infty=V/R=12/3=4\text{ A}$$, and $$\tau=L/R=0.6/3=0.2\text{ s}$$. We want $$I=0.9\,I_\infty$$:

$$
0.9=1-e^{-t/\tau}\ \Longrightarrow\ e^{-t/\tau}=0.1\ \Longrightarrow\ t=\tau\ln 10.
$$

So $$t=0.2\times 2.303\approx 0.46\text{ s}$$. (A handy benchmark: one $$\tau$$ gets you to $$63\%$$, and $$\ln 10\approx 2.3$$ time constants gets you to $$90\%$$.)

</div>

### RC transients (recap)

The capacitor is defined and analyzed on the [Electrostatics](/notes/physics/electro1/) page; here we only need its circuit behavior, $$Q=CV_C$$ and $$I=dQ/dt$$. Charging a capacitor through a resistor gives the same exponential-approach ODE as the RL case,

$$
V=\frac{Q}{C}+R\frac{dQ}{dt}\ \Longrightarrow\ Q(t)=CV\left(1-e^{-t/\tau}\right),\qquad \tau=RC,
$$

and discharging gives $$Q(t)=Q_0e^{-t/\tau}$$. The roles are mirror images of the inductor: a capacitor resists changes in *voltage*, starts as a short circuit ($$V_C=0$$) and ends as an open circuit ($$I\to 0$$), exactly opposite to the inductor.

### LC oscillation

Put a charged capacitor across an inductor with no resistance. KVL gives $$Q/C+L\,dI/dt=0$$, and with $$I=dQ/dt$$,

$$
L\frac{d^2Q}{dt^2}+\frac{Q}{C}=0\ \Longrightarrow\ \frac{d^2Q}{dt^2}=-\frac{1}{LC}\,Q.
$$

This is the SHM equation $$\ddot x=-\omega^2 x$$ from [Math Tricks](/notes/physics/mathtricks/), so the charge oscillates sinusoidally at the **natural frequency**

$$
\omega_0=\frac{1}{\sqrt{LC}},\qquad Q(t)=Q_0\cos(\omega_0 t).
$$

Energy sloshes back and forth between the capacitor's electric field and the inductor's magnetic field, with the total conserved:

$$
\frac{Q^2}{2C}+\frac{1}{2}LI^2=\text{const}.
$$

The analogy to a mass on a spring (see [Advanced Mechanics](/notes/physics/advmech/) and the oscillations material) is exact, term by term:

$$
Q\leftrightarrow x,\qquad I=\dot Q\leftrightarrow v=\dot x,\qquad L\leftrightarrow m,\qquad \frac{1}{C}\leftrightarrow k.
$$

Under these replacements $$L\ddot Q+Q/C=0$$ becomes $$m\ddot x+kx=0$$, the capacitor energy $$Q^2/2C$$ becomes the spring energy $$\tfrac12 kx^2$$, and the inductor energy $$\tfrac12 LI^2$$ becomes the kinetic energy $$\tfrac12 mv^2$$. The inductance plays the role of inertia (it resists changes in current just as mass resists changes in velocity), and $$1/C$$ is the "stiffness." This is why $$\omega_0=1/\sqrt{LC}$$ mirrors $$\omega=\sqrt{k/m}$$.

<div class="theorem-box">

**Example.** A $$2\ \mu\text{F}$$ capacitor charged to $$50\text{ V}$$ is connected across a $$8\text{ mH}$$ inductor. Find the oscillation frequency and the peak current.

The angular frequency is

$$
\omega_0=\frac{1}{\sqrt{LC}}=\frac{1}{\sqrt{(8\times10^{-3})(2\times10^{-6})}}=\frac{1}{\sqrt{1.6\times10^{-8}}}\approx 7.9\times10^{3}\text{ rad/s},
$$

so $$f=\omega_0/2\pi\approx 1.26\text{ kHz}$$.

For the peak current, use energy conservation rather than calculus: when the capacitor is fully charged all the energy is electric, and when it is fully discharged all of it is magnetic. So

$$
\frac{1}{2}\frac{Q_0^2}{C}=\frac{1}{2}CV_0^2=\frac{1}{2}LI_{\max}^2\ \Longrightarrow\ I_{\max}=V_0\sqrt{\frac{C}{L}}.
$$

Numerically $$I_{\max}=50\sqrt{2\times10^{-6}/8\times10^{-3}}=50\sqrt{2.5\times10^{-4}}=50\times0.0158\approx 0.79\text{ A}$$. (Equivalently $$I_{\max}=\omega_0 Q_0=\omega_0 C V_0$$, which gives the same number — a useful cross-check.)

</div>

### RLC: damped oscillation

Add resistance to the LC loop and the energy no longer sloshes forever. With $$I=\dot Q$$, KVL gives

$$
L\frac{d^2Q}{dt^2}+R\frac{dQ}{dt}+\frac{Q}{C}=0,
$$

the damped-oscillator equation $$\ddot Q+2\gamma\dot Q+\omega_0^2 Q=0$$ with $$\gamma=R/2L$$ and $$\omega_0=1/\sqrt{LC}$$. This is the direct analogue of a mass on a spring with a drag force $$-bv$$ (with $$R\leftrightarrow b$$, the resistor playing the role of friction). Substituting $$Q\sim e^{st}$$ gives the characteristic roots $$s=-\gamma\pm\sqrt{\gamma^2-\omega_0^2}$$, and the sign of the discriminant sets the regime:

- **Underdamped** ($$\gamma<\omega_0$$, i.e. $$R<2\sqrt{L/C}$$): the charge rings down, $$Q(t)=Q_0e^{-\gamma t}\cos(\omega_d t+\phi)$$ with $$\omega_d=\sqrt{\omega_0^2-\gamma^2}$$. The oscillation survives but its envelope decays.
- **Critically damped** ($$\gamma=\omega_0$$): the fastest return to zero with no overshoot.
- **Overdamped** ($$\gamma>\omega_0$$): two real decay rates, no oscillation — the charge crawls back to zero.

The **quality factor** measures how lightly damped the ring-down is,

$$
Q_{\text{factor}}=\frac{\omega_0 L}{R}=\frac{1}{R}\sqrt{\frac{L}{C}},
$$

equal to $$2\pi$$ times the energy stored divided by the energy lost per cycle. A high-$$Q$$ circuit oscillates many times before its amplitude decays appreciably; a low-$$Q$$ circuit barely rings. (We write $$Q_{\text{factor}}$$ here to avoid clashing with charge $$Q$$.)

### AC steady state: reactance and impedance

Drive the loop with a sinusoidal source $$V(t)=V_0\cos\omega t$$ and wait for transients to die out. The clean way to handle the steady state is the complex-exponential method from [Math Tricks](/notes/physics/mathtricks/): write $$V(t)=\mathrm{Re}(V_0e^{i\omega t})$$, assume every current and voltage oscillates at the same $$\omega$$, and replace $$d/dt$$ by multiplication by $$i\omega$$. Then each element obeys a generalized Ohm's law $$\tilde V=\tilde I\,Z$$ with a complex **impedance** $$Z$$:

$$
Z_R=R,\qquad Z_L=i\omega L,\qquad Z_C=\frac{1}{i\omega C}=-\frac{i}{\omega C}.
$$

The magnitudes of the reactive impedances are the **reactances**

$$
X_L=\omega L,\qquad X_C=\frac{1}{\omega C}.
$$

An inductor's reactance grows with frequency (it chokes off fast currents), while a capacitor's falls with frequency (it passes high frequencies, blocks DC). The factor $$i$$ encodes a $$90^\circ$$ phase shift: voltage *leads* current in an inductor and *lags* it in a capacitor.

For a series RLC circuit the impedances add, so $$Z=R+i(X_L-X_C)$$, with magnitude and phase

$$
\lvert Z\rvert=\sqrt{R^2+(X_L-X_C)^2},\qquad \tan\phi=\frac{X_L-X_C}{R}.
$$

The current amplitude is $$I_0=V_0/\lvert Z\rvert$$, and $$\phi$$ is the angle by which the source voltage leads the current. The **phasor picture** makes this geometric: draw $$R$$ along the real axis, $$X_L$$ up, $$X_C$$ down; the impedance is their vector sum, and $$\phi$$ is the angle it makes with the resistive axis. Adding voltages of the same frequency is just adding these phasors tip-to-tail, exactly the superposition trick from Math Tricks.

### Series RLC resonance

The current amplitude $$I_0=V_0/\sqrt{R^2+(X_L-X_C)^2}$$ is largest when the reactances cancel, $$X_L=X_C$$, i.e. $$\omega L=1/\omega C$$. This happens at the **resonant frequency**

$$
\omega_0=\frac{1}{\sqrt{LC}},
$$

the same as the free LC frequency. At resonance the impedance is purely resistive, $$Z=R$$, the current peaks at $$V_0/R$$, and the source voltage and current are in phase ($$\phi=0$$). Off resonance the inductive and capacitive voltages partly cancel, and far from it one reactance dominates.

How sharply the current peaks is again set by the quality factor. Defining the **bandwidth** $$\Delta\omega$$ as the width between the two frequencies where the average power drops to half its peak ($$\lvert Z\rvert^2=2R^2$$),

$$
\Delta\omega=\frac{R}{L},\qquad Q_{\text{factor}}=\frac{\omega_0}{\Delta\omega}=\frac{\omega_0 L}{R}.
$$

A high-$$Q$$ series RLC circuit is a sharp, selective filter — the basis of radio tuning, where you adjust $$C$$ to bring $$\omega_0$$ onto the station you want.

<div class="theorem-box">

**Example.** A series RLC circuit has $$R=20\ \Omega$$, $$L=50\text{ mH}$$, $$C=2\ \mu\text{F}$$, driven by $$V_0=100\text{ V}$$ at angular frequency $$\omega=2000\text{ rad/s}$$. Find the reactances, impedance, current amplitude, phase, and the resonant frequency.

Reactances at $$\omega=2000$$:

$$
X_L=\omega L=2000\times0.05=100\ \Omega,\qquad X_C=\frac{1}{\omega C}=\frac{1}{2000\times2\times10^{-6}}=250\ \Omega.
$$

Since $$X_C>X_L$$ the circuit is net capacitive. The impedance magnitude is

$$
\lvert Z\rvert=\sqrt{R^2+(X_L-X_C)^2}=\sqrt{20^2+(100-250)^2}=\sqrt{400+22500}=\sqrt{22900}\approx 151\ \Omega.
$$

The current amplitude and phase are

$$
I_0=\frac{V_0}{\lvert Z\rvert}=\frac{100}{151}\approx 0.66\text{ A},\qquad \tan\phi=\frac{X_L-X_C}{R}=\frac{-150}{20}=-7.5\ \Longrightarrow\ \phi\approx -82^\circ.
$$

The negative phase means the current *leads* the voltage (capacitive). Finally the resonant frequency is

$$
\omega_0=\frac{1}{\sqrt{LC}}=\frac{1}{\sqrt{(0.05)(2\times10^{-6})}}=\frac{1}{\sqrt{10^{-7}}}\approx 3162\text{ rad/s},
$$

so the drive at $$2000\text{ rad/s}$$ sits below resonance, consistent with the capacitive behavior we found.

</div>

### AC power and the power factor

The instantaneous power delivered by the source is $$P(t)=V(t)I(t)$$. With $$V=V_0\cos\omega t$$ and $$I=I_0\cos(\omega t-\phi)$$, averaging over a cycle (using $$\langle\cos^2\rangle=\tfrac12$$ and $$\langle\cos\sin\rangle=0$$ from Math Tricks) gives

$$
\bar P=\frac{1}{2}V_0I_0\cos\phi=V_{\text{rms}}I_{\text{rms}}\cos\phi,
$$

where the **root-mean-square** values are $$V_{\text{rms}}=V_0/\sqrt2$$ and $$I_{\text{rms}}=I_0/\sqrt2$$. The factor $$\cos\phi$$ is the **power factor**: only the in-phase component of the current carries real, time-averaged power.

This is why **reactive elements dissipate no average power**. For a pure inductor or capacitor $$\phi=\pm90^\circ$$, so $$\cos\phi=0$$: over each cycle they absorb energy for a quarter period and hand all of it back the next quarter, with zero net transfer. All the average power is dissipated in the resistance, and indeed $$\bar P=I_{\text{rms}}^2R$$ since $$\cos\phi=R/\lvert Z\rvert$$. A low power factor (a strongly reactive load) means large currents flow while delivering little real power — wasteful, because those currents still heat the transmission-line resistance, which is why power companies penalize it.

<div class="theorem-box">

**Example.** For the circuit in the previous example ($$V_0=100\text{ V}$$, $$I_0\approx0.66\text{ A}$$, $$\phi\approx-82^\circ$$, $$R=20\ \Omega$$), find the average power delivered.

Using the power-factor form with $$\cos(82^\circ)\approx0.139$$,

$$
\bar P=\frac{1}{2}V_0I_0\cos\phi=\frac12(100)(0.66)(0.139)\approx 4.6\text{ W}.
$$

As a cross-check, compute it as resistive dissipation: $$I_{\text{rms}}=I_0/\sqrt2=0.66/1.414\approx0.467\text{ A}$$, so

$$
\bar P=I_{\text{rms}}^2R=(0.467)^2(20)\approx 4.4\text{ W},
$$

agreeing to rounding. The two routes must match because the resistor is the only element that dissipates energy — the inductor and capacitor merely shuttle it back and forth. Note how little real power flows despite a $$0.66\text{ A}$$ current amplitude: the low power factor ($$\cos\phi\approx0.14$$) means the circuit is mostly trading reactive energy with the source.

</div>

---

## Maxwell's equations and electromagnetic waves

Everything so far — electrostatics, magnetic forces, induction — turns out to be four equations. Maxwell's great achievement was to complete those four so that they are mutually consistent, and then to notice that the completed set has wave solutions traveling at exactly the speed of light. This section assembles the equations, fixes the one term that was missing (the **displacement current**), and then shows that the fields support themselves as a propagating electromagnetic wave.

### The displacement current: why Ampère's law was incomplete

The original Ampère's law relates the magnetic field circulating around a loop to the current threading that loop:

$$
\oint \vec B\cdot d\vec\ell=\mu_0 I_{\text{enc}}.
$$

Here $$I_{\text{enc}}$$ is the current passing through *any* surface bounded by the loop. That phrase "any surface" is the problem. Consider a **charging capacitor**: a wire carries current $$I$$ into one plate, and an Amperian loop encircles the wire. Stretch a flat surface across the loop and the wire pierces it, so $$I_{\text{enc}}=I$$. But now bulge the surface so that it passes *between* the capacitor plates instead — no charge crosses the gap, so $$I_{\text{enc}}=0$$. The same loop gives two different answers depending on which surface you choose. Ampère's law as written is inconsistent.

Maxwell's fix: in the gap there is no conduction current, but the electric field between the plates is *growing* as charge piles up, so the electric flux $$\Phi_E$$ through the bulged surface is changing. He defined the **displacement current**

$$
I_d=\varepsilon_0\frac{d\Phi_E}{dt},
$$

which carries on seamlessly where the conduction current stops. Adding it gives the **Ampère–Maxwell law**, and the loop now gives the same answer for every surface.

<div class="theorem-box">

**Example.** A parallel-plate capacitor with plate area $$A$$ is charged by a steady current $$I$$. Show that the displacement current between the plates exactly equals $$I$$, and find the magnetic field a distance $$r$$ from the axis inside the gap.

Treat the plates as an ideal capacitor: the field is uniform between them with magnitude $$E=\sigma/\varepsilon_0=Q/(\varepsilon_0 A)$$, where $$Q$$ is the instantaneous charge. The electric flux through a surface spanning the gap is

$$
\Phi_E=EA=\frac{Q}{\varepsilon_0}.
$$

The displacement current is therefore

$$
I_d=\varepsilon_0\frac{d\Phi_E}{dt}=\varepsilon_0\cdot\frac{1}{\varepsilon_0}\frac{dQ}{dt}=\frac{dQ}{dt}=I,
$$

since $$dQ/dt$$ is exactly the conduction current charging the plate. The displacement current "between the plates" is numerically identical to the wire current feeding them — that is precisely what makes the choice of Amperian surface irrelevant.

Now find $$\vec B$$ inside the gap, a distance $$r$$ from the central axis (with $$r$$ less than the plate radius). By symmetry $$\vec B$$ circles the axis with constant magnitude on a circle of radius $$r$$. The flux through that circle is $$\Phi_E=E\,(\pi r^2)$$, so the enclosed displacement current is $$I_d(r)=\varepsilon_0\frac{d}{dt}(E\pi r^2)=I\,(r^2/R^2)$$ for plate radius $$R$$ (the fraction of total flux enclosed). The Ampère–Maxwell law gives

$$
B\,(2\pi r)=\mu_0\,\varepsilon_0\frac{d}{dt}\!\left(E\pi r^2\right)
\quad\Longrightarrow\quad
B=\frac{\mu_0 I\, r}{2\pi R^2}.
$$

This is *identical* in form to the field inside a wire of radius $$R$$ carrying current $$I$$ uniformly. Maxwell's term makes the magnetic field continuous across the capacitor gap, exactly as if the current never stopped.

</div>

### Maxwell's four equations

In integral form, in vacuum (with sources $$Q_{\text{enc}}$$ and $$I_{\text{enc}}$$), the complete set is:

**1. Gauss's law for $$\vec E$$** — electric charge is the source of electric flux:

$$
\oint \vec E\cdot d\vec A=\frac{Q_{\text{enc}}}{\varepsilon_0}.
$$

This is the law established in [Electrostatics](/notes/physics/electro1/); field lines begin and end on charge.

**2. Gauss's law for $$\vec B$$** — there are no magnetic monopoles:

$$
\oint \vec B\cdot d\vec A=0.
$$

The net magnetic flux through any closed surface is zero. Magnetic field lines never start or stop; they always close on themselves, because there is no isolated "magnetic charge" for them to terminate on.

**3. Faraday's law** — a changing magnetic flux drives an electric field around a loop:

$$
\oint \vec E\cdot d\vec\ell=-\frac{d\Phi_B}{dt}.
$$

The induced $$\vec E$$ is non-conservative: unlike the electrostatic field, it circulates. The minus sign is Lenz's law.

**4. Ampère–Maxwell law** — both currents and changing electric flux drive a magnetic field around a loop:

$$
\oint \vec B\cdot d\vec\ell=\mu_0 I_{\text{enc}}+\mu_0\varepsilon_0\frac{d\Phi_E}{dt}.
$$

The first term is the original Ampère's law; the second is Maxwell's displacement-current correction.

Notice the near-symmetry between equations 3 and 4: a changing $$\vec B$$ makes an $$\vec E$$, and a changing $$\vec E$$ makes a $$\vec B$$. That mutual feedback is the engine of an electromagnetic wave.

### Maxwell's equations predict waves

In a region of vacuum with no charges and no currents ($$Q_{\text{enc}}=0$$, $$I_{\text{enc}}=0$$), Faraday's and Ampère–Maxwell's laws close on each other: a changing $$\vec B$$ sources a changing $$\vec E$$, which sources a changing $$\vec B$$, and so on. We now show that this feedback forces each field to obey a wave equation.

<div class="theorem-box">

**Derivation (the wave equation and the speed $$c$$).** Look for a field varying only in $$x$$ and $$t$$, with $$\vec E=E_y(x,t)\,\hat j$$ and $$\vec B=B_z(x,t)\,\hat k$$. We apply the two source-free laws to thin rectangular loops.

*Faraday's law* on a loop in the $$xy$$-plane, with width $$dx$$ and height $$h$$ along $$y$$. The circulation of $$\vec E$$ is $$\big[E_y(x+dx)-E_y(x)\big]h=\frac{\partial E_y}{\partial x}\,dx\,h$$, and the enclosed magnetic flux is $$B_z\,(dx\,h)$$. Faraday's law $$\oint\vec E\cdot d\vec\ell=-d\Phi_B/dt$$ then gives

$$
\frac{\partial E_y}{\partial x}=-\frac{\partial B_z}{\partial t}.
$$

*Ampère–Maxwell's law* (no current) on a loop in the $$xz$$-plane gives, by the same bookkeeping,

$$
\frac{\partial B_z}{\partial x}=-\mu_0\varepsilon_0\frac{\partial E_y}{\partial t}.
$$

Now eliminate $$B_z$$. Differentiate the first equation with respect to $$x$$ and the second with respect to $$t$$:

$$
\frac{\partial^2 E_y}{\partial x^2}=-\frac{\partial^2 B_z}{\partial x\,\partial t},
\qquad
\frac{\partial^2 B_z}{\partial t\,\partial x}=-\mu_0\varepsilon_0\frac{\partial^2 E_y}{\partial t^2}.
$$

The mixed partials of $$B_z$$ are equal, so combining them gives the **wave equation**

$$
\frac{\partial^2 E_y}{\partial x^2}=\mu_0\varepsilon_0\frac{\partial^2 E_y}{\partial t^2}.
$$

Comparing with the standard form $$\partial^2 f/\partial x^2=(1/v^2)\,\partial^2 f/\partial t^2$$ identifies the propagation speed

$$
v=\frac{1}{\sqrt{\mu_0\varepsilon_0}}\equiv c.
$$

The identical manipulation with the roles swapped gives the same wave equation for $$B_z$$. Both fields propagate at the single speed $$c$$.

</div>

Now put in numbers. With $$\mu_0=4\pi\times10^{-7}\ \text{T·m/A}$$ and $$\varepsilon_0=8.85\times10^{-12}\ \text{C}^2/(\text{N·m}^2)$$,

$$
c=\frac{1}{\sqrt{\mu_0\varepsilon_0}}
=\frac{1}{\sqrt{(4\pi\times10^{-7})(8.85\times10^{-12})}}
\approx 3.00\times10^{8}\ \text{m/s}.
$$

This number is the measured speed of light. Maxwell's conclusion was immediate and revolutionary: **light is an electromagnetic wave.** The constants $$\mu_0$$ and $$\varepsilon_0$$, measured in tabletop experiments on capacitors and current-carrying wires, secretly encode the speed of light. The visible spectrum is just one narrow band of a continuum that runs from radio to gamma rays (see [Optics](/notes/physics/optics/)).

### Structure of a plane wave

The simplest solution of the wave equation is a sinusoidal **plane wave**,

$$
\vec E=E_0\sin(kx-\omega t)\,\hat j,
\qquad
\vec B=B_0\sin(kx-\omega t)\,\hat k,
$$

with $$\omega/k=c$$. Several structural facts fall out of Maxwell's equations:

- **Transverse.** In vacuum Gauss's laws force $$\vec E$$ and $$\vec B$$ to have no component along the propagation direction $$\hat k$$. The wave oscillates *across* its direction of travel, never along it.
- **Mutually perpendicular.** $$\vec E\perp\vec B$$, and both are perpendicular to the propagation direction: $$\vec E\times\vec B$$ points along $$\hat k$$. The triad $$(\vec E,\vec B,\hat k)$$ is right-handed.
- **In phase.** Both fields peak and vanish together (same $$\sin(kx-\omega t)$$), a direct consequence of $$\partial E_y/\partial x=-\partial B_z/\partial t$$.
- **Fixed amplitude ratio.** Substituting the sinusoids into $$\partial E_y/\partial x=-\partial B_z/\partial t$$ gives $$kE_0=\omega B_0$$, so

$$
\frac{E_0}{B_0}=\frac{\omega}{k}=c
\qquad\Longrightarrow\qquad
E=cB.
$$

The electric and magnetic amplitudes are locked together by the factor $$c$$; because $$c$$ is large, the number for $$E$$ is enormous compared to that for $$B$$ in SI units, though the two fields carry equal energy (next). The direction of $$\vec E$$ defines the wave's **polarization**; superposing components leads to linear, circular, and elliptical polarization, treated alongside the spectrum in [Optics](/notes/physics/optics/).

### Energy, the Poynting vector, and momentum

An electromagnetic wave carries energy. The stored energy per unit volume is the sum of the electric and magnetic field energy densities,

$$
u=\tfrac12\varepsilon_0 E^2+\frac{B^2}{2\mu_0}.
$$

Using $$B=E/c$$ and $$c^2=1/(\mu_0\varepsilon_0)$$, the magnetic term equals the electric term:

$$
\frac{B^2}{2\mu_0}=\frac{E^2/c^2}{2\mu_0}=\frac{\varepsilon_0\mu_0 E^2}{2\mu_0}=\tfrac12\varepsilon_0 E^2.
$$

The energy is **split equally** between the electric and magnetic fields, so the total is

$$
u=\varepsilon_0 E^2.
$$

Energy flows in the direction of propagation. The energy flux (power per unit area) is the **Poynting vector**

$$
\vec S=\frac{1}{\mu_0}\,\vec E\times\vec B,
$$

which points along $$\hat k$$ and has magnitude $$S=EB/\mu_0=\varepsilon_0 c E^2=uc$$ — energy density times wave speed, as it must be. For a sinusoidal wave the time average of $$\sin^2$$ is $$\tfrac12$$, so the **intensity** (average of $$S$$) is

$$
I=\langle S\rangle=\tfrac12\varepsilon_0 c E_0^2=\frac{E_0 B_0}{2\mu_0}.
$$

An electromagnetic wave also carries **momentum**: the momentum density is $$\vec S/c^2$$, so a beam delivers momentum at rate $$I/c$$ per unit area. Therefore light striking a surface exerts a **radiation pressure**

$$
P_{\text{abs}}=\frac{I}{c}\quad(\text{fully absorbed}),
\qquad
P_{\text{ref}}=\frac{2I}{c}\quad(\text{perfectly reflected}),
$$

the reflected case being twice as large because the photon momentum reverses (a change of $$2p$$ rather than $$p$$), exactly like an elastic bounce in mechanics.

<div class="theorem-box">

**Example.** At Earth's distance the solar intensity (the "solar constant") is $$I\approx 1360\ \text{W/m}^2$$. Find the peak electric and magnetic fields in sunlight, and the force on a perfectly reflecting solar sail of area $$A=1000\ \text{m}^2$$ facing the Sun.

*Peak fields.* From $$I=\tfrac12\varepsilon_0 c E_0^2$$,

$$
E_0=\sqrt{\frac{2I}{\varepsilon_0 c}}
=\sqrt{\frac{2(1360)}{(8.85\times10^{-12})(3.0\times10^{8})}}
\approx 1.0\times10^{3}\ \text{V/m}.
$$

The magnetic amplitude follows from $$E=cB$$:

$$
B_0=\frac{E_0}{c}=\frac{1.0\times10^{3}}{3.0\times10^{8}}\approx 3.4\times10^{-6}\ \text{T}.
$$

Note how small $$B_0$$ is in SI units — a few microtesla — even though it carries the same energy density as the kilovolt-per-meter electric field. This is the $$E=cB$$ scaling at work, not a physical imbalance.

*Force on the sail.* For a perfect reflector the radiation pressure is $$P=2I/c$$, so

$$
F=PA=\frac{2I}{c}A=\frac{2(1360)(1000)}{3.0\times10^{8}}
\approx 9\times10^{-3}\ \text{N}.
$$

About nine millinewtons — tiny, but it acts continuously and costs no fuel, which is exactly why solar sails are a viable propulsion concept. Over months this steady thrust builds substantial velocity.

</div>

<div class="theorem-box">

**Example.** A laser pointer emits $$P=5\ \text{mW}$$ in a beam of radius $$0.5\ \text{mm}$$. Find the intensity and the peak field amplitudes.

The intensity is power over beam area:

$$
I=\frac{P}{\pi r^2}=\frac{5\times10^{-3}}{\pi(5\times10^{-4})^2}
\approx 6.4\times10^{3}\ \text{W/m}^2.
$$

Then the peak electric field is

$$
E_0=\sqrt{\frac{2I}{\varepsilon_0 c}}
=\sqrt{\frac{2(6.4\times10^{3})}{(8.85\times10^{-12})(3.0\times10^{8})}}
\approx 2.2\times10^{3}\ \text{V/m},
$$

and $$B_0=E_0/c\approx 7.3\times10^{-6}\ \text{T}$$. Even a modest laser, concentrated into a millimeter spot, produces a field a few times stronger than sunlight — the field amplitude scales as $$\sqrt{I}$$, so squeezing the same power into a smaller area raises $$E_0$$ only as the square root of the intensity gain.

</div>

These energy and momentum relations tie the whole subject together: the same $$\mu_0\varepsilon_0$$ that sets the wave speed sets the field-energy split, the Poynting flux, and the pressure light exerts — from the faint push on a solar sail to the radiation that confines a star against its own gravity.

---

## Problem-solving strategy

A decision tree for which tool to reach for:

:::strategy{title="Which electrodynamics tool to reach for"}
1. **A charge moving in given $$\vec E$$ and $$\vec B$$ fields:** Lorentz force $$\vec F=q(\vec E+\vec v\times\vec B)$$. If only $$\vec B$$ acts, speed is constant (magnetic forces do no work) — expect circular/helical motion with $$r=mv/(qB)$$ and $$\omega_c=qB/m$$. For crossed fields, check the drift $$v=E/B$$ before grinding.
2. **Find the field produced by a current:** If the geometry is highly symmetric (infinite wire, solenoid, toroid, sheet), use **Ampère's law** $$\oint\vec B\cdot d\vec\ell=\mu_0 I_{\text{enc}}$$ — the magnetic Gauss's law. If not, integrate **Biot–Savart** $$d\vec B=\dfrac{\mu_0}{4\pi}\dfrac{I\,d\vec\ell\times\hat r}{r^2}$$.
3. **A current loop or small magnet in a field:** Treat it as a dipole $$\vec\mu=I\vec A$$: torque $$\vec\tau=\vec\mu\times\vec B$$, energy $$U=-\vec\mu\cdot\vec B$$, net force only in a *nonuniform* field ($$\vec F=\nabla(\vec\mu\cdot\vec B)$$). Small oscillations about alignment give $$T=2\pi\sqrt{I/(\mu B)}$$.
4. **Anything changing in time threads a loop:** Faraday $$\varepsilon=-d\Phi_B/dt$$ with Lenz for the sign. Decide whether the flux changes because the field changes (induced $$\vec E$$) or because the circuit moves/deforms (motional EMF $$\varepsilon=BLv$$). Use energy balance — dissipated power equals mechanical power in — as a check.
5. **A circuit with inductors/capacitors switched on or off:** Transient. Write the KVL loop equation; it is a standard first-order ($$\tau=L/R$$ or $$RC$$) or second-order (LC/RLC) ODE — borrow the solutions and the SHM analogy from [Math Tricks](/notes/physics/mathtricks/).
6. **A circuit driven at a single frequency $$\omega$$:** AC steady state. Use reactances $$X_L=\omega L$$, $$X_C=1/(\omega C)$$ and impedance $$Z=\sqrt{R^2+(X_L-X_C)^2}$$; resonance at $$\omega_0=1/\sqrt{LC}$$. Average power is $$\bar P=V_{\text{rms}}I_{\text{rms}}\cos\phi$$ — only the resistor dissipates.
7. **Fields propagating, or a charging capacitor's field:** Maxwell. Remember the displacement-current term $$\varepsilon_0\,d\Phi_E/dt$$ in Ampère–Maxwell; in vacuum the fields travel at $$c=1/\sqrt{\mu_0\varepsilon_0}$$ with $$E=cB$$, carrying intensity $$I=\tfrac12\varepsilon_0 cE_0^2$$ and pressure $$I/c$$ (absorbed) or $$2I/c$$ (reflected).
:::

:::mistakes
- **Magnetic forces do no work.** $$\vec F=q\vec v\times\vec B\perp\vec v$$, so $$B$$ alone never changes a particle's speed or kinetic energy — it only bends the path. Any speed change traces back to an electric field (including an induced one).
- **Lenz's law is about opposing the *change*, not the field.** The induced current opposes the change in flux; it can reinforce a *decreasing* field. Get the sign from "which way must induced effects point to fight the change," then sanity-check with energy.
- **Ampère's law is always true but rarely solvable.** Like Gauss's law, it only yields $$B$$ cheaply when symmetry makes $$\vec B$$ uniform and parallel along the loop; otherwise it is an identity, not a shortcut.
- **The induced electric field is not conservative.** When $$d\Phi_B/dt\neq0$$, $$\oint\vec E\cdot d\vec\ell\neq0$$, so "voltage" between two points becomes path-dependent — you cannot define a single potential the way you do in [Electrostatics](/notes/physics/electro1/).
- **Reactances are frequency-dependent and don't simply add to resistance.** Combine them as $$\sqrt{R^2+(X_L-X_C)^2}$$, not $$R+X_L+X_C$$, and remember $$X_L$$ and $$X_C$$ act in *opposite* phase.
- **Don't forget the displacement current.** Ampère's law without the $$\varepsilon_0\,d\Phi_E/dt$$ term is inconsistent wherever $$\vec E$$ changes (e.g. between capacitor plates) — and it is the very term that makes electromagnetic waves possible.
- **RMS vs. peak.** $$V_{\text{rms}}=V_0/\sqrt2$$ for a sinusoid; power formulas use RMS values, and the average of $$\cos^2$$ over a cycle is $$\tfrac12$$.
:::
