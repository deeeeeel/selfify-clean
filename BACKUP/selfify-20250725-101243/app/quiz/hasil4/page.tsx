'use client';

const result = {
  title: 'Kamu Butuh Waktu Sendiri 😌',
  advice: 'Nggak apa-apa kok, ambil waktu buat diri sendiri. Yang penting jangan terlalu lama ya!',
};

export default function Hasil4() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h2 className="text-2xl font-bold mb-2">{result.title}</h2>
      <p className="mb-6 text-gray-700">{result.advice}</p>

      <div className="flex gap-4 mt-4">
        <a href="#" className="bg-green-500 text-white px-4 py-2 rounded">WA</a>
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded">X</a>
        <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded">IG</a>
        <a href="#" className="bg-purple-500 text-white px-4 py-2 rounded">Telegram</a>
      </div>
    </div>
  );
}
