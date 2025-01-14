'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Icons } from "@/components/icons";
import { useScroll, useTransform } from "framer-motion";
import { CTASection } from '@/components/CTASection';

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

interface ProcessStep {
  title: string;
  description: string;
}

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-tertiary/30">
      <main className="max-w-[1600px] mx-auto px-6 py-12 space-y-32">
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
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
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
                className="px-8 py-3 bg-accent/10 hover:bg-accent/20 
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
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
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
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2 
            className="text-3xl sm:text-5xl font-serif mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Your Journey to Wellness
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {process.map((step, index) => (
              <ProcessCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <CTASection />
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
function ServiceCard({ service }: { service: Service; index: number }) {
  const cardRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [20, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      className="glass-card p-8 hover:shadow-luxury transition-all duration-500 group"
      whileHover={{ scale: 1.02 }}
    >
      <div className="mb-6 text-accent group-hover:scale-125 origin-left transition-transform">
        {service.icon}
      </div>
      <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors duration-500">
        {service.title}
      </h3>
      <p className="text-foreground/70 mb-6 group-hover:text-accent/80 transition-colors duration-500">
        {service.description}
      </p>
      <ul className="space-y-3">
        {service.features.map((feature: string) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="text-accent">•</span>
            <span className="text-foreground/70 group-hover:text-accent/70 transition-colors duration-500">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <div className="relative">
      <div className="process-number">
        <span>{index + 1}</span>
      </div>
      <motion.div 
        className="process-card"
        initial={{ 
          opacity: 0, 
          scale: 0.8,
          rotateX: 15,
          y: 50
        }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          rotateX: 0,
          y: 0
        }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.7,
          delay: index * 0.05,
          ease: [0.23, 1, 0.32, 1] // cubic-bezier easing for smoother animation
        }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2 }
        }}
      >
        <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
        <p className="text-foreground/70">{step.description}</p>
      </motion.div>
    </div>
  );
}
