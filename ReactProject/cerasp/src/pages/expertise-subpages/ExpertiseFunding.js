import React, { useContext } from "react";
import "./css/ExpertiseFunding.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";

const ExpertiseFunding = () => {
  const { language } = useContext(LanguageContext);
  const funding = expertiseTranslations.funding;

  return (
    <div className="expertise-Funding">
        <SubPageHeader
              name={language === "fr" ? "AIDE AU FINANCEMENT" : "HELP WITH FUNDING"}
            />
      <div className="expertise-Funding-content">
        <div className="expertise-Funding-image">
          <div className="expertise-Funding-image-content">
            <StockImageFetch
              searchTerm="scientist working in a lab"
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
