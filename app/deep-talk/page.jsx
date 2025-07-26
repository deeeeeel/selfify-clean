'use client';

import Link from 'next/link';

const features = [
  { title: 'Bestie Talk', slug: 'bestie', desc: 'Curhat personal sama Selfie.' },
  { title: 'Crisis Chat', slug: 'crisis', desc: 'Lagi di titik rendah? Selfie siap dengerin.' },
  { title: 'Career Whisper', slug: 'career', desc: 'Butuh arah hidup dan kerjaan?' },
  { title: 'Late Night Thoughts', slug: 'latenight', desc: 'Yang susah diceritain ke siapa-siapa.' },
];

export default function DeepTalkPage() {
  return (
    <div className="max-w-[360px] mx-auto text-white px-4 py-6 font-[Satoshi]">
      <h1 className="text-2xl font-bold mb-2">Deep Talk</h1>
      <p className="text-sm text-zinc-400 mb-6">
        Pilih topik yang paling menggambarkan kondisi lo sekarang.
      </p>

      <div className="space-y-4">
        {features.map(({ title, slug, desc }) => (
          <Link
            key={slug}
            href={`/deep-talk/${slug}`}
            className="block p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition"
          >
            <h2 className="text-lg font-semibold text-yellow-400">{title}</h2>
            <p className="text-sm text-zinc-400">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
