# CONTENT-PLAN.md — Rencana Isi Materi per Subtopik

> Dokumen ini berisi **rencana** isi materi: urutan kartu, bilangan yang dipakai, dan daftar soal.
> Aturan menulisnya ada di [CONTENT-GUIDE.md](CONTENT-GUIDE.md). Naskah lengkap baru ditulis ke `src/content/` saat tahap implementasi.
> Semua jawaban di bawah sudah dihitung ulang. Tetap minta validasi ahli materi sebelum dipakai.

**Versi:** 1.0 · **Tanggal:** 12 November 2026

---

## Ringkasan (urutan mudah → sulit)

| No | Subtopik | Kartu mikro | Contoh | Latihan fading | Latihan mandiri | Kode kesalahan |
|---|---|---|---|---|---|---|
| 1 | Pengenalan Bentuk Akar | 3 | 1 | — | 4 | — |
| 2 | Pengertian Bentuk Akar | 3 | 2 | — | 4 | — |
| 3 | Sifat Dasar Bentuk Akar | 3 | 2 | 1 | 3 | — |
| 4 | Menentukan Faktor Kuadrat Sempurna ⭐ | 4 | 2 | 2 | 4 | M1, M2 |
| 5 | Menyederhanakan Bentuk Akar ⭐ | 4 | 2 | 2 | 5 | M1, M2, M3 |
| 6 | Soal Cerita: Sisi Persegi dari Luas | 2 | 1 | — | 2 | M1, M3 |

Subtopik 1–2 sudah dikuasai sebagian oleh siswa (√25, √36), jadi dibuat singkat dan siswa langsung mencoba sendiri (DS02). Subtopik 3–5 dijelaskan pelan-pelan (EL04, DS02).

Setiap soal latihan memiliki 3 petunjuk berjenjang, umpan balik kesalahan, dan pembahasan dengan langkah terakhir bertanda `final`. Pada mode terpandu, langkah terakhir itu diisi siswa.

---

## Subtopik 1 — Pengenalan Bentuk Akar

**Tujuan:** mengingat kuadrat dan akar kuadrat bilangan kuadrat sempurna 1–225.
**Kata kunci:** kuadrat, kuadrat sempurna, akar kuadrat.

**Kartu mikro**
1. Kuadrat artinya bilangan dikali dirinya sendiri: 5² = 5 × 5 = 25.
2. Akar kuadrat adalah kebalikannya: √25 = 5, karena 5² = 25.
3. Bilangan 1, 4, 9, 16, 25, …, 225 disebut **kuadrat sempurna**. Tabel Kuadrat bisa dibuka lewat tombol (F10).

**Contoh:** √25 = 5
**Mandiri:** √36 = 6 · √64 = 8 · √121 = 11 · √196 = 14

## Subtopik 2 — Pengertian Bentuk Akar

**Tujuan:** membedakan akar yang hasilnya bulat dan yang berupa bentuk akar.
**Kata kunci:** bentuk akar.

**Kartu mikro**
1. √49 = 7. Hasilnya bulat, karena 49 kuadrat sempurna.
2. √50 tidak bulat, karena 50 bukan kuadrat sempurna. √50 disebut **bentuk akar**.
3. √50 terletak di antara √49 = 7 dan √64 = 8.

**Contoh:** √49 (bulat) · √20 (bentuk akar, di antara 4 dan 5)
**Mandiri (pilihan "bulat" / "bentuk akar"):** √81 · √30 · √100 · √12

## Subtopik 3 — Sifat Dasar Bentuk Akar

**Tujuan:** memahami dua sifat yang dipakai untuk menyederhanakan.
**Kata kunci:** sifat perkalian akar.

**Kartu mikro**
1. √(a²) = a. Contoh: √(6²) = 6.
2. √(a × b) = √a × √b. Contoh: √(4 × 9) = √4 × √9 = 2 × 3 = 6, sama dengan √36.
3. Sifat ini membuat √20 bisa ditulis √(4 × 5) = √4 × √5.

**Contoh:** √(4 × 9) = 6 · √(4 × 5) = 2 × √5
**Fading:** √(9 × 2) = √9 × √2 = 3 × √2
**Mandiri:** √(25 × 2) = □ × √2 · √(4 × 3) = □ × √3 · √(16 × 3) = □ × √3 (jawaban: 5, 2, 4)

## Subtopik 4 — Menentukan Faktor Kuadrat Sempurna ⭐

**Tujuan:** menemukan faktor kuadrat sempurna **terbesar** dari sebuah bilangan (IL01, IL04).
**Kata kunci:** faktor, faktor kuadrat sempurna.

**Kartu mikro**
1. Faktor 20: 1, 2, 4, 5, 10, 20.
2. Faktor yang juga kuadrat sempurna: 4 (dan 1). Jadi faktor kuadrat sempurna dari 20 adalah 4.
3. Kadang ada lebih dari satu. Faktor kuadrat dari 72: 4, 9, 36.
4. Pilih yang **terbesar** (36), supaya cukup satu kali menyederhanakan.

| Bagian | Bilangan | Faktor kuadrat (> 1) | Terbesar | Pencari Faktor |
|---|---|---|---|---|
| Contoh 1 | 20 | 4 | 4 | Penuh |
| Contoh 2 | 72 | 4, 9, 36 | 36 | Penuh |
| Fading 1 | 18 | 9 | 9 | Penuh |
| Fading 2 | 50 | 25 | 25 | Sebagian |
| Mandiri 1 | 12 | 4 | 4 | Lewat tombol |
| Mandiri 2 | 45 | 9 | 9 | Lewat tombol |
| Mandiri 3 | 48 | 4, 16 | 16 | Lewat tombol |
| Mandiri 4 | 80 | 4, 16 | 16 | Lewat tombol |

**Umpan balik:** memilih 4 untuk 48 → "4 memang faktor kuadrat, tapi masih ada yang lebih besar." (M1) · memilih 8 untuk 72 → "8 bukan kuadrat sempurna." (M2)

## Subtopik 5 — Menyederhanakan Bentuk Akar ⭐

**Tujuan:** menyederhanakan √n = a√b dan mengecek hasilnya.
**Kata kunci:** bentuk akar sederhana.

**Kartu mikro**
1. Langkah 1: cari faktor kuadrat sempurna terbesar (subtopik 4). 20 = 4 × 5.
2. Langkah 2: pakai sifat akar. √20 = √4 × √5.
3. Langkah 3: yang keluar adalah **akarnya**: √4 = 2, jadi 2√5 (bukan 4√5).
4. Langkah 4: cek isi akar. Kalau masih punya faktor kuadrat, belum selesai.

| Bagian | Soal | Faktor kuadrat (> 1) | Jawaban | Tipe | Pencari Faktor |
|---|---|---|---|---|---|
| Contoh 1 | √20 | 4 | 2√5 | A | Penuh |
| Contoh 2 | √72 | 4, 9, 36 | 6√2 | B | Penuh |
| Fading 1 | √12 | 4 | 2√3 | A | Penuh |
| Fading 2 | √50 | 25 | 5√2 | A | Sebagian |
| Mandiri 1 | √18 | 9 | 3√2 | A | Lewat tombol |
| Mandiri 2 | √45 | 9 | 3√5 | A | Lewat tombol |
| Mandiri 3 | √48 | 4, 16 | 4√3 | B | Lewat tombol |
| Mandiri 4 | √80 | 4, 16 | 4√5 | B | Lewat tombol |
| Mandiri 5 | √200 | 4, 25, 100 | 10√2 | B | Lewat tombol |

Tipe A = satu faktor kuadrat; Tipe B = beberapa faktor kuadrat, angka besar (sumber M1, sesuai K01).

**Miskonsepsi (contoh √48):** M1: 2√12 · M2: 3√16 · M3: 16√3

**Contoh alur saat salah (√48, siswa menjawab 2√12)**
1. Umpan balik M1 + petunjuk 1: "Cari bilangan kuadrat (4, 9, 16, …) yang membagi 48."
2. Masih salah → petunjuk 2: "Pilih yang terbesar: 48 = 16 × 3."
3. Masih salah → petunjuk 3: "Contoh serupa: √50 = √(25 × 2) = 5√2."
4. Masih salah → pembahasan terpandu: ① faktor kuadrat 4, 16 → ② pilih 16 → ③ √16 × √3 → ④ `√48 = [ ] √[ ]` **diisi siswa**.

## Subtopik 6 — Soal Cerita: Sisi Persegi dari Luas

**Tujuan:** memakai bentuk akar dalam konteks nyata dengan Pemandu 4 Langkah (F5) dan Penyorot (F6). Soal pendek (EL01).

**Kartu mikro**
1. Sisi persegi = √luas. Luas 20 cm² → sisi √20 cm.
2. Langkah ④ Tafsirkan: perkirakan nilainya. 2√5 ≈ 4,5, dan 4² < 20 < 5², jadi masuk akal.

| Bagian | Konteks (nilai Pancasila) | Model | Jawaban | Tafsiran |
|---|---|---|---|---|
| Contoh | Ubin persegi untuk lantai kelas, luas 20 cm². Berapa panjang sisinya? (gotong royong) | s = √20 | 2√5 cm | ≈ 4,5 cm |
| Mandiri 1 | Kebun sekolah persegi seluas 48 m², dirawat bersama tiap kelas. Berapa sisinya? (gotong royong) | s = √48 | 4√3 m | ≈ 6,9 m |
| Mandiri 2 | Lantai musala persegi seluas 72 m², dibagi adil untuk kerja bakti. Berapa sisinya? (keadilan) | s = √72 | 6√2 m | ≈ 8,5 m |

Bilangan sengaja sama dengan latihan subtopik 5, supaya siswa fokus memahami konteks.

## Kartu Rumus (F10)

- Tabel 1² sampai 15²
- √(a²) = a
- √(a × b) = √a × √b
- Sisi persegi = √luas

## Post-MVP (tidak ditulis sekarang)

- Penjumlahan & pengurangan (√12 + √27, kode M4)
- Perkalian & pembagian, termasuk luas persegi dengan sisi 3√2 cm (artefak EL01)
- Merasionalkan penyebut
