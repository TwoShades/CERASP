import { useState, useRef, useContext } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import sitemap from "../../sitemap.json";
import "./css/Navigation.css";

import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import scrollToTop from "../../utils/scrollToTop";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  const { language } = useContext(LanguageContext);
  const { isMobile, isTablet } = useContext(
    ScreenSizeContext
  );

  const [menuOpen, setMenuOpen] = useState(false);

  // ---- Handlers ----
  const handleLinkClick = (linkPath) => {
    if (pathname === linkPath) {
      scrollToTop();
    } else {
      navigate(linkPath, {
        state: {
          scrollToTop: true,
          fromDifferentPage: true,
        },
      });
    }
    setMenuOpen(false);
  };

  // ---- Render ----
  return (
    <>
      {/* Logo (mobile/tablet only) */}
      <Link to="/" className="nav-logo-wrapper">
        <img
          src="/logos/cerasplogo.png"
          alt="CERASP Logo"
          className={`nav-logo ${
            isMobile || isTablet ? "mobile" : "hidden"
          }`}
        />
      </Link>

      <nav className="nav" ref={navRef}>
        {(isMobile || isTablet) && (
          <>
            <a
              href="https://www.instagram.com/cctt.cerasp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logos/instagramlogo.png"
                alt="LinkedIn Logo"
                className="nav-instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/cerasp/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logos/linkedinlogo.png"
                alt="LinkedIn Logo"
                className="nav-linkedin"
              />
            </a>
            <button
              className="hamburger"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </>
        )}

        <ul
          className={`nav-list ${
            (isMobile || isTablet) && menuOpen ? "show" : ""
          }`}
        >
          {sitemap.pages.map(
            ({ "page-id": pageId, nav }) => {
              if (pageId.toLowerCase() === "landing")
                return null;

              const linkPath = `/${pageId}`;
              const displayTitle = nav[language] || nav.en;
              const isActive =
                pathname === linkPath ||
                pathname.startsWith(linkPath + "/");

              return (
                <li
                  key={pageId}
                  className={`nav-item ${
                    isActive ? "active" : ""
                  } ${pageId === "about" ? "nowrap" : ""}`}
                >
                  <a
                    href={linkPath}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(linkPath);
                    }}
                  >
                    {displayTitle.toUpperCase()}
                  </a>
                </li>
              );
            }
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
