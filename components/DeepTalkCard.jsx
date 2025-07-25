'use client';

import { MessageSquare } from 'lucide-react';

export default function DeepTalkCard() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col items-start gap-3 hover:border-zinc-700 transition-colors">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-lg font-bold text-white">Deep Talk</h3>
        <MessageSquare size={20} className="text-yellow-400" />
      </div>
      <p className="text-sm text-zinc-400 leading-snug">
        Tempat buat lo ngobrol jujur, tanpa takut dihakimi. Tumpahin semua isi kepala lo di sini.
      </p>
      <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full text-sm self-start mt-2">
        Lets Talks,
      </button>
    </div>
  );
}
