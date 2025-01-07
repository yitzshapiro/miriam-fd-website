import Link from "next/link";

export default function StatenIsland() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-geist-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Staten Island Health & Wellness Coach—Now Offering Online Sessions</h1>
        <p className="mb-6">
          Receive premium, tailored health & wellness coaching in Staten Island or online. Miriam’s integrative approach supports lasting transformation.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Luxury Wellness for Staten Island—Accessible Anywhere</h2>
          <p className="mb-4">
            Staten Island’s peaceful neighborhoods are ideal for implementing holistic health strategies, but you can also engage with me from anywhere via my online coaching platform. From nutrition plans to personalized stress management techniques, everything is designed to fit seamlessly into your life and empower you to thrive.
          </p>
          <Link href="/contact" className="bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
            Start Your Staten Island or Online Journey
          </Link>
        </section>
      </main>
    </div>
  );
} 