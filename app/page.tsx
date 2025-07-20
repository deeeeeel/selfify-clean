'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BottomNav from '@/components/BottomNav';
import { Bell } from 'lucide-react';

const confessList = [
  'Gue lagi down, tapi tetep semangat. #SelfifyConfess',
  'Hari ini capek banget, tapi harus kuat!',
  'Kadang butuh ruang buat dengerin diri sendiri.',
  'Ternyata curhat random bisa bikin lega!'
];

export default function HomePage() {
  const [confessIdx, setConfessIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setConfessIdx(i => (i + 1) % confessList.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // tanggal indonesia singkat
  function getTanggal() {
    const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'];
    const hari = ['Mgg', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    const d = new Date();
    return `${hari[d.getDay()]}, ${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
  }

  return (
    <main className="min-h-screen bg-[#FCFAFF] flex flex-col items-center pb-28" style={{ maxWidth: 360, margin: '0 auto' }}>
      {/* HEADER */}
      <header className="w-full px-4 pt-4 flex items-center justify-between">
        <span className="text-gray-600 text-sm font-medium">{getTanggal()}</span>
        <button className="p-2 rounded-full bg-white shadow">
          <Bell size={20} className="text-gray-600" />
        </button>
      </header>

      {/* CONFESS WALL */}
      <section className="w-[95%] mt-4 relative bg-yellow-100 rounded-3xl p-6 shadow-md" style={{ minHeight: 200 }}>
        {/* Slider text */}
        <div className="h-full flex items-center justify-center px-2">
          <p className="text-gray-800 font-bold text-lg text-center leading-snug select-none">
            &quot;{confessList[confessIdx]}&quot;
          </p>
        </div>
        {/* Tombol */}
        <button
          className="absolute bottom-4 right-4 bg-white text-yellow-500 font-semibold text-sm px-3 py-1 rounded-full shadow border border-yellow-200 hover:bg-yellow-50 transition active:scale-95"
          onClick={() => window.location.href = '/confess'}
        >
          Confess Wall
        </button>
      </section>

      {/* QUIZ POPULER ETC... rest of page remains unchanged */}

      {/* Bottom Nav */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <BottomNav />
      </div>
    </main>
  );
}
