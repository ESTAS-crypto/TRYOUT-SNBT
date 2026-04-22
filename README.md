<div align="center">

# 🎓 TryoutSNBT Pro

### Simulasi SNBT Terlengkap & Terpercaya 2026

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-TryoutSNBT-6366f1?style=for-the-badge)](https://estas-crypto.github.io/TRYOUT-SNBT/)
[![GitHub Stars](https://img.shields.io/github/stars/ESTAS-crypto/TRYOUT-SNBT?style=for-the-badge&color=f59e0b)](https://github.com/ESTAS-crypto/TRYOUT-SNBT)
[![License](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)](LICENSE)

<br>

<img src="https://img.shields.io/badge/Soal-1020_Unik-6366f1?style=flat-square&logo=bookstack&logoColor=white" alt="1020 Soal">
<img src="https://img.shields.io/badge/Subtes-7_Lengkap-8b5cf6?style=flat-square&logo=layers&logoColor=white" alt="7 Subtes">
<img src="https://img.shields.io/badge/Durasi-4_Jam_30_Menit-06b6d4?style=flat-square&logo=clock&logoColor=white" alt="4.5 Jam">
<img src="https://img.shields.io/badge/Anti_Cheat-Aktif-ef4444?style=flat-square&logo=shield&logoColor=white" alt="Anti-Cheat">

---

*Platform simulasi ujian SNBT berbasis web yang dirancang untuk membantu calon mahasiswa mempersiapkan diri menghadapi Seleksi Nasional Berbasis Tes (SNBT) 2026 dengan pengalaman ujian serealistis mungkin.*

</div>

---

## ✨ Fitur Unggulan

| Fitur | Deskripsi |
|-------|-----------|
| 📝 **1.020 Bank Soal Unik** | Setiap tryout mengambil 170 soal acak dari 1.020 bank soal — **tidak ada dua orang yang mendapat soal sama!** |
| ⏱️ **Timer Realistis** | Durasi 4 jam 30 menit (270 menit) dengan timer per subtes otomatis |
| 🔒 **Anti-Cheat System** | Fullscreen otomatis, deteksi tab switch, blokir shortcut & copy-paste |
| 📊 **Analisis Mendalam** | Skor per subtes, grafik radar, persentil, dan pembahasan lengkap |
| 🏆 **Leaderboard** | Papan peringkat lokal untuk tracking progress antar tryout |
| 🎯 **Prediksi PTN** | Estimasi peluang masuk berdasarkan passing grade universitas |
| 📱 **Responsive** | Tampilan optimal di desktop, tablet, dan mobile |
| 🌐 **Offline Mode** | Service Worker memblokir jaringan selama ujian berlangsung |

## 📚 Struktur 7 Subtes SNBT

```
┌─────────────────────────────────────────────────┐
│                SNBT 2026 — 170 Soal             │
├──────┬───────────────────────────┬───────┬───────┤
│ Kode │ Nama Subtes               │ Soal  │ Waktu │
├──────┼───────────────────────────┼───────┼───────┤
│  PU  │ Penalaran Umum            │  30   │ 45'   │
│ PPU  │ Pengetahuan & Pemahaman   │  20   │ 25'   │
│ PBM  │ Pemahaman Bacaan & Menulis│  20   │ 35'   │
│  PK  │ Pengetahuan Kuantitatif   │  20   │ 30'   │
│ LBI  │ Literasi Bahasa Indonesia │  30   │ 45'   │
│ LBE  │ Literasi Bahasa Inggris   │  20   │ 30'   │
│  PM  │ Penalaran Matematika      │  30   │ 60'   │
├──────┴───────────────────────────┼───────┼───────┤
│              TOTAL               │  170  │ 270'  │
└──────────────────────────────────┴───────┴───────┘
```

## 🚀 Quick Start

### Opsi 1: Langsung Akses Online
👉 **[tryoutsnbt.pro](https://estas-crypto.github.io/TRYOUT-SNBT/)** — Buka di browser, isi nama, mulai tryout!

### Opsi 2: Jalankan Lokal

```bash
# Clone repository
git clone https://github.com/ESTAS-crypto/TRYOUT-SNBT.git

# Masuk ke folder
cd TRYOUT-SNBT

# Buka dengan Live Server (VS Code) atau langsung buka:
# index.html di browser
```

> ⚠️ **Catatan:** Service Worker hanya aktif di protokol `http://` atau `https://`. Untuk pengalaman penuh, gunakan Live Server.

## 🏗️ Struktur Project

```
TRYOUT-SNBT/
├── index.html              # Landing page & registrasi
├── exam.html               # Halaman ujian utama
├── result.html             # Halaman hasil & analisis
├── sw.js                   # Service Worker (anti-cheat network)
├── css/
│   ├── style.css           # Styling utama
│   ├── exam.css            # Styling halaman ujian
│   └── result.css          # Styling halaman hasil
├── js/
│   ├── app.js              # Logika landing page
│   ├── exam.js             # Engine ujian & anti-cheat
│   ├── result.js           # Analisis & visualisasi hasil
│   ├── questions.js        # Bank soal utama (170 soal)
│   ├── questions_extra.js  # Bank soal tambahan (170 soal)
│   └── passgrade.js        # Data passing grade PTN
└── README.md
```

## 🔒 Sistem Anti-Cheat

Platform ini dilengkapi sistem anti-kecurangan berlapis:

- 🖥️ **Fullscreen Otomatis** — Ujian dimulai dalam mode fullscreen
- 🚫 **Tab Switch Detection** — Tercatat sebagai pelanggaran jika berpindah tab
- ⌨️ **Keyboard Lock** — F12, Ctrl+U, Ctrl+Shift+I diblokir
- 📋 **Copy-Paste Block** — Tidak bisa copy/paste selama ujian
- 🌐 **Network Block** — Service Worker memblokir request eksternal

## 🛠️ Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)

</div>

- **Frontend:** Vanilla HTML, CSS, JavaScript — tanpa framework
- **Storage:** LocalStorage untuk state management & leaderboard
- **Offline:** Service Worker untuk mode ujian offline
- **Design:** Glassmorphism, dark theme, smooth animations

## 📈 Roadmap

- [x] 7 Subtes SNBT lengkap
- [x] Bank soal 1.020 unik
- [x] Anti-cheat system
- [x] Leaderboard & tracking progress
- [x] Analisis hasil mendalam
- [x] Timer realistis 4.5 jam
- [x] 1.020 soal unik 
- [ ] Mode latihan per subtes (coming soon)
- [ ] Export hasil ke PDF
- [ ] Dark/Light mode toggle

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch fitur (`git checkout -b fitur/soal-baru`)
3. Commit perubahan (`git commit -m 'Tambah soal PU'`)
4. Push ke branch (`git push origin fitur/soal-baru`)
5. Buat Pull Request

## 📄 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">

**Dibuat dengan ❤️ untuk calon mahasiswa Indonesia**

⭐ *Jika project ini membantu, berikan star di GitHub!* ⭐

</div>