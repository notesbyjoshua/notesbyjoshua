---
title: "Unit 5: Sampling Distributions"
sidebar:
  order: 5
---

This unit explains why statistics from random samples vary and how that variation becomes predictable. A **sampling distribution** is the distribution of a statistic over many possible random samples of the same size from the same population. It is the bridge between descriptive statistics and inference.

---

## Parameters, Statistics, And Sampling Variability

A **parameter** is a number that describes a population, such as $$p$$, $$\mu$$, or $$\sigma$$. A **statistic** is a number computed from a sample, such as $$\hat{p}$$, $$\bar{x}$$, or $$s$$.

Samples vary, so statistics vary. This is called **sampling variability**. A good statistic is usually:

- **Unbiased**: its sampling distribution is centered at the true parameter.
- **Low variability**: its values do not jump wildly from sample to sample.

Larger random samples usually reduce variability, but they do not fix bias caused by bad sampling design.

<img class="note-img note-img--w480" src="/assets/APs/AP%20Stats/samplingdistr/sampling-distribution.png" alt="Sampling distribution placeholder" loading="lazy" decoding="async" />

---

## Shape, Center, And Spread

When describing a sampling distribution, use the same language as distributions in Unit 1:

- **Shape**: normal, skewed, approximately symmetric, etc.
- **Center**: mean of the statistic.
- **Spread**: standard deviation of the statistic, often called the **standard error**.

For inference, normal or approximately normal sampling distributions are especially useful because they let us calculate probabilities, confidence intervals, and p-values.

---

## Sampling Distribution Of A Sample Proportion

For a categorical variable with true population proportion $$p$$, the sample proportion is

$$
\hat{p} = \frac{x}{n},
$$

where $$x$$ is the number of successes in a sample of size $$n$$.

If observations are independent, then

$$
\mu_{\hat{p}} = p
$$

and

$$
\sigma_{\hat{p}} = \sqrt{\frac{p(1-p)}{n}}.
$$

The sampling distribution of $$\hat{p}$$ is approximately normal when the **Large Counts Condition** is met:

$$
np \ge 10 \quad \text{and} \quad n(1-p) \ge 10.
$$

For samples without replacement, check the **10% Condition**:

$$
n \le 0.10N.
$$

This makes observations close enough to independent when sampling from a finite population.

---

## Sampling Distribution Of A Sample Mean

For a quantitative variable with population mean $$\mu$$ and standard deviation $$\sigma$$, the sample mean is $$\bar{x}$$.

If observations are independent, then

$$
\mu_{\bar{x}} = \mu
$$

and

$$
\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}.
$$

The quantity $$\sigma_{\bar{x}}$$ is the **standard deviation of the sample mean**. When $$\sigma$$ is unknown, later inference units estimate it with

$$
SE_{\bar{x}} = \frac{s}{\sqrt{n}}.
$$

---

## Central Limit Theorem

The **Central Limit Theorem** says that when $$n$$ is large, the sampling distribution of $$\bar{x}$$ is approximately normal, even if the population distribution is not normal, as long as observations are independent and the population is not extremely pathological.

Rule of thumb:

$$
n \ge 30
$$

is often enough for mild or moderate skew. If the population is strongly skewed or has extreme outliers, a larger sample may be needed.

If the population itself is normal, then the sampling distribution of $$\bar{x}$$ is normal for any sample size $$n$$.

<img class="note-img note-img--w480" src="/assets/APs/AP%20Stats/samplingdistr/central-limit-theorem.png" alt="Central Limit Theorem placeholder" loading="lazy" decoding="async" />

---

## Normal Distributions

A **normal distribution** is a symmetric, bell-shaped distribution described by its mean $$\mu$$ and standard deviation $$\sigma$$:

$$
X \sim N(\mu, \sigma).
$$

To standardize a value,

$$
z = \frac{x - \mu}{\sigma}.
$$

For sample means,

$$
z = \frac{\bar{x} - \mu}{\sigma/\sqrt{n}}.
$$

For sample proportions,

$$
z = \frac{\hat{p} - p}{\sqrt{p(1-p)/n}}.
$$

### Empirical Rule

For a normal distribution:

- About $$68\%$$ of observations are within $$1$$ standard deviation of the mean.
- About $$95\%$$ are within $$2$$ standard deviations.
- About $$99.7\%$$ are within $$3$$ standard deviations.

<img class="note-img note-img--w480" src="/assets/APs/AP%20Stats/samplingdistr/normal-curve.png" alt="Normal curve placeholder" loading="lazy" decoding="async" />

---

## Combining Independent Random Variables

For independent random variables $$X$$ and $$Y$$:

$$
\mu_{X+Y} = \mu_X + \mu_Y
$$

$$
\mu_{X-Y} = \mu_X - \mu_Y
$$

Variances add for both sums and differences:

$$
\sigma^2_{X+Y} = \sigma_X^2 + \sigma_Y^2
$$

$$
\sigma^2_{X-Y} = \sigma_X^2 + \sigma_Y^2.
$$

Standard deviations do not add directly. Add variances first, then take the square root.

For linear transformations,

$$
\mu_{a+bX} = a + b\mu_X
$$

and

$$
\sigma_{a+bX} = \lvert b\rvert\sigma_X.
$$

---

## Binomial And Geometric Distributions

These probability models connect Unit 4 probability to sampling distributions and inference.

### Binomial Distribution

A **binomial distribution** counts successes in a fixed number of independent trials. Conditions:

1. Binary outcomes: success or failure.
2. Independent trials.
3. Fixed number of trials $$n$$.
4. Same probability of success $$p$$ on every trial.

If $$X \sim \operatorname{Binomial}(n,p)$$, then

$$
P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}.
$$

The mean and standard deviation are

$$
\mu_X = np, \qquad \sigma_X = \sqrt{np(1-p)}.
$$

### Geometric Distribution

A **geometric distribution** counts the number of trials until the first success. Conditions are the same as binomial except there is no fixed number of trials.

If $$X \sim \operatorname{Geometric}(p)$$, then

$$
P(X = k) = (1-p)^{k-1}p.
$$

The mean is

$$
\mu_X = \frac{1}{p}.
$$

---

## Working Checklist

1. Identify the statistic: $$\hat{p}$$, $$\bar{x}$$, a difference, or another statistic.
2. State the parameter the statistic estimates.
3. Check randomness and independence.
4. Check normality conditions if using a normal approximation.
5. Use the correct mean and standard deviation/standard error.
6. Standardize with a z-score when needed.

---

## Key Equations

| Idea | Equation |
| --- | --- |
| Sample proportion | $$\hat{p} = x/n$$ |
| Mean of $$\hat{p}$$ | $$\mu_{\hat{p}} = p$$ |
| SD of $$\hat{p}$$ | $$\sigma_{\hat{p}} = \sqrt{p(1-p)/n}$$ |
| Mean of $$\bar{x}$$ | $$\mu_{\bar{x}} = \mu$$ |
| SD of $$\bar{x}$$ | $$\sigma_{\bar{x}} = \sigma/\sqrt{n}$$ |
| z-score | $$z = (x-\mu)/\sigma$$ |
| Binomial probability | $$P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$$ |
| Geometric probability | $$P(X=k)=(1-p)^{k-1}p$$ |

## Practice

### FRQ

::::frq{id=stats-samplingdistr-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
