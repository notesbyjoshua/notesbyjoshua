---
title: "Recursion"
next: false
sidebar:
  order: 6
---

# Recursion

---

The heart of recursion is to assume that you know previous elements of a sequence and then find a way to construct the next element in that sequence. Not only will explicit recursion problems appear of the AIME, USAMO, or USAJMO, often counting or combinatoric problems include them as well.

These notes are adapted in part from Jeffrey Chen's *Recursion in the AIME* handout and the generating-functions section of the summations notes.

## Introduction to Recurrence

A **recurrence relation** expresses a term of a sequence in terms of earlier terms. For example,

$$
a_n = 3a_{n-1}
$$

means that every term is three times the previous one. If $$a_1=1$$, then

$$
a_2=3,\qquad a_3=9,\qquad a_4=27,
$$

so the sequence begins

$$
1,3,9,27,81,\dots
$$

Because the relation holds for every valid $$n$$, we can repeatedly substitute backwards. For instance, if

$$
a_n=3a_{n-1}
\qquad\text{and}\qquad
a_{n-1}=3a_{n-2},
$$

then

$$
a_n=9a_{n-2}.
$$

In contest math, we often do not need a closed form.

:::strategy{title="Solving a recurrence in contests"}
- Define a sequence clearly.
- Find a recurrence.
- Compute initial values.
- Build a short table until you reach the term you want.
:::

## Recursive Counting

Recursion becomes especially useful when direct counting is messy but a "last move" or "final case split" is easy to describe.

### Staircase Problem

**Example 2.1.** Fred wants to climb a $$10$$-step staircase. He can climb either $$1$$ or $$2$$ steps at a time. In how many ways can he climb the staircase?

**Solution.** Instead of counting only the $$10$$-step case, define

$$
a_n = \text{the number of ways to climb } n \text{ stairs}.
$$

Now think about Fred's last move:

- If his last move is a single step, then before that he had climbed $$n-1$$ stairs.
- If his last move is a double step, then before that he had climbed $$n-2$$ stairs.

These are the only possibilities, so

$$
a_n = a_{n-1} + a_{n-2}.
$$

The initial values are

$$
a_1=1,\qquad a_2=2.
$$

So the sequence begins

$$
1,2,3,5,8,13,21,34,55,89.
$$

Therefore,

$$
a_{10}=89.
$$

This is the Fibonacci recurrence in disguise, which appears constantly in AMC and AIME counting problems.

### Spacy Subsets

**Example 3.1 (2007 AMC 12).** Call a set of integers **spacy** if it contains no more than one out of any three consecutive integers. How many subsets of $$\{1,2,3,\dots,12\}$$, including the empty set, are spacy?

**Solution.** Let

$$
a_n = \text{the number of spacy subsets of } \{1,2,\dots,n\}.
$$

Now split into two cases:

- If a spacy subset contains $$n$$, then it cannot contain $$n-1$$ or $$n-2$$. So the rest of the set is a spacy subset of $$\{1,2,\dots,n-3\}$$, giving $$a_{n-3}$$ possibilities.
- If a spacy subset does not contain $$n$$, then it is just a spacy subset of $$\{1,2,\dots,n-1\}$$, giving $$a_{n-1}$$ possibilities.

Hence

$$
a_n=a_{n-1}+a_{n-3}.
$$

The initial values are

$$
a_1=2,\qquad a_2=3,\qquad a_3=4,
$$

since the spacy subsets are:

- for $$n=1$$: $$\varnothing,\{1\}$$,
- for $$n=2$$: $$\varnothing,\{1\},\{2\}$$,
- for $$n=3$$: $$\varnothing,\{1\},\{2\},\{3\}$$.

Now compute forward:

$$
\begin{aligned}
a_4&=6, & a_5&=9, & a_6&=13, \\
a_7&=19, & a_8&=28, & a_9&=41, \\
a_{10}&=60, & a_{11}&=88, & a_{12}&=129.
\end{aligned}
$$

So the answer is

$$
129.
$$

### Tower of Cubes

**Example 3.2 (AIME 2006).** A collection of eight cubes consists of one cube with edge length $$k$$ for each integer $$k$$ from $$1$$ to $$8$$. A tower is built using all eight cubes, and the cube immediately on top of a cube with edge length $$k$$ must have edge length at most $$k+2$$. How many towers can be constructed?

**Solution.** Define

$$
a_n=\text{the number of valid towers using cubes }1,2,\dots,n.
$$

Look at the cube of edge length $$n$$. In a valid tower, it can be:

- at the bottom,
- directly above cube $$n-1$$,
- directly above cube $$n-2$$.

So for each valid tower on $$n-1$$ cubes, there are exactly three ways to insert cube $$n$$. Thus

$$
a_n=3a_{n-1}.
$$

We begin with

$$
a_2=2,
$$

since either the cube of side length $$1$$ is on the bottom and $$2$$ is on top, or vice versa.

Then

$$
a_8 = 3^6 \cdot a_2 = 3^6 \cdot 2 = 1458.
$$

This is a good reminder that some recurrences only become valid after the first few terms; here the relation is not meant to be applied at $$n=2$$ itself.

## Catalan Numbers

Catalan numbers arise in many recursive counting problems where a structure splits naturally into a left part and a right part.

**Example 4.1.** How many paths are there from $$(0,0)$$ to $$(n,n)$$ using only right and up steps, such that the path never goes above the line $$y=x$$?

Let

$$
C_n=\text{the number of such paths from }(0,0)\text{ to }(n,n).
$$

To get a recurrence, look at the **first** point $$(i,i)$$ after $$(0,0)$$ where the path returns to the diagonal.

Then:

- the initial portion of the path contributes $$C_{i-1}$$ possibilities,
- the remaining portion contributes $$C_{n-i}$$ possibilities.

Summing over all possible first return points gives

$$
C_n = C_0C_{n-1}+C_1C_{n-2}+\cdots+C_{n-1}C_0
=\sum_{i=0}^{n-1} C_iC_{n-i-1}.
$$

For example, when $$n=3$$, there are $$5$$ such paths.

<div class="theorem-box">

**Theorem 4.2 (Catalan Numbers).** The $$n$$th Catalan number has explicit formula

$$
C_n=\frac{1}{n+1}\binom{2n}{n}.
$$

</div>

We will not prove the closed form here, but it is one of the most important counting sequences in olympiad combinatorics.

### Balanced Brackets

**Example 4.3.** How many ways are there to arrange $$n$$ open brackets and $$n$$ closed brackets so that, reading from left to right, the number of closed brackets never exceeds the number of open brackets?

**Solution.** This is a Catalan-number problem.

Make the following bijection:

- each open bracket corresponds to a step to the right,
- each closed bracket corresponds to a step upward.

Then a bracket string with $$n$$ opens and $$n$$ closes becomes a path from $$(0,0)$$ to $$(n,n)$$. The condition that the number of closed brackets never exceeds the number of open brackets means the path never goes above the line $$y=x$$.

So the answer is simply

$$
C_n=\frac{1}{n+1}\binom{2n}{n}.
$$

## Practice Problems

These are good recursion problems to revisit after you are comfortable with the examples above.

**Exercise 5.1.** How many ways are there to tile a $$10 \times 2$$ board with $$1 \times 2$$ dominoes?

**Exercise 5.2 (AMC 12 2019).** How many binary sequences of length $$19$$ begin with $$0$$, end with $$0$$, contain no two consecutive $$0$$'s, and contain no three consecutive $$1$$'s?

**Exercise 5.3 (AIME 2015).** There are $$2^{10}=1024$$ possible $$10$$-letter strings using only $$A$$ and $$B$$. How many do not contain more than three adjacent identical letters?

**Exercise 5.4.** Given a regular $$2n$$-gon, how many ways are there to pair vertices with nonintersecting chords?

**Exercise 5.5 (AIME 2001).** A mail carrier delivers mail to the nineteen houses on one side of Elm Street. No two adjacent houses receive mail on the same day, and there are never more than two consecutive houses that get no mail. How many delivery patterns are possible?

## Generating Functions

Generating functions are one of the cleanest ways to solve linear recurrences. They are also a powerful summation tool, so this section is adapted from the generating-functions part of the summations handout and placed here because it fits recursion especially well.

The basic idea is this: given a sequence $$a_n$$, package it into the formal power series

$$
A(x) = \sum_{n \ge 0} a_n x^n.
$$

That lets us turn a whole sequence into one algebraic object. This is useful because:

- $$A(x)$$ may have a nice closed form.
- The coefficients of $$A(x)$$ encode the entire sequence.
- Recurrence relations often turn into algebraic equations in $$A(x)$$.
- Once you get a rational expression for $$A(x)$$, partial fractions can recover a closed form.

### Toy Applications

**Example 5.1.** Show that

$$
\sum_{n \ge 0} \binom{1000}{n} = 2^{1000}.
$$

Let $$a_n=\binom{1000}{n}$$. Then

$$
A(x)=\sum_{n \ge 0} a_nx^n=\sum_{n \ge 0}\binom{1000}{n}x^n=(1+x)^{1000}.
$$

Plugging in $$x=1$$ gives the identity immediately.

**Example 5.2.** Compute

$$
\sum_{n \ge 0} n\binom{1000}{n}.
$$

Differentiate the previous generating function:

$$
\sum_{n \ge 1} n\binom{1000}{n}x^{n-1} = 1000(1+x)^{999}.
$$

Now set $$x=1$$:

$$
\sum_{n \ge 0} n\binom{1000}{n}=1000\cdot 2^{999}.
$$

**Exercise 5.3.** Compute

$$
\sum_{n \ge 0} n^2\binom{1000}{n}.
$$

### Linear Recurrences

Consider the Lucas numbers $$L_n$$ defined by

$$
L_0=2,\qquad L_1=1,\qquad L_{n+2}=L_{n+1}+L_n.
$$

The first few terms are

$$
2,1,3,4,7,11,18,29,\dots
$$

<div class="theorem-box">

**Theorem 5.4 (Closed Form for Lucas Numbers).** Let

$$
\alpha=\frac{1+\sqrt5}{2},
\qquad
\beta=\frac{1-\sqrt5}{2}.
$$

Then

$$
L_n=\alpha^n+\beta^n.
$$

</div>

**Proof.** Consider the generating function

$$
L(x)=\sum_{n \ge 0} L_nx^n = 2+x+3x^2+4x^3+7x^4+\cdots.
$$

Now write shifted copies:

$$
xL(x)=2x+x^2+3x^3+4x^4+\cdots,
$$

$$
x^2L(x)=2x^2+x^3+3x^4+\cdots.
$$

Because $$L_{n+2}=L_{n+1}+L_n$$, subtracting gives

$$
L(x)-xL(x)-x^2L(x)=2-x.
$$

So

$$
(1-x-x^2)L(x)=2-x,
$$

hence

$$
L(x)=\frac{2-x}{1-x-x^2}.
$$

Factor the denominator:

$$
1-x-x^2=(1-\alpha x)(1-\beta x).
$$

Then partial fractions give

$$
L(x)=\frac{1}{1-\alpha x}+\frac{1}{1-\beta x}.
$$

Expand each as a geometric series:

$$
L(x)=\sum_{n \ge 0}(\alpha x)^n + \sum_{n \ge 0}(\beta x)^n
=\sum_{n \ge 0}(\alpha^n+\beta^n)x^n.
$$

Matching coefficients yields

$$
L_n=\alpha^n+\beta^n.
$$

**Exercise 5.5.** Derive Binet's formula for Fibonacci numbers:

$$
F_n=\frac{1}{\sqrt5}(\alpha^n-\beta^n).
$$

As an intermediate step, show that the Fibonacci generating function is

$$
\frac{x}{1-x-x^2}.
$$

### Common Generating Functions

We already know

$$
\frac{1}{1-x}=1+x+x^2+\cdots
$$

and

$$
(1+x)^n=\sum_{k \ge 0}\binom{n}{k}x^k.
$$

The next result gives many more useful expansions.

<div class="theorem-box">

**Theorem 5.6 (Generalized Binomial Theorem).** For any real number $$r$$,

$$
(1+x)^r = \sum_{n \ge 0} \binom{r}{n}x^n,
$$

where

$$
\binom{r}{n} = \frac{r(r-1)\cdots(r-n+1)}{n!}.
$$

</div>

**Proof sketch.** Write

$$
(1+x)^r = a_0+a_1x+a_2x^2+a_3x^3+\cdots
$$

and differentiate enough times to isolate the coefficient you want. For example, comparing constant terms after three derivatives gives

$$
a_3=\frac{r(r-1)(r-2)}{3!}.
$$

Important consequences:

- Setting $$r=-1$$ gives
  $$
  \frac{1}{1+x}=\sum_{n \ge 0}(-x)^n.
  $$
- More generally,
  $$
  \frac{1}{(1-x)^{m+1}}=\sum_{k \ge 0}\binom{k+m}{m}x^k.
  $$
- Also,
  $$
  \frac{x^m}{(1-x)^{m+1}}=\sum_{k \ge 0}\binom{k}{m}x^k.
  $$
- A very important identity is
  $$
  \frac{1}{\sqrt{1-4x}}=\sum_{k \ge 0}\binom{2k}{k}x^k.
  $$
- Integrating that identity gives the Catalan generating function:
  $$
  \frac{1-\sqrt{1-4x}}{2x}=\sum_{k \ge 0} C_kx^k,
  $$
  where
  $$
  C_k=\frac{1}{k+1}\binom{2k}{k}.
  $$
- The exponential series is
  $$
  e^x=\sum_{k \ge 0}\frac{x^k}{k!}.
  $$

For quick reference:

| Generating function | Sequence |
| --- | --- |
| $$ (1+x)^n $$ | $$ \displaystyle \sum_{k \ge 0}\binom{n}{k}x^k $$ |
| $$ \dfrac{1}{(1-x)^{m+1}} $$ | $$ \displaystyle \sum_{k \ge 0}\binom{k+m}{m}x^k $$ |
| $$ \dfrac{x^m}{(1-x)^{m+1}} $$ | $$ \displaystyle \sum_{k \ge 0}\binom{k}{m}x^k $$ |
| $$ \dfrac{1}{\sqrt{1-4x}} $$ | $$ \displaystyle \sum_{k \ge 0}\binom{2k}{k}x^k $$ |
| $$ \dfrac{1-\sqrt{1-4x}}{2x} $$ | $$ \displaystyle \sum_{k \ge 0} C_kx^k $$ |
| $$ e^x $$ | $$ \displaystyle \sum_{k \ge 0}\frac{x^k}{k!} $$ |

**Example 5.8 (HMMT 2007 Combinatorics #9).** Let $$S$$ be the set of triples $$(i,j,k)$$ of positive integers satisfying $$i+j+k=17$$. Compute

$$
\sum_{(i,j,k)\in S} ijk.
$$

Consider

$$
F(x)=\left(\sum_{i \ge 0} ix^i\right)\left(\sum_{j \ge 0} jx^j\right)\left(\sum_{k \ge 0} kx^k\right).
$$

We want the coefficient of $$x^{17}$$. Since

$$
\sum_{n \ge 0} nx^n = \frac{x}{(1-x)^2},
$$

we get

$$
F(x)=\left(\frac{x}{(1-x)^2}\right)^3 = \frac{x^3}{(1-x)^6}.
$$

So we need the coefficient of $$x^{14}$$ in $$\frac{1}{(1-x)^6}$$, which is

$$
\binom{19}{5}.
$$

### Snake Oil Method

The "Snake Oil" method is a systematic way to evaluate a sum depending on a free variable. Suppose

$$
a_n=\sum_k F(k,n).
$$

:::strategy{title="Snake Oil method"}
- Instead of attacking $$a_n$$ directly, form the generating function $$A(x)=\sum_{n \ge 0} a_nx^n = \sum_{n \ge 0}\sum_k F(k,n)x^n$$.
- Switch the order of summation to get $$A(x)=\sum_k \sum_{n \ge 0} F(k,n)x^n$$.
- If the inner sums become recognizable generating functions, the problem becomes much easier.
:::

**Example 5.9.** For $$n \ge 0$$, compute

$$
\sum_{k \ge 0}\binom{n+k}{2k}2^{n-k}.
$$

Let

$$
A(x)=\sum_{n \ge 0}\left[\sum_{k \ge 0}\binom{n+k}{2k}2^{n-k}\right]x^n.
$$

Then

$$
A(x)=\sum_{k \ge 0}\sum_{n \ge 0}\binom{n+k}{2k}2^{n-k}x^n.
$$

After shifting indices and using

$$
\sum_{a \ge 0}\binom{a+2k}{2k}(2x)^a = \frac{1}{(1-2x)^{2k+1}},
$$

we obtain

$$
A(x)=\sum_{k \ge 0} x^k\frac{1}{(1-2x)^{2k+1}}
= \frac{1}{1-2x}\sum_{k \ge 0}\left(\frac{x}{(1-2x)^2}\right)^k.
$$

This is geometric:

$$
A(x)=\frac{1}{1-2x}\cdot \frac{1}{1-\frac{x}{(1-2x)^2}}
= \frac{1-2x}{1-5x+4x^2}.
$$

Partial fractions give

$$
A(x)=\frac{1}{3}\cdot \frac{1}{1-x} + \frac{2}{3}\cdot \frac{1}{1-4x}.
$$

Therefore

$$
A(x)=\sum_{n \ge 0}\left(\frac13+\frac23\cdot 4^n\right)x^n,
$$

so

$$
\sum_{k \ge 0}\binom{n+k}{2k}2^{n-k}=\frac13+\frac23\cdot 4^n.
$$

**Example 5.10.** For $$n \ge 0$$, compute

$$
\sum_{k \ge 0}\binom{k}{n-k}.
$$

Again,

$$
\sum_{n \ge 0}\left[\sum_{k \ge 0}\binom{k}{n-k}\right]x^n
= \sum_{k \ge 0}\sum_{n \ge 0}\binom{k}{n-k}x^n.
$$

Rewrite using $$x^k$$:

$$
= \sum_{k \ge 0} x^k \sum_{k \le n \le 2k}\binom{k}{n-k}x^{n-k}
= \sum_{k \ge 0} x^k(1+x)^k.
$$

Thus

$$
= \frac{1}{1-x(1+x)}
= \frac{1}{1-x-x^2}.
$$

This is the Fibonacci generating function, so the sum equals $$F_{n+1}$$.

If the free variable appears in many places at once, Snake Oil often works better after you first generalize the identity.

### Problems

**Problem 5.11.** Prove that for every integer $$n \ge 0$$,

$$
\sum_{a+b=n}\binom{2a}{a}\binom{2b}{b}=4^n.
$$

**Problem 5.12.** For integers $$m,n \ge 0$$, prove that

$$
\sum_{a+b=m}(-1)^a \binom{n}{a}\binom{n+b-1}{b}
=
\begin{cases}
1 & m=0, \\
0 & m>0.
\end{cases}
$$

**Problem 5.13.** Let $$m \le n$$ be positive integers. Compute

$$
\sum_{k=m}^{n}\binom{n}{k}\binom{k}{m}.
$$

**Problem 5.14.** For $$m,n \ge 1$$, compute

$$
\sum_{k \ge 0}\binom{n+k}{m+2k}\binom{2k}{k}\frac{(-1)^k}{k+1}.
$$
