# Miriam FD Website

A Next.js frontend with WordPress backend for a health and wellness coaching website.

## Prerequisites

- Node.js (v18 or later)
- Docker and Docker Compose
- pnpm (recommended) or npm

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd miriam-fd-website
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Set Up WordPress Backend

First, make the setup script executable:
```bash
chmod +x setup-wordpress.sh
```

Run the setup script to download required WordPress plugins:
```bash
./setup-wordpress.sh
```

Start the WordPress containers:
```bash
docker-compose up -d
```

### 4. Configure WordPress

Visit http://localhost:8080 and complete the WordPress installation:
- Set up your admin account
- Install and activate the plugins in wp-admin:
  - Advanced Custom Fields
  - ACF to REST API
  - JWT Authentication for WP REST API

### 5. Start the Frontend

```bash
pnpm dev
```

Visit http://localhost:3000 to see your site.

## Development

- Frontend: http://localhost:3000
- WordPress Admin: http://localhost:8080/wp-admin
- WordPress API: http://localhost:8080/wp-json/wp/v2

## Adding Blog Posts

1. Go to http://localhost:8080/wp-admin
2. Log in with your WordPress credentials
3. Click "Posts" → "Add New"
4. Write your content using the WordPress block editor (Gutenberg)
5. Add custom fields:
   - Key Takeaways: Add bullet points (one per line)
   - Post Tags: Add comma-separated tags
6. Publish when ready

### Content Guidelines

- Use WordPress's built-in formatting tools for content structure
- Images will be automatically styled with rounded corners and subtle shadows
- Code blocks will be styled with a light background
- Blockquotes will have a left border accent
- Lists will be styled with custom bullets
- Headers will use the Cormorant Garamond font

### Custom Fields

The following custom fields should be set up in WordPress:

- `key_takeaways` (Text Area)
  - One takeaway per line
  - Will be displayed in a highlighted section below the post
- `post_tags` (Text)
  - Comma-separated list of tags
  - Will be displayed as clickable tags below the post

## Project Structure

```
├── src/
│   ├── app/          # Next.js pages and components
│   ├── lib/          # Utilities and API functions
│   └── components/   # Reusable React components
├── wp-content/       # WordPress plugins and uploads
├── docker-compose.yml
├── setup-wordpress.sh
└── next.config.ts
```

## Environment Variables

Create a `.env.local` file:
```env
NEXT_PUBLIC_WORDPRESS_API_URL=http://localhost:8080/wp-json/wp/v2
```

## Production Deployment

For production:
1. Host WordPress on a subdomain (e.g., wp.yourdomain.com)
2. Update environment variables with production URLs
3. Deploy Next.js frontend to your preferred hosting platform

### Adding Images to Posts

1. **Featured Images**:
   - In the WordPress editor, look for the "Featured Image" panel on the right
   - Click "Set featured image"
   - Upload or select an image
   - Set alt text for accessibility
   - Click "Set featured image"

2. **In-Post Images**:
   - In the WordPress block editor, click the (+) button
   - Select "Image" block
   - Upload or select an image
   - Add alt text and caption if needed
   - Images will automatically be styled with your site's design

3. **Image Guidelines**:
   - Use high-quality images (minimum 1200px wide for featured images)
   - Always add alt text for accessibility
   - Consider image file size for performance (use .jpg for photos, .png for graphics)
   - Featured images should have a 16:9 or 3:2 aspect ratio
