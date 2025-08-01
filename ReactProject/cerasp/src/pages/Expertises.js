import "./Pages-css/Expertises.css";

import useScrollToPanel from "../hooks/useScrollToPanel.js";
import useScrollOnNavigate from "../hooks/useScrollOnNavigate.js";

import ExpertiseOverview from "../pages/expertise-subpages/ExpertiseOverview.js";
import ExpertiseIdeation from "./expertise-subpages/ExpertiseIdeation.js";
import ExpertiseFormulation from "./expertise-subpages/ExpertiseFormulation.js";
import ExpertiseAnimal from "./expertise-subpages/ExpertiseAnimal.js";
import ExpertiseProofConcept from "./expertise-subpages/ExpertiseProofConcept.js";
import ExpertiseScaleUp from "./expertise-subpages/ExpertiseScaleUp.js";
import ExpertiseTroubleshooting from "./expertise-subpages/ExpertiseTroubleshooting.js";
import ExpertiseHealthCanada from "./expertise-subpages/ExpertiseHealthCanada.js";
import ExpertiseProductDev from "./expertise-subpages/ExpertiseProductDev.js";
import ExpertiseFunding from "./expertise-subpages/ExpertiseFunding.js";
import ExpertiseTechTransfer from "./expertise-subpages/ExpertiseTechTransfer.js";

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

      <div id="ideation">
        <ExpertiseIdeation />
      </div>

      {/* =FORMULATIONS OF PHARMACEUTICALS= */}

      {/* <div id="formulation-of-pharmaceuticals">
        <ExpertiseFormulation />
      </div> */}

      {/* =====Animal health, NHP & Nutraceuticals==== */}

      {/* <div id="animal-health">
        <ExpertiseAnimal />
      </div> */}

      {/* ===proofConcept==== */}

      <div id="proofConcept">
        <ExpertiseProofConcept />
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

      <div id="product-development">
        <ExpertiseProductDev />
      </div>

      {/* =====Bioinformatics===== */}

      <div id="scale-up-manufacturing">
        <ExpertiseScaleUp />
      </div>

      {/* =====techTransfer=====  */}

      <div id="techTransfer">
        <ExpertiseTechTransfer />
      </div>

      {/* ====Help Access Funding==== */}

      {/* <div id="help-access-funding">
        <ExpertiseFunding />
      </div> */}

      {/* ===CONTACT FORM=== */}

      <div id="contact-us-form">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default Expertises;
