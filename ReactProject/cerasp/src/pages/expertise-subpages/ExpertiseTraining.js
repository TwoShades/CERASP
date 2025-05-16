import React, { useContext } from 'react';
import './css/ExpertiseTraining.css';
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";

const ExpertiseTraining = () => {
  const { language } = useContext(LanguageContext);
  const training = expertiseTranslations.training;

  return (
    <div className="expertise-container">
      {/* Card 1 */}
      <div className="expertise-card">
        <div className="expertise-top">
          <h3>{training.card1.title[language]}</h3>
          <p>{training.card1.content[language]}</p>
        </div>
        <div className="expertise-bottom"></div>
      </div>

      {/* Card 2 - Inverted */}
      <div className="expertise-card inverted">
        <div className="expertise-light"></div>
        <div className="expertise-dark">
          <h3>{training.card2.title[language]}</h3>
          <p>{training.card2.content[language]}</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="expertise-card">
        <div className="expertise-top">
          <h3>{training.card3.title[language]}</h3>
          <p>{training.card3.content[language]}</p>
        </div>
        <div className="expertise-bottom"></div>
      </div>
    </div>
  );
};

export default ExpertiseTraining;
