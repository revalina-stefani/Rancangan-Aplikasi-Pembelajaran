# NEEDS-ANALYSIS.md — Analisis Kebutuhan & Kesulitan Belajar

> Dokumen ini menjembatani **hasil wawancara** ([INTERVIEW-NOTES.md](INTERVIEW-NOTES.md)) dan **rancangan fitur** ([PRD.md](PRD.md)).
> Setiap fitur harus bisa dilacak ke salah satu kebutuhan di sini. Fitur yang tidak punya jejak ke kebutuhan tidak dibuat.

**Versi:** 1.0 · **Tanggal:** 12 November 2026

---

## 1. Sumber Data

| Sumber | Status |
|---|---|
| Wawancara siswa SMP kelas VIII (S01, 6 Nov 2026, 30 menit) | Kutipan verbatim K01–DS02 dan temuan T1–T8 sudah ada di INTERVIEW-NOTES |
| Dokumen landasan hukum (UU 20/2003, UU 12/2012, Perpres 8/2022) | Sudah dirangkum di PRD §1.1 |
| Kajian teori (CLT, literasi matematis PISA) | Sudah dirangkum di [PEDAGOGY.md](PEDAGOGY.md) |

> Bagian "Dugaan penyebab" di §2 adalah **analisis peneliti** berdasarkan teori, bukan kata-kata siswa. Bagian ini sebaiknya diuji lagi saat uji keterbacaan atau wawancara lanjutan.

## 2. Analisis Kesulitan Belajar

### K1 — Menentukan faktor kuadrat sempurna yang tepat ⭐ (masalah inti)

| Aspek | Uraian |
|---|---|
| Temuan | T2 (K01, K03, IL01, IL04): bisa √25 dan √36, tetapi bingung √20 dan √50; "bingung angka berapa yang cocok"; "Kadang salah memilih angkanya" |
| Gejala yang mungkin muncul | Untuk √72, siswa bingung memilih 4 × 18, 9 × 8, atau 36 × 2. Hasilnya bisa belum sederhana (2√18), keliru mengeluarkan bilangan (8√9), atau keliru mengeluarkan kuadratnya (36√2) |
| Dugaan penyebab | (1) Bilangan kuadrat sempurna belum otomatis diingat. (2) Siswa harus mencari faktor, mengecek kuadrat, dan memilih yang terbesar **sekaligus**. (3) Siswa belum punya kebiasaan **mengecek** apakah isi akar masih bisa disederhanakan |
| Jenis beban kognitif | **Intrinsik** tinggi (banyak elemen saling terkait) + **ekstrinsik** (harus mengingat daftar kuadrat sambil menghitung) |
| Kebutuhan | Alat bantu untuk melihat faktor dan kuadrat sempurna; urutan langkah yang tetap; latihan dari yang mudah (1 faktor kuadrat) ke yang sulit (beberapa faktor kuadrat) |
| Fitur | F3, F4, F8 (M1–M3), **F9**, F10, F13; subtopik prasyarat 1 |

### K2 — Memahami soal cerita yang panjang

| Aspek | Uraian |
|---|---|
| Temuan | T3 (EL01): "kalau soalnya panjang aku suka bingung maksudnya apa" |
| Gejala yang mungkin muncul | Siswa tidak tahu mana yang diketahui dan mana yang ditanya; tidak tahu harus memakai luas atau sisi |
| Dugaan penyebab | Teks panjang memaksa siswa menyimpan banyak informasi di memori kerja sambil mencari model matematikanya |
| Jenis beban kognitif | **Ekstrinsik** (penyajian teks) |
| Kebutuhan | Soal dipecah per kalimat; informasi penting ditandai; langkah penyelesaian dipandu |
| Fitur | F5, F6 (khusus subtopik 6) |

> K2 adalah masalah kedua. Fokus utama aplikasi tetap K1. Soal cerita di MVP dibatasi 2–3 soal dan selalu memakai bilangan yang sudah dilatih di subtopik 5 (mis. luas 20 cm² → 2√5 cm).

### K3 — Penjelasan terlalu cepat

| Aspek | Uraian |
|---|---|
| Temuan | T4 (EL04, DS02): guru "cepat banget jelasinnya"; cara menyederhanakan perlu "dijelaskan pelan-pelan" |
| Dugaan penyebab | Penjelasan di kelas menampilkan banyak langkah sekaligus. Siswa tidak bisa mengatur tempo |
| Jenis beban kognitif | **Ekstrinsik** (terlalu banyak informasi dalam satu waktu) |
| Kebutuhan | Satu konsep per layar; siswa sendiri yang menentukan kapan lanjut; langkah contoh dibuka satu per satu |
| Fitur | F2, F3, F13 (dibuka langkah demi langkah) |

### K4 — Buntu dan tidak tahu harus mulai dari mana

| Aspek | Uraian |
|---|---|
| Temuan | T6 (GL03, DS02): "dikasih tahu caranya sedikit-sedikit. Jangan langsung jawabannya"; "Kalau salah baru dikasih petunjuk" |
| Kebutuhan | Petunjuk bertahap yang muncul saat salah, tanpa memberi jawaban akhir |
| Fitur | F7 (3 tingkat: arah → langkah → contoh serupa) |

### K5 — Tidak tahu letak kesalahan

| Aspek | Uraian |
|---|---|
| Temuan | T7 (DS01): "Kalau salah dikasih tahu salahnya di mana" |
| Kebutuhan | Umpan balik yang menyebut **apa** yang keliru dan **mengapa**, bukan hanya "salah" |
| Fitur | F8 (kode M1–M3) |

### K6 — Butuh melihat cara yang benar secara utuh

| Aspek | Uraian |
|---|---|
| Temuan | T8 (DS01): contoh soal, latihan, dan pembahasan jawaban |
| Kebutuhan | Penyelesaian soal setelah siswa mencoba; jawaban akhir tidak diberikan sebelum siswa menemukannya |
| Fitur | F13 |

### K7 — Butuh latihan sendiri

| Aspek | Uraian |
|---|---|
| Temuan | T5 (GL01): "kasih contoh dulu, lalu aku coba sendiri" |
| Kebutuhan | Latihan tanpa langkah yang sudah terisi, setelah melewati contoh dan latihan bertahap |
| Fitur | F4 (bagian latihan mandiri) |

## 3. Analisis Tugas: Menyederhanakan √n

Urutan kemampuan yang dibutuhkan, dari prasyarat ke tujuan. Setiap baris menjadi bahan kartu mikro atau langkah contoh.

| No | Kemampuan | Contoh | Subtopik |
|---|---|---|---|
| 1 | Mengenal bilangan kuadrat sempurna 1–225 | 36 = 6² | 1 |
| 2 | Menghitung akar kuadrat bilangan kuadrat | √36 = 6 | 1 |
| 3 | Membedakan akar bulat dan bentuk akar | √49 = 7, √50 bentuk akar | 2 |
| 4 | Memakai sifat √(a²) = a dan √(a × b) = √a × √b | √(4 × 5) = √4 × √5 | 3 |
| 5 | Mendaftar pasangan faktor | 72 = 1×72 = 2×36 = 3×24 = 4×18 = 6×12 = 8×9 | 4 |
| 6 | Mengenali faktor yang kuadrat sempurna | 4, 9, 36 | 4 |
| 7 | Memilih faktor kuadrat sempurna **terbesar** | 36 | 4 |
| 8 | Menulis hasil a√b | √72 = √36 × √2 = 6√2 | 5 |
| 9 | Mengecek isi akar tidak punya faktor kuadrat lagi | 2 → ✓ | 5 |
| 10 | Menerapkan di konteks (sisi persegi dari luas) | luas 20 cm² → sisi √20 = 2√5 cm | 6 |

Langkah 5–7 adalah titik beban tertinggi (lihat PEDAGOGY §1.2). Di sinilah Pencari Faktor Kuadrat (F9) bekerja.

## 4. Matriks Keterlacakan

| Kebutuhan pemilik proyek | Kesulitan | Fitur | Komponen UI (DESIGN §5) | Bagian konten (CONTENT-GUIDE §1) |
|---|---|---|---|---|
| Materi dengan penjelasan bertahap | K3 | F1, F2 | `TopicPath`, `MicroCard` | Kata Kunci, Kartu Mikro |
| Contoh soal + langkah penyelesaian | K1, K3 | F3 | `StepReveal` | Contoh Soal Lengkap |
| Petunjuk bertahap saat kesulitan | K4 | F7, F9, F10 | `HintSheet`, `FactorFinder`, `FormulaSheet` | 3 petunjuk per soal |
| Latihan mandiri | K7 | F4 | `RadicalInput`, `AnswerInput` | Latihan Fading, Latihan Mandiri |
| Umpan balik saat jawaban salah | K5 | F8 | `FeedbackBanner` | Miskonsepsi M1–M3 |
| Pembahasan jawaban | K6 | F13 | `SolutionPanel` | Pembahasan per soal |
| Soal cerita bertahap | K2 | F5, F6 | `LiteracyStepper`, `HighlightableText` | Soal cerita subtopik 6 |
| Data penelitian | — | F11, F12 | `EffortRating` | — |
| Bisa di HP dan browser | — | F12 (PWA) | Semua (mobile-first 360px) | — |

## 5. Fitur yang Sengaja TIDAK Dibuat

| Ide | Alasan tidak dibuat |
|---|---|
| Chat AI / pemecah soal otomatis | Tidak ada di kebutuhan. Berisiko memberi jawaban tanpa proses berpikir |
| Papan peringkat, poin, lencana | Tidak ada di kebutuhan. Menambah beban ekstrinsik dan kecemasan |
| Video penjelasan panjang | Bertentangan dengan K3 (siswa tidak bisa mengatur tempo) |
| Pengatur waktu (timer) | Menambah tekanan; tidak ada di kebutuhan |
| Tombol "Lihat jawaban" | Bertentangan dengan GL03. Jawaban akhir tidak pernah diberikan langsung |
| Batas jumlah kesalahan untuk membuka jawaban | Siswa diberi kesempatan mencoba terus dengan petunjuk bertahap |
| Diagonal & Teorema Pythagoras | Tidak muncul di wawancara |
| Akun, login, dasbor guru | Bukan kebutuhan siswa di MVP; menyangkut privasi. Masuk post-MVP |

## 6. Yang Masih Perlu Dikonfirmasi

- [x] Kutipan verbatim sudah ada di INTERVIEW-NOTES §2
- [ ] Apakah kesalahan M1–M3 benar-benar muncul pada siswa? (cek lewat contoh pekerjaan siswa atau uji keterbacaan)
- [ ] Perangkat dan kuota siswa (masih [ASUMSI] di PRD §4.1)
- [ ] Dipakai di kelas atau belajar mandiri
- [ ] Urutan subtopik dengan guru mata pelajaran
