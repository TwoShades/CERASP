import "./Pages-css/Expertises.css";

import useScrollToPanel from "../hooks/useScrollToPanel.js";

import ExpertiseOverview from "../pages/expertise-subpages/ExpertiseOverview.js";
import ExpertiseGMP from "./expertise-subpages/ExpertiseGMP.js";
import ExpertiseFormulation from "./expertise-subpages/ExpertiseFormulation.js";
import ExpertiseAnimal from "./expertise-subpages/ExpertiseAnimal.js";
import ExpertiseApplied from "./expertise-subpages/ExpertiseApplied.js";
import ExpertiseBioinformatics from "./expertise-subpages/ExpertiseBioinformatics.js";
import ExpertiseTroubleshooting from "./expertise-subpages/ExpertiseTroubleshooting.js";
import ExpertiseHealthCanada from "./expertise-subpages/ExpertiseHealthCanada.js";
import ExpertiseTraining from "./expertise-subpages/ExpertiseTraining.js";
import ExpertiseFunding from "./expertise-subpages/ExpertiseFunding.js";
import ExpertiseNumeric from "./expertise-subpages/ExpertiseNumeric.js";

import ContactUs from "./ContactUs/ContactUs.js";
import Footer from "../components/layouts/Footer.js";


const Expertises = () => {
  useScrollToPanel();
  return (
    <div className="expertises-page page-content">

      {/* ====OVERVIEW==== */}

      <div title="expertises" id="overview">
        <ExpertiseOverview
          topRowContent={
            <>
              <h1>Expertise & Solution</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Molestie ac viverra
                vitae enim ut tu.
              </p>
            </>
          }
        />
      </div>

      {/* ===GMP EXPERTISE=== */}

      <div title="expertises" id="gmp-expertise-&-biomanufacturing">
        <ExpertiseGMP />
      </div>

      {/* =FORMULATIONS OF PHARMACEUTICALS= */}

      <div title="expertises" id="formulation-of-pharmaceuticals">
        <ExpertiseFormulation />
      </div>

      {/* =====Animal health, NHP & Nutraceuticals==== */}

      <div title="expertises" id="animal-health">
        <ExpertiseAnimal />
      </div>

      {/* ===Applied Research==== */}

      <div title="expertises" id="applied-research">
        <ExpertiseApplied />
      </div>

      {/* =====Troubleshooting===== */}

      <div title="expertises" id="troubleshooting">
        <ExpertiseTroubleshooting />
      </div>

      {/* ====HEALTH CANADA PARTNER==== */}

      <div title="expertises" id="health-canada-partner">
        <ExpertiseHealthCanada />
      </div>

      {/* ====Technical Training==== */}

      <div title="expertises" id="technical-training">
        <ExpertiseTraining />
      </div>

      {/* =====Bioinformatics===== */}

      <div title="expertises" id="bioinformatics">
        <ExpertiseBioinformatics />
      </div>

      {/*   =================================
              =======Numeric Health============
              =================================
        */}

      <div title="expertises" id="numeric-health">
        <ExpertiseNumeric />
      </div>

      {/* ====Help Access Funding==== */}

      <div title="expertises" id="help-access-funding">
        <ExpertiseFunding />
      </div>

      {/* ===CONTACT FORM=== */}

      <div title="expertises" id="contact-us-form">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default Expertises;
