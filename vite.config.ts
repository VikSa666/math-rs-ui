import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), // This plugin is needed in order to enable compatibility with wasm (not by default)
    wasm(),
    // Needed because it must wait `wasm` to be loaded first, therefore it must await. Visit https://www.npmjs.com/package/vite-plugin-wasm
    topLevelAwait(),
  ],
  server: {
    fs: {
      strict: false,
    },
  },
});
