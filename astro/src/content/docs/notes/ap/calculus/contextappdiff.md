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
\addplot[blue, very thick, samples=200, domain=0:8] {0.08*(x-4)^3 + 0.25*(x-4)^2 + 4.2};
\addplot[orange!85!black, thick, domain=0.7:3.2] {-0.62*(x-2)+3.72};
\addplot[orange!85!black, thick, domain=3.2:5.8] {0.5*(x-4.5)+4.27};
\addplot[orange!85!black, thick, domain=5.4:7.6] {1.25*(x-6.5)+5.61};
\addplot[only marks, mark=*, mark size=1.7pt, blue] coordinates {(2,3.72) (4.5,4.27) (6.5,5.61)};
\node[orange!85!black, anchor=south east] at (axis cs:2,3.72) {negative rate};
\node[orange!85!black, anchor=south] at (axis cs:4.5,4.27) {small positive rate};
\node[orange!85!black, anchor=south west] at (axis cs:6.5,5.61) {larger positive rate};
\end{axis}
\end{tikzpicture}
```
// fix image: the negative/large positive rate points/lines are not on the graph, the small positive rate line goes through the function a bit (the function is a bit too thick)

:::tip
Problems will often sue and expect certain words:

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

Velocity:

$$
v(t)=s'(t)
$$

includes direction. Speed:

$$
\lvert v(t)\rvert
$$

does not include direction.

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

## Related rates

// add more explanation/lecture and example for this section

Related rates problems are mostly about translation. The key source equations usually come from:

- Pythagorean theorem,
- volume formulas,
- area formulas,
- similar triangles.

If the problem asks how fast a quantity is changing, the final answer should usually be a value of a derivative with units.

:::strategy{title="Related rates"}
1. Draw and label a diagram.
2. Write an equation relating the variables.
3. Differentiate implicitly with respect to time.
4. Substitute the requested instant.
5. Keep units consistent.
:::

<div class="theorem-box">

**Example.** // write the example based on the image

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, scale=0.9]
\draw[gray!70, thick] (0,0) -- (5.3,0) node[right] {floor};
\draw[gray!70, thick] (0,0) -- (0,4.6) node[above] {wall};
\coordinate (A) at (4.2,0);
\coordinate (B) at (0,3.2);
\draw[blue, very thick] (A) -- (B) node[midway, above right] {ladder};
\draw[<->, orange!85!black] (0,-0.35) -- (4.2,-0.35) node[midway, below] {$x(t)$};
\draw[<->, red!75!black] (-0.35,0) -- (-0.35,3.2) node[midway, left] {$y(t)$};
\draw[->, orange!85!black, thick] (A) -- ++(0.65,0) node[right] {$\frac{dx}{dt}>0$};
\draw[->, red!75!black, thick] (B) -- ++(0,-0.65) node[left] {$\frac{dy}{dt}<0$};
\node[align=center] at (3.4,3.7) {$x^2+y^2=L^2$\\differentiate in $t$};
\end{tikzpicture}
```
// remove the black labels, and the derivative labels overlap a bit with the arrow/axis.

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

### Related rates as implicit differentiation

Related rates are implicit differentiation with time as the independent variable. The equation relates quantities, and each quantity may be changing with respect to time.

If a length $$x$$ depends on time, then differentiating $$x^2$$ with respect to $$t$$ gives

$$
\frac{d}{dt}(x^2)=2x\frac{dx}{dt}.
$$

The variable value and the rate value are different pieces of information. Substitute them after differentiating so the equation still represents rates.

---

## Linearization and differentials

Near $$x=a$$,

$$
L(x) = f(a) + f'(a)(x-a)
$$

approximates $$f(x)$$.

Differentials use the same idea:

$$
dy = f'(x)\,dx.
$$

If a measured input has small error $$dx$$, then the output error is approximately $$dy$$.

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

If $$y=f(x)$$, then the differential is defined as

$$
dy=f'(x)\,dx
$$.

This is equivalent to $$f'(x)=\frac{dy}{dx}$$, combining two well known derivative notations.

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

## Applications to business

// please reformat/add stuff to this section according to this lesson: https://tutorial.math.lamar.edu/Classes/CalcI/BusinessApps.aspx 

In economics-flavored problems:

- cost function $$C(x)$$,
- revenue function $$R(x)$$,
- profit $$P(x) = R(x)-C(x)$$.

Then:

- marginal cost is $$C'(x)$$,
- marginal revenue is $$R'(x)$$,
- marginal profit is $$P'(x)$$.

At large production levels, these are interpreted as approximate change from one additional unit.

<div class="theorem-box">

**Example.** The cost of producing $$x$$ items is $$C(x)=0.01x^2+5x+500$$ dollars. Find the marginal cost at a production level of $$x=100$$ items and interpret it.

Marginal cost is the derivative of the cost function:

$$
C'(x)=0.02x+5.
$$

Evaluate at $$x=100$$:

$$
C'(100)=0.02(100)+5=2+5=7\ \text{dollars per item}.
$$

The marginal cost at $$100$$ items is $$7$$ dollars per item. This means that when production is at $$100$$ items, producing approximately one additional item costs about $$7$$ dollars.

</div>

### Marginal analysis language

In business-style applications:

- $$C(x)$$ is cost,
- $$R(x)$$ is revenue,
- $$P(x)=R(x)-C(x)$$ is profit,
- $$C'(x)$$, $$R'(x)$$, and $$P'(x)$$ are marginal cost, revenue, and profit.

For example, $$C'(100)=7$$ means that near $$100$$ items, producing one more item increases cost by about $$7$$ dollars.

Break-even and optimization language often uses the same functions:

- profit is positive when $$R(x)>C(x)$$,
- break-even points occur when $$R(x)=C(x)$$,
- profit is maximized where $$P'(x)=0$$ or at an endpoint of the feasible domain.

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

**Proof (L'Hôpital's Rule).** // add proof of L'Hopital's rule

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
