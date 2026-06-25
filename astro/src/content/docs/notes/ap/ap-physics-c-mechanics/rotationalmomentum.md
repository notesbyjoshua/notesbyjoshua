---
title: "Energy and Momentum of Rotating Systems"
sidebar:
  order: 6
---

This unit completes the rotation picture by adding rotational energy and angular momentum. The translational ideas from [work and energy](/notes/ap/ap-physics-c-mechanics/work/) and [linear momentum](/notes/ap/ap-physics-c-mechanics/linearmomentum/) have close angular analogs, but the axis choice matters more than it did before.

---

## Useful Variables

- $$K_{\text{rot}}$$ = rotational kinetic energy
- $$L$$ = angular momentum
- $$I$$ = rotational inertia
- $$\omega$$ = angular velocity
- $$\tau$$ = torque
- $$W_{\text{rot}}$$ = rotational work
- $$P$$ = power

---

## Rotational Kinetic Energy

A rigid body rotating with angular speed $$\omega$$ has rotational kinetic energy

$$
K_{\text{rot}} = \frac{1}{2}I\omega^2.
$$

For an object that both translates and rotates, total kinetic energy is

$$
K = \frac{1}{2}Mv_{\text{cm}}^2 + \frac{1}{2}I_{\text{cm}}\omega^2.
$$

This form is especially important for rolling objects. The translational term tracks motion of the center of mass; the rotational term tracks spinning about the center of mass. The split is not an approximation: any rigid-body motion can be decomposed into translation of the center of mass plus rotation about the center of mass, and the kinetic energy splits cleanly into exactly these two pieces with no cross term.

<div class="theorem-box">

**Proof (Splitting Kinetic Energy).** Treat the body as many small masses $$m_i$$. Write each particle's velocity as the center-of-mass velocity plus a velocity relative to the center of mass,

$$
\vec{v}_i = \vec{v}_{\text{cm}} + \vec{v}_i\,',
$$

where $$\vec{v}_i\,'$$ is the velocity of $$m_i$$ as seen from the center of mass. The total kinetic energy is

$$
K = \sum_i \frac{1}{2}m_i\,\vec{v}_i\cdot\vec{v}_i
= \sum_i \frac{1}{2}m_i\left(\vec{v}_{\text{cm}} + \vec{v}_i\,'\right)\cdot\left(\vec{v}_{\text{cm}} + \vec{v}_i\,'\right).
$$

Expanding the dot product gives three sums:

$$
K = \frac{1}{2}\left(\sum_i m_i\right)v_{\text{cm}}^2
+ \vec{v}_{\text{cm}}\cdot\sum_i m_i\vec{v}_i\,'
+ \sum_i \frac{1}{2}m_i\,v_i'^2.
$$

The first sum is $$\tfrac{1}{2}Mv_{\text{cm}}^2$$. The middle (cross) term contains $$\sum_i m_i\vec{v}_i\,'$$, which is the total momentum *measured in the center-of-mass frame* — and that is zero by definition of the center of mass. So the cross term vanishes. In the last sum, every particle moves only because the body spins about the center of mass, so $$v_i' = r_i\omega$$, giving

$$
\sum_i \frac{1}{2}m_i\,v_i'^2 = \frac{1}{2}\omega^2\sum_i m_ir_i^2 = \frac{1}{2}I_{\text{cm}}\omega^2.
$$

Therefore

$$
K = \frac{1}{2}Mv_{\text{cm}}^2 + \frac{1}{2}I_{\text{cm}}\omega^2.
$$

The disappearance of the cross term is exactly why translation and rotation can be analyzed as separate energy reservoirs.

</div>

<div class="theorem-box">

**Proof (Rotational Kinetic Energy).** Treat a rigid body as many small masses $$m_i$$. If the body rotates with angular speed $$\omega$$ about a fixed axis, the speed of mass $$m_i$$ is

$$
v_i=r_i\omega.
$$

Total kinetic energy is

$$
K=\sum_i \frac{1}{2}m_iv_i^2.
$$

Substitute $$v_i=r_i\omega$$:

$$
K=\sum_i \frac{1}{2}m_i(r_i\omega)^2
=\frac{1}{2}\omega^2\sum_i m_ir_i^2.
$$

Since

$$
I=\sum_i m_ir_i^2,
$$

we get

$$
K_{\text{rot}}=\frac{1}{2}I\omega^2.
$$

</div>

---

## Rotational Work

For a torque acting through an angular displacement,

$$
dW = \tau\,d\theta.
$$

Thus

$$
W_{\text{rot}} = \int_{\theta_i}^{\theta_f} \tau\,d\theta.
$$

For constant torque,

$$
W_{\text{rot}} = \tau\Delta\theta.
$$

The rotational work-energy theorem is

$$
W_{\text{net,rot}} = \Delta K_{\text{rot}}.
$$

This is the angular counterpart of $$W_{\text{net}}=\Delta K$$.

---

## Power in Rotation

Instantaneous rotational power is

$$
P = \tau\omega.
$$

More generally, in vector form,

$$
P = \vec{\tau}\cdot\vec{\omega}.
$$

This is useful for motors, wheels, pulleys, and any device where energy transfer is described by torque and angular speed.

---

## Rolling Energy

For rolling without slipping,

$$
v_{\text{cm}} = R\omega.
$$

Substituting into total kinetic energy gives

$$
K = \frac{1}{2}Mv_{\text{cm}}^2 + \frac{1}{2}I_{\text{cm}}\left(\frac{v_{\text{cm}}}{R}\right)^2.
$$

It is convenient to write the moment of inertia of a rolling body as $$I_{\text{cm}} = cMR^2$$, where the dimensionless number $$c$$ depends only on shape: $$c = 1$$ for a hoop, $$c = \tfrac12$$ for a solid disk or cylinder, and $$c = \tfrac25$$ for a solid sphere. The factor $$R$$ cancels everywhere, so the geometry enters *only* through $$c$$. Objects with larger $$c = I_{\text{cm}}/(MR^2)$$ put more of their energy into rotation and less into translational speed for the same total energy. That is why a hoop and solid disk released from the same height on a ramp do not reach the bottom with the same speed — and, strikingly, the result is independent of both mass and radius.

<div class="theorem-box">

**Example.** A hoop ($$c=1$$), a solid disk ($$c=\tfrac12$$), and a solid sphere ($$c=\tfrac25$$) are released from rest and roll without slipping down a ramp from the same height $$h$$. Find each object's speed at the bottom and rank the finishing order.

Use energy conservation. Static friction does no work on an ideal rolling object (the contact point is instantaneously at rest), so mechanical energy is conserved. With $$I_{\text{cm}} = cMR^2$$ and $$\omega = v_{\text{cm}}/R$$, the kinetic energy at the bottom is

$$
K = \frac{1}{2}Mv^2 + \frac{1}{2}(cMR^2)\frac{v^2}{R^2}
= \frac{1}{2}Mv^2(1 + c).
$$

Setting $$Mgh = \tfrac12 Mv^2(1+c)$$ and solving,

$$
v = \sqrt{\frac{2gh}{1 + c}}.
$$

Both $$M$$ and $$R$$ cancel. Substituting each shape:

$$
v_{\text{sphere}} = \sqrt{\frac{2gh}{1+\tfrac25}} = \sqrt{\frac{10gh}{7}} \approx 1.195\sqrt{gh},
$$

$$
v_{\text{disk}} = \sqrt{\frac{2gh}{1+\tfrac12}} = \sqrt{\frac{4gh}{3}} \approx 1.155\sqrt{gh},
$$

$$
v_{\text{hoop}} = \sqrt{\frac{2gh}{1+1}} = \sqrt{gh} \approx 1.000\sqrt{gh}.
$$

The smaller $$c$$ is, the faster the object: **sphere first, disk second, hoop last.** A point mass sliding frictionlessly ($$c=0$$) would beat them all with $$v=\sqrt{2gh}$$. The hoop concentrates all its mass at radius $$R$$, so it stores the most energy in rotation and arrives slowest. Notice the ranking has nothing to do with which object is heavier — a bowling ball and a marble of the same shape tie.

</div>

---

## Angular Momentum of a Particle

The angular momentum of a particle about a chosen origin is

$$
\vec{L} = \vec{r}\times \vec{p}.
$$

Its magnitude is

$$
L = rp\sin\theta.
$$

Angular momentum depends on the origin. A particle moving in a straight line can have nonzero angular momentum about a point not on its line of motion. Concretely, if a particle of mass $$m$$ moves at constant speed $$v$$ along a straight line, and the chosen origin lies a perpendicular distance $$r$$ from that line, then

$$
L = mvr = rp,
$$

which is *constant in time* even though the particle is not rotating about anything — because $$r\sin\theta$$ stays equal to the fixed lever arm $$r$$. This is a useful sanity check: angular momentum is conserved here because no force (hence no torque) acts. Always state the reference point before quoting an angular momentum; the same motion can have any value of $$L$$, including zero (choose the origin on the line of motion), depending on where you measure from.

---

## Angular Momentum of a Rigid Body

For a rigid body rotating about a fixed symmetry axis,

$$
\vec{L} = I\vec{\omega}.
$$

This simple form assumes the angular momentum vector is parallel to the angular velocity vector. That is true for the fixed-axis and principal-axis cases AP Physics C normally uses. In general, $$\vec L$$ and $$\vec\omega$$ need *not* be parallel — for a body spun about a lopsided axis, the angular momentum vector wobbles relative to the spin axis, which is what makes an unbalanced wheel shake. AP Physics C deliberately restricts itself to symmetry axes, where $$\vec L = I\vec\omega$$ holds cleanly, so you can treat $$L = I\omega$$ as a scalar relation for a fixed axis. Just remember it is a special case, not the definition; the definition is always $$\vec L = \sum_i \vec r_i \times \vec p_i$$.

---

## Torque and Angular Momentum

Torque is the rate of change of angular momentum:

$$
\sum \vec{\tau}_{\text{ext}} = \frac{d\vec{L}}{dt}.
$$

For constant $$I$$ about a fixed axis, this becomes

$$
\sum \tau = I\alpha.
$$

This form explains why angular momentum is conserved when the net external torque about the chosen axis is zero. The relation $$\sum\tau = I\alpha$$ is developed further on the [torque and rotational dynamics](/notes/ap/ap-physics-c-mechanics/torque/) page; here the more general statement $$\sum\vec\tau_{\text{ext}} = d\vec L/dt$$ is the one to remember, because it still holds when $$I$$ changes (a spinning skater) — a case where $$\sum\tau = I\alpha$$ alone would be misleading.

<div class="theorem-box">

**Proof (Torque as Rate of Change of Angular Momentum).** For a particle,

$$
\vec{L}=\vec{r}\times\vec{p}.
$$

Differentiate:

$$
\frac{d\vec{L}}{dt}=\frac{d\vec{r}}{dt}\times\vec{p}+\vec{r}\times\frac{d\vec{p}}{dt}.
$$

Since $$d\vec{r}/dt=\vec{v}$$ and $$\vec{p}=m\vec{v}$$, the first term is

$$
\vec{v}\times m\vec{v}=0.
$$

The second term becomes

$$
\vec{r}\times\vec{F}=\vec{\tau}.
$$

Therefore

$$
\frac{d\vec{L}}{dt}=\vec{\tau}.
$$

For a system of particles, internal torques cancel under the usual Newtonian assumptions, leaving

$$
\frac{d\vec{L}_{\text{sys}}}{dt}=\sum \vec{\tau}_{\text{ext}}.
$$

</div>

---

## Conservation of Angular Momentum

If

$$
\sum \vec{\tau}_{\text{ext}} = 0,
$$

then

$$
\vec{L}_i = \vec{L}_f.
$$

For a rotating rigid body whose axis is fixed,

$$
I_i\omega_i = I_f\omega_f.
$$

If rotational inertia decreases, angular speed increases; if rotational inertia increases, angular speed decreases. Rotational kinetic energy does not have to be conserved during this process because internal work may be done while the mass distribution changes. This is the central subtlety of the topic: $$L$$ is conserved whenever external torque vanishes, but $$K_{\text{rot}}$$ is conserved only when, additionally, no internal work is done and no inelastic merging occurs. The examples below show both behaviors side by side — pulling mass inward *raises* $$K$$, while objects sticking together *lowers* it.

<img class="note-img note-img--w480" src="/assets/APs/AP%20Physics%20C%20Mech/rotationalmomentum/MoIskater.jpg" alt="spinning skater pulling arms in to speed up placeholder" loading="lazy" decoding="async" />

<div class="theorem-box">

**Example.** A skater spins at $$\omega_i = 2.0\ \text{rad/s}$$ with arms extended, giving a moment of inertia $$I_i = 6.0\ \text{kg}\cdot\text{m}^2$$. She pulls her arms in, reducing her moment of inertia to $$I_f = 2.0\ \text{kg}\cdot\text{m}^2$$. Find her new angular speed and the change in rotational kinetic energy.

The only external torques (gravity, the normal force at the skates) act along or through the vertical spin axis, so the external torque about that axis is zero and angular momentum is conserved:

$$
I_i\omega_i = I_f\omega_f
\;\Rightarrow\;
\omega_f = \frac{I_i\omega_i}{I_f} = \frac{(6.0)(2.0)}{2.0} = 6.0\ \text{rad/s}.
$$

She spins three times faster. Now compare the kinetic energies:

$$
K_i = \tfrac12 I_i\omega_i^2 = \tfrac12(6.0)(2.0)^2 = 12\ \text{J},
$$

$$
K_f = \tfrac12 I_f\omega_f^2 = \tfrac12(2.0)(6.0)^2 = 36\ \text{J}.
$$

Kinetic energy *tripled*, increasing by $$24\ \text{J}$$. This energy is not free: the skater's muscles do positive work pulling her arms inward against the outward "centrifugal" tendency of the rotating mass. Angular momentum is conserved; kinetic energy is not, because internal forces did work. A quick way to see the increase: since $$L = I\omega$$ is fixed, $$K = \tfrac12 I\omega^2 = \tfrac12 L\omega = L^2/(2I)$$, so shrinking $$I$$ must raise $$K$$.

</div>

<div class="theorem-box">

**Example.** A frictionless turntable (a uniform disk) has moment of inertia $$I_d = 200\ \text{kg}\cdot\text{m}^2$$ and rotates at $$\omega_i = 1.5\ \text{rad/s}$$. A person of mass $$m = 60\ \text{kg}$$ steps on at the rim, radius $$R = 2.0\ \text{m}$$, landing gently so as to move with the disk. Find the final angular speed and how much kinetic energy is lost.

Treat the person as a point mass on the rim, $$I_p = mR^2 = 60(2.0)^2 = 240\ \text{kg}\cdot\text{m}^2$$. The person stepping on exerts only internal forces on the (disk + person) system about the fixed vertical axis, so $$L$$ is conserved:

$$
I_d\omega_i = (I_d + I_p)\omega_f
\;\Rightarrow\;
\omega_f = \frac{200(1.5)}{200 + 240} = \frac{300}{440} \approx 0.68\ \text{rad/s}.
$$

Kinetic energies:

$$
K_i = \tfrac12(200)(1.5)^2 = 225\ \text{J},
$$

$$
K_f = \tfrac12(440)(0.68)^2 \approx 102\ \text{J}.
$$

About $$123\ \text{J}$$ is lost to friction between the person's feet and the disk as they come to a common angular speed. This is the rotational analog of a perfectly inelastic collision: $$L$$ is conserved but kinetic energy is **not**. Whenever two rotating things merge and end up at one common $$\omega$$, expect kinetic energy to drop, never rise.

</div>

<div class="theorem-box">

**Example.** A horizontal disk of moment of inertia $$I_0 = 0.40\ \text{kg}\cdot\text{m}^2$$ spins freely at $$\omega_i = 8.0\ \text{rad/s}$$ about a vertical axis. A lump of clay of mass $$m = 0.50\ \text{kg}$$ is dropped straight down and sticks at a distance $$r = 0.30\ \text{m}$$ from the axis. Find the final angular speed.

The clay falls vertically, so its velocity is parallel to the spin axis and it carries **zero** angular momentum about that axis before landing. The impact force between clay and disk is internal to the system, so $$L$$ about the vertical axis is conserved. The clay adds moment of inertia $$mr^2$$:

$$
I_0\omega_i = \left(I_0 + mr^2\right)\omega_f.
$$

Compute $$mr^2 = 0.50(0.30)^2 = 0.045\ \text{kg}\cdot\text{m}^2$$:

$$
\omega_f = \frac{(0.40)(8.0)}{0.40 + 0.045} = \frac{3.2}{0.445} \approx 7.2\ \text{rad/s}.
$$

The disk slows slightly because its moment of inertia grew while $$L$$ stayed fixed. (Energy is again lost: the clay must be sped up to the rim speed by the sticky, inelastic contact.) The key insight is that anything dropped vertically onto a horizontal turntable arrives with no angular momentum about the vertical axis, so it can only slow the spin.

</div>

<div class="theorem-box">

**Example.** A uniform rod of mass $$M = 1.0\ \text{kg}$$ and length $$L = 1.2\ \text{m}$$ hangs vertically and is free to swing about a frictionless pivot at its top end. A bullet of mass $$m = 0.010\ \text{kg}$$ traveling horizontally at $$v = 300\ \text{m/s}$$ strikes and embeds in the rod at a distance $$d = 1.0\ \text{m}$$ below the pivot. Find the angular speed of the rod-plus-bullet just after impact, then find the maximum angle the rod swings up to.

**Step 1 — Why use angular momentum, not linear momentum.** During the impact the pivot exerts a large, unknown horizontal force on the rod, so linear momentum is *not* conserved. But the pivot force produces no torque about the pivot (its lever arm is zero), so **angular momentum about the pivot is conserved** through the collision. This is the signature move of these problems.

**Step 2 — Angular momentum before impact.** The bullet is a particle moving in a straight line; its angular momentum about the pivot is $$L_i = mvd$$ (lever arm $$d$$):

$$
L_i = (0.010)(300)(1.0) = 3.0\ \text{kg}\cdot\text{m}^2/\text{s}.
$$

**Step 3 — Moment of inertia after impact.** The rod about its end is $$I_{\text{rod}} = \tfrac13 ML^2$$ (see [torque and rotational dynamics](/notes/ap/ap-physics-c-mechanics/torque/)), and the embedded bullet adds $$md^2$$:

$$
I = \tfrac13 ML^2 + md^2 = \tfrac13(1.0)(1.2)^2 + (0.010)(1.0)^2 = 0.480 + 0.010 = 0.490\ \text{kg}\cdot\text{m}^2.
$$

**Step 4 — Solve for $$\omega$$.** Angular momentum conservation $$L_i = I\omega$$ gives

$$
\omega = \frac{L_i}{I} = \frac{3.0}{0.490} \approx 6.1\ \text{rad/s}.
$$

**Step 5 — Swing-up height (now use energy).** After the collision is over, no more energy is lost, so mechanical energy is conserved as the rod swings up. The rod's center of mass rises and the bullet rises. Their combined kinetic energy converts to gravitational potential energy. The rotational KE just after impact is

$$
K = \tfrac12 I\omega^2 = \tfrac12(0.490)(6.1)^2 \approx 9.1\ \text{J}.
$$

The rod's center of mass sits at $$L/2 = 0.60\ \text{m}$$ from the pivot and the bullet at $$d = 1.0\ \text{m}$$. If the assembly swings up by angle $$\phi$$, each rises by its distance times $$(1-\cos\phi)$$:

$$
\Delta U = \left[Mg\frac{L}{2} + mgd\right](1-\cos\phi).
$$

The bracket is $$\big[(1.0)(9.8)(0.60) + (0.010)(9.8)(1.0)\big] = 5.88 + 0.098 = 5.98\ \text{J}$$. Setting $$\Delta U = K$$:

$$
1 - \cos\phi = \frac{9.1}{5.98} = 1.52.
$$

Since this exceeds $$1$$, $$\cos\phi$$ would be negative: the rod swings past horizontal and in fact would go over the top, so the assembly makes a complete revolution rather than settling at a maximum angle. (Had the bracket been larger or the bullet slower, you would solve $$\cos\phi = 1 - K/\Delta U_{\max}$$ for a finite turning angle.) The takeaway is the two-stage recipe: **angular-momentum conservation through the inelastic impact, then energy conservation for the swing.** Do not try to conserve energy through the collision itself — much of the bullet's kinetic energy is lost to embedding.

</div>

---

## Angular Impulse

The angular impulse delivered by a torque is

$$
\int_{t_i}^{t_f}\vec{\tau}_{\text{ext}}\,dt = \Delta \vec{L}.
$$

This is the angular version of impulse-momentum. A large torque over a short time can significantly change angular momentum even if the interaction is brief. On a torque-time graph, angular impulse is the signed area under the curve, just as linear impulse is the area under a force-time graph.

<div class="theorem-box">

**Example.** A grinding wheel is a uniform disk of mass $$M = 4.0\ \text{kg}$$ and radius $$R = 0.20\ \text{m}$$, initially at rest. A motor applies a tangential force at the rim that produces a torque rising linearly from $$0$$ to $$3.0\ \text{N}\cdot\text{m}$$ over $$2.0\ \text{s}$$. Find the wheel's angular speed at $$t = 2.0\ \text{s}$$.

The angular impulse is the area under the torque-time graph, a triangle of base $$2.0\ \text{s}$$ and height $$3.0\ \text{N}\cdot\text{m}$$:

$$
\int \tau\,dt = \tfrac12(2.0)(3.0) = 3.0\ \text{N}\cdot\text{m}\cdot\text{s}.
$$

This equals the change in angular momentum, $$\Delta L = I\omega_f - 0$$. The disk's moment of inertia is

$$
I = \tfrac12 MR^2 = \tfrac12(4.0)(0.20)^2 = 0.080\ \text{kg}\cdot\text{m}^2.
$$

Therefore

$$
\omega_f = \frac{\Delta L}{I} = \frac{3.0}{0.080} = 37.5\ \text{rad/s}.
$$

Because the torque varied with time, we could not use $$\tau = I\alpha$$ with a single $$\alpha$$ directly; the angular-impulse approach handles the varying torque automatically by taking the area, exactly as linear impulse handles a varying force.

</div>

---

## Orbiting Particles and Central Forces

If a force always points along the line between a particle and a fixed center, then the torque about that center is zero:

$$
\vec{\tau} = \vec{r}\times \vec{F}=0.
$$

Therefore angular momentum about the center is conserved. This is why planets sweep out equal areas in equal times and why orbital speed changes as the distance from the central body changes.

<img class="note-img note-img--w480" src="/assets/APs/AP%20Physics%20C%20Mech/rotationalmomentum/keplersecond.jpg" alt="Kepler equal areas swept in equal times along an orbit placeholder" loading="lazy" decoding="async" />

<div class="theorem-box">

**Proof (Kepler's Second Law from Angular-Momentum Conservation).** Consider a planet of mass $$m$$ at position $$\vec r$$ from the Sun, moving with velocity $$\vec v$$. In a small time $$dt$$ it moves $$d\vec r = \vec v\,dt$$. The area swept out by the radius vector is the area of the thin triangle with sides $$\vec r$$ and $$d\vec r$$:

$$
dA = \tfrac12\,\lvert \vec r \times d\vec r\rvert = \tfrac12\,\lvert \vec r \times \vec v\rvert\,dt.
$$

Divide by $$dt$$:

$$
\frac{dA}{dt} = \tfrac12\,\lvert \vec r \times \vec v\rvert.
$$

Now multiply and divide by $$m$$ to bring in angular momentum, using $$\vec L = \vec r \times m\vec v$$:

$$
\frac{dA}{dt} = \frac{1}{2m}\,\lvert \vec r \times m\vec v\rvert = \frac{L}{2m}.
$$

Gravity is a central force, so the torque about the Sun is zero and $$L$$ is constant. With $$m$$ also constant, $$dA/dt = L/2m$$ is constant: **the planet sweeps equal areas in equal times.** Kepler's empirical second law is just angular-momentum conservation in disguise.

</div>

<div class="theorem-box">

**Example.** A comet orbits the Sun. At its closest approach (perihelion) it is $$r_p = 0.6\ \text{AU}$$ from the Sun moving at $$v_p = 50\ \text{km/s}$$; the velocity there is perpendicular to the radius. Find its speed at its farthest point (aphelion), $$r_a = 3.0\ \text{AU}$$, where the velocity is again perpendicular to the radius.

At perihelion and aphelion the velocity is perpendicular to $$\vec r$$, so $$L = mvr\sin 90^\circ = mvr$$. Angular momentum about the Sun is conserved:

$$
m v_p r_p = m v_a r_a
\;\Rightarrow\;
v_a = v_p\frac{r_p}{r_a} = 50\cdot\frac{0.6}{3.0} = 10\ \text{km/s}.
$$

The comet moves five times slower at aphelion than at perihelion, in exact proportion to the inverse of its distance — the "equal areas" rule made quantitative. Note we never needed the gravitational force law itself, only that it is central.

</div>

---

## Key Equations

| Quantity | Equation |
|---|---|
| Rotational kinetic energy | $$K_{\text{rot}} = \tfrac12 I\omega^2$$ |
| Total KE (translation + rotation) | $$K = \tfrac12 Mv_{\text{cm}}^2 + \tfrac12 I_{\text{cm}}\omega^2$$ |
| Rolling speed from height | $$v = \sqrt{\dfrac{2gh}{1 + I_{\text{cm}}/MR^2}}$$ |
| Rotational work | $$W_{\text{rot}} = \displaystyle\int \tau\,d\theta$$ |
| Rotational power | $$P = \tau\omega = \vec\tau\cdot\vec\omega$$ |
| Angular momentum (particle) | $$\vec L = \vec r\times\vec p,\quad L = rp\sin\theta$$ |
| Angular momentum (rigid body) | $$\vec L = I\vec\omega$$ (symmetry axis) |
| Torque–angular momentum | $$\sum\vec\tau_{\text{ext}} = \dfrac{d\vec L}{dt}$$ |
| Conservation of $$L$$ | $$I_i\omega_i = I_f\omega_f$$ (zero ext. torque) |
| Angular impulse | $$\displaystyle\int\vec\tau_{\text{ext}}\,dt = \Delta\vec L$$ |
| Areal velocity (central force) | $$\dfrac{dA}{dt} = \dfrac{L}{2m}$$ |

## Practice

### FRQ

::::frq{id=ap-physics-c-mechanics-rotationalmomentum-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
