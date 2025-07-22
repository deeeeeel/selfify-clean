'use client';

import { FaLock } from "react-icons/fa"; // pastikan sudah install react-icons

export default function LoungeLock() {
  return (
    <div className="relative bg-white border border-black rounded-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] px-4 py-4 flex items-center min-h-[64px]">
      <span className="font-extrabold text-3xl text-black">2Am Lounge</span>
      {/* Lock icon pojok kanan */}
      <span className="absolute top-3 right-4 text-black">
        <FaLock size={22} />
      </span>
    </div>
  );
}
