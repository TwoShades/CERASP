import sitemap from "../../sitemap.json";
import { Outlet, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import "../_css/Layout.css";
import { LanguageContext } from "../../contexts/LanguageContext";

import ProjectsGrants from "./ProjectsGrants";
import ProjectsOverview from "./ProjectsOverview";

const ProjectsLayout = () => {
  const location = useLocation();
  const projectsPage = sitemap.pages.find(
    (page) => page["page-id"] === "projects"
  );

  const { language } = useContext(LanguageContext);

  return (
    <div className="layout-page page-content">
      {location.pathname === "/projects" && (
        <>
          <div className="layout-bg-wide-img">
            <img
              src="/photos/FromOldSite/slide_1-scaled.jpeg"
              alt="Biotech facility"
              className="history-img"
            />
          </div>
          {/* <div className="layout-rotated-title">{language === "fr" ? <h1>NOS PROJETS</h1> : <h1>OUR PROJECTS</h1>}</div> */}
        </>
      )}
      <div className="layout-panel-5"></div>
      <ProjectsGrants />
      <ProjectsOverview />
      <main className="layout-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default ProjectsLayout;
