'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BottomNav from '@/components/BottomNav';

export default function HomePage() {
  // daftar confess yang akan di-slide
  const confessList = [
    'Gue lagi down, tapi tetep semangat. #SelfifyConfess',
    'Hari ini capek banget, tapi harus kuat!',
    'Kadang butuh ruang buat dengerin diri sendiri.',
    'Ternyata curhat random bisa bikin lega!'
  ];

  // confess slider state
  const [confessIdx, setConfessIdx] = useState(0);

  useEffect(() => {
    // auto slider setiap 3 detik
    const timer = setInterval(() => {
      setConfessIdx(i => (i + 1) % confessList.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [confessList.length]);

  return (
    <main className="flex flex-col items-center bg-[#FCFAFF] min-h-screen py-4" style={{ maxWidth: 360, margin: '0 auto' }}>
      {/* Header tanggal dengan notifikasi */}
      <div className="w-full px-4 flex items-center justify-between pb-2">
        <div className="text-gray-500 font-semibold text-sm">
          Minggu, 20 Juli 2025
        </div>
        <button>
          <svg width={24} height={24} fill="none" stroke="#3B82F6" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        </button>
      </div>

      {/* Confess Wall Card */}
      <div className="w-[95%] relative rounded-3xl bg-yellow-100 shadow-md px-6 pt-8 pb-8 mb-6 flex flex-col justify-between">
        {/* Confess Slider */}
        <div className="w-full min-h-[60px] flex items-center justify-center px-2">
          <span className="text-[1.3rem] font-bold text-gray-800 leading-snug text-center select-none">
            &quot;{confessList[confessIdx]}&quot;
          </span>
        </div>

        {/* Tombol “Confess Wall” di pojok kanan bawah */}
        <button
          className="absolute right-6 bottom-6 bg-white px-3 py-1 rounded-2xl shadow border border-yellow-200 text-yellow-500 font-bold text-sm hover:bg-yellow-100 active:scale-95 transition"
          onClick={() => alert('Fitur input confess coming soon')}
        >
          Confess Wall
        </button>
      </div>

      {/* Quiz Populer */}
      <div className="w-full px-4 mb-6">
        <div className="font-bold text-2xl text-gray-800 mb-3">Quiz Populer</div>
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {[
            { name: 'Mental Health', border: 'border-yellow-400' },
            { name: 'Survive Mode', border: 'border-blue-400' },
            { name: 'Character', border: 'border-gray-200' },
            { name: 'Relationship', border: 'border-gray-200' },
            { name: 'Self Reflection', border: 'border-gray-200' }
          ].map(item => (
            <div
              key={item.name}
              className={`flex-none min-w-[125px] rounded-2xl py-4 px-2 text-center font-bold text-[1.13rem] text-blue-700 bg-white border-2 ${item.border} shadow-sm`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* GRID Quotes, Survive Mode & 2AM Lounge */}
      <div className="px-4 grid grid-cols-2 gap-4 mb-8">
        {/* Mood Quotes */}
        <div className="row-span-2 bg-yellow-100 rounded-3xl p-5 flex flex-col justify-between shadow-md min-h-[310px]">
          <span className="text-yellow-800 font-semibold text-base mb-2">Mood Quotes</span>
          <p className="text-[1.05rem] font-bold flex-1 leading-snug mb-4">
            &quot;Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan.&quot;
          </p>
          <div className="flex gap-3">
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow text-yellow-500 border border-yellow-200">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </button>
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow text-yellow-500 border border-yellow-200">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
          </div>
        </div>

        {/* Survive Mode */}
        <div className="bg-blue-100 rounded-3xl p-5 flex flex-col justify-between shadow-md min-h-[200px]">
          <span className="text-blue-700 font-semibold text-base mb-2">Survive Mode</span>
          <p className="font-bold text-base leading-snug flex-1 mb-4">
            Tes ketahanan mental & bertahan hidup!
          </p>
          <button className="mt-auto bg-blue-600 text-white px-7 py-2 rounded-2xl font-semibold shadow">
            Masuk
          </button>
        </div>

        {/* 2AM Lounge */}
        <div className="col-span-2 bg-pink-100 rounded-3xl p-5 flex flex-col justify-between shadow-md min-h-[100px]">
          <div className="flex justify-between items-center">
            <span className="text-pink-700 font-semibold text-base">2AM Lounge</span>
            <svg width={24} height={24} fill="none" stroke="#ec4899" strokeWidth={2} viewBox="0 0 24 24">
              <rect x={5} y={11} width={14} height={8} rx={2} />
              <circle cx={12} cy={15} r={1} />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <span className="text-[#555] font-semibold text-xs">
            Eksklusif untuk member premium.
          </span>
        </div>
      </div>

      {/* Artikel Terbaru */}
      <section className="w-full px-4 mb-12">
        <h2 className="font-bold text-base mb-3 text-[#21242b]">Artikel Terbaru</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#ececec] font-semibold text-sm">
            Kenali Fase Hidupmu!
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#ececec] font-semibold text-sm">
            Cara Atasi Quarter Life Crisis
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#ececec] font-semibold text-sm">
            Self-Worth Bukan dari Gaji
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#ececec] font-semibold text-sm">
            Tips Jaga Kesehatan Mental
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <BottomNav />
      </div>
    </main>
  );
}
