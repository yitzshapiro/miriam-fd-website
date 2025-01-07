'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function BlogPost({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = use(paramsPromise);
  const post = blogPosts.posts.find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-tertiary/30">
      <main className="max-w-3xl mx-auto px-4 pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Link 
            href="/blog" 
            className="text-accent hover:text-accent/80 inline-flex items-center mb-12"
          >
            ← Back to Blog
          </Link>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="prose prose-lg dark:prose-invert max-w-none space-y-12"
        >
          <p className="text-lg leading-relaxed">{post.content.intro}</p>

          {post.content.sections.map((section, index) => (
            <section key={index} className="space-y-6">
              <h2 className="text-3xl font-serif mb-6">{section.title}</h2>
              {section.content && typeof section.content === 'string' && (
                <p className="text-lg leading-relaxed text-foreground/80">{section.content}</p>
              )}
              
              {section.list && (
                <ul className="space-y-3 list-none pl-0">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections?.map((subsection, i) => (
                <div key={i} className="space-y-4 pl-6 border-l-2 border-accent/20">
                  <h3 className="text-2xl font-serif">{subsection.title}</h3>
                  <p className="text-lg leading-relaxed text-foreground/80">{subsection.content}</p>
                  {subsection.list && (
                    <ul className="space-y-3 list-none pl-0">
                      {subsection.list.map((item, j) => (
                        <li key={j} className="flex items-start space-x-3">
                          <span className="text-accent mt-1">•</span>
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}

          <div className="mt-16 p-8 bg-accent/10 rounded-2xl">
            <h3 className="text-2xl font-serif mb-6">Key Takeaways</h3>
            <ul className="space-y-4 list-none pl-0">
              {post.content.takeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-foreground/80">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 text-center py-12 border-t border-accent/20"
        >
          <h3 className="text-2xl font-serif mb-6">
            Want to Learn More About Mindful Living?
          </h3>
          <Link 
            href="/contact" 
            className="btn-primary inline-flex items-center group text-lg px-8 py-4"
          >
            Schedule a Consultation
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
