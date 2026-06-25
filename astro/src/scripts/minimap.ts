// Minimap controller — an evenly-spaced rail of the note's headings with a
// scroll-position thumb, scroll-spy active state, and click / drag / wheel
// navigation. Desktop-only; disabled under reduced motion.
//
// (Originally a scaled page clone, à la gxboy12345's fork. Switched to an
// even-spaced rail: a content-proportional map bunched short topics and spread
// long ones — e.g. practice + solutions — which read as uneven. Even spacing is
// tidier and the thumb still shows your position.)

const DESKTOP_QUERY = '(min-width: 1200px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const MIN_THUMB_PX = 22;
const HEADER_OFFSET_PX = 88; // sticky two-tier header height for jump targets

type Heading = { depth: 2 | 3; slug: string; text: string };
type Controller = { destroy(): void };

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

// ── window-scroll helpers ──
const scrollTop = () => window.scrollY || document.documentElement.scrollTop || 0;
const clientH = () => document.documentElement.clientHeight;
const scrollMax = () => Math.max(0, document.documentElement.scrollHeight - clientH());
const articleTopInDoc = (article: HTMLElement) => scrollTop() + article.getBoundingClientRect().top;
const scrollToY = (y: number, smooth: boolean) =>
	window.scrollTo({ top: clamp(y, 0, scrollMax()), behavior: smooth ? 'smooth' : 'auto' });

function cssPropPx(el: HTMLElement, prop: string, fallback: number): number {
	const v = parseFloat(getComputedStyle(el).getPropertyValue(prop));
	return Number.isFinite(v) ? v : fallback;
}

function readHeadings(article: HTMLElement): Heading[] {
	return [...article.querySelectorAll<HTMLElement>('h2[id], h3[id]')].map((el) => ({
		depth: el.tagName === 'H2' ? 2 : 3,
		slug: el.id,
		text: el.textContent?.trim() ?? '',
	}));
}

function buildLabels(container: HTMLElement, headings: Heading[]) {
	const frag = document.createDocumentFragment();
	for (const h of headings) {
		const a = document.createElement('a');
		a.className = 'doc-minimap__label';
		a.dataset.slug = h.slug;
		a.dataset.depth = String(h.depth);
		a.textContent = h.text;
		a.href = `#${h.slug}`;
		frag.appendChild(a);
	}
	container.replaceChildren(frag);
}

function setup(): Controller | null {
	if (matchMedia(REDUCED_MOTION_QUERY).matches || !matchMedia(DESKTOP_QUERY).matches) return null;

	const minimap = document.querySelector<HTMLElement>('[data-doc-minimap]');
	const preview = document.querySelector<HTMLElement>('[data-minimap-preview]');
	const vpEl = document.querySelector<HTMLElement>('[data-minimap-viewport]');
	const labelsEl = document.querySelector<HTMLElement>('[data-minimap-labels]');
	// The note body — never the cheatsheet drawer's cloned content.
	const article =
		[...document.querySelectorAll<HTMLElement>('.sl-markdown-content')].find(
			(el) => !el.closest('[data-ref-sheet]'),
		) ?? null;
	if (!minimap || !preview || !vpEl || !labelsEl || !article) return null;

	const headings = readHeadings(article);
	if (headings.length < 2) return null; // not worth a minimap for a tiny page

	let previewH = 0;
	let measureRaf = 0;
	let syncRaf = 0;
	let destroyed = false;
	const abort = new AbortController();
	const { signal } = abort;

	buildLabels(labelsEl, headings);
	minimap.removeAttribute('hidden');
	document.documentElement.classList.add('has-minimap');

	const ro = new ResizeObserver(() => scheduleMeasure());
	ro.observe(article);
	ro.observe(preview);

	window.addEventListener('scroll', scheduleSync, { passive: true, signal });
	window.addEventListener('resize', scheduleMeasure, { passive: true, signal });
	preview.addEventListener('pointerdown', onPreviewDown, { signal });
	vpEl.addEventListener('pointerdown', onViewportDown, { signal });
	minimap.addEventListener('wheel', onWheel, { passive: false, signal });
	// Smooth jump when a label is clicked (offset for the sticky header).
	labelsEl.addEventListener(
		'click',
		(e) => {
			const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('.doc-minimap__label');
			if (!a) return;
			const el = a.dataset.slug && document.getElementById(a.dataset.slug);
			if (!el) return;
			e.preventDefault();
			scrollToY(scrollTop() + el.getBoundingClientRect().top - HEADER_OFFSET_PX, true);
		},
		{ signal },
	);

	const spy = setupScrollSpy();
	requestAnimationFrame(measureAndSync);

	return {
		destroy() {
			if (destroyed) return;
			destroyed = true;
			abort.abort();
			cancelAnimationFrame(measureRaf);
			cancelAnimationFrame(syncRaf);
			ro.disconnect();
			spy.disconnect();
			labelsEl.replaceChildren();
			minimap.hidden = true;
			document.documentElement.classList.remove('has-minimap');
		},
	};

	// ── measurement + layout ──
	function railInset(): number {
		// Keep first/last labels off the very edges.
		return cssPropPx(minimap!, '--minimap-rail-inset', 14);
	}

	function positionLabels() {
		const inset = railInset();
		const railH = Math.max(1, previewH - 2 * inset);
		const n = headings.length;
		headings.forEach((h, i) => {
			const label = labelsEl!.querySelector<HTMLElement>(
				`.doc-minimap__label[data-slug="${CSS.escape(h.slug)}"]`,
			);
			if (!label) return;
			const y = n === 1 ? previewH / 2 : inset + (railH * i) / (n - 1);
			label.style.top = `${y}px`;
		});
	}

	function measureAndSync() {
		previewH = preview!.getBoundingClientRect().height;
		if (previewH <= 0) {
			minimap!.hidden = true;
			document.documentElement.classList.remove('has-minimap');
			return;
		}
		minimap!.hidden = false;
		document.documentElement.classList.add('has-minimap');
		positionLabels();
		syncThumb();
	}

	function syncThumb() {
		if (previewH <= 0) return;
		const articleTop = articleTopInDoc(article!);
		const articleH = article!.scrollHeight;
		const range = Math.max(1, articleH - clientH());
		const p = clamp((scrollTop() - articleTop) / range, 0, 1);
		const visFrac = clamp(clientH() / articleH, 0.06, 1);
		const thumbH = clamp(visFrac * previewH, MIN_THUMB_PX, previewH);
		vpEl!.style.height = `${thumbH}px`;
		vpEl!.style.top = `${p * (previewH - thumbH)}px`;
	}

	// ── scroll spy ──
	function setupScrollSpy(): IntersectionObserver {
		const els = headings
			.map((h) => document.getElementById(h.slug))
			.filter((e): e is HTMLElement => !!e);
		let current: string | null = null;
		const obs = new IntersectionObserver(
			() => {
				const candidates = els
					.map((el) => ({ id: el.id, y: el.getBoundingClientRect().top }))
					.filter((x) => x.y <= clientH() * 0.3)
					.sort((a, b) => b.y - a.y);
				const next = candidates[0]?.id ?? els[0]?.id ?? null;
				if (next && next !== current) {
					current = next;
					labelsEl!.querySelectorAll<HTMLElement>('.doc-minimap__label').forEach((el) => {
						el.dataset.active = el.dataset.slug === next ? 'true' : 'false';
					});
				}
			},
			{ rootMargin: '0px 0px -70% 0px', threshold: [0, 1] },
		);
		for (const el of els) obs.observe(el);
		requestAnimationFrame(() => {
			if (els[0]) {
				labelsEl!.querySelectorAll<HTMLElement>('.doc-minimap__label').forEach((el) => {
					el.dataset.active = el.dataset.slug === els[0].id ? 'true' : 'false';
				});
			}
		});
		return obs;
	}

	// ── scheduling ──
	function scheduleMeasure() {
		cancelAnimationFrame(measureRaf);
		measureRaf = requestAnimationFrame(() => { measureRaf = 0; measureAndSync(); });
	}
	function scheduleSync() {
		cancelAnimationFrame(syncRaf);
		syncRaf = requestAnimationFrame(() => { syncRaf = 0; syncThumb(); });
	}

	// ── navigation ──
	/** Map a pointer Y (viewport px) to a page scroll position via rail progress. */
	function scrollToPointer(clientY: number, smooth: boolean) {
		const previewTop = preview!.getBoundingClientRect().top;
		const p = clamp((clientY - previewTop) / previewH, 0, 1);
		const articleTop = articleTopInDoc(article!);
		const range = Math.max(1, article!.scrollHeight - clientH());
		scrollToY(articleTop + p * range, smooth);
	}

	function onPreviewDown(ev: PointerEvent) {
		if (ev.button !== 0) return;
		preview!.setPointerCapture(ev.pointerId);
		minimap!.dataset.dragging = 'true';
		const gesture = new AbortController();
		signal.addEventListener('abort', () => gesture.abort(), { once: true });
		let dragged = false;
		const move = (e: PointerEvent) => { dragged = true; scrollToPointer(e.clientY, false); };
		const end = (e: PointerEvent) => {
			if (!dragged) scrollToPointer(e.clientY, true);
			minimap!.dataset.dragging = 'false';
			gesture.abort();
		};
		preview!.addEventListener('pointermove', move, { signal: gesture.signal });
		preview!.addEventListener('pointerup', end, { once: true, signal: gesture.signal });
		preview!.addEventListener('pointercancel', end, { once: true, signal: gesture.signal });
	}

	function onViewportDown(ev: PointerEvent) {
		if (ev.button !== 0) return;
		ev.preventDefault();
		ev.stopPropagation();
		vpEl!.setPointerCapture(ev.pointerId);
		minimap!.dataset.dragging = 'true';
		const gesture = new AbortController();
		signal.addEventListener('abort', () => gesture.abort(), { once: true });
		const previewTop = preview!.getBoundingClientRect().top;
		const grabOffset = ev.clientY - previewTop - parseFloat(vpEl!.style.top || '0');
		const thumbH = vpEl!.getBoundingClientRect().height;
		const drag = (e: PointerEvent) => {
			const thumbTop = clamp(e.clientY - previewTop - grabOffset, 0, previewH - thumbH);
			const p = previewH - thumbH > 0 ? thumbTop / (previewH - thumbH) : 0;
			const articleTop = articleTopInDoc(article!);
			const range = Math.max(1, article!.scrollHeight - clientH());
			scrollToY(articleTop + p * range, false);
		};
		const end = () => { minimap!.dataset.dragging = 'false'; gesture.abort(); };
		vpEl!.addEventListener('pointermove', drag, { signal: gesture.signal });
		vpEl!.addEventListener('pointerup', end, { once: true, signal: gesture.signal });
		vpEl!.addEventListener('pointercancel', end, { once: true, signal: gesture.signal });
	}

	function onWheel(ev: WheelEvent) {
		ev.preventDefault();
		const delta =
			ev.deltaMode === WheelEvent.DOM_DELTA_LINE ? ev.deltaY * 16 :
			ev.deltaMode === WheelEvent.DOM_DELTA_PAGE ? ev.deltaY * clientH() : ev.deltaY;
		scrollToY(scrollTop() + delta, false);
	}
}

// ── lifecycle ──
let active: Controller | null = null;
function boot() {
	active?.destroy();
	active = null;
	if (matchMedia(REDUCED_MOTION_QUERY).matches || !matchMedia(DESKTOP_QUERY).matches) return;
	const init = () => { try { active?.destroy(); active = setup(); } catch { active = null; } };
	if ('requestIdleCallback' in window) (window as any).requestIdleCallback(init, { timeout: 800 });
	else setTimeout(init, 1);
}

export function initMinimap() { boot(); }

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
	boot();
}
document.addEventListener('astro:page-load', boot);
document.addEventListener('astro:before-swap', () => { active?.destroy(); active = null; });
matchMedia(REDUCED_MOTION_QUERY).addEventListener('change', boot);
matchMedia(DESKTOP_QUERY).addEventListener('change', boot);
