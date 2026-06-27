---
title: "Unit 5: Analytical Applications of Differentiation"
sidebar:
  order: 5
---

---

This unit uses derivatives to analyze the full shape of a function: where it rises or falls, where it bends, where extrema occur, and how to justify conclusions rigorously.

---

## Critical points

A critical point of $$f$$ occurs at $$x=c$$ where:

- $$f'(c) = 0$$, or
- $$f'(c)$$ does not exist,

provided $$c$$ is in the domain of $$f$$.

---

## Increasing and decreasing

- $$f'(x) > 0$$ on an interval implies $$f$$ is increasing there.
- $$f'(x) < 0$$ on an interval implies $$f$$ is decreasing there.

Sign charts are the cleanest way to justify interval behavior.

---

## First Derivative Test

<div class="theorem-box">

**Theorem (First Derivative Test).** If $$f'$$ changes:

- positive to negative at $$c$$: local maximum,
- negative to positive at $$c$$: local minimum,
- no sign change: neither.

</div>

<div class="theorem-box">

**Why the First Derivative Test works.** A positive derivative means the function is increasing, and a negative derivative means the function is decreasing. If $$f'$$ changes from positive to negative, the graph rises into $$c$$ and falls after $$c$$, so $$c$$ is a local maximum. If $$f'$$ changes from negative to positive, the graph falls into $$c$$ and rises after $$c$$, so $$c$$ is a local minimum.

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

The derivative goes positive to negative at $$x=0$$, so $$f$$ has a local maximum there, with $$f(0)=0$$. The derivative goes negative to positive at $$x=2$$, so $$f$$ has a local minimum there, with $$f(2)=8-12=-4$$.

</div>

---

## Concavity and second derivative

- $$f''(x) > 0$$ means $$f$$ is concave up.
- $$f''(x) < 0$$ means $$f$$ is concave down.

An inflection point is a point where concavity changes.

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
\node[align=center, font=\small] at (axis cs:-1.25,-4.1) {$f'>0$\\$f''<0$};
\node[align=center, font=\small] at (axis cs:1,-4.1) {$f'<0$\\concavity changes};
\node[align=center, font=\small] at (axis cs:2.8,2.6) {$f'>0$\\$f''>0$};
\end{axis}
\end{tikzpicture}
```

---

## Second Derivative Test

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

---

## Absolute extrema on a closed interval

To find absolute max/min of $$f$$ on $$[a,b]$$:

:::checklist
1. Find critical points inside $$(a,b)$$.
2. Evaluate $$f$$ at each critical point.
3. Evaluate $$f(a)$$ and $$f(b)$$.
4. Compare all values.
:::

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

---

## Mean Value Theorem

<div class="theorem-box">

**Theorem (Mean Value Theorem).** If $$f$$ is continuous on $$[a,b]$$ and differentiable on $$(a,b)$$, then there exists $$c \in (a,b)$$ such that

$$
f'(c) = \frac{f(b)-f(a)}{b-a}.
$$

</div>

Rolle's Theorem is the special case where $$f(a)=f(b)$$.

<div class="theorem-box">

**Why MVT is true.** Draw the secant line from $$(a,f(a))$$ to $$(b,f(b))$$. Subtract that line from the function to create a new function whose endpoint values are equal. Rolle's Theorem says this new function has a horizontal tangent somewhere inside the interval. At that point, the original function's tangent slope equals the secant slope.

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

## Curve sketching framework

A solid derivative-based sketch includes:

- intercepts,
- asymptotes if relevant,
- intervals increasing/decreasing,
- local extrema,
- intervals concave up/down,
- inflection points,
- end behavior.

---

## Optimization

:::strategy{title="Optimization"}
1. Identify the quantity to optimize.
2. Write it as a function of one variable.
3. Determine the feasible domain.
4. Differentiate and find critical points.
5. Test candidates and interpret.
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

---

## L'Hopital's Rule

<div class="theorem-box">

**Theorem (L'Hopital's Rule).** If a limit produces $$0/0$$ or $$\infty/\infty$$ and the hypotheses are satisfied, then

$$
\lim_{x \to a} \frac{f(x)}{g(x)}
=
\lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

provided the new limit exists in a usable way.

</div>

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\lim_{x\to0}\frac{e^x-1}{x}.$$

Direct substitution gives $$\frac{e^0-1}{0}=\frac{0}{0}$$, an indeterminate form, so L'Hopital's Rule applies. Differentiate the numerator and denominator separately:

$$
\lim_{x\to0}\frac{e^x-1}{x}=\lim_{x\to0}\frac{e^x}{1}.
$$

Now substitution works:

$$
\lim_{x\to0}\frac{e^x}{1}=e^0=1.
$$

So the limit equals $$1$$.

</div>

---

## Linearization and Newton's method

Linearization:

$$
L(x) = f(a)+f'(a)(x-a).
$$

Newton's method for approximating roots:

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}.
$$

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, xmin=0, xmax=2.4, ymin=-1.2, ymax=3,
  xtick={0,1,1.5,2}, ytick={-1,0,1,2},
  grid=both, grid style={gray!18},
  width=8.5cm, height=6cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, very thick, samples=180, domain=0:2.3] {x^2-2};
\addplot[orange!85!black, thick, domain=0.6:2.1] {2*(1.5)*(x-1.5)+(1.5^2-2)};
\addplot[red!75!black, thick, domain=1.05:1.75] {2*(1.4167)*(x-1.4167)+(1.4167^2-2)};
\addplot[only marks, mark=*, mark size=1.7pt, orange!85!black] coordinates {(1.5,0.25) (1.4167,0.0069)};
\addplot[only marks, mark=*, mark size=1.7pt, gray!80] coordinates {(1.4167,0) (1.4142,0)};
\node[orange!85!black, anchor=south west] at (axis cs:1.5,0.25) {tangent at $x_0$};
\node[gray!80!black, anchor=north] at (axis cs:1.4167,0) {$x_1$};
\node[gray!80!black, anchor=north east] at (axis cs:1.4142,0) {root};
\end{axis}
\end{tikzpicture}
```

<div class="theorem-box">

**Example.** Use one step of Newton's method to approximate $$\sqrt{2}$$, starting from $$x_0=1$$.

A root of $$f(x)=x^2-2$$ is $$\sqrt{2}$$. Here $$f'(x)=2x$$, so

$$
f(x_0)=1^2-2=-1,\qquad f'(x_0)=2(1)=2.
$$

Apply the iteration:

$$
x_1=x_0-\frac{f(x_0)}{f'(x_0)}=1-\frac{-1}{2}=1.5.
$$

So the first iteration gives $$x_1=1.5$$, already close to the true value $$\sqrt{2}\approx1.41421$$.

</div>

---

## Function analysis as a sign story

Most of this unit is about reading signs:

- the sign of $$f'$$ tells whether $$f$$ is increasing or decreasing,
- the sign of $$f''$$ tells whether $$f'$$ is increasing or decreasing,
- a sign change in $$f'$$ identifies local extrema,
- a sign change in $$f''$$ identifies changes in concavity.

This is why sign charts are more than bookkeeping. They translate derivative information into graph behavior.

<div class="theorem-box">

**Key idea.** A zero of $$f'$$ is only a candidate for an extremum. The behavior around that point decides what actually happens.

</div>

---

## Critical points and candidates

Critical points occur where $$f'(c)=0$$ or $$f'(c)$$ does not exist, as long as $$c$$ is in the domain of $$f$$.

For local extrema, critical points are candidates. For absolute extrema on a closed interval, endpoints are also candidates.

That distinction matters:

- endpoints can be absolute extrema,
- endpoints are not local extrema under the usual AP definition,
- interior critical points may or may not be extrema.

When justifying an absolute maximum or minimum, compare function values, not derivative values.

---

## Concavity as rate behavior

Concavity describes how the slope changes.

If $$f''(x)>0$$, then $$f'(x)$$ is increasing. The graph of $$f$$ bends upward because its slopes are becoming more positive or less negative.

If $$f''(x)<0$$, then $$f'(x)$$ is decreasing. The graph bends downward because its slopes are becoming less positive or more negative.

An inflection point requires a change in concavity. The equation $$f''(x)=0$$ only gives a possible location.

---

## The Mean Value Theorem in words

The Mean Value Theorem says that under the right smoothness conditions, some instantaneous rate equals the average rate over the interval.

The hypotheses are essential:

:::conditions
- continuous on $$[a,b]$$,
- differentiable on $$(a,b)$$.
:::

If either hypothesis fails, the theorem may not apply, even if the conclusion happens to be true.

Rolle's Theorem is the same idea when the average rate is zero. If a smooth function starts and ends at the same height, then somewhere in between it has a horizontal tangent.

---

## Optimization structure

Optimization problems mix modeling with calculus. The derivative only works after the quantity being optimized is written as a one-variable function.

The domain is part of the model. A critical point outside the feasible domain does not answer the contextual question.

For closed feasible intervals, compare endpoint and critical-point values. For open or unbounded domains, use derivative sign changes or limiting behavior to justify the optimum.

---

## L'Hopital's Rule carefully

L'Hopital's Rule applies to limits that produce

$$
\frac{0}{0}
\quad\text{or}\quad
\frac{\infty}{\infty}.
$$

It does not apply just because a fraction is present. Check the original form first.

For other indeterminate forms, rewrite before using the rule. For instance, products, differences, and powers may need algebra or logarithms before they become a quotient form.

Common rewrites:

| Original form | Possible rewrite |
|---|---|
| $$0\cdot\infty$$ | move one factor to the denominator |
| $$\infty-\infty$$ | combine into one fraction or rationalize |
| $$1^\infty,\ 0^0,\ \infty^0$$ | take logs, find the limit of $$\ln y$$, then exponentiate |

<div class="theorem-box">

**Example.** Evaluate

$$
\lim_{x\to0^+}x\ln x.
$$

Directly, this has the indeterminate form $$0\cdot(-\infty)$$. Rewrite it as a quotient:

$$
x\ln x=\frac{\ln x}{1/x}.
$$

Now the form is $$-\infty/\infty$$, so L'Hopital's Rule applies:

$$
\lim_{x\to0^+}\frac{\ln x}{1/x}
=
\lim_{x\to0^+}\frac{1/x}{-1/x^2}.
$$

Simplify:

$$
\frac{1/x}{-1/x^2}=-x.
$$

Therefore

$$
\lim_{x\to0^+}x\ln x
=
\lim_{x\to0^+}(-x)=0.
$$

</div>

<div class="theorem-box">

**Example.** Evaluate

$$
\lim_{x\to0^+}(1+x)^{1/x}.
$$

Let

$$
y=(1+x)^{1/x}.
$$

Take the natural logarithm:

$$
\ln y=\frac{\ln(1+x)}{x}.
$$

The right side gives $$0/0$$ as $$x\to0^+$$, so use L'Hopital's Rule:

$$
\lim_{x\to0^+}\frac{\ln(1+x)}{x}
=
\lim_{x\to0^+}\frac{1/(1+x)}{1}
=1.
$$

Thus

$$
\lim_{x\to0^+}\ln y=1.
$$

Exponentiate to return to $$y$$:

$$
\lim_{x\to0^+}(1+x)^{1/x}=e^1=e.
$$

</div>

---

## Newton's method intuition

Newton's method uses tangent lines to approximate roots. Starting from $$x_n$$, the tangent line to $$f$$ at $$x_n$$ crosses the $$x$$-axis at

$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}.
$$

The method works best when the starting guess is close to the root and the derivative is not near zero. If the tangent line is nearly horizontal, the next approximation can jump far away.

---

## Common mistakes

:::mistakes
- Calling every critical point an extremum.
- Using the second derivative test when $$f'(c) \ne 0$$.
- Forgetting endpoints in absolute-extrema problems.
- Claiming an inflection point from $$f''=0$$ without checking concavity change.
:::

---

## AP reasoning focus

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

---

## Closed Interval Method

To find absolute extrema of a continuous function on $$[a,b]$$:

:::checklist
1. Verify that the function is continuous on the closed interval.
2. Find all critical numbers in $$(a,b)$$.
3. Evaluate $$f$$ at the endpoints and at each critical number.
4. Compare the output values.
:::

The largest output is the absolute maximum, and the smallest output is the absolute minimum. Endpoints must be included because absolute extrema can occur at endpoints even though local extrema usually focus on interior points.

### Fermat's Theorem

If $$f$$ has a local extremum at an interior point $$c$$ and $$f'(c)$$ exists, then

$$
f'(c)=0.
$$

This theorem explains why critical numbers matter, but it does not say every critical number is an extremum. A sign test or value comparison is still needed.

### Mean Value Theorem conditions

The Mean Value Theorem requires:

:::conditions
1. $$f$$ is continuous on $$[a,b]$$.
2. $$f$$ is differentiable on $$(a,b)$$.
:::

If those conditions hold, then there is some $$c\in(a,b)$$ such that

$$
f'(c)=\frac{f(b)-f(a)}{b-a}.
$$

The theorem says that at some instant, the instantaneous rate matches the average rate over the interval.

### Optimization domains

Optimization problems often fail because the domain is ignored. After writing the target function, determine the allowed interval from the context:

- lengths must usually be positive,
- time may be restricted to a stated interval,
- square roots require nonnegative radicands,
- denominators cannot be zero.

If the allowed domain is closed, use endpoint comparison. If the domain is open or unbounded, use derivative signs and behavior at the ends.
