import { useEffect, useState, type ReactNode, type FC } from "react";

interface Props {
  children: ReactNode;
  url: string;
  disableOnMobile?: boolean;
}

export const LinkWrapper: FC<Props> = ({ children, url, disableOnMobile }) => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    setIsMobile(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (!isClient || (disableOnMobile && isMobile)) return <>{children}</>;

  return <a href={url}>{children}</a>;
};

export default LinkWrapper;
