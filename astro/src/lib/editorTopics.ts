export type EditableTopic = {
	key: string;
	label: string;
	prefixes: string[];
};

export const EDITABLE_TOPICS: EditableTopic[] = [
	{ key: 'ap-biology', label: 'AP Biology', prefixes: ['astro/src/content/docs/notes/ap/biology.md', 'astro/src/content/docs/notes/ap/biology/'] },
	{ key: 'ap-calculus', label: 'AP Calculus', prefixes: ['astro/src/content/docs/notes/ap/calculus/'] },
	{ key: 'ap-chemistry', label: 'AP Chemistry', prefixes: ['astro/src/content/docs/notes/ap/chem/'] },
	{ key: 'ap-physics-c-em', label: 'AP Physics C: E&M', prefixes: ['astro/src/content/docs/notes/ap/ap-physics-c-em/'] },
	{
		key: 'ap-physics-c-mechanics',
		label: 'AP Physics C: Mechanics',
		prefixes: ['astro/src/content/docs/notes/ap/ap-physics-c-mechanics/'],
	},
	{ key: 'ap-precalculus', label: 'AP Precalculus', prefixes: ['astro/src/content/docs/notes/ap/precalc/'] },
	{ key: 'ap-statistics', label: 'AP Statistics', prefixes: ['astro/src/content/docs/notes/ap/stats/'] },
	{ key: 'chemistry', label: 'Chemistry', prefixes: ['astro/src/content/docs/notes/chemistry/'] },
	{ key: 'math', label: 'Math', prefixes: ['astro/src/content/docs/notes/math/'] },
	{ key: 'physics', label: 'Physics', prefixes: ['astro/src/content/docs/notes/physics/'] },
];

export const EDITABLE_TOPIC_KEYS = EDITABLE_TOPICS.map((topic) => topic.key);

export function topicForPath(path: string): EditableTopic | null {
	return EDITABLE_TOPICS.find((topic) => topic.prefixes.some((prefix) => path.startsWith(prefix))) ?? null;
}

export function canTopicEditPath(topicKeys: Iterable<string>, path: string): boolean {
	const allowed = new Set(topicKeys);
	return EDITABLE_TOPICS.some(
		(topic) => allowed.has(topic.key) && topic.prefixes.some((prefix) => path.startsWith(prefix)),
	);
}
