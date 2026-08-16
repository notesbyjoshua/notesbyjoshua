---
title: "Unit 8: Applications of Integration"
description: "AP Calculus notes on area, volume, average value, arc length, improper integrals, and integration applications."
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

**Proof (Average value formula).** Suppose the average value of $$f$$ on $$[a,b]$$ is the constant height $$H$$. The rectangle with base length $$b-a$$ and height $$H$$ should have the same signed area as the graph:

$$
H(b-a)=\int_a^b f(x)\,dx.
$$

Solving for $$H$$ gives

$$
H=\frac{1}{b-a}\int_a^b f(x)\,dx.
$$

So the average value is

$$
f_{\text{avg}} = \frac{1}{b-a}\int_a^b f(x)\,dx.
$$

</div>

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

Area between curves is still an accumulation problem. Instead of adding rectangles from the $$x$$-axis to one curve, each thin rectangle measures the distance between two curves, and integrates the function of the distances.

For vertical slices, if $$f(x)$$ is the top function and $$g(x)$$ is the bottom function (in terms of $$y$$ location):

$$
A=\int_a^b f(x) - g(x) \,dx.
$$

For horizontal slices, if $$h(y)$$ is the right function and $$j(y)$$ is the left function (in terms of $$x$$ location)

$$
A=\int_c^d h(y) - j(y) \,dy.
$$

:::warning
Do not assume the first function listed is on top. Test a point or inspect the graph. If the curves cross, split the interval at the crossing.
:::

The subtraction order is chosen so each slice length is nonnegative.

:::strategy
1. Sketch or reason about the region.
2. Find intersection points to determine bounds.
3. Decide whether vertical or horizontal slices describe the region more cleanly.
4. Write top minus bottom for $$dx$$, or right minus left for $$dy$$.
5. Split the integral if the top/bottom or right/left relationship changes.
:::

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
\draw[orange!18, fill=orange!18] (axis cs:0.55,0.3025) -- (axis cs:0.58,0.3364) -- (axis cs:0.58,0.58) -- (axis cs:0.55,0.55) -- cycle;
\node[blue, anchor=south west] at (axis cs:0.25,0.65) {top $y=x$};
\node[red!75!black, anchor=north west] at (axis cs:0.65,0.42) {bottom $y=x^2$};
\draw[<->, orange!85!black, thick] (axis cs:0.565,0.319) -- (axis cs:0.565,0.565);
\end{axis}
\end{tikzpicture}
```

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

```tikz
\usepackage{tikz}
\begin{tikzpicture}[scale=0.9]
\draw[->, gray!70] (-0.3,0) -- (5.2,0) node[right] {$x$};
\draw[->, gray!70] (0,-0.2) -- (0,2.9) node[above] {$y$};
\draw[blue, very thick] plot[smooth] coordinates {(0,0) (1,0.7) (2,1.2) (3,1.45) (4,1.65)};
\draw[red!75!black, very thick] plot[smooth] coordinates {(0,0) (1,0.2) (2,0.35) (3,0.45) (4,0.5)};
\foreach \x/\top/\bot in {1/0.7/0.2,2/1.2/0.35,3/1.45/0.45,4/1.65/0.5} {
  \draw[orange!85!black, thick] (\x,\bot) -- (\x,\top);
  \draw[orange!30, fill=orange!15] (\x,\top) -- ++(0.45,0.28) -- ++(0,-{\top-\bot}) -- (\x,\bot) -- cycle;
}
\node[blue] at (3.3,2.15) {base region};
\node[orange!85!black, align=center] at (5.0,1.35) {cross sections\\perpendicular to $x$};
\end{tikzpicture}
```

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

If you are only revolving one function around an axis, you can use the disk method:

$$
V=\pi\int_a^b [R(x)]^2\,dx.
$$

If you are revolving two functions and taking the middle portion, you can use the washer method:

$$
V=\pi\int_a^b \left([R(x)]^2-[r(x)]^2\right)\,dx.
$$

Here $$R$$ is the outer radius ("top" function) and $$r$$ is the inner radius ("bottom" function). Both radii are distances to the axis of rotation. The formulas in the integrand is just the standard area formula for a circle with the functions as the radius.

```tikz
\usepackage{tikz}
\begin{tikzpicture}[scale=0.9]
\draw[gray!70, thick, ->] (-0.6,0) -- (6.4,0) node[right] {axis};
\fill[blue!15] (0.8,0) ellipse (0.32 and 1.2);
\draw[blue, very thick] (0.8,0) ellipse (0.32 and 1.2);
\draw[orange!85!black, <->] (0.8,0) -- (0.8,1.2) node[midway, right] {$R$};
\node[blue] at (0.8,-1.65) {disk};
\fill[blue!15, even odd rule] (4,0) ellipse (0.42 and 1.35) (4,0) ellipse (0.18 and 0.55);
\draw[blue, very thick] (4,0) ellipse (0.42 and 1.35);
\draw[red!75!black, very thick] (4,0) ellipse (0.18 and 0.55);
\draw[orange!85!black, <->] (4.55,0) -- (4.55,1.35) node[midway, right] {$R$};
\draw[red!75!black, <->] (4,0) -- (4,0.55) node[midway, left] {$r$};
\node[blue] at (4,-1.95) {washer};
\end{tikzpicture}
```

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

<div class="theorem-box">

**Example.** Find the volume formed by revolving the region between $$y=4-x^2$$ and $$y=0$$ about the line $$y=-1$$.

The axis is below the region, so each washer has outer radius from $$y=-1$$ to $$y=4-x^2$$:

$$
R(x)=5-x^2.
$$

The inner radius is from $$y=-1$$ to $$y=0$$:

$$
r(x)=1.
$$

The curve meets the $$x$$-axis at $$x=-2$$ and $$x=2$$. Therefore

$$
V=\pi\int_{-2}^{2}\left[(5-x^2)^2-1^2\right]\,dx.
$$

Expand:

$$
(5-x^2)^2-1=25-10x^2+x^4-1=24-10x^2+x^4.
$$

So

$$
V=\pi\left[24x-\frac{10x^3}{3}+\frac{x^5}{5}\right]_{-2}^{2}
=\frac{1216\pi}{15}.
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

```tikz
\usepackage{tikz}
\begin{tikzpicture}[scale=0.9]
\draw[gray!70, thick, ->] (-0.5,0) -- (5.6,0) node[right] {axis};
\draw[blue, very thick] (2.8,0) ellipse (0.55 and 1.55);
\draw[blue!50, thick] (2.5,-1.55) -- (2.5,1.55);
\draw[blue!50, thick] (3.1,-1.55) -- (3.1,1.55);
\draw[orange!85!black, <->] (0,0.25) -- (2.8,0.25) node[midway, above] {radius};
\draw[red!75!black, <->] (3.55,-1.55) -- (3.55,1.55) node[midway, right] {height};
\draw[gray!60, <->] (2.5,-1.85) -- (3.1,-1.85) node[midway, below] {thickness};
\node[blue] at (2.8,2.0) {thin cylindrical shell};
\end{tikzpicture}
```

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

<div class="theorem-box">

**Example.** Find the volume formed by revolving the region bounded by $$y=x$$ and $$y=x^2$$ about the $$y$$-axis using shells.

The curves intersect where

$$
x=x^2
\quad\Longrightarrow\quad
x=0,1.
$$

Using vertical shells, the radius is $$x$$ and the height is top minus bottom:

$$
h(x)=x-x^2.
$$

Thus

$$
V=2\pi\int_0^1 x(x-x^2)\,dx
=2\pi\int_0^1(x^2-x^3)\,dx.
$$

Evaluate:

$$
V=2\pi\left[\frac{x^3}{3}-\frac{x^4}{4}\right]_0^1
=2\pi\left(\frac13-\frac14\right)
=\frac{\pi}{6}.
$$

</div>

---

## Arc length (BC-only)

Suppose you wanted to find the length traveled along a graph from point $$a$$ to point $$b$$. If you zoom in far enough, each tiny part of a smooth curve looks almost like a straight line (linearization). Arc length adds those tiny straight-line distances.

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

## Surface area of revolution (BC-only)

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

:::strategy
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
