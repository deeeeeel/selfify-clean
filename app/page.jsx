'use client';

import MusicPlayer from '@/components/MusicPlayer';
import ConfessWall from '@/components/ConfessWall';
import QuotesMoodSlider from '@/components/QuotesMoodSlider';
import TwoAmLounge from '@/components/TwoAmLounge';
import QuizSnapshot from '@/components/QuizSnapshot';
import DeepTalkCard from '@/components/DeepTalkCard';
import SurviveModeCard from '@/components/SurviveModeCard';
import CollabsWallCard from '@/components/CollabsWallCard';
import BizBoostCard from '@/components/BizBoostCard';
import ArticlePreviewSection from '@/components/ArticlePreviewSection';
import BottomNav from '@/components/BottomNav';
import SelfieAssistant from '@/components/chat/SelfieAssistant';
import SelfieChatUI from '@/components/chat/SelfieChatUI';

export default function HomePage() {
  return (
    <div className="max-w-[360px] mx-auto bg-black text-white font-[Trebuchet] min-h-screen relative pb-24">
      <main className="px-4 py-4">
        {/* Tanggal + Music Player */}
        <section className="mb-6">
          <div className="text-sm text-gray-300 mb-2">
            {new Date().toLocaleDateString('id-ID', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
          <MusicPlayer />
        </section>

        {/* Confess Lounge */}
        <section className="mb-6">
          <ConfessWall />
        </section>

        {/* Snapshot Quiz */}
        <section className="mb-6">
          <QuizSnapshot />
        </section>

        {/* Quotes Mood Slider */}
        <section className="mb-6">
          <QuotesMoodSlider />
        </section>

        {/* 2AM Lounge */}
        <section className="mb-6">
          <TwoAmLounge />
        </section>

        {/* Deep Talk & Survive Mode */}
        <section className="grid grid-cols-2 gap-4 mb-6">
          <DeepTalkCard />
          <SurviveModeCard />
        </section>

        {/* Collabs Lounge */}
        <section className="mb-6">
          <CollabsWallCard />
        </section>

        {/* BizBoost */}
        <section className="mb-6">
          <BizBoostCard />
        </section>

        {/* Artikel Preview */}
        <section className="mb-6">
          <ArticlePreviewSection />
        </section>
        <SelfieChatUI />
<SelfieAssistant />
      </main>
      {/* Sticky BottomNav */}
      <BottomNav />
    </div>
  );
}
