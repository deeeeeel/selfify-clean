'use client';

import { useState } from 'react';
import { FaRegThumbsUp, FaRegHeart, FaRegCommentDots } from 'react-icons/fa';

export default function ConfessWall() {
  const [confessText, setConfessText] = useState('');

  return (
    <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 space-y-4">
      <textarea
        className="w-full h-24 bg-zinc-800 text-white p-3 rounded-lg placeholder-zinc-500 resize-none text-sm"
        placeholder="Apa yang kamu pikirkan..."
        value={confessText}
        onChange={(e) => setConfessText(e.target.value)}
      />

      <div className="flex items-center justify-between">
        <div className="flex gap-3 text-xl text-white">
          <FaRegThumbsUp className="hover:text-yellow-500 cursor-pointer" />
          <FaRegHeart className="hover:text-red-500 cursor-pointer" />
          <FaRegCommentDots className="hover:text-blue-400 cursor-pointer" />
        </div>
        <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
          Dinding Pengakuan
        </button>
      </div>
    </div>
  );
}
