---
title: "AP Physics C: E&M Cheat Sheet"
sidebar:
  order: 0
---

---

## Constants and Common Values

- Coulomb constant: $$k = \dfrac{1}{4\pi\varepsilon_0} = 8.99\times10^{9}\ \text{N}\cdot\text{m}^2/\text{C}^2$$
- Permittivity of free space: $$\varepsilon_0 = 8.85\times10^{-12}\ \text{C}^2/(\text{N}\cdot\text{m}^2) = 8.85\times10^{-12}\ \text{F/m}$$
- Permeability of free space: $$\mu_0 = 4\pi\times10^{-7}\ \text{T}\cdot\text{m/A}$$, with $$\dfrac{\mu_0}{2\pi} = 2\times10^{-7}\ \text{T}\cdot\text{m/A}$$
- Elementary charge: $$e = 1.602\times10^{-19}\ \text{C}$$
- Electron mass: $$m_e = 9.11\times10^{-31}\ \text{kg}$$
- Electron volt: $$1\ \text{eV} = e(1\ \text{V}) \approx 1.602\times10^{-19}\ \text{J}$$
- Charge is quantized: $$q = ne,\ n\in\mathbb{Z}$$, and conserved in any isolated system

---

## Electric Fields and Forces

### Coulomb's law and point-charge field

- Force between point charges: $$\vec{F} = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1 q_2}{r^2}\hat{r} = k\dfrac{q_1 q_2}{r^2}\hat{r}$$
- Field of a point charge: $$\vec{E} = \dfrac{1}{4\pi\varepsilon_0}\dfrac{Q}{r^2}\hat{r}$$
- Force from a field: $$\vec{F} = q\vec{E}$$
- Superposition (add vectors): $$\vec{E}_{\text{net}} = \displaystyle\sum_i \vec{E}_i$$
- Like charges repel, opposite charges attract; the field points away from positive charge, toward negative

### Continuous charge distributions

- Densities: $$\lambda = \dfrac{dq}{dL}$$, $$\sigma = \dfrac{dq}{dA}$$, $$\rho = \dfrac{dq}{dV}$$
- Field by integration: $$\vec{E} = \dfrac{1}{4\pi\varepsilon_0}\displaystyle\int \dfrac{dq}{r^2}\hat{r}$$
- On-axis ring: $$E = \dfrac{1}{4\pi\varepsilon_0}\dfrac{Qx}{(x^2+R^2)^{3/2}}$$
- On-axis disk: $$E = \dfrac{\sigma}{2\varepsilon_0}\left(1 - \dfrac{x}{\sqrt{x^2+R^2}}\right)$$
- Exploit symmetry: keep only non-cancelling components, then integrate

### Electric dipole

- Dipole moment: $$\vec{p} = q\vec{d}$$ (points from $$-q$$ to $$+q$$)
- Far field on axis: $$E \approx \dfrac{1}{4\pi\varepsilon_0}\dfrac{2p}{r^3}$$ (falls as $$1/r^3$$)
- Torque in a uniform field: $$\vec{\tau} = \vec{p}\times\vec{E},\quad \tau = pE\sin\phi$$
- Energy in a field: $$U = -\vec{p}\cdot\vec{E}$$ (minimized when aligned)

### Charge in a uniform field

- Constant acceleration: $$\vec{a} = \dfrac{q\vec{E}}{m}$$, then apply kinematics (electrical analog of projectile motion)

---

## Gauss's Law and Symmetries

### Flux and the law

- Electric flux: $$\Phi_E = \displaystyle\int \vec{E}\cdot d\vec{A} = EA\cos\theta$$ (uniform, flat)
- Gauss's law: $$\displaystyle\oint \vec{E}\cdot d\vec{A} = \dfrac{Q_{\text{enc}}}{\varepsilon_0}$$
- Always true; computationally useful only when symmetry lets $$E$$ come out of the integral
- Choose a Gaussian surface where $$\vec{E}$$ is constant and parallel or perpendicular to $$d\vec{A}$$

### Standard results

- Infinite line ($$\lambda$$): $$E = \dfrac{\lambda}{2\pi\varepsilon_0 r}$$ (coaxial cylinder)
- Infinite sheet ($$\sigma$$): $$E = \dfrac{\sigma}{2\varepsilon_0}$$ (pillbox; independent of distance)
- Uniform solid sphere, charge $$Q$$, radius $$R$$:
  - Outside ($$r\ge R$$): $$E = \dfrac{1}{4\pi\varepsilon_0}\dfrac{Q}{r^2}$$
  - Inside ($$r<R$$): $$E = \dfrac{1}{4\pi\varepsilon_0}\dfrac{Qr}{R^3}$$ (grows linearly)
- Spherical shell: outside acts like a point charge; inside $$E = 0$$

---

## Electric Potential and Energy

### Energy and potential

- PE of two point charges: $$U = k\dfrac{Qq}{r}$$
- PE of a system: $$U = k\displaystyle\sum_{i<j}\dfrac{q_iq_j}{r_{ij}}$$ (each pair once)
- Potential of a point charge: $$V = \dfrac{kQ}{r}$$
- Potential is a scalar — add with signs: $$V = k\displaystyle\sum_i \dfrac{q_i}{r_i}$$
- Potential of a distribution: $$V = k\displaystyle\int \dfrac{dq}{r}$$
- Energy of a charge in a potential: $$U = qV$$, so $$\Delta U = q\,\Delta V$$
- Work by the field: $$W_{\text{field}} = -q\,\Delta V$$; by an external agent: $$W_{\text{ext}} = +q\,\Delta V$$

### Relating potential and field

- Differential form: $$\vec{E} = -\nabla V$$, and in 1D $$E_x = -\dfrac{dV}{dx}$$
- Integral form: $$V_b - V_a = -\displaystyle\int_a^b \vec{E}\cdot d\vec{r}$$
- Uniform-field plates: $$\Delta V = -\vec{E}\cdot\vec{d}$$, magnitude $$\lvert\Delta V\rvert = Ed$$
- $$\vec{E}$$ points from high to low potential and is perpendicular to equipotentials

### On-axis distribution potentials

- Ring: $$V = \dfrac{kQ}{\sqrt{x^2+R^2}}$$
- Disk: $$V = \dfrac{\sigma}{2\varepsilon_0}\left(\sqrt{x^2+R^2} - x\right)$$
- Solid sphere interior: $$V(r) = \dfrac{kQ}{2R}\left(3 - \dfrac{r^2}{R^2}\right)$$ for $$r\le R$$
- $$V$$ is continuous everywhere, even where $$E$$ has a kink; inside a shell $$V$$ is constant (not zero)

---

## Conductors and Capacitors

### Conductors in electrostatic equilibrium

- Field inside conducting material is zero; excess charge lives on the outer surface
- Field just outside the surface: $$E = \dfrac{\sigma}{\varepsilon_0}$$ (perpendicular to the surface)
- Charge density and field are largest where curvature is sharpest

### Capacitance

- Definition: $$C = \dfrac{Q}{\Delta V}$$ (depends on geometry and material, not on $$Q$$ or $$\Delta V$$)
- Parallel-plate: $$C = \dfrac{\varepsilon_0 A}{d}$$, with field $$E = \dfrac{\sigma}{\varepsilon_0} = \dfrac{Q}{\varepsilon_0 A}$$
- Cylindrical (coaxial): $$C = \dfrac{2\pi\varepsilon_0 L}{\ln(b/a)}$$
- Spherical: $$C = 4\pi\varepsilon_0\dfrac{ab}{b-a}$$; isolated sphere: $$C = 4\pi\varepsilon_0 a$$
- Method for any symmetric capacitor: Gauss for $$E$$, integrate for $$\Delta V$$, then $$C = Q/\Delta V$$

### Combinations

- Parallel (same voltage, charges add): $$C_{\text{eq}} = C_1 + C_2 + \cdots$$
- Series (same charge, voltages add): $$\dfrac{1}{C_{\text{eq}}} = \dfrac{1}{C_1} + \dfrac{1}{C_2} + \cdots$$

### Energy and dielectrics

- Stored energy: $$U = \tfrac{1}{2}Q\,\Delta V = \dfrac{Q^2}{2C} = \tfrac{1}{2}C(\Delta V)^2$$
- Electric energy density: $$u_E = \tfrac{1}{2}\varepsilon_0 E^2$$
- Force between plates: $$F = \dfrac{Q^2}{2\varepsilon_0 A} = \tfrac{1}{2}QE$$ (a plate cannot push on itself)
- Dielectric fills gap: $$C = \kappa C_0 = \dfrac{\kappa\varepsilon_0 A}{d}$$
- Disconnected ($$Q$$ fixed): inserting dielectric drops $$\Delta V$$ and energy
- Connected ($$\Delta V$$ fixed): inserting dielectric raises $$Q$$ and energy

---

## Circuits

### Current, resistance, power

- Current: $$I = \dfrac{dQ}{dt}$$; drift form: $$I = nqAv_d$$
- Ohm's law (ohmic only): $$\Delta V = IR$$
- Resistance of a wire: $$R = \dfrac{\rho L}{A}$$
- Microscopic Ohm's law: $$\vec{J} = \sigma_c\vec{E}$$
- Power: $$P = I\,\Delta V = I^2 R = \dfrac{(\Delta V)^2}{R}$$

### Networks

- Resistors in series (same current): $$R_{\text{eq}} = R_1 + R_2 + \cdots$$
- Resistors in parallel (same voltage): $$\dfrac{1}{R_{\text{eq}}} = \dfrac{1}{R_1} + \dfrac{1}{R_2} + \cdots$$
- Junction rule (charge): $$\displaystyle\sum I_{\text{in}} = \sum I_{\text{out}}$$
- Loop rule (energy): $$\displaystyle\sum \Delta V = 0$$
- Resistor in current direction: $$-IR$$; battery $$-$$ to $$+$$: $$+\mathcal{E}$$
- Real battery terminal voltage: $$V_{\text{terminal}} = \mathcal{E} - Ir$$
- Maximum power to a load when $$R = r$$

### RC circuits

- Time constant: $$\tau = RC$$
- Charging loop equation: $$R\dfrac{dQ}{dt} + \dfrac{Q}{C} = \mathcal{E}$$
- Charging: $$Q(t) = C\mathcal{E}\left(1 - e^{-t/RC}\right)$$, $$V_C = \mathcal{E}\left(1 - e^{-t/RC}\right)$$, $$I(t) = \dfrac{\mathcal{E}}{R}e^{-t/RC}$$
- Discharging: $$Q(t) = Q_0 e^{-t/RC}$$, $$I(t) = -\dfrac{V_0}{R}e^{-t/RC}$$
- Discharge half-life: $$t_{1/2} = RC\ln 2 \approx 0.693\,RC$$
- Limits: capacitor acts like a wire at $$t = 0$$, like an open branch as $$t\to\infty$$
- Ideal meters: ammeter (zero resistance, in series), voltmeter (infinite resistance, in parallel)

---

## Magnetic Forces and Fields

### Force on charges and currents

- Lorentz force: $$\vec{F} = q\vec{E} + q\vec{v}\times\vec{B}$$
- Magnetic force magnitude: $$F = \lvert q\rvert vB\sin\theta$$ (does no work; changes direction only)
- Force on a wire: $$\vec{F} = I\vec{L}\times\vec{B}$$, $$F = ILB\sin\theta$$
- Circular motion: $$\lvert q\rvert vB = \dfrac{mv^2}{r}\Rightarrow r = \dfrac{mv}{\lvert q\rvert B}$$
- Period (speed-independent): $$T = \dfrac{2\pi m}{\lvert q\rvert B}$$, cyclotron frequency $$f = \dfrac{\lvert q\rvert B}{2\pi m}$$
- Velocity selector (crossed fields): $$v = \dfrac{E}{B}$$
- Force per length between parallel wires: $$\dfrac{F}{L} = \dfrac{\mu_0 I_1 I_2}{2\pi d}$$ (same direction attract)

### Current loop as a dipole

- Magnetic moment: $$\vec{\mu} = NI\vec{A}$$
- Torque: $$\vec{\tau} = \vec{\mu}\times\vec{B}$$, $$\tau = NIAB\sin\theta$$
- Dipole energy: $$U = -\vec{\mu}\cdot\vec{B} = -\mu B\cos\theta$$ (lowest when aligned)

### Fields from currents

- Biot–Savart law: $$d\vec{B} = \dfrac{\mu_0}{4\pi}\dfrac{I\,d\vec{\ell}\times\hat{r}}{r^2}$$
- Straight wire: $$B = \dfrac{\mu_0 I}{2\pi r}$$ (right-hand rule for direction)
- On axis of a loop: $$B = \dfrac{\mu_0 I R^2}{2(x^2+R^2)^{3/2}}$$
- Center of a loop ($$N$$ turns): $$B = \dfrac{\mu_0 NI}{2R}$$
- Inside a solenoid: $$B = \mu_0 nI$$, where $$n = N/L$$
- Inside a toroid: $$B = \dfrac{\mu_0 NI}{2\pi r}$$

### Ampère's law

- $$\displaystyle\oint \vec{B}\cdot d\vec{\ell} = \mu_0 I_{\text{enc}}$$
- Best with high symmetry (straight wires, solenoids, toroids); choose $$\vec{B}$$ parallel or perpendicular to $$d\vec{\ell}$$
- Inside a uniform-current wire ($$r<a$$): $$B = \dfrac{\mu_0 I r}{2\pi a^2}$$ (grows linearly)
- Magnetic flux: $$\Phi_B = \displaystyle\int \vec{B}\cdot d\vec{A} = BA\cos\theta$$

---

## Electromagnetic Induction

### Faraday's and Lenz's laws

- Faraday's law: $$\mathcal{E} = -\dfrac{d\Phi_B}{dt}$$; for $$N$$ turns: $$\mathcal{E} = -N\dfrac{d\Phi_B}{dt}$$
- Flux changes via changing $$B$$, area, or orientation
- Lenz's law: induced current opposes the change in $$\Phi_B$$ (energy conservation)

### Motional emf and generators

- Sliding rod: $$\mathcal{E} = B\ell v$$; general: $$\mathcal{E} = \displaystyle\oint (\vec{v}\times\vec{B})\cdot d\vec{\ell}$$
- Induced current: $$I = \dfrac{\mathcal{E}}{R}$$; power balance $$P_{\text{mech}} = P_{\text{elec}} = I^2 R$$
- Rotating loop (AC generator): $$\mathcal{E} = NBA\omega\sin(\omega t)$$, peak $$\mathcal{E}_0 = NBA\omega$$
- Induced (nonconservative) E field: $$\displaystyle\oint \vec{E}\cdot d\vec{\ell} = -\dfrac{d\Phi_B}{dt}$$

### Inductance and energy

- Definition: $$N\Phi_B = LI$$
- Back emf: $$\mathcal{E}_L = -L\dfrac{dI}{dt}$$ (opposes changes in current, not current itself)
- Solenoid inductance: $$L = \mu_0 n^2 A\ell$$
- Stored energy: $$U_B = \tfrac{1}{2}LI^2$$
- Magnetic energy density: $$u_B = \dfrac{B^2}{2\mu_0}$$ (mirrors $$u_E = \tfrac{1}{2}\varepsilon_0 E^2$$)

### LR and LC circuits

- LR loop: $$\mathcal{E} - IR - L\dfrac{dI}{dt} = 0$$, time constant $$\tau = \dfrac{L}{R}$$
- LR charging: $$I(t) = \dfrac{\mathcal{E}}{R}\left(1 - e^{-Rt/L}\right)$$; decay: $$I(t) = I_0 e^{-Rt/L}$$
- Inductor blocks instantaneous current jumps; acts like a wire at steady state
- LC oscillation: $$\dfrac{d^2Q}{dt^2} + \dfrac{1}{LC}Q = 0$$, energy $$\tfrac{1}{2}\dfrac{Q^2}{C} + \tfrac{1}{2}LI^2 = \text{const}$$
- LC frequency: $$\omega = \dfrac{1}{\sqrt{LC}}$$, period $$T = 2\pi\sqrt{LC}$$

### Ampère–Maxwell law

- Displacement-current extension: $$\displaystyle\oint \vec{B}\cdot d\vec{\ell} = \mu_0 I_{\text{enc}} + \mu_0\varepsilon_0\dfrac{d\Phi_E}{dt}$$
- Changing electric fields produce magnetic fields, completing the path to electromagnetic waves

---

## Most Common AP Physics C: E&M Mistakes

1. Adding electric fields as scalars instead of vectors (potential adds as a scalar; field does not)
2. Forgetting that inside a conductor $$E = 0$$, but $$V$$ is a nonzero constant
3. Misplacing the right-hand rule sign, especially for negative charges and Lenz's law
4. Treating $$E = \sigma/\varepsilon_0$$ (conductor surface) and $$E = \sigma/2\varepsilon_0$$ (isolated sheet) as the same
5. Forgetting the $$N$$ factor in $$\mathcal{E} = -N\,d\Phi_B/dt$$ and $$N\Phi_B = LI$$
6. Mixing up capacitor and resistor combination rules (series capacitors add reciprocals)
7. Ignoring the capacitor-as-wire / inductor-as-wire limits when reading off $$t=0$$ and $$t\to\infty$$ states
8. Dropping units or leaving microfarads, nanocoulombs, and kilohms unconverted

---

## Fast Problem-Solving Checklist

1. Identify the unit: field/force, flux, potential, capacitor, circuit, magnetic force, or induction.
2. Check for symmetry first — it decides between Gauss/Ampère and a Biot–Savart/Coulomb integral.
3. Decide scalar vs. vector: potential and energy add as scalars; fields and forces add as vectors.
4. For circuits, reduce series/parallel groups, then apply Ohm, Kirchhoff, and the $$t=0$$ / $$t\to\infty$$ limits.
5. Track units and convert prefixes before plugging in numbers.
6. Check sign and magnitude: does the field point the right way, and does energy go where it should?
