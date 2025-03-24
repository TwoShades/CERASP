import React from "react";
import "./css/ProjectPanelD.css";

const ProjectPanelD = ({ title = "Project", image, headline, textContent }) => {
  return (
    <div className="project-panel-d-grid-layout">
      <div className="panel-d-square">
        <header className="project-title">{title}</header>
      </div>

      <figure className="project-panel-d-figure">{image}</figure>
    </div>
  );
};

export default ProjectPanelD;
