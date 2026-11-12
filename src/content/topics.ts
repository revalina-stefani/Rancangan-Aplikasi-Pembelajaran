/**
 * Peta Materi Bentuk Akar — urutan dari dasar ke kompleks (docs/PRD.md §5).
 * Konten diedit di sini, terpisah dari komponen UI.
 */
export interface Topic {
  id: string;
  order: number;
  title: string;
  goal: string;
  /** false = belum tersedia di MVP ("Segera hadir") */
  available: boolean;
  /** subtopik fokus utama dari hasil wawancara */
  focus?: boolean;
}

export const SUBJECT = {
  title: 'Bentuk Akar',
  grade: 'Kelas VIII',
};

export const TOPICS: Topic[] = [
  {
    id: 'kuadrat-dan-akar',
    order: 1,
    title: 'Kuadrat & Akar Kuadrat',
    goal: 'Mengenali bilangan kuadrat sempurna 1 sampai 225.',
    available: true,
  },
  {
    id: 'mengenal-bentuk-akar',
    order: 2,
    title: 'Mengenal Bentuk Akar',
    goal: 'Membedakan √49 (hasilnya bulat) dan √50 (bentuk akar).',
    available: true,
  },
  {
    id: 'menyederhanakan-akar',
    order: 3,
    title: 'Menyederhanakan Bentuk Akar',
    goal: 'Menemukan faktor kuadrat sempurna terbesar, lalu menyederhanakan.',
    available: true,
    focus: true,
  },
  {
    id: 'penjumlahan-pengurangan',
    order: 4,
    title: 'Penjumlahan & Pengurangan',
    goal: 'Menjumlahkan dan mengurangkan akar sejenis.',
    available: true,
  },
  {
    id: 'perkalian-pembagian',
    order: 5,
    title: 'Perkalian & Pembagian',
    goal: 'Mengalikan dan membagi bentuk akar.',
    available: false,
  },
  {
    id: 'merasionalkan-penyebut',
    order: 6,
    title: 'Merasionalkan Penyebut',
    goal: 'Menghilangkan bentuk akar dari penyebut pecahan.',
    available: false,
  },
  {
    id: 'soal-cerita',
    order: 7,
    title: 'Soal Cerita Bentuk Akar',
    goal: 'Memakai bentuk akar untuk masalah sehari-hari, langkah demi langkah.',
    available: true,
  },
];

export function findTopic(id: string | undefined): Topic | undefined {
  return TOPICS.find((t) => t.id === id);
}
