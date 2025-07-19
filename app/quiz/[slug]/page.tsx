// app/quiz/[slug]/page.tsx
export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import { fetchQuizzes } from '@/lib/wpClient';

// (Optional) tetap bisa generate params agar link statis tersedia,
// tapi akan di-SSR saat request, bukan SSG di build-time.
export async function generateStaticParams() {
  const quizzes = await fetchQuizzes();
  return quizzes.map((q: any) => ({ slug: q.slug }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const quizzes = await fetchQuizzes();
  const quiz = quizzes.find((q: any) => q.slug === slug);
  if (!quiz) {
    return {
      title: 'Quiz Tidak Ditemukan – Selfify',
      description: 'Quiz yang kamu cari tidak tersedia.',
    };
  }
  return {
    title: `Quiz – ${quiz.title} | Selfify`,
    description: `Hasil dan penjelasan quiz "${quiz.title}".`,
  };
}

export default async function QuizPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const quizzes = await fetchQuizzes();
  const quiz = quizzes.find((q: any) => q.slug === slug);
  if (!quiz) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
      <p className="text-gray-600">
        Konten interaktif untuk quiz <strong>{quiz.title}</strong> akan segera hadir!
      </p>
    </main>
  );
}
