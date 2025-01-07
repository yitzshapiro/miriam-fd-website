'use client';

import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ParallaxImageSection } from "@/components/ParallaxImageSection";
import { StaggeredImageGrid } from "@/components/StaggeredImageGrid";
import React from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-background via-background to-tertiary/30">
      <main className="max-w-7xl mx-auto space-y-32">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative px-4 pt-40 pb-48 flex flex-col items-center"
        >
          {/* Background pattern - updated with leaves */}
          <div 
            className="absolute inset-0 bg-[url('/images/leaves-bg.jpg')] bg-cover opacity-20 bg-center"
            style={{ backgroundSize: 'cover' }}
          />
          
          {/* Optional overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
          
          <div className="max-w-3xl w-full mx-auto text-center relative">
            <motion.div 
              className="relative flex justify-center w-full mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                <Image
                  className="rounded-full shadow-2xl border-4 border-white/90"
                  src="/images/hero.jpg"
                  alt="Miriam Fuentecilla Diaz"
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl font-serif font-normal mb-8 leading-tight">
              Elevate Your <span className="gradient-text">Wellbeing</span> to
              <span className="gradient-text"> New Heights</span>
            </h1>
            
            {/* Enhanced CTA section */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-center group">
                Begin Your Journey
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
              <Link href="/services" className="btn-secondary w-full sm:w-auto text-center">
                Explore Services
              </Link>
            </div>
          </div>

          {/* Scroll Indicator - moved outside the max-w-3xl container */}
          <motion.div 
            className="absolute bottom-8 flex flex-col items-center gap-2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-sm text-foreground/60 font-medium">Scroll to explore</span>
            <svg 
              className="w-6 h-6 text-accent" 
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

        {/* Floating Images Section */}
        <ParallaxImageSection />

        {/* Services Section - Using useScroll */}
        <section className="px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">Transformative Services</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Comprehensive wellness programs designed to address every aspect of your health journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} className="glass-card hover-card" />
            ))}
          </div>
        </section>

        {/* Wellness Journey Section - Add parallax effect */}
        <motion.section
          style={{
            scale: useTransform(springScroll, [0, 1], [0.8, 1]),
            opacity: useTransform(springScroll, [0, 0.2], [0.5, 1])
          }}
          className="px-4 relative overflow-hidden"
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

        {/* Testimonials Section - Add 3D rotation effect */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="px-4"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">Client Success Stories</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Real transformations from people just like you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </motion.section>

        {/* CTA Section - Add spotlight effect */}
        <motion.section
          className="px-4 pb-32"
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

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Update the service card component with simpler animations:
function ServiceCard({ service, index, className }: { service: any; index: number; className?: string }) {
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
function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
      className="bg-white p-8 rounded-2xl shadow-luxury"
    >
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={60}
          height={60}
          className="rounded-full"
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
