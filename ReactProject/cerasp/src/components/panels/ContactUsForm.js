import React from "react";
import "./css/ContactUsForm.css";
import { Phone, AtSign } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsForm = () => {
  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <div className="parent">
      <div className="left-panel">
        <div className="cerasp-info">
          <h4>Contact Details</h4>
          <p>
            7171 Frederick Banting,<br></br> Centre d'innovation adMare/adMare Bioinnovations <br></br>
            Montreal, Quebec, Canada <br></br>
            H4S 1Z9 <br></br>
            <Phone className="info-card-icons" />Phone: 438-923-9257 <br></br>
            <AtSign className="info-card-icons" />Email: info@cerasp.ca
          </p>
        </div>

        <div className="sponsors">
          <h2>Sponsors images</h2>
        </div>
      </div>

      <div className="contact-form-container">
        <h2 className="form-title">Contact Form</h2>
        <div className="form-content">
          <div className="form-fields">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />

            <label>Title</label>
            <select>
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Other</option>
            </select>
            
            <label>Country</label>
            <select>
              <option>USA</option>
              <option>Canada</option>
              <option>UK</option>
              <option>Other</option>
            </select>

            <label>Email</label>
            <input type="email" placeholder="Your Email" />

            <label>Phone</label>
            <input type="tel" placeholder="Your Phone Number" />


            <label>Company Name (Optional)</label>
            <input type="text" placeholder="Your Company Name" />

            <label>Message</label>
            <textarea placeholder="Your Message"></textarea>
          </div>

          <div className="captcha-container">
            <div className="checkboxes-container">
              <div className="policy-field">
                <input type="checkbox" id="policy" />
                <label htmlFor="policy">I have read and agree to the Privacy Policy</label>
              </div>

              <div className="newsletter-field">
                <input type="checkbox" id="newsletter" />
                <label htmlFor="newsletter">I would like to be part of the Newsletter</label>
              </div>
            </div>

            <div className="not-a-robot">
              <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleCaptchaChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;