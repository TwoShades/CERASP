import React from "react";
import "./css/OneBigPanel.css";

const OneBigPanel = ({ title, mainText }) => {
  return (
    <div className="one-big-panel">
      {/* Text Section */}
      <div className="text-section">
        <h1>{title}</h1>
        <p>{mainText}</p>
      </div>

      {/* Image Section */}
      <div className="image-section">
        Lorem Ipsum
      </div>
    </div>
  );
};

export default OneBigPanel;
