'use client';

import SelfieChatUI from '@/components/chat/SelfieChatUI';

export default function CrisisChatPage() {
  return (
    <div className="max-w-[360px] mx-auto text-white font-[Satoshi] px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-yellow-400">Crisis Chat</h1>
      <p className="text-sm text-zinc-400 mb-4">
        Lagi di titik rendah? Nggak usah sendiri. Cerita aja ke Selfie.
      </p>
      <SelfieChatUI />
    </div>
  );
}
