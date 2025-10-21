import { z } from "astro:content";

export const AboutContentSchema = z.object({
  title: z.string(),
});

export type AboutContent = z.infer<typeof AboutContentSchema>;
