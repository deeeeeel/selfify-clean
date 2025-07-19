'use client';

import { useState } from "react";
import Image from "next/image";
import BottomNav from "../components/BottomNav";

const confessList = [
  "Gue lagi down, tapi tetep semangat. #SelfifyConfess",
  "Capek, tapi gas terus.",
  "Patah hati? Healing dong!",
  "Lagi insecure, tapi harus tetap produktif.",
];
const quizCategories = [
  "Mental Health",
  "Survive Mode",
  "Character",
  "Relationship",
  "Self Reflection",
  "Momomoney",
  "Life Phase",
];
const avatars = [
  "/assets/avatar1.png",
  "/assets/avatar2.png",
  "/assets/avatar3.png",
  "/assets/avatar4.png",
];

export default function HomePage() {
  const [confessIdx] = useState(0);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#FBF7FF]">
      <div className="w-full max-w-[360px] mx-auto px-4 pt-3 pb-28 relative">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-[#888] text-[22px] leading-tight">Hello, Sandra</span>
            </div>
            <span className="font-normal text-[#888] text-[20px] leading-none">Today 25 Nov.</span>
          </div>
          <button className="bg-white rounded-full p-2 shadow-md">
            <svg width="22" height="22" fill="none" stroke="#9CA3AF" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </div>

        {/* Confess Wall Card */}
        <div className="relative mb-7">
          <div className="rounded-3xl bg-yellow-100 shadow-lg px-5 pt-6 pb-5 min-h-[120px] flex flex-col justify-between">
            {/* Chip Confess Wall */}
            <span className="absolute -top-5 left-6 bg-white text-[#FFA900] font-semibold rounded-xl px-4 py-1 text-[19px] shadow-sm">Confess Wall</span>
            {/* Confess Text */}
            <div className="font-black text-[19px] text-[#18181B] mb-4 min-h-[54px] flex items-center">
              {confessList[confessIdx]}
            </div>
            {/* Avatars (bawah dalam card) */}
            <div className="flex items-center gap-[-10px] mt-2">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full border-4 border-white overflow-hidden -ml-3 bg-white shadow ${i === 0 ? 'ml-0' : ''}`}
                  style={{ zIndex: 10 - i }}
                >
                  <Image src={src} alt={`avatar-${i}`} width={28} height={28} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quiz Populer */}
        <div className="mb-7">
          <span className="font-bold text-[20px] text-gray-700 mb-2 block">Quiz Populer</span>
          <div className="flex flex-row gap-2 overflow-x-auto no-scrollbar">
            {quizCategories.slice(0, 4).map((cat, i) => (
              <div
                key={i}
                className={`min-w-[105px] rounded-2xl border-2 ${
                  cat === "Mental Health" ? "border-yellow-300" : cat === "Survive Mode" ? "border-blue-300" : "border-gray-200"
                } bg-white px-2 py-4 flex items-center justify-center font-bold text-blue-600 text-[15px] mx-1 shadow`}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* GRID 2x2 Card */}
        <div className="grid grid-cols-2 gap-4 mb-7">
          {/* Mood Quotes */}
          <div className="bg-yellow-100 rounded-3xl p-4 flex flex-col justify-between shadow-lg min-h-[160px] relative">
            <span className="font-bold text-yellow-800 text-[14px] mb-2">Mood Quotes</span>
            <span className="font-bold text-[16px] text-gray-800 mb-3 leading-snug">
              "Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan."
            </span>
            <div className="flex gap-2">
              <button className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow border">
                {/* Share */}
                <svg width={18} height={18} fill="none" stroke="#b28900" strokeWidth={2} viewBox="0 0 24 24"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.83 3.98"/></svg>
              </button>
              <button className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow border">
                {/* Download */}
                <svg width={18} height={18} fill="none" stroke="#b28900" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 5v14m0 0l-5-5m5 5l5-5"/></svg>
              </button>
            </div>
          </div>
          {/* Survive Mode */}
          <div className="bg-blue-100 rounded-3xl p-4 flex flex-col justify-between shadow-lg min-h-[160px] relative">
            <span className="font-bold text-blue-700 text-[14px] mb-2">Survive Mode</span>
            <span className="font-bold text-[16px] text-gray-700 mb-3 leading-snug">
              Tes ketahanan mental & bertahan hidup!
            </span>
            <button className="mt-auto bg-blue-600 text-white rounded-full px-5 py-2 text-xs font-semibold shadow">
              Masuk
            </button>
          </div>
          {/* 2AM Lounge */}
          <div className="col-span-2 bg-pink-100 rounded-3xl p-5 flex flex-row items-center justify-between shadow-lg min-h-[80px] mt-2 relative">
            <span className="font-bold text-pink-700 text-xl">2AM Lounge</span>
            <span className="bg-white rounded-full p-1 shadow-md">
              {/* Lock */}
              <svg width={24} height={24} fill="none" stroke="#e45594" strokeWidth={2} viewBox="0 0 24 24"><rect x="6" y="11" width="12" height="8" rx="2"/><path d="M12 16v-2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>
            </span>
          </div>
        </div>

        {/* Preview Artikel */}
        <div className="mb-7">
          <span className="font-bold text-[20px] text-gray-700 mb-2 block">Artikel Terbaru</span>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white rounded-xl shadow p-4">
              <span className="font-semibold text-[16px] text-gray-800">Kenali Fase Hidupmu!</span>
              <p className="text-gray-500 text-[13px] mt-1">Baca yuk, cara mengenali fase hidup dan tips bertumbuh sehat!</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <span className="font-semibold text-[16px] text-gray-800">Cara Atasi Quarter Life</span>
              <p className="text-gray-500 text-[13px] mt-1">Quarter life crisis bukan akhir segalanya. Ini kiat survive-nya.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <span className="font-semibold text-[16px] text-gray-800">Momen Refleksi Tahunan</span>
              <p className="text-gray-500 text-[13px] mt-1">Tahun baru, resolusi baru. Yuk refleksi dan evaluasi!</p>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-20" />
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
