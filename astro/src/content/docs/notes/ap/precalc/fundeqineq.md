---
title: "Unit 1 & 2: Fundamentals, Equations, and Inequalities"
sidebar:
  order: 1
---

## Definitions

Before we solve anything, we need a shared language for the kinds of numbers that can show up. These sets are nested: every natural number is an integer, every integer is rational, and every rational number is real.

- **Natural numbers**: $$\mathbb{N}=\{1,2,3,\ldots\}$$. These are the counting numbers.
- **Whole numbers**: $$\{0,1,2,3,\ldots\}$$. This is the natural numbers plus $$0$$.
- **Integers**: $$\mathbb{Z}=\{\ldots,-3,-2,-1,0,1,2,3,\ldots\}$$.
- **Rational numbers**: $$\mathbb{Q}=\left\{\frac{p}{q}\mid p,q\in\mathbb{Z},\ q\ne 0\right\}$$. These are numbers that can be written as fractions of integers.
- **Irrational numbers**: real numbers that are not rational, such as $$\pi$$, $$e$$, and $$\sqrt{2}$$.
- **Real numbers**: $$\mathbb{R}$$. These are all numbers on the number line.
- **Complex numbers**: $$\mathbb{C}=\{a+bi\mid a,b\in\mathbb{R},\ i=\sqrt{-1}\}$$.

Decimal form is often a good way to tell rational and irrational numbers apart. Rational decimals either terminate, like $$\frac{1}{2}=0.5$$, or repeat, like $$\frac{1}{3}=0.333\ldots$$. Irrational decimals do not terminate and do not repeat.

We also use set notation to describe groups of numbers:

- $$x\in A$$ means "$$x$$ is in set $$A$$."
- $$A\cup B$$ means "$$A$$ or $$B$$" (the **union**).
- $$A\cap B$$ means "$$A$$ and $$B$$" (the **intersection**).
- $$A\setminus B$$ means "in $$A$$ but not in $$B$$."
- $$\exists$$ means "there exists."
- $$\forall$$ means "for all."

**Interval notation** is another way to describe parts of the number line. Parentheses mean an endpoint is *not* included; brackets mean it is included:

$$
(3,5)=\{x\mid 3<x<5\},\qquad [3,5]=\{x\mid 3\le x\le 5\}.
$$

Infinity is never included, so it always uses a parenthesis:

$$
(-\infty,4]\quad\text{or}\quad (2,\infty).
$$

---

## Rectangular Coordinates

The **rectangular (Cartesian) coordinate plane** lets us turn algebra into geometry. A point $$(x,y)$$ records two movements: horizontal movement first, then vertical movement. The plane is divided into four quadrants, starting with Quadrant I in the upper right and moving counterclockwise. The signs of $$x$$ and $$y$$ tell you where the point is:

- Quadrant I: $$(+,+)$$
- Quadrant II: $$(-,+)$$
- Quadrant III: $$(-,-)$$
- Quadrant IV: $$(+,-)$$

The distance formula comes from the Pythagorean Theorem. For points $$A(x_1,y_1)$$ and $$B(x_2,y_2)$$,

$$
d(A,B)=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
$$

The midpoint formula averages the coordinates:

$$
M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right).
$$

These formulas are very useful later on for analytic geometry.

### Graphing lines

**Slope** measures how fast $$y$$ changes compared with $$x$$:

$$
m=\frac{\text{rise}}{\text{run}}=\frac{\Delta y}{\Delta x}=\frac{y_2-y_1}{x_2-x_1}.
$$

The same line can be written in several useful forms:

- **Slope-intercept form**: $$y=mx+b$$. This is best when you know the slope and $$y$$-intercept.
- **Point-slope form**: $$y-y_1=m(x-x_1)$$. This is best when you know a point and a slope.
- **Standard form**: $$Ax+By=C$$, usually with $$A,B,C\in\mathbb{Z}$$ and $$A\ge 0$$.

From standard form, if $$B\ne 0$$, the slope is

$$
m=-\frac{A}{B}.
$$

The intercepts are found by setting the other variable equal to $$0$$. For example, in $$Ax+By=C$$, the $$x$$-intercept is $$\frac{C}{A}$$ when $$A\ne 0$$, and the $$y$$-intercept is $$\frac{C}{B}$$ when $$B\ne 0$$.

Also, parallel lines have the same slope, while perpendicular lines have slopes that are negative reciprocals:

$$
m_1m_2=-1.
$$

---

## Solving Equations

### Linear equations

Solving a **linear equation** is usually a matter of undoing operations until the variable is alone. The main danger is not algebraic difficulty; it is losing track of what operation you applied to both sides.

For example,

$$
3x-7=11
$$

becomes

$$
3x=18
\quad\Longrightarrow\quad
x=6.
$$

Linear equations usually have one solution, but there are two special cases:

- If the variables disappear and you get a *true* statement, such as $$0=0$$, the equation is true for all real $$x$$ that sastisfies the equation.
- If the variables disappear and you get a *false* statement, such as $$0=5$$, there is no solution.

---

### Quadratic equations

A quadratic equation has the form

$$
ax^2+bx+c=0,\qquad a\ne 0.
$$

The basic idea is to get the equation into a form where the zero-product property, square roots, or the quadratic formula can finish the job.

<div class="theorem-box">

**Examples of problem solving techniques (Quadratics).**

Factoring is the fastest method when it works:

$$
(x-3)(x+2)=0
\quad\Longrightarrow\quad
x=3\quad\text{or}\quad x=-2.
$$

Be careful not to divide by a variable expression unless you know it is nonzero. For example, dividing $$x^2=3x$$ by $$x$$ loses the solution $$x=0$$. Instead, move everything to one side:

$$
x^2-3x=0
\quad\Longrightarrow\quad
x(x-3)=0.
$$

Completing the square rewrites a quadratic as a perfect square:

$$
x^2+6x+5=0
\quad\Longrightarrow\quad
(x+3)^2=4.
$$

Then

$$
x+3=\pm 2,
$$

so $$x=-1$$ or $$x=-5$$.

</div>

The quadratic formula works for every quadratic, but often times it is very inefficient to use compared to the techniques shown above. The solutions to any quadratic come in the form of:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

The discriminant $$b^2-4ac$$ tells you how many real roots the equation has:

- $$b^2-4ac>0$$: two distinct real solutions.
- $$b^2-4ac=0$$: one repeated real solution.
- $$b^2-4ac<0$$: no real solutions, but two complex solutions.

Vieta's formulas are also useful. If $$r_1$$ and $$r_2$$ are the roots of $$ax^2+bx+c=0$$, then

$$
r_1+r_2=-\frac{b}{a},\qquad r_1r_2=\frac{c}{a}.
$$

<div class="theorem-box">

**Proof (Quadratic formula).** Let the quadratic be in the form of

$$
ax^2 + bx + c = 0
$$

with $$a\ne 0$$. Divide both sides by $$a$$:

$$
x^2 + \frac{b}{a} x + \frac{c}{a} = 0
$$

Move the constant term to the other side:

$$
x^2+\frac{b}{a}x=-\frac{c}{a}.
$$

To complete the square, add $$\left(\frac{b}{2a}\right)^2$$ to both sides:

$$
\left(x+\frac{b}{2a}\right)^2
=-\frac{c}{a}+\frac{b^2}{4a^2}.
$$

Combine the right-hand side:

$$
\left(x+\frac{b}{2a}\right)^2
=\frac{b^2-4ac}{4a^2}.
$$

Take the square root of both sides:

$$
x+\frac{b}{2a}=\pm\frac{\sqrt{b^2-4ac}}{2a}.
$$

Subtract $$\frac{b}{2a}$$:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

</div>

---

### Rational equations

Rational equations contain variables in denominators. The first step is always domain restrictions: denominators cannot be $$0$$.

For example, in

$$
\frac{x+2}{x-3}=\frac{5}{x-3},
$$

we must have $$x\ne 3$$ before doing anything else.

:::strategy{title="Solving rational equations"}
1. State the restrictions.
2. Multiply both sides by the least common denominator.
3. Solve the resulting equation.
4. Check that no answer violates the restrictions.
:::

:::warning
Do not multiply by something like $$x-3$$ without remembering that $$x=3$$ was never allowed. That is how extraneous answers sneak in.
:::

### Polynomial equations

A polynomial equation uses whole-number powers of the variable:

$$
a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0=0.
$$

The usual first move is to put everything on one side and make the other side $$0$$. Then factor if possible.

Common factoring patterns include:

- Greatest common factor: $$x^3-4x=x(x^2-4)$$.
- Difference of squares: $$x^2-9=(x-3)(x+3)$$.
- Quadratic in form: $$x^4-5x^2+4=0$$.

For a quadratic-in-form equation, substitute. If

$$
x^4-5x^2+4=0,
$$

let $$u=x^2$$. Then

$$
u^2-5u+4=0.
$$

After solving for $$u$$, substitute back and solve for $$x$$. Do not stop at the substitution variable; the original question asked for $$x$$.

---

### Absolute value equations

Absolute value measures distance from $$0$$:

$$
\lvert x \rvert =\text{the distance between }x\text{ and }0.
$$

More generally, $$\lvert x-a \rvert$$ is the distance between $$x$$ and $$a$$. This distance interpretation is usually easier than memorizing cases.

For $$a > 0$$:

$$
\lvert u\rvert = a \quad \Longrightarrow \quad u = a \ \text{ or }\ u = -a
$$

$$
\lvert u\rvert < a \quad \Longrightarrow \quad -a < u < a
$$

$$
\lvert u\rvert > a \quad \Longrightarrow \quad u < -a \ \text{ or }\ u > a
$$

If $$a = 0$$, $$\lvert u\rvert = 0$$ means $$u = 0$$. If $$a < 0$$, $$\lvert u\rvert = a$$ has no solution in $$\mathbb{R}$$.

Absolute value expressions are also naturally piecewise. For example,

$$
\lvert x-3 \rvert=
\begin{cases}
x-3, & x\ge 3,\\
3-x, & x<3.
\end{cases}
$$

When an equation has several absolute values, break the number line at the values where the inside expressions equal $$0$$, solve on each interval, and check that each answer belongs to the interval where you found it.

---

### Exponential equations

When the bases can be made the same, rewrite first:

$$
2^{x-3}=8^{x}
\quad\Longrightarrow\quad
2^{x-3}=(2^3)^x=2^{3x}.
$$

Since $$2^u$$ is one-to-one,

$$
x-3=3x.
$$

In general, if $$a>0$$ and $$a\ne 1$$, then

$$
a^m=a^n\quad\Longrightarrow\quad m=n.
$$

If the bases cannot be matched cleanly, isolate the exponential expression and use logarithms. Keep an eye on the domain: logarithms only accept positive inputs, and exponential bases must be positive and not equal to $$1$$ in the usual real-valued setting.

---

### Fractional exponents

Fractional exponents are another way to write radicals:

$$
x^{p/q}=\sqrt[q]{x^p}.
$$

For example,

$$
x^{1/2}=\sqrt{x},\qquad x^{2/3}=\sqrt[3]{x^2}.
$$

Even roots require nonnegative radicands in the real numbers. Odd roots allow negative radicands. This is why $$\sqrt{x-4}$$ requires $$x\ge 4$$, but $$\sqrt[3]{x-4}$$ does not.

One important simplification is

$$
\sqrt{x^2}=\lvert x \rvert,
$$

not just $$x$$. The square root symbol means the nonnegative square root.

---

### Radical equations

Radical equations are equations with roots, such as

$$
\sqrt{x-5}=x-7.
$$

:::strategy{title="Solving radical equations"}
The process is careful, not mysterious:

1. Write the domain restrictions.
2. Isolate one radical.
3. Raise both sides to the needed power.
4. Repeat if another radical remains.
5. Check every candidate in the original equation.
:::

:::warning
The check is not optional. Squaring both sides can create answers that solve the squared equation but not the original equation.
:::

For example, if a step gives

$$
x-\sqrt{x}=20,
$$

then isolating and squaring may produce candidates. Each candidate must still be substituted back into the original radical equation.

---

## Inequalities

### Inequality basics

Solving inequalities feels like solving equations, but the answer is usually an interval or a union of intervals instead of a single number.

The key rule: multiplying or dividing by a negative number reverses the inequality sign:

$$
-2x<8
\quad\Longrightarrow\quad
x>-4.
$$

Compound inequalities describe overlaps or unions:

- $$-3<2x-1\le 5$$ means both inequalities must be true at the same time.
- $$x<-2$$ or $$x>4$$ means either interval works.

Graphing on a number line is often the cleanest way to avoid mistakes. Open circles go with $$<$$ and $$>$$; closed circles go with $$\le$$ and $$\ge$$.

---

### Absolute value inequalities

Absolute value inequalities are distance statements. For $$a>0$$:

$$
\lvert u\rvert < a \quad \Longleftrightarrow \quad -a < u < a
$$

$$
\lvert u\rvert \le a \quad \Longleftrightarrow \quad -a \le u \le a
$$

$$
\lvert u\rvert > a \quad \Longleftrightarrow \quad u < -a \ \text{ or }\ u > a
$$

$$
\lvert u\rvert \ge a \quad \Longleftrightarrow \quad u \le -a \ \text{ or }\ u \ge a
$$

The short version:

- "Less than" means between.
- "Greater than" means outside.

For example,

$$
\lvert 3x-2 \rvert \le 4
$$

means

$$
-4\le 3x-2\le 4.
$$

But

$$
\lvert 4-5x \rvert >1
$$

means

$$
4-5x>1
\quad\text{or}\quad
4-5x<-1.
$$

If the absolute value expression is compared to a negative number, pause. Since absolute value is never negative, statements like $$\lvert u \rvert <-3$$ have no solution.

---

### Polynomial inequalities

Polynomial inequalities ask where a polynomial is positive or negative:

$$
p(x)>0,\qquad p(x)\le 0,\qquad \text{etc.}
$$

:::strategy{title="Polynomial inequalities (sign chart)"}
1. Move everything to one side so the other side is $$0$$.
2. Factor the polynomial.
3. Mark the zeros on a number line.
4. Test one point in each interval, or use sign changes from multiplicity.
5. Include zeros only when the inequality has $$\le$$ or $$\ge$$.
:::

Multiplicity matters. A simple root usually changes the sign. An even-multiplicity root touches the axis and does not change the sign.

For example,

$$
(x-1)^2(x+3)<0
$$

has critical numbers $$-3$$ and $$1$$. The squared factor is never negative and does not change sign at $$x=1$$, so the sign behavior is controlled mostly by $$x+3$$.

---

### Rational inequalities

Typical form: $$\dfrac{P(x)}{Q(x)} > 0$$, $$\ge 0$$, $$< 0$$, or $$\le 0$$ (strict vs non-strict matters at zeros of the denominator).

The method is similar to polynomial inequalities, with one major warning: denominator zeros are never allowed.

:::strategy{title="Rational inequalities (safest process)"}
1. Move everything to one side and combine into one fraction.
2. Factor the numerator and denominator.
3. Mark zeros of the numerator and denominator on a number line.
4. Test signs on each interval.
5. Include numerator zeros only if the inequality allows equality.
6. Never include denominator zeros.
:::

:::warning
Do not multiply both sides by the denominator unless you already know its sign. If the denominator could be positive or negative, multiplying by it may or may not reverse the inequality, which is exactly the problem the sign chart avoids.
:::

---

### Radical inequalities

Example: $$\sqrt{f(x)} < g(x)$$.

Radical inequalities need more care than radical equations because squaring inequalities is only automatically safe when both sides are known to be nonnegative.

Always begin with the domain. For an even root,

$$
\sqrt{f(x)}
$$

requires $$f(x)\ge 0$$.

If the inequality is

$$
\sqrt{f(x)}\le g(x),
$$

then we also need $$g(x)\ge 0$$, because the left side is nonnegative. After those conditions are in place, squaring is safe:

$$
f(x)\le g(x)^2.
$$

For

$$
\sqrt{f(x)}>g(x),
$$

split into cases:

- If $$g(x)<0$$, the inequality is automatically true wherever the radical exists.
- If $$g(x)\ge 0$$, square both sides and solve $$f(x)>g(x)^2$$.

The final answer is the union of valid pieces that also satisfy the original domain.

---

## Symmetry

Symmetry asks what happens to a graph when you reflect or rotate it. The algebra tests come from replacing points with their reflected versions.

### Symmetry about the axes

- $$x$$-axis symmetry: if $$(x,y)$$ is on the graph, then $$(x,-y)$$ is also on the graph. Algebra test: replace $$y$$ with $$-y$$ and see whether the equation stays the same.
- $$y$$-axis symmetry: if $$(x,y)$$ is on the graph, then $$(-x,y)$$ is also on the graph. Algebra test: replace $$x$$ with $$-x$$.
- Origin symmetry: if $$(x,y)$$ is on the graph, then $$(-x,-y)$$ is also on the graph. Algebra test: replace both $$x$$ with $$-x$$ and $$y$$ with $$-y$$.

For example, the graph of

$$
y=x^2
$$

has $$y$$-axis symmetry because replacing $$x$$ with $$-x$$ gives

$$
y=(-x)^2=x^2.
$$

The graph of

$$
y=x^3
$$

has origin symmetry because replacing both variables gives

$$
-y=(-x)^3=-x^3,
$$

which simplifies back to $$y=x^3$$.

<div class="theorem-box">

**Extension.** If a graph has both $$x$$-axis and $$y$$-axis symmetry, does it necessarily have origin symmetry? If a graph has origin symmetry, does it necessarily have $$x$$-axis and $$y$$-axis symmetry?

</div>

---

## Practice

1. The taxicab distance between points $$(x_1, y_1)$$ and $$(x_2, y_2)$$ in the coordinate plane is given by $$\lvert x_1 - x_2 \rvert + \lvert y_1 - y_2 \rvert$$. For how many points $$P$$ with integer coordinates is the taxicab distance between $$P$$ and the origin less than or equal to $$20$$? (2022 AMC 12A)
2. Solve for $$x$$: $$x^4 - 13x^2 + 36 = 0$$.
3. Simplify $$\sqrt{\frac{x^4}{256} + \frac{x^3}{32} + \frac{5x^2}{16} + x + 4 + 16x - 8\sqrt{4x-7} - 24 + 2(\frac{x^2}{16} + \frac{x}{4} + 2)(-2 + 2\sqrt{4x-7})}$$. (Hint: Use factor by grouping.)
4. Solve for $$x$$ and discard any extraneous solutions: $$\dfrac{1}{x-1} + \dfrac{2}{x^2-1} = \dfrac{3}{x+1}$$.
5. Solve for $$x$$ in $$\mathbb{R}$$: $$9^x - 10\cdot 3^x + 9 = 0$$.
6. Solve for $$x$$ in $$\mathbb{R}$$ and check every candidate in the original equation: $$\sqrt{2x+3} + \sqrt{x+1} = 3$$.
7. Solve for $$x$$ in $$\mathbb{R}$$ and write the answer in interval notation: $$\dfrac{3x+1}{x-2} > 2$$.
8. Solve for $$x$$ in $$\mathbb{R}$$ and write the answer in interval notation: $$\lvert x - 2\rvert + \lvert x + 4\rvert \le 10$$.
9. Solve for $$x$$ in $$\mathbb{R}$$ and write the answer in interval notation: $$\lvert x^{2} - 9\rvert \le 5$$.
10. Solve in $$\mathbb{R}$$: $$(x-1)^{2}(x-4)(x+2) < 0$$. Explain how repeated roots change the sign chart compared with all simple roots.
11. Solve in $$\mathbb{R}$$: $$x^{3} - 5x^{2} + 6x \ge 0$$.
12. Solve in $$\mathbb{R}$$: $$\dfrac{x^{2} - 4}{x^{2} + x} \le 0$$. Give the domain, a single rational inequality of the form $$\dfrac{R(x)}{Q(x)} \le 0$$ with no common factors, and the solution in interval notation.
13. Solve in $$\mathbb{R}$$: $$\sqrt{4 - x^{2}} \ge x$$. Find the radical domain first, then split into $$x < 0$$ and $$x \ge 0$$ before squaring where legal.
14. Solve in $$\mathbb{R}$$: $$\sqrt{x^{2} + 5} \le x + 2$$. Impose all conditions needed before and after squaring.
15. Determine the symmetries of both graphs: $$f(x)=\dfrac{x^2}{x^2+1}$$ and $$g(x)=x\lvert x\rvert$$. For each, decide whether the graph has $$y$$-axis symmetry, $$x$$-axis symmetry, origin symmetry, or none.
16. (Bonus, Markov equations)

   Our goal is to find all positive integer solutions $$(x,y)$$ to

   $$
   x^2+y^2+1=3xy.
   $$

   This is a small version of a famous family of Diophantine equations (equations with positive integer solutions) known as Markov equations.

   $$(A)$$ Find the solutions with $$y=1$$.

   $$(B)$$ Treat the equation as a quadratic in $$x$$. If $$x$$ is one root, use Vieta's formulas to find the other root $$x'$$.

   $$(C)$$ Suppose $$(x,y)$$ is a positive integer solution with $$x\ge y\ge 2$$. Prove that the other root $$x'$$ is a positive integer and that $$x'<y$$.

   $$(D)$$ Explain why repeatedly replacing the larger coordinate by the smaller Vieta root must eventually reach a solution with one coordinate equal to $$1$$.

   $$(E)$$ Reverse the process to describe all positive integer solutions.

---

## Solutions

<div class="theorem-box">

### Solution 1

We want integer points $$(x,y)$$ satisfying

$$
\lvert x \rvert +\lvert y \rvert \le 20.
$$

For distance $$0$$, there is only the origin: $$1$$ point.

For each distance $$r\ge 1$$, the equation

$$
\lvert x \rvert +\lvert y \rvert =r
$$

has $$4r$$ integer points. Therefore the total number of points is

$$
1+\sum_{r=1}^{20}4r
=1+4\left(\frac{20\cdot 21}{2}\right)
=1+840
=841.
$$

Thus

$$
\boxed{841}.
$$

</div>

<div class="theorem-box">

### Solution 2

Let $$u=x^2$$. Then

$$
x^4-13x^2+36=0
$$

becomes

$$
u^2-13u+36=0.
$$

Factor:

$$
(u-9)(u-4)=0.
$$

So $$u=9$$ or $$u=4$$. Since $$u=x^2$$,

$$
x^2=9
\quad\text{or}\quad
x^2=4.
$$

Therefore

$$
\boxed{x=-3,-2,2,3}.
$$

</div>

<div class="theorem-box">

### Solution 3

Let

$$
A=\frac{x^{2}}{16}+\frac{x}{4}+2
\qquad\text{and}\qquad
B=-2+2\sqrt{4x-7}.
$$

The first five terms under the square root are exactly $$A^2$$:

$$
\left(\frac{x^{2}}{16}+\frac{x}{4}+2\right)^2
=\frac{x^4}{256}+\frac{x^3}{32}+\frac{5x^2}{16}+x+4.
$$

The next three terms are exactly $$B^2$$:

$$
\left(-2+2\sqrt{4x-7}\right)^2
=16x-8\sqrt{4x-7}-24.
$$

The remaining term is $$2AB$$, so the expression under the radical is

$$
A^2+B^2+2AB=(A+B)^2.
$$

Thus the original expression is

$$
\sqrt{(A+B)^2}=\lvert A+B\rvert.
$$

Now

$$
A+B=\frac{x^2}{16}+\frac{x}{4}+2\sqrt{4x-7}.
$$

The domain requires $$4x-7\ge 0$$, so $$x\ge \frac74$$. On this domain, $$A+B\ge 0$$, so

$$
\boxed{\frac{x^2}{16}+\frac{x}{4}+2\sqrt{4x-7}}.
$$

</div>

<div class="theorem-box">

### Solution 4

The denominators show that

$$
x\ne 1,\qquad x\ne -1.
$$

Start with

$$
\frac{1}{x-1}+\frac{2}{x^2-1}=\frac{3}{x+1}.
$$

Factor $$x^2-1=(x-1)(x+1)$$ and multiply both sides by $$(x-1)(x+1)$$:

$$
x+1+2=3(x-1).
$$

Solve:

$$
x+3=3x-3
\quad\Longrightarrow\quad
6=2x
\quad\Longrightarrow\quad
x=3.
$$

Since $$3$$ is allowed in the original equation,

$$
\boxed{x=3}.
$$

</div>

<div class="theorem-box">

### Solution 5

Let

$$
u=3^x.
$$

Then $$9^x=(3^x)^2=u^2$$, so

$$
9^x-10\cdot 3^x+9=0
$$

becomes

$$
u^2-10u+9=0.
$$

Factor:

$$
(u-1)(u-9)=0.
$$

Thus $$u=1$$ or $$u=9$$. Returning to $$u=3^x$$:

$$
3^x=1
\quad\Longrightarrow\quad
x=0,
$$

or

$$
3^x=9
\quad\Longrightarrow\quad
x=2.
$$

Therefore

$$
\boxed{x=0,2}.
$$

</div>

<div class="theorem-box">

### Solution 6

The domain requires

$$
2x+3\ge 0
\qquad\text{and}\qquad
x+1\ge 0,
$$

so $$x\ge -1$$. Start with

$$
\sqrt{2x+3}+\sqrt{x+1}=3.
$$

Isolate one radical:

$$
\sqrt{2x+3}=3-\sqrt{x+1}.
$$

Square both sides:

$$
2x+3=9-6\sqrt{x+1}+x+1.
$$

Simplify:

$$
x-7=-6\sqrt{x+1}.
$$

Then

$$
7-x=6\sqrt{x+1}.
$$

Square again:

$$
(7-x)^2=36(x+1).
$$

Expand and solve:

$$
x^2-14x+49=36x+36
$$

$$
x^2-50x+13=0.
$$

By the quadratic formula,

$$
x=\frac{50\pm\sqrt{2500-52}}{2}
=25\pm 6\sqrt{17}.
$$

Check candidates in the original equation. The value $$25+6\sqrt{17}$$ is extraneous because it makes $$7-x<0$$ in the equation $$7-x=6\sqrt{x+1}$$. The value $$25-6\sqrt{17}$$ works. Therefore

$$
\boxed{x=25-6\sqrt{17}}.
$$

</div>

<div class="theorem-box">

### Solution 7

Move everything to one side:

$$
\frac{3x+1}{x-2}>2
\quad\Longrightarrow\quad
\frac{3x+1}{x-2}-2>0.
$$

Combine into one rational expression:

$$
\frac{3x+1-2(x-2)}{x-2}>0.
$$

Simplify:

$$
\frac{x+5}{x-2}>0.
$$

The critical values are $$x=-5$$ and $$x=2$$. A sign chart gives positive values on $$(-\infty,-5)$$ and $$(2,\infty)$$. Since the inequality is strict, $$x=-5$$ is not included, and $$x=2$$ is never allowed.

Thus

$$
\boxed{(-\infty,-5)\cup(2,\infty)}.
$$

</div>

<div class="theorem-box">

### Solution 8

The expression

$$
\lvert x-2\rvert+\lvert x+4\rvert
$$

is the sum of the distances from $$x$$ to $$2$$ and from $$x$$ to $$-4$$. Break at $$x=-4$$ and $$x=2$$.

If $$x<-4$$, then

$$
\lvert x-2\rvert+\lvert x+4\rvert=-(x-2)-(x+4)=-2x-2.
$$

So

$$
-2x-2\le 10
\quad\Longrightarrow\quad
x\ge -6.
$$

This gives $$[-6,-4)$$.

If $$-4\le x\le 2$$, then

$$
\lvert x-2\rvert+\lvert x+4\rvert=(2-x)+(x+4)=6,
$$

which is always at most $$10$$. This gives $$[-4,2]$$.

If $$x>2$$, then

$$
\lvert x-2\rvert+\lvert x+4\rvert=(x-2)+(x+4)=2x+2.
$$

So

$$
2x+2\le 10
\quad\Longrightarrow\quad
x\le 4.
$$

This gives $$(2,4]$$. Combining all pieces,

$$
\boxed{[-6,4]}.
$$

</div>

<div class="theorem-box">

### Solution 9

Start with

$$
\lvert x^2-9\rvert\le 5.
$$

Rewrite this as a compound inequality:

$$
-5\le x^2-9\le 5.
$$

Add $$9$$ to all parts:

$$
4\le x^2\le 14.
$$

Thus $$x^2$$ must be at least $$4$$ and at most $$14$$. Therefore

$$
\boxed{[-\sqrt{14},-2]\cup[2,\sqrt{14}]}.
$$

</div>

<div class="theorem-box">

### Solution 10

The inequality is already factored:

$$
(x-1)^2(x-4)(x+2)<0.
$$

The critical values are

$$
x=-2,\quad x=1,\quad x=4.
$$

The root $$x=1$$ has even multiplicity because of $$(x-1)^2$$, so the sign does not change when crossing $$x=1$$. Simple roots, like $$x=-2$$ and $$x=4$$, do change the sign.

A sign chart gives:

- positive on $$(-\infty,-2)$$,
- negative on $$(-2,1)$$,
- negative on $$(1,4)$$,
- positive on $$(4,\infty)$$.

Because the inequality is strict, none of the zeros are included. Thus

$$
\boxed{(-2,1)\cup(1,4)}.
$$

</div>

<div class="theorem-box">

### Solution 11

Factor:

$$
x^3-5x^2+6x=x(x^2-5x+6)=x(x-2)(x-3).
$$

Solve

$$
x(x-2)(x-3)\ge 0.
$$

The critical values are $$0$$, $$2$$, and $$3$$. A sign chart gives:

- negative on $$(-\infty,0)$$,
- positive on $$(0,2)$$,
- negative on $$(2,3)$$,
- positive on $$(3,\infty)$$.

Since the inequality is $$\ge 0$$, include the zeros. Therefore

$$
\boxed{[0,2]\cup[3,\infty)}.
$$

</div>

<div class="theorem-box">

### Solution 12

The domain comes from the denominator:

$$
x^2+x=x(x+1)\ne 0.
$$

So

$$
x\ne 0,\qquad x\ne -1.
$$

Factor the rational expression:

$$
\frac{x^2-4}{x^2+x}
=\frac{(x-2)(x+2)}{x(x+1)}.
$$

There are no common factors, so the rational inequality is

$$
\frac{(x-2)(x+2)}{x(x+1)}\le 0.
$$

The critical values are $$-2,-1,0,2$$. Remember that $$-1$$ and $$0$$ cannot be included because they make the denominator zero. A sign chart gives nonpositive values on

$$
[-2,-1)
\quad\text{and}\quad
(0,2].
$$

Thus

$$
\boxed{\text{domain: }x\ne -1,0;\quad \frac{(x-2)(x+2)}{x(x+1)}\le 0;\quad [-2,-1)\cup(0,2]}.
$$

</div>

<div class="theorem-box">

### Solution 13

First find the domain:

$$
4-x^2\ge 0
\quad\Longrightarrow\quad
-2\le x\le 2.
$$

Now solve

$$
\sqrt{4-x^2}\ge x.
$$

If $$x<0$$, the right side is negative and the left side is nonnegative, so the inequality is automatically true on the domain. This gives $$[-2,0)$$.

If $$x\ge 0$$, both sides are nonnegative, so we can square:

$$
4-x^2\ge x^2.
$$

Then

$$
4\ge 2x^2
\quad\Longrightarrow\quad
x^2\le 2.
$$

With $$x\ge 0$$, this gives $$0\le x\le \sqrt2$$. Combining both cases,

$$
\boxed{[-2,\sqrt2]}.
$$

</div>

<div class="theorem-box">

### Solution 14

The radical is always defined because

$$
x^2+5>0
$$

for all real $$x$$. But since

$$
\sqrt{x^2+5}\ge 0,
$$

we also need the right side to be nonnegative:

$$
x+2\ge 0
\quad\Longrightarrow\quad
x\ge -2.
$$

Now square both sides:

$$
x^2+5\le (x+2)^2.
$$

Expand:

$$
x^2+5\le x^2+4x+4.
$$

Cancel $$x^2$$:

$$
5\le 4x+4
\quad\Longrightarrow\quad
x\ge \frac14.
$$

This already satisfies $$x\ge -2$$, so

$$
\boxed{\left[\frac14,\infty\right)}.
$$

</div>

<div class="theorem-box">

### Solution 15

For

$$
f(x)=\frac{x^2}{x^2+1},
$$

test $$f(-x)$$:

$$
f(-x)=\frac{(-x)^2}{(-x)^2+1}
=\frac{x^2}{x^2+1}
=f(x).
$$

So $$f$$ has $$y$$-axis symmetry. It does not have origin symmetry because $$f(-x)\ne -f(x)$$ in general, and it does not have $$x$$-axis symmetry because reflecting a nonzero function value across the $$x$$-axis would not stay on the graph of the same function.

For

$$
g(x)=x\lvert x\rvert,
$$

test $$g(-x)$$:

$$
g(-x)=(-x)\lvert -x\rvert=-x\lvert x\rvert=-g(x).
$$

So $$g$$ has origin symmetry. It does not have $$y$$-axis symmetry because $$g(-x)\ne g(x)$$ in general, and it does not have $$x$$-axis symmetry for the same reason ordinary nonzero functions usually do not.

Therefore

$$
\boxed{f\text{ has }y\text{-axis symmetry only, and }g\text{ has origin symmetry only}}.
$$

</div>

<div class="theorem-box">

### Solution 16

We solve

$$
x^2+y^2+1=3xy
$$

in positive integers.

For part (A), set $$y=1$$. Then

$$
x^2+2=3x.
$$

So

$$
x^2-3x+2=0
\quad\Longrightarrow\quad
(x-1)(x-2)=0.
$$

Thus the solutions with $$y=1$$ are

$$
\boxed{(1,1)\text{ and }(2,1)}.
$$

By symmetry, $$(1,2)$$ is also a solution.

For part (B), treat the equation as a quadratic in $$x$$:

$$
x^2-3yx+(y^2+1)=0.
$$

If $$x$$ is one root, let $$x'$$ be the other root. By Vieta's formulas,

$$
x+x'=3y
$$

and

$$
xx'=y^2+1.
$$

From the sum formula,

$$
x'=\boxed{3y-x}.
$$

Because $$x$$ and $$y$$ are integers, $$x'$$ is also an integer. The pair $$(x',y)$$ satisfies the same equation because $$x'$$ is the other root of the same quadratic.

For part (C), suppose $$(x,y)$$ is a positive integer solution with

$$
x\ge y\ge 2.
$$

We first show $$x'>0$$. Since

$$
x'=3y-x,
$$

it is enough to show $$x<3y$$. If $$x\ge 3y$$, then

$$
x^2-3xy+y^2+1>0,
$$

which contradicts the equation rewritten as

$$
x^2-3xy+y^2+1=0.
$$

Therefore $$x<3y$$, so $$x'>0$$.

Now show $$x'<y$$. Since $$x\ge y\ge 2$$, the larger root is

$$
x=\frac{3y+\sqrt{5y^2-4}}{2}.
$$

Because $$y\ge 2$$,

$$
5y^2-4>y^2,
$$

so

$$
\sqrt{5y^2-4}>y.
$$

Thus

$$
x>\frac{3y+y}{2}=2y.
$$

Therefore

$$
x'=3y-x<3y-2y=y.
$$

So every solution with $$x\ge y\ge 2$$ creates a smaller positive integer solution

$$
(x',y)
$$

with $$0<x'<y\le x$$.

For part (D), repeat this step. Each time, the larger coordinate decreases to a smaller positive integer. A strictly decreasing sequence of positive integers cannot continue forever, so the descent must eventually stop.

It can only stop when the smaller coordinate is $$1$$. By part (A), the terminal solutions are $$(1,1)$$, $$(2,1)$$, and by symmetry $$(1,2)$$.

For part (E), reverse the descent. Starting with $$(1,1)$$, repeatedly replace the smaller coordinate by

$$
\text{new coordinate}=3(\text{larger coordinate})-(\text{smaller coordinate}).
$$

This gives

$$
(1,1),\ (1,2),\ (2,5),\ (5,13),\ (13,34),\ldots
$$

and the swapped pairs.

Equivalently, define a sequence by

$$
a_0=1,\qquad a_1=1,\qquad a_{n+1}=3a_n-a_{n-1}.
$$

Then all positive integer solutions are

$$
\boxed{(a_n,a_{n+1})\text{ and }(a_{n+1},a_n)\quad\text{for }n\ge 0}.
$$

The first few values are

$$
a_0=1,\quad a_1=1,\quad a_2=2,\quad a_3=5,\quad a_4=13,\quad a_5=34.
$$

It remains to check that this sequence really gives solutions. If $$(u,v)$$ satisfies

$$
u^2+v^2+1=3uv,
$$

then $$(v,3v-u)$$ also satisfies the equation because $$u$$ and $$3v-u$$ are the two Vieta roots of

$$
X^2-3vX+(v^2+1)=0.
$$

Since $$(1,1)$$ works, every pair generated by the recurrence works. The descent argument shows there are no others.

$$
\boxed{\text{All positive integer solutions are }(1,1),(1,2),(2,1),(2,5),(5,2),(5,13),(13,5),\ldots}
$$

</div>
