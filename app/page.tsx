'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BottomNav from '@/components/BottomNav';

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
  const [confessIdx, setConfessIdx] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setConfessIdx(idx => (idx + 1) % confessList.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#FCFAFF] min-h-screen max-w-[360px] mx-auto relative pb-24">
      {/* HEADER TANGGAL */}
      <div className="px-4 pt-4 pb-2">
        <div className="text-gray-500 font-semibold text-[17px] tracking-wide">
          Minggu, 20 Juli 2025
        </div>
      </div>

      {/* CONFESS WALL */}
      <div className="relative px-4">
        <div className="rounded-3xl bg-yellow-100 p-6 pt-8 shadow-md">
          {/* CONFESS TEXT */}
          <p className="text-center text-[1.25rem] font-bold text-gray-800 leading-snug">
            &quot;{confessList[confessIdx]}&quot;
          </p>
          {/* AVATAR LIST */}
          <div className="flex items-center justify-start gap-0 mt-4 ml-2">
            {activeAvatars.map((src, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow -ml-2 first:ml-0">
                <Image src={src} width={32} height={32} alt={`avatar-${i}`} />
              </div>
            ))}
          </div>
          {/* BUTTON CONFESS WALL */}
          <button
            onClick={() => router.push('/confess')}
            className="absolute right-5 bottom-5 bg-white px-4 py-2 rounded-2xl shadow border border-yellow-200 text-yellow-500 font-bold text-sm hover:bg-yellow-50 active:scale-95 transition"
          >
            Confess Wall
          </button>
        </div>
      </div>

      {/* QUIZ POPULER */}
      <section className="px-4 mt-8">
        <h2 className="font-bold text-2xl text-gray-800 mb-3">Quiz Populer</h2>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
          {[
            { name: 'Mental Health', border: 'border-yellow-400 text-blue-700' },
            { name: 'Survive Mode', border: 'border-blue-400 text-blue-600' },
            { name: 'Character', border: 'border-gray-200 text-blue-600' },
            { name: 'Relationship', border: 'border-gray-200 text-blue-600' },
            { name: 'Self Reflection', border: 'border-gray-200 text-blue-600' }
          ].map((cat, i) => (
            <div
              key={i}
              className={`flex-none min-w-[110px] h-14 flex items-center justify-center rounded-2xl border-2 ${cat.border} bg-white font-semibold text-base shadow-sm`}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </section>

      {/* GRID QUOTE / SURVIVE / 2AM */}
      <section className="px-4 mt-8 grid grid-cols-2 gap-4">
        {/* MOOD QUOTES */}
        <div className="row-span-2 bg-yellow-100 rounded-3xl p-5 flex flex-col justify-between shadow-md min-h-[320px]">
          <span className="text-yellow-800 font-semibold text-base">Mood Quotes</span>
          <p className="flex-1 font-bold text-lg text-gray-800 leading-snug my-3">
            "Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan."
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
        {/* SURVIVE MODE */}
        <div className="bg-blue-100 rounded-3xl p-5 flex flex-col justify-between shadow-md min-h-[200px]">
          <span className="text-blue-700 font-semibold text-base">Survive Mode</span>
          <p className="flex-1 font-bold text-base text-gray-800 leading-snug my-3">
            Tes ketahanan mental & bertahan hidup!
          </p>
          <button className="mt-auto bg-blue-600 text-white py-2 px-6 rounded-2xl font-semibold shadow">
            Masuk
          </button>
        </div>
        {/* 2AM LOUNGE */}
        <div className="col-span-2 bg-pink-100 rounded-3xl p-5 flex items-center justify-between shadow-md min-h-[100px]">
          <div>
            <span className="text-pink-700 font-semibold text-base block">2AM Lounge</span>
            <span className="text-gray-700 text-sm block">Eksklusif untuk member premium.</span>
          </div>
          <svg width="30" height="30" fill="none" stroke="#ec4899" strokeWidth={2} viewBox="0 0 24 24">
            <rect x="5" y="11" width="14" height="8" rx="2" />
            <circle cx="12" cy="15" r="1" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
      </section>

      {/* ARTIKEL TERBARU */}
      <section className="px-4 mt-8 mb-12">
        <h2 className="font-bold text-base mb-4 text-gray-800">Artikel Terbaru</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { title: 'Kenali Fase Hidupmu!', thumb: '/thumb1.jpg' },
            { title: 'Cara Atasi Quarter Life Crisis', thumb: '/thumb2.jpg' },
            { title: 'Self-Worth Bukan dari Gaji', thumb: '/thumb3.jpg' },
            { title: 'Tantangan Mental di Era Digital', thumb: '/thumb4.jpg' },
          ].map((art, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <Image src={art.thumb} width={160} height={100} alt={art.title} className="w-full h-auto object-cover" />
              <div className="p-3 font-semibold text-sm">{art.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM NAV */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <BottomNav />
      </div>
    </main>
