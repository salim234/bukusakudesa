
import React from 'react';
import { Module } from './types.ts';

const StructureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const RegulationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const DecreeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const FinanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const AdminIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h4M8 7a2 2 0 012-2h4a2 2 0 012 2v8a2 2 0 01-2 2h-4a2 2 0 01-2-2z" />
    </svg>
);

const PlanningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
);

const BumdesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const PBJIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

const AsetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zM3 10h.01M21 10h.01M12 2a2 2 0 012 2v1.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V4a2 2 0 114 0v1.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V4a2 2 0 114 0v1.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V4a2 2 0 114 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945" />
    </svg>
);

export const MODULES: Module[] = [
  {
    id: 'sotk',
    title: 'Struktur Organisasi & Tata Kelola',
    description: 'Memahami SOTK pemerintah desa sesuai regulasi.',
    icon: <StructureIcon />,
    quizId: 'sotk_quiz',
    prompt: `Jelaskan secara detail dan komprehensif tentang Struktur Organisasi dan Tata Kelola (SOTK) Pemerintahan Desa di Indonesia berdasarkan Peraturan Menteri Dalam Negeri (Permendagri) Nomor 84 Tahun 2015. Gunakan format markdown.
    Mulai dengan pendahuluan singkat.
    Kemudian, buat bagian "Struktur Organisasi" dan sertakan bagan struktur dalam format teks/list jika memungkinkan.
    Selanjutnya, buat bagian "Tugas Pokok dan Fungsi (Tupoksi)" dan jelaskan secara rinci tupoksi dari setiap jabatan:
    - Kepala Desa
    - Sekretaris Desa
    - Kepala Urusan (Kaur), jelaskan setiap jenis Kaur (misal: Kaur Keuangan, Kaur Perencanaan, Kaur Tata Usaha dan Umum)
    - Kepala Seksi (Kasi), jelaskan setiap jenis Kasi (misal: Kasi Pemerintahan, Kasi Kesejahteraan, Kasi Pelayanan)
    - Kepala Dusun (Unsur Kewilayahan)
    Tutup dengan kesimpulan.`,
    draftPrompt: `Buatkan sebuah contoh draf lengkap "KEPUTUSAN KEPALA DESA [NAMA DESA]" tentang "PENETAPAN STRUKTUR ORGANISASI DAN TATA KERJA PEMERINTAH DESA". Gunakan format standar sebuah SK, termasuk KOP surat, judul, nomor, bagian menimbang, mengingat, memutuskan, menetapkan, dan diakhiri dengan tempat, tanggal, dan nama kepala desa. Isi bagian struktur organisasi dengan jabatan-jabatan sesuai Permendagri 84/2015.`
  },
  {
    id: 'perdes',
    title: 'Penyusunan Peraturan Desa',
    description: 'Prosedur dan tahapan pembuatan peraturan di desa.',
    icon: <RegulationIcon />,
    quizId: 'perdes_quiz',
    prompt: `Jelaskan secara lengkap dan sistematis mengenai tata cara penyusunan dan penetapan Peraturan Desa (Perdes) sesuai dengan Permendagri Nomor 111 Tahun 2014. Gunakan format markdown.
    Mulai dengan pendahuluan tentang apa itu Peraturan Desa dan landasan hukumnya.
    Buat bagian "Tahapan Penyusunan Perdes" dan jelaskan setiap langkahnya:
    1.  Perencanaan: Bagaimana proses penyusunan Program Legislasi Desa (Prolegdes).
    2.  Penyusunan: Siapa yang menyusun rancangan Perdes dan bagaimana prosesnya di tingkat pemerintah desa.
    3.  Pembahasan: Bagaimana proses pembahasan bersama Badan Permusyawaratan Desa (BPD).
    4.  Penetapan: Bagaimana proses penetapan oleh Kepala Desa.
    5.  Pengundangan: Bagaimana Perdes diundangkan dalam Lembaran Desa.
    Jelaskan juga peran BPD dan masyarakat dalam setiap tahapan. Berikan contoh judul Perdes yang umum dibuat.`,
    draftPrompt: `Buatkan sebuah contoh draf lengkap "PERATURAN DESA [NAMA DESA] NOMOR [NOMOR] TAHUN [TAHUN]" tentang "RENCANA PEMBANGUNAN JANGKA MENENGAH DESA (RPJMDes) TAHUN [TAHUN AWAL]-[TAHUN AKHIR]". Draf harus mencakup: Judul, Dengan Rahmat Tuhan Yang Maha Esa, Menimbang, Mengingat, Memutuskan, Menetapkan, beberapa pasal penting (Bab I Ketentuan Umum, Bab II Visi Misi, Bab III Arah Kebijakan Pembangunan, Bab IV Ketentuan Penutup).`
  },
  {
    id: 'perkades',
    title: 'Penyusunan Keputusan Kades',
    description: 'Proses pembuatan dan jenis keputusan kepala desa.',
    icon: <DecreeIcon />,
    quizId: 'perkades_quiz',
    prompt: `Jelaskan perbedaan mendasar antara Peraturan Desa (Perdes) dengan Peraturan Kepala Desa (Perkades) dan Keputusan Kepala Desa. Fokus pada penjelasan tentang Keputusan Kepala Desa. Gunakan format markdown.
    1.  Definisi: Jelaskan apa itu Keputusan Kepala Desa.
    2.  Sifat: Jelaskan sifatnya yang konkret, individual, dan final. Berikan contoh untuk memperjelas.
    3.  Fungsi: Apa fungsi utama dari Keputusan Kepala Desa? (misalnya untuk melaksanakan Perdes, pengangkatan pejabat, dll).
    4.  Proses Pembuatan: Bagaimana tahapan pembuatan Keputusan Kepala Desa? Apakah perlu dibahas bersama BPD?
    5.  Contoh: Berikan 5 contoh konkret judul Keputusan Kepala Desa yang sering diterbitkan. (Contoh: Keputusan Kepala Desa tentang Pengangkatan Tim Pelaksana Kegiatan, dll).`,
    draftPrompt: `Buatkan contoh draf "KEPUTUSAN KEPALA DESA [NAMA DESA]" tentang "PENGANGKATAN TIM PELAKSANA KEGIATAN (TPK) UNTUK KEGIATAN PEMBANGUNAN DRAINASE DUSUN [NAMA DUSUN]". Draf harus lengkap dari KOP surat hingga tanda tangan, termasuk bagian menimbang, mengingat, dan diktum keputusan yang berisi susunan personalia TPK (Ketua, Sekretaris, Anggota).`
  },
  {
    id: 'keuangan',
    title: 'Tata Kelola Keuangan Desa',
    description: 'Siklus pengelolaan keuangan desa (APBDes).',
    icon: <FinanceIcon />,
    quizId: 'keuangan_quiz',
    prompt: `Jelaskan siklus pengelolaan keuangan desa secara lengkap sesuai Permendagri Nomor 20 Tahun 2018. Gunakan format markdown dan jelaskan setiap tahapan dengan rinci.
    Mulai dengan pendahuluan tentang asas pengelolaan keuangan desa.
    Kemudian jelaskan siklus berikut:
    1.  Perencanaan: Proses penyusunan Anggaran Pendapatan dan Belanja Desa (APBDes).
    2.  Pelaksanaan: Bagaimana proses pencairan dan penggunaan anggaran.
    3.  Penatausahaan: Proses administrasi dan pembukuan keuangan.
    4.  Pelaporan: Bentuk-bentuk laporan keuangan desa.
    5.  Pertanggungjawaban: Bagaimana mekanisme pertanggungjawaban di akhir tahun anggaran.
    Sebutkan aplikasi yang sering digunakan untuk membantu pengelolaan keuangan desa (misalnya Siskeudes).`,
    draftPrompt: `Buatkan sebuah contoh draf sederhana "BUKU KAS BANTU KEGIATAN" untuk kegiatan "Pembangunan Posyandu". Buat dalam format tabel markdown yang berisi kolom: No, Tanggal, Uraian, Penerimaan (Rp), Pengeluaran (Rp), Saldo (Rp). Isi dengan 3-4 contoh transaksi fiktif (misal: terima dana dari Bendahara, beli semen, bayar upah tukang).`
  },
  {
    id: 'administrasi',
    title: 'Administrasi Desa',
    description: 'Jenis-jenis buku administrasi desa yang wajib ada.',
    icon: <AdminIcon />,
    quizId: 'administrasi_quiz',
    prompt: `Jelaskan mengenai administrasi pemerintahan desa sesuai dengan Permendagri Nomor 47 Tahun 2016 tentang Administrasi Pemerintahan Desa. Gunakan format markdown.
    Jelaskan tujuan dari administrasi desa.
    Kemudian, sebutkan dan jelaskan jenis-jenis buku administrasi desa yang wajib diselenggarakan oleh Pemerintah Desa, kelompokkan menjadi:
    1.  Buku Administrasi Umum (contoh: Buku Peraturan Desa, Buku Keputusan Kepala Desa, Buku Inventaris dan Kekayaan Desa, dll).
    2.  Buku Administrasi Kependudukan (contoh: Buku Induk Penduduk, Buku Mutasi Penduduk, dll).
    3.  Buku Administrasi Keuangan (contoh: Buku Kas Umum, Buku Kas Pembantu, Buku Bank Desa, dll).
    4.  Buku Administrasi Pembangunan (contoh: Buku Rencana Kerja Pembangunan Desa, Buku Kegiatan Pembangunan, dll).
    5.  Buku Administrasi Lainnya (contoh: Buku Administrasi BPD).
    Berikan penjelasan singkat untuk setiap buku mengenai fungsinya.`,
    draftPrompt: `Buatkan contoh format isian untuk "BUKU INVENTARIS DAN KEKAYAAN DESA" dalam format tabel markdown. Kolom-kolomnya meliputi: No, Jenis Barang/Bangunan, Kode Barang, Jumlah, Tahun Pengadaan, Asal Usul, Keadaan (Baik/Rusak Ringan/Rusak Berat), Keterangan. Isi dengan 2-3 contoh inventaris fiktif (misal: Laptop, Meja Kantor, Tanah Kas Desa).`
  },
  {
    id: 'pembangunan',
    title: 'Perencanaan Pembangunan Desa',
    description: 'Tahapan perencanaan pembangunan dari Musdus hingga RPJMDes.',
    icon: <PlanningIcon />,
    quizId: 'pembangunan_quiz',
    prompt: `Jelaskan secara runut dan detail tahapan perencanaan pembangunan desa sebagaimana diatur dalam Undang-Undang Nomor 6 Tahun 2014 tentang Desa dan peraturan pelaksananya. Gunakan format markdown.
    Mulai dari proses paling bawah (partisipatif):
    1.  Musyawarah Dusun (Musdus): Apa tujuannya dan apa outputnya?
    2.  Musyawarah Desa (Musdes) Perencanaan Pembangunan: Bagaimana usulan dari Musdus dibahas di tingkat desa?
    Kemudian, jelaskan tentang dokumen perencanaan:
    3.  Rencana Pembangunan Jangka Menengah Desa (RPJMDes): Apa itu, berapa jangka waktunya, dan bagaimana proses penyusunannya?
    4.  Rencana Kerja Pemerintah Desa (RKPDes): Apa itu, bagaimana kaitannya dengan RPJMDes, dan bagaimana proses penyusunannya?
    5.  Daftar Usulan RKPDes (DU-RKPDes): Apa fungsinya?
    Jelaskan bagaimana partisipasi masyarakat diakomodasi dalam setiap tahapan.`,
    draftPrompt: `Buatkan contoh draf "BERITA ACARA MUSYAWARAH DUSUN [NAMA DUSUN]" tentang "PENGGALIAN GAGASAN DALAM RANGKA PENYUSUNAN RKPDes TAHUN [TAHUN]". Draf harus memuat: hari dan tanggal, tempat, pimpinan musyawarah, peserta, dan yang paling penting, daftar usulan kegiatan dari masyarakat yang dibuat dalam format tabel (No, Bidang, Jenis Kegiatan, Perkiraan Volume, Sasaran Manfaat, Keterangan).`
  },
  {
    id: 'bumdes',
    title: 'Badan Usaha Milik Desa (BUMDes)',
    description: 'Konsep, pendirian, dan pengelolaan BUMDes untuk kemajuan ekonomi desa.',
    icon: <BumdesIcon />,
    quizId: 'bumdes_quiz',
    prompt: `Jelaskan secara komprehensif mengenai Badan Usaha Milik Desa (BUMDes) berdasarkan Undang-Undang Desa dan peraturan terkait. Gunakan format markdown.
    1.  **Pengertian dan Dasar Hukum:** Apa itu BUMDes dan apa landasan hukum utamanya?
    2.  **Tujuan Pendirian:** Jelaskan tujuan utama pendirian BUMDes bagi desa dan masyarakat.
    3.  **Jenis-jenis Usaha:** Berikan contoh jenis-jenis usaha yang dapat dijalankan oleh BUMDes (misalnya jasa keuangan, perdagangan, penyewaan, usaha bersama, dll).
    4.  **Tahapan Pendirian:** Jelaskan langkah-langkah pendirian BUMDes, mulai dari Musyawarah Desa, penyusunan Peraturan Desa, hingga pendaftaran.
    5.  **Struktur Organisasi:** Jelaskan struktur organisasi BUMDes yang umum, yaitu Penasihat, Pelaksana Operasional, dan Pengawas.
    6.  **Permodalan:** Dari mana saja sumber modal BUMDes dapat berasal?`,
    draftPrompt: `Buatkan contoh draf lengkap "PERATURAN DESA [NAMA DESA]" tentang "PENDIRIAN BADAN USAHA MILIK DESA (BUMDes) [NAMA BUMDES]". Draf harus mencakup bagian-bagian penting seperti: Menimbang, Mengingat, Bab Ketentuan Umum, Bab Maksud dan Tujuan, Bab Bentuk, Nama dan Tempat Kedudukan, Bab Modal, Bab Kepengurusan, Bab Hasil Usaha, dan Bab Ketentuan Penutup.`
  },
  {
    id: 'aset',
    title: 'Pengelolaan Aset Desa',
    description: 'Proses inventarisasi, pemanfaatan, dan penghapusan aset milik desa.',
    icon: <AsetIcon />,
    quizId: 'aset_quiz',
    prompt: `Jelaskan secara lengkap dan sistematis mengenai Pengelolaan Aset Desa berdasarkan Peraturan Menteri Dalam Negeri (Permendagri) Nomor 1 Tahun 2016. Gunakan format markdown.
    1.  **Pendahuluan**: Apa itu Aset Desa dan mengapa pengelolaannya penting?
    2.  **Klasifikasi Aset Desa**: Jelaskan pengelompokan aset desa (Aset Lancar, Investasi, Aset Tetap, dll).
    3.  **Siklus Pengelolaan Aset**: Jelaskan setiap tahapan berikut:
        - Perencanaan dan Pengadaan
        - Penggunaan dan Pemanfaatan (jelaskan perbedaan sewa dan kerjasama pemanfaatan)
        - Pengamanan (jelaskan 3 jenis pengamanan: fisik, administrasi, hukum)
        - Pemeliharaan
        - Penatausahaan (termasuk inventarisasi dan kodefikasi)
        - Penghapusan (jelaskan alasan dan prosedurnya)
        - Pelaporan`,
    draftPrompt: `Buatkan contoh draf "BERITA ACARA PENGHAPUSAN BARANG MILIK DESA". Draf harus memuat KOP surat, dasar hukum, dan tabel yang berisi daftar barang yang dihapuskan (No, Jenis Barang, Kode Barang, Tahun Perolehan, Jumlah, Kondisi Terakhir, Keterangan/Alasan Penghapusan). Isi dengan contoh barang fiktif seperti mesin tik tua atau komputer rusak berat.`
  }
];
