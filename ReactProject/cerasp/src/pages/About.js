import { useEffect, useState } from "react";
import axios from "axios";
import Employee from "../components/Employee.js";
import Footer from "../components/Footer.js";
import ScrollPanel from "../components/ScrollPanel";
import EmblaCarousel from "../components/EmblaCarousel.js";
import SideBySidePanel from "../components/SideBySidePanel";
import StockImageFetch from "../components/StockImageFetch";
import ThreeColumnPanel from "../components/ThreeColumnPanel.js";
import PanelGridAndText from "../components/PanelGridAndText.js";
import "./css/About.css";
import TestGrid from "../components/TestGrid.js";

const About = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const options = { loop: true };

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/staffs?populate=image")
      .then((response) => {
        setTeam(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="scroll-container">
        {/*   ===================
              ===WELCOME PANEL===
              ===================
        */}
        <ScrollPanel colorTheme="themeA">
          <SideBySidePanel
            leftContent={
              <StockImageFetch
                searchTerm="microscope"
                imgSource="large"
                orientation="portrait"
                page={1}
                perPage={4}
              />
            }
            rightContent={
              <div>
                <h2>Welcome to CERASP</h2>
                <p>
                  CERASP is a Technology Transfer Center (TTCC) in the
                  pharmaceutical sciences and related industries. We are an
                  applied research center specialized in supporting SMEs in
                  their product formulations, prototypes, troubleshooting, and
                  regulatory affairs (Health Canada partner), as well as in the
                  development of production processes and protocols. We support
                  you in preparing for audits and verifications carried out by
                  Health Canada and the FDA. We are also an academic grant
                  partner, with many grants reserved for TCCs through government
                  agencies. Our mandate is to help SMEs commercialize their
                  products and ensure that the intellectual property remains
                  entirely in their hands.
                </p>
              </div>
            }
          />
        </ScrollPanel>

        {/*   ===================
              =====OUR STORY=====
              ===================
        */}
        <ScrollPanel colorTheme="themeB">
          <div className="content-container">
            <div className="image-container">
              {/* <img src="https://via.placeholder.com/400" alt="Placeholder" /> */}
            </div>
            <div className="text-container">
              <h2>Our Story</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
                malesuada. Donec in tortor id lacus fringilla tempor nec non ex.
              </p>
            </div>
          </div>
        </ScrollPanel>

        {/*   ====================
              ====THREE COLUMN====
              ====================
        */}
        <ScrollPanel colorTheme="themeA">
          <ThreeColumnPanel
            topRowContent={
              <>
                <h1>Expertise & Solution</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Molestie ac viverra
                  vitae enim ut.
                </p>
              </>
            }
            col1Content={
              <StockImageFetch
                searchTerm="microscope"
                imgSource="large"
                orientation="portrait"
                page={1}
                perPage={1}
              />
            }
            col2Content={
              <StockImageFetch
                searchTerm="petri"
                imgSource="large"
                orientation="portrait"
                page={1}
                perPage={1}
              />
            }
            col3Content={
              <StockImageFetch
                searchTerm="bubble"
                imgSource="large"
                orientation="portrait"
                page={1}
                perPage={1}
              />
            }
          />
        </ScrollPanel>

        {/*   ====================
              =====TEAM PANEL=====
              ====================
        */}
        <ScrollPanel colorTheme="themeA">
          <div className="team-section">
            <h2>Team</h2>
            <EmblaCarousel
              slides={team}
              options={options}
              renderSlide={(member) => (
                <Employee key={member.id} member={member} />
              )}
            />
          </div>
        </ScrollPanel>

        {/*   =================
              ====EQUIPMENT====
              =================
           */}
        <ScrollPanel colorTheme="themeA">
          <PanelGridAndText
            p1Content={
              <StockImageFetch
                searchTerm="table"
                imgSource="large"
                orientation="portrait"
                page={1}
                perPage={4}
              />
            }
            p2Content={
              <StockImageFetch
                searchTerm="chemical"
                imgSource="large"
                orientation="portrait"
                page={5}
                perPage={4}
              />
            }
            p3Content={
              <StockImageFetch
                searchTerm="machine"
                imgSource="large"
                orientation="portrait"
                page={1}
                perPage={4}
              />
            }
            p4Content={
              <StockImageFetch
                searchTerm="microscope"
                imgSource="large"
                orientation="portrait"
                page={1}
                perPage={4}
              />
            }
            p5Content={
              <StockImageFetch
                searchTerm="chemical"
                imgSource="large"
                orientation="portrait"
                page={3}
                perPage={1}
              />
            }
            p6Content={
              <StockImageFetch
                searchTerm="machine"
                imgSource="large"
                orientation="portrait"
                page={2}
                perPage={1}
              />
            }
            pTextContent={
              <>
                <h2>Equipment</h2>
                <p>
                  Our equipment is state-of-the-art and ready to help you with
                  your research and development needs.
                </p>
                <h4 className="clickHere">Learn More</h4>
              </>
            }
          />
        </ScrollPanel>

        {/*   ==================
              ====FACILITIES====
              ==================
        */}
        <ScrollPanel colorTheme="themeA">
          <div className="facilities-section">
            <h2>Facilities</h2>
            <StockImageFetch
              searchTerm="microscope"
              orientation="landscape"
              page={1}
              perPage={4}
            />
          </div>
        </ScrollPanel>

        {/*   ===================
              ====VIDEO PANEL====
              ===================
        */}
        <ScrollPanel colorTheme="themeA">
          <SideBySidePanel
            leftContent={
              <StockImageFetch
                searchTerm="laboratory"
                imgSource="large"
                orientation="portrait"
                page={5}
                perPage={1}
              />
            }
            rightContent={
              <>
                <h1>Video about CERASP</h1>
              </>
            }
          />
        </ScrollPanel>

        {/*   ====================
              ===PRIVACY POLICY===
              ====================
        */}
        <ScrollPanel colorTheme="themeA">
          <h2>Privacy policy</h2>
        </ScrollPanel>

        <Footer />
      </div>
    </div>
  );
};

export default About;
