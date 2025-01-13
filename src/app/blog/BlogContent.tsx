'use client';

import Link from "next/link";
import { motion } from "framer-motion";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
};

export default function BlogContent({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-tertiary/30">
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-12 space-y-16">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-serif mb-6">
            Holistic Health & Wellness Insights
            <span className="gradient-text block mt-2">by Miriam—NYC & Online</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Explore the latest tips, research, and inspiration on holistic health, wellness, and personal growth.
          </p>
        </motion.section>

        <div className="space-y-6">
          <h3 className="text-2xl font-serif mb-8">Latest Articles</h3>
          <div className="grid gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:shadow-luxury transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="group">
                  <h4 className="text-xl font-serif mb-3 text-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-foreground/70">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-accent text-sm">
                    Read More 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 