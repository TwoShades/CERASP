import Navigation from "./Navigation";
import "./css/Header.css";

const Header = () => {
  return (
    <div className="layout-header">
      <img src="/logos/cerasplogo.png" alt="CERASP Logo" />
      <Navigation />
    </div>
  );
};

export default Header;
