import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import "./css/Header.css";

const Header = () => {
  return (
    <div className="layout-header">
      <Link to="/">
        <img
          src="/logos/cerasplogo.png"
          style={{ width: "150px", height: "auto" }}
          alt="CERASP Logo"
        />
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
