'use client';

import Image from 'next/image';
import { FiShare2, FiDownload } from 'react-icons/fi';

interface MoodQuotesCardProps {
  src: string;
  alt?: string;
}

export default function MoodQuotesCard({ src, alt }: MoodQuotesCardProps) {
  return (
    <div className="relative max-w-xs mx-auto rounded-2xl shadow-lg overflow-hidden aspect-square bg-white">
      {/* Quote Image */}
      <Image
        src={src}
        alt={alt || 'Mood Quote'}
        fill
        className="rounded-2xl object-cover"
      />

      {/* Actions */}
      <div className="absolute bottom-2 right-2 flex space-x-2">
        <button
          aria-label="Share Mood Quote"
          className="p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-shadow"
        >
          <FiShare2 className="w-5 h-5 text-gray-900" />
        </button>
        <button
          aria-label="Download Mood Quote"
          className="p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-shadow"
        >
          <FiDownload className="w-5 h-5 text-gray-900" />
        </button>
      </div>
    </div>
  );
}
