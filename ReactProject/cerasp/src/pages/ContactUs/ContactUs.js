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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.355649417134!2d-73.76856082306308!3d45.48278247107427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93d8bef0bf3dd%3A0x861d8d2c0f4117f3!2sCERASP!5e0!3m2!1sen!2sus!4v1747083278539!5m2!1sen!2sus" 
          width="100%" 
          height="300" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="CERASP Location Map"
          ></iframe>
          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
