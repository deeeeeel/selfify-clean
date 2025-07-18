// app/quiz/page.tsx (Quiz Listing Page)
import Link from 'next/link';
import { fetchQuizzes } from '@/lib/wpClient';

export const metadata = {
  title: 'Quiz – Selfify',
  description: 'Kumpulkan quiz interaktif untuk refleksi diri dan self-discovery.',
};

export default async function QuizPage() {
  const quizzes = await fetchQuizzes();

  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6">Quiz Populer</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((q: any) => (
          <Link
            key={q.slug}
            href={`/quiz/${q.slug}`}
            className="block bg-white rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <h2 className="text-xl font-semibold mb-2">{q.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
