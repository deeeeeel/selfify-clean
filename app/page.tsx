'use client';

import GreetingModal from '@/components/GreetingModal';
import AudioHeader from '@/components/AudioHeader';
import ConfessWall from '@/components/ConfessWall';
import QuizGrid from '@/components/QuizGrid';
import HomeMiddleSection from '@/components/HomeMiddleSection';
import HomeBottomSection from '@/components/HomeBottomSection';
import BottomNav from '@/components/BottomNav';

export default function HomePage() {
  return (
    <>
      <GreetingModal />

      <AudioHeader />

      <main className="pt-4 pb-24 max-w-[360px] mx-auto bg-[#F4F6FA] min-h-screen">
        <ConfessWall />

        <h2 className="font-['Trebuchet_MS'] text-lg font-bold text-yellow-400 mb-3 text-center tracking-wide drop-shadow">
        </h2>

        <QuizGrid />

        <HomeMiddleSection />

        <HomeBottomSection />
      </main>

      <BottomNav />
    </>
  );
}
