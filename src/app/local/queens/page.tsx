import Link from "next/link";

export default function Queens() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-geist-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Transformative Health & Wellness Coaching in Queens—Now Online Too</h1>
        <p className="mb-6">
          Elevate your life with a certified health & wellness coach in Queens. Miriam offers both in-person and online coaching to fit your lifestyle.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Empowering Queens Residents to Live Healthier—in Person or Virtually</h2>
          <p className="mb-4">
            Queens’ cultural richness demands a customizable wellness approach. My in-person coaching sessions focus on immediate connection and accountability, while my online programs offer the ultimate flexibility. Regardless of which format you choose, you’ll have full access to personalized meal plans, mindfulness training, and ongoing support.
          </p>
          <Link href="/contact" className="bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
            Schedule Your Queens or Online Consultation
          </Link>
        </section>
      </main>
    </div>
  );
} 