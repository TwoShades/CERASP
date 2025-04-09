import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ScreenSizeContext } from "../../hooks/ScreenSizeContext"; // Import the context
import "./css/ContactButton.css";

const ContactButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useContext(ScreenSizeContext); // Access the isMobile context value

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const handleNavigateToSection = (section) => {
    navigate(location.pathname, { state: { scrollTo: section } });
  };

  return (
    <div
      className={`${isMobile ? "contact-button-mobile" : "contact-button"}`}
      onClick={() => handleNavigateToSection("contact-us-form")}
    >
      {isMobile ? (
        <span role="img" aria-label="phone">
          📱
        </span>
      ) : (
        "Contact Us"
      )}
    </div>
  );
};

export default ContactButton;
