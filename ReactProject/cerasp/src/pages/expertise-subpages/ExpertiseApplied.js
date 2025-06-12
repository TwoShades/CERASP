import React, { useContext } from "react";
import "./css/ExpertiseApplied.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import SubPageHeader from "../../components/layouts/SubPageHeader";
import {
  FlaskConical,
  Headphones,
  ArrowRightLeft,
  Settings,
  Cog,
} from "lucide-react";

const ExpertiseApplied = () => {
  const { language } = useContext(LanguageContext);
  const applied = expertiseTranslations.applied_research;

  const steps = [
    {
      icon: FlaskConical,
      title: applied.steps.formulate.title[language],
      description: applied.steps.formulate.description[language],
      className: "step1",
    },
    {
      icon: Headphones,
      title: applied.steps.support.title[language],
      description: applied.steps.support.description[language],
      className: "step2",
    },
    {
      icon: ArrowRightLeft,
      title: applied.steps.transfer.title[language],
      description: applied.steps.transfer.description[language],
      className: "step3",
    },
    {
      icon: Settings,
      title: applied.steps.select.title[language],
      description: applied.steps.select.description[language],
      className: "step4",
    },
    {
      icon: Cog,
      title: applied.steps.develop.title[language],
      description: applied.steps.develop.description[language],
      className: "step5",
    },
  ];

  return (
    <div className="expertise-applied-layout">
      <div className="five-steps-grid-layout">
        <div className="top-row">
          <SubPageHeader name={applied.title[language].toUpperCase()} />

          {/* <p>{applied.content[language]}</p> */}
        </div>

        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.number} className={`step ${step.className}`}>
              {/* <div className="icon">{step.number}</div> */}
              <div className="expertise-applied-title">{step.title}</div>
              <div className="content">
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bottom-row">
          <p>{applied.bottom_text[language]}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseApplied;
