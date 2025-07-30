import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/' : './',
  server: {
    port: 1337,
    host: true,
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  optimizeDeps: {
    include: [
      'three',
      '@react-three/fiber',
      '@shadergradient/react'
    ]
  },
  define: {
    __DEV__: false,
  },
}));
