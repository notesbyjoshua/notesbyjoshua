---
title: "Problem Solving Techniques"
sidebar:
  order: 3
---

---

In this section, I will describe some very helpful methods/tools you could use on the F=ma/USAPhO, even though it is very rare that they will be seen on the AP exams. These are not new physics — they are *strategies* that turn an intimidating problem into a routine one. The best competitors reach for them automatically: before grinding through force diagrams, ask "is there a shortcut here?"

---

## Virtual Work Method

The virtual work method is a way to find equilibrium conditions (or the force needed to hold something) without drawing a single free-body diagram or worrying about internal/constraint forces. It rests on one principle:

> For a system in equilibrium, the total work done by the applied forces under any small displacement consistent with the constraints is zero: $$\;\delta W=0$$.

The magic is that **constraint forces do no virtual work**: normal forces, tensions in inextensible strings, and frictionless contact forces are all perpendicular to the allowed motion (or internal and canceling), so they drop out entirely. You only ever deal with the forces you care about (gravity, applied loads, springs).

:::strategy
1. Identify the **degrees of freedom** and pick a single coordinate $$q$$ that captures the allowed motion (e.g. rectangular, polar, etc.).
2. Write the positions of every point where a force acts in terms of $$q$$.
3. Give the system a virtual displacement $$\delta q$$ and compute the total work $$\delta W=\sum_i \vec F_i\cdot\delta\vec r_i$$.
4. Set $$\delta W=0$$ and solve.
:::

Equivalently, if the forces are conservative, equilibrium is where the potential energy is stationary: $$dU/dq=0$$.

<div class="theorem-box">

**Example.** A massless lever pivots about a fulcrum, with the input force $$F_1$$ applied a distance $$a$$ from the pivot and the load $$F_2$$ a distance $$b$$ on the other side. Rotate the lever by a tiny angle $$\delta\theta$$. The input point moves $$a\,\delta\theta$$ and the load point moves $$b\,\delta\theta$$, so

$$
\delta W = F_1(a\,\delta\theta)-F_2(b\,\delta\theta)=0\quad\Longrightarrow\quad F_1 a=F_2 b.
$$

The lever law falls out in one line, no torque diagram needed. The same method instantly gives the mechanical advantage of pulley systems, wedges, gear trains, and hydraulic presses: **the force ratio is the inverse of the displacement ratio**, because the constraint ties the displacements together.

</div>

---

## Dimensional analysis

Before solving, ask what combination of the given quantities even *has the right units* for the answer. Often there's only one, which pins down the answer up to a dimensionless constant. This catches algebra errors, and sometimes solves the problem outright.

<div class="theorem-box">

**Example.** Derive the formula for the period of a pendulum up to constants.

Suppose you forgot the pendulum formula. The period $$T$$ (units: s) could depend on length $$L$$ (m), mass $$m$$ (kg), and gravity $$g$$ (m/s²). The only way to build a time from these is $$\sqrt{L/g}$$: mass cannot appear, because there's no other mass to cancel its kg. So $$T=C\sqrt{L/g}$$ for some dimensionless $$C$$ (which turns out to be $$2\pi$$). Dimensional analysis got the entire physical content — including the surprising fact that period is mass-independent — for free.

</div>

The method's one blind spot is **dimensionless constants** (the $$2\pi$$) and dimensionless ratios (like angles or the Reynolds number), which it cannot determine. Use it to fix the *form* of an answer and to sanity-check, not to nail numerical prefactors.

---

## Exploiting symmetry

If a problem has a symmetry, the answer must respect it. This lets you skip enormous amounts of computation:

- **Cancellation:** in computing a field or force, components that the symmetry maps onto their own negatives must sum to zero. (The field on the axis of a charged ring has no transverse component — every element's transverse contribution is canceled by the element opposite it.)
- **Gauss's law / Ampère's law:** symmetry is what makes these usable — it forces the field to be constant over a well-chosen surface or loop, pulling it out of the integral.
- **Superposition tricks:** a charged disk with a hole is a full disk *minus* a small disk; a sphere with an off-center cavity is a full sphere minus a smaller one. Adding back the missing piece restores symmetry and makes each part trivial. To solve, just set the would-be cavity to have negative mass/charge/whatever variable you are solving for and solve from there.

Always pause to ask: "what does this setup look the same under?" Reflection, rotation, and translation symmetries each kill some terms before you compute anything.

---

## Limiting cases

After getting an answer (or to choose between answer choices), test it in extreme cases where you already know what should happen:

- Let a mass, length, or angle go to $$0$$ or $$\infty$$ and check the formula behaves sensibly.
- Set two quantities equal, or make one much larger than another, and see if it reduces to a simpler known result.
- Check the **units** of the final expression.
- Check **signs and directions** make physical sense.

For example, the two-body reduced mass $$\mu=\dfrac{m_1 m_2}{m_1+m_2}$$ (shown later) should reduce to $$m$$ when one mass is infinite (a fixed center) and to $$m/2$$ when the masses are equal — both of which it does. On a multiple-choice exam, limiting cases often eliminate every wrong option in seconds.

---

## Working in non-inertial frames

It is frequently easier to jump *into* an accelerating frame and add a **pseudo-force** $$-m\vec a_{\text{frame}}$$ to every object than to track motion from the ground. In a frame accelerating with $$\vec a$$, everything feels an extra uniform force as if gravity had tilted; in a rotating frame, you add the **centrifugal** force $$m\omega^2 r$$ (outward) and, for moving objects, the Coriolis force.

This converts many dynamics problems into *statics* problems. A block on an accelerating wedge, a pendulum in an accelerating car, or a bead in a rotating tube all become "find the equilibrium under an effective gravity $$\vec g_{\text{eff}}=\vec g-\vec a_{\text{frame}}$$" — the same trick used for [accelerating and rotating fluids](/notes/physics/fluiddynamics/).

---

## Problem-solving strategy

Since this whole page is a toolbox, the decision tree is a meta one: when a problem looks ugly, which technique do you reach for first?

:::strategy
1. **Asked for an equilibrium force or condition, with messy tensions/normals/constraints**: Virtual work. Pick one coordinate $$q$$, write $$\delta W=\sum_i\vec F_i\cdot\delta\vec r_i=0$$, and the constraint forces drop out — or use $$dU/dq=0$$ if forces are conservative.
2. **You only need the *form* of the answer, or you're sanity-checking algebra**: Dimensional analysis. Build the unique combination with the right units; e.g. a time from length and gravity can only be $$\sqrt{L/g}$$. Just remember it cannot fix dimensionless constants like the $$2\pi$$.
3. **Computing a field, force, or integral over a symmetric configuration**: Exploit symmetry. Components mapped to their negatives cancel, and Gauss's/Ampère's law become usable because the field is constant over a chosen surface or loop.
4. **A shape is "almost" symmetric (a disk with a hole, a sphere with a cavity)**: Superposition — add back the missing piece as negative mass/charge, solve each symmetric part, subtract.
5. **You have a candidate answer and want to test it (or kill MC options)**: Limiting cases. Send a length, mass, or angle to $$0$$ or $$\infty$$, set two quantities equal, and check units, signs, and directions reduce to something known.
6. **Dynamics in an accelerating or rotating setting**: Jump into the non-inertial frame. Add the pseudo-force $$-m\vec a_{\text{frame}}$$ (or centrifugal $$m\omega^2 r$$ plus Coriolis), absorb it into an effective gravity $$\vec g_{\text{eff}}=\vec g-\vec a_{\text{frame}}$$, and solve the resulting *statics* problem.
:::

:::mistakes
- Trusting dimensional analysis for numerical prefactors — it gives the scaling, never the $$2\pi$$ or other dimensionless factors and ratios.
- Forgetting that virtual work needs the displacement to be *consistent with the constraints*; an arbitrary $$\delta q$$ that violates a constraint reintroduces the forces you tried to eliminate.
- Claiming a symmetry the setup doesn't actually have — a broken symmetry (off-axis point, non-uniform density) means the "obviously zero" component is not zero.
- In the superposition trick, mismatching the sign or location of the subtracted piece so it doesn't exactly fill the would-be cavity.
- In rotating frames, dropping the Coriolis force for *moving* objects, or getting the centrifugal direction (outward) backwards.
- Reading off a limiting case carelessly: $$0/0$$ or $$\infty-\infty$$ forms need an actual expansion, not a guess.
:::
