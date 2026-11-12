/** Semua teks UI dikumpulkan di sini (CLAUDE.md §5). */
export const STR = {
  appName: 'NalarKu',
  mapHeading: 'Peta Materi',
  progressOf: (done: number, total: number) => `${done} dari ${total} selesai`,
  status: {
    notStarted: 'Belum dimulai',
    inProgress: 'Sedang dipelajari',
    done: 'Selesai',
    comingSoon: 'Segera hadir',
  },
  focusBadge: 'Fokus utama',
  start: 'Mulai',
  continue: 'Lanjut',
  review: 'Ulangi',
  back: 'Kembali',
  recommendedNext: 'Disarankan berikutnya',
  detailPlaceholder: 'Materi untuk subtopik ini sedang disiapkan. Nantinya penjelasan, contoh soal, dan latihan akan muncul di sini.',
  notFound: 'Halaman tidak ditemukan.',
  backToMap: 'Kembali ke Peta Materi',
} as const;
