# ARCHITECTURE.md — Arsitektur Teknis

## 1. Gambaran Umum

MVP berbentuk **aplikasi statis (SPA + PWA) tanpa backend**. Semua konten dibundel dari folder `src/content/`, dan progres siswa disimpan di IndexedDB pada perangkat.

```
┌───────────────────────── Browser (HP / Laptop) ─────────────────────────┐
│  React UI ──► Lesson Engine ──► Answer Checker                          │
│     │              │                                                    │
│     │              └──► Content Loader (data dari src/content, di-cache)│
│     └──► Progress Store (IndexedDB) ──► Ekspor CSV (data penelitian)    │
│  Service Worker (Workbox): cache aset & konten → mode offline           │
└─────────────────────────────────────────────────────────────────────────┘
                 ▲ hosting statis (Vercel / Netlify / GitHub Pages)
```

**Alasan tanpa backend di MVP:** biaya nol, sederhana, privasi terjaga, dan bisa offline. Kalau nanti butuh dasbor guru, tambahkan **Supabase** (Postgres + Auth) di fase berikutnya.

## 2. Tech Stack

| Lapisan | Pilihan | Alasan |
|---|---|---|
| Build | Vite | Cepat dan sederhana |
| UI | React 18 + TypeScript | Ekosistem besar, banyak materi belajar |
| Styling | Tailwind CSS | Konsisten dengan design token |
| Routing | React Router | Standar |
| State | Zustand | Ringan, cukup untuk state sesi |
| Rumus | KaTeX | Jauh lebih ringan dan cepat daripada MathJax |
| Penyimpanan | Dexie (IndexedDB) | Progres offline |
| PWA | vite-plugin-pwa (Workbox) | Bisa dipasang dan offline |
| Test | Vitest + Testing Library | Menguji Answer Checker dan komponen |
| Deploy | Vercel / Netlify | Gratis, HTTPS otomatis (wajib untuk PWA) |

## 3. Model Data Konten

### 3.1 Subtopik — `src/content/topics/menyederhanakan-akar.json`
```json
{
  "id": "menyederhanakan-akar",
  "order": 5,
  "title": "Menyederhanakan Bentuk Akar",
  "keywords": [
    { "term": "Kuadrat sempurna", "meaning": "Bilangan hasil kuadrat bilangan bulat: 1, 4, 9, 16, 25, …" },
    { "term": "Bentuk akar sederhana", "meaning": "Bentuk a√b dengan b tidak lagi punya faktor kuadrat sempurna selain 1." }
  ],
  "microCards": [
    { "id": "mc1", "title": "Sifat kunci", "body": "√(a × b) = √a × √b", "latex": "\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}" }
  ],
  "formulas": [
    { "label": "Sifat perkalian akar", "latex": "\\sqrt{a \\times b} = \\sqrt{a}\\,\\sqrt{b}" }
  ],
  "workedExamples": ["we-sed-01", "we-sed-02"],
  "practice": ["pr-sed-01", "pr-sed-02", "pr-sed-03"]
}
```

### 3.2 Soal — `src/content/problems/pr-sed-01.json`
```json
{
  "id": "pr-sed-01",
  "type": "practice",
  "fadeLevel": 1,
  "stem": "Sederhanakan √72.",
  "factorFinder": "partial",
  "steps": [
    { "prompt": "Faktor kuadrat sempurna terbesar dari 72 adalah …", "answer": { "kind": "number", "value": 36 }, "prefilled": true },
    { "prompt": "Tulis 72 sebagai perkalian", "latex": "\\sqrt{72} = \\sqrt{36 \\times 2}", "prefilled": true },
    { "prompt": "Bentuk sederhana √72 = …", "answer": { "kind": "radical", "coef": 6, "radicand": 2 }, "prefilled": false }
  ],
  "hints": [
    "Cari bilangan kuadrat (4, 9, 16, 25, 36, …) yang bisa membagi 72.",
    "Pilih yang terbesar. 72 ÷ 36 = 2, jadi 72 = 36 × 2.",
    "Contoh serupa: √50 = √(25 × 2) = 5√2."
  ],
  "misconceptions": [
    { "code": "M1", "match": { "coef": 2, "radicand": 18 }, "feedback": "Langkahmu benar, tapi 18 masih punya faktor kuadrat (9). Coba faktor kuadrat yang lebih besar dari 4." },
    { "code": "M3", "match": { "coef": 36, "radicand": 2 }, "feedback": "36 memang faktor kuadratnya, tapi yang keluar dari akar adalah √36 = 6." }
  ],
  "solution": [
    { "text": "Faktor kuadrat sempurna dari 72: 4, 9, dan 36.", "latex": "72 = 4 \\times 18 = 9 \\times 8 = 36 \\times 2" },
    { "text": "Pilih yang terbesar, yaitu 36.", "latex": "\\sqrt{72} = \\sqrt{36 \\times 2}" },
    { "text": "Pisahkan akarnya.", "latex": "= \\sqrt{36} \\times \\sqrt{2}" },
    { "text": "√36 = 6. Isi akar 2 tidak punya faktor kuadrat lagi.", "latex": "= 6\\sqrt{2}", "final": true }
  ]
}
```

> Validator konten mengecek otomatis bahwa coef² × radicand = bilangan di soal (6² × 2 = 72), bahwa radicand sudah tidak punya faktor kuadrat, dan bahwa setiap soal punya 3 `hints`, ≥ 1 `misconceptions`, serta `solution` yang tidak kosong.
>
> Field `solution` dipakai oleh `SolutionPanel` (F13). Aturan alurnya ada di `features/practice/`, bukan di data konten: petunjuk naik satu tingkat setiap jawaban belum tepat; pembahasan lengkap hanya setelah tepat; pembahasan terpandu setelah petunjuk tingkat 3, dengan langkah `final` menjadi isian siswa.

### 3.2a Jenis Jawaban (`answer.kind`)
| kind | Bentuk input | Contoh |
|---|---|---|
| `number` | 1 kotak angka | 36 |
| `radical` | 2 kotak: koefisien **a** dan isi akar **b** → a√b | 6 √ 2 |
| `choice` | Pilihan ganda | — |

### 3.3 Progres (IndexedDB)
```ts
interface Attempt {
  id: string;            // uuid
  problemId: string;
  stepIndex: number;
  answer: string;
  correct: boolean;
  hintsUsed: number;
  durationMs: number;
  timestamp: number;
}

interface SessionLog {
  id: string;
  topicId: string;
  startedAt: number;
  endedAt: number;
  paasRating?: number;   // 1–9
}

interface TopicProgress {
  topicId: string;
  completedCards: string[];
  completedProblems: string[];
  consecutiveCorrect: number; // dipakai untuk expertise reversal (kurangi scaffold)
}

// Field tambahan di Attempt untuk analisis penelitian:
//   misconceptionCode?: 'M1' | 'M2' | 'M3';
//   solutionViewed: boolean;   // apakah pembahasan (F13) dibuka
```

## 4. Modul Inti

| Modul | Tanggung jawab |
|---|---|
| `lib/answerChecker.ts` | Menormalisasi input ("0,5" = "0.5"). Untuk jawaban `radical`: cek nilai setara (a²b sama) **dan** cek bentuk paling sederhana. Jawaban dicocokkan ke kode kesalahan M1–M3 |
| `lib/radical.ts` | Fungsi matematika: daftar pasangan faktor, faktor kuadrat sempurna terbesar, menyederhanakan √n (dipakai oleh Pencari Faktor Kuadrat dan validator) |
| `lib/contentLoader.ts` | Memuat dan memvalidasi JSON konten (dengan skema Zod) |
| `lib/storage.ts` | Pembungkus Dexie: menyimpan percobaan, sesi, dan progres |
| `lib/exportCsv.ts` | Mengekspor log untuk keperluan analisis penelitian |
| `features/scaffold/` | Logika fading dan pengurangan bantuan berdasarkan `consecutiveCorrect` |

## 5. Routing

| Path | Halaman |
|---|---|
| `/` | Peta Materi Bentuk Akar |
| `/topik/:id` | Ringkasan topik + kata kunci |
| `/topik/:id/materi` | Kartu mikro |
| `/topik/:id/contoh/:pid` | Contoh soal (StepReveal) |
| `/topik/:id/latihan/:pid` | Latihan (fading/mandiri). Soal cerita memakai Pemandu 4 Langkah. Pembahasan (F13) tampil di layar yang sama sebagai panel, tanpa route terpisah |
| `/ringkasan` | Ringkasan sesi + Cek Beban |
| `/pengaturan` | Tema, ukuran font, ekspor data, reset |

## 6. Keamanan & Privasi
- Tidak ada login dan tidak ada data pribadi di MVP.
- Kode peserta untuk penelitian (mis. "S01") diisi manual oleh siswa di pengaturan, jadi tidak memakai nama asli.
- Ekspor CSV hanya dilakukan oleh pengguna sendiri (diunduh ke perangkat).

## 7. Pengujian
- **Unit test:** `radical.ts` dan `answerChecker` (prioritas tertinggi, karena salah menilai berarti umpan balik salah).
- **Validasi konten:** skrip yang mengecek semua JSON sesuai skema saat `npm run build`.
- **Uji manual:** di HP Android sungguhan dengan throttling 3G.
- **Lighthouse:** Performance ≥ 85, PWA lolos, Accessibility ≥ 90.
