import "./css/Employee.css";
import ReactMarkdown from "react-markdown";

const Employee = ({ member }) => {
  const defaultMember = {
    Name: "John Doe",
    Title: "This is a default employee profile.",
    Picture: "/photos/placeholder.jpg",
  };

  const finalMember = member || defaultMember;

  // Use placeholder if Picture is empty
  const imageUrl =
    finalMember.Picture && finalMember.Picture !== ""
      ? finalMember.Picture
      : "/photos/placeholder.jpg";

  return (
    <div
      className="employee-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
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
