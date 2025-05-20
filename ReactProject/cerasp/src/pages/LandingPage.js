import React, { useState, useEffect } from "react";
import "./Pages-css/LandingPage.css";
import ContactUs from "./ContactUs/ContactUs.js";
import Footer from "../components/layouts/Footer.js";

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
    <div className="landing page-content">
      <div
        className="background-blur"
        style={{
          backgroundImage: "url('/backgrounds/blueBacteriaBackground.jpg')",
        }}
      />


      <div className="content">
        {/* ===================
            =====LANDING ZONE=====
            =================== */}
        <div id="landing">
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
        <div id="overview">
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
        <div id="welcome">
          <div className="landing-welcome">
            <h2>Equipment Updates</h2>
            <p>
              Stay up to date with the latest tools and features in our platform.
            </p>
          </div>
        </div>

        <div id="contact-us-form">
          <ContactUs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
