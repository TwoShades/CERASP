import sitemap from "../../sitemap.json";
import { Outlet, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import "../_css/Layout.css";
import "./css/SectorsLayout.css";
import { LanguageContext } from "../../contexts/LanguageContext";

const SectorsLayout = () => {
  const location = useLocation();

  const isOverview =
    location.pathname === "/sector-of-activities";

  const sectorPage = sitemap.pages.find(
    (page) => page["page-id"] === "sector-of-activities"
  );

  const sectorSubPages = sectorPage
    ? sectorPage["sub-pages"]
    : [];

  const { language } = useContext(LanguageContext);

  return (
    <div className="layout-page page-content">
      {/* <div className="layout-color-panel"></div> */}
      {location.pathname === "/sector-of-activities" && (
        <>
          <div className="layout-bg-img-col-3-4">
            <img
              src="/photos/FromOldSite/Picture-CERASP-7.png"
              alt="Our Sectors"
              className=""
            />
          </div>
          {/* <div className="layout-rotated-title">{language === "fr" ? <h1>SECTEURS</h1> : <h1>SECTORS</h1>}</div> */}
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
            {sectorSubPages.map((subPage) => (
              <li key={subPage.id}>
                <a
                  href={`/sector-of-activities/${subPage.id}`}
                >
                  {subPage[language].toUpperCase()}
                </a>
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
