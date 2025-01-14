import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#c8a087]/10 border-t border-foreground/5">
      <div className="max-w-6xl mx-auto py-16 px-6">
        {/* Top Section with Logo and Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/logo.svg" 
                alt="Miriam Fuentecilla Diaz" 
                width={120} 
                height={40}
                className="dark"
              />
            </Link>
            <p className="text-foreground/60 text-sm max-w-xs">
              Empowering NYC professionals to achieve holistic wellness through mindful living and sustainable health practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div className="space-y-4">
              <h3 className="font-serif text-lg text-foreground/80">Navigation</h3>
              <nav className="flex flex-col space-y-3">
                {['Home', 'About', 'Services', 'Blog', 'Contact'].map(item => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase()}`} 
                    className="text-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-lg text-foreground/80">Legal</h3>
              <nav className="flex flex-col space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Local'].map(item => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-foreground/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Miriam Fuentecilla Diaz. All Rights Reserved.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6">
              {[
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Linkedin, href: "https://linkedin.com" }
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  <Icon size={20} />
                  <span className="sr-only">Social Media Link</span>
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-foreground/50 text-center mt-8 max-w-3xl mx-auto">
            Information on this site is not intended to diagnose, treat, cure, or prevent any disease. Always consult your healthcare provider before making any health-related decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
