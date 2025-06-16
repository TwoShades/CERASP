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
          <h2 className="landing-expertise-title">{t.title}</h2>
          <p className="landing-expertise-description">{t.description}</p>
          <button
            className="landing-expertise-button"
            onClick={handleExpertiseClick}
          >
            {t.cta}
          </button>
        </div>

        <div className="landing-expertise-imageSection">
          <div className="landing-expertise-imageIcon">
            <StockImageFetch
              searchTerm="expertise & solutions"
              imgSource="large"
              orientation="landscape"
              page={3}
              perPage={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingExpertise;
