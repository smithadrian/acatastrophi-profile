// vite.config.ts

//uses npm vite-tsconfig-paths to align bare module behavior to TS
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [tsconfigPaths()],
  // mode: "production",
  base: "/",
  build: {
    outDir: "build",
  },
  // server: {
  //   host: "localhost",
  //   port: 3000,
  //   strictPort: true,
  // },
  server: {
    host: "bs-local.com",
    port: 3000,
    strictPort: true,
  },
})
