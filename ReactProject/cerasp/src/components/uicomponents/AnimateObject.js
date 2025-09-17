import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useContext } from "react";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";

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

  // Run effect always, but do nothing if mobile
  useEffect(() => {
    if (isMobile) return;

    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once, isMobile]);

  // If mobile → plain <div> (no motion)
  if (isMobile) {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          position: "relative",
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  // ----- Desktop animations only -----
  const initialX = Array.isArray(variantsToRun)
    ? variantsToRun.includes("slideLeft")
      ? -OFFSET
      : variantsToRun.includes("slideRight")
      ? OFFSET
      : 0
    : variantsToRun === "slideLeft"
    ? -OFFSET
    : variantsToRun === "slideRight"
    ? OFFSET
    : 0;

  const initialY = Array.isArray(variantsToRun)
    ? variantsToRun.includes("slideDown")
      ? -OFFSET
      : 0
    : variantsToRun === "slideDown"
    ? -OFFSET
    : 0;

  const includesFade = Array.isArray(variantsToRun)
    ? variantsToRun.includes("fadeIn")
    : variantsToRun === "fadeIn";

  const includesSlowFade = Array.isArray(variantsToRun)
    ? variantsToRun.includes("slowFadeIn")
    : variantsToRun === "slowFadeIn";

  const variants = {
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
