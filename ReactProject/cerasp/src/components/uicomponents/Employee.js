import "./css/Employee.css";
import ReactMarkdown from "react-markdown";

const Employee = ({ member }) => {
  const defaultMember = {
    name: "John Doe",
    role: "This is a default employee profile.",
    photo: "default-profile.png",
  };

  const finalMember = member || defaultMember;

  // Check if photo is an empty string, and use placeholder if so
  const imageUrl =
    finalMember.photo && finalMember.photo !== ""
      ? `/team/photos/${finalMember.photo}`
      : "/photos/placeholder.jpg"; // Use placeholder if photo is empty string

  return (
    <div className="employee-card">
      <h3>{finalMember.name}</h3>

      <img
        className="employee-card-img"
        src={imageUrl}
        alt={finalMember.name}
      />

      <ReactMarkdown>
        {finalMember.role ? finalMember.role : "No about information available"}
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
