import { resolve } from "node:path"
import { env } from "node:process"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project sites are hosted below /<repository>/.
  // User and organization sites (username.github.io) are hosted at /.
  base: env.GITHUB_ACTIONS
    ? env.GITHUB_REPOSITORY?.endsWith(".github.io")
      ? "/"
      : `/${env.GITHUB_REPOSITORY?.split("/")[1] ?? ""}/`
    : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    },
  },
})
