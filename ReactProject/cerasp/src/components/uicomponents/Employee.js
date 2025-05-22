import "./css/Employee.css";
import ReactMarkdown from "react-markdown";

const Employee = ({ member }) => {
  const defaultMember = {
    Name: "John Doe",
    Title: "This is a default employee profile.",
    Picture: "/photos/placeholder.jpg",
  };

  const finalMember = member || defaultMember;

  const imageUrl =
    finalMember.Picture && finalMember.Picture !== ""
      ? finalMember.Picture
      : "/photos/placeholder.jpg";

  return (
    <div className="employee-card">
      {/* Background image div */}
      <div
        className="employee-background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Blue paper background div */}
      <div className="employee-blue-paper-background" />

      {/* Content */}
      <h3>{finalMember.Name}</h3>
      <div>
        <p>{finalMember.Title}</p>
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
