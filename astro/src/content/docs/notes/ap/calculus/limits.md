---
title: "Unit 1: Limits and Continuity"
description: "AP Calculus notes on limits, continuity, asymptotes, the squeeze theorem, intermediate value theorem, and limit techniques."
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

This function is a polynomial, and doesn't have any weird jumps or other features. Thus,

$$
3(2)^2-1 = 11.
$$

So the limit is $$11$$.

</div>

### One-sided and two-sided limits

A one-sided limit describes the value approached from one direction only.

- Left-hand limit: $$\lim_{x \to a^-} f(x)$$
- Right-hand limit: $$\lim_{x \to a^+} f(x)$$

A two-sided limit exists exactly when both one-sided limits exist and agree:

$$
\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L.
$$

If the left-hand and right-hand limits disagree, then the two-sided limit does not exist.

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\lim_{x\to2} f(x)$$ for

$$
f(x)=
\begin{cases}
x+1, & x<2,\\
5, & x=2,\\
3x-3, & x>2.
\end{cases}
$$

The left-hand limit uses the branch $$x+1$$:

$$
\lim_{x\to2^-}f(x)=2+1=3.
$$

The right-hand limit uses the branch $$3x-3$$:

$$
\lim_{x\to2^+}f(x)=3(2)-3=3.
$$

Since the one-sided limits agree,

$$
\lim_{x\to2}f(x)=3.
$$

Notice that $$f(2)=5$$, but that does not change the limit. The limit depends on nearby values, not the value directly at $$x=2$$.

</div>

<div class="theorem-box">

**Example.** The graph of $$f$$ is shown below. Evaluate $$\lim_{x\to0} f(1-x^2).$$

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle,
  xmin=-3.2, xmax=3.2,
  ymin=-0.4, ymax=6.8,
  xtick={-3,-2,-1,0,1,2,3},
  ytick={1,2,3,4,5,6},
  grid=both,
  grid style={gray!22},
  width=8cm,
  height=6.4cm,
  xlabel=$x$,
  ylabel=$y$,
  tick label style={font=\small},
  label style={font=\small},
]
\addplot[black, thick, domain=-2.2:1, samples=120] {(x)^2+2};
\addplot[black, thick, domain=1:2.35, samples=120] {(x-1)^2+4};
\addplot[only marks, mark=o, mark size=2.3pt, black, thick] coordinates {(1,3) (1,4)};
\addplot[only marks, mark=*, mark size=2.6pt, black] coordinates {(1,2)};
\end{axis}
\end{tikzpicture}
```

As $$x\to0$$, the inside expression satisfies

$$
1-x^2\to1.
$$

However, $$1-x^2$$ is always less than or equal to $$1$$ near $$x=0$$. For $$x\ne0$$, it approaches $$1$$ from the left:

$$
1-x^2\to1^-.
$$

So the limit depends on the left-hand behavior of $$f$$ at $$x=1$$. From the graph,

$$
\lim_{u\to1^-} f(u)=3.
$$

Therefore,

$$
\lim_{x\to0} f(1-x^2)=3.
$$

</div>

### Limits from table of values

Tables help estimate limits when you do not have a formula or graph. The main idea is to look at what the output values approach from the left and from the right.

A table does not prove a limit by itself, but it gives strong evidence. It is especially useful for reading calculator-generated data, numerical models, or functions that are hard to simplify by hand.

When using a table, check two things:

- values of $$x$$ slightly less than $$a$$,
- values of $$x$$ slightly greater than $$a$$.

If the outputs approach the same number from both sides, the two-sided limit likely equals that number. If the outputs approach different numbers, the two-sided limit does not exist.

<div class="theorem-box">

**Example.** Use the table to estimate $$\displaystyle\lim_{x\to2}f(x)$$.

$$
\begin{array}{c|cccccc}
x & 1.9 & 1.99 & 1.999 & 2.001 & 2.01 & 2.1 \\\hline
f(x) & 4.71 & 4.9701 & 4.997001 & 5.003001 & 5.0301 & 5.31
\end{array}
$$

From the left, the function values approach $$5$$:

$$
\lim_{x\to2^-}f(x)=5.
$$

From the right, the function values also approach $$5$$:

$$
\lim_{x\to2^+}f(x)=5.
$$

Since the one-sided limits agree,

$$
\lim_{x\to2}f(x)=5.
$$

</div>

<div class="theorem-box">

**Example.** Use the table to estimate $$\displaystyle\lim_{x\to0}g(x)$$.

$$
\begin{array}{c|cccccc}
x & -0.1 & -0.01 & -0.001 & 0.001 & 0.01 & 0.1 \\\hline
g(x) & -1.9 & -1.99 & -1.999 & 2.001 & 2.01 & 2.1
\end{array}
$$

From the left, the outputs approach $$-2$$:

$$
\lim_{x\to0^-}g(x)=-2.
$$

From the right, the outputs approach $$2$$:

$$
\lim_{x\to0^+}g(x)=2.
$$

Since the one-sided limits do not agree,

$$
\lim_{x\to0}g(x)
$$

does not exist.

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

<div class="theorem-box">

**Example.** Suppose

$$
\lim_{x\to1}f(x)=4,
\qquad
\lim_{x\to1}g(x)=0,
\qquad
\lim_{x\to1}h(x)=-2.
$$

Find

$$
\lim_{x\to1}\frac{\sqrt{f(x)+5}-3h(x)}{f(x)-h(x)g(x)+1}.
$$

Use the limit laws inside the expression:

$$
\sqrt{f(x)+5}\to\sqrt{4+5}=3,
$$

$$
3h(x)\to3(-2)=-6,
$$

and

$$
f(x)-h(x)g(x)+1\to4-(-2)(0)+1=5.
$$

Therefore

$$
\lim_{x\to1}\frac{\sqrt{f(x)+5}-3h(x)}{f(x)-h(x)g(x)+1}
=
\frac{3-(-6)}{5}
=
\frac95.
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

They are frequently used after rewriting a trig expression into a form that matches one of these limits. It is important to note that $$\cos x$$ is not part of this list. Since $$\cos x\to1$$ while $$x\to0$$, the quotient $$\frac{\cos x}{x}$$ becomes unbounded. The two-sided limit does not exist.

:::conditions
These two trig limits are valid only when the angle is measured in **radians**. As an exercise, you can try to derive the corresponding versions when $$x$$ is in degrees.
:::

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\lim_{x\to0}\frac{\sin(5x)}{x}.$$

Rewrite the expression to use the standard limit $$\lim_{u\to0}\frac{\sin u}{u}=1$$:

$$
\lim_{x\to0}\frac{\sin(5x)}{x}
=
\lim_{x\to0}5\cdot\frac{\sin(5x)}{5x}.
$$

As $$x\to0$$, the ratio $$\frac{\sin(5x)}{5x}\to1$$, so the limit equals $$5$$.

</div>

<div class="theorem-box">

**Example.** Evaluate

$$
\lim_{x\to0}\frac{1-\cos(2x)}{x^2}.
$$

Use the identity

$$
1-\cos(2x)=2\sin^2 x.
$$

Then

$$
\lim_{x\to0}\frac{1-\cos(2x)}{x^2}
=
\lim_{x\to0}\frac{2\sin^2 x}{x^2}
=
\lim_{x\to0}2\left(\frac{\sin x}{x}\right)^2.
$$

As $$x\to0$$, $$\frac{\sin x}{x}\to1$$, so

$$
\lim_{x\to0}\frac{1-\cos(2x)}{x^2}=2.
$$

</div>

---

## Indeterminate forms and algebraic techniques

Direct substitution sometimes gives an indeterminate form, which means the algebraic structure must be simplified before the limit can be found. Common indeterminate forms include: $$0/0$$, $$\infty/\infty$$, $$0 \cdot \infty$$, $$\infty - \infty$$, $$1^\infty$$, $$0^0$$, and $$\infty^0$$.

In AP Calculus AB/BC, most of these are handled with algebra or L'Hôpital's Rule (Unit 4).

:::strategy
There are many common ways to solve indeterminate forms in limits using algebra:

- Factor and cancel a common factor
- Multiply by a conjugate when radicals are involved
- Combine fractions into a single rational expression
- Use a known trig limit after rewriting the angle
- Divide by the dominant power of $$x$$ for limits at infinity
:::


Most AP limit work is about recognizing whether direct substitution works or whether the expression hides competing behavior.

:::warning
If you get a form that is NOT one of these you cannot do any operation to simplify it! For example, if the limit is $$\infty/3$$, it is not an indeterminate form.
:::

### Factoring and canceling

Factoring is useful when direct substitution gives $$0/0$$ and the numerator and denominator share a hidden factor. After canceling, the simplified expression agrees with the original expression for nearby values of $$x$$, even if the original expression is undefined at the exact input.

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\lim_{x\to3}\frac{x^2-9}{x-3}.$$

Factor the numerator to expose the removable factor:

$$
\lim_{x\to3}\frac{x^2-9}{x-3}
=
\lim_{x\to3}\frac{(x-3)(x+3)}{x-3},\qquad x\ne3.
$$

Cancelling gives

$$
\lim_{x\to3}\frac{x^2-9}{x-3}
=
\lim_{x\to3}(x+3).
$$

Now take the limit of the simplified expression:

$$
\lim_{x\to3}(x+3)=6.
$$

Since the discontinuity is a removable discontinuity (a hole), the limit exists because both sides approach the same value at $$x=3$$.

</div>

### Dealing with roots

When radicals create $$0/0$$, multiply by the conjugate. The conjugate changes a radical difference into a difference of squares, which often reveals a canceling factor.

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\lim_{x\to0}\frac{\sqrt{x+1}-1}{x}.$$

Multiply by the conjugate to remove the radical from the numerator:

$$
\lim_{x\to0}\frac{\sqrt{x+1}-1}{x}
=
\lim_{x\to0}\frac{(\sqrt{x+1}-1)(\sqrt{x+1}+1)}{x(\sqrt{x+1}+1)}.
$$

The numerator becomes a difference of squares:

$$
(\sqrt{x+1}-1)(\sqrt{x+1}+1)
=(x+1)-1=x.
$$

So, for $$x\ne0$$,

$$
\lim_{x\to0}\frac{\sqrt{x+1}-1}{x}
=
\lim_{x\to0}\frac{x}{x(\sqrt{x+1}+1)}
=
\lim_{x\to0}\frac{1}{\sqrt{x+1}+1}.
$$

Now evaluate the simplified limit:

$$
\lim_{x\to0}\frac{1}{\sqrt{x+1}+1}=\frac{1}{2}.
$$

</div>

For roots at infinity, another useful move is to factor the largest power out from inside the radical. The square root of a square produces an absolute value:

$$
\sqrt{x^6}= \lvert x^3\rvert.
$$

The sign of that absolute value depends on whether $$x\to\infty$$ or $$x\to-\infty$$. This matters because end-behavior limits are sensitive to direction.

<div class="theorem-box">

**Example.** Evaluate

$$
\lim_{x\to\infty}\left(\sqrt{x^6+5x^3}-x^3\right).
$$

Direct substitution gives the indeterminate form $$\infty-\infty$$. Factor $$x^6$$ out of the radical:

$$
\lim_{x\to\infty}\left(\sqrt{x^6+5x^3}-x^3\right)
=
\lim_{x\to\infty}\left(\sqrt{x^6\left(1+\frac{5}{x^3}\right)}-x^3\right).
$$

Since $$x\to\infty$$, $$\lvert x^3\rvert=x^3$$, so

$$
\lim_{x\to\infty}\left(\sqrt{x^6\left(1+\frac{5}{x^3}\right)}-x^3\right)
=
\lim_{x\to\infty}\left(x^3\sqrt{1+\frac{5}{x^3}}-x^3\right).
$$

Factor out $$x^3$$:

$$
\lim_{x\to\infty}x^3\left(\sqrt{1+\frac{5}{x^3}}-1\right).
$$

This is still not easy to evaluate directly, so rationalize:

$$
\lim_{x\to\infty}x^3\left(\sqrt{1+\frac{5}{x^3}}-1\right)
=
\lim_{x\to\infty}x^3\left(\frac{\left(1+\frac{5}{x^3}\right)-1}{\sqrt{1+\frac{5}{x^3}}+1}\right).
$$

Simplify:

$$
\lim_{x\to\infty}x^3\left(\frac{\frac{5}{x^3}}{\sqrt{1+\frac{5}{x^3}}+1}\right)
=
\lim_{x\to\infty}\frac{5}{\sqrt{1+\frac{5}{x^3}}+1}.
$$

Now the remaining variable expression has a clear limit:

$$
\lim_{x\to\infty}\frac{5}{\sqrt{1+\frac{5}{x^3}}+1}
=
\frac{5}{\sqrt{1+0}+1}
=
\frac52.
$$

</div>

### Trig rewrites

Trig limits often become standard limits after rewriting the angle or using an identity. The goal is to create a factor like

$$
\frac{\sin u}{u}
$$

where $$u\to0$$ (or the equivalent tangent version).

<div class="theorem-box">

**Example.** Evaluate

$$
\lim_{x\to0}\frac{\tan(3x)}{\sin(5x)}.
$$

Rewrite the expression so each trig ratio has its own matching angle:

$$
\lim_{x\to0}\frac{\tan(3x)}{\sin(5x)}
=
\lim_{x\to0}\frac{\tan(3x)}{3x}\cdot\frac{5x}{\sin(5x)}\cdot\frac{3}{5}.
$$

As $$x\to0$$,

$$
\frac{\tan(3x)}{3x}\to1
\qquad
\text{and}
\qquad
\frac{\sin(5x)}{5x}\to1,
$$

so

$$
\frac{5x}{\sin(5x)}\to1.
$$

Therefore

$$
\lim_{x\to0}\frac{\tan(3x)}{\sin(5x)}
=
1\cdot1\cdot\frac35
=
\frac35.
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
| Trig | sine and cosine oscillate, so many infinity limits do not exist |
| Inverse trig | often approaches a horizontal angle value |

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\lim_{x\to\infty} \frac{3x^2+5x}{2x^2-7}$$ and identify the horizontal asymptote.

Divide numerator and denominator by $$x^2$$:

$$
\lim_{x\to\infty}\frac{3x^2+5x}{2x^2-7}
=
\lim_{x\to\infty}\frac{3+5/x}{2-7/x^2}.
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

<div class="theorem-box">

**Example.** Evaluate

$$
\lim_{x\to\infty}\frac{\sqrt{9x^2+4x}-2x}{x+1}.
$$

At infinity, factor $$x^2$$ inside the square root:

$$
\lim_{x\to\infty}\sqrt{9x^2+4x}
=
\lim_{x\to\infty}\sqrt{x^2\left(9+\frac4x\right)}
=
\lim_{x\to\infty}\lvert x\rvert\sqrt{9+\frac4x}.
$$

Since $$x\to\infty$$, $$x>0$$ eventually, so $$\lvert x\rvert=x$$. Then

$$
\lim_{x\to\infty}\frac{\sqrt{9x^2+4x}-2x}{x+1}
=
\lim_{x\to\infty}\frac{x\sqrt{9+\frac4x}-2x}{x+1}.
$$

Factor $$x$$ from the numerator and denominator:

$$
\lim_{x\to\infty}\frac{x\left(\sqrt{9+\frac4x}-2\right)}{x\left(1+\frac1x\right)}
=
\lim_{x\to\infty}\frac{\sqrt{9+\frac4x}-2}{1+\frac1x}.
$$

Now take the limit:

$$
\frac{\sqrt{9+0}-2}{1+0}
=
1.
$$

Therefore,

$$
\lim_{x\to\infty}\frac{\sqrt{9x^2+4x}-2x}{x+1}=1.
$$

</div>

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

- Holes: $$\lim_{x \to a} f(x)$$ exists, but $$\lim_{x \to a} f(x) \ne f(a).$$
- Jumps: Left hand and right hand limits differ
- Infinite discontinuity: A vertical asymptote, basically when any one-sided limit becomes $$\pm \infty$$
- Oscillatory discontinuity: no single nearby trend, most applicable to trig functions

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

// add some more stuff and theorems and stuff

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

:::strategy
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

## Intermediate Value Theorem

<div class="theorem-box">

**Theorem (Intermediate Value Theorem).** If $$f$$ is continuous on $$[a,b]$$ and $$N$$ lies between $$f(a)$$ and $$f(b)$$, then there exists some $$c \in (a,b)$$ such that $$f(c) = N$$.

</div>

<div class="theorem-box">

**Proof (IVT).** Assume $$f(a)<N<f(b)$$. Define

$$
g(x)=f(x)-N.
$$

Then $$g$$ is continuous on $$[a,b]$$, and

$$
g(a)=f(a)-N<0,
\qquad
g(b)=f(b)-N>0.
$$

Let

$$
S=\{x\in[a,b]\mid g(x)<0\}.
$$

The set $$S$$ is nonempty because $$a\in S$$, and it is bounded above by $$b$$. Let $$c=\sup S$$. Since $$g$$ is continuous, $$g(c)$$ cannot be negative or positive. If $$g(c)<0$$, then values slightly to the right of $$c$$ would still be negative, contradicting that $$c$$ is the least upper bound. If $$g(c)>0$$, then values slightly to the left of $$c$$ would be positive, contradicting the fact that points of $$S$$ can get arbitrarily close to $$c$$ from the left.

Therefore,

$$
g(c)=0.
$$

So

$$
f(c)-N=0
\quad\Longrightarrow\quad
f(c)=N.
$$

The case $$f(b)<N<f(a)$$ follows by applying the same argument to $$-g(x)$$.

</div>


This theorem guarantees at least one solution, but it does not tell you how many.

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

---

## Tips for the exam

Limit questions are often about deciding which tool is allowed before doing any algebra.

:::checklist
1. Try direct substitution first.
2. If substitution gives a finite value, the limit is usually finished.
3. If substitution gives $$0/0$$, try factoring, conjugates, common denominators, or trig-limit rewrites.
4. If one-sided limits disagree, the two-sided limit does not exist.
5. For continuity, check the value, the two-sided limit, and whether they match.
:::

:::exam{topic="Limit justification"}
When a question asks you to justify existence, say why both sides approach the same value. When a limit does not exist, name the reason: different one-sided limits, unbounded behavior, or oscillation.
:::

---

## Practice

### Multiple Choice

::::problem
1. Evaluate $$\displaystyle\lim_{x\to3^-}\frac{\lvert x-3\rvert}{x-3}$$.

(A) $$-1$$

(B) $$0$$

(C) $$1$$

(D) The limit does not exist

:::solution
For $$x<3$$, $$x-3<0$$, so

$$
\lvert x-3\rvert=-(x-3).
$$

Therefore

$$
\lim_{x\to3^-}\frac{\lvert x-3\rvert}{x-3}
=
\lim_{x\to3^-}\frac{-(x-3)}{x-3}
=
-1.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
2. Let

$$
f(x)=
\begin{cases}
x^2+1, & x<1,\\
4, & x=1,\\
3x-1, & x>1.
\end{cases}
$$

What is $$\displaystyle\lim_{x\to1}f(x)$$?

(A) $$2$$

(B) $$4$$

(C) The limit exists but equals neither $$2$$ nor $$4$$

(D) The limit does not exist

:::solution
From the left,

$$
\lim_{x\to1^-}f(x)
=
\lim_{x\to1^-}(x^2+1)
=
2.
$$

From the right,

$$
\lim_{x\to1^+}f(x)
=
\lim_{x\to1^+}(3x-1)
=
2.
$$

Since the one-sided limits agree, the two-sided limit is $$2$$. The actual value $$f(1)=4$$ does not affect the limit.

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
3. The table gives values of $$g(x)$$ near $$x=5$$.

$$
\begin{array}{c|cccccc}
x & 4.9 & 4.99 & 4.999 & 5.001 & 5.01 & 5.1 \\\hline
g(x) & 4.5 & 5 & 5.5 & 8.002 & 8.02 & 8.2
\end{array}
$$

Which statement is best supported by the table?

(A) $$\displaystyle\lim_{x\to5}g(x)=8$$

(B) $$\displaystyle\lim_{x\to5}g(x)=6$$

(C) $$\displaystyle\lim_{x\to5^-}g(x)=6$$ & $$\displaystyle\lim_{x\to5^+}g(x)=8$$

(D) $$\displaystyle\lim_{x\to5^-}g(x)=\infty$$ & $$\displaystyle\lim_{x\to5^+}g(x)=8$$

:::solution
From the left, the values $$4.5,5,5.5$$ do not look like they are settling down. In fact, the inputs are getting ten times closer to $$5$$ each step, but the outputs are still increasing by about $$0.5$$ each step. That suggests the left-hand behavior is growing without bound, not converging to a finite number.

From the right, the values $$8.002,8.02,8.2$$ appear to approach $$8$$.

So the table supports

$$
\lim_{x\to5^-}g(x)=\infty
\qquad
\text{and}
\qquad
\lim_{x\to5^+}g(x)=8.
$$

Because the one-sided limits are different, the two-sided limit does not exist.

The answer is $$\boxed{\text{D}}$$.
:::
::::

::::problem
4. Evaluate $$\displaystyle\lim_{x\to2}\frac{x^2-4}{x^6-64}$$.

(A) $$\frac{1}{48}$$

(B) $$\frac{1}{16}$$

(C) $$0$$

(D) The limit does not exist

:::solution
Factor the numerator and denominator:

$$
\lim_{x\to2}\frac{x^2-4}{x^6-64}
=
\lim_{x\to2}\frac{(x-2)(x+2)}{(x^3-8)(x^3+8)}.
$$

Since

$$
x^3-8=(x-2)(x^2+2x+4),
$$

we get

$$
\lim_{x\to2}\frac{(x-2)(x+2)}{(x-2)(x^2+2x+4)(x^3+8)}
=
\lim_{x\to2}\frac{x+2}{(x^2+2x+4)(x^3+8)}.
$$

Now substitute:

$$
\frac{4}{(12)(16)}
=
\frac{1}{48}.
$$

The answer is $$\boxed{\text{A}}$$.
:::
::::

::::problem
5. Evaluate $$\displaystyle\lim_{x\to4}\frac{x-4}{\lvert x^2-x-12\rvert}$$.

(A) $$-\frac17$$

(B) $$\frac17$$

(C) $$0$$

(D) The limit does not exist

:::solution
Factor inside the absolute value:

$$
x^2-x-12=(x-4)(x+3).
$$

So

$$
\lim_{x\to4}\frac{x-4}{\lvert x^2-x-12\rvert}
=
\lim_{x\to4}\frac{x-4}{\lvert x-4\rvert\lvert x+3\rvert}.
$$

Near $$x=4$$, $$x+3>0$$, so $$\lvert x+3\rvert=x+3$$. The issue is $$\frac{x-4}{\lvert x-4\rvert}$$.

From the left, $$x-4<0$$, so

$$
\lim_{x\to4^-}\frac{x-4}{\lvert x-4\rvert(x+3)}
=
-\frac17.
$$

From the right, $$x-4>0$$, so

$$
\lim_{x\to4^+}\frac{x-4}{\lvert x-4\rvert(x+3)}
=
\frac17.
$$

The one-sided limits are different, so the two-sided limit does not exist.

The answer is $$\boxed{\text{D}}$$.
:::
::::

::::problem
6. Evaluate $$\displaystyle\lim_{x\to0}\frac{\sin(7x)}{3x}$$.

(A) $$\frac37$$

(B) $$\frac73$$

(C) $$7$$

(D) $$3$$

:::solution
Rewrite the expression using the standard sine limit:

$$
\lim_{x\to0}\frac{\sin(7x)}{3x}
=
\lim_{x\to0}\frac{7}{3}\cdot\frac{\sin(7x)}{7x}.
$$

Since

$$
\lim_{x\to0}\frac{\sin(7x)}{7x}=1,
$$

the limit is

$$
\frac73.
$$

The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
7. Evaluate $$\displaystyle\lim_{x\to0}\frac{1-\cos(4x)}{x\sin(2x)}$$.

(A) $$0$$

(B) $$2$$

(C) $$4$$

(D) The limit does not exist

:::solution
Use the identity $$1-\cos(4x)=2\sin^2(2x)$$:

$$
\lim_{x\to0}\frac{1-\cos(4x)}{x\sin(2x)}
=
\lim_{x\to0}\frac{2\sin^2(2x)}{x\sin(2x)}
=
\lim_{x\to0}\frac{2\sin(2x)}{x}.
$$

Now rewrite:

$$
\lim_{x\to0}\frac{2\sin(2x)}{x}
=
\lim_{x\to0}4\cdot\frac{\sin(2x)}{2x}
=
4.
$$

The answer is $$\boxed{\text{C}}$$.
:::
::::

::::problem
8. Evaluate $$\displaystyle\lim_{x\to1}\arcsin\left(\frac{1-\sqrt{x}}{1-x}\right)$$.

(A) $$0$$

(B) $$\frac{\pi}{6}$$

(C) $$\frac{\pi}{4}$$

(D) The limit does not exist

:::solution
First simplify the inside expression:

$$
1-x=(1-\sqrt{x})(1+\sqrt{x}).
$$

Therefore

$$
\lim_{x\to1}\frac{1-\sqrt{x}}{1-x}
=
\lim_{x\to1}\frac{1-\sqrt{x}}{(1-\sqrt{x})(1+\sqrt{x})}
=
\lim_{x\to1}\frac{1}{1+\sqrt{x}}
=
\frac12.
$$

Since $$\arcsin x$$ is continuous on its domain,

$$
\lim_{x\to1}\arcsin\left(\frac{1-\sqrt{x}}{1-x}\right)
=
\arcsin\left(\frac12\right)
=
\frac{\pi}{6}.
$$

The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
9. Evaluate $$\displaystyle\lim_{x\to\infty}\frac{4x^3-x}{2x^3+5x^2}$$.

(A) $$0$$

(B) $$2$$

(C) $$4$$

(D) The limit does not exist

:::solution
The numerator and denominator have the same degree. Divide by $$x^3$$:

$$
\lim_{x\to\infty}\frac{4x^3-x}{2x^3+5x^2}
=
\lim_{x\to\infty}\frac{4-\frac{1}{x^2}}{2+\frac{5}{x}}.
$$

Now terms with $$x$$ in the denominator approach $$0$$:

$$
\frac{4-0}{2+0}=2.
$$

The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
10. Evaluate $$\displaystyle\lim_{x\to\infty}\frac{(x+1)(\sqrt{x^2+4x}-x)}{2x+3}$$.

(A) $$0$$

(B) $$1$$

(C) $$2$$

(D) The limit diverges to $$\infty$$

:::solution
Rationalize the radical expression:

$$
\sqrt{x^2+4x}-x
=
\frac{(x^2+4x)-x^2}{\sqrt{x^2+4x}+x}
=
\frac{4x}{\sqrt{x^2+4x}+x}.
$$

Then

$$
\lim_{x\to\infty}\frac{(x+1)(\sqrt{x^2+4x}-x)}{2x+3}
=
\lim_{x\to\infty}\frac{x+1}{2x+3}\cdot\frac{4x}{\sqrt{x^2+4x}+x}.
$$

The first factor approaches $$\frac12$$. For the second factor, factor $$x$$ from the radical:

$$
\lim_{x\to\infty}\frac{4x}{\sqrt{x^2+4x}+x}
=
\lim_{x\to\infty}\frac{4x}{x\sqrt{1+\frac4x}+x}
=
\lim_{x\to\infty}\frac{4}{\sqrt{1+\frac4x}+1}
=
2.
$$

So the whole limit is

$$
\frac12\cdot2=1.
$$

The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
11. If $$-x^2\le f(x)\le x^2$$ for all $$x$$ near $$0$$, what is $$\displaystyle\lim_{x\to0}f(x)$$?

(A) $$-1$$

(B) $$0$$

(C) $$1$$

(D) The limit cannot be determined

:::solution
As $$x\to0$$,

$$
\lim_{x\to0}(-x^2)=0
\qquad
\text{and}
\qquad
\lim_{x\to0}x^2=0.
$$

Since $$f(x)$$ is squeezed between two functions that both approach $$0$$, the Squeeze Theorem gives

$$
\lim_{x\to0}f(x)=0.
$$

The answer is $$\boxed{\text{B}}$$.
:::
::::

::::problem
12. Which value of $$k$$ makes

$$
f(x)=
\begin{cases}
kx+1, & x<2,\\
x^2-k, & x\ge2
\end{cases}
$$

continuous at $$x=2$$?

(A) $$\frac13$$

(B) $$1$$

(C) $$\frac32$$

(D) $$3$$

:::solution
For continuity at $$x=2$$, the left-hand limit must equal the value from the right branch at $$x=2$$.

From the left,

$$
\lim_{x\to2^-}f(x)
=
\lim_{x\to2^-}(kx+1)
=
2k+1.
$$

From the right branch,

$$
f(2)=2^2-k=4-k.
$$

Set them equal:

$$
2k+1=4-k.
$$

Thus

$$
3k=3
\quad\Longrightarrow\quad
k=1.
$$

The answer is $$\boxed{\text{B}}$$.
:::
::::

### FRQ

::::frq{id=ap-calculus-limits-1}
1. Let

   $$
   f(x)=
   \begin{cases}
   \dfrac{x^2-4}{x-2}, & x<2,\\
   k, & x=2,\\
   ax+b, & x>2.
   \end{cases}
   $$

   $$(A)$$ Find the left-hand limit $$\displaystyle\lim_{x\to2^-}f(x)$$.

   $$(B)$$ Find all pairs $$(a,b)$$ that make $$\displaystyle\lim_{x\to2}f(x)$$ exist.

   $$(C)$$ If additionally $$f(5)=10$$, find $$a$$ and $$b$$.

   $$(D)$$ For the values from part $$(C)$$, find $$k$$ so that $$f$$ is continuous at $$x=2$$.

:::solution
$$(A)$$ For $$x<2$$,

$$
\frac{x^2-4}{x-2}
=
\frac{(x-2)(x+2)}{x-2}
=
x+2
\qquad (x\ne2).
$$

So

$$
\lim_{x\to2^-}f(x)
=
\lim_{x\to2^-}(x+2)
=
4.
$$

$$(B)$$ For the two-sided limit to exist, the right-hand limit must also be $$4$$:

$$
\lim_{x\to2^+}(ax+b)=2a+b.
$$

So all pairs satisfying

$$
2a+b=4
$$

make the limit exist.

$$(C)$$ Since $$5>2$$, the condition $$f(5)=10$$ uses the right branch:

$$
5a+b=10.
$$

Solve the system

$$
2a+b=4,
\qquad
5a+b=10.
$$

Subtracting gives $$3a=6$$, so $$a=2$$. Then

$$
2(2)+b=4
\quad\Longrightarrow\quad
b=0.
$$

$$(D)$$ For continuity at $$x=2$$, the value at $$x=2$$ must equal the limit:

$$
k=4.
$$
:::
::::

::::frq{id=ap-calculus-limits-2}
2. Consider

   $$
   L=\lim_{x\to0}\frac{\sqrt{1+4x}-1}{\sin(3x)}.
   $$

   $$(A)$$ What happens when you use direct substitution?

   $$(B)$$ Rationalize the numerator and rewrite the expression so that the special trig limit $$\displaystyle\lim_{u\to0}\frac{\sin u}{u}=1$$ can be used.

   $$(C)$$ Evaluate the limit.

   $$(D)$$ Now evaluate

   $$
   \lim_{x\to0}\frac{\sqrt{1+4x}-1}{\tan(5x)}
   $$

   and compare it to $$L$$.

:::solution
$$(A)$$ Direct substitution gives

$$
\frac{\sqrt{1+4(0)}-1}{\sin(3\cdot0)}
=
\frac{0}{0},
$$

which is indeterminate.

$$(B)$$ Rationalize the numerator:

$$
L
=
\lim_{x\to0}\frac{\sqrt{1+4x}-1}{\sin(3x)}
\cdot
\frac{\sqrt{1+4x}+1}{\sqrt{1+4x}+1}.
$$

This gives

$$
L
=
\lim_{x\to0}\frac{4x}{\sin(3x)(\sqrt{1+4x}+1)}.
$$

Rewrite to use the standard trig limit:

$$
L
=
\lim_{x\to0}\frac{4}{3}
\cdot
\frac{3x}{\sin(3x)}
\cdot
\frac{1}{\sqrt{1+4x}+1}.
$$

$$(C)$$ Since

$$
\lim_{x\to0}\frac{\sin(3x)}{3x}=1,
$$

we also have

$$
\lim_{x\to0}\frac{3x}{\sin(3x)}=1.
$$

Therefore

$$
L
=
\frac43\cdot1\cdot\frac{1}{2}
=
\frac23.
$$

$$(D)$$ For the tangent version,

$$
\lim_{x\to0}\frac{\sqrt{1+4x}-1}{\tan(5x)}
=
\lim_{x\to0}\frac{4x}{\tan(5x)(\sqrt{1+4x}+1)}.
$$

Rewrite:

$$
\lim_{x\to0}
\frac45
\cdot
\frac{5x}{\tan(5x)}
\cdot
\frac{1}{\sqrt{1+4x}+1}.
$$

Since $$\displaystyle\lim_{x\to0}\frac{\tan(5x)}{5x}=1$$, the limit is

$$
\frac45\cdot1\cdot\frac12
=
\frac25.
$$

This is smaller than $$L=\frac23$$ because the denominator angle coefficient changed from $$3$$ to $$5$$.
:::
::::

::::frq{id=ap-calculus-limits-3}
3. A function $$h$$ is continuous on $$[-1,4]$$. Selected values are shown in the table.

   $$
   \begin{array}{c|ccccc}
   x & -1 & 0 & 1 & 3 & 4 \\\hline
   h(x) & 5 & 2 & -1 & 4 & 7
   \end{array}
   $$

   $$(A)$$ Use the Intermediate Value Theorem to justify that there is at least one value $$c$$ in $$(0,1)$$ such that $$h(c)=0$$.

   $$(B)$$ Define $$p(x)=h(x)-x$$. Use the Intermediate Value Theorem to justify that there is at least one solution to $$h(x)=x$$ on $$(1,3)$$.

   $$(C)$$ Can the table alone prove that $$h(x)=6$$ has a solution on $$[-1,4]$$? Explain why or why not.

   $$(D)$$ Suppose $$h$$ is continuous and one-to-one on $$[-1,4]$$. Explain why this extra condition changes what you can conclude about the number of solutions in parts $$(A)$$ and $$(B)$$.

:::solution
$$(A)$$ Since $$h$$ is continuous on $$[-1,4]$$, it is continuous on $$[0,1]$$. From the table,

$$
h(0)=2
\qquad
\text{and}
\qquad
h(1)=-1.
$$

The number $$0$$ lies between $$2$$ and $$-1$$, so by the Intermediate Value Theorem, there is at least one $$c\in(0,1)$$ such that

$$
h(c)=0.
$$

$$(B)$$ Let $$p(x)=h(x)-x$$. Since $$h$$ is continuous and $$x$$ is continuous, $$p$$ is continuous. Evaluate:

$$
p(1)=h(1)-1=-1-1=-2,
$$

and

$$
p(3)=h(3)-3=4-3=1.
$$

Since $$0$$ lies between $$-2$$ and $$1$$, the IVT guarantees some value in $$(1,3)$$ where

$$
p(x)=0.
$$

That means

$$
h(x)-x=0
\quad\Longrightarrow\quad
h(x)=x.
$$

$$(C)$$ Yes, the table plus continuity can prove a solution to $$h(x)=6$$ on $$[-1,4]$$. Since

$$
h(3)=4
\qquad
\text{and}
\qquad
h(4)=7,
$$

and $$6$$ lies between $$4$$ and $$7$$, the IVT guarantees at least one solution in $$(3,4)$$.

$$(D)$$ If $$h$$ is one-to-one, then each output value can occur at most once. So the IVT still guarantees existence in parts $$(A)$$ and $$(B)$$, but one-to-one behavior can upgrade "at least one" to "exactly one" for the equation $$h(x)=0$$ in part $$(A)$$.

For part $$(B)$$, one-to-one behavior of $$h$$ by itself does not necessarily make $$p(x)=h(x)-x$$ one-to-one. So it does not automatically prove uniqueness for $$h(x)=x$$ without more information.
:::
::::
