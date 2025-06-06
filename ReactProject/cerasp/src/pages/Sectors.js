import "./Pages-css/Sectors.css";
import Footer from "../components/layouts/Footer.js";
import ContactUs from "./ContactUs/ContactUs.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import SectorsOverview from "./sectors-subpages/SectorsOverview.js";
import SectorsPrototyping from "./sectors-subpages/SectorsPrototyping.js";
import UnderConstruction from "../components/layouts/UnderConstruction.js";
import SectorsPreformulation from "./sectors-subpages/SectorsPreformulation.js";
import SectorsFormulation from "./sectors-subpages/SectorsFormulation.js";
import SectorsRegulatory from "./sectors-subpages/SectorsRegulatory.js";
import SectorsPharma from "./sectors-subpages/SectorsPharma.js";
import SectorsProtein from "./sectors-subpages/SectorsProtein.js";
import SectorsSupport from "./sectors-subpages/SectorsSupport.js";

const Sectors = () => {
  useScrollToPanel();

  return (
    <div className="sectors page-content">
      {/*   ===================
              =====OVERVIEW======
              ===================
        */}

      <div id="overview">
        {/* <SectorsOverview /> */}
        <UnderConstruction />
      </div>

      {/*   =========================
              =====PREFORMULATION======
              =========================
        */}

      <div id="preformulation">
        <SectorsPreformulation />
      </div>

      {/*   ======================
              =====FORMULATION======
              ======================
        */}

      <div id="formulation">
        <SectorsFormulation />
      </div>

      {/*   ==========================
              ==RESEARCH & TECH SUPPORT=
              ==========================
        */}

      <div id="research-&-tech-support">
        
      </div>

      {/*   ======================
              ==REF AFF ACTIVITIES==
              ======================
        */}

      <div id="ref-aff-activities">
        <SectorsRegulatory />
      </div>

      {/*   ======================
              =====PROTOTYPING======
              ======================
        */}

      <div id="prototyping">
        <SectorsPrototyping />
      </div>

      {/*   =========================
              =====PHARMACEUTICAL======
              =========================
        */}

      <div id="pharmaceutical">
        <SectorsPharma />
      </div>

      {/*   =================================
              =====CHEMISTRY & EXTRACTION======
              =================================
        */}

      <div id="chemistry-&-extraction">
        
      </div>

      {/*   =======================
              =====R&D SCALE UP======
              =======================
        */}

      <div id="r&d-scale-up">
        
      </div>

      {/*   ============================
              =====PROTEIN SYNTHESIS======
              ============================
        */}

      <div id="protein-synthesis">
        <SectorsProtein />
      </div>

      {/*   ===================================
              =====FEASIBILITY & TECH TRANS======
              ===================================
        */}

      <div id="feasibility-&-tech-trans">
        
      </div>

      {/*   ===========================
              =====TRAINING PROGRAM======
              ===========================
        */}

      <div id="training-program">
        <SectorsSupport />
      </div>

      {/*   ===================
              =====SUPPORT=======
              ===================
        */}

      <div id="support">
        
      </div>

      {/*   =======================
              =====CONTACT FORM======
              =======================
        */}

      <div id="contact-us-form">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default Sectors;
