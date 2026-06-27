---
title: "Oscillations"
next: false
sidebar:
  order: 7
---

# Oscillations

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

<div class="theorem-box">

**Definition (Simple Harmonic Motion).** A system is in simple harmonic motion when its acceleration is proportional to displacement and points toward equilibrium, $$a = -\omega^2 x$$, equivalently $$\dfrac{d^2x}{dt^2} + \omega^2x = 0$$.

</div>

The general solution is sinusoidal:

$$
x(t)=A\cos(\omega t+\phi)
$$

or equivalently

$$
x(t)=A\sin(\omega t+\phi).
$$

The constants $$A$$ and $$\phi$$ are set by initial position and velocity. Concretely, from $$x(t)=A\cos(\omega t+\phi)$$ and $$v(t)=-A\omega\sin(\omega t+\phi)$$, evaluating at $$t=0$$ gives

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

<div class="theorem-box">

**Proof (Sinusoidal Motion Solves SHM).** The SHM differential equation is

$$
\frac{d^2x}{dt^2}+\omega^2x=0.
$$

Try

$$
x(t)=A\cos(\omega t+\phi).
$$

Differentiate once:

$$
\frac{dx}{dt}=-A\omega\sin(\omega t+\phi).
$$

Differentiate again:

$$
\frac{d^2x}{dt^2}=-A\omega^2\cos(\omega t+\phi).
$$

Since $$x=A\cos(\omega t+\phi)$$,

$$
\frac{d^2x}{dt^2}=-\omega^2x.
$$

So

$$
\frac{d^2x}{dt^2}+\omega^2x=0.
$$

Thus sinusoidal motion is exactly the motion produced by a restoring acceleration proportional to $$-x$$.

</div>

<div class="theorem-box">

**Example.** A $$0.50\ \text{kg}$$ mass on a spring with $$k=200\ \text{N/m}$$ is released so that at $$t=0$$ it is at $$x_0=+0.030\ \text{m}$$ and moving with $$v_0=-0.80\ \text{m/s}$$ (back toward equilibrium). Write $$x(t)=A\cos(\omega t+\phi)$$.

First the angular frequency:

$$
\omega=\sqrt{\frac{k}{m}}=\sqrt{\frac{200}{0.50}}=20\ \text{rad/s}.
$$

The amplitude combines position and velocity contributions:

$$
A=\sqrt{x_0^2+\left(\frac{v_0}{\omega}\right)^2}=\sqrt{(0.030)^2+\left(\frac{-0.80}{20}\right)^2}=\sqrt{(0.030)^2+(0.040)^2}=0.050\ \text{m}.
$$

For the phase, use both initial equations rather than $$\tan\phi$$ alone:

$$
\cos\phi=\frac{x_0}{A}=\frac{0.030}{0.050}=0.60,\qquad \sin\phi=-\frac{v_0}{A\omega}=-\frac{-0.80}{(0.050)(20)}=+0.80.
$$

Since $$\cos\phi>0$$ and $$\sin\phi>0$$, $$\phi$$ is in the first quadrant:

$$
\phi=\arccos(0.60)\approx 0.93\ \text{rad}.
$$

So $$x(t)=(0.050\ \text{m})\cos\!\big((20\ \text{rad/s})\,t+0.93\big)$$. Note the velocity being negative forced $$\sin\phi>0$$; had we blindly used $$\arctan$$, we could have picked the wrong quadrant and gotten the sign of the initial velocity backwards.

</div>

---

## Velocity and Acceleration in SHM

If

$$
x(t)=A\cos(\omega t+\phi),
$$

then

$$
v(t)=\frac{dx}{dt}=-A\omega\sin(\omega t+\phi),
$$

and

$$
a(t)=\frac{d^2x}{dt^2}=-A\omega^2\cos(\omega t+\phi)=-\omega^2x.
$$

The maximum speed is

$$
v_{\max}=A\omega,
$$

and the maximum acceleration magnitude is

$$
a_{\max}=A\omega^2.
$$

Speed is greatest at equilibrium and zero at the turning points.

---

## Period and Frequency

The angular frequency $$\omega$$ is related to frequency and period by

$$
\omega = 2\pi f = \frac{2\pi}{T}.
$$

Thus

$$
T = \frac{2\pi}{\omega}.
$$

Period is the time for one full cycle. Frequency is cycles per second, measured in hertz.

---

## Mass-Spring Oscillator

For a mass on an ideal spring,

$$
F=-kx.
$$

Newton's second law gives

$$
m\frac{d^2x}{dt^2}=-kx,
$$

so

$$
\omega=\sqrt{\frac{k}{m}}.
$$

The period is

$$
T=2\pi\sqrt{\frac{m}{k}}.
$$

The period does not depend on amplitude for an ideal spring.

<div class="theorem-box">

**Proof (Mass-Spring Period).** Hooke's law gives

$$
F=-kx.
$$

Newton's second law gives

$$
m\frac{d^2x}{dt^2}=-kx.
$$

Rearrange:

$$
\frac{d^2x}{dt^2}+\frac{k}{m}x=0.
$$

Compare this to the SHM form

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

Many AP setups attach a mass to more than one spring. Each combination behaves like a single ideal spring with an **effective spring constant** $$k_{\text{eff}}$$, and the period is then $$T=2\pi\sqrt{m/k_{\text{eff}}}$$.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[decorate, decoration={coil,aspect=0.45,segment length=5pt,amplitude=4pt}, thick] (-4,1.2) -- (-2,1.2); \draw[decorate, decoration={coil,aspect=0.45,segment length=5pt,amplitude=4pt}, thick] (-2,1.2) -- (0,1.2); \draw[fill=gray!20] (0,0.8) rectangle (0.8,1.6); \node at (-2,1.8) {series};
\draw[decorate, decoration={coil,aspect=0.45,segment length=5pt,amplitude=4pt}, thick] (-4,-0.5) -- (-1.5,-0.5); \draw[decorate, decoration={coil,aspect=0.45,segment length=5pt,amplitude=4pt}, thick] (-4,-1.2) -- (-1.5,-1.2); \draw[fill=gray!20] (-1.5,-1.5) rectangle (-0.7,-0.2); \node at (-2.4,-1.85) {parallel};
\end{tikzpicture}
```



<div class="theorem-box">

**Proof (series and parallel spring constants).** Treat two ideal springs $$k_1$$ and $$k_2$$ supporting one mass.

*Parallel* (both springs connect the mass to the wall side by side, so both stretch by the same displacement $$x$$). Each pulls back, and the forces add:

$$
F=-k_1 x-k_2 x=-(k_1+k_2)x.
$$

Comparing to $$F=-k_{\text{eff}}x$$,

$$
k_{\text{eff}}=k_1+k_2.
$$

Parallel springs are *stiffer* than either alone.

*Series* (the springs are joined end to end, so the same force $$F$$ is transmitted through both, but their stretches add). Each spring stretches by $$x_i=F/k_i$$ in magnitude, and the total stretch is

$$
x=x_1+x_2=\frac{F}{k_1}+\frac{F}{k_2}=F\left(\frac{1}{k_1}+\frac{1}{k_2}\right).
$$

Since $$k_{\text{eff}}=F/x$$,

$$
\frac{1}{k_{\text{eff}}}=\frac{1}{k_1}+\frac{1}{k_2}.
$$

Series springs are *softer* than either alone. (Note this is the opposite of how resistors combine, and matches how capacitors combine — worth remembering by analogy.)

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

Energy continuously transfers between kinetic energy and spring potential energy while total mechanical energy remains constant if damping is negligible.

Setting the two expressions for $$E$$ equal gives a useful relation between speed and position at any point in the motion:

$$
\frac{1}{2}mv^2+\frac{1}{2}kx^2=\frac{1}{2}kA^2
\quad\Longrightarrow\quad
v(x)=\pm\omega\sqrt{A^2-x^2}.
$$

This recovers $$v_{\max}=A\omega$$ at $$x=0$$ and $$v=0$$ at $$x=\pm A$$ without ever solving the differential equation.

<div class="theorem-box">

**Proof (SHM from energy conservation).** For an undamped mass-spring system the total mechanical energy is constant:

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

which is exactly the SHM equation with $$\omega=\sqrt{k/m}$$. Energy conservation alone, differentiated once, reproduces the equation of motion — a clean alternative to writing $$F=ma$$ directly.

</div>

<div class="theorem-box">

**Example.** A block oscillates on a spring with amplitude $$A=0.12\ \text{m}$$. At what displacement $$x$$ is the kinetic energy equal to the potential energy, and what fraction of the maximum speed does the block have there?

Total energy is $$E=\tfrac{1}{2}kA^2$$. When $$K=U$$, each is half the total, so

$$
U=\frac{1}{2}kx^2=\frac{1}{2}E=\frac{1}{2}\cdot\frac{1}{2}kA^2.
$$

Cancel $$\tfrac{1}{2}k$$:

$$
x^2=\frac{A^2}{2}\quad\Longrightarrow\quad x=\pm\frac{A}{\sqrt{2}}=\pm\frac{0.12}{\sqrt{2}}\approx \pm0.085\ \text{m}.
$$

For the speed, $$K=\tfrac{1}{2}E=\tfrac{1}{2}\cdot\tfrac{1}{2}mv_{\max}^2$$, so $$v^2=\tfrac{1}{2}v_{\max}^2$$ and

$$
v=\frac{v_{\max}}{\sqrt{2}}\approx 0.71\,v_{\max}.
$$

The equal-energy point sits at about $$71\%$$ of the amplitude, and the speed there is about $$71\%$$ of the maximum — the same factor $$1/\sqrt2$$, which is no coincidence given the symmetric $$x^2$$ and $$v^2$$ structure of the energy.

</div>

---

## Small Oscillations About Any Potential Minimum

The mass-spring system is just the simplest member of a much larger family. Recall that a one-dimensional conservative force is $$F_x=-dU/dx$$ and that a **stable equilibrium** sits at a local minimum of $$U(x)$$, where $$U'(x_0)=0$$ and $$U''(x_0)>0$$. The key result is that *any* such minimum looks like a spring for small displacements, with an effective spring constant equal to the curvature of $$U$$:

$$
k_{\text{eff}}=U''(x_0),\qquad \omega=\sqrt{\frac{U''(x_0)}{m}}.
$$

<div class="theorem-box">

**Proof (small oscillations are SHM).** Let a particle of mass $$m$$ move in a potential $$U(x)$$ with a stable equilibrium at $$x_0$$, so $$U'(x_0)=0$$ and $$U''(x_0)>0$$. Expand $$U$$ in a Taylor series about $$x_0$$, writing the small displacement $$s=x-x_0$$:

$$
U(x)=U(x_0)+U'(x_0)\,s+\frac{1}{2}U''(x_0)\,s^2+\cdots
$$

The constant $$U(x_0)$$ does not affect forces, and $$U'(x_0)=0$$ by the equilibrium condition. For small $$s$$ we keep only the quadratic term:

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

So near the bottom of any smooth potential well, the motion is simple harmonic — the parabola $$\tfrac12 k_{\text{eff}}s^2$$ is the local approximation to *every* potential minimum. This is why SHM appears everywhere from molecular bonds to pendulums.

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

## Simple Pendulum

For a simple pendulum of length $$L$$ and small angular displacement $$\theta$$,

$$
\tau \approx -mgL\theta.
$$

Using $$I=mL^2$$,

$$
mL^2\frac{d^2\theta}{dt^2}=-mgL\theta,
$$

so

$$
\frac{d^2\theta}{dt^2}+\frac{g}{L}\theta=0.
$$

Therefore

$$
\omega=\sqrt{\frac{g}{L}},
$$

and

$$
T=2\pi\sqrt{\frac{L}{g}}.
$$

This formula assumes the small-angle approximation

$$
\sin\theta \approx \theta
$$

when $$\theta$$ is measured in radians. Like the ideal mass-spring period, the simple-pendulum period is independent of the swinging mass and (to this approximation) independent of amplitude.

<div class="theorem-box">

**Example.** How long must a simple pendulum be so that its period is exactly $$T=2.0\ \text{s}$$ (a "seconds pendulum," which ticks once each half-period)? Use $$g=9.8\ \text{m/s}^2$$.

Start from $$T=2\pi\sqrt{L/g}$$ and solve for $$L$$:

$$
L=\frac{gT^2}{4\pi^2}=\frac{(9.8)(2.0)^2}{4\pi^2}=\frac{39.2}{39.48}\approx 0.99\ \text{m}.
$$

A pendulum about one meter long swings with a two-second period, which is why old grandfather clocks are roughly that tall. If this clock were taken to the Moon, where $$g$$ is about $$1/6$$ as large, the period would grow by $$\sqrt{6}\approx2.4$$ and the clock would run far too slowly.

</div>

---

## Physical Pendulum

A rigid body swinging about a pivot is a **physical pendulum**. If the center of mass is distance $$d$$ from the pivot,


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\fill (0,2) circle (2pt) node[above] {pivot};
\draw[thick] (0,2) -- (1,-0.7); \draw[fill=gray!20] (0.65,-1.1) rectangle (1.35,-0.3);
\fill[red] (1,-0.7) circle (2pt) node[right] {CM};
\draw[->, red, thick] (1,-0.7) -- (1,-2.1) node[below] {$mg$};
\draw[dashed] (0,2) -- (0,-1.2); \draw (0,1.1) arc[start angle=-90,end angle=-70,radius=0.9] node[midway,below] {$\theta$};
\draw[<->] (0.12,1.65) -- (0.9,-0.45) node[midway,right] {$d$};
\end{tikzpicture}
```


$$
\tau \approx -mgd\theta.
$$

With rotational inertia $$I$$ about the pivot,

$$
I\frac{d^2\theta}{dt^2}=-mgd\theta.
$$

Thus

$$
\omega=\sqrt{\frac{mgd}{I}},
$$

and

$$
T=2\pi\sqrt{\frac{I}{mgd}}.
$$

Here $$I$$ is the rotational inertia about the *pivot*, not about the center of mass; use the parallel-axis theorem when needed (see [rotational dynamics](/notes/ap/ap-physics-c-mechanics/torque/)). The simple pendulum is the special case where all mass sits at distance $$L$$ from the pivot, giving $$I=mL^2$$ and $$d=L$$, which reduces $$T$$ back to $$2\pi\sqrt{L/g}$$.

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

---

## SHM From a Restoring Force: Floating and Fluid Systems

Not every oscillator is a spring or a pendulum.

:::strategy{title="Finding ω for any oscillator"}
The general recipe is always the same: displace the system by a small amount, find the net restoring force as a function of displacement, write it as $$F=-(\text{const})\,x$$, and read off $$\omega^2=\text{const}/m$$.
:::

<div class="theorem-box">

**Example.** A solid cylinder of cross-sectional area $$A$$, height $$h$$, and density $$\rho_{\text{obj}}$$ floats upright in a liquid of density $$\rho_{\text{liq}}$$. It is pushed down slightly and released. Show the motion is SHM and find $$\omega$$.

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

## Damping and Driving

Real oscillators lose mechanical energy to nonconservative forces. With linear (velocity-proportional) damping, a common model is

$$
m\frac{d^2x}{dt^2}+b\frac{dx}{dt}+kx=0,
$$

where $$b$$ is the damping coefficient. Solving this equation in full uses complex exponentials and for AP Physics C you only need the *qualitative* behavior and the regimes below.

### Damping regimes

The outcome depends on how the damping $$b$$ compares to a critical value $$b_c=2\sqrt{mk}=2m\omega_0$$, where $$\omega_0=\sqrt{k/m}$$ is the *natural* (undamped) angular frequency:

- **Underdamped** ($$b<b_c$$): the system still oscillates, but the amplitude decays exponentially as $$e^{-(b/2m)t}$$, riding inside a slowly shrinking envelope. The oscillation frequency is slightly *lower* than $$\omega_0$$. Most real springs, pendulums, and tuning forks are underdamped.
- **Critically damped** ($$b=b_c$$): the system returns to equilibrium as quickly as possible *without* overshooting or oscillating. This is the ideal target for things like door closers, car shock absorbers, and analog meter needles.
- **Overdamped** ($$b>b_c$$): the system also does not oscillate, but it returns to equilibrium *slowly*, sluggishly creeping back because the large drag resists all motion. A spoon in honey is overdamped.

In every damped case the mechanical energy decreases over time; for underdamped motion the energy of the envelope falls roughly as $$e^{-(b/m)t}$$ (twice the amplitude exponent, since energy goes as amplitude squared).

### Quality factor

The **quality factor** $$Q$$ measures how lightly damped an oscillator is — qualitatively, how many cycles it rings before dying out. A high $$Q$$ means very little energy is lost per cycle (a struck wine glass or a quartz crystal, which ring for many oscillations), while a low $$Q$$ means the motion is damped out within a cycle or two. Roughly, $$Q$$ counts the number of radians of oscillation the system completes before its energy drops by a factor of $$e$$. Underdamped systems have $$Q>\tfrac12$$; critical damping corresponds to $$Q=\tfrac12$$.

### Driving and resonance

A driven oscillator has an external periodic force:


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[axis lines=left,width=8.5cm,height=5cm,xmin=0,xmax=5,ymin=0,ymax=5,xlabel={driving frequency},ylabel={amplitude},xtick=\empty,ytick=\empty]
\addplot[blue,very thick,samples=160,domain=0:5]{4/(1+8*(x-2.2)^2)+0.25};
\addplot[red,very thick,samples=160,domain=0:5]{2.5/(1+2.2*(x-2.2)^2)+0.25};
\node[blue] at (axis cs:2.2,4.5) {low damping}; \node[red] at (axis cs:3.6,1.5) {more damping};
\end{axis}
\end{tikzpicture}
```


$$
m\frac{d^2x}{dt^2}+b\frac{dx}{dt}+kx=F_0\cos(\omega_d t).
$$

After any initial transient dies away, the system settles into a steady oscillation *at the driving frequency* $$\omega_d$$, not at its own natural frequency. The steady-state amplitude depends strongly on how close $$\omega_d$$ is to $$\omega_0$$:

- **Resonance** occurs when the driving frequency is near the natural frequency $$\omega_0$$. There the oscillator absorbs energy most efficiently and the steady-state amplitude reaches a sharp maximum.
- **Damping controls the peak.** Light damping (high $$Q$$) gives a tall, narrow resonance peak; heavy damping (low $$Q$$) gives a short, broad peak and shifts the peak slightly below $$\omega_0$$.
- Far from resonance, the response is small: drive much slower than $$\omega_0$$ and the mass just tracks the force; drive much faster and the mass can barely keep up.

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
| Energy in SHM | $$E=\tfrac12 kA^2=\tfrac12 m v_{\max}^2$$ |
| Small oscillations near $$U$$ minimum | $$\omega=\sqrt{U''(x_0)/m}$$ |
| Simple pendulum | $$T=2\pi\sqrt{L/g}$$ |
| Physical pendulum | $$T=2\pi\sqrt{I/(mgd)}$$ |
| Critical damping | $$b_c=2\sqrt{mk}$$ |
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
