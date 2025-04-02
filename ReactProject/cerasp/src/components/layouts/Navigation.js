import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/Navigation.css";
import useScrollToTop from "../../hooks/useScrollToTop";
import sitemap from "../../sitemap.json";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1201);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const navRef = useRef(null); // Ref for the navigation menu

  const { handleLinkClick } = useScrollToTop(pathname, () =>
    setMenuOpen(false)
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
        setOpenSubMenu(null);
      }
      setIsMobile(window.innerWidth < 1201);
    };

    window.addEventListener("resize", handleResize);

    // Close the menu if clicked outside
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setOpenSubMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleNavigateToSection = (section, path) => {
    navigate(path, { state: { scrollTo: section } });
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="nav" ref={navRef}>
      {isMobile && (
        <button
          className="hamburger"
          onClick={() => {
            setMenuOpen((prev) => {
              if (prev) {
                setOpenSubMenu(null); // Reset the dropdown state when closing the menu
              }
              return !prev;
            });
          }}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      )}
      <ul className={`nav-list ${isMobile && menuOpen ? "show" : ""}`}>
        {sitemap.pages.map(
          ({ title, "nav-title": navTitle, "sub-pages": subPages }) => {
            if (title.toLowerCase() === "landing") return null;
            const filteredSubPages = subPages.filter(
              (subPage) => subPage.toLowerCase() !== "contact-us-form"
            );

            return (
              <li
                key={title}
                className="nav-item"
                onMouseEnter={() => !isMobile && setHoveredMenu(title)}
                onMouseLeave={() => !isMobile && setHoveredMenu(null)}
              >
                <div className="dropdown-clickable-zone">
                  <Link
                    to={`/${title}`}
                    onClick={() => {
                      handleLinkClick(`/${title}`);
                      setOpenSubMenu(null); // Close the dropdown
                      setMenuOpen(false); // Close the side menu
                    }}
                  >
                    {navTitle}
                  </Link>
                  {isMobile && filteredSubPages.length > 0 && (
                    <span
                      className="dropdown-toggle"
                      onClick={(e) => {
                        // Prevent triggering parent click
                        e.stopPropagation();
                        toggleSubMenu(title);
                      }}
                    >
                      {openSubMenu === title ? "▲" : "▼"}
                    </span>
                  )}
                </div>

                {(hoveredMenu === title ||
                  (isMobile && openSubMenu === title)) &&
                  filteredSubPages.length > 0 && (
                    <div className="dropdown">
                      <ul>
                        {filteredSubPages.map((subPage) => (
                          <li
                            key={subPage}
                            onClick={() => {
                              handleNavigateToSection(subPage, `/${title}`);
                              setOpenSubMenu(null); // Close the dropdown
                              setMenuOpen(false); // Close the side menu
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {subPage.replaceAll("-", " ")}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </li>
            );
          }
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
