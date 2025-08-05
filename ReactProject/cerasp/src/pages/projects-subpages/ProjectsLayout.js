import sitemap from "../../sitemap.json";
import { Outlet, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import "../_css/Layout.css";
import { LanguageContext } from "../../contexts/LanguageContext";

const ProjectsLayout = () => {
  const location = useLocation();

  const isOverview = location.pathname === "/projects";

  const projectsPage = sitemap.pages.find((page) => page["page-id"] === "projects");

  const projectsSubPages = projectsPage ? projectsPage["sub-pages"] : [];

  const { language } = useContext(LanguageContext);

  return (
    <div className="layout-page page-content">
      {location.pathname === "/projects" && (
        <>
          <div className="layout-bg-img">
            <img src="/photos/FromOldSite/slide_1-scaled.jpeg" alt="Biotech facility" className="history-img" />
          </div>
          <div className="layout-rotated-title">{language === "fr" ? <h1>NOS PROJETS</h1> : <h1>OUR PROJECTS</h1>}</div>
          <div className="layout-panel-1"></div>
          <div className="layout-panel-2"></div>
          <div className="layout-panel-3"></div>
          <div className="layout-panel-4"></div>
        </>
      )}
      <div className="layout-panel-5"></div>
      {isOverview && (
        <aside className="layout-sidebar">
          <ul>
            {projectsSubPages.map((subPage) => (
              <li key={subPage.id}>
                <a href={`/projects/${subPage.id}`}>{subPage[language].toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <main className="layout-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default ProjectsLayout;
