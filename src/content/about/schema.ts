import { z } from "astro:content";

export const AboutContentSchema = z.object({
  title: z.string(),
  paragraph1: z
    .string()
    .refine((intro: string) => intro.includes("{bitcoinCashLink}")),
  bitcoinCashLink: z.string(),
  paragraph2: z.string(),
  callToAction: z
    .string()
    .refine(
      (cta: string) =>
        cta.includes("{cvLink}") && cta.includes("{contactLink}"),
    ),
  cvLink: z.string(),
  contactLink: z.string(),
});

export type AboutContent = z.infer<typeof AboutContentSchema>;
