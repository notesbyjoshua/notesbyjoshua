---
title: "Unit 6: Electromagnetic Induction"
next: false
sidebar:
  order: 6
---

---

Electromagnetic induction describes how changing magnetic flux produces electric fields and emf. It connects magnetism to circuits and gives the physical basis for generators, transformers, inductors, and electromagnetic waves.

---

:::variables
- $$\Phi_B$$ = magnetic flux (Units: webers, $$\text{Wb} = \text{T}\cdot\text{m}^2$$)
- $$\mathcal{E}$$ = induced emf (Units: volts, $$\text{V}$$)
- $$N$$ = number of turns in a coil
- $$L$$ = inductance (Units: henries, $$\text{H} = \text{V}\cdot\text{s/A}$$)
- $$I$$ = current (Units: amperes, $$\text{A}$$)
- $$U_B$$ = magnetic field energy (Units: joules, $$\text{J}$$)
- $$u_B$$ = magnetic energy density (Units: $$\text{J/m}^3$$)
- $$\tau$$ = time constant (Units: seconds, $$\text{s}$$)
- $$\omega$$ = angular frequency (Units: $$\text{rad/s}$$)
:::

---

## Faraday's Law

Magnetic flux is

$$
\Phi_B=\int \vec{B}\cdot d\vec{A}.
$$

For a uniform field through a flat loop of area $$A$$, this is just $$\Phi_B = BA\cos\theta$$, where $$\theta$$ is the angle between $$\vec{B}$$ and the area normal $$\hat{n}$$.


Faraday's law says the induced emf around a loop is

$$
\mathcal{E}=-\frac{d\Phi_B}{dt}.
$$

For a coil with $$N$$ turns,

$$
\mathcal{E}=-N\frac{d\Phi_B}{dt}.
$$

Changing flux can come from changing magnetic field strength, changing loop area, changing the angle between field and area vector, or moving a circuit through a nonuniform field.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (0,0) circle (1.2); \foreach \x/\y in {-0.7/0.4,0/0.2,0.7/0.4,-0.4/-0.4,0.4/-0.5}{\node at (\x,\y) {$\times$};}
\draw[->, blue, thick] (1.4,0) arc[start angle=0,end angle=300,radius=1.4] node[right] {induced current}; \node at (0,-1.8) {changing magnetic flux induces emf};
\end{tikzpicture}
```



<div class="theorem-box">

**Example.** A circular coil of $$N = 200$$ turns and radius $$r = 5.0\ \text{cm}$$ lies in a uniform magnetic field perpendicular to the plane of the coil. The field increases steadily from $$0.10\ \text{T}$$ to $$0.60\ \text{T}$$ in $$0.20\ \text{s}$$. Find the magnitude of the induced emf.

The area is fixed and $$\vec{B}$$ is along the normal ($$\theta = 0$$), so the only thing changing is $$B$$. The flux through one turn is $$\Phi_B = BA$$, so

$$
\mathcal{E} = N A\,\frac{dB}{dt} = N\big(\pi r^2\big)\frac{\Delta B}{\Delta t}.
$$

The area is $$A = \pi(0.050)^2 = 7.85\times 10^{-3}\ \text{m}^2$$, and the rate of change is

$$
\frac{\Delta B}{\Delta t} = \frac{0.60 - 0.10}{0.20} = 2.5\ \text{T/s}.
$$

Therefore

$$
\mathcal{E} = (200)(7.85\times 10^{-3})(2.5) \approx 3.9\ \text{V}.
$$

Each turn contributes the same $$d\Phi_B/dt$$, so the $$N$$ turns multiply the emf — this is why coils, not single loops, are used in real devices.

</div>

<div class="theorem-box">

**Example.** A conducting loop in the shape of a square sits in a uniform field $$B = 0.40\ \text{T}$$ pointing into the page. The loop is stretched so that its side length grows at $$\dfrac{d s}{dt} = 0.030\ \text{m/s}$$ at the instant the side is $$s = 0.20\ \text{m}$$. Find the induced emf.

Here $$B$$ is constant but the area $$A = s^2$$ changes. The flux is $$\Phi_B = B s^2$$, so

$$
\mathcal{E} = \left|\frac{d\Phi_B}{dt}\right| = B\,\frac{d(s^2)}{dt} = B\,(2s)\frac{ds}{dt}.
$$

Plugging in,

$$
\mathcal{E} = (0.40)(2)(0.20)(0.030) = 4.8\times 10^{-3}\ \text{V} = 4.8\ \text{mV}.
$$

The flux can change because $$B$$ changes, because the area changes, or because the orientation changes; Faraday's law treats all three identically through $$d\Phi_B/dt$$.

</div>

---

## Lenz's Law

The negative sign in Faraday's law is **Lenz's law**: the induced current produces a magnetic effect that opposes the change in flux that caused it.

Lenz's law is conservation of energy in disguise. If induced currents helped the flux change instead of opposing it, systems could generate energy from nothing.

:::strategy
1. Identify whether the magnetic flux through the loop is increasing or decreasing.
2. Decide what magnetic field direction the induced current must create to oppose that change.
3. Use the right-hand rule for loops to get current direction.
:::

<div class="theorem-box">

**Example.** A circular loop lies flat in the plane of the page with a magnetic field pointing **into** the page passing through it. Find the direction of the induced current in two cases:

**Case 1 — field increasing.** The into-the-page flux is growing. The induced current must oppose the increase, so it must create a field pointing **out of the page** inside the loop. By the right-hand rule (curl fingers in the current direction, thumb points along the field the loop makes), the induced current flows **counterclockwise**.

**Case 2 — field decreasing.** Now the into-the-page flux is shrinking. The induced current must oppose the decrease, so it tries to *maintain* the into-the-page field — it creates a field **into the page** inside the loop. By the right-hand rule, the induced current flows **clockwise**.

The rule of thumb: the induced current always "fights the change." It reinforces a vanishing field and opposes a growing one. Note that the current opposes the *change* in flux, not the flux itself.

</div>

<div class="theorem-box">

**Example.** A bar magnet is pushed with its north pole first toward a stationary conducting ring. As the magnet approaches, the flux through the ring (pointing away from the magnet's north pole, toward the ring) increases.

By Lenz's law, the ring's induced current opposes the increase, so the ring acts like a magnet presenting a **north pole** back toward the incoming magnet — like poles repel, so the ring pushes the magnet away. Conversely, if the magnet is pulled away, the flux decreases and the ring presents a **south pole** to attract it, again opposing the motion. In both cases the induced current resists the relative motion, and the work done against that resistance is exactly the electrical energy dissipated in the ring — energy conservation made manifest.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[fill=gray!20] (-3,-0.5) rectangle (-1,0.5); \node at (-2,0.15) {N}; \node at (-2,-0.2) {S};
\draw[->, thick] (-0.8,0)--(0.6,0) node[midway,above] {motion};
\draw[thick] (2,0) circle (0.8); \draw[->, blue, thick] (2.8,0) arc[start angle=0,end angle=300,radius=0.8]; \node at (2,-1.25) {induced field opposes change};
\end{tikzpicture}
```


</div>

---

## Motional Emf

A conducting rod of length $$\ell$$ moving with speed $$v$$ perpendicular to a magnetic field has motional emf

$$
\mathcal{E}=B\ell v.
$$

This comes from the magnetic force on charges in the rod:

$$
\vec{F}_B=q\vec{v}\times\vec{B}.
$$

Charges separate until the electric force balances the magnetic force:

$$
qE=qvB.
$$

Since $$\mathcal{E}=E\ell$$, the result is $$\mathcal{E}=B\ell v$$.

More generally,

$$
\mathcal{E}=\oint(\vec{v}\times\vec{B})\cdot d\vec{\ell}
$$

for moving conductors.

<div class="theorem-box">

**Example.** A conducting bar of length $$\ell = 0.50\ \text{m}$$ slides without friction at constant speed $$v = 4.0\ \text{m/s}$$ along two horizontal rails separated by $$\ell$$, in a uniform field $$B = 0.80\ \text{T}$$ pointing vertically (perpendicular to the plane of the rails). The rails are connected by a resistor $$R = 2.0\ \Omega$$. Find (a) the motional emf, (b) the induced current, (c) the retarding force on the bar, and (d) the power dissipated, and confirm it equals the mechanical power input.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick] (-3,1)--(3,1); \draw[thick] (-3,-1)--(3,-1); \draw[very thick, blue] (0,-1)--(0,1) node[above] {bar};
\foreach \x in {-2,-1,1,2}{\node at (\x,0) {$\times$};}
\draw[->, red, thick] (0.2,0)--(1.5,0) node[right] {$v$}; \draw[->, blue, thick] (-2.5,-1.2)--(-2.5,1.2) node[midway,left] {$I$};
\end{tikzpicture}
```


**(a) Motional emf.** The bar sweeps out area at rate $$\ell v$$, so the flux changes at rate $$d\Phi_B/dt = B\ell v$$:

$$
\mathcal{E} = B\ell v = (0.80)(0.50)(4.0) = 1.6\ \text{V}.
$$

**(b) Induced current.** With the loop resistance $$R$$,

$$
I = \frac{\mathcal{E}}{R} = \frac{1.6}{2.0} = 0.80\ \text{A}.
$$

**(c) Retarding force.** The current-carrying bar sits in the field, so it feels a force $$F = BI\ell$$. By Lenz's law this force opposes the motion (it points backward):

$$
F = BI\ell = (0.80)(0.80)(0.50) = 0.32\ \text{N}.
$$

**(d) Power balance.** To keep the bar moving at constant speed, an external agent must push with force $$F$$, delivering mechanical power

$$
P_{\text{mech}} = Fv = (0.32)(4.0) = 1.28\ \text{W}.
$$

The electrical power dissipated in the resistor is

$$
P_{\text{elec}} = I^2 R = (0.80)^2(2.0) = 1.28\ \text{W},
$$

equivalently $$P = \mathcal{E}I = (1.6)(0.80) = 1.28\ \text{W}$$. The mechanical work done against the magnetic braking force is converted exactly into electrical energy dissipated as heat — the bar is a tiny generator.

</div>

<div class="theorem-box">

**Example.** The same bar and rails are now tilted at angle $$\theta$$ so that gravity drives the bar down the incline, with the field $$B$$ still vertical. Find the terminal speed.

As the bar speeds up, the induced retarding force grows. Terminal velocity is reached when the net force is zero, i.e. the component of gravity along the incline balances the magnetic retarding force. The emf is $$\mathcal{E} = B_\perp \ell v$$ where $$B_\perp = B\cos\theta$$ is the field component perpendicular to the inclined plane, and the retarding force along the incline is $$F = B_\perp I\ell = \dfrac{B_\perp^2 \ell^2 v}{R}$$. Setting this equal to $$mg\sin\theta$$:

$$
mg\sin\theta = \frac{(B\cos\theta)^2 \ell^2\, v_{\text{term}}}{R}
\;\;\Rightarrow\;\;
v_{\text{term}} = \frac{mgR\sin\theta}{B^2\ell^2\cos^2\theta}.
$$

As before, at terminal velocity the gravitational power input $$mg v_{\text{term}}\sin\theta$$ equals the electrical power $$I^2 R$$ dissipated in the resistor.

</div>

---

## Rotating Loops and the AC Generator

A loop of $$N$$ turns and area $$A$$ rotating at constant angular velocity $$\omega$$ in a uniform field $$B$$ has a flux that varies sinusoidally. Taking $$\theta = \omega t$$ as the angle between $$\vec{B}$$ and the loop normal,

$$
\Phi_B = BA\cos(\omega t).
$$

By Faraday's law the emf is

$$
\mathcal{E} = -N\frac{d\Phi_B}{dt} = NBA\,\omega\sin(\omega t).
$$

The emf oscillates sinusoidally with peak value $$\mathcal{E}_0 = NBA\omega$$ — this is the principle of the AC generator.


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc,positioning,patterns,decorations.pathmorphing,angles,quotes}
\begin{tikzpicture}[>=Stealth, font=\small]
\draw[thick, rotate=20] (-1.2,-0.8) rectangle (1.2,0.8); \draw[->, blue, thick] (1.6,0) arc[start angle=0,end angle=300,radius=1.6];
\foreach \x in {-2.5,-1.5,1.5,2.5}{\draw[->, red] (\x,-1.4)--(\x,1.4);} \node at (0,-2) {$\Phi=BA\cos(\omega t)$, so emf is sinusoidal};
\end{tikzpicture}
```



<div class="theorem-box">

**Example.** A rectangular coil of $$N = 100$$ turns, area $$A = 0.020\ \text{m}^2$$, spins at $$f = 60\ \text{Hz}$$ in a uniform field $$B = 0.25\ \text{T}$$. Find the peak emf and write $$\mathcal{E}(t)$$.

The angular frequency is

$$
\omega = 2\pi f = 2\pi(60) \approx 377\ \text{rad/s}.
$$

The flux through the coil is $$\Phi_B = BA\cos(\omega t)$$, so the emf is $$\mathcal{E} = NBA\omega\sin(\omega t)$$. The peak emf is

$$
\mathcal{E}_0 = NBA\omega = (100)(0.25)(0.020)(377) \approx 188\ \text{V}.
$$

Thus

$$
\mathcal{E}(t) \approx (188\ \text{V})\sin\big[(377\ \text{rad/s})\,t\big].
$$

The emf is largest when the loop plane is *parallel* to $$\vec{B}$$ (the flux is momentarily zero but changing fastest), and zero when the loop plane is *perpendicular* to $$\vec{B}$$ (flux is maximal but momentarily stationary).

</div>

---

## Induced Current and Magnetic Braking

If a circuit has resistance $$R$$, induced current is

$$
I=\frac{\mathcal{E}}{R}.
$$

The induced current experiences magnetic forces that oppose the motion or flux change. This produces magnetic braking and eddy current damping. The mechanical power required to move a conductor through a magnetic field becomes electrical power and then usually thermal energy:

$$
P_{\text{mech}}=P_{\text{electric}}=I^2R
$$

in ideal steady cases.

---

## Induced Electric Fields

Changing magnetic flux creates a nonconservative electric field. The Maxwell-Faraday equation in integral form is

$$
\oint \vec{E}\cdot d\vec{\ell}=-\frac{d\Phi_B}{dt}.
$$

Unlike electrostatic fields, induced electric fields can have closed field lines. Because the field is nonconservative, a single scalar electric potential cannot fully describe it around a closed loop.


<div class="theorem-box">

**Example.** A long solenoid of radius $$r_0 = 4.0\ \text{cm}$$ has a uniform field along its axis that increases at $$\dfrac{dB}{dt} = 0.50\ \text{T/s}$$. Find the magnitude of the induced electric field at radius $$r = 2.0\ \text{cm}$$ from the axis (inside the solenoid).

By symmetry the induced $$\vec{E}$$ forms circles concentric with the axis, so $$\oint \vec{E}\cdot d\vec{\ell} = E(2\pi r)$$ around a circle of radius $$r$$. The flux enclosed is $$\Phi_B = B(\pi r^2)$$, so

$$
E(2\pi r) = \left|\frac{d\Phi_B}{dt}\right| = \pi r^2\frac{dB}{dt}
\;\;\Rightarrow\;\;
E = \frac{r}{2}\frac{dB}{dt}.
$$

Plugging in,

$$
E = \frac{0.020}{2}(0.50) = 5.0\times 10^{-3}\ \text{V/m}.
$$

The induced field grows linearly with $$r$$ inside the solenoid; this is the field that would drive a current in any loop placed there, even with no battery present.

</div>

---

## Inductance

An inductor stores energy in a magnetic field. Its inductance is defined by the flux linkage per current:


$$
N\Phi_B=LI.
$$

When current changes, the inductor produces a back emf:

$$
\mathcal{E}_L=-L\frac{dI}{dt}.
$$

The negative sign means the inductor opposes changes in current. It resists current changes, not current itself.

For a long ideal solenoid,

$$
L=\mu_0 n^2A\ell,
$$

where $$n=N/\ell$$ is turns per unit length, $$A$$ is cross-sectional area, and $$\ell$$ is solenoid length.

<div class="theorem-box">

**Proof (self-inductance of a long solenoid).** Inductance is defined by the flux linkage per unit current,

$$
L = \frac{N\Phi_B}{I}.
$$

Inside a long solenoid carrying current $$I$$, the field is essentially uniform with magnitude

$$
B = \mu_0 n I,
$$

where $$n = N/\ell$$ is the number of turns per unit length. Each of the $$N$$ turns encloses the same flux $$\Phi_B = BA = \mu_0 n I A$$, so the total flux linkage is

$$
N\Phi_B = (n\ell)(\mu_0 n I A) = \mu_0 n^2 A \ell\, I.
$$

Dividing by $$I$$ gives

$$
L = \frac{N\Phi_B}{I} = \mu_0 n^2 A \ell.
$$

The inductance depends only on geometry (turns density, area, length) and the medium — not on the current. Note $$A\ell$$ is the solenoid's volume, so $$L = \mu_0 n^2 \times (\text{volume})$$.

</div>

---

## Energy Stored in an Inductor

The energy stored in an inductor carrying current $$I$$ is

$$
U_B=\frac{1}{2}LI^2.
$$

The magnetic energy density is

$$
u_B=\frac{B^2}{2\mu_0}.
$$

This parallels capacitor energy:

$$
U_E=\frac{1}{2}CV^2, \qquad u_E=\frac{1}{2}\varepsilon_0E^2.
$$

<div class="theorem-box">

**Proof (energy stored in an inductor).** While the current is being built up, the inductor's back emf opposes the source, so the external source must do work against it. The instantaneous power delivered to the inductor is

$$
P = \mathcal{E}I = \left(L\frac{dI}{dt}\right)I = LI\,\frac{dI}{dt}.
$$

The total work done to raise the current from $$0$$ to a final value $$I$$ is

$$
U_B = \int P\,dt = \int_0^I L I'\,dI' = \frac{1}{2}LI^2.
$$

This energy is stored in the magnetic field and is recoverable — it returns to the circuit when the current decays.

</div>

<div class="theorem-box">

**Proof (magnetic energy density).** Apply the result to a long solenoid, where $$L = \mu_0 n^2 A\ell$$ and $$B = \mu_0 n I$$, so $$I = B/(\mu_0 n)$$. The stored energy is

$$
U_B = \frac{1}{2}LI^2 = \frac{1}{2}\big(\mu_0 n^2 A\ell\big)\left(\frac{B}{\mu_0 n}\right)^2
= \frac{1}{2}\frac{B^2}{\mu_0}\,A\ell.
$$

The field fills the solenoid's interior volume $$A\ell$$, so dividing by the volume gives the energy stored *per unit volume*:

$$
u_B = \frac{U_B}{A\ell} = \frac{B^2}{2\mu_0}.
$$

Although derived here for a solenoid, $$u_B = B^2/2\mu_0$$ holds for *any* magnetic field — energy is stored in the field itself, exactly mirroring the electric case $$u_E = \tfrac{1}{2}\varepsilon_0 E^2$$.

</div>

<div class="theorem-box">

**Example.** An inductor with $$L = 0.20\ \text{H}$$ carries a steady current of $$I = 3.0\ \text{A}$$. How much energy is stored in its magnetic field?

$$
U_B = \frac{1}{2}LI^2 = \frac{1}{2}(0.20)(3.0)^2 = 0.90\ \text{J}.
$$

If the current were doubled to $$6.0\ \text{A}$$, the stored energy would quadruple to $$3.6\ \text{J}$$, since $$U_B \propto I^2$$.

</div>

---

## LR Circuits

For a resistor and inductor in series connected to a battery,


$$
\mathcal{E}-IR-L\frac{dI}{dt}=0.
$$

The current grows as

$$
I(t)=\frac{\mathcal{E}}{R}\left(1-e^{-Rt/L}\right).
$$

The LR time constant is

$$
\tau=\frac{L}{R}.
$$

When the battery is removed and current decays through a resistor,

$$
I(t)=I_0e^{-Rt/L}.
$$

At the instant a switch changes, an ideal inductor prevents an instantaneous jump in current.


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[axis lines=left,width=8cm,height=5cm,xmin=0,xmax=6,ymin=0,ymax=1.2,xlabel={$t$},ylabel={$I$},xtick=\empty,ytick=\empty]
\addplot[blue,very thick,samples=160,domain=0:6]{1-exp(-x)}; \addplot[red,dashed,samples=160,domain=0:6]{exp(-x)};
\node[blue] at (axis cs:3,0.9) {growth}; \node[red] at (axis cs:1.2,0.45) {decay};
\end{axis}
\end{tikzpicture}
```


<div class="theorem-box">

**Proof (LR charging current).** The loop rule gives

$$
\mathcal{E} - IR - L\frac{dI}{dt} = 0
\;\;\Rightarrow\;\;
L\frac{dI}{dt} = \mathcal{E} - IR.
$$

Separate variables, putting all $$I$$-dependence on one side:

$$
\frac{dI}{\mathcal{E} - IR} = \frac{dt}{L}.
$$

Integrate from $$I = 0$$ at $$t = 0$$ to $$I$$ at time $$t$$. The left side integrates with $$\int \frac{dI}{\mathcal{E}-IR} = -\frac{1}{R}\ln(\mathcal{E}-IR)$$:

$$
-\frac{1}{R}\Big[\ln(\mathcal{E}-IR) - \ln(\mathcal{E})\Big] = \frac{t}{L}.
$$

Rearranging,

$$
\ln\!\left(\frac{\mathcal{E}-IR}{\mathcal{E}}\right) = -\frac{R}{L}t
\;\;\Rightarrow\;\;
\frac{\mathcal{E}-IR}{\mathcal{E}} = e^{-Rt/L}.
$$

Solving for $$I$$,

$$
I(t) = \frac{\mathcal{E}}{R}\left(1 - e^{-Rt/L}\right).
$$

At $$t = 0$$, $$I = 0$$ (the inductor blocks any instantaneous jump); as $$t\to\infty$$, $$I \to \mathcal{E}/R$$ (the inductor behaves like a plain wire once the current is steady, since $$dI/dt = 0$$). The time constant $$\tau = L/R$$ sets the timescale.

</div>

<div class="theorem-box">

**Proof (LR decay current).** With the battery removed and the inductor discharging through $$R$$, the loop rule has no source term:

$$
-IR - L\frac{dI}{dt} = 0
\;\;\Rightarrow\;\;
\frac{dI}{I} = -\frac{R}{L}\,dt.
$$

Integrating from the initial current $$I_0$$ gives

$$
\ln\!\left(\frac{I}{I_0}\right) = -\frac{R}{L}t
\;\;\Rightarrow\;\;
I(t) = I_0 e^{-Rt/L}.
$$

The current decays exponentially with the same time constant $$\tau = L/R$$. The inductor's stored energy $$\tfrac{1}{2}LI_0^2$$ is dissipated as heat in the resistor.

</div>

<div class="theorem-box">

**Example.** A series LR circuit has $$\mathcal{E} = 12\ \text{V}$$, $$R = 4.0\ \Omega$$, and $$L = 0.50\ \text{H}$$. Find the time constant, the final (steady) current, and the current at $$t = 0.125\ \text{s}$$.

The time constant is

$$
\tau = \frac{L}{R} = \frac{0.50}{4.0} = 0.125\ \text{s}.
$$

The final current is

$$
I_\infty = \frac{\mathcal{E}}{R} = \frac{12}{4.0} = 3.0\ \text{A}.
$$

At $$t = \tau$$, one time constant has elapsed, so

$$
I(\tau) = \frac{\mathcal{E}}{R}\left(1 - e^{-1}\right) = (3.0)(1 - 0.368) \approx 1.9\ \text{A}.
$$

After one time constant the current has reached about $$63\%$$ of its final value — the same $$(1 - e^{-1})$$ factor that appears in RC charging.

</div>

---

## LC Oscillations

An ideal capacitor-inductor circuit oscillates between electric field energy in the capacitor and magnetic field energy in the inductor:


$$
\frac{1}{2}\frac{Q^2}{C}+\frac{1}{2}LI^2=\text{constant}.
$$

The charge obeys

$$
\frac{d^2Q}{dt^2}+\frac{1}{LC}Q=0.
$$

Thus

$$
\omega=\frac{1}{\sqrt{LC}},
$$

and

$$
T=2\pi\sqrt{LC}.
$$

Resistance damps the oscillation by converting electromagnetic energy into thermal energy.


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{tikzpicture}
\begin{axis}[axis lines=left,width=8.5cm,height=5cm,xmin=0,xmax=6.28,ymin=-1.2,ymax=1.2,xlabel={$t$},ylabel={oscillation},xtick=\empty,ytick=\empty]
\addplot[blue,very thick,samples=160,domain=0:6.28]{cos(deg(x))}; \addplot[red,dashed,very thick,samples=160,domain=0:6.28]{sin(deg(x))};
\node[blue] at (axis cs:1,0.9) {$Q$}; \node[red] at (axis cs:2.5,0.9) {$I$};
\end{axis}
\end{tikzpicture}
```


<div class="theorem-box">

**Proof (LC oscillation as SHM).** Apply the loop rule to an inductor and capacitor in series. The capacitor voltage is $$Q/C$$ and the inductor's voltage is $$L\,dI/dt$$:

$$
\frac{Q}{C} + L\frac{dI}{dt} = 0.
$$

Since the current is the rate at which charge leaves the capacitor, $$I = -dQ/dt$$, so $$dI/dt = -d^2Q/dt^2$$. Substituting,

$$
\frac{Q}{C} - L\frac{d^2Q}{dt^2} = 0
\;\;\Rightarrow\;\;
\frac{d^2Q}{dt^2} + \frac{1}{LC}Q = 0.
$$

This is the simple-harmonic-oscillator equation $$\ddot{Q} + \omega^2 Q = 0$$ with

$$
\omega = \frac{1}{\sqrt{LC}}.
$$

The general solution, with the capacitor fully charged to $$Q_0$$ at $$t = 0$$ (so $$I = -\dot{Q} = 0$$ there), is

$$
Q(t) = Q_0\cos(\omega t),
$$

and the current is

$$
I(t) = -\frac{dQ}{dt} = Q_0\,\omega\sin(\omega t).
$$

The charge and current are $$90^\circ$$ out of phase: energy sloshes back and forth between the capacitor's electric field ($$\tfrac{1}{2}Q^2/C$$, maximal when $$I = 0$$) and the inductor's magnetic field ($$\tfrac{1}{2}LI^2$$, maximal when $$Q = 0$$), with the total constant. The period is

$$
T = \frac{2\pi}{\omega} = 2\pi\sqrt{LC}.
$$

</div>

<div class="theorem-box">

**Example.** An LC circuit has $$L = 2.0\ \text{mH}$$ and $$C = 8.0\ \mu\text{F}$$. Find the angular frequency, the oscillation frequency, and the period.

The angular frequency is

$$
\omega = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{(2.0\times 10^{-3})(8.0\times 10^{-6})}} = \frac{1}{\sqrt{1.6\times 10^{-8}}} \approx 7.9\times 10^{3}\ \text{rad/s}.
$$

The ordinary frequency is

$$
f = \frac{\omega}{2\pi} \approx \frac{7.9\times 10^3}{6.28} \approx 1.3\times 10^3\ \text{Hz} \approx 1.3\ \text{kHz},
$$

and the period is

$$
T = 2\pi\sqrt{LC} = \frac{2\pi}{\omega} \approx 7.9\times 10^{-4}\ \text{s} \approx 0.79\ \text{ms}.
$$

Smaller $$L$$ or $$C$$ means faster oscillation; this is exactly how LC circuits set the tuning frequency of a radio.

</div>

---

## Maxwell's Displacement Current

Ampere's law must be extended when electric flux changes. The full integral form is

$$
\oint \vec{B}\cdot d\vec{\ell}=\mu_0 I_{\text{enc}}+\mu_0\varepsilon_0\frac{d\Phi_E}{dt}.
$$

The extra term is the **displacement current** contribution. It lets changing electric fields produce magnetic fields, just as changing magnetic fields produce electric fields. Together these ideas lead to electromagnetic waves.

---

:::equations
| Idea | Equation |
| --- | --- |
| Magnetic flux | $$\Phi_B = \int \vec{B}\cdot d\vec{A} = BA\cos\theta$$ |
| Faraday's law ($$N$$ turns) | $$\mathcal{E} = -N\dfrac{d\Phi_B}{dt}$$ |
| Lenz's law (sign) | induced current opposes the change in $$\Phi_B$$ |
| Motional emf | $$\mathcal{E} = B\ell v$$ |
| Rotating loop / generator | $$\mathcal{E} = NBA\omega\sin(\omega t)$$, peak $$\mathcal{E}_0 = NBA\omega$$ |
| Induced E field circulation | $$\oint \vec{E}\cdot d\vec{\ell} = -\dfrac{d\Phi_B}{dt}$$ |
| Inductance definition | $$N\Phi_B = LI$$ |
| Back emf | $$\mathcal{E}_L = -L\dfrac{dI}{dt}$$ |
| Solenoid inductance | $$L = \mu_0 n^2 A\ell$$ |
| Inductor energy | $$U_B = \tfrac{1}{2}LI^2$$ |
| Magnetic energy density | $$u_B = \dfrac{B^2}{2\mu_0}$$ |
| LR charging current | $$I(t) = \dfrac{\mathcal{E}}{R}\left(1 - e^{-Rt/L}\right)$$ |
| LR time constant | $$\tau = \dfrac{L}{R}$$ |
| LC angular frequency | $$\omega = \dfrac{1}{\sqrt{LC}}$$ |
| LC period | $$T = 2\pi\sqrt{LC}$$ |
| Ampère–Maxwell law | $$\oint \vec{B}\cdot d\vec{\ell} = \mu_0 I_{\text{enc}} + \mu_0\varepsilon_0\dfrac{d\Phi_E}{dt}$$ |
:::

## Practice

### FRQ

::::frq{id=ap-physics-c-em-eminduction-1}
1. _Temporary placeholder FRQ for wiring/testing — replace with a real free-response question for this unit._

   $$(A)$$ State one key idea from this unit and explain it in your own words.

   $$(B)$$ Give a worked example or application of that idea.

:::solution
$$(A)$$ _Placeholder solution._ Any accurate statement of a core concept from this unit, with a correct explanation, earns full credit.

$$(B)$$ _Placeholder solution._ Any correct worked example or application consistent with part (A).
:::
::::
