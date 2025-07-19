// types/index.ts
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export interface Quiz {
  slug: string;
  title: string;
  // tambahkan field lain jika diperlukan
}
