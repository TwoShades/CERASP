import "./Pages-css/Projects.css";
import React from "react";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import useScrollOnNavigate from "../hooks/useScrollOnNavigate";
import ProjectsOverview from "./projects-subpages/ProjectsOverview.js";
import ProjectsGrants from "./projects-subpages/ProjectsGrants.js";
import ContactUs from "./ContactUs/ContactUs.js";
import Footer from "../components/layouts/Footer.js";
const Projects = () => {
  useScrollToPanel();
  useScrollOnNavigate();

  return (
    <div className="projects-page page-content">
      <div id="overview">
        <ProjectsOverview />
      </div>
      <div id="grants">
        <ProjectsGrants />
      </div>
      <div id="contact-us-form">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
