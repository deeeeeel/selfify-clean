'use client';

import { Lock, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TwoAmLounge() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mb-6">
      <div className="bg-zinc-800 rounded-3xl p-4 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-zinc-300 italic">
            Area khusus tengah malam buat lo yang butuh ruang jujur bareng...
          </p>
          <Lock size={18} className="text-yellow-400" />
        </div>

        <div className="bg-zinc-900 rounded-xl p-4 text-center mb-3">
          <p className="text-white text-xl font-semibold">
            {currentTime.toLocaleTimeString('id-ID', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            })}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-yellow-400">
            <User size={16} /> <span className="font-medium">8 Aktif</span>
          </div>
          <button className="bg-zinc-700 text-white font-semibold text-sm px-4 py-1 rounded-full">
            2AM Lounge
          </button>
        </div>
      </div>
    </section>
  );
}
