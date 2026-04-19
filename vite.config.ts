import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig({
  base: './',
  plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          services: path.resolve(__dirname, 'services.html'),
          portfolio: path.resolve(__dirname, 'portfolio.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          blogPost: path.resolve(__dirname, 'blog-post.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          clientPortal: path.resolve(__dirname, 'client-portal.html'),
          packages: path.resolve(__dirname, 'packages.html'),
          site: path.resolve(__dirname, 'site.html'),
      },
    },
  },
});
