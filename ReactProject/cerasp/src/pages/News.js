import "./css/Sectors.css";
import ScrollPanel from "../components/layouts/ScrollPanel.js";
import Footer from "../components/layouts/Footer.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";

const News = () => {

  return (
    <div className="news scroll-container">

        {/*   ===================
              =====OVERVIEW======
              ===================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>OVERVIEW</p>

      </ScrollPanel>

        {/*   ============================
              =====Equipment Updates======
              ============================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>Equipment Updates</p>
        
      </ScrollPanel>

        {/*   =====================
              =====New Grants======
              =====================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>New Grants</p>
        
      </ScrollPanel>

        {/*   =====================================
              =======Blogs & white papers==========
              =====================================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>Blogs & white papers</p>
        
      </ScrollPanel>

        {/*   =====================
              ======Webinars=======
              =====================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>Webinars</p>
        
      </ScrollPanel>

        {/*   ===================
              ======Events=======
              ===================
        */}

      <ScrollPanel colorTheme="themeB" className="scroll-panel">
        <p>Events</p>
        
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

export default News;