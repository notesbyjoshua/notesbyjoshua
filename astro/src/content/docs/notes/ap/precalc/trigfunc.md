---
title: "Unit 6 & 7: Trigonometric Functions"
description: "AP Precalculus notes on angles, radians, arc length, circular motion, right-triangle trig, unit circle values, and identities."
sidebar:
  order: 5
---

---

## Angles definitions

An **angle** is formed by rotating a ray around a fixed endpoint. The starting ray is called the **initial side**, and the ending ray is called the **terminal side**.

An angle is in **standard position** if:

- its vertex is at the origin,
- its initial side lies on the positive $$x$$-axis,
- its terminal side is determined by rotating from the positive $$x$$-axis.

```tikz
\usepackage{tikz}
\usetikzlibrary{angles,arrows.meta,quotes}
\begin{tikzpicture}[>=Stealth, scale=1.05]
\draw[->, gray!70] (-1.1,0) -- (4.2,0) node[right] {$x$};
\draw[->, gray!70] (0,-0.8) -- (0,3.1) node[above] {$y$};
\coordinate (O) at (0,0);
\coordinate (I) at (3.4,0);
\coordinate (T) at (2.35,2.05);
\draw[very thick, blue] (O) -- (I) node[below right] {initial side};
\draw[very thick, red!80!black, ->] (O) -- (T) node[above right] {terminal side};
\draw[red!70!black, thick, ->] (1.0,0) arc[start angle=0,end angle=41,radius=1.0];
\node[red!70!black, anchor=west] at (1.24,0.82) {$\theta>0$};
\fill (O) circle (1.5pt) node[below left] {vertex};
\node[align=center] at (2.8,-0.65) {standard position};
\end{tikzpicture}
```

By definition, counterclockwise rotations are positive, and clockwise rotations are negative.

For example, $$135^\circ$$ is a positive angle, while $$-45^\circ$$ is a negative angle.

### Degrees and radians

Degrees measure angles by splitting a full circle into $$360$$ equal parts. **Radians** measure angles by comparing arc length to radius, where one radian is the angle an arc length that measures out $$r$$ units.

One full circle is

$$
360^\circ=2\pi\text{ radians}.
$$

so therefore

$$
180^\circ=\pi\text{ radians}.
$$

<div class="theorem-box">

**Extension.** The radian is a unitless measure, meaning that it is not arbitrarily set. Why is there always $$2\pi$$ radians in a circle?

</div>

<div class="theorem-box">

**Example.** Convert $$225^\circ$$ to radians.

Multiply by $$\frac{\pi}{180}$$:

$$
225^\circ\cdot\frac{\pi}{180}
=\frac{225\pi}{180}
=\frac{5\pi}{4}.
$$

Thus

$$
225^\circ=\frac{5\pi}{4}.
$$

</div>

<div class="theorem-box">

**Example.** Convert $$-\frac{4\pi}{3}$$ radians to degrees.

Multiply by $$\frac{180}{\pi}$$:

$$
-\frac{4\pi}{3}\cdot\frac{180}{\pi}
=-240^\circ.
$$

Thus

$$
-\frac{4\pi}{3}=-240^\circ.
$$

</div>

### Common angles

These are the most important degree-radian conversions, but many other conversions can be done through trig rules which will be discussed later:

$$
\begin{array}{c|c}
\text{Degrees} & \text{Radians}\\
\hline
0^\circ & 0\\
30^\circ & \frac{\pi}{6}\\
45^\circ & \frac{\pi}{4}\\
60^\circ & \frac{\pi}{3}\\
90^\circ & \frac{\pi}{2}\\
120^\circ & \frac{2\pi}{3}\\
135^\circ & \frac{3\pi}{4}\\
150^\circ & \frac{5\pi}{6}\\
180^\circ & \pi\\
210^\circ & \frac{7\pi}{6}\\
225^\circ & \frac{5\pi}{4}\\
240^\circ & \frac{4\pi}{3}\\
270^\circ & \frac{3\pi}{2}\\
300^\circ & \frac{5\pi}{3}\\
315^\circ & \frac{7\pi}{4}\\
330^\circ & \frac{11\pi}{6}\\
360^\circ & 2\pi
\end{array}
$$

---

## Arc length and sector area

Radians are useful because they connect angles directly to lengths on a circle.

If a central angle $$\theta$$ cuts off an arc of length $$s$$ on a circle of radius $$r$$, then

$$
\theta=\frac{s}{r}.
$$

Solving for arc length gives

$$
s=r\theta.
$$

The angle $$\theta$$ must be measured in radians.

:::warning
The arc length and sector formulas require $$\theta$$ in radians, not degrees. On your calculator, if you go to **MODE**, you can switch from degrees to radians.
:::

<div class="theorem-box">

**Example.** Find the arc length of a circle of radius $$3$$ meters subtended by a central angle of $$120^\circ$$.

First convert the angle to radians:

$$
120^\circ\cdot\frac{\pi}{180}=\frac{2\pi}{3}.
$$

Then use $$s=r\theta$$:

$$
s=3\cdot\frac{2\pi}{3}=2\pi.
$$

So the arc length is

$$
2\pi\text{ meters}.
$$

</div>

<div class="theorem-box">

**Example.** Find the radius of a circle whose arc length is $$6$$ meters and whose central angle is $$\frac14$$ radian.

Use

$$
s=r\theta.
$$

Then

$$
6=r\left(\frac14\right).
$$

Thus

$$
r=24\text{ meters}.
$$

</div>

### Sector area

A **sector** is a region cut out by two radii and the arc between them. If $$\theta$$ is measured in radians, the area of a sector is

$$
A=\frac12r^2\theta.
$$

This comes from taking the fraction $$\frac{\theta}{2\pi}$$ of the full circle area $$\pi r^2$$:

$$
A=\frac{\theta}{2\pi}\cdot \pi r^2=\frac12r^2\theta.
$$

<div class="theorem-box">

**Example.** Find the area of a sector with radius $$6$$ and central angle $$\frac{5\pi}{6}$$.

Use the sector area formula:

$$
A=\frac12r^2\theta.
$$

Then

$$
A=\frac12(6)^2\left(\frac{5\pi}{6}\right)
=18\cdot\frac{5\pi}{6}
=15\pi.
$$

Thus

$$
15\pi.
$$

</div>

---

## Circular motion

When an object moves around a circle, there are two related speeds:

- **Angular speed** measures how quickly the angle changes.
- **Linear speed** measures how quickly the object moves along the circle.

If an angle $$\theta$$ is swept out in time $$t$$, then the angular speed is

$$
\omega=\frac{\theta}{t}.
$$

If a distance $$d$$ is traveled along the circle in time $$t$$, then the linear speed is

$$
v=\frac{d}{t}.
$$

Since arc length is $$s=r\theta$$, linear speed and angular speed are connected by

$$
v=r\omega.
$$

Again, angular speed must be measured in radians per unit time.

<div class="theorem-box">

**Example.** A wheel rotates at $$15$$ revolutions per second. The radius of the wheel is $$20$$ cm. Find the angular speed in radians per second and the linear speed of a point on the edge of the wheel.

One revolution is $$2\pi$$ radians, so

$$
\omega=15\cdot 2\pi=30\pi.
$$

Thus the angular speed is

$$
30\pi\text{ rad/sec}.
$$

Now use $$v=r\omega$$:

$$
v=20(30\pi)=600\pi.
$$

So the linear speed is

$$
600\pi\text{ cm/sec}.
$$

</div>

---

## Right-triangle trigonometry

For an acute angle $$\theta$$ in a right triangle, the three main trigonometric ratios are:

$$
\sin\theta=\frac{\text{opposite}}{\text{hypotenuse}},
$$

$$
\cos\theta=\frac{\text{adjacent}}{\text{hypotenuse}},
$$

and

$$
\tan\theta=\frac{\text{opposite}}{\text{adjacent}}.
$$

A common memory device is **SOH-CAH-TOA**:

- **S**ine = **O**pposite over **H**ypotenuse.
- **C**osine = **A**djacent over **H**ypotenuse.
- **T**angent = **O**pposite over **A**djacent.

The reciprocal trigonometric functions are also defined as well:

$$
\csc\theta=\frac{1}{\sin\theta}
=\frac{\text{hypotenuse}}{\text{opposite}},
$$

$$
\sec\theta=\frac{1}{\cos\theta}
=\frac{\text{hypotenuse}}{\text{adjacent}},
$$

and

$$
\cot\theta=\frac{1}{\tan\theta}
=\frac{\text{adjacent}}{\text{opposite}}
$$

The three functions are called cosecant, secant, and cotangent, respectively. To memorize, remember that you have to add co- to any trig function without a co- and do not add one otherwise.

<div class="theorem-box">

**Example.** A right triangle has legs $$6$$ and $$2$$. Find the six trigonometric functions for the acute angle opposite the side of length $$6$$.

First find the hypotenuse:

$$
c=\sqrt{6^2+2^2}=\sqrt{40}=2\sqrt{10}.
$$

For the angle opposite the side of length $$6$$:

$$
\sin\theta=\frac{6}{2\sqrt{10}}=\frac{3}{\sqrt{10}},
$$

$$
\cos\theta=\frac{2}{2\sqrt{10}}=\frac{1}{\sqrt{10}},
$$

and

$$
\tan\theta=\frac{6}{2}=3.
$$

The reciprocal functions are

$$
\csc\theta=\frac{\sqrt{10}}{3},
$$

$$
\sec\theta=\sqrt{10},
$$

and

$$
\cot\theta=\frac13.
$$

</div>

### Cofunction identities

The acute angles in a right triangle are complementary. This means their measures add to $$90^\circ$$, or $$\frac{\pi}{2}$$ radians.

Cofunctions of complementary angles are equal:

$$
\sin\theta=\cos\left(\frac{\pi}{2}-\theta\right),
$$

$$
\cos\theta=\sin\left(\frac{\pi}{2}-\theta\right),
$$

$$
\tan\theta=\cot\left(\frac{\pi}{2}-\theta\right),
$$

and

$$
\sec\theta=\csc\left(\frac{\pi}{2}-\theta\right).
$$

For example,

$$
\sin 37^\circ=\cos 53^\circ.
$$

<div class="theorem-box">

**Extension.** Prove the six theorems above.

</div>

---

## Special right triangles

Two special triangles produce many exact trigonometric values.

### The 30-60-90 triangle

A $$30^\circ$$-$$60^\circ$$-$$90^\circ$$ triangle has side ratio

$$
x:x\sqrt3:2x.
$$

The side opposite $$30^\circ$$ is $$x$$, the side opposite $$60^\circ$$ is $$x\sqrt3$$, and the hypotenuse is $$2x$$.

Therefore:

$$
\sin 30^\circ=\frac12,
\qquad
\cos 30^\circ=\frac{\sqrt3}{2},
\qquad
\tan 30^\circ=\frac{1}{\sqrt3}.
$$

Also:

$$
\sin 60^\circ=\frac{\sqrt3}{2},
\qquad
\cos 60^\circ=\frac12,
\qquad
\tan 60^\circ=\sqrt3.
$$

### The 45-45-90 triangle

A $$45^\circ$$-$$45^\circ$$-$$90^\circ$$ triangle has side ratio

$$
x:x:x\sqrt2.
$$

Therefore:

$$
\sin 45^\circ=\frac{1}{\sqrt2}=\frac{\sqrt2}{2},
$$

$$
\cos 45^\circ=\frac{1}{\sqrt2}=\frac{\sqrt2}{2},
$$

and

$$
\tan 45^\circ=1.
$$

All of the values seen on a traditional unit circle come from these two special right triangles.

---

## Trig functions of any angle

Right-triangle definitions only directly handle acute angles. To define trig functions for any angle, use the unit circle.

The **unit circle** is the circle

$$
x^2+y^2=1.
$$

If an angle $$\theta$$ is in standard position and its terminal side intersects the unit circle at $$P(x,y)$$, then

$$
x=\cos\theta
$$

and

$$
y=\sin\theta.
$$

So the point on the unit circle is

$$
P=(\cos\theta,\sin\theta).
$$

This also gives

$$
\tan\theta=\frac{y}{x}=\frac{\sin\theta}{\cos\theta},
$$

as long as $$x\ne0$$.

The reciprocal functions are:

$$
\csc\theta=\frac1{\sin\theta},
\qquad
\sec\theta=\frac1{\cos\theta},
\qquad
\cot\theta=\frac1{\tan\theta}=\frac{\cos\theta}{\sin\theta}.
$$

### Quadrant signs

The signs of trig functions depend on the quadrant:

$$
\begin{array}{c|c|c|c}
\text{Quadrant} & \sin\theta & \cos\theta & \tan\theta\\
\hline
\text{I} & + & + & +\\
\text{II} & + & - & -\\
\text{III} & - & - & +\\
\text{IV} & - & + & -
\end{array}
$$

Since sine is the $$y$$-coordinate, it is positive above the $$x$$-axis and negative below it. Since cosine is the $$x$$-coordinate, it is positive to the right of the $$y$$-axis and negative to the left.

### Reference angles

The **reference angle** is the acute angle formed by the terminal side of $$\theta$$ and the $$x$$-axis.

:::strategy
- If $$\theta$$ is in Quadrant I, the reference angle is $$\theta$$.
- If $$\theta$$ is in Quadrant II, the reference angle is $$\pi-\theta$$.
- If $$\theta$$ is in Quadrant III, the reference angle is $$\theta-\pi$$.
- If $$\theta$$ is in Quadrant IV, the reference angle is $$2\pi-\theta$$.

The reference angle gives the magnitude of the trig value. The quadrant gives the sign.
:::

<div class="theorem-box">

**Example.** Evaluate $$\cos 315^\circ$$.

The angle $$315^\circ$$ is in Quadrant IV. Its reference angle is

$$
360^\circ-315^\circ=45^\circ.
$$

Cosine is positive in Quadrant IV, so

$$
\cos 315^\circ=\cos 45^\circ=\frac{\sqrt2}{2}.
$$

Thus

$$
\cos 315^\circ=\frac{\sqrt2}{2}.
$$

</div>

<div class="theorem-box">

**Example.** Evaluate $$\sin\left(\frac{4\pi}{3}\right)$$.

The angle $$\frac{4\pi}{3}$$ is in Quadrant III. Its reference angle is

$$
\frac{4\pi}{3}-\pi=\frac{\pi}{3}.
$$

Sine is negative in Quadrant III, so

$$
\sin\left(\frac{4\pi}{3}\right)
=-\sin\left(\frac{\pi}{3}\right)
=-\frac{\sqrt3}{2}.
$$

Thus

$$
\sin\left(\frac{4\pi}{3}\right)=-\frac{\sqrt3}{2}.
$$

</div>

An image of the unit circle is shown below (with filled in values as described later):

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, scale=2.55]
\draw[->, gray!70] (-1.25,0) -- (1.3,0) node[right] {$x$};
\draw[->, gray!70] (0,-1.25) -- (0,1.3) node[above] {$y$};
\draw[blue, very thick] (0,0) circle (1);
\foreach \ang in {0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330} {
  \draw[gray!65] ({0.97*cos(\ang)},{0.97*sin(\ang)}) -- ({1.05*cos(\ang)},{1.05*sin(\ang)});
  \fill[blue] ({cos(\ang)},{sin(\ang)}) circle (0.012);
}
\node[font=\scriptsize, anchor=west] at (1.12,0) {$0,\ 2\pi$};
\node[font=\scriptsize, anchor=south] at (0,1.12) {$\frac{\pi}{2}$};
\node[font=\scriptsize, anchor=east] at (-1.12,0) {$\pi$};
\node[font=\scriptsize, anchor=north] at (0,-1.12) {$\frac{3\pi}{2}$};
\node[align=center, font=\scriptsize] at (0,-1.48) {points on the unit circle have coordinates $(\cos\theta,\sin\theta)$};
\end{tikzpicture}
```

### Coterminal angles

Two angles are **coterminal** if they share the same terminal side.

In degrees, coterminal angles differ by a multiple of $$360^\circ$$:

$$
\theta+360^\circ k,\qquad k\in\mathbb{Z}.
$$

In radians, coterminal angles differ by a multiple of $$2\pi$$:

$$
\theta+2\pi k,\qquad k\in\mathbb{Z}.
$$

For example, $$120^\circ$$ and $$-240^\circ$$ are coterminal because

$$
120^\circ-360^\circ=-240^\circ.
$$

All coterminal angles will have the same trig values, so usually we define the angles from $$0^\circ$$ to $$360^\circ$$ or from $$0$$ to $$2\pi$$ radians.

---

## Unit circle values

The most common unit circle coordinates are split by half-circle so the values stay readable:

$$
\begin{array}{c|c|c|c}
\theta & \text{Degrees} & \cos\theta & \sin\theta\\
\hline
0 & 0^\circ & 1 & 0\\
\frac{\pi}{6} & 30^\circ & \frac{\sqrt3}{2} & \frac12\\
\frac{\pi}{4} & 45^\circ & \frac{\sqrt2}{2} & \frac{\sqrt2}{2}\\
\frac{\pi}{3} & 60^\circ & \frac12 & \frac{\sqrt3}{2}\\
\frac{\pi}{2} & 90^\circ & 0 & 1\\
\frac{2\pi}{3} & 120^\circ & -\frac12 & \frac{\sqrt3}{2}\\
\frac{3\pi}{4} & 135^\circ & -\frac{\sqrt2}{2} & \frac{\sqrt2}{2}\\
\frac{5\pi}{6} & 150^\circ & -\frac{\sqrt3}{2} & \frac12\\
\pi & 180^\circ & -1 & 0
\end{array}
$$

$$
\begin{array}{c|c|c|c}
\theta & \text{Degrees} & \cos\theta & \sin\theta\\
\hline
\frac{7\pi}{6} & 210^\circ & -\frac{\sqrt3}{2} & -\frac12\\
\frac{5\pi}{4} & 225^\circ & -\frac{\sqrt2}{2} & -\frac{\sqrt2}{2}\\
\frac{4\pi}{3} & 240^\circ & -\frac12 & -\frac{\sqrt3}{2}\\
\frac{3\pi}{2} & 270^\circ & 0 & -1\\
\frac{5\pi}{3} & 300^\circ & \frac12 & -\frac{\sqrt3}{2}\\
\frac{7\pi}{4} & 315^\circ & \frac{\sqrt2}{2} & -\frac{\sqrt2}{2}\\
\frac{11\pi}{6} & 330^\circ & \frac{\sqrt3}{2} & -\frac12\\
2\pi & 360^\circ & 1 & 0
\end{array}
$$

The first-quadrant values are repeated around the circle with signs determined by the quadrant.

For example:

$$
\cos\left(\frac{2\pi}{3}\right)=-\frac12,
\qquad
\sin\left(\frac{2\pi}{3}\right)=\frac{\sqrt3}{2}.
$$

and

$$
\cos\left(\frac{7\pi}{4}\right)=\frac{\sqrt2}{2},
\qquad
\sin\left(\frac{7\pi}{4}\right)=-\frac{\sqrt2}{2}.
$$

Some reciprocal or quotient trig functions are undefined when their denominator is $$0$$:

- $$\tan\theta=\frac{\sin\theta}{\cos\theta}$$ is undefined when $$\cos\theta=0$$.
- $$\sec\theta=\frac1{\cos\theta}$$ is undefined when $$\cos\theta=0$$.
- $$\csc\theta=\frac1{\sin\theta}$$ is undefined when $$\sin\theta=0$$.
- $$\cot\theta=\frac{\cos\theta}{\sin\theta}$$ is undefined when $$\sin\theta=0$$.

For example,

$$
\tan\left(\frac{3\pi}{2}\right)
=\frac{\sin\left(\frac{3\pi}{2}\right)}{\cos\left(\frac{3\pi}{2}\right)}
=\frac{-1}{0},
$$

so

$$
\tan\left(\frac{3\pi}{2}\right)\text{ is undefined}.
$$

---

## Trig identities

The unit circle equation

$$
x^2+y^2=1
$$

becomes the most important trigonometric identity because $$x=\cos\theta$$ and $$y=\sin\theta$$:

:::key{name="Pythagorean identity"}
$$
\sin^2\theta+\cos^2\theta=1.
$$
:::

Dividing both sides by $$\cos^2\theta$$ gives

$$
\frac{\sin^2\theta}{\cos^2\theta}
+\frac{\cos^2\theta}{\cos^2\theta}
=\frac1{\cos^2\theta}.
$$

Thus

$$
1+\tan^2\theta=\sec^2\theta.
$$

Dividing both sides by $$\sin^2\theta$$ gives

$$
1+\cot^2\theta=\csc^2\theta.
$$

### Finding trig values from one trig value

If one trig value is known, the Pythagorean identity and the quadrant can determine the others.

<div class="theorem-box">

**Example.** Suppose $$90^\circ<\beta<180^\circ$$ and $$\sin\beta=\frac14$$. Find $$\cos\beta$$ and $$\tan\beta$$.

Since $$\beta$$ is in Quadrant II, cosine is negative and tangent is negative.

Use

$$
\sin^2\beta+\cos^2\beta=1.
$$

Substitute $$\sin\beta=\frac14$$:

$$
\left(\frac14\right)^2+\cos^2\beta=1.
$$

Then

$$
\cos^2\beta=1-\frac1{16}=\frac{15}{16}.
$$

So

$$
\cos\beta=\pm\frac{\sqrt{15}}{4}.
$$

Because $$\beta$$ is in Quadrant II,

$$
\cos\beta=-\frac{\sqrt{15}}4.
$$

Now

$$
\tan\beta=\frac{\sin\beta}{\cos\beta}
=\frac{\frac14}{-\frac{\sqrt{15}}4}
=-\frac1{\sqrt{15}}.
$$

Thus

$$
\tan\beta=-\frac1{\sqrt{15}}.
$$

</div>

### Proving identities

To prove a trigonometric identity, work on one side of the equation and transform it into the other side.

:::strategy
Common strategies include:

- rewrite everything in terms of sine and cosine,
- use the Pythagorean identities,
- combine fractions,
- substitute if necessary,
- factor,
- multiply by a conjugate when useful.
:::

<div class="theorem-box">

**Example.** Prove that

$$
\tan\theta\sin\theta=\sec\theta-\cos\theta.
$$

Start with the left-hand side:

$$
\tan\theta\sin\theta
=\frac{\sin\theta}{\cos\theta}\cdot\sin\theta.
$$

So

$$
\tan\theta\sin\theta
=\frac{\sin^2\theta}{\cos\theta}.
$$

Use $$\sin^2\theta=1-\cos^2\theta$$:

$$
\frac{\sin^2\theta}{\cos\theta}
=\frac{1-\cos^2\theta}{\cos\theta}.
$$

Split the fraction:

$$
\frac{1-\cos^2\theta}{\cos\theta}
=\frac1{\cos\theta}-\frac{\cos^2\theta}{\cos\theta}.
$$

Simplify:

$$
\frac1{\cos\theta}-\cos\theta
=\sec\theta-\cos\theta.
$$

Thus

$$
\tan\theta\sin\theta=\sec\theta-\cos\theta.
$$

</div>

<div class="theorem-box">

**Example.** Prove that

$$
\frac{\sin A}{1+\cos A}+\frac{1+\cos A}{\sin A}=2\csc A.
$$

Start with the left-hand side:

$$
\frac{\sin A}{1+\cos A}+\frac{1+\cos A}{\sin A}.
$$

Use the common denominator $$\sin A(1+\cos A)$$:

$$
\frac{\sin^2 A+(1+\cos A)^2}{\sin A(1+\cos A)}.
$$

Expand the numerator:

$$
\sin^2 A+1+2\cos A+\cos^2 A.
$$

Use $$\sin^2 A+\cos^2 A=1$$:

$$
\sin^2 A+1+2\cos A+\cos^2 A
=2+2\cos A.
$$

So the expression becomes

$$
\frac{2+2\cos A}{\sin A(1+\cos A)}.
$$

Factor the numerator:

$$
\frac{2(1+\cos A)}{\sin A(1+\cos A)}.
$$

Cancel:

$$
\frac2{\sin A}=2\csc A.
$$

Thus

$$
\frac{\sin A}{1+\cos A}+\frac{1+\cos A}{\sin A}=2\csc A.
$$

</div>

---

## Even, odd, and periodic behavior

The unit circle also explains the symmetry between trig functions.

Cosine is an even function:

$$
\cos(-\theta)=\cos\theta.
$$

Sine and tangent are odd functions:

$$
\sin(-\theta)=-\sin\theta
$$

and

$$
\tan(-\theta)=-\tan\theta.
$$

Sine and cosine are periodic with period $$2\pi$$:

$$
\sin(\theta+2\pi k)=\sin\theta
$$

and

$$
\cos(\theta+2\pi k)=\cos\theta,
$$

where $$k$$ is any integer.

Tangent has period $$\pi$$:

$$
\tan(\theta+\pi k)=\tan\theta.
$$

<div class="theorem-box">

**Example.** If $$\sin t=\frac23$$, find $$\sin(-t)$$.

Since sine is odd,

$$
\sin(-t)=-\sin t.
$$

Therefore

$$
\sin(-t)=-\frac23.
$$

</div>

---

## Graphs of sine and cosine

The parent sine function is

$$
y=\sin x.
$$

It has:

- Domain: $$(-\infty,\infty)$$.
- Range: $$[-1,1]$$.
- Period: $$2\pi$$.
- Amplitude: $$1$$.
- Midline: $$y=0$$.

One full cycle of $$y=\sin x$$ goes through these key points:

$$
\left(0,0\right),
\left(\frac{\pi}{2},1\right),
\left(\pi,0\right),
\left(\frac{3\pi}{2},-1\right),
\left(2\pi,0\right).
$$

The parent cosine function is

$$
y=\cos x.
$$

It has:

- Domain: $$(-\infty,\infty)$$.
- Range: $$[-1,1]$$.
- Period: $$2\pi$$.
- Amplitude: $$1$$.
- Midline: $$y=0$$.

One full cycle of $$y=\cos x$$ goes through these key points:

$$
\left(0,1\right),
\left(\frac{\pi}{2},0\right),
\left(\pi,-1\right),
\left(\frac{3\pi}{2},0\right),
\left(2\pi,1\right).
$$

Sine and cosine are phase shifts of each other. For example,

$$
\cos x=\sin\left(x+\frac{\pi}{2}\right).
$$

### Solving basic trig equations with graphs

Graphs and the unit circle both help solve equations like $$\sin x=0.75$$ or $$\cos x=-0.35$$ on an interval.

<div class="theorem-box">

**Example.** Solve $$\sin x=0.75$$ on $$[0,2\pi)$$.

The calculator gives the first solution

$$
x\approx \sin^{-1}(0.75)\approx 0.848.
$$

Since sine is also positive in Quadrant II, the second solution is

$$
x=\pi-0.848\approx 2.294.
$$

Thus

$$
x\approx0.848\quad\text{or}\quad x\approx2.294.
$$

</div>

<div class="theorem-box">

**Example.** Solve $$\cos x=-0.35$$ on $$[0,2\pi)$$.

Cosine is negative in Quadrants II and III. The calculator gives

$$
x\approx \cos^{-1}(-0.35)\approx 1.928.
$$

The second solution is

$$
x=2\pi-1.928\approx 4.355.
$$

Thus

$$
x\approx1.928\quad\text{or}\quad x\approx4.355.
$$

</div>

:::warning
REMEMBER to always check for multiple solutions using the trig rules!
:::

---

## Practice

::::problem
1. Let $$\theta=-\frac{29\pi}{6}$$.

   $$(A)$$ Find the least positive coterminal angle with $$\theta$$.

   $$(B)$$ Convert both angles to degrees.

   $$(C)$$ Find the reference angle and quadrant of $$\theta$$.

   $$(D)$$ Evaluate all six trigonometric functions of $$\theta$$ exactly.

:::solution
Add multiples of $$2\pi$$ to find a positive coterminal angle:

$$
-\frac{29\pi}{6}+3(2\pi)
=-\frac{29\pi}{6}+\frac{36\pi}{6}
=\frac{7\pi}{6}.
$$

This is positive, but not least positive, since

$$
\frac{7\pi}{6}-2\pi=-\frac{5\pi}{6}<0.
$$

So the least positive coterminal angle is

$$
\boxed{\frac{7\pi}{6}}.
$$

Convert the original angle to degrees:

$$
-\frac{29\pi}{6}\cdot\frac{180}{\pi}
=-870^\circ.
$$

Also,

$$
\frac{7\pi}{6}\cdot\frac{180}{\pi}
=210^\circ.
$$

Thus

$$
\boxed{-\frac{29\pi}{6}=-870^\circ,\qquad \frac{7\pi}{6}=210^\circ}.
$$

The angle $$\frac{7\pi}{6}$$ is in Quadrant III, and its reference angle is

$$
\frac{7\pi}{6}-\pi=\frac{\pi}{6}.
$$

So

$$
\boxed{\text{reference angle }=\frac{\pi}{6},\quad \text{Quadrant III}}.
$$

Since $$\theta$$ is coterminal with $$\frac{7\pi}{6}$$,

$$
\sin\theta=-\frac12,
\qquad
\cos\theta=-\frac{\sqrt3}{2},
\qquad
\tan\theta=\frac{\sqrt3}{3}.
$$

The reciprocal functions are

$$
\csc\theta=-2,
\qquad
\sec\theta=-\frac{2\sqrt3}{3},
\qquad
\cot\theta=\sqrt3.
$$
:::
::::

::::problem
2. A sector of a circle has perimeter $$40$$ cm and central angle $$\frac{5\pi}{6}$$. Find the radius, arc length, and area of the sector exactly.

:::solution
For a sector,

$$
P=2r+s.
$$

Since $$s=r\theta$$,

$$
P=2r+r\theta=r(2+\theta).
$$

We are given $$P=40$$ and $$\theta=\frac{5\pi}{6}$$, so

$$
40=r\left(2+\frac{5\pi}{6}\right).
$$

Thus

$$
r=\frac{40}{2+\frac{5\pi}{6}}
=\frac{240}{12+5\pi}.
$$

So

$$
\boxed{r=\frac{240}{12+5\pi}\text{ cm}}.
$$

The arc length is

$$
s=r\theta
=\frac{240}{12+5\pi}\cdot\frac{5\pi}{6}
=\frac{200\pi}{12+5\pi}.
$$

Thus

$$
\boxed{s=\frac{200\pi}{12+5\pi}\text{ cm}}.
$$

The sector area is

$$
A=\frac12r^2\theta.
$$

So

$$
A=\frac12\left(\frac{240}{12+5\pi}\right)^2\left(\frac{5\pi}{6}\right)
=\frac{24000\pi}{(12+5\pi)^2}.
$$

Therefore

$$
\boxed{A=\frac{24000\pi}{(12+5\pi)^2}\text{ cm}^2}.
$$
:::
::::

::::problem
3. A wheel of radius $$18$$ cm rotates counterclockwise at $$45$$ revolutions per minute. A bug starts at the point on the wheel closest to the ground. After $$7$$ seconds, find the bug's angle in standard position, its coordinates relative to the center of the wheel, and its linear speed in cm/sec.

:::solution
The wheel rotates at

$$
45\text{ rev/min}=45(2\pi)=90\pi\text{ rad/min}.
$$

Convert to radians per second:

$$
\omega=\frac{90\pi}{60}=\frac{3\pi}{2}\text{ rad/sec}.
$$

The bug starts at the point closest to the ground, so its starting angle is

$$
\frac{3\pi}{2}.
$$

After $$7$$ seconds, the angle swept out is

$$
\omega t=\frac{3\pi}{2}(7)=\frac{21\pi}{2}.
$$

The total angle is

$$
\frac{3\pi}{2}+\frac{21\pi}{2}
=\frac{24\pi}{2}
=12\pi.
$$

This is coterminal with $$0$$, so the bug is at

$$
\boxed{(18,0)}.
$$

The angle in standard position is

$$
\boxed{0\text{ radians}}
$$

after reducing coterminally.

The linear speed is

$$
v=r\omega=18\cdot\frac{3\pi}{2}=27\pi.
$$

Thus

$$
\boxed{v=27\pi\text{ cm/sec}}.
$$
:::
::::

::::problem
4. A pulley system has two wheels connected by a belt without slipping. Wheel A has radius $$4$$ inches and rotates at $$150$$ revolutions per minute. Wheel B rotates at $$60$$ revolutions per minute. Find the radius of Wheel B. Then find the linear belt speed in inches per second.

:::solution
Wheel A rotates at

$$
150\text{ rev/min}=300\pi\text{ rad/min}.
$$

Its linear speed is

$$
v=r\omega=4(300\pi)=1200\pi\text{ in/min}.
$$

The belt does not slip, so Wheel B has the same linear speed.

Wheel B rotates at

$$
60\text{ rev/min}=120\pi\text{ rad/min}.
$$

So

$$
1200\pi=r_B(120\pi).
$$

Therefore

$$
\boxed{r_B=10\text{ inches}}.
$$

Convert the belt speed to inches per second:

$$
1200\pi\text{ in/min}
=\frac{1200\pi}{60}\text{ in/sec}
=20\pi\text{ in/sec}.
$$

Thus

$$
\boxed{20\pi\text{ in/sec}}.
$$
:::
::::

::::problem
5. Let $$\theta$$ be in Quadrant II and suppose $$\tan\theta=-\frac{8}{15}$$. Find exact values of $$\sin\theta$$, $$\cos\theta$$, $$\sec\theta$$, $$\csc\theta$$, and $$\cot\theta$$. Then evaluate $$\sin(\pi-\theta)$$ and $$\cos(\theta+\pi)$$.

:::solution
Since $$\theta$$ is in Quadrant II and

$$
\tan\theta=-\frac{8}{15},
$$

we can use a reference triangle with opposite side $$8$$, adjacent side $$-15$$, and hypotenuse

$$
\sqrt{8^2+15^2}=17.
$$

Thus

$$
\boxed{\sin\theta=\frac8{17}},
\qquad
\boxed{\cos\theta=-\frac{15}{17}},
\qquad
\boxed{\tan\theta=-\frac8{15}}.
$$

The reciprocal functions are

$$
\boxed{\sec\theta=-\frac{17}{15}},
\qquad
\boxed{\csc\theta=\frac{17}{8}},
\qquad
\boxed{\cot\theta=-\frac{15}{8}}.
$$

Now,

$$
\sin(\pi-\theta)=\sin\theta=\frac8{17}.
$$

Also,

$$
\cos(\theta+\pi)=-\cos\theta=\frac{15}{17}.
$$

So

$$
\boxed{\sin(\pi-\theta)=\frac8{17}},
\qquad
\boxed{\cos(\theta+\pi)=\frac{15}{17}}.
$$
:::
::::

::::problem
6. Let $$P=(x,y)$$ be a point on the unit circle in Quadrant III. If $$x-y=\frac{\sqrt2}{2}$$, find $$P$$ and the angle $$\theta\in[0,2\pi)$$ whose terminal side passes through $$P$$.

:::solution
Since $$P=(x,y)$$ is on the unit circle,

$$
x^2+y^2=1.
$$

We are also given

$$
x-y=\frac{\sqrt2}{2}.
$$

So

$$
y=x-\frac{\sqrt2}{2}.
$$

Substitute:

$$
x^2+\left(x-\frac{\sqrt2}{2}\right)^2=1.
$$

Expand:

$$
x^2+x^2-\sqrt2x+\frac12=1.
$$

Thus

$$
2x^2-\sqrt2x-\frac12=0.
$$

Multiply by $$2$$:

$$
4x^2-2\sqrt2x-1=0.
$$

Use the quadratic formula:

$$
x=\frac{2\sqrt2\pm\sqrt{8+16}}{8}
=\frac{2\sqrt2\pm2\sqrt6}{8}
=\frac{\sqrt2\pm\sqrt6}{4}.
$$

Since the point is in Quadrant III, $$x<0$$. Therefore

$$
x=\frac{\sqrt2-\sqrt6}{4}.
$$

Then

$$
y=x-\frac{\sqrt2}{2}
=\frac{\sqrt2-\sqrt6}{4}-\frac{2\sqrt2}{4}
=-\frac{\sqrt2+\sqrt6}{4}.
$$

So

$$
\boxed{P=\left(\frac{\sqrt2-\sqrt6}{4},-\frac{\sqrt2+\sqrt6}{4}\right)}.
$$

This is the unit-circle point for

$$
\boxed{\theta=\frac{17\pi}{12}}.
$$

Equivalently, $$\theta\approx4.451$$ radians.
:::
::::

::::problem
7. Evaluate exactly: $$6\sin\left(-\frac{7\pi}{6}\right)-4\cos\left(\frac{11\pi}{3}\right)+3\tan\left(-\frac{13\pi}{4}\right)-2\sec\left(\frac{17\pi}{6}\right).$$

:::solution
Use coterminal angles:

$$
\sin\left(-\frac{7\pi}{6}\right)=\sin\left(\frac{5\pi}{6}\right)=\frac12.
$$

Also,

$$
\cos\left(\frac{11\pi}{3}\right)=\cos\left(\frac{5\pi}{3}\right)=\frac12.
$$

Next,

$$
\tan\left(-\frac{13\pi}{4}\right)=\tan\left(\frac{3\pi}{4}\right)=-1.
$$

Finally,

$$
\sec\left(\frac{17\pi}{6}\right)=\sec\left(\frac{5\pi}{6}\right)
=\frac1{-\frac{\sqrt3}{2}}
=-\frac{2\sqrt3}{3}.
$$

Substitute:

$$
6\left(\frac12\right)
-4\left(\frac12\right)
+3(-1)
-2\left(-\frac{2\sqrt3}{3}\right).
$$

This becomes

$$
3-2-3+\frac{4\sqrt3}{3}.
$$

Therefore

$$
\boxed{-2+\frac{4\sqrt3}{3}}.
$$
:::
::::

::::problem
8. Solve exactly on $$[0,4\pi)$$: $$2\sin^2x-\sin x-1=0.$$

:::solution
Let

$$
u=\sin x.
$$

Then

$$
2u^2-u-1=0.
$$

Factor:

$$
(2u+1)(u-1)=0.
$$

Thus

$$
\sin x=1
\qquad\text{or}\qquad
\sin x=-\frac12.
$$

On $$[0,4\pi)$$, $$\sin x=1$$ at

$$
x=\frac{\pi}{2},\frac{5\pi}{2}.
$$

Also, $$\sin x=-\frac12$$ at

$$
x=\frac{7\pi}{6},\frac{11\pi}{6},\frac{19\pi}{6},\frac{23\pi}{6}.
$$

Therefore

$$
\boxed{x=\frac{\pi}{2},\frac{7\pi}{6},\frac{11\pi}{6},\frac{5\pi}{2},\frac{19\pi}{6},\frac{23\pi}{6}}.
$$
:::
::::

::::problem
9. Solve exactly on $$[0,2\pi)$$:$$2\cos^2x+\sqrt3\cos x-1=0.$$

:::solution
Let

$$
u=\cos x.
$$

Then

$$
2u^2+\sqrt3u-1=0.
$$

Use the quadratic formula:

$$
u=\frac{-\sqrt3\pm\sqrt{3+8}}{4}
=\frac{-\sqrt3\pm\sqrt{11}}{4}.
$$

The value

$$
\frac{-\sqrt3-\sqrt{11}}{4}
$$

is less than $$-1$$, so it is impossible for $$\cos x$$. Thus

$$
\cos x=\frac{\sqrt{11}-\sqrt3}{4}.
$$

On $$[0,2\pi)$$, cosine is positive in Quadrants I and IV, so

$$
\boxed{x=\cos^{-1}\left(\frac{\sqrt{11}-\sqrt3}{4}\right)
\quad\text{or}\quad
x=2\pi-\cos^{-1}\left(\frac{\sqrt{11}-\sqrt3}{4}\right)}.
$$
:::
::::

::::problem
10. Solve exactly on $$[0,3\pi)$$:$$\tan^2x-3=0.$$

:::solution
We have

$$
\tan^2x-3=0.
$$

So

$$
\tan^2x=3,
$$

which gives

$$
\tan x=\pm\sqrt3.
$$

The tangent function has period $$\pi$$. On $$[0,3\pi)$$, the solutions are

$$
\boxed{x=\frac{\pi}{3},\frac{2\pi}{3},\frac{4\pi}{3},\frac{5\pi}{3},\frac{7\pi}{3},\frac{8\pi}{3}}.
$$
:::
::::

::::problem
11. The radius of the circle in the figure is 2 units. Express the length of $$DC$$ in terms of $$\alpha$$.

   ```tikz
   \usepackage{tikz}
   \usetikzlibrary{angles,quotes,calc}
   \begin{tikzpicture}[scale=1.15]
   \coordinate (O) at (0,0);
   \coordinate (A) at (1.55,0);
   \coordinate (B) at (1.55,1.26);
   \coordinate (C) at (2,0);
   \coordinate (D) at (2,1.63);
   \draw[->, gray!70] (-2.4,0) -- (2.55,0) node[right] {$x$};
   \draw[->, gray!70] (0,-2.25) -- (0,2.55) node[above] {$y$};
   \draw[blue, very thick] (O) circle (2);
   \draw[blue, very thick] (O) -- (D);
   \draw[blue, very thick] (A) -- (B);
   \draw[blue, very thick] (C) -- (D);
   \draw pic[draw, "$\alpha$", angle radius=0.55cm] {angle=C--O--D};
   \draw ($(A)+(0,0.18)$) -- ($(A)+(0.18,0.18)$) -- ($(A)+(0.18,0)$);
   \draw ($(C)+(0,0.18)$) -- ($(C)+(0.18,0.18)$) -- ($(C)+(0.18,0)$);
   \node[below left] at (O) {$O$};
   \node[below] at (A) {$A$};
   \node[anchor=south east, xshift=-4pt, yshift=4pt] at (B) {$B$};
   \node[anchor=north east, xshift=-3pt, yshift=-4pt] at (C) {$C$};
   \node[above right] at (D) {$D$};
   \end{tikzpicture}
   ```

:::solution
The radius of the circle is $$2$$, and $$C$$ is the point on the positive $$x$$-axis at the right edge of the circle. Thus

$$
OC=2.
$$

The ray from $$O$$ through $$B$$ and $$D$$ makes angle $$\alpha$$ with the positive $$x$$-axis. In right triangle $$ODC$$,

$$
\tan\alpha=\frac{DC}{OC}.
$$

Substitute $$OC=2$$:

$$
\tan\alpha=\frac{DC}{2}.
$$

Therefore

$$
\boxed{DC=2\tan\alpha}.
$$
:::
::::

::::problem
12. Prove the identity: $$\frac{1-\cos\theta}{\sin\theta}+\frac{\sin\theta}{1-\cos\theta}=2\csc\theta.$$ Then state all values of $$\theta$$ in $$[0,2\pi)$$ for which the original identity is undefined.

:::solution
Start with the left-hand side:

$$
\frac{1-\cos\theta}{\sin\theta}+\frac{\sin\theta}{1-\cos\theta}.
$$

Use the common denominator $$\sin\theta(1-\cos\theta)$$:

$$
\frac{(1-\cos\theta)^2+\sin^2\theta}{\sin\theta(1-\cos\theta)}.
$$

Expand the numerator:

$$
1-2\cos\theta+\cos^2\theta+\sin^2\theta.
$$

Use $$\sin^2\theta+\cos^2\theta=1$$:

$$
1-2\cos\theta+\cos^2\theta+\sin^2\theta
=2-2\cos\theta.
$$

So the expression becomes

$$
\frac{2-2\cos\theta}{\sin\theta(1-\cos\theta)}.
$$

Factor:

$$
\frac{2(1-\cos\theta)}{\sin\theta(1-\cos\theta)}.
$$

Cancel:

$$
\frac2{\sin\theta}=2\csc\theta.
$$

Therefore

$$
\boxed{\frac{1-\cos\theta}{\sin\theta}+\frac{\sin\theta}{1-\cos\theta}=2\csc\theta}.
$$

The original expression is undefined when

$$
\sin\theta=0
$$

or

$$
1-\cos\theta=0.
$$

On $$[0,2\pi)$$, this happens at

$$
\boxed{\theta=0,\pi}.
$$
:::
::::

::::problem
13. Prove the identity: $$\frac{1}{\cos\theta\sin^2\theta}=\sec\theta+\csc\theta\cot\theta.$$

:::solution
Prove the identity:

$$\frac{1}{\cos\theta\sin^2\theta}=\sec\theta+\csc\theta\cot\theta.$$

Start with the right side:

$$\sec\theta+\csc\theta\cot\theta$$

Rewrite everything in terms of sine and cosine:

$$=\frac{1}{\cos\theta}+\frac{1}{\sin\theta}\cdot\frac{\cos\theta}{\sin\theta}$$

Simplify:

$$=\frac{1}{\cos\theta}+\frac{\cos\theta}{\sin^2\theta}$$

Find a common denominator:

$$=\frac{\sin^2\theta}{\cos\theta\sin^2\theta}+\frac{\cos^2\theta}{\cos\theta\sin^2\theta}$$

Combine:

$$=\frac{\sin^2\theta+\cos^2\theta}{\cos\theta\sin^2\theta}$$

Use the identity:

$$\sin^2\theta+\cos^2\theta=1$$

So:

$$=\frac{1}{\cos\theta\sin^2\theta}$$

Therefore,

$$\frac{1}{\cos\theta\sin^2\theta}=\sec\theta+\csc\theta\cot\theta.$$


:::
::::

::::problem
14. For each of the following trigonometric expressions, find a segment in the diagram that has length equal to the trigonometric expression: $$\sin\theta, \cos\theta, \sec\theta, \csc\theta, \tan\theta, \cot\theta$$. Note that you are not asked to express each trigonometric function in terms of multiple segments in the diagram. You must find a segment whose whole length equals the corresponding trig function. The graph is given below:

   ```tikz
   \usepackage{tikz}
   \usetikzlibrary{angles,quotes,calc}
   \begin{tikzpicture}[scale=2.25]
   \def\c{0.766}
   \def\s{0.643}
   \coordinate (O) at (0,0);
   \coordinate (A) at (\c,\s);
   \coordinate (C) at (\c,0);
   \coordinate (D) at ({1/\c},0);
   \coordinate (B) at (0,{1/\s});
   \draw[gray!70, ->] (-1.15,0) -- (1.65,0) node[right] {$x$};
   \draw[gray!70, ->] (0,-1.15) -- (0,1.85) node[above] {$y$};
   \draw[blue, very thick] (O) circle (1);
   \draw[very thick] (O) -- (A);
   \draw[very thick] (A) -- (C);
   \draw[very thick] (O) -- (B);
   \draw[very thick] (A) -- (B);
   \draw[very thick] (A) -- (D);
   \draw pic[draw, "$\theta$", angle radius=0.25cm] {angle=C--O--A};
   \draw ($(C)+(0,0.09)$) -- ($(C)+(0.09,0.09)$) -- ($(C)+(0.09,0)$);
   \draw ($(O)+(0.09,0)$) -- ($(O)+(0.09,0.09)$) -- ($(O)+(0,0.09)$);
   \draw ($(A)+(-0.06,0.07)$) -- ($(A)+(0.01,0.13)$) -- ($(A)+(0.07,0.06)$);
   \node[below left] at (O) {$O$};
   \node[above right] at (A) {$A$};
   \node[anchor=north, yshift=-5pt] at (C) {$C$};
   \node[below right] at (D) {$D$};
   \node[left] at (B) {$B$};
   \end{tikzpicture}
   ```

:::solution
In the diagram, the circle is the unit circle and $$A=(\cos\theta,\sin\theta)$$.

The horizontal segment from the origin to the foot under $$A$$ is

$$
\boxed{OC=\cos\theta}.
$$

The vertical segment from the $$x$$-axis up to $$A$$ is

$$
\boxed{AC=\sin\theta}.
$$

The line through $$A$$ is tangent to the unit circle. Its equation is

$$
x\cos\theta+y\sin\theta=1.
$$

At the $$x$$-intercept, $$y=0$$, so

$$
x\cos\theta=1
$$

and

$$
x=\sec\theta.
$$

Thus

$$
\boxed{OD=\sec\theta}.
$$

At the $$y$$-intercept, $$x=0$$, so

$$
y\sin\theta=1
$$

and

$$
y=\csc\theta.
$$

Thus

$$
\boxed{OB=\csc\theta}.
$$

The tangent segment from $$A$$ to $$D$$ has length

$$
AD=\sqrt{(\sec\theta-\cos\theta)^2+(0-\sin\theta)^2}.
$$

Since

$$
\sec\theta-\cos\theta
=\frac1{\cos\theta}-\cos\theta
=\frac{1-\cos^2\theta}{\cos\theta}
=\frac{\sin^2\theta}{\cos\theta},
$$

this length simplifies to $$\tan\theta$$ in the first-quadrant diagram. Therefore

$$
\boxed{AD=\tan\theta}.
$$

The tangent segment from $$A$$ to $$B$$ has length

$$
AB=\sqrt{(0-\cos\theta)^2+(\csc\theta-\sin\theta)^2}.
$$

Similarly,

$$
\csc\theta-\sin\theta
=\frac1{\sin\theta}-\sin\theta
=\frac{\cos^2\theta}{\sin\theta},
$$

so this length simplifies to $$\cot\theta$$ in the first-quadrant diagram. Therefore

$$
\boxed{AB=\cot\theta}.
$$

So the six matching segments are

$$
\boxed{\sin\theta=AC,\quad \cos\theta=OC,\quad \sec\theta=OD,\quad \csc\theta=OB,\quad \tan\theta=AD,\quad \cot\theta=AB}.
$$
:::
::::

::::problem
15. On $$[0,2\pi)$$, solve the equation numerically to three decimal places: $$3\sin x-2\cos x=1.$$ (Hint: Try the substitution $$t=\tan(x/2)$$, and solve for $$x$$ using the $$\tan^{-1}$$ button on the calculator.)

:::solution
Use the substitution

$$
t=\tan\frac{x}{2}.
$$

Then

$$
\sin x=\frac{2t}{1+t^2}
$$

and

$$
\cos x=\frac{1-t^2}{1+t^2}.
$$

Substitute into

$$
3\sin x-2\cos x=1.
$$

This gives

$$
3\left(\frac{2t}{1+t^2}\right)-2\left(\frac{1-t^2}{1+t^2}\right)=1.
$$

Multiply by $$1+t^2$$:

$$
6t-2(1-t^2)=1+t^2.
$$

Expand:

$$
6t-2+2t^2=1+t^2.
$$

Rearrange:

$$
t^2+6t-3=0.
$$

Use the quadratic formula:

$$
t=\frac{-6\pm\sqrt{36+12}}{2}
=-3\pm2\sqrt3.
$$

So

$$
\tan\frac{x}{2}=-3+2\sqrt3
$$

or

$$
\tan\frac{x}{2}=-3-2\sqrt3.
$$

Using a calculator and choosing values of $$x$$ in $$[0,2\pi)$$ gives

$$
\boxed{x\approx0.869\quad\text{or}\quad x\approx3.450}.
$$
:::
::::

::::problem
16. (Bonus, rational points on the unit circle)

   The unit circle is

   $$
   x^2+y^2=1.
   $$

   One obvious rational point on the unit circle is $$(-1,0)$$. Now draw a line with rational slope $$m$$ through $$(-1,0)$$:

   $$
   y=m(x+1).
   $$

   $$(A)$$ Substitute $$y=m(x+1)$$ into $$x^2+y^2=1$$ and show that the line intersects the unit circle at $$(-1,0)$$ and one other point.

   $$(B)$$ Find the coordinates of the second intersection point in terms of $$m$$.

   $$(C)$$ Explain why every rational value of $$m$$ gives a rational point on the unit circle.

   $$(D)$$ Use your formula to find a rational point on the unit circle when $$m=\frac23$$, then interpret that point as $$(\cos\theta,\sin\theta)$$ for some angle $$\theta$$.

   $$(E)$$ Why does this method not produce the point $$(-1,0)$$ as the second intersection point? What slope would be needed to reach the point $$(1,0)$$?

:::solution
For part $$(A)$$, substitute

$$
y=m(x+1)
$$

into

$$
x^2+y^2=1.
$$

This gives

$$
x^2+m^2(x+1)^2=1.
$$

Expand:

$$
x^2+m^2(x^2+2x+1)=1.
$$

So

$$
(1+m^2)x^2+2m^2x+m^2-1=0.
$$

Since $$x=-1$$ is one solution, factor:

$$
(x+1)\left((1+m^2)x+(m^2-1)\right)=0.
$$

Therefore the line intersects the circle at $$(-1,0)$$ and one other point.

For part $$(B)$$, the second point comes from

$$
(1+m^2)x+(m^2-1)=0.
$$

Thus

$$
x=\frac{1-m^2}{1+m^2}.
$$

Now plug into $$y=m(x+1)$$:

$$
y=m\left(\frac{1-m^2}{1+m^2}+1\right).
$$

Simplify:

$$
y=m\left(\frac{1-m^2+1+m^2}{1+m^2}\right)
=m\left(\frac{2}{1+m^2}\right)
=\frac{2m}{1+m^2}.
$$

So the second intersection point is

$$
\boxed{\left(\frac{1-m^2}{1+m^2},\frac{2m}{1+m^2}\right)}.
$$

For part $$(C)$$, if $$m$$ is rational, then $$m^2$$ is rational. The expressions

$$
\frac{1-m^2}{1+m^2}
\qquad\text{and}\qquad
\frac{2m}{1+m^2}
$$

are made from rational numbers using addition, subtraction, multiplication, and division. Therefore both coordinates are rational.

For part $$(D)$$, use $$m=\frac23$$:

$$
x=\frac{1-\left(\frac23\right)^2}{1+\left(\frac23\right)^2}
=\frac{1-\frac49}{1+\frac49}
=\frac{\frac59}{\frac{13}{9}}
=\frac5{13}.
$$

Also,

$$
y=\frac{2\left(\frac23\right)}{1+\left(\frac23\right)^2}
=\frac{\frac43}{\frac{13}{9}}
=\frac{12}{13}.
$$

So the rational point is

$$
\boxed{\left(\frac5{13},\frac{12}{13}\right)}.
$$

This means there is an angle $$\theta$$ such that

$$
\boxed{\cos\theta=\frac5{13},\qquad \sin\theta=\frac{12}{13}}.
$$

For part $$(E)$$, this method does not produce $$(-1,0)$$ as the second intersection point because $$(-1,0)$$ is the fixed point used to build every line. A finite nonvertical slope through $$(-1,0)$$ intersects the circle at exactly one other point.

To reach $$(1,0)$$, the line must be the $$x$$-axis, which has slope

$$
\boxed{m=0}.
$$
:::
::::
