'use client';

import BizBoostCard from '@/components/BizBoostCard';
import MoodQuotesCard from '@/components/MoodQuotesCard';
import DeepTalkCard from '@/components/DeepTalkCard';
import CollabsWallCard from '@/components/CollabsWallCard';

export default function HomeMiddleSection() {
  return (
    <div className="max-w-[360px] mx-auto grid grid-cols-2 gap-3 mb-8">
      {/* Kolom Kiri */}
      <div className="flex flex-col gap-3">
        <BizBoostCard />
        <MoodQuotesCard />
      </div>
      {/* Kolom Kanan */}
      <div className="flex flex-col gap-3">
        <DeepTalkCard />
        <CollabsWallCard />
      </div>
    </div>
  );
}
