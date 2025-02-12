import React from "react";
import "./css/ScrollPanel.css";

const ScrollPanel = ({ children, className }) => {
  return <div className={`scroll-panel ${className}`}>{children}</div>;
};

export default ScrollPanel;
