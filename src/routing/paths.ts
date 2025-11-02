import type { Locale } from "@/i18n/locales";
import { getRelativeLocaleUrl } from "astro:i18n";

export const Paths = {
  MainPage: "/",
  Projects: "projects",
} as const;

export const MainPageAnchors = {
  Hero: "#hero",
  ProjectsCTABanner: "#projectsCTABanner",
  About: "#about",
  Contact: "#contact",
} as const;

export const getRelativeUrl = (
  locale: Locale,
  page: keyof typeof Paths,
  anchor: keyof typeof MainPageAnchors | undefined = undefined,
) => {
  const path = Paths[page];
  if (anchor) {
    const urlAnchor = MainPageAnchors[anchor];
    const url = getRelativeLocaleUrl(locale, path);
    const urlWithAnchor = url + urlAnchor;
    return urlWithAnchor;
  }
  const url = getRelativeLocaleUrl(locale, path);
  return url;
};
