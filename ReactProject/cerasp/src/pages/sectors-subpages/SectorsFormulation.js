import React, { useState, useEffect, useContext } from 'react';
import './css/SectorsFormulation.css';
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";

const SectorsFormulation = () => {
  const { language } = useContext(LanguageContext);
  const formulation = sectorsTranslations.formulation;
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
        <div className={`formulation-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="formulation-title">
            {formulation.title[language]}
          </h2>
          <div className="title-accent"></div>
        </div>

        {/* Main content card */}
        <div className={`formulation-card ${isVisible ? 'visible' : ''}`}>
          <div className="card-inner">
            <div className="content-section">
              <div className="icon-container">
                <div className="formulation-icon">🧪</div>
              </div>
              <p className="formulation-description">
                {formulation.content[language]}
              </p>
            </div>
            
            <div className="decorative-section">
              <div className="accent-line"></div>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span className="highlight-text">
                    <p>{formulation.card1.title[language]}</p>
                    <p>{formulation.card1.content[language]}</p>
                  </span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span className="highlight-text">
                    <p>{formulation.card2.title[language]}</p>
                    <p>{formulation.card2.content[language]}</p>
                  </span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span className="highlight-text">
                    <p>{formulation.card3.title[language]}</p>
                    <p>{formulation.card3.content[language]}</p>
                  </span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span className="highlight-text">
                    <p>{formulation.card4.title[language]}</p>
                    <p>{formulation.card4.content[language]}</p>
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

export default SectorsFormulation;