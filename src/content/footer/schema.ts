import { z } from "astro:content";

export const FooterContentSchema = z.object({
  links: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    }),
  ),
});

export type FooterContent = z.infer<typeof FooterContentSchema>;
