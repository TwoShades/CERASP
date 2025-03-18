import React from "react";
import "./css/CenteredFeaturePanel.css";

const CenteredFeaturePanel = ({ title, imageContent, features }) => {
  return (
    <div className="centered-feature-panel">
      <h2 className="feature-title">{title}</h2>
      <div className="feature-image">{imageContent}</div>
      <div className="feature-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <h3>{feature.title}</h3>
            <p>{feature.text}</p> {}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenteredFeaturePanel;
