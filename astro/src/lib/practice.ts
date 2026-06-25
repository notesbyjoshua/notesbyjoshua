// Client-side wiring for practice boxes produced by
// src/lib/markdown/remark-practice.mjs:
//
//   <div class="problem-box" data-problem> … <div class="problem-solution" data-solution hidden> … </div></div>
//   <div class="problem-box frq-block" data-frq data-frq-id="…"> … <div data-solution hidden> … </div></div>
//
// Every box gets a "Show solution" toggle that reveals its co-located solution.
// FRQ boxes additionally get an answer box + "Grade my answer" button that calls
// the grade-frq backend (PUBLIC_FRQ_GRADER_URL). If that URL is unset (e.g.
// before the Supabase function is deployed), the grader UI is omitted but the
// "Show solution" toggle still works.
//
// Called once from PageTitle.astro's note-page script.

const GRADER_URL = import.meta.env.PUBLIC_FRQ_GRADER_URL as string | undefined;
const ANON_ID_KEY = 'notes_frq_anon_id';

type GradePart = {
  partId?: string;
  score?: number;
  maxScore?: number;
  verdict?: string;
  feedback?: string;
  missing?: string[];
  strengths?: string[];
};
type GradeResponse = {
  totalScore?: number;
  maxScore?: number;
  overallFeedback?: string;
  nextStep?: string;
  parts?: GradePart[];
  error?: string;
  retryAfter?: number;
};

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return map[c] ?? c;
  });
}

function graderPagePath(): string {
  const path = location.pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

function getAnonUserId(): string {
  try {
    let value = localStorage.getItem(ANON_ID_KEY);
    if (!value) {
      value = `anon_${crypto.randomUUID()}`;
      localStorage.setItem(ANON_ID_KEY, value);
    }
    return value;
  } catch {
    return 'anon_ephemeral';
  }
}

function verdictClass(verdict: string | undefined): string {
  switch (verdict) {
    case 'correct':
    case 'mostly_correct':
      return 'frq-grade-part--good';
    case 'partial':
      return 'frq-grade-part--partial';
    case 'incorrect':
      return 'frq-grade-part--bad';
    default:
      return '';
  }
}

function verdictLabel(verdict: string | undefined): string {
  switch (verdict) {
    case 'correct':
      return 'Correct';
    case 'mostly_correct':
      return 'Mostly correct';
    case 'partial':
      return 'Partial credit';
    case 'incorrect':
      return 'Incorrect';
    case 'unclear':
      return 'Unclear';
    default:
      return verdict ? verdict.replace(/_/g, ' ') : '';
  }
}

function renderGrade(data: GradeResponse): string {
  const parts = Array.isArray(data.parts) ? data.parts : [];
  const total = data.totalScore ?? '—';
  const max = data.maxScore ?? '—';
  const summary = data.overallFeedback
    ? `<section class="frq-grade-summary"><h4 class="frq-grade-summary__title">Coach summary</h4><p class="frq-grade-overall">${escapeHtml(
        data.overallFeedback,
      )}</p></section>`
    : '';
  const nextStep = data.nextStep
    ? `<p class="frq-grade-next"><strong>Next step:</strong> ${escapeHtml(data.nextStep)}</p>`
    : '';
  const partsHtml = parts
    .map((p) => {
      const cls = verdictClass(p.verdict);
      const label = verdictLabel(p.verdict);
      const verdictHtml = label ? `<p class="frq-grade-verdict">${escapeHtml(label)}</p>` : '';
      const missing =
        Array.isArray(p.missing) && p.missing.length
          ? `<div class="frq-grade-block"><strong>Still missing</strong><ul class="frq-grade-missing">${p.missing
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join('')}</ul></div>`
          : '';
      const strengths =
        Array.isArray(p.strengths) && p.strengths.length
          ? `<div class="frq-grade-block"><strong>What you did well</strong><ul class="frq-grade-strengths">${p.strengths
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join('')}</ul></div>`
          : '';
      return `<section class="frq-grade-part ${cls}"><h4 class="frq-grade-part__title">Part ${escapeHtml(
        String(p.partId ?? '?'),
      )} · ${escapeHtml(String(p.score ?? '?'))}/${escapeHtml(
        String(p.maxScore ?? '?'),
      )}</h4>${verdictHtml}<p class="frq-grade-part__feedback">${escapeHtml(
        String(p.feedback ?? '').trim(),
      )}</p>${missing}${strengths}</section>`;
    })
    .join('');
  return `<div class="frq-grade-result__inner"><p class="frq-grade-score"><strong>Score:</strong> ${escapeHtml(
    String(total),
  )}/${escapeHtml(String(max))}</p>${summary}${partsHtml}${nextStep}</div>`;
}

function errorMessage(data: GradeResponse, status: number): string {
  if (typeof data.retryAfter === 'number' && data.retryAfter > 0) {
    return `Grader is busy. Try again in about ${data.retryAfter}s.`;
  }
  switch (data.error) {
    case 'grader_not_configured':
      return 'The grader is not configured yet.';
    case 'manifest_unavailable':
      return 'Grader could not load this question. Try again shortly.';
    case 'unknown_frq':
      return 'This question is not registered with the grader yet.';
    case 'student_answer_too_long':
      return 'That answer is too long to grade. Trim it and try again.';
    case 'model_refused':
      return 'The model declined to grade this answer.';
    default:
      return status === 429
        ? 'Daily grading limit reached. Try again tomorrow.'
        : 'Grader is temporarily unavailable.';
  }
}

async function gradeFrq(frq: HTMLElement) {
  if (!GRADER_URL) return;
  const frqId = frq.dataset.frqId;
  const textarea = frq.querySelector<HTMLTextAreaElement>('[data-frq-answer]');
  const output = frq.querySelector<HTMLElement>('[data-frq-grade-output]');
  const gradeBtn = frq.querySelector<HTMLButtonElement>('[data-frq-grade]');
  if (!frqId || !textarea || !output) return;

  const answer = textarea.value.trim();
  if (!answer) {
    output.hidden = false;
    output.classList.add('is-error');
    output.classList.remove('is-loading');
    output.textContent = 'Write an answer before grading.';
    return;
  }

  output.hidden = false;
  output.classList.add('is-loading');
  output.classList.remove('is-error');
  output.textContent = 'Grading…';
  if (gradeBtn) gradeBtn.disabled = true;

  try {
    const res = await fetch(GRADER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        frqId,
        pagePath: graderPagePath(),
        studentAnswer: textarea.value,
        anonUserId: getAnonUserId(),
      }),
    });
    let data: GradeResponse = {};
    try {
      data = (await res.json()) as GradeResponse;
    } catch {
      data = {};
    }
    if (!res.ok) {
      output.classList.remove('is-loading');
      output.classList.add('is-error');
      output.textContent = errorMessage(data, res.status);
      return;
    }
    output.classList.remove('is-loading', 'is-error');
    output.innerHTML = renderGrade(data);
  } catch {
    output.classList.remove('is-loading');
    output.classList.add('is-error');
    output.textContent = 'Could not reach the grader. Check your connection and try again.';
  } finally {
    if (gradeBtn) gradeBtn.disabled = false;
  }
}

function makeButton(className: string, label: string): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = className;
  btn.textContent = label;
  return btn;
}

// Build the controls for one box: a "Show solution" toggle for every box, and
// (for FRQs, when a grader URL is configured) an answer box + "Grade" button.
function enhanceBox(box: HTMLElement) {
  if (box.dataset.practiceReady === '1') return;
  box.dataset.practiceReady = '1';

  const solution = box.querySelector<HTMLElement>('[data-solution]');
  const isFrq = box.hasAttribute('data-frq');

  const controls = document.createElement('div');
  controls.className = 'problem-controls';

  let output: HTMLElement | null = null;
  if (isFrq && GRADER_URL) {
    const label = document.createElement('label');
    label.className = 'frq-grader__label';
    label.textContent = 'Your answer';
    const textarea = document.createElement('textarea');
    textarea.className = 'frq-grader__input';
    textarea.rows = 6;
    textarea.setAttribute('data-frq-answer', '');
    textarea.placeholder = 'Write your full answer here, labelling each part (A), (B), …';
    label.appendChild(textarea);
    box.insertBefore(label, solution);

    output = document.createElement('div');
    output.className = 'frq-grade-result';
    output.setAttribute('data-frq-grade-output', '');
    output.hidden = true;
  }

  const actions = document.createElement('div');
  actions.className = 'problem-actions';
  if (isFrq && GRADER_URL) {
    actions.appendChild(makeButton('problem-btn problem-btn--primary', 'Grade my answer')).setAttribute(
      'data-frq-grade',
      '',
    );
  }
  if (solution) {
    const toggle = makeButton('problem-btn problem-btn--ghost', 'Show solution');
    toggle.setAttribute('data-solution-toggle', '');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      const opening = solution.hidden;
      solution.hidden = !opening;
      toggle.textContent = opening ? 'Hide solution' : 'Show solution';
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.classList.toggle('is-open', opening);
    });
    actions.appendChild(toggle);
  }
  box.insertBefore(actions, solution);
  if (output) box.insertBefore(output, solution);
}

let clickBound = false;

function bindAll() {
  const root = document.querySelector<HTMLElement>('.sl-markdown-content') ?? document.body;
  root.querySelectorAll<HTMLElement>('.problem-box').forEach(enhanceBox);

  if (clickBound) return;
  clickBound = true;
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.closest('[data-frq-grade]')) {
      const frq = target.closest<HTMLElement>('[data-frq]');
      if (frq) void gradeFrq(frq);
    }
  });
}

export function initPractice() {
  bindAll();
}
