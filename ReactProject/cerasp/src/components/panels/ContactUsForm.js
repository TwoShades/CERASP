import React from "react";
import "./css/ContactUsForm.css";

const ContactUsForm = () => {

  return (


      <div className="parent">
        {/* Adding the 'card' class for styling */}
        <div className="cerasp-info card">
          <p>Just some text</p>
        </div>

        <div className="sponsors card">
          <p>Just some text</p>
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

            <div className="form-image">
              <img src="/path-to-your-image.jpg" alt="Contact" />
            </div>

            <div className="form-policy">

            </div>

            <div className="form-newsletter">

            </div>

            <div className="not-a-robot">

            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactUsForm;