import React, { useState, useEffect, useContext } from "react";
import "./Pages-css/News.css";
import Footer from "../components/layouts/Footer.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import useScrollOnNavigate from "../hooks/useScrollOnNavigate.js";
import scrollToTop from "../utils/scrollToTop.js";
import NewsOverview from "./news-subpages/NewsOverview.js";
import ContactUs from "./ContactUs/ContactUs.js";
import { LanguageContext } from "../contexts/LanguageContext.js";
import { PropagateLoader } from "react-spinners";

const News = () => {
  const [isOverviewReady, setIsOverviewReady] = useState(false);
  useScrollToPanel();
  useScrollOnNavigate();
  const { language } = useContext(LanguageContext);

  // THIS IS REQUIRED: Scroll to Top after LinkedIn renders
  useEffect(() => {
    if (isOverviewReady) {
      scrollToTop();
    }
  }, [isOverviewReady]);

  return (
    <div className="news-page page-content">
      {!isOverviewReady && (
        <div className="news-loader-overlay">
          <h1>
            {language === "fr"
              ? "Chargement des nouvelles..."
              : "Loading News..."}
          </h1>
          <PropagateLoader
            color="#0056b3"
            size={40}
            speedMultiplier={2.4}
            aria-label="Loading news overview..."
          />
        </div>
      )}

      <div id="overview" style={{ opacity: isOverviewReady ? 1 : 0 }}>
        <NewsOverview onReady={() => setIsOverviewReady(true)} />
      </div>

      <div id="equipment-updates"></div>
      <div id="new-grants"></div>
      <div id="blogs-&-white-papers"></div>
      <div id="webinars"></div>
      <div id="events"></div>

      <div id="contact-us-form">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default News;
