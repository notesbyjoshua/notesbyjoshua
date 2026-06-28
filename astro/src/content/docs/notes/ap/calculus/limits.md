---
title: "Unit 1: Limits and Continuity"
sidebar:
  order: 1
---

## Definition of a Limit

<div class="theorem-box">

**Definition.** A limit is defined as

$$
\lim_{x \to a} f(x) = L
$$

if we can make $$f(x)$$ as close to $$L$$ as we want by taking $$x$$ sufficiently close to $$a$$, with $$x \ne a$$.

</div>

This is about nearby behavior, not direct substitution. It is possible for:

- the limit to exist while $$f(a)$$ is undefined,
- the limit to exist while $$f(a) \ne L$$,
- the limit to fail even though $$f(a)$$ exists.

A quick check is direct substitution. If substituting $$x = a$$ gives a finite number and the expression is defined there, the limit is usually that number.
 
<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\lim_{x\to 2}\bigl(3x^2-1\bigr).$$

This function is a polynomial, and polynomials are continuous everywhere. Therefore the limit is equal to the function value at the point:

$$
3(2)^2-1 = 11.
$$

So the limit is $$11$$.

</div>

---

## One-sided and two-sided limits

A one-sided limit describes the value approached from one direction only.

- Left-hand limit: $$\lim_{x \to a^-} f(x)$$
- Right-hand limit: $$\lim_{x \to a^+} f(x)$$

A two-sided limit exists exactly when both one-sided limits exist and agree:

$$
\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L.
$$

If the left-hand and right-hand limits disagree, then the two-sided limit does not exist.

Common reasons a limit fails to exist:

- Jump discontinuity,
- Vertical asymptote with unbounded behavior,
- Oscillation, such as $$\sin(1/x)$$ near $$x = 0$$.

<div class="theorem-box">

**Example.** Let $$f(x)=\begin{cases}x,&x<0,\\2x+1,&x\ge0.\end{cases}$$ Find the left-hand and right-hand limits as $$x\to0$$.

For $$x<0$$, we have $$f(x)=x$$, so

$$
\lim_{x\to0^-}f(x)=\lim_{x\to0^-}x=0.
$$

For $$x\ge0$$, we have $$f(x)=2x+1$$, so

$$
\lim_{x\to0^+}f(x)=\lim_{x\to0^+}(2x+1)=1.
$$

Since the left-hand and right-hand limits differ, the two-sided limit does not exist.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, xmin=-3, xmax=3, ymin=-3, ymax=7,
  xtick={-2,-1,0,1,2}, ytick={-2,0,1,3,5,7},
  grid=both, grid style={gray!18},
  width=8.5cm, height=5.8cm,
  xlabel=$x$, ylabel=$f(x)$,
]
\addplot[blue, very thick, domain=-3:0, samples=2] {x};
\addplot[blue, very thick, domain=0:3, samples=2] {2*x+1};
\addplot[only marks, mark=o, mark size=2pt, blue, thick] coordinates {(0,0)};
\addplot[only marks, mark=*, mark size=2pt, blue] coordinates {(0,1)};
\node[blue, anchor=north east] at (axis cs:-0.15,0.15) {$\lim_{x\to0^-}f(x)=0$};
\node[blue, anchor=south west] at (axis cs:0.15,1.15) {$\lim_{x\to0^+}f(x)=1$};
\end{axis}
\end{tikzpicture}
```
// the lines are too thick and remove the labels since they overlap with the graph

</div>

---

## Limit laws and direct substitution

If $$\lim_{x \to a} f(x) = L$$ and $$\lim_{x \to a} g(x) = M$$, then:

$$
\lim_{x \to a} (f(x) \pm g(x)) = L \pm M,
$$

$$
\lim_{x \to a} (f(x)g(x)) = LM,
$$

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M}, \qquad M \ne 0,
$$

$$
\lim_{x \to a} [f(x)]^n = L^n.
$$

For polynomials and rational functions, direct substitution works whenever the denominator is nonzero. If substitution gives a finite number, the limit is usually that number.

<div class="theorem-box">

**Proof (Limit Laws).** A limit statement means the function values can be forced arbitrarily close to a target value. If $$f(x)$$ is close to $$L$$ and $$g(x)$$ is close to $$M$$, then their sum is close to $$L + M$$, their product is close to $$LM$$, and their quotient is close to $$L/M$$ as long as $$M \ne 0$$.

A key idea is that the limit might not be exactly at the input value, but the function values can get arbitrarily close to the target. In AP Calculus, we often think of the small error as $$\varepsilon$$, which becomes negligible when the limit exists.

</div>

<div class="theorem-box">

**Example.** Suppose $$\lim_{x\to 2}f(x)=3$$ and $$\lim_{x\to 2}g(x)=-1$$. Find

$$
\lim_{x\to2}\frac{2f(x)-g(x)}{[f(x)]^2}.
$$

Using limit laws, substitute the known limits:

$$
\frac{2\cdot 3-(-1)}{3^2} = \frac{7}{9}.
$$

Therefore the limit equals $$\frac{7}{9}$$.

</div>

---

## Indeterminate forms and algebraic techniques

Direct substitution sometimes gives an indeterminate form, which means the algebraic structure must be simplified before the limit can be found. Common indeterminate forms include: $$0/0$$, $$\infty/\infty$$, $$0 \cdot \infty$$, $$\infty - \infty$$, $$1^\infty$$, $$0^0$$, and $$\infty^0$$.

In AP Calculus AB/BC, most of these are handled with algebra or L'Hôpital's Rule (Unit 4).

:::strategy{title="Solving indeterminate forms"}
There are many common ways to solve indeterminate forms in limits using algebra:

- Factor and cancel a common factor
- Multiply by a conjugate when radicals are involved
- Combine fractions into a single rational expression
- Use a known trig limit after rewriting the angle
- Divide by the dominant power of $$x$$ for limits at infinity
:::


Most AP limit work is about recognizing whether direct substitution works or whether the expression hides competing behavior.

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\lim_{x\to3}\frac{x^2-9}{x-3}.$$ 

Factor the numerator to expose the removable factor:

$$
\frac{x^2-9}{x-3}=\frac{(x-3)(x+3)}{x-3},\qquad x\ne3.
$$

Cancelling gives

$$
\frac{x^2-9}{x-3}=x+3\quad(x\ne3).
$$

Now take the limit of the simplified expression:

$$
\lim_{x\to3}(x+3)=6.
$$

Since the discontinuity is a removable discontinuity (a hole), the limit does existsince both sides approach the same value at $$x=3$$.

</div>

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\lim_{x\to0}\frac{\sqrt{x+1}-1}{x}.$$ 

Multiply by the conjugate to remove the radical from the numerator:

$$
\frac{\sqrt{x+1}-1}{x}=\frac{(\sqrt{x+1}-1)(\sqrt{x+1}+1)}{x(\sqrt{x+1}+1)}=\frac{x}{x(\sqrt{x+1}+1)}=\frac{1}{\sqrt{x+1}+1},\qquad x\ne0.
$$
// this part goes out of the page, please fix

Now evaluate the simplified limit:

$$
\lim_{x\to0}\frac{1}{\sqrt{x+1}+1}=\frac{1}{2}.
$$

</div>


:::warning
If you get a form that is NOT one of these you cannot do any operation to simplify it! For example, if the limit is $$\infty/3$$, it is not an indeterminate form.
:::

---

## Squeeze Theorem

<div class="theorem-box">

**Theorem (Squeeze Theorem).** If $$g(x) \le f(x) \le h(x)$$ for all $$x$$ near $$a$$, and

$$
\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L,
$$

then

$$
\lim_{x \to a} f(x) = L.
$$

</div>

<div class="theorem-box">

**Proof (Squeeze Theorem).** If $$g(x) \le f(x) \le h(x)$$ and both outside functions are forced close to $$L$$, then $$f(x)$$ has nowhere else to go. For inputs close enough to $$a$$, both $$g(x)$$ and $$h(x)$$ lie inside a tiny band around $$L$$. Since $$f(x)$$ is trapped between them, it must lie inside the same band.

</div>

<div class="theorem-box">

**Example.** Show that $$\displaystyle\lim_{x\to0}x\sin\frac{1}{x}=0.$$ 

The sine factor is bounded by $$-1\le\sin\frac{1}{x}\le1$$ for all nonzero $$x$$. Multiply through by $$\lvert x\rvert$$ to obtain

$$
-\lvert x\rvert \le x\sin\frac{1}{x} \le \lvert x\rvert.
$$

Since both outer bounds tend to $$0$$ as $$x\to0$$, the Squeeze Theorem gives

$$
\lim_{x\to0}x\sin\frac{1}{x}=0.
$$

</div>

---

## Important trig limits

Two key trig limits that appear often are:

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1,
$$

$$
\lim_{x \to 0} \frac{\tan x}{x} = 1.
$$

They are frequently used after rewriting a trig expression into a form that matches one of these limits. It is important to note that $$\cos x$$ is not a part of this because the limit of $$\lim_{x \to 0} \frac{\cos x}{x}$$ can be easily solved by plugging $$0$$ into the expression.

:::conditions
These two trig limits are valid only when the angle is measured in **radians**.
:::

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\lim_{x\to0}\frac{\sin(5x)}{x}.$$ 

Rewrite the expression to use the standard limit $$\lim_{u\to0}\frac{\sin u}{u}=1$$:

$$
\frac{\sin(5x)}{x}=5\cdot\frac{\sin(5x)}{5x}.
$$

As $$x\to0$$, the ratio $$\frac{\sin(5x)}{5x}\to1$$, so the limit equals $$5$$.

</div>

---

## Formal limit definition

For general purposes, the exact formal definition of the limit is not needed, but is good to know. The statement

$$
\lim_{x\to a}f(x)=L
$$

means that every small output tolerance around $$L$$ can be guaranteed by choosing a sufficiently small input window around $$a$$, excluding $$x=a$$ itself.

In symbols, for every $$\varepsilon>0$$, there is a $$\delta>0$$ such that

$$
0<\lvert x-a\rvert<\delta
\quad\Longrightarrow\quad
\lvert f(x)-L\rvert<\varepsilon.
$$

The AP course usually emphasizes the intuition rather than formal proof: limits are about controlling output closeness by controlling input closeness.

The formal definition is also useful for understanding why limit statements are stronger than a graph or table. A table can suggest that the output is approaching $$L$$, but an epsilon-delta proof says that every possible tolerance can be handled.

:::strategy{title="Basic epsilon-delta proof"}
1. Start with $$\lvert f(x)-L\rvert<\varepsilon$$.
2. Rewrite it until it is controlled by $$\lvert x-a\rvert$$.
3. Choose $$\delta$$ small enough to force the desired inequality.
4. Finish by showing that $$0<\lvert x-a\rvert<\delta$$ implies $$\lvert f(x)-L\rvert<\varepsilon$$.
:::

<div class="theorem-box">

**Example.** Use the epsilon definition to prove

$$
\lim_{x\to 3}(2x+1)=7.
$$

We want to make $$\lvert (2x+1)-7\rvert<\varepsilon$$. Simplify the expression:

$$
\lvert (2x+1)-7\rvert=\lvert 2x-6\rvert=2\lvert x-3\rvert.
$$

So it is enough to require

$$
2\lvert x-3\rvert<\varepsilon,
$$

which is the same as

$$
\lvert x-3\rvert<\frac{\varepsilon}{2}.
$$

Choose

$$
\delta=\frac{\varepsilon}{2}.
$$

Then whenever $$0<\lvert x-3\rvert<\delta$$, we have

$$
\lvert (2x+1)-7\rvert=2\lvert x-3\rvert<2\delta=2\cdot\frac{\varepsilon}{2}=\varepsilon.
$$

Therefore, by the formal definition,

$$
\lim_{x\to3}(2x+1)=7.
$$

</div>

---

## Limits at infinity and asymptotic behavior

We also study

$$
\lim_{x \to \infty} f(x), \qquad \lim_{x \to -\infty} f(x),
$$

or as more commonly known as end behavior.

For rational functions:

- If degree numerator < degree denominator: the limit is $$0$$,
- If the degrees are equal: the limit is the ratio of leading coefficients,
- If degree numerator > degree denominator: there is no finite horizontal asymptote (the function may have a slant or oblique asymptote).

For other common function families, compare long-run growth:

| Function type | Typical end behavior idea |
|---|---|
| Polynomial | leading term controls the sign and size |
| Rational | compare degrees after simplifying |
| Exponential | exponential growth beats powers and logarithms |
| Logarithmic | grows slowly and stays below positive powers |
| Trig | sine and cosine oscillate, so many infinity limits do not exist |
| Inverse trig | often approaches a horizontal angle value |

:::tip
When analyzing infinity, we usually only look at the largest degree for rational/polynomial functions. When you have a combination of different functions combined together, we will usually only look at which function *grows the fastest*, which will be explained more in Unit 2.
:::
<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\lim_{x\to\infty} \frac{3x^2+5x}{2x^2-7}$$ and identify the horizontal asymptote.

Divide numerator and denominator by $$x^2$$:

$$
\frac{3x^2+5x}{2x^2-7}=\frac{3+5/x}{2-7/x^2}.
$$

As $$x\to\infty$$, the terms $$5/x$$ and $$7/x^2$$ vanish (go to $$0$$), leaving the limit

$$
\frac{3}{2}.
$$

Therefore the horizontal asymptote is $$y=\frac32$$.

You can learn more about end behavior for rational functions in AP Precalculus.

</div>

<div class="theorem-box">

**Example.** Evaluate

$$
\lim_{x\to\infty}\frac{5x^3-2e^x}{x^3+7}.
$$

The numerator has a polynomial term and an exponential term. As $$x\to\infty$$, the exponential term $$e^x$$ grows faster than any power of $$x$$. The denominator grows like $$x^3$$, so the fraction behaves like

$$
\frac{-2e^x}{x^3}.
$$

Since $$e^x/x^3\to\infty$$, the whole expression decreases without bound:

$$
\lim_{x\to\infty}\frac{5x^3-2e^x}{x^3+7}=-\infty.
$$

</div>

<div class="theorem-box">

**Example.** Evaluate

$$
\lim_{x\to\infty}\arctan x.
$$

The function $$y=\arctan x$$ asks for the angle whose tangent is $$x$$. As $$x$$ becomes very large and positive, that angle approaches the vertical asymptote angle of tangent:

$$
\frac{\pi}{2}.
$$

Therefore

$$
\lim_{x\to\infty}\arctan x=\frac{\pi}{2}.
$$

Similarly,

$$
\lim_{x\to-\infty}\arctan x=-\frac{\pi}{2}.
$$

</div>

### Infinite limits vs limits at infinity

These two phrases sound similar but mean different things.

- **Infinite limit:** $$x$$ approaches a finite number and $$f(x)$$ grows without bound, such as near a vertical asymptote.
- **Limit at infinity:** $$x$$ grows without bound and $$f(x)$$ approaches a finite number or grows without bound.

For example,

$$
\lim_{x\to 0^+}\frac1x=\infty
$$

is an infinite limit, while

$$
\lim_{x\to\infty}\frac{x+1}{x}=1
$$

is a limit at infinity.

---

## Continuity

<div class="theorem-box">

A function is said to be *continuous* at $$x = a$$ when:

1. $$f(a)$$ exists,
2. $$\lim_{x \to a} f(x)$$ exists,
3. $$\lim_{x \to a} f(x) = f(a).$$

Continuity means the nearby behavior of the function matches the value at the point.

</div>

A break in continuity is called a discontinuity, and can come in many types. For example,

- Holes: One missing point in the graph
- Jumps: Left and right limits differ
- Infinite discontinuity: a vertical asymptote
- Oscillatory discontinuity: no single nearby trend

For piecewise functions, continuity at the switching point is a limit-matching problem. The left-hand limit, right-hand limit, and actual function value must all agree.

<div class="theorem-box">

**Example.** Find $$k$$ so that

$$
f(x)=
\begin{cases}
x^2+k, & x<2,\\
3x, & x\ge 2
\end{cases}
$$

is continuous at $$x=2$$.

The right-hand value is controlled by the second branch (since it is fixed):

$$
f(2)=3(2)=6.
$$

The left-hand limit comes from the first branch:

$$
\lim_{x\to2^-}(x^2+k)=4+k.
$$

For continuity, the left-hand limit must equal the value:

$$
4+k=6.
$$

Thus

$$
k=2.
$$

</div>

---

## Intermediate Value Theorem

<div class="theorem-box">

**Theorem (Intermediate Value Theorem).** If $$f$$ is continuous on $$[a,b]$$ and $$N$$ lies between $$f(a)$$ and $$f(b)$$, then there exists some $$c \in (a,b)$$ such that $$f(c) = N$$.

</div>

<div class="theorem-box">

**Proof (IVT).** Continuity means the graph cannot jump over a height. If the function starts below $$N$$ and ends above $$N$$, then moving from $$a$$ to $$b$$ forces the output to pass through every intermediate height. A discontinuity could skip the height, but a continuous function cannot.

// make sure the proof uses formal math notation instead of hand-wavy stuff.

</div>


This theorem guarantees at least one solution, but it does not tell you how many.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, xmin=0, xmax=5.2, ymin=0, ymax=5,
  xtick={1,2,3,4}, ytick={1,2,3,4},
  grid=both, grid style={gray!18},
  width=8.8cm, height=6cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, very thick, samples=180, domain=0.8:4.6] {0.22*(x-2.2)^3 + 0.55*x + 1.1};
\addplot[red!75!black, dashed, domain=0.7:4.7] {3};
\addplot[gray!70, dashed] coordinates {(1,0) (1,1.63)};
\addplot[gray!70, dashed] coordinates {(4.5,0) (4.5,4.52)};
\addplot[orange!85!black, dashed] coordinates {(3.21,0) (3.21,3)};
\addplot[only marks, mark=*, mark size=1.8pt, orange!85!black] coordinates {(3.21,3)};
\node[red!75!black, anchor=south west] at (axis cs:4.1,3) {$y=N$};
\node[orange!85!black, anchor=south east] at (axis cs:3.21,3) {$f(c)=N$};
\node[gray!70!black, anchor=north] at (axis cs:1,0) {$a$};
\node[gray!70!black, anchor=north] at (axis cs:4.5,0) {$b$};
\end{axis}
\end{tikzpicture}
```
// fix the graph, the labels are not correctly centered

## Average rate of change (Introduction to derivatives)

On $$[a,b]$$, the average rate of change is modeled by

$$
\frac{f(b) - f(a)}{b-a}
$$

This is also the slope of the secant line (the line connecting the two endpoints). The derivative will be the limit of this expression as the interval shrinks toward a single point. This will be explored more in Unit 2.

<div class="theorem-box">

**Example.** For $$f(x)=x^2$$, compute the average rate of change on $$[1,1.1]$$, $$[1,1.01]$$, and $$[1,1.001]$$ to observe the pattern.

- On $$[1,1.1]$$:

$$
\frac{f(1.1)-f(1)}{1.1-1} = \frac{1.21-1}{0.1} = 2.1.
$$

- On $$[1,1.01]$$:

$$
\frac{f(1.01)-f(1)}{1.01-1} = \frac{1.0201-1}{0.01} = 2.01.
$$

- On $$[1,1.001]$$:

$$
\frac{f(1.001)-f(1)}{1.001-1} = \frac{1.002001-1}{0.001} = 2.001.
$$

Each secant slope gets closer to $$2$$ as the interval shrinks. This pattern shows how the average rate of change approaches the derivative at $$x=1$$, and for $$f(x)=x^2$$ the derivative is $$f'(x)=2x$$, giving $$f'(1)=2$$. You will learn more about derivatives in the next unit.

</div>

// add a tips for the exam section like the other notes pages
