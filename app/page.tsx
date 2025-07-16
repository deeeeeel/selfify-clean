'use client';
import Header from '@/components/Header';
import QuizPopuler from '@/components/QuizPopuler';
import ConfessSlider from '@/components/ConfessSlider';
import MoodQuotes from '@/components/MoodQuotes';
import LoungeLock from '@/components/LoungeLock';
import ArtikelBooster from '@/components/ArtikelBooster';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <QuizPopuler />
        <ConfessSlider />
        <MoodQuotes />
        <LoungeLock />
        <ArtikelBooster />
      </div>
      <BottomNav />
    </main>
  );
}
