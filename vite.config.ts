import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [react(), VitePWA()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
  },
});
