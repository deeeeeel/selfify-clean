// app/page.tsx
'use client';

import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  Home as HomeIcon,
  Bot as TTSIcon,
  Bookmark,
  User,
  Lock,
  Share2,
  Download,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Dummy data placeholders
const confessData = [
  { id: 1, text: 'Confession random 1' },
  { id: 2, text: 'Confession random 2' },
  { id: 3, text: 'Confession random 3' },
  { id: 4, text: 'Confession random 4' },
];
const quizCategories = ['Self-Worth', 'Motivation', 'Personality', 'Stress'];
const moodQuotes = ['/assets/quote1.svg', '/assets/quote2.svg', '/assets/quote3.svg'];
const articles = [
  { id: 1, title: 'Artikel 1', image: '/assets/art1.jpg' },
  { id: 2, title: 'Artikel 2', image: '/assets/art2.jpg' },
  { id: 3, title: 'Artikel 3', image: '/assets/art3.jpg' },
  { id: 4, title: 'Artikel 4', image: '/assets/art4.jpg' },
  { id: 5, title: 'Artikel 5', image: '/assets/art5.jpg' },
  { id: 6, title: 'Artikel 6', image: '/assets/art6.jpg' },
];

export default function HomePage() {
  const [confessIndex, setConfessIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  return (
    <div className="min-h-screen mx-auto max-w-[360px] bg-white font-sans">
      <Head>
        <title>Selfify • Amplify Your Self</title>
        <meta name="description" content="Platform untuk confess, mood quotes, dan quiz." />
      </Head>

      {/* Confess Wall */}
      <section className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-600">Confess Wall</span>
          <Image src="/assets/avatar.jpg" alt="Avatar" width={24} height={24} className="rounded-full" />
        </div>
        <div className="relative">
          <p className="p-4 bg-gray-100 rounded-lg">{confessData[confessIndex].text}</p>
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2" onClick={() => setConfessIndex((confessIndex - 1 + confessData.length) % confessData.length)}>
            <ChevronLeft />
          </button>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2" onClick={() => setConfessIndex((confessIndex + 1) % confessData.length)}>
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Quiz Populer */}
      <section className="p-4">
        <h2 className="text-lg font-semibold mb-2">Quiz Populer</h2>
        <div className="relative flex space-x-2 overflow-x-auto">
          {quizCategories.map((cat, idx) => (
            <div key={idx} className="min-w-[80px] p-2 bg-yellow-200 rounded text-center">{cat}</div>
          ))}
        </div>
      </section>

      {/* Mood Quotes */}
      <section className="p-4 bg-gray-50">
        <h2 className="text-lg font-semibold mb-2">Mood Quotes</h2>
        <div className="relative">
          <Image src={moodQuotes[quoteIndex]} alt="Mood Quote" width={300} height={150} className="rounded mx-auto" />
          <div className="flex justify-center space-x-4 mt-2">
            <button aria-label="Share"><Share2 /></button>
            <button aria-label="Download"><Download /></button>
          </div>
        </div>
      </section>

      {/* Survive Mode */}
      <section className="p-4">
        <h2 className="text-lg font-semibold mb-2">Survive Mode</h2>
        <p className="mb-2">Bergabunglah untuk tantangan self-discovery intens.</p>
        <button className="w-full bg-blue-500 text-white py-2 rounded">Masuk Survive Mode</button>
      </section>

      {/* 2AM Lounge */}
      <section className="p-4 bg-yellow-100 relative">
        <h2 className="text-lg font-semibold mb-2">2AM Lounge</h2>
        <Lock className="absolute right-4 top-4" />
        <p>Space untuk diskusi mendalam (akses terkunci).</p>
      </section>

      {/* Preview Artikel */}
      <section className="p-4 bg-gray-50">
        <h2 className="text-lg font-semibold mb-2">Artikel Terbaru</h2>
        <div className="grid grid-cols-1 gap-4">
          {articles.slice(0, 3).map((art) => (
            <div key={art.id} className="flex items-center space-x-3">
              <Image src={art.image} alt={art.title} width={80} height={60} className="rounded" />
              <span>{art.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder Fitur Berikutnya */}
      <section className="p-4">
        <div className="h-24 bg-gray-200 rounded"></div>
      </section>

      {/* Floating Bottom Nav */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-6 py-2 flex space-x-6">
        <HomeIcon size={24} />
        <TTSIcon size={24} />
        <Bookmark size={24} />
        <User size={24} />
      </nav>
    </div>
  );
}
