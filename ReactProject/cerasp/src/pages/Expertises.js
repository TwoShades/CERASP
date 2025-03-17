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
              title: "Lorem Ipsum",
              text: "Potter ipsum wand elf parchment wingardium. Second half-blood easy holly mrs turns hedwig butter. Nearly-headless fat lily flat hair.",
            },
            {
              title: "Lorem Ipsum",
              text: "Potter ipsum wand elf parchment wingardium. Second half-blood easy holly mrs turns hedwig butter. Nearly-headless fat lily flat hair.",
            },
            {
              title: "Lorem Ipsum",
              text: "Potter ipsum wand elf parchment wingardium. Second half-blood easy holly mrs turns hedwig butter. Nearly-headless fat lily flat hair.",
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
          titleTextOne={<h2>Title One</h2>}
          titleTextTwo={<h2>Title Two</h2>}
          titleTextThree={<h2>Title Three</h2>}
          descTextOne={<p>Description One</p>}
          descTextTwo={<p>Description Two</p>}
          descTextThree={<p>Description Three</p>}
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
                Lorem ipsum dolor sit amet consectetur. Etiam diam nisi eget
                mauris massa aliquam.
              </h1>
              <p>
                Recognized partner of Health Canada for regulatory affairs and
                audits. As an official partner of Health Canada, we deliver
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
        <p>Bioinformatics</p>
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

      <ScrollPanel title="expertises" id="overview">
        <ContactUsForm />
      </ScrollPanel>

      <Footer />
    </div>
  );
};

export default Expertises;
