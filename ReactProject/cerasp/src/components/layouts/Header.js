import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import Navigation from "./Navigation";
import "./css/Header.css";

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="layout-header">
      <Link to="/">
        <img
          src="/logos/cerasplogo.png"
          style={{ width: "150px", height: "auto" }}
          alt="CERASP Logo"
        />
      </Link>
      <Navigation />
      <div className="language-switcher">
        <button
          className={`language-button ${language === "fr" ? "active" : ""}`}
          onClick={() => setLanguage("fr")}
        >
          FR
        </button>
        <div className="language-switcher-spacer">|</div>
        <button
          className={`language-button ${language === "en" ? "active" : ""}`}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default Header;
