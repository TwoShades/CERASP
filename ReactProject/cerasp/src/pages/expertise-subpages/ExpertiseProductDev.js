import React, { useState, useEffect, useContext } from "react";
import "./css/ExpertiseProductDev.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";

const ExpertiseProductDev = () => {
  const { language } = useContext(LanguageContext);
  const productDev = expertiseTranslations.productDev;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="training-container">
      {/* Subtle background elements */}
      <div className="background-accent"></div>

      <div className="training-content">
        {/* Header */}
        <div className={`training-header ${isVisible ? "visible" : ""}`}>
          <h2 className="training-title">{productDev.title[language]}</h2>
          <div className="title-accent"></div>
        </div>

        {/* Main content card */}
        <div className={`training-card ${isVisible ? "visible" : ""}`}>
          <div className="card-inner">
            <div className="content-section">
              <div className="icon-container">
                <div className="training-icon">🎓</div>
              </div>
              <p className="training-description">
                {productDev.content[language]}
              </p>
            </div>

            <div className="decorative-section">
              <div className="accent-line"></div>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span className="highlight-text">
                    {language === "en" ? "GMP Practices" : "Pratiques BPF"}
                  </span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span className="highlight-text">
                    {language === "en" ? "Bioprocessing" : "Bioprocédés"}
                  </span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span className="highlight-text">
                    {language === "en" ? "Quality Control" : "Contrôle Qualité"}
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

export default ExpertiseProductDev;
