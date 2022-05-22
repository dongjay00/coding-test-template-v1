import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  resolve: {
    alias: [{
      find: '@',
      replacement: '/src'
    }]
  }
});
