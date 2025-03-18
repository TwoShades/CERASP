import React from "react";
import "./css/ProjectPanelA.css";

const ProjectPanelA = ({ title = "Project", image, headline, textContent }) => {
  return (
    <div className="project-panel-a-grid-layout">
      <div className="top-panel">
        {image}
        <div className="top-panel-title">{title}</div>
      </div>
      <div className="bottom-left-panel">
        <h3>{headline}</h3>
        {textContent}
      </div>
      <div className="bottom-center-panel"></div>
      <div className="bottom-right-panel"></div>
    </div>
  );
};

export default ProjectPanelA;
