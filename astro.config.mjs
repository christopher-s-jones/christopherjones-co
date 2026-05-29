import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://christopherjones.co',
  integrations: [react()],
  // Fixes issue with older version of react-dom/client being implicitly used
  // that caused an error in finding the createRoot export
  vite: {
    optimizeDeps: {
      include: ['react-dom/client', 'react-dom', 'react'],
    },
  },
});