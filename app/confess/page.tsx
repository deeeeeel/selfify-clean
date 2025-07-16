'use client';

import { useState } from 'react';

export default function ConfessPage() {
  const [isi, setIsi] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isi.trim()) return;
    setStatus('loading');

    // Simulasi submit ke server/Supabase
    setTimeout(() => {
      console.log('Confess terkirim:', isi);
      setIsi('');
      setStatus('done');
      setTimeout(() => setStatus('idle'), 2000);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-xl font-bold text-blue-700 mb-4">💬 Curhatin Aja, Gak Usah Ditahan</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
        <textarea
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
          rows={5}
          className="p-3 border rounded-xl focus:outline-blue-500"
          placeholder="Tulis curhatan lo di sini..."
        />

        <button
          type="submit"
          disabled={status === 'loading' || status === 'done'}
          className={`bg-blue-600 text-white px-4 py-2 rounded-full font-semibold ${
            status !== 'idle' && 'opacity-50'
          }`}
        >
          {status === 'loading'
            ? 'Mengirim...'
            : status === 'done'
            ? 'Terkirim ✅'
            : 'Kirim Curhat'}
        </button>
      </form>

      <p className="text-xs text-gray-400 mt-4 text-center max-w-md">
        Curhatan lo akan tampil secara anonim dan bisa jadi semangat buat orang lain juga. ❤️
      </p>
    </div>
  );
}
