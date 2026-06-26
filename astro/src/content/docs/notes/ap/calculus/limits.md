---
title: "Unit 1: Limits and Continuity"
sidebar:
  order: 1
---

---

## What a limit means

We write

$$
\lim_{x \to a} f(x) = L
$$

if we can make $$f(x)$$ as close to $$L$$ as we want by taking $$x$$ sufficiently close to $$a$$, with $$x \ne a$$.

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

> [Image Placeholder: left-hand vs right-hand limit examples, including a jump discontinuity]

<div class="theorem-box">

**Example.** Let $$f(x)=\begin{cases}1,&x<0,\\2,&x\ge0.\end{cases}$$ Find the left-hand and right-hand limits as $$x\to0$$.

For $$x<0$$, the function is constant at 1, so

$$
\lim_{x\to0^-}f(x)=1.
$$

For $$x\ge0$$, the function is constant at 2, so

$$
\lim_{x\to0^+}f(x)=2.
$$

Because the left-hand and right-hand limits differ, the two-sided limit does not exist.

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

**Proof (Limit Laws).** A limit statement means the function values can be forced arbitrarily close to a target value. If $$f(x)$$ is close to $$L$$ and $$g(x)$$ is close to $$M$$, then their sum is close to $$L + M$$, their product is close to $$LM$$, and their quotient is close to $$L/M$$ as long as $$M \ne 0$$.

A key idea is that the limit might not be exactly at the input value, but the function values can get arbitrarily close to the target. In AP Calculus, we often think of the small error as $$\varepsilon$$, which becomes negligible when the limit exists.

</div>

---

## Indeterminate forms and algebraic techniques

Direct substitution sometimes gives an indeterminate form, which means the algebraic structure must be simplified before the limit can be found. Common indeterminate forms include:

- $$0/0$$
- $$\infty/\infty$$
- $$0 \cdot \infty$$
- $$\infty - \infty$$
- $$1^\infty$$
- $$0^0$$
- $$\infty^0$$

In AP Calculus AB/BC, most of these are handled with algebra rather than advanced rules.

Common algebraic techniques:

- Factor and cancel a common factor,
- Multiply by a conjugate when radicals are involved,
- Combine fractions into a single rational expression,
- Use a known trig limit after rewriting the angle,
- Divide by the dominant power of $$x$$ for limits at infinity.

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

This is a classic removable-indeterminate limit: the original expression is undefined at 3, but the nearby behavior is well defined.

</div>

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\lim_{x\to0}\frac{\sqrt{x+1}-1}{x}.$$ 

Multiply by the conjugate to remove the radical from the numerator:

$$
\frac{\sqrt{x+1}-1}{x}=\frac{(\sqrt{x+1}-1)(\sqrt{x+1}+1)}{x(\sqrt{x+1}+1)}=\frac{x}{x(\sqrt{x+1}+1)}=\frac{1}{\sqrt{x+1}+1},\qquad x\ne0.
$$

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

Since both outer bounds tend to 0 as $$x\to0$$, the Squeeze Theorem gives

$$
\lim_{x\to0}x\sin\frac{1}{x}=0.
$$

</div>

---

## Important trig limits

Two core limits that appear often are:

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

A useful asymptotic idea is:

$$
\sqrt{x^2 + C} \sim \lvert x \rvert
$$

(where $$C$$ is a constant)

for large $$\lvert x \rvert$$, but be careful with the sign when $$x \to -\infty$$.

<div class="theorem-box">

**Example.** Evaluate $$\displaystyle\lim_{x\to\infty} \frac{3x^2+5x}{2x^2-7}$$ and identify the horizontal asymptote.

Divide numerator and denominator by $$x^2$$:

$$
\frac{3x^2+5x}{2x^2-7}=\frac{3+5/x}{2-7/x^2}.
$$

As $$x\to\infty$$, the terms $$5/x$$ and $$7/x^2$$ vanish, leaving the limit

$$
\frac{3}{2}.
$$

Therefore the horizontal asymptote is $$y=\frac32$$.

</div>

---

## Continuity

A function is continuous at $$x = a$$ when:

1. $$f(a)$$ exists,
2. $$\lim_{x \to a} f(x)$$ exists,
3. $$\lim_{x \to a} f(x) = f(a).$$

Continuity means the nearby behavior of the function matches the value at the point.

Types of discontinuities:

- Removable: a hole, often fixable by redefining one point,
- Jump: left and right limits differ,
- Infinite: a vertical asymptote,
- Oscillatory: no single nearby trend.

Functions that are continuous on their natural domains include:

- Polynomials,
- Rational functions where the denominator is nonzero,
- Exponential and logarithmic functions on their domains,
- Trigonometric functions on their domains,
- Compositions of continuous functions where defined.

---

## Intermediate Value Theorem

<div class="theorem-box">

**Theorem (Intermediate Value Theorem).** If $$f$$ is continuous on $$[a,b]$$ and $$N$$ lies between $$f(a)$$ and $$f(b)$$, then there exists some $$c \in (a,b)$$ such that $$f(c) = N$$.

</div>

This theorem guarantees at least one solution, but it does not tell you how many.

> [Image Placeholder: continuous curve crossing a horizontal line to illustrate IVT]

<div class="theorem-box">

**Proof (IVT).** Continuity means the graph cannot jump over a height. If the function starts below $$N$$ and ends above $$N$$, then moving from $$a$$ to $$b$$ forces the output to pass through every intermediate height. A discontinuity could skip the height, but a continuous function cannot.

</div>

## Average rate of change (Introduction to derivatives)

On $$[a,b]$$, the average rate of change is modeled by

$$
\frac{f(b) - f(a)}{b-a}
$$

This is also the slope of the secant line. The derivative will be the limit of this expression as the interval shrinks toward a single point. This will be explored more in Unit 2.

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
