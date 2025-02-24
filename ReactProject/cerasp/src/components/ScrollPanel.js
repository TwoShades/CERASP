import React from "react";
import "./css/ScrollPanel.css";

const ScrollPanel = ({ children, colorTheme = "themeA" }) => {
  return <div className={`scroll-panel ${colorTheme}`}>{children}</div>;
};

export default ScrollPanel;
