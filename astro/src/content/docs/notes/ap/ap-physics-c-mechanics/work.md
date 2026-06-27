---
title: "Work, Energy, and Power"
sidebar:
  order: 3
---

# Work, Energy, and Power

---

:::variables
- $$W$$ = work (Units: joules, $$\text{J}$$)
- $$K$$ = kinetic energy (Units: $$\text{J}$$)
- $$U$$ = potential energy (Units: $$\text{J}$$)
- $$E$$ = total mechanical energy (Units: $$\text{J}$$)
- $$P$$ = power (Units: watts, $$\text{W} = \text{J/s}$$)
- $$\vec{F}$$ = force
- $$\vec{r}$$ = position vector
- $$x$$ = one-dimensional position or displacement
- $$k$$ = spring constant
:::

---

## Work

**Work** measures energy transferred by a force acting through a displacement. For a constant force,

$$
W = \vec{F}\cdot \Delta \vec{r} = F\Delta r\cos\theta.
$$

Only the component of force parallel to displacement does work. A perpendicular force can change direction without changing speed, so it does no work at that instant.

For a variable force, use the line integral (just the integral over the path of an object)

$$
W = \int_C \vec{F}\cdot d\vec{r}.
$$

In one dimension this becomes

$$
W = \int_{x_i}^{x_f} F_x(x)\, dx,
$$

the signed area under the force-position graph.


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[axis lines=left,width=8cm,height=5cm,xmin=0,xmax=6,ymin=0,ymax=5,xlabel={$x$},ylabel={$F$},xtick=\empty,ytick=\empty]
\addplot[fill=blue!20, draw=none] coordinates {(1,0) (1,2) (3,4) (5,1.5) (5,0)} -- cycle;
\addplot[blue,very thick] coordinates {(1,2) (3,4) (5,1.5)};
\node at (axis cs:3,1.2) {area = work};
\end{axis}
\end{tikzpicture}
```


### The geometry of the dot product

Since $$W = \vec{F}\cdot\Delta\vec{r} = F\,\Delta r\cos\theta$$, the **sign of the work** is set entirely by the angle $$\theta$$ between the force and the displacement:


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[->, very thick, blue] (0,0) -- (4,0) node[right] {$\Delta x$};
\draw[->, very thick, red] (0,0) -- (2.7,1.8) node[above] {$\vec F$};
\draw[dashed, red] (2.7,1.8) -- (2.7,0) node[below] {$F\cos\theta$};
\draw (0.9,0) arc[start angle=0,end angle=34,radius=0.9] node[midway,right] {$\theta$};
\end{tikzpicture}
```


- **Positive work** ($$0\le\theta<90^\circ$$): the force has a component along the motion and speeds the object up (it transfers energy *into* the object). A horizontal push on a sliding box does positive work.
- **Negative work** ($$90^\circ<\theta\le180^\circ$$): the force opposes the motion and slows the object (it removes energy). Kinetic friction on a sliding box does negative work.
- **Zero work** ($$\theta=90^\circ$$): a force perpendicular to the velocity does no work. The normal force on a block sliding along a floor, the tension on a ball in uniform circular motion, and the magnetic force on a charge all do zero work even though they are nonzero forces.

This is why a centripetal force can bend a path without changing speed: it is always perpendicular to $$\vec{v}$$, so it does no work.

<div class="theorem-box">

**Example.** A force directed along the $$x$$-axis varies with position as follows: it is constant at $$F=20\ \text{N}$$ from $$x=0$$ to $$x=3\ \text{m}$$, then ramps linearly down to $$0\ \text{N}$$ at $$x=5\ \text{m}$$. Find the work done from $$x=0$$ to $$x=5\ \text{m}$$.

The work is the area under the graph. Split it into a rectangle and a triangle:

$$
W = \underbrace{(20\ \text{N})(3\ \text{m})}_{\text{rectangle}} + \underbrace{\tfrac{1}{2}(2\ \text{m})(20\ \text{N})}_{\text{triangle}}
= 60\ \text{J} + 20\ \text{J} = 80\ \text{J}.
$$

If the force had pointed in the $$-x$$ direction over some interval, that area would count as negative. The graph method and the integral $$\int F_x\,dx$$ are the same calculation; the graph just makes the geometry visible.

</div>

<div class="theorem-box">

**Example.** A position-dependent force $$F(x) = \alpha x^2$$ acts along the $$x$$-axis, with $$\alpha = 6\ \text{N/m}^2$$. Find the work it does on a particle moving from $$x_i = 1\ \text{m}$$ to $$x_f = 3\ \text{m}$$.

Use $$W = \int_{x_i}^{x_f} F(x)\,dx$$:

$$
W = \int_{1}^{3} \alpha x^2\,dx = \alpha\left[\frac{x^3}{3}\right]_{1}^{3} = \frac{\alpha}{3}\left(3^3 - 1^3\right) = \frac{6}{3}(27-1) = 2(26) = 52\ \text{J}.
$$

Whenever the force is not constant, you cannot use $$W = F\,d$$; you must integrate. The constant-force formula is just the special case where $$F$$ comes out of the integral.

</div>

---

## Kinetic Energy and the Work-Energy Theorem

Translational kinetic energy is defined as

$$
K = \frac{1}{2}mv^2.
$$

<div class="theorem-box">

**Theorem (Work-Energy Theorem).** The net work done on a particle equals the change in its kinetic energy, $$W_{\text{net}} = \Delta K$$.

</div>

<div class="theorem-box">

**Proof (Work-Energy Theorem).** Start with Newton's second law and the definition of work:

$$
W_{\text{net}} = \int \vec{F}_{\text{net}}\cdot d\vec{r}
= \int m\frac{d\vec{v}}{dt}\cdot \vec{v}\,dt
= \int m\vec{v}\cdot d\vec{v}
= \frac{1}{2}mv_f^2-\frac{1}{2}mv_i^2.
$$

The key substitution is $$d\vec{r}=\vec{v}\,dt$$. Because $$\vec{v}\cdot d\vec{v}=\frac{1}{2}d(v^2)$$, the integral turns into the change in $$\frac{1}{2}mv^2$$. Therefore

$$
W_{\text{net}}=\Delta K.
$$

</div>

This derivation is worth knowing because it explains why energy methods remain valid even when force varies with position.

<div class="theorem-box">

**Example.** A block of mass $$m = 2.0\ \text{kg}$$ slides across a level floor with initial speed $$v_0 = 6.0\ \text{m/s}$$. The coefficient of kinetic friction is $$\mu_k = 0.30$$. How far does it slide before stopping? Use $$g = 9.8\ \text{m/s}^2$$.

The only horizontal force is kinetic friction, $$f_k = \mu_k F_N = \mu_k mg$$, directed opposite the motion. Over a distance $$d$$ it does negative work

$$
W_{\text{net}} = -f_k d = -\mu_k mg\, d.
$$

By the work-energy theorem, $$W_{\text{net}} = \Delta K = 0 - \tfrac{1}{2}mv_0^2$$:

$$
-\mu_k mg\, d = -\tfrac{1}{2}mv_0^2.
$$

The mass cancels, so the stopping distance does not depend on $$m$$:

$$
d = \frac{v_0^2}{2\mu_k g} = \frac{(6.0)^2}{2(0.30)(9.8)} = \frac{36}{5.88} \approx 6.1\ \text{m}.
$$

Notice that the stopping distance scales with $$v_0^2$$: doubling the speed quadruples the distance.

</div>

---

## Conservative Forces and Potential Energy

A force is **conservative** if its work depends only on the initial and final positions, not on the path taken. Equivalently,

$$
\oint \vec{F}\cdot d\vec{r} = 0
$$

around any closed path (You don't need to know the exact integral definition, just a conceptual one). For a conservative force, define potential energy $$U$$ by

$$
W_{\text{cons}} = -\Delta U.
$$

In one dimension,

$$
F_x = -\frac{dU}{dx}.
$$

In three dimensions,

$$
\vec{F} = -\nabla U.
$$

The $$\nabla$$ symbol is just an extension of a derivative to all three dimensions. Potential energy is not an absolute property; it requires a reference level, which is usually set at some point at infinity or zero. Only changes in potential energy affect mechanics.

---

## Gravitational Potential Energy

Near Earth's surface, where $$g$$ is approximately constant,

$$
U_g = mgy
$$

if $$U_g = 0$$ is chosen at $$y=0$$. The change in gravitational potential energy is

$$
\Delta U_g = mg\Delta y.
$$

For universal gravitation, the natural zero is at infinity:

$$
U_g(r) = -\frac{GMm}{r}.
$$

The negative sign means a bound mass has less energy than it would have infinitely far away.

<div class="theorem-box">

**Proof (Near-Earth and Universal Gravitational Potential Energy).** Near Earth's surface, the gravitational force is approximately constant:

$$
\vec{F}_g=-mg\hat{y}.
$$

Since $$W_g=-\Delta U_g$$,

$$
\Delta U_g=-W_g=-\int_{y_i}^{y_f}(-mg)\,dy=mg(y_f-y_i).
$$

So, choosing $$U_g=0$$ at $$y=0$$,

$$
U_g=mgy.
$$

For universal gravitation,

$$
F_r=-\frac{GMm}{r^2}.
$$

Using $$F_r=-dU/dr$$,

$$
\frac{dU}{dr}=\frac{GMm}{r^2}.
$$

Integrate:

$$
U(r)=-\frac{GMm}{r}+C.
$$

Choosing $$U(\infty)=0$$ forces $$C=0$$, so

$$
U_g(r)=-\frac{GMm}{r}.
$$

</div>

The fact that we could even *define* a potential energy depends on gravity being conservative: the work it does between two points does not depend on the route taken.

<div class="theorem-box">

**Proof (gravity near Earth is path-independent).** Near Earth's surface $$\vec{F}_g = -mg\,\hat{y}$$, a constant vector. For *any* path from point $$A$$ to point $$B$$,

$$
W_g = \int_A^B \vec{F}_g\cdot d\vec{r} = \int_A^B (-mg\,\hat{y})\cdot(dx\,\hat{x} + dy\,\hat{y}) = -mg\int_{y_A}^{y_B} dy = -mg(y_B - y_A).
$$

The $$x$$-displacement drops out because $$\hat{y}\cdot\hat{x}=0$$, so only the change in height matters. A box carried straight up, or up a long ramp, or along a wiggling staircase to the same final height, all involve the same gravitational work. Around any closed loop ($$y_B = y_A$$), $$W_g = 0$$, which is the defining property of a conservative force.

</div>

<div class="theorem-box">

**Example.** With what speed $$v_{\text{esc}}$$ must a projectile leave a planet's surface (mass $$M$$, radius $$R$$, no air) so that it just barely reaches infinity (aka escapes the gravitational pull of the planet)? Use $$U_g(r) = -GMm/r$$.

"Just barely reaches infinity" means the projectile arrives at $$r\to\infty$$ with zero speed. With only gravity acting, mechanical energy is conserved:

$$
\tfrac{1}{2}mv_{\text{esc}}^2 + \left(-\frac{GMm}{R}\right) = \underbrace{0}_{K_\infty} + \underbrace{0}_{U_\infty}.
$$

Solving for $$v_{\text{esc}}$$,

$$
\tfrac{1}{2}mv_{\text{esc}}^2 = \frac{GMm}{R}, \qquad v_{\text{esc}} = \sqrt{\frac{2GM}{R}}.
$$

The mass of the projectile cancels, so escape speed is the same for a pebble or a rocket. Using $$g = GM/R^2$$ at the surface, this can be rewritten as $$v_{\text{esc}} = \sqrt{2gR}$$. For Earth ($$g = 9.8\ \text{m/s}^2$$, $$R = 6.37\times10^6\ \text{m}$$), $$v_{\text{esc}}\approx 1.12\times10^4\ \text{m/s}$$, about $$11.2\ \text{km/s}$$.

</div>

---

## Spring Potential Energy

For an ideal spring,

$$
F_s = -kx.
$$

The potential energy stored in the spring is

$$
U_s = \frac{1}{2}kx^2,
$$

where $$x$$ is displacement from equilibrium. The force is the negative derivative:

$$
F_s = -\frac{d}{dx}\left(\frac{1}{2}kx^2\right) = -kx.
$$

The spring does negative work when stretched farther from equilibrium and positive work when returning toward equilibrium.

<div class="theorem-box">

**Proof (Spring Potential Energy).** Hooke's law is

$$
F_s=-kx.
$$

For a conservative force,

$$
F_s=-\frac{dU_s}{dx}.
$$

Therefore

$$
-kx=-\frac{dU_s}{dx},
$$

so

$$
\frac{dU_s}{dx}=kx.
$$

Integrating gives

$$
U_s=\frac{1}{2}kx^2+C.
$$

Choosing $$U_s=0$$ at equilibrium, where $$x=0$$, makes $$C=0$$. Thus

$$
U_s=\frac{1}{2}kx^2.
$$

</div>

<div class="theorem-box">

**Example.** A spring has stiffness $$k = 400\ \text{N/m}$$. How much work must an external agent do to stretch it from its natural length to $$x_1 = 0.10\ \text{m}$$, and then how much *additional* work to stretch it from $$x_1$$ to $$x_2 = 0.20\ \text{m}$$?

To stretch the spring slowly, the external force must balance the spring force, so $$F_{\text{ext}}(x) = +kx$$. The work done by this external force is

$$
W_{\text{ext}} = \int_{0}^{x} kx'\,dx' = \tfrac{1}{2}kx^2,
$$

which is exactly the stored potential energy. For the first stretch,

$$
W_1 = \tfrac{1}{2}(400)(0.10)^2 = 2.0\ \text{J}.
$$

To reach $$x_2 = 0.20\ \text{m}$$, the total stored energy is

$$
\tfrac{1}{2}(400)(0.20)^2 = 8.0\ \text{J},
$$

so the *additional* work is

$$
W_2 = 8.0\ \text{J} - 2.0\ \text{J} = 6.0\ \text{J}.
$$

Stretching the second $$10\ \text{cm}$$ takes three times the work of the first, because the force grows with displacement — the energy goes as $$x^2$$, not $$x$$. The spring itself does work $$-\tfrac{1}{2}kx^2$$ during stretching (opposing the motion).

</div>

---

## Conservation of Mechanical Energy

Mechanical energy is defined as

$$
E_{\text{mech}} = K + U.
$$

If only conservative forces do work,

$$
K_i + U_i = K_f + U_f.
$$

<div class="theorem-box">

**Proof (Conservation of Mechanical Energy).** The work-energy theorem says

$$
W_{\text{net}}=\Delta K.
$$

If only conservative forces do work,

$$
W_{\text{net}}=W_{\text{cons}}.
$$

By definition of potential energy,

$$
W_{\text{cons}}=-\Delta U.
$$

Therefore

$$
\Delta K=-\Delta U,
$$

or

$$
\Delta(K+U)=0.
$$

So

$$
K_i+U_i=K_f+U_f.
$$

</div>

<div class="theorem-box">

**Example.** A bob on a string of length $$L = 1.5\ \text{m}$$ is released from rest at an angle $$\theta = 60^\circ$$ from vertical. Find its speed at the lowest point. Ignore air resistance.

The tension is always perpendicular to the bob's velocity, so it does no work; only gravity does work, and mechanical energy is conserved. The bob's height above the lowest point when the string makes angle $$\theta$$ is

$$
h = L - L\cos\theta = L(1-\cos\theta).
$$

Taking the lowest point as $$U = 0$$ and using $$K_i = 0$$:

$$
mgh = \tfrac{1}{2}mv^2 \;\Rightarrow\; v = \sqrt{2gh} = \sqrt{2gL(1-\cos\theta)}.
$$

Numerically, $$h = 1.5(1-\cos 60^\circ) = 1.5(1-0.5) = 0.75\ \text{m}$$, so

$$
v = \sqrt{2(9.8)(0.75)} = \sqrt{14.7} \approx 3.8\ \text{m/s}.
$$

The same $$v = \sqrt{2gh}$$ result holds for a block sliding down any *frictionless* ramp or curved track through the same height drop, regardless of the shape of the path — only the vertical drop $$h$$ matters.

</div>

If nonconservative forces such as kinetic friction, air drag, or applied pushes do work, then

$$
K_i + U_i + W_{\text{nc}} = K_f + U_f.
$$

Equivalently,

$$
W_{\text{nc}} = \Delta E_{\text{mech}}.
$$

Friction usually decreases mechanical energy and converts it into thermal energy, so $$W_f$$ is usually negative for a sliding object.

:::tip{title="Signs of nonconservative work"}
If you forgot the sign of a non-conservative force, just think about whether the force would add energy or remove energy from the system (e.g. friction releases heat, meaning it removes energy).
:::

### Mechanical energy versus total energy

It is worth being careful about two different "totals." **Total mechanical energy** $$E_{\text{mech}} = K + U$$ counts only kinetic and potential energy, and it is *not* conserved when nonconservative forces act — friction, drag, and inelastic deformation all bleed it away. **Total energy**, however, *is* always conserved: the mechanical energy lost to friction does not vanish, it reappears as thermal energy (and a little sound). If we write

$$
\Delta E_{\text{mech}} + \Delta E_{\text{thermal}} + \cdots = 0,
$$

energy is conserved overall, with $$\lvert W_f \rvert = \mu_k F_N d$$ being the amount converted to heat. In AP problems we usually track $$E_{\text{mech}}$$ and treat friction's effect through $$W_{\text{nc}}$$, but it is conceptually important that energy is never destroyed — only mechanical energy is.

<div class="theorem-box">

**Example.** A block of mass $$m = 3.0\ \text{kg}$$ is released from rest and slides a distance $$d = 4.0\ \text{m}$$ down a $$30^\circ$$ incline with coefficient of kinetic friction $$\mu_k = 0.20$$. Find its speed at the bottom of that slide. Use $$g = 9.8\ \text{m/s}^2$$.

Gravity (conservative) and friction (nonconservative) both do work. Use $$K_i + U_i + W_{\text{nc}} = K_f + U_f$$ with the bottom of the slide as $$U = 0$$. The block drops a height $$h = d\sin\theta$$, so $$U_i = mgd\sin\theta$$. The normal force is $$F_N = mg\cos\theta$$, so friction does work

$$
W_{\text{nc}} = -f_k d = -\mu_k mg\cos\theta\,d.
$$

With $$K_i = 0$$:

$$
mgd\sin\theta - \mu_k mg\cos\theta\,d = \tfrac{1}{2}mv^2.
$$

Mass cancels, and solving for $$v$$:

$$
v = \sqrt{2gd(\sin\theta - \mu_k\cos\theta)}.
$$

Plugging in, $$\sin 30^\circ = 0.500$$ and $$\cos 30^\circ = 0.866$$:

$$
v = \sqrt{2(9.8)(4.0)\big(0.500 - 0.20(0.866)\big)} = \sqrt{78.4(0.327)} = \sqrt{25.6} \approx 5.1\ \text{m/s}.
$$

For comparison, a frictionless incline would give $$v = \sqrt{2gd\sin\theta} = \sqrt{39.2}\approx 6.3\ \text{m/s}$$; friction has carried away the difference as heat.

</div>

<div class="theorem-box">

**Example.** A $$0.50\ \text{kg}$$ block is pressed against a spring ($$k = 800\ \text{N/m}$$) compressed by $$x = 0.10\ \text{m}$$ on a horizontal surface. After release, the block slides $$L = 1.2\ \text{m}$$ along a rough patch ($$\mu_k = 0.25$$) before reaching a smooth section. Find its speed at the end of the rough patch.

The spring force is conservative, so its stored energy $$U_s = \tfrac{1}{2}kx^2$$ is the initial energy. Friction is the only nonconservative force. Apply

$$
K_i + U_i + W_{\text{nc}} = K_f + U_f.
$$

Here $$K_i = 0$$, $$U_i = \tfrac{1}{2}kx^2$$ (spring), $$U_f = 0$$ (spring relaxed, same height), and $$W_{\text{nc}} = -\mu_k mg L$$:

$$
\tfrac{1}{2}kx^2 - \mu_k mg L = \tfrac{1}{2}mv^2.
$$

Compute each energy term:

$$
\tfrac{1}{2}kx^2 = \tfrac{1}{2}(800)(0.10)^2 = 4.0\ \text{J},
$$

$$
\mu_k mg L = (0.25)(0.50)(9.8)(1.2) = 1.47\ \text{J}.
$$

So $$\tfrac{1}{2}mv^2 = 4.0 - 1.47 = 2.53\ \text{J}$$, giving

$$
v = \sqrt{\frac{2(2.53)}{0.50}} = \sqrt{10.1} \approx 3.2\ \text{m/s}.
$$

The clean strategy: spring energy in, friction energy out, kinetic energy is whatever remains.

</div>

---

## Energy Diagrams and Equilibrium

In one-dimensional systems, a graph of $$U(x)$$ contains force information:


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[axis lines=middle,width=9cm,height=5cm,xmin=-3,xmax=5,ymin=-1,ymax=6,xlabel={$x$},ylabel={$U$},xtick=\empty,ytick=\empty]
\addplot[blue,very thick,samples=180,domain=-2.5:4.5]{0.18*(x+1.8)*(x-0.4)^2*(x-3.2)+2.2};
\addplot[dashed] coordinates {(-3,3.0) (5,3.0)};
\node at (axis cs:-1.6,1.2) {stable}; \node at (axis cs:2.8,4.4) {unstable}; \node at (axis cs:4.2,3.2) {$E$};
\end{axis}
\end{tikzpicture}
```


$$
F_x = -\frac{dU}{dx}.
$$

Equilibrium occurs where

$$
\frac{dU}{dx}=0.
$$

The equilibrium is **stable** if $$U(x)$$ has a local minimum ($$\frac{d^2 U}{dx^2} > 0$$), **unstable** if it has a local maximum ($$\frac{d^2 U}{dx^2} < 0$$), and **neutral** if small displacements do not change $$U$$ to second order ($$\frac{d^2 U}{dx^2} = 0$$).

Turning points occur where $$K=0$$, so

$$
E = U(x).
$$

The particle can move only in regions where $$E\ge U(x)$$ because kinetic energy cannot be negative.

<div class="theorem-box">

**Example.** A particle of mass $$m = 0.20\ \text{kg}$$ moves in one dimension under the potential

$$
U(x) = 2x^2 - x^4
$$

(in joules, with $$x$$ in meters). Find the equilibrium positions and classify them, find the force at $$x = 0.5\ \text{m}$$, and if the particle has total energy $$E = 0.5\ \text{J}$$ and is at $$x=0$$, find its speed there.

**Equilibria.** Set $$dU/dx = 0$$:

$$
\frac{dU}{dx} = 4x - 4x^3 = 4x(1 - x^2) = 0 \;\Rightarrow\; x = 0,\ \pm 1.
$$

To classify, use the second derivative $$U''(x) = 4 - 12x^2$$:

- At $$x = 0$$: $$U'' = 4 > 0$$, a local minimum → **stable** equilibrium.
- At $$x = \pm 1$$: $$U'' = 4 - 12 = -8 < 0$$, local maxima → **unstable** equilibria.

**Force at $$x = 0.5$$.** The force is

$$
F_x = -\frac{dU}{dx} = -(4x - 4x^3) = -4(0.5) + 4(0.5)^3 = -2 + 0.5 = -1.5\ \text{N}.
$$

The force points toward $$-x$$, i.e. back toward the stable minimum at the origin — a restoring force, as expected near a potential well.

**Speed at $$x = 0$$.** Here $$U(0) = 0$$, so all the energy is kinetic:

$$
\tfrac{1}{2}mv^2 = E - U(0) = 0.5\ \text{J} \;\Rightarrow\; v = \sqrt{\frac{2(0.5)}{0.20}} = \sqrt{5} \approx 2.2\ \text{m/s}.
$$

The particle is trapped in the well as long as $$E$$ is below the barrier height $$U(\pm 1) = 2 - 1 = 1\ \text{J}$$; its turning points are where $$U(x) = E$$. With $$E = 0.5\ \text{J} < 1\ \text{J}$$, it oscillates back and forth inside the well.

</div>

---

## Power

**Power** is the rate of energy transfer:

$$
P = \frac{dW}{dt}.
$$

For a force acting on an object with instantaneous velocity $$\vec{v}$$,

$$
P = \vec{F}\cdot \vec{v}.
$$

Average power over a time interval is

$$
\bar{P} = \frac{\Delta E}{\Delta t}.
$$

Power is not a new kind of energy; it is how quickly energy is transferred or transformed.

<div class="theorem-box">

**Example.** A car of mass $$m = 1200\ \text{kg}$$ drives up a $$5.0^\circ$$ incline at a constant $$v = 25\ \text{m/s}$$. Neglecting friction and drag, what power must the engine deliver? Use $$g = 9.8\ \text{m/s}^2$$.

At constant speed there is no change in kinetic energy, so the engine's drive force must exactly balance the component of gravity along the incline:

$$
F = mg\sin\theta = (1200)(9.8)\sin 5.0^\circ = (11760)(0.0872) \approx 1.03\times 10^3\ \text{N}.
$$

Since the drive force is along the velocity, $$P = Fv$$:

$$
P = (1.03\times 10^3\ \text{N})(25\ \text{m/s}) \approx 2.6\times 10^4\ \text{W} \approx 26\ \text{kW}.
$$

Equivalently, the engine supplies gravitational potential energy at the rate $$P = mg\,v\sin\theta = mg\,v_y$$, where $$v_y = v\sin\theta$$ is the rate of gain of height. Both routes give the same answer because $$P = \vec{F}\cdot\vec{v}$$ counts only the force component along the motion.

</div>

---

:::equations

| Idea | Equation |
| --- | --- |
| Work, constant force | $$W = \vec{F}\cdot\Delta\vec{r} = F\Delta r\cos\theta$$ |
| Work, variable force | $$W = \int_{x_i}^{x_f} F_x\,dx$$ |
| Kinetic energy | $$K = \tfrac{1}{2}mv^2$$ |
| Work-energy theorem | $$W_{\text{net}} = \Delta K$$ |
| Conservative force / potential | $$F_x = -\dfrac{dU}{dx}$$ |
| Gravity near Earth | $$U_g = mgy$$ |
| Universal gravitation | $$U_g = -\dfrac{GMm}{r}$$ |
| Spring potential energy | $$U_s = \tfrac{1}{2}kx^2$$ |
| Mechanical energy conservation | $$K_i + U_i = K_f + U_f$$ |
| With nonconservative work | $$K_i + U_i + W_{\text{nc}} = K_f + U_f$$ |
| Escape speed | $$v_{\text{esc}} = \sqrt{\dfrac{2GM}{R}}$$ |
| Power | $$P = \dfrac{dW}{dt} = \vec{F}\cdot\vec{v}$$ |
:::

## Practice

### FRQ

::::frq{id=ap-physics-c-mechanics-work-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
