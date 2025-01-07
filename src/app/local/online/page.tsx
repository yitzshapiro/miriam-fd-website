import Link from "next/link";

export default function Online() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-geist-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Online Health & Wellness Coaching—Personalized for Busy Lives</h1>
        <p className="mb-6">
          Join Miriam Fuentecilla Diaz’s online coaching programs for a flexible, personalized approach to holistic health and wellness, no matter where you are.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience the Benefits of Holistic Coaching from the Comfort of Your Home</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Flexible Scheduling: Early morning or late evening sessions to accommodate your time zone.</li>
            <li>Customized Programs: Meal plans, mindfulness exercises, and lifestyle recommendations.</li>
            <li>Ongoing Support: Weekly check-ins via video calls, detailed progress tracking, and email/phone support.</li>
          </ul>
          <Link href="/contact" className="bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
            Begin Your Online Transformation
          </Link>
        </section>
      </main>
    </div>
  );
} 