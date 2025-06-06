import React, { useContext } from "react";
import "./css/SectorsPreformulation.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";

const SectorsPreformulation = () => {
  const { language } = useContext(LanguageContext);
  const preform = sectorsTranslations.preformulation;
  
  return (
    <div className="sectors-preformulation-layout">
    <div className="sectors-preformulation">
      <SubPageHeader
                name={language === "fr" ? "PRÉFORMULATION" : "PREFORMULATION"}
              />
      <div className="preform-header">
        
      </div>
      
      <div className="preform-content">
        <div className="preform-left">
          <div className="preform-image">
            <StockImageFetch
              searchTerm="microscope"
              imgSource="large"
              orientation="landscape"
              page={1}
              perPage={1}
            />
          </div>
          <div className="caption">
            {preform.content[language]}
          </div>
          
        </div>
        
        <div className="preform-right">
          <div className="fieldBox">
            <h2 className="title">{preform.fields.ingredientSelection.title[language]}</h2>
            <p className="desc">
              {preform.fields.ingredientSelection.desc[language]}
            </p>
          </div>
          <div className="fieldBox">
            <h2 className="title">{preform.fields.processOptimization.title[language]}</h2>
            <p className="desc">
              {preform.fields.processOptimization.desc[language]}
            </p>
          </div>
          <div className="fieldBox">
            <h2 className="title">{preform.fields.dataIntegration.title[language]}</h2>
            <p className="desc">
              {preform.fields.dataIntegration.desc[language]}
            </p>
          </div>
          <div className="fieldBox">
            <h2 className="title">{preform.fields.rdSupport.title[language]}</h2>
            <p className="desc">
              {preform.fields.rdSupport.desc[language]}
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SectorsPreformulation;