'use client';

import { useState } from 'react';
import SelfieChatUI from './SelfieChatUI';

export default function SelfieChat() {
  const [messages, setMessages] = useState([
    { from: 'selfie', text: 'Hai! Ada yang bisa Selfie bantuin hari ini?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/selfie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await res.json();
      if (data?.reply) {
        setMessages((prev) => [...prev, { from: 'selfie', text: data.reply }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { from: 'selfie', text: '😵‍💫 Selfie lagi error, coba lagi nanti ya.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SelfieChatUI
      messages={messages}
      input={input}
      loading={loading}
      setInput={setInput}
      handleSubmit={handleSubmit}
    />
  );
}
