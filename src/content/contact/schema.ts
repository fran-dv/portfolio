import { z } from "astro:content";

export const ContactContentSchema = z.object({
  title: z.string(),
  paragraph1: z.string(),
  paragraph2: z.string().refine((p) => p.includes("{e-mail}")),
});

export type ContactContent = z.infer<typeof ContactContentSchema>;
