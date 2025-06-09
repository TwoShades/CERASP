import React, { useState, useEffect } from "react";
import "./Pages-css/LandingPage.css";
import ContactUs from "./ContactUs/ContactUs.js";
import Footer from "../components/layouts/Footer.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import UnderConstruction from "../components/layouts/UnderConstruction.js";

import LandingHero from "./landing-subpages/LandingHero.js";

const LandingPage = () => {
  useScrollToPanel();

  return (
    <div className="landing page-content">
      <div id="landing-hero">
        <LandingHero />

import scrollToTop from "../utils/scrollToTop.js";

const LandingPage = () => {
  scrollToTop();
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
            {stage === "text" && (
              <h1 className="fade text">Welcome to CERASP</h1>
            )}
            {stage === "page" && (
              <div className="main-content-landing">
                <UnderConstruction />
              </div>
            )}
          </div>
        </div>

        {/* ===================
            =====OVERVIEW======
            =================== */}
        {/* <div id="overview">
          <div className="landing-overview">
            <h2>Overview</h2>
            <p>
              Learn more about our mission, our goals, and how CERASP is
              revolutionizing education through immersive technologies.
            </p>
          </div>
        </div> */}

        {/* ============================
            =====Equipment Updates======
            ============================ */}
        {/* <div id="welcome">
          <div className="landing-welcome">
            <h2>Equipment Updates</h2>
            <p>
              Stay up to date with the latest tools and features in our platform.
            </p>
          </div>
        </div> */}

        <div id="contact-us-form">
          <ContactUs />
        </div>

      </div>
      <div id="contact-us-form">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
