// lib/wpClient.ts
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const wpApiUrl = process.env.NEXT_PUBLIC_WP_API_URL;
if (!wpApiUrl) {
  throw new Error('Missing NEXT_PUBLIC_WP_API_URL environment variable');
}

export const wpClient = new ApolloClient({
  uri: wpApiUrl,
  cache: new InMemoryCache(),
});

// Fetch semua artikel
export async function fetchArticles() {
  const { data } = await wpClient.query({
    query: gql`
      query AllArticles {
        posts(first: 100) {
          nodes {
            slug
            title
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                slug
                name
              }
            }
          }
        }
      }
    `,
  });
  return data.posts.nodes;
}

// Fetch artikel berdasarkan kategori
export async function fetchArticlesByCategory(slug: string) {
  const { data } = await wpClient.query({
    query: gql`
      query ArticlesByCategory($slug: ID!) {
        category(id: $slug, idType: SLUG) {
          name
          posts(first: 100) {
            nodes {
              slug
              title
              excerpt
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `,
    variables: { slug },
  });
  return data.category?.posts.nodes || [];
}

// Fetch daftar kategori untuk prerender
export async function fetchCategories() {
  const { data } = await wpClient.query({
    query: gql`
      query AllCategories {
        categories(first: 100) {
          nodes {
            slug
            name
          }
        }
      }
    `,
  });
  return data.categories.nodes;
}

// Fetch semua quiz
export async function fetchQuizzes() {
  const { data } = await wpClient.query({
    query: gql`
      query AllQuizzes {
        quizzes(first: 100) {
          nodes {
            slug
            title
          }
        }
      }
    `,
  });
  return data.quizzes.nodes;
}
