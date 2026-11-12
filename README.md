# NalarKu — Aplikasi Pembelajaran Bentuk Akar

> Nama kerja *NalarKu* masih sementara.

Aplikasi web **mobile-first** yang bisa dipasang sebagai PWA, untuk membantu **siswa SMP kelas VIII** belajar **Bentuk Akar**. Aplikasi bisa dipakai di HP maupun browser laptop. Proyek ini adalah bagian dari tugas/penelitian S1 Pendidikan Matematika.

**Status:** tahap perencanaan selesai (dokumen v1.0). Aplikasi belum diimplementasikan. Kerangka kode di `src/` baru berupa scaffold awal.

## Masalah yang Diselesaikan

Wawancara dengan siswa kelas VIII menemukan bahwa siswa sudah bisa √25 dan √36, tetapi **bingung menentukan faktor kuadrat sempurna** saat menyederhanakan bentuk akar seperti √20 dan √50. Siswa juga merasa penjelasan di kelas terlalu cepat, dan ingin diberi petunjuk sedikit demi sedikit, bukan langsung jawabannya.

Tujuan aplikasi adalah **mengurangi beban kognitif (cognitive load)** yang tidak perlu supaya **literasi matematis** siswa meningkat.

## Materi MVP (dari mudah ke sulit)

1. Pengenalan Bentuk Akar
2. Pengertian Bentuk Akar
3. Sifat Dasar Bentuk Akar
4. Menentukan Faktor Kuadrat Sempurna ⭐
5. Menyederhanakan Bentuk Akar ⭐
6. Soal Cerita: Sisi Persegi dari Luas

## Fitur Utama

- Penjelasan bertahap (satu konsep per layar, siswa mengatur tempo sendiri)
- Contoh soal dengan langkah yang dibuka satu per satu
- Latihan bertahap dan latihan mandiri
- Pencari Faktor Kuadrat dan Tabel Kuadrat sebagai alat bantu
- Saat jawaban salah: umpan balik letak kesalahan dan **petunjuk bertahap**. Jawaban akhir tidak pernah langsung diberikan
- Pembahasan jawaban (lengkap setelah jawaban tepat; terpandu setelah petunjuk ke-3, dengan langkah terakhir tetap diisi siswa)
- Progres tersimpan di perangkat dan bisa dipakai offline

## Struktur Dokumen

| File | Isi |
|---|---|
| [CLAUDE.md](CLAUDE.md) | Aturan kerja dan prinsip proyek untuk asisten AI |
| [docs/INTERVIEW-NOTES.md](docs/INTERVIEW-NOTES.md) | Kutipan verbatim wawancara siswa dan temuannya |
| [docs/NEEDS-ANALYSIS.md](docs/NEEDS-ANALYSIS.md) | Analisis kesulitan belajar, analisis tugas, dan matriks keterlacakan kebutuhan → fitur |
| [docs/PRD.md](docs/PRD.md) | Kebutuhan produk: masalah, tujuan, persona, materi, fitur, dan risiko |
| [docs/PEDAGOGY.md](docs/PEDAGOGY.md) | Landasan teori: Cognitive Load Theory, literasi matematis, dan instrumen penelitian |
| [docs/DESIGN.md](docs/DESIGN.md) | Desain UI/UX: warna, tipografi, komponen, alur, dan wireframe |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Rancangan teknis: tech stack, model data, modul, dan routing |
| [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md) | Aturan menulis materi, soal, petunjuk, dan pembahasan |
| [docs/CONTENT-PLAN.md](docs/CONTENT-PLAN.md) | Rencana isi per subtopik: kartu, contoh, latihan, dan soal cerita |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Rencana kerja per fase beserta checklist |

## Tech Stack (rencana)

Vite · React 18 · TypeScript · Tailwind CSS · KaTeX · vite-plugin-pwa · IndexedDB. Detailnya ada di [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

```bash
npm install      # instal dependensi
npm run dev      # server pengembangan
npm run build    # build produksi
```
