"use client";

import React, { useState, useEffect } from "react";

// Dummy data
const confessList = [
  "Gue lagi down, tapi tetep semangat. #SelfifyConfess",
  "Capek, tapi gas terus.",
  "Gue pengen healing, tapi dompet nggak setuju.",
  "Mikir masa depan bikin overthinking.",
];

const userAvatars = [
  "/assets/avatars/ava1.jpg",
  "/assets/avatars/ava2.jpg",
  "/assets/avatars/ava3.jpg",
  // Lebih dari 3, tampil +x (contoh +4)
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

export default function HomePage() {
  // State confess slider
  const [confessIdx, setConfessIdx] = useState(0);

  // Confess auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setConfessIdx((prev) => (prev + 1) % confessList.length);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  // State quiz slider
  const [quizIdx, setQuizIdx] = useState(0);
  const quizToShow = quizCategories.slice(quizIdx, quizIdx + 4);

  // Responsive wrapper style
  const wrapperStyle = "mx-auto w-full max-w-[360px] bg-[#FCFBFF] min-h-screen px-3 py-2 font-trebuchet";

  return (
    <div className={wrapperStyle}>
      {/* Header: Profile + Search */}
      <div className="flex justify-between items-center mb-3 mt-1">
        <div className="flex items-center gap-2">
          <img
            src="/assets/avatars/ava1.jpg"
            alt="profile"
            className="w-8 h-8 rounded-full object-cover border-2 border-yellow-400"
          />
          <div>
            <div className="text-xs text-gray-500">Hello, Sandra</div>
            <div className="font-bold text-[17px] text-gray-800">Today 25 Nov.</div>
          </div>
        </div>
        <button className="rounded-full bg-white shadow p-2">
          <svg width={20} height={20} fill="none" stroke="#222" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx={11} cy={11} r={8} />
            <path d="M21 21l-2-2" />
          </svg>
        </button>
      </div>

      {/* Confess Wall Card */}
      <div className="relative mb-5">
        {/* Avatars di luar card, kiri bawah */}
        <div className="absolute -left-1 -top-6 flex items-center z-20">
          {userAvatars.slice(0, 3).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`user${i}`}
              className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0 object-cover shadow"
              style={{ zIndex: 10 - i }}
            />
          ))}
          {userAvatars.length > 3 && (
            <div className="w-8 h-8 rounded-full bg-purple-400 text-white text-sm flex items-center justify-center -ml-2 border-2 border-white font-bold shadow">
              +{userAvatars.length - 3}
            </div>
          )}
        </div>
        {/* Confess Wall Box */}
        <div className="rounded-2xl bg-yellow-100 px-6 pt-3 pb-6 shadow-xl relative z-10">
          <div className="flex items-center mb-3">
            <span className="text-xs font-bold text-yellow-500 bg-white/80 px-3 py-1 rounded-full mr-2 shadow">
              Confess Wall
            </span>
          </div>
          {/* Confess slider */}
          <div className="font-bold text-xl text-gray-800 h-16 flex items-center">
            {confessList[confessIdx]}
          </div>
        </div>
      </div>

      {/* Quiz Populer Slider */}
      <div className="mb-3 mt-2">
        <div className="font-bold text-lg text-gray-800 mb-2">Quiz Populer</div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {quizToShow.map((cat, i) => (
            <div
              key={cat}
              className="min-w-[76px] bg-white border-2 border-blue-200 rounded-xl py-4 px-2 flex items-center justify-center font-bold text-blue-500 text-center shadow"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Mood Quotes + Survive Mode */}
      <div className="flex gap-3 mb-4">
        {/* Mood Quotes */}
        <div className="flex-1 rounded-2xl bg-yellow-200 p-4 flex flex-col justify-between shadow-lg">
          <div className="text-yellow-700 font-bold text-[13px] mb-1">Mood Quotes</div>
          <div className="font-bold text-lg mb-2">
            "Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan."
          </div>
          <div className="flex gap-2 mt-2">
            <button className="rounded-full bg-white w-9 h-9 flex items-center justify-center shadow text-yellow-500">
              <svg width={21} height={21} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </button>
            <button className="rounded-full bg-white w-9 h-9 flex items-center justify-center shadow text-yellow-500">
              <svg width={21} height={21} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M18 8a6 6 0 0 1-12 0" />
                <line x1="12" y1="2" x2="12" y2="10" />
                <polyline points="15 5 12 2 9 5" />
              </svg>
            </button>
          </div>
        </div>
        {/* Survive Mode */}
        <div className="flex-1 rounded-2xl bg-blue-200 p-4 flex flex-col justify-between shadow-lg">
          <div className="text-blue-700 font-bold text-[13px] mb-1">Survive Mode</div>
          <div className="font-bold text-lg mb-2">Tes ketahanan mental & bertahan hidup!</div>
          <button className="mt-auto bg-blue-600 text-white rounded-full py-1 px-5 text-sm font-bold shadow">
            Masuk
          </button>
        </div>
      </div>

      {/* 2AM Lounge */}
      <div className="rounded-2xl bg-pink-200 p-4 mb-4 flex justify-between items-center shadow-lg relative">
        <div className="text-pink-700 font-bold text-lg">2AM Lounge</div>
        <svg width={28} height={28} fill="none" stroke="#e75480" strokeWidth={2.3} viewBox="0 0 24 24">
          <rect x="6" y="11" width="12" height="7" rx="2" />
          <path d="M9 11V7a3 3 0 0 1 6 0v4" />
        </svg>
      </div>

      {/* Artikel Terbaru (cuplikan 3/6) */}
      <div className="mb-4">
        <div className="font-bold text-lg text-gray-800 mb-2">Artikel Terbaru</div>
        <div className="grid grid-cols-2 gap-3">
          {["Kenali Fase Hidupmu!", "Cara Atasi Quarter-life", "5 Tanda Butuh Refleksi"].map((title, i) => (
            <div key={i} className="rounded-xl bg-white shadow p-3 text-sm font-bold text-gray-600">{title}</div>
          ))}
        </div>
      </div>

      {/* Placeholder fitur berikutnya */}
      <div className="h-14"></div>

      {/* Floating Bottom Nav */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-full max-w-[360px]">
        <div className="mx-2 bg-white rounded-full shadow-xl flex items-center justify-between px-6 py-2 border border-gray-100">
          {/* Home */}
          <button className="flex flex-col items-center text-blue-500 font-bold">
            <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2.1} viewBox="0 0 24 24">
              <path d="M3 10.5V21a1.5 1.5 0 0 0 1.5 1.5H8v-7h8v7h3.5A1.5 1.5 0 0 0 21 21V10.5M12 3l9 7.5" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </button>
          {/* TTS */}
          <button className="flex flex-col items-center text-gray-500">
            <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2.1} viewBox="0 0 24 24">
              {/* Head */}
              <circle cx={14} cy={12} r={4.3} />
              {/* Jaw */}
              <ellipse cx={14} cy={16.5} rx={3.5} ry={1.5} />
              {/* Face side line */}
              <path d="M18.1 11.3c.2-2.7-2-4.5-4.2-4.5s-4.4 1.8-4.2 4.5" />
              {/* "Antenna" */}
              <circle cx={14} cy={8.5} r={1} />
              {/* Chin line */}
              <path d="M12 17.8c0 .6.7 1.2 2 1.2s2-.6 2-1.2" />
            </svg>
            <span className="text-xs mt-1">TTS</span>
          </button>
          {/* Profile */}
          <button className="flex flex-col items-center text-gray-500">
            <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2.1} viewBox="0 0 24 24">
              <circle cx={12} cy={9} r={4} />
              <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
            </svg>
            <span className="text-xs mt-1">Profil</span>
          </button>
          {/* Settings */}
          <button className="flex flex-col items-center text-gray-500">
            <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2.1} viewBox="0 0 24 24">
              <circle cx={12} cy={12} r={3.5} />
              <path d="M19.4 13.5a7 7 0 0 0 0-3M4.6 13.5a7 7 0 0 1 0-3" />
              <path d="M6.8 20.4a7 7 0 0 0 10.4 0M6.8 3.6a7 7 0 0 1 10.4 0" />
            </svg>
            <span className="text-xs mt-1">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}
