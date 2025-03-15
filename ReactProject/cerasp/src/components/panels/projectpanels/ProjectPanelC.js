import React from "react";
import "./css/ProjectPanelC.css";

const ProjectPanelC = ({
  middleImage,
  bottomLeftImage,
  headline,
  textContent,
}) => {
  return (
    <div className="project-panel-c-grid-layout">
      <div className="top-left-text">
        <h3>Project Title</h3>
        <p>{textContent}</p>
      </div>
      <div className="three-circles">
        <div className="circle-left"></div>
        <div className="circle-center"></div>
        <div className="circle-right"></div>
      </div>
      <div className="middle-row">{middleImage}</div>
      <div className="bottom-left">{bottomLeftImage}</div>
      <div className="bottom-right-text">{headline}</div>
    </div>
  );
};

export default ProjectPanelC;
