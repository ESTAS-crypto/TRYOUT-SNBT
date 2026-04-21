/**
 * SNBT Tryout Pro — Landing Page Logic
 * Handles: form, countdown, leaderboard, particle effects
 */

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initCountdown();
  initLeaderboard();
  initForm();
  initStatsCounter();
  initScrollAnimations();
  createToastContainer();
});

// ===== Particles =====
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = ['#6366f1','#8b5cf6','#06b6d4','#f59e0b','#10b981'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random()*100}%;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration:${Math.random()*15+10}s;
      animation-delay:${Math.random()*10}s;
      opacity:0;
    `;
    container.appendChild(p);
  }
}

// ===== Countdown Timer =====
function initCountdown() {
  const el = document.getElementById('countdown-display');
  if (!el) return;
  // Target: 25 Mei 2026 — Pengumuman Hasil SNBT
  const target = new Date('2026-05-25T15:00:00+07:00');
  function update() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
      document.querySelector('.countdown-label').textContent = '🎉 Pengumuman Hasil SNBT 2026 Sudah Tiba!';
      el.innerHTML = '<div style="font-size:1.5rem;color:var(--primary-light);font-weight:800;">Cek Hasil di Portal SNPMB!</div>';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-days').textContent = String(d).padStart(3,'0');
    document.getElementById('cd-hours').textContent = String(h).padStart(2,'0');
    document.getElementById('cd-mins').textContent = String(m).padStart(2,'0');
    document.getElementById('cd-secs').textContent = String(s).padStart(2,'0');
  }
  update();
  setInterval(update, 1000);
}

// ===== Stats Counter Animation =====
function initStatsCounter() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count);
      const duration = 1500;
      const start = Date.now();
      const timer = setInterval(() => {
        const progress = Math.min((Date.now() - start) / duration, 1);
        el.textContent = Math.floor(progress * target).toLocaleString('id-ID');
        if (progress === 1) {
          clearInterval(timer);
          el.textContent = target.toLocaleString('id-ID') + (el.dataset.suffix || '');
        }
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ===== Scroll Animations =====
function initScrollAnimations() {
  const els = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('animate-fade-up');
        e.target.style.opacity = '1';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// ===== Leaderboard =====
function initLeaderboard() {
  renderLeaderboard();
}

function getLeaderboard() {
  try {
    return JSON.parse(localStorage.getItem('snbt_leaderboard') || '[]');
  } catch { return []; }
}

function renderLeaderboard() {
  const tbody = document.getElementById('leaderboard-body');
  if (!tbody) return;

  // Sort by score descending, but keep tryout order for display
  const raw = getLeaderboard();
  // Assign tryout number berdasarkan urutan waktu per nama
  const byName = {};
  // Sort semua entries by date ascending untuk assign tryout number
  const chronological = [...raw].sort((a,b) => new Date(a.date) - new Date(b.date));
  chronological.forEach(entry => {
    const key = (entry.name || '').toLowerCase().trim();
    if (!byName[key]) byName[key] = 0;
    byName[key]++;
    entry._tryoutNum = byName[key];
  });

  const data = raw.sort((a, b) => b.totalScore - a.totalScore).slice(0, 10);

  if (data.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center;color:var(--text-muted);padding:32px;">
          Belum ada tryout yang diselesaikan. Jadilah yang pertama! 🚀
        </td>
      </tr>`;
    return;
  }

  const medals = ['🥇','🥈','🥉'];
  tbody.innerHTML = data.map((entry, i) => {
    const dt = new Date(entry.date);
    const dateStr = dt.toLocaleDateString('id-ID', {day:'numeric', month:'short', year:'numeric'});
    const timeStr = dt.toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'});
    const tryoutNum = entry._tryoutNum || '?';
    return `
    <tr>
      <td>${medals[i] || '#'+(i+1)}</td>
      <td style="font-weight:600;">${escapeHtml(entry.name)}</td>
      <td>
        <span style="background:rgba(99,102,241,0.15);color:var(--primary-light);padding:2px 8px;border-radius:20px;font-size:0.75rem;font-weight:700;">
          Tryout #${tryoutNum}
        </span>
      </td>
      <td style="color:var(--primary-light);font-weight:700;">${entry.totalScore.toFixed(1)}</td>
      <td style="color:var(--text-muted);font-size:0.8rem;">${dateStr}<br><span style="font-size:0.7rem;opacity:0.7;">${timeStr}</span></td>
    </tr>`;
  }).join('');
}

// ===== Registration Form =====
function initForm() {
  populateDropdowns();
  const form = document.getElementById('registration-form');
  if (!form) return;
  form.addEventListener('submit', handleFormSubmit);

  // Live validation
  document.getElementById('name-input')?.addEventListener('input', validateName);
}

function populateDropdowns() {
  const uniSelects = document.querySelectorAll('.uni-select');
  const majorSelects = document.querySelectorAll('.major-select');

  uniSelects.forEach(sel => {
    sel.innerHTML = '<option value="">-- Pilih Universitas --</option>' +
      UNIVERSITIES_LIST.map(u => `<option value="${escapeHtml(u)}">${escapeHtml(u)}</option>`).join('');
  });

  majorSelects.forEach(sel => {
    sel.innerHTML = '<option value="">-- Pilih Jurusan --</option>' +
      MAJORS_LIST.map(m => `<option value="${escapeHtml(m)}">${escapeHtml(m)}</option>`).join('');
  });
}

function validateName() {
  const input = document.getElementById('name-input');
  const hint = document.getElementById('name-hint');
  if (!input) return true;
  const val = input.value.trim();
  if (val.length < 3) {
    input.style.borderColor = 'var(--danger)';
    if (hint) hint.textContent = 'Nama minimal 3 karakter';
    return false;
  }
  input.style.borderColor = 'var(--success)';
  if (hint) hint.textContent = '';
  return true;
}

function handleFormSubmit(e) {
  e.preventDefault();
  if (!validateName()) {
    showToast('Nama harus diisi minimal 3 karakter', 'danger');
    return;
  }

  const name = document.getElementById('name-input').value.trim();
  const unis = [];
  const majors = [];

  for (let i = 1; i <= 4; i++) {
    const u = document.getElementById(`uni-${i}`)?.value || '';
    const m = document.getElementById(`major-${i}`)?.value || '';
    unis.push(u);
    majors.push(m);
  }

  // Validate at least 1 university + major pair
  const hasValid = unis.some((u, i) => u && majors[i]);
  if (!hasValid) {
    showToast('Pilih minimal 1 universitas dan jurusan', 'warning');
    return;
  }

  // Save registration data
  const registrationData = {
    name,
    universities: unis,
    majors: majors,
    registeredAt: new Date().toISOString(),
  };

  localStorage.setItem('snbt_registration', JSON.stringify(registrationData));
  localStorage.removeItem('snbt_exam_state'); // Clear any old exam state

  // Animate button
  const btn = e.submitter;
  btn.disabled = true;
  btn.innerHTML = `<span class="loading-spinner" style="width:18px;height:18px;border-width:2px;display:inline-block;border-color:rgba(255,255,255,0.2);border-top-color:#fff;border-radius:50%;animation:spin 0.8s linear infinite;"></span> Memulai...`;

  setTimeout(() => {
    window.location.href = 'exam.html';
  }, 800);
}

// ===== Modal Helpers =====
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('active');
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('active');
}

document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
  if (e.target.dataset.modal) {
    openModal(e.target.dataset.modal);
  }
  if (e.target.dataset.closeModal) {
    closeModal(e.target.dataset.closeModal);
  }
});

// ===== Toast =====
function createToastContainer() {
  if (document.getElementById('toast-container')) return;
  const div = document.createElement('div');
  div.id = 'toast-container';
  document.body.appendChild(div);
}

function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) { createToastContainer(); }
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

// ===== Utility =====
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Expose globally
window.openModal = openModal;
window.closeModal = closeModal;
window.showToast = showToast;
