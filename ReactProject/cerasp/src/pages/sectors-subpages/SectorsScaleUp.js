import React, { useContext } from "react";
import "./css/SectorsScaleUp.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import sectorsTranslations from "./sectors-translation.json";

const SectorsScaleUp = () => {
  const { language } = useContext(LanguageContext);
  const scaleUp = sectorsTranslations.scaleUp;

  return (
    <div className="sectors-scale-up-layout">
      <section className="sectors-scale-up-container">
        <div
          className="visual-section"
          role="img"
          aria-label="sectors Visual Element"
        >
          <div className="sectors-scale-up-badge">
            <span className="emoji" role="img" aria-label="science emoji">
              🔬
            </span>
          </div>
        </div>

        <div className="scale-up-content-section">
          <article className="sectors-scale-up-card">
            <header>
              <h2>{scaleUp.title[language]}</h2>
            </header>
            <p>{scaleUp.content1[language].intro}</p>
            <ul>
              {scaleUp.content1[language].bullets.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="sectors-scale-up-card">
            <p>{scaleUp.content2[language].intro}</p>
            <ul>
              {scaleUp.content2[language].bullets.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};

export default SectorsScaleUp;
