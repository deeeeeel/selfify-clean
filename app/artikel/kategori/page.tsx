import Link from 'next/link';

export const metadata = {
  title: 'Pilih Kategori Artikel',
  description: 'Daftar kategori artikel Selfify',
};

const categories = [
  { name: 'Mental Health', slug: 'mental-health' },
  { name: 'Survive Mode',   slug: 'survive-mode'   },
  { name: 'Character',      slug: 'character'      },
  { name: 'Relationship',   slug: 'relationship'   },
  { name: 'Self Reflection',slug: 'self-reflection'},
  { name: 'Momomoney',      slug: 'momomoney'      },
  { name: 'Life Phase',     slug: 'life-phase'     },
];

export default function KategoriIndex() {
  return (
    <div className="min-h-screen px-4 py-8 bg-white font-sans">
      <h1 className="text-2xl font-bold text-center mb-6">Pilih Kategori Artikel</h1>
      <div className="max-w-md mx-auto grid gap-4">
        {categories.map(cat => (
          <Link
            key={cat.slug}
            href={`/artikel/kategori/${cat.slug}`}
            className="block bg-blue-50 text-blue-700 font-medium px-4 py-3 rounded-lg shadow hover:bg-blue-100 transition"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
