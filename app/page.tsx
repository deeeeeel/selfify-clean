// app/page.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import { Heart, Zap, Shield, HomeIcon, GridIcon, PlusCircle, MessageCircle, User } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-trebuchet">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-blue-500 text-white p-6 pt-12 text-center">
        <Image
          src="/assets/logo.png"
          alt="Selfify Logo"
          width={100}
          height={100}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Selfify — Amplify Your Self</h1>
        <p className="text-lg mb-6">Selfify-in Diri Lo. Kenal, dengar, dan perkuat versi lo yang sebenarnya.</p>
        <button className="bg-white text-blue-500 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
          Mulai Selfify
        </button>
      </section>

      {/* Feature Grid */}
      <section className="p-6 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 shadow rounded-lg hover:shadow-lg transition">
            <Heart className="mx-auto mb-2 text-yellow-500" size={32} />
            <h3 className="font-bold mb-1">Confess Wall</h3>
            <p className="text-gray-600 text-sm">Curhat anonim dan dapat insight.</p>
          </div>
          <div className="p-4 shadow rounded-lg hover:shadow-lg transition">
            <Zap className="mx-auto mb-2 text-blue-500" size={32} />
            <h3 className="font-bold mb-1">Mood Quotes</h3>
            <p className="text-gray-600 text-sm">Kutipan inspirasional buat mood boost.</p>
          </div>
          <div className="p-4 shadow rounded-lg hover:shadow-lg transition">
            <Shield className="mx-auto mb-2 text-green-500" size={32} />
            <h3 className="font-bold mb-1">Survive Mode</h3>
            <p className="text-gray-600 text-sm">Quiz karir & dunia kerja.</p>
          </div>
        </div>
      </section>

      {/* Carousel Confessions */}
      <section className="p-6 bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Confession Carousel</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="min-w-[200px] bg-white p-4 rounded-lg shadow-md">
              <p className="text-sm text-gray-700">“Anonymous confession number {i} goes here.”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz Preview */}
      <section className="p-6 bg-white">
        <h2 className="text-xl font-semibold mb-4">Pilih Quiz</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {['Mental Health','Survive Mode','Character','Relationship','Self Reflection','Momomoney','Life Phase'].map((q) => (
            <div key={q} className="flex-shrink-0 w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center font-semibold text-sm">
              {q}
            </div>
          ))}
        </div>
      </section>

      {/* Article Preview */}
      <section className="p-6 bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Artikel Terbaru</h2>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {[1,2,3,4,5,6].map((n) => (
            <div key={n} className="break-inside-avoid bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={`/assets/articles/article${n}.jpg`} alt="" width={300} height={200} className="w-full h-40 object-cover" />
              <div className="p-3">
                <h3 className="font-bold text-sm mb-1">Judul Artikel {n}</h3>
                <p className="text-gray-600 text-xs">Preview singkat artikel nomor {n}...</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white p-2 shadow-inner flex justify-around">
        <HomeIcon size={24} />
        <GridIcon size={24} />
        <PlusCircle size={32} className="-mt-4 bg-yellow-400 rounded-full p-1" />
        <MessageCircle size={24} />
        <User size={24} />
      </nav>
    </div>
  );
}
