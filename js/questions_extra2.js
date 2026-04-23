/**
 * SNBT Tryout Pro — Bank Soal Tambahan (Set 3)
 * 170 soal ekstra untuk variasi tryout
 * PU:30 | PPU:20 | PBM:20 | PK:20 | LBI:30 | LBE:20 | PM:30
 * Tidak ada duplikasi dengan questions.js & questions_extra.js
 */

const QUESTION_BANK_EXTRA2 = {

  // ============================================================
  // PU — PENALARAN UMUM (30 soal)
  // ============================================================
  PU: [
    // Deret Angka (10 soal)
    {
      id:'PU-E2-01',
      question:'Bilangan berikutnya dari deret: 1, 3, 7, 13, 21, 31, __',
      options:['A. 41','B. 43','C. 45','D. 47','E. 49'],
      answer:'B',
      explanation:'Selisih: +2,+4,+6,+8,+10,+12 → 31+12=43'
    },
    {
      id:'PU-E2-02',
      question:'Deret: 6, 12, 24, 48, 96, __',
      options:['A. 144','B. 168','C. 192','D. 200','E. 210'],
      answer:'C',
      explanation:'Pola ×2 setiap suku: 96×2=192'
    },
    {
      id:'PU-E2-03',
      question:'Deret: 81, 27, 9, 3, 1, __',
      options:['A. 1/2','B. 1/3','C. 1/4','D. 0','E. 2'],
      answer:'B',
      explanation:'Pola ÷3: 1÷3=1/3'
    },
    {
      id:'PU-E2-04',
      question:'Deret: 2, 5, 11, 23, 47, __',
      options:['A. 94','B. 95','C. 96','D. 97','E. 98'],
      answer:'B',
      explanation:'Pola ×2+1: 47×2+1=95'
    },
    {
      id:'PU-E2-05',
      question:'Deret: 1, 4, 10, 20, 35, 56, __',
      options:['A. 70','B. 78','C. 80','D. 84','E. 91'],
      answer:'D',
      explanation:'Selisih: +3,+6,+10,+15,+21,+28 (bilangan segitiga). 56+28=84'
    },
    {
      id:'PU-E2-06',
      question:'Deret: 0, 1, 1, 2, 3, 5, 8, 13, 21, __',
      options:['A. 32','B. 34','C. 33','D. 36','E. 30'],
      answer:'B',
      explanation:'Fibonacci: 13+21=34'
    },
    {
      id:'PU-E2-07',
      question:'Deret: 200, 100, 50, 25, __',
      options:['A. 10','B. 12','C. 12.5','D. 15','E. 20'],
      answer:'C',
      explanation:'Pola ÷2: 25÷2=12.5'
    },
    {
      id:'PU-E2-08',
      question:'Deret huruf: Z, X, V, T, R, __',
      options:['A. O','B. P','C. Q','D. N','E. M'],
      answer:'B',
      explanation:'Pola melompat 2 huruf ke belakang: R→P (R=18, P=16)'
    },
    {
      id:'PU-E2-09',
      question:'Deret: 3, 5, 9, 15, 23, 33, __',
      options:['A. 43','B. 44','C. 45','D. 46','E. 47'],
      answer:'C',
      explanation:'Selisih: +2,+4,+6,+8,+10,+12 → 33+12=45'
    },
    {
      id:'PU-E2-10',
      question:'Deret: 1000, 500, 250, 125, __',
      options:['A. 60','B. 62','C. 62.5','D. 65','E. 63'],
      answer:'C',
      explanation:'Pola ÷2: 125÷2=62.5'
    },

    // Analogi Kata (8 soal)
    {
      id:'PU-E2-11',
      question:'PADI : SAWAH = IKAN : ?',
      options:['A. Nelayan','B. Laut','C. Kolam','D. Jaring','E. Air'],
      answer:'C',
      explanation:'Padi dibudidayakan di Sawah; Ikan dibudidayakan di Kolam'
    },
    {
      id:'PU-E2-12',
      question:'DOKTER : STETOSKOP = TUKANG KAYU : ?',
      options:['A. Bangunan','B. Kayu','C. Gergaji','D. Paku','E. Meja'],
      answer:'C',
      explanation:'Dokter menggunakan Stetoskop; Tukang kayu menggunakan Gergaji'
    },
    {
      id:'PU-E2-13',
      question:'API : PANAS = AIR : ?',
      options:['A. Basah','B. Dingin','C. Cair','D. Mengalir','E. Jernih'],
      answer:'A',
      explanation:'Sifat utama Api adalah Panas; sifat utama Air adalah Basah'
    },
    {
      id:'PU-E2-14',
      question:'KOMPAS : ARAH = JAM : ?',
      options:['A. Detik','B. Waktu','C. Angka','D. Jarum','E. Baterai'],
      answer:'B',
      explanation:'Kompas menunjukkan Arah; Jam menunjukkan Waktu'
    },
    {
      id:'PU-E2-15',
      question:'HAKIM : PENGADILAN = GURU : ?',
      options:['A. Murid','B. Buku','C. Sekolah','D. Papan tulis','E. Ilmu'],
      answer:'C',
      explanation:'Hakim bekerja di Pengadilan; Guru bekerja di Sekolah'
    },
    {
      id:'PU-E2-16',
      question:'TELUR : AYAM = SUSU : ?',
      options:['A. Putih','B. Minum','C. Sapi','D. Keju','E. Pabrik'],
      answer:'C',
      explanation:'Telur dihasilkan Ayam; Susu dihasilkan Sapi'
    },
    {
      id:'PU-E2-17',
      question:'PANAS : TERMOMETER = GEMPA BUMI : ?',
      options:['A. Vulkanometer','B. Seismograf','C. Barometer','D. Anemometer','E. Higrometer'],
      answer:'B',
      explanation:'Termometer mengukur Panas; Seismograf mengukur Gempa bumi'
    },
    {
      id:'PU-E2-18',
      question:'MATA : MELIHAT = HIDUNG : ?',
      options:['A. Bernapas','B. Mencium','C. Merasa','D. Mendengar','E. Berbicara'],
      answer:'B',
      explanation:'Fungsi Mata adalah Melihat; fungsi Hidung adalah Mencium (aroma)'
    },

    // Logika & Penalaran (12 soal)
    {
      id:'PU-E2-19',
      question:'Semua mahasiswa rajin. Andi adalah mahasiswa. Kesimpulan?',
      options:['A. Andi tidak rajin','B. Andi rajin','C. Andi mungkin rajin','D. Belum tentu Andi rajin','E. Tidak dapat disimpulkan'],
      answer:'B',
      explanation:'Silogisme kategorial: Semua mahasiswa rajin + Andi mahasiswa → Andi rajin'
    },
    {
      id:'PU-E2-20',
      question:'Jika hujan maka jalanan basah. Jalanan tidak basah. Kesimpulan?',
      options:['A. Hujan turun','B. Tidak hujan','C. Mungkin hujan','D. Jalanan kering','E. Tidak dapat disimpulkan'],
      answer:'B',
      explanation:'Modus Tollens: P→Q, ¬Q → ¬P. Tidak basah → tidak hujan'
    },
    {
      id:'PU-E2-21',
      question:'Dina lebih tua dari Ema. Fani lebih muda dari Dina. Gita lebih tua dari Fani tapi lebih muda dari Ema. Urutan dari termuda ke tertua:',
      options:['A. Fani-Gita-Ema-Dina','B. Fani-Ema-Gita-Dina','C. Gita-Fani-Ema-Dina','D. Fani-Gita-Dina-Ema','E. Fani-Dina-Gita-Ema'],
      answer:'A',
      explanation:'Dina>Ema>Gita>Fani → termuda ke tertua: Fani-Gita-Ema-Dina'
    },
    {
      id:'PU-E2-22',
      question:'Tidak ada burung yang tidak bisa terbang. Penguin adalah burung. Berdasarkan pernyataan itu, kesimpulan yang tepat adalah:',
      options:['A. Penguin bisa terbang','B. Penguin tidak bisa terbang','C. Semua burung adalah penguin','D. Penguin mungkin bisa terbang','E. Tidak dapat disimpulkan'],
      answer:'A',
      explanation:'Pernyataan "tidak ada burung yang tidak bisa terbang" = semua burung bisa terbang. Penguin burung → Penguin bisa terbang (secara logika formal dari premis tersebut)'
    },
    {
      id:'PU-E2-23',
      question:'Hari ini Selasa. 65 hari yang akan datang adalah hari:',
      options:['A. Senin','B. Selasa','C. Rabu','D. Kamis','E. Jumat'],
      answer:'C',
      explanation:'65 mod 7 = 2 (sisa 2). Selasa + 2 hari ke depan = Rabu'
    },
    {
      id:'PU-E2-24',
      question:'Sebuah toko buku memiliki 5 rak. Setiap rak memuat 8 baris buku. Setiap baris berisi 12 buku. Total buku yang ada adalah:',
      options:['A. 400','B. 440','C. 460','D. 480','E. 500'],
      answer:'D',
      explanation:'5 × 8 × 12 = 480 buku'
    },
    {
      id:'PU-E2-25',
      question:'Sebuah kereta berangkat pukul 07.45 dan tiba pukul 13.15. Lama perjalanan adalah:',
      options:['A. 5 jam 20 menit','B. 5 jam 30 menit','C. 5 jam 40 menit','D. 6 jam','E. 6 jam 30 menit'],
      answer:'B',
      explanation:'Dari 07.45 ke 13.15 = 5 jam 30 menit'
    },
    {
      id:'PU-E2-26',
      question:'Jika rata-rata 5 nilai ujian adalah 78, dan empat nilai pertama adalah 72, 80, 75, 85, maka nilai kelima adalah:',
      options:['A. 74','B. 76','C. 78','D. 80','E. 82'],
      answer:'C',
      explanation:'Total = 5×78=390. Empat nilai = 72+80+75+85=312. Kelima = 390-312=78'
    },
    {
      id:'PU-E2-27',
      question:'Dalam sebuah ruangan terdapat 20 orang. Setiap orang berjabat tangan dengan semua orang lainnya tepat sekali. Total jabat tangan adalah:',
      options:['A. 170','B. 180','C. 190','D. 200','E. 210'],
      answer:'C',
      explanation:'C(20,2) = 20×19/2 = 190'
    },
    {
      id:'PU-E2-28',
      question:'Sebuah mobil menempuh jarak 240 km dalam 4 jam. Berapa km yang ditempuh dalam 7 jam dengan kecepatan sama?',
      options:['A. 390 km','B. 400 km','C. 410 km','D. 420 km','E. 430 km'],
      answer:'D',
      explanation:'Kecepatan = 240/4 = 60 km/jam. 60×7 = 420 km'
    },
    {
      id:'PU-E2-29',
      question:'Jika P > Q dan R < Q, maka pernyataan berikut yang pasti benar adalah:',
      options:['A. R > P','B. P > R','C. P = R','D. R = Q','E. P < R'],
      answer:'B',
      explanation:'P > Q > R, maka P > R'
    },
    {
      id:'PU-E2-30',
      question:'Tiga orang berlari di lintasan melingkar. A menyelesaikan satu putaran dalam 6 menit, B dalam 8 menit, dan C dalam 12 menit. Setelah berapa menit mereka bertemu di titik start bersamaan?',
      options:['A. 18 menit','B. 20 menit','C. 24 menit','D. 30 menit','E. 36 menit'],
      answer:'C',
      explanation:'KPK(6, 8, 12) = 24 menit'
    },
  ],

  // ============================================================
  // PPU — PENGETAHUAN & PEMAHAMAN UMUM (20 soal)
  // ============================================================
  PPU: [
    {
      id:'PPU-E2-01',
      question:'Siapakah presiden pertama Amerika Serikat?',
      options:['A. Abraham Lincoln','B. Thomas Jefferson','C. George Washington','D. John Adams','E. Benjamin Franklin'],
      answer:'C',
      explanation:'George Washington adalah presiden pertama AS, menjabat 1789–1797'
    },
    {
      id:'PPU-E2-02',
      question:'Planet yang dikenal sebagai "Planet Merah" adalah:',
      options:['A. Saturnus','B. Jupiter','C. Venus','D. Mars','E. Merkurius'],
      answer:'D',
      explanation:'Mars disebut Planet Merah karena permukaannya kaya oksida besi (karat)'
    },
    {
      id:'PPU-E2-03',
      question:'Dalam sistem periodik unsur, golongan gas mulia adalah golongan:',
      options:['A. IA','B. IIA','C. VIIA','D. 0 (VIII A)','E. VIIIB'],
      answer:'D',
      explanation:'Gas mulia berada di golongan 0 atau VIIIA (He, Ne, Ar, Kr, Xe, Rn)'
    },
    {
      id:'PPU-E2-04',
      question:'Isi Teks Proklamasi Kemerdekaan Indonesia dibacakan pada tanggal:',
      options:['A. 16 Agustus 1945','B. 17 Agustus 1945','C. 18 Agustus 1945','D. 19 Agustus 1945','E. 20 Agustus 1945'],
      answer:'B',
      explanation:'Proklamasi Kemerdekaan RI dibacakan Soekarno-Hatta pada 17 Agustus 1945'
    },
    {
      id:'PPU-E2-05',
      question:'Proses fotosintesis pada tumbuhan menghasilkan:',
      options:['A. CO₂ dan H₂O','B. O₂ dan glukosa','C. N₂ dan glukosa','D. CO₂ dan glukosa','E. O₂ dan CO₂'],
      answer:'B',
      explanation:'Fotosintesis: CO₂ + H₂O + cahaya → glukosa (C₆H₁₂O₆) + O₂'
    },
    {
      id:'PPU-E2-06',
      question:'Sungai terpanjang di dunia adalah:',
      options:['A. Amazon','B. Nil','C. Yangtze','D. Mississippi','E. Congo'],
      answer:'B',
      explanation:'Sungai Nil (Afrika) sepanjang ±6.650 km dianggap sebagai sungai terpanjang di dunia'
    },
    {
      id:'PPU-E2-07',
      question:'Hormon yang mengatur kadar gula darah dalam tubuh adalah:',
      options:['A. Adrenalin','B. Tiroksin','C. Insulin','D. Kortisol','E. Estrogen'],
      answer:'C',
      explanation:'Insulin diproduksi pankreas dan berfungsi mengatur kadar glukosa dalam darah'
    },
    {
      id:'PPU-E2-08',
      question:'Konferensi Asia-Afrika (KAA) pertama berlangsung di:',
      options:['A. Jakarta','B. Surabaya','C. Bandung','D. Yogyakarta','E. Medan'],
      answer:'C',
      explanation:'KAA pertama berlangsung di Bandung pada 18–24 April 1955'
    },
    {
      id:'PPU-E2-09',
      question:'Lapisan atmosfer yang melindungi bumi dari radiasi ultraviolet adalah:',
      options:['A. Troposfer','B. Stratosfer (lapisan ozon)','C. Mesosfer','D. Termosfer','E. Eksosfer'],
      answer:'B',
      explanation:'Lapisan ozon berada di stratosfer (15–35 km) dan menyerap radiasi UV berbahaya'
    },
    {
      id:'PPU-E2-10',
      question:'Tokoh yang menemukan teori relativitas adalah:',
      options:['A. Isaac Newton','B. Niels Bohr','C. Max Planck','D. Albert Einstein','E. Stephen Hawking'],
      answer:'D',
      explanation:'Albert Einstein merumuskan teori relativitas khusus (1905) dan umum (1915)'
    },
    {
      id:'PPU-E2-11',
      question:'Ibukota Provinsi Kalimantan Timur adalah:',
      options:['A. Banjarmasin','B. Samarinda','C. Balikpapan','D. Palangkaraya','E. Pontianak'],
      answer:'B',
      explanation:'Samarinda adalah ibukota Provinsi Kalimantan Timur'
    },
    {
      id:'PPU-E2-12',
      question:'Organ yang bertanggung jawab menyaring darah dan menghasilkan urine adalah:',
      options:['A. Hati','B. Paru-paru','C. Ginjal','D. Limpa','E. Pankreas'],
      answer:'C',
      explanation:'Ginjal berfungsi menyaring darah dan menghasilkan urine sebagai produk ekskresi'
    },
    {
      id:'PPU-E2-13',
      question:'Perang kemerdekaan Vietnam berakhir dengan jatuhnya kota:',
      options:['A. Hanoi','B. Hue','C. Da Nang','D. Saigon','E. Ho Chi Minh City pada 1975'],
      answer:'D',
      explanation:'Jatuhnya Saigon pada 30 April 1975 menandai berakhirnya Perang Vietnam'
    },
    {
      id:'PPU-E2-14',
      question:'Istilah "Bhinneka Tunggal Ika" berasal dari kitab:',
      options:['A. Negarakertagama','B. Sutasoma','C. Arjunawiwaha','D. Pararaton','E. Serat Centhini'],
      answer:'B',
      explanation:'"Bhinneka Tunggal Ika" berasal dari Kakawin Sutasoma karya Mpu Tantular'
    },
    {
      id:'PPU-E2-15',
      question:'Bahan kimia yang digunakan dalam proses pemutihan tekstil adalah:',
      options:['A. NaCl','B. NaOH','C. NaOCl (natrium hipoklorit)','D. HCl','E. H₂SO₄'],
      answer:'C',
      explanation:'NaOCl (natrium hipoklorit) merupakan zat aktif dalam pemutih pakaian'
    },
    {
      id:'PPU-E2-16',
      question:'Tulang yang melindungi otak manusia disebut:',
      options:['A. Tulang dada','B. Tengkorak','C. Tulang belakang','D. Tulang rusuk','E. Tulang selangka'],
      answer:'B',
      explanation:'Tengkorak (kranium) adalah rangka keras yang melindungi otak'
    },
    {
      id:'PPU-E2-17',
      question:'Badan Eksekutif tertinggi pemerintahan Indonesia dipegang oleh:',
      options:['A. MPR','B. DPR','C. Presiden','D. Mahkamah Agung','E. BPK'],
      answer:'C',
      explanation:'Presiden RI adalah kepala negara sekaligus kepala pemerintahan (eksekutif tertinggi)'
    },
    {
      id:'PPU-E2-18',
      question:'Teknologi yang digunakan dalam MRI (Magnetic Resonance Imaging) adalah:',
      options:['A. Sinar X','B. Gelombang radio dan medan magnet','C. Sinar gamma','D. Ultrasonik','E. Sinar inframerah'],
      answer:'B',
      explanation:'MRI menggunakan medan magnet kuat dan gelombang radio untuk menghasilkan gambar organ tubuh'
    },
    {
      id:'PPU-E2-19',
      question:'Lembah Sungai Nil yang subur terletak di benua:',
      options:['A. Asia','B. Eropa','C. Amerika','D. Afrika','E. Australia'],
      answer:'D',
      explanation:'Sungai Nil mengalir di Afrika Utara, membelah negara Sudan dan Mesir'
    },
    {
      id:'PPU-E2-20',
      question:'Proses pemisahan campuran berdasarkan perbedaan titik didih disebut:',
      options:['A. Filtrasi','B. Kristalisasi','C. Distilasi','D. Sentrifugasi','E. Sublimasi'],
      answer:'C',
      explanation:'Distilasi (penyulingan) memisahkan campuran cair berdasarkan perbedaan titik didih'
    },
  ],

  // ============================================================
  // PBM — PEMAHAMAN BACAAN & MENULIS (20 soal)
  // ============================================================
  PBM: [
    // Bacaan 1: Kecerdasan Buatan (5 soal)
    {
      id:'PBM-E2-01',
      passage:'Kecerdasan buatan (AI) kini merambah hampir seluruh sektor kehidupan manusia. Mulai dari diagnosis medis, rekomendasi konten media sosial, hingga kendaraan otonom, AI menawarkan efisiensi yang belum pernah ada sebelumnya. Namun, perkembangan ini juga memunculkan kekhawatiran soal penggantian tenaga kerja manusia dan isu privasi data.\n\nPara ahli berpendapat bahwa keberhasilan AI bergantung pada kualitas data yang digunakannya. Bias dalam data latih dapat menghasilkan sistem yang diskriminatif. Oleh karena itu, pengembangan AI yang bertanggung jawab (responsible AI) menjadi agenda penting di berbagai negara maju.',
      question:'Gagasan utama paragraf pertama bacaan di atas adalah:',
      options:['A. AI hanya digunakan dalam dunia medis','B. AI menawarkan efisiensi namun memunculkan kekhawatiran','C. Kendaraan otonom adalah perkembangan terbaru AI','D. Media sosial bergantung penuh pada AI','E. AI tidak memiliki dampak negatif'],
      answer:'B',
      explanation:'Paragraf pertama memaparkan manfaat AI (efisiensi) sekaligus risikonya (penggantian kerja & privasi)'
    },
    {
      id:'PBM-E2-02',
      passage:'Kecerdasan buatan (AI) kini merambah hampir seluruh sektor kehidupan manusia. Mulai dari diagnosis medis, rekomendasi konten media sosial, hingga kendaraan otonom, AI menawarkan efisiensi yang belum pernah ada sebelumnya. Namun, perkembangan ini juga memunculkan kekhawatiran soal penggantian tenaga kerja manusia dan isu privasi data.\n\nPara ahli berpendapat bahwa keberhasilan AI bergantung pada kualitas data yang digunakannya. Bias dalam data latih dapat menghasilkan sistem yang diskriminatif. Oleh karena itu, pengembangan AI yang bertanggung jawab (responsible AI) menjadi agenda penting di berbagai negara maju.',
      question:'Menurut bacaan, apa yang dapat menyebabkan AI bersifat diskriminatif?',
      options:['A. Kurangnya ahli AI','B. Harga pengembangan yang mahal','C. Bias dalam data latih','D. Minimnya regulasi hukum','E. Kecepatan prosesor yang lambat'],
      answer:'C',
      explanation:'Bacaan menyatakan: "Bias dalam data latih dapat menghasilkan sistem yang diskriminatif"'
    },
    {
      id:'PBM-E2-03',
      passage:'Kecerdasan buatan (AI) kini merambah hampir seluruh sektor kehidupan manusia. Mulai dari diagnosis medis, rekomendasi konten media sosial, hingga kendaraan otonom, AI menawarkan efisiensi yang belum pernah ada sebelumnya. Namun, perkembangan ini juga memunculkan kekhawatiran soal penggantian tenaga kerja manusia dan isu privasi data.\n\nPara ahli berpendapat bahwa keberhasilan AI bergantung pada kualitas data yang digunakannya. Bias dalam data latih dapat menghasilkan sistem yang diskriminatif. Oleh karena itu, pengembangan AI yang bertanggung jawab (responsible AI) menjadi agenda penting di berbagai negara maju.',
      question:'Kata "merambah" pada bacaan di atas memiliki makna yang paling mendekati:',
      options:['A. Merusak','B. Menghancurkan','C. Menyebar masuk ke','D. Menghindari','E. Melompati'],
      answer:'C',
      explanation:'"Merambah" berarti menjangkau, menyebar, atau masuk ke wilayah/bidang tertentu'
    },
    {
      id:'PBM-E2-04',
      passage:'Kecerdasan buatan (AI) kini merambah hampir seluruh sektor kehidupan manusia. Mulai dari diagnosis medis, rekomendasi konten media sosial, hingga kendaraan otonom, AI menawarkan efisiensi yang belum pernah ada sebelumnya. Namun, perkembangan ini juga memunculkan kekhawatiran soal penggantian tenaga kerja manusia dan isu privasi data.\n\nPara ahli berpendapat bahwa keberhasilan AI bergantung pada kualitas data yang digunakannya. Bias dalam data latih dapat menghasilkan sistem yang diskriminatif. Oleh karena itu, pengembangan AI yang bertanggung jawab (responsible AI) menjadi agenda penting di berbagai negara maju.',
      question:'Pernyataan mana yang TIDAK sesuai dengan isi bacaan?',
      options:['A. AI digunakan dalam diagnosis medis','B. Responsible AI menjadi perhatian negara maju','C. AI tidak pernah menimbulkan masalah privasi','D. Kendaraan otonom adalah salah satu penerapan AI','E. Keberhasilan AI bergantung pada kualitas data'],
      answer:'C',
      explanation:'Bacaan justru menyebut "isu privasi data" sebagai salah satu kekhawatiran dari perkembangan AI'
    },
    {
      id:'PBM-E2-05',
      passage:'Kecerdasan buatan (AI) kini merambah hampir seluruh sektor kehidupan manusia. Mulai dari diagnosis medis, rekomendasi konten media sosial, hingga kendaraan otonom, AI menawarkan efisiensi yang belum pernah ada sebelumnya. Namun, perkembangan ini juga memunculkan kekhawatiran soal penggantian tenaga kerja manusia dan isu privasi data.\n\nPara ahli berpendapat bahwa keberhasilan AI bergantung pada kualitas data yang digunakannya. Bias dalam data latih dapat menghasilkan sistem yang diskriminatif. Oleh karena itu, pengembangan AI yang bertanggung jawab (responsible AI) menjadi agenda penting di berbagai negara maju.',
      question:'Kesimpulan yang paling tepat dari kedua paragraf bacaan adalah:',
      options:['A. AI harus segera dihentikan perkembangannya','B. AI bermanfaat namun pengembangannya harus dilakukan secara bertanggung jawab','C. AI hanya cocok untuk negara maju','D. Data latih tidak mempengaruhi kinerja AI','E. Privasi data bukan masalah utama AI'],
      answer:'B',
      explanation:'Bacaan menyimpulkan manfaat AI besar namun perlu responsible AI untuk menghindari dampak negatif'
    },

    // Bacaan 2: Perubahan Iklim (5 soal)
    {
      id:'PBM-E2-06',
      passage:'Perubahan iklim global telah menyebabkan kenaikan suhu rata-rata bumi sekitar 1,1°C dibandingkan era pra-industri. Dampaknya terasa nyata: mencairnya es di kutub, naiknya permukaan laut, dan meningkatnya frekuensi bencana alam seperti banjir dan kekeringan ekstrem. Para ilmuwan memperingatkan bahwa jika tidak ada tindakan segera, suhu bumi bisa naik 2–4°C pada akhir abad ini.\n\nIndonesia sebagai negara kepulauan sangat rentan terhadap dampak perubahan iklim. Beberapa pulau kecil diprediksi akan tenggelam dalam beberapa dekade mendatang akibat kenaikan permukaan laut. Pemerintah Indonesia telah berkomitmen mengurangi emisi karbon melalui program penghijauan dan transisi energi terbarukan.',
      question:'Berapa kenaikan suhu rata-rata bumi yang disebutkan dalam bacaan?',
      options:['A. 0,5°C','B. 1,0°C','C. 1,1°C','D. 2,0°C','E. 4,0°C'],
      answer:'C',
      explanation:'Bacaan menyebutkan "kenaikan suhu rata-rata bumi sekitar 1,1°C dibandingkan era pra-industri"'
    },
    {
      id:'PBM-E2-07',
      passage:'Perubahan iklim global telah menyebabkan kenaikan suhu rata-rata bumi sekitar 1,1°C dibandingkan era pra-industri. Dampaknya terasa nyata: mencairnya es di kutub, naiknya permukaan laut, dan meningkatnya frekuensi bencana alam seperti banjir dan kekeringan ekstrem. Para ilmuwan memperingatkan bahwa jika tidak ada tindakan segera, suhu bumi bisa naik 2–4°C pada akhir abad ini.\n\nIndonesia sebagai negara kepulauan sangat rentan terhadap dampak perubahan iklim. Beberapa pulau kecil diprediksi akan tenggelam dalam beberapa dekade mendatang akibat kenaikan permukaan laut. Pemerintah Indonesia telah berkomitmen mengurangi emisi karbon melalui program penghijauan dan transisi energi terbarukan.',
      question:'Mengapa Indonesia disebut sangat rentan terhadap perubahan iklim?',
      options:['A. Karena Indonesia adalah negara berkembang','B. Karena Indonesia adalah negara kepulauan','C. Karena Indonesia memiliki banyak hutan','D. Karena Indonesia dekat dengan kutub','E. Karena Indonesia sering gempa'],
      answer:'B',
      explanation:'Bacaan menyatakan "Indonesia sebagai negara kepulauan sangat rentan terhadap dampak perubahan iklim"'
    },
    {
      id:'PBM-E2-08',
      passage:'Perubahan iklim global telah menyebabkan kenaikan suhu rata-rata bumi sekitar 1,1°C dibandingkan era pra-industri. Dampaknya terasa nyata: mencairnya es di kutub, naiknya permukaan laut, dan meningkatnya frekuensi bencana alam seperti banjir dan kekeringan ekstrem. Para ilmuwan memperingatkan bahwa jika tidak ada tindakan segera, suhu bumi bisa naik 2–4°C pada akhir abad ini.\n\nIndonesia sebagai negara kepulauan sangat rentan terhadap dampak perubahan iklim. Beberapa pulau kecil diprediksi akan tenggelam dalam beberapa dekade mendatang akibat kenaikan permukaan laut. Pemerintah Indonesia telah berkomitmen mengurangi emisi karbon melalui program penghijauan dan transisi energi terbarukan.',
      question:'Apa upaya Indonesia dalam mengatasi perubahan iklim menurut bacaan?',
      options:['A. Membangun tembok laut','B. Merelokasi penduduk pulau kecil','C. Penghijauan dan transisi energi terbarukan','D. Membatasi impor bahan bakar fosil','E. Mengurangi jumlah kendaraan bermotor'],
      answer:'C',
      explanation:'Bacaan menyebut "program penghijauan dan transisi energi terbarukan" sebagai komitmen Indonesia'
    },
    {
      id:'PBM-E2-09',
      passage:'Perubahan iklim global telah menyebabkan kenaikan suhu rata-rata bumi sekitar 1,1°C dibandingkan era pra-industri. Dampaknya terasa nyata: mencairnya es di kutub, naiknya permukaan laut, dan meningkatnya frekuensi bencana alam seperti banjir dan kekeringan ekstrem. Para ilmuwan memperingatkan bahwa jika tidak ada tindakan segera, suhu bumi bisa naik 2–4°C pada akhir abad ini.\n\nIndonesia sebagai negara kepulauan sangat rentan terhadap dampak perubahan iklim. Beberapa pulau kecil diprediksi akan tenggelam dalam beberapa dekade mendatang akibat kenaikan permukaan laut. Pemerintah Indonesia telah berkomitmen mengurangi emisi karbon melalui program penghijauan dan transisi energi terbarukan.',
      question:'Kata "rentan" dalam bacaan tersebut bermakna:',
      options:['A. Kuat','B. Mudah terkena dampak / tidak kebal','C. Siap menghadapi','D. Tidak terpengaruh','E. Terpencil'],
      answer:'B',
      explanation:'"Rentan" berarti mudah terkena pengaruh atau tidak tahan terhadap sesuatu (mudah terdampak)'
    },
    {
      id:'PBM-E2-10',
      passage:'Perubahan iklim global telah menyebabkan kenaikan suhu rata-rata bumi sekitar 1,1°C dibandingkan era pra-industri. Dampaknya terasa nyata: mencairnya es di kutub, naiknya permukaan laut, dan meningkatnya frekuensi bencana alam seperti banjir dan kekeringan ekstrem. Para ilmuwan memperingatkan bahwa jika tidak ada tindakan segera, suhu bumi bisa naik 2–4°C pada akhir abad ini.\n\nIndonesia sebagai negara kepulauan sangat rentan terhadap dampak perubahan iklim. Beberapa pulau kecil diprediksi akan tenggelam dalam beberapa dekade mendatang akibat kenaikan permukaan laut. Pemerintah Indonesia telah berkomitmen mengurangi emisi karbon melalui program penghijauan dan transisi energi terbarukan.',
      question:'Prediksi para ilmuwan jika tidak ada tindakan segera terkait perubahan iklim adalah:',
      options:['A. Suhu turun 2°C','B. Kutub akan membeku kembali','C. Suhu naik 2–4°C pada akhir abad ini','D. Tidak ada perubahan signifikan','E. Laut akan surut'],
      answer:'C',
      explanation:'Bacaan: "suhu bumi bisa naik 2–4°C pada akhir abad ini" jika tidak ada tindakan'
    },

    // Kemampuan Menulis (10 soal)
    {
      id:'PBM-E2-11',
      question:'Pilih penulisan kata serapan yang BENAR:',
      options:['A. Aktifitas','B. Aktipitas','C. Aktivitas','D. Acktivitas','E. Aktibitas'],
      answer:'C',
      explanation:'Penulisan baku: "aktivitas" (dari kata activity/activitas), bukan "aktifitas"'
    },
    {
      id:'PBM-E2-12',
      question:'Kalimat manakah yang menggunakan tanda baca BENAR?',
      options:['A. Ia membeli; apel, jeruk, dan mangga.','B. Ia membeli apel, jeruk, dan mangga.','C. Ia membeli: apel jeruk dan mangga.','D. Ia membeli apel; jeruk; dan mangga.','E. Ia membeli apel: jeruk, dan mangga.'],
      answer:'B',
      explanation:'Tidak diperlukan tanda baca khusus sebelum rincian jika kalimat sudah lengkap tanpa titik dua'
    },
    {
      id:'PBM-E2-13',
      question:'Kalimat berikut yang merupakan kalimat efektif adalah:',
      options:['A. Para hadirin semuanya dimohon untuk berdiri.','B. Hadirin dimohon berdiri.','C. Para hadirin dimohon untuk berdiri semuanya.','D. Semua para hadirin berdiri.','E. Hadirin-hadirin dimohon berdiri.'],
      answer:'B',
      explanation:'"Hadirin dimohon berdiri" adalah kalimat efektif. "Para hadirin" adalah pleonasme (hadirin = para tamu)'
    },
    {
      id:'PBM-E2-14',
      question:'Penulisan judul karangan yang BENAR berdasarkan EYD adalah:',
      options:['A. Pengaruh Media Sosial Terhadap Remaja di Indonesia','B. pengaruh media sosial terhadap remaja di indonesia','C. Pengaruh Media Sosial terhadap Remaja di Indonesia','D. Pengaruh media sosial terhadap remaja di Indonesia','E. PENGARUH MEDIA SOSIAL TERHADAP REMAJA DI INDONESIA'],
      answer:'C',
      explanation:'Dalam judul, semua kata diawali huruf kapital KECUALI kata tugas (terhadap, di, ke, dari, yang, dll)'
    },
    {
      id:'PBM-E2-15',
      question:'Kata yang TIDAK baku dalam kalimat "Dia mengkonsumsi obat setiap hari" adalah:',
      options:['A. mengkonsumsi','B. obat','C. setiap','D. hari','E. dia'],
      answer:'A',
      explanation:'Bentuk baku: "mengonsumsi" (bukan "mengkonsumsi"). Awalan me- + konsum = meng + konsum → mengonsumsi'
    },
    {
      id:'PBM-E2-16',
      question:'Kalimat yang mengandung konjungsi pertentangan adalah:',
      options:['A. Dia datang karena diundang.','B. Dia datang dan membawa hadiah.','C. Dia datang meskipun sakit.','D. Dia datang setelah makan.','E. Dia datang lalu pergi.'],
      answer:'C',
      explanation:'"Meskipun" adalah konjungsi pertentangan/konsesi, menghubungkan dua hal yang bertentangan'
    },
    {
      id:'PBM-E2-17',
      question:'Paragraf yang kalimat utamanya berada di akhir paragraf disebut paragraf:',
      options:['A. Deduktif','B. Induktif','C. Campuran','D. Ineratif','E. Naratif'],
      answer:'B',
      explanation:'Paragraf induktif memiliki kalimat utama (kesimpulan) di bagian akhir paragraf'
    },
    {
      id:'PBM-E2-18',
      question:'Penulisan kata depan "di" yang BENAR terdapat dalam kalimat:',
      options:['A. Buku itu di letakkan di atas meja.','B. Buku itu diletakkan diatas meja.','C. Buku itu diletakkan di atas meja.','D. Buku itu di-letakkan di-atas meja.','E. Buku itu diletakkan Di atas meja.'],
      answer:'C',
      explanation:'"di" sebagai imbuhan (awalan) ditulis serangkai (diletakkan); "di" sebagai kata depan ditulis terpisah (di atas)'
    },
    {
      id:'PBM-E2-19',
      question:'Manakah sinonim kata "inovatif"?',
      options:['A. Tradisional','B. Kreatif dan baru','C. Kuno','D. Monoton','E. Statis'],
      answer:'B',
      explanation:'"Inovatif" berarti bersifat memperkenalkan sesuatu yang baru; kreatif'
    },
    {
      id:'PBM-E2-20',
      question:'Kalimat manakah yang menggunakan kata "sangat" dengan BENAR?',
      options:['A. Harganya sangat mahal sekali.','B. Dia sangat amat lelah.','C. Hasil ujiannya sangat memuaskan.','D. Cuacanya sangat panas banget.','E. Pekerjaannya sangat sekali bagus.'],
      answer:'C',
      explanation:'"Sangat memuaskan" benar. Pilihan lain mengandung pleonasme: "sangat…sekali", "sangat amat", "sangat…banget"'
    },
  ],

  // ============================================================
  // PK — PENGETAHUAN KUANTITATIF (20 soal)
  // ============================================================
  PK: [
    {
      id:'PK-E2-01',
      question:'Jika P = 3Q dan Q = 2R, maka P : R = ?',
      options:['A. 6 : 1','B. 5 : 1','C. 4 : 1','D. 3 : 2','E. 2 : 3'],
      answer:'A',
      explanation:'P = 3Q = 3(2R) = 6R → P : R = 6 : 1'
    },
    {
      id:'PK-E2-02',
      question:'Sebuah persegi memiliki diagonal 10√2 cm. Luas persegi tersebut adalah:',
      options:['A. 50 cm²','B. 75 cm²','C. 100 cm²','D. 125 cm²','E. 150 cm²'],
      answer:'C',
      explanation:'diagonal = s√2 → s = diagonal/√2 = 10√2/√2 = 10. Luas = 10² = 100 cm²'
    },
    {
      id:'PK-E2-03',
      question:'Harga sebuah barang naik 20% menjadi Rp 48.000. Harga semula adalah:',
      options:['A. Rp 36.000','B. Rp 38.000','C. Rp 40.000','D. Rp 42.000','E. Rp 44.000'],
      answer:'C',
      explanation:'Harga semula = 48.000 / 1,2 = 40.000'
    },
    {
      id:'PK-E2-04',
      question:'Dua bilangan prima yang jumlahnya 30 dan selisihnya 4 adalah:',
      options:['A. 11 dan 19','B. 13 dan 17','C. 7 dan 23','D. 3 dan 27','E. 5 dan 25'],
      answer:'B',
      explanation:'13 + 17 = 30 dan 17 − 13 = 4. Keduanya prima'
    },
    {
      id:'PK-E2-05',
      question:'Jika 30% dari x sama dengan 60, maka x adalah:',
      options:['A. 150','B. 180','C. 200','D. 220','E. 250'],
      answer:'C',
      explanation:'0,30x = 60 → x = 60/0,30 = 200'
    },
    {
      id:'PK-E2-06',
      question:'Sebuah tangki berisi 3/4 penuh. Setelah diambil 90 liter, tangki menjadi 1/2 penuh. Kapasitas tangki adalah:',
      options:['A. 300 liter','B. 320 liter','C. 360 liter','D. 380 liter','E. 400 liter'],
      answer:'C',
      explanation:'3/4 − 1/2 = 1/4 kapasitas = 90 liter → kapasitas = 360 liter'
    },
    {
      id:'PK-E2-07',
      question:'Umur ayah 4 kali umur anak. Lima tahun lagi, umur ayah 3 kali umur anak. Umur anak sekarang adalah:',
      options:['A. 8 tahun','B. 10 tahun','C. 12 tahun','D. 14 tahun','E. 15 tahun'],
      answer:'B',
      explanation:'A = 4a. Lalu: 4a+5 = 3(a+5) → 4a+5=3a+15 → a=10'
    },
    {
      id:'PK-E2-08',
      question:'Nilai dari √(144 + 25) + √(100) adalah:',
      options:['A. 20','B. 21','C. 22','D. 23','E. 24'],
      answer:'D',
      explanation:'√169 + √100 = 13 + 10 = 23'
    },
    {
      id:'PK-E2-09',
      question:'FPB dari 84 dan 126 adalah:',
      options:['A. 14','B. 21','C. 28','D. 42','E. 63'],
      answer:'D',
      explanation:'84 = 2²×3×7, 126 = 2×3²×7. FPB = 2×3×7 = 42'
    },
    {
      id:'PK-E2-10',
      question:'Sebuah pekerjaan dapat diselesaikan A dalam 10 hari dan B dalam 15 hari. Berapa hari jika dikerjakan bersama?',
      options:['A. 4 hari','B. 5 hari','C. 6 hari','D. 7 hari','E. 8 hari'],
      answer:'C',
      explanation:'1/A + 1/B = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6 → 6 hari'
    },
    {
      id:'PK-E2-11',
      question:'Jika P = {bilangan prima < 10} dan Q = {bilangan ganjil < 10}, maka P ∩ Q = ?',
      options:['A. {3, 5, 7}','B. {2, 3, 5, 7}','C. {1, 3, 5, 7, 9}','D. {1, 2, 3, 5, 7}','E. {3, 5}'],
      answer:'A',
      explanation:'P={2,3,5,7}, Q={1,3,5,7,9}. P∩Q = {3,5,7}'
    },
    {
      id:'PK-E2-12',
      question:'Sebuah bola dilempar ke atas dengan kecepatan awal. Tinggi maksimum dicapai setelah 3 detik dan ketinggian = 45 m. Rata-rata kenaikan per detik adalah:',
      options:['A. 12 m/s','B. 13 m/s','C. 15 m/s','D. 18 m/s','E. 20 m/s'],
      answer:'C',
      explanation:'Rata-rata = 45/3 = 15 m/s'
    },
    {
      id:'PK-E2-13',
      question:'Diketahui data: 5, 8, 12, 6, 9, 10, 7, 3. Mediannya adalah:',
      options:['A. 7','B. 7.5','C. 8','D. 8.5','E. 9'],
      answer:'B',
      explanation:'Urut: 3,5,6,7,8,9,10,12. Median = (7+8)/2 = 7.5'
    },
    {
      id:'PK-E2-14',
      question:'Sebuah kerucut memiliki jari-jari 7 cm dan tinggi 24 cm. Volume kerucut (π=22/7) adalah:',
      options:['A. 1.056 cm³','B. 1.078 cm³','C. 1.100 cm³','D. 1.232 cm³','E. 1.320 cm³'],
      answer:'D',
      explanation:'V = (1/3)πr²t = (1/3)(22/7)(49)(24) = (1/3)(22)(7)(24) = (1/3)(3696) = 1232 cm³'
    },
    {
      id:'PK-E2-15',
      question:'Suatu bilangan jika dikurangi 15 kemudian dikalikan 3 hasilnya 75. Bilangan tersebut adalah:',
      options:['A. 30','B. 35','C. 40','D. 45','E. 50'],
      answer:'C',
      explanation:'(x−15)×3 = 75 → x−15 = 25 → x = 40'
    },
    {
      id:'PK-E2-16',
      question:'Perbandingan sisi dua persegi panjang sebangun adalah 3:5. Jika luas persegi panjang pertama 270 cm², maka luas persegi panjang kedua adalah:',
      options:['A. 500 cm²','B. 600 cm²','C. 700 cm²','D. 750 cm²','E. 800 cm²'],
      answer:'D',
      explanation:'Perbandingan luas = 3²:5² = 9:25. Luas ke-2 = (25/9)×270 = 750 cm²'
    },
    {
      id:'PK-E2-17',
      question:'Nilai dari 2³ × 3² − 4² adalah:',
      options:['A. 52','B. 54','C. 56','D. 58','E. 60'],
      answer:'C',
      explanation:'2³=8, 3²=9, 4²=16. 8×9−16 = 72−16 = 56'
    },
    {
      id:'PK-E2-18',
      question:'Sebuah toko memberikan diskon 25% kemudian diskon tambahan 10%. Total diskon efektif adalah:',
      options:['A. 30%','B. 32%','C. 32.5%','D. 35%','E. 35.5%'],
      answer:'C',
      explanation:'Harga setelah 25% off = 75%. Lalu 10% off lagi = 75%×90% = 67.5%. Diskon = 32.5%'
    },
    {
      id:'PK-E2-19',
      question:'Nilai x yang memenuhi |2x − 4| = 6 adalah:',
      options:['A. x=5 atau x=−1','B. x=5 atau x=1','C. x=−5 atau x=1','D. x=4 atau x=−2','E. x=−4 atau x=2'],
      answer:'A',
      explanation:'2x−4=6 → x=5; atau 2x−4=−6 → x=−1'
    },
    {
      id:'PK-E2-20',
      question:'Dari 8 siswa akan dipilih ketua dan wakil ketua. Banyaknya cara pemilihan adalah:',
      options:['A. 28','B. 42','C. 56','D. 64','E. 72'],
      answer:'C',
      explanation:'P(8,2) = 8×7 = 56 cara (urutan penting: ketua ≠ wakil)'
    },
  ],

  // ============================================================
  // LBI — LITERASI BAHASA INDONESIA (30 soal)
  // ============================================================
  LBI: [
    // Teks 1: Ekonomi Kreatif (6 soal)
    {
      id:'LBI-E2-01',
      passage:'Ekonomi kreatif menjadi salah satu sektor unggulan dalam rencana pembangunan nasional Indonesia. Sektor ini mencakup subsektor seperti kuliner, fashion, kerajinan, film, musik, seni pertunjukan, dan teknologi informasi. Berdasarkan data Badan Ekonomi Kreatif (Bekraf), kontribusi ekonomi kreatif terhadap PDB nasional terus meningkat setiap tahunnya, mencapai ratusan triliun rupiah.\n\nNamun, perkembangan ekonomi kreatif dihadapkan pada sejumlah tantangan. Di antaranya adalah keterbatasan akses modal bagi pelaku usaha kecil, minimnya perlindungan hak kekayaan intelektual, dan kurangnya inkubasi bisnis yang mendukung pelaku kreatif muda. Pemerintah perlu memperkuat ekosistem pendukung agar ekonomi kreatif dapat berkembang secara berkelanjutan.',
      question:'Topik utama yang dibahas dalam bacaan adalah:',
      options:['A. Masalah keuangan pemerintah Indonesia','B. Perkembangan dan tantangan ekonomi kreatif di Indonesia','C. Cara membuat produk kreatif yang laku','D. Perbandingan ekonomi Indonesia dan negara lain','E. Kebijakan impor dan ekspor Indonesia'],
      answer:'B',
      explanation:'Bacaan membahas dua hal utama: perkembangan ekonomi kreatif dan tantangan yang dihadapinya'
    },
    {
      id:'LBI-E2-02',
      passage:'Ekonomi kreatif menjadi salah satu sektor unggulan dalam rencana pembangunan nasional Indonesia. Sektor ini mencakup subsektor seperti kuliner, fashion, kerajinan, film, musik, seni pertunjukan, dan teknologi informasi. Berdasarkan data Badan Ekonomi Kreatif (Bekraf), kontribusi ekonomi kreatif terhadap PDB nasional terus meningkat setiap tahunnya, mencapai ratusan triliun rupiah.\n\nNamun, perkembangan ekonomi kreatif dihadapkan pada sejumlah tantangan. Di antaranya adalah keterbatasan akses modal bagi pelaku usaha kecil, minimnya perlindungan hak kekayaan intelektual, dan kurangnya inkubasi bisnis yang mendukung pelaku kreatif muda. Pemerintah perlu memperkuat ekosistem pendukung agar ekonomi kreatif dapat berkembang secara berkelanjutan.',
      question:'Menurut bacaan, tantangan ekonomi kreatif di Indonesia TIDAK mencakup:',
      options:['A. Keterbatasan akses modal','B. Minimnya perlindungan HKI','C. Kurangnya inkubasi bisnis','D. Persaingan produk impor','E. Jawaban D tidak disebutkan dalam bacaan'],
      answer:'D',
      explanation:'"Persaingan produk impor" tidak disebutkan sebagai tantangan dalam bacaan tersebut'
    },
    {
      id:'LBI-E2-03',
      passage:'Ekonomi kreatif menjadi salah satu sektor unggulan dalam rencana pembangunan nasional Indonesia. Sektor ini mencakup subsektor seperti kuliner, fashion, kerajinan, film, musik, seni pertunjukan, dan teknologi informasi. Berdasarkan data Badan Ekonomi Kreatif (Bekraf), kontribusi ekonomi kreatif terhadap PDB nasional terus meningkat setiap tahunnya, mencapai ratusan triliun rupiah.\n\nNamun, perkembangan ekonomi kreatif dihadapkan pada sejumlah tantangan. Di antaranya adalah keterbatasan akses modal bagi pelaku usaha kecil, minimnya perlindungan hak kekayaan intelektual, dan kurangnya inkubasi bisnis yang mendukung pelaku kreatif muda. Pemerintah perlu memperkuat ekosistem pendukung agar ekonomi kreatif dapat berkembang secara berkelanjutan.',
      question:'Kata "berkelanjutan" dalam paragraf kedua memiliki makna:',
      options:['A. Berhenti sesaat','B. Terus-menerus tanpa henti','C. Bergantung pada kondisi','D. Sewaktu-waktu','E. Sangat lambat'],
      answer:'B',
      explanation:'"Berkelanjutan" (sustainable) berarti berlangsung secara terus-menerus, tidak berhenti'
    },
    {
      id:'LBI-E2-04',
      passage:'Ekonomi kreatif menjadi salah satu sektor unggulan dalam rencana pembangunan nasional Indonesia. Sektor ini mencakup subsektor seperti kuliner, fashion, kerajinan, film, musik, seni pertunjukan, dan teknologi informasi. Berdasarkan data Badan Ekonomi Kreatif (Bekraf), kontribusi ekonomi kreatif terhadap PDB nasional terus meningkat setiap tahunnya, mencapai ratusan triliun rupiah.\n\nNamun, perkembangan ekonomi kreatif dihadapkan pada sejumlah tantangan. Di antaranya adalah keterbatasan akses modal bagi pelaku usaha kecil, minimnya perlindungan hak kekayaan intelektual, dan kurangnya inkubasi bisnis yang mendukung pelaku kreatif muda. Pemerintah perlu memperkuat ekosistem pendukung agar ekonomi kreatif dapat berkembang secara berkelanjutan.',
      question:'Kontribusi ekonomi kreatif terhadap PDB yang disebutkan bacaan menunjukkan tren:',
      options:['A. Menurun setiap tahun','B. Stagnan (tidak berubah)','C. Terus meningkat setiap tahun','D. Berfluktuasi (naik-turun)','E. Tidak disebutkan trennya'],
      answer:'C',
      explanation:'Bacaan menyatakan "kontribusi ekonomi kreatif terhadap PDB nasional terus meningkat setiap tahunnya"'
    },
    {
      id:'LBI-E2-05',
      passage:'Ekonomi kreatif menjadi salah satu sektor unggulan dalam rencana pembangunan nasional Indonesia. Sektor ini mencakup subsektor seperti kuliner, fashion, kerajinan, film, musik, seni pertunjukan, dan teknologi informasi. Berdasarkan data Badan Ekonomi Kreatif (Bekraf), kontribusi ekonomi kreatif terhadap PDB nasional terus meningkat setiap tahunnya, mencapai ratusan triliun rupiah.\n\nNamun, perkembangan ekonomi kreatif dihadapkan pada sejumlah tantangan. Di antaranya adalah keterbatasan akses modal bagi pelaku usaha kecil, minimnya perlindungan hak kekayaan intelektual, dan kurangnya inkubasi bisnis yang mendukung pelaku kreatif muda. Pemerintah perlu memperkuat ekosistem pendukung agar ekonomi kreatif dapat berkembang secara berkelanjutan.',
      question:'Badan yang disebutkan dalam bacaan sebagai sumber data ekonomi kreatif adalah:',
      options:['A. Kementerian Keuangan','B. Bappenas','C. BPS','D. Bekraf','E. Bank Indonesia'],
      answer:'D',
      explanation:'Bacaan menyebut "data Badan Ekonomi Kreatif (Bekraf)" sebagai sumber data'
    },
    {
      id:'LBI-E2-06',
      passage:'Ekonomi kreatif menjadi salah satu sektor unggulan dalam rencana pembangunan nasional Indonesia. Sektor ini mencakup subsektor seperti kuliner, fashion, kerajinan, film, musik, seni pertunjukan, dan teknologi informasi. Berdasarkan data Badan Ekonomi Kreatif (Bekraf), kontribusi ekonomi kreatif terhadap PDB nasional terus meningkat setiap tahunnya, mencapai ratusan triliun rupiah.\n\nNamun, perkembangan ekonomi kreatif dihadapkan pada sejumlah tantangan. Di antaranya adalah keterbatasan akses modal bagi pelaku usaha kecil, minimnya perlindungan hak kekayaan intelektual, dan kurangnya inkubasi bisnis yang mendukung pelaku kreatif muda. Pemerintah perlu memperkuat ekosistem pendukung agar ekonomi kreatif dapat berkembang secara berkelanjutan.',
      question:'Apa yang disarankan bacaan sebagai solusi untuk pengembangan ekonomi kreatif?',
      options:['A. Mengurangi pajak bagi semua pelaku usaha','B. Memperkuat ekosistem pendukung','C. Membuka investasi asing seluas-luasnya','D. Membatasi pelaku usaha besar','E. Menghapus perlindungan HKI'],
      answer:'B',
      explanation:'Bacaan menyarankan "Pemerintah perlu memperkuat ekosistem pendukung" agar ekonomi kreatif berkelanjutan'
    },

    // Teks 2: Kesehatan Mental Remaja (6 soal)
    {
      id:'LBI-E2-07',
      passage:'Kesehatan mental remaja menjadi isu yang semakin mendesak di era modern. Tekanan akademik, media sosial, serta konflik keluarga merupakan faktor utama yang memengaruhi kondisi psikologis usia muda. Data WHO menunjukkan bahwa satu dari tujuh remaja di seluruh dunia mengalami gangguan mental, namun sebagian besar tidak mendapatkan penanganan yang memadai.\n\nStigma sosial menjadi penghalang utama bagi remaja untuk mencari bantuan profesional. Banyak yang merasa malu atau takut dianggap "gila" jika mengaku mengalami gangguan mental. Oleh karena itu, literasi kesehatan mental perlu ditingkatkan di lingkungan sekolah dan keluarga agar remaja merasa aman untuk berbicara tentang kondisi mereka.',
      question:'Menurut data WHO dalam bacaan, berapa proporsi remaja yang mengalami gangguan mental?',
      options:['A. 1 dari 5','B. 1 dari 6','C. 1 dari 7','D. 1 dari 10','E. 1 dari 4'],
      answer:'C',
      explanation:'Bacaan menyebutkan "satu dari tujuh remaja di seluruh dunia mengalami gangguan mental"'
    },
    {
      id:'LBI-E2-08',
      passage:'Kesehatan mental remaja menjadi isu yang semakin mendesak di era modern. Tekanan akademik, media sosial, serta konflik keluarga merupakan faktor utama yang memengaruhi kondisi psikologis usia muda. Data WHO menunjukkan bahwa satu dari tujuh remaja di seluruh dunia mengalami gangguan mental, namun sebagian besar tidak mendapatkan penanganan yang memadai.\n\nStigma sosial menjadi penghalang utama bagi remaja untuk mencari bantuan profesional. Banyak yang merasa malu atau takut dianggap "gila" jika mengaku mengalami gangguan mental. Oleh karena itu, literasi kesehatan mental perlu ditingkatkan di lingkungan sekolah dan keluarga agar remaja merasa aman untuk berbicara tentang kondisi mereka.',
      question:'Apa hambatan utama remaja dalam mencari bantuan kesehatan mental menurut bacaan?',
      options:['A. Biaya yang mahal','B. Kurangnya fasilitas psikolog','C. Stigma sosial','D. Tidak ada waktu','E. Kurang pengetahuan tentang psikolog'],
      answer:'C',
      explanation:'Bacaan menyatakan "Stigma sosial menjadi penghalang utama bagi remaja untuk mencari bantuan profesional"'
    },
    {
      id:'LBI-E2-09',
      passage:'Kesehatan mental remaja menjadi isu yang semakin mendesak di era modern. Tekanan akademik, media sosial, serta konflik keluarga merupakan faktor utama yang memengaruhi kondisi psikologis usia muda. Data WHO menunjukkan bahwa satu dari tujuh remaja di seluruh dunia mengalami gangguan mental, namun sebagian besar tidak mendapatkan penanganan yang memadai.\n\nStigma sosial menjadi penghalang utama bagi remaja untuk mencari bantuan profesional. Banyak yang merasa malu atau takut dianggap "gila" jika mengaku mengalami gangguan mental. Oleh karena itu, literasi kesehatan mental perlu ditingkatkan di lingkungan sekolah dan keluarga agar remaja merasa aman untuk berbicara tentang kondisi mereka.',
      question:'Solusi yang ditawarkan bacaan untuk mengatasi masalah ini adalah:',
      options:['A. Menambah jumlah psikiater di sekolah','B. Melarang penggunaan media sosial','C. Meningkatkan literasi kesehatan mental di sekolah dan keluarga','D. Mengurangi beban akademik remaja','E. Memberikan subsidi biaya terapi'],
      answer:'C',
      explanation:'Bacaan menyarankan "literasi kesehatan mental perlu ditingkatkan di lingkungan sekolah dan keluarga"'
    },
    {
      id:'LBI-E2-10',
      passage:'Kesehatan mental remaja menjadi isu yang semakin mendesak di era modern. Tekanan akademik, media sosial, serta konflik keluarga merupakan faktor utama yang memengaruhi kondisi psikologis usia muda. Data WHO menunjukkan bahwa satu dari tujuh remaja di seluruh dunia mengalami gangguan mental, namun sebagian besar tidak mendapatkan penanganan yang memadai.\n\nStigma sosial menjadi penghalang utama bagi remaja untuk mencari bantuan profesional. Banyak yang merasa malu atau takut dianggap "gila" jika mengaku mengalami gangguan mental. Oleh karena itu, literasi kesehatan mental perlu ditingkatkan di lingkungan sekolah dan keluarga agar remaja merasa aman untuk berbicara tentang kondisi mereka.',
      question:'Makna kata "stigma" dalam konteks bacaan adalah:',
      options:['A. Dukungan masyarakat','B. Anggapan negatif/cap buruk dari masyarakat','C. Peraturan pemerintah','D. Rasa bersalah','E. Pengobatan tradisional'],
      answer:'B',
      explanation:'"Stigma sosial" = pandangan/cap negatif dari masyarakat yang membuat seseorang enggan mengakui kondisinya'
    },
    {
      id:'LBI-E2-11',
      passage:'Kesehatan mental remaja menjadi isu yang semakin mendesak di era modern. Tekanan akademik, media sosial, serta konflik keluarga merupakan faktor utama yang memengaruhi kondisi psikologis usia muda. Data WHO menunjukkan bahwa satu dari tujuh remaja di seluruh dunia mengalami gangguan mental, namun sebagian besar tidak mendapatkan penanganan yang memadai.\n\nStigma sosial menjadi penghalang utama bagi remaja untuk mencari bantuan profesional. Banyak yang merasa malu atau takut dianggap "gila" jika mengaku mengalami gangguan mental. Oleh karena itu, literasi kesehatan mental perlu ditingkatkan di lingkungan sekolah dan keluarga agar remaja merasa aman untuk berbicara tentang kondisi mereka.',
      question:'Faktor yang disebutkan sebagai penyebab masalah kesehatan mental remaja KECUALI:',
      options:['A. Tekanan akademik','B. Media sosial','C. Konflik keluarga','D. Pengaruh teman sebaya','E. Semua faktor A-C disebutkan'],
      answer:'D',
      explanation:'"Pengaruh teman sebaya" tidak disebutkan dalam bacaan. Yang disebutkan: tekanan akademik, media sosial, konflik keluarga'
    },
    {
      id:'LBI-E2-12',
      passage:'Kesehatan mental remaja menjadi isu yang semakin mendesak di era modern. Tekanan akademik, media sosial, serta konflik keluarga merupakan faktor utama yang memengaruhi kondisi psikologis usia muda. Data WHO menunjukkan bahwa satu dari tujuh remaja di seluruh dunia mengalami gangguan mental, namun sebagian besar tidak mendapatkan penanganan yang memadai.\n\nStigma sosial menjadi penghalang utama bagi remaja untuk mencari bantuan profesional. Banyak yang merasa malu atau takut dianggap "gila" jika mengaku mengalami gangguan mental. Oleh karena itu, literasi kesehatan mental perlu ditingkatkan di lingkungan sekolah dan keluarga agar remaja merasa aman untuk berbicara tentang kondisi mereka.',
      question:'Kata "mendesak" dalam kalimat pertama bacaan memiliki makna:',
      options:['A. Tidak penting','B. Membutuhkan perhatian segera / urgent','C. Sudah teratasi','D. Bersifat sementara','E. Diabaikan'],
      answer:'B',
      explanation:'"Mendesak" berarti memerlukan penanganan atau perhatian dengan segera (urgent/pressing)'
    },

    // Teks 3: Ketahanan Pangan (6 soal)
    {
      id:'LBI-E2-13',
      passage:'Ketahanan pangan merupakan kondisi di mana setiap individu memiliki akses fisik, sosial, dan ekonomi terhadap pangan yang cukup, aman, dan bergizi untuk memenuhi kebutuhan serta preferensi mereka. Indonesia, sebagai negara agraris dengan lahan pertanian yang luas, seharusnya mampu mencapai swasembada pangan. Namun, permasalahan seperti alih fungsi lahan, perubahan iklim, dan rendahnya produktivitas petani menjadi hambatan nyata.\n\nPemerintah terus berupaya meningkatkan ketahanan pangan melalui berbagai program, termasuk program cetak sawah baru, diversifikasi pangan, dan modernisasi pertanian berbasis teknologi. Pengembangan benih unggul dan penggunaan pupuk organik juga didorong untuk meningkatkan hasil panen tanpa merusak lingkungan.',
      question:'Definisi ketahanan pangan menurut bacaan menekankan aspek:',
      options:['A. Hanya ketersediaan fisik pangan','B. Akses fisik, sosial, dan ekonomi terhadap pangan cukup, aman, dan bergizi','C. Kemampuan ekspor produk pertanian','D. Harga pangan yang murah','E. Jumlah lahan pertanian yang luas'],
      answer:'B',
      explanation:'Bacaan mendefinisikan ketahanan pangan sebagai akses fisik, sosial, dan ekonomi terhadap pangan yang cukup, aman, bergizi'
    },
    {
      id:'LBI-E2-14',
      passage:'Ketahanan pangan merupakan kondisi di mana setiap individu memiliki akses fisik, sosial, dan ekonomi terhadap pangan yang cukup, aman, dan bergizi untuk memenuhi kebutuhan serta preferensi mereka. Indonesia, sebagai negara agraris dengan lahan pertanian yang luas, seharusnya mampu mencapai swasembada pangan. Namun, permasalahan seperti alih fungsi lahan, perubahan iklim, dan rendahnya produktivitas petani menjadi hambatan nyata.\n\nPemerintah terus berupaya meningkatkan ketahanan pangan melalui berbagai program, termasuk program cetak sawah baru, diversifikasi pangan, dan modernisasi pertanian berbasis teknologi. Pengembangan benih unggul dan penggunaan pupuk organik juga didorong untuk meningkatkan hasil panen tanpa merusak lingkungan.',
      question:'"Swasembada pangan" dalam bacaan berarti:',
      options:['A. Mengimpor pangan dari luar negeri','B. Memenuhi kebutuhan pangan secara mandiri','C. Mengekspor pangan ke luar negeri','D. Mengelola lahan pertanian modern','E. Memproduksi pangan organik'],
      answer:'B',
      explanation:'"Swasembada pangan" = kemampuan suatu negara memenuhi kebutuhan pangannya secara mandiri tanpa impor'
    },
    {
      id:'LBI-E2-15',
      passage:'Ketahanan pangan merupakan kondisi di mana setiap individu memiliki akses fisik, sosial, dan ekonomi terhadap pangan yang cukup, aman, dan bergizi untuk memenuhi kebutuhan serta preferensi mereka. Indonesia, sebagai negara agraris dengan lahan pertanian yang luas, seharusnya mampu mencapai swasembada pangan. Namun, permasalahan seperti alih fungsi lahan, perubahan iklim, dan rendahnya produktivitas petani menjadi hambatan nyata.\n\nPemerintah terus berupaya meningkatkan ketahanan pangan melalui berbagai program, termasuk program cetak sawah baru, diversifikasi pangan, dan modernisasi pertanian berbasis teknologi. Pengembangan benih unggul dan penggunaan pupuk organik juga didorong untuk meningkatkan hasil panen tanpa merusak lingkungan.',
      question:'Hambatan ketahanan pangan Indonesia menurut bacaan adalah:',
      options:['A. Kurangnya petani muda','B. Alih fungsi lahan, perubahan iklim, dan rendahnya produktivitas petani','C. Terlalu banyak impor pangan','D. Kurangnya teknologi komunikasi di desa','E. Minimnya anggaran pemerintah'],
      answer:'B',
      explanation:'Bacaan menyebut hambatan: alih fungsi lahan, perubahan iklim, dan rendahnya produktivitas petani'
    },
    {
      id:'LBI-E2-16',
      passage:'Ketahanan pangan merupakan kondisi di mana setiap individu memiliki akses fisik, sosial, dan ekonomi terhadap pangan yang cukup, aman, dan bergizi untuk memenuhi kebutuhan serta preferensi mereka. Indonesia, sebagai negara agraris dengan lahan pertanian yang luas, seharusnya mampu mencapai swasembada pangan. Namun, permasalahan seperti alih fungsi lahan, perubahan iklim, dan rendahnya produktivitas petani menjadi hambatan nyata.\n\nPemerintah terus berupaya meningkatkan ketahanan pangan melalui berbagai program, termasuk program cetak sawah baru, diversifikasi pangan, dan modernisasi pertanian berbasis teknologi. Pengembangan benih unggul dan penggunaan pupuk organik juga didorong untuk meningkatkan hasil panen tanpa merusak lingkungan.',
      question:'Apa tujuan penggunaan pupuk organik yang disebutkan bacaan?',
      options:['A. Mengurangi biaya petani','B. Meningkatkan harga jual pangan','C. Meningkatkan hasil panen tanpa merusak lingkungan','D. Mengganti peran teknologi pertanian','E. Mempercepat pertumbuhan tanaman'],
      answer:'C',
      explanation:'Bacaan: "untuk meningkatkan hasil panen tanpa merusak lingkungan"'
    },
    {
      id:'LBI-E2-17',
      passage:'Ketahanan pangan merupakan kondisi di mana setiap individu memiliki akses fisik, sosial, dan ekonomi terhadap pangan yang cukup, aman, dan bergizi untuk memenuhi kebutuhan serta preferensi mereka. Indonesia, sebagai negara agraris dengan lahan pertanian yang luas, seharusnya mampu mencapai swasembada pangan. Namun, permasalahan seperti alih fungsi lahan, perubahan iklim, dan rendahnya produktivitas petani menjadi hambatan nyata.\n\nPemerintah terus berupaya meningkatkan ketahanan pangan melalui berbagai program, termasuk program cetak sawah baru, diversifikasi pangan, dan modernisasi pertanian berbasis teknologi. Pengembangan benih unggul dan penggunaan pupuk organik juga didorong untuk meningkatkan hasil panen tanpa merusak lingkungan.',
      question:'Program pemerintah untuk meningkatkan ketahanan pangan yang TIDAK disebutkan bacaan adalah:',
      options:['A. Cetak sawah baru','B. Diversifikasi pangan','C. Modernisasi pertanian berbasis teknologi','D. Subsidi harga beras','E. Pengembangan benih unggul'],
      answer:'D',
      explanation:'"Subsidi harga beras" tidak disebutkan dalam bacaan. Yang disebutkan: cetak sawah baru, diversifikasi pangan, modernisasi, benih unggul, pupuk organik'
    },
    {
      id:'LBI-E2-18',
      passage:'Ketahanan pangan merupakan kondisi di mana setiap individu memiliki akses fisik, sosial, dan ekonomi terhadap pangan yang cukup, aman, dan bergizi untuk memenuhi kebutuhan serta preferensi mereka. Indonesia, sebagai negara agraris dengan lahan pertanian yang luas, seharusnya mampu mencapai swasembada pangan. Namun, permasalahan seperti alih fungsi lahan, perubahan iklim, dan rendahnya produktivitas petani menjadi hambatan nyata.\n\nPemerintah terus berupaya meningkatkan ketahanan pangan melalui berbagai program, termasuk program cetak sawah baru, diversifikasi pangan, dan modernisasi pertanian berbasis teknologi. Pengembangan benih unggul dan penggunaan pupuk organik juga didorong untuk meningkatkan hasil panen tanpa merusak lingkungan.',
      question:'Kata "agraris" dalam bacaan bermakna:',
      options:['A. Negara kepulauan','B. Negara yang mengandalkan sektor pertanian','C. Negara dengan penduduk padat','D. Negara dengan teknologi canggih','E. Negara dengan banyak hutan'],
      answer:'B',
      explanation:'"Agraris" berarti berkaitan dengan pertanian; negara agraris = negara yang mengandalkan sektor pertanian'
    },

    // Teks 4: Soal mandiri (6 soal)
    {
      id:'LBI-E2-19',
      question:'Kalimat yang mengandung majas personifikasi adalah:',
      options:['A. Wajahnya bersinar seperti matahari.','B. Angin berbisik di antara dedaunan.','C. Ia sekuat banteng dalam bekerja.','D. Suaranya merdu seperti burung.','E. Langkahnya secepat kilat.'],
      answer:'B',
      explanation:'"Angin berbisik" = personifikasi: memberikan sifat manusia (berbisik) kepada benda mati (angin)'
    },
    {
      id:'LBI-E2-20',
      question:'Pernyataan yang merupakan fakta adalah:',
      options:['A. Film itu sangat bagus dan mengharukan.','B. Presiden Soekarno lahir pada 6 Juni 1901.','C. Buku itu membosankan dan tidak menarik.','D. Dia adalah mahasiswa paling pintar.','E. Masakan ibu adalah yang paling enak.'],
      answer:'B',
      explanation:'Fakta = pernyataan yang dapat diverifikasi dan bersifat objektif. "Soekarno lahir 6 Juni 1901" adalah fakta sejarah'
    },
    {
      id:'LBI-E2-21',
      question:'Antonim kata "konservatif" adalah:',
      options:['A. Tradisional','B. Kuno','C. Progresif','D. Pasif','E. Statis'],
      answer:'C',
      explanation:'"Konservatif" = mempertahankan tradisi. Antonimnya "progresif" = mendukung perubahan/kemajuan'
    },
    {
      id:'LBI-E2-22',
      question:'Jenis paragraf yang bertujuan membujuk pembaca untuk melakukan sesuatu disebut paragraf:',
      options:['A. Narasi','B. Deskripsi','C. Eksposisi','D. Argumentasi','E. Persuasi'],
      answer:'E',
      explanation:'Paragraf persuasi bertujuan meyakinkan dan membujuk pembaca untuk berpendapat atau bertindak sesuai penulis'
    },
    {
      id:'LBI-E2-23',
      question:'Penulisan kata yang BENAR adalah:',
      options:['A. Sistim','B. Nasehat','C. Analisa','D. Analisis','E. Jadual'],
      answer:'D',
      explanation:'Kata baku: "analisis" (bukan analisa), "sistem" (bukan sistim), "nasihat" (bukan nasehat), "jadwal" (bukan jadual)'
    },
    {
      id:'LBI-E2-24',
      question:'Kalimat yang menggunakan imbuhan "me-" dengan benar adalah:',
      options:['A. Dia menterjemahkan dokumen itu.','B. Dia menerjemahkan dokumen itu.','C. Dia men-terjemahkan dokumen itu.','D. Dia me-terjemahkan dokumen itu.','E. Dia meterjemahkan dokumen itu.'],
      answer:'B',
      explanation:'"Menerjemahkan" = me- + terjemah + -kan. Awalan me- + kata berawalan t → men-: menerjemahkan (bukan menterjemahkan)'
    },
    {
      id:'LBI-E2-25',
      question:'Kalimat manakah yang menggunakan kata "daripada" dengan tepat?',
      options:['A. Baju daripada toko itu sudah terjual.','B. Lebih baik diam daripada berbohong.','C. Daripada itu, harganya mahal.','D. Ini adalah hadiah daripada ayahku.','E. Semua peserta daripada kelas A hadir.'],
      answer:'B',
      explanation:'"Daripada" digunakan untuk perbandingan: "lebih baik X daripada Y". Pilihan lain salah konteks'
    },
    {
      id:'LBI-E2-26',
      question:'Kalimat yang mengandung kesalahan diksi adalah:',
      options:['A. Buku itu sangat bermanfaat bagi saya.','B. Dia bekerja keras untuk menghidupi keluarganya.','C. Mereka membantu kepada masyarakat sekitar.','D. Cuaca hari ini sangat cerah.','E. Ia berhasil meraih penghargaan bergengsi.'],
      answer:'C',
      explanation:'"Membantu kepada" tidak tepat. "Membantu" tidak memerlukan kata depan "kepada". Seharusnya "membantu masyarakat sekitar"'
    },
    {
      id:'LBI-E2-27',
      question:'Kalimat pasif yang benar adalah:',
      options:['A. Buku itu dibaca oleh saya.','B. Saya membaca buku itu.','C. Buku itu membaca saya.','D. Saya dibaca buku itu.','E. Buku itu saya bacakan.'],
      answer:'A',
      explanation:'"Buku itu dibaca oleh saya" adalah kalimat pasif yang benar (subjek = buku, dikenai pekerjaan membaca)'
    },
    {
      id:'LBI-E2-28',
      question:'Penggunaan tanda titik dua (:) yang tepat adalah:',
      options:['A. Ibu membeli: apel dan jeruk.','B. Ia lulus: karena rajin belajar.','C. Barang yang dibeli meliputi: buku, pena, dan penggaris.','D. Dia berkata: akan pergi esok.','E. Semua peserta: telah hadir.'],
      answer:'C',
      explanation:'Tanda titik dua digunakan setelah kata yang memperkenalkan rincian/daftar. Pilihan C adalah yang paling tepat penggunaannya'
    },
    {
      id:'LBI-E2-29',
      question:'Kata "konkret" bersinonim dengan:',
      options:['A. Abstrak','B. Maya','C. Nyata','D. Imajiner','E. Virtual'],
      answer:'C',
      explanation:'"Konkret" = berwujud nyata, dapat diamati indera. Sinonimnya: nyata, riil, berwujud'
    },
    {
      id:'LBI-E2-30',
      question:'Penggunaan huruf kapital yang benar terdapat dalam kalimat:',
      options:['A. Dia pergi ke kota surabaya kemarin.','B. Kami berlibur ke Pulau Bali minggu lalu.','C. Saya belajar Bahasa indonesia di sekolah.','D. Adikku suka makan Nasi Goreng.','E. Ayahku adalah seorang Dokter.'],
      answer:'B',
      explanation:'"Pulau Bali" = nama tempat resmi yang diawali huruf kapital. Pilihan lain memiliki kesalahan kapital'
    },
  ],

  // ============================================================
  // LBE — LITERASI BAHASA INGGRIS (20 soal)
  // ============================================================
  LBE: [
    // Passage 1: Renewable Energy (5 soal)
    {
      id:'LBE-E2-01',
      passage:'Renewable energy sources—including solar, wind, hydroelectric, and geothermal—are rapidly displacing fossil fuels as the primary source of electricity generation worldwide. In 2023, renewable energy accounted for over 30% of global electricity production, a figure that continues to rise. The dramatic reduction in the cost of solar panels and wind turbines over the past decade has made renewables economically competitive, and in many regions, cheaper than coal or natural gas.\n\nDespite this progress, challenges remain. Energy storage technology must advance to address the intermittent nature of solar and wind power—the sun does not always shine, and wind does not always blow. Additionally, the transition requires massive investment in grid infrastructure and faces political resistance in regions economically dependent on fossil fuel industries.',
      question:'According to the passage, what percentage of global electricity came from renewables in 2023?',
      options:['A. Over 10%','B. Over 20%','C. Over 30%','D. Over 40%','E. Over 50%'],
      answer:'C',
      explanation:'The passage states "renewable energy accounted for over 30% of global electricity production" in 2023'
    },
    {
      id:'LBE-E2-02',
      passage:'Renewable energy sources—including solar, wind, hydroelectric, and geothermal—are rapidly displacing fossil fuels as the primary source of electricity generation worldwide. In 2023, renewable energy accounted for over 30% of global electricity production, a figure that continues to rise. The dramatic reduction in the cost of solar panels and wind turbines over the past decade has made renewables economically competitive, and in many regions, cheaper than coal or natural gas.\n\nDespite this progress, challenges remain. Energy storage technology must advance to address the intermittent nature of solar and wind power—the sun does not always shine, and wind does not always blow. Additionally, the transition requires massive investment in grid infrastructure and faces political resistance in regions economically dependent on fossil fuel industries.',
      question:'The word "intermittent" in the passage most closely means:',
      options:['A. Constant and reliable','B. Occasional and irregular','C. Extremely powerful','D. Environmentally clean','E. Technically advanced'],
      answer:'B',
      explanation:'"Intermittent" means not continuous; occurring at irregular intervals — the opposite of constant/steady'
    },
    {
      id:'LBE-E2-03',
      passage:'Renewable energy sources—including solar, wind, hydroelectric, and geothermal—are rapidly displacing fossil fuels as the primary source of electricity generation worldwide. In 2023, renewable energy accounted for over 30% of global electricity production, a figure that continues to rise. The dramatic reduction in the cost of solar panels and wind turbines over the past decade has made renewables economically competitive, and in many regions, cheaper than coal or natural gas.\n\nDespite this progress, challenges remain. Energy storage technology must advance to address the intermittent nature of solar and wind power—the sun does not always shine, and wind does not always blow. Additionally, the transition requires massive investment in grid infrastructure and faces political resistance in regions economically dependent on fossil fuel industries.',
      question:'Why does political resistance to renewables occur, according to the passage?',
      options:['A. Renewables are too expensive','B. Fossil fuels are more efficient','C. Some regions are economically dependent on fossil fuel industries','D. Governments prefer nuclear energy','E. Renewable technology is not reliable'],
      answer:'C',
      explanation:'The passage states resistance comes from "regions economically dependent on fossil fuel industries"'
    },
    {
      id:'LBE-E2-04',
      passage:'Renewable energy sources—including solar, wind, hydroelectric, and geothermal—are rapidly displacing fossil fuels as the primary source of electricity generation worldwide. In 2023, renewable energy accounted for over 30% of global electricity production, a figure that continues to rise. The dramatic reduction in the cost of solar panels and wind turbines over the past decade has made renewables economically competitive, and in many regions, cheaper than coal or natural gas.\n\nDespite this progress, challenges remain. Energy storage technology must advance to address the intermittent nature of solar and wind power—the sun does not always shine, and wind does not always blow. Additionally, the transition requires massive investment in grid infrastructure and faces political resistance in regions economically dependent on fossil fuel industries.',
      question:'What factor has primarily made renewables economically competitive according to the passage?',
      options:['A. Government subsidies','B. Dramatic cost reduction of solar panels and wind turbines','C. High oil prices','D. International climate agreements','E. Advances in battery storage'],
      answer:'B',
      explanation:'"The dramatic reduction in the cost of solar panels and wind turbines" made renewables competitive'
    },
    {
      id:'LBE-E2-05',
      passage:'Renewable energy sources—including solar, wind, hydroelectric, and geothermal—are rapidly displacing fossil fuels as the primary source of electricity generation worldwide. In 2023, renewable energy accounted for over 30% of global electricity production, a figure that continues to rise. The dramatic reduction in the cost of solar panels and wind turbines over the past decade has made renewables economically competitive, and in many regions, cheaper than coal or natural gas.\n\nDespite this progress, challenges remain. Energy storage technology must advance to address the intermittent nature of solar and wind power—the sun does not always shine, and wind does not always blow. Additionally, the transition requires massive investment in grid infrastructure and faces political resistance in regions economically dependent on fossil fuel industries.',
      question:'Which of the following is NOT mentioned as a renewable energy source in the passage?',
      options:['A. Solar','B. Wind','C. Hydroelectric','D. Nuclear','E. Geothermal'],
      answer:'D',
      explanation:'Nuclear is not mentioned. The passage lists solar, wind, hydroelectric, and geothermal as renewable sources'
    },

    // Passage 2: Sleep Science (5 soal)
    {
      id:'LBE-E2-06',
      passage:'Sleep is far more than simple rest. During sleep, the brain undergoes critical processes: consolidating memories, clearing metabolic waste through the glymphatic system, and regulating hormones. Research consistently shows that adults need 7–9 hours of quality sleep per night. Chronic sleep deprivation is linked to increased risk of obesity, diabetes, cardiovascular disease, and impaired cognitive function.\n\nModern lifestyles pose significant threats to sleep quality. Artificial light from screens suppresses melatonin production, delaying sleep onset. Irregular schedules, high stress, and excessive caffeine consumption further disrupt the body\'s natural circadian rhythm. Sleep experts recommend maintaining a consistent sleep schedule, limiting screen exposure before bedtime, and creating a cool, dark sleep environment.',
      question:'According to the passage, how many hours of sleep do adults need per night?',
      options:['A. 5–7 hours','B. 6–8 hours','C. 7–9 hours','D. 8–10 hours','E. 9–11 hours'],
      answer:'C',
      explanation:'The passage clearly states "adults need 7–9 hours of quality sleep per night"'
    },
    {
      id:'LBE-E2-07',
      passage:'Sleep is far more than simple rest. During sleep, the brain undergoes critical processes: consolidating memories, clearing metabolic waste through the glymphatic system, and regulating hormones. Research consistently shows that adults need 7–9 hours of quality sleep per night. Chronic sleep deprivation is linked to increased risk of obesity, diabetes, cardiovascular disease, and impaired cognitive function.\n\nModern lifestyles pose significant threats to sleep quality. Artificial light from screens suppresses melatonin production, delaying sleep onset. Irregular schedules, high stress, and excessive caffeine consumption further disrupt the body\'s natural circadian rhythm. Sleep experts recommend maintaining a consistent sleep schedule, limiting screen exposure before bedtime, and creating a cool, dark sleep environment.',
      question:'What does artificial light from screens do to sleep, according to the passage?',
      options:['A. It improves memory consolidation','B. It suppresses melatonin and delays sleep onset','C. It regulates the circadian rhythm','D. It increases caffeine sensitivity','E. It clears metabolic waste'],
      answer:'B',
      explanation:'"Artificial light from screens suppresses melatonin production, delaying sleep onset"'
    },
    {
      id:'LBE-E2-08',
      passage:'Sleep is far more than simple rest. During sleep, the brain undergoes critical processes: consolidating memories, clearing metabolic waste through the glymphatic system, and regulating hormones. Research consistently shows that adults need 7–9 hours of quality sleep per night. Chronic sleep deprivation is linked to increased risk of obesity, diabetes, cardiovascular disease, and impaired cognitive function.\n\nModern lifestyles pose significant threats to sleep quality. Artificial light from screens suppresses melatonin production, delaying sleep onset. Irregular schedules, high stress, and excessive caffeine consumption further disrupt the body\'s natural circadian rhythm. Sleep experts recommend maintaining a consistent sleep schedule, limiting screen exposure before bedtime, and creating a cool, dark sleep environment.',
      question:'The word "circadian" in the passage refers to:',
      options:['A. Related to the heart','B. Related to approximately 24-hour biological cycles','C. Related to brain function','D. Related to diet and nutrition','E. Related to exercise patterns'],
      answer:'B',
      explanation:'"Circadian rhythm" refers to the body\'s natural 24-hour internal clock that regulates sleep-wake cycles'
    },
    {
      id:'LBE-E2-09',
      passage:'Sleep is far more than simple rest. During sleep, the brain undergoes critical processes: consolidating memories, clearing metabolic waste through the glymphatic system, and regulating hormones. Research consistently shows that adults need 7–9 hours of quality sleep per night. Chronic sleep deprivation is linked to increased risk of obesity, diabetes, cardiovascular disease, and impaired cognitive function.\n\nModern lifestyles pose significant threats to sleep quality. Artificial light from screens suppresses melatonin production, delaying sleep onset. Irregular schedules, high stress, and excessive caffeine consumption further disrupt the body\'s natural circadian rhythm. Sleep experts recommend maintaining a consistent sleep schedule, limiting screen exposure before bedtime, and creating a cool, dark sleep environment.',
      question:'Which health condition is NOT mentioned as linked to chronic sleep deprivation?',
      options:['A. Obesity','B. Diabetes','C. Cardiovascular disease','D. Depression','E. Impaired cognitive function'],
      answer:'D',
      explanation:'"Depression" is not listed. The passage mentions obesity, diabetes, cardiovascular disease, and impaired cognitive function'
    },
    {
      id:'LBE-E2-10',
      passage:'Sleep is far more than simple rest. During sleep, the brain undergoes critical processes: consolidating memories, clearing metabolic waste through the glymphatic system, and regulating hormones. Research consistently shows that adults need 7–9 hours of quality sleep per night. Chronic sleep deprivation is linked to increased risk of obesity, diabetes, cardiovascular disease, and impaired cognitive function.\n\nModern lifestyles pose significant threats to sleep quality. Artificial light from screens suppresses melatonin production, delaying sleep onset. Irregular schedules, high stress, and excessive caffeine consumption further disrupt the body\'s natural circadian rhythm. Sleep experts recommend maintaining a consistent sleep schedule, limiting screen exposure before bedtime, and creating a cool, dark sleep environment.',
      question:'What is the recommended sleep environment according to sleep experts in the passage?',
      options:['A. Warm and bright','B. Cool and dark','C. Humid and quiet','D. Hot and ventilated','E. Cold and noisy'],
      answer:'B',
      explanation:'Experts recommend "creating a cool, dark sleep environment" for better sleep quality'
    },

    // Vocabulary & Grammar (10 soal)
    {
      id:'LBE-E2-11',
      question:'Choose the correct sentence:',
      options:['A. She don\'t know the answer.','B. She doesn\'t knows the answer.','C. She doesn\'t know the answer.','D. She not know the answer.','E. She not knowing the answer.'],
      answer:'C',
      explanation:'"Doesn\'t" = does + not is used with third-person singular (she/he/it). "Know" stays in base form after auxiliary'
    },
    {
      id:'LBE-E2-12',
      question:'The word "benevolent" most nearly means:',
      options:['A. Cruel','B. Kind and generous','C. Intelligent','D. Dangerous','E. Careless'],
      answer:'B',
      explanation:'"Benevolent" means well-meaning and kindly; generous and charitable'
    },
    {
      id:'LBE-E2-13',
      question:'Choose the correct passive form of "The teacher explained the lesson":',
      options:['A. The lesson was explain by the teacher.','B. The lesson explained by the teacher.','C. The lesson was explained by the teacher.','D. The lesson is explained by the teacher.','E. The lesson were explained by the teacher.'],
      answer:'C',
      explanation:'Past passive = was/were + past participle. "explained" is past participle of "explain"'
    },
    {
      id:'LBE-E2-14',
      question:'Which word is the antonym of "transparent"?',
      options:['A. Clear','B. Visible','C. Opaque','D. Obvious','E. Evident'],
      answer:'C',
      explanation:'"Transparent" = allowing light through, clear. Its antonym is "opaque" = not allowing light through'
    },
    {
      id:'LBE-E2-15',
      question:'Complete the sentence: "If she _____ harder, she would have passed the exam."',
      options:['A. studies','B. studied','C. had studied','D. has studied','E. will study'],
      answer:'C',
      explanation:'This is a Type 3 conditional (past unreal): if + past perfect, would have + past participle'
    },
    {
      id:'LBE-E2-16',
      question:'The synonym of "meticulous" is:',
      options:['A. Careless','B. Thorough and precise','C. Quick','D. Creative','E. Bold'],
      answer:'B',
      explanation:'"Meticulous" means showing great attention to detail; very careful and precise'
    },
    {
      id:'LBE-E2-17',
      question:'Choose the sentence with the correct use of articles:',
      options:['A. She is an honest person.','B. She is a honest person.','C. She is the honest person.','D. She is honest a person.','E. She is an the honest person.'],
      answer:'A',
      explanation:'"An" is used before words starting with a vowel sound. "Honest" starts with silent H, so vowel sound /ɒ/ → "an honest"'
    },
    {
      id:'LBE-E2-18',
      question:'The word "exacerbate" means:',
      options:['A. To solve completely','B. To make worse','C. To improve gradually','D. To prevent effectively','E. To ignore completely'],
      answer:'B',
      explanation:'"Exacerbate" means to make (a problem, bad situation) worse; to aggravate'
    },
    {
      id:'LBE-E2-19',
      question:'Select the correct relative pronoun: "The book _____ I borrowed was very interesting."',
      options:['A. who','B. whom','C. whose','D. which','E. when'],
      answer:'D',
      explanation:'"Which" is the correct relative pronoun for things (book). "Who/whom" is for people'
    },
    {
      id:'LBE-E2-20',
      question:'The phrase "to burn the midnight oil" means:',
      options:['A. To waste resources','B. To work or study late at night','C. To cause a fire','D. To be extremely angry','E. To travel far away'],
      answer:'B',
      explanation:'"Burn the midnight oil" is an idiom meaning to stay up late working or studying'
    },
  ],

  // ============================================================
  // PM — PENALARAN MATEMATIKA (30 soal)
  // ============================================================
  PM: [
    {
      id:'PM-E2-01',
      question:'Nilai dari 4x² − 12x + 9 jika x = 3 adalah:',
      options:['A. 0','B. 3','C. 6','D. 9','E. 12'],
      answer:'D',
      explanation:'4(9)−12(3)+9 = 36−36+9 = 9. Atau: (2x−3)² saat x=3: (6−3)²=9'
    },
    {
      id:'PM-E2-02',
      question:'Jika f(x) = x² − 2x − 3, nilai f(0) adalah:',
      options:['A. −3','B. −2','C. −1','D. 0','E. 3'],
      answer:'A',
      explanation:'f(0) = (0)² − 2(0) − 3 = 0 − 0 − 3 = −3'
    },
    {
      id:'PM-E2-03',
      question:'Sebuah tabung memiliki jari-jari 7 cm dan tinggi 20 cm. Volume tabung (π=22/7) adalah:',
      options:['A. 2.860 cm³','B. 3.080 cm³','C. 3.400 cm³','D. 3.500 cm³','E. 4.000 cm³'],
      answer:'B',
      explanation:'V = πr²h = (22/7)(49)(20) = 22×7×20 = 3.080 cm³'
    },
    {
      id:'PM-E2-04',
      question:'Nilai tan 45° + sin 60° × cos 30° adalah:',
      options:['A. 1','B. 1,5','C. 1,75','D. 2','E. 2,5'],
      answer:'C',
      explanation:'tan 45°=1. sin 60°=√3/2, cos 30°=√3/2. sin60°×cos30°=(√3/2)²=3/4. Total=1+3/4=1.75'
    },
    {
      id:'PM-E2-05',
      question:'Persamaan kuadrat yang memiliki akar x₁=2 dan x₂=−5 adalah:',
      options:['A. x²+3x−10=0','B. x²−3x−10=0','C. x²+3x+10=0','D. x²−3x+10=0','E. x²+7x+10=0'],
      answer:'A',
      explanation:'(x−2)(x+5)=0 → x²+5x−2x−10 = x²+3x−10=0'
    },
    {
      id:'PM-E2-06',
      question:'Jika log₃ x = 4, nilai x adalah:',
      options:['A. 12','B. 27','C. 64','D. 81','E. 243'],
      answer:'D',
      explanation:'log₃ x = 4 → x = 3⁴ = 81'
    },
    {
      id:'PM-E2-07',
      question:'Jumlah 15 suku pertama deret aritmetika: 4, 7, 10, 13, ... adalah:',
      options:['A. 345','B. 360','C. 375','D. 390','E. 395'],
      answer:'C',
      explanation:'a=4, b=3. S₁₅ = (15/2)[2×4+(15-1)×3] = (15/2)[8+42] = (15/2)(50) = 375'
    },
    {
      id:'PM-E2-08',
      question:'Nilai dari ∫₀¹ (3x² + 2x) dx adalah:',
      options:['A. 1','B. 2','C. 3','D. 4','E. 5'],
      answer:'B',
      explanation:'∫(3x²+2x)dx = [x³+x²]₀¹ = (1+1)−0 = 2'
    },
    {
      id:'PM-E2-09',
      question:'Sebuah segitiga memiliki sisi 7 cm, 24 cm, dan 25 cm. Luas segitiga adalah:',
      options:['A. 72 cm²','B. 80 cm²','C. 84 cm²','D. 90 cm²','E. 96 cm²'],
      answer:'C',
      explanation:'Cek: 7²+24²=49+576=625=25². Ini segitiga siku-siku! Luas=½×7×24=84 cm²'
    },
    {
      id:'PM-E2-10',
      question:'Suku ke-7 barisan geometri: 2, 6, 18, 54, ... adalah:',
      options:['A. 1.024','B. 1.296','C. 1.458','D. 1.562','E. 2.000'],
      answer:'C',
      explanation:'r=3. a₇ = 2×3⁶ = 2×729 = 1.458'
    },
    {
      id:'PM-E2-11',
      question:'Nilai x yang memenuhi sistem persamaan: 2x + y = 11 dan x − y = 1 adalah:',
      options:['A. 2','B. 3','C. 4','D. 5','E. 6'],
      answer:'C',
      explanation:'Jumlahkan kedua persamaan: 3x = 12 → x = 4. Substitusi: y = 11−2(4) = 3'
    },
    {
      id:'PM-E2-12',
      question:'Nilai dari ²log 4 + ²log 8 adalah:',
      options:['A. 3','B. 4','C. 5','D. 6','E. 7'],
      answer:'C',
      explanation:'²log 4 = ²log 2² = 2. ²log 8 = ²log 2³ = 3. Total = 2+3 = 5'
    },
    {
      id:'PM-E2-13',
      question:'Diketahui P(A) = 0,4 dan P(B) = 0,3 dengan A dan B saling bebas. Nilai P(A ∩ B) adalah:',
      options:['A. 0,10','B. 0,12','C. 0,14','D. 0,16','E. 0,18'],
      answer:'B',
      explanation:'A dan B saling bebas → P(A∩B) = P(A)×P(B) = 0,4×0,3 = 0,12'
    },
    {
      id:'PM-E2-14',
      question:'Nilai dari (2⁵ × 4²) ÷ 8³ adalah:',
      options:['A. 1','B. 2','C. 3','D. 4','E. 8'],
      answer:'A',
      explanation:'2⁵=32, 4²=16, 8³=512. (32×16)÷512 = 512÷512 = 1. Atau: 2⁵×2⁴÷2⁹ = 2⁹÷2⁹ = 1'
    },
    {
      id:'PM-E2-15',
      question:'Rata-rata 6 bilangan adalah 9. Jika satu bilangan 15 ditambahkan, rata-rata menjadi:',
      options:['A. 8','B. 9','C. 9,5','D. 10','E. 10,5'],
      answer:'D',
      explanation:'Total awal = 6×9 = 54. Total baru = 54+15 = 69. Rata-rata baru = 69/7 ≈ 9,86 ≈ 10'
    },
    {
      id:'PM-E2-16',
      question:'Bentuk sederhana dari (x² − 9) / (x − 3) adalah:',
      options:['A. x − 3','B. x + 3','C. x² + 3','D. x − 9','E. x + 9'],
      answer:'B',
      explanation:'x²−9 = (x+3)(x−3). Dibagi (x−3) → x+3'
    },
    {
      id:'PM-E2-17',
      question:'Jika sudut A dan B saling pelurus (suplemen), dan A = 65°, maka B = ?',
      options:['A. 25°','B. 105°','C. 115°','D. 125°','E. 295°'],
      answer:'C',
      explanation:'Pelurus: A + B = 180°. B = 180° − 65° = 115°'
    },
    {
      id:'PM-E2-18',
      question:'Nilai dari lim(x→3) (x² − 9)/(x − 3) adalah:',
      options:['A. 3','B. 4','C. 5','D. 6','E. 0'],
      answer:'D',
      explanation:'Faktorkan: (x+3)(x−3)/(x−3) = x+3. Saat x→3: 3+3=6'
    },
    {
      id:'PM-E2-19',
      question:'Sebuah persegi panjang luasnya 120 cm². Jika panjang 15 cm, kelilingnya adalah:',
      options:['A. 42 cm','B. 44 cm','C. 46 cm','D. 48 cm','E. 50 cm'],
      answer:'C',
      explanation:'Lebar = 120/15 = 8 cm. Keliling = 2(15+8) = 2×23 = 46 cm'
    },
    {
      id:'PM-E2-20',
      question:'Nilai dari turunan f(x) = sin(2x) pada x = π/4 adalah:',
      options:['A. −2','B. −1','C. 0','D. 1','E. 2'],
      answer:'C',
      explanation:'f\'(x) = 2cos(2x). f\'(π/4) = 2cos(π/2) = 2×0 = 0'
    },
    {
      id:'PM-E2-21',
      question:'Nilai dari sin²30° + cos²60° + tan²45° adalah:',
      options:['A. 1,5','B. 2','C. 2,5','D. 3','E. 1'],
      answer:'A',
      explanation:'sin30°=1/2 → sin²30°=1/4. cos60°=1/2 → cos²60°=1/4. tan45°=1 → tan²45°=1. Total=1/4+1/4+1=3/2=1,5'
    },
    {
      id:'PM-E2-22',
      question:'Diketahui matriks A = [[3,1],[2,4]]. Invers matriks A adalah:',
      options:['A. (1/10)[[4,−1],[−2,3]]','B. (1/10)[[4,1],[2,3]]','C. [[4,−1],[−2,3]]','D. (1/10)[[3,−1],[−2,4]]','E. (1/14)[[4,−1],[−2,3]]'],
      answer:'A',
      explanation:'det A = 3×4−1×2 = 10. A⁻¹ = (1/10)[[4,−1],[−2,3]]'
    },
    {
      id:'PM-E2-23',
      question:'Nilai dari ∑(k=1 hingga 6) k² adalah:',
      options:['A. 76','B. 84','C. 91','D. 98','E. 110'],
      answer:'C',
      explanation:'1+4+9+16+25+36 = 91. Atau: n(n+1)(2n+1)/6 = 6×7×13/6 = 91'
    },
    {
      id:'PM-E2-24',
      question:'Dua buah dadu dilempar bersamaan. Peluang muncul mata dadu berjumlah 10 adalah:',
      options:['A. 1/12','B. 1/9','C. 3/36','D. 4/36','E. 5/36'],
      answer:'C',
      explanation:'Kombinasi jumlah 10: {4,6},{5,5},{6,4} = 3 kejadian. P=3/36=1/12'
    },
    {
      id:'PM-E2-25',
      question:'Suku ke-n dari barisan: 2, 7, 14, 23, 34 adalah:',
      options:['A. n² + n','B. n² + n − 1','C. 2n² − 1','D. n² + 2n − 1','E. n² + n + 1'],
      answer:'D',
      explanation:'Cek n²+2n−1: n=1→1+2−1=2✓, n=2→4+4−1=7✓, n=3→9+6−1=14✓, n=4→16+8−1=23✓, n=5→25+10−1=34✓'
    },
    {
      id:'PM-E2-26',
      question:'Nilai x yang memenuhi log₂(x+1) = 3 adalah:',
      options:['A. 5','B. 6','C. 7','D. 8','E. 9'],
      answer:'C',
      explanation:'log₂(x+1)=3 → x+1=2³=8 → x=7'
    },
    {
      id:'PM-E2-27',
      question:'Jika vektor u = (2, 3) dan v = (4, −1), maka u · v (perkalian titik) adalah:',
      options:['A. 3','B. 4','C. 5','D. 6','E. 7'],
      answer:'C',
      explanation:'u·v = (2)(4)+(3)(−1) = 8−3 = 5'
    },
    {
      id:'PM-E2-28',
      question:'Nilai dari ⁴√(16 × 81) adalah:',
      options:['A. 4','B. 6','C. 8','D. 9','E. 12'],
      answer:'B',
      explanation:'16×81=1296. ⁴√1296 = (1296)^(1/4). 6⁴=1296 → ⁴√1296=6'
    },
    {
      id:'PM-E2-29',
      question:'Fungsi kuadrat y = x² − 6x + 8 memotong sumbu x di titik:',
      options:['A. (2,0) dan (4,0)','B. (1,0) dan (8,0)','C. (−2,0) dan (−4,0)','D. (2,0) dan (−4,0)','E. (3,0) dan (5,0)'],
      answer:'A',
      explanation:'x²−6x+8=0 → (x−2)(x−4)=0 → x=2 atau x=4. Titik potong: (2,0) dan (4,0)'
    },
    {
      id:'PM-E2-30',
      question:'Standar deviasi dari data: 4, 6, 8, 10, 12 adalah:',
      options:['A. √6','B. √7','C. √8','D. 2√2','E. √10'],
      answer:'C',
      explanation:'Mean=8. Variansi=[(4²+2²+0²+2²+4²)/5]=[(16+4+0+4+16)/5]=[40/5]=8. SD=√8=2√2'
    },
  ],
};

/**
 * Gabungkan QUESTION_BANK + QUESTION_BANK_EXTRA + QUESTION_BANK_EXTRA2 + QUESTION_BANK_EXTRA3
 * dan ambil sample acak sesuai jumlah yang dibutuhkan per subtes
 */
function getShuffledQuestions() {
  const result = {};
  for (const key of SUBTEST_ORDER) {
    const allQ = [
      ...(QUESTION_BANK[key]        || []),
      ...(QUESTION_BANK_EXTRA[key]  || []),
      ...(QUESTION_BANK_EXTRA2[key] || []),
      ...(typeof QUESTION_BANK_EXTRA3 !== 'undefined' && QUESTION_BANK_EXTRA3[key] ? QUESTION_BANK_EXTRA3[key] : []),
      ...(typeof QUESTION_BANK_EXTRA4 !== 'undefined' && QUESTION_BANK_EXTRA4[key] ? QUESTION_BANK_EXTRA4[key] : []),
      ...(typeof QUESTION_BANK_EXTRA5 !== 'undefined' && QUESTION_BANK_EXTRA5[key] ? QUESTION_BANK_EXTRA5[key] : []),
    ];
    const needed = SUBTEST_INFO[key].questions;

    // Separate fill-in and multiple-choice questions
    const fillInQ = allQ.filter(q => q.type === 'fill_in');
    const mcQ = allQ.filter(q => q.type !== 'fill_in');

    // Always include fill-in questions, fill remaining with shuffled MC
    const shuffledFI = shuffleArray(fillInQ);
    const shuffledMC = shuffleArray(mcQ);
    const fiCount = Math.min(shuffledFI.length, Math.max(0, needed));
    const mcCount = Math.max(0, needed - fiCount);
    const combined = [...shuffledMC.slice(0, mcCount), ...shuffledFI.slice(0, fiCount)];
    result[key] = shuffleArray(combined);
  }
  return result;
}
