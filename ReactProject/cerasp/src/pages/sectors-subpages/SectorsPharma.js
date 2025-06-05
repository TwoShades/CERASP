import React, { useContext } from "react";
import "./css/SectorsPharma.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";

const SectorsPharma = () => {
  const { language } = useContext(LanguageContext);
  const pharma = sectorsTranslations.pharma;

  return (
    <div className="sectors-pharma-layout">
      <section className="sectors-pharma-container">
        <div
          className="visual-section"
          role="img"
          aria-label="sectors Visual Element"
        >
          <div className="sectors-pharma-badge">
            <span className="emoji" role="img" aria-label="science emoji">
              💊
            </span>
          </div>
        </div>

        <div className="pharma-content-section">
          <article className="sectors-pharma-card">
            <header>
              <h2>{pharma.title[language]}</h2>
            </header>
            <p>{pharma.content[language]}</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default SectorsPharma;
