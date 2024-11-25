// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://sueda.jp",
  redirects: {
    '/pay': {
      status: 308,
      destination: 'https://scrapbox.io/terfno/pay'
    }
  }
});
