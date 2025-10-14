import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { heroContentSchema } from "@content/hero/schema";
import { NavbarSchema } from "@content/navbar/schema";

const hero = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "src/content/hero",
  }),
  schema: heroContentSchema,
});

const navbar = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "src/content/navbar",
  }),
  schema: NavbarSchema,
});

export const collections = { hero, navbar };
