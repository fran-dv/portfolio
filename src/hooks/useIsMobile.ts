import { useCallback } from "react";

export const useIsMobile = (): (() => boolean) => {
  const getIsMobile = useCallback(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return false;
    }

    const userAgent = navigator.userAgent;
    return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent.toLowerCase(),
    );
  }, []);

  return getIsMobile;
};
