import React, { useContext } from "react";
import "./css/ExpertiseIdeation.css";
import "../_css/Subpage.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import { renderBullets } from "../../utils/renderBullets";
import RevealOnScroll from "../../components/uicomponents/RevealOnScroll";

const ExpertiseIdeation = () => {
  const { language } = useContext(LanguageContext);
  const ideation = expertiseTranslations.ideation;

  const title = ideation.title[language];
  const intro = ideation.intro[language];
  const content = ideation.content[language];

  return (
    <div className="subpage">
      <div className="subpage-overview">
        <RevealOnScroll direction="right" className="subpage-overview-intro">
          <h1>{title.toUpperCase()}</h1>
          <p>{intro}</p>
        </RevealOnScroll>
        {renderBullets(content)}
      </div>
    </div>
  );
};

export default ExpertiseIdeation;
