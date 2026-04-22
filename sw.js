/**
 * TryoutSNBT Pro — Service Worker
 * - Cache semua aset agar offline-capable
 * - Blokir request eksternal saat ujian berlangsung
 */

const CACHE_NAME = 'snbt-pro-v12';
const EXAM_FLAG_KEY = 'snbt_exam_active';

// Semua file yang perlu di-cache
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './exam.html',
  './result.html',
  './css/style.css',
  './css/exam.css',
  './css/result.css',
  './js/questions.js',
  './js/questions_extra.js',
  './js/questions_extra2.js',
  './js/questions_extra3.js',
  './js/questions_extra4.js',
  './js/questions_extra5.js',
  './js/passgrade.js',
  './js/exam.js',
  './js/result.js',
  './js/app.js',
  // Chart.js dari CDN — kita cache juga
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js',
];

// ===== INSTALL: Cache semua aset =====
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        // Jika CDN gagal (sudah offline), lanjut saja
        console.warn('[SW] Beberapa aset gagal di-cache:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// ===== ACTIVATE: Hapus cache lama =====
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ===== State: apakah ujian sedang berlangsung? =====
let examActive = false;

// Terima pesan dari halaman
self.addEventListener('message', event => {
  if (event.data === 'EXAM_START') {
    examActive = true;
    console.log('[SW] Mode Ujian AKTIF — Semua request eksternal diblokir');
  } else if (event.data === 'EXAM_END') {
    examActive = false;
    console.log('[SW] Mode Ujian SELESAI — Request eksternal diizinkan kembali');
  }
});

// ===== FETCH: Intercept semua request =====
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Hanya intercept HTTP/HTTPS
  if (!url.protocol.startsWith('http')) return;

  // Tentukan apakah request ini ke domain sendiri (local)
  const isLocalRequest =
    url.origin === self.location.origin ||
    url.hostname === 'estas-crypto.github.io';

  // ---------- SAAT UJIAN BERLANGSUNG ----------
  if (examActive && !isLocalRequest) {
    // Blokir semua request ke domain eksternal
    event.respondWith(
      new Response(
        JSON.stringify({ error: 'Akses internet diblokir selama ujian berlangsung.' }),
        {
          status: 503,
          statusText: 'Blocked During Exam',
          headers: { 'Content-Type': 'application/json' }
        }
      )
    );
    return;
  }

  // ---------- STRATEGI CACHE: Cache First ----------
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      // Tidak ada di cache — fetch dari network
      return fetch(event.request).then(response => {
        // Cache response yang berhasil (hanya GET)
        if (event.request.method === 'GET' && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Network gagal (benar-benar offline)
        // Untuk halaman HTML, kembalikan halaman utama dari cache
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./index.html');
        }
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
