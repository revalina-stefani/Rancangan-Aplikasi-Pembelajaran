# PRD — Product Requirements Document

**Produk:** NalarKu (nama sementara), aplikasi web pembelajaran matematika: **Bentuk Akar**
**Versi dokumen:** 1.0
**Tanggal:** 12 November 2026
**Status:** Disesuaikan dengan kutipan verbatim wawancara siswa S01, 6 November 2026 (lihat [INTERVIEW-NOTES.md](INTERVIEW-NOTES.md))

**Sasaran:** siswa SMP kelas VIII · **Materi:** Bentuk Akar · **Masalah utama:** menentukan faktor kuadrat sempurna dan menyederhanakan bentuk akar

> Bagian yang masih bertanda **[ASUMSI]** belum dikonfirmasi oleh wawancara. Bagian tanpa label sudah dikonfirmasi.
> Analisis kesulitan belajar yang lebih rinci dan matriks keterlacakan (kebutuhan → fitur → layar) ada di [NEEDS-ANALYSIS.md](NEEDS-ANALYSIS.md).

### Riwayat Perubahan
| Versi | Perubahan |
|---|---|
| 0.1 | Draf awal berbasis asumsi |
| 0.2 | Sasaran SMP kelas VIII dikonfirmasi. Materi pertama diganti menjadi **Bentuk Akar**. Masalah dan fitur disesuaikan dengan wawancara |
| 0.3 | Ditambah **F13 Pembahasan Jawaban** (P6). F4 diperjelas menjadi latihan bertahap **dan mandiri**. F5–F6 dibatasi untuk soal cerita. Contoh M2 diperbaiki. Konsistensi dengan dokumen lain dicek |
| 1.0 | **Final perencanaan.** MVP menjadi 6 subtopik: pengenalan, pengertian, sifat dasar, faktor kuadrat sempurna, menyederhanakan, soal cerita sisi persegi dari luas. Penjumlahan & pengurangan dan M4 dipindah ke post-MVP. Pembahasan terpandu disetujui |
| 0.4 | Masalah memakai kutipan verbatim. Aturan "2× belum tepat" dihapus: petunjuk kini muncul bertahap **saat jawaban salah**, dan jawaban akhir tidak pernah langsung diberikan (§6.0). Diagonal, Pythagoras, dan M5 dihapus karena tidak ada di wawancara |

---

## 1. Latar Belakang

Wawancara dengan siswa SMP kelas VIII menemukan dua sumber kesulitan utama dalam belajar **bentuk akar**:

1. **Kesulitan menyederhanakan bentuk akar.** Siswa sudah bisa √25 dan √36, tetapi bingung dengan √20 dan √50 karena harus **menentukan faktor kuadrat sempurna yang cocok**: *"Kadang harus cari angka yang bisa dikalikan, tapi bingung angka berapa yang cocok"* (IL01). Kesulitan makin besar untuk angka besar (K01).
2. **Penjelasan terlalu cepat.** *"aku masih mikirkan cara yang pertama, guru udah lanjut ke cara berikutnya"* (EL04).
3. **Soal yang panjang membingungkan** (EL01). Ini masalah kedua; fokus utama tetap butir 1.

Menurut **Cognitive Load Theory** (Sweller), memori kerja manusia terbatas. Saat menyederhanakan √50 atau √72, siswa harus sekaligus mengingat daftar bilangan kuadrat, mencari pasangan faktor, memilih yang terbesar, lalu menuliskan hasilnya. Kalau semua itu dilakukan tanpa bantuan, beban kognitifnya menumpuk. Aplikasi ini memecah proses itu menjadi langkah-langkah kecil dan memberi alat bantu visual, sehingga beban ekstrinsik berkurang dan kapasitas memori kerja bisa dipakai untuk memahami konsep.

### 1.1 Landasan Hukum

| Regulasi | Isi relevan | Implikasi untuk aplikasi |
|---|---|---|
| UU No. 20/2003 (Sisdiknas) Pasal 37 ayat (1) | Kurikulum pendidikan dasar dan menengah wajib memuat **matematika** | Matematika adalah muatan wajib, sehingga aplikasi ini mendukung pembelajaran inti |
| UU No. 20/2003 Pasal 37 ayat (2) & UU No. 12/2012 Pasal 35 ayat (3) | Kurikulum wajib memuat pendidikan agama, Pancasila, kewarganegaraan, dan **bahasa (Indonesia)** | Konten memakai **bahasa Indonesia** yang baik dan benar |
| Perpres No. 8/2022 Pasal 2 ayat (1) & Pasal 3 | Penguatan Pendidikan Pancasila di semua jenjang untuk membangun karakter | Konteks soal cerita dapat mengangkat nilai **gotong royong dan keadilan** (mis. kebun sekolah berbentuk persegi yang dirawat bersama) |

## 2. Masalah yang Diselesaikan (hasil wawancara)

| # | Masalah (dari sudut pandang siswa) | Jenis beban | Fitur penjawab |
|---|---|---|---|
| P1 | "Kalau √36 tahu hasilnya 6. Tapi kalau √20 masih bingung,harus diapain dulu supaya dia jadi lebih sederhana." (K03) · "Kadang harus cari angka yang bisa dikalikan, tapi bingung angka berapa yang cocok" (IL01) · "Kadang salah memilih angkanya." (IL04) | Intrinsik tinggi + ekstrinsik (mengingat kuadrat sambil memfaktorkan) | F3, F4, F7, F8, **F9**, F10, F13 |
| P2 | "kalau soalnya panjang aku suka bingung maksudnya apa. Kalau langsung angka sama tanda akar  lebih gampang." (EL01) | Ekstrinsik (teks panjang) | F5, F6 |
| P3 | "Kadang gurunya cepat banget jelasinnya.aku masih mikirkan cara yang pertama, guru udah lanjut ke cara berikutnya. Jadi sering ketinggalan." (EL04) · "cara menyederhanakan akar dijelaskan pelan-pelan" (DS02) | Ekstrinsik (terlalu banyak info sekaligus) | F2, F3 |
| P4 | "Aku lebih ngerti kalau guru kasih contoh dulu, lalu aku coba sendiri." (GL01) | Germane | F3 → F4 |
| P5 | "aku lebih suka dikasih tahu caranya sedikit-sedikit. Jangan langsung jawabannya, biar aku bisa nyoba sendiri dulu." (GL03) · "Kalau salah baru dikasih petunjuk." (DS02) | — | F7 |
| P6 | "Kalau salah dikasih tahu salahnya di mana, biar bisa belajar lagi." (DS01) | — | F8, F13 |

> Semua kutipan verbatim dari [INTERVIEW-NOTES.md](INTERVIEW-NOTES.md) §2.
>
> **Prioritas:** P1 adalah masalah inti. P2 ditangani di subtopik 6 saja, dengan 2–3 soal cerita pendek (sisi persegi dari luas).

## 3. Tujuan & Indikator Keberhasilan

| Tujuan | Indikator | Cara ukur |
|---|---|---|
| Mengurangi beban kognitif ekstrinsik | Skor beban kognitif yang dilaporkan siswa turun | Skala Paas (1–9) setelah tiap sesi |
| Meningkatkan kemampuan menyederhanakan bentuk akar | Ketepatan memilih faktor kuadrat sempurna terbesar meningkat | Log latihan (persentase benar pada percobaan pertama) |
| Meningkatkan literasi matematis | Skor tes soal cerita bentuk akar naik | Pretest–posttest, dihitung N-gain |
| Aplikasi mudah dipakai | Skor SUS ≥ 70 | Angket System Usability Scale |
| Siswa mau memakai lagi | ≥ 60% siswa uji coba menyelesaikan ≥ 3 sesi [ASUMSI: target angka] | Log progres lokal / angket |

> Catatan penelitian: kalau proyek ini dipakai untuk skripsi R&D (ADDIE / 4D / Plomp), indikator di atas bisa dipetakan ke tahap validasi ahli, uji kepraktisan, dan uji keefektifan.

## 4. Pengguna Sasaran

### 4.1 Persona Utama — "Dina", siswa SMP kelas VIII
- Usia 13–14 tahun.
- Sudah bisa √25 dan √36, tetapi bingung memilih faktor saat menyederhanakan √20 atau √50, apalagi angka besar.
- Kesulitan memahami soal cerita yang panjang.
- Lebih suka penjelasan yang **pelan dan bertahap**, melihat contoh dulu lalu mencoba sendiri.
- Saat salah, ingin diberi petunjuk sedikit-sedikit, **bukan langsung jawabannya**.
- [ASUMSI] Memakai HP Android kelas menengah ke bawah dengan kuota terbatas, dan belajar 10–15 menit per sesi.

### 4.2 Persona Sekunder — Guru (fase berikutnya, bukan MVP)
- Ingin melihat langkah mana yang paling sering salah.

## 5. Ruang Lingkup Materi — Peta Materi Bentuk Akar

Materi disusun **dari mudah ke sulit**, sehingga beban intrinsik dikelola bertahap. Di subtopik 4–5, soal dimulai dari angka kecil dengan satu faktor kuadrat (√12, √20) lalu ke angka besar dengan beberapa faktor kuadrat (√72), sesuai K01. Setiap subtopik terkunci secara lunak: siswa disarankan berurutan, tetapi tetap boleh membuka subtopik mana saja.

| No | Subtopik | Tujuan pembelajaran | Prioritas |
|---|---|---|---|
| 1 | **Pengenalan Bentuk Akar** | Mengingat kuadrat dan akar kuadrat bilangan kuadrat sempurna 1–225 (√25 = 5). Siswa sudah menguasai √25 dan √36 (K01, K03), jadi subtopik ini dimulai dengan **mencoba sendiri** (DS02) | MVP |
| 2 | **Pengertian Bentuk Akar** | Membedakan akar yang hasilnya bulat (√49) dan yang berupa bentuk akar (√50) | MVP |
| 3 | **Sifat Dasar Bentuk Akar** | Memahami √(a²) = a dan √(a × b) = √a × √b, dua sifat yang dipakai untuk menyederhanakan | MVP |
| 4 | **Menentukan Faktor Kuadrat Sempurna** ⭐ | Mendaftar faktor, mengenali yang kuadrat sempurna, lalu memilih yang **terbesar** (IL01, IL04) | **MVP, fokus utama** |
| 5 | **Menyederhanakan Bentuk Akar** ⭐ | Menyederhanakan √n = a√b dan mengecek bahwa hasilnya sudah paling sederhana | **MVP, fokus utama** |
| 6 | **Soal Cerita: Sisi Persegi dari Luas** | Menentukan sisi persegi dari luasnya dalam bentuk akar paling sederhana (mis. luas 20 cm² → sisi √20 = 2√5 cm). Soal pendek (EL01) | MVP (2–3 soal) |

**Post-MVP** (tidak ditampilkan di peta MVP supaya pilihan tidak terlalu banyak):
- Penjumlahan & Pengurangan Bentuk Akar
- Perkalian & Pembagian Bentuk Akar, termasuk soal luas persegi dengan sisi 3√2 cm (artefak EL01), karena membutuhkan perkalian bentuk akar
- Merasionalkan Penyebut

> Catatan: posisi materi bentuk akar dalam kurikulum (kelas VIII atau IX) dapat berbeda antara buku/kurikulum. Pastikan urutan subtopik dengan guru mata pelajaran.

## 6. Fitur MVP

Fitur berikut **dikonfirmasi dari wawancara** (F1, F2, F3, F4, F5, F6, F7, F8, F13) dan ditambah fitur pendukung. Fitur turunan (F9, F10) diturunkan langsung dari masalah P1. F11–F12 adalah kebutuhan penelitian dan teknis.

| ID | Fitur | Deskripsi | Sumber | Prinsip CLT |
|---|---|---|---|---|
| F1 | **Peta Materi Bentuk Akar** | Peta 6 subtopik MVP dalam bentuk jalur bertahap, dengan status progres (Belum / Sedang / Selesai) | Wawancara | Mengurangi beban navigasi; menunjukkan urutan belajar |
| F2 | **Penjelasan Bertahap (Kartu Mikro)** | Materi dipecah jadi kartu kecil berisi 1 konsep. Siswa sendiri yang menekan "Lanjut", jadi temponya bisa **pelan** | Wawancara | Segmenting, learner-paced |
| F3 | **Contoh Soal + Langkah Penyelesaian** | Langkah dibuka satu per satu ("Tampilkan langkah berikutnya"), masing-masing dengan alasan singkat | Wawancara | Worked example |
| F4 | **Latihan Bertahap & Latihan Mandiri** | Contoh → soal yang sebagian langkahnya sudah terisi (fading) → **latihan mandiri** tanpa langkah terisi. Jawaban bentuk akar diisi lewat kotak **a √b** | Wawancara | Fading, expertise reversal |
| F5 | **Pemandu Soal Cerita (4 Langkah)** | **Hanya untuk soal cerita** (subtopik 6): ① Pahami → ② Rumuskan → ③ Hitung → ④ Tafsirkan | Wawancara (P2) | Proses literasi PISA |
| F6 | **Penyorot Informasi** | **Hanya untuk soal cerita.** Di langkah ① siswa mengetuk bagian teks yang penting (diketahui, ditanya, satuan). Soal panjang juga dipecah per kalimat | Wawancara (P2) | Signaling, segmenting |
| F7 | **Petunjuk Bertahap** | 3 tingkat: arah → langkah → contoh serupa. **Muncul otomatis satu tingkat setiap kali jawaban belum tepat** (DS02), dan bisa juga dibuka lewat tombol "Butuh bantuan?". Petunjuk tidak pernah berisi jawaban akhir soal itu (GL03) | Wawancara (GL03, DS02) | Scaffolding |
| F8 | **Umpan Balik Letak Kesalahan** | Sistem mengenali kesalahan umum dan menjelaskan **di langkah mana** dan **mengapa** jawaban belum tepat | Wawancara | Mengurangi P5 |
| F9 | **Pencari Faktor Kuadrat** ⭐ | Alat bantu visual. Untuk bilangan n, ditampilkan pasangan faktornya (72 = 1×72, 2×36, 4×18, 8×9 …), faktor kuadrat sempurna disorot, dan **yang terbesar** ditandai. Alat ini memudar (hilang bertahap) seiring siswa makin mahir | Turunan dari P1 | Mengurangi beban memori kerja; fading |
| F10 | **Tabel Kuadrat (Kartu Rumus)** | Panel 1² s.d. 15² dan sifat akar, dibuka lewat bottom sheet tanpa meninggalkan soal | Turunan dari P1 | Mengurangi beban mengingat; menghindari split-attention |
| F11 | **Cek Beban (Skala Paas)** | 1 pertanyaan di akhir sesi: "Seberapa berat usaha mentalmu?" (1–9) | Kebutuhan penelitian | Data penelitian |
| F12 | **Progres Lokal + Offline + PWA** | Progres disimpan di perangkat dan bisa dipakai tanpa internet. Aplikasi bisa dipasang di layar HP | [ASUMSI] keterbatasan kuota | Akses mudah |
| F13 | **Pembahasan Jawaban** | Penyelesaian soal langkah demi langkah dengan alasan singkat. (a) **Setelah jawaban tepat**: pembahasan lengkap bisa dibuka untuk meninjau. (b) **Jika masih belum tepat setelah petunjuk tingkat 3**: tersedia *pembahasan terpandu*, yaitu langkah dibuka satu per satu, tetapi **langkah terakhir tetap diisi siswa**. Jawaban akhir tidak pernah ditampilkan sebelum siswa menemukannya | Wawancara (DS01, GL03) | Worked example setelah mencoba; siswa tetap mencoba sendiri |

### 6.0 Perbedaan Petunjuk, Umpan Balik, dan Pembahasan

Ketiga fitur ini mirip, jadi batasnya perlu jelas supaya tidak tumpang tindih (redundansi):

| | Petunjuk (F7) | Umpan Balik (F8) | Pembahasan (F13) |
|---|---|---|---|
| Kapan muncul | Otomatis 1 tingkat setiap jawaban belum tepat; bisa juga dibuka lewat tombol | **Setelah** menekan "Periksa" | Setelah jawaban tepat (lengkap), atau setelah petunjuk tingkat 3 (terpandu) |
| Siapa yang membuka | Sistem (saat salah) atau siswa (tombol) | Otomatis | Siswa (tombol "Lihat pembahasan") |
| Isi | Arah → langkah → contoh **serupa** (bukan jawaban soal ini) | Letak dan alasan kesalahan (kode M1–M3) | Langkah penyelesaian **soal ini** |
| Memberi jawaban akhir? | Tidak | Tidak | Hanya setelah siswa menjawab tepat. Pada versi terpandu, langkah terakhir diisi siswa |

**Alur saat jawaban belum tepat** (tanpa batas jumlah percobaan):
1. Umpan balik letak kesalahan (F8) + petunjuk tingkat 1 (arah).
2. Belum tepat lagi → umpan balik + petunjuk tingkat 2 (langkah).
3. Belum tepat lagi → umpan balik + petunjuk tingkat 3 (contoh serupa).
4. Masih belum tepat → pilihan "Pembahasan terpandu" atau "Lihat contoh lagi". Siswa tetap mengisi jawaban akhirnya sendiri.


### 6.1 Daftar Kesalahan Umum yang Dikenali (untuk F8)

| Kode | Kesalahan siswa | Contoh | Umpan balik |
|---|---|---|---|
| M1 | Faktor kuadrat **bukan yang terbesar**, sehingga belum sederhana | √72 = 2√18 | "Langkahmu benar, tapi 18 masih punya faktor kuadrat (9). Coba cari faktor kuadrat yang lebih besar dari 4." |
| M2 | Mengeluarkan faktor yang **bukan kuadrat sempurna** | √72 = 8√9 (dari 72 = 8 × 9, tetapi 8 yang dikeluarkan) | "Yang boleh keluar dari akar hanya akar dari bilangan kuadrat sempurna. 8 bukan kuadrat sempurna. 9 = 3², jadi yang keluar adalah 3. Lalu cek lagi: apakah masih ada faktor kuadrat yang lebih besar?" |
| M3 | Mengeluarkan bilangan kuadratnya, **bukan akarnya** | √12 = 4√3 | "4 adalah faktor kuadrat, tetapi yang keluar dari akar adalah √4 = 2." |

> M1–M3 sejalan dengan IL04 ("Kadang salah memilih angkanya"). Umpan balik tidak menyebut jawaban akhir, hanya arah perbaikan.

### 6.2 Fitur BERIKUTNYA (Post-MVP)
- Subtopik post-MVP di §5 (penjumlahan & pengurangan, perkalian & pembagian, merasionalkan penyebut)
- Kode kesalahan M4: menjumlahkan akar tidak sejenis (2√3 + 3√2 = 5√5), dipakai bersama subtopik penjumlahan
- Akun siswa dan sinkronisasi ke cloud
- Dasbor guru (rekap kesalahan per kode kesalahan)
- Mode tes (pretest/posttest)
- Narasi audio untuk penjelasan (modality effect)

### 6.3 DI LUAR Lingkup
- Chat AI bebas atau pemecah soal otomatis (berisiko memberi jawaban tanpa proses berpikir)
- Papan peringkat (berisiko menambah kecemasan matematika)
- Video panjang (bertentangan dengan kebutuhan penjelasan pelan dan bertahap)
- Diagonal dan Teorema Pythagoras (tidak muncul di wawancara)
- Tombol "Lihat jawaban" (bertentangan dengan GL03)

## 7. User Stories Utama

1. *Sebagai siswa,* saya ingin melihat peta materi bentuk akar *agar* tahu harus belajar dari mana dan sudah sampai mana.
2. *Sebagai siswa,* saya ingin penjelasan yang muncul sedikit demi sedikit *agar* saya bisa belajar pelan-pelan.
3. *Sebagai siswa,* saya ingin melihat contoh soal yang diselesaikan langkah demi langkah *agar* tahu cara menyederhanakan bentuk akar.
4. *Sebagai siswa,* saya ingin dibantu melihat faktor kuadrat sempurna dari sebuah bilangan *agar* tidak salah memilih faktor.
5. *Sebagai siswa,* saya ingin petunjuk kecil saat buntu *tanpa* langsung diberi jawabannya.
6. *Sebagai siswa,* saya ingin tahu letak kesalahan saya *agar* bisa memperbaikinya.
7. *Sebagai siswa,* saya ingin soal cerita yang panjang dipecah dan diberi penanda *agar* lebih mudah dipahami.
8. *Sebagai siswa,* saya ingin melihat pembahasan lengkap setelah mencoba *agar* tahu cara yang benar dari awal sampai akhir.
9. *Sebagai siswa,* saya ingin berlatih sendiri tanpa langkah yang sudah terisi *agar* yakin sudah bisa.
10. *Sebagai peneliti (pemilik proyek),* saya ingin data skala Paas dan hasil latihan bisa diekspor (CSV) *untuk* dianalisis.

## 8. Kebutuhan Non-Fungsional

| Aspek | Target |
|---|---|
| Performa | First Contentful Paint < 2 detik di jaringan 3G; Lighthouse Performance ≥ 85 |
| Ukuran | JS awal ≤ 200 KB gzip |
| Kompatibilitas | Chrome Android 90+, Safari iOS 15+, Chrome/Edge/Firefox desktop terbaru |
| Layar | 360px – 1440px |
| Aksesibilitas | WCAG 2.1 AA (kontras, ukuran font min 16px, label aria; simbol √ dibacakan "akar") |
| Offline | Semua subtopik yang pernah dibuka tetap bisa diakses offline |
| Privasi | Tidak ada data pribadi yang dikirim ke server pada MVP |

## 9. Risiko & Mitigasi

| Risiko | Mitigasi |
|---|---|
| Input bentuk akar sulit diketik di HP | Pakai 2 kotak input (koefisien dan isi akar) dengan keyboard angka. Tidak perlu mengetik simbol √ |
| Penilaian jawaban setara (mis. 6√2 vs √72) | Answer checker membandingkan nilai **dan** mengecek apakah bentuknya sudah paling sederhana. Jawaban setara yang belum sederhana diberi umpan balik M1, bukan langsung dinilai salah |
| Pencari Faktor Kuadrat membuat siswa bergantung | Alat ini memudar: tampil penuh di contoh, sebagian di latihan awal, dan hanya lewat tombol di latihan mandiri |
| Siswa langsung membuka pembahasan tanpa berpikir | Pembahasan lengkap baru tersedia setelah jawaban tepat; versi terpandu tetap meminta siswa mengisi langkah terakhir (lihat §6.0) |
| Waktu pengembangan terbatas | Fokus 6 subtopik MVP. Fitur post-MVP tidak dikerjakan sebelum MVP selesai |

## 10. Pertanyaan Terbuka

- [x] Jenjang sasaran: **SMP kelas VIII**
- [x] Materi pertama: **Bentuk Akar**
- [ ] Siswa memakai HP sendiri atau HP orang tua? Seberapa sering ada kuota?
- [ ] Apakah aplikasi dipakai di kelas (dipandu guru) atau untuk belajar mandiri?
- [ ] Model penelitian/pengembangan yang dipakai (ADDIE, 4D, Plomp)?
- [ ] Konfirmasi urutan subtopik dengan guru mata pelajaran
- [x] Kutipan verbatim wawancara sudah dimasukkan ke INTERVIEW-NOTES §2
- [x] Pembahasan terpandu disetujui (langkah terakhir diisi siswa)
- [x] Penjumlahan & pengurangan dipindah ke post-MVP
- [x] Soal cerita MVP: sisi persegi dari luas; soal sisi 3√2 cm ke post-MVP
- [ ] Perangkat & kuota siswa tetap [ASUMSI] (belum ditanyakan di wawancara)
