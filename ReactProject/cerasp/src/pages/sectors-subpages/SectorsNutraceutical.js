import React, { useContext } from "react";
import "./css/SectorsNutraceutical.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";
import {
  FlaskConical,
  Headphones,
  ArrowRightLeft,
  Settings,
  Cog,
} from "lucide-react";

const iconMap = [
  FlaskConical,
  Headphones,
  ArrowRightLeft,
  Settings,
  Cog,
  Cog,
  Cog,
];

const SectorsNutraceutical = () => {
  const { language } = useContext(LanguageContext);
  const nutraceutical = sectorsTranslations.nutraceutical;

  return (
    <div className="sectors-chemistry-layout">
      <div className="five-steps-grid-layout">
        <div className="top-row">
          <SubPageHeader name={nutraceutical.title[language]} />
        </div>

        <div className="steps-container">
          {nutraceutical.steps.map((step, index) => {
            const Icon = iconMap[index] || Cog;
            return (
              <div key={index} className={`step step${index + 1}`}>
                <div className="sectors-chemistry-title">
                  {step.title[language]}
                </div>
                {/* <div className="content">
                  <p>{step.description[language]}</p>
                </div> */}
              </div>
            );
          })}
        </div>

        {/* <div className="bottom-row">
          <h3>{chemistry.bottomRow[language].title}</h3>

          <div className="bottom-sections-grid">
            {chemistry.bottomRow[language].sections.map((section, idx) => (
              <div key={idx} className="bottom-section">
                <strong>{section.heading}</strong>
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SectorsNutraceutical;
