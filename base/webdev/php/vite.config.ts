/**
 * Vite configuration with Vue.
 *
 * @author Kimmo Salmela <kimmo.salmela@reun.eu>
 * @copyright 2021 Reun Media
 *
 * @see https://github.com/Reun-Media/project-templates/blob/master/base/webdev/php/vite.config.ts
 *
 * @version 1.0.0
 */

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import liveReload from "vite-plugin-live-reload";

export default defineConfig({
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src-www/js"),
    },
  },
  build: {
    manifest: true,
    outDir: "www",
    assetsDir: "static/dist",
    emptyOutDir: false,
    rollupOptions: {
      input: "src-www/main.ts",
    },
  },
  server: {
    host: true,
    port: 5173,
  },
  plugins: [vue(), liveReload(["./src/**/.(php|twig)"])],
});
