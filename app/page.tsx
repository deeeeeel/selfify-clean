'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Dummy avatar user aktif
const activeAvatars = [
  '/assets/user1.png',
  '/assets/user2.png',
  '/assets/user3.png',
  '/assets/user4.png'
];

// Dummy confess list
const confessList = [
  'Gue lagi down, tapi tetep semangat. #SelfifyConfess',
  'Hari ini capek banget, tapi harus kuat!',
  'Kadang butuh ruang buat dengerin diri sendiri.',
  'Ternyata curhat random bisa bikin lega!'
];

export default function HomePage() {
  // confess slider state
  const [confessIdx, setConfessIdx] = useState(0);

  useEffect(() => {
    // auto slider 3 detik
    const timer = setInterval(() => {
      setConfessIdx(idx => (idx + 1) % confessList.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#FCFAFF] min-h-screen py-4" style={{maxWidth: 360, margin: '0 auto'}}>
      {/* Header tanggal */}
      <div className="w-full px-4 pb-1 pt-1">
        <div className="text-gray-500 font-semibold text-[17px] mb-2 tracking-wide">
          {/* Bisa ganti hari otomatis */}
          Minggu, 20 Juli 2025
        </div>
      </div>

      {/* Confess Wall Card */}
      <div className="w-[95%] relative rounded-3xl bg-yellow-100 shadow-md px-6 pt-7 pb-7 mb-4 flex flex-col justify-between">
        {/* Avatar User Aktif */}
        <div className="absolute left-7 top-[85px] flex gap-[-8px] z-10">
          {activeAvatars.map((src, idx) => (
            <div key={idx} className="inline-block -ml-3 first:ml-0">
              <Image
                src={src}
                width={30}
                height={30}
                alt={`avatar-${idx}`}
                className="rounded-full border-2 border-white shadow"
                style={{background: "#e5e5e5"}}
              />
            </div>
          ))}
        </div>

        {/* Confess Slider */}
        <div className="w-full min-h-[60px] flex items-center justify-center px-2">
          <span className="text-[1.3rem] font-bold text-gray-800 leading-snug text-center select-none">
            &quot;{confessList[confessIdx]}&quot;
          </span>
        </div>

        {/* Tombol “Confess Wall” di pojok kanan bawah */}
        <button
          className="absolute right-6 bottom-6 bg-white px-4 py-2 rounded-2xl shadow border border-yellow-200 text-yellow-500 font-bold text-lg hover:bg-yellow-100 active:scale-95 transition"
          onClick={() => alert('Fitur input confess coming soon')}
        >
          Confess Wall
        </button>
      </div>

      {/* Quiz Populer */}
      <div className="w-full px-4 mt-0 mb-3">
        <div className="font-bold text-2xl text-gray-800 mb-3">Quiz Populer</div>
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {[
            {name: "Mental Health", border: "border-yellow-400"},
            {name: "Survive Mode", border: "border-blue-400"},
            {name: "Character", border: "border-gray-200"},
            {name: "Relationship", border: "border-gray-200"},
            {name: "Self Reflection", border: "border-gray-200"}
          ].map((item, idx) => (
            <div key={item.name}
              className={`flex-none min-w-[125px] rounded-2xl py-4 px-2 text-center font-bold text-[1.13rem] text-blue-700 bg-white border-2 ${item.border} shadow-sm`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-4 mb-7 items-stretch">
          {/* Mood Quotes */}
          <div className="row-span-2 bg-yellow-100 rounded-3xl p-5 flex flex-col justify-between shadow-md min-h-[310px] max-h-[330px]">
            <span className="text-yellow-800 font-semibold text-base mb-2">Mood Quotes</span>
            <p className="text-[1.05rem] font-bold flex-1 leading-snug mb-4">"Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan."</p>
            <div className="flex gap-3">
              <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow text-yellow-500 border border-yellow-200">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
              </button>
              <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow text-yellow-500 border border-yellow-200">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
              </button>
            </div>
          </div>
          {/* Survive Mode */}
          <div className="bg-blue-100 rounded-3xl p-5 flex flex-col justify-between shadow-md min-h-[200px] max-h-[210px]">
            <span className="text-blue-700 font-semibold text-base mb-2">Survive Mode</span>
            <p className="font-bold text-base leading-snug flex-1 mb-4">Tes ketahanan mental & bertahan hidup!</p>
            <button className="mt-auto bg-blue-600 text-white px-7 py-2 rounded-2xl font-semibold shadow">
              Masuk
            </button>
          </div>
          {/* 2AM Lounge */}
          <div className="bg-pink-100 rounded-3xl p-5 flex flex-col justify-between shadow-md min-h-[90px] max-h-[100px] relative">
            <div className="flex justify-between items-center">
              <span className="text-pink-700 font-semibold text-base">2AM Lounge</span>
              <svg width={24} height={24} className="text-pink-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x={9} y={11} width={6} height={7} rx={2}/><circle cx={12} cy={7} r={3}/></svg>
            </div>
            <span className="text-[#555] font-semibold text-xs">Eksklusif untuk member premium.</span>
          </div>
        </div>

        {/* ARTIKEL TERBARU */}
        <section className="mb-12">
          <h2 className="font-bold text-base mb-3 text-[#21242b]">Artikel Terbaru</h2>
          <div className="grid gap-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#ececec] font-semibold text-sm">Kenali Fase Hidupmu!</div>
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#ececec] font-semibold text-sm">Cara Atasi Quarter Life Crisis</div>
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#ececec] font-semibold text-sm">Self-Worth Bukan dari Gaji</div>
          </div>
        </section>
      </div>
      {/* BOTTOM NAV */}
      <div className="fixed left-0 right-0 bottom-0 z-50 flex justify-center bg-transparent">
        <BottomNav />
      </div>
    </main>
  );
}
