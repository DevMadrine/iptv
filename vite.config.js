import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import hexColorTransform from "@lightningtv/vite-hex-transform";
import legacy from "@vitejs/plugin-legacy";
import path from "path";
import deviceConfigPlugin from "./devices/deviceConfigPlugin.js";

const envDir = "./environments";

export default defineConfig(({ _mode }) => {
  return {
    envDir,

    build: {
      target: "es2017",
      cssTarget: "chrome49",
      minify: "terser",
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },

    plugins: [
      deviceConfigPlugin(process.env.TARGET_DEVICE),

      hexColorTransform({
        include: ["src/**/*.{ts,tsx,js,jsx}"],
      }),

      solidPlugin({
        solid: {
          moduleName: "@lightningtv/solid",
          generate: "universal",
        },
      }),

      legacy({
        targets: ["chrome 49"],
        modernPolyfills: ["es.global-this"],
      }),
    ],

    resolve: {
      alias: {
        theme: path.resolve(__dirname, "./theme.js"),
        "@": path.resolve(__dirname, "./src"),
        "#devices": path.resolve(__dirname, "./devices"),
      },
      dedupe: ["solid-js", "@lightningtv/solid", "@lightningtv/core", "@lightningjs/renderer"],
    },

    optimizeDeps: {
      exclude: ["@lightningtv/solid", "@lightningtv/core", "@lightningjs/renderer"],
    },

    server: {
      host: "0.0.0.0",
      port: 5173,
      cors: true,
      hmr: {
        protocol: "ws",
        host: "172.40.1.185",
        port: 5173,
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },

    test: {
      browser: {
        enabled: true,
        headless: false,
        provider: "playwright",
        name: "webkit",
      },
      globals: true,
    },
  };
});
