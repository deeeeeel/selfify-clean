'use client';

import Link from 'next/link';

// Dummy data untuk 8 kategori Snapshot Review
const quizCategoriesReview = [
  { name: 'Survive Mode', percent: 86, description: 'orang salah menjawab pertanyaan ini di interview' },
  { name: 'Mental Health', percent: 72, description: 'orang bingung dengan soal self–check ini' },
  { name: 'Character Scan', percent: 64, description: 'orang gagal identifikasi trait diri mereka' },
  { name: 'Relationship Decode', percent: 81, description: 'orang sulit pilih jawaban tentang komunikasi' },
  { name: 'Self Reflection', percent: 75, description: 'orang ragu menyelami pikiran sendiri' },
  { name: 'Momomoney', percent: 90, description: 'orang takut ambil keputusan keuangan ekstra' },
  { name: 'Life Phase Tracker', percent: 68, description: 'orang bingung menghadapi fase hidup baru' },
  { name: 'Move On Meter', percent: 55, description: 'orang kesulitan move on dari masa lalu' },
];

export default function QuizGrid() {
  return (
    <section className="px-4 mb-8">
      <h3 className="max-w-md mx-auto mb-2 text-base font-medium text-center">
        Quiz Snapshot
      </h3>
      <div className="max-w-md mx-auto overflow-x-auto no-scrollbar">
        <div className="flex space-x-3 pb-2">
          {quizCategoriesReview.map((cat) => (
            <div
              key={cat.name}
              className="min-w-[160px] bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm"
            >
              <p className="text-lg font-semibold text-gray-900">{cat.name}</p>
              <p className="mt-3 text-4xl font-bold text-gray-900">{cat.percent}%</p>
              <p className="mt-1 text-sm text-gray-600 leading-snug">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
