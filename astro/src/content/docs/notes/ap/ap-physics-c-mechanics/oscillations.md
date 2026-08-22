---
title: "Unit 7: Oscillations"
description: "AP Physics C Mechanics notes on simple harmonic motion, springs, pendulums, energy, angular frequency, and oscillation graphs."
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

While simple pendulums are very easy to solve, not all pendulums act like point masses. A rigid body swinging about a pivot is known as a **physical pendulum** and is subject to rotation about the pivot point. If the center of mass is distance $$d$$ from the pivot,

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
1. Displace the system by a small displacement $$\Delta x$$ or a small angle $$\Delta \theta$$.
2. Find the restoring force/torque from that small displacement.
3. If the force/torque is linear in $$\Delta x$$/$$\Delta \theta$$, the system is in SHM.
4. If the system is in SHM, write the system as $$F=-(\text{const})\,x$$ (or the torque equivalent) and read off $$\omega^2=\text{const}/m$$.
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

For a uniform tube, the liquid volume is cross-sectional area times length, $$V=AL$$ (since the object is a cylinder). Weight is then the gravitational force on that mass.

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

### Multiple Choice

::::problem
1. A mass $$m$$ hangs from a spring of constant $$k$$ in a uniform gravitational field. It oscillates vertically about equilibrium with amplitude $$A$$. Which quantity depends on $$g$$?

(A) The angular frequency

(B) The period

(C) The equilibrium extension

(D) The speed at the equilibrium point measured relative to the oscillation amplitude


:::solution
For a vertical spring, gravity adds a constant downward force. A constant force shifts the equilibrium point but does not change the slope of the restoring force.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,decorations.pathmorphing}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.85]
  \draw[thick] (0,-0.5) -- (0,1.1);
  \draw[decorate, decoration={coil, aspect=0.45, segment length=4pt, amplitude=4pt}, thick] (0,0.3) -- (2.1,0.3);
  \draw[fill=blue!10, thick] (2.1,-0.15) rectangle (3.0,0.75) node[midway] {$m$};
  \draw[->, thick, red!75] (2.55,0.95) -- (3.6,0.95) node[right] {$x$};
  \draw[->, thick] (2.55,-0.15) -- (2.55,-0.9) node[below] {$mg$};
\end{tikzpicture}
```

At equilibrium, $$kx_0=mg$$, so $$x_0=mg/k$$. But if displacement is measured from that new equilibrium, the net restoring force is still $$F=-kx$$, giving $$\omega=\sqrt{k/m}$$ and the same period formula. Therefore the quantity that depends on $$g$$ is the equilibrium extension. The answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
2. A pendulum clock is taken to a planet where the gravitational field strength is $$g/4$$. To keep the same small-angle period, the pendulum length should be changed from $$L$$ to

(A) $$4L$$

(B) $$2L$$

(C) $$L/2$$

(D) $$L/4$$


:::solution
The small-angle pendulum period is

$$
T=2\pi\sqrt{\frac{L}{g}}.
$$

To keep $$T$$ the same, the ratio $$L/g$$ must stay the same.


If the new gravitational field is $$g/4$$, then the new length must satisfy

$$
\frac{L_{\text{new}}}{g/4}=\frac{L}{g}.
$$

So $$L_{\text{new}}=L/4$$, and the answer is $$\boxed{\text{D}}$$.
:::
::::

::::problem
3. A mass on a spring is released from rest at $$x=A$$. When it first reaches $$x=A/3$$, what fraction of the total mechanical energy is kinetic?

(A) $$1/9$$

(B) $$2/3$$

(C) $$8/9$$

(D) $$\sqrt{8}/3$$


:::solution
The mass is released from rest at amplitude $$A$$, so the total mechanical energy is

$$
E=\frac12kA^2.
$$

At $$x=A/3$$, the spring potential energy is

$$
U=\frac12k\left(\frac{A}{3}\right)^2=\frac19\left(\frac12kA^2\right)=\frac19E.
$$

Therefore the kinetic energy is the remaining $$8/9$$ of the total. The answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
4. A block of mass $$m$$ is attached to a spring of constant $$k$$ on a frictionless horizontal surface. A small constant horizontal force $$F_0$$ is then applied and left on. Compared with the original oscillator, the new motion has

(A) the same angular frequency and an equilibrium shifted by $$F_0/k$$

(B) angular frequency $$\sqrt{(k+F_0)/m}$$ and the same equilibrium

(C) angular frequency $$\sqrt{k/(m+F_0/g)}$$ and an equilibrium shifted by $$F_0/k$$

(D) no simple harmonic motion because the net force is not proportional to $$x$$


:::solution
The net force is

$$
F_{\text{net}}=F_0-kx.
$$

Equilibrium occurs where this is zero:

$$
F_0-kx_{\text{eq}}=0
\quad\Rightarrow\quad
x_{\text{eq}}=\frac{F_0}{k}.
$$


Let $$u=x-x_{\text{eq}}$$ be displacement from the new equilibrium. Then the net force becomes $$F=-ku$$, so the angular frequency is still $$\omega=\sqrt{k/m}$$. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
5. A bead slides without friction on a circular hoop of radius $$R$$ in a vertical plane. Near the bottom of the hoop, the coordinate along the arc is $$s=R\theta$$. The bead's small-oscillation angular frequency is

(A) $$\sqrt{g/R}$$

(B) $$\sqrt{R/g}$$

(C) $$g/R$$

(D) $$\sqrt{2g/R}$$


:::solution
Near the bottom of the hoop, the tangential component of gravity is approximately

$$
F_t=-mg\sin\theta\approx -mg\theta.
$$

Since arc displacement is $$s=R\theta$$, this becomes

$$
F_t\approx -mg\frac{s}{R}.
$$


Thus

$$
ma_s=-\frac{mg}{R}s,
$$

so $$\omega^2=g/R$$ and $$\omega=\sqrt{g/R}$$. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
6. A mass $$m$$ is attached between two horizontal springs with constants $$k_1$$ and $$k_2$$ on a frictionless track, one spring on each side. Both springs are relaxed when the mass is at $$x=0$$. If the mass is displaced slightly, its angular frequency is

(A) $$\sqrt{\dfrac{k_1+k_2}{m}}$$

(B) $$\sqrt{\dfrac{k_1k_2}{m(k_1+k_2)}}$$

(C) $$\sqrt{\dfrac{k_1-k_2}{m}}$$

(D) $$\sqrt{\dfrac{k_1}{m}}+\sqrt{\dfrac{k_2}{m}}$$


:::solution
If the mass is displaced right by $$x$$, the left spring is stretched and pulls left, while the right spring is compressed and also pushes left.

The restoring forces add:

$$
F= -k_1x-k_2x=-(k_1+k_2)x.
$$

So the effective spring constant is $$k_1+k_2$$, and

$$
\omega=\sqrt{\frac{k_1+k_2}{m}}.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
7. A block attached to a spring oscillates on a frictionless table. The block is replaced by two identical blocks glued together, and the amplitude is doubled. The maximum acceleration changes by a factor of

(A) $$1/\sqrt{2}$$

(B) $$1/2$$

(C) $$\sqrt{2}$$

(D) $$1$$


:::solution
For a spring oscillator,

$$
a=-\omega^2x,
\qquad
\omega^2=\frac{k}{m}.
$$

The maximum acceleration happens at the endpoints where $$\lvert x\rvert=A$$:

$$
a_{\max}=A\frac{k}{m}.
$$


The new amplitude is $$2A$$, but the new mass is $$2m$$, so

$$
a_{\max,new}=(2A)\frac{k}{2m}=A\frac{k}{m}.
$$

The factor is $$1$$, so the answer is $$\boxed{\text{D}}$$.
:::
::::

::::problem
8. A mass $$m$$ on a vertical spring oscillates about its equilibrium position with period $$T$$. At the instant the mass passes through equilibrium moving downward, a second identical mass is gently attached. Immediately after attachment, the new equilibrium position is

(A) unchanged

(B) lower by $$mg/k$$

(C) lower by $$2mg/k$$

(D) higher by $$mg/k$$


:::solution
The equilibrium extension of a vertical spring is found by balancing spring force with weight.

Before attachment,

$$
kx_1=mg
\quad\Rightarrow\quad
x_1=\frac{mg}{k}.
$$

After an identical mass is attached, the total mass is $$2m$$, so

$$
kx_2=2mg
\quad\Rightarrow\quad
x_2=\frac{2mg}{k}.
$$

The equilibrium position shifts lower by $$x_2-x_1=mg/k$$. The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
9. A pendulum bob of mass $$m$$ and length $$L$$ is also attached to a horizontal spring of constant $$k$$ that is relaxed when the bob hangs vertically. For small angles, compared with the same pendulum without the spring, the period is

(A) larger

(B) smaller

(C) unchanged

(D) zero because the forces cancel


:::solution
For small angles, the bob moves horizontally by approximately $$x=L\theta$$. The horizontal spring force is then approximately $$F_s=-kL\theta$$.

This spring force adds an extra restoring torque in the same direction as gravity's restoring torque. More restoring torque means a larger effective angular frequency. Since

$$
T=\frac{2\pi}{\omega},
$$

a larger $$\omega$$ means a smaller period. The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
10. A particle moves in the potential $$U(x)=\dfrac{1}{2}kx^2+\epsilon x^4$$, where $$k,\epsilon>0$$. For sufficiently small oscillations about $$x=0$$, the angular frequency is

(A) $$\sqrt{k/m}$$

(B) $$\sqrt{(k+4\epsilon)/m}$$

(C) $$\sqrt{\epsilon/m}$$

(D) dependent on amplitude even in the small-amplitude limit


:::solution
For very small oscillations about equilibrium, approximate the potential by its quadratic part. The quartic term is much smaller than $$x^2$$ near $$x=0$$.


More formally,

$$
\omega=\sqrt{\frac{U''(0)}{m}}.
$$

For

$$
U(x)=\frac12kx^2+\epsilon x^4,
$$

we have $$U''(0)=k$$. Therefore

$$
\omega=\sqrt{\frac{k}{m}}.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
11. A particle moves near $$x=0$$ in the potential $$U(x)=U_0+ax^2+bx^3+cx^4$$, where $$a>0$$. For sufficiently small oscillations, the angular frequency is

(A) $$\sqrt{a/m}$$

(B) $$\sqrt{2a/m}$$

(C) $$\sqrt{6b/m}$$

(D) $$\sqrt{12c/m}$$


:::solution
For small oscillations near an equilibrium, the angular frequency depends on the curvature of the potential at that point:

$$
\omega=\sqrt{\frac{U''(0)}{m}}.
$$

Differentiate twice:

$$
U'(x)=2ax+3bx^2+4cx^3,
$$

$$
U''(x)=2a+6bx+12cx^2.
$$

At $$x=0$$,

$$
U''(0)=2a.
$$

Thus $$\omega=\sqrt{2a/m}$$, and the answer is $$\boxed{\text{B}}$$.

The cubic and quartic terms can affect larger-amplitude motion, but in the small-amplitude limit their contribution to the curvature at $$x=0$$ does not change the leading frequency.
:::
::::

::::problem
12. A solid cylinder of mass $$M$$ and radius $$R$$ is attached at its center to a horizontal spring of constant $$k$$ and rolls without slipping. Its angular frequency is

(A) $$\sqrt{k/M}$$

(B) $$\sqrt{2k/M}$$

(C) $$\sqrt{2k/(3M)}$$

(D) $$\sqrt{3k/(2M)}$$


:::solution
The spring pulls on the cylinder's center, but because the cylinder rolls, some energy goes into rotation.

The kinetic energy is

$$
K=\frac12M\dot x^2+\frac12I\left(\frac{\dot x}{R}\right)^2.
$$

For a solid cylinder, $$I=\frac12MR^2$$, so the effective inertia is

$$
M+\frac{I}{R^2}=M+\frac12M=\frac32M.
$$

Therefore

$$
\omega=\sqrt{\frac{k}{(3/2)M}}=\sqrt{\frac{2k}{3M}}.
$$

The answer is $$\boxed{\text{C}}$$.
:::
::::

### FRQ

::::frq{id=ap-physics-c-mechanics-oscillations-1}
1. A solid cylinder of mass $$M$$ and radius $$R$$ rests on a rough horizontal surface and rolls without slipping. A light spring of constant $$k$$ is attached to the cylinder's center, and the other end is fixed to a wall. The cylinder is displaced a small distance $$A$$ from equilibrium and released from rest.

   $$(A)$$ Using energy, derive an expression for the angular frequency of the oscillation in terms of $$M$$ and $$k$$.

   $$(B)$$ Determine the maximum static friction force needed during the motion.

   $$(C)$$ Find the minimum coefficient of static friction required for rolling without slipping for the entire motion.

   $$(D)$$ Suppose the cylinder is replaced by a thin hoop with the same $$M$$ and $$R$$. Without redoing the full calculation, determine whether the period increases, decreases, or stays the same, and justify your answer.


:::solution
$$(A)$$ Use energy with the rolling constraint. The cylinder's center moves with speed $$\dot x$$, and rolling without slipping gives $$\omega_{\text{rot}}=\dot x/R$$.

The kinetic energy is

$$
K=\frac12M\dot x^2+\frac12I\omega_{\text{rot}}^2.
$$

For a solid cylinder, $$I=\frac12MR^2$$, so

$$
K=\frac12M\dot x^2+\frac12\left(\frac12MR^2\right)\left(\frac{\dot x}{R}\right)^2
=\frac34M\dot x^2.
$$

Write this as $$K=\frac12M_{\text{eff}}\dot x^2$$, so $$M_{\text{eff}}=3M/2$$. The spring potential is $$U=\frac12kx^2$$, so

$$
\boxed{\omega=\sqrt{\frac{k}{M_{\text{eff}}}}=\sqrt{\frac{2k}{3M}}}.
$$

$$(B)$$ The center acceleration is

$$
a=-\omega^2x=-\frac{2k}{3M}x.
$$

Static friction supplies the torque for angular acceleration. Using $$fR=I\alpha$$ and $$a=\alpha R$$,

$$
f=\frac{I}{R^2}\lvert a\rvert=\frac{M}{2}\lvert a\rvert.
$$

The largest acceleration occurs at $$\lvert x\rvert=A$$, so

$$
\boxed{f_{\max}=\frac{M}{2}\left(\frac{2k}{3M}A\right)=\frac{kA}{3}}.
$$

$$(C)$$ Rolling without slipping requires the needed static friction to be no larger than the maximum available static friction:

$$
f_{\max}\le \mu_sMg.
$$

Thus

$$
\frac{kA}{3}\le \mu_sMg,
$$

so

$$
\boxed{\mu_s\ge \frac{kA}{3Mg}}.
$$

$$(D)$$ A hoop has larger rotational inertia, $$I=MR^2$$, so the effective inertia $$M+I/R^2$$ is larger. A larger effective inertia with the same spring constant means smaller angular frequency and therefore a longer period.
:::
::::

::::frq{id=ap-physics-c-mechanics-oscillations-2}
2. A bead of mass $$m$$ slides without friction on a rigid circular wire of radius $$R$$ fixed in a vertical plane. The bead is also attached to a light spring of constant $$k$$ and negligible relaxed length whose other end is fixed at the top of the circle. Let $$\theta$$ be the bead's angular displacement from the bottom of the circle.

   $$(A)$$ Write the bead's gravitational potential energy and spring potential energy as functions of $$\theta$$, taking the bottom of the circle as zero gravitational potential.

   $$(B)$$ Find the condition on $$k$$ and $$R$$ for the bottom of the circle to be a stable equilibrium.

   $$(C)$$ For small oscillations about the bottom, derive the angular frequency in terms of $$m$$, $$g$$, $$R$$, and $$k$$.

   $$(D)$$ Describe qualitatively how the equilibrium position changes if the spring constant is made very large.


:::solution
$$(A)$$ Taking the bottom as zero gravitational potential, the bead rises a height $$R(1-\cos\theta)$$ when it is at angle $$\theta$$ from the bottom.


So

$$
\boxed{U_g=mgR(1-\cos\theta)}.
$$

The spring has negligible relaxed length, so its potential is $$\frac12k\ell^2$$. The distance from the top of the circle to the bead is the chord length. The central angle between the top and the bead is $$\pi-\theta$$, giving

$$
\ell^2=2R^2(1-\cos(\pi-\theta))=2R^2(1+\cos\theta).
$$

Thus

$$
\boxed{U_s=\frac12k\ell^2=kR^2(1+\cos\theta)}.
$$

$$(B)$$ The bottom is stable if the total potential has positive curvature at $$\theta=0$$. The total potential is

$$
U(\theta)=mgR(1-\cos\theta)+kR^2(1+\cos\theta).
$$

Differentiate twice:

$$
U''(\theta)=mgR\cos\theta-kR^2\cos\theta.
$$

At the bottom,

$$
U''(0)=mgR-kR^2.
$$

For stability,

$$
\boxed{kR<mg}.
$$

$$(C)$$ For small angular motion, the kinetic energy is

$$
K=\frac12mR^2\dot\theta^2.
$$

Near stable equilibrium, $$U\approx U(0)+\frac12U''(0)\theta^2$$, so

$$
\omega=\sqrt{\frac{U''(0)}{mR^2}}.
$$

Therefore

$$
\boxed{\omega=\sqrt{\frac{g}{R}-\frac{k}{m}}}.
$$

$$(D)$$ If $$k$$ is very large, the spring strongly favors making its length small, which pulls the bead toward the top anchor. Then the bottom is no longer stable, and the stable equilibrium shifts upward away from the bottom.
:::
::::

::::frq{id=ap-physics-c-mechanics-oscillations-3}
3. A student studies a cart-spring oscillator on a horizontal track. The cart of mass $$M$$ has a small block of mass $$m$$ resting on top of it. The coefficient of static friction between the block and cart is $$\mu_s$$. The cart is pulled to amplitude $$A$$ and released from rest; the block does not slip at first.

   $$(A)$$ Derive the period of the combined motion while the block does not slip.

   $$(B)$$ Determine the maximum amplitude $$A_{\max}$$ for which the block can remain at rest relative to the cart throughout the motion.

   $$(C)$$ The student measures the period for several added top-block masses $$m$$. Describe a graph that could be used to determine the spring constant $$k$$ from the data, including what should be plotted on each axis.

   $$(D)$$ If the block begins to slip near the endpoints of the motion, explain whether the measured period should be expected to match the expression from part $$(A)$$. Your explanation should refer to the forces on the two objects, not just energy loss.


:::solution
$$(A)$$ If the top block does not slip, the cart and block move together as one object of total mass $$M+m$$.


The oscillator is therefore a spring attached to mass $$M+m$$, so

$$
\boxed{T=2\pi\sqrt{\frac{M+m}{k}}}.
$$

$$(B)$$ The largest acceleration in SHM occurs at the endpoints:

$$
a_{\max}=A\omega^2=A\frac{k}{M+m}.
$$

The only horizontal force on the top block is static friction, so static friction must provide

$$
f_s=ma_{\max}=m\frac{Ak}{M+m}.
$$

For no slipping, this must not exceed $$\mu_smg$$:

$$
m\frac{Ak}{M+m}\le \mu_smg.
$$

Cancel $$m$$ and solve for $$A$$:

$$
\boxed{A_{\max}=\frac{\mu_sg(M+m)}{k}}.
$$

$$(C)$$ Square the period equation:

$$
T^2=\frac{4\pi^2}{k}(M+m).
$$

So a graph of $$T^2$$ on the vertical axis versus $$M+m$$ on the horizontal axis should be linear.


The slope is $$4\pi^2/k$$, so

$$
\boxed{k=\frac{4\pi^2}{\text{slope}}}.
$$

$$(D)$$ If the block slips, the two masses no longer share one acceleration. Static friction is no longer whatever value is needed to enforce common motion; once slipping begins, the interaction force changes and the cart is not simply attached to a single combined mass $$M+m$$. Therefore the measured period should not match the expression in part $$(A)$$.
:::
::::
