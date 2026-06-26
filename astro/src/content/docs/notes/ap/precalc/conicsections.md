---
title: "Unit 12: Conic Sections"
sidebar:
  order: 9
---

---

## Introduction to conics

A conic section is the curve you get when a plane meets a right circular cone: circle, ellipse, parabola, or hyperbola (the “degenerate” cases: point, line, pair of lines show up when the plane passes through the vertex in special ways and will not be talked about here).

In a rectangular coordinate system, any conic can be written as a degree-two equation in $$x$$ and $$y$$:

$$
Ax^{2} + Bxy + Cy^{2} + Dx + Ey + F = 0
$$

with $$A,B,C$$ not all zero. In most precalculus work $$B = 0$$ (no tilted axes); then the graph is a parabola, ellipse, or hyperbola depending on the signs of $$A$$ and $$C$$ after completing squares.

The eccentricity $$e$$ measures how “stretched” the conic is relative to a circle ($$e = 0$$). Another method of defining conics is using a focus and directrix: fix a focus and a directrix (a line); the conic is the set of points $$P$$ whose distance to the focus equals $$e$$ times the perpendicular distance to the directrix. Then $$0 < e < 1$$ gives an ellipse, $$e = 1$$ a parabola, and $$e > 1$$ a hyperbola. We will prove the focus-directrix property in a later section.

---

## Circles

One of the more simpler conic sections is the circle. A circle is defined as the set of points equidistant from a fixed focus. For a circle, $$e = 0$$. Since circles are extensively talked about in other sections, I will not go in detail about them.

---

## Parabolas

A parabola is defined as the set of points equidistant from a fixed focus and a fixed directrix (a line). For a parabola,  $$e = 1$$.

### Standard forms (vertex at $$(h,k)$$, axis parallel to a coordinate axis)

Opening up or down (vertical axis):

$$
(x - h)^{2} = 4p(y - k)
$$

- Vertex: $$(h,k)$$.
- Focus: $$(h,\, k + p)$$.
- Directrix: $$y = k - p$$.
- If $$p > 0$$, opens upward; if $$p < 0$$, opens downward.

Opening left or right (horizontal axis):

$$
(y - k)^{2} = 4p(x - h)
$$

- Vertex: $$(h,k)$$.
- Focus: $$(h + p,\, k)$$.
- Directrix: $$x = h - p$$.
- If $$p > 0$$, opens to the right; if $$p < 0$$, opens to the left.

The quantity $$\lvert 4p\rvert$$ controls how “wide” the parabola is: larger $$\lvert p\rvert$$ means a more gradual curve.

<div class="theorem-box">

**Proof (Standard equation of a vertical parabola).** Suppose the vertex is $$(h,k)$$, the focus is $$(h,k+p)$$, and the directrix is

$$
y=k-p.
$$

Let $$P=(x,y)$$ be a point on the parabola. By definition,

$$
PF=d(P,\text{directrix}).
$$

The distance to the focus is

$$
PF=\sqrt{(x-h)^2+(y-(k+p))^2}.
$$

The perpendicular distance to the directrix is

$$
\lvert y-(k-p)\rvert.
$$

For points on the parabola, squaring both sides gives

$$
(x-h)^2+(y-k-p)^2=(y-k+p)^2.
$$

Expand the two squared terms involving $$y$$:

$$
(x-h)^2+(y-k)^2-2p(y-k)+p^2=(y-k)^2+2p(y-k)+p^2.
$$

Cancel common terms:

$$
(x-h)^2=4p(y-k).
$$

This gives the standard form for a vertical parabola.

</div>

### Latus rectum

The latus rectum is the chord through the focus perpendicular to the axis of symmetry, with a length of $$\lvert 4p\rvert$$ (same as the absolute coefficient in the standard forms above). It should be parallel to the directrix.

For

$$
(x-h)^2=4p(y-k),
$$

the latus rectum endpoints are

$$
(h-2p,k+p)
$$

and

$$
(h+2p,k+p).
$$

For

$$
(y-k)^2=4p(x-h),
$$

the latus rectum endpoints are

$$
(h+p,k-2p)
$$

and

$$
(h+p,k+2p).
$$

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, scale=0.85]
\draw[->, gray!70] (-4.2,0) -- (4.2,0) node[right] {$x$};
\draw[->, gray!70] (0,-2.2) -- (0,5.2) node[above] {$y$};
\draw[blue, very thick, domain=-3.6:3.6, samples=120] plot (\x,{0.25*\x*\x});
\coordinate (V) at (0,0);
\coordinate (F) at (0,1);
\draw[red!75!black, dashed, thick] (-4,-1) -- (4,-1) node[right] {directrix};
\draw[orange!85!black, thick] (-2,1) -- (2,1);
\fill (V) circle (2pt) node[below right] {vertex $(h,k)$};
\fill[red!80!black] (F) circle (2pt) node[above right] {focus $(h,k+p)$};
\fill (-2,1) circle (1.5pt) node[above left] {latus rectum};
\fill (2,1) circle (1.5pt);
\draw[<->] (2.35,0) -- (2.35,1) node[midway, right] {$p$};
\draw[<->] (2.7,0) -- (2.7,-1) node[midway, right] {$p$};
\node[align=center] at (0,4.5) {$(x-h)^2=4p(y-k)$};
\end{tikzpicture}
```

<div class="theorem-box">

**Example.** For

$$
x^2=16y,
$$

compare with

$$
(x-h)^2=4p(y-k).
$$

Here $$h=0$$, $$k=0$$, and $$4p=16$$, so $$p=4$$. Therefore:

- Vertex: $$(0,0)$$.
- Focus: $$(0,4)$$.
- Directrix: $$y=-4$$.
- Focal width: $$16$$.
- Latus rectum endpoints: $$(-8,4)$$ and $$(8,4)$$.

</div>

### Applications of parabolas

For a parabola, any ray starting from the focus and reflecting off of the surface of the parabola will always be perpendicular to the latus rectum (the converse is true as well)! This makes parabolas especially useful for things like flashlights and mirrors.

<div class="theorem-box">

**Extension.** Prove the theorem stated above is true. One theorem you make find useful is the Law of Reflection: A ray reflecting off the surface will have the same angle of reflection as angle of incidence.

</div>

In photography, lenses are made up of portions of parabolas. Suppose you have a chord (parallel to the directrix) with half-length $$d$$. Define the focal ratio as $$\frac{p}{d}$$. This is what the $$f$$-stops are defined as in photography.

---

## Ellipses

An ellipse is defined as the set of points the sum of whose distances to two fixed foci is constant (greater than the distance between the foci).

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, scale=0.95]
\draw[->, gray!70] (-4.2,0) -- (4.2,0) node[right] {$x$};
\draw[->, gray!70] (0,-2.4) -- (0,2.4) node[above] {$y$};
\draw[blue, very thick] (0,0) ellipse (3 and 1.55);
\draw[orange!80!black, thick] (-3,0) -- (3,0) node[midway, below] {major axis};
\draw[green!50!black, thick] (0,-1.55) -- (0,1.55) node[midway, right] {minor axis};
\fill (0,0) circle (1.6pt) node[below right] {center};
\fill[red!80!black] (-1.9,0) circle (2pt) node[above] {$F_1$};
\fill[red!80!black] (1.9,0) circle (2pt) node[above] {$F_2$};
\fill (-3,0) circle (1.6pt) node[below left] {vertex};
\fill (3,0) circle (1.6pt) node[below right] {vertex};
\draw[dashed] (-1.9,0) -- (1.45,1.35) -- (1.9,0);
\node[align=center] at (0,-2.05) {$PF_1+PF_2$ is constant for every point $P$ on the ellipse};
\end{tikzpicture}
```

### Basic definitions

In an ellipse, the major axis is always defined as the longer axis, while the minor axis is defined as the shorter axis. The vertices of a ellipse are always defined as the endpoints of the major axis. The endpoints of the minor axis don't really get a special name. The semi-major and semi-minor axes are defined as half of their respective axes.

### Horizontal major axis (center $$(h,k)$$)

$$
\frac{(x - h)^{2}}{a^{2}} + \frac{(y - k)^{2}}{b^{2}} = 1, \qquad a > b > 0
$$

- Center: $$(h,k)$$.
- Vertices (ends of major axis): $$(h \pm a,\, k)$$.
- Co-vertices (ends of minor axis): $$(h,\, k \pm b)$$.
- Foci: $$(h \pm c,\, k)$$ where $$c^{2} = a^{2} - b^{2}$$.
- Major axis length $$2a$$, minor axis length $$2b$$.
- Eccentricity: $$\displaystyle e = \frac{c}{a}$$ with $$0 < e < 1$$.

### Vertical major axis

$$
\frac{(x - h)^{2}}{b^{2}} + \frac{(y - k)^{2}}{a^{2}} = 1, \qquad a > b > 0
$$

- Vertices: $$(h,\, k \pm a)$$; co-vertices: $$(h \pm b,\, k)$$.
- Foci: $$(h,\, k \pm c)$$ with $$c^{2} = a^{2} - b^{2}$$.

If the denominators are equal ($$a = b$$), the ellipse is a circle of radius $$a$$.

<div class="theorem-box">

**Proof (Standard equation of an ellipse, horizontal major axis).** Place the foci on the $$x$$-axis at $$F_{1} = (-c,0)$$ and $$F_{2} = (c,0)$$ with $$0 < c < a$$. The ellipse is the set of points $$P = (x,y)$$ such that the sum of distances to the foci is the constant $$2a$$:

$$
\sqrt{(x+c)^{2} + y^{2}} + \sqrt{(x-c)^{2} + y^{2}} = 2a.
$$

Write $$r_{1} = \sqrt{(x+c)^{2} + y^{2}}$$ and $$r_{2} = \sqrt{(x-c)^{2} + y^{2}}$$, so $$r_{1} + r_{2} = 2a$$. Isolate $$r_{1} = 2a - r_{2}$$ and square (both sides are nonnegative):

$$
(x+c)^{2} + y^{2} = 4a^{2} - 4a r_{2} + (x-c)^{2} + y^{2}.
$$

Expand and cancel $$x^{2}$$, $$y^{2}$$, and $$c^{2}$$:

$$
4cx = 4a^{2} - 4a r_{2} \quad\Longrightarrow\quad a r_{2} = a^{2} - cx.
$$

Since $$r_{2} \ge 0$$ and (one can show) $$\lvert cx\rvert \le a^{2}$$ on the ellipse, the right-hand side is nonnegative, so we may square again:

$$
a^{2}\bigl((x-c)^{2} + y^{2}\bigr) = (a^{2} - cx)^{2}.
$$

Multiply out:

$$
a^{2}x^{2} - 2a^{2}cx + a^{2}c^{2} + a^{2}y^{2} = a^{4} - 2a^{2}cx + c^{2}x^{2}.
$$

Cancel $$-2a^{2}cx$$ and rearrange:

$$
a^{2}x^{2} - c^{2}x^{2} + a^{2}y^{2} = a^{4} - a^{2}c^{2}
\quad\Longrightarrow\quad
(a^{2} - c^{2})x^{2} + a^{2}y^{2} = a^{2}(a^{2} - c^{2}).
$$

Define $$b^{2} = a^{2} - c^{2} > 0$$. Then $$b^{2}x^{2} + a^{2}y^{2} = a^{2}b^{2}$$. Divide by $$a^{2}b^{2}$$:

$$
\frac{x^{2}}{a^{2}} + \frac{y^{2}}{b^{2}} = 1.
$$

Thus the two-focus definition yields the standard equation with $$c^{2} = a^{2} - b^{2}$$. Translating the center to $$(h,k)$$ replaces $$x$$ by $$x-h$$ and $$y$$ by $$y-k$$, giving $$\dfrac{(x-h)^{2}}{a^{2}} + \dfrac{(y-k)^{2}}{b^{2}} = 1$$.

For a vertical major axis, the same algebra applies after swapping the roles of $$x$$ and $$y$$ (foci on the vertical line through the center), which produces $$\dfrac{(x-h)^{2}}{b^{2}} + \dfrac{(y-k)^{2}}{a^{2}} = 1$$ with $$a > b$$ and again $$c^{2} = a^{2} - b^{2}$$.

</div>

### Graphing an ellipse

:::strategy{title="Graphing an ellipse in standard form"}
1. Find the center $$(h,k)$$.
2. Identify the larger denominator. This determines the major axis.
3. Move $$a$$ units from the center along the major axis to find the vertices.
4. Move $$b$$ units from the center along the minor axis to find the co-vertices.
5. Use $$c^2=a^2-b^2$$ to locate the foci along the major axis.
6. Sketch a smooth oval through the vertices and co-vertices.
:::

The sum of the distances from any point on the ellipse to the two foci is always

$$
2a.
$$

This is why $$a$$ is the semi-major axis.

<div class="theorem-box">

**Example.** Graph and identify the key features of

$$
\frac{x^2}{9}+\frac{y^2}{4}=1.
$$

The center is

$$
(0,0).
$$

Since $$9>4$$, the major axis is horizontal. Thus,

$$
a^2=9,\qquad b^2=4,
$$

so

$$
a=3,\qquad b=2.
$$

The vertices are

$$
(\pm3,0),
$$

and the co-vertices are

$$
(0,\pm2).
$$

Find $$c$$:

$$
c^2=a^2-b^2=9-4=5.
$$

So

$$
c=\sqrt5,
$$

and the foci are

$$
(-\sqrt5,0)
$$

and

$$
(\sqrt5,0).
$$

The eccentricity is

$$
e=\frac{c}{a}=\frac{\sqrt5}{3}.
$$

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, axis equal image,
  xmin=-4, xmax=4, ymin=-3, ymax=3,
  xtick={-3,-2,-1,0,1,2,3}, ytick={-2,-1,0,1,2},
  grid=both, grid style={gray!18},
  width=10cm, height=7.5cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, very thick, samples=260, domain=0:360] ({3*cos(x)}, {2*sin(x)});
\addplot[orange!80!black, thick] coordinates {(-3,0) (3,0)};
\addplot[green!50!black, thick] coordinates {(0,-2) (0,2)};
\addplot[only marks, mark=*, mark size=1.8pt, red!80!black] coordinates {(-2.236,0) (2.236,0)};
\node[red!80!black, anchor=south] at (axis cs:-2.236,0) {$(-\sqrt5,0)$};
\node[red!80!black, anchor=south] at (axis cs:2.236,0) {$(\sqrt5,0)$};
\end{axis}
\end{tikzpicture}
```

</div>

### Directrices of an ellipse

For a horizontal ellipse centered at the origin,

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,\qquad a>b,
$$

the foci are $$(\pm c,0)$$, where $$c^2=a^2-b^2$$, and the eccentricity is

$$
e=\frac ca.
$$

The directrices are

$$
x=\pm\frac{a}{e}.
$$

Since $$e=\frac ca$$, this can also be written as

$$
x=\pm\frac{a^2}{c}.
$$

For a vertical ellipse,

$$
\frac{x^2}{b^2}+\frac{y^2}{a^2}=1,
$$

the directrices are

$$
y=\pm\frac{a}{e}=\pm\frac{a^2}{c}.
$$

Each focus has its own directrix. The right focus pairs with the right directrix, the left focus pairs with the left directrix, and similarly for vertical ellipses. These directrices will come in handy later in the Focus-Directrix section.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, axis equal image,
  xmin=-5.2, xmax=5.2, ymin=-2.8, ymax=2.8,
  xtick={-5,-4,...,5}, ytick={-2,-1,0,1,2},
  grid=both, grid style={gray!18},
  width=11cm, height=6.2cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, very thick, samples=260, domain=0:360] ({3*cos(x)}, {2*sin(x)});
\addplot[red!75!black, dashed, thick] coordinates {(-4.025,-2.6) (-4.025,2.6)};
\addplot[red!75!black, dashed, thick] coordinates {(4.025,-2.6) (4.025,2.6)};
\addplot[only marks, mark=*, mark size=1.8pt, orange!85!black] coordinates {(-2.236,0) (2.236,0)};
\node[red!75!black, anchor=south] at (axis cs:-4.025,2.2) {$x=-a/e$};
\node[red!75!black, anchor=south] at (axis cs:4.025,2.2) {$x=a/e$};
\node[orange!85!black, anchor=north] at (axis cs:-2.236,0) {$F_1$};
\node[orange!85!black, anchor=north] at (axis cs:2.236,0) {$F_2$};
\end{axis}
\end{tikzpicture}
```

### Applications of ellipses

Most planets orbit in ellipses! Johannes Kepler discovered the planets in our solar system did not orbit in a perfect circle (as previously believed), but orbited in ellipses! His three laws of planetary motion revolutionized astrophysics, and all of the physics are based on the properties of ellipses!

In addition, like a parabola, ellipses have cool reflective properties. If you start at one foci and point a ray and bounce it off of the ellipse, you will always pass through the other foci! The Griffin Museum's "Whispering Room," is based on this principle, where if you stand at one foci you can whisper something that can only be heard by a person standing at the other foci.

---

## Hyperbolas

A hyperbola is defined as the set of points the absolute difference of whose distances to two foci is constant (less than the distance between the foci).

### Basic definitions

In a hyperbola, the transverse axis is always defined as the axis that passes through the the hyperbola (perpendicualr to the directrix), while the conjugate axis is always defined as the other axis. The vertices of a hyperbola are the relative extrema (basically the points with slope of $$\infty$$ or $$0$$). The transverse axis passes through the vertices.

### Horizontal transverse axis (opens left/right, center $$(h,k)$$)

$$
\frac{(x - h)^{2}}{a^{2}} - \frac{(y - k)^{2}}{b^{2}} = 1
$$

- Center: $$(h,k)$$.
- Vertices: $$(h \pm a,\, k)$$.
- Foci: $$(h \pm c,\, k)$$ where $$c^{2} = a^{2} + b^{2}$$.
- Asymptotes (useful for sketching):

$$
y - k = \pm \frac{b}{a}(x - h)
$$

### Vertical transverse axis (opens up/down)

$$
\frac{(y - k)^{2}}{a^{2}} - \frac{(x - h)^{2}}{b^{2}} = 1
$$

- Vertices: $$(h,\, k \pm a)$$.
- Foci: $$(h,\, k \pm c)$$ with $$c^{2} = a^{2} + b^{2}$$.
- Asymptotes:

$$
y - k = \pm \frac{a}{b}(x - h)
$$

Eccentricity: $$\displaystyle e = \frac{c}{a} > 1$$.

The conjugate hyperbola swaps the roles of the terms (e.g. $$\frac{y^{2}}{a^{2}} - \frac{x^{2}}{b^{2}} = 1$$ vs $$\frac{x^{2}}{a^{2}} - \frac{y^{2}}{b^{2}} = 1$$) and shares the same asymptote rectangle but different vertices and branches.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, axis equal image,
  xmin=-5, xmax=5, ymin=-3.5, ymax=3.5,
  xtick=\empty, ytick=\empty,
  width=10cm, height=6.5cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, very thick, samples=160, domain=2.01:5] ({x}, {1.15*sqrt(x^2-4)});
\addplot[blue, very thick, samples=160, domain=2.01:5] ({x}, {-1.15*sqrt(x^2-4)});
\addplot[blue, very thick, samples=160, domain=-5:-2.01] ({x}, {1.15*sqrt(x^2-4)});
\addplot[blue, very thick, samples=160, domain=-5:-2.01] ({x}, {-1.15*sqrt(x^2-4)});
\addplot[red!70!black, dashed, domain=-5:5] {0.75*x};
\addplot[red!70!black, dashed, domain=-5:5] {-0.75*x};
\addplot[gray!70, dashed] coordinates {(-2,-1.5) (2,-1.5) (2,1.5) (-2,1.5) (-2,-1.5)};
\addplot[only marks, mark=*, mark size=1.8pt, orange!85!black] coordinates {(-3,0) (3,0)};
\node[orange!85!black, anchor=south] at (axis cs:-3,0) {$F_1$};
\node[orange!85!black, anchor=south] at (axis cs:3,0) {$F_2$};
\end{axis}
\end{tikzpicture}
```

### Graphing a hyperbola

:::strategy{title="Graphing a hyperbola in standard form"}
1. Find the center $$(h,k)$$.
2. Identify the positive term. This tells you whether the transverse axis is horizontal or vertical.
3. Move $$a$$ units from the center along the transverse axis to find the vertices.
4. Build the asymptote rectangle using $$a$$ and $$b$$.
5. Draw the asymptotes through opposite corners of the rectangle.
6. Sketch the branches opening along the transverse axis.
:::

For a horizontal hyperbola,

$$
\frac{(x-h)^2}{a^2}-\frac{(y-k)^2}{b^2}=1,
$$

the asymptotes have slope

$$
\pm\frac ba.
$$

For a vertical hyperbola,

$$
\frac{(y-k)^2}{a^2}-\frac{(x-h)^2}{b^2}=1,
$$

the asymptotes have slope

$$
\pm\frac ab.
$$

<div class="theorem-box">

**Example.** Graph and identify the key features of

$$
\frac{x^2}{9}-\frac{y^2}{4}=1.
$$

The center is $$(0,0)$$. The positive term is the $$x$$-term, so the hyperbola opens left and right.

Here

$$
a^2=9,\qquad b^2=4,
$$

so

$$
a=3,\qquad b=2.
$$

The vertices are

$$
(\pm3,0).
$$

The asymptotes are

$$
y=\pm\frac23x.
$$

For the foci,

$$
c^2=a^2+b^2=9+4=13,
$$

so

$$
c=\sqrt{13}.
$$

The foci are

$$
(\pm\sqrt{13},0),
$$

and the eccentricity is

$$
e=\frac ca=\frac{\sqrt{13}}{3}.
$$

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, axis equal image,
  xmin=-6, xmax=6, ymin=-5, ymax=5,
  xtick={-6,-4,-2,0,2,4,6}, ytick={-4,-2,0,2,4},
  grid=both, grid style={gray!18},
  width=10cm, height=8cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, very thick, samples=160, domain=3.01:6] ({x}, {2/3*sqrt(x^2-9)});
\addplot[blue, very thick, samples=160, domain=3.01:6] ({x}, {-2/3*sqrt(x^2-9)});
\addplot[blue, very thick, samples=160, domain=-6:-3.01] ({x}, {2/3*sqrt(x^2-9)});
\addplot[blue, very thick, samples=160, domain=-6:-3.01] ({x}, {-2/3*sqrt(x^2-9)});
\addplot[red!75!black, dashed, domain=-6:6] {(2/3)*x};
\addplot[red!75!black, dashed, domain=-6:6] {-(2/3)*x};
\addplot[only marks, mark=*, mark size=1.8pt, orange!85!black] coordinates {(-3.606,0) (3.606,0)};
\node[orange!85!black, anchor=south] at (axis cs:-3.606,0) {$-\sqrt{13}$};
\node[orange!85!black, anchor=south] at (axis cs:3.606,0) {$\sqrt{13}$};
\end{axis}
\end{tikzpicture}
```

</div>

### Directrices of a hyperbola

For a horizontal hyperbola centered at the origin,

$$
\frac{x^2}{a^2}-\frac{y^2}{b^2}=1,
$$

the foci are $$(\pm c,0)$$, where

$$
c^2=a^2+b^2.
$$

The eccentricity is

$$
e=\frac ca>1.
$$

The directrices are

$$
x=\pm\frac ae=\pm\frac{a^2}{c}.
$$

For a vertical hyperbola,

$$
\frac{y^2}{a^2}-\frac{x^2}{b^2}=1,
$$

the directrices are

$$
y=\pm\frac ae=\pm\frac{a^2}{c}.
$$

Unlike ellipses, the directrices of a hyperbola lie between the vertices:

$$
\frac ae<a<c.
$$

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, axis equal image,
  xmin=-5.2, xmax=5.2, ymin=-4, ymax=4,
  xtick={-5,-4,...,5}, ytick={-4,-2,0,2,4},
  grid=both, grid style={gray!18},
  width=10cm, height=8cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, very thick, samples=160, domain=3.01:5.2] ({x}, {2/3*sqrt(x^2-9)});
\addplot[blue, very thick, samples=160, domain=3.01:5.2] ({x}, {-2/3*sqrt(x^2-9)});
\addplot[blue, very thick, samples=160, domain=-5.2:-3.01] ({x}, {2/3*sqrt(x^2-9)});
\addplot[blue, very thick, samples=160, domain=-5.2:-3.01] ({x}, {-2/3*sqrt(x^2-9)});
\addplot[red!75!black, dashed, thick] coordinates {(-2.496,-3.8) (-2.496,3.8)};
\addplot[red!75!black, dashed, thick] coordinates {(2.496,-3.8) (2.496,3.8)};
\addplot[only marks, mark=*, mark size=1.8pt, orange!85!black] coordinates {(-3.606,0) (3.606,0)};
\node[red!75!black, anchor=south] at (axis cs:-2.496,3.3) {$x=-a/e$};
\node[red!75!black, anchor=south] at (axis cs:2.496,3.3) {$x=a/e$};
\node[orange!85!black, anchor=north] at (axis cs:-3.606,0) {$F_1$};
\node[orange!85!black, anchor=north] at (axis cs:3.606,0) {$F_2$};
\end{axis}
\end{tikzpicture}
```

<div class="theorem-box">

**Extension.** Prove the standard formula for a hyperbola. This procedure should be similar to the procedure for deriving the equation for an ellipse.

</div>

---

## Focus–directrix property

Fix a point $$F$$ (focus), a line $$\ell$$ (directrix), and a number $$e > 0$$ (eccentricity). The corresponding conic is the locus of points $$P$$ such that

$$
PF = e \cdot d(P,\ell),
$$

where $$PF$$ is the distance from $$P$$ to $$F$$ and $$d(P,\ell)$$ is the perpendicular distance from $$P$$ to $$\ell$$.

- $$e = 1$$: parabola.
- $$0 < e < 1$$: ellipse.
- $$e > 1$$: hyperbola.

(The case $$e = 0$$ would force $$PF = 0$$ for every point on the directrix in a naive reading; the circle is usually treated via the two-focus definition or as $$a = b$$ in the ellipse equation.)

For parabolas, this matches the equal-distance definition to focus and directrix. For ellipses and hyperbolas, the same relation holds once focus and directrix are chosen consistently (a second focus appears from symmetry in the standard pictures).

The focus-directrix definition is useful because it gives one unified way to describe all three major conics. Instead of memorizing ellipse, parabola, and hyperbola as completely separate objects, you can think of them as different responses to the same rule:

$$
\text{distance to focus}=e(\text{distance to directrix}).
$$

The number $$e$$ controls how strongly the point is pulled toward the focus compared with the directrix.

- If $$e=1$$, the point must stay equally far from the focus and directrix, producing a parabola.
- If $$0<e<1$$, the point is closer to the focus than the directrix distance would be, which creates a bounded curve: an ellipse.
- If $$e>1$$, the focus distance is larger than the directrix distance, which creates an unbounded curve: a hyperbola.

For ellipses and hyperbolas, there are two foci and two directrices. Each focus pairs with the directrix on the same side of the center. For a horizontal ellipse, the right focus pairs with the right directrix and the left focus pairs with the left directrix. The same idea works for a horizontal hyperbola.

### Standard focus-directrix facts

The focus-directrix definition can be written as a ratio:

$$
\frac{PF}{d(P,\ell)}=e.
$$

This ratio is constant for every point $$P$$ on the conic.

For an ellipse or hyperbola centered at the origin with a horizontal major/transverse axis:

$$
e=\frac ca.
$$

This is the same eccentricity from the standard equations. The value of $$c$$ measures how far each focus is from the center, and $$a$$ measures how far each vertex is from the center. So eccentricity compares the focus distance to the vertex distance.

For an ellipse,

$$
0<e<1,\qquad c<a,
$$

so the directrices

$$
x=\pm\frac ae
$$

lie outside the ellipse.

For a hyperbola,

$$
e>1,\qquad c>a,
$$

so the directrices

$$
x=\pm\frac ae
$$

lie between the two vertices.

For vertical conics, replace $$x=\pm\frac ae$$ with

$$
y=\pm\frac ae.
$$

It is often helpful to rewrite the directrix location as

$$
\frac ae=\frac{a^2}{c},
$$

since $$e=\frac ca$$. Thus:

| Conic orientation | Foci | Directrices |
|---|---|---|
| Horizontal ellipse | $$(h\pm c,k)$$ | $$x=h\pm \dfrac{a^2}{c}$$ |
| Vertical ellipse | $$(h,k\pm c)$$ | $$y=k\pm \dfrac{a^2}{c}$$ |
| Horizontal hyperbola | $$(h\pm c,k)$$ | $$x=h\pm \dfrac{a^2}{c}$$ |
| Vertical hyperbola | $$(h,k\pm c)$$ | $$y=k\pm \dfrac{a^2}{c}$$ |

The formula is the same, but the location feels different:

- for ellipses, $$c<a$$, so $$\dfrac{a^2}{c}>a$$ and the directrices are outside the ellipse;
- for hyperbolas, $$c>a$$, so $$\dfrac{a^2}{c}<a$$ and the directrices lie between the vertices.

<div class="theorem-box">

**Example.** Find the directrices of

$$
\frac{(y+1)^2}{25}-\frac{(x-2)^2}{9}=1.
$$

This is a vertical hyperbola with center

$$
(h,k)=(2,-1).
$$

Since the positive term is the $$y$$ term,

$$
a^2=25,\qquad b^2=9.
$$

For a hyperbola,

$$
c^2=a^2+b^2=25+9=34,
$$

so

$$
c=\sqrt{34}.
$$

The directrices are vertical-orientation directrices:

$$
y=k\pm\frac{a^2}{c}.
$$

Therefore

$$
y=-1\pm\frac{25}{\sqrt{34}}.
$$

</div>

### From focus-directrix data to an equation

When a problem gives a focus, a directrix, and eccentricity, start from the definition instead of trying to guess the standard form immediately.

:::strategy{title="From focus-directrix data to an equation"}
1. Write the distance from $$(x,y)$$ to the focus.
2. Write the perpendicular distance from $$(x,y)$$ to the directrix.
3. Set $$PF=e\,d(P,\ell)$$.
4. Square both sides and simplify.
5. Complete the square if needed.
:::

<div class="theorem-box">

**Example.** Find the conic with focus $$(0,0)$$, directrix $$x=4$$, and eccentricity $$e=\frac12$$.

For a point $$P=(x,y)$$, the distance to the focus is

$$
PF=\sqrt{x^2+y^2}.
$$

The distance to the directrix $$x=4$$ is

$$
d(P,\ell)=\lvert x-4\rvert.
$$

For points on the side of the directrix containing the focus, this is $$4-x$$. Since $$e=\frac12$$,

$$
\sqrt{x^2+y^2}=\frac12(4-x).
$$

Square both sides:

$$
x^2+y^2=\frac14(4-x)^2.
$$

Multiply by $$4$$:

$$
4x^2+4y^2=x^2-8x+16.
$$

Rearrange:

$$
3x^2+8x+4y^2=16.
$$

Complete the square in $$x$$:

$$
3\left(x^2+\frac83x\right)+4y^2=16.
$$

Since

$$
x^2+\frac83x=\left(x+\frac43\right)^2-\frac{16}{9},
$$

we get

$$
3\left(x+\frac43\right)^2-\frac{16}{3}+4y^2=16.
$$

Thus

$$
3\left(x+\frac43\right)^2+4y^2=\frac{64}{3}.
$$

Divide by $$\frac{64}{3}$$:

$$
\frac{\left(x+\frac43\right)^2}{\frac{64}{9}}+\frac{y^2}{\frac{16}{3}}=1.
$$

Since $$0<e<1$$, it makes sense that the result is an ellipse.

</div>

<div class="theorem-box">

**Example.** Find the foci, eccentricity, and directrices of

$$
9x^2+16y^2=144.
$$

Write in standard form:

$$
\frac{x^2}{16}+\frac{y^2}{9}=1.
$$

This is a horizontal ellipse with

$$
a=4,\qquad b=3.
$$

Then

$$
c^2=a^2-b^2=16-9=7,
$$

so

$$
c=\sqrt7.
$$

The foci are

$$
(\pm\sqrt7,0).
$$

The eccentricity is

$$
e=\frac ca=\frac{\sqrt7}{4}.
$$

The directrices are

$$
x=\pm\frac ae
=\pm\frac{4}{\sqrt7/4}
=\pm\frac{16}{\sqrt7}.
$$

</div>

<div class="theorem-box">

**Proof (Focus-directrix property).** We show that in rectangular coordinates the locus $$PF = e\,d(P,\ell)$$ is always a parabola, ellipse, or hyperbola according to $$e$$. Take $$e > 0$$ and place the focus at the origin and the directrix as the vertical line $$x = -d$$ with $$d > 0$$, so the focus lies to the right of the directrix. For any point $$P = (x,y)$$ on the same side of the directrix as the focus (so that the foot of the perpendicular has $$x$$-coordinate $$-d$$ and $$x > -d$$), the perpendicular distance is

$$
d(P,\ell) = x + d.
$$

The defining relation is

$$
\sqrt{x^{2} + y^{2}} = e(x + d).
$$

Because the left side is nonnegative, every point on the locus satisfies $$x + d \ge 0$$. Square both sides:

$$
x^{2} + y^{2} = e^{2}(x + d)^{2} = e^{2}x^{2} + 2e^{2}d\,x + e^{2}d^{2}.
$$

Rearrange:

$$
(1 - e^{2})x^{2} - 2e^{2}d\,x + y^{2} = e^{2}d^{2}.
$$

Case $$e = 1$$. Then this equation becomes

$$
-2d\,x + y^{2} = d^{2}
\quad\Longrightarrow\quad
y^{2} = 2d\left(x + \frac{d}{2}\right),
$$

the equation of a parabola opening to the right with vertex at $$\left(-\frac{d}{2},\,0\right)$$.

Case 1: $$0 < e < 1$$. Then $$1 - e^{2} > 0$$. Divide the rearranged equation by $$1 - e^{2}$$ and complete the square in $$x$$:

$$
\left(x - \frac{e^{2}d}{1 - e^{2}}\right)^{2} + \frac{y^{2}}{1 - e^{2}} = \frac{e^{2}d^{2}}{(1 - e^{2})^{2}}.
$$

Both denominators on the left are positive after the division, so this is the equation of an ellipse in standard position (after translation of the $$x$$-axis).

Case 2: $$e > 1$$. Then $$1 - e^{2} < 0$$. Multiply the rearranged equation by $$-1$$ and write

$$
(e^{2} - 1)x^{2} + 2e^{2}d\,x - y^{2} = -e^{2}d^{2}.
$$

Complete the square in $$x$$:

$$
(e^{2} - 1)\left(x + \frac{e^{2}d}{e^{2} - 1}\right)^{2} - y^{2} = \frac{e^{2}d^{2}}{e^{2} - 1},
$$

which is the equation of a hyperbola (difference of squared terms with opposite signs).

Thus the focus–directrix condition with fixed $$e > 0$$ produces exactly one nondegenerate conic type in each case $$e = 1$$, $$0 < e < 1$$, and $$e > 1$$. Other placements of the focus and directrix (rotations and translations) only change coordinates, not the classification.

Much of the final algebra is not shown here and is left as practice.

</div>

---

## Conics in polar

Place a focus at the pole $$(0,0)$$ and align the directrix perpendicular to the polar axis. With eccentricity $$e \ge 0$$ and distance to directrix (from focus) $$d$$, polar conics usually have the form

$$
r=\frac{ed}{1\pm e\cos\theta}
$$

or

$$
r=\frac{ed}{1\pm e\sin\theta}.
$$

Polar form is especially natural for conics because the pole can be placed at a focus. In rectangular form, the center is usually the most convenient reference point. In polar form, a focus is usually the most convenient reference point.

The numerator $$ed$$ is sometimes called the **semi-latus rectum** of the conic. It is often written as $$p$$ or $$\ell$$ in other texts. To avoid confusing it with the parabola parameter $$p$$ from earlier, we will usually keep it as $$ed$$ here.

Here:

- $$e$$ is the eccentricity.
- $$d$$ is the distance from the focus to the directrix.
- $$ed$$ is the numerator.

The denominator tells which direction the directrix lies.

$$
\begin{array}{c|c}
\text{Polar equation} & \text{Directrix}\\
\hline
r=\frac{ed}{1+e\cos\theta} & x=d\\
r=\frac{ed}{1-e\cos\theta} & x=-d\\
r=\frac{ed}{1+e\sin\theta} & y=d\\
r=\frac{ed}{1-e\sin\theta} & y=-d
\end{array}
$$

The trig function tells the orientation:

- $$\cos\theta$$ means the directrix is vertical, since $$x=r\cos\theta$$.
- $$\sin\theta$$ means the directrix is horizontal, since $$y=r\sin\theta$$.

The sign tells which side the directrix is on:

- $$1+e\cos\theta$$ pairs with $$x=d$$,
- $$1-e\cos\theta$$ pairs with $$x=-d$$,
- $$1+e\sin\theta$$ pairs with $$y=d$$,
- $$1-e\sin\theta$$ pairs with $$y=-d$$.

For different types of $$e$$:

- $$e = 1$$: one unbounded branch (parabola opening toward the directrix side that makes the denominator able to go to $$0$$).
- $$e < 1$$: bounded curve (ellipse), with a focus at the origin (which focus depends on the sign of $$d$$).
- $$e > 1$$: two branches (hyperbola); values of $$\theta$$ that make $$1 + e\cos\theta = 0$$ (or the corresponding denominator in your chosen form) are asymptotic directions (no finite points). The branch closest to the origin depends on the sign of $$d$$.

:::warning
Always check your course’s exact convention for $$p$$ and the sign in the denominator so your formulas match the textbook’s figure of the focus and directrix.
:::

### Important polar values

For equations involving $$\cos\theta$$, the easiest points to check are usually along the polar axis:

$$
\theta=0,\qquad \theta=\pi.
$$

For

$$
r=\frac{ed}{1+e\cos\theta},
$$

these give

$$
r(0)=\frac{ed}{1+e},
\qquad
r(\pi)=\frac{ed}{1-e}.
$$

If $$0<e<1$$, both values are finite and positive, so they give the two vertices of the ellipse on the horizontal axis. If $$e=1$$, then $$r(\pi)$$ is undefined, which matches the unbounded side of a parabola. If $$e>1$$, the denominator can become zero for some angle, which produces asymptotic directions for a hyperbola.

For equations involving $$\sin\theta$$, check

$$
\theta=\frac{\pi}{2},\qquad \theta=\frac{3\pi}{2}.
$$

These are the positive and negative vertical directions.

<div class="theorem-box">

**Example.** Find the eccentricity, directrix, and vertices of

$$
r=\frac{6}{1+\frac12\cos\theta}.
$$

This is already in the form

$$
r=\frac{ed}{1+e\cos\theta}.
$$

Thus

$$
e=\frac12.
$$

Since $$0<e<1$$, the conic is an ellipse. The numerator is $$ed=6$$, so

$$
d=\frac{6}{1/2}=12.
$$

Because the denominator is $$1+e\cos\theta$$, the directrix is

$$
x=12.
$$

To find the horizontal vertices, use $$\theta=0$$ and $$\theta=\pi$$:

$$
r(0)=\frac{6}{1+\frac12}=4,
$$

and

$$
r(\pi)=\frac{6}{1-\frac12}=12.
$$

So the vertices in polar form are

$$
(4,0)\text{ and }(12,\pi).
$$

In rectangular coordinates, these points are

$$
(4,0)\text{ and }(-12,0).
$$

</div>

<div class="theorem-box">

**Proof (Polar conic formula).** Put the focus at the pole and let the directrix be

$$
x=d.
$$

For a point $$P=(r,\theta)$$, the distance to the focus is

$$
PF=r.
$$

Since

$$
x=r\cos\theta,
$$

the horizontal distance from $$P$$ to the directrix is

$$
d-r\cos\theta.
$$

Using the focus-directrix definition,

$$
\frac{PF}{d(P,\ell)}=e,
$$

we get

$$
\frac{r}{d-r\cos\theta}=e.
$$

Solve for $$r$$:

$$
r=e(d-r\cos\theta).
$$

So

$$
r=ed-er\cos\theta.
$$

Move the $$r$$ terms together:

$$
r(1+e\cos\theta)=ed.
$$

Thus,

$$
r=\frac{ed}{1+e\cos\theta}.
$$

Depending on which side the directrix is on and whether it is horizontal or vertical, the sign and trig function change.

</div>

### Reading polar conic equations

:::strategy{title="Reading polar conic equations"}
1. Rewrite the denominator so the constant term is $$1$$.
2. The coefficient of $$\sin\theta$$ or $$\cos\theta$$ is the eccentricity $$e$$.
3. Use $$e$$ to classify the conic.
4. Use the numerator $$ed$$ to find $$d$$.
5. Use the sign and trig function to locate the directrix.
6. Plug in axis angles to locate useful vertices.
:::

:::warning
Be careful when the denominator is not already normalized. For example,

$$
r=\frac{12}{4+2\sin\theta}
$$

should first be rewritten as

$$
r=\frac{3}{1+\frac12\sin\theta}.
$$

So $$e=\frac12$$, not $$2$$.
:::

<div class="theorem-box">

**Example.** Identify the conic:

$$
r=\frac{10}{2-\cos\theta}.
$$

First factor the denominator:

$$
r=\frac{10}{2\left(1-\frac12\cos\theta\right)}
=\frac{5}{1-\frac12\cos\theta}.
$$

So

$$
e=\frac12.
$$

Since $$0<e<1$$, the conic is an ellipse.

The numerator is $$ed$$:

$$
ed=5.
$$

Since $$e=\frac12$$,

$$
d=10.
$$

Because the denominator is

$$
1-e\cos\theta,
$$

the directrix is

$$
x=-d=-10.
$$

</div>

### Converting polar conics to rectangular form

Sometimes it is useful to convert a polar conic into rectangular form. Use

$$
x=r\cos\theta,\qquad y=r\sin\theta,\qquad r^2=x^2+y^2.
$$

:::strategy{title="Converting polar conics to rectangular form"}
1. Multiply both sides by the denominator.
2. Replace $$r\cos\theta$$ with $$x$$ or $$r\sin\theta$$ with $$y$$.
3. Isolate the remaining $$r$$ term.
4. Square both sides if needed.
5. Complete the square.
:::

<div class="theorem-box">

**Example.** Convert

$$
r=\frac{4}{1-\cos\theta}
$$

to rectangular form.

Multiply both sides by the denominator:

$$
r(1-\cos\theta)=4.
$$

Distribute:

$$
r-r\cos\theta=4.
$$

Since $$r\cos\theta=x$$,

$$
r-x=4.
$$

Thus

$$
r=x+4.
$$

Now square both sides:

$$
r^2=(x+4)^2.
$$

Use $$r^2=x^2+y^2$$:

$$
x^2+y^2=x^2+8x+16.
$$

Cancel $$x^2$$:

$$
y^2=8x+16=8(x+2).
$$

So

$$
y^2=8(x+2).
$$

This is a parabola, which matches $$e=1$$ from the original polar equation.

</div>

<div class="theorem-box">

**Example.** Identify the conic:

$$
r=\frac{12}{3+4\cos\theta}.
$$

Rewrite with constant term $$1$$:

$$
r=\frac{4}{1+\frac43\cos\theta}.
$$

Thus,

$$
e=\frac43.
$$

Since $$e>1$$, the conic is a hyperbola.

The numerator is $$ed=4$$, so

$$
d=\frac{4}{4/3}=3.
$$

Because the denominator is

$$
1+e\cos\theta,
$$

the directrix is

$$
x=3.
$$

The denominator is zero when

$$
1+\frac43\cos\theta=0,
$$

so

$$
\cos\theta=-\frac34.
$$

These angles give the asymptotic directions of the hyperbola.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, axis equal image,
  xmin=-2.5, xmax=8, ymin=-6, ymax=6,
  xtick={-2,0,2,4,6,8}, ytick={-6,-4,-2,0,2,4,6},
  grid=both, grid style={gray!18},
  width=10cm, height=9cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, very thick, samples=240, domain=-130:130, unbounded coords=jump]
  ({3*cos(x)/(1+(4/3)*cos(x))}, {3*sin(x)/(1+(4/3)*cos(x))});
\addplot[red!75!black, dashed, thick] coordinates {(3,-6) (3,6)};
\addplot[only marks, mark=*, mark size=1.8pt, orange!85!black] coordinates {(0,0)};
\node[orange!85!black, anchor=north east] at (axis cs:0,0) {focus/pole};
\node[red!75!black, anchor=south west] at (axis cs:3,4.9) {$x=3$};
\end{axis}
\end{tikzpicture}
```

</div>

### Polar conics and orbits

Polar conics appear naturally in orbital motion because one focus is physically important. For example:

- Planets and many moons move in elliptical orbits with the central body at one focus.
- Some comets follow parabolic-type escape paths.
- Objects that pass by a planet and escape can follow hyperbolic paths.

This is why polar equations with a focus at the pole are often more natural than rectangular equations for astronomy and central-force motion.

## Practice

::::problem
1. Complete the square for $$4x^{2}+9y^{2}-24x+36y+36=0$$. Write the equation in standard form and give the center, vertices, co-vertices, foci, eccentricity, and major/minor axis lengths. Graph the conic.

:::solution
Complete the square:

$$
4x^{2}+9y^{2}-24x+36y+36=0
$$

$$
4(x^{2}-6x)+9(y^{2}+4y)+36=0.
$$

Then

$$
4\bigl((x-3)^{2}-9\bigr)+9\bigl((y+2)^{2}-4\bigr)+36=0.
$$

Simplify:

$$
4(x-3)^{2}+9(y+2)^{2}=36.
$$

Divide by $$36$$:

$$
\frac{(x-3)^{2}}{9}+\frac{(y+2)^{2}}{4}=1.
$$

This is an ellipse centered at $$(3,-2)$$ with horizontal major axis. Here $$a^{2}=9$$, $$b^{2}=4$$, so $$a=3$$ and $$b=2$$. Also

$$
c^{2}=a^{2}-b^{2}=9-4=5,
$$

so $$c=\sqrt{5}$$ and $$e=\dfrac{c}{a}=\dfrac{\sqrt{5}}{3}$$.

Thus

$$
\boxed{\frac{(x-3)^{2}}{9}+\frac{(y+2)^{2}}{4}=1}
$$

with center $$\boxed{(3,-2)}$$, vertices $$\boxed{(0,-2),(6,-2)}$$, co-vertices $$\boxed{(3,-4),(3,0)}$$, foci $$\boxed{(3-\sqrt{5},-2),(3+\sqrt{5},-2)}$$, eccentricity $$\boxed{\frac{\sqrt{5}}{3}}$$, major axis length $$\boxed{6}$$, and minor axis length $$\boxed{4}$$.

The graph of the conic is displayed below:

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, axis equal image,
  xmin=-1, xmax=7, ymin=-5, ymax=2,
  xtick={-1,0,...,7}, ytick={-5,-4,...,2},
  grid=both, grid style={gray!18},
  width=9.5cm, height=8cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, very thick, samples=260, domain=0:360] ({3+3*cos(x)}, {-2+2*sin(x)});
\addplot[orange!80!black, thick] coordinates {(0,-2) (6,-2)};
\addplot[green!50!black, thick] coordinates {(3,-4) (3,0)};
\addplot[only marks, mark=*, mark size=1.8pt, red!80!black] coordinates {(0.764,-2) (5.236,-2)};
\end{axis}
\end{tikzpicture}
```
:::
::::

::::problem
2. Find the equation of the parabola whose focus is $$(5,-2)$$ and whose directrix is $$x=-1$$. Give the vertex, value of $$p$$, axis of symmetry, and latus rectum endpoints.

:::solution
The focus is $$(5,-2)$$ and the directrix is $$x=-1$$, so the parabola opens horizontally. The vertex is halfway between the focus and directrix along the horizontal axis:

$$
\left(\frac{5+(-1)}{2},-2\right)=(2,-2).
$$

Thus $$h=2$$ and $$k=-2$$. Since the focus is $$(h+p,k)=(5,-2)$$,

$$
p=3.
$$

Use the horizontal parabola form

$$
(y-k)^{2}=4p(x-h).
$$

So

$$
\boxed{(y+2)^{2}=12(x-2)}.
$$

The axis of symmetry is $$\boxed{y=-2}$$. The latus rectum is vertical through the focus. Its length is $$\lvert 4p \rvert=12$$, so its endpoints are $$6$$ units above and below the focus:

$$
\boxed{(5,4)\text{ and }(5,-8)}.
$$
:::
::::

::::problem
3. Find all lines with slope $$-2$$ that are tangent to the parabola $$(x-1)^{2}=8(y+3)$$.

:::solution
A line with slope $$-2$$ has equation

$$
y=-2x+b.
$$

Substitute into the parabola

$$
(x-1)^{2}=8(y+3).
$$

Then

$$
(x-1)^{2}=8(-2x+b+3).
$$

Expand:

$$
x^{2}-2x+1=-16x+8b+24.
$$

Move everything to one side:

$$
x^{2}+14x-(8b+23)=0.
$$

For the line to be tangent, this quadratic must have exactly one solution, so its discriminant is $$0$$:

$$
14^{2}-4(1)(-(8b+23))=0.
$$

Thus

$$
196+32b+92=0
\quad\Longrightarrow\quad
32b=-288
\quad\Longrightarrow\quad
b=-9.
$$

Therefore the tangent line is

$$
\boxed{y=-2x-9}.
$$
:::
::::

::::problem
4. An ellipse has foci $$(1,4)$$ and $$(1,-2)$$ and passes through $$(5,1)$$. Find its standard-form equation and its eccentricity.

:::solution
The foci $$(1,4)$$ and $$(1,-2)$$ have midpoint

$$
(h,k)=\left(1,\frac{4+(-2)}{2}\right)=(1,1).
$$

The foci are vertical, so the major axis is vertical. The distance from the center to either focus is

$$
c=3.
$$

The point $$(5,1)$$ lies on the ellipse. Its distances to the foci are

$$
\sqrt{(5-1)^{2}+(1-4)^{2}}=5
$$

and

$$
\sqrt{(5-1)^{2}+(1-(-2))^{2}}=5.
$$

The sum of distances is $$10$$, so $$2a=10$$ and $$a=5$$. Then

$$
b^{2}=a^{2}-c^{2}=25-9=16.
$$

Since the major axis is vertical,

$$
\boxed{\frac{(x-1)^{2}}{16}+\frac{(y-1)^{2}}{25}=1}.
$$

The eccentricity is

$$
\boxed{e=\frac{c}{a}=\frac{3}{5}}.
$$
:::
::::

::::problem
5. The ellipse $$\dfrac{(x+2)^{2}}{36}+\dfrac{(y-1)^{2}}{20}=1$$ has foci $$F_1$$ and $$F_2$$. If $$P$$ is the point on the ellipse with $$x=1$$ and $$y>1$$, find $$PF_1$$ and $$PF_2$$ separately.

:::solution
The ellipse

$$
\frac{(x+2)^{2}}{36}+\frac{(y-1)^{2}}{20}=1
$$

has center $$(-2,1)$$, $$a^{2}=36$$, and $$b^{2}=20$$. Therefore

$$
c^{2}=a^{2}-b^{2}=36-20=16,
$$

so $$c=4$$. The foci are

$$
(-2-4,1)=(-6,1)
\quad\text{and}\quad
(-2+4,1)=(2,1).
$$

Now use $$x=1$$:

$$
\frac{(1+2)^{2}}{36}+\frac{(y-1)^{2}}{20}=1.
$$

So

$$
\frac{9}{36}+\frac{(y-1)^{2}}{20}=1
\quad\Longrightarrow\quad
\frac{(y-1)^{2}}{20}=\frac{3}{4}.
$$

Thus

$$
(y-1)^{2}=15.
$$

Since $$y>1$$,

$$
y=1+\sqrt{15}.
$$

So $$P=(1,1+\sqrt{15})$$. Its distance to the right focus $$(2,1)$$ is

$$
\sqrt{(1-2)^{2}+(\sqrt{15})^{2}}=\sqrt{16}=4.
$$

Its distance to the left focus $$(-6,1)$$ is

$$
\sqrt{(1+6)^{2}+(\sqrt{15})^{2}}=\sqrt{64}=8.
$$

Therefore

$$
\boxed{PF_{\text{right}}=4\quad\text{and}\quad PF_{\text{left}}=8}.
$$
:::
::::

::::problem
6. Find all real numbers $$m$$ such that the line $$y=mx+3$$ is tangent to the ellipse $$\dfrac{x^{2}}{9}+\dfrac{y^{2}}{4}=1$$.

:::solution
Substitute $$y=mx+3$$ into

$$
\frac{x^{2}}{9}+\frac{y^{2}}{4}=1.
$$

Then

$$
\frac{x^{2}}{9}+\frac{(mx+3)^{2}}{4}=1.
$$

Multiply by $$36$$:

$$
4x^{2}+9(mx+3)^{2}=36.
$$

Expand:

$$
4x^{2}+9(m^{2}x^{2}+6mx+9)=36.
$$

So

$$
(4+9m^{2})x^{2}+54mx+45=0.
$$

For tangency, the discriminant must be $$0$$:

$$
(54m)^{2}-4(4+9m^{2})(45)=0.
$$

Simplify:

$$
2916m^{2}-180(4+9m^{2})=0
$$

$$
1296m^{2}-720=0
\quad\Longrightarrow\quad
m^{2}=\frac{5}{9}.
$$

Thus

$$
\boxed{m=\pm\frac{\sqrt{5}}{3}}.
$$
:::
::::

::::problem
7. Complete the square for $$9y^{2}-4x^{2}-54y-16x+29=0$$. Write the equation in standard form and give the center, vertices, foci, eccentricity, and asymptotes. Graph the conic.

:::solution
Start with

$$
9y^{2}-4x^{2}-54y-16x+29=0.
$$

Group and complete the square:

$$
9(y^{2}-6y)-4(x^{2}+4x)+29=0.
$$

Then

$$
9\bigl((y-3)^{2}-9\bigr)-4\bigl((x+2)^{2}-4\bigr)+29=0.
$$

Simplify:

$$
9(y-3)^{2}-4(x+2)^{2}-36=0.
$$

So

$$
9(y-3)^{2}-4(x+2)^{2}=36.
$$

Divide by $$36$$:

$$
\boxed{\frac{(y-3)^{2}}{4}-\frac{(x+2)^{2}}{9}=1}.
$$

This is a vertical hyperbola. The center is $$(-2,3)$$. Here $$a^{2}=4$$, $$b^{2}=9$$, so $$a=2$$ and $$b=3$$. Also

$$
c^{2}=a^{2}+b^{2}=4+9=13,
$$

so $$c=\sqrt{13}$$ and $$e=\dfrac{\sqrt{13}}{2}$$.

The vertices are

$$
\boxed{(-2,1)\text{ and }(-2,5)}.
$$

The foci are

$$
\boxed{(-2,3-\sqrt{13})\text{ and }(-2,3+\sqrt{13})}.
$$

The asymptotes are

$$
\boxed{y-3=\pm\frac{2}{3}(x+2)}.
$$

An image of the hyperbola is shown below:

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, axis equal image,
  xmin=-7, xmax=3, ymin=-2, ymax=8,
  xtick={-7,-6,...,3}, ytick={-2,0,2,4,6,8},
  grid=both, grid style={gray!18},
  width=9cm, height=9cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, very thick, samples=160, domain=5.01:8] ({-2 + (3/2)*sqrt(x^2-25)}, {3+x});
\addplot[blue, very thick, samples=160, domain=5.01:8] ({-2 - (3/2)*sqrt(x^2-25)}, {3+x});
\addplot[blue, very thick, samples=160, domain=5.01:8] ({-2 + (3/2)*sqrt(x^2-25)}, {3-x});
\addplot[blue, very thick, samples=160, domain=5.01:8] ({-2 - (3/2)*sqrt(x^2-25)}, {3-x});
\addplot[red!75!black, dashed, domain=-7:3] {3 + (5/3)*(x+2)};
\addplot[red!75!black, dashed, domain=-7:3] {3 - (5/3)*(x+2)};
\addplot[only marks, mark=*, mark size=1.8pt, orange!85!black] coordinates {(-2,6.606) (-2,-0.606)};
\end{axis}
\end{tikzpicture}
```
:::
::::

::::problem
8. A hyperbola has center $$(2,-1)$$, asymptotes $$y+1=\pm\dfrac{3}{2}(x-2)$$, and one focus at $$(2+\sqrt{52},-1)$$. Assuming it opens left/right, find its standard-form equation.

:::solution
A horizontal hyperbola centered at $$(2,-1)$$ has form

$$
\frac{(x-2)^{2}}{a^{2}}-\frac{(y+1)^{2}}{b^{2}}=1.
$$

Its asymptotes are

$$
y+1=\pm\frac{b}{a}(x-2).
$$

We are given slope $$\frac{3}{2}$$, so

$$
\frac{b}{a}=\frac{3}{2}.
$$

Let $$a=2t$$ and $$b=3t$$. The focus distance satisfies

$$
c^{2}=a^{2}+b^{2}.
$$

Since one focus is $$(2+\sqrt{52},-1)$$, we have $$c=\sqrt{52}$$. Thus

$$
52=(2t)^{2}+(3t)^{2}=13t^{2}.
$$

So $$t^{2}=4$$, and therefore

$$
a^{2}=(2t)^{2}=16,
\qquad
b^{2}=(3t)^{2}=36.
$$

Thus the equation is

$$
\boxed{\frac{(x-2)^{2}}{16}-\frac{(y+1)^{2}}{36}=1}.
$$
:::
::::

::::problem
9. Find all intersection points in $$\mathbb{R}^{2}$$ of the ellipse $$\dfrac{x^{2}}{16}+\dfrac{y^{2}}{9}=1$$ and the hyperbola $$\dfrac{x^{2}}{4}-\dfrac{y^{2}}{9}=1$$.

:::solution
Solve the system

$$
\frac{x^{2}}{16}+\frac{y^{2}}{9}=1
$$

and

$$
\frac{x^{2}}{4}-\frac{y^{2}}{9}=1.
$$

Let $$X=x^{2}$$ and $$Y=y^{2}$$. Then

$$
\frac{X}{16}+\frac{Y}{9}=1
$$

and

$$
\frac{X}{4}-\frac{Y}{9}=1.
$$

From the second equation,

$$
X=4+\frac{4Y}{9}.
$$

Substitute into the first:

$$
\frac{4+\frac{4Y}{9}}{16}+\frac{Y}{9}=1.
$$

This gives

$$
\frac{1}{4}+\frac{Y}{36}+\frac{Y}{9}=1
\quad\Longrightarrow\quad
\frac{1}{4}+\frac{5Y}{36}=1.
$$

So

$$
\frac{5Y}{36}=\frac{3}{4}
\quad\Longrightarrow\quad
Y=\frac{27}{5}.
$$

Then

$$
X=4+\frac{4}{9}\cdot\frac{27}{5}
=4+\frac{12}{5}
=\frac{32}{5}.
$$

Therefore

$$
x=\pm\sqrt{\frac{32}{5}}=\pm\frac{4\sqrt{10}}{5},
\qquad
y=\pm\sqrt{\frac{27}{5}}=\pm\frac{3\sqrt{15}}{5}.
$$

All sign combinations work, so the intersection points are

$$
\boxed{\left(\pm\frac{4\sqrt{10}}{5},\,\pm\frac{3\sqrt{15}}{5}\right)}.
$$
:::
::::

::::problem
10. With focus at $$(0,0)$$, directrix $$x=-6$$, and eccentricity $$e=\dfrac{2}{3}$$, derive the Cartesian equation of the conic. Write it in standard form and identify the conic type.

:::solution
The focus is $$(0,0)$$ and the directrix is $$x=-6$$. For a point $$(x,y)$$ on the conic,

$$
PF=\sqrt{x^{2}+y^{2}}
$$

and

$$
d(P,\ell)=x+6
$$

on the appropriate side of the directrix. Since $$e=\dfrac{2}{3}$$,

$$
\sqrt{x^{2}+y^{2}}=\frac{2}{3}(x+6).
$$

Square both sides:

$$
x^{2}+y^{2}=\frac{4}{9}(x+6)^{2}.
$$

Multiply by $$9$$:

$$
9x^{2}+9y^{2}=4x^{2}+48x+144.
$$

So

$$
5x^{2}+9y^{2}-48x-144=0.
$$

Complete the square in $$x$$:

$$
5\left(x^{2}-\frac{48}{5}x\right)+9y^{2}=144.
$$

Since

$$
x^{2}-\frac{48}{5}x=\left(x-\frac{24}{5}\right)^{2}-\frac{576}{25},
$$

we get

$$
5\left(x-\frac{24}{5}\right)^{2}+9y^{2}=\frac{1296}{5}.
$$

Divide by $$\dfrac{1296}{5}$$:

$$
\boxed{\frac{\left(x-\frac{24}{5}\right)^{2}}{\frac{1296}{25}}+\frac{y^{2}}{\frac{144}{5}}=1}.
$$

Since $$0<e<1$$, this conic is an ellipse.
:::
::::

::::problem
11. Convert $$r=\dfrac{10}{2-\cos\theta}$$ to a Cartesian equation. Identify the conic type, eccentricity, center, vertices, and foci.

:::solution
Start with

$$
r=\frac{10}{2-\cos\theta}.
$$

Rewrite:

$$
2r-r\cos\theta=10.
$$

Use $$r=\sqrt{x^{2}+y^{2}}$$ and $$r\cos\theta=x$$:

$$
2\sqrt{x^{2}+y^{2}}-x=10.
$$

So

$$
2\sqrt{x^{2}+y^{2}}=x+10.
$$

Square both sides:

$$
4(x^{2}+y^{2})=(x+10)^{2}.
$$

Expand:

$$
4x^{2}+4y^{2}=x^{2}+20x+100.
$$

So

$$
3x^{2}+4y^{2}-20x-100=0.
$$

Complete the square:

$$
3\left(x^{2}-\frac{20}{3}x\right)+4y^{2}=100.
$$

Since

$$
x^{2}-\frac{20}{3}x=\left(x-\frac{10}{3}\right)^{2}-\frac{100}{9},
$$

we get

$$
3\left(x-\frac{10}{3}\right)^{2}+4y^{2}=\frac{400}{3}.
$$

Divide by $$\dfrac{400}{3}$$:

$$
\boxed{\frac{\left(x-\frac{10}{3}\right)^{2}}{\frac{400}{9}}+\frac{y^{2}}{\frac{100}{3}}=1}.
$$

The conic is an ellipse. From

$$
r=\frac{10}{2-\cos\theta}=\frac{5}{1-\frac{1}{2}\cos\theta},
$$

the eccentricity is $$\boxed{e=\frac{1}{2}}$$. The center is $$\boxed{\left(\frac{10}{3},0\right)}$$. Since $$a^{2}=\frac{400}{9}$$, $$a=\frac{20}{3}$$. The vertices are

$$
\boxed{\left(-\frac{10}{3},0\right)\text{ and }(10,0)}.
$$

Also $$c=ea=\frac{10}{3}$$, so the foci are

$$
\boxed{(0,0)\text{ and }\left(\frac{20}{3},0\right)}.
$$
:::
::::

::::problem
12. For $$r=\dfrac{12}{3+4\cos\theta}$$, identify the conic type and eccentricity, then find the values of $$\theta$$ where the denominator vanishes. Explain what those angles represent geometrically.

:::solution
Rewrite

$$
r=\frac{12}{3+4\cos\theta}
$$

by factoring $$3$$ from the denominator:

$$
r=\frac{4}{1+\frac{4}{3}\cos\theta}.
$$

This matches polar conic form with eccentricity

$$
e=\frac{4}{3}.
$$

Since $$e>1$$, the conic is a hyperbola.

The denominator vanishes when

$$
3+4\cos\theta=0.
$$

Thus

$$
\cos\theta=-\frac{3}{4}.
$$

So the angles are

$$
\boxed{\theta=\arccos\left(-\frac{3}{4}\right)\quad\text{and}\quad \theta=2\pi-\arccos\left(-\frac{3}{4}\right)}.
$$

At those angles, $$r$$ is not finite. Geometrically, they give the asymptotic directions of the hyperbola.
:::
::::

::::problem
13. A circle is tangent to both axes in Quadrant I and its center lies on the ellipse $$\dfrac{x^{2}}{25}+\dfrac{y^{2}}{9}=1$$. Find the circle's radius.

:::solution
A circle tangent to both axes in Quadrant I has center $$(r,r)$$ and radius $$r$$. Since the center lies on

$$
\frac{x^{2}}{25}+\frac{y^{2}}{9}=1,
$$

substitute $$(r,r)$$:

$$
\frac{r^{2}}{25}+\frac{r^{2}}{9}=1.
$$

Then

$$
r^{2}\left(\frac{1}{25}+\frac{1}{9}\right)=1.
$$

Compute:

$$
\frac{1}{25}+\frac{1}{9}=\frac{9+25}{225}=\frac{34}{225}.
$$

So

$$
r^{2}\cdot\frac{34}{225}=1
\quad\Longrightarrow\quad
r^{2}=\frac{225}{34}.
$$

Since $$r>0$$,

$$
\boxed{r=\frac{15}{\sqrt{34}}=\frac{15\sqrt{34}}{34}}.
$$
:::
::::

::::problem
14. Show that the conic $$Ax^{2}+Cy^{2}+Dx+Ey+F=0$$ has center $$(h,k)$$ when $$A\ne 0$$ and $$C\ne 0$$. Derive formulas for $$h$$ and $$k$$ in terms of $$A,C,D,E$$, then find the center of $$5x^{2}-3y^{2}+20x+18y-11=0$$.

:::solution
Start with

$$
Ax^{2}+Cy^{2}+Dx+Ey+F=0,
$$

where $$A\ne 0$$ and $$C\ne 0$$. Complete the square separately in $$x$$ and $$y$$:

$$
A\left(x^{2}+\frac{D}{A}x\right)+C\left(y^{2}+\frac{E}{C}y\right)+F=0.
$$

The centers of the completed squares occur at

$$
x=-\frac{D}{2A}
\qquad\text{and}\qquad
y=-\frac{E}{2C}.
$$

Therefore the center is

$$
\boxed{\left(-\frac{D}{2A},-\frac{E}{2C}\right)}.
$$

For

$$
5x^{2}-3y^{2}+20x+18y-11=0,
$$

we have $$A=5$$, $$C=-3$$, $$D=20$$, and $$E=18$$. Thus

$$
h=-\frac{20}{2(5)}=-2
$$

and

$$
k=-\frac{18}{2(-3)}=3.
$$

So the center is

$$
\boxed{(-2,3)}.
$$
:::
::::

::::problem
15. For the parabola $$y^{2}=4px$$ with $$p>0$$, let a line through the focus $$(p,0)$$ have slope $$m\ne 0$$ and meet the parabola at two distinct points $$A$$ and $$B$$. Prove that the product of the $$y$$-coordinates of $$A$$ and $$B$$ equals $$-4p^{2}$$.

:::solution
The parabola is

$$
y^{2}=4px,
$$

and its focus is $$(p,0)$$. A line through the focus with slope $$m\ne 0$$ has equation

$$
y=m(x-p).
$$

Solve this for $$x$$:

$$
x=p+\frac{y}{m}.
$$

Substitute into the parabola:

$$
y^{2}=4p\left(p+\frac{y}{m}\right).
$$

Expand:

$$
y^{2}=4p^{2}+\frac{4p}{m}y.
$$

Move everything to one side:

$$
y^{2}-\frac{4p}{m}y-4p^{2}=0.
$$

This quadratic has roots equal to the $$y$$-coordinates of the two intersection points $$A$$ and $$B$$. By Vieta's formula, the product of the roots is the constant term divided by the leading coefficient:

$$
y_Ay_B=\frac{-4p^{2}}{1}.
$$

Therefore

$$
\boxed{y_Ay_B=-4p^{2}}.
$$
:::
::::

::::problem
16. (Bonus, 2026 USAPhO)

You are studying the motion of charged particles constrained to the $$xy$$-plane. Particle $$\alpha$$, with charge $$+1\ \mathrm{C}$$, is fixed at the origin.

For motion under an inverse-square central force, trajectories are conic sections with the fixed particle at a focus. In polar coordinates:

- For an attractive interaction (ellipse),

$$
r=\frac{r_0}{1+e\cos\phi},\qquad e<1.
$$

- For a repulsive interaction (hyperbola),

$$
r=\frac{r_0}{e\cos\phi-1},\qquad e>1.
$$

You have a camera that takes three snapshots of a moving particle at equal time intervals.

   $$(A)$$ A particle $$\beta$$, with charge $$-1\ \mathrm{C}$$, moves under the electrostatic force of particle $$\alpha$$. In three consecutive snapshots, its positions are

   $$
   (0,-5\ \mathrm{m}),\qquad (3\ \mathrm{m},0),\qquad (0,5\ \mathrm{m}).
   $$

   Assuming the motion is governed only by the Coulomb interaction with $$\alpha$$, determine the maximum distance that particle $$\beta$$ reaches from the origin.

   $$(B)$$ Now particle $$\beta$$ is replaced by particle $$\gamma$$, which has charge $$+2\ \mathrm{C}$$ and is free to move in the plane. In three consecutive snapshots, its positions are

   $$
   (3\ \mathrm{m},-4\ \mathrm{m}),\qquad (2\ \mathrm{m},0),\qquad (3\ \mathrm{m},4\ \mathrm{m}).
   $$

   Assuming the motion is governed only by the Coulomb interaction with $$\alpha$$, determine the angle $$\theta$$, measured from the positive $$x$$-axis, of the velocity of particle $$\gamma$$ at a large time.

   $$(C)$$ A family of particles, each identical to particle $$\gamma$$ (that is, each has charge $$+2\ \mathrm{C}$$), approaches from infinity in the $$xy$$-plane. All particles have the same speed $$v_{\infty}$$ far from the origin and move along lines parallel to the initial asymptotic direction of particle $$\gamma$$ from part $$(B)$$. The particles are injected one at a time, so they do not interact with one another.

   For each trajectory, define the **impact parameter** $$B$$ to be the perpendicular distance between the initial straight-line path of the particle and the origin.

   As a particle passes near the scattering center, its direction changes due to Coulomb repulsion. Let $$\alpha$$ denote the total deflection angle of the trajectory, i.e. the angle between the incoming and outgoing asymptotic directions.

   $$(i)$$ Using the conic form of the trajectory, derive a formula for $$B(\alpha)$$.

   $$(ii)$$ Using the result of part $$(B)$$, express $$B(\alpha)$$ in terms of $$r_0$$.

:::solution
For part (A), use the attractive model

$$
r=\frac{r_0}{1+e\cos\phi}.
$$

Since the first and third snapshots are at $$(0,-5)$$ and $$(0,5)$$, while the middle snapshot is at $$(3,0)$$, and the time intervals are equal, the path is symmetric about the $$x$$-axis. Therefore, $$(3,0)$$ is the closest point to the origin, called the **pericenter**.

At pericenter, $$\phi=0$$, so

$$
r_{\min}=\frac{r_0}{1+e}=3.
$$

The other two photographed points are on the $$y$$-axis. There,

$$
\phi=\pm\frac{\pi}{2},\qquad r=5.
$$

Since $$\cos\left(\pm\frac{\pi}{2}\right)=0$$,

$$
5=\frac{r_0}{1+e(0)}=r_0.
$$

So

$$
r_0=5.
$$

Now use the pericenter equation:

$$
3=\frac{5}{1+e}.
$$

Thus,

$$
1+e=\frac53,
$$

so

$$
e=\frac23.
$$

The farthest point on the ellipse is the **apocenter**, where $$\phi=\pi$$ and $$\cos\phi=-1$$. Therefore,

$$
r_{\max}=\frac{r_0}{1-e}
=\frac{5}{1-\frac23}
=15.
$$

So

$$
\boxed{r_{\max}=15\ \mathrm{m}}.
$$

For part (B), use the repulsive model

$$
r=\frac{r_0}{e\cos\phi-1}.
$$

Again, the first and third snapshots are symmetric about the $$x$$-axis, and the middle snapshot is at $$(2,0)$$. Since the snapshots are equally spaced in time, $$(2,0)$$ is the point of closest approach.

At closest approach,

$$
r_{\min}=\frac{r_0}{e-1}=2.
$$

Thus,

$$
r_0=2(e-1).
$$

Now use the point $$(3,4)$$. Its distance from the origin is

$$
r=\sqrt{3^2+4^2}=5,
$$

and

$$
\cos\phi=\frac{x}{r}=\frac35.
$$

Substitute into the polar equation:

$$
5=\frac{r_0}{e\cdot\frac35-1}.
$$

Using $$r_0=2(e-1)$$,

$$
5=\frac{2(e-1)}{\frac35e-1}.
$$

Multiply through:

$$
5\left(\frac35e-1\right)=2(e-1).
$$

So

$$
3e-5=2e-2,
$$

which gives

$$
e=3.
$$

Then

$$
r_0=2(e-1)=4.
$$

At large times, the particle approaches an asymptote of the hyperbola. The asymptote occurs when the denominator goes to zero:

$$
e\cos\phi-1=0.
$$

Therefore,

$$
\cos\phi=\frac1e=\frac13.
$$

Thus the outgoing velocity direction at large positive time is

$$
\boxed{\theta=\arccos\left(\frac13\right)}
$$

measured from the positive $$x$$-axis. Numerically,

$$
\theta\approx70.5^\circ.
$$

For part (C), for a repulsive inverse-square force, the trajectory is

$$
r=\frac{r_0}{e\cos\phi-1},\qquad e>1.
$$

The asymptotes occur when the denominator vanishes:

$$
e\cos\phi-1=0.
$$

Thus,

$$
\cos\phi=\frac1e.
$$

The two asymptotes are symmetric about the $$x$$-axis, so the total deflection angle is

$$
\alpha=2\phi=2\arccos\left(\frac1e\right).
$$

Hence,

$$
\cos\left(\frac{\alpha}{2}\right)=\frac1e,
$$

so

$$
e=\frac{1}{\cos(\alpha/2)}.
$$

Now relate the impact parameter $$B$$ to the conic parameters. Starting from

$$
r=\frac{r_0}{e\cos\phi-1},
$$

multiply through:

$$
r(e\cos\phi-1)=r_0.
$$

Since $$r\cos\phi=x$$,

$$
ex-r=r_0.
$$

So

$$
r=ex-r_0.
$$

Square both sides and use $$r^2=x^2+y^2$$:

$$
x^2+y^2=(ex-r_0)^2.
$$

Rearrange:

$$
(e^2-1)x^2-2er_0x+r_0^2-y^2=0.
$$

Complete the square:

$$
(e^2-1)\left(x-\frac{er_0}{e^2-1}\right)^2-y^2
=\frac{r_0^2}{e^2-1}.
$$

Thus the hyperbola has asymptotes

$$
y=\pm\sqrt{e^2-1}\left(x-\frac{er_0}{e^2-1}\right).
$$

The impact parameter $$B$$ is the perpendicular distance from the origin to the incoming asymptote. For a line

$$
y=m(x-h),
$$

the distance from the origin is

$$
\frac{\lvert mh \rvert}{\sqrt{m^2+1}}.
$$

Here

$$
m=\sqrt{e^2-1}
$$

and

$$
h=\frac{er_0}{e^2-1}.
$$

Therefore,

$$
B=
\frac{\sqrt{e^2-1}\cdot \frac{er_0}{e^2-1}}
{\sqrt{(e^2-1)+1}}.
$$

Since $$\sqrt{(e^2-1)+1}=e$$,

$$
B=\frac{r_0}{\sqrt{e^2-1}}.
$$

Now substitute

$$
e=\frac{1}{\cos(\alpha/2)}.
$$

Then

$$
e^2-1
=\frac{1}{\cos^2(\alpha/2)}-1
=\tan^2\left(\frac{\alpha}{2}\right).
$$

So

$$
\sqrt{e^2-1}=\tan\left(\frac{\alpha}{2}\right).
$$

Therefore,

$$
\boxed{B(\alpha)=r_0\cot\left(\frac{\alpha}{2}\right)}.
$$

For the particular trajectory in part $$(B)$$, the asymptote angle satisfies

$$
\cos\left(\frac{\alpha}{2}\right)=\frac13,
$$

so

$$
\tan\left(\frac{\alpha}{2}\right)=2\sqrt2.
$$

Therefore, for any trajectory whose asymptote angle matches the one from part $$(B)$$,

$$
B=r_0\cot\left(\frac{\alpha}{2}\right)
=\frac{r_0}{2\sqrt2}.
$$

For the specific particle in part $$(B)$$, $$r_0=4$$, so

$$
B=\frac{4}{2\sqrt2}=\sqrt2\ \mathrm{m}.
$$

Note that the answer may be different depending on how you define the asymptote angle, so always match your work instead of necessarily matching solutions.
:::
::::
