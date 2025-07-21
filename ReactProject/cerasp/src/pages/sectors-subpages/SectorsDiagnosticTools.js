import React, { useContext } from "react";
import "./css/SectorsDiagnosticTools.css";
import { MessagesSquare } from "lucide-react";
import { LanguageContext } from "../../contexts/LanguageContext";
// import sectorsTranslations from "./sectors-translations.json";

const SectorsDiagnosticTools = () => {
  const { language } = useContext(LanguageContext);
  //   const support = sectorsTranslations.support;

  return (
    <div className="sectors-support-parent">
      <div className="sectors-support-panel">
        {/* Title at top left */}
        <div className="sectors-support-title">
          <h1>
            {language === "fr" ? "Outils de diagnostic" : "Diagnostic Tools"}
          </h1>
        </div>

        {/* <div className="sectors-support-icon">
          <MessagesSquare />
        </div> */}

        {/* Main text centered */}
        <div className="sectors-support-maintext">
          <p>
            {language === "fr"
              ? `Des diagnostics de laboratoire aux analyses sur le lieu de soins, nous contribuons au développement et à la validation d'outils de diagnostic essentiels aux soins de santé modernes. Notre objectif est de vous aider à commercialiser des diagnostics précis, fiables et conformes à la réglementation.`
              : `From laboratory diagnostics to point-of-care testing, we assist in the development and validation of diagnostic tools that are essential to modern healthcare. Our goal is to help you bring accurate, reliable, and regulatory-compliant diagnostics to market.`}
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

export default SectorsDiagnosticTools;
