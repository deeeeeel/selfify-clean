// components/QuizSlider.tsx
import Link from 'next/link';
import type { Quiz } from '@/types';

export default function QuizSlider({ quizzes }: { quizzes: Quiz[] }) {
  return (
    <div className="overflow-hidden">
      <div className="flex space-x-4 animate-scroll">
        {quizzes.map((q) => (
          <Link
            key={q.slug}
            href={`/quiz/${q.slug}`}
            className="min-w-[200px] bg-white rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <h3 className="text-lg font-semibold">{q.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
