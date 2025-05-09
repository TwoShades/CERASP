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
    <div
      className="employee-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h3>{member.name}</h3>
      <div>
        <p>{member.role}</p>
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
    </div>
  );
};

export default Employee;
