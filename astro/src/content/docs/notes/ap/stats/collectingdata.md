---
title: "Unit 3: Collecting Data"
sidebar:
  order: 3
---

---

How you collect data decides what you can conclude. This unit separates vocabulary for populations and samples, contrasts experiments with observational studies, names common sources of bias, and introduces standard sampling designs and experimental layouts used on the AP Statistics exam.

---

## Basic terms: population, frame, sample, census

- The **population** is the entire group of individuals, objects, or cases you want to learn about. In practice, “population” means whatever group your research question specifies, with clear inclusion rules.
- The **sampling frame** (often shortened to **frame**) is the list (or practical roster) you draw from when you select a sample. Ideally the frame matches the population, but it often does not: outdated lists, duplicates, or missing groups create gaps between the population you care about and the population you can actually reach.
- A **sample** is the part of the population you actually measure. We use sample statistics to estimate unknown population quantities; the quality of those estimates depends on how the sample was chosen and how measurements were taken.
- A **census** collects data from every unit in the population. A census is realistic when the population is small, listing is complete, and measurement does not destroy or alter units. For large or hidden populations, a census is usually too expensive, too slow, or impossible (like the US Census, which is expensive and slow), so we rely on samples instead.

---

## Experiments and observational studies

- An **experiment** deliberately imposes **treatments** (conditions the investigator controls) on **experimental units**, then records outcomes. The point is to compare results across treatment groups and, when the design is strong, to support **cause-and-effect** claims about the factor being manipulated. However, experiments can be impossible, impractical, or unethical: you cannot randomly assign people to “smoke for twenty years,” and some interventions are too risky. When we cannot manipulate variables, we fall back on observation.
- An **observational study** measures variables as they exist; the researcher does not assign treatments. You can describe **association** and identify patterns, but confounding often blocks clean causal interpretation. Many observational studies also rely on weak sampling (volunteers, convenience groups), which limits **generalizability** to a wider population.

### Confounding factor

A **confounding factor** is a third variable tied to both the explanatory variable and the response in a way that makes a link  between two variables misleading. The factor “mixes” with the story you think you are telling, so association between the two variables of interest may be partly or wholly explained by that third variable.

:::exam{topic="Scope of inference"}
Random sampling helps you generalize to the population sampled from. Random assignment helps you make cause-and-effect conclusions. A study can have one, both, or neither.
:::

---

## Biased sampling

**Bias** means systematic error: estimates or conclusions tend to land in the same wrong direction, not just randomly off target. **Biased sampling** produces samples that are not representative of the population in a repeatable way.

- **Judgmental sampling** picks units according to someone’s discretion rather than a chance mechanism. Even expert judgment can accidentally favor certain kinds of cases.
- A **convenience sample** takes units that are easy to reach (the first thirty students in the cafeteria, whoever answers the email). Convenience is cheap; representativeness is not guaranteed.
- **Volunteer samples** (self-selected samples) attract people who choose to participate. Sensitive topics, strong opinions, or extra time can skew who opts in, so the sample may differ systematically from those who decline.

:::warning
Most sampling is biased! For example, most surveys/polls are volunteer samples, as with most clinical trials.
:::

---

## Simple random sampling

**Simple random sampling** gives every population unit listed in the frame the same chance of being selected, and every possible sample of a fixed size the same chance of occurring (in the usual equal-probability formulation). In practice we approximate this with random digits, software, or a random number table.

True physical randomness is hard to achieve: pseudo-random generators have limitations, and implementation mistakes break fairness, but the goal is that **sampling bias** from selection is controlled.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\node[draw, rounded corners] (pop) at (0,2) {population};
\node[draw, rounded corners] (srs) at (-4,0.5) {SRS}; \node[draw, rounded corners] (strat) at (-1.3,0.5) {stratified}; \node[draw, rounded corners] (clus) at (1.6,0.5) {cluster}; \node[draw, rounded corners] (sys) at (4,0.5) {systematic};
\foreach \n in {srs,strat,clus,sys}{\draw[->, thick] (pop)--(\n);} \node[align=center] at (0,-1) {different random designs produce samples from the same population};
\end{tikzpicture}
```


---

## Other probability sampling designs

### Systematic sampling

In **systematic sampling**, choose a random starting point among the first $$k$$ units in an ordered frame, then take every $$k$$th unit after that. The spacing $$k$$ is chosen so the sample size hits the target. Systematic samples are simple to carry out, but hidden **periodicity** in the frame (for example, listing households by block pattern) can accidentally align with $$k$$ and introduce bias.

### Stratified random sampling

- In **stratified random sampling**, divide the population into non-overlapping subgroups called **strata** (singular **stratum**). Strata are built so units inside a stratum are alike on a **stratifying variable** you care about, and strata differ from each other. You draw a separate simple random sample within each stratum, then combine the pieces.
- **Proportional sampling** (a common stratified plan) chooses sample sizes from each stratum in proportion to stratum size, so larger strata contribute more observations. Stratification often improves **precision** for group comparisons and for overall estimates when strata are homogeneous internally.

### Cluster sampling

In **cluster sampling**, the population is partitioned into **clusters** (often pre-existing groups such as schools, city blocks, or hospitals). You randomly select some clusters, then measure all units in the chosen clusters (one-stage cluster sampling), or subsample within them (multistage designs in more advanced courses).

Clusters are usually heterogeneous inside (e.g. people within a school differ from each other) which is fine, since the random selection of clusters is what justifies inference to the larger population when the frame is good. Poor cluster choice or too few clusters can still yield misleading results.

:::warning
Strata should be internally similar and sampled from every group. Clusters should each look like miniature versions of the population, and only some clusters are selected.
:::

---

## Bias in surveys

A survey is **biased** when design or execution systematically favors particular answers or kinds of respondents.

- **Response bias** arises when answers are inaccurate—because of interviewer tone, social pressure, memory errors, or question sensitivity—even if the sample frame was fine.
- **Nonresponse bias** appears when people who cannot be reached or who refuse to participate differ from those who respond. Heavy nonresponse can skew results even when the initial sample was random.
- **Undercoverage** means part of the population never had a real chance to be selected (no listing, outdated contact information, or a mode that excludes groups). A telephone-only survey in a population with uneven phone access is a classic illustration.
- **Wording bias** (or **leading questions**) steers respondents toward an answer by framing, loaded language, or embedded claims. Even subtle wording changes can shift measured percentages.

---

## Planning experiments: variables, factors, treatments

- The **response variable** (dependent variable) is what you measure after treatments are applied. The **explanatory variable** (independent variable) is what you manipulate or use to explain changes in the response.
- A **confounding variable** affects the response in a way that cannot be separated from the explanatory variable’s effect with the current design. Random assignment is the main tool for spreading out confounders across groups; blocking handles confounders you can name and measure.
- A **factor** is an explanatory variable whose effect you study. Factors can be categorical or quantitative, just as in exploratory data analysis. **Levels** are the specific values or categories of a factor used in the study.
- **Treatments** are the distinct conditions applied to experimental units—formally, combinations of factor levels. With two factors, the number of possible treatments is the product of level counts. For example, three drug doses and two exercise types give this many treatment combinations:

$$
3 \times 2 = 6
$$

(assuming each treatment is made of one dose and one exercise)

When there is only one factor, each level is a treatment.

---

## Control, placebo, and blinding

- A **control group** receives no active treatment (or a baseline condition) so you can compare the response under treatment to a reference level.
- A **placebo** looks like the real treatment but lacks the active ingredient or mechanism; the **placebo group** helps separate biological or mechanical effects from psychological effects of receiving something labeled as treatment.

If subjects know which treatment they received, behavior and reporting can shift. If evaluators know, measurements can tilt. So, researches sometimes perform a **blinded experiment**, where either the subject or the experimenter (who's collecting data) (or both) don't know if the subject got the placebo or not.

- In a **single-blind** study, either the subjects or the people collecting outcome data do not know who received which treatment.
- In a **double-blind** study, neither subjects nor outcome assessors know the assignment; only those managing randomization (and safety oversight) keep that information until the study is analyzed.

Note that in rare studies with inanimate objects, they can't be blinded, since they couldn't see in the first place!

---

## Randomization, blocking, replication

- **Randomization** assigns treatments to units by chance so that **lurking variables** tend to balance across groups on average. Random assignment supports causal claims about differences observed in the experiment, whilerandom sampling supports generalizing to a population. Designs can include one, both, or neither.
- **Blocking** sorts experimental units into **blocks** of similar units (same sex, similar baseline pain scores, same litter of animals), then randomizes treatments within each block. Blocking controls known sources of variability and can make comparisons more precise than a single completely pooled randomization.
- **Replication** means repeating treatments on many units (or repeating runs). Without replication, a single unusual unit can dominate the story; with replication, you can estimate how much responses vary within a treatment group.

---

## Types of experimental design


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\node[draw, rounded corners] (units) at (0,2) {experimental units};
\node[draw, rounded corners] (rand) at (0,0.7) {random assignment};
\node[draw, rounded corners] (tr1) at (-2,-0.8) {treatment A}; \node[draw, rounded corners] (tr2) at (2,-0.8) {treatment B};
\node[draw, rounded corners] (comp) at (0,-2.2) {compare responses};
\draw[->, thick] (units)--(rand); \draw[->, thick] (rand)--(tr1); \draw[->, thick] (rand)--(tr2); \draw[->, thick] (tr1)--(comp); \draw[->, thick] (tr2)--(comp);
\end{tikzpicture}
```


### Completely randomized design

In a **completely randomized design**, experimental units are assigned to treatments entirely at random, with no blocking step. This is the cleanest layout when no strong **nuisance factor** is obvious.

### Randomized block design

A **randomized block design** first forms blocks of similar units, then runs a completely randomized design inside each block. You compare treatments after removing block-to-block drift. If an important factor is ignored and left to vary freely, it can inflate variability or mimic treatment effects.

### Matched-pairs design

A **matched-pairs design** is a specialized block design for comparing two treatments: each block has two units matched on relevant characteristics, and treatments are randomized within the pair. Alternatively, the same unit can receive both treatments in **random order** (a crossover-style idea), with randomization of order controlling **order effects**. The second version uses each subject as its own block; **carryover effects** must be considered when treatments could permanently change the unit.

## Practice

### FRQ

::::frq{id=stats-collectingdata-1}
1. A city wants to estimate support for a new bus route. The city has a list of all households in each neighborhood.

   $$(A)$$ Describe how to select a stratified random sample of 300 households using neighborhood as the strata.

   $$(B)$$ Explain one advantage of this design compared with a simple random sample of 300 households.

   $$(C)$$ The city also runs a study where some riders are randomly assigned to receive discounted fares and others are not. Explain whether this second study can support a cause-and-effect conclusion.

:::solution
$$(A)$$ Separate the household list into groups by neighborhood. Within each neighborhood, use a random number generator to select households. The total selected across all neighborhoods should be 300; the number from each neighborhood can be proportional to neighborhood size if the goal is a citywide estimate.

$$(B)$$ Stratifying by neighborhood guarantees representation from every neighborhood. This can reduce variability if opinions about the bus route differ by neighborhood.

$$(C)$$ Yes, if riders are randomly assigned to discounted fares or no discounted fares, then differences in ridership between the groups can be attributed to the fare discount, assuming the study is otherwise well controlled. Random assignment supports cause-and-effect conclusions.
:::
::::
