---
title: "AP Physics C Mechanics — Practice"
sidebar:
  label: "AP Physics C Mechanics"
  order: 3
prev: false
next: false
tableOfContents:
  maxHeadingLevel: 2
---

All practice problems and solutions for **AP Physics C Mechanics**, organized by unit. Worked examples stay on the unit pages.

_Auto-collected from the practice sections of each unit's notes (`scripts/build_practice.py`). Edit the source notes, not this page._

## Unit 1: 1D and 2D Kinematics

[Full notes →](/notes/ap/ap-physics-c-mechanics/kinematics/)

### Practice

#### Multiple Choice

::::problem
1. A projectile is fired from height $$h$$ with speed $$v_0$$ at angle $$\theta$$ above horizontal. Air resistance is negligible. Which equation determines its time of flight if the ground is $$y=0$$?

(A) $$0=h+v_0\sin\theta\,t-\dfrac{1}{2}gt^2$$

(B) $$0=v_0\cos\theta\,t-\dfrac{1}{2}gt^2$$

(C) $$h=v_0t-\dfrac{1}{2}gt^2$$

(D) $$0=v_0\sin\theta-gt$$


:::solution
The time of flight is controlled by vertical motion, because the projectile lands when its vertical position reaches ground level.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,decorations.pathmorphing}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.85]
  \draw[->] (0,0) -- (5.2,0) node[right] {$x$};
  \draw[->] (0,0) -- (0,3.0) node[above] {$y$};
  \draw[dashed] (0,0.75) -- (5,0.75) node[right] {ground};
  \draw[very thick, blue!65] (0.35,1.65) parabola bend (2.35,2.65) (4.75,0.75);
  \fill (0.35,1.65) circle (2pt) node[left] {launch};
  \draw[->, red!75, thick] (0.35,1.65) -- ++(0.95,0.65) node[above] {$v_0$};
  \draw[->, red!75] (1.05,1.65) arc[start angle=0,end angle=34,radius=0.7];
  \node[red!75] at (1.15,1.95) {$\theta$};
\end{tikzpicture}
```

The initial vertical velocity is $$v_0\sin\theta$$ and the vertical acceleration is $$-g$$, so

$$
y(t)=h+v_0\sin\theta\,t-\frac12gt^2.
$$

Set $$y(t)=0$$ at landing. This gives $$0=h+v_0\sin\theta\,t-\dfrac12gt^2$$, so the answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
2. A projectile is launched from level ground. At the top of its path, its speed is half its launch speed. What was the launch angle?

(A) $$30^\circ$$

(B) $$45^\circ$$

(C) $$60^\circ$$

(D) $$75^\circ$$


:::solution
At the top of the path, the vertical velocity is zero, but the horizontal velocity is unchanged.

So the speed at the top is just

$$
v_{\text{top}}=v_0\cos\theta.
$$

The problem says this is half the launch speed:

$$
v_0\cos\theta=\frac{v_0}{2}.
$$

Cancel $$v_0$$ to get $$\cos\theta=1/2$$, so $$\theta=60^\circ$$. The answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
3. Two projectiles are launched from the same point with the same speed at complementary angles $$\theta$$ and $$90^\circ-\theta$$, where $$0<\theta<45^\circ$$. On level ground, the projectile launched at the larger angle has

(A) the same range and a longer flight time

(B) the same range and a shorter flight time

(C) a longer range and a longer flight time

(D) a shorter range and a shorter flight time


:::solution
For level-ground projectile motion, range depends on $$\sin 2\theta$$, while flight time depends on the vertical component $$v_0\sin\theta$$.

Complementary launch angles have the same range because

$$
\sin(2(90^\circ-\theta))=\sin(180^\circ-2\theta)=\sin2\theta.
$$

The larger angle has a larger vertical component, so it stays in the air longer. Therefore the answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
4. A particle has $$x(t)=At^3-Bt$$ with $$A,B>0$$. At the instant when the particle's velocity is zero, its acceleration is

(A) zero

(B) $$2\sqrt{3AB}$$

(C) $$6\sqrt{B/(3A)}$$

(D) $$6A\sqrt{B/(3A)}$$


:::solution
Velocity is the derivative of position, and acceleration is the derivative of velocity. Start from

$$
x(t)=At^3-Bt.
$$

Then

$$
v(t)=\frac{dx}{dt}=3At^2-B.
$$

The instant requested is when $$v=0$$:

$$
3At^2-B=0 \quad\Rightarrow\quad t=\sqrt{\frac{B}{3A}}.
$$

Now evaluate the acceleration $$a(t)=dv/dt=6At$$ at that time:

$$
a=6A\sqrt{\frac{B}{3A}}.
$$

So the answer is $$\boxed{\text{D}}$$.
:::
::::

::::problem
5. A particle moves in the plane with $$x=bt$$ and $$y=ct^2-dt^3$$. At the instant when $$v_y=0$$, the acceleration vector points

(A) purely horizontal

(B) upward

(C) downward

(D) tangent to the trajectory


:::solution
The horizontal motion is uniform because $$x=bt$$, so the direction of the acceleration comes entirely from the vertical coordinate.


Differentiate $$y=ct^2-dt^3$$:

$$
v_y=2ct-3dt^2,
\qquad
a_y=2c-6dt.
$$

The nonzero instant when $$v_y=0$$ is

$$
2ct-3dt^2=0
\quad\Rightarrow\quad
 t=\frac{2c}{3d}.
$$

At that time,

$$
a_y=2c-6d\left(\frac{2c}{3d}\right)=-2c.
$$

Since $$c>0$$, this is downward. The answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
6. A runner moves so that her speed depends on position according to $$v=v_0+kx$$, where $$v_0,k>0$$. Her acceleration as a function of position is

(A) $$k$$

(B) $$k(v_0+kx)$$

(C) $$k/(v_0+kx)$$

(D) $$v_0+kx$$


:::solution
Because the speed is given as a function of position, use the chain-rule form

$$
a=\frac{dv}{dt}=\frac{dv}{dx}\frac{dx}{dt}=v\frac{dv}{dx}.
$$

Here

$$
v=v_0+kx,
\qquad
\frac{dv}{dx}=k.
$$

Therefore

$$
a=(v_0+kx)k=k(v_0+kx).
$$

The answer is $$\boxed{\text{B}}$$.

The units also check: $$k$$ has units of inverse time because $$kx$$ is a speed, so $$k(v_0+kx)$$ has units of acceleration.
:::
::::

::::problem
7. A particle has $$v(t)=v_0-\beta t^2$$ with $$v_0,\beta>0$$. Which expression gives the distance traveled from $$t=0$$ until the particle first stops?

(A) $$\int_0^{\sqrt{v_0/\beta}}(v_0-\beta t^2)\,dt$$

(B) $$\int_0^{v_0/\beta}(v_0-\beta t^2)\,dt$$

(C) $$\int_0^{\sqrt{v_0/\beta}}\lvert -2\beta t\rvert\,dt$$

(D) $$v_0\sqrt{v_0/\beta}$$


:::solution
Distance is the integral of speed. Since the particle moves in the positive direction until it first stops, velocity and speed are the same on that interval.


Find the stopping time:

$$
v_0-\beta t^2=0
\quad\Rightarrow\quad
 t=\sqrt{\frac{v_0}{\beta}}.
$$

So the distance traveled is

$$
\int_0^{\sqrt{v_0/\beta}}(v_0-\beta t^2)\,dt.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
8. A particle moves along the $$x$$-axis with velocity $$v(t)=v_0-\alpha t^2$$, where $$v_0,\alpha>0$$. At what time is the particle's displacement from its starting point greatest?

(A) $$t=\sqrt{v_0/\alpha}$$

(B) $$t=v_0/\alpha$$

(C) $$t=\sqrt{v_0/(3\alpha)}$$

(D) $$t=2v_0/\alpha$$


:::solution
Displacement from the start increases while $$v>0$$ and decreases once $$v<0$$. Therefore the greatest displacement occurs exactly when the velocity first reaches zero.


Set

$$
v_0-\alpha t^2=0.
$$

This gives

$$
t=\sqrt{\frac{v_0}{\alpha}}.
$$

So the answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
9. A boat always points directly across a river of width $$W$$ with speed $$v_b$$ relative to the water. The current is parallel to the banks and has speed $$u(y)=u_0y/W$$, where $$y$$ is distance across the river. Compared with a river whose current is everywhere $$u_0/2$$, the boat's downstream drift is

(A) smaller

(B) the same

(C) larger

(D) impossible to compare without $$v_b$$


:::solution
The boat's across-river speed is constant, so its position across the river is $$y=v_bt$$. The downstream drift is the integral of the current speed over the crossing time.

The crossing time is $$W/v_b$$, so

$$
\Delta x=\int_0^{W/v_b} u(y(t))\,dt
=\int_0^{W/v_b}\frac{u_0v_bt}{W}\,dt
=\frac{u_0W}{2v_b}.
$$

A uniform current $$u_0/2$$ for the same time gives

$$
\Delta x=\frac{u_0}{2}\frac{W}{v_b}=\frac{u_0W}{2v_b}.
$$

The drifts are the same, so the answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
10. A projectile is launched from level ground and lands back at the same height a fixed horizontal distance $$R$$ away. The launch speed is increased while $$R$$ is kept the same. Compared with the original two possible launch angles, the new two possible launch angles

(A) move closer to $$45^\circ$$

(B) move farther from $$45^\circ$$

(C) both increase

(D) both decrease


:::solution
For level-ground projectile range,

$$
R=\frac{v_0^2\sin2\theta}{g}.
$$

If $$R$$ is fixed while $$v_0$$ increases, then $$\sin2\theta$$ must decrease.

The two possible angles are complementary, one below $$45^\circ$$ and one above $$45^\circ$$. Decreasing $$\sin2\theta$$ pushes them farther away from $$45^\circ$$. Thus the answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
11. A particle moves along the $$x$$-axis with acceleration $$a(x)=\alpha x$$ and starts at $$x=x_0>0$$ from rest. Which expression gives its speed at $$x=2x_0$$?

(A) $$\sqrt{\alpha x_0^2}$$

(B) $$\sqrt{3\alpha x_0^2}$$

(C) $$\sqrt{4\alpha x_0^2}$$

(D) $$\sqrt{6\alpha x_0^2}$$


:::solution
Since acceleration is given as a function of position, use

$$
a=v\frac{dv}{dx}.
$$

Then

$$
v\,dv=\alpha x\,dx.
$$

Integrate from $$x=x_0$$, $$v=0$$ to $$x=2x_0$$, $$v=v_f$$:

$$
\int_0^{v_f}v\,dv=\int_{x_0}^{2x_0}\alpha x\,dx.
$$

This gives

$$
\frac12v_f^2=\frac{\alpha}{2}(4x_0^2-x_0^2)=\frac{3\alpha x_0^2}{2}.
$$

So $$v_f=\sqrt{3\alpha x_0^2}$$, and the answer is $$\boxed{\text{B}}$$.

This also makes physical sense: because $$a=\alpha x$$ grows as the particle moves right, the speed gain from $$x_0$$ to $$2x_0$$ is larger than it would be for constant acceleration equal to $$\alpha x_0$$.
:::
::::

::::problem
12. A particle moves in one dimension with acceleration $$a=-kv^2$$ when $$v>0$$, where $$k>0$$. Which statement must be true while the particle is moving in the positive direction?

(A) The velocity-time graph is a straight line.

(B) The velocity decreases, but the magnitude of the slope decreases as the particle slows.

(C) The acceleration is constant and negative.

(D) Equal decreases in speed take equal amounts of time.


:::solution
The acceleration is negative because the particle is moving in the positive direction but $$a=-kv^2$$.


The slope of a velocity-time graph is acceleration. Since

$$
\lvert a\rvert=kv^2,
$$

the magnitude of the slope is large when the particle is fast and smaller after it slows down. Therefore the velocity decreases, but the slope becomes less steep in magnitude. The answer is $$\boxed{\text{B}}$$.
:::
::::

#### FRQ

::::frq{id=ap-physics-c-mechanics-kinematics-1}
1. A bead moves along a straight track with acceleration $$a(x)=\alpha x-\beta$$, where $$\alpha$$ and $$\beta$$ are positive constants. At $$x=0$$, the bead has speed $$v_0$$ in the positive direction.

   $$(A)$$ Derive an expression for $$v^2$$ as a function of $$x$$.

   $$(B)$$ Find the condition on $$v_0$$ for the bead to reach $$x=\beta/\alpha$$.

   $$(C)$$ If the bead turns around before reaching $$x=\beta/\alpha$$, determine the turning point.

   $$(D)$$ Explain how the result changes if the bead initially moves in the negative direction.


:::solution
$$(A)$$ Since acceleration is given as a function of position, use the chain-rule version of acceleration:

$$
a=\frac{dv}{dt}=\frac{dv}{dx}\frac{dx}{dt}=v\frac{dv}{dx}.
$$


Thus

$$
v\frac{dv}{dx}=\alpha x-\beta.
$$

Integrating from $$x=0,\,v=v_0$$ to a general position $$x$$ gives

$$
\int_{v_0}^{v}v\,dv=\int_0^x(\alpha x-\beta)\,dx,
$$

so

$$
\frac12(v^2-v_0^2)=\frac12\alpha x^2-\beta x.
$$

Therefore

$$
\boxed{v^2=v_0^2+\,\alpha x^2-2\beta x}.
$$

$$(B)$$ To reach $$x=\beta/\alpha$$, the expression for $$v^2$$ must still be nonnegative there:

$$
v^2=v_0^2+\alpha\left(\frac{\beta}{\alpha}\right)^2-2\beta\left(\frac{\beta}{\alpha}\right)
=v_0^2-\frac{\beta^2}{\alpha}.
$$

So the condition is

$$
\boxed{v_0\ge \frac{\beta}{\sqrt{\alpha}}}.
$$

$$(C)$$ A turning point occurs when the bead's speed reaches zero before that location:

$$
0=v_0^2+\alpha x^2-2\beta x.
$$

Using the quadratic formula,

$$
x=\frac{\beta\pm\sqrt{\beta^2-\alpha v_0^2}}{\alpha}.
$$

The first point encountered while moving right is the smaller root:

$$
\boxed{x=\frac{\beta-\sqrt{\beta^2-\alpha v_0^2}}{\alpha}}.
$$

$$(D)$$ The equation for $$v^2(x)$$ is unchanged because it came from the same force field and energy-like integral. What changes is the direction of motion. If the bead initially moves negative, it heads toward $$x<0$$, where $$\alpha x-\beta$$ is still negative, so the acceleration is also negative and the bead speeds up to the left rather than approaching $$x=\beta/\alpha$$.
:::
::::

::::frq{id=ap-physics-c-mechanics-kinematics-2}
2. A projectile is launched from a cliff of height $$H$$ with initial speed $$v_0$$ at angle $$\theta$$ above horizontal. A horizontal wind causes constant acceleration $$a_w$$ in the same direction as the projectile's horizontal velocity.

   $$(A)$$ Derive expressions for $$x(t)$$ and $$y(t)$$.

   $$(B)$$ Find an equation for the time when the projectile reaches the ground.

   $$(C)$$ Derive the horizontal distance from the base of the cliff where the projectile lands.

   $$(D)$$ Determine whether increasing $$a_w$$ changes the time of flight, and justify your answer.


:::solution
$$(A)$$ Horizontal and vertical accelerations are independent. The wind changes only the horizontal acceleration, while gravity changes only the vertical acceleration.

Thus

$$
\boxed{x(t)=v_0\cos\theta\,t+\frac12a_wt^2},
\qquad
\boxed{y(t)=H+v_0\sin\theta\,t-\frac12gt^2}.
$$

$$(B)$$ The projectile reaches the ground when its vertical position is zero, so the time of flight is determined by

$$
\boxed{0=H+v_0\sin\theta\,t-\frac12gt^2}.
$$

Use the positive root because time after launch must be positive.

$$(C)$$ Once the positive root $$t_f$$ is found from the vertical equation, substitute it into the horizontal equation:

$$
\boxed{x_f=v_0\cos\theta\,t_f+\frac12a_wt_f^2}.
$$

This is the horizontal distance from the base of the cliff because the launch point was chosen directly above the base.

$$(D)$$ Increasing $$a_w$$ does not change the time of flight because $$a_w$$ does not appear in the vertical equation. It does increase the horizontal distance, since the horizontal velocity grows during the flight.
:::
::::

::::frq{id=ap-physics-c-mechanics-kinematics-3}
3. A particle moves along the $$x$$-axis. From $$t=0$$ to $$t=T$$, its velocity is $$v(t)=v_0(1-t/T)^2$$. From $$t=T$$ to $$t=2T$$, its acceleration is constant and chosen so the particle returns to its starting position at $$t=2T$$.

   $$(A)$$ Find the displacement during the first interval.

   $$(B)$$ Determine the velocity at $$t=T$$.

   $$(C)$$ Find the constant acceleration during the second interval.

   $$(D)$$ Sketch the velocity-time graph, labeling intercepts and areas with signs.


:::solution
$$(A)$$ Displacement is the signed area under the velocity-time graph.


So

$$
\Delta x_1=\int_0^T v_0\left(1-\frac{t}{T}\right)^2dt.
$$

Let $$u=1-t/T$$, or expand the square; either way,

$$
\Delta x_1=\boxed{\frac{v_0T}{3}}.
$$

$$(B)$$ At $$t=T$$,

$$
v(T)=v_0(1-1)^2=\boxed{0}.
$$

$$(C)$$ The particle must return to its starting point by $$t=2T$$, so the second interval must have displacement $$-v_0T/3$$. It starts that interval from rest and has constant acceleration for time $$T$$:

$$
\Delta x_2=0\cdot T+\frac12aT^2=-\frac{v_0T}{3}.
$$

Solving,

$$
\boxed{a=-\frac{2v_0}{3T}}.
$$

$$(D)$$ From $$0$$ to $$T$$, the graph is a positive decreasing parabola with area $$+v_0T/3$$. From $$T$$ to $$2T$$, the graph is a straight line below the axis, ending at $$v=-2v_0/3$$, and its triangular area is $$-v_0T/3$$. The positive and negative areas cancel, which matches the return to the starting position.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,patterns}
\begin{tikzpicture}[>=Stealth, font=\small, x=2.0cm, y=2.0cm]
  \draw[->] (0,0) -- (2.25,0) node[right] {$t$};
  \draw[->] (0,-0.9) -- (0,1.25) node[above] {$v$};
  \draw[very thick, blue!70, domain=0:1, samples=60] plot (\x,{(1-\x)^2});
  \draw[very thick, blue!70] (1,0) -- (2,-0.667);
  \draw[dashed] (1,-0.8) -- (1,1.1) node[above] {$T$};
  \draw[dashed] (2,-0.667) -- (2,0) node[above right] {$2T$};
  \node[left] at (0,1) {$v_0$};
  \node[left] at (0,-0.667) {$-2v_0/3$};
\end{tikzpicture}
```
:::
::::

## Unit 2: Force and Translational Dynamics

[Full notes →](/notes/ap/ap-physics-c-mechanics/forces/)

### Practice

#### Multiple Choice

::::problem
1. A block of mass $$m$$ rests on a small platform scale mounted on an incline of angle $$\theta$$. The wedge and scale are at rest, and static friction prevents slipping.

If the scale measures the normal force on the block, its reading is

(A) $$mg\sin\theta$$

(B) $$mg\cos\theta$$

(C) $$mg\tan\theta$$

(D) $$mg$$


:::solution
Draw axes parallel and perpendicular to the incline. The scale can only push perpendicular to its surface, so its reading is the normal force $$N$$.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,decorations.pathmorphing}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.85]
  \draw[thick] (0,0) -- (4.4,1.7);
  \draw[dashed] (0,0) -- (4.4,0);
  \draw (0.75,0) arc[start angle=0,end angle=21,radius=0.75] node[midway,right] {$\theta$};
  \begin{scope}[shift={(2.15,0.83)}, rotate=21]
    \draw[fill=gray!30, thick] (-0.58,0) rectangle (0.58,0.1);
    \draw[fill=blue!10, thick] (-0.48,0.1) rectangle (0.48,0.7);
    \coordinate (c) at (0,0.4);
    \draw[->, thick] (c) -- ++(0,1.3) node[above] {$N$};
    \draw[->, thick, green!55!black] (0,0.1) -- ++(1.25,0) node[above] {$f_s$};
  \end{scope}
  \draw[->, thick] (c) -- ++(0,-1.35) node[below] {$mg$};
\end{tikzpicture}
```

The block has no acceleration perpendicular to the plane. The perpendicular component of gravity is $$mg\cos\theta$$ into the scale, while static friction acts along the incline and has no perpendicular component. Therefore

$$
N-mg\cos\theta=0.
$$

So the scale reads $$N=mg\cos\theta$$, and the answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
2. A block is pressed against a vertical wall by a horizontal force $$F$$. The coefficient of static friction is $$\mu_s$$. The smallest $$F$$ that can keep the block from sliding is

(A) $$mg$$

(B) $$\mu_s mg$$

(C) $$mg/\mu_s$$

(D) $$\mu_s/g$$


:::solution

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,decorations.pathmorphing}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.85]
  \fill[gray!20] (2.25,0) rectangle (2.43,2.6);
  \draw[thick] (2.25,0) -- (2.25,2.6);
  \draw[fill=blue!10, thick] (1.15,0.95) rectangle (2.25,1.75);
  \coordinate (c) at (1.7,1.35);
  \draw[->, thick, red!75] (c) -- ++(1.0,0) node[right] {$F$};
  \draw[->, thick] (c) -- ++(-1.0,0) node[left] {$N$};
  \draw[->, thick] (c) -- ++(0,-1.15) node[below] {$mg$};
  \draw[->, thick, green!55!black] (c) -- ++(0,1.15) node[above] {$f_s$};
\end{tikzpicture}
```

The applied force presses the block horizontally into the wall, so the wall pushes back with normal force $$N$$. Since there is no horizontal acceleration,

$$
N=F.
$$

The block would tend to slide downward, so static friction points upward. The largest available static friction is $$f_{s,\max}=\mu_sN=\mu_sF$$. To barely keep the block from sliding,

$$
\mu_sF=mg.
$$

Note that friction would act on the contacting surface but is drawn in the middle of the block for a clearer demonstration. Thus the smallest force is $$F=mg/\mu_s$$, so the answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
3. Two blocks of masses $$m$$ and $$2m$$ are connected by a light string and pulled across a frictionless table by force $$F$$ applied to the $$2m$$ block. The tension in the string is

(A) $$F/3$$

(B) $$F/2$$

(C) $$2F/3$$

(D) $$F$$


:::solution
First find the acceleration of the whole system, because both blocks share the same acceleration.

For the two blocks together, the string tension is internal and cancels, so the only external horizontal force is $$F$$ on total mass $$3m$$:

$$
F=(3m)a \quad\Rightarrow\quad a=\frac{F}{3m}.
$$

Now look only at the $$m$$ block. The only horizontal force on it is tension, so

$$
T=ma=m\left(\frac{F}{3m}\right)=\frac{F}{3}.
$$

Therefore the answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
4. A falling object experiences drag force $$bv$$ upward. Taking downward as positive, which differential equation describes the motion?

(A) $$m\dfrac{dv}{dt}=mg+bv$$

(B) $$m\dfrac{dv}{dt}=mg-bv$$

(C) $$m\dfrac{dv}{dt}=bv-mg$$

(D) $$m\dfrac{dv}{dt}=-mg-bv$$


:::solution
The sign convention is the whole problem. Since downward is positive, gravity is a positive force and drag is negative because it acts upward while the object falls downward.

Newton's second law gives

$$
\sum F_y=mg-bv=m\frac{dv}{dt}.
$$

So the correct differential equation is $$m\dfrac{dv}{dt}=mg-bv$$, and the answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
5. A block of mass $$m$$ sits on a rough incline of angle $$\theta$$. A horizontal force $$F$$ pushes the block into the incline. Which change most directly increases the maximum possible static friction?

(A) Decreasing $$F$$

(B) Increasing $$F$$

(C) Decreasing $$m$$ while keeping $$F$$ fixed

(D) Making the incline frictionless


:::solution
The maximum static friction is not a separate force law; it is a limit:

$$
f_s\le \mu_sN.
$$

So to increase the largest possible static friction, you need to increase the normal force. A horizontal push into the incline has a component perpendicular to the surface, so it presses the block harder into the plane.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,decorations.pathmorphing}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.85]
  \draw[thick] (0,0) -- (4.4,1.7);
  \draw[dashed] (0,0) -- (4.4,0);
  \draw (0.75,0) arc[start angle=0,end angle=21,radius=0.75] node[midway,right] {$\theta$};
  \begin{scope}[shift={(2.15,0.83)}, rotate=21]
    \draw[fill=blue!10, thick] (-0.5,0) rectangle (0.5,0.6);
    \coordinate (c) at (0,0.3);
    \draw[->, thick] (c) -- ++(0,1.3) node[above] {$N$};
  \end{scope}
  \draw[->, thick] (c) -- ++(0,-1.35) node[below] {$mg$};
  \draw[->, thick, red!75] (c) -- ++(1.45,0) node[right] {$F$};
\end{tikzpicture}
```

Increasing $$F$$ therefore increases $$N$$ and increases $$f_{s,\max}=\mu_sN$$. The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
6. A pendulum bob hangs motionless relative to a train accelerating horizontally with magnitude $$a$$. If the string makes angle $$\theta$$ with the vertical and the tension is $$T$$, which pair of equations is consistent with the bob's rest in the *train's* frame?

(A) $$T\sin\theta=ma$$ and $$T\cos\theta=mg$$

(B) $$T\cos\theta=ma$$ and $$T\sin\theta=mg$$

(C) $$T=mg$$ and $$\tan\theta=a/g$$

(D) $$T=ma$$ and $$\tan\theta=g/a$$


:::solution
In the ground frame, the bob is not vertically accelerating, but it shares the train's horizontal acceleration $$a$$. Break the tension into horizontal and vertical components:

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, font=\small]
  \coordinate (O) at (0,2.2); \coordinate (B) at (-0.8,0.4);
  \draw[dashed] (O) -- ++(0,-2.3);
  \draw[thick] (O) -- (B);
  \fill[blue!65] (B) circle (4pt);
  \draw[->, thick] (B) -- (O) node[midway,left] {$T$};
  \draw[->, thick] (B) -- ++(0,-1.15) node[below] {$mg$};
  \draw[->, red!75, thick] (B) -- ++(1.2,0) node[right] {$a$};
  \draw[->, blue!70] (B) -- ++(0,1.35) node[above] {$T\cos\theta$};
  \draw[->, blue!70] (B) -- ++(0.6,0) node[below right] {$T\sin\theta$};
  \draw (0,1.72) arc[start angle=-90,end angle=-114,radius=0.48];
  \node at (-0.12,1.43) {$\theta$};
\end{tikzpicture}
```

The horizontal component of tension is what accelerates the bob:

$$
T\sin\theta=ma.
$$

The vertical component balances weight because there is no vertical acceleration:

$$
T\cos\theta=mg.
$$

Thus the answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
7. A car travels over the top of a circular hill of radius $$R$$. At the top, the driver feels an apparent weight equal to one-third of their normal weight. The car's speed is

(A) $$\sqrt{gR/3}$$

(B) $$\sqrt{2gR/3}$$

(C) $$\sqrt{gR}$$

(D) $$\sqrt{4gR/3}$$


:::solution
At the top of the hill, the center of the circle is downward. That means the required centripetal acceleration points downward.

The driver feels apparent weight through the normal force, so $$N=mg/3$$. Taking downward as the radial positive direction,

$$
mg-N=\frac{mv^2}{R}.
$$

Substitute $$N=mg/3$$:

$$
mg-\frac{mg}{3}=\frac{mv^2}{R}
\quad\Rightarrow\quad
\frac{2g}{3}=\frac{v^2}{R}.
$$

So $$v=\sqrt{2gR/3}$$, and the answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
8. A bead slides on a frictionless circular hoop in a vertical plane. At the side of the hoop, its speed is $$v$$. The normal force magnitude is

(A) $$mg$$

(B) $$mv^2/R$$

(C) $$mg+mv^2/R$$

(D) $$\sqrt{(mg)^2+(mv^2/R)^2}$$


:::solution
At the side of the hoop, the radial direction points horizontally toward the center. Gravity points straight down, which is tangent to the circle at that point, not radial.


Since gravity has no radial component there, the normal force alone supplies the centripetal force:

$$
N=\frac{mv^2}{R}.
$$

Therefore the answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
9. An elevator accelerates upward with magnitude $$a$$. Inside it, a mass $$m$$ hangs from a spring scale while a horizontal force $$F$$ pulls the mass sideways so the supporting string makes angle $$\phi$$ with the vertical. The tension in the string is

(A) $$m(g+a)$$

(B) $$\dfrac{m(g+a)}{\cos\phi}$$

(C) $$\dfrac{mg}{\cos\phi}$$

(D) $$m\sqrt{g^2+a^2}$$


:::solution
The scale reads the string tension $$T$$, not just the vertical component of tension. Since the mass accelerates upward with the elevator, the vertical forces cannot simply balance.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, font=\small]
  \draw[fill=gray!5, thick] (-1.8,-1.35) rectangle (1.8,2.4);
  \node[gray!70] at (-1.05,2.1) {elevator};
  \coordinate (O) at (0,2.0); \coordinate (M) at (0.75,0.3);
  \fill (O) circle (2pt);
  \draw[dashed] (O) -- ++(0,-1.9);
  \draw[thick] (O) -- (M); \fill[blue!65] (M) circle (4pt) node[below right] {$m$};
  \draw[->, thick] (M) -- (O) node[midway,right] {$T$};
  \draw[->, thick] (M) -- ++(0,-1.1) node[below] {$mg$};
  \draw[->, thick, red!75] (M) -- ++(1.1,0) node[below right] {$F$};
  \draw[->, blue!70] (M) -- ++(0,1.25) node[above] {$T\cos\phi$};
  \draw[->, blue!70] (M) -- ++(-0.55,0) node[below] {$T\sin\phi$};
  \draw (0,1.52) arc[start angle=-90,end angle=-66,radius=0.48];
  \node at (0.13,1.23) {$\phi$};
  \draw[->, red!75, thick] (2.05,0.4) -- ++(0,1.0) node[above] {$a$};
\end{tikzpicture}
```

The vertical component of tension is $$T\cos\phi$$. Applying Newton's second law vertically,

$$
T\cos\phi-mg=ma.
$$

Solving for the full tension gives

$$
T=\frac{m(g+a)}{\cos\phi}.
$$

So the answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
10. A block rests on a scale mounted on a wedge inclined at angle $$\theta$$. The wedge accelerates horizontally to the right with magnitude $$a$$, and the incline rises to the right. The block remains at rest relative to the scale. If the scale measures the normal force on the block, its reading is

(A) $$m(g\cos\theta-a\sin\theta)$$

(B) $$m(g\cos\theta+a\sin\theta)$$

(C) $$m(g\sin\theta+a\cos\theta)$$

(D) $$m(g+a)\cos\theta$$


:::solution
The block stays fixed relative to the wedge, so in the ground frame it accelerates horizontally with the wedge. The scale reading is still the normal force perpendicular to the incline.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,decorations.pathmorphing}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.85]
  \draw[fill=gray!8, thick] (0,0) -- (4.4,0) -- (4.4,1.7) -- cycle;
  \draw[dashed] (0,0) -- (4.4,0);
  \draw (0.75,0) arc[start angle=0,end angle=21,radius=0.75] node[midway,right=2pt] {$\theta$};
  \begin{scope}[shift={(2.15,0.83)}, rotate=21]
    \draw[fill=gray!30, thick] (-0.58,0) rectangle (0.58,0.12);
    \draw[fill=blue!10, thick] (-0.48,0.12) rectangle (0.48,0.72);
    \coordinate (c) at (0,0.42);
    \draw[->, thick] (c) -- ++(0,1.25) node[above] {$N$};
  \end{scope}
  \draw[->, thick] (c) -- ++(0,-1.3) node[below] {$mg$};
  \draw[->, thick, red!75] (3.15,2.0) -- ++(1.0,0) node[right] {$a$};
\end{tikzpicture}
```

Take the outward normal direction from the incline as positive. The normal component of the block's horizontal acceleration is $$-a\sin\theta$$ because the wedge's acceleration has a component into the plane. Newton's second law perpendicular to the incline is

$$
N-mg\cos\theta=m(-a\sin\theta).
$$

Therefore

$$
N=m(g\cos\theta-a\sin\theta),
$$

so the answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
11. A small mass moves in a vertical circle on a string of length $$R$$. Its speeds at the bottom and top are $$v_b$$ and $$v_t$$, and the corresponding string tensions are $$T_b$$ and $$T_t$$. Which relation follows from Newton's second law in the radial direction?

(A) $$T_b-T_t=\dfrac{m(v_b^2-v_t^2)}{R}+2mg$$

(B) $$T_b-T_t=\dfrac{m(v_b^2-v_t^2)}{R}$$

(C) $$T_b+T_t=\dfrac{m(v_b^2+v_t^2)}{R}$$

(D) $$T_b-T_t=2mg-\dfrac{m(v_b^2-v_t^2)}{R}$$


:::solution
Write the radial equation separately at the bottom and top, always taking inward toward the center as positive.

At the bottom,

$$
T_b-mg=\frac{mv_b^2}{R}.
$$

At the top, both tension and gravity point inward, so

$$
T_t+mg=\frac{mv_t^2}{R}.
$$

Rearrange these as $$T_b=mv_b^2/R+mg$$ and $$T_t=mv_t^2/R-mg$$. Subtracting gives

$$
T_b-T_t=\frac{m(v_b^2-v_t^2)}{R}+2mg.
$$

Thus the answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
12. A block of mass $$m$$ rests on the floor of an elevator that accelerates upward with magnitude $$a_y$$ while also accelerating horizontally with magnitude $$a_x$$. The block does not slip relative to the floor. The minimum coefficient of static friction required is

(A) $$\dfrac{a_x}{g+a_y}$$

(B) $$\dfrac{a_x}{g}$$

(C) $$\dfrac{g+a_y}{a_x}$$

(D) $$\dfrac{\sqrt{a_x^2+(g+a_y)^2}}{g}$$


:::solution
The floor pushes up with normal force $$N$$ and horizontally with static friction $$f_s$$. The block shares both components of the elevator's acceleration.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, font=\small]
  \draw[fill=gray!5, thick] (-1.5,-1.3) rectangle (1.5,1.35);
  \draw[thick] (-1.3,-0.45) -- (1.3,-0.45);
  \draw[fill=blue!10, thick] (-0.45,-0.45) rectangle (0.45,0.25);
  \coordinate (c) at (0,-0.1);
  \draw[->, thick] (c) -- ++(0,1.15) node[right] {$N$};
  \draw[->, thick] (c) -- ++(0,-1.15) node[below] {$mg$};
  \draw[->, thick, green!55!black] (c) -- ++(1.15,0) node[above] {$f_s$};
  \draw[->, red!75, thick] (1.75,0.35) -- ++(0.75,0.75) node[right] {$\vec a$};
  \node[gray!70] at (-0.75,1.05) {elevator};
\end{tikzpicture}
```

Vertically, the block accelerates upward, so

$$
N-mg=ma_y.
$$

This is why the normal force is $$N=m(g+a_y)$$: it must both support the weight and provide the extra upward acceleration. Horizontally, static friction is the only force accelerating the block, so $$f_s=ma_x$$. For no slipping,

$$
f_s\le \mu_sN
\quad\Rightarrow\quad
ma_x\le \mu_s m(g+a_y).
$$

Thus $$\mu_s\ge a_x/(g+a_y)$$, so the answer is $$\boxed{\text{A}}$$.
:::
::::

#### FRQ

::::frq{id=ap-physics-c-mechanics-forces-1}
1. A block of mass $$m$$ is inside a box that accelerates horizontally with acceleration $$a$$. The block is pressed against the box's vertical wall and does not slip. The coefficient of static friction between the block and wall is $$\mu_s$$.

   $$(A)$$ Draw a free-body diagram for the block in the ground frame.

   $$(B)$$ Derive the normal force exerted by the wall on the block.

   $$(C)$$ Determine the condition on $$a$$ for the block not to slide down.

   $$(D)$$ If the box also accelerates upward with acceleration $$a_y$$, derive the new no-slip condition.


:::solution
$$(A)$$ The block is accelerating horizontally with the box, so the wall must push it horizontally. The block would slide downward without friction, so static friction points upward.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,decorations.pathmorphing}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.85]
  \draw[fill=gray!5, thick] (0,0) rectangle (3.2,2.6);
  \fill[gray!20] (0,0) rectangle (0.22,2.6);
  \draw[fill=blue!10, thick] (0.22,0.95) rectangle (1.32,1.75);
  \coordinate (c) at (0.77,1.35);
  \draw[->, thick] (c) -- ++(1.15,0) node[right] {$N$};
  \draw[->, thick] (c) -- ++(0,-1.15) node[right] {$mg$};
  \draw[->, thick, green!55!black] (c) -- ++(0,1.15) node[above] {$f_s$};
  \draw[->, thick, red!75] (1.55,2.25) -- ++(1.15,0) node[right] {$a$};
\end{tikzpicture}
```

Thus the forces on the block are weight $$mg$$ downward, normal force $$N$$ from the wall horizontally, and static friction $$f_s$$ upward. Note that friction would act on the contacting surface but is drawn in the middle of the block for a clearer demonstration.

$$(B)$$ Horizontally,

$$
\boxed{N=ma}.
$$

This equation is not a friction condition; it is just Newton's second law in the horizontal direction. The normal force is the only horizontal force on the block, so it must provide the block's horizontal acceleration.

$$(C)$$ To avoid sliding,

$$
mg\le \mu_sN=\mu_sma,
$$

so

$$
\boxed{a\ge \frac{g}{\mu_s}}.
$$

At the threshold, static friction is at its maximum. If $$a$$ is smaller than this, then $$N=ma$$ is too small, so $$\mu_sN$$ cannot support the weight.

$$(D)$$ If the box accelerates upward, the required friction is $$m(g+a_y)$$. Since $$N=ma$$,

$$
m(g+a_y)\le \mu_sma,
$$

so

$$
\boxed{a\ge \frac{g+a_y}{\mu_s}}.
$$

The upward acceleration increases the required upward net force. Friction must now both balance gravity and create upward acceleration, which is why $$g$$ becomes $$g+a_y$$.
:::
::::

::::frq{id=ap-physics-c-mechanics-forces-2}
2. A bead of mass $$m$$ slides without friction on a circular hoop of radius $$R$$ fixed in a vertical plane. At an angle $$\theta$$ measured from the bottom, the bead has speed $$v$$

   $$(A)$$ Draw a force diagram for the bead.

   $$(B)$$ Write Newton's second law in the radial direction.

   $$(C)$$ Write Newton's second law in the tangential direction.

   $$(D)$$ At angle $$\theta$$, determine the speed at which the bead would just lose contact with the hoop, if such a speed is possible.


:::solution
$$(A)$$ The bead only touches the hoop, so the contact force is normal to the hoop. Since the hoop is frictionless, there is no tangential contact force.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.95]
  \coordinate (O) at (0,0); \coordinate (B) at (0.95,-0.95); \coordinate (D) at (0,-1.35);
  \draw[thick] (O) circle (1.35); \fill (O) circle (1.5pt);
  \draw[dashed] (O) -- (D); \draw[dashed] (O) -- (B);
  \fill[blue!65] (B) circle (4pt);
  \draw[->, thick] (B) -- (0.18,-0.18) node[midway,above] {$N$};
  \draw[->, thick] (B) -- ++(0,-1.15) node[below] {$mg$};
  \draw pic[draw, "$\theta$", angle radius=0.45cm] {angle=D--O--B};
\end{tikzpicture}
```

The forces are weight $$mg$$ downward and normal force $$N$$ along the radius.

$$(B)$$ Taking inward as positive,

$$
\boxed{N-mg\cos\theta=\frac{mv^2}{R}}.
$$

The term $$mg\cos\theta$$ appears because the angle is measured from the bottom, so the component of gravity along the outward radial direction is $$mg\cos\theta$$. With inward positive, that component enters with a minus sign.

$$(C)$$ Taking increasing $$\theta$$ as positive tangential direction,

$$
\boxed{-mg\sin\theta=ma_t}.
$$

The normal force has no tangential component, so only gravity changes the bead's speed along the hoop.

$$(D)$$ Loss of contact means $$N=0$$, so

$$
-mg\cos\theta=\frac{mv^2}{R}.
$$

Thus

$$
\boxed{v=\sqrt{-gR\cos\theta}},
$$

which is possible only when $$\cos\theta\le0$$.

That condition says the bead can only lose contact in the upper half of the hoop. In the lower half, gravity's radial component points the wrong way to supply the required inward centripetal acceleration by itself.
:::
::::

::::frq{id=ap-physics-c-mechanics-forces-3}
3. A mass $$m$$ falls from rest through a fluid with drag force $$F_d=bv$$ upward. Take downward as positive.

   $$(A)$$ Write the differential equation for $$v(t)$$.

   $$(B)$$ Determine the terminal speed.

   $$(C)$$ Without solving fully for $$v(t)$$, determine whether the acceleration is increasing, decreasing, or constant as the object falls.

   $$(D)$$ Design a linear graph that could be used to determine $$b$$ from measurements of speed and acceleration.


:::solution
$$(A)$$ Taking downward as positive, gravity is positive and drag is negative because it points opposite the downward velocity.


$$
\boxed{m\frac{dv}{dt}=mg-bv}.
$$

$$(B)$$ At terminal speed, the velocity is no longer changing, so $$dv/dt=0$$. The drag force has grown large enough to balance the weight:

$$
\boxed{v_t=\frac{mg}{b}}.
$$

$$(C)$$ Divide the differential equation by $$m$$:

$$
a=\frac{dv}{dt}=g-\frac{b}{m}v.
$$

As the object speeds up, $$v$$ increases, so the drag term $$bv/m$$ increases. Therefore the acceleration decreases, approaching zero as $$v$$ approaches terminal speed.

$$(D)$$ Graph $$a$$ on the vertical axis versus $$v$$ on the horizontal axis.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, font=\small, x=2.0cm, y=1.7cm]
  \draw[->] (0,0) -- (2.25,0) node[right] {$v$};
  \draw[->] (0,0) -- (0,1.35) node[above] {$a$};
  \draw[very thick, blue!70] (0,1) node[left] {$g$} -- (1.65,0) node[below] {$v_t=mg/b$};
  \node[blue!70, rotate=-27] at (0.95,0.62) {slope $=-b/m$};
\end{tikzpicture}
```


The equation $$a=g-(b/m)v$$ is linear with slope $$-b/m$$, so $$b=-m(\text{slope})$$.
:::
::::

## Unit 3: Work, Energy, and Power

[Full notes →](/notes/ap/ap-physics-c-mechanics/work/)

### Practice

#### Multiple Choice

::::problem
1. A force is always perpendicular to a particle's velocity. The force can change the particle's

(A) speed but not direction

(B) direction but not speed

(C) kinetic energy only

(D) total mechanical energy only


:::solution
The rate at which a force changes kinetic energy is power:

$$
P=\vec F\cdot\vec v.
$$

Here the force is always perpendicular to the velocity, so the dot product is zero.


Since $$P=dK/dt=0$$, the kinetic energy and speed do not change. However, a perpendicular force can still bend the path by changing the direction of $$\vec v$$, like centripetal force does in circular motion. The answer is $$\boxed{\text{B}}$$.

The second-derivative test would then confirm whether that equilibrium is stable, but the question only asks for the location.
:::
::::

::::problem
2. A block slides up a rough incline and comes momentarily to rest. Compared with its mechanical energy at launch, its mechanical energy at the top is

(A) greater

(B) smaller

(C) the same

(D) zero


:::solution
Mechanical energy changes when nonconservative forces do work. On the way up the incline, kinetic friction points opposite the motion, so its work is negative.

Using

$$
\Delta E_{\text{mech}}=W_{\text{fric}},
$$

and $$W_{\text{fric}}<0$$, the final mechanical energy must be smaller than the launch mechanical energy. The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
3. A force $$F(x)=3x^2-2x$$ acts on a particle from $$x=0$$ to $$x=L$$. The work done is

(A) $$L^3-L^2$$

(B) $$3L^2-2L$$

(C) $$L^3+L^2$$

(D) $$3L^3-L^2$$


:::solution
For a position-dependent force, work is the signed area under the $$F$$ versus $$x$$ graph, not just force times distance.


Compute

$$
W=\int_0^L(3x^2-2x)\,dx
=\left[x^3-x^2\right]_0^L
=L^3-L^2.
$$

Therefore the answer is $$\boxed{\text{A}}$$.

The result can be positive or negative depending on $$L$$, which is allowed because work is signed area, not ordinary geometric area.
:::
::::

::::problem
4. If $$U(x)=ax^4-bx^2$$ with $$a,b>0$$, the force is

(A) $$F_x=4ax^3-2bx$$

(B) $$F_x=-4ax^3+2bx$$

(C) $$F_x=ax^4-bx^2$$

(D) $$F_x=-a/x^4+b/x^2$$


:::solution
Force points in the direction that lowers potential energy, which is why there is a minus sign:

$$
F_x=-\frac{dU}{dx}.
$$

Differentiate the potential:

$$
\frac{dU}{dx}=4ax^3-2bx.
$$

Then apply the negative sign:

$$
F_x=-4ax^3+2bx.
$$

The minus sign is the common trap: the force is not the slope of the potential; it is the negative slope. So the answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
5. A particle moves in one dimension with potential energy $$U(x)$$. At a stable equilibrium,

(A) $$U'=0$$ and $$U''>0$$

(B) $$U'=0$$ and $$U''<0$$

(C) $$U'>0$$ and $$U''=0$$

(D) $$U<0$$ only


:::solution
Equilibrium requires zero force. Since $$F=-U'$$, that means

$$
U'=0.
$$

Stable equilibrium means that if the particle is displaced slightly, the force pushes it back toward equilibrium. On an energy graph, that is a local minimum:


A local minimum has positive curvature, so $$U''>0$$. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
6. A block starts from rest at height $$H$$ above a horizontal spring, slides on a frictionless track, and compresses the spring a distance $$x$$. If the block instead starts from height $$4H$$, the new maximum compression is

(A) $$x/2$$

(B) $$x$$

(C) $$2x$$

(D) $$4x$$


:::solution
At maximum compression, the block is momentarily at rest, so the lost gravitational potential energy has become spring potential energy.

For the original release,

$$
mgH=\frac12kx^2.
$$

If the height becomes $$4H$$, then

$$
mg(4H)=\frac12kx_{\text{new}}^2.
$$

The available energy is four times larger, so $$x_{\text{new}}^2=4x^2$$ and $$x_{\text{new}}=2x$$. The answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
7. A spring with constant $$k$$ is cut into two equal halves. One half is used as a spring. Compared with the original spring, the energy stored for the same stretch $$x$$ is

(A) half as large

(B) the same

(C) twice as large

(D) four times as large


:::solution
Cutting a uniform spring in half makes it stiffer because the same force stretches a shorter length. Each half has spring constant $$2k$$.


For the same stretch $$x$$,

$$
U_{\text{half}}=\frac12(2k)x^2=kx^2,
$$

while the original stored

$$
U_{\text{orig}}=\frac12kx^2.
$$

Thus the half-spring stores twice as much energy. The answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
8. A block moves through a region where a force $$F(x)=F_0e^{-x/L}$$ acts in the direction of motion. The work done from $$x=0$$ to $$x=2L$$ is

(A) $$F_0L(1-e^{-2})$$

(B) $$2F_0L$$

(C) $$F_0L e^{-2}$$

(D) $$F_0/L$$


:::solution
The force changes with position, so work is the integral of the force over the displacement.


Compute

$$
W=\int_0^{2L}F_0e^{-x/L}\,dx.
$$

An antiderivative is $$-F_0Le^{-x/L}$$, so

$$
W=\left[-F_0Le^{-x/L}\right]_0^{2L}=F_0L(1-e^{-2}).
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
9. A cart of mass $$m$$ moves under constant power $$P$$ from rest, with no resistive forces. Its speed after time $$t$$ is

(A) $$Pt/m$$

(B) $$\sqrt{2Pt/m}$$

(C) $$2Pt/m$$

(D) $$\sqrt{Pt/(2m)}$$


:::solution
Power is the rate of energy transfer. If the power is constant and the cart starts from rest, then after time $$t$$ the work done is

$$
W=Pt.
$$

With no resistive forces, that work becomes kinetic energy:

$$
\frac12mv^2=Pt.
$$

Solving for speed,

$$
v=\sqrt{\frac{2Pt}{m}}.
$$

The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
10. A satellite moves outward from radius $$r$$ to radius $$2r$$ around a planet of mass $$M$$. The work done by gravity during this motion is

(A) $$-\dfrac{GMm}{2r}$$

(B) $$-\dfrac{GMm}{r}$$

(C) $$\dfrac{GMm}{2r}$$

(D) zero, because gravity is perpendicular to orbital motion


:::solution
Gravity is conservative, so its work is the negative change in gravitational potential energy:

$$
W_g=-\Delta U.
$$

The potential is $$U=-GMm/r$$. Moving outward from $$r$$ to $$2r$$ increases the potential energy from $$-GMm/r$$ to $$-GMm/(2r)$$:

$$
\Delta U=-\frac{GMm}{2r}+\frac{GMm}{r}=\frac{GMm}{2r}.
$$

Therefore

$$
W_g=-\frac{GMm}{2r}.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
11. A particle in potential $$U(x)=\dfrac{A}{x^2}-\dfrac{B}{x}$$, with $$A,B>0$$, has a stable equilibrium at

(A) $$x=A/B$$

(B) $$x=2A/B$$

(C) $$x=B/A$$

(D) $$x=\sqrt{A/B}$$


:::solution
Equilibrium occurs where the force is zero, which is the same as $$dU/dx=0$$.

Differentiate:

$$
\frac{dU}{dx}=-\frac{2A}{x^3}+\frac{B}{x^2}.
$$

Set this equal to zero and multiply by $$x^3$$:

$$
-2A+Bx=0.
$$

So

$$
x=\frac{2A}{B}.
$$

The answer is $$\boxed{\text{B}}$$.

The second-derivative test would then confirm whether that equilibrium is stable, but the question only asks for the location.
:::
::::

::::problem
12. A projectile is launched upward from the surface of a planet of radius $$R$$ with speed $$v_{\text{esc}}/2$$. Neglect air resistance. Its maximum distance from the planet's center is

(A) $$4R/3$$

(B) $$3R/2$$

(C) $$2R$$

(D) $$4R$$


:::solution
Use total mechanical energy. The launch speed is half of escape speed, and

$$
v_{\text{esc}}^2=\frac{2GM}{R}.
$$

Thus

$$
K_i=\frac12m\left(\frac{v_{\text{esc}}}{2}\right)^2
=\frac18m\frac{2GM}{R}=\frac{GMm}{4R}.
$$

The initial total energy is

$$
E=\frac{GMm}{4R}-\frac{GMm}{R}=-\frac{3GMm}{4R}.
$$

At maximum radius, the speed is zero, so

$$
-\frac{GMm}{r_{\max}}=-\frac{3GMm}{4R}.
$$

Therefore $$r_{\max}=4R/3$$, and the answer is $$\boxed{\text{A}}$$.
:::
::::

#### FRQ

::::frq{id=ap-physics-c-mechanics-work-1}
1. A block of mass $$m$$ starts from rest at height $$H$$ on a frictionless curved track, then crosses a rough horizontal patch of length $$L$$ with coefficient of kinetic friction $$\mu_k$$ before compressing a spring of constant $$k$$.

   $$(A)$$ Derive the speed of the block just before the rough patch.

   $$(B)$$ Determine the speed just after the rough patch.

   $$(C)$$ Find the maximum spring compression.

   $$(D)$$ Determine the condition on $$H$$ for the block to reach the spring.


:::solution
$$(A)$$ On the curved part of the track there is no friction, so mechanical energy is conserved.

Starting from rest,

$$
mgH=\frac12mv^2.
$$

Cancel $$m$$ and solve:

$$
\boxed{v=\sqrt{2gH}}.
$$

$$(B)$$ Across the rough patch, kinetic friction does negative work. The friction force is $$f_k=\mu_kmg$$, so the work over distance $$L$$ is

$$
W_f=-\mu_kmgL.
$$

Use energy before and after the patch:

$$
\frac12mv_{\text{after}}^2=mgH-\mu_kmgL.
$$

Thus

$$
\boxed{v_{\text{after}}=\sqrt{2g(H-\mu_kL)}}.
$$

$$(C)$$ At maximum spring compression, the block is instantaneously at rest, so all remaining mechanical energy is spring potential energy:

$$
\frac12kx^2=mgH-\mu_kmgL.
$$

Solving,

$$
\boxed{x=\sqrt{\frac{2mg(H-\mu_kL)}{k}}}.
$$

$$(D)$$ The block reaches the spring only if it still has nonnegative kinetic energy after the rough patch:

$$
mgH-\mu_kmgL\ge0.
$$

Cancel $$mg$$ to get

$$
\boxed{H\ge\mu_kL}.
$$
:::
::::

::::frq{id=ap-physics-c-mechanics-work-2}
2. A particle of mass $$m$$ moves in the potential $$U(x)=ax^4-bx^2$$, where $$a,b>0$$

   $$(A)$$ Find all equilibrium positions.

   $$(B)$$ Classify each equilibrium as stable or unstable.

   $$(C)$$ If the particle has total energy $$E=0$$, find its turning points.

   $$(D)$$ If the particle has total energy $$E=0$$, determine where its speed is greatest and justify your answer using the energy diagram.


:::solution
$$(A)$$ Equilibrium means zero force, and $$F=-dU/dx$$. Therefore set $$dU/dx=0$$:

$$
\frac{dU}{dx}=4ax^3-2bx=2x(2ax^2-b)=0.
$$

So the equilibrium positions are

$$
\boxed{x=0,\qquad x=\pm\sqrt{\frac{b}{2a}}}.
$$

$$(B)$$ Use the curvature of the potential to classify them:

$$
U''(x)=12ax^2-2b.
$$

At $$x=0$$, $$U''=-2b<0$$, so the point is a local maximum and is unstable. At $$x=\pm\sqrt{b/(2a)}$$,

$$
U''=12a\left(\frac{b}{2a}\right)-2b=4b>0,
$$

so those are local minima and are stable.


$$(C)$$ Turning points occur where $$K=0$$, so $$E=U(x)$$. For $$E=0$$,

$$
ax^4-bx^2=0
\quad\Rightarrow\quad
x^2(ax^2-b)=0.
$$

Thus

$$
\boxed{x=0,\qquad x=\pm\sqrt{\frac{b}{a}}}.
$$

$$(D)$$ Since $$E=K+U$$, the kinetic energy is $$K=E-U=-U$$. The speed is greatest where $$K$$ is greatest, which means where $$U$$ is smallest. From part $$(B)$$, the minima occur at

$$
\boxed{x=\pm\sqrt{\frac{b}{2a}}}.
$$
:::
::::

::::frq{id=ap-physics-c-mechanics-work-3}
3. A small spacecraft of mass $$m$$ moves radially away from a planet of mass $$M$$. Its engine supplies constant power $$P$$ for time $$t_0$$, starting from rest at radius $$R$$. Ignore air resistance and the changing mass of the spacecraft.

   $$(A)$$ Write an energy equation relating the spacecraft's speed and radius after the burn.

   $$(B)$$ Determine the minimum engine energy needed for escape if the burn ends at radius $$r_f$$.

   $$(C)$$ Explain whether delivering the same energy quickly or slowly changes the escape condition in this idealized model.

   $$(D)$$ Identify one assumption in the model that would fail for a real rocket.


:::solution
$$(A)$$ The engine adds energy $$Pt_0$$ during the burn. Gravity is handled through potential energy, so the total mechanical energy after the burn is the initial mechanical energy plus the engine work.

Thus

$$
\boxed{\frac12mv^2-\frac{GMm}{r}=-\frac{GMm}{R}+Pt_0}.
$$

$$(B)$$ Escape means the spacecraft can reach infinity with nonnegative kinetic energy. Since $$U(\infty)=0$$, this requires total energy $$E\ge0$$. Starting from rest at radius $$R$$, the initial energy is $$-GMm/R$$, so the minimum engine energy needed is

$$
\boxed{\frac{GMm}{R}}.
$$

If the burn ends at $$r_f$$, the same criterion is applied to the final total energy there: $$\frac12mv_f^2-GMm/r_f\ge0$$.

$$(C)$$ In this idealized model, only the total engine energy matters, not the rate at which it is delivered. Delivering the same energy quickly or slowly gives the same escape condition as long as the model assumptions remain true.

$$(D)$$ A real rocket changes mass as fuel is expelled, so treating $$m$$ as constant is a major failed assumption. Real rockets also have finite thrust direction, exhaust speed limits, drag, and inefficiencies, any of which would change the motion.
:::
::::

## Unit 4: Linear Momentum and Impulse

[Full notes →](/notes/ap/ap-physics-c-mechanics/linearmomentum/)

### Practice

#### Multiple Choice

::::problem
1. A net force on a particle varies as $$F(t)=F_0(1-t/T)$$ from $$t=0$$ to $$t=T$$. The impulse is

(A) $$F_0T$$

(B) $$F_0T/2$$

(C) $$F_0/T$$

(D) zero


:::solution
Impulse is the area under the force-time graph.


The graph is a triangle with base $$T$$ and height $$F_0$$, so

$$
J=\frac12(F_0)(T)=\frac{F_0T}{2}.
$$

Equivalently, integrating $$F_0(1-t/T)$$ gives the same result. The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
2. A ball of mass $$0.20\ \text{kg}$$ hits a wall moving to the right at $$15\ \text{m/s}$$ and rebounds to the left at $$10\ \text{m/s}$$. If the contact time is $$0.050\ \text{s}$$, the magnitude of the average force exerted by the wall is

(A) $$20\ \text{N}$$

(B) $$60\ \text{N}$$

(C) $$100\ \text{N}$$

(D) $$250\ \text{N}$$


:::solution
Take right as positive. The ball changes from $$+15\ \text{m/s}$$ to $$-10\ \text{m/s}$$, so its momentum change is

$$
\Delta p=m(v_f-v_i)=0.20(-10-15)=-5.0\ \text{kg}\cdot\text{m/s}.
$$

The wall's average force magnitude is impulse divided by contact time:

$$
F_{\text{avg}}=\frac{\lvert\Delta p\rvert}{\Delta t}=\frac{5.0}{0.050}=100\ \text{N}.
$$

The answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
3. A system of particles has total mass $$M$$. Which equation remains true even if the particles collide inelastically with each other?

(A) $$\sum\vec F_{\text{ext}}=M\vec a_{\text{cm}}$$

(B) $$\sum\vec F_{\text{int}}=M\vec a_{\text{cm}}$$

(C) $$K_i=K_f$$

(D) $$\vec r_{\text{cm}}=\vec 0$$


:::solution
Internal forces can rearrange energy inside the system, but they cancel in pairs when finding the motion of the center of mass.


For any system of total mass $$M$$,

$$
\sum \vec F_{\text{ext}}=M\vec a_{\text{cm}}.
$$

This remains true for elastic, inelastic, and messy internal collisions. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
4. A projectile explodes at the top of its path into two fragments of masses $$m$$ and $$3m$$. If the smaller fragment stops immediately after the explosion, the speed of the larger fragment immediately after is

(A) $$v/3$$

(B) $$v$$

(C) $$4v/3$$

(D) $$3v$$


:::solution
At the top of the projectile's path, the velocity is horizontal with speed $$v$$. During the explosion, external impulse is negligible, so horizontal momentum is conserved.

Before the explosion,

$$
p_i=(4m)v.
$$

Afterward, the smaller fragment has zero momentum, so

$$
3mV=4mv.
$$

Thus $$V=4v/3$$, and the answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
5. Two skaters push off from rest on frictionless ice. One has three times the mass of the other. If no external horizontal force acts, the heavier skater's kinetic energy is

(A) one-ninth the lighter skater's kinetic energy

(B) one-third the lighter skater's kinetic energy

(C) equal to the lighter skater's kinetic energy

(D) three times the lighter skater's kinetic energy


:::solution
The skaters start from rest, so total momentum is initially zero. With no external horizontal force, their final momenta must be equal in magnitude and opposite in direction.


For a given momentum magnitude, we can modify kinetic energy:

$$
K=\frac{1}{2} m v^2=\frac{1}{2} \frac{{(mv)}^2}{m}=\frac{p^2}{2m}.
$$

The heavier skater has mass $$3m$$, so their kinetic energy is

$$
K_{\text{heavy}}=\frac{p^2}{2(3m)}=\frac13\frac{p^2}{2m}.
$$

Thus the heavier skater has one-third the lighter skater's kinetic energy. The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
6. A force on a mass $$m$$ is $$F(t)=F_0t/T$$ from $$t=0$$ to $$T$$ and then $$F(t)=F_0(2-t/T)$$ from $$t=T$$ to $$2T$$. If the mass starts from rest, its speed at $$t=2T$$ is

(A) $$F_0T/m$$

(B) $$F_0T/(2m)$$

(C) $$2F_0T/m$$

(D) $$\sqrt{F_0T/m}$$


:::solution
Impulse equals the area under the force-time graph. Here the force rises linearly to $$F_0$$ and then falls linearly back to zero.


The area is a triangle with base $$2T$$ and height $$F_0$$:

$$
J=\frac12(2T)(F_0)=F_0T.
$$

Starting from rest, $$J=\Delta p=mv$$, so

$$
v=\frac{F_0T}{m}.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
7. A stationary object explodes into three equal masses. Two pieces leave at speed $$v$$ with angle $$120^\circ$$ between their velocities. The third piece leaves with speed

(A) $$0$$

(B) $$v$$

(C) $$\sqrt{3}v$$

(D) $$2v$$


:::solution
The object was initially at rest, so the final vector sum of the three momenta must be zero.


The first two pieces have equal momentum magnitude $$mv$$. The magnitude of their vector sum is

$$
\sqrt{(mv)^2+(mv)^2+2(mv)^2\cos120^\circ}=mv.
$$

The third fragment must have momentum $$mv$$ in the opposite direction. Since its mass is also $$m$$, its speed is $$v$$. The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
8. A mass $$m$$ moving right with speed $$v$$ collides elastically in one dimension with an initially stationary mass $$3m$$. After the collision, the velocity of the mass $$m$$ is

(A) $$-v/2$$

(B) $$-v/3$$

(C) $$v/3$$

(D) $$v/2$$


:::solution
For a one-dimensional elastic collision with target initially at rest,

$$
v_{1f}=\frac{m_1-m_2}{m_1+m_2}v_{1i}.
$$

Here $$m_1=m$$ and $$m_2=3m$$, so

$$
v_{1f}=\frac{m-3m}{m+3m}v=-\frac{v}{2}.
$$

The negative sign means the smaller mass rebounds. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
9. A mass $$m$$ with speed $$5\ \text{m/s}$$ elastically collides head-on with a mass $$3m$$ initially moving toward it at $$1\ \text{m/s}$$. The final velocity of the mass $$m$$ is

(A) $$-4\ \text{m/s}$$

(B) $$-2\ \text{m/s}$$

(C) $$1\ \text{m/s}$$

(D) $$5\ \text{m/s}$$


:::solution
Take right as positive. The incoming velocities are $$v_{1i}=+5\ \text{m/s}$$ for mass $$m$$ and $$v_{2i}=-1\ \text{m/s}$$ for mass $$3m$$.

For a one-dimensional elastic collision,

$$
v_{1f}=\frac{m_1-m_2}{m_1+m_2}v_{1i}+\frac{2m_2}{m_1+m_2}v_{2i}.
$$

Substitute $$m_1=m$$ and $$m_2=3m$$:

$$
v_{1f}=\frac{m-3m}{4m}(5)+\frac{2(3m)}{4m}(-1)=-\frac52-\frac32=-4\ \text{m/s}.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
10. A cart moves to the right at $$4\ \text{m/s}$$ while sand leaks out vertically downward at rate $$2\ \text{kg/s}$$ relative to the ground. Ignoring external horizontal forces, the horizontal acceleration of the remaining cart-sand system is

(A) zero

(B) $$2\ \text{m/s}^2$$ to the right

(C) $$2\ \text{m/s}^2$$ to the left

(D) impossible to determine without the cart mass


:::solution
The key is the direction of the relative motion of the leaking sand. It leaves vertically downward, so at the instant it separates it still has the same horizontal velocity as the cart.

Because the leaving mass carries away exactly its share of horizontal momentum, the remaining cart-sand system is not pushed horizontally. With no external horizontal force and no horizontal relative exhaust speed,

$$
a_x=0.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
11. A cart of initial mass $$M$$ and speed $$v_0$$ collects rain falling vertically at rate $$\lambda$$. Neglect horizontal external forces. Its speed after time $$t$$ is

(A) $$v_0$$

(B) $$\dfrac{Mv_0}{M+\lambda t}$$

(C) $$v_0+\lambda t/M$$

(D) $$\dfrac{(M+\lambda t)v_0}{M}$$


:::solution
The rain falls vertically, so it brings in mass with zero horizontal momentum before it joins the cart. There is no external horizontal force, so total horizontal momentum is conserved.

Initially the cart's horizontal momentum is $$Mv_0$$. After time $$t$$, the combined moving mass is $$M+\lambda t$$, so

$$
Mv_0=(M+\lambda t)v.
$$

Solving gives

$$
v=\frac{Mv_0}{M+\lambda t}.
$$

The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
12. A rocket expels fuel backward at speed $$u$$ relative to the rocket. With no external force, the rocket's speed change as its mass decreases from $$M_i$$ to $$M_f$$ is

(A) $$u\ln(M_i/M_f)$$

(B) $$u\ln(M_f/M_i)$$

(C) $$u(M_i-M_f)$$

(D) $$u(M_f/M_i)$$


:::solution
For a rocket, the fuel is expelled backward relative to the rocket, so the rocket gains forward speed as its mass decreases.

With no external force, the differential rocket equation is

$$
dv=-u\frac{dm}{m},
$$

where $$dm<0$$ for the rocket because its mass is decreasing. Integrate from $$M_i$$ to $$M_f$$:

$$
\Delta v=-u\int_{M_i}^{M_f}\frac{dm}{m}
=u\ln\left(\frac{M_i}{M_f}\right).
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

#### FRQ

::::frq{id=ap-physics-c-mechanics-linearmomentum-1}
1. A cart of initial mass $$M$$ moves on a frictionless horizontal track with speed $$v_0$$. Sand falls vertically into the cart at constant rate $$\lambda$$.

   $$(A)$$ Derive the cart's speed as a function of time.

   $$(B)$$ Determine the horizontal force the cart exerts on newly collected sand.

   $$(C)$$ Determine the rate at which mechanical energy is lost.

   $$(D)$$ Explain why horizontal momentum is conserved even though kinetic energy is not.


:::solution
$$(A)$$ The falling sand has no horizontal velocity before it lands in the cart. With no external horizontal force on the cart-plus-collected-sand system, horizontal momentum is conserved.

At time $$t$$, the moving mass is $$M+\lambda t$$, so

$$
Mv_0=(M+\lambda t)v(t).
$$

Therefore

$$
\boxed{v(t)=\frac{Mv_0}{M+\lambda t}}.
$$

$$(B)$$ Newly collected sand must be accelerated horizontally from zero to the cart speed $$v(t)$$. The rate at which horizontal momentum is given to the incoming sand is

$$
F=\frac{dp}{dt}=\lambda v(t).
$$

Thus

$$
\boxed{F=\frac{\lambda Mv_0}{M+\lambda t}}.
$$

This is the force of the cart on the newly collected sand; the sand exerts an equal and opposite backward force on the cart.

$$(C)$$ The kinetic energy of the moving cart-plus-sand is

$$
K=\frac12(M+\lambda t)v^2
=\frac12(M+\lambda t)\left(\frac{Mv_0}{M+\lambda t}\right)^2
=\frac12\frac{M^2v_0^2}{M+\lambda t}.
$$

Differentiate:

$$
\boxed{\frac{dK}{dt}=-\frac{\lambda M^2v_0^2}{2(M+\lambda t)^2}}.
$$

The negative sign means mechanical energy is being lost.

$$(D)$$ Momentum is conserved because there is no external horizontal impulse. Kinetic energy is not conserved because each bit of sand sticks to the cart in an inelastic process; some mechanical energy becomes thermal/internal energy during the sticking.
:::
::::

::::frq{id=ap-physics-c-mechanics-linearmomentum-2}
2. A block of mass $$m$$ moving with speed $$v_0$$ collides with and sticks to a block of mass $$2m$$ attached to a spring of constant $$k$$ on a frictionless track.

   $$(A)$$ Find the speed of the combined blocks just after the collision.

   $$(B)$$ Determine the maximum compression of the spring.

   $$(C)$$ Find the fraction of the initial kinetic energy lost in the collision.

   $$(D)$$ Describe how the answer changes if the collision is elastic instead.


:::solution
$$(A)$$ During the short collision, the spring's impulse is negligible, so use momentum conservation for the two blocks.

$$
mv_0=(m+2m)v_f=3mv_f.
$$

Thus

$$
\boxed{v_f=\frac{v_0}{3}}.
$$

$$(B)$$ After the collision, the combined mass compresses the spring. Now mechanical energy is conserved because the track is frictionless and the spring is conservative:

$$
\frac12(3m)\left(\frac{v_0}{3}\right)^2=\frac12kx^2.
$$

Solving,

$$
\boxed{x=v_0\sqrt{\frac{m}{3k}}}.
$$

$$(C)$$ Before collision,

$$
K_i=\frac12mv_0^2.
$$

Immediately after collision,

$$
K_f=\frac12(3m)\left(\frac{v_0}{3}\right)^2=\frac16mv_0^2.
$$

The lost fraction is

$$
\frac{K_i-K_f}{K_i}=\frac{\frac12-\frac16}{\frac12}=\boxed{\frac23}.
$$

$$(D)$$ If the collision is elastic, the blocks do not stick and kinetic energy is conserved during the collision. The spring compression would be found from the kinetic energy of the $$2m$$ block after the collision, not from a combined $$3m$$ mass.
:::
::::

::::frq{id=ap-physics-c-mechanics-linearmomentum-3}
3. A projectile of mass $$3m$$ moving horizontally at speed $$v_0$$ explodes into three fragments of equal mass. One fragment moves straight upward at speed $$v_0$$, and a second moves at angle $$30^\circ$$ below the original direction with speed $$2v_0$$.

   $$(A)$$ Determine the velocity components of the third fragment.

   $$(B)$$ Determine the speed of the third fragment.

   $$(C)$$ Compare the total kinetic energy before and after the explosion.

   $$(D)$$ Explain what supplied the change in kinetic energy.


:::solution
$$(A)$$ Use conservation of momentum in components. Initially the projectile has horizontal momentum $$3mv_0$$ and zero vertical momentum.

For the $$x$$ direction,

$$
3mv_0=0+m(2v_0\cos30^\circ)+mv_{3x}.
$$

Since $$2v_0\cos30^\circ=\sqrt3v_0$$,

$$
\boxed{v_{3x}=(3-\sqrt3)v_0}.
$$

For the $$y$$ direction,

$$
0=mv_0+m(-2v_0\sin30^\circ)+mv_{3y}.
$$

Because $$2v_0\sin30^\circ=v_0$$, the first two vertical momenta cancel, so

$$
\boxed{v_{3y}=0}.
$$

$$(B)$$ Since the third fragment has zero vertical component, its speed is just the magnitude of its horizontal component:

$$
\boxed{v_3=(3-\sqrt3)v_0}.
$$

$$(C)$$ Initially,

$$
K_i=\frac12(3m)v_0^2=\frac32mv_0^2.
$$

After the explosion,

$$
K_f=\frac12m(v_0^2)+\frac12m(2v_0)^2+\frac12m\left((3-\sqrt3)v_0\right)^2.
$$

So

$$
K_f=\frac12mv_0^2\left[1+4+(3-\sqrt3)^2\right]
=\frac12mv_0^2(17-6\sqrt3).
$$

This is greater than $$K_i$$, so kinetic energy increased.

$$(D)$$ The extra kinetic energy comes from internal energy released by the explosion. Momentum is still conserved because the explosion forces are internal, but kinetic energy can increase when stored internal energy is converted into motion.
:::
::::

## Unit 5: Torque and Rotational Dynamics

[Full notes →](/notes/ap/ap-physics-c-mechanics/torque/)

### Practice

#### Multiple Choice

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

#### FRQ

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

## Unit 6: Energy and Momentum of Rotating Systems

[Full notes →](/notes/ap/ap-physics-c-mechanics/rotationalmomentum/)

### Practice

#### Multiple Choice

::::problem
1. Static friction does no work on a rigid object rolling without slipping on a fixed surface because

(A) the contact point is instantaneously at rest

(B) friction is always zero

(C) the center of mass is at rest

(D) rotational kinetic energy is constant


:::solution
In rolling without slipping, the point touching the floor is instantaneously at rest relative to the floor.

Work requires displacement of the point where the force acts. Since static friction acts at the instantaneously stationary contact point, its instantaneous power is zero. It can redistribute energy between translation and rotation, but it does not remove mechanical energy. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
2. A torque $$\tau(t)=\tau_0t/T$$ acts on a disk from $$t=0$$ to $$t=T$$. The angular impulse is

(A) $$\tau_0T$$

(B) $$\tau_0T/2$$

(C) $$\tau_0/T$$

(D) $$I\tau_0T$$


:::solution
Angular impulse is the area under the torque-time graph.


The graph is a triangle with base $$T$$ and height $$\tau_0$$, so

$$
J_{\text{ang}}=\int_0^T\frac{\tau_0t}{T}\,dt=\frac{\tau_0T}{2}.
$$

The answer is $$\boxed{\text{B}}$$.

This is the angular version of linear impulse: the area under torque-time changes angular momentum.
:::
::::

::::problem
3. A central force always points along $$\vec r$$. Therefore, for motion under a central force,

(A) angular momentum about the force center is conserved

(B) mechanical energy is always conserved

(C) speed is always constant

(D) the orbit must be circular


:::solution
A central force points along the radius vector, so $$\vec r$$ and $$\vec F$$ are parallel or antiparallel.


The torque about the force center is

$$
\vec\tau=\vec r\times\vec F=0.
$$

Since $$d\vec L/dt=\vec\tau_{\text{ext}}$$, zero torque means angular momentum about that center is conserved. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
4. A rolling hoop and rolling disk have the same mass, radius, and center-of-mass speed. The hoop has

(A) more total kinetic energy

(B) less total kinetic energy

(C) the same total kinetic energy

(D) no rotational kinetic energy


:::solution
Both objects have the same translational kinetic energy because they have the same $$M$$ and center-of-mass speed $$v$$. The difference is rotational kinetic energy.


For rolling without slipping, $$\omega=v/R$$. The hoop has $$I=MR^2$$ while the disk has $$I=\frac12MR^2$$, so the hoop has larger $$\frac12I\omega^2$$. Therefore it has more total kinetic energy. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
5. A hoop, disk, and solid sphere with the same mass and radius roll without slipping down the same incline. The object with the largest acceleration is the

(A) hoop

(B) disk

(C) solid sphere

(D) all tie


:::solution
For rolling objects on the same incline,

$$
a=\frac{g\sin\theta}{1+I/(MR^2)}.
$$

The hoop has $$I/(MR^2)=1$$, the disk has $$1/2$$, and the solid sphere has $$2/5$$. The smallest denominator belongs to the solid sphere, so it has the largest acceleration. The answer is $$\boxed{\text{C}}$$.

The radius and orbiting mass do not change, so the factor change in $$L$$ is exactly the factor change in speed.
:::
::::

::::problem
6. A solid sphere rolls without slipping down an incline from height $$H$$. A block slides frictionlessly from the same height. The ratio of the sphere's translational speed at the bottom to the block's speed at the bottom is

(A) $$\sqrt{5/7}$$

(B) $$\sqrt{2/5}$$

(C) $$\sqrt{7/5}$$

(D) $$1$$


:::solution
Both objects start from the same height, so both lose gravitational potential energy $$mgH$$. The block puts all of that into translation, while the sphere splits it between translation and rotation.

For the sphere,

$$
mgH=\frac12Mv^2+\frac12\left(\frac25MR^2\right)\left(\frac{v}{R}\right)^2
=\frac{7}{10}Mv^2.
$$

For the sliding block,

$$
mgH=\frac12Mv_b^2.
$$

Thus $$v^2=\frac{10}{7}gH$$ and $$v_b^2=2gH$$, so

$$
\frac{v}{v_b}=\sqrt{\frac{5}{7}}.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
7. A rigid object rolls without slipping with center-of-mass speed $$v$$. Its total kinetic energy is $$K=\dfrac{3}{4}Mv^2$$. If its radius is $$R$$, its moment of inertia about its center is

(A) $$\dfrac{1}{4}MR^2$$

(B) $$\dfrac{1}{2}MR^2$$

(C) $$MR^2$$

(D) $$\dfrac{3}{2}MR^2$$


:::solution
Rolling kinetic energy has translational and rotational pieces:

$$
K=\frac12Mv^2+\frac12I\omega^2.
$$

Because the object rolls without slipping, $$\omega=v/R$$. Substitute:

$$
K=\frac12Mv^2+\frac12I\frac{v^2}{R^2}.
$$

Set this equal to the given total kinetic energy:

$$
\frac34Mv^2=\frac12Mv^2+\frac12I\frac{v^2}{R^2}.
$$

The rotational part must be $$\frac14Mv^2$$, so $$I=\frac12MR^2$$. The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
8. A wheel rolls without slipping up a rough incline. Static friction is present but there is no slipping or other dissipation. Which quantity is conserved during the upward motion?

(A) translational kinetic energy only

(B) rotational kinetic energy only

(C) total mechanical energy

(D) angular momentum about the center only


:::solution
The wheel is moving upward, so translational and rotational kinetic energy may change as gravitational potential energy changes. However, the contact is static, not kinetic.

Static friction at a fixed surface does no work on an ideal rolling body because the contact point has zero instantaneous displacement. With no slipping and no other dissipative force, total mechanical energy is conserved. The answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
9. A disk spins freely on a frictionless axle. A student drops clay onto the disk at radius $$R/2$$, where it sticks. During the collision,

(A) angular momentum about the axle is conserved but rotational kinetic energy decreases

(B) rotational kinetic energy is conserved but angular momentum decreases

(C) both angular momentum and rotational kinetic energy are conserved

(D) neither angular momentum nor rotational kinetic energy is conserved


:::solution
During the short sticking collision, the axle exerts forces but no torque about the axle itself. Therefore angular momentum about the axle is conserved.

But the collision is inelastic because the clay sticks. In inelastic collisions, kinetic energy is not conserved; some becomes internal energy, sound, or deformation. Thus angular momentum is conserved while rotational kinetic energy decreases. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
10. A person sits on a spinning stool holding two masses. Pulling the masses inward increases angular speed because

(A) angular momentum is conserved while moment of inertia decreases

(B) kinetic energy is conserved while moment of inertia decreases

(C) torque from gravity increases

(D) the masses lose angular momentum to the stool


:::solution
The person, stool, and masses form a system with negligible external torque about the spin axis.

Angular momentum is

$$
L=I\omega.
$$

If $$L$$ stays constant and $$I$$ decreases, then $$\omega$$ must increase. The person does work while pulling the masses inward, so kinetic energy is not the conserved quantity. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
11. A satellite in an elliptical orbit is closest to the planet at periapsis. From periapsis to apoapsis, its angular momentum about the planet

(A) increases

(B) decreases

(C) remains constant

(D) becomes zero at apoapsis


:::solution
Gravity points along the line from the satellite to the planet, so the gravitational force has zero lever arm about the planet.

Therefore

$$
\vec\tau=\vec r\times\vec F=0,
$$

and angular momentum about the planet remains constant throughout the orbit. The answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
12. A planet of mass $$m$$ moves in a circular orbit of radius $$r$$ around a star of mass $$M$$. If the star's mass were replaced by $$4M$$ while $$r$$ stayed the same, the planet's angular momentum magnitude would be multiplied by

(A) $$1/2$$

(B) $$1$$

(C) $$2$$

(D) $$4$$


:::solution
For a circular orbit, gravity supplies centripetal force:

$$
\frac{GMm}{r^2}=\frac{mv^2}{r}.
$$

So

$$
v=\sqrt{\frac{GM}{r}}.
$$

If $$M$$ becomes $$4M$$ while $$r$$ stays fixed, then

$$
v\to \sqrt{4}\,v=2v.
$$

The angular momentum magnitude is $$L=mrv$$, so doubling $$v$$ doubles $$L$$. The answer is $$\boxed{\text{C}}$$.
:::
::::

#### FRQ

::::frq{id=ap-physics-c-mechanics-rotationalmomentum-1}
1. A solid sphere rolls without slipping down an incline of angle $$\theta$$ from rest.

   $$(A)$$ Derive its center-of-mass acceleration.

   $$(B)$$ Determine the static friction force and its direction.

   $$(C)$$ Find the translational and rotational kinetic energies after descending height $$h$$.

   $$(D)$$ Compare the result with a hoop released from the same height.


:::solution
$$(A)$$ Draw the forces along the incline. Gravity pulls down the ramp, while static friction points up the ramp because it supplies the torque needed for rolling.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,decorations.pathmorphing}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.85]
  \draw[thick] (0,0) -- (4.4,1.7);
  \draw[dashed] (0,0) -- (4.4,0);
  \draw (0.75,0) arc[start angle=0,end angle=21,radius=0.75] node[midway,right] {$\theta$};
  \begin{scope}[shift={(2.15,0.83)}, rotate=21]
    \draw[fill=blue!10, thick] (0,0.45) circle (0.45);
    \fill (0,0.45) circle (1.5pt);
    \coordinate (c) at (0,0.45);
    \draw[->, thick] (c) -- ++(0,1.25) node[above] {$N$};
    \draw[->, thick, green!55!black] (0,0) -- ++(1.2,0) node[right] {$f$};
    \draw[->, red!75, thick] (-0.55,0.95) arc[start angle=125,end angle=35,radius=0.55];
    \draw[->, red!75, thick] (-0.55,0.72) -- ++(-1.15,0) node[left] {$a$};
  \end{scope}
  \draw[->, thick] (c) -- ++(0,-1.35) node[below] {$Mg$};
\end{tikzpicture}
```

Translation along the incline gives

$$
Mg\sin\theta-f=Ma.
$$

Rotation about the center gives

$$
fR=I\alpha.
$$

For a solid sphere, $$I=2MR^2/5$$, and rolling without slipping gives $$a=\alpha R$$. Therefore

$$
fR=\frac25MR^2\frac{a}{R}
\quad\Rightarrow\quad
f=\frac25Ma.
$$

Substitute into the translation equation:

$$
Mg\sin\theta-\frac25Ma=Ma.
$$

Thus

$$
\boxed{a=\frac57g\sin\theta}.
$$

$$(B)$$ Now use $$f=2Ma/5$$:

$$
f=\frac25M\left(\frac57g\sin\theta\right)=\boxed{\frac27Mg\sin\theta}.
$$

The direction is up the incline, because that direction gives the clockwise torque needed for the sphere to roll as it moves down the ramp.

$$(C)$$ After descending height $$h$$, energy conservation gives

$$
Mgh=K_{\text{trans}}+K_{\text{rot}}.
$$

For rolling,

$$
K_{\text{trans}}=\frac12Mv^2,
\qquad
K_{\text{rot}}=\frac12\left(\frac25MR^2\right)\left(\frac{v}{R}\right)^2=\frac15Mv^2.
$$

So

$$
Mgh=\frac{7}{10}Mv^2.
$$

The translational fraction is $$(1/2)/(7/10)=5/7$$ and the rotational fraction is $$(1/5)/(7/10)=2/7$$:

$$
\boxed{K_{\text{trans}}=\frac57Mgh,\qquad K_{\text{rot}}=\frac27Mgh}.
$$

$$(D)$$ A hoop has larger rotational inertia, $$I=MR^2$$, so more of the same gravitational energy must go into rotation. It therefore has a smaller center-of-mass acceleration and a smaller translational speed at the bottom than the solid sphere.
:::
::::

::::frq{id=ap-physics-c-mechanics-rotationalmomentum-2}
2. A disk of rotational inertia $$I_0$$ spins freely with angular speed $$\omega_0$$. A small block of mass $$m$$ initially at the center slides outward along a frictionless radial slot and latches at radius $$R$$.

   $$(A)$$ Determine the final angular speed.

   $$(B)$$ Determine the change in rotational kinetic energy.

   $$(C)$$ Explain where the missing mechanical energy goes during the latch.

   $$(D)$$ If the block is pulled inward slowly by an internal mechanism instead, explain whether work must be done.


:::solution
$$(A)$$ There is no external torque about the axle, so angular momentum about the axle is conserved while the block moves and latches.

Initially,

$$
L_i=I_0\omega_0.
$$

Finally, the block contributes $$mR^2$$ to the rotational inertia, so

$$
L_f=(I_0+mR^2)\omega_f.
$$

Set $$L_i=L_f$$:

$$
\boxed{\omega_f=\frac{I_0}{I_0+mR^2}\omega_0}.
$$

$$(B)$$ The initial kinetic energy is

$$
K_i=\frac12I_0\omega_0^2.
$$

The final kinetic energy is

$$
K_f=\frac12(I_0+mR^2)\omega_f^2
=\frac12(I_0+mR^2)\left(\frac{I_0}{I_0+mR^2}\omega_0\right)^2.
$$

Thus

$$
K_f=\frac12\frac{I_0^2}{I_0+mR^2}\omega_0^2,
$$

and

$$
\boxed{\Delta K=-\frac12\frac{I_0mR^2}{I_0+mR^2}\omega_0^2}.
$$

The negative sign is expected because the latch is an inelastic process.

$$(C)$$ The missing mechanical energy becomes internal energy, sound, and deformation in the latch. Angular momentum is conserved because there is no external torque, but kinetic energy does not have to be conserved in a sticking interaction.

$$(D)$$ If the block is pulled inward slowly, the moment of inertia decreases. With angular momentum conserved, $$\omega$$ increases and the rotational kinetic energy increases. That extra kinetic energy must come from positive work done by the internal pulling mechanism.
:::
::::

::::frq{id=ap-physics-c-mechanics-rotationalmomentum-3}
3. A satellite of mass $$m$$ moves in an elliptical orbit around a planet of mass $$M$$. Its periapsis and apoapsis distances are $$r_p$$ and $$r_a$$.

   $$(A)$$ Use angular momentum conservation to relate $$v_p$$ and $$v_a$$.

   $$(B)$$ Use mechanical energy conservation to solve for $$v_p$$.

   $$(C)$$ Determine $$v_a$$.

   $$(D)$$ Explain why the satellite moves fastest at periapsis.


:::solution
$$(A)$$ Gravity is a central force, so it exerts no torque about the planet. Angular momentum about the planet is conserved. At periapsis and apoapsis, the velocity is tangent to the orbit, so the angular momentum magnitude is $$L=mrv$$.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,decorations.pathmorphing}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.9]
  \fill[yellow!70!orange] (0,0) circle (0.18) node[below] {planet};
  \draw[thick, blue!65] (0,0) ellipse (2.2 and 1.05);
  \fill[blue!70] (-2.2,0) circle (2.2pt) node[left] {periapsis};
  \fill[blue!70] (2.2,0) circle (2.2pt) node[right] {apoapsis};
  \draw[->, red!75, thick] (-2.2,0) -- (-2.2,0.8) node[above] {$v_p$};
  \draw[->, red!75, thick] (2.2,0) -- (2.2,-0.45) node[below] {$v_a$};
\end{tikzpicture}
```

Thus

$$
mr_pv_p=mr_av_a,
$$

or

$$
\boxed{r_pv_p=r_av_a}.
$$

$$(B)$$ Mechanical energy is also conserved because gravity is conservative:

$$
\frac12v_p^2-\frac{GM}{r_p}=\frac12v_a^2-\frac{GM}{r_a}.
$$

From part $$(A)$$,

$$
v_a=\frac{r_p}{r_a}v_p.
$$

Substitute into energy conservation:

$$
\frac12v_p^2-\frac12\left(\frac{r_p}{r_a}\right)^2v_p^2
=GM\left(\frac{1}{r_p}-\frac{1}{r_a}\right).
$$

Solving gives

$$
\boxed{v_p=\sqrt{\frac{2GMr_a}{r_p(r_p+r_a)}}}.
$$

$$(C)$$ Use the angular momentum relation again:

$$
\boxed{v_a=\frac{r_p}{r_a}v_p=\sqrt{\frac{2GMr_p}{r_a(r_p+r_a)}}}.
$$

$$(D)$$ Since $$mrv$$ is constant at periapsis and apoapsis and $$r_p<r_a$$, the speed must be larger at periapsis.
:::
::::

## Unit 7: Oscillations

[Full notes →](/notes/ap/ap-physics-c-mechanics/oscillations/)

### Practice

#### Multiple Choice

::::problem
1. A mass $$m$$ hangs from a spring of constant $$k$$ in a uniform gravitational field. It oscillates vertically about equilibrium with amplitude $$A$$. Which quantity depends on $$g$$?

(A) The angular frequency

(B) The period

(C) The equilibrium extension

(D) The speed at the equilibrium point measured relative to the oscillation amplitude


:::solution
For a vertical spring, gravity adds a constant downward force. A constant force shifts the equilibrium point but does not change the slope of the restoring force.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,decorations.pathmorphing}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.85]
  \draw[thick] (0,-0.5) -- (0,1.1);
  \draw[decorate, decoration={coil, aspect=0.45, segment length=4pt, amplitude=4pt}, thick] (0,0.3) -- (2.1,0.3);
  \draw[fill=blue!10, thick] (2.1,-0.15) rectangle (3.0,0.75) node[midway] {$m$};
  \draw[->, thick, red!75] (2.55,0.95) -- (3.6,0.95) node[right] {$x$};
  \draw[->, thick] (2.55,-0.15) -- (2.55,-0.9) node[below] {$mg$};
  \node at (1.45,-0.55) {spring force restores};
\end{tikzpicture}
```

At equilibrium, $$kx_0=mg$$, so $$x_0=mg/k$$. But if displacement is measured from that new equilibrium, the net restoring force is still $$F=-kx$$, giving $$\omega=\sqrt{k/m}$$ and the same period formula. Therefore the quantity that depends on $$g$$ is the equilibrium extension. The answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
2. A pendulum clock is taken to a planet where the gravitational field strength is $$g/4$$. To keep the same small-angle period, the pendulum length should be changed from $$L$$ to

(A) $$4L$$

(B) $$2L$$

(C) $$L/2$$

(D) $$L/4$$


:::solution
The small-angle pendulum period is

$$
T=2\pi\sqrt{\frac{L}{g}}.
$$

To keep $$T$$ the same, the ratio $$L/g$$ must stay the same.


If the new gravitational field is $$g/4$$, then the new length must satisfy

$$
\frac{L_{\text{new}}}{g/4}=\frac{L}{g}.
$$

So $$L_{\text{new}}=L/4$$, and the answer is $$\boxed{\text{D}}$$.
:::
::::

::::problem
3. A mass on a spring is released from rest at $$x=A$$. When it first reaches $$x=A/3$$, what fraction of the total mechanical energy is kinetic?

(A) $$1/9$$

(B) $$2/3$$

(C) $$8/9$$

(D) $$\sqrt{8}/3$$


:::solution
The mass is released from rest at amplitude $$A$$, so the total mechanical energy is

$$
E=\frac12kA^2.
$$

At $$x=A/3$$, the spring potential energy is

$$
U=\frac12k\left(\frac{A}{3}\right)^2=\frac19\left(\frac12kA^2\right)=\frac19E.
$$

Therefore the kinetic energy is the remaining $$8/9$$ of the total. The answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
4. A block of mass $$m$$ is attached to a spring of constant $$k$$ on a frictionless horizontal surface. A small constant horizontal force $$F_0$$ is then applied and left on. Compared with the original oscillator, the new motion has

(A) the same angular frequency and an equilibrium shifted by $$F_0/k$$

(B) angular frequency $$\sqrt{(k+F_0)/m}$$ and the same equilibrium

(C) angular frequency $$\sqrt{k/(m+F_0/g)}$$ and an equilibrium shifted by $$F_0/k$$

(D) no simple harmonic motion because the net force is not proportional to $$x$$


:::solution
The net force is

$$
F_{\text{net}}=F_0-kx.
$$

Equilibrium occurs where this is zero:

$$
F_0-kx_{\text{eq}}=0
\quad\Rightarrow\quad
x_{\text{eq}}=\frac{F_0}{k}.
$$


Let $$u=x-x_{\text{eq}}$$ be displacement from the new equilibrium. Then the net force becomes $$F=-ku$$, so the angular frequency is still $$\omega=\sqrt{k/m}$$. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
5. A bead slides without friction on a circular hoop of radius $$R$$ in a vertical plane. Near the bottom of the hoop, the coordinate along the arc is $$s=R\theta$$. The bead's small-oscillation angular frequency is

(A) $$\sqrt{g/R}$$

(B) $$\sqrt{R/g}$$

(C) $$g/R$$

(D) $$\sqrt{2g/R}$$


:::solution
Near the bottom of the hoop, the tangential component of gravity is approximately

$$
F_t=-mg\sin\theta\approx -mg\theta.
$$

Since arc displacement is $$s=R\theta$$, this becomes

$$
F_t\approx -mg\frac{s}{R}.
$$


Thus

$$
ma_s=-\frac{mg}{R}s,
$$

so $$\omega^2=g/R$$ and $$\omega=\sqrt{g/R}$$. The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
6. A mass $$m$$ is attached between two horizontal springs with constants $$k_1$$ and $$k_2$$ on a frictionless track, one spring on each side. Both springs are relaxed when the mass is at $$x=0$$. If the mass is displaced slightly, its angular frequency is

(A) $$\sqrt{\dfrac{k_1+k_2}{m}}$$

(B) $$\sqrt{\dfrac{k_1k_2}{m(k_1+k_2)}}$$

(C) $$\sqrt{\dfrac{k_1-k_2}{m}}$$

(D) $$\sqrt{\dfrac{k_1}{m}}+\sqrt{\dfrac{k_2}{m}}$$


:::solution
If the mass is displaced right by $$x$$, the left spring is stretched and pulls left, while the right spring is compressed and also pushes left.

The restoring forces add:

$$
F= -k_1x-k_2x=-(k_1+k_2)x.
$$

So the effective spring constant is $$k_1+k_2$$, and

$$
\omega=\sqrt{\frac{k_1+k_2}{m}}.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
7. A block attached to a spring oscillates on a frictionless table. The block is replaced by two identical blocks glued together, and the amplitude is doubled. The maximum acceleration changes by a factor of

(A) $$1/\sqrt{2}$$

(B) $$1/2$$

(C) $$\sqrt{2}$$

(D) $$1$$


:::solution
For a spring oscillator,

$$
a=-\omega^2x,
\qquad
\omega^2=\frac{k}{m}.
$$

The maximum acceleration happens at the endpoints where $$\lvert x\rvert=A$$:

$$
a_{\max}=A\frac{k}{m}.
$$


The new amplitude is $$2A$$, but the new mass is $$2m$$, so

$$
a_{\max,new}=(2A)\frac{k}{2m}=A\frac{k}{m}.
$$

The factor is $$1$$, so the answer is $$\boxed{\text{D}}$$.
:::
::::

::::problem
8. A mass $$m$$ on a vertical spring oscillates about its equilibrium position with period $$T$$. At the instant the mass passes through equilibrium moving downward, a second identical mass is gently attached. Immediately after attachment, the new equilibrium position is

(A) unchanged

(B) lower by $$mg/k$$

(C) lower by $$2mg/k$$

(D) higher by $$mg/k$$


:::solution
The equilibrium extension of a vertical spring is found by balancing spring force with weight.

Before attachment,

$$
kx_1=mg
\quad\Rightarrow\quad
x_1=\frac{mg}{k}.
$$

After an identical mass is attached, the total mass is $$2m$$, so

$$
kx_2=2mg
\quad\Rightarrow\quad
x_2=\frac{2mg}{k}.
$$

The equilibrium position shifts lower by $$x_2-x_1=mg/k$$. The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
9. A pendulum bob of mass $$m$$ and length $$L$$ is also attached to a horizontal spring of constant $$k$$ that is relaxed when the bob hangs vertically. For small angles, compared with the same pendulum without the spring, the period is

(A) larger

(B) smaller

(C) unchanged

(D) zero because the forces cancel


:::solution
For small angles, the bob moves horizontally by approximately $$x=L\theta$$. The horizontal spring force is then approximately $$F_s=-kL\theta$$.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,decorations.pathmorphing}
\begin{tikzpicture}[>=Stealth, font=\small, scale=0.9]
  \coordinate (p) at (0,2.5);
  \coordinate (b) at (1.0,0.7);
  \draw[thick] (p) -- (b);
  \fill (p) circle (2pt);
  \draw[fill=blue!10, thick] (b) circle (0.18) node[right=4pt] {$m$};
  \draw[dashed] (p) -- (0,0.35);
  \draw (0,1.85) arc[start angle=-90,end angle=-62,radius=0.55] node[midway,below] {$\theta$};
  \draw[->, thick] (b) -- ++(-0.55,1.0) node[left] {$T$};
  \draw[->, thick] (b) -- ++(0,-0.95) node[below] {$mg$};
  \draw[->, thick, red!75] (b) -- ++(0.9,0) node[right] {$a$};
\end{tikzpicture}
```

This spring force adds an extra restoring torque in the same direction as gravity's restoring torque. More restoring torque means a larger effective angular frequency. Since

$$
T=\frac{2\pi}{\omega},
$$

a larger $$\omega$$ means a smaller period. The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
10. A particle moves in the potential $$U(x)=\dfrac{1}{2}kx^2+\epsilon x^4$$, where $$k,\epsilon>0$$. For sufficiently small oscillations about $$x=0$$, the angular frequency is

(A) $$\sqrt{k/m}$$

(B) $$\sqrt{(k+4\epsilon)/m}$$

(C) $$\sqrt{\epsilon/m}$$

(D) dependent on amplitude even in the small-amplitude limit


:::solution
For very small oscillations about equilibrium, approximate the potential by its quadratic part. The quartic term is much smaller than $$x^2$$ near $$x=0$$.


More formally,

$$
\omega=\sqrt{\frac{U''(0)}{m}}.
$$

For

$$
U(x)=\frac12kx^2+\epsilon x^4,
$$

we have $$U''(0)=k$$. Therefore

$$
\omega=\sqrt{\frac{k}{m}}.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
11. A particle moves near $$x=0$$ in the potential $$U(x)=U_0+ax^2+bx^3+cx^4$$, where $$a>0$$. For sufficiently small oscillations, the angular frequency is

(A) $$\sqrt{a/m}$$

(B) $$\sqrt{2a/m}$$

(C) $$\sqrt{6b/m}$$

(D) $$\sqrt{12c/m}$$


:::solution
For small oscillations near an equilibrium, the angular frequency depends on the curvature of the potential at that point:

$$
\omega=\sqrt{\frac{U''(0)}{m}}.
$$

Differentiate twice:

$$
U'(x)=2ax+3bx^2+4cx^3,
$$

$$
U''(x)=2a+6bx+12cx^2.
$$

At $$x=0$$,

$$
U''(0)=2a.
$$

Thus $$\omega=\sqrt{2a/m}$$, and the answer is $$\boxed{\text{B}}$$.

The cubic and quartic terms can affect larger-amplitude motion, but in the small-amplitude limit their contribution to the curvature at $$x=0$$ does not change the leading frequency.
:::
::::

::::problem
12. A solid cylinder of mass $$M$$ and radius $$R$$ is attached at its center to a horizontal spring of constant $$k$$ and rolls without slipping. Its angular frequency is

(A) $$\sqrt{k/M}$$

(B) $$\sqrt{2k/M}$$

(C) $$\sqrt{2k/(3M)}$$

(D) $$\sqrt{3k/(2M)}$$


:::solution
The spring pulls on the cylinder's center, but because the cylinder rolls, some energy goes into rotation.

The kinetic energy is

$$
K=\frac12M\dot x^2+\frac12I\left(\frac{\dot x}{R}\right)^2.
$$

For a solid cylinder, $$I=\frac12MR^2$$, so the effective inertia is

$$
M+\frac{I}{R^2}=M+\frac12M=\frac32M.
$$

Therefore

$$
\omega=\sqrt{\frac{k}{(3/2)M}}=\sqrt{\frac{2k}{3M}}.
$$

The answer is $$\boxed{\text{C}}$$.
:::
::::

#### FRQ

::::frq{id=ap-physics-c-mechanics-oscillations-1}
1. A solid cylinder of mass $$M$$ and radius $$R$$ rests on a rough horizontal surface and rolls without slipping. A light spring of constant $$k$$ is attached to the cylinder's center, and the other end is fixed to a wall. The cylinder is displaced a small distance $$A$$ from equilibrium and released from rest.

   $$(A)$$ Using energy, derive an expression for the angular frequency of the oscillation in terms of $$M$$ and $$k$$.

   $$(B)$$ Determine the maximum static friction force needed during the motion.

   $$(C)$$ Find the minimum coefficient of static friction required for rolling without slipping for the entire motion.

   $$(D)$$ Suppose the cylinder is replaced by a thin hoop with the same $$M$$ and $$R$$. Without redoing the full calculation, determine whether the period increases, decreases, or stays the same, and justify your answer.


:::solution
$$(A)$$ Use energy with the rolling constraint. The cylinder's center moves with speed $$\dot x$$, and rolling without slipping gives $$\omega_{\text{rot}}=\dot x/R$$.

The kinetic energy is

$$
K=\frac12M\dot x^2+\frac12I\omega_{\text{rot}}^2.
$$

For a solid cylinder, $$I=\frac12MR^2$$, so

$$
K=\frac12M\dot x^2+\frac12\left(\frac12MR^2\right)\left(\frac{\dot x}{R}\right)^2
=\frac34M\dot x^2.
$$

Write this as $$K=\frac12M_{\text{eff}}\dot x^2$$, so $$M_{\text{eff}}=3M/2$$. The spring potential is $$U=\frac12kx^2$$, so

$$
\boxed{\omega=\sqrt{\frac{k}{M_{\text{eff}}}}=\sqrt{\frac{2k}{3M}}}.
$$

$$(B)$$ The center acceleration is

$$
a=-\omega^2x=-\frac{2k}{3M}x.
$$

Static friction supplies the torque for angular acceleration. Using $$fR=I\alpha$$ and $$a=\alpha R$$,

$$
f=\frac{I}{R^2}\lvert a\rvert=\frac{M}{2}\lvert a\rvert.
$$

The largest acceleration occurs at $$\lvert x\rvert=A$$, so

$$
\boxed{f_{\max}=\frac{M}{2}\left(\frac{2k}{3M}A\right)=\frac{kA}{3}}.
$$

$$(C)$$ Rolling without slipping requires the needed static friction to be no larger than the maximum available static friction:

$$
f_{\max}\le \mu_sMg.
$$

Thus

$$
\frac{kA}{3}\le \mu_sMg,
$$

so

$$
\boxed{\mu_s\ge \frac{kA}{3Mg}}.
$$

$$(D)$$ A hoop has larger rotational inertia, $$I=MR^2$$, so the effective inertia $$M+I/R^2$$ is larger. A larger effective inertia with the same spring constant means smaller angular frequency and therefore a longer period.
:::
::::

::::frq{id=ap-physics-c-mechanics-oscillations-2}
2. A bead of mass $$m$$ slides without friction on a rigid circular wire of radius $$R$$ fixed in a vertical plane. The bead is also attached to a light spring of constant $$k$$ and negligible relaxed length whose other end is fixed at the top of the circle. Let $$\theta$$ be the bead's angular displacement from the bottom of the circle.

   $$(A)$$ Write the bead's gravitational potential energy and spring potential energy as functions of $$\theta$$, taking the bottom of the circle as zero gravitational potential.

   $$(B)$$ Find the condition on $$k$$ and $$R$$ for the bottom of the circle to be a stable equilibrium.

   $$(C)$$ For small oscillations about the bottom, derive the angular frequency in terms of $$m$$, $$g$$, $$R$$, and $$k$$.

   $$(D)$$ Describe qualitatively how the equilibrium position changes if the spring constant is made very large.


:::solution
$$(A)$$ Taking the bottom as zero gravitational potential, the bead rises a height $$R(1-\cos\theta)$$ when it is at angle $$\theta$$ from the bottom.


So

$$
\boxed{U_g=mgR(1-\cos\theta)}.
$$

The spring has negligible relaxed length, so its potential is $$\frac12k\ell^2$$. The distance from the top of the circle to the bead is the chord length. The central angle between the top and the bead is $$\pi-\theta$$, giving

$$
\ell^2=2R^2(1-\cos(\pi-\theta))=2R^2(1+\cos\theta).
$$

Thus

$$
\boxed{U_s=\frac12k\ell^2=kR^2(1+\cos\theta)}.
$$

$$(B)$$ The bottom is stable if the total potential has positive curvature at $$\theta=0$$. The total potential is

$$
U(\theta)=mgR(1-\cos\theta)+kR^2(1+\cos\theta).
$$

Differentiate twice:

$$
U''(\theta)=mgR\cos\theta-kR^2\cos\theta.
$$

At the bottom,

$$
U''(0)=mgR-kR^2.
$$

For stability,

$$
\boxed{kR<mg}.
$$

$$(C)$$ For small angular motion, the kinetic energy is

$$
K=\frac12mR^2\dot\theta^2.
$$

Near stable equilibrium, $$U\approx U(0)+\frac12U''(0)\theta^2$$, so

$$
\omega=\sqrt{\frac{U''(0)}{mR^2}}.
$$

Therefore

$$
\boxed{\omega=\sqrt{\frac{g}{R}-\frac{k}{m}}}.
$$

$$(D)$$ If $$k$$ is very large, the spring strongly favors making its length small, which pulls the bead toward the top anchor. Then the bottom is no longer stable, and the stable equilibrium shifts upward away from the bottom.
:::
::::

::::frq{id=ap-physics-c-mechanics-oscillations-3}
3. A student studies a cart-spring oscillator on a horizontal track. The cart of mass $$M$$ has a small block of mass $$m$$ resting on top of it. The coefficient of static friction between the block and cart is $$\mu_s$$. The cart is pulled to amplitude $$A$$ and released from rest; the block does not slip at first.

   $$(A)$$ Derive the period of the combined motion while the block does not slip.

   $$(B)$$ Determine the maximum amplitude $$A_{\max}$$ for which the block can remain at rest relative to the cart throughout the motion.

   $$(C)$$ The student measures the period for several added top-block masses $$m$$. Describe a graph that could be used to determine the spring constant $$k$$ from the data, including what should be plotted on each axis.

   $$(D)$$ If the block begins to slip near the endpoints of the motion, explain whether the measured period should be expected to match the expression from part $$(A)$$. Your explanation should refer to the forces on the two objects, not just energy loss.


:::solution
$$(A)$$ If the top block does not slip, the cart and block move together as one object of total mass $$M+m$$.


The oscillator is therefore a spring attached to mass $$M+m$$, so

$$
\boxed{T=2\pi\sqrt{\frac{M+m}{k}}}.
$$

$$(B)$$ The largest acceleration in SHM occurs at the endpoints:

$$
a_{\max}=A\omega^2=A\frac{k}{M+m}.
$$

The only horizontal force on the top block is static friction, so static friction must provide

$$
f_s=ma_{\max}=m\frac{Ak}{M+m}.
$$

For no slipping, this must not exceed $$\mu_smg$$:

$$
m\frac{Ak}{M+m}\le \mu_smg.
$$

Cancel $$m$$ and solve for $$A$$:

$$
\boxed{A_{\max}=\frac{\mu_sg(M+m)}{k}}.
$$

$$(C)$$ Square the period equation:

$$
T^2=\frac{4\pi^2}{k}(M+m).
$$

So a graph of $$T^2$$ on the vertical axis versus $$M+m$$ on the horizontal axis should be linear.


The slope is $$4\pi^2/k$$, so

$$
\boxed{k=\frac{4\pi^2}{\text{slope}}}.
$$

$$(D)$$ If the block slips, the two masses no longer share one acceleration. Static friction is no longer whatever value is needed to enforce common motion; once slipping begins, the interaction force changes and the cart is not simply attached to a single combined mass $$M+m$$. Therefore the measured period should not match the expression in part $$(A)$$.
:::
::::
