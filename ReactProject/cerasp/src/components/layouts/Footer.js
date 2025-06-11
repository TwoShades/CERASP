import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import "./css/Footer.css";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="made-by">
          <p>
            {language === "fr"
              ? "Réalisé par Samuel Rivest et Nick Pelletier"
              : "Made by Samuel Rivest & Nick Pelletier"}
          </p>
        </div>
        <div className="copyright">
          <p>
            {language === "fr"
              ? "Droits d’auteur © 2019 - 2025 CERASP. Tous droits réservés."
              : "Copyrights © 2019 - 2025 CERASP All Rights Reserved"}
          </p>
        </div>
        <div className="privacy">
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            {language === "fr"
              ? "Politique de confidentialité"
              : "Privacy Policy"}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
