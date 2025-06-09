import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToPanel = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (!sectionId) return;

    const delayNeeded = location.state?.fromDifferentPage ?? true;

    const scrollToTarget = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        if (delayNeeded) {
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 400);
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return true;
      }
      return false;
    };

    if (scrollToTarget()) return;

    const observer = new MutationObserver(() => {
      if (scrollToTarget()) observer.disconnect();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [location]);
};

export default useScrollToPanel;
