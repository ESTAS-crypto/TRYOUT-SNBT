/**
 * SNBT Tryout Pro — Result & Scoring Engine
 * Calculates scores, analysis, university prediction
 */

document.addEventListener('DOMContentLoaded', initResults);

let resultData = null;

function initResults() {
  // Load results
  try {
    resultData = JSON.parse(localStorage.getItem('snbt_results') || 'null');
  } catch { resultData = null; }

  if (!resultData || !resultData.examFinished) {
    window.location.href = 'index.html';
    return;
  }

  const scores = calculateScores(resultData);
  renderHeroScore(scores, resultData);
  renderSubtestScores(scores);
  renderAnalysis(scores);
  renderUniversityPredictions(scores, resultData.registration);
  renderReview(resultData);
  renderLeaderboard(scores, resultData.registration);
  saveToLeaderboard(scores, resultData.registration);

  // Initialize radar chart
  initRadarChart(scores);

  // Initialize tab switching
  initTabs();

  // Init review filters
  initReviewFilters();
}

// ===== Score Calculation =====
function calculateScores(data) {
  const scores = {};
  const subtestOrder = ['PU','PPU','PBM','PK','LBI','LBE','PM'];

  let totalCorrect = 0, totalQuestions = 0;

  for (const sub of subtestOrder) {
    const qs = data.questions[sub] || [];
    const answers = data.answers[sub] || [];
    let correct = 0, wrong = 0, unanswered = 0;

    qs.forEach((q, i) => {
      const given = answers[i];
      if (!given) { unanswered++; }
      else if (given === q.answer) { correct++; }
      else { wrong++; }
    });

    const total = qs.length;
    const pct = total > 0 ? (correct / total) * 100 : 0;
    // SNBT scale: 300 + (pct/100) * 400 → 300-700
    const snbtScale = 300 + (pct / 100) * 400;

    scores[sub] = {
      correct,
      wrong,
      unanswered,
      total,
      percentage: pct,
      snbtScore: parseFloat(snbtScale.toFixed(1)),
    };

    totalCorrect += correct;
    totalQuestions += total;
  }

  // Total score: average of all 7 subtest SNBT scores
  const avgScore = subtestOrder.reduce((acc, sub) => acc + scores[sub].snbtScore, 0) / subtestOrder.length;

  scores.total = {
    correct: totalCorrect,
    total: totalQuestions,
    wrong: totalQuestions - totalCorrect - subtestOrder.reduce((a, s) => a + scores[s].unanswered, 0),
    unanswered: subtestOrder.reduce((a, s) => a + scores[s].unanswered, 0),
    percentage: (totalCorrect / totalQuestions) * 100,
    snbtScore: parseFloat(avgScore.toFixed(1)),
  };

  return scores;
}

// ===== Hero Score =====
function renderHeroScore(scores, data) {
  const total = scores.total.snbtScore;
  const grade = getGrade(total);

  document.getElementById('participant-display-name').textContent = data.registration.name;
  document.getElementById('total-score-display').textContent = total.toFixed(0);
  document.getElementById('total-score-display').className = 'gradient-text ' + grade.class;

  const gradeEl = document.getElementById('score-grade');
  gradeEl.className = `score-grade ${grade.cssClass}`;
  gradeEl.innerHTML = `${grade.icon} ${grade.label}`;

  // Pills
  document.getElementById('pill-correct').textContent = scores.total.correct;
  document.getElementById('pill-wrong').textContent = scores.total.wrong;
  document.getElementById('pill-unanswered').textContent = scores.total.unanswered;
  document.getElementById('pill-violations').textContent = data.violations;

  const dur = data.duration || 0;
  const h = Math.floor(dur / 3600), m = Math.floor((dur % 3600) / 60), s = dur % 60;
  document.getElementById('pill-duration').textContent =
    h > 0 ? `${h}j ${m}m` : `${m}m ${s}d`;
}

function getGrade(score) {
  if (score >= 660) return { label: 'Luar Biasa!', icon: '🏆', class: 'gradient-text', cssClass: 'excellent' };
  if (score >= 600) return { label: 'Sangat Baik', icon: '⭐', class: 'gradient-text', cssClass: 'great' };
  if (score >= 530) return { label: 'Baik', icon: '✨', class: 'gradient-text-accent', cssClass: 'good' };
  if (score >= 450) return { label: 'Cukup', icon: '📈', class: '', cssClass: 'fair' };
  return { label: 'Perlu Ditingkatkan', icon: '💪', class: '', cssClass: 'poor' };
}

// ===== Subtest Score Cards =====
function renderSubtestScores(scores) {
  const container = document.getElementById('subtest-scores');
  if (!container) return;

  const subtestOrder = ['PU','PPU','PBM','PK','LBI','LBE','PM'];

  container.innerHTML = subtestOrder.map(sub => {
    const s = scores[sub];
    const info = SUBTEST_INFO[sub];
    const pct = s.percentage;
    const getBarColor = p => p >= 70 ? '#10b981' : p >= 50 ? '#f59e0b' : '#ef4444';

    return `
      <div class="subtest-score-card animate-on-scroll" style="--card-color:${info.color}">
        <style>.subtest-score-card:nth-child(${subtestOrder.indexOf(sub)+1})::before { background: ${info.color}; }</style>
        <div class="ssc-header">
          <div>
            <div class="ssc-label">${info.code}</div>
            <div class="ssc-name">${info.name}</div>
          </div>
          <div class="ssc-score-num" style="color:${getBarColor(pct)}">${s.snbtScore.toFixed(0)}</div>
        </div>
        <div class="progress ssc-progress">
          <div class="progress-bar" style="width:${pct}%;background:${getBarColor(pct)};"></div>
        </div>
        <div class="ssc-stats">
          <span>✅ ${s.correct} benar</span>
          <span>❌ ${s.wrong} salah</span>
          <span>⭕ ${s.unanswered} kosong</span>
        </div>
      </div>
    `;
  }).join('');
}

// ===== Radar Chart =====
function initRadarChart(scores) {
  const canvas = document.getElementById('radar-chart');
  if (!canvas || !window.Chart) return;

  const subtestOrder = ['PU','PPU','PBM','PK','LBI','LBE','PM'];
  const data = subtestOrder.map(sub => scores[sub].percentage);
  const labels = subtestOrder.map(sub => SUBTEST_INFO[sub].code);

  new Chart(canvas, {
    type: 'radar',
    data: {
      labels,
      datasets: [{
        label: 'Skor Kamu (%)',
        data,
        backgroundColor: 'rgba(99,102,241,0.15)',
        borderColor: '#6366f1',
        borderWidth: 2,
        pointBackgroundColor: '#818cf8',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          labels: { color: '#94a3b8', font: { family: 'Inter', size: 13 } }
        }
      },
      scales: {
        r: {
          min: 0, max: 100,
          ticks: { color: '#64748b', backdropColor: 'transparent', stepSize: 20, font: { size: 10 } },
          grid: { color: 'rgba(255,255,255,0.06)' },
          angleLines: { color: 'rgba(255,255,255,0.06)' },
          pointLabels: { color: '#94a3b8', font: { family: 'Inter', size: 12, weight: '600' } }
        }
      }
    }
  });
}

// ===== Strength & Weakness Analysis =====
function renderAnalysis(scores) {
  const subtestOrder = ['PU','PPU','PBM','PK','LBI','LBE','PM'];
  const sorted = subtestOrder.map(sub => ({
    sub,
    name: SUBTEST_INFO[sub].name,
    code: SUBTEST_INFO[sub].code,
    pct: scores[sub].percentage,
    score: scores[sub].snbtScore,
  })).sort((a, b) => b.pct - a.pct);

  const strengths = sorted.slice(0, 3);
  const weaknesses = [...sorted].reverse().slice(0, 3);

  const strengthEl = document.getElementById('strength-list');
  const weakEl = document.getElementById('weakness-list');

  if (strengthEl) {
    strengthEl.innerHTML = strengths.map(s => `
      <div class="analysis-item">
        <span class="analysis-item-name">📗 ${s.code} — ${s.name}</span>
        <span class="analysis-item-score" style="color:var(--success)">${s.pct.toFixed(0)}%</span>
      </div>
    `).join('');

    // Study tip
    const best = strengths[0];
    const strengthTip = document.getElementById('strength-tip');
    if (strengthTip) {
      const tips = {
        PU: 'Kemampuan penalaran logismu sangat baik! Terus asah dengan soal logika kompleks.',
        PPU: 'Pengetahuan umummu luar biasa! Baca berita dan jurnal ilmiah untuk mempertahankannya.',
        PBM: 'Kemampuan membaca dan menulismu sangat kuat! Terus berlatih memahami teks beragam.',
        PK: 'Kemampuan kuantitatifmu bagus! Tingkatkan dengan soal matematika UTBK lanjutan.',
        LBI: 'Literasi Bahasa Indonesiamu unggul! Jaga dengan membaca karya sastra dan artikel.',
        LBE: 'Bahasa Inggrismu menonjol! Pertahankan dengan membaca konten berbahasa Inggris.',
        PM: 'Penalaran matematis sangat kuat! Coba tantangan olimpiade matematika untuk berkembang.',
      };
      strengthTip.className = 'analysis-tip tip-strong';
      strengthTip.textContent = '💡 ' + (tips[best.sub] || 'Pertahankan performa terbaikmu!');
    }
  }

  if (weakEl) {
    weakEl.innerHTML = weaknesses.map(s => `
      <div class="analysis-item">
        <span class="analysis-item-name">📕 ${s.code} — ${s.name}</span>
        <span class="analysis-item-score" style="color:${s.pct < 40 ? 'var(--danger)' : 'var(--warning)'}">${s.pct.toFixed(0)}%</span>
      </div>
    `).join('');

    const worst = weaknesses[0];
    const weakTip = document.getElementById('weakness-tip');
    if (weakTip) {
      const tips = {
        PU: 'Latih kemampuan penalaran logis dengan soal deret, silogisme, dan analogi setiap hari.',
        PPU: 'Perbanyak membaca buku pengetahuan umum, sejarah Indonesia, dan sains dasar.',
        PBM: 'Baca artikel ilmiah minimal 2 teks per hari. Fokus pada pemahaman kalimat utama dan kata kunci.',
        PK: 'Kuasai operasi dasar: persentase, rasio, statistik, dan aljabar. Kerjakan 10 soal/hari.',
        LBI: 'Baca artikel berita Indonesia dan latih kemampuan memahami bacaan dengan kecepatan tinggi.',
        LBE: 'Tingkatkan kosakata bahasa Inggris dengan aplikasi seperti Quizlet. Baca artikel berbahasa Inggris.',
        PM: 'Kuasai aljabar, geometri, dan trigonometri. Kerjakan soal UTBK matematika dari buku latihan.',
      };
      weakTip.className = 'analysis-tip tip-weak';
      weakTip.textContent = '🎯 ' + (tips[worst.sub] || 'Tingkatkan dengan latihan rutin di subtes ini!');
    }
  }
}

// ===== University Prediction =====
function renderUniversityPredictions(scores, registration) {
  const container = document.getElementById('university-predictions');
  if (!container) return;

  const totalScore = scores.total.snbtScore;
  const cards = [];

  for (let i = 0; i < 4; i++) {
    const uni = registration.universities[i];
    const major = registration.majors[i];
    if (!uni || !major) continue;

    const pg = getPassingGrade(uni, major);
    const chance = predictChance(totalScore, pg.min);

    cards.push({
      rank: i + 1,
      uni, major, pg, chance, totalScore
    });
  }

  if (cards.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:32px;">Tidak ada pilihan universitas yang tersedia.</p>`;
    return;
  }

  container.innerHTML = cards.map(c => `
    <div class="university-card animate-on-scroll">
      <div class="university-card-header">
        <div class="uni-rank-badge">P${c.rank}</div>
        <div class="uni-info">
          <div class="uni-name">${escapeHtml(c.uni)}</div>
          <div class="uni-major">${escapeHtml(c.major)}</div>
        </div>
      </div>
      <div class="chance-indicator" style="border-color:${c.chance.color}30;background:${c.chance.color}10;">
        <div class="chance-icon">${c.chance.icon}</div>
        <div>
          <div class="chance-status" style="color:${c.chance.color}">${c.chance.status}</div>
          <div class="chance-desc">${c.chance.description}</div>
        </div>
      </div>
      <div class="score-comparison">
        <span>Skormu: <span class="your-score">${c.totalScore.toFixed(0)}</span></span>
        <span>Min. Masuk: <span class="req-score" style="color:${c.chance.color}">${c.pg.min}</span></span>
      </div>
      <div class="chance-bar">
        <div class="chance-bar-fill" style="width:${c.chance.percent}%;background:${c.chance.color}"></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:0.75rem;color:var(--text-muted);">
        <span>Tingkat Ketatnya: ${c.pg.tier}</span>
        <span>Peluang: ~${c.chance.percent}%</span>
      </div>
    </div>
  `).join('');
}

// ===== Review =====
let reviewFilter = 'all';
let reviewSubFilter = 'all';

function renderReview(data) {
  const container = document.getElementById('review-container');
  if (!container) return;

  const subtestOrder = ['PU','PPU','PBM','PK','LBI','LBE','PM'];
  let allItems = [];

  for (const sub of subtestOrder) {
    const qs = data.questions[sub] || [];
    const answers = data.answers[sub] || [];
    qs.forEach((q, i) => {
      const given = answers[i];
      const isCorrect = given === q.answer;
      allItems.push({
        sub, idx: i, q, given,
        isCorrect,
        isUnanswered: !given,
      });
    });
  }

  window._allReviewItems = allItems;
  applyReviewFilter();
}

function applyReviewFilter() {
  const container = document.getElementById('review-container');
  if (!container) return;
  const items = window._allReviewItems || [];

  const filtered = items.filter(item => {
    if (reviewFilter === 'correct' && !item.isCorrect) return false;
    if (reviewFilter === 'wrong' && (item.isCorrect || item.isUnanswered)) return false;
    if (reviewFilter === 'unanswered' && !item.isUnanswered) return false;
    if (reviewSubFilter !== 'all' && item.sub !== reviewSubFilter) return false;
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:32px;">Tidak ada soal yang sesuai filter.</p>`;
    return;
  }

  container.innerHTML = filtered.slice(0, 50).map((item, renderIdx) => {
    const status = item.isUnanswered ? 'unanswered' : item.isCorrect ? 'correct' : 'wrong';
    const statusIcon = item.isUnanswered ? '⭕' : item.isCorrect ? '✅' : '❌';

    return `
      <div class="review-item ${status}" id="review-${renderIdx}" onclick="toggleReviewItem(${renderIdx})">
        <div class="review-item-header">
          <div class="review-q-info">
            <span class="review-q-sub badge badge-primary">${item.sub}</span>
            <span class="review-q-num">Soal ${item.idx + 1}</span>
          </div>
          <div style="display:flex;align-items:center;gap:10px;">
            <span class="review-status-icon">${statusIcon}</span>
            <span class="review-chevron">▼</span>
          </div>
        </div>
        <div class="review-question-text">${escapeHtml(item.q.question)}</div>
        <div class="review-detail">
          ${item.q.passage ? `<div class="passage-block" style="max-height:150px;font-size:0.8rem;margin-bottom:12px;"><div class="passage-label">Teks Bacaan</div>${escapeHtml(item.q.passage).replace(/\n/g,'<br>')}</div>` : ''}
          <div class="review-answer-row">
            <div class="review-your-answer ${item.isCorrect ? 'correct-too' : ''}">
              ${item.isUnanswered ? '⭕ Tidak Dijawab' : `Jawabanmu: ${item.given}`}
            </div>
            <div class="review-correct-answer">✅ Kunci: ${item.q.answer}</div>
          </div>
          <div class="review-explanation">💡 ${escapeHtml(item.q.explanation || 'Lihat materi terkait untuk penjelasan lebih lanjut.')}</div>
        </div>
      </div>
    `;
  }).join('');

  if (filtered.length > 50) {
    container.innerHTML += `<p style="text-align:center;color:var(--text-muted);font-size:0.875rem;padding:16px;">Menampilkan 50 dari ${filtered.length} soal.</p>`;
  }
}

window.toggleReviewItem = function(idx) {
  const el = document.getElementById(`review-${idx}`);
  if (el) el.classList.toggle('expanded');
};

function initReviewFilters() {
  document.querySelectorAll('.review-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.filter;
      const subtype = btn.dataset.subfilter;

      if (type !== undefined) {
        reviewFilter = type;
        document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
      if (subtype !== undefined) {
        reviewSubFilter = subtype;
        document.querySelectorAll('[data-subfilter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
      applyReviewFilter();
    });
  });
}

// ===== Leaderboard =====
function saveToLeaderboard(scores, registration) {
  const lb = getLeaderboard();

  // Hitung tryout ke berapa untuk user ini
  const myName = (registration.name || '').toLowerCase().trim();
  const myPastTryouts = lb.filter(e => (e.name || '').toLowerCase().trim() === myName);
  const tryoutNum = myPastTryouts.length + 1;

  const entry = {
    name: registration.name,
    totalScore: scores.total.snbtScore,
    date: new Date().toISOString(),
    tryoutNum,              // Tryout ke-N untuk user ini
    subtestScores: Object.fromEntries(
      ['PU','PPU','PBM','PK','LBI','LBE','PM'].map(s => [s, scores[s].snbtScore])
    ),
  };
  lb.push(entry);
  // Keep all entries (max 100), sorted by score
  const sorted = lb.sort((a,b) => b.totalScore - a.totalScore).slice(0, 100);
  localStorage.setItem('snbt_leaderboard', JSON.stringify(sorted));
  return tryoutNum; // return untuk digunakan di hero
}

function getLeaderboard() {
  try { return JSON.parse(localStorage.getItem('snbt_leaderboard') || '[]'); }
  catch { return []; }
}

function renderLeaderboard(scores, registration) {
  const tbody = document.getElementById('result-leaderboard-body');
  if (!tbody) return;

  const raw = getLeaderboard();

  // Assign tryout number per nama secara kronologis
  const byName = {};
  const chronological = [...raw].sort((a,b) => new Date(a.date) - new Date(b.date));
  chronological.forEach(entry => {
    const key = (entry.name || '').toLowerCase().trim();
    if (!byName[key]) byName[key] = 0;
    byName[key]++;
    // Gunakan tryoutNum yang tersimpan, atau hitung dari urutan kronologis
    if (!entry.tryoutNum) entry.tryoutNum = byName[key];
  });

  const data = raw.sort((a,b) => b.totalScore - a.totalScore).slice(0, 10);
  const medals = ['🥇','🥈','🥉'];
  const myScore = scores.total.snbtScore;
  const myName = (registration.name || '').toLowerCase().trim();

  tbody.innerHTML = data.map((entry, i) => {
    const dt = new Date(entry.date);
    const dateStr = dt.toLocaleDateString('id-ID', {day:'numeric', month:'short', year:'numeric'});
    const timeStr = dt.toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'});
    const isMe = (entry.name || '').toLowerCase().trim() === myName && Math.abs(entry.totalScore - myScore) < 0.5;
    const tryoutNum = entry.tryoutNum || '?';
    return `
    <tr class="${isMe ? 'current-row' : ''}">
      <td>${medals[i] || `#${i+1}`}</td>
      <td>${escapeHtml(entry.name)} ${isMe ? '<span style="color:var(--primary-light);font-size:0.75rem;">(Kamu)</span>' : ''}</td>
      <td>
        <span style="background:rgba(99,102,241,0.15);color:var(--primary-light);padding:2px 8px;border-radius:20px;font-size:0.75rem;font-weight:700;">
          Tryout #${tryoutNum}
        </span>
      </td>
      <td style="font-weight:700;color:var(--primary-light);">${entry.totalScore.toFixed(1)}</td>
      <td style="color:var(--text-muted);font-size:0.8rem;">${dateStr}<br><span style="font-size:0.7rem;opacity:0.7;">${timeStr}</span></td>
    </tr>`;
  }).join('');
}

// ===== Tabs =====
function initTabs() {
  document.querySelectorAll('.result-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.result-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(tab.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });
}

// ===== Actions =====
window.retryExam = function() {
  localStorage.removeItem('snbt_exam_state');
  localStorage.removeItem('snbt_results');
  window.location.href = 'index.html';
};

window.printResult = function() {
  window.print();
};

// ===== Scroll Animations =====
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.animation = 'fadeInUp 0.5s ease forwards';
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }, 200);
});

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
