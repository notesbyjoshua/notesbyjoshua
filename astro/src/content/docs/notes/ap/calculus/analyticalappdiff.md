---
title: "Unit 5: Analytical Applications of Differentiation"
sidebar:
  order: 5
---

## Mean Value Theorem (MVT) and Rolle's Theorem

<div class="theorem-box">

**Theorem (Mean Value Theorem).** If $$f$$ is continuous on $$[a,b]$$ and differentiable on $$(a,b)$$, then there exists $$c \in (a,b)$$ such that

$$
f'(c) = \frac{f(b)-f(a)}{b-a}.
$$

**Rolle's Theorem** is the special case where $$f(a)=f(b)$$.

</div>

The Mean Value Theorem says that under the right smoothness conditions, some instantaneous rate equals the average rate over the interval.

The hypotheses are essential:

:::conditions
- continuous on $$[a,b]$$,
- differentiable on $$(a,b)$$.
:::

If either hypothesis fails, the theorem may not apply, even if the conclusion happens to be true.

Rolle's Theorem is the same idea when the average rate is zero. If a smooth function starts and ends at the same height, then somewhere in between it has a horizontal tangent.

<div class="theorem-box">

**Proof (MVT).** Define the secant-line function through the endpoints:

$$
L(x)=f(a)+\frac{f(b)-f(a)}{b-a}(x-a).
$$

Now define

$$
g(x)=f(x)-L(x).
$$

Because $$f$$ and $$L$$ are continuous on $$[a,b]$$ and differentiable on $$(a,b)$$, so is $$g$$. Also,

$$
g(a)=f(a)-L(a)=0,
$$

and

$$
g(b)=f(b)-L(b)=0.
$$

By Rolle's Theorem, there is some $$c\in(a,b)$$ such that $$g'(c)=0$$. Since

$$
g'(x)=f'(x)-\frac{f(b)-f(a)}{b-a},
$$

we get

$$
0=f'(c)-\frac{f(b)-f(a)}{b-a}.
$$

Therefore,

$$
f'(c)=\frac{f(b)-f(a)}{b-a}.
$$

</div>

<div class="theorem-box">

**Example.** Verify Rolle's Theorem for

$$
f(x)=x^2-4x+3
$$

on $$[1,3]$$, then find the value of $$c$$.

The function is a polynomial, so it is continuous on $$[1,3]$$ and differentiable on $$(1,3)$$. Check the endpoint values:

$$
f(1)=1-4+3=0,
$$

and

$$
f(3)=9-12+3=0.
$$

Since $$f(1)=f(3)$$, Rolle's Theorem applies. Differentiate:

$$
f'(x)=2x-4.
$$

Set $$f'(c)=0$$:

$$
2c-4=0
\quad\Longrightarrow\quad
c=2.
$$

The value $$c=2$$ lies in $$(1,3)$$, so it is the point guaranteed by Rolle's Theorem.

</div>

<div class="theorem-box">

**Example.** For $$f(x)=x^2$$ on $$[1,3]$$, find the value $$c$$ guaranteed by the Mean Value Theorem.

The function is a polynomial, so it is continuous on $$[1,3]$$ and differentiable on $$(1,3)$$, and the theorem applies. The average rate of change is

$$
\frac{f(3)-f(1)}{3-1}=\frac{9-1}{2}=4.
$$

Since $$f'(x)=2x$$, set the instantaneous rate equal to the average rate:

$$
2c=4\quad\Longrightarrow\quad c=2.
$$

The value $$c=2$$ lies in $$(1,3)$$, so it is the value guaranteed by the theorem.

</div>

---

## Extreme Value Theorem (EVT) and critical points

The Extreme Value Theorem (EVT) guarantees that a continuous function on a closed interval has both an absolute maximum and an absolute minimum.

<div class="theorem-box">

**Theorem (EVT).** If $$f$$ is continuous on $$[a,b]$$, then there are numbers $$m$$ and $$M$$ in $$[a,b]$$ such that

$$
f(m)\le f(x)\le f(M)
$$

for every $$x$$ in $$[a,b]$$.

</div>

The proof for EVT is based in non-calculus fields like real analysis so will not be shown here.

The two conditions matter. The interval must be closed, so endpoints are included, and the function must be continuous, so it cannot jump over or miss its highest or lowest value. EVT tells you the extrema exist; it does not tell you where they are. Critical points and endpoints are how you find the candidates.

<div class="theorem-box">

**Definition.** A critical point of $$f$$ occurs at $$x=c$$ when:

- $$f'(c) = 0$$, or
- $$f'(c)$$ does not exist,

provided $$c$$ is in the domain of $$f$$.

</div>

### Absolute extrema on a closed interval

<div class="theorem-box">

**Definition.** The absolute extrema of an interval $$[a,b]$$ is defined as the point $$x=c$$ where

- $$f(c)$$ is at a maximum (for absolute maxima),
- $$f(c)$$ is at a minimum (for absolute minima).

</div>

To find absolute max/min (extrema) of $$f$$ on $$[a,b]$$:

:::checklist
1. Find critical points inside $$(a,b)$$.
2. Evaluate $$f$$ at each critical point.
3. Evaluate $$f(a)$$ and $$f(b)$$.
4. Compare all values to find the extrema.
:::

The largest output is the absolute maximum, and the smallest output is the absolute minimum. Endpoints must be included because absolute extrema can occur at endpoints even though local extrema usually focus on interior points.

<div class="theorem-box">

**Example.** Find the absolute maximum and minimum of $$f(x)=x^3-3x$$ on $$[0,2]$$.

Differentiate to locate interior critical points:

$$
f'(x)=3x^2-3=3(x^2-1),
$$

so $$f'(x)=0$$ at $$x=\pm1$$. Only $$x=1$$ lies inside $$(0,2)$$. Evaluate $$f$$ at this critical point and at both endpoints:

$$
f(0)=0,\qquad f(1)=1-3=-2,\qquad f(2)=8-6=2.
$$

Comparing the candidate values, the absolute maximum is $$2$$ at $$x=2$$, and the absolute minimum is $$-2$$ at $$x=1$$.

</div>

### Local/relative extrema and Fermat's Theorem

If $$f$$ has a local extremum at an interior point $$c$$ and $$f'(c)$$ exists, then

$$
f'(c)=0.
$$

This theorem explains why critical numbers matter, but it does not say every critical number is an extremum. A sign test or value comparison is still needed.

For local extrema, critical points are candidates. For absolute extrema on a closed interval, endpoints are also candidates.

That distinction matters:

- endpoints can be absolute extrema,
- endpoints are not local extrema under the usual AP definition,
- interior critical points may or may not be extrema.

When justifying an absolute maximum or minimum, compare function values, not derivative values.


---

## Graphical meaning of derivatives

When looking at a function, its first derivative can tell you a lot about the direction:

- $$f'(x) > 0$$ on an interval implies $$f$$ is increasing there.
- $$f'(x) < 0$$ on an interval implies $$f$$ is decreasing there.

Sign charts are the cleanest way to justify interval behavior.

When looking at a function, its second derivative can tell you a lot about the shape:

- $$f''(x)>0$$, then $$f'(x)$$ is increasing. The graph of $$f$$ bends upward (concave up) because its slopes are becoming more positive or less negative.
- $$f''(x)<0$$, then $$f'(x)$$ is decreasing. The graph of $$f$$ bends downward (concave down) because its slopes are becoming less positive or more negative.

An inflection point is a point where concavity changes. The equation $$f''(x)=0$$ only gives a possible location; you still need to check that the concavity actually changes.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, xmin=-2.5, xmax=3.5, ymin=-5, ymax=5,
  xtick={-2,-1,0,1,2,3}, ytick={-4,-2,0,2,4},
  grid=both, grid style={gray!18},
  width=9cm, height=6.3cm,
  xlabel=$x$, ylabel=$f(x)$,
]
\addplot[blue, very thick, samples=220, domain=-2.2:3.2] {x^3-3*x^2};
\addplot[only marks, mark=*, mark size=1.8pt, orange!85!black] coordinates {(0,0) (2,-4) (1,-2)};
\node[orange!85!black, anchor=south east] at (axis cs:0,0) {local max};
\node[orange!85!black, anchor=north west] at (axis cs:2,-4) {local min};
\node[orange!85!black, anchor=south west] at (axis cs:1,-2) {inflection};
\node[align=center, font=\small] at (axis cs:-1.45,-4.1) {$f'>0$\\$f''<0$};
\node[align=center, font=\small] at (axis cs:2.8,2.6) {$f'>0$\\$f''>0$};
\end{axis}
\end{tikzpicture}
```

---

## The First Derivative Test

A very useful test to find local extrema is the First Derivative Test. At points where $$f'(x)=0$$ (critical points), we can use this test to see if there is a local minimum, local maximum, or neither.

<div class="theorem-box">

**Theorem (First Derivative Test).** If $$f'$$ changes:

- positive to negative at $$c$$: local maximum,
- negative to positive at $$c$$: local minimum,
- no sign change: neither.

</div>

<div class="theorem-box">

**Proof (First Derivative Test).** Suppose $$f'$$ changes from positive to negative at $$c$$. Then $$f$$ is increasing just to the left of $$c$$ and decreasing just to the right of $$c$$. So values near $$c$$ on the left rise toward $$f(c)$$, and values near $$c$$ on the right fall away from $$f(c)$$. This makes $$f(c)$$ a local maximum.

If $$f'$$ changes from negative to positive, the same reasoning reverses: $$f$$ decreases into $$c$$ and increases after $$c$$, so $$f(c)$$ is a local minimum.

If $$f'$$ does not change sign, then $$f$$ keeps increasing on both sides or keeps decreasing on both sides. In that case, $$c$$ is not a local extremum.

</div>

<div class="theorem-box">

**Example.** Find and classify the critical points of $$f(x)=x^3-3x^2$$.

Differentiate and factor:

$$
f'(x)=3x^2-6x=3x(x-2).
$$

So $$f'(x)=0$$ at $$x=0$$ and $$x=2$$. Test the sign of $$f'$$ on each interval:

$$
f'(-1)=3(-1)(-3)=9>0,\qquad f'(1)=3(1)(-1)=-3<0,\qquad f'(3)=3(3)(1)=9>0.
$$
// goes off the page

The derivative goes positive to negative at $$x=0$$, so $$f$$ has a local maximum there, with $$f(0)=0$$. The derivative goes negative to positive at $$x=2$$, so $$f$$ has a local minimum there, with $$f(2)=8-12=-4$$.

</div>

---

## The Second Derivative Test

The Second Derivative Test is an alternate way of finding minima and maxima.

<div class="theorem-box">

**Theorem (Second Derivative Test).** If $$f'(c)=0$$ and:

- $$f''(c)>0$$, then $$f$$ has a local minimum at $$c$$,
- $$f''(c)<0$$, then $$f$$ has a local maximum at $$c$$,
- $$f''(c)=0$$, the test is inconclusive.

</div>

<div class="theorem-box">

**Example.** Use the second derivative test to classify the critical points of $$f(x)=x^3-12x$$.

First find the critical points:

$$
f'(x)=3x^2-12=3(x^2-4)=3(x-2)(x+2),
$$

so $$f'(x)=0$$ at $$x=-2$$ and $$x=2$$. The second derivative is

$$
f''(x)=6x.
$$

Evaluate at each critical point:

$$
f''(2)=12>0,\qquad f''(-2)=-12<0.
$$

Since $$f''(2)>0$$, there is a local minimum at $$x=2$$, with $$f(2)=8-24=-16$$. Since $$f''(-2)<0$$, there is a local maximum at $$x=-2$$, with $$f(-2)=-8+24=16$$.

</div>

### Choosing between the tests

The First Derivative Test is usually more reliable because it checks what the function is actually doing on both sides of the critical point. It works for critical points where $$f'(c)=0$$ and for critical points where $$f'(c)$$ does not exist, as long as you can test signs around $$c$$.

The Second Derivative Test is faster when it applies, but it has two limits:

- it only applies when $$f'(c)=0$$,
- if $$f''(c)=0$$, the test gives no conclusion.

:::tip{title="Derivative test choice"}
Use the First Derivative Test when a sign chart is already natural or when $$f'$$ is undefined at the critical point. Use the Second Derivative Test when $$f''(c)$$ is easy to compute and clearly positive or negative.
:::

---

## Curve sketching framework

A solid derivative-based sketch includes:

- intercepts,
- asymptotes if relevant,
- intervals increasing/decreasing,
- local extrema,
- intervals concave up/down,
- inflection points,
- end behavior.

You do not need a perfect drawing at first. The goal is to collect enough structure that the graph has the correct shape. Start with the domain and discontinuities, then use derivatives to decide how the graph moves.

:::checklist
1. Find the domain and any vertical asymptotes or holes.
2. Find intercepts if they are easy.
3. Use $$f'$$ to make increasing/decreasing intervals.
4. Use $$f''$$ to make concavity intervals.
5. Mark local extrema and inflection points.
6. Add end behavior or horizontal/slant asymptotes.
:::

:::warning
A critical point is only a candidate. Do not label it a maximum or minimum until a derivative sign change, second derivative test, or value comparison supports it.
:::

---

## Optimization

Optimization problems mix modeling with calculus. The derivative only works after the quantity being optimized is written as a one-variable function. The main goal of most optimization problems is to find a local/absolute minima (e.g. minimizing time) or a local/absolute maxima (e.g. maximizing profit).

The domain is part of the model. A critical point outside the feasible domain does not answer the contextual question.

For closed feasible intervals, compare endpoint and critical-point values. For open or unbounded domains, use derivative sign changes or limiting behavior to justify the optimum.

The hardest part of optimization is usually building the one-variable function. A good setup keeps three pieces separate:

- the target quantity, which is what you want to maximize or minimize,
- the constraint equation, which connects the variables,
- the feasible domain, which says what values make sense in the context.

If the target quantity has two variables, use the constraint to solve for one variable and substitute. After that, the calculus part is standard: differentiate, find critical points, and test candidates.

Optimization problems often fail because the domain is ignored. After writing the target function, determine the allowed interval from the context:

- lengths must usually be positive,
- time may be restricted to a stated interval,
- square roots require nonnegative radicands,
- denominators cannot be zero.

If the allowed domain is closed, use endpoint comparison. If the domain is open or unbounded, use derivative signs and behavior at the ends.

:::strategy{title="Optimization"}
1. Identify the quantity to optimize.
2. Write it as a function of one variable.
3. Determine the feasible domain.
4. Differentiate and find critical points.
5. Test candidates and interpret.
:::

:::mistakes
- Optimizing the constraint instead of the target quantity.
- Forgetting endpoints on a closed interval.
- Ignoring domain restrictions like positive lengths or nonzero denominators.
- Reporting only the critical value of the variable instead of answering the original question.
:::

<div class="theorem-box">

**Example.** A rectangular pen is built with $$40$$ meters of fencing. What dimensions maximize the enclosed area?

Let the rectangle have width $$x$$ and height $$y$$. The perimeter constraint is

$$
2x+2y=40\quad\Longrightarrow\quad y=20-x.
$$

The area, written as a one-variable function, is

$$
A(x)=x(20-x)=20x-x^2,\qquad 0<x<20.
$$

Differentiate and find the critical point:

$$
A'(x)=20-2x=0\quad\Longrightarrow\quad x=10.
$$

Since $$A''(x)=-2<0$$, this critical point is a maximum. Then $$y=20-10=10$$, so the pen is a $$10\times10$$ square with maximum area

$$
A(10)=10\cdot10=100\ \text{square meters}.
$$

</div>

<div class="theorem-box">

**Example.** A rectangular box with a square base and no top must have volume $$500$$ cubic centimeters. Find the dimensions that minimize the surface area.

Let $$x$$ be the side length of the square base and $$h$$ be the height. The volume constraint is

$$
x^2h=500,
$$

so

$$
h=\frac{500}{x^2}.
$$

The surface area includes the square base and four side rectangles:

$$
S=x^2+4xh.
$$

Substitute the constraint:

$$
S(x)=x^2+4x\left(\frac{500}{x^2}\right)=x^2+\frac{2000}{x},
\qquad x>0.
$$

Differentiate:

$$
S'(x)=2x-\frac{2000}{x^2}.
$$

Set the derivative equal to zero:

$$
2x-\frac{2000}{x^2}=0.
$$

Multiply by $$x^2$$:

$$
2x^3-2000=0
\quad\Longrightarrow\quad
x^3=1000
\quad\Longrightarrow\quad
x=10.
$$

Then

$$
h=\frac{500}{10^2}=5.
$$

Because $$S(x)\to\infty$$ as $$x\to0^+$$ and as $$x\to\infty$$, the critical point gives the absolute minimum. The box should have square base side length $$10$$ cm and height $$5$$ cm.

</div>

### Optimization strategy details



---

## Linearization and Newton's method

As a reminder, linearization is the process of estimating the value of a function using its derivative:

$$
L(x) = f(a)+f'(a)(x-a).
$$

Using linearization, we can approximate the roots of a function using Newton's method (also known as the Newton-Raphson method) for approximating roots. Newton's method uses tangent lines to approximate roots. Starting from $$x_n$$, the tangent line to $$f$$ at $$x_n$$ crosses the $$x$$-axis at

$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}.
$$

$$x_n$$ represents the $$n$$th iteration, where you keep using your previous attempts to estimate the root. The first number always starts out as a guess, as after many iterations, the value will get closer and closer to the real root. However, the method works best when the starting guess is close to the root and the derivative is not near zero. If the tangent line is nearly horizontal, the next approximation can jump far away.

<div class="theorem-box">

**Theorem (Newton's Method).** To approximate a root of $$f(x)=0$$, start with a guess $$x_n$$ and repeatedly use

$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}.
$$

</div>

<div class="theorem-box">

**Proof (Newton's Method).** The linearization of $$f$$ at $$x_n$$ is

$$
L(x)=f(x_n)+f'(x_n)(x-x_n).
$$

Newton's method uses the root of this tangent line as the next guess, so set $$L(x)=0$$:

$$
0=f(x_n)+f'(x_n)(x-x_n).
$$

Solve for $$x$$:

$$
f'(x_n)(x-x_n)=-f(x_n),
$$

$$
x-x_n=-\frac{f(x_n)}{f'(x_n)}.
$$

Therefore,

$$
x=x_n-\frac{f(x_n)}{f'(x_n)}.
$$

This new $$x$$-value is called $$x_{n+1}$$.

</div>

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, xmin=0.5, xmax=2.7, ymin=-1.5, ymax=5,
  xtick={1,1.4,2.2}, ytick={-1,0,2,4},
  grid=both, grid style={gray!18},
  width=8.8cm, height=6cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, thick, samples=180, domain=0.55:2.55] {x^2-2};
\addplot[orange!85!black, thick, domain=1.0:2.45] {4.4*(x-2.2)+2.84};
\addplot[red!75!black, thick, domain=1.15:2.0] {2.76*(x-1.4773)+0.1822};
\addplot[gray!70, dashed] coordinates {(2.2,0) (2.2,2.84)};
\addplot[gray!70, dashed] coordinates {(1.5545,0) (1.5545,0.4165)};
\addplot[gray!70, dashed] coordinates {(1.4113,0) (1.4113,-0.0082)};
\addplot[only marks, mark=*, mark size=1.7pt, orange!85!black] coordinates {(2.2,2.84) (1.5545,0) (1.4773,0.1822) (1.4113,0)};
\node[orange!85!black, anchor=south west] at (axis cs:2.15,3.05) {$x_0$};
\node[gray!80!black, anchor=north] at (axis cs:1.5545,0) {$x_1$};
\node[red!75!black, anchor=south east] at (axis cs:1.4773,0.35) {$x_1$ tangent};
\node[gray!80!black, anchor=north east] at (axis cs:1.4113,0) {$x_2$};
\end{axis}
\end{tikzpicture}
```
//only do two iterations (x_1 and x_2 (to be consistent with the nth iteration, where the first one is the one where you estimate) and the actual tangent line), and make sure the x_2 label is on the second dot not on the intersection between x_1 tangency line and the x-axis

<div class="theorem-box">

**Example.** Use Newton's method to approximate $$\sqrt2$$ by solving $$x^2-2=0$$, starting with $$x_0=1.5$$.

Let

$$
f(x)=x^2-2,
\qquad
f'(x)=2x.
$$

The Newton update is

$$
x_{n+1}=x_n-\frac{x_n^2-2}{2x_n}.
$$

Starting with $$x_0=1.5$$:

$$
x_1=1.5-\frac{1.5^2-2}{2(1.5)}
=1.5-\frac{0.25}{3}
\approx1.4167.
$$

Apply the formula again:

$$
x_2=1.4167-\frac{1.4167^2-2}{2(1.4167)}
\approx1.4142.
$$

So $$\sqrt2\approx1.4142$$.

</div>

<div class="theorem-box">

**Example.** Use Newton's method to approximate a solution of $$\cos x=x$$, starting with $$x_0=1$$.

Write the equation as a root problem:

$$
f(x)=\cos x-x.
$$

Then

$$
f'(x)=-\sin x-1.
$$

Newton's method gives

$$
x_{n+1}=x_n-\frac{\cos x_n-x_n}{-\sin x_n-1}.
$$

Starting with $$x_0=1$$:

$$
x_1=1-\frac{\cos(1)-1}{-\sin(1)-1}\approx0.7504.
$$

One more iteration gives

$$
x_2=0.7504-\frac{\cos(0.7504)-0.7504}{-\sin(0.7504)-1}\approx0.7391.
$$

So the solution is approximately $$x\approx0.7391$$.

</div>


---

## Tips for the exam

Analytical applications ask you to turn derivative information into a story about the original function. The safest approach is to separate **where candidates occur** from **what those candidates mean**.

:::strategy{title="Function analysis workflow"}
1. Find the domain first, because endpoints and discontinuities matter.
2. Find critical numbers from $$f'(x)=0$$ and places where $$f'$$ is undefined.
3. Build a sign chart for $$f'$$ to determine increasing/decreasing behavior.
4. Build a sign chart for $$f''$$ to determine concavity.
5. Use endpoint values and critical values for absolute extrema on closed intervals.
6. Use derivative sign changes, not just derivative zeros, to justify local extrema.
:::

:::exam{topic="Justification language"}
Write conclusions in terms of signs and changes: "$$f$$ has a local maximum at $$x=c$$ because $$f'$$ changes from positive to negative there." This is stronger than saying "$$f'(c)=0$$."
:::

For optimization, the derivative work is only the middle of the problem. A complete solution should also define variables, state the constraint, state the domain, and answer in the original units.
