'use client';

// MusicPlayer.jsx
import { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-zinc-900 text-white p-4 rounded-xl flex items-center justify-between">
      <div>
        <div className="font-bold text-sm">Lover</div>
        <div className="text-xs text-zinc-400">Taylor Swift</div>
      </div>
      <button
        onClick={togglePlay}
        className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>
    </div>
  );
}
