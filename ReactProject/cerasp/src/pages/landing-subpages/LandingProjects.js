import React, { useContext } from "react";
import "./css/LandingProjects.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import landingTranslations from "./landing-translations.json";

const OurProjectsPanel = () => {
  const { language } = useContext(LanguageContext);
  const t =
    landingTranslations.projects[language] ||
    landingTranslations.projects["en"];

  const projectImages = [
    "/photos/FromOldSite/AdobeStock_142270277__-scaled.jpg",
    "/photos/FromOldSite/AdobeStock_193906597_-scaled-450x450.jpg",
    "/photos/FromOldSite/AdobeStock_240748778__-scaled.jpg",
    "/photos/FromOldSite/AdobeStock_309159152-scaled-450x450.jpg",
    "/photos/FromOldSite/AdobeStock_315975074__-scaled-450x450.jpg",
    "/photos/FromOldSite/AdobeStock_315999267_-scaled-450x450.jpg",
  ];

  const handleProjectsClick = () => {
    window.location.href = "/projects";
  };

  return (
    <div className="landing-projects-container">
      <div className="landing-projects-content">
        <div className="landing-projects-titleSection">
          <h2 className="landing-projects-title">{t.title}</h2>
          <p className="landing-projects-subtitle">{t.subtitle}</p>
        </div>

        <div className="landing-projects-projectsGrid">
          {t.list.map((project, index) => (
            <div key={index} className="landing-projects-projectCard">
              <div className="landing-projects-imageContainer">
                <div className="landing-projects-imagePlaceholder">
                  <div className="landing-projects-imageIcon">
                    <img
                      src={projectImages[index]}
                      alt={project.title}
                      className="landing-projects-image"
                    />
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
            {t.cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProjectsPanel;
