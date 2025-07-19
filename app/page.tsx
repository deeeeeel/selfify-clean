'use client';

import React from 'react';

const confessList = [
  'Gue lagi down, tapi tetep semangat. #SelfifyConfess',
  'Capek, tapi gas terus.',
  'Hidup naik turun itu biasa!',
];
const userAvatars = [
  '/assets/users/user1.jpg',
  '/assets/users/user2.jpg',
  '/assets/users/user3.jpg',
  '/assets/users/user4.jpg',
];
const quizCategories = [
  { name: 'Mental Health', color: 'border-yellow-300' },
  { name: 'Survive Mode', color: 'border-blue-300' },
  { name: 'Character', color: 'border-slate-200' },
  { name: 'Relationship', color: 'border-slate-200' },
  { name: 'Self Reflection', color: 'border-slate-200' },
  { name: 'Momomoney', color: 'border-slate-200' },
];
const moodQuotes = [
  'Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan.',
  'Jangan bandingkan prosesmu dengan orang lain.',
];
export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-[#f7f4fd]">
      <div className="w-full max-w-[360px] pb-32 px-3">
        {/* HEADER */}
        <div className="flex items-center justify-between pt-4 mb-3">
          <div>
            <span className="text-gray-400 text-sm">Hello, Sandra</span>
            <div className="text-[22px] font-bold text-gray-800 leading-5">Today 25 Nov.</div>
          </div>
          <button className="rounded-full bg-white shadow-md w-11 h-11 flex items-center justify-center">
            <svg width={22} height={22} fill="none" stroke="#787878" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21 17 17" /></svg>
          </button>
        </div>

        {/* CONFESS WALL */}
        <div className="relative mb-6">
          <div className="rounded-2xl bg-[#fff8cd] shadow-lg px-5 pt-5 pb-7 min-h-[110px] flex flex-col">
            <span className="px-4 py-1 rounded-xl bg-white font-medium text-[#eaac09] text-base absolute -top-6 left-5 shadow">
              Confess Wall
            </span>
            {/* Confess slider */}
            <div className="mt-4">
              <div className="overflow-x-auto no-scrollbar whitespace-nowrap flex gap-3 snap-x">
                {confessList.map((c, i) => (
                  <div
                    key={i}
                    className="inline-block w-72 max-w-[260px] rounded-2xl bg-[#fffbe5] text-[#222] text-lg font-bold px-4 py-5 mr-2 snap-center shadow-sm"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
            {/* User avatars */}
            <div className="flex mt-5 space-x-[-10px] pl-1">
              {userAvatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`user${i}`}
                  className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0 bg-gray-100 object-cover"
                  style={{ zIndex: 10 - i }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* QUIZ POPULER */}
        <div className="mb-7">
          <div className="text-[20px] font-bold text-gray-700 mb-3">Quiz Populer</div>
          <div className="overflow-x-auto no-scrollbar whitespace-nowrap flex gap-3 snap-x pb-2">
            {quizCategories.map((q, i) => (
              <div
                key={i}
                className={`inline-block min-w-[110px] max-w-[110px] h-[65px] rounded-2xl border-2 ${q.color} bg-white flex items-center justify-center text-[16px] font-semibold text-blue-600 shadow-sm snap-center`}
              >
                {q.name}
              </div>
            ))}
          </div>
        </div>

        {/* GRID 3 CARD: MOOD QUOTES, SURVIVE MODE, 2AM LOUNGE */}
        <div className="grid grid-cols-2 gap-3 mb-7">
          {/* Mood Quotes */}
          <div className="bg-[#fff3ad] rounded-2xl p-4 flex flex-col shadow-md min-h-[170px] justify-between">
            <div>
              <span className="text-[#b28900] font-semibold text-base">Mood Quotes</span>
              <div className="mt-3 font-bold text-[#222] text-lg">"{moodQuotes[0]}"</div>
            </div>
            <div className="flex mt-4 gap-2">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                {/* Share icon */}
                <svg width={22} height={22} fill="none" stroke="#b28900" strokeWidth={2} viewBox="0 0 24 24"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.83 3.98"/></svg>
              </button>
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                {/* Download icon */}
                <svg width={22} height={22} fill="none" stroke="#b28900" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 5v14m0 0l-5-5m5 5l5-5"/></svg>
              </button>
            </div>
          </div>
          {/* Survive Mode */}
          <div className="bg-[#c8e1ff] rounded-2xl p-4 flex flex-col shadow-md min-h-[170px] justify-between">
            <div>
              <span className="text-[#2380e7] font-semibold text-base">Survive Mode</span>
              <div className="mt-3 font-bold text-[#144481] text-lg">
                Tes ketahanan mental & bertahan hidup!
              </div>
            </div>
            <button className="mt-4 w-full bg-[#2582ff] text-white rounded-xl py-2 font-semibold shadow">Masuk</button>
          </div>
        </div>
        {/* 2AM LOUNGE (full-width, pink) */}
        <div className="mb-7">
          <div className="bg-[#ffe1ee] rounded-2xl p-5 flex justify-between items-center shadow-md min-h-[70px]">
            <span className="text-[#e45594] font-semibold text-[20px]">2AM Lounge</span>
            <span className="rounded-full border-2 border-[#e45594] p-2">
              {/* Lock icon */}
              <svg width={22} height={22} fill="none" stroke="#e45594" strokeWidth={2} viewBox="0 0 24 24"><rect x="6" y="11" width="12" height="8" rx="2"/><path d="M12 16v-2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>
            </span>
          </div>
        </div>

        {/* ARTIKEL TERBARU PLACEHOLDER */}
        <div className="mt-7">
          <div className="font-bold text-xl text-gray-700 mb-2">Artikel Terbaru</div>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white rounded-2xl p-4 shadow-sm h-24 opacity-40" />
            <div className="bg-white rounded-2xl p-4 shadow-sm h-24 opacity-40" />
            <div className="bg-white rounded-2xl p-4 shadow-sm h-24 opacity-40" />
          </div>
        </div>
        {/* Kosong bawah buat future features */}
        <div className="h-24" />
      </div>

      {/* BOTTOM NAVBAR */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center z-50">
        <div className="w-full max-w-[360px] bg-white rounded-t-3xl shadow-xl flex items-center px-4 py-2 gap-3 justify-between border-t">
          {/* Home */}
          <button className="flex flex-col items-center gap-1 text-blue-600 font-bold">
            <svg width={26} height={26} fill="none" stroke="#2563eb" strokeWidth={2} viewBox="0 0 24 24"><path d="M3 10.5L12 4l9 6.5"/><path d="M4 10v10h5v-5h6v5h5V10"/></svg>
            <span className="text-xs">Home</span>
          </button>
          {/* TTS */}
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <svg width={26} height={26} fill="none" stroke="#9ca3af" strokeWidth={2} viewBox="0 0 24 24"><rect x="8" y="7" width="8" height="10" rx="4"/><circle cx="12" cy="8.5" r="4"/><path d="M15.5 14.5C17.5 16 19 16.5 19 20"/><path d="M8.5 14.5C6.5 16 5 16.5 5 20"/></svg>
            <span className="text-xs">TTS</span>
          </button>
          {/* Profile */}
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <svg width={26} height={26} fill="none" stroke="#9ca3af" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6"/></svg>
            <span className="text-xs">Profil</span>
          </button>
          {/* Settings */}
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <svg width={26} height={26} fill="none" stroke="#9ca3af" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0 .33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15.4 9a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z"/></svg>
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}
