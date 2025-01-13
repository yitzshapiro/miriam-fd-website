'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
  image: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jennifer S.",
      role: "Entrepreneur",
      location: "Manhattan",
      quote: "Between in-person sessions and flexible online check-ins, I never missed a beat in my wellness journey. I feel more focused, energized, and confident.",
      image: "/images/testimonials/jennifer.jpg",
      rating: 5
    },
    {
      name: "Michael S.",
      role: "Creative Director",
      location: "Brooklyn",
      quote: "Working with Miriam online was a game-changer. Her practical meal plans and mindfulness exercises fit seamlessly into my hectic schedule.",
      image: "/images/testimonials/michael.jpg",
      rating: 5
    },
    {
      name: "Sarah M.",
      role: "New Mother",
      location: "Queens",
      quote: "Miriam guided me through a postpartum plan entirely over Zoom. She's the reason I feel strong and balanced today!",
      image: "/images/testimonials/sarah.jpg",
      rating: 5
    },
    // ... add more testimonials to match the homepage style
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-tertiary/30">
      <main className="max-w-7xl mx-auto space-y-24 px-4 py-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center max-w-4xl mx-auto pt-24 pb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-serif mb-6">
            Real <span className="gradient-text">Success</span> Stories
          </h1>
          <p className="text-lg text-foreground/70 mb-12">
            Discover how our holistic approach to wellness has transformed lives across NYC and beyond
          </p>
        </motion.section>

        {/* Testimonials Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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
            <h2 className="text-3xl sm:text-4xl font-serif mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg mb-8 text-foreground/80">
              Join our community of transformed lives and begin your wellness journey today
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Schedule Your Free Consultation
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
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
      className="bg-white p-8 shadow-luxury"
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
          <p className="text-sm text-foreground/60">{testimonial.role} • {testimonial.location}</p>
        </div>
      </div>
      <p className="text-foreground/80 italic">{testimonial.quote}</p>
    </motion.div>
  );
} 