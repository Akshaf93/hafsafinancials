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
    ],
    // 2. Aggressive caching for images
    minimumCacheTTL: 60,
  },
  // 3. Tree-shake heavy libraries used in Client Components
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'date-fns'],
  },
}

module.exports = nextConfig