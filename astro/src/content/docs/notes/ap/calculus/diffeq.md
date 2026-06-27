---
title: "Unit 7: Differential Equations"
sidebar:
  order: 7
---

---

Differential equations describe how a quantity changes rather than giving the quantity directly. In AP Calculus, the focus is on slope fields, separable equations, logistic models, and interpreting solution behavior.

---

## General and particular solutions

A differential equation relates a function and its derivatives. A **general solution** contains a constant of integration, so it represents a family of functions.

If an initial condition is given, such as $$y(1)=5$$, you solve for the constant to get the particular solution.

---

## Slope fields

A slope field shows small line segments representing $$dy/dx$$ at many points.

:::strategy{title="Analyzing a slope field"}
- look for where slopes are zero,
- look for where slopes are positive/negative,
- identify equilibrium solutions,
- sketch a solution curve that follows the segment directions.
:::

```tikz
\usepackage{tikz}
\begin{tikzpicture}[scale=0.85]
\draw[->, gray!70] (-3.2,0) -- (3.4,0) node[right] {$x$};
\draw[->, gray!70] (0,-2.5) -- (0,3) node[above] {$y$};
\foreach \x in {-3,-2,-1,0,1,2,3} {
  \foreach \y in {-2,-1,0,1,2} {
    \pgfmathsetmacro{\m}{0.55*(1-\y)}
    \pgfmathsetmacro{\ang}{atan(\m)}
    \draw[gray!65, rotate around={\ang:(\x,\y)}] (\x-0.18,\y) -- (\x+0.18,\y);
  }
}
\draw[red!75!black, thick, dashed] (-3,1) -- (3,1) node[right] {equilibrium $y=1$};
\draw[blue, very thick, domain=-3:3, samples=80] plot (\x,{1-1.6*exp(-0.55*(\x+3))});
\draw[blue, very thick, domain=-3:3, samples=80] plot (\x,{1+1.4*exp(-0.55*(\x+3))});
\node[blue, anchor=west] at (2.2,0.75) {solutions follow slopes};
\end{tikzpicture}
```

---

## Euler's method

Starting from $$(x_0,y_0)$$ with step size $$h$$:

$$
y_{n+1} = y_n + h f(x_n,y_n)
$$

where

$$
\frac{dy}{dx} = f(x,y).
$$

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

If

$$
\frac{dy}{dx} = g(x)h(y),
$$

rewrite as

$$
\frac{1}{h(y)}\,dy = g(x)\,dx
$$

and integrate both sides.

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

Not every AP Calculus class spends much time on the full integrating-factor method, but recognizing the form is useful because it shows up in modeling. The standard method is to multiply by an integrating factor

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

**Why proportional growth gives exponentials.** If

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

## Logistic differential equation

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

**Why logistic growth slows down.** The factor

$$
1-\frac{y}{L}
$$

measures how much room remains before the carrying capacity. When $$y$$ is small, this factor is close to $$1$$, so the model behaves almost exponentially. When $$y$$ is close to $$L$$, this factor is close to $$0$$, so the growth rate becomes small. At $$y=L$$, the growth rate is exactly $$0$$.

</div>

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

## Equilibrium solutions and stability

Equilibrium solutions are constant solutions where $$dy/dx = 0$$.

Stability:

- stable if nearby solutions move toward it,
- unstable if nearby solutions move away.

For autonomous equations $$dy/dx = f(y)$$, a sign chart on $$f(y)$$ is an efficient way to classify equilibria.

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

This helps determine concavity of solution curves.

---

## What differential equations describe

A differential equation usually does not tell you the value of a function directly. It tells you how the function changes.

For

$$
\frac{dy}{dx}=f(x,y),
$$

the slope at a point depends on the coordinates of that point. A solution curve is a function whose tangent slope matches the differential equation everywhere it passes through.

This is why slope fields are useful: they show the local direction a solution must follow before you solve anything symbolically.

---

## Slope fields as visual solutions

In a slope field, each small segment represents the slope assigned by the differential equation at that point.

Useful things to notice:

- rows or columns where slopes repeat,
- places where slopes are zero,
- regions where slopes are positive or negative,
- equilibrium solutions,
- whether solution curves appear to move toward or away from equilibria.

Solution curves should follow the little segments smoothly. They should not cross each other for the same initial value problem because one input-output point should determine one local direction.

---

## Euler's method intuition

Euler's method is repeated linear approximation. At each step, use the current slope to move forward:

$$
\text{new }y
=
\text{old }y
+
(\text{step size})(\text{slope at old point}).
$$

The approximation improves when the step size is smaller, but AP questions usually care more about setting up the method correctly than about perfect numerical accuracy.

Keep track of both coordinates:

$$
x_{n+1}=x_n+h,
$$

$$
y_{n+1}=y_n+h f(x_n,y_n).
$$

---

## Separating variables carefully

A separable equation has the variables separated into an $$x$$ part and a $$y$$ part:

$$
\frac{dy}{dx}=g(x)h(y).
$$

The goal is to move all $$y$$ factors with $$dy$$ and all $$x$$ factors with $$dx$$:

$$
\frac{1}{h(y)}\,dy=g(x)\,dx.
$$

Then integrate both sides. The constant of integration belongs after integration, and an initial condition turns the general solution into a particular solution.

---

## Exponential models

The model

$$
\frac{dy}{dt}=ky
$$

means the rate of change is proportional to the current amount.

If $$k>0$$, the quantity grows. If $$k<0$$, the quantity decays. The solution has the form

$$
y=Ce^{kt}.
$$

The constant $$C$$ is the initial amount when $$t=0$$, assuming the model starts at $$t=0$$.

---

## Logistic model behavior

The logistic equation

$$
\frac{dy}{dt}=ky\left(1-\frac{y}{L}\right)
$$

adds a limiting capacity. The factor $$y$$ makes growth proportional to the current population, while the factor

$$
1-\frac{y}{L}
$$

slows growth as $$y$$ approaches $$L$$.

The equilibrium solutions are $$y=0$$ and $$y=L$$. For positive populations below $$L$$, solutions increase toward $$L$$. Growth is fastest when $$y=L/2$$ because that is where the logistic rate is largest.

---

## Concavity of solution curves

For a differential equation, concavity often comes from differentiating the slope expression.

If

$$
\frac{dy}{dx}=f(x,y),
$$

then

$$
\frac{d^2y}{dx^2}
=
\frac{d}{dx}[f(x,y)].
$$

When differentiating, remember that $$y$$ depends on $$x$$. After finding $$d^2y/dx^2$$, use its sign to describe whether solution curves are concave up or concave down.

---

## Common mistakes

:::mistakes
- Separating variables incorrectly.
- Forgetting the constant of integration.
- Solving for the constant before using the initial condition carefully.
- Sketching slope-field solutions that cross each other or violate the displayed slope directions.
:::

---

## Intervals of validity

A solution to a differential equation may be valid only on an interval, even if the algebraic expression looks broader. Restrictions can come from:

- division by zero during separation,
- logarithms introduced while integrating,
- initial conditions that choose one branch,
- points where the differential equation itself is undefined.

When solving an initial value problem, the interval of validity is usually the largest interval containing the initial input where the solution and differential equation both make sense.

### Equilibrium solutions

For an autonomous differential equation

$$
\frac{dy}{dx}=f(y),
$$

an equilibrium solution occurs when

$$
f(y)=0.
$$

At those $$y$$-values, the slope is zero for every $$x$$, so the solution can remain constant.

To classify stability:

- if nearby solutions move toward the equilibrium, it is stable,
- if nearby solutions move away, it is unstable,
- if solutions move toward from one side and away from the other, it is semistable.

### Logistic model details

The logistic model

$$
\frac{dP}{dt}=kP\left(1-\frac{P}{L}\right)
$$

has two equilibrium solutions:

$$
P=0
\qquad\text{and}\qquad
P=L.
$$

The value $$L$$ is the carrying capacity. Growth is fastest when $$P=L/2$$ because the product $$P(1-P/L)$$ is largest halfway between the equilibria.

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
