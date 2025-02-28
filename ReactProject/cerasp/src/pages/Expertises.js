import "./css/Expertises.css";
import StockImageFetch from "../components/StockImageFetch";
import ScrollPanel from "../components/ScrollPanel";
import Footer from "../components/Footer";
import TextPanelOneImage from "../components/TextPanelOneImage";
import CenteredFeaturePanel from "../components/CenteredFeaturePanel.js";
import ContactUsForm from "../components/ContactUsForm.js";
import ThreeColumnPanel from "../components/ThreeColumnPanel.js";
import TwoColumnThreeText from "../components/TwoColumnThreeText.js";

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

      <ScrollPanel colorTheme="themeA" className="scroll-panel">
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
