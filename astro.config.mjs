import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.mikeallanson.com",
  markdown: {
    shikiConfig: {
      theme: "poimandres", // Choose from Shiki's built-in themes https://github.com/shikijs/shiki/blob/main/docs/themes.md
    },
  },
  integrations: [
    sitemap(),
    tailwind({
      config: { applyBaseStyles: false }, // Disable injecting a basic `base.css` import on every page.
    }),
  ],
});
