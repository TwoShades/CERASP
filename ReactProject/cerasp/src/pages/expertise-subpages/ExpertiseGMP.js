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
      <div className="expertise-gmp-content">
        <SubPageHeader
          name={gmp.title[language]}
          extraContent={
            <div className="about-overview-header-text">
              <p>{gmp.sub1[language]}</p>
              <p>{gmp.sub2[language]}</p>
              <p>{gmp.sub3[language]}</p>
            </div>
          }
        />
        {/* Hero Section with Image */}
        <div className="gmp-hero-section">
          <div className="gmp-hero-image">
            <StockImageFetch
              searchTerm="pills"
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
              <div className="card-icon"></div>
            </div>
            <div className="card-content">
              {overview.map((point, idx) => (
                <div key={`overview-${idx}`} className="bullet-point">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="gmp-card overview-card">
            <div className="card-header">
              <div className="card-icon"></div>
            </div>
            <div className="card-content">
              {capabilities.map((point, idx) => (
                <div key={`capability-${idx}`} className="bullet-point">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="gmp-card overview-card">
            <div className="card-header">
              <div className="card-icon"></div>
            </div>
            <div className="card-content">
              {collaboration.map((point, idx) => (
                <div key={`collab-${idx}`} className="bullet-point">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseGMP;
