---
title: "Unit 7: Inference for Quantitative Data: Means"
sidebar:
  order: 7
---

# Unit 7: Inference for Quantitative Data: Means

---

This unit uses sample means to estimate and test claims about population means. Because population standard deviations are usually unknown in real studies, AP Statistics emphasizes the **t-distribution**.

---

## z Procedures Versus t Procedures

Use a z procedure for a population mean only when the population standard deviation $$\sigma$$ is known:

$$
z = \frac{\bar{x}-\mu_0}{\sigma/\sqrt{n}}.
$$

In most real problems, $$\sigma$$ is unknown, so use the sample standard deviation $$s$$ and a **t-distribution**:

$$
t = \frac{\bar{x}-\mu_0}{s/\sqrt{n}}.
$$

The t-distribution is symmetric and bell-shaped like the normal distribution, but it has heavier tails. As degrees of freedom increase, the t-distribution approaches the standard normal distribution.


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[axis lines=left,width=8cm,height=5cm,xmin=-4,xmax=4,ymin=0,ymax=0.42,xlabel={$t$},ylabel={density},xtick=\empty,ytick=\empty]
\addplot[blue,very thick,samples=200,domain=-4:4]{1/sqrt(2*pi)*exp(-x^2/2)};
\addplot[red,dashed,very thick,samples=200,domain=-4:4]{0.34/(1+x^2/5)^3};
\node[blue] at (axis cs:1.6,0.34) {normal}; \node[red] at (axis cs:2.6,0.12) {$t$ has heavier tails};
\end{axis}
\end{tikzpicture}
```


---

## One-Sample t-Interval For A Mean

Use a **one-sample t-interval** to estimate a population mean $$\mu$$:

$$
\bar{x} \pm t^*\frac{s}{\sqrt{n}}.
$$

Degrees of freedom:

$$
df = n-1.
$$

:::conditions
1. Random sample or random assignment.
2. Independence: if sampling without replacement, $$n \le 0.10N$$.
3. Normal/large sample condition: population is approximately normal, or sample size is large enough for the Central Limit Theorem. Check graphs for strong skew and outliers when $$n$$ is small.
:::

Interpretation: "We are ___% confident that the true population mean ___ is between ___ and ___."

---

## One-Sample t-Test For A Mean

Use a **one-sample t-test** for a claim about one population mean:

$$
H_0:\mu=\mu_0.
$$

The test statistic is

$$
t = \frac{\bar{x}-\mu_0}{s/\sqrt{n}},
$$

with

$$
df=n-1.
$$

The alternative may be $$\mu>\mu_0$$, $$\mu<\mu_0$$, or $$\mu\ne\mu_0$$. The p-value is found from the t-distribution with the correct degrees of freedom.

---

## Two-Sample t-Interval For Difference In Means

Use a **two-sample t-interval** to estimate $$\mu_1-\mu_2$$ for two independent groups:

$$
(\bar{x}_1-\bar{x}_2) \pm t^*
\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}.
$$

:::conditions
1. Random samples or random assignment.
2. The two samples/groups are independent.
3. Independence within each group: $$n_1 \le 0.10N_1$$ and $$n_2 \le 0.10N_2$$ if sampling without replacement.
4. Normal/large sample condition for each group.
:::

Degrees of freedom can be found with technology. If doing by hand, use the conservative choice:

$$
df = \min(n_1-1,\ n_2-1).
$$

---

## Two-Sample t-Test For Difference In Means

For independent samples, test

$$
H_0:\mu_1-\mu_2=0
$$

with

$$
t = \frac{(\bar{x}_1-\bar{x}_2)-0}
{\sqrt{s_1^2/n_1+s_2^2/n_2}}.
$$

Use technology for degrees of freedom unless told otherwise. AP problems often care more about setup, conditions, and conclusion than hand-calculating df.

:::warning
Do not pool variances unless a problem specifically says to use a pooled two-sample t procedure. Modern AP Statistics generally uses unpooled two-sample t procedures.
:::

---

## Matched Pairs t Procedures

A **matched pairs** design compares paired observations: before/after measurements on the same subject, twins, matched individuals, or two treatments applied to each unit in random order.

For matched pairs, convert the data to differences:

$$
d_i = \text{value}_{1,i} - \text{value}_{2,i}.
$$

Then run a one-sample t procedure on the differences.

Interval:

$$
\bar{d} \pm t^*\frac{s_d}{\sqrt{n}}.
$$

Test statistic:

$$
t = \frac{\bar{d}-\mu_{d,0}}{s_d/\sqrt{n}}.
$$

Degrees of freedom:

$$
df=n-1.
$$


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\node[draw, rounded corners] (person) at (0,2) {same subject or matched pair};
\node[draw, rounded corners] (before) at (-2,0.5) {before / treatment 1}; \node[draw, rounded corners] (after) at (2,0.5) {after / treatment 2};
\node[draw, rounded corners, fill=blue!8] (diff) at (0,-1) {difference};
\draw[->, thick] (person)--(before); \draw[->, thick] (person)--(after); \draw[->, thick] (before)--(diff); \draw[->, thick] (after)--(diff); \node at (0,-2) {analyze the differences, not two independent samples};
\end{tikzpicture}
```


---

## Choosing The Correct Mean Procedure

| Situation | Procedure |
| --- | --- |
| One quantitative sample, $$\sigma$$ unknown | One-sample t |
| One quantitative sample, $$\sigma$$ known | One-sample z |
| Two independent quantitative samples | Two-sample t |
| Paired quantitative measurements | Matched pairs t |

If the data are categorical counts or proportions, use Unit 6 or Unit 8 instead.

---

## Confidence Intervals And Tests Together

A two-sided hypothesis test at significance level $$\alpha$$ corresponds to a $$(1-\alpha)100\%$$ confidence interval. If the null value is outside the interval, reject $$H_0$$. If the null value is inside the interval, fail to reject $$H_0$$.

For one-sided tests, this direct interval comparison requires more care, but the logic is still connected: values far from the interval's plausible range are less compatible with the data.

---

## Calculator Notes

Common calculator tools:

- `TInterval`: one-sample t confidence interval.
- `T-Test`: one-sample t test.
- `2-SampTInt`: two-sample t confidence interval.
- `2-SampTTest`: two-sample t test.
- For matched pairs, enter the list of differences and use `TInterval` or `T-Test`.

Calculator output should be translated into statistical language: parameter, conditions, statistic, interval or p-value, and conclusion in context.

---

## Working Checklist

:::checklist
1. Identify the parameter: $$\mu$$, $$\mu_1-\mu_2$$, or $$\mu_d$$.
2. Decide whether the samples are independent or paired.
3. Check random, independence, and normal/large sample conditions.
4. Use t unless population $$\sigma$$ is known.
5. Compute the interval or test statistic/p-value.
6. Conclude in context, including units.
:::

---

## Key Equations

:::equations
| Idea | Equation |
| --- | --- |
| One-sample t interval | $$\bar{x}\pm t^*s/\sqrt{n}$$ |
| One-sample t test | $$t=(\bar{x}-\mu_0)/(s/\sqrt{n})$$ |
| Two-sample t interval | $$(\bar{x}_1-\bar{x}_2)\pm t^*\sqrt{s_1^2/n_1+s_2^2/n_2}$$ |
| Two-sample t test | $$t=\frac{(\bar{x}_1-\bar{x}_2)-0}{\sqrt{s_1^2/n_1+s_2^2/n_2}}$$ |
| Matched pairs interval | $$\bar{d}\pm t^*s_d/\sqrt{n}$$ |
| Matched pairs test | $$t=(\bar{d}-\mu_{d,0})/(s_d/\sqrt{n})$$ |
:::

## Practice

### FRQ

::::frq{id=stats-quantmeans-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
