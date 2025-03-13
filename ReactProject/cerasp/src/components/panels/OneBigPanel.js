import React from "react";
import "./css/OneBigPanel.css";

const OneBigPanel = ({ title, mainText, image, className = "" }) => {
  return (
    <div className={`one-big-panel ${className}`}>
      <div className="title">{title}</div>
      <div className="main-text">{mainText}</div>
      <div className="image-panel">{image}</div>
    </div>
  );
};

export default OneBigPanel;
 