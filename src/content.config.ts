import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { heroContentSchema } from "@content/hero/schema";

const hero = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "src/content/hero",
  }),
  schema: heroContentSchema,
});

export const collections = { hero };
