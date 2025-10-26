import { z } from "astro:content";

export const AboutContentSchema = z.object({
  title: z.string(),
  paragraph1: z
    .string()
    .refine((intro: string) => intro.includes("{bitcoinCashLink}")),
  bitcoinCashLink: z.string(),
  paragraph2: z.string(),
});

export type AboutContent = z.infer<typeof AboutContentSchema>;
