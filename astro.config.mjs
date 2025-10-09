// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { locales, defaultLocale } from "./src/i18n/locales";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  i18n: {
    locales,
    defaultLocale,
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
