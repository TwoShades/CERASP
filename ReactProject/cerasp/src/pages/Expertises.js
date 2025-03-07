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
import EightSteps from "../components/panels/EightSteps.js";

const Expertises = () => {

  return (
    <div className="expertises scroll-container">

      {/*   ===================
              =====OVERVIEW======
              ===================
        */}

      <ScrollPanel colorTheme="themeA">
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

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <CenteredFeaturePanel
          title="GMP EXPERTISE & BIOMANUFACTURING"
          image={<div className="image-placeholder"></div>}
          features={[
            { title: "Lorem Ipsum", text: "Potter ipsum wand elf parchment wingardium. Second half-blood easy holly mrs turns hedwig butter. Nearly-headless fat lily flat hair." },
            { title: "Lorem Ipsum", text: "Potter ipsum wand elf parchment wingardium. Second half-blood easy holly mrs turns hedwig butter. Nearly-headless fat lily flat hair." },
            { title: "Lorem Ipsum", text: "Potter ipsum wand elf parchment wingardium. Second half-blood easy holly mrs turns hedwig butter. Nearly-headless fat lily flat hair." }
          ]}
        />
      </ScrollPanel>

      {/*   =================================
              =FORMULATIONS OF PHARMACEUTICALS=
              =================================
        */}

      <ScrollPanel colorTheme="themeC" className="scroll-panel">
        <TwoColumnThreeText
          circleImage={<div className="circle"></div>}
          textUnderImage={<p>FORMULATIONS OF PHARMACEUTICALS</p>}
          titleTextOne={<h2>Title One</h2>}
          titleTextTwo={<h2>Title Two</h2>}
          titleTextThree={<h2>Title Three</h2>}
          descTextOne={<p>Description One</p>}
          descTextTwo={<p>Description Two</p>}
          descTextThree={<p>Description Three</p>}>
        </TwoColumnThreeText>
      </ScrollPanel>

      {/*   =====================================
              =Animal health, NHP & Nutraceuticals=
              =====================================
        */}

      <ScrollPanel colorTheme="themeA" className="scroll-panel">
        <TwoImageTwoText
          leftImage={<div className="image-placeholder">Left Image</div>}
          leftText={<p>Lorem Ipsum<br/>Lorem ipsum dolor sit amet consectetur. Pharetra id sapien quam diam purus euismod tincidunt morbi.
            Gravida ut nulla tincidunt mi eu velit pharetra. In consectetur sed aliquam placerat donec convallis
            feugiat pellentesque. Viverra quis etiam ut nulla senectus neque nulla mi non.</p>}
          rightImage={<div className="image-placeholder">Right Image</div>}
          rightText={<p>Lorem Ipsum Dorem<br/>Lorem ipsum dolor sit amet consectetur. Pharetra id sapien quam diam purus euismod tincidunt morbi.
            Gravida ut nulla tincidunt mi eu velit pharetra. In consectetur sed aliquam placerat donec convallis
            feugiat pellentesque. Viverra quis etiam ut nulla senectus neque nulla mi non.</p>}
        />
      </ScrollPanel>


      {/*   =================================
              ========Applied Research=========
              =================================
        */}

      <ScrollPanel colorTheme="themeA" className="scroll-panel">
        <EightSteps 
          topRowContent={<h2>Applied Research</h2>}
          row1Content1={<div className="step-content">Step 1: Research Topic</div>}
          row1Content2={<div className="step-content">Step 2: Literature Review</div>}
          row1Content3={<div className="step-content">Step 3: Hypothesis</div>}
          row1Content4={<div className="step-content">Step 4: Experiment Design</div>}
          row2Content5={<div className="step-content">Step 5: Data Collection</div>}
          row2Content6={<div className="step-content">Step 6: Data Analysis</div>}
          row2Content7={<div className="step-content">Step 7: Conclusion</div>}
          row2Content8={<div className="step-content">Step 8: Publication</div>}
        />
      </ScrollPanel>

      {/*   =================================
              =======Troubleshooting===========
              =================================
        */}

      <ScrollPanel colorTheme="themeA" className="scroll-panel">
        <p>Troubleshooting</p>

      </ScrollPanel>


      {/*   ===============================
              =====HEALTH CANADA PARTNER=====
              ===============================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <TextPanelOneImage
          leftContent={
            <>
              <a href="#">HEALTH CANADA</a>
              <h1>Lorem ipsum dolor sit amet consectetur. Etiam diam nisi eget mauris massa aliquam.</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Pharetra id sapien quam diam purus euismod tincidunt morbi.
                Gravida ut nulla tincidunt mi eu velit pharetra. In consectetur sed aliquam placerat donec convallis
                feugiat pellentesque. Viverra quis etiam ut nulla senectus neque nulla mi non.</p>
            </>
          }
          rightContent={<div className="image-section"></div>}
        />
      </ScrollPanel>

      {/*   =================================
              ======Technical Training=========
              =================================
        */}

      <ScrollPanel colorTheme="themeA" className="scroll-panel">
        <p>Technical Training</p>

      </ScrollPanel>

      {/*   =================================
              ========Bioinformatics===========
              =================================
        */}

      <ScrollPanel colorTheme="themeA" className="scroll-panel">
        <p>Bioinformatics</p>

      </ScrollPanel>

      {/*   =================================
              =======Numeric Health============
              =================================
        */}

      <ScrollPanel colorTheme="themeA" className="scroll-panel">
        <p>Numeric Health</p>

      </ScrollPanel>

      {/*   =================================
              ======Help Access Funding========
              =================================
        */}

      <ScrollPanel colorTheme="themeA" className="scroll-panel">
        <p>Help Access Funding</p>

      </ScrollPanel>

      {/*   ======================
              =====CONTACT FORM=====
              ======================
        */}


      <ScrollPanel colorTheme="themeA" className="scroll-panel">
        <ContactUsForm />
      </ScrollPanel>


      <Footer />
    </div>
  );
};

export default Expertises;
