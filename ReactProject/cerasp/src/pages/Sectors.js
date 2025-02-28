import "./css/Sectors.css";
import StockImageFetch from "../components/StockImageFetch.js";
import ScrollPanel from "../components/ScrollPanel.js";
import Footer from "../components/Footer.js";
import TextPanelOneImage from "../components/TextPanelOneImage.js";
import CenteredFeaturePanel from "../components/CenteredFeaturePanel.js";
import ContactUsForm from "../components/ContactUsForm.js";
import ThreeColumnPanel from "../components/ThreeColumnPanel.js";
import TwoColumnThreeText from "../components/TwoColumnThreeText.js";

const Sectors = () => {

  return (
    <div className="sectors scroll-container">

        {/*   ===================
              =====OVERVIEW======
              ===================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <TextPanelOneImage 
          leftContent={ 
            <>
              <a href="#">SECTORS</a>
              <h1>Lorem ipsum dolor sit amet consectetur. Etiam diam nisi eget mauris massa aliquam.</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Pharetra id sapien quam diam purus euismod tincidunt morbi. 
                Gravida ut nulla tincidunt mi eu velit pharetra. In consectetur sed aliquam placerat donec convallis 
                feugiat pellentesque. Viverra quis etiam ut nulla senectus neque nulla mi non.</p>
            </>
          } 
          rightContent={<div className="image-section"></div>} 
        />
      </ScrollPanel>

        {/*   =========================
              =====PREFORMULATION======
              =========================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>PREFORMULATION</p>
        
      </ScrollPanel>

        {/*   ======================
              =====FORMULATION======
              ======================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>FORMULATION</p>
        
      </ScrollPanel>

        {/*   ==========================
              ==RESEARCH & TECH SUPPORT=
              ==========================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>RESEARCH & TECH SUPPORT</p>
        
      </ScrollPanel>

        {/*   ======================
              ==REF AFF ACTIVITIES==
              ======================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>REF AFF ACTIVITIES</p>
        
      </ScrollPanel>

        {/*   ======================
              =====PROTOTYPING======
              ======================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>PROTOTYPING</p>
        
      </ScrollPanel>

        {/*   =========================
              =====PHARMACEUTICAL======
              =========================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>PHARMACEUTICAL</p>
        
      </ScrollPanel>

        {/*   =================================
              =====CHEMISTRY & EXTRACTION======
              =================================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>CHEMISTRY & EXTRACTION</p>
        
      </ScrollPanel>

        {/*   =======================
              =====R&D SCALE UP======
              =======================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>R&D SCALE UP</p>
        
      </ScrollPanel>

        {/*   ============================
              =====PROTEIN SYNTHESIS======
              ============================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>PROTEIN SYNTHESIS</p>
        
      </ScrollPanel>

        {/*   ===================================
              =====FEASIBILITY & TECH TRANS======
              ===================================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>FEASIBILITY & TECH TRAN</p>
        
      </ScrollPanel>

        {/*   ===========================
              =====TRAINING PROGRAM======
              ===========================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>TRAINING PROGRAM</p>
        
      </ScrollPanel>

        {/*   ===================
              =====SUPPORT=======
              ===================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>SUPPORT</p>
        
      </ScrollPanel>

        {/*   =======================
              =====CONTACT FORM======
              =======================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <ContactUsForm />
        
      </ScrollPanel>

      <Footer />
    </div>
    );
};

export default Sectors;