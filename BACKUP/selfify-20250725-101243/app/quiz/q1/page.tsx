'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const questions = [
  {
    question: 'Apa yang paling bikin lo stres di hari kerja?',
    options: [
      { text: 'Deadline numpuk', score: 3 },
      { text: 'Bos toxic', score: 4 },
      { text: 'Kerjaan monoton', score: 2 },
      { text: 'Rekan kerja ngeselin', score: 1 },
    ],
  },
  {
    question: 'Gimana lo biasanya ngadepin masalah?',
    options: [
      { text: 'Ngobrol sama temen', score: 2 },
      { text: 'Tidur', score: 1 },
      { text: 'Overthinking', score: 4 },
      { text: 'Lari dari kenyataan', score: 3 },
    ],
  },
  {
    question: 'Lo merasa hidup lo sekarang?',
    options: [
      { text: 'Terkendali', score: 1 },
      { text: 'Ngambang', score: 2 },
      { text: 'Amburadul', score: 4 },
      { text: 'B aja', score: 3 },
    ],
  },
  {
    question: 'Apa hal yang paling lo pengen saat ini?',
    options: [
      { text: 'Liburan', score: 2 },
      { text: 'Dipeluk', score: 3 },
      { text: 'Uang', score: 4 },
      { text: 'Tidur nyenyak', score: 1 },
    ],
  },
];

export default function QuizQ1Page() {
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
      router.push('/quiz/hasil1');
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
