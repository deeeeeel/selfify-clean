export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

export interface Quiz {
  slug: string;
  title: string;
}
