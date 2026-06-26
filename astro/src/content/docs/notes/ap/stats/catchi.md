---
title: "Unit 8: Inference for Categorical Data: Chi-Square"
sidebar:
  order: 8
---

Chi-square procedures handle categorical data with counts in categories. They compare **observed counts** to **expected counts** and ask whether the differences are larger than random variation would usually produce.

---

## The Chi-Square Distribution

The **chi-square distribution** is a family of right-skewed distributions indexed by degrees of freedom. Chi-square values are always nonnegative because they are built from squared differences.

As degrees of freedom increase, the distribution becomes less skewed. For a chi-square distribution,

$$
\mu = df
$$

and

$$
\sigma = \sqrt{2df}.
$$


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[axis lines=left,width=8cm,height=5cm,xmin=0,xmax=10,ymin=0,ymax=0.6,xlabel={$\chi^2$},ylabel={density},xtick=\empty,ytick=\empty]
\addplot[blue,very thick,samples=200,domain=0.01:10]{0.5*x^(2/2)*exp(-x/2)};
\addplot[red,fill=red!20,domain=6:10,samples=80]{0.5*x^(2/2)*exp(-x/2)} \closedcycle;
\node[red] at (axis cs:7.5,0.22) {right-tail $p$-value};
\end{axis}
\end{tikzpicture}
```


---

## The Chi-Square Statistic

All AP chi-square tests use the same general statistic:

$$
\chi^2 = \sum \frac{(O-E)^2}{E}.
$$

Here $$O$$ is an observed count and $$E$$ is an expected count. Large values of $$\chi^2$$ indicate that observed counts are far from expected counts.

Chi-square tests are right-tailed: the p-value is the probability of getting a chi-square statistic at least as large as the observed one.

---

## Conditions For Chi-Square Tests

:::conditions
1. Counts come from a random sample, random assignment, or randomized process.
2. Observations are independent. If sampling without replacement, check the 10% Condition.
3. Expected counts are large enough. AP Statistics commonly uses: all expected counts are at least 5.
:::

:::warning
Use counts, not proportions or percentages, in the chi-square statistic.
:::

---

## Goodness-Of-Fit Test

A **chi-square goodness-of-fit test** checks whether one categorical variable follows a claimed distribution.

Hypotheses:

- $$H_0$$: The population distribution matches the claimed proportions.
- $$H_a$$: The population distribution does not match the claimed proportions.

Expected counts are

$$
E_i = n p_i,
$$

where $$p_i$$ is the claimed proportion for category $$i$$.

Degrees of freedom:

$$
df = k-1,
$$

where $$k$$ is the number of categories.


| Category | Observed | Expected | Contribution |
| --- | ---: | ---: | ---: |
| A | $$O_1$$ | $$E_1$$ | $$\dfrac{(O_1-E_1)^2}{E_1}$$ |
| B | $$O_2$$ | $$E_2$$ | $$\dfrac{(O_2-E_2)^2}{E_2}$$ |
| C | $$O_3$$ | $$E_3$$ | $$\dfrac{(O_3-E_3)^2}{E_3}$$ |
| Total | | | $$\chi^2=\sum\dfrac{(O-E)^2}{E}$$ |


---

## Test Of Independence

A **chi-square test of independence** checks whether two categorical variables are associated in one population.

Hypotheses:

- $$H_0$$: The two variables are independent in the population.
- $$H_a$$: The two variables are associated in the population.

Expected count for each cell:

$$
E = \frac{(\text{row total})(\text{column total})}{\text{grand total}}.
$$

Degrees of freedom:

$$
df = (r-1)(c-1),
$$

where $$r$$ is the number of rows and $$c$$ is the number of columns.

---

## Test For Homogeneity

A **chi-square test for homogeneity** compares the distribution of one categorical variable across two or more populations or treatments.

Hypotheses:

- $$H_0$$: The category distribution is the same for all populations/treatments.
- $$H_a$$: At least one population/treatment has a different distribution.

The expected count formula is the same as for independence:

$$
E = \frac{(\text{row total})(\text{column total})}{\text{grand total}}.
$$

Degrees of freedom:

$$
df = (r-1)(c-1).
$$

---

## Independence Versus Homogeneity

The calculations for independence and homogeneity are identical, but the study design and conclusion are different.

| Test | Data source | Question |
| --- | --- | --- |
| Independence | One random sample, classify each individual by two variables | Are the variables associated? |
| Homogeneity | Separate random samples or treatments, classify one variable | Are the distributions the same across groups? |

If the problem has one sample and two categorical variables, think independence. If the problem has multiple samples or treatment groups and one categorical outcome, think homogeneity.

---

## Interpreting Contributions

Each cell's contribution is

$$
\frac{(O-E)^2}{E}.
$$

Cells with large contributions explain most of the chi-square statistic. After rejecting a null hypothesis, inspect which cells have observed counts much larger or smaller than expected to describe the direction of the association or difference.

---

## Calculator Notes

Common calculator tools:

- `χ²GOF-Test`: goodness-of-fit test.
- `χ²-Test`: test of independence or homogeneity using a matrix of observed counts.

For two-way tables, store observed counts in a matrix, run the test, and inspect the expected-count matrix to check conditions.

---

## Working Checklist

:::checklist
1. Identify the test: goodness-of-fit, independence, or homogeneity.
2. State hypotheses in context.
3. Calculate expected counts and check conditions.
4. Compute $$\chi^2$$ and degrees of freedom.
5. Find the right-tail p-value.
6. Conclude in context.
7. If significant, describe which categories/cells drive the result.
:::

---

## Key Equations

:::equations
| Idea | Equation |
| --- | --- |
| Chi-square statistic | $$\chi^2=\sum \frac{(O-E)^2}{E}$$ |
| GOF expected count | $$E_i=np_i$$ |
| Two-way expected count | $$E=\frac{(\text{row total})(\text{column total})}{\text{grand total}}$$ |
| GOF degrees of freedom | $$df=k-1$$ |
| Two-way table degrees of freedom | $$df=(r-1)(c-1)$$ |
:::

## Practice

### FRQ

::::frq{id=stats-catchi-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
