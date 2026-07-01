---
title: "Unit 9: Parametric, Polar, and Vector-Valued Functions (BC-only)"
sidebar:
  order: 9
---

## Parametric equations

A parametric curve is given by

$$
x = f(t), \qquad y = g(t).
$$

The same geometric curve can be traced in different ways depending on how $$t$$ changes. The parameter $$t$$ often represents time, but it does not have to. You can review more of parametric functions in [Unit 10](/notes/ap/precalc/additionaltrig/) of AP Precalculus.

This means a parametric curve has two layers:

- the geometric path,
- the motion along that path.

Sometimes you can eliminate the parameter to recover a rectangular equation. This helps identify the shape, but it can lose information about direction, speed, and the parameter interval.

<div class="theorem-box">

**Example.** Eliminate the parameter for

$$
x=t+1,
\qquad
y=t^2-2.
$$

Solve the first equation for $$t$$:

$$
t=x-1.
$$

Substitute into the equation for $$y$$:

$$
y=(x-1)^2-2.
$$

So the curve lies on the parabola

$$
y=(x-1)^2-2.
$$

The parametric form still gives extra information: as $$t$$ increases, $$x=t+1$$ increases, so the parabola is traced from left to right. Thus, it is always important to always note your endpoints and direction when drawing parametric curves.

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
\addplot[->, orange!85!black, very thick] coordinates {(1.73,0.87) (1.38,1.22)};
\addplot[->, orange!85!black, very thick] coordinates {(-1.73,0.87) (-1.38,1.22)};
\addplot[only marks, mark=*, mark size=1.7pt, blue] coordinates {(1.73,0.87) (-1.73,0.87)};
\node[orange!85!black, anchor=south] at (axis cs:0,1.4) {direction as $t$ increases};
\node[blue, anchor=west] at (axis cs:-1,-1.4) {same curve can be traced twice};
\end{axis}
\end{tikzpicture}
```

</div>

### Derivatives for parametric curves

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

If both derivatives are zero, the test is inconclusive because the particle may be stopped, changing direction, or passing through a more complicated point.

<div class="theorem-box">

**Proof (Derivative of parametric functions).** Suppose

$$
x=f(t)
\qquad
\text{and}
\qquad
y=g(t).
$$

If $$x=f(t)$$ is locally invertible near the value of $$t$$ we care about, then we can think of $$t$$ as a function of $$x$$. In other words, $$t=f^{-1}(x)$$ locally, and

$$
y=g(t)=g(f^{-1}(x)).
$$

Differentiate with respect to $$x$$ using the chain rule:

$$
\frac{dy}{dx}
=
\frac{dy}{dt}\cdot\frac{dt}{dx}.
$$

Since

$$
\frac{dx}{dt}\cdot\frac{dt}{dx}=1,
$$

we have

$$
\frac{dt}{dx}=\frac{1}{dx/dt}
$$

as long as $$dx/dt\ne0$$. Therefore

$$
\frac{dy}{dx}
=
\frac{dy/dt}{dx/dt}.
$$

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

### Second derivative for parametric curves

The second derivative for a parametric curve can be modeled as:

$$
\frac{d^2y}{dx^2}
=
\frac{\frac{d}{dt} (\frac{dy}{dx})}{\frac{dx}{dt}}
$$

This formula means: first find $$dy/dx$$ as a function of $$t$$, then differentiate that slope with respect to $$t$$, then divide by $$dx/dt$$.

<div class="theorem-box">

**Proof (Parametric second derivative formula).** The first derivative $$dy/dx$$ is itself a function of the parameter $$t$$. To find the derivative of this slope with respect to $$x$$, use the same parametric derivative idea:

$$
\frac{d}{dx}\left(\frac{dy}{dx}\right)
=
\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}.
$$

The left side is exactly $$\frac{d^2y}{dx^2}$$, so

$$
\frac{d^2y}{dx^2}
=
\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}.
$$

</div>

<div class="theorem-box">

**Example.** For

$$
x=t^2+1,
\qquad
y=t^3,
$$

find $$\dfrac{d^2y}{dx^2}$$.

First compute

$$
\frac{dx}{dt}=2t,
\qquad
\frac{dy}{dt}=3t^2.
$$

So

$$
\frac{dy}{dx}=\frac{3t^2}{2t}=\frac{3t}{2}
$$

for $$t\ne0$$. Differentiate this with respect to $$t$$:

$$
\frac{d}{dt}\left(\frac{dy}{dx}\right)=\frac{3}{2}.
$$

Now divide by $$dx/dt=2t$$:

$$
\frac{d^2y}{dx^2}
=
\frac{\frac32}{2t}
=
\frac{3}{4t}.
$$

</div>

### Area with parametric equations

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

<div class="theorem-box">

**Example.** Find the area under the parametric curve $$x=t^2$$, $$y=t+1$$ for $$0\le t\le2$$.

Use

$$
A=\int y\,dx.
$$

Since $$dx=x'(t)\,dt$$ and $$x'(t)=2t$$,

$$
A=\int_0^2 (t+1)(2t)\,dt.
$$

Expand:

$$
A=\int_0^2 (2t^2+2t)\,dt.
$$

Evaluate:

$$
A=\left[\frac{2t^3}{3}+t^2\right]_0^2
=\frac{16}{3}+4
=\frac{28}{3}.
$$

</div>

### Speed and arc length

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

Since $$dx=x'(t)\,dt$$ and $$dy=y'(t)\,dt$$, the speed factor appears inside the integral. Integrating speed gives distance traveled, which is different from displacement.

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

As a reminder, polar coordinates involve mapping a point using it's radius from the origin $$r$$ and angle from the positive $$x$$-axis $$\tehta$$. For a point $$(x,y)$$:

$$
x = r\cos\theta, \qquad y = r\sin\theta
$$

$$
r^2 = x^2 + y^2, \qquad \theta = \tan^{-1}(\frac{y}{x})
$$

Different polar pairs can describe the same point because adding $$2\pi$$ to $$\theta$$ changes nothing and negative $$r$$ reflects through the origin. If $$r$$ is negative, the point is plotted in the opposite direction from the angle. You can learn more about polar coordinates in [Unit 10](/notes/ap/precalc/additionaltrig/) of AP Precalculus.

### Slope in polar form

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

If $$r=f(\theta)$$, then

$$
\frac{dy}{dx}
=
\frac{r'(\theta)\sin\theta + r(\theta)\cos\theta}
{r'(\theta)\cos\theta - r(\theta)\sin\theta}.
$$

The second version is more useful when the curve isn't easily written in rectangular form, while the first form is more useful for most curves.

<div class="theorem-box">

**Proof (Polar slope formulas).** A polar curve $$r=f(\theta)$$ can be rewritten parametrically using $$\theta$$ as the parameter:

$$
x=r\cos\theta,
\qquad
y=r\sin\theta.
$$

For the first form, use the parametric slope formula:

$$
\frac{dy}{dx}
=
\frac{dy/d\theta}{dx/d\theta}.
$$

This proves the compact formula. To get the expanded formula, differentiate $$x=r\cos\theta$$ and $$y=r\sin\theta$$ with respect to $$\theta$$. Since $$r$$ depends on $$\theta$$, use the product rule:

$$
\frac{dy}{d\theta}
=
r'(\theta)\sin\theta+r(\theta)\cos\theta,
$$

and

$$
\frac{dx}{d\theta}
=
r'(\theta)\cos\theta-r(\theta)\sin\theta.
$$

Therefore,

$$
\frac{dy}{dx}
=
\frac{r'(\theta)\sin\theta+r(\theta)\cos\theta}
{r'(\theta)\cos\theta-r(\theta)\sin\theta}.
$$

</div>

### Second derivative for polar curves

A polar curve can be treated as parametric with parameter $$\theta$$. After finding $$dy/dx$$, the second derivative is

$$
\frac{d^2y}{dx^2}
=
\frac{\frac{d}{d\theta} (\frac{dy}{dx})}{\frac{dx}{d\theta}}
$$

This is the same structure as parametric second derivatives, just with $$\theta$$ as the parameter.

<div class="theorem-box">

**Example.** Find the slope of the polar curve $$r=2\cos\theta$$ at $$\theta=\frac{\pi}{4}$$.

First compute

$$
r'(\theta)=-2\sin\theta.
$$

Use the polar slope formula:

$$
\frac{dy}{dx}
=
\frac{r'\sin\theta+r\cos\theta}{r'\cos\theta-r\sin\theta}.
$$

At $$\theta=\frac{\pi}{4}$$,

$$
r=2\cos\frac{\pi}{4}=\sqrt2,
\qquad
r'=-2\sin\frac{\pi}{4}=-\sqrt2.
$$

Substitute:

$$
\frac{dy}{dx}
=
\frac{(-\sqrt2)(\frac{\sqrt2}{2})+(\sqrt2)(\frac{\sqrt2}{2})}{(-\sqrt2)(\frac{\sqrt2}{2})-(\sqrt2)(\frac{\sqrt2}{2})}
=
\frac{-1+1}{-1-1}
=0.
$$

So the tangent line is horizontal at that point.

</div>

### Area in polar coordinates

Polar area comes from adding thin sectors. A sector with radius $$r$$ and tiny angle width $$d\theta$$ has area approximately $$\frac12 r^2\,d\theta$$.

Area swept from $$\theta=a$$ to $$\theta=b$$:

$$
A = \frac12 \int_a^b [r(\theta)]^2\,d\theta.
$$

If a curve is traced more than once over an interval, the integral counts the repeated tracing. Choose angle bounds that trace the intended region exactly once whenever possible.

### Area bounded by polar curves

If one polar curve is outside another on $$a\le\theta\le b$$, the area between them is

$$
A=\frac12\int_a^b \left([r_{\text{outer}}(\theta)]^2-[r_{\text{inner}}(\theta)]^2\right)\,d\theta.
$$

The outer curve is the one with the larger distance from the pole on that angle interval (if you are just trying to solve for the area enclosed by one polar curve, just set the inner curve to $$0$$). If the curves switch, split the integral.

Polar curves require extra care because one point can have many polar representations. When solving intersections, check:

1. same-angle intersections by setting the radii equal,
2. pole intersections where both curves pass through the origin,
3. whether the interval traces the whole curve or only part of it.

<div class="theorem-box">

**Proof (Polar area formula).** A tiny polar slice looks like a circular sector. A sector with radius $$r$$ and angle $$\Delta\theta$$ has area approximately

$$
\frac12 r^2\Delta\theta.
$$

This comes from the ordinary sector-area formula. A full circle has angle $$2\pi$$ and area $$\pi r^2$$. A sector with angle $$\Delta\theta$$ is the fraction $$\frac{\Delta\theta}{2\pi}$$ of the full circle, so its area is

$$
\frac{\Delta\theta}{2\pi}\cdot \pi r^2
=
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

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, scale=1.05]
\coordinate (O) at (0,0);
\draw[->, gray!70] (-3.2,0) -- (3.8,0) node[right] {polar axis};
\draw[->, gray!70] (0,-2.2) -- (0,3.2);
\draw[orange!25, fill=orange!18] (O) -- ({(2+cos(35))*cos(35)},{(2+cos(35))*sin(35)})
  plot[smooth, domain=35:55, samples=30] ({(2+cos(\x))*cos(\x)}, {(2+cos(\x))*sin(\x)}) -- cycle;
\draw[blue, very thick] plot[smooth, domain=0:360, samples=240] ({(2+cos(\x))*cos(\x)}, {(2+cos(\x))*sin(\x)});
\draw[blue!55, thick] (O) -- ({(2+cos(35))*cos(35)},{(2+cos(35))*sin(35)});
\draw[blue!55, thick] (O) -- ({(2+cos(55))*cos(55)},{(2+cos(55))*sin(55)});
\draw[->, red!75!black] (0.65,0) arc[start angle=0,end angle=35,radius=0.65] node[midway, right] {$\theta$};
\node[orange!85!black] at (1.85,1.55) {sector slice};
\end{tikzpicture}
```

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

<div class="theorem-box">

**Example.** Set up the area inside $$r=2$$ and outside $$r=1+\cos\theta$$ on the interval where $$2\ge1+\cos\theta$$.

The outer radius is $$2$$ and the inner radius is $$1+\cos\theta$$. The inequality

$$
2\ge1+\cos\theta
$$

is true for all $$\theta$$ because $$\cos\theta\le1$$, with equality at $$\theta=0$$. A full tracing interval is $$0\le\theta\le2\pi$$.

So the area setup is

$$
A=\frac12\int_0^{2\pi}\left[2^2-(1+\cos\theta)^2\right]\,d\theta.
$$

Expand the integrand:

$$
A=\frac12\int_0^{2\pi}\left(4-1-2\cos\theta-\cos^2\theta\right)\,d\theta.
$$

So

$$
A=\frac12\int_0^{2\pi}\left(3-2\cos\theta-\cos^2\theta\right)\,d\theta.
$$

Over $$0\le\theta\le2\pi$$,

$$
\int_0^{2\pi}3\,d\theta=6\pi,
\qquad
\int_0^{2\pi}2\cos\theta\,d\theta=0,
\qquad
\int_0^{2\pi}\cos^2\theta\,d\theta=\pi.
$$

Therefore,

$$
A=\frac12(6\pi-\pi)=\frac{5\pi}{2}.
$$

</div>

### Arc length in polar form

If $$r=f(\theta)$$, then arc length is

$$
L = \int_a^b \sqrt{[r(\theta)]^2 + [r'(\theta)]^2}\,d\theta.
$$

This is the polar version of parametric arc length because $$x=r\cos\theta$$ and $$y=r\sin\theta$$. Differentiating those and simplifying gives the expression under the square root.

<div class="theorem-box">

**Example.** Find the arc length of $$r=2\cos\theta$$ on $$0\le\theta\le\frac{\pi}{2}$$.

First compute

$$
r'(\theta)=-2\sin\theta.
$$

Use the polar arc length formula:

$$
L=\int_0^{\pi/2}\sqrt{(2\cos\theta)^2+(-2\sin\theta)^2}\,d\theta.
$$

Simplify inside the square root:

$$
(2\cos\theta)^2+(-2\sin\theta)^2
=
4\cos^2\theta+4\sin^2\theta
=4.
$$

Thus

$$
L=\int_0^{\pi/2}2\,d\theta=\pi.
$$

</div>

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

gives velocity,

$$
\mathbf{r}''(t)
$$

gives acceleration, and speed is the magnitude of velocity:

$$
\lvert\mathbf v(t)\rvert.
$$

The direction of motion is given by the velocity vector, while acceleration describes how the velocity vector changes.

Vector-valued functions are differentiated and integrated component by component:

$$
\frac{d}{dt}\langle f(t),g(t),h(t)\rangle
=
\langle f'(t),g'(t),h'(t)\rangle,
$$

and

$$
\int \langle f(t),g(t),h(t)\rangle\,dt
=
\left\langle \int f(t)\,dt,\int g(t)\,dt,\int h(t)\,dt\right\rangle.
$$

<div class="theorem-box">

**Proof (Componentwise vector calculus).** Two vectors are equal exactly when their corresponding components are equal. If

$$
\mathbf r(t)=\langle f(t),g(t),h(t)\rangle,
$$

then the derivative is defined by the vector limit

$$
\mathbf r'(t)=\lim_{\Delta t\to0}\frac{\mathbf r(t+\Delta t)-\mathbf r(t)}{\Delta t}.
$$

Substitute the components:

$$
\frac{\mathbf r(t+\Delta t)-\mathbf r(t)}{\Delta t}
=
\left\langle
\frac{f(t+\Delta t)-f(t)}{\Delta t},
\frac{g(t+\Delta t)-g(t)}{\Delta t},
\frac{h(t+\Delta t)-h(t)}{\Delta t}
\right\rangle.
$$

Taking the limit gives

$$
\mathbf r'(t)=\langle f'(t),g'(t),h'(t)\rangle.
$$

Integration works component by component because antiderivatives are checked by differentiating. If

$$
\mathbf R(t)=\left\langle \int f(t)\,dt,\int g(t)\,dt,\int h(t)\,dt\right\rangle,
$$

then $$\mathbf R'(t)=\langle f(t),g(t),h(t)\rangle$$, so $$\mathbf R$$ is an antiderivative of $$\mathbf r$$.

</div>

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

<div class="theorem-box">

**Example.** A particle has velocity

$$
\mathbf v(t)=\langle 2t,\ e^t,\ \cos t\rangle
$$

and initial position

$$
\mathbf r(0)=\langle 1,0,3\rangle.
$$

Find $$\mathbf r(t)$$.

Integrate velocity component by component:

$$
\mathbf r(t)=\left\langle \int 2t\,dt,\int e^t\,dt,\int \cos t\,dt\right\rangle+\mathbf C.
$$

So

$$
\mathbf r(t)=\langle t^2,\ e^t,\ \sin t\rangle+\langle C_1,C_2,C_3\rangle.
$$

Use $$\mathbf r(0)=\langle 1,0,3\rangle$$:

$$
\mathbf r(0)=\langle 0,\ 1,\ 0\rangle+\langle C_1,C_2,C_3\rangle
=
\langle 1,0,3\rangle.
$$

Thus

$$
C_1=1,\qquad C_2=-1,\qquad C_3=3.
$$

Therefore

$$
\mathbf r(t)=\langle t^2+1,\ e^t-1,\ \sin t+3\rangle.
$$

</div>

<div class="theorem-box">

**Example.** A particle has velocity $$\mathbf v(t)=\langle 3t^2,4\rangle$$ for $$0\le t\le2$$. Find its displacement vector and total distance traveled.

The displacement vector is the integral of velocity:

$$
\int_0^2 \langle 3t^2,4\rangle\,dt
=
\left\langle \int_0^2 3t^2\,dt,\int_0^2 4\,dt\right\rangle.
$$

Evaluate component by component:

$$
\left\langle \left[t^3\right]_0^2,\left[4t\right]_0^2\right\rangle
=
\langle 8,8\rangle.
$$

For total distance, integrate speed:

$$
\int_0^2 \lvert \mathbf v(t)\rvert\,dt
=
\int_0^2 \sqrt{(3t^2)^2+4^2}\,dt
=
\int_0^2 \sqrt{9t^4+16}\,dt.
$$

This distance integral does not simplify nicely with basic antiderivatives, so the AP-style answer may be the correct setup:

$$
\text{distance}=\int_0^2 \sqrt{9t^4+16}\,dt.
$$

</div>

---

## Tips for the exam

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
