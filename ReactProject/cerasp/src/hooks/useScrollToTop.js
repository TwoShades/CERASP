import { useEffect } from "react";

const useScrollToTop = (pathname, handleClick) => {
  useEffect(() => {
    if (!pathname) return;

    const scrollContainer = document.querySelector(".page-content");
    if (scrollContainer) {
      const firstChild = scrollContainer.firstElementChild;
      if (firstChild) {
        firstChild.scrollIntoView({ behavior: "instant", block: "start" });
      }
    }
  }, [pathname]);

  const handleLinkClick = (linkPath) => {
    if (pathname === linkPath) {
      const scrollContainer = document.querySelector(".page-content");
      if (scrollContainer) {
        const firstChild = scrollContainer.firstElementChild;
        if (firstChild) {
          firstChild.scrollIntoView({ behavior: "instant", block: "start" });
        }
      }
    }
    if (handleClick) {
      handleClick(linkPath);
    }
  };

  return { handleLinkClick };
};

export default useScrollToTop;
