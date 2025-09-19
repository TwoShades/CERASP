import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import Navigation from "./Navigation";
import "./css/Header.css";

const Header = () => {
  const { language, setLanguage } =
    useContext(LanguageContext);
  const { isMobile, isTablet } = useContext(
    ScreenSizeContext
  );

  return (
    <div className="layout-header">
      <div className="bg-test"></div>
      {!(isTablet || isMobile) && (
        <Link to="/">
          <img
            src="/logos/cerasplogo.png"
            alt="CERASP Logo"
            className="header-logo"
          />
        </Link>
      )}

      <Navigation />
      <a
        href="https://www.linkedin.com/company/cerasp/posts/?feedView=all"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/logos/linkedinlogo.png"
          alt="LinkedIn Logo"
          className="header-linkedin"
        />
      </a>
      <div className="language-switcher">
        <button
          className={`language-button ${
            language === "fr" ? "active" : ""
          }`}
          onClick={() => setLanguage("fr")}
        >
          FR
        </button>
        <div className="language-switcher-spacer">|</div>
        <button
          className={`language-button ${
            language === "en" ? "active" : ""
          }`}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default Header;
