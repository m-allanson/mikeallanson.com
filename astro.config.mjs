import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    sitemap(),
    tailwind({
      // Disable injecting a basic `base.css` import on every page.
      config: { applyBaseStyles: false },
    }),
  ],
});
