import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-tertiary border-t border-foreground/5">
      <div className="max-w-4xl mx-auto space-y-8 py-12 px-6">
        <nav className="flex flex-wrap gap-6 justify-center">
          <Link href="/" className="text-foreground/80 hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-foreground/80 hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/services" className="text-foreground/80 hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="/blog" className="text-foreground/80 hover:text-accent transition-colors">
            Blog
          </Link>
          <Link href="/testimonials" className="text-foreground/80 hover:text-accent transition-colors">
            Testimonials
          </Link>
          <Link href="/contact" className="text-foreground/80 hover:text-accent transition-colors">
            Contact
          </Link>
          <Link href="/local" className="text-foreground/80 hover:text-accent transition-colors">
            Local Pages
          </Link>
          <Link href="/privacy-policy" className="text-foreground/80 hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-foreground/80 hover:text-accent transition-colors">
            Terms of Service
          </Link>
        </nav>

        <div className="flex justify-center space-x-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            Facebook
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div className="space-y-4 text-center">
          <p className="text-foreground/70">
            © 2025 Miriam Fuentecilla Diaz. All Rights Reserved.
          </p>

          <p className="text-sm text-foreground/60 max-w-2xl mx-auto">
            Information on this site is not intended to diagnose, treat, cure, or prevent any disease. Always consult your healthcare provider before making any health-related decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
