'use client';
import { User, Home } from 'lucide-react';
import Image from 'next/image';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto bg-[#161616] border-t border-zinc-800 backdrop-blur-sm z-50">
      <div className="flex justify-around items-center h-16 relative">
        {/* Bot cewek */}
        <button className="text-zinc-400 hover:text-white transition-colors">
          <Image
            src="/assets/icons/selfiebot.svg"
            alt="Selfie Bot"
            width={28}
            height={28}
            className="opacity-70"
          />
        </button>

        {/* Rumah besar glowing */}
        <button className="bg-[#6366F1] text-white rounded-full w-14 h-14 flex items-center justify-center -mt-8 border-4 border-black shadow-xl shadow-indigo-500/30 z-10">
          <Home size={28} />
        </button>

        {/* User */}
        <button className="text-zinc-400 hover:text-white transition-colors">
          <User size={28} />
        </button>
      </div>
    </nav>
  );
}
