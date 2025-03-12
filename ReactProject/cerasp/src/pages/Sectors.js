import "./css/Sectors.css";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import TextPanelOneImage from "../components/panels/TextPanelOneImage.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";
import useScrollToPanel from "../hooks/useScrollToPanel";

const Sectors = () => {
  useScrollToPanel();

  return (
    <div className="sectors scroll-container">
      {/*   ===================
              =====OVERVIEW======
              ===================
        */}

      <ScrollPanel title="sector-of-activities" id="overview">
        <TextPanelOneImage
          leftContent={
            <>
              <a href="#">SECTORS</a>
              <h1>
                Lorem ipsum dolor sit amet consectetur. Etiam diam nisi eget
                mauris massa aliquam.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Pharetra id sapien quam
                diam purus euismod tincidunt morbi. Gravida ut nulla tincidunt
                mi eu velit pharetra. In consectetur sed aliquam placerat donec
                convallis feugiat pellentesque. Viverra quis etiam ut nulla
                senectus neque nulla mi non.
              </p>
            </>
          }
          rightContent={<div className="image-section"></div>}
        />
      </ScrollPanel>

      {/*   =========================
              =====PREFORMULATION======
              =========================
        */}

      <ScrollPanel title="sector-of-activities" id="preformulation">
        <p>PREFORMULATION</p>
      </ScrollPanel>

      {/*   ======================
              =====FORMULATION======
              ======================
        */}

      <ScrollPanel title="sector-of-activities" id="formulation">
        <p>FORMULATION</p>
      </ScrollPanel>

      {/*   ==========================
              ==RESEARCH & TECH SUPPORT=
              ==========================
        */}

      <ScrollPanel title="sector-of-activities" id="research-&-tech-support">
        <p>RESEARCH & TECH SUPPORT</p>
      </ScrollPanel>

      {/*   ======================
              ==REF AFF ACTIVITIES==
              ======================
        */}

      <ScrollPanel title="sector-of-activities" id="ref-aff-activities">
        <p>REF AFF ACTIVITIES</p>
      </ScrollPanel>

      {/*   ======================
              =====PROTOTYPING======
              ======================
        */}

      <ScrollPanel title="sector-of-activities" id="prototyping">
        <p>PROTOTYPING</p>
      </ScrollPanel>

      {/*   =========================
              =====PHARMACEUTICAL======
              =========================
        */}

      <ScrollPanel title="sector-of-activities" id="pharmaceutical">
        <p>PHARMACEUTICAL</p>
      </ScrollPanel>

      {/*   =================================
              =====CHEMISTRY & EXTRACTION======
              =================================
        */}

      <ScrollPanel title="sector-of-activities" id="chemistry-&-extraction">
        <p>CHEMISTRY & EXTRACTION</p>
      </ScrollPanel>

      {/*   =======================
              =====R&D SCALE UP======
              =======================
        */}

      <ScrollPanel title="sector-of-activities" id="r&d-scale-up">
        <p>R&D SCALE UP</p>
      </ScrollPanel>

      {/*   ============================
              =====PROTEIN SYNTHESIS======
              ============================
        */}

      <ScrollPanel title="sector-of-activities" id="protein-synthesis">
        <p>PROTEIN SYNTHESIS</p>
      </ScrollPanel>

      {/*   ===================================
              =====FEASIBILITY & TECH TRANS======
              ===================================
        */}

      <ScrollPanel title="sector-of-activities" id="feasibility-&-tech-trans">
        <p>FEASIBILITY & TECH TRAN</p>
      </ScrollPanel>

      {/*   ===========================
              =====TRAINING PROGRAM======
              ===========================
        */}

      <ScrollPanel title="sector-of-activities" id="training-program">
        <p>TRAINING PROGRAM</p>
      </ScrollPanel>

      {/*   ===================
              =====SUPPORT=======
              ===================
        */}

      <ScrollPanel title="sector-of-activities" id="support">
        <p>SUPPORT</p>
      </ScrollPanel>

      {/*   =======================
              =====CONTACT FORM======
              =======================
        */}

      <ScrollPanel title="sector-of-activities" id="">
        <ContactUsForm />
      </ScrollPanel>

      <Footer />
    </div>
  );
};

export default Sectors;
