import "./Pages-css/Sectors.css";
import Footer from "../components/layouts/Footer.js";
import ContactUs from "./ContactUs/ContactUs.js";

import useScrollToPanel from "../hooks/useScrollToPanel.js";
import useScrollOnNavigate from "../hooks/useScrollOnNavigate.js";

import SectorsOverview from "./sectors-subpages/SectorsOverview.js";
import SectorsNHP from "./sectors-subpages/SectorsNHP.js";
import SectorsPharmaceutical from "./sectors-subpages/SectorsPharmaceutical.js";
import SectorsBiopharmaceutical from "./sectors-subpages/SectorsBiopharmaceutical.js";
import SectorsbioTechBioMan from "./sectors-subpages/SectorsBiotechBiomanufacturing.js";
import SectorsCosmeceuticals from "./sectors-subpages/SectorsCosmeceuticals.js";
import SectorsDiagnosticTools from "./sectors-subpages/SectorsDiagnosticTools.js";
import SectorsAnimalHealth from "./sectors-subpages/SectorsAnimalHealth.js";
import SectorsNutraceutical from "./sectors-subpages/SectorsNutraceutical.js";
import SectorsMedicalDevices from "./sectors-subpages/SectorsMedicalDevices.js";

const Sectors = () => {
  useScrollToPanel();
  useScrollOnNavigate();

  return (
    <div className="sectors page-content">
      {/*   ===================
              =====OVERVIEW======
              ===================
        */}

      <div id="overview">
        {/* <SectorsOverview /> */}
        <SectorsOverview />
      </div>

      {/*===PHARMACEUTICAL====*/}

      <div id="pharmaceutical">
        <SectorsPharmaceutical />
      </div>

      {/*====BIOPHARMACEUTICAL==== */}

      <div id="biopharmaceutical">
        <SectorsBiopharmaceutical />
      </div>

      {/*=====ANIMAL HEALTH=====*/}

      <div id="animal-health">
        <SectorsAnimalHealth />
      </div>

      {/*=====REF AFF ACTIVITIES======*/}

      <div id="bioTechBioMan">
        <SectorsbioTechBioMan />
      </div>

      {/*====NHP====*/}

      <div id="nhp">
        <SectorsNHP />
      </div>

      {/*====cosmeceuticals===== */}

      <div id="cosmeceuticals">
        <SectorsCosmeceuticals />
      </div>

      {/*====Nutraceutical====*/}

      <div id="nutraceutical">
        <SectorsNutraceutical />
      </div>

      {/*=====R&D SCALE UP====*/}

      {/* <div id="r&d-scale-up">
        <SectorsScaleUp />
      </div> */}

      {/*====PROTEIN SYNTHESIS==== */}

      {/* <div id="protein-synthesis">
        <SectorsProtein />
      </div> */}

      {/* ===FEASIBILITY & TECH TRANS==== */}

      {/* <div id="feasibility-&-tech-trans">
        <SectorsFeasibility />
      </div> */}

      {/* ====MedicalDevices==== */}

      <div id="medicalDevices">
        <SectorsMedicalDevices />
      </div>

      {/*====DiagnosticTools====*/}

      <div id="diagnostic-tools">
        <SectorsDiagnosticTools />
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
