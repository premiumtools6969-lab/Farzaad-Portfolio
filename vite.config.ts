import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
    dedupe: ["react", "react-dom", "@tanstack/react-router"],
  },
  build: {
    sourcemap: false,
  },
  plugins: [
    tailwindcss(),
    tanstackStart(),
    nitro({
      // Vercel supplies VERCEL=1 during its builds. Local builds produce
      // a standalone Node server for `npm run preview`.
      preset:
        process.env["NITRO_PRESET"] ??
        (process.env["VERCEL"] ? "vercel" : "node-server"),
    }),
    react(),
  ],
});
