import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import "./css/ExpertiseOverview.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import expertiseTranslations from "./expertise-translations.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";

const ExpertiseOverview = () => {
  const { language } = useContext(LanguageContext);
  const overview = expertiseTranslations.overview;

  const expertiseCards = [
    {
      searchTerm: "microscope",
      title: "Microscopy & Analysis",
      description: "Advanced microscopic techniques for detailed molecular and cellular analysis."
    },
    {
      searchTerm: "chemistry",
      title: "Chemical Research",
      description: "Innovative chemical processes and formulation development for cutting-edge solutions."
    },
    {
      searchTerm: "microbe",
      title: "Microbial Studies",
      description: "Comprehensive microbial research and biotechnology applications."
    }
  ];

  return (
    <div className="expertise-overview">
      <div className="expertise-overview-title">
        <SubPageHeader
                name={language === "fr" ? "ACCEUIL" : "OVERVIEW"}
              />
        <p>{overview.content[language]}</p>
      </div>
      
      <div className="expertise-overview-content">
        {expertiseCards.map((card, index) => (
          <div key={index} className="expertise-overview-card">
            <div className="stock-image-container">
              <StockImageFetch
                searchTerm={card.searchTerm}
                imgSource="large"
                orientation="portrait"
                page={1}
                perPage={1}
              />
            </div>
            
            <div className="card-overlay">
              <div className="card-title">{card.title}</div>
              <div className="card-description">{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseOverview;