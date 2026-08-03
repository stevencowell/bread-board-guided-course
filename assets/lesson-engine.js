(function () {
  'use strict';

  const config = window.LESSON_CONFIG || {};
  const mcQuestions = window.MC_QUESTIONS || [];
  const writtenQuestions = window.WRITTEN_QUESTIONS || [];
  const STORAGE_KEY = config.storageKey || 'folding-chair-guided-lesson';

  const defaultState = {
    studentName: '',
    studentClass: '',
    mc: {},
    written: {}
  };

  function freshState() {
    return JSON.parse(JSON.stringify(defaultState));
  }

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (!parsed || typeof parsed !== 'object') return freshState();
      return {
        studentName: parsed.studentName || '',
        studentClass: parsed.studentClass || '',
        mc: parsed.mc || {},
        written: parsed.written || {}
      };
    } catch (error) {
      return freshState();
    }
  }

  let state = loadState();
  let saveTimer = null;

  function saveState(message = 'Saved') {
    window.clearTimeout(saveTimer);
    const status = document.getElementById('save-status');
    if (status) status.textContent = 'Saving…';
    saveTimer = window.setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        if (status) status.textContent = message;
      } catch (error) {
        if (status) status.textContent = 'Browser save unavailable';
      }
      updateSummary();
    }, 180);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function wordCount(text) {
    return String(text || '').trim().split(/\s+/).filter(Boolean).length;
  }

  function autoGrowTextarea(textarea) {
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.max(175, textarea.scrollHeight + 2)}px`;
  }

  function autoGrowAllTextareas() {
    document.querySelectorAll('textarea[data-action="written-input"]').forEach(autoGrowTextarea);
  }

  function renderMcQuestions() {
    const container = document.getElementById('mc-questions');
    if (!container) return;
    container.innerHTML = mcQuestions.map((item, index) => {
      const saved = state.mc[index] || {};
      const selected = Number.isInteger(saved.selected) ? saved.selected : null;
      const mastered = Boolean(saved.mastered);
      const attempts = saved.attempts || 0;
      const hintVisible = Boolean(saved.hintVisible);
      const feedbackClass = saved.feedbackType || '';
      const feedback = saved.feedback || '';

      const options = item.options.map((option, optionIndex) => {
        const checked = selected === optionIndex ? 'checked' : '';
        let optionClass = '';
        if (mastered && optionIndex === item.correct) optionClass = 'option-correct';
        else if (!mastered && saved.lastWrong === optionIndex) optionClass = 'option-wrong';
        return `
          <label class="option-label ${optionClass}">
            <input type="radio" name="mc-${index}" value="${optionIndex}" ${checked}>
            <span>${escapeHtml(option)}</span>
          </label>`;
      }).join('');

      return `
        <article class="question-card ${mastered ? 'mastered' : ''}" data-mc-index="${index}">
          <h3 class="question-title"><span class="question-number">${index + 1}</span>${escapeHtml(item.question)}</h3>
          <div class="options">${options}</div>
          <div class="question-actions screen-only">
            <button class="check-button" type="button" data-action="check-mc">${mastered ? 'Check again' : 'Check answer'}</button>
            <button class="hint-button" type="button" data-action="hint-mc">${hintVisible ? 'Hide hint' : 'Need a hint?'}</button>
            <span class="mastery-badge">Mastered</span>
            <span class="attempts">Attempts: ${attempts}</span>
          </div>
          <div class="hint-panel ${hintVisible ? 'show' : ''}"><strong>Hint:</strong> ${escapeHtml(attempts >= 2 ? item.strongHint : item.hint)}</div>
          <div class="feedback ${feedbackClass} ${feedback ? 'show' : ''}" role="status" aria-live="polite">${feedback}</div>
        </article>`;
    }).join('');
  }

  function renderWrittenQuestions() {
    const container = document.getElementById('written-questions');
    if (!container) return;
    container.innerHTML = writtenQuestions.map((item, index) => {
      const saved = state.written[index] || {};
      const response = saved.response || '';
      const checked = Boolean(saved.checked);
      const modelVisible = Boolean(saved.modelVisible);
      const selfScore = Number.isInteger(saved.selfScore) ? saved.selfScore : null;
      const wc = wordCount(response);
      const met = conceptMatches(response, item.concepts);

      return `
        <article class="written-card ${checked ? 'reviewed' : ''}" data-written-index="${index}">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.prompt)}</p>
          <div class="scaffold">
            <strong>Sentence starters</strong>
            <ul>${item.scaffold.map(line => `<li>${escapeHtml(line)}</li>`).join('')}</ul>
          </div>
          <label class="visually-hidden" for="written-${index}">Response to ${escapeHtml(item.title)}</label>
          <textarea id="written-${index}" data-action="written-input" placeholder="Write your response here before viewing the model answer…">${escapeHtml(response)}</textarea>
          <div class="response-meta">
            <span data-word-count>Word count: ${wc}/${item.minWords}</span>
            <span>${checked ? 'Guidance reviewed' : 'Not yet reviewed'}</span>
          </div>
          <div class="concept-list" aria-label="Key concepts">
            ${item.concepts.map((concept, conceptIndex) => `<span class="concept-chip ${met[conceptIndex] ? 'met' : ''}">${met[conceptIndex] ? '✓ ' : ''}${escapeHtml(concept.label)}</span>`).join('')}
          </div>
          <div class="written-actions screen-only">
            <button class="check-button" type="button" data-action="check-written">Check my response</button>
            <button class="model-button" type="button" data-action="model-written">${modelVisible ? 'Hide model response' : 'Compare with model response'}</button>
          </div>
          <div class="response-guidance ${saved.guidance ? 'show' : ''} ${saved.ready ? 'ready' : ''}" role="status" aria-live="polite">${saved.guidance || ''}</div>
          <div class="model-panel ${modelVisible ? 'show' : ''}"><strong>Model response:</strong> ${escapeHtml(item.model)}</div>
          <div class="self-score ${modelVisible ? 'show' : ''}">
            <strong>Self-assess after comparing:</strong>
            <div class="score-buttons screen-only">
              ${[
                [3, '3 – Fully explained'],
                [2, '2 – Mostly explained'],
                [1, '1 – Partly explained'],
                [0, '0 – Not yet']
              ].map(([score, label]) => `<button class="score-button ${selfScore === score ? 'selected' : ''}" type="button" data-action="score-written" data-score="${score}">${label}</button>`).join('')}
            </div>
            <p>${selfScore === null ? 'No self-assessment selected.' : `Self-assessment: ${selfScore}/3`}</p>
          </div>
        </article>`;
    }).join('');
    window.requestAnimationFrame(autoGrowAllTextareas);
  }

  function conceptMatches(text, concepts) {
    const normalised = String(text || '').toLowerCase();
    return concepts.map(concept => concept.terms.some(term => normalised.includes(term.toLowerCase())));
  }

  function handleMcClick(event) {
    const card = event.target.closest('[data-mc-index]');
    if (!card) return;
    const index = Number(card.dataset.mcIndex);
    const item = mcQuestions[index];
    const saved = state.mc[index] || { attempts: 0 };
    const action = event.target.dataset.action;

    if (action === 'hint-mc') {
      saved.hintVisible = !saved.hintVisible;
      state.mc[index] = saved;
      saveState();
      renderMcQuestions();
      return;
    }

    if (action === 'check-mc') {
      const selectedInput = card.querySelector('input[type="radio"]:checked');
      if (!selectedInput) {
        saved.feedback = '<strong>Choose an answer first.</strong> Then check it and use the feedback to improve.';
        saved.feedbackType = 'error';
        state.mc[index] = saved;
        saveState();
        renderMcQuestions();
        return;
      }

      const selected = Number(selectedInput.value);
      saved.selected = selected;
      saved.attempts = (saved.attempts || 0) + 1;
      if (selected === item.correct) {
        saved.mastered = true;
        saved.lastWrong = null;
        saved.feedbackType = 'correct';
        saved.feedback = `<strong>Correct.</strong> ${escapeHtml(item.feedback[selected])}`;
      } else {
        saved.mastered = false;
        saved.lastWrong = selected;
        saved.hintVisible = true;
        saved.feedbackType = 'not-yet';
        const nextStep = saved.attempts >= 2
          ? 'Use the stronger clue, rule out the options that do not match the theory, then try again.'
          : 'Read the hint and try again.';
        saved.feedback = `<strong>Not yet.</strong> ${escapeHtml(item.feedback[selected])} ${escapeHtml(nextStep)}`;
      }
      state.mc[index] = saved;
      saveState();
      renderMcQuestions();
    }
  }

  function handleMcChange(event) {
    if (!event.target.matches('input[type="radio"]')) return;
    const card = event.target.closest('[data-mc-index]');
    if (!card) return;
    const index = Number(card.dataset.mcIndex);
    const saved = state.mc[index] || { attempts: 0 };
    saved.selected = Number(event.target.value);
    state.mc[index] = saved;
    saveState('Draft saved');
  }

  function handleWrittenInput(event) {
    if (event.target.dataset.action !== 'written-input') return;
    const card = event.target.closest('[data-written-index]');
    const index = Number(card.dataset.writtenIndex);
    const saved = state.written[index] || {};
    saved.response = event.target.value;
    saved.checked = false;
    saved.ready = false;
    saved.guidance = '';
    state.written[index] = saved;
    saveState('Draft saved');

    autoGrowTextarea(event.target);
    const item = writtenQuestions[index];
    const wc = wordCount(saved.response);
    const countEl = card.querySelector('[data-word-count]');
    if (countEl) countEl.textContent = `Word count: ${wc}/${item.minWords}`;
    const matches = conceptMatches(saved.response, item.concepts);
    card.querySelectorAll('.concept-chip').forEach((chip, conceptIndex) => {
      chip.classList.toggle('met', matches[conceptIndex]);
      chip.textContent = `${matches[conceptIndex] ? '✓ ' : ''}${item.concepts[conceptIndex].label}`;
    });
  }

  function handleWrittenClick(event) {
    const card = event.target.closest('[data-written-index]');
    if (!card) return;
    const index = Number(card.dataset.writtenIndex);
    const item = writtenQuestions[index];
    const saved = state.written[index] || {};
    const action = event.target.dataset.action;

    if (action === 'check-written') {
      const response = saved.response || '';
      const wc = wordCount(response);
      const matches = conceptMatches(response, item.concepts);
      const missingIndexes = matches.map((isMet, i) => isMet ? -1 : i).filter(i => i >= 0);
      saved.checkCount = (saved.checkCount || 0) + 1;
      saved.checked = true;

      if (wc < item.minWords) {
        const remaining = item.minWords - wc;
        saved.ready = false;
        saved.guidance = `<strong>Good start.</strong> Add about ${remaining} more word${remaining === 1 ? '' : 's'}. Use the sentence starters to explain the reason and the practical consequence, not just name the facts.`;
      } else if (missingIndexes.length) {
        saved.ready = false;
        const prompts = missingIndexes.map(i => `<li>${escapeHtml(item.prompts[i])}</li>`).join('');
        saved.guidance = `<strong>You have part of the answer.</strong> Strengthen it by adding:<ul>${prompts}</ul>`;
      } else {
        saved.ready = true;
        saved.guidance = '<strong>Strong response.</strong> You have included the main concepts. Compare it with the model, improve any unclear wording, then self-assess honestly.';
      }
      state.written[index] = saved;
      saveState();
      renderWrittenQuestions();
      return;
    }

    if (action === 'model-written') {
      const wc = wordCount(saved.response || '');
      const canReveal = wc >= Math.max(20, Math.floor(item.minWords * .55)) || (saved.checkCount || 0) >= 2;
      if (!saved.modelVisible && !canReveal) {
        saved.checked = true;
        saved.ready = false;
        saved.guidance = `<strong>Have a genuine attempt first.</strong> Write at least ${Math.max(20, Math.floor(item.minWords * .55))} words, or check your response twice, before revealing the model.`;
      } else {
        saved.modelVisible = !saved.modelVisible;
        if (saved.modelVisible) saved.checked = true;
      }
      state.written[index] = saved;
      saveState();
      renderWrittenQuestions();
      return;
    }

    if (action === 'score-written') {
      saved.selfScore = Number(event.target.dataset.score);
      saved.checked = true;
      state.written[index] = saved;
      saveState();
      renderWrittenQuestions();
    }
  }

  function updateSummary() {
    const mcMastered = mcQuestions.filter((_, index) => state.mc[index] && state.mc[index].mastered).length;
    const writtenReviewed = writtenQuestions.filter((_, index) => state.written[index] && state.written[index].checked).length;
    const detailsComplete = Boolean(state.studentName.trim() && state.studentClass.trim());

    const values = {
      'mc-progress-number': `${mcMastered}/${mcQuestions.length}`,
      'written-progress-number': `${writtenReviewed}/${writtenQuestions.length}`,
      'summary-mc': `${mcMastered}/${mcQuestions.length}`,
      'summary-written': `${writtenReviewed}/${writtenQuestions.length}`,
      'summary-details': detailsComplete ? 'Complete' : 'Incomplete'
    };
    Object.entries(values).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = value;
    });
  }

  function bindStudentFields() {
    const nameInput = document.getElementById('student-name');
    const classInput = document.getElementById('student-class');
    if (!nameInput || !classInput) return;
    nameInput.value = state.studentName;
    classInput.value = state.studentClass;

    nameInput.addEventListener('input', () => {
      state.studentName = nameInput.value;
      saveState('Details saved');
    });
    classInput.addEventListener('input', () => {
      state.studentClass = classInput.value;
      saveState('Details saved');
    });
  }

  function bindGlobalActions() {
    const mc = document.getElementById('mc-questions');
    const written = document.getElementById('written-questions');
    if (mc) {
      mc.addEventListener('click', handleMcClick);
      mc.addEventListener('change', handleMcChange);
    }
    if (written) {
      written.addEventListener('input', handleWrittenInput);
      written.addEventListener('click', handleWrittenClick);
    }

    const printButton = document.getElementById('print-button');
    if (printButton) printButton.addEventListener('click', () => {
      autoGrowAllTextareas();
      saveState('Saved – opening print view');
      window.setTimeout(() => {
        autoGrowAllTextareas();
        window.print();
      }, 250);
    });

    const resetButton = document.getElementById('reset-button');
    if (resetButton) resetButton.addEventListener('click', () => {
      const label = config.resetLabel || 'this lesson';
      const confirmed = window.confirm(`Reset all ${label} answers and student details on this browser? This cannot be undone.`);
      if (!confirmed) return;
      localStorage.removeItem(STORAGE_KEY);
      state = freshState();
      bindInitialValues();
      renderMcQuestions();
      renderWrittenQuestions();
      updateSummary();
      const status = document.getElementById('save-status');
      if (status) status.textContent = 'Lesson reset';
    });
  }

  function bindInitialValues() {
    const nameInput = document.getElementById('student-name');
    const classInput = document.getElementById('student-class');
    if (nameInput) nameInput.value = state.studentName;
    if (classInput) classInput.value = state.studentClass;
  }

  function initialise() {
    bindStudentFields();
    renderMcQuestions();
    renderWrittenQuestions();
    bindGlobalActions();
    updateSummary();
  }

  document.addEventListener('DOMContentLoaded', initialise);
}());

(() => { const script = document.createElement('script'); script.src = '/bread-board-guided-course/shared/hub-navigation.js'; document.head.append(script); })();
