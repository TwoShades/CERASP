import React, { useState, useEffect } from "react";
import "./Pages-css/LandingPage.css";
import ContactUs from "./ContactUs/ContactUs.js";
import Footer from "../components/layouts/Footer.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import UnderConstruction from "../components/layouts/UnderConstruction.js";
import scrollToTop from "../utils/scrollToTop.js";

import LandingHero from "./landing-subpages/LandingHero.js";
import LandingAboutUs from "./landing-subpages/LandingAboutUs.js";
import LandingExpertise from "./landing-subpages/LandingExpertise.js";
import LandingSectors from "./landing-subpages/LandingSectors.js";
import LandingProjects from "./landing-subpages/LandingProjects.js";
import LandingNews from "./landing-subpages/LandingNews.js";

const LandingPage = () => {
  useScrollToPanel();
  const [stage, setStage] = useState("logo");

  useEffect(() => {
    scrollToTop();
    const timer1 = setTimeout(() => setStage("text"), 1000);
    const timer2 = setTimeout(() => setStage("page"), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="landing page-content">
      <div className="content">
        {/* ===================
            =====LANDING ZONE=====
            =================== */}
        <div id="landing-hero">
          <LandingHero />
        </div>

        <div id="landing-about">
          <LandingAboutUs />
        </div>

        <div id="landing-expertise">
          <LandingExpertise />
        </div>

        <div id="landing-sectors">
          <LandingSectors />
        </div>

        <div id="landing-projects">
          <LandingProjects />
        </div>

        <div id="landing-projects">
          <LandingNews />
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
