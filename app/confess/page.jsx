'use client';

import ConfessWall from '@/components/ConfessWall';

export default function ConfessPage() {
  return (
    <main className="max-w-[360px] mx-auto px-4 py-6 bg-black text-white font-[Satoshi] min-h-screen">
      <h1 className="text-lg font-bold mb-4">Confess Wall</h1>
      <ConfessWall />
    </main>
  );
}
