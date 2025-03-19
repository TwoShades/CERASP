import "./css/Expertises.css";
import StockImageFetch from "../components/placeholders/StockImageFetch.js";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import TextPanelOneImage from "../components/panels/TextPanelOneImage.js";
import CenteredFeaturePanel from "../components/panels/CenteredFeaturePanel.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";
import ThreeColumnPanel from "../components/panels/ThreeColumnPanel.js";
import TwoColumnThreeText from "../components/panels/TwoColumnThreeText.js";
import TwoImageTwoText from "../components/panels/TwoImageTwoText.js";
import FiveSteps from "../components/panels/FiveSteps.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import OneBigPanel from "../components/panels/OneBigPanel.js";

const Expertises = () => {
  useScrollToPanel();
  return (
    <div className="expertises scroll-container">
      {/*   ===================
              =====OVERVIEW======
              ===================
        */}

      <ScrollPanel title="expertises" id="overview">
        <ThreeColumnPanel
          topRowContent={
            <>
              <h1>Expertise & Solution</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Molestie ac viverra
                vitae enim ut.
              </p>
            </>
          }
          col1Content={
            <StockImageFetch
              searchTerm="microscope"
              imgSource="large"
              orientation="portrait"
              page={1}
              perPage={1}
            />
          }
          col2Content={
            <StockImageFetch
              searchTerm="petri"
              imgSource="large"
              orientation="portrait"
              page={1}
              perPage={1}
            />
          }
          col3Content={
            <StockImageFetch
              searchTerm="bubble"
              imgSource="large"
              orientation="portrait"
              page={1}
              perPage={1}
            />
          }
        />
      </ScrollPanel>

      {/*   ===================
              ===GMP EXPERTISE===
              ===================
        */}

      <ScrollPanel title="expertises" id="gmp-expertise-&-biomanufacturing">
        <CenteredFeaturePanel
          title="GMP EXPERTISE & BIOMANUFACTURING"
          image={<div className="image-placeholder"></div>}
          features={[
            {
              title: "Manufacturing",
              text:
                "Manufacturing According to GMP (Good Manufacturing Practices) Standards: " +
                "At CERASP, we are a facility that is not GMP-compliant. However, our laboratories and " +
                "production areas are GLP (Good Laboratory Practice) compliant, and we work and " +
                "document according to GMP standards to facilitate technology transfer and the " +
                "preparation of dossiers that will eventually be submitted to regulatory authorities for our " +
                "clients.",
            },
            {
              title: "Develop your Product",
              text:
                "CERASP helps you develop products and manufacturing processes that are GMP compliant (GMP ready, thus ready for transfer)." +
                "Additionally, it is worth noting that we have several partnerships with universities and collaborations with other College Centers for " +
                "Technology Transfer (CCTTs) for projects aimed at industrial partners.",
            },
            {
              title: "Biomanufacturing",
              text: `We specialize in the optimization of bioprocesses, focusing on fermentation-based 
              processes in solid and liquid cultures. Our team has extensive experience in producing 
              enzymes and bioproducts, conducting bioactivity assessments, and employing microbial 
              identification and genomics techniques. We also apply analytical chemistry for specialized 
              applications such as hydrocarbon analysis.`,
            },
          ]}
        />
      </ScrollPanel>

      {/*   =================================
              =FORMULATIONS OF PHARMACEUTICALS=
              =================================
        */}

      <ScrollPanel title="expertises" id="formulation-of-pharmaceuticals">
        <TwoColumnThreeText
          circleImage={<div className="circle"></div>}
          textUnderImage={<p>FORMULATIONS OF PHARMACEUTICALS</p>}
          titleTextOne={<h2>We Offer</h2>}
          titleTextTwo={<h2>We Work</h2>}
          titleTextThree={<h2>We Help</h2>}
          descTextOne={
            <p>
              Expert formulation services tailored to the needs of
              pharmaceuticals, animal health products, natural health products
              (NHPs), and nutraceuticals. Our services include the development
              and optimization of drug formulations, ensuring efficacy,
              stability, and safety.{" "}
            </p>
          }
          descTextTwo={
            <p>
              To create the appropriate dosage forms—such as tablets, capsules,
              softgels, gummies, creams, liquids, ointments and
              injectables—while adhering to regulatory standards and industry
              best practices.
            </p>
          }
          descTextThree={
            <p>
              With product improvement, process optimization, and ensure that
              formulations meet market requirements for both human and animal
              health sectors.{" "}
            </p>
          }
        ></TwoColumnThreeText>
      </ScrollPanel>

      {/*   =====================================
              =Animal health, NHP & Nutraceuticals=
              =====================================
        */}

      <ScrollPanel title="expertises" id="animal-health">
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
      </ScrollPanel>

      {/*   =================================
              ========Applied Research=========
              =================================
        */}

      <ScrollPanel title="expertises" id="applied-research">
        <FiveSteps
          topRowContent={<h2>Applied Research</h2>}
          step1={<div className="step1">Step 1: Formulate</div>}
          step2={<div className="step2">Step 2: Support</div>}
          step3={<div className="step3">Step 3: Transfer</div>}
          step4={<div className="step4">Step 4: Select</div>}
          step5={<div className="step5">Step 5: Develop</div>}
        />
      </ScrollPanel>

      {/*   =================================
              =======Troubleshooting===========
              =================================
        */}

      <ScrollPanel title="expertises" id="troubleshooting">
        <OneBigPanel
          title="Troubleshooting"
          mainText="Lorem ipsum dolor sit amet consectetur. Molestie ac viverra vitae enim ut."
          image={<div className="image-placeholder"></div>}
        />
      </ScrollPanel>

      {/*   ===============================
              =====HEALTH CANADA PARTNER=====
              ===============================
        */}

      <ScrollPanel title="expertises" id="health-canada-partner">
        <TextPanelOneImage
          leftContent={
            <>
              <a href="#">HEALTH CANADA</a>
              <h1>
                Recognized partner of Health Canada for regulatory affairs and
                audits.
              </h1>
              <p>
                As an official partner of Health Canada, we deliver
                solutions that meet the highest industry standards.
              </p>
            </>
          }
          rightContent={<div className="image-section"></div>}
        />
      </ScrollPanel>

      {/*   =================================
              ======Technical Training=========
              =================================
        */}

      <ScrollPanel title="expertises" id="technical-training">
        <p>Technical Training</p>
      </ScrollPanel>

      {/*   =================================
              ========Bioinformatics===========
              =================================
        */}

      <ScrollPanel title="expertises" id="bioinformatics">
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
      </ScrollPanel>

      {/*   =================================
              =======Numeric Health============
              =================================
        */}

      <ScrollPanel title="expertises" id="numeric-health">
        <p>Numeric Health</p>
      </ScrollPanel>

      {/*   =================================
              ======Help Access Funding========
              =================================
        */}

      <ScrollPanel title="expertises" id="help-access-funding">
        <p>Help Access Funding</p>
      </ScrollPanel>

      {/*   ======================
              =====CONTACT FORM=====
              ======================
        */}

      <ScrollPanel title="expertises" id="contact-us-form">
        <ContactUsForm />
      </ScrollPanel>

      <Footer />
    </div>
  );
};

export default Expertises;
