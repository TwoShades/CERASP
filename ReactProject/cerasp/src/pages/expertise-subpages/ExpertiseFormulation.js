import React, { useContext } from "react";
import "./css/ExpertiseFormulation.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";

const ExpertiseFormulation = () => {
  const { language } = useContext(LanguageContext);
  const formulation = expertiseTranslations.formulation;

  return (
    <div className="expertise-panel">
      <div className="left">
        <div className="circle" />
        <p className="caption">{formulation.title[language].toUpperCase()}</p>
      </div>

      <div className="right">
        <div className="fieldBox">
          <h2 className="title">{formulation.title[language]}</h2>
          <p className="desc">{formulation.content[language]}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseFormulation;
