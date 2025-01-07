import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-4">
        <nav className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:underline">
            About
          </Link>
          <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:underline">
            Services
          </Link>
          <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:underline">
            Blog
          </Link>
          <Link href="/testimonials" className="text-gray-700 dark:text-gray-300 hover:underline">
            Testimonials
          </Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:underline">
            Contact
          </Link>
          <Link href="/local-pages" className="text-gray-700 dark:text-gray-300 hover:underline">
            Local Pages
          </Link>
          <Link href="/privacy-policy" className="text-gray-700 dark:text-gray-300 hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-gray-700 dark:text-gray-300 hover:underline">
            Terms of Service
          </Link>
        </nav>

        <div className="flex justify-center space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Facebook
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            LinkedIn
          </a>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-400">
          © 2025 Miriam Fuentecilla Diaz. All Rights Reserved.
        </p>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Information on this site is not intended to diagnose, treat, cure, or prevent any disease. Always consult your healthcare provider before making any health-related decisions.
        </p>
      </div>
    </footer>
  );
}
