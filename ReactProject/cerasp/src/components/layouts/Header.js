import Navigation from "./Navigation";
import "./css/Header.css";

const Header = () => {
  return (
    <header className="layout-header">
      <img src="/logos/cerasplogo.png" alt="CERASP Logo" />
      <Navigation />
    </header>
  );
};

export default Header;
