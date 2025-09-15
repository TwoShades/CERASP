import React, { useContext } from "react";
import "./css/ExpertiseIdeation.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";

const ExpertiseIdeation = () => {
  const { language } = useContext(LanguageContext);
  const ideation = expertiseTranslations.ideation;
  const { overview, capabilities, collaboration } = ideation.content[language];

  // Util function to group and format bullet sections
  const renderBullets = (arr, keyPrefix) =>
    arr.map((_, idx) => {
      if (idx % 2 !== 0) return null;
      return (
        <div key={`${keyPrefix}-${idx}`} className="bullet-point">
          <h4>{arr[idx]}</h4> {arr[idx + 1]}
        </div>
      );
    });

  return (
    <div className="expertise-gmp">
      <div className="expertise-gmp-content">
        <SubPageHeader
          name={ideation.title[language]}
          extraContent={
            <div className="about-overview-header-text">
              <p>
                {ideation.sub1[language]} {ideation.sub2[language]}
              </p>
              <p>{ideation.sub3[language]}</p>
            </div>
          }
        />

        {/* Hero Section with Image */}
        <div className="gmp-hero-section">
          <div className="gmp-hero-image">
            <img src="/photos/Picture-CERASP-12.jpg" alt="Preformulation" />
          </div>
        </div>

        <div className="gmp-cards-container">
          {/* Overview Card */}
          <div className="gmp-card overview-card">
            <div className="card-header">
              <div className="card-icon"></div>
            </div>
            <div className="card-content">
              {renderBullets(overview, "overview")}
            </div>
          </div>

          {/* Capabilities Card */}
          <div className="gmp-card overview-card">
            <div className="card-header">
              <div className="card-icon"></div>
            </div>
            <div className="card-content">
              {renderBullets(capabilities, "capability")}
            </div>
          </div>

          {/* Collaboration Card */}
          <div className="gmp-card overview-card">
            <div className="card-header">
              <div className="card-icon"></div>
            </div>
            <div className="card-content">
              {renderBullets(collaboration, "collab")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseIdeation;
