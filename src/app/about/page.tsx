'use client';

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-tertiary/30">
      <main className="max-w-4xl mx-auto px-4 py-20 space-y-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('/images/leaves-bg.jpg')] bg-cover opacity-20 bg-center rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40 rounded-3xl" />
          
          {/* Content */}
          <div className="relative p-12 sm:p-16">
            <motion.div 
              className="mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/hero.jpg"
                alt="Miriam Fuentecilla Diaz"
                width={180}
                height={180}
                priority
                className="rounded-full shadow-2xl border-4 border-white/90 mx-auto"
              />
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-6">
              Meet <span className="gradient-text">Miriam</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Your NYC & Online Holistic Health & Wellness Coach
            </p>
          </div>
        </motion.section>

        {/* Journey Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card p-8 sm:p-12 rounded-2xl space-y-6"
        >
          <h2 className="text-3xl font-serif font-semibold">
            From Passion to Profession: My Journey
          </h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              My fascination with the interplay between nutrition, movement, and mindset began early in life. 
              This passion led me to complete rigorous training in integrative nutrition, functional medicine, 
              and mindfulness-based practices.
            </p>
            <p>
              Today, my mission is to empower individuals—no matter their location—to create sustainable 
              lifestyle changes that unlock unprecedented levels of health and happiness.
            </p>
          </div>
        </motion.section>

        {/* Method Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-12 rounded-2xl space-y-8"
        >
          <h2 className="text-3xl font-serif font-semibold">
            A Tailored Method That Honors Your Individuality
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Core Services</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  Holistic Nutrition Planning
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  Lifestyle Medicine
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  Mindset & Emotional Well-being
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  Continuous Support & Tracking
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Key Values</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent">1.</span>
                  Personalization – Every journey is unique
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">2.</span>
                  Sustainability – Building lasting habits
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">3.</span>
                  Empathy – Compassion-driven coaching
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          className="text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-accent/10 p-12 rounded-3xl relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
            <h2 className="text-3xl font-serif mb-8">Ready to Transform Your Life?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/contact" 
                className="btn-primary group"
              >
                Book Your Free Consultation
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link 
                href="/services" 
                className="btn-secondary"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
};

export default About;
