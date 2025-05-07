import React, { useRef, useState } from "react";
import "./css/ContactUsForm.css";
import { Phone, AtSign } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const formRef = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!captchaValue) {
    //   setError("Please complete the reCAPTCHA.");
    //   return;
    // }

    const policyChecked = formRef.current.policy.checked;
    if (!policyChecked) {
      setError("You must agree to the Privacy Policy.");
      return;
    }

    setError("");

    emailjs
      .sendForm(
        "service_qahust4", // from EmailJS
        "template_jnlaadq", // from EmailJS
        formRef.current,
        "qqVYpUXwpvqGKOkgx"   // from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          formRef.current.reset();
          setCaptchaValue(null);
        },
        (error) => {
          console.log(error.text);
          setError("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="parent">
      <div className="contact-left-panel">
        <div className="cerasp-info">
          <h4>Contact Details</h4>
          <p>
            7171 Frederick Banting,<br />
            Centre d'innovation adMare/adMare Bioinnovations <br />
            Montreal, Quebec, Canada <br />
            H4S 1Z9 <br />
            <Phone className="info-card-icons" /> Phone: 438-923-9257 <br />
            <AtSign className="info-card-icons" /> Email: info@cerasp.ca
          </p>
        </div>
        <div className="sponsors">
          <h2>Sponsors images</h2>
        </div>
      </div>

      <div className="contact-form-container">
        <h2 className="form-title">Contact Form</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="form-content">
          <div className="form-fields">
            <div className="form-group name-group">
              <label htmlFor="name">Name</label>
              <input name="name" id="name" type="text" placeholder="Your Name" required />
            </div>

            <div className="form-group title-group">
              <label htmlFor="title">Title</label>
              <select name="title" id="title">
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group country-group">
              <label htmlFor="country">Country</label>
              <select name="country" id="country">
                <option>USA</option>
                <option>Canada</option>
                <option>UK</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group email-group">
              <label htmlFor="email">Email</label>
              <input name="email" id="email" type="email" placeholder="Your Email" required />
            </div>

            <div className="form-group phone-group">
              <label htmlFor="phone">Phone</label>
              <input name="phone" id="phone" type="tel" placeholder="Your Phone Number" />
            </div>

            <div className="form-group company-group">
              <label htmlFor="company">Company Name (Optional)</label>
              <input name="company" id="company" type="text" placeholder="Your Company Name" />
            </div>

            <div className="form-group message-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" placeholder="Your Message" required></textarea>
            </div>
          </div>

          <div className="captcha-container">
            <div className="checkboxes-container">
              <div className="policy-field">
                <input type="checkbox" id="policy" name="policy" />
                <label htmlFor="policy">I have read and agree to the Privacy Policy</label>
              </div>

              <div className="newsletter-field">
                <input type="checkbox" id="newsletter" name="newsletter" />
                <label htmlFor="newsletter">I would like to be part of the Newsletter</label>
              </div>
            </div>

            {/* <div className="not-a-robot">
              <ReCAPTCHA sitekey="6LfyXTArAAAAAAF7C0SGMVqeHblcdxPZ_hKaLSQD" onChange={handleCaptchaChange} />
            </div> */}

            {error && <p className="error-message">{error}</p>}
            {submitted && <p className="success-message">Message sent successfully!</p>}

            <button type="submit" className="submit-btn">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
