import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    tsconfigPaths(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  esbuild: {
    jsxFactory: `jsx`,
    jsxInject: `import { jsx } from '@emotion/react'`,
  },
  resolve: {
    alias: [{
      find: '@',
      replacement: '/src'
    }]
  }
});
