'use client';

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { Icons } from "@/components/icons";

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-tertiary/30">
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-32">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center max-w-4xl mx-auto pt-16"
        >
          <h1 className="text-5xl pt-10 sm:text-7xl font-serif mb-6">
            Transform Your Life with
            <span className="gradient-text block mt-2">Premium Wellness</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-12">
            Discover exclusive health & wellness coaching services, tailored for ambitious individuals in NYC & worldwide.
          </p>
          
          {/* Quick Nav Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {['Coaching', 'Nutrition', 'Mindfulness', 'Corporate'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full bg-accent/10 hover:bg-accent/20 
                         text-accent transition-all cursor-pointer"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Services Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-serif mb-16">Your Journey to Wellness</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5 }}
                className="relative"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 
                              bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-serif text-accent">{index + 1}</span>
                </div>
                <div className="glass-card p-6 pt-12 rounded-2xl h-full">
                  <h3 className="text-xl font-serif mb-4">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
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
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto text-center bg-accent/10 p-12 rounded-3xl relative overflow-hidden"
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
            <h2 className="text-3xl sm:text-4xl font-serif mb-6">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-lg mb-8 text-foreground/80 max-w-2xl mx-auto">
              Take the first step towards a healthier, more balanced life with a complimentary consultation.
            </p>
            <Link 
              href="/contact" 
              className="btn-primary inline-flex items-center group"
            >
              Schedule Your Free Session
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}

// Data
const services = [
  {
    title: "1:1 Premium Coaching",
    description: "Personalized wellness strategy sessions designed for your unique lifestyle and goals. Available in NYC or virtually.",
    features: [
      "Comprehensive health assessment",
      "Custom action plans",
      "Weekly progress tracking",
      "24/7 messaging support",
      "Quarterly lifestyle reviews"
    ],
    icon: Icons.Person()
  },
  {
    title: "Nutrition Mastery",
    description: "Transform your relationship with food through personalized nutrition planning and mindful eating practices.",
    features: [
      "Custom meal planning",
      "Nutritional analysis",
      "Recipe customization",
      "Shopping guides",
      "Restaurant ordering tips"
    ],
    icon: Icons.Nutrition()
  },
  {
    title: "Mind-Body Balance",
    description: "Integrate mindfulness and meditation practices into your daily routine for enhanced mental clarity and stress reduction.",
    features: [
      "Guided meditation sessions",
      "Stress management techniques",
      "Sleep optimization",
      "Breathing exercises",
      "Mindfulness training"
    ],
    icon: Icons.Meditation()
  },
  {
    title: "Corporate Wellness",
    description: "Elevate your team's performance through customized workplace wellness programs and workshops.",
    features: [
      "Group workshops",
      "Team building exercises",
      "Stress management seminars",
      "Office ergonomics",
      "Wellness challenges"
    ],
    icon: Icons.Building()
  },
  {
    title: "Lifestyle Design",
    description: "Create a sustainable, balanced lifestyle that aligns with your personal and professional aspirations.",
    features: [
      "Time management strategies",
      "Work-life balance planning",
      "Habit formation",
      "Energy optimization",
      "Personal development"
    ],
    icon: Icons.Lifestyle()
  },
  {
    title: "Movement & Fitness",
    description: "Develop a sustainable fitness routine that energizes your body and fits your schedule.",
    features: [
      "Personalized workout plans",
      "Movement assessments",
      "Injury prevention",
      "Progress tracking",
      "Form correction"
    ],
    icon: Icons.Fitness()
  }
];

const process = [
  {
    title: "Discovery",
    description: "Begin with a comprehensive assessment of your current lifestyle, goals, and challenges."
  },
  {
    title: "Strategy",
    description: "Receive your personalized wellness blueprint, tailored to your unique needs."
  },
  {
    title: "Transform",
    description: "Implementation with consistent support and adjustments for optimal results."
  }
];

// Service Card Component
function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="glass-card p-8 rounded-2xl hover:shadow-luxury transition-all duration-500"
    >
      <div className="mb-6 text-accent">{service.icon}</div>
      <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
      <p className="text-foreground/70 mb-6">{service.description}</p>
      <ul className="space-y-3">
        {service.features.map((feature: string) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="text-accent">•</span>
            <span className="text-foreground/70">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
