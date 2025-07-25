'use client';

interface MoodQuotesCardProps {
  src: string;
  alt?: string;
}

export default function MoodQuotesCard({ src, alt }: MoodQuotesCardProps) {
  return (
    <div className="relative w-72 h-72">
  <Image
    src="/images/moodquotes/mq1.svg"
    alt="Mood Quote 1"
    fill
    className="object-cover"
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
