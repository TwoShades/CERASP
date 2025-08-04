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
      <div className="layout-color-panel"></div>
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
