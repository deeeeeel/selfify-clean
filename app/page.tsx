'use client';

import React, { useState, useEffect } from 'react';
import BottomNav from '@/components/BottomNav';

// Dummy confess list
const confessList = [
  'Gue lagi down, tapi tetep semangat. #SelfifyConfess',
  'Hari ini capek banget, tapi harus kuat!',
  'Kadang butuh ruang buat dengerin diri sendiri.',
  'Ternyata curhat random bisa bikin lega!'
];

// format date
function getTanggalIndonesia() {
  const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  const hari = ["Mgg","Sen","Sel","Rab","Kam","Jum","Sab"];
  const d = new Date();
  return `${hari[d.getDay()]}, ${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
}

export default function HomePage() {
  const [confessIdx, setConfessIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setConfessIdx(i => (i + 1) % confessList.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex flex-col items-center bg-[#FCFAFF] min-h-screen pb-28">
      {/* HEADER */}
      <div className="w-full flex justify-between items-center px-4 pt-5 pb-3">
        <span className="text-gray-500 font-semibold text-base">
          {getTanggalIndonesia()}
        </span>
        <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
          <svg width={22} height={22} stroke="#555" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
            <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
          </svg>
        </button>
      </div>

      {/* CONFESS WALL */}
      <div className="w-[95%] relative bg-yellow-100 rounded-3xl shadow-md mb-6">
        {/* vertical slider window */}
        <div className="overflow-hidden rounded-3xl p-6 pt-8 pb-16 min-h-[140px]">
          <div
            className="transition-transform duration-500"
            style={{ transform: `translateY(-${confessIdx * 140}px)` }}
          >
            {confessList.map((text, i) => (
              <div key={i} className="h-[140px] flex items-center">
                <p className="mx-auto text-center text-gray-800 font-bold text-lg leading-snug">
                  “{text}”
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Confess button */}
        <button
          className="absolute right-4 bottom-4 bg-white border border-yellow-200 text-yellow-600 font-semibold text-sm px-4 py-1 rounded-full shadow"
          onClick={() => alert('Direct to /confess page')}
        >
          Confess Wall
        </button>
      </div>

      {/* (other sections unchanged…) */}
      {/* …Quiz Populer, grid cards, artikel grid, etc. */}

      {/* BOTTOM NAV */}
      <div className="fixed left-0 right-0 bottom-4 flex justify-center">
        <BottomNav />
      </div>
    </main>
  );
}
