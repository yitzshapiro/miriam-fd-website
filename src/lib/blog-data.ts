import { fetchPosts } from "./wordpress";

import { fetchPostBySlug } from "./wordpress";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: {
    url: string;
    alt: string;
    thumbnail?: string;
    medium?: string;
  } | null;
  categories: string[];
  tags: string[];
  keyTakeaways: string[];
};

export async function getAllPosts(filters?: { category?: string; tag?: string }): Promise<BlogPost[]> {
  return fetchPosts(filters);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return fetchPostBySlug(slug);
} 