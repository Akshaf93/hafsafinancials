/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Enable AVIF for smaller, faster images
  images: {
    formats: ['image/avif', 'image/webp'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
    // 2. Aggressive caching for images (1 day)
    minimumCacheTTL: 86400,
  },
  // 3. Tree-shake heavy libraries used in Client Components
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

module.exports = nextConfig