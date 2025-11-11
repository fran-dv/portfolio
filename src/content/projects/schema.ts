import { z } from "astro:content";

export const ProjectIdSchema = z.enum([
  "bch-connect",
  "zorro-viejo-ecommerce",
  "mini-dapp",
]);
export type ProjectId = z.infer<typeof ProjectIdSchema>;

export const ProjectContentSchema = z.object({
  id: ProjectIdSchema,
  title: z.string(),
  shortDescription: z.string(),
  mockDevice: z.string().refine((str) => str === "mobile" || str === "desktop"),
});
export type ProjectContent = z.infer<typeof ProjectContentSchema>;

export const ProjectsContentSchema = z.object({
  projects: z.array(ProjectContentSchema),
  projectDetailsButton: z.string(),
});
export type ProjectsContent = z.infer<typeof ProjectsContentSchema>;
