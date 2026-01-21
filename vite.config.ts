import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // increasing chunk size limit to 1MB
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separates all third-party libraries into a "vendor" file
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
}));