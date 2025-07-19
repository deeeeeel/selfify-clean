"use client";
import { Home, Bot, User, Settings } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-6 left-1/2 z-50 w-full max-w-[360px] -translate-x-1/2 flex justify-between items-center px-5 py-3 bg-white rounded-2xl shadow-xl border border-blue-200"
      style={{ boxShadow: "0 8px 32px rgba(44,104,255,0.13)" }}>
      <NavButton label="Home" Icon={Home} active />
      <NavButton label="TTS" Icon={Bot} />
      <NavButton label="Profil" Icon={User} />
      <NavButton label="Settings" Icon={Settings} />
    </nav>
  );
}

function NavButton({ label, Icon, active = false }: { label: string; Icon: any; active?: boolean }) {
  return (
    <button
      className={`flex flex-col items-center gap-0.5 transition-all duration-200 group ${
        active ? "text-blue-600 font-bold" : "text-gray-400"
      }`}
    >
      <Icon size={26} strokeWidth={2.2} className="mb-1 group-hover:scale-110 transition-all" />
      <span className={`text-xs ${active ? "text-blue-600 font-bold" : "text-gray-400"}`}>{label}</span>
    </button>
  );
}
