import "./Pages-css/Expertises.css";

import useScrollToPanel from "../hooks/useScrollToPanel.js";
import useScrollOnNavigate from "../hooks/useScrollOnNavigate.js";

import ExpertiseOverview from "../pages/expertise-subpages/ExpertiseOverview.js";
import ExpertiseGMP from "./expertise-subpages/ExpertiseGMP.js";
import ExpertiseFormulation from "./expertise-subpages/ExpertiseFormulation.js";
import ExpertiseAnimal from "./expertise-subpages/ExpertiseAnimal.js";
import ExpertiseApplied from "./expertise-subpages/ExpertiseApplied.js";
import ExpertiseBioinformatics from "./expertise-subpages/ExpertiseBioinformatics.js";
import ExpertiseTroubleshooting from "./expertise-subpages/ExpertiseTroubleshooting.js";
import ExpertiseHealthCanada from "./expertise-subpages/ExpertiseHealthCanada.js";
import ExpertiseProductDev from "./expertise-subpages/ExpertiseProductDev.js";
import ExpertiseFunding from "./expertise-subpages/ExpertiseFunding.js";
import ExpertiseNumeric from "./expertise-subpages/ExpertiseNumeric.js";

import ContactUs from "./ContactUs/ContactUs.js";
import Footer from "../components/layouts/Footer.js";

const Expertises = () => {
  useScrollToPanel();
  useScrollOnNavigate();
  return (
    <div className="expertises-page page-content">
      {/* ====OVERVIEW==== */}

      <div id="overview">
        <ExpertiseOverview />
      </div>

      {/* ===GMP EXPERTISE=== */}

      <div id="gmp-expertise-&-biomanufacturing">
        <ExpertiseGMP />
      </div>

      {/* =FORMULATIONS OF PHARMACEUTICALS= */}

      {/* <div id="formulation-of-pharmaceuticals">
        <ExpertiseFormulation />
      </div> */}

      {/* =====Animal health, NHP & Nutraceuticals==== */}

      {/* <div id="animal-health">
        <ExpertiseAnimal />
      </div> */}

      {/* ===Applied Research==== */}

      <div id="applied-research">
        <ExpertiseApplied />
      </div>

      {/* =====Troubleshooting===== */}

      {/* <div id="troubleshooting">
        <ExpertiseTroubleshooting />
      </div> */}

      {/* ====HEALTH CANADA PARTNER==== */}

      {/* <div id="health-canada-partner">
        <ExpertiseHealthCanada />
      </div> */}

      {/* ====Technical Training==== */}

      <div id="technical-training">
        <ExpertiseProductDev />
      </div>

      {/* =====Bioinformatics===== */}

      <div id="bioinformatics">
        <ExpertiseBioinformatics />
      </div>

      {/* =====Numeric Health=====  */}

      <div id="numeric-health">
        <ExpertiseNumeric />
      </div>

      {/* ====Help Access Funding==== */}

      <div id="help-access-funding">
        <ExpertiseFunding />
      </div>

      {/* ===CONTACT FORM=== */}

      <div id="contact-us-form">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default Expertises;
