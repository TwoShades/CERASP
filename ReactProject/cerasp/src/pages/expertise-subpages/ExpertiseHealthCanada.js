import React, { useContext } from "react";
import "./css/ExpertiseHealthCanada.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";

const ExpertiseHealthCanada = ({ leftContent, rightContent, className = "" }) => {
  const { language } = useContext(LanguageContext);
  const healthCanada = expertiseTranslations.health_canada;

  return (
    <div className="expertise-health-canada-parent">
        <div className= "expertise-health-canada-panel">
        <div className="expertise-health-canada-left">
            <div className="expertise-health-canada-link">
                <a href="#expertise-canada-gov-logo">
                    <img src=".\svg\canadagovlogo.svg" 
                        alt="Health Canada" />
                </a>
            </div>

            <div className="expertise-health-canada-title">
            <h3>{healthCanada.title[language]}</h3>
            </div>

            <div className="expertise-health-canada-text-under-title">
                <p>{healthCanada.content[language]}</p>
            </div>
        </div>

        <div className="expertise-health-canada-image">
            <img src=".\photos\cerasp-image1-scaled-450x450.jpg" 
                alt="Health Canada Logo" />
        </div>
        </div>
    </div>
  );
};

export default ExpertiseHealthCanada;
