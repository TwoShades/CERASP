import React, { useContext } from "react";
import "./css/SectorsCosmeceuticals.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";

const SectorsCosmeceuticals = () => {
  const { language } = useContext(LanguageContext);
  const cosmeceuticals =
    sectorsTranslations.dermo_cosmeceuticals;

  return (
    <div className="sectors-pharma-layout">
      <section className="sectors-pharma-container">
        <div
          className="visual-section"
          role="img"
          aria-label="sectors Visual Element"
        >
          <div className="sectors-pharma-badge">
            <span
              className="emoji"
              role="img"
              aria-label="science emoji"
            >
              💊
            </span>
          </div>
        </div>

        <div className="pharma-content-section">
          <article className="sectors-pharma-card">
            <header>
              <h2>{cosmeceuticals.title[language]}</h2>
            </header>
            <p>{cosmeceuticals.content[language]}</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default SectorsCosmeceuticals;
