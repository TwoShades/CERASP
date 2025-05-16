import React, { useContext } from 'react';
import "./Pages-css/PrivacyPolicy.css";
import { LanguageContext } from "../contexts/LanguageContext";
import Footer from "../components/layouts/Footer.js";
import privacyContent from "./Privacy.json";

const PrivacyPolicy = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <div className="privacy-policy">
        <h1>{language === "fr" ? "Politique de confidentialité" : "Privacy Policy"}</h1>
        <p>{privacyContent.introduction.content[language]}</p>

        <h2>{language === "fr" ? "1. " + privacyContent.regulatory_framework.title.fr : "1. " + privacyContent.regulatory_framework.title.en}</h2>
        <p>{privacyContent.regulatory_framework.content[language]}</p>

        <h2>{language === "fr" ? "2. " + privacyContent.collection.title.fr : "2. " + privacyContent.collection.title.en}</h2>
        {/* Split collection content into main and email parts if needed */}
        <p>
          {privacyContent.collection.content[language].split(" Email marketing")[0]}
        </p>
        <p>
          <strong>
            {language === "fr"
              ? "Marketing par courriel (le cas échéant)"
              : "Email marketing (if applicable)"}
            :
          </strong>
          {privacyContent.collection.content[language].split(":").slice(2).join(":") ||
            privacyContent.collection.content[language].split(":")[1]}
        </p>

        <h2>{language === "fr" ? "3. " + privacyContent.consent.title.fr : "3. " + privacyContent.consent.title.en}</h2>
        {/* Split consent content into paragraphs */}
        {privacyContent.consent.content[language]
          .split(". ")
          .map((part, idx, arr) =>
            idx < arr.length - 1 ? <p key={idx}>{part.trim() + "."}</p> : null
          )}
        {/* Last sentence contains the contact info */}
        <p>
          {privacyContent.consent.content[language]
            .split(". ")
            .slice(-1)[0]
            .replace("info@cerasp.ca", "")}
          <a href="mailto:info@cerasp.ca">info@cerasp.ca</a>
          {language === "fr"
            ? " ou par courrier à : CERASP 7171 Frederick-Banting, Centre d’Innovation adMare, Montréal, Québec, H4S 1Z9, Canada."
            : " or by mail at: CERASP 7171 Frederick-Banting, Centre d’Innovation adMare, Montréal, Québec, H4S 1Z9, Canada."}
        </p>

        <h2>{language === "fr" ? "4. " + privacyContent.non_disclosure.title.fr : "4. " + privacyContent.non_disclosure.title.en}</h2>
        {/* Split non_disclosure content into paragraphs */}
        {privacyContent.non_disclosure.content[language]
          .split(". ")
          .map((part, idx, arr) =>
            idx < arr.length - 1 ? <p key={idx}>{part.trim() + "."}</p> : null
          )}

        <h2>{language === "fr" ? "5. " + privacyContent.data_security.title.fr : "5. " + privacyContent.data_security.title.en}</h2>
        {/* Split data_security content into main and rights */}
        <p>
          {privacyContent.data_security.content[language]
            .split("\n\n")[0]}
        </p>
        <p>
          <strong>
            {privacyContent.data_security.content[language]
              .split("\n\n")[1]
              .split("\n- ")[0]}
          </strong>
        </p>
        <ul>
          {privacyContent.data_security.content[language]
            .split("\n- ")
            .slice(1)
            .map((item, idx) => (
              <li key={idx}>{item.replace(/\n/g, "")}</li>
            ))}
        </ul>

        <h2>{language === "fr" ? "6. " + privacyContent.cookies.title.fr : "6. " + privacyContent.cookies.title.en}</h2>
        {/* Split cookies content into main and bullets */}
        <p>
          {privacyContent.cookies.content[language]
            .split("\n- ")[0]}
        </p>
        <ul>
          {privacyContent.cookies.content[language]
            .split("\n- ")
            .slice(1)
            .map((item, idx) => (
              <li key={idx}>{item.replace(/\n/g, "")}</li>
            ))}
        </ul>

        <h2>{language === "fr" ? "7. " + privacyContent.statistics.title.fr : "7. " + privacyContent.statistics.title.en}</h2>
        {/* Split statistics content into paragraphs and bullets */}
        <p>
          {privacyContent.statistics.content[language]
            .split("\n")[0]}
        </p>
        <p>
          {privacyContent.statistics.content[language]
            .split("\n")
            .find(line => line.includes("order to count")) ||
            privacyContent.statistics.content[language]
              .split("\n")
              .find(line => line.includes("afin de comptabiliser"))}
        </p>
        <ul>
          {privacyContent.statistics.content[language]
            .split("\n- ")
            .slice(1, 6)
            .map((item, idx) => (
              <li key={idx}>{item.replace(/\n/g, "")}</li>
            ))}
        </ul>
        <p>
          {privacyContent.statistics.content[language]
            .split("\n")
            .slice(-2)
            .join(" ")
            .replace(/^- /, "")}
        </p>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
