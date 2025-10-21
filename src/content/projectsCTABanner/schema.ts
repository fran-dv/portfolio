import { z } from "astro:content";

export const ProjectsCTABannerContentSchema = z.object({
  title: z.string(),
  ctaButton: z.string(),
  projects: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
    }),
  ),
});

export type ProjectsCTABannerContent = z.infer<
  typeof ProjectsCTABannerContentSchema
>;
