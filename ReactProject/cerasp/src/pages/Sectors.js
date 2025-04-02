import "./css/Sectors.css";
import StockImageFetch from "../components/placeholders/StockImageFetch.js";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import TextPanelOneImage from "../components/panels/TextPanelOneImage.js";
import CenteredFeaturePanel from "../components/panels/CenteredFeaturePanel.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";
import ThreeColumnPanel from "../components/panels/ThreeColumnPanel.js";
import TwoColumnThreeText from "../components/panels/TwoColumnThreeText.js";
import TwoImageTwoText from "../components/panels/TwoImageTwoText.js";
import FiveSteps from "../components/panels/FiveSteps.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import OneBigPanel from "../components/panels/OneBigPanel.js";


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
              <a href="#">HEALTH CANADA</a>
              <h1>
                Recognized partner of Health Canada for regulatory affairs and
                audits.
              </h1>
              <p>
                As an official partner of Health Canada, we deliver
                solutions that meet the highest industry standards.
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
        <OneBigPanel
          title="Formulation"
          mainText="• Development of new products and/or improvement of existing products. 
• Dosage Forms: Develop appropriate dosage forms, such as tablets, capsules, 
creams, gels, injectables, etc., tailored to the needs of patients. 
• Product Optimization/Line Extension: Ensure that the formulation remains stable 
under different conditions and maintains its effectiveness over time, in compliance 
with pharmaceutical regulations. 
• Regulatory Compliance: Understand and comply with regulatory guidelines for 
product approval and marketing, ensuring compliance with market requirements."
          image={<div className="image-placeholder"></div>}
        />
      </ScrollPanel>

      {/*   ==========================
              ==RESEARCH & TECH SUPPORT=
              ==========================
        */}

      <ScrollPanel title="sector-of-activities" id="research-&-tech-support">
        <TwoImageTwoText
          leftImage={<div className="image-placeholder">Left Image</div>}
          leftText={
            <p>
              Lorem Ipsum
              <br />
              • Formulation Development: Assisting in creating and improving drug formulations to 
ensure efficacy, safety, and stability. 
• Process optimization: We optimize manufacturing processes to ensure consistency, 
scalability and efficiency while minimizing risk and costs. 
• Regulatory Guidance: Ensuring that all products meet the necessary regulatory 
standards through documentation, audits, and compliance assistance. 
            </p>
          }
          rightImage={<div className="image-placeholder">Right Image</div>}
          rightText={
            <p>
              Lorem Ipsum Dorem
              <br />
              • Troubleshooting and Problem-Solving: Identifying and resolving technical 
challenges in both research and production settings to ensure continuous 
improvement. 
• Preclinical and Preclinical Support: Providing research support for the development 
of new therapies, from laboratory studies to clinical trials. 
• Strategic Decisions: Our expertise supports strategic decisions on whether or not to 
pursue product development, thanks to robust data and in-depth analysis. 
            </p>
          }
        />
      </ScrollPanel>

      {/*   ======================
              ==REF AFF ACTIVITIES==
              ======================
        */}

      <ScrollPanel title="sector-of-activities" id="ref-aff-activities">
      <TwoColumnThreeText
          circleImage={<div className="circle"></div>}
          textUnderImage={<p>Regulatory Affairs Activities</p>}
          titleTextOne={<h2>We Offer</h2>}
          titleTextTwo={<h2>We Work</h2>}
          titleTextThree={<h2>We Help</h2>}
          descTextOne={
            <p>
              As a Health Canada Partner, we have a privileged access when depositing regulatory 
dossiers, gaining clarity around a regulatory pathway and preparing for or responding to 
audits and observations. 
            </p>
          }
          descTextTwo={
            <p>
              We can guide you on the regulatory process with our in-depth knowledge of Canadian, US 
and EU policies, and niche experiences to tackle any complex issues associated with new 
therapies, and support productive interactions with Health Canada, the FDA and the 
European authorities. 
            </p>
          }
          descTextThree={
            <p>
              While your intellectual property remains fully under your control, we can guide you to 
              patent experts as well as assisting your organization in registering IP in Canada. 
            </p>
          }
        ></TwoColumnThreeText>
      </ScrollPanel>

      {/*   ======================
              =====PROTOTYPING======
              ======================
        */}

      <ScrollPanel title="sector-of-activities" id="prototyping">
      <CenteredFeaturePanel
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
        />
      </ScrollPanel>

      {/*   =========================
              =====PHARMACEUTICAL======
              =========================
        */}

      <ScrollPanel title="sector-of-activities" id="pharmaceutical">
      <TextPanelOneImage
          leftContent={
            <>
              <a href="#">pharmaceutical</a>
              <h1>
              At CERASP, we offer comprehensive support throughout the drug development process, 
              from formulation to commercialization.
              </h1>
              <p>
              Our services include formulation development, 
process development and optimization, regulatory guidance, and GMP-ready compliance. 
We assist during technological transfers and support. Our expertise helps you navigate 
complex regulatory requirements and bring innovative pharmaceutical solutions to market 
efficiently and effectively.
              </p>
            </>
          }
          rightContent={<div className="image-section"></div>}
        />
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
        <OneBigPanel
          title="R&D SCALE UP"
          mainText=" Our services include formulation development, 
process development and optimization, regulatory guidance, and GMP-ready compliance. 
We assist during technological transfers and support. Our expertise helps you navigate 
complex regulatory requirements and bring innovative pharmaceutical solutions to market 
efficiently and effectively."
          image={<div className="image-placeholder"></div>}
        />
      </ScrollPanel>

      {/*   ============================
              =====PROTEIN SYNTHESIS======
              ============================
        */}

      <ScrollPanel title="sector-of-activities" id="protein-synthesis">
      <TwoImageTwoText
          leftImage={<div className="image-placeholder">Left Image</div>}
          leftText={
            <p>
              Many proteins of interest can be produced by fermentation from microorganisms such as 
bacteria, fungi, or from plants. Overexpression of these proteins can be induced by genetic 
transformation using plasmids (bacteria), protoplasts (fungi) or agrobacterium (plants). 
              <br />
              Examples of types of proteins: 
• Enzymes 
• Membrane markers 
• Growth hormones 
• Peptides 
• Monoclonal antibodies 
            </p>
          }
          rightImage={<div className="image-placeholder">Right Image</div>}
          rightText={
            <p>
              The optimum conditions for extraction and purification can be achieved by integrating cost
effective and environmentally friendly solutions, while preserving the structure and 
functionality of these proteins. Finally, their structure and functionality can be characterized 
using our extensive range of equipment. 
              <br />
              Examples of applications: 
• Antimicrobial formulations and coatings 
• Enzymatic biosensors 
• Functionalization of nanoparticles with specific ligands (antibodies, peptides, 
proteins) for cell line-specific targeting 
            </p>
          }
        />
      </ScrollPanel>

      {/*   ===================================
              =====FEASIBILITY & TECH TRANS======
              ===================================
        */}

      <ScrollPanel title="sector-of-activities" id="feasibility-&-tech-trans">
      <TwoColumnThreeText
          circleImage={<div className="circle"></div>}
          textUnderImage={<p>Our Feasibility studies and pilot trials will ensure your project is possible, or save you time 
and money! </p>}
          titleTextOne={<h2>We Offer</h2>}
          titleTextTwo={<h2>We Work</h2>}
          titleTextThree={<h2>We Help</h2>}
          descTextOne={
            <p>
              Our Services include: 
•  Studies on manufacturing, process or formulation methods (preformulation). 
•  Conducting pilot and prototype studies. 
•  Running studies on designing new facilities and equipment purchases. 
•  Conduct digital health integration studies and incorporate digital transformation. 
            </p>
          }
          descTextTwo={
            <p>
              Our technical transfer services include process optimization for protocols and parameters: 
•  Improving existing products in the case of a flawed or outdated procedure. 
•  Improve existing products, processes or processes for business, pharmacological 
or regulatory reasons. 
            </p>
          }
          descTextThree={
            <p>
              •  Improving an existing product for aesthetic reasons such as changing colour or 
taste. 
•  Enable the integration of technological tools for digital health and for the corporate 
digital shift. 
            </p>
          }
        ></TwoColumnThreeText>
      </ScrollPanel>

      {/*   ===========================
              =====TRAINING PROGRAM======
              ===========================
        */}

      <ScrollPanel title="sector-of-activities" id="training-program">
      <CenteredFeaturePanel
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
        />
      </ScrollPanel>

      {/*   ===================
              =====SUPPORT=======
              ===================
        */}

      <ScrollPanel title="sector-of-activities" id="support">
      <TwoColumnThreeText
          circleImage={<div className="circle"></div>}
          textUnderImage={<p>FORMULATIONS OF PHARMACEUTICALS</p>}
          titleTextOne={<h2>We Offer</h2>}
          titleTextTwo={<h2>We Work</h2>}
          titleTextThree={<h2>We Help</h2>}
          descTextOne={
            <p>
              Expert formulation services tailored to the needs of
              pharmaceuticals, animal health products, natural health products
              (NHPs), and nutraceuticals. Our services include the development
              and optimization of drug formulations, ensuring efficacy,
              stability, and safety.{" "}
            </p>
          }
          descTextTwo={
            <p>
              To create the appropriate dosage forms—such as tablets, capsules,
              softgels, gummies, creams, liquids, ointments and
              injectables—while adhering to regulatory standards and industry
              best practices.
            </p>
          }
          descTextThree={
            <p>
              With product improvement, process optimization, and ensure that
              formulations meet market requirements for both human and animal
              health sectors.{" "}
            </p>
          }
        ></TwoColumnThreeText>
      </ScrollPanel>

      {/*   =======================
              =====CONTACT FORM======
              =======================
        */}

      <ScrollPanel title="sector-of-activities" id="contact-us-form">
        <ContactUsForm />
      </ScrollPanel>

      <Footer />
    </div>
  );
};

export default Sectors;
