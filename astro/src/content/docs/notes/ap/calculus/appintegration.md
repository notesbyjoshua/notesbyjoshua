---
title: "Unit 8: Applications of Integration"
sidebar:
  order: 8
---

## Average value of a function

The average value of $$f$$ on $$[a,b]$$ is the constant height that would produce the same signed area over the interval:

On $$[a,b]$$:

$$
f_{\text{avg}} = \frac{1}{b-a}\int_a^b f(x)\,dx.
$$

This is different from the average rate of change. Average value averages outputs; average rate of change compares endpoint outputs.

<div class="theorem-box">

**Example.** Find the average value of $$f(x)=x^2$$ on $$[0,3]$$.

Apply the average value formula with $$a=0$$ and $$b=3$$:

$$
f_{\text{avg}} = \frac{1}{3-0}\int_0^3 x^2\,dx.
$$

The definite integral was computed earlier as $$\int_0^3 x^2\,dx = 9$$, so

$$
f_{\text{avg}} = \frac{1}{3}\cdot 9 = 3.
$$

The average value is $$3$$: a constant height of $$3$$ would enclose the same area over $$[0,3]$$ as the curve does.

</div>

---

## Straight line motion and integration

If velocity is $$v(t)$$, then:

$$
\text{displacement} = \int_a^b v(t)\,dt
$$

$$
\text{total distance} = \int_a^b \lvert v(t) \rvert\,dt
$$

Note that displacement is your net change (signed area), meaning if you traveled around the Earth and traveled back to where you started you have $$0$$ displacement. However, distance measures your total travel, meaning that it is geometric area.

If acceleration is given, integrate acceleration to get change in velocity. If velocity is given, integrate velocity to get change in position. This is just the Fundamental Theorem of Calculus in motion language:

$$
\int_a^b v(t)\,dt=s(b)-s(a),
$$

because $$v(t)=s'(t)$$. Similarly,

$$
\int_a^b a(t)\,dt=v(b)-v(a),
$$

because $$a(t)=v'(t)$$.

So integration does not directly give the final position or final velocity unless you also know an initial value:

$$
s(b)=s(a)+\int_a^b v(t)\,dt,
$$

and

$$
v(b)=v(a)+\int_a^b a(t)\,dt.
$$

<div class="theorem-box">

**Example.** A particle moves with velocity $$v(t)=t^2-4$$ (in suitable units) for $$0\le t\le 3$$. Find its displacement and its total distance traveled.

First find where the velocity changes sign:

$$
t^2-4=0 \;\Longrightarrow\; t=2,
$$

(taking the positive root in the interval). For $$0\le t<2$$ the velocity is negative, and for $$2<t\le3$$ it is positive.

The displacement is the signed integral over the whole interval:

$$
\int_0^3 (t^2-4)\,dt
= \left[\frac{t^3}{3}-4t\right]_0^3
= (9-12)-0
= -3.
$$

For total distance, split at $$t=2$$ and integrate $$\lvert v(t)\rvert$$:

$$
\int_0^2 (4-t^2)\,dt
= \left[4t-\frac{t^3}{3}\right]_0^2
= 8-\frac83
= \frac{16}{3},
$$

$$
\int_2^3 (t^2-4)\,dt
= \left[\frac{t^3}{3}-4t\right]_2^3
= (9-12)-\left(\frac83-8\right)
= -3+\frac{16}{3}
= \frac{7}{3}.
$$

Adding the two pieces,

$$
\text{total distance}=\frac{16}{3}+\frac{7}{3}=\frac{23}{3}.
$$

So the displacement is $$-3$$ while the total distance is $$\frac{23}{3}$$, confirming that the two quantities differ once the velocity changes sign.

</div>

---

## Areas between curves

Area between curves is still an accumulation problem. Instead of adding rectangles from the $$x$$-axis to one curve, each thin rectangle measures the distance between two curves.

For vertical slices,

$$
A=\int_a^b [\text{top}-\text{bottom}]\,dx.
$$

For horizontal slices,

$$
A=\int_c^d [\text{right}-\text{left}]\,dy.
$$

The subtraction order is chosen so each slice length is nonnegative.

:::strategy{title="Area between curves"}
1. Sketch or reason about the region.
2. Find intersection points to determine bounds.
3. Decide whether vertical or horizontal slices describe the region more cleanly.
4. Write top minus bottom for $$dx$$, or right minus left for $$dy$$.
5. Split the integral if the top/bottom or right/left relationship changes.
:::

:::warning
Do not assume the first function listed is on top. Test a point or inspect the graph. If the curves cross, split the interval at the crossing.
:::

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, xmin=-0.2, xmax=1.25, ymin=-0.1, ymax=1.25,
  xtick={0,0.5,1}, ytick={0,0.5,1},
  grid=both, grid style={gray!18},
  width=7.5cm, height=6.5cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, very thick, domain=0:1, samples=80] {x};
\addplot[red!75!black, very thick, domain=0:1, samples=80] {x^2};
\draw[orange!18, fill=orange!18] (axis cs:0.5,0.25) -- (axis cs:0.62,0.3844) -- (axis cs:0.62,0.62) -- (axis cs:0.5,0.5) -- cycle;
\node[blue, anchor=south west] at (axis cs:0.65,0.65) {top $y=x$};
\node[red!75!black, anchor=north west] at (axis cs:0.65,0.42) {bottom $y=x^2$};
\draw[<->, orange!85!black, thick] (axis cs:0.55,0.3025) -- (axis cs:0.55,0.55);
\node[orange!85!black, anchor=west] at (axis cs:0.57,0.43) {top - bottom};
\end{axis}
\end{tikzpicture}
```

<div class="theorem-box">

**Example.** Find the area enclosed by $$y=x$$ and $$y=x^2$$.

First find the intersection points:

$$
x=x^2
\quad\Longrightarrow\quad
x(x-1)=0.
$$

So the curves meet at $$x=0$$ and $$x=1$$. On $$[0,1]$$, the line $$y=x$$ is above $$y=x^2$$. Therefore

$$
A=\int_0^1 (x-x^2)\,dx.
$$

Evaluate:

$$
A=\left[\frac{x^2}{2}-\frac{x^3}{3}\right]_0^1
=
\frac12-\frac13
=
\frac16.
$$

</div>

<div class="theorem-box">

**Example.** Find the area of the region bounded by $$x=y^2$$ and $$x=2-y$$.

These equations are easier to compare using horizontal slices because both are already written as $$x$$ in terms of $$y$$. Find intersections:

$$
y^2=2-y
\quad\Longrightarrow\quad
y^2+y-2=0
\quad\Longrightarrow\quad
(y+2)(y-1)=0.
$$

So $$y=-2$$ and $$y=1$$. On this interval, the right curve is $$x=2-y$$ and the left curve is $$x=y^2$$. The area is

$$
A=\int_{-2}^{1}\left[(2-y)-y^2\right]\,dy.
$$

Evaluate:

$$
A=\left[2y-\frac{y^2}{2}-\frac{y^3}{3}\right]_{-2}^{1}
=
\frac{9}{2}.
$$

</div>

---

## Calculating volumes

Volume problems use the same slicing idea as area problems, but each slice has area instead of length. The general structure is

$$
V=\int A(\text{slice})\,d(\text{slice variable}).
$$

The main work is deciding what the cross-sectional area $$A$$ is.

### Volumes with known cross sections

If a solid has cross-sectional area $$A(x)$$ perpendicular to the $$x$$-axis, then

$$
V=\int_a^b A(x)\,dx.
$$

Common cross sections include squares, rectangles, semicircles, and equilateral triangles.

<div class="theorem-box">

**Example.** A solid has base bounded by $$y=x$$ and $$y=x^2$$ for $$0\le x\le1$$. Cross sections perpendicular to the $$x$$-axis are squares. Find the volume.

The side length of each square is top minus bottom:

$$
s=x-x^2.
$$

So the cross-sectional area is

$$
A(x)=s^2=(x-x^2)^2.
$$

Therefore

$$
V=\int_0^1 (x-x^2)^2\,dx.
$$

Expand and integrate:

$$
V=\int_0^1 (x^2-2x^3+x^4)\,dx
=
\left[\frac{x^3}{3}-\frac{x^4}{2}+\frac{x^5}{5}\right]_0^1
=
\frac{1}{30}.
$$

</div>

### Disk and washer methods

When a region is revolved around an axis, a slice perpendicular to the axis forms a disk or washer.

Disk method:

$$
V=\pi\int_a^b [R(x)]^2\,dx.
$$

Washer method:

$$
V=\pi\int_a^b \left([R(x)]^2-[r(x)]^2\right)\,dx.
$$

Here $$R$$ is the outer radius and $$r$$ is the inner radius. Both radii are distances to the axis of rotation.

<div class="theorem-box">

**Example.** Find the volume formed by revolving the region between $$y=\sqrt{x}$$ and the $$x$$-axis on $$[0,4]$$ about the $$x$$-axis.

The radius is $$R(x)=\sqrt{x}$$. There is no hole, so this is a disk problem:

$$
V=\pi\int_0^4(\sqrt{x})^2\,dx
=
\pi\int_0^4x\,dx.
$$

Evaluate:

$$
V=\pi\left[\frac{x^2}{2}\right]_0^4=8\pi.
$$

</div>

### Cylindrical shells

Shells come from slices parallel to the axis of rotation. A thin shell has approximate volume

$$
dV=2\pi(\text{radius})(\text{height})(\text{thickness}).
$$

Thus

$$
V=2\pi\int_a^b(\text{radius})(\text{height})\,d(\text{slice variable}).
$$

Shells are often cleaner when washers would require solving for inverse functions or splitting the region.

<div class="theorem-box">

**Example.** Find the volume formed by revolving the region under $$y=x^2$$ from $$x=0$$ to $$x=2$$ about the $$y$$-axis using shells.

A vertical slice has radius $$x$$ and height $$x^2$$. Therefore

$$
V=2\pi\int_0^2 x(x^2)\,dx
=
2\pi\int_0^2 x^3\,dx.
$$

Evaluate:

$$
V=2\pi\left[\frac{x^4}{4}\right]_0^2
=
8\pi.
$$

</div>

---

## Arc length

Suppose you wanted to find the length traveled along a graph from point $$a$$ to point $$b$$. If you zoom in far enough, each tiny part of a smooth curve looks almost like a straight line. Arc length adds those tiny straight-line distances.

For one tiny piece of curve, the horizontal change is $$dx$$ and the vertical change is $$dy$$. By the Pythagorean theorem,

$$
dL\approx \sqrt{(dx)^2+(dy)^2}.
$$

Since

$$
dy=f'(x)\,dx,
$$

the length element becomes

$$
dL=\sqrt{1+[f'(x)]^2}\,dx.
$$

For a smooth function $$y=f(x)$$ on $$[a,b]$$:

$$
L = \int_a^b \sqrt{1+[f'(x)]^2}\,dx.
$$

<div class="theorem-box">

**Example.** Find the arc length of $$y=\frac{2}{3}x^{3/2}$$ on $$0\le x\le3$$.

Differentiate:

$$
y'=\sqrt{x}.
$$

Then

$$
L=\int_0^3 \sqrt{1+(\sqrt{x})^2}\,dx
=
\int_0^3 \sqrt{1+x}\,dx.
$$

Use $$u=1+x$$, so $$du=dx$$. The bounds change from $$x=0$$ to $$u=1$$ and from $$x=3$$ to $$u=4$$:

$$
L=\int_1^4 u^{1/2}\,du
=
\left[\frac{2}{3}u^{3/2}\right]_1^4.
$$

So

$$
L=\frac{2}{3}(8-1)=\frac{14}{3}.
$$

</div>

---

## Surface area of revolution

Surface area is different from volume: instead of adding cross-sectional areas, it adds thin bands of surface.

If $$y=f(x)\ge0$$ is revolved around the $$x$$-axis on $$[a,b]$$, then the surface area is

$$
S=2\pi\int_a^b f(x)\sqrt{1+[f'(x)]^2}\,dx.
$$

If $$x=g(y)\ge0$$ is revolved around the $$y$$-axis on $$[c,d]$$, then

$$
S=2\pi\int_c^d g(y)\sqrt{1+[g'(y)]^2}\,dy.
$$

The radius is the distance to the axis of rotation. The square-root factor comes from arc length.

The formula comes from approximating the surface with many thin bands. A tiny piece of curve has length $$ds$$. When that tiny piece rotates around an axis, it sweeps out a thin band whose circumference is $$2\pi r$$ and whose width along the surface is approximately $$ds$$. So

$$
dS\approx 2\pi r\,ds.
$$

For $$y=f(x)$$ revolved around the $$x$$-axis, $$r=f(x)$$ and

$$
ds=\sqrt{1+[f'(x)]^2}\,dx.
$$

<div class="theorem-box">

**Example.** Set up and solve the surface area integral formed by revolving $$y=\sqrt{x}$$ on $$1\le x\le4$$ about the $$x$$-axis.

The radius is

$$
r=f(x)=\sqrt{x}.
$$

The derivative is

$$
f'(x)=\frac{1}{2\sqrt{x}}.
$$

So the surface area is

$$
S=2\pi\int_1^4 \sqrt{x}\sqrt{1+\left(\frac{1}{2\sqrt{x}}\right)^2}\,dx.
$$

Simplify the integrand:

$$
\sqrt{x}\sqrt{1+\frac{1}{4x}}
=
\sqrt{x}\sqrt{\frac{4x+1}{4x}}
=
\frac12\sqrt{4x+1}.
$$

Thus

$$
S=2\pi\int_1^4 \frac12\sqrt{4x+1}\,dx
=
\pi\int_1^4 \sqrt{4x+1}\,dx.
$$

Let $$u=4x+1$$, so $$du=4\,dx$$. When $$x=1$$, $$u=5$$. When $$x=4$$, $$u=17$$. Therefore

$$
S=\frac{\pi}{4}\int_5^{17}u^{1/2}\,du
=
\frac{\pi}{4}\left[\frac{2}{3}u^{3/2}\right]_5^{17}.
$$

So

$$
S=\frac{\pi}{6}\left(17^{3/2}-5^{3/2}\right)
=
\frac{\pi}{6}(17\sqrt{17}-5\sqrt5).
$$

</div>

---

## Applications to statistics: Probability density functions

A probability density function $$p(x)$$ must satisfy

$$
p(x)\ge0
$$

and

$$
\int_{-\infty}^{\infty}p(x)\,dx=1.
$$

For a continuous random variable,

$$
P(a\le X\le b)=\int_a^b p(x)\,dx.
$$

The mean, or expected value, is

$$
\mu=\int_{-\infty}^{\infty}x\,p(x)\,dx.
$$

<div class="theorem-box">

**Example.** Let

$$
p(x)=kx
$$

on $$0\le x\le2$$ and $$p(x)=0$$ elsewhere. Find $$k$$ so that $$p$$ is a probability density function.

The total probability must be $$1$$:

$$
\int_0^2 kx\,dx=1.
$$

Evaluate:

$$
k\left[\frac{x^2}{2}\right]_0^2=1
\quad\Longrightarrow\quad
2k=1.
$$

Thus

$$
k=\frac12.
$$

</div>

---

## Tips for the exam

Applications of integration are mostly about choosing the correct tiny piece.

:::strategy{title="Choosing an integral model"}
1. Area between curves: slice vertically for top minus bottom or horizontally for right minus left.
2. Volume by cross sections: identify the base interval and write the cross-sectional area $$A(x)$$ or $$A(y)$$.
3. Washers/disks: radii are perpendicular to the axis of rotation.
4. Shells: radius is distance to the axis, and height is the length of the slice.
5. Motion: signed velocity gives displacement, while speed gives total distance.
:::

:::exam{topic="Set up before evaluate"}
AP free-response questions often award setup points even when the integral is not evaluated. A correct integral with correct bounds, radii, and slice direction is the main goal.
:::

When curves cross, split the interval at every intersection point. The expression "top minus bottom" or "right minus left" can change from one subinterval to the next.
