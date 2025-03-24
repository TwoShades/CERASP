import Navigation from "./Navigation";
import "./css/Header.css";

const Header = () => {
  return (
    <div className="layout-header">
      <img
        src="/logos/cerasplogo.png"
        style={{ width: "150px", height: "auto" }}
        alt="CERASP Logo"
      />
      <Navigation />
    </div>
  );
};

export default Header;
