# DESIGN.md — Desain UI/UX

## 1. Prinsip Desain

1. **Tenang dan fokus.** Banyak ruang kosong, satu aksi utama per layar. Tampilan yang sepi membantu siswa berpikir.
2. **Konsisten.** Warna dan ikon yang sama selalu bermakna sama. Siswa tidak boleh harus "belajar ulang" antarmukanya.
3. **Jempol dulu.** Tombol aksi utama ada di bawah layar supaya mudah dijangkau ibu jari.
4. **Bantuan selalu dekat, tapi tidak memaksa.** Petunjuk dan rumus dibuka lewat bottom sheet, sehingga soal tetap terlihat.
5. **Tanpa dekorasi yang tidak bermakna.** Tidak memakai animasi selain transisi singkat (≤ 200ms) yang membantu orientasi.
6. **Sederhana di HP dan browser.** Satu soal per layar, maksimal 2 tombol aksi, tombol besar (≥ 44px). Tampilan sama di HP dan laptop; di laptop hanya ditambah panel bantuan di samping.
7. **Dari mudah ke sulit.** Urutan subtopik, kartu, dan soal selalu naik tingkat kesulitannya (lihat §6a).
8. **Coba dulu, jawaban tidak diberikan.** Saat salah, yang muncul adalah umpan balik dan petunjuk bertahap, bukan jawaban akhir (GL03, DS02).

## 2. Sistem Warna

### 2.1 Warna Dasar
| Token | Terang | Gelap | Fungsi |
|---|---|---|---|
| `--bg` | `#FAFAF7` | `#16181D` | Latar |
| `--surface` | `#FFFFFF` | `#1F2229` | Kartu |
| `--text` | `#1E2430` | `#E8EAF0` | Teks utama |
| `--text-muted` | `#5B6475` | `#A0A7B4` | Teks sekunder |
| `--primary` | `#2F5BEA` | `#7C9BFF` | Aksi utama, tombol "Lanjut" |
| `--success` | `#1F8A5B` | `#4CC38A` | Jawaban tepat |
| `--attention` | `#B4570F` | `#F0A35E` | "Belum tepat", lembut, bukan merah menyala |

### 2.2 Warna Penanda Literasi (Signaling) — dipakai KONSISTEN di semua soal
| Makna | Warna | Contoh |
|---|---|---|
| **Data / angka diketahui** | Biru muda (highlight) `#DCE6FF` | "luas **48** m²" |
| **Yang ditanya** | Kuning lembut `#FFF1C2` + garis bawah | "**berapa panjang sisinya**?" |
| **Satuan** | Hijau muda `#D9F2E6` | "m", "m²", "cm" |
| **Info pengecoh / tidak relevan** | Abu-abu dicoret tipis | (dipakai di umpan balik) |

> Penanda ini hanya dipakai di **soal cerita** (subtopik 6).
>
> Warna tidak boleh jadi satu-satunya penanda (untuk pengguna buta warna). Setiap penanda juga diberi ikon kecil atau gaya garis.

## 3. Tipografi

- Font: **Inter** atau **Plus Jakarta Sans** (fallback: `system-ui, sans-serif`)
- Rumus: **KaTeX** (font bawaan KaTeX)
- Skala ukuran: 14 / **16 (body)** / 18 / 22 / 28px
- Tinggi baris body 1,6. Panjang baris maksimal ~65 karakter di desktop.
- Soal cerita: 17–18px supaya nyaman dibaca di HP.

## 4. Layout & Grid

- Mobile (360–599px): 1 kolom, padding samping 16px
- Tablet (600–1023px): 1 kolom, lebar konten maksimal 640px di tengah
- Desktop (≥1024px): soal di kiri, panel bantuan/rumus di kanan, **berdampingan** (mengurangi split-attention)
- Jarak antarelemen memakai kelipatan 4px (4, 8, 12, 16, 24, 32)
- Area aman (safe-area-inset) diperhatikan untuk HP dengan notch

## 5. Komponen Inti

| Komponen | Keterangan |
|---|---|
| `TopicPath` / `TopicNode` | Peta materi berbentuk jalur vertikal: nomor, judul subtopik, status (Belum / Sedang / Selesai / Segera hadir) |
| `FactorFinder` | Daftar pasangan faktor dari n; faktor kuadrat sempurna disorot dan yang terbesar ditandai. Bisa tampil penuh, sebagian, atau tersembunyi (fading) |
| `RadicalInput` | 2 kotak angka: koefisien dan isi akar, ditampilkan sebagai a√b |
| `MicroCard` | Kartu materi berisi 1 konsep: judul, isi pendek, visual opsional |
| `StepReveal` | Langkah contoh soal yang dibuka satu per satu ("Tampilkan langkah berikutnya") |
| `LiteracyStepper` | Indikator 4 langkah ① Pahami ② Rumuskan ③ Hitung ④ Tafsirkan di bagian atas soal |
| `HighlightableText` | Teks soal yang bisa diketuk untuk menandai data, pertanyaan, dan satuan |
| `AnswerInput` | Input angka dengan keyboard numerik (`inputmode="numeric"`) |
| `HintSheet` | Petunjuk 3 tingkat. Terbuka otomatis satu tingkat setiap jawaban belum tepat; bisa juga dibuka lewat tombol. Tidak pernah memuat jawaban akhir |
| `FormulaSheet` | Bottom sheet kartu rumus topik |
| `FeedbackBanner` | Umpan balik di bawah input: tepat / belum tepat + penjelasan letak kesalahan (M1–M3) |
| `SolutionPanel` | Pembahasan (F13) langkah demi langkah memakai pola `StepReveal`. Mode **lengkap** setelah jawaban tepat; mode **terpandu** setelah petunjuk tingkat 3, dengan langkah terakhir berupa kotak isian untuk siswa |
| `EffortRating` | Skala 1–9 (skala Paas) dengan label ujung "Sangat ringan" dan "Sangat berat" |
| `BottomActionBar` | Tombol aksi utama yang menempel di bawah layar |

## 6. Alur Pengguna (User Flow)

```
[Beranda / Peta Materi Bentuk Akar]
        │ pilih subtopik
        ▼
[Kata Kunci (pre-training)] → [Kartu Mikro 1..n]
        │
        ▼
[Contoh Soal Lengkap ×2]   (StepReveal)
        │
        ▼
[Latihan Fading]  contoh 1 langkah kosong → 2 langkah kosong
        │
        ▼
[Latihan Mandiri]   (Pencari Faktor via tombol saja)
        │   ↕ Petunjuk / Tabel Kuadrat (bottom sheet)
        │
        │  setiap soal latihan:
        │  [Jawab] → [Periksa] → tepat? ── ya ──► [Lihat pembahasan lengkap] (opsional)
        │                          │
        │                          └ belum ─► [Umpan balik M1–M3] + [Petunjuk tingkat berikutnya]
        │                                     → [Coba lagi]  (tanpa batas percobaan)
        │                                     setelah petunjuk 3: [Pembahasan terpandu]
        │                                     (langkah terakhir tetap diisi siswa)
        ▼
[Ringkasan Sesi + Cek Beban (Paas)]
        │
        ▼
[Kembali ke Peta Materi]
```

Khusus **subtopik 6 (Soal Cerita: sisi persegi dari luas)**, setiap soal memakai Pemandu 4 Langkah:
```
① Pahami (tandai diketahui/ditanya/satuan) → ② Rumuskan → ③ Hitung → ④ Tafsirkan
        ▼
[Umpan balik / Pembahasan] → [Ringkasan Sesi + Cek Beban (Paas)]
```

## 6a. Urutan Mudah → Sulit

| Tingkat | Isi | Cara belajar (sesuai DS02) |
|---|---|---|
| 1 | √25, √36: akar kuadrat sempurna (subtopik 1) | Siswa **langsung mencoba sendiri**; kartu penjelasan singkat |
| 2 | √49 vs √50: bulat atau bentuk akar (subtopik 2) | Kartu singkat → coba sendiri |
| 3 | √(a × b) = √a × √b (subtopik 3) | Dijelaskan **pelan-pelan** dengan kartu mikro dan contoh |
| 4 | Faktor kuadrat sempurna terbesar dari 12, 20, 50, lalu 48, 72 (subtopik 4) | Pelan-pelan; Pencari Faktor penuh → sebagian → lewat tombol |
| 5 | √12, √20, √50 (satu faktor kuadrat) → √48, √72 (beberapa faktor, angka besar) (subtopik 5) | Contoh → latihan bertahap → latihan mandiri |
| 6 | Soal cerita pendek: sisi persegi dari luas, mis. 20 cm² (subtopik 6) | Pemandu 4 Langkah |

## 7. Wireframe (teks)

### 7.1 Beranda / Peta Materi Bentuk Akar (mobile)
Peta berbentuk **jalur vertikal** supaya urutan belajar terlihat jelas (dari dasar ke kompleks).
```
┌──────────────────────────────┐
│ NalarKu              ⚙       │
│ Bentuk Akar · Kelas VIII     │
│ ██████░░░░░░  3 dari 6       │
│                              │
│  ● 1 Pengenalan Bentuk Akar  │
│  │   ✓ Selesai               │
│  ● 2 Pengertian Bentuk Akar  │
│  │   ✓ Selesai               │
│  ● 3 Sifat Dasar             │
│  │   ✓ Selesai               │
│  ◉ 4 Faktor Kuadrat ⭐       │
│  │   Sedang · 40%  [Lanjut]  │
│  ○ 5 Menyederhanakan ⭐      │
│  │                           │
│  ○ 6 Soal Cerita             │
└──────────────────────────────┘
```
> Peta hanya menampilkan 6 subtopik MVP. Materi post-MVP tidak ditampilkan supaya pilihan tidak terlalu banyak.

### 7.2 Layar Latihan Awal (fading) — Menyederhanakan √72

Pencari Faktor tampil penuh. Di latihan mandiri, alat ini disembunyikan dan hanya dibuka lewat tombol.
```
┌──────────────────────────────┐
│ ←  Latihan 2 dari 5          │
│──────────────────────────────│
│ Sederhanakan  √72            │
│                              │
│ Pencari Faktor Kuadrat       │
│  1 × 72                      │
│  2 × 36  ← [36 = 6²] terbesar│
│  4 × 18     [4 = 2²]         │
│  8 × 9      [9 = 3²]         │
│                              │
│ √72 = [ 6 ] √[ 2 ]           │
│──────────────────────────────│
│ [💡 Petunjuk]  [📘 Tabel²]   │
│ [         Periksa        ]   │
└──────────────────────────────┘
```

### 7.3 Umpan Balik "Belum Tepat" (kesalahan M1)
```
┌──────────────────────────────┐
│ 🟠 Hampir! Belum paling      │
│ sederhana.                   │
│ 2√18 nilainya sama dengan √72│
│ tapi 18 masih punya faktor   │
│ kuadrat (9). Coba pakai      │
│ faktor kuadrat terbesar.     │
│ 💡 Petunjuk 1: Cari bilangan │
│ kuadrat yang membagi 72.     │
│ [       Coba lagi        ]   │
└──────────────────────────────┘
```
Petunjuk tingkat berikutnya muncul otomatis bila jawaban berikutnya masih belum tepat. Jawaban akhir tidak ditampilkan.

### 7.3a Pembahasan Jawaban (F13)
Mode lengkap (setelah jawaban tepat). Langkah muncul satu per satu supaya tidak membanjiri layar. Pada mode terpandu, langkah ④ diganti kotak isian `√72 = [ ] √[ ]` yang diisi siswa.
```
┌──────────────────────────────┐
│ ←  Pembahasan √72            │
│──────────────────────────────│
│ ① Faktor kuadrat sempurna    │
│   dari 72: 4, 9, 36          │
│ ② Pilih yang terbesar: 36    │
│   72 = 36 × 2                │
│ ③ √72 = √36 × √2             │
│ ④ √36 = 6, jadi √72 = 6√2    │
│   Cek: 2 tidak punya faktor  │
│   kuadrat lagi ✓             │
│──────────────────────────────│
│ [ Langkah berikutnya ]       │
│ [ Soal berikutnya    ]       │
└──────────────────────────────┘
```

### 7.4 Soal Cerita — Langkah ① Pahami
```
┌──────────────────────────────┐
│ ①Pahami ─ ②Rumus ─ ③Hitung ─ ④Tafsir │
│ Kebun sekolah berbentuk      │
│ persegi dengan [luas 20 cm²].│
│ [Berapa panjang sisinya]     │
│ dalam bentuk akar paling     │
│ sederhana?                   │
│ (🔵 Diketahui) (🟡 Ditanya)  │
│ [        Lanjut ②        ]   │
└──────────────────────────────┘
```

## 8. Mikro-copy (gaya bahasa)

| Situasi | ✅ Pakai | ❌ Hindari |
|---|---|---|
| Jawaban benar | "Tepat! Langkahmu rapi." | "Benar!!! 🎉🎉🎉" |
| Jawaban salah | "Belum tepat. Yuk cek langkah ②." | "Salah." |
| Setara tapi belum sederhana | "Hampir! Nilainya sudah sama, tinggal disederhanakan lagi." | "Salah." |
| Buntu | "Butuh petunjuk kecil?" | "Lihat jawaban" |
| Membuka pembahasan | "Lihat pembahasan" (setelah tepat) / "Pembahasan terpandu" | "Contek jawaban", "Lihat jawaban" |
| Selesai sesi | "Kamu sudah menyelesaikan 5 soal hari ini." | "Kamu peringkat 12!" |

Sapaan memakai "kamu", nadanya hangat dan tidak menggurui.

## 9. Aksesibilitas Checklist
- [ ] Kontras teks ≥ 4.5:1
- [ ] Target sentuh ≥ 44×44px
- [ ] Teks bisa diperbesar 200% tanpa layout rusak
- [ ] Rumus KaTeX diberi `aria-label` berisi bacaan rumusnya
- [ ] Fokus keyboard terlihat jelas
- [ ] Menghormati pengaturan `prefers-reduced-motion`
