import { BlogPost } from "@/lib/blog-data";
import BlogPostCard from "@/components/BlogPostCard";

export default function BlogContent({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-tertiary/30">
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-12 space-y-16">
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl font-serif mb-6">
            Holistic Health & Wellness Insights
            <span className="gradient-text block mt-2">by Miriam—NYC & Online</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Explore the latest tips, research, and inspiration on holistic health, wellness, and personal growth.
          </p>
        </section>

        <div className="space-y-6">
          <h3 className="text-2xl font-serif mb-8">Latest Articles</h3>
          <div className="grid gap-6">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 