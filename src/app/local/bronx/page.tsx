import Link from "next/link";

export default function Bronx() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-geist-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Holistic Health & Wellness Coaching in the Bronx & Online</h1>
        <p className="mb-6">
          Searching for a health & wellness coach in the Bronx? Miriam provides integrative, personalized programs both locally and online.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Creating Sustainable Change for Bronx Residents, In-Person or Online</h2>
          <p className="mb-4">
            Your well-being shouldn’t be limited by geography. Whether you’re based in the Bronx or living elsewhere, my holistic coaching programs are designed to guide you toward balanced nutrition, improved mental health, and consistent daily habits. Join me in-person or conveniently online as we cultivate a healthier lifestyle.
          </p>
          <Link href="/contact" className="bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
            Book Your Bronx or Online Wellness Session
          </Link>
        </section>
      </main>
    </div>
  );
} 