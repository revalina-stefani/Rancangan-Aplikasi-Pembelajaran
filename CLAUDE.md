# CLAUDE.md — Panduan Proyek untuk Asisten AI

> File ini dibaca otomatis oleh Claude Code setiap sesi. Isinya aturan kerja, konteks, dan konvensi proyek.
> Baca juga: [docs/PRD.md](docs/PRD.md), [docs/NEEDS-ANALYSIS.md](docs/NEEDS-ANALYSIS.md), [docs/DESIGN.md](docs/DESIGN.md), [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md), [docs/PEDAGOGY.md](docs/PEDAGOGY.md), [docs/CONTENT-PLAN.md](docs/CONTENT-PLAN.md).

## 1. Ringkasan Proyek

**Nama kerja:** *NalarKu*. Nama ini sementara dan bisa diganti.
**Pemilik:** Mahasiswa S1 Pendidikan Matematika. Proyek ini bagian dari tugas/penelitian akademik.
**Apa:** Aplikasi web pembelajaran matematika yang **mobile-first** dan bisa dipasang sebagai PWA, sehingga jalan di browser HP maupun laptop.
**Tujuan utama:** Mengurangi **beban kognitif (cognitive load)** siswa yang tidak perlu supaya **literasi matematis (mathematical literacy)** mereka meningkat.
**Sasaran & materi MVP:** Siswa **SMP kelas VIII**, materi **Bentuk Akar**. Fokus utamanya membantu siswa **menentukan faktor kuadrat sempurna terbesar** saat menyederhanakan akar. Materi MVP (6 subtopik): pengenalan bentuk akar, pengertian bentuk akar, sifat dasar, menentukan faktor kuadrat sempurna, menyederhanakan bentuk akar, dan soal cerita pendek (sisi persegi dari luas) (dari hasil wawancara, lihat docs/INTERVIEW-NOTES.md).
**Fitur inti (dari analisis kebutuhan):** materi dengan penjelasan bertahap, contoh soal + langkah penyelesaian, petunjuk bertahap, latihan mandiri, umpan balik saat jawaban salah, dan pembahasan jawaban. Daftar lengkap F1–F13 ada di PRD §6.

## 2. Prinsip yang TIDAK boleh dilanggar

1. **Pedagogi dulu, fitur kemudian.** Setiap layar dan konten harus mengikuti prinsip Cognitive Load Theory di [docs/PEDAGOGY.md](docs/PEDAGOGY.md). Kalau ada fitur yang menambah beban ekstrinsik (animasi berlebihan, info ganda, terlalu banyak pilihan), jangan dibuat.
2. **Mobile-first.** Desain dan uji pertama kali di lebar layar 360px. Target sentuh minimal 44×44px.
3. **Satu langkah, satu layar.** Materi dipecah jadi segmen kecil (segmenting). Jangan menaruh lebih dari satu konsep baru dalam satu kartu.
4. **Teks dan gambar yang saling terkait harus berdekatan** (hindari split-attention). Label langsung ditempel di diagram, bukan di legenda terpisah.
5. **Ringan dan bisa offline.** Siswa mungkin memakai HP spesifikasi rendah dengan kuota terbatas. Bundle JS awal maksimal ~200 KB gzip, dan konten yang sudah dibuka harus tetap bisa dipakai offline.
6. **Bahasa Indonesia** untuk seluruh UI dan konten. Gunakan bahasa yang sederhana sesuai jenjang siswa, kalimat pendek, dan kalimat aktif.
7. **Coba dulu, jawaban tidak diberikan langsung.** Saat siswa salah, berikan umpan balik letak kesalahan dan petunjuk bertahap (arah → langkah → contoh serupa). Jawaban akhir tidak pernah ditampilkan sebelum siswa menemukannya sendiri (wawancara GL03, DS02).
8. **Privasi siswa.** Tidak mengumpulkan data pribadi selain yang benar-benar diperlukan. Pada MVP progres disimpan lokal di perangkat.

## 3. Tech Stack (ringkas — detail di ARCHITECTURE.md)

- **Vite + React 18 + TypeScript**
- **Tailwind CSS** untuk styling
- **KaTeX** untuk menampilkan rumus matematika
- **vite-plugin-pwa** untuk PWA dan mode offline
- **IndexedDB** (lewat `idb-keyval` atau Dexie) untuk menyimpan progres di perangkat
- Konten materi dan soal ditulis sebagai data (TS/JSON) di folder `src/content/`, terpisah dari komponen UI
- Deploy ke Vercel / Netlify / GitHub Pages

## 4. Struktur Folder (rencana)

```
/
├── README.md
├── CLAUDE.md
├── docs/                 # semua dokumen perencanaan
├── src/content/          # materi & soal (TS/JSON) — diedit oleh pemilik proyek
│   ├── topics.ts         # daftar subtopik peta materi
│   └── problems/
├── public/               # ikon PWA, manifest, gambar statis
└── src/
    ├── components/       # komponen UI kecil & reusable
    ├── features/         # per fitur: lesson, practice, progress, scaffold
    ├── lib/              # util (penilaian jawaban, storage, katex helper)
    ├── pages/            # halaman/route
    └── styles/
```

## 5. Konvensi Kode

- TypeScript `strict: true`. Hindari `any`.
- Komponen ditulis sebagai function component dengan hooks. Nama komponen PascalCase, nama file sama dengan nama komponen.
- Nama variabel dan fungsi dalam **bahasa Inggris**. Teks yang tampil ke pengguna dalam **bahasa Indonesia** dan dikumpulkan di `src/lib/strings.ts`, tidak di-hardcode di banyak tempat.
- Komponen sebaiknya di bawah ~150 baris. Kalau lebih panjang, pecah.
- Jangan menambah dependensi besar tanpa alasan yang ditulis di commit message.
- Aksesibilitas: setiap gambar diberi `alt`, kontras warna minimal WCAG AA, dan elemen bisa diakses lewat keyboard.

## 6. Perintah (diisi setelah proyek di-scaffold)

```bash
npm install        # instal dependensi
npm run dev        # server pengembangan
npm run build      # build produksi
npm run preview    # pratinjau build
npm run lint       # cek kode
npm run test       # unit test (Vitest)
```

## 7. Cara Bekerja dengan Asisten AI

- Sebelum membuat fitur baru, cek PRD untuk memastikan fitur itu ada di lingkup MVP.
- Saat membuat konten soal, ikuti template di [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md).
- Kalau ada keputusan desain yang bertentangan dengan dokumen, **tanyakan dulu ke pemilik proyek** dan jangan langsung mengubahnya.
- Setelah perubahan selesai, perbarui checklist di [docs/ROADMAP.md](docs/ROADMAP.md).
