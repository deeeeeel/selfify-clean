'use client';

import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

// Dummy: array jumlah user untuk masing-masing kategori (atau bisa satu angka aja buat semua)
const quizCategories = [
  { name: 'Mental Health', users: 180 },
  { name: 'Survive Mode', users: 140 },
  { name: 'Character Scan', users: 97 },
  { name: 'Relationship Decode', users: 122 },
  { name: 'Self Reflection', users: 110 },
  { name: 'Momomoney', users: 99 },
  { name: 'Life Phase Tracker', users: 88 },
  { name: 'Gen Lo, Gen Gue', users: 74 },
  { name: 'Move On Meter', users: 81 },
];

export default function QuizGrid() {
  return (
    <div className="max-w-[360px] mx-auto mb-8">
      <h2 className="font-['Trebuchet_MS'] text-base font-bold text-black mb-2 text-center tracking-wide"></h2>
      <div className="grid grid-cols-3 gap-2">
        {quizCategories.map((cat) => (
          <Link
            key={cat.name}
            href={`/quiz?q=${encodeURIComponent(cat.name)}`}
            className="relative block text-center text-sm font-semibold font-['Trebuchet_MS'] text-white bg-[#23272F] rounded-2xl py-4 px-2 shadow"
            style={{ minHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {/* Icon hati + jumlah user pojok kiri atas */}
            <span className="absolute left-2 top-2 flex items-center gap-1 text-xs text-pink-400">
              <FaHeart className="text-pink-400" size={13} />
              <span className="text-[10px] text-gray-200 font-bold">{cat.users}</span>
            </span>
            {/* Nama kategori quiz */}
            <span className="w-full text-center leading-[1.05]">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
