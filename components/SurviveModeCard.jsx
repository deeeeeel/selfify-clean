'use client';

import { Briefcase } from 'lucide-react';

export default function SurviveModeCard() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col items-start justify-between gap-4 shadow-inner">
      <div className="flex justify-between items-start w-full">
        <div>
          <h2 className="text-lg font-bold leading-snug mb-1">Survive Mode</h2>
          <p className="text-sm text-zinc-400 leading-tight">
            Buat lo yang lagi berjuang, lagi capek, tapi tetap pengen jalan terus. Masuk ke mode bertahan, yuk.
          </p>
        </div>
        <Briefcase size={32} className="text-yellow-400" />
      </div>
      <button className="w-full bg-yellow-400 text-black font-semibold rounded-full py-2 text-sm hover:bg-yellow-300 transition-colors">
        Ayo Bertahan
      </button>
    </div>
  );
}
