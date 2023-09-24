import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), wasm(), topLevelAwait()],
  resolve: {
    alias: {
      'math-rs': 'math-rs', // Adjust the path as needed
    },
  },
  server: {
    // ...
    // Add this MIME type configuration
    proxy: {
      '/': {
        target: 'http://127.0.0.1:8080', // Replace with your dev server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/wasm', // Set the MIME type for Wasm files
        },
      },
    },
  },
})
