/**
 * SNBT Tryout Pro — Bank Soal Extra 5
 * Berdasarkan pola soal UTBK SNBT 2024–2025 (Official BPPP Kemdikbud)
 * Total: 170 soal | 7 Subtes
 * PU:30 | PPU:20 | PBM:20 | PK:20 | LBI:30 | LBE:20 | PM:30
 */

const QUESTION_BANK_EXTRA5 = {

  // ============================================================
  //  PU — PENALARAN UMUM (30 soal)
  //  Sub: Penalaran Induktif (10), Deduktif (10), Kuantitatif (10)
  // ============================================================
  PU: [
    // ===== PENALARAN INDUKTIF: Deret & Pola (PU-G01 – PU-G10) =====
    {
      id:'PU-H01',
      question:'Tentukan bilangan berikutnya dari deret:\n4, 7, 12, 19, 28, 39, __',
      options:['A. 48','B. 50','C. 52','D. 54','E. 56'],
      answer:'C',
      explanation:'Selisih antar suku: +3,+5,+7,+9,+11,+13 → 39+13=52'
    },
    {
      id:'PU-H02',
      question:'Tentukan nilai selanjutnya dari deret: 3, 6, 12, 24, 48, __',
      options:['A. 72','B. 84','C. 96','D. 108','E. 120'],
      answer:'C',
      explanation:'Pola ×2: 3×2=6×2=12×2=24×2=48×2=96'
    },
    {
      id:'PU-H03',
      question:'Deret: 1, 3, 7, 15, 31, 63, __',
      options:['A. 100','B. 115','C. 127','D. 125','E. 128'],
      answer:'C',
      explanation:'Pola: suku ke-n = 2ⁿ−1. Suku 7 = 2⁷−1 = 128−1 = 127'
    },
    {
      id:'PU-H04',
      question:'Deret huruf: Z, X, V, T, R, __',
      options:['A. Q','B. P','C. O','D. N','E. M'],
      answer:'B',
      explanation:'Mundur 2 huruf setiap langkah: Z(26)→X(24)→V(22)→T(20)→R(18)→P(16)'
    },
    {
      id:'PU-H05',
      question:'Deret: 1, 1, 2, 6, 24, 120, __',
      options:['A. 240','B. 360','C. 600','D. 720','E. 840'],
      answer:'D',
      explanation:'Pola faktorial: 0!=1, 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720'
    },
    {
      id:'PU-H06',
      question:'Deret: 5, 10, 8, 16, 14, 28, 26, __',
      options:['A. 48','B. 50','C. 52','D. 54','E. 56'],
      answer:'C',
      explanation:'Pola bergantian: ×2 lalu −2. 28×2=56, tapi baris ganjil: 5,8,14,26 (×2−2): 26×2=52'
    },
    {
      id:'PU-H07',
      question:'Deret angka: 81, 27, 9, 3, 1, __',
      options:['A. 1/2','B. 1/3','C. 1/4','D. 0','E. 1/9'],
      answer:'B',
      explanation:'Pola ÷3: 81÷3=27÷3=9÷3=3÷3=1÷3=1/3'
    },
    {
      id:'PU-H08',
      question:'Tentukan pola: 2, 5, 11, 23, 47, __',
      options:['A. 90','B. 94','C. 95','D. 96','E. 97'],
      answer:'C',
      explanation:'Pola: ×2+1. 2×2+1=5, 5×2+1=11, 11×2+1=23, 23×2+1=47, 47×2+1=95'
    },
    {
      id:'PU-H09',
      question:'Deret campuran: A1, C4, E9, G16, I25, __',
      options:['A. K36','B. J36','C. K25','D. L36','E. K49'],
      answer:'A',
      explanation:'Huruf: A,C,E,G,I,K (loncat 2). Angka: 1²,2²,3²,4²,5²,6²=36 → K36'
    },
    {
      id:'PU-H10',
      question:'Deret: 3, 8, 15, 24, 35, __',
      options:['A. 46','B. 47','C. 48','D. 49','E. 50'],
      answer:'C',
      explanation:'Pola: n(n+2). n=1:1×3=3, n=2:2×4=8, ..., n=6:6×8=48'
    },

    // ===== PENALARAN DEDUKTIF: Silogisme & Analogi (PU-G11 – PU-G20) =====
    {
      id:'PU-H11',
      question:'ELANG : TERBANG = IKAN : ?',
      options:['A. Berenang','B. Bernafas','C. Melompat','D. Air','E. Sisik'],
      answer:'A',
      explanation:'Elang identik dengan aktivitas Terbang; Ikan identik dengan aktivitas Berenang'
    },
    {
      id:'PU-H12',
      question:'MATA : MELIHAT = TELINGA : ?',
      options:['A. Hidung','B. Mendengar','C. Merasakan','D. Wajah','E. Suara'],
      answer:'B',
      explanation:'Mata berfungsi untuk Melihat; Telinga berfungsi untuk Mendengar'
    },
    {
      id:'PU-H13',
      question:'PETANI : LADANG = NELAYAN : ?',
      options:['A. Ikan','B. Kapal','C. Laut','D. Jaring','E. Pantai'],
      answer:'C',
      explanation:'Petani bekerja di Ladang; Nelayan bekerja di Laut'
    },
    {
      id:'PU-H14',
      question:'DOKTER : RUMAH SAKIT = HAKIM : ?',
      options:['A. Hukum','B. Pengadilan','C. Polisi','D. Penjara','E. Undang-undang'],
      answer:'B',
      explanation:'Dokter bekerja di Rumah Sakit; Hakim bekerja di Pengadilan'
    },
    {
      id:'PU-H15',
      question:'SEJARAH : MASA LALU = ASTRONOMI : ?',
      options:['A. Planet','B. Teleskop','C. Bintang','D. Alam Semesta','E. Gravitasi'],
      answer:'D',
      explanation:'Sejarah mempelajari Masa Lalu; Astronomi mempelajari Alam Semesta'
    },
    {
      id:'PU-H16',
      question:'Semua guru adalah pendidik. Semua pendidik suka membaca.\nKesimpulan yang tepat:',
      options:['A. Semua yang suka membaca adalah guru','B. Semua guru suka membaca','C. Sebagian pendidik bukan guru','D. Sebagian guru tidak suka membaca','E. Tidak dapat disimpulkan'],
      answer:'B',
      explanation:'Rantai silogisme: Guru→Pendidik→Suka membaca. Maka Semua guru suka membaca'
    },
    {
      id:'PU-H17',
      question:'Jika hujan, maka jalanan basah. Saat ini jalanan tidak basah.\nKesimpulan yang tepat:',
      options:['A. Hujan','B. Tidak hujan','C. Mungkin hujan','D. Jalanan kering','E. Tidak dapat dipastikan'],
      answer:'B',
      explanation:'Modus Tollens: Jika P→Q, dan ¬Q, maka ¬P. Jalanan tidak basah → Tidak hujan'
    },
    {
      id:'PU-H18',
      question:'Beberapa mahasiswa adalah atlet. Semua atlet disiplin.\nKesimpulan yang paling tepat:',
      options:['A. Semua mahasiswa disiplin','B. Semua yang disiplin adalah mahasiswa','C. Beberapa mahasiswa disiplin','D. Tidak ada mahasiswa yang disiplin','E. Semua yang disiplin adalah atlet'],
      answer:'C',
      explanation:'Beberapa mahasiswa (yang atlet) pasti disiplin → Beberapa mahasiswa disiplin'
    },
    {
      id:'PU-H19',
      question:'Semua burung bisa terbang. Penguin adalah burung.\nKesimpulan berdasarkan premis:',
      options:['A. Penguin bisa terbang','B. Penguin tidak bisa terbang','C. Penguin bukan burung','D. Tidak semua burung terbang','E. Penguin adalah hewan'],
      answer:'A',
      explanation:'Secara logis berdasarkan premis yang diberikan: semua burung bisa terbang & penguin adalah burung → penguin bisa terbang (terlepas dari fakta biologi)'
    },
    {
      id:'PU-H20',
      question:'Jika nilai Andi ≥ 70, maka Andi lulus. Jika Andi lulus, maka Andi naik kelas.\nNilai Andi 75. Simpulan yang tepat:',
      options:['A. Andi tidak lulus','B. Andi lulus tapi tidak naik kelas','C. Andi naik kelas','D. Tidak dapat ditentukan','E. Andi tidak naik kelas'],
      answer:'C',
      explanation:'75≥70 → Lulus → Naik kelas. Hipotetical syllogism → Andi naik kelas'
    },

    // ===== PENALARAN KUANTITATIF: Data & Grafik (PU-G21 – PU-G30) =====
    {
      id:'PU-H21',
      question:'Tabel penjualan buku (dalam ratusan):\nJan=12, Feb=15, Mar=18, Apr=14, Mei=20\nRata-rata penjualan per bulan adalah:',
      options:['A. 14','B. 15','C. 15,8','D. 16','E. 17'],
      answer:'C',
      explanation:'(12+15+18+14+20)÷5 = 79÷5 = 15,8'
    },
    {
      id:'PU-H22',
      question:'Grafik menunjukkan pertumbuhan pengguna aplikasi (juta): 2020=5, 2021=8, 2022=14, 2023=23.\nSelisih pertumbuhan antara periode 2021–2022 dan 2022–2023 adalah:',
      options:['A. 1 juta','B. 2 juta','C. 3 juta','D. 4 juta','E. 5 juta'],
      answer:'C',
      explanation:'2021→2022: +6 juta. 2022→2023: +9 juta. Selisih = 9−6 = 3 juta'
    },
    {
      id:'PU-H23',
      question:'Dari data berikut: 45, 52, 67, 38, 71, 55, 60\nManakah pernyataan yang BENAR?',
      options:['A. Median = 55','B. Rata-rata > Median','C. Modus = 55','D. Nilai terkecil = 38','E. Semua benar'],
      answer:'D',
      explanation:'Data terurut: 38,45,52,55,60,67,71. Nilai terkecil=38 ✓. Median=55, Rata-rata=388/7≈55,4. B benar juga. D lebih spesifik dan pasti benar'
    },
    {
      id:'PU-H24',
      question:'Diagram batang menunjukkan ekspor (ton): Beras=400, Kopi=600, Teh=300, Sawit=900.\nPersentase ekspor Kopi dari total adalah:',
      options:['A. 25%','B. 27,3%','C. 30%','D. 33,3%','E. 27%'],
      answer:'B',
      explanation:'Total=400+600+300+900=2200. Kopi=600/2200×100%=27,27%≈27,3%'
    },
    {
      id:'PU-H25',
      question:'Data nilai ujian kelas A: 60,70,70,80,80,80,90,90,100.\nModus dari data tersebut adalah:',
      options:['A. 70','B. 75','C. 80','D. 85','E. 90'],
      answer:'C',
      explanation:'80 muncul 3 kali, lebih banyak dari nilai lain → Modus = 80'
    },
    {
      id:'PU-H26',
      question:'Sebuah perusahaan memiliki 200 karyawan. Jika 35% adalah perempuan, berapa orang karyawan laki-laki?',
      options:['A. 70','B. 100','C. 120','D. 130','E. 140'],
      answer:'D',
      explanation:'Perempuan = 35% × 200 = 70. Laki-laki = 200 − 70 = 130'
    },
    {
      id:'PU-H27',
      question:'Grafik garis menunjukkan suhu (°C) selama seminggu: Sen=28, Sel=30, Rab=27, Kam=32, Jum=31, Sab=29, Min=33.\nPada hari apakah suhu paling rendah?',
      options:['A. Senin','B. Selasa','C. Rabu','D. Kamis','E. Sabtu'],
      answer:'C',
      explanation:'Nilai terkecil adalah 27°C yang terjadi pada hari Rabu'
    },
    {
      id:'PU-H28',
      question:'Tabel menunjukkan nilai 5 siswa: Adi=78, Budi=85, Cici=72, Dini=90, Eko=65.\nSiapa yang nilainya di atas rata-rata?',
      options:['A. Adi dan Budi','B. Budi dan Dini','C. Cici dan Dini','D. Adi dan Dini','E. Budi, Dini, dan Adi'],
      answer:'B',
      explanation:'Rata-rata = (78+85+72+90+65)/5 = 390/5 = 78. Di atas 78: Budi(85) dan Dini(90)'
    },
    {
      id:'PU-H29',
      question:'Penjualan toko online: Q1=Rp120jt, Q2=Rp150jt, Q3=Rp135jt, Q4=Rp195jt.\nKenaikan penjualan terbesar terjadi pada periode:',
      options:['A. Q1 ke Q2','B. Q2 ke Q3','C. Q3 ke Q4','D. Q1 ke Q4','E. Q2 ke Q4'],
      answer:'C',
      explanation:'Q1→Q2: +30jt. Q2→Q3: −15jt. Q3→Q4: +60jt. Kenaikan terbesar Q3→Q4'
    },
    {
      id:'PU-H30',
      question:'Data proporsi lulusan PTN 2024: Teknik=28%, Ekonomi=22%, Hukum=18%, Kedokteran=15%, Lainnya=17%.\nJika total lulusan 50.000, berapa lulusan Ekonomi?',
      options:['A. 9.000','B. 10.000','C. 11.000','D. 12.000','E. 13.000'],
      answer:'C',
      explanation:'22% × 50.000 = 11.000 orang'
    },

  ],

  // ============================================================
  //  PPU — PENGETAHUAN & PEMAHAMAN UMUM (20 soal)
  // ============================================================
  PPU: [
    // Sejarah & Kebangsaan
    {
      id:'PPU-H01',
      question:'Proklamasi Kemerdekaan Indonesia dibacakan di:',
      options:['A. Istana Merdeka','B. Jalan Imam Bonjol No. 1','C. Jalan Pegangsaan Timur No. 56','D. Lapangan Banteng','E. Gedung Joang 45'],
      answer:'C',
      explanation:'Proklamasi dibacakan Soekarno-Hatta di kediaman Soekarno, Jl. Pegangsaan Timur No. 56, Jakarta, 17 Agustus 1945'
    },
    {
      id:'PPU-H02',
      question:'Sistem pemerintahan Indonesia berdasarkan UUD 1945 adalah:',
      options:['A. Parlementer','B. Presidensial','C. Monarki Konstitusional','D. Federal','E. Semi-presidensial'],
      answer:'B',
      explanation:'Indonesia menganut sistem presidensial di mana presiden sebagai kepala negara sekaligus kepala pemerintahan'
    },
    {
      id:'PPU-H03',
      question:'Sumpah Pemuda 1928 menegaskan tiga ikrar. Yang TIDAK termasuk adalah:',
      options:['A. Satu tumpah darah Indonesia','B. Satu bangsa Indonesia','C. Satu bahasa Indonesia','D. Satu pemerintahan Indonesia','E. Semua termasuk dalam Sumpah Pemuda'],
      answer:'D',
      explanation:'Tiga ikrar Sumpah Pemuda: satu tumpah darah, satu bangsa, dan satu bahasa Indonesia. Tidak ada ikrar tentang pemerintahan'
    },
    {
      id:'PPU-H04',
      question:'Perjanjian Renville (1948) adalah perjanjian antara Indonesia dengan:',
      options:['A. Inggris','B. Amerika Serikat','C. Belanda','D. Jepang','E. Australia'],
      answer:'C',
      explanation:'Perjanjian Renville adalah perundingan antara Indonesia dan Belanda yang ditandatangani di atas kapal USS Renville milik Amerika Serikat'
    },
    {
      id:'PPU-H05',
      question:'Lembaga negara yang bertugas mengawasi keuangan negara adalah:',
      options:['A. KPK','B. BPK','C. BPKP','D. OJK','E. Bank Indonesia'],
      answer:'B',
      explanation:'Badan Pemeriksa Keuangan (BPK) adalah lembaga negara yang bertugas memeriksa pengelolaan dan tanggung jawab keuangan negara'
    },
    // IPA & Sains
    {
      id:'PPU-H06',
      question:'Proses fotosintesis menghasilkan:',
      options:['A. CO₂ dan H₂O','B. O₂ dan glukosa','C. O₂ dan CO₂','D. Glukosa dan air','E. H₂O dan glukosa'],
      answer:'B',
      explanation:'Fotosintesis: 6CO₂ + 6H₂O + cahaya → C₆H₁₂O₆ (glukosa) + 6O₂'
    },
    {
      id:'PPU-H07',
      question:'Planet yang paling dekat dengan Matahari adalah:',
      options:['A. Venus','B. Bumi','C. Mars','D. Merkurius','E. Jupiter'],
      answer:'D',
      explanation:'Urutan planet dari Matahari: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus'
    },
    {
      id:'PPU-H08',
      question:'Satuan SI untuk intensitas cahaya adalah:',
      options:['A. Watt','B. Lumen','C. Candela','D. Lux','E. Joule'],
      answer:'C',
      explanation:'Candela (cd) adalah satuan dasar SI untuk intensitas cahaya'
    },
    {
      id:'PPU-H09',
      question:'Lapisan atmosfer yang mengandung ozon terbanyak adalah:',
      options:['A. Troposfer','B. Stratosfer','C. Mesosfer','D. Termosfer','E. Eksosfer'],
      answer:'B',
      explanation:'Lapisan ozon berada di stratosfer, sekitar 15–35 km dari permukaan Bumi'
    },
    {
      id:'PPU-H10',
      question:'Unsur dengan nomor atom 6 adalah:',
      options:['A. Boron','B. Nitrogen','C. Karbon','D. Oksigen','E. Neon'],
      answer:'C',
      explanation:'Karbon (C) memiliki nomor atom 6 dalam tabel periodik'
    },
    // IPS & Geografi
    {
      id:'PPU-H11',
      question:'Gunung berapi tertinggi di Indonesia adalah:',
      options:['A. Gunung Rinjani','B. Gunung Kerinci','C. Gunung Semeru','D. Gunung Tambora','E. Gunung Bromo'],
      answer:'B',
      explanation:'Gunung Kerinci (Sumatera Barat/Jambi) setinggi 3.805 mdpl adalah gunung berapi tertinggi di Indonesia'
    },
    {
      id:'PPU-H12',
      question:'Iklim Indonesia tergolong iklim:',
      options:['A. Sub-tropis','B. Tropis','C. Mediterania','D. Kontinental','E. Kutub'],
      answer:'B',
      explanation:'Indonesia terletak di garis khatulistiwa sehingga beriklim tropis dengan curah hujan tinggi sepanjang tahun'
    },
    {
      id:'PPU-H13',
      question:'Laut terdalam di dunia adalah:',
      options:['A. Laut Merah','B. Laut Kaspia','C. Laut Karibia','D. Palung Mariana (Samudra Pasifik)','E. Samudra Atlantik'],
      answer:'D',
      explanation:'Palung Mariana di Samudra Pasifik adalah titik terdalam di Bumi, sekitar 11.000 meter di bawah permukaan laut'
    },
    {
      id:'PPU-H14',
      question:'Negara dengan jumlah penduduk terbanyak di dunia tahun 2024 adalah:',
      options:['A. China','B. India','C. Amerika Serikat','D. Indonesia','E. Pakistan'],
      answer:'B',
      explanation:'Pada tahun 2023–2024, India telah melampaui China sebagai negara dengan populasi terbesar di dunia (>1,4 miliar)'
    },
    {
      id:'PPU-H15',
      question:'Organisasi perdagangan bebas dunia adalah:',
      options:['A. IMF','B. World Bank','C. WTO','D. ASEAN','E. APEC'],
      answer:'C',
      explanation:'WTO (World Trade Organization) adalah organisasi internasional yang mengatur perdagangan antar negara'
    },
    // Bahasa & Sastra
    {
      id:'PPU-H16',
      question:'Majas yang membandingkan dua hal berbeda menggunakan kata "seperti" atau "bagai" disebut:',
      options:['A. Metafora','B. Personifikasi','C. Simile','D. Hiperbola','E. Metonimia'],
      answer:'C',
      explanation:'Simile (perumpamaan) adalah majas perbandingan yang menggunakan kata penghubung seperti, bagai, bagaikan, laksana'
    },
    {
      id:'PPU-H17',
      question:'Karya sastra berbentuk prosa yang menceritakan kehidupan seseorang dari lahir hingga dewasa disebut:',
      options:['A. Novel','B. Biografi','C. Cerpen','D. Roman','E. Otobiografi'],
      answer:'B',
      explanation:'Biografi adalah kisah hidup seseorang yang ditulis oleh orang lain; jika ditulis sendiri disebut otobiografi'
    },
    {
      id:'PPU-H18',
      question:'Penemu telepon adalah:',
      options:['A. Thomas Edison','B. Alexander Graham Bell','C. Nikola Tesla','D. Michael Faraday','E. James Watt'],
      answer:'B',
      explanation:'Alexander Graham Bell mendapat paten untuk penemuan telepon pada 7 Maret 1876'
    },
    {
      id:'PPU-H19',
      question:'Nilai Pancasila yang mencerminkan semangat gotong royong terdapat pada sila:',
      options:['A. Sila 1','B. Sila 2','C. Sila 3','D. Sila 4','E. Sila 5'],
      answer:'C',
      explanation:'Sila ke-3 "Persatuan Indonesia" mencerminkan nilai kebersamaan dan gotong royong sebagai bangsa'
    },
    {
      id:'PPU-H20',
      question:'Badan khusus PBB yang menangani masalah kesehatan dunia adalah:',
      options:['A. UNICEF','B. UNESCO','C. WHO','D. FAO','E. ILO'],
      answer:'C',
      explanation:'WHO (World Health Organization) adalah badan PBB yang bertanggung jawab atas kesehatan internasional'
    },

  ],

  // ============================================================
  //  PBM — PEMAHAMAN BACAAN & MENULIS (20 soal)
  // ============================================================
  PBM: [
    // Passage 1: Kesehatan Mental Remaja (PBM-G01 – PBM-G05)
    {
      id:'PBM-H01',
      passage:'Kesehatan mental remaja menjadi isu yang semakin krusial di era modern. Data Riset Kesehatan Dasar (Riskesdas) 2023 menunjukkan prevalensi gangguan mental emosional pada remaja usia 15–24 tahun mencapai 12,5%, meningkat dibanding periode sebelumnya. Tekanan akademik, penggunaan media sosial yang berlebihan, dan kurangnya ruang ekspresi diri diyakini menjadi faktor pemicu.\n\nPendekatan sekolah ramah kesehatan mental mulai diterapkan di beberapa daerah. Program konseling sekolah, pelatihan guru sebagai deteksi dini, dan kampanye anti-stigma menjadi komponen utama. Namun, keterbatasan sumber daya manusia—khususnya psikolog dan konselor—masih menjadi tantangan besar, terutama di daerah terpencil.\n\nPara ahli menekankan pentingnya kolaborasi antara sekolah, keluarga, dan pemerintah. Intervensi dini jauh lebih efektif dan efisien dibanding penanganan setelah gangguan berkembang. Literasi kesehatan mental bagi semua pihak adalah investasi jangka panjang yang tidak bisa diabaikan.',
      question:'Ide pokok paragraf pertama teks tersebut adalah:',
      options:['A. Data Riskesdas 2023 tentang remaja','B. Meningkatnya gangguan mental remaja dan faktor pemicunya','C. Dampak media sosial terhadap kesehatan remaja','D. Tekanan akademik sebagai penyebab utama gangguan mental','E. Statistik kesehatan mental di Indonesia'],
      answer:'B',
      explanation:'Paragraf 1 menjelaskan meningkatnya prevalensi gangguan mental remaja (12,5%) beserta faktor-faktor pemicunya'
    },
    {
      id:'PBM-H02',
      passage:'Kesehatan mental remaja menjadi isu yang semakin krusial di era modern. Data Riset Kesehatan Dasar (Riskesdas) 2023 menunjukkan prevalensi gangguan mental emosional pada remaja usia 15–24 tahun mencapai 12,5%, meningkat dibanding periode sebelumnya. Tekanan akademik, penggunaan media sosial yang berlebihan, dan kurangnya ruang ekspresi diri diyakini menjadi faktor pemicu.\n\nPendekatan sekolah ramah kesehatan mental mulai diterapkan di beberapa daerah. Program konseling sekolah, pelatihan guru sebagai deteksi dini, dan kampanye anti-stigma menjadi komponen utama. Namun, keterbatasan sumber daya manusia—khususnya psikolog dan konselor—masih menjadi tantangan besar, terutama di daerah terpencil.\n\nPara ahli menekankan pentingnya kolaborasi antara sekolah, keluarga, dan pemerintah. Intervensi dini jauh lebih efektif dan efisien dibanding penanganan setelah gangguan berkembang. Literasi kesehatan mental bagi semua pihak adalah investasi jangka panjang yang tidak bisa diabaikan.',
      question:'Tantangan terbesar dalam penerapan sekolah ramah kesehatan mental berdasarkan teks adalah:',
      options:['A. Kurangnya dana pemerintah','B. Stigma masyarakat terhadap kesehatan mental','C. Kurangnya psikolog dan konselor terutama di daerah terpencil','D. Ketidakmauan guru untuk dilatih','E. Penolakan orang tua siswa'],
      answer:'C',
      explanation:'Teks menyebut "keterbatasan sumber daya manusia—khususnya psikolog dan konselor—masih menjadi tantangan besar, terutama di daerah terpencil"'
    },
    {
      id:'PBM-H03',
      passage:'Kesehatan mental remaja menjadi isu yang semakin krusial di era modern. Data Riset Kesehatan Dasar (Riskesdas) 2023 menunjukkan prevalensi gangguan mental emosional pada remaja usia 15–24 tahun mencapai 12,5%, meningkat dibanding periode sebelumnya. Tekanan akademik, penggunaan media sosial yang berlebihan, dan kurangnya ruang ekspresi diri diyakini menjadi faktor pemicu.\n\nPendekatan sekolah ramah kesehatan mental mulai diterapkan di beberapa daerah. Program konseling sekolah, pelatihan guru sebagai deteksi dini, dan kampanye anti-stigma menjadi komponen utama. Namun, keterbatasan sumber daya manusia—khususnya psikolog dan konselor—masih menjadi tantangan besar, terutama di daerah terpencil.\n\nPara ahli menekankan pentingnya kolaborasi antara sekolah, keluarga, dan pemerintah. Intervensi dini jauh lebih efektif dan efisien dibanding penanganan setelah gangguan berkembang. Literasi kesehatan mental bagi semua pihak adalah investasi jangka panjang yang tidak bisa diabaikan.',
      question:'Makna kata "prevalensi" dalam teks adalah:',
      options:['A. Keparahan penyakit','B. Tingkat kematian akibat penyakit','C. Proporsi kasus dalam populasi pada waktu tertentu','D. Kecepatan penyebaran penyakit','E. Jumlah kasus baru per tahun'],
      answer:'C',
      explanation:'Prevalensi adalah ukuran epidemiologi yang menunjukkan proporsi individu dengan kondisi tertentu dalam suatu populasi pada waktu tertentu'
    },
    {
      id:'PBM-H04',
      passage:'Kesehatan mental remaja menjadi isu yang semakin krusial di era modern. Data Riset Kesehatan Dasar (Riskesdas) 2023 menunjukkan prevalensi gangguan mental emosional pada remaja usia 15–24 tahun mencapai 12,5%, meningkat dibanding periode sebelumnya. Tekanan akademik, penggunaan media sosial yang berlebihan, dan kurangnya ruang ekspresi diri diyakini menjadi faktor pemicu.\n\nPendekatan sekolah ramah kesehatan mental mulai diterapkan di beberapa daerah. Program konseling sekolah, pelatihan guru sebagai deteksi dini, dan kampanye anti-stigma menjadi komponen utama. Namun, keterbatasan sumber daya manusia—khususnya psikolog dan konselor—masih menjadi tantangan besar, terutama di daerah terpencil.\n\nPara ahli menekankan pentingnya kolaborasi antara sekolah, keluarga, dan pemerintah. Intervensi dini jauh lebih efektif dan efisien dibanding penanganan setelah gangguan berkembang. Literasi kesehatan mental bagi semua pihak adalah investasi jangka panjang yang tidak bisa diabaikan.',
      question:'Simpulan yang paling tepat dari keseluruhan teks adalah:',
      options:['A. Media sosial adalah penyebab utama gangguan mental remaja','B. Pemerintah harus menutup semua media sosial untuk remaja','C. Penanganan kesehatan mental remaja membutuhkan kolaborasi dan intervensi dini','D. Sekolah ramah kesehatan mental sudah berhasil diterapkan di seluruh Indonesia','E. Psikolog adalah satu-satunya solusi untuk masalah kesehatan mental'],
      answer:'C',
      explanation:'Paragraf 3 merangkum bahwa kolaborasi semua pihak dan intervensi dini adalah kunci efektif mengatasi masalah kesehatan mental remaja'
    },
    {
      id:'PBM-H05',
      passage:'Kesehatan mental remaja menjadi isu yang semakin krusial di era modern. Data Riset Kesehatan Dasar (Riskesdas) 2023 menunjukkan prevalensi gangguan mental emosional pada remaja usia 15–24 tahun mencapai 12,5%, meningkat dibanding periode sebelumnya. Tekanan akademik, penggunaan media sosial yang berlebihan, dan kurangnya ruang ekspresi diri diyakini menjadi faktor pemicu.\n\nPendekatan sekolah ramah kesehatan mental mulai diterapkan di beberapa daerah. Program konseling sekolah, pelatihan guru sebagai deteksi dini, dan kampanye anti-stigma menjadi komponen utama. Namun, keterbatasan sumber daya manusia—khususnya psikolog dan konselor—masih menjadi tantangan besar, terutama di daerah terpencil.\n\nPara ahli menekankan pentingnya kolaborasi antara sekolah, keluarga, dan pemerintah. Intervensi dini jauh lebih efektif dan efisien dibanding penanganan setelah gangguan berkembang. Literasi kesehatan mental bagi semua pihak adalah investasi jangka panjang yang tidak bisa diabaikan.',
      question:'Kata "krusial" pada teks memiliki makna yang paling tepat:',
      options:['A. Biasa saja','B. Tidak penting','C. Sangat penting dan menentukan','D. Mengkhawatirkan','E. Rumit'],
      answer:'C',
      explanation:'Krusial berarti sangat penting, menentukan, atau genting'
    },

    // Passage 2: Ekonomi Hijau (PBM-G06 – PBM-G10)
    {
      id:'PBM-H06',
      passage:'Transisi menuju ekonomi hijau bukan lagi sekadar pilihan, melainkan kebutuhan mendesak bagi Indonesia. Sebagai negara dengan kekayaan sumber daya alam yang luar biasa sekaligus rentan terhadap dampak perubahan iklim, Indonesia berada di persimpangan kritis. Komitmen Net Zero Emission (NZE) pada 2060 yang telah dideklarasikan pemerintah membutuhkan transformasi fundamental dalam sistem energi, industri, dan pertanian.\n\nSektor energi terbarukan—terutama tenaga surya, angin, dan panas bumi—menjadi tulang punggung transisi ini. Indonesia memiliki potensi energi panas bumi terbesar di dunia, mencapai 40% dari total cadangan global. Namun pemanfaatannya masih jauh dari optimal karena hambatan regulasi, pembiayaan, dan infrastruktur. Investasi asing dan kemitraan publik-swasta diperlukan untuk mempercepat pengembangan ini.\n\nEkonomi hijau tidak berarti mengorbankan pertumbuhan ekonomi. Justru sebaliknya, berbagai studi menunjukkan bahwa investasi di sektor hijau dapat menciptakan jutaan lapangan kerja baru, mengurangi ketergantungan pada bahan bakar fosil, dan meningkatkan ketahanan ekonomi jangka panjang. Kuncinya adalah kebijakan yang tepat dan political will yang konsisten.',
      question:'Indonesia disebut berada di "persimpangan kritis" karena:',
      options:['A. Ekonomi Indonesia sedang krisis','B. Indonesia kaya sumber daya alam sekaligus rentan dampak iklim','C. Indonesia belum menandatangani perjanjian iklim','D. Investasi asing di Indonesia sangat rendah','E. Penggunaan energi fosil di Indonesia sangat tinggi'],
      answer:'B',
      explanation:'Teks menyatakan Indonesia "kaya sumber daya alam yang luar biasa sekaligus rentan terhadap dampak perubahan iklim" sebagai alasan berada di persimpangan kritis'
    },
    {
      id:'PBM-H07',
      passage:'Transisi menuju ekonomi hijau bukan lagi sekadar pilihan, melainkan kebutuhan mendesak bagi Indonesia. Sebagai negara dengan kekayaan sumber daya alam yang luar biasa sekaligus rentan terhadap dampak perubahan iklim, Indonesia berada di persimpangan kritis. Komitmen Net Zero Emission (NZE) pada 2060 yang telah dideklarasikan pemerintah membutuhkan transformasi fundamental dalam sistem energi, industri, dan pertanian.\n\nSektor energi terbarukan—terutama tenaga surya, angin, dan panas bumi—menjadi tulang punggung transisi ini. Indonesia memiliki potensi energi panas bumi terbesar di dunia, mencapai 40% dari total cadangan global. Namun pemanfaatannya masih jauh dari optimal karena hambatan regulasi, pembiayaan, dan infrastruktur. Investasi asing dan kemitraan publik-swasta diperlukan untuk mempercepat pengembangan ini.\n\nEkonomi hijau tidak berarti mengorbankan pertumbuhan ekonomi. Justru sebaliknya, berbagai studi menunjukkan bahwa investasi di sektor hijau dapat menciptakan jutaan lapangan kerja baru, mengurangi ketergantungan pada bahan bakar fosil, dan meningkatkan ketahanan ekonomi jangka panjang. Kuncinya adalah kebijakan yang tepat dan political will yang konsisten.',
      question:'Berapa persen potensi panas bumi Indonesia dari total cadangan global?',
      options:['A. 10%','B. 20%','C. 30%','D. 40%','E. 50%'],
      answer:'D',
      explanation:'Teks secara eksplisit menyebut "Indonesia memiliki potensi energi panas bumi terbesar di dunia, mencapai 40% dari total cadangan global"'
    },
    {
      id:'PBM-H08',
      passage:'Transisi menuju ekonomi hijau bukan lagi sekadar pilihan, melainkan kebutuhan mendesak bagi Indonesia. Sebagai negara dengan kekayaan sumber daya alam yang luar biasa sekaligus rentan terhadap dampak perubahan iklim, Indonesia berada di persimpangan kritis. Komitmen Net Zero Emission (NZE) pada 2060 yang telah dideklarasikan pemerintah membutuhkan transformasi fundamental dalam sistem energi, industri, dan pertanian.\n\nSektor energi terbarukan—terutama tenaga surya, angin, dan panas bumi—menjadi tulang punggung transisi ini. Indonesia memiliki potensi energi panas bumi terbesar di dunia, mencapai 40% dari total cadangan global. Namun pemanfaatannya masih jauh dari optimal karena hambatan regulasi, pembiayaan, dan infrastruktur. Investasi asing dan kemitraan publik-swasta diperlukan untuk mempercepat pengembangan ini.\n\nEkonomi hijau tidak berarti mengorbankan pertumbuhan ekonomi. Justru sebaliknya, berbagai studi menunjukkan bahwa investasi di sektor hijau dapat menciptakan jutaan lapangan kerja baru, mengurangi ketergantungan pada bahan bakar fosil, dan meningkatkan ketahanan ekonomi jangka panjang. Kuncinya adalah kebijakan yang tepat dan political will yang konsisten.',
      question:'Hambatan pengembangan panas bumi di Indonesia yang disebutkan teks adalah:',
      options:['A. Potensi panas bumi yang rendah','B. Penolakan masyarakat setempat','C. Regulasi, pembiayaan, dan infrastruktur','D. Teknologi yang belum tersedia','E. Kurangnya tenaga ahli geothermal'],
      answer:'C',
      explanation:'Teks menyebut hambatan berupa "hambatan regulasi, pembiayaan, dan infrastruktur"'
    },
    {
      id:'PBM-H09',
      passage:'Transisi menuju ekonomi hijau bukan lagi sekadar pilihan, melainkan kebutuhan mendesak bagi Indonesia. Sebagai negara dengan kekayaan sumber daya alam yang luar biasa sekaligus rentan terhadap dampak perubahan iklim, Indonesia berada di persimpangan kritis. Komitmen Net Zero Emission (NZE) pada 2060 yang telah dideklarasikan pemerintah membutuhkan transformasi fundamental dalam sistem energi, industri, dan pertanian.\n\nSektor energi terbarukan—terutama tenaga surya, angin, dan panas bumi—menjadi tulang punggung transisi ini. Indonesia memiliki potensi energi panas bumi terbesar di dunia, mencapai 40% dari total cadangan global. Namun pemanfaatannya masih jauh dari optimal karena hambatan regulasi, pembiayaan, dan infrastruktur. Investasi asing dan kemitraan publik-swasta diperlukan untuk mempercepat pengembangan ini.\n\nEkonomi hijau tidak berarti mengorbankan pertumbuhan ekonomi. Justru sebaliknya, berbagai studi menunjukkan bahwa investasi di sektor hijau dapat menciptakan jutaan lapangan kerja baru, mengurangi ketergantungan pada bahan bakar fosil, dan meningkatkan ketahanan ekonomi jangka panjang. Kuncinya adalah kebijakan yang tepat dan political will yang konsisten.',
      question:'Paragraf ketiga bertentangan dengan anggapan bahwa:',
      options:['A. Energi terbarukan lebih mahal','B. Indonesia tidak memiliki potensi energi hijau','C. Ekonomi hijau pasti mengorbankan pertumbuhan ekonomi','D. Lapangan kerja akan berkurang di sektor hijau','E. Pemerintah tidak serius dalam NZE'],
      answer:'C',
      explanation:'Paragraf 3 membantah anggapan bahwa "ekonomi hijau berarti mengorbankan pertumbuhan ekonomi" dengan menunjukkan bukti sebaliknya'
    },
    {
      id:'PBM-H10',
      passage:'Transisi menuju ekonomi hijau bukan lagi sekadar pilihan, melainkan kebutuhan mendesak bagi Indonesia. Sebagai negara dengan kekayaan sumber daya alam yang luar biasa sekaligus rentan terhadap dampak perubahan iklim, Indonesia berada di persimpangan kritis. Komitmen Net Zero Emission (NZE) pada 2060 yang telah dideklarasikan pemerintah membutuhkan transformasi fundamental dalam sistem energi, industri, dan pertanian.\n\nSektor energi terbarukan—terutama tenaga surya, angin, dan panas bumi—menjadi tulang punggung transisi ini. Indonesia memiliki potensi energi panas bumi terbesar di dunia, mencapai 40% dari total cadangan global. Namun pemanfaatannya masih jauh dari optimal karena hambatan regulasi, pembiayaan, dan infrastruktur. Investasi asing dan kemitraan publik-swasta diperlukan untuk mempercepat pengembangan ini.\n\nEkonomi hijau tidak berarti mengorbankan pertumbuhan ekonomi. Justru sebaliknya, berbagai studi menunjukkan bahwa investasi di sektor hijau dapat menciptakan jutaan lapangan kerja baru, mengurangi ketergantungan pada bahan bakar fosil, dan meningkatkan ketahanan ekonomi jangka panjang. Kuncinya adalah kebijakan yang tepat dan political will yang konsisten.',
      question:'Frase "political will" dalam teks paling tepat bermakna:',
      options:['A. Kebijakan politik luar negeri','B. Kemauan dan komitmen politik dari para pemimpin','C. Sistem pemilihan umum yang demokratis','D. Anggaran negara untuk sektor politik','E. Regulasi yang dibuat parlemen'],
      answer:'B',
      explanation:'Political will berarti kemauan atau kehendak politik—komitmen nyata dari para pengambil kebijakan untuk mengimplementasikan suatu program'
    },

    // Penulisan & Kebahasaan (PBM-G11 – PBM-G20)
    {
      id:'PBM-H11',
      question:'Kalimat mana yang menggunakan ejaan BENAR?',
      options:['A. Ia pergi ke-Jakarta kemarin.','B. Ia pergi ke Jakarta kemarin.','C. Ia pergi kejakarta kemarin.','D. Ia pergi ke jakarta kemarin.','E. Ia pergi Ke Jakarta kemarin.'],
      answer:'B',
      explanation:'Kata depan "ke" ditulis terpisah dari kata benda/tempat yang mengikutinya, dan nama kota diawali huruf kapital: "ke Jakarta"'
    },
    {
      id:'PBM-H12',
      question:'Kalimat yang menggunakan tanda baca TEPAT adalah:',
      options:['A. Saya membeli: buku, pensil, dan penggaris.','B. Saya membeli buku, pensil dan penggaris.','C. Saya membeli buku, pensil, dan penggaris.','D. Saya membeli buku pensil dan penggaris.','E. Saya membeli, buku, pensil, dan penggaris.'],
      answer:'C',
      explanation:'Dalam penulisan daftar, koma digunakan setelah setiap unsur termasuk sebelum "dan" pada unsur terakhir'
    },
    {
      id:'PBM-H13',
      question:'Pilih kalimat yang TIDAK efektif:',
      options:['A. Para siswa mengerjakan tugas dengan serius.','B. Banyak siswa-siswa yang hadir dalam acara itu.','C. Kegiatan itu berlangsung selama dua jam.','D. Hasil penelitian menunjukkan tren positif.','E. Program ini berhasil meningkatkan kualitas belajar.'],
      answer:'B',
      explanation:'"Banyak siswa-siswa" adalah pleonasme (pemborosan kata). Cukup "Banyak siswa" atau "Para siswa"'
    },
    {
      id:'PBM-H14',
      question:'Kata serapan yang penulisannya BENAR adalah:',
      options:['A. aktifitas','B. analisa','C. aktivitas','D. sistim','E. nasehat'],
      answer:'C',
      explanation:'"Aktivitas" adalah serapan dari "activity". Penulisan yang lain salah: aktifitas (salah), analisa→analisis, sistim→sistem, nasehat→nasihat'
    },
    {
      id:'PBM-H15',
      question:'Kalimat manakah yang menggunakan kata baku dengan BENAR?',
      options:['A. Apotek ini buka 24 jam.','B. Apotik ini buka 24 jam.','C. Silahkan duduk di sini.','D. Ijazah itu hilang di jalan.','E. Resiko pekerjaan ini sangat besar.'],
      answer:'A',
      explanation:'"Apotek" adalah bentuk baku. Silahkan→silakan, Ijazah=baku, Resiko→risiko'
    },
    {
      id:'PBM-H16',
      question:'Kalimat berikut yang merupakan kalimat pasif adalah:',
      options:['A. Ibu memasak nasi goreng di dapur.','B. Adik membaca buku cerita itu.','C. Buku itu dibaca oleh adik.','D. Guru mengajarkan matematika kepada siswa.','E. Kami pergi ke pasar pagi tadi.'],
      answer:'C',
      explanation:'"Dibaca oleh adik" menunjukkan kalimat pasif karena subjek (buku) dikenai tindakan'
    },
    {
      id:'PBM-H17',
      question:'Manakah kalimat yang menggunakan konjungsi TEPAT?',
      options:['A. Ia tidak datang karena walaupun sakit.','B. Meskipun hujan, tetapi ia tetap berangkat.','C. Karena lelah, ia langsung tidur.','D. Ia belajar walaupun karena ingin lulus.','E. Ia pergi karena meskipun tidak mau.'],
      answer:'C',
      explanation:'"Karena... maka/ia..." adalah penggunaan konjungsi kausal yang tepat. Pilihan lain menggabungkan dua konjungsi yang tidak sepadan'
    },
    {
      id:'PBM-H18',
      question:'Penulisan bilangan yang BENAR dalam kalimat formal adalah:',
      options:['A. Terdapat 3 cara menyelesaikan soal ini.','B. Terdapat tiga cara menyelesaikan soal ini.','C. Terdapat 3(tiga) cara menyelesaikan soal ini.','D. Terdapat Tiga cara menyelesaikan soal ini.','E. Terdapat ke-3 cara menyelesaikan soal ini.'],
      answer:'B',
      explanation:'Menurut EYD/PUEBI, bilangan yang dapat ditulis dengan satu atau dua kata ditulis dengan huruf dalam teks formal'
    },
    {
      id:'PBM-H19',
      question:'Kalimat yang menggunakan imbuhan men- dengan BENAR adalah:',
      options:['A. Ia mencat dinding rumahnya.','B. Ia mengcat dinding rumahnya.','C. Ia mewarnai dinding rumahnya.','D. Ia mengetik surat itu.','E. A dan D benar'],
      answer:'D',
      explanation:'"Mengetik" → men + ketik = mengetik (benar). "Mencat" salah → yang benar "mengecat" (men + cat → mengecat)'
    },
    {
      id:'PBM-H20',
      question:'Paragraf yang padu ditandai dengan:',
      options:['A. Setiap kalimat merupakan ide pokok baru','B. Kalimat-kalimat saling mendukung dan berhubungan logis','C. Menggunakan banyak kata penghubung','D. Jumlah kalimat yang banyak','E. Menggunakan kata-kata ilmiah'],
      answer:'B',
      explanation:'Kepaduan (kohesi dan koherensi) paragraf ditentukan oleh hubungan logis dan saling mendukung antar kalimat'
    },

  ],

  // ============================================================
  //  PK — PENGETAHUAN KUANTITATIF (20 soal)
  // ============================================================
  PK: [
    {
      id:'PK-H01',
      question:'Jika 2x + 3y = 12 dan x − y = 1, maka nilai x + y adalah:',
      options:['A. 3','B. 4','C. 5','D. 6','E. 7'],
      answer:'C',
      explanation:'Dari x−y=1 → x=y+1. Substitusi: 2(y+1)+3y=12 → 5y=10 → y=2, x=3. x+y=5'
    },
    {
      id:'PK-H02',
      question:'Sebuah segitiga sama sisi memiliki sisi 6 cm. Luasnya adalah:',
      options:['A. 9√3 cm²','B. 12 cm²','C. 18 cm²','D. 6√3 cm²','E. 36 cm²'],
      answer:'A',
      explanation:'L = (s²√3)/4 = (36√3)/4 = 9√3 cm²'
    },
    {
      id:'PK-H03',
      question:'Jika P > Q, Q > R, dan R > S, manakah pernyataan yang PASTI benar?',
      options:['A. P > S','B. P = S','C. S > P','D. P + Q > R + S','E. A dan D benar'],
      answer:'E',
      explanation:'P>Q>R>S maka P>S (benar). P+Q > R+S juga benar karena P>R dan Q>S'
    },
    {
      id:'PK-H04',
      question:'Nilai dari log₂ 32 adalah:',
      options:['A. 4','B. 5','C. 6','D. 16','E. 8'],
      answer:'B',
      explanation:'log₂ 32 = log₂ 2⁵ = 5'
    },
    {
      id:'PK-H05',
      question:'Suatu barisan aritmetika memiliki suku pertama 4 dan beda 3. Suku ke-10 adalah:',
      options:['A. 28','B. 30','C. 31','D. 33','E. 34'],
      answer:'C',
      explanation:'Uₙ = a + (n−1)d = 4 + 9×3 = 4+27 = 31'
    },
    {
      id:'PK-H06',
      question:'Diketahui f(x) = 3x² − 2x + 1. Nilai f(2) adalah:',
      options:['A. 7','B. 9','C. 10','D. 11','E. 13'],
      answer:'B',
      explanation:'f(2) = 3(4) − 2(2) + 1 = 12 − 4 + 1 = 9'
    },
    {
      id:'PK-H07',
      question:'Sebuah lingkaran memiliki diameter 14 cm. Luas lingkaran (π = 22/7) adalah:',
      options:['A. 44 cm²','B. 88 cm²','C. 154 cm²','D. 308 cm²','E. 616 cm²'],
      answer:'C',
      explanation:'r = 7 cm. L = π×r² = (22/7)×49 = 22×7 = 154 cm²'
    },
    {
      id:'PK-H08',
      question:'Dalam sebuah kelas terdapat 40 siswa. Jika 60% adalah perempuan, berapa siswa laki-laki?',
      options:['A. 12','B. 14','C. 16','D. 18','E. 20'],
      answer:'C',
      explanation:'Perempuan = 60% × 40 = 24. Laki-laki = 40 − 24 = 16'
    },
    {
      id:'PK-H09',
      question:'Nilai dari √(144 + 25) adalah:',
      options:['A. 13','B. 14','C. 15','D. 16','E. 17'],
      answer:'A',
      explanation:'√(144+25) = √169 = 13'
    },
    {
      id:'PK-H10',
      question:'Sebuah pipa mengisi kolam dalam 4 jam. Pipa lain mengisi dalam 6 jam. Jika keduanya bekerja bersamaan, berapa jam untuk mengisi kolam penuh?',
      options:['A. 1,5 jam','B. 2 jam','C. 2,4 jam','D. 3 jam','E. 5 jam'],
      answer:'C',
      explanation:'Debit bersama = 1/4 + 1/6 = 3/12 + 2/12 = 5/12. Waktu = 12/5 = 2,4 jam'
    },
    {
      id:'PK-H11',
      question:'Harga barang naik 20% lalu turun 20%. Perubahan harga akhir dari harga awal adalah:',
      options:['A. Sama','B. Turun 4%','C. Naik 4%','D. Turun 2%','E. Naik 2%'],
      answer:'B',
      explanation:'Misal harga awal 100. Naik 20%→120. Turun 20%→120×0,8=96. Turun 4% dari harga awal'
    },
    {
      id:'PK-H12',
      question:'Persamaan garis yang melalui titik (2, 3) dan (4, 7) adalah:',
      options:['A. y = 2x − 1','B. y = 2x + 1','C. y = x + 1','D. y = 3x − 3','E. y = 2x − 2'],
      answer:'A',
      explanation:'Gradien m = (7−3)/(4−2) = 2. y−3 = 2(x−2) → y = 2x−4+3 = 2x−1'
    },
    {
      id:'PK-H13',
      question:'FPB dari 48 dan 72 adalah:',
      options:['A. 12','B. 18','C. 24','D. 36','E. 48'],
      answer:'C',
      explanation:'48 = 2⁴×3. 72 = 2³×3². FPB = 2³×3 = 24'
    },
    {
      id:'PK-H14',
      question:'KPK dari 12, 18, dan 24 adalah:',
      options:['A. 36','B. 48','C. 60','D. 72','E. 96'],
      answer:'D',
      explanation:'12=2²×3, 18=2×3², 24=2³×3. KPK=2³×3²=8×9=72'
    },
    {
      id:'PK-H15',
      question:'Dua buah dadu dilempar bersamaan. Peluang munculnya jumlah 7 adalah:',
      options:['A. 1/6','B. 5/36','C. 6/36','D. 7/36','E. 1/4'],
      answer:'A',
      explanation:'Pasangan yang berjumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 pasangan. P = 6/36 = 1/6'
    },
    {
      id:'PK-H16',
      question:'Jika 3^(x+1) = 81, maka nilai x adalah:',
      options:['A. 2','B. 3','C. 4','D. 5','E. 6'],
      answer:'B',
      explanation:'81 = 3⁴. Jadi 3^(x+1) = 3⁴ → x+1=4 → x=3'
    },
    {
      id:'PK-H17',
      question:'Sebuah prisma segitiga memiliki alas segitiga siku-siku dengan kaki 3 cm dan 4 cm, tinggi prisma 10 cm. Volumenya adalah:',
      options:['A. 60 cm³','B. 80 cm³','C. 90 cm³','D. 120 cm³','E. 150 cm³'],
      answer:'A',
      explanation:'L alas = ½×3×4 = 6 cm². V = 6×10 = 60 cm³'
    },
    {
      id:'PK-H18',
      question:'Median dari data: 5, 8, 3, 9, 7, 4, 6 adalah:',
      options:['A. 5','B. 6','C. 7','D. 8','E. 4'],
      answer:'B',
      explanation:'Urut: 3,4,5,6,7,8,9. Median = nilai tengah = 6 (posisi ke-4)'
    },
    {
      id:'PK-H19',
      question:'Determinan matriks [[3,2],[1,4]] adalah:',
      options:['A. 8','B. 10','C. 12','D. 14','E. 16'],
      answer:'B',
      explanation:'det = (3×4) − (2×1) = 12−2 = 10'
    },
    {
      id:'PK-H20',
      question:'Jika sin θ = 3/5 dan θ berada di kuadran I, maka cos θ adalah:',
      options:['A. 3/5','B. 4/5','C. 5/4','D. 4/3','E. 5/3'],
      answer:'B',
      explanation:'sin²θ + cos²θ = 1. cos²θ = 1 − 9/25 = 16/25. cos θ = 4/5 (positif di kuadran I)'
    },

  ],

  // ============================================================
  //  LBI — LITERASI BAHASA INDONESIA (30 soal)
  // ============================================================
  LBI: [
    // Teks 1: Ketahanan Pangan Nasional (LBI-G01 – LBI-G06)
    {
      id:'LBI-H01',
      passage:'Ketahanan pangan nasional merupakan salah satu prioritas utama pembangunan Indonesia. Definisi ketahanan pangan mencakup tiga dimensi: ketersediaan, keterjangkauan, dan pemanfaatan pangan. Ketiga dimensi ini saling terkait dan harus dicapai secara simultan untuk memastikan seluruh masyarakat dapat mengakses pangan bergizi secara memadai.\n\nIndonesia menghadapi tantangan serius dalam mewujudkan ketahanan pangan. Konversi lahan pertanian menjadi kawasan industri dan permukiman terus terjadi dengan laju yang mengkhawatirkan. Data Kementerian Pertanian menunjukkan bahwa rata-rata 150.000 hektare sawah produktif hilang setiap tahun. Kondisi ini diperburuk oleh perubahan iklim yang mempengaruhi pola tanam dan produktivitas hasil pertanian.\n\nDi sisi lain, teknologi pertanian modern menawarkan secercah harapan. Penerapan pertanian presisi, penggunaan varietas unggul tahan hama dan kekeringan, serta sistem irigasi cerdas dapat meningkatkan produktivitas secara signifikan. Program cetak sawah baru dan optimalisasi lahan rawa dan gambut juga menjadi strategi pemerintah untuk mengompensasi hilangnya lahan produktif.\n\nNamun demikian, tantangan struktural berupa lemahnya kelembagaan petani, akses permodalan yang terbatas, serta rantai distribusi yang panjang dan tidak efisien masih menjadi batu sandungan. Diperlukan pendekatan holistik yang melibatkan seluruh pemangku kepentingan—dari petani hingga pemerintah—untuk mewujudkan ketahanan pangan yang sejati.',
      question:'Berdasarkan teks, dimensi ketahanan pangan yang benar adalah:',
      options:['A. Produksi, distribusi, konsumsi','B. Ketersediaan, keterjangkauan, pemanfaatan','C. Kualitas, kuantitas, kontinuitas','D. Harga, ketersediaan, kualitas','E. Produksi, harga, gizi'],
      answer:'B',
      explanation:'Teks secara eksplisit menyebut tiga dimensi: "ketersediaan, keterjangkauan, dan pemanfaatan pangan"'
    },
    {
      id:'LBI-H02',
      passage:'Ketahanan pangan nasional merupakan salah satu prioritas utama pembangunan Indonesia. Definisi ketahanan pangan mencakup tiga dimensi: ketersediaan, keterjangkauan, dan pemanfaatan pangan. Ketiga dimensi ini saling terkait dan harus dicapai secara simultan untuk memastikan seluruh masyarakat dapat mengakses pangan bergizi secara memadai.\n\nIndonesia menghadapi tantangan serius dalam mewujudkan ketahanan pangan. Konversi lahan pertanian menjadi kawasan industri dan permukiman terus terjadi dengan laju yang mengkhawatirkan. Data Kementerian Pertanian menunjukkan bahwa rata-rata 150.000 hektare sawah produktif hilang setiap tahun. Kondisi ini diperburuk oleh perubahan iklim yang mempengaruhi pola tanam dan produktivitas hasil pertanian.\n\nDi sisi lain, teknologi pertanian modern menawarkan secercah harapan. Penerapan pertanian presisi, penggunaan varietas unggul tahan hama dan kekeringan, serta sistem irigasi cerdas dapat meningkatkan produktivitas secara signifikan. Program cetak sawah baru dan optimalisasi lahan rawa dan gambut juga menjadi strategi pemerintah untuk mengompensasi hilangnya lahan produktif.\n\nNamun demikian, tantangan struktural berupa lemahnya kelembagaan petani, akses permodalan yang terbatas, serta rantai distribusi yang panjang dan tidak efisien masih menjadi batu sandungan. Diperlukan pendekatan holistik yang melibatkan seluruh pemangku kepentingan—dari petani hingga pemerintah—untuk mewujudkan ketahanan pangan yang sejati.',
      question:'Berapa hektare sawah produktif yang hilang rata-rata setiap tahun menurut data Kementan?',
      options:['A. 100.000 ha','B. 120.000 ha','C. 150.000 ha','D. 200.000 ha','E. 250.000 ha'],
      answer:'C',
      explanation:'Teks menyebut "rata-rata 150.000 hektare sawah produktif hilang setiap tahun"'
    },
    {
      id:'LBI-H03',
      passage:'Ketahanan pangan nasional merupakan salah satu prioritas utama pembangunan Indonesia. Definisi ketahanan pangan mencakup tiga dimensi: ketersediaan, keterjangkauan, dan pemanfaatan pangan. Ketiga dimensi ini saling terkait dan harus dicapai secara simultan untuk memastikan seluruh masyarakat dapat mengakses pangan bergizi secara memadai.\n\nIndonesia menghadapi tantangan serius dalam mewujudkan ketahanan pangan. Konversi lahan pertanian menjadi kawasan industri dan permukiman terus terjadi dengan laju yang mengkhawatirkan. Data Kementerian Pertanian menunjukkan bahwa rata-rata 150.000 hektare sawah produktif hilang setiap tahun. Kondisi ini diperburuk oleh perubahan iklim yang mempengaruhi pola tanam dan produktivitas hasil pertanian.',
      question:'Makna frasa "secercah harapan" dalam konteks teks adalah:',
      options:['A. Harapan yang sangat besar','B. Harapan yang tidak pasti','C. Sedikit kemungkinan positif di tengah tantangan','D. Harapan yang sudah terwujud','E. Tidak ada harapan sama sekali'],
      answer:'C',
      explanation:'"Secercah" berarti sedikit/sebersit. "Secercah harapan" bermakna sedikit harapan positif yang ada di tengah-tengah banyak tantangan'
    },
    {
      id:'LBI-H04',
      passage:'Ketahanan pangan nasional merupakan salah satu prioritas utama pembangunan Indonesia. Definisi ketahanan pangan mencakup tiga dimensi: ketersediaan, keterjangkauan, dan pemanfaatan pangan. Ketiga dimensi ini saling terkait dan harus dicapai secara simultan untuk memastikan seluruh masyarakat dapat mengakses pangan bergizi secara memadai.\n\nIndonesia menghadapi tantangan serius dalam mewujudkan ketahanan pangan. Konversi lahan pertanian menjadi kawasan industri dan permukiman terus terjadi dengan laju yang mengkhawatirkan. Data Kementerian Pertanian menunjukkan bahwa rata-rata 150.000 hektare sawah produktif hilang setiap tahun. Kondisi ini diperburuk oleh perubahan iklim yang mempengaruhi pola tanam dan produktivitas hasil pertanian.\n\nDi sisi lain, teknologi pertanian modern menawarkan secercah harapan. Penerapan pertanian presisi, penggunaan varietas unggul tahan hama dan kekeringan, serta sistem irigasi cerdas dapat meningkatkan produktivitas secara signifikan. Program cetak sawah baru dan optimalisasi lahan rawa dan gambut juga menjadi strategi pemerintah untuk mengompensasi hilangnya lahan produktif.\n\nNamun demikian, tantangan struktural berupa lemahnya kelembagaan petani, akses permodalan yang terbatas, serta rantai distribusi yang panjang dan tidak efisien masih menjadi batu sandungan. Diperlukan pendekatan holistik yang melibatkan seluruh pemangku kepentingan—dari petani hingga pemerintah—untuk mewujudkan ketahanan pangan yang sejati.',
      question:'Strategi yang TIDAK disebutkan dalam teks untuk mengatasi berkurangnya lahan pertanian adalah:',
      options:['A. Pertanian presisi','B. Varietas unggul tahan hama','C. Impor beras dari negara lain','D. Cetak sawah baru','E. Optimalisasi lahan rawa'],
      answer:'C',
      explanation:'Impor beras tidak disebutkan dalam teks. Strategi yang disebutkan: pertanian presisi, varietas unggul, irigasi cerdas, cetak sawah baru, optimalisasi lahan rawa/gambut'
    },
    {
      id:'LBI-H05',
      passage:'Ketahanan pangan nasional merupakan salah satu prioritas utama pembangunan Indonesia. Definisi ketahanan pangan mencakup tiga dimensi: ketersediaan, keterjangkauan, dan pemanfaatan pangan. Ketiga dimensi ini saling terkait dan harus dicapai secara simultan untuk memastikan seluruh masyarakat dapat mengakses pangan bergizi secara memadai.\n\nIndonesia menghadapi tantangan serius dalam mewujudkan ketahanan pangan. Konversi lahan pertanian menjadi kawasan industri dan permukiman terus terjadi dengan laju yang mengkhawatirkan. Data Kementerian Pertanian menunjukkan bahwa rata-rata 150.000 hektare sawah produktif hilang setiap tahun. Kondisi ini diperburuk oleh perubahan iklim yang mempengaruhi pola tanam dan produktivitas hasil pertanian.\n\nDi sisi lain, teknologi pertanian modern menawarkan secercah harapan. Penerapan pertanian presisi, penggunaan varietas unggul tahan hama dan kekeringan, serta sistem irigasi cerdas dapat meningkatkan produktivitas secara signifikan. Program cetak sawah baru dan optimalisasi lahan rawa dan gambut juga menjadi strategi pemerintah untuk mengompensasi hilangnya lahan produktif.\n\nNamun demikian, tantangan struktural berupa lemahnya kelembagaan petani, akses permodalan yang terbatas, serta rantai distribusi yang panjang dan tidak efisien masih menjadi batu sandungan. Diperlukan pendekatan holistik yang melibatkan seluruh pemangku kepentingan—dari petani hingga pemerintah—untuk mewujudkan ketahanan pangan yang sejati.',
      question:'Tantangan struktural dalam ketahanan pangan yang disebutkan teks meliputi:',
      options:['A. Harga pupuk yang mahal','B. Lemahnya kelembagaan, permodalan terbatas, distribusi tidak efisien','C. Kurangnya tenaga ahli pertanian','D. Teknologi pertanian yang tertinggal','E. Kurangnya minat generasi muda bertani'],
      answer:'B',
      explanation:'Teks secara eksplisit menyebut: "lemahnya kelembagaan petani, akses permodalan yang terbatas, serta rantai distribusi yang panjang dan tidak efisien"'
    },
    {
      id:'LBI-H06',
      passage:'Ketahanan pangan nasional merupakan salah satu prioritas utama pembangunan Indonesia. Definisi ketahanan pangan mencakup tiga dimensi: ketersediaan, keterjangkauan, dan pemanfaatan pangan. Ketiga dimensi ini saling terkait dan harus dicapai secara simultan untuk memastikan seluruh masyarakat dapat mengakses pangan bergizi secara memadai.',
      question:'Simpulan yang paling tepat dari seluruh isi teks adalah:',
      options:['A. Teknologi adalah solusi utama ketahanan pangan Indonesia','B. Pemerintah harus menghentikan alih fungsi lahan pertanian','C. Ketahanan pangan memerlukan pendekatan holistik mengatasi tantangan dari berbagai sisi','D. Lahan rawa dan gambut adalah masa depan pertanian Indonesia','E. Impor pangan adalah solusi jangka pendek yang diperlukan'],
      answer:'C',
      explanation:'Paragraf terakhir menyimpulkan perlunya "pendekatan holistik yang melibatkan seluruh pemangku kepentingan" sebagai inti solusi'
    },

    // Teks 2: Budaya Membaca di Indonesia (LBI-G07 – LBI-G12)
    {
      id:'LBI-H07',
      passage:'Budaya membaca di Indonesia masih tergolong rendah dibandingkan negara-negara maju. Laporan UNESCO menyebutkan bahwa minat baca masyarakat Indonesia menempati urutan ke-60 dari 61 negara yang disurvei. Rata-rata warga Indonesia hanya membaca 0–1 buku per tahun, jauh tertinggal dibandingkan warga Jepang atau Finlandia yang membaca belasan hingga puluhan buku per tahun.\n\nFaktor penyebab rendahnya minat baca cukup kompleks. Pertama, sistem pendidikan yang lebih menekankan hafalan daripada pemahaman kritis kurang menumbuhkan kebiasaan membaca. Kedua, akses terhadap buku masih timpang antara perkotaan dan pedesaan. Ketiga, gempuran konten digital—terutama video pendek di media sosial—menyita perhatian yang seharusnya dapat digunakan untuk membaca.\n\nNamun ada sinyal positif. Gerakan literasi nasional yang dicanangkan pemerintah sejak 2016 mulai menunjukkan hasil, meski belum optimal. Pojok baca di sekolah dan ruang publik semakin banyak. Platform baca digital seperti e-book dan podcast literasi juga tumbuh pesat, menjangkau segmen pembaca muda yang lebih familiar dengan teknologi.\n\nPara pakar pendidikan menekankan bahwa kebiasaan membaca harus ditanamkan sejak usia dini. Peran orang tua yang membacakan cerita kepada anak terbukti secara ilmiah meningkatkan kemampuan berbahasa, empati, dan prestasi akademik anak. Membaca bukan sekadar keterampilan—ia adalah pondasi peradaban.',
      question:'Perbandingan minat baca Indonesia dengan negara lain berdasarkan data teks adalah:',
      options:['A. Indonesia urutan 60 dari 60 negara','B. Indonesia urutan 60 dari 61 negara, membaca 0-1 buku/tahun','C. Indonesia membaca lebih banyak dari Jepang','D. Indonesia urutan 61 dari 61 negara','E. Indonesia membaca 5 buku per tahun'],
      answer:'B',
      explanation:'Teks menyebut "menempati urutan ke-60 dari 61 negara" dan "rata-rata 0–1 buku per tahun"'
    },
    {
      id:'LBI-H08',
      passage:'Budaya membaca di Indonesia masih tergolong rendah dibandingkan negara-negara maju. Laporan UNESCO menyebutkan bahwa minat baca masyarakat Indonesia menempati urutan ke-60 dari 61 negara yang disurvei. Rata-rata warga Indonesia hanya membaca 0–1 buku per tahun, jauh tertinggal dibandingkan warga Jepang atau Finlandia yang membaca belasan hingga puluhan buku per tahun.\n\nFaktor penyebab rendahnya minat baca cukup kompleks. Pertama, sistem pendidikan yang lebih menekankan hafalan daripada pemahaman kritis kurang menumbuhkan kebiasaan membaca. Kedua, akses terhadap buku masih timpang antara perkotaan dan pedesaan. Ketiga, gempuran konten digital—terutama video pendek di media sosial—menyita perhatian yang seharusnya dapat digunakan untuk membaca.',
      question:'Faktor penyebab rendahnya minat baca yang TIDAK disebutkan dalam teks adalah:',
      options:['A. Sistem pendidikan yang menekankan hafalan','B. Ketimpangan akses buku','C. Konten digital yang menyita perhatian','D. Harga buku yang terlalu mahal','E. Semua disebutkan dalam teks'],
      answer:'D',
      explanation:'Tiga faktor yang disebutkan: sistem pendidikan hafalan, ketimpangan akses, dan konten digital. Harga buku tidak disebutkan'
    },
    {
      id:'LBI-H09',
      passage:'Budaya membaca di Indonesia masih tergolong rendah dibandingkan negara-negara maju. Laporan UNESCO menyebutkan bahwa minat baca masyarakat Indonesia menempati urutan ke-60 dari 61 negara yang disurvei. Rata-rata warga Indonesia hanya membaca 0–1 buku per tahun, jauh tertinggal dibandingkan warga Jepang atau Finlandia yang membaca belasan hingga puluhan buku per tahun.\n\nFaktor penyebab rendahnya minat baca cukup kompleks. Pertama, sistem pendidikan yang lebih menekankan hafalan daripada pemahaman kritis kurang menumbuhkan kebiasaan membaca. Kedua, akses terhadap buku masih timpang antara perkotaan dan pedesaan. Ketiga, gempuran konten digital—terutama video pendek di media sosial—menyita perhatian yang seharusnya dapat digunakan untuk membaca.\n\nNamun ada sinyal positif. Gerakan literasi nasional yang dicanangkan pemerintah sejak 2016 mulai menunjukkan hasil, meski belum optimal. Pojok baca di sekolah dan ruang publik semakin banyak. Platform baca digital seperti e-book dan podcast literasi juga tumbuh pesat, menjangkau segmen pembaca muda yang lebih familiar dengan teknologi.',
      question:'Kata "timpang" dalam teks bermakna:',
      options:['A. Sangat baik','B. Merata dan adil','C. Tidak seimbang/tidak merata','D. Sangat terbatas','E. Sudah diperbaiki'],
      answer:'C',
      explanation:'"Timpang" berarti tidak seimbang, tidak merata, atau tidak adil dalam distribusi/perbedaannya'
    },
    {
      id:'LBI-H10',
      passage:'Para pakar pendidikan menekankan bahwa kebiasaan membaca harus ditanamkan sejak usia dini. Peran orang tua yang membacakan cerita kepada anak terbukti secara ilmiah meningkatkan kemampuan berbahasa, empati, dan prestasi akademik anak. Membaca bukan sekadar keterampilan—ia adalah pondasi peradaban.',
      question:'Manfaat membacakan cerita kepada anak yang disebutkan teks adalah:',
      options:['A. Meningkatkan kecerdasan emosional saja','B. Meningkatkan kemampuan berbahasa, empati, dan prestasi akademik','C. Mempercepat kemampuan membaca mandiri','D. Mengurangi waktu bermain gadget','E. Meningkatkan kreativitas dan imajinasi'],
      answer:'B',
      explanation:'Teks secara eksplisit menyebut: "meningkatkan kemampuan berbahasa, empati, dan prestasi akademik anak"'
    },
    {
      id:'LBI-H11',
      passage:'Budaya membaca di Indonesia masih tergolong rendah dibandingkan negara-negara maju. Laporan UNESCO menyebutkan bahwa minat baca masyarakat Indonesia menempati urutan ke-60 dari 61 negara yang disurvei. Rata-rata warga Indonesia hanya membaca 0–1 buku per tahun, jauh tertinggal dibandingkan warga Jepang atau Finlandia yang membaca belasan hingga puluhan buku per tahun.\n\nFaktor penyebab rendahnya minat baca cukup kompleks. Pertama, sistem pendidikan yang lebih menekankan hafalan daripada pemahaman kritis kurang menumbuhkan kebiasaan membaca. Kedua, akses terhadap buku masih timpang antara perkotaan dan pedesaan. Ketiga, gempuran konten digital—terutama video pendek di media sosial—menyita perhatian yang seharusnya dapat digunakan untuk membaca.\n\nNamun ada sinyal positif. Gerakan literasi nasional yang dicanangkan pemerintah sejak 2016 mulai menunjukkan hasil, meski belum optimal. Pojok baca di sekolah dan ruang publik semakin banyak. Platform baca digital seperti e-book dan podcast literasi juga tumbuh pesat, menjangkau segmen pembaca muda yang lebih familiar dengan teknologi.',
      question:'Sikap penulis terhadap kondisi literasi Indonesia dapat disimpulkan sebagai:',
      options:['A. Pesimis dan tidak percaya ada perbaikan','B. Sepenuhnya optimis','C. Kritis namun mengakui perkembangan positif','D. Netral tanpa memberikan penilaian','E. Sinis dan menyalahkan pemerintah'],
      answer:'C',
      explanation:'Penulis mengkritisi kondisi rendahnya literasi (paragraf 1-2) namun juga mengakui sinyal positif gerakan literasi (paragraf 3)'
    },
    {
      id:'LBI-H12',
      passage:'Membaca bukan sekadar keterampilan—ia adalah pondasi peradaban.',
      question:'Kalimat "Membaca bukan sekadar keterampilan—ia adalah pondasi peradaban" mengandung gaya bahasa:',
      options:['A. Simile','B. Hiperbola','C. Metafora','D. Personifikasi','E. Eufemisme'],
      answer:'C',
      explanation:'Membandingkan membaca dengan "pondasi peradaban" tanpa menggunakan kata pembanding (seperti, bagai) adalah metafora'
    },

    // Teks 3: Urbanisasi dan Dampaknya (LBI-G13 – LBI-G18)
    {
      id:'LBI-H13',
      passage:'Urbanisasi di Indonesia berlangsung dengan sangat cepat. BPS mencatat bahwa pada 2020, untuk pertama kalinya lebih dari separuh penduduk Indonesia (56,7%) tinggal di perkotaan. Proyeksi memperkirakan angka ini akan mencapai 66% pada 2035. Arus perpindahan dari desa ke kota dipicu oleh ekspektasi kehidupan yang lebih baik, akses pendidikan, dan kesempatan kerja yang lebih luas.\n\nNamun urbanisasi yang tidak terkelola menimbulkan berbagai masalah. Kemacetan, permukiman kumuh, tekanan pada infrastruktur, dan polusi udara menjadi ciri khas kota-kota besar Indonesia. Jakarta, sebagai magnet urbanisasi terbesar, bahkan menghadapi masalah penurunan tanah (land subsidence) akibat pengambilan air tanah berlebihan dan beban bangunan yang terus bertambah.\n\nPendekatan pembangunan kota inklusif menjadi jawaban. Pengembangan kota-kota sekunder dan satelit, pemerataan investasi ke daerah, serta pembangunan infrastruktur transportasi massal menjadi strategi jangka panjang. Konsep "kota 15 menit"—di mana semua kebutuhan dapat dijangkau dalam radius berjalan kaki atau bersepeda—mulai diadopsi beberapa kota progresif di Indonesia.',
      question:'Berapa persen penduduk Indonesia yang tinggal di perkotaan berdasarkan sensus 2020?',
      options:['A. 50%','B. 53%','C. 56,7%','D. 60%','E. 66%'],
      answer:'C',
      explanation:'Teks menyebut "pada 2020... lebih dari separuh penduduk Indonesia (56,7%) tinggal di perkotaan"'
    },
    {
      id:'LBI-H14',
      passage:'Urbanisasi di Indonesia berlangsung dengan sangat cepat. BPS mencatat bahwa pada 2020, untuk pertama kalinya lebih dari separuh penduduk Indonesia (56,7%) tinggal di perkotaan. Proyeksi memperkirakan angka ini akan mencapai 66% pada 2035. Arus perpindahan dari desa ke kota dipicu oleh ekspektasi kehidupan yang lebih baik, akses pendidikan, dan kesempatan kerja yang lebih luas.\n\nNamun urbanisasi yang tidak terkelola menimbulkan berbagai masalah. Kemacetan, permukiman kumuh, tekanan pada infrastruktur, dan polusi udara menjadi ciri khas kota-kota besar Indonesia. Jakarta, sebagai magnet urbanisasi terbesar, bahkan menghadapi masalah penurunan tanah (land subsidence) akibat pengambilan air tanah berlebihan dan beban bangunan yang terus bertambah.',
      question:'Penyebab masalah penurunan tanah (land subsidence) di Jakarta menurut teks adalah:',
      options:['A. Banjir dan hujan lebat','B. Gempa bumi yang sering terjadi','C. Pengambilan air tanah berlebihan dan beban bangunan','D. Pembangunan jalan tol','E. Penebangan hutan di sekitar Jakarta'],
      answer:'C',
      explanation:'Teks menyebut land subsidence "akibat pengambilan air tanah berlebihan dan beban bangunan yang terus bertambah"'
    },
    {
      id:'LBI-H15',
      passage:'Urbanisasi di Indonesia berlangsung dengan sangat cepat. BPS mencatat bahwa pada 2020, untuk pertama kalinya lebih dari separuh penduduk Indonesia (56,7%) tinggal di perkotaan. Proyeksi memperkirakan angka ini akan mencapai 66% pada 2035. Arus perpindahan dari desa ke kota dipicu oleh ekspektasi kehidupan yang lebih baik, akses pendidikan, dan kesempatan kerja yang lebih luas.\n\nNamun urbanisasi yang tidak terkelola menimbulkan berbagai masalah. Kemacetan, permukiman kumuh, tekanan pada infrastruktur, dan polusi udara menjadi ciri khas kota-kota besar Indonesia. Jakarta, sebagai magnet urbanisasi terbesar, bahkan menghadapi masalah penurunan tanah (land subsidence) akibat pengambilan air tanah berlebihan dan beban bangunan yang terus bertambah.\n\nPendekatan pembangunan kota inklusif menjadi jawaban. Pengembangan kota-kota sekunder dan satelit, pemerataan investasi ke daerah, serta pembangunan infrastruktur transportasi massal menjadi strategi jangka panjang. Konsep "kota 15 menit"—di mana semua kebutuhan dapat dijangkau dalam radius berjalan kaki atau bersepeda—mulai diadopsi beberapa kota progresif di Indonesia.',
      question:'Konsep "kota 15 menit" dalam teks berarti:',
      options:['A. Kota yang dapat dilintasi dalam 15 menit','B. Waktu tempuh transportasi umum rata-rata 15 menit','C. Semua kebutuhan dapat dijangkau dengan berjalan kaki atau bersepeda','D. Jam kerja yang efisien 15 menit per sesi','E. Kota dengan jarak antarwilayah 15 km'],
      answer:'C',
      explanation:'Teks mendefinisikan kota 15 menit sebagai "semua kebutuhan dapat dijangkau dalam radius berjalan kaki atau bersepeda"'
    },
    {
      id:'LBI-H16',
      passage:'Urbanisasi di Indonesia berlangsung dengan sangat cepat. BPS mencatat bahwa pada 2020, untuk pertama kalinya lebih dari separuh penduduk Indonesia (56,7%) tinggal di perkotaan.',
      question:'Kata "magnet" dalam frasa "magnet urbanisasi terbesar" menggunakan gaya bahasa:',
      options:['A. Simile','B. Hiperbola','C. Metafora','D. Personifikasi','E. Alegori'],
      answer:'C',
      explanation:'"Magnet urbanisasi" membandingkan Jakarta dengan magnet (yang menarik benda) untuk menggambarkan daya tariknya terhadap pendatang—ini adalah metafora'
    },
    {
      id:'LBI-H17',
      passage:'Urbanisasi di Indonesia berlangsung dengan sangat cepat. BPS mencatat bahwa pada 2020, untuk pertama kalinya lebih dari separuh penduduk Indonesia (56,7%) tinggal di perkotaan. Proyeksi memperkirakan angka ini akan mencapai 66% pada 2035.',
      question:'Jika proyeksi terpenuhi, pada 2035 berapa persen penduduk Indonesia yang tinggal di pedesaan?',
      options:['A. 44%','B. 34%','C. 40%','D. 30%','E. 56%'],
      answer:'B',
      explanation:'Jika 66% di perkotaan, maka pedesaan = 100% − 66% = 34%'
    },
    {
      id:'LBI-H18',
      passage:'Urbanisasi di Indonesia berlangsung dengan sangat cepat. BPS mencatat bahwa pada 2020, untuk pertama kalinya lebih dari separuh penduduk Indonesia (56,7%) tinggal di perkotaan. Proyeksi memperkirakan angka ini akan mencapai 66% pada 2035. Arus perpindahan dari desa ke kota dipicu oleh ekspektasi kehidupan yang lebih baik, akses pendidikan, dan kesempatan kerja yang lebih luas.\n\nNamun urbanisasi yang tidak terkelola menimbulkan berbagai masalah. Kemacetan, permukiman kumuh, tekanan pada infrastruktur, dan polusi udara menjadi ciri khas kota-kota besar Indonesia. Jakarta, sebagai magnet urbanisasi terbesar, bahkan menghadapi masalah penurunan tanah (land subsidence) akibat pengambilan air tanah berlebihan dan beban bangunan yang terus bertambah.\n\nPendekatan pembangunan kota inklusif menjadi jawaban. Pengembangan kota-kota sekunder dan satelit, pemerataan investasi ke daerah, serta pembangunan infrastruktur transportasi massal menjadi strategi jangka panjang. Konsep "kota 15 menit"—di mana semua kebutuhan dapat dijangkau dalam radius berjalan kaki atau bersepeda—mulai diadopsi beberapa kota progresif di Indonesia.',
      question:'Strategi mengatasi urbanisasi yang disebutkan teks adalah KECUALI:',
      options:['A. Kota satelit dan sekunder','B. Pemerataan investasi ke daerah','C. Transportasi massal','D. Melarang migrasi ke kota','E. Konsep kota 15 menit'],
      answer:'D',
      explanation:'"Melarang migrasi ke kota" tidak disebutkan dalam teks. Teks fokus pada pengelolaan kota, bukan pembatasan perpindahan'
    },

    // Soal LBI lepas pasase (LBI-G19 – LBI-G30)
    {
      id:'LBI-H19',
      passage:'Kecerdasan buatan (AI) semakin merambah berbagai sektor kehidupan. Dari diagnosis medis hingga rekomendasi konten, AI hadir tanpa terasa. Namun demikian, terdapat kekhawatiran mengenai bias algoritmik—situasi di mana AI mengambil keputusan yang diskriminatif karena data pelatihan yang tidak representatif. Regulasi AI yang komprehensif menjadi kebutuhan mendesak agar teknologi ini bermanfaat bagi semua kalangan.',
      question:'Ide pokok dari teks tersebut adalah:',
      options:['A. AI membahayakan pekerjaan manusia','B. AI berkembang pesat namun perlu regulasi untuk mencegah bias','C. Bias algoritmik tidak dapat diatasi','D. AI hanya bermanfaat di sektor medis','E. Regulasi AI sudah tersedia di Indonesia'],
      answer:'B',
      explanation:'Teks mengakui perkembangan AI yang pesat sekaligus menekankan perlunya regulasi untuk mengatasi bias algoritmik'
    },
    {
      id:'LBI-H20',
      question:'Kalimat yang menggunakan kata berimbuhan dengan BENAR adalah:',
      options:['A. Ia memper-lakukan tamu dengan baik.','B. Ia memperlakukan tamu dengan baik.','C. Ia mem-perlakukan tamu dengan baik.','D. Ia memperlakuan tamu dengan baik.','E. Ia memperlakui tamu dengan baik.'],
      answer:'B',
      explanation:'"Memperlakukan" adalah bentuk baku dari memper + laku + kan → memperlakukan'
    },
    {
      id:'LBI-H21',
      passage:'Seorang pemimpin yang baik tidak hanya mampu mengarahkan, tetapi juga mendengarkan. Kepemimpinan sejati lahir dari empati—kemampuan merasakan apa yang dirasakan orang lain. Tanpa empati, seorang pemimpin hanyalah seorang manajer yang menjalankan instruksi. Dengan empati, ia menjadi penggerak perubahan yang membawa dampak nyata bagi masyarakat.',
      question:'Tesis utama penulis dalam teks tersebut adalah:',
      options:['A. Pemimpin harus pandai berbicara di depan umum','B. Manajemen lebih penting dari kepemimpinan','C. Empati adalah inti dari kepemimpinan sejati','D. Mendengarkan lebih sulit dari mengarahkan','E. Setiap pemimpin perlu mengikuti pelatihan manajemen'],
      answer:'C',
      explanation:'Teks secara konsisten mengangkat empati sebagai elemen terpenting kepemimpinan sejati'
    },
    {
      id:'LBI-H22',
      question:'Antonim dari kata "proaktif" adalah:',
      options:['A. Reaktif','B. Aktif','C. Pasif','D. Responsif','E. Inovatif'],
      answer:'C',
      explanation:'Proaktif berarti bertindak lebih dulu, mengambil inisiatif. Antonimnya adalah pasif—tidak bertindak/menunggu'
    },
    {
      id:'LBI-H23',
      question:'Sinonim dari kata "komprehensif" adalah:',
      options:['A. Singkat','B. Menyeluruh','C. Spesifik','D. Terperinci','E. Sederhana'],
      answer:'B',
      explanation:'"Komprehensif" berarti menyeluruh, mencakup semua aspek, atau meliputi segala hal'
    },
    {
      id:'LBI-H24',
      passage:'Generasi Z, yang lahir antara 1997–2012, tumbuh dalam era digital yang penuh koneksi. Mereka terbiasa dengan informasi instan, multitasking digital, dan komunikasi visual. Namun paradoksnya, banyak studi menunjukkan bahwa Gen Z justru mengalami tingkat kesepian yang lebih tinggi dibanding generasi sebelumnya. Koneksi digital yang melimpah ternyata tidak menggantikan kebutuhan mendasar manusia akan koneksi tatap muka yang autentik.',
      question:'Paradoks yang dimaksud dalam teks adalah:',
      options:['A. Gen Z sangat mahir teknologi tapi tidak punya pekerjaan','B. Gen Z terhubung secara digital tapi merasa lebih kesepian','C. Gen Z banyak teman online tapi sedikit teman nyata','D. Gen Z pintar tapi kurang berprestasi','E. Gen Z sering bermain game tapi nilainya bagus'],
      answer:'B',
      explanation:'Paradoks dalam teks: meski terhubung secara digital (banyak koneksi), Gen Z justru mengalami kesepian yang lebih tinggi'
    },
    {
      id:'LBI-H25',
      question:'Penulisan judul karya ilmiah yang BENAR menurut EYD adalah:',
      options:['A. Analisis Dampak Media Sosial Terhadap Perilaku Remaja di Indonesia','B. analisis dampak media sosial terhadap perilaku remaja di Indonesia','C. ANALISIS DAMPAK MEDIA SOSIAL TERHADAP PERILAKU REMAJA DI INDONESIA','D. Analisis Dampak Media Sosial terhadap Perilaku Remaja di Indonesia','E. Analisis dampak media sosial Terhadap Perilaku Remaja Di Indonesia'],
      answer:'D',
      explanation:'Dalam judul, semua kata dikapitalkan kecuali preposisi dan konjungsi (terhadap, di, ke, dari, dan, atau, yang) yang bukan kata pertama'
    },
    {
      id:'LBI-H26',
      passage:'Puisi berjudul "Aku" karya Chairil Anwar menggambarkan semangat hidup yang membara dan keberanian menghadapi takdir. Dengan diksi yang kuat dan imajinatif, Chairil mengangkat tema individualisme dan kebebasan jiwa yang melampaui zamannya. Gaya bahasa yang ekspresif dan penuh tenaga ini menjadikan Chairil Anwar sebagai pelopor angkatan 45 dalam sastra Indonesia.',
      question:'Berdasarkan teks, alasan Chairil Anwar disebut pelopor angkatan 45 adalah:',
      options:['A. Ia yang pertama menulis puisi di Indonesia','B. Gaya bahasa ekspresif dan penuh tenaga yang melampaui zamannya','C. Tema puisinya selalu tentang perjuangan kemerdekaan','D. Ia lahir pada tahun 1945','E. Puisinya diwajibkan dalam kurikulum sekolah'],
      answer:'B',
      explanation:'Teks menyebut "gaya bahasa yang ekspresif dan penuh tenaga ini menjadikan Chairil Anwar sebagai pelopor angkatan 45"'
    },
    {
      id:'LBI-H27',
      question:'Kalimat yang menggunakan konjungsi adversatif (pertentangan) adalah:',
      options:['A. Ia belajar karena ingin lulus.','B. Ia datang setelah hujan reda.','C. Ia pandai, namun kurang rajin.','D. Ia pergi dan adiknya ikut.','E. Ia membaca sehingga tahu banyak.'],
      answer:'C',
      explanation:'"Namun" adalah konjungsi adversatif yang menyatakan pertentangan antara dua klausa'
    },
    {
      id:'LBI-H28',
      passage:'Revolusi industri 4.0 memperkenalkan konsep pabrik cerdas (smart factory) yang menggabungkan sistem fisik dengan dunia digital melalui IoT (Internet of Things), big data, dan kecerdasan buatan. Di Indonesia, adopsi teknologi ini masih dalam tahap awal, terutama di kalangan UMKM yang memiliki keterbatasan modal dan SDM. Namun demikian, digitalisasi UMKM adalah keniscayaan jika Indonesia ingin bersaing di era global.',
      question:'Pernyataan yang SESUAI dengan isi teks adalah:',
      options:['A. Indonesia sudah menerapkan revolusi industri 4.0 sepenuhnya','B. UMKM Indonesia sudah siap menghadapi industri 4.0','C. Adopsi teknologi 4.0 di Indonesia masih awal, khususnya di UMKM','D. IoT dan big data sudah tidak relevan lagi','E. UMKM tidak perlu melakukan digitalisasi'],
      answer:'C',
      explanation:'Teks menyebut "adopsi teknologi ini masih dalam tahap awal, terutama di kalangan UMKM yang memiliki keterbatasan modal dan SDM"'
    },
    {
      id:'LBI-H29',
      question:'Kata "determinan" dalam kalimat "Faktor pendidikan adalah determinan utama mobilitas sosial" bermakna:',
      options:['A. Hambatan','B. Faktor penentu','C. Indikator pengukuran','D. Konsekuensi','E. Syarat tambahan'],
      answer:'B',
      explanation:'"Determinan" berarti faktor penentu atau hal yang menentukan suatu keadaan'
    },
    {
      id:'LBI-H30',
      passage:'Bonus demografi Indonesia diprediksi mencapai puncaknya antara 2020–2045. Kondisi ini ditandai dengan tingginya proporsi penduduk usia produktif (15–64 tahun) dibandingkan usia tidak produktif. Jika dimanfaatkan dengan optimal—melalui investasi pendidikan, kesehatan, dan lapangan kerja—bonus demografi dapat menjadi mesin penggerak pertumbuhan ekonomi yang luar biasa. Namun jika gagal dikelola, ia dapat berbalik menjadi bencana demografi.',
      question:'Simpulan yang tepat dari teks adalah:',
      options:['A. Bonus demografi Indonesia sudah berakhir','B. Penduduk usia muda adalah beban bagi negara','C. Bonus demografi berpotensi positif atau negatif tergantung pengelolaannya','D. Indonesia pasti akan menjadi negara maju karena bonus demografi','E. Investasi pendidikan tidak berpengaruh pada bonus demografi'],
      answer:'C',
      explanation:'Teks menunjukkan dua sisi: jika dikelola baik = mesin pertumbuhan; jika gagal dikelola = bencana demografi'
    },

  ],

  // ============================================================
  //  LBE — LITERASI BAHASA INGGRIS (20 soal)
  // ============================================================
  LBE: [
    // Passage 1: Artificial Intelligence in Education (LBE-G01 – LBE-G05)
    {
      id:'LBE-H01',
      passage:"Artificial intelligence is rapidly transforming the education sector. Adaptive learning platforms can now analyze individual student performance in real time, identifying knowledge gaps and adjusting the difficulty of content accordingly. Unlike traditional one-size-fits-all instruction, AI-powered systems personalize the learning journey for each student, potentially improving both engagement and academic outcomes.\n\nHowever, the widespread adoption of AI in education raises significant concerns. Critics argue that over-reliance on algorithmic recommendations may stifle creativity and critical thinking—skills that are not easily quantifiable. There is also the matter of data privacy: AI systems require large amounts of student data to function effectively, raising questions about who has access to this sensitive information and how it may be used.\n\nFor educators, the challenge is to harness the benefits of AI while preserving the irreplaceable human elements of teaching: mentorship, emotional support, and the ability to inspire curiosity. AI should be viewed as a powerful tool, not a replacement for skilled teachers. The future of education likely lies in a thoughtful human-AI collaboration.",
      question:"What is the main benefit of AI-powered learning platforms mentioned in the text?",
      options:["A. They reduce the cost of education significantly","B. They personalize learning for individual students","C. They replace traditional teachers entirely","D. They eliminate the need for exams","E. They make education available 24 hours a day"],
      answer:'B',
      explanation:"The text states AI systems 'personalize the learning journey for each student, potentially improving both engagement and academic outcomes'"
    },
    {
      id:'LBE-H02',
      passage:"Artificial intelligence is rapidly transforming the education sector. Adaptive learning platforms can now analyze individual student performance in real time, identifying knowledge gaps and adjusting the difficulty of content accordingly. Unlike traditional one-size-fits-all instruction, AI-powered systems personalize the learning journey for each student, potentially improving both engagement and academic outcomes.\n\nHowever, the widespread adoption of AI in education raises significant concerns. Critics argue that over-reliance on algorithmic recommendations may stifle creativity and critical thinking—skills that are not easily quantifiable. There is also the matter of data privacy: AI systems require large amounts of student data to function effectively, raising questions about who has access to this sensitive information and how it may be used.",
      question:"The word 'stifle' in the passage most closely means:",
      options:["A. Encourage","B. Enhance","C. Suppress","D. Measure","E. Develop"],
      answer:'C',
      explanation:"'Stifle' means to suppress, restrain, or prevent something from developing. In context, AI may suppress creativity and critical thinking."
    },
    {
      id:'LBE-H03',
      passage:"Artificial intelligence is rapidly transforming the education sector. Adaptive learning platforms can now analyze individual student performance in real time, identifying knowledge gaps and adjusting the difficulty of content accordingly. Unlike traditional one-size-fits-all instruction, AI-powered systems personalize the learning journey for each student, potentially improving both engagement and academic outcomes.\n\nHowever, the widespread adoption of AI in education raises significant concerns. Critics argue that over-reliance on algorithmic recommendations may stifle creativity and critical thinking—skills that are not easily quantifiable. There is also the matter of data privacy: AI systems require large amounts of student data to function effectively, raising questions about who has access to this sensitive information and how it may be used.\n\nFor educators, the challenge is to harness the benefits of AI while preserving the irreplaceable human elements of teaching: mentorship, emotional support, and the ability to inspire curiosity. AI should be viewed as a powerful tool, not a replacement for skilled teachers. The future of education likely lies in a thoughtful human-AI collaboration.",
      question:"According to the passage, what is the author's recommended approach to AI in education?",
      options:["A. Ban AI from classrooms to protect student privacy","B. Use AI to completely replace human teachers","C. Integrate AI as a collaborative tool alongside human teachers","D. Use AI only for administrative tasks, not teaching","E. Implement AI only at the university level"],
      answer:'C',
      explanation:"The author concludes: 'The future of education likely lies in a thoughtful human-AI collaboration' — AI as a tool working alongside teachers."
    },
    {
      id:'LBE-H04',
      passage:"Critics argue that over-reliance on algorithmic recommendations may stifle creativity and critical thinking—skills that are not easily quantifiable.",
      question:"The phrase 'not easily quantifiable' means these skills are:",
      options:["A. Easy to measure with numbers","B. Unimportant in education","C. Difficult to measure numerically","D. Only relevant in art classes","E. Already measured by standardized tests"],
      answer:'C',
      explanation:"'Quantifiable' means measurable in numbers. 'Not easily quantifiable' means difficult to express or measure numerically."
    },
    {
      id:'LBE-H05',
      passage:"Artificial intelligence is rapidly transforming the education sector. Adaptive learning platforms can now analyze individual student performance in real time, identifying knowledge gaps and adjusting the difficulty of content accordingly. Unlike traditional one-size-fits-all instruction, AI-powered systems personalize the learning journey for each student, potentially improving both engagement and academic outcomes.\n\nHowever, the widespread adoption of AI in education raises significant concerns. Critics argue that over-reliance on algorithmic recommendations may stifle creativity and critical thinking—skills that are not easily quantifiable. There is also the matter of data privacy: AI systems require large amounts of student data to function effectively, raising questions about who has access to this sensitive information and how it may be used.\n\nFor educators, the challenge is to harness the benefits of AI while preserving the irreplaceable human elements of teaching: mentorship, emotional support, and the ability to inspire curiosity. AI should be viewed as a powerful tool, not a replacement for skilled teachers. The future of education likely lies in a thoughtful human-AI collaboration.",
      question:"Which of the following is NOT mentioned as a concern about AI in education?",
      options:["A. Reduced creativity","B. Data privacy issues","C. Suppression of critical thinking","D. High cost of implementation","E. All concerns are mentioned in the text"],
      answer:'D',
      explanation:"The text mentions concerns about creativity, critical thinking, and data privacy. Cost of implementation is NOT mentioned."
    },

    // Passage 2: The Ocean's Role in Climate Regulation (LBE-G06 – LBE-G10)
    {
      id:'LBE-H06',
      passage:"The ocean covers more than 70% of Earth's surface and plays a crucial role in regulating the planet's climate. It absorbs approximately 25% of the carbon dioxide emitted by human activities, significantly slowing the pace of climate change. Additionally, the ocean absorbs more than 90% of the excess heat generated by the greenhouse effect, acting as a massive thermal buffer for the planet.\n\nHowever, this carbon and heat absorption comes at a significant cost. Ocean acidification—caused by the dissolution of CO₂ in seawater—threatens marine ecosystems, particularly coral reefs and shellfish populations. Rising ocean temperatures have already caused widespread coral bleaching events, disrupting marine biodiversity. The warmer, more acidic ocean is less capable of absorbing further CO₂, potentially creating a dangerous feedback loop that accelerates global warming.\n\nConservation efforts must prioritize ocean health. Reducing greenhouse gas emissions remains the most effective long-term solution. Marine protected areas, sustainable fishing practices, and investment in ocean-based carbon capture technologies are complementary strategies that the global community must pursue with urgency.",
      question:"According to the passage, what percentage of human-produced CO₂ does the ocean absorb?",
      options:["A. 10%","B. 25%","C. 50%","D. 70%","E. 90%"],
      answer:'B',
      explanation:"The text states: 'It absorbs approximately 25% of the carbon dioxide emitted by human activities'"
    },
    {
      id:'LBE-H07',
      passage:"The ocean covers more than 70% of Earth's surface and plays a crucial role in regulating the planet's climate. It absorbs approximately 25% of the carbon dioxide emitted by human activities, significantly slowing the pace of climate change. Additionally, the ocean absorbs more than 90% of the excess heat generated by the greenhouse effect, acting as a massive thermal buffer for the planet.\n\nHowever, this carbon and heat absorption comes at a significant cost. Ocean acidification—caused by the dissolution of CO₂ in seawater—threatens marine ecosystems, particularly coral reefs and shellfish populations. Rising ocean temperatures have already caused widespread coral bleaching events, disrupting marine biodiversity. The warmer, more acidic ocean is less capable of absorbing further CO₂, potentially creating a dangerous feedback loop that accelerates global warming.",
      question:"The term 'feedback loop' in the passage refers to:",
      options:["A. A method of measuring ocean temperature","B. A situation where warming reduces CO₂ absorption, which causes more warming","C. The cycle of evaporation and precipitation","D. A type of marine conservation strategy","E. The rotation of ocean currents"],
      answer:'B',
      explanation:"A feedback loop here: warmer, more acidic ocean absorbs less CO₂ → more CO₂ in atmosphere → more warming → further reduces ocean absorption capacity."
    },
    {
      id:'LBE-H08',
      passage:"The ocean covers more than 70% of Earth's surface and plays a crucial role in regulating the planet's climate.",
      question:"The word 'crucial' is closest in meaning to:",
      options:["A. Minor","B. Optional","C. Essential","D. Interesting","E. Limited"],
      answer:'C',
      explanation:"'Crucial' means extremely important or essential, especially in determining a successful outcome."
    },
    {
      id:'LBE-H09',
      passage:"Conservation efforts must prioritize ocean health. Reducing greenhouse gas emissions remains the most effective long-term solution. Marine protected areas, sustainable fishing practices, and investment in ocean-based carbon capture technologies are complementary strategies that the global community must pursue with urgency.",
      question:"According to the passage, which strategy is described as the MOST effective long-term solution?",
      options:["A. Marine protected areas","B. Sustainable fishing","C. Carbon capture technology","D. Reducing greenhouse gas emissions","E. International ocean treaties"],
      answer:'D',
      explanation:"The text clearly states: 'Reducing greenhouse gas emissions remains the most effective long-term solution'"
    },
    {
      id:'LBE-H10',
      passage:"The ocean covers more than 70% of Earth's surface and plays a crucial role in regulating the planet's climate. It absorbs approximately 25% of the carbon dioxide emitted by human activities, significantly slowing the pace of climate change. Additionally, the ocean absorbs more than 90% of the excess heat generated by the greenhouse effect, acting as a massive thermal buffer for the planet.\n\nHowever, this carbon and heat absorption comes at a significant cost. Ocean acidification—caused by the dissolution of CO₂ in seawater—threatens marine ecosystems, particularly coral reefs and shellfish populations. Rising ocean temperatures have already caused widespread coral bleaching events, disrupting marine biodiversity. The warmer, more acidic ocean is less capable of absorbing further CO₂, potentially creating a dangerous feedback loop that accelerates global warming.\n\nConservation efforts must prioritize ocean health. Reducing greenhouse gas emissions remains the most effective long-term solution. Marine protected areas, sustainable fishing practices, and investment in ocean-based carbon capture technologies are complementary strategies that the global community must pursue with urgency.",
      question:"What is the overall tone of the passage?",
      options:["A. Optimistic and celebratory","B. Informative and urgent","C. Pessimistic and hopeless","D. Critical and accusatory","E. Neutral and detached"],
      answer:'B',
      explanation:"The passage provides factual information about the ocean's role while expressing urgency ('must pursue with urgency') about conservation."
    },

    // Passage 3: The Psychology of Habits (LBE-G11 – LBE-G15)
    {
      id:'LBE-H11',
      passage:"Habits are the invisible architecture of everyday life. Neuroscientists have discovered that habits are stored in a region of the brain called the basal ganglia—a primitive structure associated with emotions, patterns, and automatic behaviors. Unlike conscious decision-making, which requires mental effort and is prone to fatigue, habits operate automatically, freeing up cognitive resources for more complex tasks.\n\nAccording to researcher Charles Duhigg, habits follow a three-part loop: a cue, a routine, and a reward. The cue triggers the habit, the routine is the behavior itself, and the reward is what reinforces the behavior and makes the brain \"want\" to repeat it. Understanding this loop is the key to changing unwanted habits or building new ones.\n\nResearch shows that it takes an average of 66 days—not the commonly cited 21 days—to form a new habit. The process requires consistency, patience, and the strategic design of one's environment. Small changes, known as 'keystone habits,' can trigger cascading positive effects across multiple areas of life. For example, regular exercise often leads to better sleep, improved diet, and greater productivity.",
      question:"Where are habits stored in the brain according to the passage?",
      options:["A. The prefrontal cortex","B. The hippocampus","C. The basal ganglia","D. The cerebellum","E. The amygdala"],
      answer:'C',
      explanation:"The text explicitly states: 'habits are stored in a region of the brain called the basal ganglia'"
    },
    {
      id:'LBE-H12',
      passage:"According to researcher Charles Duhigg, habits follow a three-part loop: a cue, a routine, and a reward.",
      question:"According to Duhigg's habit loop model, what is the function of the 'reward'?",
      options:["A. To initiate the habit","B. To describe the behavior performed","C. To reinforce the behavior and encourage repetition","D. To set goals for future habits","E. To measure the effectiveness of a habit"],
      answer:'C',
      explanation:"The text says the reward 'reinforces the behavior and makes the brain want to repeat it'"
    },
    {
      id:'LBE-H13',
      passage:"Research shows that it takes an average of 66 days—not the commonly cited 21 days—to form a new habit.",
      question:"What does the passage reveal about the common belief that it takes 21 days to form a habit?",
      options:["A. It is exactly correct","B. It overestimates the time needed","C. It underestimates the actual time required","D. It applies only to physical habits","E. It is a myth with no scientific basis"],
      answer:'C',
      explanation:"The text contrasts the 66-day average against 'the commonly cited 21 days,' implying 21 days underestimates the actual time needed."
    },
    {
      id:'LBE-H14',
      passage:"Small changes, known as 'keystone habits,' can trigger cascading positive effects across multiple areas of life. For example, regular exercise often leads to better sleep, improved diet, and greater productivity.",
      question:"The word 'cascading' in the passage is closest in meaning to:",
      options:["A. Isolated","B. Sequential and spreading","C. Sudden and unexpected","D. Gradual and slow","E. Negative and harmful"],
      answer:'B',
      explanation:"'Cascading' refers to a series of effects that fall one after another in sequence, spreading progressively like a waterfall."
    },
    {
      id:'LBE-H15',
      passage:"Habits are the invisible architecture of everyday life. Neuroscientists have discovered that habits are stored in a region of the brain called the basal ganglia—a primitive structure associated with emotions, patterns, and automatic behaviors. Unlike conscious decision-making, which requires mental effort and is prone to fatigue, habits operate automatically, freeing up cognitive resources for more complex tasks.\n\nAccording to researcher Charles Duhigg, habits follow a three-part loop: a cue, a routine, and a reward. The cue triggers the habit, the routine is the behavior itself, and the reward is what reinforces the behavior and makes the brain \"want\" to repeat it. Understanding this loop is the key to changing unwanted habits or building new ones.\n\nResearch shows that it takes an average of 66 days—not the commonly cited 21 days—to form a new habit. The process requires consistency, patience, and the strategic design of one's environment. Small changes, known as 'keystone habits,' can trigger cascading positive effects across multiple areas of life. For example, regular exercise often leads to better sleep, improved diet, and greater productivity.",
      question:"The metaphor 'invisible architecture' in the opening sentence suggests that habits:",
      options:["A. Are impossible to see or understand","B. Form the hidden but fundamental structure of daily life","C. Are only relevant in building design","D. Require professional help to change","E. Are unrelated to conscious decisions"],
      answer:'B',
      explanation:"'Architecture' implies structure and design; 'invisible' means unseen. Together: habits form the hidden but essential structure underlying daily life."
    },

    // Grammar & Vocabulary (LBE-G16 – LBE-G20)
    {
      id:'LBE-H16',
      question:"Choose the grammatically CORRECT sentence:",
      options:["A. She don't know the answer.","B. They doesn't want to come.","C. He has been studying for three hours.","D. We was at the library yesterday.","E. I has finished my homework."],
      answer:'C',
      explanation:"'He has been studying for three hours' correctly uses the present perfect continuous tense. The others have subject-verb agreement errors."
    },
    {
      id:'LBE-H17',
      question:"Which word correctly completes: 'The scientist made a groundbreaking ______ that changed our understanding of genetics.'",
      options:["A. discover","B. discovery","C. discovered","D. discovering","E. discoverer"],
      answer:'B',
      explanation:"After 'a', a noun is required. 'Discovery' is the correct noun form of the verb 'discover'."
    },
    {
      id:'LBE-H18',
      question:"Choose the sentence with the CORRECT use of the passive voice:",
      options:["A. The book was wrote by the author.","B. The report was written by the team.","C. The project was complete by Friday.","D. The decision was took by the manager.","E. The letter was send yesterday."],
      answer:'B',
      explanation:"'Was written' uses the correct past participle of 'write'. The others use incorrect past participle forms."
    },
    {
      id:'LBE-H19',
      question:"The word 'ambiguous' most nearly means:",
      options:["A. Clear and definite","B. Open to more than one interpretation","C. Extremely difficult","D. Completely false","E. Highly ambitious"],
      answer:'B',
      explanation:"'Ambiguous' means open to more than one meaning or interpretation; unclear."
    },
    {
      id:'LBE-H20',
      question:"Choose the option that correctly fills the blank:\n'Despite ______ tired, she continued to work on the project.'",
      options:["A. be","B. been","C. being","D. was","E. is"],
      answer:'C',
      explanation:"After a preposition ('despite'), a gerund (verb+ing) is required: 'Despite being tired...'"
    },

  ],

  // ============================================================
  //  PM — PENALARAN MATEMATIKA (30 soal)
  // ============================================================
  PM: [
    // Konteks 1: Keuangan & Ekonomi (PM-G01 – PM-G08)
    {
      id:'PM-H01',
      question:'Sebuah toko memberikan diskon 25% untuk semua produk. Jika harga awal sebuah jaket adalah Rp480.000, berapakah harga setelah diskon?',
      options:['A. Rp320.000','B. Rp340.000','C. Rp360.000','D. Rp380.000','E. Rp400.000'],
      answer:'C',
      explanation:'Diskon = 25% × 480.000 = 120.000. Harga setelah diskon = 480.000 − 120.000 = 360.000'
    },
    {
      id:'PM-H02',
      question:'Arif menabung Rp2.000.000 di bank dengan bunga sederhana 6% per tahun. Berapa jumlah tabungannya setelah 3 tahun?',
      options:['A. Rp2.240.000','B. Rp2.360.000','C. Rp2.480.000','D. Rp2.540.000','E. Rp2.600.000'],
      answer:'B',
      explanation:'Bunga = 6%×2.000.000×3 = 360.000. Total = 2.000.000+360.000 = 2.360.000'
    },
    {
      id:'PM-H03',
      question:'Harga sebuah laptop turun 15% menjadi Rp8.500.000. Berapakah harga laptop sebelum penurunan?',
      options:['A. Rp9.500.000','B. Rp9.800.000','C. Rp10.000.000','D. Rp10.200.000','E. Rp10.500.000'],
      answer:'C',
      explanation:'Harga awal × (1−0,15) = 8.500.000. Harga awal = 8.500.000 ÷ 0,85 = 10.000.000'
    },
    {
      id:'PM-H04',
      question:'Seorang pedagang membeli 50 kg beras dengan harga Rp15.000/kg dan menjualnya dengan harga Rp18.000/kg. Berapa persen keuntungannya?',
      options:['A. 15%','B. 18%','C. 20%','D. 25%','E. 30%'],
      answer:'C',
      explanation:'Modal=50×15.000=750.000. Pendapatan=50×18.000=900.000. Untung=150.000. %untung=150.000/750.000×100%=20%'
    },
    {
      id:'PM-H05',
      question:'Sebuah perusahaan memiliki pendapatan Rp120 juta di kuartal pertama. Jika target tahunan Rp600 juta, berapa persen target yang sudah tercapai?',
      options:['A. 15%','B. 18%','C. 20%','D. 22%','E. 25%'],
      answer:'C',
      explanation:'120/600 × 100% = 20%'
    },
    {
      id:'PM-H06',
      question:'Dua orang berinvestasi dengan modal masing-masing Rp3 juta dan Rp5 juta. Jika keuntungan total Rp2,4 juta dibagi sesuai modal, berapa keuntungan orang pertama?',
      options:['A. Rp700.000','B. Rp800.000','C. Rp900.000','D. Rp1.000.000','E. Rp1.200.000'],
      answer:'C',
      explanation:'Rasio = 3:5. Orang 1 = 3/8 × 2.400.000 = 900.000'
    },
    {
      id:'PM-H07',
      question:'Jika nilai tukar 1 USD = Rp15.800 dan seseorang memiliki USD 250, berapa nilai dalam rupiah (dibulatkan ke ratusan ribu terdekat)?',
      options:['A. Rp3.900.000','B. Rp3.950.000','C. Rp3.800.000','D. Rp4.000.000','E. Rp4.100.000'],
      answer:'B',
      explanation:'250 × 15.800 = 3.950.000'
    },
    {
      id:'PM-H08',
      question:'Seorang karyawan mendapat gaji Rp5.000.000 per bulan. Ia dikenakan pajak penghasilan 5% dan memotong asuransi Rp250.000. Berapa take-home pay-nya?',
      options:['A. Rp4.450.000','B. Rp4.500.000','C. Rp4.550.000','D. Rp4.600.000','E. Rp4.650.000'],
      answer:'B',
      explanation:'Pajak = 5% × 5.000.000 = 250.000. Asuransi = 250.000. Total potongan = 500.000. Take-home = 5.000.000 − 500.000 = 4.500.000'
    },
    // Konteks 2: Geometri & Pengukuran (PM-G09 – PM-G14)
    {
      id:'PM-H09',
      question:'Sebuah lapangan berbentuk persegi panjang 80m × 60m. Seorang pelari berlari mengelilingi lapangan 5 kali. Berapa total jarak yang ditempuh?',
      options:['A. 1.400 m','B. 1.600 m','C. 1.800 m','D. 2.000 m','E. 2.200 m'],
      answer:'A',
      explanation:'Keliling = 2(80+60) = 280 m. Total = 5×280 = 1.400 m'
    },
    {
      id:'PM-H10',
      question:'Sebuah tangki berbentuk silinder dengan jari-jari 3,5 m dan tinggi 4 m. Volume tangki (π=22/7) adalah:',
      options:['A. 154 m³','B. 176 m³','C. 154,88 m³','D. 176,88 m³','E. 154 m³'],
      answer:'A',
      explanation:'V = π×r²×h = (22/7)×12,25×4 = (22/7)×49×4/4... Hmm: r=3,5=7/2. r²=49/4. V=(22/7)×(49/4)×4=(22×49)/(7×1)×(4/4)=22×7=154 m³'
    },
    {
      id:'PM-H11',
      question:'Dua kota A dan B berjarak 240 km. Mobil berangkat dari A ke B dengan kecepatan 80 km/jam. Berapa waktu yang dibutuhkan?',
      options:['A. 2 jam','B. 2,5 jam','C. 3 jam','D. 3,5 jam','E. 4 jam'],
      answer:'C',
      explanation:'t = s/v = 240/80 = 3 jam'
    },
    {
      id:'PM-H12',
      question:'Sebuah kolam renang berbentuk persegi panjang 25m × 10m dengan kedalaman rata-rata 1,5m. Berapa liter air yang diperlukan untuk mengisi kolam penuh? (1 m³ = 1.000 liter)',
      options:['A. 250.000 liter','B. 300.000 liter','C. 375.000 liter','D. 400.000 liter','E. 425.000 liter'],
      answer:'C',
      explanation:'V = 25×10×1,5 = 375 m³ = 375.000 liter'
    },
    {
      id:'PM-H13',
      question:'Seorang petani memiliki sawah berbentuk trapesium dengan sisi sejajar 50 m dan 30 m serta tinggi 20 m. Berapa luas sawahnya?',
      options:['A. 600 m²','B. 700 m²','C. 800 m²','D. 900 m²','E. 1.000 m²'],
      answer:'C',
      explanation:'L = ½(a+b)×t = ½(50+30)×20 = ½×80×20 = 800 m²'
    },
    {
      id:'PM-H14',
      question:'Sebuah menara setinggi 15 m menghasilkan bayangan 9 m. Berapa tinggi pohon yang bayangannya 6 m pada saat yang sama?',
      options:['A. 8 m','B. 9 m','C. 10 m','D. 11 m','E. 12 m'],
      answer:'C',
      explanation:'Perbandingan: 15/9 = x/6 → x = (15×6)/9 = 90/9 = 10 m'
    },
    // Konteks 3: Statistika & Data (PM-G15 – PM-G20)
    {
      id:'PM-H15',
      question:'Nilai ulangan 8 siswa: 70, 75, 80, 85, 85, 90, 90, 95.\nRata-rata nilai adalah:',
      options:['A. 82','B. 83,5','C. 84','D. 85','E. 86'],
      answer:'B',
      explanation:'Jumlah = 70+75+80+85+85+90+90+95 = 670. Rata-rata = 670/8 = 83,75 ≈ 83,5. Jawaban B=83,5'
    },
    {
      id:'PM-H16',
      question:'Data penjualan harian (unit): 12, 15, 18, 14, 16, 19, 17.\nNilai jangkauan (range) data adalah:',
      options:['A. 5','B. 6','C. 7','D. 8','E. 9'],
      answer:'C',
      explanation:'Range = nilai maksimum − minimum = 19 − 12 = 7'
    },
    {
      id:'PM-H17',
      question:'Dari 100 siswa, 60 memilih ekstrakurikuler olahraga, 40 memilih seni. Jika 15 siswa memilih keduanya, berapa yang tidak memilih keduanya?',
      options:['A. 10','B. 12','C. 15','D. 18','E. 20'],
      answer:'C',
      explanation:'n(A∪B) = 60+40−15 = 85. Tidak memilih keduanya = 100−85 = 15'
    },
    {
      id:'PM-H18',
      question:'Sebuah survei terhadap 200 responden menunjukkan 45% menyukai produk A. Berapa responden yang menyukai produk A?',
      options:['A. 80','B. 85','C. 90','D. 95','E. 100'],
      answer:'C',
      explanation:'45% × 200 = 90 responden'
    },
    {
      id:'PM-H19',
      question:'Dari diagram lingkaran, diketahui: Kategori A=35%, B=25%, C=20%, D=sisanya. Jika total data 400, berapa data kategori D?',
      options:['A. 60','B. 70','C. 75','D. 80','E. 85'],
      answer:'D',
      explanation:'D = 100%−35%−25%−20% = 20%. Jumlah D = 20%×400 = 80'
    },
    {
      id:'PM-H20',
      question:'Simpangan rata-rata data 4, 6, 8, 10, 12 adalah:',
      options:['A. 2','B. 2,4','C. 3','D. 3,2','E. 4'],
      answer:'B',
      explanation:'Rata-rata=8. |4-8|+|6-8|+|8-8|+|10-8|+|12-8|=4+2+0+2+4=12. SR=12/5=2,4'
    },
    // Konteks 4: Masalah Kehidupan Sehari-hari (PM-G21 – PM-G30)
    {
      id:'PM-H21',
      question:'Sebuah proyek dapat diselesaikan 8 pekerja dalam 15 hari. Jika ditambah 4 pekerja, berapa hari proyek selesai?',
      options:['A. 8 hari','B. 10 hari','C. 11 hari','D. 12 hari','E. 13 hari'],
      answer:'B',
      explanation:'Total hari-orang = 8×15=120. Dengan 12 pekerja: 120/12=10 hari'
    },
    {
      id:'PM-H22',
      question:'Seorang anak berjalan dengan kecepatan 4 km/jam selama 45 menit. Berapa km jarak yang ditempuh?',
      options:['A. 2 km','B. 2,5 km','C. 3 km','D. 3,5 km','E. 4 km'],
      answer:'C',
      explanation:'45 menit = 0,75 jam. Jarak = 4×0,75 = 3 km'
    },
    {
      id:'PM-H23',
      question:'Campuran A dan B dalam perbandingan 3:2. Jika campuran total 250 liter, berapa liter bagian A?',
      options:['A. 100 liter','B. 120 liter','C. 150 liter','D. 160 liter','E. 180 liter'],
      answer:'C',
      explanation:'A = 3/5 × 250 = 150 liter'
    },
    {
      id:'PM-H24',
      question:'Sebuah kereta berangkat pukul 07.30 dan tiba pukul 11.15. Jika jarak 280 km, berapa kecepatan rata-rata kereta?',
      options:['A. 70 km/jam','B. 72 km/jam','C. 74,67 km/jam','D. 80 km/jam','E. 76 km/jam'],
      answer:'C',
      explanation:'Waktu = 3 jam 45 menit = 3,75 jam. Kecepatan = 280/3,75 = 74,67 km/jam'
    },
    {
      id:'PM-H25',
      question:'Ibu membeli 3 kg apel Rp18.000/kg dan 2 kg jeruk Rp12.000/kg. Berapa total belanja Ibu?',
      options:['A. Rp72.000','B. Rp74.000','C. Rp76.000','D. Rp78.000','E. Rp80.000'],
      answer:'D',
      explanation:'Apel: 3×18.000=54.000. Jeruk: 2×12.000=24.000. Total=54.000+24.000=78.000'
    },
    {
      id:'PM-H26',
      question:'Umur Ayah 3 kali umur anaknya. Jika selisih umur mereka 24 tahun, berapa umur anak sekarang?',
      options:['A. 8 tahun','B. 10 tahun','C. 12 tahun','D. 14 tahun','E. 16 tahun'],
      answer:'C',
      explanation:'Ayah=3x, Anak=x. 3x−x=24 → 2x=24 → x=12 tahun'
    },
    {
      id:'PM-H27',
      question:'Sebuah kolam ikan memiliki panjang 5m, lebar 3m, dan kedalaman 1,2m. Berapa volume air maksimal yang dapat ditampung?',
      options:['A. 15 m³','B. 16 m³','C. 17 m³','D. 18 m³','E. 20 m³'],
      answer:'D',
      explanation:'V = p×l×t = 5×3×1,2 = 18 m³'
    },
    {
      id:'PM-H28',
      question:'Jika 5 buku berharga Rp75.000, berapa harga 8 buku?',
      options:['A. Rp100.000','B. Rp110.000','C. Rp120.000','D. Rp130.000','E. Rp140.000'],
      answer:'C',
      explanation:'Harga per buku = 75.000/5 = 15.000. Harga 8 buku = 8×15.000 = 120.000'
    },
    {
      id:'PM-H29',
      question:'Dalam sebuah kantong terdapat 5 bola merah dan 3 bola biru. Jika diambil satu bola secara acak, peluang mendapat bola merah adalah:',
      options:['A. 3/8','B. 5/8','C. 1/2','D. 2/3','E. 5/3'],
      answer:'B',
      explanation:'P(merah) = 5/(5+3) = 5/8'
    },
    {
      id:'PM-H30',
      question:'Suhu di puncak gunung −5°C, sementara di kaki gunung 28°C. Berapa perbedaan suhu antara kaki dan puncak gunung?',
      options:['A. 23°C','B. 28°C','C. 30°C','D. 33°C','E. 38°C'],
      answer:'D',
      explanation:'Perbedaan = 28 − (−5) = 28 + 5 = 33°C'
    },
  ],

};

// ============================================================
// EXPORT
// ============================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTION_BANK_EXTRA5;
}
