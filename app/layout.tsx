// app/layout.tsx
'use client';

import './globals.css';
import BottomNav from '@/components/BottomNav';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [tanggal, setTanggal] = useState('');

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const localeTanggal = today.toLocaleDateString('id-ID', options);
    setTanggal(localeTanggal);
  }, []);

  return (
    <html lang="id">
      <body className="bg-black text-white font-[Satoshi] max-w-[360px] mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center px-4 py-3 bg-zinc-900">
          <div className="text-sm text-yellow-400 font-medium">{tanggal}</div>
          <div className="text-white">
            🔔 {/* Icon notifikasi (bisa diganti pakai icon component) */}
          </div>
        </header>

        <main className="pb-20 px-4">{children}</main>

        {/* Bottom Navigation */}
        <BottomNav />
      </body>
    </html>
  );
}
