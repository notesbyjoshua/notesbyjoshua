---
title: "Unit 6: Integration and Accumulation of Change"
sidebar:
  order: 6
---

## Riemann sums

Integration begins with a simple idea: if a region is too curved to measure with one familiar geometry formula, approximate it with many simple shapes. A Riemann sum approximates accumulated change by cutting an interval into small pieces and adding rectangle areas.

Suppose we want the signed area under $$f(x)$$ on $$[a,b]$$. Divide the interval into $$n$$ subintervals of equal width

$$
\Delta x = \frac{b-a}{n}.
$$

Choose one sample point $$x_i^*$$ in each subinterval. The rectangle on that subinterval has height $$f(x_i^*)$$ and width $$\Delta x$$, so the total approximation is

$$
\sum_{i=1}^n f(x_i^*)\Delta x.
$$

The sample point determines the type of Riemann sum. There are three types of rectangular Riemann sums: left Riemann sums, right Riemann sums, and midpoint Riemann sums.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\pgfplotsset{rs/.style={scale only axis, width=5.2cm, height=3.8cm, axis lines=middle,
  xmin=0, xmax=2.2, ymin=0, ymax=4.5, xtick={0,1,2}, ytick={0,2,4},
  grid=both, grid style={gray!15}, xlabel=$x$, ylabel=$f(x)$}}
\begin{axis}[rs, at={(0cm,0cm)}, title={Left}]
\addplot[blue, thick, samples=80, domain=0:2] {x^2};
\addplot[only marks, mark=*, mark size=1.4pt, orange!85!black] coordinates {(0,0) (0.5,0.25) (1,1) (1.5,2.25)};
\draw[orange!30, fill=orange!18] (axis cs:0,0) rectangle (axis cs:0.5,0);
\draw[orange!30, fill=orange!18] (axis cs:0.5,0) rectangle (axis cs:1,0.25);
\draw[orange!30, fill=orange!18] (axis cs:1,0) rectangle (axis cs:1.5,1);
\draw[orange!30, fill=orange!18] (axis cs:1.5,0) rectangle (axis cs:2,2.25);
\end{axis}
\begin{axis}[rs, at={(5.9cm,0cm)}, title={Right}]
\addplot[blue, thick, samples=80, domain=0:2] {x^2};
\addplot[only marks, mark=*, mark size=1.4pt, orange!85!black] coordinates {(0.5,0.25) (1,1) (1.5,2.25) (2,4)};
\draw[orange!30, fill=orange!18] (axis cs:0,0) rectangle (axis cs:0.5,0.25);
\draw[orange!30, fill=orange!18] (axis cs:0.5,0) rectangle (axis cs:1,1);
\draw[orange!30, fill=orange!18] (axis cs:1,0) rectangle (axis cs:1.5,2.25);
\draw[orange!30, fill=orange!18] (axis cs:1.5,0) rectangle (axis cs:2,4);
\end{axis}
\begin{axis}[rs, at={(11.8cm,0cm)}, title={Midpoint}]
\addplot[blue, thick, samples=80, domain=0:2] {x^2};
\addplot[only marks, mark=*, mark size=1.4pt, orange!85!black] coordinates {(0.25,0.0625) (0.75,0.5625) (1.25,1.5625) (1.75,3.0625)};
\draw[orange!30, fill=orange!18] (axis cs:0,0) rectangle (axis cs:0.5,0.0625);
\draw[orange!30, fill=orange!18] (axis cs:0.5,0) rectangle (axis cs:1,0.5625);
\draw[orange!30, fill=orange!18] (axis cs:1,0) rectangle (axis cs:1.5,1.5625);
\draw[orange!30, fill=orange!18] (axis cs:1.5,0) rectangle (axis cs:2,3.0625);
\end{axis}
\end{tikzpicture}
```
// there is no curve for the right Riemann sums

### Left Riemann sums

A left Riemann sum uses the left endpoint of each subinterval. On an increasing function, left sums usually underestimate because each rectangle uses the smaller height from its interval.

<div class="theorem-box">

**Example.** Approximate $$\int_0^2 x^2\,dx$$ with a left Riemann sum using $$n=4$$.

The width is

$$
\Delta x=\frac{2-0}{4}=0.5.
$$

The left endpoints are $$0,0.5,1,1.5$$, so

$$
L_4=0.5\left[f(0)+f(0.5)+f(1)+f(1.5)\right].
$$

Since $$f(x)=x^2$$,

$$
L_4=0.5(0+0.25+1+2.25)=1.75.
$$

</div>

### Right Riemann sums

A right Riemann sum uses the right endpoint of each subinterval. On an increasing function, right sums usually overestimate because each rectangle uses the larger height from its interval.

<div class="theorem-box">

**Example.** Approximate $$\int_0^2 x^2\,dx$$ with a right Riemann sum using $$n=4$$.

The right endpoints are $$0.5,1,1.5,2$$, so

$$
R_4=0.5\left[f(0.5)+f(1)+f(1.5)+f(2)\right].
$$

Evaluate:

$$
R_4=0.5(0.25+1+2.25+4)=3.75.
$$

</div>

### Midpoint Riemann sums

A midpoint Riemann sum uses the center of each subinterval. Midpoint sums often give a better estimate than left or right sums with the same number of intervals because the rectangle height is chosen from the middle.

<div class="theorem-box">

**Example.** Approximate $$\int_0^2 x^2\,dx$$ with a midpoint Riemann sum using $$n=4$$.

The subintervals are $$[0,0.5]$$, $$[0.5,1]$$, $$[1,1.5]$$, and $$[1.5,2]$$. Their midpoints are $$0.25,0.75,1.25,1.75$$. Thus

$$
M_4=0.5\left[f(0.25)+f(0.75)+f(1.25)+f(1.75)\right].
$$

Compute:

$$
M_4=0.5(0.0625+0.5625+1.5625+3.0625)=2.625.
$$

</div>

### Trapezoidal Riemann sums

The trapezoidal rule uses trapezoids instead of rectangles. On each subinterval, connect the two endpoint heights with a straight segment. The area of one trapezoid is

$$
\frac{1}{2}(\text{width})(\text{left height}+\text{right height}).
$$

For equal spacing $$\Delta x$$,

$$
\int_a^b f(x)\,dx
\approx
\frac{\Delta x}{2}
\left[y_0+2y_1+2y_2+\cdots+2y_{n-1}+y_n\right].
$$

<div class="theorem-box">

**Example.** Approximate $$\int_0^2 x^2\,dx$$ with the trapezoidal rule using $$n=4$$.

The nodes are $$0,0.5,1,1.5,2$$, and the heights are

$$
0,\quad 0.25,\quad 1,\quad 2.25,\quad 4.
$$

So

$$
T_4=\frac{0.5}{2}\left[0+2(0.25)+2(1)+2(2.25)+4\right].
$$

This gives

$$
T_4=0.25(11)=2.75.
$$

</div>

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, xmin=0, xmax=2.2, ymin=0, ymax=4.5,
  xtick={0,0.5,1,1.5,2}, ytick={0,1,2,3,4},
  grid=both, grid style={gray!15},
  width=9cm, height=5.2cm,
  xlabel=$x$, ylabel=$f(x)$,
]
\addplot[blue, thick, samples=100, domain=0:2] {x^2};
\draw[orange!30, fill=orange!15] (axis cs:0,0) -- (axis cs:0,0) -- (axis cs:0.5,0.25) -- (axis cs:0.5,0) -- cycle;
\draw[orange!30, fill=orange!15] (axis cs:0.5,0) -- (axis cs:0.5,0.25) -- (axis cs:1,1) -- (axis cs:1,0) -- cycle;
\draw[orange!30, fill=orange!15] (axis cs:1,0) -- (axis cs:1,1) -- (axis cs:1.5,2.25) -- (axis cs:1.5,0) -- cycle;
\draw[orange!30, fill=orange!15] (axis cs:1.5,0) -- (axis cs:1.5,2.25) -- (axis cs:2,4) -- (axis cs:2,0) -- cycle;
\addplot[only marks, mark=*, mark size=1.5pt, orange!85!black] coordinates {(0,0) (0.5,0.25) (1,1) (1.5,2.25) (2,4)};
\node[orange!85!black, anchor=west] at (axis cs:1.15,3.45) {trapezoids use both endpoints};
\end{axis}
\end{tikzpicture}
```

### Riemann sums from data

With table data, the width of each subinterval matters. Equal spacing is convenient, but AP tables often use unequal intervals.

For left and right sums, multiply each function value by the width of its interval. For trapezoids, each interval contributes

$$
\frac{1}{2}(\text{width})(\text{left height}+\text{right height}).
$$

If the function is increasing, a left sum underestimates and a right sum overestimates. If the function is decreasing, the reverse is true. Concavity controls whether trapezoids or midpoints tend to overestimate or underestimate.

<div class="theorem-box">

**Example.** A car's velocity is measured in miles per hour:

$$
\begin{array}{c|cccc}
t\text{ (hours)} & 0 & 1 & 3 & 4 \\\hline
v(t)\text{ (mph)} & 20 & 35 & 50 & 42
\end{array}
$$

Approximate the distance traveled from $$t=0$$ to $$t=4$$ using a left Riemann sum.

The intervals have widths $$1$$, $$2$$, and $$1$$. A left sum uses the left endpoint velocity on each interval:

$$
20(1)+35(2)+50(1)=20+70+50=140.
$$

The car traveled approximately $$140$$ miles. The units work because

$$
\text{miles per hour}\cdot\text{hours}=\text{miles}.
$$

</div>

---

## Definite integrals

Although Riemann sums are a great way to approximate the area under the curve, you always end of over- or underestimating the actual area. One way to fix this is to shrink the width of the rectangles used to an infinitesimally small value $$dx$$ (basically $$0$$) so that the height of each rectangle represents the actual height. We define a function called the definite integral to model this limit.

<div class="theorem-box">

**Definition.** The definite integral of $$f$$ from $$a$$ to $$b$$ is the limit of Riemann sums:

$$
\int_a^b f(x)\,dx
=
\lim_{n\to\infty}\sum_{i=1}^{n} f(x_i^*)\Delta x,
$$

as the width of the largest subinterval approaches $$0$$, assuming this limit exists. $$f(x)$$ is called the integrand, and $$dx$$ is "integrating with respect to $$x$$". $$a$$ and $$b$$ are the bounds of integration, with $$a$$ being the bottom bound and $$b$$ being the top bound.

</div>

A key property of the definite integral is

$$
\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx.
$$

This is because we usually define the definite integral using singed area (talked about right after this), meaning that the direction of the area matters. We usually take right and above as positive, meaning that integrating from right to left or integrating under the $$x$$-axis results in a negative area.

### Signed area vs geometric area

An important distinction between definite integrals pure area is the difference between signed and geometric area. The definite integral gives signed area:

- area above the $$x$$-axis contributes positively,
- area below the $$x$$-axis contributes negatively.

Geometric area is always nonnegative, meaning that you add up the magnitudes of all of the areas.

---

## The Fundamental Theorem of Calculus

The definite integral is defined as a limiting area process, but computing a limit of Riemann sums every time would be painful. The Fundamental Theorem of Calculus gives the shortcut: if you can find an antiderivative, then a definite integral can be evaluated by subtracting endpoint values.

The theorem also explains why derivatives and integrals are inverse processes. Derivatives measure instantaneous change; integrals add up accumulated change.

<div class="theorem-box">

**Theorem (Fundamental Theorem of Calculus).** If for some functions $$F(x)$$ and $$f(x)$$, $$F'(x)=f(x)$$, then

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

**Proof (Fundamental Theorem of Calculus).** Let

$$
G(x)=\int_a^x f(t)\,dt.
$$

To find $$G'(x)$$, use the derivative definition:

$$
G'(x)=\lim_{h\to0}\frac{G(x+h)-G(x)}{h}.
$$

Substitute the definition of $$G$$:

$$
G(x+h)-G(x)
=
\int_a^{x+h}f(t)\,dt-\int_a^x f(t)\,dt
=
\int_x^{x+h}f(t)\,dt.
$$

Thus

$$
G'(x)=\lim_{h\to0}\frac{1}{h}\int_x^{x+h}f(t)\,dt.
$$

If $$f$$ is continuous, then on a very small interval from $$x$$ to $$x+h$$, the average value of $$f$$ approaches $$f(x)$$. Therefore

$$
G'(x)=f(x).
$$

Now suppose $$F'(x)=f(x)$$. Since $$G'(x)=f(x)$$ too, the functions $$F$$ and $$G$$ differ only by a constant. Using total change,

$$
\int_a^b f(x)\,dx=G(b)-G(a)=F(b)-F(a).
$$

</div>

### Basic antiderivative rules

Before using the Fundamental Theorem of Calculus, you need an antiderivative. These are the most common reverse rules:

$$
\int x^n\,dx=\frac{x^{n+1}}{n+1}+C,\qquad n\ne -1
$$

$$
\int e^x\,dx=e^x+C
$$

$$
\int a^x\,dx=\frac{a^x}{\ln a}+C,\qquad a>0,\ a\ne1
$$

$$
\int \frac{1}{x}\,dx=\ln\lvert x\rvert+C
$$

$$
\int \cos x\,dx=\sin x+C,\qquad
\int \sin x\,dx=-\cos x+C
$$

Always check an antiderivative by differentiating it back to the integrand.

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\int_0^3 x^2\,dx$$.

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

### Integration as accumulation

An integral adds up tiny pieces. If $$f(x)$$ is a rate, then

$$
f(x)\,dx
$$

represents a tiny amount of accumulated change caused by that rate. Adding all of those tiny pieces from $$a$$ to $$b$$ gives

$$
\int_a^b f(x)\,dx.
$$

This is why the units of a definite integral are

$$
(\text{units of }f)(\text{units of }x).
$$

For example, if $$r(t)$$ is measured in gallons per minute and $$t$$ is measured in minutes, then

$$
\int_a^b r(t)\,dt
$$

is measured in gallons. The integral does not give a rate anymore; it gives the accumulated amount caused by that rate over the interval.

### Solving definite integrals

To solve a definite integral using the Fundamental Theorem:

:::checklist
1. Find an antiderivative $$F$$ of the integrand.
2. Evaluate $$F(b)$$ and $$F(a)$$.
3. Subtract in the order upper minus lower: $$F(b)-F(a)$$.
4. Interpret the sign if the integral represents signed area or net change.
:::

<div class="theorem-box">

**Example.** Evaluate

$$
\int_1^4 \left(3x^2-2x\right)\,dx.
$$

An antiderivative is

$$
F(x)=x^3-x^2.
$$

Apply the Fundamental Theorem:

$$
\int_1^4 \left(3x^2-2x\right)\,dx
=
F(4)-F(1).
$$

Compute:

$$
F(4)=4^3-4^2=64-16=48,
$$

and

$$
F(1)=1^3-1^2=0.
$$

Therefore

$$
\int_1^4 \left(3x^2-2x\right)\,dx=48.
$$

</div>

### Integrals with variable limits

If

$$
G(x) = \int_{u(x)}^{v(x)} f(t)\,dt,
$$

then

$$
G'(x) = f(v(x))v'(x) - f(u(x))u'(x).
$$

This is can be thought of as the chain rule for FTC.

<div class="theorem-box">

**Proof (Chain rule form of FTC).** Define

$$
A(x)=\int_a^x f(t)\,dt.
$$

By the Fundamental Theorem,

$$
A'(x)=f(x).
$$

If the upper limit is $$v(x)$$, then

$$
\int_a^{v(x)}f(t)\,dt=A(v(x)).
$$

Differentiate using the chain rule:

$$
\frac{d}{dx}A(v(x))=A'(v(x))v'(x)=f(v(x))v'(x).
$$

For a lower limit $$u(x)$$, rewrite

$$
\int_{u(x)}^{v(x)}f(t)\,dt
=
\int_a^{v(x)}f(t)\,dt-\int_a^{u(x)}f(t)\,dt.
$$

Differentiate both pieces:

$$
\frac{d}{dx}\int_{u(x)}^{v(x)}f(t)\,dt
=f(v(x))v'(x)-f(u(x))u'(x).
$$

</div>

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

## Antiderivatives and the indefinite integral

<div class="theorem-box">

**Definition.** An antiderivative of $$f$$ is any function $$F$$ such that

$$
F'(x) = f(x).
$$

However, antiderivatives are more commonly known as *indefinite integrals*. Another way to represent the antiderivative is using the integral sign:

$$
F(x) = \int f(x) dx.
$$

</div>

Note that antiderivatives have no bounds. Instead of finding a value, the antiderivative finds a function whose derivative calculates to the original function.

This is the key difference:

- A **definite integral** has bounds and returns a number.
- An **indefinite integral** has no bounds and returns a family of functions.

For indefinite integrals, you always have to add a **constant of integration** $$+C$$. The $$+C$$ is necessary because derivatives lose constant information. For example,

$$
\frac{d}{dx}(x^2)=2x,
\qquad
\frac{d}{dx}(x^2+5)=2x,
\qquad
\frac{d}{dx}(x^2-11)=2x.
$$

So when reversing the derivative of $$2x$$, all of those possibilities must be included:

$$
\int 2x\,dx=x^2+C.
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

:::mistakes
- Forgetting $$+C$$ on indefinite integrals.
- Using area language when the integral is negative and really means net signed accumulation.
- Dropping the chain-rule factor in reverse when using substitution.
- Confusing $$\int_a^b f(x)\,dx$$ with ordinary multiplication.
:::

---

## Integration strategies

Integration is a game of pattern recognition and choosing smart methods. This section presents some of the most useful and widely used integration techniques.

### Integrals of odd and even functions

Symmetry can make some definite integrals much faster, especially on intervals of the form $$[-a,a]$$.

- An even function satisfies $$f(-x)=f(x)$$. Its graph is symmetric across the $$y$$-axis.
- An odd function satisfies $$f(-x)=-f(x)$$. Its graph is symmetric about the origin.

On a symmetric interval,

$$
\int_{-a}^{a} f(x)\,dx=2\int_0^a f(x)\,dx
$$

for even functions, and

$$
\int_{-a}^{a} f(x)\,dx=0
$$

for odd functions.

<div class="theorem-box">

**Example.**Evaluate

$$
\int_{-3}^{3}(x^2+1)\,dx
$$

using symmetry.

The function $$x^2+1$$ is even, so

$$
\int_{-3}^{3}(x^2+1)\,dx
=
2\int_0^3(x^2+1)\,dx.
$$

</div>

<div class="theorem-box">

**Example.** Evaluate

$$
\int_{-4\pi}^{4\pi}(sin^3{x}cos^4{x})\,dx.
$$

The function $$sin^3{x}cos^4{x}$$ is odd because

$$
sin^3{-x}cos^4{-x}=-sin^3{x}cos^4{x}.
$$

If you don't see why, make sure to brush up on your trig rules. Since the interval is symmetric,

$$
\int_{-4\pi}^{4\pi}(sin^3{x}cos^4{x})\,dx=0.
$$

</div>
// please fix the formatting

### U-substitution

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

The factor $$2x$$ is the derivative of $$x^2+1$$, which suggests the substitution

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

### Trig powers and identities

Integrals involving powers of sine and cosine usually depend on whether one power is odd.

:::strategy
- If the sine power is odd, save one $$\sin x$$ and convert the rest using $$\sin^2x=1-\cos^2x$$.
- If the cosine power is odd, save one $$\cos x$$ and convert the rest using $$\cos^2x=1-\sin^2x$$.
- If both powers are even, use power-reduction identities (if you need a reminder to what they are, check out [Unit 8/9](/notes/ap/precalc/graphanalyticaltrig/) of AP Precalculus.)
- Always remember to use trig rules to simplify if possible
- When dealing with symmetric bounds for definite integral, always remember to check for even/oddness!
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

This technique should be immediately used when you see something that resembles Pythagorean theorem, like square roots with $$x^2$$ in them.

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

### Integration by parts (BC-only)

Integration by parts comes from the product rule:

$$
\int u\,dv=uv-\int v\,du.
$$

It is useful for products such as polynomial times exponential, polynomial times trig, or logarithmic functions.

:::tip
A common priority list is **L**ogarithmic, **I**nverse trig, **A**lgebraic, **T**rig, **E**xponential (**LIATE**). This is only a guide, but it helps choose the factor that becomes simpler when differentiated.
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

By LIATE, choose

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

### Tabular method for integration by parts

The tabular method is a faster way to organize repeated integration by parts when one factor eventually differentiates to $$0$$, such as a polynomial.

It is best for integrals of the form

$$
\int (\text{polynomial})(\text{easy-to-integrate function})\,dx.
$$

Make two columns:

1. differentiate the polynomial until it becomes $$0$$,
2. integrate the other factor the same number of times.

Then multiply along the diagonals and alternate signs $$+,-,+,-,\dots$$. This is the same integration by parts formula repeated several times, just organized in a table.

<div class="theorem-box">

**Example.** Use the tabular method to compute

$$
\int x^2e^x\,dx.
$$

Differentiate $$x^2$$ repeatedly and integrate $$e^x$$ repeatedly:

$$
\begin{array}{c|c|c}
\text{sign} & D & I \\\hline
+ & x^2 & e^x \\
- & 2x & e^x \\
+ & 2 & e^x \\
- & 0 & e^x
\end{array}
$$

Multiply diagonally with alternating signs:

$$
\int x^2e^x\,dx
=
x^2e^x-2xe^x+2e^x+C.
$$

Factor if desired:

$$
\int x^2e^x\,dx=e^x(x^2-2x+2)+C.
$$

</div>

### Partial fractions (BC-only)

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

Then solve for the constants and integrate each term. For more details, you can look at [Unit 13](/notes/ap/precalc/addtopics/) of AP Precalculus for a reminder of how to solve partial fractions.

<div class="theorem-box">

**Example.** Compute

$$
\int \frac{5x+1}{x^2-x-2}\,dx.
$$

Factor the denominator:

$$
x^2-x-2=(x-2)(x+1).
$$

Set up partial fractions:

$$
\frac{5x+1}{(x-2)(x+1)}
=
\frac{A}{x-2}+\frac{B}{x+1}.
$$

Multiply through by $$(x-2)(x+1)$$:

$$
5x+1=A(x+1)+B(x-2).
$$

Use convenient values. If $$x=2$$, then

$$
11=3A
\quad\Longrightarrow\quad
A=\frac{11}{3}.
$$

If $$x=-1$$, then

$$
-4=-3B
\quad\Longrightarrow\quad
B=\frac{4}{3}.
$$

Therefore

$$
\int \frac{5x+1}{x^2-x-2}\,dx
=
\int\left(\frac{11/3}{x-2}+\frac{4/3}{x+1}\right)\,dx.
$$

So

$$
\int \frac{5x+1}{x^2-x-2}\,dx
=
\frac{11}{3}\ln\lvert x-2\rvert+\frac{4}{3}\ln\lvert x+1\rvert+C.
$$

</div>

---

## Improper integrals (BC-only)

<div class="theorem-box">

**Definition.** An *improper integral* is a definite integral where ordinary endpoint evaluation does not make sense. This happens in two main ways:

- the interval is infinite, such as $$[1,\infty)$$,
- the integrand becomes unbounded, such as $$1/x$$ near $$x=0$$.

Improper integrals are not evaluated by simply plugging in infinity or plugging in a vertical asymptote. They must be rewritten as limits.

</div>

For an infinite interval,

$$
\int_1^\infty \frac{1}{x^2}\,dx
=\lim_{b\to\infty}\int_1^b\frac{1}{x^2}\,dx.
$$

For an infinite discontinuity inside the interval, split at the discontinuity. For example,

$$
\int_0^1 \frac{1}{\sqrt{x}}\,dx
=
\lim_{a\to0^+}\int_a^1 \frac{1}{\sqrt{x}}\,dx.
$$

The integral **converges** if the limit is finite and **diverges** otherwise. If an improper integral has two problematic endpoints or an interior discontinuity, every required limit must converge.

Convergence means the limiting accumulated value is finite. Divergence means the accumulated value does not settle to a finite number.

:::warning
Never cross a vertical asymptote inside an integral without splitting the interval. If $$f$$ is undefined at $$c$$ inside $$[a,b]$$, rewrite the integral as two one-sided improper integrals.
:::

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\int_1^\infty \frac{1}{x^2}\,dx.$$

Because the interval is infinite, rewrite the integral as a limit with a finite upper endpoint $$b$$:

$$
\int_1^\infty \frac{1}{x^2}\,dx
=\lim_{b\to\infty}\int_1^b x^{-2}\,dx.
$$

Compute the inner integral using $$\int x^{-2}\,dx=-x^{-1}$$:

$$
\int_1^b x^{-2}\,dx
=\left[-\frac1x\right]_1^b
=-\frac1b+1
=1-\frac1b.
$$

Now take the limit:

$$
\lim_{b\to\infty}\left(1-\frac1b\right)=1.
$$

The limit is finite, so the improper integral converges and its value is $$1$$.

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
