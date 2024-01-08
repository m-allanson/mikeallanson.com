import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.mikeallanson.com",
  markdown: {
    shikiConfig: {
      theme: "poimandres", // Choose from Shiki's built-in themes https://github.com/shikijs/shiki/blob/main/docs/themes.md
    },
  },
  integrations: [sitemap()],
});
