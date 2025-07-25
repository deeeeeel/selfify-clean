'use client';
import { useEffect, useState } from 'react';

export default function GreetingModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('seenGreeting');
    if (!seen) {
      setShow(true);
      localStorage.setItem('seenGreeting', 'true');
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-xs text-center">
        <p className="text-lg font-bold mb-2 font-['Trebuchet_MS']">Knock knock...</p>
        <p className="mb-4 italic">Selamat datang pulang.</p>
        <button
          className="bg-black text-white px-4 py-2 rounded-full"
          onClick={() => setShow(false)}
        >
          Masuk ke Selfify
        </button>
      </div>
    </div>
  );
}
