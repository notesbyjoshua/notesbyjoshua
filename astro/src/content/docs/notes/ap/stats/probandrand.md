---
title: "Unit 4: Probability, Random Variables, and Probability Distributions"
sidebar:
  order: 4
---

**Probability** is a number between 0 and 1 that quantifies how likely an **event** is. In AP Statistics you usually interpret it as **long-run relative frequency**: repeat a random process many times, and the fraction of times the event occurs stabilizes near its probability. The rules below describe how to combine and update probabilities in a **sample space** of possible outcomes.

---

## Sample space and experiments

- A **random phenomenon** or **probability experiment** is a process with outcomes that vary from trial to trial in a way that cannot be predicted with certainty in advance, but whose possible outcomes are known.
- The sample space, denoted $$S$$, is the set of all possible outcomes of that experiment. An event is any subset of the sample space (a collection of one or more outcomes). The letter $$S$$ is standard notation; individual outcomes are often written as simple labels or ordered pairs when the experiment has multiple stages.
- A **tree diagram** lists stages of an experiment as branches. Multiply along a path to get the probability of that path when stages are suitably independent or conditional probabilities are marked on branches; add paths that represent the same event. Tree diagrams keep ordered outcomes visible and help avoid double-counting when the experiment is multistep.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\node (s) at (0,0) {start}; \node (a) at (2,1) {$A$}; \node (b) at (2,-1) {$B$}; \node (ag) at (4,1.6) {$A\cap C$}; \node (an) at (4,0.4) {$A\cap C^c$}; \node (bg) at (4,-0.4) {$B\cap C$}; \node (bn) at (4,-1.6) {$B\cap C^c$};
\draw[->] (s)--(a) node[midway,above] {$P(A)$}; \draw[->] (s)--(b) node[midway,below] {$P(B)$};
\draw[->] (a)--(ag) node[midway,above] {$P(C|A)$}; \draw[->] (a)--(an); \draw[->] (b)--(bg); \draw[->] (b)--(bn);
\end{tikzpicture}
```


---

## Basic rules of probability

- **Rule 1 (bounds)**: For any event $$A$$,

$$
0 \le P(A) \le 1
$$

- **Rule 2 (whole sample space)**: If each possible outcome is listed exactly once, the sum of their probabilities is $$1$$.
- **Rule 3 (impossibilility)**: An **impossible event** has probability $$0$$. A **sure event** (the entire sample space, or any event that must happen) has probability $$1$$.
- **Rule 4 (odds in favor)**: **Odds in favor** of an event $$A$$ compare the chance $$A$$ occurs to the chance it does not. With complement $$A'$$ (or $$A^C$$) for “not $$A$$,”

$$
\text{Odds in favor of } A = \frac{P(A)}{P(A')}
$$

Odds are a ratio, not a probability; you can recover probabilities from odds with a little algebra when needed.

---

## Events: complement, disjoint, union, intersection

- The **complement** of an event $$A$$ is the event that $$A$$ does not occur. It includes every outcome in $$S$$ that is not in $$A$$. Notation includes $$A'$$ and $$A^C$$.
- **Disjoint** events (also called **mutually exclusive** events) cannot both occur on the same trial: they share no outcomes, so $$P(A \cap B) = 0$$ when $$A$$ and $$B$$ are disjoint.
- The **union** $$A \cup B$$ is “$$A$$ or $$B$$ or both”—at least one of the two events happens.
- The **intersection** $$A \cap B$$ is “$$A$$ and $$B$$ both” happen.
- **Conditional probability** “$$A$$ given $$B$$” restricts attention to outcomes where $$B$$ occurred. The notation is

$$
A \mid B
$$

read as “$$A$$ given $$B$$.”

Two events are **independent** if knowing whether one occurred does not change the probability of the other (formalized below).

---

## More probability rules

**Complement rule:**

$$
P(A') = 1 - P(A)
$$

**General addition rule (union):**

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

If $$A$$ and $$B$$ are disjoint, then $$P(A \cap B) = 0$$ and the rule reduces to $$P(A \cup B) = P(A) + P(B)$$.

**General multiplication rule (intersection):**

$$
P(A \cap B) = P(A)\,P(B \mid A) = P(B)\,P(A \mid B)
$$

From the multiplication rule you obtain the standard formula for conditional probability—the same rearrangement that describes **Bayes’ theorem** in tree-and-table problems:

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
$$

provided $$P(B) > 0$$.

**Independence** (equivalent formulations for events with positive probability):

$$
P(A \mid B) = P(A) \quad \text{and} \quad P(B \mid A) = P(B)
$$

Equivalently, independence is often written as

$$
P(A \cap B) = P(A)\,P(B)
$$

If that product rule fails, the events are **dependent**.

---

## Random variables and probability distributions

A **random variable** assigns a numerical value to each outcome of a random experiment. Customarily we use capital letters such as $$X$$ or $$Y$$ for the variable and lowercase $$x$$ for a possible value it might take.

- A **discrete random variable** takes a **finite** or **countably infinite** set of values (counts, “number of successes,” and so on).
- A **continuous random variable** takes values in an interval (time, weight, distance). Probabilities for continuous models are assigned to intervals using density and area ideas in later work; this unit focuses on the discrete case.

---

## Discrete probability distributions

A **discrete probability distribution** lists every possible value $$x_i$$ of $$X$$ together with its probability $$P(x_i)$$ (or $$P(X = x_i)$$). The list may appear as a table, a formula, or a probability histogram.

Let $$X$$ take values $$x_1, x_2, \ldots, x_n$$ with probabilities $$P(x_1), P(x_2), \ldots, P(x_n)$$. The pairing

$$
\{(x_1, P(x_1)), (x_2, P(x_2)), \ldots, (x_n, P(x_n))\}
$$

is a valid probability distribution if

$$
0 \le P(x_i) \le 1 \quad \text{for all } i = 1, 2, \ldots, n
$$

and

$$
\sum_{i=1}^{n} P(x_i) = 1
$$

The first condition keeps each entry a legitimate probability; the second says exactly one of the listed values occurs (for a complete list of possibilities).

---

## Mean of a discrete random variable

The **expected value** $$E(X)$$ of a discrete random variable $$X$$ is also called its mean and denoted $$\mu_X$$ when emphasis is on the distribution. It is the probability-weighted average of the possible values:

$$
\mu = E(X) = \sum_{i=1}^{n} x_i\, P(x_i)
$$

That number is a center of the distribution, but it need not be a value $$X$$ can actually take.

### Bonus!

Surprisingly, expected value is an additive property. The **linearity of expectation** states that:

$$
E(X_1 + X_2 + ... + X_n) = E(X_1) + E(X_2) + ... + E(X_n)
$$

This property is useful in games, insurance, and counting problems because it does not require the random variables to be independent. Variance rules, however, do require independence in the simple forms used in AP Statistics.

---

## Variance of a discrete random variable

The **variance** $$\sigma^2$$ (or $$\operatorname{Var}(X)$$) measures spread around the mean as a probability-weighted average of squared deviations:

$$
\sigma^2 = \sum_{i=1}^{n} (x_i - \mu)^2\, P(x_i)
$$

The **standard deviation** is $$\sigma = \sqrt{\sigma^2}$$, returned to the original units of $$X$$.

---

## Combinations (binomial coefficient)

A **combination** counts how many ways you can choose $$r$$ objects from $$n$$ distinct objects when order does not matter. The symbol is the **binomial coefficient** $$\binom{n}{r}$$, read “$$n$$ choose $$r$$”:

$$
\binom{n}{r} = \frac{n!}{r!\,(n-r)!}
$$

This expression appears in the **binomial probability model** (fixed $$n$$ independent trials, same success probability $$p$$, count successes, described in [Unit 5](/notes/ap/stats/samplingdistr/)) and in many counting-based probability problems on the exam.

---

## Binomial and geometric models

A **binomial random variable** counts successes in a fixed number of independent trials with the same success probability. If $$X \sim \operatorname{Binomial}(n,p)$$, then

$$
P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}.
$$

A **geometric random variable** counts trials until the first success. If $$X \sim \operatorname{Geometric}(p)$$, then

$$
P(X=k)=(1-p)^{k-1}p.
$$


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[ybar,width=9cm,height=5cm,xmin=0,xmax=8,ymin=0,ymax=0.35,xlabel={count},ylabel={probability},xtick={1,2,3,4,5,6,7},ytick=\empty]
\addplot[fill=blue!35] coordinates {(0,0.08)(1,0.23)(2,0.31)(3,0.22)(4,0.11)(5,0.04)};
\addplot[fill=red!35] coordinates {(1,0.30)(2,0.21)(3,0.147)(4,0.103)(5,0.072)(6,0.050)(7,0.035)};
\node[blue] at (axis cs:2,0.33) {binomial}; \node[red] at (axis cs:5.5,0.12) {geometric};
\end{axis}
\end{tikzpicture}
```


## Practice

### FRQ

::::frq{id=stats-probandrand-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
