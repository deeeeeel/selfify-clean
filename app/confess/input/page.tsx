// File: app/confess/input/page.tsx
// Deskripsi: Halaman Input Confess versi mobile-app view, lengkap dengan Header (tanggal + audio player) dan Bottom Nav

'use client';

import { useState } from 'react';
import Link from 'next/link';
import AudioHeader from '@/components/AudioHeader';
import BottomNav from '@/components/BottomNav';
import ConfessCard from '@/components/ConfessCard';
import { dummyConfess } from '@/lib/dummyConfess';

export default function ConfessInputPage() {
  const [text, setText] = useState('');
  const [alter, setAlter] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      alert('Confess tidak boleh kosong!');
      return;
    }
    // Dummy save
    console.log({ text, alter });
    setSubmitted(true);
    setText('');
    setAlter('');
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <>
      {/* 1. Header: Tanggal + Chill Mode Player + Bell */}
      <AudioHeader />

      {/* 2. Konten Utama */}
      <main className="pt-4 pb-24 bg-[#F4F6FA] px-2 max-w-[360px] mx-auto min-h-screen">
        {/* Judul & Back */}
        <div className="flex justify-between items-center mb-4">
          <Link href="/confess" className="text-sm text-gray-500 hover:underline">
            ← Kembali
          </Link>
          <h1 className="text-2xl font-bold text-black">Buat Confess Baru</h1>
          <div className="w-6" /> {/* spacer */}
        </div>

        {/* Preview 3 Confess Terbaru */}
        <div className="space-y-3 mb-6">
          {dummyConfess.slice(0, 3).map((c) => (
            <ConfessCard
              key={c.id}
              id={c.id}
              text={c.text}
              love={c.love}
              like={c.like}
              comments={c.comment}
              onComment={() => {}}
              showLink={false}
            />
          ))}
        </div>

        {/* Form Input Confess */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Textarea Confess */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cerita Kamu (max 200 karakter)
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={200}
              rows={4}
              className="w-full p-3 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Tulis pengakuanmu di sini..."
            />
            <div className="text-right text-xs text-gray-500 mt-1">
              {text.length}/200
            </div>
          </div>

          {/* Input Alter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Alter (opsional)
            </label>
            <input
              type="text"
              value={alter}
              onChange={(e) => setAlter(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Misal: @anon123"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-xl font-bold transition ${
              submitted
                ? 'bg-green-500 text-white cursor-default'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
            disabled={submitted}
          >
            {submitted ? 'Terkirim!' : 'Kirim Confess'}
          </button>
        </form>
      </main>

      {/* 3. Bottom Navigation */}
      <BottomNav />
    </>
  );
}
