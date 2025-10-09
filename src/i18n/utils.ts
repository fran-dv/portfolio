import { defaultLocale, locales } from "@/i18n/locales";

const showDefaultLang = true;

export const changeLanguage = (locale: string, path: string): string => {
  const languagePrefixes = locales;
  const hasLanguagePrefix = languagePrefixes.some((prefix) =>
    path.includes(prefix),
  );
  if (hasLanguagePrefix) {
    path = path.replace(new RegExp(`/${languagePrefixes.join("|")}`), "");
  }
  return !showDefaultLang && locale === defaultLocale
    ? path
    : `/${locale}${path}`;
};
