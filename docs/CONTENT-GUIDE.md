# CONTENT-GUIDE.md — Panduan Menulis Materi & Soal

Panduan ini untuk pemilik proyek (penulis konten), supaya semua materi konsisten dan sesuai prinsip beban kognitif.

## 1. Struktur Satu Topik

1. **Kata Kunci** (2–5 istilah): pre-training
2. **Kartu Mikro** (4–8 kartu): 1 konsep per kartu
3. **Contoh Soal Lengkap** (2 buah): bilangan/konteks yang berbeda
4. **Latihan Fading** (2 buah): fadeLevel 1 lalu 2
5. **Latihan Mandiri** (3–5 buah): tanpa langkah terisi. Pemandu 4 Langkah **hanya** dipakai di subtopik 6 (soal cerita)
6. **Kartu Rumus**: semua rumus topik

Setiap soal latihan (fading maupun mandiri) wajib punya **petunjuk 3 tingkat**, **≥ 1 miskonsepsi**, dan **pembahasan** (lihat §5b).

Daftar isi per subtopik (bilangan yang dipakai, contoh, latihan) ada di [CONTENT-PLAN.md](CONTENT-PLAN.md).

## 2. Aturan Kartu Mikro

- Maksimal **40 kata** teks per kartu.
- Maksimal **1 visual** per kartu, dan labelnya ditaruh **di dalam** visual.
- Satu kartu hanya memuat satu ide. Kalau perlu kata "dan juga", pecah jadi dua kartu.
- Hindari mengulang informasi yang sudah jelas dari gambar.

## 3. Aturan Soal Cerita

- Panjang stem **≤ 60 kata** untuk latihan awal, ≤ 100 kata untuk latihan mandiri tingkat akhir.
- Kalimat pendek (≤ 15 kata per kalimat).
- Konteks harus **dikenal siswa Indonesia** (kebun sekolah, ubin kelas, lapangan, taman).
- Tulis angka dengan format Indonesia: **2,5 m**, **48 m²**. Desimal memakai koma.
- Konteks MVP hanya **sisi persegi dari luasnya** (kebun, ubin, lapangan, taman). Diagonal dan Teorema Pythagoras tidak dipakai (tidak ada di wawancara).
- Soal dibuat **pendek**; siswa lebih mudah dengan soal langsung (EL01).
- Pada tahap awal **tidak ada info pengecoh**. Info pengecoh baru dimasukkan di latihan mandiri tingkat akhir, karena memilah informasi adalah bagian dari literasi.
- Setiap soal cerita wajib punya: `highlights`, minimal **3 petunjuk berjenjang**, minimal **1 miskonsepsi** beserta umpan baliknya, dan **pembahasan** per langkah ①–④.

## 4. Menulis Petunjuk Berjenjang

| Tingkat | Isi | Contoh |
|---|---|---|
| 1 — Arah | Mengarahkan perhatian tanpa memberi cara | "Cari bilangan kuadrat (4, 9, 16, 25, 36, …) yang bisa membagi 72." |
| 2 — Langkah | Memberi langkah konkret | "Pilih yang terbesar: 72 = 36 × 2." |
| 3 — Contoh serupa | Soal mirip yang sudah selesai (bukan jawaban soal ini) | "√50 = √(25 × 2) = 5√2" |

Petunjuk muncul **satu tingkat setiap kali jawaban belum tepat** (DS02). Ketiga tingkat **tidak boleh** memuat jawaban akhir soal itu (GL03).

## 5. Menulis Umpan Balik Miskonsepsi

Pola: **[Apa yang kamu lakukan] + [Mengapa itu belum tepat] + [Arah perbaikan]**

> "Kamu menulis 2√18. Nilainya sudah sama dengan √72, tapi 18 masih punya faktor kuadrat 9. Coba pakai faktor kuadrat yang lebih besar."

Pakai kode kesalahan M1–M3 dari [PRD.md §6.1](PRD.md) supaya data kesalahan bisa direkap.

## 5b. Menulis Pembahasan (F13)

- Pembahasan adalah penyelesaian **soal itu sendiri**, lengkap dari awal sampai akhir.
- Satu langkah = satu baris, dengan alasan singkat (≤ 15 kata). Contoh: "Pilih 36 karena paling besar di antara 4, 9, 36."
- Langkah terakhir selalu **mengecek** hasil: "2 tidak punya faktor kuadrat lagi, jadi 6√2 sudah paling sederhana."
- Jangan menyalin isi petunjuk tingkat 3. Petunjuk memakai soal serupa, pembahasan memakai soal ini.
- Tandai langkah terakhir (`final: true`) supaya pada mode terpandu langkah itu menjadi kotak isian untuk siswa, bukan ditampilkan.

## 5a. Aturan Khusus Bentuk Akar

- Urutan soal latihan menyederhanakan: dimulai dari bilangan yang **faktor kuadratnya hanya satu** (√12, √20, √50), baru ke bilangan dengan **beberapa faktor kuadrat** (√48, √72). Bilangan jenis kedua inilah sumber kesalahan M1.
- Isi akar pada latihan MVP dibatasi ≤ 300 supaya Pencari Faktor tetap ringkas.
- Simbol √ di teks ditulis memakai KaTeX (`\sqrt{72}`), tidak memakai karakter biasa, supaya garis atasnya jelas.

## 6. Checklist Sebelum Konten Dipublikasikan

- [ ] Jawaban sudah dihitung ulang
- [ ] Jawaban akhir sudah dalam bentuk paling sederhana (isi akar tidak punya faktor kuadrat > 1)
- [ ] Penanda (diketahui/ditanya/satuan) sudah diisi (khusus soal cerita)
- [ ] Ada 3 petunjuk, ≥ 1 miskonsepsi, dan pembahasan
- [ ] Bahasa sudah dibaca oleh 1 siswa sasaran (uji keterbacaan)
- [ ] Konteks mengandung/tidak bertentangan dengan nilai Pancasila
- [ ] Sudah divalidasi dosen/ahli materi
