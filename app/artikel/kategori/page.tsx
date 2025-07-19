// app/artikel/kategori/page.tsx
'use client';

import React, { useState, useEffect } from 'react';

interface Category {
  id: number;
  slug: string;
  name: string;
  count: number;
}

interface Article {
  id: number;
  title: { rendered: string };
  link: string;
  date: string;
}

const API_BASE = process.env.NEXT_PUBLIC_WP_API_URL!;

export default function CategoryPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);

  // Fetch all categories
  useEffect(() => {
    fetch(`${API_BASE}/categories`)
      .then(res => res.json())
      .then((data: Category[]) => setCategories(data));
  }, []);

  // Fetch articles when a category is selected
  useEffect(() => {
    if (selectedCategory) {
      fetch(`${API_BASE}/posts?categories=${selectedCategory.id}`)
        .then(res => res.json())
        .then((data: Article[]) => setArticles(data));
    }
  }, [selectedCategory]);

  if (selectedCategory) {
    return (
      <main className="p-6">
        <button onClick={() => setSelectedCategory(null)} className="underline mb-4">
          &larr; Kembali ke Kategori
        </button>
        <h1 className="text-2xl font-bold mb-4">{selectedCategory.name}</h1>
        <ul>
          {articles.map(article => (
            <li key={article.id} className="mb-2">
              <a href={article.link} className="text-blue-600 hover:underline">
                {article.title.rendered}
              </a>{' '}
              <span className="text-gray-500 text-sm">{new Date(article.date).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Kategori Artikel</h1>
      <ul className="grid grid-cols-2 gap-4">
        {categories.map(cat => (
          <li key={cat.id}>
            <button
              onClick={() => setSelectedCategory(cat)}
              className="block w-full p-4 bg-gray-100 rounded hover:bg-gray-200"
            >
              {cat.name} ({cat.count})
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
