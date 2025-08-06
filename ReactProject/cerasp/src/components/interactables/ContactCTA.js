import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import "./css/ContactCTA.css";

const ContactCTA = ({ infoText = "d" }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="contact-cta">
      {language === "fr" ? <h1>CONTACTEZ-NOUS</h1> : <h1>CONTACT US</h1>}
      <p>{infoText}</p>
    </div>
  );
};

export default ContactCTA;
