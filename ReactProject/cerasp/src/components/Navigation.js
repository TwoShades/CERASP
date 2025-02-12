import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Navigation.css";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="nav">
      {isMobile && (
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      )}
      <ul className={`nav-list ${isMobile && menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About CERASP
          </Link>
        </li>
        <li>
          <Link to="/expertises" onClick={() => setMenuOpen(false)}>
            Expertises
          </Link>
        </li>
        <li>
          <Link to="/solutions" onClick={() => setMenuOpen(false)}>
            Solutions
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/news" onClick={() => setMenuOpen(false)}>
            News
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
