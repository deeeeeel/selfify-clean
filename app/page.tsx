'use client';
import { useState } from 'react';
import { Download, Share2, Lock, UserCircle, Search, Bot, User, Settings, Home } from 'lucide-react';

// Dummy Data
const confessList = [
  'Gue lagi down, tapi tetep semangat. #SelfifyConfess',
  'Tetep berproses walau capek...',
  'Hari ini pasti bisa, semangat!',
  'Capek, tapi gas terus!',
];
const users = [
  '/assets/avatars/user1.png',
  '/assets/avatars/user2.png',
  '/assets/avatars/user3.png',
  '/assets/avatars/user4.png',
];

const quizCategories = [
  { name: 'Mental Health', color: 'border-yellow-400', text: 'text-blue-600' },
  { name: 'Survive Mode', color: 'border-blue-400', text: 'text-blue-600' },
  { name: 'Character', color: 'border-gray-200', text: 'text-blue-600' },
  { name: 'Relationship', color: 'border-gray-200', text: 'text-blue-600' },
  { name: 'Self Reflection', color: 'border-gray-200', text: 'text-blue-600' },
  { name: 'Momomoney', color: 'border-gray-200', text: 'text-blue-600' },
];

const quote = 'Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan.';
const surviveDesc = 'Tes ketahanan mental & bertahan hidup!';
const loungeDesc = 'Eksklusif untuk member premium.';

export default function HomePage() {
  const [confessIdx, setConfessIdx] = useState(0);
  const [quizIdx, setQuizIdx] = useState(0);

  // Geser confess (auto/manual next)
  const nextConfess = () => setConfessIdx((prev) => (prev + 1) % confessList.length);

  // Slider Quiz (auto/manual)
  const visibleQuiz = quizCategories.slice(quizIdx, quizIdx + 4);

  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-[#F7F6FD] font-[Trebuchet MS,sans-serif] pb-28">
      {/* Wrapper */}
      <div className="w-full max-w-[360px] mx-auto px-3 py-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <img
              src="/assets/avatars/user1.png"
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-yellow-400 object-cover"
            />
            <div>
              <div className="text-xs text-gray-400 font-semibold">Hello, Sandra</div>
              <div className="text-lg font-bold text-gray-900 tracking-wide">Today 25 Nov.</div>
            </div>
          </div>
          <button className="rounded-full bg-white shadow p-2">
            <Search className="w-5 h-5 stroke-[#888]" />
          </button>
        </div>

        {/* Confess Wall Card */}
        <div className="relative bg-[#FFF9C7] rounded-3xl p-5 pb-4 mb-4 shadow-lg flex flex-col min-h-[150px]">
          <span className="absolute top-[-18px] left-6 px-4 py-1 bg-white rounded-2xl text-yellow-500 font-semibold text-lg shadow-md">Confess Wall</span>
          <div className="flex flex-col gap-1 justify-between h-full">
            {/* Slider */}
            <div className="text-[19px] font-bold text-gray-900 leading-snug mb-2 pr-4">
              {confessList[confessIdx]}
            </div>
            <div className="flex gap-2 mt-1 mb-0">
              {users.map((u, i) => (
                <img
                  src={u}
                  key={i}
                  alt={`user${i}`}
                  className="w-7 h-7 rounded-full border-2 border-white shadow"
                  style={{ zIndex: users.length - i, marginLeft: i ? -14 : 0 }}
                />
              ))}
            </div>
          </div>
          {/* Auto slider: next confess tiap 4 detik */}
          <style>{`
            @keyframes confessAutoSlide { 0%{opacity:1} 99%{opacity:1} 100%{opacity:0} }
          `}</style>
        </div>

        {/* Quiz Populer Slider */}
        <div className="mb-6">
          <div className="text-[22px] font-bold text-gray-800 mb-2">Quiz Populer</div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {quizCategories.slice(quizIdx, quizIdx + 4).map((cat, idx) => (
              <div
                key={cat.name}
                className={`min-w-[88px] text-center bg-white px-3 py-3 rounded-2xl border-2 ${cat.color} shadow-sm font-bold text-[15px] flex items-center justify-center ${cat.text}`}
                style={{ fontSize: "14px", minHeight: 50 }}
              >
                {cat.name}
              </div>
            ))}
            {quizIdx + 4 < quizCategories.length &&
              <button className="ml-1 px-2 rounded-full" onClick={() => setQuizIdx(q => q + 1)}>
                <span className="text-lg text-blue-400 font-bold">&gt;</span>
              </button>
            }
            {quizIdx > 0 &&
              <button className="mr-1 px-2 rounded-full" onClick={() => setQuizIdx(q => q - 1)}>
                <span className="text-lg text-blue-400 font-bold">&lt;</span>
              </button>
            }
          </div>
        </div>

        {/* GRID 2 cols, persis mockup */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3 mb-6">
          {/* Mood Quotes (kuning, lebar, 2 baris) */}
          <div className="col-span-1 row-span-2 bg-[#FFFBDB] rounded-3xl p-5 shadow-lg flex flex-col justify-between min-h-[230px]">
            <span className="text-[#C58B02] text-xs font-semibold mb-2 tracking-wide">Mood Quotes</span>
            <div className="flex-1 text-[18px] font-bold leading-snug text-gray-900 mb-4">
              "{quote}"
            </div>
            <div className="flex gap-3 mt-2">
              <button className="rounded-full p-2 border border-[#C58B02] bg-white hover:bg-[#FFF9E2] transition">
                <Share2 size={18} className="stroke-[#C58B02]" />
              </button>
              <button className="rounded-full p-2 border border-[#C58B02] bg-white hover:bg-[#FFF9E2] transition">
                <Download size={18} className="stroke-[#C58B02]" />
              </button>
            </div>
          </div>
          {/* Survive Mode (biru) */}
          <div className="col-span-1 bg-[#E7F1FF] rounded-3xl p-5 shadow-lg flex flex-col justify-between min-h-[110px]">
            <span className="text-[#3977F6] text-xs font-semibold mb-2 tracking-wide">Survive Mode</span>
            <div className="flex-1 text-[17px] font-bold leading-snug text-gray-900 mb-4">{surviveDesc}</div>
            <button className="bg-[#3977F6] text-white rounded-xl py-2 font-bold text-[15px] w-full shadow-sm">Masuk</button>
          </div>
          {/* 2AM Lounge (pink, ada lock) */}
          <div className="col-span-1 bg-[#FFD7E2] rounded-3xl p-5 shadow-lg flex flex-col justify-between min-h-[110px] relative">
            <div className="flex items-center justify-between">
              <span className="text-[#E55C87] text-xs font-semibold tracking-wide">2AM Lounge</span>
              <Lock size={20} className="stroke-[#E55C87]" />
            </div>
            <div className="flex-1 text-[16px] font-bold leading-snug text-gray-900 mt-2 opacity-60">{loungeDesc}</div>
          </div>
        </div>

        {/* Placeholder section artikel */}
        <div className="h-28" />

      </div>

      {/* BOTTOM NAVIGATION */}
      <nav className="fixed bottom-3 left-0 w-full flex justify-center z-50">
        <div className="flex w-full max-w-[360px] mx-auto bg-white rounded-[2rem] shadow-xl p-3 items-center justify-between">
          <a href="#" className="flex flex-col items-center flex-1">
            <Home className="w-7 h-7 mb-1 stroke-blue-500" />
            <span className="text-xs font-bold text-blue-500">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center flex-1">
            <Bot className="w-7 h-7 mb-1 stroke-gray-400" />
            <span className="text-xs font-bold text-gray-400">TTS</span>
          </a>
          <a href="#" className="flex flex-col items-center flex-1">
            <User className="w-7 h-7 mb-1 stroke-gray-400" />
            <span className="text-xs font-bold text-gray-400">Profil</span>
          </a>
          <a href="#" className="flex flex-col items-center flex-1">
            <Settings className="w-7 h-7 mb-1 stroke-gray-400" />
            <span className="text-xs font-bold text-gray-400">Settings</span>
          </a>
        </div>
      </nav>
    </main>
  );
}
