import { defaultLocale, locales } from "@/i18n/locales";

const showDefaultLang = true;

export const changeLanguage = (locale: string, path: string): string => {
  if (!path.startsWith("/")) path = `/${path}`;

  const pattern = new RegExp(`^/(${locales.join("|")})(?=/|$)`);
  path = path.replace(pattern, "");

  path = path.replace(/\/{2,}/g, "/");

  const newPath =
    !showDefaultLang && locale === defaultLocale ? path : `/${locale}${path}`;

  return newPath === `/${locale}/` ? `/${locale}` : newPath.replace(/\/$/, "");
};
