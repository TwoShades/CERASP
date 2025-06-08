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
      </div>
      <div id="contact-us-form">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
