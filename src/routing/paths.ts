import type { ProjectId } from "@content/projects/schema";
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

interface GetRelativeUrlOpts {
  locale: Locale;
  page: keyof typeof Paths;
  anchor?: keyof typeof MainPageAnchors;
  dynamicParam?: ProjectId;
}

export const getRelativeUrl = ({
  locale,
  page,
  anchor,
  dynamicParam,
}: GetRelativeUrlOpts) => {
  const path = Paths[page];

  if (anchor) {
    const urlAnchor = MainPageAnchors[anchor];
    const url = getRelativeLocaleUrl(locale, path);
    const urlWithAnchor = `${url}${urlAnchor}`;
    return urlWithAnchor;
  }

  if (dynamicParam) {
    const url = getRelativeLocaleUrl(locale, path);
    const urlWithDynamicParam = `${url}${dynamicParam}`;
    return urlWithDynamicParam;
  }

  const url = getRelativeLocaleUrl(locale, path);
  return url;
};

export const ProjectsStaticPaths: Array<{ params: { project: ProjectId } }> = [
  { params: { project: "bch-connect" } },
  { params: { project: "zorro-viejo-ecommerce" } },
  { params: { project: "mini-dapp" } },
];
