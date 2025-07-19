// app/quiz/[slug]/page.tsx
import { fetchQuizBySlug, fetchQuizzes } from '@/lib/wpClient';
import { notFound } from 'next/navigation';

interface PageProps { params: { slug: string } }

// Pre-generate pages for all quiz slugs
export async function generateStaticParams() {
  const quizzes = await fetchQuizzes();
  return quizzes.map((q: any) => ({ slug: q.slug }));
}

export default async function QuizDetail({ params }: PageProps) {
  const quiz = await fetchQuizBySlug(params.slug);
  if (!quiz) return notFound();

  return (
    <main className="min-h-screen bg-white p-6 space-y-6">
      <h1 className="text-3xl font-bold">{quiz.title}</h1>
      <ol className="list-decimal list-inside space-y-4">
        {quiz.acf.questions.map((q: any, idx: number) => (
          <li key={idx}>
            <p className="font-semibold">{q.questionText}</p>
            {q.options.map((opt: string, i: number) => (
              <div key={i} className="ml-4 text-gray-700">• {opt}</div>
            ))}
          </li>
        ))}
      </ol>
    </main>
  );
}
