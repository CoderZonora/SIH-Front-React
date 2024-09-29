import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { readFileSync } from "fs";

const manifest = JSON.parse(
  readFileSync(path.resolve(__dirname, "public/manifest.json"), "utf-8")
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({ manifest })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
