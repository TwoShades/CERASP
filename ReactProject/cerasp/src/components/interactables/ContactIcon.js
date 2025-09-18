import React, { useContext } from "react";
import { ReactComponent as ContactSvg } from "../../svg/contact-us.svg";
import "./css/ContactIcon.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import useLenis from "../../hooks/useLenis";
import { useNavigate } from "react-router-dom";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";

const ContactIcon = ({
  theme = "contact-icon-light",
  className = "",
}) => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const { scrollToTopWithLenis } = useLenis();
  const { isMobile } = useContext(ScreenSizeContext);

  const handleClick = () => {
    scrollToTopWithLenis();
    navigate("/contact-us");
  };

  return (
    !isMobile && (
      <div
        className={`contact-icon-wrapper ${theme} ${className}`}
        onClick={handleClick}
      >
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
    )
  );
};
export default ContactIcon;
