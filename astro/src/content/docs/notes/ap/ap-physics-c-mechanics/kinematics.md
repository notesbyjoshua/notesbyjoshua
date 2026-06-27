---
title: "1D and 2D Kinematics"
sidebar:
  order: 1
---

# 1D and 2D Kinematics

---

**Kinematics** describes motion—position, velocity, and acceleration as functions of time—without asking what forces cause that motion. From here on, calculus is assumed: instantaneous rates are derivatives of position or velocity, and changes over an interval can be recovered with integrals when you know how acceleration varies.

**ADD PRACTICE TO ALL PHYSICS PAGES**

---

:::variables
- $$t$$ = time (Units: seconds ($$s$$))
- $$x$$ or $$s$$ = displacement (Units: meters ($$m$$))
- $$v$$ = velocity (Units $$\frac{m}{s}$$)
- $$a$$ = acceleration (Units $$\frac{m}{s^2}$$)
- $$g$$ = acceleration due to Earth's gravity = $$9.8 \frac{m}{s^2}$$
- $$h$$ = height (Units: $$m$$)
- $$R$$ = range (Units: $$m$$)
:::

---

## Scalars, vectors, and basic definitions of describing motion

A **scalar** has magnitude only (examples: speed, distance, time). A **vector** has magnitude and direction (examples: displacement, velocity, acceleration). In one dimension, a sign attached to a scalar component encodes direction along an axis.

Choose an origin and a positive direction along each axis. **Displacement** $$\Delta x$$ is the change in position regardless of what path you take (can be negative); **distance** is the length of the path traveled and is always nonnegative. **Average velocity** over an interval is

$$
\bar{v} = \frac{\Delta x}{\Delta t}.
$$

**Instantaneous velocity** is the time derivative of position when position is given as a function $$x(t)$$:

$$
v = \frac{dx}{dt}.
$$

**Speed** is the magnitude of velocity, $$\lvert v \rvert$$, in one dimension.

**Average acceleration** is defined as:

$$
\bar{a} = \frac{\Delta v}{\Delta t}.
$$

**Instantaneous acceleration** is the derivative of velocity with respect to time, equivalently the second derivative of position:

$$
a = \frac{dv}{dt} = \frac{d^2x}{dt^2}.
$$

If you know $$a(t)$$, the change in velocity between times $$t_1$$ and $$t_2$$ follows from integration:

$$
v(t_2) - v(t_1) = \int_{t_1}^{t_2} a(t)\, dt,
$$

and similarly position from velocity.

Be careful to distinguish **average** and **instantaneous** quantities. Average velocity over an interval is the single constant velocity that would produce the same displacement in the same time; it depends only on the endpoints, $$\bar{v}=\Delta x/\Delta t$$. Instantaneous velocity is the limit of that ratio as the interval shrinks to zero, $$v=dx/dt$$. The two agree only when velocity is constant, or, for the special case of constant acceleration, the average velocity happens to equal the midpoint value $$\frac{1}{2}(v_0+v_f)$$. That coincidence is exactly equation 5 below and does **not** hold when acceleration varies.

:::warning
Be careful when taking average speed over an interval. The average of two speeds is NOT necessarily the average speed of the whole trip! For example, if you went $$16$$mph for $$30$$ minutes and then $$4$$mph for $$90$$ minutes your average speed is NOT $$10$$! Always do $$\bar v = \frac{\Delta d}{\Delta t}$$ (You should get $$7$$mph).
:::

<div class="theorem-box">

**Example.** A particle starts at $$x_0 = 0$$ with velocity $$v_0 = 2\ \text{m/s}$$ and experiences acceleration $$a(t) = 6t\ \text{m/s}^2$$. Find its velocity and position as functions of time, and its position at $$t = 3\ \text{s}$$.

Integrate acceleration to get velocity:

$$
v(t) = v_0 + \int_0^t 6t'\, dt' = 2 + 3t^2.
$$

Integrate velocity to get position:

$$
x(t) = x_0 + \int_0^t (2 + 3t'^2)\, dt' = 2t + t^3.
$$

At $$t = 3\ \text{s}$$,

$$
x(3) = 2(3) + (3)^3 = 6 + 27 = 33\ \text{m}.
$$

</div>

---

## Motion graphs

Graphs of position, velocity, and acceleration versus time are linked by the same calculus that links the quantities themselves. Reading them well is half of one-dimensional kinematics.


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\pgfplotsset{mg/.style={width=4cm,height=3cm,axis lines=left,xtick=\empty,ytick=\empty,xlabel={$t$}}}
\begin{axis}[mg,ylabel={$x$},title={position}] \addplot[blue,very thick,domain=0:4]{0.35*x^2}; \end{axis}
\begin{axis}[mg,at={(4.6cm,0)},ylabel={$v$},title={velocity}] \addplot[blue,very thick,domain=0:4]{0.7*x}; \end{axis}
\begin{axis}[mg,at={(9.2cm,0)},ylabel={$a$},title={acceleration}] \addplot[blue,very thick,domain=0:4]{1.4}; \end{axis}
\end{tikzpicture}
```


- **Slopes go down the list.** The slope of an $$x$$-$$t$$ graph at an instant is the velocity, $$v = dx/dt$$. The slope of a $$v$$-$$t$$ graph is the acceleration, $$a = dv/dt$$. A curving $$x$$-$$t$$ graph therefore means nonzero acceleration, and a straight $$x$$-$$t$$ line means constant velocity.
- **Areas go up the list.** The signed area under a $$v$$-$$t$$ graph between two times is the displacement, $$\Delta x = \int v\, dt$$. The signed area under an $$a$$-$$t$$ graph is the change in velocity, $$\Delta v = \int a\, dt$$. "Signed" matters: area below the axis subtracts.

A few consistency checks worth internalizing: a maximum or minimum of $$x(t)$$ occurs where $$v = 0$$ (the slope is momentarily flat); the object is speeding up when $$v$$ and $$a$$ have the same sign and slowing down when they have opposite signs; and a horizontal $$v$$-$$t$$ line means zero acceleration even if the velocity itself is large.

<div class="theorem-box">

**Example.** A cart moves along a line. Its velocity is $$+4\ \text{m/s}$$ and constant for the first $$3\ \text{s}$$, then ramps linearly down to $$-2\ \text{m/s}$$ over the next $$2\ \text{s}$$. Find the acceleration during each phase, the total displacement, and the distance traveled.

During the first phase the $$v$$-$$t$$ graph is flat, so $$a_1 = 0$$. During the second phase,

$$
a_2 = \frac{\Delta v}{\Delta t} = \frac{(-2) - (+4)}{2} = -3\ \text{m/s}^2.
$$

Displacement is the signed area under the $$v$$-$$t$$ graph. The first phase is a rectangle:

$$
\Delta x_1 = (4)(3) = 12\ \text{m}.
$$

In the second phase the velocity crosses zero. It hits $$v=0$$ after $$\Delta v / a_2 = (-4)/(-3) = \frac{4}{3}\ \text{s}$$, moving forward, then reverses. The signed area of the triangular region is

$$
\Delta x_2 = \tfrac{1}{2}(4)\left(\tfrac{4}{3}\right) + \tfrac{1}{2}(-2)\left(2-\tfrac{4}{3}\right) = \tfrac{8}{3} - \tfrac{2}{3} = 2\ \text{m}.
$$

So total displacement is $$12 + 2 = 14\ \text{m}$$. Distance traveled adds the magnitudes of the forward and backward pieces: $$12 + \tfrac{8}{3} + \tfrac{2}{3} = 12 + \tfrac{10}{3} \approx 15.3\ \text{m}$$. Displacement and distance differ because the cart briefly reverses.

</div>

---

## Constant acceleration in one dimension

Many problems use **constant** acceleration $$a$$ (free fall near Earth’s surface is a common case with $$a = -g$$ or $$a = +g$$ depending on axis choice). The following equations (known as the **Big Five** (holy niche bro)) are very useful for these types of problems, since they only require 4 out of the 5 useful variables ($$a$$, $$v_f$$, $$v_0$$, $$\Delta x$$, $$t$$). By convention, we set $$t_0 = 0$$, with $$a$$ being acceleration, $$v_0$$ being initial velocity, $$v_f$$ being final velocity, $$\Delta x$$ being displacement, and $$t$$ being time:

:::key{name="The Big Five"}
1. Missing $$\Delta x$$: $$v_f = v_0 + at$$
2. Missing $$v_f$$: $$\Delta x = v_0t + \frac{1}{2}at^2$$
3. Missing $$v_0$$: $$\Delta x = v_f t - \frac{1}{2}at^2$$
4. Missing $$t$$: $$v^2 = v_0^2 + 2a\Delta x$$
5. Missing $$a$$: $$\Delta x = \frac{v_0+v_f}{2}t$$
:::

These are algebraic consequences of $$a = dv/dt$$ constant and $$v = dx/dt$$.

:::conditions
- Valid only for **constant acceleration** — for non-constant acceleration you need other methods (see below).
- If $$a=0$$, they reduce to the constant-velocity result $$\Delta x=vt$$.
:::

<div class="theorem-box">

**Proof (The Big Five).** Start with constant acceleration:

$$
a=\frac{dv}{dt}.
$$

Since $$a$$ is constant, integrate from $$0$$ to $$t$$:

$$
\int_{v_0}^{v}dv=\int_0^t a\,dt.
$$

This gives

$$
v-v_0=at,
$$

so

$$
v=v_0+at.
$$

That proves equation 1.

Since velocity is the derivative of position,

$$
v=\frac{dx}{dt}.
$$

Using $$v(t)=v_0+at$$,

$$
\Delta x=\int_0^t v(t)\,dt=\int_0^t (v_0+at)\,dt.
$$

Therefore

$$
\Delta x=v_0t+\frac{1}{2}at^2.
$$

That proves equation 2.

Solve equation 1 for the initial velocity:

$$
v_0=v-at.
$$

Substitute into equation 2:

$$
\Delta x=(v-at)t+\frac{1}{2}at^2.
$$

So

$$
\Delta x=vt-\frac{1}{2}at^2.
$$

That proves equation 3.

To eliminate time, use the chain rule:

$$
a=\frac{dv}{dt}=\frac{dv}{dx}\frac{dx}{dt}=v\frac{dv}{dx}.
$$

Then

$$
a\,dx=v\,dv.
$$

Integrate from $$x_0$$ to $$x$$ and from $$v_0$$ to $$v$$:

$$
\int_{x_0}^{x}a\,dx=\int_{v_0}^{v}v\,dv.
$$

So

$$
a\Delta x=\frac{1}{2}(v^2-v_0^2),
$$

which rearranges to

$$
v^2=v_0^2+2a\Delta x.
$$

That proves equation 4.

Finally, for constant acceleration, the velocity-time graph is a straight line, so displacement is the area under that graph: a trapezoid with bases $$v_0$$ and $$v$$ and width $$t$$. Thus

$$
\Delta x=\frac{v_0+v}{2}t.
$$

That proves equation 5.

</div>

:::tip
Always check that your signs for $$v_0$$, $$v$$, $$a$$, and $$\Delta x$$ match the coordinate system and stay consistent with your definitions (e.g. if you take up as $$+y$$ then gravity has negative acceleration).
:::

<div class="theorem-box">

**Example.** A car traveling at $$v_0 = 25\ \text{m/s}$$ brakes with constant deceleration and comes to rest in $$40\ \text{m}$$. Find the acceleration and the time it takes to stop.

The final velocity is $$v = 0$$, and we know $$v_0$$ and $$\Delta x$$ but not $$t$$, so use equation 4 (missing $$t$$):

$$
v^2 = v_0^2 + 2a\Delta x \;\Rightarrow\; 0 = (25)^2 + 2a(40).
$$

Solve:

$$
a = -\frac{625}{80} = -7.8\ \text{m/s}^2.
$$

The negative sign means the acceleration opposes the motion, as expected for braking. For the time, use equation 1:

$$
v = v_0 + at \;\Rightarrow\; 0 = 25 + (-7.8)t,
$$

$$
t = \frac{25}{7.8} \approx 3.2\ \text{s}.
$$

A quick check with equation 5: $$\Delta x = \frac{v_0 + v}{2}t = \frac{25 + 0}{2}(3.2) \approx 40\ \text{m}$$, which matches.

</div>

---

## Non-constant acceleration

The Big Five fail whenever $$a$$ varies, so you fall back on the defining derivatives and choose your integration variable based on what $$a$$ depends on:

:::strategy{title="Non-constant acceleration"}
- **$$a$$ depends on time, $$a = a(t)$$.** Integrate directly: $$v = v_0 + \int a(t)\, dt$$, then $$x = x_0 + \int v(t)\, dt$$.
- **$$a$$ depends on position, $$a = a(x)$$.** Time is awkward here, so eliminate it with the chain rule. Writing $$a = dv/dt = (dv/dx)(dx/dt) = v\,dv/dx$$ gives the separable relation $$a(x)\, dx = v\, dv$$. Integrating both sides connects speed to position without ever solving for time, much like how equation 4 was derived.
- **$$a$$ depends on velocity, $$a = a(v)$$.** Separate variables in $$dv/dt = a(v)$$ to get $$dt = dv/a(v)$$, or use $$v\,dv/dx = a(v)$$ if you want $$v$$ as a function of $$x$$.
:::

The tool $$a = v\,dv/dx$$ is worth remembering: it trades the time variable for position whenever time is the inconvenient one to track.

---

## Two dimensions and projectile motion

In 2D, vectors can be broken down into $$x$$- and $$y$$-components. For **projectile motion** with negligible air resistance (meaning you throw something in the air or something is launched), horizontal acceleration is zero and vertical acceleration is $$g$$ downward (again, signs depend on whether you call “up” positive $$y$$ or not). The motions along $$x$$ and $$y$$ are independent except that they share the same time parameter $$t$$.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[->] (0,0) -- (7,0) node[right] {$x$}; \draw[->] (0,0) -- (0,3.5) node[above] {$y$};
\draw[blue, very thick, domain=0:6.4, samples=80] plot (\x,{0.9*\x-0.14*\x*\x});
\draw[->, red, thick] (0,0) -- (1.4,1.26) node[above] {$v_0$};
\draw[dashed] (1.4,1.26) -- (1.4,0) node[below] {$v_{0x}$}; \draw[dashed] (1.4,1.26) -- (0,1.26) node[left] {$v_{0y}$};
\node at (4.6,1.0) {parabolic path};
\end{tikzpicture}
```


With initial speed $$v_0$$ at launch angle $$\theta$$ above the horizontal,

$$
v_{0x} = v_0 \cos\theta, v_{0y} = v_0 \sin\theta.
$$

Typical component equations (up is positive $$y$$, gravity is downward) then become:

$$
x = x_0 + v_{0x} t, \qquad y = y_0 + v_{0y} t - \frac{1}{2} g t^2,
$$

$$
v_x = v_{0x}, \qquad v_y = v_{0y} - gt.
$$

Remember: ALWAYS make sure you know which direction you define as $$+y$$! The trajectory in the vertical plane is a parabola until the object hits something.

If launch and landing occur at the same height, the shortcuts for range, maximum height, and total flight time on level ground are:

$$
R = \frac{v_0^2 \sin(2\theta)}{g},
$$

$$
h = \frac{v_0^2 \sin^2 (\theta)}{2g},
$$

$$
T = \frac{2v_0 \sin(\theta)}{g}.
$$

<div class="theorem-box">

**Proof (Range, Max Height, Flight Time).** Take up as $$+y$$, launch from the origin, and write the component equations:

$$
y = v_0\sin\theta\, t - \tfrac{1}{2}g t^2, \qquad x = v_0\cos\theta\, t,
$$

$$
v_y = v_0\sin\theta - gt.
$$

**Flight time.** On level ground the projectile lands when $$y = 0$$ again:

$$
0 = v_0\sin\theta\, T - \tfrac{1}{2}g T^2 = T\left(v_0\sin\theta - \tfrac{1}{2}g T\right).
$$

The root $$T = 0$$ is the launch instant; the landing is the other root:

$$
T = \frac{2 v_0 \sin\theta}{g}.
$$

**Maximum height.** At the top of the arc the vertical velocity is zero, $$v_y = 0$$, which happens at $$t = v_0\sin\theta / g$$, exactly half of $$T$$ (the parabola is symmetric). Substitute into $$y$$:

$$
h = v_0\sin\theta\left(\frac{v_0\sin\theta}{g}\right) - \tfrac{1}{2}g\left(\frac{v_0\sin\theta}{g}\right)^2 = \frac{v_0^2\sin^2\theta}{2g}.
$$

**Range.** The horizontal distance covered in the full flight time is

$$
R = v_0\cos\theta\cdot T = v_0\cos\theta\cdot\frac{2v_0\sin\theta}{g} = \frac{2v_0^2\sin\theta\cos\theta}{g}.
$$

Using the identity $$2\sin\theta\cos\theta = \sin(2\theta)$$,

$$
R = \frac{v_0^2\sin(2\theta)}{g}.
$$

Because $$\sin(2\theta)$$ is largest at $$2\theta = 90^\circ$$, range on level ground is maximized at $$\theta = 45^\circ$$, and complementary angles such as $$30^\circ$$ and $$60^\circ$$ give the same range.

</div>

<div class="theorem-box">

**Example.** A ball is launched from level ground at $$v_0 = 20\ \text{m/s}$$ and $$\theta = 30^\circ$$. Take $$g = 9.8\ \text{m/s}^2$$. Find the time of flight, range, and maximum height.

With $$\sin 30^\circ = 0.5$$, $$\cos 30^\circ \approx 0.866$$, and $$\sin 60^\circ \approx 0.866$$:

$$
T = \frac{2(20)(0.5)}{9.8} \approx 2.0\ \text{s},
$$

$$
R = \frac{(20)^2(0.866)}{9.8} \approx 35.4\ \text{m},
$$

$$
h = \frac{(20)^2(0.5)^2}{2(9.8)} \approx 5.1\ \text{m}.
$$

As a sanity check, a $$60^\circ$$ launch at the same speed would give the same range $$R$$ but a much greater height, since $$\sin^2 60^\circ = 0.75$$ is three times $$\sin^2 30^\circ$$.

</div>

If launch and landing heights differ, solve the quadratic in $$t$$ from the $$y$$ equation rather than memorizing these shortcuts.

<div class="theorem-box">

**Example.** A projectile is launched from the top of a cliff $$45\ \text{m}$$ tall at $$v_0 = 30\ \text{m/s}$$ and $$\theta = 37^\circ$$ above the horizontal. Take $$g = 10\ \text{m/s}^2$$, $$\sin 37^\circ = 0.6$$, $$\cos 37^\circ = 0.8$$. How long is it in the air, and how far from the base of the cliff does it land?

Put the origin at the launch point with up as $$+y$$. Then the components are

$$
v_{0x} = 30(0.8) = 24\ \text{m/s}, \qquad v_{0y} = 30(0.6) = 18\ \text{m/s}.
$$

The ground is $$45\ \text{m}$$ below launch, so landing is at $$y = -45\ \text{m}$$:

$$
-45 = 18t - \tfrac{1}{2}(10)t^2 = 18t - 5t^2.
$$

Rearranging into standard form,

$$
5t^2 - 18t - 45 = 0.
$$

Apply the quadratic formula:

$$
t = \frac{18 \pm \sqrt{(-18)^2 - 4(5)(-45)}}{2(5)} = \frac{18 \pm \sqrt{324 + 900}}{10} = \frac{18 \pm 35}{10}.
$$

The physical (positive) root is

$$
t = \frac{18 + 35}{10} = 5.3\ \text{s}.
$$

The negative root is discarded because it corresponds to a time before launch. The horizontal range from the base of the cliff is

$$
x = v_{0x}\, t = 24(5.3) \approx 127\ \text{m}.
$$

Note that with unequal launch and landing heights the trajectory is no longer symmetric, which is why the level-ground shortcuts cannot be used here.

**ADD INCLINED PLANE PROJECTILE MOTION**

</div>

---

## Relative velocity (introduction)

The velocity of object $$A$$ relative to object $$B$$ is written $$\vec{v}_{A/B}$$. With three objects (or frames), the usual composition rule is

$$
\vec{v}_{A/C} = \vec{v}_{A/B} + \vec{v}_{B/C}.
$$


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[->, very thick, blue] (0,0) -- (0,2.4) node[above] {$\vec v_{B/W}$};
\draw[->, very thick, red] (0,2.4) -- (2.2,2.4) node[right] {$\vec v_{W/G}$};
\draw[->, very thick, purple] (0,0) -- (2.2,2.4) node[midway, below right] {$\vec v_{B/G}$};
\draw[gray] (-0.6,-0.2) rectangle (3.1,2.9); \node at (1.2,-0.55) {river-crossing vector addition};
\end{tikzpicture}
```


To visualize, you can draw the velocities as vectors, and do vector addition to get your final result. A useful consistency check is that swapping the subscripts negates the vector, $$\vec{v}_{A/B} = -\vec{v}_{B/A}$$.

<div class="theorem-box">

**Example.** A boat heads straight across a river, pointing its bow perpendicular to the banks with a speed of $$4\ \text{m/s}$$ relative to the water. The river flows at $$3\ \text{m/s}$$ parallel to the banks, and the river is $$80\ \text{m}$$ wide. Find the boat's velocity relative to the ground, how long the crossing takes, and how far downstream it lands.

Let the boat's velocity relative to the water be $$\vec{v}_{B/W}$$ (across the river) and the water's velocity relative to the ground be $$\vec{v}_{W/G}$$ (downstream). The composition rule gives

$$
\vec{v}_{B/G} = \vec{v}_{B/W} + \vec{v}_{W/G}.
$$

These two pieces are perpendicular, so the ground speed is

$$
v_{B/G} = \sqrt{4^2 + 3^2} = 5\ \text{m/s},
$$

at an angle $$\arctan(3/4) \approx 37^\circ$$ downstream of straight across.

The crossing time depends only on the across-river component, because the downstream flow does nothing to close the $$80\ \text{m}$$ gap:

$$
t = \frac{80}{4} = 20\ \text{s}.
$$

During that time the current carries the boat downstream by

$$
d = (3)(20) = 60\ \text{m}.
$$

The key idea is that the perpendicular components are independent, just as in projectile motion: the downstream drift does not change how long the crossing takes.

</div>

You can find more on the [USAPhO section on mechanics](/notes/physics/advmech/).

---

:::equations
| Idea | Equation |
| --- | --- |
| Average velocity / acceleration | $$\bar{v} = \dfrac{\Delta x}{\Delta t},\quad \bar{a} = \dfrac{\Delta v}{\Delta t}$$ |
| Instantaneous velocity | $$v = \dfrac{dx}{dt}$$ |
| Instantaneous acceleration | $$a = \dfrac{dv}{dt} = \dfrac{d^2x}{dt^2}$$ |
| Velocity / position by integration | $$\Delta v = \displaystyle\int a\,dt,\quad \Delta x = \displaystyle\int v\,dt$$ |
| Acceleration depending on position | $$a = v\dfrac{dv}{dx}$$ |
| Constant accel: missing $$\Delta x$$ | $$v_f = v_0 + at$$ |
| Constant accel: missing $$v_f$$ | $$\Delta x = v_0 t + \tfrac{1}{2}at^2$$ |
| Constant accel: missing $$v_0$$ | $$\Delta x = v_f t - \tfrac{1}{2}at^2$$ |
| Constant accel: missing $$t$$ | $$v_f^2 = v_0^2 + 2a\Delta x$$ |
| Constant accel: missing $$a$$ | $$\Delta x = \dfrac{v_0 + v_f}{2}\,t$$ |
| Projectile launch components | $$v_{0x} = v_0\cos\theta,\quad v_{0y} = v_0\sin\theta$$ |
| Projectile motion (up is $$+y$$) | $$x = v_{0x}t,\quad y = v_{0y}t - \tfrac{1}{2}gt^2$$ |
| Projectile velocity | $$v_x = v_{0x},\quad v_y = v_{0y} - gt$$ |
| Range (level ground) | $$R = \dfrac{v_0^2\sin(2\theta)}{g}$$ |
| Max height (level ground) | $$h = \dfrac{v_0^2\sin^2\theta}{2g}$$ |
| Time of flight (level ground) | $$T = \dfrac{2v_0\sin\theta}{g}$$ |
| Relative velocity | $$\vec{v}_{A/C} = \vec{v}_{A/B} + \vec{v}_{B/C}$$ |
:::

## Practice

### FRQ

::::frq{id=ap-physics-c-mechanics-kinematics-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
