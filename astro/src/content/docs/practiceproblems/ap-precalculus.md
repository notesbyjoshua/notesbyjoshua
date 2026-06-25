---
title: "AP Precalculus — Practice"
sidebar:
  label: "AP Precalculus"
  order: 5
prev: false
next: false
tableOfContents:
  maxHeadingLevel: 2
---

All practice problems and solutions for **AP Precalculus**, organized by unit. Worked examples stay on the unit pages.

_Auto-collected from the practice sections of each unit's notes (`scripts/build_practice.py`). Edit the source notes, not this page._

## Unit 1 & 2: Fundamentals, Equations, and Inequalities

[Full notes →](/notes/ap/precalc/fundeqineq/)

### Practice

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

### Solutions

<div class="theorem-box">

#### Solution 1

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

#### Solution 2

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

#### Solution 3

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

#### Solution 4

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

#### Solution 5

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

#### Solution 6

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

#### Solution 7

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

#### Solution 8

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

#### Solution 9

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

#### Solution 10

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

#### Solution 11

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

#### Solution 12

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

#### Solution 13

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

#### Solution 14

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

#### Solution 15

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

#### Solution 16

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

## Unit 3: Functions

[Full notes →](/notes/ap/precalc/functions/)

### Practice

1. Find the domain and range of $$f(x)=\frac{\sqrt{9-(x-2)^2}}{x-2}$$.
2. Let $$f(x)=\begin{cases}x^2-4x+1, & x<1,\\ax+b, & 1\le x<4,\\\sqrt{x+c}, & x\ge 4.\end{cases}$$. Find $$a$$, $$b$$, and $$c$$ so that the pieces connect at $$x=1$$ and $$x=4$$, and so that the middle piece has average rate of change $$3$$ on $$[1,4]$$.
3. Find the explicit form(s) for the relation $$(x^2+y^2)^2=4(x^2-y^2)$$.
4. Find the explicit form(s) for the relation $$y^2-2xy+x^2=4x+4$$. State the domain of each branch.
5. Let $$f(x)=(x-3)^2+2$$ with domain $$x\ge 3$$. Find $$f^{-1}(x)$$, and state the domain and range of $$f^{-1}$$.
6. Let $$f:[-2,\infty)\to[-4,\infty)$$ be defined by $$f(x)=(x+2)^2-4$$. Determine whether $$f$$ is injective, surjective, bijective, or none.
7. Simplify the difference quotient for $$f(x)=\frac{2}{x-1}$$. That is, simplify $$\frac{f(x+h)-f(x)}{h}.$$
8. The graph of $$y=f(x)$$ has domain $$[-4,6]$$ and range $$[-2,5]$$. Find the domain and range of $$g(x)=-3f(\frac{x-2}{x+1})+7$$.
9. Find $$f^{-1}(3)$$ given that $$f(x)=\frac{3x+1}{2x+f(x)}$$.
10. Let $$h(x)=\sqrt{4-\lvert x-1 \rvert}.$$ Find the domain and range of $$h$$, and describe the transformations from $$y=\sqrt{x}$$ as clearly as possible.
11. Let $$f(x)=\sqrt{2x+5}$$ and $$g(x)=\frac{1}{x-3}$$. Find formulas and domains for $$(f\circ g)(x)$$ and $$(g\circ f)(x)$$.
12. Let $$f(x)=\lvert x-2\rvert+1$$. If the domain is restricted to $$[2,\infty)$$ and the codomain is $$[1,\infty)$$, determine whether $$f$$ is bijective and find $$f^{-1}(x)$$. Then explain what goes wrong if the domain is all real numbers.
13. Let $$f(x)=\begin{cases}2x+a, & x<1,\\x^2+b, & 1\le x<3,\\cx-1, & x\ge 3.\end{cases}$$ Find $$a$$, $$b$$, and $$c$$ so that $$f$$ is continuous everywhere and $$f(0)=5$$.
14. Suppose $$f$$ is an odd function with domain $$[-5,5]$$, range $$[-3,3]$$, and $$f(2)=-1$$. Define $$g(x)=2f(x-1)-4$$. Find the domain and range of $$g$$, and find $$g(3)$$ and $$g(-1)$$.
15. Suppose $$f:A\to B$$ and $$g:B\to C$$. Prove that if $$f$$ and $$g$$ are both injective, then $$g\circ f$$ is injective. Also prove that if $$g\circ f$$ is surjective onto $$C$$, then $$g$$ must be surjective onto $$C$$.
16. (Bonus, Cauchy's Functional Equation)

   Consider a function $$\mathbb{Q} \longrightarrow \mathbb{Q}$$ (basically taking rational inputs and giving rational outputs) such that $$f(x+y)=f(x)+f(y)$$ (basically for any two rational numbers, this equation holds true for $$f(x)$$).

   (A) Show that $$f(0) = 0$$ and $$f(-x) = -f(x)$$. What does this show about $$f(x)$$?

   (B) Prove that $$f(nx) = nf(x)$$ for all $$n \in \mathbb{Z}$$ (for all integer $$n$$).

   (C) Prove that $$f(\frac{x}{n}) = \frac{f(x)}{n}$$.

   (D) Determine all such functions $$f(x)$$ that satisfy Cauchy's Functional Equation. Remember you not only need to find all such solutions, but prove that each one is a valid solution to the equation.

   (E) The solution in part (D) is the only solution for the rationals, but there exist infinitely more solutions for the reals! Why can't your proof in steps (A) - (D) extend to real numbers?

### Solutions

<div class="theorem-box">

#### Solution 1

The square root requires

$$
9-(x-2)^2\ge 0.
$$

Thus

$$
-3\le x-2\le 3
\quad\Longrightarrow\quad
-1\le x\le 5.
$$

The denominator also requires $$x\ne 2$$, so

$$
\boxed{\text{domain}=[-1,2)\cup(2,5]}.
$$

Let $$t=x-2$$. Then

$$
f(x)=\frac{\sqrt{9-t^2}}{t},
\qquad
t\in[-3,0)\cup(0,3].
$$

For $$t>0$$, the outputs cover $$[0,\infty)$$. For $$t<0$$, the outputs cover $$(-\infty,0]$$. Therefore

$$
\boxed{\text{range}=(-\infty,\infty)}.
$$

</div>

<div class="theorem-box">

#### Solution 2

The average rate of change of the middle piece $$ax+b$$ is its slope, so

$$
a=3.
$$

The pieces connect at $$x=1$$, so

$$
1^2-4(1)+1=3(1)+b.
$$

This gives

$$
-2=3+b
\quad\Longrightarrow\quad
b=-5.
$$

The pieces connect at $$x=4$$, so

$$
3(4)-5=\sqrt{4+c}.
$$

Thus

$$
7=\sqrt{4+c}
\quad\Longrightarrow\quad
49=4+c
\quad\Longrightarrow\quad
c=45.
$$

Therefore

$$
\boxed{a=3,\qquad b=-5,\qquad c=45}.
$$

</div>

<div class="theorem-box">

#### Solution 3

Let

$$
u=y^2.
$$

Then

$$
(x^2+u)^2=4(x^2-u).
$$

Expand and collect terms:

$$
x^4+2x^2u+u^2=4x^2-4u
$$

$$
u^2+(2x^2+4)u+x^4-4x^2=0.
$$

Using the quadratic formula,

$$
u=\frac{-(2x^2+4)\pm\sqrt{(2x^2+4)^2-4(x^4-4x^2)}}{2}.
$$

The discriminant simplifies:

$$
(2x^2+4)^2-4(x^4-4x^2)=16(2x^2+1).
$$

So

$$
u=-(x^2+2)\pm 2\sqrt{2x^2+1}.
$$

Since $$u=y^2$$,

$$
y^2=-(x^2+2)+2\sqrt{2x^2+1}
$$

or

$$
y^2=-(x^2+2)-2\sqrt{2x^2+1}.
$$

The second expression is always negative, so it gives no real branches. The real explicit forms are

$$
\boxed{y=\sqrt{-(x^2+2)+2\sqrt{2x^2+1}}}
$$

and

$$
\boxed{y=-\sqrt{-(x^2+2)+2\sqrt{2x^2+1}}}.
$$

For these branches to be real,

$$
-(x^2+2)+2\sqrt{2x^2+1}\ge 0.
$$

This simplifies to $$x^2\le 4$$, so both branches have domain

$$
\boxed{[-2,2]}.
$$

</div>

<div class="theorem-box">

#### Solution 4

Start with

$$
y^2-2xy+x^2=4x+4.
$$

This equation is quadratic in $$y$$. Move everything to one side:

$$
y^2-2xy+(x^2-4x-4)=0.
$$

Using the quadratic formula with

$$
a=1,\qquad b=-2x,\qquad c=x^2-4x-4,
$$

we get

$$
y=\frac{-(-2x)\pm\sqrt{(-2x)^2-4(1)(x^2-4x-4)}}{2}.
$$

Simplify the discriminant:

$$
(-2x)^2-4(x^2-4x-4)
=4x^2-4x^2+16x+16
=16(x+1).
$$

So

$$
y=\frac{2x\pm\sqrt{16(x+1)}}{2}
=\frac{2x\pm 4\sqrt{x+1}}{2}.
$$

Thus the explicit branches are

$$
y=x+2\sqrt{x+1}
$$

and

$$
y=x-2\sqrt{x+1}.
$$

Both branches require

$$
x+1\ge 0,
$$

so each branch has domain

$$
\boxed{[-1,\infty)}.
$$

Therefore the relation is not one function of $$x$$ on most of its domain; it splits into

$$
\boxed{y=x+2\sqrt{x+1}}
$$

and

$$
\boxed{y=x-2\sqrt{x+1}}
$$

each with domain $$[-1,\infty)$$.

</div>

<div class="theorem-box">

#### Solution 5

Start with

$$
y=(x-3)^2+2.
$$

Switch $$x$$ and $$y$$:

$$
x=(y-3)^2+2.
$$

Then

$$
x-2=(y-3)^2.
$$

Since the original domain is $$x\ge 3$$, use the positive square-root branch:

$$
y-3=\sqrt{x-2}.
$$

Therefore

$$
\boxed{f^{-1}(x)=3+\sqrt{x-2}}.
$$

The domain of $$f^{-1}$$ is the range of $$f$$:

$$
\boxed{[2,\infty)}.
$$

The range of $$f^{-1}$$ is the domain of $$f$$:

$$
\boxed{[3,\infty)}.
$$

</div>

<div class="theorem-box">

#### Solution 6

On $$[-2,\infty)$$, the parabola starts at its vertex and increases. Therefore it passes the horizontal line test, so it is injective.

Also,

$$
f(-2)=-4,
$$

and as $$x\to\infty$$, $$f(x)\to\infty$$. Therefore the range is

$$
[-4,\infty),
$$

which matches the codomain. So $$f$$ is surjective.

Since $$f$$ is both injective and surjective,

$$
\boxed{f\text{ is bijective}}.
$$

</div>

<div class="theorem-box">

#### Solution 7

First,

$$
f(x+h)=\frac{2}{x+h-1}.
$$

So

$$
\frac{f(x+h)-f(x)}{h}
=
\frac{\frac{2}{x+h-1}-\frac{2}{x-1}}{h}.
$$

Use a common denominator:

$$
\frac{\frac{2(x-1)-2(x+h-1)}{(x+h-1)(x-1)}}{h}.
$$

The numerator simplifies:

$$
2(x-1)-2(x+h-1)=-2h.
$$

Thus

$$
\frac{f(x+h)-f(x)}{h}
=\frac{\frac{-2h}{(x+h-1)(x-1)}}{h}
=\boxed{\frac{-2}{(x+h-1)(x-1)}}.
$$

</div>

<div class="theorem-box">

#### Solution 8

For the domain, the input to $$f$$ must lie in $$[-4,6]$$:

$$
-4\le \frac{x-2}{x+1}\le 6,
\qquad x\ne -1.
$$

Solve the two inequalities separately:

$$
\frac{x-2}{x+1}\ge -4
\quad\Longrightarrow\quad
\frac{5x+2}{x+1}\ge 0,
$$

so

$$
x<-1\quad\text{or}\quad x\ge -\frac25.
$$

Also,

$$
\frac{x-2}{x+1}\le 6
\quad\Longrightarrow\quad
\frac{-5x-8}{x+1}\le 0,
$$

so

$$
x\le -\frac85\quad\text{or}\quad x>-1.
$$

Intersecting these gives

$$
\boxed{\text{domain}=(-\infty,-8/5]\cup[-2/5,\infty)}.
$$

The range cannot be determined from only the information given. The inner function

$$
\frac{x-2}{x+1}
$$

takes values in $$[-4,6]$$ except it never equals $$1$$. Since we only know the domain and range of $$f$$, we do not know whether removing the input $$1$$ changes the outputs of $$f$$. If the graph of $$f$$ still hits every value in $$[-2,5]$$ away from input $$1$$, then the range would be

$$
[-8,13],
$$

but that is an extra assumption. Therefore the correct conclusion from the stated information is

$$
\boxed{\text{the range is not determined by the given data}}.
$$

</div>

<div class="theorem-box">

#### Solution 9

We want $$f^{-1}(3)$$, meaning we want the input $$x$$ for which

$$
f(x)=3.
$$

Use the given relation:

$$
f(x)=\frac{3x+1}{2x+f(x)}.
$$

Substitute $$f(x)=3$$:

$$
3=\frac{3x+1}{2x+3}.
$$

Then

$$
3(2x+3)=3x+1
$$

$$
6x+9=3x+1
$$

$$
3x=-8.
$$

So

$$
\boxed{f^{-1}(3)=-\frac83}.
$$

</div>

<div class="theorem-box">

#### Solution 10

For the domain, require

$$
4-\lvert x-1\rvert\ge 0.
$$

Then

$$
\lvert x-1\rvert\le 4,
$$

so

$$
-4\le x-1\le 4.
$$

Thus

$$
\boxed{\text{domain}=[-3,5]}.
$$

The largest value occurs when $$\lvert x-1\rvert=0$$:

$$
h(1)=\sqrt4=2.
$$

The smallest value occurs when $$\lvert x-1\rvert=4$$:

$$
h(-3)=h(5)=0.
$$

Therefore

$$
\boxed{\text{range}=[0,2]}.
$$

This is not a single basic transformation of $$y=\sqrt{x}$$. It is better viewed as two square-root pieces:

$$
h(x)=
\begin{cases}
\sqrt{x+3}, & -3\le x\le 1,\\
\sqrt{5-x}, & 1\le x\le 5.
\end{cases}
$$

The graph is symmetric about $$x=1$$, has endpoints $$(-3,0)$$ and $$(5,0)$$, and reaches its maximum at $$(1,2)$$.

</div>

<div class="theorem-box">

#### Solution 11

First,

$$
(f\circ g)(x)=f(g(x))
=\sqrt{2\left(\frac{1}{x-3}\right)+5}
=\sqrt{\frac{2}{x-3}+5}.
$$

Combine the expression under the radical:

$$
\frac{2}{x-3}+5
=\frac{2+5x-15}{x-3}
=\frac{5x-13}{x-3}.
$$

So

$$
(f\circ g)(x)=\sqrt{\frac{5x-13}{x-3}}.
$$

For the domain, require $$x\ne 3$$ and

$$
\frac{5x-13}{x-3}\ge 0.
$$

The critical values are $$x=\frac{13}{5}$$ and $$x=3$$. A sign chart gives

$$
\boxed{\text{domain of }f\circ g=\left(-\infty,\frac{13}{5}\right]\cup(3,\infty)}.
$$

Now

$$
(g\circ f)(x)=g(f(x))
=\frac{1}{\sqrt{2x+5}-3}.
$$

For the domain, require

$$
2x+5\ge 0
$$

and also

$$
\sqrt{2x+5}-3\ne 0.
$$

The first condition gives $$x\ge -\frac52$$. The second condition gives

$$
\sqrt{2x+5}\ne 3
\quad\Longrightarrow\quad
2x+5\ne 9
\quad\Longrightarrow\quad
x\ne 2.
$$

Therefore

$$
\boxed{(g\circ f)(x)=\frac{1}{\sqrt{2x+5}-3}}
$$

with

$$
\boxed{\text{domain of }g\circ f=\left[-\frac52,\infty\right)\setminus\{2\}}.
$$

</div>

<div class="theorem-box">

#### Solution 12

On the restricted domain $$[2,\infty)$$,

$$
f(x)=\lvert x-2\rvert+1=x-2+1=x-1.
$$

This function is increasing on $$[2,\infty)$$, so it is injective.

Also, if $$x\ge 2$$, then

$$
f(x)=x-1\ge 1.
$$

Every output $$y\ge 1$$ is reached by choosing $$x=y+1$$, which is at least $$2$$. Therefore $$f$$ is surjective onto $$[1,\infty)$$.

So $$f:[2,\infty)\to[1,\infty)$$ is bijective.

To find the inverse, write

$$
y=x-1.
$$

Then

$$
x=y+1.
$$

Thus

$$
\boxed{f^{-1}(x)=x+1}
$$

with domain $$[1,\infty)$$ and range $$[2,\infty)$$.

If the domain is all real numbers, the function is not injective. For example,

$$
f(1)=2
\qquad\text{and}\qquad
f(3)=2.
$$

Since two different inputs give the same output, the function does not have an inverse function on all of $$\mathbb{R}$$.

</div>

<div class="theorem-box">

#### Solution 13

Since $$f(0)=5$$ and $$0<1$$, use the first piece:

$$
f(0)=2(0)+a=a.
$$

Thus

$$
a=5.
$$

For continuity at $$x=1$$, the left-hand value must match the value from the middle piece:

$$
2(1)+a=1^2+b.
$$

Substitute $$a=5$$:

$$
2+5=1+b.
$$

So

$$
b=6.
$$

For continuity at $$x=3$$, the value from the middle piece must match the value from the last piece:

$$
3^2+b=3c-1.
$$

Substitute $$b=6$$:

$$
9+6=3c-1.
$$

Then

$$
16=3c,
$$

so

$$
c=\frac{16}{3}.
$$

Therefore

$$
\boxed{a=5,\qquad b=6,\qquad c=\frac{16}{3}}.
$$

</div>

<div class="theorem-box">

#### Solution 14

The expression $$f(x-1)$$ requires

$$
x-1\in[-5,5].
$$

So

$$
-5\le x-1\le 5.
$$

Add $$1$$ throughout:

$$
-4\le x\le 6.
$$

Thus

$$
\boxed{\text{domain of }g=[-4,6]}.
$$

Since $$f$$ has range $$[-3,3]$$, the expression $$2f(x-1)$$ has range

$$
[-6,6].
$$

Subtracting $$4$$ gives

$$
\boxed{\text{range of }g=[-10,2]}.
$$

Now

$$
g(3)=2f(3-1)-4=2f(2)-4.
$$

Since $$f(2)=-1$$,

$$
g(3)=2(-1)-4=-6.
$$

So

$$
\boxed{g(3)=-6}.
$$

Also,

$$
g(-1)=2f(-1-1)-4=2f(-2)-4.
$$

Because $$f$$ is odd,

$$
f(-2)=-f(2)=1.
$$

Therefore

$$
g(-1)=2(1)-4=-2.
$$

So

$$
\boxed{g(-1)=-2}.
$$

</div>

<div class="theorem-box">

#### Solution 15

First suppose $$f$$ and $$g$$ are both injective. To prove that $$g\circ f$$ is injective, start by assuming two inputs give the same output:

$$
(g\circ f)(a)=(g\circ f)(b).
$$

This means

$$
g(f(a))=g(f(b)).
$$

Since $$g$$ is injective,

$$
f(a)=f(b).
$$

Since $$f$$ is injective,

$$
a=b.
$$

Therefore

$$
\boxed{g\circ f\text{ is injective}}.
$$

Now suppose $$g\circ f$$ is surjective onto $$C$$. This means that for every $$c\in C$$, there is some $$a\in A$$ such that

$$
(g\circ f)(a)=c.
$$

Equivalently,

$$
g(f(a))=c.
$$

But $$f(a)$$ is an element of $$B$$. So for every $$c\in C$$, we have found an element of $$B$$, namely $$f(a)$$, that maps to $$c$$ under $$g$$.

Therefore

$$
\boxed{g\text{ is surjective onto }C}.
$$

</div>

<div class="theorem-box">

#### Solution 16

We are given

$$
f(x+y)=f(x)+f(y)
$$

for rational inputs.

For part (A), set $$x=0$$ and $$y=0$$:

$$
f(0)=f(0+0)=f(0)+f(0).
$$

Thus

$$
\boxed{f(0)=0}.
$$

Now use $$0=x+(-x)$$:

$$
0=f(0)=f(x+(-x))=f(x)+f(-x).
$$

So

$$
\boxed{f(-x)=-f(x)}.
$$

This shows that $$f$$ is an odd function.

For part (B), if $$n$$ is a positive integer, then

$$
f(nx)=f(\underbrace{x+x+\cdots+x}_{n\text{ times}})
=\underbrace{f(x)+f(x)+\cdots+f(x)}_{n\text{ times}}
=nf(x).
$$

For $$n=0$$, this says $$f(0)=0$$. For negative $$n$$, use part (A):

$$
f(nx)=f(-(\lvert n\rvert x))=-f(\lvert n\rvert x)=-\lvert n\rvert f(x)=nf(x).
$$

Therefore

$$
\boxed{f(nx)=nf(x)\quad\text{for all }n\in\mathbb{Z}}.
$$

For part (C), apply part (B) to $$x/n$$:

$$
f(x)=f\left(n\cdot\frac{x}{n}\right)=n f\left(\frac{x}{n}\right).
$$

Therefore

$$
\boxed{f\left(\frac{x}{n}\right)=\frac{f(x)}{n}}.
$$

For part (D), let

$$
c=f(1).
$$

For any rational number $$r=\frac{m}{n}$$,

$$
f(r)=f\left(\frac{m}{n}\right)=\frac{f(m)}{n}.
$$

By part (B),

$$
f(m)=mf(1)=mc.
$$

So

$$
f(r)=\frac{mc}{n}=cr.
$$

Thus every solution must have the form

$$
\boxed{f(x)=cx}
$$

for some rational constant $$c$$. Conversely, every function of the form $$f(x)=cx$$ works because

$$
f(x+y)=c(x+y)=cx+cy=f(x)+f(y).
$$

For part (E), the proof works over $$\mathbb{Q}$$ because every rational number is a rational multiple of $$1$$. It does not extend to all real numbers because not every real number can be built from $$1$$ using only integer multiplication and division. Over $$\mathbb{R}$$, there are many wild additive functions if no conditions like continuity, monotonicity, or boundedness are required.

</div>

## Unit 4 & 13: Polynomial & Rational Functions and Applications to Optimization

[Full notes →](/notes/ap/precalc/polyratopt/)

### Practice

1. Let $$f(x)=mx+b$$. Suppose $$f(a+b)=f(a)+f(b)-6$$ for all real numbers $$a,b$$ and $$f(4)=10$$. Find $$f(x)$$, its $$x$$-intercept, and the equation of the line perpendicular to $$f$$ through $$(4,10)$$.
2. A quadratic function has $$x$$-intercepts $$-1$$ and $$5$$ and passes through $$(0,10)$$. Find the function, its vertex, maximum/minimum value, and range.
3. For $$h(x)=\sqrt{-2x^2+8x+10}$$, find the domain, range, and maximum value of $$h$$.
4. Find the lowest-degree polynomial $$p(x)$$ with real coefficients such that $$x=-3$$ is a zero of multiplicity $$2$$, $$x=1$$ is a zero of multiplicity $$3$$, and $$p(0)=-18$$. Give the end behavior.
5. For $$f(x)=-\dfrac12(x+4)(x-1)^2(x-3)^3$$, give the degree, leading coefficient, end behavior, zeros with multiplicities, crossing/bouncing behavior, $$y$$-intercept, and maximum possible number of turning points. Give a rough graph of the function.
6. Find the lowest-degree polynomial with real coefficients, leading coefficient positive, zeros $$2$$ with multiplicity $$2$$, $$-1$$, and $$3+i$$, and $$f(0)=100$$.
7. Factor $$P(x)=x^4-3x^3-11x^2+39x-18$$ completely over the real numbers, given that $$P(3)=0$$.
8. Use the Rational Root Theorem to list the possible rational zeros of $$f(x)=2x^4-x^3-20x^2+13x+30$$, then find all real zeros.
9. A polynomial $$f(x)$$ leaves remainder $$5$$ when divided by $$x-2$$ and remainder $$-4$$ when divided by $$x+1$$. Find the remainder when $$f(x)$$ is divided by $$(x-2)(x+1)$$.
10. Find the monic polynomial with rational coefficients whose zeros include $$1+i$$ and $$2-\sqrt3$$.
11. For $$R(x)=\dfrac{(x-2)(x+1)^2}{(x+1)(x-3)}$$, state the domain, hole, vertical asymptote, slant asymptote, and intercepts. Give a rough graph of this function.
12. Solve in $$\mathbb{R}$$: $$\dfrac{(x-4)(x+1)^2}{(x-2)(x+1)}\le 0$$.
13. A box with no top is made by cutting squares of side length $$x$$ from each corner of a $$24\text{ in}$$ by $$18\text{ in}$$ sheet and folding up the sides. Write the volume function, state the practical domain, and use a graph or calculator to approximate the value of $$x$$ that maximizes the volume.
14. A machine's output is modeled by $$M(x)=\dfrac{150x}{x^2+25}$$ for $$x\ge 0$$. Use an algebraic method to find the maximum possible output and the input where it occurs.
15. A farmer has $$240$$ feet of fencing to build three identical rectangular pens side-by-side, sharing interior fences. If the pens together form one large rectangle split by two parallel dividers, find the dimensions of the large rectangle that maximize the total area.
16. (Bonus, Rational Root Theorem)

   In this unit, we have introduced the Rational Root Theorem as a quick way of finding rational roots. We will now get a chance to prove this theorem.

   Let

   $$
   f(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0
   $$

   have integer coefficients. Suppose $$\frac{p}{q}$$ is a rational zero in lowest terms. Note that $$a \mid b$$ means $$a$$ divides $$b$$ and $$gcd$$ means greatest common divisor.

   $$(A)$$ Substitute $$\frac{p}{q}$$ into $$f(x)=0$$ and multiply by $$q^n$$ and rearrange your equation to show that $$p\mid a_0q^n$$. Also explain why $$\gcd(p,q)=1$$ implies $$p\mid a_0$$.

   $$(B)$$ Rearrange the equation from part $$(A)$$ in a different way to show that $$q\mid a_np^n$$ and explain why $$\gcd(p,q)=1$$ implies $$q\mid a_n$$.

   $$(C)$$ State the Rational Root Theorem in words.

---

### Solutions

<div class="theorem-box">

#### Solution 1

Let $$f(x)=mx+b$$. Then

$$
f(a+b)=m(a+b)+b=ma+mb+b,
$$

while

$$
f(a)+f(b)-6=(ma+b)+(mb+b)-6=ma+mb+2b-6.
$$

Since these are equal for all $$a,b$$,

$$
b=2b-6,
$$

so $$b=6$$. Use $$f(4)=10$$:

$$
4m+6=10,
$$

so $$m=1$$. Therefore

$$
\boxed{f(x)=x+6}.
$$

The $$x$$-intercept satisfies $$x+6=0$$, so it is

$$
\boxed{(-6,0)}.
$$

The slope of $$f$$ is $$1$$, so a perpendicular line has slope $$-1$$. Through $$(4,10)$$:

$$
y-10=-(x-4),
$$

so

$$
\boxed{y=-x+14}.
$$

</div>

<div class="theorem-box">

#### Solution 2

Since the zeros are $$-1$$ and $$5$$,

$$
q(x)=a(x+1)(x-5).
$$

Use $$(0,10)$$:

$$
10=a(1)(-5),
$$

so $$a=-2$$. Thus

$$
\boxed{q(x)=-2(x+1)(x-5)}.
$$

Expanding,

$$
q(x)=-2x^2+8x+10.
$$

The axis of symmetry is halfway between the zeros:

$$
x=\frac{-1+5}{2}=2.
$$

Then

$$
q(2)=-2(3)(-3)=18.
$$

The vertex is

$$
\boxed{(2,18)}.
$$

Since $$a<0$$, this is a maximum. The maximum value is $$18$$ and the range is

$$
\boxed{(-\infty,18]}.
$$

</div>

<div class="theorem-box">

#### Solution 3

The square root requires

$$
-2x^2+8x+10\ge 0.
$$

Factor:

$$
-2(x^2-4x-5)\ge 0
$$

so

$$
-2(x-5)(x+1)\ge 0.
$$

This is true for

$$
\boxed{-1\le x\le 5}.
$$

Thus the domain is

$$
\boxed{[-1,5]}.
$$

The inside quadratic has maximum at the midpoint of the roots:

$$
x=2.
$$

Its maximum value is

$$
-2(2)^2+8(2)+10=18.
$$

Since square root is increasing, the maximum of $$h$$ is

$$
\boxed{\sqrt{18}=3\sqrt2}.
$$

At the endpoints, $$h(x)=0$$, so the range is

$$
\boxed{[0,3\sqrt2]}.
$$

</div>

<div class="theorem-box">

#### Solution 4

The lowest-degree polynomial must have factors

$$
(x+3)^2
\qquad\text{and}\qquad
(x-1)^3.
$$

So

$$
p(x)=a(x+3)^2(x-1)^3.
$$

Use $$p(0)=-18$$:

$$
-18=a(3)^2(-1)^3=-9a.
$$

Thus $$a=2$$, so

$$
\boxed{p(x)=2(x+3)^2(x-1)^3}.
$$

The degree is $$5$$ and the leading coefficient is $$2$$. Therefore

$$
x\to -\infty \Rightarrow p(x)\to -\infty,
\qquad
x\to \infty \Rightarrow p(x)\to \infty.
$$

</div>

<div class="theorem-box">

#### Solution 5

For

$$
f(x)=-\frac12(x+4)(x-1)^2(x-3)^3,
$$

the degree is

$$
1+2+3=6.
$$

The leading coefficient is

$$
\boxed{-\frac12}.
$$

Even degree with negative leading coefficient means

$$
x\to -\infty \Rightarrow f(x)\to -\infty,
\qquad
x\to \infty \Rightarrow f(x)\to -\infty.
$$

The zeros are:

- $$x=-4$$, multiplicity $$1$$, crosses.
- $$x=1$$, multiplicity $$2$$, bounces.
- $$x=3$$, multiplicity $$3$$, crosses with flattening.

The $$y$$-intercept is

$$
f(0)=-\frac12(4)(1)(-27)=54,
$$

so it is

$$
\boxed{(0,54)}.
$$

The maximum possible number of turning points is

$$
\boxed{5}.
$$

This graph is shown below:

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/polygraph1.png" alt="parent functions" loading="lazy" decoding="async" />

</div>

<div class="theorem-box">

#### Solution 6

Because the polynomial has real coefficients, $$3-i$$ must also be a zero. The lowest-degree polynomial has the form

$$
f(x)=a(x-2)^2(x+1)\bigl(x-(3+i)\bigr)\bigl(x-(3-i)\bigr).
$$

The complex pair multiplies to

$$
\bigl(x-(3+i)\bigr)\bigl(x-(3-i)\bigr)=(x-3)^2+1.
$$

So

$$
f(x)=a(x-2)^2(x+1)\bigl((x-3)^2+1\bigr).
$$

Use $$f(0)=100$$:

$$
100=a(4)(1)(10)=40a.
$$

Thus $$a=\dfrac52$$, and

$$
\boxed{f(x)=\frac52(x-2)^2(x+1)\bigl((x-3)^2+1\bigr)}.
$$

</div>

<div class="theorem-box">

#### Solution 7

Since $$P(3)=0$$, $$x-3$$ is a factor. Synthetic division gives

$$
\begin{array}{r|rrrrr}
3 & 1 & -3 & -11 & 39 & -18\\
  &   & 3 & 0 & -33 & 18\\ \hline
  & 1 & 0 & -11 & 6 & 0
\end{array}
$$

So

$$
P(x)=(x-3)(x^3-11x+6).
$$

Test $$x=3$$ again:

$$
\begin{array}{r|rrrr}
3 & 1 & 0 & -11 & 6\\
  &   & 3 & 9 & -6\\ \hline
  & 1 & 3 & -2 & 0
\end{array}
$$

Thus

$$
P(x)=(x-3)^2(x^2+3x-2).
$$

The quadratic formula gives

$$
x=\frac{-3\pm\sqrt{9+8}}{2}
=\frac{-3\pm\sqrt{17}}{2}.
$$

Therefore

$$
\boxed{P(x)=(x-3)^2\left(x-\frac{-3+\sqrt{17}}{2}\right)\left(x-\frac{-3-\sqrt{17}}{2}\right)}.
$$

</div>

<div class="theorem-box">

#### Solution 8

By the Rational Root Theorem, possible rational zeros are

$$
\pm1,\ \pm2,\ \pm3,\ \pm5,\ \pm6,\ \pm10,\ \pm15,\ \pm30,
$$

and

$$
\pm\frac12,\ \pm\frac32,\ \pm\frac52,\ \pm\frac{15}{2}.
$$

Factor by grouping:

$$
2x^4-x^3-20x^2+13x+30
=(x^2+x-6)(2x^2-3x-5).
$$

Then

$$
(x^2+x-6)(2x^2-3x-5)
=(x+3)(x-2)(2x-5)(x+1).
$$

So the real zeros are

$$
\boxed{-3,\ -1,\ 2,\ \frac52}.
$$

</div>

<div class="theorem-box">

#### Solution 9

When dividing by $$(x-2)(x+1)$$, the remainder must be linear:

$$
R(x)=ax+b.
$$

Since the remainder after division by $$x-2$$ is $$5$$,

$$
R(2)=5.
$$

Since the remainder after division by $$x+1$$ is $$-4$$,

$$
R(-1)=-4.
$$

Thus

$$
2a+b=5,
\qquad
-a+b=-4.
$$

Subtract:

$$
3a=9,
$$

so $$a=3$$. Then $$b=-1$$. The remainder is

$$
\boxed{3x-1}.
$$

</div>

<div class="theorem-box">

#### Solution 10

For rational coefficients, conjugate pairs are required:

$$
1+i,\ 1-i,\ 2-\sqrt3,\ 2+\sqrt3.
$$

The polynomial is

$$
\bigl(x-(1+i)\bigr)\bigl(x-(1-i)\bigr)\bigl(x-(2-\sqrt3)\bigr)\bigl(x-(2+\sqrt3)\bigr).
$$

Since

$$
\bigl(x-(1+i)\bigr)\bigl(x-(1-i)\bigr)=(x-1)^2+1=x^2-2x+2
$$

and

$$
\bigl(x-(2-\sqrt3)\bigr)\bigl(x-(2+\sqrt3)\bigr)=(x-2)^2-3=x^2-4x+1,
$$

we get

$$
(x^2-2x+2)(x^2-4x+1).
$$

Expanding:

$$
\boxed{x^4-6x^3+11x^2-10x+2}.
$$

</div>

<div class="theorem-box">

#### Solution 11

Start with

$$
R(x)=\frac{(x-2)(x+1)^2}{(x+1)(x-3)}.
$$

The original denominator is zero at $$x=-1$$ and $$x=3$$, so the domain is

$$
\boxed{x\ne -1,3}.
$$

Cancel the common factor:

$$
R(x)=\frac{(x-2)(x+1)}{x-3},
\qquad x\ne -1,3.
$$

The canceled factor creates a hole at $$x=-1$$. Its $$y$$-value is

$$
\frac{(-1-2)(-1+1)}{-1-3}=0,
$$

so the hole is

$$
\boxed{(-1,0)}.
$$

The uncanceled denominator gives the vertical asymptote:

$$
\boxed{x=3}.
$$

There is no horizontal asymptote because the numerator degree is one more than the denominator degree. For the slant asymptote, simplify the numerator:

$$
(x-2)(x+1)=x^2-x-2.
$$

Divide:

$$
\frac{x^2-x-2}{x-3}
=x+2+\frac{4}{x-3}.
$$

Thus the slant asymptote is

$$
\boxed{y=x+2}.
$$

The true $$x$$-intercept comes from the simplified numerator and must be in the original domain. Since $$x=-1$$ is a hole, the only $$x$$-intercept is

$$
\boxed{(2,0)}.
$$

The $$y$$-intercept is

$$
R(0)=\frac{(-2)(1)^2}{(1)(-3)}=\frac23,
$$

so it is

$$
\boxed{\left(0,\frac23\right)}.
$$

The graph is shown below:

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/ratgraph1.png" alt="parent functions" loading="lazy" decoding="async" />

</div>

<div class="theorem-box">

#### Solution 12

$$
\frac{(x-4)(x+1)^2}{(x-2)(x+1)}
$$

has original domain restrictions

$$
x\ne -1,\ 2.
$$

Cancel one factor of $$x+1$$:

$$
\frac{(x-4)(x+1)}{x-2}\le 0,
\qquad x\ne -1,2.
$$

The critical numbers are

$$
-1,\ 2,\ 4.
$$

Test intervals:

- On $$(-\infty,-1)$$, the expression is negative.
- At $$x=-1$$, the original expression is undefined.
- On $$(-1,2)$$, the expression is positive.
- At $$x=2$$, the expression is undefined.
- On $$(2,4)$$, the expression is negative.
- At $$x=4$$, the expression is zero.
- On $$(4,\infty)$$, the expression is positive.

Therefore the solution is

$$
\boxed{(-\infty,-1)\cup(2,4]}.
$$

</div>

<div class="theorem-box">

#### Solution 13

The dimensions of the box are:

$$
\text{length}=24-2x,
$$

$$
\text{width}=18-2x,
$$

$$
\text{height}=x.
$$

So

$$
V(x)=x(24-2x)(18-2x).
$$

The practical domain is

$$
\boxed{0<x<9}.
$$

Expanding,

$$
V(x)=4x^3-84x^2+432x.
$$

Using a graph or calculator on $$0<x<9$$, the maximum occurs at approximately

$$
\boxed{x\approx 3.39\text{ in}}.
$$

The maximum volume is approximately

$$
V(3.39)\approx 655.0\text{ in}^3.
$$

</div>

<div class="theorem-box">

#### Solution 14

Let

$$
y=\frac{150x}{x^2+25}.
$$

Then

$$
y(x^2+25)=150x.
$$

Rearrange as a quadratic in $$x$$:

$$
yx^2-150x+25y=0.
$$

For real $$x$$, the discriminant must be nonnegative:

$$
(-150)^2-4(y)(25y)\ge 0.
$$

Thus

$$
22500-100y^2\ge 0
\quad\Longrightarrow\quad
y^2\le 225.
$$

Since $$M(x)\ge 0$$ for $$x\ge 0$$, the maximum possible output is

$$
\boxed{15}.
$$

Find where it occurs:

$$
15=\frac{150x}{x^2+25}.
$$

Then

$$
15x^2+375=150x
\quad\Longrightarrow\quad
x^2-10x+25=0
\quad\Longrightarrow\quad
(x-5)^2=0.
$$

So the maximum occurs at

$$
\boxed{x=5}.
$$

</div>

<div class="theorem-box">

#### Solution 15

Let the large rectangle have length $$y$$ and width $$x$$, where the two interior dividers are each parallel to the width. Then the fencing uses four widths and two lengths:

$$
4x+2y=240.
$$

So

$$
y=120-2x.
$$

The total area is

$$
A(x)=xy=x(120-2x)=120x-2x^2.
$$

This parabola opens downward, so its maximum occurs at

$$
x=-\frac{120}{2(-2)}=30.
$$

Then

$$
y=120-2(30)=60.
$$

Thus the large rectangle should be

$$
\boxed{30\text{ ft by }60\text{ ft}}.
$$

The maximum total area is

$$
\boxed{1800\text{ ft}^2}.
$$

</div>

<div class="theorem-box">

#### Solution 16

For part (A), since $$\frac{p}{q}$$ is a zero,

$$
a_n\left(\frac{p}{q}\right)^n
+a_{n-1}\left(\frac{p}{q}\right)^{n-1}
+\cdots
+a_1\left(\frac{p}{q}\right)+a_0=0.
$$

Multiplying by $$q^n$$ gives

$$
a_np^n+a_{n-1}p^{n-1}q+\cdots+a_1pq^{n-1}+a_0q^n=0.
$$

Move the constant-term part:

$$
a_np^n+a_{n-1}p^{n-1}q+\cdots+a_1pq^{n-1}=-a_0q^n.
$$

Every term on the left has a factor of $$p$$, so

$$
p\mid a_0q^n.
$$

Since $$\frac{p}{q}$$ is in lowest terms, $$\gcd(p,q)=1$$. Therefore $$p$$ is relatively prime to $$q^n$$. If $$p$$ divides $$a_0q^n$$ and shares no factor with $$q^n$$, then

$$
\boxed{p\mid a_0}.
$$

For part (B), now move the leading-term part instead:

$$
a_{n-1}p^{n-1}q+\cdots+a_1pq^{n-1}+a_0q^n=-a_np^n.
$$

Every term on the left has a factor of $$q$$, so

$$
q\mid a_np^n.
$$

Since $$\gcd(p,q)=1$$, $$q$$ is relatively prime to $$p^n$$. If $$q$$ divides $$a_np^n$$ and shares no factor with $$p^n$$, then

$$
\boxed{q\mid a_n}.
$$

For part (C), the theorem statement is this: If a polynomial with integer coefficients has a rational zero $$\frac{p}{q}$$ in lowest terms, then the numerator must divide the constant term and the denominator must divide the leading coefficient.

$$
\boxed{p\mid a_0\quad\text{and}\quad q\mid a_n}.
$$

</div>

## Unit 5: Exponential & Logarithmic Functions

[Full notes →](/notes/ap/precalc/explog/)

### Practice

1. Let $$f(x)=3-2\cdot 5^{x+1}$$. State the domain, range, horizontal asymptote, intercepts, intervals of increase/decrease, and find an explicit formula for $$f^{-1}(x)$$ with the domain and range of the inverse.
2. The points $$(-1,17)$$ and $$(2,1)$$ lie on the graph of $$g(x)=a\cdot b^{x-h}+k$$. The horizontal asymptote is $$y=-1$$, and $$h=1$$. Find $$a$$ and $$b$$, then determine whether $$g$$ represents exponential growth or decay.
3. Find all real solutions to $$4^{x+1}-10\cdot 2^x+1=0$$. Give exact answers.
4. Solve in $$\mathbb{R}$$: $$3^{2x}-28\cdot 3^x+27\le 0$$. Write the answer in interval notation.
5. Solve for $$x$$ exactly: $$2^{x+1}=5^{2x-3}.$$
6. Solve in $$\mathbb{R}$$: $$e^x+e^{-x}=\frac{13}{6}.$$
7. Rewrite the following expression as a single logarithm with coefficient $$1$$, and state the full domain of the original expression: $$\frac12\ln(x^2-9)-2\ln(x-3)+\ln\left(\frac{x+1}{x}\right).$$
8. Expand completely using logarithm properties, and state all restrictions on $$x$$ and $$y$$: $$\log_3\left(\frac{x^4\sqrt{y-2}}{(x^2+1)^3(5-y)}\right).$$
9. Solve in $$\mathbb{R}$$: $$\log_{1/3}(2x-1)\ge \log_{1/3}(7-x).$$
10. Solve in $$\mathbb{R}$$: $$\ln(x^2-5x+6)\le \ln(2x+3).$$
11. Let $$h(x)=\log_4(16-4x)-2$$. State the domain, range, vertical asymptote, intercepts, intervals of increase/decrease, and find $$h^{-1}(x)$$. Graph both equations.
12. A population is modeled by $$P(t)=\dfrac{1200}{1+19e^{-0.4t}}$$ for $$t\ge 0$$. Find the initial population, the limiting population (aka horizontal asymptote), and the exact time when $$P(t)=900$$.
13. Find the unique positive integer $$n$$ such that $$\log_2 (\log_{16} n) = \log_4 (\log_4 n)$$ (2020 AMC 12A).
14. Let $$F(x)=\ln\left(\dfrac{x-a}{b-x}\right)$$, where $$a<b$$. Find the domain, intercepts in terms of $$a$$ and $$b$$, the vertical asymptotes, and an explicit formula for $$F^{-1}(x)$$. Then determine the range of $$F$$.
15. Find the exact value of the product $$\prod_{k=4}^{63}\frac{\log_k\left(5^{k^2-1}\right)}{\log_{k+1}\left(5^{k^2-4}\right)}$$. (Hint: Use change of base and cancel out things to simplify the expression) (2025 AIME II)
16. (Bonus, The EML function)

   Define a binary operation called $$\operatorname{EML}$$ by

   $$
   \operatorname{EML}(x,y)=e^x-\ln y,
   $$

   where $$y>0$$.

   $$(A)$$ First, show that EML contains the exponential function directly: $$e^x=\operatorname{EML}(x,1).$$

   $$(B)$$ Now show that EML also contains logarithms: $$\operatorname{EML}(0,x)=1-\ln x.$$ Use this equation to solve for $$\ln x$$ in terms of $$\operatorname{EML}(0,x)$$.

   $$(C)$$ Using part $$(B)$$, write $$\log_b x$$ in terms of EML expressions, where $$b>0$$, $$b\ne1$$, and $$x>0$$.

   $$(D)$$ Since EML can produce both exponentials and logarithms, it can also build simpler operations. Use the identities $$x+y=\ln(e^x e^y)$$ and $$x-y=\ln\left(\frac{e^x}{e^y}\right)$$ to write formulas for $$x+y$$ and $$x-y$$ using EML expressions.

   $$(E)$$ An **EML tree** is an expression built by repeatedly feeding outputs of EML into new EML operations. For example, $$\operatorname{EML}\left(\operatorname{EML}(x,1),\operatorname{EML}(0,y)\right)$$ is an EML tree. Draw its tree diagram, then simplify the expression as much as possible using exponent and logarithm rules.

   $$(F)$$ It is claimed that EML trees can represent all standard elementary functions. In a short paragraph, compare this idea to the way a single NAND gate can generate all Boolean logic. A NAND gate outputs $$0$$ only when both inputs are $$1$$, and outputs $$1$$ otherwise.

   This problem is inspired by the paper *All elementary functions from a single operator* by Andrzej Odrzywołek. Learn more here: [https://arxiv.org/html/2603.21852v2](https://arxiv.org/html/2603.21852v2).

---

### Solutions

<div class="theorem-box">

#### Solution 1

The domain is all real numbers:

$$
\boxed{(-\infty,\infty)}.
$$

Since $$5^{x+1}>0$$, we have $$-2\cdot 5^{x+1}<0$$, so

$$
f(x)<3.
$$

Thus the range is

$$
\boxed{(-\infty,3)}.
$$

The horizontal asymptote is

$$
\boxed{y=3}.
$$

The $$y$$-intercept is

$$
f(0)=3-2\cdot 5=-7,
$$

so the $$y$$-intercept is

$$
\boxed{(0,-7)}.
$$

For the $$x$$-intercept,

$$
0=3-2\cdot 5^{x+1}
$$

so

$$
5^{x+1}=\frac32.
$$

Therefore

$$
x+1=\log_5\left(\frac32\right),
$$

so the $$x$$-intercept is

$$
\boxed{\left(\log_5\left(\frac32\right)-1,0\right)}.
$$

Since $$5^{x+1}$$ is increasing and the coefficient is negative, $$f$$ is decreasing on

$$
\boxed{(-\infty,\infty)}.
$$

It is never increasing.

To find the inverse, let

$$
y=3-2\cdot 5^{x+1}.
$$

Then

$$
2\cdot 5^{x+1}=3-y,
$$

so

$$
5^{x+1}=\frac{3-y}{2}.
$$

Take $$\log_5$$ of both sides:

$$
x+1=\log_5\left(\frac{3-y}{2}\right).
$$

Thus

$$
x=\log_5\left(\frac{3-y}{2}\right)-1.
$$

Switch $$x$$ and $$y$$:

$$
\boxed{f^{-1}(x)=\log_5\left(\frac{3-x}{2}\right)-1}.
$$

The domain of $$f^{-1}$$ is the range of $$f$$:

$$
\boxed{(-\infty,3)}.
$$

The range of $$f^{-1}$$ is the domain of $$f$$:

$$
\boxed{(-\infty,\infty)}.
$$

</div>

<div class="theorem-box">

#### Solution 2

Since the horizontal asymptote is $$y=-1$$ and $$h=1$$, the function has the form

$$
g(x)=a\cdot b^{x-1}-1.
$$

Use the point $$(-1,17)$$:

$$
17=a\cdot b^{-2}-1.
$$

So

$$
\frac{a}{b^2}=18.
$$

Use the point $$(2,1)$$:

$$
1=a\cdot b^{1}-1.
$$

Thus

$$
ab=2.
$$

From $$ab=2$$,

$$
a=\frac2b.
$$

Substitute into $$\frac{a}{b^2}=18$$:

$$
\frac{2/b}{b^2}=18.
$$

Then

$$
\frac{2}{b^3}=18,
$$

so

$$
b^3=\frac19.
$$

Therefore

$$
\boxed{b=\sqrt[3]{\frac19}=9^{-1/3}}.
$$

Then

$$
a=\frac2b=2\sqrt[3]{9}.
$$

So

$$
\boxed{a=2\sqrt[3]{9}}.
$$

Since $$0<b<1$$ and $$a>0$$, this represents

$$
\boxed{\text{exponential decay}}.
$$

</div>

<div class="theorem-box">

#### Solution 3

Rewrite everything in terms of $$2^x$$:

$$
4^{x+1}=4\cdot 4^x=4\cdot 2^{2x}.
$$

So the equation becomes

$$
4\cdot 2^{2x}-10\cdot 2^x+1=0.
$$

Let

$$
u=2^x.
$$

Then

$$
4u^2-10u+1=0.
$$

Use the quadratic formula:

$$
u=\frac{10\pm\sqrt{100-16}}{8}
=\frac{10\pm\sqrt{84}}{8}
=\frac{5\pm\sqrt{21}}{4}.
$$

Both values are positive, so both are valid values of $$2^x$$. Therefore

$$
2^x=\frac{5+\sqrt{21}}{4}
\qquad\text{or}\qquad
2^x=\frac{5-\sqrt{21}}{4}.
$$

Thus

$$
\boxed{x=\log_2\left(\frac{5+\sqrt{21}}4\right)
\quad\text{or}\quad
x=\log_2\left(\frac{5-\sqrt{21}}4\right)}.
$$

</div>

<div class="theorem-box">

#### Solution 4

Let

$$
u=3^x.
$$

Since $$3^x>0$$, we need $$u>0$$. The inequality becomes

$$
u^2-28u+27\le 0.
$$

Factor:

$$
(u-1)(u-27)\le 0.
$$

Thus

$$
1\le u\le 27.
$$

Substitute back:

$$
1\le 3^x\le 27.
$$

Since $$1=3^0$$ and $$27=3^3$$,

$$
3^0\le 3^x\le 3^3.
$$

Because $$3^x$$ is increasing,

$$
\boxed{[0,3]}.
$$

</div>

<div class="theorem-box">

#### Solution 5

Take natural logs of both sides:

$$
\ln(2^{x+1})=\ln(5^{2x-3}).
$$

Use the power rule:

$$
(x+1)\ln 2=(2x-3)\ln 5.
$$

Expand:

$$
x\ln 2+\ln 2=2x\ln 5-3\ln 5.
$$

Move the $$x$$ terms to one side:

$$
x\ln 2-2x\ln 5=-3\ln 5-\ln 2.
$$

Factor:

$$
x(\ln 2-2\ln 5)=-(3\ln 5+\ln 2).
$$

Therefore

$$
\boxed{x=\frac{3\ln 5+\ln 2}{2\ln 5-\ln 2}}.
$$

</div>

<div class="theorem-box">

#### Solution 6

Let

$$
u=e^x.
$$

Then

$$
e^{-x}=\frac1u.
$$

The equation becomes

$$
u+\frac1u=\frac{13}{6}.
$$

Multiply by $$6u$$:

$$
6u^2+6=13u.
$$

So

$$
6u^2-13u+6=0.
$$

Factor:

$$
(3u-2)(2u-3)=0.
$$

Thus

$$
u=\frac23
\qquad\text{or}\qquad
u=\frac32.
$$

Since $$u=e^x$$,

$$
e^x=\frac23
\qquad\text{or}\qquad
e^x=\frac32.
$$

Therefore

$$
\boxed{x=\ln\left(\frac23\right)
\quad\text{or}\quad
x=\ln\left(\frac32\right)}.
$$

</div>

<div class="theorem-box">

#### Solution 7

Start with

$$
\frac12\ln(x^2-9)-2\ln(x-3)+\ln\left(\frac{x+1}{x}\right).
$$

Use the power rule:

$$
\ln\sqrt{x^2-9}-\ln((x-3)^2)+\ln\left(\frac{x+1}{x}\right).
$$

Combine the logarithms:

$$
\ln\left(
\frac{\sqrt{x^2-9}\left(\frac{x+1}{x}\right)}{(x-3)^2}
\right).
$$

So the expression becomes

$$
\boxed{\ln\left(\frac{(x+1)\sqrt{x^2-9}}{x(x-3)^2}\right)}.
$$

Now find the domain of the original expression.

The first logarithm requires

$$
x^2-9>0,
$$

so

$$
x<-3
\qquad\text{or}\qquad
x>3.
$$

The second logarithm requires

$$
x-3>0,
$$

so

$$
x>3.
$$

The third logarithm requires

$$
\frac{x+1}{x}>0,
$$

so

$$
x<-1
\qquad\text{or}\qquad
x>0.
$$

The intersection is

$$
\boxed{x>3}.
$$

</div>

<div class="theorem-box">

#### Solution 8

The expression is

$$
\log_3\left(\frac{x^4\sqrt{y-2}}{(x^2+1)^3(5-y)}\right).
$$

Use the quotient rule:

$$
\log_3(x^4\sqrt{y-2})-\log_3((x^2+1)^3(5-y)).
$$

Use the product rule:

$$
\log_3(x^4)+\log_3(\sqrt{y-2})-\log_3((x^2+1)^3)-\log_3(5-y).
$$

Use the power rule:

$$
\boxed{4\log_3\lvert x\rvert+\frac12\log_3(y-2)-3\log_3(x^2+1)-\log_3(5-y)}.
$$

For restrictions, the square root requires

$$
y-2\ge 0.
$$

But the full logarithm cannot have input $$0$$, so we need

$$
y>2.
$$

Also, the denominator must not be zero and the argument must be positive. Since $$x^2+1>0$$ always, we need

$$
5-y>0,
$$

so

$$
y<5.
$$

Finally, $$x^4$$ cannot be $$0$$, so

$$
x\ne 0.
$$

Thus the restrictions are

$$
\boxed{x\ne 0,\qquad 2<y<5}.
$$

</div>

<div class="theorem-box">

#### Solution 9

The domain requires

$$
2x-1>0
\qquad\text{and}\qquad
7-x>0.
$$

So

$$
\frac12<x<7.
$$

The inequality is

$$
\log_{1/3}(2x-1)\ge \log_{1/3}(7-x).
$$

Since the base $$\frac13$$ is between $$0$$ and $$1$$, the logarithm is decreasing. Therefore the inequality reverses when we compare inputs:

$$
2x-1\le 7-x.
$$

Solve:

$$
3x\le 8,
$$

so

$$
x\le \frac83.
$$

Intersect this with the domain $$\frac12<x<7$$:

$$
\boxed{\left(\frac12,\frac83\right]}.
$$

</div>

<div class="theorem-box">

#### Solution 10

First find the logarithm domain:

$$
x^2-5x+6>0
$$

and

$$
2x+3>0.
$$

Factor:

$$
(x-2)(x-3)>0.
$$

Thus

$$
x<2
\qquad\text{or}\qquad
x>3.
$$

Also,

$$
x>-\frac32.
$$

So the domain is

$$
\left(-\frac32,2\right)\cup(3,\infty).
$$

Since $$\ln x$$ is increasing,

$$
\ln(x^2-5x+6)\le \ln(2x+3)
$$

is equivalent to

$$
x^2-5x+6\le 2x+3
$$

inside the logarithm domain.

Simplify:

$$
x^2-7x+3\le 0.
$$

The roots are

$$
x=\frac{7\pm\sqrt{49-12}}{2}
=\frac{7\pm\sqrt{37}}{2}.
$$

Since the parabola opens upward,

$$
\frac{7-\sqrt{37}}{2}\le x\le \frac{7+\sqrt{37}}{2}.
$$

Intersect with the logarithm domain:

$$
\boxed{\left[\frac{7-\sqrt{37}}2,2\right)\cup\left(3,\frac{7+\sqrt{37}}2\right]}.
$$

</div>

<div class="theorem-box">

#### Solution 11

The function is

$$
h(x)=\log_4(16-4x)-2.
$$

The logarithm requires

$$
16-4x>0.
$$

Thus

$$
x<4,
$$

so the domain is

$$
\boxed{(-\infty,4)}.
$$

A logarithmic function can output every real number, so the range is

$$
\boxed{(-\infty,\infty)}.
$$

The vertical asymptote occurs where the logarithm input approaches $$0$$:

$$
16-4x=0.
$$

So the vertical asymptote is

$$
\boxed{x=4}.
$$

For the $$x$$-intercept, set $$h(x)=0$$:

$$
\log_4(16-4x)-2=0.
$$

Then

$$
\log_4(16-4x)=2.
$$

So

$$
16-4x=4^2=16.
$$

Thus

$$
x=0.
$$

The $$x$$-intercept is

$$
\boxed{(0,0)}.
$$

The $$y$$-intercept is also

$$
h(0)=\log_4(16)-2=2-2=0,
$$

so the $$y$$-intercept is

$$
\boxed{(0,0)}.
$$

Since $$16-4x$$ decreases as $$x$$ increases and $$\log_4 x$$ is increasing, $$h$$ is decreasing on

$$
\boxed{(-\infty,4)}.
$$

It is never increasing.

Now find the inverse. Let

$$
y=\log_4(16-4x)-2.
$$

Then

$$
y+2=\log_4(16-4x).
$$

Rewrite exponentially:

$$
4^{y+2}=16-4x.
$$

Then

$$
4x=16-4^{y+2}.
$$

So

$$
x=4-4^{y+1}.
$$

Switch $$x$$ and $$y$$:

$$
\boxed{h^{-1}(x)=4-4^{x+1}}.
$$

The inverse has domain $$(-\infty,\infty)$$ and range $$(-\infty,4)$$. The graphs of $$h$$ and $$h^{-1}$$ are reflections across the line $$y=x$$.

The graph of both functions are shown below (green = inverse function):

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/expgraph2.png" alt="parent functions" loading="lazy" decoding="async" />

</div>

<div class="theorem-box">

#### Solution 12

The model is

$$
P(t)=\frac{1200}{1+19e^{-0.4t}}.
$$

The initial population is

$$
P(0)=\frac{1200}{1+19e^0}
=\frac{1200}{20}
=60.
$$

So

$$
\boxed{P(0)=60}.
$$

As $$t\to\infty$$,

$$
e^{-0.4t}\to 0.
$$

Thus

$$
P(t)\to \frac{1200}{1}=1200.
$$

So the limiting population is

$$
\boxed{1200}.
$$

Now solve $$P(t)=900$$:

$$
900=\frac{1200}{1+19e^{-0.4t}}.
$$

Then

$$
900(1+19e^{-0.4t})=1200.
$$

Divide by $$300$$:

$$
3(1+19e^{-0.4t})=4.
$$

So

$$
1+19e^{-0.4t}=\frac43.
$$

Then

$$
19e^{-0.4t}=\frac13.
$$

Thus

$$
e^{-0.4t}=\frac1{57}.
$$

Take natural logs:

$$
-0.4t=\ln\left(\frac1{57}\right)=-\ln 57.
$$

Therefore

$$
t=\frac{\ln 57}{0.4}
=\frac52\ln 57.
$$

So

$$
\boxed{t=\frac52\ln 57}.
$$

</div>

<div class="theorem-box">

#### Solution 13

Let

$$
t=\log_4 n.
$$

Then

$$
\log_{16} n=\frac{\log_4 n}{\log_4 16}
=\frac{t}{2}.
$$

The equation becomes

$$
\log_2\left(\frac{t}{2}\right)=\log_4(t).
$$

Rewrite both sides in base $$2$$:

$$
\log_2 t-\log_2 2=\frac{\log_2 t}{\log_2 4}.
$$

So

$$
\log_2 t-1=\frac12\log_2 t.
$$

Then

$$
\frac12\log_2 t=1.
$$

Thus

$$
\log_2 t=2,
$$

so

$$
t=4.
$$

Since $$t=\log_4 n$$,

$$
\log_4 n=4.
$$

Therefore

$$
\boxed{n=4^4=256}.
$$

</div>

<div class="theorem-box">

#### Solution 14

The function is

$$
F(x)=\ln\left(\frac{x-a}{b-x}\right),
$$

where $$a<b$$.

For the logarithm to be defined,

$$
\frac{x-a}{b-x}>0.
$$

Since $$a<b$$, this happens exactly when

$$
a<x<b.
$$

So the domain is

$$
\boxed{(a,b)}.
$$

For the $$x$$-intercept, set $$F(x)=0$$:

$$
\ln\left(\frac{x-a}{b-x}\right)=0.
$$

Then

$$
\frac{x-a}{b-x}=1.
$$

So

$$
x-a=b-x.
$$

Thus

$$
2x=a+b,
$$

and

$$
x=\frac{a+b}{2}.
$$

The $$x$$-intercept is

$$
\boxed{\left(\frac{a+b}{2},0\right)}.
$$

The $$y$$-intercept exists only if $$0$$ is in the domain, meaning

$$
a<0<b.
$$

If this is true, then

$$
F(0)=\ln\left(\frac{-a}{b}\right).
$$

So the $$y$$-intercept is

$$
\boxed{\left(0,\ln\left(\frac{-a}{b}\right)\right)}
$$

if $$a<0<b$$. Otherwise, there is no $$y$$-intercept.

The vertical asymptotes occur at the endpoints of the domain:

$$
\boxed{x=a\quad\text{and}\quad x=b}.
$$

Now find the inverse. Let

$$
y=\ln\left(\frac{x-a}{b-x}\right).
$$

Rewrite exponentially:

$$
e^y=\frac{x-a}{b-x}.
$$

Multiply:

$$
e^y(b-x)=x-a.
$$

Expand:

$$
be^y-xe^y=x-a.
$$

Move the $$x$$ terms together:

$$
be^y+a=x+xe^y.
$$

Factor:

$$
be^y+a=x(1+e^y).
$$

Thus

$$
x=\frac{a+be^y}{1+e^y}.
$$

Switch $$x$$ and $$y$$:

$$
\boxed{F^{-1}(x)=\frac{a+be^x}{1+e^x}}.
$$

As $$x$$ moves through $$(a,b)$$, the ratio $$\frac{x-a}{b-x}$$ moves through $$(0,\infty)$$, so the logarithm moves through all real numbers. Therefore the range is

$$
\boxed{(-\infty,\infty)}.
$$

</div>

<div class="theorem-box">

#### Solution 15

The product is

$$
\prod_{k=4}^{63}\frac{\log_k\left(5^{k^2-1}\right)}{\log_{k+1}\left(5^{k^2-4}\right)}.
$$

Use change of base:

$$
\log_k\left(5^{k^2-1}\right)
=\frac{(k^2-1)\ln 5}{\ln k},
$$

and

$$
\log_{k+1}\left(5^{k^2-4}\right)
=\frac{(k^2-4)\ln 5}{\ln(k+1)}.
$$

So each factor becomes

$$
\frac{\frac{(k^2-1)\ln 5}{\ln k}}{\frac{(k^2-4)\ln 5}{\ln(k+1)}}
=\frac{k^2-1}{k^2-4}\cdot\frac{\ln(k+1)}{\ln k}.
$$

Factor the polynomials:

$$
\frac{k^2-1}{k^2-4}
=\frac{(k-1)(k+1)}{(k-2)(k+2)}.
$$

Thus the product is

$$
\prod_{k=4}^{63}
\frac{(k-1)(k+1)}{(k-2)(k+2)}
\cdot
\prod_{k=4}^{63}\frac{\ln(k+1)}{\ln k}.
$$

First,

$$
\prod_{k=4}^{63}\frac{k-1}{k-2}
=\frac32\cdot\frac43\cdot\frac54\cdots\frac{62}{61}
=31.
$$

Also,

$$
\prod_{k=4}^{63}\frac{k+1}{k+2}
=\frac56\cdot\frac67\cdot\frac78\cdots\frac{64}{65}
=\frac5{65}
=\frac1{13}.
$$

So the rational part is

$$
31\cdot\frac1{13}=\frac{31}{13}.
$$

The logarithm part telescopes:

$$
\prod_{k=4}^{63}\frac{\ln(k+1)}{\ln k}
=\frac{\ln 5}{\ln 4}\cdot\frac{\ln 6}{\ln 5}\cdots\frac{\ln 64}{\ln 63}
=\frac{\ln 64}{\ln 4}.
$$

Since $$64=4^3$$,

$$
\frac{\ln 64}{\ln 4}=3.
$$

Therefore the product is

$$
\frac{31}{13}\cdot 3=\boxed{\frac{93}{13}}.
$$

</div>

<div class="theorem-box">

#### Solution 16

For part $$(A)$$,

$$
\operatorname{EML}(x,1)=e^x-\ln 1.
$$

Since $$\ln 1=0$$,

$$
\operatorname{EML}(x,1)=e^x.
$$

Thus

$$
\boxed{e^x=\operatorname{EML}(x,1)}.
$$

For part $$(B)$$,

$$
\operatorname{EML}(0,x)=e^0-\ln x.
$$

Since $$e^0=1$$,

$$
\operatorname{EML}(0,x)=1-\ln x.
$$

Solving for $$\ln x$$ gives

$$
\boxed{\ln x=1-\operatorname{EML}(0,x)}.
$$

For part $$(C)$$, use change of base:

$$
\log_b x=\frac{\ln x}{\ln b}.
$$

Using part $$(B)$$,

$$
\ln x=1-\operatorname{EML}(0,x)
$$

and

$$
\ln b=1-\operatorname{EML}(0,b).
$$

Therefore

$$
\boxed{\log_b x=\frac{1-\operatorname{EML}(0,x)}{1-\operatorname{EML}(0,b)}}.
$$

For part $$(D)$$, use

$$
e^x=\operatorname{EML}(x,1)
$$

and

$$
\ln z=1-\operatorname{EML}(0,z).
$$

Since

$$
x+y=\ln(e^xe^y),
$$

we get

$$
\boxed{x+y=1-\operatorname{EML}\left(0,\operatorname{EML}(x,1)\operatorname{EML}(y,1)\right)}.
$$

Similarly,

$$
x-y=\ln\left(\frac{e^x}{e^y}\right),
$$

so

$$
\boxed{x-y=1-\operatorname{EML}\left(0,\frac{\operatorname{EML}(x,1)}{\operatorname{EML}(y,1)}\right)}.
$$

For part $$(E)$$, the tree for

$$
\operatorname{EML}\left(\operatorname{EML}(x,1),\operatorname{EML}(0,y)\right)
$$

has a top EML node. Its left input is another EML node with inputs $$x$$ and $$1$$. Its right input is another EML node with inputs $$0$$ and $$y$$.

In text form:

$$
\operatorname{EML}
\left(
\begin{array}{c}
\operatorname{EML}(x,1),\\
\operatorname{EML}(0,y)
\end{array}
\right).
$$

Now simplify:

$$
\operatorname{EML}(x,1)=e^x
$$

and

$$
\operatorname{EML}(0,y)=1-\ln y.
$$

Therefore

$$
\operatorname{EML}\left(\operatorname{EML}(x,1),\operatorname{EML}(0,y)\right)
=\operatorname{EML}(e^x,1-\ln y).
$$

Using the definition of EML,

$$
\operatorname{EML}(e^x,1-\ln y)
=e^{e^x}-\ln(1-\ln y).
$$

So the expression simplifies to

$$
\boxed{e^{e^x}-\ln(1-\ln y)}.
$$

This requires

$$
1-\ln y>0,
$$

so

$$
0<y<e.
$$

For part $$(F)$$, the comparison is that both EML and NAND are examples of a very small set of building blocks being powerful enough to generate a much larger system. A NAND gate alone can build NOT, AND, OR, and therefore all Boolean logic circuits. Similarly, the paper claims that EML, together with the constant $$1$$, can be composed into trees that represent the standard elementary functions. In both cases, complicated expressions can be built from repeated uses of one simple operation.

</div>

## Unit 6 & 7: Trigonometric Functions

[Full notes →](/notes/ap/precalc/trigfunc/)

### Practice

1. Let $$\theta=-\frac{29\pi}{6}$$.

   $$(A)$$ Find the least positive coterminal angle with $$\theta$$.

   $$(B)$$ Convert both angles to degrees.

   $$(C)$$ Find the reference angle and quadrant of $$\theta$$.

   $$(D)$$ Evaluate all six trigonometric functions of $$\theta$$ exactly.

2. A sector of a circle has perimeter $$40$$ cm and central angle $$\frac{5\pi}{6}$$. Find the radius, arc length, and area of the sector exactly.
3. A wheel of radius $$18$$ cm rotates counterclockwise at $$45$$ revolutions per minute. A bug starts at the point on the wheel closest to the ground. After $$7$$ seconds, find the bug's angle in standard position, its coordinates relative to the center of the wheel, and its linear speed in cm/sec.
4. A pulley system has two wheels connected by a belt without slipping. Wheel A has radius $$4$$ inches and rotates at $$150$$ revolutions per minute. Wheel B rotates at $$60$$ revolutions per minute. Find the radius of Wheel B. Then find the linear belt speed in inches per second.
5. Let $$\theta$$ be in Quadrant II and suppose $$\tan\theta=-\frac{8}{15}$$. Find exact values of $$\sin\theta$$, $$\cos\theta$$, $$\sec\theta$$, $$\csc\theta$$, and $$\cot\theta$$. Then evaluate $$\sin(\pi-\theta)$$ and $$\cos(\theta+\pi)$$.
6. Let $$P=(x,y)$$ be a point on the unit circle in Quadrant III. If $$x-y=\frac{\sqrt2}{2}$$, find $$P$$ and the angle $$\theta\in[0,2\pi)$$ whose terminal side passes through $$P$$.
7. Evaluate exactly: $$6\sin\left(-\frac{7\pi}{6}\right)-4\cos\left(\frac{11\pi}{3}\right)+3\tan\left(-\frac{13\pi}{4}\right)-2\sec\left(\frac{17\pi}{6}\right).$$
8. Solve exactly on $$[0,4\pi)$$: $$2\sin^2x-\sin x-1=0.$$
9. Solve exactly on $$[0,2\pi)$$:$$2\cos^2x+\sqrt3\cos x-1=0.$$
10. Solve exactly on $$[0,3\pi)$$:$$\tan^2x-3=0.$$
11. The radius of the circle in the figure is 2 units. Express the length of $$DC$$ in terms of $$\alpha$$.

   <img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/cirtri1.png" alt="parent functions" loading="lazy" decoding="async" />

12. Prove the identity: $$\frac{1-\cos\theta}{\sin\theta}+\frac{\sin\theta}{1-\cos\theta}=2\csc\theta.$$ Then state all values of $$\theta$$ in $$[0,2\pi)$$ for which the original identity is undefined.
13. Prove the identity: $$1-\frac{\sin^2\theta}{1+\cot\theta}-\frac{\cos^2\theta}{1+\tan\theta}=\sin\theta\cos\theta.$$
14. For each of the following trigonometric expressions, find a segment in the diagram that has length equal to the trigonometric expression: $$\sin\theta, \cos\theta, \sec\theta, \csc\theta, \tan\theta, \cot\theta$$. Note that you are not asked to express each trigonometric function in terms of multiple segments in the diagram. You must find a segment whose whole length equals the corresponding trig function. The graph is given below:

   <img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/cirtri2.png" alt="parent functions" loading="lazy" decoding="async" />

15. On $$[0,2\pi)$$, solve the equation numerically to three decimal places: $$3\sin x-2\cos x=1.$$ (Hint: Try the substitution $$t=\tan(x/2)$$, and solve for $$x$$ using the $$\tan^{-1}$$ button on the calculator.)
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

---

### Solutions

<div class="theorem-box">

#### Solution 1

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

</div>

<div class="theorem-box">

#### Solution 2

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

</div>

<div class="theorem-box">

#### Solution 3

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

</div>

<div class="theorem-box">

#### Solution 4

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

</div>

<div class="theorem-box">

#### Solution 5

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

</div>

<div class="theorem-box">

#### Solution 6

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

</div>

<div class="theorem-box">

#### Solution 7

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

</div>

<div class="theorem-box">

#### Solution 8

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

</div>

<div class="theorem-box">

#### Solution 9

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

</div>

<div class="theorem-box">

#### Solution 10

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

</div>

<div class="theorem-box">

#### Solution 11

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

</div>

<div class="theorem-box">

#### Solution 12

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

</div>

<div class="theorem-box">

#### Solution 13

Start with the left-hand side:

$$
1-\frac{\sin^2\theta}{1+\cot\theta}-\frac{\cos^2\theta}{1+\tan\theta}.
$$

Rewrite cotangent and tangent using sine and cosine:

$$
1-\frac{\sin^2\theta}{1+\frac{\cos\theta}{\sin\theta}}-\frac{\cos^2\theta}{1+\frac{\sin\theta}{\cos\theta}}.
$$

Simplify the denominators:

$$
1+\frac{\cos\theta}{\sin\theta}=\frac{\sin\theta+\cos\theta}{\sin\theta}
$$

and

$$
1+\frac{\sin\theta}{\cos\theta}=\frac{\sin\theta+\cos\theta}{\cos\theta}.
$$

So the expression becomes

$$
1-\frac{\sin^3\theta}{\sin\theta+\cos\theta}-\frac{\cos^3\theta}{\sin\theta+\cos\theta}.
$$

Combine the fractions:

$$
1-\frac{\sin^3\theta+\cos^3\theta}{\sin\theta+\cos\theta}.
$$

Use the sum of cubes formula:

$$
a^3+b^3=(a+b)(a^2-ab+b^2).
$$

Then

$$
\sin^3\theta+\cos^3\theta=(\sin\theta+\cos\theta)(\sin^2\theta-\sin\theta\cos\theta+\cos^2\theta).
$$

Cancel the common factor:

$$
1-(\sin^2\theta-\sin\theta\cos\theta+\cos^2\theta).
$$

Since

$$
\sin^2\theta+\cos^2\theta=1,
$$

this becomes

$$
1-(1-\sin\theta\cos\theta)=\sin\theta\cos\theta.
$$

Therefore,

$$
\boxed{1-\frac{\sin^2\theta}{1+\cot\theta}-\frac{\cos^2\theta}{1+\tan\theta}=\sin\theta\cos\theta}.
$$

</div>

<div class="theorem-box">

#### Solution 14

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

</div>

<div class="theorem-box">

#### Solution 15

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

</div>

<div class="theorem-box">

#### Solution 16

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

</div>

## Unit 8 & 9: Graphs and Analytics of Trig Functions

[Full notes →](/notes/ap/precalc/graphanalyticaltrig/)

### Practice

1. For $$f(x)=-3\sin\left(2\left(x-\frac{\pi}{6}\right)\right)+1$$, find the amplitude, period, phase shift, midline, range, and five key points for one full period. Then sketch one full period.
2. A sinusoidal function has maximum value $$7$$ at $$x=\frac{\pi}{3}$$ and minimum value $$-1$$ at $$x=\frac{7\pi}{6}$$. Write a cosine model for the function, assuming the given maximum and minimum are consecutive. Then find five key points and sketch one full period.
3. For $$g(x)=2\tan\left(3\left(x+\frac{\pi}{12}\right)\right)-1$$, find the period, center point of one branch, vertical asymptotes surrounding that branch, and the $$x$$-intercept in that branch. Then sketch the branch.
4. For $$h(x)=-2\sec\left(\frac12(x-\pi)\right)+3$$, find the period, midline, vertical asymptotes in one period starting at $$x=\pi$$, and range. Then sketch one full period, including the guiding cosine curve.
5. Solve exactly on $$[0,4\pi)$$. Then sketch $$y=2\sin^2x-\sin x-1$$ on $$[0,4\pi)$$ and label all $$x$$-intercepts: $$2\sin^2x-\sin x-1=0.$$
6. Solve on $$[0, 4\pi)$$: $$4\sin(4x)\cos(6x)= 2\sin(10x)+1$$.
7. Solve exactly on $$[0,2\pi)$$: $$\tan x+\cot x=4.$$
8. Evaluate each of these exactly: $$\sin 75^\circ, \cos 15^\circ,\tan 105^\circ.$$ The sine and cosine values for $$15^\circ$$ and $$75^\circ$$ are also useful to memorize as well.
9. Prove the identity: $$\frac{\sin(x+y)+\sin(x-y)}{\cos(x+y)+\cos(x-y)}=\tan x.$$
10. Solve exactly on $$[0,2\pi)$$. Then use the product-to-sum form to sketch enough of the graph to explain why your number of solutions makes sense: $$\cos(5x)+\cos(3x)=0.$$
11. Evaluate exactly: $$\sin\left(\cos^{-1}\frac35\right)+\cos\left(\sin^{-1}\left(-\frac5{13}\right)\right)+\tan\left(\cos^{-1}\left(-\frac45\right)\right).$$
12. How many solutions does the equation $$\tan(2x)=\cos(\tfrac{x}{2})$$ have on the interval $$[0,2\pi]$$?
13. Suppose $$\frac{\pi}{2}<\theta<\pi$$ and $$\cos\theta=-\frac35$$. Find exact values of $$\sin\left(\frac{\theta}{2}\right), \cos\left(\frac{\theta}{2}\right),$$ and $$\tan\left(\frac{\theta}{2}\right).$$
14. Let $$x$$ and $$y$$ be real numbers such that $$\frac{\sin x}{\sin y} = 3$$ and $$\frac{\cos x}{\cos y} = \frac{1}{2}$$. The value of $$\frac{\sin 2x}{\sin 2y} + \frac{\cos 2x}{\cos 2y}$$ can be expressed in the form $$\frac{p}{q}$$, where $$p$$ and $$q$$ are relatively prime positive integers. Find $$p+q$$. (2014 AIME II)
15. A tide height is modeled by a sinusoidal function of time. At $$t=2$$ hours, the tide is at a high of $$11$$ feet. At $$t=8$$ hours, the tide is at the next low of $$3$$ feet.

   $$(A)$$ Write a cosine model $$H(t)$$ for the tide height.

   $$(B)$$ Find the period and midline.

   $$(C)$$ Find the first time after $$t=2$$ when the tide height is $$9$$ feet.

   $$(D)$$ Sketch one full period of the tide model and label the high tide, low tide, midline, and the point where $$H(t)=9$$ first occurs after $$t=2$$.

16. (Bonus, Viète's formula for $$\pi$$)

Let

$$
a_1=\sqrt2
$$

and define

$$
a_{n+1}=\sqrt{2+a_n}.
$$

The nested radicals

$$
\sqrt2,\quad \sqrt{2+\sqrt2},\quad \sqrt{2+\sqrt{2+\sqrt2}},\quad \ldots
$$

are connected to repeated half-angle identities.

   $$(A)$$ Use the half-angle identity for cosine to show that

   $$
   a_n=2\cos\left(\frac{\pi}{2^{n+1}}\right).
   $$

   $$(B)$$ Use part $$(A)$$ and the identity $$\sin(2x)=2\sin x\cos x$$ to show how products of the terms $$\frac{a_n}{2}$$ are related to $$\frac{2}{\pi}$$.

   $$(C)$$ Explain why this leads to Viète's infinite product:

   $$
   \frac{2}{\pi}
   =\frac{\sqrt2}{2}\cdot
   \frac{\sqrt{2+\sqrt2}}{2}\cdot
   \frac{\sqrt{2+\sqrt{2+\sqrt2}}}{2}\cdots.
   $$

---

### Solutions

<div class="theorem-box">

#### Solution 1

The function is

$$
f(x)=-3\sin\left(2\left(x-\frac{\pi}{6}\right)\right)+1.
$$

The amplitude is

$$
\boxed{3}.
$$

The period is

$$
\frac{2\pi}{\lvert 2 \rvert}=\pi.
$$

So

$$
\boxed{\text{period}=\pi}.
$$

The phase shift is

$$
\boxed{\frac{\pi}{6}\text{ right}}.
$$

The midline is

$$
\boxed{y=1}.
$$

The range is

$$
1-3\le y\le 1+3,
$$

so

$$
\boxed{[-2,4]}.
$$

The key-point increment is one fourth of the period:

$$
\frac{\pi}{4}.
$$

Starting at $$x=\frac{\pi}{6}$$, the five key $$x$$-values are

$$
\frac{\pi}{6},\quad
\frac{5\pi}{12},\quad
\frac{2\pi}{3},\quad
\frac{11\pi}{12},\quad
\frac{7\pi}{6}.
$$

Because the sine graph is reflected over the $$x$$-axis, the corresponding $$y$$-values are

$$
1,\quad -2,\quad 1,\quad 4,\quad 1.
$$

Thus the five key points are

$$
\boxed{\left(\frac{\pi}{6},1\right),
\left(\frac{5\pi}{12},-2\right),
\left(\frac{2\pi}{3},1\right),
\left(\frac{11\pi}{12},4\right),
\left(\frac{7\pi}{6},1\right)}.
$$

A graph with many key points is shown below:

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/triggraph1.png" alt="parent functions" loading="lazy" decoding="async" />

</div>

<div class="theorem-box">

#### Solution 2

The maximum is $$7$$ and the minimum is $$-1$$. The midline is the average:

$$
D=\frac{7+(-1)}{2}=3.
$$

The amplitude is half the distance between max and min:

$$
A=\frac{7-(-1)}{2}=4.
$$

The distance from a maximum to the next minimum is half a period:

$$
\frac{7\pi}{6}-\frac{\pi}{3}
=\frac{7\pi}{6}-\frac{2\pi}{6}
=\frac{5\pi}{6}.
$$

So the period is

$$
2\cdot\frac{5\pi}{6}=\frac{5\pi}{3}.
$$

Thus

$$
B=\frac{2\pi}{\frac{5\pi}{3}}=\frac65.
$$

Since the function has a maximum at $$x=\frac{\pi}{3}$$, use a positive cosine model:

$$
\boxed{f(x)=4\cos\left(\frac65\left(x-\frac{\pi}{3}\right)\right)+3}.
$$

The key-point increment is

$$
\frac14\cdot\frac{5\pi}{3}=\frac{5\pi}{12}.
$$

Starting at the maximum $$x=\frac{\pi}{3}$$, the five key points are

$$
\boxed{\left(\frac{\pi}{3},7\right),
\left(\frac{3\pi}{4},3\right),
\left(\frac{7\pi}{6},-1\right),
\left(\frac{19\pi}{12},3\right),
\left(2\pi,7\right)}.
$$

A graph with many key points is shown below:

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/triggraph2.png" alt="parent functions" loading="lazy" decoding="async" />

</div>

<div class="theorem-box">

#### Solution 3

The function is

$$
g(x)=2\tan\left(3\left(x+\frac{\pi}{12}\right)\right)-1.
$$

The period of tangent is

$$
\frac{\pi}{\lvert 3 \rvert}=\frac{\pi}{3}.
$$

So

$$
\boxed{\text{period}=\frac{\pi}{3}}.
$$

The center point occurs where the tangent input is $$0$$:

$$
3\left(x+\frac{\pi}{12}\right)=0.
$$

Thus

$$
x=-\frac{\pi}{12}.
$$

At the center,

$$
g\left(-\frac{\pi}{12}\right)=2\tan(0)-1=-1.
$$

So the center point is

$$
\boxed{\left(-\frac{\pi}{12},-1\right)}.
$$

The distance from the center to each vertical asymptote is half the period:

$$
\frac12\cdot\frac{\pi}{3}=\frac{\pi}{6}.
$$

So the surrounding vertical asymptotes are

$$
-\frac{\pi}{12}-\frac{\pi}{6}=-\frac{\pi}{4}
$$

and

$$
-\frac{\pi}{12}+\frac{\pi}{6}=\frac{\pi}{12}.
$$

Thus

$$
\boxed{x=-\frac{\pi}{4}\quad\text{and}\quad x=\frac{\pi}{12}}.
$$

For the $$x$$-intercept, set $$g(x)=0$$:

$$
2\tan\left(3\left(x+\frac{\pi}{12}\right)\right)-1=0.
$$

Then

$$
\tan\left(3\left(x+\frac{\pi}{12}\right)\right)=\frac12.
$$

On the center branch,

$$
3\left(x+\frac{\pi}{12}\right)=\tan^{-1}\left(\frac12\right).
$$

Therefore

$$
\boxed{x=\frac13\tan^{-1}\left(\frac12\right)-\frac{\pi}{12}}.
$$

The branch should increase from the vertical asymptote $$x=-\frac{\pi}{4}$$ to the vertical asymptote $$x=\frac{\pi}{12}$$, passing through the center point $$\left(-\frac{\pi}{12},-1\right)$$ and the $$x$$-intercept above.

A graph with many key points is shown below:

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/triggraph3.png" alt="parent functions" loading="lazy" decoding="async" />

</div>

<div class="theorem-box">

#### Solution 4

The function is

$$
h(x)=-2\sec\left(\frac12(x-\pi)\right)+3.
$$

The period of secant is

$$
\frac{2\pi}{\left\lvert \frac12\right\rvert}=4\pi.
$$

So

$$
\boxed{\text{period}=4\pi}.
$$

The midline is

$$
\boxed{y=3}.
$$

One period starting at $$x=\pi$$ runs from

$$
x=\pi
$$

to

$$
x=\pi+4\pi=5\pi.
$$

Secant has vertical asymptotes when the cosine inside is $$0$$:

$$
\frac12(x-\pi)=\frac{\pi}{2}+k\pi.
$$

Multiply by $$2$$:

$$
x-\pi=\pi+2k\pi.
$$

Thus

$$
x=2\pi+2k\pi.
$$

In the period $$[\pi,5\pi]$$, the vertical asymptotes are

$$
\boxed{x=2\pi\quad\text{and}\quad x=4\pi}.
$$

The parent secant has range $$(-\infty,-1]\cup[1,\infty)$$. Multiplying by $$-2$$ gives $$(-\infty,-2]\cup[2,\infty)$$ with the branches swapped, and adding $$3$$ gives

$$
\boxed{(-\infty,1]\cup[5,\infty)}.
$$

The guiding cosine curve is

$$
y=-2\cos\left(\frac12(x-\pi)\right)+3.
$$

On $$[\pi,5\pi]$$, its key values are

$$
(\pi,1),\quad (2\pi,3),\quad (3\pi,5),\quad (4\pi,3),\quad (5\pi,1).
$$

The secant graph has vertices at $$(\pi,1)$$, $$(3\pi,5)$$, and $$(5\pi,1)$$, with vertical asymptotes at $$x=2\pi$$ and $$x=4\pi$$.

A graph with many key points is shown below:

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/triggraph4.png" alt="parent functions" loading="lazy" decoding="async" />

</div>

<div class="theorem-box">

#### Solution 5

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
\sin x=-\frac12
\qquad\text{or}\qquad
\sin x=1.
$$

On $$[0,4\pi)$$,

$$
\sin x=1
$$

at

$$
x=\frac{\pi}{2},\frac{5\pi}{2}.
$$

Also,

$$
\sin x=-\frac12
$$

at

$$
x=\frac{7\pi}{6},\frac{11\pi}{6},\frac{19\pi}{6},\frac{23\pi}{6}.
$$

Therefore

$$
\boxed{x=\frac{\pi}{2},\frac{7\pi}{6},\frac{11\pi}{6},\frac{5\pi}{2},\frac{19\pi}{6},\frac{23\pi}{6}}.
$$

The graph of $$y=2\sin^2x-\sin x-1$$ crosses the $$x$$-axis exactly at those values on $$[0,4\pi)$$.

A graph with many key points is shown below:

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/triggraph5.png" alt="parent functions" loading="lazy" decoding="async" />

</div>

<div class="theorem-box">

#### Solution 6

Start with

$$
4\sin(4x)\cos(6x)=2\sin(10x)+1.
$$

Use the product-to-sum identity

$$
\sin A\cos B=\frac12[\sin(A+B)+\sin(A-B)].
$$

Then

$$
4\sin(4x)\cos(6x)
=2[\sin(10x)+\sin(-2x)].
$$

Since $$\sin(-2x)=-\sin(2x)$$,

$$
4\sin(4x)\cos(6x)=2\sin(10x)-2\sin(2x).
$$

So the equation becomes

$$
2\sin(10x)-2\sin(2x)=2\sin(10x)+1.
$$

Subtract $$2\sin(10x)$$ from both sides:

$$
-2\sin(2x)=1.
$$

Thus

$$
\sin(2x)=-\frac12.
$$

Let $$u=2x$$. Since $$x\in[0,4\pi)$$,

$$
u\in[0,8\pi).
$$

On $$[0,8\pi)$$, $$\sin u=-\frac12$$ at

$$
u=\frac{7\pi}{6},\frac{11\pi}{6},\frac{19\pi}{6},\frac{23\pi}{6},
\frac{31\pi}{6},\frac{35\pi}{6},\frac{43\pi}{6},\frac{47\pi}{6}.
$$

Divide by $$2$$:

$$
\boxed{x=\frac{7\pi}{12},\frac{11\pi}{12},\frac{19\pi}{12},\frac{23\pi}{12},
\frac{31\pi}{12},\frac{35\pi}{12},\frac{43\pi}{12},\frac{47\pi}{12}}.
$$

</div>

<div class="theorem-box">

#### Solution 7

The equation is

$$
\tan x+\cot x=4.
$$

Let

$$
t=\tan x.
$$

Then $$\cot x=\frac1t$$, so

$$
t+\frac1t=4.
$$

Multiply by $$t$$:

$$
t^2+1=4t.
$$

So

$$
t^2-4t+1=0.
$$

Use the quadratic formula:

$$
t=\frac{4\pm\sqrt{16-4}}{2}
=2\pm\sqrt3.
$$

Since

$$
\tan\left(\frac{\pi}{12}\right)=2-\sqrt3
$$

and

$$
\tan\left(\frac{5\pi}{12}\right)=2+\sqrt3,
$$

the solutions on $$[0,2\pi)$$ are

$$
\boxed{x=\frac{\pi}{12},\frac{5\pi}{12},\frac{13\pi}{12},\frac{17\pi}{12}}.
$$

</div>

<div class="theorem-box">

#### Solution 8

Use angle addition and subtraction formulas.

First,

$$
\sin75^\circ=\sin(45^\circ+30^\circ).
$$

So

$$
\sin75^\circ
=\sin45^\circ\cos30^\circ+\cos45^\circ\sin30^\circ.
$$

Thus

$$
\sin75^\circ
=\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}
+\frac{\sqrt2}{2}\cdot\frac12
=\frac{\sqrt6+\sqrt2}{4}.
$$

Next,

$$
\cos15^\circ=\cos(45^\circ-30^\circ).
$$

So

$$
\cos15^\circ
=\cos45^\circ\cos30^\circ+\sin45^\circ\sin30^\circ
=\frac{\sqrt6+\sqrt2}{4}.
$$

Finally,

$$
\tan105^\circ=\tan(60^\circ+45^\circ).
$$

Then

$$
\tan105^\circ
=\frac{\sqrt3+1}{1-\sqrt3}.
$$

Rationalize:

$$
\frac{\sqrt3+1}{1-\sqrt3}\cdot\frac{1+\sqrt3}{1+\sqrt3}
=\frac{4+2\sqrt3}{-2}
=-2-\sqrt3.
$$

Therefore

$$
\boxed{\sin75^\circ=\frac{\sqrt6+\sqrt2}{4}},
$$

$$
\boxed{\cos15^\circ=\frac{\sqrt6+\sqrt2}{4}},
$$

and

$$
\boxed{\tan105^\circ=-2-\sqrt3}.
$$

</div>

<div class="theorem-box">

#### Solution 9

Start with the left-hand side:

$$
\frac{\sin(x+y)+\sin(x-y)}{\cos(x+y)+\cos(x-y)}.
$$

Use sum-to-product formulas:

$$
\sin(x+y)+\sin(x-y)
=2\sin x\cos y.
$$

Also,

$$
\cos(x+y)+\cos(x-y)
=2\cos x\cos y.
$$

Therefore

$$
\frac{\sin(x+y)+\sin(x-y)}{\cos(x+y)+\cos(x-y)}
=\frac{2\sin x\cos y}{2\cos x\cos y}.
$$

Cancel:

$$
\frac{2\sin x\cos y}{2\cos x\cos y}
=\frac{\sin x}{\cos x}
=\tan x.
$$

Thus

$$
\boxed{\frac{\sin(x+y)+\sin(x-y)}{\cos(x+y)+\cos(x-y)}=\tan x}.
$$

</div>

<div class="theorem-box">

#### Solution 10

Use the sum-to-product formula:

$$
\cos A+\cos B
=2\cos\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right).
$$

With $$A=5x$$ and $$B=3x$$,

$$
\cos(5x)+\cos(3x)
=2\cos(4x)\cos x.
$$

So the equation becomes

$$
2\cos(4x)\cos x=0.
$$

Thus

$$
\cos(4x)=0
$$

or

$$
\cos x=0.
$$

For $$\cos x=0$$ on $$[0,2\pi)$$,

$$
x=\frac{\pi}{2},\frac{3\pi}{2}.
$$

For $$\cos(4x)=0$$,

$$
4x=\frac{\pi}{2}+k\pi.
$$

So

$$
x=\frac{\pi}{8}+\frac{k\pi}{4}.
$$

On $$[0,2\pi)$$, this gives

$$
x=\frac{\pi}{8},\frac{3\pi}{8},\frac{5\pi}{8},\frac{7\pi}{8},
\frac{9\pi}{8},\frac{11\pi}{8},\frac{13\pi}{8},\frac{15\pi}{8}.
$$

Therefore

$$
\boxed{x=\frac{\pi}{8},\frac{3\pi}{8},\frac{\pi}{2},\frac{5\pi}{8},\frac{7\pi}{8},\frac{9\pi}{8},\frac{11\pi}{8},\frac{3\pi}{2},\frac{13\pi}{8},\frac{15\pi}{8}}.
$$

The product-to-sum form

$$
\cos(5x)+\cos(3x)=2\cos(4x)\cos x
$$

shows that zeros occur whenever either factor is zero. A sketch should mark the eight zeros from $$\cos(4x)=0$$ and the two zeros from $$\cos x=0$$.

**ADD IMAGE OF GRAPH**

</div>

<div class="theorem-box">

#### Solution 11

Let

$$
\alpha=\cos^{-1}\frac35.
$$

Then $$\cos\alpha=\frac35$$, and since $$\alpha\in[0,\pi]$$, $$\alpha$$ is in Quadrant I. Therefore

$$
\sin\alpha=\frac45.
$$

So

$$
\sin\left(\cos^{-1}\frac35\right)=\frac45.
$$

Next, let

$$
\beta=\sin^{-1}\left(-\frac5{13}\right).
$$

Since $$\beta\in\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$$ and sine is negative, $$\beta$$ is in Quadrant IV. Thus

$$
\cos\beta=\frac{12}{13}.
$$

So

$$
\cos\left(\sin^{-1}\left(-\frac5{13}\right)\right)=\frac{12}{13}.
$$

Finally, let

$$
\gamma=\cos^{-1}\left(-\frac45\right).
$$

Then $$\gamma\in[0,\pi]$$ and cosine is negative, so $$\gamma$$ is in Quadrant II. Hence

$$
\sin\gamma=\frac35,
$$

and

$$
\tan\gamma=\frac{\frac35}{-\frac45}=-\frac34.
$$

Now add:

$$
\frac45+\frac{12}{13}-\frac34.
$$

Using common denominator $$260$$:

$$
\frac{208}{260}+\frac{240}{260}-\frac{195}{260}
=\frac{253}{260}.
$$

Therefore

$$
\boxed{\frac{253}{260}}.
$$

</div>

<div class="theorem-box">

#### Solution 12

We need count solutions to

$$
\tan(2x)=\cos\left(\frac{x}{2}\right)
$$

on $$[0,2\pi]$$.

The tangent side is undefined when

$$
2x=\frac{\pi}{2}+k\pi.
$$

Thus

$$
x=\frac{\pi}{4}+\frac{k\pi}{2}.
$$

On $$[0,2\pi]$$, these asymptotes occur at

$$
\frac{\pi}{4},\frac{3\pi}{4},\frac{5\pi}{4},\frac{7\pi}{4}.
$$

These split the interval into five pieces:

$$
\left[0,\frac{\pi}{4}\right),\quad
\left(\frac{\pi}{4},\frac{3\pi}{4}\right),\quad
\left(\frac{3\pi}{4},\frac{5\pi}{4}\right),\quad
\left(\frac{5\pi}{4},\frac{7\pi}{4}\right),\quad
\left(\frac{7\pi}{4},2\pi\right].
$$

Let

$$
F(x)=\tan(2x)-\cos\left(\frac{x}{2}\right).
$$

On each of the five pieces, $$\tan(2x)$$ increases from $$-\infty$$ to $$\infty$$, except on the first and last pieces where one endpoint is finite. Also, $$\cos\left(\frac{x}{2}\right)$$ decreases from $$1$$ to $$-1$$ on $$[0,2\pi]$$.

More formally,

$$
F'(x)=2\sec^2(2x)+\frac12\sin\left(\frac{x}{2}\right)>0
$$

wherever $$F$$ is defined on $$[0,2\pi]$$. So $$F$$ is strictly increasing on each piece.

On each piece, the function changes from negative to positive:

- On the first interval, $$F(0)=-1$$ and $$F(x)\to\infty$$ as $$x\to\frac{\pi}{4}^{-}$$.
- On each middle interval, $$F(x)\to-\infty$$ from the left asymptote and $$F(x)\to\infty$$ at the right asymptote.
- On the last interval, $$F(x)\to-\infty$$ as $$x\to\frac{7\pi}{4}^{+}$$ and $$F(2\pi)=1$$.

Therefore there is exactly one solution in each of the five pieces.

$$
\boxed{5}
$$

</div>

<div class="theorem-box">

#### Solution 13

We are given

$$
\frac{\pi}{2}<\theta<\pi,
$$

so $$\theta$$ is in Quadrant II. Therefore

$$
\frac{\theta}{2}
$$

is in Quadrant I.

Since

$$
\cos\theta=-\frac35,
$$

the half-angle formulas give

$$
\sin\left(\frac{\theta}{2}\right)
=\sqrt{\frac{1-\cos\theta}{2}}.
$$

Substitute:

$$
\sin\left(\frac{\theta}{2}\right)
=\sqrt{\frac{1-\left(-\frac35\right)}{2}}
=\sqrt{\frac{\frac85}{2}}
=\sqrt{\frac45}
=\frac{2\sqrt5}{5}.
$$

Also,

$$
\cos\left(\frac{\theta}{2}\right)
=\sqrt{\frac{1+\cos\theta}{2}}
=\sqrt{\frac{1-\frac35}{2}}
=\sqrt{\frac{\frac25}{2}}
=\sqrt{\frac15}
=\frac{\sqrt5}{5}.
$$

Thus

$$
\tan\left(\frac{\theta}{2}\right)
=\frac{\sin\left(\frac{\theta}{2}\right)}{\cos\left(\frac{\theta}{2}\right)}
=2.
$$

Therefore

$$
\boxed{\sin\left(\frac{\theta}{2}\right)=\frac{2\sqrt5}{5}},
\qquad
\boxed{\cos\left(\frac{\theta}{2}\right)=\frac{\sqrt5}{5}},
\qquad
\boxed{\tan\left(\frac{\theta}{2}\right)=2}.
$$

</div>

<div class="theorem-box">

#### Solution 14

We are given

$$
\frac{\sin x}{\sin y}=3
$$

and

$$
\frac{\cos x}{\cos y}=\frac12.
$$

So

$$
\sin x=3\sin y
$$

and

$$
\cos x=\frac12\cos y.
$$

Let

$$
S=\sin^2 y
\qquad\text{and}\qquad
C=\cos^2 y.
$$

Since $$S+C=1$$, we also know

$$
\sin^2x+\cos^2x=1.
$$

Substitute the given ratios:

$$
(3\sin y)^2+\left(\frac12\cos y\right)^2=1.
$$

Thus

$$
9S+\frac14C=1.
$$

Since $$C=1-S$$,

$$
9S+\frac14(1-S)=1.
$$

Multiply by $$4$$:

$$
36S+1-S=4.
$$

So

$$
35S=3,
$$

and

$$
S=\frac3{35}.
$$

Then

$$
C=1-\frac3{35}=\frac{32}{35}.
$$

Now,

$$
\frac{\sin 2x}{\sin 2y}
=\frac{2\sin x\cos x}{2\sin y\cos y}
=\frac{\sin x}{\sin y}\cdot\frac{\cos x}{\cos y}
=3\cdot\frac12
=\frac32.
$$

Also,

$$
\frac{\cos 2x}{\cos 2y}
=\frac{\cos^2x-\sin^2x}{\cos^2y-\sin^2y}.
$$

Compute the numerator:

$$
\cos^2x-\sin^2x
=\frac14C-9S.
$$

Using $$C=\frac{32}{35}$$ and $$S=\frac3{35}$$:

$$
\frac14C-9S
=\frac14\cdot\frac{32}{35}-9\cdot\frac3{35}
=\frac8{35}-\frac{27}{35}
=-\frac{19}{35}.
$$

The denominator is

$$
C-S=\frac{32}{35}-\frac3{35}
=\frac{29}{35}.
$$

Therefore

$$
\frac{\cos 2x}{\cos 2y}
=\frac{-\frac{19}{35}}{\frac{29}{35}}
=-\frac{19}{29}.
$$

Now add:

$$
\frac{\sin 2x}{\sin 2y}+\frac{\cos 2x}{\cos 2y}
=\frac32-\frac{19}{29}.
$$

Use denominator $$58$$:

$$
\frac32-\frac{19}{29}
=\frac{87}{58}-\frac{38}{58}
=\frac{49}{58}.
$$

Thus

$$
p=49
\qquad\text{and}\qquad
q=58.
$$

So

$$
\boxed{p+q=107}.
$$

</div>

<div class="theorem-box">

#### Solution 15

The high tide is $$11$$ feet and the low tide is $$3$$ feet. The midline is

$$
D=\frac{11+3}{2}=7.
$$

The amplitude is

$$
A=\frac{11-3}{2}=4.
$$

The time from high to the next low is half a period:

$$
8-2=6.
$$

So the period is

$$
12.
$$

Thus

$$
B=\frac{2\pi}{12}=\frac{\pi}{6}.
$$

Since the tide is at a high when $$t=2$$, use a positive cosine model:

$$
\boxed{H(t)=4\cos\left(\frac{\pi}{6}(t-2)\right)+7}.
$$

The period is

$$
\boxed{12\text{ hours}},
$$

and the midline is

$$
\boxed{H=7}.
$$

Now solve for when $$H(t)=9$$:

$$
9=4\cos\left(\frac{\pi}{6}(t-2)\right)+7.
$$

Then

$$
2=4\cos\left(\frac{\pi}{6}(t-2)\right),
$$

so

$$
\cos\left(\frac{\pi}{6}(t-2)\right)=\frac12.
$$

The first time after the high occurs when the angle is $$\frac{\pi}{3}$$:

$$
\frac{\pi}{6}(t-2)=\frac{\pi}{3}.
$$

Multiply by $$\frac6\pi$$:

$$
t-2=2.
$$

So

$$
\boxed{t=4\text{ hours}}.
$$

One full period runs from $$t=2$$ to $$t=14$$. The main key points are

$$
(2,11),\quad (5,7),\quad (8,3),\quad (11,7),\quad (14,11).
$$

The point where $$H(t)=9$$ first occurs after $$t=2$$ is

$$
\boxed{(4,9)}.
$$

**ADD IMAGE OF GRAPH**

</div>

<div class="theorem-box">

#### Solution 16

For part $$(A)$$, first note that

$$
a_1=\sqrt2=2\cdot\frac{\sqrt2}{2}=2\cos\left(\frac{\pi}{4}\right).
$$

Since

$$
\frac{\pi}{4}=\frac{\pi}{2^{2}},
$$

this matches

$$
a_1=2\cos\left(\frac{\pi}{2^{1+1}}\right).
$$

Now assume

$$
a_n=2\cos\left(\frac{\pi}{2^{n+1}}\right).
$$

Then

$$
a_{n+1}
=\sqrt{2+a_n}
=\sqrt{2+2\cos\left(\frac{\pi}{2^{n+1}}\right)}.
$$

Use the half-angle identity

$$
\cos\left(\frac{u}{2}\right)=\sqrt{\frac{1+\cos u}{2}}
$$

for angles in Quadrant I. Rearranging gives

$$
2\cos\left(\frac{u}{2}\right)=\sqrt{2+2\cos u}.
$$

With

$$
u=\frac{\pi}{2^{n+1}},
$$

we get

$$
a_{n+1}
=2\cos\left(\frac{\pi}{2^{n+2}}\right).
$$

Thus

$$
\boxed{a_n=2\cos\left(\frac{\pi}{2^{n+1}}\right)}.
$$

For part $$(B)$$, part $$(A)$$ gives

$$
\frac{a_n}{2}=\cos\left(\frac{\pi}{2^{n+1}}\right).
$$

Consider the finite product

$$
P_N=\prod_{n=1}^{N}\frac{a_n}{2}
=\prod_{n=1}^{N}\cos\left(\frac{\pi}{2^{n+1}}\right).
$$

Use the repeated double-angle identity

$$
\sin(2x)=2\sin x\cos x.
$$

Starting with $$x=\frac{\pi}{2^{N+1}}$$,

$$
\sin\left(\frac{\pi}{2}\right)
=2^N\sin\left(\frac{\pi}{2^{N+1}}\right)
\prod_{n=1}^{N}\cos\left(\frac{\pi}{2^{n+1}}\right).
$$

Since $$\sin\left(\frac{\pi}{2}\right)=1$$,

$$
1=2^N\sin\left(\frac{\pi}{2^{N+1}}\right)P_N.
$$

Therefore

$$
P_N=\frac{1}{2^N\sin\left(\frac{\pi}{2^{N+1}}\right)}.
$$

For part $$(C)$$, let

$$
u_N=\frac{\pi}{2^{N+1}}.
$$

Then

$$
2^N=\frac{\pi}{2u_N}.
$$

So

$$
P_N=\frac{1}{2^N\sin u_N}
=\frac{1}{\frac{\pi}{2u_N}\sin u_N}
=\frac{2}{\pi}\cdot\frac{u_N}{\sin u_N}.
$$

As $$N\to\infty$$, $$u_N\to0$$, and

$$
\frac{u_N}{\sin u_N}\to1.
$$

Thus

$$
\lim_{N\to\infty}P_N=\frac2\pi.
$$

Since

$$
\frac{a_1}{2}=\frac{\sqrt2}{2},
$$

$$
\frac{a_2}{2}=\frac{\sqrt{2+\sqrt2}}{2},
$$

and so on, we get Viète's product:

$$
\boxed{
\frac{2}{\pi}
=\frac{\sqrt2}{2}\cdot
\frac{\sqrt{2+\sqrt2}}{2}\cdot
\frac{\sqrt{2+\sqrt{2+\sqrt2}}}{2}\cdots
}.
$$

</div>

## Unit 10: Additional Topics in Trigonometry (Triangle Laws, Parametric, Polar, and Vectors)

[Full notes →](/notes/ap/precalc/additionaltrig/)

### Practice

1. Solve the triangle with $$A=60^\circ$$, $$a=9$$ cm, and $$b=10$$ cm. Determine whether there are zero, one, or two possible triangles. For each valid triangle, find the remaining side and angles.
2. A plane is flying above the ocean. The angle of depression to a submarine is $$24^\circ$$, and the angle of depression to a ship is $$17^\circ$$. The distance from the plane to the ship is $$5120$$ feet. Assuming the submarine and ship are in the same vertical plane as the airplane, find the distance between the submarine and the ship.
3. Two towns $$A$$ and $$B$$ are $$1.4$$ miles apart, with $$B$$ due east of $$A$$. A signal is detected on a bearing of $$S22^\circ E$$ from $$A$$ and $$S43^\circ W$$ from $$B$$. Draw a labeled diagram and find the distance from each town to the signal.
4. Prove that for any triangle with side lengths $$a,b,c$$ and semiperimeter $$s=\frac12(a+b+c)$$, $$\sin^2\left(\frac C2\right)=\frac{(s-a)(s-b)}{ab}.$$
5. Let $$\mathbf u=\langle -2,1\rangle$$ and $$\mathbf v=\langle -5,3\rangle$$.

    $$(A)$$ Find $$2\mathbf u-3\mathbf v$$.

    $$(B)$$ Find the angle between $$\mathbf u$$ and $$\mathbf v$$ to the nearest degree.

    $$(C)$$ Find a unit vector in the direction of $$\mathbf u+\mathbf v$$.

6. A plane is heading $$40^\circ$$ east of north at $$120$$ mph. A wind blows directly from the east at $$10$$ mph. Find the ground-speed vector, the ground speed, and the drift angle from the plane's intended heading.
7. A force of $$18$$ Newtons acts in the direction $$235^\circ$$ from the positive $$x$$-axis. Resolve the force into horizontal and vertical components. Then find the magnitude and direction of the vector obtained by adding this force to $$\langle 12,-5\rangle$$.
8. A particle moves according to $$x(t)=2\cos t-\sin(2t),\qquad y(t)=6\sin t,$$ for $$0\le t\le 2\pi$$.

    $$(A)$$ Find all exact $$x$$-intercepts.

    $$(B)$$ Find the particle's position when $$t=\frac{\pi}{2}$$ and when $$t=\frac{7\pi}{6}$$.

    $$(C)$$ Write a formula for the particle's distance from the origin as a function of $$t$$.

9. Eliminate the parameter and describe the curve, including any domain restrictions and orientation: $$x=e^t$$, $$y=e^{2t}-3$$, $$-\ln2\le t\le \ln3.$$
10. The curve $$x=4\cos t$$, $$y=-2\sin t$$ is traced for $$0\le t\le 2\pi$$. Eliminate the parameter, state where the curve starts, and determine the direction (clockwise or counterclockwise) the curve is traced in.
11. Classify each polar curve as a cardioid, limacon, rose curve, lemniscate, circle, line, or spiral. For rose curves, state the number of petals. Graph each of the curves.

    $$(A)$$ Graph $$r=3-3\sin\theta$$

    $$(B)$$ Graph $$r=2+5\cos\theta$$

    $$(C)$$ Graph $$r=4\sin(3\theta)$$

    $$(D)$$ Graph $$r^2=25\sin(2\theta)$$

12. Graph both $$r=2+2\cos\theta$$ and $$r=2-2\cos\theta$$. Then, find the number of intersection points.
13. Suppose you have an octagon centered at the origin with one vertex at $$P_1=2\sqrt2$$.
    $$(A)$$ Find a vertex in the third quadrant and a vertex in the fourth quadrant.
    $$(B)$$ Without finding all of the vertices calculate $$P_1+P_2+\cdots+P_8$$
    $$(C)$$ Without finding all of the vertices calculate $$P_1P_2\cdots P_8$$.
14. Let $$z_1=-2+2\sqrt3i,\qquad z_2=1-i.$$

    $$(A)$$ Write both numbers in polar form.

    $$(B)$$ Write both numbers in exponential form.

    $$(C)$$ Compute $$z_1z_2$$ in polar form and rectangular form.

15. Use De Moivre's Theorem to find all fourth roots of $$16\left(\cos\frac{2\pi}{3}+i\sin\frac{2\pi}{3}\right).$$
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

---

### Solutions

<div class="theorem-box">

#### Solution 1

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

</div>

<div class="theorem-box">

#### Solution 2

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

</div>

<div class="theorem-box">

#### Solution 3

Place town $$A$$ at $$(0,0)$$ and town $$B$$ at $$(1.4,0)$$. The bearing $$S22^\circ E$$ from $$A$$ points down and right, while $$S43^\circ W$$ from $$B$$ points down and left.

Solving the two bearing lines gives the signal at approximately

$$
(0.423,-1.047).
$$

Therefore,

$$
AS\approx 1.13\text{ miles},\qquad BS\approx 1.43\text{ miles}.
$$

</div>

<div class="theorem-box">

#### Solution 4

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

</div>

<div class="theorem-box">

#### Solution 5

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

</div>

<div class="theorem-box">

#### Solution 6

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

</div>

<div class="theorem-box">

#### Solution 7

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

</div>

<div class="theorem-box">

#### Solution 8

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

</div>

<div class="theorem-box">

#### Solution 9

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

</div>

<div class="theorem-box">

#### Solution 10

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

</div>

<div class="theorem-box">

#### Solution 11

This is an Archimedean spiral:

$$
r=\frac{2\theta}{\pi}.
$$

As $$\theta$$ increases from $$-4\pi$$ to $$4\pi$$, $$r$$ increases from $$-8$$ to $$8$$. Negative $$r$$ values are plotted in the opposite direction from the angle $$\theta$$.

**ADD IMAGE HERE**

</div>

<div class="theorem-box">

#### Solution 12

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

</div>

<div class="theorem-box">

#### Solution 13

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

</div>

<div class="theorem-box">

#### Solution 14

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

</div>

<div class="theorem-box">

#### Solution 15

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

</div>

<div class="theorem-box">

#### Solution 16

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

</div>

## Unit 11: Matrices and Systems

[Full notes →](/notes/ap/precalc/matrices/)

### Practice

1. Solve the system using Gaussian elimination:

    $$
    \begin{cases}
    2x-y+3z=9\\
    x+2y-z=2\\
    3x+y+z=8
    \end{cases}
    $$

2. Solve the system and classify it as having one solution, no solution, or infinitely many solutions:

    $$
    \begin{cases}
    x+2y-z=4\\
    2x+4y-2z=8\\
    3x-y+z=1
    \end{cases}
    $$

3. Find all values of $$k$$ for which the system has no unique solution:

    $$
    \begin{cases}
    kx+2y=6\\
    8x+ky=12
    \end{cases}
    $$

    For each such value of $$k$$, determine whether the system has no solution or infinitely many solutions.

4. Let

    $$
    A=\begin{bmatrix}2&-1\\3&4\end{bmatrix},
    \qquad
    B=\begin{bmatrix}0&5\\-2&1\end{bmatrix}.
    $$

    Compute $$2A-3B$$, $$AB$$, and $$BA$$.

5. Let

    $$
    A=\begin{bmatrix}1&2\\0&3\end{bmatrix},
    \qquad
    B=\begin{bmatrix}a&b\\c&d\end{bmatrix}.
    $$

    Find all matrices $$B$$ such that $$AB=BA$$.

6. Find $$A^{-1}$$, if it exists, and use it to solve $$AX=B$$:

    $$
    A=\begin{bmatrix}4&7\\2&5\end{bmatrix},
    \qquad
    B=\begin{bmatrix}1\\-3\end{bmatrix}.
    $$

7. Find the inverse of

    $$
    A=\begin{bmatrix}
    1&2&0\\
    0&1&3\\
    0&0&2
    \end{bmatrix}.
    $$

8. Find all values of $$t$$ for which the matrix is singular:

    $$
    A=\begin{bmatrix}
    t&1&0\\
    2&t&1\\
    0&3&t
    \end{bmatrix}.
    $$

9. Use Cramer's Rule to solve:

    $$
    \begin{cases}
    3x-2y=11\\
    5x+4y=7
    \end{cases}
    $$

10. A quadratic function $$f(x)=ax^2+bx+c$$ passes through $$(-1,6)$$, $$(2,3)$$, and $$(4,15)$$. Use a system of equations to find $$a,b,c$$.

11. Solve the nonlinear system:

    $$
    \begin{cases}
    x^2+y^2=25\\
    x-y=1
    \end{cases}
    $$

12. Solve the nonlinear system:

    $$
    \begin{cases}
    xy=12\\
    x+y=8
    \end{cases}
    $$

13. Find the vertices and area of the region satisfying

    $$
    \begin{cases}
    x\ge 0\\
    y\ge 0\\
    x+2y\le 8\\
    3x+y\le 9
    \end{cases}
    $$

14. A matrix transformation sends the point $$(x,y)$$ to

    $$
    \begin{bmatrix}
    x'\\
    y'
    \end{bmatrix}
    =
    \begin{bmatrix}
    2&-1\\
    1&1
    \end{bmatrix}
    \begin{bmatrix}
    x\\
    y
    \end{bmatrix}.
    $$

    Find the original point $$(x,y)$$ that maps to $$(7,5)$$. Then find the image of the line $$y=2x+1$$ under this transformation.

15. A small economy has two sectors: food and tools. Producing one unit of food requires $$0.20$$ units of food and $$0.10$$ units of tools. Producing one unit of tools requires $$0.30$$ units of food and $$0.20$$ units of tools. External demand is $$110$$ units of food and $$80$$ units of tools. Let $$F$$ and $$T$$ be the total production levels. Set up and solve the matrix equation for $$F$$ and $$T$$.

16. **Extension (Cayley-Hamilton and Matrix Powers).** Let

    $$
    A=\begin{bmatrix}a&b\\c&d\end{bmatrix},
    \qquad
    \operatorname{tr}(A)=a+d,
    \qquad
    \det(A)=ad-bc.
    $$

    $$(A)$$ Prove the Cayley-Hamilton identity

    $$
    A^2-\operatorname{tr}(A)A+\det(A)I=0.
    $$

    $$(B)$$ Use part $$(A)$$ to derive the inverse formula for $$A$$ when $$\det(A)\ne 0$$.

    $$(C)$$ Explain why every power $$A^n$$ for $$n\ge 2$$ can be rewritten in the form

    $$
    A^n=\alpha_n A+\beta_n I
    $$

    for some constants $$\alpha_n$$ and $$\beta_n$$.

    $$(D)$$ Let

    $$
    M=\begin{bmatrix}2&1\\1&1\end{bmatrix}.
    $$

    Use part $$(C)$$ to compute $$M^6$$ without multiplying six matrices directly.

---

### Solutions

<div class="theorem-box">

#### Solution 1

Start with the augmented matrix:

$$
\left[
\begin{array}{ccc|c}
2&-1&3&9\\
1&2&-1&2\\
3&1&1&8
\end{array}
\right].
$$

Swap rows $$1$$ and $$2$$:

$$
\left[
\begin{array}{ccc|c}
1&2&-1&2\\
2&-1&3&9\\
3&1&1&8
\end{array}
\right].
$$

Eliminate below the first pivot:

$$
R_2\leftarrow R_2-2R_1,\qquad R_3\leftarrow R_3-3R_1.
$$

Then

$$
\left[
\begin{array}{ccc|c}
1&2&-1&2\\
0&-5&5&5\\
0&-5&4&2
\end{array}
\right].
$$

Subtract row $$2$$ from row $$3$$:

$$
\left[
\begin{array}{ccc|c}
1&2&-1&2\\
0&-5&5&5\\
0&0&-1&-3
\end{array}
\right].
$$

The last row gives

$$
-z=-3,
$$

so

$$
z=3.
$$

From row $$2$$,

$$
-5y+5z=5.
$$

Thus

$$
-5y+15=5,
$$

so

$$
y=2.
$$

From row $$1$$,

$$
x+2y-z=2.
$$

Therefore

$$
x+4-3=2,
$$

so $$x=1$$. The solution is

$$
\boxed{(1,2,3)}.
$$

</div>

<div class="theorem-box">

#### Solution 2

The second equation is exactly $$2$$ times the first equation, so it does not add new information. Use the first and third equations:

$$
\begin{cases}
x+2y-z=4\\
3x-y+z=1
\end{cases}
$$

Let $$z=t$$. Then

$$
x+2y=4+t
$$

and

$$
3x-y=1-t.
$$

From the first equation,

$$
x=4+t-2y.
$$

Substitute:

$$
3(4+t-2y)-y=1-t.
$$

Then

$$
12+3t-7y=1-t,
$$

so

$$
7y=11+4t,
\qquad
y=\frac{11+4t}{7}.
$$

Now

$$
x=4+t-2\left(\frac{11+4t}{7}\right)=\frac{6-t}{7}.
$$

Thus the system has infinitely many solutions:

$$
\boxed{(x,y,z)=\left(\frac{6-t}{7},\frac{11+4t}{7},t\right),\quad t\in\mathbb R}.
$$

</div>

<div class="theorem-box">

#### Solution 3

The coefficient matrix is

$$
\begin{bmatrix}
k&2\\
8&k
\end{bmatrix}.
$$

The system has no unique solution when the determinant is zero:

$$
k^2-16=0.
$$

Thus

$$
k=\pm4.
$$

If $$k=4$$, the system is

$$
\begin{cases}
4x+2y=6\\
8x+4y=12
\end{cases}
$$

and the second equation is $$2$$ times the first. So there are infinitely many solutions.

If $$k=-4$$, the system is

$$
\begin{cases}
-4x+2y=6\\
8x-4y=12
\end{cases}
$$

Multiplying the first equation by $$-2$$ gives

$$
8x-4y=-12,
$$

which contradicts $$8x-4y=12$$. So there is no solution.

Therefore:

$$
\boxed{k=4\text{ gives infinitely many solutions, and }k=-4\text{ gives no solution}.}
$$

</div>

<div class="theorem-box">

#### Solution 4

First,

$$
2A=
\begin{bmatrix}
4&-2\\
6&8
\end{bmatrix},
\qquad
3B=
\begin{bmatrix}
0&15\\
-6&3
\end{bmatrix}.
$$

So

$$
2A-3B=
\begin{bmatrix}
4&-17\\
12&5
\end{bmatrix}.
$$

Next,

$$
AB=
\begin{bmatrix}
2&-1\\
3&4
\end{bmatrix}
\begin{bmatrix}
0&5\\
-2&1
\end{bmatrix}
=
\begin{bmatrix}
2&9\\
-8&19
\end{bmatrix}.
$$

Also,

$$
BA=
\begin{bmatrix}
0&5\\
-2&1
\end{bmatrix}
\begin{bmatrix}
2&-1\\
3&4
\end{bmatrix}
=
\begin{bmatrix}
15&20\\
-1&6
\end{bmatrix}.
$$

Thus

$$
\boxed{
2A-3B=
\begin{bmatrix}
4&-17\\
12&5
\end{bmatrix},
\quad
AB=
\begin{bmatrix}
2&9\\
-8&19
\end{bmatrix},
\quad
BA=
\begin{bmatrix}
15&20\\
-1&6
\end{bmatrix}
}.
$$

</div>

<div class="theorem-box">

#### Solution 5

Compute $$AB$$:

$$
AB=
\begin{bmatrix}
1&2\\
0&3
\end{bmatrix}
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
=
\begin{bmatrix}
a+2c&b+2d\\
3c&3d
\end{bmatrix}.
$$

Compute $$BA$$:

$$
BA=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
\begin{bmatrix}
1&2\\
0&3
\end{bmatrix}
=
\begin{bmatrix}
a&2a+3b\\
c&2c+3d
\end{bmatrix}.
$$

Set corresponding entries equal:

$$
a+2c=a,\qquad b+2d=2a+3b,\qquad 3c=c,\qquad 3d=2c+3d.
$$

The first and third equations give $$c=0$$. Then the fourth is automatically true. The second equation gives

$$
2d=2a+2b,
$$

so

$$
d=a+b.
$$

Therefore

$$
\boxed{
B=
\begin{bmatrix}
a&b\\
0&a+b
\end{bmatrix}
\text{ for any real numbers }a,b.
}
$$

</div>

<div class="theorem-box">

#### Solution 6

The determinant is

$$
4(5)-7(2)=6.
$$

Since the determinant is nonzero, the inverse exists:

$$
A^{-1}
=
\frac16
\begin{bmatrix}
5&-7\\
-2&4
\end{bmatrix}.
$$

Then

$$
X=A^{-1}B
=
\frac16
\begin{bmatrix}
5&-7\\
-2&4
\end{bmatrix}
\begin{bmatrix}
1\\
-3
\end{bmatrix}.
$$

Compute:

$$
X=
\frac16
\begin{bmatrix}
5+21\\
-2-12
\end{bmatrix}
=
\frac16
\begin{bmatrix}
26\\
-14
\end{bmatrix}
=
\begin{bmatrix}
13/3\\
-7/3
\end{bmatrix}.
$$

So

$$
\boxed{A^{-1}=\frac16
\begin{bmatrix}
5&-7\\
-2&4
\end{bmatrix}
\quad\text{and}\quad
X=
\begin{bmatrix}
13/3\\
-7/3
\end{bmatrix}.}
$$

</div>

<div class="theorem-box">

#### Solution 7

Let

$$
A^{-1}=
\begin{bmatrix}
p&q&r\\
s&t&u\\
v&w&n
\end{bmatrix}.
$$

Since $$A$$ is upper triangular, solve by row-reducing $$[A\mid I]$$:

$$
\left[
\begin{array}{ccc|ccc}
1&2&0&1&0&0\\
0&1&3&0&1&0\\
0&0&2&0&0&1
\end{array}
\right].
$$

Make the third pivot $$1$$:

$$
R_3\leftarrow \frac12R_3
$$

so

$$
\left[
\begin{array}{ccc|ccc}
1&2&0&1&0&0\\
0&1&3&0&1&0\\
0&0&1&0&0&1/2
\end{array}
\right].
$$

Eliminate above the third pivot:

$$
R_2\leftarrow R_2-3R_3.
$$

Then

$$
\left[
\begin{array}{ccc|ccc}
1&2&0&1&0&0\\
0&1&0&0&1&-3/2\\
0&0&1&0&0&1/2
\end{array}
\right].
$$

Eliminate above the second pivot:

$$
R_1\leftarrow R_1-2R_2.
$$

Then

$$
\left[
\begin{array}{ccc|ccc}
1&0&0&1&-2&3\\
0&1&0&0&1&-3/2\\
0&0&1&0&0&1/2
\end{array}
\right].
$$

Thus

$$
\boxed{
A^{-1}=
\begin{bmatrix}
1&-2&3\\
0&1&-3/2\\
0&0&1/2
\end{bmatrix}
}.
$$

</div>

<div class="theorem-box">

#### Solution 8

Compute the determinant:

$$
\det(A)
=
\begin{vmatrix}
t&1&0\\
2&t&1\\
0&3&t
\end{vmatrix}.
$$

Expand along the first row:

$$
\det(A)
=
t
\begin{vmatrix}
t&1\\
3&t
\end{vmatrix}
-
1
\begin{vmatrix}
2&1\\
0&t
\end{vmatrix}.
$$

So

$$
\det(A)=t(t^2-3)-2t=t^3-5t=t(t^2-5).
$$

The matrix is singular when $$\det(A)=0$$:

$$
t(t^2-5)=0.
$$

Therefore

$$
\boxed{t=0,\ \sqrt5,\ -\sqrt5}.
$$

</div>

<div class="theorem-box">

#### Solution 9

Compute

$$
D=
\begin{vmatrix}
3&-2\\
5&4
\end{vmatrix}
=3(4)-(-2)(5)=22.
$$

Then

$$
D_x=
\begin{vmatrix}
11&-2\\
7&4
\end{vmatrix}
=11(4)-(-2)(7)=58,
$$

and

$$
D_y=
\begin{vmatrix}
3&11\\
5&7
\end{vmatrix}
=3(7)-11(5)=-34.
$$

Thus

$$
x=\frac{D_x}{D}=\frac{58}{22}=\frac{29}{11},
\qquad
y=\frac{D_y}{D}=\frac{-34}{22}=-\frac{17}{11}.
$$

So

$$
\boxed{\left(\frac{29}{11},-\frac{17}{11}\right)}.
$$

</div>

<div class="theorem-box">

#### Solution 10

Use the three points in $$f(x)=ax^2+bx+c$$.

For $$(-1,6)$$:

$$
a-b+c=6.
$$

For $$(2,3)$$:

$$
4a+2b+c=3.
$$

For $$(4,15)$$:

$$
16a+4b+c=15.
$$

Subtract the first equation from the second:

$$
3a+3b=-3,
$$

so

$$
a+b=-1.
$$

Subtract the second equation from the third:

$$
12a+2b=12,
$$

so

$$
6a+b=6.
$$

Subtract $$a+b=-1$$ from $$6a+b=6$$:

$$
5a=7,
$$

so

$$
a=\frac75.
$$

Then

$$
b=-1-\frac75=-\frac{12}{5}.
$$

Use $$a-b+c=6$$:

$$
\frac75-\left(-\frac{12}{5}\right)+c=6,
$$

so

$$
\frac{19}{5}+c=6,
\qquad
c=\frac{11}{5}.
$$

Therefore

$$
\boxed{f(x)=\frac75x^2-\frac{12}{5}x+\frac{11}{5}}.
$$

</div>

<div class="theorem-box">

#### Solution 11

From $$x-y=1$$,

$$
x=y+1.
$$

Substitute into $$x^2+y^2=25$$:

$$
(y+1)^2+y^2=25.
$$

Then

$$
2y^2+2y+1=25,
$$

so

$$
2y^2+2y-24=0.
$$

Divide by $$2$$:

$$
y^2+y-12=0.
$$

Factor:

$$
(y+4)(y-3)=0.
$$

Thus $$y=-4$$ or $$y=3$$. Since $$x=y+1$$, the solutions are

$$
\boxed{(-3,-4)\text{ and }(4,3)}.
$$

</div>

<div class="theorem-box">

#### Solution 12

Since

$$
x+y=8
$$

and

$$
xy=12,
$$

the numbers $$x$$ and $$y$$ are roots of the quadratic

$$
t^2-8t+12=0.
$$

Factor:

$$
(t-2)(t-6)=0.
$$

So the two numbers are $$2$$ and $$6$$. Therefore

$$
\boxed{(x,y)=(2,6)\text{ or }(6,2)}.
$$

</div>

<div class="theorem-box">

#### Solution 13

The region is in the first quadrant and below both lines:

$$
x+2y=8
$$

and

$$
3x+y=9.
$$

The intercepts on the axes are:

- On the $$x$$-axis: $$3x+y\le 9$$ gives $$x\le 3$$, so the vertex is $$(3,0)$$.
- On the $$y$$-axis: $$x+2y\le 8$$ gives $$y\le 4$$, so the vertex is $$(0,4)$$.

Find the intersection of the two boundary lines:

$$
\begin{cases}
x+2y=8\\
3x+y=9
\end{cases}
$$

From the first equation, $$x=8-2y$$. Substitute:

$$
3(8-2y)+y=9.
$$

Then

$$
24-5y=9,
$$

so

$$
y=3.
$$

Then

$$
x=8-2(3)=2.
$$

The vertices are

$$
(0,0),\quad (3,0),\quad (2,3),\quad (0,4).
$$

Use the shoelace formula:

$$
\text{Area}
=\frac12\left|(0\cdot0+3\cdot3+2\cdot4+0\cdot0)-(0\cdot3+0\cdot2+3\cdot0+4\cdot0)\right|.
$$

Thus

$$
\text{Area}=\frac12(9+8)=\frac{17}{2}.
$$

So

$$
\boxed{\text{vertices }(0,0),(3,0),(2,3),(0,4)\text{ and area }\frac{17}{2}}.
$$

</div>

<div class="theorem-box">

#### Solution 14

We need

$$
\begin{bmatrix}
2&-1\\
1&1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
7\\
5
\end{bmatrix}.
$$

This gives

$$
\begin{cases}
2x-y=7\\
x+y=5
\end{cases}
$$

Add the equations:

$$
3x=12,
$$

so $$x=4$$. Then $$y=1$$. The original point is

$$
\boxed{(4,1)}.
$$

Now let points on the original line be written as

$$
(x,y)=(x,2x+1).
$$

The transformed coordinates satisfy

$$
x'=2x-y=2x-(2x+1)=-1,
$$

and

$$
y'=x+y=x+(2x+1)=3x+1.
$$

As $$x$$ varies, $$y'$$ varies freely, but $$x'$$ is always $$-1$$. Therefore the image of the line is

$$
\boxed{x'=-1}.
$$

</div>

<div class="theorem-box">

#### Solution 15

The total production must satisfy internal demand plus external demand.

Food production:

$$
F=0.20F+0.30T+110.
$$

Tools production:

$$
T=0.10F+0.20T+80.
$$

Move internal demand terms to the left:

$$
0.80F-0.30T=110,
$$

and

$$
-0.10F+0.80T=80.
$$

In matrix form:

$$
\begin{bmatrix}
0.80&-0.30\\
-0.10&0.80
\end{bmatrix}
\begin{bmatrix}
F\\
T
\end{bmatrix}
=
\begin{bmatrix}
110\\
80
\end{bmatrix}.
$$

Clear decimals by multiplying both equations by $$10$$:

$$
\begin{cases}
8F-3T=1100\\
-F+8T=800
\end{cases}
$$

From the second equation,

$$
F=8T-800.
$$

Substitute into the first:

$$
8(8T-800)-3T=1100.
$$

Then

$$
64T-6400-3T=1100,
$$

so

$$
61T=7500.
$$

Thus

$$
T=\frac{7500}{61}.
$$

Then

$$
F=8\left(\frac{7500}{61}\right)-800
=\frac{60000}{61}-\frac{48800}{61}
=\frac{11200}{61}.
$$

So the required production levels are

$$
\boxed{F=\frac{11200}{61}\approx 183.61,\qquad T=\frac{7500}{61}\approx 122.95}.
$$

</div>

<div class="theorem-box">

#### Solution 16

Part $$(A)$$. Compute $$A^2$$:

$$
A^2=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
=
\begin{bmatrix}
a^2+bc&ab+bd\\
ac+cd&bc+d^2
\end{bmatrix}.
$$

Also,

$$
\operatorname{tr}(A)A
=(a+d)
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
=
\begin{bmatrix}
a^2+ad&ab+bd\\
ac+cd&ad+d^2
\end{bmatrix}.
$$

Finally,

$$
\det(A)I
=(ad-bc)
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
=
\begin{bmatrix}
ad-bc&0\\
0&ad-bc
\end{bmatrix}.
$$

Now compute

$$
A^2-\operatorname{tr}(A)A+\det(A)I.
$$

The top-left entry is

$$
(a^2+bc)-(a^2+ad)+(ad-bc)=0.
$$

The top-right entry is

$$
(ab+bd)-(ab+bd)+0=0.
$$

The bottom-left entry is

$$
(ac+cd)-(ac+cd)+0=0.
$$

The bottom-right entry is

$$
(bc+d^2)-(ad+d^2)+(ad-bc)=0.
$$

Thus

$$
\boxed{A^2-\operatorname{tr}(A)A+\det(A)I=0}.
$$

Part $$(B)$$. Now suppose $$\det(A)\ne 0$$. Rearrange the identity:

$$
A^2-\operatorname{tr}(A)A=-\det(A)I.
$$

Factor out $$A$$ on the left:

$$
A(A-\operatorname{tr}(A)I)=-\det(A)I.
$$

Multiply both sides by $$-\frac{1}{\det(A)}$$:

$$
A\left(\frac{\operatorname{tr}(A)I-A}{\det(A)}\right)=I.
$$

So

$$
A^{-1}=\frac{\operatorname{tr}(A)I-A}{\det(A)}.
$$

Since

$$
\operatorname{tr}(A)I-A
=
\begin{bmatrix}
a+d&0\\
0&a+d
\end{bmatrix}
-
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
=
\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix},
$$

we get the usual inverse formula:

$$
\boxed{
A^{-1}
=
\frac{1}{ad-bc}
\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix}
}.
$$

Part $$(C)$$. From part $$(A)$$,

$$
A^2=\operatorname{tr}(A)A-\det(A)I.
$$

This already writes $$A^2$$ as a linear combination of $$A$$ and $$I$$.

Now multiply both sides by $$A$$:

$$
A^3=\operatorname{tr}(A)A^2-\det(A)A.
$$

Since $$A^2$$ is already a combination of $$A$$ and $$I$$, this means $$A^3$$ is also a combination of $$A$$ and $$I$$.

More generally, multiply the Cayley-Hamilton identity by $$A^{n-2}$$:

$$
A^n-\operatorname{tr}(A)A^{n-1}+\det(A)A^{n-2}=0.
$$

So

$$
A^n=\operatorname{tr}(A)A^{n-1}-\det(A)A^{n-2}.
$$

If $$A^{n-1}$$ and $$A^{n-2}$$ are both combinations of $$A$$ and $$I$$, then $$A^n$$ is too. Therefore every power $$A^n$$ with $$n\ge 2$$ can be written as

$$
\boxed{A^n=\alpha_n A+\beta_n I}.
$$

Part $$(D)$$. For

$$
M=\begin{bmatrix}2&1\\1&1\end{bmatrix},
$$

the trace is

$$
\operatorname{tr}(M)=3,
$$

and the determinant is

$$
\det(M)=2(1)-1(1)=1.
$$

So Cayley-Hamilton gives

$$
M^2-3M+I=0,
$$

or

$$
M^2=3M-I.
$$

Use the recurrence

$$
M^n=3M^{n-1}-M^{n-2}.
$$

Start:

$$
M^0=I,\qquad M^1=M.
$$

Then

$$
M^2=3M-I.
$$

Next,

$$
M^3=3M^2-M=3(3M-I)-M=8M-3I.
$$

Then

$$
M^4=3M^3-M^2=3(8M-3I)-(3M-I)=21M-8I.
$$

Next,

$$
M^5=3M^4-M^3=3(21M-8I)-(8M-3I)=55M-21I.
$$

Finally,

$$
M^6=3M^5-M^4=3(55M-21I)-(21M-8I)=144M-55I.
$$

Now substitute the matrix $$M$$:

$$
M^6=
144
\begin{bmatrix}
2&1\\
1&1
\end{bmatrix}
-55
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}.
$$

Thus

$$
M^6=
\begin{bmatrix}
288&144\\
144&144
\end{bmatrix}
-
\begin{bmatrix}
55&0\\
0&55
\end{bmatrix}
=
\boxed{
\begin{bmatrix}
233&144\\
144&89
\end{bmatrix}
}.
$$

</div>

## Unit 12: Conic Sections

[Full notes →](/notes/ap/precalc/conicsections/)

### Practice

1. Complete the square for $$4x^{2}+9y^{2}-24x+36y+36=0$$. Write the equation in standard form and give the center, vertices, co-vertices, foci, eccentricity, and major/minor axis lengths. Graph the conic.
2. Find the equation of the parabola whose focus is $$(5,-2)$$ and whose directrix is $$x=-1$$. Give the vertex, value of $$p$$, axis of symmetry, and latus rectum endpoints.
3. Find all lines with slope $$-2$$ that are tangent to the parabola $$(x-1)^{2}=8(y+3)$$.
4. An ellipse has foci $$(1,4)$$ and $$(1,-2)$$ and passes through $$(5,1)$$. Find its standard-form equation and its eccentricity.
5. The ellipse $$\dfrac{(x+2)^{2}}{36}+\dfrac{(y-1)^{2}}{20}=1$$ has foci $$F_1$$ and $$F_2$$. If $$P$$ is the point on the ellipse with $$x=1$$ and $$y>1$$, find $$PF_1$$ and $$PF_2$$ separately.
6. Find all real numbers $$m$$ such that the line $$y=mx+3$$ is tangent to the ellipse $$\dfrac{x^{2}}{9}+\dfrac{y^{2}}{4}=1$$.
7. Complete the square for $$9y^{2}-4x^{2}-54y-16x+29=0$$. Write the equation in standard form and give the center, vertices, foci, eccentricity, and asymptotes. Graph the conic.
8. A hyperbola has center $$(2,-1)$$, asymptotes $$y+1=\pm\dfrac{3}{2}(x-2)$$, and one focus at $$(2+\sqrt{52},-1)$$. Assuming it opens left/right, find its standard-form equation.
9. Find all intersection points in $$\mathbb{R}^{2}$$ of the ellipse $$\dfrac{x^{2}}{16}+\dfrac{y^{2}}{9}=1$$ and the hyperbola $$\dfrac{x^{2}}{4}-\dfrac{y^{2}}{9}=1$$.
10. With focus at $$(0,0)$$, directrix $$x=-6$$, and eccentricity $$e=\dfrac{2}{3}$$, derive the Cartesian equation of the conic. Write it in standard form and identify the conic type.
11. Convert $$r=\dfrac{10}{2-\cos\theta}$$ to a Cartesian equation. Identify the conic type, eccentricity, center, vertices, and foci.
12. For $$r=\dfrac{12}{3+4\cos\theta}$$, identify the conic type and eccentricity, then find the values of $$\theta$$ where the denominator vanishes. Explain what those angles represent geometrically.
13. A circle is tangent to both axes in Quadrant I and its center lies on the ellipse $$\dfrac{x^{2}}{25}+\dfrac{y^{2}}{9}=1$$. Find the circle's radius.
14. Show that the conic $$Ax^{2}+Cy^{2}+Dx+Ey+F=0$$ has center $$(h,k)$$ when $$A\ne 0$$ and $$C\ne 0$$. Derive formulas for $$h$$ and $$k$$ in terms of $$A,C,D,E$$, then find the center of $$5x^{2}-3y^{2}+20x+18y-11=0$$.
15. For the parabola $$y^{2}=4px$$ with $$p>0$$, let a line through the focus $$(p,0)$$ have slope $$m\ne 0$$ and meet the parabola at two distinct points $$A$$ and $$B$$. Prove that the product of the $$y$$-coordinates of $$A$$ and $$B$$ equals $$-4p^{2}$$.
16. (Bonus, 2026 USAPhO)

You are studying the motion of charged particles constrained to the $$xy$$-plane. Particle $$\alpha$$, with charge $$+1\ \mathrm{C}$$, is fixed at the origin.

For motion under an inverse-square central force, trajectories are conic sections with the fixed particle at a focus. In polar coordinates:

- For an attractive interaction (ellipse),

$$
r=\frac{r_0}{1+e\cos\phi},\qquad e<1.
$$

- For a repulsive interaction (hyperbola),

$$
r=\frac{r_0}{e\cos\phi-1},\qquad e>1.
$$

You have a camera that takes three snapshots of a moving particle at equal time intervals.

   $$(A)$$ A particle $$\beta$$, with charge $$-1\ \mathrm{C}$$, moves under the electrostatic force of particle $$\alpha$$. In three consecutive snapshots, its positions are

   $$
   (0,-5\ \mathrm{m}),\qquad (3\ \mathrm{m},0),\qquad (0,5\ \mathrm{m}).
   $$

   Assuming the motion is governed only by the Coulomb interaction with $$\alpha$$, determine the maximum distance that particle $$\beta$$ reaches from the origin.

   $$(B)$$ Now particle $$\beta$$ is replaced by particle $$\gamma$$, which has charge $$+2\ \mathrm{C}$$ and is free to move in the plane. In three consecutive snapshots, its positions are

   $$
   (3\ \mathrm{m},-4\ \mathrm{m}),\qquad (2\ \mathrm{m},0),\qquad (3\ \mathrm{m},4\ \mathrm{m}).
   $$

   Assuming the motion is governed only by the Coulomb interaction with $$\alpha$$, determine the angle $$\theta$$, measured from the positive $$x$$-axis, of the velocity of particle $$\gamma$$ at a large time.

   $$(C)$$ A family of particles, each identical to particle $$\gamma$$ (that is, each has charge $$+2\ \mathrm{C}$$), approaches from infinity in the $$xy$$-plane. All particles have the same speed $$v_{\infty}$$ far from the origin and move along lines parallel to the initial asymptotic direction of particle $$\gamma$$ from part $$(B)$$. The particles are injected one at a time, so they do not interact with one another.

   For each trajectory, define the **impact parameter** $$B$$ to be the perpendicular distance between the initial straight-line path of the particle and the origin.

   As a particle passes near the scattering center, its direction changes due to Coulomb repulsion. Let $$\alpha$$ denote the total deflection angle of the trajectory, i.e. the angle between the incoming and outgoing asymptotic directions.

   $$(i)$$ Using the conic form of the trajectory, derive a formula for $$B(\alpha)$$.

   $$(ii)$$ Using the result of part $$(B)$$, express $$B(\alpha)$$ in terms of $$r_0$$.

### Solutions

<div class="theorem-box">

#### Solution 1

Complete the square:

$$
4x^{2}+9y^{2}-24x+36y+36=0
$$

$$
4(x^{2}-6x)+9(y^{2}+4y)+36=0.
$$

Then

$$
4\bigl((x-3)^{2}-9\bigr)+9\bigl((y+2)^{2}-4\bigr)+36=0.
$$

Simplify:

$$
4(x-3)^{2}+9(y+2)^{2}=36.
$$

Divide by $$36$$:

$$
\frac{(x-3)^{2}}{9}+\frac{(y+2)^{2}}{4}=1.
$$

This is an ellipse centered at $$(3,-2)$$ with horizontal major axis. Here $$a^{2}=9$$, $$b^{2}=4$$, so $$a=3$$ and $$b=2$$. Also

$$
c^{2}=a^{2}-b^{2}=9-4=5,
$$

so $$c=\sqrt{5}$$ and $$e=\dfrac{c}{a}=\dfrac{\sqrt{5}}{3}$$.

Thus

$$
\boxed{\frac{(x-3)^{2}}{9}+\frac{(y+2)^{2}}{4}=1}
$$

with center $$\boxed{(3,-2)}$$, vertices $$\boxed{(0,-2),(6,-2)}$$, co-vertices $$\boxed{(3,-4),(3,0)}$$, foci $$\boxed{(3-\sqrt{5},-2),(3+\sqrt{5},-2)}$$, eccentricity $$\boxed{\frac{\sqrt{5}}{3}}$$, major axis length $$\boxed{6}$$, and minor axis length $$\boxed{4}$$.

The graph of the conic is displayed below:

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/ellipsegraph2.png" alt="Ellipse" loading="lazy" decoding="async" />

</div>

<div class="theorem-box">

#### Solution 2

The focus is $$(5,-2)$$ and the directrix is $$x=-1$$, so the parabola opens horizontally. The vertex is halfway between the focus and directrix along the horizontal axis:

$$
\left(\frac{5+(-1)}{2},-2\right)=(2,-2).
$$

Thus $$h=2$$ and $$k=-2$$. Since the focus is $$(h+p,k)=(5,-2)$$,

$$
p=3.
$$

Use the horizontal parabola form

$$
(y-k)^{2}=4p(x-h).
$$

So

$$
\boxed{(y+2)^{2}=12(x-2)}.
$$

The axis of symmetry is $$\boxed{y=-2}$$. The latus rectum is vertical through the focus. Its length is $$\lvert 4p \rvert=12$$, so its endpoints are $$6$$ units above and below the focus:

$$
\boxed{(5,4)\text{ and }(5,-8)}.
$$

</div>

<div class="theorem-box">

#### Solution 3

A line with slope $$-2$$ has equation

$$
y=-2x+b.
$$

Substitute into the parabola

$$
(x-1)^{2}=8(y+3).
$$

Then

$$
(x-1)^{2}=8(-2x+b+3).
$$

Expand:

$$
x^{2}-2x+1=-16x+8b+24.
$$

Move everything to one side:

$$
x^{2}+14x-(8b+23)=0.
$$

For the line to be tangent, this quadratic must have exactly one solution, so its discriminant is $$0$$:

$$
14^{2}-4(1)(-(8b+23))=0.
$$

Thus

$$
196+32b+92=0
\quad\Longrightarrow\quad
32b=-288
\quad\Longrightarrow\quad
b=-9.
$$

Therefore the tangent line is

$$
\boxed{y=-2x-9}.
$$

</div>

<div class="theorem-box">

#### Solution 4

The foci $$(1,4)$$ and $$(1,-2)$$ have midpoint

$$
(h,k)=\left(1,\frac{4+(-2)}{2}\right)=(1,1).
$$

The foci are vertical, so the major axis is vertical. The distance from the center to either focus is

$$
c=3.
$$

The point $$(5,1)$$ lies on the ellipse. Its distances to the foci are

$$
\sqrt{(5-1)^{2}+(1-4)^{2}}=5
$$

and

$$
\sqrt{(5-1)^{2}+(1-(-2))^{2}}=5.
$$

The sum of distances is $$10$$, so $$2a=10$$ and $$a=5$$. Then

$$
b^{2}=a^{2}-c^{2}=25-9=16.
$$

Since the major axis is vertical,

$$
\boxed{\frac{(x-1)^{2}}{16}+\frac{(y-1)^{2}}{25}=1}.
$$

The eccentricity is

$$
\boxed{e=\frac{c}{a}=\frac{3}{5}}.
$$

</div>

<div class="theorem-box">

#### Solution 5

The ellipse

$$
\frac{(x+2)^{2}}{36}+\frac{(y-1)^{2}}{20}=1
$$

has center $$(-2,1)$$, $$a^{2}=36$$, and $$b^{2}=20$$. Therefore

$$
c^{2}=a^{2}-b^{2}=36-20=16,
$$

so $$c=4$$. The foci are

$$
(-2-4,1)=(-6,1)
\quad\text{and}\quad
(-2+4,1)=(2,1).
$$

Now use $$x=1$$:

$$
\frac{(1+2)^{2}}{36}+\frac{(y-1)^{2}}{20}=1.
$$

So

$$
\frac{9}{36}+\frac{(y-1)^{2}}{20}=1
\quad\Longrightarrow\quad
\frac{(y-1)^{2}}{20}=\frac{3}{4}.
$$

Thus

$$
(y-1)^{2}=15.
$$

Since $$y>1$$,

$$
y=1+\sqrt{15}.
$$

So $$P=(1,1+\sqrt{15})$$. Its distance to the right focus $$(2,1)$$ is

$$
\sqrt{(1-2)^{2}+(\sqrt{15})^{2}}=\sqrt{16}=4.
$$

Its distance to the left focus $$(-6,1)$$ is

$$
\sqrt{(1+6)^{2}+(\sqrt{15})^{2}}=\sqrt{64}=8.
$$

Therefore

$$
\boxed{PF_{\text{right}}=4\quad\text{and}\quad PF_{\text{left}}=8}.
$$

</div>

<div class="theorem-box">

#### Solution 6

Substitute $$y=mx+3$$ into

$$
\frac{x^{2}}{9}+\frac{y^{2}}{4}=1.
$$

Then

$$
\frac{x^{2}}{9}+\frac{(mx+3)^{2}}{4}=1.
$$

Multiply by $$36$$:

$$
4x^{2}+9(mx+3)^{2}=36.
$$

Expand:

$$
4x^{2}+9(m^{2}x^{2}+6mx+9)=36.
$$

So

$$
(4+9m^{2})x^{2}+54mx+45=0.
$$

For tangency, the discriminant must be $$0$$:

$$
(54m)^{2}-4(4+9m^{2})(45)=0.
$$

Simplify:

$$
2916m^{2}-180(4+9m^{2})=0
$$

$$
1296m^{2}-720=0
\quad\Longrightarrow\quad
m^{2}=\frac{5}{9}.
$$

Thus

$$
\boxed{m=\pm\frac{\sqrt{5}}{3}}.
$$

</div>

<div class="theorem-box">

#### Solution 7

Start with

$$
9y^{2}-4x^{2}-54y-16x+29=0.
$$

Group and complete the square:

$$
9(y^{2}-6y)-4(x^{2}+4x)+29=0.
$$

Then

$$
9\bigl((y-3)^{2}-9\bigr)-4\bigl((x+2)^{2}-4\bigr)+29=0.
$$

Simplify:

$$
9(y-3)^{2}-4(x+2)^{2}-36=0.
$$

So

$$
9(y-3)^{2}-4(x+2)^{2}=36.
$$

Divide by $$36$$:

$$
\boxed{\frac{(y-3)^{2}}{4}-\frac{(x+2)^{2}}{9}=1}.
$$

This is a vertical hyperbola. The center is $$(-2,3)$$. Here $$a^{2}=4$$, $$b^{2}=9$$, so $$a=2$$ and $$b=3$$. Also

$$
c^{2}=a^{2}+b^{2}=4+9=13,
$$

so $$c=\sqrt{13}$$ and $$e=\dfrac{\sqrt{13}}{2}$$.

The vertices are

$$
\boxed{(-2,1)\text{ and }(-2,5)}.
$$

The foci are

$$
\boxed{(-2,3-\sqrt{13})\text{ and }(-2,3+\sqrt{13})}.
$$

The asymptotes are

$$
\boxed{y-3=\pm\frac{2}{3}(x+2)}.
$$

An image of the hyperbola is shown below:

<img class="note-img note-img--w480" src="/assets/APs/AP%20Precalc/hyperbolagraph3.png" alt="Ellipse" loading="lazy" decoding="async" />

</div>

<div class="theorem-box">

#### Solution 8

A horizontal hyperbola centered at $$(2,-1)$$ has form

$$
\frac{(x-2)^{2}}{a^{2}}-\frac{(y+1)^{2}}{b^{2}}=1.
$$

Its asymptotes are

$$
y+1=\pm\frac{b}{a}(x-2).
$$

We are given slope $$\frac{3}{2}$$, so

$$
\frac{b}{a}=\frac{3}{2}.
$$

Let $$a=2t$$ and $$b=3t$$. The focus distance satisfies

$$
c^{2}=a^{2}+b^{2}.
$$

Since one focus is $$(2+\sqrt{52},-1)$$, we have $$c=\sqrt{52}$$. Thus

$$
52=(2t)^{2}+(3t)^{2}=13t^{2}.
$$

So $$t^{2}=4$$, and therefore

$$
a^{2}=(2t)^{2}=16,
\qquad
b^{2}=(3t)^{2}=36.
$$

Thus the equation is

$$
\boxed{\frac{(x-2)^{2}}{16}-\frac{(y+1)^{2}}{36}=1}.
$$

</div>

<div class="theorem-box">

#### Solution 9

Solve the system

$$
\frac{x^{2}}{16}+\frac{y^{2}}{9}=1
$$

and

$$
\frac{x^{2}}{4}-\frac{y^{2}}{9}=1.
$$

Let $$X=x^{2}$$ and $$Y=y^{2}$$. Then

$$
\frac{X}{16}+\frac{Y}{9}=1
$$

and

$$
\frac{X}{4}-\frac{Y}{9}=1.
$$

From the second equation,

$$
X=4+\frac{4Y}{9}.
$$

Substitute into the first:

$$
\frac{4+\frac{4Y}{9}}{16}+\frac{Y}{9}=1.
$$

This gives

$$
\frac{1}{4}+\frac{Y}{36}+\frac{Y}{9}=1
\quad\Longrightarrow\quad
\frac{1}{4}+\frac{5Y}{36}=1.
$$

So

$$
\frac{5Y}{36}=\frac{3}{4}
\quad\Longrightarrow\quad
Y=\frac{27}{5}.
$$

Then

$$
X=4+\frac{4}{9}\cdot\frac{27}{5}
=4+\frac{12}{5}
=\frac{32}{5}.
$$

Therefore

$$
x=\pm\sqrt{\frac{32}{5}}=\pm\frac{4\sqrt{10}}{5},
\qquad
y=\pm\sqrt{\frac{27}{5}}=\pm\frac{3\sqrt{15}}{5}.
$$

All sign combinations work, so the intersection points are

$$
\boxed{\left(\pm\frac{4\sqrt{10}}{5},\,\pm\frac{3\sqrt{15}}{5}\right)}.
$$

</div>

<div class="theorem-box">

#### Solution 10

The focus is $$(0,0)$$ and the directrix is $$x=-6$$. For a point $$(x,y)$$ on the conic,

$$
PF=\sqrt{x^{2}+y^{2}}
$$

and

$$
d(P,\ell)=x+6
$$

on the appropriate side of the directrix. Since $$e=\dfrac{2}{3}$$,

$$
\sqrt{x^{2}+y^{2}}=\frac{2}{3}(x+6).
$$

Square both sides:

$$
x^{2}+y^{2}=\frac{4}{9}(x+6)^{2}.
$$

Multiply by $$9$$:

$$
9x^{2}+9y^{2}=4x^{2}+48x+144.
$$

So

$$
5x^{2}+9y^{2}-48x-144=0.
$$

Complete the square in $$x$$:

$$
5\left(x^{2}-\frac{48}{5}x\right)+9y^{2}=144.
$$

Since

$$
x^{2}-\frac{48}{5}x=\left(x-\frac{24}{5}\right)^{2}-\frac{576}{25},
$$

we get

$$
5\left(x-\frac{24}{5}\right)^{2}+9y^{2}=\frac{1296}{5}.
$$

Divide by $$\dfrac{1296}{5}$$:

$$
\boxed{\frac{\left(x-\frac{24}{5}\right)^{2}}{\frac{1296}{25}}+\frac{y^{2}}{\frac{144}{5}}=1}.
$$

Since $$0<e<1$$, this conic is an ellipse.

</div>

<div class="theorem-box">

#### Solution 11

Start with

$$
r=\frac{10}{2-\cos\theta}.
$$

Rewrite:

$$
2r-r\cos\theta=10.
$$

Use $$r=\sqrt{x^{2}+y^{2}}$$ and $$r\cos\theta=x$$:

$$
2\sqrt{x^{2}+y^{2}}-x=10.
$$

So

$$
2\sqrt{x^{2}+y^{2}}=x+10.
$$

Square both sides:

$$
4(x^{2}+y^{2})=(x+10)^{2}.
$$

Expand:

$$
4x^{2}+4y^{2}=x^{2}+20x+100.
$$

So

$$
3x^{2}+4y^{2}-20x-100=0.
$$

Complete the square:

$$
3\left(x^{2}-\frac{20}{3}x\right)+4y^{2}=100.
$$

Since

$$
x^{2}-\frac{20}{3}x=\left(x-\frac{10}{3}\right)^{2}-\frac{100}{9},
$$

we get

$$
3\left(x-\frac{10}{3}\right)^{2}+4y^{2}=\frac{400}{3}.
$$

Divide by $$\dfrac{400}{3}$$:

$$
\boxed{\frac{\left(x-\frac{10}{3}\right)^{2}}{\frac{400}{9}}+\frac{y^{2}}{\frac{100}{3}}=1}.
$$

The conic is an ellipse. From

$$
r=\frac{10}{2-\cos\theta}=\frac{5}{1-\frac{1}{2}\cos\theta},
$$

the eccentricity is $$\boxed{e=\frac{1}{2}}$$. The center is $$\boxed{\left(\frac{10}{3},0\right)}$$. Since $$a^{2}=\frac{400}{9}$$, $$a=\frac{20}{3}$$. The vertices are

$$
\boxed{\left(-\frac{10}{3},0\right)\text{ and }(10,0)}.
$$

Also $$c=ea=\frac{10}{3}$$, so the foci are

$$
\boxed{(0,0)\text{ and }\left(\frac{20}{3},0\right)}.
$$

</div>

<div class="theorem-box">

#### Solution 12

Rewrite

$$
r=\frac{12}{3+4\cos\theta}
$$

by factoring $$3$$ from the denominator:

$$
r=\frac{4}{1+\frac{4}{3}\cos\theta}.
$$

This matches polar conic form with eccentricity

$$
e=\frac{4}{3}.
$$

Since $$e>1$$, the conic is a hyperbola.

The denominator vanishes when

$$
3+4\cos\theta=0.
$$

Thus

$$
\cos\theta=-\frac{3}{4}.
$$

So the angles are

$$
\boxed{\theta=\arccos\left(-\frac{3}{4}\right)\quad\text{and}\quad \theta=2\pi-\arccos\left(-\frac{3}{4}\right)}.
$$

At those angles, $$r$$ is not finite. Geometrically, they give the asymptotic directions of the hyperbola.

</div>

<div class="theorem-box">

#### Solution 13

A circle tangent to both axes in Quadrant I has center $$(r,r)$$ and radius $$r$$. Since the center lies on

$$
\frac{x^{2}}{25}+\frac{y^{2}}{9}=1,
$$

substitute $$(r,r)$$:

$$
\frac{r^{2}}{25}+\frac{r^{2}}{9}=1.
$$

Then

$$
r^{2}\left(\frac{1}{25}+\frac{1}{9}\right)=1.
$$

Compute:

$$
\frac{1}{25}+\frac{1}{9}=\frac{9+25}{225}=\frac{34}{225}.
$$

So

$$
r^{2}\cdot\frac{34}{225}=1
\quad\Longrightarrow\quad
r^{2}=\frac{225}{34}.
$$

Since $$r>0$$,

$$
\boxed{r=\frac{15}{\sqrt{34}}=\frac{15\sqrt{34}}{34}}.
$$

</div>

<div class="theorem-box">

#### Solution 14

Start with

$$
Ax^{2}+Cy^{2}+Dx+Ey+F=0,
$$

where $$A\ne 0$$ and $$C\ne 0$$. Complete the square separately in $$x$$ and $$y$$:

$$
A\left(x^{2}+\frac{D}{A}x\right)+C\left(y^{2}+\frac{E}{C}y\right)+F=0.
$$

The centers of the completed squares occur at

$$
x=-\frac{D}{2A}
\qquad\text{and}\qquad
y=-\frac{E}{2C}.
$$

Therefore the center is

$$
\boxed{\left(-\frac{D}{2A},-\frac{E}{2C}\right)}.
$$

For

$$
5x^{2}-3y^{2}+20x+18y-11=0,
$$

we have $$A=5$$, $$C=-3$$, $$D=20$$, and $$E=18$$. Thus

$$
h=-\frac{20}{2(5)}=-2
$$

and

$$
k=-\frac{18}{2(-3)}=3.
$$

So the center is

$$
\boxed{(-2,3)}.
$$

</div>

<div class="theorem-box">

#### Solution 15

The parabola is

$$
y^{2}=4px,
$$

and its focus is $$(p,0)$$. A line through the focus with slope $$m\ne 0$$ has equation

$$
y=m(x-p).
$$

Solve this for $$x$$:

$$
x=p+\frac{y}{m}.
$$

Substitute into the parabola:

$$
y^{2}=4p\left(p+\frac{y}{m}\right).
$$

Expand:

$$
y^{2}=4p^{2}+\frac{4p}{m}y.
$$

Move everything to one side:

$$
y^{2}-\frac{4p}{m}y-4p^{2}=0.
$$

This quadratic has roots equal to the $$y$$-coordinates of the two intersection points $$A$$ and $$B$$. By Vieta's formula, the product of the roots is the constant term divided by the leading coefficient:

$$
y_Ay_B=\frac{-4p^{2}}{1}.
$$

Therefore

$$
\boxed{y_Ay_B=-4p^{2}}.
$$

</div>

<div class="theorem-box">

#### Solution 16

For part (A), use the attractive model

$$
r=\frac{r_0}{1+e\cos\phi}.
$$

Since the first and third snapshots are at $$(0,-5)$$ and $$(0,5)$$, while the middle snapshot is at $$(3,0)$$, and the time intervals are equal, the path is symmetric about the $$x$$-axis. Therefore, $$(3,0)$$ is the closest point to the origin, called the **pericenter**.

At pericenter, $$\phi=0$$, so

$$
r_{\min}=\frac{r_0}{1+e}=3.
$$

The other two photographed points are on the $$y$$-axis. There,

$$
\phi=\pm\frac{\pi}{2},\qquad r=5.
$$

Since $$\cos\left(\pm\frac{\pi}{2}\right)=0$$,

$$
5=\frac{r_0}{1+e(0)}=r_0.
$$

So

$$
r_0=5.
$$

Now use the pericenter equation:

$$
3=\frac{5}{1+e}.
$$

Thus,

$$
1+e=\frac53,
$$

so

$$
e=\frac23.
$$

The farthest point on the ellipse is the **apocenter**, where $$\phi=\pi$$ and $$\cos\phi=-1$$. Therefore,

$$
r_{\max}=\frac{r_0}{1-e}
=\frac{5}{1-\frac23}
=15.
$$

So

$$
\boxed{r_{\max}=15\ \mathrm{m}}.
$$

For part (B), use the repulsive model

$$
r=\frac{r_0}{e\cos\phi-1}.
$$

Again, the first and third snapshots are symmetric about the $$x$$-axis, and the middle snapshot is at $$(2,0)$$. Since the snapshots are equally spaced in time, $$(2,0)$$ is the point of closest approach.

At closest approach,

$$
r_{\min}=\frac{r_0}{e-1}=2.
$$

Thus,

$$
r_0=2(e-1).
$$

Now use the point $$(3,4)$$. Its distance from the origin is

$$
r=\sqrt{3^2+4^2}=5,
$$

and

$$
\cos\phi=\frac{x}{r}=\frac35.
$$

Substitute into the polar equation:

$$
5=\frac{r_0}{e\cdot\frac35-1}.
$$

Using $$r_0=2(e-1)$$,

$$
5=\frac{2(e-1)}{\frac35e-1}.
$$

Multiply through:

$$
5\left(\frac35e-1\right)=2(e-1).
$$

So

$$
3e-5=2e-2,
$$

which gives

$$
e=3.
$$

Then

$$
r_0=2(e-1)=4.
$$

At large times, the particle approaches an asymptote of the hyperbola. The asymptote occurs when the denominator goes to zero:

$$
e\cos\phi-1=0.
$$

Therefore,

$$
\cos\phi=\frac1e=\frac13.
$$

Thus the outgoing velocity direction at large positive time is

$$
\boxed{\theta=\arccos\left(\frac13\right)}
$$

measured from the positive $$x$$-axis. Numerically,

$$
\theta\approx70.5^\circ.
$$

For part (C), for a repulsive inverse-square force, the trajectory is

$$
r=\frac{r_0}{e\cos\phi-1},\qquad e>1.
$$

The asymptotes occur when the denominator vanishes:

$$
e\cos\phi-1=0.
$$

Thus,

$$
\cos\phi=\frac1e.
$$

The two asymptotes are symmetric about the $$x$$-axis, so the total deflection angle is

$$
\alpha=2\phi=2\arccos\left(\frac1e\right).
$$

Hence,

$$
\cos\left(\frac{\alpha}{2}\right)=\frac1e,
$$

so

$$
e=\frac{1}{\cos(\alpha/2)}.
$$

Now relate the impact parameter $$B$$ to the conic parameters. Starting from

$$
r=\frac{r_0}{e\cos\phi-1},
$$

multiply through:

$$
r(e\cos\phi-1)=r_0.
$$

Since $$r\cos\phi=x$$,

$$
ex-r=r_0.
$$

So

$$
r=ex-r_0.
$$

Square both sides and use $$r^2=x^2+y^2$$:

$$
x^2+y^2=(ex-r_0)^2.
$$

Rearrange:

$$
(e^2-1)x^2-2er_0x+r_0^2-y^2=0.
$$

Complete the square:

$$
(e^2-1)\left(x-\frac{er_0}{e^2-1}\right)^2-y^2
=\frac{r_0^2}{e^2-1}.
$$

Thus the hyperbola has asymptotes

$$
y=\pm\sqrt{e^2-1}\left(x-\frac{er_0}{e^2-1}\right).
$$

The impact parameter $$B$$ is the perpendicular distance from the origin to the incoming asymptote. For a line

$$
y=m(x-h),
$$

the distance from the origin is

$$
\frac{\lvert mh \rvert}{\sqrt{m^2+1}}.
$$

Here

$$
m=\sqrt{e^2-1}
$$

and

$$
h=\frac{er_0}{e^2-1}.
$$

Therefore,

$$
B=
\frac{\sqrt{e^2-1}\cdot \frac{er_0}{e^2-1}}
{\sqrt{(e^2-1)+1}}.
$$

Since $$\sqrt{(e^2-1)+1}=e$$,

$$
B=\frac{r_0}{\sqrt{e^2-1}}.
$$

Now substitute

$$
e=\frac{1}{\cos(\alpha/2)}.
$$

Then

$$
e^2-1
=\frac{1}{\cos^2(\alpha/2)}-1
=\tan^2\left(\frac{\alpha}{2}\right).
$$

So

$$
\sqrt{e^2-1}=\tan\left(\frac{\alpha}{2}\right).
$$

Therefore,

$$
\boxed{B(\alpha)=r_0\cot\left(\frac{\alpha}{2}\right)}.
$$

For the particular trajectory in part $$(B)$$, the asymptote angle satisfies

$$
\cos\left(\frac{\alpha}{2}\right)=\frac13,
$$

so

$$
\tan\left(\frac{\alpha}{2}\right)=2\sqrt2.
$$

Therefore, for any trajectory whose asymptote angle matches the one from part $$(B)$$,

$$
B=r_0\cot\left(\frac{\alpha}{2}\right)
=\frac{r_0}{2\sqrt2}.
$$

For the specific particle in part $$(B)$$, $$r_0=4$$, so

$$
B=\frac{4}{2\sqrt2}=\sqrt2\ \mathrm{m}.
$$

Note that the answer may be different depending on how you define the asymptote angle, so always match your work instead of necessarily matching solutions.

</div>

## Unit 13 & 14: Additional Topics in Algebra

[Full notes →](/notes/ap/precalc/addtopics/)

### Practice

1. Evaluate $$\displaystyle \lim_{x\to\infty}\frac{5x^3-2x+1}{x^3+4x^2-7}$$.
2. Find the horizontal asymptote, if it exists, of $$\displaystyle f(x)=\frac{3x^2+8x-1}{x^2-5}$$.
3. Find the oblique asymptote of $$\displaystyle g(x)=\frac{x^2+4x-1}{x+2}$$.
4. Prove by induction that $$\sum_{k=1}^{n} k^3 = \frac{n^2 (n+1)^2}{4}$$ for all integers $$n \ge 1$$. Extension: This looks like the square of $$1 + 2 + ... + n = \frac{n(n+1)}{2}$$! Prove that this is true (you should not use induction here).
5. Prove by induction that $$8^{2n} - 3^{2n}$$ is divisible by $$55$$ for all integers $$n \ge 1$$.
6. Prove by induction that $$2^{n}\ge n^{3}$$ for all integers $$n\ge 10$$.
7. Expand $$(3x+2y)^{5}$$ using the binomial theorem.
8. What is the coefficient of the term containing $$x^{22}$$ in $$\left(x^{3} - \dfrac{4}{\sqrt{x}}\right)^{12}$$?
9. Use the binomial theorem to prove that $$9^{n}-1$$ is divisible by $$8$$ for every integer $$n\ge 1$$.
10. A nonconstant arithmetic sequence has first term $$5$$ and common difference $$d$$. Its first, third, and seventh terms form a geometric sequence in that order. Find $$d$$ and the three geometric terms.
11. The sequence $$1,x,y,z$$ is arithmetic. The sequence $$1,p,q,z$$ is geometric. Both sequences are strictly increasing and contain only integers, and $$z$$ is as small as possible. What is the value of $$x+y+z+p+q$$? (2025 AMC 10A)
12. Find $$\sum_{i=5}^{100}(3i-2)$$.
13. Evaluate $$\sum_{i=6}^{12} 3\cdot 2^i$$.
14. The first three terms of a geometric series are the integers $$a$$, $$720$$, and $$b$$, where $$a < 720 < b$$. What is the sum of the digits of the least possible value of $$b$$? (2024 AMC 10A).
15. Evaluate the finite sum $$\sum_{k=0}^{n}\binom{n}{k}3^{k}2^{n-k}(k+1)$$ in closed form. Hint: $$k\binom{n}{k} = n\binom{n-1}{k-1}$$
16. (Bonus, Binet's Formula)

   Binet's Formula is a famous explicit formula for the Fibonnaci series. Let $$F_0=0$$, $$F_1=1$$, and $$F_{n+2}=F_{n+1}+F_n$$ for $$n\ge 0$$.

   $$(A)$$ Define a function $$G(x)=\sum_{n=0}^{\infty}F_nx^n$$. Use the recurrence to show that $$G(x)=\frac{x}{1-x-x^2}$$. $$G(x)$$ is called the generating function of $$F_n$$. Hint: How can you telescope to cancel out the correct terms?

   $$(B)$$ Decompose $$G(x)$$ into partial fractions (Hint: All terms should be linear!).

   $$(C)$$ Set the linear factors found in part (B) to $$\alpha$$ and $$\beta$$ (so your partial fraction looks like $$\frac{A}{1 - \alpha x}$$ and $$\frac{B}{1 - \beta x}$$). Use the geometric series formula to prove Binet's formula:

   $$
   F_n=\frac{\alpha^n-\beta^n}{\sqrt5}.
   $$

---

### Solutions

<div class="theorem-box">

#### Solution 1

Divide numerator and denominator by $$x^3$$:

$$
\lim_{x\to\infty}\frac{5x^3-2x+1}{x^3+4x^2-7}
=
\lim_{x\to\infty}
\frac{5-\frac{2}{x^2}+\frac{1}{x^3}}{1+\frac{4}{x}-\frac{7}{x^3}}.
$$

As $$x\to\infty$$, every term with $$x$$ in the denominator approaches $$0$$. Therefore

$$
\boxed{\lim_{x\to\infty}\frac{5x^3-2x+1}{x^3+4x^2-7}=5}.
$$

Since the numerator and denominator have the same degree, this is also the ratio of leading coefficients.

</div>

<div class="theorem-box">

#### Solution 2

Evaluate the end behavior:

$$
\lim_{x\to\infty}\frac{3x^2+8x-1}{x^2-5}
=
\lim_{x\to\infty}
\frac{3+\frac{8}{x}-\frac{1}{x^2}}{1-\frac{5}{x^2}}
=3.
$$

Likewise,

$$
\lim_{x\to-\infty}\frac{3x^2+8x-1}{x^2-5}=3.
$$

Therefore the horizontal asymptote is

$$
\boxed{y=3}.
$$

</div>

<div class="theorem-box">

#### Solution 3

Use polynomial division:

$$
\frac{x^2+4x-1}{x+2}
=x+2-\frac{5}{x+2}.
$$

Since

$$
\lim_{x\to\infty}\left(-\frac{5}{x+2}\right)=0
$$

and

$$
\lim_{x\to-\infty}\left(-\frac{5}{x+2}\right)=0,
$$

the graph approaches the line

$$
\boxed{y=x+2}.
$$

</div>

<div class="theorem-box">

#### Solution 4

**Base case**: $$n=1$$:

$$
\sum_{i=1}^{1} i^{3}=1^{3}=1
$$

and

$$
\frac{1^{2}(1+1)^{2}}{4}=\frac{1^{2}\cdot 2^{2}}{4}=1.
$$

Since both sides are equal, the statement is true for $$n=1$$.

**Induction hypothesis**: Assume that for some integer $$k \ge 1$$,

$$
\sum_{i=1}^{k} i^{3} = \frac{k^{2}(k+1)^{2}}{4}.
$$

**Inductive step**: We need to show that

$$
\sum_{i=1}^{k+1} i^{3} = \frac{(k+1)^{2}(k+2)^{2}}{4}.
$$

Start with the expression for $$k+1$$:

$$
\sum_{i=1}^{k+1} i^{3}
= \sum_{i=1}^{k} i^{3} + (k+1)^{3}.
$$

Use the induction hypothesis:

$$
\sum_{i=1}^{k+1} i^{3}
= \frac{k^{2}(k+1)^{2}}{4} + (k+1)^{3}.
$$

Factor $$(k+1)^{2}$$:

$$
\frac{k^{2}(k+1)^{2}}{4} + (k+1)^{3}
= (k+1)^{2}\left(\frac{k^{2}}{4} + (k+1)\right).
$$

Simplify inside the parentheses:

$$
(k+1)^{2}\left(\frac{k^{2}}{4} + (k+1)\right)
= (k+1)^{2}\left(\frac{k^{2}+4k+4}{4}\right)
= (k+1)^{2}\left(\frac{(k+2)^{2}}{4}\right)
= \frac{(k+1)^{2}(k+2)^{2}}{4}.
$$

Thus the formula is true for $$k+1$$. By induction,

$$
\boxed{\sum_{i=1}^{n} i^{3} = \frac{n^{2}(n+1)^{2}}{4}}
$$

for all integers $$n \ge 1$$.

Extension (no induction): Let $$S_{n}=\sum_{k=1}^{n}k=\dfrac{n(n+1)}{2}$$. Then

$$
S_{n}^{2}-S_{n-1}^{2} = \left(\frac{n(n+1)}{2}\right)^{2}-\left(\frac{(n-1)n}{2}\right)^{2} = \frac{n^{2}}{4}\bigl((n+1)^{2}-(n-1)^{2}\bigr) = \frac{n^{2}}{4}\cdot 4n = n^{3}.
$$

Telescoping gives

$$
\boxed{\sum_{k=1}^{n}k^{3}=S_{n}^{2}-S_{0}^{2}=S_{n}^{2}=\frac{n^{2}(n+1)^{2}}{4}}
$$

with $$S_{0}=0$$.

</div>

<div class="theorem-box">

#### Solution 5

**Base case**: $$n=1$$: $$8^{2}-3^{2}=64-9=55$$, divisible by $$55$$.

**Induction hypothesis**: Assume $$55 \mid 8^{2k}-3^{2k}$$ for some integer $$k \ge 1$$.

**Inductive step**: We need to show that

$$
55 \mid 8^{2(k+1)} - 3^{2(k+1)}.
$$

Start with the expression for $$k+1$$:

$$
8^{2(k+1)} - 3^{2(k+1)} = 8^{2k+2} - 3^{2k+2}.
$$

Rewrite using $$8^{2}=64$$ and $$3^{2}=9$$:

$$
8^{2k+2} - 3^{2k+2} = 64\cdot 8^{2k} - 9\cdot 3^{2k}.
$$

Now add and subtract $$64\cdot 3^{2k}$$ so that the induction hypothesis appears:

$$
64\cdot 8^{2k} - 9\cdot 3^{2k}
= 64(8^{2k}-3^{2k}) + 64\cdot 3^{2k} - 9\cdot 3^{2k}.
$$

Simplify:

$$
64(8^{2k}-3^{2k}) + (64-9)3^{2k}
= 64(8^{2k}-3^{2k}) + 55\cdot 3^{2k}.
$$

By the induction hypothesis, $$8^{2k}-3^{2k}$$ is divisible by $$55$$, so $$64(8^{2k}-3^{2k})$$ is also divisible by $$55$$. The term $$55\cdot 3^{2k}$$ is clearly divisible by $$55$$. Therefore, their sum is divisible by $$55$$.

Thus $$55 \mid 8^{2(k+1)} - 3^{2(k+1)}$$. By induction,

$$
\boxed{55 \mid 8^{2n} - 3^{2n} \text{ for all integers } n \ge 1}.
$$

</div>

<div class="theorem-box">

#### Solution 6

**Base case**: $$n=10$$:

$$
2^{10}=1024
$$

and

$$
10^{3}=1000.
$$

Since $$1024\ge 1000$$, the inequality is true for $$n=10$$.

**Induction hypothesis**: Assume that for some integer $$k\ge 10$$,

$$
2^{k}\ge k^{3}.
$$

**Inductive step**: We need to show that

$$
2^{k+1}\ge (k+1)^{3}.
$$

Start with the left-hand side:

$$
2^{k+1}=2\cdot 2^{k}.
$$

Use the induction hypothesis:

$$
2\cdot 2^{k}\ge 2k^{3}.
$$

Now we need to show that $$2k^{3}$$ is at least $$(k+1)^{3}$$. Compare them:

$$
2k^{3}-(k+1)^{3}
=2k^{3}-(k^{3}+3k^{2}+3k+1)
=k^{3}-3k^{2}-3k-1.
$$

For $$k\ge 10$$,

$$
k^{3}-3k^{2}-3k-1
= k^{2}(k-6)+3k(k-1)-1.
$$

Since $$k\ge 10$$, both $$k^{2}(k-6)$$ and $$3k(k-1)$$ are positive, and more specifically,

$$
k^{2}(k-6)+3k(k-1)-1\ge 10^{2}(4)+0-1=399>0.
$$

Therefore

$$
2k^{3}\ge (k+1)^{3}.
$$

Combining the inequalities,

$$
2^{k+1}\ge 2k^{3}\ge (k+1)^{3}.
$$

Thus the inequality is true for $$k+1$$. By induction,

$$
\boxed{2^{n}\ge n^{3} \text{ for all integers } n\ge 10}.
$$

</div>

<div class="theorem-box">

#### Solution 7

Use the binomial theorem with $$a=3x$$, $$b=2y$$, and $$n=5$$:

$$
(3x+2y)^{5} = \sum_{k=0}^{5} \binom{5}{k} (3x)^{5-k}(2y)^{k}.
$$

The coefficients from row $$5$$ of Pascal's Triangle are $$1,5,10,10,5,1$$, so

$$
\begin{aligned}
(3x+2y)^{5}
&= (3x)^5+5(3x)^4(2y)+10(3x)^3(2y)^2+10(3x)^2(2y)^3+5(3x)(2y)^4+(2y)^5\\
&= 243x^5+810x^4y+1080x^3y^2+720x^2y^3+240xy^4+32y^5.
\end{aligned}
$$

Thus

$$
\boxed{(3x+2y)^5=243x^5+810x^4y+1080x^3y^2+720x^2y^3+240xy^4+32y^5}.
$$

</div>

<div class="theorem-box">

#### Solution 8

Write $$\left(x^{3} - \dfrac{4}{\sqrt{x}}\right)^{12} = \left(x^{3} - 4x^{-1/2}\right)^{12}$$. A general term in the binomial expansion is

$$
\binom{12}{k} (x^{3})^{12-k}\left(-4x^{-1/2}\right)^{k} = \binom{12}{k}(-4)^{k}\, x^{36 - 7k/2}.
$$

We need the exponent of $$x$$ to equal $$22$$:

$$
36 - \frac{7k}{2}=22.
$$

Then

$$
\frac{7k}{2}=14 \quad\Longrightarrow\quad 7k=28 \quad\Longrightarrow\quad k=4.
$$

Since $$k=4$$ is an integer between $$0$$ and $$12$$, the desired term exists. Its coefficient is

$$
\binom{12}{4}(-4)^4=495\cdot 256=126720.
$$

Therefore, the coefficient of $$x^{22}$$ is

$$
\boxed{126720}.
$$

</div>

<div class="theorem-box">

#### Solution 9

$$
9^{n}-1=(8+1)^{n}-1.
$$

By the binomial theorem,

$$
(8+1)^{n}=\sum_{k=0}^{n}\binom{n}{k}8^{k}1^{n-k}.
$$

So

$$
(8+1)^n=\binom{n}{0}8^{0}+\sum_{k=1}^{n}\binom{n}{k}8^{k}.
$$

Since $$\binom{n}{0}8^{0}=1$$,

$$
(8+1)^n-1=\sum_{k=1}^{n}\binom{n}{k}8^{k}.
$$

Every term in the sum has a factor of $$8$$ because $$k\ge 1$$. Therefore the entire sum is divisible by $$8$$. Thus

$$
\boxed{8\mid 9^{n}-1 \text{ for every integer } n\ge 1}.
$$

</div>

<div class="theorem-box">

#### Solution 10

The arithmetic sequence has terms

$$
a_1=5,\qquad a_3=5+2d,\qquad a_7=5+6d.
$$

These three terms form a geometric sequence in order, so the middle term squared equals the product of the first and third terms:

$$
(5+2d)^2=5(5+6d).
$$

Expand:

$$
25+20d+4d^{2}=25+30d.
$$

Simplify:

$$
4d^{2}-10d=0.
$$

Factor:

$$
2d(2d-5)=0.
$$

So $$d=0$$ or $$d=\frac{5}{2}$$. The sequence is nonconstant, so $$d\ne 0$$. Therefore

$$
d=\frac{5}{2}.
$$

The three geometric terms are

$$
5,\qquad 5+2\left(\frac{5}{2}\right)=10,\qquad 5+6\left(\frac{5}{2}\right)=20.
$$

Thus

$$
\boxed{d=\frac{5}{2}\quad\text{and the geometric terms are }5,10,20}.
$$

</div>

<div class="theorem-box">

#### Solution 11

Arithmetic: Since $$1,x,y,z$$ is arithmetic, let the common difference be $$d$$. Then

$$
x=1+d,\qquad y=1+2d,\qquad z=1+3d.
$$

Geometric: Since $$1,p,q,z$$ is geometric and all terms are strictly increasing integers, the common ratio must be an integer $$r\ge 2$$. Thus

$$
p=r,\qquad q=r^{2},\qquad z=r^{3}.
$$

The same value $$z$$ must work for both sequences, so

$$
r^{3}=1+3d.
$$

This means $$r^{3}-1$$ must be divisible by $$3$$. Try the smallest possible integer values of $$r$$:

$$
r=2:\quad z=8,\quad 3d=7 \quad \text{not possible},
$$

$$
r=3:\quad z=27,\quad 3d=26 \quad \text{not possible},
$$

$$
r=4:\quad z=64,\quad 3d=63,\quad d=21.
$$

So the arithmetic sequence is $$1,22,43,64$$ and the geometric sequence is $$1,4,16,64$$. Therefore

$$
\boxed{x+y+z+p+q=22+43+64+4+16=149}.
$$

</div>

<div class="theorem-box">

#### Solution 12

The terms of the sum form an arithmetic series. The first term occurs when $$i=5$$:

$$
a_{1}=3(5)-2=13.
$$

The last term occurs when $$i=100$$:

$$
a_{96}=3(100)-2=298.
$$

There are

$$
100-5+1=96
$$

terms. Using the finite arithmetic series formula,

$$
\sum_{i=5}^{100}(3i-2)=\frac{96}{2}(13+298)=48(311)=14928.
$$

So the answer is

$$
\boxed{14928}.
$$

</div>

<div class="theorem-box">

#### Solution 13

This is a finite geometric series with first term $$192$$, common ratio $$2$$, and $$7$$ terms:

$$
\sum_{i=6}^{12} 3\cdot 2^{i}
= 3\sum_{i=6}^{12}2^{i}
= 3\cdot2^6\sum_{i=0}^{6}2^i
= 192\cdot\frac{1-2^{7}}{1-2}
= 192(2^{7}-1).
$$

Since $$2^{7}=128$$, the answer is $$192\cdot127$$ which is

$$
\boxed{24384}.
$$

</div>

<div class="theorem-box">

#### Solution 14

For a geometric sequence $$a,720,b$$, the middle term squared equals the product of the neighboring terms:

$$
720^{2}=ab.
$$

Since $$720<b$$, the value of $$b$$ is positive, so $$a$$ is also positive. We want the least possible integer $$b>720$$ such that $$b$$ divides $$720^{2}$$. Factor:

$$
720^{2}=(2^{4}\cdot 3^{2}\cdot 5)^{2}=2^{8}\cdot 3^{4}\cdot 5^{2}.
$$

So $$b$$ must have the form $$2^{\alpha}3^{\beta}5^{\gamma}$$, where $$0\le \alpha\le 8$$, $$0\le \beta\le 4$$, and $$0\le \gamma\le 2$$. Checking the smallest divisor above $$720$$:

- If $$\gamma=0$$, the smallest possible divisor above $$720$$ is $$2^{8}\cdot 3=768$$.
- If $$\gamma=1$$, we need $$2^{\alpha}3^{\beta}>144$$, and the smallest option is $$2\cdot 3^{4}=162$$, giving $$5\cdot 162=810$$.
- If $$\gamma=2$$, we need $$2^{\alpha}3^{\beta}>28.8$$, and the smallest option above that is $$32$$, giving $$25\cdot 32=800$$.

Thus the smallest possible value of $$b$$ is $$768$$. Then

$$
a=\frac{720^{2}}{768}=675,
$$

which is an integer and satisfies $$675<720<768$$. The sum of the digits of $$768$$ is

$$
\boxed{7+6+8=21}.
$$

</div>

<div class="theorem-box">

#### Solution 15

Let

$$
S=\sum_{k=0}^{n}\binom{n}{k}3^{k}2^{n-k}(k+1).
$$

Split $$k+1$$ into $$k$$ and $$1$$:

$$
S=
\sum_{k=0}^{n}\binom{n}{k}3^{k}2^{n-k}k
+
\sum_{k=0}^{n}\binom{n}{k}3^{k}2^{n-k}.
$$

The second sum is a direct binomial expansion:

$$
\sum_{k=0}^{n}\binom{n}{k}3^{k}2^{n-k}=(3+2)^n=5^n.
$$

For the first sum, use

$$
k\binom{n}{k}=n\binom{n-1}{k-1}.
$$

Then

$$
\sum_{k=0}^{n}\binom{n}{k}3^{k}2^{n-k}k
=
\sum_{k=1}^{n}n\binom{n-1}{k-1}3^k2^{n-k}.
$$

Factor out $$3n$$:

$$
=3n\sum_{k=1}^{n}\binom{n-1}{k-1}3^{k-1}2^{n-k}.
$$

Let $$j=k-1$$. Then

$$
3n\sum_{j=0}^{n-1}\binom{n-1}{j}3^j2^{n-1-j}
=3n(3+2)^{n-1}
=3n5^{n-1}.
$$

Therefore

$$
S=3n5^{n-1}+5^n
=5^{n-1}(3n+5).
$$

So

$$
\boxed{\sum_{k=0}^{n}\binom{n}{k}3^{k}2^{n-k}(k+1)=5^{n-1}(3n+5)}.
$$

</div>

<div class="theorem-box">

#### Solution 16

For part (A), start with

$$
G(x)=F_0+F_1x+F_2x^2+F_3x^3+\cdots.
$$

Compute

$$
xG(x)=F_0x+F_1x^2+F_2x^3+\cdots
$$

and

$$
x^2G(x)=F_0x^2+F_1x^3+F_2x^4+\cdots.
$$

Then

$$
G(x)-xG(x)-x^2G(x)
$$

has constant term $$F_0=0$$, coefficient of $$x$$ equal to $$F_1=1$$, and for every $$n\ge 2$$ the coefficient of $$x^n$$ is

$$
F_n-F_{n-1}-F_{n-2}=0.
$$

Thus

$$
G(x)-xG(x)-x^2G(x)=x.
$$

Factor:

$$
G(x)(1-x-x^2)=x.
$$

Therefore

$$
\boxed{G(x)=\frac{x}{1-x-x^2}}.
$$

For part (B), use

$$
\alpha+\beta=1
\qquad\text{and}\qquad
\alpha\beta=-1.
$$

Then

$$
(1-\alpha x)(1-\beta x)
=1-(\alpha+\beta)x+\alpha\beta x^2
=1-x-x^2.
$$

So

$$
G(x)=\frac{x}{(1-\alpha x)(1-\beta x)}.
$$

Now, just solve out for the constants. We claim that

$$
G(x)=\frac{1}{\sqrt5}
\left(
\frac{1}{1-\alpha x}
-
\frac{1}{1-\beta x}
\right).
$$

Check this by combining the fractions (or derive it algebraically which is a bit tedious):

$$
\frac{1}{\sqrt5}
\left(
\frac{1}{1-\alpha x}
-
\frac{1}{1-\beta x}
\right)
=
\frac{1}{\sqrt5}\cdot
\frac{(1-\beta x)-(1-\alpha x)}
{(1-\alpha x)(1-\beta x)}.
$$

The numerator simplifies:

$$
(1-\beta x)-(1-\alpha x)
=(\alpha-\beta)x.
$$

Since

$$
\alpha-\beta=\sqrt5,
$$

we get

$$
\frac{1}{\sqrt5}\cdot
\frac{(\alpha-\beta)x}
(1-\alpha x)(1-\beta x)
=
\frac{x}{(1-\alpha x)(1-\beta x)}.
$$

Thus

$$
\boxed{
G(x)=\frac{1}{\sqrt5}
\left(
\frac{1}{1-\alpha x}
-
\frac{1}{1-\beta x}
\right)
}.
$$

For part (C), use the geometric series formula:

$$
\frac{1}{1-\alpha x}=\sum_{n=0}^{\infty}\alpha^nx^n
$$

and

$$
\frac{1}{1-\beta x}=\sum_{n=0}^{\infty}\beta^nx^n.
$$

Therefore

$$
G(x)
=
\frac{1}{\sqrt5}
\left(
\sum_{n=0}^{\infty}\alpha^nx^n
-
\sum_{n=0}^{\infty}\beta^nx^n
\right).
$$

Combine the sums:

$$
G(x)=
\sum_{n=0}^{\infty}
\frac{\alpha^n-\beta^n}{\sqrt5}x^n.
$$

But by definition,

$$
G(x)=\sum_{n=0}^{\infty}F_nx^n.
$$

Matching coefficients of $$x^n$$ gives

$$
\boxed{F_n=\frac{\alpha^n-\beta^n}{\sqrt5}}.
$$

</div>
