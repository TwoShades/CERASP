import "./css/Sectors.css";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import ProjectOverview from "../components/panels/projectpanels/ProjectOverview.js";
import ProjectPanelA from "../components/panels/projectpanels/ProjectPanelA.js";
import ProjectPanelC from "../components/panels/projectpanels/ProjectPanelC.js";
import StockImageFetch from "../components/placeholders/StockImageFetch.js";

const Projects = () => {
  useScrollToPanel();

  return (
    <div className="scroll-container">
      {/*   ===================
              =====OVERVIEW======
              ===================
        */}

      <ScrollPanel title="projects" id="overview">
        <ProjectOverview />
      </ScrollPanel>

      {/*   ====================
              =====PROJECT 1======
              ====================
        */}

      <ScrollPanel title="projects" id="project-1">
        <ProjectPanelA
          image={
            <StockImageFetch
              searchTerm={"chemistry"}
              imgSource="large"
              orientation="landscape"
              page={2}
              perPage={1}
            />
          }
          headline={`About the Project`}
          textContent={`"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
            accompanied by English versions from the 1914 translation by H. Rackham."`}
        />
      </ScrollPanel>

      {/*   ====================
              =====PROJECT 2======
              ====================
        */}

      <ScrollPanel title="projects" id="project-2">
        <p>PROJECT 2</p>
      </ScrollPanel>

      {/*   ==========================
              =======PROJECT 3==========
              ==========================
        */}

      <ScrollPanel title="projects" id="project-3">
        <ProjectPanelC
          middleImage={
            <StockImageFetch
              searchTerm={"montreal"}
              imgSource="original"
              orientation="landscape"
              page={3}
              perPage={1}
            />
          }
          bottomLeftImage={
            <StockImageFetch
              searchTerm={"skyline"}
              imgSource="large"
              orientation="landscape"
              page={3}
              perPage={1}
            />
          }
          headline={`The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"`}
          textContent={`"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
            accompanied by English versions from the 1914 translation by H. Rackham." "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
            accompanied by English versions from the 1914 translation by H. Rackham."`}
        />
      </ScrollPanel>

      {/*   ======================
              ======PROJECT 4=======
              ======================
        */}

      <ScrollPanel title="projects" id="project-4">
        <p>PROJECT 4</p>
      </ScrollPanel>

      {/*   ======================
              ======PROJECT 5=======
              ======================
        */}

      <ScrollPanel title="projects" id="project-5">
        <p>PROJECT 5</p>
      </ScrollPanel>

      {/*   =========================
              ========PROJECT 6========
              =========================
        */}

      <ScrollPanel title="projects" id="project-6">
        <p>PROJECT 6</p>
      </ScrollPanel>

      {/*   =================================
              =============PROJECT 7===========
              =================================
        */}

      <ScrollPanel title="projects" id="project-7">
        <p>PROJECT 7</p>
      </ScrollPanel>

      {/*   =======================
              =====CONTACT FORM======
              =======================
        */}

      <ScrollPanel title="projects" id="">
        <ContactUsForm />
      </ScrollPanel>

      <Footer />
    </div>
  );
};

export default Projects;
