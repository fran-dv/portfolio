import { z } from "astro:content";

export const HeroContentSchema = z.object({
  name: z.string(),
  surname: z.string(),
  jobTitle: z.string(),
});

export type HeroContent = z.infer<typeof HeroContentSchema>;
