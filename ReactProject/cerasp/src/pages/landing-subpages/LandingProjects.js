import React from "react";
import "./css/LandingProjects.css";

const OurProjectsPanel = () => {
  const handleProjectsClick = () => {
    window.location.href = "/projects";
  };

  const projects = [
    {
      title: "Advanced Pharmaceutical Formulation",
      subtitle: "Next-generation drug delivery systems",
    },
    {
      title: "Biotech Research Initiative",
      subtitle: "Innovative protein synthesis solutions",
    },
    {
      title: "Chemical Extraction Process",
      subtitle: "Sustainable extraction methodologies",
    },
    {
      title: "Regulatory Compliance Framework",
      subtitle: "Comprehensive compliance solutions",
    },
    {
      title: "R&D Scale-Up Project",
      subtitle: "Laboratory to production transition",
    },
    {
      title: "Training & Development Program",
      subtitle: "Industry-leading educational initiatives",
    },
  ];

  return (
    <div className="landing-projects-container">
      <div className="landing-projects-content">
        <div className="landing-projects-titleSection">
          <h2 className="landing-projects-title">Our Projects</h2>
          <p className="landing-projects-subtitle">
            Showcasing our expertise through successful project implementations
          </p>
        </div>

        <div className="landing-projects-projectsGrid">
          {projects.map((project, index) => (
            <div key={index} className="landing-projects-projectCard">
              <div className="landing-projects-imageContainer">
                <div className="landing-projects-imagePlaceholder">
                  <div className="landing-projects-imageIcon">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21,15 16,10 5,21" />
                    </svg>
                  </div>
                </div>
                <div className="landing-projects-overlay"></div>
              </div>
              <div className="landing-projects-projectInfo">
                <h3 className="landing-projects-projectTitle">
                  {project.title}
                </h3>
                <p className="landing-projects-projectSubtitle">
                  {project.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="landing-projects-ctaSection">
          <button
            className="landing-projects-ctaButton"
            onClick={handleProjectsClick}
          >
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProjectsPanel;
