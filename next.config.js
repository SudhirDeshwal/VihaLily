/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // REMOVE: output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;

