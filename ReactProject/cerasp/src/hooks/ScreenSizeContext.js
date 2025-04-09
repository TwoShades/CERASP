import React, { createContext, useState, useEffect } from "react";

export const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const checkScreenSize = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 576);
    setIsTablet(width <= 1024 && width > 576);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isMobile, isTablet }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
