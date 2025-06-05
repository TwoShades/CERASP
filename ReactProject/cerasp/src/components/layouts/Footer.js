import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="made-by">
          <p> Made by Samuel Rivest & Nick Pelletier </p>
        </div>
        <div className="copyright">
          <p>Copyrights © 2019 - 2025 CERASP All Rights Reserved</p>
        </div>
        <div className="privacy">
          <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;