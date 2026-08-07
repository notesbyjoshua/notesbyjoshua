---
title: "Unit 6: Energy and Momentum of Rotating Systems"
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

## Rotational Kinetic Energy

When an object is rotating, its kinetic energy is not limited to translational kinetic energy. A rigid body rotating with angular speed $$\omega$$ has rotational kinetic energy

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

**Example.** A solid sphere of mass $$M=2.0\ \text{kg}$$ and radius $$R=0.15\ \text{m}$$ rolls without slipping at center-of-mass speed $$v_{\text{cm}}=4.0\ \text{m/s}$$. Find its total kinetic energy.

For a solid sphere,

$$
I_{\text{cm}}=\frac{2}{5}MR^2.
$$

Rolling without slipping gives $$\omega=v_{\text{cm}}/R$$. Thus

$$
K=\frac12Mv_{\text{cm}}^2+\frac12I_{\text{cm}}\omega^2.
$$

Substitute:

$$
K=\frac12Mv^2+\frac12\left(\frac25MR^2\right)\left(\frac{v}{R}\right)^2
=\frac12Mv^2+\frac15Mv^2=\frac{7}{10}Mv^2.
$$

Numerically,

$$
K=\frac{7}{10}(2.0)(4.0)^2=22.4\ \text{J}.
$$

The radius cancels because a smaller sphere spins faster at the same rolling speed, exactly compensating for the smaller $$R^2$$ in $$I$$.

</div>

---

## Variables of Rotation

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

Rolling without slipping is a special case of rotary motion that imposes the constraint

$$
v_{\text{cm}} = R\omega
$$

and, if the constraint holds through the acceleration,

$$
a_{\text{cm}} = R\alpha.
$$

The point of contact is instantaneously at rest relative to the ground, so static friction can provide torque without doing work on an ideal rolling object. Static friction may point uphill or downhill depending on what torque is needed.

Rolling without slipping means the surface does not slide at the contact point. The contact point on the rolling object is instantaneously at rest relative to the ground, so the distance the center moves equals the arc length unwound from the rim:

$$
\Delta x_{\text{cm}}=R\Delta\theta.
$$

Differentiating gives $$v_{\text{cm}}=R\omega$$ and $$a_{\text{cm}}=R\alpha$$. If slipping occurs, these constraints fail; the object can translate too fast or too slowly for its spin.

Friction is the force that enforces the no-slip condition, but its direction is not automatic. For a passive ball rolling down an incline, static friction points up the incline because it provides the torque needed to spin the ball faster. For a driven wheel on a car, static friction can point forward because the engine tries to spin the tire backward against the road. Static friction does not necessarily oppose the motion of the center of mass; it opposes relative slipping at the contact point.

### Rolling Down an Incline

A round object released on an incline rolls without slipping if friction is sufficient. We can find its center-of-mass acceleration in general, then specialize to common shapes.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (-3,-1.2) -- (3,-1.2) -- (3,0.9) -- cycle;
\draw[thick] (-3,-1.2) -- (3,0.9);
\coordinate (O) at (0.1,0.02);
\draw[fill=gray!20] (O) circle (0.5);
\draw[->, blue, thick] (O) -- ++(-0.34,0.94) node[above] {$N$};
\draw[->, orange!90!black, thick] ($(O)+(-0.18,-0.47)$) -- ++(-1.0,-0.35) node[left] {$f_s$};
\draw[->, red, thick] (O) -- ++(0,-1.35) node[below] {$mg$};
\draw[->, thick] ($(O)+(0.73,0.05)$) arc[start angle=5,end angle=-270,radius=0.33] node[right] {$\alpha$};
\draw[->, gray!80, thick] (O) -- ++(0.9,0.32) node[right] {$a_{\text{cm}}$};
\end{tikzpicture}
```

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

**Example.** A solid cylinder of mass $$M = 2.0\ \text{kg}$$ and radius $$R = 0.10\ \text{m}$$ rolls without slipping down a $$\theta = 30^\circ$$ incline. Find its center-of-mass acceleration and the static friction force, and state the minimum coefficient of friction needed.

A solid cylinder has $$\beta = I_{\text{cm}}/MR^2 = \tfrac12$$, so

$$
a=\frac{g\sin\theta}{1+\tfrac12}=\frac{2}{3}g\sin\theta=\frac{2}{3}(9.8)\sin 30^\circ=\frac{2}{3}(9.8)(0.5)=3.27\ \text{m/s}^2.
$$

The friction force, from $$f = \dfrac{\beta}{1+\beta}Mg\sin\theta$$ with $$\beta=\tfrac12$$ (so $$\dfrac{\beta}{1+\beta}=\tfrac13$$):

$$
f=\frac{1}{3}Mg\sin\theta=\frac{1}{3}(2.0)(9.8)(0.5)=3.27\ \text{N}.
$$

For the cylinder to roll without slipping, static friction must be able to supply this, so $$f \le \mu_s F_N = \mu_s Mg\cos\theta$$. The minimum coefficient is

$$
\mu_{s,\min}=\frac{f}{Mg\cos\theta}=\frac{\tfrac13 Mg\sin\theta}{Mg\cos\theta}=\frac{1}{3}\tan\theta=\frac{1}{3}\tan 30^\circ=0.19.
$$

If the actual $$\mu_s$$ is smaller than this, the cylinder slips: it then accelerates faster than $$\tfrac23 g\sin\theta$$ translationally but spins up more slowly, and you must use kinetic friction $$f_k = \mu_k Mg\cos\theta$$ with $$a \ne R\alpha$$.

</div>

---

## Angular Momentum of a Particle

The angular momentum of a particle about a chosen origin is a cross product (a way of multiplying vectors):

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

which is *constant in time* even though the particle is not rotating about anything — because $$r\sin\theta$$ stays equal to the fixed lever arm $$r$$. This is a useful sanity check: angular momentum is conserved here because no force (hence no torque) acts.

:::tip
Always state the reference point before quoting an angular momentum; the same motion can have any value of $$L$$, including zero (choose the origin on the line of motion), depending on where you measure from.
:::

The direction of angular momentum is always defined using the right hand rule, where you curl your hand in the direction of spin and your thumb points in the direction of angular momentum.

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
\draw[dashed] (0,-1.5) -- (0,1.8);
\draw[->, very thick, blue] (0,0.2) -- (0,1.8) node[above] {$\vec L,\ \vec\omega$};
\draw[->, thick] (1.0,0.35) arc[start angle=20,end angle=320,x radius=1.0,y radius=0.35] node[right] {spin};
\node at (0,-1.9) {symmetric disk spinning about its central axis};
\end{tikzpicture}
```

---

## Torque and Angular Momentum

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
This is the central subtlety of the topic: $$L$$ is conserved whenever external torque becomes zero, but $$K_{\text{rot}}$$ is conserved only when, additionally, no internal work is done and no inelastic merging occurs.
:::

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

## Orbiting Particles and Central Forces

If a force always points along the line between a particle and a fixed center, then the torque about that center is zero:

$$
\vec{\tau} = \vec{r}\times \vec{F}=0.
$$

<div class="theorem-box">

**Proof (central forces exert zero torque about the center).** A central force is parallel or antiparallel to $$\vec r$$, the vector from the center to the particle. The torque magnitude is

$$
\tau=rF\sin\theta,
$$

where $$\theta$$ is the angle between $$\vec r$$ and $$\vec F$$. For a central force, $$\theta=0^\circ$$ or $$180^\circ$$, so $$\sin\theta=0$$. Therefore

$$
\tau=0.
$$

Equivalently, the line of action of the force passes through the center, so the lever arm about that center is zero.

</div>

Therefore angular momentum about the center is conserved. These forces are called central forces, and are important in everyday life, like in the cases of gravity and Coulombic force.

For gravity, central-force motion leads to Kepler's laws:

- **First law:** bound orbits are ellipses with the central body at one focus.
- **Second law:** the radius vector sweeps equal areas in equal times.
- **Third law:** for orbits around the same central mass, $$T^2\propto a^3$$, where $$a$$ is the semimajor axis.

For circular orbits, Kepler's third law follows immediately from force balance:

$$
\frac{GMm}{r^2}=m\frac{4\pi^2r}{T^2}.
$$

Solving,

$$
T^2=\frac{4\pi^2}{GM}r^3.
$$

For elliptical orbits, replace $$r$$ with the semimajor axis $$a$$:

$$
T^2=\frac{4\pi^2}{GM}a^3.
$$

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

:::equations

| Quantity | Equation |
|---|---|
| Rotational kinetic energy | $$K_{\text{rot}} = \tfrac12 I\omega^2$$ |
| Total KE (translation + rotation) | $$K = \tfrac12 Mv_{\text{cm}}^2 + \tfrac12 I_{\text{cm}}\omega^2$$ |
| Rotational work | $$W_{\text{rot}} = \displaystyle\int \tau\,d\theta$$ |
| Rotational power | $$P = \tau\omega = \vec\tau\cdot\vec\omega$$ |
| Rolling constraint | $$v_{\text{cm}}=R\omega,\quad a_{\text{cm}}=R\alpha$$ |
| Rolling down an incline | $$a=\dfrac{g\sin\theta}{1+I_{\text{cm}}/MR^2}$$ |
| Angular momentum (particle) | $$\vec L = \vec r\times\vec p,\quad L = rp\sin\theta$$ |
| Angular momentum (rigid body) | $$\vec L = I\vec\omega$$ (symmetry axis) |
| Torque–angular momentum | $$\sum\vec\tau_{\text{ext}} = \dfrac{d\vec L}{dt}$$ |
| Conservation of $$L$$ | $$I_i\omega_i = I_f\omega_f$$ (zero ext. torque) |
| Angular impulse | $$\displaystyle\int\vec\tau_{\text{ext}}\,dt = \Delta\vec L$$ |
| Areal velocity (central force) | $$\dfrac{dA}{dt} = \dfrac{L}{2m}$$ |
:::

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
