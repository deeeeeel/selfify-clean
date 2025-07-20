'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ConfessPage() {
  const [text, setText] = useState('');
  const router = useRouter();

  const submit = async () => {
    if (!text.trim()) return;
    await fetch('/api/confess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    // Setelah sukses, kembali ke homepage
    router.push('/');
  };

  return (
    <div className="p-4">
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        className="w-full h-32 p-2 border rounded"
        placeholder="Tulis confessmu..."
      />
      <button
        onClick={submit}
        className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Kirim
      </button>
    </div>
  );
}
