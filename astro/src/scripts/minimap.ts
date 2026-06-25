// Minimap controller — a scaled DOM-clone preview of the note with a feathered
// "sharp window" over the visible band, a draggable viewport thumb, heading
// labels, and scroll-spy. Desktop-only; disabled under reduced motion.
//
// Adapted from gxboy12345's fork for our Starlight site: the page scrolls via
// the WINDOW (not a `.doc-main` container), the article is `.sl-markdown-content`,
// and headings come straight from the rendered DOM. Annotation/bookmark markers
// from the fork are dropped (different data model here).

const DESKTOP_QUERY = '(min-width: 1200px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const MIN_THUMB_PX = 14;
const LABEL_MIN_GAP_PX = 11;

type Heading = { depth: 2 | 3; slug: string; text: string };
type Geometry = {
	articleWidth: number;
	articleHeight: number;
	scale: number;
	topInset: number;
	leftInset: number;
	renderedHeight: number;
};
type Controller = { destroy(): void };

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const nextFrame = () => new Promise<void>((r) => requestAnimationFrame(() => r()));
function cssPropPx(el: HTMLElement, prop: string, fallback: number): number {
	const v = parseFloat(getComputedStyle(el).getPropertyValue(prop));
	return Number.isFinite(v) ? v : fallback;
}

// ── window-scroll helpers ──
const scrollTop = () => window.scrollY || document.documentElement.scrollTop || 0;
const clientH = () => document.documentElement.clientHeight;
const scrollMax = () => Math.max(0, document.documentElement.scrollHeight - clientH());
const articleTopInDoc = (article: HTMLElement) => scrollTop() + article.getBoundingClientRect().top;
const scrollToY = (y: number, smooth: boolean) =>
	window.scrollTo({ top: clamp(y, 0, scrollMax()), behavior: smooth ? 'smooth' : 'auto' });

// ── clone ──
function buildClone(article: HTMLElement): HTMLElement {
	const clone = article.cloneNode(true) as HTMLElement;
	clone.classList.add('doc-minimap__clone');
	clone.setAttribute('aria-hidden', 'true');
	clone.setAttribute('inert', '');
	clone.querySelectorAll('[id]').forEach((el) => el.removeAttribute('id'));
	clone.querySelectorAll<HTMLAnchorElement>('a').forEach((a) => a.removeAttribute('href'));
	clone.querySelectorAll<HTMLDetailsElement>('details').forEach((d) => (d.open = true));
	clone.querySelectorAll('script, style, iframe, video, audio, canvas').forEach((el) => el.remove());
	clone.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
		img.loading = 'eager';
		img.removeAttribute('srcset');
	});
	return clone;
}

function readHeadings(article: HTMLElement): Heading[] {
	return [...article.querySelectorAll<HTMLElement>('h2[id], h3[id]')].map((el) => ({
		depth: el.tagName === 'H2' ? 2 : 3,
		slug: el.id,
		text: el.textContent?.trim() ?? '',
	}));
}

// ── geometry ──
function measureGeometry(article: HTMLElement, preview: HTMLElement, minimap: HTMLElement): Geometry {
	const aRect = article.getBoundingClientRect();
	const padX = cssPropPx(minimap, '--minimap-preview-pad-x', 10);
	const padY = cssPropPx(minimap, '--minimap-preview-pad-y', 8);
	const pRect = preview.getBoundingClientRect();
	const articleWidth = aRect.width;
	const articleHeight = article.scrollHeight;
	const scale = Math.min(
		(pRect.width - 2 * padX) / articleWidth,
		(pRect.height - 2 * padY) / articleHeight,
	);
	if (!Number.isFinite(scale) || scale <= 0) {
		return { articleWidth, articleHeight, scale: 0, topInset: padY, leftInset: padX, renderedHeight: 0 };
	}
	const renderedWidth = articleWidth * scale;
	const renderedHeight = articleHeight * scale;
	return {
		articleWidth,
		articleHeight,
		scale,
		leftInset: Math.max(padX, (pRect.width - renderedWidth) / 2),
		topInset: Math.max(padY, (pRect.height - renderedHeight) / 2),
		renderedHeight,
	};
}

function applyGeometry(minimap: HTMLElement, g: Geometry) {
	minimap.style.setProperty('--article-width', `${g.articleWidth}px`);
	minimap.style.setProperty('--article-height', `${g.articleHeight}px`);
	minimap.style.setProperty('--minimap-scale', String(g.scale));
	minimap.style.setProperty('--preview-top-inset', `${g.topInset}px`);
	minimap.style.setProperty('--preview-left-inset', `${g.leftInset}px`);
}

const aToM = (articleY: number, g: Geometry) => g.topInset + articleY * g.scale;
const mToA = (miniY: number, g: Geometry) => clamp((miniY - g.topInset) / g.scale, 0, g.articleHeight);

function visibleRange(article: HTMLElement) {
	const top = articleTopInDoc(article);
	const h = article.scrollHeight;
	const vs = scrollTop();
	const ve = vs + clientH();
	let t = clamp(Math.max(vs, top) - top, 0, h);
	let b = clamp(Math.min(ve, top + h) - top, t, h);
	if (scrollTop() >= scrollMax() - 2) {
		const band = b - t;
		b = h;
		t = Math.max(0, h - band);
	}
	return { top: t, bottom: b, articleHeight: h };
}

function applySharpMask(layer: HTMLElement, top: number, bottom: number, feather: number, total: number) {
	const a = clamp(top - feather, 0, total);
	const b = clamp(top, 0, total);
	const c = clamp(bottom, 0, total);
	const d = clamp(bottom + feather, 0, total);
	const mask = `linear-gradient(to bottom, transparent ${a}px, black ${b}px, black ${c}px, transparent ${d}px)`;
	layer.style.maskImage = mask;
	(layer.style as any).webkitMaskImage = mask;
}

// ── labels ──
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

function positionLabels(container: HTMLElement, headings: Heading[], article: HTMLElement, g: Geometry) {
	const articleTop = article.getBoundingClientRect().top;
	for (const h of headings) {
		const label = container.querySelector<HTMLElement>(
			`.doc-minimap__label[data-slug="${CSS.escape(h.slug)}"]`,
		);
		const el = document.getElementById(h.slug);
		if (!label) continue;
		if (!el) {
			label.style.opacity = '0';
			continue;
		}
		const y = el.getBoundingClientRect().top - articleTop;
		label.style.top = `${aToM(clamp(y, 0, g.articleHeight), g)}px`;
		label.style.opacity = '';
		label.style.pointerEvents = '';
	}
	// Hide colliding H3 labels (never move — position is the invariant).
	const labels = [...container.querySelectorAll<HTMLElement>('.doc-minimap__label')].sort(
		(a, b) => parseFloat(a.style.top || '0') - parseFloat(b.style.top || '0'),
	);
	let lastBottom = -Infinity;
	for (const label of labels) {
		const y = parseFloat(label.style.top || '0');
		if (label.dataset.depth === '3' && y < lastBottom + LABEL_MIN_GAP_PX) {
			label.style.opacity = '0';
			label.style.pointerEvents = 'none';
		} else if (!label.style.opacity) {
			lastBottom = y;
		}
	}
}

function setupScrollSpy(headings: Heading[], onActive: (slug: string) => void): IntersectionObserver {
	const els = headings.map((h) => document.getElementById(h.slug)).filter((e): e is HTMLElement => !!e);
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
				onActive(next);
			}
		},
		{ rootMargin: '0px 0px -70% 0px', threshold: [0, 1] },
	);
	for (const el of els) obs.observe(el);
	requestAnimationFrame(() => els[0] && onActive(els[0].id));
	return obs;
}

// ── main controller ──
function setup(): Controller | null {
	if (matchMedia(REDUCED_MOTION_QUERY).matches || !matchMedia(DESKTOP_QUERY).matches) return null;

	const minimap = document.querySelector<HTMLElement>('[data-doc-minimap]');
	const preview = document.querySelector<HTMLElement>('[data-minimap-preview]');
	const sharpSlot = document.querySelector<HTMLElement>('[data-minimap-sharp]');
	const vpEl = document.querySelector<HTMLElement>('[data-minimap-viewport]');
	const labelsEl = document.querySelector<HTMLElement>('[data-minimap-labels]');
	// The note body — never the cheatsheet drawer's cloned content.
	const article =
		[...document.querySelectorAll<HTMLElement>('.sl-markdown-content')].find(
			(el) => !el.closest('[data-ref-sheet]'),
		) ?? null;
	if (!minimap || !preview || !sharpSlot || !vpEl || !labelsEl || !article) return null;

	const headings = readHeadings(article);
	if (headings.length < 2) return null; // not worth a minimap for a tiny page

	let g: Geometry | null = null;
	let measureRaf = 0;
	let syncRaf = 0;
	let destroyed = false;
	const abort = new AbortController();
	const { signal } = abort;

	sharpSlot.replaceChildren(buildClone(article));
	buildLabels(labelsEl, headings);
	minimap.removeAttribute('hidden');

	const ro = new ResizeObserver(() => scheduleMeasure());
	ro.observe(article);
	ro.observe(preview);

	window.addEventListener('scroll', scheduleSync, { passive: true, signal });
	window.addEventListener('resize', scheduleMeasure, { passive: true, signal });
	preview.addEventListener('pointerdown', onPreviewDown, { signal });
	vpEl.addEventListener('pointerdown', onViewportDown, { signal });
	minimap.addEventListener('wheel', onWheel, { passive: false, signal });

	const spy = setupScrollSpy(headings, (slug) => {
		labelsEl.querySelectorAll<HTMLElement>('.doc-minimap__label').forEach((el) => {
			el.dataset.active = el.dataset.slug === slug ? 'true' : 'false';
		});
	});

	article.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
		if (!img.complete) img.addEventListener('load', scheduleMeasure, { once: true, signal });
	});

	document.fonts?.ready
		.catch(() => undefined)
		.then(() => nextFrame())
		.then(() => nextFrame())
		.then(() => { if (!destroyed) measureAndSync(); });

	return {
		destroy() {
			if (destroyed) return;
			destroyed = true;
			abort.abort();
			cancelAnimationFrame(measureRaf);
			cancelAnimationFrame(syncRaf);
			ro.disconnect();
			spy.disconnect();
			sharpSlot.replaceChildren();
			labelsEl.replaceChildren();
			minimap.hidden = true;
			document.documentElement.classList.remove('has-minimap');
		},
	};

	function scheduleMeasure() {
		cancelAnimationFrame(measureRaf);
		measureRaf = requestAnimationFrame(() => { measureRaf = 0; measureAndSync(); });
	}
	function scheduleSync() {
		cancelAnimationFrame(syncRaf);
		syncRaf = requestAnimationFrame(() => { syncRaf = 0; syncScroll(); });
	}
	function measureAndSync() {
		g = measureGeometry(article!, preview!, minimap!);
		if (g.scale <= 0) {
			minimap!.hidden = true;
			document.documentElement.classList.remove('has-minimap');
			return;
		}
		minimap!.hidden = false;
		// Signals CSS to swap Starlight's text TOC for the minimap on desktop.
		document.documentElement.classList.add('has-minimap');
		applyGeometry(minimap!, g);
		positionLabels(labelsEl!, headings, article!, g);
		syncScroll();
	}
	function syncScroll() {
		if (!g || g.scale <= 0) return;
		const { top, bottom, articleHeight } = visibleRange(article!);
		const miniTop = aToM(top, g);
		const miniBot = aToM(bottom, g);
		vpEl!.style.top = `${miniTop}px`;
		vpEl!.style.height = `${Math.max(MIN_THUMB_PX, miniBot - miniTop)}px`;
		const featherArticle = cssPropPx(minimap!, '--minimap-feather', 18) / g.scale;
		applySharpMask(sharpSlot!, top, bottom, featherArticle, Math.max(articleHeight, g.articleHeight));
	}
	function scrollToArticleY(articleY: number, smooth: boolean) {
		scrollToY(articleTopInDoc(article!) + articleY - clientH() / 2, smooth);
	}
	function onPreviewDown(ev: PointerEvent) {
		if (ev.button !== 0 || !g) return;
		preview!.setPointerCapture(ev.pointerId);
		minimap!.dataset.dragging = 'true';
		const gesture = new AbortController();
		signal.addEventListener('abort', () => gesture.abort(), { once: true });
		let dragged = false;
		const previewTop = preview!.getBoundingClientRect().top;
		const at = (clientY: number) => mToA(clientY - previewTop, g!);
		const scrub = (e: PointerEvent) => { dragged = true; scrollToArticleY(at(e.clientY), false); };
		const end = (e: PointerEvent) => {
			if (!dragged) scrollToArticleY(at(e.clientY), true);
			minimap!.dataset.dragging = 'false';
			gesture.abort();
		};
		preview!.addEventListener('pointermove', scrub, { signal: gesture.signal });
		preview!.addEventListener('pointerup', end, { once: true, signal: gesture.signal });
		preview!.addEventListener('pointercancel', end, { once: true, signal: gesture.signal });
	}
	function onViewportDown(ev: PointerEvent) {
		if (ev.button !== 0 || !g) return;
		ev.preventDefault();
		ev.stopPropagation();
		vpEl!.setPointerCapture(ev.pointerId);
		minimap!.dataset.dragging = 'true';
		const gesture = new AbortController();
		signal.addEventListener('abort', () => gesture.abort(), { once: true });
		const previewTop = preview!.getBoundingClientRect().top;
		const grabOffset = ev.clientY - previewTop - parseFloat(vpEl!.style.top || '0');
		const drag = (e: PointerEvent) => {
			if (!g) return;
			scrollToY(articleTopInDoc(article!) + mToA(e.clientY - previewTop - grabOffset, g), false);
		};
		const end = () => { minimap!.dataset.dragging = 'false'; gesture.abort(); };
		vpEl!.addEventListener('pointermove', drag, { signal: gesture.signal });
		vpEl!.addEventListener('pointerup', end, { once: true, signal: gesture.signal });
		vpEl!.addEventListener('pointercancel', end, { once: true, signal: gesture.signal });
	}
	function onWheel(ev: WheelEvent) {
		if (!g) return;
		ev.preventDefault();
		const delta =
			ev.deltaMode === WheelEvent.DOM_DELTA_LINE ? ev.deltaY * 16 :
			ev.deltaMode === WheelEvent.DOM_DELTA_PAGE ? ev.deltaY * clientH() : ev.deltaY;
		scrollToY(scrollTop() + delta / g.scale, false);
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
