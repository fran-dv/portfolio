import { z } from "astro:content";

export const heroContentSchema = z.object({
  name: z.string(),
  surname: z.string(),
  subtitle: z.string(),
});

export type HeroContent = z.infer<typeof heroContentSchema>;
