/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com', 'images.pexels.com', 'tse4.mm.bing.net']
  },
};

module.exports = nextConfig;
