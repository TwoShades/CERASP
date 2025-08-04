import sitemap from "../../sitemap.json";
import { Outlet, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import "../_css/Layout.css";
import { LanguageContext } from "../../contexts/LanguageContext";

const SectorsLayout = () => {
  const location = useLocation();

  const isOverview = location.pathname === "/sector-of-activities";

  const sectorPage = sitemap.pages.find((page) => page["page-id"] === "sector-of-activities");

  const sectorSubPages = sectorPage ? sectorPage["sub-pages"] : [];

  const { language } = useContext(LanguageContext);

  return (
    <div className="layout-page page-content">
      <div className="layout-color-panel"></div>
      {isOverview && (
        <aside className="layout-sidebar">
          <ul>
            {sectorSubPages.map((subPage) => (
              <li key={subPage.id}>
                <a href={`/sector-of-activities/${subPage.id}`}>{subPage[language].toUpperCase()}</a>
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

export default SectorsLayout;
