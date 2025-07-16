'use client';

import { useState } from 'react';

const quotes = [
  'Lo gak harus kuat terus, yang penting bertahan.',
  'Hidup bukan lomba. Lo boleh pelan.',
  'Jangan lupa senyum, walau cuma ke diri sendiri.',
  'Istirahat bukan berarti menyerah.',
];

export default function MoodQuotes() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  const shareText = encodeURIComponent(
    `"${quotes[index]}" — from Selfify 💛 https://selfify.id`
  );

  return (
    <div className="bg-yellow-100 text-center p-4 rounded-xl">
      <p className="italic text-lg mb-3">"{quotes[index]}"</p>
      <div className="flex justify-center gap-3">
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-3 py-1 rounded-xl text-sm"
        >
          🎲 Random
        </button>
        <a
          href={`https://wa.me/?text=${shareText}`}
          target="_blank"
          className="text-sm bg-green-500 text-white px-3 py-1 rounded-xl"
        >
          Share WA
        </a>
      </div>
    </div>
  );
}
