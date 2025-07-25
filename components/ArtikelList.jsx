'use client';

import Image from 'next/image';

export default function ArtikelList({ title, excerpt, thumbnail }) {
  return (
    <div className="flex gap-4 items-center bg-zinc-900 border border-zinc-800 rounded-lg p-3 hover:border-yellow-500 transition-all">
      <div className="w-16 h-16 rounded-md overflow-hidden bg-zinc-700 flex-shrink-0">
        <Image
          src={thumbnail}
          alt={title}
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-bold text-white mb-1">{title}</h3>
        <p className="text-xs text-zinc-400 line-clamp-2">{excerpt}</p>
      </div>
    </div>
  );
}
