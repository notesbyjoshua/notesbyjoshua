---
title: "Unit 5: Torque and Rotational Dynamics"
description: "AP Physics C Mechanics notes on torque, rotational dynamics, moment of inertia, angular acceleration, and equilibrium."
sidebar:
  order: 5
---

:::variables
- $$\theta$$ = angular displacement (Units: radians)
- $$\omega$$ = angular velocity (Units: $$\text{rad/s}$$)
- $$\alpha$$ = angular acceleration (Units: $$\text{rad/s}^2$$)
- $$\tau$$ = torque (Units: $$\text{N}\cdot\text{m}$$)
- $$I$$ = rotational inertia / moment of inertia (Units: $$\text{kg}\cdot\text{m}^2$$)
- $$r$$ = distance from rotation axis
- $$s$$ = arc length
:::

---

## Angular Kinematics

Angular kinematics deals with rotation around a fixed axis, like a top spinning in place or a CD spinning on a disk player. For a rigid body rotating about a fixed axis, angular variables mirror linear variables, except it applies to rotations instead of linear translation.

**Angular displacement** $$\theta$$ is the change in angle of an object, where the standard is to always give the positive angles with the direction (e.g. $$30 \circ$$ counterclockwise or $$210 \circ$$ clockwise). **Angular velocity** $$\omega$$ and **angular acceleration** $$\alpha$$ are defined below:

$$
\omega = \frac{d\theta}{dt}, \qquad \alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2}.
$$

If angular acceleration is constant,

$$
\omega_f = \omega_i + \alpha t,
$$

$$
\theta_f-\theta_i = \omega_i t + \frac{1}{2}\alpha t^2,
$$

$$
\omega_f^2 = \omega_i^2 + 2\alpha(\theta_f-\theta_i).
$$

As you can see, $$\theta$$ maps to $$x$$, $$\omega$$ maps to $$v$$, and $$\alpha$$ maps to $$a$$. Fittingly, all of the rotational variables are named the same as their translational counterparts with the addition of "angular." The equations are the rotational equivalent of the Big 5 equations from Unit 1. Radians are dimensionless in SI, but keeping them visible helps avoid mixing angular and linear quantities.

### Connecting Linear and Angular Motion

For a point a distance $$r$$ from a fixed rotation axis,

$$
s = r\theta,
$$

$$
v_t = r\omega,
$$

$$
a_t = r\alpha.
$$

The radial or centripetal acceleration is

$$
a_r = \frac{v_t^2}{r} = r\omega^2,
$$

directed toward the axis. Tangential acceleration changes speed; radial acceleration changes direction. Always remember that the rotational equivalent of any linear variables will involve dividing by the radius.

<div class="theorem-box">

**Proof (linear and angular conversion).** The radius conversion comes from arc length:

$$
s=r\theta.
$$

A point twice as far from the axis covers twice as much arc length for the same angle, so it has twice the tangential speed at the same $$\omega$$. Differentiate $$s=r\theta$$ with respect to time:

$$
\frac{ds}{dt}=r\frac{d\theta}{dt}.
$$

Thus

$$
v_t=r\omega.
$$

Differentiate once more:

$$
a_t=r\alpha.
$$

Turning $$v_t=r\omega$$ around, the same linear speed corresponds to a smaller angular speed when the radius is larger:

$$
\omega=\frac{v_t}{r}.
$$

</div>

<div class="theorem-box">

**Example.** A wheel of radius $$0.40\ \text{m}$$ starts from rest and has constant angular acceleration $$3.0\ \text{rad/s}^2$$ for $$5.0\ \text{s}$$. Find its final angular speed and the tangential speed of a point on the rim.

Use angular kinematics:

$$
\omega_f=\omega_i+\alpha t=0+(3.0)(5.0)=15\ \text{rad/s}.
$$

The tangential speed is

$$
v_t=r\omega=(0.40)(15)=6.0\ \text{m/s}.
$$

</div>

<div class="theorem-box">

**Example.** A disk spinning at $$12\ \text{rad/s}$$ slows uniformly to $$4.0\ \text{rad/s}$$ while rotating through $$8.0\ \text{rad}$$. Find its angular acceleration.

Use the angular version of the no-time kinematics equation:

$$
\omega_f^2=\omega_i^2+2\alpha\Delta\theta.
$$

So

$$
\alpha=\frac{\omega_f^2-\omega_i^2}{2\Delta\theta}
=\frac{4.0^2-12^2}{2(8.0)}
=\frac{16-144}{16}=-8.0\ \text{rad/s}^2.
$$

The negative sign means the angular acceleration opposes the spin.

</div>

---

## Torque

Torque is the rotational effect and analogy of a force:

$$
\vec{\tau} = \vec{r}\times \vec{F}.
$$

Its magnitude is

$$
\tau = rF\sin\theta = F r_{\perp},
$$

where $$r_{\perp}$$ is the lever arm, the perpendicular distance from the axis to the line of action of the force. A force applied through the axis produces no torque about that axis.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\coordinate (O) at (0,0);
\coordinate (P) at (3,1.2);
\fill (O) circle (2pt) node[below left] {pivot};
\draw[very thick] (O) -- (P) node[midway, below right] {$\vec r$};
\draw[->, very thick, red] (P) -- ++(0,1.65) node[above] {$\vec F$};
\draw[dashed] (O) -- (3,0);
\draw[dashed, red!60] (3,0) -- (3,2.5);
\draw[<->, blue, thick] (0,-0.32) -- (3,-0.32) node[midway,below] {$r_\perp$};
\draw[dashed, gray] (O) -- (0,1.35);
\draw (0.68,0.27) arc[start angle=21.8,end angle=90,radius=0.73] node[midway,above right] {$\theta$};
\end{tikzpicture}
```

There are two equivalent ways to read $$\tau = rF\sin\theta$$, and switching between them is often the key to a clean solution:

- **Lever arm (perpendicular distance).** Group the trig with $$r$$: $$\tau = F(r\sin\theta) = F\,r_\perp$$. Extend the force's line of action into an infinite line and drop a perpendicular from the axis onto it. That perpendicular distance is the lever arm $$r_\perp$$. Sliding the force back and forth along its own line of action never changes the torque, because the lever arm is unchanged.
- **Perpendicular component of force.** Group the trig with $$F$$: $$\tau = r(F\sin\theta) = r\,F_\perp$$. Here $$F_\perp = F\sin\theta$$ is the component of the force perpendicular to $$\vec r$$. Only the part of the force that is "across" the radius twists the body; the part along $$\vec r$$ (toward or away from the axis) does nothing.

:::warning
"Force times distance" is a trap: it is only the full torque when the force is perpendicular to $$\vec r$$. When the force is along $$\vec r$$ (radial), $$\sin\theta = 0$$ and the torque vanishes no matter how large the force or the distance.
:::

The direction of torque follows the **right-hand rule** applied to $$\vec\tau = \vec r\times\vec F$$: point the fingers along $$\vec r$$ (from axis to application point), curl them toward $$\vec F$$, and the thumb gives $$\vec\tau$$. In planar problems the torque vector points either out of or into the page, so we replace the vector bookkeeping with signs: **counterclockwise torques positive, clockwise torques negative**. Pick that sign convention once at the start of a problem and apply it to every torque.

### Geometry of Cross Products and the Right-Hand Rule

In the previous section, we defined torque as

$$
\vec{\tau}=\vec r\times \vec F.
$$

The "x" in the middle is actual not multiplication in the traditional sense. It represents the **cross product**, which is a way of multiplying vectors. The magnitude of a cross product (using torque as an example) is defined as

$$
\lvert \vec r\times \vec F\rvert=rF\sin\theta,
$$

where $$\theta$$ is the smaller angle between the vectors (to prove this, you need to know Linear Algebra). Unlike the dot product, the cross product is found with the right-hand rule: point your fingers along the first vector, curl toward the second vector, and your thumb points in the direction of the cross product. This is why order matters:

$$
\vec r\times \vec F=-(\vec F\times \vec r).
$$

In most AP Mechanics torque problems, the object lies in the page, so the torque vector points either out of the page or into the page. A dot $$\odot$$ means out of the page; a cross $$\otimes$$ means into the page. Once you choose counterclockwise as positive, out-of-page torque is positive and into-page torque is negative.

If the vectors are given in components, the cross product can be found directly. For

$$
\vec A=\langle A_x,A_y,A_z\rangle
$$

and

$$
\vec B=\langle B_x,B_y,B_z\rangle,
$$

the cross product is

$$
\vec A\times \vec B
=\left\langle
A_yB_z-A_zB_y,\,
A_zB_x-A_xB_z,\,
A_xB_y-A_yB_x
\right\rangle.
$$

For most AP torque problems in the $$xy$$-plane, both $$\vec r$$ and $$\vec F$$ have zero $$z$$-component, so only the $$z$$-component of torque survives:

$$
\tau_z=r_xF_y-r_yF_x.
$$

Positive $$\tau_z$$ points out of the page and means counterclockwise rotation; negative $$\tau_z$$ points into the page and means clockwise rotation.

<div class="theorem-box">

**Example.** A wrench grips a bolt at the origin. You push on the handle a distance $$r = 0.30\ \text{m}$$ from the bolt with force $$F=80\ \text{N}$$. The force is directed $$30^\circ$$ above the handle for the first push. Then you move your hand to $$r=0.45\ \text{m}$$ but can only push with $$55\ \text{N}$$ at $$70^\circ$$ to the handle. Which push produces more torque?

Using the perpendicular component of the force,

$$
\tau_1=rF\sin\theta=(0.30)(80)\sin30^\circ=12\ \text{N}\cdot\text{m}.
$$

For the second push,

$$
\tau_2=(0.45)(55)\sin70^\circ=23\ \text{N}\cdot\text{m}.
$$

Even though the second push has less force, it produces more torque because the lever arm is longer and the force is closer to perpendicular. Torque rewards both distance from the pivot and perpendicularity.

</div>

<div class="theorem-box">

**Example.** A force $$\vec F=\langle 12,18,0\rangle\ \text{N}$$ is applied at position $$\vec r=\langle 0.40,0.25,0\rangle\ \text{m}$$ relative to a pivot. Find the torque vector about the pivot and state the rotational direction.

Use the component formula for the $$z$$-component:

$$
\tau_z=r_xF_y-r_yF_x.
$$

Substitute:

$$
\tau_z=(0.40)(18)-(0.25)(12)=7.2-3.0=4.2\ \text{N}\cdot\text{m}.
$$

So

$$
\vec\tau=\langle 0,0,4.2\rangle\ \text{N}\cdot\text{m}.
$$

The positive $$z$$ direction points out of the page, so this torque is counterclockwise.

</div>

---

## Rotational Inertia

Rotational inertia (also known as moment of inertia) measures resistance to angular acceleration:

$$
I = \sum_i m_i r_i^2
$$

for point masses and

$$
I = \int r^2\,dm
$$

for continuous bodies. Mass farther from the axis contributes more strongly because of the $$r^2$$ factor. Rotational inertia can be thought of as the rotational equivalent of mass.

Common results:

- Point mass: $$I = mr^2$$
- Thin hoop about center: $$I = MR^2$$
- Solid disk or cylinder about center: $$I = \frac{1}{2}MR^2$$
- Solid sphere about diameter: $$I = \frac{2}{5}MR^2$$
- Thin rod about center: $$I = \frac{1}{12}ML^2$$
- Thin rod about end: $$I = \frac{1}{3}ML^2$$


```tikz
\usepackage{tikz}
\begin{tikzpicture}[font=\small]
\draw[fill=gray!15] (-3.7,0.9) circle (0.36);
\fill (-3.7,0.9) circle (1.5pt);
\node at (-3.7,0.28) {point mass};
\node at (-3.7,-0.10) {$I=mr^2$};
\draw[line width=1.3pt] (-1.7,0.9) circle (0.36);
\node at (-1.7,0.28) {hoop};
\node at (-1.7,-0.10) {$I=MR^2$};
\draw[fill=gray!20] (0.2,0.9) circle (0.36);
\node at (0.2,0.28) {disk};
\node at (0.2,-0.10) {$I=\tfrac12MR^2$};
\shade[ball color=gray!35] (2.1,0.9) circle (0.36);
\node at (2.1,0.28) {sphere};
\node at (2.1,-0.10) {$I=\tfrac25MR^2$};
\draw[line width=3pt] (-2.4,-1.05) -- (-0.4,-1.05);
\fill (-1.4,-1.05) circle (1.5pt);
\node at (-1.4,-1.55) {rod center: $\tfrac1{12}ML^2$};
\draw[line width=3pt] (0.8,-1.05) -- (2.8,-1.05);
\fill (0.8,-1.05) circle (1.5pt);
\node at (1.8,-1.55) {rod end: $\tfrac13ML^2$};
\end{tikzpicture}
```

:::strategy
To solve for moments of inertia,

1. For point mass objects, compute $$m_i r_i^2$$ for each point and add them: $$I=\sum m_i r_i^2$$.
2. For a continuous object, choose a tiny mass element $$dm$$ and write its distance $$r$$ from the rotation axis.
3. Express $$dm$$ using a density:
   - linear density $$\lambda=M/L$$ gives $$dm=\lambda\,dx$$,
   - surface density $$\sigma=M/A$$ gives $$dm=\sigma\,dA$$,
   - volume density $$\rho=M/V$$ gives $$dm=\rho\,dV$$.
4. Express density in terms of mass and radius.
5. Integrate $$I=\int r^2\,dm$$ over the entire object.
:::

Below are example proofs of how to derive these formulas:

<div class="theorem-box">

**Proof (Rotational Inertia of a Thin Rod About Its Center).** Let a uniform rod of length $$L$$ and mass $$M$$ lie along the $$x$$-axis with its center at $$x=0$$. Its linear mass density is

$$
\lambda=\frac{M}{L}.
$$

A tiny piece has mass

$$
dm=\lambda\,dx.
$$

The rotational inertia about the center is

$$
I=\int r^2\,dm=\int_{-L/2}^{L/2}x^2\lambda\,dx.
$$

Substitute $$\lambda=M/L$$:

$$
I=\frac{M}{L}\int_{-L/2}^{L/2}x^2\,dx.
$$

Evaluate:

$$
I=\frac{M}{L}\left[\frac{x^3}{3}\right]_{-L/2}^{L/2}
=\frac{M}{L}\cdot\frac{L^3}{12}.
$$

So

$$
I=\frac{1}{12}ML^2.
$$

</div>

<div class="theorem-box">

**Proof (Thin Hoop About Its Central Axis).** A thin hoop (or thin cylindrical shell) of mass $$M$$ and radius $$R$$ has all of its mass at the same distance $$R$$ from the central axis. The integral is then trivial:

$$
I=\int r^2\,dm=\int R^2\,dm = R^2\int dm = R^2\cdot M.
$$

So

$$
I=MR^2.
$$

This is the largest moment of inertia of any shape of mass $$M$$ and radius $$R$$ about its center, because none of the mass is closer in than $$R$$.

</div>

<div class="theorem-box">

**Proof (Solid Disk or Cylinder About Its Central Axis).** Take a uniform disk of mass $$M$$ and radius $$R$$ (a cylinder is just a stack of identical disks, so it has the same result per the central axis). Its area mass density is

$$
\sigma=\frac{M}{\pi R^2}.
$$

Slice the disk into thin concentric rings of radius $$r$$ and thickness $$dr$$. Each ring is essentially a hoop, so all of its mass sits at distance $$r$$ from the axis. A ring's area is its circumference times its width, $$2\pi r\,dr$$, so its mass is

$$
dm=\sigma\,(2\pi r\,dr)=\frac{M}{\pi R^2}\,2\pi r\,dr=\frac{2M}{R^2}r\,dr.
$$

Each ring contributes $$dI=r^2\,dm$$, so

$$
I=\int_0^R r^2\,dm=\int_0^R r^2\cdot\frac{2M}{R^2}r\,dr=\frac{2M}{R^2}\int_0^R r^3\,dr.
$$

Evaluate the integral:

$$
I=\frac{2M}{R^2}\left[\frac{r^4}{4}\right]_0^R=\frac{2M}{R^2}\cdot\frac{R^4}{4}=\frac{1}{2}MR^2.
$$

So

$$
I=\frac{1}{2}MR^2.
$$

Compared with the hoop, the disk has half the rotational inertia for the same $$M$$ and $$R$$ because much of its mass lives at radii smaller than $$R$$.

</div>

<div class="theorem-box">

**Proof (Solid Sphere About a Diameter).** A uniform solid sphere of mass $$M$$ and radius $$R$$ has volume density

$$
\rho=\frac{M}{\frac{4}{3}\pi R^3}=\frac{3M}{4\pi R^3}.
$$

Slice the sphere into thin disks perpendicular to the rotation axis (call it the $$z$$-axis). A disk at height $$z$$ has radius $$r=\sqrt{R^2-z^2}$$ and thickness $$dz$$, so its mass is

$$
dm=\rho\,\pi r^2\,dz=\rho\,\pi (R^2-z^2)\,dz.
$$

Each disk's moment of inertia about the $$z$$-axis is $$dI=\tfrac{1}{2}r^2\,dm$$ (using the disk result just proved):

$$
dI=\frac{1}{2}(R^2-z^2)\,dm=\frac{1}{2}(R^2-z^2)\,\rho\,\pi (R^2-z^2)\,dz=\frac{\rho\pi}{2}(R^2-z^2)^2\,dz.
$$

Integrate over the whole sphere, $$z$$ from $$-R$$ to $$R$$:

$$
I=\frac{\rho\pi}{2}\int_{-R}^{R}(R^2-z^2)^2\,dz=\frac{\rho\pi}{2}\int_{-R}^{R}\left(R^4-2R^2z^2+z^4\right)dz.
$$

Each term integrates to

$$
\int_{-R}^{R}R^4\,dz=2R^5,\qquad \int_{-R}^{R}2R^2z^2\,dz=\frac{4}{3}R^5,\qquad \int_{-R}^{R}z^4\,dz=\frac{2}{5}R^5.
$$

Combine: $$2R^5-\tfrac{4}{3}R^5+\tfrac{2}{5}R^5=\left(\tfrac{30-20+6}{15}\right)R^5=\tfrac{16}{15}R^5$$. So

$$
I=\frac{\rho\pi}{2}\cdot\frac{16}{15}R^5=\frac{8\pi\rho}{15}R^5.
$$

Substitute $$\rho=\dfrac{3M}{4\pi R^3}$$:

$$
I=\frac{8\pi}{15}\cdot\frac{3M}{4\pi R^3}\cdot R^5=\frac{2}{5}MR^2.
$$

So

$$
I=\frac{2}{5}MR^2.
$$

</div>

### Parallel-Axis Theorem

<div class="theorem-box">

**Theorem (Parallel-Axis Theorem).** If $$I_{\text{cm}}$$ is the rotational inertia about an axis through the center of mass, then the rotational inertia about a parallel axis a distance $$d$$ away is

$$
I = I_{\text{cm}} + Md^2.
$$

This theorem is useful for rods about one end, rolling bodies about contact points, and composite rigid bodies.

</div>

<div class="theorem-box">

**Proof (Parallel-Axis Theorem).** Put the center of mass at the origin, and let the new parallel axis be displaced by distance $$d$$ in the $$x$$-direction. For a mass element, the squared distance to the new axis can be written

$$
r^2=(x-d)^2+y^2.
$$

The moment of inertia about the new axis is

$$
I=\int \left[(x-d)^2+y^2\right]\,dm.
$$

Expand:

$$
I=\int (x^2+y^2)\,dm-2d\int x\,dm+d^2\int dm.
$$

The first term is $$I_{\text{cm}}$$. The middle term is zero because the origin is at the center of mass, so $$\int x\,dm=0$$. The final term is $$Md^2$$. Therefore

$$
I=I_{\text{cm}}+Md^2.
$$

</div>

The parallel-axis theorem can extend standard results derived from the center of mass to more complicated and often more useful pivot points.

<div class="theorem-box">

**Proof (Thin Rod About One End).** We already know the rod about its center is $$I_{\text{cm}}=\tfrac{1}{12}ML^2$$. The end of the rod is a parallel axis displaced from the center by $$d=L/2$$. The parallel-axis theorem gives

$$
I_{\text{end}}=I_{\text{cm}}+Md^2=\frac{1}{12}ML^2+M\left(\frac{L}{2}\right)^2=\frac{1}{12}ML^2+\frac{1}{4}ML^2.
$$

Adding the fractions ($$\tfrac{1}{12}+\tfrac{3}{12}=\tfrac{4}{12}=\tfrac{1}{3}$$),

$$
I_{\text{end}}=\frac{1}{3}ML^2.
$$

This matches a direct integration $$\int_0^L x^2\lambda\,dx$$, but the parallel-axis route is faster once $$I_{\text{cm}}$$ is known. The end-axis value is larger than the center-axis value, which makes sense: shifting the axis away from the center of mass always increases $$I$$.

</div>

### Perpendicular-Axis Theorem

The parallel-axis theorem shifts an axis sideways; the **perpendicular-axis theorem** relates axes that are mutually perpendicular. It applies only to a **planar object** (a flat lamina) lying in a plane.

<div class="theorem-box">

**Theorem (Perpendicular-Axis Theorem).** If the lamina lies in the $$xy$$-plane, then the rotational inertia about the $$z$$-axis (perpendicular to the lamina, through a chosen point) equals the sum of the inertias about the two in-plane axes through that same point:

$$
I_z = I_x + I_y.
$$

This is often the fastest way to get the inertia of a flat object about an in-plane axis once you know it about the perpendicular axis.

</div>

<div class="theorem-box">

**Proof (Perpendicular-Axis Theorem).** Let the lamina lie in the $$xy$$-plane, so every mass element has $$z=0$$. For an axis along $$z$$, the distance of a mass element from the axis is its in-plane distance $$r$$, where

$$
r^2 = x^2 + y^2.
$$

Therefore

$$
I_z = \int r^2\,dm = \int (x^2 + y^2)\,dm = \int x^2\,dm + \int y^2\,dm.
$$

But $$\int y^2\,dm$$ is the inertia about the $$x$$-axis (distance from the $$x$$-axis is $$\lvert y\rvert$$), and $$\int x^2\,dm$$ is the inertia about the $$y$$-axis. So

$$
I_z = I_y + I_x.
$$

The flatness ($$z=0$$ everywhere) is essential; the theorem fails for a three-dimensional body.

</div>

<div class="theorem-box">

**Example.** A uniform disk of mass $$M$$ and radius $$R$$ has $$I_z = \tfrac{1}{2}MR^2$$ about its central perpendicular axis. Find its rotational inertia about a diameter (an in-plane axis through the center).

The disk lies in its own plane, so the perpendicular-axis theorem applies:

$$
I_z = I_x + I_y.
$$

By symmetry, the two perpendicular diameters are equivalent, so $$I_x = I_y \equiv I_d$$. Then

$$
\tfrac{1}{2}MR^2 = 2I_d,
$$

so

$$
I_d = \tfrac{1}{4}MR^2.
$$

The same trick gives a thin ring about a diameter: $$I_z = MR^2$$ gives $$I_d = \tfrac{1}{2}MR^2$$.

</div>

---

## Newton's Second Law for Rotation

For rotation about a fixed axis,

$$
\sum \tau = I\alpha.
$$

This is the rotational analog of $$\sum F = ma$$. It works when all torques and $$I$$ are computed about the same axis.

If the axis is not fixed, use the center of mass form:

$$
\sum \vec{\tau}_{\text{cm}} = I_{\text{cm}}\vec{\alpha}.
$$

However, if an object is rotating and translating, the translational motion of the center of mass still obeys

$$
\sum \vec{F}_{\text{ext}} = M\vec{a}_{\text{cm}}.
$$

<div class="theorem-box">

**Example.** A uniform rod of mass $$M$$ and length $$L$$ is hinged at one end and held horizontal, then released from rest. Find its angular acceleration just after release, and the linear acceleration of its free end at that instant.

The rod rotates about the fixed hinge, so use $$\sum\tau = I\alpha$$ about that hinge. Gravity acts at the center of mass, a distance $$L/2$$ from the hinge. Because the rod is horizontal, gravity is perpendicular to the rod, so the lever arm is the full $$L/2$$:

$$
\tau = Mg\cdot\frac{L}{2}.
$$

The moment of inertia about the end is $$I = \tfrac{1}{3}ML^2$$ (proved above). Then

$$
\alpha=\frac{\tau}{I}=\frac{Mg\,L/2}{\tfrac{1}{3}ML^2}=\frac{3g}{2L}.
$$

The free end is at radius $$r=L$$, so its tangential (linear) acceleration is

$$
a_{\text{end}}=L\alpha=L\cdot\frac{3g}{2L}=\frac{3}{2}g.
$$

Interestingly, the tip of the rod accelerates downward faster than $$g$$. A coin placed near the free end will be left behind (the rod falls out from under it) because the rod's surface there is accelerating at $$1.5g$$ while a free coin can only manage $$g$$. Note this is the *initial* angular acceleration; as the rod swings down, the lever arm of gravity shrinks like $$\cos\theta$$, so $$\alpha$$ decreases throughout the fall.

</div>

<div class="theorem-box">

**Example.** Two masses $$m_1$$ and $$m_2$$ (with $$m_2 > m_1$$) hang from a string that runs over a pulley modeled as a solid disk of mass $$M$$ and radius $$R$$, with $$I=\tfrac{1}{2}MR^2$$. The string does not slip on the pulley. Find the acceleration of the masses and the two string tensions.

With a massive pulley, the tensions on the two sides are **not** equal: the difference in tension is exactly what supplies the net torque that angularly accelerates the pulley. Call them $$T_1$$ (on the $$m_1$$ side) and $$T_2$$ (on the $$m_2$$ side). Take $$m_2$$ to accelerate down, $$m_1$$ up, with common magnitude $$a$$, and the pulley to spin in the matching sense.

Newton's second law for each hanging mass:

$$
m_2 g - T_2 = m_2 a,\qquad T_1 - m_1 g = m_1 a.
$$

For the pulley, $$\sum\tau = I\alpha$$ about its axle. The string is tangent to the rim, so each tension has lever arm $$R$$. The side pulling it forward is $$T_2$$ and the side resisting is $$T_1$$:

$$
(T_2 - T_1)R = I\alpha = \frac{1}{2}MR^2\,\alpha.
$$

Because the string does not slip, the rim's tangential acceleration equals the string (and block) acceleration, giving the constraint $$a = R\alpha$$, i.e. $$\alpha = a/R$$. Substitute:

$$
(T_2 - T_1)R = \frac{1}{2}MR^2\cdot\frac{a}{R}\quad\Rightarrow\quad T_2 - T_1 = \frac{1}{2}Ma.
$$

Now add the three equations in a way that cancels the tensions. From the block equations, $$T_2 = m_2(g-a)$$ and $$T_1 = m_1(g+a)$$, so

$$
T_2 - T_1 = (m_2 - m_1)g - (m_1 + m_2)a.
$$

Set this equal to $$\tfrac{1}{2}Ma$$:

$$
(m_2 - m_1)g - (m_1 + m_2)a = \frac{1}{2}Ma,
$$

so

$$
a=\frac{(m_2-m_1)g}{m_1+m_2+\tfrac{1}{2}M}.
$$

The pulley acts like an extra effective mass of $$\tfrac12 M$$ (its $$I/R^2$$) added to the system, which slows the acceleration. With $$a$$ known, the tensions follow:

$$
T_1=m_1(g+a),\qquad T_2=m_2(g-a).
$$

As a check, setting $$M=0$$ recovers the ideal-pulley result $$a=\dfrac{(m_2-m_1)g}{m_1+m_2}$$ with $$T_1=T_2$$, exactly as in the massless-pulley Atwood machine in [Unit 2](/notes/ap/ap-physics-c-mechanics/forces/).

</div>

---

## Static Equilibrium

A rigid body in static equilibrium satisfies

$$
\sum \vec{F}=0
$$

and

$$
\sum \vec{\tau}=0.
$$

If the object is not accelerating linearly or angularly (basically not moving or rotating), both conditions must hold. In **equilibrium**, the net torque is zero about *every* axis, not just the real one. So you are free to compute torques about whatever point makes the algebra easiest.

The standard trick is to put the pivot at the **location of an unknown force**. Since a force exerts zero torque about a point on its own line of action (since the distance to the pivot point is zero), that unknown drops out of the torque equation entirely, leaving fewer unknowns. Hinge forces and contact forces of unknown direction are the usual targets: pivot at the hinge and you never need to know the hinge force to find everything else. Once the other unknowns are found, the force equations $$\sum F_x = 0$$ and $$\sum F_y = 0$$ recover the hinge force.

:::strategy
1. Draw a free-body diagram of the extended object, placing each force at its actual point of application (do not collapse the body to a point since location matters for torque). Always make sure that your picture is accurate so that visualizing the problem is easy
2. Pick a sign convention (counterclockwise positive) and a smart pivot, usually at an unknown force.
3. Write $$\sum\tau = 0$$ about that pivot using lever arms.
4. Write $$\sum F_x = 0$$ and $$\sum F_y = 0$$ to recover any remaining forces.
:::

<div class="theorem-box">

**Example.** A uniform horizontal beam of mass $$m = 20\ \text{kg}$$ and length $$L$$ is hinged to a wall at its left end. A cable runs from the far (right) end of the beam up to the wall, making an angle $$\theta = 37^\circ$$ with the beam. A sign of weight $$W = 300\ \text{N}$$ hangs from the right end. Find the tension in the cable and the force the hinge exerts on the beam. Take $$g = 9.8\ \text{m/s}^2$$.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[line width=4pt] (0,0) -- (5,0);
\fill (0,0) circle (2pt);
\draw[line width=3pt] (0,-1.4) -- (0,2.4);
\draw[red, thick] (5,0) -- (0,2.4) node[midway,above right] {cable};
\draw[->,blue,thick] (5,0) -- (4.0,0.48) node[above] {$T$};
\draw[->,red,thick] (2.5,0) -- (2.5,-1.0) node[below] {$mg$};
\draw[->,red,thick] (5,0) -- (5,-1.2) node[below] {$W$};
\draw[->,orange!80!black,thick] (0,0) -- (0.9,0.5) node[right] {$\vec H$};
\draw (4.2,0) arc[start angle=180,end angle=154,radius=0.8] node[midway,left] {$\theta$};
\end{tikzpicture}
```

Forces on the beam: its weight $$mg = (20)(9.8) = 196\ \text{N}$$ acting down at the center ($$L/2$$); the sign's weight $$W = 300\ \text{N}$$ down at the right end ($$L$$); the cable tension $$T$$ along the cable at the right end; and the hinge force with unknown components $$H_x, H_y$$ at the left end.

**Smart pivot: the hinge.** This kills $$H_x$$ and $$H_y$$ from the torque equation. The cable tension's vertical component $$T\sin\theta$$ acts at distance $$L$$ and torques counterclockwise; both weights torque clockwise. Setting $$\sum\tau = 0$$ about the hinge (counterclockwise positive):

$$
T\sin\theta\cdot L - mg\cdot\frac{L}{2} - W\cdot L = 0.
$$

The length $$L$$ cancels:

$$
T\sin\theta = \frac{mg}{2} + W = \frac{196}{2} + 300 = 98 + 300 = 398\ \text{N},
$$

so

$$
T=\frac{398}{\sin 37^\circ}=\frac{398}{0.602}=661\ \text{N}.
$$

Now use force balance for the hinge force. Horizontally, only the cable's horizontal component and $$H_x$$ act:

The cable pulls the beam left, so the hinge pushes right:

$$
H_x=T\cos\theta=(661)(0.799)=528\ \text{N}.
$$

Vertically,

$$
H_y + T\sin\theta - mg - W = 0.
$$

Therefore

$$
H_y = mg + W - T\sin\theta
= 196 + 300 - 398
= 98\ \text{N (up).}
$$

The hinge force magnitude is $$\sqrt{H_x^2 + H_y^2} = \sqrt{528^2 + 98^2}\approx 537\ \text{N}$$. Choosing the hinge as pivot let us solve for $$T$$ in a single equation before ever touching the hinge force.

</div>

<div class="theorem-box">

**Example.** A uniform diving board of mass $$m = 30\ \text{kg}$$ and length $$L = 4.0\ \text{m}$$ rests on two supports: support $$A$$ at the left end and support $$B$$ a distance $$d = 1.5\ \text{m}$$ to the right of $$A$$. A diver of weight $$W = 600\ \text{N}$$ stands at the far right end. Find the forces the two supports exert on the board.

The board is in equilibrium under four forces: support force $$N_A$$ up at $$A$$, support force $$N_B$$ up at $$B$$, the board's weight down at the center ($$2.0\ \text{m}$$ from $$A$$), and the diver's weight $$600\ \text{N}$$ down at the right end ($$4.0\ \text{m}$$ from $$A$$).

The board's weight can be calculated using $$W=mg=294N$$ using $$g=9.8 \frac{m}{s^2}$$.

Pivot at $$B$$ to eliminate $$N_B$$. Measure distances from $$B$$: support $$A$$ is $$1.5\ \text{m}$$ to the left, the center of the board is $$2.0 - 1.5 = 0.5\ \text{m}$$ to the right of $$B$$, and the diver is $$4.0 - 1.5 = 2.5\ \text{m}$$ to the right of $$B$$. Taking counterclockwise positive, $$N_A$$ (up, left of $$B$$) torques clockwise; both weights are right of $$B$$ and torque counterclockwise. Then $$\sum\tau_B = 0$$:

$$
-N_A(1.5) + (294)(0.5) + (600)(2.5) = 0,
$$

$$
N_A(1.5) = 147 + 1500 = 1647\quad\Rightarrow\quad N_A = 1098\ \text{N}.
$$

The minus sign in the algebra means $$N_A$$ actually points **down**: support $$A$$ must pull the board down (or, physically, the board would lift off $$A$$ unless it is bolted there). This is the characteristic "see-saw" result when the load hangs past the far support.

Now use vertical force balance to get $$N_B$$. Be careful with the sign: with $$N_A$$ acting downward ($$-1098\ \text{N}$$ in the up-positive convention),

$$
N_A + N_B - mg - W = 0\ \Rightarrow\ N_B = mg + W - N_A = 1992\ \text{N}.
$$

So support $$B$$ (the fulcrum near the diver) carries a large upward force of about $$1990\ \text{N}$$, while support $$A$$ (the anchored end) is held down with about $$1100\ \text{N}$$. As a check, the net upward force is $$1992 - 1098 = 894\ \text{N}$$, which equals the total downward weight $$294 + 600 = 894\ \text{N}$$.

</div>

---

:::equations

| Idea | Equation |
| --- | --- |
| Angular kinematics (constant $$\alpha$$) | $$\omega_f=\omega_i+\alpha t,\quad \theta_f-\theta_i=\omega_i t+\tfrac12\alpha t^2$$ |
| Linear-angular links | $$s=r\theta,\quad v_t=r\omega,\quad a_t=r\alpha$$ |
| Torque magnitude | $$\tau=rF\sin\theta=F r_\perp=r F_\perp$$ |
| Torque vector | $$\vec\tau=\vec r\times\vec F$$ |
| Newton's second law (rotation) | $$\sum\tau=I\alpha$$ |
| Moment of inertia | $$I=\sum m_i r_i^2=\int r^2\,dm$$ |
| Parallel-axis theorem | $$I=I_{\text{cm}}+Md^2$$ |
| Static equilibrium | $$\sum\vec F=0,\quad \sum\tau=0$$ |

:::

## Practice

### Multiple Choice

::::problem
1. The perpendicular-axis theorem applies to

(A) any three-dimensional rigid body

(B) point masses only

(C) flat laminae

(D) rolling objects only


:::solution
The perpendicular-axis theorem is only for a flat object lying in a plane, usually called a lamina.


The theorem relates the moment of inertia about an axis perpendicular to the sheet to two perpendicular axes in the sheet. It does not apply to a general three-dimensional rigid body. Therefore the answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
2. A point mass $$m$$ is attached to the end of a massless rod of length $$L$$. About an axis perpendicular to the rod through a point $$L/3$$ from the mass, its moment of inertia is

(A) $$mL^2$$

(B) $$mL^2/9$$

(C) $$4mL^2/9$$

(D) $$mL^2/3$$


:::solution
For a point mass, moment of inertia is just

$$
I=mr^2,
$$

where $$r$$ is the perpendicular distance from the axis.

The axis is $$L/3$$ from the mass, so

$$
I=m\left(\frac{L}{3}\right)^2=\frac{mL^2}{9}.
$$

The answer is $$\boxed{\text{B}}$$.

The rod is massless, so it contributes no moment of inertia; only the point mass matters.
:::
::::

::::problem
3. Two forces of magnitude $$F$$ are applied to the end of a rod of length $$L$$ pivoted at the other end. One force is perpendicular to the rod, and the other makes angle $$\theta$$ with the rod in the opposite rotational sense. The net torque magnitude about the pivot is

(A) $$FL(1-\sin\theta)$$

(B) $$FL(1-\cos\theta)$$

(C) $$FL\sin\theta$$

(D) $$FL\cos\theta$$


:::solution
Torque comes from the perpendicular component of force. The perpendicular force produces torque $$FL$$. The angled force has perpendicular component $$F\sin\theta$$ and acts in the opposite rotational sense.

Therefore the net torque magnitude is

$$
FL-FL\sin\theta=FL(1-\sin\theta).
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
4. A disk and a hoop have the same mass and radius. The same torque is applied to each from rest for the same time. The disk's final angular speed is

(A) larger than the hoop's

(B) smaller than the hoop's

(C) equal to the hoop's

(D) impossible to compare without the torque value


:::solution
The same torque applied for the same time gives the same angular impulse:

$$
\Delta L=\tau\Delta t.
$$

Both start from rest, so both receive the same final angular momentum. But

$$
L=I\omega.
$$

A disk has $$I=\frac12MR^2$$, while a hoop has $$I=MR^2$$. With smaller $$I$$ for the same $$L$$, the disk must have larger $$\omega$$. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
5. A massive pulley of radius $$R$$ and rotational inertia $$I$$ has two tensions $$T_1$$ and $$T_2$$ applied by a non-slipping string. Its angular acceleration is

(A) $$\dfrac{(T_2-T_1)R}{I}$$

(B) $$\dfrac{T_1+T_2}{IR}$$

(C) $$\dfrac{I}{(T_2-T_1)R}$$

(D) $$\dfrac{(T_2-T_1)}{IR}$$


:::solution
Each tension acts tangentially at radius $$R$$, so each torque has magnitude $$TR$$. The tensions rotate the pulley in opposite directions.

Taking the sense of $$T_2$$ as positive,

$$
\sum\tau=(T_2-T_1)R=I\alpha.
$$

Thus

$$
\alpha=\frac{(T_2-T_1)R}{I}.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
6. A uniform disk of mass $$M$$ and radius $$R$$ rotates about an axis perpendicular to its face and passing through a point halfway between its center and rim. Its moment of inertia is

(A) $$\dfrac{1}{2}MR^2$$

(B) $$\dfrac{3}{4}MR^2$$

(C) $$MR^2$$

(D) $$\dfrac{3}{2}MR^2$$


:::solution
The disk's known central moment of inertia is

$$
I_{\text{cm}}=\frac12MR^2.
$$

The new axis is parallel to the central axis and shifted by $$d=R/2$$, so use the parallel-axis theorem:

$$
I=I_{\text{cm}}+Md^2
=\frac12MR^2+M\left(\frac{R}{2}\right)^2
=\frac34MR^2.
$$

The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
7. A uniform rod of length $$L$$ is pivoted at one end and held horizontally by a vertical string attached to the other end. A mass $$m$$ hangs from the rod at distance $$2L/3$$ from the pivot. The rod has mass $$M$$. The string tension is

(A) $$Mg+mg$$

(B) $$Mg/2+2mg/3$$

(C) $$Mg+mg-T$$ for some tension $$T$$

(D) zero


:::solution
Take torques about the pivot so the unknown hinge force creates no torque.

The tension creates counterclockwise torque $$TL$$. The rod's weight and hanging mass create clockwise torques:

$$
TL=Mg\left(\frac{L}{2}\right)+mg\left(\frac{2L}{3}\right).
$$

Divide by $$L$$:

$$
T=\frac{Mg}{2}+\frac{2mg}{3}.
$$

The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
8. A rigid body is in static equilibrium under exactly three nonparallel forces. Which statement must be true?

(A) The forces are parallel.

(B) The lines of action pass through a common point.

(C) The forces have equal magnitudes.

(D) The net torque is nonzero.


:::solution
For static equilibrium, both net force and net torque must be zero. If three nonparallel forces do not share a common intersection point, choose the torque axis at the intersection of two of them.

The first two forces produce zero torque about that point, so the third force would have to produce zero torque too. That only happens if its line of action also passes through the same point. Thus the answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
9. A ladder leans against a frictionless wall and rests on a rough floor. A person climbs upward along the ladder. Before slipping occurs, the horizontal force from the wall

(A) decreases

(B) increases

(C) stays constant

(D) is always zero


:::solution
Take torques about the floor contact. The floor forces then produce no torque about that point. The wall is frictionless, so it pushes horizontally at the top of the ladder.

As the person climbs, their weight acts farther from the floor contact, increasing the clockwise torque. To keep net torque zero, the counterclockwise torque from the wall force must increase. Since its lever arm is fixed by the ladder geometry, the wall force itself must increase. The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
10. A yo-yo unwinds from rest without slipping. If its axle radius is $$r$$ and rotational inertia is $$I$$, the tension is less than $$mg$$ because

(A) the string stretches

(B) gravity must both translate and rotate the yo-yo

(C) the net force on the yo-yo is zero

(D) mechanical energy is not conserved


:::solution
If the yo-yo's center of mass accelerates downward, the downward force must be larger than the upward tension.

Newton's second law for translation is

$$
mg-T=ma.
$$

Because $$a>0$$ downward, $$mg-T>0$$, so $$T<mg$$. The missing part of gravity's effect is not gone; gravity is also providing the energy/torque needed for rotation as the string unwinds. The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
11. A thin rod of length $$L$$ has linear density $$\lambda(x)=Cx$$ measured from one end. Its moment of inertia about that end is

(A) $$\dfrac{1}{2}ML^2$$

(B) $$\dfrac{2}{3}ML^2$$

(C) $$\dfrac{1}{3}ML^2$$

(D) $$\dfrac{1}{4}ML^2$$


:::solution
For a nonuniform rod, use $$dm=\lambda(x)dx=Cx\,dx$$.

First express $$C$$ using the total mass:

$$
M=\int_0^L Cx\,dx=\frac{CL^2}{2}.
$$

The moment of inertia about the end is

$$
I=\int_0^Lx^2\,dm=\int_0^Lx^2(Cx)\,dx=\frac{CL^4}{4}.
$$

Since $$C=2M/L^2$$,

$$
I=\frac{ML^2}{2}.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
12. A horizontal rod of length $$L$$ is hinged to a wall and held by a cord making angle $$\theta$$ with the rod. Masses $$m$$ and $$2m$$ hang from the rod at distances $$L/4$$ and $$3L/4$$ from the hinge. Neglect the rod's mass.

The tension in the cord is

(A) $$\dfrac{7mg}{4\sin\theta}$$

(B) $$\dfrac{7mg}{4\cos\theta}$$

(C) $$\dfrac{5mg}{4\sin\theta}$$

(D) $$\dfrac{3mg}{2\sin\theta}$$


:::solution
Take torques about the hinge so the hinge force disappears from the equation. Only the vertical component of the cord tension produces torque about the hinge.

The counterclockwise torque from the cord is $$(T\sin\theta)L$$. The clockwise torques from the two masses are

$$
mg\left(\frac{L}{4}\right)+2mg\left(\frac{3L}{4}\right).
$$

Set net torque to zero:

$$
(T\sin\theta)L=\frac{mgL}{4}+\frac{6mgL}{4}=\frac{7mgL}{4}.
$$

So

$$
T=\frac{7mg}{4\sin\theta}.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

### FRQ

::::frq{id=ap-physics-c-mechanics-torque-1}
1. A nonuniform rod of length $$L$$ and mass $$M$$ has density $$\lambda(x)=Cx^2$$ measured from the left end. It is pivoted at the left end and held horizontally by a vertical string at the right end.

   $$(A)$$ Determine $$C$$ in terms of $$M$$ and $$L$$.

   $$(B)$$ Find the rod's center of mass.

   $$(C)$$ Determine the tension in the string.

   $$(D)$$ Determine the horizontal and vertical hinge force components.


:::solution
$$(A)$$ The density is $$\lambda(x)=Cx^2$$, so a small piece of rod has mass $$dm=Cx^2dx$$.

The total mass is

$$
M=\int_0^L dm=\int_0^LCx^2dx=\frac{CL^3}{3}.
$$

Therefore

$$
\boxed{C=\frac{3M}{L^3}}.
$$

$$(B)$$ The center of mass is a weighted average position:

$$
x_{\text{cm}}=\frac{1}{M}\int_0^L x\,dm
=\frac{1}{M}\int_0^Lx(Cx^2)dx.
$$

So

$$
x_{\text{cm}}=\frac{1}{M}\frac{CL^4}{4}.
$$

Using $$C=3M/L^3$$,

$$
\boxed{x_{\text{cm}}=\frac{3L}{4}}.
$$

$$(C)$$ Take torques about the pivot. The hinge force produces no torque about the hinge, so only the string tension and weight matter.

Torque balance gives

$$
TL=Mg\left(\frac{3L}{4}\right).
$$

Thus

$$
\boxed{T=\frac{3Mg}{4}}.
$$

$$(D)$$ There are no horizontal applied forces besides the hinge, so horizontal force balance gives

$$
\boxed{H_x=0}.
$$

Vertically, the rod is not accelerating:

$$
H_y+T-Mg=0.
$$

Substitute $$T=3Mg/4$$:

$$
H_y=Mg-\frac{3Mg}{4}=\boxed{\frac{Mg}{4}}.
$$
:::
::::

::::frq{id=ap-physics-c-mechanics-torque-2}
2. Two blocks of masses $$m_1$$ and $$m_2$$ are connected by a light string over a pulley modeled as a disk of mass $$M$$ and radius $$R$$. The string does not slip and $$m_2>m_1$$.

   $$(A)$$ Draw force diagrams for the blocks and a torque diagram for the pulley.

   $$(B)$$ Derive the acceleration of the blocks.

   $$(C)$$ Find both string tensions.

   $$(D)$$ Determine the limiting acceleration as $$M\to 0$$ and explain why it makes sense.


:::solution
$$(A)$$ The two hanging blocks each have weight and tension. Because the pulley has rotational inertia, the two tensions are not equal.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.9]
  \draw[thick] (0,1.2) circle (0.65);
  \draw[thick] (-0.65,1.2) -- (-0.65,-0.4);
  \draw[thick] (0.65,1.2) -- (0.65,-0.4);
  \draw[fill=blue!10, thick] (-1.05,-1.15) rectangle (-0.25,-0.4);
  \draw[fill=blue!10, thick] (0.25,-1.35) rectangle (1.05,-0.4);
  \draw[->, thick] (-0.65,-0.78) -- ++(0,1.15) node[above left] {$T_1$};
  \draw[->, thick] (-0.65,-0.78) -- ++(0,-1.05) node[below] {$m_1g$};
  \draw[->, thick] (0.65,-0.88) -- ++(0,1.25) node[above right] {$T_2$};
  \draw[->, thick] (0.65,-0.88) -- ++(0,-1.05) node[below] {$m_2g$};
  \draw[->, red!75, thick] (1.35,0.5) -- ++(0,-0.75) node[below] {$a$};
  \draw[->, blue!70, thick] (0.78,1.85) arc[start angle=55,end angle=-20,radius=0.8] node[right] {$\alpha$};
  \node[align=left] at (3.2,1.25) {pulley torque:\\$T_2R$ clockwise,\\$T_1R$ counterclockwise};
\end{tikzpicture}
```

$$(B)$$ Choose positive so that $$m_2$$ accelerates downward and $$m_1$$ accelerates upward. For $$m_2$$,

$$
m_2g-T_2=m_2a.
$$

For $$m_1$$,

$$
T_1-m_1g=m_1a.
$$

For the pulley, the net torque is caused by the tension difference:

$$
(T_2-T_1)R=I\alpha.
$$

The string does not slip, so $$a=\alpha R$$, and for a disk $$I=\frac12MR^2$$. Therefore

$$
T_2-T_1=\frac{I\alpha}{R}=\frac{I}{R^2}a=\frac{M}{2}a.
$$

Add the three equations so the tensions cancel:

$$
(m_2-m_1)g=(m_1+m_2+M/2)a.
$$

Thus

$$
\boxed{a=\frac{(m_2-m_1)g}{m_1+m_2+M/2}}.
$$

$$(C)$$ Substitute this acceleration back into the block equations:

$$
\boxed{T_1=m_1(g+a)},
\qquad
\boxed{T_2=m_2(g-a)}.
$$

$$(D)$$ As $$M\to0$$, the pulley contributes no rotational inertia, so the denominator becomes $$m_1+m_2$$:

$$
\boxed{a\to\frac{(m_2-m_1)g}{m_1+m_2}}.
$$

That is the usual ideal Atwood-machine result, which makes sense because a massless pulley needs no torque to spin.
:::
::::

::::frq{id=ap-physics-c-mechanics-torque-3}
3. A rigid bar is pivoted at one end and released from rest at angle $$\theta_0$$ above the horizontal. A small mass $$m$$ is attached at the free end, and the bar itself has mass $$M$$ and length $$L$$.

   $$(A)$$ Write the moment of inertia of the system about the pivot.

   $$(B)$$ Determine the net torque about the pivot at the instant the system is released.

   $$(C)$$ Determine the initial angular acceleration.

   $$(D)$$ Determine the initial tangential acceleration of the attached mass and state its direction.


:::solution
$$(A)$$ Add the moment of inertia of the rod about one end and the point mass at the far end.

For the rod, $$I_{\text{rod}}=\frac13ML^2$$. For the attached mass, $$I_m=mL^2$$. Thus

$$
\boxed{I=\left(m+\frac{M}{3}\right)L^2}.
$$

$$(B)$$ Gravity acts downward. When the bar is at angle $$\theta_0$$ above horizontal, the perpendicular lever arm for a downward force at distance $$r$$ along the bar is $$r\cos\theta_0$$.

The attached mass contributes torque $$mgL\cos\theta_0$$. The rod's weight acts at its center, distance $$L/2$$ from the pivot, so it contributes $$Mg(L/2)\cos\theta_0$$. The total clockwise torque magnitude is

$$
\boxed{\tau=\left(m+\frac{M}{2}\right)gL\cos\theta_0}.
$$

$$(C)$$ If counterclockwise is positive, the torque from gravity is negative because it tends to rotate the bar clockwise. Using $$\sum\tau=I\alpha$$,

$$
\alpha=\frac{-\left(m+\frac{M}{2}\right)gL\cos\theta_0}{\left(m+\frac{M}{3}\right)L^2}.
$$

So

$$
\boxed{\alpha=-\frac{(m+M/2)gL\cos\theta_0}{(m+M/3)L^2}}.
$$

$$(D)$$ The attached mass is a distance $$L$$ from the pivot, so its tangential acceleration is

$$
a_t=\lvert\alpha\rvert L.
$$

Therefore

$$
\boxed{a_t=\frac{(m+M/2)g\cos\theta_0}{m+M/3}}.
$$

Its direction is clockwise, perpendicular to the bar at the instant of release.
:::
::::
