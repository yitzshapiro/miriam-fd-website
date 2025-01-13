'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin } from 'lucide-react';
import { IconWrapper } from "@/components/icons";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-tertiary/30">
      <main className="max-w-7xl mx-auto space-y-24 px-4 py-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative text-center max-w-4xl mx-auto pt-24 pb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-serif mb-6">
            Start Your{" "}
            <motion.span 
              className="gradient-text"
              animate={{
                color: ["#1A1A1A", "#C4B0A3", "#1A1A1A"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >Wellness</motion.span>{" "}
            Journey
          </h1>
          <p className="text-lg text-foreground/70">
            Connect with Miriam for personalized health & wellness coaching, in-person or online
          </p>
        </motion.section>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/80 p-8 shadow-luxury">
              <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
              <div className="space-y-4 text-foreground/80">
                <div className="flex items-center gap-3">
                  <IconWrapper Icon={Phone} className="w-5 h-5" />
                  (212) 123-4567
                </div>
                <div className="flex items-center gap-3">
                  <IconWrapper Icon={Mail} className="w-5 h-5" />
                  info@miriamdiazhealthcoach.com
                </div>
                <div className="flex items-center gap-3">
                  <IconWrapper Icon={MapPin} className="w-5 h-5" />
                  123 Wellness Ave., Suite 456, New York, NY 10001
                </div>
              </div>
            </div>

            <div className="bg-white/80 p-8 shadow-luxury">
              <h2 className="text-2xl font-serif mb-6">Hours</h2>
              <div className="space-y-2 text-foreground/80">
                <p>Monday – Friday: 9 AM – 6 PM</p>
                <p>Evening/Weekend slots available upon request</p>
                <p className="mt-4">Virtual sessions available worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/80 p-8 shadow-luxury"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-white/50 border border-accent/20 focus:border-accent focus:ring-1 focus:ring-accent transition-all" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-white/50 border border-accent/20 focus:border-accent focus:ring-1 focus:ring-accent transition-all" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 bg-white/50 border border-accent/20 focus:border-accent focus:ring-1 focus:ring-accent transition-all" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message/Goals</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 bg-white/50 border border-accent/20 focus:border-accent focus:ring-1 focus:ring-accent transition-all" 
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.section
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-accent/10 p-12 relative overflow-hidden">
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
            <Link href="/services" className="btn-secondary inline-block">
              Explore Our Services
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
} 