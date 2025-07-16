'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const questions = [
  {
    question: 'Lo lebih suka ngambil keputusan dengan…',
    options: [
      { text: 'Logika & data', score: 1 },
      { text: 'Insting & hati', score: 4 },
      { text: 'Tanya temen', score: 2 },
      { text: 'Liat tren', score: 3 },
    ],
  },
  {
    question: 'Lo biasanya dikenal sebagai orang yang…',
    options: [
      { text: 'Kritis & detail', score: 1 },
      { text: 'Empatik & pengertian', score: 4 },
      { text: 'Santai & nyambung ke semua', score: 3 },
      { text: 'Lucu tapi misterius', score: 2 },
    ],
  },
  {
    question: 'Kata temen, lo tipe yang…',
    options: [
      { text: 'Ngatur & terstruktur', score: 1 },
      { text: 'Care & peka', score: 4 },
      { text: 'Random tapi seru', score: 3 },
      { text: 'Tenang & gak banyak bacot', score: 2 },
    ],
  },
  {
    question: 'Kalau punya waktu bebas, lo lebih milih…',
    options: [
      { text: 'Riset & baca hal menarik', score: 1 },
      { text: 'Dengerin curhat orang', score: 4 },
      { text: 'Ngonten/ngobrol random', score: 3 },
      { text: 'Main sendiri sambil mikir', score: 2 },
    ],
  },
];

export default function QuizQ3Page() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleAnswer = (scoreValue: number) => {
    const nextScore = score + scoreValue;
    if (current < questions.length - 1) {
      setScore(nextScore);
      setCurrent(current + 1);
    } else {
      localStorage.setItem('quiz_score', nextScore.toString());
      router.push('/quiz/hasil3');
    }
  };

  const q = questions[current];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 text-center">
      <h2 className="text-xl font-bold mb-6">{q.question}</h2>
      <div className="flex flex-col gap-3 w-full max-w-md">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt.score)}
            className="bg-blue-500 text-white p-3 rounded-xl shadow hover:bg-blue-600"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
