import React, {
  createContext,
  useState,
  useEffect,
} from "react";

export const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const checkScreenSize = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 900);
    setIsTablet(width <= 1276 && width > 900);
    setIsFullScreen(width > 1276);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider
      value={{ isMobile, isTablet, isFullScreen }}
    >
      {children}
    </ScreenSizeContext.Provider>
  );
};
