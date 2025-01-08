import { getAllPosts } from '@/lib/blog-data';
import BlogContent from '@/app/blog/BlogContent';

export const revalidate = 60;

type Props = {
  searchParams: Promise<{ category?: string; tag?: string }>;
};

export default async function BlogIndex({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  
  const posts = await getAllPosts({
    category: resolvedParams.category,
    tag: resolvedParams.tag
  });

  return (
    <div className="container mx-auto px-4">
      {resolvedParams.category && (
        <h2 className="text-2xl font-serif mb-8">
          Posts in category: {resolvedParams.category}
        </h2>
      )}
      {resolvedParams.tag && (
        <h2 className="text-2xl font-serif mb-8">
          Posts tagged with: {resolvedParams.tag}
        </h2>
      )}
      
      <BlogContent posts={posts} />
    </div>
  );
}
