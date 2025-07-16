'use client';

import { useEffect, useState } from 'react';

export default function HasilPage() {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState({
    title: '',
    advice: '',
  });

  useEffect(() => {
    const saved = localStorage.getItem('quiz_score');
    const scoreInt = saved ? parseInt(saved) : 0;
    setScore(scoreInt);

    if (scoreInt <= 6) {
      setResult({
        title: 'Kamu cukup tenang',
        advice: 'Tetap jaga keseimbangan ya. Jangan lupa rehat walau sebentar.',
      });
    } else if (scoreInt <= 10) {
      setResult({
        title: 'Kamu mulai lelah',
        advice: 'Coba ceritain keresahan lo ke orang yang bisa dipercaya.',
      });
    } else {
      setResult({
        title: 'Kamu butuh jeda',
        advice: 'Waktunya ambil libur. Diri lo butuh dipeluk, bukan ditekan.',
      });
    }
  }, []);

  const shareText = encodeURIComponent(
    `Hasil quiz Selfify gue: "${result.title}". ${result.advice} — https://selfify.id`
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h2 className="text-2xl font-bold mb-2">{result.title}</h2>
      <p className="mb-6 text-gray-700">{result.advice}</p>

      <div className="flex gap-3 flex-wrap justify-center">
        <a
          href={`https://wa.me/?text=${shareText}`}
          target="_blank"
          className="bg-green-500 text-white px-4 py-2 rounded-xl"
        >
          Share WA
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${shareText}`}
          target="_blank"
          className="bg-blue-400 text-white px-4 py-2 rounded-xl"
        >
          Share X
        </a>
        <a
          href={`https://t.me/share/url?url=https://selfify.id&text=${shareText}`}
          target="_blank"
          className="bg-indigo-500 text-white px-4 py-2 rounded-xl"
        >
          Telegram
        </a>
      </div>
    </div>
  );
}
