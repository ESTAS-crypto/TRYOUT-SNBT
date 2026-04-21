/**
 * SNBT Tryout Pro — Exam Engine
 * Anti-cheat, Timer, Navigation, Shuffle, Submit
 */

// ===== State =====
let state = {
  registration: null,
  questions: {},         // Shuffled questions per subtest
  answers: {},           // { 'PU': ['A', null, 'C', ...], ... }
  flags: {},             // { 'PU': [false, true, false, ...], ... }
  currentSubtest: 'PU',
  currentQuestion: 0,    // Index within current subtest
  subtestTimers: {},     // Remaining seconds per subtest
  globalTimer: 0,        // Total remaining seconds
  timerInterval: null,
  violations: 0,
  isFullscreen: false,
  examStarted: false,
  examFinished: false,
  subtestOrder: ['PU','PPU','PBM','PK','LBI','LBE','PM'],
  completedSubtests: [],
  startTime: null,
};

// ===== Init =====
document.addEventListener('DOMContentLoaded', init);

function init() {
  createToastContainer();

  // Load registration
  try {
    state.registration = JSON.parse(localStorage.getItem('snbt_registration') || 'null');
  } catch { state.registration = null; }

  if (!state.registration) {
    window.location.href = 'index.html';
    return;
  }

  // Restore saved state or init fresh
  const savedState = localStorage.getItem('snbt_exam_state');
  if (savedState) {
    try {
      const s = JSON.parse(savedState);
      if (s.examFinished) {
        window.location.href = 'result.html';
        return;
      }
      // Restore state
      state.questions = s.questions;
      state.answers = s.answers;
      state.flags = s.flags;
      state.currentSubtest = s.currentSubtest;
      state.currentQuestion = s.currentQuestion;
      state.violations = s.violations || 0;
      state.completedSubtests = s.completedSubtests || [];
      state.startTime = s.startTime;
      // Recalculate timers (elapsed time)
      const elapsed = Math.floor((Date.now() - s.startTime) / 1000);
      state.subtestTimers = s.subtestTimers;
      state.globalTimer = Math.max(0, s.globalTimer - elapsed);
      if (state.subtestTimers[state.currentSubtest]) {
        state.subtestTimers[state.currentSubtest] = Math.max(0, state.subtestTimers[state.currentSubtest] - elapsed);
      }
    } catch {
      initFreshExam();
    }
  } else {
    initFreshExam();
  }

  setupUI();
  startAntiCheat();
  startExam();
}

function initFreshExam() {
  // Shuffle questions
  state.questions = getShuffledQuestions();

  // Init answers and flags
  for (const sub of state.subtestOrder) {
    state.answers[sub] = new Array(state.questions[sub].length).fill(null);
    state.flags[sub] = new Array(state.questions[sub].length).fill(false);
  }

  // Init timers (seconds)
  let total = 0;
  for (const sub of state.subtestOrder) {
    const t = SUBTEST_INFO[sub].time * 60;
    state.subtestTimers[sub] = t;
    total += t;
  }
  state.globalTimer = total;
  state.startTime = Date.now();
  state.currentSubtest = 'PU';
  state.currentQuestion = 0;
  state.completedSubtests = [];
}

// ===== Setup UI =====
function setupUI() {
  // Participant name
  document.getElementById('participant-name').textContent = state.registration.name;

  // Build sidebar subtest nav
  buildSubtestNav();

  // Update violation display
  updateViolationBadge();
}

function buildSubtestNav() {
  const nav = document.getElementById('subtest-nav');
  if (!nav) return;
  nav.innerHTML = state.subtestOrder.map(sub => {
    const info = SUBTEST_INFO[sub];
    const completed = state.completedSubtests.includes(sub);
    return `
      <div class="subtest-nav-item ${sub === state.currentSubtest ? 'active' : ''} ${completed ? 'completed' : ''}"
           onclick="jumpToSubtest('${sub}')" id="snav-${sub}">
        <div class="subtest-nav-dot" style="background:${info.color}"></div>
        <div class="subtest-nav-info">
          <div class="subtest-nav-name">${info.code}</div>
          <div class="subtest-nav-count">${getAnsweredCount(sub)}/${info.questions} dijawab</div>
        </div>
        ${completed ? '<span style="font-size:.75rem;color:var(--success)">✓</span>' : ''}
      </div>
    `;
  }).join('');
}

// ===== Start Exam =====
function startExam() {
  state.examStarted = true;
  requestFullscreenMode();
  startTimers();
  renderQuestion();
  saveState();
}

// ===== Fullscreen =====
function requestFullscreenMode() {
  const el = document.documentElement;
  const req = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen;
  if (req) {
    req.call(el).catch(() => {});
  }
}

document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

function handleFullscreenChange() {
  const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement);
  if (!isFullscreen && state.examStarted && !state.examFinished) {
    triggerViolation('Kamu keluar dari mode fullscreen!');
    // Re-request fullscreen
    setTimeout(requestFullscreenMode, 1000);
  }
}

// ===== Anti-Cheat =====
function startAntiCheat() {
  // Tab/window switch
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && state.examStarted && !state.examFinished) {
      triggerViolation('Kamu berpindah tab atau aplikasi!');
    }
  });

  window.addEventListener('blur', () => {
    if (state.examStarted && !state.examFinished) {
      triggerViolation('Jendela ujian kehilangan fokus!');
    }
  });

  // Block right click
  document.addEventListener('contextmenu', e => { if (state.examStarted) e.preventDefault(); });

  // Block keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (!state.examStarted) return;
    // Block F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+P
    if (e.key === 'F12') { e.preventDefault(); return; }
    if (e.ctrlKey && ['i','I','u','U','s','S','a','A','c','C','v','V','p','P'].includes(e.key)) {
      e.preventDefault();
      return;
    }
    if (e.ctrlKey && e.shiftKey && ['i','I','j','J','c','C'].includes(e.key)) {
      e.preventDefault();
      return;
    }
    if (e.key === 'PrintScreen') { e.preventDefault(); return; }
    // Navigation shortcuts
    if (e.key === 'ArrowRight') nextQuestion();
    if (e.key === 'ArrowLeft') prevQuestion();
    if (e.key >= '1' && e.key <= '5') {
      const opts = ['A','B','C','D','E'];
      selectAnswer(opts[parseInt(e.key)-1]);
    }
  });

  // Block copy/paste events
  document.addEventListener('copy', e => { if (state.examStarted) e.preventDefault(); });
  document.addEventListener('paste', e => { if (state.examStarted) e.preventDefault(); });
  document.addEventListener('cut', e => { if (state.examStarted) e.preventDefault(); });
}

function triggerViolation(reason) {
  state.violations++;
  updateViolationBadge();
  saveState();

  showToast(`⚠️ Pelanggaran #${state.violations}: ${reason}`, 'danger', 5000);

  if (state.violations >= 5) {
    showSeriousWarning();
  }
}

function updateViolationBadge() {
  const badge = document.getElementById('violation-count');
  if (badge) badge.textContent = state.violations;
  const badgeEl = document.getElementById('violation-badge');
  if (badgeEl) {
    badgeEl.style.display = state.violations > 0 ? 'flex' : 'none';
    if (state.violations >= 3) {
      badgeEl.style.borderColor = 'rgba(239,68,68,0.6)';
      badgeEl.style.animation = 'pulse 1.5s infinite';
    }
  }
}

function showSeriousWarning() {
  const overlay = document.getElementById('anticheat-overlay');
  if (!overlay) return;
  document.getElementById('violation-num').textContent = state.violations;
  overlay.style.display = 'flex';
  setTimeout(() => { overlay.style.display = 'none'; }, 4000);
}

window.dismissWarning = function() {
  const overlay = document.getElementById('anticheat-overlay');
  if (overlay) overlay.style.display = 'none';
};

// ===== Timers =====
function startTimers() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(tickTimer, 1000);
}

function tickTimer() {
  state.globalTimer = Math.max(0, state.globalTimer - 1);
  state.subtestTimers[state.currentSubtest] = Math.max(0, state.subtestTimers[state.currentSubtest] - 1);

  updateTimerDisplay();
  saveState();

  if (state.subtestTimers[state.currentSubtest] <= 0) {
    handleSubtestTimeUp();
  } else if (state.globalTimer <= 0) {
    finishExam();
  }
}

function updateTimerDisplay() {
  const sub = state.subtestTimers[state.currentSubtest];
  const global = state.globalTimer;

  const subEl = document.getElementById('subtest-timer');
  const globalEl = document.getElementById('global-timer');

  if (subEl) {
    subEl.textContent = formatTime(sub);
    subEl.className = 'timer-value' + (sub < 60 ? ' danger' : sub < 300 ? ' warning' : '');
  }
  if (globalEl) {
    globalEl.textContent = formatTime(global);
    globalEl.className = 'timer-value' + (global < 300 ? ' warning' : '');
  }
}

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function handleSubtestTimeUp() {
  showToast(`Waktu ${SUBTEST_INFO[state.currentSubtest].name} habis!`, 'warning', 3000);
  window.advanceToNextSubtest();
}

window.advanceToNextSubtest = function() {
  const idx = state.subtestOrder.indexOf(state.currentSubtest);
  if (!state.completedSubtests.includes(state.currentSubtest)) {
    state.completedSubtests.push(state.currentSubtest);
  }

  if (idx < state.subtestOrder.length - 1) {
    showSubtestTransition(state.subtestOrder[idx + 1]);
  } else {
    finishExam();
  }
};

function showSubtestTransition(nextSub) {
  const main = document.getElementById('exam-main');
  if (!main) return;
  const info = SUBTEST_INFO[nextSub];
  const colorMap = {PU:'🧠',PPU:'📚',PBM:'📖',PK:'🔢',LBI:'🇮🇩',LBE:'🇬🇧',PM:'📐'};
  const icon = colorMap[nextSub] || '📝';

  // Pause subtest timer while transition shows
  const prevSub = state.currentSubtest;

  main.innerHTML = `
    <div class="subtest-transition">
      <div class="subtest-transition-icon" style="background:${info.color}20;border:2px solid ${info.color}40;">${icon}</div>
      <div class="badge badge-primary">Subtes Berikutnya</div>
      <h2>${info.name}</h2>
      <p>${info.questions} soal • ${info.time} menit</p>
      <div class="subtest-countdown" id="transition-countdown">5</div>
      <button class="btn btn-primary btn-lg" onclick="startNextSubtest('${nextSub}')">
        Mulai Sekarang →
      </button>
    </div>
  `;

  let count = 5;
  const timerEl = document.getElementById('transition-countdown');
  const countInterval = setInterval(() => {
    count--;
    if (timerEl) timerEl.textContent = count;
    if (count <= 0) {
      clearInterval(countInterval);
      startNextSubtest(nextSub);
    }
  }, 1000);
}

window.startNextSubtest = function(sub) {
  state.currentSubtest = sub;
  state.currentQuestion = 0;
  updateSubtestBadge();
  buildSubtestNav();
  renderQuestion();
};

function updateSubtestBadge() {
  const badge = document.getElementById('current-subtest-badge');
  if (badge) badge.textContent = SUBTEST_INFO[state.currentSubtest].code + ' — ' + SUBTEST_INFO[state.currentSubtest].name;
}

// ===== Navigation =====
window.jumpToSubtest = function(sub) {
  // Can jump to any subtest (including already completed ones for review)
  state.currentSubtest = sub;
  state.currentQuestion = 0;
  updateSubtestBadge();
  buildSubtestNav();
  renderQuestion();
};

window.goToQuestion = function(index) {
  state.currentQuestion = index;
  renderQuestion();
  buildQuestionGrid();
};

window.prevQuestion = function() {
  if (state.currentQuestion > 0) {
    state.currentQuestion--;
    renderQuestion();
    buildQuestionGrid();
  }
};

window.nextQuestion = function() {
  const qs = state.questions[state.currentSubtest];
  if (state.currentQuestion < qs.length - 1) {
    state.currentQuestion++;
    renderQuestion();
    buildQuestionGrid();
  }
};

// ===== Answer Selection =====
window.selectAnswer = function(answer) {
  state.answers[state.currentSubtest][state.currentQuestion] = answer;
  renderQuestion();
  buildQuestionGrid();
  buildSubtestNav();
  updateFooterProgress();
  saveState();
  // Auto-advance after short delay
  const qs = state.questions[state.currentSubtest];
  if (state.currentQuestion < qs.length - 1) {
    setTimeout(() => {
      state.currentQuestion++;
      renderQuestion();
      buildQuestionGrid();
    }, 350);
  }
};

window.clearAnswer = function() {
  state.answers[state.currentSubtest][state.currentQuestion] = null;
  renderQuestion();
  buildQuestionGrid();
  buildSubtestNav();
  updateFooterProgress();
  saveState();
};

window.toggleFlag = function() {
  const sub = state.currentSubtest;
  const idx = state.currentQuestion;
  state.flags[sub][idx] = !state.flags[sub][idx];
  renderQuestion();
  buildQuestionGrid();
  saveState();
};

// ===== Render Question =====
function renderQuestion() {
  const main = document.getElementById('exam-main');
  if (!main) return;

  const sub = state.currentSubtest;
  const idx = state.currentQuestion;
  const qs = state.questions[sub];

  if (!qs || qs.length === 0) return;

  const q = qs[idx];
  const answer = state.answers[sub][idx];
  const isFlagged = state.flags[sub][idx];
  const optionLetters = ['A','B','C','D','E'];

  updateSubtestBadge();
  updateFooterProgress();

  const passageHtml = q.passage ? `
    <div class="passage-block">
      <div class="passage-label">📄 Teks Bacaan</div>
      ${escapeHtml(q.passage).replace(/\n/g, '<br>')}
    </div>
  ` : '';

  const optionsHtml = q.options.map((opt, i) => {
    const letter = optionLetters[i];
    const isSelected = answer === letter;
    return `
      <button class="option-btn ${isSelected ? 'selected' : ''}" onclick="selectAnswer('${letter}')">
        <span class="option-label">${letter}</span>
        <span class="option-text">${escapeHtml(opt.replace(/^[A-E]\.\s*/,''))}</span>
      </button>
    `;
  }).join('');

  main.innerHTML = `
    <div class="question-container" id="question-container">
      ${passageHtml}
      <div class="question-header">
        <span class="question-number-badge">Soal ${idx + 1} / ${qs.length}</span>
        <div class="question-text">${escapeHtml(q.question)}</div>
      </div>
      <div class="options-list">
        ${optionsHtml}
      </div>
      <div class="question-actions">
        <button class="flag-btn ${isFlagged ? 'active' : ''}" onclick="toggleFlag()">
          ${isFlagged ? '🚩 Ragu-ragu (Aktif)' : '🏳️ Tandai Ragu-ragu'}
        </button>
        ${answer ? `<button class="clear-btn" onclick="clearAnswer()">✕ Hapus Jawaban</button>` : ''}
      </div>
    </div>
  `;

  buildQuestionGrid();
}

// ===== Question Grid (Sidebar) =====
function buildQuestionGrid() {
  const grid = document.getElementById('question-grid');
  if (!grid) return;
  const sub = state.currentSubtest;
  const qs = state.questions[sub] || [];
  grid.innerHTML = qs.map((_, i) => {
    const answered = state.answers[sub][i] !== null;
    const flagged = state.flags[sub][i];
    const active = i === state.currentQuestion;
    let cls = 'q-num-btn';
    if (active) cls += ' active';
    else if (flagged) cls += ' flagged';
    else if (answered) cls += ' answered';
    return `<button class="${cls}" onclick="goToQuestion(${i})">${i+1}</button>`;
  }).join('');
}

function getAnsweredCount(sub) {
  if (!state.answers[sub]) return 0;
  return state.answers[sub].filter(a => a !== null).length;
}

function updateFooterProgress() {
  const sub = state.currentSubtest;
  const total = (state.questions[sub] || []).length;
  const answered = getAnsweredCount(sub);
  const flagged = (state.flags[sub] || []).filter(Boolean).length;

  const el = document.getElementById('footer-progress');
  if (el) {
    el.innerHTML = `Dijawab: <strong>${answered}</strong>/${total} &nbsp;|&nbsp; Ragu-ragu: <strong>${flagged}</strong>`;
  }

  // Update sidebar overall progress
  const totalAll = state.subtestOrder.reduce((acc, s) => acc + (state.questions[s]?.length || 0), 0);
  const answeredAll = state.subtestOrder.reduce((acc, s) => acc + getAnsweredCount(s), 0);
  const pct = totalAll > 0 ? Math.round((answeredAll / totalAll) * 100) : 0;
  const progressBar = document.getElementById('sidebar-progress-bar');
  const progressText = document.getElementById('sidebar-progress-text');
  if (progressBar) progressBar.style.width = pct + '%';
  if (progressText) progressText.textContent = pct + '%';
}

// ===== Finish / Submit =====
window.showFinishModal = function() {
  const total = state.subtestOrder.reduce((acc, sub) => acc + (state.questions[sub]?.length||0), 0);
  let answered = 0, flagged = 0;
  for (const sub of state.subtestOrder) {
    answered += getAnsweredCount(sub);
    flagged += (state.flags[sub]||[]).filter(Boolean).length;
  }
  const unanswered = total - answered;

  document.getElementById('confirm-answered').textContent = answered;
  document.getElementById('confirm-flagged').textContent = flagged;
  document.getElementById('confirm-unanswered').textContent = unanswered;

  document.getElementById('finish-modal').classList.add('active');
};

window.closeFinishModal = function() {
  document.getElementById('finish-modal').classList.remove('active');
};

window.finishExam = function() {
  if (state.examFinished) return;
  state.examFinished = true;
  clearInterval(state.timerInterval);

  // Save final results
  saveResults();
  saveState();

  // Redirect to results
  window.location.href = 'result.html';
};

function saveResults() {
  const results = {
    registration: state.registration,
    answers: state.answers,
    questions: state.questions,
    flags: state.flags,
    violations: state.violations,
    duration: Math.floor((Date.now() - state.startTime) / 1000),
    completedAt: new Date().toISOString(),
    examFinished: true,
  };
  localStorage.setItem('snbt_results', JSON.stringify(results));
  localStorage.setItem('snbt_exam_state', JSON.stringify({ ...state, examFinished: true }));
}

function saveState() {
  const toSave = {
    questions: state.questions,
    answers: state.answers,
    flags: state.flags,
    currentSubtest: state.currentSubtest,
    currentQuestion: state.currentQuestion,
    subtestTimers: state.subtestTimers,
    globalTimer: state.globalTimer,
    violations: state.violations,
    completedSubtests: state.completedSubtests,
    startTime: state.startTime,
    examFinished: state.examFinished,
  };
  localStorage.setItem('snbt_exam_state', JSON.stringify(toSave));
}

// ===== Toast =====
function createToastContainer() {
  if (document.getElementById('toast-container')) return;
  const div = document.createElement('div');
  div.id = 'toast-container';
  document.body.appendChild(div);
}

function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const icons = { info:'ℹ️', success:'✅', warning:'⚠️', danger:'🚨' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type]||'ℹ️'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
