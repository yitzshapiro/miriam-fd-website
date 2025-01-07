import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-geist-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Luxury Health & Wellness Coaching Services in NYC & Online</h1>
        <p className="mb-6">
          Discover premium health & wellness coaching services available in New York City or online. Achieve total well-being with Miriam Fuentecilla Diaz.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Holistic Health & Wellness Coaching</h2>
          <p className="mb-4">Your All-In-One Path to Lifelong Well-being</p>
          <ul className="list-disc list-inside mb-4">
            <li>Comprehensive Intake: A thorough assessment of health history, lifestyle, and personal aspirations.</li>
            <li>Customized Action Plan: Meal plans, mindfulness practices, stress management techniques, and more.</li>
            <li>Flexible Sessions: Choose in-person meetings at our Manhattan office or virtual calls from anywhere.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Relevant Keywords & Benefits:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Holistic health & wellness coach</li>
            <li>Personalized journey to better health</li>
            <li>Online and in-person coaching options</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nutrition Counseling</h2>
          <p className="mb-4">Science-Backed Meal Planning & Nutritional Guidance</p>
          <p className="mb-4">
            Develop a balanced and flavorful eating strategy aligned with your dietary preferences and hectic schedule. Receive easy-to-implement grocery lists, meal prep tips, and ongoing accountability—no matter where you live or travel.
          </p>
          <h3 className="text-xl font-semibold mb-2">Relevant Keywords & Benefits:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Online nutrition counseling</li>
            <li>Data-driven dietary recommendations</li>
            <li>Convenient for busy lifestyles</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Mindfulness & Stress Management</h2>
          <p className="mb-4">Enhance Emotional Resilience & Inner Calm</p>
          <p className="mb-4">
            Cultivate mindfulness and reduce stress using proven techniques such as meditation, breathwork, and visualization. The result? Improved mental clarity, enhanced focus, and a renewed sense of balance—even in the bustle of NYC or the demands of remote work.
          </p>
          <h3 className="text-xl font-semibold mb-2">Relevant Keywords & Benefits:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Mindfulness sessions NYC & online</li>
            <li>Practical stress relief methods</li>
            <li>Meditation coaching for professionals</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Corporate Wellness & Online Workshops</h2>
          <p className="mb-4">Wellness Solutions for Modern Organizations</p>
          <p className="mb-4">
            My programs can also be tailored to teams and companies seeking a healthier workforce. Whether your staff is on-site in NYC or distributed around the globe, I offer virtual workshops, group challenges, and one-on-one sessions to improve morale, productivity, and well-being.
          </p>
          <h3 className="text-xl font-semibold mb-2">Relevant Keywords & Benefits:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Corporate wellness NYC & online</li>
            <li>Team-building health initiatives</li>
            <li>Better employee engagement</li>
          </ul>
        </section>

        <section className="text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Invest in Your Well-being Today</h2>
          <p className="mb-4">
            Don’t wait for burnout—start your journey toward optimal health and wellness right now.
          </p>
          <Link href="/contact" className="bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
            Book Your Consultation
          </Link>
        </section>
      </main>
    </div>
  );
}
