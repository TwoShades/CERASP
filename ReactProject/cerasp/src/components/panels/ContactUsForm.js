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
      <div className="contact-left-panel">
        <div className="cerasp-info">
          <h4>Contact Details</h4>
          <p>
            7171 Frederick Banting,<br></br> Centre d'innovation adMare/adMare
            Bioinnovations <br></br>
            Montreal, Quebec, Canada <br></br>
            H4S 1Z9 <br></br>
            <Phone className="info-card-icons" />
            Phone: 438-923-9257 <br></br>
            <AtSign className="info-card-icons" />
            Email: info@cerasp.ca
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
            <div className="form-group name-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your Name" />
            </div>

            <div className="form-group title-group">
              <label htmlFor="title">Title</label>
              <select id="title">
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group country-group">
              <label htmlFor="country">Country</label>
              <select id="country">
                <option>USA</option>
                <option>Canada</option>
                <option>UK</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group email-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Your Email" />
            </div>

            <div className="form-group phone-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" placeholder="Your Phone Number" />
            </div>

            <div className="form-group company-group">
              <label htmlFor="company">Company Name (Optional)</label>
              <input id="company" type="text" placeholder="Your Company Name" />
            </div>

            <div className="form-group message-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message"></textarea>
            </div>
          </div>

          <div className="captcha-container">
            <div className="checkboxes-container">
              <div className="policy-field">
                <input type="checkbox" id="policy" />
                <label htmlFor="policy">
                  I have read and agree to the Privacy Policy
                </label>
              </div>

              <div className="newsletter-field">
                <input type="checkbox" id="newsletter" />
                <label htmlFor="newsletter">
                  I would like to be part of the Newsletter
                </label>
              </div>
            </div>

            <div className="not-a-robot">
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={handleCaptchaChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
