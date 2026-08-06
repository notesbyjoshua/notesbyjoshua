---
title: "Fluid Dynamics"
sidebar:
  order: 5
---

---

## What is a fluid?

We model fluids as **continua**: even though matter is made of molecules, we imagine a fluid "particle" or "parcel" as a blob small compared to the apparatus but large compared to molecular spacing, so that $$\rho$$, $$p$$, and $$\vec v$$ are smooth functions. This is the **continuum hypothesis**, and you can assume it is always true for most olympiad problems.

Two idealizations are usually assumed for fluids:

- **Incompressible:** $$\rho$$ is constant. Liquids are nearly incompressible; gases are too, as long as flow speeds are well below the speed of sound. Assume incompressible unless told otherwise.
- **Inviscid (ideal):** internal friction (viscosity) is negligible. This is the assumption behind Bernoulli's equation. Real fluids are viscous, and we treat that separately at the end.

### Density and pressure

**Density** is mass per volume, $$\rho = m/V$$. For water, $$\rho \approx 1000\ \text{kg/m}^3$$; for air at room conditions, $$\rho \approx 1.2\ \text{kg/m}^3$$.

**Pressure** is the normal force per unit area that a fluid exerts on any surface in contact with it:

$$
p=\frac{F_\perp}{A},\qquad [p]=\text{Pa}=\text{N/m}^2.
$$

The crucial property of pressure in a fluid **at rest** is that it is isotropic: the pressure at a point is the same in **all** directions. The force on any surface element is $$dF=p\,dA$$ (a generalization of $$F=PA$$) directed *along the inward normal*, regardless of the surface's orientation.

The isotropy argument fails once the fluid moves with shear, or once viscosity matters, then pressure is only the isotropic part of a more general stress, and the off-diagonal (shear) stresses are nonzero. Keep that in the back of your mind for the viscosity section.

---

## Hydrostatics

### The hydrostatic equation

Consider a fluid at rest in a gravitational field $$\vec g = -g\hat z$$. Take a thin horizontal slab of fluid of area $$A$$ and thickness $$dz$$. Three vertical forces act: pressure pushing up on the bottom $$pA$$, pressure pushing down on the top $$(p+dp)A$$, and weight $$\rho g A\,dz$$ downward. Equilibrium gives

$$
pA-(p+dp)A-\rho g A\,dz=0
\quad\Longrightarrow\quad
\ \frac{dp}{dz}=-\rho g\ .
$$

Pressure increases as you go *down*. For an incompressible fluid with $$\rho$$ constant, integrating from the surface (depth $$0$$, pressure $$p_0$$) to depth $$h$$:

$$
p(h)=p_0+\rho g h.
$$

Two major consequences come from this that are both worth memorizing:

- **Pressure depends only on depth**, not on the shape of the container or the amount of fluid above (the *hydrostatic paradox*). A thin tube and a wide reservoir filled to the same height have the same bottom pressure.
- **Connected fluid at the same height has the same pressure** (provided it's the same continuous fluid). This is the workhorse principle for manometer and U-tube problems: pick a horizontal level that lies in a single connected body of one fluid, and set the pressures on the two sides equal.

### Compressible case: the isothermal atmosphere

When $$\rho$$ varies, you must integrate the differential equation. For an ideal gas at uniform temperature $$T$$, $$\rho = pM/(RT)$$ (with molar mass $$M$$), so

$$
\frac{dp}{dz}=-\frac{Mg}{RT}\,p
\quad\Longrightarrow\quad
p(z)=p_0\,e^{-Mgz/RT}.
$$

This exponential "barometric formula" is the standard USAPhO compressible-static result. The scale height $$H=RT/Mg \approx 8\ \text{km}$$ for air sets how fast pressure drops with altitude. (A real atmosphere has a temperature gradient; that gives a power law instead, a nice extension problem.)

### Pascal's principle and the hydraulic press

<div class="theorem-box">

**Theorem (Pascal's principle).** A pressure change applied to an enclosed incompressible fluid is transmitted undiminished to every point.

</div>

In a hydraulic press, a small piston of area $$A_1$$ and a large piston of area $$A_2$$ share the same fluid pressure, so

$$
\frac{F_1}{A_1}=\frac{F_2}{A_2}\quad\Longrightarrow\quad F_2=F_1\frac{A_2}{A_1}.
$$

Force is multiplied by the area ratio. Energy is *not* created: the volume swept is the same, $$A_1 d_1=A_2 d_2$$, so the small piston moves a large distance while the large piston barely moves, and $$F_1 d_1=F_2 d_2$$. This is the fluid version of a lever.

### Manometers and barometers

A **barometer** (Torricelli's) is a sealed inverted tube of mercury; vacuum sits above the column, so atmospheric pressure supports the column: $$p_{\text{atm}}=\rho_{\text{Hg}}gh$$. At sea level $$h\approx 760\ \text{mm Hg}$$.

A **U-tube manometer** measures a pressure difference. The trick is always the same: find a horizontal level entirely within one continuous fluid and equate the pressures computed from each side.

<div class="theorem-box">

**Example.** A U-tube is partly filled with water ($$\rho_w$$). Oil of density $$\rho_o<\rho_w$$ is poured into the left arm, forming a column of height $$h_o$$ above the water. The water rises in the right arm. Find the height difference $$\Delta$$ between the two water surfaces.

Pick the level of the oil–water interface in the left arm; this lies in the water, which is connected across the bottom. Pressure there from the left = $$p_{\text{atm}}+\rho_o g h_o$$. Pressure at the same height from the right = $$p_{\text{atm}}+\rho_w g \Delta$$. Equate:

$$
\rho_o g h_o=\rho_w g\Delta\quad\Longrightarrow\quad \Delta=\frac{\rho_o}{\rho_w}h_o.
$$

The denser fluid sits lower; the height ratio is the inverse density ratio.

</div>

---

## Buoyancy

### Archimedes' principle

Imagine the region occupied by a submerged body, but filled with fluid instead. That fluid blob is in equilibrium, so the net pressure force on its boundary exactly balances its weight and points up. The pressure distribution on the boundary doesn't know whether fluid or a solid sits inside, so the same upward force — the **buoyant force** — acts on the real body:

$$
\ F_B=\rho_{\text{fluid}}\,g\,V_{\text{displaced}}\ 
$$

directed upward, acting at the **center of buoyancy** = the centroid of the displaced fluid volume.

A floating body displaces its own weight of fluid: $$\rho_{\text{body}}V_{\text{body}}=\rho_{\text{fluid}}V_{\text{submerged}}$$, so the submerged fraction equals the density ratio. Ice ($$\rho\approx 917$$) floats with about $$92\%$$ submerged in seawater.

<div class="theorem-box">

**Remark.** It's worth seeing that Archimedes is not a new law. The net upward pressure force on a fully submerged object is

$$
F_B=\oint (-p\,\hat n)\cdot\hat z\,dA = -\oint p\,dA_z.
$$

By the divergence theorem this equals $$-\int \frac{\partial p}{\partial z}\,dV=\int \rho_{\text{fluid}}g\,dV=\rho_{\text{fluid}}gV$$. Same answer, but this form generalizes to **non-uniform pressure fields** — for instance buoyancy in an accelerating or rotating fluid, where you replace $$g$$ by the effective gravity $$g_{\text{eff}}$$. This knowledge will not be needed for F=ma/USAPhO and is just a nice little extension.

</div>

If a container of fluid accelerates, the buoyant force uses the *effective* gravity. A helium balloon in a car that accelerates forward drifts forward, not backward: in the car frame there's a pseudo-gravity pointing backward, so the "up" (low-pressure) direction tilts forward, and the light balloon rises toward it. Always ask "which way is the pressure gradient?" rather than relying on intuition.

### Stability of floating bodies (the metacenter)

A floating body can be in vertical equilibrium yet still tip over. Stability against *rotation* is governed by the **metacenter** $$M$$: when the body heels by a small angle, the center of buoyancy $$B$$ shifts (because the displaced-volume shape changes), and the buoyant force's line of action crosses the body's centerline at $$M$$. If $$M$$ lies *above* the center of gravity $$G$$, the couple restores; if below, it capsizes. The **metacentric height** $$GM$$ is

$$
GM=\frac{I}{V_{\text{disp}}}-BG,
$$

where $$I$$ is the second moment of area of the waterline cross-section about the tilt axis and $$V_{\text{disp}}$$ is the displaced volume. A wide, flat hull (large $$I$$) is stable; a tall narrow one tips.

---

## Force on submerged surfaces

To find the total force and the point where it acts (the **center of pressure**) on a submerged wall, integrate the pressure.

For a vertical rectangular dam of width $$w$$ holding water of depth $$H$$, the pressure at depth $$y$$ is $$\rho g y$$, so the strip $$dy$$ feels $$dF=\rho g y\, w\,dy$$:

$$
F=\int_0^H \rho g y\,w\,dy=\tfrac12\rho g w H^2.
$$

This is just the average pressure $$\tfrac12\rho g H$$ times the area $$wH$$. The center of pressure sits at the centroid of the (triangular) pressure distribution, at depth $$\tfrac23 H$$ — below the centroid of the wall because pressure is heavier at the bottom. The torque about the base,

$$
\tau=\int_0^H \rho g y\,w\,(H-y)\,dy=\frac{\rho g w H^3}{6},
$$

is what you'd use for a hinged gate problem.

---

## Surface tension

At a liquid's surface, molecules have fewer neighbors than in the bulk, so creating surface area costs energy. **Surface tension** $$\gamma$$ is that energy per area, equivalently a force per length along the surface:

$$
\gamma=\frac{\text{energy}}{\text{area}}=\frac{\text{force}}{\text{length}},\qquad [\gamma]=\text{N/m}.
$$

For water, $$\gamma\approx 0.073\ \text{N/m}$$.

### Laplace pressure

A curved liquid surface has higher pressure on its concave (inside) side. Balancing the surface-tension pull around the rim against the pressure difference across a curved interface gives the **Young–Laplace equation**:

$$
\Delta p=\gamma\left(\frac{1}{R_1}+\frac{1}{R_2}\right).
$$

Two important special cases:

- **Spherical droplet** (one surface, radius $$R$$): $$\ \Delta p=\dfrac{2\gamma}{R}$$.
- **Soap bubble** (two surfaces, inside and outside): $$\ \Delta p=\dfrac{4\gamma}{R}$$.

Smaller bubbles have higher internal pressure — which is why, if you connect a small and a large soap bubble, the small one *empties into* the large one.

### Capillary rise and contact angle

Where liquid, solid, and air meet, the liquid makes a **contact angle** $$\theta$$ set by the balance of the three surface tensions (Young's relation). In a thin tube of radius $$r$$, the curved meniscus produces a Laplace pressure that lifts (or depresses) a column of height $$h$$. Balancing the upward surface-tension force $$2\pi r\gamma\cos\theta$$ against the weight $$\rho g \pi r^2 h$$ of the lifted column gives Jurin's law:

$$
\ h=\frac{2\gamma\cos\theta}{\rho g r}
$$

Water ($$\theta\approx 0$$) climbs; mercury ($$\theta>90^\circ$$) is pushed down. Rise is inversely proportional to tube radius, the basis of capillary action in plants and paper towels.

---

## Fluid dynamics: kinematics

Now suppose the fluid moves. We describe flow by the velocity field $$\vec v(\vec r,t)$$.

- **Streamlines** are curves everywhere tangent to $$\vec v$$. In **steady flow** ($$\partial/\partial t=0$$) streamlines are fixed and coincide with the paths fluid parcels actually follow. Most fluid dynamic problems you see are governed by streamlines.
- **Laminar** flow is smooth and layered; **turbulent** flow is chaotic and mixing. The one that occurs is governed by the Reynolds number (talked about later).

### The continuity equation

<div class="theorem-box">

**Theorem (Continuity equation).** Mass cannot accumulate in a steady flow, so the mass flow rate $$\dot m=\rho A v$$ is the same through every cross-section of a streamtube. For an incompressible fluid ($$\rho$$ constant):

$$
\ A_1 v_1 = A_2 v_2\ \qquad(\text{volume flow rate } Q=Av=\text{const}).
$$

</div>

Narrow the pipe and the fluid speeds up. This is exact for incompressible steady flow and is half of almost every flow problem.

---

## Bernoulli's equation

Bernoulli is energy conservation for a fluid parcel along a streamline.

:::conditions
Valid only for **steady, incompressible, inviscid flow along a single streamline** (no friction, no energy added or removed).
:::

<div class="theorem-box">

**Proof (Bernoulli's equation).** Consider fluid in a thin streamtube between sections 1 and 2. In time $$dt$$, a slug of volume $$dV$$ effectively disappears at section 1 and reappears at section 2 (steady flow). Mass conservation: $$dm=\rho\,dV$$ is the same at both ends.

The net work done on the slug:

- Pressure pushing it in at 1: $$+p_1 A_1 (v_1\,dt)=p_1\,dV$$.
- Pressure resisting at 2: $$-p_2 A_2 (v_2\,dt)=-p_2\,dV$$.
- Gravity, as it rises from $$y_1$$ to $$y_2$$: $$-dm\,g(y_2-y_1)$$.

This equals the change in kinetic energy $$\tfrac12 dm(v_2^2-v_1^2)$$. Dividing through by $$dV$$ and using $$dm/dV=\rho$$:

$$
p_1+\tfrac12\rho v_1^2+\rho g y_1=p_2+\tfrac12\rho v_2^2+\rho g y_2.
$$

</div>

Hence along a streamline,

$$
\ p+\tfrac12\rho v^2+\rho g y=\text{const}
$$

Each term is an energy per unit volume: $$p$$ is "flow work," $$\tfrac12\rho v^2$$ is kinetic, $$\rho g y$$ is potential. The headline physics: **where a fluid moves faster, its pressure is lower** (at the same height). That single sentence explains lift, the Venturi meter, the curveball, and why shower curtains billow inward.

:::warning
Bernoulli compares two points *on the same streamline* in steady, frictionless, incompressible flow. It does **not** apply across a pump, through a turbulent region, along a viscous boundary layer, or between two points on different streamlines unless the flow is also irrotational. Olympiad traps almost always come from misapplying Bernoulli where one of these assumptions breaks.
:::

### Torricelli's law

A tank of fluid with a small hole at depth $$h$$ below the surface. Apply Bernoulli from the (slow, open) top surface to the (fast, open) jet. Both are at atmospheric pressure, and if the tank is wide the surface barely moves ($$v_{\text{top}}\approx 0$$):

$$
p_{\text{atm}}+\rho g h = p_{\text{atm}}+\tfrac12\rho v^2
\quad\Longrightarrow\quad
\ v=\sqrt{2gh}\ .
$$

The efflux speed is the same as if the fluid had *free-fallen* the height $$h$$. A few standard extensions:

- **Range of the jet** from a hole at height $$y$$ in a tank of depth $$H$$: the jet leaves horizontally with $$v=\sqrt{2g(H-y)}$$ and falls for time $$t=\sqrt{2y/g}$$, landing at $$x=2\sqrt{y(H-y)}$$. This is maximized at $$y=H/2$$, and holes symmetric about the midpoint land at the same spot.
- **Draining time:** combine Torricelli with continuity ($$A_{\text{tank}}\,\dot h = -A_{\text{hole}}\sqrt{2gh}$$) and integrate to find how long a tank takes to empty — the level drops as $$\sqrt{h}$$, giving a finite emptying time.
- **Vena contracta:** real jets contract just past the hole to about $$62\%$$ of the hole area, so the actual flow rate is lower than the ideal $$A\sqrt{2gh}$$.

### The Venturi meter

A horizontal pipe narrows from area $$A_1$$ to $$A_2$$. Continuity speeds the fluid up in the throat; Bernoulli then says the throat pressure drops. Combining $$A_1v_1=A_2v_2$$ with Bernoulli (same height):

$$
p_1-p_2=\tfrac12\rho(v_2^2-v_1^2)
\quad\Longrightarrow\quad
v_1=A_2\sqrt{\frac{2(p_1-p_2)}{\rho(A_1^2-A_2^2)}}.
$$

Measuring the pressure drop (e.g. with a side manometer) gives the flow rate. The same effect, fast flow, low pressure, runs aspirators, carburetors, and atomizers.

### The Pitot tube

A Pitot tube measures flow *speed*. One opening faces the flow and stagnates it ($$v=0$$, **stagnation pressure** $$p_0=p+\tfrac12\rho v^2$$); another is parallel to the flow and reads the **static pressure** $$p$$. The difference is the **dynamic pressure** $$\tfrac12\rho v^2$$, so

$$
v=\sqrt{\frac{2(p_0-p)}{\rho}}.
$$

This is how aircraft measure airspeed.

---

## Momentum in fluids

Energy (Bernoulli) is only half the toolkit. Many problems — thrust, the force of a jet on a wall, propulsion — are *momentum* problems and are best handled by Newton's second law in the form

$$
\vec F_{\text{net}}=\frac{d\vec p}{dt}=\dot m\,\Delta \vec v,
$$

where $$\dot m=\rho A v$$ is the mass flow rate and $$\Delta\vec v$$ is the change in velocity the fluid undergoes. This is the **momentum-flux** or **control-volume** method: draw a box, add up the momentum flowing in and out, and that net rate equals the external force. Note that the derivative is on the *mass* term instead of the velocity term for fluids.

This same reasoning gives **rocket/jet thrust** ($$F=\dot m\,v_{\text{exhaust}}$$) and the force needed to hold a bent pipe carrying flowing water. Whenever a problem asks for a *force* on a moving fluid (rather than a speed or pressure), use momentum flux, not Bernoulli.

---

## Viscous flow

Real fluids resist shear. The **viscosity** $$\mu$$ (units $$\text{Pa·s}$$) relates shear stress to the velocity gradient between fluid layers (Newton's law of viscosity):

$$
\tau = \mu\,\frac{dv}{dy}.
$$

A fluid obeying this with constant $$\mu$$ is a **Newtonian** (water, air) fluid. Near a solid wall the fluid sticks to it, the **no-slip condition**, $$v=0$$ at the wall, which is what makes viscous problems have velocity *profiles* rather than plug flow.

### Poiseuille flow in a pipe

For steady laminar flow of a Newtonian fluid through a circular pipe of radius $$R$$ and length $$L$$ under pressure difference $$\Delta p$$, balancing the pressure force on a coaxial cylinder of radius $$r$$ against the viscous drag on its surface gives a **parabolic velocity profile** $$v(r)=\frac{\Delta p}{4\mu L}(R^2-r^2)$$. Integrating over the cross-section gives the volume flow rate (**Poiseuille's law**):

$$
\ Q=\frac{\pi R^4\,\Delta p}{8\mu L}
$$

### Stokes' law and terminal velocity

A small sphere of radius $$a$$ moving slowly at speed $$v$$ through a viscous fluid feels drag

$$
F_{\text{drag}}=6\pi\mu a v\qquad(\text{Stokes' law, valid at low Reynolds number}).
$$

A sphere falling through fluid reaches **terminal velocity** when drag + buoyancy balance weight:

$$
\tfrac{4}{3}\pi a^3\rho_{\text{sphere}}g = 6\pi\mu a v_t + \tfrac{4}{3}\pi a^3\rho_{\text{fluid}}g
\ \Longrightarrow
v_t=\frac{2a^2 g(\rho_{\text{sphere}}-\rho_{\text{fluid}})}{9\mu}.
$$

---

## Reynolds number and dimensional analysis

Whether flow is laminar or turbulent, and which drag law applies, is governed by the dimensionless **Reynolds number**:

$$
\mathrm{Re}=\frac{\rho v L}{\mu}=\frac{\text{inertial forces}}{\text{viscous forces}},
$$

with $$L$$ a characteristic length. Low $$\mathrm{Re}$$ (thick fluid, small/slow object): viscosity dominates, flow is laminar, Stokes drag $$\propto v$$. High $$\mathrm{Re}$$: inertia dominates, flow becomes turbulent, and drag goes as

$$
F_{\text{drag}}=\tfrac12 C_D\,\rho A v^2,
$$

quadratic in speed, with a drag coefficient $$C_D$$. The crossover in a pipe is around $$\mathrm{Re}\approx 2300$$.

**Dimensional analysis** deserves emphasis because it cracks many fluid problems with no calculation. If you suspect drag depends on $$\rho$$, $$v$$, $$L$$, $$\mu$$, the only dimensionless group is $$\mathrm{Re}$$, so the drag *must* take the form $$F=\rho v^2 L^2\, f(\mathrm{Re})$$ for some unknown function $$f$$. The two limits above are just the small- and large-$$\mathrm{Re}$$ behaviors of $$f$$. The **Buckingham Pi theorem** formalizes this: $$n$$ variables built from $$k$$ independent dimensions form $$n-k$$ independent dimensionless groups, and any physical law relates only those groups. On the olympiad, when you don't know the governing equation, list the variables, find the dimensionless combinations, and you're often most of the way to the answer. (See also the [Math Tricks](/notes/physics/mathtricks/) and [Problem Solving Techniques](/notes/physics/techniques/) notes.)

---

## Problem-solving strategy

A quick decision tree for what tool to grab:

:::strategy
1. **Nothing moves**: Hydrostatics. Use $$p=p_0+\rho g h$$, equal pressure at equal heights in connected fluid, and Archimedes for floating/submerged bodies.
2. **Whole fluid accelerates/rotates rigidly**: Effective gravity $$\vec g_{\text{eff}}=\vec g-\vec a$$; surfaces $$\perp$$ to it; rotating ⟶ parabolic surface.
3. **Steady flow, want a speed or pressure**: Continuity ($$Av=$$const) + Bernoulli. Choose two points on one streamline; know what each pressure and speed is (open surfaces are at $$p_{\text{atm}}$$; wide reservoirs are nearly at rest).
4. **Want a force on/from moving fluid**: Momentum flux $$F=\dot m\,\Delta v$$, not Bernoulli.
5. **Friction or small slow object matters**: Viscosity: Poiseuille for pipes, Stokes for spheres, Reynolds number to decide the type of flow.
6. **Don't know the governing law**: Dimensional analysis.
:::
