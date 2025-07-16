'use client';

import { useParams } from 'next/navigation';

const isiArtikel: Record<string, { title: string; content: string }> = {
  'capek-tapi-ketawa': {
    title: 'Lo Capek Jiwa Tapi Masih Ketawa?',
    content: `Kadang lo keliatan ketawa di luar, tapi di dalam rasanya kerasa banget kosong. 
    Lo gak sendirian. Banyak dari kita yang ngejalanin hari kayak robot, tapi sebenarnya lagi minta dipeluk. 
    Artikel ini ditulis buat lo yang selalu bilang “gue gapapa”, padahal...`,
  },
  'self-checkin-pagi': {
    title: 'Self Check-in Buat Mulai Hari',
    content: `Coba mulai harimu dengan tanya ke diri sendiri: Apa kabar gue hari ini? Apa yang gue butuhin? 
    Self check-in bukan cuma buat orang healing, tapi buat siapa aja yang pengen hidupnya gak autopilot.`,
  },
  'kosong-dalam': {
    title: 'Kenapa Kita Sering Ngerasa Kosong?',
    content: `Perasaan kosong itu wajar. Bisa karena burnout, kehilangan arah, atau gak nemu makna dari rutinitas. 
    Lo bisa mulai dengan hal kecil yang bikin lo ngerasa hidup lagi.`,
  },
};

export default function DetailArtikel() {
  const { slug } = useParams();
  const data = isiArtikel[slug as string];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-4">
        <p>Artikel gak ditemukan, Mbeng 😢</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">{data.title}</h1>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.content}</p>
    </div>
  );
}
