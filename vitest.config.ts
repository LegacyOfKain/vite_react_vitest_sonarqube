import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// Create __dirname using import.meta.url

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.ts",
    //root: __dirname, // not needed for pure react
    //include: ['test/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    include: ["src/tests/**/*.spec.{ts,tsx}" , "src/tests/**/*.test.{ts,tsx}"],
    exclude: ["node_modules/", "dist/", "coverage/"],
    testTimeout: 1000 * 29,
    coverage: {
      provider: "v8",
      reporter: ['text', 'lcov','html'],
      exclude: [
        "node_modules/",
        "dist/",
        "dist-electron",
        "coverage/",
        "**/*.d.ts",
        "**/*.test.{js,jsx,ts,tsx}",
        "**/*.spec.{js,jsx,ts,tsx}",
        "*.config.ts",
        "*.config.js",
        "*.cjs",
      ],
    },
  },
});
