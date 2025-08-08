import sitemap from "../../sitemap.json";
import { Outlet, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import "../_css/Layout.css";
import { LanguageContext } from "../../contexts/LanguageContext";

const ExpertiseLayout = () => {
  const location = useLocation();

  const isOverview = location.pathname === "/expertise";

  const expertisePage = sitemap.pages.find(
    (page) => page["page-id"] === "expertise"
  );

  const expertiseSubPages = expertisePage
    ? expertisePage["sub-pages"]
    : [];

  const { language } = useContext(LanguageContext);

  return (
    <div className="layout-page page-content">
      {location.pathname === "/expertise" && (
        <>
          <div className="layout-bg-img">
            <img
              src="/photos/FromOldSite/AdobeStock_240748778__-scaled.jpg"
              alt="Biotech facility"
              className="history-img"
            />
          </div>
          {/* <div className="layout-rotated-title">{language === "fr" ? <h1>EXPERTISE</h1> : <h1>EXPERTISE</h1>}</div> */}
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
            {expertiseSubPages.map((subPage) => (
              <li key={subPage.id}>
                <a href={`/expertise/${subPage.id}`}>
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

export default ExpertiseLayout;
