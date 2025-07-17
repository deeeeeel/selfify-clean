'use client';

import { useState } from 'react';

const images = [
  '/assets/quotes/qm1.svg',
  // '/assets/quotes/qm2.svg',
];

export default function MoodQuotes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  const handleRandom = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="bg-[#FFF9C4] rounded-xl p-4 flex flex-col items-center space-y-4">
      <img
        src={currentImage}
        alt="Mood Quote"
        className="w-full max-w-xs rounded"
      />

      <div className="flex gap-2">
        <button
          onClick={handleRandom}
          className="bg-blue-600 text-white px-4 py-1 rounded-full font-medium text-sm"
        >
          🎲 Random
        </button>

        <div className="relative group">
          <button className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-medium text-sm">
            Share temen lo
          </button>
          <div className="absolute left-0 mt-2 bg-white rounded shadow hidden group-hover:flex flex-col z-50">
            <a
              href={`https://wa.me/?text=${encodeURIComponent('Cek ini deh! selfify.id')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 hover:bg-gray-100"
            >
              WhatsApp
            </a>
            <a
              href="https://x.com/intent/tweet?text=Selfify%20Quotes%20🟡%0Aselfify.id"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 hover:bg-gray-100"
            >
              X
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 hover:bg-gray-100"
            >
              Instagram
            </a>
          </div>
        </div>

        <a
          href={currentImage}
          download
          className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-medium text-sm"
        >
          Save
        </a>
      </div>
    </div>
  );
}
