---
title: "Unit 4: Linear Momentum and Impulse"
sidebar:
  order: 4
---

---

:::variables
- $$\vec{p}$$ = linear momentum (Units: $$\text{kg}\cdot\text{m/s}$$)
- $$\vec{J}$$ = impulse (Units: $$\text{N}\cdot\text{s}$$)
- $$\vec{F}_{\text{net}}$$ = net external force
- $$M$$ = total mass of a system
- $$\vec{r}_{\text{cm}}$$ = center-of-mass position
- $$\vec{v}_{\text{cm}}$$ = center-of-mass velocity
:::

---

## Linear Momentum

The linear momentum of a particle is

$$
\vec{p} = m\vec{v}.
$$

Momentum is a vector, so the components must be conserved independently. Newton's second law can be written in its more general form as

$$
\vec{F}_{\text{net}} = \frac{d\vec{p}}{dt}.
$$

For constant mass, this reduces to $$\vec{F}_{\text{net}} = m\vec{a}$$. However, the momentum form is the more fundamental statement of Newton's second law (in fact, it was the original statement of the law!), and it is essential whenever mass is not constant, such as a rocket burning fuel or a rope piling onto the ground.

Intuitively, momentum measures how hard it is to stop something because of **both mass and velocity**. A slow truck and a fast baseball can both have large momentum, but for different reasons. Force changes momentum over time, which is why stopping the same object gently means spreading the same momentum change over a longer time.

<div class="theorem-box">

**Example.** A $$0.15\ \text{kg}$$ baseball moving at $$40\ \text{m/s}$$ and a $$1200\ \text{kg}$$ car moving at $$0.0050\ \text{m/s}$$ have the same speed? The same kinetic energy? The same momentum? Compare their momenta and kinetic energy.

The baseball's momentum is

$$
p_{\text{ball}}=mv=(0.15)(40)=6.0\ \text{kg}\cdot\text{m/s}.
$$

The car's momentum is

$$
p_{\text{car}}=(1200)(0.0050)=6.0\ \text{kg}\cdot\text{m/s}.
$$

They have the same momentum even though their speeds are wildly different. Momentum is not just "fastness"; it is mass times velocity. This is why collisions care so much about both the object's speed and how much matter is moving.

Their kinetic energies are very different:

$$
K_{\text{ball}}=\frac{1}{2}(0.15)(40)^2=120\ \text{J},
$$

while

$$
K_{\text{car}}=\frac{1}{2}(1200)(0.0050)^2=0.015\ \text{J}.
$$

So equal momentum does **not** mean equal kinetic energy. For the same momentum, the lighter object must move much faster, and because $$K=p^2/(2m)$$, it carries more kinetic energy.

</div>

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

On a force-time graph, impulse is the signed area under the curve. This is the time-domain analog of how work is the area under a force-position graph in [Unit 3](/notes/ap/ap-physics-c-mechanics/work/). During a collision, the peak force may be hard to model, but the impulse can often be found from the initial and final momenta, since $$\vec{J}=\Delta\vec{p}$$ does not care about the detailed shape of $$\vec{F}(t)$$.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[axis lines=left,width=8cm,height=5cm,xmin=0,xmax=6,ymin=0,ymax=5,xlabel={$t$},ylabel={$F$},xtick=\empty,ytick=\empty]
\addplot[fill=blue!18, draw=none, domain=0:5.5, samples=120] {0.35+3.7*exp(-0.55*(x-2.8)^2)} \closedcycle;
\addplot[blue,very thick,domain=0:5.5,samples=120] {0.35+3.7*exp(-0.55*(x-2.8)^2)};
\draw[dashed] (axis cs:5.5,0) -- (axis cs:5.5,0.55);
\node at (axis cs:2.8,1.4) {impulse};
\end{axis}
\end{tikzpicture}
```

It is also useful to define the **average force** over a collision:

$$
\vec{F}_{\text{avg}} = \frac{\vec{J}}{\Delta t} = \frac{\Delta \vec{p}}{\Delta t}.
$$

The average force is the constant force that would deliver the same impulse over the same time, even if the actual force varies.

:::tip
A longer contact time (a "follow-through," an airbag, bent knees on landing) reduces the peak force for a fixed change in momentum, thus effectively "softening" the impact.
:::

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

Often times, when dealing with complex shapes or systems of particles, we will often model them using the center of mass. The usefulness is that force, momentum, etc. all depend on the kinematics of the center of mass, so calculations are much easier there.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\fill[blue] (-2,0.8) circle (4pt) node[above left] {$m_1$};
\fill[blue] (0,-0.6) circle (6pt) node[below=7pt] {$m_2$};
\fill[blue] (2,0.5) circle (3pt) node[above right] {$m_3$};
\fill[red] (0.15,0.05) circle (3pt) node[below right] {$\vec r_{\text{cm}}$};
\draw[dashed,gray] (-2,0.8)--(0.15,0.05)--(0,-0.6);
\draw[dashed,gray] (2,0.5)--(0.15,0.05);
\draw[thick, rounded corners] (3,-1) .. controls (4,-1.8) and (5,1.1) .. (6,0.7) .. controls (5.2,2) and (3.3,1.5) .. (3,-1);
\fill[red] (4.6,0.4) circle (3pt) node[above left] {CoM};
\end{tikzpicture}
```

For discrete particles, the position $$r$$ (in whatever coordinate direction you define $$r$$ to be in) for an object's center of mass (for one coordinate, e.g. x-coordinate or y-coordinate) is equal to 

$$
\vec{r}_{\text{cm}} = \frac{1}{M}\sum_i m_i\vec{r}_i,
$$

where

$$
M = \sum_i m_i.
$$

The proof for the formula uses topics covered later on, so will not be covered here. For a continuous body, 

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

**Example.** Find the center of mass of a uniform right-triangular plate with legs along the axes: vertices at $$(0,0)$$, $$(b,0)$$, and $$(0,h)$$. It may be helpful to define a surface mass density $$\sigma$$ (mass per area).

Since the plate is uniform, $$\sigma$$ is constant all throughout the plate. Thus, the total mass is $$M = \sigma \cdot \tfrac{1}{2}bh$$ (mass/area times area). Slice the triangle into thin vertical strips of width $$dx$$ at position $$x$$. At that $$x$$, the hypotenuse runs from $$(0,h)$$ to $$(b,0)$$, so its height is

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

### Elastic collisions

An **elastic collision** conserves both momentum and kinetic energy:

$$
\vec{P}_i = \vec{P}_f, \qquad K_i = K_f.
$$

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

The proof for the final velocities is left to the reader as an exercise.

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

:::strategy
1. Conserve momentum in one dimension.
2. Use the relative-speed reversal $$v_{1i}-v_{2i}=-(v_{1f}-v_{2f})$$ instead of expanding kinetic energy.
3. Solve the two linear equations.
:::

Useful shortcuts:

- Equal masses in 1D exchange velocities.
- If a light object elastically hits a much heavier stationary object (usually denoted by $$m << M$$), the light object rebounds with nearly the same speed.
- If a heavy object elastically hits a much lighter stationary object, the heavy object barely changes speed and the light object leaves at nearly twice the heavy object's speed.

<div class="theorem-box">

**Example.** A $$3.0\ \text{kg}$$ cart moving right at $$5.0\ \text{m/s}$$ elastically collides with a $$1.0\ \text{kg}$$ cart moving left at $$2.0\ \text{m/s}$$. Find both final velocities.

Use the 1D elastic formulas:

$$
v_{1f}=\frac{m_1-m_2}{m_1+m_2}v_{1i}+\frac{2m_2}{m_1+m_2}v_{2i},
$$

$$
v_{2f}=\frac{2m_1}{m_1+m_2}v_{1i}+\frac{m_2-m_1}{m_1+m_2}v_{2i}.
$$

With $$m_1=3.0$$, $$m_2=1.0$$, $$v_{1i}=5.0$$, and $$v_{2i}=-2.0$$,

$$
v_{1f}=\frac{2}{4}(5.0)+\frac{2}{4}(-2.0)=2.5-1.0=1.5\ \text{m/s},
$$

$$
v_{2f}=\frac{6}{4}(5.0)+\frac{-2}{4}(-2.0)=7.5+1.0=8.5\ \text{m/s}.
$$

The lighter cart shoots right quickly because it receives momentum and kinetic energy from the heavier incoming cart.

</div>

### Inelastic collisions

An **inelastic collision** is a collision that conserves momentum but not kinetic energy. Some mechanical energy becomes internal energy, deformation, heat, or sound. A **perfectly inelastic collision** is the special case where objects stick together after impact:

$$
m_1\vec{v}_{1i}+m_2\vec{v}_{2i} = (m_1+m_2)\vec{v}_f.
$$

The kinetic energy lost in a perfectly inelastic collision can be computed directly:

$$
\Delta K = K_f - K_i = \frac{1}{2}(m_1+m_2)v_f^2 - \left(\frac{1}{2}m_1 v_{1i}^2 + \frac{1}{2}m_2 v_{2i}^2\right).
$$

This loss is maximal among all collisions with the same initial momenta, because sticking together leaves the objects with the least possible kinetic energy consistent with conserved momentum (the energy of the center-of-mass motion alone).

For inelastic collisions, the most reliable shortcut is to solve for the center-of-mass velocity:

$$
\vec{v}_{\text{cm}}=\frac{\vec{P}_{\text{tot}}}{M_{\text{tot}}}.
$$

In a perfectly inelastic collision, the stuck-together object moves at exactly $$\vec{v}_{\text{cm}}$$. The kinetic energy after sticking is the kinetic energy of the center-of-mass motion; everything else has been converted into internal energy.

<div class="theorem-box">

**Example.** A $$0.20\ \text{kg}$$ puck moving east at $$6.0\ \text{m/s}$$ sticks to a $$0.30\ \text{kg}$$ puck moving north at $$4.0\ \text{m/s}$$. Find the final velocity of the stuck pair and the kinetic energy lost.

Conserve momentum in components. The total mass is $$0.50\ \text{kg}$$. Initial momentum components:

$$
P_x=(0.20)(6.0)=1.2\ \text{kg}\cdot\text{m/s},
$$

$$
P_y=(0.30)(4.0)=1.2\ \text{kg}\cdot\text{m/s}.
$$

Thus the final velocity components are

$$
v_{fx}=\frac{1.2}{0.50}=2.4\ \text{m/s},\qquad
v_{fy}=\frac{1.2}{0.50}=2.4\ \text{m/s}.
$$

The stuck pair moves northeast with speed

$$
v_f=\sqrt{2.4^2+2.4^2}=3.4\ \text{m/s}.
$$

Initial kinetic energy:

$$
K_i=\tfrac12(0.20)(6.0)^2+\tfrac12(0.30)(4.0)^2=3.6+2.4=6.0\ \text{J}.
$$

Final kinetic energy:

$$
K_f=\tfrac12(0.50)(3.4)^2\approx2.9\ \text{J}.
$$

So about $$3.1\ \text{J}$$ is lost to deformation, heat, and sound.

</div>

### The Ballistic Pendulum

The **ballistic pendulum** is the classic problem that requires *both* momentum and energy, applied to *different stages*. The most standard example involves a bullet embedding itself in a hanging block which causes the block to swing up.

:::strategy
The trick is recognizing that the embedding (a perfectly inelastic collision) conserves momentum but loses energy, while the subsequent swing (no friction, no collision) conserves mechanical energy. Analyze each stage with the correct conserved quantity, then combine.
:::

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

## Momentum and Collisions in Two Dimensions

In two dimensions, conserve components separately:

$$
\sum p_{x,i} = \sum p_{x,f}, \qquad \sum p_{y,i} = \sum p_{y,f}.
$$

Angles enter through vector components. The momentum vector triangle is often more important than speed alone, because momentum depends on both mass and velocity. A useful sanity check: the total momentum vector before equals the total momentum vector after, so the "after" vectors must tip-to-tail close the same vector as the "before" vectors.

A very useful formula when dealing with 2D elastic collisions is the 90° separation rule, where unless the collision is head-on, the two objects move off at right angles.

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

If both objects move ($$v_{1f},v_{2f}\neq 0$$), the dot product vanishing means the final velocities are perpendicular: the objects separate at $$90^\circ$$. This is the familiar billiards result for equal-mass balls; it fails if the masses differ or the collision is inelastic. Treat it as the two-dimensional cousin of the equal-mass velocity-exchange rule from elastic collisions.

</div>

<div class="theorem-box">

**Example.** A $$0.20\ \text{kg}$$ puck moving east at $$5.0\ \text{m/s}$$ strikes a stationary $$0.30\ \text{kg}$$ puck. After the collision the $$0.20\ \text{kg}$$ puck moves at $$3.0\ \text{m/s}$$ at $$37^\circ$$ north of east. Find the velocity (magnitude and direction) of the $$0.30\ \text{kg}$$ puck.

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

<div class="theorem-box">

**Example (2025 F=ma).** Three identical smooth disks are arranged so one moving disk with speed $$v$$ collides elastically with two initially stationary disks one at a time because of a slight misalignment. Each collision occurs along a line of centers making $$30^\circ$$ with the incoming disk's direction at that collision. Find the final speed of the originally moving disk after the two sequential collisions.

In an elastic collision between identical smooth disks, the component of the moving disk's velocity along the line of centers is transferred to the struck disk, while the perpendicular component remains with the originally moving disk.

After the first collision, the originally moving disk keeps the component perpendicular to the first line of centers:

$$
v_1=v\sin 30^\circ=\frac{v}{2}.
$$

Its new direction is such that, for the second collision, its velocity again has a component perpendicular to the next line of centers equal to $$v_1\sin 30^\circ$$. Therefore the final speed of the original disk is

$$
v_f=v_1\sin 30^\circ=\frac{v}{2}\cdot\frac{1}{2}=\frac{v}{4}.
$$

The important idea is that a smooth elastic disk collision only changes the line-of-centers component; the perpendicular component passes through unchanged.

</div>

---

## The Zero-Momentum (Center-of-Mass) Frame

For some problems it helps to work in the **center-of-mass frame**, the reference frame moving with $$\vec{v}_{\text{cm}}$$. In this frame the total momentum is zero by construction:

$$
\vec{P}'_{\text{sys}} = M(\vec{v}_{\text{cm}} - \vec{v}_{\text{cm}}) = 0.
$$

Since the total momentum is zero, the objects always have equal and opposite momenta in this frame, both before and after a collision. An elastic collision in the CM frame simply reverses each object's velocity; an inelastic collision brings them to rest in this frame, which makes the maximum-energy-loss statement obvious. The lab-frame (the stationary frame) results then follow by adding $$\vec{v}_{\text{cm}}$$ back.

:::strategy
1. Compute $$v_{\text{cm}}$$.
2. Subtract it from every velocity to enter the CM frame.
3. Apply the collision rule there.
4. Add $$v_{\text{cm}}$$ back to return to the lab frame.
:::

<div class="theorem-box">

**Example.** A $$3.0\ \text{kg}$$ cart moving at $$5.0\ \text{m/s}$$ hits a $$1.0\ \text{kg}$$ cart moving at $$-2.0\ \text{m/s}$$ elastically. Solve using the center-of-mass frame.

The center-of-mass velocity is

$$
v_{\text{cm}}=\frac{(3.0)(5.0)+(1.0)(-2.0)}{4.0}=\frac{13}{4}=3.25\ \text{m/s}.
$$

In the CM frame,

$$
v'_{1i}=5.0-3.25=1.75\ \text{m/s},
$$

$$
v'_{2i}=-2.0-3.25=-5.25\ \text{m/s}.
$$

For a 1D elastic collision in the CM frame, velocities reverse:

$$
v'_{1f}=-1.75\ \text{m/s},\qquad v'_{2f}=5.25\ \text{m/s}.
$$

Add $$v_{\text{cm}}$$ back:

$$
v_{1f}= -1.75+3.25=1.5\ \text{m/s},
$$

$$
v_{2f}=5.25+3.25=8.5\ \text{m/s}.
$$

This matches the formula result, but the CM-frame view makes the "reverse in elastic collisions" idea visible.

</div>

---

:::equations

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
| 1D elastic, relative speed | $$v_{1i}-v_{2i} = -(v_{1f}-v_{2f})$$ |
| 1D elastic final velocities | $$v_{1f} = \tfrac{m_1-m_2}{m_1+m_2}v_{1i} + \tfrac{2m_2}{m_1+m_2}v_{2i}$$ |
| Perfectly inelastic collision | $$m_1\vec{v}_{1i} + m_2\vec{v}_{2i} = (m_1+m_2)\vec{v}_f$$ |

:::

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
