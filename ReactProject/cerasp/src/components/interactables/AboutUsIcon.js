import React, { useContext } from "react";
import { ReactComponent as AboutUsSvg } from "../../svg/about-us.svg";
import "./css/AboutUsIcon.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const AboutUsIcon = ({ theme = "about-us-icon-light" }) => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about"); // navigate to /about page
  };

  return (
    <div
      className={`about-us-icon-wrapper ${theme}`}
      onClick={handleClick} // attach click to wrapper
      style={{ cursor: "pointer" }} // optional: indicate clickable
    >
      <div className="about-us-icon-border">
        <AboutUsSvg className="about-us-icon-svg" />
      </div>
      <div className="about-us-icon-text">
        <h4>
          {language === "en" ? "About Us" : "À Propos"}
        </h4>
      </div>
    </div>
  );
};

export default AboutUsIcon;
