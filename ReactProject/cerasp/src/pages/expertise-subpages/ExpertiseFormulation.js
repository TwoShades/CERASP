import React, { useContext } from "react";
import "./css/ExpertiseFormulation.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";

const ExpertiseFormulation = () => {
  const { language } = useContext(LanguageContext);
  const formulation = expertiseTranslations.formulation;

  return (
    <div className="expertise-formulation-layout">
      <section className="expertise-formulation-container">
        <div
          className="visual-section"
          role="img"
          aria-label="Expertise Visual Element"
        >
          <div className="expertise-formulation-badge">
            <span className="emoji" role="img" aria-label="science emoji">
              🧪
            </span>
          </div>
        </div>

        <div className="formulation-content-section">
          <article className="expertise-formulation-card">
            <header>
              <h2>{formulation.title[language]}</h2>
            </header>
            <p>{formulation.content[language]}</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ExpertiseFormulation;
