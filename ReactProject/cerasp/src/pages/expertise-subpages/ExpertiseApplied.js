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
  Cog 
} from "lucide-react";

const ExpertiseApplied = () => {
  const { language } = useContext(LanguageContext);
  const applied = expertiseTranslations.applied_research;

  const steps = [
    {
      icon: FlaskConical,
      title: "FORMULATE",
      description: "Formulate, validate and prepare new products after the results of basic research or to find the right molecules.",
      className: "step1"
    },
    {
      icon: Headphones,
      title: "SUPPORT",
      description: "Support the development of production processes through new processes, including standard operating procedures.",
      className: "step2"
    },
    {
      icon: ArrowRightLeft,
      title: "TRANSFER",
      description: "Transfer and adapt technological innovations for the development of scale-up pilot scale production.",
      className: "step3"
    },
    {
      icon: Settings,
      title: "SELECT",
      description: "Select and configure equipment for research and production from an Industry perspective.",
      className: "step4"
    },
    {
      icon: Cog,
      title: "DEVELOP",
      description: "Formulate and develop pilot processes, prototypes and batches.",
      className: "step5"
    }
  ];

  return (
    <div className="five-steps-grid-layout">
      <div className="top-row">
        <SubPageHeader
                name={language === "fr" ? "RECHERCHE APPLIQUÉ" : "APPLIED RESEARCH"}
              />
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
        <p>
          Our fields of expertise used for applied research projects enable us to
          propose innovative solutions for various technologies and product
          formats.
        </p>
      </div>
    </div>
  );
};

export default ExpertiseApplied;