import type { SvgComponent } from "astro/types";
import reactIcon from "@assets/technologiesLogos/react.svg";
import typescriptIcon from "@assets/technologiesLogos/typescript.svg";
import tailwindIcon from "@assets/technologiesLogos/tailwind.svg";
import astroIcon from "@assets/technologiesLogos/astro.svg";
import tanStackIcon from "@assets/technologiesLogos/tanstack.png";
import cssIcon from "@assets/technologiesLogos/css.svg";
import htmlIcon from "@assets/technologiesLogos/html.svg";
import jsIcon from "@assets/technologiesLogos/javascript.svg";
import linuxIcon from "@assets/technologiesLogos/linux.svg";
import postgreSQLIcon from "@assets/technologiesLogos/postgresql.svg";
import supabaseIcon from "@assets/technologiesLogos/supabase.svg";
import testingLibraryIcon from "@assets/technologiesLogos/testing-library.svg";
import vitestIcon from "@assets/technologiesLogos/vitest.svg";
import zodIcon from "@assets/technologiesLogos/zod.svg";
import zustandIcon from "@assets/technologiesLogos/zustand.svg";
import gitIcon from "@assets/technologiesLogos/git.svg";

export type Technology =
  | "react"
  | "typescript"
  | "tailwind"
  | "astro"
  | "tanStack"
  | "css"
  | "html"
  | "js"
  | "linux"
  | "postgreSQL"
  | "supabase"
  | "testingLibrary"
  | "vitest"
  | "zod"
  | "zustand"
  | "git";

export const TechnologiesLogos: Record<
  Technology,
  ImageMetadata | (SvgComponent & ImageMetadata)
> = {
  react: reactIcon,
  typescript: typescriptIcon,
  tailwind: tailwindIcon,
  astro: astroIcon,
  tanStack: tanStackIcon,
  css: cssIcon,
  html: htmlIcon,
  js: jsIcon,
  linux: linuxIcon,
  postgreSQL: postgreSQLIcon,
  supabase: supabaseIcon,
  testingLibrary: testingLibraryIcon,
  vitest: vitestIcon,
  zod: zodIcon,
  zustand: zustandIcon,
  git: gitIcon,
} as const;

export default TechnologiesLogos;
