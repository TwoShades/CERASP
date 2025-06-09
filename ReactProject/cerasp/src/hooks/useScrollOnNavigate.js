import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import scrollToTop from "../utils/scrollToTop";

const useScrollOnNavigate = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.scrollToTop) {
      scrollToTop();
    }
  }, [pathname]);
};

export default useScrollOnNavigate;
