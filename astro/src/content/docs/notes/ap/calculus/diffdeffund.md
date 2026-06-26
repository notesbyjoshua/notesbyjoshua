---
title: "Unit 2: Differentiation: Definition and Fundamental Properties"
sidebar:
  order: 2
---

Differentiation measures instantaneous change. Conceptually, the derivative is the slope of the tangent line and the best local linear approximation to a function.

---

## Definition of the derivative

The derivative of $$f$$ at $$x$$ is

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h}
$$

Equivalently,

$$
f'(a) = \lim_{x \to a} \frac{f(x)-f(a)}{x-a}.
$$

Interpretations:

- instantaneous rate of change,
- slope of the tangent line,
- limit of secant slopes,
- local sensitivity of output to input.

> [Image Placeholder: secant lines approaching a tangent line]

<div class="theorem-box">

**Example.** Use the limit definition to find $$f'(x)$$ for $$f(x)=x^2$$.

Start from the definition and substitute $$f(x+h)=(x+h)^2$$:

$$
f'(x)=\lim_{h\to0}\frac{(x+h)^2-x^2}{h}.
$$

Expand the numerator:

$$
(x+h)^2-x^2 = x^2+2xh+h^2-x^2 = 2xh+h^2.
$$

Divide by $$h$$ (valid since $$h\ne0$$ in the limit):

$$
\frac{2xh+h^2}{h}=2x+h.
$$

Now let $$h\to0$$:

$$
f'(x)=\lim_{h\to0}(2x+h)=2x.
$$

So the derivative of $$x^2$$ is $$2x$$, matching the power rule.

</div>

---

## Differentiability vs continuity

<div class="theorem-box">

**Theorem (Differentiability implies continuity).** If $$f$$ is differentiable at $$a$$, then $$f$$ is continuous at $$a$$.

</div>

The converse is false. A function can be continuous but not differentiable because of:

- corner,
- cusp,
- vertical tangent,
- discontinuity.

---

## Basic derivative rules

For constants $$c$$ and differentiable functions $$f,g$$:

$$
\frac{d}{dx}(c) = 0
$$

$$
\frac{d}{dx}(x^n) = nx^{n-1}
$$

$$
\frac{d}{dx}[cf(x)] = cf'(x)
$$

$$
\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)
$$

$$
\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)
$$

$$
\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right]
=
\frac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}
$$

for $$g(x) \ne 0$$.

<div class="theorem-box">

**Why the power rule is true.** Start from the derivative definition:

$$
\frac{d}{dx}x^n
=
\lim_{h\to0}\frac{(x+h)^n-x^n}{h}.
$$

The binomial expansion begins

$$
(x+h)^n=x^n+nx^{n-1}h+\text{terms with }h^2,h^3,\ldots
$$

After subtracting $$x^n$$ and dividing by $$h$$, the leading surviving term is $$nx^{n-1}$$. All remaining terms still contain a factor of $$h$$, so they vanish as $$h\to0$$.

</div>

<div class="theorem-box">

**Why the product rule has two terms.** If both factors can change, the new product differs from the old product in two first-order ways:

$$
(f+\Delta f)(g+\Delta g)-fg
=g\Delta f+f\Delta g+\Delta f\Delta g.
$$

The last term is a product of two tiny changes, so it becomes negligible compared with the first-order changes. Dividing by $$\Delta x$$ and taking the limit gives

$$
(fg)'=f'g+fg'.
$$

</div>

<div class="theorem-box">

**Example.** Differentiate $$y = x^3 \sin x$$ using the product rule.

Let $$f(x)=x^3$$ and $$g(x)=\sin x$$, so $$f'(x)=3x^2$$ and $$g'(x)=\cos x$$. The product rule gives

$$
y' = f'(x)g(x) + f(x)g'(x).
$$

Substitute the pieces:

$$
y' = 3x^2\sin x + x^3\cos x.
$$

So $$y' = 3x^2\sin x + x^3\cos x$$.

</div>

<div class="theorem-box">

**Example.** Differentiate $$\displaystyle y = \frac{x^2}{x+1}$$ using the quotient rule.

Let $$f(x)=x^2$$ and $$g(x)=x+1$$, so $$f'(x)=2x$$ and $$g'(x)=1$$. The quotient rule gives

$$
y' = \frac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}.
$$

Substitute the pieces:

$$
y' = \frac{2x(x+1)-x^2(1)}{(x+1)^2}.
$$

Expand and simplify the numerator:

$$
2x(x+1)-x^2 = 2x^2+2x-x^2 = x^2+2x.
$$

Therefore

$$
y' = \frac{x^2+2x}{(x+1)^2}.
$$

</div>

---

## Derivatives of common functions

$$
\frac{d}{dx}(\sin x) = \cos x
$$

$$
\frac{d}{dx}(\cos x) = -\sin x
$$

$$
\frac{d}{dx}(\tan x) = \sec^2 x
$$

$$
\frac{d}{dx}(e^x) = e^x
$$

$$
\frac{d}{dx}(a^x) = a^x \ln a
$$

$$
\frac{d}{dx}(\ln x) = \frac{1}{x}
$$

<div class="theorem-box">

**Example.** Differentiate $$y = 4e^x - 3\cos x + 2x^5$$.

Differentiate each term separately using the sum rule. The exponential is its own derivative, the derivative of $$\cos x$$ is $$-\sin x$$, and the power rule applies to $$x^5$$:

$$
\frac{d}{dx}(4e^x) = 4e^x,\qquad
\frac{d}{dx}(-3\cos x) = 3\sin x,\qquad
\frac{d}{dx}(2x^5) = 10x^4.
$$

Combining the terms gives

$$
y' = 4e^x + 3\sin x + 10x^4.
$$

</div>

---

## Tangent and normal lines

At $$x=a$$:

- tangent slope is $$f'(a)$$,
- tangent line is

$$
y - f(a) = f'(a)(x-a),
$$

- normal slope is $$-1/f'(a)$$ when $$f'(a) \ne 0$$.

<div class="theorem-box">

**Example.** Find the equation of the tangent line to $$f(x)=x^2+1$$ at $$x=2$$.

First find the point on the curve:

$$
f(2)=2^2+1=5,
$$

so the point of tangency is $$(2,5)$$. Next find the slope from the derivative:

$$
f'(x)=2x,\qquad f'(2)=2(2)=4.
$$

Use point-slope form with slope $$4$$ at $$(2,5)$$:

$$
y-5 = 4(x-2).
$$

Simplifying gives the tangent line

$$
y = 4x-3.
$$

</div>

---

## Higher derivatives

The second derivative $$f''(x)$$ measures the rate of change of the first derivative.

Interpretations:

- concavity in pure math,
- acceleration in motion when $$f$$ is position.

You may also see $$f^{(n)}(x)$$ for the $$n$$th derivative.

<div class="theorem-box">

**Example.** Find $$f''(x)$$ for $$f(x)=x^4-5x^2+3x$$.

Differentiate once using the power rule term by term:

$$
f'(x)=4x^3-10x+3.
$$

Differentiate again to get the second derivative:

$$
f''(x)=12x^2-10.
$$

</div>

---

## Motion along a line

If $$s(t)$$ is position, then:

$$
v(t) = s'(t)
$$

$$
a(t) = v'(t) = s''(t)
$$

Velocity includes sign and direction; speed is $$\lvert v(t) \rvert$$.

When velocity and acceleration have the same sign, speed is increasing. When signs differ, speed is decreasing.

<div class="theorem-box">

**Example.** A particle moves with position $$s(t)=t^3-6t^2+9t$$ (in meters, $$t$$ in seconds). Find $$v(t)$$ and $$a(t)$$, and determine whether the speed is increasing at $$t=4$$.

Differentiate the position to get velocity, then differentiate again for acceleration:

$$
v(t)=s'(t)=3t^2-12t+9,
$$

$$
a(t)=v'(t)=6t-12.
$$

Evaluate both at $$t=4$$:

$$
v(4)=3(16)-12(4)+9 = 48-48+9 = 9,
$$

$$
a(4)=6(4)-12 = 12.
$$

Both velocity and acceleration are positive at $$t=4$$, so they share the same sign. Therefore the speed is increasing at $$t=4$$.

</div>

---

## Local linearity and linearization preview

Near $$x=a$$,

$$
f(x) \approx f(a) + f'(a)(x-a).
$$

This linearization is a first-order approximation and becomes useful for estimation and error analysis later.

<div class="theorem-box">

**Example.** Use a linearization near $$x=4$$ to estimate $$\sqrt{4.1}$$.

Let $$f(x)=\sqrt{x}$$, which is easy to evaluate exactly at $$x=4$$. Compute the value and the slope there:

$$
f(4)=\sqrt{4}=2,\qquad f'(x)=\frac{1}{2\sqrt{x}},\qquad f'(4)=\frac{1}{2\cdot 2}=\frac14.
$$

Form the linearization centered at $$a=4$$:

$$
L(x)=f(4)+f'(4)(x-4)=2+\frac14(x-4).
$$

Evaluate at $$x=4.1$$:

$$
L(4.1)=2+\frac14(0.1)=2+0.025=2.025.
$$

So $$\sqrt{4.1}\approx 2.025$$, which is very close to the true value $$2.0248\ldots$$.

</div>

---

## Differentiation from tables

If you only have values of $$f$$, use the difference quotient for an approximate derivative:

$$
f'(a) \approx \frac{f(a+h)-f(a)}{h}
$$

or a symmetric estimate:

$$
f'(a) \approx \frac{f(a+h)-f(a-h)}{2h}.
$$

<div class="theorem-box">

**Example.** A differentiable function $$f$$ has the values below. Estimate $$f'(2)$$ using a symmetric difference quotient.

$$
\begin{array}{c|ccc}
x & 1 & 2 & 3 \\\hline
f(x) & 3 & 7 & 15
\end{array}
$$

Use the values one step on each side of $$x=2$$, so $$a=2$$ and $$h=1$$:

$$
f'(2)\approx\frac{f(3)-f(1)}{2(1)}=\frac{15-3}{2}.
$$

This simplifies to

$$
f'(2)\approx\frac{12}{2}=6.
$$

The symmetric estimate uses points on both sides, so it usually gives a more accurate approximation than a one-sided difference quotient.

</div>

---

## Why the derivative is a limit

The average rate of change on $$[a,a+h]$$ is

$$
\frac{f(a+h)-f(a)}{h}.
$$

This is the slope of a secant line. The derivative asks what happens as the second point moves closer and closer to the first point. If the secant slopes approach one stable value, that value is the tangent slope.

This is why the derivative can be interpreted in several connected ways:

- geometrically, it is slope at an instant;
- numerically, it is the limiting value of nearby average rates;
- physically, it is instantaneous velocity when $$f$$ is position;
- locally, it is the coefficient of the best linear approximation.

<div class="theorem-box">

**Key idea.** Differentiability means the function looks almost linear when you zoom in near the point. Corners and cusps fail because the left and right zoom-in slopes do not settle into the same line.

</div>

---

## Notation for derivatives

AP Calculus uses several derivative notations:

$$
f'(x),\qquad y',\qquad \frac{dy}{dx},\qquad \frac{d}{dx}[f(x)].
$$

They all refer to rate of change, but they emphasize different things. The notation $$f'(a)$$ is a number. The notation $$f'(x)$$ is a function. The notation $$dy/dx$$ emphasizes that the derivative compares a tiny change in $$y$$ to a tiny change in $$x$$.

When a problem asks for "the derivative at $$x=a$$," give a value. When it asks for "the derivative of $$f$$," give a formula.

---

## Units and derivative meaning

If $$f(x)$$ has units of output and $$x$$ has units of input, then

$$
f'(x)
$$

has units

$$
\frac{\text{output units}}{\text{input units}}.
$$

For instance, if position is measured in feet and time in seconds, velocity is measured in feet per second. The sign tells direction; the magnitude tells how fast the position is changing.

Second derivatives have units of

$$
\frac{\text{output units}}{(\text{input units})^2}.
$$

That is why acceleration is measured in distance per time squared.

---

## Local linear behavior

The derivative gives the slope of the tangent line, so near $$x=a$$ the function behaves approximately like

$$
L(x)=f(a)+f'(a)(x-a).
$$

The phrase "near $$a$$" matters. Linearization is usually very good for inputs close to $$a$$, but the error can grow as the input moves farther away.

This idea also explains why derivatives are useful for estimation: a small input change $$\Delta x$$ creates an approximate output change

$$
\Delta y\approx f'(a)\Delta x.
$$

---

## Differentiability from graphs

From a graph, differentiability fails at places where the tangent slope is not a single finite number.

Common visual signs:

- a corner has two different one-sided slopes,
- a cusp has slopes that become infinitely steep in opposite directions,
- a vertical tangent has an infinite slope,
- a discontinuity cannot be differentiable.

A smooth-looking graph is not a proof by itself, but it gives a strong clue about where derivative values may exist.

---

## Derivative rule intuition

The power rule says that powers become one degree lower because the most important local change in $$x^n$$ comes from the linear term created by expanding $$(x+h)^n$$.

The product rule has two terms because both factors can change:

$$
(fg)'=f'g+fg'.
$$

The quotient rule is a product rule combined with the derivative of a reciprocal. Remember that the denominator is squared because the reciprocal function contributes a negative second power.

---

## Common mistakes

:::mistakes
- Confusing the derivative at a point with the derivative function.
- Forgetting the product rule and differentiating term-by-term incorrectly.
- Using the quotient rule with the wrong sign in the numerator.
- Treating speed and velocity as the same thing.
:::
