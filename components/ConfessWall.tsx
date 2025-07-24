// File: components/ConfessWall.tsx
// Deskripsi: Carousel confess di homepage, sudah diperbarui menggunakan properti 'comments' dari DummyConfess

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaHeart, FaThumbsUp, FaCommentDots } from 'react-icons/fa';
import { dummyConfess } from '@/lib/dummyConfess';

export default function ConfessWall() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setCurrent((i) => (i + 1) % dummyConfess.length);
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  // Pastikan kita destructuring 'comments', bukan 'comment'
  const { text, love, like, comments } = dummyConfess[current];

  return (
    <div className="relative max-w-[360px] mx-auto mb-6">
      {/* Background charcoal */}
      <div className="bg-[#23272F] rounded-3xl shadow-xl pt-8 pb-16 px-0 relative min-h-[180px] overflow-visible -mt-1">
        {/* Card putih */}
        <div className="absolute left-1 right-1 top-1 z-0 bg-white rounded-3xl shadow-lg px-6 py-8 text-center">
          <p className="italic text-lg text-black font-['Trebuchet_MS']">"{text}"</p>
        </div>

        {/* Reaction icons */}
        <div className="absolute left-6 bottom-5 flex gap-4 text-sm text-white z-30">
          <span className="flex items-center gap-1">
            <FaHeart className="text-red-400" /> {love}
          </span>
          <span className="flex items-center gap-1">
            <FaThumbsUp className="text-blue-300" /> {like}
          </span>
          <span className="flex items-center gap-1">
            <FaCommentDots className="text-gray-300" /> {comments}
          </span>
        </div>

        {/* Link ke halaman penuh */}
        <Link
          href="/confess"
          className="absolute right-6 bottom-4 bg-white text-black font-bold text-xs rounded-full px-5 py-1 shadow-sm hover:bg-gray-100 transition z-30"
        >
          Confess Wall
        </Link>
      </div>
    </div>
  );
}
