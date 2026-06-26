---
title: "Math Tricks"
sidebar:
  order: 1
---

---

## Common integrals to know

You will rarely be asked to integrate for its own sake, but integrals appear constantly inside physics derivations. The ones worth memorizing:

$$
\int x^n\,dx=\frac{x^{n+1}}{n+1}\ (n\neq-1),\qquad
\int \frac{dx}{x}=\ln\lvert x \rvert,\qquad
\int e^{ax}\,dx=\frac{1}{a}e^{ax}.
$$

$$
\int \sin x\,dx=-\cos x,\qquad \int\cos x\,dx=\sin x,\qquad
\int \frac{dx}{a^2+x^2}=\frac{1}{a}\arctan\frac{x}{a}.
$$

Over a full period, the average of $$\sin^2$$ or $$\cos^2$$ is $$\tfrac12$$, which is why RMS values carry a factor $$1/\sqrt2$$:

$$
\int_0^{2\pi}\sin^2x\,dx=\int_0^{2\pi}\cos^2x\,dx=\pi.
$$

A few "named" integrals show up in thermodynamics, statistical mechanics, and gravitation problems:

$$
\int_0^\infty e^{-ax^2}\,dx=\frac12\sqrt{\frac{\pi}{a}}\quad(\text{Gaussian}),\qquad
\int_0^\infty x^n e^{-x}\,dx=n!\quad(\text{Gamma}),
$$

When you hit an unfamiliar integral, first try substitution (look for an inner function whose derivative is also present) or integration by parts ($$\int u\,dv = uv-\int v\,du$$, best when one factor simplifies on differentiating). For definite integrals, always check whether symmetry kills it: an odd integrand over a symmetric interval integrates to zero.

---

## Small value approximations

Often, for small values, you can take an approximation that will simplify the calculations a lot. For $$\lvert x \rvert \ll 1$$:

| Function | Approximation |
|---|---|
| $$(1+x)^n$$ | $$1+nx$$ |
| $$e^x$$ | $$1+x$$ |
| $$\ln(1+x)$$ | $$x$$ |
| $$\sin x$$ | $$x$$ |
| $$\cos x$$ | $$1-\tfrac12 x^2$$ |
| $$\tan x$$ | $$x$$ |
| $$\dfrac{1}{1-x}$$ | $$1+x$$ |

The binomial one, $$(1+x)^n\approx 1+nx$$, is the single most useful approximation in all of physics — it linearizes square roots ($$\sqrt{1+x}\approx 1+\tfrac{x}{2}$$), reciprocals, and the relativistic and gravitational expressions you meet constantly. The trick in practice is to *factor out the large quantity first* so that what remains is genuinely small:

$$
\frac{1}{\sqrt{R^2+x^2}}=\frac{1}{R}\frac{1}{\sqrt{1+(x/R)^2}}\approx\frac{1}{R}\left(1-\frac{x^2}{2R^2}\right)\quad (x\ll R).
$$

---

## Taylor expansions

**NOTE**: If you haven't learned about Taylor expansions, please visit the [infinite sequences and series](/notes/ap/calculus/infsumseries/) section in AP Calculus BC.

Sometimes, when you have $$a \ll b$$, you can perform a Taylor expansion at $$x = 0$$ (this is how we derive all of the small value approximations above!). The general expansion of a function about $$x=0$$ (a *Maclaurin series*) is

$$
f(x)=f(0)+f'(0)\,x+\frac{f''(0)}{2!}x^2+\frac{f'''(0)}{3!}x^3+\cdots
$$

If you are doing oscillations/SHM calculations, you need to take up to the second derivative (quadratic) term, and if you are doing any other calculations you usually only need to take up to the first derivative (linear) term. The reason is physical: a stable equilibrium sits at a *minimum* of potential energy, where $$U'(x_0)=0$$, so the linear term vanishes and the **leading behavior is the quadratic term** — which is exactly a spring potential.

<div class="theorem-box">

**Example.** Why does a stable equilibrium cause SHM?

Take any potential $$U(x)$$ with a stable equilibrium at $$x_0$$. Expand about $$x_0$$:

$$
U(x)\approx U(x_0)+\underbrace{U'(x_0)}_{=\,0}(x-x_0)+\frac12 U''(x_0)(x-x_0)^2.
$$

The constant doesn't affect forces, and the linear term is zero at equilibrium, so near $$x_0$$

$$
U(x)\approx \text{const}+\tfrac12 k_{\text{eff}}(x-x_0)^2,\qquad k_{\text{eff}}=U''(x_0).
$$

This is a spring potential with effective spring constant $$U''(x_0)$$, so the system oscillates with $$\omega=\sqrt{U''(x_0)/m}$$. *Any* smooth potential looks like a harmonic oscillator near its minimum — this is why SHM is everywhere, and why USAPhO loves asking for "the frequency of small oscillations."

As a concrete case, a pendulum has $$U(\theta)=mgL(1-\cos\theta)\approx \tfrac12 mgL\,\theta^2$$ for small $$\theta$$ (keeping the quadratic term), giving $$\omega=\sqrt{g/L}$$.

</div>

---

## Vector Algebra

Vectors show up a lot on USAPhO, so it is especially handy to know how to do vector algebra.

---

### Notations

A vector $$\vec a$$ has components $$\vec a=(a_x,a_y,a_z)=a_x\hat i+a_y\hat j+a_z\hat k$$, where $$\hat i,\hat j,\hat k$$ are unit vectors along the axes. Its **magnitude** is $$\lvert \vec a \rvert =\sqrt{a_x^2+a_y^2+a_z^2}$$, and the **unit vector** in its direction is $$\hat a=\vec a/ \lvert \vec a \rvert$$. Throughout, $$\theta$$ denotes the angle between the two vectors being combined.

---

### Dot product

<div class="theorem-box">

**Definition (Dot product).** The dot product is one way to multiply two vectors, and result in a scalar quantity. The formula is given by: $$\vec a \cdot \vec b = a_x b_x + a_y b_y + a_z b_z$$

</div>

**Properties**:

1. $$\vec a \cdot \vec b = \lvert \vec a\rvert \lvert \vec b \rvert\cos\theta$$
2. $$\vec b \cdot \vec a = \vec a \cdot \vec b$$ (commutative)
3. $$\vec a \cdot \vec a = \lvert \vec a \rvert^2$$
4. If $$\vec a \perp \vec b$$, then $$\vec a \cdot \vec b = 0$$

The geometric meaning is **projection**: $$\vec a\cdot\hat b$$ is the component of $$\vec a$$ along the direction of $$\vec b$$. This is why work is $$W=\vec F\cdot\vec d$$ (only the force component along the displacement does work) and flux is $$\vec E\cdot\vec A$$. Whenever a problem asks "how much of this vector points along that direction," reach for the dot product.

---

### Cross product

<div class="theorem-box">

**Definition (Cross product).** The cross product is one way to multiply two vectors, and result in another vector, whose direction is perpendicular to the first two. You find the direction based on the right-hand rule (as described in AP Physics C). The formula is given by the determinant

$$
\vec a\times\vec b=
\begin{vmatrix}\hat i&\hat j&\hat k\\ a_x&a_y&a_z\\ b_x&b_y&b_z\end{vmatrix}
=(a_yb_z-a_zb_y)\,\hat i+(a_zb_x-a_xb_z)\,\hat j+(a_xb_y-a_yb_x)\,\hat k.
$$

</div>

**Properties**:

1. $$\lvert \vec a\times\vec b \rvert =\lvert \vec a\rvert \lvert \vec b \rvert\sin\theta$$ — the magnitude equals the area of the parallelogram spanned by the two vectors.
2. $$\vec b\times\vec a=-\,\vec a\times\vec b$$ (anticommutative — order matters!)
3. $$\vec a\times\vec a=\vec 0$$, and more generally $$\vec a\times\vec b=\vec 0$$ if $$\vec a\parallel\vec b$$.
4. The result is perpendicular to *both* inputs, with direction set by the right-hand rule.

The cross product encodes "rotational" or "perpendicular" relationships: torque $$\vec\tau=\vec r\times\vec F$$, angular momentum $$\vec L=\vec r\times\vec p$$, and the magnetic force $$\vec F=q\vec v\times\vec B$$ are all cross products. If a quantity involves a lever arm or a right-hand rule, it is a cross product underneath.

---

## Complex numbers for oscillations

A trick worth its weight in gold: any sinusoid can be written as the real part of a complex exponential, using **Euler's formula**

$$
e^{i\theta}=\cos\theta+i\sin\theta.
$$

So $$A\cos(\omega t+\phi)=\mathrm{Re}\big(A e^{i\phi}\,e^{i\omega t}\big)$$. Differentiation then becomes *multiplication* by $$i\omega$$, which turns the differential equations of oscillations and AC circuits into ordinary algebra. Adding two waves of the same frequency becomes adding two complex numbers ("phasors") tip-to-tail, which is exactly how you handle interference, superposition, and the phase lags in driven oscillators and RLC circuits without wrestling trig identities.

---

## Useful differential equations

You don't need a full ODE course; three patterns cover the overwhelming majority of USAPhO problems.

- **Exponential growth/decay:** $$\dfrac{dy}{dt}=-ky \;\Rightarrow\; y=y_0e^{-kt}$$. This governs radioactive decay, RC and LR circuits, terminal-approach with linear drag, and cooling.
- **Simple harmonic motion:** $$\dfrac{d^2x}{dt^2}=-\omega^2 x \;\Rightarrow\; x=A\cos(\omega t+\phi)$$. Any restoring force linear in displacement gives this; identify $$\omega^2$$ as the coefficient.
- **Separable equations:** if you can get all the $$y$$'s on one side and all the $$t$$'s on the other, $$\int \dfrac{dy}{g(y)}=\int f(t)\,dt$$ and integrate. This handles nonlinear drag, draining tanks, and most "rate" problems.

The meta-skill is **pattern recognition**: rearrange the physics into one of these standard forms, then write down the known solution rather than solving from scratch.

---

## Problem-solving strategy

Once the physics is set up, the question becomes *which mathematical tool to reach for*. A quick decision tree:

:::strategy{title="Which mathematical tool to reach for"}
1. **A small parameter appears** (a ratio $$x\ll 1$$, a tiny angle, $$v\ll c$$): linearize with the small-value approximations, leading with $$(1+x)^n\approx 1+nx$$. Factor out the large quantity *first* so the leftover is genuinely small.
2. **You need the next correction, or are near an equilibrium**: Taylor/Maclaurin expand, $$f(x)=f(0)+f'(0)x+\tfrac12 f''(0)x^2+\cdots$$. For small oscillations keep the quadratic term and read off $$\omega=\sqrt{U''(x_0)/m}$$; otherwise the linear term usually suffices.
3. **A linear ODE with constant coefficients** (oscillations, AC circuits, driven systems): recognize the standard form. Restoring force linear in displacement gives $$\ddot x=-\omega^2 x$$; a single decay/growth rate gives $$\dot y=-ky$$. Write down the known solution instead of re-deriving it.
4. **Sinusoids, phase lags, or interference**: go complex with $$e^{i\theta}=\cos\theta+i\sin\theta$$, write the signal as $$\mathrm{Re}(Ae^{i\phi}e^{i\omega t})$$, and turn $$d/dt$$ into multiplication by $$i\omega$$. Add same-frequency waves as phasors rather than juggling trig identities.
5. **A nonlinear or "rate" ODE**: try separation of variables, $$\int dy/g(y)=\int f(t)\,dt$$, then integrate. Handles nonlinear drag, draining tanks, and most rate problems.
6. **An integral that looks hopeless**: check symmetry first (an odd integrand on a symmetric interval is zero), then try substitution (spot an inner function whose derivative is present), then integration by parts $$\int u\,dv=uv-\int v\,du$$. Recognize the named forms — Gaussian and Gamma — on sight.
7. **A quantity with direction**: use the dot product when you want "how much of one vector lies along another" (work, flux, projection); use the cross product when a lever arm or right-hand rule is involved (torque, angular momentum, magnetic force).
:::

:::mistakes
- Expanding *before* factoring out the large quantity, so the "small" term isn't actually small and the approximation is invalid.
- Keeping only the linear Taylor term for an oscillation problem — at a potential minimum $$U'(x_0)=0$$, so the quadratic term is the *leading* one and dropping it loses all the physics.
- Forgetting to take $$\mathrm{Re}(\cdots)$$ at the end of a complex-exponential calculation, or mixing real and complex amplitudes midway.
- Treating the cross product as commutative: $$\vec b\times\vec a=-\vec a\times\vec b$$, and order matters for the right-hand-rule direction.
- Reaching for brute-force integration when a symmetry argument or a standard form kills the integral instantly.
- Misidentifying the ODE pattern — e.g. forcing a separable or nonlinear equation into the $$\ddot x=-\omega^2x$$ mold and quoting a sinusoid that doesn't apply.
:::
