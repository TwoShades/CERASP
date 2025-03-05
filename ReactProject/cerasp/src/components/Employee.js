import "./css/Employee.css";
import ReactMarkdown from "react-markdown";

const Employee = ({ member }) => {
  // Extract image URL properly
  const imageUrl =
    Array.isArray(member.image) && member.image.length > 0
      ? member.image[0]?.formats?.small?.url || member.image[0]?.url
      : member.image?.formats?.small?.url || member.image?.url;
  console.log({ imageUrl });
  return (
    <div className="employee-card">
      <h3>{member.name}</h3>

      {imageUrl && (
        <img
          className="employee-card-img"
          src={`${imageUrl}`}
          alt={member.name}
        />
      )}

      <ReactMarkdown>
        {member.about ? member.about : "No about information available"}
      </ReactMarkdown>

      <a
        href="https://ca.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="linkedin"
          src="/logos/linkedinlogo.png"
          alt="LinkedIn Logo"
        />
      </a>
    </div>
  );
};

export default Employee;
