import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/Navigation.css";
import useScrollToTop from "../../hooks/useScrollToTop";
import sitemap from "../../sitemap.json";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(false);

  const { handleLinkClick } = useScrollToTop(pathname, () =>
    setMenuOpen(false)
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigateToSection = (section, path) => {
    navigate(path, { state: { scrollTo: section } });
  };

  return (
    <nav className="nav">
      {isMobile && (
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      )}
      <ul className={`nav-list ${isMobile && menuOpen ? "show" : ""}`}>
        {sitemap.pages.map(
          ({ title, "nav-title": navTitle, "sub-pages": subPages }) => (
            <li
              key={title}
              className="nav-item"
              onMouseEnter={() => setHoveredMenu(title)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                to={`/${title}`}
                onClick={() => handleLinkClick(`/${title}`)}
              >
                {navTitle}
              </Link>

              {hoveredMenu === title && !isMobile && (
                <div className="dropdown">
                  {subPages.map((subPage) => (
                    <li
                      key={subPage}
                      onClick={() =>
                        handleNavigateToSection(subPage, `/${title}`)
                      }
                      style={{ cursor: "pointer", margin: "5px 0" }}
                    >
                      {subPage.replaceAll("-", " ")}
                    </li>
                  ))}
                </div>
              )}
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
