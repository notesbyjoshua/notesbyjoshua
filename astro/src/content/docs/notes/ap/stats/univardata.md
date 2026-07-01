---
title: "Unit 1: Exploring Univariate Data"
sidebar:
  order: 1
---

## Types of Variables

### Categorical (qualitative) variables

A **categorical variable** sorts each case into a group or label. The values are usually words or codes (for example: blood type, favorite color, zip code used only as a label). With categorical data, we typically report counts or percents in each category. Averages usually do not make sense unless the categories are coded as numbers in a meaningful way—which is rare in AP settings.

### Quantitative variables

A **quantitative variable** takes numerical values where arithmetic is meaningful: we can talk about differences, totals, and often averages. Quantitative variables are often split into:

- **Discrete** variables: countable “jumps” between values (number of siblings, number of text messages in a day). Usually this comes in the forms of integers, but is not limited to them.
- **Continuous** variables: in principle could take any value in an interval (height, time, temperature), though what we record is usually still rounded or binned (partitioned based on value).

---

## Types of Descriptive Methods

**Descriptive statistics** means organizing and summarizing data we actually have, without yet jumping to conclusions about a larger world. For univariate data, we use **tabular** summaries (tables), **graphical** summaries (plots), and **numerical** summaries (means, spreads, and positions).

---

### Tabular methods

Tables are the natural home for **frequency**: how often each value or category appears.

- Let $$n$$ be the number of observations (the sample size, or size of the dataset).
- The **frequency** of a value is how many times it occurs; it is often denoted $$f$$.

The **relative frequency** compares a category’s frequency to the whole dataset:

$$
rf = \frac{f}{n}
$$

Relative frequencies are especially useful when two datasets have different sizes, since percents put them on a common scale.

The **cumulative frequency** gives the count of observations less than or equal to a chosen value (or upper endpoint of a class). It is a running total as you move through ordered categories or ordered bins.

A **frequency distribution** lists possible values (or classes) of the variable together with their frequencies (and often relative or cumulative frequencies). Building that table is often the first step before drawing a histogram or cumulative relative frequency graph.

| Value or class | Frequency | Relative frequency | Cumulative frequency |
| --- | --- | --- | --- |
| Category/bin 1 | $$f_1$$ | $$f_1/n$$ | $$f_1$$ |
| Category/bin 2 | $$f_2$$ | $$f_2/n$$ | $$f_1+f_2$$ |
| Category/bin 3 | $$f_3$$ | $$f_3/n$$ | $$f_1+f_2+f_3$$ |


| Display | Best use |
| --- | --- |
| Frequency table | exact counts by category or interval |
| Dotplot | small quantitative data sets |
| Histogram | distribution shape for many quantitative values |
| Stemplot | preserves individual values while showing shape |
| Boxplot | quick comparison of center, spread, and outliers |


---

## Graphical Methods (Qualitative)

For **categorical** data, we want displays that compare category sizes at a glance.

### Bar charts

In a **bar chart**, each category gets a bar; the **length or height** of the bar shows **frequency** or **count** (sometimes relative frequency or percent). Categories on an axis are usually separated with a little space between bars, which signals that the order of categories is not necessarily numeric.

You can use a horizontal bar chart by swapping the roles of the axes—helpful when category names are long.

### Pie charts

A **pie chart** represents the whole as a circle and divides it into slices whose central angles (or areas) match relative frequencies. For example, a category with relative frequency 0.36 gets about 36% of the circle. Pie charts work best with a small number of categories and when you want to emphasize parts of a whole. They become hard to read when there are many thin slices or when differences are subtle.

---

## Graphical Methods (Quantitative)

For **quantitative** data, we care about **center**, **spread**, **shape**, and unusual values.

:::strategy{title="Describing distributions"}
Use CUSS in context: **Center**, **Unusual features**, **Shape**, and **Spread**. For comparisons, do this for both groups and name the direction of the difference.
:::

### Dotplots

A **dotplot** stacks a dot above a number line for each occurrence of a value (or stacks dots in equal-width bins if values are rounded). Dotplots shine with small-to-moderate datasets: you see every value, clusters, gaps, and outliers without losing detail.

### Stemplots (stem-and-leaf displays)

A **stemplot** splits each number into a **stem** (leading digit or digits) and a **leaf** (usually the last digit). Stems are listed in order; leaves are often ordered on each stem. The split between stem and leaf is a choice: you might split tens vs. ones, or group stems (e.g., 2\*, 2•) when a plot is too sparse or too crowded. Stemplots preserve the actual values (unlike a histogram, where raw values disappear into bins) and work well for small datasets.

### Histograms

A **histogram** groups quantitative data into intervals (bins), then draws bars whose heights show frequency or relative frequency (or density, in more advanced courses). Bars touch to show that the horizontal axis is a continuous scale (even though data are binned). The shape of a histogram (symmetric, skewed, unimodal, bimodal) can tell you a lot about the data (talked about later).


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\pgfplotsset{hs/.style={ybar,width=4cm,height=3.2cm,axis lines=left,xtick=\empty,ytick=\empty}}
\begin{axis}[hs,title={symmetric}] \addplot[fill=blue!30] coordinates{(1,1)(2,3)(3,5)(4,3)(5,1)}; \end{axis}
\begin{axis}[hs,at={(4.6cm,0)},title={right skew}] \addplot[fill=red!30] coordinates{(1,5)(2,3)(3,2)(4,1)(5,0.5)}; \end{axis}
\end{tikzpicture}
```


### Cumulative relative frequency graphs (ogives)

An **ogive** plots **cumulative relative frequency** (from 0 to 1, or 0% to 100%) against values or upper class boundaries. Place a point above each boundary at the cumulative percent up to that boundary, then connect points with line segments. The curve rises; its height at a value tells you what fraction of data falls at or below that point.

### Boxplots

A **boxplot** (box-and-whisker plot) summarizes a quantitative variable using quartiles and the median. Draw a box from the first quartile $$Q_1$$ to the **third quartile** $$Q_3$$; draw a line inside the box at the **median**. The **interquartile range** is $$IQR = Q_3 - Q_1$$. “Whiskers” typically extend to the most extreme values within **1.5 × IQR** of the quartiles; points beyond that range are plotted individually as outliers. Boxplots are ideal for comparing several groups on the same scale.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[->] (0,0)--(8,0) node[right] {value};
\draw[thick] (1.0,0.35)--(2.5,0.35); \draw[thick] (5.5,0.35)--(7.0,0.35);
\draw[thick, fill=blue!10] (2.5,0) rectangle (5.5,0.7); \draw[very thick] (4.0,0)--(4.0,0.7);
\foreach \x/\lab in {1/min,2.5/Q1,4/median,5.5/Q3,7/max}{\draw (\x,-0.1)--(\x,0.8); \node[below] at (\x,-0.1) {\lab};}
\end{tikzpicture}
```


---

## Examining Graphs

Whenever you look at a univariate graph, train yourself to describe **center**, **spread**, and **shape**, as well as irregularities in the plot (like **clusters**, **gaps**, and **outliers**) When given a question to compare two plots, always start with these five observations and go from there.

### Center

The **center** is a typical or middle value—where much of the data sits. For many distributions, the **mean** and **median** lie near the visual center; for **skewed** data they can separate, which is an important aspect of the plot.

### Spread

**Spread** describes how far values wander from center. Informally, look at whether points are tightly packed or widely scattered. Later we attach numbers to spread: **range**, **interquartile range**, **variance**, and **standard deviation**.

### Shape

**Shape** tells us where data pile up and whether the distribution is **symmetric** or **skewed**.

- **Symmetric**: the left and right sides are roughly mirror images (like a bell curve or a uniform histogram).
- **Skewed**: one tail stretches farther than the other. If the right tail is longer (extreme large values pull the tail), the distribution is **right-skewed** (positively skewed). If the left tail is longer, it is **left-skewed** (negatively skewed).

Also note that **modality** (one clear peak (**unimodal**), two peaks (**bimodal**), and so on) sometimes suggests there are different subgroups mixed in one variable.

### Clusters and gaps

**Clusters** are groups of values separated from other groups; they can suggest subpopulations or different regimes (for example, two manufacturing lines). **Gaps** are intervals with no (or very few) observations where you might have expected some; they invite questions about sampling, measurement, or real structure.

### Outliers

An **outlier** is a value that stands apart from the overall pattern. On a boxplot, a common **numerical rule** flags outliers relative to the quartiles:

$$
\text{Outlier} > Q_3 + 1.5 \cdot IQR \quad \text{or} \quad \text{Outlier} < Q_1 - 1.5 \cdot IQR
$$

Always ask whether an outlier is a data entry error, a special case worth investigating, or simply natural variability in a heavy-tailed variable.

:::exam{topic="Outliers"}
If a problem asks whether a value is an outlier, show the fences and compare the value to them. If it asks whether to remove an outlier, do not remove it unless there is evidence of error or a clear reason in context.
:::

---

## Summarizing Distributions: Population and Sample

We distinguish **population** and **sample** because notation and formulas track that distinction.

- The **population** is the entire group of individuals or instances we want to understand.
- A **sample** is the part of the population we actually measure.

We compute statistics from a sample to estimate unknown population quantities. Greek letters (for example $$\mu$$, $$\sigma$$) often denote **population** parameters; Roman letters with bars or hats (for example $$\bar{x}$$, $$s$$, $$\hat{p}$$) denote **sample** statistics.

---

## Numerical Methods for Continuous Variables

Numerical summaries compress a distribution into a few interpretable numbers. Always pair a measure of center with a measure of spread.

### Measures of Central Tendency

**Mean (average)** balances all values, but it is sensitive to outliers and skew.

For a population of size $$N$$ with values $$x_1,\ldots,X_N$$:

$$
\mu = \frac{\sum_{i=1}^{N} x_i}{N}
$$

For a sample of size $$n$$:

$$
\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}
$$

**Median** is the middle value when data are ordered: half the values lie at or below it and half at or above it.

- If there are **$$n$$** ordered observations and **$$n$$** is **odd**, the median is the value at position $$\frac{n+1}{2}$$.
- If **$$n$$** is **even**, the median is the **average** of the values at positions $$\frac{n}{2}$$ and $$\frac{n}{2}+1$$.

The median is **resistant** (robust) to outliers, meaning extreme values barely move it, which makes it a measure of central tendency for skewed data or data with outliers.

---

### Measures of variation

**Range** is the simplest spread measure: largest minus smallest. It uses only **two** numbers and is **very sensitive** to outliers.

$$
\text{Range} = \max - \min
$$

**Interquartile range (IQR)** is the width of the **middle half** of the data:

$$
IQR = Q_3 - Q_1
$$

It is resistant to extremes and matches the width of the box in a boxplot.

**Standard deviation** measures typical distance from the mean. For a population:

$$
\sigma = \sqrt{\frac{\sum_{i=1}^{N} (x_i - \mu)^2}{N}}
$$

For a sample, we divide by **$$n - 1$$** (Bessel’s correction) so that $$s^2$$ is an unbiased estimator of population variance in the usual setup:

$$
s = \sqrt{\frac{\sum_{i=1}^{n} (X_i - \bar{x})^2}{n-1}}
$$

Larger standard deviation means **more** spread and zero standard deviation means **no** spread (all values equal).

---

## Measures of position

**Percentiles** generalize the median. The **$$k$$**th percentile is a value such that about **$$k$$%** of observations fall at or below it. A common position rule for the location of the $$k$$th percentile in ordered data of size $$n$$ is:

$$
l = \frac{(n+1)k}{100}
$$

If $$l$$ is not an integer, interpolate between adjacent ordered values. Calculator or software conventions may differ slightly, so be consistent and explain your method when needed.

**Quartiles** are special percentiles:

- $$Q_1$$: **25**th percentile  
- $$Q_2$$: **50**th percentile (the median)  
- $$Q_3$$: **75**th percentile  

**Standardized scores (z-scores)** compare a value to the distribution’s center and spread:

$$
z = \frac{x - \mu}{\sigma}
$$

With a **sample**, use $$\bar{x}$$ and $$s$$ in the same pattern. A z-score answers: “How many standard deviations above or below the mean is this value?” Values with a large $$z$$-score are unusual relative to that distribution. Note that for future chapters, z-score will likely apply to a [normal/Gaussian distribution](/notes/ap/stats/samplingdistr/))

---

## Effects of Changing Units on Summary Measures

Linear changes to data produce predictable changes to summaries. Suppose we transform each observation $$x_i to y_i$$.

Adding a constant $$a$$ (for example, converting Celsius to a shifted scale, or adding a bonus point to every score): $$y_i = x_i + a$$.

- Mean, median and quartiles shift by $$+a$$.
- Spread measures that depend only on distances between values (range, IQR, standard deviation) are unchanged.

Multiplying by a constant $$b$$ (for example, feet to inches): $$y_i = b \times x_i$$.

- Mean, median, and quartiles multiply by $$b$$.
- Range, IQR, and standard deviation multiply by $$\lvert b \rvert$$


| Summary Measure | $$y_i = x_i + a$$ | $$y_i = b \times x_i$$ |
|----------------|-------------------|------------------|
| Mean | $$+a$$ | $$\times b$$ |
| Median | $$+a$$ | $$\times b$$ |
| Range | unchanged | $$\times \lvert b \rvert$$ |
| Standard Deviation | unchanged | $$\times \lvert b \rvert$$ |
| Quartiles | $$+a$$ | $$\times b$$ |
| Interquartile Range | unchanged | $$\times \lvert b \rvert$$ |

These rules are worth memorizing: they explain why z-scores are unchanged by shifts and rescaling when you use the matching mean and standard deviation of the transformed data, and they explain many standardization tricks in later units.

## Practice

### FRQ

::::frq{id=stats-univardata-1}
1. A teacher records the number of minutes that 16 students spent studying for a quiz:

   $$12,\ 18,\ 20,\ 22,\ 25,\ 25,\ 28,\ 30,\ 34,\ 36,\ 39,\ 41,\ 45,\ 50,\ 61,\ 68.$$

   $$(A)$$ Describe the distribution of study times.

   $$(B)$$ Find the five-number summary and determine whether there are any outliers using the $$1.5\text{ IQR}$$ rule.

   $$(C)$$ Which is the better measure of center for this distribution, the mean or the median? Explain.

:::solution
$$(A)$$ The distribution is unimodal and skewed right because most study times are between about 20 and 45 minutes, with a longer tail toward larger times. The center is around 32 minutes, and the spread is from 12 to 68 minutes. The value 68 minutes is high compared with most of the data.

$$(B)$$ With 16 values,

$$
\text{median}=\frac{30+34}{2}=32.
$$

The lower half is $$12,18,20,22,25,25,28,30$$, so

$$
Q_1=\frac{22+25}{2}=23.5.
$$

The upper half is $$34,36,39,41,45,50,61,68$$, so

$$
Q_3=\frac{41+45}{2}=43.
$$

Thus,

$$
\text{IQR}=43-23.5=19.5.
$$

The outlier fences are

$$
23.5-1.5(19.5)=-5.75
$$

and

$$
43+1.5(19.5)=72.25.
$$

No observations are below $$-5.75$$ or above $$72.25$$, so there are no outliers by the $$1.5\text{ IQR}$$ rule.

$$(C)$$ The median is better because the distribution is skewed right. The mean would be pulled upward by the larger study times, while the median is more resistant.
:::
::::
