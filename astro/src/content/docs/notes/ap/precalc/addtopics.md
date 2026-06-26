---
title: "Unit 13 & 14: Additional Topics in Algebra"
next: false
sidebar:
  order: 10
---

---

## Introduction to Partial Fractions

**Goal**: Write a proper rational function $$\dfrac{N(x)}{D(x)}$$ ($$\deg N < \deg D$$) as a sum of simpler fractions so it is easier to integrate, sum, or manipulate algebraically. If the fraction is improper ($$\deg N \ge \deg D$$): polynomial long division first:

$$
\frac{N(x)}{D(x)} = Q(x) + \frac{R(x)}{D(x)}, \quad \deg R < \deg D
$$

Factor $$D(x)$$ into linear and irreducible quadratic factors over $$\mathbb{R}$$, then match this template:

| Factor in $$D(x)$$ | Partial fraction terms |
|--------------------|-------------------------|
| Distinct $$(x-a)$$ | $$\dfrac{A}{x-a}$$ |
| Repeated $$(x-a)^{m}$$ | $$\dfrac{A_1}{x-a}+\dfrac{A_2}{(x-a)^{2}}+\cdots+\dfrac{A_m}{(x-a)^{m}}$$ |
| Irreducible $$(ax^2+bx+c)$$ | $$\dfrac{Bx+C}{ax^2+bx+c}$$ |
| Repeated quadratic $$(ax^2+bx+c)^{m}$$ | Similar chain with numerators $$B_k x + C_k$$ |

**Solve for coefficients**: multiply through by the LCD and equate coefficients, or substitute convenient $$x$$ values plus compare powers of $$x$$. Note that for all polynomials with a degree of 3 or higher can be factored into the form $$ax^2+bx+c$$ for some $$a$$, $$b$$, and $$c$$. To solve out, you can do a partial fraction-style solving for the coefficients.

<div class="theorem-box">

**Example.** Decompose

$$
\frac{x^6 + x^5 + 7x^4 + 6x^3 + 2x^2 + 16x - 24}{x^5 + 8x^2}.
$$

Factor the denominator:

$$
x^5 + 8x^2 = x^2(x^3 + 8) = x^2(x + 2)(x^2 - 2x + 4).
$$

The numerator has degree $$6$$ and the denominator degree $$5$$, so the fraction is improper. Do polynomial long division first:

$$
(x^6 + x^5 + 7x^4 + 6x^3 + 2x^2 + 16x - 24) \div (x^5 + 8x^2).
$$

You obtain

$$
\frac{x^6 + x^5 + 7x^4 + 6x^3 + 2x^2 + 16x - 24}{x^5 + 8x^2}
= x + 1 + \frac{7x^4 - 2x^3 - 6x^2 + 8x - 24}{x^2(x + 2)(x^2 - 2x + 4)}.
$$

Doing partial fractions on the remainder:

$$
\frac{7x^4 - 2x^3 - 6x^2 + 8x - 24}{x^2(x + 2)(x^2 - 2x + 4)}
= \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x + 2} + \frac{Dx + E}{x^2 - 2x + 4}.
$$

Multiply through by $$x^2(x + 2)(x^2 - 2x + 4)$$:

$$
\begin{aligned}
7x^4 - 2x^3 - 6x^2 + 8x - 24 &= Ax(x + 2)(x^2 - 2x + 4) + B(x + 2)(x^2 - 2x + 4) \\
&\quad {}+ Cx^2(x^2 - 2x + 4) + (Dx + E)x^2(x + 2).
\end{aligned}
$$

Expand and **match coefficients** (or combine with strategic substitutions). One finds

$$
A = \frac{2}{5},\quad B = -3,\quad C = 1,\quad D = \frac{7}{2},\quad E = -2.
$$

So the full decomposition is

$$
\frac{x^6 + x^5 + 7x^4 + 6x^3 + 2x^2 + 16x - 24}{x^5 + 8x^2}
= x + 1 + \frac{2}{5x} - \frac{3}{x^2} + \frac{1}{x + 2} + \frac{\frac{7}{2}x - 2}{x^2 - 2x + 4},
$$

or equivalently,

$$
x + 1 + \frac{2}{5x} - \frac{3}{x^2} + \frac{1}{x + 2} + \frac{7x - 4}{2(x^2 - 2x + 4)}.
$$

</div>

---

## Mathematical Induction

Mathematical induction is a great way to prove statements $$P(n)$$ for all integers $$n \ge n_0$$ when you don't know how to derive it.

:::strategy{title="Mathematical induction"}
1. **Base case**: Verify $$P(n_0)$$ is true.
2. **Inductive hypothesis**: Assume $$P(k)$$ holds for some $$k \ge n_0$$.
3. **Inductive step**: Prove $$P(k+1)$$ follows from $$P(k)$$.
:::

If the step needs several earlier cases, use strong induction: assume $$P(n_0),\ldots,P(k)$$ and deduce $$P(k+1)$$.

### Tips for induction

Induction is like proving a row of dominoes will all fall. The base case knocks down the first domino, and the inductive step proves that whenever one domino falls, the next one must fall too.

When writing an induction proof, be very explicit about the statement you are proving. If the statement is

$$
P(n):\quad \sum_{i=1}^{n} i = \frac{n(n+1)}{2},
$$

then the inductive hypothesis is not just "assume it works." It is the exact statement with $$n$$ replaced by $$k$$:

$$
\sum_{i=1}^{k} i = \frac{k(k+1)}{2}.
$$

Then the goal is the exact statement with $$n$$ replaced by $$k+1$$:

$$
\sum_{i=1}^{k+1} i = \frac{(k+1)(k+2)}{2}.
$$

The usual strategy is to start from the $$k+1$$ expression and split off the last term:

$$
\sum_{i=1}^{k+1} i = \sum_{i=1}^{k} i + (k+1).
$$

Now the induction hypothesis appears, so you can replace $$\sum_{i=1}^{k}i$$ with $$\frac{k(k+1)}{2}$$.

Common induction proof types:

- **Sum formulas**: split the $$k+1$$ sum into the first $$k$$ terms plus the new last term.
- **Divisibility statements**: rewrite the $$k+1$$ expression so it contains the $$k$$ expression as a factor or piece.
- **Product/factorial statements**: write the $$k+1$$ case in terms of the $$k$$ case, often using $$(k+1)!=(k+1)k!$$.
- **Inequalities**: use the inductive hypothesis to get a lower or upper bound, then show that bound is strong enough for the next case.

<div class="theorem-box">

**Example.** Prove that for every integer $$n \ge 1$$,

$$
\sum_{k=1}^{n} k(k!) = (n+1)! - 1.
$$

**Step 1: Base case.** For $$n = 1$$,

Left-hand side:

$$
\sum_{k=1}^{1} k(k!) = 1(1!) = 1.
$$

Right-hand side:

$$
(1+1)! - 1 = 2! - 1 = 2 - 1 = 1.
$$

So the statement holds for $$n = 1$$.

**Step 2: Inductive hypothesis.** Assume that for some $$n \ge 1$$,

$$
\sum_{k=1}^{n} k(k!) = (n+1)! - 1.
$$

We must prove

$$
\sum_{k=1}^{n+1} k(k!) = (n+2)! - 1.
$$

**Step 3: Inductive step.** Consider the left-hand side for $$n+1$$:

$$
\sum_{k=1}^{n+1} k(k!) = \sum_{k=1}^{n} k(k!) + (n+1)(n+1)!.
$$

Apply the induction hypothesis:

$$
= (n+1)! - 1 + (n+1)(n+1)!.
$$

Factor out $$(n+1)!$$:

$$
= (n+1)!\bigl(1 + (n+1)\bigr) - 1 = (n+1)!(n+2) - 1.
$$

Since $$(n+2)(n+1)! = (n+2)!$$,

$$
= (n+2)! - 1,
$$

which is exactly what we needed.

**Conclusion.** Therefore, by mathematical induction,

$$
\sum_{k=1}^{n} k(k!) = (n+1)! - 1 \quad \text{for all integers } n \ge 1.
$$

</div>

### Induction With Inequalities

Induction with inequalities follows the same three-step structure, but the algebra feels a little different. Instead of trying to transform one side into exactly the other side, you usually build a chain of inequalities.

For example, suppose the induction hypothesis gives

$$
A_k \ge B_k.
$$

To prove the next case, you may start with $$A_{k+1}$$, rewrite it in terms of $$A_k$$, and then use the fact that $$A_k\ge B_k$$:

$$
A_{k+1} = \text{something involving } A_k \ge \text{something involving } B_k.
$$

Then you still have to finish the job by showing the new expression is at least $$B_{k+1}$$.

:::warning
The most common mistake is stopping too early. It is not enough to use the induction hypothesis; you must land on the exact inequality for $$k+1$$.
:::

<div class="theorem-box">

**Example.** Prove that

$$
2^{n}\ge n^{2}
$$

for all integers $$n\ge 4$$.

**Base case**: $$n=4$$:

$$
2^{4}=16
$$

and

$$
4^{2}=16.
$$

So $$2^{4}\ge 4^{2}$$ is true.

**Induction hypothesis**: Assume that for some integer $$k\ge 4$$,

$$
2^{k}\ge k^{2}.
$$

**Inductive step**: We need to prove

$$
2^{k+1}\ge (k+1)^{2}.
$$

Start with the left-hand side:

$$
2^{k+1}=2\cdot 2^{k}.
$$

Use the induction hypothesis:

$$
2\cdot 2^{k}\ge 2k^{2}.
$$

Now we need to show that $$2k^{2}$$ is at least $$(k+1)^{2}$$. Compare them:

$$
2k^{2}-(k+1)^{2}
=2k^{2}-(k^{2}+2k+1)
=k^{2}-2k-1.
$$

For $$k\ge 4$$,

$$
k^{2}-2k-1
=k(k-2)-1
\ge 4(2)-1
=7>0.
$$

Therefore

$$
2k^{2}\ge (k+1)^{2}.
$$

Combining the inequalities,

$$
2^{k+1}\ge 2k^{2}\ge (k+1)^{2}.
$$

So the statement is true for $$k+1$$. By induction, $$2^{n}\ge n^{2}$$ for all integers $$n\ge 4$$.

</div>

---

## Binomial Theorem

:::key{name="Binomial Theorem"}
For any nonnegative integer $$n$$,

$$
(a+b)^{n} = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k
$$

where $$\displaystyle \binom{n}{k} = \frac{n!}{k!(n-k)!}$$ (read as “$$n$$ choose $$k$$”). For $$(a-b)^{n}$$, replace $$b$$ with $$-b$$ in the expansion.
:::

- Pascal’s triangle: rows give coefficients for $$(a+b)^{n}$$ (Pascal's Triangle starts at Row 0 by convention)
- Symmetry: $$\binom{n}{k}=\binom{n}{n-k}$$
- Specific term: the term containing $$a^r b^{n-r}$$ has coefficient $$\binom{n}{r}$$ (fix exponents so they sum to $$n$$)

<div class="theorem-box">

**Proof (Sum of Pascal's Triangle and Binomial Theorem).** We will prove that the sum of the $$n$$th row of Pascal's Triangle is equal to $$2^{n}$$. Suppose we have the polynomial $$(1+x)^{n}$$. By the binomial theorem,

$$
(1+x)^{n} = \binom{n}{0} + \binom{n}{1}x + \binom{n}{2}x^{2} + \cdots + \binom{n}{n}x^{n}.
$$

Setting $$x = 1$$,

$$
(1+1)^{n} = \binom{n}{0} + \binom{n}{1} + \binom{n}{2} + \cdots + \binom{n}{n}.
$$

The RHS is the sum of the values of the $$n$$th row of Pascal's Triangle, and the LHS can be simplified to $$2^{n}$$. Thus, the sum of the values in the $$n$$th row of Pascal's Triangle is equal to $$2^{n}$$.

</div>

---

## Arithmetic & Geometric Sequences

### Arithmetic

An arithmetic sequence is a sequence where terms differ by a constant difference $$d$$:

$$
a_n = a_1 + (n-1)d \quad\text{equivalently}\quad a_n = a_m + (n-m)d
$$

### Geometric

A geometric sequence is a sequence where terms differ by a constant ratio $$r$$ ($$r\ne 0$$):

$$
a_n = a_1\, r^{\,n-1} \quad\text{equivalently}\quad a_n = a_m\, r^{\,n-m}
$$

## Arithmetic & Geometric Series

A series is a sum of sequence terms; $$\sum$$ notation packs long sums neatly.

### Summation Notation

The $$\sum$$ notation is a compact way to write out series. For a sum $$f(1) + f(2) + ... + f(n)$$ for some function $$f(x)$$, you can rewrite it as $$\sum_{i=1}^{n} f(i)$$. You can always reindex to whatever is convenient (e.g. in the previous example you can start at $$i=3$$ by doing $$\sum_{i=3}^{n + 2} f(i - 2)$$).

### Partial sums

A partial sum is defined as $$S_n = \sum_{k=1}^{n} a_k$$. Note that a partial sum always assumes that the starting index is $$1$$. The convergence of an infinite series studies $$\lim_{n\to\infty} S_n$$ when that limit exists.

### Finite arithmetic series

$$
\sum_{i=1}^{n} a_i = \frac{n}{2}\bigl(a_1 + a_n\bigr) = \frac{n}{2}\bigl(2a_1 + (n-1)d\bigr)
$$

<div class="theorem-box">

**Proof (finite arithmetic series).** Let $$S_n = \sum_{i=1}^{n} a_i$$ with $$a_i = a_1 + (i-1)d$$. Write the sum twice, forwards and backwards:

$$
S_n = a_1 + a_2 + \cdots + a_{n-1} + a_n,
$$

$$
S_n = a_n + a_{n-1} + \cdots + a_2 + a_1.
$$

Add column-wise. Pair $$a_k$$ with $$a_{n+1-k}$$: since $$a_k + a_{n+1-k} = \bigl(a_1+(k-1)d\bigr)+\bigl(a_1+(n-k)d\bigr) = 2a_1 + (n-1)d = a_1 + a_n$$, **every** pair totals $$a_1+a_n$$. There are $$n$$ such pairs, so

$$
2S_n = n(a_1+a_n) \quad\Longrightarrow\quad S_n = \frac{n}{2}(a_1+a_n).
$$

Substitute $$a_n = a_1+(n-1)d$$ to get $$\displaystyle S_n = \frac{n}{2}\bigl(2a_1+(n-1)d\bigr)$$.

</div>

### Finite geometric series ($$r \ne 1$$)

$$
\sum_{i=0}^{n-1} a_1 r^i = a_1 \frac{1-r^n}{1-r}, \qquad \sum_{i=1}^{n} a_1 r^{i-1} = a_1 \frac{1-r^n}{1-r}
$$

(Index shifts change exponents: always identify first term, ratio, and number of terms)

<div class="theorem-box">

**Proof (finite geometric series, $$r \ne 1$$).** Let

$$
S = \sum_{i=0}^{n-1} a_1 r^i = a_1 + a_1 r + a_1 r^2 + \cdots + a_1 r^{n-1}.
$$

Multiply by $$r$$:

$$
rS = a_1 r + a_1 r^2 + \cdots + a_1 r^n.
$$

Subtract $$rS$$ from $$S$$. Intermediate terms cancel (**telescoping**):

$$
S - rS = a_1 - a_1 r^n = a_1(1-r^n).
$$

Factor the left side: $$(1-r)S = a_1(1-r^n)$$. Because $$r \ne 1$$,

$$
S = a_1 \frac{1-r^n}{1-r}.
$$

If the series starts at index $$1$$ as $$\sum_{i=1}^{n} a_1 r^{i-1}$$, it is the same $$n$$ terms and the same sum.

</div>

### Infinite geometric series

If $$\lvert r\rvert < 1$$,

$$
\sum_{i=0}^{\infty} a r^i = \frac{a}{1-r}
$$

If $$\lvert r\rvert \ge 1$$, the series does **not** converge (unless $$a=0$$). This formula can be proven by seeing that as $$n$$ approaches infinity, $$r^n$$ approaches $$0$$ if $$\lvert r \rvert < 1$$ and diverges otherwise.

---

## More Sequences & Series (Recursion and Additional Ideas)

A sequence $$\{a_n\}$$ can be explicit ($$a_n$$ as a formula in $$n$$) or recursive ($$a_n$$ from previous terms).

### Recursion

A rule $$a_n = f(a_{n-1},\ldots)$$ plus initial conditions defines the sequence. Closed form may be found by pattern, generating-function methods, or solving linear recurrences. Learn more in [this lesson](/notes/math/algebra/recursion/).

### Telescoping sums

If $$b_k = u_{k+1}-u_k$$, then $$\sum_{k=m}^{n} b_k = u_{n+1}-u_m$$. Partial fractions often produce telescopes. Telescoping is usually done to cancel all the intermediate terms except for the first and last terms.

<div class="theorem-box">

**Example.** Find

$$
S = \sum_{k=1}^{n} \frac{1}{k(k+1)}.
$$

Start by decomposing $$\frac{1}{k(k+1)}$$ with partial fractions (try this yourself):

$$
\frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}.
$$

Then $$S$$ becomes

$$
S = \frac{1}{1} - \frac{1}{2} + \frac{1}{2} - \frac{1}{3} + \cdots + \frac{1}{n} - \frac{1}{n+1}.
$$

Notice that all the terms in the middle will cancel out (e.g. $$-\frac{1}{2}$$ and $$+\frac{1}{2}$$), leaving

$$
S = 1 - \frac{1}{n+1} = \frac{n}{n+1}.
$$

</div>

---

## An Introduction to Limits

Limits describe the long-term behavior of a function. In this section, we only care about what happens as $$x$$ becomes very large positive or very large negative.

For example,

$$
\lim_{x\to\infty}x^2=\infty
$$

means that $$x^2$$ grows without bound as $$x$$ moves farther and farther to the right. Similarly,

$$
\lim_{x\to-\infty}x^2=\infty,
\qquad
\lim_{x\to-\infty}x^3=-\infty.
$$

For positive integers $$n$$,

$$
\lim_{x\to\infty}x^n=\infty.
$$

As $$x\to-\infty$$,

$$
\lim_{x\to-\infty}x^n=
\begin{cases}
\infty, & n\text{ even}\\
-\infty, & n\text{ odd}
\end{cases}
$$

The reciprocal powers approach zero:

$$
\lim_{x\to\infty}\frac{1}{x^n}=0,
\qquad
\lim_{x\to-\infty}\frac{1}{x^n}=0.
$$

### Polynomial and rational limits

For polynomials, the leading term controls the end behavior. Lower-degree terms become insignificant compared to the highest-degree term.

<div class="theorem-box">

**Example.** Evaluate

$$
\lim_{x\to\infty}(2x^3+3x^2-5x+1).
$$

Factor out the highest power:

$$
2x^3+3x^2-5x+1
=
x^3\left(2+\frac{3}{x}-\frac{5}{x^2}+\frac{1}{x^3}\right).
$$

As $$x\to\infty$$, the parenthesized expression approaches $$2$$, while $$x^3\to\infty$$. Therefore

$$
\boxed{\lim_{x\to\infty}(2x^3+3x^2-5x+1)=\infty}.
$$

</div>

For rational functions, compare the degrees of the numerator and denominator:

| Degree comparison | Limit behavior as $$x\to\pm\infty$$ |
|---|---|
| numerator degree < denominator degree | limit is $$0$$ |
| numerator degree = denominator degree | limit is ratio of leading coefficients |
| numerator degree > denominator degree | no finite horizontal asymptote; use division or leading terms |

<div class="theorem-box">

**Example.** Evaluate

$$
\lim_{x\to\infty}\frac{4x^2-3x+7}{2x^2+5x-1}.
$$

Divide numerator and denominator by $$x^2$$:

$$
\lim_{x\to\infty}
\frac{4-\frac{3}{x}+\frac{7}{x^2}}{2+\frac{5}{x}-\frac{1}{x^2}}.
$$

The fractional pieces approach zero, so

$$
\boxed{
\lim_{x\to\infty}\frac{4x^2-3x+7}{2x^2+5x-1}=2
}.
$$

</div>

### Horizontal and oblique asymptotes

The line $$y=c$$ is a **horizontal asymptote** of $$y=f(x)$$ if

$$
\lim_{x\to\infty}f(x)=c
$$

or

$$
\lim_{x\to-\infty}f(x)=c.
$$

The line $$y=mx+b$$ is an **oblique asymptote** of $$y=f(x)$$ if

$$
\lim_{x\to\infty}\bigl(f(x)-(mx+b)\bigr)=0
$$

or the same is true as $$x\to-\infty$$.

For rational functions with numerator degree exactly one more than denominator degree, polynomial long division usually reveals the oblique asymptote.

<div class="theorem-box">

**Example.** Find the oblique asymptote of

$$
f(x)=\frac{x^2-3x+4}{x-2}.
$$

Use polynomial division:

$$
\frac{x^2-3x+4}{x-2}
=
x-1+\frac{2}{x-2}.
$$

Since

$$
\lim_{x\to\infty}\frac{2}{x-2}=0
$$

and also

$$
\lim_{x\to-\infty}\frac{2}{x-2}=0,
$$

the oblique asymptote is

$$
\boxed{y=x-1}.
$$

</div>

### Exponential, logarithmic, and trig limits

For the exponential function,

$$
\lim_{x\to\infty}e^x=\infty,
\qquad
\lim_{x\to-\infty}e^x=0.
$$

For the natural logarithm,

$$
\lim_{x\to\infty}\ln x=\infty.
$$

Some trigonometric limits exist only because another factor forces the expression to settle down. For example,

$$
\lim_{x\to\infty}\frac{\cos x}{x}=0.
$$

This is because

$$
-1\le \cos x\le 1,
$$

so for $$x>0$$,

$$
-\frac{1}{x}\le \frac{\cos x}{x}\le \frac{1}{x}.
$$

Both outer expressions approach $$0$$, so the middle expression is squeezed to $$0$$ as well.

However,

$$
\lim_{x\to\infty}\sin x
$$

does not exist, since $$\sin x$$ keeps oscillating forever instead of approaching one value.

---

## Practice

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

## Solutions

<div class="theorem-box">

### Solution 1

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

### Solution 2

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

### Solution 3

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

### Solution 4

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

### Solution 5

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

### Solution 6

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

### Solution 7

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

### Solution 8

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

### Solution 9

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

### Solution 10

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

### Solution 11

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

### Solution 12

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

### Solution 13

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

### Solution 14

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

### Solution 15

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

### Solution 16

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
