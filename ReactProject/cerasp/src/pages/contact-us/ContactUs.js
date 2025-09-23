import React, { useState, useRef, useContext } from "react";
import "./ContactUs.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import contactTranslations from "./contact-translations.json";
import AnimateObject from "../../components/uicomponents/AnimateObject";
// import "../_css/Subpage.css";
import emailjs from "@emailjs/browser";
import axios from "axios";
import Footer from "../../components/layouts/Footer";

const ContactUs = () => {
  const { language } = useContext(LanguageContext);
  const t = contactTranslations.contact_form;
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    privacyPolicy: false,
    newsletter: false,
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: null,
    error: null,
    newsletterStatus: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const subscribeToNewsletter = async (name, email) => {
    try {
      await axios.post(
        "https://loving-bird-9ef3b0470a.strapiapp.com/api/subscribers",
        { data: { Name: name, Email: email } },
        { headers: { "Content-Type": "application/json" } }
      );

      return {
        success: true,
        message: t.messages[language].newsletterSubscribed,
      };
    } catch (error) {
      if (
        error.response?.data?.error?.message?.includes(
          "duplicate"
        ) ||
        error.response?.data?.error?.details?.errors?.some(
          (e) => e.message.includes("already taken")
        )
      ) {
        return {
          success: true,
          message:
            t.messages[language]
              .newsletterAlreadySubscribed,
        };
      }
      return {
        success: false,
        message: t.messages[language].newsletterError,
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.privacyPolicy
    ) {
      setFormStatus({
        ...formStatus,
        submitting: false,
        success: false,
        error: t.messages[language].validationError,
      });
      return;
    }

    setFormStatus({
      ...formStatus,
      submitting: true,
      success: null,
      error: null,
    });

    try {
      await emailjs.sendForm(
        "service_qahust4",
        "template_jnlaadq",
        form.current,
        "qqVYpUXwpvqGKOkgx"
      );

      let newsletterResult = null;
      if (formData.newsletter) {
        newsletterResult = await subscribeToNewsletter(
          formData.name,
          formData.email
        );
      }

      setFormStatus({
        submitting: false,
        success: t.messages[language].success,
        error: null,
        newsletterStatus: newsletterResult?.message,
      });

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        privacyPolicy: false,
        newsletter: false,
      });
    } catch (error) {
      setFormStatus({
        ...formStatus,
        submitting: false,
        success: null,
        error: t.messages[language].error,
      });
    }
  };

  return (
    <main className="subpage-overview">
      <div className="layout-panel-5-narrow"></div>
      <AnimateObject
        variantsToRun={["slideLeft", "fadeIn"]}
        className="subpage-intro-grid"
      >
        <h1>
          {language === "fr"
            ? "CONTACTEZ-NOUS"
            : "CONTACT US"}
        </h1>
      </AnimateObject>
      <section className="subpage-row">
        <div
          className="subpage-col-2-5"
          style={{
            marginTop: "-5vh",
          }}
        >
          <form
            className="contact-form"
            ref={form}
            onSubmit={handleSubmit}
          >
            {formStatus.success && (
              <div className="form-success-message">
                {formStatus.success}
              </div>
            )}
            {formStatus.newsletterStatus && (
              <div className="form-success-message">
                {formStatus.newsletterStatus}
              </div>
            )}
            {formStatus.error && (
              <div className="form-error-message">
                {formStatus.error}
              </div>
            )}

            <input
              type="text"
              name="name"
              placeholder={t.placeholders[language].name}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder={t.placeholders[language].company}
              value={formData.company}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder={t.placeholders[language].email}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder={t.placeholders[language].phone}
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder={t.placeholders[language].message}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="contact-checkboxes">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  required
                />
                <span>
                  {language === "fr"
                    ? "J’accepte la politique de confidentialité"
                    : "I agree to the Privacy Policy"}
                </span>
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗
                </a>
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                />
                <span className="checkbox-text">
                  {language === "fr"
                    ? "Inscrivez-vous à la newsletter"
                    : "Sign up for the Newsletter"}
                </span>
              </label>
            </div>

            <button
              id="contact-button-font"
              type="submit"
              disabled={formStatus.submitting}
              className={
                formStatus.submitting ? "submitting" : ""
              }
            >
              <span>
                {language === "fr" ? "Envoyer" : "Send"}
              </span>
            </button>
          </form>
        </div>
        <div className="subpage-col-1-5">
          <div className="subpage-spacer-10vh"></div>
        </div>
        <div className="subpage-col-1-5 contact-bottom">
          {/* <div className="contact-google-maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.355649417134!2d-73.76856082306308!3d45.48278247107427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93d8bef0bf3dd%3A0x861d8d2c0f4117f3!2sCERASP!5e0!3m2!1sen!2sus!4v1747083278539!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CERASP Location Map"
            />
          </div> */}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactUs;
