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
import SectorsRnTech from "./sectors-subpages/SectorsRnTech.js";
import SectorsScaleUp from "./sectors-subpages/SectorsScaleUp.js";
import SectorsChemistry from "./sectors-subpages/SectorsChemistry.js";
import SectorsFeasibility from "./sectors-subpages/SectorsFeasibility.js";
import SectorsTraining from "./sectors-subpages/SectorsTraining.js";

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

      {/*===PREFORMULATION====*/}

      <div id="preformulation">
        <SectorsPreformulation />
      </div>

      {/*====FORMULATION==== */}

      <div id="formulation">
        <SectorsFormulation />
      </div>

      {/*=====RESEARCH & TECH SUPPORT=====*/}

      <div id="research-&-tech-support">
        <SectorsRnTech />
      </div>

      {/*=====REF AFF ACTIVITIES======*/}

      <div id="ref-aff-activities">
        <SectorsRegulatory />
      </div>

      {/*====PROTOTYPING====*/}

      <div id="prototyping">
        <SectorsPrototyping />
      </div>

      {/*====PHARMACEUTICAL===== */}

      <div id="pharmaceutical">
        <SectorsPharma />
      </div>

      {/*====CHEMISTRY & EXTRACTION====*/}

      <div id="chemistry-&-extraction">
        <SectorsChemistry />
      </div>

      {/*=====R&D SCALE UP====*/}

      <div id="r&d-scale-up">
        <SectorsScaleUp />
      </div>

      {/*====PROTEIN SYNTHESIS==== */}

      <div id="protein-synthesis">
        <SectorsProtein />
      </div>

      {/*   ===================================
              =====FEASIBILITY & TECH TRANS======
              ===================================
        */}

      <div id="feasibility-&-tech-trans">
        <SectorsFeasibility />
      </div>

      {/*   ===========================
              =====TRAINING PROGRAM======
              ===========================
        */}

      <div id="training-program">
        <SectorsTraining />
      </div>

      {/*====SUPPORT====*/}

      <div id="support">
        <SectorsSupport />
      </div>

      {/*====CONTACT FORM===*/}

      <div id="contact-us-form">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default Sectors;
