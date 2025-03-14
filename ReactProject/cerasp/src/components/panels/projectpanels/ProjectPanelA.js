import React from "react";
import "./css/ProjectPanelA.css";

const ProjectPanelA = ({ image, headline, textContent }) => {
  return (
    <div className="project-panel-a-grid-layout">
      <div className="top-panel">
        {image}
        <div className="top-panel-title">Project A</div>
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
