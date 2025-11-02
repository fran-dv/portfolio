import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { HeroContentSchema } from "@content/hero/schema";
import { NavbarSchema } from "@content/navbar/schema";
import { AboutContentSchema } from "./content/about/schema";

const hero = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "src/content/hero",
  }),
  schema: HeroContentSchema,
});

const navbar = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "src/content/navbar",
  }),
  schema: NavbarSchema,
});

const about = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "src/content/about",
  }),
  schema: AboutContentSchema,
});

const projectsCTABanner = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "src/content/projectsCTABanner",
  }),
});

const contact = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "src/content/contact",
  }),
});

const footer = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "src/content/footer",
  }),
});

export const collections = {
  hero,
  navbar,
  about,
  projectsCTABanner,
  contact,
  footer,
};
