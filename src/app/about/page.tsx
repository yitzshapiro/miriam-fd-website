import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-geist-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Meet Miriam: Your NYC & Online Holistic Health & Wellness Coach</h1>
        <p className="mb-6">
          Discover the story of Miriam Fuentecilla Diaz, a certified holistic health & wellness coach offering in-person and online sessions for clients worldwide.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">From Passion to Profession: My Journey to Holistic Wellness</h2>
          <p className="mb-4">
            My fascination with the interplay between nutrition, movement, and mindset began early in life. This passion led me to complete rigorous training in integrative nutrition, functional medicine, and mindfulness-based practices. Today, my mission is to empower individuals—no matter their location—to create sustainable lifestyle changes that unlock unprecedented levels of health and happiness.
          </p>
          <p>
            Over the years, I’ve guided CEOs, entrepreneurs, artists, and parents across diverse continents and time zones, tailoring my programs for both in-person and online experiences. I’m inspired by every transformation story and look forward to helping you craft yours.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">A Tailored Method That Honors Your Individuality</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Holistic Nutrition: Customized meal planning and guidance to meet your body’s needs and preferences.</li>
            <li>Lifestyle Medicine: Strategies to enhance sleep, reduce stress, and improve daily routines.</li>
            <li>Mindset & Emotional Well-being: Practical tools to cultivate mental resilience and positivity.</li>
            <li>Continuous Support: Weekly or bi-weekly check-ins, progress tracking, and real-time support, wherever you are.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Key Values:</h3>
          <ol className="list-decimal list-inside mb-4">
            <li>Personalization – Every body, mind, and situation is different.</li>
            <li>Sustainability – Small, consistent changes lead to lasting transformation.</li>
            <li>Empathy – My coaching style is rooted in compassion and respect.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Expertise You Can Trust</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Certified Holistic Health Coach (Institute for Integrative Nutrition)</li>
            <li>Bachelor’s in Nutritional Sciences</li>
            <li>Yoga & Mindfulness Certification</li>
            <li>Continuing Education in Functional Medicine</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">A Coaching Relationship for the Modern Lifestyle</h2>
          <p className="mb-4">
            Whether you’re located in the heart of Manhattan or halfway across the globe, my upscale coaching services meet you where you are. Opt for private sessions in my exclusive Manhattan office or convenient virtual consultations for a flexible, discreet, and high-end experience. No detail is overlooked—from personalized action plans to around-the-clock guidance—so you can focus on thriving.
          </p>
          <Link href="/contact" className="bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
            Ready to Begin? Book Your Free Consultation
          </Link>
        </section>
      </main>
    </div>
  );
}
