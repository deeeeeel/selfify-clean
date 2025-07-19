// app/page.tsx

import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center bg-[#f6f3ff] min-h-screen">
      <main className="w-full max-w-[360px] min-h-screen bg-white rounded-3xl mx-auto p-4 pb-28 shadow-xl relative">
        {/* Header Confess Wall */}
        <section>
          {/* Nanti header & card Confess Wall di sini */}
        </section>

        {/* Quiz Populer */}
        <section className="mt-5">
          {/* Slider Quiz Populer di sini */}
        </section>

        {/* Grid Card: Mood Quotes & Survive Mode */}
        <section className="grid grid-cols-2 gap-3 mt-6">
          {/* Card Mood Quotes */}
          <div>
            {/* Mood Quotes Card */}
          </div>
          {/* Card Survive Mode */}
          <div>
            {/* Survive Mode Card */}
          </div>
        </section>

        {/* Card 2AM Lounge */}
        <section className="mt-4">
          {/* 2AM Lounge Card */}
        </section>

        {/* Artikel Preview */}
        <section className="mt-6">
          {/* Grid 3 artikel */}
        </section>

        {/* Placeholder untuk fitur berikutnya */}
        <div className="h-12"></div>

        {/* Floating Bottom Navigation */}
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[340px] max-w-[96vw] bg-white rounded-2xl shadow-lg flex justify-between items-center px-5 py-2 z-30 border">
          {/* Icon nav di sini */}
        </nav>
      </main>
    </div>
  );
}
