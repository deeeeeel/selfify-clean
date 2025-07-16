'use client';

import Link from 'next/link';

const kategoriQuiz = [
  {
    icon: '🧠',
    title: 'Mental Health',
    desc: 'Refleksi kondisi mental & emosimu.',
    href: '/quiz/q1',
  },
  {
    icon: '💼',
    title: 'Survive Mode',
    desc: 'Tentang burnout, kerja, dan realita dewasa.',
    href: '/quiz/q2',
  },
  {
    icon: '🎭',
    title: 'Character',
    desc: 'Kenali tipe kepribadian dan gaya lo.',
    href: '/quiz/q3',
  },
  {
    icon: '🔍',
    title: 'Life Reflection',
    desc: 'Lagi di fase mana? Lagi mikirin apa?',
    href: '/quiz/q4',
  },
  // Tambahin kategori lain di sini nanti
];

export default function QuizKategoriPage() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6 text-blue-700 text-center">
        Pilih Kategori Quiz Lo 🔎
      </h1>
      <div className="grid gap-4">
        {kategoriQuiz.map((item, i) => (
          <div key={i} className="bg-white border rounded-xl shadow p-4 flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h3 className="font-bold text-blue-700">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
            <Link
              href={item.href}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700"
            >
              Lihat Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
