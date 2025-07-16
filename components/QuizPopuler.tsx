'use client';

import Link from 'next/link';

const quizList = [
  {
    title: 'Apakah Lo Sedang Survive Mode?',
    slug: 'q1',
    desc: 'Cek apakah lo lagi bertahan atau berkembang?',
  },
  {
    title: 'Lo Tipe Karakter Seperti Apa?',
    slug: 'q3',
    desc: 'Refleksi sisi dominan dalam diri lo.',
  },
  {
    title: 'Seberapa Sehat Mental Lo?',
    slug: 'q5',
    desc: 'Evaluasi kondisi mental lo secara singkat.',
  },
];

export default function QuizPopuler() {
  return (
    <div className="grid gap-4">
      {quizList.map((quiz, i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow border">
          <h3 className="font-bold text-blue-700 mb-1">{quiz.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{quiz.desc}</p>
          <Link
            href={`/quiz/${quiz.slug}`}
            className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Mulai Quiz →
          </Link>
        </div>
      ))}
      <Link
        href="/quiz"
        className="text-center text-sm text-blue-500 underline mt-2"
      >
        Cek Semua Quiz
      </Link>
    </div>
  );
}
