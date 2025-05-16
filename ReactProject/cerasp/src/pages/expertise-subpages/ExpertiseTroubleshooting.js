import React, { useContext } from "react";
import "./css/ExpertiseTroubleshooting.css";
import { MessagesSquare } from 'lucide-react';
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";

const ExpertiseTroubleshooting = () => {
  const { language } = useContext(LanguageContext);
  const troubleshooting = expertiseTranslations.troubleshooting;

  return (
    <div className="expertise-troubleshooting-parent">
      <div className="expertise-troubleshooting-panel">
        {/* Title at top left */}
        <div className="expertise-troubleshooting-title">
          <h1>{troubleshooting.title[language]}</h1>
        </div>

        {/* <div className="expertise-troubleshooting-icon">
          <MessagesSquare />
        </div> */}
        
        {/* Main text centered */}
        <div className="expertise-troubleshooting-maintext">
          <p>{troubleshooting.content[language]}</p>
        </div>
        {/* Optionally keep image section if needed */}
        {/* <div className="expertise-troubleshooting-image-section">
          Lorem Ipsum
        </div> */}
      </div>
    </div>
  );
};

export default ExpertiseTroubleshooting;
