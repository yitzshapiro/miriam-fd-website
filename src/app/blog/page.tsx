import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-geist-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Holistic Health & Wellness Insights by Miriam—NYC & Online</h1>
        <p className="mb-6">
          Explore the latest tips, research, and inspiration on holistic health, wellness, and personal growth. Stay updated with Miriam’s blog.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Stay Inspired, Stay Informed—Wherever You Are</h2>
          <p className="mb-6">
            The world of holistic health and wellness constantly evolves. My blog aims to keep you at the forefront of new discoveries, timeless wisdom, and practical strategies. Expect in-depth articles on nutrition, mindset, and the holistic lifestyle—perfect for busy urban dwellers and remote workers alike.
          </p>

          <h3 className="text-xl font-semibold mb-4">Sample Blog Post Previews</h3>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              <Link href="/blog/how-to-maintain-mindful-eating" className="text-blue-500 underline">
                How to Maintain Mindful Eating in a Fast-Paced World
              </Link>
              <p className="ml-6">Excerpt: Learn how to balance healthy eating with a demanding schedule…</p>
            </li>
            <li className="mb-2">
              <Link href="/blog/habits-of-successful-health-conscious-professionals" className="text-blue-500 underline">
                Habits of Highly Successful, Health-Conscious Professionals
              </Link>
              <p className="ml-6">Excerpt: Discover daily routines that fuel productivity and well-being…</p>
            </li>
            <li>
              <Link href="/blog/the-power-of-virtual-coaching" className="text-blue-500 underline">
                The Power of Virtual Coaching: Taking Control of Your Health Anywhere
              </Link>
              <p className="ml-6">Excerpt: From flexible scheduling to personalized accountability, see how online coaching can transform your life…</p>
            </li>
          </ul>

          <Link href="/contact" className="bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
            Contact Me
          </Link>
        </section>
      </main>
    </div>
  );
}
