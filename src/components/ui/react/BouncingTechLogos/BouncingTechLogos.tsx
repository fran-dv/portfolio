import React, { useRef, useEffect, useState } from "react";
import styles from "./BouncingTechLogos.module.css";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export interface LogoConfig {
  src: string ;
  alt: string;
  size: number;
  speed?: number;
}

type Direction = "ne" | "nw" | "se" | "sw";

interface LogoState {
  id: number;
  x: number;
  y: number;
  direction: Direction;
  config: LogoConfig;
}

interface ContainerSize {
  width: number;
  height: number;
}

interface BouncingTechLogosProps {
  logos: LogoConfig[];
  containerRefObject?: React.RefObject<HTMLDivElement>;
  containerClassName?: string;
  logosClassName?: string;
}

export const BouncingTechLogos: React.FC<BouncingTechLogosProps> = ({
  logos,
  containerRefObject,
  containerClassName,
  logosClassName,
}) => {
  const internalContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = containerRefObject ?? internalContainerRef;
  const requestRef = useRef<number>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [containerSize, setContainerSize] = useState<ContainerSize>({
    width: 0,
    height: 0,
  });
  const [logoStates, setLogoStates] = useState<LogoState[]>([]);

  const originalLogosRef = useRef<LogoConfig[]>(logos);

  const getResponsiveLogos = () => {
    return originalLogosRef.current.map(logo => ({
      ...logo,
      size: isSmallScreen ? logo.size * 0.6 : logo.size,
    }));
  };

  useEffect(() => {
    originalLogosRef.current = logos;
  }, [logos]);

  useEffect(() => {
    if (!containerRef.current || logos.length === 0) return;

    const initLogoStates = () => {
      const containerRect = containerRef.current!.getBoundingClientRect();
      const newLogoStates: LogoState[] = [];
      const responsiveLogos = getResponsiveLogos();

      for (let i = 0; i < responsiveLogos.length; i++) {
        const logoConfig = responsiveLogos[i];
        const size = logoConfig.size;

        const x = Math.random() * (containerRect.width - size);
        const y = Math.random() * (containerRect.height - size);
        const direction = ["ne", "nw", "se", "sw"][
          Math.floor(Math.random() * 4)
        ] as Direction;

        newLogoStates.push({
          id: i,
          x,
          y,
          direction,
          config: logoConfig,
        });
      }

      setLogoStates(newLogoStates);
      setContainerSize({
        width: containerRect.width,
        height: containerRect.height,
      });
    };

    requestAnimationFrame(() => initLogoStates());

    const handleResize = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(initLogoStates, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [logos, containerRef, isSmallScreen]);

  useEffect(() => {
    if (logoStates.length === 0) return;

    const animate = () => {
      setLogoStates((prevStates) => {
        return prevStates.map((logo) => {
          const size = logo.config.size ?? 60;
          const speed = logo.config.speed ?? 2;
          let { x, y, direction } = logo;

          switch (direction) {
            case "ne":
              x += speed;
              y -= speed;
              break;
            case "nw":
              x -= speed;
              y -= speed;
              break;
            case "se":
              x += speed;
              y += speed;
              break;
            case "sw":
              x -= speed;
              y += speed;
              break;
          }

          // Check boundaries and change direction if needed
          if (y <= 0) {
            y = 0;
            if (direction === "nw") direction = "sw";
            else if (direction === "ne") direction = "se";
          }

          if (y >= containerSize.height - size) {
            y = containerSize.height - size;
            if (direction === "se") direction = "ne";
            else if (direction === "sw") direction = "nw";
          }

          if (x <= 0) {
            x = 0;
            if (direction === "nw") direction = "ne";
            else if (direction === "sw") direction = "se";
          }

          if (x >= containerSize.width - size) {
            x = containerSize.width - size;
            if (direction === "ne") direction = "nw";
            else if (direction === "se") direction = "sw";
          }

          return { ...logo, x, y, direction };
        });
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [logoStates.length, containerSize]);

  return (
    <div
      ref={internalContainerRef}
      className={`${styles.container} ${containerClassName}`}
    >
      {logoStates.map((logo) => (
        <img
          key={logo.id}
          src={logo.config.src }
          alt={logo.config.alt}
          className={`${styles.logo} ${logosClassName}`}
          style={{
            transform: `translate(${logo.x}px, ${logo.y}px)`,
            width: `${logo.config.size || 60}px`,
            height: `${logo.config.size || 60}px`,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingTechLogos;
