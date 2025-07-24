'use client';

import { useState } from 'react';
import BizBoostCard from '@/components/BizBoostCard';
import MoodQuotesCard from '@/components/MoodQuotesCard';
import DeepTalkCard from '@/components/DeepTalkCard';
import CollabsWallCard from '@/components/CollabsWallCard';
import Image from 'next/image';

export default function HomeMiddleSection() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="max-w-[360px] mx-auto mb-8 space-y-6">
      {/* Quotes Mood */}
      <section className="flex flex-col items-center">
        <div className="relative w-[280px] h-[280px] rounded-xl overflow-hidden bg-gray-200">
          {!imgLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-300" />
          )}
          <Image
            src="/images/moodquotes/mq1.svg"
            alt="Mood Quote 1"
            fill
            className={`object-cover ${imgLoaded ? '' : 'hidden'}`}
            onLoadingComplete={() => setImgLoaded(true)}
          />
        </div>
        <div className="flex space-x-4 mt-3">
          <button
            type="button"
            className="p-2 rounded-full border border-gray-400 hover:bg-gray-100"
            aria-label="Share Mood Quote"
          >
            {/* Minimalist share icon */}
            <svg width="20" height="20" fill="currentColor">
              <path d="M15 8a3 3 0 10-2.83-4H8a3 3 0 100 2h4.17A3 3 0 1015 8zM5 12a3 3 0 102.83 4H12a3 3 0 100-2H7.83A3 3 0 105 12z" />
            </svg>
          </button>
          <button
            type="button"
            className="p-2 rounded-full border border-gray-400 hover:bg-gray-100"
            aria-label="Download Mood Quote"
          >
            {/* Minimalist download icon */}
            <svg width="20" height="20" fill="currentColor">
              <path d="M12 2v8h4l-6 6-6-6h4V2h4zM4 18h12v2H4v-2z" />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-600 italic">
          “30% user bilang ini quote nyeleneh!”
        </p>
      </section>

      {/* 2am Lounge */}
      <div className="bg-white rounded-xl shadow py-4 px-6">
        <h3 className="font-semibold text-lg">2Am Lounge</h3>
      </div>

      {/* BizBoost & DeepTalk / Survive Mode */}
      <div className="grid grid-cols-2 gap-3">
        <DeepTalkCard />
        <CollabsWallCard /> {/* as placeholder for Survive Mode card */}
      </div>
    </div>
);
}
