// File: app/confess/page.tsx
// Deskripsi: Halaman penuh “Confess Wall” (mobile-app view) menampilkan semua confess dummy beserta modal komentar.
// Pastikan return JSX berada di dalam function dan file ini mengimpor Header & BottomNav.

'use client';

import { useState } from 'react';
import Link from 'next/link';
import AudioHeader from '@/components/AudioHeader';
import BottomNav from '@/components/BottomNav';
import ConfessCard from '@/components/ConfessCard';
import CommentModal from '@/components/CommentModal';
import { dummyConfess } from '@/lib/dummyConfess';

export default function ConfessWallPage() {
  const [activeCommentId, setActiveCommentId] = useState<number | null>(null);

  return (
    <>
      {/* 1. Header: Tanggal + Chill Mode Player + Bell */}
      <AudioHeader />

      {/* 2. Konten Utama */}
      <main className="pt-4 pb-24 bg-[#F4F6FA] px-2 max-w-[360px] mx-auto min-h-screen">
        {/* Judul & link ke form baru */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-black">Confess Wall</h1>
          <Link
            href="/confess/input"
            className="text-sm font-semibold text-yellow-400 hover:underline"
          >
            Buat Confess Baru
          </Link>
        </div>

        {/* Daftar semua confess */}
        <div className="space-y-4">
          {dummyConfess.map((c) => (
            <ConfessCard
              key={c.id}
              id={c.id}
              text={c.text}
              love={c.love}
              like={c.like}
              comments={c.comments}
              onComment={() => setActiveCommentId(c.id)}
            />
          ))}
        </div>

        {/* Modal komentar */}
        {activeCommentId !== null && (
          <CommentModal
            confessId={activeCommentId}
            onClose={() => setActiveCommentId(null)}
          />
        )}
      </main>

      {/* 3. Bottom Navigation */}
      <BottomNav />
    </>
  );
}
