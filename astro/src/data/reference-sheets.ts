// Cheatsheet drawer registry: maps a note-section path prefix to the cheatsheet
// page that should be reachable from a slide-out drawer while reading any note
// in that section. Idea ported from gxboy12345's fork; here the drawer fetches
// the already-rendered Starlight cheatsheet page (KaTeX baked in) at runtime.
//
// `url` is the cheatsheet's own page (also excluded from showing the handle, so
// the drawer doesn't offer to open the page you're already on).

export type ReferenceSheet = {
	/** Path prefix a note must start with for the drawer to appear (trailing slash). */
	prefix: string;
	/** Button + drawer-header label. */
	label: string;
	/** The cheatsheet page URL (trailing slash). */
	url: string;
};

export const referenceSheets: ReferenceSheet[] = [
	{ prefix: '/notes/ap/chem/', label: 'AP Chem cheatsheet', url: '/notes/ap/chem/cheatsheet/' },
	{ prefix: '/notes/ap/calculus/', label: 'AP Calc cheatsheet', url: '/notes/ap/calculus/cheatsheet/' },
	{ prefix: '/notes/ap/precalc/', label: 'AP Precalc cheatsheet', url: '/notes/ap/precalc/cheatsheet/' },
	{ prefix: '/notes/ap/stats/', label: 'AP Stats cheatsheet', url: '/notes/ap/stats/cheatsheet/' },
	{
		prefix: '/notes/ap/ap-physics-c-mechanics/',
		label: 'Physics C Mech cheatsheet',
		url: '/notes/ap/ap-physics-c-mechanics/cheatsheet/',
	},
	{
		prefix: '/notes/ap/ap-physics-c-em/',
		label: 'Physics C E&M cheatsheet',
		url: '/notes/ap/ap-physics-c-em/cheatsheet/',
	},
];

/** The cheatsheet whose prefix matches `path` (longest prefix wins), or null. */
export function findReferenceSheet(path: string): ReferenceSheet | null {
	const norm = path.endsWith('/') ? path : `${path}/`;
	const matches = referenceSheets.filter((s) => norm.startsWith(s.prefix));
	if (!matches.length) return null;
	return matches.sort((a, b) => b.prefix.length - a.prefix.length)[0];
}
