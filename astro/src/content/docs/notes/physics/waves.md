---
title: "Waves"
description: "Physics notes on waves, oscillations, sound, standing waves, superposition, interference, resonance, and wave speed."
sidebar:
  order: 10
---

---

**Yo ts is not done yet please edit and stuff**

---

## Wave definition

<div class="theorem-box">

**Definition (Wave).** A **wave** is a disturbance that transports energy and momentum through a medium (or through space) without any net transport of matter. The particles of the medium oscillate about fixed equilibrium positions; it is the *pattern* of disturbance that travels.

</div>

- In a **transverse** wave the medium oscillates perpendicular to the direction of propagation (a wave on a string, light).
- In a **longitudinal** wave the medium oscillates along the direction of propagation (sound, compression waves in a spring).

Mechanical waves require a medium with two ingredients: something that provides a **restoring force** (tension, pressure, elasticity) and something that provides **inertia** (mass density). The wave speed is always set by the competition between these two.

## The wave function and the wave equation

Consider a disturbance $$y$$ that depends on position $$x$$ and time $$t$$. A pulse of any shape moving in the $$+x$$ direction at speed $$v$$ without changing shape must depend on $$x$$ and $$t$$ only through the combination $$x - vt$$:

$$
y(x,t) = f(x - vt).
$$

A wave moving in the $$-x$$ direction is $$f(x+vt)$$. The single most important sinusoidal solution is

$$
y(x,t) = A\sin(kx - \omega t + \phi),
$$

where

$$
k = \frac{2\pi}{\lambda}
\quad(\text{wave number}),
\qquad
\omega = 2\pi f = \frac{2\pi}{T}
\quad(\text{angular frequency}),
$$

and the speed, wavelength, and frequency are linked by

$$
v = \frac{\omega}{k} = \lambda f = \frac{\lambda}{T}.
$$

Both forms satisfy the **wave equation**, the partial differential equation every nondispersive wave obeys:

<div class="theorem-box">

**Theorem (Wave equation).** Every nondispersive wave $$y(x,t)$$ obeys

$$
\frac{\partial^2 y}{\partial x^2} = \frac{1}{v^2}\frac{\partial^2 y}{\partial t^2}.
$$

</div>

USAPhO will not require you to solve these types of equations, but it is good to know the general solutions.

A slick way to see what those solutions are: factor the wave equation as a difference of squares,

$$
\left(\partial_t^2 - v^2\partial_x^2\right)y = (\partial_t - v\partial_x)(\partial_t + v\partial_x)\,y = 0.
$$

Anything killed by either factor solves the equation, and those are exactly the right- and left-movers $$f(x-vt)$$ and $$g(x+vt)$$. Because the equation is linear, the **general solution** is their superposition,

$$
y(x,t) = f(x-vt) + g(x+vt),
$$

for arbitrary shapes $$f$$ and $$g$$. Every wave problem on a string is ultimately about choosing $$f$$ and $$g$$ to match the initial conditions and boundaries.

<div class="theorem-box">

**Proof (Wave definition).** Let $$u = x - vt$$ and $$y = f(u)$$. By the chain rule,

$$
\frac{\partial y}{\partial x} = f'(u),
\qquad
\frac{\partial y}{\partial t} = -v f'(u),
$$

and differentiating again,

$$
\frac{\partial^2 y}{\partial x^2} = f''(u),
\qquad
\frac{\partial^2 y}{\partial t^2} = v^2 f''(u).
$$

Dividing, $$\partial^2 y/\partial x^2 = (1/v^2)\,\partial^2 y/\partial t^2$$ for *any* twice-differentiable shape $$f$$. So the wave equation does not care about the shape of the pulse — only that it translates rigidly at speed $$v$$.

</div>

A useful distinction: the **wave speed** $$v$$ is how fast the pattern moves, while the **transverse velocity** of a point on the string is

$$
u_y = \frac{\partial y}{\partial t} = -\omega A\cos(kx - \omega t + \phi),
$$

with maximum magnitude $$\omega A$$.

:::warning
The **wave speed** $$v$$ and the **transverse velocity** $$u_y$$ are completely different quantities — do not confuse them. $$v$$ is how fast the pattern moves; $$u_y$$ is how fast a single point on the string moves up and down.
:::

## Waves on a string

For a string with tension $$T$$ and linear mass density $$\mu$$ (mass per length), the wave speed is

$$
v = \sqrt{\frac{T}{\mu}}.
$$

This is the prototype of "restoring force over inertia": more tension means a faster wave, more mass per length means a slower one.

When the tension varies along the string, so does the wave speed. The classic example is a **rope hanging under its own weight**: at a height $$x$$ above the bottom, the tension equals the weight of rope below it, $$T = \mu g x$$, so

$$
v(x) = \sqrt{\frac{T}{\mu}} = \sqrt{gx}.
$$

A pulse therefore speeds up as it climbs. The time to travel the full length $$L$$ is

$$
\tau = \int_0^L \frac{dx}{\sqrt{gx}} = 2\sqrt{\frac{L}{g}},
$$

which is — pleasingly — twice the time an object would take to *fall* the length of the rope.

<div class="theorem-box">

**Proof (Wave velocity equation).** Consider a small arc of string of length $$\Delta x$$ carrying a wave. The tension pulls tangentially at both ends; if the slope is small, the net upward (transverse) force is

$$
F_y = T\sin\theta_2 - T\sin\theta_1 \approx T\left(\frac{\partial y}{\partial x}\Big|_{x+\Delta x} - \frac{\partial y}{\partial x}\Big|_{x}\right) \approx T\frac{\partial^2 y}{\partial x^2}\Delta x.
$$

The mass of the arc is $$\mu\,\Delta x$$ and its transverse acceleration is $$\partial^2 y/\partial t^2$$, so Newton's second law gives

$$
T\frac{\partial^2 y}{\partial x^2}\Delta x = \mu\,\Delta x\,\frac{\partial^2 y}{\partial t^2}
\quad\Longrightarrow\quad
\frac{\partial^2 y}{\partial x^2} = \frac{\mu}{T}\frac{\partial^2 y}{\partial t^2}.
$$

Comparing with the wave equation, $$v^2 = T/\mu$$.

</div>

## Energy and power

A sinusoidal wave carries energy past a point at an average rate

$$
P_{\text{avg}} = \tfrac12 \mu\, \omega^2 A^2 v.
$$

The key scalings to remember: power (and intensity) go as the **square of both amplitude and frequency**. Doubling the frequency at fixed amplitude quadruples the power transmitted.

The energy is split between **kinetic** energy (transverse motion) and **potential** energy (stretching of the string against tension). A useful fact for any traveling wave $$y = f(x - vt)$$: the kinetic and potential energy densities are *equal at every point and every instant*, because $$\partial y/\partial t = -v\,\partial y/\partial x$$ ties the two together. This equipartition fails for a standing wave, where energy sloshes back and forth between purely kinetic (string flat, moving fast) and purely potential (string maximally bent, momentarily at rest).

## Superposition and interference

<div class="theorem-box">

**Theorem (Principle of superposition).** When two or more waves overlap in a linear medium, the net disturbance is the **sum** of the individual disturbances:

$$
y_{\text{net}} = y_1 + y_2 + \cdots
$$

</div>

This is what makes interference possible. For two waves of equal amplitude and frequency differing in phase by $$\delta$$,

$$
y = A\sin(kx-\omega t) + A\sin(kx-\omega t+\delta)
= \underbrace{2A\cos\tfrac{\delta}{2}}_{\text{net amplitude}}\sin\!\left(kx-\omega t+\tfrac{\delta}{2}\right).
$$

The interference is

- **Constructive** (amplifies the wave) when $$\delta = 0, 2\pi, 4\pi, \dots$$ (amplitude $$2A$$),
- **Destructive** (de-amplifies the wave) when $$\delta = \pi, 3\pi, \dots$$ (amplitude $$0$$).

For two sources, a phase difference usually arises from a **path-length difference** $$\Delta r$$:

$$
\delta = \frac{2\pi}{\lambda}\,\Delta r.
$$

So constructive interference is $$\Delta r = m\lambda$$ and destructive is $$\Delta r = (m+\tfrac12)\lambda$$ for integer $$m$$ — the backbone of all interference problems (and the double-slit on the [Optics](/notes/physics/optics/) page).

## Standing waves and normal modes

Add two identical waves traveling in opposite directions:

$$
y = A\sin(kx-\omega t) + A\sin(kx+\omega t) = 2A\sin(kx)\cos(\omega t).
$$

The result does not travel — it is a **standing wave**. The space and time parts have separated: every point oscillates at the same frequency $$\omega$$, but with a position-dependent amplitude $$2A\sin(kx)$$.

- **Nodes** (always at rest) occur where $$\sin(kx)=0$$, i.e. $$x = 0, \tfrac{\lambda}{2}, \lambda, \dots$$ — spaced half a wavelength apart.
- **Antinodes** (maximum swing) sit halfway between nodes.

Confining a wave between boundaries selects a discrete set of allowed wavelengths — the **normal modes** or **harmonics**.

String fixed at both ends (nodes at each end), length $$L$$:

$$
\lambda_n = \frac{2L}{n},
\qquad
f_n = \frac{nv}{2L},
\qquad n = 1, 2, 3, \dots
$$

The lowest mode ($$n=1$$) is the **fundamental** mode, while the rest are higher harmonics, and here *all* integer harmonics are present.

In a pipe, a closed end forces a displacement node (pressure antinode); an open end is a displacement antinode (pressure node).

- Open–open pipe: $$\;f_n = \dfrac{nv}{2L},\quad n=1,2,3,\dots$$ (all harmonics)
- Open–closed pipe: $$\;f_n = \dfrac{(2n-1)v}{4L},\quad n=1,2,3,\dots$$ (**odd harmonics only**)

<div class="theorem-box">

**Example.** A guitar string of length $$L = 0.65\text{ m}$$ and linear density $$\mu = 5.0\times 10^{-3}\text{ kg/m}$$ is tuned to a fundamental of $$f_1 = 110\text{ Hz}$$. What tension is required?

The fundamental of a string fixed at both ends is $$f_1 = v/2L$$, so the required wave speed is

$$
v = 2Lf_1 = 2(0.65)(110) = 143\text{ m/s}.
$$

Since $$v = \sqrt{T/\mu}$$,

$$
T = \mu v^2 = (5.0\times 10^{-3})(143)^2 \approx 102\text{ N}.
$$

Roughly $$100\text{ N}$$ — about the weight of a $$10\text{ kg}$$ mass, which is why guitar necks must be sturdy.

</div>

## Reflection and boundary conditions

When a pulse reaches a boundary it is partly reflected and partly transmitted.

- At a **fixed end** (string tied to a wall, or a denser medium), the reflected pulse is **inverted** — it picks up a phase shift of $$\pi$$.
- At a **free end** (or a lighter medium), the reflected pulse is **upright** — no phase shift.

More generally, for a wave going from a string of density $$\mu_1$$ to one of density $$\mu_2$$ (same tension, so wave speeds $$v_1, v_2$$), the amplitude reflection and transmission coefficients are

$$
r = \frac{v_2 - v_1}{v_2 + v_1},
\qquad
t = \frac{2v_2}{v_2 + v_1}.
$$

When the second medium is denser ($$v_2 < v_1$$), $$r<0$$ — the reflection is inverted, recovering the fixed-end rule as the limiting case $$v_2 \to 0$$.

The cleaner way to package this is the **impedance** of the medium,

$$
Z = \sqrt{\mu T} = \mu v,
$$

in terms of which the reflection and transmission coefficients are

$$
r = \frac{Z_1 - Z_2}{Z_1 + Z_2},
\qquad
t = \frac{2Z_1}{Z_1 + Z_2}.
$$

Reflection happens whenever the impedances **mismatch**, and the reflection vanishes ($$r=0$$, perfect transmission) when $$Z_1 = Z_2$$ even if the media are otherwise different. This is exactly the same idea as matching impedances on a transmission line, and it is why engineers insert gradual "impedance-matching" devices (a tapered horn, an anti-reflection coating) to suppress unwanted reflections by softening the discontinuity.

## Sound waves

Sound is a longitudinal pressure wave. Its speed in a fluid of bulk modulus $$B$$ and density $$\rho$$ is

$$
v = \sqrt{\frac{B}{\rho}},
$$

and for an ideal gas this becomes

$$
v = \sqrt{\frac{\gamma P}{\rho}} = \sqrt{\frac{\gamma R T}{M}},
$$

where $$\gamma$$ is the ratio of specific heats (see the [Thermodynamics](/notes/physics/thermodynamics/) page). Note that sound speed depends on temperature but not on pressure for an ideal gas (since $$P/\rho \propto T$$).

A sound wave can be described either by the **displacement** $$\xi(x,t)$$ of the gas parcels or by the **pressure variation** $$\delta P \propto -\partial\xi/\partial x$$. These are a quarter-wavelength out of step, which makes the boundary rules subtle. The reliable principle: *whatever quantity the boundary forces to zero is the one that gets a node and flips sign on reflection.*

- A **hard wall** pins the displacement, $$\xi = 0$$: it is a displacement node and a pressure antinode.
- An **open end** of a tube sits at atmospheric pressure, $$\delta P = 0$$: it is a pressure node and a displacement antinode.

This is why an open–closed pipe has the open end as a displacement antinode and the closed end as a displacement node, giving the odd-harmonic series quoted above. (Plenty of textbooks botch this by claiming "hard boundaries flip transverse waves but not longitudinal ones" — not true; track which quantity is fixed.)

**Intensity** is power per unit area, $$I = P/A$$. For a point source radiating uniformly into spheres,

$$
I = \frac{P}{4\pi r^2} \propto \frac{1}{r^2},
$$

so amplitude falls as $$1/r$$. Because human hearing spans many orders of magnitude, loudness is measured on a logarithmic **decibel** scale:

$$
\beta = 10\log_{10}\frac{I}{I_0},
\qquad
I_0 = 10^{-12}\text{ W/m}^2.
$$

Every factor of $$10$$ in intensity adds $$10\text{ dB}$$; a factor of $$2$$ adds about $$3\text{ dB}$$.

## Beats

Two waves of nearly equal frequencies $$f_1$$ and $$f_2$$ superpose to give a slow amplitude modulation, called **beats**, heard at the difference frequency:

$$
f_{\text{beat}} = \lvert f_1 - f_2\rvert.
$$

Musicians tune by listening for the beats to slow to zero.

## The Doppler effect

<div class="theorem-box">

**Theorem (Doppler effect).** When source and observer move relative to the medium, the observed frequency shifts. With all speeds measured relative to the medium,

$$
f' = f\,\frac{v \pm v_{\text{obs}}}{v \mp v_{\text{src}}}.
$$

</div>

The sign rule that never fails: *choose signs so that approach raises the pitch and recession lowers it.* Concretely, the top sign (numerator $$+$$, denominator $$-$$) applies when the motion is *toward* the other party.

<div class="theorem-box">

**Example.** An ambulance emits a $$700\text{ Hz}$$ siren and drives toward a stationary listener at $$35\text{ m/s}$$. Take the speed of sound as $$v = 343\text{ m/s}$$. What frequency does the listener hear, and what do they hear after the ambulance passes?

The observer is stationary ($$v_{\text{obs}}=0$$) and the source approaches, so use the $$-$$ sign in the denominator:

$$
f' = f\,\frac{v}{v - v_{\text{src}}} = 700\,\frac{343}{343 - 35} \approx 780\text{ Hz}.
$$

After it passes, the source recedes, so the denominator sign flips to $$+$$:

$$
f' = 700\,\frac{343}{343 + 35} \approx 635\text{ Hz}.
$$

The pitch drops by about $$145\text{ Hz}$$ as the ambulance goes by — the familiar falling "neeeow."

</div>

When the source itself moves faster than the wave speed ($$v_{\text{src}} > v$$), the wavefronts pile into a **shock wave** (a sonic boom for sound). The Mach cone half-angle is

$$
\sin\theta = \frac{v}{v_{\text{src}}} = \frac{1}{\text{Mach number}}.
$$

## Water waves

Water waves are the most familiar waves in daily life and also the most complicated — the restoring force is gravity, and the result is **dispersive**, so the speed depends on wavelength. Two limiting cases are worth knowing.

**Shallow water** ($$\lambda \gg D$$, where $$D$$ is the depth). The wave speed depends only on the depth,

$$
v = \sqrt{gD},
$$

independent of wavelength — so shallow water waves are *non*dispersive. Two consequences: a tsunami in the deep ocean ($$D \sim 4\text{ km}$$) travels at jet-airliner speeds, and as waves approach shore the dropping depth slows and steepens them. The speed change also explains why waves always arrive nearly **parallel to the shoreline** (the part of a crest in deeper water outruns the part in shallow water, swinging the crest around — the same refraction that bends light toward slower media).

**Deep water** ($$\lambda \ll D$$). Now the depth drops out and gravity competes with wavelength,

$$
v_p = \sqrt{\frac{g}{k}} = \sqrt{\frac{g\lambda}{2\pi}},
$$

so longer swells travel faster and a storm sorts its waves by wavelength as they spread out. The dispersion relation $$\omega = \sqrt{gk}$$ gives a group velocity that is exactly **half** the phase velocity, $$v_g = \tfrac12 v_p$$ — individual crests appear to run forward through a wave group and vanish at its leading edge.

(For very short ripples, $$\lambda \lesssim 1\text{ cm}$$, surface tension takes over from gravity and the trend reverses: shorter ripples go faster.)

## Phase velocity and group velocity

In a **dispersive** medium the wave speed depends on frequency, so we distinguish two speeds. The **phase velocity** is how fast a single wave crest moves,

$$
v_p = \frac{\omega}{k},
$$

while the **group velocity** is how fast a wave packet (and its energy/information) moves,

$$
v_g = \frac{d\omega}{dk}.
$$

For a nondispersive wave ($$\omega = vk$$) the two coincide. The relation $$\omega(k)$$ is called the **dispersion relation**, and computing $$v_g = d\omega/dk$$ from it is a recurring olympiad task.

The group velocity is the speed of a **wave packet** — a localized burst built by superposing waves over a band of wavenumbers $$\Delta k$$. A single sinusoid has infinite extent; to make a packet of finite size $$\Delta x$$ you must combine a *range* of wavenumbers, and the two are inversely related:

$$
\Delta x\,\Delta k \gtrsim 1,
\qquad\text{equivalently}\qquad
\Delta t\,\Delta \omega \gtrsim 1.
$$

This is a purely classical statement about waves — a narrow pulse needs a broad spectrum — but feeding in the de Broglie relation $$p = \hbar k$$ turns it directly into the Heisenberg uncertainty principle $$\Delta x\,\Delta p \gtrsim \hbar$$. In a dispersive medium the components of a packet travel at different speeds, so the packet gradually spreads out, or **disperses**.

However, not every dispersion relation passes through the origin. If a string is tied down by a bed of springs, its equation of motion picks up an extra restoring term and the dispersion relation becomes

$$
\omega^2 = \omega_0^2 + v^2 k^2.
$$

There is now a **minimum frequency** $$\omega_0$$: drive the string below it and no traveling wave propagates — the disturbance decays exponentially instead. Reading $$E = \hbar\omega$$ and $$p = \hbar k$$, this is exactly the energy–momentum relation $$E^2 = (mc^2)^2 + (pc)^2$$ of a relativistic *massive* particle, with the minimum frequency playing the role of rest mass. It is a toy model for how a field can acquire mass.

---

## Problem-solving strategy

Match the situation to the right tool before reaching for algebra:

:::strategy
1. **A pulse or wave travels through a medium and you want its speed**: use the "restoring force over inertia" template — $$v=\sqrt{T/\mu}$$ on a string, $$v=\sqrt{B/\rho}=\sqrt{\gamma RT/M}$$ for sound, $$v=\sqrt{gD}$$ in shallow water. If the tension (hence speed) varies along the path, integrate $$\tau=\int dx/v(x)$$, as for the hanging rope.
2. **The medium is confined between boundaries (string or pipe)**: it is a normal-mode problem. Fit half-wavelengths to the boundary conditions — node at a fixed/closed end, antinode at a free/open end — to get $$\lambda_n=2L/n$$, $$f_n=nv/2L$$ for symmetric ends, or the odd-only series $$f_n=(2n-1)v/4L$$ for open–closed.
3. **Two waves overlap and you want loud/quiet spots**: superpose. Convert any path-length difference to phase via $$\delta=\tfrac{2\pi}{\lambda}\Delta r$$; constructive at $$\Delta r=m\lambda$$, destructive at $$\Delta r=(m+\tfrac12)\lambda$$, net amplitude $$2A\cos\tfrac{\delta}{2}$$.
4. **Two nearly-equal frequencies are sounded together**: beats, heard at $$f_{\text{beat}}=\lvert f_1-f_2\rvert$$ — not an interference-in-space question.
5. **Source and/or observer move and the pitch changes**: Doppler, $$f'=f\,\dfrac{v\pm v_{\text{obs}}}{v\mp v_{\text{src}}}$$. Fix signs by the physics (approach raises pitch). If $$v_{\text{src}}>v$$, switch to the shock-cone result $$\sin\theta=v/v_{\text{src}}$$.
6. **A wave hits an interface and you want reflection/transmission**: use impedance $$Z=\mu v=\sqrt{\mu T}$$ with $$r=\dfrac{Z_1-Z_2}{Z_1+Z_2}$$, $$t=\dfrac{2Z_1}{Z_1+Z_2}$$; inversion ($$r<0$$) means a hard/denser boundary, and $$Z_1=Z_2$$ gives zero reflection.
7. **Intensity, loudness, or how amplitude falls with distance**: spread power over the wavefront, $$I=P/4\pi r^2$$ (so amplitude $$\propto 1/r$$), and convert to decibels with $$\beta=10\log_{10}(I/I_0)$$.
8. **The medium is dispersive (water waves, springs-loaded string, anything with $$\omega(k)$$ not $$\propto k$$)**: distinguish $$v_p=\omega/k$$ from $$v_g=d\omega/dk$$. Differentiate the dispersion relation for the group (energy/packet) speed, and remember a pulse of width $$\Delta x$$ needs a band $$\Delta k\sim 1/\Delta x$$.
:::

:::mistakes
- **Wave speed vs. transverse speed.** $$v$$ is how fast the pattern moves; a point on the string moves at $$u_y=\partial y/\partial t$$ with max $$\omega A$$. They are unrelated quantities.
- **Pipe-end rules in longitudinal waves.** Track *which* quantity the boundary pins: a hard wall is a displacement node but a pressure antinode; an open end is a pressure node but a displacement antinode. Do not assume "hard = inverted" the way you would for a string.
- **Open–closed pipe harmonics.** Only odd harmonics exist ($$f_n=(2n-1)v/4L$$); there is no second harmonic — a frequent source of wrong mode spacings.
- **Doppler sign confusion.** Speeds are measured relative to the *medium*, and source vs. observer motion enter through different parts of the fraction. Sanity-check with "approach raises pitch" rather than memorizing $$\pm$$.
- **Standing waves carry no net energy.** They are not traveling waves; the kinetic–potential equipartition that holds for a traveling wave fails here, and power does not flow past a node.
- **Sound speed and pressure.** For an ideal gas $$v$$ depends on temperature, not pressure, since $$P/\rho\propto T$$ — raising the pressure at fixed $$T$$ does nothing.
:::
