---
title: "Summations"
description: "Math notes on summation notation, arithmetic and geometric series, telescoping sums, sigma rules, and common identities."
sidebar:
  order: 5
---

---

These notes are adapted from Evan Chen's *Summations* handout. I placed the generating functions material on the [Recursion](/notes/math/algebra/recursion/) page, since that technique is especially useful for recurrence relations.

## Introduction

Olympiad-style summation problems usually fall into a few categories:

- **Algebraic sums**, such as $$\sum \frac{1}{n(n+1)}$$, where the main tools are partial fractions, telescoping, and algebraic manipulation.
- **Combinatorial sums**, which often involve binomial coefficients and counting arguments.
- **Number-theoretic sums**, which involve divisors, arithmetic functions, or modular arithmetic.

However, one idea that resonates through all three categories is **swapping the order of summation**.

<div class="theorem-box">

**Theorem 1.1 (Swapping the Order of Summation).** Let $$f(a,b)$$ be a function. Then

$$
\sum_{a \in A} \sum_{b \in B} f(a,b)
=
\sum_{b \in B} \sum_{a \in A} f(a,b).
$$

More generally, after a change of variables you can often rewrite a sum in a more useful form, such as

$$
\sum_{a \ge 0} \sum_{b \ge 0} f(a,b)
=
\sum_{k \ge 0} \sum_{\substack{a,b \ge 0 \\ a+b=k}} f(a,b).
$$

</div>

## Algebraic Manipulation

These are the most direct summation techniques, and they appear most often in AMC/AIME problems.

:::strategy
- Look for **telescoping**.
- Use **partial fractions** when denominators factor.
- Try to **factor the whole sum**, especially when the summand separates into pieces.
- Rewrite the expression as a **double sum**, then switch the order.
:::

### Telescoping and Partial Fractions

Often, when you have a polynomial in the denominator, it is easier to split it via partial fractions. Visit **placeholder, but precalc** for more information on partial fractions. Most of the time, if given an infinite sum, most terms should cancel or simplify in some sort.

**Example 2.1 (Stanford 2011).** Evaluate

$$
\sum_{n \ge 1} \frac{7n+32}{n(n+2)} \left(\frac34\right)^n.
$$

**Solution.** Note that the sum lacks an upper bound, meaning it is implied that it goes to infinity. First decompose into partial fractions:

$$
\frac{7n+32}{n(n+2)} = \frac{16}{n} - \frac{9}{n+2}.
$$

So the sum becomes

$$
\sum_{n \ge 1} \left( \frac{16}{n}\left(\frac34\right)^n - \frac{9}{n+2}\left(\frac34\right)^n \right).
$$

Since $$9 = 16\left(\frac34\right)^2$$, this telescopes:

$$
\sum_{n \ge 1} \left( \frac{16}{n}\left(\frac34\right)^n - \frac{16}{n+2}\left(\frac34\right)^{n+2} \right).
$$

The tail tends to zero, so the answer is

$$
16 \cdot \frac34 + \frac{16}{2} \cdot \frac{9}{16}
= 12 + \frac92
= \frac{33}{2}.
$$

### Swapping the Order of Summation

**Example 2.2.** A random permutation of $$\{1,2,\dots,n\}$$ has expected value $$1$$ for its number of fixed points.

The clean way to see this is not to count fixed points row by row over all permutations, but column by column. For each position, exactly $$(n-1)!$$ permutations fix that position, so the total number of fixed points over all $$n!$$ permutations is

$$
n \cdot (n-1)!.
$$

Dividing by $$n!$$ gives the average:

$$
\frac{n(n-1)!}{n!} = 1.
$$

**Example 2.3 (Linearity of Expectation).** If $$X$$ and $$Y$$ are random variables, then

$$
\mathbb E[X+Y] = \mathbb E[X] + \mathbb E[Y].
$$

**Proof.** Assume for simplicity that $$X$$ and $$Y$$ take nonnegative integer values. Then

$$
\mathbb E[X+Y]
= \sum_{n \ge 0} n \, \Pr(X+Y=n)
= \sum_{n \ge 0} \sum_{a+b=n} n \, \Pr(X=a,Y=b).
$$

Now write $$n=a+b$$ and switch to summing directly over $$a,b \ge 0$$:

$$
\mathbb E[X+Y]
= \sum_{a,b \ge 0} (a+b)\Pr(X=a,Y=b).
$$

Split the sum:

$$
\mathbb E[X+Y]
= \sum_{a \ge 0}\sum_{b \ge 0} a \Pr(X=a,Y=b)
 + \sum_{b \ge 0}\sum_{a \ge 0} b \Pr(X=a,Y=b).
$$

Then

$$
\sum_{b \ge 0} \Pr(X=a,Y=b) = \Pr(X=a),
\qquad
\sum_{a \ge 0} \Pr(X=a,Y=b) = \Pr(Y=b),
$$

so

$$
\mathbb E[X+Y]
= \sum_{a \ge 0} a\Pr(X=a) + \sum_{b \ge 0} b\Pr(Y=b)
= \mathbb E[X] + \mathbb E[Y].
$$

This is philosophically a double-summation argument.

<div class="theorem-box">

**Lemma 2.4.** For every positive integer $$n$$,

$$
\sum_{d \mid n} \varphi(d) = n.
$$

</div>

Note that $$\varphi$$ is Euler's totient function, look more in the **number theory** section (replace).

**Proof idea.** Look at the fractions

$$
\frac1n,\frac2n,\dots,\frac nn.
$$

After reducing them, exactly $$\varphi(d)$$ of them have denominator $$d$$ for each divisor $$d \mid n$$. Since there are $$n$$ fractions total, the sum of those counts is $$n$$.

**Example 2.5 (AMSP 2011 NT3 Exam).** Prove that

$$
\sum_{k \ge 1} \varphi(k)\left\lfloor \frac{n}{k} \right\rfloor
= \frac{n(n+1)}{2}.
$$

**Solution.** Rewrite the floor as a divisor count:

$$
\left\lfloor \frac{n}{k} \right\rfloor
= \sum_{\substack{m \le n \\ k \mid m}} 1.
$$

So

$$
\sum_{k \ge 1} \varphi(k)\left\lfloor \frac{n}{k} \right\rfloor
= \sum_{k \ge 1}\sum_{\substack{m \le n \\ k \mid m}} \varphi(k).
$$

Now reverse the order:

$$
= \sum_{m=1}^n \sum_{k \mid m} \varphi(k).
$$

By Lemma 2.4 the inner sum is just $$m$$, so

$$
\sum_{m=1}^n m = \frac{n(n+1)}{2}.
$$

### Roots of Unity Filters

Suppose we want to keep only terms with index divisible by $$3$$ in a binomial sum. The basic idea is to build an indicator function using roots of unity.

**Example 2.6.** Compute

$$
\sum_{k \ge 0} \binom{1000}{3k}.
$$

Let

$$
f(n) =
\begin{cases}
1 & n \equiv 0 \pmod 3, \\
0 & \text{otherwise}.
\end{cases}
$$

If $$\omega = e^{2\pi i/3}$$, then

$$
f(n) = \frac{1}{3}\left(1 + \omega^n + \omega^{2n}\right).
$$

Hence

$$
\sum_{k \ge 0} \binom{1000}{3k}
= \sum_{n \ge 0} \binom{1000}{n} f(n)
= \frac13 \sum_{n \ge 0} \binom{1000}{n} (1+\omega^n+\omega^{2n}).
$$

Separate into three sums:

$$
\frac13 \left[(1+1)^{1000} + (1+\omega)^{1000} + (1+\omega^2)^{1000}\right].
$$

Using $$1+\omega = -\omega^2$$ and $$1+\omega^2=-\omega$$, this becomes

$$
\frac13 \left[2^{1000} + (-\omega^2)^{1000} + (-\omega)^{1000}\right]
= \frac13 \left[2^{1000} + \omega + \omega^2\right]
= \frac13 \left(2^{1000}-1\right).
$$

### Problems

**Problem 2.7 (Putnam 2011).** Let $$a_1,a_2,\dots$$ and $$b_1,b_2,\dots$$ be sequences of positive reals such that $$a_1=b_1=1$$ and

$$
b_n = b_{n-1}a_n - 2
$$

for $$n \ge 2$$. Assume $$\{b_n\}$$ is bounded. Prove that

$$
S = \sum_{n=1}^{\infty} \frac{1}{a_1a_2\cdots a_n}
$$

converges, and evaluate $$S$$.

**Problem 2.8 (Putnam 2013).** Let $$a_0,a_1,\dots,a_n,x$$ be real numbers with $$0<x<1$$ and

$$
\frac{a_0}{1-x} + \frac{a_1}{1-x^2} + \cdots + \frac{a_n}{1-x^{n+1}} = 0.
$$

Prove that for some $$0<y<1$$,

$$
a_0 + a_1y + a_2y^2 + \cdots + a_n y^n = 0.
$$

**Problem 2.9 (Putnam 2015).** Let $$T$$ be the set of triples of positive integers that form the side lengths of a triangle. Compute

$$
\sum_{(a,b,c)\in T} \frac{2^a}{3^b5^c}.
$$

**Problem 2.10.** How many nonempty subsets of $$\{1,2,\dots,1000\}$$ have sum divisible by $$3$$?

## Sums Modulo a Prime

When working modulo a prime $$p$$, many ordinary summation tricks still work, but now the finite nature of $$\mathbb F_p$$ creates extra symmetry.

<div class="theorem-box">

**Lemma 3.1 (Fermat's Little Theorem).** If $$p$$ is prime and $$\gcd(a,p)=1$$, then

$$
a^{p-1} \equiv 1 \pmod p.
$$

</div>

**Proof idea.** Multiplication by $$a$$ permutes the nonzero residue classes modulo $$p$$, so

$$
a^{p-1}(p-1)! \equiv (p-1)! \pmod p.
$$

Cancel $$ (p-1)! $$.

<div class="theorem-box">

**Lemma 3.2 (Wilson's Theorem).** For any prime $$p$$,

$$
(p-1)! \equiv -1 \pmod p.
$$

</div>

**Exercise 3.3.** Prove Wilson's theorem if you have not already seen it.

<div class="theorem-box">

**Lemma 3.4 (Sums of Powers Modulo $$p$$).** Let $$p$$ be prime and let $$m$$ be an integer. Then

$$
1^m + 2^m + \cdots + (p-1)^m \equiv
\begin{cases}
0 \pmod p & \text{if } p-1 \nmid m, \\
-1 \pmod p & \text{if } p-1 \mid m.
\end{cases}
$$

</div>

**Proof sketch.** If $$g$$ is a primitive root modulo $$p$$, then

$$
1^m + 2^m + \cdots + (p-1)^m
= 1 + g^m + g^{2m} + \cdots + g^{(p-2)m}.
$$

This is a geometric series. If $$p-1 \nmid m$$ then the denominator is nonzero modulo $$p$$ while the numerator vanishes.

**Example 3.5 (Wolstenholme's Theorem).** If $$p>3$$ is prime, then

$$
(p-1)! \left(1+\frac12+\cdots+\frac{1}{p-1}\right) \equiv 0 \pmod{p^2}.
$$

It is cleaner to study

$$
S = 1^{-1}+2^{-1}+\cdots+(p-1)^{-1} \pmod{p^2}.
$$

Pair opposite terms:

$$
2S = \sum_{k=1}^{p-1} \left(\frac1k + \frac{1}{p-k}\right)
= \sum_{k=1}^{p-1} \frac{p}{k(p-k)}.
$$

Thus it is enough to show

$$
\sum_{k=1}^{p-1} \frac{1}{k(p-k)} \equiv 0 \pmod p.
$$

But modulo $$p$$,

$$
\frac{1}{k(p-k)} \equiv -\frac{1}{k^2},
$$

so the sum is

$$
-\sum_{k=1}^{p-1} k^{-2},
$$

which vanishes by Lemma 3.4.

<div class="theorem-box">

**Lemma 3.6 (Harmonic Modulo $$p$$ Trick).** For $$k=1,2,\dots,p-1$$,

$$
\frac1k \equiv (-1)^{k-1}\frac{1}{p}\binom{p}{k} \pmod p.
$$

</div>

This converts harmonic-looking expressions into binomial expressions, which are often easier to manipulate.

### Problems

**Problem 3.8 (ELMO 2009, John Berman).** Let $$p$$ be an odd prime and let $$x$$ be an integer such that $$p \mid x^3-1$$ but $$p \nmid x-1$$. Prove that $$p$$ divides

$$
(p-1)! \left(x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots - \frac{x^{p-1}}{p-1}\right).
$$

**Problem 3.9.** Let $$p>5$$ be prime. Prove that

$$
\frac{1}{1^3} + \frac{1}{2^3} + \cdots + \frac{1}{(p-1)^3} \equiv 0 \pmod{p^2}.
$$

**Problem 3.10 (OMO 2013 W42, Victor Wang).** Find the remainder when

$$
\prod_{i=0}^{100} (1-i^2+i^4)
$$

is divided by $$101$$.

## Multiplicative Number Theory

Earlier we saw the identity

$$
\sum_{d \mid n} \varphi(d)=n.
$$

This section puts that kind of divisor sum into a larger framework.

### Multiplicative Functions

**Definition 4.1.** An arithmetic function is a function $$f:\mathbb N \to \mathbb C$$.

- It is **multiplicative** if $$f(mn)=f(m)f(n)$$ whenever $$\gcd(m,n)=1$$.
- It is **completely multiplicative** if $$f(mn)=f(m)f(n)$$ for all positive integers $$m,n$$.

**Example 4.2.** Completely multiplicative functions include:

- The identity function $$\operatorname{id}(n)=n$$.
- The Dirichlet delta function
  $$
  \delta(n)=
  \begin{cases}
  1 & n=1, \\
  0 & n \ge 2.
  \end{cases}
  $$
- The constant function $$1(n)=1$$.

**Example 4.3.** Multiplicative but not completely multiplicative functions include:

- Euler's totient function $$\varphi$$.
- The Möbius function
  $$
  \mu(n)=
  \begin{cases}
  (-1)^m & \text{if } n \text{ has } m \text{ distinct prime factors}, \\
  0 & \text{if } n \text{ is not squarefree}.
  \end{cases}
  $$
- The divisor sum function $$\sigma(n)$$.
- The divisor counting function $$\tau(n)$$.

For multiplicative functions, it is enough to know the values on prime powers.

### Dirichlet Convolution

Given arithmetic functions $$f$$ and $$g$$, define

$$
(f*g)(n) = \sum_{d \mid n} f(d)g(n/d).
$$

Equivalently,

$$
(f*g)(n) = \sum_{de=n} f(d)g(e).
$$

**Example 4.4.** Verify the following:

- $$1*1=\tau$$
- $$1*\operatorname{id}=\sigma$$
- $$\operatorname{id}*\operatorname{id}=n\tau$$
- $$1*\varphi=\operatorname{id}$$
- $$\delta*f=f$$ for any arithmetic function $$f$$

Useful properties:

- $$*$$ is commutative.
- $$*$$ is associative.
- $$*$$ distributes over addition.
- The identity element is $$\delta$$.
- The convolution of multiplicative functions is multiplicative.

**Exercise 4.5.** Prove that the convolution of multiplicative functions is multiplicative.

**Example 4.6.** Reinterpret

$$
\sum_{d \mid n} \varphi(d)=n
$$

as

$$
\varphi * 1 = \operatorname{id}.
$$

Both sides are multiplicative, so it is enough to check prime powers:

$$
1 + (p-1) + (p^2-p) + \cdots + (p^e-p^{e-1}) = p^e.
$$

<div class="theorem-box">

**Lemma 4.7.** The Möbius function is the inverse of $$1$$ under Dirichlet convolution:

$$
\mu * 1 = \delta.
$$

</div>

**Exercise 4.8.** Prove this by checking prime powers.

### Möbius Inversion

<div class="theorem-box">

**Theorem 4.9 (Möbius Inversion Formula).** Let $$f$$ and $$g$$ be arithmetic functions. Then

$$
g(n) = \sum_{d \mid n} f(d)
\qquad\Longleftrightarrow\qquad
f(n) = \sum_{d \mid n} \mu(d)\,g(n/d).
$$

Equivalently, if $$g=f*1$$ then $$f=g*\mu$$.

</div>

**Proof.** If $$g=f*1$$, then

$$
g*\mu = (f*1)*\mu = f*(1*\mu) = f*\delta = f.
$$

**Example 4.10 (IMO Shortlist 1989).** Define $$\{a_n\}_{n \ge 1}$$ by

$$
\sum_{d \mid n} a_d = 2^n.
$$

Show that $$n \mid a_n$$.

By Möbius inversion,

$$
a_n = \sum_{d \mid n} \mu(n/d)\,2^d.
$$

From there, factor $$n$$ into prime powers and finish with divisibility arguments.

### Problems

**Problem 4.11.** Prove that for every integer $$n \ge 1$$,

$$
\sum_{d \mid n} (\tau(d))^3
=
\left(\sum_{d \mid n} \tau(d)\right)^2.
$$

**Problem 4.12 (Bulgaria 1989).** Let $$\Omega(n)$$ denote the number of prime factors of $$n$$ counted with multiplicity. Evaluate

$$
\sum_{n=1}^{1989} (-1)^{\Omega(n)} \left\lfloor \frac{1989}{n} \right\rfloor.
$$

**Problem 4.13.** Prove that for all positive integers $$n$$,

$$
\mu(n)=\sum_{\substack{1 \le k \le n \\ \gcd(k,n)=1}} \cos\left(\frac{2\pi k}{n}\right).
$$

## Author's Pick

These are strong practice problems from the original handout.

**Problem 6.1 (AMSP 2011 NT3 Exam).** For $$n \ge 1$$, evaluate

$$
\sum_{k=1}^n \mu(k)\left\lfloor \frac{n}{k} \right\rfloor.
$$

**Problem 6.2 (USAMO 2010/5).** Let $$q=\frac{3p-5}{2}$$ where $$p$$ is an odd prime, and let

$$
S_q = \frac{1}{2 \cdot 3 \cdot 4} + \frac{1}{5 \cdot 6 \cdot 7} + \cdots + \frac{1}{q(q+1)(q+2)}.
$$

Prove that if

$$
\frac1p - 2S_q = \frac{m}{n}
$$

for integers $$m,n$$, then $$p \mid (m-n)$$.

**Problem 6.3 (Princeton Individual Finals 2015).** Let $$p$$ be an odd prime. Prove that

$$
p^2 \mid 2^p-2
$$

if and only if

$$
\frac{1}{1 \cdot 2} + \frac{1}{3 \cdot 4} + \cdots + \frac{1}{(p-2)(p-1)} \equiv 0 \pmod p.
$$

**Problem 6.4 (Reed Dawson).** For $$n \ge 0$$, compute

$$
\sum_{k \ge 0} \binom{2k}{k}\binom{n}{k}\left(-\frac14\right)^k.
$$

**Problem 6.5 (NIMO 24.8).** For a complex number $$z \ne 3,4$$, let $$F(z)$$ denote the real part of

$$
\frac{1}{(3-z)(4-z)}.
$$

Compute

$$
\int_0^1 F\!\left(\frac{\cos 2\pi t + i \sin 2\pi t}{5}\right)dt.
$$

**Problem 6.6 (NIMO 14.8).** Let $$x$$ be a positive real number. Define

$$
A = \sum_{k=0}^{\infty} \frac{x^{3k}}{(3k)!},
\qquad
B = \sum_{k=0}^{\infty} \frac{x^{3k+1}}{(3k+1)!},
\qquad
C = \sum_{k=0}^{\infty} \frac{x^{3k+2}}{(3k+2)!}.
$$

Given that

$$
A^3+B^3+C^3+8ABC=2014,
$$

compute $$ABC$$.

**Problem 6.7 (OMO 2013 F24).** Real numbers $$a_0,a_1,\dots,a_{2013}$$ and $$b_0,b_1,\dots,b_{2013}$$ satisfy

$$
a_n = \frac{1}{63}\sqrt{2n+2}+a_{n-1},
\qquad
b_n = \frac{1}{96}\sqrt{2n+2}-b_{n-1}
$$

for $$n=1,2,\dots,2013$$. If $$a_0=b_{2013}$$ and $$b_0=a_{2013}$$, compute

$$
\sum_{k=1}^{2013}(a_kb_{k-1}-a_{k-1}b_k).
$$

**Problem 6.8 (IMO Shortlist 2014 N6).** Let $$a_1<a_2<\cdots<a_n$$ be pairwise coprime positive integers, with $$a_1$$ prime and $$a_1 \ge n+2$$. On the interval $$[0,a_1a_2\cdots a_n]$$ mark all integers divisible by at least one of $$a_1,\dots,a_n$$. These split the interval into smaller segments. Prove that the sum of the squares of the lengths of these segments is divisible by $$a_1$$.

**Problem 6.9 (OMO 2014 S25).** Compute

$$
\sum_{n=1}^{\infty} \frac{1}{\left(1+\frac12+\cdots+\frac1n\right)\binom{n+100}{100}}.
$$

**Problem 6.10 (OMO 2015 F30).** Ryan defines a function $$\Delta:\mathbb N \to \mathbb N$$ by $$\Delta(1)=1$$ and

$$
\Delta(n)=\sum_{\substack{d \mid n \\ d \ne n}}\Delta(d)
$$

for $$n>1$$. Determine

$$
\sum_{k=0}^{\infty} \frac{\Delta(15^k)}{15^k}.
$$

## Hints

- **2.7** Telescope. The answer is $$\frac32$$.
- **2.8** Use contradiction and the intermediate value theorem. Expand the geometric series and switch the order.
- **2.9** The answer is $$\frac{17}{21}$$. Try Ravi substitution.
- **2.10** Apply a roots-of-unity filter to $$-1 + (1+x)(1+x^2)\cdots(1+x^{1000})$$.
- **3.8** Use Lemma 3.6.
- **3.9** Repeat the proof of Wolstenholme by pairing opposite terms.
- **3.10** The answer is $$9$$. Rewrite $$1-i^2+i^4$$ as $$\frac{i^6+1}{i^2+1}$$ for $$i \not\equiv \pm 10 \pmod{101}$$.
- **4.11** Both sides are multiplicative, so check prime powers.
- **4.12** Compute $$\sum_{d \mid n}(-1)^{\Omega(d)}$$, then swap the order with the floor.
- **4.13** Let $$F(n)$$ be the right-hand side and show that $$F*1=\delta$$.
- **6.1** The answer is $$1$$. Switch the order with the floor and use $$\sum_{d \mid n}\mu(d)=\delta(n)$$.
- **6.2** Partial fractions.
- **6.3** Partial fractions and Lemma 3.6.
- **6.9** The answer is $$\frac{100}{9801}$$. Switch the order, telescope the inverted binomial coefficients, then telescope again.
- **6.10** The answer is $$\frac{11}{7}$$. Use a two-variable generating function.

## References

- Evan Chen, [*Summations*](http://web.evanchen.cc/handouts/Summation/Summation.pdf)
- Evan Chen, [*Expected Uses of Probability*](http://web.evanchen.cc/handouts/ProbabilisticMethod/ProbabilisticMethod.pdf)
- Herbert Wilf, [*generatingfunctionology*](https://www.math.upenn.edu/~wilf/DownldGF.html)
- Milan Novakovic, [*Recurrence Equations*](https://imomath.com/index.cgi?page=recursiveEquations)
- Milan Novakovic, [*The Method of Snake Oil*](https://imomath.com/index.cgi?page=methodOfSnakeOil)
