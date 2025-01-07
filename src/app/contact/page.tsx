import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-geist-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact Miriam—Start Your Holistic Health & Wellness Journey</h1>
        <p className="mb-6">
          Reach out to Miriam Fuentecilla Diaz for premium health & wellness coaching. Book an in-person or online consultation and get started today.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch—In Person or Online</h2>
          <p className="mb-6">
            Whether you’re based in NYC or anywhere around the globe, let’s connect. Complete the form below or reach me by phone or email. We’ll explore your unique needs and design a plan that truly resonates with your goals.
          </p>

          <div className="mb-6">
            <p><strong>Phone:</strong> (212) 123-4567</p>
            <p><strong>Email:</strong> info@miriamdiazhealthcoach.com</p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input type="text" id="name" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded" required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded" required />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="mt-1 p-2 w-full border border-gray-300 rounded" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message/Goals</label>
              <textarea id="message" name="message" rows={4} className="mt-1 p-2 w-full border border-gray-300 rounded" required></textarea>
            </div>

            <button type="submit" className="bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
              Submit
            </button>
          </form>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Office Location & Virtual Sessions</h2>
          <ul className="list-disc list-inside">
            <li>Manhattan Office: 123 Wellness Ave., Suite 456, New York, NY 10001</li>
            <li>Hours: Monday – Friday, 9 AM – 6 PM (Evening/Weekend slots available upon request)</li>
            <li>Online Availability: Virtual sessions conducted via Zoom or preferred platform</li>
          </ul>
        </section>
      </main>
    </div>
  );
} 