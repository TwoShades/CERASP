import React, { useContext } from "react";
import "./css/ExpertiseApplied.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";

const ExpertiseApplied = () => {
  const { language } = useContext(LanguageContext);
  const applied = expertiseTranslations.applied_research;

  return (
    <div className="five-steps-grid-layout">
      <div className="top-row">
        <h2>{applied.title[language]}</h2>
        <p>{applied.content[language]}</p>
      </div>
      <div className="step step1">
        <div className="icon">1</div>
        <div className="expertise-applied-title">FORMULATE</div>
        <div className="content">
          <p>
            Formulate, validate and prepare new products after the results of
            basic research or to find the right molecules.
          </p>
        </div>
      </div>
      <div className="step step2">
        <div className="icon">2</div>
        <div className="expertise-applied-title">SUPPORT</div>
        <div className="content">
          <p>
            Support the development of production processes through new
            processes, including standard operating procedures.
          </p>
        </div>
      </div>
      <div className="step step3">
        <div className="icon">3</div>
        <div className="expertise-applied-title">TRANSFER</div>
        <div className="content">
          <p>
            Transfer and adapt technological innovations for the development of
            scale-up pilot scale production.
          </p>
        </div>
      </div>
      <div className="step step4">
        <div className="icon">4</div>
        <div className="expertise-applied-title">SELECT</div>
        <div className="content">
          <p>
            Select and configure equipment for research and production from an
            Industry perspective.
          </p>
        </div>
      </div>
      <div className="step step5">
        <div className="icon">5</div>
        <div className="expertise-applied-title">DEVELOP</div>
        <div className="content">
          <p>Formulate and develop pilot processes, prototypes and batches.</p>
        </div>
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
