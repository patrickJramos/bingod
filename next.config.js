const { config } = require('process');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  }
};


