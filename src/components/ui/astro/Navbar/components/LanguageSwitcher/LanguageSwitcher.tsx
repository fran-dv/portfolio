import { locales, type Locale } from "@/i18n/locales";
import { changeLanguage } from "@/i18n/utils";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { GlobeIcon, TriangleDownIcon } from "@radix-ui/react-icons";

interface Props {
  currentLocale: Locale;
  currentPath: string;
  languagesLabel: string;
}

export const LanguageSwitcher = ({
  currentLocale,
  currentPath,
  languagesLabel,
}: Props) => {
  return (
    <div className="max-w-[150px]">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="group glass-border text-text-contrast focus:outline-brand-accent flex w-full items-center justify-between gap-2 rounded-full border border-transparent bg-transparent p-[var(--navbar-buttons-padding)] text-sm font-semibold uppercase focus:outline md:text-lg"
            aria-label="Change language"
          >
            <GlobeIcon className="h-[var(--text-sm)] w-[var(--text-sm)] md:h-[var(--text-lg)] md:w-[var(--text-lg)]" />
            {currentLocale}
            <TriangleDownIcon className="h-[var(--text-sm)] w-[var(--text-sm)] transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180 md:h-[var(--text-lg)] md:w-[var(--text-lg)]" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <ul className="glass glass-border flex w-full flex-col items-center gap-2 rounded-lg p-3 pt-2">
            <h4 className="text-text-contrast text-center text-xs font-semibold md:text-sm">
              {languagesLabel}
            </h4>
            {locales.map((locale) => {
              if (locale.includes(currentLocale)) return null;
              const languageChangedPath = changeLanguage(locale, currentPath);

              return (
                <li key={locale}>
                  <a href={languageChangedPath}>
                    <DropdownMenu.Item asChild>
                      <button className="text-text-contrast hover:bg-text-contrast hover:text-bg-surface focus:glass-border flex w-full items-center justify-center rounded-lg border border-transparent px-6 py-1 text-sm font-semibold uppercase transition-colors duration-100 ease-in-out focus:border focus:outline-none md:text-lg">
                        {locale}
                      </button>
                    </DropdownMenu.Item>
                  </a>
                </li>
              );
            })}
          </ul>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default LanguageSwitcher;
