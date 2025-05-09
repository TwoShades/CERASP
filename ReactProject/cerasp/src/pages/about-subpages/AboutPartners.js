import React from "react";
import "./css/AboutPartners.css";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function AboutPartners() {
  const { language } = React.useContext(LanguageContext);

  return (
    <div className="about-partners">
      <hr></hr>
      <h1>
        {language === "en"
          ? "CERASP IS PARTNERING WITH"
          : "CERASP EST PARTENAIRE DE"}
      </h1>
      <div className="partners-cards">
        <div className="partner-card">
          <img
            className="partner-card-img"
            src="/logos/partners/cerasp-partners.jpg"
            alt="Partners"
          />
        </div>
        <hr></hr>
        <h1>
          {language === "en"
            ? "CERASP IS A PROUD MEMBER OF"
            : "CERASP EST UN FIER MEMBRE DE"}
        </h1>
        <div className="partner-card">
          <img
            className="partner-card-img"
            src="/logos/partners/cerasp-member.jpg"
            alt="Members"
          />
        </div>
        <hr></hr>
        <br></br>
      </div>
    </div>
  );
}
