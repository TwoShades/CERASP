import React, { useState, useEffect } from "react";
import "./Pages-css/LandingPage.css";
import ContactUsForm from "../components/panels/ContactUsForm";

const LandingPage = () => {
  const [stage, setStage] = useState("logo");

  useEffect(() => {
    // set header to false
    const timer1 = setTimeout(() => setStage("text"), 1000);
    const timer2 = setTimeout(() => setStage("page"), 2000);

    return () => {
      // set header to true
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
      }}
    >
      {/* ===================
          =====LANDING ZONE=====
          =================== */}

      <div title="landing" id="landing">
        <div className="landing-bloc">
          {stage === "logo" && (
            <img
              src="/logos/cerasplogo.png"
              alt="CERASP Logo"
              className="fade logo"
            />
          )}
          {stage === "text" && <h1 className="fade text">Welcome to CERASP</h1>}
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
      </div>

      {/* ===================
          =====OVERVIEW======
          =================== */}

      <div title="landing" id="overview">
        <div className="landing-overview">
          <h2>Overview</h2>
          <p>
            Learn more about our mission, our goals, and how CERASP is
            revolutionizing education through immersive technologies.
          </p>
        </div>
      </div>

      {/* ============================
          =====Equipment Updates======
          ============================ */}

      <div title="landing" id="welcome">
        <div className="landing-welcome">
          <h2>Equipment Updates</h2>
          <p>
            Stay up to date with the latest tools and features in our platform.
          </p>
        </div>
      </div>

      <div title="landing" id="contact-us-form">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default LandingPage;
