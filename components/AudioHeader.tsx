'use client';
import { FaBell } from "react-icons/fa";
import { FiPlay, FiPause, FiSkipForward } from "react-icons/fi";

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
    <div className="flex items-center justify-between max-w-[360px] mx-auto px-4 py-2">
      <div className="text-sm font-['Trebuchet_MS'] text-black">{date}</div>
      <div className="flex items-center gap-3 text-black">
        <FiPlay />
        <FiPause />
        <FiSkipForward />
        <div className="relative ml-4">
          <FaBell className="text-lg" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] rounded-full px-1">
            1
          </span>
        </div>
      </div>
    </div>
  );
}
