import { useEffect, useState } from "react";
import axios from "axios";
import Employee from "../components/uicomponents/Employee.js";
import Footer from "../components/layouts/Footer.js";
import ScrollPanel from "../components/layouts/ScrollPanel";
import EmblaCarousel from "../components/interactables/EmblaCarousel.js";
import SideBySidePanel from "../components/panels/SideBySidePanel";
import StockImageFetch from "../components/placeholders/StockImageFetch";
import ThreeColumnPanel from "../components/panels/ThreeColumnPanel.js";
import useScrollToPanel from "../hooks/useScrollToPanel";
import "./css/About.css";

const About = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const options = { loop: true };

  useEffect(() => {
    axios
      .get(
        "https://celebrated-approval-6e3b18d4f7.strapiapp.com/api/staffs?populate=image"
      )
      .then((response) => {
        setTeam(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  useScrollToPanel();

  return (
    <div>
      <div className="about scroll-container">
        {/* OVERVIEW */}
        <ScrollPanel colorTheme="themeA" title="about" id="overview">
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

        {/* FACILITIES */}
        <ScrollPanel colorTheme="themeA" title="about" id="facilities">
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

        {/* OUR TEAM */}
        <ScrollPanel colorTheme="themeA" title="about" id="our-team">
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

        {/* FACILITIES */}
        <ScrollPanel colorTheme="themeA" title="about" id="facilities">
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

        {/* PARTNERS */}
        <ScrollPanel colorTheme="themeB" title="about" id="partners">
          <div>
            <h1>hello</h1>
          </div>
        </ScrollPanel>

        {/* CERASP VIDEOS */}
        <ScrollPanel colorTheme="themeA" title="about" id="cerasp-videos">
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

        {/* PRIVACY POLICY */}
        <ScrollPanel colorTheme="themeA" title="about" id="">
          <h2>Privacy policy</h2>
        </ScrollPanel>

        <Footer />
      </div>
    </div>
  );
};

export default About;
