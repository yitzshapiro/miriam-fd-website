'use client';

import { useRouter } from 'next/navigation';
import type { BlogPost } from '@/lib/blog-data';

type Props = {
  post: BlogPost;
};

export default function BlogPostContent({ post }: Props) {
  const router = useRouter();

  return (
    <div className="metadata mt-8 mb-12">
      {post.categories.length > 0 && (
        <div className="categories mb-4">
          <span className="text-sm text-foreground/60 mr-2">Categories:</span>
          {post.categories.map((category, index) => (
            <button 
              key={category}
              onClick={() => router.push(`/blog?category=${category.toLowerCase()}`)}
              className="text-accent hover:text-accent/80 mr-2"
            >
              {category}
              {index < post.categories.length - 1 && ", "}
            </button>
          ))}
        </div>
      )}

      {post.tags.length > 0 && (
        <div className="tag-cloud">
          {post.tags.map((tag) => (
            <button
              key={tag}
              onClick={() => router.push(`/blog?tag=${tag.toLowerCase()}`)}
              className="tag"
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 