import React, { useContext } from "react";
import "./css/ExpertiseBioinformatics.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";

const ExpertiseBioinformatics = () => {
  const { language } = useContext(LanguageContext);
  const bioinfo = expertiseTranslations.bioinformatics;

  return (
    <div className="expertise-bioinformatics-layout">
      <div className="expertise-bioinformatics">
        <div className="bioinfo-header">
          <SubPageHeader
            name={language === "fr" ? "BIOINFORMATIQUE" : "BIOINFORMATICS"}
          />
        </div>

        <div className="bioinfo-content">
          <div className="bioinfo-left">
            <div className="bioinfo-image">
              <StockImageFetch
                searchTerm="bioinformatics"
                imgSource="large"
                orientation="landscape"
                page={1}
                perPage={1}
              />
            </div>
            <div className="caption">{bioinfo.content[language]}</div>
          </div>

          <div className="bioinfo-right">
            <div className="fieldBox">
              <h2 className="title">
                {bioinfo.fields.genomicDataAnalysis.title[language]}
              </h2>
              <p className="desc">
                {bioinfo.fields.genomicDataAnalysis.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {bioinfo.fields.comprehensiveDataInsights.title[language]}
              </h2>
              <p className="desc">
                {bioinfo.fields.comprehensiveDataInsights.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {bioinfo.fields.acceleratedResearch.title[language]}
              </h2>
              <p className="desc">
                {bioinfo.fields.acceleratedResearch.desc[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseBioinformatics;
