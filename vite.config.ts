import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // ── Output ─────────────────────────────────────────
    outDir: "dist",
    assetsDir: "assets",

    // Raise warning threshold (Three.js chunks are large by nature)
    chunkSizeWarningLimit: 1200,

    // ── CSS Code Splitting (improves LCP) ──────────────
    cssCodeSplit: true,

    // ── Source Maps (disabled for production = smaller bundles) ──
    sourcemap: false,

    // ── Minification ───────────────────────────────────
    minify: "esbuild",

    // ── Rollup Options ─────────────────────────────────
    rollupOptions: {
      output: {
        // Manual chunking strategy — split heavy 3rd-party libs
        // Critical for Core Web Vitals (reduces initial JS parse time)
        manualChunks: {
          // 3D rendering (largest chunk — deferred via lazy load)
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          rapier: ["@react-three/rapier"],
          postprocessing: ["@react-three/postprocessing"],

          // Animation library
          gsap: ["gsap", "@gsap/react"],

          // React core
          react: ["react", "react-dom"],

          // UI utilities
          vendor: ["react-icons", "react-fast-marquee"],
        },

        // Content-hash filenames for immutable caching (Core Web Vitals)
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },

  // ── Preview Server ──────────────────────────────────
  preview: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },

  // ── Server (dev) ────────────────────────────────────
  server: {
    host: true,
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
    },
  },
});
