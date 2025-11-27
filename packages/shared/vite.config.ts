import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "shared",
      fileName: () => "main.js", // <-- IMPORTANT: stable filename
      formats: ["es"],
    },
    rollupOptions: {
      // prevent ANY chunk splitting
      output: {
        manualChunks: undefined,
        entryFileNames: "main.js",
        assetFileNames: "assets/[name][extname]",
      },
    },
    sourcemap: true,
  },
  plugins: [
    dts({
      include: ["src"],
      outDir: "dist",
      rollupTypes: true,
      strictOutput: true,
    }),
  ],
});

