import React, { useContext } from "react";
import "./css/ExpertiseGMP.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";

const ExpertiseGMP = () => {
  const { language } = useContext(LanguageContext);
  const gmp = expertiseTranslations.gmp_biomanufacturing;

  return (
    <div className="expertise-gmp">
      <SubPageHeader
              name={language === "fr" ? "BIOFABRICATION PRêTE POUR LES BPF ET PARTENARIATS STRATéGIQUES" : "GMP-READY BIOMANUFACTURING AND STRATEGIC PARTNERSHIPS"}
            />
      <div className="expertise-gmp-content">
        <div className="expertise-gmp-image">
          <div className="expertise-gmp-image-content">
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
            <p>{gmp.content[language]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseGMP;
