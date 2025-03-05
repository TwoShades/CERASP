import { useEffect, useRef } from "react";

const useSmoothScroll = () => {
  const mainRef = useRef(null); // Reference to main container

  useEffect(() => {
    // Prevent scrolling globally
    window.addEventListener("wheel", (e) => e.preventDefault(), {
      passive: false,
    });

    const main = mainRef.current;

    if (main) {
      const handleWheel = (event) => {
        event.preventDefault(); // Prevent default scroll behavior
        let ct = event.currentTarget;
        let canScroll = !!ct.dataset.canscroll;
        if (!canScroll) {
          return false;
        }
        let h = ct.scrollHeight - ct.clientHeight;
        let stop = Math.trunc(ct.scrollTop);
        let wd = event.deltaY;
        scrollContainer(ct, wd < 0);
        if (stop === 0 || stop === h) {
          ct.dataset.canscroll = "true";
        }
      };

      const handleScrollEnd = (event) => {
        let ct = event.currentTarget;
        ct.dataset.canscroll = "true";
      };

      const handleScroll = (event) => {
        let canScroll = !!event.currentTarget.dataset.canscroll;
        if (canScroll) {
          return false;
        }
      };

      // Initialize canscroll state to "true"
      main.dataset.canscroll = "true"; // Ensure it starts as scrollable

      // Add event listeners
      main.addEventListener("wheel", handleWheel, {
        passive: false,
      });

      main.addEventListener("scrollend", handleScrollEnd);
      main.addEventListener("scroll", handleScroll);

      // Trigger scroll to the top once when the component mounts
      const scrollToTop = () => {
        if (main) {
          main.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: "smooth", // Smooth scroll
          });
        }
      };

      scrollToTop();

      // Cleanup event listeners on unmount
      return () => {
        main.removeEventListener("wheel", handleWheel);
        main.removeEventListener("scrollend", handleScrollEnd);
        main.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scrollContainer = (main, plus) => {
    main.dataset.canscroll = "false";
    let scroll = plus ? -main.clientHeight : main.clientHeight; // Reverse the logic here
    main.scrollBy({
      top: scroll,
      behavior: "smooth",
    });
  };

  return mainRef; // Return the reference so it can be used in components
};

export default useSmoothScroll;
