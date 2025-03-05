import { reactRouter } from "@react-router/dev/vite";
import { reactRouterDevTools } from "react-router-devtools";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  plugins: [reactRouterDevTools(), reactRouter(), tsconfigPaths()],
});
