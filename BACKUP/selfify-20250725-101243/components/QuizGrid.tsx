'use client';

import Link from 'next/link';

const quizCategories = [
  {
    name: 'Survive Mode',
    slug: 'Survive%20Mode',
    percent: 86,
    description: 'orang salah menjawab pertanyaan ini di interview',
  },
  {
    name: 'Mental Health',
    slug: 'Mental%20Health',
    percent: 72,
    description: 'orang bingung dengan soal self–check ini',
  },
  {
    name: 'Character Scan',
    slug: 'Character%20Scan',
    percent: 64,
    description: 'orang gagal identifikasi trait diri mereka',
  },
  {
    name: 'Relationship Decode',
    slug: 'Relationship%20Decode',
    percent: 81,
    description: 'orang sulit pilih jawaban tentang komunikasi',
  },
  {
    name: 'Self Reflection',
    slug: 'Self%20Reflection',
    percent: 75,
    description: 'orang ragu menyelami pikiran sendiri',
  },
  {
    name: 'Momomoney',
    slug: 'Momomoney',
    percent: 90,
    description: 'orang takut ambil keputusan keuangan ekstra',
  },
  {
    name: 'Life Phase Tracker',
    slug: 'Life%20Phase%20Tracker',
    percent: 68,
    description: 'orang bingung menghadapi fase hidup baru',
  },
  {
    name: 'Move On Meter',
    slug: 'Move%20On%20Meter',
    percent: 55,
    description: 'orang kesulitan move on dari masa lalu',
  },
];

export default function QuizGrid() {
  return (
    <section className="px-4 mb-8">
      <h3 className="text-center text-base font-medium mb-4">Quiz Snapshot</h3>

      {/* Slider container */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-4 pb-2">
          {quizCategories.map((cat) => (
            <div
              key={cat.slug}
              className="min-w-[160px] bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm flex-shrink-0"
            >
              <p className="text-lg font-semibold text-gray-900">{cat.name}</p>
              <p className="mt-2 text-4xl font-bold text-gray-900">
                {cat.percent}%
              </p>
              <p className="mt-1 text-sm text-gray-600 leading-snug">
                {cat.description}
              </p>
              <Link
                href={`/quiz?q=${cat.slug}`}
                className="mt-4 inline-block bg-gray-900 text-white rounded-full px-3 py-1 text-xs font-medium"
              >
                Cek Quiz
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
