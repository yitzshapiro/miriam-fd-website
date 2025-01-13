'use client';

import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ParallaxImageSection } from "@/components/ParallaxImageSection";
import { StaggeredImageGrid } from "@/components/StaggeredImageGrid";
import React from "react";

// First, let's define proper types for our data structures
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  image: string;
  rating: number;
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-background via-background to-tertiary/30">
      <main className="space-y-32">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative px-4 sm:px-6 min-h-[90vh] flex flex-col items-center justify-center hero-section"
          role="banner"
          aria-label="Welcome section"
        >
          {/* Full-screen background image */}
          <motion.div 
            className="absolute inset-0 bg-[url('/images/wellness2.jpg')] bg-cover bg-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            aria-hidden="true"
          />
          
          {/* Single subtle overlay for text readability */}
          <div 
            className="absolute inset-0 bg-black/10" 
            aria-hidden="true" 
          />
          
          <div className="max-w-3xl w-full mx-auto text-center relative z-10">
            {/* Main heading with improved contrast */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal mb-8 leading-tight tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="sr-only">Elevate Your Wellbeing to New Heights</span>
              <span aria-hidden="true">
                Elevate Your{" "}
                <motion.span 
                  className="text-white inline-block"
                  animate={{
                    opacity: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Wellbeing
                </motion.span>{" "}
                to
                <br />
                <motion.span 
                  className="text-white inline-block"
                  animate={{
                    opacity: [0.9, 1, 0.9],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                  }}
                >
                  New Heights
                </motion.span>
              </span>
            </motion.h1>
            
            {/* Enhanced CTA section with better contrast */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link 
                href="/contact" 
                className="btn-primary w-full sm:w-auto text-center group relative overflow-hidden"
                aria-label="Begin your wellness journey"
              >
                <motion.span
                  className="absolute inset-0 bg-white/10"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  aria-hidden="true"
                />
                <span className="relative text-xl">
                  Begin Your Journey
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">→</span>
                </span>
              </Link>
              <Link 
                href="/services" 
                className="btn-secondary w-full sm:w-auto text-center text-xl"
                aria-label="Explore our wellness services"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Enhanced scroll indicator */}
          <motion.div 
            className="absolute bottom-8 flex flex-col items-center gap-2"
            animate={{
              y: [0, 10, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          >
            <span className="text-base text-white/90 font-medium">Scroll to explore</span>
            <svg 
              className="w-6 h-6 text-white" 
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
        </motion.section>

        {/* Services Section - Adjusted padding */}
        <section className="px-4 sm:px-6">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">Transformative Services</h2>
            <p className="text-foreground/70">
              Comprehensive wellness programs designed to address every aspect of your health journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {serviceCards.map((service) => (
              <ServiceCard key={service.title} service={service} className="glass-card hover-card" />
            ))}
          </div>
        </section>

        {/* Floating Images Section - Full width */}
        <ParallaxImageSection />

        {/* Wellness Journey Section - Full width */}
        <motion.section
          style={{
            scale: useTransform(springScroll, [0, 1], [0.8, 1]),
            opacity: useTransform(springScroll, [0, 0.2], [0.5, 1])
          }}
          className="px-4 sm:px-6 relative overflow-hidden"
        >
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">Your Wellness Journey</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Every step of your transformation is supported with proven methods and personalized attention
            </p>
          </motion.div>
          
          <StaggeredImageGrid />
        </motion.section>

        {/* Testimonials Section - Adjusted width */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="px-4 sm:px-6"
        >
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">Client Success Stories</h2>
            <p className="text-foreground/70">
              Real transformations from people just like you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {testimonials.slice(0, 6).map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </motion.section>

        {/* CTA Section - Full width with contained content */}
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
            {/* Add spotlight effect */}
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
            <h2 className="text-3xl sm:text-4xl font-serif mb-6">
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
      </main>
    </div>
  );
}

const serviceCards = [
  {
    title: "1:1 Coaching",
    description: "Personalized wellness coaching sessions tailored to your unique needs and goals.",
    icon: Icons.Person(),
    link: "/services#coaching"
  },
  {
    title: "Nutrition Planning",
    description: "Custom meal plans and nutritional guidance to fuel your body and mind.",
    icon: Icons.Nutrition(),
    link: "/services#nutrition"
  },
  {
    title: "Meditation & Mindfulness",
    description: "Guided meditation sessions and mindfulness practices to reduce stress and improve mental clarity.",
    icon: Icons.Meditation(),
    link: "/services#meditation"
  },
  {
    title: "Fitness Training",
    description: "Personalized workout programs combining strength, flexibility, and cardio for optimal results.",
    icon: Icons.Fitness(),
    link: "/services#fitness"
  },
  {
    title: "Lifestyle Design",
    description: "Comprehensive lifestyle assessment and optimization for better work-life balance and overall wellbeing.",
    icon: Icons.Lifestyle(),
    link: "/services#lifestyle"
  },
  {
    title: "Group Programs",
    description: "Join our supportive community in group wellness programs and workshops for shared growth and motivation.",
    icon: Icons.Group(),
    link: "/services#group"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Manhattan, NYC",
    quote: "Working with Miriam transformed not just my physical health, but my entire approach to wellness. I've lost 20 pounds and gained incredible energy!",
    image: "/images/testimonials/sarah.jpg",
    rating: 5
  },
  {
    name: "Michael Chen",
    location: "Brooklyn, NY",
    quote: "The personalized nutrition plan and meditation techniques have helped me manage my stress levels and improve my sleep quality dramatically.",
    image: "/images/testimonials/michael.jpg",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    location: "Queens, NY",
    quote: "Group sessions provided the perfect balance of personal attention and community support. I've made lifelong friends here!",
    image: "/images/testimonials/emma.jpg",
    rating: 5
  },
  {
    name: "David Thompson",
    location: "Jersey City, NJ",
    quote: "As a busy executive, the lifestyle design program helped me find balance without sacrificing my career goals.",
    image: "/images/testimonials/david.jpg",
    rating: 5
  },
  {
    name: "Jennifer Wu",
    location: "Manhattan, NYC",
    quote: "The holistic approach to wellness has helped me overcome chronic fatigue and rediscover my passion for life.",
    image: "/images/testimonials/jennifer.jpg",
    rating: 5
  },
  {
    name: "Rachel Greene",
    location: "Upper East Side, NYC",
    quote: "Miriam's meditation techniques have been life-changing. I'm more focused and peaceful than ever before.",
    image: "/images/testimonials/rachel.jpg",
    rating: 5
  }
];

// Animation variants for Framer Motion
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Update the service card component with simpler animations:
function ServiceCard({ service, className }: { service: Service; className?: string }) {
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
      className={`card group hover:bg-white/80 ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="mb-6 text-accent group-hover:scale-110 transition-transform">
        {service.icon}
      </div>
      <h3 className="text-2xl font-serif mb-3 text-foreground/80 group-hover:text-accent transition-all duration-500">
        {service.title}
      </h3>
      <p className="text-foreground/70 mb-6 transition-colors duration-500 group-hover:text-accent/80">
        {service.description}
      </p>
      <Link href={service.link} className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
        Learn More <span className="ml-2">→</span>
      </Link>
    </motion.div>
  );
}

// Update the testimonial card component:
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
      className="bg-white p-8 shadow-luxury"
    >
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={60}
          height={60}
          className=""
        />
        <div>
          <h4 className="font-serif">{testimonial.name}</h4>
          <p className="text-sm text-foreground/60">{testimonial.location}</p>
        </div>
      </div>
      <p className="text-foreground/80">{testimonial.quote}</p>
    </motion.div>
  );
}
