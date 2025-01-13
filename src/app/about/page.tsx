'use client';

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <main className="space-y-24" role="main">
        {/* Hero Section */}
        <section 
          className="relative min-h-[90vh] flex items-center justify-center bg-[#E5E5E5]"
          aria-labelledby="hero-heading"
        >
          {/* Background with enhanced overlay */}
          <motion.div 
            className="absolute inset-0 overflow-hidden"
            style={{
              y: useTransform(useScroll().scrollY, [0, 500], [0, 100])
            }}
          >
            <Image
              src="/images/bamboo.jpg"
              alt=""
              fill
              className="object-cover opacity-80 transition-opacity duration-700"
              priority
              aria-hidden="true"
            />
            {/* Added gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
          </motion.div>
          
          {/* Content with improved layout */}
          <motion.div 
            className="relative z-10 text-center max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile image with enhanced effects */}
            <motion.div 
              className="mb-12 relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/hero.jpg"
                alt="Miriam Fuentecilla Diaz"
                width={180}
                height={180}
                priority
                className="rounded-full mx-auto border-4 border-white shadow-lg 
                         transition-transform duration-300 hover:shadow-xl"
              />
              {/* Enhanced glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/40 blur-2xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                aria-hidden="true"
              />
            </motion.div>
            
            <h1 
              id="hero-heading"
              className="text-5xl sm:text-6xl font-serif mb-6 text-white"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Meet Miriam
              </motion.span>
            </h1>
            <motion.p 
              className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Your NYC & Online Holistic Health & Wellness Coach
            </motion.p>
          </motion.div>

          {/* Enhanced scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            aria-hidden="true"
          >
            <span className="sr-only">Scroll down</span>
            <svg 
              className="w-8 h-8 text-white/80"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </section>

        {/* Journey Section with reveal animation */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-24 py-24 bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          aria-labelledby="journey-heading"
        >
          <div className="max-w-3xl mx-auto">
            <h2 
              id="journey-heading"
              className="text-4xl font-serif mb-12 text-[#2C2C2C]"
            >
              From Passion to Profession: My Journey
            </h2>
            <div className="space-y-4 text-lg text-[#2C2C2C]/80">
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
          </div>
        </motion.section>

        {/* Method Section with staggered animations */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-20 py-16 bg-white"
          aria-labelledby="method-heading"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              id="method-heading"
              className="text-3xl font-serif mb-12 text-[#2C2C2C]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              A Tailored Method That Honors Your Individuality
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              {/* Services list with hover effects */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-medium mb-6 text-[#2C2C2C]">Core Services</h3>
                <ul className="space-y-4 text-[#2C2C2C]/80" role="list">
                  {coreServices.map((service, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center gap-3 group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-[#C4B0A3] transition-colors group-hover:text-[#2C2C2C]">•</span>
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Values list with hover effects */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-medium mb-6 text-[#2C2C2C]">Key Values</h3>
                <ul className="space-y-4 text-[#2C2C2C]/80" role="list">
                  {keyValues.map((value, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3 group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-[#C4B0A3] transition-colors group-hover:text-[#2C2C2C]">
                        {index + 1}.
                      </span>
                      {value}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Grid images with hover effects */}
            <div className="grid grid-cols-4 gap-4">
              {[5, 6, 7, 8].map((num) => (
                <motion.div
                  key={num}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="overflow-hidden rounded-lg"
                >
                  <Image
                    src={`/images/grid${num}.jpg`}
                    alt=""
                    width={300}
                    height={300}
                    className="rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section with hover animations */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-20 py-16 bg-[#F5F3F0]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          aria-labelledby="cta-heading"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 
              id="cta-heading"
              className="text-3xl font-serif mb-8 text-[#2C2C2C]"
            >
              Ready to Transform Your Life?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link 
                  href="/contact" 
                  className="inline-block px-8 py-3 bg-[#2C2C2C] text-white text-sm font-medium 
                           hover:bg-[#2C2C2C]/90 transition-all duration-300 
                           focus:ring-2 focus:ring-offset-2 focus:ring-[#2C2C2C] focus:outline-none"
                >
                  Book Your Free Consultation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link 
                  href="/services" 
                  className="inline-block px-8 py-3 border border-[#2C2C2C]/20 text-[#2C2C2C] text-sm font-medium 
                           hover:bg-[#2C2C2C]/5 transition-all duration-300
                           focus:ring-2 focus:ring-offset-2 focus:ring-[#2C2C2C] focus:outline-none"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

// Data remains the same
const coreServices = [
  "Holistic Nutrition Planning",
  "Lifestyle Medicine",
  "Mindset & Emotional Well-being",
  "Continuous Support & Tracking"
];

const keyValues = [
  "Personalization – Every journey is unique",
  "Sustainability – Building lasting habits",
  "Empathy – Compassion-driven coaching"
];

export default About;
