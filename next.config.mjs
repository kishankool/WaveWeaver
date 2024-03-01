// next.config.mjs
import { join } from 'path';

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.mp3$/,
      type: 'asset/resource',
      generator: {
        filename: 'assets/audio/[name][ext]'
      }
    });
    return config;
  }
};

export default nextConfig;
