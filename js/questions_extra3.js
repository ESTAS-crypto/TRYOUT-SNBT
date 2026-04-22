/**
 * SNBT Tryout Pro — Bank Soal Tambahan Set 3 (questions_extra2.js)
 * 170 soal ekstra — semua baru, tidak ada yang sama dengan Set 1 & Set 2
 * Distribusi: PU=30, PPU=25, PBM=30, LBI=30, LBE=25, PM=30
 * Digabung via getShuffledQuestions() bersama QUESTION_BANK & QUESTION_BANK_EXTRA
 */

const QUESTION_BANK_EXTRA3 = {

  /* ================================================================
   * PU — PENALARAN UMUM (30 soal)
   * ================================================================ */
  PU: [
    // ── Deret & Pola (10 soal) ────────────────────────────────────
    { id:'PU-F01', question:'Deret: 2, 6, 12, 20, 30, __', options:['A. 38','B. 40','C. 42','D. 44','E. 46'], answer:'C', explanation:'Selisih: +4,+6,+8,+10,+12 → 30+12=42' },
    { id:'PU-F02', question:'Deret: 100, 50, 25, 12,5, __', options:['A. 5','B. 6','C. 6,25','D. 7','E. 8'], answer:'C', explanation:'Pola ÷2: 12,5÷2=6,25' },
    { id:'PU-F03', question:'Deret: 7, 11, 16, 22, 29, __', options:['A. 35','B. 36','C. 37','D. 38','E. 39'], answer:'C', explanation:'Selisih: +4,+5,+6,+7,+8 → 29+8=37' },
    { id:'PU-F04', question:'Deret: 3, 6, 11, 18, 27, __', options:['A. 36','B. 37','C. 38','D. 39','E. 40'], answer:'C', explanation:'Selisih: +3,+5,+7,+9,+11 → 27+11=38' },
    { id:'PU-F05', question:'Deret: 256, 64, 16, 4, __', options:['A. 0','B. 0,5','C. 1','D. 2','E. 3'], answer:'C', explanation:'Pola ÷4: 4÷4=1' },
    { id:'PU-F06', question:'Deret Fibonacci: 1, 1, 2, 3, 5, 8, 13, __', options:['A. 18','B. 19','C. 20','D. 21','E. 22'], answer:'D', explanation:'8+13=21 (jumlah dua suku sebelumnya)' },
    { id:'PU-F07', question:'Deret: 2, 5, 11, 23, 47, __', options:['A. 90','B. 93','C. 95','D. 97','E. 99'], answer:'C', explanation:'Pola ×2+1: 47×2+1=95' },
    { id:'PU-F08', question:'Deret huruf: A, C, F, J, O, __', options:['A. T','B. U','C. V','D. W','E. X'], answer:'B', explanation:'Posisi alfabet: 1,3,6,10,15,21→U. Selisih: +2,+3,+4,+5,+6' },
    { id:'PU-F09', question:'Deret: 1, 3, 7, 15, 31, __', options:['A. 55','B. 59','C. 61','D. 63','E. 65'], answer:'D', explanation:'Pola ×2+1: 31×2+1=63' },
    { id:'PU-F10', question:'Deret: 4, 9, 16, 25, 36, __', options:['A. 45','B. 47','C. 49','D. 51','E. 53'], answer:'C', explanation:'Bilangan kuadrat: 2²,3²,4²,5²,6²,7²=49' },

    // ── Analogi (8 soal) ──────────────────────────────────────────
    { id:'PU-F11', question:'BUKU : PERPUSTAKAAN = LUKISAN : ?', options:['A. Kanvas','B. Galeri/Museum','C. Seniman','D. Pameran','E. Studio'], answer:'B', explanation:'Buku disimpan di Perpustakaan; Lukisan dipamerkan di Galeri/Museum' },
    { id:'PU-F12', question:'GURU : MURID = DOKTER : ?', options:['A. Suster','B. Rumah sakit','C. Pasien','D. Obat','E. Klinik'], answer:'C', explanation:'Guru mengajar Murid; Dokter mengobati Pasien' },
    { id:'PU-F13', question:'KODE : PESAN = GEMBOK : ?', options:['A. Pintu','B. Keamanan','C. Kunci','D. Besi','E. Laci'], answer:'C', explanation:'Kode mengunci Pesan; Gembok dibuka dengan Kunci' },
    { id:'PU-F14', question:'TELINGA : MENDENGAR = HIDUNG : ?', options:['A. Bernapas','B. Mencium','C. Merasakan','D. Melihat','E. Menelan'], answer:'B', explanation:'Telinga berfungsi untuk Mendengar; Hidung untuk Mencium (aroma)' },
    { id:'PU-F15', question:'MATAHARI : TATA SURYA = NUKLEUS : ?', options:['A. Atom','B. Molekul','C. Sel','D. Jaringan','E. Organ'], answer:'C', explanation:'Matahari adalah pusat Tata Surya; Nukleus adalah pusat Sel' },
    { id:'PU-F16', question:'HARIMAU : LORENG = ZEBRA : ?', options:['A. Cokelat','B. Hitam','C. Garis','D. Bintik','E. Polos'], answer:'C', explanation:'Ciri khas Harimau adalah motif Loreng; ciri khas Zebra adalah motif Garis (hitam-putih)' },
    { id:'PU-F17', question:'DEMOKRASI : KEDAULATAN RAKYAT = MONARKI : ?', options:['A. Parlemen','B. Kedaulatan Raja','C. Pemilu','D. Konstitusi','E. Partai'], answer:'B', explanation:'Demokrasi berlandaskan Kedaulatan Rakyat; Monarki berlandaskan Kedaulatan Raja' },
    { id:'PU-F18', question:'BULAN : BUMI = BUMI : ?', options:['A. Galaksi','B. Matahari','C. Mars','D. Luar angkasa','E. Planet'], answer:'B', explanation:'Bulan mengorbit Bumi; Bumi mengorbit Matahari' },

    // ── Logika & Silogisme (7 soal) ───────────────────────────────
    { id:'PU-F19', question:'Jika hujan maka jalanan basah. Jalanan tidak basah. Kesimpulan?', options:['A. Pasti hujan','B. Tidak hujan','C. Mungkin hujan','D. Tidak dapat disimpulkan','E. Jalanan sedang diperbaiki'], answer:'B', explanation:'Modus Tollens: P→Q, ¬Q, maka ¬P (tidak hujan)' },
    { id:'PU-F20', question:'Semua mamalia berdarah panas. Lumba-lumba adalah mamalia. Kesimpulan?', options:['A. Lumba-lumba tidak berdarah panas','B. Lumba-lumba berdarah panas','C. Semua hewan laut berdarah panas','D. Beberapa mamalia bukan lumba-lumba','E. Tidak dapat disimpulkan'], answer:'B', explanation:'Silogisme: Lumba-lumba (mamalia) → berdarah panas' },
    { id:'PU-F21', question:'Setiap X adalah Y. Tidak ada Y adalah Z. Maka:', options:['A. Beberapa X adalah Z','B. Tidak ada X yang Z','C. Semua Z adalah Y','D. Semua Y adalah X','E. Beberapa Z adalah X'], answer:'B', explanation:'X⊆Y, Y∩Z=∅, maka X∩Z=∅ (tidak ada X yang Z)' },
    { id:'PU-F22', question:'Ani lebih tua dari Budi. Budi lebih tua dari Citra. Dani lebih muda dari Citra. Urutan dari termuda:', options:['A. Dani-Citra-Budi-Ani','B. Ani-Budi-Citra-Dani','C. Citra-Dani-Budi-Ani','D. Dani-Budi-Citra-Ani','E. Ani-Citra-Budi-Dani'], answer:'A', explanation:'Ani>Budi>Citra>Dani. Termuda ke tertua: Dani-Citra-Budi-Ani' },
    { id:'PU-F23', question:'Tidak semua siswa lulus ujian. Budi adalah siswa. Manakah kesimpulan yang BENAR?', options:['A. Budi pasti lulus','B. Budi pasti tidak lulus','C. Budi mungkin lulus atau tidak lulus','D. Budi bukan siswa yang baik','E. Semua siswa seperti Budi tidak lulus'], answer:'C', explanation:'"Tidak semua siswa lulus" berarti ada yang lulus ada yang tidak; status Budi tidak dapat dipastikan' },
    { id:'PU-F24', question:'Hari ini Rabu. 45 hari kemudian adalah hari apa?', options:['A. Senin','B. Selasa','C. Rabu','D. Kamis','E. Sabtu'], answer:'E', explanation:'45 ÷ 7 = 6 sisa 3. Rabu + 3 hari = Kamis(+1) → Jumat(+2) → Sabtu(+3). Jawaban: Sabtu' },
    { id:'PU-F25', question:'Semua burung bisa terbang. Penguin adalah burung. Kesimpulan yang paling kritis?', options:['A. Penguin bisa terbang','B. Premis pertama salah, penguin tidak bisa terbang','C. Penguin bukan burung','D. Semua yang terbang adalah burung','E. Kesimpulan tidak relevan'], answer:'B', explanation:'Premis "Semua burung bisa terbang" adalah KELIRU secara faktual; penguin adalah burung yang tidak bisa terbang' },

    // ── Kuantitatif & Hitungan (5 soal) ──────────────────────────
    { id:'PU-F26', question:'15% dari 320 adalah:', options:['A. 42','B. 44','C. 46','D. 48','E. 50'], answer:'D', explanation:'15% × 320 = 0,15 × 320 = 48' },
    { id:'PU-F27', question:'4 pekerja dapat menyelesaikan pekerjaan dalam 15 hari. Berapa hari jika dikerjakan 6 orang?', options:['A. 8 hari','B. 9 hari','C. 10 hari','D. 12 hari','E. 11 hari'], answer:'C', explanation:'4×15=60 hari-orang. 60÷6=10 hari' },
    { id:'PU-F28', question:'Sebuah barang seharga Rp250.000 didiskon 20%. Harga akhirnya adalah:', options:['A. Rp180.000','B. Rp190.000','C. Rp200.000','D. Rp210.000','E. Rp220.000'], answer:'C', explanation:'Diskon = 20%×250.000=50.000. Harga akhir=250.000-50.000=200.000' },
    { id:'PU-F29', question:'Kendaraan melaju 60 km/jam. Jarak yang ditempuh 180 km. Waktu yang dibutuhkan:', options:['A. 2 jam','B. 2,5 jam','C. 3 jam','D. 3,5 jam','E. 4 jam'], answer:'C', explanation:'Waktu = Jarak÷Kecepatan = 180÷60 = 3 jam' },
    { id:'PU-F30', question:'Rata-rata 5 bilangan adalah 14. Jika satu bilangan 20 dikeluarkan, rata-rata sisanya adalah:', options:['A. 11,5','B. 12','C. 12,5','D. 13','E. 13,5'], answer:'C', explanation:'Total=5×14=70. Sisa 4 bilangan=70-20=50. Rata=50÷4=12,5' },
  ],

  /* ================================================================
   * PPU — PENGETAHUAN & PEMAHAMAN UMUM (25 soal)
   * ================================================================ */
  PPU: [
    { id:'PPU-F01', question:'Sungai terpanjang di dunia adalah:', options:['A. Amazon','B. Nil','C. Mississippi','D. Yangtze','E. Congo'], answer:'B', explanation:'Sungai Nil (Afrika) dengan panjang ±6.650 km dianggap sungai terpanjang di dunia' },
    { id:'PPU-F02', question:'Siapakah penulis novel "Laskar Pelangi"?', options:['A. Pramoedya Ananta Toer','B. Habiburrahman El Shirazy','C. Andrea Hirata','D. Dee Lestari','E. Ayu Utami'], answer:'C', explanation:'Laskar Pelangi ditulis oleh Andrea Hirata, terbit tahun 2005' },
    { id:'PPU-F03', question:'Benua terluas di dunia adalah:', options:['A. Afrika','B. Amerika','C. Eropa','D. Asia','E. Australia'], answer:'D', explanation:'Asia adalah benua terluas di dunia, mencakup sekitar 44,6 juta km²' },
    { id:'PPU-F04', question:'Ibu kota negara Brazil adalah:', options:['A. São Paulo','B. Rio de Janeiro','C. Salvador','D. Brasília','E. Belo Horizonte'], answer:'D', explanation:'Brasília adalah ibu kota Brazil sejak 1960, menggantikan Rio de Janeiro' },
    { id:'PPU-F05', question:'Simbol kimia untuk emas adalah:', options:['A. Ag','B. Pt','C. Au','D. Fe','E. Cu'], answer:'C', explanation:'Au berasal dari bahasa Latin "Aurum" yang berarti emas' },
    { id:'PPU-F06', question:'Berapa jumlah tulang pada manusia dewasa?', options:['A. 186','B. 196','C. 206','D. 216','E. 226'], answer:'C', explanation:'Manusia dewasa memiliki 206 tulang. Bayi memiliki sekitar 270-300 tulang yang kemudian menyatu' },
    { id:'PPU-F07', question:'Planet terkecil dalam tata surya adalah:', options:['A. Mars','B. Venus','C. Merkurius','D. Pluto','E. Uranus'], answer:'C', explanation:'Merkurius adalah planet terkecil dalam tata surya (sejak Pluto diklasifikasi ulang)' },
    { id:'PPU-F08', question:'Proses fotosintesis pada tumbuhan menghasilkan:', options:['A. CO₂ dan air','B. Oksigen dan glukosa','C. Nitrogen dan protein','D. Karbon dan mineral','E. Hidrogen dan energi'], answer:'B', explanation:'Fotosintesis: CO₂ + H₂O + cahaya → Glukosa (C₆H₁₂O₆) + O₂' },
    { id:'PPU-F09', question:'Pada suhu berapa air mendidih pada tekanan 1 atm?', options:['A. 90°C','B. 95°C','C. 98°C','D. 100°C','E. 105°C'], answer:'D', explanation:'Air mendidih pada 100°C (212°F) pada tekanan standar 1 atmosfer' },
    { id:'PPU-F10', question:'Siapakah yang menemukan hukum gravitasi?', options:['A. Galileo Galilei','B. Albert Einstein','C. Isaac Newton','D. Johannes Kepler','E. Nicolaus Copernicus'], answer:'C', explanation:'Isaac Newton merumuskan hukum gravitasi universal pada sekitar tahun 1687 dalam Principia Mathematica' },
    { id:'PPU-F11', question:'Nama ilmiah untuk manusia adalah:', options:['A. Homo erectus','B. Homo habilis','C. Homo neanderthalensis','D. Homo sapiens','E. Pan troglodytes'], answer:'D', explanation:'Nama ilmiah manusia modern adalah Homo sapiens (Latin: manusia yang bijaksana)' },
    { id:'PPU-F12', question:'Proklamasi Kemerdekaan Indonesia dibacakan pada pukul:', options:['A. 08.00 WIB','B. 09.00 WIB','C. 10.00 WIB','D. 11.00 WIB','E. 12.00 WIB'], answer:'C', explanation:'Proklamasi dibacakan pada 17 Agustus 1945 pukul 10.00 WIB di Jalan Pegangsaan Timur 56, Jakarta' },
    { id:'PPU-F13', question:'Revolusi Prancis terjadi pada tahun:', options:['A. 1776','B. 1789','C. 1793','D. 1804','E. 1815'], answer:'B', explanation:'Revolusi Prancis dimulai tahun 1789 dengan penyerbuan Penjara Bastille pada 14 Juli' },
    { id:'PPU-F14', question:'Hukum Newton I (hukum inersia) menyatakan bahwa:', options:['A. Gaya = massa × percepatan','B. Setiap aksi ada reaksi','C. Benda tetap diam atau bergerak lurus beraturan jika tidak ada gaya net','D. Energi tidak dapat diciptakan atau dimusnahkan','E. Tekanan berbanding terbalik dengan volume'], answer:'C', explanation:'Hukum Newton I: benda cenderung mempertahankan keadaannya (diam atau gerak lurus) tanpa adanya gaya luar' },
    { id:'PPU-F15', question:'ASEAN didirikan oleh berapa negara pendiri?', options:['A. 3','B. 4','C. 5','D. 6','E. 7'], answer:'C', explanation:'ASEAN didirikan 8 Agustus 1967 oleh 5 negara: Indonesia, Malaysia, Filipina, Singapura, Thailand' },
    { id:'PPU-F16', question:'Enzim pencernaan protein yang terdapat di lambung adalah:', options:['A. Amilase','B. Lipase','C. Pepsin','D. Tripsin','E. Sukrase'], answer:'C', explanation:'Pepsin adalah enzim di lambung yang memecah protein menjadi polipeptida' },
    { id:'PPU-F17', question:'Golongan darah sistem ABO pertama kali ditemukan oleh:', options:['A. Alexander Fleming','B. Robert Koch','C. Louis Pasteur','D. Karl Landsteiner','E. Joseph Lister'], answer:'D', explanation:'Karl Landsteiner menemukan sistem golongan darah ABO pada tahun 1901 dan meraih Nobel 1930' },
    { id:'PPU-F18', question:'Pasal UUD 1945 yang mengatur hak warga negara atas pendidikan adalah:', options:['A. Pasal 27','B. Pasal 28','C. Pasal 30','D. Pasal 31','E. Pasal 33'], answer:'D', explanation:'Pasal 31 UUD 1945: "Setiap warga negara berhak mendapat pendidikan"' },
    { id:'PPU-F19', question:'Ibu kota Rusia adalah:', options:['A. St. Petersburg','B. Kiev','C. Moskow','D. Vladivostok','E. Novosibirsk'], answer:'C', explanation:'Moskow (Moscow) adalah ibu kota dan kota terbesar Rusia' },
    { id:'PPU-F20', question:'Mitosis adalah pembelahan sel yang bertujuan untuk:', options:['A. Reproduksi seksual','B. Membentuk gamet','C. Pertumbuhan dan perbaikan jaringan','D. Variasi genetik','E. Meiosis tahap pertama'], answer:'C', explanation:'Mitosis menghasilkan 2 sel anak dengan kromosom sama, bertujuan untuk pertumbuhan dan regenerasi jaringan' },
    { id:'PPU-F21', question:'Unsur yang paling banyak terdapat di kerak bumi adalah:', options:['A. Silikon','B. Oksigen','C. Aluminium','D. Besi','E. Kalsium'], answer:'B', explanation:'Oksigen adalah unsur paling melimpah di kerak bumi, sekitar 46% massanya' },
    { id:'PPU-F22', question:'Siapakah tokoh yang memimpin perlawanan Perang Diponegoro (1825-1830)?', options:['A. Pangeran Antasari','B. Sultan Agung','C. Pangeran Diponegoro','D. Tuanku Imam Bonjol','E. Cut Nyak Dien'], answer:'C', explanation:'Perang Diponegoro (1825-1830) dipimpin oleh Pangeran Diponegoro melawan penjajahan Belanda di Jawa' },
    { id:'PPU-F23', question:'Sel saraf (neuron) mengirimkan sinyal melalui:', options:['A. Aliran darah','B. Impuls listrik dan kimiawi (neurotransmitter)','C. Gelombang suara','D. Serat kolagen','E. Hormon'], answer:'B', explanation:'Neuron mengirimkan sinyal melalui impuls listrik di sepanjang akson dan neurotransmitter di sinapsis' },
    { id:'PPU-F24', question:'Persamaan yang mencerminkan Hukum Kekekalan Energi adalah:', options:['A. E=mc²','B. F=ma','C. PV=nRT','D. Energi total sistem terisolasi selalu konstan','E. W=Fd'], answer:'D', explanation:'Hukum Kekekalan Energi: energi tidak dapat diciptakan/dimusnahkan, hanya berubah bentuk; total energi sistem terisolasi konstan' },
    { id:'PPU-F25', question:'Badan PBB yang menangani pendidikan, sains, dan budaya adalah:', options:['A. UNICEF','B. WHO','C. UNDP','D. UNESCO','E. UNHCR'], answer:'D', explanation:'UNESCO (United Nations Educational, Scientific and Cultural Organization) menangani pendidikan, ilmu pengetahuan, dan budaya' },
  ],

  /* ================================================================
   * PBM — PEMAHAMAN BACAAN & MENULIS (30 soal = 6 bacaan × 5)
   * ================================================================ */
  PBM: [
    // ── Bacaan 1: Perubahan Iklim (PBM-F01 s.d. F05) ─────────────
    {
      id:'PBM-F01',
      passage:'Perubahan iklim telah menjadi krisis global paling mendesak abad ke-21. Konsentrasi gas rumah kaca di atmosfer—terutama CO₂ dari pembakaran bahan bakar fosil dan deforestasi—telah mendorong suhu rata-rata bumi naik sekitar 1,1°C dibanding era pra-industri. Panel Antarpemerintah untuk Perubahan Iklim (IPCC) memperingatkan bahwa kenaikan di atas 1,5°C akan memicu dampak yang jauh lebih parah.\n\nDampak perubahan iklim sudah terasa nyata: pencairan es kutub yang mempercepat kenaikan permukaan laut, gelombang panas ekstrem, banjir bandang, dan kekeringan berkepanjangan. Negara-negara kepulauan kecil dan kawasan pesisir berisiko paling besar tenggelam. Para ilmuwan menekankan bahwa tanpa pengurangan emisi drastic sebelum 2030, jendela untuk membatasi pemanasan akan tertutup.',
      question:'Gagasan utama paragraf pertama teks tersebut adalah:',
      options:['A. IPCC adalah lembaga terpenting di dunia','B. Deforestasi satu-satunya penyebab perubahan iklim','C. Perubahan iklim disebabkan oleh gas rumah kaca dan mengancam kehidupan','D. Kenaikan suhu 1,5°C masih aman untuk bumi','E. Suhu bumi tidak mengalami perubahan'],
      answer:'C',
      explanation:'Paragraf pertama memaparkan penyebab (gas rumah kaca) dan ancaman perubahan iklim'
    },
    {
      id:'PBM-F02',
      passage:'Perubahan iklim telah menjadi krisis global paling mendesak abad ke-21. Konsentrasi gas rumah kaca di atmosfer—terutama CO₂ dari pembakaran bahan bakar fosil dan deforestasi—telah mendorong suhu rata-rata bumi naik sekitar 1,1°C dibanding era pra-industri. Panel Antarpemerintah untuk Perubahan Iklim (IPCC) memperingatkan bahwa kenaikan di atas 1,5°C akan memicu dampak yang jauh lebih parah.\n\nDampak perubahan iklim sudah terasa nyata: pencairan es kutub yang mempercepat kenaikan permukaan laut, gelombang panas ekstrem, banjir bandang, dan kekeringan berkepanjangan. Negara-negara kepulauan kecil dan kawasan pesisir berisiko paling besar tenggelam. Para ilmuwan menekankan bahwa tanpa pengurangan emisi drastic sebelum 2030, jendela untuk membatasi pemanasan akan tertutup.',
      question:'Kata "drastis" dalam konteks teks bermakna:',
      options:['A. Lambat dan bertahap','B. Sangat besar dan cepat','C. Ringan dan terencana','D. Tidak signifikan','E. Sementara'],
      answer:'B',
      explanation:'Drastis = berupa tindakan keras/cepat/besar-besaran, tidak setengah-setengah'
    },
    {
      id:'PBM-F03',
      passage:'Perubahan iklim telah menjadi krisis global paling mendesak abad ke-21. Konsentrasi gas rumah kaca di atmosfer—terutama CO₂ dari pembakaran bahan bakar fosil dan deforestasi—telah mendorong suhu rata-rata bumi naik sekitar 1,1°C dibanding era pra-industri. Panel Antarpemerintah untuk Perubahan Iklim (IPCC) memperingatkan bahwa kenaikan di atas 1,5°C akan memicu dampak yang jauh lebih parah.\n\nDampak perubahan iklim sudah terasa nyata: pencairan es kutub yang mempercepat kenaikan permukaan laut, gelombang panas ekstrem, banjir bandang, dan kekeringan berkepanjangan. Negara-negara kepulauan kecil dan kawasan pesisir berisiko paling besar tenggelam. Para ilmuwan menekankan bahwa tanpa pengurangan emisi drastic sebelum 2030, jendela untuk membatasi pemanasan akan tertutup.',
      question:'Berapa kenaikan suhu rata-rata bumi dibanding era pra-industri menurut teks?',
      options:['A. 0,5°C','B. 1,0°C','C. 1,1°C','D. 1,5°C','E. 2,0°C'],
      answer:'C',
      explanation:'Teks menyebutkan suhu bumi naik "sekitar 1,1°C dibanding era pra-industri"'
    },
    {
      id:'PBM-F04',
      passage:'Perubahan iklim telah menjadi krisis global paling mendesak abad ke-21. Konsentrasi gas rumah kaca di atmosfer—terutama CO₂ dari pembakaran bahan bakar fosil dan deforestasi—telah mendorong suhu rata-rata bumi naik sekitar 1,1°C dibanding era pra-industri. Panel Antarpemerintah untuk Perubahan Iklim (IPCC) memperingatkan bahwa kenaikan di atas 1,5°C akan memicu dampak yang jauh lebih parah.\n\nDampak perubahan iklim sudah terasa nyata: pencairan es kutub yang mempercepat kenaikan permukaan laut, gelombang panas ekstrem, banjir bandang, dan kekeringan berkepanjangan. Negara-negara kepulauan kecil dan kawasan pesisir berisiko paling besar tenggelam. Para ilmuwan menekankan bahwa tanpa pengurangan emisi drastic sebelum 2030, jendela untuk membatasi pemanasan akan tertutup.',
      question:'Pihak yang disebutkan paling rentan terdampak kenaikan permukaan laut adalah:',
      options:['A. Negara-negara industri besar','B. Negara kepulauan kecil dan kawasan pesisir','C. Negara di kawasan kutub','D. Negara di dataran tinggi','E. Negara-negara dengan hutan hujan tropis'],
      answer:'B',
      explanation:'Teks menyebutkan: "Negara-negara kepulauan kecil dan kawasan pesisir berisiko paling besar tenggelam"'
    },
    {
      id:'PBM-F05',
      passage:'Perubahan iklim telah menjadi krisis global paling mendesak abad ke-21. Konsentrasi gas rumah kaca di atmosfer—terutama CO₂ dari pembakaran bahan bakar fosil dan deforestasi—telah mendorong suhu rata-rata bumi naik sekitar 1,1°C dibanding era pra-industri. Panel Antarpemerintah untuk Perubahan Iklim (IPCC) memperingatkan bahwa kenaikan di atas 1,5°C akan memicu dampak yang jauh lebih parah.\n\nDampak perubahan iklim sudah terasa nyata: pencairan es kutub yang mempercepat kenaikan permukaan laut, gelombang panas ekstrem, banjir bandang, dan kekeringan berkepanjangan. Negara-negara kepulauan kecil dan kawasan pesisir berisiko paling besar tenggelam. Para ilmuwan menekankan bahwa tanpa pengurangan emisi drastic sebelum 2030, jendela untuk membatasi pemanasan akan tertutup.',
      question:'Pernyataan yang TIDAK sesuai dengan isi teks adalah:',
      options:['A. Gas CO₂ adalah salah satu gas rumah kaca utama','B. IPCC memperingatkan bahaya kenaikan suhu di atas 1,5°C','C. Perubahan iklim sudah memberikan dampak nyata','D. Semua negara memiliki risiko tenggelam yang sama','E. Deforestasi berkontribusi terhadap perubahan iklim'],
      answer:'D',
      explanation:'Teks menyatakan negara kepulauan kecil dan pesisir PALING berisiko, bukan semua negara sama'
    },

    // ── Bacaan 2: Pendidikan Karakter (PBM-F06 s.d. F10) ─────────
    {
      id:'PBM-F06',
      passage:'Sistem pendidikan Indonesia menghadapi tantangan ganda: meningkatkan kualitas akademis sekaligus membentuk karakter generasi muda. Programme for International Student Assessment (PISA) 2022 menempatkan Indonesia pada posisi yang masih perlu ditingkatkan dalam literasi membaca, matematika, dan sains. Di sisi lain, survei sosial mencatat meningkatnya kasus perundungan, intoleransi, dan degradasi etika di kalangan pelajar.\n\nPendidikan karakter bukan sekadar mata pelajaran tambahan—ia harus diintegrasikan dalam seluruh proses pembelajaran. Guru yang menjadi teladan, budaya sekolah yang kondusif, serta keterlibatan orang tua adalah pilar utama. Ki Hajar Dewantara sudah mengingatkan bahwa pendidikan sejati adalah yang memerdekakan manusia—bukan sekadar mengisi otak dengan pengetahuan.',
      question:'Masalah ganda yang dihadapi pendidikan Indonesia menurut teks adalah:',
      options:['A. Kekurangan guru dan fasilitas','B. Meningkatkan kualitas akademis sekaligus membentuk karakter','C. Implementasi kurikulum baru dan teknologi','D. Rendahnya anggaran dan korupsi','E. Kesenjangan kota dan desa'],
      answer:'B',
      explanation:'Teks secara eksplisit menyebut "tantangan ganda: meningkatkan kualitas akademis sekaligus membentuk karakter"'
    },
    {
      id:'PBM-F07',
      passage:'Sistem pendidikan Indonesia menghadapi tantangan ganda: meningkatkan kualitas akademis sekaligus membentuk karakter generasi muda. Programme for International Student Assessment (PISA) 2022 menempatkan Indonesia pada posisi yang masih perlu ditingkatkan dalam literasi membaca, matematika, dan sains. Di sisi lain, survei sosial mencatat meningkatnya kasus perundungan, intoleransi, dan degradasi etika di kalangan pelajar.\n\nPendidikan karakter bukan sekadar mata pelajaran tambahan—ia harus diintegrasikan dalam seluruh proses pembelajaran. Guru yang menjadi teladan, budaya sekolah yang kondusif, serta keterlibatan orang tua adalah pilar utama. Ki Hajar Dewantara sudah mengingatkan bahwa pendidikan sejati adalah yang memerdekakan manusia—bukan sekadar mengisi otak dengan pengetahuan.',
      question:'Kata "pilar" dalam konteks "pilar utama" pada paragraf kedua bermakna:',
      options:['A. Tiang fisik bangunan sekolah','B. Komponen/fondasi pendukung utama','C. Kebijakan pemerintah','D. Metode pengajaran','E. Kurikulum pendidikan'],
      answer:'B',
      explanation:'"Pilar" dalam konteks ini bermakna komponen penyangga/fondasi utama, bukan tiang fisik'
    },
    {
      id:'PBM-F08',
      passage:'Sistem pendidikan Indonesia menghadapi tantangan ganda: meningkatkan kualitas akademis sekaligus membentuk karakter generasi muda. Programme for International Student Assessment (PISA) 2022 menempatkan Indonesia pada posisi yang masih perlu ditingkatkan dalam literasi membaca, matematika, dan sains. Di sisi lain, survei sosial mencatat meningkatnya kasus perundungan, intoleransi, dan degradasi etika di kalangan pelajar.\n\nPendidikan karakter bukan sekadar mata pelajaran tambahan—ia harus diintegrasikan dalam seluruh proses pembelajaran. Guru yang menjadi teladan, budaya sekolah yang kondusif, serta keterlibatan orang tua adalah pilar utama. Ki Hajar Dewantara sudah mengingatkan bahwa pendidikan sejati adalah yang memerdekakan manusia—bukan sekadar mengisi otak dengan pengetahuan.',
      question:'Bidang apa saja yang diukur dalam PISA menurut teks?',
      options:['A. Sains, teknologi, dan seni','B. Literasi membaca, matematika, dan sains','C. Matematika, fisika, dan kimia','D. Bahasa, olahraga, dan sains','E. Hanya matematika'],
      answer:'B',
      explanation:'Teks menyebut: "literasi membaca, matematika, dan sains" sebagai bidang yang diukur PISA'
    },
    {
      id:'PBM-F09',
      passage:'Sistem pendidikan Indonesia menghadapi tantangan ganda: meningkatkan kualitas akademis sekaligus membentuk karakter generasi muda. Programme for International Student Assessment (PISA) 2022 menempatkan Indonesia pada posisi yang masih perlu ditingkatkan dalam literasi membaca, matematika, dan sains. Di sisi lain, survei sosial mencatat meningkatnya kasus perundungan, intoleransi, dan degradasi etika di kalangan pelajar.\n\nPendidikan karakter bukan sekadar mata pelajaran tambahan—ia harus diintegrasikan dalam seluruh proses pembelajaran. Guru yang menjadi teladan, budaya sekolah yang kondusif, serta keterlibatan orang tua adalah pilar utama. Ki Hajar Dewantara sudah mengingatkan bahwa pendidikan sejati adalah yang memerdekakan manusia—bukan sekadar mengisi otak dengan pengetahuan.',
      question:'Pandangan Ki Hajar Dewantara tentang pendidikan sejati adalah:',
      options:['A. Fokus pada hafalan dan ujian','B. Pendidikan yang memerdekakan manusia','C. Memperbanyak jam pelajaran akademik','D. Mendisiplinkan siswa secara ketat','E. Mengutamakan teknologi dalam pembelajaran'],
      answer:'B',
      explanation:'Teks mengutip Ki Hajar Dewantara: "pendidikan sejati adalah yang memerdekakan manusia"'
    },
    {
      id:'PBM-F10',
      passage:'Sistem pendidikan Indonesia menghadapi tantangan ganda: meningkatkan kualitas akademis sekaligus membentuk karakter generasi muda. Programme for International Student Assessment (PISA) 2022 menempatkan Indonesia pada posisi yang masih perlu ditingkatkan dalam literasi membaca, matematika, dan sains. Di sisi lain, survei sosial mencatat meningkatnya kasus perundungan, intoleransi, dan degradasi etika di kalangan pelajar.\n\nPendidikan karakter bukan sekadar mata pelajaran tambahan—ia harus diintegrasikan dalam seluruh proses pembelajaran. Guru yang menjadi teladan, budaya sekolah yang kondusif, serta keterlibatan orang tua adalah pilar utama. Ki Hajar Dewantara sudah mengingatkan bahwa pendidikan sejati adalah yang memerdekakan manusia—bukan sekadar mengisi otak dengan pengetahuan.',
      question:'Cara yang tepat mengintegrasikan pendidikan karakter menurut teks adalah:',
      options:['A. Membuat mata pelajaran khusus karakter','B. Menghapus mata pelajaran akademis','C. Diintegrasikan dalam seluruh proses pembelajaran','D. Dilaksanakan hanya saat upacara bendera','E. Diserahkan sepenuhnya kepada orang tua'],
      answer:'C',
      explanation:'Teks menyatakan pendidikan karakter "harus diintegrasikan dalam seluruh proses pembelajaran"'
    },

    // ── Bacaan 3: Ekonomi Digital (PBM-F11 s.d. F15) ─────────────
    {
      id:'PBM-F11',
      passage:'Ekonomi digital Indonesia terus bertumbuh dengan pesat. Nilai ekonomi digital Indonesia pada tahun 2023 diperkirakan mencapai USD 82 miliar dan diproyeksikan melampaui USD 210 miliar pada 2030 menurut laporan Google, Temasek, dan Bain & Company. Ekosistem ini ditopang oleh meningkatnya penetrasi internet, penetrasi smartphone, dan populasi muda yang melek teknologi.\n\nSektor e-commerce menjadi kontributor terbesar, diikuti oleh ride-hailing, online travel, dan layanan keuangan digital (fintech). Namun, tantangan nyata menghadang: kesenjangan digital antara kota besar dan daerah terpencil, keamanan siber, perlindungan data konsumen, serta kebutuhan regulasi yang adaptif. Untuk mempertahankan momentum, Indonesia perlu berinvestasi dalam infrastruktur digital dan sumber daya manusia yang kompeten.',
      question:'Nilai ekonomi digital Indonesia diperkirakan melampaui berapa pada 2030?',
      options:['A. USD 100 miliar','B. USD 150 miliar','C. USD 180 miliar','D. USD 210 miliar','E. USD 250 miliar'],
      answer:'D',
      explanation:'Teks menyebutkan proyeksi "melampaui USD 210 miliar pada 2030"'
    },
    {
      id:'PBM-F12',
      passage:'Ekonomi digital Indonesia terus bertumbuh dengan pesat. Nilai ekonomi digital Indonesia pada tahun 2023 diperkirakan mencapai USD 82 miliar dan diproyeksikan melampaui USD 210 miliar pada 2030 menurut laporan Google, Temasek, dan Bain & Company. Ekosistem ini ditopang oleh meningkatnya penetrasi internet, penetrasi smartphone, dan populasi muda yang melek teknologi.\n\nSektor e-commerce menjadi kontributor terbesar, diikuti oleh ride-hailing, online travel, dan layanan keuangan digital (fintech). Namun, tantangan nyata menghadang: kesenjangan digital antara kota besar dan daerah terpencil, keamanan siber, perlindungan data konsumen, serta kebutuhan regulasi yang adaptif. Untuk mempertahankan momentum, Indonesia perlu berinvestasi dalam infrastruktur digital dan sumber daya manusia yang kompeten.',
      question:'Sektor yang menjadi kontributor terbesar ekonomi digital Indonesia menurut teks adalah:',
      options:['A. Fintech','B. Ride-hailing','C. E-commerce','D. Online travel','E. Pendidikan digital'],
      answer:'C',
      explanation:'Teks menyatakan: "Sektor e-commerce menjadi kontributor terbesar"'
    },
    {
      id:'PBM-F13',
      passage:'Ekonomi digital Indonesia terus bertumbuh dengan pesat. Nilai ekonomi digital Indonesia pada tahun 2023 diperkirakan mencapai USD 82 miliar dan diproyeksikan melampaui USD 210 miliar pada 2030 menurut laporan Google, Temasek, dan Bain & Company. Ekosistem ini ditopang oleh meningkatnya penetrasi internet, penetrasi smartphone, dan populasi muda yang melek teknologi.\n\nSektor e-commerce menjadi kontributor terbesar, diikuti oleh ride-hailing, online travel, dan layanan keuangan digital (fintech). Namun, tantangan nyata menghadang: kesenjangan digital antara kota besar dan daerah terpencil, keamanan siber, perlindungan data konsumen, serta kebutuhan regulasi yang adaptif. Untuk mempertahankan momentum, Indonesia perlu berinvestasi dalam infrastruktur digital dan sumber daya manusia yang kompeten.',
      question:'Kata "adaptif" dalam "regulasi yang adaptif" bermakna:',
      options:['A. Kaku dan tidak berubah','B. Mampu menyesuaikan diri dengan perubahan','C. Sangat detail dan panjang','D. Dibuat oleh lembaga internasional','E. Bersifat sementara'],
      answer:'B',
      explanation:'"Adaptif" = mampu beradaptasi/menyesuaikan diri dengan kondisi yang berubah'
    },
    {
      id:'PBM-F14',
      passage:'Ekonomi digital Indonesia terus bertumbuh dengan pesat. Nilai ekonomi digital Indonesia pada tahun 2023 diperkirakan mencapai USD 82 miliar dan diproyeksikan melampaui USD 210 miliar pada 2030 menurut laporan Google, Temasek, dan Bain & Company. Ekosistem ini ditopang oleh meningkatnya penetrasi internet, penetrasi smartphone, dan populasi muda yang melek teknologi.\n\nSektor e-commerce menjadi kontributor terbesar, diikuti oleh ride-hailing, online travel, dan layanan keuangan digital (fintech). Namun, tantangan nyata menghadang: kesenjangan digital antara kota besar dan daerah terpencil, keamanan siber, perlindungan data konsumen, serta kebutuhan regulasi yang adaptif. Untuk mempertahankan momentum, Indonesia perlu berinvestasi dalam infrastruktur digital dan sumber daya manusia yang kompeten.',
      question:'Faktor pendukung ekosistem ekonomi digital yang disebutkan teks adalah:',
      options:['A. Harga smartphone murah dan wifi gratis','B. Penetrasi internet, smartphone, dan populasi muda melek teknologi','C. Subsidi pemerintah dan regulasi longgar','D. Banyaknya startup unicorn','E. Kerjasama dengan perusahaan asing'],
      answer:'B',
      explanation:'Teks menyebutkan tiga faktor: "penetrasi internet, penetrasi smartphone, dan populasi muda yang melek teknologi"'
    },
    {
      id:'PBM-F15',
      passage:'Ekonomi digital Indonesia terus bertumbuh dengan pesat. Nilai ekonomi digital Indonesia pada tahun 2023 diperkirakan mencapai USD 82 miliar dan diproyeksikan melampaui USD 210 miliar pada 2030 menurut laporan Google, Temasek, dan Bain & Company. Ekosistem ini ditopang oleh meningkatnya penetrasi internet, penetrasi smartphone, dan populasi muda yang melek teknologi.\n\nSektor e-commerce menjadi kontributor terbesar, diikuti oleh ride-hailing, online travel, dan layanan keuangan digital (fintech). Namun, tantangan nyata menghadang: kesenjangan digital antara kota besar dan daerah terpencil, keamanan siber, perlindungan data konsumen, serta kebutuhan regulasi yang adaptif. Untuk mempertahankan momentum, Indonesia perlu berinvestasi dalam infrastruktur digital dan sumber daya manusia yang kompeten.',
      question:'Kesimpulan yang paling tepat dari teks adalah:',
      options:['A. Indonesia sudah menjadi negara digital terkuat di Asia','B. E-commerce akan digantikan fintech di masa depan','C. Ekonomi digital Indonesia berkembang pesat namun perlu mengatasi tantangan dan berinvestasi SDM','D. Tantangan keamanan siber tidak perlu dikhawatirkan','E. Ekonomi digital hanya bermanfaat di kota besar'],
      answer:'C',
      explanation:'Teks menggambarkan pertumbuhan pesat sekaligus tantangan dan perlunya investasi infrastruktur dan SDM'
    },

    // ── Bacaan 4: Kesehatan Mental Remaja (PBM-F16 s.d. F20) ──────
    {
      id:'PBM-F16',
      passage:'Krisis kesehatan mental di kalangan remaja Indonesia semakin mengkhawatirkan. Data Riset Kesehatan Dasar (Riskesdas) menunjukkan bahwa prevalensi gangguan emosional pada remaja meningkat signifikan dalam satu dekade terakhir. Tekanan akademik yang tinggi, paparan media sosial yang intensif, dan dinamika keluarga yang tidak harmonis disebut sebagai faktor risiko utama.\n\nStigma sosial masih menjadi tembok tebal yang menghalangi remaja mencari bantuan profesional. Banyak yang memilih diam daripada dianggap "lemah" atau "gila". Padahal, gangguan kesehatan mental yang tidak ditangani sejak dini dapat berkembang menjadi kondisi kronis. Para ahli menekankan pentingnya literasi kesehatan mental di sekolah, layanan konseling yang mudah diakses, serta menciptakan lingkungan yang non-judgmental.',
      question:'Faktor risiko utama gangguan kesehatan mental remaja yang disebutkan teks adalah:',
      options:['A. Kemiskinan dan kurang gizi','B. Tekanan akademik, media sosial intensif, dan dinamika keluarga tidak harmonis','C. Penggunaan obat-obatan terlarang','D. Kurangnya olahraga dan tidur','E. Lingkungan sekolah yang buruk'],
      answer:'B',
      explanation:'Teks menyebut tiga faktor: tekanan akademik, paparan media sosial intensif, dan dinamika keluarga tidak harmonis'
    },
    {
      id:'PBM-F17',
      passage:'Krisis kesehatan mental di kalangan remaja Indonesia semakin mengkhawatirkan. Data Riset Kesehatan Dasar (Riskesdas) menunjukkan bahwa prevalensi gangguan emosional pada remaja meningkat signifikan dalam satu dekade terakhir. Tekanan akademik yang tinggi, paparan media sosial yang intensif, dan dinamika keluarga yang tidak harmonis disebut sebagai faktor risiko utama.\n\nStigma sosial masih menjadi tembok tebal yang menghalangi remaja mencari bantuan profesional. Banyak yang memilih diam daripada dianggap "lemah" atau "gila". Padahal, gangguan kesehatan mental yang tidak ditangani sejak dini dapat berkembang menjadi kondisi kronis. Para ahli menekankan pentingnya literasi kesehatan mental di sekolah, layanan konseling yang mudah diakses, serta menciptakan lingkungan yang non-judgmental.',
      question:'Kata "prevalensi" dalam teks bermakna:',
      options:['A. Pencegahan','B. Pengobatan','C. Tingkat kejadian/keberadaan dalam populasi','D. Keparahan penyakit','E. Penyebab penyakit'],
      answer:'C',
      explanation:'"Prevalensi" = proporsi atau tingkat kejadian suatu kondisi/penyakit dalam populasi tertentu'
    },
    {
      id:'PBM-F18',
      passage:'Krisis kesehatan mental di kalangan remaja Indonesia semakin mengkhawatirkan. Data Riset Kesehatan Dasar (Riskesdas) menunjukkan bahwa prevalensi gangguan emosional pada remaja meningkat signifikan dalam satu dekade terakhir. Tekanan akademik yang tinggi, paparan media sosial yang intensif, dan dinamika keluarga yang tidak harmonis disebut sebagai faktor risiko utama.\n\nStigma sosial masih menjadi tembok tebal yang menghalangi remaja mencari bantuan profesional. Banyak yang memilih diam daripada dianggap "lemah" atau "gila". Padahal, gangguan kesehatan mental yang tidak ditangani sejak dini dapat berkembang menjadi kondisi kronis. Para ahli menekankan pentingnya literasi kesehatan mental di sekolah, layanan konseling yang mudah diakses, serta menciptakan lingkungan yang non-judgmental.',
      question:'Mengapa banyak remaja tidak mencari bantuan profesional menurut teks?',
      options:['A. Biaya konseling terlalu mahal','B. Tidak ada layanan yang tersedia','C. Takut dianggap "lemah" atau "gila" akibat stigma sosial','D. Orang tua melarang','E. Tidak mengetahui adanya gangguan kesehatan mental'],
      answer:'C',
      explanation:'Teks menyebut: "Stigma sosial...menghalangi remaja mencari bantuan; banyak yang memilih diam daripada dianggap lemah/gila"'
    },
    {
      id:'PBM-F19',
      passage:'Krisis kesehatan mental di kalangan remaja Indonesia semakin mengkhawatirkan. Data Riset Kesehatan Dasar (Riskesdas) menunjukkan bahwa prevalensi gangguan emosional pada remaja meningkat signifikan dalam satu dekade terakhir. Tekanan akademik yang tinggi, paparan media sosial yang intensif, dan dinamika keluarga yang tidak harmonis disebut sebagai faktor risiko utama.\n\nStigma sosial masih menjadi tembok tebal yang menghalangi remaja mencari bantuan profesional. Banyak yang memilih diam daripada dianggap "lemah" atau "gila". Padahal, gangguan kesehatan mental yang tidak ditangani sejak dini dapat berkembang menjadi kondisi kronis. Para ahli menekankan pentingnya literasi kesehatan mental di sekolah, layanan konseling yang mudah diakses, serta menciptakan lingkungan yang non-judgmental.',
      question:'Solusi yang direkomendasikan para ahli menurut teks adalah:',
      options:['A. Mengurangi beban kurikulum akademik','B. Literasi kesehatan mental, layanan konseling mudah diakses, lingkungan non-judgmental','C. Melarang penggunaan media sosial di bawah 17 tahun','D. Memberikan obat antidepresan secara bebas','E. Hanya terapi keluarga'],
      answer:'B',
      explanation:'Teks menyebut tiga rekomendasi ahli: literasi kesehatan mental, konseling mudah diakses, lingkungan non-judgmental'
    },
    {
      id:'PBM-F20',
      passage:'Krisis kesehatan mental di kalangan remaja Indonesia semakin mengkhawatirkan. Data Riset Kesehatan Dasar (Riskesdas) menunjukkan bahwa prevalensi gangguan emosional pada remaja meningkat signifikan dalam satu dekade terakhir. Tekanan akademik yang tinggi, paparan media sosial yang intensif, dan dinamika keluarga yang tidak harmonis disebut sebagai faktor risiko utama.\n\nStigma sosial masih menjadi tembok tebal yang menghalangi remaja mencari bantuan profesional. Banyak yang memilih diam daripada dianggap "lemah" atau "gila". Padahal, gangguan kesehatan mental yang tidak ditangani sejak dini dapat berkembang menjadi kondisi kronis. Para ahli menekankan pentingnya literasi kesehatan mental di sekolah, layanan konseling yang mudah diakses, serta menciptakan lingkungan yang non-judgmental.',
      question:'Apa yang bisa terjadi jika gangguan kesehatan mental tidak ditangani sejak dini?',
      options:['A. Remaja akan sembuh sendiri seiring waktu','B. Berkembang menjadi kondisi kronis','C. Hanya berdampak pada prestasi akademik','D. Tidak ada dampak jangka panjang','E. Dapat disembuhkan dengan olahraga saja'],
      answer:'B',
      explanation:'Teks menyatakan: "gangguan kesehatan mental yang tidak ditangani sejak dini dapat berkembang menjadi kondisi kronis"'
    },

    // ── Bacaan 5: Teknologi Pangan (PBM-F21 s.d. F25) ─────────────
    {
      id:'PBM-F21',
      passage:'Inovasi teknologi pangan semakin diperlukan di tengah krisis pangan global dan pertumbuhan populasi dunia yang diperkirakan mencapai 10 miliar pada 2050. Salah satu terobosan adalah protein alternatif—mulai dari daging berbasis tumbuhan (plant-based meat), protein serangga, hingga daging yang dibudidayakan di laboratorium (cultured meat). Perusahaan seperti Impossible Foods dan Beyond Meat telah membuktikan bahwa cita rasa daging nabati bisa sangat mendekati daging hewani asli.\n\nDi Indonesia, tantangan ketahanan pangan juga akut. Alih fungsi lahan pertanian, perubahan iklim, dan ketergantungan pada impor pangan tertentu menjadi ancaman serius. Teknologi pertanian presisi (precision agriculture) yang memanfaatkan sensor, drone, dan data analitik bisa meningkatkan produktivitas lahan secara signifikan tanpa perlu memperluas area tanam.',
      question:'Mengapa inovasi teknologi pangan semakin mendesak menurut teks?',
      options:['A. Karena tuntutan pasar ekspor','B. Karena krisis pangan global dan pertumbuhan populasi menuju 10 miliar pada 2050','C. Karena kompetisi antar perusahaan makanan','D. Karena permintaan makanan organik meningkat','E. Karena teknologi dapur semakin canggih'],
      answer:'B',
      explanation:'Teks menyebut "krisis pangan global dan pertumbuhan populasi dunia yang diperkirakan mencapai 10 miliar pada 2050"'
    },
    {
      id:'PBM-F22',
      passage:'Inovasi teknologi pangan semakin diperlukan di tengah krisis pangan global dan pertumbuhan populasi dunia yang diperkirakan mencapai 10 miliar pada 2050. Salah satu terobosan adalah protein alternatif—mulai dari daging berbasis tumbuhan (plant-based meat), protein serangga, hingga daging yang dibudidayakan di laboratorium (cultured meat). Perusahaan seperti Impossible Foods dan Beyond Meat telah membuktikan bahwa cita rasa daging nabati bisa sangat mendekati daging hewani asli.\n\nDi Indonesia, tantangan ketahanan pangan juga akut. Alih fungsi lahan pertanian, perubahan iklim, dan ketergantungan pada impor pangan tertentu menjadi ancaman serius. Teknologi pertanian presisi (precision agriculture) yang memanfaatkan sensor, drone, dan data analitik bisa meningkatkan produktivitas lahan secara signifikan tanpa perlu memperluas area tanam.',
      question:'Apa yang dimaksud dengan "cultured meat" dalam teks?',
      options:['A. Daging yang diimpor dari luar negeri','B. Daging premium dari hewan ternak khusus','C. Daging yang dibudidayakan di laboratorium','D. Daging olahan yang difermentasi','E. Daging berbasis tumbuhan'],
      answer:'C',
      explanation:'Teks mendefinisikan "cultured meat" sebagai "daging yang dibudidayakan di laboratorium"'
    },
    {
      id:'PBM-F23',
      passage:'Inovasi teknologi pangan semakin diperlukan di tengah krisis pangan global dan pertumbuhan populasi dunia yang diperkirakan mencapai 10 miliar pada 2050. Salah satu terobosan adalah protein alternatif—mulai dari daging berbasis tumbuhan (plant-based meat), protein serangga, hingga daging yang dibudidayakan di laboratorium (cultured meat). Perusahaan seperti Impossible Foods dan Beyond Meat telah membuktikan bahwa cita rasa daging nabati bisa sangat mendekati daging hewani asli.\n\nDi Indonesia, tantangan ketahanan pangan juga akut. Alih fungsi lahan pertanian, perubahan iklim, dan ketergantungan pada impor pangan tertentu menjadi ancaman serius. Teknologi pertanian presisi (precision agriculture) yang memanfaatkan sensor, drone, dan data analitik bisa meningkatkan produktivitas lahan secara signifikan tanpa perlu memperluas area tanam.',
      question:'Tiga ancaman ketahanan pangan Indonesia yang disebutkan teks adalah:',
      options:['A. Kekeringan, banjir, dan hama','B. Alih fungsi lahan, perubahan iklim, ketergantungan impor pangan','C. Kurangnya petani muda dan teknologi','D. Harga pupuk mahal dan lahan sempit','E. Inflasi, kemiskinan, dan distribusi buruk'],
      answer:'B',
      explanation:'Teks menyebut: "alih fungsi lahan pertanian, perubahan iklim, dan ketergantungan pada impor pangan tertentu"'
    },
    {
      id:'PBM-F24',
      passage:'Inovasi teknologi pangan semakin diperlukan di tengah krisis pangan global dan pertumbuhan populasi dunia yang diperkirakan mencapai 10 miliar pada 2050. Salah satu terobosan adalah protein alternatif—mulai dari daging berbasis tumbuhan (plant-based meat), protein serangga, hingga daging yang dibudidayakan di laboratorium (cultured meat). Perusahaan seperti Impossible Foods dan Beyond Meat telah membuktikan bahwa cita rasa daging nabati bisa sangat mendekati daging hewani asli.\n\nDi Indonesia, tantangan ketahanan pangan juga akut. Alih fungsi lahan pertanian, perubahan iklim, dan ketergantungan pada impor pangan tertentu menjadi ancaman serius. Teknologi pertanian presisi (precision agriculture) yang memanfaatkan sensor, drone, dan data analitik bisa meningkatkan produktivitas lahan secara signifikan tanpa perlu memperluas area tanam.',
      question:'Keunggulan precision agriculture berdasarkan teks adalah:',
      options:['A. Menambah lapangan kerja petani','B. Mengimpor teknologi dari luar negeri','C. Meningkatkan produktivitas lahan tanpa perlu memperluas area tanam','D. Mengurangi harga pangan secara langsung','E. Menghilangkan kebutuhan pupuk kimia'],
      answer:'C',
      explanation:'Teks menyatakan precision agriculture "bisa meningkatkan produktivitas lahan secara signifikan tanpa perlu memperluas area tanam"'
    },
    {
      id:'PBM-F25',
      passage:'Inovasi teknologi pangan semakin diperlukan di tengah krisis pangan global dan pertumbuhan populasi dunia yang diperkirakan mencapai 10 miliar pada 2050. Salah satu terobosan adalah protein alternatif—mulai dari daging berbasis tumbuhan (plant-based meat), protein serangga, hingga daging yang dibudidayakan di laboratorium (cultured meat). Perusahaan seperti Impossible Foods dan Beyond Meat telah membuktikan bahwa cita rasa daging nabati bisa sangat mendekati daging hewani asli.\n\nDi Indonesia, tantangan ketahanan pangan juga akut. Alih fungsi lahan pertanian, perubahan iklim, dan ketergantungan pada impor pangan tertentu menjadi ancaman serius. Teknologi pertanian presisi (precision agriculture) yang memanfaatkan sensor, drone, dan data analitik bisa meningkatkan produktivitas lahan secara signifikan tanpa perlu memperluas area tanam.',
      question:'Inferensi yang PALING TEPAT dari teks adalah:',
      options:['A. Daging sapi akan punah pada 2050','B. Indonesia sudah mencapai swasembada pangan','C. Inovasi teknologi sangat penting untuk menjawab tantangan pangan masa depan','D. Protein serangga lebih baik dari daging sapi','E. Pertanian tradisional tidak lagi relevan'],
      answer:'C',
      explanation:'Teks secara keseluruhan menunjukkan pentingnya inovasi teknologi untuk mengatasi krisis pangan dan memenuhi kebutuhan populasi yang terus bertumbuh'
    },

    // ── Bacaan 6: Demokrasi & Partisipasi Publik (PBM-F26 s.d. F30)
    {
      id:'PBM-F26',
      passage:'Demokrasi bukan sekadar prosedur pemilihan umum—ia adalah sistem nilai yang menempatkan kebebasan, persamaan, dan partisipasi warga sebagai fondasi. Indonesia pasca-Reformasi 1998 berhasil menyelenggarakan pemilu secara konsisten, bahkan dipuji sebagai salah satu demokratisasi paling berhasil di kawasan Asia. Namun, kualitas demokrasi tidak hanya diukur dari frekuensi pemilu.\n\nIndikator kesehatan demokrasi yang lebih dalam mencakup: kebebasan pers, independensi peradilan, perlindungan hak minoritas, dan partisipasi masyarakat sipil. Kekhawatiran muncul ketika ruang demokrasi menyempit—pembatasan kebebasan berekspresi, melemahnya lembaga antikorupsi, atau menguatnya oligarki politik. Warga yang aktif, kritis, dan melek hukum adalah benteng terkuat demokrasi yang sejati.',
      question:'Menurut teks, apa yang menjadi fondasi sistem demokrasi?',
      options:['A. Pemilihan umum yang rutin','B. Kebebasan, persamaan, dan partisipasi warga','C. Kekuatan militer dan ekonomi','D. Sistem presidensial yang kuat','E. Multipartai dan kebebasan pers saja'],
      answer:'B',
      explanation:'Teks mendefinisikan demokrasi sebagai "sistem nilai yang menempatkan kebebasan, persamaan, dan partisipasi warga sebagai fondasi"'
    },
    {
      id:'PBM-F27',
      passage:'Demokrasi bukan sekadar prosedur pemilihan umum—ia adalah sistem nilai yang menempatkan kebebasan, persamaan, dan partisipasi warga sebagai fondasi. Indonesia pasca-Reformasi 1998 berhasil menyelenggarakan pemilu secara konsisten, bahkan dipuji sebagai salah satu demokratisasi paling berhasil di kawasan Asia. Namun, kualitas demokrasi tidak hanya diukur dari frekuensi pemilu.\n\nIndikator kesehatan demokrasi yang lebih dalam mencakup: kebebasan pers, independensi peradilan, perlindungan hak minoritas, dan partisipasi masyarakat sipil. Kekhawatiran muncul ketika ruang demokrasi menyempit—pembatasan kebebasan berekspresi, melemahnya lembaga antikorupsi, atau menguatnya oligarki politik. Warga yang aktif, kritis, dan melek hukum adalah benteng terkuat demokrasi yang sejati.',
      question:'Kata "oligarki" dalam teks bermakna:',
      options:['A. Pemerintahan yang adil dan merata','B. Sistem pemerintahan oleh rakyat','C. Kekuasaan yang dipegang sekelompok kecil elit','D. Sistem demokrasi langsung','E. Partai politik terbesar'],
      answer:'C',
      explanation:'"Oligarki" = sistem di mana kekuasaan dipegang oleh sekelompok kecil orang (biasanya kaya/berkuasa)'
    },
    {
      id:'PBM-F28',
      passage:'Demokrasi bukan sekadar prosedur pemilihan umum—ia adalah sistem nilai yang menempatkan kebebasan, persamaan, dan partisipasi warga sebagai fondasi. Indonesia pasca-Reformasi 1998 berhasil menyelenggarakan pemilu secara konsisten, bahkan dipuji sebagai salah satu demokratisasi paling berhasil di kawasan Asia. Namun, kualitas demokrasi tidak hanya diukur dari frekuensi pemilu.\n\nIndikator kesehatan demokrasi yang lebih dalam mencakup: kebebasan pers, independensi peradilan, perlindungan hak minoritas, dan partisipasi masyarakat sipil. Kekhawatiran muncul ketika ruang demokrasi menyempit—pembatasan kebebasan berekspresi, melemahnya lembaga antikorupsi, atau menguatnya oligarki politik. Warga yang aktif, kritis, dan melek hukum adalah benteng terkuat demokrasi yang sejati.',
      question:'Indonesia pasca-Reformasi 1998 mendapat pujian dari kalangan internasional atas:',
      options:['A. Pertumbuhan ekonomi tertinggi di Asia','B. Penyelenggaraan pemilu yang konsisten dan demokratisasi yang berhasil','C. Kebebasan pers terbaik di dunia','D. Sistem antikorupsi yang kuat','E. Militer yang profesional'],
      answer:'B',
      explanation:'Teks menyebut Indonesia "berhasil menyelenggarakan pemilu secara konsisten, bahkan dipuji sebagai salah satu demokratisasi paling berhasil di kawasan Asia"'
    },
    {
      id:'PBM-F29',
      passage:'Demokrasi bukan sekadar prosedur pemilihan umum—ia adalah sistem nilai yang menempatkan kebebasan, persamaan, dan partisipasi warga sebagai fondasi. Indonesia pasca-Reformasi 1998 berhasil menyelenggarakan pemilu secara konsisten, bahkan dipuji sebagai salah satu demokratisasi paling berhasil di kawasan Asia. Namun, kualitas demokrasi tidak hanya diukur dari frekuensi pemilu.\n\nIndikator kesehatan demokrasi yang lebih dalam mencakup: kebebasan pers, independensi peradilan, perlindungan hak minoritas, dan partisipasi masyarakat sipil. Kekhawatiran muncul ketika ruang demokrasi menyempit—pembatasan kebebasan berekspresi, melemahnya lembaga antikorupsi, atau menguatnya oligarki politik. Warga yang aktif, kritis, dan melek hukum adalah benteng terkuat demokrasi yang sejati.',
      question:'Benteng terkuat demokrasi yang sejati menurut teks adalah:',
      options:['A. Angkatan bersenjata yang kuat','B. Konstitusi yang komprehensif','C. Warga yang aktif, kritis, dan melek hukum','D. Partai politik yang banyak','E. Media massa yang bebas'],
      answer:'C',
      explanation:'Teks secara eksplisit menyatakan: "Warga yang aktif, kritis, dan melek hukum adalah benteng terkuat demokrasi yang sejati"'
    },
    {
      id:'PBM-F30',
      passage:'Demokrasi bukan sekadar prosedur pemilihan umum—ia adalah sistem nilai yang menempatkan kebebasan, persamaan, dan partisipasi warga sebagai fondasi. Indonesia pasca-Reformasi 1998 berhasil menyelenggarakan pemilu secara konsisten, bahkan dipuji sebagai salah satu demokratisasi paling berhasil di kawasan Asia. Namun, kualitas demokrasi tidak hanya diukur dari frekuensi pemilu.\n\nIndikator kesehatan demokrasi yang lebih dalam mencakup: kebebasan pers, independensi peradilan, perlindungan hak minoritas, dan partisipasi masyarakat sipil. Kekhawatiran muncul ketika ruang demokrasi menyempit—pembatasan kebebasan berekspresi, melemahnya lembaga antikorupsi, atau menguatnya oligarki politik. Warga yang aktif, kritis, dan melek hukum adalah benteng terkuat demokrasi yang sejati.',
      question:'Berdasarkan teks, manakah yang BUKAN merupakan indikator kesehatan demokrasi?',
      options:['A. Kebebasan pers','B. Independensi peradilan','C. Perlindungan hak minoritas','D. Pertumbuhan ekonomi yang tinggi','E. Partisipasi masyarakat sipil'],
      answer:'D',
      explanation:'Teks menyebutkan empat indikator: kebebasan pers, independensi peradilan, hak minoritas, partisipasi sipil. Pertumbuhan ekonomi tidak disebutkan sebagai indikator demokrasi'
    },
  ],

  /* ================================================================
   * LBI — LITERASI BAHASA INDONESIA (30 soal = 5 bacaan × 6)
   * ================================================================ */
  LBI: [
    // ── Bacaan 1: Budaya Batik (LBI-F01 s.d. F06) ────────────────
    {
      id:'LBI-F01',
      passage:'Batik adalah warisan budaya Indonesia yang telah diakui oleh UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi pada tahun 2009. Proses pembuatan batik melibatkan teknik perintang warna menggunakan malam (lilin) yang ditorehkan pada kain dengan alat yang disebut canting untuk batik tulis, atau dengan cap berbahan tembaga untuk batik cap. Motif batik bukan sekadar hiasan—setiap motif mengandung filosofi dan makna simbolis yang mendalam.\n\nBatik telah mengalami transformasi luar biasa: dari busana formal keraton Jawa, kini ia digunakan dalam berbagai konteks, mulai dari fashion global, dekorasi interior, hingga produk kreatif ekspor. Namun, masuknya batik printing (cetak mesin) impor yang lebih murah mengancam keberlangsungan pengrajin batik tulis tradisional. Diperlukan kebijakan yang tepat untuk melindungi sekaligus mengembangkan industri batik asli Indonesia.',
      question:'Batik diakui UNESCO sebagai Warisan Kemanusiaan pada tahun:',
      options:['A. 2005','B. 2007','C. 2008','D. 2009','E. 2010'],
      answer:'D',
      explanation:'Teks menyebutkan UNESCO mengakui batik sebagai Warisan Kemanusiaan "pada tahun 2009"'
    },
    {
      id:'LBI-F02',
      passage:'Batik adalah warisan budaya Indonesia yang telah diakui oleh UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi pada tahun 2009. Proses pembuatan batik melibatkan teknik perintang warna menggunakan malam (lilin) yang ditorehkan pada kain dengan alat yang disebut canting untuk batik tulis, atau dengan cap berbahan tembaga untuk batik cap. Motif batik bukan sekadar hiasan—setiap motif mengandung filosofi dan makna simbolis yang mendalam.\n\nBatik telah mengalami transformasi luar biasa: dari busana formal keraton Jawa, kini ia digunakan dalam berbagai konteks, mulai dari fashion global, dekorasi interior, hingga produk kreatif ekspor. Namun, masuknya batik printing (cetak mesin) impor yang lebih murah mengancam keberlangsungan pengrajin batik tulis tradisional. Diperlukan kebijakan yang tepat untuk melindungi sekaligus mengembangkan industri batik asli Indonesia.',
      question:'Alat yang digunakan untuk membuat batik tulis disebut:',
      options:['A. Tombak','B. Parang','C. Canting','D. Tatah','E. Patri'],
      answer:'C',
      explanation:'Teks menyebut: "alat yang disebut canting untuk batik tulis"'
    },
    {
      id:'LBI-F03',
      passage:'Batik adalah warisan budaya Indonesia yang telah diakui oleh UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi pada tahun 2009. Proses pembuatan batik melibatkan teknik perintang warna menggunakan malam (lilin) yang ditorehkan pada kain dengan alat yang disebut canting untuk batik tulis, atau dengan cap berbahan tembaga untuk batik cap. Motif batik bukan sekadar hiasan—setiap motif mengandung filosofi dan makna simbolis yang mendalam.\n\nBatik telah mengalami transformasi luar biasa: dari busana formal keraton Jawa, kini ia digunakan dalam berbagai konteks, mulai dari fashion global, dekorasi interior, hingga produk kreatif ekspor. Namun, masuknya batik printing (cetak mesin) impor yang lebih murah mengancam keberlangsungan pengrajin batik tulis tradisional. Diperlukan kebijakan yang tepat untuk melindungi sekaligus mengembangkan industri batik asli Indonesia.',
      question:'Ancaman terhadap pengrajin batik tulis tradisional yang disebutkan teks adalah:',
      options:['A. Kurangnya bahan baku malam/lilin','B. Tidak adanya pasar ekspor','C. Batik printing impor yang lebih murah','D. Perubahan tren mode internasional','E. Kurangnya pengakuan pemerintah'],
      answer:'C',
      explanation:'Teks menyebutkan: "masuknya batik printing (cetak mesin) impor yang lebih murah mengancam...pengrajin batik tulis tradisional"'
    },
    {
      id:'LBI-F04',
      passage:'Batik adalah warisan budaya Indonesia yang telah diakui oleh UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi pada tahun 2009. Proses pembuatan batik melibatkan teknik perintang warna menggunakan malam (lilin) yang ditorehkan pada kain dengan alat yang disebut canting untuk batik tulis, atau dengan cap berbahan tembaga untuk batik cap. Motif batik bukan sekadar hiasan—setiap motif mengandung filosofi dan makna simbolis yang mendalam.\n\nBatik telah mengalami transformasi luar biasa: dari busana formal keraton Jawa, kini ia digunakan dalam berbagai konteks, mulai dari fashion global, dekorasi interior, hingga produk kreatif ekspor. Namun, masuknya batik printing (cetak mesin) impor yang lebih murah mengancam keberlangsungan pengrajin batik tulis tradisional. Diperlukan kebijakan yang tepat untuk melindungi sekaligus mengembangkan industri batik asli Indonesia.',
      question:'Kata "transformasi" pada paragraf kedua berarti:',
      options:['A. Kepunahan','B. Pengurangan nilai','C. Perubahan besar secara menyeluruh','D. Pelestarian tanpa perubahan','E. Pemindahan ke daerah lain'],
      answer:'C',
      explanation:'"Transformasi" = perubahan besar dan menyeluruh dalam bentuk, sifat, fungsi, atau penampilan'
    },
    {
      id:'LBI-F05',
      passage:'Batik adalah warisan budaya Indonesia yang telah diakui oleh UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi pada tahun 2009. Proses pembuatan batik melibatkan teknik perintang warna menggunakan malam (lilin) yang ditorehkan pada kain dengan alat yang disebut canting untuk batik tulis, atau dengan cap berbahan tembaga untuk batik cap. Motif batik bukan sekadar hiasan—setiap motif mengandung filosofi dan makna simbolis yang mendalam.\n\nBatik telah mengalami transformasi luar biasa: dari busana formal keraton Jawa, kini ia digunakan dalam berbagai konteks, mulai dari fashion global, dekorasi interior, hingga produk kreatif ekspor. Namun, masuknya batik printing (cetak mesin) impor yang lebih murah mengancam keberlangsungan pengrajin batik tulis tradisional. Diperlukan kebijakan yang tepat untuk melindungi sekaligus mengembangkan industri batik asli Indonesia.',
      question:'Pernyataan yang SESUAI dengan isi teks adalah:',
      options:['A. Batik cap menggunakan alat canting dari tembaga','B. Motif batik hanya berfungsi sebagai hiasan tanpa makna','C. Batik awalnya hanya dipakai di keraton Jawa','D. UNESCO mengakui batik sebelum tahun 2000','E. Batik printing tidak mengancam pengrajin tradisional'],
      answer:'C',
      explanation:'Teks menyebutkan: "dari busana formal keraton Jawa, kini ia digunakan dalam berbagai konteks" — menunjukkan batik awalnya dari keraton Jawa'
    },
    {
      id:'LBI-F06',
      passage:'Batik adalah warisan budaya Indonesia yang telah diakui oleh UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi pada tahun 2009. Proses pembuatan batik melibatkan teknik perintang warna menggunakan malam (lilin) yang ditorehkan pada kain dengan alat yang disebut canting untuk batik tulis, atau dengan cap berbahan tembaga untuk batik cap. Motif batik bukan sekadar hiasan—setiap motif mengandung filosofi dan makna simbolis yang mendalam.\n\nBatik telah mengalami transformasi luar biasa: dari busana formal keraton Jawa, kini ia digunakan dalam berbagai konteks, mulai dari fashion global, dekorasi interior, hingga produk kreatif ekspor. Namun, masuknya batik printing (cetak mesin) impor yang lebih murah mengancam keberlangsungan pengrajin batik tulis tradisional. Diperlukan kebijakan yang tepat untuk melindungi sekaligus mengembangkan industri batik asli Indonesia.',
      question:'Simpulan paling tepat dari keseluruhan teks adalah:',
      options:['A. Batik harus dijaga sebagai peninggalan sejarah saja','B. Batik printing lebih berkualitas dari batik tulis','C. Batik adalah kekayaan budaya bernilai tinggi yang perlu dilindungi dan dikembangkan','D. Motif batik tidak perlu dipelajari generasi muda','E. UNESCO wajib membiayai pengrajin batik Indonesia'],
      answer:'C',
      explanation:'Teks menggambarkan nilai budaya batik yang tinggi sekaligus tantangan yang perlu diatasi dengan kebijakan perlindungan dan pengembangan'
    },

    // ── Bacaan 2: Stunting (LBI-F07 s.d. F12) ────────────────────
    {
      id:'LBI-F07',
      passage:'Stunting—kondisi gagal tumbuh pada anak akibat kekurangan gizi kronik dan infeksi berulang—merupakan salah satu masalah kesehatan paling mendesak di Indonesia. Pada 2022, prevalensi stunting nasional masih berada di angka 21,6% menurut Survei Status Gizi Indonesia (SSGI), meskipun turun dari 24,4% di tahun 2021. Pemerintah menetapkan target ambisius: menurunkan angka stunting menjadi 14% pada 2024.\n\nDampak stunting jauh melampaui fisik. Anak yang mengalami stunting berisiko mengalami gangguan kognitif permanen, produktivitas rendah saat dewasa, dan meningkatnya risiko penyakit tidak menular. Intervensi terpadu diperlukan: perbaikan gizi ibu hamil, ASI eksklusif selama 6 bulan, makanan pendamping ASI bergizi, sanitasi dan air bersih, serta edukasi pola asuh. Investasi dalam pencegahan stunting adalah investasi untuk modal manusia Indonesia masa depan.',
      question:'Angka prevalensi stunting nasional tahun 2022 menurut SSGI adalah:',
      options:['A. 14,0%','B. 18,4%','C. 21,6%','D. 24,4%','E. 27,0%'],
      answer:'C',
      explanation:'Teks menyebutkan: "prevalensi stunting nasional masih berada di angka 21,6% menurut SSGI" pada 2022'
    },
    {
      id:'LBI-F08',
      passage:'Stunting—kondisi gagal tumbuh pada anak akibat kekurangan gizi kronik dan infeksi berulang—merupakan salah satu masalah kesehatan paling mendesak di Indonesia. Pada 2022, prevalensi stunting nasional masih berada di angka 21,6% menurut Survei Status Gizi Indonesia (SSGI), meskipun turun dari 24,4% di tahun 2021. Pemerintah menetapkan target ambisius: menurunkan angka stunting menjadi 14% pada 2024.\n\nDampak stunting jauh melampaui fisik. Anak yang mengalami stunting berisiko mengalami gangguan kognitif permanen, produktivitas rendah saat dewasa, dan meningkatnya risiko penyakit tidak menular. Intervensi terpadu diperlukan: perbaikan gizi ibu hamil, ASI eksklusif selama 6 bulan, makanan pendamping ASI bergizi, sanitasi dan air bersih, serta edukasi pola asuh. Investasi dalam pencegahan stunting adalah investasi untuk modal manusia Indonesia masa depan.',
      question:'Target pemerintah untuk prevalensi stunting pada 2024 adalah:',
      options:['A. 10%','B. 12%','C. 14%','D. 16%','E. 18%'],
      answer:'C',
      explanation:'Teks menyebutkan: "target ambisius: menurunkan angka stunting menjadi 14% pada 2024"'
    },
    {
      id:'LBI-F09',
      passage:'Stunting—kondisi gagal tumbuh pada anak akibat kekurangan gizi kronik dan infeksi berulang—merupakan salah satu masalah kesehatan paling mendesak di Indonesia. Pada 2022, prevalensi stunting nasional masih berada di angka 21,6% menurut Survei Status Gizi Indonesia (SSGI), meskipun turun dari 24,4% di tahun 2021. Pemerintah menetapkan target ambisius: menurunkan angka stunting menjadi 14% pada 2024.\n\nDampak stunting jauh melampaui fisik. Anak yang mengalami stunting berisiko mengalami gangguan kognitif permanen, produktivitas rendah saat dewasa, dan meningkatnya risiko penyakit tidak menular. Intervensi terpadu diperlukan: perbaikan gizi ibu hamil, ASI eksklusif selama 6 bulan, makanan pendamping ASI bergizi, sanitasi dan air bersih, serta edukasi pola asuh. Investasi dalam pencegahan stunting adalah investasi untuk modal manusia Indonesia masa depan.',
      question:'Dampak stunting yang bukan hanya bersifat fisik menurut teks adalah:',
      options:['A. Tubuh pendek dan kurus','B. Gangguan kognitif permanen dan produktivitas rendah saat dewasa','C. Sering sakit flu dan demam','D. Alergi makanan tertentu','E. Sulit berbicara dan berjalan'],
      answer:'B',
      explanation:'Teks menyebut dampak non-fisik: "gangguan kognitif permanen, produktivitas rendah saat dewasa, dan meningkatnya risiko penyakit tidak menular"'
    },
    {
      id:'LBI-F10',
      passage:'Stunting—kondisi gagal tumbuh pada anak akibat kekurangan gizi kronik dan infeksi berulang—merupakan salah satu masalah kesehatan paling mendesak di Indonesia. Pada 2022, prevalensi stunting nasional masih berada di angka 21,6% menurut Survei Status Gizi Indonesia (SSGI), meskipun turun dari 24,4% di tahun 2021. Pemerintah menetapkan target ambisius: menurunkan angka stunting menjadi 14% pada 2024.\n\nDampak stunting jauh melampaui fisik. Anak yang mengalami stunting berisiko mengalami gangguan kognitif permanen, produktivitas rendah saat dewasa, dan meningkatnya risiko penyakit tidak menular. Intervensi terpadu diperlukan: perbaikan gizi ibu hamil, ASI eksklusif selama 6 bulan, makanan pendamping ASI bergizi, sanitasi dan air bersih, serta edukasi pola asuh. Investasi dalam pencegahan stunting adalah investasi untuk modal manusia Indonesia masa depan.',
      question:'Kata "kronik" dalam "kekurangan gizi kronik" bermakna:',
      options:['A. Mendadak dan parah','B. Berlangsung lama dan terus-menerus','C. Dapat sembuh dengan cepat','D. Hanya terjadi pada anak-anak','E. Akibat penyakit menular'],
      answer:'B',
      explanation:'"Kronik" = bersifat lama, menahun, berlangsung terus-menerus (bukan akut/mendadak)'
    },
    {
      id:'LBI-F11',
      passage:'Stunting—kondisi gagal tumbuh pada anak akibat kekurangan gizi kronik dan infeksi berulang—merupakan salah satu masalah kesehatan paling mendesak di Indonesia. Pada 2022, prevalensi stunting nasional masih berada di angka 21,6% menurut Survei Status Gizi Indonesia (SSGI), meskipun turun dari 24,4% di tahun 2021. Pemerintah menetapkan target ambisius: menurunkan angka stunting menjadi 14% pada 2024.\n\nDampak stunting jauh melampaui fisik. Anak yang mengalami stunting berisiko mengalami gangguan kognitif permanen, produktivitas rendah saat dewasa, dan meningkatnya risiko penyakit tidak menular. Intervensi terpadu diperlukan: perbaikan gizi ibu hamil, ASI eksklusif selama 6 bulan, makanan pendamping ASI bergizi, sanitasi dan air bersih, serta edukasi pola asuh. Investasi dalam pencegahan stunting adalah investasi untuk modal manusia Indonesia masa depan.',
      question:'Intervensi terpadu pencegahan stunting yang disebutkan teks meliputi:',
      options:['A. Vaksinasi rutin dan pengobatan gratis','B. Gizi ibu hamil, ASI eksklusif, MPASI bergizi, sanitasi, dan edukasi pola asuh','C. Bantuan sosial tunai untuk keluarga miskin','D. Pembangunan posyandu di semua desa','E. Imunisasi lengkap dan vitamin A'],
      answer:'B',
      explanation:'Teks menyebutkan lima intervensi: gizi ibu hamil, ASI eksklusif 6 bulan, MPASI bergizi, sanitasi/air bersih, edukasi pola asuh'
    },
    {
      id:'LBI-F12',
      passage:'Stunting—kondisi gagal tumbuh pada anak akibat kekurangan gizi kronik dan infeksi berulang—merupakan salah satu masalah kesehatan paling mendesak di Indonesia. Pada 2022, prevalensi stunting nasional masih berada di angka 21,6% menurut Survei Status Gizi Indonesia (SSGI), meskipun turun dari 24,4% di tahun 2021. Pemerintah menetapkan target ambisius: menurunkan angka stunting menjadi 14% pada 2024.\n\nDampak stunting jauh melampaui fisik. Anak yang mengalami stunting berisiko mengalami gangguan kognitif permanen, produktivitas rendah saat dewasa, dan meningkatnya risiko penyakit tidak menular. Intervensi terpadu diperlukan: perbaikan gizi ibu hamil, ASI eksklusif selama 6 bulan, makanan pendamping ASI bergizi, sanitasi dan air bersih, serta edukasi pola asuh. Investasi dalam pencegahan stunting adalah investasi untuk modal manusia Indonesia masa depan.',
      question:'Pernyataan terakhir teks "Investasi dalam pencegahan stunting adalah investasi untuk modal manusia Indonesia masa depan" mengandung makna:',
      options:['A. Stunting hanya masalah anggaran','B. Pencegahan stunting penting untuk kualitas SDM Indonesia jangka panjang','C. Indonesia kekurangan modal untuk mengatasi stunting','D. Stunting hanya masalah keluarga miskin','E. Program stunting tidak memerlukan anggaran besar'],
      answer:'B',
      explanation:'"Modal manusia" = kualitas SDM. Kalimat menekankan bahwa mencegah stunting berarti membangun SDM Indonesia yang unggul di masa depan'
    },

    // ── Bacaan 3: Energi Terbarukan (LBI-F13 s.d. F18) ───────────
    {
      id:'LBI-F13',
      passage:'Indonesia memiliki potensi energi terbarukan yang luar biasa besar. Potensi energi surya mencapai 207 GWp, panas bumi 23,9 GW (terbesar kedua di dunia), energi angin 60 GW, dan biomassa 33 GW. Namun, bauran energi terbarukan Indonesia baru mencapai sekitar 13% pada 2023, jauh di bawah target 23% yang ditetapkan untuk tahun yang sama.\n\nKendala utama meliputi: tingginya biaya investasi awal, infrastruktur transmisi listrik yang belum merata, dan kerangka regulasi yang belum kondusif untuk investasi swasta. Di sisi lain, tekanan internasional untuk transisi energi semakin kuat seiring dengan komitmen Indonesia dalam Paris Agreement. Percepatan pembangunan pembangkit energi terbarukan bukan hanya keharusan lingkungan, tetapi juga peluang ekonomi yang sangat besar.',
      question:'Potensi panas bumi Indonesia adalah:',
      options:['A. 13 GW','B. 23,9 GW','C. 33 GW','D. 60 GW','E. 207 GW'],
      answer:'B',
      explanation:'Teks menyebutkan: "panas bumi 23,9 GW (terbesar kedua di dunia)"'
    },
    {
      id:'LBI-F14',
      passage:'Indonesia memiliki potensi energi terbarukan yang luar biasa besar. Potensi energi surya mencapai 207 GWp, panas bumi 23,9 GW (terbesar kedua di dunia), energi angin 60 GW, dan biomassa 33 GW. Namun, bauran energi terbarukan Indonesia baru mencapai sekitar 13% pada 2023, jauh di bawah target 23% yang ditetapkan untuk tahun yang sama.\n\nKendala utama meliputi: tingginya biaya investasi awal, infrastruktur transmisi listrik yang belum merata, dan kerangka regulasi yang belum kondusif untuk investasi swasta. Di sisi lain, tekanan internasional untuk transisi energi semakin kuat seiring dengan komitmen Indonesia dalam Paris Agreement. Percepatan pembangunan pembangkit energi terbarukan bukan hanya keharusan lingkungan, tetapi juga peluang ekonomi yang sangat besar.',
      question:'Target bauran energi terbarukan Indonesia yang ditetapkan adalah:',
      options:['A. 13%','B. 18%','C. 20%','D. 23%','E. 30%'],
      answer:'D',
      explanation:'Teks menyebutkan target "23% yang ditetapkan untuk tahun yang sama (2023)"'
    },
    {
      id:'LBI-F15',
      passage:'Indonesia memiliki potensi energi terbarukan yang luar biasa besar. Potensi energi surya mencapai 207 GWp, panas bumi 23,9 GW (terbesar kedua di dunia), energi angin 60 GW, dan biomassa 33 GW. Namun, bauran energi terbarukan Indonesia baru mencapai sekitar 13% pada 2023, jauh di bawah target 23% yang ditetapkan untuk tahun yang sama.\n\nKendala utama meliputi: tingginya biaya investasi awal, infrastruktur transmisi listrik yang belum merata, dan kerangka regulasi yang belum kondusif untuk investasi swasta. Di sisi lain, tekanan internasional untuk transisi energi semakin kuat seiring dengan komitmen Indonesia dalam Paris Agreement. Percepatan pembangunan pembangkit energi terbarukan bukan hanya keharusan lingkungan, tetapi juga peluang ekonomi yang sangat besar.',
      question:'Kata "bauran" dalam "bauran energi terbarukan" memiliki arti:',
      options:['A. Total kapasitas pembangkit listrik','B. Campuran/proporsi berbagai sumber energi dalam total energi yang digunakan','C. Biaya investasi energi terbarukan','D. Jumlah perusahaan energi terbarukan','E. Sistem distribusi energi nasional'],
      answer:'B',
      explanation:'"Bauran energi" = energy mix, yaitu proporsi atau campuran dari berbagai sumber energi yang digunakan'
    },
    {
      id:'LBI-F16',
      passage:'Indonesia memiliki potensi energi terbarukan yang luar biasa besar. Potensi energi surya mencapai 207 GWp, panas bumi 23,9 GW (terbesar kedua di dunia), energi angin 60 GW, dan biomassa 33 GW. Namun, bauran energi terbarukan Indonesia baru mencapai sekitar 13% pada 2023, jauh di bawah target 23% yang ditetapkan untuk tahun yang sama.\n\nKendala utama meliputi: tingginya biaya investasi awal, infrastruktur transmisi listrik yang belum merata, dan kerangka regulasi yang belum kondusif untuk investasi swasta. Di sisi lain, tekanan internasional untuk transisi energi semakin kuat seiring dengan komitmen Indonesia dalam Paris Agreement. Percepatan pembangunan pembangkit energi terbarukan bukan hanya keharusan lingkungan, tetapi juga peluang ekonomi yang sangat besar.',
      question:'Kendala utama pengembangan energi terbarukan di Indonesia menurut teks adalah:',
      options:['A. Teknologi yang belum tersedia','B. Kurangnya potensi sumber daya alam','C. Tingginya biaya investasi, infrastruktur belum merata, regulasi belum kondusif','D. Penolakan dari masyarakat lokal','E. Keterbatasan tenaga ahli lokal'],
      answer:'C',
      explanation:'Teks menyebut tiga kendala: tingginya biaya investasi awal, infrastruktur transmisi belum merata, regulasi belum kondusif'
    },
    {
      id:'LBI-F17',
      passage:'Indonesia memiliki potensi energi terbarukan yang luar biasa besar. Potensi energi surya mencapai 207 GWp, panas bumi 23,9 GW (terbesar kedua di dunia), energi angin 60 GW, dan biomassa 33 GW. Namun, bauran energi terbarukan Indonesia baru mencapai sekitar 13% pada 2023, jauh di bawah target 23% yang ditetapkan untuk tahun yang sama.\n\nKendala utama meliputi: tingginya biaya investasi awal, infrastruktur transmisi listrik yang belum merata, dan kerangka regulasi yang belum kondusif untuk investasi swasta. Di sisi lain, tekanan internasional untuk transisi energi semakin kuat seiring dengan komitmen Indonesia dalam Paris Agreement. Percepatan pembangunan pembangkit energi terbarukan bukan hanya keharusan lingkungan, tetapi juga peluang ekonomi yang sangat besar.',
      question:'Paris Agreement yang disebutkan dalam teks adalah:',
      options:['A. Perjanjian dagang antara Indonesia dan Prancis','B. Kesepakatan global mengenai perubahan iklim dan pengurangan emisi','C. Konvensi internasional tentang energi nuklir','D. Perjanjian tentang hak paten teknologi energi','E. Deklarasi PBB tentang kemiskinan energi'],
      answer:'B',
      explanation:'Paris Agreement adalah perjanjian internasional tentang perubahan iklim yang disepakati pada 2015, berisi komitmen pengurangan emisi gas rumah kaca'
    },
    {
      id:'LBI-F18',
      passage:'Indonesia memiliki potensi energi terbarukan yang luar biasa besar. Potensi energi surya mencapai 207 GWp, panas bumi 23,9 GW (terbesar kedua di dunia), energi angin 60 GW, dan biomassa 33 GW. Namun, bauran energi terbarukan Indonesia baru mencapai sekitar 13% pada 2023, jauh di bawah target 23% yang ditetapkan untuk tahun yang sama.\n\nKendala utama meliputi: tingginya biaya investasi awal, infrastruktur transmisi listrik yang belum merata, dan kerangka regulasi yang belum kondusif untuk investasi swasta. Di sisi lain, tekanan internasional untuk transisi energi semakin kuat seiring dengan komitmen Indonesia dalam Paris Agreement. Percepatan pembangunan pembangkit energi terbarukan bukan hanya keharusan lingkungan, tetapi juga peluang ekonomi yang sangat besar.',
      question:'Simpulan penulis tentang pengembangan energi terbarukan Indonesia adalah:',
      options:['A. Indonesia tidak perlu beralih dari energi fosil','B. Potensi ada tapi mustahil direalisasikan','C. Pengembangan energi terbarukan hanya urusan pemerintah','D. Transisi energi sekaligus keharusan lingkungan dan peluang ekonomi besar','E. Energi nuklir lebih baik dari energi terbarukan untuk Indonesia'],
      answer:'D',
      explanation:'Teks menyatakan: "Percepatan...bukan hanya keharusan lingkungan, tetapi juga peluang ekonomi yang sangat besar"'
    },

    // ── Bacaan 4: Pariwisata Indonesia (LBI-F19 s.d. F24) ─────────
    {
      id:'LBI-F19',
      passage:'Indonesia menyimpan kekayaan destinasi wisata yang tak tertandingi: dari pantai tropis Bali dan Lombok, keajaiban alam Raja Ampat di Papua, hingga warisan budaya Candi Borobudur dan Prambanan. Sektor pariwisata menyumbang sekitar 3,4% dari PDB pada 2019 sebelum pandemi meluluhlantakkan industri ini. Pasca-pandemi, kunjungan wisman (wisatawan mancanegara) perlahan pulih, dengan target 7,4 juta wisman pada 2023.\n\nNamun, pengembangan pariwisata Indonesia masih menghadapi hambatan struktural: infrastruktur yang belum memadai di banyak destinasi, kualitas SDM pariwisata yang belum merata, dan minimnya promosi digital yang terkoordinasi. Konsep pariwisata berkelanjutan (sustainable tourism) semakin relevan: mengembangkan wisata yang memberi manfaat ekonomi bagi masyarakat lokal sekaligus menjaga kelestarian alam dan budaya.',
      question:'Kontribusi sektor pariwisata terhadap PDB Indonesia pada 2019 adalah:',
      options:['A. 1,4%','B. 2,8%','C. 3,4%','D. 4,2%','E. 5,0%'],
      answer:'C',
      explanation:'Teks menyebutkan: "menyumbang sekitar 3,4% dari PDB pada 2019"'
    },
    {
      id:'LBI-F20',
      passage:'Indonesia menyimpan kekayaan destinasi wisata yang tak tertandingi: dari pantai tropis Bali dan Lombok, keajaiban alam Raja Ampat di Papua, hingga warisan budaya Candi Borobudur dan Prambanan. Sektor pariwisata menyumbang sekitar 3,4% dari PDB pada 2019 sebelum pandemi meluluhlantakkan industri ini. Pasca-pandemi, kunjungan wisman (wisatawan mancanegara) perlahan pulih, dengan target 7,4 juta wisman pada 2023.\n\nNamun, pengembangan pariwisata Indonesia masih menghadapi hambatan struktural: infrastruktur yang belum memadai di banyak destinasi, kualitas SDM pariwisata yang belum merata, dan minimnya promosi digital yang terkoordinasi. Konsep pariwisata berkelanjutan (sustainable tourism) semakin relevan: mengembangkan wisata yang memberi manfaat ekonomi bagi masyarakat lokal sekaligus menjaga kelestarian alam dan budaya.',
      question:'Kata "wisman" dalam teks merupakan singkatan dari:',
      options:['A. Wiraswasta mandiri','B. Wisata manusia','C. Wisatawan mancanegara','D. Wira usaha mandiri','E. Wisatawan mandirian'],
      answer:'C',
      explanation:'Teks secara eksplisit mendefinisikan: "wisman (wisatawan mancanegara)"'
    },
    {
      id:'LBI-F21',
      passage:'Indonesia menyimpan kekayaan destinasi wisata yang tak tertandingi: dari pantai tropis Bali dan Lombok, keajaiban alam Raja Ampat di Papua, hingga warisan budaya Candi Borobudur dan Prambanan. Sektor pariwisata menyumbang sekitar 3,4% dari PDB pada 2019 sebelum pandemi meluluhlantakkan industri ini. Pasca-pandemi, kunjungan wisman (wisatawan mancanegara) perlahan pulih, dengan target 7,4 juta wisman pada 2023.\n\nNamun, pengembangan pariwisata Indonesia masih menghadapi hambatan struktural: infrastruktur yang belum memadai di banyak destinasi, kualitas SDM pariwisata yang belum merata, dan minimnya promosi digital yang terkoordinasi. Konsep pariwisata berkelanjutan (sustainable tourism) semakin relevan: mengembangkan wisata yang memberi manfaat ekonomi bagi masyarakat lokal sekaligus menjaga kelestarian alam dan budaya.',
      question:'Hambatan struktural pariwisata Indonesia yang disebutkan teks adalah:',
      options:['A. Kurangnya destinasi wisata alam','B. Infrastruktur belum memadai, SDM belum merata, promosi digital minim','C. Banyak wisatawan yang tidak puas','D. Visa yang sulit didapatkan oleh wisman','E. Persaingan dari negara tetangga'],
      answer:'B',
      explanation:'Teks menyebut tiga hambatan: infrastruktur belum memadai, SDM belum merata, minimnya promosi digital'
    },
    {
      id:'LBI-F22',
      passage:'Indonesia menyimpan kekayaan destinasi wisata yang tak tertandingi: dari pantai tropis Bali dan Lombok, keajaiban alam Raja Ampat di Papua, hingga warisan budaya Candi Borobudur dan Prambanan. Sektor pariwisata menyumbang sekitar 3,4% dari PDB pada 2019 sebelum pandemi meluluhlantakkan industri ini. Pasca-pandemi, kunjungan wisman (wisatawan mancanegara) perlahan pulih, dengan target 7,4 juta wisman pada 2023.\n\nNamun, pengembangan pariwisata Indonesia masih menghadapi hambatan struktural: infrastruktur yang belum memadai di banyak destinasi, kualitas SDM pariwisata yang belum merata, dan minimnya promosi digital yang terkoordinasi. Konsep pariwisata berkelanjutan (sustainable tourism) semakin relevan: mengembangkan wisata yang memberi manfaat ekonomi bagi masyarakat lokal sekaligus menjaga kelestarian alam dan budaya.',
      question:'Prinsip "sustainable tourism" menurut teks adalah:',
      options:['A. Menutup destinasi wisata untuk dijaga kelestariannya','B. Hanya menerima wisatawan asing berbayar mahal','C. Wisata yang memberi manfaat ekonomi lokal sekaligus menjaga alam dan budaya','D. Membangun resort mewah di semua destinasi','E. Mengutamakan teknologi digital dalam pariwisata'],
      answer:'C',
      explanation:'Teks mendefinisikan: wisata "yang memberi manfaat ekonomi bagi masyarakat lokal sekaligus menjaga kelestarian alam dan budaya"'
    },
    {
      id:'LBI-F23',
      passage:'Indonesia menyimpan kekayaan destinasi wisata yang tak tertandingi: dari pantai tropis Bali dan Lombok, keajaiban alam Raja Ampat di Papua, hingga warisan budaya Candi Borobudur dan Prambanan. Sektor pariwisata menyumbang sekitar 3,4% dari PDB pada 2019 sebelum pandemi meluluhlantakkan industri ini. Pasca-pandemi, kunjungan wisman (wisatawan mancanegara) perlahan pulih, dengan target 7,4 juta wisman pada 2023.\n\nNamun, pengembangan pariwisata Indonesia masih menghadapi hambatan struktural: infrastruktur yang belum memadai di banyak destinasi, kualitas SDM pariwisata yang belum merata, dan minimnya promosi digital yang terkoordinasi. Konsep pariwisata berkelanjutan (sustainable tourism) semakin relevan: mengembangkan wisata yang memberi manfaat ekonomi bagi masyarakat lokal sekaligus menjaga kelestarian alam dan budaya.',
      question:'Kata "meluluhlantakkan" dalam teks bermakna:',
      options:['A. Membangun dengan cepat','B. Memperlambat sedikit','C. Meningkatkan secara drastis','D. Menghancurkan atau merusak habis-habisan','E. Mengubah secara bertahap'],
      answer:'D',
      explanation:'"Meluluhlantakkan" = menghancurkan, merusak, atau memporak-porandakan sesuatu secara total'
    },
    {
      id:'LBI-F24',
      passage:'Indonesia menyimpan kekayaan destinasi wisata yang tak tertandingi: dari pantai tropis Bali dan Lombok, keajaiban alam Raja Ampat di Papua, hingga warisan budaya Candi Borobudur dan Prambanan. Sektor pariwisata menyumbang sekitar 3,4% dari PDB pada 2019 sebelum pandemi meluluhlantakkan industri ini. Pasca-pandemi, kunjungan wisman (wisatawan mancanegara) perlahan pulih, dengan target 7,4 juta wisman pada 2023.\n\nNamun, pengembangan pariwisata Indonesia masih menghadapi hambatan struktural: infrastruktur yang belum memadai di banyak destinasi, kualitas SDM pariwisata yang belum merata, dan minimnya promosi digital yang terkoordinasi. Konsep pariwisata berkelanjutan (sustainable tourism) semakin relevan: mengembangkan wisata yang memberi manfaat ekonomi bagi masyarakat lokal sekaligus menjaga kelestarian alam dan budaya.',
      question:'Destinasi wisata yang terletak di Papua menurut teks adalah:',
      options:['A. Candi Borobudur','B. Pantai Lombok','C. Raja Ampat','D. Prambanan','E. Bali'],
      answer:'C',
      explanation:'Teks menyebutkan: "keajaiban alam Raja Ampat di Papua"'
    },

    // ── Bacaan 5: Bahasa Daerah (LBI-F25 s.d. F30) ───────────────
    {
      id:'LBI-F25',
      passage:'Indonesia adalah negara dengan keragaman bahasa terbesar kedua di dunia setelah Papua Nugini, dengan sekitar 718 bahasa daerah yang masih hidup. Namun, UNESCO memperingatkan bahwa sekitar separuh bahasa-bahasa tersebut terancam punah dalam beberapa generasi mendatang. Faktor utama adalah urbanisasi, dominasi bahasa Indonesia dan asing dalam pendidikan, serta pengaruh media massa dan media sosial.\n\nKepunahan bahasa bukan sekadar kehilangan alat komunikasi—ia berarti hilangnya sistem pengetahuan lokal, kearifan ekologis, tradisi lisan, dan identitas budaya yang terkodifikasi dalam bahasa tersebut. Upaya revitalisasi bahasa daerah memerlukan kebijakan pendidikan yang inklusif (memasukkan bahasa daerah dalam kurikulum), dokumentasi digital, dan yang terpenting, pewarisan aktif dalam keluarga dan komunitas.',
      question:'Indonesia menempati posisi keberapa sebagai negara dengan keragaman bahasa terbesar di dunia?',
      options:['A. Pertama','B. Kedua','C. Ketiga','D. Keempat','E. Kelima'],
      answer:'B',
      explanation:'Teks menyebutkan: "keragaman bahasa terbesar kedua di dunia setelah Papua Nugini"'
    },
    {
      id:'LBI-F26',
      passage:'Indonesia adalah negara dengan keragaman bahasa terbesar kedua di dunia setelah Papua Nugini, dengan sekitar 718 bahasa daerah yang masih hidup. Namun, UNESCO memperingatkan bahwa sekitar separuh bahasa-bahasa tersebut terancam punah dalam beberapa generasi mendatang. Faktor utama adalah urbanisasi, dominasi bahasa Indonesia dan asing dalam pendidikan, serta pengaruh media massa dan media sosial.\n\nKepunahan bahasa bukan sekadar kehilangan alat komunikasi—ia berarti hilangnya sistem pengetahuan lokal, kearifan ekologis, tradisi lisan, dan identitas budaya yang terkodifikasi dalam bahasa tersebut. Upaya revitalisasi bahasa daerah memerlukan kebijakan pendidikan yang inklusif (memasukkan bahasa daerah dalam kurikulum), dokumentasi digital, dan yang terpenting, pewarisan aktif dalam keluarga dan komunitas.',
      question:'Berapa jumlah bahasa daerah Indonesia yang masih hidup menurut teks?',
      options:['A. Sekitar 300','B. Sekitar 500','C. Sekitar 600','D. Sekitar 718','E. Sekitar 850'],
      answer:'D',
      explanation:'Teks menyebutkan "sekitar 718 bahasa daerah yang masih hidup"'
    },
    {
      id:'LBI-F27',
      passage:'Indonesia adalah negara dengan keragaman bahasa terbesar kedua di dunia setelah Papua Nugini, dengan sekitar 718 bahasa daerah yang masih hidup. Namun, UNESCO memperingatkan bahwa sekitar separuh bahasa-bahasa tersebut terancam punah dalam beberapa generasi mendatang. Faktor utama adalah urbanisasi, dominasi bahasa Indonesia dan asing dalam pendidikan, serta pengaruh media massa dan media sosial.\n\nKepunahan bahasa bukan sekadar kehilangan alat komunikasi—ia berarti hilangnya sistem pengetahuan lokal, kearifan ekologis, tradisi lisan, dan identitas budaya yang terkodifikasi dalam bahasa tersebut. Upaya revitalisasi bahasa daerah memerlukan kebijakan pendidikan yang inklusif (memasukkan bahasa daerah dalam kurikulum), dokumentasi digital, dan yang terpenting, pewarisan aktif dalam keluarga dan komunitas.',
      question:'Faktor penyebab kepunahan bahasa daerah yang disebutkan teks adalah:',
      options:['A. Tidak adanya kamus bahasa daerah','B. Kurangnya pembicara muda','C. Urbanisasi, dominasi bahasa nasional/asing, dan pengaruh media','D. Kebijakan pemerintah yang melarang bahasa daerah','E. Tidak ada sekolah di daerah terpencil'],
      answer:'C',
      explanation:'Teks menyebut tiga faktor: urbanisasi, dominasi bahasa Indonesia/asing dalam pendidikan, dan pengaruh media massa/sosial'
    },
    {
      id:'LBI-F28',
      passage:'Indonesia adalah negara dengan keragaman bahasa terbesar kedua di dunia setelah Papua Nugini, dengan sekitar 718 bahasa daerah yang masih hidup. Namun, UNESCO memperingatkan bahwa sekitar separuh bahasa-bahasa tersebut terancam punah dalam beberapa generasi mendatang. Faktor utama adalah urbanisasi, dominasi bahasa Indonesia dan asing dalam pendidikan, serta pengaruh media massa dan media sosial.\n\nKepunahan bahasa bukan sekadar kehilangan alat komunikasi—ia berarti hilangnya sistem pengetahuan lokal, kearifan ekologis, tradisi lisan, dan identitas budaya yang terkodifikasi dalam bahasa tersebut. Upaya revitalisasi bahasa daerah memerlukan kebijakan pendidikan yang inklusif (memasukkan bahasa daerah dalam kurikulum), dokumentasi digital, dan yang terpenting, pewarisan aktif dalam keluarga dan komunitas.',
      question:'Kata "terkodifikasi" dalam teks bermakna:',
      options:['A. Disimpan dalam kode rahasia','B. Terstruktur dan tersimpan dalam suatu sistem','C. Dihapus dari catatan resmi','D. Diterjemahkan ke bahasa lain','E. Dipublikasikan secara luas'],
      answer:'B',
      explanation:'"Terkodifikasi" = terekam, terstruktur, dan tersimpan dalam suatu sistem (dalam hal ini, bahasa)'
    },
    {
      id:'LBI-F29',
      passage:'Indonesia adalah negara dengan keragaman bahasa terbesar kedua di dunia setelah Papua Nugini, dengan sekitar 718 bahasa daerah yang masih hidup. Namun, UNESCO memperingatkan bahwa sekitar separuh bahasa-bahasa tersebut terancam punah dalam beberapa generasi mendatang. Faktor utama adalah urbanisasi, dominasi bahasa Indonesia dan asing dalam pendidikan, serta pengaruh media massa dan media sosial.\n\nKepunahan bahasa bukan sekadar kehilangan alat komunikasi—ia berarti hilangnya sistem pengetahuan lokal, kearifan ekologis, tradisi lisan, dan identitas budaya yang terkodifikasi dalam bahasa tersebut. Upaya revitalisasi bahasa daerah memerlukan kebijakan pendidikan yang inklusif (memasukkan bahasa daerah dalam kurikulum), dokumentasi digital, dan yang terpenting, pewarisan aktif dalam keluarga dan komunitas.',
      question:'Upaya revitalisasi bahasa daerah yang disebutkan teks meliputi:',
      options:['A. Melarang penggunaan bahasa Indonesia di daerah','B. Kebijakan pendidikan inklusif, dokumentasi digital, pewarisan aktif dalam keluarga','C. Memberikan insentif finansial bagi penutur bahasa daerah','D. Mewajibkan siaran TV hanya dalam bahasa daerah','E. Membangun museum bahasa di setiap provinsi'],
      answer:'B',
      explanation:'Teks menyebutkan tiga upaya: kebijakan pendidikan inklusif, dokumentasi digital, dan pewarisan aktif'
    },
    {
      id:'LBI-F30',
      passage:'Indonesia adalah negara dengan keragaman bahasa terbesar kedua di dunia setelah Papua Nugini, dengan sekitar 718 bahasa daerah yang masih hidup. Namun, UNESCO memperingatkan bahwa sekitar separuh bahasa-bahasa tersebut terancam punah dalam beberapa generasi mendatang. Faktor utama adalah urbanisasi, dominasi bahasa Indonesia dan asing dalam pendidikan, serta pengaruh media massa dan media sosial.\n\nKepunahan bahasa bukan sekadar kehilangan alat komunikasi—ia berarti hilangnya sistem pengetahuan lokal, kearifan ekologis, tradisi lisan, dan identitas budaya yang terkodifikasi dalam bahasa tersebut. Upaya revitalisasi bahasa daerah memerlukan kebijakan pendidikan yang inklusif (memasukkan bahasa daerah dalam kurikulum), dokumentasi digital, dan yang terpenting, pewarisan aktif dalam keluarga dan komunitas.',
      question:'Mengapa kepunahan bahasa dianggap lebih dari sekadar kehilangan alat komunikasi?',
      options:['A. Karena mengurangi jumlah kamus yang tersedia','B. Karena hilangnya pengetahuan lokal, kearifan ekologis, tradisi lisan, dan identitas budaya','C. Karena menyulitkan komunikasi antar daerah','D. Karena memperlambat perkembangan teknologi','E. Karena mengancam kedaulatan negara'],
      answer:'B',
      explanation:'Teks menjelaskan: kepunahan bahasa berarti hilangnya "sistem pengetahuan lokal, kearifan ekologis, tradisi lisan, dan identitas budaya"'
    },
  ],

  /* ================================================================
   * LBE — LITERASI BAHASA INGGRIS (25 soal = 5 bacaan × 5)
   * ================================================================ */
  LBE: [
    // ── Passage 1: Renewable Energy (LBE-F01 s.d. F05) ───────────
    {
      id:'LBE-F01',
      passage:'The global transition to renewable energy is accelerating at an unprecedented pace. Solar and wind power have become the cheapest sources of new electricity generation in most of the world, with costs plummeting over 90% in the past decade. The International Energy Agency (IEA) reported that renewable energy sources accounted for nearly 30% of global electricity generation in 2023.\n\nDespite this progress, significant challenges remain. The intermittent nature of solar and wind power requires sophisticated energy storage solutions—primarily batteries and pumped hydropower—to ensure reliable supply. Grid infrastructure in many countries needs costly upgrades to handle distributed renewable generation. Additionally, the transition must be managed carefully to protect workers and communities dependent on fossil fuel industries, a concept known as "just transition."',
      question:'What is the main argument of the first paragraph?',
      options:['A. Solar energy is still too expensive for most countries','B. Renewable energy is growing rapidly and has become the cheapest option','C. The IEA is the most important energy organization','D. Wind power is better than solar power','E. Most countries still rely on fossil fuels'],
      answer:'B',
      explanation:'The paragraph highlights the rapid acceleration of renewable energy and its dramatic cost reduction, making it the cheapest new electricity source'
    },
    {
      id:'LBE-F02',
      passage:'The global transition to renewable energy is accelerating at an unprecedented pace. Solar and wind power have become the cheapest sources of new electricity generation in most of the world, with costs plummeting over 90% in the past decade. The International Energy Agency (IEA) reported that renewable energy sources accounted for nearly 30% of global electricity generation in 2023.\n\nDespite this progress, significant challenges remain. The intermittent nature of solar and wind power requires sophisticated energy storage solutions—primarily batteries and pumped hydropower—to ensure reliable supply. Grid infrastructure in many countries needs costly upgrades to handle distributed renewable generation. Additionally, the transition must be managed carefully to protect workers and communities dependent on fossil fuel industries, a concept known as "just transition."',
      question:'The word "intermittent" in the second paragraph means:',
      options:['A. Constant and reliable','B. Extremely powerful','C. Occurring at irregular intervals, not continuous','D. Dependent on fossil fuels','E. Difficult to install'],
      answer:'C',
      explanation:'"Intermittent" = not continuous, occurring at irregular intervals (e.g., solar only works when sun shines)'
    },
    {
      id:'LBE-F03',
      passage:'The global transition to renewable energy is accelerating at an unprecedented pace. Solar and wind power have become the cheapest sources of new electricity generation in most of the world, with costs plummeting over 90% in the past decade. The International Energy Agency (IEA) reported that renewable energy sources accounted for nearly 30% of global electricity generation in 2023.\n\nDespite this progress, significant challenges remain. The intermittent nature of solar and wind power requires sophisticated energy storage solutions—primarily batteries and pumped hydropower—to ensure reliable supply. Grid infrastructure in many countries needs costly upgrades to handle distributed renewable generation. Additionally, the transition must be managed carefully to protect workers and communities dependent on fossil fuel industries, a concept known as "just transition."',
      question:'What percentage of global electricity came from renewables in 2023 according to IEA?',
      options:['A. Nearly 10%','B. Nearly 20%','C. Nearly 30%','D. Nearly 40%','E. Nearly 50%'],
      answer:'C',
      explanation:'The passage states: "renewable energy sources accounted for nearly 30% of global electricity generation in 2023"'
    },
    {
      id:'LBE-F04',
      passage:'The global transition to renewable energy is accelerating at an unprecedented pace. Solar and wind power have become the cheapest sources of new electricity generation in most of the world, with costs plummeting over 90% in the past decade. The International Energy Agency (IEA) reported that renewable energy sources accounted for nearly 30% of global electricity generation in 2023.\n\nDespite this progress, significant challenges remain. The intermittent nature of solar and wind power requires sophisticated energy storage solutions—primarily batteries and pumped hydropower—to ensure reliable supply. Grid infrastructure in many countries needs costly upgrades to handle distributed renewable generation. Additionally, the transition must be managed carefully to protect workers and communities dependent on fossil fuel industries, a concept known as "just transition."',
      question:'What does the concept of "just transition" refer to in the passage?',
      options:['A. Switching to renewable energy as quickly as possible','B. A legal framework for energy companies','C. Managing the energy transition to protect workers in fossil fuel industries','D. A type of new battery technology','E. Equal access to renewable energy globally'],
      answer:'C',
      explanation:'"Just transition" = carefully managing the energy shift to protect workers and communities dependent on fossil fuels'
    },
    {
      id:'LBE-F05',
      passage:'The global transition to renewable energy is accelerating at an unprecedented pace. Solar and wind power have become the cheapest sources of new electricity generation in most of the world, with costs plummeting over 90% in the past decade. The International Energy Agency (IEA) reported that renewable energy sources accounted for nearly 30% of global electricity generation in 2023.\n\nDespite this progress, significant challenges remain. The intermittent nature of solar and wind power requires sophisticated energy storage solutions—primarily batteries and pumped hydropower—to ensure reliable supply. Grid infrastructure in many countries needs costly upgrades to handle distributed renewable generation. Additionally, the transition must be managed carefully to protect workers and communities dependent on fossil fuel industries, a concept known as "just transition."',
      question:'Which of the following is NOT mentioned as a challenge for renewable energy in the passage?',
      options:['A. Intermittent power supply','B. Need for energy storage solutions','C. High cost of solar panels','D. Grid infrastructure upgrades','E. Impact on fossil fuel workers'],
      answer:'C',
      explanation:'The passage says costs have "plummeted over 90%"—high costs of panels are not mentioned as a current challenge'
    },

    // ── Passage 2: Social Media and Democracy (LBE-F06 s.d. F10) ─
    {
      id:'LBE-F06',
      passage:'Social media platforms have fundamentally reshaped political communication in the 21st century. On one hand, these platforms have democratized information access, allowing ordinary citizens to participate in public discourse, organize movements, and hold governments accountable in unprecedented ways. The Arab Spring uprisings (2010–2012) demonstrated social media\'s potential to mobilize political change.\n\nHowever, the same platforms have become vectors for misinformation, polarization, and manipulation. Algorithmic systems designed to maximize engagement tend to amplify emotionally charged, divisive content—creating "filter bubbles" where users are rarely exposed to opposing viewpoints. Foreign actors have exploited these vulnerabilities to interfere in democratic elections. Researchers argue that unregulated social media poses a structural threat to democratic institutions, while tech companies resist comprehensive regulation, citing free speech concerns.',
      question:'What is the "Arab Spring" referenced in the passage?',
      options:['A. A music festival in the Arab world','B. A series of pro-democracy uprisings in Arab countries (2010-2012) partly mobilized via social media','C. A social media platform popular in the Middle East','D. A foreign interference campaign','E. A tech company regulation policy'],
      answer:'B',
      explanation:'The passage references Arab Spring as an example of social media\'s "potential to mobilize political change" through uprisings'
    },
    {
      id:'LBE-F07',
      passage:'Social media platforms have fundamentally reshaped political communication in the 21st century. On one hand, these platforms have democratized information access, allowing ordinary citizens to participate in public discourse, organize movements, and hold governments accountable in unprecedented ways. The Arab Spring uprisings (2010–2012) demonstrated social media\'s potential to mobilize political change.\n\nHowever, the same platforms have become vectors for misinformation, polarization, and manipulation. Algorithmic systems designed to maximize engagement tend to amplify emotionally charged, divisive content—creating "filter bubbles" where users are rarely exposed to opposing viewpoints. Foreign actors have exploited these vulnerabilities to interfere in democratic elections. Researchers argue that unregulated social media poses a structural threat to democratic institutions, while tech companies resist comprehensive regulation, citing free speech concerns.',
      question:'What are "filter bubbles" as described in the passage?',
      options:['A. Settings to block offensive content','B. Algorithms that filter fake news','C. Online environments where users mostly see content matching their existing views','D. Groups of users who spread misinformation','E. Privacy features on social media platforms'],
      answer:'C',
      explanation:'"Filter bubbles" = personalized online environments where algorithms limit exposure to opposing viewpoints'
    },
    {
      id:'LBE-F08',
      passage:'Social media platforms have fundamentally reshaped political communication in the 21st century. On one hand, these platforms have democratized information access, allowing ordinary citizens to participate in public discourse, organize movements, and hold governments accountable in unprecedented ways. The Arab Spring uprisings (2010–2012) demonstrated social media\'s potential to mobilize political change.\n\nHowever, the same platforms have become vectors for misinformation, polarization, and manipulation. Algorithmic systems designed to maximize engagement tend to amplify emotionally charged, divisive content—creating "filter bubbles" where users are rarely exposed to opposing viewpoints. Foreign actors have exploited these vulnerabilities to interfere in democratic elections. Researchers argue that unregulated social media poses a structural threat to democratic institutions, while tech companies resist comprehensive regulation, citing free speech concerns.',
      question:'Why do tech companies resist comprehensive regulation according to the passage?',
      options:['A. They cannot afford to implement regulations','B. They claim regulation would be technically impossible','C. They cite free speech concerns','D. They believe misinformation is not a real problem','E. They argue regulation would reduce user numbers'],
      answer:'C',
      explanation:'The passage states tech companies resist regulation "citing free speech concerns"'
    },
    {
      id:'LBE-F09',
      passage:'Social media platforms have fundamentally reshaped political communication in the 21st century. On one hand, these platforms have democratized information access, allowing ordinary citizens to participate in public discourse, organize movements, and hold governments accountable in unprecedented ways. The Arab Spring uprisings (2010–2012) demonstrated social media\'s potential to mobilize political change.\n\nHowever, the same platforms have become vectors for misinformation, polarization, and manipulation. Algorithmic systems designed to maximize engagement tend to amplify emotionally charged, divisive content—creating "filter bubbles" where users are rarely exposed to opposing viewpoints. Foreign actors have exploited these vulnerabilities to interfere in democratic elections. Researchers argue that unregulated social media poses a structural threat to democratic institutions, while tech companies resist comprehensive regulation, citing free speech concerns.',
      question:'The word "vectors" in "vectors for misinformation" means:',
      options:['A. Solutions to a problem','B. Channels or carriers that spread something','C. Computer programs','D. Filters that remove content','E. Government agencies'],
      answer:'B',
      explanation:'"Vector" in this context = a carrier or channel through which something (misinformation) is transmitted'
    },
    {
      id:'LBE-F10',
      passage:'Social media platforms have fundamentally reshaped political communication in the 21st century. On one hand, these platforms have democratized information access, allowing ordinary citizens to participate in public discourse, organize movements, and hold governments accountable in unprecedented ways. The Arab Spring uprisings (2010–2012) demonstrated social media\'s potential to mobilize political change.\n\nHowever, the same platforms have become vectors for misinformation, polarization, and manipulation. Algorithmic systems designed to maximize engagement tend to amplify emotionally charged, divisive content—creating "filter bubbles" where users are rarely exposed to opposing viewpoints. Foreign actors have exploited these vulnerabilities to interfere in democratic elections. Researchers argue that unregulated social media poses a structural threat to democratic institutions, while tech companies resist comprehensive regulation, citing free speech concerns.',
      question:'The author\'s overall view on social media and democracy is BEST described as:',
      options:['A. Social media is entirely beneficial for democracy','B. Social media should be completely banned','C. Social media has both democratizing benefits and serious risks to democracy','D. Only foreign actors threaten democracy through social media','E. Tech companies are responsible for protecting democracy'],
      answer:'C',
      explanation:'The passage presents both sides: benefits (democratized access, movements) and risks (misinformation, polarization, foreign interference)'
    },

    // ── Passage 3: Urbanization (LBE-F11 s.d. F15) ───────────────
    {
      id:'LBE-F11',
      passage:'The world is undergoing the most rapid urbanization in human history. As of 2023, more than 57% of the global population lives in urban areas, and this figure is projected to reach 68% by 2050 according to the United Nations. Cities concentrate economic activity, innovation, cultural exchange, and higher standards of living—yet they also concentrate poverty, pollution, traffic congestion, and social inequality.\n\nManaging this urban growth sustainably is one of the defining challenges of our time. The concept of "smart cities"—leveraging data analytics, Internet of Things (IoT) sensors, and artificial intelligence to optimize urban services—represents one promising approach. However, smart city technology raises concerns about surveillance, data privacy, and digital exclusion of the urban poor. Ultimately, successful cities must balance efficiency with equity and resilience.',
      question:'What percentage of the global population lived in urban areas as of 2023?',
      options:['A. More than 45%','B. More than 50%','C. More than 57%','D. More than 63%','E. More than 68%'],
      answer:'C',
      explanation:'The passage states: "more than 57% of the global population lives in urban areas" as of 2023'
    },
    {
      id:'LBE-F12',
      passage:'The world is undergoing the most rapid urbanization in human history. As of 2023, more than 57% of the global population lives in urban areas, and this figure is projected to reach 68% by 2050 according to the United Nations. Cities concentrate economic activity, innovation, cultural exchange, and higher standards of living—yet they also concentrate poverty, pollution, traffic congestion, and social inequality.\n\nManaging this urban growth sustainably is one of the defining challenges of our time. The concept of "smart cities"—leveraging data analytics, Internet of Things (IoT) sensors, and artificial intelligence to optimize urban services—represents one promising approach. However, smart city technology raises concerns about surveillance, data privacy, and digital exclusion of the urban poor. Ultimately, successful cities must balance efficiency with equity and resilience.',
      question:'What are "smart cities" according to the passage?',
      options:['A. Cities with the highest income per capita','B. Cities exclusively for technology workers','C. Cities that use data analytics, IoT, and AI to optimize urban services','D. Cities with the best public transportation','E. Cities with zero carbon emissions'],
      answer:'C',
      explanation:'The passage defines smart cities as those "leveraging data analytics, IoT sensors, and AI to optimize urban services"'
    },
    {
      id:'LBE-F13',
      passage:'The world is undergoing the most rapid urbanization in human history. As of 2023, more than 57% of the global population lives in urban areas, and this figure is projected to reach 68% by 2050 according to the United Nations. Cities concentrate economic activity, innovation, cultural exchange, and higher standards of living—yet they also concentrate poverty, pollution, traffic congestion, and social inequality.\n\nManaging this urban growth sustainably is one of the defining challenges of our time. The concept of "smart cities"—leveraging data analytics, Internet of Things (IoT) sensors, and artificial intelligence to optimize urban services—represents one promising approach. However, smart city technology raises concerns about surveillance, data privacy, and digital exclusion of the urban poor. Ultimately, successful cities must balance efficiency with equity and resilience.',
      question:'What concerns about smart cities does the passage mention?',
      options:['A. They are too expensive to build','B. Surveillance, data privacy, and exclusion of the urban poor','C. They only work in developed countries','D. They create unemployment among city workers','E. They are not effective at solving traffic problems'],
      answer:'B',
      explanation:'The passage mentions: "surveillance, data privacy, and digital exclusion of the urban poor" as concerns'
    },
    {
      id:'LBE-F14',
      passage:'The world is undergoing the most rapid urbanization in human history. As of 2023, more than 57% of the global population lives in urban areas, and this figure is projected to reach 68% by 2050 according to the United Nations. Cities concentrate economic activity, innovation, cultural exchange, and higher standards of living—yet they also concentrate poverty, pollution, traffic congestion, and social inequality.\n\nManaging this urban growth sustainably is one of the defining challenges of our time. The concept of "smart cities"—leveraging data analytics, Internet of Things (IoT) sensors, and artificial intelligence to optimize urban services—represents one promising approach. However, smart city technology raises concerns about surveillance, data privacy, and digital exclusion of the urban poor. Ultimately, successful cities must balance efficiency with equity and resilience.',
      question:'The word "equity" in the final sentence means:',
      options:['A. Economic equality between nations','B. Fairness and justice in access to resources and opportunities','C. Financial value of a city\'s assets','D. Architectural balance in urban design','E. Speed of urban development'],
      answer:'B',
      explanation:'"Equity" = fairness, ensuring everyone has access to opportunities and resources regardless of background'
    },
    {
      id:'LBE-F15',
      passage:'The world is undergoing the most rapid urbanization in human history. As of 2023, more than 57% of the global population lives in urban areas, and this figure is projected to reach 68% by 2050 according to the United Nations. Cities concentrate economic activity, innovation, cultural exchange, and higher standards of living—yet they also concentrate poverty, pollution, traffic congestion, and social inequality.\n\nManaging this urban growth sustainably is one of the defining challenges of our time. The concept of "smart cities"—leveraging data analytics, Internet of Things (IoT) sensors, and artificial intelligence to optimize urban services—represents one promising approach. However, smart city technology raises concerns about surveillance, data privacy, and digital exclusion of the urban poor. Ultimately, successful cities must balance efficiency with equity and resilience.',
      question:'Which statement BEST captures the overall tone of the passage?',
      options:['A. Strongly optimistic about urbanization','B. Completely pessimistic about city life','C. Balanced: acknowledging both opportunities and challenges of urbanization','D. Focused only on the negative aspects of cities','E. Arguing that rural life is superior to urban life'],
      answer:'C',
      explanation:'The passage acknowledges cities\' benefits (economic activity, innovation) alongside problems (poverty, inequality) and the challenges of managing growth'
    },

    // ── Passage 4: Vaccine Development (LBE-F16 s.d. F20) ────────
    {
      id:'LBE-F16',
      passage:'The development of COVID-19 vaccines in under a year represented a historic achievement in biomedical science. Traditional vaccine development typically takes 10–15 years; the mRNA vaccines produced by Pfizer-BioNTech and Moderna were authorized for emergency use within 11 months of the virus\'s discovery. This speed was made possible by unprecedented global scientific collaboration, pre-existing mRNA research platforms, and massive parallel investment by governments and pharmaceutical companies.\n\nmRNA vaccine technology works by delivering genetic instructions into cells, prompting them to produce a protein that triggers an immune response—without using weakened or dead virus particles. This platform is now being explored for vaccines against influenza, HIV, cancer, and malaria. Critics initially raised concerns about the long-term safety of mRNA technology, though extensive post-authorization surveillance data have not revealed serious unexpected side effects.',
      question:'How long does traditional vaccine development typically take?',
      options:['A. 1-2 years','B. 3-5 years','C. 5-8 years','D. 10-15 years','E. 20-25 years'],
      answer:'D',
      explanation:'The passage states: "Traditional vaccine development typically takes 10–15 years"'
    },
    {
      id:'LBE-F17',
      passage:'The development of COVID-19 vaccines in under a year represented a historic achievement in biomedical science. Traditional vaccine development typically takes 10–15 years; the mRNA vaccines produced by Pfizer-BioNTech and Moderna were authorized for emergency use within 11 months of the virus\'s discovery. This speed was made possible by unprecedented global scientific collaboration, pre-existing mRNA research platforms, and massive parallel investment by governments and pharmaceutical companies.\n\nmRNA vaccine technology works by delivering genetic instructions into cells, prompting them to produce a protein that triggers an immune response—without using weakened or dead virus particles. This platform is now being explored for vaccines against influenza, HIV, cancer, and malaria. Critics initially raised concerns about the long-term safety of mRNA technology, though extensive post-authorization surveillance data have not revealed serious unexpected side effects.',
      question:'How does mRNA vaccine technology work according to the passage?',
      options:['A. By injecting weakened virus particles into the body','B. By delivering genetic instructions that prompt cells to produce an immune-triggering protein','C. By using dead bacteria to stimulate immunity','D. By directly boosting white blood cells','E. By modifying the DNA in the cell nucleus'],
      answer:'B',
      explanation:'The passage describes mRNA vaccines as "delivering genetic instructions into cells, prompting them to produce a protein that triggers an immune response"'
    },
    {
      id:'LBE-F18',
      passage:'The development of COVID-19 vaccines in under a year represented a historic achievement in biomedical science. Traditional vaccine development typically takes 10–15 years; the mRNA vaccines produced by Pfizer-BioNTech and Moderna were authorized for emergency use within 11 months of the virus\'s discovery. This speed was made possible by unprecedented global scientific collaboration, pre-existing mRNA research platforms, and massive parallel investment by governments and pharmaceutical companies.\n\nmRNA vaccine technology works by delivering genetic instructions into cells, prompting them to produce a protein that triggers an immune response—without using weakened or dead virus particles. This platform is now being explored for vaccines against influenza, HIV, cancer, and malaria. Critics initially raised concerns about the long-term safety of mRNA technology, though extensive post-authorization surveillance data have not revealed serious unexpected side effects.',
      question:'What factors enabled the unusually rapid development of COVID-19 vaccines?',
      options:['A. Lower safety standards and skipping clinical trials','B. Global scientific collaboration, pre-existing mRNA platforms, and massive investment','C. Using experimental untested technology','D. Political pressure from governments','E. Reducing the number of vaccine doses required'],
      answer:'B',
      explanation:'The passage cites: "unprecedented global scientific collaboration, pre-existing mRNA research platforms, and massive parallel investment"'
    },
    {
      id:'LBE-F19',
      passage:'The development of COVID-19 vaccines in under a year represented a historic achievement in biomedical science. Traditional vaccine development typically takes 10–15 years; the mRNA vaccines produced by Pfizer-BioNTech and Moderna were authorized for emergency use within 11 months of the virus\'s discovery. This speed was made possible by unprecedented global scientific collaboration, pre-existing mRNA research platforms, and massive parallel investment by governments and pharmaceutical companies.\n\nmRNA vaccine technology works by delivering genetic instructions into cells, prompting them to produce a protein that triggers an immune response—without using weakened or dead virus particles. This platform is now being explored for vaccines against influenza, HIV, cancer, and malaria. Critics initially raised concerns about the long-term safety of mRNA technology, though extensive post-authorization surveillance data have not revealed serious unexpected side effects.',
      question:'Which diseases are mentioned as future targets for mRNA vaccine technology?',
      options:['A. Tuberculosis, malaria, and dengue','B. Influenza, HIV, cancer, and malaria','C. COVID-19, influenza, and pneumonia','D. HIV, Ebola, and hepatitis B','E. Cancer, COVID-19, and smallpox'],
      answer:'B',
      explanation:'The passage mentions: "influenza, HIV, cancer, and malaria" as diseases being explored with mRNA technology'
    },
    {
      id:'LBE-F20',
      passage:'The development of COVID-19 vaccines in under a year represented a historic achievement in biomedical science. Traditional vaccine development typically takes 10–15 years; the mRNA vaccines produced by Pfizer-BioNTech and Moderna were authorized for emergency use within 11 months of the virus\'s discovery. This speed was made possible by unprecedented global scientific collaboration, pre-existing mRNA research platforms, and massive parallel investment by governments and pharmaceutical companies.\n\nmRNA vaccine technology works by delivering genetic instructions into cells, prompting them to produce a protein that triggers an immune response—without using weakened or dead virus particles. This platform is now being explored for vaccines against influenza, HIV, cancer, and malaria. Critics initially raised concerns about the long-term safety of mRNA technology, though extensive post-authorization surveillance data have not revealed serious unexpected side effects.',
      question:'What does the passage say about the safety concerns raised by critics of mRNA technology?',
      options:['A. Safety concerns have been confirmed by new studies','B. The vaccines have caused widespread serious side effects','C. Post-authorization data have not revealed serious unexpected side effects','D. The technology is still too new to evaluate safety','E. Critics were silenced by pharmaceutical companies'],
      answer:'C',
      explanation:'The passage states: "extensive post-authorization surveillance data have not revealed serious unexpected side effects"'
    },

    // ── Passage 5: Biodiversity Loss (LBE-F21 s.d. F25) ──────────
    {
      id:'LBE-F21',
      passage:'Earth is currently experiencing its sixth mass extinction event, driven not by asteroids or volcanic eruptions, but by human activity. The World Wildlife Fund\'s Living Planet Report indicates that wildlife populations have declined by an average of 69% between 1970 and 2018. Habitat destruction (particularly deforestation), overexploitation of species, pollution, invasive species, and climate change are the primary drivers.\n\nBiodiversity loss is not merely an ecological tragedy—it undermines the ecosystem services that humanity depends upon: pollination of crops, purification of water and air, climate regulation, and disease control. Scientists warn of potential "tipping points" where ecosystems collapse irreversibly. The Kunming-Montreal Global Biodiversity Framework, adopted in 2022, set ambitious targets to protect 30% of Earth\'s land and oceans by 2030, though critics question whether political commitments will translate into effective action.',
      question:'According to the WWF Living Planet Report, by how much have wildlife populations declined between 1970 and 2018?',
      options:['A. An average of 49%','B. An average of 59%','C. An average of 69%','D. An average of 79%','E. An average of 89%'],
      answer:'C',
      explanation:'The passage states: "wildlife populations have declined by an average of 69% between 1970 and 2018"'
    },
    {
      id:'LBE-F22',
      passage:'Earth is currently experiencing its sixth mass extinction event, driven not by asteroids or volcanic eruptions, but by human activity. The World Wildlife Fund\'s Living Planet Report indicates that wildlife populations have declined by an average of 69% between 1970 and 2018. Habitat destruction (particularly deforestation), overexploitation of species, pollution, invasive species, and climate change are the primary drivers.\n\nBiodiversity loss is not merely an ecological tragedy—it undermines the ecosystem services that humanity depends upon: pollination of crops, purification of water and air, climate regulation, and disease control. Scientists warn of potential "tipping points" where ecosystems collapse irreversibly. The Kunming-Montreal Global Biodiversity Framework, adopted in 2022, set ambitious targets to protect 30% of Earth\'s land and oceans by 2030, though critics question whether political commitments will translate into effective action.',
      question:'What is the primary cause of the current mass extinction according to the passage?',
      options:['A. Asteroid impacts','B. Volcanic eruptions','C. Natural climate cycles','D. Human activity','E. Ocean acidification alone'],
      answer:'D',
      explanation:'The passage explicitly states the extinction event is "driven not by asteroids or volcanic eruptions, but by human activity"'
    },
    {
      id:'LBE-F23',
      passage:'Earth is currently experiencing its sixth mass extinction event, driven not by asteroids or volcanic eruptions, but by human activity. The World Wildlife Fund\'s Living Planet Report indicates that wildlife populations have declined by an average of 69% between 1970 and 2018. Habitat destruction (particularly deforestation), overexploitation of species, pollution, invasive species, and climate change are the primary drivers.\n\nBiodiversity loss is not merely an ecological tragedy—it undermines the ecosystem services that humanity depends upon: pollination of crops, purification of water and air, climate regulation, and disease control. Scientists warn of potential "tipping points" where ecosystems collapse irreversibly. The Kunming-Montreal Global Biodiversity Framework, adopted in 2022, set ambitious targets to protect 30% of Earth\'s land and oceans by 2030, though critics question whether political commitments will translate into effective action.',
      question:'What ecosystem services are mentioned in the passage?',
      options:['A. Timber, minerals, and fish stocks','B. Pollination, water purification, climate regulation, disease control','C. Tourism, recreation, and cultural value','D. Carbon storage, soil fertility, and coastal protection','E. Weather forecasting and natural disaster prevention'],
      answer:'B',
      explanation:'The passage lists: "pollination of crops, purification of water and air, climate regulation, and disease control"'
    },
    {
      id:'LBE-F24',
      passage:'Earth is currently experiencing its sixth mass extinction event, driven not by asteroids or volcanic eruptions, but by human activity. The World Wildlife Fund\'s Living Planet Report indicates that wildlife populations have declined by an average of 69% between 1970 and 2018. Habitat destruction (particularly deforestation), overexploitation of species, pollution, invasive species, and climate change are the primary drivers.\n\nBiodiversity loss is not merely an ecological tragedy—it undermines the ecosystem services that humanity depends upon: pollination of crops, purification of water and air, climate regulation, and disease control. Scientists warn of potential "tipping points" where ecosystems collapse irreversibly. The Kunming-Montreal Global Biodiversity Framework, adopted in 2022, set ambitious targets to protect 30% of Earth\'s land and oceans by 2030, though critics question whether political commitments will translate into effective action.',
      question:'The Kunming-Montreal Global Biodiversity Framework aims to protect what percentage of Earth\'s land and oceans by 2030?',
      options:['A. 10%','B. 20%','C. 30%','D. 40%','E. 50%'],
      answer:'C',
      explanation:'The passage states the framework "set ambitious targets to protect 30% of Earth\'s land and oceans by 2030"'
    },
    {
      id:'LBE-F25',
      passage:'Earth is currently experiencing its sixth mass extinction event, driven not by asteroids or volcanic eruptions, but by human activity. The World Wildlife Fund\'s Living Planet Report indicates that wildlife populations have declined by an average of 69% between 1970 and 2018. Habitat destruction (particularly deforestation), overexploitation of species, pollution, invasive species, and climate change are the primary drivers.\n\nBiodiversity loss is not merely an ecological tragedy—it undermines the ecosystem services that humanity depends upon: pollination of crops, purification of water and air, climate regulation, and disease control. Scientists warn of potential "tipping points" where ecosystems collapse irreversibly. The Kunming-Montreal Global Biodiversity Framework, adopted in 2022, set ambitious targets to protect 30% of Earth\'s land and oceans by 2030, though critics question whether political commitments will translate into effective action.',
      question:'What concern do critics raise about the Kunming-Montreal Framework?',
      options:['A. The target of 30% is too high to be realistic','B. The framework excludes developing countries','C. Political commitments may not translate into effective real-world action','D. The deadline of 2030 is too soon','E. The framework focuses only on ocean protection'],
      answer:'C',
      explanation:'Critics "question whether political commitments will translate into effective action" — expressing doubt about implementation'
    },
  ],

  /* ================================================================
   * PM — PENALARAN MATEMATIKA (30 soal)
   * ================================================================ */
  PM: [
    { id:'PM-F01', question:'Jika 2x + 7 = 19, maka nilai x adalah:', options:['A. 4','B. 5','C. 6','D. 7','E. 8'], answer:'C', explanation:'2x = 19−7 = 12 → x = 6' },
    { id:'PM-F02', question:'Nilai dari 3² + 4² adalah:', options:['A. 21','B. 23','C. 25','D. 27','E. 29'], answer:'C', explanation:'3²+4²= 9+16 = 25' },
    { id:'PM-F03', question:'Jika f(x) = 3x² − 2x + 1, maka f(2) adalah:', options:['A. 7','B. 8','C. 9','D. 10','E. 11'], answer:'C', explanation:'f(2)=3(4)−2(2)+1=12−4+1=9' },
    { id:'PM-F04', question:'Persamaan garis melalui (2, 5) dan (4, 9) mempunyai gradien:', options:['A. 1','B. 2','C. 3','D. 4','E. 5'], answer:'B', explanation:'m = (9−5)/(4−2) = 4/2 = 2' },
    { id:'PM-F05', question:'Nilai dari ∫₁² (3x²) dx adalah:', options:['A. 5','B. 6','C. 7','D. 8','E. 9'], answer:'C', explanation:'[x³]₁² = 8−1 = 7' },
    { id:'PM-F06', question:'Persamaan kuadrat x² − 5x + 6 = 0 mempunyai akar-akar:', options:['A. x=1 atau x=6','B. x=2 atau x=3','C. x=−2 atau x=−3','D. x=−1 atau x=−6','E. x=2 atau x=−3'], answer:'B', explanation:'(x−2)(x−3)=0 → x=2 atau x=3' },
    { id:'PM-F07', question:'Suatu segitiga siku-siku memiliki dua sisi tegak 9 cm dan 12 cm. Panjang hipotenusanya adalah:', options:['A. 13 cm','B. 14 cm','C. 15 cm','D. 16 cm','E. 17 cm'], answer:'C', explanation:'√(9²+12²)=√(81+144)=√225=15 cm' },
    { id:'PM-F08', question:'Nilai dari tan 45° + sin 30° adalah:', options:['A. 1','B. 1,2','C. 1,5','D. 2','E. 2,5'], answer:'C', explanation:'tan 45°=1; sin 30°=0,5. Total=1+0,5=1,5' },
    { id:'PM-F09', question:'Sebuah kubus memiliki sisi 5 cm. Volume kubus tersebut adalah:', options:['A. 100 cm³','B. 115 cm³','C. 125 cm³','D. 130 cm³','E. 150 cm³'], answer:'C', explanation:'V = s³ = 5³ = 125 cm³' },
    { id:'PM-F10', question:'Nilai median dari data: 4, 7, 2, 9, 5, 8, 3 adalah:', options:['A. 4','B. 5','C. 6','D. 7','E. 8'], answer:'B', explanation:'Diurutkan: 2,3,4,5,7,8,9. Data ke-4 (tengah) = 5' },
    { id:'PM-F11', question:'Nilai dari ²log 64 adalah:', options:['A. 4','B. 5','C. 6','D. 7','E. 8'], answer:'C', explanation:'²log 64 = x → 2ˣ=64=2⁶ → x=6' },
    { id:'PM-F12', question:'Jika P(A) = 0,4 dan P(B) = 0,3 dan A dan B saling bebas, maka P(A∩B) adalah:', options:['A. 0,07','B. 0,10','C. 0,12','D. 0,14','E. 0,70'], answer:'C', explanation:'P(A∩B)=P(A)×P(B)=0,4×0,3=0,12' },
    { id:'PM-F13', question:'Turunan dari f(x) = 5x⁴ − 3x² + 2 adalah:', options:['A. 20x³−6x','B. 20x³−3x','C. 20x⁴−6x','D. 5x³−6x','E. 20x³+6x'], answer:'A', explanation:'f\'(x)=20x³−6x' },
    { id:'PM-F14', question:'Suatu barisan aritmetika dengan suku pertama 3 dan beda 4. Suku ke-10 adalah:', options:['A. 36','B. 38','C. 39','D. 40','E. 43'], answer:'C', explanation:'a₁₀=3+(10−1)×4=3+36=39' },
    { id:'PM-F15', question:'Dari 7 orang akan dipilih 3 orang sebagai panitia. Banyak cara pemilihan adalah:', options:['A. 21','B. 28','C. 35','D. 42','E. 56'], answer:'C', explanation:'C(7,3)=7!/(3!4!)=(7×6×5)/(3×2×1)=35' },
    { id:'PM-F16', question:'Nilai sin 60° × cos 30° adalah:', options:['A. 1/4','B. 1/2','C. 3/4','D. √3/2','E. √3/4'], answer:'C', explanation:'sin60°=√3/2; cos30°=√3/2. Hasil=(√3/2)×(√3/2)=3/4' },
    { id:'PM-F17', question:'Luas lingkaran dengan diameter 14 cm (π=22/7) adalah:', options:['A. 144 cm²','B. 148 cm²','C. 150 cm²','D. 154 cm²','E. 160 cm²'], answer:'D', explanation:'r=7. L=π r²=(22/7)×49=22×7=154 cm²' },
    { id:'PM-F18', question:'Sistem persamaan: x+y=10 dan 2x−y=5. Nilai x adalah:', options:['A. 3','B. 4','C. 5','D. 6','E. 7'], answer:'C', explanation:'Tambahkan: 3x=15 → x=5; y=10-5=5' },
    { id:'PM-F19', question:'Nilai modus dari data: 3, 5, 3, 7, 5, 3, 8, 5, 3 adalah:', options:['A. 3','B. 5','C. 7','D. 8','E. 4,5'], answer:'A', explanation:'Angka 3 muncul 4 kali (frekuensi tertinggi) → Modus = 3' },
    { id:'PM-F20', question:'Jika vektor a=(4,3) dan vektor b=(1,−1), maka a·b (dot product) adalah:', options:['A. 0','B. 1','C. 3','D. 4','E. 5'], answer:'B', explanation:'a·b=(4×1)+(3×(−1))=4−3=1' },
    { id:'PM-F21', question:'Nilai dari lim(x→2) (x²−4)/(x−2) adalah:', options:['A. 0','B. 2','C. 4','D. 6','E. Tidak ada'], answer:'C', explanation:'(x²−4)/(x−2)=(x+2)(x−2)/(x−2)=x+2. Lim x→2: 2+2=4' },
    { id:'PM-F22', question:'Dalam sebuah kelas, nilai rata-rata 30 siswa adalah 75. Jika satu siswa baru bergabung dengan nilai 90, maka rata-rata baru adalah:', options:['A. 75,48','B. 75,5','C. 75,6','D. 76','E. 76,5'], answer:'A', explanation:'Total baru=(30×75)+90=2250+90=2340. Rata=2340/31≈75,48' },
    { id:'PM-F23', question:'Nilai dari (√3 + 1)(√3 − 1) adalah:', options:['A. 1','B. 2','C. 3','D. 4','E. √3'], answer:'B', explanation:'(a+b)(a−b)=a²−b²=(√3)²−1²=3−1=2' },
    { id:'PM-F24', question:'Sebuah tabung berdiameter 10 cm dan tinggi 14 cm. Volumenya (π=22/7) adalah:', options:['A. 1.000 cm³','B. 1.050 cm³','C. 1.100 cm³','D. 1.150 cm³','E. 1.200 cm³'], answer:'C', explanation:'r=5. V=π r²h=(22/7)×25×14=22×50=1.100 cm³' },
    { id:'PM-F25', question:'Jika logₐ b = 3 dan logₐ c = 2, maka logₐ (b²/c) adalah:', options:['A. 2','B. 3','C. 4','D. 5','E. 6'], answer:'C', explanation:'logₐ(b²/c)=2logₐb − logₐc = 2×3 − 2 = 4' },
    { id:'PM-F26', question:'Matriks A = [[2,1],[3,2]]. Invers A adalah:', options:['A. [[2,−1],[−3,2]]','B. [[−2,1],[3,−2]]','C. [[2,3],[1,2]]','D. [[1,0],[0,1]]','E. [[2,−1],[3,2]]'], answer:'A', explanation:'det A=4−3=1. A⁻¹=(1/1)[[2,−1],[−3,2]]=[[2,−1],[−3,2]]' },
    { id:'PM-F27', question:'Nilai maksimum f(x) = −x² + 6x − 5 adalah:', options:['A. 3','B. 4','C. 5','D. 6','E. 7'], answer:'B', explanation:'x_max=−6/(2×(−1))=3. f(3)=−9+18−5=4' },
    { id:'PM-F28', question:'Peluang mendapat angka ganjil pada pelemparan dadu sekali adalah:', options:['A. 1/6','B. 2/6','C. 3/6','D. 4/6','E. 5/6'], answer:'C', explanation:'Angka ganjil: 1,3,5 (3 dari 6). P=3/6=1/2' },
    { id:'PM-F29', question:'Suatu deret geometri dengan a=2, r=3. Jumlah 5 suku pertama adalah:', options:['A. 200','B. 220','C. 240','D. 242','E. 260'], answer:'D', explanation:'S₅=2×(3⁵−1)/(3−1)=2×(243−1)/2=2×121=242' },
    { id:'PM-F30', question:'Sebuah persegi panjang memiliki panjang (2x+3) cm dan lebar (x+2) cm. Jika kelilingnya 34 cm, nilai x adalah:', options:['A. 2','B. 3','C. 4','D. 5','E. 6'], answer:'C', explanation:'2[(2x+3)+(x+2)]=34 → 2(3x+5)=34 → 3x+5=17 → 3x=12 → x=4. Cek: panjang=11, lebar=6. Keliling=2(11+6)=34 ✓' },
  ],
};
