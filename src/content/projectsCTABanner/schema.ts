import { z } from "astro:content";

export const ProjectsCTABannerContentSchema = z.object({
  title: z.string(),
  ctaButton: z.string(),
});

export type ProjectsCTABannerContent = z.infer<
  typeof ProjectsCTABannerContentSchema
>;
