import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="address">
          <p>CERASP</p>
          <p>7171 Frederick Banting,</p>
          <p>Centre d’innovation adMare / adMare Bioinnovations</p>
          <p>Montréal, QC H4S 1Z9</p>
        </div>
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@cerasp.ca">info@cerasp.ca</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+14389239257">(438) 923-9257</a>
          </p>
          <p>
            <strong>Business hours:</strong> 9h – 17h
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
