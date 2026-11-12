# INTERVIEW-NOTES.md — Hasil Wawancara Siswa (Analisis Kebutuhan)

> Sumber: dokumen *Tugas Wawancara.docx* milik pemilik proyek. Kutipan di §2 disalin **verbatim**, termasuk ejaan dan tanda baca aslinya.
> Nama siswa tidak ditulis di sini (privasi, CLAUDE.md §2 butir 7). Dipakai kode **S01**.
> Landasan hukum (UU 12/2012, UU 20/2003, Perpres 8/2022) ada di PRD §1.1. Analisis lengkap ada di [NEEDS-ANALYSIS.md](NEEDS-ANALYSIS.md).

## 1. Identitas Narasumber (anonim)

| Item | Isi |
|---|---|
| Kode | S01 |
| Jenjang / Kelas | SMP kelas VIII |
| Tanggal wawancara | Jumat, 6 November 2026 |
| Durasi | 30 menit |
| Materi yang pernah dipelajari | Bilangan Bentuk Akar |
| Bukti pernah belajar materi | Materi dan jawab soal |
| Artefak pemicu | Materi dan contoh soal |
| Perangkat yang dipakai | Tidak ditanyakan |
| Akses internet | Tidak ditanyakan |

## 2. Kutipan Verbatim Siswa

Kode: **K** = pengetahuan awal · **IL** = beban intrinsik · **EL** = beban ekstrinsik · **GL** = beban germane · **DS** = harapan desain.

| Kode | Pertanyaan | Kutipan verbatim siswa | Bukti/artefak |
|---|---|---|---|
| K01 | Ceritakan pengalamanmu ketika pertama kali belajar bentuk akar. | "Belajar bentuk akar itu kelas 8. Awalnya bingung karena baru beberapa kali belajar akar. Tapi kalau √25 udah tahu hasilnya 5. Tapi kalau angka besar masih bingung." | √25 = 5 |
| K03 | Bagian mana yang langsung kamu kenali dan bagian mana yang masih membuatmu ragu? | "Kalau √36 tahu hasilnya 6. Tapi kalau √20 masih bingung,harus diapain dulu supaya dia jadi lebih sederhana." | √36 dan √20 |
| IL01 | Bagian konsep atau aturan mana yang paling sulit kamu pahami? | "Yang susah menyederhanakan bentuk akar. Kadang harus cari angka yang bisa dikalikan, tapi bingung angka berapa yang cocok" | √12 = √(4 × 3) = 2√3 |
| IL04 | Pada bagian mana tingkat kesulitan mulai terasa meningkat? | "Kalau √25 masih mudah, hasilnya 5. Tapi √50 bingung harus cari angka yang bisa dikalikan dulu. Kadang salah memilih angkanya." | √25 dan √50 |
| EL01 | Pernahkah kamu memahami konsepnya tetapi bingung dengan cara soal atau penjelasan disampaikan? | "Pernah, kalau soalnya panjang aku suka bingung maksudnya apa. Kalau langsung angka sama tanda akar  lebih gampang." | Soal cerita luas persegi dengan sisi 3√2 cm |
| EL04 | Bagaimana kecepatan dan urutan penjelasan saat materi diajarkan? | "Kadang gurunya cepat banget jelasinnya.aku masih mikirkan cara yang pertama, guru udah lanjut ke cara berikutnya. Jadi sering ketinggalan." | √20 = √(4 × 5) = 2√5 |
| GL01 | Kegiatan belajar apa yang pernah membuatmu benar-benar memahami bentuk akar? | "Aku lebih ngerti kalau guru kasih contoh dulu, lalu aku coba sendiri. Kalau cuma dijelasin rumusnya aja sering lupa cara ngerjakannya" | √12 = 2√3 dan latihan sejenis |
| GL03 | Ketika kamu belum mengerti, bantuan atau petunjuk apa yang membuatmu bisa menyelesaikan soal sendiri? | "Kalau nggak bisa,aku lebih suka dikasih tahu caranya sedikit-sedikit. Jangan langsung jawabannya, biar aku bisa nyoba sendiri dulu." | Petunjuk bertahap √20 |
| DS01 | Bantuan apa yang paling dibutuhkan di aplikasi? | "Saya mau ada contoh soal sama latihan. Kalau salah dikasih tahu salahnya di mana, biar bisa belajar lagi." | Usulan: contoh soal, latihan, pembahasan jawaban |
| DS02 | Bagian mana sebaiknya dijelaskan perlahan, dan bagian mana siswa dapat mencoba sendiri? | "Menurutku cara menyederhanakan akar dijelaskan pelan-pelan, karna saya masih suka bingung. Kalau soal yang gampang kayak √25 bisa coba sendiri. Kalau salah baru dikasih petunjuk." | √25 = 5 dan √20 = 2√5 |

## 3. Temuan → Implikasi Desain

| # | Temuan | Kode kutipan | Jenis beban | Implikasi fitur |
|---|---|---|---|---|
| T1 | Siswa kelas VIII sudah belajar **Bentuk Akar**. Akar kuadrat sempurna kecil (√25, √36) sudah dikuasai | K01, K03, IL04 | — | Peta Materi (F1). Subtopik 1–2 bisa langsung dicoba sendiri |
| T2 | Sulit **menyederhanakan bentuk akar**, terutama memilih angka (faktor kuadrat sempurna) yang cocok. Makin sulit untuk angka besar | K01, K03, IL01, IL04 | Intrinsik + ekstrinsik | F3, F8, F9, F10, F13 |
| T3 | Soal yang **panjang** membingungkan; soal langsung (angka + tanda akar) lebih mudah | EL01 | Ekstrinsik | F5, F6 (soal cerita pendek, hanya konteks luas persegi) |
| T4 | Penjelasan guru **terlalu cepat**; butuh pelan dan bertahap, terutama cara menyederhanakan | EL04, DS02 | Ekstrinsik | F2, F3 |
| T5 | Paham setelah melihat **contoh dulu, lalu mencoba sendiri** | GL01 | Germane | F3 → F4 (contoh lalu latihan mandiri) |
| T6 | Butuh **petunjuk sedikit-sedikit**, diberikan **saat salah**, dan **jangan langsung jawabannya** | GL03, DS02 | — | F7 (petunjuk bertahap otomatis saat salah) |
| T7 | Butuh diberi tahu **salahnya di mana** | DS01 | — | F8 |
| T8 | Butuh contoh soal, latihan, dan pembahasan jawaban | DS01 | — | F3, F4, F13 |

> **Catatan:** wawancara tidak membahas diagonal maupun Teorema Pythagoras, jadi keduanya tidak dimasukkan ke MVP. Perangkat dan kuota juga tidak ditanyakan, jadi masih [ASUMSI] di PRD.
>
> Soal artefak EL01 (luas persegi dengan sisi 3√2 cm) membutuhkan perkalian bentuk akar, jadi dipindah ke post-MVP. Soal cerita MVP memakai arah sebaliknya: mencari sisi dari luas (mis. luas 20 cm² → √20 = 2√5 cm).

## 4. Panduan Pertanyaan (kalau ingin wawancara lanjutan)

1. Pakai HP sendiri? Sering kehabisan kuota?
2. Belajar matematika biasanya kapan dan berapa lama?
3. Saat menyederhanakan √50, angka apa yang pertama kamu coba? Kenapa?
4. Setelah dapat jawaban, apakah kamu mengecek apakah masih bisa disederhanakan?
5. Apa yang bikin kamu malas memakai aplikasi belajar?
