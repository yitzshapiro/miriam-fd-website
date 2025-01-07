import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-geist-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <section className="text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Holistic Health & Wellness Coach in NYC: Elevate Your Mind, Body & Spirit
          </h1>
          <p className="text-lg mb-6">
            Discover a luxurious approach to holistic health and wellness coaching in New York City—offering both in-person and online sessions.
          </p>
          <Link
            href="/contact"
            className="bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
          >
            Book Your Personalized Consultation
          </Link>
        </section>

        <section className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Experience Transformational Health & Wellness Coaching—In NYC and Online</h2>
          <p className="mb-6">
            Luxury, integrative coaching for driven individuals seeking optimal well-being.
          </p>
          <p className="mb-6">
            Welcome to the home of transformative well-being. I’m Miriam Fuentecilla Diaz, a certified holistic health and wellness coach committed to helping you experience profound positive change in mind, body, and spirit. Whether you’re an on-the-go professional in Manhattan or prefer online sessions from anywhere, my bespoke coaching style fuses evidence-based nutrition, mindfulness, and lifestyle medicine to elevate your life to new levels of vitality and fulfillment.
          </p>
          <Link href="/services" className="text-blue-500 underline">
            Begin Your Transformation
          </Link>
        </section>

        <section className="w-full max-w-4xl">
          <h3 className="text-xl font-semibold mb-4">Why Choose Miriam Fuentecilla Diaz as Your Health & Wellness Coach?</h3>
          <ol className="list-decimal list-inside mb-6">
            <li className="mb-2">Bespoke Coaching Plans – Each program is carefully crafted to address your unique goals and lifestyle.</li>
            <li className="mb-2">Holistic Focus – Nutrition, mindset, emotional well-being, and lifestyle medicine all under one roof.</li>
            <li className="mb-2">NYC & Online Presence – Get the same premium experience whether you visit my Manhattan office or connect virtually.</li>
            <li>Results-Oriented – Grounded in the latest scientific research, ensuring your plan is both effective and sustainable.</li>
          </ol>
          <Link href="/services" className="text-blue-500 underline">
            View All Services
          </Link>
        </section>

        <section className="w-full max-w-4xl">
          <h3 className="text-xl font-semibold mb-4">Stories of Transformation</h3>
          <blockquote className="mb-4">
            “Working with Miriam was the best investment I’ve ever made for my health—online sessions fit my demanding schedule perfectly!”
            <footer className="mt-2">— Sarah A., Manhattan</footer>
          </blockquote>
          <blockquote className="mb-4">
            “She helped me identify the root causes of my stress and gave me the tools to live better, no matter where I am.”
            <footer className="mt-2">— Jason M., Brooklyn</footer>
          </blockquote>
          <Link href="/testimonials" className="text-blue-500 underline">
            Read More Success Stories
          </Link>
        </section>

        <section className="w-full max-w-4xl">
          <h3 className="text-xl font-semibold mb-4">Stay Informed & Inspired</h3>
          <ul className="list-disc list-inside mb-6">
            <li>
              <Link href="/blog/how-to-maintain-mindful-eating" className="text-blue-500 underline">
                Navigating NYC’s Fast-Paced Lifestyle with Mindful Eating
              </Link>
            </li>
            <li>
              <Link href="/blog/habits-of-successful-health-conscious-professionals" className="text-blue-500 underline">
                5 Habits of Highly Successful Health-Conscious New Yorkers
              </Link>
            </li>
          </ul>
          <Link href="/blog" className="text-blue-500 underline">
            Visit the Blog
          </Link>
        </section>

        <section className="w-full max-w-4xl text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Ready to Feel Your Best—Every Single Day?</h3>
          <p className="mb-4">
            Start Your Journey with a Complimentary 30-Minute Consultation (In-Person or Online)
          </p>
          <Link
            href="/contact"
            className="bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
          >
            Schedule Now
          </Link>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
