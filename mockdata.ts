
import { MODULES } from './constants.tsx';
import { Quiz, GlossaryTerm } from './types.ts';


// --- MOCK DATA UNTUK KONTEN PEMBELAJARAN ---

const MOCK_LEARNING_CONTENT = new Map<string, string>();

MOCK_LEARNING_CONTENT.set(MODULES[0].prompt, `
### Pendahuluan
Struktur Organisasi dan Tata Kelola (SOTK) Pemerintahan Desa adalah kerangka kelembagaan yang menjadi dasar penyelenggaraan pemerintahan di tingkat desa. Pengaturannya didasarkan pada **Peraturan Menteri Dalam Negeri (Permendagri) Nomor 84 Tahun 2015** yang bertujuan untuk menciptakan pemerintahan desa yang efektif, efisien, dan akuntabel. SOTK yang jelas memastikan tidak ada tumpang tindih kewenangan dan setiap fungsi pemerintahan berjalan optimal.

### Filosofi Tata Kelola yang Baik (Good Governance)
SOTK bukan hanya soal bagan dan jabatan, tetapi penerapan prinsip-prinsip:
- **Transparansi:** Keterbukaan informasi kepada publik, terutama terkait anggaran dan kebijakan.
- **Akuntabilitas:** Setiap pejabat harus bisa mempertanggungjawabkan kinerjanya.
- **Partisipasi:** Melibatkan masyarakat secara aktif dalam perencanaan dan pengawasan.
- **Supremasi Hukum:** Semua tindakan harus berlandaskan peraturan yang berlaku.

### Struktur Organisasi
Pemerintah Desa terdiri dari Kepala Desa dan Perangkat Desa. Berikut adalah bagan strukturnya:
- **Kepala Desa** (Sebagai pimpinan tertinggi)
- **Perangkat Desa:**
  - **Sekretariat Desa**, dipimpin oleh Sekretaris Desa, membawahi:
    - Kepala Urusan (Kaur) Tata Usaha dan Umum
    - Kepala Urusan (Kaur) Keuangan
    - Kepala Urusan (Kaur) Perencanaan
  - **Pelaksana Kewilayahan**, yaitu Kepala Dusun.
  - **Pelaksana Teknis**, yaitu Kepala Seksi (Kasi):
    - Kasi Pemerintahan
    - Kasi Kesejahteraan
    - Kasi Pelayanan

### Proses Pengangkatan Perangkat Desa
1.  **Kekosongan Jabatan:** Kepala Desa mengumumkan kekosongan.
2.  **Pembentukan Panitia:** Kepala Desa membentuk panitia seleksi yang independen.
3.  **Penjaringan & Penyaringan:** Panitia membuka pendaftaran dan menyeleksi calon berdasarkan syarat administrasi, ujian tulis, dan wawancara.
4.  **Rekomendasi:** Panitia merekomendasikan calon dengan nilai tertinggi kepada Kepala Desa.
5.  **Konsultasi Camat:** Kepala Desa wajib mengkonsultasikan nama calon tersebut kepada Camat.
6.  **Penetapan SK:** Kepala Desa menerbitkan Surat Keputusan (SK) Pengangkatan.

### Kesalahan Umum yang Harus Dihindari
- **Nepotisme:** Mengangkat kerabat tanpa melalui mekanisme seleksi yang transparan.
- **Tumpang Tindih Tugas:** Kaur Keuangan mengerjakan tugas perencanaan, atau sebaliknya.
- **Otoriter:** Kepala Desa mengambil keputusan strategis tanpa melibatkan BPD dan masyarakat.
- **Administrasi Lemah:** Tidak tertib dalam mengelola surat-menyurat dan kearsipan.
`);

MOCK_LEARNING_CONTENT.set(MODULES[1].prompt, `
### Pendahuluan: Hierarki Hukum di Desa
Peraturan Desa (Perdes) adalah produk hukum tertinggi di desa. Namun, ia tidak boleh bertentangan dengan peraturan yang lebih tinggi (UU, PP, Perda). **Permendagri Nomor 111 Tahun 2014** adalah panduan teknis utamanya.

### Jenis-jenis Peraturan Desa
- **Perdes tentang Rencana Pembangunan:** RPJMDes, RKPDes.
- **Perdes tentang APBDes.**
- **Perdes tentang Kewenangan Desa.**
- **Perdes tentang Organisasi Kelembagaan:** Pendirian BUMDes, Pembentukan Lembaga Adat.
- **Perdes tentang Pungutan Desa:** Mengatur sumber PADesa.

### Tahapan Penyusunan Perdes (Siklus Lengkap)
**1. Perencanaan (Propemperdes):**
Kepala Desa dan BPD menyusun daftar prioritas rancangan Perdes (Raperdes) dalam satu tahun. Ini adalah komitmen bersama.

**2. Penyusunan (Drafting):**
- **Naskah Akademik (Wajib untuk Raperdes Kompleks):** Ini adalah jantung dari Raperdes. Isinya bukan opini, tapi kajian ilmiah yang mencakup:
    - Latar Belakang Filosofis, Sosiologis, dan Yuridis.
    - Sasaran yang Ingin Diwujudkan.
    - Jangkauan dan Arah Pengaturan.
    - Analisis Dampak (ekonomi, sosial, lingkungan).
- **Legal Drafting:** Tim penyusun (bisa dari Pemdes atau melibatkan ahli) mulai menyusun pasal per pasal dengan bahasa hukum yang jelas, lugas, dan tidak ambigu.

**3. Pembahasan (Deliberasi):**
- **Pembahasan Internal Pemdes:** Kades dan perangkat desa mematangkan draf.
- **Pembahasan dengan BPD:** Draf dibahas pasal per pasal untuk mencari titik temu dan kesepakatan.
- **Rapat Dengar Pendapat Publik:** Masyarakat, tokoh adat, dan kelompok kepentingan diberi ruang untuk memberikan masukan.

**4. Penetapan dan Pengundangan:**
- **Penetapan:** Setelah disepakati, Raperdes ditandatangani Kades menjadi Perdes.
- **Pengundangan:** Sekdes memberikan nomor, tanggal, dan mengundangkannya dalam **Lembaran Desa** agar sah berlaku.

**5. Evaluasi oleh Camat:**
Raperdes tentang APBDes, pungutan, tata ruang, dan SOTK wajib dievaluasi Camat (atas nama Bupati) **sebelum ditetapkan**. Tujuannya adalah harmonisasi dan memastikan tidak ada pertentangan dengan hukum yang lebih tinggi.
`);

MOCK_LEARNING_CONTENT.set(MODULES[2].prompt, `
### Perbedaan Mendasar
| Aspek | Peraturan Desa (Perdes) | Peraturan Kepala Desa (Perkades) | Keputusan Kepala Desa (SK) |
|---|---|---|---|
| **Sifat** | Mengatur (Regeling) - Norma Umum | Mengatur (Regeling) - Norma Umum | Menetapkan (Beschikking) - Konkret |
| **Objek** | Publik (seluruh warga) | Publik (seluruh warga) | Individu/Kelompok Tertentu |
| **Proses** | Wajib dibahas & disepakati BPD | Tidak wajib dibahas BPD | Kewenangan penuh Kades |
| **Fungsi** | Membuat norma hukum baru | Melaksanakan Perdes/peraturan lebih tinggi | Menerapkan norma pada kasus spesifik |
| **Contoh** | Perdes tentang Sampah | Perkades tentang Jam Operasional Kantor | SK Pengangkatan Ketua TPK |

### Fokus Mendalam: Keputusan Kepala Desa (SK)
**1. Definisi & Sifat:**
SK adalah produk hukum yang bersifat **penetapan (beschikking)**. Sifatnya **Konkret** (objeknya jelas, misal: pembangunan jembatan A), **Individual** (ditujukan ke orang tertentu, misal: Panitia Pembangunan A), dan **Final** (sekali jadi dan selesai/einmalig). SK tidak membuat aturan baru, tapi *mengeksekusi* aturan yang sudah ada.

**2. Fungsi Utama:**
- **Pelaksanaan Regulasi:** Melaksanakan perintah Perdes/Perkades.
- **Administrasi Kepegawaian:** Mengangkat/memberhentikan perangkat desa, staf, kader, ketua RT/RW.
- **Manajemen Kegiatan:** Membentuk tim atau panitia (TPK, Panitia HUT RI, Tim Verifikasi BLT).
- **Penetapan Status:** Menetapkan penerima bantuan (RTLH, BLT), status tanah, atau aset.
- **Pemberian Izin:** Izin Mendirikan Bangunan (IMB) skala kecil sesuai pelimpahan wewenang dari Perda Kabupaten.

**3. Proses Pembuatan:**
Merupakan kewenangan penuh Kepala Desa. Tidak perlu dibahas dengan BPD. Namun, praktik yang baik adalah mendasarkan SK pada proses yang transparan (misal, hasil seleksi untuk pengangkatan, hasil Musdes untuk pembentukan tim).

**4. Kesalahan Umum:**
- **Menggunakan SK untuk membuat pungutan:** Pungutan harus diatur dengan Perdes.
- **Mengangkat perangkat desa dengan SK tanpa proses seleksi:** Ini melanggar prosedur.
- **Isi SK tidak jelas/lengkap:** Tidak mencantumkan dasar hukum atau tugas yang spesifik.
`);

MOCK_LEARNING_CONTENT.set(MODULES[3].prompt, `
### Pendahuluan dan Asas
Pengelolaan Keuangan Desa (Permendagri No. 20 Tahun 2018) adalah rangkaian kegiatan dari perencanaan hingga pertanggungjawaban. Asasnya adalah **Transparan, Akuntabel, Partisipatif, Tertib dan Disiplin Anggaran**.

### Pelaku Pengelolaan Keuangan Desa (PKPKD)
- **Kepala Desa:** Pemegang Kekuasaan Pengelolaan Keuangan Desa (PKPKD). Bertanggung jawab penuh.
- **Sekretaris Desa:** Koordinator PKPKD. Membantu Kades, melakukan verifikasi administrasi.
- **Kaur Keuangan:** Pelaksana Fungsi Kebendaharaan. Menatausahakan seluruh keuangan (menerima, menyimpan, membayar, membukukan).
- **Kaur & Kasi (PKA):** Pelaksana Kegiatan Anggaran. Bertanggung jawab atas pelaksanaan teknis kegiatan dan penggunaan anggarannya.

### Komponen APBDes
1.  **Pendapatan:**
    -   *PADesa:* Hasil BUMDes, sewa aset, pungutan desa, dll.
    -   *Transfer:* Dana Desa (DD), Alokasi Dana Desa (ADD), Bagi Hasil Pajak & Retribusi (BHPR).
    -   *Lain-lain:* Hibah, bantuan keuangan provinsi/kabupaten.
2.  **Belanja:** Dikelompokkan menjadi 5 Bidang (Pemerintahan, Pembangunan, Pembinaan, Pemberdayaan, Tak Terduga).
3.  **Pembiayaan:**
    -   *Penerimaan Pembiayaan:* SiLPA (Sisa Lebih Perhitungan Anggaran) tahun lalu.
    -   *Pengeluaran Pembiayaan:* Penyertaan Modal ke BUMDes.

### Siklus Lengkap Pengelolaan Keuangan
1.  **Perencanaan:** RKPDes -> Musdes -> Draft APBDes -> Evaluasi Camat -> Perdes APBDes.
2.  **Pelaksanaan:**
    - PKA mengajukan Rencana Anggaran Biaya (RAB) ke Kades.
    - Kades menyetujui, Kaur Keuangan membuat Surat Permintaan Pembayaran (SPP).
    - Sekdes memverifikasi SPP.
    - Kades menyetujui SPP, dana dicairkan oleh Kaur Keuangan ke PKA.
3.  **Penatausahaan:** Kaur Keuangan wajib mencatat setiap transaksi ke dalam: Buku Kas Umum (BKU), Buku Kas Pembantu (Pajak, Kegiatan), Buku Bank.
4.  **Pelaporan:** Laporan Realisasi Semester I dan Semester Akhir Tahun.
5.  **Pertanggungjawaban:** Laporan Pertanggungjawaban Realisasi APBDes (disampaikan ke Bupati & diinformasikan ke publik).

### Kewajiban Pajak Desa
Pemerintah Desa sebagai pemotong pajak wajib memungut dan menyetorkan:
- **PPN (Pajak Pertambahan Nilai):** Untuk belanja barang/jasa kena pajak di atas Rp 2 juta.
- **PPh Pasal 21:** Atas pembayaran honor/gaji.
- **PPh Pasal 22:** Atas pembelian barang di atas Rp 2 juta.
- **PPh Pasal 23:** Atas sewa atau jasa lainnya.
Kegagalan memungut/menyetor pajak adalah pelanggaran serius.
`);

MOCK_LEARNING_CONTENT.set(MODULES[4].prompt, `
### Tujuan dan Pentingnya Administrasi Desa
Administrasi desa (Permendagri No. 47 Tahun 2016) adalah "sistem saraf" pemerintahan. Tanpa administrasi yang tertib, pemerintahan akan lumpuh. Fungsinya:
- **Alat Bukti:** Menjadi bukti otentik atas peristiwa (kelahiran, kematian, keputusan).
- **Dasar Perencanaan:** Data kependudukan menjadi dasar alokasi anggaran dan program.
- **Alat Kontrol:** Memudahkan pengawasan dan pemeriksaan.
- **Memori Kolektif:** Menyimpan sejarah dan rekam jejak desa.

### Keterkaitan Antar Buku Administrasi
Buku-buku ini tidak berdiri sendiri, mereka saling terkait. Contoh alur:
1.  Sebuah **Perdes** disahkan -> Dicatat di **Buku Peraturan Desa**.
2.  Perdes itu diundangkan -> Dicatat di **Buku Lembaran Desa**.
3.  Untuk melaksanakan Perdes, Kades menerbitkan **SK Panitia** -> Dicatat di **Buku Keputusan Kepala Desa**.
4.  Panitia menggunakan anggaran -> Dicatat di **Buku Kas Umum** dan **Buku Kas Pembantu Kegiatan**.
5.  Hasilnya adalah **bangunan baru** -> Dicatat di **Buku Inventaris Hasil Pembangunan** dan **Buku Inventaris dan Kekayaan Desa**.

### Detail Jenis Buku Administrasi
**1. Administrasi Umum:**
- **Buku Peraturan & Keputusan:** "Kitab hukum" desa.
- **Buku Inventaris:** "Daftar kekayaan" desa. Krusial untuk perencanaan aset.
- **Buku Agenda & Ekspedisi:** Mengontrol alur surat-menyurat.

**2. Administrasi Kependudukan:**
- **Buku Induk Penduduk:** Data statis setiap warga.
- **Buku Mutasi Penduduk:** Data dinamis (lahir, mati, pindah, datang). Ini adalah sumber utama untuk DPT Pemilu, data bansos, dll.
- **Buku Rekapitulasi Penduduk:** "Dashboard" kependudukan bulanan.

**3. Administrasi Keuangan (Wajib Sesuai Permendagri 20/2018):**
- **Buku Kas Umum (BKU):** "Jantung" pembukuan. Semua transaksi wajib masuk sini.
- **Buku Kas Pembantu Kegiatan:** Rincian penggunaan dana per kegiatan, dikelola PKA.
- **Buku Kas Pembantu Pajak:** Mengontrol kewajiban perpajakan.
- **Buku Bank Desa:** Mencocokkan catatan kas dengan rekening koran.

**4. Administrasi Pembangunan:**
- **Buku RKPDes & Kegiatan Pembangunan:** Menghubungkan antara rencana dan realisasi di lapangan.
- **Buku Kader Pemberdayaan:** Mendata "aset manusia" desa yang aktif.
`);

MOCK_LEARNING_CONTENT.set(MODULES[5].prompt, `
### Filosofi Perencanaan Partisipatif
Perencanaan pembangunan desa (UU No. 6/2014) menganut prinsip **"membangun desa, bukan desa dibangun"**. Artinya, subjek utama adalah warga desa, bukan pemerintah supradesa. Tujuannya adalah memastikan pembangunan sesuai kebutuhan nyata (needs-based), bukan keinginan (wants-based).

### Alur Lengkap Perencanaan (Bottom-Up & Top-Down)
**1. Musyawarah Dusun (Musdus) - Penggalian Gagasan:**
- **Proses:** Forum warga di tingkat terendah (dusun/RT/RW). Menggunakan alat bantu seperti Peta Potensi dan Kalender Musim untuk diskusi yang terarah.
- **Output:** Berita Acara berisi daftar usulan kegiatan prioritas dusun.

**2. Musyawarah Desa (Musdes) Perencanaan - "Pertarungan Gagasan":**
- **Proses:** Semua usulan dari Musdus dibawa ke forum ini. Terjadi proses verifikasi, klarifikasi, dan penetapan prioritas berdasarkan kriteria (urgensi, manfaat, kesesuaian RPJMDes, kemampuan anggaran).
- **Output:** Daftar prioritas kegiatan untuk RKPDes tahun berikutnya.

**3. Penyusunan RKPDes & DU-RKPDes:**
Tim penyusun yang dibentuk Kades merumuskan hasil Musdes menjadi dokumen RKPDes, lengkap dengan desain awal dan RAB. Usulan yang tidak terdanai oleh APBDes dimasukkan ke dalam **DU-RKPDes**.

**4. Sinkronisasi di Musrenbang Kecamatan:**
DU-RKPDes dibawa oleh delegasi desa ke Musrenbang Kecamatan. Di sini, usulan desa akan "bersaing" dengan usulan dari desa lain untuk mendapatkan pendanaan dari APBD Kabupaten/Kota.

### Dokumen Perencanaan Kunci
**1. RPJMDes (Rencana Pembangunan Jangka Menengah Desa):**
- **Durasi:** 6 tahun.
- **Isi:** Visi & Misi Kades terpilih. Ini adalah "janji politik" yang diterjemahkan menjadi dokumen perencanaan strategis. Wajib disusun maksimal 3 bulan setelah Kades dilantik.

**2. RKPDes (Rencana Kerja Pemerintah Desa):**
- **Durasi:** 1 tahun.
- **Isi:** Penjabaran operasional tahunan dari RPJMDes. Dokumen ini menjadi dasar utama penyusunan APBDes. Tidak boleh ada kegiatan di APBDes yang tidak tercantum di RKPDes.

Perencanaan yang baik adalah kunci untuk menghindari program yang tidak tepat sasaran dan pemborosan anggaran.
`);

MOCK_LEARNING_CONTENT.set(MODULES[6].prompt, `
### 1. Filosofi dan Status Hukum BUMDes
**BUMDes (Badan Usaha Milik Desa)** bukan sekadar "perusahaan desa". Ia adalah **instrumen sosial-ekonomi** yang bertujuan menyejahterakan masyarakat. Statusnya kini adalah **Badan Hukum** (PP No. 11/2021), setara dengan PT atau Koperasi, yang memberinya keleluasaan untuk berkontrak, memiliki rekening bank atas nama sendiri, dan mendapatkan perlindungan hukum.

### 2. Perbandingan dengan Badan Usaha Lain
| Fitur | BUMDes | PT (Perseroan Terbatas) | CV (Commanditaire Vennootschap) |
|---|---|---|---|
| **Pemilik** | Desa (melalui Musdes) | Pemegang Saham | Sekutu Aktif & Pasif |
| **Tujuan** | Profit & Manfaat Sosial | Utamanya Profit | Utamanya Profit |
| **Keputusan Tertinggi** | Musyawarah Desa | RUPS | Kesepakatan para sekutu |
| **Dasar Hukum** | UU Desa & PP 11/2021 | UU Perseroan Terbatas | Kitab Undang-Undang Hukum Dagang |

### 3. Studi Kelayakan (Feasibility Study) Sederhana
Sebelum mendirikan unit usaha, BUMDes wajib melakukan studi kelayakan. Aspek minimal yang dianalisis:
- **Aspek Pasar:** Siapa calon pembeli? Seberapa besar kebutuhannya? Siapa saja pesaingnya?
- **Aspek Teknis:** Apakah bahan baku tersedia? Apakah teknologinya bisa dikuasai? Di mana lokasi yang tepat?
- **Aspek Keuangan:** Berapa modal yang dibutuhkan (investasi & operasional)? Kapan diperkirakan akan balik modal (BEP)?
- **Aspek Manajemen:** Siapa yang akan mengelola? Apakah SDM-nya kompeten?

### 4. Tahapan Pendirian BUMDes (Sesuai Aturan Baru)
1.  **Musdes Pendirian:** Menyepakati pendirian, AD/ART awal, dan modal awal.
2.  **Pendaftaran Nama:** Diajukan ke Kemendes PDTT. Nama tidak boleh sama dengan BUMDes lain.
3.  **Pengajuan Sertifikat Badan Hukum:** Setelah nama disetujui, Kades dan perwakilan BUMDes mendaftar melalui sistem online untuk mendapatkan Sertifikat Badan Hukum.
4.  **Penetapan Perdes:** Perdes tentang Pendirian dan Penyertaan Modal Desa dibuat.

### 5. Jenis Usaha Inovatif
- **Ekonomi Digital:** Pengelola WiFi desa, agen PPOB, marketplace produk lokal.
- **Ekonomi Sirkular:** Bank Sampah, produksi pupuk organik, kerajinan daur ulang.
- **Pariwisata:** Desa Wisata (bukan hanya tiket, tapi paket pengalaman: homestay, kuliner, atraksi budaya).
- **Jasa Keuangan:** Unit simpan pinjam (layanan dasar non-perbankan).
- **Penyewaan:** Alsintan (alat mesin pertanian), gedung serbaguna, peralatan pesta.
`);

MOCK_LEARNING_CONTENT.set(MODULES[7].prompt, `
### 1. Filosofi Pengelolaan Aset Desa
Aset Desa (Permendagri No. 1/2016) adalah seluruh kekayaan milik desa yang harus dikelola secara **tertib, efisien, dan optimal**. Pengelolaan aset bukan hanya soal pencatatan (inventarisasi), tetapi bagaimana aset tersebut bisa memberikan manfaat maksimal bagi desa, baik secara fungsional maupun finansial.

### 2. Siklus Lengkap Pengelolaan Aset
**a. Perencanaan & Pengadaan:** Kebutuhan aset harus tercantum dalam RKPDes. Pengadaan harus mengikuti aturan PBJ Desa.

**b. Penggunaan & Pemanfaatan:**
- **Penggunaan:** Digunakan sendiri oleh Pemdes untuk pelayanan (misal: motor dinas).
- **Pemanfaatan:** Digunakan pihak ketiga untuk menghasilkan PADesa. Bentuknya:
    - **Sewa:** Jangka pendek, imbalan uang tunai.
    - **Pinjam Pakai:** Pemanfaatan sementara tanpa imbalan (misal: untuk kegiatan sosial).
    - **Kerja Sama Pemanfaatan (KSP):** Proyek bersama dengan pihak ketiga, ada bagi hasil.
    - **Bangun Guna Serah / Bangun Serah Guna (BGS/BSG):** Pihak ketiga membangun di atas tanah desa, mengoperasikannya dalam jangka waktu tertentu, lalu menyerahkannya ke desa.

**c. Pengamanan (Fisik, Administratif, Hukum):**
- **Fisik:** Pemasangan pagar, penyimpanan di tempat aman.
- **Administratif:** Pencatatan di **Buku Inventaris** dan pemberian **Kode Barang**.
- **Hukum:** Penerbitan **sertifikat tanah**, bukti kepemilikan BPKB.

**d. Penatausahaan (Inventarisasi & Kodefikasi):**
- **Inventarisasi (Sensus Aset):** Dilakukan minimal 5 tahun sekali untuk mendata ulang seluruh aset.
- **Kodefikasi:** Pemberian kode unik pada setiap barang. Contoh: 01 (Tanah), 02 (Peralatan), 03 (Gedung). Kode ini membantu pelacakan dan pelaporan.
- **Kartu Inventaris Barang (KIB):** Ada 6 jenis KIB (A-F) untuk mencatat aset berdasarkan jenisnya (KIB A untuk Tanah, KIB B untuk Peralatan/Mesin, dst.).

**e. Penghapusan:**
Proses mengeluarkan barang dari daftar inventaris. Alasan: rusak berat, hilang, musnah, atau sudah tidak efisien.
**Prosedur:** Penilaian oleh tim -> Laporan tim -> SK Kepala Desa -> Berita Acara Penghapusan.

### Masalah Umum & Solusinya
- **Masalah:** Banyak tanah kas desa tidak bersertifikat.
  - **Solusi:** Anggarkan biaya sertifikasi di APBDes, ajukan program PTSL dari BPN.
- **Masalah:** Aset hasil pembangunan tidak tercatat.
  - **Solusi:** Buat SOP bahwa setiap serah terima kegiatan pembangunan wajib disertai penyerahan data untuk dicatat di Buku Inventaris.
- **Masalah:** Kendaraan dinas rusak tapi tidak dianggarkan biaya pemeliharaan.
  - **Solusi:** Masukkan biaya servis rutin dan pajak kendaraan dalam RKPDes dan APBDes setiap tahun.
`);


// --- MOCK DATA UNTUK CONTOH DRAF ---

const MOCK_DRAFT_CONTENT = new Map<string, string>();

MOCK_DRAFT_CONTENT.set(MODULES[0].draftPrompt, `
\`\`\`markdown
**KOP SURAT PEMERINTAH DESA**
[Logo Desa]
**PEMERINTAH KABUPATEN [NAMA KABUPATEN]**
**KECAMATAN [NAMA KECAMATAN]**
**DESA [NAMA DESA]**
Alamat: [Alamat Lengkap Kantor Desa]

---

**KEPUTUSAN KEPALA DESA [NAMA DESA]**
**NOMOR: [Nomor SK] / TAHUN [Tahun]**

**TENTANG**

**PENETAPAN STRUKTUR ORGANISASI DAN TATA KERJA PEMERINTAH DESA [NAMA DESA]**

**DENGAN RAHMAT TUHAN YANG MAHA ESA**

**KEPALA DESA [NAMA DESA],**

**Menimbang:** 
a. bahwa untuk melaksanakan ketentuan Pasal 2 Peraturan Menteri Dalam Negeri Nomor 84 Tahun 2015 tentang Susunan Organisasi dan Tata Kerja Pemerintah Desa, perlu menetapkan Struktur Organisasi dan Tata Kerja Pemerintah Desa yang efektif dan efisien;
b. bahwa penetapan SOTK merupakan landasan yuridis bagi pembagian tugas dan wewenang perangkat desa;
c. bahwa berdasarkan pertimbangan tersebut, perlu menuangkan penetapan ini dalam Keputusan Kepala Desa.

**Mengingat:** 
1. Undang-Undang Nomor 6 Tahun 2014 tentang Desa;
2. Peraturan Pemerintah Nomor 43 Tahun 2014 sebagaimana telah diubah dengan PP Nomor 47 Tahun 2015;
3. Peraturan Menteri Dalam Negeri Nomor 84 Tahun 2015 tentang Susunan Organisasi dan Tata Kerja Pemerintah Desa;
4. Peraturan Daerah Kabupaten [Nama Kabupaten] Nomor [Nomor] Tahun [Tahun] tentang Pedoman Organisasi dan Tata Kerja Pemerintah Desa.

**MEMUTUSKAN:**

**Menetapkan:**

**KESATU:** Menetapkan Struktur Organisasi dan Tata Kerja Pemerintah Desa [Nama Desa], Kecamatan [Nama Kecamatan], Kabupaten [Nama Kabupaten] sebagaimana bagan terlampir dalam Lampiran I keputusan ini.

**KEDUA:** Susunan organisasi Pemerintah Desa [Nama Desa] adalah sebagai berikut:
- Kepala Desa: [Nama Kepala Desa]
- Sekretaris Desa: [Nama Sekretaris Desa]
- Kepala Urusan Tata Usaha dan Umum: [Nama Pejabat]
- Kepala Urusan Keuangan: [Nama Pejabat]
- Kepala Urusan Perencanaan: [Nama Pejabat]
- Kepala Seksi Pemerintahan: [Nama Pejabat]
- Kepala Seksi Kesejahteraan: [Nama Pejabat]
- Kepala Seksi Pelayanan: [Nama Pejabat]
- Kepala Dusun [Nama Dusun 1]: [Nama Pejabat]
- Kepala Dusun [Nama Dusun 2]: [Nama Pejabat]
- (dan seterusnya sesuai jumlah dusun)

**KETIGA:** Rincian tugas pokok dan fungsi setiap jabatan dalam struktur organisasi sebagaimana dimaksud dalam Diktum KEDUA tercantum dalam Lampiran II yang merupakan bagian tidak terpisahkan dari keputusan ini.

**KEEMPAT:** Keputusan ini mulai berlaku pada tanggal ditetapkan, dengan ketentuan apabila terdapat kekeliruan akan diadakan perbaikan sebagaimana mestinya.

Ditetapkan di: [Nama Desa]
Pada tanggal: [Tanggal Penetapan]

**KEPALA DESA [NAMA DESA],**

[Tanda Tangan dan Stempel]

**[NAMA KEPALA DESA LENGKAP]**
\`\`\`
`);

MOCK_DRAFT_CONTENT.set(MODULES[1].draftPrompt, `
\`\`\`markdown
**KOP SURAT PEMERINTAH DESA**
[Logo Desa]

**PERATURAN DESA [NAMA DESA]**
**NOMOR [NOMOR] TAHUN [TAHUN]**

**TENTANG**

**RENCANA PEMBANGUNAN JANGKA MENENGAH DESA (RPJMDes)**
**TAHUN [TAHUN AWAL] - [TAHUN AKHIR]**

**DENGAN RAHMAT TUHAN YANG MAHA ESA**

**KEPALA DESA [NAMA DESA],**

**Menimbang:**
a. bahwa sesuai dengan Undang-Undang Nomor 6 Tahun 2014, Desa diwajibkan menyusun perencanaan pembangunan desa yang partisipatif dan berkelanjutan;
b. bahwa Rencana Pembangunan Jangka Menengah Desa (RPJMDes) merupakan dokumen perencanaan strategis untuk jangka waktu 6 (enam) tahun yang menjadi pedoman bagi penyusunan RKPDes dan APBDes;
c. bahwa RPJMDes disusun berdasarkan Visi dan Misi Kepala Desa terpilih hasil Musyawarah Desa Perencanaan Pembangunan;
d. bahwa berdasarkan pertimbangan tersebut, perlu menetapkan Peraturan Desa tentang RPJMDes Tahun [Tahun Awal]-[Tahun Akhir].

**Mengingat:**
1. Undang-Undang Nomor 6 Tahun 2014 tentang Desa;
2. Peraturan Menteri Dalam Negeri Nomor 114 Tahun 2014 tentang Pedoman Pembangunan Desa;
(dan peraturan terkait lainnya)

**Dengan Persetujuan Bersama**
**BADAN PERMUSYAWARATAN DESA [NAMA DESA]**
**dan**
**KEPALA DESA [NAMA DESA]**

**MEMUTUSKAN:**

**Menetapkan: PERATURAN DESA TENTANG RENCANA PEMBANGUNAN JANGKA MENENGAH DESA (RPJMDes) TAHUN [TAHUN AWAL] - [TAHUN AKHIR].**

**BAB I**
**KETENTUAN UMUM**

**Pasal 1**
Dalam Peraturan Desa ini yang dimaksud dengan:
1. Desa adalah Desa [Nama Desa].
2. RPJMDes adalah dokumen perencanaan strategis Desa [Nama Desa] untuk jangka waktu 6 (enam) tahun.
... (definisi lainnya)

**BAB II**
**VISI DAN MISI**

**Pasal 2**
Visi Pembangunan Desa [Nama Desa] Tahun [Tahun Awal]-[Tahun Akhir] adalah: **"[Isi Visi Kepala Desa Terpilih, contoh: Terwujudnya Desa [Nama Desa] yang Maju, Sehat, Cerdas, dan Sejahtera Berbasis Potensi Lokal]".**

**Pasal 3**
Untuk mencapai visi sebagaimana dimaksud dalam Pasal 2, ditetapkan Misi Pembangunan Desa sebagai berikut:
1. Meningkatkan kualitas tata kelola pemerintahan yang bersih dan akuntabel.
2. Meningkatkan infrastruktur dasar yang merata dan berkualitas.
3. Meningkatkan kualitas sumber daya manusia melalui sektor pendidikan dan kesehatan.
... (dan seterusnya)

**BAB III**
**ARAH KEBIJAKAN PEMBANGUNAN**

**Pasal 4**
Arah kebijakan pembangunan desa mencakup bidang-bidang strategis yang dijabarkan lebih lanjut dalam dokumen RPJMDes terlampir.

**BAB IV**
**KETENTUAN PENUTUP**

**Pasal 5**
Dokumen RPJMDes sebagaimana tercantum dalam Lampiran merupakan bagian yang tidak terpisahkan dari Peraturan Desa ini.

**Pasal 6**
Peraturan Desa ini mulai berlaku pada tanggal diundangkan.

Agar setiap orang mengetahuinya, memerintahkan pengundangan Peraturan Desa ini dengan penempatannya dalam Lembaran Desa [Nama Desa].

Ditetapkan di: [Nama Desa]
Pada tanggal: [Tanggal Penetapan]

**KEPALA DESA [NAMA DESA],**

**[NAMA KEPALA DESA LENGKAP]**

Diundangkan di [Nama Desa]
Pada tanggal [Tanggal Pengundangan]
**SEKRETARIS DESA [NAMA DESA],**

**[NAMA SEKRETARIS DESA]**
(LEMBARAN DESA [NAMA DESA] TAHUN [TAHUN] NOMOR [NOMOR])
\`\`\`
`);

MOCK_DRAFT_CONTENT.set(MODULES[2].draftPrompt, `
\`\`\`markdown
**KOP SURAT PEMERINTAH DESA**
[Logo Desa]
**PEMERINTAH KABUPATEN [NAMA KABUPATEN]**
**KECAMATAN [NAMA KECAMATAN]**
**DESA [NAMA DESA]**
Alamat: [Alamat Lengkap Kantor Desa]

---

**KEPUTUSAN KEPALA DESA [NAMA DESA]**
**NOMOR: [Nomor SK] / TAHUN [Tahun]**

**TENTANG**

**PENGANGKATAN TIM PELAKSANA KEGIATAN (TPK) UNTUK KEGIATAN PEMBANGUNAN DRAINASE DUSUN [NAMA DUSUN] TAHUN ANGGARAN [TAHUN]**

**KEPALA DESA [NAMA DESA],**

**Menimbang:** 
a. bahwa dalam rangka pelaksanaan kegiatan Pembangunan Drainase di Dusun [Nama Dusun] yang anggarannya tertuang dalam APBDes Tahun [Tahun], diperlukan sebuah tim yang bertanggung jawab secara teknis di lapangan;
b. bahwa untuk menjamin akuntabilitas dan kelancaran pelaksanaan kegiatan tersebut, perlu dibentuk Tim Pelaksana Kegiatan (TPK);
c. bahwa nama-nama yang diusulkan berdasarkan hasil musyawarah warga dipandang cakap untuk melaksanakan tugas sebagai TPK.

**Mengingat:** 
1. Undang-Undang Nomor 6 Tahun 2014 tentang Desa;
2. Peraturan Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah Nomor 12 Tahun 2019 tentang Pedoman Penyusunan Tata Cara Pengadaan Barang/Jasa di Desa.
3. Peraturan Desa [Nama Desa] Nomor [Nomor] Tahun [Tahun] tentang APBDes Tahun Anggaran [Tahun].

**MEMUTUSKAN:**

**Menetapkan:**

**KESATU:** Mengangkat dan menetapkan mereka yang namanya tercantum dalam Diktum KEDUA sebagai Tim Pelaksana Kegiatan (TPK) Pembangunan Drainase Dusun [Nama Dusun].

**KEDUA:** Susunan personalia Tim Pelaksana Kegiatan (TPK) adalah sebagai berikut:
- **Ketua:** [Nama Lengkap Ketua]
- **Sekretaris:** [Nama Lengkap Sekretaris]
- **Anggota:** 
  1. [Nama Lengkap Anggota 1]
  2. [Nama Lengkap Anggota 2]
  3. [Nama Lengkap Anggota 3]

**KETIGA:** TPK sebagaimana dimaksud dalam Diktum KESATU memiliki tugas dan tanggung jawab sebagai berikut:
1. Menyusun rencana kerja dan jadwal pelaksanaan.
2. Melaksanakan pengadaan barang/jasa sesuai peraturan.
3. Mengawasi pelaksanaan pekerjaan agar sesuai spesifikasi teknis.
4. Membuat laporan kemajuan pekerjaan dan laporan pertanggungjawaban.

**KEEMPAT:** Segala biaya yang timbul akibat dikeluarkannya Keputusan ini, termasuk honorarium TPK, dibebankan pada Anggaran Pendapatan dan Belanja Desa (APBDes) [Nama Desa] Tahun Anggaran [Tahun] pada kode rekening kegiatan yang bersangkutan.

**KELIMA:** Keputusan ini mulai berlaku pada tanggal ditetapkan dan berakhir setelah serah terima hasil pekerjaan dilaksanakan.

Ditetapkan di: [Nama Desa]
Pada tanggal: [Tanggal Penetapan]

**KEPALA DESA [NAMA DESA],**

[Tanda Tangan dan Stempel]

**[NAMA KEPALA DESA LENGKAP]**
\`\`\`
`);

MOCK_DRAFT_CONTENT.set(MODULES[3].draftPrompt, `
\`\`\`markdown
### BUKU KAS BANTU KEGIATAN (BKBK)

**Nama Kegiatan:** Pembangunan Posyandu "MELATI"
**Bidang:** Pelaksanaan Pembangunan Desa
**Kode Rekening:** 2.1.04
**Tahun Anggaran:** 2024
**Sumber Dana:** Dana Desa

| No | Tanggal | Uraian Transaksi | No. Bukti | Penerimaan (Rp) | Pengeluaran (Rp) | Saldo (Rp) |
|----|-----------|--------------------------------------------|-----------|-----------------|------------------|--------------|
| 1  | 05/06/2024| Terima dana tahap I dari Bendahara Desa  | SPP/01    | 15.000.000,-    | -                | 15.000.000,- |
| 2  | 07/06/2024| Belanja material: Semen 50 sak, Pasir 1 rit| Nota/001  | -               | 4.500.000,-      | 10.500.000,- |
| 3  | 10/06/2024| Belanja material: Besi, Batu, Keramik      | Nota/002  | -               | 3.750.000,-      | 6.750.000,-  |
| 4  | 15/06/2024| Pembayaran upah tukang & pekerja (HOK)     | DHP/01    | -               | 2.500.000,-      | 4.250.000,-  |
| 5  | 18/06/2024| Belanja konsumsi pekerja                   | Nota/003  | -               | 500.000,-        | 3.750.000,-  |
|    |           | **Jumlah**                                 |           | **15.000.000,-**| **11.250.000,-** | **3.750.000,-** |

Mengetahui,
**Pelaksana Kegiatan Anggaran (PKA)**

[Tanda Tangan]

**[Nama Kasi Kesejahteraan]**
NIP/NIPD: ...
\`\`\`
`);

MOCK_DRAFT_CONTENT.set(MODULES[4].draftPrompt, `
\`\`\`markdown
### BUKU INVENTARIS DAN KEKAYAAN DESA
**DESA [NAMA DESA]**
**KEADAAN PER 31 DESEMBER [TAHUN]**

| No Urut | Jenis Barang / Bangunan | Kode Barang | Jumlah | Merek / Tipe | Tahun Pengadaan | Asal Usul Barang | Keadaan (B/RR/RB) | Keterangan |
|:---|:------------------------|:------------|:------:|:-------------|:----------------|:-----------------|:--------------------|:-----------|
| 1  | Laptop Kantor Desa      | 02.06.02.01 | 2 Unit | Acer Aspire 5| 2023            | APBDes TA 2023   | Baik (B)            | Digunakan oleh Kaur Keuangan & Kaur Umum |
| 2  | Meja Kantor             | 02.06.01.01 | 5 Buah | Olympic      | 2021            | APBDes TA 2021   | Baik (B)            | Bahan Partikel Board |
| 3  | Kursi Kantor            | 02.06.01.02 | 10 Buah| Chitose      | 2021            | APBDes TA 2021   | Rusak Ringan (RR)   | 2 buah perlu perbaikan kaki kursi |
| 4  | Tanah Kas Desa Blok A   | 01.01.11.01 | 1 Ha   | -            | 1980            | Hak Asal Usul    | Baik (B)            | Sertifikat Hak Pakai No. 123 |
| 5  | Gedung Kantor Desa      | 03.07.01.01 | 1 Unit | -            | 2015            | Bantuan Kab      | Baik (B)            | Luas 150 m², IMB No. 456 |
| 6  | Sepeda Motor Dinas      | 02.03.01.02 | 1 Unit | Honda Revo   | 2022            | APBDes TA 2022   | Baik (B)            | Nopol: [Nomor Polisi], BPKB an. Pemdes |
| 7  | Mesin Pompa Air         | 02.05.02.04 | 1 Unit | Shimizu      | 2024            | Swadaya Masy.    | Rusak Berat (RB)  | Tidak bisa diperbaiki, diusulkan hapus |

**Keterangan Kondisi:**
- B: Baik
- RR: Rusak Ringan
- RB: Rusak Berat
\`\`\`
`);

MOCK_DRAFT_CONTENT.set(MODULES[5].draftPrompt, `
\`\`\`markdown
**BERITA ACARA**
**MUSYAWARAH DUSUN [NAMA DUSUN]**
**DESA [NAMA DESA] KECAMATAN [NAMA KECAMATAN]**

---

Dalam rangka pelaksanaan tahapan perencanaan pembangunan desa partisipatif, maka pada hari ini, **[Nama Hari]**, tanggal **[Tanggal]** bulan **[Bulan]** tahun **[Tahun]**, bertempat di **[Lokasi Musyawarah]**, telah diselenggarakan Musyawarah Dusun [Nama Dusun] untuk Penggalian Gagasan dalam rangka Penyusunan Rencana Kerja Pemerintah Desa (RKPDes) Tahun [Tahun Berikutnya].

Musyawarah ini dihadiri oleh peserta dari berbagai unsur masyarakat Dusun [Nama Dusun] sebagaimana tercantum dalam daftar hadir terlampir.

**Pimpinan Musyawarah:** [Nama Pimpinan Rapat], selaku Kepala Dusun [Nama Dusun].
**Notulen:** [Nama Notulen]

Setelah melalui proses diskusi dan pembahasan, Musyawarah Dusun menyepakati usulan-usulan kegiatan prioritas untuk diajukan ke tingkat Musyawarah Desa (Musdes) Perencanaan Pembangunan, sebagai berikut:

**DAFTAR USULAN KEGIATAN PRIORITAS MASYARAKAT DUSUN [NAMA DUSUN]**

| No | Bidang | Jenis Kegiatan Usulan | Perkiraan Volume | Sasaran Manfaat | Perkiraan Biaya (Rp) | Keterangan / Justifikasi |
|:--:|:-------------------------|:-------------------------------------|:-----------------|:----------------|:---------------------|:------------------------|
| 1  | Pelaksanaan Pembangunan  | Pembangunan/Rehab Jalan Usaha Tani   | 500 m x 2.5 m    | 50 Petani       | 75.000.000,-         | Memperlancar akses ke sawah |
| 2  | Pelaksanaan Pembangunan  | Pembangunan Drainase Lingkungan RT 01| 200 m            | 30 KK           | 40.000.000,-         | Mengatasi genangan air saat hujan |
| 3  | Pemberdayaan Masyarakat  | Pelatihan Pembuatan Kue Kering       | 1 Paket (20 org) | Ibu-ibu PKK     | 10.000.000,-         | Peningkatan ekonomi keluarga |
| 4  | Pembinaan Kemasyarakatan | Pengadaan Sarana Olahraga Voli       | 1 Set Lengkap    | 40 Pemuda       | 5.000.000,-          | Mengurangi kegiatan negatif pemuda |
| 5  | Pelaksanaan Pembangunan  | Pembangunan Lampu Penerangan Jalan   | 15 Titik         | Seluruh Warga   | 25.000.000,-         | Meningkatkan keamanan lingkungan |

Demikian Berita Acara ini dibuat dan disahkan dengan penuh tanggung jawab untuk dapat dipergunakan sebagai bahan masukan dalam Musdes Perencanaan Pembangunan Desa [Nama Desa].

Dibuat di: Dusun [Nama Dusun]
Tanggal: [Tanggal]

| Pimpinan Musyawarah | Wakil Peserta Perempuan | Wakil Peserta Pemuda |
|:-------------------:|:-----------------------:|:--------------------:|
|                     |                         |                      |
| (Tanda Tangan)      | (Tanda Tangan)          | (Tanda Tangan)       |
| **[Nama Kepala Dusun]** | **[Nama Wakil PKK/Posyandu]** | **[Nama Wakil Karang Taruna]** |

Mengetahui,
**Kepala Desa [Nama Desa]**

(Tanda Tangan & Stempel)
**[NAMA KEPALA DESA]**
\`\`\`
`);

MOCK_DRAFT_CONTENT.set(MODULES[6].draftPrompt, `
\`\`\`markdown
**KOP SURAT PEMERINTAH DESA**
[Logo Desa]

**PERATURAN DESA [NAMA DESA]**
**NOMOR [NOMOR] TAHUN [TAHUN]**

**TENTANG**

**PENDIRIAN DAN PENYERTAAN MODAL AWAL DESA KEPADA BADAN USAHA MILIK DESA (BUMDes)**
**"[NAMA BUMDES]"**

**DENGAN RAHMAT TUHAN YANG MAHA ESA**

**KEPALA DESA [NAMA DESA],**

**Menimbang:** 
a. bahwa untuk meningkatkan perekonomian desa, mengoptimalkan aset, dan meningkatkan pendapatan asli desa, perlu didirikan suatu badan usaha yang profesional dan akuntabel;
b. bahwa BUMDes merupakan instrumen pendayagunaan ekonomi lokal dengan berbagai ragam jenis usaha sesuai potensi desa, sebagaimana diamanatkan oleh Peraturan Pemerintah Nomor 11 Tahun 2021;
c. bahwa berdasarkan hasil Musyawarah Desa pada tanggal [Tanggal Musdes], telah disepakati untuk membentuk BUMDes serta mengalokasikan penyertaan modal awal;
d. bahwa berdasarkan pertimbangan tersebut, perlu menetapkan Peraturan Desa tentang Pendirian BUMDes "[Nama BUMDes]".

**Mengingat:** 
1. Undang-Undang Nomor 6 Tahun 2014 tentang Desa;
2. Peraturan Pemerintah Nomor 11 Tahun 2021 tentang Badan Usaha Milik Desa;
3. Peraturan Menteri Desa PDTT Nomor 3 Tahun 2021 tentang Pendaftaran, Pendataan dan Pemeringkatan, Pembinaan dan Pengembangan, dan Pengadaan Barang dan/atau Jasa BUM Desa/BUM Desa Bersama.

**Dengan Persetujuan Bersama**
**BADAN PERMUSYAWARATAN DESA [NAMA DESA]**
**dan**
**KEPALA DESA [NAMA DESA]**

**MEMUTUSKAN:**

**Menetapkan: PERATURAN DESA TENTANG PENDIRIAN DAN PENYERTAAN MODAL AWAL DESA KEPADA BUMDes "[NAMA BUMDES]".**

**BAB I**
**KETENTUAN UMUM**

**Pasal 1**
(Definisi istilah-istilah kunci)

**BAB II**
**PENDIRIAN, NAMA, DAN TEMPAT KEDUDUKAN**

**Pasal 2**
(1) Dengan Peraturan Desa ini didirikan Badan Usaha Milik Desa yang diberi nama BUMDes "[Nama BUMDes]".
(2) BUMDes "[Nama BUMDes]" berkedudukan di wilayah Desa [Nama Desa].

**BAB III**
**MAKSUD DAN TUJUAN**

**Pasal 3**
(Maksud dan tujuan pendirian BUMDes)

**BAB IV**
**MODAL BUMDes**

**Pasal 4**
(1) Modal awal BUMDes "[Nama BUMDes]" adalah sebesar **Rp [Jumlah Rupiah] ([Terbilang])**.
(2) Modal awal sebagaimana dimaksud pada ayat (1) merupakan kekayaan Desa yang dipisahkan dan bersumber dari Anggaran Pendapatan dan Belanja Desa (APBDes) Tahun Anggaran [Tahun].
(3) Pencatatan penyertaan modal Desa akan dicatat dalam neraca BUMDes dan laporan kekayaan milik Desa.

**BAB V**
**KEPENGURUSAN DAN PENGAWASAN**

**Pasal 5**
Struktur Organisasi BUMDes, tugas, wewenang, serta mekanisme pengangkatan dan pemberhentian Penasihat, Pelaksana Operasional, dan Pengawas diatur lebih lanjut dalam Anggaran Dasar/Anggaran Rumah Tangga (AD/ART) BUMDes.

**BAB VI**
**PEMBAGIAN HASIL USAHA**

**Pasal 6**
Alokasi pembagian Sisa Hasil Usaha (SHU) tahunan ditetapkan dalam Musyawarah Desa untuk penetapan pertanggungjawaban BUMDes dan dituangkan dalam AD/ART, yang sekurang-kurangnya mencakup alokasi untuk Pendapatan Asli Desa (PADesa) dan pengembangan usaha.

**BAB VII**
**KETENTUAN PENUTUP**

**Pasal 7**
Hal-hal yang belum diatur dalam Peraturan Desa ini akan diatur lebih lanjut dalam AD/ART BUMDes sepanjang tidak bertentangan dengan Peraturan Desa ini.

**Pasal 8**
Peraturan Desa ini mulai berlaku pada tanggal diundangkan.

Ditetapkan di: [Nama Desa]
Pada tanggal: [Tanggal Penetapan]
**KEPALA DESA [NAMA DESA],**

**[NAMA KEPALA DESA]**
\`\`\`
`);

MOCK_DRAFT_CONTENT.set(MODULES[7].draftPrompt, `
\`\`\`markdown
**KOP SURAT PEMERINTAH DESA**
[Logo Desa]
**PEMERINTAH KABUPATEN [NAMA KABUPATEN]**
**KECAMATAN [NAMA KECAMATAN]**
**DESA [NAMA DESA]**
Alamat: [Alamat Lengkap Kantor Desa]

---

**BERITA ACARA PENGHAPUSAN BARANG MILIK DESA**
**NOMOR: [Nomor BA] / TAHUN [Tahun]**

Pada hari ini, **[Nama Hari]**, tanggal **[Tanggal]** bulan **[Bulan]** tahun **[Tahun]**, kami yang bertanda tangan di bawah ini, selaku Tim Penghapusan Aset Desa yang dibentuk berdasarkan Keputusan Kepala Desa Nomor [Nomor SK Tim], telah melaksanakan proses pemeriksaan dan penilaian terhadap barang-barang inventaris milik Pemerintah Desa [Nama Desa] yang diusulkan untuk dihapus.

Berdasarkan hasil pemeriksaan fisik dan penilaian kondisi, maka dengan ini kami menyatakan bahwa barang-barang sebagaimana tercantum dalam daftar di bawah ini telah memenuhi syarat untuk dihapus dari Buku Inventaris dan Kekayaan Desa dengan alasan rusak berat dan tidak ekonomis untuk diperbaiki.

Adapun daftar barang yang dihapus adalah sebagai berikut:

| No | Jenis Barang / Nama Barang | Kode Barang | Jumlah | Tahun Perolehan | Kondisi Terakhir | Keterangan / Alasan Penghapusan |
|:--:|:---------------------------|:------------|:------:|:----------------|:-----------------|:--------------------------------|
| 1  | Mesin Tik Manual           | 02.06.03.01 | 1 Buah | 1998            | Rusak Berat (RB) | Suku cadang tidak tersedia      |
| 2  | Komputer PC Rakitan        | 02.06.02.01 | 1 Unit | 2010            | Rusak Berat (RB) | Motherboard mati total          |
| 3  | Printer Dot Matrix         | 02.06.02.05 | 1 Unit | 2008            | Rusak Berat (RB) | Biaya perbaikan melebihi harga beli baru |
| 4  | Kursi Besi Tunggu          | 02.06.01.02 | 2 Buah | 2005            | Rusak Berat (RB) | Patah dan berkarat parah        |

Selanjutnya, barang-barang tersebut di atas akan diproses sesuai dengan ketentuan yang berlaku mengenai tindak lanjut atas barang hasil penghapusan.

Demikian Berita Acara ini kami buat dengan sebenar-benarnya untuk dapat dipergunakan sebagaimana mestinya.

**TIM PENGHAPUSAN ASET DESA [NAMA DESA]:**

| Jabatan dalam Tim | Nama Lengkap | Tanda Tangan |
|:------------------|:-------------|:-------------|
| 1. Ketua          | [Nama Ketua Tim] | 1. ............ |
| 2. Sekretaris     | [Nama Sekretaris Tim] | 2. ............ |
| 3. Anggota        | [Nama Anggota Tim] | 3. ............ |

Mengetahui dan Menyetujui,
**Kepala Desa [Nama Desa]**

[Tanda Tangan dan Stempel]

**[NAMA KEPALA DESA LENGKAP]**
\`\`\`
`);


// --- MOCK DATA UNTUK KUIS ---

const MOCK_QUIZZES = new Map<string, Quiz>();

MOCK_QUIZZES.set('sotk_quiz', {
  id: 'sotk_quiz',
  title: 'Kuis SOTK Desa',
  questions: [
    {
      question: 'Siapakah yang memimpin Sekretariat Desa menurut Permendagri 84/2015?',
      options: ['Kepala Desa', 'Kepala Urusan Keuangan', 'Sekretaris Desa', 'Kepala Seksi Pemerintahan'],
      correctAnswerIndex: 2,
      explanation: 'Sekretariat Desa dipimpin oleh Sekretaris Desa (Sekdes) yang membantu Kepala Desa dalam seluruh bidang administrasi pemerintahan.'
    },
    {
      question: 'Unsur perangkat desa yang bertugas sebagai pelaksana teknis di lapangan adalah...',
      options: ['Kepala Dusun', 'Kepala Urusan', 'Kepala Seksi', 'Staf Ahli'],
      correctAnswerIndex: 2,
      explanation: 'Kepala Seksi (Kasi) bertugas sebagai pelaksana teknis lapangan, contohnya Kasi Kesejahteraan yang mengawal pembangunan fisik.'
    },
    {
      question: 'Kepala Urusan (Kaur) Perencanaan bertanggung jawab langsung kepada...',
      options: ['Kepala Desa', 'Sekretaris Desa', 'Ketua BPD', 'Camat'],
      correctAnswerIndex: 1,
      explanation: 'Seluruh Kepala Urusan (Kaur) berada di bawah koordinasi dan bertanggung jawab kepada Sekretaris Desa.'
    },
     {
      question: 'Mana yang BUKAN merupakan tugas pokok Kepala Desa?',
      options: ['Menyelenggarakan Pemerintahan Desa', 'Melaksanakan Pembangunan Desa', 'Menetapkan Anggaran Dasar BPD', 'Memberdayakan Masyarakat Desa'],
      correctAnswerIndex: 2,
      explanation: 'Anggaran Dasar BPD merupakan urusan internal BPD. Tugas Kepala Desa meliputi pemerintahan, pembangunan, pembinaan, dan pemberdayaan.'
    }
  ]
});

MOCK_QUIZZES.set('perdes_quiz', {
  id: 'perdes_quiz',
  title: 'Kuis Penyusunan Perdes',
  questions: [
    {
      question: 'Tahapan paling awal dalam siklus penyusunan Peraturan Desa (Perdes) adalah...',
      options: ['Pembahasan bersama BPD', 'Penetapan oleh Kepala Desa', 'Perencanaan melalui Propemperdes', 'Evaluasi oleh Camat'],
      correctAnswerIndex: 2,
      explanation: 'Proses penyusunan Perdes selalu diawali dengan Perencanaan yang dituangkan dalam Program Pembentukan Peraturan Desa (Propemperdes).'
    },
    {
      question: 'Rancangan Perdes tentang APBDes dan Pungutan wajib mendapatkan evaluasi dari Bupati/Walikota melalui...',
      options: ['Sekretaris Desa', 'Inspektorat', 'Camat', 'BPD'],
      correctAnswerIndex: 2,
      explanation: 'Camat bertindak sebagai perpanjangan tangan Bupati/Walikota untuk melakukan evaluasi dan klarifikasi terhadap Raperdes tertentu sebelum ditetapkan.'
    },
    {
      question: 'Di manakah Peraturan Desa diundangkan agar memiliki kekuatan hukum yang mengikat?',
      options: ['Papan Pengumuman Desa', 'Berita Acara Musyawarah', 'Lembaran Desa', 'Kantor Kecamatan'],
      correctAnswerIndex: 2,
      explanation: 'Perdes harus diundangkan dalam Lembaran Desa oleh Sekretaris Desa untuk resmi berlaku dan memiliki kekuatan hukum.'
    },
    {
      question: 'Kajian ilmiah mengenai latar belakang dan dampak dari sebuah Raperdes yang kompleks disebut...',
      options: ['Nota Dinas', 'Naskah Akademik', 'Kerangka Acuan Kerja', 'Draf Awal'],
      correctAnswerIndex: 1,
      explanation: 'Naskah Akademik adalah dokumen kajian yang wajib ada dalam penyusunan Raperdes yang bersifat kompleks dan strategis.'
    }
  ]
});

MOCK_QUIZZES.set('perkades_quiz', {
    id: 'perkades_quiz',
    title: 'Kuis Keputusan Kades',
    questions: [
      {
        question: 'Apa sifat utama dari sebuah Keputusan Kepala Desa (SK)?',
        options: ['Mengatur secara umum dan abstrak', 'Berlaku selamanya', 'Konkret, Individual, dan Final', 'Harus dibahas bersama BPD'],
        correctAnswerIndex: 2,
        explanation: 'Keputusan Kepala Desa bersifat penetapan (beschikking) yang Konkret (jelas objeknya), Individual (ditujukan ke orang tertentu), dan Final (sekali selesai).'
      },
      {
        question: 'Manakah contoh yang paling tepat untuk sebuah Keputusan Kepala Desa?',
        options: ['Peraturan tentang Pungutan Sampah', 'Pengangkatan Tim Pelaksana Kegiatan (TPK)', 'Rencana Pembangunan Jangka Menengah Desa', 'Tata Tertib Musyawarah Desa'],
        correctAnswerIndex: 1,
        explanation: 'Pengangkatan TPK adalah tindakan penetapan yang konkret dan individual, sehingga merupakan bentuk Keputusan Kepala Desa. Opsi lain adalah bentuk Peraturan (Perdes).'
      },
      {
        question: 'Perbedaan mendasar antara Perdes dan Perkades adalah...',
        options: ['Perdes ditandatangani Kades, Perkades oleh Sekdes', 'Perdes berlaku setahun, Perkades 6 tahun', 'Perdes wajib dibahas dengan BPD, Perkades tidak', 'Perdes untuk pembangunan, Perkades untuk pemerintahan'],
        correctAnswerIndex: 2,
        explanation: 'Perbedaan kunci terletak pada prosesnya. Perdes harus melalui pembahasan dan kesepakatan dengan BPD, sedangkan Perkades merupakan wewenang Kades untuk mengatur pelaksanaan Perdes.'
      },
       {
        question: 'Apakah pembuatan Keputusan Kepala Desa memerlukan persetujuan BPD?',
        options: ['Ya, selalu memerlukan persetujuan BPD', 'Hanya jika menyangkut anggaran', 'Tidak, karena ini wewenang penuh Kepala Desa', 'Ya, jika diperintahkan oleh Camat'],
        correctAnswerIndex: 2,
        explanation: 'Pembuatan Keputusan Kepala Desa (SK) adalah kewenangan atributif Kepala Desa dan tidak memerlukan proses pembahasan atau persetujuan dengan BPD.'
      }
    ]
});

MOCK_QUIZZES.set('keuangan_quiz', {
    id: 'keuangan_quiz',
    title: 'Kuis Keuangan Desa',
    questions: [
      {
        question: 'Siklus pengelolaan keuangan desa diatur secara spesifik dalam...',
        options: ['Permendagri No. 84 Tahun 2015', 'Permendagri No. 111 Tahun 2014', 'Permendagri No. 20 Tahun 2018', 'UU No. 6 Tahun 2014'],
        correctAnswerIndex: 2,
        explanation: 'Permendagri No. 20 Tahun 2018 secara spesifik mengatur tentang Pengelolaan Keuangan Desa, menggantikan peraturan sebelumnya.'
      },
      {
        question: 'Dana yang bersumber dari APBN dan ditransfer langsung ke Rekening Kas Desa disebut...',
        options: ['Pendapatan Asli Desa (PADesa)', 'Alokasi Dana Desa (ADD)', 'Dana Desa (DD)', 'Bagi Hasil Pajak (BHP)'],
        correctAnswerIndex: 2,
        explanation: 'Dana Desa (DD) adalah dana yang bersumber dari APBN, sedangkan Alokasi Dana Desa (ADD) bersumber dari APBD Kabupaten/Kota.'
      },
      {
        question: 'Pengeluaran untuk penyertaan modal kepada BUMDes dalam APBDes dikelompokkan sebagai...',
        options: ['Belanja Modal', 'Belanja Tak Terduga', 'Pengeluaran Pembiayaan', 'Pendapatan Desa'],
        correctAnswerIndex: 2,
        explanation: 'Penyertaan modal kepada BUMDes termasuk dalam kelompok Pengeluaran Pembiayaan karena merupakan investasi yang diharapkan akan memberikan hasil kembali.'
      },
      {
        question: 'Siapakah perangkat desa yang bertanggung jawab melakukan pencatatan harian dalam Buku Kas Umum (BKU)?',
        options: ['Bendahara Desa', 'Kepala Urusan Keuangan', 'Pelaksana Kegiatan Anggaran (PKA)', 'Sekretaris Desa'],
        correctAnswerIndex: 1,
        explanation: 'Kaur Keuangan bertanggung jawab atas seluruh proses penatausahaan, termasuk mencatat transaksi di BKU, Buku Kas Pembantu, dan Buku Bank.'
      }
    ]
});

MOCK_QUIZZES.set('administrasi_quiz', {
    id: 'administrasi_quiz',
    title: 'Kuis Administrasi Desa',
    questions: [
      {
        question: 'Buku yang digunakan untuk mencatat seluruh aset dan kekayaan milik desa adalah...',
        options: ['Buku Kas Umum', 'Buku Tanah Kas Desa', 'Buku Inventaris dan Kekayaan Desa', 'Buku Peraturan di Desa'],
        correctAnswerIndex: 2,
        explanation: 'Buku Inventaris dan Kekayaan Desa berfungsi untuk mencatat semua barang bergerak dan tidak bergerak yang dimiliki oleh desa secara sistematis.'
      },
      {
        question: 'Peristiwa kelahiran, kematian, pindah, dan datang dicatat dalam buku administrasi...',
        options: ['Buku Induk Penduduk', 'Buku Agenda', 'Buku Lembaran Desa', 'Buku Mutasi Penduduk'],
        correctAnswerIndex: 3,
        explanation: 'Buku Mutasi Penduduk secara khusus mencatat semua perubahan data kependudukan, yang menjadi dasar untuk memperbarui Buku Induk Penduduk.'
      },
      {
        question: 'Manakah yang termasuk dalam kategori Buku Administrasi Keuangan?',
        options: ['Buku Kader Pemberdayaan Masyarakat', 'Buku Rencana Kerja Pembangunan', 'Buku Kas Pembantu Pajak', 'Buku Aparat Pemerintah Desa'],
        correctAnswerIndex: 2,
        explanation: 'Buku Kas Pembantu Pajak, bersama Buku Kas Umum dan Buku Bank Desa, merupakan bagian krusial dari administrasi keuangan untuk pertanggungjawaban.'
      },
      {
        question: 'Dasar hukum utama yang mengatur tentang jenis-jenis administrasi desa adalah...',
        options: ['Permendagri No. 47 Tahun 2016', 'Permendagri No. 20 Tahun 2018', 'Permendagri No. 84 Tahun 2015', 'UU Desa No. 6 Tahun 2014'],
        correctAnswerIndex: 0,
        explanation: 'Permendagri No. 47 Tahun 2016 secara spesifik dan terperinci mengatur tentang Administrasi Pemerintahan Desa, termasuk format buku-bukunya.'
      }
    ]
});

MOCK_QUIZZES.set('pembangunan_quiz', {
    id: 'pembangunan_quiz',
    title: 'Kuis Perencanaan Pembangunan',
    questions: [
      {
        question: 'Dokumen perencanaan desa yang berlaku untuk jangka waktu 6 tahun dan selaras dengan visi misi Kepala Desa terpilih disebut...',
        options: ['RKPDes', 'APBDes', 'RPJMDes', 'DU-RKPDes'],
        correctAnswerIndex: 2,
        explanation: 'RPJMDes (Rencana Pembangunan Jangka Menengah Desa) adalah dokumen perencanaan strategis untuk 6 tahun.'
      },
      {
        question: 'Tahapan penjaringan aspirasi dari tingkat paling bawah dalam perencanaan pembangunan desa adalah...',
        options: ['Musyawarah Desa (Musdes)', 'Musyawarah Dusun (Musdus)', 'Rapat BPD', 'Musrenbang Kecamatan'],
        correctAnswerIndex: 1,
        explanation: 'Musdus (Musyawarah Dusun) adalah forum partisipatif di tingkat dusun atau RT/RW untuk menggali gagasan awal langsung dari masyarakat.'
      },
      {
        question: 'RKPDes merupakan penjabaran operasional tahunan dari...',
        options: ['APBDes', 'RPJMDes', 'Hasil Musdus', 'Peraturan Bupati'],
        correctAnswerIndex: 1,
        explanation: 'RKPDes (Rencana Kerja Pemerintah Desa) adalah rencana kerja tahunan yang harus mengacu dan menjabarkan program-program prioritas dalam RPJMDes.'
      },
      {
        question: 'Usulan kegiatan dari Musdes yang tidak terdanai oleh APBDes akan dimasukkan ke dalam...',
        options: ['Anggaran Tak Terduga', 'SILPA', 'Daftar Usulan RKPDes (DU-RKPDes)', 'Buku Mimpi'],
        correctAnswerIndex: 2,
        explanation: 'DU-RKPDes berfungsi sebagai "keranjang" usulan untuk dibawa ke forum Musrenbang Kecamatan, dengan harapan didanai oleh APBD.'
      }
    ]
});

MOCK_QUIZZES.set('bumdes_quiz', {
    id: 'bumdes_quiz',
    title: 'Kuis BUMDes',
    questions: [
      {
        question: 'Siapakah yang menjabat sebagai Penasihat BUMDes secara ex-officio?',
        options: ['Ketua BPD', 'Camat', 'Kepala Desa', 'Sekretaris Desa'],
        correctAnswerIndex: 2,
        explanation: 'Menurut peraturan, Kepala Desa secara ex-officio (karena jabatannya) bertindak sebagai Penasihat dalam struktur organisasi BUMDes.'
      },
      {
        question: 'Landasan hukum formal untuk pendirian BUMDes di tingkat desa adalah...',
        options: ['Keputusan Kepala Desa', 'Berita Acara Musdes', 'Peraturan Desa (Perdes)', 'Anggaran Dasar BUMDes'],
        correctAnswerIndex: 2,
        explanation: 'Pendirian BUMDes harus ditetapkan melalui Peraturan Desa (Perdes) yang disepakati bersama BPD, yang menjadi dasar hukum formalnya di desa.'
      },
      {
        question: 'Menurut PP No. 11 Tahun 2021, BUMDes kini memiliki status sebagai...',
        options: ['Lembaga Kemasyarakatan Desa', 'Unit Usaha Desa', 'Badan Hukum', 'Koperasi Desa'],
        correctAnswerIndex: 2,
        explanation: 'PP No. 11 Tahun 2021 memberikan status Badan Hukum kepada BUMDes, yang memberikannya kekuatan hukum untuk berkontrak dan berhubungan dengan pihak ketiga.'
      },
      {
        question: 'Mana yang BUKAN merupakan tujuan utama pendirian BUMDes?',
        options: ['Meningkatkan Pendapatan Asli Desa (PADesa)', 'Membuka lapangan kerja', 'Mengelola dana bantuan sosial dari pusat', 'Mengoptimalkan aset desa'],
        correctAnswerIndex: 2,
        explanation: 'Tujuan utama BUMDes adalah pengembangan ekonomi dan aset desa. Pengelolaan bansos (seperti BLT) biasanya dilakukan oleh pemerintah desa langsung, bukan sebagai kegiatan usaha BUMDes.'
      }
    ]
});

MOCK_QUIZZES.set('aset_quiz', {
    id: 'aset_quiz',
    title: 'Kuis Pengelolaan Aset Desa',
    questions: [
      {
        question: 'Peraturan Menteri Dalam Negeri (Permendagri) yang secara khusus mengatur tentang pengelolaan aset desa adalah...',
        options: ['Permendagri No. 20 Tahun 2018', 'Permendagri No. 1 Tahun 2016', 'Permendagri No. 84 Tahun 2015', 'Permendagri No. 111 Tahun 2014'],
        correctAnswerIndex: 1,
        explanation: 'Permendagri No. 1 Tahun 2016 adalah landasan hukum utama yang mengatur seluruh siklus pengelolaan aset milik desa.'
      },
      {
        question: 'Upaya untuk mensertifikatkan tanah kas desa adalah bentuk pengamanan aset secara...',
        options: ['Fisik', 'Administratif', 'Hukum', 'Swadaya'],
        correctAnswerIndex: 2,
        explanation: 'Pengamanan hukum bertujuan memberikan kepastian dan perlindungan hukum atas kepemilikan aset, contoh utamanya adalah sertifikasi tanah.'
      },
      {
        question: 'Pemanfaatan aset desa dalam bentuk penyewaan gedung balai desa kepada warga untuk acara pernikahan akan menghasilkan...',
        options: ['Dana Desa', 'Bantuan Keuangan', 'Pendapatan Asli Desa (PADesa)', 'Alokasi Dana Desa'],
        correctAnswerIndex: 2,
        explanation: 'Hasil dari pemanfaatan aset desa, seperti sewa, merupakan salah satu sumber utama Pendapatan Asli Desa (PADesa).'
      },
      {
        question: 'Manakah alasan yang paling tepat untuk melakukan penghapusan sebuah aset dari daftar inventaris?',
        options: ['Aset tersebut sudah lunas dibeli', 'Kepala Desa tidak menyukai aset tersebut', 'Aset sudah ketinggalan zaman (usang) dan biaya perbaikannya tidak ekonomis', 'Aset akan dipinjam oleh desa tetangga'],
        correctAnswerIndex: 2,
        explanation: 'Penghapusan dilakukan jika aset sudah tidak berfungsi optimal, rusak berat, atau biaya perbaikannya lebih mahal dari nilai manfaatnya (tidak ekonomis).'
      }
    ]
});

// --- MOCK DATA UNTUK GLOSARIUM ---

const MOCK_GLOSSARY_TERMS: GlossaryTerm[] = [
    { term: 'APBDes', definition: 'Anggaran Pendapatan dan Belanja Desa. Dokumen rencana keuangan tahunan pemerintah desa yang disetujui bersama oleh Kepala Desa dan BPD.', category: 'Keuangan' },
    { term: 'ADD', definition: 'Alokasi Dana Desa. Dana perimbangan yang diterima kabupaten/kota dalam APBD setelah dikurangi Dana Alokasi Khusus (DAK), yang dialokasikan ke setiap desa.', category: 'Keuangan' },
    { term: 'BPD', definition: 'Badan Permusyawaratan Desa. Lembaga yang melaksanakan fungsi pemerintahan yang anggotanya merupakan wakil dari penduduk desa berdasarkan keterwakilan wilayah.', category: 'Kelembagaan' },
    { term: 'BUMDes', definition: 'Badan Usaha Milik Desa. Badan usaha yang seluruh atau sebagian besar modalnya dimiliki oleh Desa melalui penyertaan secara langsung yang berasal dari kekayaan Desa yang dipisahkan.', category: 'Ekonomi' },
    { term: 'DD', definition: 'Dana Desa. Dana yang bersumber dari APBN yang diperuntukkan bagi desa yang ditransfer melalui APBD kabupaten/kota untuk membiayai penyelenggaraan pemerintahan, pembangunan, serta pemberdayaan masyarakat.', category: 'Keuangan' },
    { term: 'DU-RKPDes', definition: 'Daftar Usulan Rencana Kerja Pemerintah Desa. Daftar usulan kegiatan prioritas desa yang tidak dapat didanai oleh APBDes untuk diusulkan ke jenjang perencanaan yang lebih tinggi (Musrenbang Kecamatan).', category: 'Perencanaan' },
    { term: 'Kaur', definition: 'Kepala Urusan. Unsur staf di Sekretariat Desa yang membantu Sekretaris Desa dalam urusan spesifik seperti Keuangan, Perencanaan, atau Tata Usaha & Umum.', category: 'Kelembagaan' },
    { term: 'Kasi', definition: 'Kepala Seksi. Unsur pelaksana teknis di bawah Kepala Desa yang membantu dalam bidang spesifik seperti Pemerintahan, Kesejahteraan, atau Pelayanan.', category: 'Kelembagaan' },
    { term: 'Musdes', definition: 'Musyawarah Desa. Forum permusyawaratan tertinggi di desa untuk membahas dan menyepakati hal-hal yang bersifat strategis, seperti RPJMDes, Perdes, dan lainnya.', category: 'Perencanaan' },
    { term: 'Musdus', definition: 'Musyawarah Dusun. Forum partisipatif di tingkat dusun atau kelompok masyarakat untuk menggali gagasan dan merumuskan usulan kegiatan pembangunan.', category: 'Perencanaan' },
    { term: 'PADesa', definition: 'Pendapatan Asli Desa. Pendapatan yang bersumber dari dalam desa sendiri, seperti hasil usaha BUMDes, hasil aset (sewa tanah), pungutan desa, dan swadaya.', category: 'Keuangan' },
    { term: 'Perdes', definition: 'Peraturan Desa. Peraturan perundang-undangan yang ditetapkan oleh Kepala Desa setelah dibahas dan disepakati bersama BPD.', category: 'Hukum' },
    { term: 'Perkades', definition: 'Peraturan Kepala Desa. Peraturan yang ditetapkan oleh Kepala Desa sebagai aturan pelaksana dari Perdes atau kewenangan yang lebih tinggi.', category: 'Hukum' },
    { term: 'PKPKD', definition: 'Pelaksana Pengelolaan Keuangan Desa. Kepala Desa, Sekretaris Desa, Kaur, dan Kasi yang melaksanakan pengelolaan keuangan desa.', category: 'Keuangan' },
    { term: 'RKPDes', definition: 'Rencana Kerja Pemerintah Desa. Dokumen perencanaan tahunan yang merupakan penjabaran dari RPJMDes untuk jangka waktu satu tahun.', category: 'Perencanaan' },
    { term: 'RPJMDes', definition: 'Rencana Pembangunan Jangka Menengah Desa. Dokumen perencanaan strategis desa untuk jangka waktu 6 tahun, selaras dengan visi misi Kepala Desa.', category: 'Perencanaan' },
    { term: 'Siskeudes', definition: 'Sistem Keuangan Desa. Aplikasi yang dikembangkan BPKP untuk membantu desa dalam tata kelola keuangan desa, mulai dari perencanaan hingga pertanggungjawaban.', category: 'Keuangan' },
    { term: 'SOTK', definition: 'Struktur Organisasi dan Tata Kerja. Susunan kelembagaan pemerintah desa beserta pembagian tugas dan fungsinya.', category: 'Kelembagaan' },
    { term: 'Swakelola', definition: 'Pengadaan barang/jasa yang direncanakan, dikerjakan, dan/atau diawasi sendiri oleh Tim Pelaksana Kegiatan (TPK) sebagai penanggung jawab anggaran.', category: 'Pembangunan' },
    { term: 'TPK', definition: 'Tim Pelaksana Kegiatan. Tim yang dibentuk melalui Musdes untuk melaksanakan kegiatan pembangunan yang didanai dari APBDes, khususnya yang dilakukan secara swakelola.', category: 'Pembangunan' },
];


export { MOCK_LEARNING_CONTENT, MOCK_DRAFT_CONTENT, MOCK_QUIZZES, MOCK_GLOSSARY_TERMS };