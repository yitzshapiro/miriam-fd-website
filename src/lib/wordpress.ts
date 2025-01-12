const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://localhost:8080/wp-json/wp/v2';

type WordPressPost = {
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: {
        sizes: {
          full: { source_url: string };
          medium: { source_url: string };
          thumbnail: { source_url: string };
        };
      };
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: 'category' | 'post_tag';
    }>>;
  };
  acf: {
    key_takeaways?: string;
  };
};

export async function fetchPosts(filters?: { category?: string; tag?: string }) {
  let url = `${WP_API_URL}/posts?_embed`;
  
  if (filters?.category) {
    url += `&categories_slug=${encodeURIComponent(filters.category)}`;
  }
  if (filters?.tag) {
    url += `&tags_slug=${encodeURIComponent(filters.tag)}`;
  }
  
  const res = await fetch(url);
  const data = await res.json();
  
  // Ensure we're working with valid posts
  if (!data || (Array.isArray(data) && data.length === 0)) {
    return [];
  }
  
  const posts: WordPressPost[] = Array.isArray(data) ? data : [data];
  
  return posts.filter(post => post && post.title?.rendered).map((post) => ({
    slug: post.slug,
    title: decodeEntities(post.title.rendered),
    excerpt: formatExcerpt(post.excerpt.rendered),
    content: post.content.rendered,
    featuredImage: post._embedded?.['wp:featuredmedia']?.[0] ? {
      url: post._embedded['wp:featuredmedia'][0].source_url,
      alt: post._embedded['wp:featuredmedia'][0].alt_text,
      thumbnail: post._embedded['wp:featuredmedia'][0].media_details?.sizes.thumbnail.source_url,
      medium: post._embedded['wp:featuredmedia'][0].media_details?.sizes.medium.source_url,
    } : null,
    categories: post._embedded?.['wp:term']?.[0]
      ?.filter(term => term.taxonomy === 'category')
      .map(category => category.name) || [],
    tags: post._embedded?.['wp:term']?.[1]
      ?.filter(term => term.taxonomy === 'post_tag')
      .map(tag => tag.name) || [],
    keyTakeaways: post.acf?.key_takeaways 
      ? post.acf.key_takeaways.split('\n').filter(line => line.trim())
      : []
  }));
}

// Helper function to decode HTML entities
function decodeEntities(text: string): string {
    return text
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&#8217;/g, "'")
      .replace(/&#8216;/g, "'");
  }

// Helper function to format excerpts
function formatExcerpt(html: string): string {
  return decodeEntities(html)
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .replace(/\[&hellip;\]/g, '...') // Replace WordPress ellipsis
    .replace(/\[\.\.\.\]/g, '...') // Replace square bracket ellipsis
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}

export async function fetchPostBySlug(slug: string) {
  const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed&acf`);
  const posts: WordPressPost[] = await res.json();
  
  if (!posts.length) return null;
  
  const post = posts[0];
  
  return {
    slug: post.slug,
    title: decodeEntities(post.title.rendered),
    excerpt: formatExcerpt(post.excerpt.rendered),
    content: post.content.rendered,
    featuredImage: post._embedded?.['wp:featuredmedia']?.[0] ? {
      url: post._embedded['wp:featuredmedia'][0].source_url,
      alt: post._embedded['wp:featuredmedia'][0].alt_text,
      thumbnail: post._embedded['wp:featuredmedia'][0].media_details?.sizes.thumbnail.source_url,
      medium: post._embedded['wp:featuredmedia'][0].media_details?.sizes.medium.source_url,
    } : null,
    categories: post._embedded?.['wp:term']?.[0]
      ?.filter(term => term.taxonomy === 'category')
      .map(category => category.name) || [],
    tags: post._embedded?.['wp:term']?.[1]
      ?.filter(term => term.taxonomy === 'post_tag')
      .map(tag => tag.name) || [],
    keyTakeaways: post.acf?.key_takeaways 
      ? post.acf.key_takeaways.split('\n').filter(line => line.trim())
      : []
  };
} 