/**
 * SNBT Tryout Pro — Bank Soal Tambahan (Set 2)
 * 170 soal ekstra untuk variasi tryout
 * Digabung dengan QUESTION_BANK di getShuffledQuestions()
 */

const QUESTION_BANK_EXTRA = {
  PU: [
    // Deret & Pola
    { id:'PU-E01', question:'Deret: 4, 7, 13, 25, 49, __', options:['A. 97','B. 85','C. 98','D. 96','E. 100'], answer:'A', explanation:'Pola: ×2−1. 4→7(×2−1), 7→13(×2−1), 13→25, 25→49, 49→97' },
    { id:'PU-E02', question:'Deret: 1, 2, 6, 24, 120, __', options:['A. 480','B. 600','C. 720','D. 840','E. 360'], answer:'C', explanation:'Pola faktorial: 1!, 2!, 3!, 4!, 5!, 6!=720' },
    { id:'PU-E03', question:'Deret: 5, 8, 13, 20, 29, 40, __', options:['A. 51','B. 53','C. 55','D. 57','E. 52'], answer:'B', explanation:'Selisih: +3,+5,+7,+9,+11,+13 → 40+13=53' },
    { id:'PU-E04', question:'Bilangan berikutnya: 729, 243, 81, 27, __', options:['A. 3','B. 6','C. 9','D. 12','E. 18'], answer:'C', explanation:'Pola ÷3: 729÷3=243, 243÷3=81, 81÷3=27, 27÷3=9' },
    { id:'PU-E05', question:'Deret: 2, 3, 5, 8, 13, 21, 34, __', options:['A. 45','B. 55','C. 65','D. 55','E. 60'], answer:'B', explanation:'Fibonacci-like: 2+3=5, 3+5=8, …, 21+34=55' },
    { id:'PU-E06', question:'Deret: 17, 14, 11, 8, 5, __', options:['A. 0','B. 1','C. 2','D. 3','E. 4'], answer:'C', explanation:'Selisih −3 setiap suku: 5−3=2' },
    { id:'PU-E07', question:'Deret huruf: B, D, G, K, P, __', options:['A. V','B. U','C. W','D. X','E. T'], answer:'A', explanation:'Posisi: 2,4,7,11,16,22→V(22). Selisih: +2,+3,+4,+5,+6' },
    { id:'PU-E08', question:'Deret: 0.5, 1, 2, 4, 8, __', options:['A. 10','B. 12','C. 14','D. 16','E. 18'], answer:'D', explanation:'Pola ×2: 8×2=16' },
    { id:'PU-E09', question:'Deret: 1, 8, 27, 64, 125, __', options:['A. 196','B. 200','C. 216','D. 225','E. 256'], answer:'C', explanation:'Deret kubik: 1³, 2³, 3³, 4³, 5³, 6³=216' },
    { id:'PU-E10', question:'Deret: 3, 7, 15, 31, 63, __', options:['A. 100','B. 115','C. 125','D. 127','E. 130'], answer:'D', explanation:'Pola: ×2+1. 63×2+1=127' },
    // Analogi
    { id:'PU-E11', question:'PILOT : PESAWAT = NAHKODA : ?', options:['A. Laut','B. Jangkar','C. Pelabuhan','D. Kapal','E. Kompas'], answer:'D', explanation:'Pilot mengemudikan Pesawat; Nahkoda mengemudikan Kapal' },
    { id:'PU-E12', question:'PANAS : API = DINGIN : ?', options:['A. Hujan','B. Angin','C. Es','D. Salju','E. Air'], answer:'C', explanation:'Api menghasilkan Panas; Es menghasilkan Dingin' },
    { id:'PU-E13', question:'TELESKOP : BINTANG = MIKROSKOP : ?', options:['A. Bakteri','B. Lensa','C. Laboratorium','D. Dokter','E. Ilmuwan'], answer:'A', explanation:'Teleskop digunakan untuk mengamati Bintang; Mikroskop untuk Bakteri/kuman' },
    { id:'PU-E14', question:'LAPAR : MAKAN = HAUS : ?', options:['A. Tidur','B. Minum','C. Makan','D. Berenang','E. Istirahat'], answer:'B', explanation:'Lapar diatasi dengan Makan; Haus diatasi dengan Minum' },
    { id:'PU-E15', question:'SEPATU : KAKI = SARUNG TANGAN : ?', options:['A. Jari','B. Pergelangan','C. Tangan','D. Lengan','E. Kuku'], answer:'C', explanation:'Sepatu melindungi Kaki; Sarung Tangan melindungi Tangan' },
    { id:'PU-E16', question:'PENYEBAB : AKIBAT = STIMULUS : ?', options:['A. Saraf','B. Respons','C. Refleks','D. Input','E. Proses'], answer:'B', explanation:'Penyebab menghasilkan Akibat; Stimulus menghasilkan Respons' },
    { id:'PU-E17', question:'BUNGA : LEBAH = CAHAYA : ?', options:['A. Gelap','B. Buta','C. Tanaman','D. Lilin','E. Ngengat'], answer:'E', explanation:'Lebah tertarik pada Bunga; Ngengat tertarik pada Cahaya' },
    { id:'PU-E18', question:'KULIT : MANUSIA = CANGKANG : ?', options:['A. Telur','B. Siput','C. Kepiting','D. Semua benar','E. Pohon'], answer:'B', explanation:'Kulit adalah pelindung luar Manusia; Cangkang adalah pelindung luar Siput' },
    // Logika
    { id:'PU-E19', question:'Jika semua A adalah B, dan semua B adalah C, maka?', options:['A. Semua C adalah A','B. Semua A adalah C','C. Semua B adalah A','D. Tidak ada A yang C','E. Sebagian A bukan C'], answer:'B', explanation:'Silogisme: A→B dan B→C, maka A→C (semua A adalah C)' },
    { id:'PU-E20', question:'Jika P maka Q. Jika Q maka R. P terjadi. Kesimpulan?', options:['A. R tidak terjadi','B. Q tidak terjadi','C. R terjadi','D. P tidak terjadi','E. Tidak dapat disimpulkan'], answer:'C', explanation:'Modus Ponens: P→Q, Q→R, P maka R terjadi' },
    { id:'PU-E21', question:'Beberapa kucing adalah hewan peliharaan. Semua hewan peliharaan butuh makan. Kesimpulan?', options:['A. Semua kucing butuh makan','B. Beberapa kucing butuh makan','C. Tidak ada kucing yang makan','D. Semua yang makan adalah hewan peliharaan','E. Kucing bukan hewan peliharaan'], answer:'B', explanation:'Beberapa kucing → hewan peliharaan → butuh makan. Jadi beberapa kucing butuh makan' },
    { id:'PU-E22', question:'Nina lebih pintar dari Rina. Budi lebih pintar dari Nina. Santi lebih pintar dari Budi. Urutan dari paling pintar:',  options:['A. Santi-Budi-Nina-Rina','B. Budi-Santi-Nina-Rina','C. Nina-Budi-Santi-Rina','D. Santi-Nina-Budi-Rina','E. Rina-Nina-Budi-Santi'], answer:'A', explanation:'Santi>Budi>Nina>Rina' },
    { id:'PU-E23', question:'Hari ini Kamis. 100 hari lagi adalah hari apa?', options:['A. Senin','B. Selasa','C. Rabu','D. Kamis','E. Sabtu'], answer:'E', explanation:'100 = 14×7 + 2. Kamis + 2 = Sabtu' },
    // Himpunan & Kuantitatif
    { id:'PU-E24', question:'Sebuah toko menjual 200 unit produk. 120 unit terjual di pagi hari, sisanya di siang hari. Persentase penjualan siang adalah:', options:['A. 30%','B. 35%','C. 40%','D. 45%','E. 50%'], answer:'C', explanation:'Siang = 200−120=80. Persen = 80/200×100=40%' },
    { id:'PU-E25', question:'Jika 3 orang bisa menyelesaikan pekerjaan dalam 12 hari, berapa hari yang dibutuhkan 9 orang?', options:['A. 2 hari','B. 3 hari','C. 4 hari','D. 6 hari','E. 5 hari'], answer:'C', explanation:'3×12=36 hari-orang. 36÷9=4 hari' },
    { id:'PU-E26', question:'Jika 5x − 3 = 22, maka nilai x adalah:', options:['A. 4','B. 5','C. 6','D. 7','E. 8'], answer:'B', explanation:'5x = 22+3 = 25 → x = 5' },
    { id:'PU-E27', question:'Perbandingan laki-laki dan perempuan di kelas = 3:5. Jika ada 24 laki-laki, jumlah siswa seluruhnya adalah:', options:['A. 56','B. 60','C. 64','D. 68','E. 72'], answer:'C', explanation:'Perempuan = (5/3)×24=40. Total=24+40=64' },
    { id:'PU-E28', question:'Rata-rata nilai 8 siswa adalah 70. Nilai rata-rata naik menjadi 72 setelah 2 siswa baru bergabung. Rata-rata nilai 2 siswa baru adalah:', options:['A. 76','B. 78','C. 80','D. 82','E. 84'], answer:'C', explanation:'Total awal=560. Total baru=72×10=720. 2 siswa baru=720-560=160. Rata=80' },
    { id:'PU-E29', question:'Dua bilangan berbanding 2:3. Jumlah keduanya 120. Selisih kedua bilangan adalah:', options:['A. 18','B. 20','C. 22','D. 24','E. 26'], answer:'D', explanation:'A=48, B=72. Selisih=72-48=24' },
    { id:'PU-E30', question:'Sebuah persegi panjang luasnya 48 cm². Jika lebarnya 6 cm, kelilingnya adalah:', options:['A. 26 cm','B. 28 cm','C. 30 cm','D. 32 cm','E. 34 cm'], answer:'B', explanation:'Panjang=48/6=8. Keliling=2(8+6)=28 cm' },
  ],

  PPU: [
    { id:'PPU-E01', question:'Siapakah penemu telepon?', options:['A. Thomas Edison','B. Alexander Graham Bell','C. Nikola Tesla','D. Guglielmo Marconi','E. James Watt'], answer:'B', explanation:'Alexander Graham Bell menemukan telepon pada tahun 1876' },
    { id:'PPU-E02', question:'Ibukota Australia adalah:', options:['A. Sydney','B. Melbourne','C. Brisbane','D. Canberra','E. Perth'], answer:'D', explanation:'Canberra adalah ibukota Australia, bukan Sydney (kota terbesar)' },
    { id:'PPU-E03', question:'Unsur kimia dengan simbol "Fe" adalah:', options:['A. Fluorin','B. Fermium','C. Ferium','D. Besi','E. Tembaga'], answer:'D', explanation:'Fe berasal dari bahasa Latin "Ferrum" yang berarti Besi (Iron)' },
    { id:'PPU-E04', question:'Proklamasi kemerdekaan Indonesia teks aslinya diketik oleh:', options:['A. Soekarno','B. Mohammad Hatta','C. Sayuti Melik','D. Laksamana Maeda','E. Ahmad Subarjo'], answer:'C', explanation:'Sayuti Melik yang mengetik naskah proklamasi yang telah dikoreksi' },
    { id:'PPU-E05', question:'Apa nama proses perubahan wujud dari gas menjadi cair?', options:['A. Evaporasi','B. Sublimasi','C. Kondensasi','D. Deposisi','E. Solidifikasi'], answer:'C', explanation:'Kondensasi = perubahan wujud dari gas menjadi cair (kebalikan evaporasi)' },
    { id:'PPU-E06', question:'Badan dunia PBB yang menangani kesehatan adalah:', options:['A. UNESCO','B. UNICEF','C. WHO','D. UNDP','E. FAO'], answer:'C', explanation:'WHO (World Health Organization) adalah badan PBB untuk kesehatan global' },
    { id:'PPU-E07', question:'Gunung tertinggi di Indonesia adalah:', options:['A. Gunung Rinjani','B. Gunung Kerinci','C. Puncak Jaya','D. Gunung Semeru','E. Gunung Agung'], answer:'C', explanation:'Puncak Jaya (Carstensz Pyramid) 4.884 m di Papua adalah gunung tertinggi di Indonesia' },
    { id:'PPU-E08', question:'Perang Dunia II berakhir pada tahun:', options:['A. 1943','B. 1944','C. 1945','D. 1946','E. 1947'], answer:'C', explanation:'PD II berakhir tahun 1945: Jerman menyerah Mei 1945, Jepang September 1945' },
    { id:'PPU-E09', question:'Teori evolusi dikemukakan oleh:', options:['A. Isaac Newton','B. Albert Einstein','C. Charles Darwin','D. Gregor Mendel','E. Louis Pasteur'], answer:'C', explanation:'Charles Darwin mengemukakan teori evolusi melalui seleksi alam dalam On the Origin of Species (1859)' },
    { id:'PPU-E10', question:'Kecepatan cahaya di ruang hampa adalah kira-kira:', options:['A. 300 km/s','B. 3.000 km/s','C. 30.000 km/s','D. 300.000 km/s','E. 3.000.000 km/s'], answer:'D', explanation:'Kecepatan cahaya ≈ 300.000 km/s atau 3×10⁸ m/s' },
    { id:'PPU-E11', question:'Organ yang memproduksi insulin adalah:', options:['A. Hati','B. Ginjal','C. Pankreas','D. Lambung','E. Limpa'], answer:'C', explanation:'Insulin diproduksi oleh sel beta di pankreas untuk mengatur kadar gula darah' },
    { id:'PPU-E12', question:'Siapakah yang disebut "Bapak Pendidikan Nasional" Indonesia?', options:['A. Soekarno','B. Ki Hajar Dewantara','C. Mohammad Hatta','D. KH Ahmad Dahlan','E. Wahidin Sudirohusodo'], answer:'B', explanation:'Ki Hajar Dewantara (Raden Mas Soewardi Soerjaningrat) adalah Bapak Pendidikan Nasional' },
    { id:'PPU-E13', question:'Mata uang resmi negara Jepang adalah:', options:['A. Yuan','B. Won','C. Yen','D. Ringgit','E. Baht'], answer:'C', explanation:'Mata uang Jepang adalah Yen (¥)' },
    { id:'PPU-E14', question:'Lapisan terluar atmosfer Bumi adalah:', options:['A. Troposfer','B. Stratosfer','C. Mesosfer','D. Termosfer','E. Eksosfer'], answer:'E', explanation:'Urutan atmosfer dari bumi: Troposfer → Stratosfer → Mesosfer → Termosfer → Eksosfer (terluar)' },
    { id:'PPU-E15', question:'Gerakan Reformasi di Indonesia terjadi pada tahun:', options:['A. 1996','B. 1997','C. 1998','D. 1999','E. 2000'], answer:'C', explanation:'Reformasi 1998 menyebabkan jatuhnya Orde Baru dan mundurnya Soeharto pada 21 Mei 1998' },
    { id:'PPU-E16', question:'Manakah yang merupakan sumber energi terbarukan?', options:['A. Batu bara','B. Minyak bumi','C. Gas alam','D. Energi solar','E. Nuklir uranium'], answer:'D', explanation:'Energi solar (matahari) adalah sumber energi terbarukan karena tidak akan habis' },
    { id:'PPU-E17', question:'Peristiwa Sumpah Pemuda terjadi pada:', options:['A. 20 Oktober 1928','B. 28 Oktober 1928','C. 17 Agustus 1928','D. 2 Mei 1928','E. 1 Juni 1928'], answer:'B', explanation:'Sumpah Pemuda dicetuskan pada Kongres Pemuda II tanggal 28 Oktober 1928' },
    { id:'PPU-E18', question:'Rumus kimia gula pasir (sukrosa) adalah:', options:['A. C₆H₁₂O₆','B. C₁₂H₂₂O₁₁','C. C₂H₅OH','D. H₂SO₄','E. NaCl'], answer:'B', explanation:'Sukrosa (gula pasir) memiliki rumus C₁₂H₂₂O₁₁; C₆H₁₂O₆ adalah glukosa/fruktosa' },
    { id:'PPU-E19', question:'Siapakah penemu vaksin cacar?', options:['A. Louis Pasteur','B. Alexander Fleming','C. Edward Jenner','D. Robert Koch','E. Jonas Salk'], answer:'C', explanation:'Edward Jenner menemukan vaksin cacar (smallpox) pada tahun 1796' },
    { id:'PPU-E20', question:'Batas wilayah Indonesia di sebelah utara berbatasan dengan negara:', options:['A. Australia','B. Malaysia dan Filipina','C. Papua Nugini','D. India','E. Singapura saja'], answer:'B', explanation:'Sebelah utara: Malaysia, Singapura, Filipina, Laut Cina Selatan' },
  ],

  PBM: [
    // Set baru - Passage 1: Kecerdasan Buatan (soal 1-5)
    {
      id:'PBM-E01',
      passage:'Kecerdasan buatan (Artificial Intelligence/AI) telah memasuki hampir semua aspek kehidupan modern. Dari asisten virtual di ponsel hingga sistem rekomendasi di platform streaming, AI bekerja secara diam-diam namun signifikan. Para ahli memprediksikan bahwa pada tahun 2030, AI akan menyumbang lebih dari $15 triliun pada ekonomi global.\n\nNamun, kemajuan AI juga memunculkan kekhawatiran serius. Pertama, persoalan privasi: algoritma AI mampu menganalisis data pribadi dalam jumlah masif. Kedua, bias algoritma: jika data pelatihannya bias, outputnya pun akan bias. Ketiga, pengangguran: otomatisasi berpotensi menggantikan jutaan pekerjaan rutin. Para pakar menyarankan perlunya regulasi yang komprehensif dan kolaborasi global.',
      question:'Gagasan utama paragraf kedua teks tersebut adalah:',
      options:['A. AI akan menambah lapangan kerja baru','B. Algoritma AI selalu akurat','C. Kemajuan AI menimbulkan berbagai kekhawatiran serius','D. Regulasi AI sudah berjalan baik','E. AI hanya berdampak positif'],
      answer:'C',
      explanation:'Paragraf kedua membahas tiga kekhawatiran dari kemajuan AI: privasi, bias, dan pengangguran'
    },
    {
      id:'PBM-E02',
      passage:'Kecerdasan buatan (Artificial Intelligence/AI) telah memasuki hampir semua aspek kehidupan modern. Dari asisten virtual di ponsel hingga sistem rekomendasi di platform streaming, AI bekerja secara diam-diam namun signifikan. Para ahli memprediksikan bahwa pada tahun 2030, AI akan menyumbang lebih dari $15 triliun pada ekonomi global.\n\nNamun, kemajuan AI juga memunculkan kekhawatiran serius. Pertama, persoalan privasi: algoritma AI mampu menganalisis data pribadi dalam jumlah masif. Kedua, bias algoritma: jika data pelatihannya bias, outputnya pun akan bias. Ketiga, pengangguran: otomatisasi berpotensi menggantikan jutaan pekerjaan rutin. Para pakar menyarankan perlunya regulasi yang komprehensif dan kolaborasi global.',
      question:'Kata "masif" dalam konteks teks bermakna:',
      options:['A. Kecil','B. Ringan','C. Dalam jumlah sangat besar','D. Rahasia','E. Terstruktur'],
      answer:'C',
      explanation:'Masif = besar, dalam skala yang sangat besar/luas'
    },
    {
      id:'PBM-E03',
      passage:'Kecerdasan buatan (Artificial Intelligence/AI) telah memasuki hampir semua aspek kehidupan modern. Dari asisten virtual di ponsel hingga sistem rekomendasi di platform streaming, AI bekerja secara diam-diam namun signifikan. Para ahli memprediksikan bahwa pada tahun 2030, AI akan menyumbang lebih dari $15 triliun pada ekonomi global.\n\nNamun, kemajuan AI juga memunculkan kekhawatiran serius. Pertama, persoalan privasi: algoritma AI mampu menganalisis data pribadi dalam jumlah masif. Kedua, bias algoritma: jika data pelatihannya bias, outputnya pun akan bias. Ketiga, pengangguran: otomatisasi berpotensi menggantikan jutaan pekerjaan rutin. Para pakar menyarankan perlunya regulasi yang komprehensif dan kolaborasi global.',
      question:'Berapa prediksi kontribusi AI pada ekonomi global tahun 2030?',
      options:['A. $5 triliun','B. $10 triliun','C. $13 triliun','D. $15 triliun','E. $20 triliun'],
      answer:'D',
      explanation:'Teks menyebutkan "lebih dari $15 triliun pada ekonomi global"'
    },
    {
      id:'PBM-E04',
      passage:'Kecerdasan buatan (Artificial Intelligence/AI) telah memasuki hampir semua aspek kehidupan modern. Dari asisten virtual di ponsel hingga sistem rekomendasi di platform streaming, AI bekerja secara diam-diam namun signifikan. Para ahli memprediksikan bahwa pada tahun 2030, AI akan menyumbang lebih dari $15 triliun pada ekonomi global.\n\nNamun, kemajuan AI juga memunculkan kekhawatiran serius. Pertama, persoalan privasi: algoritma AI mampu menganalisis data pribadi dalam jumlah masif. Kedua, bias algoritma: jika data pelatihannya bias, outputnya pun akan bias. Ketiga, pengangguran: otomatisasi berpotensi menggantikan jutaan pekerjaan rutin. Para pakar menyarankan perlunya regulasi yang komprehensif dan kolaborasi global.',
      question:'Solusi yang ditawarkan para pakar berdasarkan teks adalah:',
      options:['A. Menghentikan pengembangan AI','B. Regulasi komprehensif dan kolaborasi global','C. Melarang penggunaan AI di sektor swasta','D. Membatasi data yang dianalisis AI','E. Meningkatkan gaji buruh'],
      answer:'B',
      explanation:'Teks menyebutkan: "regulasi yang komprehensif dan kolaborasi global"'
    },
    {
      id:'PBM-E05',
      passage:'Kecerdasan buatan (Artificial Intelligence/AI) telah memasuki hampir semua aspek kehidupan modern. Dari asisten virtual di ponsel hingga sistem rekomendasi di platform streaming, AI bekerja secara diam-diam namun signifikan. Para ahli memprediksikan bahwa pada tahun 2030, AI akan menyumbang lebih dari $15 triliun pada ekonomi global.\n\nNamun, kemajuan AI juga memunculkan kekhawatiran serius. Pertama, persoalan privasi: algoritma AI mampu menganalisis data pribadi dalam jumlah masif. Kedua, bias algoritma: jika data pelatihannya bias, outputnya pun akan bias. Ketiga, pengangguran: otomatisasi berpotensi menggantikan jutaan pekerjaan rutin. Para pakar menyarankan perlunya regulasi yang komprehensif dan kolaborasi global.',
      question:'Sikap penulis terhadap perkembangan AI dalam teks adalah:',
      options:['A. Sangat optimis tanpa catatan','B. Menolak sepenuhnya','C. Berimbang: mengakui manfaat sekaligus kekhawatiran','D. Takut secara berlebihan','E. Tidak memiliki pendapat'],
      answer:'C',
      explanation:'Teks memaparkan manfaat AI (paragraf 1) sekaligus kekhawatiran (paragraf 2) secara seimbang'
    },
    // Passage 2: Budaya Lokal (soal 6-10)
    {
      id:'PBM-E06',
      passage:'Kearifan lokal Indonesia merupakan warisan budaya yang tak ternilai. Nilai-nilai seperti gotong royong, musyawarah mufakat, dan tepa selira telah menjadi perekat sosial masyarakat Indonesia selama berabad-abad. Di tengah arus globalisasi yang deras, eksistensi kearifan lokal ini semakin terancam.\n\nGenerasi muda cenderung lebih akrab dengan budaya populer global daripada tradisi leluhur. Padahal, banyak ahli berpendapat bahwa kearifan lokal mengandung solusi untuk berbagai permasalahan kontemporer—mulai dari pengelolaan lingkungan hidup (hutan adat, subak Bali) hingga resolusi konflik sosial. Revitalisasi kearifan lokal bukan berarti menolak modernitas, melainkan mengintegrasikannya secara bijaksana.',
      question:'Topik utama teks tersebut adalah:',
      options:['A. Dampak negatif globalisasi','B. Cara bertanam menurut tradisi Bali','C. Pentingnya kearifan lokal di era modern','D. Perbedaan budaya lokal dan global','E. Sejarah gotong royong di Indonesia'],
      answer:'C',
      explanation:'Teks membahas nilai kearifan lokal, ancamannya, dan pentingnya revitalisasi di era modern'
    },
    {
      id:'PBM-E07',
      passage:'Kearifan lokal Indonesia merupakan warisan budaya yang tak ternilai. Nilai-nilai seperti gotong royong, musyawarah mufakat, dan tepa selira telah menjadi perekat sosial masyarakat Indonesia selama berabad-abad. Di tengah arus globalisasi yang deras, eksistensi kearifan lokal ini semakin terancam.\n\nGenerasi muda cenderung lebih akrab dengan budaya populer global daripada tradisi leluhur. Padahal, banyak ahli berpendapat bahwa kearifan lokal mengandung solusi untuk berbagai permasalahan kontemporer—mulai dari pengelolaan lingkungan hidup (hutan adat, subak Bali) hingga resolusi konflik sosial. Revitalisasi kearifan lokal bukan berarti menolak modernitas, melainkan mengintegrasikannya secara bijaksana.',
      question:'Apa yang dimaksud "tepa selira" berdasarkan konteks teks?',
      options:['A. Gotong royong dalam bekerja','B. Musyawarah untuk mufakat','C. Nilai kearifan lokal perekat sosial','D. Sistem pertanian tradisional','E. Penolakan terhadap globalisasi'],
      answer:'C',
      explanation:'"Tepa selira" disebutkan sebagai salah satu nilai kearifan lokal yang menjadi perekat sosial'
    },
    {
      id:'PBM-E08',
      passage:'Kearifan lokal Indonesia merupakan warisan budaya yang tak ternilai. Nilai-nilai seperti gotong royong, musyawarah mufakat, dan tepa selira telah menjadi perekat sosial masyarakat Indonesia selama berabad-abad. Di tengah arus globalisasi yang deras, eksistensi kearifan lokal ini semakin terancam.\n\nGenerasi muda cenderung lebih akrab dengan budaya populer global daripada tradisi leluhur. Padahal, banyak ahli berpendapat bahwa kearifan lokal mengandung solusi untuk berbagai permasalahan kontemporer—mulai dari pengelolaan lingkungan hidup (hutan adat, subak Bali) hingga resolusi konflik sosial. Revitalisasi kearifan lokal bukan berarti menolak modernitas, melainkan mengintegrasikannya secara bijaksana.',
      question:'Kata "revitalisasi" dalam paragraf terakhir bermakna:',
      options:['A. Penghancuran secara bertahap','B. Penelitian mendalam','C. Pembaruan atau penghidupan kembali','D. Pengabaian','E. Dokumentasi'],
      answer:'C',
      explanation:'Revitalisasi = upaya menghidupkan kembali sesuatu agar lebih aktif, vital, dan relevan'
    },
    {
      id:'PBM-E09',
      passage:'Kearifan lokal Indonesia merupakan warisan budaya yang tak ternilai. Nilai-nilai seperti gotong royong, musyawarah mufakat, dan tepa selira telah menjadi perekat sosial masyarakat Indonesia selama berabad-abad. Di tengah arus globalisasi yang deras, eksistensi kearifan lokal ini semakin terancam.\n\nGenerasi muda cenderung lebih akrab dengan budaya populer global daripada tradisi leluhur. Padahal, banyak ahli berpendapat bahwa kearifan lokal mengandung solusi untuk berbagai permasalahan kontemporer—mulai dari pengelolaan lingkungan hidup (hutan adat, subak Bali) hingga resolusi konflik sosial. Revitalisasi kearifan lokal bukan berarti menolak modernitas, melainkan mengintegrasikannya secara bijaksana.',
      question:'Menurut teks, contoh kearifan lokal dalam pengelolaan lingkungan adalah:',
      options:['A. Gotong royong dan musyawarah','B. Hutan adat dan subak Bali','C. Bahasa daerah dan tarian tradisional','D. Budaya populer global','E. Sistem pemerintahan adat'],
      answer:'B',
      explanation:'Teks menyebut "hutan adat, subak Bali" sebagai contoh kearifan lokal pengelolaan lingkungan'
    },
    {
      id:'PBM-E10',
      passage:'Kearifan lokal Indonesia merupakan warisan budaya yang tak ternilai. Nilai-nilai seperti gotong royong, musyawarah mufakat, dan tepa selira telah menjadi perekat sosial masyarakat Indonesia selama berabad-abad. Di tengah arus globalisasi yang deras, eksistensi kearifan lokal ini semakin terancam.\n\nGenerasi muda cenderung lebih akrab dengan budaya populer global daripada tradisi leluhur. Padahal, banyak ahli berpendapat bahwa kearifan lokal mengandung solusi untuk berbagai permasalahan kontemporer—mulai dari pengelolaan lingkungan hidup (hutan adat, subak Bali) hingga resolusi konflik sosial. Revitalisasi kearifan lokal bukan berarti menolak modernitas, melainkan mengintegrasikannya secara bijaksana.',
      question:'Simpulan yang PALING TEPAT dari teks adalah:',
      options:['A. Globalisasi harus dihentikan demi kearifan lokal','B. Generasi muda tidak peduli budaya','C. Kearifan lokal relevan untuk zaman modern dan perlu diintegrasikan secara bijak','D. Kearifan lokal sudah tidak bisa diselamatkan','E. Modernitas lebih penting dari tradisi'],
      answer:'C',
      explanation:'Teks menyimpulkan bahwa revitalisasi kearifan lokal bukan menolak modernitas, tapi mengintegrasikan secara bijak'
    },
    // Passage 3: Gizi (soal 11-15)
    {
      id:'PBM-E11',
      passage:'Pola makan bergizi seimbang adalah fondasi kesehatan jangka panjang. Tubuh manusia membutuhkan berbagai nutrisi: karbohidrat sebagai sumber energi utama, protein untuk membangun dan memperbaiki jaringan, lemak sehat untuk fungsi otak dan hormon, serta vitamin dan mineral untuk proses metabolisme. Kekurangan salah satu nutrisi dapat menyebabkan berbagai penyakit defisiensi.\n\nPanduan "Isi Piringku" dari Kemenkes RI menyarankan setiap piring makan terdiri dari 50% sayur dan buah, 25% karbohidrat (nasi/jagung/ubi), dan 25% lauk pauk (protein hewani dan nabati). Minum air putih cukup—minimal 8 gelas sehari—serta aktivitas fisik rutin melengkapi gaya hidup sehat.',
      question:'Apa fungsi protein berdasarkan teks?',
      options:['A. Sumber energi utama','B. Fungsi otak dan hormon','C. Membangun dan memperbaiki jaringan','D. Proses metabolisme','E. Mengganti cairan tubuh'],
      answer:'C',
      explanation:'Teks menyebutkan protein untuk "membangun dan memperbaiki jaringan"'
    },
    {
      id:'PBM-E12',
      passage:'Pola makan bergizi seimbang adalah fondasi kesehatan jangka panjang. Tubuh manusia membutuhkan berbagai nutrisi: karbohidrat sebagai sumber energi utama, protein untuk membangun dan memperbaiki jaringan, lemak sehat untuk fungsi otak dan hormon, serta vitamin dan mineral untuk proses metabolisme. Kekurangan salah satu nutrisi dapat menyebabkan berbagai penyakit defisiensi.\n\nPanduan "Isi Piringku" dari Kemenkes RI menyarankan setiap piring makan terdiri dari 50% sayur dan buah, 25% karbohidrat (nasi/jagung/ubi), dan 25% lauk pauk (protein hewani dan nabati). Minum air putih cukup—minimal 8 gelas sehari—serta aktivitas fisik rutin melengkapi gaya hidup sehat.',
      question:'Berdasarkan panduan "Isi Piringku", porsi sayur dan buah dalam satu piring adalah:',
      options:['A. 25%','B. 35%','C. 40%','D. 50%','E. 60%'],
      answer:'D',
      explanation:'Teks menyebutkan "50% sayur dan buah" dalam panduan Isi Piringku'
    },
    {
      id:'PBM-E13',
      passage:'Pola makan bergizi seimbang adalah fondasi kesehatan jangka panjang. Tubuh manusia membutuhkan berbagai nutrisi: karbohidrat sebagai sumber energi utama, protein untuk membangun dan memperbaiki jaringan, lemak sehat untuk fungsi otak dan hormon, serta vitamin dan mineral untuk proses metabolisme. Kekurangan salah satu nutrisi dapat menyebabkan berbagai penyakit defisiensi.\n\nPanduan "Isi Piringku" dari Kemenkes RI menyarankan setiap piring makan terdiri dari 50% sayur dan buah, 25% karbohidrat (nasi/jagung/ubi), dan 25% lauk pauk (protein hewani dan nabati). Minum air putih cukup—minimal 8 gelas sehari—serta aktivitas fisik rutin melengkapi gaya hidup sehat.',
      question:'Kata "defisiensi" dalam teks berarti:',
      options:['A. Kelebihan','B. Kekurangan/ketidakcukupan','C. Keseimbangan','D. Kemajuan','E. Kejenuhan'],
      answer:'B',
      explanation:'Defisiensi = kekurangan, ketidakcukupan suatu nutrisi atau zat penting'
    },
    {
      id:'PBM-E14',
      passage:'Pola makan bergizi seimbang adalah fondasi kesehatan jangka panjang. Tubuh manusia membutuhkan berbagai nutrisi: karbohidrat sebagai sumber energi utama, protein untuk membangun dan memperbaiki jaringan, lemak sehat untuk fungsi otak dan hormon, serta vitamin dan mineral untuk proses metabolisme. Kekurangan salah satu nutrisi dapat menyebabkan berbagai penyakit defisiensi.\n\nPanduan "Isi Piringku" dari Kemenkes RI menyarankan setiap piring makan terdiri dari 50% sayur dan buah, 25% karbohidrat (nasi/jagung/ubi), dan 25% lauk pauk (protein hewani dan nabati). Minum air putih cukup—minimal 8 gelas sehari—serta aktivitas fisik rutin melengkapi gaya hidup sehat.',
      question:'Menurut teks, apa saja komponen gaya hidup sehat selain makan bergizi?',
      options:['A. Tidur cukup dan olahraga','B. Minum air putih cukup dan aktivitas fisik rutin','C. Suplemen vitamin dan mineral','D. Puasa berkala','E. Diet ketat tanpa lemak'],
      answer:'B',
      explanation:'Teks menyebut: "Minum air putih cukup...serta aktivitas fisik rutin" sebagai pelengkap'
    },
    {
      id:'PBM-E15',
      passage:'Pola makan bergizi seimbang adalah fondasi kesehatan jangka panjang. Tubuh manusia membutuhkan berbagai nutrisi: karbohidrat sebagai sumber energi utama, protein untuk membangun dan memperbaiki jaringan, lemak sehat untuk fungsi otak dan hormon, serta vitamin dan mineral untuk proses metabolisme. Kekurangan salah satu nutrisi dapat menyebabkan berbagai penyakit defisiensi.\n\nPanduan "Isi Piringku" dari Kemenkes RI menyarankan setiap piring makan terdiri dari 50% sayur dan buah, 25% karbohidrat (nasi/jagung/ubi), dan 25% lauk pauk (protein hewani dan nabati). Minum air putih cukup—minimal 8 gelas sehari—serta aktivitas fisik rutin melengkapi gaya hidup sehat.',
      question:'Pandu "Isi Piringku" dikeluarkan oleh:',
      options:['A. WHO','B. BPOM','C. Kemenkes RI','D. IDI','E. Kementan RI'],
      answer:'C',
      explanation:'Teks menyebut panduan "Isi Piringku" dari Kemenkes RI (Kementerian Kesehatan)'
    },
    // Passage 4: Transportasi (PBM16-20)
    {
      id:'PBM-E16',
      passage:'Kemacetan lalu lintas di kota-kota besar Indonesia telah mencapai titik kritis. DKI Jakarta, misalnya, kerap menempati peringkat teratas kota termacet di dunia. Kerugian ekonomi akibat kemacetan diperhitungkan mencapai ratusan triliun rupiah per tahun, belum termasuk dampak kesehatan akibat polusi udara.\n\nSolusi yang sering diusulkan antara lain: pengembangan transportasi umum massal (MRT, LRT, BRT), pembatasan kendaraan pribadi melalui sistem ganjil-genap atau Electronic Road Pricing (ERP), dan penataan kota berbasis transit (TOD). Keberhasilan solusi ini sangat bergantung pada komitmen pemerintah, dukungan masyarakat, dan kualitas layanan transportasi publik itu sendiri.',
      question:'Masalah utama yang dibahas dalam teks adalah:',
      options:['A. Polusi udara di Jakarta','B. Krisis transportasi dan kemacetan di kota-kota besar','C. Kegagalan program MRT','D. Kurangnya jalan tol','E. Harga BBM yang tinggi'],
      answer:'B',
      explanation:'Teks membahas kemacetan sebagai masalah utama beserta solusi yang ditawarkan'
    },
    {
      id:'PBM-E17',
      passage:'Kemacetan lalu lintas di kota-kota besar Indonesia telah mencapai titik kritis. DKI Jakarta, misalnya, kerap menempati peringkat teratas kota termacet di dunia. Kerugian ekonomi akibat kemacetan diperhitungkan mencapai ratusan triliun rupiah per tahun, belum termasuk dampak kesehatan akibat polusi udara.\n\nSolusi yang sering diusulkan antara lain: pengembangan transportasi umum massal (MRT, LRT, BRT), pembatasan kendaraan pribadi melalui sistem ganjil-genap atau Electronic Road Pricing (ERP), dan penataan kota berbasis transit (TOD). Keberhasilan solusi ini sangat bergantung pada komitmen pemerintah, dukungan masyarakat, dan kualitas layanan transportasi publik itu sendiri.',
      question:'TOD dalam teks merupakan singkatan dari:',
      options:['A. Transport Order Division','B. Transit Oriented Development','C. Technology Operation Design','D. Total Overhead Distance','E. Traffic Operation Department'],
      answer:'B',
      explanation:'TOD = Transit Oriented Development = penataan kota berbasis transit (stasiun/halte)'
    },
    {
      id:'PBM-E18',
      passage:'Kemacetan lalu lintas di kota-kota besar Indonesia telah mencapai titik kritis. DKI Jakarta, misalnya, kerap menempati peringkat teratas kota termacet di dunia. Kerugian ekonomi akibat kemacetan diperhitungkan mencapai ratusan triliun rupiah per tahun, belum termasuk dampak kesehatan akibat polusi udara.\n\nSolusi yang sering diusulkan antara lain: pengembangan transportasi umum massal (MRT, LRT, BRT), pembatasan kendaraan pribadi melalui sistem ganjil-genap atau Electronic Road Pricing (ERP), dan penataan kota berbasis transit (TOD). Keberhasilan solusi ini sangat bergantung pada komitmen pemerintah, dukungan masyarakat, dan kualitas layanan transportasi publik itu sendiri.',
      question:'Faktor penentu keberhasilan solusi kemacetan menurut teks adalah:',
      options:['A. Anggaran pemerintah yang besar','B. Komitmen pemerintah, dukungan masyarakat, dan kualitas layanan','C. Teknologi canggih saja','D. Sanksi berat bagi pelanggar','E. Pembangunan jalan baru'],
      answer:'B',
      explanation:'Teks menyebut tiga faktor: komitmen pemerintah, dukungan masyarakat, kualitas layanan transportasi'
    },
    {
      id:'PBM-E19',
      passage:'Kemacetan lalu lintas di kota-kota besar Indonesia telah mencapai titik kritis. DKI Jakarta, misalnya, kerap menempati peringkat teratas kota termacet di dunia. Kerugian ekonomi akibat kemacetan diperhitungkan mencapai ratusan triliun rupiah per tahun, belum termasuk dampak kesehatan akibat polusi udara.\n\nSolusi yang sering diusulkan antara lain: pengembangan transportasi umum massal (MRT, LRT, BRT), pembatasan kendaraan pribadi melalui sistem ganjil-genap atau Electronic Road Pricing (ERP), dan penataan kota berbasis transit (TOD). Keberhasilan solusi ini sangat bergantung pada komitmen pemerintah, dukungan masyarakat, dan kualitas layanan transportasi publik itu sendiri.',
      question:'ERP dalam teks adalah sistem:',
      options:['A. Elektronik untuk pemantauan polusi','B. Pengisian bahan bakar otomatis','C. Pembayaran jalan secara elektronik','D. Registrasi kendaraan online','E. Sistem sinyal lalu lintas pintar'],
      answer:'C',
      explanation:'ERP = Electronic Road Pricing = sistem pembayaran/retribusi jalan secara elektronik'
    },
    {
      id:'PBM-E20',
      passage:'Kemacetan lalu lintas di kota-kota besar Indonesia telah mencapai titik kritis. DKI Jakarta, misalnya, kerap menempati peringkat teratas kota termacet di dunia. Kerugian ekonomi akibat kemacetan diperhitungkan mencapai ratusan triliun rupiah per tahun, belum termasuk dampak kesehatan akibat polusi udara.\n\nSolusi yang sering diusulkan antara lain: pengembangan transportasi umum massal (MRT, LRT, BRT), pembatasan kendaraan pribadi melalui sistem ganjil-genap atau Electronic Road Pricing (ERP), dan penataan kota berbasis transit (TOD). Keberhasilan solusi ini sangat bergantung pada komitmen pemerintah, dukungan masyarakat, dan kualitas layanan transportasi publik itu sendiri.',
      question:'Dampak kemacetan yang disebutkan teks adalah:',
      options:['A. Kerugian ekonomi dan dampak kesehatan akibat polusi','B. Hanya kerugian ekonomi','C. Hanya polusi udara','D. Peningkatan angka kecelakaan','E. Penurunan pariwisata'],
      answer:'A',
      explanation:'Teks menyebut dua dampak: kerugian ekonomi ratusan triliun dan dampak kesehatan akibat polusi'
    },
  ],

  PK: [
    { id:'PK-E01', question:'Jika 35% dari y = 140, maka y adalah:', options:['A. 350','B. 380','C. 400','D. 420','E. 450'], answer:'C', explanation:'0,35 × y = 140 → y = 140/0,35 = 400' },
    { id:'PK-E02', question:'Sebuah bus menempuh 360 km dalam 4 jam. Jika kecepatannya dinaikkan 20%, waktu tempuhnya menjadi:', options:['A. 2 jam 45 menit','B. 3 jam','C. 3 jam 20 menit','D. 3 jam 30 menit','E. 2 jam 30 menit'], answer:'C', explanation:'Kec awal=90 km/jam. Kec baru=108 km/jam. Waktu=360/108=3,33 jam ≈ 3 jam 20 menit' },
    { id:'PK-E03', question:'Jika akar-akar persamaan x²−7x+12=0 adalah p dan q, maka p+q=', options:['A. 5','B. 6','C. 7','D. 8','E. 12'], answer:'C', explanation:'Dari Vieta: p+q = 7 (koefisien −b/a = 7/1)' },
    { id:'PK-E04', question:'Banyak diagonal sebuah segi enam beraturan adalah:', options:['A. 6','B. 8','C. 9','D. 12','E. 15'], answer:'C', explanation:'Diagonal = n(n-3)/2 = 6(3)/2 = 9' },
    { id:'PK-E05', question:'Sebuah kerucut bervolume 462 cm³ dan jari-jari alas 7 cm, tingginya (π=22/7):', options:['A. 6 cm','B. 7 cm','C. 8 cm','D. 9 cm','E. 10 cm'], answer:'D', explanation:'V=(1/3)πr²t → 462=(1/3)(22/7)(49)t → 462=154t/3 → t=9 cm' },
    { id:'PK-E06', question:'Jika log₃ x = 4, maka nilai x adalah:', options:['A. 12','B. 27','C. 64','D. 81','E. 243'], answer:'D', explanation:'log₃ x=4 → x=3⁴=81' },
    { id:'PK-E07', question:'Simpangan baku data: 4, 4, 4, 4, 4 adalah:', options:['A. 0','B. 1','C. 2','D. 4','E. 5'], answer:'A', explanation:'Semua nilai sama, tidak ada variasi → simpangan baku = 0' },
    { id:'PK-E08', question:'Nilai dari tan 45° + cos 0° − sin 90° adalah:', options:['A. 0','B. 1','C. 2','D. −1','E. 3'], answer:'B', explanation:'tan45°=1, cos0°=1, sin90°=1 → 1+1−1=1' },
    { id:'PK-E09', question:'Lima siswa berturut-turut mendapat nilai: 65, 70, 75, 80, 85. Standar deviasi data ini adalah:', options:['A. 5','B. 6','C. 7','D. 7,07','E. 8'], answer:'D', explanation:'Rata=75. Variansi=[(100+25+0+25+100)/5]=50. SD=√50≈7,07' },
    { id:'PK-E10', question:'Seorang pedagang membeli buku Rp60.000/lusin. Dijual Rp6.500/buku. Persentase keuntungan:', options:['A. 20%','B. 25%','C. 30%','D. 35%','E. 40'], answer:'C', explanation:'Harga beli/buku=60000/12=5000. Untung=1500. Persen=1500/5000×100=30%' },
    { id:'PK-E11', question:'Peluang mendapat bilangan prima saat melempar dadu adalah:', options:['A. 1/6','B. 1/3','C. 1/2','D. 2/3','E. 5/6'], answer:'C', explanation:'Prima di dadu: {2,3,5} = 3 sisi → 3/6=1/2' },
    { id:'PK-E12', question:'Luas trapesium dengan sisi sejajar 10 cm dan 6 cm, tinggi 8 cm adalah:', options:['A. 48 cm²','B. 56 cm²','C. 60 cm²','D. 64 cm²','E. 72 cm²'], answer:'D', explanation:'L = ½(10+6)×8 = ½×16×8 = 64 cm²' },
    { id:'PK-E13', question:'Jika f(x) = x² − 2x + 1, nilai f(4) adalah:', options:['A. 7','B. 8','C. 9','D. 10','E. 11'], answer:'C', explanation:'f(4)=16−8+1=9' },
    { id:'PK-E14', question:'Nilai P(5,3) (permutasi) adalah:', options:['A. 30','B. 40','C. 50','D. 60','E. 120'], answer:'D', explanation:'P(5,3) = 5!/(5-3)! = 5×4×3 = 60' },
    { id:'PK-E15', question:'Modal Rp 2.000.000 dengan bunga tunggal 6%/tahun. Bunga setelah 8 bulan adalah:', options:['A. Rp 72.000','B. Rp 80.000','C. Rp 96.000','D. Rp 100.000','E. Rp 120.000'], answer:'B', explanation:'Bunga = 2.000.000 × 6% × (8/12) = 2.000.000 × 0,04 = 80.000' },
    { id:'PK-E16', question:'Banyak cara menyusun huruf "MAKAN" yang berbeda adalah:', options:['A. 60','B. 72','C. 80','D. 90','E. 120'], answer:'A', explanation:'5 huruf, A muncul 2x: 5!/2! = 120/2 = 60' },
    { id:'PK-E17', question:'Persamaan kuadrat 2x² − 5x − 3 = 0 mempunyai akar x₁ dan x₂. Nilai x₁ × x₂ adalah:', options:['A. −3/2','B. 3/2','C. −5/2','D. 5/2','E. 3'], answer:'A', explanation:'Hasil kali akar = c/a = −3/2' },
    { id:'PK-E18', question:'Volume balok dengan panjang 8, lebar 5, tinggi 4 cm adalah:', options:['A. 100 cm³','B. 120 cm³','C. 140 cm³','D. 160 cm³','E. 200 cm³'], answer:'D', explanation:'V = p×l×t = 8×5×4 = 160 cm³' },
    { id:'PK-E19', question:'Jika 2^(x+1) = 32, maka x adalah:', options:['A. 3','B. 4','C. 5','D. 6','E. 2'], answer:'B', explanation:'2^(x+1) = 2^5 → x+1=5 → x=4' },
    { id:'PK-E20', question:'Nilai rata-rata 6 data adalah 50. Jika satu data bernilai 80 ditambahkan, rata-rata baru adalah:', options:['A. 52,5','B. 53','C. 54','D. 55','E. 56'], answer:'C', explanation:'(6×50+80)/7 = 380/7 ≈ 54,3 ≈ 54' },
  ],

  LBI: [
    // Passage baru: Energi Terbarukan (LBI E1-6)
    {
      id:'LBI-E01',
      passage:'Indonesia memiliki potensi energi terbarukan yang sangat besar. Letak geografis sebagai negara tropis menjamin paparan sinar matahari sepanjang tahun, sementara garis pantai yang panjang menawarkan potensi energi angin dan gelombang laut. Selain itu, ribuan pulau vulkanik menyimpan energi panas bumi (geothermal) yang signifikan—Indonesia memiliki cadangan geothermal terbesar kedua di dunia.\n\nNamun, pemanfaatan energi terbarukan di Indonesia masih jauh dari optimal. Bauran energi terbarukan baru mencapai sekitar 12% dari total produksi energi nasional, jauh di bawah target 23% pada tahun 2025. Hambatan utama meliputi tingginya biaya investasi awal, keterbatasan infrastruktur grid, dan belum meratanya insentif pemerintah untuk energi hijau.',
      question:'Peringkat Indonesia dalam cadangan geothermal di dunia adalah:',
      options:['A. Pertama','B. Kedua','C. Ketiga','D. Keempat','E. Kelima'],
      answer:'B',
      explanation:'Teks menyebutkan: "cadangan geothermal terbesar kedua di dunia"'
    },
    {
      id:'LBI-E02',
      passage:'Indonesia memiliki potensi energi terbarukan yang sangat besar. Letak geografis sebagai negara tropis menjamin paparan sinar matahari sepanjang tahun, sementara garis pantai yang panjang menawarkan potensi energi angin dan gelombang laut. Selain itu, ribuan pulau vulkanik menyimpan energi panas bumi (geothermal) yang signifikan—Indonesia memiliki cadangan geothermal terbesar kedua di dunia.\n\nNamun, pemanfaatan energi terbarukan di Indonesia masih jauh dari optimal. Bauran energi terbarukan baru mencapai sekitar 12% dari total produksi energi nasional, jauh di bawah target 23% pada tahun 2025. Hambatan utama meliputi tingginya biaya investasi awal, keterbatasan infrastruktur grid, dan belum meratanya insentif pemerintah untuk energi hijau.',
      question:'Hambatan pengembangan energi terbarukan yang TIDAK disebutkan dalam teks adalah:',
      options:['A. Biaya investasi awal yang tinggi','B. Keterbatasan infrastruktur grid','C. Kurangnya insentif pemerintah','D. Kurangnya teknisi berpengalaman','E. Semua ada dalam teks'],
      answer:'D',
      explanation:'Kurangnya teknisi tidak disebutkan. Yang disebutkan: biaya, infrastruktur grid, insentif'
    },
    {
      id:'LBI-E03',
      passage:'Indonesia memiliki potensi energi terbarukan yang sangat besar. Letak geografis sebagai negara tropis menjamin paparan sinar matahari sepanjang tahun, sementara garis pantai yang panjang menawarkan potensi energi angin dan gelombang laut. Selain itu, ribuan pulau vulkanik menyimpan energi panas bumi (geothermal) yang signifikan—Indonesia memiliki cadangan geothermal terbesar kedua di dunia.\n\nNamun, pemanfaatan energi terbarukan di Indonesia masih jauh dari optimal. Bauran energi terbarukan baru mencapai sekitar 12% dari total produksi energi nasional, jauh di bawah target 23% pada tahun 2025. Hambatan utama meliputi tingginya biaya investasi awal, keterbatasan infrastruktur grid, dan belum meratanya insentif pemerintah untuk energi hijau.',
      question:'Kata "bauran" dalam konteks "bauran energi terbarukan" bermakna:',
      options:['A. Biaya','B. Campuran/proporsi','C. Target','D. Infrastruktur','E. Insentif'],
      answer:'B',
      explanation:'Bauran energi = energy mix = proporsi atau campuran dari berbagai sumber energi'
    },
    {
      id:'LBI-E04',
      passage:'Indonesia memiliki potensi energi terbarukan yang sangat besar. Letak geografis sebagai negara tropis menjamin paparan sinar matahari sepanjang tahun, sementara garis pantai yang panjang menawarkan potensi energi angin dan gelombang laut. Selain itu, ribuan pulau vulkanik menyimpan energi panas bumi (geothermal) yang signifikan—Indonesia memiliki cadangan geothermal terbesar kedua di dunia.\n\nNamun, pemanfaatan energi terbarukan di Indonesia masih jauh dari optimal. Bauran energi terbarukan baru mencapai sekitar 12% dari total produksi energi nasional, jauh di bawah target 23% pada tahun 2025. Hambatan utama meliputi tingginya biaya investasi awal, keterbatasan infrastruktur grid, dan belum meratanya insentif pemerintah untuk energi hijau.',
      question:'Target bauran energi terbarukan Indonesia pada tahun 2025 adalah:',
      options:['A. 12%','B. 15%','C. 20%','D. 23%','E. 30%'],
      answer:'D',
      explanation:'Teks menyebutkan: "target 23% pada tahun 2025"'
    },
    {
      id:'LBI-E05',
      passage:'Indonesia memiliki potensi energi terbarukan yang sangat besar. Letak geografis sebagai negara tropis menjamin paparan sinar matahari sepanjang tahun, sementara garis pantai yang panjang menawarkan potensi energi angin dan gelombang laut. Selain itu, ribuan pulau vulkanik menyimpan energi panas bumi (geothermal) yang signifikan—Indonesia memiliki cadangan geothermal terbesar kedua di dunia.\n\nNamun, pemanfaatan energi terbarukan di Indonesia masih jauh dari optimal. Bauran energi terbarukan baru mencapai sekitar 12% dari total produksi energi nasional, jauh di bawah target 23% pada tahun 2025. Hambatan utama meliputi tingginya biaya investasi awal, keterbatasan infrastruktur grid, dan belum meratanya insentif pemerintah untuk energi hijau.',
      question:'Mengapa letak geografis Indonesia menguntungkan untuk energi surya?',
      options:['A. Karena Indonesia negara kepulauan','B. Karena sebagai negara tropis mendapat sinar matahari sepanjang tahun','C. Karena memiliki banyak gunung berapi','D. Karena memiliki garis pantai panjang','E. Karena cadangan minyak bumi terbatas'],
      answer:'B',
      explanation:'Teks menyatakan "Letak geografis sebagai negara tropis menjamin paparan sinar matahari sepanjang tahun"'
    },
    {
      id:'LBI-E06',
      passage:'Indonesia memiliki potensi energi terbarukan yang sangat besar. Letak geografis sebagai negara tropis menjamin paparan sinar matahari sepanjang tahun, sementara garis pantai yang panjang menawarkan potensi energi angin dan gelombang laut. Selain itu, ribuan pulau vulkanik menyimpan energi panas bumi (geothermal) yang signifikan—Indonesia memiliki cadangan geothermal terbesar kedua di dunia.\n\nNamun, pemanfaatan energi terbarukan di Indonesia masih jauh dari optimal. Bauran energi terbarukan baru mencapai sekitar 12% dari total produksi energi nasional, jauh di bawah target 23% pada tahun 2025. Hambatan utama meliputi tingginya biaya investasi awal, keterbatasan infrastruktur grid, dan belum meratanya insentif pemerintah untuk energi hijau.',
      question:'Simpulan teks yang paling tepat adalah:',
      options:['A. Indonesia sudah berhasil mencapai target energi terbarukan','B. Indonesia berpotensi besar tapi realisasinya masih jauh dari target','C. Energi fosil lebih baik dari energi terbarukan','D. Indonesia tidak memiliki sumber energi terbarukan','E. Target 23% sudah tercapai sebelum 2025'],
      answer:'B',
      explanation:'Potensi besar (paragraf 1) VS realisasi hanya 12% dari target 23% (paragraf 2) = belum optimal'
    },
    // Passage 2: Bahasa (LBI E7-12)
    {
      id:'LBI-E07',
      passage:'Bahasa Indonesia lahir dari proses panjang perjalanan bangsa. Berakar dari bahasa Melayu yang telah menjadi lingua franca di Nusantara selama berabad-abad, bahasa Indonesia diresmikan sebagai bahasa nasional melalui Sumpah Pemuda 28 Oktober 1928. Keputusan memilih bahasa Melayu sebagai dasar—bukan bahasa Jawa yang penuturnya paling banyak—merupakan keputusan politis yang penuh kearifan, demi menjaga persatuan.\n\nKini, bahasa Indonesia telah berkembang pesat. Menurut data UNESCO, bahasa Indonesia adalah bahasa ke-10 yang paling banyak digunakan di internet. Namun tantangan baru muncul: interferensi bahasa gaul dan bahasa asing yang berlebihan mulai menggerus kemurnian bahasa Indonesia, terutama di kalangan generasi muda.',
      question:'Mengapa bahasa Melayu dipilih sebagai dasar bahasa Indonesia dan bukan bahasa Jawa?',
      options:['A. Bahasa Jawa terlalu sulit','B. Bahasa Melayu sudah jadi lingua franca dan untuk menjaga persatuan','C. Bahasa Melayu memiliki kosakata lebih kaya','D. Penutur bahasa Melayu lebih banyak','E. Keputusan pemerintah kolonial Belanda'],
      answer:'B',
      explanation:'Teks menyatakan keputusan itu demi "menjaga persatuan" dan karena Melayu adalah lingua franca'
    },
    {
      id:'LBI-E08',
      passage:'Bahasa Indonesia lahir dari proses panjang perjalanan bangsa. Berakar dari bahasa Melayu yang telah menjadi lingua franca di Nusantara selama berabad-abad, bahasa Indonesia diresmikan sebagai bahasa nasional melalui Sumpah Pemuda 28 Oktober 1928. Keputusan memilih bahasa Melayu sebagai dasar—bukan bahasa Jawa yang penuturnya paling banyak—merupakan keputusan politis yang penuh kearifan, demi menjaga persatuan.\n\nKini, bahasa Indonesia telah berkembang pesat. Menurut data UNESCO, bahasa Indonesia adalah bahasa ke-10 yang paling banyak digunakan di internet. Namun tantangan baru muncul: interferensi bahasa gaul dan bahasa asing yang berlebihan mulai menggerus kemurnian bahasa Indonesia, terutama di kalangan generasi muda.',
      question:'Kata "lingua franca" dalam teks bermakna:',
      options:['A. Bahasa sastra tinggi','B. Bahasa resmi pemerintahan','C. Bahasa penghubung antar kelompok berbeda','D. Bahasa asing yang dipaksakan','E. Bahasa tulisan kuno'],
      answer:'C',
      explanation:'Lingua franca = bahasa yang digunakan sebagai penghubung komunikasi oleh kelompok-kelompok berbeda'
    },
    {
      id:'LBI-E09',
      passage:'Bahasa Indonesia lahir dari proses panjang perjalanan bangsa. Berakar dari bahasa Melayu yang telah menjadi lingua franca di Nusantara selama berabad-abad, bahasa Indonesia diresmikan sebagai bahasa nasional melalui Sumpah Pemuda 28 Oktober 1928. Keputusan memilih bahasa Melayu sebagai dasar—bukan bahasa Jawa yang penuturnya paling banyak—merupakan keputusan politis yang penuh kearifan, demi menjaga persatuan.\n\nKini, bahasa Indonesia telah berkembang pesat. Menurut data UNESCO, bahasa Indonesia adalah bahasa ke-10 yang paling banyak digunakan di internet. Namun tantangan baru muncul: interferensi bahasa gaul dan bahasa asing yang berlebihan mulai menggerus kemurnian bahasa Indonesia, terutama di kalangan generasi muda.',
      question:'Peringkat bahasa Indonesia dalam penggunaan di internet menurut UNESCO adalah:',
      options:['A. Ke-5','B. Ke-8','C. Ke-10','D. Ke-12','E. Ke-15'],
      answer:'C',
      explanation:'Teks menyebutkan: "bahasa ke-10 yang paling banyak digunakan di internet"'
    },
    {
      id:'LBI-E10',
      passage:'Bahasa Indonesia lahir dari proses panjang perjalanan bangsa. Berakar dari bahasa Melayu yang telah menjadi lingua franca di Nusantara selama berabad-abad, bahasa Indonesia diresmikan sebagai bahasa nasional melalui Sumpah Pemuda 28 Oktober 1928. Keputusan memilih bahasa Melayu sebagai dasar—bukan bahasa Jawa yang penuturnya paling banyak—merupakan keputusan politis yang penuh kearifan, demi menjaga persatuan.\n\nKini, bahasa Indonesia telah berkembang pesat. Menurut data UNESCO, bahasa Indonesia adalah bahasa ke-10 yang paling banyak digunakan di internet. Namun tantangan baru muncul: interferensi bahasa gaul dan bahasa asing yang berlebihan mulai menggerus kemurnian bahasa Indonesia, terutama di kalangan generasi muda.',
      question:'Kata "interferensi" dalam teks bermakna:',
      options:['A. Penguatan','B. Penyerapan positif','C. Gangguan atau percampuran yang merusak','D. Inovasi','E. Evolusi alami'],
      answer:'C',
      explanation:'Interferensi (dalam linguistik) = gangguan atau percampuran unsur bahasa lain yang merusak keaslian'
    },
    {
      id:'LBI-E11',
      passage:'Bahasa Indonesia lahir dari proses panjang perjalanan bangsa. Berakar dari bahasa Melayu yang telah menjadi lingua franca di Nusantara selama berabad-abad, bahasa Indonesia diresmikan sebagai bahasa nasional melalui Sumpah Pemuda 28 Oktober 1928. Keputusan memilih bahasa Melayu sebagai dasar—bukan bahasa Jawa yang penuturnya paling banyak—merupakan keputusan politis yang penuh kearifan, demi menjaga persatuan.\n\nKini, bahasa Indonesia telah berkembang pesat. Menurut data UNESCO, bahasa Indonesia adalah bahasa ke-10 yang paling banyak digunakan di internet. Namun tantangan baru muncul: interferensi bahasa gaul dan bahasa asing yang berlebihan mulai menggerus kemurnian bahasa Indonesia, terutama di kalangan generasi muda.',
      question:'Tantangan yang dihadapi bahasa Indonesia saat ini menurut teks adalah:',
      options:['A. Bahasa Indonesia tidak digunakan di internet','B. Bahasa Jawa lebih dominan','C. Interferensi bahasa gaul dan asing berlebihan','D. Kurangnya penutur bahasa Indonesia','E. Tidak ada tantangan, bahasa Indonesia sangat baik'],
      answer:'C',
      explanation:'Teks menyebut "interferensi bahasa gaul dan bahasa asing yang berlebihan" sebagai tantangan'
    },
    {
      id:'LBI-E12',
      passage:'Bahasa Indonesia lahir dari proses panjang perjalanan bangsa. Berakar dari bahasa Melayu yang telah menjadi lingua franca di Nusantara selama berabad-abad, bahasa Indonesia diresmikan sebagai bahasa nasional melalui Sumpah Pemuda 28 Oktober 1928. Keputusan memilih bahasa Melayu sebagai dasar—bukan bahasa Jawa yang penuturnya paling banyak—merupakan keputusan politis yang penuh kearifan, demi menjaga persatuan.\n\nKini, bahasa Indonesia telah berkembang pesat. Menurut data UNESCO, bahasa Indonesia adalah bahasa ke-10 yang paling banyak digunakan di internet. Namun tantangan baru muncul: interferensi bahasa gaul dan bahasa asing yang berlebihan mulai menggerus kemurnian bahasa Indonesia, terutama di kalangan generasi muda.',
      question:'Antonim kata "menggerus" dalam konteks teks adalah:',
      options:['A. Menguatkan','B. Menghapus','C. Menyebarkan','D. Membatasi','E. Memodernisasi'],
      answer:'A',
      explanation:'Menggerus = mengikis, mengurangi secara bertahap. Antonimnya = menguatkan'
    },
    // Passage 3: UMKM (LBI E13-18)
    {
      id:'LBI-E13',
      passage:'Usaha Mikro, Kecil, dan Menengah (UMKM) merupakan tulang punggung perekonomian Indonesia. Data Kemendag menyebutkan UMKM menyumbang lebih dari 60% PDB nasional dan menyerap sekitar 97% tenaga kerja. Namun, UMKM Indonesia masih menghadapi berbagai tantangan struktural: akses modal yang terbatas, kemampuan manajemen yang belum profesional, dan minimnya penetrasi digital.\n\nTransformasi digital menjadi kunci daya saing UMKM di era modern. Pemanfaatan platform e-commerce, media sosial untuk pemasaran, dan sistem pembayaran digital dapat membuka pasar yang jauh lebih luas. Pemerintah melalui berbagai program pelatihan dan subsidi internet berusaha mempercepat digitalisasi UMKM, dengan target 30 juta UMKM go-digital pada 2024.',
      question:'Kontribusi UMKM terhadap PDB nasional berdasarkan teks adalah:',
      options:['A. Lebih dari 40%','B. Lebih dari 50%','C. Lebih dari 60%','D. Lebih dari 70%','E. Lebih dari 80%'],
      answer:'C',
      explanation:'Teks menyebutkan: "menyumbang lebih dari 60% PDB nasional"'
    },
    {
      id:'LBI-E14',
      passage:'Usaha Mikro, Kecil, dan Menengah (UMKM) merupakan tulang punggung perekonomian Indonesia. Data Kemendag menyebutkan UMKM menyumbang lebih dari 60% PDB nasional dan menyerap sekitar 97% tenaga kerja. Namun, UMKM Indonesia masih menghadapi berbagai tantangan struktural: akses modal yang terbatas, kemampuan manajemen yang belum profesional, dan minimnya penetrasi digital.\n\nTransformasi digital menjadi kunci daya saing UMKM di era modern. Pemanfaatan platform e-commerce, media sosial untuk pemasaran, dan sistem pembayaran digital dapat membuka pasar yang jauh lebih luas. Pemerintah melalui berbagai program pelatihan dan subsidi internet berusaha mempercepat digitalisasi UMKM, dengan target 30 juta UMKM go-digital pada 2024.',
      question:'Frasa "tulang punggung perekonomian" bermakna UMKM adalah:',
      options:['A. Sektor ekonomi yang lemah','B. Penyokong utama perekonomian','C. Masalah dalam perekonomian','D. Sektor ekonomi yang tidak penting','E. Dependensi ekonomi negara'],
      answer:'B',
      explanation:'"Tulang punggung" = penyokong utama, andalan; artinya UMKM adalah pilar utama ekonomi'
    },
    {
      id:'LBI-E15',
      passage:'Usaha Mikro, Kecil, dan Menengah (UMKM) merupakan tulang punggung perekonomian Indonesia. Data Kemendag menyebutkan UMKM menyumbang lebih dari 60% PDB nasional dan menyerap sekitar 97% tenaga kerja. Namun, UMKM Indonesia masih menghadapi berbagai tantangan struktural: akses modal yang terbatas, kemampuan manajemen yang belum profesional, dan minimnya penetrasi digital.\n\nTransformasi digital menjadi kunci daya saing UMKM di era modern. Pemanfaatan platform e-commerce, media sosial untuk pemasaran, dan sistem pembayaran digital dapat membuka pasar yang jauh lebih luas. Pemerintah melalui berbagai program pelatihan dan subsidi internet berusaha mempercepat digitalisasi UMKM, dengan target 30 juta UMKM go-digital pada 2024.',
      question:'Target pemerintah untuk UMKM go-digital adalah:',
      options:['A. 10 juta UMKM pada 2023','B. 20 juta UMKM pada 2024','C. 30 juta UMKM pada 2024','D. 40 juta UMKM pada 2025','E. 50 juta UMKM pada 2025'],
      answer:'C',
      explanation:'Teks menyebutkan: "30 juta UMKM go-digital pada 2024"'
    },
    {
      id:'LBI-E16',
      passage:'Usaha Mikro, Kecil, dan Menengah (UMKM) merupakan tulang punggung perekonomian Indonesia. Data Kemendag menyebutkan UMKM menyumbang lebih dari 60% PDB nasional dan menyerap sekitar 97% tenaga kerja. Namun, UMKM Indonesia masih menghadapi berbagai tantangan struktural: akses modal yang terbatas, kemampuan manajemen yang belum profesional, dan minimnya penetrasi digital.\n\nTransformasi digital menjadi kunci daya saing UMKM di era modern. Pemanfaatan platform e-commerce, media sosial untuk pemasaran, dan sistem pembayaran digital dapat membuka pasar yang jauh lebih luas. Pemerintah melalui berbagai program pelatihan dan subsidi internet berusaha mempercepat digitalisasi UMKM, dengan target 30 juta UMKM go-digital pada 2024.',
      question:'Tantangan struktural UMKM yang disebutkan teks adalah:',
      options:['A. Persaingan dari produk impor','B. Akses modal terbatas, manajemen belum profesional, minimnya penetrasi digital','C. Regulasi pemerintah yang berlebihan','D. Kurangnya tenaga kerja terampil','E. Infrastruktur logistik yang buruk'],
      answer:'B',
      explanation:'Teks menyebut tiga tantangan: akses modal, manajemen, penetrasi digital'
    },
    {
      id:'LBI-E17',
      passage:'Usaha Mikro, Kecil, dan Menengah (UMKM) merupakan tulang punggung perekonomian Indonesia. Data Kemendag menyebutkan UMKM menyumbang lebih dari 60% PDB nasional dan menyerap sekitar 97% tenaga kerja. Namun, UMKM Indonesia masih menghadapi berbagai tantangan struktural: akses modal yang terbatas, kemampuan manajemen yang belum profesional, dan minimnya penetrasi digital.\n\nTransformasi digital menjadi kunci daya saing UMKM di era modern. Pemanfaatan platform e-commerce, media sosial untuk pemasaran, dan sistem pembayaran digital dapat membuka pasar yang jauh lebih luas. Pemerintah melalui berbagai program pelatihan dan subsidi internet berusaha mempercepat digitalisasi UMKM, dengan target 30 juta UMKM go-digital pada 2024.',
      question:'Kata "penetrasi" dalam "minimnya penetrasi digital" bermakna:',
      options:['A. Penyerangan','B. Tingkat masuk dan digunakannya','C. Keamanan siber','D. Investasi','E. Infrastruktur'],
      answer:'B',
      explanation:'Penetrasi (dalam bisnis/teknologi) = tingkat penerimaan/penggunaan dalam suatu pasar/segmen'
    },
    {
      id:'LBI-E18',
      passage:'Usaha Mikro, Kecil, dan Menengah (UMKM) merupakan tulang punggung perekonomian Indonesia. Data Kemendag menyebutkan UMKM menyumbang lebih dari 60% PDB nasional dan menyerap sekitar 97% tenaga kerja. Namun, UMKM Indonesia masih menghadapi berbagai tantangan struktural: akses modal yang terbatas, kemampuan manajemen yang belum profesional, dan minimnya penetrasi digital.\n\nTransformasi digital menjadi kunci daya saing UMKM di era modern. Pemanfaatan platform e-commerce, media sosial untuk pemasaran, dan sistem pembayaran digital dapat membuka pasar yang jauh lebih luas. Pemerintah melalui berbagai program pelatihan dan subsidi internet berusaha mempercepat digitalisasi UMKM, dengan target 30 juta UMKM go-digital pada 2024.',
      question:'Inferensi yang paling tepat dari teks adalah:',
      options:['A. UMKM sudah tidak perlu berkembang lagi','B. Digitalisasi tanpa pelatihan cukup untuk UMKM','C. UMKM berperan besar dan digitalisasi adalah kunci daya saing masa depannya','D. Pemerintah tidak mendukung UMKM','E. 97% tenaga kerja bekerja di sektor formal'],
      answer:'C',
      explanation:'UMKM berkontribusi besar (60% PDB, 97% TK) dan transformasi digital adalah kunci daya saingnya'
    },
    // Passage 4: Sampah Plastik (LBI E19-24)
    {
      id:'LBI-E19',
      passage:'Indonesia menempati posisi kedua dunia sebagai penyumbang sampah plastik ke laut, setelah Tiongkok. Setiap tahun, diperkirakan 620.000 ton plastik dari Indonesia berakhir di lautan. Kondisi ini mengancam keanekaragaman hayati laut dan rantai makanan global—mikroplastik telah ditemukan di dalam ikan dan seafood yang dikonsumsi manusia.\n\nPemerintah Indonesia telah menetapkan target pengurangan sampah plastik laut sebesar 70% pada 2025 melalui Kebijakan dan Strategi Nasional (Jakstranas). Berbagai upaya sedang dilakukan: pelarangan kantong plastik sekali pakai di kota-kota besar, pengembangan ekonomi sirkular, dan program bank sampah. Namun kesadaran dan perilaku masyarakat masih menjadi tantangan terbesar.',
      question:'Berapa ton plastik dari Indonesia diperkirakan berakhir di lautan setiap tahun?',
      options:['A. 62.000 ton','B. 162.000 ton','C. 262.000 ton','D. 420.000 ton','E. 620.000 ton'],
      answer:'E',
      explanation:'Teks menyebutkan: "620.000 ton plastik dari Indonesia berakhir di lautan"'
    },
    {
      id:'LBI-E20',
      passage:'Indonesia menempati posisi kedua dunia sebagai penyumbang sampah plastik ke laut, setelah Tiongkok. Setiap tahun, diperkirakan 620.000 ton plastik dari Indonesia berakhir di lautan. Kondisi ini mengancam keanekaragaman hayati laut dan rantai makanan global—mikroplastik telah ditemukan di dalam ikan dan seafood yang dikonsumsi manusia.\n\nPemerintah Indonesia telah menetapkan target pengurangan sampah plastik laut sebesar 70% pada 2025 melalui Kebijakan dan Strategi Nasional (Jakstranas). Berbagai upaya sedang dilakukan: pelarangan kantong plastik sekali pakai di kota-kota besar, pengembangan ekonomi sirkular, dan program bank sampah. Namun kesadaran dan perilaku masyarakat masih menjadi tantangan terbesar.',
      question:'Target pemerintah untuk pengurangan sampah plastik laut pada 2025 adalah:',
      options:['A. 50%','B. 60%','C. 70%','D. 75%','E. 80%'],
      answer:'C',
      explanation:'Teks menyebutkan: "target pengurangan sampah plastik laut sebesar 70% pada 2025"'
    },
    {
      id:'LBI-E21',
      passage:'Indonesia menempati posisi kedua dunia sebagai penyumbang sampah plastik ke laut, setelah Tiongkok. Setiap tahun, diperkirakan 620.000 ton plastik dari Indonesia berakhir di lautan. Kondisi ini mengancam keanekaragaman hayati laut dan rantai makanan global—mikroplastik telah ditemukan di dalam ikan dan seafood yang dikonsumsi manusia.\n\nPemerintah Indonesia telah menetapkan target pengurangan sampah plastik laut sebesar 70% pada 2025 melalui Kebijakan dan Strategi Nasional (Jakstranas). Berbagai upaya sedang dilakukan: pelarangan kantong plastik sekali pakai di kota-kota besar, pengembangan ekonomi sirkular, dan program bank sampah. Namun kesadaran dan perilaku masyarakat masih menjadi tantangan terbesar.',
      question:'Dampak sampah plastik terhadap manusia yang disebutkan teks adalah:',
      options:['A. Keracunan udara','B. Penyakit kulit','C. Mikroplastik dalam ikan/seafood yang dikonsumsi','D. Banjir di perkotaan','E. Kerusakan terumbu karang saja'],
      answer:'C',
      explanation:'Teks menyebut "mikroplastik telah ditemukan di dalam ikan dan seafood yang dikonsumsi manusia"'
    },
    {
      id:'LBI-E22',
      passage:'Indonesia menempati posisi kedua dunia sebagai penyumbang sampah plastik ke laut, setelah Tiongkok. Setiap tahun, diperkirakan 620.000 ton plastik dari Indonesia berakhir di lautan. Kondisi ini mengancam keanekaragaman hayati laut dan rantai makanan global—mikroplastik telah ditemukan di dalam ikan dan seafood yang dikonsumsi manusia.\n\nPemerintah Indonesia telah menetapkan target pengurangan sampah plastik laut sebesar 70% pada 2025 melalui Kebijakan dan Strategi Nasional (Jakstranas). Berbagai upaya sedang dilakukan: pelarangan kantong plastik sekali pakai di kota-kota besar, pengembangan ekonomi sirkular, dan program bank sampah. Namun kesadaran dan perilaku masyarakat masih menjadi tantangan terbesar.',
      question:'Upaya penanganan sampah plastik yang TIDAK disebutkan dalam teks adalah:',
      options:['A. Pelarangan kantong plastik sekali pakai','B. Ekonomi sirkular','C. Program bank sampah','D. Teknologi daur ulang plastik menjadi BBM','E. Semuanya ada dalam teks'],
      answer:'D',
      explanation:'Teknologi daur ulang plastik menjadi BBM tidak disebutkan. Teks: larangan, ekonomi sirkular, bank sampah'
    },
    {
      id:'LBI-E23',
      passage:'Indonesia menempati posisi kedua dunia sebagai penyumbang sampah plastik ke laut, setelah Tiongkok. Setiap tahun, diperkirakan 620.000 ton plastik dari Indonesia berakhir di lautan. Kondisi ini mengancam keanekaragaman hayati laut dan rantai makanan global—mikroplastik telah ditemukan di dalam ikan dan seafood yang dikonsumsi manusia.\n\nPemerintah Indonesia telah menetapkan target pengurangan sampah plastik laut sebesar 70% pada 2025 melalui Kebijakan dan Strategi Nasional (Jakstranas). Berbagai upaya sedang dilakukan: pelarangan kantong plastik sekali pakai di kota-kota besar, pengembangan ekonomi sirkular, dan program bank sampah. Namun kesadaran dan perilaku masyarakat masih menjadi tantangan terbesar.',
      question:'"Ekonomi sirkular" dalam teks mengacu pada:',
      options:['A. Ekonomi berbasis internet','B. Sistem ekonomi di mana sumber daya terus didaur ulang','C. Pasar saham yang berputar','D. Ekonomi regional yang melingkar','E. Sistem barter antardaerah'],
      answer:'B',
      explanation:'Ekonomi sirkular = sistem ekonomi yang meminimalkan limbah dengan mendaur ulang dan menggunakan kembali sumber daya'
    },
    {
      id:'LBI-E24',
      passage:'Indonesia menempati posisi kedua dunia sebagai penyumbang sampah plastik ke laut, setelah Tiongkok. Setiap tahun, diperkirakan 620.000 ton plastik dari Indonesia berakhir di lautan. Kondisi ini mengancam keanekaragaman hayati laut dan rantai makanan global—mikroplastik telah ditemukan di dalam ikan dan seafood yang dikonsumsi manusia.\n\nPemerintah Indonesia telah menetapkan target pengurangan sampah plastik laut sebesar 70% pada 2025 melalui Kebijakan dan Strategi Nasional (Jakstranas). Berbagai upaya sedang dilakukan: pelarangan kantong plastik sekali pakai di kota-kota besar, pengembangan ekonomi sirkular, dan program bank sampah. Namun kesadaran dan perilaku masyarakat masih menjadi tantangan terbesar.',
      question:'Berdasarkan teks, tantangan terbesar dalam mengatasi sampah plastik adalah:',
      options:['A. Kurangnya anggaran pemerintah','B. Teknologi daur ulang yang belum ada','C. Kesadaran dan perilaku masyarakat','D. Tekanan dari industri plastik','E. Tidak adanya regulasi'],
      answer:'C',
      explanation:'Teks menyebut: "kesadaran dan perilaku masyarakat masih menjadi tantangan terbesar"'
    },
    // Passage 5: Olahraga (LBI E25-30)
    {
      id:'LBI-E25',
      passage:'Olahraga bukan sekadar aktivitas fisik—ini adalah investasi kesehatan jangka panjang. Penelitian menunjukkan bahwa olahraga teratur minimal 150 menit per minggu (setara 30 menit sehari, 5 hari seminggu) dapat mengurangi risiko penyakit kardiovaskular hingga 35%, diabetes tipe 2 hingga 40%, dan beberapa jenis kanker hingga 30%. Selain manfaat fisik, olahraga juga terbukti meningkatkan suasana hati, mengurangi stres, dan meningkatkan kualitas tidur.\n\nNamun, realitanya berbeda. Menurut data WHO, lebih dari 1,4 miliar orang dewasa di dunia tidak memenuhi rekomendasi aktivitas fisik. Di Indonesia, lebih dari 50% populasi dikategorikan sebagai "kurang aktif secara fisik". Tantangan mencakup gaya hidup sedentari yang diperkuat oleh digitalisasi, lingkungan yang tidak ramah pejalan kaki, dan kurangnya fasilitas olahraga publik.',
      question:'Rekomendasi olahraga minimal per minggu menurut teks adalah:',
      options:['A. 100 menit','B. 120 menit','C. 150 menit','D. 180 menit','E. 200 menit'],
      answer:'C',
      explanation:'Teks menyebut "minimal 150 menit per minggu (setara 30 menit sehari, 5 hari seminggu)"'
    },
    {
      id:'LBI-E26',
      passage:'Olahraga bukan sekadar aktivitas fisik—ini adalah investasi kesehatan jangka panjang. Penelitian menunjukkan bahwa olahraga teratur minimal 150 menit per minggu (setara 30 menit sehari, 5 hari seminggu) dapat mengurangi risiko penyakit kardiovaskular hingga 35%, diabetes tipe 2 hingga 40%, dan beberapa jenis kanker hingga 30%. Selain manfaat fisik, olahraga juga terbukti meningkatkan suasana hati, mengurangi stres, dan meningkatkan kualitas tidur.\n\nNamun, realitanya berbeda. Menurut data WHO, lebih dari 1,4 miliar orang dewasa di dunia tidak memenuhi rekomendasi aktivitas fisik. Di Indonesia, lebih dari 50% populasi dikategorikan sebagai "kurang aktif secara fisik". Tantangan mencakup gaya hidup sedentari yang diperkuat oleh digitalisasi, lingkungan yang tidak ramah pejalan kaki, dan kurangnya fasilitas olahraga publik.',
      question:'Olahraga dapat mengurangi risiko diabetes tipe 2 hingga:',
      options:['A. 25%','B. 30%','C. 35%','D. 40%','E. 45%'],
      answer:'D',
      explanation:'Teks menyebut: "diabetes tipe 2 hingga 40%"'
    },
    {
      id:'LBI-E27',
      passage:'Olahraga bukan sekadar aktivitas fisik—ini adalah investasi kesehatan jangka panjang. Penelitian menunjukkan bahwa olahraga teratur minimal 150 menit per minggu (setara 30 menit sehari, 5 hari seminggu) dapat mengurangi risiko penyakit kardiovaskular hingga 35%, diabetes tipe 2 hingga 40%, dan beberapa jenis kanker hingga 30%. Selain manfaat fisik, olahraga juga terbukti meningkatkan suasana hati, mengurangi stres, dan meningkatkan kualitas tidur.\n\nNamun, realitanya berbeda. Menurut data WHO, lebih dari 1,4 miliar orang dewasa di dunia tidak memenuhi rekomendasi aktivitas fisik. Di Indonesia, lebih dari 50% populasi dikategorikan sebagai "kurang aktif secara fisik". Tantangan mencakup gaya hidup sedentari yang diperkuat oleh digitalisasi, lingkungan yang tidak ramah pejalan kaki, dan kurangnya fasilitas olahraga publik.',
      question:'Kata "sedentari" dalam teks bermakna:',
      options:['A. Aktif bergerak','B. Berolahraga rutin','C. Banyak duduk/kurang bergerak','D. Bekerja keras','E. Berpindah-pindah tempat'],
      answer:'C',
      explanation:'Gaya hidup sedentari = gaya hidup yang banyak duduk, sedikit bergerak atau berolahraga'
    },
    {
      id:'LBI-E28',
      passage:'Olahraga bukan sekadar aktivitas fisik—ini adalah investasi kesehatan jangka panjang. Penelitian menunjukkan bahwa olahraga teratur minimal 150 menit per minggu (setara 30 menit sehari, 5 hari seminggu) dapat mengurangi risiko penyakit kardiovaskular hingga 35%, diabetes tipe 2 hingga 40%, dan beberapa jenis kanker hingga 30%. Selain manfaat fisik, olahraga juga terbukti meningkatkan suasana hati, mengurangi stres, dan meningkatkan kualitas tidur.\n\nNamun, realitanya berbeda. Menurut data WHO, lebih dari 1,4 miliar orang dewasa di dunia tidak memenuhi rekomendasi aktivitas fisik. Di Indonesia, lebih dari 50% populasi dikategorikan sebagai "kurang aktif secara fisik". Tantangan mencakup gaya hidup sedentari yang diperkuat oleh digitalisasi, lingkungan yang tidak ramah pejalan kaki, dan kurangnya fasilitas olahraga publik.',
      question:'Berapa persen populasi Indonesia yang "kurang aktif secara fisik" menurut teks?',
      options:['A. Lebih dari 30%','B. Lebih dari 40%','C. Lebih dari 50%','D. Lebih dari 60%','E. Lebih dari 70%'],
      answer:'C',
      explanation:'Teks menyebutkan: "lebih dari 50% populasi dikategorikan sebagai kurang aktif secara fisik"'
    },
    {
      id:'LBI-E29',
      passage:'Olahraga bukan sekadar aktivitas fisik—ini adalah investasi kesehatan jangka panjang. Penelitian menunjukkan bahwa olahraga teratur minimal 150 menit per minggu (setara 30 menit sehari, 5 hari seminggu) dapat mengurangi risiko penyakit kardiovaskular hingga 35%, diabetes tipe 2 hingga 40%, dan beberapa jenis kanker hingga 30%. Selain manfaat fisik, olahraga juga terbukti meningkatkan suasana hati, mengurangi stres, dan meningkatkan kualitas tidur.\n\nNamun, realitanya berbeda. Menurut data WHO, lebih dari 1,4 miliar orang dewasa di dunia tidak memenuhi rekomendasi aktivitas fisik. Di Indonesia, lebih dari 50% populasi dikategorikan sebagai "kurang aktif secara fisik". Tantangan mencakup gaya hidup sedentari yang diperkuat oleh digitalisasi, lingkungan yang tidak ramah pejalan kaki, dan kurangnya fasilitas olahraga publik.',
      question:'Manfaat olahraga bagi kesehatan mental yang disebutkan teks adalah:',
      options:['A. Meningkatkan kecerdasan','B. Meningkatkan suasana hati dan mengurangi stres','C. Mencegah alzheimer','D. Meningkatkan kepercayaan diri','E. Hanya manfaat fisik yang disebutkan'],
      answer:'B',
      explanation:'Teks menyebut: "meningkatkan suasana hati, mengurangi stres" sebagai manfaat non-fisik'
    },
    {
      id:'LBI-E30',
      passage:'Olahraga bukan sekadar aktivitas fisik—ini adalah investasi kesehatan jangka panjang. Penelitian menunjukkan bahwa olahraga teratur minimal 150 menit per minggu (setara 30 menit sehari, 5 hari seminggu) dapat mengurangi risiko penyakit kardiovaskular hingga 35%, diabetes tipe 2 hingga 40%, dan beberapa jenis kanker hingga 30%. Selain manfaat fisik, olahraga juga terbukti meningkatkan suasana hati, mengurangi stres, dan meningkatkan kualitas tidur.\n\nNamun, realitanya berbeda. Menurut data WHO, lebih dari 1,4 miliar orang dewasa di dunia tidak memenuhi rekomendasi aktivitas fisik. Di Indonesia, lebih dari 50% populasi dikategorikan sebagai "kurang aktif secara fisik". Tantangan mencakup gaya hidup sedentari yang diperkuat oleh digitalisasi, lingkungan yang tidak ramah pejalan kaki, dan kurangnya fasilitas olahraga publik.',
      question:'Pernyataan yang SESUAI dengan isi teks adalah:',
      options:['A. Mayoritas orang Indonesia sudah cukup aktif berolahraga','B. Digitalisasi tidak berpengaruh pada kebiasaan olahraga','C. Lebih dari 1 miliar orang di dunia tidak memenuhi rekomendasi aktivitas fisik','D. Olahraga tidak bermanfaat bagi kesehatan mental','E. WHO tidak memiliki data tentang aktivitas fisik'],
      answer:'C',
      explanation:'Teks: "lebih dari 1,4 miliar orang dewasa di dunia tidak memenuhi rekomendasi aktivitas fisik"'
    },
  ],

  LBE: [
    // Passage 1: Space Exploration (LBE E1-5)
    {
      id:'LBE-E01',
      passage:'The 21st century has witnessed a remarkable renaissance in space exploration. While government agencies like NASA and ESA continue their missions, private companies such as SpaceX, Blue Origin, and Virgin Galactic have fundamentally disrupted the industry. SpaceX, founded by Elon Musk in 2002, reduced launch costs by developing reusable rockets—a feat previously considered impossible by many aerospace engineers.\n\nThis democratization of space has opened new possibilities: commercial satellite deployment, space tourism, and ambitious plans for permanent settlements on Mars. However, critics argue that while billionaires race to space, pressing terrestrial problems like poverty, climate change, and healthcare remain inadequately addressed. The debate reflects deeper questions about humanity\'s priorities and the responsible use of technological innovation.',
      question:'What is the main idea of the first paragraph?',
      options:['A. NASA is losing relevance','B. Private companies have transformed space exploration','C. SpaceX is the only successful space company','D. Space tourism is too expensive','E. Government funding for space is increasing'],
      answer:'B',
      explanation:'The paragraph discusses private companies disrupting space exploration, with SpaceX as the key example'
    },
    {
      id:'LBE-E02',
      passage:'The 21st century has witnessed a remarkable renaissance in space exploration. While government agencies like NASA and ESA continue their missions, private companies such as SpaceX, Blue Origin, and Virgin Galactic have fundamentally disrupted the industry. SpaceX, founded by Elon Musk in 2002, reduced launch costs by developing reusable rockets—a feat previously considered impossible by many aerospace engineers.\n\nThis democratization of space has opened new possibilities: commercial satellite deployment, space tourism, and ambitious plans for permanent settlements on Mars. However, critics argue that while billionaires race to space, pressing terrestrial problems like poverty, climate change, and healthcare remain inadequately addressed. The debate reflects deeper questions about humanity\'s priorities and the responsible use of technological innovation.',
      question:'The word "renaissance" in the passage means:',
      options:['A. A final ending','B. A period of crisis','C. A revival or renewed growth','D. A technological failure','E. A government policy'],
      answer:'C',
      explanation:'"Renaissance" = a revival, a period of renewed interest and activity in something'
    },
    {
      id:'LBE-E03',
      passage:'The 21st century has witnessed a remarkable renaissance in space exploration. While government agencies like NASA and ESA continue their missions, private companies such as SpaceX, Blue Origin, and Virgin Galactic have fundamentally disrupted the industry. SpaceX, founded by Elon Musk in 2002, reduced launch costs by developing reusable rockets—a feat previously considered impossible by many aerospace engineers.\n\nThis democratization of space has opened new possibilities: commercial satellite deployment, space tourism, and ambitious plans for permanent settlements on Mars. However, critics argue that while billionaires race to space, pressing terrestrial problems like poverty, climate change, and healthcare remain inadequately addressed. The debate reflects deeper questions about humanity\'s priorities and the responsible use of technological innovation.',
      question:'What innovation did SpaceX introduce to reduce launch costs?',
      options:['A. Solar-powered rockets','B. Smaller, cheaper satellites','C. Reusable rockets','D. Nuclear propulsion','E. Automated navigation systems'],
      answer:'C',
      explanation:'The passage explicitly states SpaceX "reduced launch costs by developing reusable rockets"'
    },
    {
      id:'LBE-E04',
      passage:'The 21st century has witnessed a remarkable renaissance in space exploration. While government agencies like NASA and ESA continue their missions, private companies such as SpaceX, Blue Origin, and Virgin Galactic have fundamentally disrupted the industry. SpaceX, founded by Elon Musk in 2002, reduced launch costs by developing reusable rockets—a feat previously considered impossible by many aerospace engineers.\n\nThis democratization of space has opened new possibilities: commercial satellite deployment, space tourism, and ambitious plans for permanent settlements on Mars. However, critics argue that while billionaires race to space, pressing terrestrial problems like poverty, climate change, and healthcare remain inadequately addressed. The debate reflects deeper questions about humanity\'s priorities and the responsible use of technological innovation.',
      question:'What criticism is mentioned about the space race by private companies?',
      options:['A. Rockets are too dangerous','B. Earth\'s problems are being neglected while billionaires invest in space','C. Space tourism is too expensive for average people','D. Mars colonies will never be possible','E. Private companies lack technical expertise'],
      answer:'B',
      explanation:'Critics argue "pressing terrestrial problems...remain inadequately addressed" while billionaires race to space'
    },
    {
      id:'LBE-E05',
      passage:'The 21st century has witnessed a remarkable renaissance in space exploration. While government agencies like NASA and ESA continue their missions, private companies such as SpaceX, Blue Origin, and Virgin Galactic have fundamentally disrupted the industry. SpaceX, founded by Elon Musk in 2002, reduced launch costs by developing reusable rockets—a feat previously considered impossible by many aerospace engineers.\n\nThis democratization of space has opened new possibilities: commercial satellite deployment, space tourism, and ambitious plans for permanent settlements on Mars. However, critics argue that while billionaires race to space, pressing terrestrial problems like poverty, climate change, and healthcare remain inadequately addressed. The debate reflects deeper questions about humanity\'s priorities and the responsible use of technological innovation.',
      question:'The word "terrestrial" in the passage means:',
      options:['A. Related to space','B. Related to technology','C. Related to Earth/land','D. Related to the ocean','E. Related to weather'],
      answer:'C',
      explanation:'"Terrestrial" = relating to the Earth or land, as opposed to space or water'
    },
    // Passage 2: Mental Health (LBE E6-10)
    {
      id:'LBE-E06',
      passage:'Mental health has emerged as one of the most pressing public health challenges of our time. The World Health Organization estimates that depression affects more than 280 million people globally, making it one of the leading causes of disability worldwide. The COVID-19 pandemic dramatically accelerated this crisis, with reported cases of anxiety and depression increasing by 25% within the first year.\n\nDespite the scale of the problem, mental health services remain severely underfunded. In low-income countries, fewer than 10% of people who need mental health care receive it. Significant barriers include social stigma, lack of trained mental health professionals, high costs, and geographical inaccessibility. The rise of digital mental health platforms—apps providing therapy, meditation, and peer support—offers promising but incomplete solutions.',
      question:'According to WHO, how many people globally are affected by depression?',
      options:['A. More than 180 million','B. More than 200 million','C. More than 250 million','D. More than 280 million','E. More than 300 million'],
      answer:'D',
      explanation:'The passage states: "depression affects more than 280 million people globally"'
    },
    {
      id:'LBE-E07',
      passage:'Mental health has emerged as one of the most pressing public health challenges of our time. The World Health Organization estimates that depression affects more than 280 million people globally, making it one of the leading causes of disability worldwide. The COVID-19 pandemic dramatically accelerated this crisis, with reported cases of anxiety and depression increasing by 25% within the first year.\n\nDespite the scale of the problem, mental health services remain severely underfunded. In low-income countries, fewer than 10% of people who need mental health care receive it. Significant barriers include social stigma, lack of trained mental health professionals, high costs, and geographical inaccessibility. The rise of digital mental health platforms—apps providing therapy, meditation, and peer support—offers promising but incomplete solutions.',
      question:'By how much did anxiety and depression cases increase during the first year of COVID-19?',
      options:['A. 10%','B. 15%','C. 20%','D. 25%','E. 30%'],
      answer:'D',
      explanation:'The passage states anxiety and depression increased by "25% within the first year"'
    },
    {
      id:'LBE-E08',
      passage:'Mental health has emerged as one of the most pressing public health challenges of our time. The World Health Organization estimates that depression affects more than 280 million people globally, making it one of the leading causes of disability worldwide. The COVID-19 pandemic dramatically accelerated this crisis, with reported cases of anxiety and depression increasing by 25% within the first year.\n\nDespite the scale of the problem, mental health services remain severely underfunded. In low-income countries, fewer than 10% of people who need mental health care receive it. Significant barriers include social stigma, lack of trained mental health professionals, high costs, and geographical inaccessibility. The rise of digital mental health platforms—apps providing therapy, meditation, and peer support—offers promising but incomplete solutions.',
      question:'What percentage of people who need mental health care receive it in low-income countries?',
      options:['A. Fewer than 5%','B. Fewer than 10%','C. About 15%','D. About 25%','E. About 30%'],
      answer:'B',
      explanation:'The passage states: "fewer than 10% of people who need mental health care receive it" in low-income countries'
    },
    {
      id:'LBE-E09',
      passage:'Mental health has emerged as one of the most pressing public health challenges of our time. The World Health Organization estimates that depression affects more than 280 million people globally, making it one of the leading causes of disability worldwide. The COVID-19 pandemic dramatically accelerated this crisis, with reported cases of anxiety and depression increasing by 25% within the first year.\n\nDespite the scale of the problem, mental health services remain severely underfunded. In low-income countries, fewer than 10% of people who need mental health care receive it. Significant barriers include social stigma, lack of trained mental health professionals, high costs, and geographical inaccessibility. The rise of digital mental health platforms—apps providing therapy, meditation, and peer support—offers promising but incomplete solutions.',
      question:'Which barrier to mental health care is NOT mentioned in the passage?',
      options:['A. Social stigma','B. Lack of trained professionals','C. High costs','D. Geographical inaccessibility','E. Language barriers'],
      answer:'E',
      explanation:'Language barriers are not mentioned. The passage lists: stigma, lack of professionals, costs, geographical inaccessibility'
    },
    {
      id:'LBE-E10',
      passage:'Mental health has emerged as one of the most pressing public health challenges of our time. The World Health Organization estimates that depression affects more than 280 million people globally, making it one of the leading causes of disability worldwide. The COVID-19 pandemic dramatically accelerated this crisis, with reported cases of anxiety and depression increasing by 25% within the first year.\n\nDespite the scale of the problem, mental health services remain severely underfunded. In low-income countries, fewer than 10% of people who need mental health care receive it. Significant barriers include social stigma, lack of trained mental health professionals, high costs, and geographical inaccessibility. The rise of digital mental health platforms—apps providing therapy, meditation, and peer support—offers promising but incomplete solutions.',
      question:'How does the passage describe digital mental health platforms?',
      options:['A. As the perfect solution to the mental health crisis','B. As ineffective and dangerous','C. As promising but incomplete solutions','D. As too expensive for most users','E. As only useful in wealthy countries'],
      answer:'C',
      explanation:'The passage calls digital platforms "promising but incomplete solutions"'
    },
    // Passage 3: Ocean (LBE E11-15) 
    {
      id:'LBE-E11',
      passage:'The world\'s oceans cover approximately 71% of Earth\'s surface yet remain among the least explored territories on our planet. Scientists estimate that over 80% of the ocean floor has never been mapped, observed, or even photographed. The deep sea, defined as depths below 200 meters, harbors biodiversity that continues to astonish researchers—from bioluminescent jellyfish to giant squid.\n\nOceans play a critical role in regulating Earth\'s climate by absorbing approximately 30% of CO₂ emissions and 90% of excess heat generated by global warming. This absorption, while beneficial, is causing ocean acidification and warming that threaten marine ecosystems worldwide. Coral reefs, which support roughly 25% of all ocean species despite covering less than 1% of the ocean floor, are particularly vulnerable.',
      question:'What percentage of Earth\'s surface do oceans cover?',
      options:['A. 61%','B. 65%','C. 71%','D. 75%','E. 80%'],
      answer:'C',
      explanation:'The passage states: "oceans cover approximately 71% of Earth\'s surface"'
    },
    {
      id:'LBE-E12',
      passage:'The world\'s oceans cover approximately 71% of Earth\'s surface yet remain among the least explored territories on our planet. Scientists estimate that over 80% of the ocean floor has never been mapped, observed, or even photographed. The deep sea, defined as depths below 200 meters, harbors biodiversity that continues to astonish researchers—from bioluminescent jellyfish to giant squid.\n\nOceans play a critical role in regulating Earth\'s climate by absorbing approximately 30% of CO₂ emissions and 90% of excess heat generated by global warming. This absorption, while beneficial, is causing ocean acidification and warming that threaten marine ecosystems worldwide. Coral reefs, which support roughly 25% of all ocean species despite covering less than 1% of the ocean floor, are particularly vulnerable.',
      question:'What percentage of CO₂ emissions do oceans absorb?',
      options:['A. 10%','B. 20%','C. 30%','D. 40%','E. 50%'],
      answer:'C',
      explanation:'The passage states oceans absorb "approximately 30% of CO₂ emissions"'
    },
    {
      id:'LBE-E13',
      passage:'The world\'s oceans cover approximately 71% of Earth\'s surface yet remain among the least explored territories on our planet. Scientists estimate that over 80% of the ocean floor has never been mapped, observed, or even photographed. The deep sea, defined as depths below 200 meters, harbors biodiversity that continues to astonish researchers—from bioluminescent jellyfish to giant squid.\n\nOceans play a critical role in regulating Earth\'s climate by absorbing approximately 30% of CO₂ emissions and 90% of excess heat generated by global warming. This absorption, while beneficial, is causing ocean acidification and warming that threaten marine ecosystems worldwide. Coral reefs, which support roughly 25% of all ocean species despite covering less than 1% of the ocean floor, are particularly vulnerable.',
      question:'The word "bioluminescent" most likely means:',
      options:['A. Producing light through biological processes','B. Feeding on other organisms','C. Living at great ocean depths','D. Having a transparent body','E. Moving very slowly'],
      answer:'A',
      explanation:'"Bioluminescent" = capable of producing and emitting light through biological/chemical processes'
    },
    {
      id:'LBE-E14',
      passage:'The world\'s oceans cover approximately 71% of Earth\'s surface yet remain among the least explored territories on our planet. Scientists estimate that over 80% of the ocean floor has never been mapped, observed, or even photographed. The deep sea, defined as depths below 200 meters, harbors biodiversity that continues to astonish researchers—from bioluminescent jellyfish to giant squid.\n\nOceans play a critical role in regulating Earth\'s climate by absorbing approximately 30% of CO₂ emissions and 90% of excess heat generated by global warming. This absorption, while beneficial, is causing ocean acidification and warming that threaten marine ecosystems worldwide. Coral reefs, which support roughly 25% of all ocean species despite covering less than 1% of the ocean floor, are particularly vulnerable.',
      question:'What proportion of ocean species do coral reefs support?',
      options:['A. About 10%','B. About 15%','C. About 20%','D. About 25%','E. About 30%'],
      answer:'D',
      explanation:'Passage states: "support roughly 25% of all ocean species"'
    },
    {
      id:'LBE-E15',
      passage:'The world\'s oceans cover approximately 71% of Earth\'s surface yet remain among the least explored territories on our planet. Scientists estimate that over 80% of the ocean floor has never been mapped, observed, or even photographed. The deep sea, defined as depths below 200 meters, harbors biodiversity that continues to astonish researchers—from bioluminescent jellyfish to giant squid.\n\nOceans play a critical role in regulating Earth\'s climate by absorbing approximately 30% of CO₂ emissions and 90% of excess heat generated by global warming. This absorption, while beneficial, is causing ocean acidification and warming that threaten marine ecosystems worldwide. Coral reefs, which support roughly 25% of all ocean species despite covering less than 1% of the ocean floor, are particularly vulnerable.',
      question:'Why is ocean absorption of CO₂ described as "while beneficial" in the passage?',
      options:['A. Because it makes oceans warmer for marine life','B. Because it helps climate but causes acidification and warming that harm ecosystems','C. Because it produces oxygen for humans','D. Because it eliminates all pollution','E. Because it increases coral reef coverage'],
      answer:'B',
      explanation:'Beneficial (reduces warming) BUT it causes ocean acidification and warming, threatening ecosystems — a double-edged effect'
    },
    // Passage 4: Food Security (LBE E16-20)
    {
      id:'LBE-E16',
      passage:'Food security—defined as reliable access to sufficient, safe, and nutritious food—remains one of humanity\'s greatest challenges. According to the UN Food and Agriculture Organization (FAO), approximately 733 million people faced hunger in 2023. Paradoxically, food waste is an enormous problem simultaneously: nearly one-third of all food produced globally is lost or wasted each year.\n\nSolutions to food insecurity are multifaceted. Improving agricultural productivity through better seeds, irrigation, and technology can increase supply. Investing in supply chain infrastructure reduces post-harvest losses. Addressing poverty directly empowers people to afford nutritious food. Additionally, shifting toward more sustainable dietary patterns—consuming less meat and more plant-based foods—can reduce environmental pressures while improving nutrition outcomes.',
      question:'How many people faced hunger in 2023 according to FAO?',
      options:['A. About 500 million','B. About 633 million','C. About 733 million','D. About 833 million','E. About 933 million'],
      answer:'C',
      explanation:'The passage explicitly states "approximately 733 million people faced hunger in 2023"'
    },
    {
      id:'LBE-E17',
      passage:'Food security—defined as reliable access to sufficient, safe, and nutritious food—remains one of humanity\'s greatest challenges. According to the UN Food and Agriculture Organization (FAO), approximately 733 million people faced hunger in 2023. Paradoxically, food waste is an enormous problem simultaneously: nearly one-third of all food produced globally is lost or wasted each year.\n\nSolutions to food insecurity are multifaceted. Improving agricultural productivity through better seeds, irrigation, and technology can increase supply. Investing in supply chain infrastructure reduces post-harvest losses. Addressing poverty directly empowers people to afford nutritious food. Additionally, shifting toward more sustainable dietary patterns—consuming less meat and more plant-based foods—can reduce environmental pressures while improving nutrition outcomes.',
      question:'What fraction of globally produced food is wasted each year?',
      options:['A. One-fifth','B. One-quarter','C. One-third','D. One-half','E. Two-thirds'],
      answer:'C',
      explanation:'The passage states: "nearly one-third of all food produced globally is lost or wasted"'
    },
    {
      id:'LBE-E18',
      passage:'Food security—defined as reliable access to sufficient, safe, and nutritious food—remains one of humanity\'s greatest challenges. According to the UN Food and Agriculture Organization (FAO), approximately 733 million people faced hunger in 2023. Paradoxically, food waste is an enormous problem simultaneously: nearly one-third of all food produced globally is lost or wasted each year.\n\nSolutions to food insecurity are multifaceted. Improving agricultural productivity through better seeds, irrigation, and technology can increase supply. Investing in supply chain infrastructure reduces post-harvest losses. Addressing poverty directly empowers people to afford nutritious food. Additionally, shifting toward more sustainable dietary patterns—consuming less meat and more plant-based foods—can reduce environmental pressures while improving nutrition outcomes.',
      question:'The word "paradoxically" in the passage means:',
      options:['A. Logically and expectedly','B. In a contradictory or seemingly self-contradictory way','C. Very seriously','D. According to statistics','E. In line with predictions'],
      answer:'B',
      explanation:'"Paradoxically" = in a way that seems contradictory or surprising (hunger exists alongside massive food waste)'
    },
    {
      id:'LBE-E19',
      passage:'Food security—defined as reliable access to sufficient, safe, and nutritious food—remains one of humanity\'s greatest challenges. According to the UN Food and Agriculture Organization (FAO), approximately 733 million people faced hunger in 2023. Paradoxically, food waste is an enormous problem simultaneously: nearly one-third of all food produced globally is lost or wasted each year.\n\nSolutions to food insecurity are multifaceted. Improving agricultural productivity through better seeds, irrigation, and technology can increase supply. Investing in supply chain infrastructure reduces post-harvest losses. Addressing poverty directly empowers people to afford nutritious food. Additionally, shifting toward more sustainable dietary patterns—consuming less meat and more plant-based foods—can reduce environmental pressures while improving nutrition outcomes.',
      question:'What dietary shift does the passage recommend?',
      options:['A. Eating more meat for protein','B. Complete vegetarianism','C. Consuming less meat and more plant-based foods','D. Only eating locally grown food','E. Reducing all calorie intake'],
      answer:'C',
      explanation:'The passage suggests "consuming less meat and more plant-based foods" as a sustainable dietary shift'
    },
    {
      id:'LBE-E20',
      passage:'Food security—defined as reliable access to sufficient, safe, and nutritious food—remains one of humanity\'s greatest challenges. According to the UN Food and Agriculture Organization (FAO), approximately 733 million people faced hunger in 2023. Paradoxically, food waste is an enormous problem simultaneously: nearly one-third of all food produced globally is lost or wasted each year.\n\nSolutions to food insecurity are multifaceted. Improving agricultural productivity through better seeds, irrigation, and technology can increase supply. Investing in supply chain infrastructure reduces post-harvest losses. Addressing poverty directly empowers people to afford nutritious food. Additionally, shifting toward more sustainable dietary patterns—consuming less meat and more plant-based foods—can reduce environmental pressures while improving nutrition outcomes.',
      question:'Which solution to food insecurity is NOT mentioned in the passage?',
      options:['A. Better seeds and irrigation technology','B. Supply chain infrastructure investment','C. Addressing poverty','D. Shifting to plant-based diets','E. International food aid programs'],
      answer:'E',
      explanation:'International food aid is not mentioned. Solutions: agricultural productivity, supply chain, poverty, dietary shift'
    },
  ],

  PM: [
    { id:'PM-E01', question:'Nilai dari (3x−2)² jika x=3 adalah:', options:['A. 25','B. 49','C. 36','D. 64','E. 16'], answer:'B', explanation:'(3×3−2)²=(9−2)²=7²=49' },
    { id:'PM-E02', question:'Penyelesaian pertidaksamaan 2x + 5 > 11 adalah:', options:['A. x > 3','B. x > 2','C. x < 3','D. x < 2','E. x ≥ 3'], answer:'A', explanation:'2x > 11−5 = 6 → x > 3' },
    { id:'PM-E03', question:'Diketahui matriks A = [[1,2],[3,4]]. Determinan A adalah:', options:['A. −2','B. −1','C. 0','D. 2','E. 10'], answer:'A', explanation:'det A = (1×4)−(2×3) = 4−6 = −2' },
    { id:'PM-E04', question:'Nilai dari ∑ k (k dari 1 sampai 5) adalah:', options:['A. 10','B. 12','C. 15','D. 18','E. 20'], answer:'C', explanation:'1+2+3+4+5=15' },
    { id:'PM-E05', question:'Jika sin α = 5/13 dan α di kuadran I, maka cos α adalah:', options:['A. 5/12','B. 12/13','C. 13/12','D. 5/13','E. 12/5'], answer:'B', explanation:'cos α = √(1−25/169) = √(144/169) = 12/13' },
    { id:'PM-E06', question:'Jumlah semua bilangan bulat antara 1 dan 50 yang habis dibagi 3 adalah:', options:['A. 390','B. 408','C. 414','D. 420','E. 432'], answer:'B', explanation:'Deret: 3,6,…,48. n=16, Sn=16×(3+48)/2=16×51/2=408' },
    { id:'PM-E07', question:'Nilai dari log₅ 125 + log₂ 32 adalah:', options:['A. 7','B. 8','C. 9','D. 10','E. 11'], answer:'B', explanation:'log₅ 125 = 3 (5³=125). log₂ 32 = 5 (2⁵=32). Total = 8' },
    { id:'PM-E08', question:'Titik koordinat yang merupakan solusi 2x + 3y = 12 dan x − y = 1 adalah:', options:['A. (3,2)','B. (2,3)','C. (4,1)','D. (3,3)','E. (1,3)'], answer:'A', explanation:'x = y+1. Sub: 2(y+1)+3y=12 → 5y=10 → y=2, x=3' },
    { id:'PM-E09', question:'Suatu barisan geometri dengan a₁=2 dan r=3. Suku ke-6 adalah:', options:['A. 486','B. 486','C. 216','D. 162','E. 324'], answer:'A', explanation:'a₆ = 2×3⁵ = 2×243 = 486' },
    { id:'PM-E10', question:'Nilai minimum f(x) = 2x² − 8x + 5 adalah:', options:['A. −3','B. −2','C. −1','D. 0','E. 1'], answer:'A', explanation:'x_min = 8/(2×2) = 2. f(2)=2(4)−8(2)+5=8−16+5=−3' },
    { id:'PM-E11', question:'Turunan f(x) = 4x³ − 3x² + 2x − 5 adalah:', options:['A. 12x² − 6x + 2','B. 12x² − 6x − 2','C. 4x² − 3x + 2','D. 12x³ − 6x + 2','E. 12x − 6'], answer:'A', explanation:'f\'(x) = 12x² − 6x + 2' },
    { id:'PM-E12', question:'Nilai dari ∫₀³ (2x+1) dx adalah:', options:['A. 10','B. 11','C. 12','D. 13','E. 14'], answer:'C', explanation:'[x²+x]₀³ = (9+3)−0 = 12' },
    { id:'PM-E13', question:'Dari 10 orang akan dipilih ketua, wakil, dan sekretaris. Banyak cara pemilihan adalah:', options:['A. 540','B. 600','C. 720','D. 810','E. 1000'], answer:'C', explanation:'P(10,3) = 10×9×8 = 720' },
    { id:'PM-E14', question:'Dua buah dadu dilempar sekali. Peluang mendapat jumlah 7 adalah:', options:['A. 5/36','B. 6/36','C. 7/36','D. 8/36','E. 1/6'], answer:'B', explanation:'Kombinasi jumlah 7: {1,6},{2,5},{3,4},{4,3},{5,2},{6,1}=6 cara. P=6/36=1/6' },
    { id:'PM-E15', question:'Nilai dari (7 + 3√2)(7 − 3√2) adalah:', options:['A. 31','B. 49','C. 23','D. 41','E. 58'], answer:'A', explanation:'(a+b)(a−b)=a²−b²=49−9×2=49−18=31' },
    { id:'PM-E16', question:'Titik berat segitiga dengan sudut-sudut (0,0), (6,0), (0,9) adalah:', options:['A. (2,3)','B. (3,3)','C. (2,2)','D. (3,2)','E. (1,3)'], answer:'A', explanation:'Titik berat = ((0+6+0)/3, (0+0+9)/3) = (6/3, 9/3) = (2, 3)' },
    { id:'PM-E17', question:'Akar-akar persamaan 3x² + 5x − 2 = 0 adalah:', options:['A. x = 1/3 atau x = −2','B. x = −1/3 atau x = 2','C. x = 2 atau x = 3','D. x = 1/3 atau x = 2','E. x = −2 atau x = 3'], answer:'A', explanation:'Faktorkan: (3x−1)(x+2)=0 → x=1/3 atau x=−2' },
    { id:'PM-E18', question:'Jarak antara titik A(1,2) dan B(4,6) adalah:', options:['A. 3','B. 4','C. 5','D. 6','E. 7'], answer:'C', explanation:'d=√((4−1)²+(6−2)²)=√(9+16)=√25=5' },
    { id:'PM-E19', question:'Nilai dari 8^(2/3) adalah:', options:['A. 2','B. 3','C. 4','D. 6','E. 8'], answer:'C', explanation:'8^(2/3) = (8^(1/3))² = 2² = 4' },
    { id:'PM-E20', question:'Garis yang melalui (1,3) dan sejajar y = 4x − 2 mempunyai persamaan:', options:['A. y = 4x − 1','B. y = 4x + 1','C. y = 4x − 5','D. y = −4x + 7','E. y = x + 2'], answer:'A', explanation:'Gradien = 4. y−3=4(x−1) → y=4x−4+3=4x−1' },
    { id:'PM-E21', question:'Nilai cos 120° adalah:', options:['A. 1/2','B. −1/2','C. √3/2','D. −√3/2','E. 0'], answer:'B', explanation:'cos 120° = cos(180°−60°) = −cos 60° = −1/2' },
    { id:'PM-E22', question:'Jika log 2 = 0,301, maka log 8 adalah:', options:['A. 0,301','B. 0,602','C. 0,903','D. 1,204','E. 0,699'], answer:'C', explanation:'log 8 = log 2³ = 3 × log 2 = 3 × 0,301 = 0,903' },
    { id:'PM-E23', question:'Nilai hasil dari C(8,3) adalah:', options:['A. 40','B. 48','C. 56','D. 64','E. 72'], answer:'C', explanation:'C(8,3) = 8!/(3!×5!) = (8×7×6)/(3×2×1) = 336/6 = 56' },
    { id:'PM-E24', question:'Sebuah lingkaran memiliki luas 154 cm² (π=22/7). Jari-jarinya adalah:', options:['A. 5 cm','B. 6 cm','C. 7 cm','D. 8 cm','E. 9 cm'], answer:'C', explanation:'π r² = 154 → (22/7)r² = 154 → r² = 49 → r = 7 cm' },
    { id:'PM-E25', question:'Jumlah barisan aritmetika dengan suku pertama 10, beda 5, dan n=20 adalah:', options:['A. 1.100','B. 1.150','C. 1.200','D. 1.250','E. 1.050'], answer:'B', explanation:'Sn = (20/2)[2×10+(20−1)×5] = 10[20+95] = 10×115 = 1.150' },
    { id:'PM-E26', question:'Nilai lim(x→0) sin(3x)/x adalah:', options:['A. 1','B. 3','C. 0','D. 1/3','E. Tidak ada'], answer:'B', explanation:'lim sin(ax)/x = a. Jadi lim sin(3x)/x = 3' },
    { id:'PM-E27', question:'Jika vektor a=(3,4) maka |a| (panjang vektor) adalah:', options:['A. 3','B. 4','C. 5','D. 6','E. 7'], answer:'C', explanation:'|a| = √(3²+4²) = √(9+16) = √25 = 5' },
    { id:'PM-E28', question:'Gradien garis 3x − 4y + 8 = 0 adalah:', options:['A. 3/4','B. −3/4','C. 4/3','D. −4/3','E. 3'], answer:'A', explanation:'−4y = −3x − 8 → y = (3/4)x + 2. Gradien = 3/4' },
    { id:'PM-E29', question:'Nilai dari (2 + i)(2 − i) dengan i = √−1 adalah:', options:['A. 3','B. 4','C. 5','D. 6','E. 4+i'], answer:'C', explanation:'(2+i)(2−i) = 4 − i² = 4 − (−1) = 5' },
    { id:'PM-E30', question:'Fungsi f: R→R dengan f(x) = x² + 1 memiliki nilai minimum:', options:['A. −1','B. 0','C. 1','D. 2','E. Tidak ada minimum'], answer:'C', explanation:'Minimum f(x)=x²+1 terjadi saat x=0, f(0)=0+1=1' },
  ],
};

/**
 * Gabungkan QUESTION_BANK + QUESTION_BANK_EXTRA dan ambil sample acak
 * sesuai jumlah yang dibutuhkan per subtes
 */
function getShuffledQuestions() {
  const result = {};
  for (const key of SUBTEST_ORDER) {
    // Gabungkan bank soal utama + ekstra
    const allQ = [
      ...(QUESTION_BANK[key] || []),
      ...(QUESTION_BANK_EXTRA[key] || []),
    ];
    // Acak seluruh bank
    const shuffled = shuffleArray(allQ);
    // Ambil hanya sejumlah soal yang dibutuhkan
    const needed = SUBTEST_INFO[key].questions;
    result[key] = shuffled.slice(0, needed);
  }
  return result;
}
