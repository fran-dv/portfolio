import type { Locale } from "@/i18n/locales";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface Props {
  text: string;
  locale: Locale;
}

export const CopyButton: React.FC<Props> = ({ text, locale }: Props) => {
  const title = locale === "es" ? "Copiar a portapapeles" : "Copy to clipboard";
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    if (copied) return;
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <button
      onClick={handleCopy}
      title={title}
      aria-label={title}
      className="h-[1rem] w-[1rem] cursor-pointer"
    >
      {copied ? (
        <CheckIcon className="h-auto w-full" />
      ) : (
        <CopyIcon className="h-auto w-full" />
      )}
    </button>
  );
};
