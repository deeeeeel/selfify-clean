'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { dummyConfess } from '@/lib/dummyConfess';
import { FaHeart, FaThumbsUp, FaCommentDots } from 'react-icons/fa';

export default function ConfessWall() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setCurrent((i) => (i+1) % dummyConfess.length), 3000);
    return () => clearInterval(iv);
  }, []);

  const { text, love, like, comment } = dummyConfess[current];

  return (
    <div className="relative max-w-[360px] mx-auto mb-6">
      <div className="bg-[#23272F] rounded-3xl shadow-xl pt-8 pb-16 px-0 relative min-h-[180px] overflow-visible">
        {/* Card putih */}
        <div className="absolute left-3 right-3 -top-8 z-20 bg-white rounded-2xl shadow-lg px-6 py-8 text-center flex items-center justify-center">
          <p className="text-lg italic text-black font-['Trebuchet_MS']">"{text}"</p>
        </div>
        {/* Icons */}
        <div className="absolute left-6 bottom-5 flex gap-4 text-sm text-white z-30">
          <FaHeart className="text-red-400" /> {love}
          <FaThumbsUp className="text-blue-300" /> {like}
          <FaCommentDots className="text-gray-300" /> {comment}
        </div>
        {/* View all */}
        <Link href="/confess" className="absolute right-6 bottom-4 bg-white text-black font-bold text-xs rounded-full px-5 py-1 shadow-sm hover:bg-gray-100 transition z-30">
          Confess Wall
        </Link>
      </div>
    </div>
  );
}

