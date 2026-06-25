#!/usr/bin/env python3
"""Score each Astro note for completeness (stub..complete) and emit JSON.

Reads src/content/docs/notes/**/*.md, infers a 0-100 progress score from the
content (length, headings, worked examples, practice/solutions, placeholders),
and writes src/data/notes-progress.json for the admin progress page.

Adapted from the old Jekyll scripts/update_progress_report.py for Astro content:
theorem boxes are now <div class="theorem-box"> (no markdown="1"), the H1 is the
front-matter title, and course grouping comes from src/sidebar.json.
"""

from __future__ import annotations

import json
import re
from collections import defaultdict
from datetime import date
from pathlib import Path

ASTRO = Path(__file__).resolve().parents[1]
NOTES = ASTRO / "src" / "content" / "docs" / "notes"
SIDEBAR = ASTRO / "src" / "sidebar.json"
OUT = ASTRO / "src" / "data" / "notes-progress.json"

STATUS_ORDER = [
    ("stub", 0, 15),
    ("outline", 15, 30),
    ("draft", 30, 60),
    ("developing", 60, 80),
    ("review", 80, 95),
    ("complete", 95, 101),
]


def status_for(progress: int) -> str:
    for status, low, high in STATUS_ORDER:
        if low <= progress < high:
            return status
    return "complete"


def split_front_matter(text: str) -> tuple[str, str]:
    if not text.startswith("---\n"):
        return "", text
    end = text.find("\n---", 4)
    if end == -1:
        return "", text
    fm = text[4:end]
    body = text[end + 4:].lstrip("\n")
    return fm, body


def fm_title(fm: str) -> str:
    m = re.search(r"^title:\s*(.+?)\s*$", fm, flags=re.MULTILINE)
    return m.group(1).strip().strip('"').strip("'") if m else ""


def words(body: str) -> int:
    cleaned = re.sub(r"<[^>]+>", " ", body)
    return len(re.findall(r"[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)?", cleaned))


def has_section(body: str, names: tuple[str, ...]) -> bool:
    pattern = r"^##\s+(" + "|".join(re.escape(n) for n in names) + r")\s*$"
    return bool(re.search(pattern, body, flags=re.IGNORECASE | re.MULTILINE))


def section_body(body: str, names: tuple[str, ...]) -> str:
    """Text under the first matching H2, up to the next H2 (or end)."""
    pattern = r"^##\s+(?:" + "|".join(re.escape(n) for n in names) + r")\s*$"
    m = re.search(pattern, body, flags=re.IGNORECASE | re.MULTILINE)
    if not m:
        return ""
    rest = body[m.end():]
    nxt = re.search(r"^##\s", rest, flags=re.MULTILINE)
    return rest[: nxt.start()] if nxt else rest


def count_problems(section: str) -> int:
    """Numbered problems (`1.`, `2.`, …) in a Practice/Solutions section."""
    return len(re.findall(r"(?m)^\s*\d+\.\s", section))


def count_solutions(section: str) -> int:
    """Worked solutions: `### Solution N` headings, else theorem boxes."""
    headings = len(re.findall(r"(?mi)^#{2,4}\s*Solution\b", section))
    return headings or len(re.findall(r'theorem-box', section))


def count_links(body: str) -> int:
    return len(re.findall(r"\[[^\]]+\]\([^)]+\)", body))


def clamp(v: int, lo: int = 0, hi: int = 100) -> int:
    return max(lo, min(hi, v))


def is_index(body: str) -> bool:
    # Course/subject landing pages: short, link-heavy, or list units/subjects.
    if has_section(body, ("Units", "Subjects", "Quick Reference")):
        return True
    return words(body) < 400 and count_links(body) >= 3


def score_index(body: str) -> tuple[int, list[str]]:
    issues: list[str] = []
    links = count_links(body)
    headings = len(re.findall(r"^##\s+", body, flags=re.MULTILINE))
    placeholders = len(re.findall(r"Placeholder|TODO|coming soon", body, re.IGNORECASE))
    structure = 30
    navigation = min(30, links * 5 + headings * 3)
    if links < 2:
        issues.append("few navigation links")
    coverage = min(25, round(min(words(body), 500) / 500 * 25))
    polish = 15
    if placeholders:
        polish -= min(10, placeholders * 3)
        issues.append("has TODOs/placeholders")
    return clamp(structure + navigation + coverage + max(0, polish)), issues


def score_unit(fm: str, body: str) -> tuple[int, list[str]]:
    issues: list[str] = []
    word_count = words(body)
    headings = len(re.findall(r"^##\s+", body, flags=re.MULTILINE))
    theorem_boxes = len(re.findall(r'<div class="theorem-box"', body))
    examples = len(re.findall(r"\*\*Example\.\*\*", body))
    proofs = len(re.findall(r"\*\*Proof \(.+?\)\.\*\*", body))
    placeholders = len(re.findall(r"Placeholder|TODO|work in progress", body, re.IGNORECASE))

    # Practice/Solutions credit is based on actual problems present, not just the
    # heading: an empty "## Practice Problems" outline earns nothing.
    practice_sec = section_body(body, ("Practice", "Practice Problems"))
    solutions_sec = section_body(body, ("Solutions",))
    n_problems = count_problems(practice_sec)
    n_solutions = count_solutions(solutions_sec)

    # An essentially empty page (outline of headings, little or no prose, no real
    # problems) is a stub: cap it low and scale by the little content it has,
    # rather than handing out a structure/polish baseline.
    if word_count < 150 and theorem_boxes == 0 and n_problems == 0:
        issues.append("empty/stub page")
        return clamp(round(word_count / 150 * 12)), issues

    # Structure/metadata (up to 20): title, ordering front matter, real scaffolding.
    structure = 0
    if fm_title(fm):
        structure += 5
    if re.search(r"^\s*order:\s*\d+", fm, flags=re.MULTILINE):
        structure += 3
    if word_count >= 150 and headings >= 3:
        structure += 12

    coverage = min(25, round(min(word_count, 1600) / 1600 * 25))
    if word_count < 450:
        issues.append("thin explanations")

    example_score = min(15, theorem_boxes * 3 + examples * 2 + proofs * 2)
    if theorem_boxes == 0 and word_count > 700:
        issues.append("few or no worked boxes")

    # ~8 problems / ~8 worked solutions earns full marks.
    practice_score = min(15, n_problems * 2)
    solutions_score = min(15, n_solutions * 2)
    if n_problems == 0:
        issues.append("missing practice")
    if n_problems and n_solutions == 0:
        issues.append("practice without solutions")
    elif n_problems and n_solutions < n_problems:
        issues.append("solutions incomplete")

    polish = 10 if word_count >= 150 else 0
    if placeholders:
        polish -= min(10, placeholders * 3)
        issues.append("has TODOs/placeholders")

    total = structure + coverage + example_score + practice_score + solutions_score + max(0, polish)
    return clamp(total), issues


NEXT_STEPS = [
    # An empty/stub page just needs to be written — checked first so a stub's
    # next step is the obvious "write it", not a vague review.
    ("empty/stub page", "Write the note"),
    ("thin explanations", "Expand core explanations"),
    ("few or no worked boxes", "Add worked examples"),
    ("missing practice", "Add practice problems"),
    ("practice without solutions", "Add matching solutions"),
    ("missing solutions", "Add solutions"),
    ("has TODOs/placeholders", "Resolve placeholders"),
    ("few navigation links", "Improve navigation links"),
]


def next_step(issues: list[str]) -> str:
    for needle, action in NEXT_STEPS:
        if any(needle in i for i in issues):
            return action
    return "Review for accuracy" if not issues else "Run a focused review"


def route_for(path: Path) -> str:
    rel = path.relative_to(ASTRO / "src" / "content" / "docs").with_suffix("").as_posix()
    return "/" + rel + "/"


# The competition-prep groups are the only Physics/Chemistry content, so report
# them under the plain subject name instead of the longer sidebar label.
COURSE_RENAME = {
    "Physics Competition Prep": "Physics",
    "Chemistry Competition Prep": "Chemistry",
}


def course_map() -> dict[str, str]:
    """route -> course label, from the generated sidebar tree."""
    mapping: dict[str, str] = {}
    if not SIDEBAR.exists():
        return mapping

    def label_for(name: str) -> str:
        return COURSE_RENAME.get(name, name)

    def walk(items, label):
        for it in items:
            if "items" in it:
                walk(it["items"], it["label"])
            elif "link" in it:
                mapping[it["link"]] = label_for(label)

    for it in json.loads(SIDEBAR.read_text()):
        if "items" in it:
            walk(it["items"], it["label"])
        elif "link" in it:
            mapping[it["link"]] = "Notes"
    return mapping


def main() -> None:
    courses = course_map()
    entries = []
    for path in sorted(NOTES.rglob("*.md")):
        text = path.read_text(encoding="utf-8")
        fm, body = split_front_matter(text)
        route = route_for(path)
        if is_index(body):
            kind = "index"
            progress, issues = score_index(body)
        else:
            kind = "unit"
            progress, issues = score_unit(fm, body)
        entries.append({
            "title": fm_title(fm) or path.stem,
            "route": route,
            "course": courses.get(route, "Notes"),
            "kind": kind,
            "status": status_for(progress),
            "progress": progress,
            "issues": issues[:3],
            # A fully-complete note has nothing left to do.
            "next_step": "" if progress >= 100 else next_step(issues),
        })

    units = [e for e in entries if e["kind"] == "unit"]
    avg = round(sum(e["progress"] for e in units) / len(units)) if units else 0
    summary = {
        "generated_at": date.today().isoformat(),
        "unit_pages": len(units),
        "all_pages": len(entries),
        "average_progress": avg,
        "below_complete": sum(1 for e in units if e["progress"] < 95),
        "with_placeholders": sum(1 for e in units if any("placeholder" in i.lower() for i in e["issues"])),
    }
    # Least-done first — most actionable.
    entries.sort(key=lambda e: (e["progress"], e["course"].lower(), e["title"].lower()))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({"summary": summary, "pages": entries}, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {OUT.relative_to(ASTRO)}: {len(entries)} pages, avg {avg}% across {len(units)} units")


if __name__ == "__main__":
    main()
