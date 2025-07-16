'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const questions = [
  {
    question: 'Apa yang lo lakuin kalau lagi bad mood?',
    options: [
      { text: 'Nonton series seharian', score: 2 },
      { text: 'Makan apa aja asal enak', score: 3 },
      { text: 'Diam di kamar', score: 1 },
      { text: 'Ngobrol sama temen', score: 4 },
    ],
  },
  {
    question: 'Lo merasa nyaman saat…',
    options: [
      { text: 'Lagi sendiri', score: 1 },
      { text: 'Bareng temen deket', score: 4 },
      { text: 'Ngobrol sama orang baru', score: 3 },
      { text: 'Main game/sendiri di luar', score: 2 },
    ],
  },
  {
    question: 'Tipe reaksi lo kalau ada konflik?',
    options: [
      { text: 'Ngomong langsung', score: 4 },
      { text: 'Nunggu reda dulu', score: 3 },
      { text: 'Menyendiri', score: 1 },
    ],
  }, // ✅ ini yang tadi kurang
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleAnswer = (point: number) => {
    const nextQuestion = currentQuestion + 1;
    setScore(score + point);

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      router.push('/quiz/hasil2'); // ganti hasil2 sesuai kebutuhan
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{question.question}</h1>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.score)}
            className="block w-full bg-yellow-400 text-blue-900 p-2 rounded-md hover:bg-yellow-300"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
