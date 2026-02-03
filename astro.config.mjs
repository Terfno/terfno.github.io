// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://sueda.jp",
  redirects: {
    "/pay": {
      status: 308,
      destination: "https://scrapbox.io/terfno/pay",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
