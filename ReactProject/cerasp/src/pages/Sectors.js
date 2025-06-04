import "./Pages-css/Sectors.css";
import Footer from "../components/layouts/Footer.js";
import ContactUs from "./ContactUs/ContactUs.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import SectorsOverview from "./sectors-subpages/SectorsOverview.js";
import SectorsPrototyping from "./sectors-subpages/SectorsPrototyping.js";

const Sectors = () => {
  useScrollToPanel();

  return (
    <div className="sectors page-content">
      {/*   ===================
              =====OVERVIEW======
              ===================
        */}

      <div title="sector-of-activities" id="overview">
        <SectorsOverview />
      </div>

      {/*   =========================
              =====PREFORMULATION======
              =========================
        */}

      <div title="sector-of-activities" id="preformulation">
        <p>PREFORMULATION</p>
      </div>

      {/*   ======================
              =====FORMULATION======
              ======================
        */}

      <div title="sector-of-activities" id="formulation">
        <p>one big panel = formulation</p>
      </div>

      {/*   ==========================
              ==RESEARCH & TECH SUPPORT=
              ==========================
        */}

      {/* <div title="sector-of-activities" id="research-&-tech-support">
        <TwoImageTwoText
          leftImage={<div className="image-placeholder">Left Image</div>}
          leftText={
            <p>
              Lorem Ipsum
              <br />• Formulation Development: Assisting in creating and
              improving drug formulations to ensure efficacy, safety, and
              stability. • Process optimization: We optimize manufacturing
              processes to ensure consistency, scalability and efficiency while
              minimizing risk and costs. • Regulatory Guidance: Ensuring that
              all products meet the necessary regulatory standards through
              documentation, audits, and compliance assistance.
            </p>
          }
          rightImage={<div className="image-placeholder">Right Image</div>}
          rightText={
            <p>
              Lorem Ipsum Dorem
              <br />• Troubleshooting and Problem-Solving: Identifying and
              resolving technical challenges in both research and production
              settings to ensure continuous improvement. • Preclinical and
              Preclinical Support: Providing research support for the
              development of new therapies, from laboratory studies to clinical
              trials. • Strategic Decisions: Our expertise supports strategic
              decisions on whether or not to pursue product development, thanks
              to robust data and in-depth analysis.
            </p>
          }
        />
      </div> */}

      {/*   ======================
              ==REF AFF ACTIVITIES==
              ======================
        */}

      <div title="sector-of-activities" id="ref-aff-activities">
        <p>reff aff activities</p>
      </div>

      {/*   ======================
              =====PROTOTYPING======
              ======================
        */}

      <div title="sector-of-activities" id="prototyping">
        <SectorsPrototyping />
      </div>

      {/*   =========================
              =====PHARMACEUTICAL======
              =========================
        */}

      <div title="sector-of-activities" id="pharmaceutical">
        <p>same as health canada = pharmaceuticals</p>
      </div>

      {/*   =================================
              =====CHEMISTRY & EXTRACTION======
              =================================
        */}

      <div title="sector-of-activities" id="chemistry-&-extraction">
        <p>CHEMISTRY & EXTRACTION</p>
      </div>

      {/*   =======================
              =====R&D SCALE UP======
              =======================
        */}

      <div title="sector-of-activities" id="r&d-scale-up">
        <p>one big panel = r&d scale up</p>
      </div>

      {/*   ============================
              =====PROTEIN SYNTHESIS======
              ============================
        */}

      {/* <div title="sector-of-activities" id="protein-synthesis">
        <TwoImageTwoText
          leftImage={<div className="image-placeholder">Left Image</div>}
          leftText={
            <p>
              Many proteins of interest can be produced by fermentation from
              microorganisms such as bacteria, fungi, or from plants.
              Overexpression of these proteins can be induced by genetic
              transformation using plasmids (bacteria), protoplasts (fungi) or
              agrobacterium (plants).
              <br />
              Examples of types of proteins: • Enzymes • Membrane markers •
              Growth hormones • Peptides • Monoclonal antibodies
            </p>
          }
          rightImage={<div className="image-placeholder">Right Image</div>}
          rightText={
            <p>
              The optimum conditions for extraction and purification can be
              achieved by integrating cost effective and environmentally
              friendly solutions, while preserving the structure and
              functionality of these proteins. Finally, their structure and
              functionality can be characterized using our extensive range of
              equipment.
              <br />
              Examples of applications: • Antimicrobial formulations and
              coatings • Enzymatic biosensors • Functionalization of
              nanoparticles with specific ligands (antibodies, peptides,
              proteins) for cell line-specific targeting
            </p>
          }
        />
      </div> */}

      {/*   ===================================
              =====FEASIBILITY & TECH TRANS======
              ===================================
        */}

      <div title="sector-of-activities" id="feasibility-&-tech-trans">
        <p>feasibility</p>
      </div>

      {/*   ===========================
              =====TRAINING PROGRAM======
              ===========================
        */}

      <div title="sector-of-activities" id="training-program">
        {/* <CenteredFeaturePanel
          title="GMP EXPERTISE & BIOMANUFACTURING"
          image={<div className="image-placeholder"></div>}
          features={[
            {
              title: "Manufacturing",
              text:
                "Manufacturing According to GMP (Good Manufacturing Practices) Standards: " +
                "At CERASP, we are a facility that is not GMP-compliant. However, our laboratories and " +
                "production areas are GLP (Good Laboratory Practice) compliant, and we work and " +
                "document according to GMP standards to facilitate technology transfer and the " +
                "preparation of dossiers that will eventually be submitted to regulatory authorities for our " +
                "clients.",
            },
            {
              title: "Develop your Product",
              text:
                "CERASP helps you develop products and manufacturing processes that are GMP compliant (GMP ready, thus ready for transfer)." +
                "Additionally, it is worth noting that we have several partnerships with universities and collaborations with other College Centers for " +
                "Technology Transfer (CCTTs) for projects aimed at industrial partners.",
            },
            {
              title: "Biomanufacturing",
              text: `We specialize in the optimization of bioprocesses, focusing on fermentation-based 
              processes in solid and liquid cultures. Our team has extensive experience in producing 
              enzymes and bioproducts, conducting bioactivity assessments, and employing microbial 
              identification and genomics techniques. We also apply analytical chemistry for specialized 
              applications such as hydrocarbon analysis.`,
            },
          ]}
        /> */}
      </div>

      {/*   ===================
              =====SUPPORT=======
              ===================
        */}

      <div title="sector-of-activities" id="support">
        <p>support</p>
      </div>

      {/*   =======================
              =====CONTACT FORM======
              =======================
        */}

      <div title="sector-of-activities" id="contact-us-form">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default Sectors;
