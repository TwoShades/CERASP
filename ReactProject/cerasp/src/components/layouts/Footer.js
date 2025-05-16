import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="address">
          <p>Copyrights © 2019 - 2025 CERASP All Rights Reserved</p>
        </div>
        <div className="privacy">
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
