---
title: "Unit 8: Applications of Integration"
sidebar:
  order: 8
---

This unit turns integrals into geometry and accumulated quantities. You should be able to move flexibly between signed area, total change, volume, and other physical interpretations.

---

## Area between curves

If $$f(x) \ge g(x)$$ on $$[a,b]$$, then the area between the curves is

$$
\int_a^b [f(x)-g(x)]\,dx.
$$

For horizontal slicing with respect to $$y$$:

$$
\int_c^d [x_{\text{right}}(y)-x_{\text{left}}(y)]\,dy.
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
\draw[orange!18, fill=orange!18] (axis cs:0.5,0.25) -- (axis cs:0.62,0.3844) -- (axis cs:0.62,0.62) -- (axis cs:0.5,0.5) -- cycle;
\node[blue, anchor=south west] at (axis cs:0.65,0.65) {top $y=x$};
\node[red!75!black, anchor=north west] at (axis cs:0.65,0.42) {bottom $y=x^2$};
\draw[<->, orange!85!black, thick] (axis cs:0.55,0.3025) -- (axis cs:0.55,0.55);
\node[orange!85!black, anchor=west] at (axis cs:0.57,0.43) {top - bottom};
\end{axis}
\end{tikzpicture}
```

<div class="theorem-box">

**Example.** Find the area of the region between $$y=x$$ and $$y=x^2$$.

First locate the intersection points by setting the curves equal:

$$
x=x^2 \;\Longrightarrow\; x^2-x=0 \;\Longrightarrow\; x(x-1)=0,
$$

so the curves meet at $$x=0$$ and $$x=1$$. On the interval $$[0,1]$$ the line lies above the parabola, since for example at $$x=\tfrac12$$ we have $$x=\tfrac12 > \tfrac14 = x^2$$. So the top function is $$f(x)=x$$ and the bottom is $$g(x)=x^2$$.

The area is then

$$
\int_0^1 (x-x^2)\,dx
= \left[\frac{x^2}{2}-\frac{x^3}{3}\right]_0^1
= \frac12-\frac13
= \frac16.
$$

So the enclosed area is $$\frac16$$.

</div>

---

## Accumulation and net change

If $$R(t)$$ is a rate, then

$$
\int_a^b R(t)\,dt
$$

gives net change over $$[a,b]$$.

So if $$P'(t)=R(t)$$, then

$$
P(b)-P(a)=\int_a^b R(t)\,dt.
$$

---

## Distance vs displacement

If velocity is $$v(t)$$, then:

$$
\text{displacement} = \int_a^b v(t)\,dt
$$

$$
\text{total distance} = \int_a^b \lvert v(t) \rvert\,dt
$$

Split total distance at sign changes of $$v(t)$$.

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

## Volume by cross sections

If cross-sectional area perpendicular to the axis is $$A(x)$$, then volume is

$$
V = \int_a^b A(x)\,dx.
$$

Common cross sections:

- squares,
- rectangles,
- semicircles,
- equilateral triangles.

<div class="theorem-box">

**Why cross-section volume works.** Slice the solid into very thin slabs. A slab near $$x$$ has approximate volume

$$
A(x)\Delta x.
$$

Adding all slabs gives a Riemann sum. As the slabs become thinner, the sum approaches

$$
\int_a^b A(x)\,dx.
$$

</div>

<div class="theorem-box">

**Example.** A solid has its base in the $$xy$$-plane bounded by $$y=\sqrt{x}$$, the $$x$$-axis, and the line $$x=4$$. Every cross section perpendicular to the $$x$$-axis is a square. Find the volume.

At a given $$x$$, the base region runs from $$y=0$$ up to $$y=\sqrt{x}$$, so the side length of the square cross section is

$$
s=\sqrt{x}.
$$

The cross-sectional area is therefore

$$
A(x)=s^2=(\sqrt{x})^2=x.
$$

Integrating from $$x=0$$ to $$x=4$$ gives

$$
V=\int_0^4 x\,dx
= \left[\frac{x^2}{2}\right]_0^4
= \frac{16}{2}
= 8.
$$

So the volume is $$8$$.

</div>

---

## Disk and washer methods

Disk method:

$$
V = \pi \int_a^b [R(x)]^2\,dx
$$

Washer method:

$$
V = \pi \int_a^b \left([R(x)]^2-[r(x)]^2\right)\,dx
$$

```tikz
\usepackage{tikz}
\begin{tikzpicture}[scale=0.9]
\draw[gray!70, thick, ->] (-0.5,0) -- (6.2,0) node[right] {axis};
\draw[blue, very thick] (0.5,0) ellipse (0.28 and 1.35);
\fill[blue!15] (0.5,0) ellipse (0.28 and 1.35);
\draw[orange!85!black, <->] (0.5,0) -- (0.5,1.35) node[midway, right] {$R$};
\node[blue] at (0.5,-1.75) {disk};
\draw[blue, very thick] (3.8,0) ellipse (0.36 and 1.55);
\fill[blue!15, even odd rule] (3.8,0) ellipse (0.36 and 1.55) (3.8,0) ellipse (0.16 and 0.65);
\draw[red!75!black, very thick] (3.8,0) ellipse (0.16 and 0.65);
\draw[orange!85!black, <->] (3.8,0) -- (3.8,1.55) node[midway, right] {$R$};
\draw[red!75!black, <->] (3.45,0) -- (3.45,0.65) node[midway, left] {$r$};
\node[blue] at (3.8,-1.95) {washer};
\node[align=center] at (5.2,1.45) {area\\$\pi R^2-\pi r^2$};
\end{tikzpicture}
```

<div class="theorem-box">

**Why washers use squared radii.** A washer is a large disk with a smaller disk removed. The cross-sectional area is therefore

$$
\pi R^2-\pi r^2=\pi(R^2-r^2).
$$

Integrating these cross-sectional areas stacks the washers into the full solid.

</div>

<div class="theorem-box">

**Example.** Find the volume of the solid formed by revolving the region under $$y=\sqrt{x}$$ on $$[0,4]$$ about the $$x$$-axis.

A vertical slice perpendicular to the $$x$$-axis sweeps out a disk whose radius is the height of the curve,

$$
R(x)=\sqrt{x}.
$$

Using the disk method,

$$
V=\pi\int_0^4 [R(x)]^2\,dx
=\pi\int_0^4 (\sqrt{x})^2\,dx
=\pi\int_0^4 x\,dx.
$$

Evaluating the integral,

$$
V=\pi\left[\frac{x^2}{2}\right]_0^4
=\pi\cdot\frac{16}{2}
=8\pi.
$$

So the volume of the solid of revolution is $$8\pi$$.

</div>

---

## Volume by cylindrical shells

$$
V = 2\pi \int_a^b (\text{radius})(\text{height})\,dx.
$$

Shell method is often simpler when washers would require solving for inverse functions or splitting many pieces.

<div class="theorem-box">

**Why shells use $$2\pi rh$$.** A thin vertical slice rotated around an axis sweeps out a thin cylindrical shell. The shell's circumference is $$2\pi r$$, its height is $$h$$, and its thickness is $$\Delta x$$. So its volume is approximately

$$
(2\pi r)(h)\Delta x.
$$

Adding the shells and taking the limit gives the shell integral.

</div>

<div class="theorem-box">

**Example.** Find the volume generated by revolving the region bounded by $$y=x^2$$, the $$x$$-axis, and $$x=2$$ about the $$y$$-axis, using cylindrical shells.

A vertical slice at position $$x$$ has radius equal to its distance from the $$y$$-axis, namely $$x$$, and height equal to the curve,

$$
\text{radius}=x,\qquad \text{height}=x^2.
$$

The shell formula gives

$$
V=2\pi\int_0^2 (\text{radius})(\text{height})\,dx
=2\pi\int_0^2 x\cdot x^2\,dx
=2\pi\int_0^2 x^3\,dx.
$$

Evaluating,

$$
V=2\pi\left[\frac{x^4}{4}\right]_0^2
=2\pi\cdot\frac{16}{4}
=2\pi\cdot 4
=8\pi.
$$

So the volume is $$8\pi$$.

</div>

---

## Arc length

For a smooth function $$y=f(x)$$ on $$[a,b]$$:

$$
L = \int_a^b \sqrt{1+[f'(x)]^2}\,dx.
$$

This is useful BC-level enrichment even when not emphasized heavily in every AP class.

---

## Improper integrals

An integral is improper if:

- an interval is infinite, or
- the integrand is unbounded.

Interpret through limits, for example:

$$
\int_1^\infty \frac{1}{x^2}\,dx
=
\lim_{b \to \infty} \int_1^b \frac{1}{x^2}\,dx.
$$

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\int_1^\infty \frac{1}{x^2}\,dx.$$

Because the interval is infinite, rewrite the integral as a limit with a finite upper endpoint $$b$$:

$$
\int_1^\infty \frac{1}{x^2}\,dx
=\lim_{b\to\infty}\int_1^b x^{-2}\,dx.
$$

Compute the inner integral using $$\int x^{-2}\,dx=-x^{-1}$$:

$$
\int_1^b x^{-2}\,dx
=\left[-\frac1x\right]_1^b
=-\frac1b+1
=1-\frac1b.
$$

Now take the limit:

$$
\lim_{b\to\infty}\left(1-\frac1b\right)=1.
$$

The limit is finite, so the improper integral converges and its value is $$1$$.

</div>

---

## Choosing a slicing direction

Applications of integration usually begin with a geometric slice.

Vertical slices use $$dx$$ and usually compare top minus bottom:

$$
\int_a^b [\text{top}-\text{bottom}]\,dx.
$$

Horizontal slices use $$dy$$ and usually compare right minus left:

$$
\int_c^d [\text{right}-\text{left}]\,dy.
$$

The correct choice depends on which direction makes the region easiest to describe without unnecessary splitting.

<div class="theorem-box">

**Key idea.** Draw the slice first, then write the formula. The slice tells you the width, height, radius, or cross-sectional area.

</div>

---

## Area between curves

Area between curves is geometric area, so it must be nonnegative. If the curves cross, the "top" and "bottom" functions may switch. Split the interval at intersection points so the subtraction matches the geometry on each piece.

For functions of $$y$$, use right minus left instead. This is often cleaner when the region is bounded sideways or when solving for $$y$$ would produce multiple branches.

---

## Volumes from cross sections

For cross-sectional volume, the integral adds thin slabs:

$$
dV=A(x)\,dx.
$$

The base region determines the side length, diameter, radius, or height needed for the cross-sectional area formula.

Common area formulas:

$$
\text{square: } A=s^2,
$$

$$
\text{semicircle: } A=\frac12\pi r^2,
$$

$$
\text{equilateral triangle: } A=\frac{\sqrt3}{4}s^2.
$$

The calculus part is the accumulation. The geometry part is building $$A(x)$$ correctly.

---

## Washers vs shells

Washers and disks come from slices perpendicular to the axis of rotation. Shells come from slices parallel to the axis of rotation.

Washer volume:

$$
V=\pi\int [R^2-r^2]\,d(\text{slice variable}).
$$

Shell volume:

$$
V=2\pi\int(\text{radius})(\text{height})\,d(\text{slice variable}).
$$

The radius is always a distance to the axis of rotation, so it should be nonnegative. If the axis is not one of the coordinate axes, write the distance carefully.

---

## Motion and accumulation

If velocity is given, displacement and distance are different:

$$
\text{displacement}=\int_a^b v(t)\,dt,
$$

$$
\text{total distance}=\int_a^b \lvert v(t)\rvert\,dt.
$$

Displacement keeps direction. Total distance counts all movement as positive. Split total-distance integrals at times when velocity changes sign.

If acceleration is given, integrate acceleration to get change in velocity. If velocity is given, integrate velocity to get change in position.

---

## Arc length intuition

Arc length adds tiny straight-line distances along a curve. For $$y=f(x)$$,

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

This explains why the derivative appears inside the arc length formula: the steepness of the curve affects how much length is packed into each small horizontal interval.

---

## Improper integral meaning

Improper integrals are always limits. Infinite intervals are handled by letting an endpoint move without bound. Infinite discontinuities are handled by approaching the problematic point from the correct side.

Convergence means the limiting accumulated value is finite. Divergence means the accumulated value does not settle to a finite number.

---

## Common mistakes

:::mistakes
- Forgetting to split total distance when velocity changes sign.
- Using top-minus-bottom when the curves cross inside the interval without splitting.
- Using wrong radii in washer problems.
- Mixing shell and washer formulas without matching the slice geometry.
:::

---

## AP reasoning focus

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

---

## Work and force

Work is another accumulation idea. If a force $$F(x)$$ moves an object along a line from $$x=a$$ to $$x=b$$, then

$$
W=\int_a^b F(x)\,dx.
$$

If the force is constant, this reduces to

$$
W=F(b-a).
$$

If the force changes with position, the integral adds many tiny pieces of work:

$$
dW=F(x)\,dx.
$$

### Springs

Hooke's Law says that the force needed to stretch or compress a spring by $$x$$ units is

$$
F(x)=kx,
$$

where $$k$$ is the spring constant. The work needed to stretch the spring from $$x=a$$ to $$x=b$$ is

$$
W=\int_a^b kx\,dx.
$$

### Average value in applications

The average value formula

$$
f_{\text{avg}}=\frac{1}{b-a}\int_a^b f(x)\,dx
$$

appears in physical contexts too. It gives the constant value that would create the same total accumulation over the interval.

### Solids: cross-section mindset

Every volume method has the same backbone:

$$
V=\int A(\text{slice})\,d(\text{slice variable}).
$$

The main challenge is writing $$A$$ correctly. For squares, semicircles, disks, washers, and shells, the geometry of the slice determines the formula before any integration happens.
