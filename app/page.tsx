import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center bg-[#f6f3ff] min-h-screen">
      <main className="w-full max-w-[360px] min-h-screen bg-white rounded-3xl mx-auto p-4 pb-32 shadow-xl relative">

        {/* HEADER CONFESS WALL */}
        <section className="pt-2 px-1">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-[#8356e0] font-semibold tracking-wide">Confess Wall</span>
              <span className="rounded-full border-4 border-yellow-300 p-1">
                <img src="/assets/user-dummy.jpg" alt="User" className="w-7 h-7 rounded-full object-cover"/>
              </span>
            </div>
            <button className="p-1 rounded-full border bg-white shadow">
              <svg width="20" height="20" stroke="#333" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" strokeWidth="2"/>
                <path d="M21 21L16.65 16.65" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <div className="rounded-2xl bg-[#a998fa] relative p-4 mb-2 shadow-lg min-h-[110px]">
            <div className="font-bold text-2xl text-black mb-1">Confess Random</div>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              <div className="min-w-[180px] bg-white/80 rounded-xl p-2 text-base text-[#222] font-medium">Gue lagi down, tapi tetep semangat. #SelfifyConfess</div>
              <div className="min-w-[110px] bg-white/80 rounded-xl p-2 text-base text-[#222] font-medium">Capek, tapi gas terus.</div>
              <div className="min-w-[130px] bg-white/80 rounded-xl p-2 text-base text-[#222] font-medium">Sering insecure. Anyone relate?</div>
            </div>
            <div className="absolute left-4 bottom-2 w-[85%] h-2 bg-white/40 rounded-full mt-2">
              <div className="h-full bg-yellow-300 rounded-full w-1/4 transition-all"></div>
            </div>
          </div>
        </section>

        {/* SLIDER QUIZ POPULER */}
        <section className="px-1 mt-2 mb-3">
          <div className="font-semibold text-[15px] text-gray-700 mb-2 ml-1">Quiz Populer</div>
          <div className="relative">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x">
              {["Mental Health", "Survive Mode", "Character", "Relationship", "Self Reflection", "Momomoney", "Life Phase"].map((cat, i) => (
                <div
                  key={cat}
                  className="snap-start min-w-[78px] h-[70px] rounded-2xl bg-blue-50 flex flex-col items-center justify-center shadow-md hover:scale-105 transition"
                  style={{
                    background: i === 1 ? "#e4f0ff" : "#f7f7fd",
                    border: i === 0 ? "2px solid #fee564" : i === 1 ? "2px solid #4c9cf3" : "2px solid #eee",
                  }}
                >
                  <span className="text-xs font-medium text-blue-700">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GRID MOOD QUOTES & SURVIVE MODE */}
        <section className="grid grid-cols-2 gap-3 px-1 mb-2">
          {/* Mood Quotes */}
          <div className="rounded-2xl bg-[#FFE066] p-4 flex flex-col justify-between min-h-[110px] shadow relative">
            <span className="block text-[13px] font-bold text-[#CA9D10] mb-1">Mood Quotes</span>
            <span className="font-semibold text-gray-800 text-[15px] mb-2">
              "Percaya diri dimulai dari menerima diri sendiri."
            </span>
            <div className="flex gap-2 mt-auto">
              <button className="rounded-full p-2 bg-white/80 shadow hover:bg-yellow-100">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
                </svg>
              </button>
              <button className="rounded-full p-2 bg-white/80 shadow hover:bg-yellow-100">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14m0 0l-4-4m4 4l4-4" />
                </svg>
              </button>
            </div>
          </div>
          {/* Survive Mode */}
          <div className="rounded-2xl bg-[#A0C4FF] p-4 flex flex-col justify-between min-h-[110px] shadow relative">
            <span className="block text-[13px] font-bold text-[#2786C6] mb-1">Survive Mode</span>
            <span className="font-semibold text-gray-800 text-[15px] mb-2">
              Tes daya tahan mental, siap survive?
            </span>
            <button className="rounded-full bg-blue-500 text-white text-xs px-4 py-2 font-bold shadow self-end mt-auto hover:bg-blue-600 transition">Masuk</button>
          </div>
        </section>

        {/* 2AM LOUNGE */}
        <section className="px-1 mb-3">
          <div className="relative rounded-2xl bg-[#FFD6E0] p-5 flex items-center min-h-[70px] shadow-lg">
            <span className="font-bold text-lg text-[#D774A2]">2AM Lounge</span>
            <span className="absolute top-3 right-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#D774A2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="4" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            </span>
          </div>
        </section>

        {/* ARTIKEL PREVIEW */}
        <section className="px-1 mt-3 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-base text-[#463585]">Artikel Terbaru</span>
            <a href="/artikel" className="text-xs text-blue-500 font-semibold hover:underline">Lihat semua</a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <a href="/artikel/self-worth-bukan-dari-gaji" className="rounded-2xl bg-white shadow p-3 min-h-[60px] flex flex-col justify-between hover:bg-blue-50 transition group">
              <span className="font-semibold text-[14px] text-[#333] mb-1 group-hover:text-blue-700">Self Worth Bukan dari Gaji</span>
              <span className="text-[11px] text-gray-500">Refleksi cara menilai diri sendiri, beyond uang.</span>
            </a>
            <a href="/artikel/how-to-survive-quarterlife-crisis" className="rounded-2xl bg-white shadow p-3 min-h-[60px] flex flex-col justify-between hover:bg-blue-50 transition group">
              <span className="font-semibold text-[14px] text-[#333] mb-1 group-hover:text-blue-700">How to Survive Quarter-life Crisis</span>
              <span className="text-[11px] text-gray-500">Tips survive dari tekanan fase hidup.</span>
            </a>
            <a href="/artikel/kenali-fase-hidupmu" className="rounded-2xl bg-white shadow p-3 min-h-[60px] flex flex-col justify-between hover:bg-blue-50 transition group">
              <span className="font-semibold text-[14px] text-[#333] mb-1 group-hover:text-blue-700">Kenali Fase Hidupmu!</span>
              <span className="text-[11px] text-gray-500">Panduan refleksi perjalanan hidup lo.</span>
            </a>
          </div>
          <div className="h-8" />
        </section>

        {/* BOTTOM NAVIGATION */}
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[340px] max-w-[96vw] bg-white rounded-2xl shadow-xl flex justify-between items-center px-7 py-3 z-50 border border-blue-100"
          style={{ boxShadow: "0 8px 32px rgba(44,104,255,0.12)" }}>
          {/* HOME */}
          <button className="flex flex-col items-center text-blue-600 font-bold">
            <svg width={26} height={26} fill="none" stroke="#3B82F6" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M3 10.75 12 4l9 6.75" />
              <path d="M4 10.75V20a1 1 0 001 1h5m4 0h5a1 1 0 001-1V10.75M8 21v-6h8v6" />
            </svg>
            <span className="text-xs">Home</span>
          </button>
          {/* TTS */}
          <button className="flex flex-col items-center text-yellow-500">
            <svg width={26} height={26} fill="none" stroke="#FACC15" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="4" y="8" width="16" height="10" rx="4" />
              <circle cx="9" cy="13" r="1" />
              <circle cx="15" cy="13" r="1" />
              <path d="M12 8V4M9 4h6" />
            </svg>
            <span className="text-xs">TTS</span>
          </button>
          {/* PROFIL */}
          <button className="flex flex-col items-center text-blue-400">
            <svg width={26} height={26} fill="none" stroke="#3B82F6" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            </svg>
            <span className="text-xs">Profil</span>
          </button>
          {/* BOOKMARK */}
          <button className="flex flex-col items-center text-blue-400">
            <svg width={26} height={26} fill="none" stroke="#3B82F6" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
            <span className="text-xs">Bookmark</span>
          </button>
        </nav>
      </main>
    </div>
  );
}
