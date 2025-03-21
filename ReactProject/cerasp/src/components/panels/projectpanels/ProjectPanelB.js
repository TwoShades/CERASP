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
    <>
      {/* <div className="project-panel-b-grid-layout">
        <div className="top-image">{topImage}</div>
        <div className="top-right-title">{title}</div>
        <div className="middle-left-quote">{quote}</div>
        <div className="bottom-left-image">{bottomLeftImage}</div>
        <div className="bottom-center-image">{bottomCenterImage}</div>
        <div className="bottom-right-headline">{headline}</div>
      </div> */}

      <section className="project-panel-b-grid-layout">
        <figure className="top-image">{topImage}</figure>
        <header className="top-right-title">{title}</header>
        <blockquote className="middle-left-quote">{quote}</blockquote>
        <figure className="bottom-left-image">{bottomLeftImage}</figure>
        <figure className="bottom-center-image">{bottomCenterImage}</figure>
        <article className="bottom-right-headline">{headline}</article>
      </section>
    </>
  );
};

export default ProjectPanelB;
