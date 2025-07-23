import React, { useContext } from "react";
import "./css/ExpertiseScaleUp.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";

const ExpertiseScaleUp = () => {
  const { language } = useContext(LanguageContext);
  const scaleUpManufacturing = expertiseTranslations.scaleUpManufacturing;

  return (
    <div className="expertise-bioinformatics-layout">
      <div className="bioinfo-header">
        <SubPageHeader
          name={
            language === "fr"
              ? "Mise à l'échelle & préparation à la production"
              : "Scale-Up & Manufacturing Readiness"
          }
          extraContent={
            <div className="about-overview-header-text">
              <p>{scaleUpManufacturing.content[language]}</p>
            </div>
          }
        />
      </div>
      <div className="expertise-bioinformatics">
        {/* Background image container */}
        <div className="background-image-container">
          <StockImageFetch
            searchTerm="bioinformatics"
            imgSource="large"
            orientation="landscape"
            page={1}
            perPage={1}
          />
        </div>

        <div className="bioinfo-content">
          <div className="cards-container">
            <div className="fieldBox">
              <h2 className="title">
                {scaleUpManufacturing.fields.scaleUp.title[language]}
              </h2>
              <p className="desc">
                {scaleUpManufacturing.fields.scaleUp.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {scaleUpManufacturing.fields.testing.title[language]}
              </h2>
              <p className="desc">
                {scaleUpManufacturing.fields.testing.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {scaleUpManufacturing.fields.pilotBatching.title[language]}
              </h2>
              <p className="desc">
                {scaleUpManufacturing.fields.pilotBatching.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {scaleUpManufacturing.fields.techSupport.title[language]}
              </h2>
              <p className="desc">
                {scaleUpManufacturing.fields.techSupport.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {
                  scaleUpManufacturing.fields.processOptimization.title[
                    language
                  ]
                }
              </h2>
              <p className="desc">
                {scaleUpManufacturing.fields.processOptimization.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {scaleUpManufacturing.fields.troubleshooting.title[language]}
              </h2>
              <p className="desc">
                {scaleUpManufacturing.fields.troubleshooting.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {scaleUpManufacturing.fields.dataCollection.title[language]}
              </h2>
              <p className="desc">
                {scaleUpManufacturing.fields.dataCollection.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {scaleUpManufacturing.fields.gmpEnvironment.title[language]}
              </h2>
              <p className="desc">
                {scaleUpManufacturing.fields.gmpEnvironment.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {scaleUpManufacturing.fields.protocolReporting.title[language]}
              </h2>
              <p className="desc">
                {scaleUpManufacturing.fields.protocolReporting.desc[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseScaleUp;
