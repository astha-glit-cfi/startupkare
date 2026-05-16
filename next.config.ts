import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Turbopack error fix karne ke liye
  turbopack: {}, 

  experimental: {
    serverActions: {
      allowedOrigins: ["192.168.1.9:3000", "localhost:3000"],
    },
  },
  
  // 2. Webpack logic (WebSocket fix ke liye zaroori hai)
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;  