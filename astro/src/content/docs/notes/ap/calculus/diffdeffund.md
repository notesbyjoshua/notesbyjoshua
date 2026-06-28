---
title: "Unit 2: Differentiation: Definition and Fundamental Properties"
sidebar:
  order: 2
---

## Definition of the derivative

<div class="theorem-box">

**Definition.** The derivative of $$f$$ at $$x$$ is defined as

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h}
$$

Equivalently,

$$
f'(a) = \lim_{x \to a} \frac{f(x)-f(a)}{x-a}.
$$

for the derivative at $$x=a$$.

</div>

There are many interpretations of the derivative:

- instantaneous rate of change,
- slope of the tangent line,
- limit of secant slopes,
- local sensitivity of output to input.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, xmin=-0.4, xmax=3.6, ymin=-0.3, ymax=5.5,
  xtick={0,1,2,3}, ytick={0,1,2,3,4,5},
  grid=both, grid style={gray!18},
  width=8.8cm, height=6.2cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, very thick, samples=160, domain=0:3.3] {0.5*x^2+0.4};
\addplot[gray!70, dashed, domain=0.4:3.1] {1.5*x-0.6};
\addplot[orange!85!black, thick, domain=0.6:3.05] {1.15*x-0.1};
\addplot[red!75!black, thick, domain=0.7:2.9] {0.85*x+0.2};
\addplot[only marks, mark=*, mark size=1.8pt, blue] coordinates {(1.5,1.525)};
\addplot[only marks, mark=*, mark size=1.5pt, gray!70] coordinates {(2.8,4.32)};
\addplot[only marks, mark=*, mark size=1.5pt, orange!85!black] coordinates {(2.3,3.045)};
\addplot[only marks, mark=*, mark size=1.5pt, red!75!black] coordinates {(1.9,2.205)};
\node[gray!70!black, anchor=west] at (axis cs:2.7,3.3) {secants};
\node[blue, anchor=east] at (axis cs:1.45,1.55) {$x=a$};
\node[red!75!black, anchor=west] at (axis cs:1.9,1.85) {approach tangent};
\end{axis}
\end{tikzpicture}
```
// fix image: too many lines, secant line not even connecting the two dots, etc.

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

So the derivative of $$x^2$$ is $$2x$$.

</div>

### Notation for derivatives

There exists many different notations for derivatives, but the most common ones are:

$$
f'(x),\qquad y',\qquad \frac{dy}{dx},\qquad \frac{d}{dx}[f(x)].
$$

They all refer to rate of change, but they emphasize different things. The notation $$f'(a)$$ is a number. The notation $$f'(x)$$ is a function (as long as $$x$$ is the variable). The notation $$dy/dx$$ emphasizes that the derivative compares a tiny change in $$y$$ to a tiny change in $$x$$.

When a problem asks for "the derivative at $$x=a$$," give a value. When it asks for "the derivative of $$f$$," give a formula.

If $$f(x)$$ has units of output and $$x$$ has units of input, then $$f'(x)$$

has units

$$
\frac{\text{output units}}{\text{input units}}.
$$

For instance, if position is measured in feet and time in seconds, velocity is measured in feet per second. The sign tells direction; the magnitude tells how fast the position is changing.

The Leibniz Notation ($$\frac{dy}{dx}$$) is especially useful for problems that require context. For example, if $$s(t)$$ is position, then $$s'(t)$$ and $$ds/dt$$ both describe velocity. The notation $$ds/dt$$ makes units especially clear because it literally compares a change in position to a change in time.

For a quantity $$Q$$ depending on another quantity $$x$$:

$$
\frac{dQ}{dx}
$$

has units of $$Q$$-units per $$x$$-unit. This unit check is one of the fastest ways to catch an interpretation error.

### Why the derivative is a limit

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

### Differentiability from graphs

<div class="theorem-box">

**Definition.** A function is said to be "differentiable" on an interval $$[a,b]$$ if it's derivative exists in *all* of its domain.

</div>

The domain of $$f'$$ can be smaller than the domain of $$f$$. Even if $$f(a)$$ exists, the derivative at $$a$$ may fail to exist because the nearby slopes do not settle into one finite value or diverge to infinity.

When finding a derivative formula, always ask where that formula is valid. For example,

$$
f(x)=\sqrt{x}
$$

has domain $$[0,\infty)$$, but

$$
f'(x)=\frac{1}{2\sqrt{x}}
$$

is valid only for $$x>0$$. The original function exists at $$x=0$$, but the tangent there is vertical, so the ordinary derivative is not finite.

From a graph, differentiability fails at places where the tangent slope is not a single finite number.

Common visual signs:

- a corner has two different one-sided slopes,
- a cusp has slopes that become infinitely steep in opposite directions,
- a vertical tangent has an infinite slope,
- a discontinuity cannot be differentiable.

A smooth-looking graph is not a proof by itself, but it gives a strong clue about where derivative values may or may not exist.

### One-sided derivatives

At endpoints or corners, one-sided derivatives can be useful:

$$
f'_+(a)=\lim_{h\to0^+}\frac{f(a+h)-f(a)}{h},
\qquad
f'_-(a)=\lim_{h\to0^-}\frac{f(a+h)-f(a)}{h}.
$$

The derivative $$f'(a)$$ exists only when the left and right derivatives agree, just like limits.

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

The theorems can all be proven by just plugging in the parent function into the derivative definition, so I will only show one example proof below.

<div class="theorem-box">

**Proof (Product Rule).** Let $$H(x)=f(x) \cdot g(x)$$

Start from the derivative definition:

$$
\frac{d}{dx}H(x)
=
\lim_{h\to0}\frac{H(x+h)-H(x)}{h}.
$$

Resubstituting:

$$
\frac{d}{dx}H(x)
=
\lim_{h\to0}\frac{f(x+h)g(x+h)-f(x)g(x)}{h}.
$$

Now, do an algebra trick: We can add and then subtract $$f(x+h)g(x)$$ to our expression to factor:

$$
\frac{d}{dx}H(x)
=
\lim_{h\to0}\frac{f(x+h)g(x+h)-f(x+h)g(x)+f(x+h)g(x)-f(x)g(x)}{h}
=
\lim_{h\to0}\frac{f(x+h)g(x+h)-f(x+h)g(x)}{h}+\lim_{h\to0}\frac{f(x+h)g(x)-f(x)g(x)}{h}
$$

// goes off the page please fix

and then simplifying we get:

$$
\frac{d}{dx}H(x)
=
\lim_{h\to0}\frac{f(x+h)(g(x+h)-g(x))}{h}+\lim_{h\to0}\frac{(f(x+h)-f(x))g(x)}{h}
$$

Now split the factors that do not belong to the difference quotients:

$$
\frac{d}{dx}H(x)
=
\lim_{h\to0}f(x+h) \cdot \lim_{h\to0}\frac{(g(x+h)-g(x))}{h}+\lim_{h\to0}g(x) \cdot \lim_{h\to0}\frac{(f(x+h)-f(x))}{h}
$$

// goes off the page please fix

since the limit of a sum is the sum of the limits (to see this, use the sum rule for limits), and constants with respect to $$h$$ can be factored out.

Because $$f$$ is differentiable at $$x$$, it is also continuous at $$x$$. Therefore

$$
\lim_{h\to0}f(x+h)=f(x).
$$

Also,

$$
\lim_{h\to0}g(x)=g(x),
$$

because $$g(x)$$ does not depend on $$h$$. The two remaining limits are the derivative definitions for $$g'(x)$$ and $$f'(x)$$:

$$
\lim_{h\to0}\frac{g(x+h)-g(x)}{h}=g'(x),
\qquad
\lim_{h\to0}\frac{f(x+h)-f(x)}{h}=f'(x).
$$

Substitute these limits back in:

$$
\frac{d}{dx}H(x)
=f(x)g'(x)+g(x)f'(x).
$$

Since multiplication is commutative, this is usually written as

$$
\frac{d}{dx}[f(x)g(x)]=f'(x)g(x)+f(x)g'(x).
$$

Note that if you have more than two functions, the procedure is the same, giving you a result where you sum up the multiplicative terms between one derivative and the other functions for each derivative.

</div>

<div class="theorem-box">

**Example.** Differentiate $$y = x^3 \sin x$$.

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

**Example.** Differentiate $$\displaystyle y = \frac{x^2}{x+1}$$.

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

### Derivatives of trig functions

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
\frac{d}{dx}(\sec x)=\sec x\tan x,
$$

$$
\frac{d}{dx}(\csc x)=-\csc x\cot x,
$$

$$
\frac{d}{dx}(\cot x)=-\csc^2 x.
$$

All of the trig derivatives can be proved using the derivative definition and the quotient rule.

// please prove one of these as an example (maybe tan x?)

### Derivatives of exponential and logarithmic functions

$$
\frac{d}{dx}(e^x) = e^x
$$

$$
\frac{d}{dx}(a^x) = a^x \ln a
$$

$$
\frac{d}{dx}(\ln x) = \frac{1}{x}
$$

$$
\frac{d}{dx}(\log_a x)=\frac{1}{x\ln a},
\qquad a>0,\ a\ne 1.
$$

// try to introduce this section more, including how we get e. maybe look at this: https://tutorial.math.lamar.edu/Classes/CalcI/DiffExpLogFcns.aspx

### Derivatives of hyperbolic functions

As a reminder, we define

$$
\sinh x=\frac{e^x-e^{-x}}{2},
\qquad
\cosh x=\frac{e^x+e^{-x}}{2}.
$$

The other hyperbolic functions are defined similarly (e.g. $$\tanh x = \frac{\sinh x}{\cosh x}$$). Their main derivatives are:

$$
\frac{d}{dx}(\sinh x)=\cosh x,
\qquad
\frac{d}{dx}(\cosh x)=\sinh x,
$$

$$
\frac{d}{dx}(\tanh x)=\operatorname{sech}^2 x.
$$

// add all 6 hyperbolic functions' derivatives

Since all of the hyperbolic functions can be defined in terms of exponentials, the derivative formula is just repeated derivatives of exponentials. The proofs are left to the reader as an exercise.

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

<div class="theorem-box">

**Example.** Differentiate

$$
y=5\log_2 x \cdot 3\sec x+4\sinh x.
$$

Differentiate term by term:

$$
\frac{d}{dx}(5\log_2 x)=\frac{5}{x\ln 2},
$$

$$
\frac{d}{dx}(-3\sec x)=-3\sec x\tan x,
$$

and

$$
\frac{d}{dx}(4\sinh x)=4\cosh x.
$$

Therefore

$$
y'=\frac{5}{x\ln 2}-3\sec x\tan x+4\cosh x.
$$

// please edit the solution based on the updated question

</div>

---

## Choosing derivative procedures

Most derivative problems are not about one isolated rule. They are about choosing the order in which rules apply.

:::strategy{title="Derivative procedure"}
1. Simplify obvious algebra first, especially constants and powers.
2. Identify the outermost operation: sum, product, quotient, power, trig, exponential, or logarithm.
3. Apply the rule for the outermost operation.
4. Use the chain rule whenever the input is more than just $$x$$.
5. Check whether the final expression can be simplified without hiding the structure.
:::

<div class="theorem-box">

**Example.** Differentiate

$$
y=\frac{x^2e^x}{\sqrt{x+1}}.
$$

This can be treated as a quotient, but rewriting the radical as a power makes the product structure easier:

$$
y=x^2e^x(x+1)^{-1/2}.
$$

This is a product of three factors. Use the product rule in expanded form:

$$
y'=(2x)e^x(x+1)^{-1/2}
+x^2(e^x)(x+1)^{-1/2}
+x^2e^x\left(-\frac12\right)(x+1)^{-3/2}.
$$

// explain how you got expanded form because the notes page does not teach that. either that or change the solution

Factor the common term $$xe^x(x+1)^{-3/2}$$:

$$
y'=xe^x(x+1)^{-3/2}
\left[2(x+1)+x(x+1)-\frac{x}{2}\right].
$$

This form shows the structure clearly. If desired, it can be combined into one rational expression, but the important part is choosing the rule order correctly.

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

**Example.** Find the equation of the tangent line to $$f(x)=x^3+e^x$$ at $$x=2$$.

First find the point on the curve:

$$
f(2)=2^3+e^2=8+e^2,
$$

so the point of tangency is $$(2,8+e^2)$$. Next find the slope from the derivative:

$$
f'(x)=3x^2+e^x,\qquad f'(2)=3(2)^2+e^2=12+e^2.
$$

Use point-slope form with slope $$4$$ at $$(2,8+e^2)$$:

$$
y-8+e^2 = (12+e^2)(x-2).
$$

Simplifying gives the tangent line

$$
y = (12+e^2)x-(16+3e^2).
$$

</div>

---

## Higher derivatives

The second derivative $$f''(x)$$ measures the rate of change of the first derivative.

The second derivative has many useful interpretations:

- concavity (whether a graph is opening up or down) in pure math
- acceleration when $$f$$ is position or angular frequency when $$f$$ is potential in physics

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

// add a section on alternate notation for higher order derivatives

---

## Motion along a line

If $$s(t)$$ is position, $$v(t)$$ is velocity, and $$a(t)$$ is acceleration, then:

$$
v(t) = s'(t)
$$

$$
a(t) = v'(t) = s''(t)
$$

Velocity includes sign and direction; speed is defined as $$\lvert v(t) \rvert$$.

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

// add a tips for the exam section like the other notes pages
