import { useEffect, useState } from "react";
import axios from "axios";
import Employee from "../components/Employee.js";
import ScrollPanel from "../components/ScrollPanel";
import "./About.css";

const About = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://victorious-luck-26690475b0.strapiapp.com/api/employees?populate=image"
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

  return (
    <div>
      <div className="scroll-container">
        <ScrollPanel bgColor="#444" txtColor="#fff">
          <h2>History</h2>
        </ScrollPanel>

        <ScrollPanel bgColor="#222" txtColor="#fff">
          <h2>Mission/Vision/Values</h2>
        </ScrollPanel>

        <ScrollPanel bgColor="#333" txtColor="#fff">
          <div className="team-section">
            <h2>Team</h2>
            <div className="team-container">
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error}</p>}
              {team.map((member) => (
                <Employee key={member.id} member={member} />
              ))}
            </div>
          </div>
        </ScrollPanel>

        <ScrollPanel bgColor="#444" txtColor="#fff">
          <h2>Facilities</h2>
        </ScrollPanel>

        <ScrollPanel bgColor="#222" txtColor="#fff">
          <h2>Board</h2>
        </ScrollPanel>

        <ScrollPanel bgColor="#333" txtColor="#fff">
          <h2>Partners</h2>
        </ScrollPanel>

        <ScrollPanel bgColor="#444" txtColor="#fff">
          <h2>Video about CERASP</h2>
        </ScrollPanel>

        <ScrollPanel bgColor="#222" txtColor="#fff">
          <h2>Privacy policy</h2>
        </ScrollPanel>
      </div>
    </div>
  );
};

export default About;
