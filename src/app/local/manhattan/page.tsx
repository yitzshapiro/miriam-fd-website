import Link from "next/link";

export default function Manhattan() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-geist-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Luxury Health & Wellness Coach in Manhattan—In-Person & Online</h1>
        <p className="mb-6">
          Miriam Fuentecilla Diaz offers bespoke health & wellness coaching in Manhattan and online. Transform your well-being in NYC or from anywhere.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Elevate Your Manhattan Lifestyle with Holistic Health & Wellness</h2>
          <p className="mb-4">
            Manhattan’s nonstop energy demands an adaptable approach to personal well-being. Whether you prefer the ambiance of my upscale Manhattan office or want the convenience of virtual sessions, I tailor each aspect to fit your unique needs. Together, we’ll conquer stress, optimize nutrition, and build sustainable habits—all without missing a beat in your busy schedule.
          </p>
          <Link href="/contact" className="bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
            Book a Manhattan or Online Consultation
          </Link>
        </section>
      </main>
    </div>
  );
} 