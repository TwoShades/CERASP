import React, { useState } from "react";
import "./Pages-css/Sectors.css";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import ModalMessage from "../components/uicomponents/ModalMessage.js"; // Import the Modal
import TestPanel from "../components/panels/TestPanel.js"; // Import the TestPanel component
import { Scroll } from "lucide-react";

const News = () => {
  return (
    <ScrollPanel title="news" id="overview">
      <div className="news-panel">
        <div className="test-panel-1">
          <h1>PANEL 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/* <div className="test-panel-2">
          <h1>PANEL 2</h1>
          <p>
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
            nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
            ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
        </div>
        <div className="test-panel-3">
          <h1>PANEL 3</h1>
          <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
            varius, turpis et commodo pharetra, est eros bibendum elit, nec
            luctus magna felis sollicitudin mauris.
          </p>
        </div>
        <div className="test-panel-1">
          <h1>PANEL 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="test-panel-2">
          <h1>PANEL 2</h1>
          <p>
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
            nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
            ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
        </div>
        <div className="test-panel-3">
          <h1>PANEL 3</h1>
          <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
            varius, turpis et commodo pharetra, est eros bibendum elit, nec
            luctus magna felis sollicitudin mauris.
          </p>
        </div> */}
      </div>
    </ScrollPanel>
  );
};

export default News;
