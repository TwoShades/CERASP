import sitemap from "../../sitemap.json";
import { Outlet, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import "../_css/Layout.css";
import { LanguageContext } from "../../contexts/LanguageContext";

const ExpertiseLayout = () => {
  const location = useLocation();

  const isOverview = location.pathname === "/expertise";

  const expertisePage = sitemap.pages.find((page) => page["page-id"] === "expertise");

  const expertiseSubPages = expertisePage ? expertisePage["sub-pages"] : [];

  const { language } = useContext(LanguageContext);

  return (
    <div className="layout-page page-content">
      <div className="layout-color-panel"></div>
      {isOverview && (
        <aside className="layout-sidebar">
          <ul>
            {expertiseSubPages.map((subPage) => (
              <li key={subPage.id}>
                <a href={`/expertise/${subPage.id}`}>{subPage[language].toUpperCase()}</a>
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

export default ExpertiseLayout;
