'use client';

import { Users2 } from 'lucide-react';

export default function CollabsLounge() {
  return (
    <section className="mb-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-lg">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h2 className="text-base font-bold text-white mb-1">Collabs Lounge</h2>
            <p className="text-sm text-zinc-400 leading-snug">
              Cari partner, mentor, atau kolaborator buat proyek & mimpi lo. Semuanya bisa mulai dari sini.
            </p>
          </div>
          <Users2 size={28} className="text-yellow-400" />
        </div>
        <button className="mt-2 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm py-2 rounded-full">
          Buka Kolaborasi
        </button>
      </div>
    </section>
  );
}
