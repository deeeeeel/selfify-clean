// components/BottomNav.tsx

export default function BottomNav() {
  return (
    <nav className="w-[95vw] max-w-[340px] mx-auto bg-white rounded-full shadow-lg flex justify-between px-4 py-2 mb-3 border-2 border-yellow-100">
      {/* Home */}
      <button className="flex flex-col items-center text-blue-600">
        <svg width={26} height={26} fill="none" stroke="#2563eb" strokeWidth={2.2} viewBox="0 0 24 24">
          <path d="M3 9.5 12 4l9 5.5v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5Z"/>
          <path d="M9 22V12h6v10"/>
        </svg>
        <span className="text-[11px]">Home</span>
      </button>
      {/* Selfie */}
      <button className="flex flex-col items-center text-yellow-500">
        {/* Icon robot cewek line style */}
        <svg width={26} height={26} fill="none" stroke="#FACC15" strokeWidth={2.2} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <ellipse cx="12" cy="14.5" rx="6" ry="3" />
          <ellipse cx="12" cy="10" rx="3" ry="2.3" />
          <circle cx="9.5" cy="9.5" r="0.6" fill="#FACC15"/>
          <circle cx="14.5" cy="9.5" r="0.6" fill="#FACC15"/>
          <path d="M9 18c1 2 5 2 6 0" stroke="#FACC15" strokeWidth={1.1}/>
        </svg>
        <span className="text-[11px]">Selfie</span>
      </button>
      {/* Profile */}
      <button className="flex flex-col items-center text-blue-600">
        <svg width={26} height={26} fill="none" stroke="#2563eb" strokeWidth={2.2} viewBox="0 0 24 24">
          <circle cx={12} cy={8} r={4} />
          <path d="M4 20c0-2.2 3.2-4 8-4s8 1.8 8 4" />
        </svg>
        <span className="text-[11px]">Profil</span>
      </button>
      {/* Bookmark */}
      <button className="flex flex-col items-center text-yellow-500">
        <svg width={26} height={26} fill="none" stroke="#FACC15" strokeWidth={2.2} viewBox="0 0 24 24">
          <path d="M5 4v16l7-5 7 5V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"/>
        </svg>
        <span className="text-[11px]">Bookmark</span>
      </button>
    </nav>
  );
}
