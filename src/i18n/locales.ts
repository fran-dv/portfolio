export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "en";

export interface LocaleLink {
  locale: Locale;
  url: string;
}
