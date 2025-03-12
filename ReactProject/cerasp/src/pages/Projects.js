import "./css/Sectors.css";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";
import useScrollToPanel from "../hooks/useScrollToPanel.js";

const Projects = () => {
  useScrollToPanel();

  return (
    <div className="scroll-container">
      {/*   ===================
              =====OVERVIEW======
              ===================
        */}

      <ScrollPanel title="projects" id="project">
        <p>OVERVIEW</p>
      </ScrollPanel>

      {/*   ====================
              =====PROJECT 1======
              ====================
        */}

      <ScrollPanel title="projects" id="project-1">
        <p>PROJECT 1</p>
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
        <p>PROJECT 3</p>
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
