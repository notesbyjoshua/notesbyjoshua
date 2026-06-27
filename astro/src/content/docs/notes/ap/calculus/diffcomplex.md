---
title: "Unit 3: Differentiation: Composite, Implicit, and Inverse Differentiation"
sidebar:
  order: 3
---

This unit is where derivatives become flexible. Instead of only differentiating simple formulas, we learn how derivatives behave under composition, implicit relationships, and inverse functions.

---

## Chain rule

<div class="theorem-box">

**Theorem (Chain Rule).** If $$y = f(g(x))$$, then

$$
\frac{dy}{dx} = f'(g(x))g'(x).
$$

</div>

The outside derivative is evaluated at the inside function, and then multiplied by the derivative of the inside function.

<div class="theorem-box">

**Example.** Differentiate $$y=(3x^2+1)^5$$.

The outside function is a fifth power and the inside function is $$3x^2+1$$. Differentiate the outside power, keeping the inside unchanged, then multiply by the derivative of the inside:

$$
\frac{dy}{dx}=5(3x^2+1)^4\cdot\frac{d}{dx}(3x^2+1).
$$

Since $$\frac{d}{dx}(3x^2+1)=6x$$,

$$
\frac{dy}{dx}=5(3x^2+1)^4(6x)=30x(3x^2+1)^4.
$$

</div>

---

## Implicit differentiation

When a curve is defined by an equation relating $$x$$ and $$y$$, differentiate both sides with respect to $$x$$ and remember that $$y$$ depends on $$x$$.

Every time a derivative hits a term involving $$y$$, multiply by $$dy/dx$$ because $$y$$ is changing as $$x$$ changes.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[
  axis lines=middle, axis equal image,
  xmin=-5.5, xmax=5.5, ymin=-5.5, ymax=5.5,
  xtick={-5,0,3,5}, ytick={-5,0,4,5},
  grid=both, grid style={gray!18},
  width=8cm, height=8cm,
  xlabel=$x$, ylabel=$y$,
]
\addplot[blue, very thick, samples=240, domain=0:360] ({5*cos(x)},{5*sin(x)});
\addplot[orange!85!black, thick, domain=-1:5.3] {-0.75*(x-3)+4};
\addplot[gray!70, dashed] coordinates {(0,0) (3,4)};
\addplot[only marks, mark=*, mark size=1.8pt, blue] coordinates {(3,4)};
\node[blue, anchor=south west] at (axis cs:3,4) {$(3,4)$};
\node[orange!85!black, anchor=south east] at (axis cs:1.1,5.4) {tangent slope $-\frac{x}{y}$};
\end{axis}
\end{tikzpicture}
```

<div class="theorem-box">

**Example.** Find $$\frac{dy}{dx}$$ for the circle $$x^2+y^2=25$$, then find the slope of the tangent line at the point $$(3,4)$$.

Differentiate both sides with respect to $$x$$, remembering that $$y$$ depends on $$x$$:

$$
2x+2y\frac{dy}{dx}=0.
$$

Solve for $$\frac{dy}{dx}$$:

$$
\frac{dy}{dx}=-\frac{x}{y}.
$$

Now substitute the point $$(3,4)$$:

$$
\frac{dy}{dx}\Big|_{(3,4)}=-\frac{3}{4}.
$$

So the tangent line at $$(3,4)$$ has slope $$-\frac34$$.

</div>

---

## Derivatives of inverse functions

<div class="theorem-box">

**Theorem (Inverse Function Derivative).** If $$f$$ is differentiable and invertible with $$f'(a) \ne 0$$, then

$$
(f^{-1})'(b) = \frac{1}{f'(a)}
$$

where $$b = f(a)$$.

</div>

Equivalent formula:

$$
(f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))}.
$$

<div class="theorem-box">

**Example.** Let $$f(x)=x^3+x$$. Given that $$f(1)=2$$, find $$(f^{-1})'(2)$$.

Here $$a=1$$ and $$b=2$$, since $$f(1)=1^3+1=2$$. First compute the derivative of $$f$$:

$$
f'(x)=3x^2+1.
$$

Evaluate it at $$a=1$$:

$$
f'(1)=3(1)^2+1=4.
$$

By the inverse function rule,

$$
(f^{-1})'(2)=\frac{1}{f'(1)}=\frac{1}{4}.
$$

</div>

---

## Derivatives of inverse trig functions

$$
\frac{d}{dx}(\arcsin x) = \frac{1}{\sqrt{1-x^2}}
$$

$$
\frac{d}{dx}(\arccos x) = -\frac{1}{\sqrt{1-x^2}}
$$

$$
\frac{d}{dx}(\arctan x) = \frac{1}{1+x^2}
$$

Chain-rule forms:

$$
\frac{d}{dx}\arcsin(u) = \frac{u'}{\sqrt{1-u^2}}, \qquad
\frac{d}{dx}\arctan(u) = \frac{u'}{1+u^2}.
$$

<div class="theorem-box">

**Example.** Differentiate $$y=\arctan(x^2)$$.

Use the chain-rule form with inside function $$u=x^2$$, so $$u'=2x$$:

$$
\frac{dy}{dx}=\frac{u'}{1+u^2}=\frac{2x}{1+(x^2)^2}.
$$

Simplifying the square gives

$$
\frac{dy}{dx}=\frac{2x}{1+x^4}.
$$

</div>

---

## Exponential and logarithmic differentiation

Useful rules:

$$
\frac{d}{dx} e^{u(x)} = e^{u(x)}u'(x)
$$

$$
\frac{d}{dx} \ln(\lvert u(x) \rvert) = \frac{u'(x)}{u(x)}
$$

Logarithmic differentiation is especially helpful when powers and products are mixed or when both base and exponent contain variables.

When the variable appears in both the base and the exponent, take the logarithm of both sides first, use logarithm rules to simplify, and then differentiate implicitly.

<div class="theorem-box">

**Example.** Differentiate $$y=\ln(x^2+1)$$.

Use the rule $$\frac{d}{dx}\ln(u)=\frac{u'}{u}$$ with inside function $$u=x^2+1$$, so $$u'=2x$$:

$$
\frac{dy}{dx}=\frac{u'}{u}=\frac{2x}{x^2+1}.
$$

Note that $$x^2+1>0$$ for all real $$x$$, so the absolute value is unnecessary here.

</div>

---

## Related rates

:::strategy{title="Related rates"}
1. Draw and label a diagram.
2. Write an equation relating the variables.
3. Differentiate implicitly with respect to time.
4. Substitute the requested instant.
5. Keep units consistent.
:::

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>=Stealth, scale=0.9]
\draw[gray!70, thick] (0,0) -- (5.3,0) node[right] {floor};
\draw[gray!70, thick] (0,0) -- (0,4.6) node[above] {wall};
\coordinate (A) at (4.2,0);
\coordinate (B) at (0,3.2);
\draw[blue, very thick] (A) -- (B) node[midway, above right] {ladder};
\draw[<->, orange!85!black] (0,-0.35) -- (4.2,-0.35) node[midway, below] {$x(t)$};
\draw[<->, red!75!black] (-0.35,0) -- (-0.35,3.2) node[midway, left] {$y(t)$};
\draw[->, orange!85!black, thick] (A) -- ++(0.65,0) node[right] {$\frac{dx}{dt}>0$};
\draw[->, red!75!black, thick] (B) -- ++(0,-0.65) node[left] {$\frac{dy}{dt}<0$};
\node[align=center] at (3.4,3.7) {$x^2+y^2=L^2$\\differentiate in $t$};
\end{tikzpicture}
```

<div class="theorem-box">

**Example.** The radius of a circle is increasing at a rate of $$2\ \text{cm/s}$$. How fast is the area increasing at the instant the radius is $$5\ \text{cm}$$?

The area of a circle relates to its radius by

$$
A=\pi r^2.
$$

Both $$A$$ and $$r$$ change with time, so differentiate implicitly with respect to $$t$$:

$$
\frac{dA}{dt}=2\pi r\frac{dr}{dt}.
$$

Substitute the given instant, $$r=5\ \text{cm}$$ and $$\frac{dr}{dt}=2\ \text{cm/s}$$:

$$
\frac{dA}{dt}=2\pi(5)(2)=20\pi\ \text{cm}^2/\text{s}.
$$

So the area is increasing at $$20\pi\approx62.8\ \text{cm}^2/\text{s}$$.

</div>

---

## Advanced chain-rule patterns

You should be comfortable stacking rules:

- product + chain,
- quotient + chain,
- trig + chain,
- inverse trig + chain,
- exponential/log + chain.

---

## Parametric preview

Later, if

$$
x = f(t), \qquad y = g(t),
$$

then

$$
\frac{dy}{dx} = \frac{dy/dt}{dx/dt}
$$

when $$dx/dt \ne 0$$. This is the parametric analogue of the chain rule.

---

## Chain rule intuition

The chain rule is about layered change. If $$x$$ changes, then the inside function $$g(x)$$ changes first. That change then causes the outside function $$f(g(x))$$ to change.

Symbolically,

$$
\frac{dy}{dx}
=
\frac{dy}{du}\cdot\frac{du}{dx}.
$$

This notation is not just a cancellation trick. It reminds you that a composite function changes through an intermediate variable.

AP problems often hide the chain rule inside:

- powers of expressions,
- trig functions with nontrivial angles,
- exponentials with nontrivial exponents,
- logarithms of expressions,
- inverse trig functions with expressions inside.

Whenever you differentiate an outside function, pause and ask what the inside function is.

<div class="theorem-box">

**Why the chain rule is true.** Let $$u=g(x)$$ and $$y=f(u)$$. A small change in $$x$$ creates a small change in $$u$$, and that creates a small change in $$y$$. The ratio can be split as

$$
\frac{\Delta y}{\Delta x}
=
\frac{\Delta y}{\Delta u}\cdot\frac{\Delta u}{\Delta x}.
$$

As $$\Delta x\to0$$, the intermediate change $$\Delta u\to0$$ for a differentiable inside function. The two ratios approach $$f'(u)$$ and $$g'(x)$$, so

$$
\frac{dy}{dx}=f'(g(x))g'(x).
$$

</div>

---

## Implicit differentiation intuition

Implicit equations describe a relationship rather than a solved function. The variable $$y$$ still depends on $$x$$, even if the equation does not say so explicitly.

That is why

$$
\frac{d}{dx}(y^2)=2y\frac{dy}{dx}.
$$

The derivative of the outside power is $$2y$$, and the derivative of the inside variable $$y$$ is $$dy/dx$$.

Implicit differentiation is especially useful when solving for $$y$$ would be messy or impossible. It also lets you find slopes on curves that are not functions globally, such as circles, ellipses, and many algebraic curves.

<div class="theorem-box">

**AP language.** In an implicit derivative, the final answer may contain both $$x$$ and $$y$$. To find a numerical slope at a point, substitute both coordinates after differentiating.

</div>

---

## Inverse function derivative intuition

Inverse functions undo each other. If $$f(a)=b$$, then $$f^{-1}(b)=a$$.

The graph of an inverse is the reflection of the original graph across $$y=x$$. Reflection swaps horizontal and vertical change, so slopes become reciprocals:

$$
(f^{-1})'(b)=\frac{1}{f'(a)}.
$$

This formula only works when the original slope is nonzero. If $$f'(a)=0$$, the inverse graph would have a vertical tangent at the reflected point.

<div class="theorem-box">

**Why inverse slopes are reciprocals.** If $$y=f(x)$$ and $$x=f^{-1}(y)$$, then composing the functions gives

$$
f(f^{-1}(x))=x.
$$

Differentiate both sides:

$$
f'(f^{-1}(x))(f^{-1})'(x)=1.
$$

Solving for the inverse derivative gives

$$
(f^{-1})'(x)=\frac{1}{f'(f^{-1}(x))}.
$$

</div>

---

## Logarithmic differentiation

Logarithmic differentiation is a strategy, not a new derivative rule. It works because logarithms turn complicated multiplication, division, and powers into simpler operations:

$$
\ln(ab)=\ln a+\ln b,
$$

$$
\ln\left(\frac{a}{b}\right)=\ln a-\ln b,
$$

$$
\ln(a^r)=r\ln a.
$$

This is especially helpful when a function has many factors or when a variable appears in both the base and the exponent.

After differentiating, remember that differentiating $$\ln y$$ gives

$$
\frac{1}{y}\frac{dy}{dx},
$$

so the final derivative usually comes from multiplying by $$y$$.

<div class="theorem-box">

**Example.** Use logarithmic differentiation to find $$\frac{dy}{dx}$$ for $$y=x^x$$ (with $$x>0$$).

The variable appears in both the base and the exponent, so take the natural logarithm of both sides:

$$
\ln y=\ln\left(x^x\right)=x\ln x.
$$

Differentiate both sides with respect to $$x$$. The left side uses the chain rule, and the right side uses the product rule:

$$
\frac{1}{y}\frac{dy}{dx}=\ln x+x\cdot\frac{1}{x}=\ln x+1.
$$

Multiply both sides by $$y$$ and substitute $$y=x^x$$:

$$
\frac{dy}{dx}=x^x(\ln x+1).
$$

</div>

---

## Related rates as implicit differentiation

Related rates are implicit differentiation with time as the independent variable. The equation relates quantities, and each quantity may be changing with respect to time.

If a length $$x$$ depends on time, then differentiating $$x^2$$ with respect to $$t$$ gives

$$
\frac{d}{dt}(x^2)=2x\frac{dx}{dt}.
$$

The variable value and the rate value are different pieces of information. Substitute them after differentiating so the equation still represents rates.

---

## Calculator and exact form expectations

AP problems often accept exact forms unless a decimal approximation is requested. For inverse trig derivatives, keep radicals and rational expressions organized:

$$
\frac{d}{dx}\arcsin(u)
=
\frac{u'}{\sqrt{1-u^2}}.
$$

The domain restriction is part of the meaning. For real-valued inverse sine and inverse cosine derivatives, the expression inside the square root must be positive for the derivative formula to describe an ordinary finite slope.

---

## Common mistakes

:::mistakes
- Forgetting to multiply by the derivative of the inside.
- Treating $$y$$ as a constant during implicit differentiation.
- Dropping the factor $$dy/dx$$.
- Using inverse notation incorrectly: $$\sin^{-1}x$$ means $$\arcsin x$$, not $$1/\sin x$$.
:::

---

## AP reasoning focus

This unit is about recognizing when the derivative is hidden inside another relationship.

- Chain rule problems hide a changing input inside an outer function.
- Implicit differentiation hides $$y$$ as a function of $$x$$.
- Inverse-function problems hide the slope relationship between a function and its inverse.
- Related rates hide time dependence inside geometry or context.

:::checklist
1. Identify the outer and inner functions before applying the chain rule.
2. In implicit equations, attach $$dy/dx$$ to every differentiated $$y$$ term.
3. In inverse-function questions, match the input/output pair correctly: if $$f(a)=b$$, then $$(f^{-1})'(b)=1/f'(a)$$.
4. In related rates, do not substitute variable values until after differentiating with respect to time.
:::

:::exam{topic="Composite and implicit derivatives"}
AP often mixes rules. A single derivative might require product rule, chain rule, and implicit differentiation in the same line, so write intermediate steps clearly enough that the structure is visible.
:::
