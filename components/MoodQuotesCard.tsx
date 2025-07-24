'use client';

interface MoodQuotesCardProps {
  src: string;
  alt?: string;
}

export default function MoodQuotesCard({ src, alt }: MoodQuotesCardProps) {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Pakai <img> dengan ukuran otomatis, supaya pasti muncul */}
      <img
        src={src}
        alt={alt ?? 'Mood Quote'}
        className="w-full h-auto object-cover"
      />

      {/* Tombol Share & Download minimalis */}
      <div className="absolute top-2 right-2 flex space-x-2">
        <button aria-label="Share Quote" className="p-1 rounded-full hover:bg-gray-200">
          🔗
        </button>
        <button aria-label="Download Quote" className="p-1 rounded-full hover:bg-gray-200">
          ⬇️
        </button>
      </div>
    </div>
  );
}
