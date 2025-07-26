'use client';

import { MessageCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SelfieAssistant() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/chat');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 left-4 z-50 bg-yellow-400 text-black p-3 rounded-full shadow-xl hover:bg-yellow-300 transition"
      aria-label="Buka Chat Selfie"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
