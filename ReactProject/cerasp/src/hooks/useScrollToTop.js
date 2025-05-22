import { useEffect } from "react";

const useScrollToTop = (pathname, handleClick) => {
  useEffect(() => {
    if (!pathname) return;

    const pageContent = document.querySelector(".page-content");
    if (pageContent) {
      const firstChild = pageContent.firstElementChild;
      if (firstChild) {
        firstChild.scrollIntoView({ behavior: "instant", block: "start" });
      }
    }
  }, [pathname]);

  const handleLinkClick = (linkPath) => {
    if (pathname === linkPath) {
      const pageContent = document.querySelector(".page-content");
      if (pageContent) {
        const firstChild = pageContent.firstElementChild;
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
