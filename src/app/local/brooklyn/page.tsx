import Link from "next/link";

export default function Brooklyn() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-geist-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Holistic Health & Wellness Coach in Brooklyn—Local & Virtual Programs</h1>
        <p className="mb-6">
          Looking for a health & wellness coach in Brooklyn? Miriam offers holistic, online-friendly coaching designed for creatives, professionals, and families.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dynamic, Holistic Health for Brooklyn and Beyond</h2>
          <p className="mb-4">
            Brooklyn’s eclectic vibe is the perfect backdrop for a wellness journey that bridges creativity and practicality. Choose in-person appointments for an immersive experience or opt for online coaching that brings holistic transformation right to your living room. Let’s tap into the borough’s diversity to inspire a healthier, more balanced life.
          </p>
          <Link href="/contact" className="bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
            Reserve Your Brooklyn or Online Session
          </Link>
        </section>
      </main>
    </div>
  );
} 