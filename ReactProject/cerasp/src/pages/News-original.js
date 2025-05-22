import React, { useState } from "react";
import "./Pages-css/Sectors.css";
import Footer from "../components/layouts/Footer.js";
import ContactUs from "./ContactUs/ContactUs.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";

const NewsOriginal = () => {
  useScrollToPanel();

  return (
    <div className="news-page-content">
      {/*   ===================
              =====OVERVIEW======
              ===================
        */}

      <div id="overview">
        <p>Overview</p>
      </div>

      {/*   ============================
              =====Equipment Updates======
              ============================
        */}

      <div id="equipment-updates">
        <p>Equipment Updates</p>
      </div>

      {/*   =====================
              =====New Grants======
              =====================
        */}

      <div id="new-grants">
        <p>New Grants</p>
      </div>

      {/*   =====================================
              =======Blogs & white papers==========
              =====================================
        */}

      <div id="blogs-&-white-papers">
        <p>Blogs & white papers</p>
      </div>

      {/*   =====================
              =====Webinars=======
              =====================
        */}

      <div id="webinars">
        <p>Webinars</p>
      </div>

      {/*   ===================
              =====Events=======
              ===================
        */}

      <div id="events">
        <p>Events</p>
      </div>

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

export default NewsOriginal;
