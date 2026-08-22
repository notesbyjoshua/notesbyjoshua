---
title: "Unit 6: Energy and Momentum of Rotating Systems"
description: "AP Physics C Mechanics notes on rotational energy, angular momentum, rolling motion, torque, inertia, and conservation laws."
sidebar:
  order: 6
---

:::variables
- $$K_{\text{rot}}$$ = rotational kinetic energy
- $$L$$ = angular momentum
- $$I$$ = rotational inertia
- $$\omega$$ = angular velocity
- $$\tau$$ = torque
- $$W_{\text{rot}}$$ = rotational work
- $$P$$ = power
:::

---

## Variables of Rotation

Like kinematics, rotation also has counterparts for measurements of energy and other variables.

### Rotational Kinetic Energy

When an object is rotating, its kinetic energy is not limited to translational kinetic energy. A rigid body (a body that cannot stretch/contract) rotating with angular speed $$\omega$$ has rotational kinetic energy

$$
K_{\text{rot}} = \frac{1}{2}I\omega^2.
$$

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

For an object that both translates and rotates, total kinetic energy is simply the sum of the two kinetic energies:

$$
K = \frac{1}{2}Mv_{\text{cm}}^2 + \frac{1}{2}I_{\text{cm}}\omega^2.
$$

This form is especially important for rolling objects. The translational term tracks motion of the center of mass; the rotational term tracks spinning about the center of mass. Any rigid-body motion can be decomposed into translation of the center of mass plus rotation about the center of mass, and the kinetic energy splits into exactly these two pieces with no cross term.

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

Expanding the dot product (look at Unit 10 of AP Precalculus if you need more guidance) gives three sums:

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

**Example.** A uniform disk of mass $$M=3.0\ \text{kg}$$ and radius $$R=0.40\ \text{m}$$ spins about a fixed axle through its center at $$\omega=12\ \text{rad/s}$$. Find its rotational kinetic energy. Do not assume the disk is rolling.

For a solid disk about its center,

$$
I=\frac{1}{2}MR^2
=\frac{1}{2}(3.0)(0.40)^2
=0.24\ \text{kg}\cdot\text{m}^2.
$$

Since the axle is fixed, the disk has rotational kinetic energy only:

$$
K_{\text{rot}}=\frac{1}{2}I\omega^2
=\frac{1}{2}(0.24)(12)^2
=17.3\ \text{J}.
$$

There is no $$\frac{1}{2}Mv_{\text{cm}}^2$$ term because the center of mass is not translating.

</div>

### Rotational Work

For a torque acting through an angular displacement, the work done through each small angle $$d\theta$$ is

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

This is the angular counterpart of $$W_{\text{net}}=\Delta K$$. Indeed, if you substitute the angular variables for the linear counterparts, the work done is the same formula.

### Rotational Power

Instantaneous rotational power is

$$
P = \tau\omega.
$$

More generally, in vector form,

$$
\vec P = \vec{\tau} \cdot \vec{\omega}.
$$

This is consistent with the translational value for power.

<div class="theorem-box">

**Example.** A motor applies a constant torque $$\tau=4.0\ \text{N}\cdot\text{m}$$ to a wheel starting from rest. The wheel rotates through $$12\ \text{rad}$$ in the first $$3.0\ \text{s}$$. Find the work done by the motor and the average power. If the wheel's angular speed at the end is $$8.0\ \text{rad/s}$$, find the instantaneous power at that instant.

Rotational work is

$$
W=\tau\Delta\theta=(4.0)(12)=48\ \text{J}.
$$

Average power is

$$
\bar{P}=\frac{W}{\Delta t}=\frac{48}{3.0}=16\ \text{W}.
$$

Instantaneous rotational power is

$$
P=\tau\omega=(4.0)(8.0)=32\ \text{W}.
$$

The average power over the interval is lower than the final instantaneous power because the wheel started from rest and sped up.

</div>

---

## Rolling Without Slipping

Rolling without slipping is a special case of rotary motion and is the kind of rotary motion people generally associate with "rolling." Formally, rolling without slipping imposes the constraint

$$
v_{\text{cm}} = R\omega
$$

and, if the constraint holds through the acceleration,

$$
a_{\text{cm}} = R\alpha.
$$

The point of contact is instantaneously at rest relative to the ground, meaning that if you take a contact point between the object and the ground, it will not "slide" or move horizontally. Rather, that point "kisses" the ground upon touch and immediately is lifted from the ground by the rotary movement. Since the velocity is technically zero at the contact point, the surfaces are not sliding past each other, so static friction is used instead of kinetic friction. Static friction can provide torque without doing work on an ideal rolling object, and may point uphill or downhill depending on what torque is needed.

Due to the fact that the contact point on the rolling object is instantaneously at rest relative to the ground, so the distance the center moves equals the arc length unwound from the rim:

$$
\Delta x_{\text{cm}}=R\Delta\theta.
$$

Differentiating gives $$v_{\text{cm}}=R\omega$$ and $$a_{\text{cm}}=R\alpha$$. If slipping occurs (e.g. the contact point slides along the surface before being rotated), these constraints fail; the object can translate too fast or too slowly for its spin.

<div class="theorem-box">

**Example.** A bicycle wheel of radius $$R=0.35\ \text{m}$$ rolls without slipping on level ground. The center of the wheel moves at $$6.0\ \text{m/s}$$. Find the wheel's angular speed, and find how many revolutions it makes while traveling $$42\ \text{m}$$.

Rolling without slipping gives

$$
v_{\text{cm}}=R\omega.
$$

Thus

$$
\omega=\frac{v_{\text{cm}}}{R}
=\frac{6.0}{0.35}
=17.1\ \text{rad/s}.
$$

For the distance traveled, use

$$
\Delta x_{\text{cm}}=R\Delta\theta.
$$

So

$$
\Delta\theta=\frac{\Delta x_{\text{cm}}}{R}
=\frac{42}{0.35}
=120\ \text{rad}.
$$

Convert radians to revolutions:

$$
N=\frac{\Delta\theta}{2\pi}
=\frac{120}{2\pi}
\approx 19.1\ \text{revolutions}.
$$

No incline or forces were needed; this is purely the rolling constraint.

</div>

Note that rolling without slipping is only possible with enough friction, which prevents the contact point from ever sliding. That begs the question: will an infinitely large static friction stop a wheel from rolling down a ramp? Surprisingly, no! Static friction does not necessarily impede motion, it only prevents relative motion at the contact point, meaning that the wheel will still roll without slipping down the ramp. However, if there is a really large *kinetic* friction, the wheel will stop since kinetic friction does impede motion by removing kinetic energy!

### Rolling Down an Incline

A round object released on an incline rolls without slipping if friction is sufficient (which we will usually assume is true). As a result, there are many shortcut formulas for the kinematics of such motion:

$$
a=\frac{g\sin\theta}{1+\dfrac{I_{\text{cm}}}{MR^2}},
$$

$$
f=\frac{I_{\text{cm}}a}{R^2},
\qquad
f=\frac{\beta}{1+\beta}Mg\sin\theta
\quad\text{when } I_{\text{cm}}=\beta MR^2,
$$

and

$$
v_{\text{cm}}=R\omega,\qquad a_{\text{cm}}=R\alpha.
$$

<div class="theorem-box">

**Proof (acceleration of a rolling object down an incline).** Let a round body of mass $$M$$, radius $$R$$, and central moment of inertia $$I_{\text{cm}}$$ roll without slipping down an incline of angle $$\theta$$. Three forces act: gravity, the normal force, and static friction $$f$$ acting up the incline (we will let the math confirm the direction).

Translation along the incline (take down-the-incline positive), with the center of mass accelerating at $$a$$:

$$
Mg\sin\theta - f = Ma.
$$

Rotation about the center of mass: the only force with a torque about the center is friction (gravity acts at the center, normal force points through the center). Its lever arm is $$R$$, so

$$
fR = I_{\text{cm}}\alpha.
$$

Rolling without slipping gives the constraint $$a = R\alpha$$, i.e. $$\alpha = a/R$$. Substitute into the torque equation:

$$
fR = I_{\text{cm}}\frac{a}{R}\quad\Rightarrow\quad f = \frac{I_{\text{cm}}\,a}{R^2}.
$$

Put this friction back into the translation equation:

$$
Mg\sin\theta - \frac{I_{\text{cm}}\,a}{R^2} = Ma\quad\Rightarrow\quad Mg\sin\theta = a\left(M + \frac{I_{\text{cm}}}{R^2}\right).
$$

Solve for $$a$$:

$$
a=\frac{g\sin\theta}{1+\dfrac{I_{\text{cm}}}{MR^2}}.
$$

It is convenient to write $$I_{\text{cm}} = \beta MR^2$$, where the dimensionless $$\beta$$ depends only on the shape ($$\beta = \tfrac12$$ for a disk, $$\tfrac25$$ for a sphere, $$1$$ for a hoop). Then

$$
a=\frac{g\sin\theta}{1+\beta},\qquad f=\frac{\beta}{1+\beta}\,Mg\sin\theta.
$$

The friction comes out positive, confirming it points up the incline. Notice $$a$$ is independent of $$M$$ and $$R$$ and is always less than the frictionless slide value $$g\sin\theta$$, because some of gravity's pull goes into spinning the body up rather than speeding its center.

</div>

Specializing $$a = g\sin\theta/(1+\beta)$$ to common shapes:

- **Solid sphere** ($$\beta = \tfrac25$$): $$a = \dfrac{g\sin\theta}{1+2/5} = \dfrac{5}{7}g\sin\theta$$.
- **Solid disk or cylinder** ($$\beta = \tfrac12$$): $$a = \dfrac{g\sin\theta}{1+1/2} = \dfrac{2}{3}g\sin\theta$$.
- **Thin hoop** ($$\beta = 1$$): $$a = \dfrac{g\sin\theta}{1+1} = \dfrac{1}{2}g\sin\theta$$.

Smaller $$\beta$$ means less mass far from the axis, less rotational inertia to spin up, and therefore larger $$a$$. In a race down the same incline the order is sphere (fastest), then disk, then hoop (slowest) — independent of their masses and radii. The hoop loses because all of its mass sits at radius $$R$$.

<div class="theorem-box">

**Example.** A hollow cylinder rolls without slipping down an incline of angle $$\theta$$ while a block slides down the same incline with coefficient of kinetic friction $$\mu$$. They start from rest at the same height and reach the bottom at the same time. Find $$\mu$$.

If they start together and travel the same distance in the same time from rest, their accelerations down the incline are equal.

For a rolling object,

$$
a_{\text{roll}}=\frac{g\sin\theta}{1+\beta},
$$

where $$I=\beta MR^2$$. A hollow cylinder has $$\beta=1$$, so

$$
a_{\text{roll}}=\frac{1}{2}g\sin\theta.
$$

For the sliding block,

$$
a_{\text{slide}}=g\sin\theta-\mu g\cos\theta.
$$

Set the accelerations equal:

$$
\frac{1}{2}g\sin\theta
=g\sin\theta-\mu g\cos\theta.
$$

Cancel $$g$$ and solve:

$$
\mu\cos\theta=\frac{1}{2}\sin\theta,
$$

so

$$
\mu=\frac{1}{2}\tan\theta.
$$

The block needs just enough kinetic friction to lose the same translational acceleration that the hollow cylinder loses to rotational inertia.

</div>

In general, when solving rolling without slipping problems, always:

:::strategy
1. Decide whether the object is rolling without slipping. If yes, write the constraint $$v_{\text{cm}}=R\omega$$ or $$a_{\text{cm}}=R\alpha$$.
2. Draw forces on the center of mass. Static friction is unknown; do not set it equal to $$\mu_sN$$ unless the problem asks for the slipping threshold.
3. Write translation along the direction of motion: $$\sum F=Ma$$.
4. Write rotation about the center of mass: $$\sum\tau_{\text{cm}}=I_{\text{cm}}\alpha$$.
5. Use $$a=R\alpha$$ to combine the equations. Usually this solves for $$a$$ first.
6. Return to the force equations to find friction or normal force if needed, then check $$\lvert f_s\rvert\le\mu_sN$$ if slipping is a concern.
:::

---

## Angular Momentum of a Particle

The angular momentum of a particle about a chosen origin is a cross product (refer to the previous unit if you need a reminder of what the cross product is):

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

which is *constant in time* even though the particle is not rotating about anything since $$r\sin\theta$$ stays equal to the fixed lever arm $$r$$. The direction of angular momentum is always defined using the right hand rule.

:::tip
Always state the reference point before quoting an angular momentum; the same motion can have any value of $$L$$, including zero (choose the origin on the line of motion), depending on where you measure from.
:::

### Angular Momentum of a Rigid Body

For a rigid body rotating about a fixed symmetry axis,

$$
\vec{L} = I\vec{\omega}.
$$

This simple form assumes the angular momentum vector is parallel to the angular velocity vector. That is true for the fixed-axis and principal-axis cases AP Physics C normally uses. In general, $$\vec L$$ and $$\vec\omega$$ need *not* be parallel — for a body spun about a lopsided axis, the angular momentum vector wobbles relative to the spin axis, which is what makes an unbalanced wheel shake. AP Physics C deliberately restricts itself to symmetry axes, where $$\vec L = I\vec\omega$$ holds cleanly, so you can treat $$L = I\omega$$ as a scalar relation for a fixed axis. Just remember it is a special case, not the definition; the definition is always $$\vec L = \sum_i \vec r_i \times \vec p_i$$.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[fill=gray!20] (0,0) ellipse (1.5 and 0.55);
\draw[dashed] (0,-1.4) -- (0,1.75);
\draw[->, very thick, blue] (0,0) -- (0,1.75) node[above] {$\vec L,\ \vec\omega$};
\draw[->, thick] (1.25,0.45) arc[start angle=25,end angle=330,x radius=1.25,y radius=0.43];
\node[right] at (1.35,0.35) {spin};
\end{tikzpicture}
```

<div class="theorem-box">

**Example.** A $$0.20\ \text{kg}$$ particle moves at $$6.0\ \text{m/s}$$ along a straight line. The chosen origin is $$0.50\ \text{m}$$ from the particle's line of motion. Find the magnitude of the particle's angular momentum about that origin.

Use the perpendicular-distance form:

$$
L=mvr_\perp.
$$

Thus

$$
L=(0.20)(6.0)(0.50)
=0.60\ \text{kg}\cdot\text{m}^2/\text{s}.
$$

The particle is not moving in a circle, but it still has angular momentum about an off-line origin.

</div>

### Torque and Angular Momentum

Just like how force is the rate of change of linear momentum, torque is the rate of change of angular momentum:

$$
\sum \vec{\tau}_{\text{ext}} = \frac{d\vec{L}}{dt}.
$$

For constant $$I$$ about a fixed axis, this becomes

$$
\sum \tau = I\alpha,
$$

which matches the rotational form of Newton's second law. This form explains why angular momentum is conserved when the net external torque about the chosen axis is zero.

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

<div class="theorem-box">

**Example.** A wheel has moment of inertia $$I=0.80\ \text{kg}\cdot\text{m}^2$$ and spins at $$5.0\ \text{rad/s}$$. A constant braking torque of magnitude $$2.0\ \text{N}\cdot\text{m}$$ acts opposite the spin. Find how long it takes to stop.

Use torque as the rate of change of angular momentum:

$$
\tau=\frac{\Delta L}{\Delta t}.
$$

The angular momentum changes from $$I\omega_i$$ to $$0$$:

$$
\Delta L=0-I\omega_i
=-(0.80)(5.0)
=-4.0\ \text{kg}\cdot\text{m}^2/\text{s}.
$$

The torque is $$-2.0\ \text{N}\cdot\text{m}$$, so

$$
\Delta t=\frac{\Delta L}{\tau}
=\frac{-4.0}{-2.0}
=2.0\ \text{s}.
$$

The same answer would come from $$\tau=I\alpha$$, but angular momentum makes the impulse idea visible.

</div>

---

## Conservation of Angular Momentum

You may have picked up that all of the linear motion laws usually have rotational counterparts. The Law of Conservation of Momentum is no different! If

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

If rotational inertia decreases, angular speed increases; if rotational inertia increases, angular speed decreases. Rotational kinetic energy does not have to be conserved during this process because internal work may be done while the mass distribution changes, similar to how kinetic energy is not necessarily conserved when momentum is conserved.

:::warning
$$L$$ is conserved whenever external torque becomes zero, but $$K_{\text{rot}}$$ is conserved only when, additionally, no internal work is done and no inelastic merging occurs, just like with linear momentum and kinetic energy.
:::

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

**Step 3 — Moment of inertia after impact.** The rod about its end is $$I_{\text{rod}} = \tfrac13 ML^2$$, and the embedded bullet adds $$md^2$$:

$$
I = \tfrac13 ML^2 + md^2 = \tfrac13(1.0)(1.2)^2 + (0.010)(1.0)^2 = 0.490\ \text{kg}\cdot\text{m}^2.
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

This is the angular version of impulse-momentum. A large torque over a short time can significantly change angular momentum even if the interaction is brief. On a torque-time graph, angular impulse is the *signed* area under the curve, just as linear impulse is the area under a force-time graph.

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

## Orbiting Particles and Gravity

Gravity is a **central force**, meaning that it points along the line connecting the orbiting object to the body it orbits. Since a central force points along $$\vec r$$, it produces no torque about the attracting body:

<div class="theorem-box">

**Proof (angular momentum conservation in a central force).** For gravity,

$$
\vec F_g=-\frac{GMm}{r^2}\hat r.
$$

The torque about the attracting body is

$$
\vec\tau=\vec r\times \vec F_g.
$$

Since $$\vec F_g$$ is parallel or antiparallel to $$\vec r$$,

$$
\vec r\times \vec F_g=\vec 0.
$$

Thus

$$
\frac{d\vec L}{dt}=\vec\tau=\vec 0,
$$

so angular momentum is conserved.

</div>

When dealing with gravity, we usually assume that an object, such as a planet or satellite, is orbiting around a much heavier object, such as a star or planet. Because the central mass is so much larger, we usually treat it as stationary and let the smaller mass move in an elliptical orbit around it.

The main orbit formulas below all come from the same two ideas. First, gravity is a central force, so it creates no torque about the attracting body and angular momentum is conserved. Second, gravity is conservative, so the total mechanical energy stays constant. Kepler's third law connects the size of the orbit to its period, while the orbital energy formula connects the size of the orbit to the total energy.

<div class="theorem-box">

**Theorem (Kepler's third law).** For an orbit with semi-major axis $$a$$ around a much larger mass $$M$$,

$$
T^2=\frac{4\pi^2}{GM}a^3.
$$

For circular orbits, $$a=r$$, so

$$
T^2=\frac{4\pi^2}{GM}r^3.
$$

</div>

<div class="theorem-box">

**Proof (Kepler's third law).** Let the orbit be an ellipse with semi-major axis $$a$$ and semi-minor axis $$b$$. Since gravity creates no torque about the central mass, angular momentum is conserved:

$$
L=mrv_\perp.
$$

The areal velocity is the rate at which the radius vector sweeps out area. For a small time interval,

$$
\frac{dA}{dt}=\frac{1}{2}rv_\perp=\frac{L}{2m}.
$$

One full orbit sweeps out the full area of the ellipse, $$A=\pi ab$$, so

$$
T=\frac{\pi ab}{L/(2m)}
=\frac{2\pi mab}{L}.
$$

Now we need one fact about the shape of a gravitational ellipse. If the attracting mass is placed at one focus, the orbit can be written in polar form as

$$
r=\frac{p}{1+e\cos\theta},
$$

where $$p$$ is the semi-latus rectum and $$e$$ is the eccentricity. You can see the proof of this in AP Precalculus. From ellipse geometry,

$$
p=a(1-e^2).
$$

Since $$b^2=a^2(1-e^2)$$, this becomes

$$
p=\frac{b^2}{a}.
$$

The dynamics gives the other expression for $$p$$. For an inverse-square gravitational force, the orbit equation gives

$$
p=\frac{h^2}{GM},
$$

where $$h=rv_\perp$$ is the specific angular momentum. Since $$L=mrv_\perp=mh$$,

$$
p=\frac{L^2}{GMm^2}.
$$

Thus

$$
\frac{L^2}{GMm^2}=\frac{b^2}{a},
$$

so

$$
L^2=\frac{GMm^2b^2}{a}.
$$

Squaring the period formula gives

$$
T^2=\frac{4\pi^2m^2a^2b^2}{L^2}
=\frac{4\pi^2m^2a^2b^2}{GMm^2b^2/a}
=\frac{4\pi^2}{GM}a^3.
$$

This proves Kepler's third law for an elliptical orbit. For a circular orbit, $$a=r$$.

</div>

<div class="theorem-box">

**Theorem (orbital energy).** For a mass $$m$$ orbiting a much larger mass $$M$$:

$$
E=-\frac{GMm}{2a},
$$

where $$a$$ is the semi-major axis. $$E$$ represents the *total* mechanical energy of the orbiting system.

</div>

The proof in the theorem is not shown since you have the opportunity to derive it yourself in FRQ #3 in the Practice section.

:::strategy
For orbit problems, first decide which conservation law or orbit law is most direct:

1. Use gravity as centripetal force for circular orbit speed or period.
2. Use Kepler's third law to compare periods and orbital sizes.
3. Use angular momentum conservation to compare speeds at different radii in the same orbit.
4. Use energy when the orbit is elliptical or escape speed is involved.
:::

<div class="theorem-box">

**Example.** A satellite orbits Earth in a circular orbit of radius $$r$$ with period $$T$$. Another satellite orbits Earth at radius $$4r$$. Find the period of the other satellite.

For circular orbits around the same central mass,

$$
T^2\propto r^3.
$$

Therefore

$$
\frac{T_2^2}{T_1^2}=\frac{(4r)^3}{r^3}=64.
$$

Taking the square root,

$$
\frac{T_2}{T_1}=8.
$$

So the farther satellite has period

$$
T_2=8T.
$$

Doubling radius does not merely double period; orbital period scales like $$r^{3/2}$$.

</div>

<div class="theorem-box">

**Example.** A comet moves in an elliptical orbit around the Sun. Its perihelion distance is $$r_p=0.50\ \text{AU}$$ and its aphelion distance is $$r_a=4.5\ \text{AU}$$. Find the semi-major axis and the period in years.

For an ellipse,

$$
a=\frac{r_p+r_a}{2}.
$$

Thus

$$
a=\frac{0.50+4.5}{2}=2.5\ \text{AU}.
$$

When using AU and years for orbits around the Sun, Kepler's third law becomes

$$
T^2=a^3.
$$

So

$$
T=\sqrt{a^3}
=\sqrt{(2.5)^3}
=\sqrt{15.625}
\approx 4.0\ \text{yr}.
$$

The comet spends most of that time far from the Sun, moving slowly, because angular momentum is conserved.

</div>

---

:::equations

| Quantity | Equation |
|---|---|
| Rotational kinetic energy | $$K_{\text{rot}} = \tfrac12 I\omega^2$$ |
| Total KE (translation + rotation) | $$K = \tfrac12 Mv_{\text{cm}}^2 + \tfrac12 I_{\text{cm}}\omega^2$$ |
| Rotational work | $$W_{\text{rot}} = \displaystyle\int \tau\,d\theta$$ |
| Rotational power | $$P = \tau\omega = \vec\tau\cdot\vec\omega$$ |
| Rolling constraint | $$v_{\text{cm}}=R\omega,\quad a_{\text{cm}}=R\alpha$$ |
| Rolling down an incline | $$a=\dfrac{g\sin\theta}{1+I_{\text{cm}}/MR^2}$$ |
| Rolling friction on incline | $$f=\dfrac{\beta}{1+\beta}Mg\sin\theta,\quad I_{\text{cm}}=\beta MR^2$$ |
| Angular momentum (particle) | $$\vec L = \vec r\times\vec p,\quad L = rp\sin\theta$$ |
| Angular momentum (rigid body) | $$\vec L = I\vec\omega$$ (symmetry axis) |
| Torque–angular momentum | $$\sum\vec\tau_{\text{ext}} = \dfrac{d\vec L}{dt}$$ |
| Conservation of $$L$$ | $$I_i\omega_i = I_f\omega_f$$ (zero ext. torque) |
| Angular impulse | $$\displaystyle\int\vec\tau_{\text{ext}}\,dt = \Delta\vec L$$ |
| Circular orbit speed | $$v_{\text{orbit}}=\sqrt{\dfrac{GM}{r}}$$ |
| Circular orbit period | $$T=2\pi\sqrt{\dfrac{r^3}{GM}}$$ |
| Kepler's third law | $$T^2=\dfrac{4\pi^2}{GM}a^3$$ |
| Escape speed | $$v_{\text{esc}}=\sqrt{\dfrac{2GM}{r}}$$ |
| Vis-viva equation | $$v^2=GM\left(\dfrac{2}{r}-\dfrac{1}{a}\right)$$ |
| Orbital mechanical energy | $$E=-\dfrac{GMm}{2a}$$ |
| Areal velocity (central force) | $$\dfrac{dA}{dt} = \dfrac{L}{2m}$$ |
:::

## Practice

### Multiple Choice

::::problem
1. Static friction does no work on a rigid object rolling without slipping on a fixed surface because

(A) the contact point is instantaneously at rest

(B) friction is always zero

(C) the center of mass is at rest

(D) rotational kinetic energy is constant


:::solution
In rolling without slipping, the point touching the floor is instantaneously at rest relative to the floor.

Work requires displacement of the point where the force acts. Since static friction acts at the instantaneously stationary contact point, its instantaneous power is zero. It can redistribute energy between translation and rotation, but it does not remove mechanical energy. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
2. A torque $$\tau(t)=\tau_0t/T$$ acts on a disk from $$t=0$$ to $$t=T$$. The angular impulse is

(A) $$\tau_0T$$

(B) $$\tau_0T/2$$

(C) $$\tau_0/T$$

(D) $$I\tau_0T$$


:::solution
Angular impulse is the area under the torque-time graph.


The graph is a triangle with base $$T$$ and height $$\tau_0$$, so

$$
J_{\text{ang}}=\int_0^T\frac{\tau_0t}{T}\,dt=\frac{\tau_0T}{2}.
$$

The answer is $$\boxed{\text{B}}$$.

This is the angular version of linear impulse: the area under torque-time changes angular momentum.
:::
::::

::::problem
3. A central force always points along $$\vec r$$. Therefore, for motion under a central force,

(A) angular momentum about the force center is conserved

(B) mechanical energy is always conserved

(C) speed is always constant

(D) the orbit must be circular


:::solution
A central force points along the radius vector, so $$\vec r$$ and $$\vec F$$ are parallel or antiparallel.


The torque about the force center is

$$
\vec\tau=\vec r\times\vec F=0.
$$

Since $$d\vec L/dt=\vec\tau_{\text{ext}}$$, zero torque means angular momentum about that center is conserved. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
4. A rolling hoop and rolling disk have the same mass, radius, and center-of-mass speed. The hoop has

(A) more total kinetic energy

(B) less total kinetic energy

(C) the same total kinetic energy

(D) no rotational kinetic energy


:::solution
Both objects have the same translational kinetic energy because they have the same $$M$$ and center-of-mass speed $$v$$. The difference is rotational kinetic energy.


For rolling without slipping, $$\omega=v/R$$. The hoop has $$I=MR^2$$ while the disk has $$I=\frac12MR^2$$, so the hoop has larger $$\frac12I\omega^2$$. Therefore it has more total kinetic energy. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
5. A hoop, disk, and solid sphere with the same mass and radius roll without slipping down the same incline. The object with the largest acceleration is the

(A) hoop

(B) disk

(C) solid sphere

(D) all tie


:::solution
For rolling objects on the same incline,

$$
a=\frac{g\sin\theta}{1+I/(MR^2)}.
$$

The hoop has $$I/(MR^2)=1$$, the disk has $$1/2$$, and the solid sphere has $$2/5$$. The smallest denominator belongs to the solid sphere, so it has the largest acceleration. The answer is $$\boxed{\text{C}}$$.

The radius and orbiting mass do not change, so the factor change in $$L$$ is exactly the factor change in speed.
:::
::::

::::problem
6. A solid sphere rolls without slipping down an incline from height $$H$$. A block slides frictionlessly from the same height. The ratio of the sphere's translational speed at the bottom to the block's speed at the bottom is

(A) $$\sqrt{5/7}$$

(B) $$\sqrt{2/5}$$

(C) $$\sqrt{7/5}$$

(D) $$1$$


:::solution
Both objects start from the same height, so both lose gravitational potential energy $$mgH$$. The block puts all of that into translation, while the sphere splits it between translation and rotation.

For the sphere,

$$
mgH=\frac12Mv^2+\frac12\left(\frac25MR^2\right)\left(\frac{v}{R}\right)^2
=\frac{7}{10}Mv^2.
$$

For the sliding block,

$$
mgH=\frac12Mv_b^2.
$$

Thus $$v^2=\frac{10}{7}gH$$ and $$v_b^2=2gH$$, so

$$
\frac{v}{v_b}=\sqrt{\frac{5}{7}}.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
7. A rigid object rolls without slipping with center-of-mass speed $$v$$. Its total kinetic energy is $$K=\dfrac{3}{4}Mv^2$$. If its radius is $$R$$, its moment of inertia about its center is

(A) $$\dfrac{1}{4}MR^2$$

(B) $$\dfrac{1}{2}MR^2$$

(C) $$MR^2$$

(D) $$\dfrac{3}{2}MR^2$$


:::solution
Rolling kinetic energy has translational and rotational pieces:

$$
K=\frac12Mv^2+\frac12I\omega^2.
$$

Because the object rolls without slipping, $$\omega=v/R$$. Substitute:

$$
K=\frac12Mv^2+\frac12I\frac{v^2}{R^2}.
$$

Set this equal to the given total kinetic energy:

$$
\frac34Mv^2=\frac12Mv^2+\frac12I\frac{v^2}{R^2}.
$$

The rotational part must be $$\frac14Mv^2$$, so $$I=\frac12MR^2$$. The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
8. A wheel rolls without slipping up a rough incline. Static friction is present but there is no slipping or other dissipation. Which quantity is conserved during the upward motion?

(A) translational kinetic energy only

(B) rotational kinetic energy only

(C) total mechanical energy

(D) angular momentum about the center only


:::solution
The wheel is moving upward, so translational and rotational kinetic energy may change as gravitational potential energy changes. However, the contact is static, not kinetic.

Static friction at a fixed surface does no work on an ideal rolling body because the contact point has zero instantaneous displacement. With no slipping and no other dissipative force, total mechanical energy is conserved. The answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
9. A disk spins freely on a frictionless axle. A student drops clay onto the disk at radius $$R/2$$, where it sticks. During the collision,

(A) angular momentum about the axle is conserved but rotational kinetic energy decreases

(B) rotational kinetic energy is conserved but angular momentum decreases

(C) both angular momentum and rotational kinetic energy are conserved

(D) neither angular momentum nor rotational kinetic energy is conserved


:::solution
During the short sticking collision, the axle exerts forces but no torque about the axle itself. Therefore angular momentum about the axle is conserved.

But the collision is inelastic because the clay sticks. In inelastic collisions, kinetic energy is not conserved; some becomes internal energy, sound, or deformation. Thus angular momentum is conserved while rotational kinetic energy decreases. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
10. A person sits on a spinning stool holding two masses. Pulling the masses inward increases angular speed because

(A) angular momentum is conserved while moment of inertia decreases

(B) kinetic energy is conserved while moment of inertia decreases

(C) torque from gravity increases

(D) the masses lose angular momentum to the stool


:::solution
The person, stool, and masses form a system with negligible external torque about the spin axis.

Angular momentum is

$$
L=I\omega.
$$

If $$L$$ stays constant and $$I$$ decreases, then $$\omega$$ must increase. The person does work while pulling the masses inward, so kinetic energy is not the conserved quantity. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
11. A satellite in an elliptical orbit is closest to the planet at periapsis. From periapsis to apoapsis, its angular momentum about the planet

(A) increases

(B) decreases

(C) remains constant

(D) becomes zero at apoapsis


:::solution
Gravity points along the line from the satellite to the planet, so the gravitational force has zero lever arm about the planet.

Therefore

$$
\vec\tau=\vec r\times\vec F=0,
$$

and angular momentum about the planet remains constant throughout the orbit. The answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
12. A planet of mass $$m$$ moves in a circular orbit of radius $$r$$ around a star of mass $$M$$. If the star's mass were replaced by $$4M$$ while $$r$$ stayed the same, the planet's angular momentum magnitude would be multiplied by

(A) $$1/2$$

(B) $$1$$

(C) $$2$$

(D) $$4$$


:::solution
For a circular orbit, gravity supplies centripetal force:

$$
\frac{GMm}{r^2}=\frac{mv^2}{r}.
$$

So

$$
v=\sqrt{\frac{GM}{r}}.
$$

If $$M$$ becomes $$4M$$ while $$r$$ stays fixed, then

$$
v\to \sqrt{4}\,v=2v.
$$

The angular momentum magnitude is $$L=mrv$$, so doubling $$v$$ doubles $$L$$. The answer is $$\boxed{\text{C}}$$.
:::
::::

### FRQ

::::frq{id=ap-physics-c-mechanics-rotationalmomentum-1}
1. A solid sphere rolls without slipping down an incline of angle $$\theta$$ from rest.

   $$(A)$$ Derive its center-of-mass acceleration.

   $$(B)$$ Determine the static friction force and its direction.

   $$(C)$$ Find the translational and rotational kinetic energies after descending height $$h$$.

   $$(D)$$ Compare the result with a hoop released from the same height.


:::solution
$$(A)$$ Draw the forces along the incline. Gravity pulls down the ramp, while static friction points up the ramp because it supplies the torque needed for rolling.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,decorations.pathmorphing}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.85]
  \draw[thick] (0,0) -- (4.4,1.7);
  \draw[dashed] (0,0) -- (4.4,0);
  \draw (0.75,0) arc[start angle=0,end angle=21,radius=0.75] node[midway,right] {$\theta$};
  \begin{scope}[shift={(2.15,0.83)}, rotate=21]
    \draw[fill=blue!10, thick] (0,0.45) circle (0.45);
    \fill (0,0.45) circle (1.5pt);
    \coordinate (c) at (0,0.45);
    \draw[->, thick] (c) -- ++(0,1.25) node[above] {$N$};
    \draw[->, thick, green!55!black] (0,0) -- ++(1.2,0) node[below] {$f$};
    \draw[->, red!75, thick] (-0.55,0.72) -- ++(-1.15,0) node[left] {$a$};
  \end{scope}
  \draw[->, thick] (c) -- ++(0,-1.35) node[below] {$Mg$};
\end{tikzpicture}
```

Translation along the incline gives

$$
Mg\sin\theta-f=Ma.
$$

Rotation about the center gives

$$
fR=I\alpha.
$$

For a solid sphere, $$I=2MR^2/5$$, and rolling without slipping gives $$a=\alpha R$$. Therefore

$$
fR=\frac25MR^2\frac{a}{R}
\quad\Rightarrow\quad
f=\frac25Ma.
$$

Substitute into the translation equation:

$$
Mg\sin\theta-\frac25Ma=Ma.
$$

Thus

$$
\boxed{a=\frac57g\sin\theta}.
$$

$$(B)$$ Now use $$f=2Ma/5$$:

$$
f=\frac25M\left(\frac57g\sin\theta\right)=\boxed{\frac27Mg\sin\theta}.
$$

The direction is up the incline, because that direction gives the clockwise torque needed for the sphere to roll as it moves down the ramp.

$$(C)$$ After descending height $$h$$, energy conservation gives

$$
Mgh=K_{\text{trans}}+K_{\text{rot}}.
$$

For rolling,

$$
K_{\text{trans}}=\frac12Mv^2,
\qquad
K_{\text{rot}}=\frac12\left(\frac25MR^2\right)\left(\frac{v}{R}\right)^2=\frac15Mv^2.
$$

So

$$
Mgh=\frac{7}{10}Mv^2.
$$

The translational fraction is $$(1/2)/(7/10)=5/7$$ and the rotational fraction is $$(1/5)/(7/10)=2/7$$:

$$
\boxed{K_{\text{trans}}=\frac57Mgh,\qquad K_{\text{rot}}=\frac27Mgh}.
$$

$$(D)$$ A hoop has larger rotational inertia, $$I=MR^2$$, so more of the same gravitational energy must go into rotation. It therefore has a smaller center-of-mass acceleration and a smaller translational speed at the bottom than the solid sphere.
:::
::::

::::frq{id=ap-physics-c-mechanics-rotationalmomentum-2}
2. A disk of rotational inertia $$I_0$$ spins freely with angular speed $$\omega_0$$. A small block of mass $$m$$ initially at the center slides outward along a frictionless radial slot and latches at radius $$R$$.

   $$(A)$$ Determine the final angular speed.

   $$(B)$$ Determine the change in rotational kinetic energy.

   $$(C)$$ Explain where the missing mechanical energy goes during the latch.

   $$(D)$$ If the block is pulled inward slowly by an internal mechanism instead, explain whether work must be done.


:::solution
$$(A)$$ There is no external torque about the axle, so angular momentum about the axle is conserved while the block moves and latches.

Initially,

$$
L_i=I_0\omega_0.
$$

Finally, the block contributes $$mR^2$$ to the rotational inertia, so

$$
L_f=(I_0+mR^2)\omega_f.
$$

Set $$L_i=L_f$$:

$$
\boxed{\omega_f=\frac{I_0}{I_0+mR^2}\omega_0}.
$$

$$(B)$$ The initial kinetic energy is

$$
K_i=\frac12I_0\omega_0^2.
$$

The final kinetic energy is

$$
K_f=\frac12(I_0+mR^2)\omega_f^2
=\frac12(I_0+mR^2)\left(\frac{I_0}{I_0+mR^2}\omega_0\right)^2.
$$

Thus

$$
K_f=\frac12\frac{I_0^2}{I_0+mR^2}\omega_0^2,
$$

and

$$
\boxed{\Delta K=-\frac12\frac{I_0mR^2}{I_0+mR^2}\omega_0^2}.
$$

The negative sign is expected because the latch is an inelastic process.

$$(C)$$ The missing mechanical energy becomes internal energy, sound, and deformation in the latch. Angular momentum is conserved because there is no external torque, but kinetic energy does not have to be conserved in a sticking interaction.

$$(D)$$ If the block is pulled inward slowly, the moment of inertia decreases. With angular momentum conserved, $$\omega$$ increases and the rotational kinetic energy increases. That extra kinetic energy must come from positive work done by the internal pulling mechanism.
:::
::::

::::frq{id=ap-physics-c-mechanics-rotationalmomentum-3}
3. A satellite of mass $$m$$ moves in an elliptical orbit around a planet of mass $$M$$. Its periapsis and apoapsis distances are $$r_p$$ and $$r_a$$.

   $$(A)$$ Use angular momentum conservation to relate $$v_p$$ and $$v_a$$.

   $$(B)$$ Use mechanical energy conservation to solve for $$v_p$$.

   $$(C)$$ Determine $$v_a$$.

   $$(D)$$ Explain why the satellite moves fastest at periapsis.


:::solution
$$(A)$$ Gravity is a central force, so it exerts no torque about the planet. Angular momentum about the planet is conserved. At periapsis and apoapsis, the velocity is tangent to the orbit, so the angular momentum magnitude is $$L=mrv$$.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,decorations.pathmorphing}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.9]
  \fill[yellow!70!orange] (0,0) circle (0.18) node[below] {planet};
  \draw[thick, blue!65] (0,0) ellipse (2.2 and 1.05);
  \fill[blue!70] (-2.2,0) circle (2.2pt) node[left] {periapsis};
  \fill[blue!70] (2.2,0) circle (2.2pt) node[right] {apoapsis};
  \draw[->, red!75, thick] (-2.2,0) -- (-2.2,0.8) node[above] {$v_p$};
  \draw[->, red!75, thick] (2.2,0) -- (2.2,-0.45) node[below] {$v_a$};
\end{tikzpicture}
```

Thus

$$
mr_pv_p=mr_av_a,
$$

or

$$
\boxed{r_pv_p=r_av_a}.
$$

$$(B)$$ Mechanical energy is also conserved because gravity is conservative:

$$
\frac12v_p^2-\frac{GM}{r_p}=\frac12v_a^2-\frac{GM}{r_a}.
$$

From part $$(A)$$,

$$
v_a=\frac{r_p}{r_a}v_p.
$$

Substitute into energy conservation:

$$
\frac12v_p^2-\frac12\left(\frac{r_p}{r_a}\right)^2v_p^2
=GM\left(\frac{1}{r_p}-\frac{1}{r_a}\right).
$$

Solving gives

$$
\boxed{v_p=\sqrt{\frac{2GMr_a}{r_p(r_p+r_a)}}}.
$$

$$(C)$$ Use the angular momentum relation again:

$$
\boxed{v_a=\frac{r_p}{r_a}v_p=\sqrt{\frac{2GMr_p}{r_a(r_p+r_a)}}}.
$$

$$(D)$$ Since $$mrv$$ is constant at periapsis and apoapsis and $$r_p<r_a$$, the speed must be larger at periapsis.
:::
::::
