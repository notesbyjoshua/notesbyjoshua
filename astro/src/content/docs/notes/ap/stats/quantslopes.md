---
title: "Unit 9: Inference for Quantitative Data: Slopes"
next: false
sidebar:
  order: 9
---

---

This unit extends linear regression from [Unit 2](/notes/ap/stats/bivardata/) into inference. Instead of only describing the least-squares line for a sample, we ask whether there is evidence of a linear relationship in the population.

---

## Population Regression Model

For a population, the linear regression model is

$$
Y = \alpha + \beta x + \epsilon.
$$

Here:

- $$\alpha$$ is the population intercept.
- $$\beta$$ is the population slope.
- $$\epsilon$$ is random error around the line.

The sample least-squares line is

$$
\hat{y} = a + bx,
$$

where $$b$$ estimates the true slope $$\beta$$.

The parameter of interest in AP Statistics is usually $$\beta$$, the true slope of the population regression line.

---

## Conditions For Regression Inference

Use the acronym **LINER**:

:::conditions
1. **Linear**: scatterplot and residual plot show an approximately linear relationship.
2. **Independent**: observations are independent; if sampling without replacement, check the 10% Condition.
3. **Normal**: residuals are approximately normally distributed for each value of $$x$$.
4. **Equal variance**: vertical spread of residuals is roughly constant across $$x$$.
5. **Random**: data come from a random sample or randomized experiment.
:::


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\pgfplotsset{rp/.style={width=4.2cm,height=3.3cm,axis lines=middle,xtick=\empty,ytick=\empty}}
\begin{axis}[rp,title={good}] \addplot[dashed] coordinates {(0,0)(5,0)}; \addplot[only marks,blue] coordinates{(0.5,0.2)(1,-0.3)(2,0.4)(3,-0.2)(4,0.1)}; \end{axis}
\begin{axis}[rp,at={(5cm,0)},title={curved}] \addplot[dashed] coordinates {(0,0)(5,0)}; \addplot[only marks,red] coordinates{(0.5,1)(1,0)(2,-1)(3,-0.8)(4,0.9)}; \end{axis}
\end{tikzpicture}
```


---

## Standard Error Of The Slope

The standard error of the slope is written $$SE_b$$. Technology usually reports it directly.

Conceptually, $$SE_b$$ measures how much the sample slope $$b$$ would vary from sample to sample. Smaller residual scatter and more spread in the explanatory variable make the slope estimate more precise.

The residual standard deviation is often written $$s$$:

$$
s = \sqrt{\frac{\sum (y_i-\hat{y}_i)^2}{n-2}}.
$$

The degrees of freedom for regression inference are

$$
df = n-2.
$$

---

## Confidence Interval For Slope

A confidence interval for the true slope $$\beta$$ is

$$
b \pm t^*SE_b.
$$

Use

$$
df=n-2.
$$

Interpretation: "We are ___% confident that the true slope of the population regression line relating [x-context] to [y-context] is between ___ and ___ [y-units per x-unit]."

If the interval contains 0, then 0 is a plausible true slope at that confidence level. If it does not contain 0, there is evidence of a linear relationship.

---

## t-Test For Slope

The usual hypotheses are

$$
H_0:\beta=0
$$

and one of

$$
H_a:\beta>0,\qquad H_a:\beta<0,\qquad H_a:\beta\ne0.
$$

The test statistic is

$$
t = \frac{b-0}{SE_b},
$$

with

$$
df=n-2.
$$

A small p-value gives evidence that the true slope is not 0 in the direction of the alternative.

---

## Interpreting Regression Output

Technology output often includes:

- Coefficient estimate for intercept $$a$$.
- Coefficient estimate for slope $$b$$.
- Standard error of slope $$SE_b$$.
- t statistic for slope.
- p-value for slope.
- $$s$$, the standard deviation of residuals.
- $$R^2$$, the percent of variability in $$y$$ explained by the linear relationship with $$x$$.

Remember: $$R^2$$ is descriptive, while the p-value for slope is inferential. A small p-value does not prove causation, especially with observational data.

---

## Residual Plots And Diagnostics

Before inference, check:

- Scatterplot of $$y$$ versus $$x$$ for form and outliers.
- Residual plot for randomness around 0.
- Residual plot for equal spread.
- Normal probability plot or histogram of residuals for approximate normality.

Curvature suggests the linear model is wrong. Fanning suggests unequal variance. Outliers or high-leverage points can strongly affect the slope and p-value.

---

## Calculator Notes

Common calculator tool:

- `LinRegTTest`: tests slope and gives regression output.

Many calculators also provide `LinRegTInt` or interval output depending on model/software. If not, compute

$$
b \pm t^*SE_b
$$

from the regression output.

---

## Working Checklist

:::checklist
1. Identify the explanatory variable $$x$$ and response variable $$y$$.
2. State the parameter $$\beta$$ in context.
3. Check LINER conditions using plots and study design.
4. Use $$df=n-2$$.
5. Compute the confidence interval or t-test for slope.
6. Interpret slope in units of $$y$$ per one unit of $$x$$.
7. Avoid causal language unless the data come from a randomized experiment.
:::

---

## Key Equations

:::equations
| Idea | Equation |
| --- | --- |
| Population model | $$Y=\alpha+\beta x+\epsilon$$ |
| Sample regression line | $$\hat{y}=a+bx$$ |
| Residual standard deviation | $$s=\sqrt{\sum(y_i-\hat{y}_i)^2/(n-2)}$$ |
| Confidence interval for slope | $$b\pm t^*SE_b$$ |
| Test statistic for slope | $$t=(b-0)/SE_b$$ |
| Degrees of freedom | $$df=n-2$$ |
:::

## Practice

### FRQ

::::frq{id=stats-quantslopes-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
