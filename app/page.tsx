'use client';

import React from "react";
// --- Dummy data, ganti dengan fetch data asli kalau sudah connect API ---
const confessList = [
  { id: 1, text: "Gue lagi down, tapi tetep semangat. #SelfifyConfess" },
  { id: 2, text: "Capek jadi people pleaser 😅" },
  { id: 3, text: "Udah berusaha, tapi kadang gagal juga..." },
];

const quizCategories = [
  { id: 1, name: "Mental Health" },
  { id: 2, name: "Survive Mode" },
  { id: 3, name: "Character" },
  { id: 4, name: "Relationship" },
  { id: 5, name: "Self Reflection" },
  { id: 6, name: "Momomoney" },
];

const moodQuotes = [
  { id: 1, image: "/assets/quotes/q1.svg", text: "Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan." },
  { id: 2, image: "/assets/quotes/q2.svg", text: "Percaya diri dimulai dari menerima diri sendiri." },
  { id: 3, image: "/assets/quotes/q3.svg", text: "Senyum tipis bisa nyelametin satu hari lo." },
];

// --- SVG Inline Icon Line Style (simple, warna biru/kuning) ---
const BotIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="8" width="16" height="10" rx="4" />
    <circle cx="9" cy="13" r="1" />
    <circle cx="15" cy="13" r="1" />
    <path d="M12 8V4M9 4h6" />
  </svg>
);

const LockIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="#E285AE" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="4" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const HomeIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.75 12 4l9 6.75" />
    <path d="M4 10.75V20a1 1 0 001 1h5m4 0h5a1 1 0 001-1V10.75M8 21v-6h8v6" />
  </svg>
);

const UserIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="#FACC15" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
  </svg>
);

const BookmarkIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
  </svg>
);

const ShareIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
  </svg>
);

const DownloadIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14m0 0l-4-4m4 4l4-4" />
  </svg>
);

// --- Main Page ---
export default function HomePage() {
  return (
    <div className="mx-auto max-w-[360px] min-h-screen bg-[#F6F4FD] shadow-xl flex flex-col relative pb-28">
      {/* Header */}
      <div className="flex items-center justify-between pt-7 pb-3 px-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7C6AE7] tracking-wide">Confess Wall</span>
          <img src="/assets/user.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-yellow-300 shadow" />
        </div>
        <button className="bg-white/80 p-2 rounded-full shadow">
          <svg width={18} height={18} fill="none" stroke="#AAA"><circle cx="8" cy="8" r="6"/><path d="M15 15l-3-3"/></svg>
        </button>
      </div>

      {/* Confess Carousel */}
      <div className="mx-4 mb-3 rounded-2xl bg-[#BDB2FF] p-5 shadow-lg">
        <span className="font-bold text-lg text-gray-900 mb-2 block">Confess Random</span>
        {/* Carousel manual - bisa pakai Swiper/react-slick */}
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar snap-x">
          {confessList.map((c, i) => (
            <div key={c.id} className="snap-center min-w-[230px] rounded-xl bg-white/70 px-3 py-3 shadow-sm text-sm font-medium text-gray-700">{c.text}</div>
          ))}
        </div>
      </div>

      {/* Quiz Populer */}
      <div className="px-4 mb-1">
        <span className="block text-base font-bold mb-1">Quiz Populer</span>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {quizCategories.slice(0, 6).map((q, i) => (
            <div
              key={q.id}
              className="min-w-[70px] rounded-2xl bg-[#EEF3FF] flex flex-col items-center justify-center text-xs font-semibold py-4 px-2 shadow cursor-pointer border-2 border-transparent hover:border-blue-300 transition"
            >
              <span>{q.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Section (Grid) */}
      <div className="grid grid-cols-2 gap-3 px-4 mb-2">
        {/* Mood Quotes */}
        <div className="rounded-2xl bg-[#FFE066] p-4 flex flex-col justify-between min-h-[115px] shadow relative">
          <div>
            <span className="block text-xs font-bold text-[#DCAB06] mb-1">Mood Quotes</span>
            {/* Dummy slider (bisa pakai Swiper.js) */}
            <span className="font-semibold text-gray-700 text-base">"{moodQuotes[0].text}"</span>
          </div>
          <div className="flex gap-2 mt-2">
            <button className="rounded-full p-2 bg-white/70 shadow">
              <ShareIcon className="w-5 h-5" />
            </button>
            <button className="rounded-full p-2 bg-white/70 shadow">
              <DownloadIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Survive Mode */}
        <div className="rounded-2xl bg-[#A0C4FF] p-4 flex flex-col justify-between min-h-[115px] shadow relative">
          <div>
            <span className="block text-xs font-bold text-[#277AC6] mb-1">Survive Mode</span>
            <span className="font-semibold text-gray-700 text-base">Tes ketahanan mental & bertahan hidup!</span>
          </div>
          <button className="rounded-full bg-blue-500 text-white text-xs px-4 py-2 font-bold shadow mt-2 w-fit self-end">Masuk</button>
        </div>
        {/* 2AM Lounge */}
        <div className="col-span-2 rounded-2xl bg-[#FFD6E0] p-4 flex items-center justify-between min-h-[60px] mt-1 shadow relative">
          <span className="font-bold text-lg text-[#E285AE]">2AM Lounge</span>
          <LockIcon className="w-7 h-7 absolute top-3 right-4" />
        </div>
      </div>

      {/* Artikel Terbaru */}
      <div className="px-4 mt-2">
        <span className="block text-base font-bold mb-1">Artikel Terbaru</span>
        <div className="grid grid-cols-2 gap-2">
          {/* Dummy article preview */}
          <div className="rounded-2xl bg-white p-3 shadow text-xs font-semibold text-gray-700">Self Worth Bukan dari Gaji</div>
          <div className="rounded-2xl bg-white p-3 shadow text-xs font-semibold text-gray-700">How to Survive Quarter-life Crisis</div>
          <div className="rounded-2xl bg-white p-3 shadow text-xs font-semibold text-gray-700">Kenali Fase Hidupmu!</div>
        </div>
        <div className="h-10" /> {/* Placeholder bawah */}
      </div>

      {/* Floating Nav */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90vw] max-w-[340px] rounded-full bg-white shadow-2xl flex items-center justify-between px-6 py-3 z-50 border">
        <button className="p-2 rounded-full bg-[#E0E7FF]"><HomeIcon className="w-6 h-6" /></button>
        <button className="p-2 rounded-full bg-[#FEF9C3]"><BotIcon className="w-6 h-6" /></button>
        <button className="p-2 rounded-full bg-[#A7F3D0]"><UserIcon className="w-6 h-6" /></button>
        <button className="p-2 rounded-full bg-[#FFE4E6]"><BookmarkIcon className="w-6 h-6" /></button>
      </div>
    </div>
  );
}
