import Link from "next/link";

export default function Testimonials() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-geist-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Real Success Stories: Holistic Health & Wellness Coaching Across NYC & Online</h1>
        <p className="mb-6">
          Hear real-life accounts of clients who have transformed their well-being with Miriam’s holistic health & wellness coaching—in-person and online.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Inspiring Journeys from Clients Everywhere</h2>
          <p className="mb-6">
            I’m honored to share the powerful transformations my clients have experienced, both face-to-face in New York and virtually worldwide. Each testimonial reflects the adaptability and depth of my holistic coaching approach.
          </p>

          <h3 className="text-xl font-semibold mb-4">Testimonial Examples</h3>
          <ol className="list-decimal list-inside mb-6">
            <li className="mb-4">
              <strong>Anna S. – Entrepreneur, Manhattan</strong>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                “Between in-person sessions and flexible online check-ins, I never missed a beat in my wellness journey. I feel more focused, energized, and confident.”
              </blockquote>
            </li>
            <li className="mb-4">
              <strong>Carlos M. – Creative Director, Brooklyn</strong>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                “Working with Miriam online was a game-changer. Her practical meal plans and mindfulness exercises fit seamlessly into my hectic schedule.”
              </blockquote>
            </li>
            <li className="mb-4">
              <strong>Jane L. – New Mother, Queens</strong>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                “Miriam guided me through a postpartum plan entirely over Zoom. She’s the reason I feel strong and balanced today!”
              </blockquote>
            </li>
          </ol>

          <Link href="/contact" className="bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
            Ready to Start Your Success Story? Book a Consultation
          </Link>
        </section>
      </main>
    </div>
  );
} 