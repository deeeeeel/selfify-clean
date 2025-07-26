'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function DeepTalkCard() {
  return (
    <div className="bg-zinc-800 text-white rounded-3xl p-5 shadow-md mb-6 font-[Satoshi]">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle className="text-yellow-400" size={24} />
        <h2 className="text-lg font-bold text-yellow-400">Deep Talk</h2>
      </div>
      <p className="text-sm text-zinc-300 mb-4">
        Tempat curhat paling aman bareng Selfie. Lo bisa cerita, tanya arah hidup, atau sekadar ngobrol soal keresahan tengah malam.
      </p>
      <Link
        href="/deep-talk"
        className="block w-full text-center bg-yellow-400 text-black font-bold py-2 rounded-full hover:bg-yellow-300 transition"
      >
        Let's Talk
      </Link>
    </div>
  );
}
