import "./Pages-css/Expertises.css";
import StockImageFetch from "../components/placeholders/StockImageFetch.js";
import Footer from "../components/layouts/Footer.js";
import TextPanelOneImage from "../components/panels/TextPanelOneImage.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";
import TwoColumnThreeText from "../components/panels/TwoColumnThreeText.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import OneBigPanel from "../components/panels/OneBigPanel.js";
import ExpertiseOverview from "../pages/expertise-subpages/ExpertiseOverview.js";
import ExpertiseGMP from "./expertise-subpages/ExpertiseGMP.js";
import ExpertiseFormulation from "./expertise-subpages/ExpertiseFormulation.js";
import ExpertiseAnimal from "./expertise-subpages/ExpertiseAnimal.js";
import ExpertiseApplied from "./expertise-subpages/ExpertiseApplied.js";
import ExpertiseBioinformatics from "./expertise-subpages/ExpertiseBioinformatics.js";
import ContactUs from "./ContactUs/ContactUs.js"; 

const Expertises = () => {
  useScrollToPanel();
  return (
    <div className="expertises-page page-content">

      {/* ====OVERVIEW==== */}

      <div title="expertises" id="overview">
        <ExpertiseOverview
          topRowContent={
            <>
              <h1>Expertise & Solution</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Molestie ac viverra
                vitae enim ut.
              </p>
            </>
          }
        />
      </div>

      {/* ===GMP EXPERTISE=== */}

      <div title="expertises" id="gmp-expertise-&-biomanufacturing">
        <ExpertiseGMP />
      </div>

      {/* =FORMULATIONS OF PHARMACEUTICALS= */}

      <div title="expertises" id="formulation-of-pharmaceuticals">
        <ExpertiseFormulation />
      </div>

      {/* =====Animal health, NHP & Nutraceuticals==== */}

      <div title="expertises" id="animal-health">
        <ExpertiseAnimal />
      </div>

      {/* ===Applied Research==== */}

      <div title="expertises" id="applied-research">
        <ExpertiseApplied />
      </div>

      {/*   =================================
              =======Troubleshooting===========
              =================================
        */}

      <div title="expertises" id="troubleshooting">
        <OneBigPanel
          title="Troubleshooting"
          mainText="Lorem ipsum dolor sit amet consectetur. Molestie ac viverra vitae enim ut."
          image={<div className="image-placeholder"></div>}
        />
      </div>

      {/*   ===============================
              =====HEALTH CANADA PARTNER=====
              ===============================
        */}

      <div title="expertises" id="health-canada-partner">
        <TextPanelOneImage
          leftContent={
            <>
              <a href="#">HEALTH CANADA</a>
              <h1>
                Recognized partner of Health Canada for regulatory affairs and
                audits.
              </h1>
              <p>
                As an official partner of Health Canada, we deliver solutions
                that meet the highest industry standards.
              </p>
            </>
          }
          rightContent={<div className="image-section"></div>}
        />
      </div>

      {/*   =================================
              ======Technical Training=========
              =================================
        */}

      <div title="expertises" id="technical-training">
        <p>Technical Training</p>
      </div>

      {/* =====Bioinformatics===== */}

      <div title="expertises" id="bioinformatics">
        <ExpertiseBioinformatics />
      </div>

      {/*   =================================
              =======Numeric Health============
              =================================
        */}

      <div title="expertises" id="numeric-health">
        <p>Numeric Health</p>
      </div>

      {/*   =================================
              ======Help Access Funding========
              =================================
        */}

      <div title="expertises" id="help-access-funding">
        <p>Help Access Funding</p>
      </div>

      {/*   ======================
              =====CONTACT FORM=====
              ======================
        */}

      <div title="expertises" id="contact-us-form">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default Expertises;
