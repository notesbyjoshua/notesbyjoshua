---
title: "Conductors & Capacitors"
sidebar:
  order: 2
---

Capacitors are systems of conductors separated by vacuum or an insulating material. Their behavior connects conductor boundary conditions, electric potential, stored field energy, and the microscopic polarization of matter.

## Capacitance

A conductor at electrostatic equilibrium is an equipotential. If you put charge $$Q$$ on a fixed isolated conductor, its potential relative to infinity is proportional to $$Q$$, because electrostatics is linear. That motivates **capacitance**:

$$
C=\frac{Q}{\Delta V}.
$$

Capacitance measures how much charge a geometry can store per volt. It depends only on the geometry and the material between conductors, not on the particular value of $$Q$$ or $$\Delta V$$. The sign convention is usually: $$Q$$ means the positive charge on one conductor and $$\Delta V$$ means the potential of that positive conductor minus the other conductor, so $$C>0$$.

For a single isolated conducting sphere of radius $$R$$,

$$
V=\frac{kQ}{R}
\qquad\Longrightarrow\qquad
C=4\pi\varepsilon_0R.
$$

Most devices use two conductors carrying equal and opposite charges $$+Q$$ and $$-Q$$. The electric field is mostly trapped between them, which makes the stored energy useful and controllable.

### Parallel-plate capacitor

For two large parallel conducting plates of area $$A$$ separated by distance $$d$$, ignore edge fringing if $$d$$ is much smaller than the plate dimensions. The charges live mainly on the inner faces, and the field between the plates is approximately uniform:

$$
E=\frac{\sigma}{\varepsilon_0}=\frac{Q}{\varepsilon_0 A}.
$$

The potential difference is

$$
\Delta V=Ed=\frac{Qd}{\varepsilon_0 A},
$$

so the capacitance is

$$
C=\frac{Q}{\Delta V}=\frac{\varepsilon_0 A}{d}.
$$

The approximations are doing real work here: near the edges, the field bulges outward, so the exact capacitance is slightly larger than $$\varepsilon_0A/d$$.

<div class="theorem-box">

**Example.** A parallel-plate capacitor has plate area $$A=2.0\times10^{-3}\ \text{m}^2$$ and separation $$d=1.0\ \text{mm}$$. It is connected to a $$12\ \text{V}$$ battery. Find the capacitance, stored charge, and electric field between the plates.

The capacitance is

$$
C=\frac{\varepsilon_0A}{d}
=\frac{(8.85\times10^{-12})(2.0\times10^{-3})}{1.0\times10^{-3}}
=1.77\times10^{-11}\ \text{F}.
$$

The charge is

$$
Q=CV=(1.77\times10^{-11})(12)=2.1\times10^{-10}\ \text{C}.
$$

The field is

$$
E=\frac{V}{d}
=\frac{12}{1.0\times10^{-3}}
=1.2\times10^4\ \text{V/m}.
$$

The battery fixes $$\Delta V$$; the geometry then decides how much charge must move onto the plates.

</div>

### Cylindrical and spherical capacitors

For capacitors with symmetry, the standard procedure is:

1. Use Gauss's law to find $$E(r)$$ between the conductors.
2. Integrate $$\Delta V=-\int\vec E\cdot d\vec\ell$$.
3. Use $$C=Q/\Delta V$$.

For coaxial cylinders of length $$L$$, inner radius $$a$$, and outer radius $$b$$,

$$
E(r)=\frac{\lambda}{2\pi\varepsilon_0r},
\qquad
\Delta V=\frac{\lambda}{2\pi\varepsilon_0}\ln\frac{b}{a},
\qquad
C=\frac{2\pi\varepsilon_0L}{\ln(b/a)}.
$$

For concentric spherical conductors with inner radius $$a$$ and outer radius $$b$$,

$$
E(r)=\frac{kQ}{r^2},
\qquad
\Delta V=kQ\left(\frac{1}{a}-\frac{1}{b}\right),
\qquad
C=\frac{4\pi\varepsilon_0}{1/a-1/b}.
$$

Letting $$b\to\infty$$ recovers the isolated sphere result $$C=4\pi\varepsilon_0a$$.

<div class="theorem-box">

**Example.** A coaxial cable has inner conductor radius $$a$$, outer conductor inner radius $$b$$, and length $$L$$. It carries charge $$+\lambda L$$ on the inner conductor and $$-\lambda L$$ on the outer conductor. Find the capacitance per unit length.

Between the conductors, Gauss's law with a coaxial cylindrical surface gives

$$
E(2\pi rL)=\frac{\lambda L}{\varepsilon_0}
\quad\Longrightarrow\quad
E(r)=\frac{\lambda}{2\pi\varepsilon_0r}.
$$

The potential difference from inner to outer conductor is

$$
V_a-V_b=\int_a^b E(r)\,dr
=\frac{\lambda}{2\pi\varepsilon_0}\ln\frac{b}{a}.
$$

Thus

$$
\frac{C}{L}=\frac{\lambda}{V_a-V_b}
=\frac{2\pi\varepsilon_0}{\ln(b/a)}.
$$

The logarithm is the signature of cylindrical symmetry; if you see coaxial conductors, expect $$\ln(b/a)$$ to appear.

</div>

### Energy stored in a capacitor

To charge a capacitor slowly, each extra bit of charge $$dq$$ must be moved across the current potential difference $$V=q/C$$. Therefore

$$
U=\int_0^Q V\,dq
=\int_0^Q\frac{q}{C}\,dq
=\frac{Q^2}{2C}.
$$

The usual equivalent forms are

$$
U=\frac{1}{2}QV=\frac{Q^2}{2C}=\frac{1}{2}CV^2.
$$

For a parallel-plate capacitor, this energy can also be viewed as living in the electric field. Since $$C=\varepsilon_0A/d$$ and $$E=V/d$$,

$$
U=\frac{1}{2}CV^2
=\frac{1}{2}\varepsilon_0E^2(Ad).
$$

So the energy density of an electric field is

$$
u_E=\frac{1}{2}\varepsilon_0E^2.
$$

This field-energy formula is much more general than the parallel-plate derivation suggests.

:::warning
If a battery charges a capacitor from zero to $$V$$, the battery supplies $$QV$$ of energy, but the capacitor stores only $$\tfrac12 QV$$. The other half is dissipated in the circuit during charging, even if the resistance is tiny.
:::

### Capacitors in circuits

For capacitors in **parallel**, the plates share the same potential difference. Charges add:

$$
Q_{\text{tot}}=Q_1+Q_2+\cdots
\quad\Longrightarrow\quad
C_{\text{eq}}=C_1+C_2+\cdots.
$$

For capacitors in **series**, there is one path and the same charge magnitude appears on each capacitor. Potential differences add:

$$
V_{\text{tot}}=V_1+V_2+\cdots
=Q\left(\frac{1}{C_1}+\frac{1}{C_2}+\cdots\right),
$$

so

$$
\frac{1}{C_{\text{eq}}}
=\frac{1}{C_1}+\frac{1}{C_2}+\cdots.
$$

Two circuit facts are especially useful in electrostatics problems:

- Points connected by ideal wire are at the same potential.
- The total charge on an isolated connected conductor network is conserved.

<div class="theorem-box">

**Example.** Capacitors $$C_1=2.0\ \mu\text{F}$$ and $$C_2=6.0\ \mu\text{F}$$ are connected in series across a $$12\ \text{V}$$ battery. Find the equivalent capacitance, charge on each capacitor, and voltage across each capacitor.

For series capacitors,

$$
\frac{1}{C_{\text{eq}}}
=\frac{1}{2.0}+\frac{1}{6.0}
=\frac{2}{3}
\quad(\mu\text{F})^{-1},
$$

so

$$
C_{\text{eq}}=1.5\ \mu\text{F}.
$$

The same charge magnitude appears on both capacitors:

$$
Q=C_{\text{eq}}V=(1.5\ \mu\text{F})(12\ \text{V})=18\ \mu\text{C}.
$$

The voltage drops are

$$
V_1=\frac{Q}{C_1}=\frac{18}{2.0}=9.0\ \text{V},
\qquad
V_2=\frac{Q}{C_2}=\frac{18}{6.0}=3.0\ \text{V}.
$$

The smaller capacitor gets the larger voltage drop. That is the capacitor version of "same charge, different capacitance."

</div>

### Force between capacitor plates

The plates of a charged capacitor attract. For a parallel-plate capacitor with fixed charge $$Q$$ and area $$A$$, one plate feels the field from the *other* plate, not its own field:

$$
E_{\text{other}}=\frac{\sigma}{2\varepsilon_0}.
$$

Thus

$$
F=QE_{\text{other}}
=\frac{\sigma^2A}{2\varepsilon_0}
=\frac{Q^2}{2\varepsilon_0A}.
$$

Equivalently, the field pressure is

$$
P=\frac{F}{A}=\frac{1}{2}\varepsilon_0E^2=\frac{\sigma^2}{2\varepsilon_0}.
$$

This is the same pressure formula from charged conductor surfaces, now showing up as a plate force.

## Electric dipoles

An electric dipole is a pair of equal and opposite charges separated by a small displacement. Its dipole moment is

$$
\vec p=q\vec d,
$$

where $$\vec d$$ points from the negative charge to the positive charge. For a continuous charge distribution,

$$
\vec p=\int \vec r\,dq,
$$

with $$dq=\rho\,dV$$, $$\sigma\,dA$$, or $$\lambda\,d\ell$$ depending on the distribution. This definition assumes the total charge is zero; otherwise the dipole moment depends on the coordinate origin.

The point-dipole description is an approximation. If the observation distance $$r$$ is much larger than the charge separation $$d$$, the separate charges cannot be resolved and their leading nonzero effect is controlled by $$\vec p$$. More generally, a localized charge distribution can be described by a **multipole expansion**:

- its total charge is the monopole term, whose potential decays like $$1/r$$;
- its dipole moment is the next term, whose potential decays like $$1/r^2$$;
- higher moments such as the quadrupole decay still faster.

For a neutral distribution, the monopole term vanishes, so the dipole term usually controls the far field. The dipole moment is then independent of the choice of origin. To see why, shift the origin by a constant vector $$\vec a$$:

$$
\vec p'=\int(\vec r-\vec a)\,dq
=\vec p-\vec a\int dq
=\vec p-\vec aQ.
$$

When $$Q=0$$, this gives $$\vec p'=\vec p$$.

### Dipole in an external field

In a uniform electric field, the two forces on the charges cancel, so the net force is zero. But the forces usually form a torque:

$$
\vec\tau=\vec p\times\vec E.
$$

The potential energy is

$$
U=-\vec p\cdot\vec E=-pE\cos\theta.
$$

The lowest-energy orientation has $$\vec p$$ parallel to $$\vec E$$; the highest-energy orientation has it antiparallel. If the field is nonuniform, the forces on the two ends no longer cancel exactly, so the dipole can feel a net force. In one dimension, when $$\vec p$$ and $$\vec E$$ both point along $$x$$,

$$
F_x=p\frac{dE}{dx}.
$$

For a small permanent dipole whose moment does not change appreciably across the field,

$$
\vec F=\nabla(\vec p\cdot\vec E).
$$

In electrostatics, $$\nabla\times\vec E=0$$, so this is also commonly written as $$(\vec p\cdot\nabla)\vec E$$. The gradient matters: a uniform field can rotate a dipole but cannot translate it, while a nonuniform field can pull an aligned dipole toward the stronger-field region.

### Field and potential of a dipole

Put charges $$+q$$ and $$-q$$ on the $$z$$-axis, separated by distance $$d$$, and look far away where $$r\gg d$$. The potential is approximately

$$
V(r,\theta)=k\frac{p\cos\theta}{r^2}
=k\frac{\vec p\cdot\hat r}{r^2}.
$$

The important fact is the decay rate: a dipole potential falls like $$1/r^2$$, and its field falls like $$1/r^3$$, faster than a point charge because the total charge cancels at large distances.

Two special field values are worth knowing:

$$
E_{\text{axis}}=\frac{1}{4\pi\varepsilon_0}\frac{2p}{r^3}
\quad\text{along } \vec p,
$$

and

$$
E_{\text{equator}}=\frac{1}{4\pi\varepsilon_0}\frac{p}{r^3}
\quad\text{opposite } \vec p.
$$

The middle plane perpendicular to $$\vec p$$ has $$V=0$$, but the electric field there is not zero.

<div class="theorem-box">

**Example.** A dipole with moment $$p$$ is placed in a uniform electric field $$E$$ at angle $$\theta$$ from the field direction. Find the torque magnitude and the work an external agent must do to rotate it slowly from parallel to perpendicular.

The torque magnitude is

$$
\tau=pE\sin\theta.
$$

The potential energy is $$U=-pE\cos\theta$$. Parallel means $$\theta=0$$, so $$U_i=-pE$$. Perpendicular means $$\theta=\pi/2$$, so $$U_f=0$$. If the rotation is slow, the external work equals the change in potential energy:

$$
W_{\text{ext}}=\Delta U=0-(-pE)=pE.
$$

The field wants to align the dipole; an external agent must add energy to turn it away from alignment.

</div>

## Dielectrics and polarization

A dielectric is an insulating material whose charges are bound to atoms or molecules. It does not let charge travel macroscopically through the material the way a conductor does, but its positive and negative charges can shift slightly relative to one another. An external field can therefore create or align microscopic electric dipoles.

There are two main microscopic mechanisms:

- **Induced polarization:** the electron cloud shifts slightly relative to the nucleus, creating an induced dipole moment. This occurs even in atoms and nonpolar molecules with no permanent dipole.
- **Orientational polarization:** molecules with permanent dipole moments partially align with the applied field. Thermal motion prevents perfect alignment, so this effect generally depends on temperature.

The field acting on each molecule is not always exactly the macroscopic field $$\vec E$$ because nearby dipoles also contribute a local field. For the usual continuum treatment, all of that microscopic behavior is summarized by the **polarization vector** $$\vec P$$, defined as dipole moment per unit volume:

$$
\vec P(\vec r)=\frac{1}{\Delta V}\sum_{i\in\Delta V}\vec p_i.
$$

Here the averaging volume $$\Delta V$$ is small compared with the object but large enough to contain many atoms. Its units are dipole moment per volume, $$\text{C}\cdot\text{m}/\text{m}^3=\text{C}/\text{m}^2$$. A material is **uniformly polarized** when $$\vec P$$ is constant.

For a simple homogeneous, isotropic, linear dielectric, the response is parallel and proportional to the macroscopic field:

$$
\vec P=\varepsilon_0\chi_e\vec E.
$$

Here $$\chi_e$$ is the electric susceptibility. This relation is a constitutive model, not a new fundamental law. In anisotropic materials $$\vec P$$ need not be parallel to $$\vec E$$, and in nonlinear materials it need not be proportional to $$\vec E$$.

### Free and bound charge

It is useful to separate charge into two bookkeeping categories:

- **Free charge** $$\rho_f$$ is charge whose location is controlled externally, such as charge deposited on capacitor plates or supplied by a battery.
- **Bound charge** $$\rho_b$$ is the net charge that appears when the positive and negative parts of a dielectric shift or orient. It remains tied to the polarized material.

“Free” does not mean that a charge experiences no force, and “bound” does not mean immobile at the atomic scale. The distinction describes the charge's role in the macroscopic material model. The electric field responds to both:

$$
\nabla\cdot\vec E
=\frac{\rho_{\text{total}}}{\varepsilon_0}
=\frac{\rho_f+\rho_b}{\varepsilon_0}.
$$

To find the bound charge produced by a known polarization, imagine a small volume. Dipoles wholly inside it contribute equal positive and negative charge, so they cancel. A net charge appears only when dipoles terminate at a surface or when the polarization varies from place to place. The resulting densities are

$$
\rho_b=-\nabla\cdot\vec P
$$

in the volume and

$$
\sigma_b=\vec P\cdot\hat n
$$

on the surface of the dielectric, where $$\hat n$$ points outward from the material.

The minus sign in $$\rho_b=-\nabla\cdot\vec P$$ has a useful interpretation. If polarization vectors spread outward from a region, their negative ends are left behind there, producing negative bound volume charge. If $$\vec P$$ is uniform, $$\nabla\cdot\vec P=0$$, so there is no bound charge in the bulk; opposite surface charges remain where the dipoles end.

<div class="theorem-box">

**Example.** A long dielectric cylinder of radius $$R$$ is uniformly polarized with $$\vec P=P\hat z$$. Find its bound volume and surface charge.

Because $$\vec P$$ is constant,

$$
\rho_b=-\nabla\cdot\vec P=0.
$$

On the curved side, the outward normal is radial and perpendicular to $$\vec P$$, so $$\sigma_b=0$$. On the top face, $$\hat n=+\hat z$$ and $$\sigma_b=+P$$. On the bottom face, $$\hat n=-\hat z$$ and $$\sigma_b=-P$$. The cylinder therefore behaves like two oppositely charged end faces even though every molecule and the cylinder as a whole remain neutral.

</div>

### Electric displacement

The **electric displacement field** packages the effect of polarization into an auxiliary field:

$$
\vec D=\varepsilon_0\vec E+\vec P.
$$

Take the divergence and use $$\nabla\cdot\vec E=(\rho_f+\rho_b)/\varepsilon_0$$ together with $$\rho_b=-\nabla\cdot\vec P$$:

$$
\nabla\cdot\vec D
=\varepsilon_0\nabla\cdot\vec E+\nabla\cdot\vec P
=\rho_f.
$$

Thus Gauss's law for $$\vec D$$ counts only enclosed free charge:

$$
\oint \vec D\cdot d\vec A=Q_{\text{free, enc}}.
$$

This does not mean bound charge has stopped producing an electric field. Its contribution is already hidden inside $$\vec P$$ in the definition of $$\vec D$$. The physical force on a point charge is still $$q\vec E$$, not $$q\vec D$$.

Across an interface carrying free surface charge $$\sigma_f$$, a thin Gaussian pillbox gives the normal-component boundary condition

$$
(\vec D_2-\vec D_1)\cdot\hat n=\sigma_f,
$$

where $$\hat n$$ points from medium 1 into medium 2. When there is no free charge at the interface, the normal component of $$\vec D$$ is continuous even though the normal component of $$\vec E$$ may change.

For a homogeneous, isotropic, linear dielectric,

$$
\vec D=\varepsilon_0\vec E+\vec P
=\varepsilon_0(1+\chi_e)\vec E
=\varepsilon\vec E
=\kappa\varepsilon_0\vec E,
$$

where $$\kappa=1+\chi_e$$ is the relative permittivity and $$\varepsilon=\kappa\varepsilon_0$$ is the permittivity. In this special case, symmetric Gauss-law problems often amount to replacing $$\varepsilon_0$$ by $$\varepsilon$$. The shortcut is not reliable when the dielectric only partly fills the field region, $$\kappa$$ varies with position, or the material is nonlinear or anisotropic.

:::strategy{title="Fields in dielectric problems"}
1. Identify which charges are externally supplied (**free**) and which arise from polarization (**bound**).
2. Use symmetry and $$\oint\vec D\cdot d\vec A=Q_{\text{free, enc}}$$ to find $$\vec D$$ when possible.
3. Use the material relation, such as $$\vec D=\varepsilon\vec E$$, to recover the physical field $$\vec E$$.
4. If asked for polarization or bound charge, use $$\vec P=\vec D-\varepsilon_0\vec E$$, $$\rho_b=-\nabla\cdot\vec P$$, and $$\sigma_b=\vec P\cdot\hat n$$.
:::

### Dielectric-filled capacitors

If a parallel-plate capacitor is completely filled with a linear dielectric of constant $$\kappa$$,

$$
C=\kappa\frac{\varepsilon_0A}{d}.
$$

The dielectric increases capacitance because polarization reduces the electric field for a given free charge:

$$
E=\frac{\sigma_{\text{free}}}{\kappa\varepsilon_0}.
$$

For fixed free charge $$Q$$, inserting the dielectric lowers $$V$$ and lowers the stored energy $$U=Q^2/(2C)$$. For fixed voltage $$V$$, a connected battery supplies extra charge, so $$Q=CV$$ and $$U=\tfrac12CV^2$$ increase.

<div class="theorem-box">

**Example.** A parallel-plate capacitor of capacitance $$C_0$$ is charged to voltage $$V_0$$ and then disconnected from the battery. A dielectric with constant $$\kappa$$ is inserted so it fills the gap. Find the new capacitance, charge, voltage, and stored energy.

The capacitance becomes

$$
C=\kappa C_0.
$$

Because the capacitor is disconnected, no charge can enter or leave:

$$
Q=Q_0=C_0V_0.
$$

The new voltage is

$$
V=\frac{Q}{C}
=\frac{C_0V_0}{\kappa C_0}
=\frac{V_0}{\kappa}.
$$

The new energy is

$$
U=\frac{Q^2}{2C}
=\frac{Q_0^2}{2\kappa C_0}
=\frac{1}{\kappa}U_0.
$$

The energy decreases. The missing energy goes into mechanical work as the dielectric is pulled into the capacitor (and eventually heat if the motion is damped).

</div>
