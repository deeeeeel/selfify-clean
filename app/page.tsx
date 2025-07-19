// app/page.tsx
'use client';

import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {
  Home as HomeIcon,
  Bot as TTSIcon,
  User as UserIcon,
  Settings as SettingsIcon,
  Lock as LockIcon,
  Share2 as ShareIcon,
  Download as DownloadIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function HomePage() {
  // Slider indices
  const [confessIndex, setConfessIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Dummy data
  const confessData = ['Confess 1', 'Confess 2', 'Confess 3', 'Confess 4'];
  const quizCategories = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'];
  const quotes = ['Quote 1', 'Quote 2', 'Quote 3', 'Quote 4'];
  const articles = Array.from({ length: 6 }, (_, i) => ({ id: i, title: `Artikel ${i + 1}` }));

  // Auto-play sliders every 5s
  useEffect(() => {
    const confessTimer = setInterval(() => setConfessIndex((i) => (i + 1) % confessData.length), 5000);
    const quizTimer = setInterval(() => setQuizIndex((i) => (i + 1) % quizCategories.length), 5000);
    const quoteTimer = setInterval(() => setQuoteIndex((i) => (i + 1) % quotes.length), 5000);
    return () => {
      clearInterval(confessTimer);
      clearInterval(quizTimer);
      clearInterval(quoteTimer);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-[360px] p-4">
      <Head>
        <title>Selfify • Amplify Your Self</title>
      </Head>

      {/* Header Confess Wall */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Confess Wall</h2>
        <Image src="/avatar.png" alt="User" width={32} height={32} className="rounded-full" />
      </div>
      <div className="relative mb-6">
        <div className="overflow-hidden rounded-lg bg-yellow-100 p-4">
          <p className="text-sm">{confessData[confessIndex]}</p>
        </div>
        <button onClick={() => setConfessIndex((i) => (i - 1 + confessData.length) % confessData.length)} className="absolute top-1/2 left-2 -translate-y-1/2">
          <ChevronLeft />
        </button>
        <button onClick={() => setConfessIndex((i) => (i + 1) % confessData.length)} className="absolute top-1/2 right-2 -translate-y-1/2">
          <ChevronRight />
        </button>
      </div>

      {/* Quiz Populer Slider */}
      <h3 className="text-base font-medium mb-2">Quiz Populer</h3>
      <div className="relative mb-6">
        <div className="flex overflow-hidden">
          {quizCategories.slice(quizIndex, quizIndex + 4).map((cat, idx) => (
            <div key={idx} className="flex-shrink-0 w-1/4 px-1">
              <div className="bg-blue-100 p-3 rounded text-center">{cat}</div>
            </div>
          ))}
        </div>
        <button onClick={() => setQuizIndex((i) => (i - 1 + quizCategories.length) % quizCategories.length)} className="absolute top-1/2 left-2 -translate-y-1/2">
          <ChevronLeft />
        </button>
        <button onClick={() => setQuizIndex((i) => (i + 1) % quizCategories.length)} className="absolute top-1/2 right-2 -translate-y-1/2">
          <ChevronRight />
        </button>
      </div>

      {/* Mood Quotes Slider */}
      <h3 className="text-base font-medium mb-2">Mood Quotes</h3>
      <div className="relative mb-6">
        <div className="overflow-hidden rounded-lg bg-yellow-200 p-4">
          <p>{quotes[quoteIndex]}</p>
          <div className="flex mt-2 space-x-2">
            <button><ShareIcon /></button>
            <button><DownloadIcon /></button>
          </div>
        </div>
        <button onClick={() => setQuoteIndex((i) => (i - 1 + quotes.length) % quotes.length)} className="absolute top-1/2 left-2 -translate-y-1/2">
          <ChevronLeft />
        </button>
        <button onClick={() => setQuoteIndex((i) => (i + 1) % quotes.length)} className="absolute top-1/2 right-2 -translate-y-1/2">
          <ChevronRight />
        </button>
      </div>

      {/* Survive Mode Card */}
      <div className="relative mb-6 rounded-lg bg-blue-100 p-4">
        <h4 className="font-semibold mb-1">Survive Mode</h4>
        <p className="text-sm mb-2">Test kemampuanmu untuk bertahan di situasi sulit.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Masuk Survive Mode</button>
      </div>

      {/* 2AM Lounge Card */}
      <div className="relative mb-6 rounded-lg bg-pink-200 p-4">
        <LockIcon className="absolute top-2 right-2" />
        <h4 className="font-semibold mb-1">2AM Lounge</h4>
        <p className="text-sm">Eksklusif untuk member premium.</p>
      </div>

      {/* Article Preview */}
      <h3 className="text-base font-medium mb-2">Artikel Terbaru</h3>
      <div className="grid grid-cols-1 gap-4 mb-6">
        {articles.slice(0, 3).map((art) => (
          <div key={art.id} className="bg-white p-3 rounded shadow">
            <h5 className="font-medium">{art.title}</h5>
          </div>
        ))}
        <div className="h-16 border-dashed border-2 border-gray-300 rounded flex items-center justify-center">
          Fitur Berikutnya...
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 flex space-x-6 bg-white p-3 rounded-full shadow">
        <HomeIcon size={24} />
        <TTSIcon size={24} />
        <UserIcon size={24} />
        <SettingsIcon size={24} />
      </nav>
    </div>
  );
}
