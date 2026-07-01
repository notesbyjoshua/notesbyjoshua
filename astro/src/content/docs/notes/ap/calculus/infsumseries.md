---
title: "Unit 10: Infinite Sums and Series (BC-only)"
next: false
sidebar:
  order: 10
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

A sequence can converge, diverge to infinity, diverge to negative infinity, or oscillate without approaching one value.

Common tools for sequence limits include:

- comparing growth rates,
- using known function limits,
- dividing by the highest power of $$n$$,
- recognizing geometric behavior,
- using monotonicity and boundedness.

If a sequence is increasing and bounded above, it converges. If it is decreasing and bounded below, it converges. This is useful when an explicit limit is hard to compute. To review sequences, you can check out [Unit 13/14](/notes/ap/precalc/additionaltrig/) of AP Precalculus.

---

## Infinite series

A sequence is a list of terms. A series is the sum of those terms. Again, you can review more in [Unit 13/14](/notes/ap/precalc/additionaltrig/) of AP Precalculus.

An infinite series is the sum

$$
\sum_{n=1}^{\infty} a_n.
$$

Its convergence is defined by the sequence of partial sums:

$$
S_N = \sum_{n=1}^{N} a_n.
$$

The series *converges* when

$$
\lim_{N\to\infty}S_N
$$

exists as a finite number. Otherwise, the series *diverges*.

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

**Proof (nth-term test for divergence).** If an infinite series converges to a finite sum, then the partial sums

$$
S_N=a_1+a_2+\cdots+a_N
$$

must settle down. Consecutive partial sums then get closer together. But

$$
S_N-S_{N-1}=a_N.
$$

So the terms must approach $$0$$. If they do not, the partial sums cannot settle to one finite value, and thus, the infinite series diverges.

</div>

<div class="theorem-box">

**Key idea.** The nth-term test can only prove divergence. It never proves convergence.

</div>

<div class="theorem-box">

**Example.** Use the nth-term test to determine whether $$\sum_{n=1}^{\infty}\frac{3n+1}{2n-5}$$ converges or diverges.

Look at the terms:

$$
a_n=\frac{3n+1}{2n-5}.
$$

Divide numerator and denominator by $$n$$:

$$
\lim_{n\to\infty}\frac{3n+1}{2n-5}
=
\lim_{n\to\infty}\frac{3+\frac1n}{2-\frac5n}
=
\frac32.
$$

Since the terms do not approach $$0$$, the series diverges by the nth-term test.

</div>

---

## Geometric series

The infinite series (known as a geometric series)

$$
\sum_{n=0}^{\infty} ar^n
$$

converges when $$\lvert r \rvert < 1$$ and then

$$
\sum_{n=0}^{\infty} ar^n = \frac{a}{1-r}.
$$

<div class="theorem-box">

**Proof (Geometric series formula).** Let

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

**Example.** Does the series $$\displaystyle\sum_{n=0}^{\infty} 3\left(\tfrac{1}{4}\right)^n$$ converge? If so, evaluate it out.

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

<div class="theorem-box">

**Definition.** A *p-series* is defined as

$$
\sum_{n=1}^{\infty} \frac{1}{n^p}
$$

for some positive integer $$p$$. The p-series wil only converges if and only if $$p>1$$.

The *harmonic series* is a special case of the $$p$$-series with $$p=1$$:

$$
\sum_{n=1}^{\infty} \frac{1}{n}.
$$

The harmonic series by definition diverges.

</div>

The proof of the $$p$$-series converge requires techniques talked about later in this lesson.

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

Note that while $$p$$-series are easy to determine convergence, it is really hard to find the value for a convergent series. If you are curious, you can research the Riemann zeta function.

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

<div class="theorem-box">

**Proof (Integral Test).** Suppose $$f$$ is positive, continuous, and decreasing, with $$f(n)=a_n$$. On each interval $$[n,n+1]$$, the decreasing condition gives

$$
f(n+1)\le f(x)\le f(n).
$$

Integrating over that interval gives

$$
f(n+1)\le \int_n^{n+1}f(x)\,dx\le f(n).
$$

Adding these inequalities from $$n=1$$ to $$n=N$$ gives comparison bounds between partial sums and integrals:

$$
\sum_{n=2}^{N+1}a_n
\le
\int_1^{N+1}f(x)\,dx
\le
\sum_{n=1}^{N}a_n.
$$

These inequalities show that the positive series and the improper integral control each other up to a finite first term. Therefore, if one has a finite limit, so does the other; if one grows without bound, so does the other.

</div>

<div class="theorem-box">

**Example.** Use the Integral Test to determine whether

$$
\sum_{n=2}^{\infty}\frac{1}{n\ln n}
$$

converges or diverges.

Let

$$
f(x)=\frac{1}{x\ln x}.
$$

For $$x\ge2$$, this function is positive, continuous, and decreasing. Compare the series to the improper integral

$$
\int_2^\infty \frac{1}{x\ln x}\,dx.
$$

Use $$u=\ln x$$, so $$du=\frac{1}{x}\,dx$$:

$$
\int_2^\infty \frac{1}{x\ln x}\,dx
=
\int_{\ln 2}^{\infty}\frac{1}{u}\,du.
$$

This integral diverges because

$$
\int_{\ln 2}^{b}\frac{1}{u}\,du
=
\ln b-\ln(\ln 2)
$$

grows without bound as $$b\to\infty$$. Therefore, by the Integral Test,

$$
\sum_{n=2}^{\infty}\frac{1}{n\ln n}
$$

diverges.

</div>

---

## Comparison tests

Comparison tests are about matching behavior to a known benchmark. For positive series:

- to prove convergence, compare above by a convergent series,
- to prove divergence, compare below by a divergent series.

There are two types of comparisons: direct comparison, and limit comparison.

<div class="theorem-box">

**Theorem (Direct comparison test).**

- If $$0 \le a_n \le b_n$$ and $$\sum b_n$$ converges, then $$\sum a_n$$ converges,
- If $$0 \le b_n \le a_n$$ and $$\sum b_n$$ diverges, then $$\sum a_n$$ diverges.

</div>

<div class="theorem-box">

**Theorem (Limit comparison test).** If

$$
\lim_{n \to \infty} \frac{a_n}{b_n} = c
$$

with $$0<c<\infty$$, then $$\sum a_n$$ and $$\sum b_n$$ behave the same.

</div>

Limit comparison is often cleaner when the terms look like rational expressions or radicals, where it is hard to see if all the terms are greater/less than the desired function.

<div class="theorem-box">

**Proof (Comparison tests).** For direct comparison, assume $$0\le a_n\le b_n$$. If $$\sum b_n$$ converges, then its partial sums are bounded above. Since

$$
0\le \sum_{n=1}^{N}a_n\le \sum_{n=1}^{N}b_n,
$$

the partial sums of $$\sum a_n$$ are increasing and bounded, so $$\sum a_n$$ converges. The divergence part is the same idea reversed: if $$0\le b_n\le a_n$$ and $$\sum b_n$$ diverges, then the larger partial sums $$\sum a_n$$ must also grow without bound.

For limit comparison, if

$$
\lim_{n\to\infty}\frac{a_n}{b_n}=c
$$

with $$0<c<\infty$$, then for large $$n$$ the ratio $$a_n/b_n$$ is trapped between two positive constants. That means $$a_n$$ is eventually between constant multiples of $$b_n$$, so direct comparison makes the two series have the same convergence behavior.

</div>

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

<div class="theorem-box">

**Example.** Determine whether

$$
\sum_{n=1}^{\infty}\frac{3n^2+1}{n^3+5}
$$

converges or diverges.

For large $$n$$, the dominant terms are $$3n^2$$ and $$n^3$$, so the series behaves like

$$
\frac{3n^2}{n^3}=\frac{3}{n}.
$$

Use Limit Comparison with $$b_n=\frac{1}{n}$$:

$$
\lim_{n\to\infty}
\frac{\frac{3n^2+1}{n^3+5}}{\frac{1}{n}}
=
\lim_{n\to\infty}
\frac{n(3n^2+1)}{n^3+5}
=
\lim_{n\to\infty}
\frac{3n^3+n}{n^3+5}
=3.
$$

Since the limit is a positive finite number and $$\sum \frac1n$$ diverges, the given series diverges by Limit Comparison.

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

For positive-term series, convergence is about whether the sum of positive amounts stays finite. For alternating series, positive and negative terms can cancel. That creates two levels of convergence.

If

$$
\sum \lvert a_n \rvert
$$

converges, then $$\sum a_n$$ converges absolutely.

If $$\sum a_n$$ converges but $$\sum \lvert a_n \rvert$$ diverges, the convergence is conditional.

Absolute convergence is stronger. If a series converges absolutely, it converges.

<div class="theorem-box">

**Theorem (Alternating Series Test).** The series converges conditionally if:

- $$b_n$$ decreases eventually,
- $$b_n \to 0$$.

</div>

<div class="theorem-box">

**Proof (Alternating Series Test).** Consider an alternating series

$$
b_1-b_2+b_3-b_4+\cdots
$$

where $$b_n>0$$, $$b_n$$ decreases, and $$b_n\to0$$. The even partial sums increase:

$$
S_2\le S_4\le S_6\le\cdots,
$$

because each pair added after $$S_2$$ has the form $$b_{2k+1}-b_{2k+2}\ge0$$. The odd partial sums decrease:

$$
S_1\ge S_3\ge S_5\ge\cdots,
$$

because each pair added after $$S_1$$ has the form $$-b_{2k}+b_{2k+1}\le0$$. Also, every even partial sum is below every odd partial sum, and the gap between neighboring odd and even partial sums is one term:

$$
S_{2k+1}-S_{2k}=b_{2k+1}\to0.
$$

So the even and odd partial sums squeeze toward the same limit, meaning the alternating series converges.

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

### Alternating series error

For an alternating series satisfying the Alternating Series Test, the error after using $$n$$ terms is at most the magnitude of the first omitted term:

$$
\lvert R_n\rvert\le b_{n+1}.
$$

This works because the partial sums trap the true value from alternating sides, and each new term makes the trap smaller, and thus the "trap" can be modeled as the next term in the series.

<div class="theorem-box">

**Example.** Approximate $$\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n^2}$$ using the first $$4$$ terms, and bound the error.

The first four terms give

$$
1-\frac14+\frac19-\frac{1}{16}.
$$

The first omitted term has magnitude

$$
\frac{1}{5^2}=\frac{1}{25}.
$$

Therefore the approximation error is at most

$$
\frac{1}{25}=0.04.
$$

</div>

---

## Ratio and root tests

<div class="theorem-box">

**Theorem (Ratio Test).** Define a variable $$L$$ such that

$$
L = \lim_{n \to \infty} \left\lvert\frac{a_{n+1}}{a_n}\right\rvert.
$$

- if $$L<1$$, converge absolutely,
- if $$L>1$$ or infinite, diverge,
- if $$L=1$$, inconclusive.

</div>

<div class="theorem-box">

**Proof (Ratio Test).** If

$$
\lim_{n\to\infty}\left\lvert\frac{a_{n+1}}{a_n}\right\rvert=L<1,
$$

then for some number $$r$$ with $$L<r<1$$, the ratio is eventually less than $$r$$. That means the tail of $$\sum \lvert a_n\rvert$$ is bounded by a geometric series with ratio $$r$$, so the series converges absolutely.

If $$L>1$$, then eventually $$\lvert a_{n+1}\rvert>\lvert a_n\rvert$$ often enough that the terms cannot approach $$0$$. Therefore the original series diverges by the nth-term test. When $$L=1$$, both convergent and divergent examples are possible, so the test is inconclusive.

</div>

<div class="theorem-box">

**Theorem (Root Test).** Define a variable $$L$$ such that

$$
L = \lim_{n \to \infty} \sqrt[n]{\lvert a_n \rvert}
$$

- if $$L<1$$, converge absolutely,
- if $$L>1$$ or infinite, diverge,
- if $$L=1$$, inconclusive.

</div>

<div class="theorem-box">

**Proof (Root Test).** If

$$
\lim_{n\to\infty}\sqrt[n]{\lvert a_n\rvert}=L<1,
$$

then for some $$r$$ with $$L<r<1$$, the terms eventually satisfy

$$
\sqrt[n]{\lvert a_n\rvert}\le r.
$$

Raising both sides to the $$n$$th power gives

$$
\lvert a_n\rvert\le r^n.
$$

The tail is bounded by a convergent geometric series, so $$\sum a_n$$ converges absolutely. If $$L>1$$, then eventually $$\sqrt[n]{\lvert a_n\rvert}>1$$, so $$\lvert a_n\rvert>1$$ and the terms do not approach $$0$$. Thus the series diverges. If $$L=1$$, the test is inconclusive.

</div>

<div class="theorem-box">

**Example.** Determine if $$\displaystyle\sum_{n=0}^{\infty}\frac{2^n}{n!}$$ converges.

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

Since $$L=0<1$$, the Ratio Test guarantees the series converges absolutely. (This is the Maclaurin series for $$e^x$$ evaluated at $$x=2$$, so it sums to $$e^2$$. We will learn about this later.)

</div>

---

## Radius and intervals of convergence

A power series is a series with a variable in it, often written in the form

$$
\sum_{n=0}^{\infty} a_n(x-c)^n.
$$

For a fixed value of $$x$$, this becomes an ordinary numerical series. Some values of $$x$$ make the series converge, and other values make it diverge.

The **interval of convergence** is the set of all $$x$$-values where the power series converges. The **radius of convergence** is the distance from the center $$c$$ to the edge of that interval.

For a power series centered at $$c$$, convergence is centered around $$c$$:

- the series always converges at $$x=c$$,
- it converges for $$\lvert x-c\rvert<R$$,
- it diverges for $$\lvert x-c\rvert>R$$,
- the endpoints $$x=c-R$$ and $$x=c+R$$ must be checked separately.

The radius usually comes from the Ratio Test or Root Test. These tests give an inequality involving $$x$$. Solving that inequality gives the open interval first; endpoint testing comes afterward because the Ratio/Root Test usually becomes inconclusive there.

:::checklist
1. Use the Ratio Test or Root Test on the absolute value of the general term.
2. Solve the inequality $$L<1$$ to find the open interval of convergence.
3. Read the radius $$R$$ from the distance between the center and either side of that interval.
4. Substitute each endpoint into the original series and test it separately.
5. Write the final interval using brackets only for endpoints that converge.
:::

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

## Choosing a convergence test

Series tests are tools for different patterns.

:::strategy{title="Choosing a convergence test"}
1. First check whether $$a_n\to0$$. If not, the series diverges.
2. Look for a geometric series, $$p$$-series, or telescoping pattern (cancellation) before using heavier tests.
3. Use comparison tests for positive series that resemble simpler known series.
4. Use the Alternating Series Test only when terms decrease to $$0$$ in absolute value.
5. Use Ratio Test for factorials, exponentials, and power series.
6. After finding a radius of convergence, test endpoints separately.
:::

---

## Power series

A power series is like an infinite polynomial:

$$
\sum_{n=0}^{\infty} a_n(x-c)^n.
$$

Inside its interval of convergence, it behaves nicely:

- it can be differentiated term by term,
- it can be integrated term by term,
- the center $$c$$ acts like the anchor point for the expansion.

Power series are most often used to approximate functions, especially rational, trigonometric, exponential, or logarithmic functions.

### Differentiating and integrating power series

Inside the interval of convergence, a power series can be differentiated or integrated term by term.

This is allowed because power series behave like polynomials inside their interval of convergence. On any smaller closed interval inside the radius of convergence, the series converges uniformly, which means the infinite sum is well-behaved enough that limits, derivatives, and integrals can be handled term by term. For AP purposes, the main rule is:

:::key{name="Power series operations"}
Inside the interval of convergence, power series may be differentiated and integrated term by term. The radius of convergence stays the same, but endpoints must be checked again.
:::

<div class="theorem-box">

**Example.** Find a power series for $$\frac{1}{(1-x)^2}$$.

Start with

$$
\frac{1}{1-x}=\sum_{n=0}^{\infty}x^n,
\qquad
\lvert x\rvert<1.
$$

Differentiate both sides:

$$
\frac{1}{(1-x)^2}
=
\sum_{n=1}^{\infty}n x^{n-1}.
$$

The interval of convergence remains $$\lvert x\rvert<1$$ before checking endpoints. In this case, both endpoints diverge, so the interval is $$(-1,1)$$.

</div>

---

## Taylor and Maclaurin series

Taylor series is a power series that build a function from derivative information at one center point. The terms are chosen so that the polynomial matches the function's value, slope, concavity, and higher-order derivative behavior at the center.

<div class="theorem-box">

**Definition.** The *Taylor series* of $$f$$ centered at $$c$$ is defined as

$$
\sum_{n=0}^{\infty} \frac{f^{(n)}(c)}{n!}(x-c)^n.
$$

The *Maclaurin series* is the special case where $$c=0$$.

</div>

A function equals its Taylor series only where the series converges to the function, not merely where the series converges.

<div class="theorem-box">

**Proof (Taylor coefficient formula).** Suppose a polynomial centered at $$c$$ has the form

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

:::note
You may wonder the difference between Taylor and Maclaurin series, since when the terms increas to infinity, the functions effectively become the same. However, for most practical purposes, you only have a finite amount of terms to work with, and approximating about a point that is not $$x=0$$ will induce a lot of error in your calculations compared to a Taylor series centered about the correct point. However, most problems will only ask for the Maclaurin series since it is less tedious.
:::

Useful Maclaurin series to memorize:

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

Note that these are Maclaurin series, meaning that the approximations are centered at $$x=0$$.

<div class="theorem-box">

**Example.** Find the Maclaurin series for $$e^{-x^2}$$.

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

### Taylor polynomials and the Lagrange error bound

The $$n$$th Taylor polynomial is the finite truncation:

$$
T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(c)}{k!}(x-c)^k.
$$

Taylor polynomials are used to estimate values of functions when exact computation is inconvenient. The center should be close to the input value whenever possible, because powers of $$x-c$$ become small near the center. For alternating series, the first omitted term gives a clean error bound (since like before, the other terms will slowly make the error less). For non-alternating Taylor series, we often use the Lagrange error bound:

$$
\lvert R_n(x)\rvert
\le
\frac{M}{(n+1)!}\lvert x-c\rvert^{n+1},
$$

where $$M$$ is an upper bound for $$\lvert f^{(n+1)}(t)\rvert$$ between $$c$$ and $$x$$.

<div class="theorem-box">

**Proof (Lagrange error bound).** The remainder after the degree $$n$$ Taylor polynomial is

$$
R_n(x)=f(x)-T_n(x).
$$

For functions with enough derivatives, a result about Taylor remainders says this leftover error can be written as

$$
R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-c)^{n+1}
$$

for some number $$\xi$$ between $$c$$ and $$x$$. If $$M$$ is an upper bound for $$\lvert f^{(n+1)}(t)\rvert$$ on that interval, then

$$
\lvert f^{(n+1)}(\xi)\rvert\le M.
$$

Taking absolute values of the remainder formula gives

$$
\lvert R_n(x)\rvert
=
\left\lvert\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-c)^{n+1}\right\rvert
\le
\frac{M}{(n+1)!}\lvert x-c\rvert^{n+1}.
$$

</div>

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

<div class="theorem-box">

**Example.** How many nonzero terms of the Maclaurin series for $$\sin x$$ are needed to approximate $$\sin(0.4)$$ with error less than $$0.0001$$?

The Maclaurin series is

$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots.
$$

This is alternating near $$x=0$$, so the error is at most the first omitted term. Test the omitted terms at $$x=0.4$$.

Using only the first term $$0.4$$, the first omitted term is

$$
\frac{0.4^3}{3!}\approx0.0107,
$$

which is too large. Using the first two nonzero terms, the first omitted term is

$$
\frac{0.4^5}{5!}\approx0.0000853.
$$

This is less than $$0.0001$$, so two nonzero terms are enough:

$$
\sin(0.4)\approx0.4-\frac{0.4^3}{3!}.
$$

</div>

---

## Binomial series

The binomial series generalizes powers of $$a+x$$ using the binomial theorem:

$$
(a+x)^p
=
\sum_{n=0}^{\infty}\binom{p}{n}x^n a^{p-n},
\qquad
\left\lvert\frac{x}{a}\right\rvert<1,
$$

where

$$
\binom{p}{n}
=
\frac{p(p-1)(p-2)\cdots(p-n+1)}{n!}.
$$

The first few terms are

$$
(a+x)^p
=
a^p+pa^{p-1}x+\frac{p(p-1)}{2!}a^{p-2}x^2+\frac{p(p-1)(p-2)}{3!}a^{p-3}x^3+\cdots.
$$

<div class="theorem-box">

**Proof (Binomial series coefficients).** Suppose

$$
(a+x)^p=a_0+a_1x+a_2x^2+a_3x^3+\cdots.
$$

At $$x=0$$, the left side equals $$a^p$$, so $$a_0=a^p$$. Differentiate:

$$
p(a+x)^{p-1}=a_1+2a_2x+3a_3x^2+\cdots.
$$

Setting $$x=0$$ gives

$$
a_1=pa^{p-1}.
$$

Differentiate twice:

$$
p(p-1)(a+x)^{p-2}=2a_2+6a_3x+\cdots.
$$

Setting $$x=0$$ gives

$$
a_2=\frac{p(p-1)}{2!}a^{p-2}.
$$

Continuing this pattern gives

$$
a_n=\frac{p(p-1)(p-2)\cdots(p-n+1)}{n!}a^{p-n}.
$$

Substituting these coefficients into the power series gives the binomial series.

</div>

Binomial series can be used for any $$p$$ for $$(x+a)^p$$ (including roots, which are just fractional powers) and just require the binomial theorem ([Unit 13/14](/notes/ap/precalc/addtopics/) of AP Precalculus)

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

---

## Applications of series

Series can be used to:

- approximate function values,
- estimate definite integrals whose antiderivatives are not elementary (meaning they can't be solved using algebraic functions like trig or exponents),
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
AP scoring expects the name of the test and the key evidence. For example, "converges by Alternate Series Test" should include that the terms alternate, decrease in absolute value, and approach $$0$$.
:::

For Taylor polynomials, remember that approximation and error are linked. A polynomial is useful only when you know where it is centered, what degree it has, and how large the possible remainder could be.
