'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md shadow-luxury border-b border-accent/5' 
            : 'bg-background'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-4"
            >
              <Link href="/" className="flex items-center group">
                <div className="relative">
                  <Image
                    src="/images/logo.png"
                    alt="Miriam Fuentecilla Diaz Logo"
                    width={42}
                    height={42}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute -inset-2.5 bg-accent/10 rounded-full -z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                </div>
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="ml-4 text-lg font-serif text-foreground hidden sm:block"
                >
                  Miriam Fuentecilla
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-accent transition-colors rounded-full hover:bg-accent/5"
                  >
                    {item.label}
                    <motion.div
                      className="absolute bottom-1.5 left-4 right-4 h-[2px] bg-accent origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="ml-2"
              >
                <Link
                  href="/contact"
                  className="btn-primary px-6 py-2.5 text-sm font-medium"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 hover:bg-accent/5 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Now outside the nav element */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-background z-[999]"
            >
              <div className="absolute inset-0 backdrop-blur-xl bg-background/98" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="relative z-[1000] flex flex-col justify-center items-center h-full px-6 py-4 space-y-6 pointer-events-none"
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 p-2.5 hover:bg-accent/5 rounded-full transition-colors pointer-events-auto"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </motion.button>

                <div className="pointer-events-auto">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: index * 0.1 } 
                      }}
                      exit={{ 
                        opacity: 0,
                        y: 20,
                        transition: { delay: index * 0.05 } 
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-lg font-medium text-foreground/80 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors text-center"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.6 } 
                    }}
                    exit={{ opacity: 0, y: 20 }}
                    className="pt-6 w-full flex justify-center"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="btn-primary px-8 py-3 text-base font-medium"
                    >
                      Book Now
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 