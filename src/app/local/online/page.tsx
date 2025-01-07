'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Online() {
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
            Virtual Health & <span className="gradient-text">Wellness</span> Coaching
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience premium health coaching from anywhere. Miriam offers flexible, personalized online sessions to fit your lifestyle.
          </p>
        </motion.section>

        {/* Main Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/80 p-8 rounded-2xl shadow-luxury mb-12"
        >
          <h2 className="text-3xl font-serif mb-6">Transform Your Life, Virtually</h2>
          <div className="text-foreground/80 space-y-4 mb-6">
            <p className="leading-relaxed">
              Access expert wellness guidance from the comfort of your home. Our online programs offer:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Flexible scheduling across all time zones</li>
              <li>Personalized nutrition and wellness plans</li>
              <li>One-on-one video coaching sessions</li>
              <li>24/7 messaging support and check-ins</li>
              <li>Digital resources and progress tracking</li>
            </ul>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Start Your Virtual Journey
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
              Book Your Virtual Consultation
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
} 