---
title: "Advanced Mechanics"
sidebar:
  order: 4
---

---

## Lagrangian mechanics

Newton's laws are written in terms of forces and vectors. For systems with constraints — a bead on a wire, a pendulum, a rolling disk — forces of constraint are unknown and annoying: you must introduce a normal force or tension, solve for it, and then discard it. The **Lagrangian** formulation sidesteps all of that by working with **energy** and a set of *freely chosen* coordinates.

### Generalized coordinates and degrees of freedom

A system's configuration is specified by a set of **generalized coordinates** $$q_1,\dots,q_n$$ (e.g. polar, spherical, etc.) that define convenient parameters (lengths, angles, arc lengths) that pin down where everything is. The number $$n$$ of independent coordinates is the number of **degrees of freedom**: the total number of coordinates minus the number of independent (holonomic) constraints. A pendulum bob in a plane has two Cartesian coordinates but one constraint (fixed string length), so $$n=1$$, and the natural coordinate is the angle $$\theta$$.

The whole point is to choose coordinates that build the constraints in automatically, so constraint forces never appear. A bead confined to a wire of shape $$y=f(x)$$ has one degree of freedom; instead of carrying $$x$$ and $$y$$ plus a normal force, you carry the single arc length (or $$x$$) and the constraint is *already enforced* by the parametrization. This is the structural advantage over Newton: constraints are absorbed into the choice of coordinates rather than fought as unknown forces.

### The Euler–Lagrange equations

Define the **Lagrangian** as kinetic minus potential energy,

$$
L(q,\dot q,t)=T-V,
$$

expressed entirely in terms of the generalized coordinates and their time derivatives.

<div class="theorem-box">

**Theorem (Euler–Lagrange equations).** The motion is governed by one Euler–Lagrange equation per coordinate:

$$
\ \frac{d}{dt}\!\left(\frac{\partial L}{\partial \dot q_i}\right)-\frac{\partial L}{\partial q_i}=0\ .
$$

</div>

Why the *difference* $$T-V$$ rather than the more natural-looking sum? Heuristically, $$\partial L/\partial \dot q_i$$ plays the role of a momentum and $$\partial L/\partial q_i$$ plays the role of a force; for $$L=\tfrac12 m\dot x^2 - V(x)$$ the equation is literally $$\tfrac{d}{dt}(m\dot x) = -V'(x)$$, i.e. $$ma=F$$. The minus sign is exactly what makes the potential act as a restoring "force" $$-\partial V/\partial q$$ while the kinetic term supplies the inertia. The formula derives from the **principle of least action**, which states that any process aims to minimize a quantity called **action**.

<div class="theorem-box">

**Proof (Euler-Lagrange equation).** Define the **action** as the time integral of the Lagrangian along a path $$q(t)$$ between fixed endpoints $$q(t_1)$$ and $$q(t_2)$$:

$$
S[q]=\int_{t_1}^{t_2}L(q,\dot q,t)\,dt.
$$

Physically, $$S$$ assigns a single number to each *entire trajectory*, not to an instant. Nature selects the path that makes $$S$$ **stationary** ($$\delta S=0$$) under small variations $$q(t)\to q(t)+\delta q(t)$$ that vanish at the endpoints — the path is an extremum (usually a minimum for short times), so neighboring wiggled paths cost the same $$S$$ to first order. Expanding,

$$
\delta S=\int_{t_1}^{t_2}\left(\frac{\partial L}{\partial q}\,\delta q+\frac{\partial L}{\partial \dot q}\,\delta\dot q\right)dt.
$$

Integrate the second term by parts, using $$\delta\dot q=\tfrac{d}{dt}\delta q$$ and $$\delta q=0$$ at the endpoints:

$$
\delta S=\int_{t_1}^{t_2}\left(\frac{\partial L}{\partial q}-\frac{d}{dt}\frac{\partial L}{\partial \dot q}\right)\delta q\,dt.
$$

For this to vanish for **every** allowed $$\delta q$$, the bracket must be zero everywhere — that is the Euler–Lagrange equation. For a single particle with $$L=\tfrac12 m\dot x^2-V(x)$$ it reduces to $$m\ddot x=-V'(x)$$, ordinary Newton. I highly recommend watching the Veritasium videos on the principle of least action.

</div>

### General process

:::strategy
1. Pick generalized coordinates that respect the constraints.
2. Write $$T$$ and $$V$$ in those coordinates; form $$L=T-V$$.
3. For each coordinate, compute $$\partial L/\partial \dot q_i$$ and $$\partial L/\partial q_i$$ and assemble the Euler–Lagrange equation.
4. Read off conserved quantities (next section) before grinding through the algebra.
:::

The hardest step in practice is almost always step 2: getting $$T$$ right when the coordinates are curvilinear or the constraint is moving. The reliable method is to write each particle's Cartesian position in terms of the $$q_i$$, differentiate to get $$\dot x,\dot y,\dot z$$, and then form $$T=\tfrac12 m(\dot x^2+\dot y^2+\dot z^2)$$.

<div class="theorem-box">

**Example.** A bead of mass $$m$$ slides without friction on a circular hoop of radius $$R$$ that is forced to spin about its vertical diameter at constant angular speed $$\Omega$$. Find the angular frequency of the bead's oscillation $$\omega$$, assuming it is at a stable equilibrium.

Let $$\theta$$ be the angle measured from the bottom of the hoop. Since the hoop's rotation is *imposed*, the azimuthal angle is not a free coordinate ($$\phi=\Omega t$$ is prescribed), so there is just **one** degree of freedom, $$\theta$$.

*Setup.* Place the origin at the center. The bead sits at radius $$R\sin\theta$$ from the vertical axis and height $$-R\cos\theta$$ below center. It has two velocity contributions: motion *along* the hoop, of speed $$R\dot\theta$$, and motion *around* the axis carried by the spin, of speed $$(R\sin\theta)\Omega$$. These are perpendicular, so

$$
T=\tfrac12 m\left(R^2\dot\theta^2+R^2\sin^2\theta\,\Omega^2\right),\qquad
V=-mgR\cos\theta .
$$

*Equation of motion.* With $$L=T-V$$,

$$
\frac{\partial L}{\partial \dot\theta}=mR^2\dot\theta,\qquad
\frac{\partial L}{\partial \theta}=mR^2\Omega^2\sin\theta\cos\theta-mgR\sin\theta,
$$

so the Euler–Lagrange equation is

$$
mR^2\ddot\theta=mR^2\Omega^2\sin\theta\cos\theta-mgR\sin\theta
\quad\Longrightarrow\quad
\ddot\theta=\sin\theta\left(\Omega^2\cos\theta-\frac{g}{R}\right).
$$

The "centrifugal" term $$\Omega^2\cos\theta$$ emerged automatically from the kinetic energy — no pseudo-forces required, because we worked in the lab frame.

*Equilibria.* Set $$\ddot\theta=0$$. Either $$\sin\theta=0$$ (so $$\theta=0$$ at the bottom, or $$\theta=\pi$$ at the top), or

$$
\cos\theta^\star=\frac{g}{R\Omega^2}.
$$

This off-bottom equilibrium exists only when $$g/(R\Omega^2)\le 1$$, i.e. $$\Omega^2>g/R$$. Below that critical spin the bottom is the only stable point; above it the bottom becomes unstable and the bead climbs to $$\theta^\star=\arccos\!\big(g/(R\Omega^2)\big)$$ — a pitchfork bifurcation.

*Small oscillations about $$\theta^\star$$ (for $$\Omega^2>g/R$$).* Write $$\theta=\theta^\star+\epsilon$$ and define $$f(\theta)=\sin\theta\,(\Omega^2\cos\theta-g/R)$$ so that $$\ddot\epsilon=f(\theta^\star+\epsilon)\approx f'(\theta^\star)\,\epsilon$$. Differentiate:

$$
f'(\theta)=\cos\theta\left(\Omega^2\cos\theta-\frac{g}{R}\right)+\sin\theta\,(-\Omega^2\sin\theta).
$$

At the equilibrium the *first* bracket vanishes (that was the equilibrium condition), leaving

$$
f'(\theta^\star)=-\Omega^2\sin^2\theta^\star=-\Omega^2\left(1-\cos^2\theta^\star\right)
=-\Omega^2\left(1-\frac{g^2}{R^2\Omega^4}\right).
$$

Since this is negative, $$\theta^\star$$ is stable, and $$\ddot\epsilon=-\omega^2\epsilon$$ with

$$
\;\omega^2=\Omega^2-\frac{g^2}{R^2\Omega^2}\;
$$

This is the oscillation angular frequency of wobble about the tilted equilibrium. Note $$\omega\to 0$$ as $$\Omega^2\to g/R$$ (the bifurcation is "soft": the restoring effect vanishes right at threshold), and $$\omega\to\Omega$$ for very fast spin.

</div>

<div class="theorem-box">

**Example.** Two pendula are hung in series: a bob $$m_1$$ on a rigid massless rod of length $$\ell_1$$ from a fixed pivot, and a second bob $$m_2$$ on a rod of length $$\ell_2$$ hung from $$m_1$$. Use the two angles from vertical, $$\theta_1$$ and $$\theta_2$$, as generalized coordinates ($$n=2$$) and write a differential equation in terms of the two angles (you need not solve it out).

*Positions.* Measuring $$y$$ downward-negative from the pivot,

$$
x_1=\ell_1\sin\theta_1,\qquad y_1=-\ell_1\cos\theta_1,
$$

$$
x_2=\ell_1\sin\theta_1+\ell_2\sin\theta_2,\qquad y_2=-\ell_1\cos\theta_1-\ell_2\cos\theta_2.
$$

*Velocities.* Differentiating,

$$
\dot x_1=\ell_1\dot\theta_1\cos\theta_1,\quad \dot y_1=\ell_1\dot\theta_1\sin\theta_1
\;\Rightarrow\; v_1^2=\ell_1^2\dot\theta_1^2.
$$

$$
\dot x_2=\ell_1\dot\theta_1\cos\theta_1+\ell_2\dot\theta_2\cos\theta_2,\qquad
\dot y_2=\ell_1\dot\theta_1\sin\theta_1+\ell_2\dot\theta_2\sin\theta_2.
$$

Squaring and adding $$\dot x_2^2+\dot y_2^2$$, the cross term combines via $$\cos\theta_1\cos\theta_2+\sin\theta_1\sin\theta_2=\cos(\theta_1-\theta_2)$$:

$$
v_2^2=\ell_1^2\dot\theta_1^2+\ell_2^2\dot\theta_2^2+2\ell_1\ell_2\dot\theta_1\dot\theta_2\cos(\theta_1-\theta_2).
$$

*Lagrangian.*

$$
T=\tfrac12(m_1+m_2)\ell_1^2\dot\theta_1^2+\tfrac12 m_2\ell_2^2\dot\theta_2^2
+m_2\ell_1\ell_2\dot\theta_1\dot\theta_2\cos(\theta_1-\theta_2),
$$

$$
V=-(m_1+m_2)g\ell_1\cos\theta_1-m_2 g\ell_2\cos\theta_2,
$$

and $$L=T-V$$.

*Equations of motion.* For $$\theta_1$$, with $$\Delta\equiv\theta_1-\theta_2$$:

$$
\frac{\partial L}{\partial\dot\theta_1}=(m_1+m_2)\ell_1^2\dot\theta_1+m_2\ell_1\ell_2\dot\theta_2\cos\Delta,
$$

$$
\frac{d}{dt}\frac{\partial L}{\partial\dot\theta_1}=(m_1+m_2)\ell_1^2\ddot\theta_1+m_2\ell_1\ell_2\ddot\theta_2\cos\Delta-m_2\ell_1\ell_2\dot\theta_2\sin\Delta\,(\dot\theta_1-\dot\theta_2),
$$

$$
\frac{\partial L}{\partial\theta_1}=-m_2\ell_1\ell_2\dot\theta_1\dot\theta_2\sin\Delta-(m_1+m_2)g\ell_1\sin\theta_1.
$$

Subtracting and dividing by $$\ell_1$$ gives the first equation; the $$\theta_2$$ calculation is symmetric. The result is the standard coupled pair

$$
(m_1+m_2)\ell_1\ddot\theta_1+m_2\ell_2\ddot\theta_2\cos\Delta+m_2\ell_2\dot\theta_2^2\sin\Delta+(m_1+m_2)g\sin\theta_1=0,
$$

$$
\ell_2\ddot\theta_2+\ell_1\ddot\theta_1\cos\Delta-\ell_1\dot\theta_1^2\sin\Delta+g\sin\theta_2=0.
$$

*Interpretation.* These are nonlinear and famously chaotic. In the **small-angle limit** ($$\sin\theta\approx\theta$$, $$\cos\Delta\approx1$$, drop quadratic-velocity terms) they linearize to a coupled mass–spring system $$\mathbf{M}\ddot{\boldsymbol\theta}=-\mathbf{K}\boldsymbol\theta$$, whose two normal-mode frequencies are found exactly as for coupled oscillators.

</div>

### Cyclic coordinates and conservation laws

The Lagrangian formulation makes conservation laws transparent. Define the **generalized (canonical) momentum** conjugate to $$q_i$$:

$$
p_i=\frac{\partial L}{\partial \dot q_i}.
$$

Despite the name, $$p_i$$ does not have units of $$\text{kg·m/s}$$: conjugate to an angle it is an *angular* momentum, conjugate to an area-like coordinate it is something else again. It is whatever quantity the Euler–Lagrange equation says is changed by the corresponding generalized force.

If a coordinate does **not appear** explicitly in $$L$$ (only its derivative does), it is called **cyclic** or **ignorable**, and its Euler–Lagrange equation immediately gives

$$
\frac{dp_i}{dt}=\frac{\partial L}{\partial q_i}=0
\quad\Longrightarrow\quad
p_i=\text{const}.
$$

Physically, a cyclic coordinate signals a *symmetry*: if shifting $$q_i$$ leaves $$L$$ unchanged, the system "doesn't care" about that direction, and the associated momentum cannot change. This is the mechanical core of **Noether's theorem**: each continuous symmetry of $$L$$ yields a conserved quantity. Translational invariance $$\longrightarrow$$ linear momentum; rotational invariance (no $$\phi$$ dependence) $$\longrightarrow$$ angular momentum. Spotting a cyclic coordinate is the single most powerful move in Lagrangian problem-solving: it turns a second-order ODE into a first-order conservation law for free, which you should always cash in *before* grinding algebra.

<div class="theorem-box">

**Example.** A bob of mass $$m$$ swings on a rigid massless rod of length $$\ell$$ from a fixed pivot, free to move in all three dimensions (not confined to a plane). Find a generalized differential equation for the scenario that does NOT include the azimuthal angle and only depends on $$m$$, $$l$$, the downward vertical angle $$\theta$$, and momentum.

Use spherical angles: $$\theta$$ measured from the downward vertical, and azimuth $$\phi$$ about the vertical. There are $$n=2$$ degrees of freedom.

*Lagrangian.* The bob speed has a polar part $$\ell\dot\theta$$ and an azimuthal part $$\ell\sin\theta\,\dot\phi$$ (the radius of the circle of latitude is $$\ell\sin\theta$$), giving

$$
T=\tfrac12 m\ell^2\big(\dot\theta^2+\sin^2\theta\,\dot\phi^2\big),\qquad
V=-mg\ell\cos\theta,
$$

$$
L=\tfrac12 m\ell^2\big(\dot\theta^2+\sin^2\theta\,\dot\phi^2\big)+mg\ell\cos\theta.
$$

*Cyclic coordinate.* The angle $$\phi$$ appears only through $$\dot\phi$$ — it is **cyclic** (rotating the whole apparatus about the vertical changes nothing). Hence its conjugate momentum is conserved:

$$
p_\phi=\frac{\partial L}{\partial\dot\phi}=m\ell^2\sin^2\theta\,\dot\phi=\text{const}.
$$

This is exactly the component of angular momentum about the vertical axis, $$L_z$$ — a quantity Newton would have you extract from torque balance, but which here just *falls out* of the structure of $$L$$.

*Reduction to 1D.* Solve the conservation law for $$\dot\phi=p_\phi/(m\ell^2\sin^2\theta)$$ and substitute into the $$\theta$$ equation. The Euler–Lagrange equation for $$\theta$$,

$$
m\ell^2\ddot\theta=m\ell^2\sin\theta\cos\theta\,\dot\phi^2-mg\ell\sin\theta,
$$

becomes, after eliminating $$\dot\phi$$,

$$
m\ell^2\ddot\theta=\frac{p_\phi^2\cos\theta}{m\ell^2\sin^3\theta}-mg\ell\sin\theta.
$$

This is a single equation for $$\theta(t)$$ alone, equivalent to 1D motion in the **effective potential**

$$
V_{\rm eff}(\theta)=\frac{p_\phi^2}{2m\ell^2\sin^2\theta}-mg\ell\cos\theta,
$$

whose first term is the **centrifugal barrier** that keeps the bob from reaching the poles. A minimum of $$V_{\rm eff}$$ is a *conical pendulum* (steady circular motion at fixed $$\theta$$); small oscillations about it give the precessing, nodding motion. Using a cyclic coordinate plus energy conservation has reduced a two-angle problem to a one-dimensional one — the same "effective potential" reduction that powers central-force and orbit problems.

</div>

---

## Central-force motion and orbits

A **central force** points along the line joining two bodies and depends only on their separation, $$\vec F=F(r)\hat r$$. Gravity and the Coulomb force are the most famous cases. Two features make these problems tractable: the two-body problem reduces to one body, and the motion is confined to a plane (since $$\vec L$$ is conserved, $$\vec r$$ and $$\vec v$$ always lie in the plane perpendicular to it).

### Reduction to one body and the effective potential

A two-body system interacting through a central force reduces to a single particle of **reduced mass** $$\mu=m_1m_2/(m_1+m_2)$$ moving in the potential $$V(r)$$ about a fixed center. The trick is to use the center-of-mass and relative coordinates $$\vec r=\vec r_1-\vec r_2$$: the kinetic energy splits into a free-particle CM piece plus $$\tfrac12\mu\dot{\vec r}^{\,2}$$, and the internal dynamics depend only on $$\vec r$$. For a light body of mass $$m$$ orbiting a much heavier one of mass $$M$$, $$\mu\to m$$ and the heavy body is effectively fixed.

Angular momentum $$L=\mu r^2\dot\theta$$ is conserved (the force exerts no torque about the center), which is **Kepler's second law**: $$dA/dt=L/2\mu$$ is constant, so the radius sweeps equal areas in equal times. Using $$L$$ to eliminate $$\dot\theta$$, the energy becomes a one-dimensional problem in $$r$$ alone:

$$
E=\tfrac12\mu\dot r^2+\underbrace{\frac{L^2}{2\mu r^2}+V(r)}_{V_{\text{eff}}(r)} .
$$

The **effective potential** bundles the real potential with a repulsive **centrifugal barrier** $$L^2/2\mu r^2$$. This is the single most important picture in the subject, because it converts a 2D orbit problem into the 1D motion of a "particle" of energy $$E$$ rolling in the well $$V_{\text{eff}}(r)$$:

- A **minimum** of $$V_{\text{eff}}$$ is a **circular orbit** ($$\dot r=0$$ for all time, so $$r$$ sits at the bottom of the well). The condition $$V_{\text{eff}}'(r_0)=0$$ just says the inward real force supplies exactly the centripetal requirement.
- If $$E$$ lies between the well bottom and zero, the "particle" oscillates between two **turning points** $$r_{\min}$$ and $$r_{\max}$$ (where $$\dot r=0$$, i.e. $$E=V_{\text{eff}}$$). These are the **perihelion** and **aphelion**; the orbit is **bound**.
- If $$E$$ exceeds the barrier (or the well has no bound region), there is a single turning point and the body escapes to infinity: an **unbound** orbit.

A subtle point: a bound orbit oscillates radially between $$r_{\min}$$ and $$r_{\max}$$, but it need not be **closed**. The orbit closes only if the angle swept during one radial oscillation (the **apsidal angle**) is a rational multiple of $$2\pi$$. **Bertrand's theorem** states that the *only* central potentials for which every bound orbit closes are the inverse-square force ($$V\propto -1/r$$) and the harmonic force ($$V\propto r^2$$). That gravity is one of these two is the reason planetary ellipses do not precess in the idealized two-body problem.\

A useful trick for central-force problems is to assume that the two objects are in elliptical orbits, where the major axis is the distance between the objects and the minor axis is $$0$$. Still, all of Kepler's laws still apply if the force is an inverse-square force.

<div class="theorem-box">

**Example.** A point charge $$+Q$$ with mass $$M$$ and another point charge $$-q$$ with mass $$m$$ are separated by a distance $$R$$, and then released from rest at $$t=0$$. When do these two charges collide? Neglect the gravitational interaction, and assume that the Coulomb’s law still applies in this case.

**Method 1 (Reduced mass)**

Since the pair is released from rest, the total momentum is zero and the center of mass never moves; the charges meet when the relative coordinate $$r=r_1-r_2$$ shrinks from $$R$$ to $$0$$. The relative motion is that of a single particle of reduced mass

$$
\mu=\frac{mM}{M+m}
$$

in the attractive potential $$U(r)=-\dfrac{k}{r}$$, where $$k=\dfrac{Qq}{4\pi\varepsilon_0}$$.

The particle is released from rest at $$r=R$$, so its total energy is $$E=U(R)=-k/R$$. At a later separation $$r$$,

$$
\tfrac12\mu\dot r^2-\frac{k}{r}=-\frac{k}{R}
\quad\Longrightarrow\quad
\dot r^2=\frac{2k}{\mu}\left(\frac1r-\frac1R\right).
$$

Since $$r$$ is decreasing, $$\dot r=-\sqrt{\dfrac{2k}{\mu}\dfrac{R-r}{rR}}$$. Separating variables and integrating over the whole collapse $$r:R\to 0$$ gives the collision time

$$
t=\sqrt{\frac{\mu R}{2k}}\int_0^{R}\sqrt{\frac{r}{R-r}}\,dr .
$$

The substitution $$r=R\sin^2\phi$$ turns the integral into $$2R\displaystyle\int_0^{\pi/2}\sin^2\phi\,d\phi=\dfrac{\pi R}{2}$$, so

$$
t=\frac{\pi}{2}\sqrt{\frac{\mu R^3}{2k}}
=\pi\sqrt{\frac{\pi\varepsilon_0\,\mu R^3}{2Qq}}
=\pi\sqrt{\frac{\pi\varepsilon_0\,mMR^3}{2Qq(M+m)}} ,
$$

substituting $$k=Qq/4\pi\varepsilon_0$$ and $$\mu=mM/(M+m)$$.

**Method 2 (Squashed orbits)**

First consider the situation where $$M \longrightarrow +\infty$$, and the system becomes a point mass and moves in an attractive central force field that follows the inverse-square-law. Therefore, the motion of the mass follows the Kepler’s laws. If the mass is released at rest, its
trajectory is a straight line going towards M. This straight-line can be treated as an
extremely thin elliptical orbit with $$a=\frac{R}{2}$$ and $$b=0$$. The time it takes to collide
with $$M$$ is half of the period of this orbit. According to Kepler’s 3rd law, the period
of an elliptical orbit depends only on $$a$$, not $$b$$. Therefore, we can use a circular orbit
with a radius $$R/2$$ to calculate the period of the elliptical orbit with $$a = R/2$$. Using the
dynamics equations of a circular orbit, we set the Coulomb force equal to the centripetal force at radius $$R/2$$:

$$
\frac{1}{4\pi\varepsilon_0}\frac{Qq}{\left(\frac{R}{2}\right)^2}=m\,\frac{R}{2}\,\omega^2 .
$$

Solving for $$\omega$$ and using $$T=2\pi/\omega$$ gives the period of the orbit,

$$
T=\frac{2\pi}{\omega}=2\pi\sqrt{\frac{\pi\varepsilon_0 mR^3}{2Qq}} .
$$

The collision happens after half a period, so

$$
t=\frac{T}{2}=\pi\sqrt{\frac{\pi\varepsilon_0 mR^3}{2Qq}} .
$$

If $$M$$ is finite, we just replace $$m$$ in the result with the reduced mass $$\mu=\dfrac{mM}{M+m}$$:

$$
t=\frac{T}{2}=\pi\sqrt{\frac{\pi\varepsilon_0 mMR^3}{2Qq(M+m)}} .
$$

</div>

### Kepler orbits

For gravity, $$V(r)=-k/r$$ with $$k=Gm_1m_2$$. The orbit equation follows from rewriting the radial dynamics in terms of $$u=1/r$$ as the independent-variable function $$u(\theta)$$.

<div class="theorem-box">

**Proof (Binet equation).** Start from the radial equation of motion for the reduced particle,

$$
\mu\ddot r-\mu r\dot\theta^2=F(r),
$$

where the second term on the left is the centrifugal contribution. We eliminate time using conservation of $$L=\mu r^2\dot\theta$$, so that $$\dot\theta=L/\mu r^2$$. Substitute $$u=1/r$$, i.e. $$r=1/u$$. Then by the chain rule,

$$
\dot r=\frac{dr}{d\theta}\dot\theta=-\frac{1}{u^2}\frac{du}{d\theta}\cdot\frac{L}{\mu r^2}
=-\frac{1}{u^2}\frac{du}{d\theta}\cdot\frac{Lu^2}{\mu}
=-\frac{L}{\mu}\frac{du}{d\theta}.
$$

Differentiate again, again converting $$d/dt=\dot\theta\,d/d\theta=(Lu^2/\mu)\,d/d\theta$$:

$$
\ddot r=\frac{d}{dt}\!\left(-\frac{L}{\mu}\frac{du}{d\theta}\right)
=-\frac{L}{\mu}\frac{d^2u}{d\theta^2}\cdot\frac{Lu^2}{\mu}
=-\frac{L^2u^2}{\mu^2}\frac{d^2u}{d\theta^2}.
$$

Also $$r\dot\theta^2=\dfrac{1}{u}\left(\dfrac{Lu^2}{\mu}\right)^2=\dfrac{L^2u^3}{\mu^2}$$. Plug both into the radial equation:

$$
\mu\left(-\frac{L^2u^2}{\mu^2}\frac{d^2u}{d\theta^2}\right)-\mu\cdot\frac{L^2u^3}{\mu^2}=F(1/u).
$$

Divide through by $$-L^2u^2/\mu$$ to obtain the general **Binet equation**

$$
\frac{d^2u}{d\theta^2}+u=-\frac{\mu}{L^2u^2}\,F(1/u).
$$

For gravity, $$F(r)=-k/r^2=-ku^2$$, so the right side becomes $$+\mu k/L^2$$, a constant:

$$
\ \frac{d^2u}{d\theta^2}+u=\frac{\mu k}{L^2}\ .
$$

This is the equation of a harmonic oscillator in $$\theta$$ with a constant drive — its solution is a sinusoid offset by a constant, which is precisely a conic section.

</div>

The general solution of Binet's equation is $$u=\mu k/L^2+A\cos(\theta-\theta_0)$$. Choosing $$\theta_0=0$$ (perihelion at $$\theta=0$$) and writing $$A$$ in terms of the constants of motion gives a conic section (Luke jumpscare):

$$
r(\theta)=\frac{p}{1+e\cos\theta},\qquad
p=\frac{L^2}{\mu k},\qquad
e=\sqrt{1+\frac{2EL^2}{\mu k^2}} .
$$

The eccentricity $$e$$ sorts the orbit by energy:

| Energy | Eccentricity | Orbit |
|---|---|---|
| $$E<0$$ | $$0\le e<1$$ | ellipse (circle if $$e=0$$) |
| $$E=0$$ | $$e=1$$ | parabola (just unbound) |
| $$E>0$$ | $$e>1$$ | hyperbola |

The eccentricity has a physical meaning beyond the normal definition seen in precalculus: it measures how far the energy sits above the circular-orbit minimum for a given $$L$$. A circle ($$e=0$$) is the lowest-energy orbit at fixed $$L$$ (the bottom of the well); raising $$E$$ toward zero stretches the ellipse until at $$E=0$$ the far turning point runs off to infinity and the orbit unbinds.

For a bound orbit the semi-major axis depends only on energy, $$a=-k/2E$$, and **Kepler's third law** follows from the area law (period = total area $$\pi ab$$ divided by the constant areal rate $$L/2\mu$$):

$$
T^2=\frac{4\pi^2}{G(m_1+m_2)}\,a^3 .
$$

The single most useful orbital relation in practice is the **vis-viva equation**, which comes straight from energy conservation with $$a=-k/2E$$:

$$
\ v^2=GM\!\left(\frac{2}{r}-\frac{1}{a}\right)\ 
$$

(for a light body orbiting mass $$M$$).

### Pinning down an orbit from local data

A common olympiad task gives you the speed and distance at one point and asks for the whole orbit. Two conserved quantities (energy and angular momentum) are enough, because at the apsides the velocity is purely tangential and the geometry collapses.

<div class="theorem-box">

**Example.** A comet orbits the Sun (mass $$M$$). At perihelion it is at distance $$r_p$$ moving at speed $$v_p$$; the only other thing known is that its aphelion distance is $$r_a$$. Show how to find $$v_p$$ from $$r_p$$ and $$r_a$$ alone, then find the aphelion speed $$v_a$$ and the eccentricity.

At both apsides the velocity is perpendicular to the radius, so $$L=\mu r v$$ with no angle factor. Conservation of angular momentum between perihelion and aphelion gives immediately

$$
r_p v_p=r_a v_a\quad\Rightarrow\quad v_a=\frac{r_p}{r_a}\,v_p.
$$

Now impose energy conservation, $$\tfrac12 v_p^2-\dfrac{GM}{r_p}=\tfrac12 v_a^2-\dfrac{GM}{r_a}$$ (dividing the reduced-mass energy by $$\mu$$ since $$\mu$$ cancels for a test body). Substitute $$v_a=(r_p/r_a)v_p$$:

$$
\tfrac12 v_p^2\!\left(1-\frac{r_p^2}{r_a^2}\right)=GM\!\left(\frac{1}{r_p}-\frac{1}{r_a}\right).
$$

Factor the left side as $$\tfrac12 v_p^2\,\dfrac{(r_a-r_p)(r_a+r_p)}{r_a^2}$$ and the right side as $$GM\,\dfrac{r_a-r_p}{r_p r_a}$$. The common factor $$(r_a-r_p)$$ cancels, leaving

$$
v_p^2=\frac{2GM}{r_a+r_p}\cdot\frac{r_a}{r_p}
=\frac{2GM\,r_a}{r_p(r_a+r_p)}.
$$

This is exactly vis-viva with $$a=(r_p+r_a)/2$$, since $$\dfrac{2}{r_p}-\dfrac{1}{a}=\dfrac{2}{r_p}-\dfrac{2}{r_p+r_a}=\dfrac{2r_a}{r_p(r_p+r_a)}$$ — a useful self-check. The aphelion speed is then $$v_a=(r_p/r_a)v_p=\sqrt{\dfrac{2GM\,r_p}{r_a(r_a+r_p)}}$$, and the eccentricity follows from the apsidal distances directly:

$$
r_p=a(1-e),\quad r_a=a(1+e)\ \Rightarrow\ e=\frac{r_a-r_p}{r_a+r_p}.
$$

The whole orbit is fixed by two distances; speeds drop out as a consequence.

</div>

### Sudden changes to the orbit

Many problems hinge on what an *impulsive* event does: a thruster fires for a negligible time, or the central force abruptly changes. Because the burn is instantaneous, $$r$$ and any velocity component perpendicular to the impulse are unchanged at that instant; only the new $$\{E,L\}$$ — hence the new $$a$$ and $$e$$ — must be recomputed.

<div class="theorem-box">

**Example.** A particle is in a circular orbit of radius $$r_0$$ about a star, so its speed is $$v_0=\sqrt{GM/r_0}$$ and its energy is $$E_0=-\tfrac12 GMm/r_0$$ (with $$a=r_0$$). The star suddenly loses a fraction of its mass, $$M\to M'=\alpha M$$ with $$0<\alpha<1$$, while the particle's instantaneous position and velocity are unchanged. Describe the new orbit, and find the condition for the particle to escape.

Just after the event, $$r=r_0$$ and $$v=v_0=\sqrt{GM/r_0}$$ still, but the new potential is $$V'=-GM'm/r=-\alpha GMm/r$$. The velocity is still tangential, so $$r_0$$ is an apsis of the new orbit. The new energy per unit mass is

$$
\frac{E'}{m}=\tfrac12 v_0^2-\frac{GM'}{r_0}=\frac{GM}{2r_0}-\frac{\alpha GM}{r_0}=\frac{GM}{r_0}\left(\tfrac12-\alpha\right).
$$

**Escape condition.** The particle is unbound when $$E'\ge0$$, i.e. $$\alpha\le\tfrac12$$: **if the star loses at least half its mass, the planet flies off**. This matches the familiar fact that circular speed is exactly $$1/\sqrt2$$ times escape speed, so halving $$M$$ halves the depth of the well and turns the present speed into the escape speed.

**Bound case ($$\alpha>\tfrac12$$).** The new semi-major axis comes from $$E'=-GM'm/2a'$$:

$$
a'=-\frac{GM'm}{2E'}=\frac{\alpha\,GM m}{2\cdot\frac{GM m}{r_0}\left(\alpha-\tfrac12\right)}=\frac{\alpha\,r_0}{2\alpha-1}.
$$

Since $$r_0$$ is the apsis where the burn happened and $$v_0$$ now exceeds the new circular speed $$\sqrt{\alpha GM/r_0}$$, the point $$r_0$$ is the **perihelion** of a larger ellipse; the eccentricity follows from $$r_0=a'(1-e)$$:

$$
e=1-\frac{r_0}{a'}=1-\frac{2\alpha-1}{\alpha}=\frac{1-\alpha}{\alpha}.
$$

As $$\alpha\to1$$ (no mass lost) we recover $$e\to0$$, the original circle; as $$\alpha\to\tfrac12^+$$, $$a'\to\infty$$ and $$e\to1$$, the orbit stretching into an escaping parabola. The entire post-event orbit is read off from one energy evaluation and the rule that the impulse point is an apsis.

</div>

---

## Small oscillations and normal modes

Near a stable equilibrium, almost every system behaves like one or more harmonic oscillators.

### Oscillations about equilibrium

Expand the potential about a stable equilibrium $$x_0$$ (where $$V'(x_0)=0$$, $$V''(x_0)>0$$):

$$
V(x)\approx V(x_0)+\tfrac12 V''(x_0)(x-x_0)^2 .
$$

The linear term vanishes by definition of equilibrium, so to leading order the restoring force is Hooke's law with effective stiffness $$k_{\text{eff}}=V''(x_0)$$, giving

$$
\omega=\sqrt{\frac{V''(x_0)}{m}} .
$$

For a general coordinate, replace $$m$$ by the effective inertia multiplying $$\tfrac12\dot q^2$$ in the kinetic energy. This reduces "find the small-oscillation frequency" to two derivatives: locate the minimum, then evaluate the curvature there.

<div class="theorem-box">

**Example.** A particle of mass $$m$$ moves radially in the effective potential

$$
V(x)=\frac{\alpha}{x^2}-\frac{\beta}{x},\qquad \alpha,\beta>0,\ x>0,
$$

the shape that governs orbital radial motion and many central-force problems. Find the equilibrium radius and the frequency of small radial oscillations about it.

First the equilibrium, $$V'(x_0)=0$$:

$$
V'(x)=-\frac{2\alpha}{x^3}+\frac{\beta}{x^2}=0
\quad\Longrightarrow\quad
\frac{\beta}{x^2}=\frac{2\alpha}{x^3}
\quad\Longrightarrow\quad
x_0=\frac{2\alpha}{\beta}.
$$

Now the curvature:

$$
V''(x)=\frac{6\alpha}{x^4}-\frac{2\beta}{x^3}.
$$

Evaluate at $$x_0=2\alpha/\beta$$. Using $$x_0^3=8\alpha^3/\beta^3$$ and $$x_0^4=16\alpha^4/\beta^4$$,

$$
V''(x_0)=\frac{6\alpha\,\beta^4}{16\alpha^4}-\frac{2\beta\,\beta^3}{8\alpha^3}
=\frac{3\beta^4}{8\alpha^3}-\frac{\beta^4}{4\alpha^3}
=\frac{3\beta^4-2\beta^4}{8\alpha^3}
=\frac{\beta^4}{8\alpha^3}>0,
$$

so the equilibrium is stable. The small-oscillation frequency is

$$
\omega=\sqrt{\frac{V''(x_0)}{m}}=\frac{\beta^2}{\sqrt{8m\,\alpha^3}}
=\frac{\beta^2}{2\alpha\sqrt{2m\alpha}} .
$$

Only $$V''$$ at one point was needed; the global shape of the well never entered.

</div>

---

## Rigid-body dynamics

### The inertia tensor and principal axes

For a body rotating with angular velocity $$\vec\omega$$ about a point $$O$$, each mass element at $$\vec r$$ moves with $$\vec v=\vec\omega\times\vec r$$ and carries angular momentum $$\vec r\times m\vec v$$. Summing and expanding the double cross product $$\vec r\times(\vec\omega\times\vec r)=\omega r^2-\vec r(\vec r\cdot\vec\omega)$$ gives a **linear** map from $$\vec\omega$$ to $$\vec L$$:

$$
L_i=\sum_j I_{ij}\,\omega_j,\qquad
I_{ij}=\sum_m m\left(r^2\delta_{ij}-r_i r_j\right),
$$

a real symmetric matrix called the **inertia tensor** $$\mathbf I$$. The diagonal entries $$I_{xx}=\sum m(y^2+z^2)$$ are the ordinary moments of inertia about each axis; the off-diagonal entries $$I_{xy}=-\sum m\,xy$$ are the **products of inertia**.

The crucial conceptual break from AP physics: **$$\vec L$$ is generally not parallel to $$\vec\omega$$.** A matrix sends a vector to a parallel vector only along its eigenvectors, so $$\vec L\parallel\vec\omega$$ only for special spin directions.

*What the products of inertia mean physically.* Imagine a rigid body spinning at constant $$\vec\omega$$ on a fixed shaft. If $$I_{xy}\neq0$$ for the shaft axis, then $$\vec L$$ is tilted off the axis and, since the body carries $$\vec L$$ around with it, $$\vec L$$ sweeps out a cone once per revolution. But $$\vec L$$ is constant in the body and rotating in space means $$d\vec L/dt=\vec\omega\times\vec L\neq0$$, which by $$\vec\tau=d\vec L/dt$$ demands a *torque* — supplied by the bearings as a rotating sideways force. This is dynamic imbalance: a wheel can be statically balanced (center of mass on the axis) yet still shake the bearings because its products of inertia don't vanish. Tire shops fix it by adding small weights to zero out $$I_{xz}$$ and $$I_{yz}$$.

*Principal axes.* Since $$\mathbf I$$ is real symmetric, it has three mutually orthogonal eigenvectors, the **principal axes**, with real eigenvalues $$I_1,I_2,I_3$$, the **principal moments**. In that frame the tensor is diagonal,

$$
\mathbf I=\begin{pmatrix}I_1&0&0\\0&I_2&0\\0&0&I_3\end{pmatrix},\qquad \vec L=(I_1\omega_1,\,I_2\omega_2,\,I_3\omega_3).
$$

Spin purely about a principal axis and $$\vec L\parallel\vec\omega$$: the products of inertia vanish, the bearings feel no rotating load, and the spin is "balanced." Any axis of symmetry is automatically principal, which lets you read off principal axes by inspection for symmetric bodies. The **parallel-axis theorem** $$I=I_{\text{cm}}+Md^2$$ (proved on the AP pages) shifts the reference point for a single moment; its tensor version is $$I_{ij}=I_{ij}^{\text{cm}}+M(d^2\delta_{ij}-d_id_j)$$. For **rolling without slipping** the contact constraint $$v_{\text{cm}}=\omega R$$ links translation and rotation, with kinetic energy $$\tfrac12 Mv_{\text{cm}}^2+\tfrac12 I_{\text{cm}}\omega^2$$.

<div class="theorem-box">

**Example.** A uniform cube of mass $$M$$ and side $$a$$ has its corner at the origin and edges along $$\hat x,\hat y,\hat z$$. Find its inertia tensor about the corner, then compute $$\vec L$$ when it spins about the edge $$\hat x$$ and when it spins about the body diagonal, and in each case find the angle between $$\vec L$$ and $$\vec\omega$$.

By symmetry of the cube under permuting axes, all three diagonal entries are equal. With uniform density $$\rho=M/a^3$$,

$$
I_{xx}=\rho\!\int_0^a\!\!\int_0^a\!\!\int_0^a (y^2+z^2)\,dx\,dy\,dz=\rho\,a\!\left(\frac{a^3}{3}a+a\frac{a^3}{3}\right)=\frac{2}{3}Ma^2.
$$

Each product of inertia is equal by the same symmetry; take

$$
I_{xy}=-\rho\!\int_0^a\!\!\int_0^a\!\!\int_0^a xy\,dx\,dy\,dz=-\rho\,a\cdot\frac{a^2}{2}\cdot\frac{a^2}{2}=-\frac{1}{4}Ma^2.
$$

So about the corner,

$$
\mathbf I=Ma^2\begin{pmatrix}\tfrac23&-\tfrac14&-\tfrac14\\[2pt]-\tfrac14&\tfrac23&-\tfrac14\\[2pt]-\tfrac14&-\tfrac14&\tfrac23\end{pmatrix}.
$$

**Spin about the edge** $$\vec\omega=\omega\hat x$$. Then $$\vec L=\mathbf I\vec\omega=Ma^2\omega\left(\tfrac23,-\tfrac14,-\tfrac14\right)$$. This is *not* along $$\hat x$$ — the edge is not a principal axis, so spinning a cube on one of its edges is dynamically unbalanced. The angle between $$\vec L$$ and $$\vec\omega=\hat x$$ is

$$
\cos\beta=\frac{\vec L\cdot\hat x\lvert \vec L \rvert}=\frac{2/3}{\sqrt{(2/3)^2+2(1/4)^2}}=\frac{0.6667}{\sqrt{0.4444+0.125}}=\frac{0.6667}{0.7546}=0.8835,
$$

so $$\beta\approx27.9^\circ$$. The bearings must supply a torque to drag this off-axis $$\vec L$$ around.

**Spin about the body diagonal** $$\vec\omega=\dfrac{\omega}{\sqrt3}(1,1,1)$$. Now

$$
\mathbf I\begin{pmatrix}1\\1\\1\end{pmatrix}=Ma^2\begin{pmatrix}\tfrac23-\tfrac14-\tfrac14\\\tfrac23-\tfrac14-\tfrac14\\\tfrac23-\tfrac14-\tfrac14\end{pmatrix}=Ma^2\cdot\frac{1}{6}\begin{pmatrix}1\\1\\1\end{pmatrix}.
$$

The body diagonal is an **eigenvector**: $$\vec L=\tfrac16 Ma^2\,\vec\omega$$ is exactly parallel to $$\vec\omega$$, with principal moment $$I=\tfrac16 Ma^2$$. Physically, the cube has threefold symmetry about its body diagonal, which forces it to be a principal axis (in fact, by symmetry, *any* axis through the corner lying in the plane perpendicular to the diagonal shares the eigenvalue $$\tfrac{2}{3}+\tfrac14=\tfrac{11}{12}$$... — more precisely the other two principal moments are degenerate at $$\tfrac{11}{12}Ma^2$$, since the trace $$2Ma^2=\tfrac16+2\cdot\tfrac{11}{12}$$ checks out). Spinning a cube on a body-diagonal point would be perfectly balanced.

</div>

### Gyroscopic precession

The key rigid-body equation is still $$\vec\tau=d\vec L/dt$$ — but when $$\vec L$$ is large and the torque is *perpendicular* to it, the torque **turns** $$\vec L$$ rather than lengthening it. This is the single most counterintuitive fact in mechanics: a fast-spinning top does not topple under gravity, it goes around.

A non-spinning top falls because gravity's torque creates angular momentum *in the direction of the torque* so it starts to tip. A fast-spinning top already has a huge $$\vec L$$ along its axis. Gravity's torque $$\tau=mgr\sin\theta$$ is horizontal, perpendicular to $$\vec L$$, so $$d\vec L=\vec\tau\,dt$$ adds a horizontal sliver perpendicular to $$\vec L$$. Adding a perpendicular vector to $$\vec L$$ *rotates* it without changing its length: the axis swings sideways (azimuthally) instead of dropping. The "falling" tendency is continuously converted into sideways circulation. The faster the spin, the smaller the fractional change $$d\vec L/L$$ per unit time, hence the slower the precession. This explains all of the viral reels/videos about how spinning wheels can withstand gravitational effects while non-spinning wheels can't.

### Euler's equations and torque-free motion

To handle a body whose axis itself moves, write $$\vec\tau=d\vec L/dt$$ in a frame *rotating with the body*, where $$\mathbf I$$ is constant. Using $$\left(d\vec L/dt\right)_{\text{space}}=\left(d\vec L/dt\right)_{\text{body}}+\vec\omega\times\vec L$$ and aligning axes with the principal axes ($$L_i=I_i\omega_i$$) gives **Euler's equations**:

$$
I_1\dot\omega_1=(I_2-I_3)\,\omega_2\omega_3,\qquad
I_2\dot\omega_2=(I_3-I_1)\,\omega_3\omega_1,\qquad
I_3\dot\omega_3=(I_1-I_2)\,\omega_1\omega_2,
$$

(plus external torque on the right when present). For **torque-free** motion ($$\vec\tau=0$$) of a non-spherical body, $$\vec L$$ is fixed in space, but $$\vec\omega$$ — generally not parallel to $$\vec L$$ — traces a cone. This is **free precession**, and it is what makes a tumbling phone, a wobbling thrown frisbee, or a misshapen planet behave the way they do.

<div class="theorem-box">

**Example.** A torque-free symmetric body has $$I_1=I_2\equiv I_\perp$$ and symmetry axis moment $$I_3$$. Find the rate at which the spin axis $$\vec\omega$$ wobbles about the symmetry axis (the "body cone"), and the rate the symmetry axis sweeps about the fixed $$\vec L$$ (the "space cone").

With $$I_1=I_2$$, the third Euler equation gives $$I_3\dot\omega_3=(I_1-I_2)\omega_1\omega_2=0$$, so $$\omega_3=\text{const}$$. The first two become

$$
\dot\omega_1=\frac{I_\perp-I_3}{I_\perp}\,\omega_3\,\omega_2,\qquad
\dot\omega_2=-\frac{I_\perp-I_3}{I_\perp}\,\omega_3\,\omega_1.
$$

Define $$\Omega_{\text{body}}\equiv\dfrac{(I_3-I_\perp)}{I_\perp}\,\omega_3$$. Then $$\dot\omega_1=-\Omega_{\text{body}}\,\omega_2$$ and $$\dot\omega_2=\Omega_{\text{body}}\,\omega_1$$, which is simple harmonic: the transverse part $$(\omega_1,\omega_2)$$ rotates at constant magnitude with angular rate $$\Omega_{\text{body}}$$. So **in the body frame**, $$\vec\omega$$ traces a cone about the symmetry axis at rate

$$
\Omega_{\text{body}}=\frac{I_3-I_\perp}{I_\perp}\,\omega_3.
$$

**In space**, $$\vec L$$ is fixed; the symmetry axis precesses about $$\vec L$$. Resolve $$\vec L=I_\perp\vec\omega_\perp+I_3\omega_3\hat e_3$$. The symmetry axis $$\hat e_3$$, the spin $$\vec\omega$$, and $$\vec L$$ are always coplanar, and that plane rotates about $$\vec L$$ at

$$
\Omega_{\text{space}}=\frac{L}{I_\perp},
$$

obtained by noting the transverse component of $$\vec L$$ is $$L_\perp=I_\perp\omega_\perp$$ and the symmetry axis circulates so as to keep $$\vec L$$ fixed. For Earth ($$I_3-I_\perp)/I_\perp\approx 1/305$$, the predicted free-precession (Chandler-wobble) period is $$\sim305$$ days, famously off from the observed $$\sim433$$ days because Earth is not perfectly rigid — a beautiful example of theory exposing the elastic correction.

</div>

The "fast spin → slow effect" theme recurs: with $$I_3\approx I_\perp$$ the body cone is slow, and the symmetry axis nearly coincides with $$\vec\omega$$ and $$\vec L$$, so a well-thrown frisbee or football flies clean; a wobble appears only when spun about an axis off its symmetry axis.

### The tennis-racket (intermediate-axis) theorem

Order the principal moments $$I_1<I_2<I_3$$. Rotation is *stable* about the largest and smallest principal axes but *unstable* about the intermediate one: flip a phone or a tennis racket spun about its middle axis and it tumbles, doing a half-twist. The proof is a linearization of Euler's equations.

<div class="theorem-box">

**Proof (intermediate-axis instability).** Spin nominally about axis 2 (the intermediate axis): $$\omega_2=\Omega$$ large and constant, with tiny perturbations $$\omega_1,\omega_3$$. Euler's torque-free equations are

$$
I_1\dot\omega_1=(I_2-I_3)\omega_2\omega_3,\quad
I_2\dot\omega_2=(I_3-I_1)\omega_3\omega_1,\quad
I_3\dot\omega_3=(I_1-I_2)\omega_1\omega_2.
$$

To first order $$\omega_2\approx\Omega$$ (its equation is second-order small since $$\omega_3\omega_1$$ is a product of small terms). The other two linearize to

$$
\dot\omega_1=\frac{(I_2-I_3)\Omega}{I_1}\,\omega_3,\qquad
\dot\omega_3=\frac{(I_1-I_2)\Omega}{I_3}\,\omega_1.
$$

Differentiate the first and substitute the second:

$$
\ddot\omega_1=\frac{(I_2-I_3)\Omega}{I_1}\,\dot\omega_3
=\frac{(I_2-I_3)(I_1-I_2)\Omega^2}{I_1 I_3}\,\omega_1\equiv\sigma\,\omega_1.
$$

With the **intermediate** axis, $$I_2-I_3<0$$ and $$I_1-I_2<0$$, so their product is **positive** and $$\sigma>0$$: solutions are $$\omega_1\sim e^{\pm\sqrt{\sigma}\,t}$$, **exponential growth** — the tumble. The growth rate is

$$
\sqrt\sigma=\Omega\sqrt{\frac{(I_2-I_3)(I_2-I_1)}{I_1 I_3}}.
$$

For the **largest** axis ($$I_3$$, set $$\omega_3=\Omega$$) or the **smallest** ($$I_1$$), the analogous coefficient is *negative*: $$\sigma<0$$ gives $$\omega\sim e^{\pm i\sqrt{\lvert \sigma \rvert}t}$$, a bounded **oscillation** — the perturbation merely orbits and the spin is stable. Hence stability about the extreme axes, instability about the middle one.

</div>

This same linearization is the rigorous engine behind every "self-righting" toy and the reason satellites are spin-stabilized about their axis of maximum (or minimum) inertia, never the intermediate one.

### Impulsive and rolling rigid-body dynamics

Olympiad problems often combine the translational momentum law $$\vec F=M\dot{\vec v}_{\text{cm}}$$ with the rotational law $$\vec\tau_{\text{cm}}=d\vec L_{\text{cm}}/dt$$. Keeping *both* books simultaneously is the whole game.

<div class="theorem-box">

**Example.** A uniform ball of mass $$M$$, radius $$R$$, moment $$I=\tfrac25 MR^2$$ rests on a table. A horizontal cue strikes it with impulse $$J$$ at a height $$h$$ *above the table*. Find the $$h$$ for which the ball immediately rolls without slipping, taking no impulse from friction.

The horizontal impulse sets the center-of-mass speed:

$$
J=Mv_{\text{cm}}\;\Rightarrow\;v_{\text{cm}}=\frac{J}{M}.
$$

The impulse acts a height $$h-R$$ above the *center*, so its angular impulse about the center is $$J(h-R)$$, setting the spin:

$$
J(h-R)=I\omega=\tfrac25 MR^2\,\omega\;\Rightarrow\;\omega=\frac{5J(h-R)}{2MR^2}.
$$

Immediate rolling without any frictional correction requires $$v_{\text{cm}}=\omega R$$ at the instant of the strike:

$$
\frac{J}{M}=\frac{5J(h-R)}{2MR^2}\cdot R=\frac{5J(h-R)}{2MR}.
$$

Cancel $$J/M$$:

$$
1=\frac{5(h-R)}{2R}\;\Rightarrow\;h-R=\frac{2R}{5}\;\Rightarrow\;h=\frac{7}{5}R.
$$

So the cue must strike at $$\tfrac75R$$ above the cloth — equivalently $$\tfrac25R$$ above center. Hit lower and the ball slides forward (friction must then spin it up); hit higher and it overspins ("topspin," friction slows the surplus). The special height $$h-R=I/(MR)=k^2/R$$, the radius of gyration squared over $$R$$, is the **center of percussion** about the contact point: striking there delivers no jolt to the contact.

</div>

When the strike is *not* at the magic height, friction must reconcile spin and translation.

<div class="theorem-box">

**Example.** A ball ($$I=\tfrac25 MR^2$$) is launched along a table with speed $$v_0$$ and zero spin (a "stun shot"). Kinetic friction $$\mu$$ acts backward until rolling begins. Find the final speed, the time to roll, and the distance slid.

While sliding, the contact point moves forward, so kinetic friction $$f=\mu Mg$$ acts **backward**. Translation:

$$
M\dot v=-\mu Mg\;\Rightarrow\;v(t)=v_0-\mu g\,t.
$$

Friction also torques the ball about its center (lever arm $$R$$), spinning it up forward:

$$
I\dot\omega=fR=\mu MgR\;\Rightarrow\;\dot\omega=\frac{\mu MgR}{\tfrac25 MR^2}=\frac{5\mu g}{2R},\qquad \omega(t)=\frac{5\mu g}{2R}\,t.
$$

Rolling begins when $$v=\omega R$$:

$$
v_0-\mu g\,t=\frac{5\mu g}{2R}\,t\,R=\frac{5}{2}\mu g\,t
\;\Rightarrow\;v_0=\frac{7}{2}\mu g\,t\;\Rightarrow\;t^*=\frac{2v_0}{7\mu g}.
$$

The final (rolling) speed:

$$
v_f=v_0-\mu g\,t^*=v_0-\mu g\cdot\frac{2v_0}{7\mu g}=\frac{5}{7}v_0.
$$

The sliding distance:

$$
d=v_0 t^*-\tfrac12\mu g\,t^{*2}
=v_0\frac{2v_0}{7\mu g}-\tfrac12\mu g\frac{4v_0^2}{49\mu^2g^2}
=\frac{2v_0^2}{7\mu g}-\frac{2v_0^2}{49\mu g}=\frac{12\,v_0^2}{49\,\mu g}.
$$

</div>

---

## Non-inertial frames and relative motion

Switching to a moving frame is often the difference between a one-line answer and a page of algebra. Here we build the full kinematics of relative motion, because olympiad problems frequently combine translation *and* rotation of the observer. The strategic payoff is always the same: a clever choice of frame can turn a hard *dynamics* problem (find the trajectory) into an easy *statics* problem (find where the forces balance).

### Translating frames

Let a frame $$S'$$ have its origin at $$\vec R_O(t)$$ relative to an inertial frame $$S$$, with no rotation. A particle's position, velocity, and acceleration relate by simple addition:

$$
\vec r=\vec R_O+\vec r',\qquad
\vec v=\vec V_O+\vec v',\qquad
\vec a=\vec A_O+\vec a' .
$$

If $$S'$$ accelerates ($$\vec A_O\ne 0$$), then in $$S'$$ Newton's law reads $$m\vec a'=\vec F_{\text{real}}-m\vec A_O$$: every object feels a uniform **pseudo-force** $$-m\vec A_O$$, exactly as if gravity had gained a component. The pseudo-force is proportional to the object's own mass, which is precisely why it imitates gravity — the inertial mass that resists $$\vec A_O$$ is the same mass that couples to $$\vec g$$, so the two are indistinguishable to an observer inside the box. This is the seed of the equivalence principle, and at the practical level it means you can fold $$-\vec A_O$$ straight into gravity. A pendulum in a forward-accelerating car hangs back at angle $$\tan\theta=A_O/g$$, settling along the **effective gravity**

$$
\vec g_{\text{eff}}=\vec g-\vec A_O .
$$

Once you have $$\vec g_{\text{eff}}$$ you may treat the accelerating box as a stationary lab with a tilted, rescaled gravity: a fluid surface lies perpendicular to $$\vec g_{\text{eff}}$$, a ball rolls "downhill" along it, and oscillation periods use $$g_{\text{eff}}=\lvert \vec g-\vec A_O \rvert$$.

### The transport theorem (rotating frames)

The one identity that generates everything about rotating frames: for **any** vector $$\vec A$$, its rates of change as seen in the inertial frame and in a frame rotating at $$\vec\omega$$ differ by $$\vec\omega\times\vec A$$,

$$
\ \left(\frac{d\vec A}{dt}\right)_{\text{in}}=\left(\frac{d\vec A}{dt}\right)_{\text{rot}}+\vec\omega\times\vec A\ .
$$

Why this is the *master* identity: any vector can be written in the rotating basis as $$\vec A=A_x\hat e_x+A_y\hat e_y+A_z\hat e_z$$. Differentiating, the product rule splits into two pieces — the components $$\dot A_i$$ changing (which is what the rotating observer sees, the first term), plus the basis vectors $$\hat e_i$$ themselves swinging around. But a unit vector rigidly attached to a body spinning at $$\vec\omega$$ obeys $$\dot{\hat e}_i=\vec\omega\times\hat e_i$$, so $$\sum_i A_i\,\dot{\hat e}_i=\vec\omega\times\vec A$$. That is the entire content of the theorem: **the first term is how the numbers change, the $$\vec\omega\times\vec A$$ term is how the rulers turn.** Since it holds for *every* vector, you apply it to $$\vec r$$ to get velocities, then apply it again to get accelerations — and that single repeated application produces all three pseudo-forces with no extra physics.

<div class="theorem-box">

**Proof (velocity and acceleration in a rotating frame).** Apply the transport theorem to $$\vec r$$:

$$
\vec v_{\text{in}}=\vec v_{\text{rot}}+\vec\omega\times\vec r .
$$

Differentiate again in the inertial frame. The left side becomes $$\vec a_{\text{in}}$$. On the right, apply the transport theorem to each rotating-frame vector — $$\vec v_{\text{rot}}$$ and $$\vec r$$ — since each is naturally expressed in the rotating basis:

$$
\vec a_{\text{in}}=\big(\vec a_{\text{rot}}+\vec\omega\times\vec v_{\text{rot}}\big)+\dot{\vec\omega}\times\vec r+\vec\omega\times\big(\vec v_{\text{rot}}+\vec\omega\times\vec r\big).
$$

Collecting terms,

$$
\vec a_{\text{in}}=\vec a_{\text{rot}}+2\,\vec\omega\times\vec v_{\text{rot}}+\vec\omega\times(\vec\omega\times\vec r)+\dot{\vec\omega}\times\vec r .
$$

The factor of $$2$$ on the Coriolis term is not a coincidence: one factor of $$\vec\omega\times$$ comes from differentiating the explicit $$\vec\omega\times\vec r$$ in the velocity, and an identical one comes from the rotation of $$\vec v_{\text{rot}}$$'s basis. Solving for the acceleration measured in the rotating frame and multiplying by $$m$$ gives the pseudo-force law below.

</div>

For a frame that both translates and rotates, the full chain is

$$
\vec a_{\text{in}}=\vec A_O+\vec a_{\text{rot}}+2\,\vec\omega\times\vec v_{\text{rot}}+\vec\omega\times(\vec\omega\times\vec r)+\dot{\vec\omega}\times\vec r .
$$

### The pseudo-forces

Moving the kinematic terms to the force side, Newton's law in the rotating frame becomes

$$
m\vec a_{\text{rot}}=\vec F_{\text{real}}
\underbrace{-m\,\vec\omega\times(\vec\omega\times\vec r)}_{\text{centrifugal}}
\underbrace{-2m\,\vec\omega\times\vec v_{\text{rot}}}_{\text{Coriolis}}
\underbrace{-m\,\dot{\vec\omega}\times\vec r}_{\text{Euler}}
-m\vec A_O .
$$

- **Centrifugal:** $$-m\,\vec\omega\times(\vec\omega\times\vec r)$$ points outward from the axis with magnitude $$m\omega^2\rho$$ ($$\rho$$ = distance to the axis). It depends only on position, so it is a *conservative* pseudo-force derivable from a potential $$\Phi_{\text{cf}}=-\tfrac12\omega^2\rho^2$$ (force per mass $$=-\nabla\Phi_{\text{cf}}=+\omega^2\vec\rho$$). Because it acts like an extra potential, you can add it to the real potential energy and use *energy conservation in the rotating frame*. This is what flattens planets, sets a rotating fluid's parabolic surface, and lets you treat a steadily rotating system as a **statics** problem under $$\vec g_{\text{eff}}$$.
- **Coriolis:** $$-2m\,\vec\omega\times\vec v_{\text{rot}}$$ acts only on bodies *moving* in the rotating frame, always perpendicular to their velocity. Being perpendicular to $$\vec v_{\text{rot}}$$, it satisfies $$\vec F_{\text{Cor}}\cdot\vec v_{\text{rot}}=0$$, so **it does no work and cannot change rotating-frame kinetic energy** — it only bends paths, never speeds them up. This is why a Coriolis-only energy argument is consistent, and why you can ignore Coriolis entirely when you only care about energetics. It governs cyclones, ocean gyres, the Foucault pendulum, and the eastward deflection of falling bodies.
- **Euler:** $$-m\,\dot{\vec\omega}\times\vec r$$ appears only when the spin rate changes; usually zero for steady rotation. It is the rotational analogue of the translational $$-m\vec A_O$$ — the "jerk-back" you feel when a merry-go-round speeds up.

The simplification is this: for **steady** rotation ($$\dot{\vec\omega}=0$$) the only velocity-dependent term is Coriolis, which does no work, so the centrifugal-augmented potential

$$
U_{\text{eff}}=U_{\text{real}}-\tfrac12 m\omega^2\rho^2
$$

controls all the energetics. Equilibria of the rotating system are exactly the stationary points of $$U_{\text{eff}}$$. Whether such an equilibrium is *stable* is then decided by Coriolis, because it is the only force left to push back on a small displacement that has acquired a velocity — a theme that culminates in the Lagrange points below.

<div class="theorem-box">

**Example.** Drop a mass from rest at height $$h$$ at latitude $$\lambda$$. Find the deflection of the object, assuming it's dropped on Earth.

Choose local axes with $$\hat x$$ east, $$\hat y$$ north, $$\hat z$$ up; then $$\vec\omega=\omega(0,\cos\lambda,\sin\lambda)$$. To leading order the body falls with $$\vec v\approx -gt\,\hat z$$. The Coriolis acceleration is

$$
-2\vec\omega\times\vec v=-2\,\omega(0,\cos\lambda,\sin\lambda)\times(0,0,-gt)=-2\omega g t\cos\lambda\,(\hat y\times\hat z\text{-component})=+2\omega g t\cos\lambda\,\hat x,
$$

i.e. magnitude $$2\omega g t\cos\lambda$$ pointing **east**. Integrating twice from rest,

$$
x_{\text{east}}=\int_0^{t_f}\!\!\int_0^{t}2\omega g t'\cos\lambda\,dt'\,dt=\tfrac13\,\omega g\cos\lambda\,t_f^3,\qquad t_f=\sqrt{\tfrac{2h}{g}},
$$

so the deflection is

$$
x_{\text{east}}=\frac{\omega\cos\lambda}{3}\sqrt{\frac{8h^3}{g}}
$$

Note it is *eastward* in both hemispheres (it depends on $$\cos\lambda$$, which is positive everywhere).

</div>

### Worked examples in rotating frames

When a problem is naturally circular — a bead in a rotating tube, a mass near a Lagrange point, a satellite viewed from a co-rotating frame — moving into the rotating frame replaces "what is the trajectory?" with "where does the effective force balance?" The following examples show the machinery in full.

<div class="theorem-box">

**Example.** A frictionless tube lies in a horizontal plane and rotates about a vertical axis through one end at constant angular speed $$\omega$$. A bead of mass $$m$$ slides inside it. At $$t=0$$ the bead is at radius $$r_0$$, at rest *relative to the tube*. Find $$r(t)$$ and the normal force the tube exerts.

Work in the frame co-rotating with the tube. Let $$r$$ be the distance along the tube (the radial coordinate). Because rotation is steady, $$\dot{\vec\omega}=0$$ and there is no Euler term. The real forces are gravity (vertical, irrelevant in the horizontal plane) and the tube's normal force $$\vec N$$, which is perpendicular to the tube — it has no radial component. The pseudo-forces are centrifugal (radial, outward) and Coriolis (perpendicular to $$\vec v_{\text{rot}}$$, hence perpendicular to the tube).

**Radial equation.** Along the tube, only centrifugal survives:

$$
m\ddot r=+m\omega^2 r\quad\Longrightarrow\quad \ddot r=\omega^2 r .
$$

This is the *outward*-pushing analogue of SHM — note the $$+$$ sign — so it has exponential, not oscillatory, solutions. The general solution is $$r(t)=A\cosh(\omega t)+B\sinh(\omega t)$$. Apply $$r(0)=r_0$$ and $$\dot r(0)=0$$: $$A=r_0$$, $$B=0$$. Thus

$$
\,r(t)=r_0\cosh(\omega t)\,,\qquad \dot r(t)=r_0\,\omega\sinh(\omega t).
$$

The bead flies outward exponentially; there is no stable equilibrium because the centrifugal "potential" $$-\tfrac12 m\omega^2 r^2$$ is a downward parabola — any displacement runs away. This is the rotating-frame statement of the familiar fact that a bead in a spinning tube is flung out.

**Normal force (the Coriolis reaction).** The transverse direction is perpendicular to the tube. In that direction the bead's rotating-frame acceleration is zero (it stays on the tube line), so the transverse forces balance:

$$
N - 2m\omega \dot r = 0 \quad\Longrightarrow\quad N = 2m\omega\dot r = 2m\omega^2 r_0\sinh(\omega t).
$$

Here $$2m\omega\dot r$$ is the magnitude of the Coriolis term $$\lvert {-2m\,\vec\omega\times\vec v_{\text{rot}}} \rvert$$ with $$\vec v_{\text{rot}}=\dot r\,\hat r$$ (radial), which points transversely. The tube must push sideways with exactly this force to keep the bead on the line. **Cross-check in the inertial frame:** the bead has angular momentum $$L=mr^2\dot\theta=mr^2\omega$$ about the axis, and the only torque is $$rN$$, so $$\dot L=rN$$. Compute $$\dot L=m\omega\,\frac{d}{dt}(r^2)=m\omega\cdot 2r\dot r$$, giving $$N=\dot L/r=2m\omega\dot r$$ — identical. The Coriolis pseudo-force in the rotating frame *is* the inertial-frame statement that the tube must supply the torque to spin up the bead's growing angular momentum.

</div>

<div class="theorem-box">

**Example.** A turntable rotates at constant $$\omega$$ (counterclockwise, $$\vec\omega=\omega\hat z$$). At $$t=0$$ a frictionless puck is launched from the center with inertial-frame velocity $$v_0\,\hat x$$. Describe its path (a) in the inertial frame and (b) in the rotating frame, and verify the rotating-frame path with the pseudo-forces.

**(a) Inertial frame.** Nothing touches the puck, so it moves in a *straight line at constant speed*: $$\vec r_{\text{in}}(t)=(v_0 t,\,0)$$. This is the whole point — the "true" motion is trivial.

**(b) Rotating frame.** The rotating axes have turned by angle $$\theta=\omega t$$, so to express the same point in rotating coordinates we rotate by $$-\omega t$$:

$$
\begin{aligned}
x_{\text{rot}}&=\phantom{-}x_{\text{in}}\cos\omega t+y_{\text{in}}\sin\omega t=v_0 t\cos\omega t,\\
y_{\text{rot}}&=-x_{\text{in}}\sin\omega t+y_{\text{in}}\cos\omega t=-v_0 t\sin\omega t.
\end{aligned}
$$

So in the rotating frame the puck spirals: $$\rho(t)=\sqrt{x_{\text{rot}}^2+y_{\text{rot}}^2}=v_0 t$$ (radius grows linearly) while the polar angle is $$\phi=-\omega t$$ (winding backward, i.e. clockwise — opposite the table's spin). This is an **Archimedean spiral** $$\rho=-\,(v_0/\omega)\,\phi$$. A straight inertial path looks curved to the rotating observer; the curvature is the visible signature of the pseudo-forces.

**Verify with pseudo-forces.** Differentiate the rotating coordinates. With $$\rho=v_0 t$$, $$\dot\rho=v_0$$, $$\ddot\rho=0$$, $$\dot\phi=-\omega$$:

$$
a_{\text{rot},\rho}=\ddot\rho-\rho\dot\phi^2=0-(v_0t)\omega^2=-\omega^2\rho,\qquad
a_{\text{rot},\phi}=\rho\ddot\phi+2\dot\rho\dot\phi=0+2v_0(-\omega)=-2\omega v_0 .
$$

There are no real horizontal forces ($$\vec F_{\text{real}}=0$$), so the rotating-frame law $$m\vec a_{\text{rot}}=\vec F_{\text{cf}}+\vec F_{\text{Cor}}$$ must reproduce these. Centrifugal gives $$+\omega^2\rho$$ outward; but we found $$a_{\text{rot},\rho}=-\omega^2\rho$$. The resolution: centrifugal is *over*-supplied radially, and the radial component of the velocity-dependent Coriolis term reverses the sign. Using $$\vec v_{\text{rot}}=\dot\rho\,\hat\rho+\rho\dot\phi\,\hat\phi=(v_0,\,-\omega\rho)$$ in polar components, the Coriolis acceleration $$-2\vec\omega\times\vec v_{\text{rot}}$$ has radial part $$-2\omega\rho\dot\phi=-2\omega^2\rho$$ and transverse part $$-2\omega\dot\rho=-2\omega v_0$$. Adding the contributions component by component:

$$
\text{centrifugal} + \text{Coriolis}:\quad
a_\rho=\underbrace{\omega^2\rho}_{\text{cf}}\underbrace{-2\omega^2\rho}_{\text{Cor, radial}}=-\omega^2\rho,\qquad
a_\phi=\underbrace{0}_{\text{cf}}\underbrace{-2\omega v_0}_{\text{Cor, transv}}=-2\omega v_0,
$$

matching the kinematics exactly. So the apparent inward bending near large $$\rho$$ is Coriolis overpowering centrifugal, and the transverse sweep that curls the path backward is pure Coriolis — the same force that organizes cyclones.

</div>

<div class="theorem-box">

**Example.** Two large masses $$M_1>M_2$$ orbit their common center of mass on circular orbits with separation $$a$$ and angular velocity $$\omega$$, where Kepler gives $$\omega^2=G(M_1+M_2)/a^3$$. A test particle of negligible mass moves in their gravity. Work in the frame co-rotating at $$\omega$$, in which $$M_1$$ and $$M_2$$ are fixed. Find the equilibrium points and characterize their stability.

Because rotation is steady, the energetics are governed entirely by the **effective potential** (per unit mass) combining the two gravitational wells and the centrifugal term:

$$
\,\Phi_{\text{eff}}(\vec\rho)=-\frac{GM_1}{r_1}-\frac{GM_2}{r_2}-\tfrac12\,\omega^2\rho^2\,,
$$

where $$r_1,r_2$$ are distances to the two masses and $$\rho$$ is distance to the rotation axis through the barycenter. Equilibria (places a particle can sit at rest in the rotating frame) are stationary points $$\nabla\Phi_{\text{eff}}=0$$, because Coriolis $$\propto\vec v_{\text{rot}}$$ vanishes for a particle momentarily at rest. There are five, the **Lagrange points**.

**Collinear points (L1, L2, L3).** On the line through the two masses, by symmetry the gradient is purely along that line; setting it to zero gives a quintic, but the geometry is clear: L1 sits between the masses, L2 beyond the smaller mass $$M_2$$, L3 beyond the larger mass $$M_1$$. For the small mass ratio $$\mu=M_2/(M_1+M_2)\ll1$$, L1 and L2 lie at distance $$\approx a\,(\mu/3)^{1/3}$$ from $$M_2$$ (the Hill radius), and L3 lies almost diametrically opposite $$M_2$$ at $$r_1\approx a\,(1+\tfrac{5}{12}\mu)$$. Along the line, $$\Phi_{\text{eff}}$$ has a *maximum* (the two wells plus the inverted centrifugal parabola all curve down outward there), so the collinear points are **saddles**: stable against transverse displacement but unstable along the line. They are equilibria you can park at only with active station-keeping (e.g. the JWST at Sun–Earth L2).

**Equilateral points (L4, L5).** Remarkably, the two points forming *equilateral triangles* with $$M_1$$ and $$M_2$$ ($$r_1=r_2=a$$) are always equilibria, independent of the masses. Quick check: at $$r_1=r_2=a$$ each gravitational pull has magnitude $$GM_i/a^2$$ directed toward $$M_i$$; their vector sum points toward the barycenter with magnitude $$G(M_1+M_2)/a^2\cdot(\rho/a)$$ after geometry, which is exactly $$\omega^2\rho$$ — balancing centrifugal. So $$\nabla\Phi_{\text{eff}}=0$$ there.

**The Coriolis paradox at L4/L5.** Examining the second derivatives shows L4 and L5 are *maxima* of $$\Phi_{\text{eff}}$$ — yet they are observed to be **stable** (the Trojan asteroids of Jupiter, the Sun–Jupiter L4/L5 clouds). How can a particle sit stably at a potential maximum? Because $$\Phi_{\text{eff}}$$ governs only the conservative part; the moment the particle drifts and acquires velocity, **Coriolis** $$-2m\,\vec\omega\times\vec v_{\text{rot}}$$ deflects it sideways and curls its path into a small loop instead of letting it roll off the hilltop. This is the same velocity-dependent steering seen in the cyclotron motion of a charge in a magnetic field ($$\vec\omega$$ playing the role of $$\vec B$$). Linearizing about L4 gives the stability condition

$$
\frac{M_1}{M_2}\ \gtrsim\ \frac{1}{2}\left(25+\sqrt{621}\right)\approx 24.96,
$$

i.e. L4/L5 are stable whenever one body is at least $$\sim25$$ times heavier than the other — comfortably satisfied by Sun–Jupiter ($$\sim1047$$) and Earth–Moon ($$\sim81$$). It is a beautiful, exam-worthy illustration of the closing theme: **centrifugal sets where the equilibria are, Coriolis decides whether they hold.**

</div>

---

## Problem-solving strategy

The hardest part of an advanced-mechanics problem is usually choosing the right framework before any algebra. A decision tree:

:::strategy
1. **Constraints, weird geometry, or you don't want to find constraint forces**: Reach for **Lagrangian mechanics**. Pick generalized coordinates that build the constraints in, write $$L=T-V$$, and *before* expanding the equations look for cyclic coordinates (conserved canonical momenta) and the conserved energy function $$h$$. Half of all "find the equation of motion" and "find the small-oscillation frequency" problems fall to two derivatives this way.
2. **Two bodies under a central force, or motion in a $$1/r$$ potential / $$1/r^2$$ force**: Reduce to a one-body problem with the reduced mass, then use **conservation of $$E$$ and $$L$$**. Read the *qualitative* behavior off the effective potential $$V_{\text{eff}}=L^2/2\mu r^2+V(r)$$ (circular orbit at its minimum, bound motion between turning points), and get *numbers* from vis-viva and Kepler's laws. Do not integrate the trajectory when energy and angular momentum already pin down what you need.
3. **Stable equilibrium — "find the frequency of small oscillations"**: Expand the potential to second order: $$\omega=\sqrt{V''(x_0)/m_{\text{eff}}}$$ for one coordinate. For several coupled coordinates, build the mass and stiffness matrices and solve $$\det(\mathbf K-\omega^2\mathbf M)=0$$ for the **normal modes**; exploit symmetry to guess the mode shapes first. Watch for zero-frequency modes — they signal an unconstrained translation or rotation, not an error.
4. **Spinning, tumbling, or rolling rigid body**: Use $$\vec\tau=d\vec L/dt$$ as a *vector* equation with the inertia tensor. Spin about a principal axis keeps $$\vec L\parallel\vec\omega$$; off-axis spin needs the full tensor and produces bearing torques. For a fast spin under a perpendicular torque, expect **precession** $$\Omega_p=\tau/(L\sin\theta)$$ rather than toppling; for torque-free asymmetric motion, expect **free precession** governed by Euler's equations. Rolling and impact problems usually require the translational law $$\vec F=M\vec a_{\text{cm}}$$ *and* the rotational law together.
5. **Rotating or accelerating frame natural (a turntable, a co-rotating orbit, Earth's surface)**: Move into that frame and add the pseudo-forces. The position-dependent **centrifugal** term acts like a potential and sets the equilibria; the velocity-dependent **Coriolis** term does no work but bends paths and decides stability. Steady rotation often turns a dynamics problem into a *statics* problem under $$\vec g_{\text{eff}}$$.
:::
