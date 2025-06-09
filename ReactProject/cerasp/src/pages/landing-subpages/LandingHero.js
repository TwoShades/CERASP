import React, { useState, useEffect, useContext } from "react";
import "./css/LandingHero.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import heroTranslations from "./landing-translations.json";

const LandingHero = () => {
  const { language } = useContext(LanguageContext);
  const t = heroTranslations[language];
  const [stage, setStage] = useState("logo");

  useEffect(() => {
    const timer1 = setTimeout(() => setStage("text"), 1000);
    const timer2 = setTimeout(() => setStage("page"), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    if (stage !== "page") return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const shapes = document.querySelectorAll(".shape");

      shapes.forEach((shape, index) => {
        const speed = 0.5 + index * 0.1;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stage]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="hero-container" id="heroContainer">
        <div className="geometric-bg"></div>
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="hero-content">
          {stage === "text" && <h1 className="fade text">Welcome to CERASP</h1>}

          {stage === "page" && (
            <>
              <img
                src="/logos/cerasplogo.png"
                alt="CERASP Logo"
                className="fade logo"
              />
              <p className="tagline">{t.tagline}</p>
            </>
          )}
        </div>

        {stage === "page" && (
          <div className="scroll-indicator">
            {/* <span>{t.scroll}</span> */}
          </div>
        )}
      </div>
    </>
  );
};

export default LandingHero;
