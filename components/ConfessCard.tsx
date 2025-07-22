'use client';

import React from 'react';
import Link from 'next/link';
import { FaHeart, FaThumbsUp, FaCommentDots } from 'react-icons/fa';

export type ConfessCardProps = {
  id: number;
  text: string;
  love: number;
  like: number;
  comments: number;
  onComment: () => void;
};

export default function ConfessCard({ id, text, love, like, comments, onComment }: ConfessCardProps) {
  return (
    <div className="relative bg-black rounded-3xl shadow-md pt-8 pb-16 px-3 min-h-[180px] overflow-visible">
      {/* Layer Putih */}
      <div className="relative z-10 w-[90%] mx-auto -mt-8 bg-white rounded-2xl shadow-lg px-6 py-8 text-center italic text-black font-['Trebuchet_MS']">
        &quot;{text}&quot;
      </div>

      {/* Reactions & actions */}
      <div className="absolute left-6 bottom-5 flex gap-4 text-sm text-white z-20">
        <span className="flex items-center gap-1">
          <FaHeart className="text-red-400" /> {love}
        </span>
        <span className="flex items-center gap-1">
          <FaThumbsUp className="text-blue-300" /> {like}
        </span>
        <button onClick={onComment} className="flex items-center gap-1">
          <FaCommentDots className="text-gray-300" /> {comments}
        </button>
      </div>

      {/* Link to full wall */}
      <Link href="/confess" className="absolute right-6 bottom-4 bg-white text-black font-bold text-xs rounded-full px-5 py-1 shadow-sm hover:bg-gray-100 transition z-20">
        Confess Wall
      </Link>
    </div>
  );
}