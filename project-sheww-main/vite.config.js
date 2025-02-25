import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "./", // Ensure Vite looks in the root directory
  envPrefix: "APP_",
  plugins: [react()],
  build: {
    outDir: "dist", // Ensures output goes to the correct folder for Vercel
  },
});
