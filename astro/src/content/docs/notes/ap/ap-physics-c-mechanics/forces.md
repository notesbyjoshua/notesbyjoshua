---
title: "Unit 2: Force and Translational Dynamics"
sidebar:
  order: 2
---

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

In 1687, Newton formulated the three laws of motion. They work extremely well for ordinary macroscopic objects moving much slower than the speed of light. At quantum, relativistic, or very strong-gravity scales, Newtonian mechanics must be replaced or extended, but for AP purposes, Newtonian mechanics suffices.

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
\draw[->, very thick, blue] (0,0.5) -- (0,2) node[above] {$N$};
\draw[->, very thick, red] (0,-0.5) -- (0,-2) node[below] {$mg$};
\draw[->, very thick, green!50!black] (0.5,0) -- (2,0) node[right] {$F$};
\draw[->, very thick, orange!90!black] (-0.5,0) -- (-1.8,0) node[left] {$f$};
\end{tikzpicture}
```


Good procedure:

1. Choose the object or system.
2. Draw a dot or simple sketch.
3. Add one arrow for each external force.
4. Choose axes, usually one axis parallel to the expected acceleration or along a surface.
5. Resolve angled forces into components using vector decomposition.
6. Write Newton's second law separately for each direction.

For a particle in two dimensions, you should split up force into components using vector decomposition like for velocity:

$$
\sum F_x = ma_x, \qquad \sum F_y = ma_y.
$$

If acceleration is zero in one direction, the net force in that direction is **zero** even if forces are present.

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

Weight points downward, toward Earth's center. Mass is not weight: mass is an object's inertia, while weight is a force caused by gravity. Weight is always drawn from the center of the object, and sometimes drawing out the whole object (as opposed to just a dot) is very important! For example, when the force of gravity passes through the corner of the object, it will start to topple!

### Normal force

The **normal force** is a contact force **perpendicular** to a surface and opposes gravity. It adjusts to prevent objects from passing through each other, but it is not automatically equal to $$mg$$. For example, on an incline or in an accelerating elevator, the normal force differs from the object's weight. Normally, you need to solve out force equations to get the normal force. The normal force acts along the entire surface of contact but is usually drawn out in the center of the contact plane.

A concrete case where $$F_N \ne mg$$: suppose you push down on a box resting on the floor with an extra downward force $$P$$ at some angle, or simply press straight down. The vertical equation with no vertical acceleration is $$F_N - mg - P = 0$$, so $$F_N = mg + P > mg$$. If instead you pull up on the box with a force $$P$$ (not enough to lift it), then $$F_N = mg - P < mg$$. The normal force only equals $$mg$$ in the special case of a horizontal surface with no other vertical forces and no vertical acceleration.

:::warning
Always get $$F_N$$ from the perpendicular equation, never by assumption, because friction limits like $$\mu_s F_N$$ depend on it.
:::

### Tension

**Tension** is a pulling force transmitted by a rope, string, or cable. In an ideal world, strings are massless and inextensible, and pulleys are massless and frictionless. Under those assumptions, the tension is the same throughout a continuous string.

If a string or pulley has mass, or if the pulley has rotational inertia, tension may differ on different sides. Those cases usually belong more naturally with rotational dynamics.

### Friction

**Friction** is a contact force parallel to a surface that opposes relative motion or impending relative motion.

Static friction adjusts up to a maximum value:

$$
0 \le f_s \le f_{s,\text{max}} = \mu_s F_N.
$$

Kinetic friction has approximately constant magnitude:

$$
f_k = \mu_k F_N.
$$

Static friction is not always equal to $$\mu_sF_N$$; that expression gives the maximum possible static friction before slipping begins. Usually $$\mu_s > \mu_k$$.

### Spring force

For an ideal spring, **Hooke's law** gives

$$
\vec{F}_s = -k\vec{x},
$$

where $$\vec{x}$$ is displacement from equilibrium. The negative sign means the spring force points opposite the displacement. This force is more relevant in [Unit 7: Oscillations](/notes/ap/ap-physics-c-mechanics/oscillations/).

### Drag and resistive forces

Air resistance and fluid drag are often ignored in AP mechanics unless specified. When included, drag points opposite velocity. Two common models are

$$
\vec{F}_d = -b\vec{v}
$$

for low-speed linear drag, and

$$
\vec{F}_d = c\vec{v}^2
$$

for high-speed quadratic drag.

---

## Solving Newton's second law problems

:::strategy{title="Newton's second law problems"}
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

First, the fast way (system method). The only external force along the direction of motion is the weight of the hanging mass, $$m_2 g$$, and the moving mass is $$m_1 + m_2$$:

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


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (-3,-1) -- (3,-1) -- (3,1.2) -- cycle;
\begin{scope}[rotate=19]
\draw[fill=gray!20] (-0.5,-0.2) rectangle (0.5,0.4); \node at (0,0.1) {$m$};
\draw[->, very thick, blue] (0,0.4) -- (0,1.7) node[above] {$N$};
\draw[->, very thick, orange] (-0.5,0.1) -- (-1.6,0.1) node[left] {$f$};
\end{scope}
\draw[->, very thick, red] (0,0) -- (0,-2) node[below] {$mg$};
\draw[dashed, red] (0,0) -- (-0.65,-1.85) node[left] {$mg\sin\theta$};
\draw[dashed, red] (0,0) -- (1.25,-0.45) node[right] {$mg\cos\theta$};
\draw (2.2,-1) arc[start angle=0,end angle=19,radius=0.8] node[midway,right] {$\theta$};
\end{tikzpicture}
```


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
a = g\sin\theta - \mu_k g\cos\theta = 9.8(\sin 30^\circ - 0.40\cos 30^\circ) = 9.8(0.500 - 0.346) = 1.5\ \text{m/s}^2.
$$

The block accelerates down the plane at about $$1.5\ \text{m/s}^2$$. Had $$f_{s,\text{max}}$$ exceeded $$19.6\ \text{N}$$, the block would have stayed put with static friction equal to exactly $$19.6\ \text{N}$$, not $$\mu_s F_N$$.

</div>

---

## Friction and the slipping condition

The condition for impending slip is

$$
f_s = \mu_s F_N.
$$

For a block resting on an incline, slipping begins when

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

**Example).** A coin placed on a flat book starts to slide when the book is tilted to $$\theta_{\max} = 22^\circ$$ from horizontal. Find $$\mu_s$$.

At impending slip the down-plane gravity component equals the maximum static friction:

$$
mg\sin\theta_{\max} = \mu_s mg\cos\theta_{\max} \quad\Rightarrow\quad \mu_s = \tan\theta_{\max} = \tan 22^\circ \approx 0.40.
$$

The mass and $$g$$ both cancel, which is why this simple tilt test works regardless of how heavy the coin is.

</div>

---

## Connected objects and pulleys

For ideal ropes and pulleys, connected objects share related accelerations. A common Atwood machine has two hanging masses connected by a massless string over a frictionless pulley.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
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

Because the string is inextensible, whatever distance $$m_2$$ falls, $$m_1$$ rises by the same amount, so both masses have the same acceleration magnitude $$a$$. Take the direction of motion as positive for each mass: $$m_2$$ accelerates downward and $$m_1$$ accelerates upward, with the same $$a$$. The tension $$T$$ is the same on both sides because the string and pulley are ideal.

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

## Equilibrium

An object is in **translational equilibrium** when

$$
\sum \vec{F} = 0.
$$

This means its acceleration is zero, so the object is either at rest or moving with constant velocity. In two dimensions,

$$
\sum F_x = 0, \qquad \sum F_y = 0.
$$

Do not assume equilibrium just because an object is momentarily at rest. If a ball is thrown upward, it has zero velocity at the top but still has downward acceleration.

For static equilibrium of extended objects, torque must also balance:

$$
\sum \tau = 0.
$$

Torque is treated in [Unit 5](/notes/ap/ap-physics-c-mechanics/torque/), but it is useful to remember that translational equilibrium alone is not enough to prevent rotation.

---

## Uniform circular motion

In **uniform circular motion**, speed is constant but velocity changes direction, so the object accelerates toward the center of the circle. The centripetal acceleration is

$$
a_c = \frac{v^2}{r} = \omega^2 r.
$$

Newton's second law in the radial direction is

$$
\sum F_r = m\frac{v^2}{r}.
$$

There is no special "centripetal force." The phrase describes the net inward force required for circular motion. All forces acting on an object going in uniform circular motion must add up to the centripetal force (as long as the force does not act perpendicular to the vector connecting the object and the center of the circle.).


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[blue, thick] (0,0) circle (1.6); \fill (0,0) circle (1.5pt) node[below] {center};
\fill (1.35,0.85) circle (2pt) node[above right] {$m$};
\draw[->, very thick, red] (1.35,0.85) -- (0.35,0.2) node[midway, above] {$F_{net}$};
\draw[->, very thick, blue] (1.35,0.85) -- (0.75,1.8) node[above] {$v$};
\node at (0,-2.1) {net force points toward the center};
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

---

## Nonuniform circular motion

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
\fill (0,1.7) circle (2pt) node[above] {top}; \fill (0,-1.7) circle (2pt) node[below] {bottom};
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

**Example.** A small bead slides without friction down a track and around a vertical loop of radius $$r = 0.40\ \text{m}$$. From what minimum height $$h$$ above the bottom of the loop must it be released to complete the loop?

The minimum condition at the top is $$v_{\text{top}}^2 = gr$$ from the proof above. Using energy conservation (frictionless) between the release point at height $$h$$ and the top of the loop at height $$2r$$:

$$
mgh = mg(2r) + \tfrac{1}{2}mv_{\text{top}}^2.
$$

Substitute $$v_{\text{top}}^2 = gr$$ and cancel $$m$$:

$$
gh = 2gr + \tfrac{1}{2}gr = \tfrac{5}{2}gr,
$$

so

$$
h = \frac{5}{2}r = \frac{5}{2}(0.40) = 1.0\ \text{m}.
$$

The classic result is that the release height must be at least $$2.5$$ radii above the bottom of the loop. See [Unit 3: Work, Energy, and Power](/notes/ap/ap-physics-c-mechanics/work/) for the energy method used here.

</div>

---

## Banked curves

For a frictionless banked (raised) curve, the horizontal component of the normal force provides centripetal acceleration, while the vertical component balances weight:

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


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (-3,-1) -- (3,0.2); \draw[fill=gray!20, rotate=11] (-0.5,-0.15) rectangle (0.5,0.25); \node at (0,0.35) {car};
\draw[->, red, thick] (0,0.25) -- (0,-1.4) node[below] {$mg$};
\draw[->, blue, thick] (0,0.25) -- (-0.45,2.2) node[above] {$N$};
\draw[dashed, blue] (0,0.25) -- (-0.45,0.25) node[left] {$N\sin\theta$};
\draw[dashed, blue] (-0.45,0.25) -- (-0.45,2.2) node[midway,left] {$N\cos\theta$};
\draw (2.1,-0.6) arc[start angle=0,end angle=11,radius=0.8] node[midway,right] {$\theta$};
\end{tikzpicture}
```


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

With friction, static friction points whichever way prevents slipping: up the slope if the car would slide down, and down the slope if the car would slide up.

---

## Inertial and non-inertial frames

Newton's laws have their simplest form in an **inertial frame**, a frame that is not accelerating. In an accelerating frame, you may introduce a **pseudo-force** so Newton's second law appears to work inside that frame.

For a frame accelerating with $$\vec{a}_{\text{frame}}$$, the pseudo-force on a mass $$m$$ is

$$
\vec{F}_{\text{pseudo}} = -m\vec{a}_{\text{frame}}.
$$

Pseudo-forces are not interaction forces and do not have third-law partners. They are bookkeeping tools for working in non-inertial frames. AP Physics C usually lets you solve from an inertial frame, but pseudo-forces can be useful for accelerating elevators, accelerating wedges, and rotating-frame intuition.

<div class="theorem-box">

**Example.** A block of mass $$m$$ rests on a frictionless incline of angle $$\theta$$ built on a cart. How fast must the cart accelerate horizontally (toward the foot of the incline) so that the block does not slide relative to the incline?

Work in the cart's non-inertial frame, where the block is in equilibrium. Three forces act on it: gravity $$mg$$ downward, the normal force $$F_N$$ perpendicular to the incline surface, and the pseudo-force $$ma$$ pointing horizontally backward (opposite the cart's acceleration). Resolve along the incline, taking down-the-slope as positive. Gravity contributes $$mg\sin\theta$$ down the slope, while the pseudo-force contributes $$ma\cos\theta$$ up the slope. For the block not to slide, these must cancel:

$$
mg\sin\theta = ma\cos\theta,
$$

so

$$
a = g\tan\theta.
$$

The cleanest way to see it: in the cart frame gravity and the pseudo-force combine into an **effective gravity** $$\vec{g}_{\text{eff}} = \vec{g} - \vec{a}_{\text{frame}}$$. When $$a = g\tan\theta$$, this effective gravity points exactly perpendicular to the incline, so the block sits as if on level ground and has no tendency to slide.

As a check, solve it in the inertial ground frame. There the block accelerates horizontally at $$a$$, and only gravity and the normal force act. Vertically there is no acceleration, so $$F_N\cos\theta = mg$$; horizontally the normal force supplies the acceleration, so $$F_N\sin\theta = ma$$. Dividing gives $$\tan\theta = a/g$$, the same result — the pseudo-force was just bookkeeping for the acceleration we put in by hand in the ground frame.

</div>

---

## Variable forces and calculus form

For constant mass, Newton's second law can be written as

$$
\vec{F}_{\text{net}} = m\frac{d\vec{v}}{dt} = m\frac{d^2\vec{r}}{dt^2}.
$$

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

As $$t \to \infty$$, the exponential vanishes and $$v \to v_t$$, as expected. The quantity $$\tau = m/b$$ is the time constant: after one time constant the speed reaches about $$63\%$$ of terminal velocity. At early times the exponential expands as $$1 - bt/m + \dots$$, giving $$v \approx gt$$, the familiar free-fall limit before drag becomes significant.

</div>

---

## Center of mass and systems

For a system of particles, the net external force determines the acceleration of the center of mass:

$$
\sum \vec{F}_{\text{ext}} = M\vec{a}_{\text{CM}}.
$$

Internal forces between particles cancel in pairs by Newton's third law when considering the system as a whole. This is why a person cannot accelerate a closed system's center of mass by pushing only on internal parts.

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

### FRQ

::::frq{id=ap-physics-c-mechanics-forces-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
