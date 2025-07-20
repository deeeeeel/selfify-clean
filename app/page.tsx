// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BottomNav from '@/components/BottomNav';

const activeAvatars = [
  '/assets/user1.png',
  '/assets/user2.png',
  '/assets/user3.png',
  '/assets/user4.png',
];

const confessList = [
  'Gue lagi down, tapi tetep semangat. #SelfifyConfess',
  'Hari ini capek banget, tapi harus kuat!',
  'Kadang butuh ruang buat dengerin diri sendiri.',
  'Ternyata curhat random bisa bikin lega!',
];

const quizCategories = [
  { name: 'Mental Health', border: 'border-yellow-400 text-blue-700' },
  { name: 'Survive Mode', border: 'border-blue-400 text-blue-600' },
  { name: 'Character', border: 'border-gray-200 text-blue-600' },
  { name: 'Relationship', border: 'border-gray-200 text-blue-600' },
  { name: 'Self Reflection', border: 'border-gray-200 text-blue-600' },
];

const articles = [
  { title: 'Kenali Fase Hidupmu!', thumb: '/assets/art1.jpg', href: '#' },
  { title: 'Cara Atasi Quarter Life Crisis', thumb: '/assets/art2.jpg', href: '#' },
  { title: 'Self-Worth Bukan dari Gaji', thumb: '/assets/art3.jpg', href: '#' },
  { title: 'Tips Jaga Kesehatan Mental', thumb: '/assets/art4.jpg', href: '#' },
];

function getTanggalIndonesia() {
  const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const bulan = [
    'Januari','Februari','Maret','April','Mei','Juni',
    'Juli','Agustus','September','Oktober','November','Desember',
  ];
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
    <main
      className="bg-[#FCFAFF] min-h-screen pb-28 flex flex-col items-center"
      style={{ maxWidth: 360, margin: '0 auto' }}
    >
      {/* Tanggal */}
      <div className="w-full px-4 pt-5">
        <div className="text-gray-700 font-semibold text-lg">
          {getTanggalIndonesia()}
        </div>
      </div>

      // di dalam app/page.tsx, ganti bagian CONFESS WALL dengan ini:

{/* CONFESS WALL */}
<div className="relative px-4">
  {/* Outer card */}
  <div className="rounded-3xl bg-yellow-100 p-5 shadow-md">
    {/* Container viewport untuk slider */}
    <div className="h-32 overflow-hidden">
      {/* Inner slider: bergeser secara vertikal */}
      <div
        className="transition-transform duration-500"
        style={{ transform: `translateY(-${confessIdx * 100}%)` }}
      >
        {confessList.map((msg, i) => (
          <div
            key={i}
            className="mb-4 bg-white rounded-xl p-4 shadow flex items-start gap-3"
          >
            {/* Avatar placeholder */}
            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
            {/* Pesan */}
            <p className="flex-1 text-gray-800 font-medium leading-snug">
              "{msg}"
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Tombol Confess Wall */}
    <button
      onClick={() => alert('Fitur input confess coming soon')}
      className="absolute right-6 bottom-6 bg-white px-4 py-2 rounded-2xl shadow border border-yellow-200 text-yellow-500 font-bold text-sm hover:bg-yellow-50 active:scale-95 transition"
    >
      Confess Wall
    </button>
  </div>
</div>

      {/* Quiz Populer */}
      <div className="w-full px-4 mt-6">
        <h2 className="font-bold text-xl text-gray-800 mb-2">Quiz Populer</h2>
        <div
          className="flex gap-2 overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {quizCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`flex-none px-4 py-2 min-w-[120px] text-center font-medium rounded-2xl bg-white border-2 ${cat.border} shadow-sm text-[0.95rem]`}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </div>

      {/* Grid: Mood Quotes / Survive Mode / 2AM Lounge */}
      <div className="w-full px-4 grid grid-cols-2 grid-rows-2 gap-4 mt-6">
        {/* Mood Quotes */}
        <div className="row-span-2 bg-yellow-100 rounded-3xl p-5 shadow-md flex flex-col justify-between">
          <span className="text-yellow-700 font-semibold text-base">Mood Quotes</span>
          <p className="font-bold text-lg text-gray-800 flex-1 leading-snug mt-2">
            "Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan."
          </p>
          <div className="flex gap-3 mt-4">
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow text-yellow-500 border border-yellow-200">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </button>
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow text-yellow-500 border border-yellow-200">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
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
        <div className="bg-blue-100 rounded-3xl p-5 shadow-md flex flex-col justify-between">
          <span className="text-blue-600 font-semibold text-base">Survive Mode</span>
          <p className="font-bold text-lg text-gray-800 flex-1 leading-snug mt-2">
            Tes ketahanan mental & bertahan hidup!
          </p>
          <button className="mt-auto bg-blue-600 text-white px-5 py-2 rounded-2xl font-semibold shadow">
            Masuk
          </button>
        </div>

        {/* 2AM Lounge */}
        <div className="bg-pink-100 rounded-3xl p-5 shadow-md flex items-center justify-between">
          <div>
            <span className="text-pink-700 font-semibold text-base">2AM Lounge</span>
            <p className="text-gray-700 text-sm mt-1">Eksklusif untuk member premium.</p>
          </div>
          <svg
            width={24}
            height={24}
            fill="none"
            stroke="#DB2777"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <rect x={8} y={11} width={8} height={6} rx={2} />
            <circle cx={12} cy={8} r={3} />
          </svg>
        </div>
      </div>

      {/* Artikel Terbaru */}
      <div className="w-full px-4 mt-6">
        <h2 className="font-bold text-base text-gray-800 mb-3">Artikel Terbaru</h2>
        <div className="grid grid-cols-2 gap-3">
          {articles.map((a, i) => (
            <a
              key={i}
              href={a.href}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <Image
                src={a.thumb}
                alt={a.title}
                width={360}
                height={100}
                className="w-full h-24 object-cover"
              />
              <div className="p-3 font-semibold text-sm text-gray-800">
                {a.title}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[340px] max-w-[96vw]">
        <BottomNav />
      </div>
    </main>
  );
}
