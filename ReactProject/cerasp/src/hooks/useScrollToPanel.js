import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useScrollToPanel = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scrollToPanel(location.state.scrollTo);

      // Uncomment so that "back" just returns to 'top' of previous page.
      // navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]); // Runs only when location changes

  const scrollToPanel = (id) => {
    setTimeout(() => {
      const panel = document.getElementById(id);
      if (panel) {
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  return scrollToPanel;
};

export default useScrollToPanel;
