---
title: "Relativity"
sidebar:
  order: 7
---

# Relativity

---

**Yo ts is not done yet please edit and stuff**

---

## Lorentz transformations

Special relativity rests on two postulates. The price is that space and time become entangled.

:::conditions
- The laws of physics are the same in all inertial frames.
- The speed of light $$c$$ is the same in all inertial frames.
:::

<div class="theorem-box">

**Lorentz transformation.** Let frame $$S'$$ move to the right with velocity $$v\hat{x}$$ relative to $$S$$. The coordinates relate by

$$
t' = \gamma\left(t - \frac{vx}{c^2}\right), \qquad x' = \gamma(x - vt), \qquad y' = y, \qquad z' = z.
$$

</div>

Three famous consequences follow directly:

- **Length contraction.** A moving object of proper length $$L$$ is measured to be $$L/\gamma$$ along the direction of motion.
- **Time dilation.** A moving clock runs slow by a factor of $$\gamma$$.
- **Loss of simultaneity.** If two clocks are synchronized and separated by $$L$$ in $$S'$$, then in $$S$$ the **rear clock is ahead** by $$Lv/c^2$$.

The loss of simultaneity is the one beginners forget, and it resolves nearly every "paradox." Time dilation can be symmetric — each observer sees the other's clock running slow — precisely because they disagree about which events are simultaneous.

### Appearance vs. measurement

A reference frame is an abstract grid of rulers and synchronized clocks. What an object *measures* in a frame is **not** the same as how it *looks* to an eye in that frame, because light from different parts of the object takes different times to arrive.

For example, a train of rest length $$L$$ moving at speed $$v$$, viewed by someone off to its right, *appears* to have length

$$
L_{\text{app}} = L\sqrt{\frac{1 + v/c}{1 - v/c}},
$$

which is *larger* than $$L$$ — even though the measured frame length $$L/\gamma$$ is smaller. (Viewed from the left, the factor inverts.) Once light-travel time is properly accounted for, moving objects actually appear **rotated** rather than contracted.

## Velocity addition

<div class="theorem-box">

**Velocity addition.** If an object has velocity $$(u_x', u_y')$$ in $$S'$$, which moves at $$v\hat{x}$$ relative to $$S$$, then in $$S$$

$$
u_x = \frac{u_x' + v}{1 + u_x' v/c^2}, \qquad u_y = \frac{u_y'}{\gamma(1 + u_x' v/c^2)}.
$$

</div>

The transverse velocity $$u_y$$ picks up a $$\gamma$$ factor even though $$y' = y$$, because of time dilation in the denominator. No combination of sub-light speeds ever exceeds $$c$$.

## Doppler shift and aberration

### Relativistic Doppler effect

For a source of proper frequency $$f'$$ moving **directly toward** you at speed $$v$$, the nonrelativistic shift $$f_{\text{nr}} = f'/(1 - v/c)$$ is modified by the source's time dilation:

$$
f = \frac{f_{\text{nr}}}{\gamma} = \sqrt{\frac{1 + v/c}{1 - v/c}}\; f'.
$$

For a source receding, flip the sign of $$v$$. This second-order $$1/\gamma$$ correction was first confirmed by Ives and Stilwell.

### Aberration and beaming

Light emitted at angle $$\theta_0$$ to the $$x'$$-axis in $$S'$$ comes out at angle $$\theta$$ in $$S$$, where

$$
\cos\theta = \frac{\cos\theta_0 + v/c}{1 + (v/c)\cos\theta_0}.
$$

For an ultrarelativistic source ($$v \to c$$), almost all the radiation is squeezed into a forward cone of half-angle $$\sim 1/\gamma$$. This **relativistic beaming** is why decay products at the LHC come out in narrow "jets," and the same angle change produces **stellar aberration** — the apparent circular wobble of stars as the Earth orbits.

## Paradoxes

Relativistic "paradoxes" almost always smuggle in a nonrelativistic assumption through clever wording. A few classics:

- **Twin paradox.** Bob rockets away and returns; Alice stays home. Alice ages more. The asymmetry is real: Bob switches inertial frames at turnaround, so his notion of "now on Earth" jumps forward. Working it out with the Doppler effect (counting wave crests each twin receives) gives the aging difference cleanly, and unlike the frame-jump argument, it tracks what each twin actually *sees*.
- **Why lengths contract but times dilate.** The Lorentz transformation treats $$x$$ and $$t$$ symmetrically, but the *questions* we ask are not symmetric: length contraction compares two ends *at one time*, while time dilation compares one clock *at two times*. The minus sign in the spacetime interval does the rest.
- **Ladder/pole-in-barn, drill-through-wood, etc.** All resolved by the relativity of simultaneity: events that are simultaneous in one frame are not in another.

The real lesson of the long, sad history of people (even accomplished scientists) who rejected relativity over the twin paradox: **the ability to write fluent prose is not the ability to think.** Physicists learn to reason by solving well-defined problems mathematically.

## Four-vectors

The cleanest formalism. A **four-vector** $$V^\mu = (V^0, V^1, V^2, V^3)$$ transforms like $$(ct, x, y, z)$$. The key tool is the **inner product**, which has minus signs:

$$
V \cdot W = V^0 W^0 - V^1 W^1 - V^2 W^2 - V^3 W^3.
$$

This is **invariant** under Lorentz transformations. The squared interval $$(\Delta s)^2 = (c\,\Delta t)^2 - (\Delta x)^2 - \cdots$$ is the same in every frame.

<div class="theorem-box">

**Four-velocity and four-momentum.** Dividing displacement by proper time $$\tau$$ gives a four-vector (since $$\tau$$ is invariant). With $$c = 1$$,

$$
u^\mu = \frac{dx^\mu}{d\tau} = (\gamma, \gamma\mathbf{v}), \qquad p^\mu = m u^\mu = (E, \mathbf{p}),
$$

where $$E = \gamma m$$ and $$\mathbf{p} = \gamma m\mathbf{v}$$. Their norms are pure invariants:

$$
u \cdot u = 1, \qquad p \cdot p = E^2 - \lvert\mathbf{p}\rvert^2 = m^2.
$$

</div>

The relation $$E^2 = p^2 + m^2$$ (restoring $$c$$: $$E^2 = (pc)^2 + (mc^2)^2$$) is the workhorse of relativistic dynamics — to find an unknown final mass, compute one total four-momentum and take its norm.

Other useful four-vector facts:

- For a **photon**, $$m = 0$$ so $$E = \lvert\mathbf{p}\rvert c$$, and $$p^\mu = \hbar k^\mu$$ where $$k^\mu = (\omega/c, \mathbf{k})$$.
- An observer with four-velocity $$u^\mu$$ measures a particle's energy as $$p \cdot u$$.
- The inner product of two momenta, $$p_1 \cdot p_2 = m_1 m_2/\sqrt{1 - v^2}$$, depends only on their **relative** speed $$v$$.
- A system's **center-of-mass frame** is where total $$\mathbf{p} = 0$$; it moves at $$\mathbf{v} = \mathbf{p}c^2/E$$.

:::note
**On pop-science.** The slogan "everything moves through spacetime at speed $$c$$" (from $$u \cdot u = 1$$) is misleading — the minus signs in the inner product break the analogy to ordinary speed. Relativity makes sense *with* math and resists being made sense of without it.
:::

## Rapidity and acceleration

A Lorentz boost is a "rotation" mixing space and time. The generalized angle is the **rapidity** $$\phi = \tanh^{-1}(v/c)$$:

$$
\begin{pmatrix} x \\ ct \end{pmatrix} = \begin{pmatrix} \cosh\phi & \sinh\phi \\ \sinh\phi & \cosh\phi \end{pmatrix}\begin{pmatrix} x' \\ ct' \end{pmatrix}.
$$

The payoff: **rapidities simply add** when you compose collinear boosts, $$\phi_{\text{tot}} = \phi_1 + \phi_2$$ (compare the messy velocity-addition formula). This makes acceleration problems tractable.

For a rocket with constant **proper acceleration** $$a_0$$ (felt onboard), the lab-frame acceleration is $$a_0/\gamma^3$$, and the rapidity grows linearly with proper time: $$\phi = a_0\tau/c$$, so $$v = c\tanh(a_0\tau/c)$$. The clean linear growth is exactly the rapidity-addition property at work.

:::note
Because boosts in different directions don't commute, boosting an object around a closed loop induces a net rotation — **Thomas precession** (kinematically, **Wigner rotation**). It's why an orbiting object's spin axis slowly precesses even with no torque in its rest frame.
:::

---

## Energy and momentum

<div class="theorem-box">

**Relativistic energy and momentum.**

$$
E = \gamma m c^2, \qquad \mathbf{p} = \gamma m \mathbf{v}.
$$

Both are conserved. The rest mass $$m$$ is **not** conserved in inelastic processes (it can grow), while $$E$$ always is — the opposite of the Newtonian situation. $$E$$ automatically includes rest energy $$mc^2$$ and all internal energy.

</div>

In dynamics problems, **work with $$E$$ and $$\mathbf{p}$$, not velocities.** Don't even mention $$v$$ unless asked.

**Worked example (mass from photons).** Two photons of energy $$E$$ collide at angle $$\theta$$ and make a particle. Total four-momentum is $$(2E,\, E(1+\cos\theta),\, E\sin\theta)$$, so

$$
M = \sqrt{4E^2 - E^2(1+\cos\theta)^2 - E^2\sin^2\theta} = 2E\sin(\theta/2).
$$

### Compton scattering

A photon scattering off a stationary electron by angle $$\theta$$ shifts wavelength by

$$
\lambda' = \lambda + \frac{h}{m_e c}(1 - \cos\theta).
$$

The shift $$h/m_e c$$ (the Compton wavelength) is fixed, so it matters most for short-wavelength X-rays and $$\gamma$$-rays, where it's a large *fractional* change.

## Optimal collisions

<div class="theorem-box">

**Threshold principle.** For fixed total momentum, the minimum-energy configuration has all particles moving together at a common velocity. Equivalently: at threshold, the products are all **at rest in the center-of-mass frame**.

</div>

**Worked example (pion photoproduction).** For $$\gamma + p \to p + \pi^0$$ with a stationary proton, the lab four-momentum is $$(E + m_p,\, E)$$ with invariant norm$$^2 = 2Em_p + m_p^2$$. At threshold the products are at rest in the CM frame, with norm$$^2 = (m_p + m_\pi)^2$$. Equating,

$$
\sqrt{2Em_p + m_p^2} = m_p + m_\pi \;\Rightarrow\; E = m_\pi + \frac{m_\pi^2}{2m_p} \approx 145\ \text{MeV}.
$$

A little above the pion rest energy, because the products carry off kinetic energy.

To make a proton–antiproton pair via $$p + p \to p + p + p + \bar{p}$$ on a stationary target, the required *kinetic* energy of the beam scales much worse than the rest energy produced — which is exactly why colliders use **two opposing beams** rather than a fixed target.

## Mass–energy and relativistic systems

The deep content of $$E = mc^2$$ is that **internal energy is mass**. Heat up a box of gas and it has more mass in every sense: more inertia, more weight, more gravitational pull. A box of photons bouncing inside reflective walls has rest mass $$M_{\text{tot}} = N\hbar\omega_0/c^2$$ even though each photon is massless.

In relativity the **center of mass is not well-defined** (a massless photon has no location to weight). Instead there's a **center of energy**, and the general result is

$$
\mathbf{p}_{\text{tot}} = \frac{E_{\text{tot}}}{c^2}\,\mathbf{v}_{\text{CE}},
$$

reducing to $$\mathbf{p} = M\mathbf{v}_{\text{CM}}$$ nonrelativistically. A related and very general fact: **momentum density equals energy-flux density** (in EM, the momentum density *is* the Poynting vector, in units $$c=1$$).

## Forces in relativity

There are two notions of force, and you must keep them straight.

### Three-force

Define $$\mathbf{F} = d\mathbf{p}/dt$$ (not $$m\mathbf{a}$$ — the two differ relativistically). For a particle moving along $$\hat{x}$$,

$$
\mathbf{F} = m(\gamma^3 a_x,\; \gamma a_y,\; \gamma a_z),
$$

so **force is generally not parallel to acceleration**. Transforming from the particle's momentary rest frame to the lab,

$$
\mathbf{F} = (F_x',\; F_y'/\gamma,\; F_z'/\gamma) :
$$

longitudinal force is unchanged, transverse force is reduced by $$\gamma$$. This holds for *any* force.

### Four-force

$$
f^\mu = \frac{dp^\mu}{d\tau} = m a^\mu = \left(\gamma\frac{dE}{dt},\, \gamma\mathbf{F}\right).
$$

A "pure" force keeps the rest mass fixed, which requires $$f \cdot u = 0$$. (Putting a system on a stove changes its mass without changing momentum — a valid four-force, but not a "pure" one.)

:::warning
**Avoid "relativistic mass."** Writing $$m_r = \gamma m$$ to get $$E = m_r c^2$$, $$\mathbf{p} = m_r\mathbf{v}$$ breaks down in 2D, since $$\mathbf{F}\not\parallel\mathbf{a}$$ means there's no single mass that recovers $$\mathbf{F}=m\mathbf{a}$$. You'd need separate transverse $$m_\perp = \gamma m$$ and longitudinal $$m_\parallel = \gamma^3 m$$. Just use $$E$$ and $$\mathbf{p}$$.
:::

### The Lorentz force and circular motion

The Lorentz force $$\mathbf{F} = q(\mathbf{E} + \mathbf{v}\times\mathbf{B}) = d\mathbf{p}/dt$$ is a pure three-force.

**Worked example (collider field).** For protons of energy $$E$$ in a ring of radius $$R$$, the centripetal force is $$F = \omega p$$ with $$\omega \approx c/R$$ and $$p \approx E/c$$. The magnetic force $$qcB$$ supplies it, so

$$
B = \frac{E}{qcR}.
$$

For the LHC ($$E = 7$$ TeV, $$R = 4.3$$ km) this gives $$B \approx 5.4$$ T, and since $$R \propto E$$ at fixed $$B$$, reaching 20 TeV needs a $$\sim$$12 km ring.

The slick way to express the Lorentz force as a four-force is via the antisymmetric **field-strength tensor** $$F^{\mu\nu}$$ (built from $$\mathbf{E}$$ and $$\mathbf{B}$$), with $$f^\mu = q u_\nu F^{\mu\nu}$$. Its antisymmetry automatically guarantees $$f\cdot u = 0$$, i.e. fixed rest mass.

---

## Electromagnetic field transformations

The biggest payoff of relativity for E&M: $$\mathbf{E}$$ and $$\mathbf{B}$$ are two faces of one object, and a boost mixes them.

<div class="theorem-box">

**Field transformations.** Boosting with velocity $$\mathbf{v}$$, the components parallel to $$\mathbf{v}$$ are unchanged,

$$
\mathbf{E}_\parallel' = \mathbf{E}_\parallel, \qquad \mathbf{B}_\parallel' = \mathbf{B}_\parallel,
$$

while the perpendicular components transform as

$$
\mathbf{E}_\perp' = \gamma(\mathbf{E}_\perp + \mathbf{v}\times\mathbf{B}_\perp), \qquad \mathbf{B}_\perp' = \gamma\left(\mathbf{B}_\perp - \frac{\mathbf{v}}{c^2}\times\mathbf{E}_\perp\right).
$$

</div>

These keep Maxwell's equations valid in every inertial frame, and total charge stays invariant under boosts. A clean way to remember the $$\gamma\mathbf{E}_\perp$$ piece: boosting a capacitor length-contracts its plates, raising the charge density and thus the field.

### Field of a moving charge

A charge $$q$$ moving at constant velocity has a field that is **still exactly radial**, but squashed:

$$
\mathbf{E} = \frac{q}{4\pi\epsilon_0 r^2}\,\frac{1 - v^2/c^2}{(1 - (v^2/c^2)\sin^2\theta)^{3/2}}\,\hat{r},
$$

where $$\theta$$ is measured from $$\mathbf{v}$$. The field lines pile up perpendicular to the motion (contracted by $$\gamma$$ along $$\mathbf{v}$$) — this is literally what inspired Lorentz and FitzGerald to propose length contraction. The accompanying magnetic field is exactly

$$
\mathbf{B} = \frac{\mathbf{v}}{c^2}\times\mathbf{E}.
$$

If the charge suddenly changes velocity, the "news" propagates outward at $$c$$: outside an expanding sphere the field still points to where the charge *would* have been, and the kink between old and new fields is the radiated pulse.

### Invariants

Out of $$\mathbf{E}$$ and $$\mathbf{B}$$ you can build two Lorentz invariants:

$$
\mathbf{E}\cdot\mathbf{B} \qquad \text{and} \qquad E^2 - c^2 B^2.
$$

Consequences: if $$\mathbf{E}\perp\mathbf{B}$$ and $$\lvert E\rvert = c\lvert B\rvert$$ in one frame (a light wave), that holds in all frames. If $$\mathbf{E} = 0$$ but $$\mathbf{B}\neq 0$$ somewhere, no boost can make $$\mathbf{B}$$ vanish there (since $$E^2 - c^2B^2 < 0$$ is invariant).

:::note
**Is magnetism "real"?** Purcell famously shows magnetism *must* exist given Coulomb's law plus relativity: electric forces alone wouldn't transform correctly between frames, and the gap is exactly the magnetic force. But this does **not** mean magnetism is "just an error" or "all electric fields." You can sometimes trade one for the other by changing frames, but in any given frame both are perfectly real — and there are configurations (nonzero invariants) where you can't remove $$\mathbf{B}$$ at all. The lesson is that $$\mathbf{E}$$ and $$\mathbf{B}$$ are as inseparable as space and time.
:::

### Covariant form

The charge and current densities form a four-vector $$J^\mu = (\rho c, \mathbf{J})$$, charge conservation is $$\partial_\mu J^\mu = 0$$, and all of Maxwell's equations compress to $$\partial_\mu F^{\mu\nu} = \mu_0 J^\nu$$ (with $$F^{\mu\nu} = \partial^\mu A^\nu - \partial^\nu A^\mu$$). Elegant notation is a tool, not a religion — index notation wins because it works whenever indices contract in pairs.

## Charges in fields: potentials and canonical momentum

The fields come from a scalar potential $$\phi$$ and vector potential $$\mathbf{A}$$:

$$
\mathbf{E} = -\nabla\phi - \frac{\partial\mathbf{A}}{\partial t}, \qquad \mathbf{B} = \nabla\times\mathbf{A}.
$$

<div class="theorem-box">

**Canonical momentum.** By Noether's theorem, a symmetry gives a conserved quantity. For a charge $$q$$ in static fields, time-translation symmetry conserves energy $$E = \tfrac{1}{2}mv^2 + q\phi$$, and (partial) space-translation symmetry conserves the **canonical momentum**

$$
\mathbf{p} = m\mathbf{v} + q\mathbf{A}.
$$

</div>

The term $$q\mathbf{A}$$ is a kind of "potential momentum," analogous to potential energy $$q\phi$$. The power of this: even when fields and motion are complicated, if $$\phi$$ and $$\mathbf{A}$$ are independent of $$x$$, then $$p_x$$ is conserved. For rotational symmetry about $$\hat z$$, $$J_z = (\mathbf{r}\times\mathbf{p})\cdot\hat{z}$$ is conserved (using the *canonical* $$\mathbf{p}$$). The relativistic versions hold with $$m\mathbf{v}\to\gamma m\mathbf{v}$$.

This is the right tool for adiabatic-invariant problems in magnetic fields (e.g. the betatron, slow changes of $$B$$ on an orbiting charge), and it's the hidden conserved quantity behind several "magic" Olympiad solutions.

## Gravitation and the equivalence principle

<div class="theorem-box">

**Equivalence principle.** A uniform gravitational field is locally indistinguishable from a uniformly accelerating frame, in *all* contexts. This was the seed of general relativity.

</div>

### Gravitational redshift

Send a photon of frequency $$f$$ upward a height $$h$$ in field $$g$$. Thinking of mass–energy conservation (photons "lose mass-energy" climbing) gives a fractional frequency drop

$$
\frac{\Delta f}{f} = -\frac{gh}{c^2} = -\frac{\Delta\phi}{c^2}.
$$

Since photon frequency is a clock, this means **clocks deeper in a potential run slow** by a factor $$1 + \phi/c^2$$. The same result follows from the equivalence principle (two accelerating observers see a Doppler shift) and was confirmed in the 1959 **Pound–Rebka** experiment using $$\gamma$$-rays sent down a 22.5 m tower.

### Clocks, GPS, and combined effects

A real clock (e.g. on a satellite) feels two competing effects:

- **Special-relativistic time dilation** from its orbital speed (makes it run *slow*).
- **Gravitational time dilation** from sitting higher in the potential (makes it run *fast*).

For GPS satellites the gravitational effect dominates, and both must be corrected for the system to work. On the Earth's surface, gravitational redshift also implies a vertical system in thermal equilibrium has a tiny temperature gradient (the **Tolman gradient**) — usually negligible.

### A note on visualizing GR

In general relativity gravity *is* spacetime curvature: freely falling objects move in straight lines (geodesics), and what we call "gravity" is the constant upward acceleration of the ground pushing us off those geodesics. The rubber-sheet picture is a poor analogy (it secretly assumes gravity to make things roll downhill); the "river model" — space flowing inward, with the event horizon where it flows faster than light — captures more, but no simple analogy *is* the theory. The equations are the theory; analogies are stories we tell our animal-descended minds.

---

## Problem-solving strategy

Match the question to the cleanest invariant or transformation before grinding through algebra:

:::strategy{title="Choosing the right relativistic tool"}
1. **Compare clocks, lengths, or event coordinates between two frames:** write the Lorentz transformation $$t' = \gamma(t - vx/c^2),\ x' = \gamma(x - vt)$$ and read off time dilation (one clock, two times $$\to \Delta t = \gamma\,\Delta\tau$$) or length contraction (two ends, one time $$\to L/\gamma$$). For anything labeled a "paradox," draw the relativity of simultaneity first: the rear clock leads by $$Lv/c^2$$.
2. **Combine velocities or transform an emission angle:** use velocity addition $$u_x = \dfrac{u_x' + v}{1 + u_x' v/c^2}$$ (with the $$\gamma$$ in $$u_y$$), and aberration $$\cos\theta = \dfrac{\cos\theta_0 + v/c}{1 + (v/c)\cos\theta_0}$$ for light directions and beaming into the $$\sim 1/\gamma$$ cone.
3. **Collisions, decays, or "find the unknown mass":** go to four-momenta. Conserve the total $$p^\mu = (E, \mathbf{p})$$, then take the norm $$p\cdot p = E^2 - \lvert\mathbf{p}\rvert^2 = m^2$$ in whatever frame is easiest. Work with $$E$$ and $$\mathbf{p}$$, never velocities.
4. **Threshold / minimum-energy reaction:** demand the products be at rest in the CM frame. Equate the invariant norm$$^2$$ of the lab four-momentum to $$(\sum m_{\text{products}})^2$$ and solve, as in $$E = m_\pi + m_\pi^2/2m_p$$.
5. **Frequency or wavelength shifts:** relativistic Doppler $$f = \sqrt{\dfrac{1+v/c}{1-v/c}}\,f'$$ (flip the sign of $$v$$ for recession) for moving sources; Compton $$\lambda' = \lambda + \dfrac{h}{m_e c}(1-\cos\theta)$$ for a photon scattering off a stationary electron.
6. **Accelerated / repeated-boost motion:** switch to rapidity $$\phi = \tanh^{-1}(v/c)$$, which simply adds. Constant proper acceleration gives $$v = c\tanh(a_0\tau/c)$$ and lab acceleration $$a_0/\gamma^3$$.
7. **Forces or trajectories:** use $$\mathbf{F} = d\mathbf{p}/dt$$ (not $$m\mathbf{a}$$); transverse force drops by $$\gamma$$. For charges, the Lorentz force is a pure three-force, giving $$B = E/qcR$$ for a ring.
8. **E and B in a moving frame:** transform the fields ($$\mathbf{E}_\parallel,\mathbf{B}_\parallel$$ fixed; $$\mathbf{E}_\perp' = \gamma(\mathbf{E}_\perp + \mathbf{v}\times\mathbf{B}_\perp)$$, etc.), or use the invariants $$\mathbf{E}\cdot\mathbf{B}$$ and $$E^2 - c^2B^2$$ to decide what *can't* be transformed away. For conserved quantities in fields, reach for the canonical momentum $$\mathbf{p} = \gamma m\mathbf{v} + q\mathbf{A}$$.
:::

:::mistakes
- Asking for the "real" length or time without naming a frame — every such quantity is frame-dependent; only $$m$$, $$p\cdot p$$, the interval $$(\Delta s)^2$$, and $$\mathbf{E}\cdot\mathbf{B}$$, $$E^2-c^2B^2$$ are invariant.
- Forgetting simultaneity. Time dilation can be mutual precisely because the two frames disagree on which events are simultaneous; nearly every paradox dissolves once the $$Lv/c^2$$ offset is included.
- Mixing up the directions: lengths *contract* (compared at one time), clocks *dilate* (compared at two times) — they are not symmetric statements.
- Confusing what an object *measures* in a frame with how it *looks* to an eye; light-travel time makes a fast train *appear* longer (and rotated), not contracted.
- Treating rest mass as conserved. In inelastic processes $$E$$ and $$\mathbf{p}$$ are conserved but $$m$$ is not (a hot box weighs more); compute mass only from the total four-momentum's norm.
- Adding velocities naively or letting any combination exceed $$c$$; add rapidities instead. Likewise, dropping the $$1/\gamma$$ second-order factor in the Doppler shift.
- Invoking "relativistic mass" $$\gamma m$$ — it fails in 2D because $$\mathbf{F}\not\parallel\mathbf{a}$$. Stick to $$E$$ and $$\mathbf{p}$$.
:::
