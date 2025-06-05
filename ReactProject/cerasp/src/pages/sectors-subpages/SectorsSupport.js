import React, { useContext } from "react";
import "./css/SectorsSupport.css";
import { MessagesSquare } from 'lucide-react';
import { LanguageContext } from "../../contexts/LanguageContext";
// import sectorsTranslations from "./sectors-translations.json";

const SectorsSupport = () => {
  const { language } = useContext(LanguageContext);
//   const support = sectorsTranslations.support;

  return (
    <div className="sectors-support-parent">
      <div className="sectors-support-panel">
        {/* Title at top left */}
        <div className="sectors-support-title">
          <h1>{language === "fr" ? "Support technique" : "Technical support"}</h1>
        </div>

        {/* <div className="sectors-support-icon">
          <MessagesSquare />
        </div> */}
        
        {/* Main text centered */}
        <div className="sectors-support-maintext">
          <p>
            {language === "fr"
              ? `Biolocaliser les composés médicaux fluorés en confirmant leur mode d'action, en utilisant 
                des technologies IRM propriétaires, formuler le composé fluoré dans une solution pour le 
                rendre injectable pour des tests sur des rats, et produire des micro-lots pour utilisation.`
              : `Biolocalize fluorinated medical compounds by confirming their mode of action using proprietary MRI technologies, formulate the fluorinated compound into a solution to make it injectable for testing on rats, and produce microbatches for use.`}
          </p>
        </div>
        {/* Optionally keep image section if needed */}
        {/* <div className="sectors-support-image-section">
          Lorem Ipsum
        </div> */}
      </div>
    </div>
  );
};

export default SectorsSupport;
