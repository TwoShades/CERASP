import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const navigate = useNavigate();

  const sections = [
    "overview",
    "our-team",
    "facilities",
    "partners",
    "cerasp-videos",
  ];

  const handleNavigateToSection = (section) => {
    navigate("/about", { state: { scrollTo: section } });
  };

  return (
    <div>
      <h1>Solutions</h1>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            onClick={() => handleNavigateToSection(section)}
            style={{
              cursor: "pointer",
              margin: "5px 0",
              textDecoration: "underline",
            }}
          >
            {section.replace("-", " ")} {/* Display human-readable text */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Solutions;
