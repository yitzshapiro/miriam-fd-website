'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <motion.section
      className="px-4 sm:px-6 pb-32"
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
      }}
    >
      <motion.div 
        className="max-w-4xl mx-auto text-center bg-accent/10 p-12 relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
        <h2 className="text-4xl sm:text-5xl font-serif mb-6">
          Begin Your Wellness Journey Today
        </h2>
        <p className="text-lg mb-8 text-foreground/80 max-w-2xl mx-auto">
          Take the first step towards a healthier, more balanced life with a free consultation
        </p>
        <Link href="/contact" className="btn-primary inline-block">
          Schedule Your Free Session
        </Link>
      </motion.div>
    </motion.section>
  );
} 