import "./css/Sectors.css";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";

const Projects = () => {

  return (
    <div className="sectors scroll-container">

        {/*   ===================
              =====OVERVIEW======
              ===================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>OVERVIEW</p>

      </ScrollPanel>

        {/*   ====================
              =====PROJECT 1======
              ====================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>PROJECT 1</p>
        
      </ScrollPanel>

        {/*   ====================
              =====PROJECT 2======
              ====================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>PROJECT 2</p>
        
      </ScrollPanel>

        {/*   ==========================
              =======PROJECT 3==========
              ==========================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>PROJECT 3</p>
        
      </ScrollPanel>

        {/*   ======================
              ======PROJECT 4=======
              ======================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>PROJECT 4</p>
        
      </ScrollPanel>

        {/*   ======================
              ======PROJECT 5=======
              ======================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>PROJECT 5</p>
        
      </ScrollPanel>

        {/*   =========================
              ========PROJECT 6========
              =========================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>PROJECT 6</p>
        
      </ScrollPanel>

        {/*   =================================
              =============PROJECT 7===========
              =================================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>PROJECT 7</p>
        
      </ScrollPanel>

        {/*   =======================
              =====CONTACT FORM======
              =======================
        */}

      <ScrollPanel colorTheme="themeA" className="scroll-panel">
        <ContactUsForm />
        
      </ScrollPanel>

      <Footer />
    </div>
    );
};

export default Projects;