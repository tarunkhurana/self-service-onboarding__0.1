`/**
 * Self Service Onboarding
 * Description: Self-service technical onboarding across OSTTRA and third-party services.
 *
 * Copyright (c) ${new Date().getFullYear()} Nagarro
 * Author: Tarun Khurana
 *
 * This file is part of the Self Service Onboarding.
 * Unauthorized copying, distribution, or modification of this file is strictly prohibited.
 */`

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      "import.meta.env.API_URL": JSON.stringify(env.API_URL),
    },
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "src"),
      },
    },
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: env.API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    build: {
      outDir: "build",
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          assetFileNames: "[name]-[hash].[ext]",
          entryFileNames: "[name]-[hash].js",
          chunkFileNames: "[name]-[hash].js"
        }
      }
    },
  };
});


