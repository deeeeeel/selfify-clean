'use client';

import { useEffect, useState } from 'react';

const dummyConfess = [
  'Gue ngerasa capek banget tapi gak bisa berhenti kerja 😩',
  'Kadang gue pengen ilang bentar aja dari semua ini.',
  'Gue kangen masa kecil. Hidup dulu gak serumit ini.',
  'Harusnya gue lebih sayang sama diri sendiri.',
];

export default function ConfessSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dummyConfess.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white border p-4 rounded-xl shadow text-gray-800 min-h-[80px]">
      <p className="italic text-sm">"{dummyConfess[index]}"</p>
    </div>
  );
}
