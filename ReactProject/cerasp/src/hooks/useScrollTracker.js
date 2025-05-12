import { useState, useEffect } from "react";

export default function useScrollTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const progress = scrollTop / (scrollHeight - clientHeight);

      setScrollProgress(progress);
      document.documentElement.style.setProperty("--scroll-progress", progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    console.log("Scroll progress updated:", scrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return scrollProgress;
}
