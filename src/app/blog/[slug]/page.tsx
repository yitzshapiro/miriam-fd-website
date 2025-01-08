import { getPostBySlug } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import BlogPostContent from './BlogPostContent';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="blog-content">
      <Link href="/blog" className="blog-back-button">
        <ArrowLeft size={20} />
        <span>Back to Blog</span>
      </Link>

      {post.featuredImage && (
        <div className="featured-image">
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
            className="object-cover"
          />
        </div>
      )}

      <h1>{post.title}</h1>
      
      <div 
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.keyTakeaways.length > 0 && (
        <div className="key-takeaways">
          <h2 className="text-2xl font-serif mb-4">Key Takeaways</h2>
          <ul className="space-y-3 list-none">
            {post.keyTakeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent mr-3 flex-shrink-0">•</span>
                <span className="text-foreground/80">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <BlogPostContent post={post} />
    </article>
  );
}