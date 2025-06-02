import React, { useState } from "react";
import "./Pages-css/News.css";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import NewsOverview from "./news-subpages/NewsOverview.js";
import ContactUs from "./ContactUs/ContactUs.js";

const News = () => {
  useScrollToPanel();

  return (
    <div className="news-page page-content">
      <div id="overview">
        <NewsOverview />
      </div>

      <div id="equipment-updates"></div>

      {/*   =====================
              =====New Grants======
              =====================
        */}

      <div id="new-grants"></div>

      {/*   =====================================
              =======Blogs & white papers==========
              =====================================
        */}

      <div id="blogs-&-white-papers"></div>

      {/*   =====================
              =====Webinars=======
              =====================
        */}

      <div id="webinars"></div>

      {/*   ===================
              =====Events=======
              ===================
        */}

      <div id="events"></div>

      {/*   =======================
              =====CONTACT FORM======
              =======================
        */}

      <div id="contact-us-form">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default News;
