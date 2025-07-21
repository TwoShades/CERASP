import React, { useContext } from "react";
import "./css/SectorsPharmaceutical.css";
import StockImageFetch from "../../components/placeholders/StockImageFetch";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";

const SectorsPharmaceutical = () => {
  const { language } = useContext(LanguageContext);
  const pharmaceutical = sectorsTranslations.pharmaceutical;

  return (
    <div className="sectors-preformulation-layout">
      <div className="sectors-preformulation">
        <SubPageHeader
          name={language === "fr" ? "Pharmaceutique" : "Pharmaceutical"}
        />
        <div className="preform-header"></div>

        <div className="preform-content">
          <div className="preform-left">
            <div className="preform-image">
              <img
                src="/photos/FromOldSite/pexels-rfstudio-3825435-scaled-450x450.jpg"
                alt="Preformulation"
                className="sectors-preformulation-image"
              />
            </div>
            <div className="caption">{pharmaceutical.content[language]}</div>
          </div>

          <div className="preform-right">
            <div className="fieldBox">
              <h2 className="title">
                {pharmaceutical.fields.regulatoryCompliance.title[language]}
              </h2>
              <p className="desc">
                {pharmaceutical.fields.regulatoryCompliance.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {pharmaceutical.fields.qualityAssurance.title[language]}
              </h2>
              <p className="desc">
                {pharmaceutical.fields.qualityAssurance.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {pharmaceutical.fields.operationalEfficiency.title[language]}
              </h2>
              <p className="desc">
                {pharmaceutical.fields.operationalEfficiency.desc[language]}
              </p>
            </div>
            <div className="fieldBox">
              <h2 className="title">
                {pharmaceutical.fields.gmpReady.title[language]}
              </h2>
              <p className="desc">
                {pharmaceutical.fields.gmpReady.desc[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorsPharmaceutical;
