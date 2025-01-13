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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 text-primary hover:text-accent 
                 transition-colors duration-300 mb-8 font-medium"
      >
        <ArrowLeft 
          size={20} 
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        <span>Back to Blog</span>
      </Link>

      <article className="blog-content">
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

        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
          {post.title}
        </h1>
        
        <div 
          className="prose prose-lg prose-headings:font-serif prose-headings:font-light
                   prose-p:text-foreground/80 prose-p:leading-relaxed
                   prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                   max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.keyTakeaways.length > 0 && (
          <div className="key-takeaways">
            <h2 className="text-2xl font-serif mb-4">Key Takeaways</h2>
            <ul>
              {post.keyTakeaways.map((takeaway, index) => (
                <li key={index}>{takeaway}</li>
              ))}
            </ul>
          </div>
        )}

        <BlogPostContent post={post} />
      </article>
    </div>
  );
}