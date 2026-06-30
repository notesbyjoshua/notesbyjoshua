---
title: "Unit 4: Contextual Applications of Differentiation"
sidebar:
  order: 4
---

---

## Rates of change in context

If $$Q(t)$$ is a quantity depending on time, then:

- $$Q'(t)$$ is the instantaneous rate of change of $$Q$$,
- units of $$Q'(t)$$ are units of $$Q$$ per unit of $$t$$.

Always interpret both sign and units and give sufficient context if necessary.

Many contextual problems also distinguish between average and instantaneous rates of change. The average rate on $$[a,b]$$ is the slope of the secant line:

$$
\frac{Q(b)-Q(a)}{b-a},
$$

while the instantaneous rate at $$t=a$$ is the derivative:

$$
Q'(a).
$$

If you are trying to figure out a mean or average, use average rate of change, but if you are trying to find your speed or rate of change at a specific moment, use derivatives.

### Contextual interpretation the derivative

A derivative value is not just a number. A complete interpretation usually needs:

- the quantity changing,
- the input value or time,
- the direction of change if the sign matters,
- correct units.

If $$H(t)$$ is height in meters and $$H'(3)=-2$$, then at $$t=3$$ the height is decreasing at $$2$$ meters per unit of time. The negative sign means the height is going down; the magnitude $$2$$ describes the speed of that change.

<div class="theorem-box">

**Example.** Let $$P(t)$$ be the number of fish in a lake, where $$t$$ is measured in years. Write a full sentence interpreting the statement $$P'(5)=40$$.

The quantity changing is the fish population, measured in fish; the input is time in years; the sign is positive, so the population is growing; and the units of the derivative are fish per year. A complete interpretation is:

At time $$t=5$$ years, the fish population is increasing at a rate of $$40$$ fish per year.

Notice that this is a rate, not a total: it does not say there are $$40$$ fish, but rather that the population is growing by about $$40$$ fish for each additional year near $$t=5$$.

</div>

### Related quantities and hidden variables

Contextual problems often include more variables than you actually need. The goal is to write one equation connecting the changing quantities, then identify which rate the question asks for.

:::strategy{title="Related quantities"}
- define every variable before differentiating,
- record which variables are changing,
- keep constants as constants,
- substitute numerical values after differentiating.
:::

If the independent variable is time, every changing quantity gets a rate such as $$dx/dt$$, $$dV/dt$$, or $$dA/dt$$.

---

## Interpreting graphs in context

Given a graph of a function $$f$$:

- slope describes the derivative $$f'$$,
- steep positive slope means rapid increase,
- slope near zero means little short-term change,
- concavity tells whether the rate itself is increasing or decreasing.

Given a graph of a derivative $$f'$$:

- positive derivative means original function is increasing,
- negative derivative means decreasing,
- derivative crossing zero may indicate an extremum in the original function.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, xmin=0, xmax=8, ymin=0, ymax=9,
  xtick={0,2,4,6,8}, ytick={0,2,4,6,8},
  grid=both, grid style={gray!18},
  width=9cm, height=6cm,
  xlabel=$t$, ylabel=$Q(t)$,
]
\addplot[blue, thick, samples=200, domain=0:8] {0.08*(x-4)^3 + 0.25*(x-4)^2 + 4.2};
\addplot[orange!85!black, thick, domain=1.3:3.2] {-0.74*(x-2.2)+4.02};
\addplot[orange!85!black, thick, domain=3.5:5.1] {0.17*(x-4.3)+4.22};
\addplot[orange!85!black, thick, domain=5.25:7.15] {2.26*(x-6.2)+5.74};
\addplot[only marks, mark=*, mark size=1.7pt, blue] coordinates {(2.2,4.02) (4.3,4.22) (6.2,5.74)};
\node[orange!85!black, anchor=north east] at (axis cs:2.1,3.45) {steeper negative rate};
\node[orange!85!black, anchor=south] at (axis cs:4.3,4.55) {small positive rate};
\node[orange!85!black, anchor=south west] at (axis cs:5.55,7.75) {larger positive rate};
\end{axis}
\end{tikzpicture}
```

:::tip
Problems will often use and expect certain words:

- increasing means derivative positive,
- decreasing means derivative negative,
- at what rate means derivative value,
- how fast often means magnitude, but read carefully,
- changing more rapidly compares derivative magnitudes or second derivatives depending on context.
:::

---

## Straight line motion

A lot of the contextual problems for AP Calculus regard physics and straight line motion. We denote position as $$s(t)$$ or $$x(t)$$, velocity as $$v(t)$$, and acceleration as $$a(t)$$.

For motion on a line, position, velocity, acceleration, and speed are related but not interchangeable.

Velocity is a *vector*, which means it includes direction:

$$
v(t)=s'(t)
$$

Speed is a *scalar* meaning it is the magnitude of velocity and does not include direction:

$$
\lvert v(t)\rvert
$$

Acceleration:

$$
a(t)=v'(t)
$$

tells how velocity is changing. Speed increases when velocity and acceleration point in the same direction, because the velocity value is moving farther from zero. Speed decreases when velocity and acceleration have opposite signs.

For straight-line motion, AP problems often ask for all of the following from one model:

- position at a time,
- velocity at a time,
- acceleration at a time,
- when the particle is at rest,
- when the particle changes direction,
- total distance traveled on an interval.

Changing direction requires velocity to change sign, not merely equal zero. A particle can stop for an instant and continue in the same direction.

<div class="theorem-box">

**Example.** A particle moves along a line with velocity $$v(t)=t^2-5t+6$$

for $$0\le t\le4$$. Determine when it is moving right, when it is moving left, and whether it changes direction.

Factor the velocity:

$$
v(t)=t^2-5t+6=(t-2)(t-3).
$$

The velocity is zero at $$t=2$$ and $$t=3$$. Test intervals:

$$
v(1)=(1-2)(1-3)=2>0,
$$

$$
v(2.5)=(0.5)(-0.5)<0,
$$

and

$$
v(3.5)=(1.5)(0.5)>0.
$$

So the particle moves right on $$(0,2)$$ and $$(3,4)$$, and left on $$(2,3)$$. Since the sign of velocity changes at both $$t=2$$ and $$t=3$$, the particle changes direction at both times.

</div>

<div class="theorem-box">

**Example.** A particle moves along a line with position $$s(t)=t^3-6t^2+9t$$ meters, where $$t$$ is in seconds. Find the velocity and acceleration at $$t=4$$, and determine whether the particle is speeding up or slowing down.

Differentiate to get velocity and acceleration:

$$
v(t)=s'(t)=3t^2-12t+9,\qquad a(t)=v'(t)=6t-12.
$$

Evaluate both at $$t=4$$:

$$
v(4)=3(16)-12(4)+9=48-48+9=9\ \text{m/s},
$$

$$
a(4)=6(4)-12=12\ \text{m/s}^2.
$$

At $$t=4$$ the velocity is $$+9$$ m/s and the acceleration is $$+12$$ m/s$$^2$$. Because velocity and acceleration have the same sign, the velocity is moving farther from zero, so the particle is speeding up.

</div>

---

## Marginal analysis and economics

In business-style applications:

- $$C(x)$$ is cost,
- $$R(x)$$ is revenue,
- $$P(x)=R(x)-C(x)$$ is profit,
- $$C'(x)$$, $$R'(x)$$, and $$P'(x)$$ are marginal cost, revenue, and profit.
- $$\overline C(x)=\frac{C(x)}{x}$$ is average cost per item.

For example, $$C'(100)=7$$ means that near $$100$$ items, producing one more item increases cost by about $$7$$ dollars.

The average cost function is useful when a problem asks for cost per item instead of total cost. To minimize average cost, differentiate $$\overline C(x)$$ and look for critical points. A common relationship at an interior minimum is

$$
C'(x)=\overline C(x),
$$

which means the marginal cost equals the average cost.

Break-even and optimization language often uses the same functions:

- profit is positive when $$R(x)>C(x)$$,
- break-even points occur when $$R(x)=C(x)$$,
- profit is maximized where $$P'(x)=0$$ or at an endpoint of the feasible domain.
- at an interior profit maximum, $$P'(x)=0$$ means $$R'(x)=C'(x)$$.

:::key{name="Profit condition"}
When profit is maximized at an interior point and the second derivative/shape confirms a maximum, marginal revenue equals marginal cost:

$$
R'(x)=C'(x).
$$
:::

<div class="theorem-box">

**Example.** Suppose cost and revenue are modeled by

$$
C(x)=0.02x^2+4x+300,
\qquad
R(x)=20x,
$$

where $$x$$ is the number of items sold. Find the marginal profit at $$x=200$$ and interpret it.

Profit is revenue minus cost:

$$
P(x)=R(x)-C(x)=20x-(0.02x^2+4x+300).
$$

Simplify:

$$
P(x)=-0.02x^2+16x-300.
$$

Differentiate:

$$
P'(x)=-0.04x+16.
$$

Evaluate at $$x=200$$:

$$
P'(200)=-0.04(200)+16=8.
$$

At a production level of $$200$$ items, profit is increasing at about $$8$$ dollars per additional item. This means producing and selling one more item near that level is expected to increase profit by about $$8$$ dollars.

</div>

<div class="theorem-box">

**Example.** A company sells $$x$$ items at price $$p(x)=50-0.02x$$ dollars per item, and its cost is $$C(x)=1000+10x$$ dollars. Find the marginal revenue and marginal profit when $$x=500$$.

Revenue is price times quantity:

$$
R(x)=x(50-0.02x)=50x-0.02x^2.
$$

Profit is revenue minus cost:

$$
P(x)=R(x)-C(x)=50x-0.02x^2-(1000+10x).
$$

Simplify:

$$
P(x)=40x-0.02x^2-1000.
$$

Differentiate:

$$
R'(x)=50-0.04x,
\qquad
P'(x)=40-0.04x.
$$

Evaluate at $$x=500$$:

$$
R'(500)=50-0.04(500)=30,
$$

$$
P'(500)=40-0.04(500)=20.
$$

At $$500$$ items, revenue is increasing by about $$30$$ dollars per additional item, and profit is increasing by about $$20$$ dollars per additional item.

</div>

---

## Related rates

Related rates problems are mostly about translation, where two quantities are moving in a related way. The key source equations usually come from:

- Pythagorean theorem,
- volume formulas,
- area formulas,
- similar triangles.

If the problem asks how fast a quantity is changing, the final answer should usually be a value of a derivative with units.

Related rates is just an application of implicit differentiation with time as the dThe important idea is that every variable depends on time, even if the equation itself does not visibly contain $$t$$ (unless the problem specifically says otherwise). For example, in $$x^2+y^2=L^2$$, the ladder length $$L$$ is constant, but $$x$$ and $$y$$ change as the ladder slides. That is why differentiating gives rate terms:

$$
\frac{d}{dt}(x^2+y^2)=\frac{d}{dt}(L^2)
\quad\Longrightarrow\quad
2x\frac{dx}{dt}+2y\frac{dy}{dt}=0.
$$

Do not plug in the numerical values before differentiating. The equation must still show how the variables are changing.

:::strategy{title="Related rates"}
1. Draw and label a diagram.
2. Write an equation relating the variables.
3. Differentiate implicitly with respect to time.
4. Substitute the requested instant.
5. Keep units consistent.
:::

<div class="theorem-box">

**Example.** A $$10$$ ft ladder leans against a wall. The bottom of the ladder is sliding away from the wall at $$2$$ ft/s. When the bottom is $$6$$ ft from the wall, how fast is the top of the ladder sliding down?

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, scale=0.9]
\draw[gray!70, thick] (0,0) -- (5.3,0);
\draw[gray!70, thick] (0,0) -- (0,4.6);
\coordinate (A) at (4.2,0);
\coordinate (B) at (0,3.2);
\draw[blue, very thick] (A) -- (B) node[midway, above right] {ladder};
\draw[<->, orange!85!black] (0,-0.35) -- (4.2,-0.35) node[midway, below] {$x(t)$};
\draw[<->, red!75!black] (-0.35,0) -- (-0.35,3.2) node[midway, left] {$y(t)$};
\draw[->, orange!85!black, thick] (A) -- ++(0.65,0);
\node[orange!85!black, anchor=west] at (5.0,0.45) {$\frac{dx}{dt}>0$};
\draw[->, red!75!black, thick] (B) -- ++(0,-0.65);
\node[red!75!black, anchor=east] at (-0.65,2.6) {$\frac{dy}{dt}<0$};
\end{tikzpicture}
```

Let $$x$$ be the distance from the wall to the bottom of the ladder, and let $$y$$ be the height of the top of the ladder. The ladder length is constant, so

$$
x^2+y^2=10^2.
$$

At the moment $$x=6$$, find $$y$$:

$$
6^2+y^2=100
\quad\Longrightarrow\quad
y^2=64
\quad\Longrightarrow\quad
y=8.
$$

Differentiate the equation with respect to time:

$$
2x\frac{dx}{dt}+2y\frac{dy}{dt}=0.
$$

Substitute $$x=6$$, $$y=8$$, and $$\frac{dx}{dt}=2$$:

$$
2(6)(2)+2(8)\frac{dy}{dt}=0.
$$

Solve:

$$
24+16\frac{dy}{dt}=0
\quad\Longrightarrow\quad
\frac{dy}{dt}=-\frac{24}{16}=-\frac32.
$$

The top of the ladder is sliding down at $$\frac32$$ ft/s.

</div>

<div class="theorem-box">

**Example.** Air is pumped into a spherical balloon so that its volume increases at $$\frac{dV}{dt}=100$$ cubic centimeters per second. How fast is the radius changing at the moment when $$r=5$$ cm?

The source equation is the volume of a sphere:

$$
V=\frac{4}{3}\pi r^3.
$$

Differentiate both sides with respect to time, treating $$r$$ as a function of $$t$$:

$$
\frac{dV}{dt}=4\pi r^2\,\frac{dr}{dt}.
$$

Substitute the known values $$\frac{dV}{dt}=100$$ and $$r=5$$:

$$
100=4\pi(5)^2\,\frac{dr}{dt}=100\pi\,\frac{dr}{dt}.
$$

Solve for the radius rate:

$$
\frac{dr}{dt}=\frac{100}{100\pi}=\frac{1}{\pi}\approx 0.318\ \text{cm/s}.
$$

When the radius is $$5$$ cm, it is increasing at about $$0.318$$ centimeters per second. The rate is positive because the balloon is inflating.

</div>

### Rate in, rate out, and accumulation

If a quantity changes because something enters and leaves, then:

$$
\text{net change rate} = \text{rate in} - \text{rate out}.
$$

If $$R(t)$$ is the rate entering a tank and $$L(t)$$ is the rate leaving, then:

$$
V'(t) = R(t) - L(t).
$$

<div class="theorem-box">

**Example.** Water enters a tank at a constant rate $$R(t)=8$$ gallons per minute, and leaves at a rate $$L(t)=t$$ gallons per minute, where $$t$$ is in minutes. Find $$V'(10)$$ and state whether the volume is rising or falling at that instant.

The net rate of change of volume is the rate in minus the rate out:

$$
V'(t)=R(t)-L(t)=8-t.
$$

Evaluate at $$t=10$$:

$$
V'(10)=8-10=-2\ \text{gallons per minute}.
$$

At $$t=10$$ minutes the volume is changing at $$-2$$ gallons per minute. The negative sign means more water is leaving than entering, so the volume is falling at that instant.

</div>

---

## Linearization

Sometimes, we can use derivatives to estimate functions. Let $$L(x)$$ be the estimated value of $$f(x)$$. Near $$x=a$$ define $$L(x)$$ as,

$$
L(x) = f(a) + f'(a)(x-a).
$$

For small changes in the input value (as long as the value stays enar $$a$$), $$L(x)$$ basically equals $$f(x)$$ for all intensive purposes. Scientists (especiallty physicists) and mathematicians use the process of linearization to simplify hard equations into much simpler ones.

<div class="theorem-box">

**Proof (Linearization).** Differentiability at $$a$$ means

$$
f'(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}.
$$

For $$x$$ close to $$a$$, the difference quotient is close to $$f'(a)$$, so

$$
\frac{f(x)-f(a)}{x-a}\approx f'(a).
$$

Multiplying by $$x-a$$ gives

$$
f(x)\approx f(a)+f'(a)(x-a).
$$

It is important to note that linearization only works for small deviations from $$a$$, as the line will eventually diverge from the function as the difference increases.

</div>

<div class="theorem-box">

**Example.** Use a linearization to estimate $$\sqrt{27}$$.

Let $$f(x)=\sqrt{x}$$ and choose the nearby easy point $$a=25$$, since $$\sqrt{25}=5$$. The derivative is

$$
f'(x)=\frac{1}{2\sqrt{x}},\qquad f'(25)=\frac{1}{2\cdot 5}=\frac{1}{10}.
$$

The linearization at $$a=25$$ is

$$
L(x)=f(25)+f'(25)(x-25)=5+\frac{1}{10}(x-25).
$$

Estimate at $$x=27$$:

$$
\sqrt{27}\approx L(27)=5+\frac{1}{10}(2)=5.2.
$$

So $$\sqrt{27}\approx 5.2$$. The true value is about $$5.196$$, so the linear estimate is accurate to within a couple thousandths because $$27$$ is close to $$25$$.

</div>

### Differential notation and small changes

<div class="theorem-box">

**Definition.** If $$y=f(x)$$, then the *differential* is defined as

$$
dy=f'(x)\,dx.
$$

This is equivalent to $$f'(x)=\frac{dy}{dx}$$, combining two well known derivative notations (Think of it like treating $$dy$$ and $$dx$$ as variables).

</div>

The differential models the approximate change in $$y$$ caused by a infinitesimal small change $$dx$$ in $$x$$. This is the same idea as linearization, written in a compact way:

$$
\Delta y\approx dy=f'(a)\Delta x.
$$

The actual change is

$$
\Delta y=f(a+\Delta x)-f(a),
$$

while the differential estimate is

$$
dy=f'(a)\Delta x.
$$

Differentials are especially useful for error estimates. If a measurement has possible error $$\Delta x$$, then the propagated output error is approximately

$$
\lvert dy\rvert=\lvert f'(a)\rvert\lvert \Delta x\rvert.
$$

Linearization and differentials are very influential not only in calculus, but in other fields as well like physics.

---

## L'Hôpital's Rule

Sometimes, you when calculating limits, you get indeterminate forms that cannot be solved using algebra. A very useful way to solve is to use L'Hôpital's rule.

<div class="theorem-box">

**Theorem (L'Hôpital's Rule).** If a limit produces $$0/0$$ or $$\infty/\infty$$ and the hypotheses are satisfied, then

$$
\lim_{x \to a} \frac{f(x)}{g(x)}
=
\lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

provided the new limit exists in a usable way.

</div>

<div class="theorem-box">

**Proof (L'Hôpital's Rule).** Here is the idea for the $$0/0$$ case. Suppose $$f(a)=g(a)=0$$, and suppose $$f$$ and $$g$$ satisfy the needed continuity and differentiability conditions near $$a$$, with $$g'(x)\ne0$$.

For $$x\ne a$$, Cauchy's Mean Value Theorem gives a number $$c$$ between $$a$$ and $$x$$ such that

$$
\frac{f(x)-f(a)}{g(x)-g(a)}
=
\frac{f'(c)}{g'(c)}.
$$

Since $$f(a)=g(a)=0$$, this becomes

$$
\frac{f(x)}{g(x)}=\frac{f'(c)}{g'(c)}.
$$

As $$x\to a$$, the point $$c$$ also moves toward $$a$$. If

$$
\lim_{u\to a}\frac{f'(u)}{g'(u)}=L,
$$

then

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=L.
$$

The $$\infty/\infty$$ case is proved with a similar Cauchy Mean Value Theorem argument, but the hypotheses are more technical.

</div>

If one round of L'Hôpital's cancellations doesn't get rid of the indeterminate forms, you can always continuing applying it until you get an example!

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

It is important to note that L'Hôpital's Rule applies to limits that produce

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

**Example.** Evaluate $$\lim_{x\to0^+}x\ln x.$$

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

**Example.** Evaluate $$\lim_{x\to0^+}(1+x)^{1/x}.$$

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

## Tips for the exam

Contextual derivative questions are translation problems first and calculus problems second. Before differentiating, decide what each symbol measures and what its derivative would mean.

:::variables
- Position: $$s(t)$$, usually measured in distance units.
- Velocity: $$v(t)=s'(t)$$, measured in distance per time.
- Acceleration: $$a(t)=v'(t)=s''(t)$$, measured in distance per time squared.
- Rate in/out: positive and negative contributions to a total amount.
- Marginal cost/revenue/profit: derivative of the corresponding business function.
:::

When writing interpretations:

- "Increasing" means the derivative is positive.
- "Decreasing" means the derivative is negative.
- "Speeding up" means velocity and acceleration have the same sign.
- "Slowing down" means velocity and acceleration have opposite signs.
- "Approximately" usually signals linearization or a tangent-line estimate.

:::exam{topic="Context wording"}
AP free-response scoring usually expects a complete sentence with units. A correct number without context can lose the interpretation point.
:::
