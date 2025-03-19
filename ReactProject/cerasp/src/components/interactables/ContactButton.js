import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./css/ContactButton.css";

const ContactButton = () => {
  const navigate = useNavigate(); // Get the navigate function
  const location = useLocation(); // Get the current location/path

  useEffect(() => {
    if (location.state?.scrollTo) {
      // Scroll to the element defined by `scrollTo`
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]); // Runs when the location changes (such as after navigation)

  const handleNavigateToSection = (section) => {
    // Use the current path and pass the scrollTo section in state
    navigate(location.pathname, { state: { scrollTo: section } });
  };

  return (
    <div
      className="contact-button"
      onClick={() => handleNavigateToSection("contact-us-form")} // Scroll to the "contact-us-form" section on the current page
    >
      Contact Us
    </div>
  );
};

export default ContactButton;
