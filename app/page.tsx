// app/page.tsx

'use client';

import React from 'react';
import { Download, Share2, Lock } from 'lucide-react';

const moodQuote = `"Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan."`;
const surviveDesc = "Tes ketahanan mental & bertahan hidup!";
const loungeDesc = "Eksklusif untuk member premium.";

export default function HomePage() {
  return (
    <main className="flex justify-center bg-[#fcfaff] min-h-screen pb-32">
      <div className="w-full max-w-[360px] p-4">
        {/* Confess Wall */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="relative flex items-center mb-2">
            <span className="bg-white px-4 py-1 rounded-2xl shadow text-[1.2rem] font-semibold text-yellow-500 absolute -top-5 left-2 z-10 border border-[#fff9]">
              Confess Wall
            </span>
          </div>
          <div className="bg-yellow-100 rounded-3xl px-5 py-6 shadow-md flex flex-col justify-between min-h-[112px] relative">
            <p className="font-bold text-xl leading-snug mb-5">
              Gue lagi down, tapi tetep semangat. #SelfifyConfess
            </p>
            <div className="flex gap-2 absolute left-5 bottom-4">
              {/* Avatar (dummy icon) */}
              {[...Array(4)].map((_, i) => (
                <span key={i} className="inline-block w-8 h-8 bg-[#e0e7ef] rounded-full border-2 border-white -ml-2 first:ml-0 shadow">
                  {/* ganti gambar/avatar asli sesuai kebutuhan */}
                  <span className="flex items-center justify-center w-full h-full text-lg text-gray-400">🧑‍🦱</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quiz Populer */}
        <div className="mb-6">
          <h2 className="font-bold text-2xl mb-2 text-[#21242b]">Quiz Populer</h2>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {["Mental Health", "Survive Mode", "Character", "Relationship"].map((c, i) => (
              <button
                key={c}
                className={`
                  min-w-[130px] 
                  px-3 py-4 rounded-2xl 
                  border-2 
                  font-semibold 
                  text-lg 
                  ${i === 0
                    ? 'border-yellow-400 text-blue-700'
                    : i === 1
                      ? 'border-blue-400 text-blue-700'
                      : 'border-[#ededed] text-blue-700'
                  }
                  bg-white shadow-sm 
                  flex-shrink-0
                  flex items-center justify-center
                  `}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-4 mb-7 items-stretch">
          {/* Mood Quotes (tallest, left) */}
          <div className="row-span-2 bg-yellow-100 rounded-3xl p-5 flex flex-col justify-between shadow-md min-h-[310px] max-h-[330px]">
            <span className="text-yellow-800 font-semibold text-xl mb-2">Mood Quotes</span>
            <p className="text-[1.25rem] font-bold flex-1 leading-snug mb-4">{moodQuote}</p>
            <div className="flex gap-3">
              <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow text-yellow-500 border border-yellow-200">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow text-yellow-500 border border-yellow-200">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Survive Mode (kanan atas) */}
          <div className="bg-blue-100 rounded-3xl p-5 flex flex-col justify-between shadow-md min-h-[200px] max-h-[210px]">
            <span className="text-blue-700 font-semibold text-lg mb-2">Survive Mode</span>
            <p className="font-bold text-lg leading-snug flex-1 mb-4">{surviveDesc}</p>
            <button className="mt-auto bg-blue-600 text-white px-7 py-2 rounded-2xl font-semibold shadow">
              Masuk
            </button>
          </div>
          {/* 2AM Lounge (kanan bawah) */}
          <div className="bg-pink-100 rounded-3xl p-5 flex flex-col justify-between shadow-md min-h-[90px] max-h-[100px] relative">
            <div className="flex justify-between items-center">
              <span className="text-pink-700 font-semibold text-lg">2AM Lounge</span>
              <Lock className="w-6 h-6 text-pink-500" />
            </div>
            <span className="text-[#555] font-semibold">Eksklusif untuk member premium.</span>
          </div>
        </div>

        {/* ARTIKEL TERBARU */}
        <section className="mb-12">
          <h2 className="font-bold text-2xl mb-3 text-[#21242b]">Artikel Terbaru</h2>
          <div className="grid grid-cols-1 gap-3">
            {/* Placeholder 3 artikel, bisa diganti dynamic */}
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#ececec] font-semibold">Kenali Fase Hidupmu!</div>
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#ececec] font-semibold">Cara Atasi Quarter Life Crisis</div>
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#ececec] font-semibold">Self-Worth Bukan dari Gaji</div>
          </div>
        </section>
      </div>
    </main>
  );
}
