---
title: "Unit 10: Additional Topics in Trigonometry (Triangle Laws, Parametric, Polar, and Vectors)"
sidebar:
  order: 7
---

---

## Laws of Sines and Cosines

For a triangle with angles $$A,B,C$$ and opposite side lengths $$a,b,c$$:

$$
\frac{\sin A}{a}=\frac{\sin B}{b}=\frac{\sin C}{c}.
$$

This is the **Law of Sines**. It is useful when a triangle has an angle-side opposite pair, especially in the following cases:

- **ASA** or **AAS**, when two angles and one side are known.
- **SSA**, when two sides and a non-included angle are known.

The area of a triangle can also be written using two sides and the included angle:

$$
K=\frac12ab\sin C=\frac12bc\sin A=\frac12ac\sin B.
$$

<div class="theorem-box">

**Proof (Area formula)** Drop an altitude from angle $$B$$ to side $$AC$$. This splits the triangle into two right triangles.

Since side $$c$$ is adjacent to angle $$A$$ and the altitude is opposite angle $$A$$,

$$
\sin A=\frac{h}{c}.
$$

Thus,

$$
h=c\sin A.
$$

Using the basic triangle area formula,

$$
K=\frac12(\text{base})(\text{height}),
$$

with base $$b$$ and height $$h$$ gives

$$
K=\frac12 b(c\sin A)=\frac12bc\sin A.
$$

By dropping different altitudes, the same reasoning gives

$$
K=\frac12ab\sin C=\frac12ac\sin B.
$$

</div>

<div class="theorem-box">

**Proof (Law of Sines).** Since the area of the same triangle can be written three ways,

$$
\frac12bc\sin A=\frac12ac\sin B=\frac12ab\sin C.
$$

Divide each expression by $$\frac12abc$$:

$$
\frac{\sin A}{a}=\frac{\sin B}{b}=\frac{\sin C}{c}.
$$

This is the Law of Sines.

</div>

The Law of Sines also has an extended version, which is not particularly important for AP Precalculus.

<div class="theorem-box">

**Extension.** Prove the extended Law of Sines: $$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}=2R.$$

</div>

### The SSA case

The SSA case is called the **ambiguous case** because the given information may create no triangle, one triangle, or two triangles.

Suppose angle $$A$$ is known, and sides $$a$$ and $$b$$ are known, where $$a$$ is opposite $$A$$. Let

$$
h=b\sin A.
$$

Then:

$$
\begin{array}{c|c}
\text{Condition} & \text{Number of triangles}\\
\hline
a<h & 0\\
h\le a<b & 2\\
a\ge b & 1
\end{array}
$$

:::warning
When using the Law of Sines, remember that $$\sin \theta=\sin(180^\circ-\theta)$$, so a possible second angle may need to be checked.
:::

<div class="theorem-box">

**Example.** Suppose $$A=45^\circ$$, $$a=12$$, and $$b=15$$. Find the possible values for angle $$B$$ (opposite to side $$b$$).

First find the height:

$$
h=b\sin A=15\sin45^\circ=\frac{15\sqrt2}{2}\approx 10.61.
$$

Since

$$
h<a<b,
$$

there are two possible triangles.

Using Law of Sines,

$$
\frac{\sin B}{15}=\frac{\sin45^\circ}{12}.
$$

So

$$
\sin B=\frac{15\sin45^\circ}{12}\approx 0.884.
$$

This gives one possible angle

$$
B\approx 62.1^\circ,
$$

and the second possible angle

$$
180^\circ-62.1^\circ=117.9^\circ.
$$

Both angles create valid triangles because each leaves a positive value for angle $$C$$.

</div>

### Law of Cosines

The **Law of Cosines** relates all three sides of a triangle to one angle:

$$
a^2=b^2+c^2-2bc\cos A.
$$

Similarly,

$$
b^2=a^2+c^2-2ac\cos B
$$

and

$$
c^2=a^2+b^2-2ab\cos C.
$$

Law of Cosines is useful for:

- **SSS**, when all three sides are known.
- **SAS**, when two sides and the included angle are known.

To find an angle from three side lengths, rearrange the formula:

$$
\cos A=\frac{b^2+c^2-a^2}{2bc}.
$$

<div class="theorem-box">

**Proof (Law of Cosines).** Place the triangle on the coordinate plane so that angle $$A$$ is at the origin and side $$b$$ lies on the positive $$x$$-axis.

Then the endpoint of side $$b$$ is

$$
C=(b,0).
$$

The endpoint of side $$c$$ has coordinates

$$
B=(c\cos A,c\sin A).
$$

Side $$a$$ is the distance from $$B$$ to $$C$$, so by the distance formula,

$$
a^2=(c\cos A-b)^2+(c\sin A-0)^2.
$$

Expand:

$$
a^2=c^2\cos^2A-2bc\cos A+b^2+c^2\sin^2A.
$$

Group the trig terms:

$$
a^2=b^2+c^2(\cos^2A+\sin^2A)-2bc\cos A.
$$

Since

$$
\cos^2A+\sin^2A=1,
$$

we get

$$
a^2=b^2+c^2-2bc\cos A.
$$

</div>

<div class="theorem-box">

**Example.** If $$b=7$$, $$c=10$$, and $$A=60^\circ$$, find side $$a$$.

By Law of Cosines,

$$
a^2=7^2+10^2-2(7)(10)\cos60^\circ.
$$

Since $$\cos60^\circ=\frac12$$,

$$
a^2=49+100-70=79.
$$

Thus,

$$
a=\sqrt{79}.
$$

</div>

---

## Vectors in the Plane

A **scalar** is a quantity described by one number, such as temperature, length, or mass.

A **vector** is a quantity described by both magnitude and direction, such as force or velocity.

Geometrically, a vector is drawn as a directed line segment. The starting point is the **initial point**, and the ending point is the **terminal point**.

The magnitude of vector $$\overrightarrow{PQ}$$ is the length of the directed segment:

$$
\left\lvert \overrightarrow{PQ}\right \rvert.
$$

Two vectors are equal if they have the same magnitude and the same direction, even if they are drawn in different locations. Basically, they are the same vector just translated.

### Components

If a vector has magnitude $$\lvert \mathbf v \rvert$$ and direction angle $$\theta$$, then its horizontal and vertical components are

$$
v_x=\lvert \mathbf v \rvert\cos\theta
$$

and

$$
v_y=\lvert \mathbf v\rvert \sin\theta.
$$

Thus,

$$
\mathbf v=\langle \lvert \mathbf v \rvert \cos\theta, \lvert \mathbf v \rvert\sin\theta\rangle.
$$

<div class="theorem-box">

**Proof (Component Definition).** Draw a vector $$\mathbf v$$ with direction angle $$\theta$$. Its horizontal and vertical components form a right triangle whose hypotenuse is $$\lvert \mathbf v \rvert$$.

By right triangle trigonometry,

$$
\cos\theta=\frac{v_x}{\lvert \mathbf v \rvert}
$$

and

$$
\sin\theta=\frac{v_y}{\lvert \mathbf v \rvert}.
$$

Solving these equations gives

$$
v_x=\lvert \mathbf v \rvert\cos\theta
$$

and

$$
v_y=\lvert \mathbf v \rvert\sin\theta.
$$

</div>

For a vector

$$
\mathbf v=\langle a,b\rangle,
$$

the magnitude is

$$
\lvert \mathbf v \rvert=\sqrt{a^2+b^2}.
$$

The direction angle satisfies

$$
\tan\theta=\frac{b}{a},
$$

but the quadrant of the vector must be considered.

<div class="theorem-box">

**Example.**  A force has magnitude $$6.34$$ Newtons and direction angle $$175^\circ$$. Find the corresponding force vector.

The components of the vector are

$$
F_x=6.34\cos175^\circ\approx -6.32
$$

and

$$
F_y=6.34\sin175^\circ\approx 0.55.
$$

So the vector is approximately

$$
\langle -6.32,0.55\rangle.
$$

The negative $$x$$-component makes sense because $$175^\circ$$ points mostly left.

</div>

### Vector addition

Vectors can be added geometrically by placing the initial point of one vector at the terminal point of the other. The resulting vector is called the **resultant**.

Vector addition is commutative:

$$
\mathbf u+\mathbf v=\mathbf v+\mathbf u.
$$

For vectors written in component form,

$$
\mathbf u=\langle u_1,u_2\rangle,\qquad
\mathbf v=\langle v_1,v_2\rangle,
$$

their sum is

$$
\mathbf u+\mathbf v=\langle u_1+v_1,u_2+v_2\rangle.
$$

To understand vector addition, remember that a vector $$\langle u_1,u_2\rangle$$ means "move $$u_1$$ units horizontally and $$u_2$$ units vertically."

Adding

$$
\mathbf u=\langle u_1,u_2\rangle
$$

and

$$
\mathbf v=\langle v_1,v_2\rangle
$$

means doing both moves. Horizontally, the total movement is

$$
u_1+v_1.
$$

Vertically, the total movement is

$$
u_2+v_2.
$$

So,

$$
\mathbf u+\mathbf v=\langle u_1+v_1,u_2+v_2\rangle.
$$

### Scalar multiplication

If

$$
\mathbf u=\langle u_1,u_2\rangle,
$$

then

$$
k\mathbf u=\langle ku_1,ku_2\rangle.
$$

The magnitude changes by a factor of $$\lvert k \rvert$$:

$$
\lvert k\mathbf u \rvert = \lvert k \rvert \lvert \mathbf u \rvert.
$$

If $$k>0$$, the direction stays the same. If $$k<0$$, the direction is reversed.

### Unit vectors

A **unit vector** has magnitude $$1$$.

The standard unit vectors are

$$
\mathbf i=\langle 1,0\rangle
$$

and

$$
\mathbf j=\langle 0,1\rangle.
$$

So

$$
\langle a,b\rangle=a\mathbf i+b\mathbf j.
$$

To find a unit vector in the direction of a nonzero vector $$\mathbf v$$, divide by its magnitude:

$$
\mathbf u=\frac{\mathbf v}{\lvert \mathbf v \rvert}.
$$

### Dot product

For

$$
\mathbf A=\langle x_1,y_1\rangle
$$

and

$$
\mathbf B=\langle x_2,y_2\rangle,
$$

the **dot product** is

$$
\mathbf A\cdot \mathbf B=x_1x_2+y_1y_2.
$$

The dot product can also be written as

$$
\mathbf A\cdot \mathbf B=\lvert \mathbf A \rvert \lvert \mathbf B \rvert \cos\theta,
$$

where $$\theta$$ is the angle between the two vectors.

Therefore,

$$
\cos\theta=\frac{\mathbf A\cdot \mathbf B}{\lvert \mathbf A \rvert \lvert \mathbf B \rvert}.
$$

The dot product is a method of multiplication of two vectors, and always returns a *scalar*. Another form of vector multiplication is the cross product, which will not be taught here.

<div class="theorem-box">

**Proof (Dot product formula).** Let

$$
\mathbf A=\langle x_1,y_1\rangle,\qquad \mathbf B=\langle x_2,y_2\rangle.
$$

The vector between their terminal points is

$$
\mathbf A-\mathbf B.
$$

Using the magnitude formula,

$$
\lvert\mathbf A-\mathbf B\rvert^2=(x_1-x_2)^2+(y_1-y_2)^2.
$$

Expanding gives

$$
\lvert\mathbf A-\mathbf B\rvert^2=x_1^2+y_1^2+x_2^2+y_2^2-2(x_1x_2+y_1y_2).
$$

Since

$$
\lvert\mathbf A\rvert^2=x_1^2+y_1^2,\qquad \lvert\mathbf B\rvert^2=x_2^2+y_2^2,
$$

this becomes

$$
\lvert\mathbf A-\mathbf B\rvert^2=\lvert\mathbf A\rvert^2+\lvert\mathbf B\rvert^2-2(\mathbf A\cdot \mathbf B).
$$

Now use the Law of Cosines on the triangle formed by $$\mathbf A$$, $$\mathbf B$$, and $$\mathbf A-\mathbf B$$:

$$
\lvert\mathbf A-\mathbf B\rvert^2=\lvert\mathbf A\rvert^2+\lvert\mathbf B\rvert^2-2\lvert\mathbf A\rvert\lvert\mathbf B\rvert\cos\theta.
$$

Comparing the two equations,

$$
\mathbf A\cdot \mathbf B=\lvert\mathbf A\rvert\lvert\mathbf B\rvert\cos\theta.
$$

</div>

Useful vector formulas that follow from the dot product include

$$
\mathbf v\cdot \mathbf v=\lvert\mathbf v\rvert^2,
$$

so a vector dotted with itself gives the square of its magnitude. Also,

$$
\lvert\mathbf v\rvert=\sqrt{\mathbf v\cdot \mathbf v}.
$$

For two nonzero vectors $$\mathbf A$$ and $$\mathbf B$$,

$$
\mathbf A\perp \mathbf B\quad \text{if and only if}\quad \mathbf A\cdot \mathbf B=0.
$$

The scalar projection of $$\mathbf A$$ onto $$\mathbf B$$ is

$$
\operatorname{comp}_{\mathbf B}\mathbf A=\frac{\mathbf A\cdot \mathbf B}{\lvert\mathbf B\rvert},
$$

and the vector projection of $$\mathbf A$$ onto $$\mathbf B$$ is

$$
\operatorname{proj}_{\mathbf B}\mathbf A=\frac{\mathbf A\cdot \mathbf B}{\lvert \mathbf B \rvert^2}\mathbf B.
$$

<div class="theorem-box">

**Example.** Find the angle between

$$
\mathbf A=\langle 3,4\rangle
$$

and

$$
\mathbf B=\langle 5,0\rangle.
$$

First,

$$
\mathbf A\cdot \mathbf B=3(5)+4(0)=15.
$$

Also,

$$
\lvert\mathbf A\rvert=5,\qquad \lvert\mathbf B\rvert=5.
$$

So

$$
\cos\theta=\frac{15}{5\cdot5}=\frac35.
$$

Therefore,

$$
\theta=\cos^{-1}\left(\frac35\right)\approx 53.1^\circ.
$$

</div>

---

## Parametric Equations

In a parametric equation, both $$x$$ and $$y$$ are written in terms of a third variable, usually $$t$$:

$$
x=f(t),\qquad y=g(t).
$$

The variable $$t$$ is called the **parameter**.

Parametric equations describe both:

- the set of points on a curve,
- the **direction** the curve is traced as $$t$$ increases.

### Eliminating the parameter

To eliminate the parameter, solve one equation for $$t$$ and substitute into the other equation.

For example, if

$$
x=3t,
$$

then

$$
t=\frac{x}{3}.
$$

Substituting this into the equation for $$y$$ gives a rectangular equation relating $$x$$ and $$y$$ directly.

The rectangular equation may not show the full behavior of the parametric curve, because the parameter can restrict the domain or determine the direction of travel. Always indicate the allowed domain for $$t$$.

<div class="theorem-box">

**Example.** Consider

$$
x=3t,\qquad y=\frac12t^2.
$$

From the first equation,

$$
t=\frac{x}{3}.
$$

Substitute into the equation for $$y$$:

$$
y=\frac12\left(\frac{x}{3}\right)^2.
$$

So

$$
y=\frac{x^2}{18}.
$$

This is a parabola. However, if the parameter is restricted, such as $$0\le t\le 2$$, then the graph only includes the portion where

$$
0\le x\le 6.
$$

</div>

### Trig parametrizations

The identity

$$
\sin^2 t+\cos^2 t=1
$$

is often used to eliminate a parameter from trig parametrizations.

For a circle centered at the origin with radius $$a$$:

$$
x=a\cos t,\qquad y=a\sin t.
$$

Eliminating $$t$$ gives

$$
\left(\frac{x}{a}\right)^2+\left(\frac{y}{a}\right)^2=1,
$$

or

$$
x^2+y^2=a^2.
$$

For an ellipse centered at the origin:

$$
x=a\cos t,\qquad y=b\sin t.
$$

Eliminating $$t$$ gives

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1.
$$

Switching sine and cosine, or making one coefficient negative, can change where the graph starts and which direction it is traced, but the rectangular equation may stay the same.

:::strategy{title="Eliminating the parameter in a trig parametrization"}
1. Isolate the two trig expressions (e.g. $$\cos t = \frac{x}{a}$$).
2. Use a version of the Pythagoren Identity (e.g. $$\cos^2 t + \sin^2 t = 1$$) to combine the two equations.
3. State any domain restrictions on the graph and indicate orientation/direction.
:::

<div class="theorem-box">

**Example.** For

$$
x=-3\sin t,\qquad y=4\cos t,
$$

divide each equation by its coefficient:

$$
\frac{x}{-3}=\sin t,\qquad \frac{y}{4}=\cos t.
$$

Now square and add:

$$
\left(\frac{x}{-3}\right)^2+\left(\frac{y}{4}\right)^2=\sin^2t+\cos^2t.
$$

So

$$
\frac{x^2}{9}+\frac{y^2}{16}=1.
$$

The graph is an ellipse centered at the origin.

</div>

### Graphing parametric equations

:::strategy{title="Sketching a parametric curve"}
1. Choose values of $$t$$.
2. Calculate the corresponding $$x$$ and $$y$$ values.
3. Plot the ordered pairs $$(x,y)$$.
4. Use arrows to show the direction of motion as $$t$$ increases.
5. An alternative is to solve for the combined equation and then graph that equation on the **allowed domain** and then draw the direction arrows.
:::

---

## Polar Coordinates

In rectangular coordinates, a point is written as

$$
(x,y).
$$

In polar coordinates, a point is written as

$$
(r,\theta),
$$

where:

- $$r$$ is the directed distance from the pole,
- $$\theta$$ is the angle from the polar axis.

The pole is the origin, and the polar axis is the positive $$x$$-axis. Polar coordinates are very useful when dealing with circular shapes.

### Multiple representations

Every polar point has infinitely many representations.

For any integer $$k$$,

$$
(r,\theta)=(r,\theta+2k\pi).
$$

A point can also be represented using a negative radius:

$$
(r,\theta)=(-r,\theta+(2k+1)\pi).
$$

A negative value of $$r$$ means the point is plotted in the direction opposite the angle $$\theta$$.

<div class="theorem-box">

**Example.** Find two points that are the same point as $$\left(4,\frac{\pi}{3}\right)$$.

The polar points

$$
\left(4,\frac{\pi}{3}\right),\qquad
\left(4,\frac{\pi}{3}+2\pi\right),\qquad
\left(-4,\frac{4\pi}{3}\right)
$$

all represent the same point.

The first two use the same radius and coterminal angles. The third uses a negative radius, so it points in the opposite direction from $$\frac{4\pi}{3}$$, which lands at angle $$\frac{\pi}{3}$$.

</div>

### Converting between polar and rectangular form

The main conversion formulas are

$$
x=r\cos\theta
$$

and

$$
y=r\sin\theta.
$$

Also,

$$
x^2+y^2=r^2
$$

and

$$
\tan\theta=\frac{y}{x}.
$$

When converting from rectangular to polar form, use

$$
r=\sqrt{x^2+y^2}
$$

and choose $$\theta$$ based on the quadrant of the point.

<div class="theorem-box">

**Proof (Conversion formulas).** Prove the conversion formulas above.

A polar point $$(r,\theta)$$ forms a right triangle with horizontal leg $$x$$, vertical leg $$y$$, and hypotenuse $$r$$.

By right triangle trig,

$$
\cos\theta=\frac{x}{r}
$$

and

$$
\sin\theta=\frac{y}{r}.
$$

Multiplying by $$r$$ gives

$$
x=r\cos\theta,\qquad y=r\sin\theta.
$$

The Pythagorean Theorem gives

$$
x^2+y^2=r^2.
$$

Similarly, since $$\tan\theta$$ represents the slope of the line connecting the origin to the point,

$$
\tan\theta=\frac{y}{x}.
$$

</div>

<div class="theorem-box">

**Example.** Convert

$$
\left(2,\frac{7\pi}{6}\right)
$$

to rectangular coordinates.

Use

$$
x=r\cos\theta,\qquad y=r\sin\theta.
$$

Then

$$
x=2\cos\left(\frac{7\pi}{6}\right)=2\left(-\frac{\sqrt3}{2}\right)=-\sqrt3
$$

and

$$
y=2\sin\left(\frac{7\pi}{6}\right)=2\left(-\frac12\right)=-1.
$$

So the rectangular point is

$$
(-\sqrt3,-1).
$$

</div>

### Polar equations

To convert a polar equation into rectangular form, use:

$$
x=r\cos\theta,\qquad y=r\sin\theta,\qquad r^2=x^2+y^2.
$$

Sometimes it helps to multiply both sides of a polar equation by $$r$$ so that $$r\cos\theta$$ or $$r\sin\theta$$ appears.

The two most common substitutions are:

$$
r\cos\theta=x
$$

and

$$
r\sin\theta=y.
$$

<div class="theorem-box">

**Example.** Convert

$$
r\sin\left(\theta+\frac{\pi}{4}\right)=6
$$

to rectangular form.

Use the angle-sum identity:

$$
\sin\left(\theta+\frac{\pi}{4}\right)
=\sin\theta\cos\frac{\pi}{4}+\cos\theta\sin\frac{\pi}{4}.
$$

So

$$
r\left(\sin\theta\cdot\frac{\sqrt2}{2}+\cos\theta\cdot\frac{\sqrt2}{2}\right)=6.
$$

Distribute $$r$$:

$$
\frac{\sqrt2}{2}r\sin\theta+\frac{\sqrt2}{2}r\cos\theta=6.
$$

Substitute $$r\sin\theta=y$$ and $$r\cos\theta=x$$:

$$
\frac{\sqrt2}{2}y+\frac{\sqrt2}{2}x=6.
$$

Multiply by $$\sqrt2$$:

$$
x+y=6\sqrt2.
$$

</div>

### Distance in polar coordinates

If two points are written in polar form as

$$
P(r_1,\theta_1)
$$

and

$$
Q(r_2,\theta_2),
$$

then the distance between them is

$$
d=\sqrt{r_1^2+r_2^2-2r_1r_2\cos(\theta_2-\theta_1)}.
$$

This comes from the Law of Cosines.

<div class="theorem-box">

**Proof (Distance formula in polar).** Draw the two polar points from the pole. Their distances from the pole are $$r_1$$ and $$r_2$$.

The angle between the two segments is

$$
\theta_2-\theta_1.
$$

The distance $$d$$ between the points is the side opposite that angle. By the Law of Cosines,

$$
d^2=r_1^2+r_2^2-2r_1r_2\cos(\theta_2-\theta_1).
$$

Taking the square root gives

$$
d=\sqrt{r_1^2+r_2^2-2r_1r_2\cos(\theta_2-\theta_1)}.
$$

</div>

### Circles in polar coordinates

A circle with center $$(r_0,\theta_0)$$ and radius $$a$$ can be written using

$$
a^2=r^2+r_0^2-2rr_0\cos(\theta-\theta_0).
$$

This is the polar distance formula applied to a moving point $$(r,\theta)$$ and a fixed center $$(r_0,\theta_0)$$.

<div class="theorem-box">

**Proof (Circle equation in polar).** A point $$(r,\theta)$$ is on a circle with center $$(r_0,\theta_0)$$ and radius $$a$$ exactly when its distance from the center is $$a$$.

Using the polar distance formula,

$$
a=\sqrt{r^2+r_0^2-2rr_0\cos(\theta-\theta_0)}.
$$

Squaring both sides gives

$$
a^2=r^2+r_0^2-2rr_0\cos(\theta-\theta_0).
$$

</div>

Alternatively, you can write the circle equation (centered at the origin) as $$r=a$$, which represents the set of all points $$a$$ away from origin (aka a circle).

A line through the pole has the form

$$
\theta=\theta_0.
$$

A line not passing through the pole can be written as

$$
d=r\cos(\theta-\alpha),
$$

where $$(d,\alpha)$$ is the polar point on the line closest to the pole.

<div class="theorem-box">

**Proof (Polar line equation).** Let $$(d,\alpha)$$ be the point on the line closest to the pole. The segment from the pole to this point is perpendicular to the line.

For any point $$(r,\theta)$$ on the line, draw the triangle formed by the pole, $$(d,\alpha)$$, and $$(r,\theta)$$.

The angle between the segment of length $$r$$ and the segment of length $$d$$ is

$$
\theta-\alpha.
$$

Since $$d$$ is the adjacent side of the right triangle and $$r$$ is the hypotenuse,

$$
\cos(\theta-\alpha)=\frac{d}{r}.
$$

Multiplying by $$r$$ gives

$$
d=r\cos(\theta-\alpha).
$$

</div>

<div class="theorem-box">

**Example.** A line is tangent to the circle

$$
x^2+y^2=36
$$

at the point

$$
(-3,-3\sqrt3).
$$

The circle has radius $$6$$, so the point of tangency is $$6$$ units from the origin. The point lies at angle $$\frac{4\pi}{3}$$, so the closest point on the tangent line to the pole is

$$
\left(6,\frac{4\pi}{3}\right).
$$

Using the polar line formula,

$$
6=r\cos\left(\theta-\frac{4\pi}{3}\right).
$$

</div>

---

## Curves in Polar Coordinates

A polar curve is written as

$$
r=f(\theta).
$$

:::strategy{title="Graphing a polar curve"}
1. Make a table of $$\theta$$ and $$r$$ values, and draw a helper $$r$$ vs. $$\theta$$ graph if necessary.
2. Plot each polar point.
3. Watch for negative $$r$$ values.
4. Use symmetry and periodicity to complete the curve.
:::

However, it is also very helpful to know some of the most common types of polar curves.

### Spirals

An equation like

$$
r=a\theta
$$

creates a spiral. As $$\theta$$ increases, $$r$$ changes, so the point moves farther from or closer to the pole.

<div class="theorem-box">

**Example.** Graph $$r=\frac{\theta}{\pi},$$

The radius grows as $$\theta$$ grows:

$$
\begin{array}{c|ccccc}
\theta & 0 & \frac{\pi}{2} & \pi & \frac{3\pi}{2} & 2\pi\\
\hline
r & 0 & \frac12 & 1 & \frac32 & 2
\end{array}
$$

So the graph spirals outward from the pole.

A graph (with the helper graph) of the function is shown below:

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/polargraph1.png" alt="parent functions" loading="lazy" decoding="async" />

</div>

### Cardioids and limacons

Equations of the form

$$
r=a+b\sin\theta
$$

or

$$
r=a+b\cos\theta
$$

create limacons.

If

$$
\lvert a \rvert = \lvert b \rvert,
$$

the graph is a **cardioid**.

If

$$
\lvert a \rvert < \lvert b \rvert
$$

the graph has an inner loop.

If the equation uses sine, the main symmetry is usually vertical. If the equation uses cosine, the main symmetry is usually horizontal.

A list of all the limacons are shown below (note that a circle is technically a limacon as well):

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/limacon.png" alt="parent functions" loading="lazy" decoding="async" />

<div class="theorem-box">

**Example.** Graph $$r=2+4\cos\theta.$$

Here $$a=2$$ and $$b=4$$. Since

$$
\lvert a \rvert < \lvert b \rvert,
$$

the graph is a limacon with an inner loop.

Since the equation uses cosine, the graph has symmetry across the polar axis.

A graph (with the helper graph) of the function is shown below:

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/polargraph2.png" alt="parent functions" loading="lazy" decoding="async" />

</div>

### Rose curves

Rose curves have the form

$$
r=a\sin(n\theta)
$$

or

$$
r=a\cos(n\theta).
$$

The number of petals depends on $$n$$:

$$
\begin{array}{c|c}
n & \text{Number of petals}\\
\hline
\text{odd} & n\\
\text{even} & 2n
\end{array}
$$

The value $$\lvert a \rvert$$ controls the length of each petal.

<div class="theorem-box">

**Proof (Rose petal count formula).** The helper graph

$$
y=a\sin(n\theta)
$$

has period

$$
\frac{2\pi}{n}.
$$

For odd $$n$$, the negative radius portions trace the same petals that the positive radius portions already traced, so there are $$n$$ petals total.

For even $$n$$, the negative radius portions trace new petals, so there are $$2n$$ petals total.

</div>

<div class="theorem-box">

**Example.** Draw the rose curve $$r=4\sin(3\theta)$$.

For this curve, the value of $$n$$ is $$2$$, which is odd. Therefore, the rose curve has $$3$$ petals, and each petal has length $$2$$.

To draw the rose, start at $$\theta=0$$ (point $$0,0$$) and start plotting points along a polar graph. Once you draw one petal, repeat for the other two petals and make sure they are evenly spread out.

A graph (with the helper graph) of the function is shown below:

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/polargraph3.png" alt="parent functions" loading="lazy" decoding="async" />

</div>

### Lemniscates

Lemniscates are figure-eight shaped curves. Common forms include

$$
r^2=a^2\cos(2\theta)
$$

and

$$
r^2=a^2\sin(2\theta).
$$

Because $$r^2$$ cannot be negative, only angles that make the right side nonnegative appear on the graph.

<div class="theorem-box">

**Example.** Graph $$r^2=9\sin(2\theta)$$.

For this graph, the maximum value of $$r^2$$ is $$9$$, so the maximum value of $$r$$ is $$3$$.

The graph is a lemniscate. Since it uses $$\sin(2\theta)$$, its loops lie along the diagonal directions rather than directly on the polar axis.

An image of the lemniscate is shown below:

A graph (with the helper graph) of the function is shown below:

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/polargraph4.png" alt="parent functions" loading="lazy" decoding="async" />

</div>

---

## Complex Numbers

A **complex number** has the form

$$
z=a+bi,
$$

where $$a$$ and $$b$$ are real numbers and

$$
i=\sqrt{-1}.
$$

The number $$a$$ is the **real part**, and $$b$$ is the **imaginary part**.

The powers of $$i$$ repeat in a cycle:

$$
i^1=i,\qquad i^2=-1,\qquad i^3=-i,\qquad i^4=1.
$$

After that, the pattern repeats every four powers.

### The complex plane

Complex numbers can be graphed on the **complex plane**. The horizontal axis is the real axis, and the vertical axis is the imaginary axis.

The complex number

$$
z=a+bi
$$

corresponds to the point

$$
(a,b).
$$

The magnitude, or **modulus**, of $$z$$ is

$$
\lvert z\rvert=\sqrt{a^2+b^2}.
$$

This is the distance from the origin to the point $$(a,b)$$.

The **complex conjugate** of

$$
z=a+bi
$$

is defined as

$$
\overline z=a-bi.
$$

Multiplying a complex number by its conjugate gives

$$
z\overline z=(a+bi)(a-bi)=a^2+b^2=\lvert z\rvert^2.
$$

### Operations with complex numbers

To add or subtract complex numbers, combine real parts with real parts and imaginary parts with imaginary parts like vector components:

$$
(a+bi)+(c+di)=(a+c)+(b+d)i
$$

and

$$
(a+bi)-(c+di)=(a-c)+(b-d)i.
$$

To multiply, distribute and use $$i^2=-1$$:

$$
(a+bi)(c+di)=ac+adi+bci+bdi^2.
$$

Since $$i^2=-1$$,

$$
(a+bi)(c+di)=(ac-bd)+(ad+bc)i.
$$

To divide complex numbers, multiply the numerator and denominator by the conjugate of the denominator, kind of like rationalizing the denominator.

<div class="theorem-box">

**Example.** Simplify

$$
\frac{3+2i}{1-4i}.
$$

Multiply by the conjugate of the denominator:

$$
\frac{3+2i}{1-4i}\cdot \frac{1+4i}{1+4i}.
$$

The numerator is

$$
(3+2i)(1+4i)=3+12i+2i+8i^2.
$$

Since $$i^2=-1$$,

$$
3+14i+8i^2=-5+14i.
$$

The denominator is

$$
(1-4i)(1+4i)=1^2+4^2=17.
$$

So

$$
\frac{3+2i}{1-4i}=-\frac5{17}+\frac{14}{17}i.
$$

</div>

### Polar form of complex numbers

Since $$a+bi$$ corresponds to the point $$(a,b)$$, a complex number can also be written using polar coordinates.

Let

$$
r=\lvert z\rvert=\sqrt{a^2+b^2}.
$$

Let $$\theta$$ be the angle the point makes with the positive real axis. Then

$$
a=r\cos\theta
$$

and

$$
b=r\sin\theta.
$$

Therefore,

$$
z=a+bi=r\cos\theta+ir\sin\theta.
$$

Factoring out $$r$$ gives the **polar form**:

$$
z=r(\cos\theta+i\sin\theta).
$$

This is sometimes abbreviated as

$$
z=r\operatorname{cis}\theta,
$$

where

$$
\operatorname{cis}\theta=\cos\theta+i\sin\theta.
$$

### Multiplying and dividing in polar form

Suppose

$$
z_1=r_1(\cos\alpha+i\sin\alpha)
$$

and

$$
z_2=r_2(\cos\beta+i\sin\beta).
$$

Then

$$
z_1z_2=r_1r_2\left(\cos(\alpha+\beta)+i\sin(\alpha+\beta)\right).
$$

In words, when multiplying complex numbers in polar form, multiply the moduli and add the angles.

For division,

$$
\frac{z_1}{z_2}
=\frac{r_1}{r_2}\left(\cos(\alpha-\beta)+i\sin(\alpha-\beta)\right),
$$

where $$z_2\ne 0$$.

In words, when dividing, divide the moduli and subtract the angles.

These two operations show why polar form for complex numbers is sometimes preferred.

<div class="theorem-box">

**Proof (Polar multiplication formula).** Multiply directly:

$$
z_1z_2=r_1r_2(\cos\alpha+i\sin\alpha)(\cos\beta+i\sin\beta).
$$

Distribute:

$$
z_1z_2=r_1r_2(\cos\alpha\cos\beta+i\cos\alpha\sin\beta+i\sin\alpha\cos\beta+i^2\sin\alpha\sin\beta).
$$

Since $$i^2=-1$$,

$$
z_1z_2=r_1r_2\left((\cos\alpha\cos\beta-\sin\alpha\sin\beta)+i(\sin\alpha\cos\beta+\cos\alpha\sin\beta)\right).
$$

Using the angle addition identities,

$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta
$$

and

$$
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta,
$$

we get

$$
z_1z_2=r_1r_2\left(\cos(\alpha+\beta)+i\sin(\alpha+\beta)\right).
$$

</div>

<div class="theorem-box">

**Extension.** Derive the division formula for two complex numbers.

</div>

<div class="theorem-box">

**Example.** Multiply

$$
z_1=3\left(\cos\frac{\pi}{6}+i\sin\frac{\pi}{6}\right)
$$

and

$$
z_2=2\left(\cos\frac{\pi}{3}+i\sin\frac{\pi}{3}\right).
$$

Multiply the moduli and add the angles:

$$
z_1z_2=6\left(\cos\frac{\pi}{2}+i\sin\frac{\pi}{2}\right)=6i.
$$

</div>

### Exponential form of complex numbers

Euler's formula states that

$$
e^{i\theta}=\cos\theta+i\sin\theta
$$

A proof of this does require calculus/linear algebra and won't be discussed here.

Therefore, the polar form

$$
z=r(\cos\theta+i\sin\theta)
$$

can also be written in **exponential form**:

$$
z=re^{i\theta}.
$$

This means the following forms are equivalent:

$$
a+bi=r(\cos\theta+i\sin\theta)=r\operatorname{cis}\theta=re^{i\theta}.
$$

The exponential form is especially useful because it makes multiplication, division, and powers look like normal exponent rules.

For example,

$$
(r_1e^{i\alpha})(r_2e^{i\beta})=r_1r_2e^{i(\alpha+\beta)}.
$$

For division,

$$
\frac{r_1e^{i\alpha}}{r_2e^{i\beta}}=\frac{r_1}{r_2}e^{i(\alpha-\beta)}.
$$

For powers,

$$
(re^{i\theta})^n=r^ne^{in\theta}.
$$

These are the same rules as polar form, just written more compactly.

<div class="theorem-box">

**Example.** Write

$$
z=-2+2i
$$

in exponential form.

First find the modulus:

$$
r=\sqrt{(-2)^2+2^2}=2\sqrt2.
$$

The point $$(-2,2)$$ is in Quadrant II, with reference angle $$\frac{\pi}{4}$$. Therefore,

$$
\theta=\frac{3\pi}{4}.
$$

So

$$
z=2\sqrt2 e^{i3\pi/4}.
$$

</div>

<div class="theorem-box">

**Example.** Write

$$
z=-1+\sqrt3i
$$

in polar form.

First find the modulus:

$$
r=\sqrt{(-1)^2+(\sqrt3)^2}=2.
$$

The point $$(-1,\sqrt3)$$ is in Quadrant II. Since the reference angle is $$\frac{\pi}{3}$$,

$$
\theta=\frac{2\pi}{3}.
$$

Thus,

$$
z=2\left(\cos\frac{2\pi}{3}+i\sin\frac{2\pi}{3}\right).
$$

</div>

### De Moivre's Theorem

:::key{name="De Moivre's Theorem"}
If $$z=r(\cos\theta+i\sin\theta)$$, then for any positive integer $$n$$, $$z^n=r^n(\cos(n\theta)+i\sin(n\theta))$$.
:::

<div class="theorem-box">

**Proof (De Moivre's Theorem).** Multiplying complex numbers in polar form multiplies their moduli and adds their angles.

If

$$
z=r(\cos\theta+i\sin\theta),
$$

then

$$
z^2=r\cdot r \cdot (\cos(\theta + \theta) + i\sin(\theta + \theta)) = r^2(\cos(2\theta)+i\sin(2\theta)).
$$

Multiplying by another copy of $$z$$ gives

$$
z^3=r^3(\cos(3\theta)+i\sin(3\theta)).
$$

Repeating this process $$n$$ times gives

$$
z^n=r^n(\cos(n\theta)+i\sin(n\theta)),
$$

which is De Moivre's Theorem. To reverse De Moivre's Theorem (e.g. solve for roots of a complex number), just swap $$n$$ for $$\frac{1}{n}$$.

</div>

<div class="theorem-box">

**Example.** Find

$$
(1+i)^6.
$$

First write $$1+i$$ in polar form:

$$
1+i=\sqrt2\left(\cos\frac{\pi}{4}+i\sin\frac{\pi}{4}\right).
$$

By De Moivre's Theorem,

$$
(1+i)^6=(\sqrt2)^6\left(\cos\frac{6\pi}{4}+i\sin\frac{6\pi}{4}\right).
$$

Since

$$
(\sqrt2)^6=8
$$

and

$$
\frac{6\pi}{4}=\frac{3\pi}{2},
$$

we get

$$
(1+i)^6=8\left(\cos\frac{3\pi}{2}+i\sin\frac{3\pi}{2}\right)=-8i.
$$

</div>

### Roots of complex numbers

To solve

$$
w^n=z,
$$

write $$z$$ in polar form (or exponent form):

$$
z=r(\cos\theta+i\sin\theta).
$$

Since angles repeat every $$2\pi$$,

$$
z=r(\cos(\theta+2k\pi)+i\sin(\theta+2k\pi)).
$$

The $$n$$ complex roots are

$$
w_k=\sqrt[n]{r}\left(\cos\frac{\theta+2k\pi}{n}+i\sin\frac{\theta+2k\pi}{n}\right),
$$

where

$$
k=0,1,2,\ldots,n-1.
$$

This is just a classic example of De Moivre's Theorem.

<div class="theorem-box">

**Example.** Find the cube roots of $$8$$.

Write

$$
8=8(\cos0+i\sin0).
$$

The cube roots are

$$
w_k=2\left(\cos\frac{0+2k\pi}{3}+i\sin\frac{0+2k\pi}{3}\right),
$$

where $$k=0,1,2$$.

So the roots are

$$
2,
$$

$$
2\left(\cos\frac{2\pi}{3}+i\sin\frac{2\pi}{3}\right)=-1+\sqrt3i,
$$

and

$$
2\left(\cos\frac{4\pi}{3}+i\sin\frac{4\pi}{3}\right)=-1-\sqrt3i.
$$

</div>

### Roots of unity

The **$$n$$th roots of unity** are the complex numbers that solve

$$
z^n=1.
$$

Since

$$
1=\cos0+i\sin0,
$$

and angles repeat every $$2\pi$$, we can also write

$$
1=\cos(2k\pi)+i\sin(2k\pi)
$$

for any integer $$k$$.

Using the complex-root formula, the $$n$$th roots of unity are

$$
z_k=\cos\left(\frac{2k\pi}{n}\right)+i\sin\left(\frac{2k\pi}{n}\right),
$$

where

$$
k=0,1,2,\ldots,n-1.
$$

In exponential form,

$$
z_k=e^{2k\pi i/n}.
$$

These points all lie on the unit circle because each one has modulus $$1$$, and form a regular $$n$$-gon.

### Geometry of roots of unity

The $$n$$th roots of unity are evenly spaced around the unit circle.

The angle between consecutive roots is

$$
\frac{2\pi}{n}.
$$

So the roots form the vertices of a regular $$n$$-gon centered at the origin.

For example:

- The $$3$$rd roots of unity form an equilateral triangle.
- The $$4$$th roots of unity form a square.
- The $$5$$th roots of unity form a regular pentagon.

<div class="theorem-box">

**Example.** Find the fourth roots of unity.

Use

$$
z_k=e^{2k\pi i/4}
$$

for

$$
k=0,1,2,3.
$$

Then the roots are

$$
z_0=e^0=1,
$$

$$
z_1=e^{\pi i/2}=i,
$$

$$
z_2=e^{\pi i}=-1,
$$

and

$$
z_3=e^{3\pi i/2}=-i.
$$

So the fourth roots of unity are

$$
1,\ i,\ -1,\ -i.
$$

Geomertrically, the solutions look like this:
<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/complex1.png" alt="parent functions" loading="lazy" decoding="async" />

Note that the rendering on the $$y$$-axis shows that it is real, but treat it like the imaginary axis.

</div>

### Sum and product of roots of unity

For $$n>1$$, the sum of all $$n$$th roots of unity is

$$
1+\omega+\omega^2+\cdots+\omega^{n-1}=0.
$$

There are two ways to understand this.

Geometrically, the roots are evenly spaced on the unit circle, so their vectors balance perfectly around the origin.

Algebraically, use the finite geometric series formula ([Unit 13 & 14: Additional Topics in Algebra](/notes/ap/precalc/addtopics/)):

$$
1+\omega+\omega^2+\cdots+\omega^{n-1}
=\frac{1-\omega^n}{1-\omega}.
$$

Since $$\omega^n=1$$ and $$\omega\ne1$$,

$$
\frac{1-\omega^n}{1-\omega}
=\frac{1-1}{1-\omega}=0.
$$

Additionally, the product of the $$n$$th roots of unity is $$(-1)^{n+1}$$.

<div class="theorem-box">

**Extension.** Prove that the product of the $$n$$ roots of unity is $$(-1)^{n+1}$$. (Hint: Use dot product!)

</div>

### Roots of other complex numbers

Roots of unity help organize roots of any nonzero complex number.

If $$w$$ is one $$n$$th root of a complex number $$z$$, then all the other roots are

$$
w,\quad w\omega,\quad w\omega^2,\quad \ldots,\quad w\omega^{n-1},
$$

where

$$
\omega=e^{2\pi i/n}.
$$

Multiplying by $$\omega$$ rotates the root by

$$
\frac{2\pi}{n}
$$

without changing its magnitude.

So the $$n$$ roots of any nonzero complex number also form a regular $$n$$-gon centered at the origin. The sum of the roots is still $$0$$, while the product of the roots is $$(-1)^{n+1}\lvert z \rvert$$.

---

## Practice

::::problem
1. Solve the triangle with $$A=60^\circ$$, $$a=9$$ cm, and $$b=10$$ cm. Determine whether there are zero, one, or two possible triangles. For each valid triangle, find the remaining side and angles.

:::solution
By the Law of Sines,

$$
\frac{\sin B}{10}=\frac{\sin 60^\circ}{9},
$$

so

$$
\sin B=\frac{10\sin 60^\circ}{9}=\frac{5\sqrt3}{9}.
$$

This gives two possible angles:

$$
B\approx 74.2^\circ\quad \text{or}\quad B\approx 105.8^\circ.
$$

If $$B\approx 74.2^\circ$$, then

$$
C\approx 45.8^\circ,\qquad c\approx 7.45\text{ cm}.
$$

If $$B\approx 105.8^\circ$$, then

$$
C\approx 14.2^\circ,\qquad c\approx 2.55\text{ cm}.
$$

Therefore, there are **two possible triangles**.
:::
::::

::::problem
2. A plane is flying above the ocean. The angle of depression to a submarine is $$24^\circ$$, and the angle of depression to a ship is $$17^\circ$$. The distance from the plane to the ship is $$5120$$ feet. Assuming the submarine and ship are in the same vertical plane as the airplane, find the distance between the submarine and the ship.

:::solution
The plane-to-ship distance is $$5120$$ ft, and the angle of depression to the ship is $$17^\circ$$. So the plane's height is

$$
h=5120\sin 17^\circ\approx 1496.94\text{ ft}.
$$

The horizontal distance from the plane to the ship is

$$
5120\cos 17^\circ\approx 4896.28\text{ ft}.
$$

The horizontal distance from the plane to the submarine is

$$
\frac{h}{\tan 24^\circ}\approx 3362.19\text{ ft}.
$$

Assuming the ship and submarine are on the same side of the plane, their distance apart is

$$
4896.28-3362.19\approx 1534.09\text{ ft}.
$$
:::
::::

::::problem
3. Two towns $$A$$ and $$B$$ are $$1.4$$ miles apart, with $$B$$ due east of $$A$$. A signal is detected on a bearing of $$S22^\circ E$$ from $$A$$ and $$S43^\circ W$$ from $$B$$. Draw a labeled diagram and find the distance from each town to the signal.

:::solution
Place town $$A$$ at $$(0,0)$$ and town $$B$$ at $$(1.4,0)$$. The bearing $$S22^\circ E$$ from $$A$$ points down and right, while $$S43^\circ W$$ from $$B$$ points down and left.

Solving the two bearing lines gives the signal at approximately

$$
(0.423,-1.047).
$$

Therefore,

$$
AS\approx 1.13\text{ miles},\qquad BS\approx 1.43\text{ miles}.
$$
:::
::::

::::problem
4. Prove that for any triangle with side lengths $$a,b,c$$ and semiperimeter $$s=\frac12(a+b+c)$$, $$\sin^2\left(\frac C2\right)=\frac{(s-a)(s-b)}{ab}.$$

:::solution
Use the half-angle identity:

$$
\sin^2\left(\frac C2\right)=\frac{1-\cos C}{2}.
$$

By the Law of Cosines,

$$
\cos C=\frac{a^2+b^2-c^2}{2ab}.
$$

Substitute:

$$
\sin^2\left(\frac C2\right)
=\frac{1}{2}\left(1-\frac{a^2+b^2-c^2}{2ab}\right)
=\frac{c^2-(a-b)^2}{4ab}.
$$

Factor the numerator:

$$
c^2-(a-b)^2=(c-a+b)(c+a-b).
$$

Since $$s=\frac12(a+b+c)$$,

$$
c-a+b=2(s-a),\qquad c+a-b=2(s-b).
$$

Thus,

$$
\sin^2\left(\frac C2\right)=\frac{(s-a)(s-b)}{ab}.
$$
:::
::::

::::problem
5. Let $$\mathbf u=\langle -2,1\rangle$$ and $$\mathbf v=\langle -5,3\rangle$$.

    $$(A)$$ Find $$2\mathbf u-3\mathbf v$$.

    $$(B)$$ Find the angle between $$\mathbf u$$ and $$\mathbf v$$ to the nearest degree.

    $$(C)$$ Find a unit vector in the direction of $$\mathbf u+\mathbf v$$.

:::solution
We have

$$
\mathbf u=\langle -2,1\rangle,\qquad \mathbf v=\langle -5,3\rangle.
$$

For part (A),

$$
2\mathbf u-3\mathbf v
=\langle -4,2\rangle-\langle -15,9\rangle
=\langle 11,-7\rangle.
$$

For part (B),

$$
\mathbf u\cdot \mathbf v=(-2)(-5)+(1)(3)=13.
$$

Also,

$$
\lvert \mathbf u \rvert=\sqrt5,\qquad \lvert \mathbf v \rvert=\sqrt{34}.
$$

So

$$
\cos\theta=\frac{13}{\sqrt5\sqrt{34}}=\frac{13}{\sqrt{170}}.
$$

Therefore,

$$
\theta\approx 4^\circ.
$$

For part (C), since

$$
\mathbf u+\mathbf v=\langle -7,4\rangle,
$$

a unit vector in that direction is

$$
\frac{\langle -7,4\rangle}{\sqrt{65}}
=\left\langle \frac{-7}{\sqrt{65}},\frac{4}{\sqrt{65}}\right\rangle.
$$
:::
::::

::::problem
6. A plane is heading $$40^\circ$$ east of north at $$120$$ mph. A wind blows directly from the east at $$10$$ mph. Find the ground-speed vector, the ground speed, and the drift angle from the plane's intended heading.

:::solution
Let east be positive $$x$$ and north be positive $$y$$. A heading of $$40^\circ$$ east of north at $$120$$ mph has velocity

$$
\langle 120\sin40^\circ,120\cos40^\circ\rangle.
$$

A wind directly from the east blows west, so its vector is

$$
\langle -10,0\rangle.
$$

The ground-speed vector is

$$
\langle 120\sin40^\circ-10,120\cos40^\circ\rangle
\approx \langle 67.13,91.93\rangle.
$$

The ground speed is

$$
\sqrt{67.13^2+91.93^2}\approx 113.83\text{ mph}.
$$

The actual direction is about

$$
\tan^{-1}\left(\frac{67.13}{91.93}\right)\approx 36.1^\circ
$$

east of north. Since the intended heading was $$40^\circ$$ east of north, the drift angle is about

$$
40^\circ-36.1^\circ=3.9^\circ
$$

west of the intended heading.
:::
::::

::::problem
7. A force of $$18$$ Newtons acts in the direction $$235^\circ$$ from the positive $$x$$-axis. Resolve the force into horizontal and vertical components. Then find the magnitude and direction of the vector obtained by adding this force to $$\langle 12,-5\rangle$$.

:::solution
The force components are

$$
\langle 18\cos235^\circ,18\sin235^\circ\rangle
\approx \langle -10.32,-14.74\rangle.
$$

Add $$\langle 12,-5\rangle$$:

$$
\langle -10.32,-14.74\rangle+\langle 12,-5\rangle
\approx \langle 1.68,-19.74\rangle.
$$

The magnitude is

$$
\sqrt{1.68^2+(-19.74)^2}\approx 19.82.
$$

The direction angle is approximately

$$
274.9^\circ.
$$
:::
::::

::::problem
8. A particle moves according to $$x(t)=2\cos t-\sin(2t),\qquad y(t)=6\sin t,$$ for $$0\le t\le 2\pi$$.

    $$(A)$$ Find all exact $$x$$-intercepts.

    $$(B)$$ Find the particle's position when $$t=\frac{\pi}{2}$$ and when $$t=\frac{7\pi}{6}$$.

    $$(C)$$ Write a formula for the particle's distance from the origin as a function of $$t$$.

:::solution
The particle has

$$
x(t)=2\cos t-\sin(2t),\qquad y(t)=6\sin t.
$$

For part (A), use $$\sin(2t)=2\sin t\cos t$$:

$$
x(t)=2\cos t-2\sin t\cos t=2\cos t(1-\sin t).
$$

So $$x(t)=0$$ when

$$
\cos t=0\quad \text{or}\quad \sin t=1.
$$

On $$0\le t\le 2\pi$$, this gives

$$
t=\frac{\pi}{2},\frac{3\pi}{2}.
$$

The exact $$x$$-intercepts are

$$
(0,6)\quad \text{and}\quad (0,-6).
$$

For part (B), when $$t=\frac{\pi}{2}$$,

$$
(x,y)=(0,6).
$$

When $$t=\frac{7\pi}{6}$$,

$$
x=2\cos\frac{7\pi}{6}-\sin\frac{7\pi}{3}
=-\sqrt3-\frac{\sqrt3}{2}
=-\frac{3\sqrt3}{2},
$$

and

$$
y=6\sin\frac{7\pi}{6}=-3.
$$

So the position is

$$
\left(-\frac{3\sqrt3}{2},-3\right).
$$

For part (C), the distance from the origin is

$$
d(t)=\sqrt{x(t)^2+y(t)^2}.
$$

Therefore,

$$
d(t)=\sqrt{(2\cos t-\sin(2t))^2+36\sin^2t}.
$$
:::
::::

::::problem
9. Eliminate the parameter and describe the curve, including any domain restrictions and orientation: $$x=e^t$$, $$y=e^{2t}-3$$, $$-\ln2\le t\le \ln3.$$

:::solution
Since

$$
x=e^t,
$$

we have

$$
t=\ln x.
$$

Then

$$
y=e^{2t}-3=(e^t)^2-3=x^2-3.
$$

Because

$$
-\ln2\le t\le \ln3,
$$

the domain is

$$
\frac12\le x\le 3.
$$

The curve is the parabola

$$
y=x^2-3
$$

restricted to $$\frac12\le x\le 3$$. As $$t$$ increases, $$x=e^t$$ increases, so the curve moves from

$$
\left(\frac12,-\frac{11}{4}\right)
$$

to

$$
(3,6).
$$
:::
::::

::::problem
10. The curve $$x=4\cos t$$, $$y=-2\sin t$$ is traced for $$0\le t\le 2\pi$$. Eliminate the parameter, state where the curve starts, and determine the direction (clockwise or counterclockwise) the curve is traced in.

:::solution
From

$$
x=4\cos t,
$$

we get

$$
\cos t=\frac{x}{4}.
$$

From

$$
y=-2\sin t,
$$

we get

$$
\sin t=-\frac{y}{2}.
$$

Using $$\cos^2t+\sin^2t=1$$,

$$
\frac{x^2}{16}+\frac{y^2}{4}=1.
$$

This is an ellipse. At $$t=0$$, the curve starts at

$$
(4,0).
$$

For small positive $$t$$, $$y=-2\sin t$$ is negative, so the curve moves downward from $$(4,0)$$. Therefore, the ellipse is traced **clockwise**.
:::
::::

::::problem
11. Classify each polar curve as a cardioid, limacon, rose curve, lemniscate, circle, line, or spiral. For rose curves, state the number of petals. Graph each of the curves.

    $$(A)$$ Graph $$r=3-3\sin\theta$$

    $$(B)$$ Graph $$r=2+5\cos\theta$$

    $$(C)$$ Graph $$r=4\sin(3\theta)$$

    $$(D)$$ Graph $$r^2=25\sin(2\theta)$$

:::solution
This is an Archimedean spiral:

$$
r=\frac{2\theta}{\pi}.
$$

As $$\theta$$ increases from $$-4\pi$$ to $$4\pi$$, $$r$$ increases from $$-8$$ to $$8$$. Negative $$r$$ values are plotted in the opposite direction from the angle $$\theta$$.

**ADD IMAGE HERE**
:::
::::

::::problem
12. Graph both $$r=2+2\cos\theta$$ and $$r=2-2\cos\theta$$. Then, find the number of intersection points.

:::solution
The curves are

$$
r=2+2\cos\theta
$$

and

$$
r=2-2\cos\theta.
$$

Both are cardioids. The first opens to the right, and the second opens to the left.

**ADD IMAGE HERE**

To find intersections with the same angle, set the equations equal:

$$
2+2\cos\theta=2-2\cos\theta.
$$

Then

$$
4\cos\theta=0,
$$

so

$$
\cos\theta=0.
$$

Thus,

$$
\theta=\frac{\pi}{2},\frac{3\pi}{2}.
$$

These give the points

$$
(0,2)\quad \text{and}\quad (0,-2).
$$

Both cardioids also pass through the pole: $$r=0$$ for the first curve when $$\theta=\pi$$, and $$r=0$$ for the second curve when $$\theta=0$$. Therefore, the curves have

$$
\boxed{3}
$$

intersection points.
:::
::::

::::problem
13. Suppose you have an octagon centered at the origin with one vertex at $$P_1=2\sqrt2$$.
    $$(A)$$ Find a vertex in the third quadrant and a vertex in the fourth quadrant.
    $$(B)$$ Without finding all of the vertices calculate $$P_1+P_2+\cdots+P_8$$
    $$(C)$$ Without finding all of the vertices calculate $$P_1P_2\cdots P_8$$.

:::solution
For part (A), the resulting octagon is regular, so consecutive vertices differ by an angle of

$$
\frac{2\pi}{8}=\frac{\pi}{4}.
$$

Since

$$
P_1=2\sqrt2,
$$

the first vertex lies on the positive real axis with magnitude $$2\sqrt2$$. The vertices in the third and fourth quadrants can be found by rotating by multiples of $$45^\circ$$.

A third-quadrant vertex occurs at angle $$225^\circ$$:

$$
2\sqrt2(\cos225^\circ+i\sin225^\circ)=-2-2i.
$$

A fourth-quadrant vertex occurs at angle $$315^\circ$$:

$$
2\sqrt2(\cos315^\circ+i\sin315^\circ)=2-2i.
$$

For part (B), for a regular polygon centered at the origin, the vertices balance evenly around the circle, so

$$
P_1+P_2+\cdots+P_8=0.
$$

For part (C), for the product $$P_1P_2\cdots P_8$$, multiply magnitudes and add angles. The magnitude is

$$
(2\sqrt2)^8=4096.
$$

The eight angles are

$$
0^\circ,45^\circ,90^\circ,135^\circ,180^\circ,225^\circ,270^\circ,315^\circ,
$$

whose sum is

$$
1260^\circ.
$$

Since $$1260^\circ$$ is coterminal with $$180^\circ$$,

$$
P_1P_2\cdots P_8=4096(\cos180^\circ+i\sin180^\circ).
$$

Therefore,

$$
P_1P_2\cdots P_8=-4096.
$$
:::
::::

::::problem
14. Let $$z_1=-2+2\sqrt3i,\qquad z_2=1-i.$$

    $$(A)$$ Write both numbers in polar form.

    $$(B)$$ Write both numbers in exponential form.

    $$(C)$$ Compute $$z_1z_2$$ in polar form and rectangular form.

:::solution
For part (A), for

$$
z_1=-2+2\sqrt3i,
$$

the magnitude is

$$
\lvert z_1 \rvert=\sqrt{(-2)^2+(2\sqrt3)^2}=4.
$$

Since $$z_1$$ is in Quadrant II,

$$
\theta_1=120^\circ=\frac{2\pi}{3}.
$$

So

$$
z_1=4\left(\cos\frac{2\pi}{3}+i\sin\frac{2\pi}{3}\right).
$$

For

$$
z_2=1-i,
$$

the magnitude is $$\sqrt2$$ and the angle is $$-45^\circ=-\frac{\pi}{4}$$. So

$$
z_2=\sqrt2\left(\cos\left(-\frac{\pi}{4}\right)+i\sin\left(-\frac{\pi}{4}\right)\right).
$$

For part (B), in exponential form,

$$
z_1=4e^{2\pi i/3},\qquad z_2=\sqrt2e^{-\pi i/4}.
$$

For part (C), multiply magnitudes and add angles:

$$
z_1z_2=4\sqrt2e^{i(2\pi/3-\pi/4)}=4\sqrt2e^{5\pi i/12}.
$$

In polar form,

$$
z_1z_2=4\sqrt2\left(\cos\frac{5\pi}{12}+i\sin\frac{5\pi}{12}\right).
$$

In rectangular form,

$$
z_1z_2=(2\sqrt3-2)+(2\sqrt3+2)i.
$$
:::
::::

::::problem
15. Use De Moivre's Theorem to find all fourth roots of $$16\left(\cos\frac{2\pi}{3}+i\sin\frac{2\pi}{3}\right).$$

:::solution
Write the complex number as

$$
16\left(\cos\frac{2\pi}{3}+i\sin\frac{2\pi}{3}\right).
$$

The fourth roots have magnitude

$$
\sqrt[4]{16}=2.
$$

Their angles are

$$
\frac{\frac{2\pi}{3}+2\pi k}{4}
=\frac{\pi}{6}+\frac{k\pi}{2},
$$

where $$k=0,1,2,3$$. Therefore the roots are

$$
2\operatorname{cis}\frac{\pi}{6},\quad
2\operatorname{cis}\frac{2\pi}{3},\quad
2\operatorname{cis}\frac{7\pi}{6},\quad
2\operatorname{cis}\frac{5\pi}{3}.
$$

In rectangular form, these are

$$
\sqrt3+i,\quad -1+\sqrt3i,\quad -\sqrt3-i,\quad 1-\sqrt3i.
$$
:::
::::

::::problem
16. (Bonus, Brahmagupta's and Bretschneider's formulas)

Let $$ABCD$$ be a cyclic quadrilateral, meaning all four vertices lie on one circle. Let its side lengths be $$a,b,c,d$$, and let its semiperimeter be

$$
s=\frac12(a+b+c+d).
$$

The goal is to prove the area of a cyclic quadrilateral is:

$$
K=\sqrt{(s-a)(s-b)(s-c)(s-d)},
$$

where $$K$$ is the area of the cyclic quadrilateral. We will also extend the area formula to all cases, not just cyclic ones.

<div style="margin-left: 1.5rem;">

$$(A)$$ Draw diagonal $$AC$$. Let $$\angle ABC=B$$ and $$\angle ADC=D$$. Use triangle area formulas and $$D=180^\circ-B$$ (A property of cyclic quadrilaterals) to rewrite the area as $$K=\frac12(ab+cd)\sin B.$$

$$(B)$$ Apply the Law of Cosines to triangles $$ABC$$ and $$ADC$$ to show that $$2ab\cos B=a^2+b^2-c^2-d^2+2cd\cos D.$$

$$(C)$$ Use $$\cos D=-\cos B$$ to solve for $$\cos B$$, then combine this with $$K=\frac12(ab+cd)\sin B$$ and $$\sin^2B=1-\cos^2B$$ to prove $$K^2=(s-a)(s-b)(s-c)(s-d).$$ This is Brahmagupta's formula.

$$(D)$$ Now suppose $$ABCD$$ is not necessarily cyclic. Keep the same notation, with opposite angles $$B$$ and $$D$$. Show that $$(4K)^2+(a^2+b^2-c^2-d^2)^2=4(a^2b^2+c^2d^2-2abcd\cos(B+D)).$$

$$(E)$$ Now prove **Bretschneider's formula**: $$K^2=(s-a)(s-b)(s-c)(s-d)-abcd\cos^2\left(\frac{B+D}{2}\right).$$

$$(F)$$ Explain why Bretschneider's formula turns into Brahmagupta's formula when $$ABCD$$ is cyclic.

</div>

:::solution
For part (A), draw diagonal $$AC$$. The diagonal splits the quadrilateral into triangles $$ABC$$ and $$ADC$$. Using $$K=\frac12ab\sin C$$ for triangle area,

$$
[ABC]=\frac12ab\sin B
$$

and

$$
[ADC]=\frac12cd\sin D.
$$

Therefore,

$$
K=\frac12ab\sin B+\frac12cd\sin D.
$$

Since $$ABCD$$ is cyclic, opposite angles are supplementary:

$$
B+D=180^\circ.
$$

So

$$
D=180^\circ-B
$$

and

$$
\sin D=\sin(180^\circ-B)=\sin B.
$$

Therefore,

$$
K=\frac12ab\sin B+\frac12cd\sin B
=\frac12(ab+cd)\sin B.
$$

For part (B), apply the Law of Cosines to triangle $$ABC$$:

$$
AC^2=a^2+b^2-2ab\cos B.
$$

Apply the Law of Cosines to triangle $$ADC$$:

$$
AC^2=c^2+d^2-2cd\cos D.
$$

Set these equal:

$$
a^2+b^2-2ab\cos B=c^2+d^2-2cd\cos D.
$$

Rearranging gives

$$
2ab\cos B=a^2+b^2-c^2-d^2+2cd\cos D.
$$

For part (C), since $$D=180^\circ-B$$,

$$
\cos D=-\cos B.
$$

Substitute into the result from part $$(C)$$:

$$
2ab\cos B=a^2+b^2-c^2-d^2-2cd\cos B.
$$

So

$$
2(ab+cd)\cos B=a^2+b^2-c^2-d^2,
$$

and

$$
\cos B=\frac{a^2+b^2-c^2-d^2}{2(ab+cd)}.
$$

From part $$(B)$$,

$$
K=\frac12(ab+cd)\sin B.
$$

Square both sides:

$$
K^2=\frac14(ab+cd)^2\sin^2B.
$$

Use $$\sin^2B=1-\cos^2B$$:

$$
K^2=\frac14(ab+cd)^2\left(1-\left(\frac{a^2+b^2-c^2-d^2}{2(ab+cd)}\right)^2\right).
$$

Simplifying gives

$$
K^2=\frac{4(ab+cd)^2-(a^2+b^2-c^2-d^2)^2}{16}.
$$

This factors as

$$
K^2=\frac{(a+b+c-d)(a+b-c+d)(a-b+c+d)(-a+b+c+d)}{16}.
$$

Since

$$
s=\frac12(a+b+c+d),
$$

the four factors are

$$
2(s-d),\quad 2(s-c),\quad 2(s-b),\quad 2(s-a).
$$

Therefore,

$$
K^2=(s-a)(s-b)(s-c)(s-d),
$$

so

$$
K=\sqrt{(s-a)(s-b)(s-c)(s-d)}.
$$

For part (D), for a general quadrilateral, the area is still

$$
K=\frac12ab\sin B+\frac12cd\sin D,
$$

so

$$
4K=2ab\sin B+2cd\sin D.
$$

Also, using the shared diagonal $$AC$$ again,

$$
a^2+b^2-2ab\cos B=c^2+d^2-2cd\cos D.
$$

Thus,

$$
a^2+b^2-c^2-d^2=2ab\cos B-2cd\cos D.
$$

Now compute

$$
(4K)^2+(a^2+b^2-c^2-d^2)^2.
$$

Substitute the two expressions above:

$$
(2ab\sin B+2cd\sin D)^2+(2ab\cos B-2cd\cos D)^2.
$$

Expand:

$$
4a^2b^2\sin^2B+8abcd\sin B\sin D+4c^2d^2\sin^2D
$$

$$
+4a^2b^2\cos^2B-8abcd\cos B\cos D+4c^2d^2\cos^2D.
$$

Group terms:

$$
4a^2b^2(\sin^2B+\cos^2B)+4c^2d^2(\sin^2D+\cos^2D)
$$

$$
+8abcd(\sin B\sin D-\cos B\cos D).
$$

Since

$$
\sin^2x+\cos^2x=1
$$

and

$$
\cos(B+D)=\cos B\cos D-\sin B\sin D,
$$

this becomes

$$
4a^2b^2+4c^2d^2-8abcd\cos(B+D).
$$

Therefore,

$$
(4K)^2+(a^2+b^2-c^2-d^2)^2=4(a^2b^2+c^2d^2-2abcd\cos(B+D)).
$$

For part (E), rearrange the result from part (D):

$$
16K^2=4(a^2b^2+c^2d^2-2abcd\cos(B+D))-(a^2+b^2-c^2-d^2)^2.
$$

Use

$$
\cos(B+D)=2\cos^2\left(\frac{B+D}{2}\right)-1.
$$

Then

$$
-2abcd\cos(B+D)
=-4abcd\cos^2\left(\frac{B+D}{2}\right)+2abcd.
$$

So

$$
16K^2=4(a^2b^2+c^2d^2+2abcd)-(a^2+b^2-c^2-d^2)^2
$$

$$
-16abcd\cos^2\left(\frac{B+D}{2}\right).
$$

Since

$$
4(a^2b^2+c^2d^2+2abcd)=4(ab+cd)^2,
$$

we get

$$
16K^2=4(ab+cd)^2-(a^2+b^2-c^2-d^2)^2
-16abcd\cos^2\left(\frac{B+D}{2}\right).
$$

From part $$(D)$$, the first two terms factor as

$$
16(s-a)(s-b)(s-c)(s-d).
$$

Therefore,

$$
16K^2=16(s-a)(s-b)(s-c)(s-d)
-16abcd\cos^2\left(\frac{B+D}{2}\right).
$$

Divide by $$16$$:

$$
K^2=(s-a)(s-b)(s-c)(s-d)-abcd\cos^2\left(\frac{B+D}{2}\right).
$$

This is Bretschneider's formula.

For part (F), if $$ABCD$$ is cyclic, then opposite angles are supplementary:

$$
B+D=180^\circ.
$$

Thus,

$$
\frac{B+D}{2}=90^\circ,
$$

so

$$
\cos^2\left(\frac{B+D}{2}\right)=\cos^2(90^\circ)=0.
$$

Bretschneider's formula becomes

$$
K^2=(s-a)(s-b)(s-c)(s-d),
$$

which is Brahmagupta's formula.
:::
::::
