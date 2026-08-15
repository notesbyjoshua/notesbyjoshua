---
title: "Unit 7: Oscillations"
next: false
sidebar:
  order: 7
---

:::variables
- $$x$$ = displacement from equilibrium
- $$A$$ = amplitude
- $$T$$ = period
- $$f$$ = frequency
- $$\omega$$ = angular frequency
- $$k$$ = spring constant
- $$m$$ = mass
- $$\phi$$ = phase constant
:::

---

## Simple Harmonic Motion

Oscillations will mostly deal with one specific type of motion: **Simple Harmonic Motion (SHM)**.

<div class="theorem-box">

**Definition (Simple Harmonic Motion).** A system is in simple harmonic motion when its acceleration is proportional to displacement and points toward equilibrium, $$a = -\omega^2 x$$, equivalently $$\dfrac{d^2x}{dt^2} + \omega^2x = 0$$.

The general solution is given as:

$$
x(t)=A\cos(\omega t+\phi)
$$

or equivalently

$$
x(t)=A\sin(\omega t+\phi).
$$

</div>

A rigorous proof of the formula (one that does not involve knowing the solution beforehand) requires multivariable calculus and will not be shown here. The constants $$A$$ and $$\phi$$ are set by initial position and velocity. Concretely, from $$x(t)=A\cos(\omega t+\phi)$$ and $$v(t)=-A\omega\sin(\omega t+\phi)$$, evaluating at $$t=0$$ gives

$$
x_0=A\cos\phi,\qquad v_0=-A\omega\sin\phi.
$$

Solving these two equations for the two unknowns yields

$$
A=\sqrt{x_0^2+\left(\frac{v_0}{\omega}\right)^2},\qquad \tan\phi=-\frac{v_0}{\omega x_0}.
$$

:::warning
When taking the inverse tangent, always check the signs of $$x_0$$ and $$v_0$$ separately to land in the correct quadrant for $$\phi$$.
:::

There are many types of simple harmonic motion (the most common of which are the spring and the simple pendulum), and most problems will state that it involves SHM.

### Velocity and Acceleration in SHM

If

$$
x(t)=A\cos(\omega t+\phi),
$$

then taking the derivative gets

$$
v(t)=\frac{dx}{dt}=-A\omega\sin(\omega t+\phi),
$$

and taking it again gets

$$
a(t)=\frac{d^2x}{dt^2}=-A\omega^2\cos(\omega t+\phi)=-\omega^2x.
$$

The maximum speed is

$$
v_{\max}=A\omega,
$$

at a point where $$\sin x = 1$$ and the maximum acceleration magnitude is

$$
a_{\max}=A\omega^2.
$$

Speed is greatest at equilibrium and zero at the turning points, both of which are pretty intuitive.

<div class="theorem-box">

**Example.** A mass in SHM has amplitude $$A=0.20\ \text{m}$$. At $$x=0.12\ \text{m}$$, its speed is $$0.80\ \text{m/s}$$. Find its maximum speed, without using the period or frequency. For SHM, it may be useful to know that $$v^2=\omega^2(A^2-x^2).$$

For SHM,

$$
v^2=\omega^2(A^2-x^2)
$$

and

$$
v_{\max}=A\omega.
$$

Eliminate $$\omega$$:

$$
\frac{v}{v_{\max}}=\frac{\sqrt{A^2-x^2}}{A}.
$$

So

$$
v_{\max}=v\frac{A}{\sqrt{A^2-x^2}}
=0.80\frac{0.20}{\sqrt{0.20^2-0.12^2}}=1.0\ \text{m/s}.
$$

</div>

### Period and Frequency

The angular frequency $$\omega$$ is related to frequency and period by

$$
\omega = 2\pi f = \frac{2\pi}{T}.
$$

Thus

$$
T = \frac{2\pi}{\omega}.
$$

Period is the time for one full cycle. Frequency is cycles per second, measured in hertz.

Angular frequency is not "cycles per second"; it is radians of phase per second. One cycle corresponds to $$2\pi$$ radians of phase, which is why $$\omega=2\pi f$$. In SHM, $$\omega$$ is usually the most natural quantity because it appears directly in $$a=-\omega^2x$$. Large $$\omega$$ means a strong restoring acceleration for a given displacement, so the oscillator turns around quickly and has a short period.

<div class="theorem-box">

**Example.** An oscillator has position $$x(t)=0.12\cos(8.0t+\pi/3)$$ in meters. Find its amplitude, angular frequency, period, and frequency.

Compare the equation to $$x(t)=A\cos(\omega t+\phi)$$:

$$
A=0.12\ \text{m},\qquad \omega=8.0\ \text{rad/s}.
$$

The period is

$$
T=\frac{2\pi}{\omega}
=\frac{2\pi}{8.0}
=0.785\ \text{s}.
$$

The frequency is

$$
f=\frac{1}{T}
=\frac{\omega}{2\pi}
=\frac{8.0}{2\pi}
=1.27\ \text{Hz}.
$$

The phase $$\pi/3$$ shifts where the oscillator starts, but it does not change amplitude, period, or frequency.

</div>

---

## Common Modes of SHM

### Mass-Spring Oscillators

For a mass on an ideal, massless spring, the force follows Hooke's Law:

$$
F=-kx.
$$

The angular frequency is defined as $$\omega=\sqrt{\frac{k}{m}}$$ and the period is $$T=\frac{2\pi}{\omega}=2\pi\sqrt{\frac{m}{k}}.$$ As a reminder, $$k$$ is the spring constant, and has units of $$\frac{N}{m}$$. A larger spring constant means the spring is more stiff and thus takes more force to push or pull on it.

:::note
Angular frequency and period do NOT depend on the amplitude for an ideal spring!
:::

<div class="theorem-box">

**Proof (Mass-Spring Period).** Hooke's law gives

$$
F=ma=-kx.
$$

Using the differential form of Newton's second law gives

$$
m\frac{d^2x}{dt^2}=-kx.
$$

Rearrange:

$$
\frac{d^2x}{dt^2}+\frac{k}{m}x=0.
$$

Compare this to the SHM form (since all springs undergo SHM)

$$
\frac{d^2x}{dt^2}+\omega^2x=0.
$$

So

$$
\omega^2=\frac{k}{m},
$$

meaning

$$
\omega=\sqrt{\frac{k}{m}}.
$$

Since $$T=2\pi/\omega$$,

$$
T=2\pi\sqrt{\frac{m}{k}}.
$$

</div>

### Combinations of springs

Many AP setups attach a mass to more than one spring. Each combination behaves like a single ideal spring with an **effective spring constant** $$k_{\text{eff}}$$ that models the whole system, and the period is then $$T=2\pi\sqrt{m/k_{\text{eff}}}$$. Similarly, $$U=\frac{1}{2}k_{\text{eff}}x^2$$.

Springs are in **parallel** when they attach to the same moving object and stretch or compress by the same amount. If the mass moves by $$x$$, each parallel spring changes length by $$x$$, so their restoring forces add.

Springs are in **series** when they are connected end-to-end and the same force passes through each spring. The total stretch is split between them: one spring may stretch more than the other, but both carry the same tension. A good test is: same displacement means parallel; same force through each spring means series.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[decorate, decoration={coil,aspect=0.45,segment length=5pt,amplitude=4pt}, thick] (-4,1.2) -- (-2,1.2); \draw[decorate, decoration={coil,aspect=0.45,segment length=5pt,amplitude=4pt}, thick] (-2,1.2) -- (0,1.2); \draw[fill=gray!20] (0,0.8) rectangle (0.8,1.6); \node at (-2,1.8) {series};
\draw[decorate, decoration={coil,aspect=0.45,segment length=5pt,amplitude=4pt}, thick] (-4,-0.5) -- (-1.5,-0.5); \draw[decorate, decoration={coil,aspect=0.45,segment length=5pt,amplitude=4pt}, thick] (-4,-1.2) -- (-1.5,-1.2); \draw[fill=gray!20] (-1.5,-1.5) rectangle (-0.7,-0.2); \node at (-2.4,-1.85) {parallel};
\end{tikzpicture}
```

<div class="theorem-box">

**Proof (series and parallel spring constants).** Lets say you have two ideal springs with spring constant $$k_1$$ and $$k_2$$ supporting one mass.

*Parallel*. Each pulls back, and the forces add:

$$
F=-k_1 x-k_2 x=-(k_1+k_2)x.
$$

Comparing to $$F=-k_{\text{eff}}x$$,

$$
k_{\text{eff}}=k_1+k_2.
$$

Parallel springs are *stiffer* than either alone. If you have more than two springs in parallel, you simply add all of the spring constants together to get the effective spring constant.

*Series*. Each spring stretches by $$x_i=F/k_i$$ in magnitude, and the total stretch is

$$
x=x_1+x_2=\frac{F}{k_1}+\frac{F}{k_2}=F\left(\frac{1}{k_1}+\frac{1}{k_2}\right).
$$

Since $$k_{\text{eff}}=F/x$$,

$$
\frac{1}{k_{\text{eff}}}=\frac{1}{k_1}+\frac{1}{k_2}.
$$

Alternatively,

$$
k_{\text{eff}}=\frac{k_1 k_2}{k_1 + k_2}
$$

Series springs are *softer* than either alone. If you have more than two springs in parallel, you simply add all of the reciprocals of the spring constants together and take the reciprocal of the sum to get the effective spring constant.

</div>

<div class="theorem-box">

**Example.** A $$2.0\ \text{kg}$$ block is connected to two springs with $$k_1=300\ \text{N/m}$$ and $$k_2=600\ \text{N/m}$$. Find the period (a) if the springs act in parallel and (b) if they act in series.

(a) Parallel:

$$
k_{\text{eff}}=k_1+k_2=300+600=900\ \text{N/m},
$$

$$
T=2\pi\sqrt{\frac{m}{k_{\text{eff}}}}=2\pi\sqrt{\frac{2.0}{900}}\approx 0.30\ \text{s}.
$$

(b) Series:

$$
\frac{1}{k_{\text{eff}}}=\frac{1}{300}+\frac{1}{600}=\frac{2+1}{600}=\frac{1}{200}\quad\Longrightarrow\quad k_{\text{eff}}=200\ \text{N/m},
$$

$$
T=2\pi\sqrt{\frac{2.0}{200}}\approx 0.63\ \text{s}.
$$

The series arrangement is softer, so it oscillates more slowly. A quick sanity check: $$200\ \text{N/m}$$ is smaller than either individual spring, and $$900\ \text{N/m}$$ is larger than either — exactly as the proof predicts.

</div>

### Effective spring constants from energy

Not every spring configuration is purely series or parallel. A general method is to displace the mass by a small coordinate $$x$$ (which simulates SHM), write the total spring potential energy, and match it to

$$
U=\frac{1}{2}k_{\text{eff}}x^2.
$$

<div class="theorem-box">

**Example.** A block is attached symmetrically to two identical springs of constant $$k$$. Each spring makes angle $$\theta$$ with the horizontal at equilibrium. If the block is displaced a small distance $$x$$ horizontally, find the effective spring constant for horizontal oscillations.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,decorations.pathmorphing}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (-3,0) -- (-3,2.4);
\draw[thick] (3,0) -- (3,2.4);
\draw[decorate,decoration={coil,aspect=0.45,segment length=5pt,amplitude=4pt},thick] (-3,1.6) -- (-0.45,0.2);
\draw[decorate,decoration={coil,aspect=0.45,segment length=5pt,amplitude=4pt},thick] (3,1.6) -- (0.45,0.2);
\draw[fill=gray!20] (-0.45,-0.25) rectangle (0.45,0.65);
\node at (0,0.2) {$m$};
\draw[->,blue,thick] (0,-0.75) -- (0.9,-0.75) node[right] {$x$};
\node at (-1.55,1.2) {$k$};
\node at (1.55,1.2) {$k$};
\end{tikzpicture}
```

For a small horizontal displacement, each spring's length changes by the component of the block's displacement along that spring:

$$
\Delta \ell=x\cos\theta.
$$

Each spring stores energy $$\tfrac12k(\Delta\ell)^2$$, so the total spring energy is

$$
U=2\left(\frac12k(x\cos\theta)^2\right)=kx^2\cos^2\theta.
$$

Match this to $$\tfrac12k_{\text{eff}}x^2$$:

$$
\frac12k_{\text{eff}}x^2=kx^2\cos^2\theta.
$$

Therefore

$$
k_{\text{eff}}=2k\cos^2\theta.
$$

This configuration is not simply series or parallel; the geometry determines how much each spring actually stretches.

</div>

### Simple Pendulums

A simple pendulum is defined as a point mass (or equivalent, explained in the next section) hanging on a massless rod that swings at small angles.

<div class="theorem-box">

**Definition (Simple Pendulum).** For a simple pendulum of length $$L$$ and small angular displacement $$\theta$$,

$$
\omega=\sqrt{\frac{g}{L}},
$$

and

$$
T=2\pi\sqrt{\frac{L}{g}}.
$$

This formula assumes the small-angle approximation $$\sin\theta\approx\theta$$ when $$\theta$$ is measured in radians. Like the ideal mass-spring period, the simple-pendulum period is independent of mass and approximately independent of amplitude.

</div>

<div class="theorem-box">

**Proof (Simple Pendulum Period).** Gravity creates a restoring torque about the pivot:

$$
\tau=-mgL\sin\theta.
$$

For small angles, $$\sin\theta\approx\theta$$ (using a Taylor series expansion), so

$$
\tau\approx-mgL\theta.
$$

Using $$I=mL^2$$ and $$\sum\tau=I\,d^2\theta/dt^2$$,

$$
mL^2\frac{d^2\theta}{dt^2}=-mgL\theta.
$$

Rearrange:

$$
\frac{d^2\theta}{dt^2}+\frac{g}{L}\theta=0.
$$

Compare with $$d^2\theta/dt^2+\omega^2\theta=0$$:

$$
\omega=\sqrt{\frac{g}{L}},
$$

so

$$
T=2\pi\sqrt{\frac{L}{g}}.
$$

Note that this only works for *small* angles of $$\theta$$! Without the small angle approximation, the solution has no closed form and requires elliptical integrals to solve!

</div>

<div class="theorem-box">

**Example.** Suppose a pendulum has a length of $$1$$ meter and a period of $$2$$ seconds. Find $$g$$ in this scenario (do NOT assume that $$g=9.8$$!).

Use

$$
T=2\pi\sqrt{\frac{L}{g}}.
$$

Solve for $$g$$:

$$
\frac{T}{2\pi}=\sqrt{\frac{L}{g}},
$$

$$
\frac{T^2}{4\pi^2}=\frac{L}{g},
$$

$$
g=\frac{4\pi^2L}{T^2}.
$$

With $$L=1\ \text{m}$$ and $$T=2\ \text{s}$$,

$$
g=\frac{4\pi^2(1)}{2^2}=\pi^2\ \text{m/s}^2.
$$

Approximately,

$$
g\approx9.87\ \text{m/s}^2.
$$

You may find it curious that the solution ($$\pi^2$$) is very close to $$g$$, the gravitational acceleration on Earth! This is no coincidence.  In the late 18th century, scientists defined the meter as the length of a "seconds pendulum," where the time it takes for it to go from end to end is one second (and thus the period is two seconds).

However, as time went on, scientists changed the definition of the meter since gravity was different depending on where you stand from, resulting in a geodetic definition: one ten-millionth of the distance from the equator to the North Pole along the meridian passing through Paris. The old definition ended up being around 1% off of the current accepted value for $$g$$!

</div>

### Physical Pendulums

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\fill (0,2) circle (2pt) node[above] {pivot};
\draw[dashed] (0,2) -- (0,-1.2);
\draw[thick] (0,2) -- (0.42,1.25);
\draw[thick, fill=gray!18, rotate around={-18:(0,2)}]
  (-0.32,1.35) .. controls (0.12,0.90) and (0.08,0.25) .. (0.46,-0.35)
  .. controls (0.05,-0.78) and (-0.55,-0.58) .. (-0.58,0.10)
  .. controls (-0.78,0.75) and (-0.68,1.20) .. (-0.32,1.35);
\coordinate (C) at (-0.16,0.45);
\fill[red] (C) circle (2pt) node[right] {CM};
\draw[->, red, thick] (C) -- ++(0,-1.05) node[below] {$mg$};
\draw[<->] (0.05,1.72) -- (C) node[midway,right] {$d$};
\end{tikzpicture}
```

While simple pendulums are very easy to solve, not all pendulums act this way. A rigid body swinging about a pivot is a **physical pendulum** and is subject to rotation about the pivot point. If the center of mass is distance $$d$$ from the pivot,

$$
\omega=\sqrt{\frac{mgd}{I}},
$$

and

$$
T=2\pi\sqrt{\frac{I}{mgd}}.
$$

<div class="theorem-box">

**Proof (Physical Pendulum Period).** Gravity acts at the center of mass, distance $$d$$ from the pivot. The torque is

$$
\tau=-mgd\sin\theta.
$$

For small angles, $$\sin\theta\approx\theta$$, so

$$
\tau\approx-mgd\theta.
$$

Using $$\sum\tau=I\,d^2\theta/dt^2$$ about the pivot,

$$
I\frac{d^2\theta}{dt^2}=-mgd\theta.
$$

Rearrange:

$$
\frac{d^2\theta}{dt^2}+\frac{mgd}{I}\theta=0.
$$

Thus

$$
\omega=\sqrt{\frac{mgd}{I}},
$$

and

$$
T=2\pi\sqrt{\frac{I}{mgd}}.
$$

</div>

Here $$I$$ is the rotational inertia about the *pivot*, not about the center of mass; use the parallel-axis theorem when needed. The simple pendulum is the special case where all mass sits at distance $$L$$ from the pivot (for all purposes, this is a point mass), giving $$I=mL^2$$ and $$d=L$$, which reduces $$T$$ back to $$2\pi\sqrt{L/g}$$.

<div class="theorem-box">

**Example.** A uniform rod of mass $$M$$ and length $$L=1.2\ \text{m}$$ is pivoted at one end and swings as a physical pendulum through small angles. Find its period. Use $$g=9.8\ \text{m/s}^2$$.

The rotational inertia of a uniform rod about one end is

$$
I=\frac{1}{3}ML^2.
$$

The center of mass is at the rod's midpoint, so $$d=L/2$$. Substitute into the physical-pendulum period:

$$
T=2\pi\sqrt{\frac{I}{Mgd}}=2\pi\sqrt{\frac{\tfrac{1}{3}ML^2}{Mg\,(L/2)}}=2\pi\sqrt{\frac{2L}{3g}}.
$$

The mass $$M$$ cancels, as it must for a gravity-driven pendulum. Plugging in numbers:

$$
T=2\pi\sqrt{\frac{2(1.2)}{3(9.8)}}=2\pi\sqrt{\frac{2.4}{29.4}}=2\pi\sqrt{0.0816}\approx 1.8\ \text{s}.
$$

It is instructive to compare this to a *simple* pendulum of the same length $$L=1.2\ \text{m}$$, which would have $$T=2\pi\sqrt{L/g}=2\pi\sqrt{1.2/9.8}\approx2.2\ \text{s}$$. The rod swings faster because its mass is distributed closer to the pivot than a point mass at the far end — equivalently, the rod behaves like a simple pendulum of effective length $$\tfrac{2}{3}L=0.80\ \text{m}$$.

</div>

### Solving for general SHM systems

Not every oscillator is a spring or a pendulum, but the same methods still apply.

:::strategy
The general recipe is always the same: displace the system by a small amount, find the net restoring force as a function of displacement, write it as $$F=-(\text{const})\,x$$, and read off $$\omega^2=\text{const}/m$$.
:::

<div class="theorem-box">

**Example.** A solid cylinder of cross-sectional area $$A$$, height $$h$$, and density $$\rho_{\text{obj}}$$ floats upright in a liquid of density $$\rho_{\text{liq}}$$. It is pushed down slightly and released. Show the motion is SHM and find $$\omega$$.

These formulas may be helpful:

$$
F_B=\rho_{\text{fluid}}gV_{\text{sub}},
\qquad
m=\rho_{\text{object}}V.
$$

The first is Archimedes' principle: buoyant force equals the weight of displaced fluid. The second is the density relation, mass equals density times volume.

At equilibrium the object floats with some submerged depth $$d_0$$, where buoyancy balances weight. Now push it down an extra distance $$y$$. The submerged volume increases by $$A\,y$$, so the buoyant force grows by

$$
\Delta F_B=\rho_{\text{liq}}\,g\,(A\,y),
$$

directed upward — opposite the displacement. Since the weight is unchanged, the *net* restoring force is

$$
F=-\rho_{\text{liq}}\,g\,A\,y.
$$

This is Hooke's law with effective constant $$k_{\text{eff}}=\rho_{\text{liq}}gA$$. The object's mass is $$m=\rho_{\text{obj}}Ah$$, so

$$
\omega=\sqrt{\frac{k_{\text{eff}}}{m}}=\sqrt{\frac{\rho_{\text{liq}}gA}{\rho_{\text{obj}}Ah}}=\sqrt{\frac{\rho_{\text{liq}}\,g}{\rho_{\text{obj}}\,h}}.
$$

The area $$A$$ cancels, and the frequency depends only on the density ratio, $$g$$, and the height — a clean result that comes entirely from the linear restoring force.

</div>

<div class="theorem-box">

**Example.** A U-shaped tube of uniform cross-sectional area $$A$$ contains a liquid of density $$\rho$$, with total liquid column length $$L$$. The liquid is disturbed so one side rises by $$y$$ while the other falls by $$y$$. Find the period of the resulting oscillation.

These formulas may be helpful:

$$
m=\rho V,
\qquad
W=mg.
$$

For a uniform tube, the liquid volume is cross-sectional area times length, $$V=AL$$. Weight is then the gravitational force on that mass.

When the left surface drops by $$y$$ and the right rises by $$y$$, the height difference between the two columns is $$2y$$. That excess column of height $$2y$$ and cross-section $$A$$ has weight

$$
\Delta W=\rho g\,(A\cdot 2y),
$$

and this unbalanced weight is the restoring force on the whole liquid:

$$
F=-2\rho g A\,y.
$$

The total moving mass is the entire liquid column, $$m=\rho A L$$. Newton's second law gives

$$
\rho A L\frac{d^2y}{dt^2}=-2\rho g A\,y
\quad\Longrightarrow\quad
\frac{d^2y}{dt^2}+\frac{2g}{L}\,y=0.
$$

So

$$
\omega=\sqrt{\frac{2g}{L}},\qquad T=2\pi\sqrt{\frac{L}{2g}}.
$$

The density and area both cancel: only the column length matters. As with the floating object, the entire problem reduced to writing the restoring force as a constant times the displacement.

</div>

---

## Energy in SHM

For a mass-spring oscillator,

$$
E = K+U = \frac{1}{2}mv^2+\frac{1}{2}kx^2.
$$

At maximum displacement, $$v=0$$ and $$x=\pm A$$, so

$$
E=\frac{1}{2}kA^2.
$$

At equilibrium, $$x=0$$ and speed is maximum:

$$
E=\frac{1}{2}mv_{\max}^2.
$$

Energy continuously transfers between kinetic energy and spring potential energy while total mechanical energy remains constant if the spring system is ideal. These equations lead to the following two equations:

$$
\frac{1}{2}mv^2+\frac{1}{2}kx^2=\frac{1}{2}kA^2
\quad\Longrightarrow\quad
v(x)=\pm\omega\sqrt{A^2-x^2}.
$$

This recovers $$v_{\max}=A\omega$$ at $$x=0$$ and $$v=0$$ at $$x=\pm A$$ without ever solving the differential equation.

<div class="theorem-box">

**Proof (SHM from energy conservation).** For an ideal mass-spring system the total mechanical energy is constant:

$$
E=\frac{1}{2}mv^2+\frac{1}{2}kx^2=\text{const.}
$$

Differentiate both sides with respect to time. Using $$v=dx/dt$$ and $$dv/dt=d^2x/dt^2$$,

$$
\frac{dE}{dt}=mv\frac{dv}{dt}+kx\frac{dx}{dt}=mv\frac{d^2x}{dt^2}+kxv=0.
$$

Factor out $$v$$:

$$
v\left(m\frac{d^2x}{dt^2}+kx\right)=0.
$$

Since $$v$$ is not zero throughout the motion (it is instantaneously zero only at the turning points), the bracket must vanish:

$$
m\frac{d^2x}{dt^2}+kx=0,
$$

which is exactly the SHM equation with $$\omega=\sqrt{k/m}$$. This equation can apply to any type of SHM, not just mass-spring oscillators.

</div>

<div class="theorem-box">

**Example.** A block oscillates on a spring with amplitude $$A=0.12\ \text{m}$$. Find the displacement where the kinetic energy is three times the potential energy, and find the fraction of the maximum speed at that point.

Total energy is $$E=\tfrac{1}{2}kA^2$$. When $$K=3U$$,

$$
E=K+U=4U.
$$

Thus $$U=E/4$$:

$$
\frac12kx^2=\frac14\left(\frac12kA^2\right).
$$

Cancel $$\tfrac12k$$:

$$
x^2=\frac{A^2}{4}\quad\Longrightarrow\quad x=\pm\frac{A}{2}=\pm0.060\ \text{m}.
$$

Since $$K=3E/4$$ and $$K_{\max}=E=\tfrac12mv_{\max}^2$$,

$$
\frac12mv^2=\frac34\left(\frac12mv_{\max}^2\right).
$$

Therefore

$$
v=\frac{\sqrt3}{2}v_{\max}\approx0.866v_{\max}.
$$

</div>

---

## Small Oscillations About Any Potential Minimum

The mass-spring system is just the simplest member of a much larger family. Recall that a one-dimensional conservative force is $$F_x=-dU/dx$$ and that a **stable equilibrium** sits at a local minimum of $$U(x)$$, where $$U'(x_0)=0$$ and $$U''(x_0)>0$$. The key result is that *any* such minimum looks like a spring for small displacements, with an effective spring constant equal to the curvature of $$U$$ (think of a ball rolling back and forth in a divot):

$$
k_{\text{eff}}=U''(x_0),\qquad \omega=\sqrt{\frac{U''(x_0)}{m}}.
$$

<div class="theorem-box">

**Proof (small oscillations are SHM).** Let a particle of mass $$m$$ move in a potential $$U(x)$$ with a stable equilibrium at $$x_0$$, so $$U'(x_0)=0$$ and $$U''(x_0)>0$$. Expand $$U$$ in a Taylor series (refer to Calc BC Unit 10 if you need more information about this) about $$x_0$$, writing the small displacement $$s=x-x_0$$:

$$
U(x)=U(x_0)+U'(x_0)\,s+\frac{1}{2}U''(x_0)\,s^2+\cdots
$$

The constant $$U(x_0)$$ does not affect forces, and $$U'(x_0)=0$$ by the equilibrium condition. For small $$s$$ we keep only the quadratic term, since all the other terms are essentially $$0$$:

$$
U(x)\approx U(x_0)+\frac{1}{2}U''(x_0)\,s^2.
$$

The force is then

$$
F=-\frac{dU}{dx}=-\frac{dU}{ds}=-U''(x_0)\,s.
$$

This is exactly Hooke's law with $$k_{\text{eff}}=U''(x_0)$$. Newton's second law gives

$$
m\frac{d^2s}{dt^2}=-U''(x_0)\,s
\quad\Longrightarrow\quad
\omega=\sqrt{\frac{U''(x_0)}{m}}.
$$

So near the bottom of any smooth potential well, the motion is simple harmonic — the parabola $$\tfrac12 k_{\text{eff}}s^2$$ is the local approximation to *every* potential minimum. Another way to think of it is

$$
\omega=\sqrt{\frac{\text{restoring effect}}{\text{inertia}}}.
$$

Here the restoring effect is the curvature $$U''(x_0)$$: a sharper well pushes back harder for the same displacement. The inertia is the mass $$m$$: a heavier object responds more sluggishly to the same restoring force.

</div>

<div class="theorem-box">

**Example.** A particle of mass $$m=0.20\ \text{kg}$$ moves in the potential

$$
U(x)=\alpha x^4-\beta x^2,\qquad \alpha=2.0\ \text{J/m}^4,\quad \beta=4.0\ \text{J/m}^2.
$$

Find the angular frequency of small oscillations about the positive-$$x$$ equilibrium.

First locate the equilibrium from $$U'(x)=0$$:

$$
U'(x)=4\alpha x^3-2\beta x=2x(2\alpha x^2-\beta)=0.
$$

The nonzero solutions are $$x_0=\pm\sqrt{\beta/2\alpha}=\pm\sqrt{4.0/4.0}=\pm1.0\ \text{m}$$. Take $$x_0=+1.0\ \text{m}$$. Now the curvature:

$$
U''(x)=12\alpha x^2-2\beta,
$$

$$
U''(x_0)=12(2.0)(1.0)^2-2(4.0)=24-8=16\ \text{N/m}.
$$

Since $$U''(x_0)>0$$ this is indeed a stable minimum (the point $$x=0$$, where $$U''(0)=-8<0$$, is an unstable maximum). The angular frequency is

$$
\omega=\sqrt{\frac{U''(x_0)}{m}}=\sqrt{\frac{16}{0.20}}=\sqrt{80}\approx 8.9\ \text{rad/s}.
$$

Notice we never needed the full shape of $$U$$ — only its second derivative at the equilibrium.

</div>

---

:::equations

| Idea | Equation |
| --- | --- |
| SHM equation of motion | $$\dfrac{d^2x}{dt^2}+\omega^2 x=0$$ |
| General solution | $$x(t)=A\cos(\omega t+\phi)$$ |
| Amplitude from initial conditions | $$A=\sqrt{x_0^2+(v_0/\omega)^2}$$ |
| Max speed / acceleration | $$v_{\max}=A\omega,\quad a_{\max}=A\omega^2$$ |
| Speed vs position | $$v(x)=\pm\omega\sqrt{A^2-x^2}$$ |
| Period and frequency | $$\omega=2\pi f=2\pi/T$$ |
| Mass-spring | $$\omega=\sqrt{k/m},\quad T=2\pi\sqrt{m/k}$$ |
| Springs in parallel | $$k_{\text{eff}}=k_1+k_2$$ |
| Springs in series | $$1/k_{\text{eff}}=1/k_1+1/k_2$$ |
| General spring configuration | match $$U$$ to $$\tfrac12k_{\text{eff}}x^2$$ |
| Simple pendulum | $$T=2\pi\sqrt{L/g}$$ |
| Physical pendulum | $$T=2\pi\sqrt{I/(mgd)}$$ |
| Energy in SHM | $$E=\tfrac12 kA^2=\tfrac12 m v_{\max}^2$$ |
| Small oscillations near $$U$$ minimum | $$\omega=\sqrt{U''(x_0)/m}$$ |
:::

## Practice

### FRQ

::::frq{id=ap-physics-c-mechanics-oscillations-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
