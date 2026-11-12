# ROADMAP.md — Rencana Pengerjaan

Perkiraan waktu: ±8 minggu kerja paruh waktu. Sesuaikan dengan jadwal kuliah.

## Fase 0 — Analisis & Perencanaan (Minggu 1)
- [x] Draf dokumen perencanaan (CLAUDE.md, PRD, DESIGN, ARCHITECTURE, PEDAGOGY, CONTENT-GUIDE)
- [x] Hasil wawancara dimasukkan ke INTERVIEW-NOTES.md
- [x] Perbarui bagian [ASUMSI] di PRD (v0.2)
- [x] Tetapkan jenjang (SMP kelas VIII) dan materi (Bentuk Akar)
- [x] Sinkronisasi dokumen v0.3: tambah F13 Pembahasan, perbaiki ketidakkonsistenan antardokumen
- [x] Analisis kebutuhan & kesulitan belajar (NEEDS-ANALYSIS.md)
- [x] Rencana isi materi per subtopik (CONTENT-PLAN.md)
- [x] Kutipan verbatim wawancara di INTERVIEW-NOTES §2 (v0.4)
- [x] Sinkronisasi v0.4: petunjuk bertahap saat salah, tanpa batas 2×; hapus diagonal/Pythagoras/M5
- [x] Finalisasi perencanaan v1.0: 6 subtopik MVP, pembahasan terpandu, README
- [ ] Konsultasi dengan dosen pembimbing

## Fase 1 — Fondasi (Minggu 2)
- [x] Scaffold Vite + React + TS + Tailwind (file dibuat; menunggu Node.js untuk `npm install` & uji jalan)
- [x] Pasang design token (warna terang/gelap, tipografi) dari DESIGN.md
- [x] Routing dan layout dasar mobile-first
- [x] Halaman Peta Materi Bentuk Akar (F1)
- [ ] Sesuaikan `src/content/topics.ts` dengan 6 subtopik MVP (PRD v1.0 §5); scaffold lama masih memakai 7 subtopik
- [ ] Skema konten (Zod) + content loader
- [ ] Deploy awal ke Vercel/Netlify

## Fase 2 — Inti Pembelajaran (Minggu 3–4)
- [ ] `lib/radical.ts` + unit test (faktor, kuadrat sempurna terbesar, sederhanakan)
- [ ] Kartu Mikro (F2)
- [ ] Contoh Soal StepReveal (F3)
- [ ] RadicalInput + Answer Checker + deteksi M1–M3
- [ ] Latihan Fading (F4)

## Fase 3 — Bantuan & Umpan Balik (Minggu 5)
- [ ] Pencari Faktor Kuadrat (F9)
- [ ] Tabel Kuadrat bottom sheet (F10)
- [ ] Petunjuk Bertahap (F7)
- [ ] Umpan Balik Letak Kesalahan (F8)
- [ ] Pembahasan Jawaban / SolutionPanel (F13): mode lengkap & terpandu
- [ ] Pemandu Soal Cerita 4 Langkah + Penyorot (F5, F6)

## Fase 4 — Data & Offline (Minggu 6)
- [ ] Progres lokal Dexie (F12)
- [ ] Cek Beban Paas (F11)
- [ ] Ekspor CSV
- [ ] PWA + offline (F12)

## Fase 5 — Konten & Validasi (Minggu 7)
- [ ] Konten 6 subtopik MVP sesuai CONTENT-PLAN dan CONTENT-GUIDE (termasuk pembahasan tiap soal)
- [ ] Validasi ahli materi & ahli media
- [ ] Revisi

## Fase 6 — Uji Coba (Minggu 8)
- [ ] Uji keterbacaan dengan 1–3 siswa
- [ ] Uji coba kelompok kecil + angket SUS
- [ ] Lighthouse & uji di HP spesifikasi rendah
- [ ] Revisi akhir
