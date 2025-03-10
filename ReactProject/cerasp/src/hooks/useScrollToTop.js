import { useEffect } from "react";

const useScrollToTop = (pathname, handleClick) => {
  useEffect(() => {
    if (!pathname) return;

    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      const firstChild = scrollContainer.firstElementChild;
      if (firstChild) {
        // Instant scroll to the first child
        firstChild.scrollIntoView({ behavior: "instant", block: "start" });
      }
    }
  }, [pathname]); // Trigger on pathname change

  const handleLinkClick = (linkPath) => {
    if (pathname === linkPath) {
      // If the user clicks the same page, scroll to the topmost child
      const scrollContainer = document.querySelector(".scroll-container");
      if (scrollContainer) {
        const firstChild = scrollContainer.firstElementChild;
        if (firstChild) {
          firstChild.scrollIntoView({ behavior: "instant", block: "start" });
        }
      }
    }
    if (handleClick) {
      handleClick(linkPath); // Call the passed in `handleClick` function to handle menu state
    }
  };

  return { handleLinkClick }; // Return the new click handler to be used in the component
};

export default useScrollToTop;
