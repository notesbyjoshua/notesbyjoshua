---
title: "Unit 7: Differential Equations"
sidebar:
  order: 7
---

## Introduction to differential equations

A differential equation usually does not tell you the value of a function directly. Instead, it tells you how the function changes. That is why differential equations show up whenever the important information is a rate: population growth, cooling, radioactive decay, motion, spread of a disease, charging a capacitor, or any situation where the future depends on the current state.

For example, saying

$$
\frac{dP}{dt}=0.2P
$$

does not give the population $$P(t)$$ immediately. It says the population grows at a rate proportional to how much population is already present. Solving the differential equation turns that rate rule into an actual population model.

For

$$
\frac{dy}{dx}=f(x,y),
$$

the slope at a point depends on the coordinates of that point. A solution curve is a function whose tangent slope matches the differential equation everywhere it passes through.

However, a solution to a differential equation may be valid only on an interval, even if the algebraic expression looks broader. Restrictions can come from:

- division by zero during separation,
- logarithms introduced while integrating,
- initial conditions that choose one branch,
- points where the differential equation itself is undefined.

When solving an initial value problem, the interval of validity is usually the largest interval containing the initial input where the solution and differential equation both make sense.


---

## Slope fields

A slope field shows small line segments representing $$dy/dx$$ at many points.

In a slope field, each small segment represents the slope assigned by the differential equation at that point. Solution curves should follow the little segments smoothly. They should not cross each other for the same initial value problem because one input-output point should determine one local direction.

To sketch a solution curve through an initial condition, start at the given point and move in the direction of the nearby line segments. Do not connect the segments with sharp corners; the solution should be a smooth curve whose tangent direction matches the field. You can reason about the solution without solving the differential equation by asking where slopes are positive, negative, zero, steep, or shallow.

:::strategy{title="Analyzing a slope field"}
- look for where slopes are zero,
- look for where slopes are positive/negative,
- notice rows or columns where slopes repeat,
- sketch a solution curve that follows the segment directions.
:::

```tikz
\usepackage{tikz}
\begin{tikzpicture}[scale=0.85]
\draw[->, gray!70] (-3.2,0) -- (3.4,0) node[right] {$x$};
\draw[->, gray!70] (0,-2.5) -- (0,3) node[above] {$y$};
\foreach \x in {-3,-2,-1,0,1,2,3} {
  \foreach \y in {-2,-1,0,1,2} {
    \pgfmathsetmacro{\m}{0.7*(1-\y)}
    \pgfmathsetmacro{\ang}{atan(\m)}
    \draw[gray!65, rotate around={\ang:(\x,\y)}] (\x-0.18,\y) -- (\x+0.18,\y);
  }
}
\draw[blue, very thick] plot[smooth] coordinates {(-3,-1) (-2,0.01) (-1,0.51) (0,0.76) (1,0.88) (2,0.94) (3,0.97)};
\draw[blue, very thick] plot[smooth] coordinates {(-3,2.5) (-2,1.75) (-1,1.37) (0,1.18) (1,1.09) (2,1.05) (3,1.02)};
\node[blue, anchor=west] at (2.2,0.45) {solutions follow slopes};
\end{tikzpicture}
```

---

## Euler's method (BC-only)

Euler's method is repeated linear approximation. At each step, use the current slope to move forward:

$$
y_{new} = y_{old} + (\text{step size})(\text{slope at old point}).
$$

Starting from $$(x_0,y_0)$$ with step size $$h$$:

$$
y_{n+1} = y_n + h f(x_n,y_n),
$$

where

$$
\frac{dy}{dx} = f(x,y).
$$

Also keep track of the input:

$$
x_{n+1}=x_n+h.
$$

The approximation improves when the step size is smaller, but AP questions usually care more about setting up the method correctly than about perfect numerical accuracy.

Euler's method is like repeatedly using a tangent line for a short time. At $$(x_n,y_n)$$, the differential equation gives the slope $$f(x_n,y_n)$$. If the step size is $$h$$, then the tangent-line estimate says

$$
\Delta y\approx h\cdot f(x_n,y_n).
$$

So the next point is

$$
(x_{n+1},y_{n+1})=(x_n+h,\ y_n+h f(x_n,y_n)).
$$

The important detail is that each step uses the slope at the **old** point, not at the new point. After taking the step, you recalculate the slope using the new estimated point.

<div class="theorem-box">

**Example.** Given $$\dfrac{dy}{dx}=x+y$$ with $$y(0)=1$$, use Euler's method with step size $$h=0.5$$ to approximate $$y(1)$$ in two steps.

At each step the new $$y$$ is the old $$y$$ plus $$h$$ times the slope at the current point. Start at $$(x_0,y_0)=(0,1)$$.

Step 1. The slope at $$(0,1)$$ is $$f(0,1)=0+1=1$$, so

$$
y_1 = y_0 + h\,f(x_0,y_0) = 1 + 0.5(1) = 1.5,\qquad x_1 = 0.5.
$$

Step 2. The slope at $$(0.5,1.5)$$ is $$f(0.5,1.5)=0.5+1.5=2$$, so

$$
y_2 = y_1 + h\,f(x_1,y_1) = 1.5 + 0.5(2) = 2.5,\qquad x_2 = 1.
$$

Collecting the steps in a table:

$$
\begin{array}{c|c|c|c}
n & x_n & y_n & f(x_n,y_n) \\ \hline
0 & 0 & 1 & 1 \\
1 & 0.5 & 1.5 & 2 \\
2 & 1 & 2.5 & -
\end{array}
$$

So Euler's method gives the approximation $$y(1)\approx 2.5$$.

</div>

---

## Separable differential equations

A separable equation has the variables separated into an $$x$$ part and a $$y$$ part.

If

$$
\frac{dy}{dx} = g(x)h(y),
$$

rewrite as

$$
\frac{1}{h(y)}\,dy = g(x)\,dx
$$

and integrate both sides.

The constant of integration belongs after integration, and an initial condition turns the general solution into a particular solution.

A **general solution** contains an arbitrary constant and represents a whole family of possible solution curves. A **particular solution** uses an initial condition to choose exactly one curve from that family.

For example, after separating variables you might get

$$
y^2=x^2+C.
$$

That is a general solution because different values of $$C$$ give different curves. If the problem also says $$y(0)=2$$, then you substitute that point to find $$C=4$$, giving the particular solution

$$
y=\sqrt{x^2+4}.
$$

:::warning
When separating variables, do not divide by an expression that could be zero without thinking about it. Dividing by $$y$$, $$y-1$$, or another factor can accidentally lose an equilibrium solution.
:::

<div class="theorem-box">

**Example.** Solve $$\dfrac{dy}{dx}=\dfrac{x}{y}$$ with the initial condition $$y(0)=2$$.

Separate the variables, moving all $$y$$ factors with $$dy$$ and all $$x$$ factors with $$dx$$:

$$
y\,dy = x\,dx.
$$

Integrate both sides:

$$
\frac{y^2}{2} = \frac{x^2}{2} + C.
$$

Multiplying by $$2$$ and renaming the constant gives the general solution

$$
y^2 = x^2 + C.
$$

Apply the initial condition $$y(0)=2$$:

$$
(2)^2 = (0)^2 + C \quad\Longrightarrow\quad C = 4.
$$

Since $$y(0)=2>0$$, take the positive square root to get the particular solution

$$
y = \sqrt{x^2 + 4}.
$$

</div>

---

## First-order linear differential equations

A first-order linear differential equation has the form

$$
\frac{dy}{dx}+P(x)y=Q(x).
$$

The standard method of solving is to multiply by an integrating factor

$$
\mu(x)=e^{\int P(x)\,dx}.
$$

Then the left side becomes the derivative of a product:

$$
\frac{d}{dx}\bigl[\mu(x)y\bigr]=\mu(x)Q(x).
$$

After that, integrate both sides and solve for $$y$$.

<div class="theorem-box">

**Example.** Solve

$$
\frac{dy}{dx}+2y=6
$$

with $$y(0)=1$$.

Here

$$
P(x)=2,
\qquad
Q(x)=6.
$$

The integrating factor is

$$
\mu(x)=e^{\int 2\,dx}=e^{2x}.
$$

Multiply the differential equation by $$e^{2x}$$:

$$
e^{2x}\frac{dy}{dx}+2e^{2x}y=6e^{2x}.
$$

The left side is

$$
\frac{d}{dx}\left(e^{2x}y\right).
$$

So

$$
\frac{d}{dx}\left(e^{2x}y\right)=6e^{2x}.
$$

Integrate both sides:

$$
e^{2x}y=3e^{2x}+C.
$$

Divide by $$e^{2x}$$:

$$
y=3+Ce^{-2x}.
$$

Use $$y(0)=1$$:

$$
1=3+C
\quad\Longrightarrow\quad
C=-2.
$$

Therefore the particular solution is

$$
y=3-2e^{-2x}.
$$

</div>

---

## Second derivative from a differential equation

If

$$
\frac{dy}{dx} = f(x,y),
$$

then

$$
\frac{d^2y}{dx^2}
$$

often comes from differentiating implicitly:

$$
\frac{d^2y}{dx^2}
=
\frac{d}{dx}[f(x,y)].
$$

When differentiating, remember that $$y$$ depends on $$x$$. After finding $$d^2y/dx^2$$, use its sign to describe whether solution curves are concave up or concave down.

<div class="theorem-box">

**Example.** For solutions of

$$
\frac{dy}{dx}=x-y,
$$

find $$\frac{d^2y}{dx^2}$$ in terms of $$x$$ and $$y$$, then determine the concavity at the point $$(2,1)$$.

Differentiate both sides with respect to $$x$$:

$$
\frac{d^2y}{dx^2}
=
\frac{d}{dx}(x-y).
$$

Since $$y$$ depends on $$x$$,

$$
\frac{d^2y}{dx^2}=1-\frac{dy}{dx}.
$$

Substitute $$\frac{dy}{dx}=x-y$$:

$$
\frac{d^2y}{dx^2}=1-(x-y)=1-x+y.
$$

At $$(2,1)$$,

$$
\frac{d^2y}{dx^2}=1-2+1=0.
$$

The solution curve has zero second derivative at that point, so this test alone says the curve is an inflection point of the curve.

</div>

---

## Exponential growth and decay

If the rate of change is proportional to the amount present:

$$
\frac{dy}{dt} = ky
$$

then

$$
y = Ce^{kt}.
$$

<div class="theorem-box">

**Proof (Exponential model equation).** If

$$
\frac{dy}{dt}=ky,
$$

then the relative rate of change is constant:

$$
\frac{1}{y}\frac{dy}{dt}=k.
$$

Integrating gives

$$
\ln\lvert y\rvert=kt+C.
$$

Exponentiating both sides gives

$$
y=Ce^{kt}.
$$

So exponentials are the natural functions whose rate of change stays proportional to their current value.

</div>

<div class="theorem-box">

**Example.** A radioactive sample decays according to $$\dfrac{dy}{dt}=ky$$ and has a half-life of $$5$$ years. Find the decay constant $$k$$, and determine how much of an initial $$80$$-gram sample remains after $$15$$ years.

The solution has the form $$y=Ce^{kt}$$, where $$C$$ is the initial amount. A half-life of $$5$$ years means that after $$t=5$$ the amount is half of $$C$$:

$$
\tfrac{1}{2}C = Ce^{5k} \quad\Longrightarrow\quad e^{5k} = \tfrac{1}{2}.
$$

Take the natural log of both sides and solve for $$k$$:

$$
5k = \ln\tfrac{1}{2} = -\ln 2 \quad\Longrightarrow\quad k = -\frac{\ln 2}{5} \approx -0.1386.
$$

With $$C=80$$, the amount after $$15$$ years is

$$
y(15) = 80\,e^{15k} = 80\,e^{-3\ln 2} = 80\cdot 2^{-3} = 80\cdot\tfrac{1}{8} = 10.
$$

So $$10$$ grams remain. This matches the intuition that $$15$$ years is exactly three half-lives, leaving $$\left(\tfrac{1}{2}\right)^3=\tfrac{1}{8}$$ of the original.

</div>

---

## Equilibrium solutions and stability

Equilibrium solutions are constant solutions where $$dy/dx = 0$$. For an autonomous differential equation

$$
\frac{dy}{dx}=f(y),
$$

an equilibrium solution occurs when

$$
f(y)=0.
$$

At those $$y$$-values, the slope is zero for every $$x$$, so the solution can remain constant.

Stability:

- stable if nearby solutions move toward it,
- unstable if nearby solutions move away,
- semistable if nearby solutions move toward it from one side and away from it on the other.

For autonomous equations $$dy/dx = f(y)$$, a sign chart on $$f(y)$$ is an efficient way to classify equilibria.

<div class="theorem-box">

**Example.** Classify the equilibrium solutions of

$$
\frac{dy}{dx}=y(4-y).
$$

Set the right side equal to zero:

$$
y(4-y)=0.
$$

Thus the equilibrium solutions are

$$
y=0
\qquad\text{and}\qquad
y=4.
$$

Test the sign of $$y(4-y)$$ on the intervals determined by $$0$$ and $$4$$:

- If $$y<0$$, then $$y(4-y)<0$$, so solutions move downward.
- If $$0<y<4$$, then $$y(4-y)>0$$, so solutions move upward.
- If $$y>4$$, then $$y(4-y)<0$$, so solutions move downward.

Solutions move away from $$y=0$$, so $$y=0$$ is unstable. Solutions move toward $$y=4$$ from both sides, so $$y=4$$ is stable.

</div>

---

## Logistic differential equation (BC-only)

The logistic model is

$$
\frac{dy}{dt} = ky\left(1-\frac{y}{L}\right)
$$

where $$L$$ is the carrying capacity.

Behavior:

- equilibrium solutions at $$y=0$$ and $$y=L$$,
- growth is fastest near $$y=L/2$$,
- solutions below $$L$$ increase toward $$L$$.

<div class="theorem-box">

**Example.** A population is modeled by $$\dfrac{dy}{dt}=0.1\,y\left(1-\dfrac{y}{2000}\right)$$. State the carrying capacity, the population at which growth is fastest, and the value of $$\dfrac{dy}{dt}$$ at that population.

Comparing with the standard form $$\dfrac{dy}{dt}=ky\left(1-\dfrac{y}{L}\right)$$, we read off $$k=0.1$$ and $$L=2000$$. The carrying capacity is therefore

$$
L = 2000.
$$

Growth is fastest at half the carrying capacity:

$$
y = \frac{L}{2} = 1000.
$$

At $$y=1000$$, the rate of change is

$$
\frac{dy}{dt} = 0.1(1000)\left(1-\frac{1000}{2000}\right) = 100\cdot\frac{1}{2} = 50.
$$

So the population grows fastest, at $$50$$ individuals per unit time, when it reaches $$1000$$.

</div>

---

## Tips for the exam

Differential equation questions often move among four representations:

- a formula for $$dy/dx$$,
- a slope field,
- a particular solution through an initial condition,
- a verbal model of growth, decay, or limiting behavior.

:::strategy{title="Differential equation workflow"}
1. If asked to verify a solution, substitute both $$y$$ and $$dy/dx$$ into the differential equation.
2. If asked to solve, check whether variables can be separated.
3. If an initial condition is given, use it after integrating to find the constant.
4. If asked about concavity, differentiate $$dy/dx=f(x,y)$$ with respect to $$x$$ and remember that $$y$$ depends on $$x$$.
5. If using Euler's method, keep a table of $$x_n$$, $$y_n$$, and slope values.
:::

:::exam{topic="Slope fields"}
AP questions may ask for reasoning without solving the differential equation. Equilibrium solutions, slope signs, and whether solution curves move toward or away from an equilibrium can often be read directly from the slope field or from $$dy/dx$$.
:::
