'use client';

import { useState } from 'react';
import { FaRegThumbsUp, FaRegHeart, FaRegCommentDots } from 'react-icons/fa';

export default function ConfessWall() {
  const [confessText, setConfessText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!confessText.trim()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/confess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: confessText }),
      });

      if (res.ok) {
        setSubmitted(true);
        setConfessText('');
        setTimeout(() => setSubmitted(false), 2000);
      }
    } catch (err) {
      console.error('Submit failed:', err);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 space-y-4">
      <textarea
        className="w-full h-24 bg-zinc-800 text-white p-3 rounded-lg placeholder-zinc-500 resize-none text-sm"
        placeholder="Tulis pengakuan lo di sini..."
        value={confessText}
        onChange={(e) => setConfessText(e.target.value)}
        disabled={isSubmitting}
      />

      <div className="flex items-center justify-between">
        <div className="flex gap-3 text-xl text-white">
          <FaRegThumbsUp className="hover:text-yellow-400 cursor-pointer" />
          <FaRegHeart className="hover:text-red-400 cursor-pointer" />
          <FaRegCommentDots className="hover:text-blue-400 cursor-pointer" />
        </div>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting || !confessText.trim()}
          className="bg-yellow-400 hover:bg-yellow-500 text-zinc-900 px-4 py-2 rounded-full text-sm font-semibold disabled:opacity-50"
        >
          {submitted ? 'Terkirim!' : 'Kirim Confess'}
        </button>
      </div>
    </div>
  );
}
