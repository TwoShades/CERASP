import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import "./css/ExpertiseOverview.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import expertiseTranslations from "./expertise-translations.json";

const ExpertiseOverview = () => {
  const { language } = useContext(LanguageContext);
  const overview = expertiseTranslations.overview;

  return (
    <div className="expertise-overview">
      <div className="expertise-overview-title">
        <h1>{overview.title[language]}</h1>
        <p>{overview.content[language]}</p>
      </div>

      <div className="expertise-overview-content">
        <div className="expertise-overview-card">
          <StockImageFetch
            searchTerm="microscope"
            imgSource="large"
            orientation="portrait"
            page={1}
            perPage={1}
          />
        </div>

        <div className="expertise-overview-card">
          <StockImageFetch
            searchTerm="microscope"
            imgSource="large"
            orientation="portrait"
            page={1}
            perPage={1}
          />
        </div>

        <div className="expertise-overview-card">
          <StockImageFetch
            searchTerm="microscope"
            imgSource="large"
            orientation="portrait"
            page={1}
            perPage={1}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpertiseOverview;
