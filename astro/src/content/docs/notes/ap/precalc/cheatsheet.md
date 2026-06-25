---
title: "AP Precalculus Cheat Sheet"
sidebar:
  order: 0
---

This page is a high-yield AP Precalculus reference sheet. It collects the most important definitions, formulas, and graph behaviors from every unit grouping in these notes into one place. It is best used as a last-minute review tool or a quick lookup page while studying a full unit. For full explanations, examples, and practice, see the individual unit pages.

---

## Unit 1 & 2: Fundamentals, Equations, and Inequalities

### Lines and distance

- Slope: $$m=\frac{y_2-y_1}{x_2-x_1}$$
- Slope-intercept: $$y=mx+b$$; point-slope: $$y-y_1=m(x-x_1)$$; standard: $$Ax+By=C$$ with slope $$m=-\frac{A}{B}$$.
- Distance: $$d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$$; midpoint: $$M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)$$.
- Parallel lines: equal slopes. Perpendicular lines: $$m_1m_2=-1$$.

### Quadratics

- Quadratic formula: $$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$
- Discriminant $$b^2-4ac$$: positive gives two real roots, zero gives one repeated root, negative gives two complex roots.
- Vieta: $$r_1+r_2=-\frac{b}{a}$$ and $$r_1r_2=\frac{c}{a}$$.

### Absolute value (for $$a>0$$)

- $$\lvert u\rvert=a \Rightarrow u=a$$ or $$u=-a$$.
- $$\lvert u\rvert<a \Rightarrow -a<u<a$$ ("less than means between").
- $$\lvert u\rvert>a \Rightarrow u<-a$$ or $$u>a$$ ("greater than means outside").

### Inequality reminders

- Multiplying/dividing by a negative reverses the inequality sign.
- Polynomial/rational inequalities: move to one side, factor, mark zeros, build a sign chart. Even-multiplicity roots do not change sign.
- Never include denominator zeros; never multiply by a denominator of unknown sign.
- Radical/exponential: always state the domain first; check candidates after squaring.

### Symmetry tests

- $$y$$-axis: replace $$x$$ with $$-x$$ (even function).
- Origin: replace $$x,y$$ with $$-x,-y$$ (odd function).
- $$x$$-axis: replace $$y$$ with $$-y$$.

---

## Unit 3: Functions

### Domain rules

- Denominators cannot be $$0$$; even roots need a nonnegative radicand; logs need a positive input.

### Average rate of change

$$
\frac{f(b)-f(a)}{b-a},\qquad \text{difference quotient: } \frac{f(x+h)-f(x)}{h}
$$

### Transformations (with $$c>0$$)

- $$f(x)+c$$ up, $$f(x)-c$$ down, $$f(x+c)$$ left, $$f(x-c)$$ right.
- $$-f(x)$$ reflects over $$x$$-axis; $$f(-x)$$ reflects over $$y$$-axis.
- Vertex/start form $$y=af(x-h)+k$$: larger $$\lvert a\rvert$$ is steeper; $$a<0$$ reflects vertically.

### Composition and inverses

- $$(f\circ g)(x)=f(g(x))$$; domain needs $$x$$ in domain of $$g$$ and $$g(x)$$ in domain of $$f$$.
- Inverses satisfy $$f(g(x))=x$$ and $$g(f(x))=x$$. To find: swap $$x$$ and $$y$$, solve for $$y$$.
- Domain of $$f$$ becomes range of $$f^{-1}$$, and vice versa. A function has an inverse function only if it is one-to-one (passes the horizontal line test, i.e. injective).

---

## Unit 4 & 13: Polynomial & Rational Functions and Applications to Optimization

### Quadratic vertex

- Vertex at $$x=-\frac{b}{2a}$$; vertex form $$f(x)=a(x-h)^2+k$$ has vertex $$(h,k)$$.
- $$a>0$$ opens up (minimum); $$a<0$$ opens down (maximum).

### Polynomial end behavior

| Degree | Leading coefficient | Left end | Right end |
|---|---|---|---|
| even | positive | up | up |
| even | negative | down | down |
| odd | positive | down | up |
| odd | negative | up | down |

### Zeros and multiplicity

- Odd multiplicity: graph crosses the axis. Even multiplicity: graph touches and bounces.
- Degree $$n$$ has exactly $$n$$ complex zeros (with multiplicity) and at most $$n-1$$ turning points.
- Remainder Theorem: dividing $$f(x)$$ by $$x-m$$ leaves remainder $$f(m)$$.
- Factor Theorem: $$x-m$$ is a factor exactly when $$f(m)=0$$.
- Rational Root Theorem: a rational zero $$\frac{p}{q}$$ in lowest terms has $$p\mid a_0$$ and $$q\mid a_n$$.
- Conjugate pairs: real coefficients force $$a-bi$$ when $$a+bi$$ is a zero; rational coefficients force $$a-\sqrt{b}$$ when $$a+\sqrt{b}$$ is a zero.

### Rational functions $$R(x)=\frac{f(x)}{g(x)}$$

- $$x$$-intercepts at zeros of $$f$$ that are still in the domain; $$y$$-intercept at $$R(0)$$.
- A canceled factor gives a hole; an uncanceled denominator factor gives a vertical asymptote.
- Horizontal asymptotes by comparing degrees:
  - denominator degree larger: $$y=0$$.
  - degrees equal: $$y=\frac{\text{leading coeff of }f}{\text{leading coeff of }g}$$.
  - numerator degree one larger: slant asymptote from division.
  - numerator degree two or more larger: polynomial asymptote.

---

## Unit 5: Exponential & Logarithmic Functions

### Exponential $$y=ab^{x}$$

- For $$y=b^x$$ ($$b>0$$, $$b\ne 1$$): domain $$(-\infty,\infty)$$, range $$(0,\infty)$$, asymptote $$y=0$$, passes $$(0,1)$$.
- $$b>1$$ is growth; $$0<b<1$$ is decay. The natural base is $$e\approx 2.71828$$.
- Transformed form $$y=a\cdot b^{x-h}+k$$ has horizontal asymptote $$y=k$$.

### Logarithm definition

$$
\log_b x=y \iff b^y=x,\qquad \log_e x=\ln x
$$

- For $$y=\log_b x$$: domain $$(0,\infty)$$, range $$(-\infty,\infty)$$, vertical asymptote $$x=0$$, passes $$(1,0)$$. It is the reflection of $$b^x$$ over $$y=x$$.

### Log rules ($$M,N>0$$)

| Rule | Formula |
|---|---|
| Product | $$\log_b(MN)=\log_b M+\log_b N$$ |
| Quotient | $$\log_b\left(\frac{M}{N}\right)=\log_b M-\log_b N$$ |
| Power | $$\log_b(M^r)=r\log_b M$$ |
| Change of base | $$\log_b M=\frac{\log_a M}{\log_a b}$$ |

- There is no sum rule: $$\ln(a+b)\ne \ln a+\ln b$$.

### Solving strategies

- Bases match: set exponents equal. Bases differ: take $$\ln$$ of both sides and use the power rule.
- Logs present: combine into one log, then rewrite as an exponential. Always impose the domain first.
- A base $$0<b<1$$ is decreasing, so log inequalities reverse.

---

## Unit 6 & 7: Trigonometric Functions

### Angles, arcs, and motion

- Conversion: $$180^\circ=\pi$$ radians.
- Arc length $$s=r\theta$$; sector area $$A=\frac12 r^2\theta$$ (with $$\theta$$ in radians).
- Angular speed $$\omega=\frac{\theta}{t}$$; linear speed $$v=\frac{d}{t}=r\omega$$.

### Right-triangle ratios (SOH-CAH-TOA)

$$
\sin\theta=\frac{\text{opp}}{\text{hyp}},\quad \cos\theta=\frac{\text{adj}}{\text{hyp}},\quad \tan\theta=\frac{\text{opp}}{\text{adj}}
$$

- Reciprocals: $$\csc\theta=\frac{1}{\sin\theta}$$, $$\sec\theta=\frac{1}{\cos\theta}$$, $$\cot\theta=\frac{1}{\tan\theta}$$.
- Cofunctions: $$\sin\theta=\cos\left(\frac{\pi}{2}-\theta\right)$$.

### Special triangles

- $$30$$-$$60$$-$$90$$: sides $$x:x\sqrt3:2x$$.
- $$45$$-$$45$$-$$90$$: sides $$x:x:x\sqrt2$$.

### Unit circle: $$P=(\cos\theta,\sin\theta)$$

| $$\theta$$ | Degrees | $$\cos\theta$$ | $$\sin\theta$$ |
|---|---|---|---|
| $$0$$ | $$0^\circ$$ | $$1$$ | $$0$$ |
| $$\frac{\pi}{6}$$ | $$30^\circ$$ | $$\frac{\sqrt3}{2}$$ | $$\frac12$$ |
| $$\frac{\pi}{4}$$ | $$45^\circ$$ | $$\frac{\sqrt2}{2}$$ | $$\frac{\sqrt2}{2}$$ |
| $$\frac{\pi}{3}$$ | $$60^\circ$$ | $$\frac12$$ | $$\frac{\sqrt3}{2}$$ |
| $$\frac{\pi}{2}$$ | $$90^\circ$$ | $$0$$ | $$1$$ |
| $$\pi$$ | $$180^\circ$$ | $$-1$$ | $$0$$ |
| $$\frac{3\pi}{2}$$ | $$270^\circ$$ | $$0$$ | $$-1$$ |

- First-quadrant values repeat with signs set by the quadrant. Quadrant signs: I all $$+$$; II only $$\sin$$ $$+$$; III only $$\tan$$ $$+$$; IV only $$\cos$$ $$+$$ ("All Students Take Calculus").
- Reference angle gives the magnitude; the quadrant gives the sign. Coterminal angles differ by $$2\pi$$ (or $$360^\circ$$).

### Pythagorean identities

$$
\sin^2\theta+\cos^2\theta=1
$$

$$
1+\tan^2\theta=\sec^2\theta,\qquad 1+\cot^2\theta=\csc^2\theta
$$

### Even/odd and periods

- $$\cos(-\theta)=\cos\theta$$ (even); $$\sin(-\theta)=-\sin\theta$$ and $$\tan(-\theta)=-\tan\theta$$ (odd).
- Period of $$\sin$$ and $$\cos$$ is $$2\pi$$; period of $$\tan$$ is $$\pi$$.

---

## Unit 8 & 9: Graphs and Analytics of Trig Functions

### Sinusoidal transformations $$y=A\sin(B(x-C))+D$$

- Amplitude $$\lvert A\rvert$$; period $$\frac{2\pi}{\lvert B\rvert}$$; phase shift $$C$$; midline $$y=D$$.
- Range is $$[D-\lvert A\rvert,\,D+\lvert A\rvert]$$. If written $$y=A\sin(Bx-C)+D$$, factor to get phase shift $$\frac{C}{B}$$.

### Addition and subtraction formulas

$$
\sin(A\pm B)=\sin A\cos B\pm\cos A\sin B
$$

$$
\cos(A\pm B)=\cos A\cos B\mp\sin A\sin B
$$

$$
\tan(A\pm B)=\frac{\tan A\pm\tan B}{1\mp\tan A\tan B}
$$

### Double-angle formulas

$$
\sin(2\theta)=2\sin\theta\cos\theta
$$

$$
\cos(2\theta)=\cos^2\theta-\sin^2\theta=2\cos^2\theta-1=1-2\sin^2\theta
$$

$$
\tan(2\theta)=\frac{2\tan\theta}{1-\tan^2\theta}
$$

### Power-reducing and half-angle formulas

$$
\cos^2\theta=\frac{1+\cos(2\theta)}{2},\qquad \sin^2\theta=\frac{1-\cos(2\theta)}{2}
$$

$$
\sin\left(\frac{\theta}{2}\right)=\pm\sqrt{\frac{1-\cos\theta}{2}},\qquad \cos\left(\frac{\theta}{2}\right)=\pm\sqrt{\frac{1+\cos\theta}{2}}
$$

### Inverse trig ranges

| Function | Domain | Range |
|---|---|---|
| $$\sin^{-1}x$$ | $$[-1,1]$$ | $$\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$$ |
| $$\cos^{-1}x$$ | $$[-1,1]$$ | $$[0,\pi]$$ |
| $$\tan^{-1}x$$ | $$(-\infty,\infty)$$ | $$\left(-\frac{\pi}{2},\frac{\pi}{2}\right)$$ |

---

## Unit 10: Additional Topics in Trigonometry (Triangle Laws, Parametric, Polar, and Vectors)

### Triangle laws

- Law of Sines: $$\frac{\sin A}{a}=\frac{\sin B}{b}=\frac{\sin C}{c}$$ (use for ASA, AAS, SSA).
- SSA is the ambiguous case: with $$h=b\sin A$$, you may get $$0$$, $$1$$, or $$2$$ triangles; remember $$\sin\theta=\sin(180^\circ-\theta)$$.
- Law of Cosines: $$a^2=b^2+c^2-2bc\cos A$$ (use for SSS, SAS); rearranged $$\cos A=\frac{b^2+c^2-a^2}{2bc}$$.
- Area: $$K=\frac12 ab\sin C$$.

### Vectors

- From magnitude and direction: $$\mathbf v=\langle\lvert\mathbf v\rvert\cos\theta,\ \lvert\mathbf v\rvert\sin\theta\rangle$$.
- Magnitude of $$\langle a,b\rangle$$: $$\lvert\mathbf v\rvert=\sqrt{a^2+b^2}$$.
- Unit vector: $$\mathbf u=\frac{\mathbf v}{\lvert\mathbf v\rvert}$$; standard basis $$\mathbf i=\langle 1,0\rangle$$, $$\mathbf j=\langle 0,1\rangle$$.
- Dot product: $$\mathbf A\cdot\mathbf B=x_1x_2+y_1y_2=\lvert\mathbf A\rvert\lvert\mathbf B\rvert\cos\theta$$, so $$\cos\theta=\frac{\mathbf A\cdot\mathbf B}{\lvert\mathbf A\rvert\lvert\mathbf B\rvert}$$.

### Parametric equations

- $$x=f(t)$$, $$y=g(t)$$ trace a curve with direction as $$t$$ increases.
- Eliminate the parameter by solving one equation for $$t$$ and substituting.

### Polar coordinates

- Conversions: $$x=r\cos\theta$$, $$y=r\sin\theta$$, $$x^2+y^2=r^2$$, $$\tan\theta=\frac{y}{x}$$, $$r=\sqrt{x^2+y^2}$$.

### Complex numbers and De Moivre

- Polar form: $$z=r(\cos\theta+i\sin\theta)$$ with $$r=\sqrt{a^2+b^2}$$.
- De Moivre's Theorem: $$z^n=r^n(\cos(n\theta)+i\sin(n\theta))$$.

---

## Conic Sections

| Conic | Standard form | Key facts |
|---|---|---|
| Circle | $$(x-h)^2+(y-k)^2=r^2$$ | center $$(h,k)$$, radius $$r$$, $$e=0$$ |
| Parabola (vertical) | $$(x-h)^2=4p(y-k)$$ | vertex $$(h,k)$$, focus $$(h,k+p)$$, directrix $$y=k-p$$, $$e=1$$ |
| Parabola (horizontal) | $$(y-k)^2=4p(x-h)$$ | vertex $$(h,k)$$, focus $$(h+p,k)$$, directrix $$x=h-p$$ |
| Ellipse (horizontal) | $$\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1$$ | $$a>b$$, foci $$(h\pm c,k)$$, $$c^2=a^2-b^2$$ |
| Ellipse (vertical) | $$\frac{(x-h)^2}{b^2}+\frac{(y-k)^2}{a^2}=1$$ | foci $$(h,k\pm c)$$, $$c^2=a^2-b^2$$ |
| Hyperbola (horizontal) | $$\frac{(x-h)^2}{a^2}-\frac{(y-k)^2}{b^2}=1$$ | foci $$(h\pm c,k)$$, $$c^2=a^2+b^2$$, asymptotes $$y-k=\pm\frac{b}{a}(x-h)$$ |
| Hyperbola (vertical) | $$\frac{(y-k)^2}{a^2}-\frac{(x-h)^2}{b^2}=1$$ | foci $$(h,k\pm c)$$, $$c^2=a^2+b^2$$, asymptotes $$y-k=\pm\frac{a}{b}(x-h)$$ |

- Eccentricity $$e=\frac{c}{a}$$: circle $$e=0$$, parabola $$e=1$$, ellipse $$0<e<1$$, hyperbola $$e>1$$.
- For an ellipse, $$a>b>0$$ and the foci lie along the major axis; for a hyperbola, $$c^2=a^2+b^2$$.

### Conics in polar (focus at the pole)

$$
r=\frac{ed}{1\pm e\cos\theta}\qquad\text{or}\qquad r=\frac{ed}{1\pm e\sin\theta}
$$

- $$e=1$$ parabola, $$e<1$$ ellipse, $$e>1$$ hyperbola. The $$\cos\theta$$ form has a vertical directrix; $$\sin\theta$$ has a horizontal directrix.

---

## Additional Topics: Sequences and Series

### Sequences

- Arithmetic: $$a_n=a_1+(n-1)d$$.
- Geometric: $$a_n=a_1 r^{\,n-1}$$.

### Series

- Finite arithmetic: $$S_n=\frac{n}{2}(a_1+a_n)=\frac{n}{2}\bigl(2a_1+(n-1)d\bigr)$$.
- Finite geometric ($$r\ne 1$$): $$S_n=a_1\frac{1-r^n}{1-r}$$.
- Infinite geometric ($$\lvert r\rvert<1$$): $$S=\frac{a_1}{1-r}$$; diverges when $$\lvert r\rvert\ge 1$$.

### Binomial Theorem

$$
(a+b)^n=\sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k,\qquad \binom{n}{k}=\frac{n!}{k!(n-k)!}
$$

- Symmetry: $$\binom{n}{k}=\binom{n}{n-k}$$; the $$n$$th row of Pascal's triangle sums to $$2^n$$.

---

## Most Common AP Precalculus Mistakes

1. Forgetting domain restrictions before solving radical, rational, or logarithmic equations.
2. Dropping the second solution of a trig equation (or forgetting the period when listing solutions on an interval).
3. Splitting $$\ln(a+b)$$ as if there were a sum rule for logarithms.
4. Mixing up even and odd multiplicity when sketching polynomial graphs.
5. Forgetting to reverse a log or exponential inequality when the base is between $$0$$ and $$1$$.
6. Using $$c^2=a^2-b^2$$ for a hyperbola (it is $$c^2=a^2+b^2$$) or the reverse for an ellipse.
7. Putting an angle in degrees into $$s=r\theta$$, $$A=\frac12 r^2\theta$$, or $$v=r\omega$$ instead of radians.
8. Not checking the SSA ambiguous case for a possible second triangle.
