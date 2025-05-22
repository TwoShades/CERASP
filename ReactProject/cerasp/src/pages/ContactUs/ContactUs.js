import React, { useState, useRef } from 'react';
import './ContactUs.css';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import axios from 'axios'; // Make sure axios is imported in this file

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    privacyPolicy: false,
    newsletter: false
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: null,
    error: null,
    newsletterStatus: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Separate function to handle newsletter subscription
  // Update this function in your ContactUs.js
const subscribeToNewsletter = async (name, email) => {
  try {
    console.log('Attempting to subscribe to newsletter with:', { name, email });
    
    // Direct call to Strapi instead of going through your API route
    const response = await axios.post(
      'https://loving-bird-9ef3b0470a.strapiapp.com/api/subscribers',
      {
        data: {
          Name: name,
          Email: email
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    
    console.log('Newsletter subscription response:', response.data);
    
    return {
      success: true,
      message: 'Successfully subscribed to newsletter'
    };
  } catch (error) {
    console.error('Newsletter subscription error details:', error);
    
    // Handle duplicate email
    if (error.response?.data?.error?.message?.includes('duplicate') ||
        error.response?.data?.error?.details?.errors?.some(e => e.message.includes('already taken'))) {
      return {
        success: true, 
        message: 'You\'re already subscribed to our newsletter!'
      };
    }
    
    return {
      success: false,
      message: 'Error subscribing to newsletter. Please try again later.'
    };
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message || !formData.privacyPolicy) {
      setFormStatus({
        ...formStatus,
        submitting: false,
        success: false,
        error: 'Please fill in all required fields and accept the privacy policy.'
      });
      return;
    }
    
    setFormStatus({ ...formStatus, submitting: true, success: null, error: null });
    
    try {
      // Send the contact form email
      await emailjs.sendForm(
        'service_qahust4',  // Your EmailJS service ID
        'template_jnlaadq', // Your EmailJS template ID
        form.current,
        'qqVYpUXwpvqGKOkgx'   // Your EmailJS public key
      );

      let newsletterResult = null;
      
      // If newsletter checkbox is checked, add to mailing list
      if (formData.newsletter) {
        console.log('Newsletter checkbox checked, attempting to subscribe');
        newsletterResult = await subscribeToNewsletter(formData.name, formData.email);
        console.log('Newsletter subscription result:', newsletterResult);
      }
      
      setFormStatus({
        submitting: false,
        success: 'Your message has been sent successfully!',
        error: null,
        newsletterStatus: newsletterResult?.message
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        privacyPolicy: false,
        newsletter: false
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        ...formStatus,
        submitting: false,
        success: null,
        error: 'There was an error sending your message. Please try again later.'
      });
    }
  };

  return (
    <div className="contact-us">
      {/* Left Side */}
      <div className="contact-left-side">
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>7171 Frederick Banting, Montreal, Quebec, Canada H4S 1Z9</p>
          <p>📞 +1 (263) 362-2760</p>
          <p>📧 info@croasp.ca</p>
        </div>
        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
          <h3>Contact Form</h3>
          
          {formStatus.success && (
            <div className="form-success-message">{formStatus.success}</div>
          )}
          
          {formStatus.newsletterStatus && (
            <div className="form-success-message">{formStatus.newsletterStatus}</div>
          )}
          
          {formStatus.error && (
            <div className="form-error-message">{formStatus.error}</div>
          )}
          
          <input 
            type="text" 
            name="name" 
            placeholder="Name *" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <input 
            type="text" 
            name="company" 
            placeholder="Company" 
            value={formData.company}
            onChange={handleChange}
          />
          
          <input 
            type="email" 
            name="email" 
            placeholder="Email *" 
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone" 
            value={formData.phone}
            onChange={handleChange}
          />
          
          <textarea 
            name="message" 
            placeholder="Message *" 
            value={formData.message}
            onChange={handleChange}
            required
          />
          
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              name="privacyPolicy"
              checked={formData.privacyPolicy}
              onChange={handleChange}
              required
            /> 
            I agree to the <Link to="/privacy">Privacy Policy</Link> *
          </label>
          
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            /> 
            Be part of the Newsletter
          </label>
          
          <button 
            type="submit" 
            disabled={formStatus.submitting}
            className={formStatus.submitting ? 'submitting' : ''}
          >
            {formStatus.submitting ? 'Sending...' : 'Send'}
          </button>
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
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;