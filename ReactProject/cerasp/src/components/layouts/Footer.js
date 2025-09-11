import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import "./css/Footer.css";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <div className="footer-logo">
        <div className="logo-icon">
          <img
            src="/logos/cerasplogo.png" // placeholder for your actual logo
            alt="CERASP Logo"
            width="200px"
          />
        </div>
      </div>

      <div className="footer-links">
        <h2>
          {language === "fr"
            ? "Suivez-nous sur"
            : "Follow us at"}
        </h2>
        <a
          href="https://www.linkedin.com/company/dummy-url"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <div className="footer-contact">
        <div className="address-lines">
          <span>7171 Rue Frederick Banting</span>
          <span>Saint-Laurent, QC</span>
          <span>H4S 1Z9</span>
          <span>(263) 362-2760</span>
          <span>info@cerasp.ca</span>
        </div>
        <div className="map-icon">
          <img
            src="/logos/google-maps.png"
            height="50px"
            width="50px"
            alt="CERASP Location"
          />
        </div>
      </div>

      <div className="footer-partners">
        <div className="contact-sponsor-logos">
          <h2 className="partner-with">
            {language === "fr"
              ? "CERASP est partenaire de :"
              : "CERASP is partnering with:"}
          </h2>
          <div className="partner-logos">
            <img
              className="partner-card-img"
              src="/logos/partners/cerasp-partner.jpg"
              alt="Partners"
            />
          </div>
          <h2 className="member-of">
            {language === "fr"
              ? "CERASP est un fier membre de :"
              : "CERASP is a proud member of:"}
          </h2>
          <div className="member-logos">
            <img
              className="partner-card-img"
              src="/logos/partners/cerasp-member.jpg"
              alt="Members"
            />
          </div>
        </div>
      </div>

      <div className="footer-privacy">
        <a
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          {language === "fr"
            ? "Politique de confidentialité"
            : "Privacy Policy"}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
