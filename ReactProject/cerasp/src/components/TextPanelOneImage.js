import React from "react";
import "./css/TextPanelOneImage.css";

const TextPanelOneImage = ({ leftContent, rightContent, className = "" }) => {
  return (
    <div className={`text-panel-one-image ${className}`}>
      <div className="text-panel">{leftContent}</div>
      <div className="image-panel">{rightContent}</div>
    </div>
  );
};

export default TextPanelOneImage;
