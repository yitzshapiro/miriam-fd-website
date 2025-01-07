'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Building } from 'lucide-react';
import { IconWrapper } from "@/components/icons";

const locations = [
  {
    name: "Manhattan",
    href: "/local/manhattan",
    description: "Luxury wellness coaching in the heart of NYC"
  },
  {
    name: "Brooklyn",
    href: "/local/brooklyn",
    description: "Holistic health for creative professionals and families"
  },
  {
    name: "Queens",
    href: "/local/queens",
    description: "Personalized wellness programs for diverse communities"
  },
  {
    name: "The Bronx",
    href: "/local/bronx",
    description: "Integrative health coaching for sustainable lifestyle changes"
  },
  {
    name: "Staten Island",
    href: "/local/staten-island",
    description: "Local wellness guidance with a personal touch"
  },
  {
    name: "Virtual Sessions",
    href: "/local/online",
    description: "Premium online coaching from anywhere in the world"
  }
];

export default function Local() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-tertiary/30">
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center pt-16 pb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-serif mb-6">
            Find a <span className="gradient-text">Location</span> Near You
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover personalized health & wellness coaching across NYC and online. Choose the location that works best for you.
          </p>
        </motion.section>

        {/* Locations Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link href={location.href}>
                <motion.div 
                  className="bg-white/80 p-8 rounded-2xl shadow-luxury h-full hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconWrapper Icon={Building} className="w-12 h-12 mx-auto mb-4" />
                  <h2 className="text-2xl font-serif mb-3">{location.name}</h2>
                  <p className="text-foreground/70">{location.description}</p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

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
              Not Sure Where to Start?
            </h2>
            <p className="text-lg mb-8 text-foreground/80">
              Contact us for a free consultation and find the perfect program for you
            </p>
            <Link href="/contact" className="btn-secondary inline-block">
              Get in Touch
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
