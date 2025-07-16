import React, { useContext } from "react";
import { Database, Activity, BarChart2, Zap } from "lucide-react";
import "./css/ExpertiseNumeric.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";

const ExpertiseNumeric = () => {
  const { language } = useContext(LanguageContext);
  const numeric = expertiseTranslations.numeric_healthcare;
  const performanceData = [
    {
      name: { en: "Patient Outcomes", fr: "Résultats des patients" },
      value: 87,
    },
    { name: { en: "Cost Efficiency", fr: "Efficacité des coûts" }, value: 92 },
    { name: { en: "Data Security", fr: "Sécurité des données" }, value: 95 },
    {
      name: { en: "User Satisfaction", fr: "Satisfaction des utilisateurs" },
      value: 89,
    },
  ];

  return (
    <div className="expertise-numeric-container">
      <div className="expertise-numeric-right">
        <div className="content-block">
          <h1 className="main-title">{numeric.title[language]}</h1>
          <p className="main-description">{numeric.content[language]}</p>

          <div className="numeric-feature-grid">
            <div className="numeric-feature-item">
              <div className="numeric-feature-icon">
                <Database size={24} />
              </div>
              <div className="numeric-feature-content">
                <h3>{numeric.features.data.title[language]}</h3>
                <p>{numeric.features.data.description[language]}</p>
              </div>
            </div>

            <div className="numeric-feature-item">
              <div className="numeric-feature-icon">
                <Activity size={24} />
              </div>
              <div className="numeric-feature-content">
                <h3>{numeric.features.monitoring.title[language]}</h3>
                <p>{numeric.features.monitoring.description[language]}</p>
              </div>
            </div>

            <div className="numeric-feature-item">
              <div className="numeric-feature-icon">
                <BarChart2 size={24} />
              </div>
              <div className="numeric-feature-content">
                <h3>{numeric.features.predictive.title[language]}</h3>
                <p>{numeric.features.predictive.description[language]}</p>
              </div>
            </div>

            <div className="numeric-feature-item">
              <div className="numeric-feature-icon">
                <Zap size={24} />
              </div>
              <div className="numeric-feature-content">
                <h3>{numeric.features.integration.title[language]}</h3>
                <p>{numeric.features.integration.description[language]}</p>
              </div>
            </div>
          </div>

          {/* <button className="learn-more-btn">{numeric.button[language]}</button> */}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseNumeric;
