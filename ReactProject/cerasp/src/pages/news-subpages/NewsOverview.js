import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import SubPageHeader from "../../components/layouts/SubPageHeader";
import "./css/NewsOverview.css";

export default function NewsOverview() {
  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet, isFullScreen } = useContext(ScreenSizeContext);
  return (
    <div className="news-overview-layout">
      <SubPageHeader
        name={language === "en" ? "NEWS" : "NOUVELLES"}
        extraContent={
          <div className="news-overview-header-text">
            {/* <h2>
              {language === "en"
                ? "Stay updated with our latest news and events."
                : "Restez informé de nos dernières nouvelles et événements."}
            </h2> */}
          </div>
        }
      />
      <div className="news-linkedin-feed">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7320803035293573120?collapsed=1"
          height="671"
          width="504"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
        ></iframe>

        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7308839915805376512"
          height="756"
          width="504"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
        ></iframe>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7331320643541422081?collapsed=1"
          height="655"
          width="504"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
        ></iframe>

        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7320474480449912832?collapsed=1"
          height="671"
          width="504"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
        ></iframe>
      </div>
    </div>
  );
}
