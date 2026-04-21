/**
 * SNBT Tryout Pro — Bank Soal
 * Total: 170 soal | 7 Subtes
 * PU:30 | PPU:20 | PBM:20 | PK:20 | LBI:30 | LBE:20 | PM:30
 */

const QUESTION_BANK = {
  PU: [
    // ========== 1-10: Deret Angka ==========
    {
      id:'PU-01', question:'Tentukan bilangan selanjutnya dari deret berikut:\n2, 5, 10, 17, 26, 37, __',
      options:['A. 48','B. 50','C. 52','D. 54','E. 46'],
      answer:'B',
      explanation:'Pola selisih: +3,+5,+7,+9,+11,+13 → 37+13=50'
    },
    {
      id:'PU-02', question:'Bilangan selanjutnya dari deret: 3, 9, 27, 81, __',
      options:['A. 162','B. 216','C. 243','D. 256','E. 324'],
      answer:'C',
      explanation:'Pola: ×3 setiap suku. 81×3=243'
    },
    {
      id:'PU-03', question:'Bilangan selanjutnya dari deret Fibonacci: 1, 1, 2, 3, 5, 8, 13, __',
      options:['A. 18','B. 19','C. 20','D. 21','E. 22'],
      answer:'D',
      explanation:'Setiap suku = jumlah dua suku sebelumnya. 8+13=21'
    },
    {
      id:'PU-04', question:'Deret: 100, 95, 85, 70, 50, __',
      options:['A. 30','B. 25','C. 20','D. 35','E. 28'],
      answer:'B',
      explanation:'Selisih: −5,−10,−15,−20,−25 → 50−25=25'
    },
    {
      id:'PU-05', question:'Deret: 1, 4, 9, 16, 25, 36, __',
      options:['A. 48','B. 49','C. 50','D. 45','E. 42'],
      answer:'B',
      explanation:'Deret kuadrat: 1²,2²,3²,...,7²=49'
    },
    {
      id:'PU-06', question:'Deret: 7, 11, 16, 22, 29, __',
      options:['A. 35','B. 36','C. 37','D. 38','E. 39'],
      answer:'C',
      explanation:'Selisih: +4,+5,+6,+7,+8 → 29+8=37'
    },
    {
      id:'PU-07', question:'Deret: 256, 64, 16, 4, __',
      options:['A. 0','B. 0.5','C. 1','D. 2','E. 1.5'],
      answer:'C',
      explanation:'Pola: ÷4 setiap suku. 4÷4=1'
    },
    {
      id:'PU-08', question:'Deret huruf: A, C, F, J, O, __',
      options:['A. T','B. U','C. V','D. S','E. W'],
      answer:'B',
      explanation:'Posisi: A(1),C(3),F(6),J(10),O(15),U(21). Selisih: +2,+3,+4,+5,+6'
    },
    {
      id:'PU-09', question:'Deret: 53, 46, 40, 35, 31, 28, __',
      options:['A. 24','B. 25','C. 26','D. 27','E. 23'],
      answer:'C',
      explanation:'Selisih: −7,−6,−5,−4,−3,−2 → 28−2=26'
    },
    {
      id:'PU-10', question:'Deret: 3, 12, 48, 192, __',
      options:['A. 384','B. 576','C. 768','D. 960','E. 1024'],
      answer:'C',
      explanation:'Pola: ×4. 192×4=768'
    },
    // ========== 11-18: Analogi Kata ==========
    {
      id:'PU-11', question:'BUKU : PERPUSTAKAAN = LUKISAN : ?',
      options:['A. Kanvas','B. Cat','C. Museum','D. Seniman','E. Bingkai'],
      answer:'C',
      explanation:'Buku disimpan di Perpustakaan; Lukisan disimpan di Museum'
    },
    {
      id:'PU-12', question:'PENULIS : NOVEL = KOMPOSER : ?',
      options:['A. Piano','B. Musik','C. Orkestra','D. Simfoni','E. Partitur'],
      answer:'D',
      explanation:'Penulis menghasilkan Novel; Komposer menghasilkan Simfoni'
    },
    {
      id:'PU-13', question:'FOTOGRAFI : KAMERA = MELUKIS : ?',
      options:['A. Galeri','B. Kanvas','C. Warna','D. Kuas','E. Gambar'],
      answer:'D',
      explanation:'Fotografi menggunakan Kamera sebagai alat; Melukis menggunakan Kuas sebagai alat'
    },
    {
      id:'PU-14', question:'TERMOMETER : SUHU = BAROMETER : ?',
      options:['A. Angin','B. Tekanan udara','C. Cuaca','D. Hujan','E. Getaran'],
      answer:'B',
      explanation:'Termometer mengukur Suhu; Barometer mengukur Tekanan udara'
    },
    {
      id:'PU-15', question:'GITAR : PETIK = PIANO : ?',
      options:['A. Gesek','B. Tiup','C. Pukul','D. Tekan','E. Klik'],
      answer:'D',
      explanation:'Gitar dimainkan dengan dipetik; Piano dimainkan dengan ditekan'
    },
    {
      id:'PU-16', question:'KATA : KALIMAT = KALIMAT : ?',
      options:['A. Kata','B. Paragraf','C. Buku','D. Huruf','E. Cerita'],
      answer:'B',
      explanation:'Kata membentuk Kalimat; Kalimat membentuk Paragraf'
    },
    {
      id:'PU-17', question:'KERTAS : BUKU = BATU BATA : ?',
      options:['A. Semen','B. Gedung','C. Batu','D. Pasir','E. Atap'],
      answer:'B',
      explanation:'Kertas menjadi bahan pembentuk Buku; Batu Bata menjadi bahan pembentuk Gedung'
    },
    {
      id:'PU-18', question:'SIANG : MALAM = BERDIRI : ?',
      options:['A. Berjalan','B. Duduk','C. Berbaring','D. Berlutut','E. Melompat'],
      answer:'C',
      explanation:'Siang adalah antonim Malam; Berdiri adalah antonim Berbaring'
    },
    // ========== 19-24: Silogisme & Logika ==========
    {
      id:'PU-19', question:'Semua mahasiswa rajin belajar. Andi adalah mahasiswa.\nKesimpulan yang tepat adalah:',
      options:['A. Andi tidak rajin belajar','B. Andi rajin belajar','C. Tidak semua mahasiswa rajin','D. Andi bukan mahasiswa','E. Tidak dapat disimpulkan'],
      answer:'B',
      explanation:'Modus Ponens: Semua A→B, Andi adalah A, maka Andi→B (rajin belajar)'
    },
    {
      id:'PU-20', question:'Semua yang malas tidak berhasil. Siti berhasil.\nKesimpulan yang tepat adalah:',
      options:['A. Siti malas','B. Siti tidak malas','C. Siti tidak berhasil','D. Semua yang berhasil malas','E. Tidak dapat disimpulkan'],
      answer:'B',
      explanation:'Kontrapositif: Berhasil → Tidak malas. Siti berhasil, maka Siti tidak malas'
    },
    {
      id:'PU-21', question:'Jika tidak A maka B. Jika B maka C. Diketahui tidak C.\nKesimpulan yang tepat:',
      options:['A. A benar','B. B benar','C. C benar','D. A salah','E. Tidak dapat disimpulkan'],
      answer:'A',
      explanation:'¬C → ¬B (modus tollens). ¬B → A (kontrapositif dari ¬A→B). Jadi A benar.'
    },
    {
      id:'PU-22', question:'Semua A adalah B. Beberapa B adalah C.\nKesimpulan yang paling tepat:',
      options:['A. Semua A adalah C','B. Tidak ada A yang C','C. Beberapa B bukan A','D. Semua C adalah B','E. Tidak dapat dipastikan apakah ada A yang C'],
      answer:'E',
      explanation:'Dari premis ini, tidak dapat disimpulkan hubungan pasti antara A dan C'
    },
    {
      id:'PU-23', question:'Semua dokter adalah sarjana. Budi bukan sarjana.\nKesimpulan yang tepat:',
      options:['A. Budi adalah dokter','B. Budi bukan dokter','C. Semua sarjana adalah dokter','D. Budi mungkin dokter','E. Tidak dapat ditentukan'],
      answer:'B',
      explanation:'Kontrapositif: Bukan Sarjana → Bukan Dokter. Budi bukan sarjana, maka Budi bukan dokter'
    },
    {
      id:'PU-24', question:'Hari ini Rabu. Sepuluh hari yang lalu adalah hari:',
      options:['A. Senin','B. Selasa','C. Sabtu','D. Minggu','E. Jumat'],
      answer:'D',
      explanation:'Rabu − 7 hari = Rabu; Rabu − 3 hari lagi = Minggu'
    },
    // ========== 25-30: Himpunan & Kuantitatif ==========
    {
      id:'PU-25', question:'Dari 50 siswa, 30 mengikuti ekskul olahraga, 25 mengikuti ekskul seni, dan 10 mengikuti keduanya. Berapa siswa yang tidak mengikuti ekskul apapun?',
      options:['A. 0','B. 5','C. 10','D. 15','E. 20'],
      answer:'B',
      explanation:'Yang mengikuti setidaknya satu = 30+25−10=45. Yang tidak ikut = 50−45=5'
    },
    {
      id:'PU-26', question:'Dari 40 siswa, 25 suka IPA, 20 suka IPS, dan 5 tidak suka keduanya. Berapa siswa yang suka keduanya?',
      options:['A. 5','B. 8','C. 10','D. 12','E. 15'],
      answer:'C',
      explanation:'Suka setidaknya satu = 40−5=35. 35=25+20−x → x=10'
    },
    {
      id:'PU-27', question:'Perbandingan uang A dan B adalah 3:5. Jika uang A adalah Rp 900.000, berapa uang B?',
      options:['A. Rp 1.200.000','B. Rp 1.500.000','C. Rp 1.800.000','D. Rp 2.000.000','E. Rp 2.500.000'],
      answer:'B',
      explanation:'B = (5/3) × 900.000 = Rp 1.500.000'
    },
    {
      id:'PU-28', question:'A lebih tinggi dari B. C lebih rendah dari B. D lebih tinggi dari A. Urutan dari tertinggi ke terendah:',
      options:['A. D−A−B−C','B. A−D−B−C','C. D−B−A−C','D. A−B−D−C','E. B−D−A−C'],
      answer:'A',
      explanation:'D > A > B > C (diketahui dari perbandingan: D>A, A>B, B>C)'
    },
    {
      id:'PU-29', question:'Nilai rata-rata 10 siswa adalah 75. Jika seorang siswa baru dengan nilai 85 bergabung, rata-rata baru adalah:',
      options:['A. 75,9','B. 76','C. 76,5','D. 77','E. 78'],
      answer:'A',
      explanation:'(10×75+85)/11 = 835/11 ≈ 75,9'
    },
    {
      id:'PU-30', question:'Sebuah persegi panjang memiliki keliling 24 cm. Jika panjangnya 2 kali lebarnya, berapa luasnya?',
      options:['A. 24 cm²','B. 28 cm²','C. 32 cm²','D. 36 cm²','E. 40 cm²'],
      answer:'C',
      explanation:'2(2x+x)=24 → x=4. Luas=2x×x=8×4=32 cm²'
    },
  ],

  PPU: [
    {id:'PPU-01', question:'Siapakah Presiden pertama Republik Indonesia?', options:['A. Soeharto','B. Soekarno','C. Habibie','D. Wahid','E. Megawati'], answer:'B', explanation:'Ir. Soekarno adalah presiden pertama RI (1945−1967)'},
    {id:'PPU-02', question:'Proklamasi Kemerdekaan Indonesia dibacakan pada tanggal:', options:['A. 17 Agustus 1944','B. 17 Agustus 1945','C. 18 Agustus 1945','D. 17 Juli 1945','E. 1 Juni 1945'], answer:'B', explanation:'Proklamasi dibacakan Soekarno−Hatta pada 17 Agustus 1945 pukul 10.00 WIB'},
    {id:'PPU-03', question:'Sidang pertama BPUPKI berlangsung pada tanggal:', options:['A. 29 Mei−1 Juni 1945','B. 10−17 Juli 1945','C. 17 Agustus 1945','D. 18 Agustus 1945','E. 1 Maret 1945'], answer:'A', explanation:'BPUPKI sidang pertama 29 Mei−1 Juni 1945 untuk merumuskan dasar negara'},
    {id:'PPU-04', question:'Siapakah yang dijuluki "Bapak Koperasi Indonesia"?', options:['A. Mohammad Hatta','B. Soekarno','C. Ki Hajar Dewantara','D. Tan Malaka','E. Sjahrir'], answer:'A', explanation:'Mohammad Hatta dikenal sebagai Bapak Koperasi Indonesia'},
    {id:'PPU-05', question:'Lagu kebangsaan Indonesia Raya diciptakan oleh:', options:['A. Ismail Marzuki','B. Kusbini','C. W.R. Supratman','D. Gesang','E. Mochtar Embut'], answer:'C', explanation:'W.R. Supratman menciptakan Indonesia Raya pada 1928'},
    {id:'PPU-06', question:'Sungai terpanjang di Indonesia adalah:', options:['A. Sungai Mahakam','B. Sungai Kapuas','C. Sungai Musi','D. Sungai Citarum','E. Sungai Barito'], answer:'B', explanation:'Sungai Kapuas di Kalimantan Barat dengan panjang ±1.143 km'},
    {id:'PPU-07', question:'Pulau terbesar di Indonesia adalah:', options:['A. Jawa','B. Kalimantan','C. Sumatera','D. Sulawesi','E. Papua'], answer:'E', explanation:'Papua (785.753 km²) adalah pulau terbesar di Indonesia'},
    {id:'PPU-08', question:'Borobudur terletak di provinsi:', options:['A. Daerah Istimewa Yogyakarta','B. Jawa Tengah','C. Jawa Barat','D. Bali','E. Jawa Timur'], answer:'B', explanation:'Candi Borobudur terletak di Magelang, Jawa Tengah'},
    {id:'PPU-09', question:'Manakah yang BUKAN merupakan sila Pancasila?', options:['A. Ketuhanan Yang Maha Esa','B. Kemanusiaan yang Adil dan Beradab','C. Persatuan Indonesia','D. Kedaulatan Rakyat','E. Keadilan Sosial bagi Seluruh Rakyat Indonesia'], answer:'D', explanation:'Sila ke-4 adalah "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan", bukan "Kedaulatan Rakyat"'},
    {id:'PPU-10', question:'Planet terbesar di tata surya adalah:', options:['A. Bumi','B. Saturnus','C. Uranus','D. Neptunus','E. Jupiter'], answer:'E', explanation:'Jupiter adalah planet terbesar dengan diameter ±142.984 km'},
    {id:'PPU-11', question:'Proses fotosintesis menghasilkan:', options:['A. CO₂ dan H₂O','B. O₂ dan glukosa','C. O₂ dan CO₂','D. Glukosa dan CO₂','E. H₂O dan O₂'], answer:'B', explanation:'6CO₂ + 6H₂O + cahaya → C₆H₁₂O₆ + 6O₂'},
    {id:'PPU-12', question:'Organisme yang dapat membuat makanan sendiri disebut:', options:['A. Konsumen','B. Heterotrof','C. Autotrof','D. Dekomposer','E. Parasit'], answer:'C', explanation:'Autotrof (produsen) mampu mensintesis makanan sendiri melalui fotosintesis/kemosintesis'},
    {id:'PPU-13', question:'Rumus kimia air adalah:', options:['A. HO','B. H₂O','C. H₂O₂','D. HO₂','E. H₃O'], answer:'B', explanation:'Air terdiri dari 2 atom Hidrogen dan 1 atom Oksigen: H₂O'},
    {id:'PPU-14', question:'Satuan SI untuk gaya adalah:', options:['A. Joule','B. Watt','C. Newton','D. Pascal','E. Ampere'], answer:'C', explanation:'Newton (N) adalah satuan gaya dalam sistem SI. F = m × a'},
    {id:'PPU-15', question:'Sel saraf yang menghantarkan impuls dari organ indera ke otak disebut:', options:['A. Neuron motorik','B. Neuron sensorik','C. Neuron konektor','D. Sinapsis','E. Dendrit'], answer:'B', explanation:'Neuron sensorik (aferen) membawa impuls dari reseptor ke pusat saraf'},
    {id:'PPU-16', question:'Yang dimaksud dengan inflasi adalah:', options:['A. Penurunan nilai ekspor','B. Kenaikan harga barang secara umum dan terus-menerus','C. Peningkatan produksi barang','D. Penurunan angka pengangguran','E. Kenaikan nilai tukar rupiah'], answer:'B', explanation:'Inflasi adalah kenaikan harga barang/jasa secara umum dan berkelanjutan'},
    {id:'PPU-17', question:'Manakah yang BUKAN merupakan gas rumah kaca?', options:['A. CO₂','B. CH₄','C. N₂O','D. N₂','E. H₂O (uap air)'], answer:'D', explanation:'N₂ (nitrogen molekuler) bukan gas rumah kaca. Gas rumah kaca meliputi CO₂, CH₄, N₂O, CFC, H₂O'},
    {id:'PPU-18', question:'Faktor utama penyebab percepatan perubahan iklim global adalah:', options:['A. Aktivitas gunung berapi','B. Pembakaran bahan bakar fosil dan deforestasi','C. Pergerakan lempeng tektonik','D. Badai matahari','E. Perpindahan penduduk'], answer:'B', explanation:'Aktivitas manusia terutama pembakaran fosil dan penggundulan hutan adalah penyebab utama perubahan iklim'},
    {id:'PPU-19', question:'Organisasi ASEAN didirikan di:', options:['A. Jakarta, Indonesia','B. Manila, Filipina','C. Bangkok, Thailand','D. Kuala Lumpur, Malaysia','E. Singapura'], answer:'C', explanation:'ASEAN didirikan di Bangkok, Thailand, melalui Deklarasi Bangkok pada 8 Agustus 1967'},
    {id:'PPU-20', question:'Penyakit Demam Berdarah Dengue (DBD) disebabkan oleh virus yang dibawa oleh:', options:['A. Nyamuk Anopheles','B. Nyamuk Culex','C. Nyamuk Aedes aegypti','D. Lalat tsetse','E. Tungau'], answer:'C', explanation:'DBD disebabkan virus dengue yang ditularkan melalui gigitan nyamuk Aedes aegypti'},
  ],

  PBM: [
    // Passage 1: Perubahan Iklim (PBM1-5)
    {
      id:'PBM-01',
      passage:'Perubahan iklim merupakan tantangan global yang memerlukan perhatian serius dari seluruh negara. Kenaikan suhu rata-rata bumi telah menyebabkan berbagai dampak negatif, mulai dari mencairnya es di kutub, naiknya permukaan laut, hingga perubahan pola cuaca yang ekstrem. Indonesia, sebagai negara kepulauan dengan garis pantai terpanjang keempat di dunia, sangat rentan terhadap dampak perubahan iklim ini.\n\nPara ilmuwan sepakat bahwa aktivitas manusia, terutama pembakaran bahan bakar fosil dan deforestasi, menjadi faktor utama percepatan perubahan iklim. Emisi gas CO₂ dan CH₄ ke atmosfer menciptakan efek rumah kaca yang menjebak panas matahari. Upaya mitigasi mencakup transisi ke energi terbarukan, pengurangan emisi karbon, dan penanaman pohon besar-besaran.',
      question:'Ide pokok paragraf pertama teks tersebut adalah:',
      options:['A. Indonesia rentan terhadap perubahan iklim','B. Perubahan iklim merupakan tantangan global','C. Garis pantai Indonesia sangat panjang','D. Permukaan laut terus naik','E. Pola cuaca semakin tidak menentu'],
      answer:'B',
      explanation:'Kalimat utama paragraf pertama adalah kalimat pertama: "Perubahan iklim merupakan tantangan global..."'
    },
    {
      id:'PBM-02',
      passage:'Perubahan iklim merupakan tantangan global yang memerlukan perhatian serius dari seluruh negara. Kenaikan suhu rata-rata bumi telah menyebabkan berbagai dampak negatif, mulai dari mencairnya es di kutub, naiknya permukaan laut, hingga perubahan pola cuaca yang ekstrem. Indonesia, sebagai negara kepulauan dengan garis pantai terpanjang keempat di dunia, sangat rentan terhadap dampak perubahan iklim ini.\n\nPara ilmuwan sepakat bahwa aktivitas manusia, terutama pembakaran bahan bakar fosil dan deforestasi, menjadi faktor utama percepatan perubahan iklim. Emisi gas CO₂ dan CH₄ ke atmosfer menciptakan efek rumah kaca yang menjebak panas matahari. Upaya mitigasi mencakup transisi ke energi terbarukan, pengurangan emisi karbon, dan penanaman pohon besar-besaran.',
      question:'Menurut teks, dampak perubahan iklim yang TIDAK disebutkan adalah:',
      options:['A. Mencairnya es di kutub','B. Naiknya permukaan laut','C. Perubahan pola cuaca ekstrem','D. Meningkatnya keanekaragaman hayati','E. Ancaman terhadap negara kepulauan'],
      answer:'D',
      explanation:'Teks tidak menyebut peningkatan keanekaragaman hayati sebagai dampak perubahan iklim'
    },
    {
      id:'PBM-03',
      passage:'Perubahan iklim merupakan tantangan global yang memerlukan perhatian serius dari seluruh negara. Kenaikan suhu rata-rata bumi telah menyebabkan berbagai dampak negatif, mulai dari mencairnya es di kutub, naiknya permukaan laut, hingga perubahan pola cuaca yang ekstrem. Indonesia, sebagai negara kepulauan dengan garis pantai terpanjang keempat di dunia, sangat rentan terhadap dampak perubahan iklim ini.\n\nPara ilmuwan sepakat bahwa aktivitas manusia, terutama pembakaran bahan bakar fosil dan deforestasi, menjadi faktor utama percepatan perubahan iklim. Emisi gas CO₂ dan CH₄ ke atmosfer menciptakan efek rumah kaca yang menjebak panas matahari. Upaya mitigasi mencakup transisi ke energi terbarukan, pengurangan emisi karbon, dan penanaman pohon besar-besaran.',
      question:'Kata "mitigasi" dalam paragraf kedua bermakna:',
      options:['A. Penelitian ilmiah','B. Upaya pengurangan atau pencegahan dampak','C. Penyebab bencana','D. Prediksi perubahan cuaca','E. Dampak lingkungan'],
      answer:'B',
      explanation:'Mitigasi = tindakan untuk mengurangi atau mencegah dampak suatu bencana/masalah'
    },
    {
      id:'PBM-04',
      passage:'Perubahan iklim merupakan tantangan global yang memerlukan perhatian serius dari seluruh negara. Kenaikan suhu rata-rata bumi telah menyebabkan berbagai dampak negatif, mulai dari mencairnya es di kutub, naiknya permukaan laut, hingga perubahan pola cuaca yang ekstrem. Indonesia, sebagai negara kepulauan dengan garis pantai terpanjang keempat di dunia, sangat rentan terhadap dampak perubahan iklim ini.\n\nPara ilmuwan sepakat bahwa aktivitas manusia, terutama pembakaran bahan bakar fosil dan deforestasi, menjadi faktor utama percepatan perubahan iklim. Emisi gas CO₂ dan CH₄ ke atmosfer menciptakan efek rumah kaca yang menjebak panas matahari. Upaya mitigasi mencakup transisi ke energi terbarukan, pengurangan emisi karbon, dan penanaman pohon besar-besaran.',
      question:'Sinonim yang paling tepat untuk kata "rentan" dalam teks tersebut adalah:',
      options:['A. Kebal','B. Kuat','C. Mudah terpengaruh/terancam','D. Tidak terimbas','E. Dapat beradaptasi'],
      answer:'C',
      explanation:'Rentan = mudah terkena dampak, mudah terancam atau terpengaruh'
    },
    {
      id:'PBM-05',
      passage:'Perubahan iklim merupakan tantangan global yang memerlukan perhatian serius dari seluruh negara. Kenaikan suhu rata-rata bumi telah menyebabkan berbagai dampak negatif, mulai dari mencairnya es di kutub, naiknya permukaan laut, hingga perubahan pola cuaca yang ekstrem. Indonesia, sebagai negara kepulauan dengan garis pantai terpanjang keempat di dunia, sangat rentan terhadap dampak perubahan iklim ini.\n\nPara ilmuwan sepakat bahwa aktivitas manusia, terutama pembakaran bahan bakar fosil dan deforestasi, menjadi faktor utama percepatan perubahan iklim. Emisi gas CO₂ dan CH₄ ke atmosfer menciptakan efek rumah kaca yang menjebak panas matahari. Upaya mitigasi mencakup transisi ke energi terbarukan, pengurangan emisi karbon, dan penanaman pohon besar-besaran.',
      question:'Kesimpulan yang PALING TEPAT berdasarkan teks adalah:',
      options:['A. Indonesia sudah berhasil mengatasi perubahan iklim','B. Perubahan iklim hanya masalah negara maju','C. Aktivitas manusia mempercepat perubahan iklim dan upaya mitigasi sangat diperlukan','D. Efek rumah kaca tidak berbahaya bagi Indonesia','E. Deforestasi tidak berpengaruh pada perubahan iklim'],
      answer:'C',
      explanation:'Teks menyimpulkan bahwa aktivitas manusia menjadi penyebab dan mitigasi diperlukan sebagai solusi'
    },
    // Passage 2: Revolusi Industri 4.0 (PBM6-10)
    {
      id:'PBM-06',
      passage:'Revolusi industri 4.0 telah mengubah lanskap ekonomi global secara fundamental. Otomatisasi dan kecerdasan buatan (AI) mulai menggantikan berbagai pekerjaan yang sebelumnya dilakukan oleh manusia. Di satu sisi, hal ini meningkatkan efisiensi dan produktivitas. Di sisi lain, banyak tenaga kerja yang kehilangan pekerjaan mereka.\n\nNamun, revolusi industri 4.0 juga menciptakan jenis pekerjaan baru yang sebelumnya tidak ada. Profesi seperti data scientist, AI engineer, dan cybersecurity specialist semakin diminati. Oleh karena itu, adaptasi dan peningkatan keterampilan (upskilling) menjadi keharusan. Sistem pendidikan pun perlu bertransformasi untuk menghasilkan generasi yang siap menghadapi tantangan masa depan.',
      question:'Gagasan utama teks tersebut adalah:',
      options:['A. AI menggantikan semua pekerjaan manusia','B. Revolusi industri 4.0 membawa perubahan fundamental pada ekonomi global','C. Pekerjaan lama akan hilang selamanya','D. Upskilling tidak efektif','E. Sistem pendidikan sudah baik'],
      answer:'B',
      explanation:'Gagasan utama ada di kalimat pertama: revolusi industri 4.0 mengubah lanskap ekonomi global'
    },
    {
      id:'PBM-07',
      passage:'Revolusi industri 4.0 telah mengubah lanskap ekonomi global secara fundamental. Otomatisasi dan kecerdasan buatan (AI) mulai menggantikan berbagai pekerjaan yang sebelumnya dilakukan oleh manusia. Di satu sisi, hal ini meningkatkan efisiensi dan produktivitas. Di sisi lain, banyak tenaga kerja yang kehilangan pekerjaan mereka.\n\nNamun, revolusi industri 4.0 juga menciptakan jenis pekerjaan baru yang sebelumnya tidak ada. Profesi seperti data scientist, AI engineer, dan cybersecurity specialist semakin diminati. Oleh karena itu, adaptasi dan peningkatan keterampilan (upskilling) menjadi keharusan. Sistem pendidikan pun perlu bertransformasi untuk menghasilkan generasi yang siap menghadapi tantangan masa depan.',
      question:'Dampak negatif revolusi industri 4.0 yang disebutkan teks adalah:',
      options:['A. Meningkatnya efisiensi produksi','B. Munculnya profesi baru','C. Banyak tenaga kerja kehilangan pekerjaan','D. Transformasi sistem pendidikan','E. Kecerdasan buatan semakin canggih'],
      answer:'C',
      explanation:'Teks menyebut "banyak tenaga kerja yang kehilangan pekerjaan mereka" sebagai dampak negatif'
    },
    {
      id:'PBM-08',
      passage:'Revolusi industri 4.0 telah mengubah lanskap ekonomi global secara fundamental. Otomatisasi dan kecerdasan buatan (AI) mulai menggantikan berbagai pekerjaan yang sebelumnya dilakukan oleh manusia. Di satu sisi, hal ini meningkatkan efisiensi dan produktivitas. Di sisi lain, banyak tenaga kerja yang kehilangan pekerjaan mereka.\n\nNamun, revolusi industri 4.0 juga menciptakan jenis pekerjaan baru yang sebelumnya tidak ada. Profesi seperti data scientist, AI engineer, dan cybersecurity specialist semakin diminati. Oleh karena itu, adaptasi dan peningkatan keterampilan (upskilling) menjadi keharusan. Sistem pendidikan pun perlu bertransformasi untuk menghasilkan generasi yang siap menghadapi tantangan masa depan.',
      question:'Sinonim kata "fundamental" dalam teks adalah:',
      options:['A. Sementara','B. Menyeluruh','C. Mendasar','D. Sebagian','E. Kecil'],
      answer:'C',
      explanation:'Fundamental = mendasar, bersifat dasar, sangat penting'
    },
    {
      id:'PBM-09',
      passage:'Revolusi industri 4.0 telah mengubah lanskap ekonomi global secara fundamental. Otomatisasi dan kecerdasan buatan (AI) mulai menggantikan berbagai pekerjaan yang sebelumnya dilakukan oleh manusia. Di satu sisi, hal ini meningkatkan efisiensi dan produktivitas. Di sisi lain, banyak tenaga kerja yang kehilangan pekerjaan mereka.\n\nNamun, revolusi industri 4.0 juga menciptakan jenis pekerjaan baru yang sebelumnya tidak ada. Profesi seperti data scientist, AI engineer, dan cybersecurity specialist semakin diminati. Oleh karena itu, adaptasi dan peningkatan keterampilan (upskilling) menjadi keharusan. Sistem pendidikan pun perlu bertransformasi untuk menghasilkan generasi yang siap menghadapi tantangan masa depan.',
      question:'Mengapa upskilling menjadi keharusan menurut teks?',
      options:['A. Pemerintah mewajibkan upskilling','B. Gaji pekerjaan lama terlalu rendah','C. Revolusi industri 4.0 menciptakan jenis pekerjaan baru yang butuh keterampilan berbeda','D. AI tidak bisa menggantikan manusia','E. Sistem pendidikan sudah sempurna'],
      answer:'C',
      explanation:'Teks menyatakan revolusi industri menciptakan pekerjaan baru, sehingga adaptasi keterampilan menjadi kuncinya'
    },
    {
      id:'PBM-10',
      passage:'Revolusi industri 4.0 telah mengubah lanskap ekonomi global secara fundamental. Otomatisasi dan kecerdasan buatan (AI) mulai menggantikan berbagai pekerjaan yang sebelumnya dilakukan oleh manusia. Di satu sisi, hal ini meningkatkan efisiensi dan produktivitas. Di sisi lain, banyak tenaga kerja yang kehilangan pekerjaan mereka.\n\nNamun, revolusi industri 4.0 juga menciptakan jenis pekerjaan baru yang sebelumnya tidak ada. Profesi seperti data scientist, AI engineer, dan cybersecurity specialist semakin diminati. Oleh karena itu, adaptasi dan peningkatan keterampilan (upskilling) menjadi keharusan. Sistem pendidikan pun perlu bertransformasi untuk menghasilkan generasi yang siap menghadapi tantangan masa depan.',
      question:'Perbaikan kalimat yang tepat untuk "Revolusi industri 4.0 juga menciptakan jenis-jenis pekerjaan baru yang sebelumnya tidak ada" adalah:',
      options:['A. Kalimat sudah benar dan efektif','B. Hilangkan kata "juga"','C. Ganti "yang sebelumnya tidak ada" dengan "baru"','D. Hilangkan kata "baru" karena sudah ada "jenis-jenis pekerjaan baru"','E. Ubah "menciptakan" menjadi "mewujudkan"'],
      answer:'D',
      explanation:'Kalimat mengandung pleonasme: "jenis pekerjaan baru" dan "yang sebelumnya tidak ada" memiliki makna yang sama sehingga salah satunya harus dihilangkan'
    },
    // Passage 3: Privasi Digital (PBM11-15)
    {
      id:'PBM-11',
      passage:'Di era digital ini, privasi data menjadi isu yang semakin sensitif. Setiap kali kita menggunakan aplikasi digital, kita meninggalkan jejak data yang dapat digunakan oleh berbagai pihak. Perusahaan teknologi mengumpulkan dan menganalisis data pengguna untuk keperluan bisnis, termasuk penargetan iklan. Meskipun memberikan kemudahan, terdapat risiko penyalahgunaan data yang perlu diwaspadai.\n\nLiterasi digital menjadi keterampilan esensial yang harus dimiliki oleh setiap pengguna internet. Memahami kebijakan privasi, menggunakan kata sandi yang kuat, dan berhati-hati dalam berbagi informasi pribadi merupakan langkah-langkah dasar dalam menjaga keamanan data diri.',
      question:'Gagasan utama paragraf pertama adalah:',
      options:['A. Cara menggunakan aplikasi digital','B. Perusahaan teknologi menggunakan data untuk iklan','C. Privasi data menjadi isu penting di era digital','D. Risiko internet sangat tinggi','E. Data pengguna tidak aman'],
      answer:'C',
      explanation:'Kalimat utama paragraf 1: "privasi data menjadi isu yang semakin sensitif di era digital"'
    },
    {
      id:'PBM-12',
      passage:'Di era digital ini, privasi data menjadi isu yang semakin sensitif. Setiap kali kita menggunakan aplikasi digital, kita meninggalkan jejak data yang dapat digunakan oleh berbagai pihak. Perusahaan teknologi mengumpulkan dan menganalisis data pengguna untuk keperluan bisnis, termasuk penargetan iklan. Meskipun memberikan kemudahan, terdapat risiko penyalahgunaan data yang perlu diwaspadai.\n\nLiterasi digital menjadi keterampilan esensial yang harus dimiliki oleh setiap pengguna internet. Memahami kebijakan privasi, menggunakan kata sandi yang kuat, dan berhati-hati dalam berbagi informasi pribadi merupakan langkah-langkah dasar dalam menjaga keamanan data diri.',
      question:'Antonim kata "esensial" dalam teks adalah:',
      options:['A. Penting','B. Fundamental','C. Tidak penting/sekunder','D. Kritis','E. Utama'],
      answer:'C',
      explanation:'Esensial = sangat penting, mendasar. Antonimnya adalah tidak penting atau sekunder'
    },
    {
      id:'PBM-13',
      passage:'Di era digital ini, privasi data menjadi isu yang semakin sensitif. Setiap kali kita menggunakan aplikasi digital, kita meninggalkan jejak data yang dapat digunakan oleh berbagai pihak. Perusahaan teknologi mengumpulkan dan menganalisis data pengguna untuk keperluan bisnis, termasuk penargetan iklan. Meskipun memberikan kemudahan, terdapat risiko penyalahgunaan data yang perlu diwaspadai.\n\nLiterasi digital menjadi keterampilan esensial yang harus dimiliki oleh setiap pengguna internet. Memahami kebijakan privasi, menggunakan kata sandi yang kuat, dan berhati-hati dalam berbagi informasi pribadi merupakan langkah-langkah dasar dalam menjaga keamanan data diri.',
      question:'Tujuan perusahaan teknologi mengumpulkan data pengguna menurut teks adalah:',
      options:['A. Melindungi pengguna dari kejahatan siber','B. Keperluan bisnis, termasuk penargetan iklan','C. Meningkatkan kecepatan layanan','D. Menyimpan data secara aman','E. Membantu pemerintah mengawasi masyarakat'],
      answer:'B',
      explanation:'Teks menyebutkan: "mengumpulkan data untuk keperluan bisnis, termasuk penargetan iklan"'
    },
    {
      id:'PBM-14',
      passage:'Di era digital ini, privasi data menjadi isu yang semakin sensitif. Setiap kali kita menggunakan aplikasi digital, kita meninggalkan jejak data yang dapat digunakan oleh berbagai pihak. Perusahaan teknologi mengumpulkan dan menganalisis data pengguna untuk keperluan bisnis, termasuk penargetan iklan. Meskipun memberikan kemudahan, terdapat risiko penyalahgunaan data yang perlu diwaspadai.\n\nLiterasi digital menjadi keterampilan esensial yang harus dimiliki oleh setiap pengguna internet. Memahami kebijakan privasi, menggunakan kata sandi yang kuat, dan berhati-hati dalam berbagi informasi pribadi merupakan langkah-langkah dasar dalam menjaga keamanan data diri.',
      question:'Langkah menjaga keamanan data yang TIDAK disebutkan dalam teks adalah:',
      options:['A. Memahami kebijakan privasi','B. Menggunakan kata sandi kuat','C. Berhati-hati berbagi informasi pribadi','D. Menggunakan VPN','E. Semua ada dalam teks'],
      answer:'D',
      explanation:'VPN tidak disebutkan dalam teks. Teks hanya menyebut: memahami kebijakan privasi, kata sandi kuat, berhati-hati berbagi info'
    },
    {
      id:'PBM-15',
      passage:'Di era digital ini, privasi data menjadi isu yang semakin sensitif. Setiap kali kita menggunakan aplikasi digital, kita meninggalkan jejak data yang dapat digunakan oleh berbagai pihak. Perusahaan teknologi mengumpulkan dan menganalisis data pengguna untuk keperluan bisnis, termasuk penargetan iklan. Meskipun memberikan kemudahan, terdapat risiko penyalahgunaan data yang perlu diwaspadai.\n\nLiterasi digital menjadi keterampilan esensial yang harus dimiliki oleh setiap pengguna internet. Memahami kebijakan privasi, menggunakan kata sandi yang kuat, dan berhati-hati dalam berbagi informasi pribadi merupakan langkah-langkah dasar dalam menjaga keamanan data diri.',
      question:'Pernyataan yang SESUAI dengan isi teks adalah:',
      options:['A. Literasi digital tidak penting bagi pengguna internet','B. Aplikasi digital tidak menyimpan data pengguna','C. Perusahaan teknologi mengumpulkan data untuk berbagai keperluan bisnis','D. Privasi data bukan masalah serius','E. Kata sandi tidak mempengaruhi keamanan data'],
      answer:'C',
      explanation:'Teks secara eksplisit menyebutkan perusahaan teknologi mengumpulkan data untuk keperluan bisnis'
    },
    // Passage 4: Membaca (PBM16-20) 
    {
      id:'PBM-16',
      passage:'Membaca adalah kegiatan yang sangat penting bagi perkembangan intelektual seseorang. Melalui membaca, kita dapat menambah pengetahuan, memperluas wawasan, dan meningkatkan kemampuan berpikir kritis. Sayangnya, tingkat kebiasaan membaca masyarakat Indonesia masih tergolong rendah dibandingkan negara-negara maju. Pemerintah dan berbagai pihak perlu bekerja sama untuk mendorong budaya membaca di kalangan masyarakat, terutama generasi muda.',
      question:'Manakah penulisan judul yang paling tepat untuk teks tersebut?',
      options:['A. Pentingnya Membaca Bagi Perkembangan Intelektual','B. pentingnya membaca bagi perkembangan intelektual','C. Pentingnya Membaca bagi Perkembangan Intelektual','D. PENTINGNYA MEMBACA BAGI PERKEMBANGAN INTELEKTUAL','E. Pentingnya membaca Bagi Perkembangan Intelektual'],
      answer:'A',
      explanation:'Penulisan judul menggunakan huruf kapital di setiap kata kecuali preposisi/konjungsi. "Bagi" dalam judul tetap kapital karena ini kata kerja/keterangan, bukan preposisi awal - namun dalam kaidah EYD, opsi A paling mendekati'
    },
    {
      id:'PBM-17',
      passage:'Membaca adalah kegiatan yang sangat penting bagi perkembangan intelektual seseorang. Melalui membaca, kita dapat menambah pengetahuan, memperluas wawasan, dan meningkatkan kemampuan berpikir kritis. Sayangnya, tingkat kebiasaan membaca masyarakat Indonesia masih tergolong rendah dibandingkan negara-negara maju. Pemerintah dan berbagai pihak perlu bekerja sama untuk mendorong budaya membaca di kalangan masyarakat, terutama generasi muda.',
      question:'Kata "wawasan" bermakna paling dekat dengan:',
      options:['A. Ilmu pengetahuan teknis','B. Pandangan atau pemikiran yang luas','C. Buku pelajaran','D. Pengalaman bekerja','E. Kemampuan menulis'],
      answer:'B',
      explanation:'Wawasan = pandangan/pengetahuan tentang sesuatu yang bersifat luas dan menyeluruh'
    },
    {
      id:'PBM-18',
      passage:'Membaca adalah kegiatan yang sangat penting bagi perkembangan intelektual seseorang. Melalui membaca, kita dapat menambah pengetahuan, memperluas wawasan, dan meningkatkan kemampuan berpikir kritis. Sayangnya, tingkat kebiasaan membaca masyarakat Indonesia masih tergolong rendah dibandingkan negara-negara maju. Pemerintah dan berbagai pihak perlu bekerja sama untuk mendorong budaya membaca di kalangan masyarakat, terutama generasi muda.',
      question:'Perbaikan yang tepat untuk kalimat "Melalui membaca kita dapat menambah pengetahuan" adalah:',
      options:['A. Melalui membaca, kita dapat menambah pengetahuan.','B. Melalui membaca kita, dapat menambah pengetahuan.','C. Melalui membaca kita dapat, menambah pengetahuan.','D. Melalui membacaan kita dapat menambah pengetahuan.','E. Kalimat sudah benar'],
      answer:'A',
      explanation:'Setelah keterangan modalitas "Melalui membaca" diperlukan tanda koma sebelum klausa utama'
    },
    {
      id:'PBM-19',
      passage:'Membaca adalah kegiatan yang sangat penting bagi perkembangan intelektual seseorang. Melalui membaca, kita dapat menambah pengetahuan, memperluas wawasan, dan meningkatkan kemampuan berpikir kritis. Sayangnya, tingkat kebiasaan membaca masyarakat Indonesia masih tergolong rendah dibandingkan negara-negara maju. Pemerintah dan berbagai pihak perlu bekerja sama untuk mendorong budaya membaca di kalangan masyarakat, terutama generasi muda.',
      question:'Konjungsi yang paling tepat untuk mengawali kalimat berikutnya setelah paragraf tersebut dalam pembahasan yang MENDUKUNG isi teks adalah:',
      options:['A. Namun demikian','B. Meskipun begitu','C. Sebagai langkah konkret','D. Sebaliknya','E. Walaupun'],
      answer:'C',
      explanation:'"Sebagai langkah konkret" tepat untuk melanjutkan paragraf yang membahas solusi mendorong budaya membaca'
    },
    {
      id:'PBM-20',
      passage:'Membaca adalah kegiatan yang sangat penting bagi perkembangan intelektual seseorang. Melalui membaca, kita dapat menambah pengetahuan, memperluas wawasan, dan meningkatkan kemampuan berpikir kritis. Sayangnya, tingkat kebiasaan membaca masyarakat Indonesia masih tergolong rendah dibandingkan negara-negara maju. Pemerintah dan berbagai pihak perlu bekerja sama untuk mendorong budaya membaca di kalangan masyarakat, terutama generasi muda.',
      question:'Berdasarkan teks, kondisi kebiasaan membaca masyarakat Indonesia adalah:',
      options:['A. Sangat tinggi, melebihi negara maju','B. Tergolong rendah dibandingkan negara maju','C. Sama dengan rata-rata negara maju','D. Hanya rendah di kalangan generasi tua','E. Tidak disebutkan dalam teks'],
      answer:'B',
      explanation:'Teks menyatakan tingkat membaca Indonesia "masih tergolong rendah dibandingkan negara-negara maju"'
    },
  ],

  PK: [
    {id:'PK-01', question:'Jika 20% dari x = 50, maka nilai x adalah:', options:['A. 200','B. 250','C. 300','D. 150','E. 100'], answer:'B', explanation:'20% × x = 50 → x = 50 ÷ 0,2 = 250'},
    {id:'PK-02', question:'Sebuah toko menjual baju dengan harga Rp 120.000 setelah diskon 20%. Harga asli baju tersebut adalah:', options:['A. Rp 140.000','B. Rp 144.000','C. Rp 150.000','D. Rp 156.000','E. Rp 160.000'], answer:'C', explanation:'Harga asli × 0,8 = 120.000 → harga asli = 120.000 ÷ 0,8 = Rp 150.000'},
    {id:'PK-03', question:'Rata-rata dari 5 nilai: 70, 75, 80, 85, 90 adalah:', options:['A. 78','B. 79','C. 80','D. 81','E. 82'], answer:'C', explanation:'(70+75+80+85+90)/5 = 400/5 = 80'},
    {id:'PK-04', question:'A dapat menyelesaikan pekerjaan dalam 6 hari, B dalam 4 hari. Jika bekerja bersama, pekerjaan selesai dalam (hari):', options:['A. 2 hari','B. 2,4 hari','C. 3 hari','D. 2,5 hari','E. 3,5 hari'], answer:'B', explanation:'Dalam sehari: 1/6 + 1/4 = 5/12. Total = 12/5 = 2,4 hari'},
    {id:'PK-05', question:'Perbandingan gula:tepung:mentega = 2:3:1. Jika gula 200 gram, berapa tepung yang dibutuhkan?', options:['A. 250 gram','B. 300 gram','C. 350 gram','D. 400 gram','E. 150 gram'], answer:'B', explanation:'Tepung = (3/2) × 200 = 300 gram'},
    {id:'PK-06', question:'Harga suatu produk naik 10%, kemudian turun 10%. Perubahan dari harga awal adalah:', options:['A. 0%','B. −1%','C. +1%','D. −2%','E. +2%'], answer:'B', explanation:'100 → ×1,1 = 110 → ×0,9 = 99. Perubahan = (99−100)/100 = −1%'},
    {id:'PK-07', question:'Modus dari data: 3, 5, 7, 3, 8, 5, 3, 9 adalah:', options:['A. 3','B. 5','C. 7','D. 8','E. 9'], answer:'A', explanation:'3 muncul 3 kali (paling sering), 5 muncul 2 kali. Modus = 3'},
    {id:'PK-08', question:'Sebuah mobil menempuh 240 km dalam 3 jam. Kecepatannya adalah:', options:['A. 60 km/jam','B. 70 km/jam','C. 80 km/jam','D. 90 km/jam','E. 100 km/jam'], answer:'C', explanation:'Kecepatan = jarak / waktu = 240 / 3 = 80 km/jam'},
    {id:'PK-09', question:'Median dari data: 2, 7, 3, 8, 1, 9, 4 adalah:', options:['A. 3','B. 4','C. 5','D. 6','E. 7'], answer:'B', explanation:'Diurutkan: 1,2,3,4,7,8,9. Median = data ke-4 = 4'},
    {id:'PK-10', question:'Sebuah persegi memiliki keliling 36 cm. Luasnya adalah:', options:['A. 64 cm²','B. 72 cm²','C. 81 cm²','D. 90 cm²','E. 100 cm²'], answer:'C', explanation:'Sisi = 36/4 = 9 cm. Luas = 9² = 81 cm²'},
    {id:'PK-11', question:'Jika f(x) = 2x + 3, nilai f(f(2)) adalah:', options:['A. 11','B. 14','C. 17','D. 20','E. 7'], answer:'C', explanation:'f(2) = 2(2)+3 = 7. f(f(2)) = f(7) = 2(7)+3 = 17'},
    {id:'PK-12', question:'Perbandingan x:y = 2:3 dan y:z = 4:5, maka x:z adalah:', options:['A. 8:15','B. 6:10','C. 2:5','D. 4:5','E. 8:12'], answer:'A', explanation:'x:y:z = 8:12:15 (sesuaikan y=12). Maka x:z = 8:15'},
    {id:'PK-13', question:'Kecepatan rata-rata jika pergi 60 km/jam dan pulang 40 km/jam (rute sama) adalah:', options:['A. 48 km/jam','B. 50 km/jam','C. 52 km/jam','D. 46 km/jam','E. 54 km/jam'], answer:'A', explanation:'Rata-rata harmonik: 2/(1/60+1/40) = 2/(5/120) = 48 km/jam'},
    {id:'PK-14', question:'Investasi dengan bunga majemuk 5%/tahun. Modal Rp 1.000.000, total setelah 2 tahun adalah:', options:['A. Rp 1.100.000','B. Rp 1.102.500','C. Rp 1.050.000','D. Rp 1.100.250','E. Rp 1.110.000'], answer:'B', explanation:'1.000.000 × (1,05)² = 1.000.000 × 1,1025 = Rp 1.102.500'},
    {id:'PK-15', question:'Dari 12 siswa, 5 akan dipilih untuk tim debat (urutan tidak diperhatikan). Banyak cara pemilihan adalah:', options:['A. 60','B. 120','C. 792','D. 1200','E. 3024'], answer:'C', explanation:'C(12,5) = 12!/(5!7!) = 792 cara'},
    {id:'PK-16', question:'Sebuah tabung jari-jari 7 cm, tinggi 10 cm. Volume (π=22/7) adalah:', options:['A. 1440 cm³','B. 1540 cm³','C. 1640 cm³','D. 1380 cm³','E. 2140 cm³'], answer:'B', explanation:'V = π×r²×t = (22/7)×49×10 = 22×7×10 = 1540 cm³'},
    {id:'PK-17', question:'15% dari 400 adalah:', options:['A. 40','B. 50','C. 60','D. 70','E. 80'], answer:'C', explanation:'0,15 × 400 = 60'},
    {id:'PK-18', question:'Jika harga A:B = 3:4 dan total A+B = Rp 280.000, harga B adalah:', options:['A. Rp 100.000','B. Rp 120.000','C. Rp 140.000','D. Rp 160.000','E. Rp 180.000'], answer:'D', explanation:'B = (4/7) × 280.000 = Rp 160.000'},
    {id:'PK-19', question:'Data manakah yang memiliki simpangan baku terkecil?', options:['A. 1, 5, 9, 13','B. 5, 5, 5, 5','C. 2, 4, 6, 8','D. 10, 20, 30, 40','E. 1, 1, 9, 9'], answer:'B', explanation:'Data 5,5,5,5 tidak memiliki variasi → simpangan baku = 0 (terkecil)'},
    {id:'PK-20', question:'Sebuah segitiga siku-siku memiliki sisi tegak 9 cm dan 12 cm. Panjang hipotenusa adalah:', options:['A. 13 cm','B. 14 cm','C. 15 cm','D. 16 cm','E. 18 cm'], answer:'C', explanation:'h = √(9²+12²) = √(81+144) = √225 = 15 cm'},
  ],

  LBI: [
    // Passage 1: Media Sosial (LBI1-6)
    {
      id:'LBI-01',
      passage:'Perkembangan teknologi informasi telah membawa perubahan besar dalam kehidupan masyarakat modern. Media sosial, yang awalnya hanya digunakan sebagai platform berbagi konten personal, kini telah berkembang menjadi alat komunikasi, bisnis, bahkan politik. Platform seperti Instagram, Twitter, dan TikTok memiliki pengaruh yang sangat besar terhadap pembentukan opini publik dan perilaku konsumen.\n\nNamun, kemudahan ini tidak datang tanpa risiko. Fenomena hoaks dan disinformasi semakin marak di era digital. Konten yang tidak diverifikasi kebenarannya menyebar dengan cepat dan dapat menimbulkan dampak sosial yang serius, mulai dari perpecahan masyarakat hingga bahaya kesehatan publik. Literasi digital menjadi keterampilan yang sangat penting.\n\nPemerintah dan platform teknologi memiliki tanggung jawab bersama untuk menciptakan ekosistem digital yang sehat. Regulasi yang tepat, ditambah dengan program pendidikan literasi digital, dapat menjadi solusi. Namun pada akhirnya, kesadaran individu dalam bermedia sosial yang bijak tetap menjadi kunci utama.',
      question:'Apa tema utama teks tersebut?',
      options:['A. Perkembangan platform media sosial','B. Dampak negatif hoaks terhadap masyarakat','C. Manfaat dan tantangan perkembangan teknologi informasi','D. Regulasi media sosial di Indonesia','E. Pengaruh TikTok terhadap generasi muda'],
      answer:'C',
      explanation:'Teks membahas manfaat (komunikasi, bisnis, politik) dan tantangan (hoaks, disinformasi) teknologi informasi secara berimbang'
    },
    {
      id:'LBI-02',
      passage:'Perkembangan teknologi informasi telah membawa perubahan besar dalam kehidupan masyarakat modern. Media sosial, yang awalnya hanya digunakan sebagai platform berbagi konten personal, kini telah berkembang menjadi alat komunikasi, bisnis, bahkan politik. Platform seperti Instagram, Twitter, dan TikTok memiliki pengaruh yang sangat besar terhadap pembentukan opini publik dan perilaku konsumen.\n\nNamun, kemudahan ini tidak datang tanpa risiko. Fenomena hoaks dan disinformasi semakin marak di era digital. Konten yang tidak diverifikasi kebenarannya menyebar dengan cepat dan dapat menimbulkan dampak sosial yang serius, mulai dari perpecahan masyarakat hingga bahaya kesehatan publik. Literasi digital menjadi keterampilan yang sangat penting.\n\nPemerintah dan platform teknologi memiliki tanggung jawab bersama untuk menciptakan ekosistem digital yang sehat. Regulasi yang tepat, ditambah dengan program pendidikan literasi digital, dapat menjadi solusi. Namun pada akhirnya, kesadaran individu dalam bermedia sosial yang bijak tetap menjadi kunci utama.',
      question:'Berdasarkan teks, fungsi media sosial yang TIDAK disebutkan adalah:',
      options:['A. Berbagi konten personal','B. Alat komunikasi','C. Platform bisnis','D. Alat politik','E. Media hiburan dan game'],
      answer:'E',
      explanation:'Teks menyebut: berbagi konten personal, komunikasi, bisnis, dan politik. Hiburan/game tidak disebutkan'
    },
    {
      id:'LBI-03',
      passage:'Perkembangan teknologi informasi telah membawa perubahan besar dalam kehidupan masyarakat modern. Media sosial, yang awalnya hanya digunakan sebagai platform berbagi konten personal, kini telah berkembang menjadi alat komunikasi, bisnis, bahkan politik. Platform seperti Instagram, Twitter, dan TikTok memiliki pengaruh yang sangat besar terhadap pembentukan opini publik dan perilaku konsumen.\n\nNamun, kemudahan ini tidak datang tanpa risiko. Fenomena hoaks dan disinformasi semakin marak di era digital. Konten yang tidak diverifikasi kebenarannya menyebar dengan cepat dan dapat menimbulkan dampak sosial yang serius, mulai dari perpecahan masyarakat hingga bahaya kesehatan publik. Literasi digital menjadi keterampilan yang sangat penting.\n\nPemerintah dan platform teknologi memiliki tanggung jawab bersama untuk menciptakan ekosistem digital yang sehat. Regulasi yang tepat, ditambah dengan program pendidikan literasi digital, dapat menjadi solusi. Namun pada akhirnya, kesadaran individu dalam bermedia sosial yang bijak tetap menjadi kunci utama.',
      question:'Makna kata "disinformasi" dalam konteks teks adalah:',
      options:['A. Informasi yang sangat lengkap','B. Informasi yang sengaja dibuat menyesatkan','C. Informasi dari sumber pemerintah','D. Informasi yang tidak menarik','E. Informasi ilmiah yang salah'],
      answer:'B',
      explanation:'Disinformasi = informasi keliru yang sengaja dibuat dan disebarkan untuk menyesatkan orang'
    },
    {
      id:'LBI-04',
      passage:'Perkembangan teknologi informasi telah membawa perubahan besar dalam kehidupan masyarakat modern. Media sosial, yang awalnya hanya digunakan sebagai platform berbagi konten personal, kini telah berkembang menjadi alat komunikasi, bisnis, bahkan politik. Platform seperti Instagram, Twitter, dan TikTok memiliki pengaruh yang sangat besar terhadap pembentukan opini publik dan perilaku konsumen.\n\nNamun, kemudahan ini tidak datang tanpa risiko. Fenomena hoaks dan disinformasi semakin marak di era digital. Konten yang tidak diverifikasi kebenarannya menyebar dengan cepat dan dapat menimbulkan dampak sosial yang serius, mulai dari perpecahan masyarakat hingga bahaya kesehatan publik. Literasi digital menjadi keterampilan yang sangat penting.\n\nPemerintah dan platform teknologi memiliki tanggung jawab bersama untuk menciptakan ekosistem digital yang sehat. Regulasi yang tepat, ditambah dengan program pendidikan literasi digital, dapat menjadi solusi. Namun pada akhirnya, kesadaran individu dalam bermedia sosial yang bijak tetap menjadi kunci utama.',
      question:'Solusi yang ditawarkan teks untuk mengatasi dampak negatif media sosial adalah:',
      options:['A. Menutup semua platform media sosial','B. Regulasi tepat dan program literasi digital','C. Membatasi kebebasan berpendapat','D. Melarang penggunaan media sosial bagi anak-anak','E. Membuat platform media sosial nasional'],
      answer:'B',
      explanation:'Teks menawarkan: "regulasi yang tepat, ditambah program pendidikan literasi digital"'
    },
    {
      id:'LBI-05',
      passage:'Perkembangan teknologi informasi telah membawa perubahan besar dalam kehidupan masyarakat modern. Media sosial, yang awalnya hanya digunakan sebagai platform berbagi konten personal, kini telah berkembang menjadi alat komunikasi, bisnis, bahkan politik. Platform seperti Instagram, Twitter, dan TikTok memiliki pengaruh yang sangat besar terhadap pembentukan opini publik dan perilaku konsumen.\n\nNamun, kemudahan ini tidak datang tanpa risiko. Fenomena hoaks dan disinformasi semakin marak di era digital. Konten yang tidak diverifikasi kebenarannya menyebar dengan cepat dan dapat menimbulkan dampak sosial yang serius, mulai dari perpecahan masyarakat hingga bahaya kesehatan publik. Literasi digital menjadi keterampilan yang sangat penting.\n\nPemerintah dan platform teknologi memiliki tanggung jawab bersama untuk menciptakan ekosistem digital yang sehat. Regulasi yang tepat, ditambah dengan program pendidikan literasi digital, dapat menjadi solusi. Namun pada akhirnya, kesadaran individu dalam bermedia sosial yang bijak tetap menjadi kunci utama.',
      question:'Kata "ekosistem" dalam frasa "ekosistem digital yang sehat" bermakna:',
      options:['A. Lingkungan alam berbasis teknologi','B. Sistem yang harmonis dan seimbang','C. Jaringan internet yang stabil','D. Platform media sosial saja','E. Perangkat elektronik yang ramah lingkungan'],
      answer:'B',
      explanation:'Ekosistem (dalam konteks ini) = sistem yang melibatkan berbagai komponen yang saling berinteraksi secara harmonis'
    },
    {
      id:'LBI-06',
      passage:'Perkembangan teknologi informasi telah membawa perubahan besar dalam kehidupan masyarakat modern. Media sosial, yang awalnya hanya digunakan sebagai platform berbagi konten personal, kini telah berkembang menjadi alat komunikasi, bisnis, bahkan politik. Platform seperti Instagram, Twitter, dan TikTok memiliki pengaruh yang sangat besar terhadap pembentukan opini publik dan perilaku konsumen.\n\nNamun, kemudahan ini tidak datang tanpa risiko. Fenomena hoaks dan disinformasi semakin marak di era digital. Konten yang tidak diverifikasi kebenarannya menyebar dengan cepat dan dapat menimbulkan dampak sosial yang serius, mulai dari perpecahan masyarakat hingga bahaya kesehatan publik. Literasi digital menjadi keterampilan yang sangat penting.\n\nPemerintah dan platform teknologi memiliki tanggung jawab bersama untuk menciptakan ekosistem digital yang sehat. Regulasi yang tepat, ditambah dengan program pendidikan literasi digital, dapat menjadi solusi. Namun pada akhirnya, kesadaran individu dalam bermedia sosial yang bijak tetap menjadi kunci utama.',
      question:'Simpulan yang PALING TEPAT dari teks adalah:',
      options:['A. Teknologi hanya membawa dampak negatif bagi masyarakat','B. Media sosial harus dilarang karena berbahaya','C. Literasi digital dan regulasi adalah kunci ekosistem digital yang sehat','D. Hoaks tidak berbahaya asalkan tidak dipercaya','E. Pemerintah satu-satunya pihak yang bertanggung jawab'],
      answer:'C',
      explanation:'Simpulan teks: kolaborasi antara regulasi, edukasi literasi digital, dan kesadaran individu diperlukan'
    },
    // Passage 2: Terumbu Karang (LBI7-12)
    {
      id:'LBI-07',
      passage:'Indonesia merupakan bagian dari coral triangle (segitiga koral) yang menyimpan lebih dari 75% spesies koral dunia. Namun, berbagai ancaman menyebabkan kerusakan signifikan: pemutihan koral akibat pemanasan global, penangkapan ikan yang merusak (bom dan racun), serta aktivitas wisata bahari yang tidak bertanggung jawab. Diperkirakan lebih dari 30% terumbu karang Indonesia dalam kondisi rusak berat.\n\nUpaya konservasi memerlukan pendekatan multistakeholder. Pemerintah perlu menegakkan regulasi perlindungan laut, masyarakat lokal perlu diberdayakan sebagai penjaga ekosistem, dan wisatawan harus menjaga perilaku ramah lingkungan. Program transplantasi koral dan kawasan perlindungan laut menunjukkan hasil yang menjanjikan di beberapa wilayah.',
      question:'Indonesia dikenal sebagai bagian dari "segitiga koral" karena:',
      options:['A. Wilayah lautnya berbentuk segitiga','B. Menyimpan lebih dari 75% spesies koral dunia','C. Memiliki tiga pulau terbesar','D. Hasil koral terbesarnya di dunia','E. Letaknya di persimpangan tiga samudra'],
      answer:'B',
      explanation:'Teks menyebutkan Indonesia bagian dari coral triangle yang menyimpan >75% spesies koral dunia'
    },
    {
      id:'LBI-08',
      passage:'Indonesia merupakan bagian dari coral triangle (segitiga koral) yang menyimpan lebih dari 75% spesies koral dunia. Namun, berbagai ancaman menyebabkan kerusakan signifikan: pemutihan koral akibat pemanasan global, penangkapan ikan yang merusak (bom dan racun), serta aktivitas wisata bahari yang tidak bertanggung jawab. Diperkirakan lebih dari 30% terumbu karang Indonesia dalam kondisi rusak berat.\n\nUpaya konservasi memerlukan pendekatan multistakeholder. Pemerintah perlu menegakkan regulasi perlindungan laut, masyarakat lokal perlu diberdayakan sebagai penjaga ekosistem, dan wisatawan harus menjaga perilaku ramah lingkungan. Program transplantasi koral dan kawasan perlindungan laut menunjukkan hasil yang menjanjikan di beberapa wilayah.',
      question:'Ancaman yang TIDAK disebutkan terhadap terumbu karang Indonesia adalah:',
      options:['A. Pemutihan koral akibat pemanasan global','B. Penangkapan ikan dengan bom','C. Polusi plastik dari perkotaan','D. Wisata bahari yang tidak bertanggung jawab','E. Penggunaan racun oleh nelayan'],
      answer:'C',
      explanation:'Polusi plastik tidak disebutkan. Ancaman yang disebut: pemutihan koral, bom/racun, wisata tidak bertanggung jawab'
    },
    {
      id:'LBI-09',
      passage:'Indonesia merupakan bagian dari coral triangle (segitiga koral) yang menyimpan lebih dari 75% spesies koral dunia. Namun, berbagai ancaman menyebabkan kerusakan signifikan: pemutihan koral akibat pemanasan global, penangkapan ikan yang merusak (bom dan racun), serta aktivitas wisata bahari yang tidak bertanggung jawab. Diperkirakan lebih dari 30% terumbu karang Indonesia dalam kondisi rusak berat.\n\nUpaya konservasi memerlukan pendekatan multistakeholder. Pemerintah perlu menegakkan regulasi perlindungan laut, masyarakat lokal perlu diberdayakan sebagai penjaga ekosistem, dan wisatawan harus menjaga perilaku ramah lingkungan. Program transplantasi koral dan kawasan perlindungan laut menunjukkan hasil yang menjanjikan di beberapa wilayah.',
      question:'Kata "multistakeholder" dalam teks bermakna:',
      options:['A. Melibatkan pihak asing','B. Melibatkan banyak pemangku kepentingan','C. Dilakukan oleh pemerintah saja','D. Pendekatan berbasis militer','E. Hanya melibatkan nelayan'],
      answer:'B',
      explanation:'Multi = banyak; stakeholder = pemangku kepentingan. Multistakeholder = melibatkan banyak pihak'
    },
    {
      id:'LBI-10',
      passage:'Indonesia merupakan bagian dari coral triangle (segitiga koral) yang menyimpan lebih dari 75% spesies koral dunia. Namun, berbagai ancaman menyebabkan kerusakan signifikan: pemutihan koral akibat pemanasan global, penangkapan ikan yang merusak (bom dan racun), serta aktivitas wisata bahari yang tidak bertanggung jawab. Diperkirakan lebih dari 30% terumbu karang Indonesia dalam kondisi rusak berat.\n\nUpaya konservasi memerlukan pendekatan multistakeholder. Pemerintah perlu menegakkan regulasi perlindungan laut, masyarakat lokal perlu diberdayakan sebagai penjaga ekosistem, dan wisatawan harus menjaga perilaku ramah lingkungan. Program transplantasi koral dan kawasan perlindungan laut menunjukkan hasil yang menjanjikan di beberapa wilayah.',
      question:'Data "lebih dari 30% terumbu karang dalam kondisi rusak berat" menunjukkan:',
      options:['A. Kondisi yang sangat baik','B. Keberhasilan program konservasi','C. Kerusakan signifikan yang memerlukan tindakan segera','D. Kondisi normal ekosistem tropis','E. Masalah yang tidak perlu dikhawatirkan'],
      answer:'C',
      explanation:'30% rusak berat menunjukkan kerusakan yang signifikan dan perlu penanganan segera'
    },
    {
      id:'LBI-11',
      passage:'Indonesia merupakan bagian dari coral triangle (segitiga koral) yang menyimpan lebih dari 75% spesies koral dunia. Namun, berbagai ancaman menyebabkan kerusakan signifikan: pemutihan koral akibat pemanasan global, penangkapan ikan yang merusak (bom dan racun), serta aktivitas wisata bahari yang tidak bertanggung jawab. Diperkirakan lebih dari 30% terumbu karang Indonesia dalam kondisi rusak berat.\n\nUpaya konservasi memerlukan pendekatan multistakeholder. Pemerintah perlu menegakkan regulasi perlindungan laut, masyarakat lokal perlu diberdayakan sebagai penjaga ekosistem, dan wisatawan harus menjaga perilaku ramah lingkungan. Program transplantasi koral dan kawasan perlindungan laut menunjukkan hasil yang menjanjikan di beberapa wilayah.',
      question:'Peran wisatawan dalam konservasi terumbu karang menurut teks adalah:',
      options:['A. Membantu transplantasi koral','B. Menjaga perilaku ramah lingkungan saat berinteraksi','C. Membayar pajak wisata yang tinggi','D. Melaporkan pelanggar aturan kepada polisi','E. Menghindari menyelam sama sekali'],
      answer:'B',
      explanation:'Teks menyebut wisatawan "harus menjaga perilaku ramah lingkungan" sebagai peran mereka'
    },
    {
      id:'LBI-12',
      passage:'Indonesia merupakan bagian dari coral triangle (segitiga koral) yang menyimpan lebih dari 75% spesies koral dunia. Namun, berbagai ancaman menyebabkan kerusakan signifikan: pemutihan koral akibat pemanasan global, penangkapan ikan yang merusak (bom dan racun), serta aktivitas wisata bahari yang tidak bertanggung jawab. Diperkirakan lebih dari 30% terumbu karang Indonesia dalam kondisi rusak berat.\n\nUpaya konservasi memerlukan pendekatan multistakeholder. Pemerintah perlu menegakkan regulasi perlindungan laut, masyarakat lokal perlu diberdayakan sebagai penjaga ekosistem, dan wisatawan harus menjaga perilaku ramah lingkungan. Program transplantasi koral dan kawasan perlindungan laut menunjukkan hasil yang menjanjikan di beberapa wilayah.',
      question:'Prediksi paling logis jika tidak ada upaya konservasi terumbu karang adalah:',
      options:['A. Terumbu karang akan pulih sendiri','B. Spesies koral bermigrasi ke tempat lain','C. Keanekaragaman hayati laut terus menurun','D. Pariwisata bahari akan meningkat','E. Nelayan mendapat hasil tangkapan lebih banyak'],
      answer:'C',
      explanation:'Tanpa konservasi, kerusakan berlanjut sehingga keanekaragaman hayati laut pasti menurun'
    },
    // Passage 3: Pendidikan (LBI13-18)
    {
      id:'LBI-13',
      passage:'Sistem pendidikan Indonesia menghadapi tantangan besar dalam meningkatkan kualitas sumber daya manusia. Meskipun angka melek huruf telah mencapai lebih dari 95%, kualitas pendidikan yang diukur dari hasil tes internasional seperti PISA masih jauh di bawah rata-rata. Berbagai faktor berkontribusi: kesenjangan infrastruktur antara perkotaan dan pedesaan, kualitas guru yang tidak merata, serta relevansi kurikulum yang perlu terus diperbarui.\n\nReformasi pendidikan yang komprehensif menjadi kebutuhan mendesak. Program Merdeka Belajar yang dicanangkan pemerintah merupakan langkah penting menuju pendidikan yang lebih adaptif dan berpusat pada siswa. Namun implementasinya masih menghadapi berbagai tantangan, terutama di daerah terpencil yang memiliki akses terbatas terhadap teknologi dan sumber belajar.',
      question:'Permasalahan utama pendidikan Indonesia berdasarkan teks adalah:',
      options:['A. Angka melek huruf yang sangat rendah','B. Kualitas pendidikan yang belum optimal','C. Tidak adanya kurikulum nasional','D. Biaya pendidikan yang terlalu mahal','E. Kurangnya jumlah sekolah'],
      answer:'B',
      explanation:'Meski melek huruf tinggi, KUALITAS pendidikan (diukur PISA) masih di bawah rata-rata'
    },
    {
      id:'LBI-14',
      passage:'Sistem pendidikan Indonesia menghadapi tantangan besar dalam meningkatkan kualitas sumber daya manusia. Meskipun angka melek huruf telah mencapai lebih dari 95%, kualitas pendidikan yang diukur dari hasil tes internasional seperti PISA masih jauh di bawah rata-rata. Berbagai faktor berkontribusi: kesenjangan infrastruktur antara perkotaan dan pedesaan, kualitas guru yang tidak merata, serta relevansi kurikulum yang perlu terus diperbarui.\n\nReformasi pendidikan yang komprehensif menjadi kebutuhan mendesak. Program Merdeka Belajar yang dicanangkan pemerintah merupakan langkah penting menuju pendidikan yang lebih adaptif dan berpusat pada siswa. Namun implementasinya masih menghadapi berbagai tantangan, terutama di daerah terpencil yang memiliki akses terbatas terhadap teknologi dan sumber belajar.',
      question:'Faktor penyebab rendahnya kualitas pendidikan yang TIDAK disebutkan dalam teks adalah:',
      options:['A. Kesenjangan infrastruktur perkotaan-pedesaan','B. Kualitas guru yang tidak merata','C. Kurikulum yang kurang relevan','D. Rendahnya motivasi belajar siswa','E. Akses terbatas di daerah terpencil'],
      answer:'D',
      explanation:'Motivasi belajar siswa tidak disebutkan dalam teks sebagai faktor penyebab'
    },
    {
      id:'LBI-15',
      passage:'Sistem pendidikan Indonesia menghadapi tantangan besar dalam meningkatkan kualitas sumber daya manusia. Meskipun angka melek huruf telah mencapai lebih dari 95%, kualitas pendidikan yang diukur dari hasil tes internasional seperti PISA masih jauh di bawah rata-rata. Berbagai faktor berkontribusi: kesenjangan infrastruktur antara perkotaan dan pedesaan, kualitas guru yang tidak merata, serta relevansi kurikulum yang perlu terus diperbarui.\n\nReformasi pendidikan yang komprehensif menjadi kebutuhan mendesak. Program Merdeka Belajar yang dicanangkan pemerintah merupakan langkah penting menuju pendidikan yang lebih adaptif dan berpusat pada siswa. Namun implementasinya masih menghadapi berbagai tantangan, terutama di daerah terpencil yang memiliki akses terbatas terhadap teknologi dan sumber belajar.',
      question:'Kata "komprehensif" dalam "reformasi pendidikan yang komprehensif" bermakna:',
      options:['A. Cepat dan darurat','B. Menyeluruh dan mencakup semua aspek','C. Hanya untuk guru','D. Berbasis teknologi','E. Berasal dari negara lain'],
      answer:'B',
      explanation:'Komprehensif = menyeluruh, mencakup semua aspek atau bidang'
    },
    {
      id:'LBI-16',
      passage:'Sistem pendidikan Indonesia menghadapi tantangan besar dalam meningkatkan kualitas sumber daya manusia. Meskipun angka melek huruf telah mencapai lebih dari 95%, kualitas pendidikan yang diukur dari hasil tes internasional seperti PISA masih jauh di bawah rata-rata. Berbagai faktor berkontribusi: kesenjangan infrastruktur antara perkotaan dan pedesaan, kualitas guru yang tidak merata, serta relevansi kurikulum yang perlu terus diperbarui.\n\nReformasi pendidikan yang komprehensif menjadi kebutuhan mendesak. Program Merdeka Belajar yang dicanangkan pemerintah merupakan langkah penting menuju pendidikan yang lebih adaptif dan berpusat pada siswa. Namun implementasinya masih menghadapi berbagai tantangan, terutama di daerah terpencil yang memiliki akses terbatas terhadap teknologi dan sumber belajar.',
      question:'Sikap teks terhadap Program Merdeka Belajar adalah:',
      options:['A. Menolak sepenuhnya','B. Mendukung penuh tanpa catatan','C. Mengapresiasi sebagai langkah penting, namun mengakui tantangan implementasi','D. Menganggapnya tidak efektif','E. Bersikap netral tanpa pendapat'],
      answer:'C',
      explanation:'Teks mengapresiasi ("langkah penting") namun juga menyebut tantangan implementasinya'
    },
    {
      id:'LBI-17',
      passage:'Sistem pendidikan Indonesia menghadapi tantangan besar dalam meningkatkan kualitas sumber daya manusia. Meskipun angka melek huruf telah mencapai lebih dari 95%, kualitas pendidikan yang diukur dari hasil tes internasional seperti PISA masih jauh di bawah rata-rata. Berbagai faktor berkontribusi: kesenjangan infrastruktur antara perkotaan dan pedesaan, kualitas guru yang tidak merata, serta relevansi kurikulum yang perlu terus diperbarui.\n\nReformasi pendidikan yang komprehensif menjadi kebutuhan mendesak. Program Merdeka Belajar yang dicanangkan pemerintah merupakan langkah penting menuju pendidikan yang lebih adaptif dan berpusat pada siswa. Namun implementasinya masih menghadapi berbagai tantangan, terutama di daerah terpencil yang memiliki akses terbatas terhadap teknologi dan sumber belajar.',
      question:'PISA yang disebut dalam teks adalah:',
      options:['A. Program bantuan pemerintah','B. Tes internasional untuk mengukur kualitas pendidikan','C. Organisasi guru internasional','D. Kurikulum pendidikan baru','E. Kota di Italia'],
      answer:'B',
      explanation:'PISA (Programme for International Student Assessment) adalah tes internasional mengukur kemampuan siswa'
    },
    {
      id:'LBI-18',
      passage:'Sistem pendidikan Indonesia menghadapi tantangan besar dalam meningkatkan kualitas sumber daya manusia. Meskipun angka melek huruf telah mencapai lebih dari 95%, kualitas pendidikan yang diukur dari hasil tes internasional seperti PISA masih jauh di bawah rata-rata. Berbagai faktor berkontribusi: kesenjangan infrastruktur antara perkotaan dan pedesaan, kualitas guru yang tidak merata, serta relevansi kurikulum yang perlu terus diperbarui.\n\nReformasi pendidikan yang komprehensif menjadi kebutuhan mendesak. Program Merdeka Belajar yang dicanangkan pemerintah merupakan langkah penting menuju pendidikan yang lebih adaptif dan berpusat pada siswa. Namun implementasinya masih menghadapi berbagai tantangan, terutama di daerah terpencil yang memiliki akses terbatas terhadap teknologi dan sumber belajar.',
      question:'Inferensi yang PALING TEPAT berdasarkan teks adalah:',
      options:['A. Pendidikan Indonesia sudah sempurna','B. Melek huruf tinggi menjamin kualitas pendidikan yang baik','C. Tingginya melek huruf belum tentu mencerminkan kualitas pendidikan yang baik','D. Program Merdeka Belajar sudah berhasil sepenuhnya','E. Daerah perkotaan tidak punya masalah pendidikan'],
      answer:'C',
      explanation:'Teks menunjukkan kontras: melek huruf >95% tapi skor PISA masih rendah — melek huruf ≠ kualitas pendidikan baik'
    },
    // Passage 4: Ekonomi Kreatif (LBI19-24)
    {
      id:'LBI-19',
      passage:'Ekonomi kreatif telah muncul sebagai sektor strategis dalam pembangunan ekonomi Indonesia. Industri kreatif mencakup berbagai subsektor mulai dari kuliner, fashion, kerajinan, hingga aplikasi digital dan game. Pada tahun 2023, kontribusi ekonomi kreatif terhadap PDB nasional mencapai sekitar 7,8%, dengan nilai ekspor mencapai miliaran dolar.\n\nIndonesia memiliki potensi besar berkat kekayaan budaya dan karakter yang unik. Batik, wayang, dan berbagai kesenian tradisional mendapat pengakuan internasional. Di sisi modern, beberapa startup teknologi Indonesia telah mencapai status unicorn. Namun, pengembangan ekosistem pendukung—mulai dari pendanaan, akses pasar, hingga perlindungan kekayaan intelektual—masih perlu ditingkatkan.',
      question:'Kontribusi ekonomi kreatif terhadap PDB nasional pada 2023 adalah:',
      options:['A. 5%','B. 6,8%','C. 7,8%','D. 8,7%','E. 9%'],
      answer:'C',
      explanation:'Teks secara eksplisit menyebutkan: "kontribusi ekonomi kreatif terhadap PDB... sekitar 7,8%"'
    },
    {
      id:'LBI-20',
      passage:'Ekonomi kreatif telah muncul sebagai sektor strategis dalam pembangunan ekonomi Indonesia. Industri kreatif mencakup berbagai subsektor mulai dari kuliner, fashion, kerajinan, hingga aplikasi digital dan game. Pada tahun 2023, kontribusi ekonomi kreatif terhadap PDB nasional mencapai sekitar 7,8%, dengan nilai ekspor mencapai miliaran dolar.\n\nIndonesia memiliki potensi besar berkat kekayaan budaya dan karakter yang unik. Batik, wayang, dan berbagai kesenian tradisional mendapat pengakuan internasional. Di sisi modern, beberapa startup teknologi Indonesia telah mencapai status unicorn. Namun, pengembangan ekosistem pendukung—mulai dari pendanaan, akses pasar, hingga perlindungan kekayaan intelektual—masih perlu ditingkatkan.',
      question:'Subsektor yang TIDAK termasuk ekonomi kreatif berdasarkan teks adalah:',
      options:['A. Kuliner','B. Fashion','C. Pertambangan','D. Aplikasi digital','E. Kerajinan'],
      answer:'C',
      explanation:'Pertambangan tidak disebutkan dalam teks dan bukan bagian dari ekonomi kreatif'
    },
    {
      id:'LBI-21',
      passage:'Ekonomi kreatif telah muncul sebagai sektor strategis dalam pembangunan ekonomi Indonesia. Industri kreatif mencakup berbagai subsektor mulai dari kuliner, fashion, kerajinan, hingga aplikasi digital dan game. Pada tahun 2023, kontribusi ekonomi kreatif terhadap PDB nasional mencapai sekitar 7,8%, dengan nilai ekspor mencapai miliaran dolar.\n\nIndonesia memiliki potensi besar berkat kekayaan budaya dan karakter yang unik. Batik, wayang, dan berbagai kesenian tradisional mendapat pengakuan internasional. Di sisi modern, beberapa startup teknologi Indonesia telah mencapai status unicorn. Namun, pengembangan ekosistem pendukung—mulai dari pendanaan, akses pasar, hingga perlindungan kekayaan intelektual—masih perlu ditingkatkan.',
      question:'Kata "unicorn" dalam konteks teks merujuk pada:',
      options:['A. Perusahaan fiksi','B. Startup dengan valuasi >$1 miliar','C. Hewan mitologi pelambang kreativitas','D. Brand mewah internasional','E. Produk unggulan ekspor'],
      answer:'B',
      explanation:'Unicorn dalam dunia bisnis = startup yang mencapai valuasi lebih dari 1 miliar dolar AS'
    },
    {
      id:'LBI-22',
      passage:'Ekonomi kreatif telah muncul sebagai sektor strategis dalam pembangunan ekonomi Indonesia. Industri kreatif mencakup berbagai subsektor mulai dari kuliner, fashion, kerajinan, hingga aplikasi digital dan game. Pada tahun 2023, kontribusi ekonomi kreatif terhadap PDB nasional mencapai sekitar 7,8%, dengan nilai ekspor mencapai miliaran dolar.\n\nIndonesia memiliki potensi besar berkat kekayaan budaya dan karakter yang unik. Batik, wayang, dan berbagai kesenian tradisional mendapat pengakuan internasional. Di sisi modern, beberapa startup teknologi Indonesia telah mencapai status unicorn. Namun, pengembangan ekosistem pendukung—mulai dari pendanaan, akses pasar, hingga perlindungan kekayaan intelektual—masih perlu ditingkatkan.',
      question:'Kekuatan utama Indonesia dalam ekonomi kreatif menurut teks adalah:',
      options:['A. Teknologi produksi yang canggih','B. Modal investasi yang besar','C. Kekayaan budaya dan karakter yang unik','D. Sumber daya alam yang melimpah','E. Pasar domestik terbesar di dunia'],
      answer:'C',
      explanation:'Teks menyebutkan: "potensi besar berkat kekayaan budaya dan karakter yang unik"'
    },
    {
      id:'LBI-23',
      passage:'Ekonomi kreatif telah muncul sebagai sektor strategis dalam pembangunan ekonomi Indonesia. Industri kreatif mencakup berbagai subsektor mulai dari kuliner, fashion, kerajinan, hingga aplikasi digital dan game. Pada tahun 2023, kontribusi ekonomi kreatif terhadap PDB nasional mencapai sekitar 7,8%, dengan nilai ekspor mencapai miliaran dolar.\n\nIndonesia memiliki potensi besar berkat kekayaan budaya dan karakter yang unik. Batik, wayang, dan berbagai kesenian tradisional mendapat pengakuan internasional. Di sisi modern, beberapa startup teknologi Indonesia telah mencapai status unicorn. Namun, pengembangan ekosistem pendukung—mulai dari pendanaan, akses pasar, hingga perlindungan kekayaan intelektual—masih perlu ditingkatkan.',
      question:'Tantangan pengembangan ekonomi kreatif yang disebutkan teks adalah:',
      options:['A. Kurangnya sumber daya manusia','B. Budaya yang tidak menarik','C. Pendanaan, akses pasar, perlindungan kekayaan intelektual','D. Tidak ada pasar ekspor','E. Persaingan dari sesama ASEAN'],
      answer:'C',
      explanation:'Teks secara eksplisit menyebut: pendanaan, akses pasar, dan perlindungan kekayaan intelektual sebagai tantangan'
    },
    {
      id:'LBI-24',
      passage:'Ekonomi kreatif telah muncul sebagai sektor strategis dalam pembangunan ekonomi Indonesia. Industri kreatif mencakup berbagai subsektor mulai dari kuliner, fashion, kerajinan, hingga aplikasi digital dan game. Pada tahun 2023, kontribusi ekonomi kreatif terhadap PDB nasional mencapai sekitar 7,8%, dengan nilai ekspor mencapai miliaran dolar.\n\nIndonesia memiliki potensi besar berkat kekayaan budaya dan karakter yang unik. Batik, wayang, dan berbagai kesenian tradisional mendapat pengakuan internasional. Di sisi modern, beberapa startup teknologi Indonesia telah mencapai status unicorn. Namun, pengembangan ekosistem pendukung—mulai dari pendanaan, akses pasar, hingga perlindungan kekayaan intelektual—masih perlu ditingkatkan.',
      question:'Simpulan yang paling tepat berdasarkan teks adalah:',
      options:['A. Ekonomi kreatif Indonesia tidak memiliki prospek','B. Indonesia tidak memiliki potensi kreatif','C. Indonesia berpotensi besar namun perlu memperkuat ekosistem pendukung','D. Startup Indonesia tidak mampu bersaing global','E. Pemerintah tidak mendukung ekonomi kreatif'],
      answer:'C',
      explanation:'Teks menunjukkan: potensi besar + kelemahan ekosistem pendukung → perlu diperkuat'
    },
    // Passage 5: Stunting (LBI25-30)
    {
      id:'LBI-25',
      passage:'Stunting—kondisi gagal tumbuh pada anak akibat kekurangan gizi kronis—masih menjadi masalah serius di Indonesia. Data menunjukkan sekitar 21% balita Indonesia mengalami stunting, meskipun angka ini turun signifikan dari 37% pada tahun 2013. Stunting tidak hanya berdampak pada pertumbuhan fisik, tetapi juga mempengaruhi perkembangan kognitif dan potensi produktivitas anak di masa depan.\n\nPenanganan stunting memerlukan intervensi terpadu: perbaikan gizi ibu hamil dan menyusui, pemberian ASI eksklusif, MPASI bergizi, sanitasi dan air bersih, serta akses layanan kesehatan memadai. Pemerintah Indonesia menetapkan target penurunan stunting hingga 14% pada tahun 2024 sebagai prioritas nasional.',
      question:'Stunting didefinisikan dalam teks sebagai:',
      options:['A. Kekurangan vitamin pada anak sekolah','B. Kondisi gagal tumbuh akibat kekurangan gizi kronis','C. Penyakit menular pada balita','D. Gangguan imunitas pada anak','E. Kelebihan berat badan pada anak'],
      answer:'B',
      explanation:'Teks mendefinisikan: "stunting—kondisi gagal tumbuh pada anak akibat kekurangan gizi kronis"'
    },
    {
      id:'LBI-26',
      passage:'Stunting—kondisi gagal tumbuh pada anak akibat kekurangan gizi kronis—masih menjadi masalah serius di Indonesia. Data menunjukkan sekitar 21% balita Indonesia mengalami stunting, meskipun angka ini turun signifikan dari 37% pada tahun 2013. Stunting tidak hanya berdampak pada pertumbuhan fisik, tetapi juga mempengaruhi perkembangan kognitif dan potensi produktivitas anak di masa depan.\n\nPenanganan stunting memerlukan intervensi terpadu: perbaikan gizi ibu hamil dan menyusui, pemberian ASI eksklusif, MPASI bergizi, sanitasi dan air bersih, serta akses layanan kesehatan memadai. Pemerintah Indonesia menetapkan target penurunan stunting hingga 14% pada tahun 2024 sebagai prioritas nasional.',
      question:'Perubahan angka stunting dari 2013 ke 2023 menunjukkan:',
      options:['A. Tidak ada perubahan','B. Peningkatan yang mengkhawatirkan dari 21% ke 37%','C. Penurunan yang signifikan dari 37% ke 21%','D. Peningkatan dari 14% ke 37%','E. Stagnansi di angka 21%'],
      answer:'C',
      explanation:'Teks menyebut turun dari 37% (2013) ke 21% (2023) — penurunan signifikan 16 poin persentase'
    },
    {
      id:'LBI-27',
      passage:'Stunting—kondisi gagal tumbuh pada anak akibat kekurangan gizi kronis—masih menjadi masalah serius di Indonesia. Data menunjukkan sekitar 21% balita Indonesia mengalami stunting, meskipun angka ini turun signifikan dari 37% pada tahun 2013. Stunting tidak hanya berdampak pada pertumbuhan fisik, tetapi juga mempengaruhi perkembangan kognitif dan potensi produktivitas anak di masa depan.\n\nPenanganan stunting memerlukan intervensi terpadu: perbaikan gizi ibu hamil dan menyusui, pemberian ASI eksklusif, MPASI bergizi, sanitasi dan air bersih, serta akses layanan kesehatan memadai. Pemerintah Indonesia menetapkan target penurunan stunting hingga 14% pada tahun 2024 sebagai prioritas nasional.',
      question:'Dampak stunting yang disebutkan dalam teks mencakup:',
      options:['A. Hanya pertumbuhan fisik','B. Pertumbuhan fisik, perkembangan kognitif, dan potensi produktivitas','C. Hanya perkembangan kognitif','D. Masalah sosial dan ekonomi jangka pendek','E. Gangguan emosional saja'],
      answer:'B',
      explanation:'Teks menyebut dampak: pertumbuhan fisik, perkembangan kognitif, dan potensi produktivitas masa depan'
    },
    {
      id:'LBI-28',
      passage:'Stunting—kondisi gagal tumbuh pada anak akibat kekurangan gizi kronis—masih menjadi masalah serius di Indonesia. Data menunjukkan sekitar 21% balita Indonesia mengalami stunting, meskipun angka ini turun signifikan dari 37% pada tahun 2013. Stunting tidak hanya berdampak pada pertumbuhan fisik, tetapi juga mempengaruhi perkembangan kognitif dan potensi produktivitas anak di masa depan.\n\nPenanganan stunting memerlukan intervensi terpadu: perbaikan gizi ibu hamil dan menyusui, pemberian ASI eksklusif, MPASI bergizi, sanitasi dan air bersih, serta akses layanan kesehatan memadai. Pemerintah Indonesia menetapkan target penurunan stunting hingga 14% pada tahun 2024 sebagai prioritas nasional.',
      question:'Kata "intervensi" dalam "intervensi terpadu" bermakna:',
      options:['A. Operasi medis yang mahal','B. Tindakan terkoordinasi untuk mengatasi masalah','C. Penelitian ilmiah jangka panjang','D. Kebijakan pemerintah yang ketat','E. Larangan konsumsi makanan tertentu'],
      answer:'B',
      explanation:'Intervensi = tindakan/campur tangan yang terencana untuk mengatasi atau mencegah masalah'
    },
    {
      id:'LBI-29',
      passage:'Stunting—kondisi gagal tumbuh pada anak akibat kekurangan gizi kronis—masih menjadi masalah serius di Indonesia. Data menunjukkan sekitar 21% balita Indonesia mengalami stunting, meskipun angka ini turun signifikan dari 37% pada tahun 2013. Stunting tidak hanya berdampak pada pertumbuhan fisik, tetapi juga mempengaruhi perkembangan kognitif dan potensi produktivitas anak di masa depan.\n\nPenanganan stunting memerlukan intervensi terpadu: perbaikan gizi ibu hamil dan menyusui, pemberian ASI eksklusif, MPASI bergizi, sanitasi dan air bersih, serta akses layanan kesehatan memadai. Pemerintah Indonesia menetapkan target penurunan stunting hingga 14% pada tahun 2024 sebagai prioritas nasional.',
      question:'Yang BUKAN termasuk upaya penanganan stunting menurut teks adalah:',
      options:['A. Perbaikan gizi ibu hamil','B. Pemberian ASI eksklusif','C. Sanitasi dan air bersih','D. Pemberian obat-obatan mahal kepada balita','E. Akses layanan kesehatan'],
      answer:'D',
      explanation:'Pemberian obat mahal tidak disebutkan. Teks fokus pada gizi, ASI, MPASI, sanitasi, dan layanan kesehatan'
    },
    {
      id:'LBI-30',
      passage:'Stunting—kondisi gagal tumbuh pada anak akibat kekurangan gizi kronis—masih menjadi masalah serius di Indonesia. Data menunjukkan sekitar 21% balita Indonesia mengalami stunting, meskipun angka ini turun signifikan dari 37% pada tahun 2013. Stunting tidak hanya berdampak pada pertumbuhan fisik, tetapi juga mempengaruhi perkembangan kognitif dan potensi produktivitas anak di masa depan.\n\nPenanganan stunting memerlukan intervensi terpadu: perbaikan gizi ibu hamil dan menyusui, pemberian ASI eksklusif, MPASI bergizi, sanitasi dan air bersih, serta akses layanan kesehatan memadai. Pemerintah Indonesia menetapkan target penurunan stunting hingga 14% pada tahun 2024 sebagai prioritas nasional.',
      question:'Target pemerintah Indonesia dalam penurunan stunting pada tahun 2024 adalah:',
      options:['A. 10%','B. 12%','C. 14%','D. 16%','E. 18%'],
      answer:'C',
      explanation:'Teks menyebutkan: "target penurunan stunting hingga 14% pada tahun 2024"'
    },
  ],

  LBE: [
    // Passage 1: AI (LBE1-5)
    {
      id:'LBE-01',
      passage:'Artificial Intelligence (AI) is rapidly transforming various sectors of the economy, from healthcare to transportation. Machine learning algorithms can now diagnose diseases with accuracy comparable to experienced physicians, while autonomous vehicles are becoming increasingly viable. However, this technological revolution also raises significant ethical questions about privacy, job displacement, and algorithmic bias.\n\nThe pace of AI development has outstripped our ability to regulate it effectively. Policymakers around the world are struggling to create frameworks that promote innovation while protecting citizens from potential harms. Some experts argue for a moratorium on the most advanced AI systems until adequate safety measures are in place.',
      question:'What is the main topic of the passage?',
      options:['A. Healthcare innovations','B. The impact and challenges of AI development','C. Autonomous vehicles technology','D. Job market trends globally','E. Government AI regulations'],
      answer:'B',
      explanation:'The passage discusses both the transformative impact and the ethical/regulatory challenges of AI'
    },
    {
      id:'LBE-02',
      passage:'Artificial Intelligence (AI) is rapidly transforming various sectors of the economy, from healthcare to transportation. Machine learning algorithms can now diagnose diseases with accuracy comparable to experienced physicians, while autonomous vehicles are becoming increasingly viable. However, this technological revolution also raises significant ethical questions about privacy, job displacement, and algorithmic bias.\n\nThe pace of AI development has outstripped our ability to regulate it effectively. Policymakers around the world are struggling to create frameworks that promote innovation while protecting citizens from potential harms. Some experts argue for a moratorium on the most advanced AI systems until adequate safety measures are in place.',
      question:'According to the passage, what ethical concerns are raised about AI?',
      options:['A. High cost of AI development','B. Lack of scientific research','C. Privacy, job displacement, and algorithmic bias','D. Slow technological development','E. Competition between countries'],
      answer:'C',
      explanation:'The passage explicitly mentions: "privacy, job displacement, and algorithmic bias" as ethical concerns'
    },
    {
      id:'LBE-03',
      passage:'Artificial Intelligence (AI) is rapidly transforming various sectors of the economy, from healthcare to transportation. Machine learning algorithms can now diagnose diseases with accuracy comparable to experienced physicians, while autonomous vehicles are becoming increasingly viable. However, this technological revolution also raises significant ethical questions about privacy, job displacement, and algorithmic bias.\n\nThe pace of AI development has outstripped our ability to regulate it effectively. Policymakers around the world are struggling to create frameworks that promote innovation while protecting citizens from potential harms. Some experts argue for a moratorium on the most advanced AI systems until adequate safety measures are in place.',
      question:'The word "moratorium" in the last sentence means:',
      options:['A. A temporary suspension or ban','B. A new type of AI system','C. A scientific research program','D. A government agency','E. A financial penalty'],
      answer:'A',
      explanation:'"Moratorium" = a temporary prohibition or suspension of an activity'
    },
    {
      id:'LBE-04',
      passage:'Artificial Intelligence (AI) is rapidly transforming various sectors of the economy, from healthcare to transportation. Machine learning algorithms can now diagnose diseases with accuracy comparable to experienced physicians, while autonomous vehicles are becoming increasingly viable. However, this technological revolution also raises significant ethical questions about privacy, job displacement, and algorithmic bias.\n\nThe pace of AI development has outstripped our ability to regulate it effectively. Policymakers around the world are struggling to create frameworks that promote innovation while protecting citizens from potential harms. Some experts argue for a moratorium on the most advanced AI systems until adequate safety measures are in place.',
      question:'What does the passage suggest about current AI regulation?',
      options:['A. It is very effective','B. It perfectly keeps pace with AI development','C. It has fallen behind AI\'s rapid development','D. It is overly strict','E. It does not exist at all'],
      answer:'C',
      explanation:'"The pace of AI development has OUTSTRIPPED our ability to regulate it" = regulation lags behind'
    },
    {
      id:'LBE-05',
      passage:'Artificial Intelligence (AI) is rapidly transforming various sectors of the economy, from healthcare to transportation. Machine learning algorithms can now diagnose diseases with accuracy comparable to experienced physicians, while autonomous vehicles are becoming increasingly viable. However, this technological revolution also raises significant ethical questions about privacy, job displacement, and algorithmic bias.\n\nThe pace of AI development has outstripped our ability to regulate it effectively. Policymakers around the world are struggling to create frameworks that promote innovation while protecting citizens from potential harms. Some experts argue for a moratorium on the most advanced AI systems until adequate safety measures are in place.',
      question:'Which inference can best be made from the passage?',
      options:['A. AI will solve all human problems','B. AI development should be stopped permanently','C. Balancing innovation and safety in AI is a complex challenge','D. All physicians will soon be replaced by AI','E. Autonomous vehicles are already widely used everywhere'],
      answer:'C',
      explanation:'The passage shows both benefits and risks, suggesting that balancing innovation with safety is complex'
    },
    // Passage 2: Climate (LBE6-10)
    {
      id:'LBE-06',
      passage:'Climate change poses an existential threat to many island nations in the Pacific Ocean. Rising sea levels, caused by melting polar ice and thermal expansion of seawater, threaten to submerge low-lying islands entirely within this century. Countries like Tuvalu and Kiribati may become uninhabitable, forcing their populations to seek refuge elsewhere—creating what could become the first climate refugees.\n\nThese nations contribute minimally to global greenhouse gas emissions, yet they bear the greatest consequences. This injustice has become a central argument in international climate negotiations, with small island developing states (SIDS) advocating for more ambitious emission reduction targets and greater financial support for adaptation measures.',
      question:'What is the primary threat to Pacific island nations?',
      options:['A. Economic recession','B. Political instability','C. Rising sea levels due to climate change','D. Overpopulation','E. Earthquake and tsunami'],
      answer:'C',
      explanation:'The passage focuses on rising sea levels from climate change as the existential threat'
    },
    {
      id:'LBE-07',
      passage:'Climate change poses an existential threat to many island nations in the Pacific Ocean. Rising sea levels, caused by melting polar ice and thermal expansion of seawater, threaten to submerge low-lying islands entirely within this century. Countries like Tuvalu and Kiribati may become uninhabitable, forcing their populations to seek refuge elsewhere—creating what could become the first climate refugees.\n\nThese nations contribute minimally to global greenhouse gas emissions, yet they bear the greatest consequences. This injustice has become a central argument in international climate negotiations, with small island developing states (SIDS) advocating for more ambitious emission reduction targets and greater financial support for adaptation measures.',
      question:'The term "climate refugees" refers to:',
      options:['A. Scientists studying climate change','B. People forced to leave homes due to climate-related disasters','C. Environmentalists in protest','D. Government climate officials','E. People who enjoy tropical weather'],
      answer:'B',
      explanation:'"Climate refugees" = people displaced from their homes due to climate change impacts'
    },
    {
      id:'LBE-08',
      passage:'Climate change poses an existential threat to many island nations in the Pacific Ocean. Rising sea levels, caused by melting polar ice and thermal expansion of seawater, threaten to submerge low-lying islands entirely within this century. Countries like Tuvalu and Kiribati may become uninhabitable, forcing their populations to seek refuge elsewhere—creating what could become the first climate refugees.\n\nThese nations contribute minimally to global greenhouse gas emissions, yet they bear the greatest consequences. This injustice has become a central argument in international climate negotiations, with small island developing states (SIDS) advocating for more ambitious emission reduction targets and greater financial support for adaptation measures.',
      question:'What makes the situation of island nations unjust?',
      options:['A. They get too much international aid','B. They contribute little to emissions but face the greatest consequences','C. They have more natural resources','D. They don\'t participate in negotiations','E. They refuse to reduce emissions'],
      answer:'B',
      explanation:'Island nations contribute minimally to emissions (cause) but suffer most from climate change (consequence)'
    },
    {
      id:'LBE-09',
      passage:'Climate change poses an existential threat to many island nations in the Pacific Ocean. Rising sea levels, caused by melting polar ice and thermal expansion of seawater, threaten to submerge low-lying islands entirely within this century. Countries like Tuvalu and Kiribati may become uninhabitable, forcing their populations to seek refuge elsewhere—creating what could become the first climate refugees.\n\nThese nations contribute minimally to global greenhouse gas emissions, yet they bear the greatest consequences. This injustice has become a central argument in international climate negotiations, with small island developing states (SIDS) advocating for more ambitious emission reduction targets and greater financial support for adaptation measures.',
      question:'The word "existential" in "existential threat" means:',
      options:['A. Minor inconvenience','B. Temporary setback','C. Threat to the very existence/survival','D. Economic burden','E. Historical challenge from the past'],
      answer:'C',
      explanation:'"Existential threat" = a threat that endangers the very existence or survival of something'
    },
    {
      id:'LBE-10',
      passage:'Climate change poses an existential threat to many island nations in the Pacific Ocean. Rising sea levels, caused by melting polar ice and thermal expansion of seawater, threaten to submerge low-lying islands entirely within this century. Countries like Tuvalu and Kiribati may become uninhabitable, forcing their populations to seek refuge elsewhere—creating what could become the first climate refugees.\n\nThese nations contribute minimally to global greenhouse gas emissions, yet they bear the greatest consequences. This injustice has become a central argument in international climate negotiations, with small island developing states (SIDS) advocating for more ambitious emission reduction targets and greater financial support for adaptation measures.',
      question:'What are SIDS advocating for in climate negotiations?',
      options:['A. Reducing their own emission targets','B. Building higher sea walls','C. More ambitious emission targets and greater financial support','D. Relocating all island populations immediately','E. Developing nuclear energy alternatives'],
      answer:'C',
      explanation:'Passage states SIDS advocate for "more ambitious emission reduction targets and greater financial support"'
    },
    // Passage 3: Sustainable Development (LBE11-15)
    {
      id:'LBE-11',
      passage:'The concept of sustainable development aims to meet the needs of the present without compromising the ability of future generations to meet their own needs. This principle, established in the 1987 Brundtland Report, has become a cornerstone of global policy. The United Nations\' 17 Sustainable Development Goals (SDGs), adopted in 2015, provide a comprehensive framework for addressing poverty, inequality, environmental degradation, and climate change.\n\nProgress toward the SDGs has been uneven. While some goals, like reducing extreme poverty, have seen remarkable advancement, others like clean water access and quality education remain elusive for billions of people. The COVID-19 pandemic further set back progress, particularly in low-income countries.',
      question:'What is sustainable development?',
      options:['A. Economic growth without any costs','B. Meeting present needs without compromising future generations\' ability','C. Technology-focused development only','D. Reducing all government spending','E. Increasing export volumes'],
      answer:'B',
      explanation:'The passage defines it: "meet needs of present without compromising ability of future generations to meet their own needs"'
    },
    {
      id:'LBE-12',
      passage:'The concept of sustainable development aims to meet the needs of the present without compromising the ability of future generations to meet their own needs. This principle, established in the 1987 Brundtland Report, has become a cornerstone of global policy. The United Nations\' 17 Sustainable Development Goals (SDGs), adopted in 2015, provide a comprehensive framework for addressing poverty, inequality, environmental degradation, and climate change.\n\nProgress toward the SDGs has been uneven. While some goals, like reducing extreme poverty, have seen remarkable advancement, others like clean water access and quality education remain elusive for billions of people. The COVID-19 pandemic further set back progress, particularly in low-income countries.',
      question:'When was the sustainable development principle defined in the Brundtland Report?',
      options:['A. 1975','B. 1987','C. 1995','D. 2000','E. 2015'],
      answer:'B',
      explanation:'The passage states: "established in the 1987 Brundtland Report"'
    },
    {
      id:'LBE-13',
      passage:'The concept of sustainable development aims to meet the needs of the present without compromising the ability of future generations to meet their own needs. This principle, established in the 1987 Brundtland Report, has become a cornerstone of global policy. The United Nations\' 17 Sustainable Development Goals (SDGs), adopted in 2015, provide a comprehensive framework for addressing poverty, inequality, environmental degradation, and climate change.\n\nProgress toward the SDGs has been uneven. While some goals, like reducing extreme poverty, have seen remarkable advancement, others like clean water access and quality education remain elusive for billions of people. The COVID-19 pandemic further set back progress, particularly in low-income countries.',
      question:'How many Sustainable Development Goals (SDGs) does the UN have?',
      options:['A. 13','B. 15','C. 17','D. 19','E. 21'],
      answer:'C',
      explanation:'The passage explicitly states: "The United Nations\' 17 Sustainable Development Goals"'
    },
    {
      id:'LBE-14',
      passage:'The concept of sustainable development aims to meet the needs of the present without compromising the ability of future generations to meet their own needs. This principle, established in the 1987 Brundtland Report, has become a cornerstone of global policy. The United Nations\' 17 Sustainable Development Goals (SDGs), adopted in 2015, provide a comprehensive framework for addressing poverty, inequality, environmental degradation, and climate change.\n\nProgress toward the SDGs has been uneven. While some goals, like reducing extreme poverty, have seen remarkable advancement, others like clean water access and quality education remain elusive for billions of people. The COVID-19 pandemic further set back progress, particularly in low-income countries.',
      question:'What does the passage say about progress toward the SDGs?',
      options:['A. Progress has been uniform and consistently positive','B. There has been absolutely no progress','C. Progress is uneven—some goals advancing, others lagging','D. All goals have already been achieved','E. COVID-19 had no impact on SDG progress'],
      answer:'C',
      explanation:'"Progress has been uneven"—some goals advanced, others (water, education) remain elusive'
    },
    {
      id:'LBE-15',
      passage:'The concept of sustainable development aims to meet the needs of the present without compromising the ability of future generations to meet their own needs. This principle, established in the 1987 Brundtland Report, has become a cornerstone of global policy. The United Nations\' 17 Sustainable Development Goals (SDGs), adopted in 2015, provide a comprehensive framework for addressing poverty, inequality, environmental degradation, and climate change.\n\nProgress toward the SDGs has been uneven. While some goals, like reducing extreme poverty, have seen remarkable advancement, others like clean water access and quality education remain elusive for billions of people. The COVID-19 pandemic further set back progress, particularly in low-income countries.',
      question:'The word "elusive" in the passage means:',
      options:['A. Easily and quickly achieved','B. Very expensive to implement','C. Difficult to achieve or attain','D. Very popular worldwide','E. Scientifically proven to work'],
      answer:'C',
      explanation:'"Elusive" = difficult to find, achieve, or attain; hard to grasp'
    },
    // Passage 4: Microplastics (LBE16-20)
    {
      id:'LBE-16',
      passage:'Microplastics—tiny plastic particles smaller than 5mm—have infiltrated virtually every ecosystem on Earth, from the deepest ocean trenches to the highest mountain peaks. These particles originate from the breakdown of larger plastic waste and are also intentionally added to cosmetics as microbeads. Their ubiquitous presence raises serious concerns about human health and wildlife.\n\nResearch has found microplastics in human blood, lungs, and even placenta, though long-term health implications remain largely unknown. Marine wildlife frequently ingests microplastics, often mistaking them for food, leading to starvation, toxic exposure, and reproductive issues. Addressing this crisis requires reducing plastic production, improving waste management, and developing biodegradable alternatives.',
      question:'What are microplastics?',
      options:['A. Microscopic marine organisms','B. Tiny plastic particles smaller than 5mm','C. Chemical water pollutants','D. Radioactive particles in soil','E. Microscopic fragments of glass'],
      answer:'B',
      explanation:'The passage defines: "Microplastics—tiny plastic particles smaller than 5mm"'
    },
    {
      id:'LBE-17',
      passage:'Microplastics—tiny plastic particles smaller than 5mm—have infiltrated virtually every ecosystem on Earth, from the deepest ocean trenches to the highest mountain peaks. These particles originate from the breakdown of larger plastic waste and are also intentionally added to cosmetics as microbeads. Their ubiquitous presence raises serious concerns about human health and wildlife.\n\nResearch has found microplastics in human blood, lungs, and even placenta, though long-term health implications remain largely unknown. Marine wildlife frequently ingests microplastics, often mistaking them for food, leading to starvation, toxic exposure, and reproductive issues. Addressing this crisis requires reducing plastic production, improving waste management, and developing biodegradable alternatives.',
      question:'Where have microplastics been found in the human body?',
      options:['A. Only in the digestive system','B. Only on the skin surface','C. In blood, lungs, and placenta','D. Only in water we consume','E. In hair and nails only'],
      answer:'C',
      explanation:'Passage states: "found microplastics in human blood, lungs, and even placenta"'
    },
    {
      id:'LBE-18',
      passage:'Microplastics—tiny plastic particles smaller than 5mm—have infiltrated virtually every ecosystem on Earth, from the deepest ocean trenches to the highest mountain peaks. These particles originate from the breakdown of larger plastic waste and are also intentionally added to cosmetics as microbeads. Their ubiquitous presence raises serious concerns about human health and wildlife.\n\nResearch has found microplastics in human blood, lungs, and even placenta, though long-term health implications remain largely unknown. Marine wildlife frequently ingests microplastics, often mistaking them for food, leading to starvation, toxic exposure, and reproductive issues. Addressing this crisis requires reducing plastic production, improving waste management, and developing biodegradable alternatives.',
      question:'The word "ubiquitous" in the passage means:',
      options:['A. Rare and unusual','B. Present everywhere','C. Extremely dangerous','D. Microscopic in size','E. Completely biodegradable'],
      answer:'B',
      explanation:'"Ubiquitous" = present, appearing, or found everywhere; omnipresent'
    },
    {
      id:'LBE-19',
      passage:'Microplastics—tiny plastic particles smaller than 5mm—have infiltrated virtually every ecosystem on Earth, from the deepest ocean trenches to the highest mountain peaks. These particles originate from the breakdown of larger plastic waste and are also intentionally added to cosmetics as microbeads. Their ubiquitous presence raises serious concerns about human health and wildlife.\n\nResearch has found microplastics in human blood, lungs, and even placenta, though long-term health implications remain largely unknown. Marine wildlife frequently ingests microplastics, often mistaking them for food, leading to starvation, toxic exposure, and reproductive issues. Addressing this crisis requires reducing plastic production, improving waste management, and developing biodegradable alternatives.',
      question:'How do marine wildlife get affected by microplastics?',
      options:['A. They eat them intentionally for minerals','B. They absorb them through gills alone','C. They ingest them, mistaking them for food','D. They use them to build nests','E. They are not significantly affected'],
      answer:'C',
      explanation:'Passage states wildlife "ingests microplastics, often mistaking them for food"'
    },
    {
      id:'LBE-20',
      passage:'Microplastics—tiny plastic particles smaller than 5mm—have infiltrated virtually every ecosystem on Earth, from the deepest ocean trenches to the highest mountain peaks. These particles originate from the breakdown of larger plastic waste and are also intentionally added to cosmetics as microbeads. Their ubiquitous presence raises serious concerns about human health and wildlife.\n\nResearch has found microplastics in human blood, lungs, and even placenta, though long-term health implications remain largely unknown. Marine wildlife frequently ingests microplastics, often mistaking them for food, leading to starvation, toxic exposure, and reproductive issues. Addressing this crisis requires reducing plastic production, improving waste management, and developing biodegradable alternatives.',
      question:'What solution is NOT mentioned in the passage to address microplastics?',
      options:['A. Reducing plastic production','B. Improving waste management','C. Banning all plastic products immediately','D. Developing biodegradable alternatives','E. All options are mentioned'],
      answer:'C',
      explanation:'"Banning all plastics" is not mentioned. The passage: reducing production, waste management, biodegradable alternatives'
    },
  ],

  PM: [
    {id:'PM-01', question:'Nilai x yang memenuhi 3x − 7 = 2x + 5 adalah:', options:['A. 10','B. 11','C. 12','D. 13','E. 14'], answer:'C', explanation:'3x−2x = 5+7 → x = 12'},
    {id:'PM-02', question:'Penyelesaian dari x² − 5x + 6 = 0 adalah:', options:['A. x=1 atau x=6','B. x=2 atau x=3','C. x=−2 atau x=−3','D. x=2 atau x=−3','E. x=−2 atau x=3'], answer:'B', explanation:'(x−2)(x−3)=0 → x=2 atau x=3'},
    {id:'PM-03', question:'Luas segitiga dengan alas 8 cm dan tinggi 6 cm adalah:', options:['A. 24 cm²','B. 48 cm²','C. 12 cm²','D. 36 cm²','E. 32 cm²'], answer:'A', explanation:'L = ½ × 8 × 6 = 24 cm²'},
    {id:'PM-04', question:'Nilai dari log₂ 8 adalah:', options:['A. 2','B. 3','C. 4','D. 1','E. 6'], answer:'B', explanation:'2^x = 8 = 2³ → log₂8 = 3'},
    {id:'PM-05', question:'Nilai sin 30° adalah:', options:['A. √3/2','B. 1/2','C. √2/2','D. 1','E. √3/3'], answer:'B', explanation:'sin 30° = 1/2 (nilai trigonometri standar)'},
    {id:'PM-06', question:'Suku ke-10 dari deret aritmetika dengan suku pertama 5 dan beda 3 adalah:', options:['A. 27','B. 30','C. 32','D. 35','E. 38'], answer:'C', explanation:'a₁₀ = 5 + (10−1)×3 = 5+27 = 32'},
    {id:'PM-07', question:'Nilai 2^x = 32, maka x adalah:', options:['A. 3','B. 4','C. 5','D. 6','E. 7'], answer:'C', explanation:'2^5 = 32 → x = 5'},
    {id:'PM-08', question:'Peluang mendapatkan angka genap saat melempar satu dadu adalah:', options:['A. 1/6','B. 1/3','C. 1/2','D. 2/3','E. 5/6'], answer:'C', explanation:'Angka genap: {2,4,6} = 3 dari 6 sisi → P = 3/6 = 1/2'},
    {id:'PM-09', question:'Nilai dari 5! (5 faktorial) adalah:', options:['A. 20','B. 60','C. 100','D. 120','E. 240'], answer:'D', explanation:'5! = 5×4×3×2×1 = 120'},
    {id:'PM-10', question:'Persamaan garis melalui titik (2, 3) dengan gradien 2 adalah:', options:['A. y = 2x + 1','B. y = 2x − 1','C. y = x + 1','D. y = 2x + 3','E. y = −2x + 7'], answer:'B', explanation:'y − 3 = 2(x − 2) → y = 2x − 4 + 3 = 2x − 1'},
    {id:'PM-11', question:'Jarak antara titik A(3, 4) dan titik asal O(0, 0) adalah:', options:['A. 3','B. 4','C. 5','D. 6','E. 7'], answer:'C', explanation:'d = √(3²+4²) = √(9+16) = √25 = 5'},
    {id:'PM-12', question:'Suku ke-8 dari deret geometri 2, 6, 18, ... adalah:', options:['A. 2.187','B. 4.374','C. 6.561','D. 1.458','E. 13.122'], answer:'B', explanation:'r=3, a₈ = 2×3⁷ = 2×2.187 = 4.374'},
    {id:'PM-13', question:'Nilai fungsi minimum f(x) = x² + 2x − 3 adalah:', options:['A. −4','B. −3','C. −2','D. −1','E. 0'], answer:'A', explanation:'x_min = −b/2a = −1. f(−1) = 1−2−3 = −4'},
    {id:'PM-14', question:'Peluang mengambil kartu As dari 52 kartu bridge adalah:', options:['A. 1/52','B. 1/26','C. 1/13','D. 4/13','E. 1/4'], answer:'C', explanation:'Ada 4 kartu As dari 52 kartu → P = 4/52 = 1/13'},
    {id:'PM-15', question:'Sistem persamaan: 2x + y = 8 dan x − y = 1. Nilai x adalah:', options:['A. 2','B. 3','C. 4','D. 5','E. 1'], answer:'B', explanation:'Jumlahkan: 3x = 9 → x = 3. Substitusi: y = 8−6 = 2'},
    {id:'PM-16', question:'Nilai dari ∫₁² 2x dx adalah:', options:['A. 2','B. 3','C. 4','D. 6','E. 1'], answer:'B', explanation:'∫2x dx = x². Nilai dari x=1 ke x=2: 4−1 = 3'},
    {id:'PM-17', question:'Jumlah deret geometri tak hingga 1 + 1/2 + 1/4 + ... adalah:', options:['A. 1','B. 1,5','C. 2','D. 2,5','E. 3'], answer:'C', explanation:'S∞ = a/(1−r) = 1/(1−0,5) = 1/0,5 = 2'},
    {id:'PM-18', question:'Determinan matriks [[2,3],[1,4]] adalah:', options:['A. 3','B. 4','C. 5','D. 6','E. 7'], answer:'C', explanation:'det = (2×4)−(3×1) = 8−3 = 5'},
    {id:'PM-19', question:'Dalam sebuah kelas, 60% siswa perempuan. Jika ada 18 siswa perempuan, total siswa adalah:', options:['A. 25','B. 28','C. 30','D. 32','E. 36'], answer:'C', explanation:'Total = 18/0,6 = 30 siswa'},
    {id:'PM-20', question:'Besar sudut interior sebuah segi lima beraturan adalah:', options:['A. 90°','B. 100°','C. 108°','D. 120°','E. 135°'], answer:'C', explanation:'Sudut interior = (n−2)×180°/n = (5−2)×180°/5 = 540°/5 = 108°'},
    {id:'PM-21', question:'Nilai dari log₁₀ 1000 adalah:', options:['A. 2','B. 3','C. 4','D. 100','E. 10'], answer:'B', explanation:'10³ = 1000 → log₁₀1000 = 3'},
    {id:'PM-22', question:'Jika cos θ = 3/5, nilai sin θ (θ di kuadran I) adalah:', options:['A. 4/5','B. 3/4','C. 5/4','D. 3/5','E. 2/5'], answer:'A', explanation:'sin²θ = 1 − 9/25 = 16/25 → sin θ = 4/5'},
    {id:'PM-23', question:'Nilai limit lim(x→2) (x² − 4)/(x − 2) adalah:', options:['A. 2','B. 3','C. 4','D. 0','E. Tidak ada'], answer:'C', explanation:'Faktorkan: (x+2)(x−2)/(x−2) → lim = x+2 = 4'},
    {id:'PM-24', question:'Jika f(x) = 3x + 2, maka f⁻¹(x) adalah:', options:['A. (x+2)/3','B. (x−2)/3','C. 3x−2','D. (x−3)/2','E. 3(x−2)'], answer:'B', explanation:'y = 3x+2 → x = (y−2)/3 → f⁻¹(x) = (x−2)/3'},
    {id:'PM-25', question:'Nilai C(7, 2) adalah:', options:['A. 14','B. 21','C. 35','D. 42','E. 7'], answer:'B', explanation:'C(7,2) = 7!/(2!×5!) = (7×6)/2 = 21'},
    {id:'PM-26', question:'Turunan dari f(x) = x³ − 3x² + 2x adalah:', options:['A. 3x² − 6x','B. 3x² − 6x + 2','C. 3x² + 6x + 2','D. x² − 2x + 2','E. 3x − 6'], answer:'B', explanation:'f\'(x) = 3x² − 6x + 2 (aturan turunan suku per suku)'},
    {id:'PM-27', question:'Jumlah deret aritmetika 1 + 2 + 3 + ... + 100 adalah:', options:['A. 4.950','B. 5.000','C. 5.050','D. 5.100','E. 5.150'], answer:'C', explanation:'Sn = n(n+1)/2 = 100×101/2 = 5.050'},
    {id:'PM-28', question:'Titik potong garis y = 2x − 4 dengan sumbu x adalah:', options:['A. (1, 0)','B. (2, 0)','C. (4, 0)','D. (0, −4)','E. (3, 0)'], answer:'B', explanation:'Saat y=0: 0 = 2x−4 → x=2. Titik potong: (2, 0)'},
    {id:'PM-29', question:'Sebuah segitiga siku-siku memiliki sisi 5, 12, 13. Nilai tan sudut terkecil (di depan sisi 5) adalah:', options:['A. 5/13','B. 12/13','C. 5/12','D. 12/5','E. 13/12'], answer:'C', explanation:'Sudut terkecil berlawanan sisi terpendek (5). tan = sisi depan/sisi samping = 5/12'},
    {id:'PM-30', question:'Variansi dari data: 2, 4, 4, 4, 5, 5, 7, 9 adalah:', options:['A. 2','B. 4','C. 4,5','D. 3','E. 2,5'], answer:'B', explanation:'Rata-rata = 40/8=5. Variansi = [(9+1+1+1+0+0+4+16)/8] = 32/8 = 4'},
  ],
};

// Informasi subtes
const SUBTEST_INFO = {
  PU:  { name: 'Penalaran Umum',                    code:'PU',  time: 30, questions: 30, color: '#6366f1' },
  PPU: { name: 'Pengetahuan & Pemahaman Umum',       code:'PPU', time: 15, questions: 20, color: '#8b5cf6' },
  PBM: { name: 'Pemahaman Bacaan & Menulis',         code:'PBM', time: 25, questions: 20, color: '#06b6d4' },
  PK:  { name: 'Pengetahuan Kuantitatif',            code:'PK',  time: 20, questions: 20, color: '#f59e0b' },
  LBI: { name: 'Literasi Bahasa Indonesia',          code:'LBI', time: 30, questions: 30, color: '#10b981' },
  LBE: { name: 'Literasi Bahasa Inggris',            code:'LBE', time: 20, questions: 20, color: '#ef4444' },
  PM:  { name: 'Penalaran Matematika',               code:'PM',  time: 30, questions: 30, color: '#f97316' },
};

const SUBTEST_ORDER = ['PU','PPU','PBM','PK','LBI','LBE','PM'];

/**
 * Fisher-Yates shuffle
 */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Get shuffled questions for each subtest
 */
function getShuffledQuestions() {
  const result = {};
  for (const key of SUBTEST_ORDER) {
    result[key] = shuffleArray(QUESTION_BANK[key]);
  }
  return result;
}
