import React, { useContext } from "react";
import "./css/SectorsMedicalDevices.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";

const SectorsMedicalDevices = () => {
  const { language } = useContext(LanguageContext);
  const medicalDevices = sectorsTranslations.medicalDevices;

  return (
    <div className="sectors-training-layout">
      <div className="sectors-training">
        <SubPageHeader
          name={language === "fr" ? "Dispositifs médicaux" : "Medical Devices"}
          extraContent={
            <div className="about-overview-header-text">
              <p>{medicalDevices.content[language]}</p>
            </div>
          }
        />
        <div className="preform-header"></div>

        <div className="preform-content">
          <div className="preform-left">
            <div className="preform-image">
              <img src="/photos/Picture-CERASP-7.png" alt="Preformulation" />
            </div>
            {/* <div className="caption">{preform.content[language]}</div> */}
          </div>

          <div className="preform-right">
            <div className="fieldBox">
              <h2 className="title">
                {medicalDevices.fields.trainingSolutions.title[language]}
              </h2>
              <p className="desc">
                {medicalDevices.fields.trainingSolutions.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {medicalDevices.fields.competencyLearning.title[language]}
              </h2>
              <p className="desc">
                {medicalDevices.fields.competencyLearning.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {medicalDevices.fields.adaptableTraining.title[language]}
              </h2>
              <p className="desc">
                {medicalDevices.fields.adaptableTraining.desc[language]}
              </p>
            </div>
            {/* <div className="fieldBox">
              <h2 className="title">
                {preform.fields.empoweringTeams.title[language]}
              </h2>
              <p className="desc">
                {preform.fields.empoweringTeams.desc[language]}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorsMedicalDevices;
