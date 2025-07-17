import Link from 'next/link';

export const metadata = {
  title: 'Pilih Kategori Artikel',
  description: 'Daftar kategori artikel Selfify',
};

const categories = [
  { name: 'Mental Health', slug: 'mental-health' },
  { name: 'Survive Mode', slug: 'survive-mode' },
  { name: 'Character', slug: 'character' },
  { name: 'Relationship', slug: 'relationship' },
  { name: 'Self Reflection', slug: 'self-reflection' },
  { name: 'Momomoney', slug: 'momomoney' },
  { name: 'Life Phase', slug: 'life-phase' },
];

export default function KategoriIndex() {
  return (
    <div className="min-h-screen px-4 py-8 bg-white font-sans">
      <h1 className="text-2xl font-bold text-center mb-8">Pilih Kategori Artikel</h1>
      <div className="max-w-md mx-auto grid grid-cols-2 gap-4">
        {/* Row 1 */}
        <Link
          href="/artikel/kategori/mental-health"
          className="block bg-blue-50 text-blue-700 font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100 transition text-center"
        >
          Mental Health
        </Link>
        <Link
          href="/artikel/kategori/survive-mode"
          className="block bg-blue-50 text-blue-700 font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100 transition text-center"
        >
          Survive Mode
        </Link>
        {/* Row 2 */}
        <Link
          href="/artikel/kategori/character"
          className="block bg-blue-50 text-blue-700 font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100 transition text-center"
        >
          Character
        </Link>
        <Link
          href="/artikel/kategori/relationship"
          className="block bg-blue-50 text-blue-700 font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100 transition text-center"
        >
          Relationship
        </Link>
        {/* Row 3 */}
        <Link
          href="/artikel/kategori/self-reflection"
          className="block bg-blue-50 text-blue-700 font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100 transition text-center"
        >
          Self Reflection
        </Link>
        <Link
          href="/artikel/kategori/momomoney"
          className="block bg-blue-50 text-blue-700 font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100 transition text-center"
        >
          Momomoney
        </Link>
        {/* Row 4: empty cell + Life Phase */}
        <div />
        <Link
          href="/artikel/kategori/life-phase"
          className="block bg-blue-50 text-blue-700 font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100 transition text-center"
        >
          Life Phase
        </Link>
      </div>
    </div>
  );
}
