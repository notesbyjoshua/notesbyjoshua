---
title: "Circuits"
description: "USAPhO circuit notes on Joule heating, network theorems, RC transients, diode models, and matrix methods."
sidebar:
  order: 3
---

## Electric heating and Joule's law

An electric field does work on charge carriers as they drift through a resistor. Collisions transfer that organized energy into random atomic motion, so electrical energy becomes thermal energy.

The power delivered to any two-terminal element is

$$
P=IV,
$$

where $$V$$ is the potential drop in the direction of conventional current. For an ohmic resistor, $$V=IR$$, so

$$
P=I^2R=\frac{V^2}{R}.
$$

The local form is useful when current is spread through a material. With current density $$\vec J$$ and electric field $$\vec E$$, the power per unit volume is

$$
p=\vec J\cdot\vec E.
$$

For an isotropic ohmic material, $$\vec E=\rho\vec J$$, giving

$$
p=\rho J^2=\sigma E^2,
$$

where $$\rho$$ is resistivity and $$\sigma=1/\rho$$ is conductivity. Integrating over the conductor gives the total heating power:

$$
P=\int \vec J\cdot\vec E\,dV.
$$

<div class="theorem-box">

**Proof (Joule heating for a uniform wire).** Consider a wire of length $$L$$, cross-sectional area $$A$$, and resistivity $$\rho$$ carrying uniform current $$I$$. Since $$J=I/A$$,

$$
P=(AL)\rho J^2
=AL\rho\left(\frac{I}{A}\right)^2
=\frac{\rho L}{A}I^2.
$$

Using $$R=\rho L/A$$ gives

$$
P=I^2R.
$$

Combining this with $$V=IR$$ produces the equivalent forms $$P=IV$$ and $$P=V^2/R$$.

</div>

:::warning
Whether a larger resistance means more power depends on what is fixed. At fixed current, $$P=I^2R$$ increases with $$R$$. At fixed voltage, $$P=V^2/R$$ decreases with $$R$$.
:::

<div class="theorem-box">

**Example.** A heating element made from wire of resistivity $$1.1\times10^{-6}\ \Omega\cdot\text{m}$$ has length $$2.0\ \text{m}$$ and cross-sectional area $$0.50\ \text{mm}^2$$. It is connected across $$120\ \text{V}$$. Find its resistance, current, and heating power.

Convert the area: $$0.50\ \text{mm}^2=5.0\times10^{-7}\ \text{m}^2$$. Then

$$
R=\rho\frac{L}{A}
=(1.1\times10^{-6})\frac{2.0}{5.0\times10^{-7}}
=4.4\ \Omega.
$$

The current and power are

$$
I=\frac{V}{R}=\frac{120}{4.4}\approx27\ \text{A},
$$

$$
P=\frac{V^2}{R}=\frac{(120)^2}{4.4}\approx3.3\times10^3\ \text{W}.
$$

</div>

---

## Circuit models, batteries, and EMF

Ideal wires have negligible resistance, so every continuously connected wire region is one **node** at a single potential. A component works only when the surrounding connections provide a closed path for steady current.

A voltage is always a difference between two points. Saying that one point is “at $$5\ \text{V}$$” is incomplete until a reference node is chosen; circuit diagrams usually label one node as ground, $$V=0$$.

An ideal voltage source maintains a fixed potential difference. Its electromotive force, or **EMF**, is the work done by non-electrostatic forces per unit charge:

$$
\mathcal E=\frac{W_{\text{source}}}{q}.
$$

Despite its name, EMF has units of volts and is not a force. Inside a battery, chemical forces move charge from lower to higher electric potential, supplying energy to the circuit.

### Internal resistance

A real battery can be modeled as an ideal EMF $$\mathcal E$$ in series with internal resistance $$r$$.

```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[font=\small]
\draw[thick] (0,0) to[battery1,l=$\mathcal E$] (0,2.5) to[R=$r$] (2.5,2.5) to[R=$R$] (5,2.5) -- (5,0) -- (0,0);
\draw[->,blue,thick] (2.9,2.9) -- (4.2,2.9) node[midway,above] {$I$};
\node at (1.25,-0.55) {real source};
\node at (4.2,-0.55) {load};
\end{tikzpicture}
```

When the battery delivers current,

$$
V_{\text{terminal}}=\mathcal E-Ir.
$$

Only for an open circuit, when $$I=0$$, does the measured terminal voltage equal the EMF. If the terminals are shorted by negligible external resistance,

$$
I_{\text{short}}=\frac{\mathcal E}{r},
$$

which can be dangerously large.

If current is forced into the positive terminal while charging the battery, the sign reverses and $$V_{\text{terminal}}=\mathcal E+Ir$$.

<div class="theorem-box">

**Example.** A battery with $$\mathcal E=12.0\ \text{V}$$ and internal resistance $$r=0.50\ \Omega$$ powers a $$5.5\ \Omega$$ load. Find the current, terminal voltage, power delivered to the load, and efficiency.

The total series resistance is $$R+r=6.0\ \Omega$$, so

$$
I=\frac{\mathcal E}{R+r}=\frac{12.0}{6.0}=2.0\ \text{A}.
$$

The terminal voltage is

$$
V_{\text{terminal}}=\mathcal E-Ir
=12.0-(2.0)(0.50)=11.0\ \text{V}.
$$

Thus

$$
P_{\text{load}}=I^2R=(2.0)^2(5.5)=22\ \text{W}.
$$

The chemical source supplies $$P_{\text{source}}=\mathcal EI=24\ \text{W}$$, while $$I^2r=2.0\ \text{W}$$ is dissipated internally. The efficiency is

$$
\eta=\frac{P_{\text{load}}}{P_{\text{source}}}
=\frac{22}{24}\approx92\%.
$$

</div>

---

## Series and parallel resistor networks

Two components are in **series** only if their shared node has no other branch, so the same current must pass through both. Voltage drops add, giving

$$
R_{\text{series}}=R_1+R_2+\cdots.
$$

Two components are in **parallel** only if both ends connect to the same two nodes. They share a voltage, while their currents add:

$$
\frac{1}{R_{\text{parallel}}}
=\frac{1}{R_1}+\frac{1}{R_2}+\cdots.
$$

Circuit layout can be deceptive. Color-coding each ideal-wire node is often the fastest way to decide which elements are actually parallel.

```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[font=\small]
\draw[thick] (-4,1) -- (-3.5,1) to[R=$R_1$] (-2,1) to[R=$R_2$] (-0.5,1) -- (0,1);
\node at (-2,0.25) {series};
\draw[thick] (1,0.2) -- (1.5,0.2) -- (1.5,1.8) to[R=$R_1$] (3.8,1.8) -- (3.8,0.2) -- (4.3,0.2);
\draw[thick] (1.5,0.2) to[R=$R_2$] (3.8,0.2);
\node at (2.65,-0.5) {parallel};
\end{tikzpicture}
```

### Voltage and current division

For series resistors across total voltage $$V$$,

$$
V_k=V\frac{R_k}{\sum_i R_i}.
$$

For two parallel resistors carrying total current $$I$$,

$$
I_1=I\frac{R_2}{R_1+R_2},
\qquad
I_2=I\frac{R_1}{R_1+R_2}.
$$

The branch with smaller resistance receives more current. In conductance form, the general current-divider rule is

$$
I_k=I\frac{G_k}{\sum_iG_i},
\qquad G_i=\frac{1}{R_i}.
$$

<div class="theorem-box">

**Example.** A $$24\ \text{V}$$ source drives a $$4\ \Omega$$ resistor in series with a parallel combination of $$6\ \Omega$$ and $$3\ \Omega$$. Find every branch current and resistor voltage.

The parallel pair has resistance

$$
R_p=\left(\frac{1}{6}+\frac{1}{3}\right)^{-1}=2\ \Omega,
$$

so $$R_{\text{eq}}=4+2=6\ \Omega$$ and the source current is

$$
I=\frac{24}{6}=4\ \text{A}.
$$

The $$4\ \Omega$$ resistor drops $$V_4=(4)(4)=16\ \text{V}$$, leaving $$8\ \text{V}$$ across each parallel branch. Therefore

$$
I_6=\frac{8}{6}=\frac{4}{3}\ \text{A},
\qquad
I_3=\frac{8}{3}\ \text{A}.
$$

The junction check is $$I_6+I_3=4\ \text{A}$$.

</div>

### Operating voltage and power

Devices intended to receive the same rated voltage are connected in parallel. Putting them in series divides the supply voltage, so neither generally operates at its rated power. A device may be modeled as a resistor near its operating point using

$$
R_{\text{rated}}=\frac{V_{\text{rated}}^2}{P_{\text{rated}}},
$$

but real lamps and other temperature-dependent devices need not remain ohmic far from that point.

---

## Measuring current and voltage

An ideal voltmeter has infinite resistance and is connected in parallel. It draws no current and behaves like an open branch. An ideal ammeter has zero resistance and is connected in series. It causes no voltage drop and behaves like a wire.

```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[font=\small]
\draw[thick] (0,0) to[battery1] (0,2.2) to[ammeter,l=$A$] (2,2.2) to[R=$R$] (4.5,2.2) -- (4.5,0) -- (0,0);
\draw[thick] (2,2.2) -- (2,3.2) to[voltmeter,l=$V$] (4.5,3.2) -- (4.5,2.2);
\end{tikzpicture}
```

Real meters perturb the circuit. Model a voltmeter as a large but finite resistance $$R_V$$ and an ammeter as a small nonzero resistance $$R_A$$, then solve the modified circuit to estimate systematic error.

<div class="theorem-box">

**Example.** A voltmeter with resistance $$R_V=1.0\ \text{M}\Omega$$ measures the voltage across a $$100\ \text{k}\Omega$$ resistor that is in series with another $$100\ \text{k}\Omega$$ resistor across a $$10\ \text{V}$$ source. Find the meter reading and compare it with the unloaded voltage.

Without the meter, symmetry gives $$5.0\ \text{V}$$. With the meter connected, the measured resistor is in parallel with $$R_V$$:

$$
R_p=\frac{(100\ \text{k}\Omega)(1000\ \text{k}\Omega)}{1100\ \text{k}\Omega}
\approx90.9\ \text{k}\Omega.
$$

The voltage divider now gives

$$
V_{\text{meter}}=10\frac{90.9}{100+90.9}\approx4.76\ \text{V}.
$$

The meter reads about $$0.24\ \text{V}$$ low because it loads the circuit.

</div>

---

## Wheatstone bridges

A Wheatstone bridge compares two voltage-divider ratios. When the bridge is balanced, the middle detector connects equal-potential points and carries zero current.

```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[font=\small]
\draw[thick] (0,0) to[battery1,l_=$\mathcal E$] (0,4) -- (1,4);
\draw[thick] (1,4) to[R=$R_1$] (3,4) to[R=$R_2$] (5,4) -- (6,4) -- (6,0);
\draw[thick] (1,4) -- (1,0) to[R=$R_3$] (3,0) to[R=$R_4$] (5,0) -- (6,0) -- (0,0);
\draw[thick] (3,4) to[ammeter,l=$G$] (3,0);
\end{tikzpicture}
```

With no detector current, each horizontal path is an independent series divider. Equality of the midpoint potentials gives

$$
\frac{R_1}{R_2}=\frac{R_3}{R_4},
$$

or equivalently

$$
R_1R_4=R_2R_3.
$$

This null method can measure an unknown resistance without needing an accurately calibrated detector. It is also useful for sensors: a small change in one resistor produces a small bridge voltage centered around zero rather than a small change sitting on top of a large DC offset.

<div class="theorem-box">

**Example.** A balanced Wheatstone bridge has $$R_1=120\ \Omega$$, $$R_2=80\ \Omega$$, and $$R_3=150\ \Omega$$. Find $$R_4$$.

Use the balance condition:

$$
R_1R_4=R_2R_3.
$$

Therefore

$$
R_4=\frac{R_2R_3}{R_1}
=\frac{(80)(150)}{120}
=100\ \Omega.
$$

</div>

---

## Kirchhoff's rules

Series and parallel reduction is only a shortcut. Kirchhoff's rules work for any lumped DC network.

The **junction rule** expresses charge conservation in steady state:

$$
\sum I_{\text{in}}=\sum I_{\text{out}}.
$$

For a network with $$n$$ nodes, only $$n-1$$ junction equations are independent; summing all node equations gives $$0=0$$.

The **loop rule** expresses energy conservation:

$$
\sum_{\text{loop}}\Delta V=0.
$$

Choose current and loop directions arbitrarily, then keep the signs consistent:

- Crossing a resistor in the assumed current direction contributes $$-IR$$; crossing against it contributes $$+IR$$.
- Crossing an ideal source from negative to positive contributes $$+\mathcal E$$; crossing from positive to negative contributes $$-\mathcal E$$.
- A negative solved current simply means the actual current is opposite the assumed arrow.

```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[font=\small]
\draw[thick] (0,0) to[battery1,l_=$\mathcal E_1$] (0,3) to[R=$R_1$] (3,3) to[R=$R_2$] (6,3) -- (6,0) to[battery1,l=$\mathcal E_2$] (3,0) to[R=$R_3$] (0,0);
\draw[thick] (3,3) to[R=$R_4$] (3,0);
\draw[->,blue,thick] (1.2,1.7) arc[start angle=160,end angle=-120,radius=0.55] node[left] {$I_1$};
\draw[->,red,thick] (4.8,1.7) arc[start angle=20,end angle=300,radius=0.55] node[right] {$I_2$};
\end{tikzpicture}
```

:::strategy
1. Assign a current variable and arrow to every independent branch.
2. Write independent junction equations first.
3. Add loop equations one at a time, choosing each new loop to contain at least one branch not used to provide independent information before.
4. Stop when the number of independent equations equals the number of unknowns.
5. Solve algebraically, then check junction conservation, loop voltage sums, units, and signs.
:::

<div class="theorem-box">

**Example.** Two nodes are joined by three parallel branches. The first contains a $$12\ \text{V}$$ source in series with $$2\ \Omega$$, the second contains a $$6\ \Omega$$ resistor, and the third contains a $$6\ \text{V}$$ source in series with $$3\ \Omega$$. Both sources have their positive terminals at the upper-potential node. Find the node voltage $$V$$ and each downward branch current.

Let $$V=V_{\text{top}}-V_{\text{bottom}}$$ and take downward current as positive. Moving downward through each source and resistor gives

$$
I_1=\frac{V-12}{2},
\qquad
I_2=\frac{V}{6},
\qquad
I_3=\frac{V-6}{3}.
$$

No external current enters the top node, so the algebraic sum of downward currents is zero:

$$
\frac{V-12}{2}+\frac{V}{6}+\frac{V-6}{3}=0.
$$

Multiplying by $$6$$ gives

$$
3V-36+V+2V-12=0,
$$

so $$V=8.0\ \text{V}$$. Therefore

$$
I_1=-2.0\ \text{A},
\qquad
I_2=\frac{4}{3}\ \text{A},
\qquad
I_3=\frac{2}{3}\ \text{A}.
$$

The negative sign means $$2.0\ \text{A}$$ actually travels upward through the first branch. The check is $$-2+4/3+2/3=0$$.

</div>

---

## Nodal analysis and matrix methods

For a large linear circuit, Kirchhoff equations are most systematic in matrix form. Choose one node as ground and let the remaining node potentials form a vector $$\vec V$$. For a resistor between nodes $$i$$ and $$j$$, the current leaving node $$i$$ is

$$
I_{i\to j}=\frac{V_i-V_j}{R_{ij}}=G_{ij}(V_i-V_j),
$$

where $$G_{ij}=1/R_{ij}$$ is conductance. Applying the junction rule at every non-ground node produces

$$
\mathbf G\vec V=\vec I,
$$

where $$\vec I$$ contains currents injected by sources. The conductance matrix is built by inspection:

- $$G_{ii}$$ is the sum of all conductances connected to node $$i$$.
- $$G_{ij}$$ is minus the conductance directly connecting nodes $$i$$ and $$j$$.
- The reduced matrix is symmetric for ordinary reciprocal resistors.

For a three-node resistive triangle before grounding,

$$
\mathbf G=
\begin{pmatrix}
G_{12}+G_{13} & -G_{12} & -G_{13}\\
-G_{12} & G_{12}+G_{23} & -G_{23}\\
-G_{13} & -G_{23} & G_{13}+G_{23}
\end{pmatrix}.
$$

Every row sums to zero because shifting all potentials by the same constant changes no current. The full matrix therefore has a zero eigenvalue with eigenvector $$(1,1,1)^T$$. Choosing ground removes that redundant mode and makes the reduced system solvable.

<div class="theorem-box">

**Example.** Node $$A$$ connects to a fixed $$10\ \text{V}$$ node through $$2\ \Omega$$, to ground through $$4\ \Omega$$, and to node $$B$$ through $$5\ \Omega$$. Node $$B$$ also connects to ground through $$10\ \Omega$$. Find $$V_A$$ and $$V_B$$ using a matrix equation.

The node equations are

$$
\frac{V_A-10}{2}+\frac{V_A}{4}+\frac{V_A-V_B}{5}=0,
$$

$$
\frac{V_B-V_A}{5}+\frac{V_B}{10}=0.
$$

Collecting coefficients gives

$$
\begin{pmatrix}
\frac12+\frac14+\frac15 & -\frac15\\
-\frac15 & \frac15+\frac1{10}
\end{pmatrix}
\begin{pmatrix}
V_A\\V_B
\end{pmatrix}
=
\begin{pmatrix}
5\\0
\end{pmatrix}.
$$

The second equation gives $$V_A=\tfrac32V_B$$. Substitution into the first gives

$$
V_B=\frac{200}{49}\ \text{V}\approx4.08\ \text{V},
\qquad
V_A=\frac{300}{49}\ \text{V}\approx6.12\ \text{V}.
$$

</div>

### What diagonalization reveals

For one static circuit, Gaussian elimination is usually more direct than diagonalization. Eigenvectors become useful for a repeated or symmetric network because they identify independent voltage patterns. If

$$
\mathbf G=\mathbf U\mathbf\Lambda\mathbf U^T,
$$

then in modal coordinates $$\tilde{\vec V}=\mathbf U^T\vec V$$ and $$\tilde{\vec I}=\mathbf U^T\vec I$$,

$$
\Lambda_k\tilde V_k=\tilde I_k.
$$

Each eigenmode responds independently with effective conductance $$\Lambda_k$$. Symmetry often lets you guess the modes as even and odd combinations without evaluating a large determinant.

For transient circuits containing capacitors, nodal analysis produces

$$
\mathbf C\dot{\vec V}+\mathbf G\vec V=\vec I(t).
$$

Natural modes have the form $$\vec V=\vec a e^{-\lambda t}$$, so

$$
\mathbf G\vec a=\lambda\mathbf C\vec a.
$$

This is a generalized eigenvalue problem. Each positive eigenvalue gives a decay rate $$\lambda_k$$ and time constant

$$
\tau_k=\frac{1}{\lambda_k}.
$$

If $$\mathbf C$$ is positive definite, define the symmetric matrix

$$
\mathbf A=\mathbf C^{-1/2}\mathbf G\mathbf C^{-1/2}.
$$

Diagonalizing $$\mathbf A$$ is numerically and conceptually cleaner than treating $$\mathbf C^{-1}\mathbf G$$ as if it were symmetric. Convert an eigenvector $$\vec u_k$$ of $$\mathbf A$$ back to the circuit voltage pattern using $$\vec a_k=\mathbf C^{-1/2}\vec u_k$$.

For coupled lossless LC circuits, the analogous equation is

$$
\mathbf L\ddot{\vec q}+\mathbf K\vec q=0,
$$

where $$\mathbf K$$ contains inverse-capacitance coefficients. Trying $$\vec q=\vec a e^{i\omega t}$$ gives

$$
\mathbf K\vec a=\omega^2\mathbf L\vec a,
$$

so the eigenvalues are squared normal-mode frequencies.

<div class="theorem-box">

**Example.** Two identical LC loops each have inductance $$L$$ and capacitance $$C$$. Their inductors have mutual inductance $$M$$, with signs chosen so the off-diagonal inductance terms are $$+M$$. Find the two normal modes and their frequencies.

```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[font=\small]
\draw[thick] (-3,0) to[C=$C$] (-3,2.8) -- (-1,2.8) to[L=$L$] (-1,0) -- (-3,0);
\draw[thick] (1,0) to[L=$L$] (1,2.8) -- (3,2.8) to[C=$C$] (3,0) -- (1,0);
\draw[<->,blue,thick] (-0.65,1.4) -- (0.65,1.4) node[midway,above] {$M$};
\end{tikzpicture}
```

The equations are

$$
\begin{pmatrix}L&M\\M&L\end{pmatrix}\ddot{\vec q}
+\frac1C\begin{pmatrix}1&0\\0&1\end{pmatrix}\vec q=0.
$$

Symmetry gives an in-phase eigenvector

$$
\vec a_+=\frac1{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix},
$$

with effective inductance $$L+M$$ and frequency

$$
\omega_+=\frac1{\sqrt{C(L+M)}}.
$$

The out-of-phase eigenvector is

$$
\vec a_-=\frac1{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix},
$$

with effective inductance $$L-M$$ and frequency

$$
\omega_-=\frac1{\sqrt{C(L-M)}}.
$$

Any initial charge pattern is a linear combination of these two eigenvectors. Their different frequencies cause beats and energy exchange between the loops.

</div>

:::strategy
1. Use elimination for a one-off static circuit; use diagonalization when symmetry, repeated solves, or time evolution makes modes useful.
2. Remove the arbitrary common-potential mode by choosing a ground node.
3. Build matrices from the network: diagonal entries collect attached elements, while off-diagonal entries describe connections between nodes.
4. For RC decay, solve $$\mathbf G\vec a=\lambda\mathbf C\vec a$$. For LC oscillation, solve $$\mathbf K\vec a=\omega^2\mathbf L\vec a$$.
5. Decompose the initial state into eigenvectors and evolve each mode with its own exponential or sinusoid.
:::

---

## Delta-wye transformations

A delta network cannot generally be reduced by series and parallel rules. It can be replaced by an equivalent wye network that produces the same terminal behavior at its three external nodes.

```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[font=\small]
\coordinate (A) at (-3,2.4); \coordinate (B) at (-4.5,0); \coordinate (C) at (-1.5,0);
\draw (A) node[above] {$A$} to[R=$R_c$] (B) node[left] {$B$} to[R=$R_a$] (C) node[right] {$C$} to[R=$R_b$] (A);
\coordinate (O) at (2.7,0.9); \coordinate (Y1) at (2.7,2.4); \coordinate (Y2) at (1.2,0); \coordinate (Y3) at (4.2,0);
\draw (Y1) node[above] {$A$} to[R=$R_A$] (O) to[R=$R_B$] (Y2) node[left] {$B$};
\draw (O) to[R=$R_C$] (Y3) node[right] {$C$};
\end{tikzpicture}
```

For delta sides $$R_a$$ opposite node $$A$$, $$R_b$$ opposite $$B$$, and $$R_c$$ opposite $$C$$, the wye arms are

$$
R_A=\frac{R_bR_c}{R_a+R_b+R_c},
$$

$$
R_B=\frac{R_aR_c}{R_a+R_b+R_c},
\qquad
R_C=\frac{R_aR_b}{R_a+R_b+R_c}.
$$

For the reverse transformation, define

$$
S=R_AR_B+R_BR_C+R_CR_A.
$$

Then the delta resistor opposite a wye arm is

$$
R_a=\frac{S}{R_A},
\qquad
R_b=\frac{S}{R_B},
\qquad
R_c=\frac{S}{R_C}.
$$

For three equal delta resistors $$R_\Delta$$, each equivalent wye arm is $$R_\Delta/3$$. For three equal wye arms $$R_Y$$, each delta side is $$3R_Y$$.

<div class="theorem-box">

**Example.** A delta has resistances $$R_a=6\ \Omega$$, $$R_b=9\ \Omega$$, and $$R_c=3\ \Omega$$. Find its equivalent wye arms.

The common denominator is $$6+9+3=18\ \Omega$$. Therefore

$$
R_A=\frac{(9)(3)}{18}=1.5\ \Omega,
$$

$$
R_B=\frac{(6)(3)}{18}=1.0\ \Omega,
\qquad
R_C=\frac{(6)(9)}{18}=3.0\ \Omega.
$$

</div>

---

## Source transformations and network theorems

An ideal voltage source maintains voltage regardless of current. An ideal current source maintains current regardless of voltage. Real sources have limits, but these idealizations make linear networks much easier to reduce.

### Thevenin and Norton equivalents

Any linear two-terminal network of sources and resistors can be replaced by either:

- a **Thevenin equivalent**: voltage source $$V_{\text{th}}$$ in series with $$R_{\text{th}}$$;
- a **Norton equivalent**: current source $$I_{\text N}$$ in parallel with $$R_{\text N}$$.

They describe the same terminal relation, so

$$
R_{\text N}=R_{\text{th}},
\qquad
I_{\text N}=\frac{V_{\text{th}}}{R_{\text{th}}}.
$$

```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[font=\small]
\draw[thick] (-4,0) to[battery1,l=$V_{\mathrm{th}}$] (-4,2.5) to[R=$R_{\mathrm{th}}$] (-1,2.5);
\draw[thick] (-4,0) -- (-1,0);
\fill (-1,2.5) circle (2pt) node[right] {$A$}; \fill (-1,0) circle (2pt) node[right] {$B$};
\node at (-2.5,-0.55) {Thevenin};
\draw[thick] (1,0) -- (1,2.5) to[isource,l=$I_{\mathrm N}$] (3,2.5) -- (3,0) -- (1,0);
\draw[thick] (3,2.5) -- (4.2,2.5); \draw[thick] (3,0) -- (4.2,0);
\draw[thick] (1,2.5) -- (1,3.1) to[R=$R_{\mathrm N}$] (3,3.1) -- (3,2.5);
\fill (4.2,2.5) circle (2pt) node[right] {$A$}; \fill (4.2,0) circle (2pt) node[right] {$B$};
\node at (2.6,-0.55) {Norton};
\end{tikzpicture}
```

To find a Thevenin equivalent:

1. Remove the load and find the open-circuit terminal voltage: $$V_{\text{th}}=V_{\text{oc}}$$.
2. Turn off independent sources: short ideal voltage sources and open ideal current sources.
3. Find the resistance seen looking into the terminals: $$R_{\text{th}}$$.
4. Reconnect the load.

If dependent sources are present, do not turn them off. Apply a test voltage or current at the terminals and use $$R_{\text{th}}=V_{\text{test}}/I_{\text{test}}$$.

For Norton form, the short-circuit current is $$I_{\text N}=I_{\text{sc}}$$.

<div class="theorem-box">

**Example.** A $$12\ \text{V}$$ source feeds $$R_1=4\ \Omega$$ in series with $$R_2=8\ \Omega$$. Output terminals are taken across $$R_2$$. Find the Thevenin equivalent seen by a load connected to those terminals, then find the load current for $$R_L=6\ \Omega$$.

With the load removed, the divider voltage is

$$
V_{\text{th}}=12\frac{8}{4+8}=8\ \text{V}.
$$

Turn off the ideal voltage source by replacing it with a wire. Seen from the output, $$R_1$$ and $$R_2$$ are parallel:

$$
R_{\text{th}}=\frac{(4)(8)}{4+8}=\frac83\ \Omega.
$$

After reconnecting the load,

$$
I_L=\frac{V_{\text{th}}}{R_{\text{th}}+R_L}
=\frac{8}{8/3+6}
=\frac{12}{13}\ \text{A}\approx0.923\ \text{A}.
$$

</div>

### Superposition

In a linear circuit, the current or voltage caused by several independent sources equals the algebraic sum of their separate contributions. When considering one source alone:

- replace other ideal voltage sources with shorts;
- replace other ideal current sources with opens.

Dependent sources remain active. Superposition applies directly to voltages and currents, not to power, because power is quadratic. Find the total current or voltage first, then calculate power.

### Symmetry and folding

Symmetry-equivalent nodes have equal potential. Any resistor joining such nodes carries zero current and may be removed. Mirror-image halves can sometimes be folded together, turning corresponding resistors into parallel combinations.

:::tip
Before writing equations for a large symmetric network, identify node orbits under the symmetry. Nodes that must share a potential can be merged, often reducing a many-resistor problem to a few branches.
:::

---

## Capacitors in DC circuits

For capacitor geometry and dielectric behavior, see [Conductors & Capacitors](/notes/physics/eandm/conductors-capacitors/). In a DC circuit, the capacitor relation is

$$
q=CV,
$$

and current is the rate at which its plate charge changes:

$$
I=\frac{dq}{dt},
$$

with the sign determined by the chosen current and plate-charge conventions.

An initially uncharged capacitor has zero voltage and behaves like a wire at the instant switching occurs. After a long time in a constant-source circuit, its current is zero and its branch behaves like an open circuit. These are limiting statements, not claims that a physical capacitor is literally a wire or broken connection.

### Discharging

For a capacitor with initial charge $$Q_0$$ discharging through equivalent resistance $$R$$,

```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[font=\small]
\draw[thick] (0,0) to[C=$C$,v^>=$q/C$] (0,2.5) to[closing switch] (2,2.5) to[R=$R$] (4,2.5) -- (4,0) -- (0,0);
\draw[->,blue,thick] (2.4,2.9) -- (3.4,2.9) node[midway,above] {$I$};
\end{tikzpicture}
```

Kirchhoff's loop rule gives

$$
\frac{q}{C}+R\frac{dq}{dt}=0,
$$

so

$$
q(t)=Q_0e^{-t/RC},
$$

$$
V_C(t)=\frac{Q_0}{C}e^{-t/RC},
\qquad
I(t)=\frac{Q_0}{RC}e^{-t/RC}
$$

for a current magnitude chosen in the discharge direction.

### Charging

For an initially uncharged capacitor charging through $$R$$ from an ideal source $$\mathcal E$$,

$$
\mathcal E-\frac{q}{C}-R\frac{dq}{dt}=0.
$$

The solution is

$$
q(t)=C\mathcal E\left(1-e^{-t/RC}\right),
$$

$$
V_C(t)=\mathcal E\left(1-e^{-t/RC}\right),
\qquad
I(t)=\frac{\mathcal E}{R}e^{-t/RC}.
$$

The time constant

$$
\tau=RC
$$

sets the time scale. After one time constant, a decaying quantity is $$e^{-1}\approx36.8\%$$ of its initial value, while a charging quantity has completed $$1-e^{-1}\approx63.2\%$$ of its total change.

<div class="theorem-box">

**Example.** A $$10\ \mu\text{F}$$ capacitor initially charged to $$20\ \text{V}$$ discharges through $$2.0\ \text{M}\Omega$$. Find the time constant, the capacitor voltage after $$30\ \text{s}$$, and the time required to reach $$5.0\ \text{V}$$.

The time constant is

$$
\tau=RC=(2.0\times10^6)(10\times10^{-6})=20\ \text{s}.
$$

At $$t=30\ \text{s}$$,

$$
V_C=20e^{-30/20}\approx4.46\ \text{V}.
$$

For $$V_C=5.0\ \text{V}$$,

$$
5=20e^{-t/20},
$$

so

$$
t=20\ln4\approx27.7\ \text{s}.
$$

</div>

### Reducing capacitor networks

The series/parallel rules are opposite those for resistors:

$$
C_{\text{parallel}}=C_1+C_2+\cdots,
$$

$$
\frac1{C_{\text{series}}}=\frac1{C_1}+\frac1{C_2}+\cdots.
$$

There is a useful algebraic correspondence

$$
Q\longleftrightarrow I,
\qquad
\frac1C\longleftrightarrow R.
$$

Thus a capacitor network can be mapped to a resistor network by replacing each capacitor $$C$$ with resistance $$1/C$$. Equivalent resistance in the mapped network corresponds to $$1/C_{\text{eq}}$$. This is an algebraic shortcut; the physical meanings of charge and current remain different.

---

## Nonlinear elements and diodes

An ohmic resistor has a linear $$I$$-$$V$$ relation. A diode is nonlinear and conducts much more readily in one direction than the other.

An ideal diode has two states:

- **Forward biased:** a closed switch with $$V_D=0$$ and $$I_D\ge0$$.
- **Reverse biased:** an open switch with $$I_D=0$$ and $$V_D\le0$$, using voltage measured from anode to cathode.

```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[font=\small]
\draw[thick] (0,0) to[battery1,l_=$\mathcal E$] (0,2.5) to[R=$R$] (2.5,2.5) to[D=$D$] (5,2.5) -- (5,0) -- (0,0);
\draw[->,blue,thick] (1.1,2.9) -- (2.0,2.9) node[midway,above] {$I$};
\end{tikzpicture}
```

To analyze an ideal-diode circuit, assume each diode is on or off, solve the resulting linear circuit, then check whether the solved current and voltage satisfy the assumed state. If not, reverse the assumption.

Real diodes have a smooth nonlinear response. Two resistance-like quantities describe different questions:

$$
R_{\text{DC}}=\frac{V}{I}
$$

is the ratio at one operating point, while

$$
r_{\text{small}}=\frac{dV}{dI}
$$

is the local slope used for small changes around that point. A load-line method combines the external circuit relation with the diode curve; their intersection is the operating point.

<div class="theorem-box">

**Example.** A practical constant-drop model treats a silicon diode as off when reverse biased and as a fixed $$0.70\ \text{V}$$ drop when on. A $$5.0\ \text{V}$$ source, $$430\ \Omega$$ resistor, and diode are connected in series in the forward direction. Find the current and verify the assumed state.

Assume the diode is on. Kirchhoff's loop rule gives

$$
5.0-I(430)-0.70=0,
$$

so

$$
I=\frac{4.3}{430}=0.010\ \text{A}=10\ \text{mA}.
$$

The current is positive in the forward direction, so the on-state assumption is consistent.

</div>

### Semiconductor picture

Intrinsic silicon has relatively few mobile carriers. Doping creates:

- **n-type material**, with extra mobile electrons from donor atoms;
- **p-type material**, with mobile holes from acceptor atoms.

At a p-n junction, carrier diffusion leaves behind fixed ions and creates a depletion region with an internal electric field. Forward bias narrows the barrier and allows substantial current; reverse bias widens it and suppresses current until breakdown. Some forward-biased junctions emit light, producing LEDs.

:::warning
Reverse breakdown can damage an ordinary diode. Devices such as Zener diodes are specifically designed to operate in a controlled breakdown regime for voltage regulation.
:::

---

:::summary{title="Circuit toolkit"}
- Joule heating: $$P=IV=I^2R=V^2/R$$ and $$p=\vec J\cdot\vec E$$.
- Real battery: $$V_{\text{terminal}}=\mathcal E-Ir$$ while delivering current.
- Series resistors share current; parallel resistors share voltage.
- Kirchhoff's rules solve general networks; nodal matrices organize large systems.
- Delta-wye, Thevenin/Norton, superposition, and symmetry reduce difficult linear networks.
- RC transients evolve exponentially with time constant $$\tau=RC$$.
- Diodes require a state check or a nonlinear operating-point construction.
- Diagonalization separates symmetric RC or LC networks into independent modes.
:::
