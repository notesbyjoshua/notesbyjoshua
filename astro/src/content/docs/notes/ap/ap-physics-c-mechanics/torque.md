---
title: "Torque and Rotational Dynamics"
sidebar:
  order: 5
---

---

:::variables
- $$\theta$$ = angular position (Units: radians)
- $$\omega$$ = angular velocity (Units: $$\text{rad/s}$$)
- $$\alpha$$ = angular acceleration (Units: $$\text{rad/s}^2$$)
- $$\tau$$ = torque (Units: $$\text{N}\cdot\text{m}$$)
- $$I$$ = rotational inertia / moment of inertia (Units: $$\text{kg}\cdot\text{m}^2$$)
- $$r$$ = distance from rotation axis
- $$s$$ = arc length
:::

---

## Angular Kinematics

For a rigid body rotating about a fixed axis, angular variables mirror linear variables, except it applies to rotations instead of linear translation:

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

Radians are dimensionless in SI, but keeping them visible helps avoid mixing angular and linear quantities.

---

## Connecting Linear and Angular Motion

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

directed toward the axis. Tangential acceleration changes speed; radial acceleration changes direction.

---

## Torque

Torque is the rotational effect of a force:

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
\fill (0,0) circle (2pt) node[below] {pivot};
\draw[very thick] (0,0) -- (3,1.2) node[midway, below] {$\vec r$};
\draw[->, very thick, red] (3,1.2) -- (3,3.2) node[above] {$\vec F$};
\draw[dashed] (0,0) -- (3,0); \draw[dashed] (3,1.2) -- (0.45,0.18);
\draw[<->, blue] (0.55,0.22) -- (0.55,1.95) node[midway,left] {$r_\perp$};
\draw (1.0,0.4) arc[start angle=22,end angle=90,radius=0.7] node[midway,above] {$\theta$};
\end{tikzpicture}
```


There are two equivalent ways to read $$\tau = rF\sin\theta$$, and switching between them is often the key to a clean solution:

- **Lever arm (perpendicular distance).** Group the trig with $$r$$: $$\tau = F(r\sin\theta) = F\,r_\perp$$. Extend the force's line of action into an infinite line and drop a perpendicular from the axis onto it. That perpendicular distance is the lever arm $$r_\perp$$. Sliding the force back and forth along its own line of action never changes the torque, because the lever arm is unchanged.
- **Perpendicular component of force.** Group the trig with $$F$$: $$\tau = r(F\sin\theta) = r\,F_\perp$$. Here $$F_\perp = F\sin\theta$$ is the component of the force perpendicular to $$\vec r$$. Only the part of the force that is "across" the radius twists the body; the part along $$\vec r$$ (toward or away from the axis) does nothing.

:::warning
"Force times distance" is a trap: it is only the full torque when the force is perpendicular to $$\vec r$$. When the force is along $$\vec r$$ (radial), $$\sin\theta = 0$$ and the torque vanishes no matter how large the force or the distance.
:::

The direction of torque follows the right-hand rule applied to $$\vec\tau = \vec r\times\vec F$$: point the fingers along $$\vec r$$ (from axis to application point), curl them toward $$\vec F$$, and the thumb gives $$\vec\tau$$. In planar problems the torque vector points either out of or into the page, so we replace the vector bookkeeping with signs: **counterclockwise torques positive, clockwise torques negative**. Pick that sign convention once at the start of a problem and apply it to every torque.

<div class="theorem-box">

**Example.** A wrench grips a bolt at the origin. You push on the handle a distance $$r = 0.30\ \text{m}$$ from the bolt with a force $$F = 80\ \text{N}$$ directed $$30^\circ$$ above the handle. Find the torque on the bolt.

Using the perpendicular component of the force,

$$
\tau = rF\sin\theta = (0.30\ \text{m})(80\ \text{N})\sin 30^\circ = (0.30)(80)(0.50) = 12\ \text{N}\cdot\text{m}.
$$

Reading the same number as a lever arm: the perpendicular distance from the bolt to the line of the force is $$r_\perp = r\sin\theta = (0.30)(0.50) = 0.15\ \text{m}$$, and

$$
\tau = F\,r_\perp = (80)(0.15) = 12\ \text{N}\cdot\text{m}.
$$

Both readings agree. If you had naively multiplied $$F$$ by the full distance $$r$$ you would have gotten $$24\ \text{N}\cdot\text{m}$$, twice too large, because that ignores the $$\sin\theta$$. To maximize torque you would push perpendicular to the handle ($$\theta = 90^\circ$$), giving the full $$24\ \text{N}\cdot\text{m}$$.

</div>

---

## Rotational Inertia

Rotational inertia measures resistance to angular acceleration:

$$
I = \sum_i m_i r_i^2
$$

for point masses and

$$
I = \int r^2\,dm
$$

for continuous bodies. Mass farther from the axis contributes more strongly because of the $$r^2$$ factor.

Common results:

- Point mass: $$I = mr^2$$
- Thin hoop about center: $$I = MR^2$$
- Solid disk or cylinder about center: $$I = \frac{1}{2}MR^2$$
- Solid sphere about diameter: $$I = \frac{2}{5}MR^2$$
- Thin rod about center: $$I = \frac{1}{12}ML^2$$
- Thin rod about end: $$I = \frac{1}{3}ML^2$$


| Object and axis | Moment of inertia |
| --- | ---: |
| Point mass | $$mr^2$$ |
| Thin hoop, central axis | $$MR^2$$ |
| Solid disk/cylinder, central axis | $$\frac12MR^2$$ |
| Solid sphere, diameter | $$\frac25MR^2$$ |
| Thin rod, center | $$\frac1{12}ML^2$$ |
| Thin rod, end | $$\frac13ML^2$$ |


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

---

### Parallel-Axis Theorem

If $$I_{\text{cm}}$$ is the rotational inertia about an axis through the center of mass, then the rotational inertia about a parallel axis a distance $$d$$ away is

$$
I = I_{\text{cm}} + Md^2.
$$

This theorem is useful for rods about one end, rolling bodies about contact points, and composite rigid bodies.

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

---

### Perpendicular-Axis Theorem

The parallel-axis theorem shifts an axis sideways; the **perpendicular-axis theorem** relates axes that are mutually perpendicular. It applies only to a **planar object** (a flat lamina) lying in a plane. If the lamina lies in the $$xy$$-plane, then the rotational inertia about the $$z$$-axis (perpendicular to the lamina, through a chosen point) equals the sum of the inertias about the two in-plane axes through that same point:

$$
I_z = I_x + I_y.
$$

This is often the fastest way to get the inertia of a flat object about an in-plane axis once you know it about the perpendicular axis.

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

The translational motion of the center of mass still obeys

$$
\sum \vec{F}_{\text{ext}} = M\vec{a}_{\text{cm}}.
$$

Rolling and pulley problems often require both equations at once.

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

Strikingly, the tip of the rod accelerates downward faster than $$g$$. A coin placed near the free end will be left behind (the rod falls out from under it) because the rod's surface there is accelerating at $$1.5g$$ while a free coin can only manage $$g$$. Note this is the *initial* angular acceleration; as the rod swings down, the lever arm of gravity shrinks like $$\cos\theta$$, so $$\alpha$$ decreases throughout the fall.

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

If the object is not accelerating linearly or angularly, both conditions must hold. A subtle but powerful fact: in **equilibrium**, the net torque is zero about *every* axis, not just the real one. So you are free to compute torques about whatever point makes the algebra easiest.

The standard trick is to **put the pivot at the location of an unknown force**. Since a force exerts zero torque about a point on its own line of action, that unknown drops out of the torque equation entirely, leaving fewer unknowns. Hinge forces and contact forces of unknown direction are the usual targets: pivot at the hinge and you never need to know the hinge force to find everything else. Once the other unknowns are found, the force equations $$\sum F_x = 0$$ and $$\sum F_y = 0$$ recover the hinge force.

:::strategy{title="Static equilibrium problems"}
1. Draw a free-body diagram of the extended object, placing each force at its actual point of application (do not collapse the body to a point — location matters for torque).
2. Pick a sign convention (counterclockwise positive) and a smart pivot, usually at an unknown force.
3. Write $$\sum\tau = 0$$ about that pivot using lever arms.
4. Write $$\sum F_x = 0$$ and $$\sum F_y = 0$$ to recover any remaining forces.
:::

<div class="theorem-box">

**Example.** A uniform horizontal beam of mass $$m = 20\ \text{kg}$$ and length $$L$$ is hinged to a wall at its left end. A cable runs from the far (right) end of the beam up to the wall, making an angle $$\theta = 37^\circ$$ with the beam. A sign of weight $$W = 300\ \text{N}$$ hangs from the right end. Find the tension in the cable and the force the hinge exerts on the beam. Take $$g = 9.8\ \text{m/s}^2$$.

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

$$
H_x = T\cos\theta = (661)(0.799) = 528\ \text{N}\ \text{(pulling the beam toward the wall, so the hinge pushes out).}
$$

Vertically,

$$
H_y + T\sin\theta - mg - W = 0\ \Rightarrow\ H_y = mg + W - T\sin\theta = 196 + 300 - 398 = 98\ \text{N (up).}
$$

The hinge force magnitude is $$\sqrt{H_x^2 + H_y^2} = \sqrt{528^2 + 98^2}\approx 537\ \text{N}$$. Choosing the hinge as pivot let us solve for $$T$$ in a single equation before ever touching the hinge force.

</div>

<div class="theorem-box">

**Example.** A uniform diving board of mass $$m = 30\ \text{kg}$$ and length $$L = 4.0\ \text{m}$$ rests on two supports: support $$A$$ at the left end and support $$B$$ a distance $$d = 1.5\ \text{m}$$ to the right of $$A$$. A diver of weight $$W = 600\ \text{N}$$ stands at the far right end. Find the forces the two supports exert on the board. Take $$g = 9.8\ \text{m/s}^2$$, so the board's weight is $$mg = 294\ \text{N}$$.

The board is in equilibrium under four forces: support force $$N_A$$ up at $$A$$, support force $$N_B$$ up at $$B$$, the board's weight $$294\ \text{N}$$ down at the center ($$2.0\ \text{m}$$ from $$A$$), and the diver's weight $$600\ \text{N}$$ down at the right end ($$4.0\ \text{m}$$ from $$A$$).

**Pivot at $$B$$** to eliminate $$N_B$$. Measure distances from $$B$$: support $$A$$ is $$1.5\ \text{m}$$ to the left, the center of the board is $$2.0 - 1.5 = 0.5\ \text{m}$$ to the right of $$B$$, and the diver is $$4.0 - 1.5 = 2.5\ \text{m}$$ to the right of $$B$$. Taking counterclockwise positive, $$N_A$$ (up, left of $$B$$) torques clockwise; both weights are right of $$B$$ and torque counterclockwise. Then $$\sum\tau_B = 0$$:

$$
-N_A(1.5) + (294)(0.5) + (600)(2.5) = 0,
$$

$$
N_A(1.5) = 147 + 1500 = 1647\quad\Rightarrow\quad N_A = 1098\ \text{N}.
$$

The minus sign in the algebra means $$N_A$$ actually points **down**: support $$A$$ must pull the board down (or, physically, the board would lift off $$A$$ unless it is bolted there). This is the characteristic "see-saw" result when the load hangs past the far support.

Now use vertical force balance to get $$N_B$$. Be careful with the sign: with $$N_A$$ acting downward ($$-1098\ \text{N}$$ in the up-positive convention),

$$
N_A + N_B - mg - W = 0\ \Rightarrow\ N_B = mg + W - N_A = 294 + 600 - (-1098) = 1992\ \text{N}.
$$

So support $$B$$ (the fulcrum near the diver) carries a large upward force of about $$1990\ \text{N}$$, while support $$A$$ (the anchored end) is held down with about $$1100\ \text{N}$$. As a check, the net upward force is $$1992 - 1098 = 894\ \text{N}$$, which equals the total downward weight $$294 + 600 = 894\ \text{N}$$.

</div>

---

## Rolling Without Slipping

Rolling without slipping imposes the constraint

$$
v_{\text{cm}} = R\omega
$$

and, if the constraint holds through the acceleration,

$$
a_{\text{cm}} = R\alpha.
$$

The point of contact is instantaneously at rest relative to the ground, so static friction can provide torque without doing work on an ideal rolling object. Static friction may point uphill or downhill depending on what torque is needed.

---

## Rolling Down an Incline

A round object released on an incline rolls without slipping if friction is sufficient. We can find its center-of-mass acceleration in general, then specialize to common shapes.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (-3,-1) -- (3,-1) -- (3,1.2) -- cycle;
\begin{scope}[shift={(0,0.15)}, rotate=19]
\draw[fill=gray!20] (0,0) circle (0.55); \draw[->, blue, thick] (0,0.55) -- (0,1.5) node[above] {$N$}; \draw[->, orange, thick] (0,-0.55) -- (-1,-0.55) node[left] {$f$};
\end{scope}
\draw[->, red, thick] (0,0.15) -- (0,-1.5) node[below] {$mg$};
\draw[->, thick] (1.1,0.25) arc[start angle=20,end angle=-250,radius=0.45] node[right] {$\alpha$};
\end{tikzpicture}
```


<div class="theorem-box">

**Proof (acceleration of a rolling object down an incline).** Let a round body of mass $$M$$, radius $$R$$, and central moment of inertia $$I_{\text{cm}}$$ roll without slipping down an incline of angle $$\theta$$. Three forces act: gravity, the normal force, and static friction $$f$$ acting up the incline (we will let the math confirm the direction).

Translation along the incline (take down-the-incline positive), with the center of mass accelerating at $$a$$:

$$
Mg\sin\theta - f = Ma.
$$

Rotation about the center of mass: the only force with a torque about the center is friction (gravity acts at the center, normal force points through the center). Its lever arm is $$R$$, so

$$
fR = I_{\text{cm}}\alpha.
$$

Rolling without slipping gives the constraint $$a = R\alpha$$, i.e. $$\alpha = a/R$$. Substitute into the torque equation:

$$
fR = I_{\text{cm}}\frac{a}{R}\quad\Rightarrow\quad f = \frac{I_{\text{cm}}\,a}{R^2}.
$$

Put this friction back into the translation equation:

$$
Mg\sin\theta - \frac{I_{\text{cm}}\,a}{R^2} = Ma\quad\Rightarrow\quad Mg\sin\theta = a\left(M + \frac{I_{\text{cm}}}{R^2}\right).
$$

Solve for $$a$$:

$$
a=\frac{g\sin\theta}{1+\dfrac{I_{\text{cm}}}{MR^2}}.
$$

It is convenient to write $$I_{\text{cm}} = \beta MR^2$$, where the dimensionless $$\beta$$ depends only on the shape ($$\beta = \tfrac12$$ for a disk, $$\tfrac25$$ for a sphere, $$1$$ for a hoop). Then

$$
a=\frac{g\sin\theta}{1+\beta},\qquad f=\frac{\beta}{1+\beta}\,Mg\sin\theta.
$$

The friction comes out positive, confirming it points up the incline. Notice $$a$$ is independent of $$M$$ and $$R$$ and is always less than the frictionless slide value $$g\sin\theta$$, because some of gravity's pull goes into spinning the body up rather than speeding its center.

</div>

Specializing $$a = g\sin\theta/(1+\beta)$$ to common shapes:

- **Solid sphere** ($$\beta = \tfrac25$$): $$a = \dfrac{g\sin\theta}{1+2/5} = \dfrac{5}{7}g\sin\theta$$.
- **Solid disk or cylinder** ($$\beta = \tfrac12$$): $$a = \dfrac{g\sin\theta}{1+1/2} = \dfrac{2}{3}g\sin\theta$$.
- **Thin hoop** ($$\beta = 1$$): $$a = \dfrac{g\sin\theta}{1+1} = \dfrac{1}{2}g\sin\theta$$.

Smaller $$\beta$$ means less mass far from the axis, less rotational inertia to spin up, and therefore larger $$a$$. In a race down the same incline the order is sphere (fastest), then disk, then hoop (slowest) — independent of their masses and radii. The hoop loses because all of its mass sits at radius $$R$$.

<div class="theorem-box">

**Example.** A solid cylinder of mass $$M = 2.0\ \text{kg}$$ and radius $$R = 0.10\ \text{m}$$ rolls without slipping down a $$\theta = 30^\circ$$ incline. Find its center-of-mass acceleration and the static friction force, and state the minimum coefficient of friction needed.

A solid cylinder has $$\beta = I_{\text{cm}}/MR^2 = \tfrac12$$, so

$$
a=\frac{g\sin\theta}{1+\tfrac12}=\frac{2}{3}g\sin\theta=\frac{2}{3}(9.8)\sin 30^\circ=\frac{2}{3}(9.8)(0.5)=3.27\ \text{m/s}^2.
$$

The friction force, from $$f = \dfrac{\beta}{1+\beta}Mg\sin\theta$$ with $$\beta=\tfrac12$$ (so $$\dfrac{\beta}{1+\beta}=\tfrac13$$):

$$
f=\frac{1}{3}Mg\sin\theta=\frac{1}{3}(2.0)(9.8)(0.5)=3.27\ \text{N}.
$$

For the cylinder to roll without slipping, static friction must be able to supply this, so $$f \le \mu_s F_N = \mu_s Mg\cos\theta$$. The minimum coefficient is

$$
\mu_{s,\min}=\frac{f}{Mg\cos\theta}=\frac{\tfrac13 Mg\sin\theta}{Mg\cos\theta}=\frac{1}{3}\tan\theta=\frac{1}{3}\tan 30^\circ=0.19.
$$

If the actual $$\mu_s$$ is smaller than this, the cylinder slips: it then accelerates faster than $$\tfrac23 g\sin\theta$$ translationally but spins up more slowly, and you must use kinetic friction $$f_k = \mu_k Mg\cos\theta$$ with $$a \ne R\alpha$$. For the pure energy-method companion to this problem (using $$K = \tfrac12 Mv_{\text{cm}}^2 + \tfrac12 I\omega^2$$ to find the speed at the bottom), see [Unit 6](/notes/ap/ap-physics-c-mechanics/rotationalmomentum/); rotational kinetic energy and angular-momentum conservation are developed there.

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
| Rolling constraint | $$v_{\text{cm}}=R\omega,\quad a_{\text{cm}}=R\alpha$$ |
| Rolling down an incline | $$a=\dfrac{g\sin\theta}{1+I_{\text{cm}}/MR^2}$$ |
:::

## Practice

### FRQ

::::frq{id=ap-physics-c-mechanics-torque-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
