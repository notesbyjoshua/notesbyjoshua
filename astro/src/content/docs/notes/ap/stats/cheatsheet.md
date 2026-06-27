---
title: "AP Statistics Cheat Sheet"
sidebar:
  order: 0
---

# AP Statistics Cheat Sheet

---

This page is a high-yield AP Statistics reference for last-minute review. It pulls together vocabulary, conditions, and formulas across Units 1–9 in one scan-friendly layout. On exam day you also have the official [formula sheet and tables](https://apcentral.collegeboard.org/media/pdf/ap-statistics-formula-tables-sheet.pdf)—use this page to remember *when* to apply each idea and how to phrase conclusions in context.

---

## VERY Important Terms

- **Parameter** (population): $$\mu$$, $$p$$, $$\sigma$$, $$\beta$$: fixed, usually unknown. Parameters are always GREEK letters!
- **Statistic** (sample): $$\bar{x}$$, $$\hat{p}$$, $$s$$, $$b$$: computed from data. Parameters are always ROMAN (basically English) letters!

---

## Unit 1: Exploring Univariate Data

### Graphs and shape

- **Histogram / stemplot**: shape (skew left/right, symmetric), gaps, unusual values.
- **Skew**: tail direction = skew direction (long tail right → skewed right).
- **Boxplot**: median, IQR, outliers (often $$Q_1 - 1.5\,\text{IQR}$$ and $$Q_3 + 1.5\,\text{IQR}$$ rule).

### Center and spread

- Center: **Mean** $$\bar{x}$$: pulled by outliers (average of all data points); **median** resistant (the "middle" data point).
- Spread: **Standard deviation** $$s$$: typical distance from mean (same units as data); **IQR** $$= Q_3 - Q_1$$: spread of middle half; resistant to outliers
- When comparing two distributions, alwasy use CUSS: **Center, Unusual features, Shape**, and **Spread** in context.

### Transforming Distributions

- Mean: Suppose you have $$y=f(x)$$. Then $$\mu_y = \mu_f(x)$$. Do any operation to combine two variables, the mean will be the same operation done on the two respective means.
- Standard Deviation: Suppose you have $$y=f(x) + a$$, where $$f(x) does not contain any addition of constants$$. Then, $$\sigma_y=\sigma_f(x)$$. Also, if you add/subtract two variables, the new standard deviation becomes: $$\sigma_a,b = \sqrt{\sigma_a^2 + \sigma_b^2}$$

---

## Unit 2: Exploring Bivariate Data

### Scatterplots

- Describe **form** (linear/curved), **direction** (positive/negative), **strength** (weak/moderate/strong), and **unusual points** (outlier). Always describe in context!

### Correlation $$r$$

- Measures **linear** association for **quantitative** variables; $$-1 \le r \le 1$$.
- **Not** resistant to outliers; **NEVER** cite causation from correlation alone.

### Least-squares regression line

$$
\hat{y} = a + bx
$$

- **Slope $$b$$**: predicted change in $$\hat{y}$$ when $$x$$ increases by 1 (in $$y$$ units per $$x$$ unit).
- **Intercept $$a$$**: predicted $$\hat{y}$$ when $$x=0$$ (only meaningful if $$x=0$$ is plausible).
- **Residual** $$e = y - \hat{y}$$; residual plot checks linearity and equal spread. If residuals are reasonable and distributed randomly, then a linear trend is a good fit.

### Influential vs outlier

- **Outlier in $$y$$**: large residual.
- **Influential point**: pulling the regression line; often extreme in $$x$$.

---

## Unit 3: Collecting Data

### Scope of inference

- **Random sample** → generalize to **population** that was sampled from
- **Random assignment** → supports **cause** (for differences in treatment)

### Study types

- **Observational**: treatments not imposed; confounding possible, and thus causation CANNOT be established.
- **Experiment**: researcher assigns treatments; can show causation if well designed.
- Tip: Always say "This study is an [experiment/observation] because the researchers [did/did not] impose treatments.

### Sampling designs

- **Simple Random Sample**: Take a population, assign each a number, and use a random number generator to select your desired amount of samples.
- **Stratified Random Sample**: Take a population, split into groups based on a characteristic, and employ a simple random sampling method to randomly choose the desired amount of samples from EACH group.
- **Clustered Random Sample**: Take a population, split into groups based on a characteristic, and employ a simple random sampling method to randomly choose the desired amount of groups and sample ALL members of the selected groups.
- **Bias** sources: wording, nonresponse, voluntary response, convenience samples. Usually, random sampling reduces bias one way or another

### Experiments

- **Blocking**: separate similar subjects first, then randomize within blocks.
- **Control**: The control group is the group that receives no treatment or a placebo (basically something that looks like the treatment but does nothing)
- **Replication**: Replication occurs if you can rerun the experiment again. It does NOT include cases where you run a treatment many times in one experiment.
- **Random assignment**: To get the best results, always try to use some sort of random assignment to assign patients to treatments
- **Blinding**: Blinding is when a party (either the patient or the deliverer of the treatment) does not know which treatment a patient is assigned to. **Single blinding** is when the patient does not know which treatment is given (usually done through placebos), and **double blinding** is when both parties don't know, usually done where the treatments are assigned and then given to the unknowing deliverer.

---

## Unit 4: Probability and Random Variables

### Probability rules

- $$0 \le P(A) \le 1$$
- $$P(A^c) = 1 - P(A)$$
- $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
- **Independent**: $$P(A \mid B) = P(A)$$ (if $$P(B)>0$$); useful form $$P(A \cap B) = P(A)P(B)$$.
- **Conditional**: $$P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}$$

### Discrete random variables

- **Mean (expected value)**: $$\mu_X = \sum x\, P(X=x)$$
- **Variance**: $$\sigma_X^2 = \sum (x-\mu_X)^2 P(X=x)$$ ; **SD** $$\sigma_X$$.

### Combining random variables

- $$\mu_{X \pm Y} = \mu_X \pm \mu_Y$$
- **If independent**: $$\sigma^2_{X \pm Y} = \sigma^2_X + \sigma^2_Y$$ (note **plus** for both sum and difference).

### Binomial

- Fixed $$n$$ independent trials, same $$p$$, success/failure outcomes.

$$
P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}
$$

- $$\mu_X = np$$, $$\sigma_X = \sqrt{np(1-p)}$$

**Calculator Trick**: Use binompdf(n, p, x) for $$P(X=x)$$ and binomcdf(n, p, x) for $$P(X≤x)$$

### Geometric $$G(n,p)$$

- Number of trials $$k$$ to get one success.

$$
P(X=k) = p^k (1-p)^{n-k}
$$

- $$\mu_X = \frac{1}{p}$$, $$\sigma_X = \frac{\sqrt{1-p}}{p}$$

**Calculator Trick**: Use geometpdf(n, p, x) for $$P(X=x)$$ and geometcdf(n, p, x) for $$P(X≤x)$$

### Normal distribution

- Standardize: $$z = \dfrac{x-\mu}{\sigma}$$
- Use **normalcdf / invNorm** with proper $$\mu$$, $$\sigma$$ and boundaries.

---

## Unit 5: Sampling Distributions

### Core ideas

- A **statistic** varies from sample to sample; its distribution is the **sampling distribution**.
- **Central Limit Theorem**: for large $$n$$, sampling distribution of $$\bar{x}$$ is approximately Normal even if the population isn’t (Independence / Random + large $$n$$).

### Means

- $$\mu_{\bar{x}} = \mu$$
- $$\sigma_{\bar{x}} = \dfrac{\sigma}{\sqrt{n}}$$ (if $$\sigma$$ known); use $$\dfrac{s}{\sqrt{n}}$$ as **standard error** when estimating.

### Proportions

- $$\mu_{\hat{p}} = p$$
- $$\sigma_{\hat{p}} = \sqrt{\dfrac{p(1-p)}{n}}$$

### Conditions

- **$$np \ge 10$$** and **$$n(1-p) \ge 10$$** for Normal approximation to $$\hat{p}$$.
- **$$n \ge 30$$** often cited for $$\bar{x}$$, but prefer context + shape of population when $$n$$ is small.

---

## Inference: Shared Structure

### Confidence interval

$$
\text{statistic} \pm (\text{critical value}) \times (\text{standard error})
$$

- **Interpret**: “We are **C%** confident that the interval (**interval**) captures the **true population parameter** [in context].”
- **Not**: “C% chance the parameter is in this interval” for **one** computed interval.

### Hypothesis test

1. **Parameter** in words + symbols (define $$p$$; $$\mu$$; $$p_1-p_2$$; $$\beta$$).
2. **Hypotheses**: $$H_a$$ matches the question; equality **always** in $$H_0$$.
3. **Conditions / PLANTS-style checks** (see each procedure).
4. **Test statistic** + **$$P$$-value** (probability of a statistic at least as extreme as observed if $$H_0$$ true).
5. **Conclusion** linked to $$P$$-value + **context**.

### Errors

- **Type I**: reject true $$H_0$$ (false alarm); controlled by $$\alpha$$.
- **Type II**: fail to reject false $$H_0$$ (miss); related to **power** (which is $$1-\beta$$).

---

## Unit 6: Inference for Proportions

### One-sample $$z$$ interval and test for $$p$$

- **Standard error** (estimate): $$\text{SE}_{\hat{p}} = \sqrt{\dfrac{\hat{p}(1-\hat{p})}{n}}$$
- **$$z$$ statistic**: $$z = \dfrac{\hat{p} - p_0}{\sqrt{\dfrac{p_0(1-p_0)}{n}}}$$ under $$H_0$$.

### Two-sample difference $$\hat{p}_1 - \hat{p}_2$$

- **CI**: $$(\hat{p}_1-\hat{p}_2) \pm z^* \sqrt{\dfrac{\hat{p}_1(1-\hat{p}_1)}{n_1}+\dfrac{\hat{p}_2(1-\hat{p}_2)}{n_2}}$$
- **Hypothesis test $$p_1-p_2$$**: pooled proportion $$\hat{p}_c = \dfrac{x_1+x_2}{n_1+n_2}$$ for standard error under $$H_0: p_1=p_2$$:

$$
z = \dfrac{(\hat{p}_1-\hat{p}_2)-0}{\sqrt{\hat{p}_c(1-\hat{p}_c)\left(\dfrac{1}{n_1}+\dfrac{1}{n_2}\right)}}
$$

### Conditions (short checklist)

- **Random** assignment or random sampling (as appropriate).
- **10%**: $$n \le 0.10\,N$$ when sampling without replacement (each group if two-sample).
- **Large counts**: successes & failures $$\ge 10$$ **each** (for each group or for one-sample use $$np_0$$ and $$n(1-p_0)$$ when checking Normal approximation).

---

## Unit 7: Inference for Means

### One-sample $$t$$ for $$\mu$$

$$
t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}, \quad \text{df} = n-1
$$

### Paired data

- Difference $$d_i = \text{before}_i - \text{after}_i$$ (be consistent); analyze **one sample** of differences.

### Two-sample $$t$$ for $$\mu_1 - \mu_2$$

- Typically **unpooled**: $$\text{SE} = \sqrt{\dfrac{s_1^2}{n_1}+\dfrac{s_2^2}{n_2}}$$ ; **df** use calculator/wizard or conservative approximate methods per course.

### Conditions

- **Random** + **10%** if sampling without replacement.
- **Normality / $$n$$**: if $$n$$ small, need roughly symmetric data without strong skew/outliers; CLT helps when $$n$$ is large.

---

## Unit 8: Chi-Square Tests

### Expected counts (tables)

$$
\text{expected} = \frac{(\text{row total})(\text{column total})}{\text{table total}}
$$

### Test statistic

$$
\chi^2 = \sum \frac{(\text{observed}-\text{expected})^2}{\text{expected}}
$$

### Types

- **Goodness-of-fit**: one categorical variable; $$\text{df} = (\#\text{cells}) - 1$$ (minus estimated params if any).
- **Homogeneity**: same distribution across populations / treatment groups.
- **Independence / association**: one sample classified two ways.

### Conditions

- **Random** counts / random assignment as appropriate.
- **Large expected counts**: commonly **all expected $$\ge 5$$** (some contexts use a stricter rule).

---

## Unit 9: Inference for Slopes (Linear Regression)

### Model (thinking)

$$
y = \beta_0 + \beta_1 x + \varepsilon
$$

- **Slope test**: $$H_0: \beta_1 = 0$$ vs $$H_a: \beta_1 \ne 0$$ (or one-sided).

### $$t$$ statistic for slope

$$
t = \frac{b - \beta_1}{\text{SE}_b}, \quad \text{df} = n-2
$$

### Conditions (LINE / PLUS-style memory hook)

- **Linear** relationship (check scatterplot + residual plot).
- **Independent** observations (random / 10%).
- **Normal** residuals roughly (especially for small $$n$$).
- **Equal spread** of residuals across $$x$$.

---

## Fast “Which Procedure?” Map

| Question type | Usually |
|---------------|---------|
| One proportion | One-sample $$z$$ |
| Compare two proportions | Two-sample $$z$$ |
| One mean | One-sample $$t$$ |
| Matched pairs | Paired $$t$$ on differences |
| Two independent means | Two-sample $$t$$ |
| Distribution fits a model | $$\chi^2$$ goodness-of-fit |
| Same distribution across groups | $$\chi^2$$ homogeneity |
| Association of two categorical vars | $$\chi^2$$ independence |
| Linear relationship between $$x$$ and quantitative $$y$$ | $$t$$-test for slope $$\beta_1$$ |

---

## Most Common AP Statistics Mistakes

1. **Parameter vs statistic**: mixing $$\mu$$ and $$\bar{x}$$, or $$p$$ and $$\hat{p}$$, in conclusions.
2. **Correlation ≠ causation**; confounding in observational studies.
3. **Wrong SE**: pooled vs unpooled proportions; forgetting $$\sqrt{n}$$ in denominator.
4. **Hypotheses about $$\hat{p}$$ or $$\bar{x}$$** instead of $$p$$ or $$\mu$$.
5. **“Accept $$H_0$$”** language — say **fail to reject $$H_0$$**.
6. **$$P$$-value definition**: mis-stating as $$P(H_0 \text{ true})$$.
7. **Conditions skipped** or checked as “met” without linking to the study’s randomness and sample size.
8. **Chi-square**: wrong $$\text{df}$$ or wrong “expected count” formula.

---

## Exam-Day FRQ Mini-Checklist PLEASE CHANGE

1. Name the **procedure** (e.g., two-sample $$t$$ interval for $$\mu_1-\mu_2$$).
2. **Define parameters** in plain language with context.
3. Show **conditions** with numbers where needed (not just “$$n$$ large”).
4. Give **formula with numbers plugged** when asked to calculate.
5. **Conclusion**: evidence sentence referencing $$P$$-value or interval **in context**, and whether it generalizes / suggests causality based on study design.
