---
title: "Unit 10: Infinite Sums and Series (BC-only)"
next: false
sidebar:
  order: 10
---

---

This BC-only unit is about representing functions and numbers through infinitely many terms, and then deciding when those infinite processes make sense.

---

## Sequences

A sequence is a function whose domain is the positive integers:

$$
a_1, a_2, a_3, \dots
$$

We write

$$
\lim_{n \to \infty} a_n = L
$$

if the terms approach $$L$$.

If $$\sum a_n$$ converges, then necessarily $$a_n \to 0$$. The converse is false.

---

## Infinite series

A series is the sum

$$
\sum_{n=1}^{\infty} a_n.
$$

Its convergence is defined by the sequence of partial sums:

$$
S_N = \sum_{n=1}^{N} a_n.
$$

---

## Geometric series

$$
\sum_{n=0}^{\infty} ar^n
$$

converges when $$\lvert r \rvert < 1$$ and then

$$
\sum_{n=0}^{\infty} ar^n = \frac{a}{1-r}.
$$

<div class="theorem-box">

**Why the geometric sum formula works.** Let

$$
S_N=a+ar+ar^2+\cdots+ar^N.
$$

Multiplying by $$r$$ gives

$$
rS_N=ar+ar^2+\cdots+ar^{N+1}.
$$

Subtracting cancels the middle terms:

$$
S_N-rS_N=a-ar^{N+1}.
$$

So

$$
S_N=\frac{a(1-r^{N+1})}{1-r}.
$$

If $$\lvert r\rvert<1$$, then $$r^{N+1}\to0$$, leaving

$$
\frac{a}{1-r}.
$$

</div>

<div class="theorem-box">

**Example.** Find the sum of $$\displaystyle\sum_{n=0}^{\infty} 3\left(\tfrac{1}{4}\right)^n.$$

This is geometric with first term $$a=3$$ and ratio $$r=\tfrac14$$. Since $$\lvert r \rvert=\tfrac14<1$$, the series converges and we may apply the formula:

$$
\sum_{n=0}^{\infty} 3\left(\tfrac{1}{4}\right)^n = \frac{a}{1-r} = \frac{3}{1-\tfrac14} = \frac{3}{\tfrac34}.
$$

Simplifying,

$$
\frac{3}{\tfrac34} = 3\cdot\frac{4}{3} = 4.
$$

So the sum is $$4$$.

</div>

---

## Harmonic and p-series

The harmonic series

$$
\sum_{n=1}^{\infty} \frac{1}{n}
$$

diverges.

The p-series

$$
\sum_{n=1}^{\infty} \frac{1}{n^p}
$$

converges if and only if $$p>1$$.

<div class="theorem-box">

**Example.** Classify each series as convergent or divergent:

$$
\sum_{n=1}^{\infty}\frac{1}{n^2},\qquad \sum_{n=1}^{\infty}\frac{1}{\sqrt{n}}.
$$

Each is a p-series, so we only need to read off $$p$$ and compare it to $$1$$.

For the first series, the denominator is $$n^2$$, so $$p=2$$. Since $$p=2>1$$, the series

$$
\sum_{n=1}^{\infty}\frac{1}{n^2}
$$

converges.

For the second series, $$\frac{1}{\sqrt{n}}=\frac{1}{n^{1/2}}$$, so $$p=\tfrac12$$. Since $$p=\tfrac12\le1$$, the series

$$
\sum_{n=1}^{\infty}\frac{1}{\sqrt{n}}
$$

diverges. The terms shrink to zero, but not fast enough for the sum to stay finite.

</div>

---

## Integral Test

<div class="theorem-box">

**Theorem (Integral Test).** If $$f(x)$$ is positive, continuous, and decreasing for large $$x$$ with $$f(n)=a_n$$, then

$$
\sum a_n
$$

and

$$
\int f(x)\,dx
$$

either both converge or both diverge.

</div>

---

## Comparison tests

Direct comparison:

- if $$0 \le a_n \le b_n$$ and $$\sum b_n$$ converges, then $$\sum a_n$$ converges,
- if $$0 \le b_n \le a_n$$ and $$\sum b_n$$ diverges, then $$\sum a_n$$ diverges.

Limit comparison:

If

$$
\lim_{n \to \infty} \frac{a_n}{b_n} = c
$$

with $$0<c<\infty$$, then $$\sum a_n$$ and $$\sum b_n$$ behave the same.

<div class="theorem-box">

**Example.** Determine whether $$\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^2+1}$$ converges.

The terms are positive, and for every $$n\ge1$$ we have $$n^2+1>n^2$$, so

$$
0 \le \frac{1}{n^2+1} \le \frac{1}{n^2}.
$$

The benchmark series $$\sum \frac{1}{n^2}$$ is a p-series with $$p=2>1$$, so it converges. By direct comparison, the smaller positive series converges as well:

$$
\sum_{n=1}^{\infty}\frac{1}{n^2+1}
$$

converges.

</div>

---

## Alternating series

An alternating series often has the form

$$
\sum_{n=1}^{\infty} (-1)^n b_n
$$

or

$$
\sum_{n=1}^{\infty} (-1)^{n+1} b_n
$$

with $$b_n > 0$$.

<div class="theorem-box">

**Theorem (Alternating Series Test).** The series converges if:

- $$b_n$$ decreases eventually,
- $$b_n \to 0$$.

</div>

<div class="theorem-box">

**Example.** Show that the alternating harmonic series $$\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}$$ converges.

Write the series as $$\sum (-1)^{n+1} b_n$$ with $$b_n=\frac{1}{n}>0$$. We check the two hypotheses of the Alternating Series Test.

First, the magnitudes decrease, since

$$
b_{n+1}=\frac{1}{n+1} < \frac{1}{n} = b_n.
$$

Second, the magnitudes tend to zero:

$$
\lim_{n\to\infty}\frac{1}{n}=0.
$$

Both conditions hold, so by the Alternating Series Test the series converges. (Its sum is in fact $$\ln 2$$, and because $$\sum\frac1n$$ diverges, the convergence here is conditional.)

</div>

---

## Absolute vs conditional convergence

If

$$
\sum \lvert a_n \rvert
$$

converges, then $$\sum a_n$$ converges absolutely.

If $$\sum a_n$$ converges but $$\sum \lvert a_n \rvert$$ diverges, the convergence is conditional.

---

## Ratio and root tests

Ratio Test:

$$
L = \lim_{n \to \infty} \left\lvert\frac{a_{n+1}}{a_n}\right\rvert
$$

Root Test:

$$
L = \lim_{n \to \infty} \sqrt[n]{\lvert a_n \rvert}
$$

In either test:

- if $$L<1$$, converge absolutely,
- if $$L>1$$ or infinite, diverge,
- if $$L=1$$, inconclusive.

<div class="theorem-box">

**Example.** Use the Ratio Test on $$\displaystyle\sum_{n=0}^{\infty}\frac{2^n}{n!}.$$

Here $$a_n=\dfrac{2^n}{n!}$$. Form the ratio of consecutive terms:

$$
\frac{a_{n+1}}{a_n} = \frac{2^{n+1}}{(n+1)!}\cdot\frac{n!}{2^n}.
$$

Now cancel: $$\dfrac{2^{n+1}}{2^n}=2$$ and $$\dfrac{n!}{(n+1)!}=\dfrac{1}{n+1}$$, so

$$
\frac{a_{n+1}}{a_n} = \frac{2}{n+1}.
$$

Taking the limit,

$$
L=\lim_{n\to\infty}\frac{2}{n+1}=0.
$$

Since $$L=0<1$$, the Ratio Test guarantees the series converges absolutely. (This is the Maclaurin series for $$e^x$$ evaluated at $$x=2$$, so it sums to $$e^2$$.)

</div>

---

## nth-term test for divergence

<div class="theorem-box">

**Theorem (nth-Term Test for Divergence).** If

$$
\lim_{n \to \infty} a_n \ne 0
$$

or the limit does not exist, then

$$
\sum a_n
$$

diverges.

</div>

<div class="theorem-box">

**Why the nth-term test works.** If an infinite series converges to a finite sum, then the partial sums

$$
S_N=a_1+a_2+\cdots+a_N
$$

must settle down. Consecutive partial sums then get closer together. But

$$
S_N-S_{N-1}=a_N.
$$

So the terms must approach $$0$$. If they do not, the partial sums cannot settle to one finite value.

</div>

---

## Power series

A power series centered at $$c$$ has form

$$
\sum_{n=0}^{\infty} a_n(x-c)^n.
$$

There is a radius of convergence $$R$$:

- converges for $$\lvert x-c \rvert<R$$,
- diverges for $$\lvert x-c \rvert>R$$,
- endpoints must be checked separately.

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, scale=1.0]
\draw[->, gray!70, thick] (-4.7,0) -- (4.9,0) node[right] {$x$};
\draw[blue, very thick] (-2.5,0) -- (2.5,0);
\draw[orange!85!black, thick] (-2.5,0.16) -- (-2.5,-0.16) node[below] {$c-R$};
\draw[orange!85!black, thick] (0,0.16) -- (0,-0.16) node[below] {$c$};
\draw[orange!85!black, thick] (2.5,0.16) -- (2.5,-0.16) node[below] {$c+R$};
\draw[<->, red!75!black] (0,0.75) -- (2.5,0.75) node[midway, above] {$R$};
\draw[<->, red!75!black] (-2.5,0.75) -- (0,0.75) node[midway, above] {$R$};
\node[blue, anchor=south] at (0,0.1) {test says converge inside};
\node[gray!70!black, anchor=south] at (-3.5,0.15) {diverge outside};
\node[gray!70!black, anchor=south] at (3.5,0.15) {diverge outside};
\node[orange!85!black, align=center] at (0,-1.1) {endpoints need separate tests};
\end{tikzpicture}
```

<div class="theorem-box">

**Example.** Find the radius and interval of convergence of $$\displaystyle\sum_{n=1}^{\infty}\frac{x^n}{n}.$$

Apply the Ratio Test to the absolute values of the terms, with $$a_n=\dfrac{x^n}{n}$$:

$$
\left\lvert\frac{a_{n+1}}{a_n}\right\rvert = \left\lvert\frac{x^{n+1}}{n+1}\cdot\frac{n}{x^n}\right\rvert = \lvert x\rvert\cdot\frac{n}{n+1}.
$$

Taking the limit,

$$
L=\lim_{n\to\infty}\lvert x\rvert\cdot\frac{n}{n+1}=\lvert x\rvert.
$$

The series converges when $$L<1$$, that is when $$\lvert x\rvert<1$$, so the radius of convergence is $$R=1$$. Now test the endpoints.

At $$x=1$$ the series is $$\sum \frac{1}{n}$$, the harmonic series, which diverges.

At $$x=-1$$ the series is $$\sum \frac{(-1)^n}{n}$$, which converges by the Alternating Series Test.

Including only the endpoint that converges, the interval of convergence is

$$
[-1,\,1).
$$

</div>

---

## Taylor and Maclaurin series

The Taylor series of $$f$$ centered at $$c$$ is

$$
\sum_{n=0}^{\infty} \frac{f^{(n)}(c)}{n!}(x-c)^n.
$$

Maclaurin series is the special case $$c=0$$.

<div class="theorem-box">

**Why Taylor coefficients look like this.** Suppose a polynomial centered at $$c$$ has the form

$$
P(x)=a_0+a_1(x-c)+a_2(x-c)^2+\cdots.
$$

Plugging in $$x=c$$ gives $$P(c)=a_0$$. Differentiating once and plugging in $$c$$ gives $$P'(c)=a_1$$. Differentiating twice gives $$P''(c)=2!a_2$$. In general,

$$
P^{(n)}(c)=n!a_n.
$$

So to make the polynomial match the derivatives of $$f$$ at $$c$$, the coefficient must be

$$
a_n=\frac{f^{(n)}(c)}{n!}.
$$

</div>

Core series to memorize:

$$
\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n, \qquad \lvert x \rvert<1
$$

$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}
$$

$$
\sin x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}
$$

$$
\cos x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}
$$

<div class="theorem-box">

**Example.** Find the Maclaurin series for $$e^{-x^2}$$ by substitution.

Start from the known series

$$
e^u = \sum_{n=0}^{\infty}\frac{u^n}{n!} = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \cdots,
$$

which is valid for all $$u$$. Substitute $$u=-x^2$$:

$$
e^{-x^2} = \sum_{n=0}^{\infty}\frac{(-x^2)^n}{n!} = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{n!}.
$$

Writing out the first few terms,

$$
e^{-x^2} = 1 - x^2 + \frac{x^4}{2!} - \frac{x^6}{3!} + \cdots = 1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6} + \cdots.
$$

Because the original series converges for all $$u$$, this one converges for all $$x$$.

</div>

---

## Taylor polynomial and error

The $$n$$th Taylor polynomial is the finite truncation:

$$
T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(c)}{k!}(x-c)^k.
$$

For alternating Maclaurin series with decreasing term magnitudes, the truncation error is at most the first omitted term in absolute value.

<div class="theorem-box">

**Example.** The Maclaurin series $$\displaystyle\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$$ is alternating with decreasing magnitudes for small $$x$$. Estimate $$\sin(0.5)$$ using the first two terms and bound the error.

Using the first two terms,

$$
\sin(0.5) \approx 0.5 - \frac{(0.5)^3}{3!} = 0.5 - \frac{0.125}{6} \approx 0.479167.
$$

By the alternating series error bound, the error is at most the magnitude of the first omitted term, here the $$x^5$$ term:

$$
\lvert R \rvert \le \frac{(0.5)^5}{5!} = \frac{0.03125}{120} \approx 0.00026.
$$

So the true value of $$\sin(0.5)$$ lies within about $$0.00026$$ of the estimate. (The actual value is $$\sin(0.5)\approx0.479426$$, comfortably inside that bound.)

</div>

Taylor polynomials are used to estimate values of functions when exact computation is inconvenient. The center should be close to the input value whenever possible, because powers of $$x-c$$ become small near the center.

For alternating series, the first omitted term gives a clean error bound. For non-alternating Taylor series, AP BC often uses the Lagrange error bound:

$$
\lvert R_n(x)\rvert
\le
\frac{M}{(n+1)!}\lvert x-c\rvert^{n+1},
$$

where $$M$$ is an upper bound for $$\lvert f^{(n+1)}(t)\rvert$$ between $$c$$ and $$x$$.

<div class="theorem-box">

**Example.** Use the degree $$3$$ Maclaurin polynomial for $$e^x$$ to estimate $$e^{0.2}$$, and give a Lagrange error bound.

The degree $$3$$ Maclaurin polynomial is

$$
T_3(x)=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}.
$$

At $$x=0.2$$,

$$
T_3(0.2)=1+0.2+\frac{0.2^2}{2}+\frac{0.2^3}{6}.
$$

Compute:

$$
T_3(0.2)=1+0.2+0.02+\frac{0.008}{6}
=1.221333\ldots
$$

For the error, the next derivative of $$e^x$$ is still $$e^x$$. On $$0\le x\le0.2$$, we can use $$M=e^{0.2}$$, or a simple upper bound such as $$M=2$$. Then

$$
\lvert R_3(0.2)\rvert
\le
\frac{2}{4!}(0.2)^4
=
\frac{2}{24}(0.0016)
=
0.000133\ldots
$$

So the estimate is within about $$0.000134$$ of the true value.

</div>

---

## Sequence vs series

A sequence is a list of terms. A series is the sum of those terms.

The sequence question is:

$$
\text{Do the terms }a_n\text{ approach a value?}
$$

The series question is:

$$
\text{Do the partial sums }S_N\text{ approach a value?}
$$

These are related but not the same. A series can only converge if its terms approach zero, but terms approaching zero do not guarantee that the infinite sum converges.

<div class="theorem-box">

**Key idea.** The nth-term test can only prove divergence. It never proves convergence.

</div>

---

## Choosing a convergence test

Series tests are tools for different patterns.

Use geometric series when terms are built from a constant ratio. Use p-series when the series resembles

$$
\sum\frac{1}{n^p}.
$$

Use comparison when the terms are positive and resemble a known benchmark. Use limit comparison when the dominant long-run behavior is easier to compare than strict inequalities.

Use the integral test when the terms come from a positive, continuous, decreasing function that is easy to integrate.

Use the alternating series test when signs alternate and the magnitudes decrease to zero.

Use the ratio test for factorials, exponentials, and many power series. Use the root test when the entire term is raised to the $$n$$th power.

---

## Positive, alternating, absolute, and conditional

For positive-term series, convergence is about whether the sum of positive amounts stays finite.

For alternating series, positive and negative terms can cancel. That creates two levels of convergence:

- absolute convergence: $$\sum \lvert a_n\rvert$$ converges,
- conditional convergence: $$\sum a_n$$ converges but $$\sum \lvert a_n\rvert$$ diverges.

Absolute convergence is stronger. If a series converges absolutely, it converges.

---

## Remainder estimates

For an alternating series satisfying the Alternating Series Test, the error after using $$n$$ terms is at most the magnitude of the first omitted term:

$$
\lvert R_n\rvert\le b_{n+1}.
$$

This works because the partial sums trap the true value from alternating sides, and each new term makes the trap smaller.

For Taylor polynomials, the Lagrange error bound has the form

$$
\lvert R_n(x)\rvert
\le
\frac{M}{(n+1)!}\lvert x-c\rvert^{n+1},
$$

where $$M$$ bounds the absolute value of the next derivative on the interval between $$c$$ and $$x$$.

---

## Power series as functions

A power series is like an infinite polynomial:

$$
\sum_{n=0}^{\infty}a_n(x-c)^n.
$$

Inside its interval of convergence, it behaves nicely:

- it can be differentiated term by term,
- it can be integrated term by term,
- the center $$c$$ acts like the anchor point for the expansion.

The radius of convergence comes from the long-run behavior of the coefficients. The endpoints need separate testing because the ratio or root test usually becomes inconclusive there.

---

## Taylor series intuition

Taylor series build a function from derivative information at one center point. The terms are chosen so that the polynomial matches the function's value, slope, concavity, and higher-order derivative behavior at the center.

The Taylor polynomial

$$
T_n(x)
$$

is a finite approximation. The Taylor series is the infinite version. A function equals its Taylor series only where the series converges to the function, not merely where the series converges.

Maclaurin series are Taylor series centered at $$0$$.

---

## Memorized series as building blocks

The core Maclaurin series are not isolated facts. They are templates that can be modified by substitution, multiplication, differentiation, and integration.

For example, the geometric series

$$
\frac{1}{1-x}=\sum_{n=0}^{\infty}x^n
$$

is the source of many rational-function power series. The interval restriction changes whenever the input expression replacing $$x$$ changes.

When modifying a known series, update both:

- the formula,
- the interval or radius of convergence.

### Binomial series

The binomial series generalizes powers of $$1+x$$:

$$
(1+x)^p
=
\sum_{n=0}^{\infty}\binom{p}{n}x^n,
\qquad
\lvert x\rvert<1,
$$

where

$$
\binom{p}{n}
=
\frac{p(p-1)(p-2)\cdots(p-n+1)}{n!}.
$$

The first few terms are

$$
(1+x)^p
=
1+px+\frac{p(p-1)}{2!}x^2+\frac{p(p-1)(p-2)}{3!}x^3+\cdots.
$$

This is useful for functions like $$\sqrt{1+x}$$ or $$\frac{1}{\sqrt{1-x}}$$.

<div class="theorem-box">

**Example.** Find the first four nonzero terms of the Maclaurin series for $$\sqrt{1+x}$$.

Write

$$
\sqrt{1+x}=(1+x)^{1/2}.
$$

Use the binomial series with $$p=\frac12$$:

$$
(1+x)^{1/2}
=1+\frac12x+\frac{\frac12(\frac12-1)}{2!}x^2
+\frac{\frac12(\frac12-1)(\frac12-2)}{3!}x^3+\cdots.
$$

Simplify the coefficients:

$$
\frac{\frac12(-\frac12)}{2}
=-\frac18,
$$

and

$$
\frac{\frac12(-\frac12)(-\frac32)}{6}
=\frac{1}{16}.
$$

Therefore

$$
\sqrt{1+x}
=
1+\frac{x}{2}-\frac{x^2}{8}+\frac{x^3}{16}+\cdots.
$$

</div>

### Applications of series

Series can be used to:

- approximate function values,
- estimate definite integrals whose antiderivatives are not elementary,
- represent functions as power series,
- solve differential equations through coefficient matching.

<div class="theorem-box">

**Example.** Use a series to approximate

$$
\int_0^{0.5} e^{-x^2}\,dx
$$

through the $$x^4$$ term of the integrand.

Start with

$$
e^{-x^2}=1-x^2+\frac{x^4}{2!}-\frac{x^6}{3!}+\cdots.
$$

Through the $$x^4$$ term,

$$
e^{-x^2}\approx 1-x^2+\frac{x^4}{2}.
$$

Integrate term by term:

$$
\int_0^{0.5} e^{-x^2}\,dx
\approx
\int_0^{0.5}\left(1-x^2+\frac{x^4}{2}\right)\,dx.
$$

So

$$
\int_0^{0.5} e^{-x^2}\,dx
\approx
\left[x-\frac{x^3}{3}+\frac{x^5}{10}\right]_0^{0.5}.
$$

Substitute $$0.5$$:

$$
0.5-\frac{0.5^3}{3}+\frac{0.5^5}{10}
=
0.5-\frac{0.125}{3}+\frac{0.03125}{10}
\approx
0.46146.
$$

</div>

---

## Series notation habits

Indexing is flexible, but consistency matters. If a series starts at $$n=0$$, the first term uses $$n=0$$. If it starts at $$n=1$$, the first term uses $$n=1$$.

Factorials grow quickly, which is why they appear in Taylor series for functions like $$e^x$$, $$\sin x$$, and $$\cos x$$. The factorial in the denominator balances the higher derivatives and powers.

For AP work, always state the test used and enough hypothesis information to justify it.

---

## Common mistakes

:::mistakes
- Forgetting that $$a_n \to 0$$ is necessary but not sufficient.
- Using a convergence test whose hypotheses do not apply.
- Stopping after finding the radius of convergence without testing endpoints.
- Mixing up absolute and conditional convergence.
:::

---

## Sequences in more detail

A sequence can converge, diverge to infinity, diverge to negative infinity, or oscillate without approaching one value.

Common tools for sequence limits include:

- comparing growth rates,
- using known function limits,
- dividing by the highest power of $$n$$,
- recognizing geometric behavior,
- using monotonicity and boundedness.

If a sequence is increasing and bounded above, it converges. If it is decreasing and bounded below, it converges. This is useful when an explicit limit is hard to compute.

### Series as partial sums

A series

$$
\sum_{n=1}^{\infty}a_n
$$

is not really an infinite addition performed all at once. It is the limit of partial sums:

$$
S_N=a_1+a_2+\cdots+a_N.
$$

The series converges when

$$
\lim_{N\to\infty}S_N
$$

exists as a finite number.

### Integral Test conditions

The Integral Test applies when $$a_n=f(n)$$ and $$f$$ is:

:::conditions
1. positive,
2. continuous,
3. decreasing,
4. defined for sufficiently large $$x$$.
:::

If those conditions hold, then

$$
\sum a_n
$$

and

$$
\int f(x)\,dx
$$

either both converge or both diverge.

### Comparison test mindset

Comparison tests are about matching behavior to a known benchmark. For positive series:

- to prove convergence, compare above by a convergent series,
- to prove divergence, compare below by a divergent series.

Limit Comparison is often cleaner when the terms look like rational expressions or radicals. If

$$
\lim_{n\to\infty}\frac{a_n}{b_n}=c
$$

where $$0<c<\infty$$, then $$\sum a_n$$ and $$\sum b_n$$ have the same convergence behavior.

### Taylor series as function representations

A Taylor series centered at $$x=a$$ has the form

$$
\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n.
$$

The center matters because the coefficients are built from derivative values at that point. A Taylor polynomial is a finite approximation; a Taylor series is the infinite object that may represent the function only inside its interval of convergence.

Common Maclaurin series to recognize:

$$
e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!},
$$

$$
\sin x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{(2n+1)!},
$$

$$
\cos x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n}}{(2n)!},
$$

$$
\frac{1}{1-x}=\sum_{n=0}^{\infty}x^n,\qquad \lvert x\rvert<1.
$$

---

## Tips for the exam

Series questions are decision problems. The hard part is usually not algebra; it is choosing a test whose hypotheses match the series.

:::strategy{title="Choosing a convergence test"}
1. First check whether $$a_n\to0$$. If not, the series diverges.
2. Look for a geometric series, $$p$$-series, or telescoping pattern before using heavier tests.
3. Use comparison tests for positive series that resemble simpler known series.
4. Use the Alternating Series Test only when terms decrease to $$0$$ in absolute value.
5. Use Ratio Test for factorials, exponentials, and power series.
6. After finding a radius of convergence, test endpoints separately.
:::

:::exam{topic="Series justification"}
AP scoring expects the name of the test and the key evidence. For example, "converges by AST" should include that the terms alternate, decrease in absolute value, and approach $$0$$.
:::

For Taylor polynomials, remember that approximation and error are linked. A polynomial is useful only when you know where it is centered, what degree it has, and how large the possible remainder could be.
