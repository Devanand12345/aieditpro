import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ⚡ Performance Optimizations
  compress: true,
  poweredByHeader: false,

  // 🚀 Turbopack Configuration (Next.js 16+) - Disabled for stability
  // turbopack: {},

  // 📦 Bundle Optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: { minChunks: 2, priority: -20, reuseExistingChunk: true },
          vendor: { test: /[\\/]node_modules[\\/]/, name: 'vendors', priority: -10, chunks: 'all' },
        },
      };
    }
    return config;
  },

  // 🖼️ Image Optimization (if using images)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 📊 Analytics & Performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react', 'react-dom'],
  },
};

export default nextConfig;
