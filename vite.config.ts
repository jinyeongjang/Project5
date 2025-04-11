import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 70,
        progressive: true,
      },
      jpeg: {
        quality: 70,
        progressive: true,
      },
      jpg: {
        quality: 70,
        progressive: true,
      },
      webp: {
        lossless: true,
        quality: 70,
      },
    }),
  ],
  resolve: {
    alias: {
      'swiper/swiper-bundle.css': 'swiper/swiper-bundle.css',
      'swiper/css': 'swiper/css/swiper.min.css',
      'swiper/css/navigation': 'swiper/css/navigation.min.css',
      'swiper/css/pagination': 'swiper/css/pagination.min.css',
      'swiper/css/effect-fade': 'swiper/css/effect-fade.min.css',
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'react-icons': ['react-icons'],
          swiper: ['swiper'],
        },
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const info = assetInfo.name.split('.');
          let extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } else if (/woff|woff2/.test(extType)) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'swiper', 'framer-motion', 'react-icons'],
  },
  server: {
    hmr: {
      overlay: false, // HMR 오버레이를 비활성화하여 메모리 사용량 감소
    },
    watch: {
      usePolling: false, // 파일 시스템 이벤트 사용
    },
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});
