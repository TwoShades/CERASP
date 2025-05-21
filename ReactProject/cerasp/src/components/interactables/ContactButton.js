import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import "./css/ContactButton.css";
import { Mail } from "lucide-react";

const ContactButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useContext(LanguageContext);
  const { isFullScreen } = useContext(ScreenSizeContext);

  useEffect(() => {
    if (location.state?.scrollTo) {
      if (isFullScreen) {
        // Scroll to the section on fullscreen
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      // Clear the navigation state after scrolling
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate, isFullScreen]);

  const handleClick = () => {
    if (isFullScreen) {
      // Navigate to contact-us-form section (triggers scrolling in useEffect)
      navigate(location.pathname, { state: { scrollTo: "contact-us-form" } });
    } else {
      // Scroll immediately to bottom, no navigation
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${
        !isFullScreen ? "contact-button-mobile" : "contact-button"
      }`}
      onClick={handleClick}
    >
      {!isFullScreen ? (
        <Mail />
      ) : language === "fr" ? (
        "Contactez-nous"
      ) : (
        "Contact Us"
      )}
    </div>
  );
};

export default ContactButton;
