---
title: "Unit 2: Force and Translational Dynamics"
description: "AP Physics C Mechanics notes on forces, Newton's laws, free-body diagrams, friction, drag, circular motion, and dynamics."
sidebar:
  order: 2
---

:::variables
- $$\vec{F}$$ = force (Units: newtons, $$\text{N} = \text{kg}\cdot\text{m}/\text{s}^2$$)
- $$m$$ = mass (Units: kilograms, $$\text{kg}$$)
- $$\vec{a}$$ = acceleration (Units: $$\text{m}/\text{s}^2$$)
- $$g$$ = gravitational field strength near Earth = $$9.8\ \text{m}/\text{s}^2$$
- $$\vec{W}$$ or $$\vec{F}_g$$ = weight / gravitational force
- $$F_N$$ or $$N$$ = normal force
- $$T$$ = tension
- $$f_s$$ = static friction
- $$f_k$$ = kinetic friction
- $$\mu_s$$ = coefficient of static friction
- $$\mu_k$$ = coefficient of kinetic friction
- $$k$$ = spring constant (Units: $$\text{N/m}$$)
- $$r$$ = radius of circular path
- $$v$$ = speed
- $$\omega$$ = angular speed (Units: $$\text{rad/s}$$)
:::

---

## Newton's Three Laws of Motion

In 1687, Newton formulated the three laws of motion. They work extremely well for ordinary macroscopic objects moving much slower than the speed of light. At quantum, relativistic, or very strong-gravity scales, Newtonian mechanics must be replaced or extended by quantum mechanics, but for AP purposes, Newtonian mechanics suffices.

<div class="theorem-box">

**Theorem (Newton's Three Laws).**

1. **First Law**: An object has constant velocity unless acted on by a nonzero net external force. If $$\sum \vec{F} = 0$$, then $$\vec{a} = 0$$.
2. **Second Law**: The net external force equals mass times acceleration, $$\sum \vec{F} = m\vec{a}$$.
3. **Third Law**: If object $$A$$ exerts a force on object $$B$$, then object $$B$$ exerts an equal-magnitude, opposite-direction force on object $$A$$, $$\vec{F}_{A\text{ on }B} = -\vec{F}_{B\text{ on }A}$$.

</div>

Third-law forces act on different objects, so they never cancel for one object. They can cancel only when you treat both interacting objects as one system and the force pair becomes internal.

---

## Free-body diagrams

A **free-body diagram** is a force diagram for one object or one chosen system. It should show only external forces acting on that object/system, not forces the object applies to something else. Forces are treated as vectors and can be composed accordingly.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[fill=gray!15] (-0.5,-0.5) rectangle (0.5,0.5); \node at (0,0) {$m$};
\draw[->, very thick, blue] (0,0.5) -- (0,2) node[above] {$F_N$};
\draw[->, very thick, red] (0,-0.5) -- (0,-2) node[below] {$F_W$};
\draw[->, very thick, green!50!black] (0.5,0) -- (2,0) node[right] {$F_1$};
\draw[->, very thick, orange!90!black] (-0.5,0) -- (-1.8,0) node[left] {$F_f$};
\end{tikzpicture}
```

Good procedure:

1. Choose the object or system.
2. Draw a dot or simple sketch.
3. Add one arrow for each external force (make sure to draw where the force originates from).
4. Choose axes, usually one axis parallel to the expected acceleration or along a surface.
5. Resolve angled forces into components using vector decomposition.
6. Write Newton's second law separately for each direction.

For a particle in two dimensions, you should split up force into components using vector decomposition like for velocity:

$$
\sum F_x = ma_x, \qquad \sum F_y = ma_y.
$$

If acceleration is zero in one direction, the net force in that direction is zero even if forces are present (basically they cancel out each other).

---

## Common types of forces

In AP Physics C, most force problems are built from a small set of common forces.

### Weight

**Weight** is the gravitational force on an object. Near Earth's surface,

$$
\vec{F}_g = m\vec{g},
$$

so its magnitude is

$$
F_g = mg.
$$

Weight points downward, toward Earth's center. Note that mass is not weight: mass is an object's inertia, while weight is a force caused by gravity. Weight is always drawn from the center of the object, and sometimes drawing out the whole object (as opposed to just a dot) is very important! For example, when the force of gravity passes through the corner of the object, it will start to topple!

### Normal force

The **normal force** is a contact force **perpendicular** to a surface and opposes gravity. It adjusts to prevent objects from passing through each other, but it is not automatically equal to $$mg$$. For example, on an incline or in an accelerating elevator, the normal force differs from the object's weight. Normally, you need to solve out force equations to get the normal force. The normal force acts along the entire surface of contact but is usually drawn out in the center of the contact plane.

A concrete case where $$F_N \ne mg$$: suppose you push down on a box resting on the floor with an extra downward force $$P$$ at some angle, or simply press straight down. The vertical equation with no vertical acceleration is $$F_N - mg - P = 0$$, so $$F_N = mg + P > mg$$. If instead you pull up on the box with a force $$P$$ (not enough to lift it), then $$F_N = mg - P < mg$$. The normal force only equals $$mg$$ in the special case of a horizontal surface with no other vertical forces and no vertical acceleration.

:::warning
Always get $$F_N$$ from the perpendicular equation, never by assumption, because friction limits like $$\mu_s F_N$$ depend on it.
:::

### Tension

**Tension** is a pulling force transmitted by a rope, string, or cable. In an ideal world, strings are massless and inextensible, and pulleys are massless and frictionless. Under those assumptions, the tension is the same throughout a continuous string. Tension will always point *away* from an object along the direction of the string. If a string or pulley has mass, or if the pulley has rotational inertia, tension may differ on different sides. Those cases usually belong more naturally with rotational dynamics.

### Friction

**Friction** is a contact force parallel to a surface that opposes relative motion or impending relative motion and will *always* point *opposite* to the direction of motion (e.g. when you are moving down a ramp friction points upwards). There are two types: static and kinetic friction.

Static friction is friction that prevents an object from moving, and adjusts up to a maximum value:

$$
0 \le f_s \le f_{s,\text{max}} = \mu_s F_N.
$$

Kinetic friction is friction an object experiences while moving and has approximately constant magnitude:

$$
f_k = \mu_k F_N.
$$

$$\mu_s$$ and $$\mu_k$$ are the coefficient of static friction and kinetic friction, respectively. Usually these values will be given, and determining them (without any other information) requires experimentation. An important note is that static friction is not always equal to $$\mu_sF_N$$; that expression gives the maximum possible static friction before slipping begins. Usually $$\mu_s > \mu_k$$.

### Spring force

For an ideal spring, **Hooke's law** gives the force required for displacement:

$$
\vec{F}_s = -k\vec{x},
$$

where $$\vec{x}$$ is displacement from equilibrium. The negative sign means the spring force points opposite the displacement. This force is more relevant in [Unit 7: Oscillations](/notes/ap/ap-physics-c-mechanics/oscillations/). The value $$k$$ is called the spring constant.

### Drag and resistive forces

Air resistance and fluid drag is friction experienced by an object going through a medium (usually liquid/air). They are often ignored in AP mechanics unless specified. When included, drag points opposite velocity (air resistance is drag in air). Two most common models are

$$
\vec{F}_d = -b\vec{v}
$$

for low-speed linear drag, and

$$
\vec{F}_d = c\vec{v}^2
$$

for high-speed quadratic drag. The model that you should use for a problem will usually be stated.

Essentially, drag acts like a friction force for falling objects. At some point, the amount of drag pulling up will equal the force of gravity pulling down, allowing an object to go at a constant velocity (terminal velocity). Usually, drag force can never exceed gravity (that's why skydivers don't just go back up after reaching terminal velocity!).

<div class="theorem-box">

**Example.** A $$5.0\ \text{kg}$$ box rests on a horizontal table. A spring pulls it to the right with force $$12\ \text{N}$$, a rope pulls it to the left with tension $$7.0\ \text{N}$$, and kinetic friction has coefficient $$\mu_k=0.20$$. Find the box's acceleration if it is sliding right.

The weight is $$mg=(5.0)(9.8)=49\ \text{N}$$ downward. Since there is no vertical acceleration, the normal force is $$F_N=49\ \text{N}$$ upward. The box slides right, so kinetic friction points left:

$$
f_k=\mu_kF_N=(0.20)(49)=9.8\ \text{N}.
$$

The horizontal net force is

$$
\sum F_x = 12-7.0-9.8=-4.8\ \text{N}.
$$

Thus

$$
a_x=\frac{\sum F_x}{m}=\frac{-4.8}{5.0}=-0.96\ \text{m/s}^2.
$$

The negative sign means the acceleration is leftward, so the object is slowing down while moving right. This one setup uses the main force types: weight, normal force, tension, friction, and spring force.

</div>

<div class="theorem-box">

**Example.** A $$70\ \text{kg}$$ skydiver falls downward through air with linear drag $$F_d=bv$$, where $$b=35\ \text{kg/s}$$. Find the terminal speed.

At terminal speed, acceleration is zero, so the upward drag equals the downward weight:

$$
bv_t=mg.
$$

Therefore

$$
v_t=\frac{mg}{b}=\frac{(70)(9.8)}{35}=19.6\ \text{m/s}.
$$

This is a force-balance problem, not a kinematics problem: terminal speed comes from $$\sum F=0$$.

</div>

---

## Solving Newton's second law problems

:::strategy
1. Draw a free-body diagram for each object.
2. Pick axes that simplify the motion.
3. Write $$\sum F = ma$$ along each axis.
4. Connect objects with constraints, such as equal accelerations for an ideal string.
5. Solve algebraically before substituting numbers.
6. Check the sign and units of the result.
:::

For multiple-object systems, you can choose either:

- Treat each object separately to find internal forces like tension.
- Treat several objects as one system to eliminate internal forces.

If the question asks only for acceleration of a connected system, the system approach is often faster. If the question asks for tension or contact force, individual free-body diagrams are usually required.

<div class="theorem-box">

**Example.** A block of mass $$m_1 = 3.0\ \text{kg}$$ sits on a frictionless horizontal table. A light inextensible string runs from the block, over a frictionless pulley at the edge of the table, to a hanging block of mass $$m_2 = 2.0\ \text{kg}$$. Find the acceleration of the system and the tension in the string.

Both blocks share the same acceleration magnitude $$a$$ because the string is inextensible: as $$m_2$$ falls, $$m_1$$ slides forward by the same amount.

First, we can treat the blocks as one system. The only external force along the direction of motion is the weight of the hanging mass, $$m_2 g$$, and the moving mass is $$m_1 + m_2$$:

$$
m_2 g = (m_1 + m_2)a \quad\Rightarrow\quad a = \frac{m_2 g}{m_1 + m_2} = \frac{(2.0)(9.8)}{5.0} = 3.9\ \text{m/s}^2.
$$

Now find the tension, which requires an individual free-body diagram. For the block on the table (horizontal direction, frictionless):

$$
T = m_1 a = (3.0)(3.9) = 11.8\ \text{N}.
$$

As a check, write Newton's second law for the hanging mass with down positive:

$$
m_2 g - T = m_2 a \quad\Rightarrow\quad T = m_2(g - a) = (2.0)(9.8 - 3.9) = 11.8\ \text{N}.
$$

Both routes agree. Notice the system method gave $$a$$ instantly, but the tension only appeared once we cut the system into individual diagrams: tension is an internal force, invisible to the system equation.

</div>

---

## Inclined planes

For a block on an incline of angle $$\theta$$, it is usually best to choose axes parallel and perpendicular to the plane. The weight decomposes into

$$
F_{g,\parallel} = mg\sin\theta,
$$

down the incline, and

$$
F_{g,\perp} = mg\cos\theta,
$$

into/perpendicular to the incline.

If there is no acceleration perpendicular to the surface,

$$
F_N = mg\cos\theta.
$$

For a frictionless incline, the acceleration down the plane is

$$
a = g\sin\theta.
$$

With friction, decide whether the block is moving or about to move. If it is moving, use kinetic friction. If it is at rest, static friction takes whatever value is needed up to $$\mu_sF_N$$. It is also helpful to use geometry/similar triangles to determine certain angles for vector decompositions. ALWAYS remember your normal force!

<div class="theorem-box">

**Example.** A block of mass $$m = 4.0\ \text{kg}$$ rests on an incline at $$\theta = 30^\circ$$, released from rest. The coefficients are $$\mu_s = 0.50$$ and $$\mu_k = 0.40$$. Determine whether the block slides, and if so, find its acceleration.

First decide between static and kinetic friction by comparing the driving force to the maximum static friction. The component of gravity down the plane is

$$
F_{g,\parallel} = mg\sin\theta = (4.0)(9.8)\sin 30^\circ = 19.6\ \text{N}.
$$

The normal force comes from the perpendicular equation (no acceleration perpendicular to the surface):

$$
F_N = mg\cos\theta = (4.0)(9.8)\cos 30^\circ = 33.9\ \text{N}.
$$

The maximum static friction is

$$
f_{s,\text{max}} = \mu_s F_N = (0.50)(33.9) = 17.0\ \text{N}.
$$

Since the driving force $$19.6\ \text{N}$$ exceeds $$f_{s,\text{max}} = 17.0\ \text{N}$$, static friction cannot hold the block, so it slides. Now use kinetic friction, which acts up the plane (opposing the downhill motion):

$$
f_k = \mu_k F_N = (0.40)(33.9) = 13.6\ \text{N}.
$$

Newton's second law along the incline (down the plane positive):

$$
mg\sin\theta - f_k = ma,
$$

$$
a = g\sin\theta - \mu_k g\cos\theta.
$$

Substitute numbers:

$$
a = 9.8(\sin 30^\circ - 0.40\cos 30^\circ)
= 9.8(0.500 - 0.346)
= 1.5\ \text{m/s}^2.
$$

The block accelerates down the plane at about $$1.5\ \text{m/s}^2$$. Had $$f_{s,\text{max}}$$ exceeded $$19.6\ \text{N}$$, the block would have stayed put with static friction equal to exactly $$19.6\ \text{N}$$, not $$\mu_s F_N$$.

</div>

### Inclined plane kinematics

Sometimes, you will deal with kinematics on an inclined plane, which will break the projectile motion shortcut rules learned in Unit 1. However, once the acceleration along the plane is known, the motion becomes a one-dimensional kinematics problem along the surface. Choose the down-plane direction as positive if the object is sliding down, then use the Big Five from Unit 1 with $$\Delta x$$ measured **along the incline**, not vertically.

For a frictionless incline released from rest,

$$
a=g\sin\theta.
$$

If the object travels a distance $$s$$ along the incline, then

$$
v^2=2as=2g s\sin\theta.
$$

Since the vertical drop is $$h=s\sin\theta$$, this also gives $$v=\sqrt{2gh}$$.

<div class="theorem-box">

**Example.** A block starts from rest and slides without friction down a $$4.0\ \text{m}$$ incline tilted at $$25^\circ$$. Find the acceleration down the plane and the speed at the bottom.

The acceleration along the surface is

$$
a=g\sin25^\circ=(9.8)(0.423)=4.15\ \text{m/s}^2.
$$

Use kinematics along the incline, not vertically:

$$
v^2=v_0^2+2as=0+2(4.15)(4.0)=33.2,
$$

so

$$
v=5.8\ \text{m/s}.
$$

The vertical drop shortcut gives the same result because $$h=s\sin25^\circ$$, but the one-dimensional incline method is more flexible when friction is present.

</div>

### Friction and the slipping condition

The condition for impending slip (equivalent to when a block starts to move) is

$$
f_s = \mu_s F_N,
$$

equivalent to the maximum possible value for static friction. For a block resting on an incline, slipping begins when

$$
mg\sin\theta = \mu_s mg\cos\theta.
$$

Thus,

$$
\tan\theta_{\max} = \mu_s.
$$

This is the maximum angle before sliding for a simple block on a rough incline (rough meaning that there is friction). If external forces or other constraints are present, the slipping condition must be rederived from the free-body diagram.

The result $$\tan\theta_{\max} = \mu_s$$ is notable because the mass cancels: a heavy block and a light block of the same material begin to slide at the same angle. This is also a standard way to *measure* $$\mu_s$$ experimentally — slowly tilt a surface until the object just slips and record the angle.

<div class="theorem-box">

**Example.** A coin placed on a flat book starts to slide when the book is tilted to $$\theta_{\max} = 22^\circ$$ from horizontal. Find $$\mu_s$$.

At impending slip the down-plane gravity component equals the maximum static friction:

$$
mg\sin\theta_{\max} = \mu_s mg\cos\theta_{\max} \quad\Rightarrow\quad \mu_s = \tan\theta_{\max} = \tan 22^\circ \approx 0.40.
$$

The mass and $$g$$ both cancel, which is why this simple tilt test works regardless of how heavy the coin is.

</div>

---

## Connected objects and pulleys

For ideal ropes and pulleys, connected objects share related accelerations. A common Atwood machine is a very simple pulley that contains two hanging masses connected by a massless string over a frictionless pulley.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.65]
\draw[thick] (0,2) circle (0.55); \draw[thick] (-0.55,2) -- (-0.55,0.2); \draw[thick] (0.55,2) -- (0.55,-0.5);
\draw[fill=gray!20] (-1.0,-0.6) rectangle (-0.1,0.2); \node at (-0.55,-0.2) {$m_1$};
\draw[fill=gray!20] (0.1,-1.3) rectangle (1.0,-0.5); \node at (0.55,-0.9) {$m_2$};
\draw[->, blue, thick] (-0.55,0.2) -- (-0.55,1.1) node[left] {$T$}; \draw[->, red, thick] (-0.55,-0.6) -- (-0.55,-1.5) node[left] {$m_1g$};
\draw[->, blue, thick] (0.55,-0.5) -- (0.55,0.4) node[right] {$T$}; \draw[->, red, thick] (0.55,-1.3) -- (0.55,-2.2) node[right] {$m_2g$};
\end{tikzpicture}
```

If $$m_2 > m_1$$, the acceleration magnitude is

$$
a = \frac{(m_2 - m_1)g}{m_1 + m_2},
$$

and the tension is

$$
T = \frac{2m_1m_2}{m_1 + m_2}g.
$$

<div class="theorem-box">

**Proof (Atwood tension and acceleration).** Two masses $$m_1$$ and $$m_2$$ (with $$m_2 > m_1$$) hang from a massless, inextensible string over a massless, frictionless pulley. Find the acceleration $$a$$ and tension $$T$$.

Since the string is inextensible, whatever distance $$m_2$$ falls, $$m_1$$ rises by the same amount, so both masses have the same acceleration magnitude $$a$$. Take the direction of motion as positive for each mass: $$m_2$$ accelerates downward and $$m_1$$ accelerates upward, with the same $$a$$. The tension $$T$$ is the same on both sides because the string and pulley are ideal.

Free-body diagram for $$m_1$$ (taking up as positive):

$$
T - m_1 g = m_1 a.
$$

Free-body diagram for $$m_2$$ (taking down as positive):

$$
m_2 g - T = m_2 a.
$$

Add the two equations to eliminate $$T$$:

$$
m_2 g - m_1 g = (m_1 + m_2)a,
$$

so

$$
a = \frac{(m_2 - m_1)g}{m_1 + m_2}.
$$

To find $$T$$, substitute $$a$$ back into the first equation:

$$
T = m_1(g + a) = m_1 g\left(1 + \frac{m_2 - m_1}{m_1 + m_2}\right) = m_1 g\cdot\frac{2m_2}{m_1 + m_2},
$$

so

$$
T = \frac{2m_1 m_2}{m_1 + m_2}g.
$$

As a check, if $$m_1 = m_2$$ the acceleration is zero and $$T = m_1 g$$, as expected for balanced masses. If $$m_2 \gg m_1$$, then $$a \to g$$ (near free fall) and $$T \to 2m_1 g$$, never $$m_2 g$$.

</div>

For pulley systems with movable pulleys, the acceleration constraints may involve factors of 2. Write the string-length constraint (the length of the string is always constant) first, then differentiate with respect to time to relate velocities and accelerations.

---

## Apparent weight and elevators

A scale does not directly measure your weight, it insteads measures the **apparent weight**, which is the normal force applied to the scale. In an elevator (or any condition with nonzero acceleration),

$$
F_N - mg = ma
$$

if upward is positive.

So,

$$
F_N = m(g + a).
$$

If the elevator accelerates upward, $$F_N > mg$$. If it accelerates downward, $$F_N < mg$$. In free fall, $$a = -g$$ and $$F_N = 0$$, so the object is weightless in the apparent-weight sense even though gravity still acts.

<div class="theorem-box">

**Example.** A person of mass $$m = 70\ \text{kg}$$ stands on a bathroom scale in an elevator. Find the reading when (a) the elevator accelerates upward at $$2.0\ \text{m/s}^2$$, and (b) the elevator accelerates downward at $$2.0\ \text{m/s}^2$$.

Take up as positive. The scale reads $$F_N$$, where $$F_N - mg = ma$$, so $$F_N = m(g + a)$$.

(a) Upward acceleration, $$a = +2.0\ \text{m/s}^2$$:

$$
F_N = 70(9.8 + 2.0) = 70(11.8) = 826\ \text{N}.
$$

The person feels heavier than their true weight $$mg = 686\ \text{N}$$.

(b) Downward acceleration, $$a = -2.0\ \text{m/s}^2$$:

$$
F_N = 70(9.8 - 2.0) = 70(7.8) = 546\ \text{N}.
$$

The person feels lighter. Note the sign of $$a$$ is what matters, not the direction of motion: an elevator moving up but slowing down has $$a < 0$$ and gives the lighter reading.

</div>

---

## Circular motion

Often, we often describe thing as going in circles (or approximately so). There are two types of circular motino: uniform and non-uniform circular motion.

### Uniform circular motion

In **uniform circular motion** (an object moving at constant speed in a circle), speed is constant but velocity changes direction, so the object accelerates toward the center of the circle. The centripetal (center-facing) acceleration is

$$
a_c = \frac{v^2}{r} = \omega^2 r.
$$

Newton's second law in the radial direction is

$$
\sum F_r = m\frac{v^2}{r}.
$$

There is no special "centripetal force." The phrase describes the net inward force required for circular motion. All forces acting on an object going in uniform circular motion must add up to the centripetal force (as long as the force does not act perpendicular to the vector connecting the object and the center of the circle).

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[blue, thick] (0,0) circle (1.6); \fill (0,0) circle (1.5pt) node[below] {center};
\fill (1.35,0.85) circle (2pt) node[above right] {$m$};
\draw[->, very thick, red] (1.35,0.85) -- (0.25,0.3) node[above left] {$F_c$};
\draw[->, very thick, blue] (1.35,0.85) -- (0.75,1.8) node[above] {$v$};
\end{tikzpicture}
```

Examples:

- A ball on a string: tension can provide the inward force.
- A car on a flat curve: static friction provides the inward force.
- A satellite in orbit: gravity provides the inward force.
- A roller coaster at the bottom of a loop: normal force and gravity combine to give the net inward force.

<div class="theorem-box">

**Example.** A car takes a flat (unbanked) curve of radius $$r = 50\ \text{m}$$. The coefficient of static friction between the tires and road is $$\mu_s = 0.60$$. What is the maximum speed at which the car can round the curve without skidding?

On a flat road the only horizontal force available to turn the car is static friction, which must supply the centripetal force. At the maximum speed friction is at its limit:

$$
\frac{mv_{\max}^2}{r} = \mu_s F_N = \mu_s mg.
$$

The mass cancels, leaving

$$
v_{\max} = \sqrt{\mu_s g r} = \sqrt{(0.60)(9.8)(50)} = \sqrt{294} \approx 17\ \text{m/s}.
$$

That is about $$62\ \text{km/h}$$. Because $$m$$ cancels, a fully loaded truck and a light car can take the same curve at the same maximum speed (assuming equal $$\mu_s$$). Going faster than $$v_{\max}$$ means the required centripetal force exceeds what friction can supply, and the car slides outward.

</div>

<div class="theorem-box">

**Example.** A ball of mass $$m$$ on a string of length $$L$$ swings in a horizontal circle, with the string tracing a cone at a constant angle $$\theta$$ from the vertical. Find the period $$\mathcal{T}$$ of the motion.

The ball moves in a horizontal circle of radius $$r = L\sin\theta$$, so its acceleration is purely horizontal and points toward the center. Two forces act: tension $$T$$ along the string and weight $$mg$$ down. There is no vertical acceleration, so the vertical components balance:

$$
T\cos\theta = mg.
$$

The horizontal component of tension provides the centripetal force:

$$
T\sin\theta = \frac{mv^2}{r} = m\omega^2 r.
$$

Divide the second equation by the first to eliminate $$T$$ and $$m$$:

$$
\tan\theta = \frac{\omega^2 r}{g} = \frac{\omega^2 L\sin\theta}{g}.
$$

Cancel $$\sin\theta$$ using $$\tan\theta = \sin\theta/\cos\theta$$:

$$
\frac{1}{\cos\theta} = \frac{\omega^2 L}{g} \quad\Rightarrow\quad \omega = \sqrt{\frac{g}{L\cos\theta}}.
$$

Since $$\omega = 2\pi/\mathcal{T}$$,

$$
\mathcal{T} = 2\pi\sqrt{\frac{L\cos\theta}{g}}.
$$

As $$\theta \to 0$$ the period approaches $$2\pi\sqrt{L/g}$$, the small-angle pendulum result. As $$\theta \to 90^\circ$$ the period goes to zero — you would need infinite tension to hold the string horizontal, which is why the string can never be perfectly horizontal.

</div>

### Nonuniform circular motion

For **nonuniform circular motion**, acceleration has both radial and tangential components:

$$
a_r = \frac{v^2}{r},
$$

$$
a_t = \frac{dv}{dt}.
$$

The radial component changes the direction of velocity. The tangential component changes the speed. Write Newton's second law separately in radial and tangential directions:

$$
\sum F_r = m\frac{v^2}{r}, \qquad \sum F_t = m\frac{dv}{dt}.
$$

This is common in vertical circle problems, where gravity has a tangential component except at the top and bottom. Always remember your normal force as it won't always cancel with gravity!


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[blue, thick] (0,0) circle (1.7);
\fill (0,1.7) circle (2pt);
\fill (0,-1.7) circle (2pt);
\draw[->, red, thick] (0,1.7) -- (0,0.7) node[midway,right] {$mg$}; \draw[->, blue, thick] (0,1.7) -- (0,0.2) node[midway,left] {$T$};
\draw[->, red, thick] (0,-1.7) -- (0,-2.7) node[below] {$mg$}; \draw[->, blue, thick] (0,-1.7) -- (0,-0.5) node[midway,right] {$T$};
\end{tikzpicture}
```


<div class="theorem-box">

**Proof (minimum speed at the top of a vertical loop).** An object travels on the inside of a vertical circular track of radius $$r$$. Find the minimum speed $$v_{\text{top}}$$ at the top of the loop for the object to maintain contact with the track.

At the very top, both the weight $$mg$$ and the normal force $$N$$ point straight down, toward the center of the circle. The radial (inward) form of Newton's second law gives

$$
N + mg = \frac{mv_{\text{top}}^2}{r}.
$$

The track can only push, never pull, so $$N \ge 0$$. As the speed decreases, the required centripetal force decreases, and $$N$$ shrinks. The slowest possible speed that still keeps the object on the track is the point where $$N = 0$$, meaning gravity alone supplies the entire centripetal force:

$$
mg = \frac{mv_{\text{top}}^2}{r}.
$$

The mass cancels, giving

$$
v_{\text{top}} = \sqrt{gr}.
$$

Below this speed, the required inward force is less than $$mg$$, so the object falls away from the track before reaching the top. The same condition describes a ball on a string ($$N$$ replaced by tension $$T \ge 0$$) and water in a swung bucket.

</div>

<div class="theorem-box">

**Example.** A $$0.30\ \text{kg}$$ ball attached to a string of length $$L=1.2\ \text{m}$$ moves through the top of a vertical circle at speed $$v=4.0\ \text{m/s}$$. At a point $$30^\circ$$ below the top, its speed is momentarily $$4.4\ \text{m/s}$$. Find the radial acceleration, tangential acceleration, and tension at that instant without using energy.

The radial acceleration depends only on the instantaneous speed:

$$
a_r=\frac{v^2}{L}=\frac{(4.4)^2}{1.2}=16.1\ \text{m/s}^2.
$$

At $$30^\circ$$ below the top, the component of gravity tangent to the circle is $$mg\sin 30^\circ$$, directed down the path, so

$$
a_t=g\sin 30^\circ=4.9\ \text{m/s}^2.
$$

For tension, write the radial equation inward. The inward component of weight is $$mg\cos 30^\circ$$, so

$$
T+mg\cos 30^\circ=m\frac{v^2}{L}.
$$

Therefore

$$
T=m\frac{v^2}{L}-mg\cos 30^\circ
=(0.30)(16.1)-(0.30)(9.8)(0.866)=2.3\ \text{N}.
$$

The speed at that instant was given, so no energy step was needed; the radial and tangential force equations were enough.

</div>

### Banked curves

Sometimes, circular motion is not confined on a flat surface. For a frictionless banked (raised) curve, the horizontal component of the normal force provides centripetal acceleration, while the vertical component balances weight:

$$
F_N\cos\theta = mg,
$$

$$
F_N\sin\theta = \frac{mv^2}{r}.
$$

Dividing gives

$$
\tan\theta = \frac{v^2}{rg}.
$$

So the design speed is

$$
v = \sqrt{rg\tan\theta}.
$$

With friction, static friction points whichever way prevents slipping: up the slope if the car would slide down, and down the slope if the car would slide up (remember static friction always OPPOSES motion!).

<div class="theorem-box">

**Proof (banked-curve design speed).** A car rounds a curve of radius $$r$$ on a road banked at angle $$\theta$$, with no friction needed. Find the speed at which it can do so.

Only two forces act: the normal force $$N$$, perpendicular to the road surface, and the weight $$mg$$, straight down. Use horizontal and vertical axes (not axes along the incline), because the acceleration is horizontal — it points toward the center of the circle, which lies in the horizontal plane.

The normal force tilts inward by the bank angle $$\theta$$ from vertical. Resolve it: its vertical component is $$N\cos\theta$$ and its horizontal (inward) component is $$N\sin\theta$$.

Vertically, there is no acceleration, so the vertical forces balance:

$$
N\cos\theta = mg.
$$

Horizontally, the inward component of the normal force is the entire centripetal force:

$$
N\sin\theta = \frac{mv^2}{r}.
$$

Divide the horizontal equation by the vertical equation. Both $$N$$ and $$m$$ cancel:

$$
\tan\theta = \frac{v^2}{rg}.
$$

Solving for $$v$$ gives the design speed:

$$
v = \sqrt{rg\tan\theta}.
$$

At exactly this speed friction is not required at all. The mass cancels, so the design speed is the same for every vehicle.

</div>

<div class="theorem-box">

**Example.** A highway curve of radius $$r = 120\ \text{m}$$ is to be banked so that a car traveling at $$v = 25\ \text{m/s}$$ (about $$90\ \text{km/h}$$) needs no friction. Find the required bank angle $$\theta$$.

From the design-speed relation,

$$
\tan\theta = \frac{v^2}{rg} = \frac{(25)^2}{(120)(9.8)} = \frac{625}{1176} = 0.531,
$$

so

$$
\theta = \arctan(0.531) \approx 28^\circ.
$$

A car going faster than $$25\ \text{m/s}$$ on this bank would tend to slide outward and up the slope, so static friction would point down the slope; a slower car would tend to slide inward and down, so friction would point up the slope. Friction therefore widens the safe range of speeds around the design speed.

</div>

## Universal Gravitation

You may be familiar with the "force of gravity" on you, or in other words, your weight. However, $$F=mg$$ is a large simplification because gravity acts between *two* objects (by Newton's third law), not just one, and we are assuming that the Earth experiences negligible force (and thus does not move) when compared with the weight you experience. In general, Newton's law of universal gravitation gives the attractive force between two masses:

$$
F_g=\frac{Gm_1m_2}{r^2}.
$$

The force points along the line connecting the masses and both reactionary forces point towards each other. For a mass $$m$$ near a planet of mass $$M$$,

$$
F_g=\frac{GMm}{r^2}=mg(r),
$$

so the local gravitational field strength is

$$
g(r)=\frac{GM}{r^2}.
$$

Near Earth's surface, $$r\approx R_E$$ changes very little over ordinary heights, so $$g(r)$$ is treated as constant and becomes the familiar $$9.8\ \text{m/s}^2$$. Far from the surface, however, you must use the inverse-square form.

<div class="theorem-box">

**Example.** A satellite orbits Earth in a circular orbit of radius $$r=7.0\times10^6\ \text{m}$$ from Earth's center. Using $$GM_E=3.99\times10^{14}\ \text{m}^3/\text{s}^2$$, find its orbital speed.

For a circular orbit, gravity supplies the centripetal force:

$$
\frac{GM_Em}{r^2}=m\frac{v^2}{r}.
$$

The satellite mass cancels, giving

$$
v=\sqrt{\frac{GM_E}{r}}
=\sqrt{\frac{3.99\times10^{14}}{7.0\times10^6}}
=7.5\times10^3\ \text{m/s}.
$$

The satellite is falling toward Earth, but its sideways speed is large enough that it keeps missing the surface.

</div>

<div class="theorem-box">

**Example.** A planet of mass $$M$$ has a moon in a circular orbit of radius $$r$$ with measured orbital speed $$v_{\text{orbit}}$$. A second moon orbits the same planet at radius $$4r$$. Using only Newton's law of universal gravitation and circular-motion force balance, find the second moon's orbital speed in terms of $$v_{\text{orbit}}$$.

For the first moon, gravity supplies the centripetal force:

$$
\frac{GMm}{r^2}=m\frac{v_{\text{orbit}}^2}{r}.
$$

Cancel $$m$$ and solve for $$GM$$:

$$
GM=v_{\text{orbit}}^2r.
$$

For the second moon at radius $$4r$$,

$$
\frac{GMm_2}{(4r)^2}=m_2\frac{v_2^2}{4r}.
$$

Cancel $$m_2$$:

$$
v_2^2=\frac{GM}{4r}.
$$

Substitute $$GM=v_{\text{orbit}}^2r$$:

$$
v_2^2=\frac{v_{\text{orbit}}^2r}{4r}
=\frac{v_{\text{orbit}}^2}{4},
$$

so

$$
v_2=\frac{v_{\text{orbit}}}{2}.
$$

The farther moon moves more slowly because the gravitational field is weaker and a larger orbit needs less centripetal acceleration for a given speed.

</div>

---

## Inertial and non-inertial frames

Newton's laws have their simplest form in an **inertial frame**, a frame that is not accelerating. In an accelerating frame, you may introduce a **pseudo-force** so Newton's second law appears to work inside that frame.

For a frame accelerating with $$\vec{a}_{\text{frame}}$$, the pseudo-force on a mass $$m$$ is

$$
\vec{F}_{\text{pseudo}} = -m\vec{a}_{\text{frame}}.
$$

Pseudo-forces are not interaction forces and do not have third-law partners (since they don't actually exist!). Think of it like this: if a bus suddenly accelerates forward, you feel thrown backward, but no mysterious object pushed you backward. Your body was trying to keep its original velocity while the bus floor moved forward underneath you. In the accelerating bus frame, adding a backward pseudo-force is a bookkeeping trick that lets Newton's second law look normal from inside the bus.

<div class="theorem-box">

**Example.** A block of mass $$m$$ rests on a frictionless incline of angle $$\theta$$ built on a cart. How fast must the cart accelerate horizontally (toward the foot of the incline) so that the block does not slide relative to the incline?

Work in the cart's non-inertial frame, where the block is in equilibrium (not moving). Three forces act on it: gravity $$mg$$ downward, the normal force $$F_N$$ perpendicular to the incline surface, and the pseudo-force $$ma$$ pointing horizontally backward (opposite the cart's acceleration). Resolve along the incline, taking down-the-slope as positive. Gravity contributes $$mg\sin\theta$$ down the slope, while the pseudo-force contributes $$ma\cos\theta$$ up the slope. For the block not to slide, these must cancel:

$$
mg\sin\theta = ma\cos\theta,
$$

so

$$
a = g\tan\theta.
$$

The cleanest way to see it: in the cart frame gravity and the pseudo-force combine into an **effective gravity** $$\vec{g}_{\text{eff}} = \vec{g} - \vec{a}_{\text{frame}}$$. When $$a = g\tan\theta$$, this effective gravity points exactly perpendicular to the incline, so the block sits as if on level ground and has no tendency to slide.

As a check, solve it in the inertial ground frame. There the block accelerates horizontally at $$a$$, and only gravity and the normal force act. Vertically there is no acceleration, so $$F_N\cos\theta = mg$$; horizontally the normal force supplies the acceleration, so $$F_N\sin\theta = ma$$. Dividing gives $$\tan\theta = a/g$$, the same result, as expected.

</div>

---

## Variable forces and calculus form

For constant mass, Newton's second law can be written as

$$
\vec{F}_{\text{net}} = m\frac{d\vec{v}}{dt} = m\frac{d^2\vec{r}}{dt^2}.
$$

For variable-mass systems, you will have to use methods that are learned later.

<div class="theorem-box">

**Example.** An object of mass $$m$$ is released from rest and falls subject to gravity and linear drag $$F_d = -bv$$. Derive $$v(t)$$ and confirm the terminal velocity.

Take down as positive. Newton's second law is

$$
m\frac{dv}{dt} = mg - bv.
$$

This is a separable first-order differential equation. Separate variables:

$$
\frac{dv}{mg - bv} = \frac{dt}{m}.
$$

Integrate the left side using $$\int \frac{dv}{mg - bv} = -\frac{1}{b}\ln\lvert mg - bv \rvert$$:

$$
-\frac{1}{b}\ln(mg - bv) = \frac{t}{m} + C.
$$

Apply the initial condition $$v(0) = 0$$ to find $$C = -\frac{1}{b}\ln(mg)$$. Substitute back and combine the logarithms:

$$
-\frac{1}{b}\ln\!\left(\frac{mg - bv}{mg}\right) = \frac{t}{m}.
$$

Multiply by $$-b$$ and exponentiate:

$$
\frac{mg - bv}{mg} = e^{-bt/m}.
$$

Solve for $$v$$:

$$
v(t) = \frac{mg}{b}\left(1 - e^{-bt/m}\right).
$$

Since the terminal velocity is $$v_t = mg/b$$, this is exactly

$$
v(t) = v_t\left(1 - e^{-bt/m}\right).
$$

As $$t \to \infty$$, the exponential vanishes and $$v \to v_t$$, as expected. The quantity $$\tau = m/b$$ is the time constant: after one time constant the speed reaches about $$63\%$$ of terminal velocity. At early times the exponential expands as $$1 - bt/m + \dots$$, giving $$v \approx gt$$, which matches a non-drag scenario.

</div>

---

## Working checklist

:::checklist
1. Choose the system carefully.
2. Draw a clean free-body diagram.
3. Pick axes that match the geometry or acceleration.
4. Break forces into components.
5. Write $$\sum F_x = ma_x$$ and $$\sum F_y = ma_y$$.
6. Add constraints for ropes, pulleys, or circular motion.
7. Solve symbolically when possible.
8. Check limiting cases: frictionless, very large mass, zero angle, or zero acceleration.
9. For circular motion, point one axis along the radius (toward the center) and set the net radial force equal to $$mv^2/r$$.
:::

---

:::equations

| Idea | Equation |
| --- | --- |
| Newton's second law | $$\sum \vec{F} = m\vec{a}$$ |
| Components | $$\sum F_x = ma_x,\quad \sum F_y = ma_y$$ |
| Weight near Earth | $$F_g = mg$$ |
| Static friction | $$0 \le f_s \le \mu_sF_N$$ |
| Kinetic friction | $$f_k = \mu_kF_N$$ |
| Hooke's law | $$\vec{F}_s = -k\vec{x}$$ |
| Incline components | $$mg\sin\theta,\quad mg\cos\theta$$ |
| Uniform circular acceleration | $$a_c = v^2/r = \omega^2r$$ |
| Radial Newton's second law | $$\sum F_r = mv^2/r$$ |
| Frictionless banked curve | $$v = \sqrt{rg\tan\theta}$$ |
| Flat-curve max speed | $$v_{\max} = \sqrt{\mu_s g r}$$ |
| Atwood machine | $$a = \dfrac{(m_2 - m_1)g}{m_1 + m_2},\quad T = \dfrac{2m_1 m_2}{m_1 + m_2}g$$ |
| Apparent weight (elevator) | $$F_N = m(g + a)$$ |
| Top-of-loop minimum speed | $$v_{\text{top}} = \sqrt{gr}$$ |
| Terminal velocity (linear drag) | $$v_t = mg/b$$ |
| Center of mass dynamics | $$\sum \vec{F}_{\text{ext}} = M\vec{a}_{\text{CM}}$$ |
:::

## Practice

### Multiple Choice

::::problem
1. A block rests on a scale mounted on a wedge inclined at angle $$\theta$$. The wedge accelerates horizontally to the right with magnitude $$a$$, and the incline rises to the right. The block remains at rest relative to the scale. If the scale measures the normal force on the block, its reading is

(A) $$m(g\cos\theta-a\sin\theta)$$

(B) $$m(g\cos\theta+a\sin\theta)$$

(C) $$m(g\sin\theta+a\cos\theta)$$

(D) $$m(g+a)\cos\theta$$
::::

::::problem
2. A block is pressed against a vertical wall by a horizontal force $$F$$. The coefficient of static friction is $$\mu_s$$. The smallest $$F$$ that can keep the block from sliding is

(A) $$mg$$

(B) $$\mu_s mg$$

(C) $$mg/\mu_s$$

(D) $$\mu_s/g$$
::::

::::problem
3. A block of mass $$m$$ rests on a small platform scale mounted on an incline of angle $$\theta$$. The wedge and scale are at rest, and static friction prevents slipping.

<img class="note-img note-img--w360" src="/assets/APs/AP Physics C Mech/forces/practice-incline-scale.svg" alt="Block on a scale mounted on an inclined wedge" loading="lazy" decoding="async" />

If the scale measures the normal force on the block, its reading is

(A) $$mg\sin\theta$$

(B) $$mg\cos\theta$$

(C) $$mg\tan\theta$$

(D) $$mg$$
::::

::::problem
4. A car travels over the top of a circular hill of radius $$R$$. At the top, the driver feels an apparent weight equal to one-third of their normal weight. The car's speed is

(A) $$\sqrt{gR/3}$$

(B) $$\sqrt{2gR/3}$$

(C) $$\sqrt{gR}$$

(D) $$\sqrt{4gR/3}$$
::::

::::problem
5. An elevator accelerates upward with magnitude $$a$$. Inside it, a mass $$m$$ hangs from a spring scale while a horizontal force $$F$$ pulls the mass sideways so the supporting string makes angle $$\phi$$ with the vertical. The scale tension is

(A) $$m(g+a)$$

(B) $$\dfrac{m(g+a)}{\cos\phi}$$

(C) $$\dfrac{mg}{\cos\phi}$$

(D) $$m\sqrt{g^2+a^2}$$
::::

::::problem
6. A falling object experiences drag force $$bv$$ upward. Taking downward as positive, which differential equation describes the motion?

(A) $$m\dfrac{dv}{dt}=mg+bv$$

(B) $$m\dfrac{dv}{dt}=mg-bv$$

(C) $$m\dfrac{dv}{dt}=bv-mg$$

(D) $$m\dfrac{dv}{dt}=-mg-bv$$
::::

::::problem
7. A bead slides on a frictionless circular hoop in a vertical plane. At the side of the hoop, its speed is $$v$$. The normal force magnitude is

(A) $$mg$$

(B) $$mv^2/R$$

(C) $$mg+mv^2/R$$

(D) $$\sqrt{(mg)^2+(mv^2/R)^2}$$
::::

::::problem
8. Two blocks of masses $$m$$ and $$2m$$ are connected by a light string and pulled across a frictionless table by force $$F$$ applied to the $$2m$$ block. The tension in the string is

(A) $$F/3$$

(B) $$F/2$$

(C) $$2F/3$$

(D) $$F$$
::::

::::problem
9. A pendulum bob hangs motionless relative to a train accelerating horizontally with magnitude $$a$$. If the string makes angle $$\theta$$ with the vertical and the tension is $$T$$, which pair of equations is consistent with the bob's rest in the train frame?

(A) $$T\sin\theta=ma$$ and $$T\cos\theta=mg$$

(B) $$T\cos\theta=ma$$ and $$T\sin\theta=mg$$

(C) $$T=mg$$ and $$\tan\theta=a/g$$

(D) $$T=ma$$ and $$\tan\theta=g/a$$
::::

::::problem
10. A block of mass $$m$$ sits on a rough incline of angle $$\theta$$. A horizontal force $$F$$ pushes the block into the incline. Which change most directly increases the maximum possible static friction?

(A) Decreasing $$F$$

(B) Increasing $$F$$

(C) Decreasing $$m$$ while keeping $$F$$ fixed

(D) Making the incline frictionless
::::

::::problem
11. A small mass moves in a vertical circle on a string of length $$R$$. Its speeds at the bottom and top are $$v_b$$ and $$v_t$$. Which relation must hold if air resistance is negligible?

(A) $$v_b^2=v_t^2+4gR$$

(B) $$v_b^2=v_t^2+2gR$$

(C) $$v_b=v_t$$

(D) $$v_t^2=v_b^2+4gR$$
::::

::::problem
12. A block sits on a rough horizontal turntable a distance $$r$$ from the center. The turntable has angular speed $$\omega$$ and angular acceleration $$\alpha$$. At the threshold of slipping, the coefficient of static friction satisfies

(A) $$\mu_s g=r\omega^2$$

(B) $$\mu_s g=r\alpha$$

(C) $$\mu_s g=r\sqrt{\omega^4+\alpha^2}$$

(D) $$\mu_s g=r(\omega^2+\alpha)$$
::::

### FRQ

::::frq{id=ap-physics-c-mechanics-forces-1}
1. A block of mass $$m$$ is inside a box that accelerates horizontally with acceleration $$a$$. The block is pressed against the box's vertical wall and does not slip. The coefficient of static friction between the block and wall is $$\mu_s$$.

   $$(A)$$ Draw a free-body diagram for the block in the ground frame.

   $$(B)$$ Derive the normal force exerted by the wall on the block.

   $$(C)$$ Determine the condition on $$a$$ for the block not to slide down.

   $$(D)$$ If the box also accelerates upward with acceleration $$a_y$$, derive the new no-slip condition.
::::

::::frq{id=ap-physics-c-mechanics-forces-2}
2. A bead of mass $$m$$ slides without friction on a circular hoop of radius $$R$$ fixed in a vertical plane. At an angle $$\theta$$ measured from the bottom, the bead has speed $$v$$.

   $$(A)$$ Draw a force diagram for the bead.

   $$(B)$$ Write Newton's second law in the radial direction.

   $$(C)$$ Write Newton's second law in the tangential direction.

   $$(D)$$ Suppose the bead is released from rest at angle $$\theta_0$$. Find the normal force at the bottom of the hoop.
::::

::::frq{id=ap-physics-c-mechanics-forces-3}
3. A mass $$m$$ falls from rest through a fluid with drag force $$F_d=bv^2$$ upward. Take downward as positive.

   $$(A)$$ Write the differential equation for $$v(t)$$.

   $$(B)$$ Determine the terminal speed.

   $$(C)$$ Without solving fully for $$v(t)$$, determine whether the acceleration is increasing, decreasing, or constant as the object falls.

   $$(D)$$ Design a linear graph that could be used to determine $$b$$ from measurements of speed and acceleration.
::::
