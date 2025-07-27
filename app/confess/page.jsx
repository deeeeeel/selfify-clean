'use client';

import ConfessLounge from '@/components/confess/ConfessLounge';
import MusicPlayer from '@/components/MusicPlayer';
import BottomNav from '@/components/BottomNav';

export default function ConfessPage() {
  return (
    <div className="max-w-[360px] mx-auto text-white font-[Satoshi]">
      <MusicPlayer />
      
      <ConfessLounge />

      <BottomNav />
    </div>
  );
}
