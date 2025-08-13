/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  transpilePackages: ['@react-three/fiber', '@react-three/drei', '@react-three/rapier'],
  webpack: (config, { isServer }) => {
    // Handle Three.js and related packages
    config.externals = config.externals || [];
    config.externals.push({
      canvas: 'canvas',
    });
    
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    
    return config;
  },
}

module.exports = nextConfig