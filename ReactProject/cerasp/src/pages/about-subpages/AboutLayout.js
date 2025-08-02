// AboutLayout.js
import sitemap from "../../sitemap.json";
import { Outlet, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import "../Pages-css/AboutLayout.css";
import { LanguageContext } from "../../contexts/LanguageContext";

const AboutLayout = () => {
  const location = useLocation();

  const isOverview = location.pathname === "/about";

  // Get the 'about' page object
  const aboutPage = sitemap.pages.find((page) => page["page-id"] === "about");

  // Guard if somehow not found
  const aboutSubPages = aboutPage ? aboutPage["sub-pages"] : [];

  const { language } = useContext(LanguageContext);

  return (
    <div className="about-page page-content">
      {isOverview && (
        <aside className="about-sidebar">
          <ul>
            {aboutSubPages.map((subPage) => (
              <li key={subPage.id}>
                <a href={`/about/${subPage.id}`}>
                  {subPage[language].toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <main className="about-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AboutLayout;
