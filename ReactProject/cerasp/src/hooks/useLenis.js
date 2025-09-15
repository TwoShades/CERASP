import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  const lenis = useRef(null);

  const scrollToTopWithLenis = () => {
    if (!lenis.current) return;
    lenis.current.stop();

    window.scrollTo(0, 0);

    setTimeout(() => {
      lenis.current.start();
    }, 0);
  };

  useEffect(() => {
    lenis.current = new Lenis({
      smooth: true,
      lerp: 0.2,
      wheelMultiplier: 1,
      infinite: false,
    });

    const animate = (time) => {
      if (!lenis.current) return;
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      if (lenis.current) {
        lenis.current.destroy();
        lenis.current = null;
      }
    };
  }, []);

  return { scrollToTopWithLenis };
}
