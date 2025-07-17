'use client';

import Header from '../components/header';
import QuizPopuler from '../components/QuizPopuler';
import ConfessSlider from '../components/ConfessSlider';
import MoodQuotes from '../components/MoodQuotes';
import LoungeLock from '../components/LoungeLock';
import ArtikelBooster from '../components/ArtikelBooster';
import BottomNav from '../components/BottomNav';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen pb-24">
      {/* Header + ConfessSlider */}
      <div className="bg-white pt-8 pb-2 px-4 flex flex-col gap-2 shadow-md rounded-xl w-[90%] mx-auto mt-8">
        <Header />
        <h2 className="text-center text-xl font-bold text-blue-900">Confess Terbaru</h2>
        <ConfessSlider />
      </div>

      {/* Confess Wall */}
      <section className="w-[90%] mx-auto mt-8 rounded-2xl border-2 border-yellow-400 bg-white p-4">
        <h2 className="text-center text-xl font-bold text-blue-900 mb-2">Confess Wall</h2>
        <button className="block w-full bg-blue-900 text-yellow-400 text-lg font-bold py-2 rounded-xl hover:bg-blue-700">
          Gaas...Join
        </button>
      </section>

      {/* Mood Quotes */}
      <section className="w-[90%] mx-auto mt-8 bg-[#FFF9C4] p-4 rounded-xl flex flex-col items-center space-y-4">
        <MoodQuotes />
      </section>

      {/* Quiz Populer */}
      <section className="flex justify-center mt-8">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-4 border-4 border-blue-900">
          <h2 className="text-2xl text-center font-bold text-yellow-400 bg-blue-900 py-2 rounded-xl mb-4">
            Quiz Populer
          </h2>
          <QuizPopuler />
          <button className="block w-full bg-blue-900 text-yellow-400 text-lg font-bold py-2 mt-4 rounded-xl hover:bg-blue-700">
            Cek Semua Quiz
          </button>
        </div>
      </section>

      {/* 2AM Lounge */}
      <section className="w-[90%] mx-auto mt-8 flex flex-col items-center">
        <div className="flex gap-4 mb-2 w-full justify-between">
          <button className="flex-1 bg-yellow-400 text-blue-900 font-bold py-2 rounded-xl border border-blue-900">
            Deep Talk
          </button>
          <button className="flex-1 bg-yellow-400 text-blue-900 font-bold py-2 rounded-xl border border-blue-900">
            Talk to Selfie
          </button>
        </div>
        <div className="bg-white border-2 border-blue-900 rounded-2xl w-full max-w-sm p-4 flex flex-col items-center shadow relative">
          <div className="absolute top-2 right-2 text-yellow-400 text-lg">🔒</div>
          <h2 className="font-bold text-lg text-blue-900 mb-2">2AM Lounge</h2>
          <div className="bg-blue-900 text-yellow-400 font-bold rounded-xl w-full py-2 text-center">
            Closed
          </div>
        </div>
        <button className="mt-4 bg-yellow-400 text-blue-900 font-bold px-6 py-2 rounded-xl border border-blue-900">
          Artikel Booster
        </button>
      </section>

      {/* Artikel List */}
      <section className="w-[95%] mx-auto mt-8">
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl flex items-center p-4 shadow-md gap-4">
            <span className="text-3xl">🖼️</span>
            <div className="flex-1 text-blue-900 font-bold">
              Lo Capek Jiwa Tapi Masih Ketawa?
            </div>
            <a className="flex items-center gap-1 text-yellow-400 font-bold hover:underline" href="#">
              <span>Baca</span>
              <span className="text-xl">→</span>
            </a>
          </div>
          <div className="bg-white rounded-2xl flex items-center p-4 shadow-md gap-4">
            <span className="text-3xl">🖼️</span>
            <div className="flex-1 text-blue-900 font-bold">
              Self Check-in Buat Mulai Hari
            </div>
            <a className="flex items-center gap-1 text-yellow-400 font-bold hover:underline" href="#">
              <span>Baca</span>
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
        <button className="block w-full bg-yellow-400 text-blue-900 font-bold mt-6 py-2 rounded-xl">
          Lihat Semua Artikel
        </button>
      </section>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full">
        <BottomNav />
      </div>
    </main>
  );
}
