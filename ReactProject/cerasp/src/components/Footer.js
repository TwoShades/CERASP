import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="address">
          <p>Copyrights © 2019 - 2025 CERASP All Rights Reserved</p>
        </div>
        <div className="privacy">
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
