import React, { useContext } from "react";
import "./css/ExpertiseGMP.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";

const ExpertiseGMP = () => {
  const { language } = useContext(LanguageContext);
  const gmp = expertiseTranslations.gmp_biomanufacturing;
  const { overview, capabilities, collaboration } = gmp.content[language];

  return (
    <div className="expertise-gmp">
      <SubPageHeader name={gmp.title[language]} />

      <div className="expertise-gmp-content">
        {/* Hero Section with Image */}
        <div className="gmp-hero-section">
          <div className="gmp-hero-image">
            <StockImageFetch
              searchTerm="biologist"
              imgSource="large"
              orientation="landscape"
              page={1}
              perPage={1}
            />
          </div>
        </div>

        <div className="gmp-cards-container">
          {/* Overview Card */}
          <div className="gmp-card overview-card">
            <div className="card-header">
              <div className="card-icon">🏢</div>
            </div>
            <div className="card-content">
              {overview.map((point, idx) => (
                <div key={`overview-${idx}`} className="bullet-point">• {point}</div>
              ))}
            </div>
          </div>

          {/* Capabilities Card */}
          <div className="gmp-card capabilities-card">
            <div className="card-header">
              <div className="card-icon">🧬</div>
            </div>
            <div className="card-content">
              <div className="bullet-point">• {language === "fr" ? "Capacités :" : "Capabilities include:"}</div>
              <div className="sub-bullet-points">
                {capabilities.map((item, idx) => (
                  <div key={`capability-${idx}`} className="sub-bullet">o {item}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Collaboration Card */}
          <div className="gmp-card collaboration-card">
            <div className="card-header">
              <div className="card-icon">🤝</div>
            </div>
            <div className="card-content">
              {collaboration.map((item, idx) => (
                <div key={`collab-${idx}`} className="bullet-point">• {item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseGMP;
