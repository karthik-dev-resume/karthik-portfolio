/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  swcMinify: true,
};

export default nextConfig;
