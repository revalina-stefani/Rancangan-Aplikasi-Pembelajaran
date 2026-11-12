# PEDAGOGY.md — Landasan Pedagogis

Dokumen ini menjelaskan **mengapa** aplikasi dirancang seperti ini. Semua keputusan desain dan konten harus bisa ditelusuri ke prinsip di sini.

## 1. Cognitive Load Theory (CLT)

Memori kerja hanya mampu mengolah sekitar 4 ± 1 elemen informasi baru sekaligus. CLT membagi beban menjadi tiga jenis:

| Jenis beban | Sumber | Strategi aplikasi |
|---|---|---|
| **Intrinsik** | Kompleksitas materi itu sendiri (jumlah elemen yang saling terkait) | **Kelola**: urutkan dari yang sederhana ke kompleks dan pecah materi jadi segmen kecil |
| **Ekstrinsik** | Cara penyajian yang buruk | **Kurangi sebisa mungkin**: ini target utama aplikasi |
| **Germane** | Usaha membangun skema/pemahaman | **Dorong**: self-explanation, variasi konteks |

### 1.1 Efek CLT dan Penerapannya

| Efek / Prinsip | Artinya | Implementasi di aplikasi |
|---|---|---|
| **Worked Example** | Pemula belajar lebih baik dari contoh yang sudah diselesaikan daripada langsung memecahkan soal | Fitur F3: setiap topik dimulai dengan 2 contoh lengkap. Fitur F13: pembahasan lengkap setelah siswa mencoba |
| **Completion / Fading** | Langkah dalam contoh dihilangkan bertahap | Fitur F4: contoh penuh → 1 langkah kosong → 2 langkah kosong → mandiri |
| **Split-Attention** | Info yang harus dipadukan jangan dipisah | Label ditaruh di dalam diagram, rumus ditampilkan di samping langkah yang memakainya |
| **Redundancy** | Info yang sama dalam dua bentuk justru membebani | Jangan menampilkan teks plus narasi identik. Jangan mengulang soal di setiap langkah, cukup ringkasannya |
| **Segmenting** | Materi panjang dipecah dan tempo diatur siswa | Kartu mikro (F2), tombol "Lanjut" ditekan siswa sendiri |
| **Signaling** | Menyorot bagian penting | Soal cerita: warna konsisten untuk data, pertanyaan, satuan (F6). Pencari Faktor: faktor kuadrat terbesar disorot (F9) |
| **Pre-training** | Kenalkan istilah sebelum materi inti | Kartu "Kata Kunci" di awal topik |
| **Modality** | Diagram dengan narasi audio lebih ringan daripada diagram dengan teks | Post-MVP: audio opsional |
| **Expertise Reversal** | Bantuan yang berguna untuk pemula bisa mengganggu siswa mahir | Siswa yang benar 3× berturut-turut ditawari "Lewati contoh" dan scaffold dikurangi |
| **Element Interactivity** | Konsep yang saling terkait tinggi perlu dibangun bertahap | Rumus kompleks dibangun dari bagian-bagiannya dulu |

### 1.2 Analisis Beban Kognitif: Menyederhanakan √72

Supaya bisa menyederhanakan √72 tanpa bantuan, siswa harus memegang beberapa elemen sekaligus di memori kerja:

1. Daftar bilangan kuadrat sempurna (4, 9, 16, 25, 36, 49, 64, …)
2. Mana yang habis membagi 72
3. Mana yang **terbesar**
4. Hasil baginya (72 ÷ 36 = 2)
5. Akar dari faktor kuadrat (√36 = 6)
6. Menulis hasil akhir 6√2

Karena elemen 1–3 dikerjakan bersamaan, beban memori kerja menjadi tinggi. Ini sesuai dengan keluhan siswa: "bingung menentukan faktor kuadrat sempurna yang tepat". Strategi aplikasi:

| Elemen | Bantuan | Fading |
|---|---|---|
| 1 | Tabel Kuadrat (F10) + subtopik prasyarat 1 | Selalu tersedia lewat tombol |
| 2–3 | Pencari Faktor Kuadrat (F9) | Penuh → sebagian → lewat tombol saja |
| 4–6 | Contoh langkah (F3) + latihan bertahap (F4) | Langkah terisi → kosong |
| Semua | Umpan balik letak kesalahan (F8) dan pembahasan (F13) | Selalu tersedia setelah siswa menjawab |

### 1.3 Mengapa Umpan Balik dan Pembahasan Penting

Tanpa umpan balik, siswa yang menulis 2√18 hanya tahu "salah". Ia harus menebak sendiri letak kesalahannya, dan tebakan itu menambah beban ekstrinsik. Umpan balik yang menunjuk letak kesalahan (F8) mempersempit pencarian. Pembahasan (F13) menjadi *worked example* yang dilihat **setelah** siswa mencoba, sehingga siswa bisa membandingkan langkahnya sendiri dengan langkah yang benar. Pembahasan tidak dibuka sebelum mencoba, supaya siswa tetap berpikir dulu.

Sesuai GL03 (*"Jangan langsung jawabannya, biar aku bisa nyoba sendiri dulu"*), saat salah aplikasi memberi petunjuk **satu tingkat demi satu tingkat** (arah → langkah → contoh serupa), tanpa batas percobaan. Jawaban akhir tidak pernah diberikan sebelum siswa menemukannya; pembahasan terpandu pun meminta siswa mengisi langkah terakhir. Ini menjaga beban **germane** (siswa membangun skema sendiri) sambil menekan beban ekstrinsik (siswa tidak dibiarkan menebak tanpa arah).

## 2. Literasi Matematis (PISA 2022 / AKM Numerasi)

**Definisi (OECD, PISA 2022):** kemampuan individu untuk menalar secara matematis serta merumuskan, menggunakan, dan menafsirkan matematika untuk menyelesaikan masalah dalam berbagai konteks dunia nyata.

### 2.1 Proses → Pemandu 4 Langkah (F5)

| Proses PISA | Langkah di aplikasi | Pertanyaan pemandu untuk siswa |
|---|---|---|
| (Penalaran, bagian dari semua proses) | **① Pahami** | "Apa yang diketahui? Apa yang ditanya?" (siswa menandai teks) |
| *Formulate* (merumuskan) | **② Rumuskan** | "Operasi atau rumus apa yang cocok? Tuliskan model matematikanya." |
| *Employ* (menerapkan) | **③ Hitung** | "Selesaikan perhitungannya." |
| *Interpret & Evaluate* (menafsirkan) | **④ Tafsirkan** | "Apa artinya jawaban ini untuk soal? Masuk akal tidak?" |

> Langkah ini sejalan juga dengan heuristik pemecahan masalah **Polya** (memahami, merencanakan, melaksanakan, memeriksa kembali). Teori ini bisa dikutip di bab kajian teori.

### 2.2 Domain Konten
1. **Bilangan / Kuantitas**: domain utama bentuk akar (subtopik 1–5)
2. Aljabar / Perubahan & Hubungan
3. **Geometri & Pengukuran / Ruang & Bentuk**: konteks soal cerita (sisi persegi dari luas)
4. Data & Ketidakpastian (tidak dipakai di MVP)

### 2.2a Literasi Matematis pada Bentuk Akar

Literasi tidak hanya muncul di soal cerita. Di subtopik 1–5 siswa juga dilatih **menalar**: mengapa 36 dipilih, bukan 4? Apakah 6√2 sudah paling sederhana? Pertanyaan "cek lagi" di umpan balik dan pembahasan melatih proses *evaluate*. Di subtopik 6 siswa juga menafsirkan hasil, misalnya "sisi ubin 2√5 cm, kira-kira 4,5 cm".

### 2.3 Konteks Soal
Personal · Sosial-budaya · Pekerjaan · Saintifik

Setiap topik minimal mencakup **2 konteks berbeda** supaya siswa membangun skema yang bisa ditransfer.

## 3. Integrasi Nilai Pancasila (Perpres 8/2022)

Nilai karakter tidak dibuat sebagai fitur terpisah. Nilai itu **disisipkan secara alami dalam konteks soal**:

| Nilai | Contoh konteks soal |
|---|---|
| Gotong royong | Kerja bakti memasang ubin persegi di musala sekolah; menghitung sisi dari luasnya |
| Keadilan sosial | Membagi lahan kebun sekolah menjadi petak persegi yang sama luas untuk tiap kelas |
| Musyawarah | Kelas bermusyawarah memilih ukuran taman persegi, lalu membandingkan panjang sisinya |
| Persatuan / kebinekaan | Luas kain tenun atau batik berbentuk persegi; mencari panjang sisinya |

> Semua konteks di atas memakai bentuk akar (sisi persegi dari luasnya), sesuai materi MVP.

## 4. Mencegah Kecemasan Matematika

- Tidak ada pengatur waktu pada mode latihan.
- Kata "Salah" diganti dengan "Belum tepat, yuk cek langkah ②".
- Tidak ada papan peringkat publik.
- Progres ditampilkan sebagai perkembangan diri sendiri, bukan perbandingan dengan orang lain.

## 5. Instrumen Pengukuran (untuk penelitian)

| Variabel | Instrumen | Keterangan |
|---|---|---|
| Beban kognitif | Skala Paas (1 butir, 9 poin) | Muncul di akhir sesi (F11) |
| Kemampuan menyederhanakan | Log latihan: benar pada percobaan pertama, kode kesalahan M1–M3, jumlah petunjuk | Dari Progres Lokal (F12), diekspor CSV |
| Literasi matematis | Tes uraian/pilihan berbasis konteks, rubrik 4 proses | Pretest & posttest |
| Kepraktisan | SUS + angket respons siswa | Setelah uji coba |
| Kevalidan | Lembar validasi ahli materi & ahli media | Sebelum uji coba |

## 6. Rujukan Awal (lengkapi dan verifikasi sebelum dikutip)

- Sweller, J., van Merriënboer, J. J. G., & Paas, F. (2019). Cognitive architecture and instructional design: 20 years later. *Educational Psychology Review, 31*, 261–292.
- Mayer, R. E. (2020). *Multimedia Learning* (3rd ed.). Cambridge University Press.
- Paas, F. (1992). Training strategies for attaining transfer of problem-solving skill in statistics: A cognitive-load approach. *Journal of Educational Psychology, 84*(4), 429–434.
- OECD (2023). *PISA 2022 Assessment and Analytical Framework*. OECD Publishing.
- Polya, G. (1945). *How to Solve It*. Princeton University Press.
- Kemendikbudristek. Framework Asesmen Kompetensi Minimum (AKM) — Numerasi.
