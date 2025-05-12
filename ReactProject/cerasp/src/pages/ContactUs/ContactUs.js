import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      {/* Left Side */}
      <div className="contact-left-side">
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>7171 Frederick Banting, Montreal, Quebec, Canada H4S 1Z9</p>
          <p>📞 +438 923 9257</p>
          <p>📧 info@croasp.ca</p>
        </div>

        <form className="contact-form">
          <h3>Contact Form</h3>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="Phone" />
          <textarea placeholder="Message" />
          <label>
            <input type="checkbox" /> I agree to the Privacy Policy
          </label>
          <label>
            <input type="checkbox" /> Be part of the Newsletter
          </label>
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Right Side */}
      <div className="contact-right-side">
        <div className="contact-sponsors">
          <div className="contact-sponsor-logos">
            <img
            className="partner-card-img"
            src="/logos/partners/cerasp-partners.jpg"
            alt="Partners"
          />
          <img
            className="partner-card-img"
            src="/logos/partners/cerasp-member.jpg"
            alt="Members"
          />
            {/* Add more sponsor logos here */}
          </div>
        </div>

        <div className="contact-google-maps">
          <iframe
            src="https://maps.google.com/maps?q=7171%20Frederick%20Banting%2C%20Montreal&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
