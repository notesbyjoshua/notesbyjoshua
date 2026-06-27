---
title: "Uncertainty"
sidebar:
  order: 2
---

# Uncertainty

---

With every experiment, there will be a source of error, whether you like it or not. Since we aren't perfect, we need to account for the error, which we call uncertainty. A measurement reported without its uncertainty is almost meaningless: "the period is 2.00 s" is a very different claim from "the period is $$2.00\pm0.05$$ s."

A quantity $$x$$ is written $$x\pm\delta x$$, where $$\delta x$$ is the **absolute uncertainty** (same units as $$x$$). The **relative** (or fractional) uncertainty is $$\delta x/x$$, often quoted as a percentage. The central question of error propagation is: if $$f$$ depends on measured quantities $$x,y,\dots$$, how big is $$\delta f$$?

:::note
**A note on the two methods.** There are two conventions. The **worst-case (linear)** method simply adds uncertainties and gives the largest the error could possibly be. The **quadrature (statistical)** method adds them in quadrature (root-sum-of-squares) and is correct when the errors are *independent and random*, since independent errors partly cancel rather than always conspiring. Quadrature is the standard for real lab data; the linear method is a quick conservative bound. Both are shown below — use whichever a problem specifies, defaulting to quadrature. MOST problems require quadrature uncertainty calculations.
:::

---

## Addition/Subtraction

When you add or subtract quantities, the **absolute** uncertainties combine. For $$f=x\pm y$$:

$$
\delta f=\delta x+\delta y\quad(\text{worst case}),\qquad
\delta f=\sqrt{(\delta x)^2+(\delta y)^2}\quad(\text{quadrature}).
$$

Note that this holds for subtraction too since uncertainties never subtract. This is why **subtracting two nearly-equal large numbers is dangerous**: the absolute uncertainty stays the same size while the result shrinks, so the *relative* uncertainty can blow up. (For example, measuring a thin film's thickness as the difference of two large lengths.)

---

## Multiplication/Division

When you multiply or divide, the **relative** uncertainties combine. For $$f=xy$$ or $$f=x/y$$:

$$
\frac{\delta f}{f}=\frac{\delta x}{x}+\frac{\delta y}{y}\quad(\text{worst case}),\qquad
\frac{\delta f}{f}=\sqrt{\left(\frac{\delta x}{x}\right)^2+\left(\frac{\delta y}{y}\right)^2}\quad(\text{quadrature}).
$$

The rule is the same whether you multiply or divide. The practical takeaway: **the least precise factor dominates** the result's precision, so there's no point measuring one quantity to 0.1% if another enters at 5%.

---

## Exponent Rules

A power multiplies the relative uncertainty by the exponent. For $$f=x^n$$ (where $$n$$ can be negative or fractional):

$$
\frac{\delta f}{f}=\lvert n\rvert\,\frac{\delta x}{x}.
$$

So squaring a quantity *doubles* its relative uncertainty, while a square root *halves* it. For a combination like $$f=\dfrac{x^a y^b}{z^c}$$, the relative uncertainties add with their exponents as weights:

$$
\frac{\delta f}{f}=\sqrt{\left(a\frac{\delta x}{x}\right)^2+\left(b\frac{\delta y}{y}\right)^2+\left(c\frac{\delta z}{z}\right)^2}.
$$

<div class="theorem-box">

**Example.** Suppose for a simple pendulum $$L=1.000\pm0.005\ \text{m}$$ (0.5%) and $$T=2.00\pm0.02\ \text{s}$$ (1%). Find $$g$$ with uncertainty.

From $$T=2\pi\sqrt{L/g}$$ we solve $$g=4\pi^2 L/T^2$$. Since $$g\propto L\,T^{-2}$$, the exponents are $$1$$ for $$L$$ and $$2$$ for $$T$$:

$$
\frac{\delta g}{g}=\sqrt{\left(1\cdot 0.005\right)^2+\left(2\cdot 0.01\right)^2}=\sqrt{0.005^2+0.02^2}\approx 0.0206,
$$

about 2%. With $$g=4\pi^2(1.000)/(2.00)^2=9.87\ \text{m/s}^2$$, the result is $$g=9.87\pm0.20\ \text{m/s}^2$$. Notice the *timing* error dominates because $$T$$ enters squared — so to improve the measurement, time many periods at once rather than measuring $$L$$ more carefully.

</div>

---

## Calculus-related Uncertainty

All the rules above are special cases of one **master formula**. If $$f$$ is any function of independent measured quantities $$x_1,x_2,\dots$$, then a small error in each propagates through the partial derivatives:

$$
\ \delta f=\sqrt{\sum_i\left(\frac{\partial f}{\partial x_i}\,\delta x_i\right)^2}
$$

(or, in the worst-case version, $$\delta f=\sum_i\left\lvert\dfrac{\partial f}{\partial x_i}\right\rvert\delta x_i$$). The intuition is exactly the linear approximation: $$\partial f/\partial x_i$$ measures how sensitively $$f$$ responds to $$x_i$$, so it acts as the "amplification factor" for that input's error.

This recovers everything above. For a single variable $$f(x)$$ it reduces to $$\delta f=\left\lvert f'(x) \right\rvert\delta x$$. Applying it to $$f=x^n$$ gives $$\delta f=\lvert n x^{n-1}\rvert\,\delta x$$, i.e. $$\delta f/f=\lvert n \rvert\,\delta x/x$$ — the exponent rule. A slick shortcut for products and powers is to take the logarithm first: since $$\ln f=a\ln x+b\ln y-c\ln z$$, differentiating gives $$\dfrac{\delta f}{f}=a\dfrac{\delta x}{x}+b\dfrac{\delta y}{y}+c\dfrac{\delta z}{z}$$ directly.

<div class="theorem-box">

**Example.** Suppose a refraction experiment gives $$f=\sin\theta$$ with $$\theta=30.0^\circ\pm0.5^\circ$$. Find the value (with uncertainty) of $$f$$.

There's no add/multiply rule for $$\sin$$, so use the master formula. First convert the angular uncertainty to radians: $$\delta\theta=0.5^\circ=0.0087\ \text{rad}$$. Then

$$
\delta f=\left\lvert \frac{d}{d\theta}\sin\theta \right\rvert\delta\theta=\lvert \cos\theta \rvert\,\delta\theta=\cos(30^\circ)(0.0087)\approx 0.0076.
$$

So $$f=\sin30^\circ=0.500\pm0.008$$. The derivative-based method handles *any* function — trig, logs, exponentials — where the elementary rules don't apply.

</div>

---

## Problem-solving strategy

A quick decision tree for picking the right propagation rule (default to quadrature unless told otherwise):

:::strategy{title="Picking the right propagation rule"}
1. **Adding or subtracting measured quantities** ($$f=x\pm y$$): combine **absolute** uncertainties, $$\delta f=\sqrt{(\delta x)^2+(\delta y)^2}$$ (or $$\delta f=\delta x+\delta y$$ worst case). Subtraction never subtracts errors — watch for two nearly-equal numbers blowing up the relative error.
2. **Multiplying, dividing, or taking powers** ($$f=x^a y^b/z^c$$): combine **relative** uncertainties weighted by exponents, $$\dfrac{\delta f}{f}=\sqrt{\left(a\dfrac{\delta x}{x}\right)^2+\left(b\dfrac{\delta y}{y}\right)^2+\left(c\dfrac{\delta z}{z}\right)^2}$$. For a single power $$f=x^n$$, $$\dfrac{\delta f}{f}=\lvert n\rvert\dfrac{\delta x}{x}$$.
3. **Any other function** (trig, log, exp, mixed): drop to the **master formula** $$\delta f=\sqrt{\sum_i\left(\dfrac{\partial f}{\partial x_i}\,\delta x_i\right)^2}$$; for one variable, $$\delta f=\lvert f'(x)\rvert\,\delta x$$. Convert angles to radians before differentiating.
4. **Products and powers, but the algebra is messy:** take logs first — $$\ln f=a\ln x+b\ln y-c\ln z$$ differentiates straight to the weighted relative-error sum.
5. **One error source dominates** (e.g. an exponent of 2 amplifies it): don't waste effort on the small terms — quadrature suppresses them anyway, since the largest contribution sets the scale. Improve the dominant measurement instead.
6. **Worst-case vs. quadrature:** use **quadrature** for independent random errors (the lab default), **linear sum** only when a problem asks for the worst case or the errors are correlated.
:::

:::mistakes
- Adding **absolute** errors where you should add **relative** ones (or vice versa) — addition/subtraction uses absolute, multiplication/division uses relative.
- Forgetting the exponent weight: squaring **doubles** relative uncertainty, square root **halves** it; a factor entering as $$T^{-2}$$ contributes $$2\,\delta T/T$$.
- Trying to subtract uncertainties — they always combine additively, even for $$f=x-y$$.
- Subtracting two nearly-equal large numbers: the absolute error survives while the result shrinks, so the relative error explodes.
- Using radians-vs-degrees inconsistently in the master formula; $$\delta\theta$$ must be in radians.
- Rounding to significant figures too early — carry extra digits through and round only the final $$\delta f$$.
- Defaulting to the worst-case linear sum when the problem expects quadrature (most do).
:::
