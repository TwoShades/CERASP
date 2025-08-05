import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  const lenis = useRef(null);

  useEffect(() => {
    lenis.current = new Lenis({
      smooth: true,
      lerp: 0.1,
      wheelMultiplier: 1,
      infinite: false,
    });

    const animate = (time) => {
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

  // No return needed
}
