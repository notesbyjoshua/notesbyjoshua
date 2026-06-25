---
title: "AP Physics C: Mechanics Cheat Sheet"
sidebar:
  order: 0
---

# AP Physics C Mechanics Cheat Sheet

---

## Constants and Common Values

- Acceleration due to Earth's gravity: $$g = 9.8\ \text{m/s}^2$$
- Universal gravitational constant: $$G = 6.67 \times 10^{-11}\ \text{N·m}^2/\text{kg}^2$$
- Newton (force unit): $$1\ \text{N} = 1\ \text{kg·m/s}^2$$
- Joule (energy unit): $$1\ \text{J} = 1\ \text{N·m} = 1\ \text{kg·m}^2/\text{s}^2$$
- Watt (power unit): $$1\ \text{W} = 1\ \text{J/s}$$
- Radians in one revolution: $$2\pi\ \text{rad} = 360^\circ$$
- Earth's radius (useful for orbits/escape): $$R_\oplus \approx 6.37 \times 10^6\ \text{m}$$

---

## 1D and 2D Kinematics

### Definitions (calculus forms)

- Instantaneous velocity: $$v = \dfrac{dx}{dt}$$
- Instantaneous acceleration: $$a = \dfrac{dv}{dt} = \dfrac{d^2x}{dt^2}$$
- Recover velocity and position by integration: $$\Delta v = \displaystyle\int a\,dt,\qquad \Delta x = \displaystyle\int v\,dt$$
- Acceleration depending on position (chain-rule trick): $$a = v\dfrac{dv}{dx}$$
- Average quantities: $$\bar{v} = \dfrac{\Delta x}{\Delta t},\qquad \bar{a} = \dfrac{\Delta v}{\Delta t}$$

### Motion graphs

- Slopes go down the list: slope of $$x$$-$$t$$ is $$v$$; slope of $$v$$-$$t$$ is $$a$$.
- Areas go up the list: area under $$v$$-$$t$$ is $$\Delta x$$; area under $$a$$-$$t$$ is $$\Delta v$$.

### Constant acceleration (the "Big Five")

- Missing $$\Delta x$$: $$v_f = v_0 + at$$
- Missing $$v_f$$: $$\Delta x = v_0 t + \tfrac{1}{2}at^2$$
- Missing $$v_0$$: $$\Delta x = v_f t - \tfrac{1}{2}at^2$$
- Missing $$t$$: $$v_f^2 = v_0^2 + 2a\Delta x$$
- Missing $$a$$: $$\Delta x = \dfrac{v_0 + v_f}{2}\,t$$

These hold only for constant acceleration; if $$a$$ varies, integrate instead.

### Projectile motion (up is $$+y$$)

- Launch components: $$v_{0x} = v_0\cos\theta,\qquad v_{0y} = v_0\sin\theta$$
- Position: $$x = v_{0x}t,\qquad y = v_{0y}t - \tfrac{1}{2}gt^2$$
- Velocity: $$v_x = v_{0x},\qquad v_y = v_{0y} - gt$$
- Level-ground range: $$R = \dfrac{v_0^2\sin(2\theta)}{g}$$ (max at $$\theta = 45^\circ$$)
- Max height: $$h = \dfrac{v_0^2\sin^2\theta}{2g}$$
- Time of flight: $$T = \dfrac{2v_0\sin\theta}{g}$$
- If launch and landing heights differ, solve the $$y$$ quadratic instead of using these shortcuts.

### Relative velocity

- Composition rule: $$\vec{v}_{A/C} = \vec{v}_{A/B} + \vec{v}_{B/C}$$ (swap subscripts to negate: $$\vec{v}_{A/B} = -\vec{v}_{B/A}$$)

---

## Force and Translational Dynamics

### Newton's laws

- First law: if $$\sum\vec{F} = 0$$, then $$\vec{a} = 0$$.
- Second law: $$\sum\vec{F} = m\vec{a}$$, by components $$\sum F_x = ma_x,\quad \sum F_y = ma_y$$.
- Third law: $$\vec{F}_{A\text{ on }B} = -\vec{F}_{B\text{ on }A}$$.
- General (momentum) form: $$\vec{F}_{\text{net}} = \dfrac{d\vec{p}}{dt} = m\dfrac{d\vec{v}}{dt}$$ for constant mass.

### Common forces

- Weight: $$F_g = mg$$ (points down)
- Normal force: perpendicular to surface; solve from the perpendicular equation, never assume $$F_N = mg$$.
- Static friction: $$0 \le f_s \le \mu_s F_N$$ (max at impending slip)
- Kinetic friction: $$f_k = \mu_k F_N$$, usually $$\mu_s > \mu_k$$
- Hooke's law (spring): $$\vec{F}_s = -k\vec{x}$$
- Linear drag: $$\vec{F}_d = -b\vec{v}$$; terminal velocity $$v_t = mg/b$$

### Inclines and slipping

- Weight components: $$mg\sin\theta$$ (along plane), $$mg\cos\theta$$ (perpendicular)
- Normal force on incline: $$F_N = mg\cos\theta$$
- Frictionless acceleration down plane: $$a = g\sin\theta$$
- Maximum angle before sliding: $$\tan\theta_{\max} = \mu_s$$

### Connected objects and elevators

- Atwood machine: $$a = \dfrac{(m_2 - m_1)g}{m_1 + m_2},\qquad T = \dfrac{2m_1 m_2}{m_1 + m_2}g$$
- Apparent weight (up positive): $$F_N = m(g + a)$$

### Circular motion

- Centripetal acceleration: $$a_c = \dfrac{v^2}{r} = \omega^2 r$$
- Radial Newton's second law: $$\sum F_r = m\dfrac{v^2}{r}$$
- Flat-curve max speed: $$v_{\max} = \sqrt{\mu_s g r}$$
- Frictionless banked curve: $$\tan\theta = \dfrac{v^2}{rg},\qquad v = \sqrt{rg\tan\theta}$$
- Minimum speed at top of vertical loop: $$v_{\text{top}} = \sqrt{gr}$$
- Nonuniform: $$a_r = \dfrac{v^2}{r},\qquad a_t = \dfrac{dv}{dt}$$

### Systems

- Center-of-mass dynamics: $$\sum\vec{F}_{\text{ext}} = M\vec{a}_{\text{cm}}$$ (internal forces cancel in pairs)
- Pseudo-force in an accelerating frame: $$\vec{F}_{\text{pseudo}} = -m\vec{a}_{\text{frame}}$$

---

## Work, Energy, and Power

### Work

- Constant force: $$W = \vec{F}\cdot\Delta\vec{r} = F\Delta r\cos\theta$$
- Variable force (line integral): $$W = \displaystyle\int_C \vec{F}\cdot d\vec{r}$$, in 1D $$W = \displaystyle\int_{x_i}^{x_f} F_x\,dx$$
- Sign of work: positive for $$0\le\theta<90^\circ$$, negative for $$90^\circ<\theta\le180^\circ$$, zero at $$\theta = 90^\circ$$ (a perpendicular force does no work).

### Kinetic energy and the work-energy theorem

- Kinetic energy: $$K = \tfrac{1}{2}mv^2$$
- Work-energy theorem: $$W_{\text{net}} = \Delta K$$
- Useful identity: $$K = \dfrac{p^2}{2m}$$

### Potential energy

- Conservative force from potential: $$F_x = -\dfrac{dU}{dx}$$, in 3D $$\vec{F} = -\nabla U$$
- Defining relation: $$W_{\text{cons}} = -\Delta U$$, and $$\displaystyle\oint\vec{F}\cdot d\vec{r} = 0$$ for conservative forces
- Gravity near Earth: $$U_g = mgy$$
- Universal gravitation: $$U_g(r) = -\dfrac{GMm}{r}$$
- Spring: $$U_s = \tfrac{1}{2}kx^2$$

### Conservation of energy

- Only conservative forces: $$K_i + U_i = K_f + U_f$$
- With nonconservative work: $$K_i + U_i + W_{\text{nc}} = K_f + U_f$$, equivalently $$W_{\text{nc}} = \Delta E_{\text{mech}}$$
- Energy diagrams: equilibrium where $$\dfrac{dU}{dx} = 0$$; stable if $$\dfrac{d^2U}{dx^2} > 0$$, unstable if $$\dfrac{d^2U}{dx^2} < 0$$; turning points where $$E = U(x)$$.

### Power

- Instantaneous power: $$P = \dfrac{dW}{dt} = \vec{F}\cdot\vec{v}$$
- Average power: $$\bar{P} = \dfrac{\Delta E}{\Delta t}$$

---

## Linear Momentum and Impulse

### Momentum and impulse

- Momentum: $$\vec{p} = m\vec{v}$$
- Newton's second law (general): $$\vec{F}_{\text{net}} = \dfrac{d\vec{p}}{dt}$$
- Impulse: $$\vec{J} = \displaystyle\int_{t_i}^{t_f}\vec{F}_{\text{net}}\,dt = \Delta\vec{p}$$ (area under an $$F$$-$$t$$ graph)
- Average force: $$\vec{F}_{\text{avg}} = \dfrac{\vec{J}}{\Delta t} = \dfrac{\Delta\vec{p}}{\Delta t}$$

### Conservation of momentum

- If $$\sum\vec{F}_{\text{ext}} = 0$$ (or its impulse is negligible): $$\vec{P}_i = \vec{P}_f$$
- Conserve components separately in 2D: $$\sum p_{x,i} = \sum p_{x,f},\qquad \sum p_{y,i} = \sum p_{y,f}$$

### Center of mass

- Discrete: $$\vec{r}_{\text{cm}} = \dfrac{1}{M}\displaystyle\sum_i m_i\vec{r}_i$$
- Continuous: $$\vec{r}_{\text{cm}} = \dfrac{1}{M}\displaystyle\int\vec{r}\,dm$$
- System momentum: $$\vec{P}_{\text{sys}} = M\vec{v}_{\text{cm}}$$

### Collisions

- Elastic: momentum and kinetic energy both conserved, $$\vec{P}_i = \vec{P}_f,\ K_i = K_f$$
- Perfectly inelastic (stick together): $$m_1\vec{v}_{1i} + m_2\vec{v}_{2i} = (m_1+m_2)\vec{v}_f$$ (maximum KE loss)
- 1D elastic relative-speed reversal: $$v_{1i} - v_{2i} = -(v_{1f} - v_{2f})$$
- 1D elastic final velocities:

$$
v_{1f} = \frac{m_1-m_2}{m_1+m_2}v_{1i} + \frac{2m_2}{m_1+m_2}v_{2i}
$$

$$
v_{2f} = \frac{2m_1}{m_1+m_2}v_{1i} + \frac{m_2-m_1}{m_1+m_2}v_{2i}
$$

- Equal masses in 1D elastic collision exchange velocities.
- Variable mass (rocket equation): $$\Delta v = u\ln\dfrac{m_0}{m_f}$$

---

## Torque and Rotational Dynamics

### Angular kinematics

- Definitions: $$\omega = \dfrac{d\theta}{dt},\qquad \alpha = \dfrac{d\omega}{dt} = \dfrac{d^2\theta}{dt^2}$$
- Constant $$\alpha$$: $$\omega_f = \omega_i + \alpha t,\quad \theta_f - \theta_i = \omega_i t + \tfrac{1}{2}\alpha t^2,\quad \omega_f^2 = \omega_i^2 + 2\alpha(\theta_f - \theta_i)$$
- Linear-angular links: $$s = r\theta,\quad v_t = r\omega,\quad a_t = r\alpha,\quad a_r = r\omega^2$$

### Torque

- Vector definition: $$\vec{\tau} = \vec{r}\times\vec{F}$$
- Magnitude: $$\tau = rF\sin\theta = F r_\perp = r F_\perp$$
- Sign convention: counterclockwise positive, clockwise negative.

### Rotational inertia

- Point masses: $$I = \displaystyle\sum_i m_i r_i^2$$
- Continuous body: $$I = \displaystyle\int r^2\,dm$$

#### Moment of inertia table

- Point mass: $$I = mr^2$$
- Thin hoop about center: $$I = MR^2$$
- Solid disk/cylinder about center: $$I = \tfrac{1}{2}MR^2$$
- Solid sphere about diameter: $$I = \tfrac{2}{5}MR^2$$
- Thin rod about center: $$I = \tfrac{1}{12}ML^2$$
- Thin rod about end: $$I = \tfrac{1}{3}ML^2$$

#### Axis theorems

- Parallel-axis: $$I = I_{\text{cm}} + Md^2$$
- Perpendicular-axis (flat lamina only): $$I_z = I_x + I_y$$

### Newton's second law for rotation

- Fixed axis: $$\sum\tau = I\alpha$$
- About the center of mass: $$\sum\vec{\tau}_{\text{cm}} = I_{\text{cm}}\vec{\alpha}$$, with $$\sum\vec{F}_{\text{ext}} = M\vec{a}_{\text{cm}}$$
- Static equilibrium: $$\sum\vec{F} = 0$$ and $$\sum\vec{\tau} = 0$$ (in equilibrium, torque is zero about every axis—pivot at an unknown force).

### Rolling without slipping

- Constraints: $$v_{\text{cm}} = R\omega,\qquad a_{\text{cm}} = R\alpha$$
- Acceleration down an incline: $$a = \dfrac{g\sin\theta}{1 + I_{\text{cm}}/MR^2}$$ (sphere fastest, then disk, then hoop)

---

## Energy and Momentum of Rotating Systems

### Rotational energy, work, and power

- Rotational kinetic energy: $$K_{\text{rot}} = \tfrac{1}{2}I\omega^2$$
- Total (translation + rotation): $$K = \tfrac{1}{2}Mv_{\text{cm}}^2 + \tfrac{1}{2}I_{\text{cm}}\omega^2$$
- Rolling speed from height: $$v = \sqrt{\dfrac{2gh}{1 + I_{\text{cm}}/MR^2}}$$
- Rotational work: $$W_{\text{rot}} = \displaystyle\int\tau\,d\theta$$, with $$W_{\text{net,rot}} = \Delta K_{\text{rot}}$$
- Rotational power: $$P = \tau\omega = \vec{\tau}\cdot\vec{\omega}$$

### Angular momentum

- Particle: $$\vec{L} = \vec{r}\times\vec{p},\qquad L = rp\sin\theta$$ (depends on the chosen origin)
- Rigid body (symmetry axis): $$\vec{L} = I\vec{\omega}$$
- Torque as rate of change: $$\sum\vec{\tau}_{\text{ext}} = \dfrac{d\vec{L}}{dt}$$
- Conservation (zero external torque): $$\vec{L}_i = \vec{L}_f$$, i.e. $$I_i\omega_i = I_f\omega_f$$
- Angular impulse: $$\displaystyle\int_{t_i}^{t_f}\vec{\tau}_{\text{ext}}\,dt = \Delta\vec{L}$$
- Central force (e.g. gravity): torque about center is zero, so $$L$$ is conserved; areal velocity $$\dfrac{dA}{dt} = \dfrac{L}{2m}$$ is constant (Kepler's second law).

Note: $$L$$ is conserved whenever external torque vanishes, but $$K_{\text{rot}}$$ need not be (sticking/merging lowers it; pulling mass inward raises it).

---

## Oscillations (SHM)

### Simple harmonic motion

- Condition: $$a = -\omega^2 x$$, equivalently $$\dfrac{d^2x}{dt^2} + \omega^2 x = 0$$
- General solution: $$x(t) = A\cos(\omega t + \phi)$$
- Velocity and acceleration: $$v(t) = -A\omega\sin(\omega t + \phi),\qquad a(t) = -A\omega^2\cos(\omega t + \phi)$$
- Amplitude from initial conditions: $$A = \sqrt{x_0^2 + (v_0/\omega)^2}$$
- Maxima: $$v_{\max} = A\omega,\qquad a_{\max} = A\omega^2$$
- Speed vs position: $$v(x) = \pm\omega\sqrt{A^2 - x^2}$$
- Period and frequency: $$\omega = 2\pi f = \dfrac{2\pi}{T}$$

### Common oscillators

- Mass-spring: $$\omega = \sqrt{\dfrac{k}{m}},\qquad T = 2\pi\sqrt{\dfrac{m}{k}}$$ (independent of amplitude)
- Springs in parallel: $$k_{\text{eff}} = k_1 + k_2$$ (stiffer)
- Springs in series: $$\dfrac{1}{k_{\text{eff}}} = \dfrac{1}{k_1} + \dfrac{1}{k_2}$$ (softer)
- Simple pendulum (small angle): $$\omega = \sqrt{\dfrac{g}{L}},\qquad T = 2\pi\sqrt{\dfrac{L}{g}}$$
- Physical pendulum ($$I$$ about the pivot, $$d$$ to the CM): $$T = 2\pi\sqrt{\dfrac{I}{mgd}}$$
- Small oscillations near a potential minimum: $$k_{\text{eff}} = U''(x_0),\qquad \omega = \sqrt{\dfrac{U''(x_0)}{m}}$$

### Energy in SHM

- Total energy: $$E = K + U = \tfrac{1}{2}mv^2 + \tfrac{1}{2}kx^2 = \tfrac{1}{2}kA^2 = \tfrac{1}{2}mv_{\max}^2$$

### Damping and resonance (qualitative)

- Damped oscillator: $$m\dfrac{d^2x}{dt^2} + b\dfrac{dx}{dt} + kx = 0$$
- Critical damping coefficient: $$b_c = 2\sqrt{mk} = 2m\omega_0$$
- Underdamped ($$b < b_c$$) oscillates with decaying amplitude $$e^{-(b/2m)t}$$; critically damped returns fastest with no overshoot; overdamped returns slowly.
- Resonance occurs when the driving frequency $$\omega_d$$ is near the natural frequency $$\omega_0 = \sqrt{k/m}$$; lighter damping gives a taller, narrower peak.

---

## Gravitation

### Newton's law of gravitation

- Force magnitude: $$F_g = \dfrac{GMm}{r^2}$$ (attractive, along the line joining the masses)
- Gravitational field / surface gravity: $$g = \dfrac{GM}{R^2}$$
- Potential energy (zero at infinity): $$U_g(r) = -\dfrac{GMm}{r}$$

### Orbits and escape

- Circular orbit (gravity supplies the centripetal force): $$\dfrac{GMm}{r^2} = \dfrac{mv^2}{r}\ \Rightarrow\ v_{\text{orbit}} = \sqrt{\dfrac{GM}{r}}$$
- Escape speed: $$v_{\text{esc}} = \sqrt{\dfrac{2GM}{R}} = \sqrt{2gR}$$
- Kepler's third law (circular orbit): $$T^2 = \dfrac{4\pi^2}{GM}r^3$$
- Angular momentum is conserved in any orbit (central force), so $$v_p r_p = v_a r_a$$ at perihelion and aphelion.

---

## Most Common AP Physics C: Mechanics Mistakes

1. Using the Big Five kinematics equations when acceleration is not constant—integrate instead.
2. Assuming $$F_N = mg$$ on inclines, in elevators, or with extra applied forces.
3. Treating $$f_s = \mu_s F_N$$ always; that is only the maximum static friction.
4. Forgetting that a perpendicular force (normal, tension in circular motion) does zero work.
5. Mixing momentum and energy conservation in the wrong stage of a collision (e.g. the ballistic pendulum: momentum during impact, energy during the swing).
6. Using $$\tau = rF$$ without the $$\sin\theta$$ (lever arm).
7. Computing $$I$$ about the wrong axis—remember the parallel-axis theorem.
8. Assuming $$K_{\text{rot}}$$ is conserved when only $$L$$ is (inelastic rotational collisions lose energy).
9. Sign and quadrant errors when finding the SHM phase constant $$\phi$$ from $$\arctan$$ alone.
10. Forgetting the negative sign in $$U_g = -GMm/r$$ for universal gravitation.

---

## Fast Problem-Solving Checklist

1. Identify the system and draw a free-body (or extended-body) diagram.
2. Decide the right tool: kinematics, Newton's laws, energy, momentum, or rotation.
3. Choose axes and a sign convention that match the geometry or expected acceleration.
4. For energy/momentum problems, check whether the relevant quantity is conserved before writing equations.
5. Solve symbolically first, then substitute numbers with units.
6. Check limiting cases (zero friction, equal masses, small angle) and confirm the sign and magnitude make physical sense.
7. If given a graph, always remember that the slope corresponds to the derivative/division, and the area under the curve correlates to integration/multiplication.
