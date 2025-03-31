import "./css/Employee.css";
import ReactMarkdown from "react-markdown";

const Employee = ({ member }) => {
  const defaultMember = {
    name: "John Doe",
    about: "This is a default employee profile.",
    image: { url: "/images/default-profile.png" }, // Update with a valid placeholder image
  };

  const finalMember = member || defaultMember;

  const imageUrl =
    Array.isArray(finalMember.image) && finalMember.image.length > 0
      ? finalMember.image[0]?.formats?.small?.url || finalMember.image[0]?.url
      : finalMember.image?.formats?.small?.url || finalMember.image?.url;

  return (
    <div className="employee-card">
      <h3>{finalMember.name}</h3>

      {imageUrl && (
        <img
          className="employee-card-img"
          src={`${imageUrl}`}
          alt={finalMember.name}
        />
      )}

      <ReactMarkdown>
        {finalMember.about
          ? finalMember.about
          : "No about information available"}
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
