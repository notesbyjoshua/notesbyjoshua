---
title: "Unit 8: Inference for Categorical Data: Chi-Square"
sidebar:
  order: 80
  hidden: true
---

:::note
This is a legacy page from the older AP Statistics sequence. In the Fall 2026 AP Statistics CED, chi-square tests for homogeneity and independence are part of [Unit 3: Inference for Categorical Data: Proportions](/notes/ap/stats/infprop/).
:::

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

:::key{name="Observed versus expected"}
Observed counts come from the data. Expected counts come from the null hypothesis. The chi-square statistic measures how far the data are from what the null model predicts.
:::

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

:::strategy{title="Choosing the chi-square procedure"}
- Use **goodness-of-fit** for one categorical variable and one claimed distribution.
- Use **independence** for one sample with two categorical variables.
- Use **homogeneity** for separate groups or samples compared on one categorical variable.
:::

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
1. A random sample of 160 students is classified by grade level and whether they participate in at least one school club.

   | Grade | Participates | Does not participate | Total |
   | --- | ---: | ---: | ---: |
   | 9th | 28 | 12 | 40 |
   | 10th | 24 | 16 | 40 |
   | 11th | 18 | 22 | 40 |
   | 12th | 10 | 30 | 40 |
   | Total | 80 | 80 | 160 |

   $$(A)$$ State the hypotheses for an appropriate chi-square test.

   $$(B)$$ Find the expected count for 12th-grade students who participate in at least one club.

   $$(C)$$ The chi-square statistic is $$\chi^2=18.4$$. Identify the degrees of freedom and write the conclusion if the p-value is less than $$0.01$$.

:::solution
$$(A)$$ This is a chi-square test of independence.

$$H_0:$$ Grade level and club participation are independent among students at the school.

$$H_a:$$ Grade level and club participation are associated among students at the school.

$$(B)$$ The expected count is

$$
E=\frac{(\text{12th-grade total})(\text{participates total})}{\text{grand total}}
=\frac{40(80)}{160}=20.
$$

$$(C)$$ The degrees of freedom are

$$
df=(4-1)(2-1)=3.
$$

Since the p-value is less than $$0.01$$, it is also less than common significance levels such as $$0.05$$. Reject $$H_0$$. There is convincing evidence that grade level and club participation are associated among students at the school.
:::
::::
