import React, { useContext } from "react";
import "./css/LandingExpertise.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import landingTranslations from "./landing-translations.json";

const LandingExpertise = () => {
  const { language } = useContext(LanguageContext);
  const t =
    landingTranslations["landing-expertise"][language] ||
    landingTranslations["landing-expertise"]["en"];

  const handleExpertiseClick = () => {
    window.location.href = "/expertises";
  };

  return (
    <div className="landing-expertise-container">
      <div className="landing-expertise-content">
        <div className="landing-expertise-textSection">
          <h2 className="landing-expertise-title">
            {t.title}
          </h2>
          <p className="landing-expertise-description">
            {t.description}
          </p>
          <button
            className="landing-expertise-button"
            onClick={handleExpertiseClick}
          >
            {t.cta}
          </button>
        </div>

        <div className="landing-expertise-imageSection">
          <div className="landing-expertise-imageIcon">
            <img
              src="/photos/FromOldSite/AdobeStock_141805489-scaled.jpg"
              alt="Expertise & Solutions"
              className="landing-expertise-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingExpertise;
