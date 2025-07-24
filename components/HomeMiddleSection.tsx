'use client';

import BizBoostCard from '@/components/BizBoostCard';
import MoodQuotesCard from '@/components/MoodQuotesCard';
import DeepTalkCard from '@/components/DeepTalkCard';
import CollabsWallCard from '@/components/CollabsWallCard';

export default function HomeMiddleSection() {
  return (
    <section className="px-4 mb-8">
      <h3 className="text-center text-base font-medium mb-4">Mood & More</h3>
      <div className="max-w-[360px] mx-auto grid grid-cols-2 gap-3">
        {/* Kolom Kiri */}
        <div className="flex flex-col gap-3">
          <BizBoostCard />
          <MoodQuotesCard src="/images/moodquotes/mq1.svg" alt="Mood Quote 1" />
        </div>
        {/* Kolom Kanan */}
        <div className="flex flex-col gap-3">
          <DeepTalkCard />
          <CollabsWallCard />
        </div>
      </div>
    </section>
  );
}
