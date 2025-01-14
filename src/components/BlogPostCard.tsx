'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/blog-data";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
  );
} 