const DESKTOP_QUERY = '(min-width: 1100px)';
const TAU = Math.PI * 2;

const CFG = {
  grid: { spacingPx: 28, baseRadiusPx: 1.22, dprMax: 1.5 },
  parallax: { rate: 0.25, reducedMotionRate: 0.18 },
  tide: {
    radiusAmp: 0.30,
    radiusPower: 0.72,
    displaceAmpPx: 0.95,
    tangentAmpPx: 0.34,
    warpSpatial: 0.00115,
    warpTemporal: 0.030,
    warpAmpPx: 42,
    waves: [
      { angleDeg: 118, wavelengthPx: 420, speedCyclesPerSec: 0.035, amp: 0.52, phase: 0.0 },
      { angleDeg: 132, wavelengthPx: 680, speedCyclesPerSec: 0.022, amp: 0.34, phase: 1.7 },
      { angleDeg: 96, wavelengthPx: 310, speedCyclesPerSec: 0.050, amp: 0.22, phase: 4.2 },
    ],
  },
  scroll: {
    velocityFilterHz: 9,
    velocityNormPxPerSec: 2200,
    movingEpsPxPerSec: 45,
    stopDelaySec: 0.12,
    stopRippleCooldownSec: 0.55,
    stopRippleMinVelocity: 420,
    // Velocity-coupled drag — no springs, no oscillation
    dragFollowHz: 11,
    dragReleaseHz: 7,
    maxDragPx: 7.5,
    radiusBoostMax: 0.10,
    radiusFollowHz: 10,
    centerSigmaX: 0.24,
    centerSigmaY: 0.36,
  },
  pointer: {
    posHz: 28,
    speedHz: 12,
    enterHz: 10,
    leaveHz: 0.75,
    minSpeedPxPerSec: 90,
    maxSpeedForStrength: 1800,
    spawnIntervalSlow: 0.052,
    spawnIntervalFast: 0.026,
    minSpawnDistSlow: 24,
    minSpawnDistFast: 13,
    baseStrength: 0.16,
    speedStrength: 0.56,
    aura: {
      radiusPx: 132,
      featherExp: 5.5,
      radiusBoostMax: 0.42,
      alphaBoostMax: 0.62,
      alphaTiers: 16,
    },
  },
  ripple: {
    maxRipples: 72,
    fadeInLife: 0.10,
    fadeOutPower: 1.65,
    cullWidthMult: 2.8,
    mouse: {
      speedSlow: 270, speedFast: 390,
      widthSlow: 28, widthFast: 44,
      wavelengthSlow: 72, wavelengthFast: 104,
      durationSlow: 1.45, durationFast: 2.10,
      displaceMin: 1.5, displaceMax: 2.7,
      radiusAmpMin: 0.18, radiusAmpMax: 0.32,
      dirBias: 0.24,
    },
    scroll: {
      strengthMin: 0.18, strengthMax: 0.72,
      speed: 420, width: 58, wavelength: 128, duration: 1.35,
      displacePx: 2.4, radiusAmp: 0.16, dirBias: 0.34,
    },
    scrollStop: {
      strengthMin: 0.12, strengthMax: 0.38,
      speed: 280, width: 90, wavelength: 180, duration: 1.85,
      displacePx: 1.6, radiusAmp: 0.10, dirBias: 0.10,
    },
    load: {
      strength: 0.34,
      speed: 330, width: 76, wavelength: 160, duration: 1.75,
      displacePx: 2.2, radiusAmp: 0.16, dirBias: 0.10,
    },
  },
  compositor: {
    tideRadiusMin: 0.70, tideRadiusMax: 1.30,
    scrollRadiusMin: 0.82, scrollRadiusMax: 1.22,
    rippleRadiusMin: 0.72, rippleRadiusMax: 1.42,
    radiusMinPx: 0.42, radiusMaxPx: 3.05,
    maxTotalDisplacePx: 9.5,
    alphaSmall: 0.18, alphaMid: 0.28, alphaLarge: 0.40,
    alphaActivityLift: 0.18, alphaMax: 0.46,
    smallRadiusCutoffPx: 0.85, largeRadiusCutoffPx: 1.65,
  },
} as const;

// ─── Utilities ────────────────────────────────────────────────────────────────

function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
function square(v: number): number { return v * v; }
function smoothstep01(t: number): number {
  t = clamp(t, 0, 1);
  return t * t * (3 - 2 * t);
}
function signedPow(v: number, p: number): number {
  return Math.sign(v) * Math.pow(Math.abs(v), p);
}
function hypot2(x: number, y: number): number {
  return Math.sqrt(x * x + y * y);
}
function expLerp(cur: number, target: number, hz: number, dt: number): number {
  return lerp(cur, target, 1 - Math.exp(-hz * dt));
}

// ─── Perlin / fBm ───────────────────────────────────────────────────────────

function fade(t: number): number { return t * t * t * (t * (t * 6 - 15) + 10); }
function lerpN(a: number, b: number, t: number): number { return a + t * (b - a); }

function grad3(h: number, x: number, y: number, z: number): number {
  const hh = h & 15;
  const u = hh < 8 ? x : y;
  const v = hh < 4 ? y : (hh === 12 || hh === 14 ? x : z);
  return ((hh & 1) ? -u : u) + ((hh & 2) ? -v : v);
}

class Perlin {
  private p: Uint8Array;
  constructor(seed = 42) {
    const src = new Uint8Array(256);
    for (let i = 0; i < 256; i++) src[i] = i;
    let s = seed >>> 0;
    for (let i = 255; i > 0; i--) {
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
      const j = s % (i + 1);
      const tmp = src[i]; src[i] = src[j]; src[j] = tmp;
    }
    this.p = new Uint8Array(512);
    for (let i = 0; i < 512; i++) this.p[i] = src[i & 255];
  }
  noise3(x: number, y: number, z: number): number {
    const xi = Math.floor(x) & 255, yi = Math.floor(y) & 255, zi = Math.floor(z) & 255;
    const xf = x - Math.floor(x), yf = y - Math.floor(y), zf = z - Math.floor(z);
    const u = fade(xf), v = fade(yf), w = fade(zf);
    const a = this.p[xi] + yi, aa = this.p[a] + zi, ab = this.p[a + 1] + zi;
    const b = this.p[xi + 1] + yi, ba = this.p[b] + zi, bb = this.p[b + 1] + zi;
    return lerpN(
      lerpN(
        lerpN(grad3(this.p[aa], xf, yf, zf), grad3(this.p[ba], xf - 1, yf, zf), u),
        lerpN(grad3(this.p[ab], xf, yf - 1, zf), grad3(this.p[bb], xf - 1, yf - 1, zf), u), v
      ),
      lerpN(
        lerpN(grad3(this.p[aa + 1], xf, yf, zf - 1), grad3(this.p[ba + 1], xf - 1, yf, zf - 1), u),
        lerpN(grad3(this.p[ab + 1], xf, yf - 1, zf - 1), grad3(this.p[bb + 1], xf - 1, yf - 1, zf - 1), u), v
      ), w
    );
  }
}

const perlin = new Perlin(42);

function fbm3(x: number, y: number, z: number): number {
  let val = 0, amp = 0.5, freq = 1, norm = 0;
  for (let i = 0; i < 3; i++) {
    val += amp * (perlin.noise3(x * freq, y * freq, z * freq) * 0.5 + 0.5);
    norm += amp; amp *= 0.5; freq *= 2.03;
  }
  return val / norm;
}

// ─── Types ────────────────────────────────────────────────────────────────────

type RippleKind = 'mouse' | 'scroll' | 'scrollStop' | 'load';

interface Ripple {
  kind: RippleKind;
  x: number; y: number; t0: number; duration: number; strength: number;
  speed: number; width: number; wavelength: number;
  displacePx: number; radiusAmp: number; dirX: number; dirY: number;
}

interface ScrollFluidState {
  lastScrollTop: number;
  velocityPxPerSec: number;
  filteredVelocityPxPerSec: number;
  dragY: number;
  radiusBoost: number;
  peakAbsVelocity: number;
  movingUntil: number;
  lastStopRippleTime: number;
  wasMoving: boolean;
}

interface PointerTrailState {
  active: boolean;
  inside: boolean;
  filteredX: number;
  filteredY: number;
  filteredSpeed: number;
  lastSpawnTime: number;
  lastSpawnX: number;
  lastSpawnY: number;
  strength: number;
}

interface FluidSample {
  dx: number;
  dy: number;
  staticRadiusMul: number;
  rippleRadiusMul: number;
  activity: number;
}

type Controller = { destroy(): void };
let active: Controller | null = null;

function prefersReducedMotion(): boolean { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

function getScrollRoot(): HTMLElement {
  // Our canvas is fixed to the viewport and the whole page scrolls via the
  // window, so the scroll root is always the document element. (The fork's
  // canvas lived inside a scrollable `.doc-main`; here there is none.)
  return document.documentElement;
}

function getScrollTop(root: HTMLElement): number {
  return root === document.documentElement
    ? (window.scrollY || document.documentElement.scrollTop || 0)
    : root.scrollTop;
}

function resolveDotColor(): string {
  // Our theme exposes the ink color as `--sl-color-text` (hex). Fall back to a
  // sensible default if it isn't a 7-char hex.
  const fg = getComputedStyle(document.documentElement).getPropertyValue('--sl-color-text').trim();
  const dark = document.documentElement.dataset.theme === 'dark';
  const a = dark ? 0.18 : 0.28;
  if (fg.startsWith('#') && fg.length === 7) {
    const r = parseInt(fg.slice(1, 3), 16);
    const g = parseInt(fg.slice(3, 5), 16);
    const b = parseInt(fg.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  }
  return dark ? `rgba(232,236,244,${a})` : `rgba(20,24,32,${a})`;
}

// ─── Physics helpers ──────────────────────────────────────────────────────────

function pruneRipples(ripples: Ripple[], now: number): void {
  for (let i = ripples.length - 1; i >= 0; i--) {
    if (now - ripples[i].t0 > ripples[i].duration) ripples.splice(i, 1);
  }
}

function pushRipple(ripples: Ripple[], ripple: Ripple, now: number): void {
  pruneRipples(ripples, now);
  if (ripples.length >= CFG.ripple.maxRipples) {
    let weakestIndex = 0, weakestEnergy = Infinity;
    for (let i = 0; i < ripples.length; i++) {
      const r = ripples[i];
      const life = clamp((now - r.t0) / r.duration, 0, 1);
      const kindWeight = r.kind === 'mouse' ? 1.0 : 1.2;
      const energy = r.strength * (1 - life) * kindWeight;
      if (energy < weakestEnergy) { weakestEnergy = energy; weakestIndex = i; }
    }
    ripples.splice(weakestIndex, 1);
  }
  ripples.push(ripple);
}

function spawnMouseWakeRipple(
  ripples: Ripple[], x: number, y: number, dx: number, dy: number,
  speed: number, strength: number, now: number,
): void {
  const speed01 = clamp(speed / CFG.pointer.maxSpeedForStrength, 0, 1);
  const len = hypot2(dx, dy) || 1;
  const m = CFG.ripple.mouse;
  pushRipple(ripples, {
    kind: 'mouse', x, y, t0: now,
    duration: lerp(m.durationSlow, m.durationFast, smoothstep01(speed01)),
    strength,
    speed: lerp(m.speedSlow, m.speedFast, smoothstep01(speed01)),
    width: lerp(m.widthSlow, m.widthFast, smoothstep01(speed01)),
    wavelength: lerp(m.wavelengthSlow, m.wavelengthFast, smoothstep01(speed01)),
    displacePx: lerp(m.displaceMin, m.displaceMax, clamp(strength, 0, 1)),
    radiusAmp: lerp(m.radiusAmpMin, m.radiusAmpMax, clamp(strength, 0, 1)),
    dirX: dx / len, dirY: dy / len,
  }, now);
}

function updatePointerTrail(
  pointer: PointerTrailState, ripples: Ripple[],
  now: number, x: number, y: number, dt: number,
  spawnWake: boolean,
): void {
  const first = !pointer.active;
  pointer.active = true;
  pointer.inside = true;

  if (first) {
    pointer.filteredX = x;
    pointer.filteredY = y;
    pointer.filteredSpeed = 0;
    pointer.lastSpawnTime = now;
    pointer.lastSpawnX = x;
    pointer.lastSpawnY = y;
    pointer.strength = 1;
    return;
  }

  const prevX = pointer.filteredX;
  const prevY = pointer.filteredY;
  pointer.filteredX = expLerp(pointer.filteredX, x, CFG.pointer.posHz, dt);
  pointer.filteredY = expLerp(pointer.filteredY, y, CFG.pointer.posHz, dt);

  const moveDx = pointer.filteredX - prevX;
  const moveDy = pointer.filteredY - prevY;
  const rawSpeed = hypot2(moveDx, moveDy) / Math.max(dt, 1 / 240);
  pointer.filteredSpeed = expLerp(pointer.filteredSpeed, rawSpeed, CFG.pointer.speedHz, dt);
  pointer.strength = expLerp(pointer.strength, 1, CFG.pointer.enterHz, dt);

  if (!spawnWake) return;

  const speed01 = clamp(
    (pointer.filteredSpeed - CFG.pointer.minSpeedPxPerSec) /
      (CFG.pointer.maxSpeedForStrength - CFG.pointer.minSpeedPxPerSec),
    0, 1,
  );

  const dynamicInterval = lerp(CFG.pointer.spawnIntervalSlow, CFG.pointer.spawnIntervalFast, smoothstep01(speed01));
  const dynamicMinDist = lerp(CFG.pointer.minSpawnDistSlow, CFG.pointer.minSpawnDistFast, smoothstep01(speed01));

  const spawnDx = pointer.filteredX - pointer.lastSpawnX;
  const spawnDy = pointer.filteredY - pointer.lastSpawnY;
  const spawnDist = hypot2(spawnDx, spawnDy);

  const canSpawn =
    pointer.filteredSpeed >= CFG.pointer.minSpeedPxPerSec &&
    now - pointer.lastSpawnTime >= dynamicInterval &&
    spawnDist >= dynamicMinDist;

  if (!canSpawn) return;

  const strength =
    (CFG.pointer.baseStrength + CFG.pointer.speedStrength * smoothstep01(speed01)) *
    pointer.strength;

  spawnMouseWakeRipple(
    ripples, pointer.filteredX, pointer.filteredY,
    spawnDx, spawnDy, pointer.filteredSpeed, strength, now,
  );

  pointer.lastSpawnTime = now;
  pointer.lastSpawnX = pointer.filteredX;
  pointer.lastSpawnY = pointer.filteredY;
}

function updatePointerIdle(pointer: PointerTrailState, dt: number): void {
  if (pointer.inside) return;
  pointer.strength = expLerp(pointer.strength, 0, CFG.pointer.leaveHz, dt);
  if (pointer.strength < 0.015) pointer.active = false;
}

function sampleCursorAura(screenX: number, screenY: number, pointer: PointerTrailState): number {
  if (pointer.strength <= 0.001) return 0;
  const dx = screenX - pointer.filteredX;
  const dy = screenY - pointer.filteredY;
  const dist = hypot2(dx, dy);
  const r = CFG.pointer.aura.radiusPx;
  const x = dist / Math.max(r, 1);
  // Rational falloff — potent core, long soft tail, no Gaussian plateau
  const falloff = 1 / (1 + Math.pow(x, CFG.pointer.aura.featherExp));
  return pointer.strength * falloff;
}

function auraAlphaTier(aura: number): number {
  const tiers = CFG.pointer.aura.alphaTiers;
  // Round to nearest tier — smoother than floor, less banding at boundaries
  return clamp(Math.round(aura * (tiers - 1)), 0, tiers - 1);
}

function composeDotRadiusMul(
  staticRadiusMul: number,
  rippleRadiusMul: number,
  aura: number,
): number {
  const auraSizeMul = 1 + aura * CFG.pointer.aura.radiusBoostMax;
  const ambientMul = lerp(staticRadiusMul, auraSizeMul, aura);
  return ambientMul * rippleRadiusMul;
}

function updateScrollFluid(
  scroll: ScrollFluidState, ripples: Ripple[],
  now: number, dt: number, scrollTop: number, vw: number, vh: number,
): void {
  const dy = scrollTop - scroll.lastScrollTop;
  const rawVelocity = dy / Math.max(dt, 1 / 240);
  scroll.velocityPxPerSec = rawVelocity;
  scroll.filteredVelocityPxPerSec = expLerp(
    scroll.filteredVelocityPxPerSec, rawVelocity, CFG.scroll.velocityFilterHz, dt,
  );

  const v = scroll.filteredVelocityPxPerSec;
  const absV = Math.abs(v);
  const vNorm = clamp(v / CFG.scroll.velocityNormPxPerSec, -1, 1);
  const moving = absV > CFG.scroll.movingEpsPxPerSec;

  if (moving) {
    scroll.movingUntil = now + CFG.scroll.stopDelaySec;
    if (absV > scroll.peakAbsVelocity) scroll.peakAbsVelocity = absV;
  }

  // Drag follows velocity while scrolling; eases back to zero when idle — no spring ring.
  const targetDragY = moving ? -vNorm * CFG.scroll.maxDragPx : 0;
  const dragHz = moving ? CFG.scroll.dragFollowHz : CFG.scroll.dragReleaseHz;
  scroll.dragY = expLerp(scroll.dragY, targetDragY, dragHz, dt);

  const targetBoost = moving ? Math.abs(vNorm) * CFG.scroll.radiusBoostMax : 0;
  const boostHz = moving ? CFG.scroll.radiusFollowHz : CFG.scroll.dragReleaseHz;
  scroll.radiusBoost = expLerp(scroll.radiusBoost, targetBoost, boostHz, dt);

  const stopped =
    scroll.wasMoving &&
    !moving &&
    now > scroll.movingUntil &&
    now - scroll.lastStopRippleTime > CFG.scroll.stopRippleCooldownSec &&
    scroll.peakAbsVelocity > CFG.scroll.stopRippleMinVelocity;

  if (stopped) {
    const rs = CFG.ripple.scrollStop;
    const energy = clamp(scroll.peakAbsVelocity / CFG.scroll.velocityNormPxPerSec, 0, 1);
    pushRipple(ripples, {
      kind: 'scrollStop',
      x: vw * 0.5, y: vh * 0.48, t0: now,
      duration: rs.duration,
      strength: lerp(rs.strengthMin, rs.strengthMax, smoothstep01(energy)),
      speed: rs.speed, width: rs.width, wavelength: rs.wavelength,
      displacePx: rs.displacePx, radiusAmp: rs.radiusAmp,
      dirX: 0, dirY: 0,
    }, now);
    scroll.lastStopRippleTime = now;
    scroll.peakAbsVelocity = 0;
  }

  scroll.wasMoving = moving || now <= scroll.movingUntil;
  scroll.lastScrollTop = scrollTop;
}

function sampleFluidField(
  worldX: number, worldY: number, screenX: number, screenY: number,
  timeSec: number, vw: number, vh: number,
  scroll: ScrollFluidState, ripples: Ripple[],
  fluidEnabled: boolean,
): FluidSample {
  if (!fluidEnabled) {
    return { dx: 0, dy: 0, staticRadiusMul: 1, rippleRadiusMul: 1, activity: 0 };
  }

  let dx = 0, dy = 0;
  let tideRadiusAdd = 0, scrollRadiusAdd = 0, rippleRadiusAdd = 0;

  // Idle tide
  const warp = CFG.tide.warpAmpPx * fbm3(
    worldX * CFG.tide.warpSpatial,
    worldY * CFG.tide.warpSpatial,
    timeSec * CFG.tide.warpTemporal,
  );

  let waveSum = 0, ampSum = 0;
  let tideDx = 0, tideDy = 0;

  for (const w of CFG.tide.waves) {
    const a = (w.angleDeg * Math.PI) / 180;
    const nx = Math.cos(a), ny = Math.sin(a);
    const tx = -ny, ty = nx;
    const p = worldX * nx + worldY * ny;
    const phase = TAU * ((p + warp) / w.wavelengthPx + timeSec * w.speedCyclesPerSec) + w.phase;
    const s = Math.sin(phase), c = Math.cos(phase);
    waveSum += s * w.amp;
    ampSum += w.amp;
    tideDx += nx * c * w.amp * CFG.tide.displaceAmpPx;
    tideDy += ny * c * w.amp * CFG.tide.displaceAmpPx;
    tideDx += tx * Math.sin(phase * 0.73 + 1.4) * w.amp * CFG.tide.tangentAmpPx;
    tideDy += ty * Math.sin(phase * 0.73 + 1.4) * w.amp * CFG.tide.tangentAmpPx;
  }

  const tideNorm = ampSum > 0 ? waveSum / ampSum : 0;
  tideRadiusAdd = CFG.tide.radiusAmp * signedPow(tideNorm, CFG.tide.radiusPower);
  dx += tideDx;
  dy += tideDy;

  // Scroll drag — smooth velocity follow, strongest at viewport center
  const cx = screenX / vw - 0.5;
  const cy = screenY / vh - 0.5;
  const centerFalloff = Math.exp(
    -(cx * cx) / CFG.scroll.centerSigmaX - (cy * cy) / CFG.scroll.centerSigmaY,
  );
  const verticalShape = 0.6 + 0.4 * Math.cos(Math.PI * cy);

  dy += scroll.dragY * centerFalloff * verticalShape;
  scrollRadiusAdd = scroll.radiusBoost * centerFalloff;

  // Unified ripples
  let rippleDx = 0, rippleDy = 0;
  for (const r of ripples) {
    const age = timeSec - r.t0;
    if (age < 0 || age > r.duration) continue;

    const rx = screenX - r.x, ry = screenY - r.y;
    const dist = Math.sqrt(rx * rx + ry * ry) + 0.0001;
    const front = age * r.speed;
    const reachPad = r.width * CFG.ripple.cullWidthMult;
    if (dist > front + reachPad) continue;
    if (dist < Math.max(0, front - reachPad)) continue;

    const life = age / r.duration;
    const fadeIn = smoothstep01(life / CFG.ripple.fadeInLife);
    const fadeOut = Math.pow(1 - life, CFG.ripple.fadeOutPower);
    const env = fadeIn * fadeOut;
    const band = Math.exp(-square(dist - front) / (2 * square(r.width)));
    const wave = Math.sin(TAU * ((dist - front) / r.wavelength));
    const s = r.strength * env * band * wave;

    const radialX = rx / dist, radialY = ry / dist;
    const dirBias =
      r.kind === 'scrollStop' ? CFG.ripple.scrollStop.dirBias :
      r.kind === 'load' ? CFG.ripple.load.dirBias :
      CFG.ripple.mouse.dirBias;

    const pushX = radialX * (1 - dirBias) + r.dirX * dirBias;
    const pushY = radialY * (1 - dirBias) + r.dirY * dirBias;
    rippleDx += s * r.displacePx * pushX;
    rippleDy += s * r.displacePx * pushY;
    rippleRadiusAdd += s * r.radiusAmp;
  }

  dx += rippleDx;
  dy += rippleDy;

  const len = hypot2(dx, dy);
  if (len > CFG.compositor.maxTotalDisplacePx) {
    const k = CFG.compositor.maxTotalDisplacePx / len;
    dx *= k; dy *= k;
  }

  const tideMul = clamp(1 + tideRadiusAdd, CFG.compositor.tideRadiusMin, CFG.compositor.tideRadiusMax);
  const scrollMul = clamp(1 + scrollRadiusAdd, CFG.compositor.scrollRadiusMin, CFG.compositor.scrollRadiusMax);
  const rippleMul = clamp(1 + rippleRadiusAdd, CFG.compositor.rippleRadiusMin, CFG.compositor.rippleRadiusMax);

  const scrollActivity = clamp(
    Math.abs(scroll.filteredVelocityPxPerSec) / CFG.scroll.velocityNormPxPerSec, 0, 1,
  );

  return {
    dx, dy,
    staticRadiusMul: tideMul * scrollMul,
    rippleRadiusMul: rippleMul,
    activity: scrollActivity,
  };
}

// ─── Controller ───────────────────────────────────────────────────────────────

function bindParallax(canvas: HTMLCanvasElement): Controller {
  const ctx = canvas.getContext('2d');
  if (!ctx) return { destroy: () => {} };

  const reduceMotion = prefersReducedMotion();
  const scroll: ScrollFluidState = {
    lastScrollTop: 0, velocityPxPerSec: 0, filteredVelocityPxPerSec: 0,
    dragY: 0, radiusBoost: 0, peakAbsVelocity: 0,
    movingUntil: 0, lastStopRippleTime: 0, wasMoving: false,
  };
  const pointer: PointerTrailState = {
    active: false, inside: false,
    filteredX: 0, filteredY: 0, filteredSpeed: 0,
    lastSpawnTime: 0, lastSpawnX: 0, lastSpawnY: 0, strength: 0,
  };
  const ripples: Ripple[] = [];

  let root = getScrollRoot();
  let running = false, rafId = 0, prevTime = 0, lastPointerTime = 0;
  let vw = 0, vh = 0;
  let dotColor = resolveDotColor();
  let spacing = CFG.grid.spacingPx;
  let baseRadius = CFG.grid.baseRadiusPx;
  let parallaxRate = reduceMotion ? CFG.parallax.reducedMotionRate : CFG.parallax.rate;

  function refreshCssVars(): void {
    const s = getComputedStyle(document.documentElement);
    const cssRate = parseFloat(s.getPropertyValue('--canvas-parallax-rate').trim());
    if (!reduceMotion && Number.isFinite(cssRate)) parallaxRate = cssRate;
    const cssSpacing = parseFloat(s.getPropertyValue('--canvas-dot-spacing').trim());
    if (Number.isFinite(cssSpacing)) spacing = cssSpacing;
    const cssRadius = parseFloat(s.getPropertyValue('--canvas-dot-size').trim());
    if (Number.isFinite(cssRadius)) baseRadius = cssRadius;
  }

  function syncSize(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, CFG.grid.dprMax);
    // Fixed full-viewport canvas: size to the viewport. clientWidth/Height on
    // the document element excludes the scrollbar, avoiding a feedback loop.
    const cssW = document.documentElement.clientWidth || window.innerWidth;
    const cssH = window.innerHeight;
    const W = Math.round(cssW * dpr), H = Math.round(cssH * dpr);
    if (canvas.width !== W || canvas.height !== H) {
      canvas.width = W; canvas.height = H;
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    vw = cssW; vh = cssH;
    refreshCssVars();
  }

  const buckets: Array<Array<[number, number, number]>> = Array.from(
    { length: 3 },
    () => Array.from({ length: CFG.pointer.aura.alphaTiers }, () => []),
  );

  function renderFrame(now: number): void {
    const w = vw, h = vh;
    ctx.clearRect(0, 0, w, h);
    if (w === 0 || h === 0) return;

    buckets[0].forEach((b) => { b.length = 0; });
    buckets[1].forEach((b) => { b.length = 0; });
    buckets[2].forEach((b) => { b.length = 0; });

    const scrollTop = scroll.lastScrollTop;
    const worldYStart = scrollTop * parallaxRate;
    const rowStart = Math.floor(worldYStart / spacing) - 1;
    const rowEnd = Math.ceil((worldYStart + h) / spacing) + 1;
    const colEnd = Math.ceil(w / spacing) + 1;

    const fluidEnabled = !reduceMotion;
    let maxActivity = 0;

    for (let gy = rowStart; gy <= rowEnd; gy++) {
      const wy = gy * spacing;
      const sy = wy - worldYStart;
      for (let gx = 0; gx <= colEnd; gx++) {
        const wx = gx * spacing, sx = wx;
        const sample = sampleFluidField(
          wx, wy, sx, sy, now, w, h, scroll, ripples, fluidEnabled,
        );
        if (sample.activity > maxActivity) maxActivity = sample.activity;

        const x = sx + sample.dx;
        const y = sy + sample.dy;
        const aura = sampleCursorAura(x, y, pointer);

        const r = clamp(
          baseRadius * composeDotRadiusMul(
            sample.staticRadiusMul, sample.rippleRadiusMul, aura,
          ),
          CFG.compositor.radiusMinPx, CFG.compositor.radiusMaxPx,
        );

        const sizeBucket =
          r < CFG.compositor.smallRadiusCutoffPx ? 0 :
          r < CFG.compositor.largeRadiusCutoffPx ? 1 : 2;
        buckets[sizeBucket][auraAlphaTier(aura)].push([x, y, r]);
      }
    }

    const activity = Math.max(maxActivity, pointer.strength * 0.45);
    const auraTierSteps = CFG.pointer.aura.alphaTiers;

    ctx.fillStyle = dotColor;
    for (let sizeBucket = 0; sizeBucket < 3; sizeBucket++) {
      const baseAlpha =
        sizeBucket === 0 ? CFG.compositor.alphaSmall :
        sizeBucket === 1 ? CFG.compositor.alphaMid :
        CFG.compositor.alphaLarge;

      for (let auraTier = 0; auraTier < auraTierSteps; auraTier++) {
        const dots = buckets[sizeBucket][auraTier];
        if (!dots.length) continue;

        const repAura = auraTier / Math.max(auraTierSteps - 1, 1);
        const alpha = Math.min(
          baseAlpha * (
            1 +
            CFG.compositor.alphaActivityLift * activity * (1 - repAura) +
            CFG.pointer.aura.alphaBoostMax * repAura * repAura
          ),
          CFG.compositor.alphaMax,
        );

        ctx.globalAlpha = alpha;
        ctx.beginPath();
        for (let i = 0; i < dots.length; i++) {
          const [dx, dy, dr] = dots[i];
          ctx.moveTo(dx + dr, dy);
          ctx.arc(dx, dy, dr, 0, TAU);
        }
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  }

  function frame(nowMs: number): void {
    if (!running) return;
    rafId = requestAnimationFrame(frame);
    const now = nowMs / 1000;
    const dt = clamp(now - prevTime, 1 / 240, 1 / 30);
    prevTime = now;

    const scrollTop = getScrollTop(root);
    if (!reduceMotion) {
      updateScrollFluid(scroll, ripples, now, dt, scrollTop, vw, vh);
      pruneRipples(ripples, now);
    } else {
      scroll.lastScrollTop = scrollTop;
    }
    updatePointerIdle(pointer, dt);

    renderFrame(now);
  }

  function start(): void {
    if (running) return;
    running = true;
    rafId = requestAnimationFrame((t) => {
      prevTime = t / 1000;
      scroll.lastScrollTop = getScrollTop(root);
      syncSize();
      if (!reduceMotion && vw > 0) {
        const ld = CFG.ripple.load;
        pushRipple(ripples, {
          kind: 'load', x: vw * 0.5, y: vh * 0.5, t0: t / 1000,
          duration: ld.duration, strength: ld.strength,
          speed: ld.speed, width: ld.width, wavelength: ld.wavelength,
          displacePx: ld.displacePx, radiusAmp: ld.radiusAmp,
          dirX: 0, dirY: 0,
        }, t / 1000);
      }
      frame(t);
    });
  }

  function stop(): void {
    running = false;
    if (rafId) { cancelAnimationFrame(rafId); rafId = 0; }
  }

  const onVisibility = () => { if (document.hidden) stop(); else start(); };
  document.addEventListener('visibilitychange', onVisibility);

  const onMouseMove = (e: MouseEvent) => {
    // Canvas is fixed to the viewport, so client coords map straight to it.
    const x = e.clientX;
    const y = e.clientY;
    const now = performance.now() / 1000;
    const dt = lastPointerTime > 0
      ? clamp(now - lastPointerTime, 1 / 240, 1 / 30)
      : 1 / 60;
    lastPointerTime = now;
    updatePointerTrail(pointer, ripples, now, x, y, dt, !reduceMotion);
  };
  const onMouseLeave = () => { pointer.inside = false; };
  window.addEventListener('mousemove', onMouseMove, { passive: true });
  document.addEventListener('mouseleave', onMouseLeave, { passive: true });

  const mqDesktop = window.matchMedia(DESKTOP_QUERY);
  const onMediaChange = () => { root = getScrollRoot(); syncSize(); };
  mqDesktop.addEventListener('change', onMediaChange);

  const onResize = () => syncSize();
  window.addEventListener('resize', onResize, { passive: true });
  const ro = typeof ResizeObserver !== 'undefined'
    ? new ResizeObserver(() => syncSize()) : null;
  ro?.observe(document.documentElement);

  const themeObserver = new MutationObserver(() => {
    dotColor = resolveDotColor();
    refreshCssVars();
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  start();

  return {
    destroy() {
      stop();
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      mqDesktop.removeEventListener('change', onMediaChange);
      window.removeEventListener('resize', onResize);
      ro?.disconnect();
      themeObserver.disconnect();
    },
  };
}

const CANVAS_CLASS = 'paper-canvas';

/** Ensure the fixed full-viewport canvas exists, returning it (or null if the
 *  document body isn't ready yet). */
function ensureCanvas(): HTMLCanvasElement | null {
  if (!document.body) return null;
  let canvas = document.querySelector<HTMLCanvasElement>(`canvas.${CANVAS_CLASS}`);
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.className = CANVAS_CLASS;
    canvas.setAttribute('aria-hidden', 'true');
    // First child of <body> so it paints behind page content.
    document.body.prepend(canvas);
  }
  return canvas;
}

export function initDocCanvasParallax(): void {
  active?.destroy();
  active = null;
  // Respect reduced motion: leave the static CSS dot-grid in place instead.
  if (prefersReducedMotion()) {
    document.documentElement.classList.remove('paper-canvas-active');
    return;
  }
  const canvas = ensureCanvas();
  if (!canvas) return;
  document.documentElement.classList.add('paper-canvas-active');
  active = bindParallax(canvas);
}

let pageLoadBound = false;

/** Mount + (re)bind the animated paper canvas. Safe to call repeatedly. */
export function mountPaperCanvas(): void {
  initDocCanvasParallax();
  if (pageLoadBound) return;
  pageLoadBound = true;
  document.addEventListener('astro:page-load', initDocCanvasParallax);
}
