import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  compressHTML: true,
  image: {
    remotePatterns: [{ protocol: 'https' }],
    service: passthroughImageService(),
  },
});
