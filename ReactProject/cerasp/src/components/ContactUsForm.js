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

        <div className="cerasp-info card">
          <h4>Contact Details</h4>
          <p>7171 Frederick Banting, Centre d'innovation adMare/adMare Bioinnovations <br></br>
            Montreal, Quebec, Canada <br></br>
            H4S 1Z9 <br></br>
            <Phone className="info-card-icons"/>Phone: 438-923-9257 <br></br>
            <AtSign className="info-card-icons"/>Email: info@cerasp.ca</p>
        </div>

        <div className="sponsors card">
          <h2>Sponsors images</h2>
        </div>

        <div className="contact-form-container card">
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

              <label>Email</label>
              <input type="email" placeholder="Your Email" />

              <label>Phone</label>
              <input type="tel" placeholder="Your Phone Number" />

              <label>Country</label>
              <select>
                <option>USA</option>
                <option>Canada</option>
                <option>UK</option>
                <option>Other</option>
              </select>

              <label>Company Name (Optional)</label>
              <input type="text" placeholder="Your Company Name" />

              <label>Message</label>
              <textarea placeholder="Your Message"></textarea>
            </div>

            <div className="form-policy">
              <input type="checkbox" id="policy" />
              <label for="policy">I have read and agree to the Privacy Policy</label>
            </div>

            <div className="form-newsletter">
              <input type="checkbox" id="newsletter" />
              <label for="newsletter">I would like to receive news from CERASP via email</label>
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
  );
};

export default ContactUsForm;