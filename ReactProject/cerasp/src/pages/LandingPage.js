import React, { useState, useEffect } from "react";
import ScrollPanel from "../components/layouts/ScrollPanel";
import "./css/LandingPage.css";

const LandingPage = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [showText, setShowText] = useState(false);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowLogo(false);
      setShowText(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setShowText(false);
      setShowPage(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="landing scroll-container">
      <ScrollPanel title="landing" id="landing">
        <div className="landing-page">
          {showLogo && (
            <img
              src="/logos/cerasplogo.png"
              alt="CERASP Logo"
              className="fade-in-out logo"
            />
          )}
          {showText && <h1 className="fade-in-out text">Welcome to CERASP</h1>}
          {showPage && <div className="main-content">Actual Landing Page Content</div>}
        </div>
      </ScrollPanel>

      {/* ===================
          =====OVERVIEW======
          =================== */}
      <ScrollPanel title="landing" id="overview">
        <p>OVERVIEW</p>
      </ScrollPanel>

      {/* ============================
          =====Equipment Updates======
          ============================ */}
      <ScrollPanel title="landing" id="welcome">
        <p>Equipment Updates</p>
      </ScrollPanel>
    </div>
  );
};

export default LandingPage;
