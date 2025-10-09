import { z } from "astro:content";

export const NavbarSchema = z.object({
  homeLink: z.string(),
  projectsLink: z.string(),
  aboutLink: z.string(),
  contactLink: z.string(),
  cvLink: z.string(),
  languagesLabel: z.string(),
});

export type NavbarContent = z.infer<typeof NavbarSchema>;
