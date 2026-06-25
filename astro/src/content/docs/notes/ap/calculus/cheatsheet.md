---
title: "AP Calculus AB/BC Cheat Sheet"
sidebar:
  order: 0
---

This page is a high-yield AP Calculus reference sheet. It collects the most important definitions, theorems, derivative and integral tables, applications, and BC series/parametric/polar tools from Units 1-10 in one place. It is best used as a last-minute review tool or a quick lookup page while studying a full unit. Units 9 and 10 are BC-only and are labeled as such. On the exam you also get an official reference sheet, but it is short: see the [AP Calculus exam information](https://apcentral.collegeboard.org/courses/ap-calculus-ab/exam) for what is provided, and memorize the rest below.

---

## Unit 1: Limits and Continuity

### Limit basics

- $$\lim_{x \to a} f(x) = L$$ means $$f(x)$$ can be forced arbitrarily close to $$L$$ for $$x$$ near $$a$$ (with $$x \ne a$$).
- Two-sided limit exists exactly when the one-sided limits agree:

$$
\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L.
$$

- For polynomials and rational functions, direct substitution works when the denominator is nonzero.

### Limit laws

If $$\lim_{x \to a} f(x) = L$$ and $$\lim_{x \to a} g(x) = M$$:

$$
\lim (f \pm g) = L \pm M, \qquad \lim (fg) = LM, \qquad \lim \frac{f}{g} = \frac{L}{M}\ (M \ne 0), \qquad \lim f^n = L^n.
$$

### Indeterminate forms (must simplify first)

$$
\frac{0}{0}, \quad \frac{\infty}{\infty}, \quad 0 \cdot \infty, \quad \infty - \infty, \quad 1^\infty, \quad 0^0, \quad \infty^0.
$$

Techniques: factor and cancel, multiply by a conjugate, combine fractions, use a known trig limit, or divide by the dominant power of $$x$$.

### Key trig limits (radians only)

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1, \qquad \lim_{x \to 0} \frac{\tan x}{x} = 1, \qquad \lim_{x \to 0} \frac{1-\cos x}{x} = 0.
$$

### Squeeze Theorem

If $$g(x) \le f(x) \le h(x)$$ near $$a$$ and $$\lim_{x \to a} g = \lim_{x \to a} h = L$$, then $$\lim_{x \to a} f = L$$.

### Limits at infinity (rational functions)

- degree top $$<$$ degree bottom: limit is $$0$$ (horizontal asymptote $$y=0$$),
- degrees equal: limit is the ratio of leading coefficients,
- degree top $$>$$ degree bottom: no horizontal asymptote (possible slant asymptote).

### Continuity at $$x=a$$

All three must hold: $$f(a)$$ exists, $$\lim_{x \to a} f(x)$$ exists, and $$\lim_{x \to a} f(x) = f(a)$$.

Discontinuity types: removable (hole), jump, infinite (vertical asymptote), oscillatory.

### Intermediate Value Theorem

If $$f$$ is continuous on $$[a,b]$$ and $$N$$ is between $$f(a)$$ and $$f(b)$$, then $$f(c) = N$$ for some $$c \in (a,b)$$.

---

## Unit 2: Differentiation: Definition and Fundamental Properties

### Definition of the derivative

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h}, \qquad f'(a) = \lim_{x \to a} \frac{f(x)-f(a)}{x-a}.
$$

Interpretations: instantaneous rate of change, slope of the tangent line, limit of secant slopes.

- Differentiable at $$a$$ implies continuous at $$a$$; the converse is false (corner, cusp, vertical tangent, discontinuity).

### Basic derivative rules

$$
\frac{d}{dx}(c) = 0, \qquad \frac{d}{dx}(x^n) = nx^{n-1}, \qquad \frac{d}{dx}[cf] = cf'.
$$

$$
\frac{d}{dx}[f \pm g] = f' \pm g', \qquad \frac{d}{dx}[fg] = f'g + fg'.
$$

$$
\frac{d}{dx}\left[\frac{f}{g}\right] = \frac{f'g - fg'}{g^2}, \qquad g \ne 0.
$$

### Common derivatives

$$
\frac{d}{dx}(\sin x) = \cos x, \qquad \frac{d}{dx}(\cos x) = -\sin x, \qquad \frac{d}{dx}(\tan x) = \sec^2 x.
$$

$$
\frac{d}{dx}(\sec x) = \sec x \tan x, \qquad \frac{d}{dx}(\csc x) = -\csc x \cot x, \qquad \frac{d}{dx}(\cot x) = -\csc^2 x.
$$

$$
\frac{d}{dx}(e^x) = e^x, \qquad \frac{d}{dx}(a^x) = a^x \ln a, \qquad \frac{d}{dx}(\ln x) = \frac{1}{x}.
$$

### Tangent and normal lines

At $$x=a$$, tangent slope is $$f'(a)$$, tangent line is $$y - f(a) = f'(a)(x-a)$$, and the normal slope is $$-1/f'(a)$$ when $$f'(a) \ne 0$$.

### Higher derivatives and motion

$$f''(x)$$ measures concavity (or acceleration). For position $$s(t)$$: velocity $$v(t) = s'(t)$$, acceleration $$a(t) = v'(t) = s''(t)$$, speed is $$\lvert v(t) \rvert$$.

### Linearization

Near $$x=a$$: $$f(x) \approx f(a) + f'(a)(x-a)$$.

---

## Unit 3: Differentiation: Composite, Implicit, and Inverse Differentiation

### Chain rule

If $$y = f(g(x))$$, then $$\dfrac{dy}{dx} = f'(g(x))g'(x)$$, equivalently $$\dfrac{dy}{dx} = \dfrac{dy}{du}\cdot\dfrac{du}{dx}$$.

### Implicit differentiation

Differentiate both sides with respect to $$x$$, multiplying by $$\dfrac{dy}{dx}$$ each time a derivative hits a $$y$$ term, then solve for $$\dfrac{dy}{dx}$$.

### Inverse function derivative

If $$b = f(a)$$ and $$f'(a) \ne 0$$:

$$
(f^{-1})'(b) = \frac{1}{f'(a)}, \qquad (f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))}.
$$

### Inverse trig derivatives

$$
\frac{d}{dx}(\arcsin x) = \frac{1}{\sqrt{1-x^2}}, \qquad \frac{d}{dx}(\arccos x) = -\frac{1}{\sqrt{1-x^2}}, \qquad \frac{d}{dx}(\arctan x) = \frac{1}{1+x^2}.
$$

### Exponential and logarithmic chain forms

$$
\frac{d}{dx} e^{u} = e^{u}u', \qquad \frac{d}{dx} \ln\lvert u \rvert = \frac{u'}{u}.
$$

Logarithmic differentiation: take $$\ln$$ of both sides first when the variable is in both base and exponent (e.g. $$y = x^x$$).

### Related rates strategy

1. Draw and label a diagram.
2. Write an equation relating the variables.
3. Differentiate implicitly with respect to time.
4. Substitute the requested instant (not before).
5. Keep units consistent.

---

## Unit 4: Contextual Applications of Differentiation

### Rates in context

$$Q'(t)$$ is the instantaneous rate of change of $$Q$$, with units of $$Q$$ per unit of $$t$$. Always interpret both sign and units.

### Motion

$$
v(t) = s'(t), \qquad a(t) = v'(t) = s''(t), \qquad \text{speed} = \lvert v(t) \rvert.
$$

Speed increases when $$v$$ and $$a$$ have the same sign; speed decreases when they have opposite signs.

### Rate in / rate out

$$
V'(t) = (\text{rate in}) - (\text{rate out}).
$$

### Linearization and differentials

$$
L(x) = f(a) + f'(a)(x-a), \qquad dy = f'(x)\,dx, \qquad \Delta f \approx f'(a)\,\Delta x.
$$

### Marginal analysis

Profit $$P(x) = R(x) - C(x)$$; marginal cost/revenue/profit are $$C'(x)$$, $$R'(x)$$, $$P'(x)$$.

### Interpreting derivative statements

A complete interpretation names the quantity, the input value, the direction (sign), and the units, e.g. "at $$t=5$$ the population is increasing at $$40$$ fish per year."

---

## Unit 5: Analytical Applications of Differentiation

### Critical points

$$x=c$$ is critical if $$f'(c) = 0$$ or $$f'(c)$$ does not exist, with $$c$$ in the domain.

### Increasing / decreasing and the First Derivative Test

- $$f' > 0$$: $$f$$ increasing; $$f' < 0$$: $$f$$ decreasing.
- $$f'$$ goes $$+$$ to $$-$$ at $$c$$: local max; $$-$$ to $$+$$: local min; no sign change: neither.

### Concavity and Second Derivative Test

- $$f'' > 0$$: concave up; $$f'' < 0$$: concave down; inflection point where concavity changes.
- If $$f'(c) = 0$$: $$f''(c) > 0$$ gives a local min, $$f''(c) < 0$$ gives a local max, $$f''(c) = 0$$ is inconclusive.

### Absolute extrema on $$[a,b]$$

Evaluate $$f$$ at all interior critical points and at both endpoints $$a$$ and $$b$$, then compare values.

### Mean Value Theorem

If $$f$$ is continuous on $$[a,b]$$ and differentiable on $$(a,b)$$, some $$c \in (a,b)$$ satisfies

$$
f'(c) = \frac{f(b)-f(a)}{b-a}.
$$

Rolle's Theorem is the case $$f(a) = f(b)$$.

### L'Hopital's Rule

For $$\dfrac{0}{0}$$ or $$\dfrac{\infty}{\infty}$$ only:

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}.
$$

### Optimization process

Identify the quantity, write it as a one-variable function, set the feasible domain, find critical points, then test candidates.

### Newton's method

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}.
$$

---

## Unit 6: Integration and Accumulation of Change

### Basic antiderivatives

$$
\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \ (n \ne -1), \qquad \int \frac{1}{x}\,dx = \ln\lvert x \rvert + C, \qquad \int e^x\,dx = e^x + C.
$$

$$
\int \cos x\,dx = \sin x + C, \qquad \int \sin x\,dx = -\cos x + C, \qquad \int \sec^2 x\,dx = \tan x + C.
$$

$$
\int \frac{1}{1+x^2}\,dx = \arctan x + C, \qquad \int \frac{1}{\sqrt{1-x^2}}\,dx = \arcsin x + C.
$$

### Riemann sums

$$
\sum_{i=1}^n f(x_i^*)\,\Delta x, \qquad \Delta x = \frac{b-a}{n}.
$$

Left/right/midpoint sums; if $$f$$ is increasing, a left sum underestimates and a right sum overestimates (reverse if decreasing).

### Definite integral

$$
\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i^*)\,\Delta x.
$$

Gives signed area / net accumulation / total change of a rate.

### Fundamental Theorem of Calculus

$$
\int_a^b f(x)\,dx = F(b) - F(a) \quad \text{where } F' = f.
$$

If $$g(x) = \displaystyle\int_a^x f(t)\,dt$$, then $$g'(x) = f(x)$$. Chain-rule form:

$$
\frac{d}{dx}\int_{u(x)}^{v(x)} f(t)\,dt = f(v(x))v'(x) - f(u(x))u'(x).
$$

### u-substitution

With $$u = g(x)$$, $$du = g'(x)\,dx$$:

$$
\int f(g(x))g'(x)\,dx = \int f(u)\,du.
$$

### Average value of a function

$$
f_{\text{avg}} = \frac{1}{b-a}\int_a^b f(x)\,dx.
$$

### Trapezoidal rule

$$
\int_a^b f(x)\,dx \approx \frac{\Delta x}{2}\left[y_0 + 2y_1 + 2y_2 + \cdots + 2y_{n-1} + y_n\right].
$$

---

## Unit 7: Differential Equations

### Solutions

A general solution carries a constant of integration (a family of curves); an initial condition pins it to a particular solution.

### Slope fields and Euler's method

Slope fields draw $$dy/dx$$ at many points. Euler's method (step size $$h$$, with $$dy/dx = f(x,y)$$):

$$
x_{n+1} = x_n + h, \qquad y_{n+1} = y_n + h\,f(x_n,y_n).
$$

### Separable equations

If $$\dfrac{dy}{dx} = g(x)h(y)$$, rewrite as $$\dfrac{1}{h(y)}\,dy = g(x)\,dx$$ and integrate both sides.

### Exponential growth and decay

$$
\frac{dy}{dt} = ky \quad \Longrightarrow \quad y = Ce^{kt}.
$$

$$C$$ is the initial amount; $$k>0$$ grows, $$k<0$$ decays.

### Logistic model (BC emphasis)

$$
\frac{dy}{dt} = ky\left(1 - \frac{y}{L}\right).
$$

Carrying capacity $$L$$; equilibria at $$y=0$$ and $$y=L$$; growth is fastest at $$y = L/2$$.

---

## Unit 8: Applications of Integration

### Area between curves

If $$f(x) \ge g(x)$$ on $$[a,b]$$:

$$
\int_a^b [f(x)-g(x)]\,dx, \qquad \text{or with } dy: \int_c^d [x_{\text{right}}(y) - x_{\text{left}}(y)]\,dy.
$$

Split at intersection points when the curves cross.

### Net change, displacement, distance

$$
\text{net change} = \int_a^b R(t)\,dt, \qquad \text{displacement} = \int_a^b v(t)\,dt, \qquad \text{distance} = \int_a^b \lvert v(t) \rvert\,dt.
$$

Split the distance integral at sign changes of $$v(t)$$.

### Volume by cross sections

$$
V = \int_a^b A(x)\,dx.
$$

Common cross-section areas: square $$A = s^2$$, semicircle $$A = \tfrac12 \pi r^2$$, equilateral triangle $$A = \tfrac{\sqrt 3}{4}s^2$$.

### Disk and washer methods

$$
V = \pi \int_a^b [R(x)]^2\,dx, \qquad V = \pi \int_a^b \left([R(x)]^2 - [r(x)]^2\right)\,dx.
$$

### Cylindrical shells

$$
V = 2\pi \int_a^b (\text{radius})(\text{height})\,dx.
$$

### Arc length (BC emphasis)

$$
L = \int_a^b \sqrt{1 + [f'(x)]^2}\,dx.
$$

### Improper integrals

Evaluate as a limit, e.g. $$\displaystyle\int_1^\infty \frac{1}{x^2}\,dx = \lim_{b \to \infty} \int_1^b \frac{1}{x^2}\,dx = 1$$. A finite limit means it converges.

---

## Unit 9: Parametric, Polar, and Vector-Valued Functions (BC-only)

### Parametric derivatives

For $$x = f(t)$$, $$y = g(t)$$ with $$dx/dt \ne 0$$:

$$
\frac{dy}{dx} = \frac{dy/dt}{dx/dt}, \qquad \frac{d^2y}{dx^2} = \frac{\dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)}{dx/dt}.
$$

Horizontal tangent: $$dy/dt = 0$$, $$dx/dt \ne 0$$. Vertical tangent: $$dx/dt = 0$$, $$dy/dt \ne 0$$.

### Parametric speed and arc length

$$
\text{speed} = \sqrt{[x'(t)]^2 + [y'(t)]^2}, \qquad L = \int_a^b \sqrt{[x'(t)]^2 + [y'(t)]^2}\,dt.
$$

### Polar coordinates

$$
x = r\cos\theta, \qquad y = r\sin\theta, \qquad r^2 = x^2 + y^2.
$$

Polar slope, for $$r = f(\theta)$$:

$$
\frac{dy}{dx} = \frac{r'(\theta)\sin\theta + r(\theta)\cos\theta}{r'(\theta)\cos\theta - r(\theta)\sin\theta}.
$$

### Polar area and arc length

$$
A = \frac12 \int_a^b [r(\theta)]^2\,d\theta, \qquad L = \int_a^b \sqrt{[r(\theta)]^2 + [r'(\theta)]^2}\,d\theta.
$$

### Vector-valued functions

For $$\mathbf{r}(t) = \langle x(t), y(t) \rangle$$: velocity $$\mathbf{r}'(t)$$, acceleration $$\mathbf{r}''(t)$$, speed $$\lvert \mathbf{r}'(t) \rvert$$. Differentiate and integrate component by component.

---

## Unit 10: Infinite Sums and Series (BC-only)

### Geometric series

$$
\sum_{n=0}^{\infty} ar^n = \frac{a}{1-r} \quad \text{when } \lvert r \rvert < 1 \ \text{(diverges otherwise)}.
$$

### p-series and harmonic series

$$
\sum_{n=1}^{\infty} \frac{1}{n^p} \text{ converges iff } p > 1; \qquad \sum_{n=1}^{\infty} \frac{1}{n} \text{ diverges}.
$$

### Convergence tests

- nth-term test: if $$\lim_{n \to \infty} a_n \ne 0$$, the series diverges (can only prove divergence).
- Integral test: positive, continuous, decreasing $$f$$ with $$f(n) = a_n$$; series and $$\int f$$ share fate.
- Direct comparison and limit comparison (with $$0 < \lim a_n/b_n < \infty$$).
- Alternating series test: $$\sum (-1)^n b_n$$ converges if $$b_n$$ decreases and $$b_n \to 0$$.
- Ratio test: $$L = \lim \left\lvert \dfrac{a_{n+1}}{a_n} \right\rvert$$; root test: $$L = \lim \sqrt[n]{\lvert a_n \rvert}$$. $$L < 1$$ converges, $$L > 1$$ diverges, $$L = 1$$ inconclusive.

### Absolute vs conditional convergence

$$\sum \lvert a_n \rvert$$ converges: absolute (implies convergence). $$\sum a_n$$ converges but $$\sum \lvert a_n \rvert$$ diverges: conditional.

### Power series

For $$\displaystyle\sum a_n (x-c)^n$$, there is a radius $$R$$: converges for $$\lvert x-c \rvert < R$$, diverges for $$\lvert x-c \rvert > R$$, and endpoints must be tested separately. Use the ratio test to find $$R$$.

### Taylor and Maclaurin series

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(c)}{n!}(x-c)^n \quad (\text{Maclaurin: } c=0).
$$

Core series to memorize:

$$
\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n \ (\lvert x \rvert < 1), \qquad e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}.
$$

$$
\sin x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}, \qquad \cos x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}.
$$

### Error bounds

Alternating series remainder: $$\lvert R_n \rvert \le b_{n+1}$$ (first omitted term). Lagrange error bound:

$$
\lvert R_n(x) \rvert \le \frac{M}{(n+1)!}\lvert x-c \rvert^{n+1},
$$

where $$M$$ bounds the next derivative between $$c$$ and $$x$$.

---

## Most Common AP Calculus Mistakes

1. Doing limit operations on forms that are not actually indeterminate (e.g. $$\infty/3$$).
2. Forgetting the chain-rule factor in differentiation or the reverse factor in u-substitution.
3. Treating $$y$$ as a constant during implicit differentiation, or dropping $$dy/dx$$.
4. Calling every critical point an extremum without a sign-change or second-derivative check.
5. Using L'Hopital when the form is not $$0/0$$ or $$\infty/\infty$$.
6. Forgetting $$+C$$ on indefinite integrals.
7. Reporting velocity when the question asks for speed, or displacement when it asks for total distance.
8. Substituting the instant before differentiating in related-rates problems.
9. (BC) Stopping after the radius of convergence without testing endpoints.
10. (BC) Treating $$a_n \to 0$$ as proof of convergence.

---

## Fast Problem-Solving Checklist

1. Identify which unit/tool the problem belongs to before computing.
2. Check whether direct substitution, a derivative rule, or an integral technique applies.
3. Track units, and interpret the sign of any rate.
4. For applications, draw the picture (slice, diagram, slope field) first.
5. State theorems' hypotheses (continuity, differentiability) when justifying.
6. Confirm the answer's magnitude and sign make sense in context.
