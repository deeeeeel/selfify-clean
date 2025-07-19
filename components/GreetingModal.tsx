'use client';

import { useEffect, useState } from 'react';

export default function GreetingModal() {
  const [open, setOpen] = useState(true);

  // Hanya tampil sekali per sesi, bisa pakai sessionStorage
  useEffect(() => {
    const seen = sessionStorage.getItem('seenGreeting');
    if (seen) setOpen(false);
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('seenGreeting', '1');
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg max-w-sm mx-auto text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">No filter, No Judgment, No Drama</h2>
        <p className="mb-6">
          Di sini gue bebas jadi diri sendiri—curhat, refleksi, atau eksplorasi diri tanpa harus pakai topeng.
          <br /><strong>Let’s Move On.</strong>
        </p>
        <button
          onClick={handleClose}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
        >
          Selamat Menjadi Diri Sendiri
        </button>
      </div>
    </div>
  );
}
