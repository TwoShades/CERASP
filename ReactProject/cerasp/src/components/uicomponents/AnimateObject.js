import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useContext } from "react";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext"; // 👈 import your context

const OFFSET = 50;

export default function AnimateObject({
  children,
  style,
  className = "",
  variantsToRun = ["fadeIn"],
  threshold = 0.1,
  once = false,
}) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    amount: threshold,
    once,
  });

  const { isMobile } = useContext(ScreenSizeContext);

  useEffect(() => {
    if (isMobile) {
      // 👇 On mobile, just set everything visible instantly
      controls.set("visible");
      return;
    }

    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once, isMobile]);

  // If mobile, skip offsets completely
  const initialX =
    !isMobile && Array.isArray(variantsToRun)
      ? variantsToRun.includes("slideLeft")
        ? -OFFSET
        : variantsToRun.includes("slideRight")
        ? OFFSET
        : 0
      : !isMobile && variantsToRun === "slideLeft"
      ? -OFFSET
      : !isMobile && variantsToRun === "slideRight"
      ? OFFSET
      : 0;

  const initialY =
    !isMobile && Array.isArray(variantsToRun)
      ? variantsToRun.includes("slideDown")
        ? -OFFSET
        : 0
      : !isMobile && variantsToRun === "slideDown"
      ? -OFFSET
      : 0;

  const includesFade = Array.isArray(variantsToRun)
    ? variantsToRun.includes("fadeIn")
    : variantsToRun === "fadeIn";

  const includesSlowFade = Array.isArray(variantsToRun)
    ? variantsToRun.includes("slowFadeIn")
    : variantsToRun === "slowFadeIn";

  const variants = isMobile
    ? {
        hidden: {
          opacity: includesFade || includesSlowFade ? 0 : 1,
          x: 0,
          y: 0,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: includesSlowFade ? 1 : 0.6,
            ease: "easeOut",
          },
        },
      }
    : {
        hidden: {
          opacity: includesFade || includesSlowFade ? 0 : 1,
          x: initialX,
          y: initialY,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: includesSlowFade ? 1 : 0.6,
            ease: "easeOut",
          },
        },
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={controls}
      style={{
        position: "relative",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
