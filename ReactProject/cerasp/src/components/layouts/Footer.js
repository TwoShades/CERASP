import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext.js";
import "./css/Footer.css";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isDesktop } = useContext(
    ScreenSizeContext
  );

  return (
    <footer className="footer">
      {!isMobile && (
        <div className="footer-logo">
          <div className="logo-icon">
            <Link to="/">
              <img
                src="/logos/cerasplogo.png"
                alt="CERASP Logo"
                width="200px"
              />
            </Link>
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
        </div>
      )}
      <div className="footer-links-and-contact">
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/company/cerasp/posts/?feedView=all"
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
            <a
              href="https://maps.app.goo.gl/RT5mEJW8QHzFsext5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logos/google-maps.png"
                height="50px"
                width="50px"
                alt="CERASP Location"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-partners">
        <div className="contact-sponsor-logos">
          <h2 className="partner-with">
            {language === "fr"
              ? "CERASP est partenaire de :"
              : "CERASP is a partner of:"}
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
            {isMobile && (
              <div className="footer-privacy-mobile">
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
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
