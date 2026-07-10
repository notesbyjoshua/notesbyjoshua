---
title: "Optics"
sidebar:
  order: 11
---

---

## Introduction to optics

Visible light is an electromagnetic wave with wavelength $$\lambda \sim 400\text{–}700\text{ nm}$$. This notes pages will separate optics into two parts: geometric optics and wave optics. Whether to treat it as rays or as waves depends on the size $$d$$ of the features it interacts with:

:::conditions
- $$\lambda \ll d$$: diffraction is negligible, light goes in straight rays — use **geometric optics** (mirrors, lenses, shadows).
- $$\lambda \sim d$$: bending and interference matter: use **wave optics** (slits, gratings, thin films).
:::

## Reflection

<div class="theorem-box">

**Theorem (Law of Reflection).** At a smooth surface, the angle of incidence equals the angle of reflection, both measured from the normal, and the incident ray, reflected ray, and normal are coplanar:

$$
\theta_i = \theta_r.
$$

</div>

A **plane mirror** forms a virtual, upright image the same size as the object, located as far behind the mirror as the object is in front. The image is reversed front-to-back (which is why text appears mirror-flipped). Think of it like staring into your standard bathroom mirror.

<div class="theorem-box">

**Example.** How tall must a vertical plane mirror be for you to see your whole body, and does the answer depend on how far you stand from it?

Let your eyes be at height $$E$$ and the top of your head at $$T$$, feet at the floor ($$0$$). To see the top of your head, a ray must leave the head, reflect off the mirror, and reach your eye. By the law of reflection the reflection point lies exactly **halfway** in height between the head and the eye, at height $$(T+E)/2$$. To see your feet, the ray reflects at height $$E/2$$ (halfway between eye and floor). The mirror therefore only needs to span from $$E/2$$ to $$(T+E)/2$$, a length

$$
\frac{T+E}{2}-\frac{E}{2}=\frac{T}{2}=\frac{H}{2},
$$

where $$H=T$$ is your full height. The required length is **half your height**, and notice the horizontal distance to the mirror canceled completely — the reflection-point heights depend only on the heights of head, eye, and feet, not on how far away the mirror is. The mirror's *position* (it must be hung with its bottom edge at $$E/2$$) is what matters, not its distance.

</div>

## Refraction and Snell's law

Refraction is the phenomena where light bends when entering a different medium (substance).

<div class="theorem-box">

**Definition (Index of refraction).** The index of refraction of a medium is defined as

$$
n = \frac{c}{v},
$$

the ratio of the speed of light in vacuum to its speed in the medium ($$n \ge 1$$).

</div>

Crossing a boundary, the ray bends according to **Snell's law**:

<div class="theorem-box">

**Theorem (Snell's law).** At a boundary between media of indices $$n_1$$ and $$n_2$$,

$$
n_1\sin\theta_1 = n_2\sin\theta_2.
$$

</div>

Going into a denser medium (larger $$n$$), the ray bends *toward* the normal. Across the boundary the *requency stays fixed (it is set by the source), so the wavelength must change:

$$
\lambda_{\text{medium}} = \frac{\lambda_0}{n}.
$$

<div class="theorem-box">

**Example.** A coin lies at depth $$d$$ at the bottom of a pool of water (index $$n$$). Looking straight down, how deep does it appear?

A ray leaves the coin at a small angle $$\theta_1$$ to the vertical inside the water and refracts to angle $$\theta_2$$ in air, with $$n\sin\theta_1=\sin\theta_2$$. Trace two such rays back: to the eye they appear to diverge from a shallower point at apparent depth $$d'$$. If the rays emerge at horizontal distance $$x$$ from the point above the coin, then $$\tan\theta_1=x/d$$ and $$\tan\theta_2=x/d'$$, so

$$
\frac{d'}{d}=\frac{\tan\theta_1}{\tan\theta_2}.
$$

For near-normal viewing all angles are small, so $$\tan\theta\approx\sin\theta$$, and Snell gives $$\sin\theta_2=n\sin\theta_1$$. Hence

$$
\frac{d'}{d}=\frac{\sin\theta_1}{\sin\theta_2}=\frac{1}{n}
\quad\Longrightarrow\quad
d'=\frac{d}{n}.
$$

A pool of true depth $$1.0\text{ m}$$ ($$n=1.33$$) looks only $$0.75\text{ m}$$ deep — which is why pools always seem shallower than they are. (Viewed at a steep angle the apparent depth shrinks further, since $$\tan$$ and $$\sin$$ diverge.)

</div>

### Total internal reflection

When light travels from a denser to a less dense medium ($$n_1 > n_2$$), Snell's law has no solution once $$\theta_2$$ would exceed $$90^\circ$$.

<div class="theorem-box">

**Definition (Critical angle).** Define the critical angle as the angle where all the light is reflected back instead of refracting (**total internal reflection (TIR)**). The angle is given by:

$$
\sin\theta_c = \frac{n_2}{n_1},
$$

</div>

This is how optical fibers trap light and why a diamond ($$n\approx 2.4$$, so $$\theta_c \approx 24^\circ$$) sparkles. For a water–air boundary $$\theta_c=48.6^\circ$$; for a typical glass ($$n=1.5$$) it is $$\arcsin(1/1.5)=41.8^\circ$$, which is why a $$45^\circ$$ glass prism makes a perfect internal mirror in binoculars.

## Thin lenses and ray tracing

A thin lens is a lens that we assumed to ahve no width and one that obeys the **thin-lens equation** (looks exactly like the mirror equation) and magnification:

$$
\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i},
\qquad
m = -\frac{d_i}{d_o}=-\frac{h_i}{h_o}.
$$

$$h_i$$ and $$h_o$$ are the heights of the image and the object, respectively. Note that a negative height/magnitude means the image is inverted. 

<div class="theorem-box">

**Proof (Thin lens equation).** A concave mirror has center of curvature $$C$$ at distance $$R$$ from the vertex. A paraxial ray from an axial object $$O$$ (distance $$d_o$$) strikes the mirror at height $$h$$ and reflects to the image $$I$$ (distance $$d_i$$). Let the ray hit at angle $$\theta$$ to the radius (the local normal). Let $$\alpha,\beta,\gamma$$ be the angles the object ray, image ray, and radius make with the axis:

$$
\alpha\approx\frac{h}{d_o},\qquad \beta\approx\frac{h}{d_i},\qquad \gamma\approx\frac{h}{R}.
$$

The radius bisects incident and reflected rays (law of reflection), and the exterior-angle relations of the two triangles give $$\gamma=\alpha+\theta$$ and $$\beta=\gamma+\theta$$. Eliminating $$\theta$$,

$$
\alpha+\beta=2\gamma
\quad\Longrightarrow\quad
\frac{1}{d_o}+\frac{1}{d_i}=\frac{2}{R}.
$$

Parallel rays ($$d_o\to\infty$$) focus at $$d_i=R/2$$, defining the focal length $$f=R/2$$, so

$$
\frac{1}{d_o}+\frac{1}{d_i}=\frac{1}{f}.
$$

// change this to fit thin lens instead of curved mirror

</div>

### The lensmaker's equation

<div class="theorem-box">

**Theorem (Lensmaker's equation)** // add the theorem of the lensmaker equation, including sign conventions

</div>

A thin lens is just two spherical surfaces back-to-back. Applying the single-surface formula twice and adding gives the lensmaker's equation as a clean proof.

<div class="theorem-box">

**Proof (Lensmaker's equation).** A thin lens of index $$n$$ sits in air ($$n_{\text{air}}=1$$), with front surface radius $$R_1$$ and back surface $$R_2$$. **Surface 1** (air $$\to$$ glass) images the object at $$s_o$$ to an intermediate image at $$s_i'$$:

$$
\frac{1}{s_o}+\frac{n}{s_i'}=\frac{n-1}{R_1}.
$$

This intermediate image acts as the object for **surface 2** (glass $$\to$$ air). For a *thin* lens the two surfaces coincide, so the object distance for surface 2 is $$-s_i'$$ (a real image behind surface 1 is a virtual object for surface 2). Thus

$$
\frac{n}{-s_i'}+\frac{1}{s_i}=\frac{1-n}{R_2}.
$$

Add the two equations; the $$\pm n/s_i'$$ terms cancel:

$$
\frac{1}{s_o}+\frac{1}{s_i}=(n-1)\!\left(\frac{1}{R_1}-\frac{1}{R_2}\right).
$$

Comparing to the thin-lens form $$1/s_o+1/s_i=1/f$$ identifies the focal length:

$$
\ \frac{1}{f}=(n-1)\!\left(\frac{1}{R_1}-\frac{1}{R_2}\right)\ .
$$

</div>

### Types of thin lenses

The words **convex** and **concave** describe the shape; **converging** and **diverging** describe what the lens does to parallel rays in its surrounding medium.

| Lens shape | Cross-section idea | In air | Sign of $$f$$ | Ray behavior |
| --- | --- | --- | --- | --- |
| Biconvex | thickest in the middle | converging | $$+$$ | parallel rays meet at the far focal point |
| Plano-convex | one flat side, one convex side | converging | $$+$$ | common simple positive lens |
| Positive meniscus | one convex and one concave side, thicker in middle | converging | $$+$$ | weaker/aberration-controlled positive lens |
| Biconcave | thinnest in the middle | diverging | $$-$$ | parallel rays spread as if from the near focal point |
| Plano-concave | one flat side, one concave side | diverging | $$-$$ | common simple negative lens |
| Negative meniscus | one convex and one concave side, thinner in middle | diverging | $$-$$ | weaker/aberration-controlled negative lens |

// add a photo of each type of lens

In ordinary air, a lens thicker in the middle is usually converging and a lens thinner in the middle is usually diverging. If the surrounding medium has a higher index than the lens, the behavior can reverse, because the lensmaker's equation depends on the index contrast, not just the visual shape.

### Principal rays for lenses

For ray tracing, we assume that light emits from an object as rays in every direction. However, to determine the position of the image, we only need to draw the three principal rays from the top of the object. When the outgoing rays meet, it forms the image. If the outgoing rays diverge, extend them backward with dashed lines; where the extensions meet is a virtual image (it would have existed there in the eyes of an observer).

For a **converging (biconvex) lens**:

1. A ray parallel to the axis refracts through the far focal point.
2. A ray through the near focal point emerges parallel to the axis.
3. A ray through the center of a thin lens continues nearly straight.

For a **diverging (biconcave) lens**:

1. A ray parallel to the axis refracts outward as if it came from the near focal point.
2. A ray aimed toward the far focal point emerges parallel to the axis.
3. A ray through the center of a thin lens continues nearly straight.

:::tip{title="Ray-tracing first, equation second"}
Ray tracing tells you the image type before algebra: real or virtual, upright or inverted, enlarged or reduced. Then the thin-lens equation gives the exact distance and magnification.
:::

### Image cases

For a converging lens:

- $$d_o>2f$$: real, inverted, reduced image between $$f$$ and $$2f$$.
- $$d_o=2f$$: real, inverted, same-size image at $$2f$$.
- $$f<d_o<2f$$: real, inverted, enlarged image beyond $$2f$$.
- $$d_o=f$$: outgoing rays are parallel, so the image is at infinity.
- $$d_o<f$$: virtual, upright, enlarged image on the object side.

For a diverging lens with a real object, the image is always virtual, upright, reduced, and on the object side.

<div class="theorem-box">

**Example.** An object sits $$30\text{ cm}$$ in front of a converging lens of focal length $$f = 10\text{ cm}$$. Use ray tracing first, then calculate the image location and magnification.

Since $$d_o=30\text{ cm}>2f$$, the ray diagram should give a real, inverted, reduced image between $$f$$ and $$2f$$ on the far side. Now use the thin-lens equation:

$$
\frac{1}{d_i} = \frac{1}{f} - \frac{1}{d_o} = \frac{1}{10} - \frac{1}{30} = \frac{2}{30},
\qquad
d_i = 15\text{ cm}.
$$

Since $$d_i > 0$$, the image is **real** and on the far side of the lens. The magnification is

$$
m = -\frac{d_i}{d_o} = -\frac{15}{30} = -0.5,
$$

so the image is **inverted** and **half** the object's size — exactly the behavior of a camera or a projected slide.

</div>

For a system of lenses, work through them one at a time: the image of the first lens becomes the object of the second (a real image on the incoming side of the next lens counts as a positive object distance; an image that would form behind it is a virtual object with negative distance). The total magnification is the product, $$m = m_1 m_2 \cdots$$.

## Fermat's principle

<div class="theorem-box">

**Theorem (Fermat's principle).** Light travels between two points along the path that takes a **stationary** (usually minimum) time. This is why light sometimes won't take a straight path from one point to another.

</div>

<div class="theorem-box">

**Proof (Snell's Law, using Fermat's principle).** Light goes from point $$A$$ in medium $$1$$ to point $$B$$ in medium $$2$$, crossing the boundary at horizontal position $$x$$. If $$A$$ is height $$a$$ above the boundary at horizontal $$0$$, and $$B$$ is depth $$b$$ below at horizontal $$d$$, the travel time is

$$
t(x) = \frac{\sqrt{a^2 + x^2}}{v_1} + \frac{\sqrt{b^2 + (d-x)^2}}{v_2}.
$$

This can be derived from Pythagorean theorem and basic kinematics. Setting $$dt/dx = 0$$,

$$
\frac{x}{v_1\sqrt{a^2+x^2}} - \frac{d-x}{v_2\sqrt{b^2+(d-x)^2}} = 0.
$$

The two fractions are equal to $$\sin\theta_1/v_1$$ and $$\sin\theta_2/v_2$$, so

$$
\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2}
\quad\Longrightarrow\quad
n_1\sin\theta_1 = n_2\sin\theta_2,
$$

using $$n = c/v$$. The law of reflection follows from the same principle with both points in one medium.

</div>

## Dispersion

The index of refraction actually depends slightly on wavelength, $$n(\lambda)$$, with blue light (short $$\lambda$$) refracting more than red in most glass. This **dispersion** is why a prism spreads white light into a spectrum and why rainbows form (refraction + internal reflection + dispersion in water droplets).

### Gradient-index refraction and mirages

When the index varies *continuously* rather than in a sharp jump, Snell's law still applies across each infinitesimal layer, and the quantity $$n\sin\theta$$ (angle from the vertical) is conserved along the ray. The ray curves smoothly, always **bending toward the region of higher $$n$$**: toward slower light. Applying Snell's law to two nearby heights, a ray climbing through an index gradient turns through an angle $$\approx (1/n)\,(dn/dh)$$ per unit horizontal distance.

This is the physics of **mirages**. In the atmosphere $$n - 1 \propto \rho \propto P/T$$, so a temperature gradient bends light:

- Over hot ground (desert road), the air is hottest at the bottom, so $$n$$ *increases* with height and rays bend upward. You see an inverted image of the sky on the ground — the shimmering "water" of an **inferior mirage**.
- In a thermal inversion (cold air below warm, e.g. over cold water), $$n$$ decreases with height, rays bend down to follow the Earth's curvature, and distant objects appear lifted above the horizon — a **superior mirage**.

If the downward bending is strong enough to match the Earth's curvature, $$dn/dh = -n/R$$, light rays literally orbit at constant height and you can see beyond the geometric horizon.

## Refraction at a spherical surface

Before lenses, consider a single spherical refracting surface of radius $$R$$ separating media $$n_1$$ (object side) and $$n_2$$. This is the building block for the lensmaker's equation. We use the **real-is-positive** convention: object distance $$s_o>0$$ for a real object in front, image distance $$s_i>0$$ for a real image on the far side, and $$R>0$$ when the center of curvature is on the far (outgoing) side.

<div class="theorem-box">

**Proof (Single-surface refraction).** Take a point object $$O$$ on the axis at distance $$s_o$$ in front of a surface with center of curvature $$C$$ at distance $$R$$ behind the vertex. A paraxial ray leaves $$O$$, hits the surface at height $$h$$, and refracts toward the image $$I$$ at distance $$s_i$$. Let $$\alpha,\beta,\gamma$$ be the (small) angles the object ray, image ray, and surface normal (the radius) make with the axis, so

$$
\alpha\approx\frac{h}{s_o},\qquad \beta\approx\frac{h}{s_i},\qquad \gamma\approx\frac{h}{R}.
$$

The angle of incidence (from the normal) is $$\theta_1=\alpha+\gamma$$ and the refraction angle is $$\theta_2=\gamma-\beta$$ (exterior-angle geometry of the small triangles). Paraxial Snell, $$n_1\theta_1=n_2\theta_2$$, gives

$$
n_1(\alpha+\gamma)=n_2(\gamma-\beta).
$$

Substitute the angle expressions and divide by $$h$$:

$$
n_1\!\left(\frac{1}{s_o}+\frac{1}{R}\right)=n_2\!\left(\frac{1}{R}-\frac{1}{s_i}\right)
\quad\Longrightarrow\quad
\ \frac{n_1}{s_o}+\frac{n_2}{s_i}=\frac{n_2-n_1}{R}\ .
$$

</div>

<div class="theorem-box">

**Example.** A fish sits a distance $$p=20\text{ cm}$$ from the near wall of a large spherical fishbowl of radius $$R=30\text{ cm}$$ (water $$n_1=1.33$$, air $$n_2=1.00$$, glass thin enough to ignore). Where does the fish appear to an outside observer?

Light goes water $$\to$$ air, so $$n_1=1.33$$, $$n_2=1.00$$. The surface bulges *toward* the observer (outgoing side), and the center of curvature $$C$$ lies on the object (water) side, so by our convention $$R=-30\text{ cm}$$. With $$s_o=20\text{ cm}$$,

$$
\frac{1.33}{20}+\frac{1.00}{s_i}=\frac{1.00-1.33}{-30}=\frac{-0.33}{-30}=0.0110.
$$

So $$1.00/s_i=0.0110-0.0665=-0.0555$$, giving $$s_i=-18.0\text{ cm}$$. The negative sign means a **virtual** image on the object side: the fish appears about $$18\text{ cm}$$ behind the glass (closer than its true $$20\text{ cm}$$), slightly magnified — which is why fish in round bowls look closer and bigger than they are.

</div>

## Spherical mirrors

A spherical mirror of radius $$R$$ has focal length

$$
f = \frac{R}{2}.
$$

Object and image distances obey the **thin lens equation** (as described above).

**Sign conventions** (real-is-positive):

- $$d_o > 0$$ for a real object in front of the mirror.
- $$d_i > 0$$ for a real image (same side as object, in front); $$d_i < 0$$ for a virtual image (behind).
- $$f > 0$$ for a concave (converging) mirror; $$f < 0$$ for convex (diverging).
- $$m > 0$$ upright, $$m < 0$$ inverted; $$\lvert m \rvert > 1$$ enlarged.

The reason a curved mirror focuses at all comes out cleanly for **conic-section** shapes, which have exact reflection properties:

- An **ellipse** reflects every ray from one focus to the other focus.
- A **parabola** reflects all rays parallel to its axis to a single focus (and vice versa) — the principle behind satellite dishes, headlights, and reflecting telescopes. A parabola is just an ellipse with its second focus sent to infinity, which is why parallel rays (a source at infinity) come to a point.
- A **hyperbola** reflects rays aimed at one focus so they diverge as if from the other.

A spherical mirror only *approximates* a parabola near its axis; rays striking far from the axis miss the focus, an error called **spherical aberration**.

---

## Prisms and minimum deviation

A ray passing through a prism of apex angle $$A$$ is bent through a total **deviation** $$\delta$$ — the angle between the incoming and outgoing rays. Refraction at each face turns the ray, and the geometry of the two faces gives

$$
\delta=(\theta_1-r_1)+(\theta_2-r_2)=\theta_1+\theta_2-A,
\qquad r_1+r_2=A,
$$

where $$\theta_1,\theta_2$$ are the external angles at the two faces and $$r_1,r_2$$ the internal angles. (The relation $$r_1+r_2=A$$ comes from the triangle formed by the two normals and the apex.)

<div class="theorem-box">

**Proof (Minimum deviation).** As $$\theta_1$$ varies, $$\delta(\theta_1)$$ has a minimum. At the minimum, $$d\delta/d\theta_1=0$$. Since $$\delta=\theta_1+\theta_2-A$$,

$$
\frac{d\delta}{d\theta_1}=1+\frac{d\theta_2}{d\theta_1}=0
\quad\Longrightarrow\quad
\frac{d\theta_2}{d\theta_1}=-1.
$$

Differentiating Snell at each face ($$\sin\theta_1=n\sin r_1$$, $$\sin\theta_2=n\sin r_2$$) and the constraint $$r_1+r_2=A$$ (so $$dr_1=-dr_2$$), one finds this is satisfied only for the **symmetric** ray:

$$
\theta_1=\theta_2,\qquad r_1=r_2=\frac{A}{2}.
$$

Then $$\delta_m=2\theta_1-A$$, so $$\theta_1=(A+\delta_m)/2$$, and Snell at the first face $$\sin\theta_1=n\sin r_1$$ gives

$$
\ n=\frac{\sin\!\frac{A+\delta_m}{2}}{\sin\!\frac{A}{2}}\ .
$$

This symmetric, minimum-deviation configuration is how prism spectrometers measure $$n$$ precisely: rotate the prism until the deviated image stops moving and reverses.

</div>

For a **thin prism** ($$A$$ small), all angles are small, so $$\sin\theta\approx\theta$$ and the formula linearizes to $$n\approx\dfrac{(A+\delta)/2}{A/2}=\dfrac{A+\delta}{A}$$, giving

$$
\delta=(n-1)A.
$$

## The rainbow

A rainbow is sunlight refracting into a spherical raindrop, reflecting once off the back, and refracting out. The classic olympiad calculation finds the angle at which this light piles up.

<div class="theorem-box">

**Proof (Primary rainbow angle).** A ray enters the drop at incidence angle $$i$$, refracting to $$r$$ with $$\sin i=n\sin r$$. It bends by $$(i-r)$$ at entry, reflects off the back turning by $$(180^\circ-2r)$$, and bends by $$(i-r)$$ again on exit. The **total deviation** is

$$
D(i)=2(i-r)+(180^\circ-2r)=180^\circ+2i-4r.
$$

Light scattered by the drop bunches up at the angle where $$D$$ is stationary (rays near it all emerge in nearly the same direction — a caustic), so set $$dD/di=0$$:

$$
\frac{dD}{di}=2-4\frac{dr}{di}=0
\quad\Longrightarrow\quad
\frac{dr}{di}=\frac{1}{2}.
$$

Differentiate Snell, $$\cos i=n\cos r\,\dfrac{dr}{di}=\dfrac{n}{2}\cos r$$, so $$2\cos i=n\cos r$$. Square and use $$n^2\cos^2 r=n^2-n^2\sin^2 r=n^2-\sin^2 i$$:

$$
4\cos^2 i=n^2-\sin^2 i=n^2-(1-\cos^2 i)
\quad\Longrightarrow\quad
3\cos^2 i=n^2-1,
$$

$$
\ \cos i=\sqrt{\frac{n^2-1}{3}}\ .
$$

For water $$n=1.33$$: $$\cos i=\sqrt{(1.769-1)/3}=\sqrt{0.256}=0.506$$, so $$i=59.6^\circ$$, $$\sin r=\sin i/n=0.863/1.33=0.649$$, $$r=40.4^\circ$$. Then

$$
D_{\min}=180^\circ+2(59.6^\circ)-4(40.4^\circ)=137.5^\circ.
$$

The rainbow is seen at $$180^\circ-D_{\min}=42.5^\circ$$ from the antisolar point — the familiar $$\approx 42^\circ$$ primary bow.

</div>

Because $$n$$ is larger for blue light, blue deviates more (smaller rainbow angle), so **red is on the outside, violet on the inside** of the primary bow. The **secondary bow** comes from rays that reflect *twice* inside the drop, with deviation $$D=360^\circ+2i-6r$$; minimizing gives a bow at $$\approx 51^\circ$$ with **reversed** color order (red inside). Between the two bows, $$42^\circ$$–$$51^\circ$$, very little light emerges from any drop — the noticeably darker band of sky known as **Alexander's dark band**.

## Ray transfer (ABCD) matrices

For paraxial rays, a ray at a plane is described by its height $$y$$ and slope $$\theta$$ (small angle). Each optical element acts as a $$2\times 2$$ matrix on the vector $$\begin{pmatrix}y\\\theta\end{pmatrix}$$, and a whole system is the **product** of the element matrices (applied right-to-left, in the order light meets them).

- **Free propagation** a distance $$d$$: $$y\to y+d\theta$$, slope unchanged:

$$
M_{\text{prop}}=\begin{pmatrix}1&d\\0&1\end{pmatrix}.
$$

- **Thin lens** of focal length $$f$$: height unchanged, slope bent by $$-y/f$$:

$$
M_{\text{lens}}=\begin{pmatrix}1&0\\-1/f&1\end{pmatrix}.
$$

- **Refraction at a curved surface** (radius $$R$$, $$n_1\to n_2$$):

$$
M_{\text{surf}}=\begin{pmatrix}1&0\\[2pt]\dfrac{n_1-n_2}{n_2 R}&\dfrac{n_1}{n_2}\end{pmatrix}.
$$

For a system matrix $$M=\begin{pmatrix}A&B\\C&D\end{pmatrix}$$, the imaging condition (all rays from an object point reconverge regardless of slope) is $$B=0$$, and then $$A$$ is the magnification. The element $$C$$ gives the system focal length via $$C=-1/f_{\text{eff}}$$.

For two thin lenses separated by distance $$d$$, the matrix product gives the useful effective-focal-length result

$$
\frac{1}{f_{\text{eff}}}=\frac{1}{f_1}+\frac{1}{f_2}-\frac{d}{f_1f_2}.
$$

Setting $$d=0$$ gives the contact-lens rule $$1/f=1/f_1+1/f_2$$.

## Optical instruments

The eye's relaxed near point is $$25\text{ cm}$$; angular magnification compares the angle an object subtends through the instrument to the angle it would subtend held at $$25\text{ cm}$$.

- **Simple magnifier** (object at the focal point, image at infinity): $$M=\dfrac{25\text{ cm}}{f}$$.
- **Refracting telescope** (objective $$f_o$$, eyepiece $$f_e$$, in afocal configuration): $$M=-\dfrac{f_o}{f_e}$$ (the minus sign = inverted image).
- **Compound microscope** (objective forms a real image at tube length $$L$$, eyepiece magnifies it): $$M\approx-\dfrac{L}{f_o}\cdot\dfrac{25\text{ cm}}{f_e}$$.

## Huygens' principle

Wave optics rests on **Huygens' principle**: every point on a wavefront acts as a source of secondary spherical wavelets, and the new wavefront is their envelope a moment later. This reproduces straight-line propagation, reflection, and refraction, and — crucially — explains why waves bend (diffract) around edges and through gaps.

<div class="theorem-box">

**Coherence.** Interference fringes only appear if the two combining waves keep a *stable* phase relationship; such waves are called **coherent**. This is hard with ordinary light: even a single-frequency lamp's phase wobbles randomly on nanosecond timescales, and two separate lamps never stay in step, so their interference term averages to zero and you see no fringes. The 19th-century fix was to illuminate the experiment through a tiny pinhole, so that the light reaching both slits originates from the same point and is automatically in phase with itself — good enough that even sunlight works. Lasers make this trivial today, since they emit highly coherent light. For the idealized problems below we assume perfect coherence, but in any real setup it is the first thing to check.

</div>

## Interference: Young's double slit

Two coherent sources (or one wavefront split by two slits a distance $$d$$ apart) produce alternating bright and dark fringes on a distant screen. For a screen far away, the path difference to a point at angle $$\theta$$ is $$d\sin\theta$$, giving

$$
d\sin\theta = m\lambda \;\;(\text{bright}),
\qquad
d\sin\theta = (m+\tfrac12)\lambda \;\;(\text{dark}),
$$

for integer $$m$$. For small angles on a screen a distance $$L$$ away, the fringes are evenly spaced by

$$
\Delta y = \frac{\lambda L}{d}.
$$

<div class="theorem-box">

**Example.** Light of wavelength $$\lambda = 600\text{ nm}$$ falls on two slits $$d = 0.20\text{ mm}$$ apart, and the pattern is viewed on a screen $$L = 1.5\text{ m}$$ away. How far apart are adjacent bright fringes?

**Solution.** The fringe spacing is

$$
\Delta y = \frac{\lambda L}{d} = \frac{(600\times 10^{-9})(1.5)}{0.20\times 10^{-3}} = 4.5\times 10^{-3}\text{ m} = 4.5\text{ mm}.
$$

Measuring this spacing is a standard way to determine an unknown wavelength.

</div>

When mirrors or lenses are in the way, computing path-length differences directly is a nightmare. The shortcut is that **any image — real or virtual — can be treated as its own coherent point source**, so you measure path differences starting from the images rather than tracing all the way back to the original object. (For a real image this follows from Fermat's principle: every ray from object to image takes the same time, so they all arrive in phase and leave the image in phase.) Setups like **Lloyd's mirror** or two slightly tilted mirrors reduce to an ordinary double slit whose two "slits" are the image sources — even though there is only one real light source. A useful caution: reflection adds a phase of $$\pi$$, though it often cancels out when both images reflect the same way.

## The Michelson interferometer

A beamsplitter sends light down two perpendicular arms to mirrors and recombines them. Moving one mirror by $$\Delta L$$ changes that arm's round-trip path by $$2\,\Delta L$$, sweeping the central fringe through $$m$$ bright–dark cycles:

$$
2\,\Delta L=m\lambda
\quad\Longrightarrow\quad
\Delta L=\frac{m\lambda}{2}.
$$

Each fringe that passes corresponds to moving the mirror a half-wavelength — a beautifully sensitive ruler.

Inserting a gas cell of length $$\ell$$ and changing its index by $$\Delta n$$ shifts the fringe count by

$$
\Delta m=\frac{2\ell\,\Delta n}{\lambda},
$$

because the light passes through the cell twice.

## Thin films

Light reflecting off the top and bottom of a thin film of thickness $$t$$ and index $$n$$ interferes. Two subtleties decide the condition:

1. The path difference inside the film is $$2nt$$ (using the wavelength in the film).
2. A reflection off a **higher-index** medium flips the phase by $$\pi$$ (half a wavelength); off a lower-index medium it does not.

For a film with a higher index than its surroundings on both sides (e.g. a soap film in air), only the top reflection flips, giving a net half-wavelength shift, so

$$
2nt = (m+\tfrac12)\lambda \;\;(\text{constructive}),
\qquad
2nt = m\lambda \;\;(\text{destructive}).
$$

If instead there is a phase flip at *both* surfaces (or neither), the conditions swap. Always count the $$\pi$$-shifts first — this is the most common place to go wrong.

<div class="theorem-box">

**Example.** A camera lens ($$n_{\text{glass}}=1.52$$) is coated with magnesium fluoride ($$n=1.38$$) to suppress reflection at $$\lambda=550\text{ nm}$$ (green). Find the minimum coating thickness, and state the index that would give *zero* reflection.

Light reflects off air$$\to$$coating ($$1.00\to1.38$$, $$\pi$$ flip) and coating$$\to$$glass ($$1.38\to1.52$$, also a $$\pi$$ flip). Both flip, so the flips cancel and destructive interference of the reflections requires the round-trip path to be a half-integer number of in-film wavelengths:

$$
2nt=(m+\tfrac12)\lambda.
$$

The minimum is $$m=0$$:

$$
t=\frac{\lambda}{4n}=\frac{550\text{ nm}}{4(1.38)}=99.6\text{ nm}\approx 100\text{ nm}.
$$

This is the standard quarter-wave coating, $$t=\lambda/(4n)$$. For the two reflected amplitudes to be *equal* (and thus cancel completely), the coating index should be the geometric mean of its neighbors:

$$
n_{\text{coat}}=\sqrt{n_{\text{air}}\,n_{\text{glass}}}=\sqrt{1.00\times1.52}=1.23.
$$

MgF$$_2$$ at $$1.38$$ is the closest cheap, durable material — hence the faint purple sheen on coated lenses.

</div>

For Newton's rings, where a plano-convex lens sits on a flat plate and makes a thin air gap, the reflected pattern has a dark center and dark-ring radii

$$
r_m=\sqrt{m\lambda R},
\qquad m=0,1,2,\dots,
$$

where $$R$$ is the lens radius of curvature. This comes from $$t\approx r^2/(2R)$$ and one reflection phase flip.

## Diffraction

A wave passing through a single slit of width $$a$$ spreads out, producing a broad central maximum flanked by weaker side maxima. The **minima** occur at

$$
a\sin\theta = m\lambda,
\qquad m = 1, 2, 3, \dots
$$

(note: this is the condition for *dark* fringes, the opposite of the double-slit bright condition). The central maximum is twice as wide as the others, with angular half-width $$\sin\theta \approx \lambda/a$$ — narrower slits diffract more.

<div class="theorem-box">

**Example.** A slit of width $$a=0.10\text{ mm}$$ is lit by $$\lambda=633\text{ nm}$$ (He–Ne laser); the pattern falls on a screen $$L=2.0\text{ m}$$ away. How wide is the central bright band?

The first minima sit at $$\sin\theta=\lambda/a$$, and for small angles $$y=L\tan\theta\approx L\lambda/a$$. The central maximum spans from $$-y$$ to $$+y$$, so its full width is

$$
W=2L\frac{\lambda}{a}=2(2.0)\frac{633\times10^{-9}}{0.10\times10^{-3}}=2.5\times10^{-2}\text{ m}=2.5\text{ cm}.
$$

Note the central band is *twice* as wide as the side fringes (whose spacing is $$L\lambda/a$$), and it widens as the slit narrows — the hallmark of diffraction.

</div>

A **diffraction grating** with $$N$$ closely spaced slits of separation $$d$$ produces very sharp bright lines (**principal maxima**) wherever

$$
d\sin\theta = m\lambda.
$$

Summing the $$N$$ equally spaced, equal-phase-step contributions as a geometric series gives the intensity

$$
I(\theta) \propto \frac{\sin^2\!\big(N\,\tfrac{k\Delta r}{2}\big)}{\sin^2\!\big(\tfrac{k\Delta r}{2}\big)},
\qquad \Delta r = d\sin\theta,
$$

a set of tall, sharp **principal maxima** (where all slits are in phase, $$d\sin\theta = m\lambda$$) separated by $$N-2$$ faint secondary maxima. More slits make the principal maxima sharper and brighter, which is why gratings outperform double slits for measuring wavelengths and separating spectral lines.

The quality of a grating as a spectrometer is its **resolving power** — the ratio $$R = \lambda/\Delta\lambda$$ of a wavelength to the smallest wavelength difference it can split apart. Taking two lines to be just resolved when the maximum of one sits on the first minimum of the other (the Rayleigh criterion again) gives a strikingly simple result:

$$
R = \frac{\lambda}{\Delta\lambda} = Nm,
$$

the number of slits times the diffraction order. To resolve finer spectral detail you either illuminate more lines or work at a higher order.

## Resolution and the Rayleigh criterion

Diffraction sets a fundamental limit on resolving two nearby point sources through an aperture of diameter $$D$$. By the **Rayleigh criterion**, they are just resolvable when the center of one diffraction pattern falls on the first minimum of the other, at angular separation

$$
\theta_{\min} = 1.22\,\frac{\lambda}{D}.
$$

Bigger apertures (telescope mirrors, eye pupils) and shorter wavelengths give finer resolution.

## Babinet's principle

**Babinet's principle** states that an opaque obstacle and an aperture of the *same shape* produce identical diffraction patterns (away from the central beam). The argument is short: the aperture and the obstacle are complementary, so their amplitudes add up to the wave you'd get with no screen at all — a single bright forward spot and darkness elsewhere. At any point that *would* be dark, the two amplitudes must therefore be equal and opposite, hence equal in magnitude, so they give the same intensity.

The practical payoff is that you can analyze diffraction off a small object (a wire, a strand of fiber, a dust speck, a circular disk) by pretending it is a slit or hole of the same size. It is what lets a laser pointer aimed at a helical spring — or X-rays aimed at the double helix of DNA — reveal the structure's spacing and pitch from the diffraction pattern alone.

## Polarization

Because light is a transverse wave, the orientation of its electric field — its **polarization** — matters. An ideal polarizer transmits only the field component along its axis. Unpolarized light passing through a polarizer loses half its intensity and emerges polarized.

For light already polarized at angle $$\theta$$ to a polarizer's axis, **Malus's law** gives the transmitted intensity:

$$
I = I_0\cos^2\theta.
$$

<div class="theorem-box">

**Example.** Unpolarized light of intensity $$I_0$$ passes through three ideal polarizers with axes at $$0^\circ$$, $$45^\circ$$, and $$90^\circ$$. Find the transmitted intensity, and explain the surprise that *removing* the middle one blocks all the light.

After the first polarizer, unpolarized light is halved and polarized at $$0^\circ$$: $$I_1=\tfrac12 I_0$$. The second polarizer is at $$45^\circ$$ to that:

$$
I_2=I_1\cos^2 45^\circ=\tfrac12 I_0\cdot\tfrac12=\tfrac14 I_0.
$$

The third is at $$90^\circ$$, i.e. $$45^\circ$$ from the *second's* axis:

$$
I_3=I_2\cos^2 45^\circ=\tfrac14 I_0\cdot\tfrac12=\frac{I_0}{8}.
$$

So $$I_0/8$$ gets through. The surprise: with only the $$0^\circ$$ and $$90^\circ$$ polarizers (crossed), $$\cos^2 90^\circ=0$$ and **nothing** passes. Inserting the $$45^\circ$$ polarizer in between *re-projects* the field onto an intermediate axis at each step, so neither projection is a full $$90^\circ$$ — light leaks through. A polarizer is not a passive filter that only removes; it actively *rotates* the polarization onto its own axis.

</div>

Light can also be polarized by **reflection**. At **Brewster's angle** the reflected ray is completely polarized (parallel to the surface), and this happens exactly when the reflected and refracted rays are perpendicular:

$$
\tan\theta_B = \frac{n_2}{n_1}.
$$

For sunlight reflecting off water, $$\theta_B=\arctan(1.33)=53.1^\circ$$ from the normal. The reflected glare is polarized parallel to the surface, which is why vertically oriented polarized sunglasses reduce it.

---

## Problem-solving strategy

A quick decision tree for picking the right tool:

:::strategy{title="Choosing the right optics tool"}
1. **Features much larger than $$\lambda$$ (mirrors, lenses, shadows)**: Geometric optics. Trace rays, apply the law of reflection $$\theta_i=\theta_r$$ and Snell's law $$n_1\sin\theta_1=n_2\sin\theta_2$$. For plane-mirror geometry, reflection-point heights (mirror length $$=H/2$$) and image counts ($$N=360^\circ/\phi-1$$) follow from equal-angle ray tracing.
2. **Image formation by a mirror or lens**: Use $$\frac{1}{f}=\frac{1}{d_o}+\frac{1}{d_i}$$ with $$m=-\frac{d_i}{d_o}$$, and $$f=R/2$$ for a mirror or the lensmaker's $$\frac{1}{f}=(n-1)\left(\frac{1}{R_1}-\frac{1}{R_2}\right)$$ for a lens. Pin down every sign before plugging in. For multi-element systems, feed each image forward as the next object and multiply magnifications, or multiply **ABCD matrices** ($$B=0$$ images, $$C=-1/f_{\text{eff}}$$). Optical instruments: magnifier $$M=25\text{ cm}/f$$, telescope $$M=-f_o/f_e$$.
3. **A single curved interface (not a lens)**: Refraction at a spherical surface $$\frac{n_1}{s_o}+\frac{n_2}{s_i}=\frac{n_2-n_1}{R}$$ (real-is-positive; $$R>0$$ when $$C$$ is on the outgoing side) — e.g. the fish-in-a-bowl. Applying it twice *is* the lensmaker's equation.
4. **Prism / dispersion**: Deviation $$\delta=\theta_1+\theta_2-A$$; at minimum deviation the ray is symmetric and $$n=\sin\frac{A+\delta_m}{2}/\sin\frac{A}{2}$$ (thin prism: $$\delta=(n-1)A$$). For rainbows, write the total deviation $$D(i)$$, set $$dD/di=0$$, and use $$\cos i=\sqrt{(n^2-1)/3}$$ → primary bow $$\approx 42^\circ$$, secondary $$\approx 51^\circ$$ with reversed colors and Alexander's dark band between.
5. **Dense-to-rare boundary, ask whether light escapes**: Check the critical angle $$\sin\theta_c=n_2/n_1$$; beyond it everything reflects (TIR — fibers, $$\text{NA}=\sqrt{n_1^2-n_2^2}$$, Snell's window). Continuously varying $$n$$ (mirages): conserve $$n\sin\theta$$ and bend toward higher $$n$$.
6. **Two coherent beams, features comparable to $$\lambda$$**: Interference. Double slit $$d\sin\theta=m\lambda$$ (bright), spacing $$\Delta y=\lambda L/d$$; a slab over one slit shifts the pattern $$(n-1)t/\lambda$$ fringes. Thin film uses the round-trip $$2nt$$ — count $$\pi$$-flips at each surface *first* (anti-reflection: both flip, $$t=\lambda/4n$$, ideal $$n_{\text{coat}}=\sqrt{n_{\text{glass}}}$$). Michelson: each fringe = mirror moved $$\lambda/2$$.
7. **Single aperture or obstacle spreading light**: Diffraction. Single slit minima $$a\sin\theta=m\lambda$$, central width $$2L\lambda/a$$; grating maxima $$d\sin\theta=m\lambda$$ with resolving power $$R=\lambda/\Delta\lambda=Nm$$. For a small obstacle, use Babinet and treat it as the complementary hole.
8. **Resolving two close sources through an aperture**: Rayleigh criterion $$\theta_{\min}=1.22\,\lambda/D$$.
9. **Intensity through polarizers or polarization by reflection**: Malus's law $$I=I_0\cos^2\theta$$ (halve unpolarized light first); a middle polarizer can *increase* transmission by re-projecting the axis (three-polarizer $$\to I_0/8$$); Brewster's angle $$\tan\theta_B=n_2/n_1$$.
:::

Common traps:

:::mistakes
- **Sign conventions differ for mirrors, lenses, and single surfaces.** For lenses a real image sits on the *opposite* side from the object ($$d_i>0$$ there); for mirrors a real image is on the *same* side as the object. For the spherical-surface formula, $$R$$ is positive when the center of curvature lies on the outgoing-light side — the fish-bowl sign flip is the classic mistake. Diverging elements have $$f<0$$.
- **Minimum deviation is symmetric.** The condition $$r_1=r_2=A/2$$ (not some random incidence) is what makes the prism formula valid; don't use it for an arbitrary ray.
- **The rainbow caustic is a stationary point of deviation, not a single law.** You must set $$dD/di=0$$; the $$42^\circ$$ is where rays *bunch up*, and color order reverses between primary and secondary bows.
- **Bright vs. dark conditions are not universal.** $$d\sin\theta=m\lambda$$ is *bright* for a double slit/grating but *dark* for a single slit — don't reuse the formula blindly.
- **Forgetting the $$\pi$$ phase flip on reflection off a higher-index medium** in thin films. Always tally flips at *both* surfaces before deciding constructive vs. destructive — for an anti-reflection coating both surfaces flip, so the flips cancel and destructive reflection needs $$2nt=(m+\tfrac12)\lambda$$.
- **Using the vacuum wavelength inside a medium.** The path difference in a film is $$2nt$$ because $$\lambda_{\text{medium}}=\lambda_0/n$$; frequency, not wavelength, is conserved across a boundary.
- **Multiplying ABCD matrices in the wrong order.** Light hits the first element first, but it sits *rightmost* in the matrix product.
- **Assuming a polarizer only removes light.** Inserting a polarizer between crossed ones lets light through, because each polarizer re-projects (rotates) the polarization onto its axis.
- **Assuming interference without coherence.** Fringes require a stable phase relationship; two independent sources won't interfere.
- **Treating $$\lambda\sim d$$ problems with ray optics (or vice versa).** Decide geometric vs. wave optics from the feature size before choosing equations.
:::
