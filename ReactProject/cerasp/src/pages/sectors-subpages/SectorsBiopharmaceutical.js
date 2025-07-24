import React, { useState, useEffect, useContext } from "react";
import "./css/SectorsBiopharmaceutical.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";

const SectorsBiopharmaceutical = () => {
  const { language } = useContext(LanguageContext);
  const biopharmaceutical = sectorsTranslations.biopharmaceutical;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="formulation-container">
      {/* Subtle background elements */}
      <div className="background-accent"></div>

      <div className="formulation-content">
        {/* Header */}
        <div className={`formulation-header ${isVisible ? "visible" : ""}`}>
          <h2 className="formulation-title">
            {biopharmaceutical.title[language]}
          </h2>
          <div className="title-accent"></div>
        </div>

        {/* Main content card */}
        <div className={`formulation-card ${isVisible ? "visible" : ""}`}>
          <div className="card-inner">
            <div className="content-section">
              <div className="icon-container">
                <div className="formulation-icon">🧪</div>
              </div>
              <p className="formulation-description">
                {biopharmaceutical.content[language]}
              </p>
            </div>

            <div className="decorative-section">
              <div className="accent-line"></div>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span className="highlight-text">
                    <p>
                      <strong>{biopharmaceutical.card1.title[language]}</strong>
                    </p>
                    <p>{biopharmaceutical.card1.content[language]}</p>
                  </span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span className="highlight-text">
                    <p>
                      <strong>{biopharmaceutical.card2.title[language]}</strong>
                    </p>
                    <p>{biopharmaceutical.card2.content[language]}</p>
                  </span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span className="highlight-text">
                    <p>
                      <strong>{biopharmaceutical.card3.title[language]}</strong>
                    </p>
                    <p>{biopharmaceutical.card3.content[language]}</p>
                  </span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span className="highlight-text">
                    <p>
                      <strong>{biopharmaceutical.card4.title[language]}</strong>
                    </p>
                    <p>{biopharmaceutical.card4.content[language]}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorsBiopharmaceutical;
