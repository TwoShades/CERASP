import React from "react";
import "./css/ProjectPanelB.css";

const ProjectPanelB = ({
  topImage,
  title,
  quote,
  bottomLeftImage,
  bottomCenterImage,
  headline,
}) => {
  return (
    <div className="project-panel-b-grid-layout">
      <div className="top-image">{topImage}</div>
      <div className="top-right-title">{title}</div>
      <div className="middle-left-quote">{quote}</div>
      <div className="bottom-left-image">{bottomLeftImage}</div>
      <div className="bottom-center-image">{bottomCenterImage}</div>
      <div className="bottom-right-headline">{headline}</div>
    </div>
  );
};

export default ProjectPanelB;
