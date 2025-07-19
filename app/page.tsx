// app/page.tsx
'use client';

import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  Home as HomeIcon,
  Robot as TTSIcon,
  Bookmark,
  User,
  Lock,
  Share2,
  Download,
} from 'lucide-react'

export default function HomePage() {
  // placeholder data
  const confessSlides = ['Confession 1', 'Confession 2', 'Confession 3', 'Confession 4']
  const quizCategories = ['Personality', 'Career', 'Wellness', 'Relationships', 'Adventure']
  const moodQuotes = ['/quotes/q1.png', '/quotes/q2.png', '/quotes/q3.png']
  const articles = [
    { title: 'Self-Worth Bukan Dari Gaji', img: '/assets/art1.jpg' },
    { title: 'Tips Tetap Termotivasi', img: '/assets/art2.jpg' },
    { title: 'Mengenal Diri Lewat Quiz', img: '/assets/art3.jpg' },
    { title: 'Pentingnya Istirahat', img: '/assets/art4.jpg' },
    { title: 'Cara Konsisten Olahraga', img: '/assets/art5.jpg' },
    { title: 'Mindfulness 101', img: '/assets/art6.jpg' },
  ]

  return (
    <div className="mx-auto w-full max-w-[360px] bg-white min-h-screen relative">
      <Head>
        <title>Selfify • Amplify Your Self</title>
        <meta name="description" content="Platform tempatmu confess, mood quotes, dan quiz self-discovery." />
      </Head>

      {/* Header: Confess Wall */}
      <header className="flex items-center justify-between p-4">
        <p className="text-sm font-semibold text-blue-500">Confess Wall</p>
        <div className="flex -space-x-2">
          <Image src="/avatars/1.jpg" alt="User 1" width={32} height={32} className="rounded-full border-2 border-white" />
          <Image src="/avatars/2.jpg" alt="User 2" width={32} height={32} className="rounded-full border-2 border-white" />
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs">+4</div>
        </div>
      </header>

      {/* Confess Slides */}
      <section className="px-4 overflow-x-auto snap-x snap-mandatory flex space-x-4 pb-4">
        {confessSlides.map((text, i) => (
          <div
            key={i}
            className="snap-start w-[280px] h-36 bg-gray-100 rounded-lg flex items-center justify-center p-4 text-sm"
          >
            {text}
          </div>
        ))}
      </section>

      {/* Quiz Populer Slider */}
      <section className="px-4 mt-2">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Quiz Populer</h2>
        <div className="overflow-x-auto snap-x snap-mandatory flex space-x-3 pb-4">
          {quizCategories.map((cat, idx) => (
            <div
              key={idx}
              className="snap-start bg-yellow-200 text-yellow-800 font-medium rounded-lg px-4 py-2 whitespace-nowrap"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Mood Quotes & Survive Mode & 2AM Lounge */}
      <section className="px-4 mt-2 grid grid-cols-1 gap-4">
        {/* Mood Quotes */}
        <div className="relative">
          <h3 className="text-sm font-semibold text-gray-800 mb-1">Mood Quotes</h3>
          <div className="overflow-x-auto snap-x snap-mandatory flex space-x-4 pb-2">
            {moodQuotes.map((src, i) => (
              <div key={i} className="snap-start relative w-[200px] h-28 rounded-lg overflow-hidden">
                <Image src={src} alt="Mood Quote" fill className="object-cover" />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <Share2 size={16} className="text-white" />
                  <Download size={16} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Survive Mode */}
        <div className="bg-blue-100 rounded-lg p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-blue-800 mb-1">Survive Mode</h3>
            <p className="text-sm text-blue-700">Tes ketahanan mentalmu lewat tantangan seru.</p>
          </div>
          <button className="mt-2 bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded">
            Masuk Survive Mode
          </button>
        </div>

        {/* 2AM Lounge */}
        <div className="bg-gray-200 rounded-lg p-4 relative">
          <Lock size={16} className="absolute top-2 right-2 text-gray-600" />
          <h3 className="font-semibold text-gray-800 mb-1">2AM Lounge</h3>
          <p className="text-sm text-gray-600">Area eksklusif akan segera hadir.</p>
        </div>
      </section>

      {/* Artikel Terbaru Preview */}
      <section className="px-4 mt-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Artikel Terbaru</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {articles.slice(0, 3).map((art, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow">
              <Image src={art.img} alt={art.title} width={120} height={80} className="object-cover w-full" />
              <div className="p-2 text-sm font-medium text-gray-800">{art.title}</div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-gray-600">Menampilkan 3 dari 6 artikel</p>
      </section>

      {/* Placeholder Fitur Berikutnya */}
      <div className="h-20 flex items-center justify-center text-gray-400 text-sm">
        Fitur berikutnya akan segera hadir...
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg flex space-x-8">
        <HomeIcon size={24} className="text-blue-500" aria-label="Home" />
        <TTSIcon size={24} className="text-yellow-400" aria-label="Talk to Selfie" />
        <Bookmark size={24} className="text-gray-600" aria-label="Bookmark" />
        <User size={24} className="text-gray-600" aria-label="Profile" />
      </nav>
    </div>
  )
}
