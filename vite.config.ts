
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
  define: {
    // Make sure environment variables are properly replaced at build time
    'import.meta.env.VITE_CONTENTFUL_SPACE_ID': 
      JSON.stringify(process.env.VITE_CONTENTFUL_SPACE_ID || 'qz62f406e9mz'),
    'import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN': 
      JSON.stringify(process.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'BRPK9lPK68qkH-hZOKuzIEM2yAQN7HoVwfrgUL8h1dc'),
  },
}));
