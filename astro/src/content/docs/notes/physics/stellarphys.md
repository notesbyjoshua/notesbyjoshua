---
title: "Stellar Physics"
description: "Physics notes on stellar physics, including luminosity, spectra, stellar evolution, fusion, blackbody radiation, and classification."
sidebar:
  order: 8
---

---

> **[Image placeholder — star trails]** A long-exposure star-trail photo, circumpolar arcs about the celestial pole. Mostly decorative for the chapter opener.

---

## Light from stars

Almost everything we know about a star comes from the light it sends us. A star's surface radiates very nearly as a **blackbody**, so the thermal-radiation laws are the backbone of observational stellar physics. The microscopic justification (Planck's law, derived from summing photon modes in a cavity) lives in the [Quantum & Nuclear Physics](/notes/physics/quantnucphys/) notes; here we take the macroscopic results and run with them.

### Blackbody radiation: Stefan–Boltzmann and Wien

<div class="theorem-box">

**Theorem (Stefan–Boltzmann law).** A blackbody at temperature $$T$$ radiates power per unit surface area

$$
P=\sigma T^4,\qquad \sigma=5.67\times10^{-8}\ \text{W m}^{-2}\text{K}^{-4}.
$$

</div>

Multiplying by the star's surface area gives its total radiated power, the **luminosity**:

$$
\ L=4\pi R^2\,\sigma T^4
$$

This one equation ties together the three numbers we most want to know about a star: its size $$R$$, surface temperature $$T$$, and energy output $$L$$. Know any two and you have the third.

<div class="theorem-box">

**Theorem (Wien's displacement law).** The spectrum peaks at a wavelength

$$
\lambda_{\text{peak}}=\frac{b}{T},\qquad b=2.90\times10^{-3}\ \text{m K}.
$$

</div>

Hot stars peak in the blue/UV and look bluish; cool stars peak in the red. This is why a star's *color* is a direct thermometer.

> **[Image placeholder — blackbody curves]** Planck spectral-radiance curves for a few temperatures (e.g. 3000 K, 5800 K, 10000 K) on the same axes, with the dashed Wien-peak locus through the maxima. Shows both the $$T^4$$ growth in area and the leftward shift of the peak.

<div class="theorem-box">

**Example.** The Sun's luminosity is $$L_\odot=3.8\times10^{26}\ \text{W}$$ and radius $$R_\odot=7.0\times10^{8}\ \text{m}$$. Find the temperature of the Sun.

From $$L=4\pi R^2\sigma T^4$$,

$$
T=\left(\frac{L}{4\pi R^2\sigma}\right)^{1/4}\approx 5800\ \text{K}.
$$

Wien's law then predicts $$\lambda_{\text{peak}}=b/T\approx 500\ \text{nm}$$ — green-yellow, right in the middle of the visible band, which is no accident given that our eyes evolved under this star.

</div>

### Flux and the inverse-square law

Luminosity is intrinsic; what we actually measure is **flux**: power per unit area arriving at our detector. A star radiating $$L$$ isotropically spreads it over a sphere of radius $$d$$, so

$$
F=\frac{L}{4\pi d^2}.
$$

The inverse-square falloff is the central difficulty of astronomy: a faint star might be intrinsically dim and close, or luminous and far.

### Spectral classification and the Doppler shift

A star's spectrum carries more than temperature. Superimposed on the blackbody continuum are dark **absorption lines** from atoms in the cooler outer layers (the reverse of the bright emission lines discussed in [Quantum & Nuclear Physics](/notes/physics/quantnucphys/)). Their pattern identifies the elements present and, through line strengths, the temperature. The classical sequence from hot to cool is **O B A F G K M** (mnemonic: "Oh Be A Fine Guy/Girl, Kiss Me"); the Sun is a G star.

Because lines sit at known rest wavelengths, any shift reveals motion along the line of sight via the **Doppler effect**. For speeds $$v\ll c$$ (so no relativistic effects),

$$
\frac{\Delta\lambda}{\lambda_0}=\frac{v_r}{c},
$$

with redshift ($$\Delta\lambda>0$$) for recession and blueshift for approach. This single measurement drives the detection of binary stars, exoplanets (the star wobbles), stellar rotation (lines broaden), and ultimately cosmic expansion (Hubble's law). The relativistic version is in the [Relativity](/notes/physics/relativity/) notes.

---

## The celestial sphere and coordinates

Before we can measure a star, we have to say *where it is*. To the eye, every star sits at the same enormous distance, pinned to the inside of a giant sphere centered on the observer — the **celestial sphere**. The sphere is a fiction (stars are at wildly different distances), but it is an extraordinarily useful one: directions to objects are just points on it, and locating a star reduces to giving two angles, exactly like latitude and longitude on Earth. Several coordinate systems exist; they differ in what they take as the "equator" and the "zero of longitude."

### Horizontal (altitude–azimuth) coordinates

The most intuitive system is tied to *you*, the observer, right now. The point straight overhead is the **zenith**; the great circle halfway between zenith and the (hidden) point underfoot is the **horizon**. A star's position is then fixed by

- **altitude** $$a$$: the angle above the horizon, from $$0^\circ$$ (horizon) to $$90^\circ$$ (zenith);
- **azimuth** $$A$$: the compass bearing of the point on the horizon directly below the star, measured clockwise from north ($$0^\circ=$$ north, $$90^\circ=$$ east, and so on).

Horizontal coordinates are wonderfully concrete — they tell you exactly where to point a telescope — but they are useless as a catalogue, because $$(a,A)$$ for a given star changes continuously as the Earth turns and depends on the observer's location. We need a system fixed to the stars themselves.

### Equatorial coordinates: right ascension and declination

The fix is to project Earth's own coordinate grid onto the sky. Extend Earth's rotation axis until it pierces the celestial sphere at the two **celestial poles**, and project the equator outward to the **celestial equator**. A star's position is then given by two angles directly analogous to latitude and longitude:

- **Declination** $$\delta$$: the angular distance north ($$+$$) or south ($$-$$) of the celestial equator, from $$-90^\circ$$ at the south celestial pole to $$+90^\circ$$ at the north. This is the sky's "latitude."
- **Right ascension** $$\alpha$$: the sky's "longitude," measured *eastward* along the celestial equator from a fixed zero point. Because the sky appears to turn once in $$24$$ hours, right ascension is traditionally measured in **time units** — hours, minutes, and seconds — with a full circle being $$24^\text{h}$$:

$$
24^\text{h}=360^\circ,\qquad 1^\text{h}=15^\circ,\qquad 1^\text{m}=15',\qquad 1^\text{s}=15''.
$$

The zero of right ascension is the **vernal equinox** (the *First Point of Aries*, $$\gamma$$): the point where the Sun, moving along the **ecliptic** (its yearly path against the stars), crosses the celestial equator heading north around March 20. Because $$\alpha$$ and $$\delta$$ are tied to the stars and not to the observer, they are essentially constant for a given star and serve as its permanent catalogue address — for example, Vega sits at $$\alpha\approx18^\text{h}37^\text{m}$$, $$\delta\approx+38.8^\circ$$.

> **[Image placeholder — equatorial coordinates]** The celestial sphere with Earth at center: celestial poles, celestial equator, the ecliptic crossing it at the vernal equinox $$\gamma$$, and a star marked with its right ascension $$\alpha$$ (arc along the equator from $$\gamma$$) and declination $$\delta$$ (arc north of the equator).

### What the observer sees: latitude, culmination, and circumpolar stars

How the fixed equatorial grid maps onto your local horizon depends entirely on your latitude $$\phi$$. The single key fact is:

$$
\text{altitude of the visible celestial pole}=\lvert \phi \rvert.
$$

From the north pole ($$\phi=90^\circ$$) the celestial equator lies on the horizon and stars circle parallel to it; from the equator ($$\phi=0$$) the celestial poles sit on the horizon and every star rises straight up and sets.

A star reaches its greatest altitude when it crosses the **meridian** (the north–south great circle through the zenith) — its **upper culmination** or **transit**. Geometry of the meridian gives the transit altitude directly:

<div class="theorem-box">

**Theorem (Transit altitude).**

$$
a_{\text{max}}=90^\circ-\lvert\phi-\delta\rvert,
$$

</div>

with the star transiting on the south side of the zenith if $$\delta<\phi$$ and the north side if $$\delta>\phi$$. A star is **circumpolar** — it never sets, circling the pole all night — when even its *lowest* point stays above the horizon, which happens for

$$
\delta\ge 90^\circ-\phi\quad(\text{northern observer}),
$$

while a star with $$\delta\le-(90^\circ-\phi)$$ never rises at all. Everything in between rises and sets each day.

<div class="theorem-box">

**Example.** Vega has declination $$\delta=+38.8^\circ$$. Find its maximum altitude as seen from New York ($$\phi=40.7^\circ\text{N}$$) and from Sydney ($$\phi=-33.9^\circ\text{S}$$).

From New York,

$$
a_{\text{max}}=90^\circ-\lvert40.7^\circ-38.8^\circ\rvert=90^\circ-1.9^\circ=88.1^\circ,
$$

so Vega passes almost exactly overhead. From Sydney,

$$
a_{\text{max}}=90^\circ-\lvert-33.9^\circ-38.8^\circ\rvert=90^\circ-72.7^\circ=17.3^\circ,
$$

barely clearing the northern horizon — which is why Vega is a "summer overhead" star in the north but a low, marginal object from the southern hemisphere.

</div>

<div class="theorem-box">

**Example.** From London ($$\phi=51.5^\circ\text{N}$$), which stars never set?

A star is circumpolar when $$\delta\ge 90^\circ-\phi=38.5^\circ$$. Vega ($$\delta=+38.8^\circ$$) just clears this, so it never sets from London (though it skims the northern horizon at lower culmination). Conversely, any star with $$\delta\le-38.5^\circ$$ never rises — so the bright southern star Canopus ($$\delta=-52.7^\circ$$) is permanently invisible from London, no matter the season or hour.

</div>

### Hour angle and sidereal time

To track a star *during* the night we use its **hour angle** $$H$$: the angle, measured westward along the celestial equator, from the meridian to the star's hour circle. The hour angle runs from $$0$$ at transit and increases at $$15^\circ$$ per hour as the star moves west. It connects to right ascension through the **local sidereal time** (LST), defined as the hour angle of the vernal equinox:

$$
\text{LST}=H+\alpha.
$$

In words: a star transits ($$H=0$$) exactly when the local sidereal time equals its right ascension, $$\text{LST}=\alpha$$. Sidereal time runs slightly faster than ordinary solar time — a sidereal day is about $$23^\text{h}56^\text{m}$$, four minutes short — because the Earth must turn a little *past* one full rotation to face the Sun again after moving along its orbit. This four-minutes-a-day slip is why the constellations rise earlier each night and the visible sky cycles through the year.

### Converting between systems: the astronomical triangle

Converting equatorial $$(\alpha,\delta)$$ to horizontal $$(a,A)$$ for a given time and place is a spherical-trigonometry problem. Draw the **astronomical (or navigational) triangle** on the celestial sphere with vertices at the celestial pole $$P$$, the zenith $$Z$$, and the star $$X$$. Its three sides are co-latitude $$PZ=90^\circ-\phi$$, polar distance $$PX=90^\circ-\delta$$, and zenith distance $$ZX=90^\circ-a$$; the angle at $$P$$ is the hour angle $$H$$ and the angle at $$Z$$ is the azimuth $$A$$. The spherical law of cosines applied to side $$ZX$$ gives the master conversion formula

$$
\sin a=\sin\phi\,\sin\delta+\cos\phi\,\cos\delta\,\cos H,
$$

and applying it to side $$PX$$ gives the azimuth,

$$
\cos A=\frac{\sin\delta-\sin\phi\,\sin a}{\cos\phi\,\cos a}.
$$

Setting $$H=0$$ in the first formula recovers $$\sin a=\cos(\phi-\delta)$$, i.e. the culmination result $$a_{\text{max}}=90^\circ-\lvert\phi-\delta\rvert$$; setting $$a=0$$ gives the azimuth at which a star rises and sets, $$\cos A=\sin\delta/\cos\phi$$.

> **[Image placeholder — astronomical triangle]** The spherical triangle pole–zenith–star $$(P,Z,X)$$ drawn on the celestial sphere, with sides labelled $$90^\circ-\phi$$, $$90^\circ-\delta$$, $$90^\circ-a$$, the angle $$H$$ at the pole, and the azimuth $$A$$ at the zenith.

<div class="theorem-box">

**Example.** From latitude $$\phi=40^\circ\text{N}$$, a star of declination $$\delta=+20^\circ$$ is observed $$3$$ hours after it transits, so its hour angle is $$H=3^\text{h}=45^\circ$$ (west of the meridian). Find its altitude and azimuth.

Altitude from the master formula:

$$
\sin a=\sin40^\circ\sin20^\circ+\cos40^\circ\cos20^\circ\cos45^\circ,
$$

$$
\sin a=(0.643)(0.342)+(0.766)(0.940)(0.707)=0.220+0.509=0.729,
$$

so $$a=46.8^\circ$$. Azimuth:

$$
\cos A=\frac{\sin20^\circ-\sin40^\circ\sin a}{\cos40^\circ\cos a}
=\frac{0.342-(0.643)(0.729)}{(0.766)(0.684)}=\frac{-0.127}{0.524}=-0.242,
$$

giving $$A=104^\circ$$ as the principal value. Because the star is *west* of the meridian (positive hour angle), it lies in the western half of the sky, so the correct azimuth is $$360^\circ-104^\circ=256^\circ$$ — roughly west-southwest. (The cosine formula cannot distinguish east from west on its own; the sign of $$H$$ resolves the ambiguity.)

</div>

### Precession, epochs, and proper motion

Right ascension and declination are *nearly* constant, but not perfectly. The Earth's axis slowly wobbles like a spinning top — **precession of the equinoxes** — tracing a cone over about $$26{,}000$$ years and dragging the vernal equinox westward along the ecliptic at roughly $$50''$$ per year. Because the entire $$(\alpha,\delta)$$ grid is pegged to that drifting zero point, catalogued coordinates must be quoted for a specific **epoch**; the modern standard is **J2000.0** (January 1, 2000, 12:00 TT). The same precession is why the "pole star" changes over millennia — Polaris is our pole star now, but Vega will be close to the pole in roughly $$12{,}000$$ years. Distinct from this, a star's genuine motion across the sky (its **proper motion**, typically well under an arcsecond per year) shifts its true coordinates over long baselines, and is itself a clue to the star's distance and space velocity.

### Other coordinate systems

Two further systems appear when the celestial equator is the wrong reference plane:

- **Ecliptic coordinates** $$(\lambda,\beta)$$ use the ecliptic as their equator. They are natural for solar-system bodies, whose orbits lie close to the ecliptic plane, so the Sun, Moon, and planets all have small ecliptic latitude $$\beta$$.
- **Galactic coordinates** $$(l,b)$$ use the plane of the Milky Way, with longitude $$l$$ measured from the galactic center. They are the system of choice for studying the structure of our Galaxy, where the disk and bulge are the relevant landmarks.

Switching between any of these is again a spherical-trigonometry rotation of the astronomical triangle — only the reference great circle and zero point change.

---

## Measuring stars

### Parallax and the parsec

As the Earth orbits the Sun, a nearby star appears to shift against the distant background. Half the angular shift over a 1 AU (astronomical unit, the distance from the Earth to the Sun) baseline is the **parallax angle** $$p$$. For small angles,

$$
d=\frac{1\ \text{AU}}{p}.
$$

This *defines* the **parsec**: the distance at which $$1\ \text{AU}$$ subtends $$p=1''$$ (one arcsecond). Then the relation is beautifully simple:

$$
d\,[\text{pc}]=\frac{1}{p\,['']},\qquad 1\ \text{pc}=3.086\times10^{16}\ \text{m}=3.26\ \text{ly}
$$

(ly = lightyear).

Parallax is the only *direct* (geometric) distance method and the foundation on which all the others are calibrated.

> **[Image placeholder — stellar parallax]** Earth at two points six months apart on its orbit, the 1 AU baseline, sightlines to a nearby star projecting onto the distant background, and the parallax angle $$p$$ marked at the star.

### The magnitude system

Astronomers report brightness on the ancient, logarithmic, *backwards* **magnitude** scale: brighter objects have *smaller* magnitudes (for some reason). The scale is defined so that a difference of 5 magnitudes is exactly a factor of 100 in flux. Hence a one-magnitude difference is a factor $$100^{1/5}\approx 2.512$$, and

$$
m_1-m_2=-2.5\log_{10}\!\frac{F_1}{F_2}.
$$

The **apparent magnitude** $$m$$ describes how bright a star *looks*; the **absolute magnitude** $$M$$ is defined as the apparent magnitude it *would* have at a standard distance of 10 pc. Combining Pogson with the inverse-square law gives the **distance modulus**:

$$
\ m-M=5\log_{10}\!\frac{d}{10\ \text{pc}}\ .
$$

So $$m-M$$ (the "distance modulus") converts directly to distance, and conversely, if you know a star's intrinsic luminosity (its $$M$$) and measure $$m$$, you get $$d$$ — the logic behind every "standard candle."

### The Hertzsprung–Russell diagram

<div class="theorem-box">

**Definition (Hertzsprung–Russell diagram).** The Hertzsprung-Russell diagram plots stars' luminosity (or absolute magnitude) against their temperature (or color, or spectral type), with temperature increasing *to the left* by convention, and they do not scatter randomly. Most lie along a diagonal **main sequence** running from hot-luminous (upper left) to cool-dim (lower right); these are stars fusing hydrogen in their cores. Cool but very luminous stars in the upper right must be huge (large $$R$$ in $$L=4\pi R^2\sigma T^4$$) (**giants** and **supergiants**). Hot but dim stars in the lower left must be tiny (**white dwarfs**). The HR diagram is the single most important organizing picture in stellar astrophysics.

</div>

> **[Image placeholder — HR diagram]** Hertzsprung–Russell diagram: x-axis temperature/spectral type (O→M, hot left), y-axis luminosity in $$L_\odot$$ (log). Mark the main sequence diagonal, the giant/supergiant branch (upper right), and the white-dwarf region (lower left), with lines of constant radius shown as faint diagonals.

---

## Gravitation

Stellar physics is merely just applied gravitation. The results in this section are standard **AP Physics C Mechanics** material, Newton's law of gravitation and energy methods, but since essentially every other section on this page leans on them, it is worth collecting them in one place.

### Newton's law of gravitation

Two point masses attract along the line joining them with

$$
\vec F = -\frac{GMm}{r^2}\,\hat r,\qquad G=6.67\times10^{-11}\ \text{N m}^2\text{kg}^{-2}.
$$

The corresponding **gravitational field** (force per unit mass, similar to how an electric field works) is $$\vec g = -\dfrac{GM}{r^2}\hat r$$. The **shell theorem** is what lets us treat stars and planets as points: a spherically symmetric mass attracts an outside body as if all its mass were concentrated at its center, and the net field *inside* a uniform thin shell is exactly zero. This is why the only mass that matters for a circular orbit is the mass *enclosed* by that orbit — the same fact behind the $$m(r)$$ in hydrostatic equilibrium below.

### Gauss's law for gravity

Gravity is an inverse-square field, so it obeys a Gauss's law identical in form to the one for electrostatics, with the source being mass instead of charge. The gravitational flux through any closed surface is proportional to the mass it encloses:

$$
\ \oint \vec g\cdot d\vec A = -4\pi G\,M_{\text{enc}}
$$

The minus sign reflects that gravity is attractive — field lines point *inward*, toward mass, whereas electric field lines point outward from positive charge. The replacement that turns Coulomb into Newton is $$\dfrac{1}{4\pi\varepsilon_0}\to -G$$, i.e. $$\varepsilon_0\to -\dfrac{1}{4\pi G}$$; every electrostatics result with spherical, cylindrical, or planar symmetry carries straight over.

In practice Gauss's law is the fastest route to the field of any symmetric mass distribution. Recovering Newton's law for a point (or any spherically symmetric body): a sphere of radius $$r$$ has area $$4\pi r^2$$ and, by symmetry, $$\vec g$$ is radial and uniform over it, so $$g\,(4\pi r^2)=4\pi G M_{\text{enc}}$$ gives $$g=GM_{\text{enc}}/r^2$$ — the shell theorem, now in one line.

<div class="theorem-box">

**Example.** Model a star as a uniform-density sphere $$\rho=\text{const}$$ of radius $$R$$. Find the gravity of a mass with respect to its distance to the center $$r$$.

The mass enclosed within radius $$r<R$$ is $$M_{\text{enc}}=\rho\cdot\tfrac{4}{3}\pi r^3$$, so Gauss's law gives

$$
g(r)\,(4\pi r^2)=4\pi G\rho\cdot\tfrac{4}{3}\pi r^3
\quad\Longrightarrow\quad
g(r)=\frac{4}{3}\pi G\rho\,r .
$$

The field grows *linearly* from zero at the center, peaks at the surface, and falls off as $$1/r^2$$ outside. The interior result is exactly the gravitational analog of the field inside a uniformly charged sphere, and (since $$g\propto r$$ is a linear restoring force) a mass dropped through a tunnel in such a body would oscillate in **simple harmonic motion**. It is also the starting point for integrating the hydrostatic equation when you assume constant density.

</div>

### Gravitational potential energy

Taking the natural zero at infinity,

$$
U(r) = -\frac{GMm}{r}.
$$

It is negative because gravity is attractive: you must *add* energy to separate the masses. A bound system has total energy $$E<0$$; $$E\ge 0$$ means the bodies escape to infinity.

### Circular orbits and escape velocity

For a circular orbit, gravity supplies the centripetal force, $$\dfrac{GMm}{r^2}=\dfrac{mv^2}{r}$$, so

$$
v_{\text{orb}}=\sqrt{\frac{GM}{r}},\qquad
E = K + U = \frac{1}{2}\frac{GMm}{r} - \frac{GMm}{r} = -\frac{GMm}{2r}.
$$

Note $$E=\tfrac12 U$$ and $$K=-\tfrac12 U$$ — the orbital case of the **virial theorem** that reappears for whole stars below. Setting $$E=0$$ (just barely unbound) gives the **escape velocity**

$$
v_{\text{esc}}=\sqrt{\frac{2GM}{r}}=\sqrt2\,v_{\text{orb}}.
$$

That last relation — escape speed is $$\sqrt2$$ times circular-orbit speed — is a frequent shortcut, and pushed to $$v_{\text{esc}}=c$$ it gives the black-hole radius later on.

### Kepler's three laws

For a small body orbiting a dominant mass $$M$$:

1. **Law of ellipses.** Orbits are ellipses with $$M$$ at one focus (circles are the special case).
2. **Law of equal areas.** The line from $$M$$ to the body sweeps equal areas in equal times: $$\dfrac{dA}{dt}=\dfrac{L}{2m}=\text{const}$$. This is nothing more than **conservation of angular momentum**, and it holds for *any* central force, not just gravity.
3. **Harmonic law.** The period and semi-major axis satisfy $$T^2\propto a^3$$. In full Newtonian form (valid even when both masses are comparable),

$$
\ T^2=\frac{4\pi^2 a^3}{G(M+m)}
$$

In the limit $$M\gg m$$ and in units of years and AU this collapses to the tidy $$T^2=a^3$$. Kepler's laws are not independent postulates — they are *consequences* of the inverse-square law, and the third law in particular is the workhorse for weighing astronomical masses (see binary stars below).

<div class="theorem-box">

**Example.** The Earth orbits at $$r=1.5\times10^{11}\ \text{m}$$ with period $$T=1\ \text{yr}=3.15\times10^7\ \text{s}$$. Find the mass of the Sun.

Solving Kepler's third law (with $$m\ll M$$) for the central mass,

$$
M=\frac{4\pi^2 r^3}{G T^2}\approx 2.0\times10^{30}\ \text{kg},
$$

the solar mass $$M_\odot$$.

</div>

---

## The mechanics of a star

We now turn from observing stars to modeling their interiors. The governing idea is **hydrostatic equilibrium**: at every depth, the pressure difference across a shell must support the weight of the material above it. This is exactly the [fluid hydrostatic equation](/notes/physics/fluiddynamics/), but with the local, depth-dependent gravity of a self-gravitating mass.

### Hydrostatic equilibrium

Consider a thin spherical shell at radius $$r$$, thickness $$dr$$, with $$m(r)$$ the mass enclosed. Balancing the pressure force against gravity on the shell gives the **equation of hydrostatic equilibrium**:

$$
\ \frac{dP}{dr}=-\frac{G\,m(r)\,\rho(r)}{r^2}\,
$$

paired with the mass-continuity relation $$dm/dr=4\pi r^2\rho$$. These two coupled equations are the start of all stellar-structure modeling. We rarely solve them exactly in olympiad settings; instead we *estimate* using mathematical tricks.

<div class="theorem-box">

**Example.** Estimate the magnitude of the central pressure of a star.

Approximate $$dP/dr\sim -P_c/R$$ (pressure drops from the center $$P_c$$ to ~0 at the surface over a length $$R$$), and use mean values $$m\sim M$$, $$\rho\sim M/R^3$$, $$r\sim R$$:

$$
\frac{P_c}{R}\sim \frac{G M}{R^2}\cdot\frac{M}{R^3}
\quad\Longrightarrow\quad
P_c\sim \frac{GM^2}{R^4}.
$$

For the Sun this gives $$P_c\sim 10^{14}\ \text{Pa}$$ — the right order of magnitude (the true value is $$\sim 2\times10^{16}\ \text{Pa}$$; the factor reflects how centrally concentrated real stars are). The point of such estimates is the *scaling*: $$P_c\propto GM^2/R^4$$.

</div>

If we then assume the interior is an ideal gas, $$P=\rho k_B T/(\mu m_H)$$, the same estimate gives a central temperature

$$
k_B T_c \sim \frac{G M\mu m_H}{R}\quad\Longrightarrow\quad T_c\sim 10^7\ \text{K for the Sun},
$$

hot enough for hydrogen fusion. Notice this is just the statement that a proton's thermal energy is comparable to its gravitational binding energy in the star — a recurring theme.

### The virial theorem

<div class="theorem-box">

**Theorem (Virial theorem).** For any self-gravitating system in equilibrium bound by an inverse-square force, the time-averaged kinetic and potential energies satisfy

$$
2\langle K\rangle+\langle U\rangle=0.
$$

</div>

For a star, $$U=-\alpha\,GM^2/R$$ (with $$\alpha$$ an order-unity constant depending on the density profile; $$\alpha=3/5$$ for a uniform sphere) and $$K$$ is the thermal energy of the gas. The consequences are profound:

- The total energy is $$E=K+U=\tfrac12 U<0$$ — the star is bound.
- The thermal energy is $$K=-\tfrac12 U>0$$.

The startling corollary: a star has a **negative heat capacity**. If it radiates energy away ($$E$$ decreases, becomes more negative), then $$U$$ decreases, the star *contracts*, and $$K$$ — hence the temperature — *increases*. Losing energy makes a star hotter. This instability drives a contracting gas cloud to heat up until fusion ignites, and it governs the runaway phases of stellar evolution.

### The Kelvin–Helmholtz timescale

Before fusion was understood, Kelvin and Helmholtz asked: how long could the Sun shine on gravitational contraction alone? If its luminosity is supplied by releasing gravitational potential energy, the characteristic time is

$$
t_{\text{KH}}\sim\frac{\lvert U \rvert}{L}\sim\frac{GM^2}{R\,L}.
$$

For the Sun this gives $$\sim 3\times10^{7}$$ years. Geology and biology demanded a far older Sun, and this discrepancy was a genuine 19th-century crisis, and was only resolved when nuclear fusion was identified as the real, vastly larger energy reservoir.

### Nuclear timescale and the energy source

Fusion of hydrogen into helium converts a fraction $$\epsilon\approx 0.007$$ of the rest-mass energy of the burned hydrogen (via $$E=mc^2$$; the binding-energy details and the Gamow-window tunneling physics are in [Quantum & Nuclear Physics](/notes/physics/quantnucphys/)). If a fraction $$f\sim0.1$$ of the star's mass is available as core hydrogen, the **nuclear timescale** is

$$
t_{\text{nuc}}\sim\frac{\epsilon f M c^2}{L}.
$$

For the Sun, $$t_{\text{nuc}}\sim 10^{10}$$ years: a thousand times longer than $$t_{\text{KH}}$$, and consistent with the age of the solar system. This resolved the Kelvin–Helmholtz crisis.

---

## Radiation pressure and the Eddington limit

Inside a hot star, photons carry significant momentum and exert **radiation pressure**. For blackbody radiation,

$$
P_{\text{rad}}=\frac{1}{3}aT^4,\qquad a=\frac{4\sigma}{c}.
$$

In low-mass stars gas pressure dominates; in very massive, hot stars radiation pressure can rival or exceed it. This sets an upper limit on how luminous a star can be while staying bound. The outward radiation force on the surface layers (via electron scattering, opacity $$\kappa$$) must not exceed gravity:

$$
\ L_{\text{Edd}}=\frac{4\pi G M c}{\kappa}
$$

Above this **Eddington luminosity**, radiation blows the outer layers off. It caps the masses and luminosities of stars and regulates accretion onto compact objects.

### Mass–luminosity relation

Combining hydrostatic equilibrium, the ideal-gas law, and radiative energy transport (a derivation beyond F=ma/USAPhO scope) yields an approximate **mass–luminosity relation** for main-sequence stars:

$$
L\propto M^{\alpha},\qquad \alpha\approx 3\text{–}4.
$$

A star ten times the Sun's mass is thousands of times more luminous. Combined with $$t_{\text{nuc}}\propto M/L$$, this means massive stars are spendthrifts:

$$
t_{\text{MS}}\propto\frac{M}{L}\propto M^{1-\alpha}\sim M^{-2.5}.
$$

The most massive stars live only a few million years, while low-mass red dwarfs will outlast the present age of the universe many times over.

---

## Star formation: the Jeans criterion

A cloud of gas collapses under its own gravity only if gravity beats the supporting thermal pressure. Comparing the gravitational potential energy $$\sim GM^2/R$$ to the thermal energy $$\sim N k_B T$$ of the cloud (a virial-type argument) gives a threshold mass (the **Jeans mass**) above which collapse runs away:

$$
M_J\sim\left(\frac{k_B T}{G\mu m_H}\right)^{3/2}\rho^{-1/2}.
$$

Cold, dense clouds have small Jeans masses and fragment readily into many stars; warm diffuse gas resists collapse. Equivalently, there is a **Jeans length** $$\lambda_J$$: the wavelength above which a density perturbation grows rather than oscillating as a sound wave. This is the seed of both star and (on far larger scales) galaxy formation.

<div class="theorem-box">

**Proof (Jean's criterion).** Set the magnitude of gravitational PE equal to thermal KE for a uniform sphere of $$N$$ particles, mass $$M=N\mu m_H$$, radius $$R$$:

$$
\frac{GM^2}{R}\sim N k_B T .
$$

Substitute $$R\sim (M/\rho)^{1/3}$$ and solve for the mass at which the two balance; collapse wins when $$M>M_J$$. The $$\rho^{-1/2}$$ dependence is the key qualitative result: as a collapsing fragment gets denser, its Jeans mass *drops*, so it keeps fragmenting into smaller pieces, which is why stars form in clusters rather than as single giant objects.

</div>

---

## Stellar endpoints

When a star exhausts its nuclear fuel, pressure support fails and the core collapses until something new halts it. What stops the collapse , and therefore the final state, depends almost entirely on the remaining mass.

### Degeneracy pressure

At extreme densities, the **Pauli exclusion principle** forces electrons into ever-higher momentum states even at $$T\to 0$$, producing a pressure that does not depend on temperature: **electron degeneracy pressure**. A quick estimate uses the uncertainty principle. Packing electrons to number density $$n$$ confines each to $$\Delta x\sim n^{-1/3}$$, so $$p\sim\hbar n^{1/3}$$, and the pressure $$P\sim n\cdot p\cdot v$$ scales (non-relativistically, $$v=p/m_e$$) as

$$
P_{\text{deg}}\sim\frac{\hbar^2}{m_e}n^{5/3}.
$$

Because it is independent of $$T$$, degeneracy pressure can support a cooling, dead star indefinitely. This is what holds up a **white dwarf**, the exposed core left behind by a low-mass star like the Sun.

### The Chandrasekhar mass

Like everything, degeneracy pressure has a limit. As a white dwarf gains mass it shrinks, the electrons are squeezed denser and become **relativistic** ($$v\to c$$), which softens the pressure law to $$P\propto n^{4/3}$$. A relativistic degenerate gas scales with mass and radius in exactly the same way as self-gravity, so for masses above a critical value no equilibrium exists, gravity always wins:

$$
M_{\text{Ch}}\approx 1.4\,M_\odot.
$$

A white dwarf above the **Chandrasekhar mass** cannot exist. Beyond it the core collapses further, crushing electrons and protons into neutrons; **neutron degeneracy pressure** then supports a **neutron star** (with its own, higher mass limit). Above that limit, nothing known halts collapse and a **black hole** forms.

### Black holes and the Schwarzschild radius

When the collapsing core exceeds the neutron-star limit (the **Tolman–Oppenheimer–Volkoff limit**, roughly $$2\text{–}3\,M_\odot$$), no known pressure can halt it, and the result is a **black hole**: a region where gravity is so strong that not even light escapes.

A surprisingly good estimate of its size comes from the escape-velocity formula. Ask: at what radius does the escape velocity from a mass $$M$$ reach the speed of light? Setting $$v_{\text{esc}}=\sqrt{2GM/r}=c$$ gives the **Schwarzschild radius**:

<div class="theorem-box">

**Theorem (Schwarzschild radius).**

$$
\ r_s=\frac{2GM}{c^2}
$$

</div>

Remarkably, this Newtonian heuristic lands on the *exact* answer that general relativity gives for a non-rotating black hole, even though the reasoning (treating light like a slow projectile) is not legitimate. The sphere at $$r_s$$ is the **event horizon** — a one-way surface. Anything that crosses it, including light, cannot return; the horizon is not a physical wall but a boundary in spacetime.

<div class="theorem-box">

**Example.** How far do we need to compress the Sun until it becomes a black hole?

For one solar mass,

$$
r_s=\frac{2G M_\odot}{c^2}=\frac{2(6.67\times10^{-11})(2.0\times10^{30})}{(3\times10^8)^2}\approx 3\ \text{km}.
$$

Compress the entire Sun inside a 3 km radius and it becomes a black hole. Because $$r_s\propto M$$, the rule of thumb is **about 3 km per solar mass**: a $$10\,M_\odot$$ stellar black hole is $$\sim30$$ km across, while the $$4\times10^6\,M_\odot$$ giant at the center of our galaxy has $$r_s\sim 10^7\ \text{km}$$, comparable to the Sun's *radius*.

</div>

> **[Image placeholder — black hole]** A black hole with a bright accretion disk and the dark central "shadow" (the silhouette of the event horizon), e.g. styled after the Event Horizon Telescope image of M87\*. Optionally annotate the event horizon $$r_s$$ and the photon sphere at $$1.5\,r_s$$.

In reality, rotating black holes (which comprise most black holes) are harder to quantify, but there is a really good Veritasium video on black holes and its consequences.

### Spacetime near the horizon

Several effects are worth knowing qualitatively; the quantitative treatment lives in the [Relativity](/notes/physics/relativity/) notes.

- **Gravitational time dilation and redshift.** Clocks run slower deeper in a gravitational well. Light climbing out of one loses energy and reddens; at the horizon the redshift becomes infinite, so a distant observer sees an infalling object slow, redden, and freeze at the horizon rather than cross it, since the light past the horizon cannot escape the black hole.
- **Photon sphere**: At $$r=\tfrac{3}{2}r_s$$, gravity bends light so sharply that photons can orbit the black hole on (unstable) circular paths. This ring is the bright edge around the dark "shadow" in black-hole images.
- **Tidal forces (spaghettification)**: Gravity's gradient stretches an infalling body: the difference in pull between your head and feet scales as $$\sim GM\,\Delta r/r^3$$. Near a small stellar-mass black hole this is lethal *outside* the horizon; near a supermassive one the tidal force at the horizon is mild, so one could cross it unharmed (briefly).

### How we find them

A black hole emits no light of its own, so it is detected by its gravity and by the matter around it:

- **Orbiting companions.** A black hole in a binary betrays itself by the orbit of its visible partner. Apply Kepler's third law to get the unseen mass; if it exceeds the neutron-star limit and emits no light, it is a black hole. The same method — tracking stars whipping around an invisible point — weighs the $$4\times10^6\,M_\odot$$ supermassive black hole **Sgr A\*** at the Milky Way's center.
- **Accretion disks.** Gas spiraling inward forms a disk, compresses, and heats to millions of kelvin, radiating **X-rays** (often near the Eddington limit). Many black holes were first found as X-ray binaries.
- **Gravitational waves.** Merging black holes ripple spacetime; LIGO's first detection in 2015 came from two $$\sim30\,M_\odot$$ holes coalescing. Gravitational waves are a very new discovery (although it has been hypothesized for quite some time) and has been a field of interest for many scientists.
- **Direct imaging.** The Event Horizon Telescope has imaged the shadow of the supermassive black holes in M87 and at the galactic center.

### Hawking radiation

Black holes are not perfectly black. Quantum effects near the horizon let them radiate a faint thermal glow at the **Hawking temperature**

$$
T_H=\frac{\hbar c^3}{8\pi G M k_B},
$$

so small black holes are *hot* and large ones are colder than empty space. This means a black hole slowly **evaporates**, with a lifetime that grows as $$M^3$$, astronomically long for any stellar black hole, but a genuine prediction tying gravity, quantum mechanics, and thermodynamics together. However, this is out of the scope for olympiad physics.

---

## Binary stars and stellar masses

Mass is the single most important property of a star, yet $$L=4\pi R^2\sigma T^4$$ and the spectrum never give it directly. The one reliable way to *weigh* a star is to watch something orbit it and apply the gravitational toolkit from the top of this page.

For two stars of masses $$M_1,M_2$$ orbiting their common center of mass with period $$P$$ and total separation $$a$$, **Kepler's third law** in its full two-body form reads

$$
P^2=\frac{4\pi^2 a^3}{G(M_1+M_2)}.
$$

Measuring $$P$$ and $$a$$ gives the *total* mass. The individual masses follow from the center-of-mass condition $$M_1 a_1=M_2 a_2$$ — the more massive star traces the smaller orbit. In a **spectroscopic binary**, the Doppler shifts of the two stars' spectral lines give the velocity ratio, hence the mass ratio, closing the system. This is essentially the only direct stellar mass measurement we have, and it is what calibrates the mass–luminosity relation above.

> **[Image placeholder — binary orbit]** Two stars on elliptical orbits about a shared center of mass, with $$a_1$$ and $$a_2$$ labeled and $$M_1 a_1 = M_2 a_2$$ indicated; optionally an inset of the two sinusoidal radial-velocity curves, antiphase, with amplitudes in the inverse mass ratio.

---

## Problem-solving strategy

Stellar problems reward a small set of reusable moves:

:::strategy
1. **Photometry questions** (temperature, size, distance, brightness): reach for $$L=4\pi R^2\sigma T^4$$, $$F=L/4\pi d^2$$, Wien's law, and the magnitude/distance-modulus relations. Watch the backwards, logarithmic magnitude scale.
2. **Distance questions:** parallax for nearby stars ($$d[\text{pc}]=1/p['']$$); standard candles (known $$M$$) plus the distance modulus for far ones.
3. **Interior/structure questions:** start from hydrostatic equilibrium and *estimate* with $$P_c\sim GM^2/R^4$$; bring in the ideal-gas law for $$T_c$$ and the virial theorem for energetics.
4. **Timescale questions:** $$t_{\text{KH}}\sim GM^2/RL$$ (gravitational) versus $$t_{\text{nuc}}\sim\epsilon f Mc^2/L$$ (nuclear); compare them.
5. **Limits and endpoints:** Eddington luminosity caps brightness; Chandrasekhar mass caps white dwarfs; degeneracy-pressure scaling arguments explain the endpoints.
6. **Mass measurement:** binary stars + Kepler's third law are the only direct route.
:::
