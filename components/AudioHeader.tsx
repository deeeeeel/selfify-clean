'use client';
import { FiPlay, FiPause, FiSkipForward } from 'react-icons/fi';
import { BsBell } from 'react-icons/bs';

const getFormattedDate = () => {
  return new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

export default function AudioHeader() {
  const date = getFormattedDate();

  return (
    <div className="max-w-md mx-auto px-4 py-2">
      {/* Tanggal */}
      <div className="text-sm text-gray-900 mb-1">{date}</div>
      {/* Kontainer audio controls */}
      <div className="bg-gray-100 rounded-full flex items-center justify-between px-4 py-2">
        {/* Controls kiri */}
        <div className="flex items-center space-x-4 text-gray-900">
          <FiPlay className="w-5 h-5" />
          <FiPause className="w-5 h-5" />
          <FiSkipForward className="w-5 h-5" />
        </div>
        {/* Icon notifikasi kanan */}
        <BsBell className="w-5 h-5 text-gray-900" />
      </div>
    </div>
  );
}
