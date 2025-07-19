// lib/wpClient.ts
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// GraphQL endpoint of your headless WordPress CMS
// Pastikan di .env.local ada NEXT_PUBLIC_WP_API_URL, misalnya:
// NEXT_PUBLIC_WP_API_URL=https://cms.selfify.id/graphql
const wpApiUrl = process.env.NEXT_PUBLIC_WP_API_URL;
if (!wpApiUrl) {
  throw new Error('Missing NEXT_PUBLIC_WP_API_URL environment variable');
}

export const wpClient = new ApolloClient({
  uri: wpApiUrl,
  cache: new InMemoryCache(),
});

/** ===== Queries ===== **/

const ARTICLES_QUERY = gql`
  query AllArticles {
    posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

const QUIZZES_QUERY = gql`
  query AllQuizzes {
    quizzes(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        title
        slug
      }
    }
  }
`;

const ARTICLE_BY_SLUG_QUERY = gql`
  query ArticleBySlug($slug: String!) {
    posts(where: { name: $slug }) {
      nodes {
        title
        slug
        content
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

const QUIZ_BY_SLUG_QUERY = gql`
  query QuizBySlug($slug: String!) {
    quizzes(where: { slug: $slug }) {
      nodes {
        title
        slug
        content
      }
    }
  }
`;

const CATEGORIES_QUERY = gql`
  query AllCategories {
    categories {
      nodes {
        name
        slug
        count
      }
    }
  }
`;

const ARTICLES_BY_CATEGORY_QUERY = gql`
  query ArticlesByCategory($category: String!) {
    posts(where: { categoryName: $category, orderby: { field: DATE, order: DESC } }) {
      nodes {
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

/** ===== Fetch functions ===== **/

export async function fetchArticles() {
  const { data } = await wpClient.query({ query: ARTICLES_QUERY });
  return data.posts.nodes;
}

export async function fetchQuizzes() {
  const { data } = await wpClient.query({ query: QUIZZES_QUERY });
  return data.quizzes.nodes;
}

export async function fetchArticleBySlug(slug: string) {
  const { data } = await wpClient.query({
    query: ARTICLE_BY_SLUG_QUERY,
    variables: { slug },
  });
  return data.posts.nodes[0] || null;
}

export async function fetchQuizBySlug(slug: string) {
  const { data } = await wpClient.query({
    query: QUIZ_BY_SLUG_QUERY,
    variables: { slug },
  });
  return data.quizzes.nodes[0] || null;
}

export async function fetchAllCategories() {
  const { data } = await wpClient.query({ query: CATEGORIES_QUERY });
  return data.categories.nodes;
}

export async function fetchArticlesByCategory(category: string) {
  const { data } = await wpClient.query({
    query: ARTICLES_BY_CATEGORY_QUERY,
    variables: { category },
  });
  return data.posts.nodes;
}
