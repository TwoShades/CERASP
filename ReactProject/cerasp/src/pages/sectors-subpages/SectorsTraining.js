import React, { useContext } from "react";
import "./css/SectorsTraining.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";

const Sectorstraining = () => {
  const { language } = useContext(LanguageContext);
  const preform = sectorsTranslations.training;

  return (
    <div className="sectors-training-layout">
      <div className="sectors-training">
        <SubPageHeader
          name={
            language === "fr"
              ? "SOUTIEN AU PROGRAMME DE FORMATION"
              : "TRAINING PROGRAM SUPPORT"
          }
        />
        <div className="preform-header"></div>

        <div className="preform-content">
          <div className="preform-left">
            <div className="preform-image">
              <StockImageFetch
                searchTerm="technical training"
                imgSource="large"
                orientation="landscape"
                page={1}
                perPage={1}
              />
            </div>
            <div className="caption">{preform.content[language]}</div>
          </div>

          <div className="preform-right">
            <div className="fieldBox">
              <h2 className="title">
                {preform.fields.trainingSolutions.title[language]}
              </h2>
              <p className="desc">
                {preform.fields.trainingSolutions.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {preform.fields.competencyLearning.title[language]}
              </h2>
              <p className="desc">
                {preform.fields.competencyLearning.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {preform.fields.adaptableTraining.title[language]}
              </h2>
              <p className="desc">
                {preform.fields.adaptableTraining.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {preform.fields.empoweringTeams.title[language]}
              </h2>
              <p className="desc">
                {preform.fields.empoweringTeams.desc[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectorstraining;
