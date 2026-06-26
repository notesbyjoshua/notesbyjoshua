---
title: "Unit 5: Exponential & Logarithmic Functions"
sidebar:
  order: 4
---

---

## Exponential functions

An **exponential function** has the form

$$
y=b^x,
$$

where

$$
b>0
\qquad\text{and}\qquad
b\ne 1.
$$

The base $$b$$ is constant, and the variable is in the exponent. This is different from a power function like

$$
y=x^n,
$$

where the base is variable and the exponent is constant.

We require $$b>0$$ because negative bases can break continuity over the real numbers. For example, with

$$
y=(-2)^x,
$$

integer inputs are fine, but many fractional inputs are not real-valued in a consistent way. We also exclude $$b=1$$ because

$$
y=1^x=1
$$

is just a constant function, not exponential growth or decay.

### Growth and decay

For

$$
y=b^x,
$$

there are two basic shapes:

- If $$b>1$$, the function is increasing and represents **exponential growth**.
- If $$0<b<1$$, the function is decreasing and represents **exponential decay**.

Both have:

- Domain: $$(-\infty,\infty)$$.
- Range: $$(0,\infty)$$.
- Horizontal asymptote: $$y=0$$.
- $$y$$-intercept: $$(0,1)$$.

The decay case can always be rewritten using a reciprocal base:

$$
b^{-x}=\left(\frac1b\right)^x.
$$

For example,

$$
2^{-x}=\left(\frac12\right)^x.
$$

But, you should always be careful with signs:

$$
-2^x=-(2^x),
$$

which is a reflection of $$2^x$$ over the $$x$$-axis. It is not the same as $$(-2)^x$$.

### Transformations

A transformed exponential function often looks like

$$
y=a\cdot b^{x-h}+k.
$$

The transformation rules are the same as other parent functions:

- $$a$$ vertically stretches/compresses and reflects over the $$x$$-axis if $$a<0$$.
- $$h$$ shifts the graph horizontally.
- $$k$$ shifts the graph vertically.

The horizontal asymptote moves from $$y=0$$ to

$$
y=k.
$$

:::tip
A good idea is to always plot a couple of integer points to start with.
:::

<div class="theorem-box">

**Example.** Graph the function and give the domain and range of

$$
y=\frac12(4)^{x-3}+2.
$$

The parent function $$4^x$$ is exponential growth because $$4>1$$. The expression $$x-3$$ shifts the graph right $$3$$ units, the factor $$\frac12$$ vertically compresses it, and the $$+2$$ shifts it up $$2$$ units.

The horizontal asymptote is

$$
y=2.
$$

The domain is

$$
(-\infty,\infty).
$$

Since $$\frac12(4)^{x-3}>0$$ for every real $$x$$, the range is

$$
(2,\infty).
$$

The graph is shown below (the dashed line is the horizontal asymptote):

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, xlabel=$x$, ylabel=$y$,
  xmin=-2, xmax=7, ymin=-2, ymax=25,
  xtick={-2,-1,...,7}, ytick={0,5,...,25},
  grid=both, grid style={gray!18}, major grid style={gray!35},
  width=12cm, height=9cm, clip=true,
]
% horizontal asymptote y = 2
\addplot[red, dashed, thick, domain=-2:7] {2};
\addplot[blue, very thick, samples=150, domain=-2:6.3] {0.5*exp((x-3)*ln(4))+2};
\node[blue, anchor=west] at (axis cs:0.2,15) {$y=\tfrac12(4)^{x-3}+2$};
\node[red, anchor=south west] at (axis cs:-2,2) {$y=2$};
\end{axis}
\end{tikzpicture}
```

</div>

---

## The natural exponential function

The **natural exponential function** is defined as

$$
y=e^x,
$$

where $$e$$ (Euler's number) is a special constant. One property of $$e$$ is that:

$$
e=\lim_{x\to\infty}\left(1+\frac1x\right)^x.
$$

Numerically, as $$x$$ gets very large, the expression gets closer and closer to $$e$$. After plugging in larger and larger values of $$x$$, you find that $$e\approx 2.71828$$. In addition, the instantaneous rate of change of $$y=e^x$$ is equal to itself! We will demonstrate this below:

<div class="theorem-box">

**Example.** Approximate the rate of change of $$e^x$$ for smaller and smaller intervals.

Rhe average rate of change on $$[1,1.1]$$ is

$$
\frac{e^{1.1}-e^1}{1.1-1}\approx 2.8588.
$$

On smaller intervals:

$$
[1,1.01]\quad\Rightarrow\quad 2.7319,
$$

$$
[1,1.001]\quad\Rightarrow\quad 2.7196,
$$

$$
[1,1.0000001]\quad\Rightarrow\quad 2.71829.
$$

As the interval gets smaller, the rate of change becomes increasingly instantaneous. One reason why $$e^x$$ is studied so much is topics like calculus is that it is equal to its own instantaneous rate of change, like derivatives!

</div>

$$e^x$$ is an exponential growth function because $$e>1$$. Like other exponential functions, it has domain $$(-\infty,\infty)$$, range $$(0,\infty)$$, horizontal asymptote $$y=0$$, and $$y$$-intercept $$(0,1)$$.

### Hyperbolic sine and cosine

The exponential function also appears in the definitions of the hyperbolic sine and hyperbolic cosine functions:

$$
\sinh x=\frac12(e^x-e^{-x}),
$$

and

$$
\cosh x=\frac12(e^x+e^{-x}).
$$

These are pronounced "cinch" and "cosh." They behave somewhat like trigonometric functions, but they are built from exponentials.

<div class="theorem-box">

**Example.** Show that

$$
(\cosh x)^2=\frac12(\cosh(2x)+1).
$$

Using the definition,

$$
(\cosh x)^2
=\left(\frac12(e^x+e^{-x})\right)^2.
$$

Square:

$$
(\cosh x)^2
=\frac14(e^{2x}+2+e^{-2x}).
$$

Rewrite:

$$
\frac14(e^{2x}+2+e^{-2x})
=\frac12\left(\frac12(e^{2x}+e^{-2x})+1\right).
$$

Since

$$
\cosh(2x)=\frac12(e^{2x}+e^{-2x}),
$$

we get

$$
(\cosh x)^2=\frac12(\cosh(2x)+1).
$$

</div>

Similarly,

$$
(\sinh x)^2=\frac12(\cosh(2x)-1).
$$

---

## Logarithmic functions

A **logarithm** is the inverse function of an exponent. The expression

$$
y = \log_b x
$$

means "$$y$$ is the the exponent you put on $$b$$ to get $$x$$."

In equation form:

$$
\log_b x=y
\quad\Longleftrightarrow\quad
b^y=x.
$$

The base must satisfy

$$
b>0
\qquad\text{and}\qquad
b\ne 1.
$$

The input must satisfy

$$
x>0.
$$

So the parent logarithmic function

$$
y=\log_b x
$$

has:

- Domain: $$(0,\infty)$$.
- Range: $$(-\infty,\infty)$$.
- Vertical asymptote: $$x=0$$.
- $$x$$-intercept: $$(1,0)$$.

Note that this is the opposite of the exponent function, which is expected since they are inverses! Accordingly, the graph of $$y=\log_b x$$ is the reflection of $$y=b^x$$ across the line $$y=x$$.

<div class="theorem-box">

**Example.** Evaluate each logarithm.

$$
1. \log_3 9
2. \log_5\left(\frac1{25}\right)
3. \log_8 32
$$

First,

$$
\log_3 9=2
$$

because

$$
3^2=9.
$$

Also,

$$
\log_5\left(\frac1{25}\right)=-2
$$

because

$$
5^{-2}=\frac1{25}.
$$

Finally,

$$
\log_8 32=\frac53
$$

because

$$
8^{5/3}=(2^3)^{5/3}=2^5=32.
$$

</div>

### Increasing and decreasing logs

For

$$
y=\log_b x,
$$

the shape depends on the base:

- If $$b>1$$, then $$\log_b x$$ is increasing.
- If $$0<b<1$$, then $$\log_b x$$ is decreasing.

This matters for inequalities. If $$b>1$$, then

$$
\log_b x>\log_b y
\quad\Longleftrightarrow\quad
x>y.
$$

But if $$0<b<1$$, the inequality reverses:

$$
\log_b x>\log_b y
\quad\Longleftrightarrow\quad
x<y.
$$

Just like negative numbers, bases $$0<b<1$$ require the inequality to reverse.

### Natural logarithm

When the base is $$e$$, the logarithm is called the **natural logarithm**:

$$
\log_e x=\ln x.
$$

Thus

$$
y=\ln x
$$

is the inverse of

$$
y=e^x.
$$

The natural logarithm has domain $$(0,\infty)$$, range $$(-\infty,\infty)$$, vertical asymptote $$x=0$$, and $$x$$-intercept $$(1,0)$$. It is also good to note that $$log_10 x$$ is often just abbreviated as $$\log x$$.

---

## Logarithm properties

Logarithm rules come from exponent rules. For $$M>0$$, $$N>0$$, and valid base $$b$$:

:::key{name="Logarithm properties"}
**Product rule:**

$$
\log_b(MN)=\log_b M+\log_b N.
$$

**Quotient rule:**

$$
\log_b\left(\frac{M}{N}\right)=\log_b M-\log_b N.
$$

**Power rule:**

$$
\log_b(M^r)=r\log_b M.
$$

**Change of base:**

$$
\log_b M=\frac{log_a M}{log_a b}.
$$

for some valid base $$a$$.
:::

It is often convenient on the calculator to change to base $$10$$ or base $$e$$.

These rules only apply when every logarithm is defined.

:::warning
Do not split $$\ln(a+b)$$ as $$\ln a+\ln b$$. There is no sum rule for logarithms.
:::

<div class="theorem-box">

**Example.** Rewrite as a single logarithm with coefficient $$1$$:

$$
\log(x^2-16)-3\bigl(\log(x+4)+2\log x\bigr).
$$

First factor:

$$
x^2-16=(x-4)(x+4).
$$

Then use the product rule and power rule:

$$
\log(x^2-16)-3\bigl(\log(x+4)+2\log x\bigr)
$$

$$
=\log(x-4)+\log(x+4)-3\log(x+4)-6\log x.
$$

Use the power rule:

$$
=\log(x-4)+\log(x+4)-\log((x+4)^3)-\log(x^6).
$$

Combine:

$$
=\log\left(\frac{(x-4)(x+4)}{(x+4)^3x^6}\right).
$$

Cancel one factor of $$x+4$$:

$$
\boxed{\log\left(\frac{x-4}{(x+4)^2x^6}\right)}.
$$

The original expression requires

$$
x^2-16>0,\qquad x+4>0,\qquad x>0,
$$

so actually $$x>4$$.

</div>

<div class="theorem-box">

**Example.** Expand:

$$
\log_5\sqrt[3]{\frac{x+3}{x}}.
$$

Rewrite the radical as a power:

$$
\log_5\sqrt[3]{\frac{x+3}{x}}
=\log_5\left(\frac{x+3}{x}\right)^{1/3}.
$$

Use the power rule:

$$
=\frac13\log_5\left(\frac{x+3}{x}\right).
$$

Then use the quotient rule:

$$
\boxed{\frac13\log_5(x+3)-\frac13\log_5 x}.
$$

</div>

<div class="theorem-box">

**Example.** Simplify

$$
\log_{e^2}2.
$$

Using change of base with base $$e$$:

$$
\log_{e^2}2=\frac{\ln 2}{\ln(e^2)}.
$$

Since

$$
\ln(e^2)=2,
$$

we get

$$
\boxed{\frac{\ln 2}{2}}.
$$

</div>

---

## Equations and inequalities with logarithms and exponentials

There are three common strategies:

:::strategy{title="Solving exponential and logarithmic equations"}
1. If the bases match, set exponents equal.
2. If the bases do not match, take logs of both sides.
3. If logs are involved, rewrite as exponentials or combine logs first.
:::

:::warning
Always check domain restrictions when logarithms appear.
:::

### Exponential equations

<div class="theorem-box">

**Example.** Solve

$$
3^{x-1}=4^{2x}.
$$

Take natural logs of both sides:

$$
\ln(3^{x-1})=\ln(4^{2x}).
$$

Use the power rule:

$$
(x-1)\ln 3=2x\ln 4.
$$

Expand and collect $$x$$:

$$
x\ln 3-\ln 3=2x\ln 4,
$$

$$
x(\ln 3-2\ln 4)=\ln 3.
$$

Therefore

$$
\boxed{x=\frac{\ln 3}{\ln 3-2\ln 4}}.
$$

</div>

Sometimes graphing technology is a good way to check your answer. For the previous example, you could graph

$$
y_1=3^{x-1}
\qquad\text{and}\qquad
y_2=4^{2x}
$$

and find their intersection.

### Quadratic-type exponential equations

Some exponential equations become quadratics after substitution.

<div class="theorem-box">

**Example.** Solve

$$
e^x+e^{-x}=2.
$$

Rewrite $$e^{-x}$$ as $$\frac1{e^x}$$:

$$
e^x+\frac1{e^x}=2.
$$

Multiply by $$e^x$$:

$$
e^{2x}+1=2e^x.
$$

Rearrange:

$$
e^{2x}-2e^x+1=0.
$$

Factor:

$$
(e^x-1)^2=0.
$$

Thus

$$
e^x=1,
$$

so

$$
\boxed{x=0}.
$$

</div>

### Logarithmic equations and inequalities

When solving logarithmic equations or inequalities, first impose the domain. Every logarithm input must be positive.

<div class="theorem-box">

**Example.** Solve

$$
\ln\left(\frac{3x-2}{4x+1}\right)>\ln 4.
$$

First require the logarithm input to be positive:

$$
\frac{3x-2}{4x+1}>0.
$$

The critical numbers are

$$
x=\frac23
\qquad\text{and}\qquad
x=-\frac14.
$$

So the domain is

$$
\left(-\infty,-\frac14\right)\cup\left(\frac23,\infty\right).
$$

Now use that $$\ln x$$ is increasing:

$$
\frac{3x-2}{4x+1}>4.
$$

Move everything to one side:

$$
\frac{3x-2-4(4x+1)}{4x+1}>0.
$$

Simplify:

$$
\frac{-13x-6}{4x+1}>0.
$$

The critical numbers are

$$
x=-\frac6{13}
\qquad\text{and}\qquad
x=-\frac14.
$$

The rational inequality is true on

$$
\left(-\frac6{13},-\frac14\right).
$$

This interval is inside the logarithm's domain, so the solution is

$$
\boxed{\left(-\frac6{13},-\frac14\right)}.
$$

</div>

:::warning
If the logarithm base is between $$0$$ and $$1$$, remember that the logarithm is decreasing, so inequalities reverse when you compare inputs.
:::

---

## Practice

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

## Solutions

<div class="theorem-box">

### Solution 1

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

### Solution 2

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

### Solution 3

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

### Solution 4

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

### Solution 5

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

### Solution 6

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

### Solution 7

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

### Solution 8

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

### Solution 9

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

### Solution 10

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

### Solution 11

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

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, xlabel=$x$, ylabel=$y$,
  xmin=-16, xmax=12, ymin=-12, ymax=10,
  xtick={-16,-12,...,12}, ytick={-12,-8,...,8},
  grid=both, grid style={gray!15}, major grid style={gray!30},
  width=12cm, height=10cm, clip=true,
]
% reflection axis y = x
\addplot[gray, dotted, thick, domain=-12:10] {x};
% asymptotes: y = 4 (inverse) and x = 4 (function)
\addplot[gray!60, dashed, domain=-16:12] {4};
\draw[gray!60, dashed] (axis cs:4,-12) -- (axis cs:4,10);
% h(x) = log_4(16 - 4x) - 2
\addplot[red, very thick, samples=200, domain=-16:3.96] {ln(16-4*x)/ln(4) - 2};
% inverse: h^{-1}(x) = 4 - 4^{x+1}
\addplot[green!55!black, very thick, samples=200, domain=-16:1.15] {4 - exp((x+1)*ln(4))};
\node[red, anchor=west] at (axis cs:-15,1.1) {$h$};
\node[green!55!black, anchor=south] at (axis cs:-9,4.2) {$h^{-1}$};
\node[gray, anchor=south west, font=\footnotesize] at (axis cs:6,6) {$y=x$};
\end{axis}
\end{tikzpicture}
```

</div>

<div class="theorem-box">

### Solution 12

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

### Solution 13

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

### Solution 14

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

### Solution 15

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

### Solution 16

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
