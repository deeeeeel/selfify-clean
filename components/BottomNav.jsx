'use client';

import Link from 'next/link';
import { Home, User, Bot } from 'lucide-react'; // Pastikan lucide-react sudah diinstal

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-800 h-16 flex justify-between items-center px-6 max-w-[360px] mx-auto">
      
      {/* Icon Selfie */}
      <Link href="/selfie" className="text-yellow-400">
        <Bot size={24} strokeWidth={2.2} />
      </Link>

      {/* Icon Home */}
      <Link href="/" className="bg-yellow-400 p-3 rounded-full shadow-lg -mt-8 border-4 border-zinc-900">
        <Home size={24} className="text-black" strokeWidth={2.2} />
      </Link>

      {/* Icon User */}
      <Link href="/profile" className="text-yellow-400">
        <User size={24} strokeWidth={2.2} />
      </Link>
    </nav>
  );
}
