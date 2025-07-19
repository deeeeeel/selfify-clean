// app/page.tsx
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Heart, Zap, Shield, Home as HomeIcon, Grid as GridIcon, PlusCircle, FileText, User } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Selfify • Amplify Your Self</title>
        <meta name="description" content="Platform tempatmu confess, mood quotes, dan quiz self-discovery." />
        <meta property="og:title" content="Selfify • Amplify Your Self" />
        <meta property="og:description" content="Platform tempatmu confess, mood quotes, dan quiz self-discovery." />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <div className="min-h-screen flex flex-col font-trebuchet bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-400 to-blue-500 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Selfify</h1>
          <p className="text-lg mb-4">Amplify Your Self</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
            Mulai Eksplorasi
          </button>
        </section>
        {/* Feature Grid */}
        <section className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <Heart size={48} className="text-red-500 mb-2" />
            <h3 className="font-semibold mb-1">Confess Wall</h3>
            <p className="text-sm text-gray-600 text-center">Curhat anonim, temukan dukungan.</p>
          </div>
          <div className="flex flex-col items-center">
            <Zap size={48} className="text-yellow-400 mb-2" />
            <h3 className="font-semibold mb-1">Mood Quotes</h3>
            <p className="text-sm text-gray-600 text-center">Dosis harian motivasi pikiran.</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield size={48} className="text-blue-500 mb-2" />
            <h3 className="font-semibold mb-1">Survive Mode</h3>
            <p className="text-sm text-gray-600 text-center">Quiz seru untuk self-discovery.</p>
          </div>
        </section>
        {/* Confess Wall Carousel */}
        <section className="p-6">
          <h2 className="text-2xl font-bold mb-4">Confess Wall</h2>
          <div className="flex overflow-x-auto space-x-4">
            {[1,2,3].map(i => (
              <div key={i} className="min-w-[200px] p-4 bg-gray-100 rounded">
                <p className="text-gray-800">"Confession text #{i}"</p>
              </div>
            ))}
          </div>
        </section>
        {/* Quiz Preview */}
        <section className="p-6">
          <h2 className="text-2xl font-bold mb-4">Quiz Populer</h2>
          <div className="flex overflow-x-auto space-x-4">
            {[1,2,3].map(i => (
              <div key={i} className="min-w-[150px] p-4 bg-yellow-100 rounded-full text-center">
                <p className="font-semibold">Quiz #{i}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Artikel Preview */}
        <section className="p-6">
          <h2 className="text-2xl font-bold mb-4">Artikel Terbaru</h2>
          <div className="columns-2 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="mb-4 break-inside-avoid">
                <Image
                  src={`/articles/article${i}.jpg`}
                  alt={`Cover Artikel ${i}`}
                  width={400} height={250}
                  className="rounded"
                  loading="lazy"
                />
                <h3 className="font-semibold mt-2">Judul Artikel #{i}</h3>
                <p className="text-sm text-gray-600">Ringkasan singkat artikel akan tampil di sini.</p>
              </div>
            ))}
          </div>
        </section>
        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t py-2 flex justify-around">
          <button aria-label="Beranda"><HomeIcon size={24} /></button>
          <button aria-label="Kategori Quiz"><GridIcon size={24} /></button>
          <button aria-label="Confess Wall"><PlusCircle size={24} /></button>
          <button aria-label="Artikel"><FileText size={24} /></button>
          <button aria-label="Profil"><User size={24} /></button>
        </nav>
      </div>
    </>
  )
}
