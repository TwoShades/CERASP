import React, { useContext } from "react";
import "./css/ExpertiseIdeation.css";
import "../_css/Subpage.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";
import { renderBullets } from "../../utils/renderBullets";
import RevealOnScroll from "../../components/uicomponents/RevealOnScroll";
import ContactCTA from "../../components/interactables/ContactCTA";

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
        <RevealOnScroll direction="left" className="subpage-overview-image">
          <img src="/photos/FromOldSite/AdobeStock_142270277__-scaled.jpg" alt="Biotech facility" id="expertise-intro-img" height="600" />
        </RevealOnScroll>
        {renderBullets(content, "Our Expertise Includes")}

        <ContactCTA infoText="////We can add custom text into each contact form; we can also set a default call-to-action here if we choose not to include a custom text.////" />
      </div>
    </div>
  );
};

export default ExpertiseIdeation;
