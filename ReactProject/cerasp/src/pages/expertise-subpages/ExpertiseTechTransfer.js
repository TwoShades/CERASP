import React, { useContext } from "react";
import { Database, Activity, BarChart2, Zap } from "lucide-react";
import "./css/ExpertiseTechTransfer.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";

const ExpertiseTechTransfer = () => {
  const { language } = useContext(LanguageContext);
  const techTransfer = expertiseTranslations.techTransfer;
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
          <h1 className="main-title">{techTransfer.title[language]}</h1>
          <p className="main-description">{techTransfer.content[language]}</p>

          <div className="numeric-feature-grid">
            <div className="numeric-feature-item">
              <div className="numeric-feature-icon">
                <Database size={24} />
              </div>
              <div className="numeric-feature-content">
                <h3>{techTransfer.features.training.title[language]}</h3>
                <p>{techTransfer.features.training.description[language]}</p>
              </div>
            </div>

            <div className="numeric-feature-item">
              <div className="numeric-feature-icon">
                <Activity size={24} />
              </div>
              <div className="numeric-feature-content">
                <h3>{techTransfer.features.rndSupport.title[language]}</h3>
                <p>{techTransfer.features.rndSupport.description[language]}</p>
              </div>
            </div>

            <div className="numeric-feature-item">
              <div className="numeric-feature-icon">
                <BarChart2 size={24} />
              </div>
              <div className="numeric-feature-content">
                <h3>{techTransfer.features.regAffairs.title[language]}</h3>
                <p>{techTransfer.features.regAffairs.description[language]}</p>
              </div>
            </div>

            <div className="numeric-feature-item">
              <div className="numeric-feature-icon">
                <Zap size={24} />
              </div>
              <div className="numeric-feature-content">
                <h3>{techTransfer.features.fullPackage.title[language]}</h3>
                <p>{techTransfer.features.fullPackage.description[language]}</p>
              </div>
            </div>

            <div className="numeric-feature-item">
              <div className="numeric-feature-icon">
                <Zap size={24} />
              </div>
              <div className="numeric-feature-content">
                <h3>{techTransfer.features.submission.title[language]}</h3>
                <p>{techTransfer.features.submission.description[language]}</p>
              </div>
            </div>

            <div className="numeric-feature-item">
              <div className="numeric-feature-icon">
                <Zap size={24} />
              </div>
              <div className="numeric-feature-content">
                <h3>{techTransfer.features.healthCanada.title[language]}</h3>
                <p>
                  {techTransfer.features.healthCanada.description[language]}
                </p>
              </div>
            </div>

            <div className="numeric-feature-item">
              <div className="numeric-feature-icon">
                <Zap size={24} />
              </div>
              <div className="numeric-feature-content">
                <h3>{techTransfer.features.gmpReady.title[language]}</h3>
                <p>{techTransfer.features.gmpReady.description[language]}</p>
              </div>
            </div>

            <div className="numeric-feature-item">
              <div className="numeric-feature-icon">
                <Zap size={24} />
              </div>
              <div className="numeric-feature-content">
                <h3>{techTransfer.features.research.title[language]}</h3>
                <p>{techTransfer.features.research.description[language]}</p>
              </div>
            </div>

            <div className="numeric-feature-item">
              <div className="numeric-feature-icon">
                <Zap size={24} />
              </div>
              <div className="numeric-feature-content">
                <h3>{techTransfer.features.virtualReality.title[language]}</h3>
                <p>
                  {techTransfer.features.virtualReality.description[language]}
                </p>
              </div>
            </div>
          </div>

          {/* <button className="learn-more-btn">{numeric.button[language]}</button> */}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseTechTransfer;
