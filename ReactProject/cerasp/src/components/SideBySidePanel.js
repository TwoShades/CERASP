import React from "react";
import "./css/SideBySidePanel.css";

const SideBySidePanel = ({ leftContent, rightContent, className = "" }) => {
  return (
    <div className={`side-by-side-panel ${className}`}>
      <div className="banner-panel">{leftContent}</div>
      <div className="text-panel">{rightContent}</div>
    </div>
  );
};

export default SideBySidePanel;
