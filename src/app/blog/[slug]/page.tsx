export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-geist-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Blog Post Title</h1>
        <p className="mb-6">Excerpt or introduction to the blog post.</p>
        <article>
          <p>Full content of the blog post goes here.</p>
        </article>
      </main>
    </div>
  );
}
