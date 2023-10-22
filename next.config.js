/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
    serverActions: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  }
};


module.exports = nextConfig