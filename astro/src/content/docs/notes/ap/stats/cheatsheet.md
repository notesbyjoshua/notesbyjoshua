---
title: "AP Statistics Cheat Sheet"
sidebar:
  order: 0
---

## Key Vocabulary

- **Parameter**: a fixed, usually unknown population value, such as $$\mu$$, $$p$$, or $$\sigma$$.
- **Statistic**: a value computed from a sample, such as $$\bar{x}$$, $$\hat{p}$$, or $$s$$.
- **Estimator**: a statistic used to estimate a parameter.
- **Sampling variability**: the fact that statistics vary from sample to sample.
- **Bias**: systematic error; an estimator or sampling method tends to miss in the same direction.

:::warning
Use parameters in hypotheses and conclusions. Use statistics for sample calculations.
:::

---

## Unit 1: Exploring One-Variable Data and Collecting Data

### One-variable displays

- Categorical variables: frequency tables, relative frequencies, bar charts, pie charts.
- Quantitative variables: dotplots, stemplots, histograms, boxplots, ogives.
- Describe quantitative distributions with center, unusual features, shape, and spread.

### Summary statistics

- Mean: $$\bar{x}=\dfrac{\sum x_i}{n}$$.
- Standard deviation: typical distance from the mean.
- Median and IQR are resistant; mean and standard deviation are not.
- Outlier rule: values below $$Q_1-1.5\text{IQR}$$ or above $$Q_3+1.5\text{IQR}$$.
- z-score: $$z=\dfrac{x-\mu}{\sigma}$$, or use $$\bar{x}$$ and $$s$$ for sample standardization.

### Data collection

- Random sampling supports generalizing to the population sampled from.
- Random assignment supports cause-and-effect conclusions.
- Observational studies can show association but usually cannot prove causation.
- Common sampling problems: undercoverage, nonresponse, response bias, voluntary response, convenience sampling.
- Experiments use treatments, random assignment, control, replication, blocking, placebo, and blinding.

---

## Unit 2: Probability, Random Variables, and Probability Distributions

### Two categorical variables

- Use two-way tables.
- Marginal distribution: one variable by itself.
- Conditional distribution: one variable within a category of another variable.
- Association appears when conditional distributions differ across groups.

### Probability rules

- $$0\le P(A)\le 1$$.
- $$P(A^c)=1-P(A)$$.
- $$P(A\cup B)=P(A)+P(B)-P(A\cap B)$$.
- $$P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$$.
- Independent events satisfy $$P(A\mid B)=P(A)$$ and $$P(A\cap B)=P(A)P(B)$$.

:::warning
Disjoint does not mean independent. If two non-impossible events are disjoint, knowing one happened tells you the other did not happen.
:::

### Random variables

- Expected value: $$\mu_X=E(X)=\sum xP(X=x)$$.
- Variance: $$\sigma_X^2=\sum (x-\mu_X)^2P(X=x)$$.
- For independent random variables, variances add for sums and differences.

### Binomial distribution

Use binomial when there are binary outcomes, independent trials, fixed $$n$$, and the same success probability $$p$$.

$$
P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}.
$$

$$
\mu_X=np,\qquad \sigma_X=\sqrt{np(1-p)}.
$$

### Normal and sampling distributions

- Normal standardization: $$z=\dfrac{x-\mu}{\sigma}$$.
- Empirical Rule: about 68%, 95%, 99.7% within 1, 2, 3 standard deviations.
- Sampling distribution: distribution of a statistic over repeated random samples.
- Central Limit Theorem: for large $$n$$, the sampling distribution of $$\bar{x}$$ is approximately normal under independence.

---

## Unit 3: Inference for Categorical Data: Proportions

### One proportion

For one sample proportion,

$$
\mu_{\hat{p}}=p,\qquad \sigma_{\hat{p}}=\sqrt{\frac{p(1-p)}{n}}.
$$

Confidence interval:

$$
\hat{p}\pm z^*\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}.
$$

Test statistic:

$$
z=\frac{\hat{p}-p_0}{\sqrt{p_0(1-p_0)/n}}.
$$

### Two proportions

Confidence interval:

$$
(\hat{p}_1-\hat{p}_2)\pm z^*
\sqrt{\frac{\hat{p}_1(1-\hat{p}_1)}{n_1}+\frac{\hat{p}_2(1-\hat{p}_2)}{n_2}}.
$$

For a test of $$H_0:p_1-p_2=0$$, use the pooled proportion:

$$
\hat{p}_c=\frac{x_1+x_2}{n_1+n_2}.
$$

$$
z=\frac{(\hat{p}_1-\hat{p}_2)-0}
{\sqrt{\hat{p}_c(1-\hat{p}_c)(1/n_1+1/n_2)}}.
$$

### Proportion conditions

- Random sample, random assignment, or randomized process.
- Independence, including the 10% Condition when sampling without replacement.
- Large counts: successes and failures are at least 10. For one-proportion tests, check with $$p_0$$.

### Chi-square homogeneity and independence

$$
\chi^2=\sum \frac{(O-E)^2}{E}.
$$

Expected cell count:

$$
E=\frac{(\text{row total})(\text{column total})}{\text{grand total}}.
$$

Degrees of freedom:

$$
df=(r-1)(c-1).
$$

- Homogeneity: compare one categorical distribution across separate groups.
- Independence: test association between two categorical variables in one population.
- Condition: expected counts should all be at least 5.

---

## Unit 4: Inference for Quantitative Data: Means

Use t procedures when $$\sigma$$ is unknown.

### One mean or paired mean difference

$$
t=\frac{\bar{x}-\mu_0}{s/\sqrt{n}},\qquad df=n-1.
$$

Confidence interval:

$$
\bar{x}\pm t^*\frac{s}{\sqrt{n}}.
$$

For paired data, compute differences first and run a one-sample t procedure on the differences.

### Two independent means

Standard error:

$$
SE=\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}.
$$

Confidence interval:

$$
(\bar{x}_1-\bar{x}_2)\pm t^*SE.
$$

Test statistic:

$$
t=\frac{(\bar{x}_1-\bar{x}_2)-0}{SE}.
$$

Use technology for degrees of freedom unless instructed otherwise.

### Mean conditions

- Random sample, random assignment, or randomized process.
- Independence, including the 10% Condition when sampling without replacement.
- Normal/large-sample condition: population is normal, sample size is large, or sample data show no strong skew/outliers when $$n$$ is small.

---

## Unit 5: Regression Analysis

### Scatterplots and correlation

- Describe form, direction, strength, and unusual features in context.
- Correlation $$r$$ measures linear association between two quantitative variables.
- $$-1\le r\le 1$$.
- Correlation is not resistant and does not prove causation.

### Linear regression

Sample regression line:

$$
\hat{y}=a+bx.
$$

- Slope $$b$$: predicted change in $$\hat{y}$$ for a one-unit increase in $$x$$.
- Intercept $$a$$: predicted $$\hat{y}$$ when $$x=0$$, meaningful only if $$x=0$$ is reasonable.
- Residual: $$e=y-\hat{y}$$.
- Least-squares regression minimizes $$\sum e_i^2$$.
- Coefficient of determination: $$R^2$$ is the proportion of variation in $$y$$ explained by the linear model with $$x$$.

:::exam{topic="Regression language"}
Say "predicted" and "on average" when interpreting regression. Do not claim causation from a regression model unless the data came from a well-designed randomized experiment.
:::

---

## Inference Writing Checklist

1. Define the parameter in context.
2. State hypotheses or the confidence interval target using parameters.
3. Check conditions with context and numbers.
4. Show the statistic, standard error, and critical value or p-value.
5. Conclude in context using the language of the original question.

---

## Calculator Tips for the Exam

College Board expects students to have a graphing calculator with statistical capabilities for AP Statistics. For the 2026 digital exam, Bluebook also includes the built-in Desmos graphing calculator for AP Statistics. A calculator is helpful, but it does not replace statistical communication.

:::exam{topic="Calculator use"}
Use your calculator to compute, graph, and check. On free-response, still show the setup: parameter, hypotheses or interval target, conditions, statistic, p-value or interval, and conclusion in context.
:::

### General calculator habits

- Bring a calculator you already know how to use, and make sure it is allowed by the current AP calculator policy.
- If using a handheld calculator, check batteries before the exam. If allowed and available, bring a backup.
- Clear old lists before entering new data so previous numbers do not silently contaminate a calculation.
- Name lists clearly when possible, especially for two-variable data or two-sample procedures.
- Store exact intermediate values when possible; round final answers reasonably, usually to 3 or 4 decimal places unless the problem says otherwise.
- For probability and inference, check whether the calculator wants **area to the left**, **area between bounds**, raw data, summary statistics, counts, or proportions.
- Do not paste calculator output as your whole answer. Translate it into AP Stats language.

### TI-84-style tools worth knowing

Common menus vary by calculator model, but these are the TI-84-style commands students often use:

| Task | Common tool |
| --- | --- |
| One-variable statistics | `1-Var Stats` |
| Two-variable regression setup | `STAT` -> `EDIT`, then `LinReg(a+bx)` |
| Normal probabilities | `normalcdf(lower, upper, mean, sd)` |
| Normal inverse percentiles | `invNorm(area left, mean, sd)` |
| Binomial probability | `binompdf(n, p, x)` |
| Binomial cumulative probability | `binomcdf(n, p, x)` |
| Geometric probability | `geometpdf(p, x)` or `geometcdf(p, x)` |
| One-proportion z interval/test | `1-PropZInt`, `1-PropZTest` |
| Two-proportion z interval/test | `2-PropZInt`, `2-PropZTest` |
| One-sample t interval/test | `TInterval`, `T-Test` |
| Two-sample t interval/test | `2-SampTInt`, `2-SampTTest` |
| Chi-square test | `χ²-Test` |
| Goodness-of-fit test | `χ²GOF-Test` if available |

:::warning
Calculator names are not the same as statistical justification. For example, writing `2-SampTTest` is not enough unless you also state the hypotheses, check conditions, and interpret the p-value in context.
:::

### Desmos/Bluebook habits

- Practice with the Bluebook-style Desmos calculator before test day if your class uses the digital AP exam format.
- For distributions, confirm the calculator is using the correct mean, standard deviation, and tail direction.
- For regression, make sure the explanatory variable is on the $$x$$-axis and the response variable is on the $$y$$-axis.
- Use graphs to check reasonableness: skew, outliers, linearity, residual pattern, and whether a value is far into a tail.

### Fast checks before trusting output

1. Does the procedure match the parameter? Use proportion procedures for $$p$$ and t procedures for $$\mu$$.
2. Are the inputs in the right order? Two-sample problems can flip signs if group 1 and group 2 are swapped.
3. Did you use the null value in the standard error for a one-proportion or two-proportion test?
4. Is the alternative hypothesis one-sided or two-sided?
5. Does the final sentence answer the original question, not just report a number?
