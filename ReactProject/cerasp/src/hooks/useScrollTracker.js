import { useState, useEffect, useRef } from "react";

export default function useScrollTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      if (!scrollRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const progress = scrollTop / (scrollHeight - clientHeight);
      setScrollProgress(progress);

      // Set the --scroll-progress CSS variable
      document.documentElement.style.setProperty("--scroll-progress", progress);
    };

    const element = scrollRef.current;
    if (element) {
      element.addEventListener("scroll", updateScrollProgress);
    }

    // Run once when the component mounts to set initial progress value
    updateScrollProgress();

    return () => {
      if (element) {
        element.removeEventListener("scroll", updateScrollProgress);
      }
    };
  }, []);

  return { scrollRef, scrollProgress };
}
