import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  childrenAmount: number;
}

export const HorizontalScroll: React.FC<Props> = ({
  children,
  childrenAmount,
}: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [vw, setVw] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxTranslate = Math.max(0, (childrenAmount - 1) * vw);
  const containerHeightVh = childrenAmount * 200;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rawX: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -maxTranslate],
  );

  const springConfig = { stiffness: 150, damping: 30, mass: 1 };
  const smoothX = useSpring(rawX, springConfig);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none relative"
      style={{ height: `${containerHeightVh}vh` }}
    >
      <div className="pointer-events-none sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="pointer-events-none flex h-full items-center"
          style={{
            x: smoothX,
            width: `${childrenAmount * vw}px`,
            touchAction: "pan-y",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
