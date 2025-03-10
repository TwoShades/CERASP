import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/Navigation.css";
import useScrollToTop from "../../hooks/useScrollToTop";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [expertiseHovered, setExpertiseHovered] = useState(false);

  const { handleLinkClick } = useScrollToTop(pathname, () =>
    setMenuOpen(false)
  );

  const sections = [
    "overview",
    "our-team",
    "facilities",
    "partners",
    "cerasp-videos",
  ];

  const expertiseSections = [
    "overview",
    "gmp-expertise-&-biomanufacturing",
    "formulation-of-pharmaceuticals",
    "animal-health",
    "applied-research",
    "troubleshooting",
    "health-canada-partner",
    "technical-training",
    "bioinformatics",
    "numeric-health",
    "help-access-funding",
  ];

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
        {/* About Dropdown */}
        <li
          className="nav-item"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to="/about" onClick={() => handleLinkClick("/about")}>
            About CERASP
          </Link>

          {isHovered && !isMobile && (
            <div className="dropdown">
              {sections.map((section) => (
                <li
                  key={section}
                  onClick={() => handleNavigateToSection(section, "/about")}
                  style={{
                    cursor: "pointer",
                    margin: "5px 0",
                  }}
                >
                  {section.replace("-", " ")}
                </li>
              ))}
            </div>
          )}
        </li>

        {/* Expertise Dropdown */}
        <li
          className="nav-item"
          onMouseEnter={() => setExpertiseHovered(true)}
          onMouseLeave={() => setExpertiseHovered(false)}
        >
          <Link to="/expertises" onClick={() => handleLinkClick("/expertises")}>
            Expertises & Solutions
          </Link>

          {expertiseHovered && !isMobile && (
            <div className="dropdown">
              {expertiseSections.map((section) => (
                <li
                  key={section}
                  onClick={() => {
                    handleNavigateToSection(section, "/expertises");
                    console.log(section);
                  }}
                  style={{
                    cursor: "pointer",
                    margin: "5px 0",
                  }}
                >
                  {section.replace("-", " ")}
                </li>
              ))}
            </div>
          )}
        </li>

        {/* Other Navbar Links */}
        <li className="nav-item">
          <Link to="/sectors" onClick={() => handleLinkClick("/sectors")}>
            Sector of Activities
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" onClick={() => handleLinkClick("/projects")}>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/news" onClick={() => handleLinkClick("/news")}>
            News
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/solutions" onClick={() => handleLinkClick("/solutions")}>
            Solutions
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
