'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Brooklyn() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-tertiary/30">
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center pt-16 pb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-serif mb-6">
            Health & Wellness in <span className="gradient-text">Brooklyn</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Looking for a health & wellness coach in Brooklyn? Miriam offers holistic, online-friendly coaching designed for creatives, professionals, and families.
          </p>
        </motion.section>

        {/* Main Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/80 p-8 rounded-2xl shadow-luxury mb-12"
        >
          <h2 className="text-3xl font-serif mb-6">Dynamic, Holistic Health for Brooklyn</h2>
          <p className="text-foreground/80 mb-6 leading-relaxed">
            Brooklyn's eclectic vibe is the perfect backdrop for a wellness journey that bridges creativity and practicality. Choose in-person appointments for an immersive experience or opt for online coaching that brings holistic transformation right to your living room. Let's tap into the borough's diversity to inspire a healthier, more balanced life.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Reserve Your Brooklyn Session
            </Link>
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-accent/10 p-12 rounded-3xl relative overflow-hidden">
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
            <h2 className="text-3xl font-serif mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-lg mb-8 text-foreground/80">
              Take the first step towards a healthier, more balanced lifestyle
            </p>
            <Link href="/contact" className="btn-secondary inline-block">
              Book Your Consultation
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
} 