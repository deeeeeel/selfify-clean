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
  {/* SETTINGS / BOOKMARK */}
  <button className="flex flex-col items-center text-blue-400">
    <svg width={26} height={26} fill="none" stroke="#3B82F6" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </svg>
    <span className="text-xs">Bookmark</span>
  </button>
</nav>
