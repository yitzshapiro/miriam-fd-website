import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    // Add your production domain when deploying
  },
  async rewrites() {
    return [
      {
        source: '/wp-admin',
        destination: 'http://localhost:8080/wp-admin'
      },
      {
        source: '/wp-admin/:path*',
        destination: 'http://localhost:8080/wp-admin/:path*'
      },
      {
        source: '/wp-login.php',
        destination: 'http://localhost:8080/wp-login.php'
      }
    ];
  }
};

export default nextConfig;
