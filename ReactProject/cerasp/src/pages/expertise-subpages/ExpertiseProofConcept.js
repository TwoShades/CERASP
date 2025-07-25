import React, { useContext } from "react";
import "./css/ExpertiseProofConcept.css";
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

const ExpertiseProofConcept = () => {
  const { language } = useContext(LanguageContext);
  const proofConcept = expertiseTranslations.proofConcept;

  const steps = [
    {
      icon: FlaskConical,
      title: proofConcept.steps.formulate.title[language],
      description: proofConcept.steps.formulate.description[language],
      className: "step1",
    },
    {
      icon: Headphones,
      title: proofConcept.steps.support.title[language],
      description: proofConcept.steps.support.description[language],
      className: "step2",
    },
    {
      icon: ArrowRightLeft,
      title: proofConcept.steps.transfer.title[language],
      description: proofConcept.steps.transfer.description[language],
      className: "step3",
    },
    {
      icon: Settings,
      title: proofConcept.steps.select.title[language],
      description: proofConcept.steps.select.description[language],
      className: "step4",
    },
    {
      icon: Cog,
      title: proofConcept.steps.develop.title[language],
      description: proofConcept.steps.develop.description[language],
      className: "step5",
    },
  ];

  return (
    <div className="expertise-applied-layout">
      <div className="five-steps-grid-layout">
        <div className="proof-top-row">
          <SubPageHeader
            name={proofConcept.title[language]}
            extraContent={
              <div className="about-overview-header-text">
                <p>{proofConcept.content[language]}</p>
              </div>
            }
          />
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

        <div className="proof-bottom-row">
          <p>{proofConcept.bottom_text[language]}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseProofConcept;
