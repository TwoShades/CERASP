import React, { useContext } from "react";
import { ReactComponent as ContactSvg } from "../../svg/contact-us.svg";
import "./css/ContactIcon.css";
import { LanguageContext } from "../../contexts/LanguageContext";

const ContactIcon = ({ theme = "contact-icon-light" }) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className={`contact-icon-wrapper ${theme}`}>
      <div className="contact-icon-border">
        <ContactSvg className="contact-icon-svg" />
      </div>
      <div className="contact-icon-text">
        <h4>
          {language === "en"
            ? "Contact Us"
            : "Contactez-Nous"}
        </h4>
      </div>
    </div>
  );
};

export default ContactIcon;
