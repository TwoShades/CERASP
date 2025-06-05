import React, { useState } from "react";
import "./Pages-css/News.css";
import { ThreeDots } from "react-loader-spinner";
import Footer from "../components/layouts/Footer.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import NewsOverview from "./news-subpages/NewsOverview.js";
import ContactUs from "./ContactUs/ContactUs.js";

const News = () => {
  const [isOverviewReady, setIsOverviewReady] = useState(false);
  useScrollToPanel();

  return (
    <div className="news-page page-content">
      {!isOverviewReady && (
        <div className="news-loader-overlay">
          <ThreeDots
            visible={true}
            height="200"
            width="200"
            color="#FF9800"
            radius="9"
            ariaLabel="three-dots-loading"
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
