import "./css/Employee.css";
import ReactMarkdown from "react-markdown";

const Employee = ({ member }) => {
  const defaultMember = {
    Name: "John Doe",
    Title: "This is a default employee profile.",
    LinkedIn: "https://www.linkedin.com/",
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
      <a
        href={finalMember.LinkedIn || "https://www.linkedin.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Background image div */}
        <div
          className="employee-background"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </a>

      {/* Blue paper background div */}
      <div className="employee-blue-paper-background" />

      {/* Content */}
      <h3>{finalMember.Name}</h3>
      <div>
        <p>{finalMember.Title}</p>
        <a
          href={finalMember.LinkedIn || "https://www.linkedin.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {finalMember.LinkedIn && (
            <img
              className="linkedin"
              src="/logos/linkedinlogo.png"
              alt="LinkedIn Logo"
            />
          )}
        </a>
      </div>
    </div>
  );
};

export default Employee;
