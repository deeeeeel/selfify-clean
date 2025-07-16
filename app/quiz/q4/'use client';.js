'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const questions = [
  {
    question: 'Apa yang paling lo pikirin akhir-akhir ini?',
    options: [
      { text: 'Karir & masa depan', score: 3 },
      { text: 'Hubungan & perasaan', score: 4 },
      { text: 'Kesehatan & energi', score: 1 },
      { text: 'Uang & tagihan', score: 2 },
    ],
  },
  {
    question: 'Lo ngerasa lagi di fase hidup yang…',
    options: [
      { text: 'Bingung mau ke mana', score: 4 },
      { text: 'Lagi muter di situ-situ aja', score: 3 },
      { text: 'Baru mulai bangkit', score: 2 },
      { text: 'Coba nikmatin prosesnya', score: 1 },
    ],
  },
  {
    question: 'Lo pengen banget bisa…',
    options: [
      { text: 'Move on dari masa lalu', score: 4 },
      { text: 'Punya kejelasan hidup', score: 3 },
      { text: 'Hidup tanpa tekanan', score: 2 },
      { text: 'Bersyukur tiap hari', score: 1 },
    ],
  },
  {
    question: 'Kalau ada waktu sehari bebas, lo bakal…',
    options: [
      { text: 'Rebahan & healing', score: 2 },
      { text: 'Evaluasi & journaling', score: 1 },
      { text: 'Ngobrol sama orang tua', score: 3 },
      { text: 'Kabur ke tempat sepi', score: 4 },
    ],
  },
];

export default function QuizQ4Page() {
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
      router.push('/quiz/hasil4');
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
