// File: app/confess/page.tsx
// Deskripsi: Halaman penuh “Confess Wall” versi mobile-app view, dengan Header (tanggal + audio player) dan Bottom Nav

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
      {/* Header: Tanggal + Chill Mode Player + Bell */}
      <AudioHeader />

      {/* Konten Utama */}
      <main className="pt-4 pb-24 bg-[#F4F6FA] px-2 max-w-[360px] mx-auto min-h-screen">
        {/* Judul & Link Buat Confess Baru */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-black">Confess Wall</h1>
          <Link
            href="/confess/input"
            className="text-sm font-semibold text-yellow-400 hover:underline"
          >
            Buat Confess Baru
          </Link>
        </div>

        {/* Daftar Semua Confess */}
        <div className="space-y-4">
          {dummyConfess.map((c) => (
            <ConfessCard
              key={c.id}
              id={c.id}
              text={c.text}
              love={c.love}
              like={c.like}
              comments={c.comment}
              onComment={() => setActiveCommentId(c.id)}
              /* showLink default = false */
            />
          ))}
        </div>

        {/* Modal Komentar */}
        {activeCommentId !== null && (
          <CommentModal
            confessId={activeCommentId}
            onClose={() => setActiveCommentId(null)}
          />
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </>
  );
}
