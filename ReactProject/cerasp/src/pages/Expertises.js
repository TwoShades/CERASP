import "./Pages-css/Expertises.css";
import StockImageFetch from "../components/placeholders/StockImageFetch.js";
import Footer from "../components/layouts/Footer.js";
import TextPanelOneImage from "../components/panels/TextPanelOneImage.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";
import TwoColumnThreeText from "../components/panels/TwoColumnThreeText.js";
import TwoImageTwoText from "../components/panels/TwoImageTwoText.js";
import FiveSteps from "../components/panels/FiveSteps.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import OneBigPanel from "../components/panels/OneBigPanel.js";
import ExpertiseOverview from "../pages/expertise-subpages/ExpertiseOverview.js";
import ExpertiseGMP from "./expertise-subpages/ExpertiseGMP.js";
import ExpertiseFormulation from "./expertise-subpages/ExpertiseFormulation.js";

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

      {/*   =====================================
              =Animal health, NHP & Nutraceuticals=
              =====================================
        */}

      <div title="expertises" id="animal-health">
        <TwoImageTwoText
          leftImage={<div className="image-placeholder">Left Image</div>}
          leftText={
            <p>
              Lorem Ipsum
              <br />
              Lorem ipsum dolor sit amet consectetur. Pharetra id sapien quam
              diam purus euismod tincidunt morbi. Gravida ut nulla tincidunt mi
              eu velit pharetra. In consectetur sed aliquam placerat donec
              convallis feugiat pellentesque. Viverra quis etiam ut nulla
              senectus neque nulla mi non.
            </p>
          }
          rightImage={<div className="image-placeholder">Right Image</div>}
          rightText={
            <p>
              Lorem Ipsum Dorem
              <br />
              Lorem ipsum dolor sit amet consectetur. Pharetra id sapien quam
              diam purus euismod tincidunt morbi. Gravida ut nulla tincidunt mi
              eu velit pharetra. In consectetur sed aliquam placerat donec
              convallis feugiat pellentesque. Viverra quis etiam ut nulla
              senectus neque nulla mi non.
            </p>
          }
        />
      </div>

      {/*   =================================
              ========Applied Research=========
              =================================
        */}

      <div title="expertises" id="applied-research">
        <FiveSteps
          topRowContent={<h2>Applied Research</h2>}
          step1={<div className="step1">Step 1: Formulate</div>}
          step2={<div className="step2">Step 2: Support</div>}
          step3={<div className="step3">Step 3: Transfer</div>}
          step4={<div className="step4">Step 4: Select</div>}
          step5={<div className="step5">Step 5: Develop</div>}
        />
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

      {/*   =================================
              ========Bioinformatics===========
              =================================
        */}

      <div title="expertises" id="bioinformatics">
        <TwoColumnThreeText
          circleImage={<div className="circle"></div>}
          textUnderImage={
            <>
              <p>
                At the CERASP, we offer cutting-edge Bioinformatics services
                tailored for both pharmaceutical and healthcare sectors. Our
                Bioinformatics team specializes in leveraging advanced
                computational methods and data analysis techniques to support
                drug discovery, personalized medicine, and biomarker
                identification.{" "}
              </p>
              <p>
                Whether you’re in pharmaceutical development seeking robust
                data-driven solutions or in healthcare requiring precision
                medicine insights, our Bioinformatics services are designed to
                meet your most complex research and clinical challenges with
                innovation and expertise.
              </p>
            </>
          }
          titleTextOne={<h2>Genomic data analysis</h2>}
          titleTextTwo={<h2>Comprehensive data insights</h2>}
          titleTextThree={<h2>Accelerated research</h2>}
          descTextOne={
            <p>Transcriptomics, proteomics, and metabolomics services. </p>
          }
          descTextTwo={<p>To optimize therapeutic strategies. </p>}
          descTextThree={
            <>
              <p>Through advanced computational methods.</p>
              <p> Tailored solutions for precision medicine. </p>
            </>
          }
        ></TwoColumnThreeText>
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
        <ContactUsForm />
      </div>

      <Footer />
    </div>
  );
};

export default Expertises;
