import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target:
          "https://script.google.com/macros/s/AKfycby_DXTsX4yKiXn7V284t35MRI3rSnYqtk3EXEw5DaA4Op1OOze-pcxHac0ikd_Rm1Q/exec",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  base: "/sdsmerpati/",
});
