"use client";

import { useState } from "react";

export default function SelfieChatUI() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hai, gue Selfie. Cerita aja, gue dengerin kok 👂",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/selfie-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();

      setMessages((prev) => [...prev, data.reply]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Selfie lagi gangguan nih 😵‍💫" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[90vh] max-w-[360px] mx-auto bg-black text-white font-[Satoshi] p-4">
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`${
              msg.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block px-4 py-2 rounded-xl max-w-[80%] ${
                msg.role === "user"
                  ? "bg-yellow-400 text-black"
                  : "bg-zinc-800"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-left">
            <div className="inline-block px-4 py-2 rounded-xl bg-zinc-800 animate-pulse">
              Selfie mikir dulu ya...
            </div>
          </div>
        )}
      </div>

      <div className="flex mt-4">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-l-full bg-zinc-700 text-white placeholder:text-zinc-400 focus:outline-none"
          placeholder="Tanya apa aja ke Selfie..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-yellow-400 text-black px-4 py-2 rounded-r-full font-semibold hover:bg-yellow-300"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
