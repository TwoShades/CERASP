import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import "./css/ContactButton.css";
import { Mail } from "lucide-react";

const ContactButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const { isTablet } = useContext(ScreenSizeContext);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location, navigate]);

  const handleNavigateToSection = (section) => {
    navigate(location.pathname, { state: { scrollTo: section } });
  };

  return (
    <div
      className={`${isTablet ? "contact-button-mobile" : "contact-button"}`}
      onClick={() => handleNavigateToSection("contact-us-form")}
    >
      {isTablet ? (
        <Mail></Mail>
      ) : language === "fr" ? (
        "Contactez-nous"
      ) : (
        "Contact Us"
      )}
    </div>
  );
};

export default ContactButton;
