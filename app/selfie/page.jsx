'use client';

import SelfieChatUI from '@/components/chat/SelfieChatUI';

export default function SelfiePage() {
  return (
    <div className="max-w-[360px] mx-auto bg-black text-white min-h-screen font-[Satoshi] pt-4 pb-24">
      <h1 className="text-xl font-bold text-yellow-400 px-4 mb-4">Bestie Zone 💬</h1>
      <SelfieChatUI />
    </div>
  );
}
