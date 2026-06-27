---
title: "Unit 6: Integration and Accumulation of Change"
sidebar:
  order: 6
---

---

Integration reverses differentiation and measures accumulation. It ties together antiderivatives, area, net change, and the Fundamental Theorem of Calculus.

---

## Antiderivatives

An antiderivative of $$f$$ is any function $$F$$ such that

$$
F'(x) = f(x).
$$

Core antiderivative patterns:

$$
\int x^n\,dx = \frac{x^{n+1}}{n+1} + C, \qquad n \ne -1
$$

$$
\int \frac{1}{x}\,dx = \ln(\lvert x \rvert) + C
$$

$$
\int e^x\,dx = e^x + C
$$

$$
\int \cos x\,dx = \sin x + C
$$

<div class="theorem-box">

**Example.** Compute $$\displaystyle\int \bigl(3x^2+4x\bigr)\,dx.$$

Apply the reverse power rule to each term, raising the exponent by one and dividing:

$$
\int 3x^2\,dx = x^3, \qquad \int 4x\,dx = 2x^2.
$$

Combining the pieces and adding the constant of integration gives

$$
\int \bigl(3x^2+4x\bigr)\,dx = x^3 + 2x^2 + C.
$$

The $$+C$$ is required because every constant has derivative zero, so the antiderivative is only determined up to a constant.

</div>

---

## Riemann sums

To approximate the accumulation of $$f(x)$$ on $$[a,b]$$, divide the interval into subintervals and sum:

$$
\sum_{i=1}^n f(x_i^*)\Delta x
$$

where

$$
\Delta x = \frac{b-a}{n}.
$$

Important choices:

- left Riemann sum,
- right Riemann sum,
- midpoint sum,
- trapezoidal approximation.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, xmin=0, xmax=4.3, ymin=0, ymax=5.2,
  xtick={0,1,2,3,4}, ytick={0,1,2,3,4,5},
  grid=both, grid style={gray!18},
  width=9cm, height=6.2cm,
  xlabel=$x$, ylabel=$f(x)$,
]
\addplot[blue, very thick, samples=180, domain=0:4] {0.25*x^2+0.6};
\draw[orange!35, fill=orange!20] (axis cs:0,0) rectangle (axis cs:1,0.85);
\draw[orange!35, fill=orange!20] (axis cs:1,0) rectangle (axis cs:2,1.6);
\draw[orange!35, fill=orange!20] (axis cs:2,0) rectangle (axis cs:3,2.85);
\draw[orange!35, fill=orange!20] (axis cs:3,0) rectangle (axis cs:4,4.6);
\draw[red!75!black, thick] (axis cs:0,0.6) -- (axis cs:1,0.85);
\draw[red!75!black, thick] (axis cs:1,0.85) -- (axis cs:2,1.6);
\draw[red!75!black, thick] (axis cs:2,1.6) -- (axis cs:3,2.85);
\draw[red!75!black, thick] (axis cs:3,2.85) -- (axis cs:4,4.6);
\node[orange!85!black, anchor=west] at (axis cs:2.25,4.6) {rectangles};
\node[red!75!black, anchor=west] at (axis cs:2.6,3.45) {trapezoid tops};
\end{axis}
\end{tikzpicture}
```

<div class="theorem-box">

**Example.** Approximate the accumulation of $$f(x)=x^2$$ on $$[0,2]$$ using a right Riemann sum with $$n=4$$.

First find the width of each subinterval:

$$
\Delta x = \frac{b-a}{n} = \frac{2-0}{4} = 0.5.
$$

The right endpoints are $$x=0.5,\,1,\,1.5,\,2$$. Evaluate $$f$$ at each:

$$
f(0.5)=0.25,\quad f(1)=1,\quad f(1.5)=2.25,\quad f(2)=4.
$$

Sum the heights and multiply by the width:

$$
\bigl(0.25+1+2.25+4\bigr)(0.5) = (7.5)(0.5) = 3.75.
$$

So the right Riemann sum is $$3.75$$. Since $$f$$ is increasing, this overestimates the true value $$\int_0^2 x^2\,dx = \tfrac{8}{3}\approx 2.67$$.

</div>

---

## Definite integral

The definite integral is the limit of Riemann sums:

$$
\int_a^b f(x)\,dx
=
\lim_{n \to \infty} \sum_{i=1}^n f(x_i^*)\Delta x.
$$

Interpretations:

- signed area under a curve,
- net accumulation,
- total change when integrating a rate.

<div class="theorem-box">

**Why Riemann sums become area.** Each term $$f(x_i^*)\Delta x$$ is the area of a thin rectangle. With wide rectangles, the approximation is rough. As the widths shrink toward $$0$$, the rectangles follow the curve more closely. If the limiting sum stabilizes, that stable value is the definite integral.

</div>

---

## Fundamental Theorem of Calculus

<div class="theorem-box">

**Theorem (Fundamental Theorem of Calculus).** If $$F'(x)=f(x)$$, then

$$
\int_a^b f(x)\,dx = F(b)-F(a).
$$

Also, if

$$
g(x) = \int_a^x f(t)\,dt,
$$

then

$$
g'(x) = f(x)
$$

when $$f$$ is continuous.

</div>

<div class="theorem-box">

**Why FTC Part 1 is true.** Let

$$
g(x)=\int_a^x f(t)\,dt.
$$

Changing $$x$$ by a small amount $$h$$ adds a thin strip of accumulated area:

$$
g(x+h)-g(x)=\int_x^{x+h}f(t)\,dt.
$$

For small $$h$$, this strip is approximately $$f(x)h$$. Dividing by $$h$$ gives approximately $$f(x)$$, and taking the limit gives $$g'(x)=f(x)$$.

</div>

<div class="theorem-box">

**Why FTC Part 2 is true.** If $$F'(x)=f(x)$$, then integrating $$f$$ adds up all the tiny changes in $$F$$. The tiny changes telescope into one total change:

$$
\int_a^b f(x)\,dx=F(b)-F(a).
$$

So the definite integral of a rate of change equals the net change in the original quantity.

</div>

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\int_0^3 x^2\,dx$$ using the Fundamental Theorem of Calculus.

Find an antiderivative of the integrand:

$$
F(x) = \frac{x^3}{3}, \qquad F'(x) = x^2.
$$

Now apply $$\int_a^b f(x)\,dx = F(b)-F(a)$$:

$$
\int_0^3 x^2\,dx = \frac{3^3}{3} - \frac{0^3}{3} = \frac{27}{3} - 0 = 9.
$$

So the definite integral equals $$9$$.

</div>

---

## Integrals with variable limits

If

$$
G(x) = \int_{u(x)}^{v(x)} f(t)\,dt,
$$

then

$$
G'(x) = f(v(x))v'(x) - f(u(x))u'(x).
$$

<div class="theorem-box">

**Example.** Find $$\displaystyle\frac{d}{dx}\int_0^{x^2}\cos t\,dt.$$

Here the upper limit is $$v(x)=x^2$$ and the lower limit is the constant $$0$$. By the chain-rule form of the Fundamental Theorem, evaluate the integrand at the upper limit and multiply by its derivative:

$$
v'(x) = 2x.
$$

Therefore

$$
\frac{d}{dx}\int_0^{x^2}\cos t\,dt = \cos\!\bigl(x^2\bigr)\cdot 2x = 2x\cos\!\bigl(x^2\bigr).
$$

The lower limit contributes nothing because its derivative is zero.

</div>

---

## u-substitution

If part of the integrand is the derivative of another part, let

$$
u = g(x), \qquad du = g'(x)\,dx.
$$

Then

$$
\int f(g(x))g'(x)\,dx = \int f(u)\,du.
$$

<div class="theorem-box">

**Example.** Compute $$\displaystyle\int 2x\bigl(x^2+1\bigr)^3\,dx.$$

The factor $$2x$$ is exactly the derivative of $$x^2+1$$, which suggests the substitution

$$
u = x^2+1, \qquad du = 2x\,dx.
$$

Rewriting the integral in terms of $$u$$ removes the $$2x\,dx$$ cleanly:

$$
\int 2x\bigl(x^2+1\bigr)^3\,dx = \int u^3\,du = \frac{u^4}{4} + C.
$$

Substituting back $$u = x^2+1$$ gives

$$
\int 2x\bigl(x^2+1\bigr)^3\,dx = \frac{\bigl(x^2+1\bigr)^4}{4} + C.
$$

</div>

For definite integrals, there are two clean options:

- change the bounds into $$u$$-bounds and never return to $$x$$,
- or find an antiderivative in terms of $$x$$ and use the original bounds.

Changing the bounds often keeps the work cleaner.

<div class="theorem-box">

**Example.** Compute

$$
\int_0^2 2x(x^2+1)^3\,dx.
$$

Use

$$
u=x^2+1,
\qquad
du=2x\,dx.
$$

Now change the bounds. When $$x=0$$,

$$
u=0^2+1=1.
$$

When $$x=2$$,

$$
u=2^2+1=5.
$$

So

$$
\int_0^2 2x(x^2+1)^3\,dx
=
\int_1^5 u^3\,du.
$$

Evaluate:

$$
\int_1^5 u^3\,du
=
\left[\frac{u^4}{4}\right]_1^5
=
\frac{5^4-1^4}{4}
=
\frac{624}{4}
=156.
$$

</div>

---

## Average value of a function

On $$[a,b]$$:

$$
f_{\text{avg}} = \frac{1}{b-a}\int_a^b f(x)\,dx.
$$

<div class="theorem-box">

**Example.** Find the average value of $$f(x)=x^2$$ on $$[0,3]$$.

Apply the average value formula with $$a=0$$ and $$b=3$$:

$$
f_{\text{avg}} = \frac{1}{3-0}\int_0^3 x^2\,dx.
$$

The definite integral was computed earlier as $$\int_0^3 x^2\,dx = 9$$, so

$$
f_{\text{avg}} = \frac{1}{3}\cdot 9 = 3.
$$

The average value is $$3$$: a constant height of $$3$$ would enclose the same area over $$[0,3]$$ as the curve does.

</div>

---

## Accumulation functions

If

$$
A(x) = \int_a^x f(t)\,dt,
$$

then:

- $$A'(x)=f(x)$$,
- $$A$$ increases where $$f>0$$,
- $$A$$ decreases where $$f<0$$,
- critical points of $$A$$ occur where $$f=0$$ or undefined.

---

## Numerical integration

If exact antiderivatives are unavailable, use:

- midpoint rule,
- trapezoidal rule,
- left/right sums.

Trapezoidal rule with equal spacing $$\Delta x$$:

$$
\int_a^b f(x)\,dx \approx \frac{\Delta x}{2}
\left[y_0 + 2y_1 + 2y_2 + \cdots + 2y_{n-1} + y_n\right].
$$

<div class="theorem-box">

**Example.** Approximate $$\displaystyle\int_0^2 x^2\,dx$$ using the trapezoidal rule with $$n=4$$.

The spacing is $$\Delta x = \tfrac{2-0}{4} = 0.5$$, giving nodes $$x=0,\,0.5,\,1,\,1.5,\,2$$ with heights

$$
y_0=0,\quad y_1=0.25,\quad y_2=1,\quad y_3=2.25,\quad y_4=4.
$$

Apply the trapezoidal formula, doubling every interior height:

$$
\int_0^2 x^2\,dx \approx \frac{0.5}{2}\bigl[0 + 2(0.25) + 2(1) + 2(2.25) + 4\bigr].
$$

Simplify the bracket and multiply:

$$
\frac{0.5}{2}\bigl[0 + 0.5 + 2 + 4.5 + 4\bigr] = (0.25)(11) = 2.75.
$$

The trapezoidal estimate is $$2.75$$, slightly above the exact value $$\tfrac{8}{3}\approx 2.67$$ because $$x^2$$ is concave up.

</div>

---

## Integration as accumulation

An integral adds up tiny pieces. If $$f(x)$$ is a rate, then

$$
f(x)\,dx
$$

represents a tiny amount of accumulated change. Adding all of those tiny pieces from $$a$$ to $$b$$ gives

$$
\int_a^b f(x)\,dx.
$$

This is why the units of a definite integral are

$$
(\text{units of }f)(\text{units of }x).
$$

If $$f$$ is measured in gallons per minute and $$x$$ is measured in minutes, the integral is measured in gallons.

---

## Signed area vs geometric area

The definite integral gives signed area:

- area above the $$x$$-axis contributes positively,
- area below the $$x$$-axis contributes negatively.

Geometric area is always nonnegative, so it may require

$$
\int_a^b \lvert f(x)\rvert\,dx
$$

or splitting at zeros of $$f$$.

<div class="theorem-box">

**Key idea.** Net change allows positive and negative accumulation to cancel. Total amount does not.

</div>

---

## The Fundamental Theorem as a bridge

The Fundamental Theorem of Calculus connects two ideas that initially look separate:

- derivatives measure instantaneous change,
- integrals measure accumulated change.

If $$F'(x)=f(x)$$, then

$$
\int_a^b f(x)\,dx=F(b)-F(a).
$$

So integrating a rate gives the change in the original quantity.

The accumulation version says that if

$$
A(x)=\int_a^x f(t)\,dt,
$$

then

$$
A'(x)=f(x).
$$

The upper limit controls where the accumulation stops, so changing $$x$$ changes the accumulated area.

---

## Variable-limit integrals

For

$$
G(x)=\int_{u(x)}^{v(x)} f(t)\,dt,
$$

the upper limit contributes positively and the lower limit contributes negatively:

$$
G'(x)=f(v(x))v'(x)-f(u(x))u'(x).
$$

This is a chain-rule version of the Fundamental Theorem. The derivative of each limit must be included.

---

## Choosing an antiderivative strategy

Basic antiderivatives come from reversing derivative rules. A good first scan:

- powers use the reverse power rule,
- $$1/x$$ gives $$\ln\lvert x\rvert$$,
- exponentials stay exponential,
- trig functions reverse according to derivative pairs,
- chain-rule patterns suggest $$u$$-substitution.

Substitution works when one part of the integrand is the derivative of another part, possibly up to a constant factor.

---

## Riemann sums from tables

With table data, the width of each subinterval matters. Equal spacing is convenient, but AP tables often use unequal intervals.

For left and right sums, multiply each function value by the width of its interval. For trapezoids, each interval contributes

$$
\frac{1}{2}(\text{width})(\text{left height}+\text{right height}).
$$

If the function is increasing, a left sum underestimates and a right sum overestimates. If the function is decreasing, the reverse is true. Concavity controls whether trapezoids or midpoints tend to overestimate or underestimate.

---

## Average value intuition

The average value of $$f$$ on $$[a,b]$$ is the constant height that would produce the same signed area over the interval:

$$
f_{\text{avg}}=\frac{1}{b-a}\int_a^b f(x)\,dx.
$$

This is different from the average rate of change. Average value averages outputs; average rate of change compares endpoint outputs.

---

## Common mistakes

:::mistakes
- Forgetting $$+C$$ on indefinite integrals.
- Using area language when the integral is negative and really means net signed accumulation.
- Dropping the chain-rule factor in reverse when using substitution.
- Confusing $$\int_a^b f(x)\,dx$$ with ordinary multiplication.
:::

---

## Integration strategy

Antidifferentiation is pattern recognition. A good first pass is:

:::strategy{title="Choosing an integration method"}
1. Simplify algebraically before choosing a method.
2. Look for direct antiderivative rules.
3. If there is a function and a version of its derivative, try substitution.
4. If there is a product where one factor simplifies when differentiated, try integration by parts.
5. If there is a rational function, try algebraic division or partial fractions.
6. If bounds are present, decide whether to change bounds or substitute back.
:::

### Integration by parts

Integration by parts comes from the product rule:

$$
\int u\,dv=uv-\int v\,du.
$$

It is useful for products such as polynomial times exponential, polynomial times trig, or logarithmic functions.

:::tip{title="Choosing $$u$$"}
A common priority list is logarithmic, inverse trig, algebraic, trig, exponential. This is only a guide, but it helps choose the factor that becomes simpler when differentiated.
:::

For example, in

$$
\int x e^x\,dx,
$$

choose $$u=x$$ and $$dv=e^x\,dx$$. Then $$du=dx$$ and $$v=e^x$$, so

$$
\int x e^x\,dx=xe^x-\int e^x\,dx=xe^x-e^x+C.
$$

<div class="theorem-box">

**Example.** Compute

$$
\int x\ln x\,dx.
$$

Choose

$$
u=\ln x,
\qquad
dv=x\,dx.
$$

Then

$$
du=\frac{1}{x}\,dx,
\qquad
v=\frac{x^2}{2}.
$$

Apply integration by parts:

$$
\int x\ln x\,dx
=\frac{x^2}{2}\ln x-\int \frac{x^2}{2}\cdot\frac{1}{x}\,dx.
$$

Simplify the remaining integral:

$$
=\frac{x^2}{2}\ln x-\frac12\int x\,dx
=\frac{x^2}{2}\ln x-\frac{x^2}{4}+C.
$$

</div>

### Partial fractions

Partial fractions break a rational function into simpler rational pieces. Before using them, make sure the numerator degree is smaller than the denominator degree. If not, divide first.

For a denominator like

$$
(x-a)(x-b),
$$

write

$$
\frac{P(x)}{(x-a)(x-b)}
=\frac{A}{x-a}+\frac{B}{x-b}.
$$

Then solve for the constants and integrate each term. This technique appears more in BC than AB, but it connects directly to rational functions from Precalculus.

### Trig powers and identities

Integrals involving powers of sine and cosine usually depend on whether one power is odd.

:::strategy{title="Sine and cosine powers"}
- If the sine power is odd, save one $$\sin x$$ and convert the rest using $$\sin^2x=1-\cos^2x$$.
- If the cosine power is odd, save one $$\cos x$$ and convert the rest using $$\cos^2x=1-\sin^2x$$.
- If both powers are even, use power-reduction identities.
:::

<div class="theorem-box">

**Example.** Compute

$$
\int \sin^3 x\cos^2 x\,dx.
$$

Because the sine power is odd, save one sine factor:

$$
\sin^3x=\sin^2x\sin x.
$$

Use $$\sin^2x=1-\cos^2x$$:

$$
\int \sin^3x\cos^2x\,dx
=
\int (1-\cos^2x)\cos^2x\sin x\,dx.
$$

Let

$$
u=\cos x,
\qquad
du=-\sin x\,dx.
$$

Then

$$
\int (1-\cos^2x)\cos^2x\sin x\,dx
=
-\int (1-u^2)u^2\,du.
$$

Integrate:

$$
-\int (u^2-u^4)\,du
=-\frac{u^3}{3}+\frac{u^5}{5}+C.
$$

Substitute back:

$$
\int \sin^3x\cos^2x\,dx
=-\frac{\cos^3x}{3}+\frac{\cos^5x}{5}+C.
$$

</div>

### Trig substitution

Trig substitution is useful when radicals contain expressions matching Pythagorean identities.

| Expression | Substitution | Identity used |
|---|---|---|
| $$\sqrt{a^2-x^2}$$ | $$x=a\sin\theta$$ | $$1-\sin^2\theta=\cos^2\theta$$ |
| $$\sqrt{a^2+x^2}$$ | $$x=a\tan\theta$$ | $$1+\tan^2\theta=\sec^2\theta$$ |
| $$\sqrt{x^2-a^2}$$ | $$x=a\sec\theta$$ | $$\sec^2\theta-1=\tan^2\theta$$ |

This technique is mostly BC/enrichment, but it is one of the standard ways to handle roots that do not simplify by ordinary substitution.

<div class="theorem-box">

**Example.** Compute

$$
\int \frac{1}{\sqrt{4-x^2}}\,dx.
$$

The radical matches $$\sqrt{a^2-x^2}$$ with $$a=2$$, so use

$$
x=2\sin\theta,
\qquad
dx=2\cos\theta\,d\theta.
$$

Then

$$
\sqrt{4-x^2}
=
\sqrt{4-4\sin^2\theta}
=
\sqrt{4\cos^2\theta}
=2\cos\theta
$$

on the usual substitution interval. The integral becomes

$$
\int \frac{2\cos\theta}{2\cos\theta}\,d\theta
=
\int 1\,d\theta
=\theta+C.
$$

Since $$x=2\sin\theta$$,

$$
\theta=\arcsin\left(\frac{x}{2}\right).
$$

Therefore

$$
\int \frac{1}{\sqrt{4-x^2}}\,dx
=
\arcsin\left(\frac{x}{2}\right)+C.
$$

</div>

### Roots, long division, and completing the square

Before using a heavier technique, simplify the integrand:

- Roots may become powers, such as $$\sqrt{x}=x^{1/2}$$.
- Improper rational functions should use polynomial long division first.
- Quadratic denominators may need completing the square.

<div class="theorem-box">

**Example.** Compute

$$
\int \frac{x^2+1}{x+1}\,dx.
$$

The numerator degree is larger than the denominator degree, so divide:

$$
\frac{x^2+1}{x+1}=x-1+\frac{2}{x+1}.
$$

Now integrate term by term:

$$
\int \frac{x^2+1}{x+1}\,dx
=
\int\left(x-1+\frac{2}{x+1}\right)\,dx.
$$

Therefore

$$
\int \frac{x^2+1}{x+1}\,dx
=
\frac{x^2}{2}-x+2\ln\lvert x+1\rvert+C.
$$

</div>

<div class="theorem-box">

**Example.** Compute

$$
\int \frac{1}{x^2+4x+8}\,dx.
$$

Complete the square in the denominator:

$$
x^2+4x+8=(x+2)^2+4.
$$

So

$$
\int \frac{1}{x^2+4x+8}\,dx
=
\int \frac{1}{(x+2)^2+2^2}\,dx.
$$

Use the inverse tangent pattern:

$$
\int \frac{1}{u^2+a^2}\,du=\frac{1}{a}\arctan\left(\frac{u}{a}\right)+C.
$$

With $$u=x+2$$ and $$a=2$$,

$$
\int \frac{1}{x^2+4x+8}\,dx
=
\frac12\arctan\left(\frac{x+2}{2}\right)+C.
$$

</div>

### Improper integrals

An improper integral is a definite integral that has an infinite interval or an infinite discontinuity. It must be rewritten as a limit.

For example,

$$
\int_1^\infty \frac{1}{x^2}\,dx
=\lim_{b\to\infty}\int_1^b\frac{1}{x^2}\,dx.
$$

The integral **converges** if this limit is finite and **diverges** otherwise.

### Comparison Test for improper integrals

For nonnegative functions, comparison works similarly to series.

If $$0\le f(x)\le g(x)$$ for large $$x$$ and

$$
\int_a^\infty g(x)\,dx
$$

converges, then

$$
\int_a^\infty f(x)\,dx
$$

also converges.

If $$0\le g(x)\le f(x)$$ for large $$x$$ and

$$
\int_a^\infty g(x)\,dx
$$

diverges, then

$$
\int_a^\infty f(x)\,dx
$$

also diverges.

<div class="theorem-box">

**Example.** Determine whether

$$
\int_1^\infty \frac{1}{x^2+\sin^2 x}\,dx
$$

converges.

Since $$\sin^2x\ge0$$,

$$
x^2+\sin^2x\ge x^2.
$$

Taking reciprocals reverses the inequality for positive quantities:

$$
0\le \frac{1}{x^2+\sin^2x}\le \frac{1}{x^2}.
$$

The comparison integral

$$
\int_1^\infty \frac{1}{x^2}\,dx
$$

converges. Therefore, by comparison,

$$
\int_1^\infty \frac{1}{x^2+\sin^2x}\,dx
$$

also converges.

</div>

---

## Tips for the exam

Integration questions usually ask you to connect a rate, an amount, and an interval. The central idea is:

$$
\text{new amount}=\text{initial amount}+\text{accumulated change}.
$$

So if $$A'(t)=r(t)$$, then

$$
A(b)=A(a)+\int_a^b r(t)\,dt.
$$

:::checklist
1. Decide whether the integral represents signed accumulation, total area, displacement, or total distance.
2. If a rate can be negative, do not call the integral "area" unless the problem asks for geometric area.
3. For total distance, integrate $$\lvert v(t)\rvert$$ or split where velocity changes sign.
4. For accumulation functions, use FTC Part 1 before trying to find an antiderivative.
5. For substitution, change bounds if you rewrite the integral in terms of $$u$$.
:::

:::exam{topic="Integral interpretation"}
AP problems often give a table or graph of a rate. You may not have a formula, so be comfortable estimating integrals numerically and explaining whether the estimate is an overestimate or underestimate.
:::
