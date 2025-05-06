import "./Pages-css/Sectors.css";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";
import ProjectOverview from "../components/panels/projectpanels/ProjectOverview.js";
import ProjectPanelA from "../components/panels/projectpanels/ProjectPanelA.js";
import ProjectPanelB from "../components/panels/projectpanels/ProjectPanelB.js";
import ProjectPanelC from "../components/panels/projectpanels/ProjectPanelC.js";
import ProjectPanelD from "../components/panels/projectpanels/ProjectPanelD.js";
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
        <ProjectPanelB
          topImage={
            <StockImageFetch
              searchTerm={"chemistry"}
              imgSource="large"
              orientation="landscape"
              page={2}
              perPage={1}
            />
          }
          title={"Project B"}
          quote={"Lorem Ipsum a quote here"}
          bottomLeftImage={
            <StockImageFetch
              searchTerm={"chemistry"}
              imgSource="large"
              orientation="landscape"
              page={6}
              perPage={1}
            />
          }
          bottomCenterImage={
            <StockImageFetch
              searchTerm={"chemistry"}
              imgSource="large"
              orientation="landscape"
              page={5}
              perPage={1}
            />
          }
          headline={`This is a headline about this upcoming project.  
            It will give a brief overview of the project. 
             Visitors can click to read more if there is a PDF provided.`}
        />
      </ScrollPanel>

      {/*   ==========================
              =======PROJECT 3==========
              ==========================
        */}

      <ScrollPanel title="projects" id="project-3">
        <ProjectPanelC
          middleImage={
            <StockImageFetch
              searchTerm={"pattern"}
              imgSource="original"
              orientation="landscape"
              page={1}
              perPage={1}
            />
          }
          bottomLeftImage={
            <StockImageFetch
              searchTerm={"high-tech"}
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
        <ProjectPanelB
          topImage={
            <StockImageFetch
              searchTerm={"chemistry"}
              imgSource="large"
              orientation="landscape"
              page={2}
              perPage={1}
            />
          }
          title={"Project B"}
          quote={"Lorem Ipsum a quote here"}
          bottomLeftImage={
            <StockImageFetch
              searchTerm={"chemistry"}
              imgSource="large"
              orientation="landscape"
              page={6}
              perPage={1}
            />
          }
          bottomCenterImage={
            <StockImageFetch
              searchTerm={"chemistry"}
              imgSource="large"
              orientation="landscape"
              page={5}
              perPage={1}
            />
          }
          headline={`This is a headline about this upcoming project.  
            It will give a brief overview of the project. 
             Visitors can click to read more if there is a PDF provided.`}
        />
      </ScrollPanel>

      {/*   ======================
              ======PROJECT 5=======
              ======================
        */}

      <ScrollPanel title="projects" id="project-5">
        <ProjectPanelC
          middleImage={
            <StockImageFetch
              searchTerm={"pattern"}
              imgSource="original"
              orientation="landscape"
              page={1}
              perPage={1}
            />
          }
          bottomLeftImage={
            <StockImageFetch
              searchTerm={"high-tech"}
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

      {/*   =========================
              ========PROJECT 6========
              =========================
        */}

      <ScrollPanel title="projects" id="project-6">
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
          title={"Project 6"}
          headline={`About the Project`}
          textContent={`"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
            accompanied by English versions from the 1914 translation by H. Rackham."`}
        />
      </ScrollPanel>

      {/*   =================================
              =============PROJECT 7===========
              =================================
        */}

      <ScrollPanel title="projects" id="project-7">
        <ProjectPanelD
          title={"PROJECT 7"}
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

      {/*   =======================
              =====CONTACT FORM======
              =======================
        */}

      <ScrollPanel title="projects" id="contact-us-form">
        <ContactUsForm />
      </ScrollPanel>

      <Footer />
    </div>
  );
};

export default Projects;
