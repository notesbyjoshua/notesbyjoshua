---
title: "Unit 6: Inference for Categorical Data: Proportions"
sidebar:
  order: 6
---

This unit uses sample proportions to estimate and test claims about population proportions. The main statistic is $$\hat{p}$$ for one population, or $$\hat{p}_1-\hat{p}_2$$ for two populations.

---

## Estimation And Hypothesis Testing

**Statistical inference** uses sample data to make conclusions about a population parameter. For proportions, the parameter is usually:

- $$p$$: one population proportion.
- $$p_1-p_2$$: difference between two population proportions.

A **confidence interval** estimates a plausible range of values for a parameter. A **hypothesis test** evaluates whether sample data provide convincing evidence against a null hypothesis.

---

## Confidence Intervals

A confidence interval has the form

$$
\text{statistic} \pm \text{critical value}\cdot \text{standard error}.
$$

The **confidence level** describes the long-run capture rate of the method. A 95% confidence interval does not mean there is a 95% probability that the fixed parameter is in this particular interval. It means that if we repeatedly sampled and built intervals the same way, about 95% of those intervals would contain the true parameter.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[->] (0,0)--(8,0) node[right] {parameter scale}; \draw[very thick, red] (4,-0.35)--(4,3.2) node[above] {true parameter};
\foreach \y/\a/\b in {0.4/2.7/4.5,0.8/3.2/5.1,1.2/1.8/3.6,1.6/3.8/5.7,2.0/2.5/4.3,2.4/4.2/6.0,2.8/3.0/4.8}{\draw[blue, thick] (\a,\y)--(\b,\y);} \node at (4,-0.9) {most confidence intervals capture the true value};
\end{tikzpicture}
```


---

## One-Proportion z-Interval

Use a **one-proportion z-interval** to estimate one population proportion $$p$$:

$$
\hat{p} \pm z^*\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}.
$$

:::conditions
1. Random sample or random assignment.
2. Independence: if sampling without replacement, $$n \le 0.10N$$.
3. Large counts: $$n\hat{p} \ge 10$$ and $$n(1-\hat{p}) \ge 10$$.
:::

Common critical values:

| Confidence level | $$z^*$$ |
| --- | --- |
| 90% | 1.645 |
| 95% | 1.960 |
| 99% | 2.576 |

---

## Margin Of Error

The **margin of error** for a one-proportion interval is

$$
ME = z^*\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}.
$$

For planning sample size, use

$$
n = \frac{(z^*)^2p^*(1-p^*)}{ME^2},
$$

where $$p^*$$ is a planning estimate. If no estimate is given, use $$p^*=0.5$$ because it gives the most conservative, largest required sample size.

Always round required sample size up.

---

## Hypothesis Tests

A hypothesis test begins with:

- **Null hypothesis** $$H_0$$: the default claim, usually "no difference" or "equals a stated value."
- **Alternative hypothesis** $$H_a$$: the claim we seek evidence for.

For one proportion:

$$
H_0: p=p_0.
$$

The alternative may be

$$
H_a:p>p_0,\qquad H_a:p<p_0,\qquad \text{or}\qquad H_a:p\ne p_0.
$$

The **p-value** is the probability, assuming $$H_0$$ is true, of getting a test statistic as extreme as or more extreme than the observed result in the direction of $$H_a$$.

Decision rule:

- If p-value $$< \alpha$$, reject $$H_0$$.
- If p-value $$\ge \alpha$$, fail to reject $$H_0$$.

:::warning
Never say "accept $$H_0$$"; the data may simply not be strong enough to reject it.
:::

---

## One-Proportion z-Test

Use a **one-proportion z-test** for a claim about one population proportion:

$$
z = \frac{\hat{p}-p_0}{\sqrt{p_0(1-p_0)/n}}.
$$

Use $$p_0$$ in the standard error because the test assumes the null hypothesis is true.

:::conditions
1. Random sample or random assignment.
2. Independence: if sampling without replacement, $$n \le 0.10N$$.
3. Large counts using the null value: $$np_0 \ge 10$$ and $$n(1-p_0) \ge 10$$.
:::


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[axis lines=left,width=8cm,height=5cm,xmin=-4,xmax=4,ymin=0,ymax=0.45,xlabel={test statistic},ylabel={density},xtick=\empty,ytick=\empty]
\addplot[blue,very thick,samples=200,domain=-4:4]{1/sqrt(2*pi)*exp(-x^2/2)};
\addplot[red,fill=red!20,samples=80,domain=1.4:4]{1/sqrt(2*pi)*exp(-x^2/2)} \closedcycle;
\node[red] at (axis cs:2.4,0.18) {$p$-value};
\end{axis}
\end{tikzpicture}
```


---

## Two-Proportion z-Interval

Use a **two-proportion z-interval** to estimate $$p_1-p_2$$:

$$
(\hat{p}_1-\hat{p}_2) \pm z^*
\sqrt{\frac{\hat{p}_1(1-\hat{p}_1)}{n_1}+\frac{\hat{p}_2(1-\hat{p}_2)}{n_2}}.
$$

:::conditions
1. Two random samples or random assignment to two groups.
2. Independence within and between groups.
3. If sampling without replacement, $$n_1 \le 0.10N_1$$ and $$n_2 \le 0.10N_2$$.
4. Large counts in both groups: successes and failures are each at least 10.
:::

Interpret the interval in context: "We are ___% confident that the true difference in population proportions $$p_1-p_2$$ is between ___ and ___."

---

## Two-Proportion z-Test

For a test of

$$
H_0:p_1-p_2=0,
$$

we pool the sample proportions because the null says the two population proportions are equal:

$$
\hat{p}_c = \frac{x_1+x_2}{n_1+n_2}.
$$

The test statistic is

$$
z = \frac{(\hat{p}_1-\hat{p}_2)-0}
{\sqrt{\hat{p}_c(1-\hat{p}_c)\left(\frac{1}{n_1}+\frac{1}{n_2}\right)}}.
$$

Use the pooled proportion only for the hypothesis test, not for the confidence interval.

---

## Errors And Power

A **Type I error** occurs when we reject a true null hypothesis. Its probability is $$\alpha$$, the significance level.

A **Type II error** occurs when we fail to reject a false null hypothesis. Its probability is $$\beta$$.

**Power** is the probability of correctly rejecting a false null hypothesis:

$$
\text{Power} = 1-\beta.
$$

Power increases when:

- The true parameter is farther from the null value.
- Sample size increases.
- Significance level $$\alpha$$ increases.
- Variability decreases.

---

## Calculator Notes

Common calculator tools:

- `1-PropZInt`: one-proportion confidence interval.
- `1-PropZTest`: one-proportion hypothesis test.
- `2-PropZInt`: two-proportion confidence interval.
- `2-PropZTest`: two-proportion hypothesis test.

Calculator output does not replace communication. You still need hypotheses, conditions, p-value or interval, and a conclusion in context.

---

## Working Checklist

:::checklist
1. Identify the parameter: $$p$$ or $$p_1-p_2$$.
2. Choose interval or test.
3. Check random, independence, and large-count conditions.
4. Use the correct standard error: null value for tests, sample value for intervals.
5. Compute the interval or p-value.
6. Write a conclusion in context.
:::

---

## Key Equations

:::equations
| Idea | Equation |
| --- | --- |
| One-proportion interval | $$\hat{p}\pm z^*\sqrt{\hat{p}(1-\hat{p})/n}$$ |
| One-proportion test | $$z=(\hat{p}-p_0)/\sqrt{p_0(1-p_0)/n}$$ |
| Two-proportion interval | $$(\hat{p}_1-\hat{p}_2)\pm z^*\sqrt{\frac{\hat{p}_1(1-\hat{p}_1)}{n_1}+\frac{\hat{p}_2(1-\hat{p}_2)}{n_2}}$$ |
| Pooled proportion | $$\hat{p}_c=(x_1+x_2)/(n_1+n_2)$$ |
| Two-proportion test | $$z=\frac{(\hat{p}_1-\hat{p}_2)}{\sqrt{\hat{p}_c(1-\hat{p}_c)(1/n_1+1/n_2)}}$$ |
:::

## Practice

### FRQ

::::frq{id=stats-catprop-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
