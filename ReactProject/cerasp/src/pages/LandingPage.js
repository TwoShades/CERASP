import React, { useState, useEffect } from "react";
import ScrollPanel from "../components/layouts/ScrollPanel";
import "./css/LandingPage.css";

const LandingPage = () => {
  const [stage, setStage] = useState("logo");

  useEffect(() => {
    const timer1 = setTimeout(() => setStage("text"), 1000);
    const timer2 = setTimeout(() => setStage("page"), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div
      className="landing scroll-container"
      style={{
        backgroundImage: "url('/backgrounds/blueBacteriaBackground.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        filter: "blur(0px)",
      }}>

        {/* ===================
          =====LANDING ZONE=====
          =================== */}

      <ScrollPanel title="landing" id="landing">
        <div className="landing-bloc">
          {stage === "logo" && (
            <img
              src="/logos/cerasplogo.png"
              alt="CERASP Logo"
              className="fade logo"
            />
          )}
          {stage === "text" && (
            <h1 className="fade text">Welcome to CERASP</h1>
          )}
          {stage === "page" && (
            <div className="main-content-landing">
              <h2>Empowering the Future of BioManufacturing</h2>
              <p>
                CERASP provides cutting-edge VR and AR simulations to support
                modern biotech education, preparing students for real-world
                industry scenarios.
              </p>
              <button className="cta-button">Explore More</button>
            </div>
          )}
        </div>
      </ScrollPanel>

      {/* ===================
          =====OVERVIEW======
          =================== */}

      <ScrollPanel title="landing" id="overview">
        <div className="landing-overview">
          <h2>Overview</h2>
          <p>
            Learn more about our mission, our goals, and how CERASP is
            revolutionizing education through immersive technologies.
          </p>
        </div>
      </ScrollPanel>

      {/* ============================
          =====Equipment Updates======
          ============================ */}

      <ScrollPanel title="landing" id="welcome">
        <div className="landing-welcome">
          <h2>Equipment Updates</h2>
          <p>Stay up to date with the latest tools and features in our platform.</p>
        </div>
      </ScrollPanel>
    </div>
  );
};

export default LandingPage;
