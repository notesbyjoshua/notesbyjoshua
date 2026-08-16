---
title: "Unit 3: Functions"
description: "AP Precalculus notes on functions, domain and range, transformations, inverses, composition, piecewise functions, and modeling."
sidebar:
  order: 2
---

---

## Definition of a Function

A **function** assigns each input exactly **one** output. If $$f$$ is a function and $$x$$ is an input, then $$f(x)$$ is the output.

The **domain** is the set of all allowed inputs. The **range** is the set of all outputs the function actually produces.

For example,

$$
f(x)=x^2+4x=x(x+4)
$$

has domain $$(-\infty,\infty)$$ because every real number can be substituted. To find the range, complete the square:

$$
f(x)=x^2+4x=(x+2)^2-4.
$$

Since $$(x+2)^2\ge 0$$, the smallest possible value is $$-4$$. Therefore,

$$
\text{range}=[-4,\infty).
$$

---

## Domain and Range

### Finding Domains

Most domain work comes from asking what operations are legal.

- Denominators cannot be $$0$$.
- Even roots (e.g. square roots) require the inside expression to be nonnegative.
- Logarithms require the input to be positive.
- Contextual functions like parametrics may have extra restrictions, such as time $$t\ge 0$$ or length $$x>0$$.

Always keep track of domain restrictions, and the legal domain is everything that is not part of the domain restriction.

---

### Finding Ranges

The range is often harder than the domain because it asks what output values are possible.

:::strategy
- Graphing the function
- Rewriting the formula by completing the square
- finding the inverse function's domain
- using known parent-function behavior and transformations
:::

<div class="theorem-box">

**Example.** Find the domain and range of

$$
g(x)=\frac{\sqrt{x^2+4x}}{x+2}.
$$

For the domain, first use the square-root restriction:

$$
x^2+4x\ge 0.
$$

Factor:

$$
x(x+4)\ge 0.
$$

Using a sign chart,

$$
x\le -4
\quad\text{or}\quad
x\ge 0.
$$

The denominator also cannot be $$0$$, so $$x\ne -2$$. But $$x=-2$$ is not in the radical domain anyway, so it does not change the answer:

$$
\text{domain}=(-\infty,-4]\cup[0,\infty).
$$

For the range, rewrite the expression inside the radical by completing the square:

$$
x^2+4x=(x+2)^2-4.
$$

So

$$
g(x)=\frac{\sqrt{(x+2)^2-4}}{x+2}.
$$

Let $$y=g(x)$$. Then

$$
y=\frac{\sqrt{(x+2)^2-4}}{x+2}.
$$

Square both sides:

$$
y^2
=\frac{(x+2)^2-4}{(x+2)^2}
=1-\frac{4}{(x+2)^2}.
$$

From the domain, $$x\le -4$$ or $$x\ge 0$$, so

$$
\lvert x+2\rvert\ge 2.
$$

That means

$$
0\le \frac{4}{(x+2)^2}\le 1,
$$

so

$$
0\le y^2<1.
$$

Therefore $$-1<y<1$$. The value $$y=0$$ occurs at $$x=-4$$ and $$x=0$$, while $$y=1$$ and $$y=-1$$ are approached but never reached. Therefore,

$$
range=(-1,1).
$$

</div>

---

## Graphs of Functions

A graph represents a function exactly when each $$x$$-value has at most one $$y$$-value. This is tested with the **vertical line test**.

If any vertical line intersects the graph more than once, the graph is not a function. A circle, for example, is not the graph of $$y$$ as a function of $$x$$ because many vertical lines hit it twice.

Six parent functions are especially useful to recognize:

- $$y= \lvert x \rvert$$: absolute value, V-shaped.
- $$y = x^2$$: quadratic, a parabola opening upward.
- $$y = x^3$$: cubic, increasing through the origin, kind of doing a wiggly motion.
- $$y=\frac{1}{x}$$: reciprocal, a rotated hyperbola with asymptotes $$x=0$$ and $$y=0$$.
- $$y=\sqrt{x}$$: square-root curve, starting at $$(0,0)$$ and moving right.

Knowing these shapes makes it much easier to sketch transformed functions quickly, and later we will talk about transformations so that most types of problems can be quickly visualized. A chart is shown below, with many of the functions appearing later (exponential, logarithmic, and trig).

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\pgfplotsset{pf/.style={scale only axis, width=2.7cm, height=2cm, axis lines=middle,
  xtick=\empty, ytick=\empty, enlargelimits=0.12, axis line style={gray!60},
  anchor=north west, title style={font=\footnotesize, yshift=-2pt}, clip=true}}
\begin{tikzpicture}
\begin{axis}[pf, at={(0cm,0cm)}, title={Linear $x$}, domain=-2:2] \addplot[blue,thick,samples=2]{x}; \end{axis}
\begin{axis}[pf, at={(4.3cm,0cm)}, title={Quadratic $x^2$}, domain=-2:2] \addplot[blue,thick,samples=40]{x^2}; \end{axis}
\begin{axis}[pf, at={(8.6cm,0cm)}, title={Cubic $x^3$}, domain=-1.6:1.6] \addplot[blue,thick,samples=40]{x^3}; \end{axis}
\begin{axis}[pf, at={(12.9cm,0cm)}, title={Absolute $|x|$}, domain=-2:2] \addplot[blue,thick,samples=81]{abs(x)}; \end{axis}
\end{tikzpicture}
```

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\pgfplotsset{pf/.style={scale only axis, width=2.7cm, height=2cm, axis lines=middle,
  xtick=\empty, ytick=\empty, enlargelimits=0.12, axis line style={gray!60},
  anchor=north west, title style={font=\footnotesize, yshift=-2pt}, clip=true}}
\begin{tikzpicture}
\begin{axis}[pf, at={(0cm,0cm)}, title={Reciprocal $1/x$}, domain=-3:3, restrict y to domain=-4:4, samples=120] \addplot[blue,thick]{1/x}; \end{axis}
\begin{axis}[pf, at={(4.3cm,0cm)}, title={Exponential $e^x$}, domain=-2:1.6] \addplot[blue,thick,samples=40]{exp(x)}; \end{axis}
\begin{axis}[pf, at={(8.6cm,0cm)}, title={Logarithmic $\ln x$}, domain=0.12:4, samples=60] \addplot[blue,thick]{ln(x)}; \end{axis}
\begin{axis}[pf, at={(12.9cm,0cm)}, title={Square root $\sqrt{x}$}, domain=0:4, samples=50] \addplot[blue,thick]{sqrt(x)}; \end{axis}
\end{tikzpicture}
```

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\pgfplotsset{pf/.style={scale only axis, width=2.7cm, height=2cm, axis lines=middle,
  xtick=\empty, ytick=\empty, enlargelimits=0.12, axis line style={gray!60},
  anchor=north west, title style={font=\footnotesize, yshift=-2pt}, clip=true}}
\begin{tikzpicture}
\begin{axis}[pf, at={(0cm,0cm)}, title={Sine $\sin x$}, domain=-6.5:6.5, samples=120] \addplot[blue,thick]{sin(deg(x))}; \end{axis}
\begin{axis}[pf, at={(4.3cm,0cm)}, title={Cosine $\cos x$}, domain=-6.5:6.5, samples=120] \addplot[blue,thick]{cos(deg(x))}; \end{axis}
\begin{axis}[pf, at={(8.6cm,0cm)}, title={Tangent $\tan x$}, domain=-4.5:4.5, restrict y to domain=-4:4, samples=220] \addplot[blue,thick]{tan(deg(x))}; \end{axis}
\end{tikzpicture}
```

---

## Piecewise Functions

A **piecewise function** uses different formulas on different parts of its domain. The rule depends on which interval contains the input.

For example,

$$
f(x)=
\begin{cases}
\dfrac{1}{x}, & x>2,\\[4pt]
\dfrac{1}{2}x^2, & x\le 2.
\end{cases}
$$

To graph it, graph each formula only on the part of the domain where it applies. Endpoints matter:

- use a closed dot when the endpoint is included,
- use an open dot when the endpoint is not included.

At $$x=2$$, the second rule applies because $$x\le 2$$. Therefore,

$$
f(2)=\frac{1}{2}(2)^2=2.
$$

The reciprocal rule would approach $$1/2$$ near $$x=2$$ from the right, but it does not include $$x=2$$.

---

## Implicit Functions

Some equations describe relationships between $$x$$ and $$y$$ without directly solving for $$y$$. These are called **implicit equations**. For example,

$$
x^2+y^2=1
$$

describes a circle, not a function of $$x$$, because many $$x$$-values have two possible $$y$$-values.

Sometimes an implicit equation can be solved for $$y$$, but it may produce multiple branches. If solving gives

$$
y=\pm\sqrt{1-x^2},
$$

then the plus branch is the top half of the circle and the minus branch is the bottom half. Each branch is a function, but the whole circle is not.

When an equation is complicated but quadratic in $$y$$, it can sometimes be rearranged into

$$
ay^2+by+c=0,
$$

where $$a$$, $$b$$, and $$c$$ may contain $$x$$. Then the quadratic formula gives

$$
y=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.
$$

The $$\pm$$ is a warning that the relation may split into two separate function branches.

<div class="theorem-box">

**Example.** Find the explicit forms for the relation

$$
(x^2+y^2)^2-8x(x^2-3y^2)+18(x^2+y^2)=27.
$$

This looks intimidating, but the trick is to notice that only even powers of $$y$$ appear. Let

$$
u=y^2.
$$

Then rewrite the equation in terms of $$u$$:

$$
(x^2+u)^2-8x(x^2-3u)+18(x^2+u)=27.
$$

Expand and collect powers of $$u$$:

$$
u^2+(2x^2+24x+18)u+x^4-8x^3+18x^2-27=0.
$$

Now this is quadratic in $$u$$. Its discriminant simplifies nicely:

$$
(2x^2+24x+18)^2-4(x^4-8x^3+18x^2-27)=16(2x+3)^3.
$$

Using the quadratic formula,

$$
u=-(x^2+12x+9)\pm 2\sqrt{(2x+3)^3}.
$$

Since $$u=y^2$$,

$$
y^2=-(x^2+12x+9)\pm 2\sqrt{(2x+3)^3}.
$$

Finally, take the square root of both sides. This gives four possible explicit branches:

$$
y=\sqrt{-(x^2+12x+9)+2\sqrt{(2x+3)^3}},
$$

$$
y=-\sqrt{-(x^2+12x+9)+2\sqrt{(2x+3)^3}},
$$

$$
y=\sqrt{-(x^2+12x+9)-2\sqrt{(2x+3)^3}},
$$

$$
y=-\sqrt{-(x^2+12x+9)-2\sqrt{(2x+3)^3}}.
$$

The first two branches come from

$$
-(x^2+12x+9)+2\sqrt{(2x+3)^3}\ge 0,
$$

which gives

$$
-\frac{3}{2}\le x\le 3.
$$

The last two branches come from

$$
-(x^2+12x+9)-2\sqrt{(2x+3)^3}\ge 0,
$$

which gives

$$
-\frac{3}{2}\le x\le -1.
$$

So the original relation is not one function of $$x$$. It is made from multiple explicit branches, with the outer $$\pm$$ giving the top and bottom halves.

</div>

---

## Average Rate of Change

The **average rate of change** of $$f$$ on $$[a,b]$$ is the slope of the secant line through $$(a,f(a))$$ and $$(b,f(b))$$:

$$
\frac{\Delta y}{\Delta x}
=\frac{f(b)-f(a)}{b-a}.
$$

If the interval is written as $$[x,x+h]$$, then the same idea becomes the **difference quotient**:

$$
\frac{f(x+h)-f(x)}{h}.
$$

This measures the average rate of change from $$x$$ to $$x+h$$.

<div class="theorem-box">

**Example.** Let

$$
f(x)=2x^2-x+1.
$$

Find the average rate of change from $$a$$ to $$x$$:

$$
\frac{f(x)-f(a)}{x-a}
=\frac{(2x^2-x+1)-(2a^2-a+1)}{x-a}.
$$

Simplify the numerator:

$$
2x^2-x+1-2a^2+a-1
=2(x^2-a^2)-(x-a).
$$

Factor:

$$
2(x-a)(x+a)-(x-a)
=(x-a)(2x+2a-1).
$$

So

$$
\frac{f(x)-f(a)}{x-a}=2x+2a-1,\qquad x\ne a.
$$

For the difference quotient of the same function,

$$
\frac{f(x+h)-f(x)}{h}
=\frac{2(x+h)^2-(x+h)+1-(2x^2-x+1)}{h}.
$$

After expanding and canceling,

$$
\frac{f(x+h)-f(x)}{h}
=4x+2h-1.
$$

If $$h$$ becomes very small, this approaches $$4x-1$$, which equals to the functions derivative (a calculus topic).

</div>

---

## Transformations of Functions

Transformations move or change a graph while preserving the basic shape of the parent function.

If $$c>0$$:

- $$y=f(x)+c$$ shifts the graph up $$c$$ units.
- $$y=f(x)-c$$ shifts the graph down $$c$$ units.
- $$y=f(x+c)$$ shifts the graph left $$c$$ units.
- $$y=f(x-c)$$ shifts the graph right $$c$$ units.
- $$y=-f(x)$$ reflects the graph over the $$x$$-axis.
- $$y=f(-x)$$ reflects the graph over the $$y$$-axis.

The input changes happen in the opposite direction from how they look. For example, $$f(x-3)$$ shifts right $$3$$ because the inside of the function reaches the old input value when $$x$$ is $$3$$ larger.

### Absolute value transformations

For $$f(x)= \lvert x \rvert$$, the vertex form

$$
y=a\lvert x-h\rvert+k
$$

has vertex $$(h,k)$$.

- $$a>0$$ opens upward.
- $$a<0$$ opens downward.
- Larger $$\lvert a \rvert$$ makes the graph steeper.
- Smaller $$\lvert a \rvert$$ makes the graph wider.

### Quadratic transformations

For $$f(x)=x^2$$, the vertex form

$$
y=a(x-h)^2+k
$$

has vertex $$(h,k)$$ and axis of symmetry $$x=h$$.

- $$a>0$$ opens upward.
- $$a<0$$ opens downward.
- Larger $$\lvert a \rvert$$ makes the parabola narrower.
- Smaller $$\lvert a \rvert$$ makes the parabola wider.

### Square-root transformations

For

$$
y=a\sqrt{x-h}+k,
$$

the starting point is $$(h,k)$$. The basic domain is $$x\ge h$$ unless there is a reflection inside the radical. All transformations behave the same except it changes the domain/range of the radical.

For example,

$$
f(x)=\sqrt{-x+3}
$$

requires

$$
-x+3\ge 0
\quad\Longrightarrow\quad
x\le 3.
$$

So the graph starts at $$(3,0)$$ and extends left.

---

## Combining Functions

Functions can be combined using arithmetic operations:

$$
(f+g)(x)=f(x)+g(x)
$$

$$
(f-g)(x)=f(x)-g(x)
$$

$$
(fg)(x)=f(x)g(x)
$$

$$
\left(\frac{f}{g}\right)(x)=\frac{f(x)}{g(x)},\qquad g(x)\ne 0.
$$

The domain of a combined function is the intersection of the domains of the pieces, with any extra restrictions from the operation. For a quotient, the denominator must not be $$0$$.

For example, if

$$
f(x)=\frac{1}{x^2-2},
\qquad
g(x)=\sqrt{x},
\qquad
h(x)=\frac{1}{x},
$$

then

$$
\text{domain of }f: x\ne \pm\sqrt{2},
$$

$$
\text{domain of }g: x\ge 0,
$$

$$
\text{domain of }h: x\ne 0.
$$

Any arithmetic combination must respect the restrictions from all functions involved.

---

## Composition of Functions

The composition $$f\circ g$$ means "apply $$g$$ first, then apply $$f$$":

$$
(f\circ g)(x)=f(g(x)).
$$

Composition is not usually commutative, so $$f(g(x))$$ and $$g(f(x))$$ are usually different.

<div class="theorem-box">

**Example.** Let

$$
f(x)=\frac{1}{x^2-2}
\qquad\text{and}\qquad
g(x)=\sqrt{x}.
$$

Then

$$
(f\circ g)(x)=f(\sqrt{x})
=\frac{1}{(\sqrt{x})^2-2}
=\frac{1}{x-2}.
$$

The domain must satisfy both conditions:

1. $$x$$ must be in the domain of $$g$$, so $$x\ge 0$$.
2. $$g(x)$$ must be in the domain of $$f$$, so $$(\sqrt{x})^2-2\ne 0$$, meaning $$x\ne 2$$.

Therefore,

$$
\text{domain}=[0,2)\cup(2,\infty).
$$

</div>

For

$$
(g\circ f)(x)=g(f(x)),
$$

the domain would be different because $$f$$ is the inside function and the output of $$f$$ must be allowed inside the square root.

---

## Writing a Function as a Composition

Sometimes a complicated formula can be understood as one function inside another.

For example,

$$
F(x)=(3x-2)^2
$$

can be written as

$$
F(x)=h(g(x)),
$$

where

$$
g(x)=3x-2
\qquad\text{and}\qquad
h(x)=x^2.
$$

Another valid decomposition is

$$
g(x)=3x
\qquad\text{and}\qquad
h(x)=(x-2)^2.
$$

There may be more than one correct way to express a function as a composition.

---

## Inverse Functions

Two functions $$f$$ and $$g$$ are **inverse functions** if they undo each other:

$$
f(g(x))=x
$$

for every $$x$$ in the domain of $$g$$, and

$$
g(f(x))=x
$$

for every $$x$$ in the domain of $$f$$. *BOTH* conditions must be sastisfied!

For example, let

$$
f(x)=3x-2
\qquad\text{and}\qquad
g(x)=\frac{1}{3}x+\frac{2}{3}.
$$

Then

$$
f(g(x))=3\left(\frac{1}{3}x+\frac{2}{3}\right)-2=x+2-2=x,
$$

and

$$
g(f(x))=\frac{1}{3}(3x-2)+\frac{2}{3}
=x-\frac{2}{3}+\frac{2}{3}
=x.
$$

So $$f$$ and $$g$$ are inverses.

:::warning
The notation $$f^{-1}(x)$$ means "the inverse function of $$f$$." It does **not** mean reciprocal. In other words, $$f^{-1}(x)\ne \frac{1}{f(x)}$$ in general. The expression $$x^{-1}$$ means $$1/x$$, but $$f^{-1}$$ means an inverse function. Sometimes you will see the inverse written as $$fp$$, but this can be confused with the derivative notation (used in calculus) and is seldom used.
:::

<div class="theorem-box">

**Extension.** Prove that the graph of $$f(x)$$ and $$f^{-1}(x)$$ are reflections of each other over the line $$y=x$$.

</div>

---

## Finding an Inverse

:::strategy
1. Write $$y=f(x)$$.
2. Switch $$x$$ and $$y$$.
3. Solve for $$y$$.
4. Replace $$y$$ with $$f^{-1}(x)$$.
:::

It is very improtant to note that the domain of $$f$$ becomes the range of $$f^{-1}$$, and the range of $$f$$ becomes the domain of $$f^{-1}$$.

<div class="theorem-box">

**Example.** Find the inverse of

$$
f(x)=\frac{2x+1}{3x-4}.
$$

Start with

$$
y=\frac{2x+1}{3x-4}.
$$

Switch $$x$$ and $$y$$:

$$
x=\frac{2y+1}{3y-4}.
$$

Solve for $$y$$:

$$
x(3y-4)=2y+1
$$

$$
3xy-4x=2y+1
$$

$$
3xy-2y=4x+1
$$

$$
y(3x-2)=4x+1
$$

$$
y=\frac{4x+1}{3x-2}.
$$

Therefore,

$$
f^{-1}(x)=\frac{4x+1}{3x-2}.
$$

</div>

---

## Injective, Surjective, and Bijective Functions

A function has an inverse that is also a function only if the original function is **one-to-one**, also called **injective**.

A function is **injective** if different inputs always produce different outputs. Equivalently, every output that the function actually hits comes from exactly one input. In symbols,

$$
f(a)=f(b)\quad\Longrightarrow\quad a=b.
$$

Graphically, injective functions pass the **horizontal line test**: every horizontal line intersects the graph at most once.

A function is **surjective**, or **onto**, if every element of the target set is hit by the function. In other words, for every allowed output $$y$$ in the codomain, there is at least one input $$x$$ in the domain such that

$$
f(x)=y.
$$

Surjectivity depends on the codomain you choose. For example,

$$
f(x)=x^2
$$

is not surjective as a function from $$\mathbb{R}$$ to $$\mathbb{R}$$, because negative outputs are never reached. But it is surjective as a function from $$\mathbb{R}$$ to $$[0,\infty)$$.

A function is **bijective** if it is both injective and surjective. This means every output in the codomain is hit exactly once. Bijective functions have inverse functions that undo them perfectly on the stated domain and codomain.

For example,

$$
y=x^2
$$

is a function because it passes the vertical line test, but it is not injective on $$\mathbb{R}$$ because it fails the horizontal line test. Both $$x=2$$ and $$x=-2$$ give the same output $$4$$.

To make $$y=x^2$$ injective, restrict the domain. For example, on $$x\ge 0$$,

$$
f(x)=x^2
$$

is injective. If we define it as a function from $$[0,\infty)$$ to $$[0,\infty)$$, then it is also surjective, so it is bijective. Its inverse is

$$
f^{-1}(x)=\sqrt{x}.
$$

On $$x\le 0$$, its inverse would instead be

$$
f^{-1}(x)=-\sqrt{x}.
$$

Domain restrictions are how we choose one branch when a relation would otherwise give more than one output.

A quick map of bijectivity, surjectivity, and injectivity is shown below:

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, scale=0.55, transform shape,
  ar/.style={->, thick, gray!40!black, shorten >=2pt, shorten <=2pt},
  lbl/.style={font=\bfseries\small}]
% Injection
\begin{scope}[shift={(0,0)}]
  \node[lbl] at (2,2.2) {Injection (one-to-one)};
  \draw[gray] (0,0) ellipse (0.8 and 1.6);
  \draw[gray] (4,0) ellipse (0.8 and 1.6);
  \foreach \y in {1,0,-1} \fill[orange] (0,\y) circle (2.6pt);
  \foreach \y in {1.2,0.4,-0.4,-1.2} \fill[green!60!black] (4,\y) circle (2.6pt);
  \draw[ar] (0,1) -- (4,1.2);
  \draw[ar] (0,0) -- (4,0.4);
  \draw[ar] (0,-1) -- (4,-1.2);
\end{scope}
% Surjection
\begin{scope}[shift={(6.6,0)}]
  \node[lbl] at (2,2.2) {Surjection (onto)};
  \draw[gray] (0,0) ellipse (0.8 and 1.6);
  \draw[gray] (4,0) ellipse (0.8 and 1.6);
  \foreach \y in {1.2,0.4,-0.4,-1.2} \fill[orange] (0,\y) circle (2.6pt);
  \foreach \y in {1,0,-1} \fill[green!60!black] (4,\y) circle (2.6pt);
  \draw[ar] (0,1.2) -- (4,1);
  \draw[ar] (0,0.4) -- (4,0);
  \draw[ar] (0,-0.4) -- (4,0);
  \draw[ar] (0,-1.2) -- (4,-1);
\end{scope}
% Bijection
\begin{scope}[shift={(13.2,0)}]
  \node[lbl] at (2,2.2) {Bijection (one-to-one and onto)};
  \draw[gray] (0,0) ellipse (0.8 and 1.6);
  \draw[gray] (4,0) ellipse (0.8 and 1.6);
  \foreach \y in {1,0,-1} \fill[orange] (0,\y) circle (2.6pt);
  \foreach \y in {1,0,-1} \fill[green!60!black] (4,\y) circle (2.6pt);
  \draw[ar] (0,1) -- (4,1);
  \draw[ar] (0,0) -- (4,0);
  \draw[ar] (0,-1) -- (4,-1);
\end{scope}
\end{tikzpicture}
```

---

## Practice

::::problem
1. Find the domain and range of $$f(x)=\frac{\sqrt{9-(x-2)^2}}{x-2}$$.

:::solution
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
:::
::::

::::problem
2. Let $$f(x)=\begin{cases}x^2-4x+1, & x<1,\\ax+b, & 1\le x<4,\\\sqrt{x+c}, & x\ge 4.\end{cases}$$. Find $$a$$, $$b$$, and $$c$$ so that the pieces connect at $$x=1$$ and $$x=4$$, and so that the middle piece has average rate of change $$3$$ on $$[1,4]$$.

:::solution
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
:::
::::

::::problem
3. Find the explicit form(s) for the relation $$(x^2+y^2)^2=4(x^2-y^2)$$.

:::solution
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
:::
::::

::::problem
4. Find the explicit form(s) for the relation $$y^2-2xy+x^2=4x+4$$. State the domain of each branch.

:::solution
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
:::
::::

::::problem
5. Let $$f(x)=(x-3)^2+2$$ with domain $$x\ge 3$$. Find $$f^{-1}(x)$$, and state the domain and range of $$f^{-1}$$.

:::solution
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
:::
::::

::::problem
6. Let $$f:[-2,\infty)\to[-4,\infty)$$ be defined by $$f(x)=(x+2)^2-4$$. Determine whether $$f$$ is injective, surjective, bijective, or none.

:::solution
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
:::
::::

::::problem
7. Simplify the difference quotient for $$f(x)=\frac{2}{x-1}$$. That is, simplify $$\frac{f(x+h)-f(x)}{h}.$$

:::solution
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
:::
::::

::::problem
8. The graph of $$y=f(x)$$ has domain $$[-4,6]$$ and range $$[-2,5]$$. Find the domain and range of $$g(x)=-3f(\frac{x-2}{x+1})+7$$.

:::solution
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
:::
::::

::::problem
9. Find $$f^{-1}(3)$$ given that $$f(x)=\frac{3x+1}{2x+f(x)}$$.

:::solution
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
:::
::::

::::problem
10. Let $$h(x)=\sqrt{4-\lvert x-1 \rvert}.$$ Find the domain and range of $$h$$, and describe the transformations from $$y=\sqrt{x}$$ as clearly as possible.

:::solution
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
:::
::::

::::problem
11. Let $$f(x)=\sqrt{2x+5}$$ and $$g(x)=\frac{1}{x-3}$$. Find formulas and domains for $$(f\circ g)(x)$$ and $$(g\circ f)(x)$$.

:::solution
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
:::
::::

::::problem
12. Let $$f(x)=\lvert x-2\rvert+1$$. If the domain is restricted to $$[2,\infty)$$ and the codomain is $$[1,\infty)$$, determine whether $$f$$ is bijective and find $$f^{-1}(x)$$. Then explain what goes wrong if the domain is all real numbers.

:::solution
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
:::
::::

::::problem
13. Let $$f(x)=\begin{cases}2x+a, & x<1,\\x^2+b, & 1\le x<3,\\cx-1, & x\ge 3.\end{cases}$$ Find $$a$$, $$b$$, and $$c$$ so that $$f$$ is continuous everywhere and $$f(0)=5$$.

:::solution
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
:::
::::

::::problem
14. Suppose $$f$$ is an odd function with domain $$[-5,5]$$, range $$[-3,3]$$, and $$f(2)=-1$$. Define $$g(x)=2f(x-1)-4$$. Find the domain and range of $$g$$, and find $$g(3)$$ and $$g(-1)$$.

:::solution
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
:::
::::

::::problem
15. Suppose $$f:A\to B$$ and $$g:B\to C$$. Prove that if $$f$$ and $$g$$ are both injective, then $$g\circ f$$ is injective. Also prove that if $$g\circ f$$ is surjective onto $$C$$, then $$g$$ must be surjective onto $$C$$.

:::solution
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
:::
::::

::::problem
16. (Bonus, Cauchy's Functional Equation)

   Consider a function $$\mathbb{Q} \longrightarrow \mathbb{Q}$$ (basically taking rational inputs and giving rational outputs) such that $$f(x+y)=f(x)+f(y)$$ (basically for any two rational numbers, this equation holds true for $$f(x)$$).

   (A) Show that $$f(0) = 0$$ and $$f(-x) = -f(x)$$. What does this show about $$f(x)$$?

   (B) Prove that $$f(nx) = nf(x)$$ for all $$n \in \mathbb{Z}$$ (for all integer $$n$$).

   (C) Prove that $$f(\frac{x}{n}) = \frac{f(x)}{n}$$.

   (D) Determine all such functions $$f(x)$$ that satisfy Cauchy's Functional Equation. Remember you not only need to find all such solutions, but prove that each one is a valid solution to the equation.

   (E) The solution in part (D) is the only solution for the rationals, but there exist infinitely more solutions for the reals! Why can't your proof in steps (A) - (D) extend to real numbers?

:::solution
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
:::
::::
