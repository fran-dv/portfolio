import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const heroContentSchema = z.object({
  name: z.string(),
  surname: z.string(),
  subtitle: z.string(),
});
export type HeroContent = z.infer<typeof heroContentSchema>;

const hero = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "src/content/hero",
  }),
  schema: heroContentSchema,
});

export const collections = { hero };
