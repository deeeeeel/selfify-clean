'use client';

import { useEffect, useState } from 'react';

export default function LoungeLock() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    // Lounge hanya kebuka jam 2 pagi (02:00 - 02:59)
    if (hour === 2) {
      setUnlocked(true);
    }
  }, []);

  if (!unlocked) {
    return (
      <div className="p-4 bg-gray-200 text-center rounded-xl">
        <p className="text-sm text-gray-600">
          🔒 Lounge akan terbuka setiap jam 2 pagi. Stay tune 🌙
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-purple-200 text-center rounded-xl">
      <h3 className="text-lg font-bold mb-1">Welcome to 2AM Lounge</h3>
      <p className="text-sm">Isi hatimu yang terdalam, ini ruang amanmu 💜</p>
      <a
        href="/lounge"
        className="inline-block mt-2 bg-purple-500 text-white px-4 py-2 rounded-xl text-sm"
      >
        Masuk Lounge
      </a>
    </div>
  );
}
