---
title: "Unit 2: Exploring Bivariate Data"
sidebar:
  order: 2
---

## Comparing distributions across groups

Before fitting models, you will often place two or more distributions side by side (back-to-back stemplots, parallel boxplots, or histograms with the same scales). When comparing, always address the center (typical values, e.g. mean/median), spread (how variable the groups are, e.g. range, IQR, standard deviation), and shape (symmetric, skewed, unimodal, and so on). Note clusters, gaps, and outliers in each group. Always tie differences back to the context of the problem: who was measured, what units mean, and what question the study is trying to answer.

Use displays that make parallel structure obvious (same axis scales, same bin widths when reasonable, etc.) so the eye is comparing apples to apples.

---

## What “bivariate” means

Bivariate data records two variables for every individual or object in a study. Examples include (study hours, exam score) for each student, or (latitude, January temperature) for each city.

If both variables are quantitative and the relationship looks roughly linear, we summarize direction and strength with the correlation coefficient and describe the overall trend with a least-squares regression line. If one or both variables are categorical, we use two-way tables and talk about association rather than a single line through a scatterplot (since you obviously can't graph categorical variables!).

---

## Scatterplots

A **scatterplot** plots each case as a point $$(x, y)$$ in the plane. Choose scales so that all observed $$x$$- and $$y$$-values fit comfortably, and label axes with variable names and units.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[width=10cm,height=5cm,xmin=0,xmax=10,ymin=0,ymax=10,axis lines=left,xlabel={$x$},ylabel={$y$},xtick=\empty,ytick=\empty]
\addplot[only marks, blue] coordinates {(1,2) (2,2.7) (3,3.6) (4,4.4) (5,5.2) (6,6.4) (7,7.0)};
\addplot[only marks, red] coordinates {(1,8) (2,7.5) (3,6.2) (4,5.7) (5,4.2) (6,3.3) (7,2.5)};
\node[blue] at (axis cs:3,8.7) {positive association}; \node[red] at (axis cs:7,1.4) {negative association};
\end{axis}
\end{tikzpicture}
```

When you describe a scatterplot, organize your comments around three ideas: **shape**, **direction**, and **strength**.

:::strategy{title="Describing scatterplots"}
Use form, direction, strength, and unusual features. Then connect the pattern to context: "As [explanatory variable] increases, [response variable] tends to..." However, NEVER imply causation unless it is specifically stated! Correlation does NOT imply causation!
:::

### Shape

**Shape** answers whether the overall pattern is linear (points basically follow a straight line) or nonlinear (curved, piecewise, or scattered without a simple path). Nonlinear patterns are a signal that a straight-line model may be wrong unless you transform a variable first.

### Direction

**Direction** describes how $$y$$ tends to move as $$x$$ increases. An upward direction is positive association and a downward direction is negative association. Clouds with no clear trend show weak or no linear association (correlation near zero is possible even when a strong nonlinear pattern exists, which is one reason you always look at the plot).

### Strength

**Strength** describes how tightly points follow the trend. If you imagine a line or smooth curve through the cloud, strength is about how far points deviate from that trend. Tight clouds imply strong association; wide vertical scatter implies weak association. Outliers can stand away from the bulk of the data in $$x$$, in $$y$$, or in both.

---

## Pearson’s correlation coefficient

Pearson’s correlation coefficient (often called the correlation is a number that measures the direction and strength of a linear relationship between two quantitative variables. It is denoted $$\rho$$ for a population and $$r$$ for a sample (although $$r$$ is almost always used). For every distribution:

$$
-1 \le r \le 1
$$

The sign of $$r$$ matches the direction of the linear trend: $$r > 0$$ for positive association, $$r < 0$$ for negative association. The magnitude $$\lvert r\rvert$$ relates to strength for linear association only.

### Formula

For paired data $$(x_i, y_i)$$ with sample means $$\bar{x}$$ and $$\bar{y}$$:

$$
r = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \sum (y_i - \bar{y})^2}}
$$

Intuitively, $$r$$ compares covariation (do $$x$$ and $$y$$ tend to be on the same side of their means together?) to how spread out $$x$$ and $$y$$ are individually.

### Interpreting $$\lvert r\rvert$$

Values with $$\lvert r\rvert = 1$$ mean all points fall exactly on a single straight line (perfect linear fit). As $$\lvert r\rvert$$ moves toward 0, the linear trend weakens.

Textbooks sometimes give rough cutoffs such as $$\lvert r\rvert < 0.1$$ as very weak, 0.1 to 0.5 as weak-to-moderate, 0.5 to 0.85 as strong, and $$\lvert r\rvert > 0.85$$ as very strong. Treat these as rules of thumb, not laws: context, sample size, and outliers matter. Sometimes a $$\lvert r\rvert$$ value of 0.4 can be classified as strong, and sometimes a $$\lvert r\rvert$$ value of 0.8 may be classified as weak. Correlation is not causation; confounding and lurking variables can produce strong $$\lvert r\rvert$$ without a direct cause-and-effect link.

Correlation is unitless and unchanged by linear rescaling (multiplying either variable by a positive constant, or adding a constant), which makes it handy for comparing relationships measured in different units.

:::warning
Correlation measures linear association only. A strong curved relationship can have a correlation near 0, and a large outlier can make correlation look much stronger or weaker than the main pattern deserves.
:::

---

## Least-squares regression

### The linear model

A linear regression model describes how a response variable $$Y$$ depends on an explanatory variable $$X$$ (also called a predictor or independent variable, depending on the textbook). A population-style statement often looks like

$$
Y = \beta_0 + \beta_1 X + \epsilon
$$

Here $$\beta_0$$ is the y-intercept, $$\beta_1$$ is the slope, and $$\epsilon$$ is the error term. The errors $$\epsilon$$ are what we hope stay small and behave reasonably once we estimate the line from data.

From a sample, we write estimated coefficients (often $$b_0$$ and $$b_1$$, or $$\hat{\beta}_0$$ and $$\hat{\beta}_1$$) and a fitted line used for prediction. Note that $$\epsilon$$ is only included when you have to compare the experimental data with the model preictions.

### Predicted values and residuals

For a chosen $$x$$, the predicted value $$\hat{y}$$ is the height of the regression line at that $$x$$. A common form is

$$
\hat{y} = b_0 + b_1 x
$$

using the least-squares estimates $$b_0$$ and $$b_1$$ from your data (notation varies).

The residual for that case is

$$
\epsilon = y - \hat{y}
$$

the observed response minus the predicted response. Residuals are the data’s way of telling you where the line was too high or too low. A positive residual means the point lies above the line, and a negative residual means it lies below.

### Why “least squares”?

The least-squares regression line is the line that minimizes the sum of squared residuals, $$\sum \epsilon_i^2$$. That criterion is mathematically tractable and can be solved without heavy use of approximations, among other mathematical advantages. In addition, it only compares the magnitudes of error, so direction does not matter.

Useful facts for AP Statistics:

- The least-squares line always passes through ($$\bar{x}, \bar{y}$$), the point of means.
- The slope satisfies

$$
b_1 = r \left( \frac{s_y}{s_x} \right)
$$

where $$s_x$$ and $$s_y$$ are the sample standard deviations of $$x$$ and $$y$$. So the sign of $$b_1$$ matches the sign of $$r$$, and the steepness scales with how spread out $$y$$ is relative to $$x$$.

### Coefficient of determination

The coefficient of determination, $$R^2$$, reports the fraction of the variability in $$y$$ that is accounted for by the linear model using $$x$$. In simple linear regression with one $$x$$, $$R^2$$ equals $$r^2$$ and lies between 0 and 1. Values near 1 mean the points hug the line; values near 0 mean the line explains little of how $$y$$ moves. $$R^2$$ is typically used instead of $$r$$ because it does not depend on direction, so it only shows the correlation.

High $$R^2$$ does not prove the model is appropriate (nonlinearity can still hide in residual plots), and it does not prove causation.

### Influential observations and outliers

An outlier in regression is often a point with an unusually large residual: the line misses it badly. An influential observation is one whose removal would substantially change the estimated slope or intercept—often a point that is extreme in $$x$$ (high leverage) and also off the trend. Not every outlier is influential, and not every influential point looks like a vertical outlier; inspect the plot and, when possible, recompute the line without suspect cases (sensibly and transparently).

---

## Residual plots

A residual plot graphs residuals (usually on the vertical axis) against either the predicted values $$\hat{y}$$ or the explanatory variable $$x$$. The purpose is to diagnose the fit of a linear model.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[axis lines=middle,width=9cm,height=5cm,xmin=0,xmax=10,ymin=-3,ymax=3,xlabel={fitted value},ylabel={residual},xtick=\empty,ytick=\empty]
\addplot[dashed] coordinates {(0,0) (10,0)};
\addplot[only marks, blue] coordinates {(1,0.6) (2,-0.4) (3,0.2) (4,-0.8) (5,0.5) (6,-0.1) (7,0.7) (8,-0.3)};
\node at (axis cs:5,2.2) {random scatter means a linear model is reasonable};
\end{axis}
\end{tikzpicture}
```

What you hope to see is a formless cloud: points scattered randomly around the horizontal axis at $$\epsilon = 0$$, with roughly constant spread across values of $$x$$ or $$\hat{y}$$.

:::exam{topic="Residual plots"}
When the residual plot has a curve, say the linear model is not appropriate. When the vertical spread changes as $$x$$ increases, say the equal-spread condition is questionable.
:::

Curved patterns mean the relationship is probably nonlinear; a linear model is a poor summary and should not be used. Fan shapes (spread grows or shrinks as $$x$$ changes) suggest nonconstant variance, which matters more when you move into formal inference, but is still worth mentioning when you describe real data.

---

## Transformations to achieve linearity

When a scatterplot shows a nonlinear trend, one strategy is to transform one or both variables so that the new relationship is more nearly linear. You then fit the line to the transformed scale and interpret conclusions in original units when you report results.

Example: if $$y$$ grows exponentially with $$x$$, plotting $$\ln(y)$$ against $$x$$ may straighten the cloud. Symbolically, if $$y = a e^{kx}$$ in an idealized world, then $$ln(y) = ln(a) + kx$$ is linear in $$x$$.

### Common transformations

- Log transformation: $$z = ln(y)$$ or $$z = log_{10}(y)$$ for right-skewed positive responses or multiplicative growth patterns.
- Square root transformation: $$z = \sqrt{y}$$ for count data or mild right skew where logs feel too aggressive.
- Reciprocal transformation: $$z = 1/y$$ when larger $$x$$ corresponds to smaller $$y$$ in a rate-like way.

Always check a residual plot after transforming; the goal is a linear trend with well-behaved residuals, not a cosmetic change on the scatterplot alone.

---

## Two-way tables and categorical association

When both variables are categorical, we organize counts in a two-way table (also called a contingency table): $$r$$ rows for one variable’s categories and $$c$$ columns for the other’s. Each cell count tells how many cases fall in that row category and column category together.

### Marginal distributions

Marginal frequencies (or marginal relative frequencies) come from row totals and column totals printed in the margins of the table. They describe each variable ignoring the other—how often each category of $$X$$ occurs overall, and how often each category of $$Y$$ occurs overall.

### Conditional distributions

Conditional relative frequencies restrict attention to one row or one column at a time: among cases in that row, what fraction falls in each column? The answer is $$P(\text{column category} \mid \text{row category})$$. Comparing conditional distributions across rows (or across columns) is the standard way to describe association between two categorical variables.

### Association versus independence

Two categorical variables show no association when the distribution of one variable is the same within every category of the other—equivalently, when cell counts match what independence would predict from the margins.

Under an independence assumption, the expected count for a cell is

$$
\frac{(\text{row total})(\text{column total})}{\text{grand total}}
$$

Compare observed counts to expected counts. Cells with observed counts larger than expected point to combinations that occur more often than an independence story would predict; observed smaller than expected points to combinations that occur less often. Across the whole table, those comparisons build an overall picture of association (and later, in inference units, chi-square tests formalize the idea).

Avoid calling this pattern “positive correlation” or “negative correlation”; correlation in AP Statistics is reserved for quantitative pairs. For tables, speak in terms of association, dependence, and conditional distributions.

## Practice

### FRQ

::::frq{id=stats-bivardata-1}
1. A school counselor records hours studied and quiz score for 8 students. Technology gives the least-squares regression line

   $$
   \hat{y}=54.2+6.8x,
   $$

   where $$x$$ is hours studied and $$\hat{y}$$ is predicted quiz score. The correlation is $$r=0.86$$.

   $$(A)$$ Interpret the slope in context.

   $$(B)$$ One student studied 4 hours and earned an 88. Find and interpret the residual.

   $$(C)$$ Find and interpret $$r^2$$.

:::solution
$$(A)$$ For each additional hour studied, the model predicts an increase of about 6.8 quiz points, on average.

$$(B)$$ The predicted score for $$x=4$$ is

$$
\hat{y}=54.2+6.8(4)=81.4.
$$

The residual is

$$
y-\hat{y}=88-81.4=6.6.
$$

The student scored 6.6 points higher than the model predicted.

$$(C)$$

$$
r^2=(0.86)^2=0.7396.
$$

About 74% of the variation in quiz scores is explained by the least-squares linear relationship with hours studied.
:::
::::
