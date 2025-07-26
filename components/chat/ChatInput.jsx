'use client';

import { useState } from 'react';

export default function ChatInput() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const sendMessage = async () => {
    if (!message.trim()) return;
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <div className="p-4 bg-black text-white max-w-[360px] mx-auto font-[Satoshi]">
      <textarea
        className="w-full p-2 rounded bg-zinc-900 border border-zinc-700 mb-2"
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ngobrol sama Selfie di sini..."
      />

      <button
        className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 rounded mb-4"
        onClick={sendMessage}
      >
        Kirim ke Selfie
      </button>

      {reply && (
        <div className="bg-zinc-800 p-3 rounded text-sm">
          <span className="text-yellow-400 font-bold">Selfie: </span>
          {reply}
        </div>
      )}
    </div>
  );
}
