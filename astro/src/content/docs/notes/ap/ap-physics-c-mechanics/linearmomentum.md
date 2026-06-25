---
title: "Linear Momentum and Impulse"
sidebar:
  order: 4
---

---

## Useful Variables

- $$\vec{p}$$ = linear momentum (Units: $$\text{kg}\cdot\text{m/s}$$)
- $$\vec{J}$$ = impulse (Units: $$\text{N}\cdot\text{s}$$)
- $$\vec{F}_{\text{net}}$$ = net external force
- $$M$$ = total mass of a system
- $$\vec{r}_{\text{cm}}$$ = center-of-mass position
- $$\vec{v}_{\text{cm}}$$ = center-of-mass velocity

---

## Linear Momentum

The momentum of a particle is

$$
\vec{p} = m\vec{v}.
$$

Momentum is a vector, so components must be conserved independently. Newton's second law can be written in its more general form as

$$
\vec{F}_{\text{net}} = \frac{d\vec{p}}{dt}.
$$

For constant mass, this reduces to $$\vec{F}_{\text{net}} = m\vec{a}$$. The momentum form is the more fundamental statement of Newton's second law, and it is essential whenever mass is not constant, such as a rocket burning fuel or a rope piling onto the ground.

---

## Impulse

**Impulse** is the change in momentum caused by a force acting over time:

$$
\vec{J} = \int_{t_i}^{t_f} \vec{F}_{\text{net}}\,dt = \Delta \vec{p}.
$$

For a constant force,

$$
\vec{J} = \vec{F}_{\text{net}}\Delta t.
$$

On a force-time graph, impulse is the signed area under the curve. This is the time-domain analog of how work is the area under a force-position graph in [work and energy](/notes/ap/ap-physics-c-mechanics/work/). During a collision, the peak force may be hard to model, but the impulse can often be found from the initial and final momenta, since $$\vec{J}=\Delta\vec{p}$$ does not care about the detailed shape of $$\vec{F}(t)$$.

<img class="note-img note-img--w480" src="/assets/APs/AP%20Physics%20C%20Mech/linearmomentum/impulsegraph.png" alt="force-versus-time graph with shaded area equal to impulse placeholder" loading="lazy" decoding="async" />


It is also useful to define the **average force** over a collision:

$$
\vec{F}_{\text{avg}} = \frac{\vec{J}}{\Delta t} = \frac{\Delta \vec{p}}{\Delta t}.
$$

The average force is the constant force that would deliver the same impulse over the same time. This is why a longer contact time (a "follow-through," an airbag, bent knees on landing) reduces the peak force for a fixed change in momentum.

<div class="theorem-box">

**Example.** A $$0.50\ \text{kg}$$ ball moving at $$4.0\ \text{m/s}$$ to the right strikes a wall. The wall pushes back with a force that rises linearly from $$0$$ to a peak of $$200\ \text{N}$$ over $$0.010\ \text{s}$$, then falls linearly back to $$0$$ over the next $$0.010\ \text{s}$$. Find the ball's velocity after contact and the average force.

The impulse is the area under the $$F$$-$$t$$ graph, which is a triangle of base $$0.020\ \text{s}$$ and height $$200\ \text{N}$$:

$$
J = \tfrac{1}{2}(0.020)(200) = 2.0\ \text{N}\cdot\text{s}.
$$

Take rightward as positive. The wall pushes left, so the impulse on the ball is $$J = -2.0\ \text{N}\cdot\text{s}$$. Using $$J=\Delta p = m(v_f - v_i)$$,

$$
v_f = v_i + \frac{J}{m} = 4.0 + \frac{-2.0}{0.50} = 4.0 - 4.0 = 0\ \text{m/s}.
$$

The ball is brought exactly to rest. The average force is

$$
F_{\text{avg}} = \frac{J}{\Delta t} = \frac{-2.0}{0.020} = -100\ \text{N},
$$

half the peak force, as expected for a triangular pulse. The instantaneous force reached $$200\ \text{N}$$, but the *average* force is what determines the net momentum change.

</div>

<div class="theorem-box">

**Example.** A stream of identical balls, each of mass $$m = 0.10\ \text{kg}$$, flies horizontally at $$v = 20\ \text{m/s}$$ and strikes a wall. The balls hit at a rate of $$n = 5$$ balls per second and rebound straight back with the same speed (elastic bounce). Find the average force the wall exerts on the stream, and the force the stream exerts on the wall.

Each ball reverses its velocity, so the change in momentum of one ball is

$$
\Delta p_{\text{one}} = m(-v) - m(v) = -2mv = -2(0.10)(20) = -4.0\ \text{kg}\cdot\text{m/s}.
$$

In one second, $$n = 5$$ balls bounce, so the total momentum change delivered by the wall per second is

$$
\frac{\Delta p_{\text{total}}}{\Delta t} = n\,\Delta p_{\text{one}} = 5(-4.0) = -20\ \text{N}.
$$

The wall pushes back on the stream with an average force of $$20\ \text{N}$$ opposing the incoming motion. By Newton's third law, the stream pushes on the wall with $$20\ \text{N}$$ in the direction of incoming travel. Note that if the balls instead *stuck* to the wall (no rebound), each $$\Delta p_{\text{one}}$$ would be only $$-mv$$, giving half the force: rebounding transfers twice the momentum of sticking. This same reasoning, written as $$F = \dot{m}\,v$$ for a continuous mass flow rate, handles water from a hose or gas from a thruster.

</div>

---

## Conservation of Momentum

For a system of particles,

$$
\frac{d\vec{P}_{\text{sys}}}{dt} = \sum \vec{F}_{\text{ext}}.
$$

If the net external force on the system is zero, or if its impulse is negligible during the event,

$$
\vec{P}_{i} = \vec{P}_{f}.
$$

Internal forces cancel in pairs by Newton's third law, so they cannot change the total momentum of the system. They can, however, redistribute momentum among the objects inside the system.

<div class="theorem-box">

**Proof (Conservation of Momentum).** For a system of particles, the total momentum is

$$
\vec{P}_{\text{sys}}=\sum_i \vec{p}_i.
$$

Differentiate:

$$
\frac{d\vec{P}_{\text{sys}}}{dt}=\sum_i \frac{d\vec{p}_i}{dt}.
$$

For each particle, Newton's second law says

$$
\frac{d\vec{p}_i}{dt}=\vec{F}_{i,\text{net}}.
$$

The forces on all particles can be split into external forces and internal forces. Internal forces occur in equal-and-opposite pairs:

$$
\vec{F}_{i\text{ on }j}=-\vec{F}_{j\text{ on }i}.
$$

When summed over the whole system, those internal pairs cancel. Therefore

$$
\frac{d\vec{P}_{\text{sys}}}{dt}=\sum \vec{F}_{\text{ext}}.
$$

If $$\sum \vec{F}_{\text{ext}}=0$$, then $$d\vec{P}_{\text{sys}}/dt=0$$, so total momentum is constant:

$$
\vec{P}_i=\vec{P}_f.
$$

</div>

---

## Center of Mass

<img class="note-img note-img--w480" src="/assets/APs/AP%20Physics%20C%20Mech/linearmomentum/CoM.png" alt="center of mass of a system of particles and a continuous body placeholder" loading="lazy" decoding="async" />

For discrete particles,

$$
\vec{r}_{\text{cm}} = \frac{1}{M}\sum_i m_i\vec{r}_i,
$$

where

$$
M = \sum_i m_i.
$$

For a continuous body,

$$
\vec{r}_{\text{cm}} = \frac{1}{M}\int \vec{r}\,dm.
$$

The center of mass moves as if all external force acted on the total mass:

$$
\sum \vec{F}_{\text{ext}} = M\vec{a}_{\text{cm}}.
$$

The total momentum of a system is

$$
\vec{P}_{\text{sys}} = M\vec{v}_{\text{cm}}.
$$

<div class="theorem-box">

**Proof (Center-of-Mass Motion).** Start from the discrete center-of-mass definition:

$$
\vec{r}_{\text{cm}}=\frac{1}{M}\sum_i m_i\vec{r}_i.
$$

Differentiate once:

$$
\vec{v}_{\text{cm}}=\frac{1}{M}\sum_i m_i\vec{v}_i.
$$

Multiplying both sides by $$M$$ gives

$$
M\vec{v}_{\text{cm}}=\sum_i m_i\vec{v}_i=\vec{P}_{\text{sys}}.
$$

Differentiate again:

$$
M\vec{a}_{\text{cm}}=\frac{d\vec{P}_{\text{sys}}}{dt}.
$$

Using the momentum result above,

$$
\frac{d\vec{P}_{\text{sys}}}{dt}=\sum \vec{F}_{\text{ext}},
$$

so

$$
\sum \vec{F}_{\text{ext}}=M\vec{a}_{\text{cm}}.
$$

</div>

<div class="theorem-box">

**Example.** Find the center of mass of a uniform right-triangular plate with legs along the axes: vertices at $$(0,0)$$, $$(b,0)$$, and $$(0,h)$$.

Let the surface mass density be $$\sigma$$ (mass per area), constant. The total mass is $$M = \sigma \cdot \tfrac{1}{2}bh$$. Slice the triangle into thin vertical strips of width $$dx$$ at position $$x$$. At that $$x$$, the hypotenuse runs from $$(0,h)$$ to $$(b,0)$$, so its height is

$$
y(x) = h\left(1 - \frac{x}{b}\right).
$$

The strip has area $$y(x)\,dx$$ and mass $$dm = \sigma\, y(x)\,dx$$. Then

$$
x_{\text{cm}} = \frac{1}{M}\int_0^b x\,dm = \frac{\sigma}{M}\int_0^b x\,h\left(1-\frac{x}{b}\right)dx.
$$

Evaluate the integral:

$$
\int_0^b \left(x - \frac{x^2}{b}\right)dx = \frac{b^2}{2} - \frac{b^2}{3} = \frac{b^2}{6}.
$$

So

$$
x_{\text{cm}} = \frac{\sigma h}{M}\cdot\frac{b^2}{6} = \frac{\sigma h b^2/6}{\sigma bh/2} = \frac{b}{3}.
$$

By symmetry of the argument (slicing horizontally), $$y_{\text{cm}} = h/3$$. The centroid of a uniform triangle sits one-third of the way in from each leg, at $$(b/3,\,h/3)$$.

</div>

<div class="theorem-box">

**Example.** A thin rod of length $$L$$ lies along the $$x$$-axis from $$x=0$$ to $$x=L$$. Its linear mass density increases as $$\lambda(x) = \lambda_0\,\dfrac{x}{L}$$. Find its center of mass.

The mass element is $$dm = \lambda(x)\,dx = \lambda_0\dfrac{x}{L}\,dx$$. The total mass is

$$
M = \int_0^L \lambda_0\frac{x}{L}\,dx = \frac{\lambda_0}{L}\cdot\frac{L^2}{2} = \frac{\lambda_0 L}{2}.
$$

The center of mass is

$$
x_{\text{cm}} = \frac{1}{M}\int_0^L x\,dm = \frac{1}{M}\int_0^L x\cdot\lambda_0\frac{x}{L}\,dx = \frac{\lambda_0}{ML}\int_0^L x^2\,dx = \frac{\lambda_0}{ML}\cdot\frac{L^3}{3}.
$$

Substituting $$M = \lambda_0 L/2$$,

$$
x_{\text{cm}} = \frac{\lambda_0 L^3/3}{(\lambda_0 L/2)L} = \frac{2L}{3}.
$$

The center of mass sits at $$2L/3$$, shifted toward the heavy end, as expected. For a uniform rod the answer would have been $$L/2$$.

</div>

<div class="theorem-box">

**Example.** A firework of mass $$M$$ is launched and, at the top of its arc, is momentarily moving horizontally at $$v_0$$ when it explodes into two equal pieces. One piece is observed to fall straight down with zero horizontal velocity immediately after the burst. Where does the other piece go, and where is the center of mass?

The explosion is internal, and over the brief burst gravity's impulse is negligible, so horizontal momentum is conserved across the explosion. Before:

$$
P_x = Mv_0.
$$

After, piece 1 (mass $$M/2$$) has horizontal velocity $$0$$, so piece 2 (mass $$M/2$$) must carry all the horizontal momentum:

$$
Mv_0 = \frac{M}{2}(0) + \frac{M}{2}v_{2x} \;\Rightarrow\; v_{2x} = 2v_0.
$$

The second piece moves forward at twice the original speed. Crucially, the **center of mass continues on the original parabolic trajectory** as if no explosion happened, because the only external force is still gravity. The pieces fan out around that path; their CM lands exactly where the unexploded firework would have landed.

</div>

---

## Collisions

All collisions conserve momentum for an isolated system. Kinetic energy may or may not be conserved.

An **elastic collision** conserves both momentum and kinetic energy:

$$
\vec{P}_i = \vec{P}_f, \qquad K_i = K_f.
$$

An **inelastic collision** conserves momentum but not kinetic energy. Some mechanical energy becomes internal energy, deformation, heat, or sound.

A **perfectly inelastic collision** is the special case where objects stick together after impact:

$$
m_1\vec{v}_{1i}+m_2\vec{v}_{2i} = (m_1+m_2)\vec{v}_f.
$$

The kinetic energy lost in a perfectly inelastic collision can be computed directly:

$$
\Delta K = K_f - K_i = \frac{1}{2}(m_1+m_2)v_f^2 - \left(\frac{1}{2}m_1 v_{1i}^2 + \frac{1}{2}m_2 v_{2i}^2\right).
$$

This loss is maximal among all collisions with the same initial momenta, because sticking together leaves the objects with the least possible kinetic energy consistent with conserved momentum (the energy of the center-of-mass motion alone).

<div class="theorem-box">

**Example (perfectly inelastic collision).** A $$1500\ \text{kg}$$ car moving east at $$20\ \text{m/s}$$ rear-ends a $$1000\ \text{kg}$$ car moving east at $$8.0\ \text{m/s}$$. They lock bumpers. Find their common velocity and the kinetic energy lost.

Momentum conservation in one dimension:

$$
m_1 v_{1i} + m_2 v_{2i} = (m_1+m_2)v_f,
$$

$$
v_f = \frac{(1500)(20)+(1000)(8.0)}{1500+1000} = \frac{30000 + 8000}{2500} = 15.2\ \text{m/s}.
$$

Kinetic energy before:

$$
K_i = \tfrac{1}{2}(1500)(20)^2 + \tfrac{1}{2}(1000)(8.0)^2 = 300000 + 32000 = 3.32\times10^5\ \text{J}.
$$

Kinetic energy after:

$$
K_f = \tfrac{1}{2}(2500)(15.2)^2 = 2.89\times10^5\ \text{J}.
$$

So $$\Delta K = K_f - K_i = -4.3\times10^4\ \text{J}$$ is lost to deformation, heat, and sound, even though momentum is exactly conserved.

</div>

---

## The Ballistic Pendulum

The **ballistic pendulum** is the classic problem that requires *both* momentum and energy, applied to *different stages*. A bullet embeds in a hanging block; the block then swings up. The trick is recognizing that the embedding (a perfectly inelastic collision) conserves momentum but loses energy, while the subsequent swing (no friction, no collision) conserves mechanical energy.

<div class="theorem-box">

**Example.** A bullet of mass $$m$$ moving at speed $$v$$ embeds in a block of mass $$M$$ hanging at rest from a string. The block-plus-bullet then rises to a maximum height $$h$$. Find $$v$$ in terms of $$m$$, $$M$$, $$h$$, and $$g$$.

**Stage 1 — collision (momentum conserved, energy not).** The embedding is fast and perfectly inelastic. During it, momentum is conserved:

$$
mv = (m+M)V,
$$

where $$V$$ is the speed of the combined mass just after impact. Solving,

$$
V = \frac{m}{m+M}\,v.
$$

Do **not** set the bullet's kinetic energy equal to anything here; most of it is lost to embedding.

**Stage 2 — swing (energy conserved, momentum not).** After impact, the combined mass rises. The string tension does no work, so mechanical energy is conserved during the swing (momentum is *not* conserved here, because gravity and tension are external):

$$
\tfrac{1}{2}(m+M)V^2 = (m+M)gh.
$$

Solving for $$V$$,

$$
V = \sqrt{2gh}.
$$

**Combine.** Set the two expressions for $$V$$ equal:

$$
\frac{m}{m+M}\,v = \sqrt{2gh},
$$

so

$$
v = \frac{m+M}{m}\sqrt{2gh}.
$$

The two stages must be analyzed separately with the correct conserved quantity for each. Mixing them (e.g. equating the bullet's initial kinetic energy to the final potential energy) gives a wrong, larger answer because it ignores the energy lost in embedding.

</div>

---

## One-Dimensional Elastic Collision Relations

For a one-dimensional elastic collision between masses $$m_1$$ and $$m_2$$, conservation of momentum and kinetic energy imply that the relative speed reverses:

$$
v_{1i}-v_{2i}=-(v_{1f}-v_{2f}).
$$

Solving with momentum conservation gives

$$
v_{1f}=\frac{m_1-m_2}{m_1+m_2}v_{1i}+\frac{2m_2}{m_1+m_2}v_{2i},
$$

$$
v_{2f}=\frac{2m_1}{m_1+m_2}v_{1i}+\frac{m_2-m_1}{m_1+m_2}v_{2i}.
$$

These formulas are useful, but the underlying conservation laws are usually safer.

<div class="theorem-box">

**Proof (Relative Speed Reversal in a 1D Elastic Collision).** Momentum conservation gives

$$
m_1v_{1i}+m_2v_{2i}=m_1v_{1f}+m_2v_{2f}.
$$

Rearrange:

$$
m_1(v_{1i}-v_{1f})=m_2(v_{2f}-v_{2i}).
$$

Kinetic energy conservation gives

$$
\frac{1}{2}m_1v_{1i}^2+\frac{1}{2}m_2v_{2i}^2
=
\frac{1}{2}m_1v_{1f}^2+\frac{1}{2}m_2v_{2f}^2.
$$

Rearrange and factor:

$$
m_1(v_{1i}^2-v_{1f}^2)=m_2(v_{2f}^2-v_{2i}^2),
$$

$$
m_1(v_{1i}-v_{1f})(v_{1i}+v_{1f})
=
m_2(v_{2f}-v_{2i})(v_{2f}+v_{2i}).
$$

Divide this equation by the rearranged momentum equation:

$$
v_{1i}+v_{1f}=v_{2f}+v_{2i}.
$$

Move terms:

$$
v_{1i}-v_{2i}=-(v_{1f}-v_{2f}).
$$

So the relative velocity after the collision is the negative of the relative velocity before the collision.

</div>

<div class="theorem-box">

**Example.** A $$2.0\ \text{kg}$$ cart moving right at $$3.0\ \text{m/s}$$ elastically collides head-on with a $$1.0\ \text{kg}$$ cart at rest. Find both final velocities.

Use the relation formulas with $$m_1 = 2.0$$, $$m_2 = 1.0$$, $$v_{1i} = 3.0$$, $$v_{2i} = 0$$:

$$
v_{1f} = \frac{m_1-m_2}{m_1+m_2}v_{1i} = \frac{2.0-1.0}{3.0}(3.0) = 1.0\ \text{m/s},
$$

$$
v_{2f} = \frac{2m_1}{m_1+m_2}v_{1i} = \frac{2(2.0)}{3.0}(3.0) = 4.0\ \text{m/s}.
$$

Check momentum: $$p_i = (2.0)(3.0) = 6.0$$; $$p_f = (2.0)(1.0)+(1.0)(4.0) = 6.0\ \text{kg}\cdot\text{m/s}$$. Check kinetic energy: $$K_i = \tfrac{1}{2}(2.0)(9.0) = 9.0\ \text{J}$$; $$K_f = \tfrac{1}{2}(2.0)(1.0) + \tfrac{1}{2}(1.0)(16) = 1.0 + 8.0 = 9.0\ \text{J}$$. Both are conserved, confirming the result. The lighter target rebounds faster than the incoming cart, which keeps moving forward but slower.

</div>

<div class="theorem-box">

**Proof (equal masses exchange velocities in 1D elastic collision).** Set $$m_1 = m_2 = m$$ in the elastic-collision relation formulas. The coefficients become

$$
\frac{m_1-m_2}{m_1+m_2} = 0, \qquad \frac{2m_2}{m_1+m_2} = 1, \qquad \frac{2m_1}{m_1+m_2} = 1, \qquad \frac{m_2-m_1}{m_1+m_2} = 0.
$$

Therefore

$$
v_{1f} = v_{2i}, \qquad v_{2f} = v_{1i}.
$$

The two masses simply swap velocities. This is why a head-on shot in billiards (equal-mass balls) stops the cue ball dead while the struck ball leaves at the cue ball's speed. Intuitively, in the center-of-mass frame the equal masses approach with equal and opposite velocities; an elastic collision reverses each, and transforming back to the lab frame produces the swap.

</div>

---

## The Zero-Momentum (Center-of-Mass) Frame

For some problems it helps to work in the **center-of-mass frame**, the reference frame moving with $$\vec{v}_{\text{cm}}$$. In this frame the total momentum is zero by construction:

$$
\vec{P}'_{\text{sys}} = M(\vec{v}_{\text{cm}} - \vec{v}_{\text{cm}}) = 0.
$$

Since the total momentum is zero, the objects always have equal and opposite momenta in this frame, both before and after a collision. An elastic collision in the CM frame simply reverses each object's velocity; an inelastic collision brings them to rest in this frame, which makes the maximum-energy-loss statement obvious. The lab-frame results then follow by adding $$\vec{v}_{\text{cm}}$$ back.

---

## A Brief Note on Variable Mass: the Rocket Equation

When mass is added to or expelled from a system, the constant-mass form $$\vec{F}=m\vec{a}$$ is no longer the whole story; the momentum carried by the expelled mass matters. AP Physics C only needs the basic idea, but a clean derivation is short.

<div class="theorem-box">

**Proof (rocket equation, force-free case).** A rocket of instantaneous mass $$m$$ moves at speed $$v$$ and ejects fuel at speed $$u$$ *relative to the rocket*, opposite the direction of motion. In a short time $$dt$$ the rocket expels mass $$-dm > 0$$ (since $$m$$ decreases) and gains speed $$dv$$.

Conserve momentum of the whole system (rocket + expelled bit) with no external force. Before: momentum $$mv$$. After: the rocket has $$(m+dm)(v+dv)$$, and the ejected mass $$(-dm)$$ moves at velocity $$v - u$$:

$$
mv = (m+dm)(v+dv) + (-dm)(v-u).
$$

Expand and drop the second-order term $$dm\,dv$$:

$$
mv = mv + m\,dv + v\,dm - v\,dm + u\,dm,
$$

$$
0 = m\,dv + u\,dm.
$$

So

$$
m\,dv = -u\,dm \quad\Rightarrow\quad dv = -u\,\frac{dm}{m}.
$$

Integrate from initial mass $$m_0$$, speed $$v_0$$ to final mass $$m_f$$, speed $$v_f$$:

$$
v_f - v_0 = -u\ln\frac{m_f}{m_0} = u\ln\frac{m_0}{m_f}.
$$

This is the **Tsiolkovsky rocket equation**. The change in speed depends only on the exhaust speed and the mass ratio, which is why staging (shedding empty mass) matters so much.

</div>

---

## Momentum in Two Dimensions

In two dimensions, conserve components separately:

$$
\sum p_{x,i} = \sum p_{x,f}, \qquad \sum p_{y,i} = \sum p_{y,f}.
$$

Angles enter through vector components. The momentum vector triangle is often more important than speed alone, because momentum depends on both mass and velocity. A useful sanity check: the total momentum vector before equals the total momentum vector after, so the "after" vectors must tip-to-tail close the same vector as the "before" vectors.

<div class="theorem-box">

**Proof (equal-mass 2D elastic collision: 90° separation).** A moving object of mass $$m$$ elastically strikes an identical mass $$m$$ at rest. Show that, unless the collision is head-on, the two objects move off at right angles.

Momentum conservation (the masses cancel):

$$
\vec{v}_{1i} = \vec{v}_{1f} + \vec{v}_{2f}.
$$

Kinetic energy conservation (factors of $$\tfrac{1}{2}m$$ cancel):

$$
v_{1i}^2 = v_{1f}^2 + v_{2f}^2.
$$

Take the dot product of the momentum equation with itself:

$$
v_{1i}^2 = \vec{v}_{1i}\cdot\vec{v}_{1i} = (\vec{v}_{1f}+\vec{v}_{2f})\cdot(\vec{v}_{1f}+\vec{v}_{2f}) = v_{1f}^2 + v_{2f}^2 + 2\,\vec{v}_{1f}\cdot\vec{v}_{2f}.
$$

Comparing with the energy equation forces

$$
2\,\vec{v}_{1f}\cdot\vec{v}_{2f} = 0.
$$

If both objects move ($$v_{1f},v_{2f}\neq 0$$), the dot product vanishing means the final velocities are perpendicular: the objects separate at $$90^\circ$$. This is the familiar billiards result for equal-mass balls; it fails if the masses differ or the collision is inelastic.

</div>

<div class="theorem-box">

**Example (2D collision, numeric).** A $$0.20\ \text{kg}$$ puck moving east at $$5.0\ \text{m/s}$$ strikes a stationary $$0.30\ \text{kg}$$ puck. After the collision the $$0.20\ \text{kg}$$ puck moves at $$3.0\ \text{m/s}$$ at $$37^\circ$$ north of east. Find the velocity (magnitude and direction) of the $$0.30\ \text{kg}$$ puck.

Conserve momentum in each direction. Initial momentum is entirely along $$x$$ (east): $$p_x = (0.20)(5.0) = 1.0\ \text{kg}\cdot\text{m/s}$$, $$p_y = 0$$.

The $$0.20\ \text{kg}$$ puck afterward has components

$$
p_{1fx} = (0.20)(3.0)\cos 37^\circ = (0.20)(3.0)(0.799) = 0.479,
$$

$$
p_{1fy} = (0.20)(3.0)\sin 37^\circ = (0.20)(3.0)(0.602) = 0.361.
$$

For the $$0.30\ \text{kg}$$ puck, conservation gives

$$
p_{2fx} = 1.0 - 0.479 = 0.521, \qquad p_{2fy} = 0 - 0.361 = -0.361.
$$

Its velocity components are $$v_{2fx} = 0.521/0.30 = 1.74\ \text{m/s}$$ and $$v_{2fy} = -0.361/0.30 = -1.20\ \text{m/s}$$. The speed is

$$
v_{2f} = \sqrt{1.74^2 + 1.20^2} = \sqrt{3.03 + 1.44} = 2.11\ \text{m/s},
$$

at an angle below the east axis of

$$
\theta = \tan^{-1}\!\left(\frac{1.20}{1.74}\right) = 34.6^\circ \text{ south of east}.
$$

The struck puck recoils to the opposite side, balancing the $$y$$-momentum that the first puck gained.

</div>

---

## Connections to Other Units

Momentum complements the energy methods of [work and energy](/notes/ap/ap-physics-c-mechanics/work/): momentum tracks force over *time*, energy tracks force over *distance*, and collision problems often need both. The rotational analog of linear momentum, angular momentum, is developed in [rotational momentum](/notes/ap/ap-physics-c-mechanics/rotationalmomentum/), where $$\vec{L}$$ plays the role of $$\vec{p}$$ and torque plays the role of force. The kinematics of the resulting motion is handled in [kinematics](/notes/ap/ap-physics-c-mechanics/kinematics/).

---

## Key equations

| Idea | Equation |
| --- | --- |
| Momentum | $$\vec{p} = m\vec{v}$$ |
| Newton's second law (general) | $$\vec{F}_{\text{net}} = d\vec{p}/dt$$ |
| Impulse | $$\vec{J} = \int \vec{F}\,dt = \Delta\vec{p}$$ |
| Average force | $$\vec{F}_{\text{avg}} = \Delta\vec{p}/\Delta t$$ |
| Conservation of momentum | $$\vec{P}_i = \vec{P}_f$$ (no external impulse) |
| Center of mass (discrete) | $$\vec{r}_{\text{cm}} = \tfrac{1}{M}\sum_i m_i\vec{r}_i$$ |
| Center of mass (continuous) | $$\vec{r}_{\text{cm}} = \tfrac{1}{M}\int \vec{r}\,dm$$ |
| System momentum | $$\vec{P}_{\text{sys}} = M\vec{v}_{\text{cm}}$$ |
| Perfectly inelastic collision | $$m_1\vec{v}_{1i} + m_2\vec{v}_{2i} = (m_1+m_2)\vec{v}_f$$ |
| 1D elastic, relative speed | $$v_{1i}-v_{2i} = -(v_{1f}-v_{2f})$$ |
| 1D elastic final velocities | $$v_{1f} = \tfrac{m_1-m_2}{m_1+m_2}v_{1i} + \tfrac{2m_2}{m_1+m_2}v_{2i}$$ |
| Kinetic energy from momentum | $$K = p^2/2m$$ |
| Rocket equation | $$\Delta v = u\ln(m_0/m_f)$$ |

## Practice

### FRQ

::::frq{id=ap-physics-c-mechanics-linearmomentum-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
