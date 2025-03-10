import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToPanel = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we have a 'scrollTo' state in location
    if (location.state?.scrollTo) {
      scrollToPanel(location.state.scrollTo);
    }
  }, [location]); // Only re-run the effect when location changes

  const scrollToPanel = (id) => {
    // Wait for 200ms before scrolling to allow page rendering
    setTimeout(() => {
      const panel = document.getElementById(id);
      if (panel) {
        // Smoothly scroll to the panel
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  return scrollToPanel; // Return scrollToPanel to allow external usage if needed
};

export default useScrollToPanel;
