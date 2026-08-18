---
title: "Unit 4: Circuits"
description: "AP Physics C E&M notes on circuits, current, resistance, Ohm's law, Kirchhoff's rules, RC circuits, and power."
sidebar:
  order: 4
---

---

Circuit analysis translates electric field and potential ideas into networks of elements. In AP Physics C, circuits are not just plug-and-chug resistance problems: you should connect current to charge flow, potential difference to energy per charge, and RC behavior to differential equations.

---

:::variables
- $$I$$ = current (Units: amperes, $$\text{A}=\text{C/s}$$)
- $$V$$ or $$\Delta V$$ = potential difference (Units: volts)
- $$R$$ = resistance (Units: ohms, $$\Omega$$)
- $$\mathcal{E}$$ = emf of a battery or source
- $$P$$ = power
- $$\rho$$ = resistivity
- $$C$$ = capacitance
- $$\tau$$ = time constant
:::

---

## Current

Electric current is the rate at which charge passes through a cross-section:

$$
I = \frac{dQ}{dt}.
$$

Conventional current is defined as the direction positive charge would move. In metal wires, the mobile charges are electrons, so electron drift is opposite conventional current.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (-4,-0.8) rectangle (4,0.8); \draw[->, very thick, blue] (-3.6,0) -- (3.6,0) node[right] {$I$};
\foreach \x in {-3,-2,-1,0,1,2,3}{\fill[red] (\x,0.25) circle (2pt); \draw[->, red] (\x,0.25) -- (\x-0.45,0.25);} \node at (0,-1.25) {electron drift is opposite conventional current};
\end{tikzpicture}
```


For a wire with charge-carrier number density $$n$$, charge magnitude $$q$$, cross-sectional area $$A$$, and drift speed $$v_d$$,

$$
I = nqAv_d.
$$

Drift speeds are usually small; circuits respond quickly because the electric field is established throughout the circuit at near light-speed scales in the medium.

<div class="theorem-box">

**Proof (Drift Current Formula).** In time $$dt$$, charge carriers drifting at speed $$v_d$$ move distance

$$
dx=v_d\,dt.
$$

The volume of wire crossing a chosen cross-section during that time is

$$
dV=A\,dx=Av_d\,dt.
$$

If the number density of carriers is $$n$$, the number of carriers in that volume is

$$
dN=nAv_d\,dt.
$$

The charge passing through is

$$
dQ=q\,dN=nqAv_d\,dt.
$$

Therefore

$$
I=\frac{dQ}{dt}=nqAv_d.
$$

</div>

---

## Resistance and Ohm's Law

For an ohmic resistor,

$$
\Delta V = IR.
$$

The resistance of a uniform wire is

$$
R = \rho\frac{L}{A},
$$

where $$\rho$$ is resistivity, $$L$$ is length, and $$A$$ is cross-sectional area.

Ohm's law is not a universal law of nature; it is a material/model relationship. Devices such as diodes, light bulbs over large temperature ranges, and capacitors are not simple ohmic resistors.

<div class="theorem-box">

**Proof (Resistance formula).** The microscopic form of Ohm's law relates the current density $$\vec J$$ to the electric field inside the conductor through the conductivity $$\sigma_c$$:

$$
\vec J = \sigma_c \vec E.
$$

Take a uniform wire of length $$L$$ and cross-sectional area $$A$$ carrying current $$I$$. The current density has magnitude

$$
J = \frac{I}{A},
$$

and a steady, uniform field along the wire produces a potential difference

$$
\Delta V = E L \;\Rightarrow\; E = \frac{\Delta V}{L}.
$$

Substitute both into $$J = \sigma_c E$$:

$$
\frac{I}{A} = \sigma_c \frac{\Delta V}{L}.
$$

Solve for $$\Delta V$$ and write resistivity as $$\rho = 1/\sigma_c$$:

$$
\Delta V = \frac{L}{\sigma_c A}\,I = \frac{\rho L}{A}\,I.
$$

Comparing with the macroscopic Ohm's law $$\Delta V = IR$$ identifies

$$
R = \frac{\rho L}{A}.
$$

Resistance grows with length (carriers travel farther through scattering) and shrinks with cross-section (more parallel paths for charge).

</div>

---

## Power in Circuits

Power is energy per time. For a circuit element,

$$
P = I\Delta V.
$$

For an ohmic resistor, combine with $$\Delta V=IR$$:

$$
P=I^2R
$$

and

$$
P=\frac{(\Delta V)^2}{R}.
$$

Resistors convert electrical energy into thermal energy. Batteries or power supplies can deliver energy to charges by raising their electric potential.

<div class="theorem-box">

**Example.** An ideal $$24\ \text{V}$$ battery is connected to $$R_1 = 8\ \Omega$$ in series with a parallel pair $$R_2 = 12\ \Omega$$ and $$R_3 = 6\ \Omega$$. Find the power dissipated in each resistor and the total power delivered by the battery, and verify energy conservation.

First the equivalent resistance. The parallel pair gives

$$
\frac{1}{R_{23}} = \frac{1}{12} + \frac{1}{6} = \frac{1}{12} + \frac{2}{12} = \frac{3}{12}, \qquad R_{23} = 4\ \Omega,
$$

so $$R_{\text{eq}} = 8 + 4 = 12\ \Omega$$ and the battery current is $$I = 24/12 = 2\ \text{A}$$. This full current flows through $$R_1$$, while the parallel section sees $$\Delta V_{23} = I R_{23} = (2)(4) = 8\ \text{V}$$. Now compute the power in each resistor.

$$
P_1 = I^2 R_1 = (2)^2(8) = 32\ \text{W},
$$

$$
P_2 = \frac{(\Delta V_{23})^2}{R_2} = \frac{8^2}{12} = \frac{64}{12} \approx 5.33\ \text{W},
$$

$$
P_3 = \frac{(\Delta V_{23})^2}{R_3} = \frac{8^2}{6} = \frac{64}{6} \approx 10.67\ \text{W}.
$$

The total power delivered by the battery is

$$
P_{\text{battery}} = \mathcal{E} I = (24)(2) = 48\ \text{W}.
$$

Summing the dissipation,

$$
\sum P_{\text{resistors}} = 32 + 5.33 + 10.67 = 48\ \text{W} = P_{\text{battery}}.
$$

Energy is conserved: every joule per second the battery delivers is dissipated as heat in the resistors. Note the smaller parallel resistor $$R_3$$ dissipates more power, since at equal voltage $$P = (\Delta V)^2/R$$ grows as $$R$$ shrinks.

</div>

---

## Resistors in Series and Parallel

For resistors in series, current is the same through each resistor and voltage drops add:

$$
R_{\text{eq}}=R_1+R_2+R_3+\cdots.
$$

For resistors in parallel, voltage is the same across each branch and currents add:

$$
\frac{1}{R_{\text{eq}}}=\frac{1}{R_1}+\frac{1}{R_2}+\frac{1}{R_3}+\cdots.
$$

Adding a parallel branch lowers the equivalent resistance because it gives charge another path.


```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (-4,1) -- (-3,1) to[R=$R_1$] (-1.5,1) to[R=$R_2$] (0,1) -- (0,1); \node at (-2,1.8) {series};
\draw[thick] (1,1) -- (1.6,1) -- (1.6,1.8) to[R=$R_1$] (3.6,1.8) -- (3.6,1) -- (4.2,1);
\draw[thick] (1.6,1) -- (1.6,0.2) to[R=$R_2$] (3.6,0.2) -- (3.6,1); \node at (2.6,-0.45) {parallel};
\end{tikzpicture}
```


<div class="theorem-box">

**Proof (Resistors in Series and Parallel).** In series, the same current $$I$$ passes through each resistor. The total voltage drop is

$$
\Delta V_{\text{tot}}=\Delta V_1+\Delta V_2+\cdots=IR_1+IR_2+\cdots.
$$

Since $$\Delta V_{\text{tot}}=IR_{\text{eq}}$$,

$$
R_{\text{eq}}=R_1+R_2+\cdots.
$$

In parallel, each branch has the same voltage $$\Delta V$$. The total current is

$$
I_{\text{tot}}=I_1+I_2+\cdots=\frac{\Delta V}{R_1}+\frac{\Delta V}{R_2}+\cdots.
$$

Since $$I_{\text{tot}}=\Delta V/R_{\text{eq}}$$,

$$
\frac{\Delta V}{R_{\text{eq}}}=\Delta V\left(\frac{1}{R_1}+\frac{1}{R_2}+\cdots\right).
$$

Cancel $$\Delta V$$:

$$
\frac{1}{R_{\text{eq}}}=\frac{1}{R_1}+\frac{1}{R_2}+\cdots.
$$

</div>

### Voltage and current division

For series resistors carrying the same current, the total voltage divides in proportion to resistance:

$$
\Delta V_k=\Delta V_{\text{tot}}\frac{R_k}{\sum_iR_i}.
$$

For two parallel resistors carrying total current $$I$$, current divides inversely with resistance:

$$
I_1=I\frac{R_2}{R_1+R_2},
\qquad
I_2=I\frac{R_1}{R_1+R_2}.
$$

The resistor example below uses both shortcuts: voltage division locates the drop across the series parts, and current division predicts that the smaller parallel resistance carries the larger current.

<div class="theorem-box">

**Example.** A $$12\ \text{V}$$ battery (ideal) drives the network below: $$R_1 = 4\ \Omega$$ in series with a parallel combination of $$R_2 = 6\ \Omega$$ and $$R_3 = 3\ \Omega$$. Find the equivalent resistance, the total current from the battery, and the current through and voltage across each resistor.


```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (0,0) to[battery1,l=$\mathcal E$] (0,2) -- (1.2,2) to[R=$R_1$] (3,2) -- (4,2);
\draw[thick] (4,2) -- (4,1.2) to[R=$R_2$] (4,0.1) -- (4,0);
\draw[thick] (4,2) -- (5.4,2) to[R=$R_3$] (5.4,0) -- (4,0) -- (0,0);
\node at (3,-0.6) {$R_2$ and $R_3$ in parallel, then series with $R_1$};
\end{tikzpicture}
```


First reduce the parallel pair $$R_2 \parallel R_3$$:

$$
\frac{1}{R_{23}} = \frac{1}{6} + \frac{1}{3} = \frac{1}{6} + \frac{2}{6} = \frac{3}{6} = \frac{1}{2}, \qquad R_{23} = 2\ \Omega.
$$

Now $$R_1$$ and $$R_{23}$$ are in series:

$$
R_{\text{eq}} = R_1 + R_{23} = 4 + 2 = 6\ \Omega.
$$

The total current leaving the battery follows from $$\Delta V = I R_{\text{eq}}$$:

$$
I = \frac{\mathcal{E}}{R_{\text{eq}}} = \frac{12\ \text{V}}{6\ \Omega} = 2\ \text{A}.
$$

All of this current passes through the series resistor $$R_1$$, so $$I_1 = 2\ \text{A}$$ and

$$
\Delta V_1 = I_1 R_1 = (2)(4) = 8\ \text{V}.
$$

That leaves $$12 - 8 = 4\ \text{V}$$ across the parallel section, which checks against $$\Delta V_{23} = I R_{23} = (2)(2) = 4\ \text{V}$$. Since $$R_2$$ and $$R_3$$ share this same $$4\ \text{V}$$:

$$
I_2 = \frac{\Delta V_{23}}{R_2} = \frac{4}{6} \approx 0.67\ \text{A}, \qquad I_3 = \frac{\Delta V_{23}}{R_3} = \frac{4}{3} \approx 1.33\ \text{A}.
$$

As a consistency check, $$I_2 + I_3 = 0.67 + 1.33 = 2\ \text{A} = I$$, exactly the current that entered the junction. The smaller resistor $$R_3$$ carries the larger share of the current, as expected for parallel branches.

</div>

---

## Kirchhoff's Rules

Kirchhoff's junction rule is conservation of charge:

$$
\sum I_{\text{in}}=\sum I_{\text{out}}.
$$

Kirchhoff's loop rule is conservation of energy:

$$
\sum \Delta V = 0
$$

around any closed loop.

- Traversing a resistor in the direction of current: potential change is $$-IR$$.
- Traversing a resistor against the current: potential change is $$+IR$$.
- Crossing an ideal battery from the negative to the positive terminal: potential change is $$+\mathcal{E}$$.

<div class="theorem-box">

**Example.** A two-loop circuit has two batteries. The left branch contains $$\mathcal{E}_1 = 12\ \text{V}$$ in series with $$R_1 = 2\ \Omega$$; the right branch contains $$\mathcal{E}_2 = 6\ \text{V}$$ in series with $$R_2 = 3\ \Omega$$; both branches share a middle resistor $$R_3 = 6\ \Omega$$ that connects the two junctions. Find the current in each branch.


```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (0,0) to[battery1,l=$\mathcal E$] (0,3) to[R=$R_1$] (3,3) to[R=$R_2$] (6,3) -- (6,0) to[R=$R_3$] (3,0) to[R=$R_4$] (0,0);
\draw[thick] (3,3) -- (3,0);
\draw[->, blue, thick] (1.3,1.7) arc[start angle=160,end angle=-120,radius=0.6] node[left] {$I_1$};
\draw[->, red, thick] (4.7,1.7) arc[start angle=20,end angle=300,radius=0.6] node[right] {$I_2$};
\end{tikzpicture}
```


**Label and assume directions.** Let $$I_1$$ flow down the left branch toward the top junction, $$I_2$$ flow down the right branch toward the same junction, and $$I_3$$ flow out of that junction down through the middle resistor. (If a guessed direction is wrong, its current just comes out negative — the algebra self-corrects.)

**Junction rule** at the top node:

$$
I_1 + I_2 = I_3.
$$

**Loop rule, left loop** (through $$\mathcal{E}_1$$, $$R_1$$, and $$R_3$$). Going around in the direction of $$I_1$$, we gain $$+\mathcal{E}_1$$ crossing the battery from $$-$$ to $$+$$, drop $$-I_1 R_1$$ across $$R_1$$, and drop $$-I_3 R_3$$ across the shared resistor:

$$
\mathcal{E}_1 - I_1 R_1 - I_3 R_3 = 0 \;\Rightarrow\; 12 - 2I_1 - 6I_3 = 0.
$$

**Loop rule, right loop** (through $$\mathcal{E}_2$$, $$R_2$$, and $$R_3$$):

$$
\mathcal{E}_2 - I_2 R_2 - I_3 R_3 = 0 \;\Rightarrow\; 6 - 3I_2 - 6I_3 = 0.
$$

**Solve.** Substitute $$I_3 = I_1 + I_2$$ into both loop equations:

$$
12 - 2I_1 - 6(I_1 + I_2) = 0 \;\Rightarrow\; 12 = 8I_1 + 6I_2,
$$

$$
6 - 3I_2 - 6(I_1 + I_2) = 0 \;\Rightarrow\; 6 = 6I_1 + 9I_2.
$$

From the second equation, $$2 = 2I_1 + 3I_2$$, so $$I_1 = 1 - \tfrac{3}{2}I_2$$. Substitute into $$12 = 8I_1 + 6I_2$$:

$$
12 = 8\left(1 - \tfrac{3}{2}I_2\right) + 6I_2 = 8 - 12I_2 + 6I_2 = 8 - 6I_2,
$$

so $$6I_2 = 8 - 12 = -4$$, giving $$I_2 = -\tfrac{2}{3}\ \text{A} \approx -0.67\ \text{A}$$. The negative sign means the current in the right branch actually flows opposite to the assumed direction. Then

$$
I_1 = 1 - \tfrac{3}{2}\left(-\tfrac{2}{3}\right) = 1 + 1 = 2\ \text{A}, \qquad I_3 = I_1 + I_2 = 2 - \tfrac{2}{3} = \tfrac{4}{3}\ \text{A} \approx 1.33\ \text{A}.
$$

So battery 1 drives $$2\ \text{A}$$ down its branch, $$1.33\ \text{A}$$ flows through the middle resistor, and the second battery is being charged: current is pushed *into* its $$+$$ terminal against its emf.

</div>

---

## Batteries and Internal Resistance

An ideal battery maintains a fixed emf $$\mathcal{E}$$. A real battery can be modeled as an ideal emf in series with internal resistance $$r$$. When delivering current $$I$$, its terminal voltage is

$$
V_{\text{terminal}}=\mathcal{E}-Ir.
$$

When charging a battery, current enters the positive terminal and the terminal voltage can exceed the emf.

<div class="theorem-box">

**Example.** A battery has emf $$\mathcal{E} = 9.0\ \text{V}$$ and internal resistance $$r = 1.0\ \Omega$$. It is connected to a load resistor $$R = 5.0\ \Omega$$. Find the current, the terminal voltage, and the power delivered to the load.

The emf drives current through the series combination of $$r$$ and $$R$$, so

$$
I = \frac{\mathcal{E}}{R + r} = \frac{9.0}{5.0 + 1.0} = \frac{9.0}{6.0} = 1.5\ \text{A}.
$$

The terminal voltage is the emf minus the drop across the internal resistance:

$$
V_{\text{terminal}} = \mathcal{E} - Ir = 9.0 - (1.5)(1.0) = 7.5\ \text{V}.
$$

This $$7.5\ \text{V}$$ is exactly what appears across the external load, so the power delivered to the load is

$$
P_R = I^2 R = (1.5)^2(5.0) = 11.25\ \text{W},
$$

or equivalently $$P_R = I\,V_{\text{terminal}} = (1.5)(7.5) = 11.25\ \text{W}$$. The internal resistance wastes $$P_r = I^2 r = (1.5)^2(1.0) = 2.25\ \text{W}$$ inside the battery, and the total $$\mathcal{E}I = (9.0)(1.5) = 13.5\ \text{W}$$ splits as $$11.25 + 2.25\ \text{W}$$.

**Maximum power transfer.** The power delivered to the load is

$$
P_R = I^2 R = \frac{\mathcal{E}^2 R}{(R+r)^2}.
$$

Maximizing over $$R$$, set $$dP_R/dR = 0$$. Using the quotient rule, the numerator of the derivative is $$\mathcal{E}^2[(R+r)^2 - R\cdot 2(R+r)] = \mathcal{E}^2(R+r)(r - R)$$, which vanishes when $$R = r$$. So a source delivers maximum power to its load when the load resistance equals the internal resistance. (Here $$R = 5\ \Omega \ne r$$, so this load is not at the maximum-transfer point; matching to $$R = 1\ \Omega$$ would maximize $$P_R$$, though at lower efficiency.)

</div>

---

## RC Circuits

An RC circuit contains a resistor and capacitor. The product

$$
\tau = RC
$$

is the time constant.

For a charging capacitor connected to a battery of emf $$\mathcal{E}$$,

$$
Q(t)=C\mathcal{E}\left(1-e^{-t/RC}\right),
$$

$$
V_C(t)=\mathcal{E}\left(1-e^{-t/RC}\right),
$$

and

$$
I(t)=\frac{\mathcal{E}}{R}e^{-t/RC}.
$$

The capacitor initially behaves like a wire with zero voltage across it, then eventually like an open circuit.

For discharging from initial charge $$Q_0$$,

$$
Q(t)=Q_0e^{-t/RC},
$$

$$
V_C(t)=V_0e^{-t/RC},
$$

and

$$
I(t)=-\frac{V_0}{R}e^{-t/RC}
$$

if positive current is defined in the original charging direction.


```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (0,0) to[battery1,l=$\mathcal E$] (0,2.5) to[closing switch] (1.7,2.5) to[R=$R$] (3.5,2.5) to[C=$C$] (3.5,0) -- (0,0);
\node at (2,-0.6) {charging capacitor};
\end{tikzpicture}
```


---

## Differential Equation View of RC Circuits

For charging, Kirchhoff's loop rule gives

$$
\mathcal{E}-IR-\frac{Q}{C}=0.
$$

Since $$I=dQ/dt$$,

$$
R\frac{dQ}{dt}+\frac{Q}{C}=\mathcal{E}.
$$

The solution approaches the steady-state charge $$Q_{\infty}=C\mathcal{E}$$ exponentially.

<div class="theorem-box">

**Proof (Charging RC Formula).** For a charging RC circuit,

$$
R\frac{dQ}{dt}+\frac{Q}{C}=\mathcal{E}.
$$

Rearrange:

$$
\frac{dQ}{dt}=\frac{C\mathcal{E}-Q}{RC}.
$$

Separate variables:

$$
\frac{dQ}{C\mathcal{E}-Q}=\frac{dt}{RC}.
$$

Integrate from $$Q=0$$ at $$t=0$$ to charge $$Q$$ at time $$t$$:

$$
\int_0^Q \frac{dQ'}{C\mathcal{E}-Q'}=\int_0^t \frac{dt'}{RC}.
$$

The left side is

$$
-\ln(C\mathcal{E}-Q)+\ln(C\mathcal{E}).
$$

So

$$
\ln\left(\frac{C\mathcal{E}}{C\mathcal{E}-Q}\right)=\frac{t}{RC}.
$$

Exponentiate and solve for $$Q$$:

$$
Q(t)=C\mathcal{E}\left(1-e^{-t/RC}\right).
$$

Then $$V_C=Q/C$$ and $$I=dQ/dt$$ give

$$
V_C(t)=\mathcal{E}\left(1-e^{-t/RC}\right),
$$

$$
I(t)=\frac{\mathcal{E}}{R}e^{-t/RC}.
$$

</div>

<div class="theorem-box">

**Example.** A capacitor $$C = 100\ \mu\text{F}$$ charges through a resistor $$R = 20\ \text{k}\Omega$$ from an emf $$\mathcal{E} = 12\ \text{V}$$. Find the time constant; the charge, capacitor voltage, and current at $$t = \tau$$ and at $$t = 2\tau$$; and the time to reach $$90\%$$ of full charge.

The time constant is

$$
\tau = RC = (20\,000\ \Omega)(100\times 10^{-6}\ \text{F}) = 2.0\ \text{s}.
$$

The final charge is $$Q_\infty = C\mathcal{E} = (100\times 10^{-6})(12) = 1.2\times 10^{-3}\ \text{C} = 1.2\ \text{mC}$$, and the initial current is $$I_0 = \mathcal{E}/R = 12/20\,000 = 0.60\ \text{mA}$$.

**At $$t = \tau$$** ($$e^{-1} \approx 0.368$$):

$$
Q = Q_\infty(1 - e^{-1}) = 1.2(0.632) \approx 0.76\ \text{mC},
$$

$$
V_C = \mathcal{E}(1 - e^{-1}) = 12(0.632) \approx 7.6\ \text{V}, \qquad I = I_0 e^{-1} = 0.60(0.368) \approx 0.22\ \text{mA}.
$$

**At $$t = 2\tau$$** ($$e^{-2} \approx 0.135$$):

$$
Q = 1.2(1 - 0.135) \approx 1.04\ \text{mC}, \quad V_C = 12(0.865) \approx 10.4\ \text{V}, \quad I = 0.60(0.135) \approx 0.081\ \text{mA}.
$$

**Time to $$90\%$$ charge.** Set $$Q/Q_\infty = 0.90$$ and invert $$Q = Q_\infty(1 - e^{-t/RC})$$:

$$
t = -RC\ln\!\left(1 - \frac{Q}{Q_\infty}\right) = -(2.0)\ln(1 - 0.90) = -(2.0)\ln(0.10) \approx (2.0)(2.303) \approx 4.6\ \text{s}.
$$

That is about $$2.3\tau$$ — a useful rule of thumb is that a capacitor reaches roughly $$95\%$$ of full charge after $$3\tau$$ and is effectively fully charged after about $$5\tau$$.

</div>

<div class="theorem-box">

**Example.** A charged capacitor discharges through a resistor with $$Q(t) = Q_0 e^{-t/RC}$$. How long until the charge falls to half its initial value?

Set $$Q(t_{1/2}) = \tfrac{1}{2}Q_0$$:

$$
\tfrac{1}{2}Q_0 = Q_0 e^{-t_{1/2}/RC} \;\Rightarrow\; e^{-t_{1/2}/RC} = \tfrac{1}{2}.
$$

Take the natural log:

$$
-\frac{t_{1/2}}{RC} = \ln\tfrac{1}{2} = -\ln 2 \;\Rightarrow\; t_{1/2} = RC\ln 2 \approx 0.693\,RC.
$$

The half-life is a fixed fraction of $$\tau$$ regardless of the starting charge, exactly like radioactive decay. For the $$\tau = 2.0\ \text{s}$$ circuit above, $$t_{1/2} = 2.0\ln 2 \approx 1.39\ \text{s}$$.

</div>

For discharging,

$$
R\frac{dQ}{dt}+\frac{Q}{C}=0,
$$

which gives exponential decay.

<div class="theorem-box">

**Proof (Discharging RC Formula).** For discharging,

$$
R\frac{dQ}{dt}+\frac{Q}{C}=0.
$$

Rearrange:

$$
\frac{dQ}{dt}=-\frac{Q}{RC}.
$$

Separate variables:

$$
\frac{dQ}{Q}=-\frac{dt}{RC}.
$$

Integrate:

$$
\ln Q=-\frac{t}{RC}+C_1.
$$

Exponentiating gives

$$
Q=Ae^{-t/RC}.
$$

Using $$Q(0)=Q_0$$ sets $$A=Q_0$$, so

$$
Q(t)=Q_0e^{-t/RC}.
$$

</div>

<div class="theorem-box">

**Example.** An initially uncharged capacitor $$C$$ sits in parallel with a resistor $$R_2 = 6\ \Omega$$; that combination is in series with $$R_1 = 4\ \Omega$$ and an ideal $$\mathcal{E} = 20\ \text{V}$$ battery. The switch closes at $$t = 0$$. Find the current from the battery and the current through $$R_2$$ both immediately after closing and a long time later.

The trick is to use the two limiting behaviors of a capacitor:

- **At $$t = 0^+$$** an uncharged capacitor has zero voltage across it, so it behaves like a plain wire (a short). All the current entering the parallel section flows through the capacitor branch, bypassing $$R_2$$. The circuit is then just $$\mathcal{E}$$ across $$R_1$$:

$$
I_{\text{battery}}(0) = \frac{\mathcal{E}}{R_1} = \frac{20}{4} = 5\ \text{A}, \qquad I_{R_2}(0) = 0.
$$

Because the capacitor short-circuits $$R_2$$, no current is "wasted" in $$R_2$$ at the first instant.

- **At $$t \to \infty$$** the capacitor is fully charged, no more charge flows onto it, so $$dQ/dt = 0$$ and its branch carries zero current — it behaves like an open circuit. Now all the current must flow through $$R_2$$, and the circuit is $$R_1$$ in series with $$R_2$$:

$$
I_{\text{battery}}(\infty) = \frac{\mathcal{E}}{R_1 + R_2} = \frac{20}{4 + 6} = 2\ \text{A} = I_{R_2}(\infty).
$$

The steady-state capacitor voltage equals the voltage across $$R_2$$: $$V_C = I_{R_2}R_2 = (2)(6) = 12\ \text{V}$$, so the final stored charge is $$Q_\infty = C V_C = 12C$$.

The two limits — **capacitor as a wire at $$t = 0$$, capacitor as an open branch as $$t\to\infty$$** — let you read off the start and end states of any RC circuit without solving the differential equation, which is exactly what most AP free-response questions ask for.

</div>

---

## Meters

An ideal ammeter has zero resistance and is placed in series with the element whose current is measured. An ideal voltmeter has infinite resistance and is placed in parallel across the element whose potential difference is measured.


```tikz
\usepackage{circuitikz}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (0,0) to[battery1] (0,2) to[ammeter,l=$A$] (2,2) to[R=$R$] (4,2) -- (4,0) -- (0,0);
\draw[thick] (2,2) -- (2,3) to[voltmeter,l=$V$] (4,3) -- (4,2);
\node at (2,-0.6) {ammeter in series, voltmeter in parallel};
\end{tikzpicture}
```


Real meters disturb circuits slightly: an ammeter adds small series resistance, and a voltmeter draws small parallel current.

---

:::equations
| Idea | Equation |
| --- | --- |
| Current as charge flow | $$I = \dfrac{dQ}{dt}$$ |
| Microscopic (drift) current | $$I = nqAv_d$$ |
| Ohm's law | $$\Delta V = IR$$ |
| Resistance of a wire | $$R = \dfrac{\rho L}{A}$$ |
| Power in an element | $$P = I\Delta V = I^2 R = \dfrac{(\Delta V)^2}{R}$$ |
| Resistors in series | $$R_{\text{eq}} = R_1 + R_2 + \cdots$$ |
| Resistors in parallel | $$\dfrac{1}{R_{\text{eq}}} = \dfrac{1}{R_1} + \dfrac{1}{R_2} + \cdots$$ |
| Junction rule (charge) | $$\sum I_{\text{in}} = \sum I_{\text{out}}$$ |
| Loop rule (energy) | $$\sum \Delta V = 0$$ |
| Terminal voltage | $$V_{\text{terminal}} = \mathcal{E} - Ir$$ |
| Time constant | $$\tau = RC$$ |
| Charging capacitor | $$Q(t) = C\mathcal{E}\left(1 - e^{-t/RC}\right)$$ |
| Charging current | $$I(t) = \dfrac{\mathcal{E}}{R}e^{-t/RC}$$ |
| Discharging capacitor | $$Q(t) = Q_0 e^{-t/RC}$$ |
| Discharge half-life | $$t_{1/2} = RC\ln 2$$ |
:::

## Practice

### FRQ

::::frq{id=ap-physics-c-em-circuits-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
