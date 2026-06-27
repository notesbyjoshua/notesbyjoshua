---
title: "Unit 9: Parametric, Polar, and Vector-Valued Functions (BC-only)"
sidebar:
  order: 9
---

This BC-only unit generalizes single-variable calculus to curves traced in more flexible ways. Instead of always writing $$y$$ as an explicit function of $$x$$, we let both coordinates depend on a parameter or describe curves through angle and radius.

---

## Parametric equations

A parametric curve is given by

$$
x = f(t), \qquad y = g(t).
$$

The same geometric curve can be traced in different ways depending on how $$t$$ changes.

---

## Derivatives for parametric curves

If $$dx/dt \ne 0$$, then

$$
\frac{dy}{dx} = \frac{dy/dt}{dx/dt}.
$$

Horizontal tangent:

$$
\frac{dy}{dt} = 0, \qquad \frac{dx}{dt} \ne 0
$$

Vertical tangent:

$$
\frac{dx}{dt} = 0, \qquad \frac{dy}{dt} \ne 0.
$$

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, axis equal image,
  xmin=-3, xmax=3, ymin=-2.2, ymax=2.2,
  xtick={-2,-1,0,1,2}, ytick={-2,-1,0,1,2},
  grid=both, grid style={gray!18},
  width=8.5cm, height=6.5cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, very thick, samples=260, domain=0:360] ({2*cos(x)},{sin(2*x)});
\addplot[->, orange!85!black, very thick] coordinates {(1.73,0.87) (1.25,0.99)};
\addplot[->, orange!85!black, very thick] coordinates {(-1.73,0.87) (-1.25,0.99)};
\addplot[only marks, mark=*, mark size=1.7pt, blue] coordinates {(1.73,0.87) (-1.73,0.87)};
\node[orange!85!black, anchor=south] at (axis cs:0,1.4) {direction as $t$ increases};
\node[blue, anchor=west] at (axis cs:1.55,0.55) {same curve can be traced twice};
\end{axis}
\end{tikzpicture}
```

<div class="theorem-box">

**Why parametric slope is a ratio.** Along a parametric curve, both $$x$$ and $$y$$ change as $$t$$ changes. The slope compares vertical change to horizontal change:

$$
\frac{dy}{dx}
=
\frac{dy/dt}{dx/dt}.
$$

This is the chain rule rearranged: if $$y$$ changes with $$t$$ and $$x$$ changes with $$t$$, then the rate of $$y$$ with respect to $$x$$ is the rate of $$y$$ with respect to $$t$$ divided by the rate of $$x$$ with respect to $$t$$.

</div>

<div class="theorem-box">

**Example.** A curve is given by $$x(t)=t^2$$ and $$y(t)=t^3-3t$$. Find $$\frac{dy}{dx}$$ at $$t=2$$.

Differentiate each coordinate with respect to $$t$$:

$$
\frac{dx}{dt}=2t,\qquad \frac{dy}{dt}=3t^2-3.
$$

Form the ratio:

$$
\frac{dy}{dx}=\frac{3t^2-3}{2t}.
$$

Now substitute $$t=2$$:

$$
\frac{dy}{dx}=\frac{3(2)^2-3}{2(2)}=\frac{9}{4}.
$$

So the slope of the curve at $$t=2$$ is $$\frac{9}{4}$$.

</div>

---

## Second derivative for parametric curves

$$
\frac{d^2y}{dx^2}
=
\frac{d}{dt}\left(\frac{dy}{dx}\right)\Big/ \frac{dx}{dt}.
$$

---

## Speed and arc length

For a particle moving with position

$$
\langle x(t), y(t) \rangle,
$$

speed is

$$
\sqrt{[x'(t)]^2 + [y'(t)]^2}.
$$

Arc length from $$t=a$$ to $$t=b$$:

$$
L = \int_a^b \sqrt{[x'(t)]^2 + [y'(t)]^2}\,dt.
$$

<div class="theorem-box">

**Example.** A particle moves along the path $$x(t)=t^2$$, $$y(t)=t^3$$ for $$0\le t\le 1$$. Find its speed at $$t=1$$, then find the total distance traveled.

The component velocities are

$$
x'(t)=2t,\qquad y'(t)=3t^2.
$$

Speed is the magnitude of the velocity:

$$
\sqrt{[x'(t)]^2+[y'(t)]^2}=\sqrt{4t^2+9t^4}.
$$

At $$t=1$$ this gives

$$
\sqrt{4+9}=\sqrt{13}.
$$

For the total distance, integrate speed from $$0$$ to $$1$$. Factor $$t^2$$ out of the radical (valid since $$t\ge0$$):

$$
L=\int_0^1 \sqrt{4t^2+9t^4}\,dt=\int_0^1 t\sqrt{4+9t^2}\,dt.
$$

Substitute $$u=4+9t^2$$, so $$du=18t\,dt$$ and $$t\,dt=\frac{1}{18}\,du$$. The bounds become $$u=4$$ at $$t=0$$ and $$u=13$$ at $$t=1$$:

$$
L=\frac{1}{18}\int_4^{13}\sqrt{u}\,du=\frac{1}{18}\cdot\frac{2}{3}u^{3/2}\Big|_4^{13}=\frac{1}{27}\left(13^{3/2}-8\right).
$$

So the distance traveled is

$$
L=\frac{13\sqrt{13}-8}{27}\approx 1.44.
$$

</div>

---

## Polar coordinates

Connections to rectangular coordinates:

$$
x = r\cos\theta, \qquad y = r\sin\theta
$$

$$
r^2 = x^2 + y^2.
$$

Different polar pairs can describe the same point because adding $$2\pi$$ to $$\theta$$ changes nothing and negative $$r$$ reflects through the origin.

---

## Slope in polar form

If $$r=f(\theta)$$, then

$$
\frac{dy}{dx}
=
\frac{r'(\theta)\sin\theta + r(\theta)\cos\theta}
{r'(\theta)\cos\theta - r(\theta)\sin\theta}.
$$

---

## Area in polar coordinates

Area swept from $$\theta=a$$ to $$\theta=b$$:

$$
A = \frac12 \int_a^b [r(\theta)]^2\,d\theta.
$$

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, scale=1.05]
\coordinate (O) at (0,0);
\draw[->, gray!70] (-0.5,0) -- (4.2,0) node[right] {polar axis};
\draw[blue, very thick] plot[smooth, domain=20:82, samples=80] ({(2.4+0.45*cos(2*\x))*cos(\x)}, {(2.4+0.45*cos(2*\x))*sin(\x)});
\draw[orange!30, fill=orange!18] (O) -- ({2.7*cos(36)},{2.7*sin(36)}) arc[start angle=36,end angle=50,radius=2.7] -- cycle;
\draw[blue!55, thick] (O) -- ({2.7*cos(36)},{2.7*sin(36)});
\draw[blue!55, thick] (O) -- ({2.7*cos(50)},{2.7*sin(50)});
\draw[->, red!75!black] (0.65,0) arc[start angle=0,end angle=36,radius=0.65] node[midway, right] {$\theta$};
\node[orange!85!black] at (2.45,1.65) {tiny sector};
\node[align=center] at (1.45,2.75) {area $\approx \frac12 r^2\Delta\theta$};
\end{tikzpicture}
```

<div class="theorem-box">

**Why polar area has the factor $$\frac12$$.** A tiny polar slice looks like a circular sector. A sector with radius $$r$$ and angle $$\Delta\theta$$ has area approximately

$$
\frac12 r^2\Delta\theta.
$$

Adding many tiny sectors gives

$$
\sum \frac12 [r(\theta_i)]^2\Delta\theta.
$$

Taking the limit turns the sum into

$$
\frac12\int_a^b [r(\theta)]^2\,d\theta.
$$

</div>

<div class="theorem-box">

**Example.** Find the area of the region enclosed by the polar curve $$r=2\sin\theta$$.

This curve is traced exactly once as $$\theta$$ runs from $$0$$ to $$\pi$$, so those are the bounds. Apply the polar area formula:

$$
A=\frac12\int_0^{\pi}(2\sin\theta)^2\,d\theta=\frac12\int_0^{\pi}4\sin^2\theta\,d\theta=2\int_0^{\pi}\sin^2\theta\,d\theta.
$$

Use the power-reduction identity $$\sin^2\theta=\frac{1-\cos 2\theta}{2}$$:

$$
2\int_0^{\pi}\frac{1-\cos 2\theta}{2}\,d\theta=\int_0^{\pi}\bigl(1-\cos 2\theta\bigr)\,d\theta.
$$

Integrate term by term:

$$
\left[\theta-\frac{\sin 2\theta}{2}\right]_0^{\pi}=\left(\pi-0\right)-\left(0-0\right)=\pi.
$$

So the enclosed area is $$\pi$$. This matches the fact that $$r=2\sin\theta$$ is a circle of radius $$1$$.

</div>

---

## Arc length in polar form

If $$r=f(\theta)$$, then arc length is

$$
L = \int_a^b \sqrt{[r(\theta)]^2 + [r'(\theta)]^2}\,d\theta.
$$

---

## Vector-valued functions

A vector-valued function in the plane is

$$
\mathbf{r}(t) = \langle x(t), y(t) \rangle
$$

and in space:

$$
\mathbf{r}(t) = \langle x(t), y(t), z(t) \rangle.
$$

Then

$$
\mathbf{r}'(t)
$$

gives velocity and

$$
\mathbf{r}''(t)
$$

gives acceleration.

<div class="theorem-box">

**Example.** A particle has position $$\mathbf{r}(t)=\langle t^2,\,t^3\rangle$$. Find the velocity, the acceleration, and the speed at $$t=2$$.

Differentiate component by component to get velocity:

$$
\mathbf{r}'(t)=\langle 2t,\,3t^2\rangle.
$$

Differentiate again to get acceleration:

$$
\mathbf{r}''(t)=\langle 2,\,6t\rangle.
$$

Evaluate each at $$t=2$$:

$$
\mathbf{r}'(2)=\langle 4,\,12\rangle,\qquad \mathbf{r}''(2)=\langle 2,\,12\rangle.
$$

Speed is the magnitude of the velocity vector:

$$
\lvert\mathbf{r}'(2)\rvert=\sqrt{4^2+12^2}=\sqrt{16+144}=\sqrt{160}=4\sqrt{10}.
$$

So at $$t=2$$ the velocity is $$\langle 4,12\rangle$$, the acceleration is $$\langle 2,12\rangle$$, and the speed is $$4\sqrt{10}$$.

</div>

---

## Parametric curves as motion

Parametric equations describe a curve by telling where a point is at each parameter value:

$$
x=f(t),\qquad y=g(t).
$$

The parameter $$t$$ often represents time, but it does not have to. The same set of points can be traced at different speeds or in different directions depending on the parametrization.

This means a parametric curve has two layers:

- the geometric path,
- the motion along that path.

AP questions may ask about either one.

---

## Tangents and direction

The derivative

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}
$$

compares vertical change to horizontal change along the parametric motion.

A horizontal tangent occurs when vertical motion is momentarily zero while horizontal motion is not:

$$
\frac{dy}{dt}=0,\qquad \frac{dx}{dt}\ne0.
$$

A vertical tangent occurs when horizontal motion is momentarily zero while vertical motion is not:

$$
\frac{dx}{dt}=0,\qquad \frac{dy}{dt}\ne0.
$$

If both derivatives are zero, the test is inconclusive because the particle may be stopped, changing direction, or passing through a more complicated point.

---

## Parametric accumulation

For parametric motion,

$$
\langle x'(t),y'(t)\rangle
$$

is the velocity vector. Its magnitude is speed:

$$
\sqrt{[x'(t)]^2+[y'(t)]^2}.
$$

Integrating speed gives distance traveled:

$$
\int_a^b \sqrt{[x'(t)]^2+[y'(t)]^2}\,dt.
$$

This is different from displacement, which compares only the starting and ending position vectors.

---

## Polar coordinates intuition

In polar coordinates, a point is located by radius and angle:

$$
(r,\theta).
$$

The radius tells distance from the pole, and the angle tells direction. If $$r$$ is negative, the point is plotted in the opposite direction from the angle.

Because angles can differ by multiples of $$2\pi$$, polar representations are not unique. The same point can have many coordinate pairs.

---

## Polar slopes

For a polar curve $$r=f(\theta)$$, convert mentally to parametric form:

$$
x=r\cos\theta,\qquad y=r\sin\theta.
$$

Then

$$
\frac{dy}{dx}
=
\frac{dy/d\theta}{dx/d\theta}.
$$

That is where the polar slope formula comes from. The numerator describes vertical change with respect to angle, and the denominator describes horizontal change with respect to angle.

---

## Polar area

Polar area comes from adding thin sectors. A sector with radius $$r$$ and tiny angle width $$d\theta$$ has area approximately

$$
\frac12 r^2\,d\theta.
$$

Adding these sectors gives

$$
A=\frac12\int_a^b [r(\theta)]^2\,d\theta.
$$

If a curve is traced more than once over an interval, the integral counts the repeated tracing. Choose angle bounds that trace the intended region exactly once whenever possible.

---

## Vector-valued motion

For

$$
\mathbf r(t)=\langle x(t),y(t)\rangle,
$$

velocity is

$$
\mathbf v(t)=\mathbf r'(t),
$$

and acceleration is

$$
\mathbf a(t)=\mathbf r''(t).
$$

Speed is the magnitude of velocity:

$$
\lvert\mathbf v(t)\rvert.
$$

The direction of motion is given by the velocity vector, while acceleration describes how the velocity vector changes.

---

## Component thinking

Vector calculus in AP BC is mostly ordinary single-variable calculus applied component by component:

$$
\frac{d}{dt}\langle f(t),g(t)\rangle
=
\langle f'(t),g'(t)\rangle.
$$

Similarly,

$$
\int \langle f(t),g(t)\rangle\,dt
=
\left\langle\int f(t)\,dt,\int g(t)\,dt\right\rangle.
$$

After doing the component work, interpret the result as a vector, speed, distance, slope, or position depending on the question.

---

## Common mistakes

:::mistakes
- Forgetting that $$dy/dx$$ for parametric or polar curves is a ratio of derivatives.
- Declaring a vertical tangent whenever the denominator is zero without checking the numerator.
- Losing track of the interval of parameter values or angles actually tracing the region.
- Forgetting that polar curves can retrace themselves.
:::

---

## AP reasoning focus

BC curve questions often hide familiar single-variable calculus inside a new coordinate system. The idea is still rate, accumulation, and interpretation, but the independent variable may be $$t$$ or $$\theta$$ instead of $$x$$.

:::checklist
1. For parametric slopes, compute $$dx/dt$$ and $$dy/dt$$ separately before forming $$dy/dx$$.
2. For parametric concavity, differentiate $$dy/dx$$ with respect to $$t$$ and divide by $$dx/dt$$.
3. For polar area, square the radius and use $$\frac12\int r^2\,d\theta$$.
4. For polar intersections, check both same-angle intersections and possible pole intersections.
5. For vector-valued motion, speed is the magnitude of the velocity vector, not a component.
:::

:::exam{topic="BC curves"}
Always state the parameter interval or angle interval being used. The same equation can trace a curve once, multiple times, or only partially depending on the interval.
:::

---

## Area with parametric equations

For a parametric curve

$$
x=x(t),\qquad y=y(t),
$$

the area under the curve can be written as

$$
A=\int y\,dx.
$$

Since

$$
dx=x'(t)\,dt,
$$

we get

$$
A=\int_{t=a}^{t=b} y(t)x'(t)\,dt.
$$

The sign depends on the direction of motion. If $$x(t)$$ decreases over the interval, the integral can be negative even when the geometric area is positive.

### Parametric arc length

The arc length formula

$$
L=\int_a^b\sqrt{[x'(t)]^2+[y'(t)]^2}\,dt
$$

comes from the distance formula on tiny pieces of the curve:

$$
ds\approx\sqrt{(dx)^2+(dy)^2}.
$$

Because $$dx=x'(t)\,dt$$ and $$dy=y'(t)\,dt$$, the speed factor appears inside the integral.

### Polar intersections and tracing

Polar curves require extra care because one point can have many polar representations. When solving intersections, check:

1. same-angle intersections by setting the radii equal,
2. pole intersections where both curves pass through the origin,
3. whether the interval traces the whole curve or only part of it.

### Polar arc length

For $$r=f(\theta)$$, arc length is

$$
L=\int_a^b\sqrt{[r(\theta)]^2+[r'(\theta)]^2}\,d\theta.
$$

This is the polar version of parametric arc length because

$$
x=r\cos\theta,\qquad y=r\sin\theta.
$$

Differentiating those and simplifying gives the expression under the square root.
