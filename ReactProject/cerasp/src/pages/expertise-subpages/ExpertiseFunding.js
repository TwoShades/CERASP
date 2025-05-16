import React, { useContext } from "react";
import "./css/ExpertiseFunding.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";

const ExpertiseFunding = () => {
  const { language } = useContext(LanguageContext);
  const funding = expertiseTranslations.funding;

  return (
    <div className="expertise-Funding">
      <h2 className="feature-title">{funding.title[language]}</h2>
      <div className="expertise-Funding-content">
        <div className="expertise-Funding-image">
          <div className="expertise-Funding-image-content">
            <StockImageFetch
              searchTerm="biologist"
              imgSource="large"
              orientation="landscape"
              page={1}
              perPage={1}
            />
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-text">
            <p>{funding.content[language]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseFunding;
